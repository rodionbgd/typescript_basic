export default function snail(arrIn: readonly number[][]) {
  let arr = JSON.parse(JSON.stringify(arrIn));
  let type = "LEFT";
  let length;
  const result = [];
  if (!arr || !arr[0]) {
    return [];
  }
  while (type !== "END") {
    switch (type) {
      case "LEFT":
        length = arr[0].length;
        for (let i = 0; i < length; i += 1) {
          result.push(arr[0][0]);
          arr[0].shift();
        }
        arr = arr.splice(1);
        type = "TOP";
        if (!arr.length) {
          type = "END";
        }
        break;
      case "TOP":
        for (let i = 0; i < arr.length; i += 1) {
          result.push(arr[i][arr[i].length - 1]);
          arr[i].pop();
        }
        type = "RIGHT";
        break;
      case "RIGHT":
        for (let i = arr[0].length - 1; i >= 0; i -= 1) {
          result.push(arr[arr.length - 1][i]);
          arr[arr.length - 1].pop();
        }
        arr = arr.splice(0, arr.length - 1);
        type = "BOTTOM";
        if (!arr.length) {
          type = "END";
        }
        break;
      case "BOTTOM":
        for (let i = arr.length - 1; i >= 0; i -= 1) {
          result.push(arr[i][0]);
          arr[i].shift();
        }
        type = "LEFT";
        break;
      default:
        break;
    }
  }
  return result;
}
