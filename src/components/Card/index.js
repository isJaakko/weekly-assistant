import React from 'react';
import { Card, Icon, Checkbox } from 'antd';
import './index.less';

export default class ArticleCard extends React.PureComponent {
  render() {
    const {
      children,
      checked, onChange, checkedText,
      onAdd, onDelete, ...restProps
    } = this.props;
    return (
      <Card
        className="card-wrap"
        extra={(
          <React.Fragment>
            <Checkbox
              checked={checked}
              onChange={typeof onChange === 'function' ? onChange : (() => { })}
            >
              {checkedText || '显示'}
            </Checkbox>
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
