import { message } from 'antd';

const globalMessage = (type, msg) => {
  return message[type](msg);
};

export {
  globalMessage
};
