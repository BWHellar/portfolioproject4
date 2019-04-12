
function PizzaList()  {
  this.pizza = [];
  this.pizzaId = 0;
};

PizzaList.prototype.addPizza = function(pizza)  {
  pizza.id = this.givePizzaId();
  this.pizza.push(pizza);
}
PizzaList.prototype.givePizzaId = function() {
  this.pizzaId += 1;
  return this.pizzaId;
}

PizzaList.prototype.findPizza = function(id){
  for(i = 0; i < this.pizza.length; i++){
    if(this.pizza[i]) {
      if(this.pizza[i].id == id){
        return this.pizza[i];
      }
    }
  };
  return false;
}

function compilePizza(thisName, thisSize, thisMeat, thisVeggie) {
  this.thisName = thisName,
  this.thisSize = thisSize,
  this.thisMeat = thisMeat,
  this.thisVeggie = thisVeggie
}

var pizzaList = new PizzaList();

function attachPizzaEars()  {
  $("ol#listOfPizza").on("click", "li", function(){
    showPizza(this.id);
  });
};

function showPizza(pizzaId) {
  var pizza = pizzaList.findPizza(pizzaId);
  $("#showPizza").show();
  $("#thisName").html(pizza.thisName);
  $("#thisSize").html(pizza.thisSize);
  $("#thisMeat").html(pizza.thisMeat);
  $("#thisVeggie").html(pizza.thisVeggie);
  console.log(this.pizza);
}

function displayChosenPizza(pizzaToDisplay) {
  var pizzaList = $("ol#listOfPizza");
  var htmlForPizza = "";
  pizzaToDisplay.pizza.forEach(function(pizza){
    htmlForPizza += "<li id=" + pizza.id + ">" + pizza.thisName + "</li";
  })
  pizzaList.html(htmlForPizza);
}

$(document).ready(function(){
  attachPizzaEars();
  $("form.orderForm").submit(function(event){
    event.preventDefault();
    var inputThisName = $("input#inputNewName").val();
    var inputSize = $("#sizing").find(":selected").text();
    var inputVeggie = $("#veggieList").find(":selected").text();
    var inputMeat = $("#meatList").find(":selected").text();
    var freshPizza = new compilePizza(inputThisName, inputSize, inputMeat, inputVeggie);
    pizzaList.addPizza(freshPizza);
    displayChosenPizza(pizzaList);
    console.log(freshPizza);
  })
})





// Similar logic might be used but needs tweaking

// Pizza.prototype.priceCalculate = function(){
//   var pizzaMath = 15 + (this.veggieMain.length * 2) + (this.meatMain.length * 3)
//   if (this.sizing == "small"){
//     return pizzaMath * this.amount;
//     console.log(pizzMath * this.amount);
//   }else if (this.sizing == "medium"){
//     return pizzaMath * this.amount;
//   }else if (this.sizing == "large"){
//     return pizzaMath * this.amount;
//   }else if (this.sizing == "xLarge"){
//     return pizzaMath * this.amount;
//   }
// }
