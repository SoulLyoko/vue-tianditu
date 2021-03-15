/**
 * 生成uuid
 */
export const guid = () => {
  let s = [];
  let hexDigits = "0123456789abcdef";
  for (var i = 0; i < 36; i++) {
    s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
  }
  s[14] = "4"; // bits 12-15 of the time_hi_and_version field to 0010
  s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
  s[8] = s[13] = s[18] = s[23] = "-";

  var uuid = s.join("");
  return uuid;
};

/**
 * 首字母大写
 * @param {String} 字符串
 */
export const capitalize = ([first, ...rest]) => {
  return first.toUpperCase() + rest.join("");
};

/**
 * 过滤掉对象中undefined的属性
 * @param {Object} obj 对象
 */
export const objectFilter = obj => {
  let res = {};
  Object.keys(obj).forEach(key => {
    if (obj[key] !== undefined) {
      res[key] = obj[key];
    }
  });
  return res;
};
