import React from 'react';
import { inject, observer } from 'mobx-react';
import { Form, Layout, Input } from 'antd';
import Card from '_src/components/Card';
import Template from '_src/constants';
import Preview from '../Preview';
import './index.less';

const { Sider, Content } = Layout;
const { TextArea } = Input;
const { Item } = Form;

const initChildren = {
  id: 222,
  level: 2,
  text: 'new',
  children: []
};

@observer
@inject('articleStore')
class Editor extends React.Component {
  render() {
    const { articleStore } = this.props;
    const { article } = articleStore;
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
      <Layout>
        <Sider>
          <Form {...formLayout}>
            {
              Template.map((item) => {
                return (
                  <Card
                    title={item.title}
                    key={item.key}
                    // tabList={article && article.map(item => ({ key: item.id, tab: item.text }))}
                    onAdd={() => {

                    }}
                  // tabList={['tab1', 'tab2']}
                  >
                    <Item label="模块名称">
                      <Input />
                    </Item>
                    <Item label="内容">
                      <TextArea />
                    </Item>
                  </Card>
                );
              })
            }
          </Form>
        </Sider>
        <Content>
          <Preview />
        </Content>
      </Layout>
    );
  }
}
export default Form.create({})(Editor);
