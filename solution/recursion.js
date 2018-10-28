module.exports = function recursion(tree) {
  const arrayToReturn = [];
  const initialDepth = 0;
  visitNode(tree.value, tree.left, tree.right, initialDepth);

  return arrayToReturn;

  function visitNode(value, left, right, currentDepth) {
    addValueToArray(value, currentDepth);
    if (left === undefined && right === undefined) {
      return;
    }
    if (left !== undefined) {
      visitNode(left.value, left.left, left.right, currentDepth + 1);
    }
    if (right !== undefined) {
      visitNode(right.value, right.left, right.right, currentDepth + 1);
    }
  }

  function addValueToArray(value, currentTreeDepth) {
    if (Array.isArray(arrayToReturn[currentTreeDepth])) {
      arrayToReturn[currentTreeDepth].push(value);
    } else {
      arrayToReturn[currentTreeDepth] = [value];
    }
  }
};
