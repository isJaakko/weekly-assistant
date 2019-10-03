import React from 'react';
import { inject, observer } from 'mobx-react';
import { Form, Input } from 'antd';
import Card from '_src/components/Card';
// import Template from '_src/constants';
import './Editor.less';

const { TextArea } = Input;
const { Item } = Form;

@observer
@inject('weeklyStore')
class Editor extends React.Component {
  onAdd = (parentId) => {
    const { weeklyStore } = this.props;
    weeklyStore.addWeeklyItem(parentId);
  }

  render() {
    const { weeklyStore } = this.props;
    const { weeklyList } = weeklyStore;
    const formLayout = {
      layout: 'vertical',
      labelCol: {
        xs: { span: 24 },
        sm: { span: 4 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };


    return (
      <Form className="editor-wrap" {...formLayout}>
        {
          weeklyList.map((item, index) => (
            <Card
              title={item.title}
              key={index}
              // tabList={article && article.map(item => ({ key: item.id, tab: item.text }))}
              onAdd={() => {
                this.onAdd(item.id);
              }}
            >
              <Item label="模块名称">
                <Input />
              </Item>
              <Item label="内容">
                <TextArea />
              </Item>
            </Card>
          ))
        }
      </Form>
    );
  }
}
export default Form.create({})(Editor);
