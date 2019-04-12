
function Pizza()  {
  this.pizzas = []
  this.pizzaId = 0
};

Pizza.prototype.addPizza = function(pizza)  {
  pizza.id = this.givePizzaId();
  this.pizzas.push(pizza)
}
Pizza.prototype.givePizzaId = function() {
  this.pizzaId += 1;
  return this.pizzaId;
}

function compilePizza(thisName, thisSize, thisMeat, thisVeggie) {
  this.thisName = thisName,
  this.thisSize = thisSize,
  this.thisMeat = thisMeat,
  this.thisVeggie = thisVeggie
}

var pizzaList = new Pizza();

function attachPizzaEars(){
  $("ol#listOfPizza").on("click", "li", function(){
    showPizza(this.pizzaId);
  })
}
function showPizza(pizzaId) {
  var pizza = pizzaList.findPizza(pizzaId);
  $("#showPizza").show();
  $(".thisName").html(pizza.thisName);
  $(".thisSize").html(pizza.thisSize);
  $(".thisMeat").html(pizza.thisMeat);
  $(".thisVeggie").html(pizza.thisVeggie);
}

function displayChosenPizza(pizzaToDisplay) {
  var pizzaList = $("ol#listOfPizza");
  var htmlForPizza = "";
  pizzaToDisplay.pizzas.forEach(function(pizza){
    htmlForPizza += "<li id=" + pizza.id + ">"
  })
  pizzaList.html(htmlForPizza);
}

$(document).ready(function(){
  attachPizzaEars();
  $("form.orderForm").submit(function(event){
    event.preventDefault();
    var inputName = $("input#inputNewname").val();
    var inputSize = $("#sizing").find(":selected").text();
    var inputMeat = $("input:checkbox[name=steak]:checked").val() + $("input:checkbox[name=chicken]:checked").val() + $("input:checkbox[name=salami]:checked").val() +
    $("input:checkbox[name=pate]:checked").val();
    var inputVeggie = $("input:checkbox[name=pepper]:checked").val() + $("input:checkbox[name=mushrooom]:checked").val() + $("input:checkbox[name=olive]:checked").val() + $("input:checkbox[name=onion]:checked").val();

    var freshPizza = new Pizza(inputName, inputSize, inputMeat, inputVeggie);
    pizzaList.addPizza(freshPizza);
    displayChosenPizza(pizzaList);
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
