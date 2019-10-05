import React from 'react';
import { inject, observer } from 'mobx-react';
import { Form, Input, Icon } from 'antd';
import Card from '_src/components/Card';
import { globalMessage } from '_src/utils';
import constants from '_src/constants';
import './Editor.less';

const { rootId } = constants;

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
    // const { updateFormInfo } = weeklyStore;
    const { value } = e.target;

    weeklyStore.updateFormInfo('weekly', key, value, id);
  }

  renderCardList = (cardList) => {
    return cardList.map((item) => {
      if (item.children.length) {
        return (
          <Card
            title={(
              <Input
                value={item.title}
                onChange={(e) => {
                  this.handleChange(e, { key: 'title', id: item.id });
                }}
                disabled={!item.show}
              />
            )}
            key={item.key}
            // checkedText="显示文本"
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
            <Input
              value={item.title}
              onChange={(e) => {
                this.handleChange(e, { key: 'title', id: item.id });
              }}
            />
          )}
          key={item.key}
          // checkedText="显示文本"
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
        <Icon
          type="plus-circle"
          theme="twoTone"
          onClick={() => { this.onAdd(rootId); }}
        />
        {
          this.renderCardList(weeklyTree)
        }
      </div>
    );
  }
}
export default Form.create({})(Editor);
