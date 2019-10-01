import React from 'react';
import { Card, Icon } from 'antd';
import './index.less';

export default class ArticleCard extends React.PureComponent {
  render() {
    const {
      title, children, onAdd, ...restProps
    } = this.props;
    return (
      <Card
        title={title}
        className="card-wrap"
        extra={(
          <Icon
            type="plus-circle"
            theme="twoTone"
            onClick={typeof onAdd === 'function' ? onAdd : (() => { })}
          />
        )}
        {...restProps}
      >
        {children}
      </Card>
    );
  }
}
