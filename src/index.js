module.exports = function longestConsecutiveLength(array) {
  // your solution here

  array.sort((a, b) => a - b);
  array = new Set(array);
  array = Array.from(array);
  let maxCount = 0;
  
  for (let i = 0; i < array.length; i++) {
  	let count = 1;
  	count = findNext(array[i], i, count);
  	if (count > maxCount) {
  		maxCount = count;
  	}
  }

  function compare(a, b) {
  	return a - b;
  }

  function findNext(x, i, count) {
  	if (array[i + 1] === x + 1) {
  		count++;
  		if (count > 3) {
  		}
  		count = findNext(array[i + 1], i + 1, count);
  	}
  	return count;
  }
  return maxCount;

}