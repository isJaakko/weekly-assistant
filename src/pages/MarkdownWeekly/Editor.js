import React from 'react';
import { inject, observer } from 'mobx-react';
import { Form, Input } from 'antd';
import './Editor.less';

const { TextArea } = Input;

@inject('weeklyStore')
@observer
class Editor extends React.Component {
  onAdd = (parentId) => {
    const { weeklyStore } = this.props;
    weeklyStore.addWeeklyItem(parentId);
  }

  onDelete = (id) => {
    const { weeklyStore } = this.props;
    weeklyStore.deleteWeeklyItem(id);
  }

  render() {
    // const { weeklyStore } = this.props;
    // const { weeklyTree } = weeklyStore;

    return (
      <div className="editor-wrap">
        <TextArea />
      </div>
    );
  }
}
export default Form.create({})(Editor);
