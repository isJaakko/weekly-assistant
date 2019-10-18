import React from 'react';
import { withRouter } from 'react-router-dom';
import { Menu, Icon } from 'antd';

@withRouter
export default class LeftMenu extends React.Component {
  state = {
    currentPath: '/'
  }

  componentDidMount() {
    this.getMenuSelectKeys();
  }

  onClickMenuItem = ({ key }) => {
    this.props.history.push(key);
    this.getMenuSelectKeys();
  }

  getMenuSelectKeys = () => {
    const { pathname } = window.location;
    this.setState({ currentPath: pathname });
  }

  render() {
    const { currentPath } = this.state;

    return (
      <Menu
        theme="light"
        mode="inline"
        selectedKeys={[currentPath]}
        onClick={this.onClickMenuItem}
      >
        <Menu.Item
          key="/"
        >
          <Icon type="edit" />
          <span>Input 编辑器</span>
        </Menu.Item>
        {/* <Menu.Item
          key="/markdown"
        >
          <Icon type="file-markdown" />
          <span>Markdown 编辑器</span>
        </Menu.Item>
        <Menu.Item
          key="/sample"
        >
          <Icon type="question-circle" />
          <span>示例页面</span>
        </Menu.Item> */}
      </Menu>
    );
  }
}
