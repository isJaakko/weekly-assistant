import { message } from 'antd';

// 全局消息
const globalMessage = (type, msg) => {
  return message[type](msg);
};

// 获取query
const getQuery = () => {
  let query = {};
  window.location.search.replace(/\?/, '').split('&')
    // eslint-disable-next-line
    .map((item) => {
      const [key, value] = item.split('=');
      query = {
        ...query,
        [key]: value
      };
    });
  return query;
};

// 复制区域文本
const copyText = (elementName) => {
  const element = document.querySelector(elementName);
  const range = document.createRange();
  range.selectNode(element); // 设定range包含的节点对象

  /* 窗口的selection对象，表示用户选择的文本 */
  const selection = window.getSelection();
  if (selection.rangeCount > 0) selection.removeAllRanges(); // 将已经包含的已选择的对象清除掉
  selection.addRange(range); // 将要复制的区域的range对象添加到selection对象中

  document.execCommand('copy');
  globalMessage('success', '复制成功！');
};

// 获取标点符号
const getPunctuation = (value) => {
  let copyValue = value;
  copyValue = copyValue.replace(/[#/]/g, '');
  const pattern = /[\x21-\x2f\x3a-\x40\x5b-\x60\x7B-\x7F]/g;
  return copyValue.match(pattern);
};

export {
  globalMessage, getQuery, copyText, getPunctuation
};
