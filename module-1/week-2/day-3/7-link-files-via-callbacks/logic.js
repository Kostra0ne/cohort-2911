const array = [1, 2, 3, 4, 5];

export function sumLocalArray(callback) {
//   console.log(typeof callback);
  const sum = array.reduce((a, v) => a + v);
  setTimeout(() => callback(sum), 2000);
}
