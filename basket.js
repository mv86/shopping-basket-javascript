var Basket = function() {
  this.contents = [];
};

Basket.prototype = {
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
  countValueOfBasket: function(discountCard) {
    var total = this.bygofItemSorter();
    if (total > 20) {
      total = this.discountOver20(total);
    }
    if (discountCard === true) {
      total = this.discountCard(total);
    }
    var totalRounded = Math.round(total * 100) / 100;
    return totalRounded;
  },
  discountOver20: function(basketTotal) {
    return basketTotal * 0.9;
  },
  bygofItemSorter: function() {
    var bygofItems = [];
    var totalOfItems = 0;
    for (content of this.contents) {
      if (content.bygof === true) {
        bygofItems.push(content);
      } else {
        totalOfItems += (content.price * content.quantity);
      }
    }
    var bygofDiscount = this.bygofDiscount(bygofItems);
    return totalOfItems += bygofDiscount;
  },
  bygofDiscount: function(bygofItems) {
    bygofDiscount = 0;
    for (item of bygofItems) {
      if ((item.quantity % 2) === 0) {
        bygofDiscount += ((item.price * item.quantity) / 2); 
      } else {
        bygofDiscount += (((item.price * item.quantity) - item.price) / 2) + item.price;
      }
    }
    return bygofDiscount;
  },
  discountOver20: function(basketTotal) {
    return basketTotal * 0.9;
  },
  discountCard: function(basketTotal) {
    return basketTotal * 0.95;
  }
};

module.exports = Basket;
