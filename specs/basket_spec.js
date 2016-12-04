var assert = require('assert');
var Basket = require('../basket');
var Item = require('../item')

describe("Shopping basket", function(){

  var basket;
  var milk;
  var fish;
  var cheese;
  var shirt;

  beforeEach( function() {
    basket = new Basket();
    milk = new Item('milk', 0.89, 2, false);
    fish = new Item('fish', 3.99, 1, false);
    cheese = new Item('cheese', 2.00, 1, false);
    shirt = new Item('shirt', 20.00, 3, true)
  });

  it("test basket starts empty", function() {
    console.log(basket)
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
    basket.addItem(cheese);
    basket.addItem(shirt);
    assert.equal(37.80, basket.countValueOfBasket())
  })

  it('test can apply bygof discount', function() {
    basket.removeAllItems();
    basket.addItem(cheese)
    basket.addItem(shirt);
    assert.equal(37.80, basket.countValueOfBasket())
  })

  it('test can use discount card', function() {
    basket.removeAllItems();
    basket.addItem(cheese)
    basket.addItem(shirt);
    assert.equal(35.91, basket.countValueOfBasket(true))
  })

}); 