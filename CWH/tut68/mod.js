function average(arr) {
  let sum = 0;
  arr.forEach((element) => {
    sum = sum + element;
    sum / arr.length;
  });
  return sum / arr.length;
}
module.exports.name = "repo";

module.exports = {
  avg: average,
  name: 'aditya',
  repo: 'guthub',
};
