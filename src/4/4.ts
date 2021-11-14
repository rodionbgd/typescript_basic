export default function semverSort(arr: string[]) {
  if (!arr || !arr.length) return [];
  let max = arr[0].split(".").length;
  const tmpArr = arr.map((value) => {
    const val = value.split(".");
    if (val.length > max) {
      max = val.length;
    }
    return val;
  });

  function sort(semverArrIn: string[][]) {
    let semverArr = [...semverArrIn];
    for (let i = max - 1; i >= 0; i -= 1) {
      semverArr = semverArr.sort((a, b) => Number(a[i]) - Number(b[i]));
    }
    return semverArr;
  }

  return sort(tmpArr).map((val) => val.join("."));
}
