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

export {
  globalMessage, getQuery
};
