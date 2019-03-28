const faker = require("faker");


function fakeDataStock() {
  const stocks = [];
  const user = [];
  const data = {};


  for (let i = 0; i < 100; i++) {
    stocks.push({
      id: faker.random.uuid(),
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

module.exports = fakeDataStock;
