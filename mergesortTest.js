function merge(left, right) {
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
};

function mergeSort(arr) {	
	if(arr.length<2){
		return arr;
	};

	var mid = Math.floor(arr.length/2);
	var arrL = arr.slice(0, mid);
	var arrR = arr.slice(mid, arr.length);

	console.log(mid)
	console.log(arrL)
	console.log(arrR)
	
	return merge(mergeSort(arrL), mergeSort(arrR));
};

console.log(mergeSort([1,5,8,2,3,7,4]));
