var assert = require('assert');
var basket = require('../basket');

describe("Shopping basket", function(){

  it("test basket starts empty", function() {
    assert.equal(0, basket.countContents());
  });

  it("test can add an item", function() {
    basket.addItem({name: "milk", price: 0.89});
    assert.equal(1, basket.countContents());
  });

  it("test can delete an item from basket", function() {
    basket.addItem({name: "milk", price: 0.89});
    basket.addItem({name: "fish", price: 3.99});
    basket.removeItem("milk")
    assert.equal(1, basket.countContents());
    assert.equal("fish", basket.contents[0].name)
  })

  it("test can remove all items from basket", function() {
    basket.addItem({name: "milk", price: 0.89});
    basket.addItem({name: "fish", price: 3.99});
    basket.removeAllItems();
    assert.equal(0, basket.countContents());
  })

  it("test can add value of basket", function() {
    basket.addItem({name: "milk", price: 0.89});
    basket.addItem({name: "fish", price: 3.99});
    assert.equal(4.88, basket.countValueOfBasket())
  })

}); 