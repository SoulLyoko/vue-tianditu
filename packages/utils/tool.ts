/* eslint-disable @typescript-eslint/no-this-alias,prefer-rest-params */
/**
 * 防抖
 * @param {function} func 要进行debounce的函数
 * @param {number} wait 等待时间,默认500ms
 * @param {boolean} immediate 是否立即执行
 */
export function debounce(func: Function, wait = 500, immediate = false) {
  let timeout: NodeJS.Timeout | undefined;
  return function () {
    // @ts-ignore
    const context = this;
    const args = arguments;

    if (timeout) clearTimeout(timeout);
    if (immediate) {
      // 如果已经执行过，不再执行
      const callNow = !timeout;
      timeout = setTimeout(function () {
        timeout = undefined;
      }, wait);
      if (callNow) func.apply(context, args);
    } else {
      timeout = setTimeout(function () {
        func.apply(context, args);
      }, wait);
    }
  };
}
