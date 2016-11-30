var basket = {
  contents: [],
  countContents: function() {
    var counter = 0;
    for (var content of this.contents) {
      counter++;
    }
    return counter;
  },
  addItem: function(item) {
    this.contents.push(item);
  },
  removeItem: function(item) {
    for (var content of this.contents) {
      if (content.name === item) {
        var itemIndex = this.contents.indexOf(content);
      }
      this.contents.splice(itemIndex, 1);
    }
  },
  removeAllItems: function() {
    this.contents = [];
  },
  countValueOfBasket: function() {
    var counter = 0;
    for (var content of this.contents) {
      counter += (content.price * content.quantity);
    }
    if (counter > 20) {
      counter = this.discountOver20(counter)
    }
    var counterRounded = Math.round(counter * 100) / 100;
    return counterRounded;
  },
  discountOver20: function(basketTotal) {
    return basketTotal * 0.9;
  }
};

module.exports = basket;
