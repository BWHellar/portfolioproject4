
function PizzaList(sizing, meats, veggies, amount)  {
  this.sizing = sizing;
  this.amount = amount;
  this.meats = meats;
  this.veggies = veggies;
};


PizzaList.prototype.priceCalculate = function(){
  var price = 0;
  if(this.sizing === "Small"){
    price += 10;
  }else if (this.sizing === "Medium") {
    price += 15;
  }else {
    price = 20
  }
  totalCost = price;
  console.log(totalCost);
  return totalCost * this.amount;
};

$(document).ready(function(){
  $("form.orderForm").submit(function(event){
    event.preventDefault();
    var totalCost = 0;
    var inputThisName = $("input#inputNewName").val();
    var inputSize = $("#sizing").find(":selected").text();
    var inputVeggie = $("#veggieList").find(":selected").text();
    var inputMeat = $("#meatList").find(":selected").text();
    var freshPizza = new PizzaList(inputThisName, inputSize, inputMeat, inputVeggie);
    $("#thisCost").html("$" + freshPizza.priceCalculate());
  })
});
