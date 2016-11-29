var assert = require('assert');
var item = require('../item');

describe("Item", function(){
  it("test setup succesfull", function() {
    assert.equal("milk", item.name);
    assert.equal(0.89, item.price);
    assert.equal(2, item.quantity);
    assert.equal(true, item.bygof);
  })
}); 