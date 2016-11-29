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
      counter += content.price;
    }
    return counter;
  }
};

module.exports = basket;
