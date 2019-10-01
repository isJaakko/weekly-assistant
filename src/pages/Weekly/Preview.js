import React from 'react';
import { inject, observer } from 'mobx-react';
import classNames from 'classnames';
import template from '_src/constants';

@inject('weeklyStore')
@observer
export default class Preview extends React.Component {
  render() {
    const { weeklyStore } = this.props;
    const { article } = weeklyStore;

    return (
      <div className="preview-wrap">
        {
          template.map((item, index) => (
            <div
              key={index}
              className={classNames('template-title', {
                'template-alarm-title': item.type === 'alarm',
              })}
            >
              {item.title}
              {article && Object.keys(article).map(key => (
                <div key={key}>
                  {/* {article[key].text} */}
                </div>
              ))}
            </div>
          ))
        }
      </div>
    );
  }
}
