const ldsh = require('lodash');

const arr = [1, [2, [3, [4]]]];
// const narr = [arr[0], arr[1][0], arr[1][1][0], arr[1][1][1][0]];

// doing same using lodash
const narr = ldsh.flattenDeep(arr);
console.log(narr);