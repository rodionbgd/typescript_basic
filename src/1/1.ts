export type sumType = (
  a: number,
  b: number,
  c: number,
  d: number,
  e: number,
  f: number
) => number;

export function hof(func: sumType): (...argsWrapped1: number[]) => any {
  return function wrapper1(this: sumType, ...argsWrapped1: number[]): any {
    if (argsWrapped1.length >= func.length) {
      let sum;
      try {
        sum = func.apply(this, argsWrapped1 as Parameters<sumType>);
      } catch (e) {
        throw e;
      }
      return sum;
    }
    return function wrapper2(
      this: any,
      ...argsWrapped2: number[]
    ): (this: sumType, ...argsWrapped1: number[]) => number {
      return wrapper1.apply(
        this,
        argsWrapped1.concat(argsWrapped2) as Parameters<sumType>
      );
    };
  };
}

export const sum: sumType = function sum(a, b, c, d, e, f) {
  const res = [...(arguments as unknown as Parameters<sumType>)].reduce(
    // eslint-disable-line
    (num1, num2) => num1 + num2
  );
  if (Number.isNaN(Number(res))) {
    throw Error("NaN");
  }
  return res;
};

// export type SixLengthTuple = [number, number, number, number, number, number];
// export type sumType = (args: SixLengthTuple) => number;
// export type wrapper1Type = (this: sumType, argsWrapped1: Partial<SixLengthTuple> | number) => ReturnType<sumType> | wrapper1Type;
//
// export function hof(func: sumType): wrapper1Type {
//     return function wrapper1(this: sumType, argsWrapped1: Partial<SixLengthTuple> | number): ReturnType<sumType> | wrapper1Type {
//         if (typeof argsWrapped1 === "number") {
//             argsWrapped1 = [argsWrapped1];
//         }
//         if (argsWrapped1?.length >= func.length) {
//             let sum;
//             try {
//                 sum = func.apply(this, [argsWrapped1 as SixLengthTuple]);
//             } catch (e) {
//                 throw e;
//             }
//             return sum;
//         }
//         return (argsWrapped2: Partial<SixLengthTuple> | number): wrapper1Type => {
//             if (typeof argsWrapped1 === "number") {
//                 argsWrapped1 = [argsWrapped1];
//             }
//             return wrapper1.apply(this, [argsWrapped1.concat(argsWrapped2) as SixLengthTuple]) as wrapper1Type;
//         }
//     };
// }
//
// export const sum: sumType = function sum(args: SixLengthTuple) {
//     const res = Array.from(args).reduce((num1, num2) => num1 + num2);
//     if (Number.isNaN(Number(res))) {
//         throw Error("NaN");
//     }
//     return res;
// };
