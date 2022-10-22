const stringToNumber = function (value) {
  if (value === "") {
    return 0;
  } else {
    let result = parseInt(value);
    value = result;
    console.log(value);
    return value;
  }
};

export default stringToNumber;
