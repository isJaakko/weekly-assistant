import React from 'react';
import { inject, observer } from 'mobx-react';
import { Form, Input } from 'antd';
import Card from '_src/components/Card';
import Template from '_src/constants';

const { TextArea } = Input;
const { Item } = Form;

@observer
@inject('weeklyStore')
class Editor extends React.Component {
  render() {
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
      <Form {...formLayout}>
        {
          Template.map(item => (
            <Card
              title={item.title}
              key={item.key}
                // tabList={article && article.map(item => ({ key: item.id, tab: item.text }))}
              onAdd={() => {

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
