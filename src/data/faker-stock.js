var faker = require("faker");

module.exports = function() {
  var stocks = [];
  var user = [];
  var data = {};


  for (var i = 0; i < 100; i++) {
    stocks.push({
      id: i,
      empresa: faker.company.companyName(),
      valor: faker.commerce.price(),
    });
    user.push({
      id: i,
      primeiroNome: faker.name.firstName(),
      findNome: faker.name.findName()
    });
  }
  return {
    stocks,
    user,
    data
  };
};