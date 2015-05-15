var mergeSort = require("../mergeSort.js");

describe('Merge', function() {
  it('should merge two arrays of size 1', function() {
     expect(mergeSort.merge([1],[2])).toEqual([1,2]);
  });

});

describe('Merge Sort', function() {
  it('should sort two arrays of size 1', function() {
     expect(mergeSort.merge([2],[1])).toEqual([1,2]);
  });
});
var mergeSort = require("../mergeSort.js");

describe('Merge', function() {
  it('should merge two arrays of size 1', function() {
     expect(mergeSort.merge([1],[2])).toEqual([1,2]);
  });

  it('should merge two arrays of size 1 and size 2', function() {
  	expect(mergeSort.merge([1, 3],[2])).toEqual([1,2,3]);
  });

  it('should merge two arrays', function() {
  	expect(mergeSort.merge([1,3,4], [7,8,9])).toEqual([1,3,4,7,8,9]);
  });

});

describe('Merge Sort', function() {
  it('should sort two arrays of size 1', function() {
     expect(mergeSort.merge([2],[1])).toEqual([1,2]);
  });

  it('should sort two arrays of size 1 and size 2'), function() {
  	expect(mergeSort.mergeSort([1, 3],[2])).toEqual([1,2,3]);
  };

  it('should sort an array', function() {
  	expect(mergeSort.merge([1,2],[4])).toEqual([1,2,4]);
  });

});
