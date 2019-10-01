import React from 'react';
import { inject, observer } from 'mobx-react';
// import classNames from 'classnames';
// import template from '_src/constants';

@inject('weeklyStore')
@observer
export default class Preview extends React.Component {
  render() {
    return (
      <div className="preview-wrap">
        {/* {
        template.map((item, index) => (
          <div
            key={index}
            className={classNames('template-title', {
              'template-alarm-title': item.type === 'alarm',
            })}
          >
            {item.title}
            {article && Object.keys(article).map((key, index) => {
              return (<div key={index}>
                {article[key].text}
              </div>)
            })}
          </div>
        ))
      } */}
      </div>
    );
  }
}
