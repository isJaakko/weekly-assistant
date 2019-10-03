import React from 'react';
import { Card, Icon } from 'antd';
import './index.less';

export default class ArticleCard extends React.PureComponent {
  render() {
    const {
      title, children, onAdd, onDelete, ...restProps
    } = this.props;
    return (
      <Card
        title={title}
        className="card-wrap"
        extra={(
          <React.Fragment>
            <Icon
              type="minus-circle"
              theme="twoTone"
              onClick={typeof onDelete === 'function' ? onDelete : (() => { })}
            />
            <Icon
              type="plus-circle"
              theme="twoTone"
              onClick={typeof onAdd === 'function' ? onAdd : (() => { })}
            />
          </React.Fragment>
        )}
        {...restProps}
      >
        {children}
      </Card>
    );
  }
}
