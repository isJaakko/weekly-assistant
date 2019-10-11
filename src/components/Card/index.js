import React from 'react';
import { Card, Icon, Checkbox } from 'antd';
import constants from '_src/constants';
import './index.less';

const { MAX_LEVEL } = constants;

export default class ArticleCard extends React.PureComponent {
  render() {
    const {
      children,
      level, checked, onChange, checkedText,
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
            {
              level <= MAX_LEVEL
                ? (
                  <Icon
                    type="plus-circle"
                    theme="twoTone"
                    onClick={typeof onAdd === 'function' ? onAdd : (() => { })}
                  />
                ) : null
            }
          </React.Fragment>
        )}
        {...restProps}
      >
        {children}
      </Card>
    );
  }
}
