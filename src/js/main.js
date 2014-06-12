function calcWeeklyPercentChange(presentValue, previousValue, aPercentChanges) {
  var percentChange = presentValue / previousValue - 1;
  aPercentChanges.push(percentChange);
  return percentChange;
};