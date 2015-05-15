
// Merge takes two sorted arrays (left, right) and
// returns one array which contains the sorted numbers
// from left and right.

exports.merge = function(left, right) {
	var i = 0;
	var j = 0;
	var results = [];

	while (i < left.length || j < right.length) {
		if (i === left.length) {
			// j is the only index left
			results.push(right[j]);
			j++;
		} else if (j === right.length || left[i] <= right[j]) {
			results.push(left[i]);
			i++;
		} else {
			results.push(right[j]);
			j++;
		}
	}
	return results;
}


// Merge sort uses the merge function in order to
// sort an array. Given an array of numbers in any
// order, merge sort should return an array that is
// sorted.
exports.mergeSort = function(arr) {	
	if(arr.length<2){
		return arr;
	};

	var mid = Math.floor(arr.length/2);
	var arrL = arr.slice(0, mid);
	var arrR = arr.slice(mid, arr.length);
	
	return exports.merge(mergeSort(arrL), mergeSort(arrR));
}

