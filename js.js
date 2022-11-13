function alternate(s) {
    let a = [];
    let b = s.length
  for (let i = 0; i < b; i++) {
    for (let j = i + 1; j < b; j++) {
      if (s[i] !== s[j]) {
        a.push(s[i] + s[j]);
      }
    }
  }console.log(a)
  a = Array.from(new Set(a));
  console.log(a)
  let max = 0;
  for (let i = 0; i < a.length; i++) {
    let res = "";
    for (let j = 0; j < b; j++) {
      if (s[j] === a[i][0] || s[j] === a[i][1]) {
        if (res[res.length - 1] === s[j]) {
         res = "";
          break;
        }
        res += s[j];
      }
    }
    max = Math.max(res.length);
  }
  return max;
}

console.log(alternate("aabcbadbcd"))

