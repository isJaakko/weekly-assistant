import React from 'react';
import { inject, observer } from 'mobx-react';
import {
  Form, Input, Button, Icon, Tooltip, Popconfirm
} from 'antd';
import Card from '_src/components/Card';
import constants from '_src/constants';
import base from '_src/constants/base';
import { globalMessage } from '_src/utils';
import Storage from '_src/utils/storage';
import './Editor.less';

const { TextArea } = Input;
const { rootId } = constants;
const { weeklyInstruction } = base;

@inject('weeklyStore')
@observer
class Editor extends React.Component {
  onAdd = (parentId) => {
    const { weeklyStore } = this.props;
    weeklyStore.addWeeklyItem(parentId);
  }

  onDelete = (id) => {
    const { weeklyStore } = this.props;
    weeklyStore.deleteWeeklyItem(id);
  }

  handleChange = (e, { key, id }) => {
    const { weeklyStore } = this.props;
    const { value } = e.target;

    weeklyStore.updateFormInfo('weekly', key, value, id);
  }

  addRootNode = () => {
    this.onAdd(rootId);
  }

  clearHistory = () => {
    const { weeklyStore } = this.props;

    Storage.remove('weeklyList');
    weeklyStore.clearWeeklyList();
  }

  renderCardList = (cardList) => {
    return cardList.map((item) => {
      if (item.children.length) {
        return (
          <Card
            title={(
              <TextArea
                autosize={{ minRows: 1, maxRows: 6 }}
                value={item.title}
                onChange={(e) => {
                  this.handleChange(e, { key: 'title', id: item.id });
                }}
                disabled={!item.show}
              />
            )}
            key={item.key}
            level={item.level}
            checkedText={`显示${item.level}级文本`}
            checked={item.show}
            onChange={(e) => {
              const { weeklyStore } = this.props;
              const { checked } = e.target;
              weeklyStore.updateFormInfo('weekly', 'show', checked, item.id);
            }}
            onAdd={() => {
              this.onAdd(item.id);
            }}
            onDelete={() => {
              globalMessage('warning', '请先删除下级标题');
            }}
          >
            {this.renderCardList(item.children)}
          </Card>
        );
      }
      return (
        <Card
          title={(
            <TextArea
              autosize={{ minRows: 1, maxRows: 6 }}
              value={item.title}
              onChange={(e) => {
                this.handleChange(e, { key: 'title', id: item.id });
              }}
            />
          )}
          key={item.key}
          level={item.level}
          checkedText={`显示${item.level}级文本`}
          checked={item.show}
          onChange={(e) => {
            const { weeklyStore } = this.props;
            const { checked } = e.target;
            weeklyStore.updateFormInfo('weekly', 'show', checked, item.id);
          }}
          onAdd={() => {
            this.onAdd(item.id);
          }}
          onDelete={() => {
            this.onDelete(item.id);
          }}
          bordered={false}
          headStyle={{
            border: 'none'
          }}
          bodyStyle={{
            display: 'none'
          }}
        />
      );
    });
  }

  render() {
    const { weeklyStore } = this.props;
    const { weeklyTree } = weeklyStore;

    return (
      <div className="editor-wrap">
        <Button
          type="primary"
          className="add-root-node-btn"
          onClick={this.addRootNode}
        >
          添加一级标题
        </Button>
        <Popconfirm
          title="确认清除所有内容？"
          onConfirm={this.clearHistory}
          okText="确认"
          cancelText="取消"
        >
          <Button
            type="danger"
            className="add-root-node-btn"
          >
            清除
          </Button>
        </Popconfirm>
        <Tooltip
          trigger="hover"
          title={weeklyInstruction}
        >
          <Icon type="question-circle" />
        </Tooltip>
        {
          this.renderCardList(weeklyTree)
        }
      </div>
    );
  }
}
export default Form.create({})(Editor);
