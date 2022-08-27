require("../index");

// test("first", () => {
//   expect([].first()).toBe(null);
//   expect([].first(null)).toBe(null);
//   expect([].first(1)).toBe(1);
//   expect(["aaa", "bbb"].first()).toBe("aaa");
// });

// test("last", () => {
//   expect([].last()).toBe(null);
//   expect([].last(null)).toBe(null);
//   expect([].last(1)).toBe(1);
//   expect(["aaa", "bbb"].last()).toBe("bbb");
// });

// test("unique", () => {
//   const arr = [1, 2, 3, 5, 5, 6, 6];

//   expect(JSON.stringify(arr.unique())).toBe(JSON.stringify([1, 2, 3, 5, 6]));

//   const arrObj = [
//     { key: "test1", z: true },
//     { key: "test1", z: false },
//     { key: "test2" },
//     { key: "test3" },
//   ];
//   expect(JSON.stringify(arrObj.unique((v) => v.key))).toBe(
//     JSON.stringify([
//       { key: "test1", z: true },
//       { key: "test2" },
//       { key: "test3" },
//     ])
//   );
// });

// test("array_stds", () => {
//   let targets = [];
//   for (let i = 0; i < Number.MAX_SAFE_INTEGER; i++) {
//     targets.push(
//       Math.floor(Math.random() * Math.floor(Number.MAX_SAFE_INTEGER))
//     );
//   }

//   const timeChecker = (func) => {
//     const startTime = new Date();
//     func();
//     const endTime = new Date();
//     return endTime - startTime;
//   };

//   let resMes = [];

//   for (let i = 0; i < 10; i++) {
//     //  map
//     resMes.push(`map: ${timeChecker(() => targets.map((v) => v * 2))}`);
//     resMes.push(`_map: ${timeChecker(() => targets._map((v) => v * 2))}`);
//     //  filter
//     resMes.push(`filter: ${timeChecker(() => targets.filter((v) => v % 2))}`);
//     resMes.push(`_filter: ${timeChecker(() => targets._filter((v) => v % 2))}`);
//     //  some
//     resMes.push(
//       `some: ${timeChecker(() =>
//         targets.some((v) => v == targets[(i + 1) * 1000 - 1])
//       )}`
//     );
//     resMes.push(
//       `_some: ${timeChecker(() =>
//         targets._some((v) => v == targets[(i + 1) * 1000 - 1])
//       )}`
//     );
//     //  forEach
//     resMes.push(`forEach: ${timeChecker(() => targets.forEach((v) => v * 2))}`);
//     resMes.push(
//       `_forEach: ${timeChecker(() => targets._forEach((v) => v * 2))}`
//     );
//     //  find
//     resMes.push(
//       `find: ${timeChecker(() =>
//         targets.find((v) => v == targets[(i + 1) * 1000 - 1])
//       )}`
//     );
//     resMes.push(
//       `_find: ${timeChecker(() =>
//         targets._find((v) => v == targets[(i + 1) * 1000 - 1])
//       )}`
//     );
//     //  every
//     resMes.push(
//       `every: ${timeChecker(() =>
//         targets.every((v) => v == targets[(i + 1) * 1000 - 1])
//       )}`
//     );
//     resMes.push(
//       `_every: ${timeChecker(() =>
//         targets._every((v) => v == targets[(i + 1) * 1000 - 1])
//       )}`
//     );
//   }
//   console.log(resMes.join("\r\n"));
// });




test("qsort", () => {
  const base = [1, 4, 816, 187, 486, 15
    , 4691, 5874, 6169, 54658, 496, 12698, 456, 1621, 646, 157, 1658, 698, 2168, 265, 146, 16581, 544, 16531, 5716, 58168, 15, 154, 165, 1587, 154, 1465, 165, 15, 41568, 46, 16, 81, 584, 3565, 21655, 8692, 61, 612, 54, 15, 1265, 4961, 544, 6316, 45, 655, 61, 651, 54, 12658, 55, 46, 846, 816, 15
  ]

  let sortedBase = [...base]
  for (let i = 0; i < sortedBase.length - 1; i++) {
    for (let h = i+1; h < sortedBase.length; h++) {
      if (sortedBase[i] > sortedBase[h]) {
        const tmp = sortedBase[i];
        sortedBase[i] = sortedBase[h];
        sortedBase[h] = tmp;
      }
      // console.log(sortedBase)
    }
  }
  const qsortedBase = base.qsort();
  // console.log({ sortedBase,qsortedBase});

  for (let i = 0; i < base.length; i++) {
    // console.log({bs: sortedBase[i], qs:qsortedBase[i]})
    expect(sortedBase[i]).toBe(qsortedBase[i]);
  }

});

test("stdev", () => {
//   const stdevVal = [3.95081967213115, 3.52459016393443, 3.9672131147541, 3.86885245901639].stdev()
//   const stdevValw = [4.0, 3.5, 4.0, 3.9].stdev();
// // 0.206713446113416
//   console.log({ stdevVal, stdevValw });
//     // expect(stdevValw).toBe(0.206713446113416);
//     // expect(stdevVal).toBe(0.206713446113416);

  console.log(
    [
      3.95180722891566, 3.51807228915663, 3.90361445783133, 3.85542168674699,
    ].stdev()
  );
  console.log(
    [
      3.28915662650602, 3.68674698795181, 4.01204819277108,
    ].stdev()
  );
  console.log(
    [ 3.97590361445783,
      3.86746987951807, 3.14457831325301, 3.44578313253012,
    ].stdev()
  );
  console.log(
    [
      3.95180722891566, 3.51807228915663, 3.90361445783133, 3.85542168674699,
      3.28915662650602, 3.68674698795181, 4.01204819277108, 3.97590361445783,
      3.86746987951807, 3.14457831325301, 3.44578313253012,
    ].stdev()
  );






});

// test("stdevp", () => {
//   const stdevpVal = [
//     3.95081967213115, 3.52459016393443, 3.9672131147541, 3.86885245901639,
//   ].stdevp();
//   const stdevpValw = [4.0, 3.5, 4.0, 3.9].stdevp();
//   // 0.206713446113416
//   console.log({ stdevpVal, stdevpValw });
//   // expect(stdevpValw).toBe(0.206713446113416);
//   // expect(stdevpVal).toBe(0.206713446113416);

//   console.log(
//     [
//       0.21, 0.18, 0.14, 0.15, 0.08, 0.11, 0.31, 0.06, 0.18, 0.12, 0.13, 0.05,
//       0.21,
//     ].stdevp()
//   );
// });
