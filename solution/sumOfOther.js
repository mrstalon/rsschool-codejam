module.exports = function sumOfOther(array) {
  const arrayToReturn = array.map((item, id) => {
    let tempValue = 0;

    array.forEach((el, index) => {
      tempValue += (index !== id ? el : 0);
    });

    return tempValue;
  });
  return arrayToReturn;
};
