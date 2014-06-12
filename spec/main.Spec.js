describe("Stock Portfolio App Tests", function() {
  var presentValue,
      previousValue,
      aPercentChanges;
 
  beforeEach(function() {
    presentValue    = 110;
    previousValue   = 100;
    aPercentChanges = [];
  });
 
  afterEach(function() {
    presentValue    = 0;
    previousValue   = 0;
    aPercentChanges = [];
  });
   
  it("calcWeeklyPercentChange() should return the change between two numbers as a percentage.", function() {
    var result = calcWeeklyPercentChange(presentValue, previousValue, aPercentChanges);
    expect(result).toBeCloseTo(0.1);
    expect(aPercentChanges.length).toEqual(1);
  });
   
  it("The aPercentChanges array should now be empty.", function() {
    expect(aPercentChanges.length).toEqual(0);
  });
});