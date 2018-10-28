const assert = require('assert');
const sumOfOther = require('../solution/sumOfOther.js');


describe('sumOfOther', () => {
  it('should return converted array correctly 1', () => {
    assert.deepEqual(sumOfOther([1, 2, 3]), [5, 4, 3]);
  });
  it('should return converted array correctly 2', () => {
    assert.deepEqual(sumOfOther([2, 4, 1, 3]), [8, 6, 9, 7]);
  });
  it('should return converted array correctly 3', () => {
    assert.deepEqual(sumOfOther([1, 5, 10, 3, 7]), [25, 21, 16, 23, 19]);
  });
});
