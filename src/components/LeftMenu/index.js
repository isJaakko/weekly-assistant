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
          <span>编辑周报</span>
        </Menu.Item>
        <Menu.Item
          key="/markdown"
        >
          <Icon type="file-markdown" />
          <span>markdown</span>
        </Menu.Item>
      </Menu>
    );
  }
}
