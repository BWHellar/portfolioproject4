
function Pizza()  {
  this.pizza = [];
  this.pizzaId = 0;
};

Pizza.prototype.addPizza = function(pizza)  {
  pizza.id = this.givePizzaId();
  this.pizza.push(pizza);
}
Pizza.prototype.givePizzaId = function() {
  this.pizzaId += 1;
  return this.pizzaId;
}

Pizza.prototype.findPizza = function(id){
  for(i = 0; i < this.pizza.length; i++){
    if(this.pizza[i]) {
      if(this.pizza[i].id == id){
        return this.pizza[i];
      }
    }
  }
}

function compilePizza(thisName, thisSize, thisMeat, thisVeggie) {
  this.thisName = thisName,
  this.thisSize = thisSize,
  this.thisMeat = thisMeat,
  this.thisVeggie = thisVeggie
}

var pizzaList = new Pizza();

function attachPizzaEars()  {
  $("ol#listOfPizza").on("click", "li", function(){
    showPizza(this.id);
    console.log(this.id);
  });
};
function showPizza(pizzaId) {
  var pizza = pizzaList.findPizza(pizzaId);
  $("#showPizza").show();
  $("#thisName").html(pizza.thisName);
  $("#thisSize").html(pizza.thisSize);
  $("#thisMeat").html(pizza.thisMeat);
  $("#thisVeggie").html(pizza.thisVeggie);
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
    var inputMeat = $("input:checkbox[name=steak]:checked").val() + $("input:checkbox[name=chicken]:checked").val() + $("input:checkbox[name=salami]:checked").val() +
    $("input:checkbox[name=pate]:checked").val();
    var inputVeggie = $("input:checkbox[name=pepper]:checked").val() + $("input:checkbox[name=mushrooom]:checked").val() + $("input:checkbox[name=olive]:checked").val() + $("input:checkbox[name=onion]:checked").val();

    var freshPizza = new Pizza(inputThisName, inputSize, inputMeat, inputVeggie);
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
