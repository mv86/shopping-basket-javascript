var assert = require('assert');
var item = require('../item');

describe("Item", function(){

  milk = new item('milk', 0.89, 2, true);

  it("test setup succesfull", function() {
    assert.equal("milk", milk.name);
    assert.equal(0.89, milk.price);
    assert.equal(2, milk.quantity);
    assert.equal(true, milk.bygof);
  });

}); 