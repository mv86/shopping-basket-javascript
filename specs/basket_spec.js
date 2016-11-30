var assert = require('assert');
var basket = require('../basket');
var item = require('../item')

var milk;
var fish;
var cheese;
var shirt

beforeEach( function() {
  milk = new item('milk', 0.89, 2, true);
  fish = new item('fish', 3.99, 1, false);
  cheese = new item('cheese', 2.00, 1, false);
  shirt = new item('shirt', 20.00, 3, true)
});

describe("Shopping basket", function(){



  it("test basket starts empty", function() {
    assert.equal(0, basket.countContents());
  });

  it("test can add an item", function() {
    basket.addItem(milk);
    assert.equal(1, basket.countContents());
  });

  it("test can delete an item from basket", function() {
    basket.addItem(milk);
    basket.addItem(fish);
    basket.removeItem(milk)
    assert.equal(1, basket.countContents());
    assert.equal("fish", basket.contents[0].name)
  })

  it("test can remove all items from basket", function() {
    basket.addItem(milk);
    basket.addItem(fish);
    basket.removeAllItems();
    assert.equal(0, basket.countContents());
  })

  it("test can add value of basket", function() {
    basket.addItem(milk);
    basket.addItem(fish);
    assert.equal(5.77, basket.countValueOfBasket())
  })

  it("test can 10% discount over £20", function() {
    basket.removeAllItems();
    basket.addItem(cheese)
    basket.addItem(shirt);
    assert.equal(55.80, basket.countValueOfBasket())
  })

}); 