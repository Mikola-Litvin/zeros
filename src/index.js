module.exports = function zeros(expression) {
  let exp = expression.split('*');
  let arr = [];
  let count, j;
  let res = "1";
  for (let i = 0; i < exp.length; i++) {

    count = exp[i].match(/^[0-9]+/);
    count = Number(count[0]);
    j = exp[i].match(/[^0-9]+$/);
    j = j[0].length;

    if (j == 1) {
      for (; j <= count; j++) {
        arr.push(j);
      }
    }
    else {
      if (count % 2 == 0) {
        for (j = 2; j <= count; j += 2) {
          arr.push(j);
        }
      }
      else {
        for (j = 1; j <= count; j += 2) {
          arr.push(j);
        }
      }
    }
  }

  for (let i = 0; i < arr.length; i++) {
    res = BigInt(res) * BigInt(arr[i]);
  }

  res = String(res);
  res = res.match(/[0]+$/);

  if (res == null) {
    return 0;
  }
  else {
    return res[0].length;
  } 
}