module.exports = {
  calcTax: function (amount) {
    if (amount <= 10) {
      return amount * 0.1;
    } else if (amount > 10 && amount <= 20) {
      var taxAt7 = amount - 10;
      return (taxAt7 * 0.07) + 1;
    } else if (amount > 20 && amount <= 30) {
      var taxAt5 = amount - 20;
      return (taxAt5 * 0.05) + 1.7;
    }
  }
};
