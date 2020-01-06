import React from 'react';
import { withRouter } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import { Popconfirm, Radio, Button } from 'antd';
import Preview from '_src/components/Preview';
import Editor from '_src/components/CodeMirrorEditor';
import Constants from '_src/constants';
import './index.less';

const { MarkdownTypeEnum } = Constants;
const { common, tl, demo } = MarkdownTypeEnum;
@withRouter
@inject('markdownStore')
@observer
export default class MarkdownWeekly extends React.Component {
  constructor(...props) {
    super(...props);

    this.state = {
      previewVisible: true
    };
  }

  toSample = () => {
    this.props.history.push('/sample');
  }

  render() {
    const { previewVisible } = this.state;
    const { markdownStore } = this.props;
    const { markdownType } = markdownStore;
    const mdSource = markdownStore[markdownType];

    return (
      <div className="markdown-weekly-wrap">

        <div className="flex flex-justify-center">
          <Radio.Group
            defaultValue={markdownType}
            buttonStyle="outline"
            onChange={(e) => {
              const type = e.target.value;
              markdownStore.updateMarkdownType(type);
            }}
          >
            <Radio.Button value={common}>个人模板</Radio.Button>
            <Radio.Button value={tl}>TL 模板</Radio.Button>
            <Radio.Button value={demo}>示例模板</Radio.Button>
          </Radio.Group>
        </div>

        <div className="flex tool-bar">
          <Popconfirm
            title="当前操作将清除所有已写内容，确认继续？"
            onConfirm={markdownStore.clearWeekly}
            okText="确认"
            cancelText="取消"
          >
            <Button
              className="tool-item clear-btn"
              type="danger"
            >
              初始化
            </Button>
          </Popconfirm>
        </div>

        <div className="flex weekly-flex-wrap">
          <Editor
            className="markdown-editor"
            value={mdSource}
            onBeforeChange={(editor, data, value) => {
              markdownStore.updateMdText(value);
            }}
          />
          {/* eslint-disable-next-line */}
          <div
            className="divider"
            role="button"
            title={previewVisible ? '点击折叠预览面板' : '点击展开预览面板'}
            onClick={() => {
              this.setState((preState) => {
                return {
                  previewVisible: !preState.previewVisible
                };
              });
            }}
          />
          <Preview
            className="markdown-preview"
            source={mdSource}
            style={{ display: previewVisible ? 'block' : 'none' }}
          />
        </div>
      </div>
    );
  }
}
