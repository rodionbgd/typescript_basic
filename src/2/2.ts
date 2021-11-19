export default function sum(val?: number) {
  let result = val || 0;

  function wrapper(val: number) {
    result += val;
    return wrapper;
  }

  wrapper.toString = function toString() {
    return `${result}`;
  };
  return wrapper;
}
