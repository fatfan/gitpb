var cp = require('child_process');
cp.exec(`echo "aa"`, {}, (a, b, c) => {
  console.log(a,b,c)
});
cp.exec(`git branch`, {}, (a,b) => {
  console.log(b)
});