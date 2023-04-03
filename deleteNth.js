/* Enough is enough!
Alice and Bob were on a holiday. Both of them took many pictures of the places they've been,
and now they want to show Charlie their entire collection. However, Charlie doesn't like these sessions, 
since the motif usually repeats. He isn't fond of seeing the Eiffel tower 40 times.
He tells them that he will only sit for the session if they show the same motif at most N times. 
Luckily, Alice and Bob are able to encode the motif as a number. Can you help them to remove numbers such 
that their list contains each number only up to N times, without changing the order?

Task
Given a list and a number, create a new list that contains each number of list at most N times, without reordering.
For example if the input number is 2, and the input list is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], drop the next 
[1,2] since this would lead to 1 and 2 being in the result 3 times, and then take 3, which leads to [1,2,3,1,2,3].
With list [20,37,20,21] and number 1, the result would be [20,37,21]. */

function deleteNth(Array, n) {
  const repetition = {};
  const resultArr = [];

  for (let i = 0; i < Array.length; i++) {
    const number = Array[i];
    if (repetition[number] === undefined) {
      resultArr.push(number);
      repetition[number] = 1;
    } else if (repetition[number] < n) {
      resultArr.push(number);
      repetition[number]++;
    }
  }
  return resultArr;
}

console.log(deleteNth([1, 1, 3, 3, 7, 2, 2, 2, 2], 3)); // [1, 1, 3, 3, 7, 2, 2, 2]

/*
Solución de alguien mas que me pareció interesante
function deleteNth(arr, x) {
  // Creamos un objeto "cache" para llevar el seguimiento de cuántas veces hemos visto cada número.
  var cache = {};

  // Filtramos los elementos de la matriz "arr".
  return arr.filter(function (n) {
    // Agregamos el número actual a la "cache", o aumentamos su contador si ya está presente.
    cache[n] = (cache[n] || 0) + 1;
    // Devolvemos verdadero si el número actual se ha visto menos o igual que "x" veces.
    return cache[n] <= x;
    // Evalúa si el número de ocurrencias de n es menor o igual para incluirlo
  });
}
*/
