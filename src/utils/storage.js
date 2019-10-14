export default class storage {
  // 获取 storage
  static get(key) {
    const value = localStorage[key];
    if (value !== undefined) {
      return JSON.parse(value);
    }

    return null;
  }

  // 设置 storage
  static set(key, value) {
    localStorage[key] = JSON.stringify(value);
  }

  // 清除 storage
  static remove(key) {
    localStorage.removeItem(key);
  }
}
