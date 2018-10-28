module.exports = function make(...args) {
  if (typeof args[args.length - 1] === 'function') {
    const func = args.splice(args.length - 1, 1)[0];
    const valueToReturn = args.reduce((prev, current) => func(prev, current));
    return valueToReturn;
  }
  const fnc = (...args1) => make(...args, ...args1);
  return fnc;
};
