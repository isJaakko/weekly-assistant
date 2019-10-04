import React from 'react';
import { inject, observer } from 'mobx-react';
import { Form, Input, Icon } from 'antd';
import Card from '_src/components/Card';
import { globalMessage } from '_src/utils';
// import Template from '_src/constants';
import './Editor.less';

// const { TextArea } = Input;
// const { Item } = Form;

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
            title={item.title}
            key={item.key}
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
              // value={item.level === 3
              //   ? `${(index + 1)}、 ${item.title}；`
              //   : item.title
              // }
              value={item.title}
              onChange={(e) => {
                this.handleChange(e, { key: 'title', id: item.id });
              }}
            />
          )}
          key={item.key}
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
    // const formLayout = {
    //   layout: 'vertical',
    //   labelCol: {
    //     xs: { span: 24 },
    //     sm: { span: 4 },
    //   },
    //   wrapperCol: {
    //     xs: { span: 24 },
    //     sm: { span: 16 },
    //   },
    // };
    // console.log(weeklyTree);

    return (
      // <Form className="editor-wrap" {...formLayout}>
      <div className="editor-wrap">
        <Icon
          type="plus-circle"
          theme="twoTone"
          onClick={() => { this.onAdd(-1); }}
        />
        {
          this.renderCardList(weeklyTree)
        }
      </div>
      // </Form>
    );
  }
}
export default Form.create({})(Editor);
