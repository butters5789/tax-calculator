var code = require('../main');
var expect = require('chai').expect;

describe('Tax Calculator', function(){

  it('should tax 10% on the first $10', function() {
    expect(code.calcTax(1)).to.equal(0.1);
    expect(code.calcTax(10)).to.equal(1);
  });

  it('should tax 7% on the second $10', function(){
    expect(code.calcTax(15)).to.equal(1.35);
  });

  it('should tax 5% on the third $10', function(){
    expect(code.calcTax(27)).to.equal(2.05);
  });

  it('should tax 3% on the rest', function(){
    expect(code.calcTax(56)).to.equal(2.98);
  });

});
