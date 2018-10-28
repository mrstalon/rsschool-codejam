const assert = require('assert');
const sumOfOther = require('../solution/sumOfOther.js');
const make = require('../solution/make.js');


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

describe('make', () => {
  const sum = (a, b) => a + b;
  const dif = (a, b) => a - b;
  it('should return sum of all arguments correctly 1', () => {
    assert.equal(make(1, 3)(6, 5, 7)(4)(sum), 26);
  });
  it('should return sum of all arguments correctly 2', () => {
    assert.equal(make(10)(25, 33)(1)(5)(101)(sum), 175);
  });
  it('should return difference between all agruments in correct order(left -> right) 1', () => {
    assert.equal(make(30, 5)(15)(4, 4, 2)(dif), 0);
  });
  it('should return difference between all agruments in correct order(left -> right) 1', () => {
    assert.equal(make(666)(111)(222, 333)(111)(dif), -111);
  });
});
