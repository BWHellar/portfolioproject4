// This is where the business logic is located for the Pizza ordering
function pizzaList() {
  this.pizza = [];
  this.pizzaId = 0;
}

CharacterList.prototype.addPizza = function(pizza){
  pizza.id = this.assignId();
  this.pizza.push(pizza);
}
