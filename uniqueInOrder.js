/* Implement the function unique_in_order which takes as argument a sequence and
 returns a list of items without any elements with the same value next to each other
  and preserving the original order of elements.

For example:

uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3] */

var uniqueInOrder = function (data) {
  let arr = Array.isArray(data) ? data : data.split("");
  return arr.filter((item, i) => {
    return item !== data[i + 1];
  });
};

console.log(uniqueInOrder("AAAABBBCCDAABBB"));
console.log(uniqueInOrder([1, 2, 2, 3, 3]));

// Comment: Method split() doesn't work with arrays, that´s why the conditional

/* Another solutions that I liked

var uniqueInOrder=function(iterable){
    return [...iterable].filter((a, i) => a !== iterable[i-1])
}

const uniqueInOrder = d => [...d].filter((x, i, a) => x != a[i + 1])

var uniqueInOrder = function (iterable) {
  return [].filter.call(iterable, function (a, i) {
    return iterable[i - 1] !== a;
  });
};
*/
