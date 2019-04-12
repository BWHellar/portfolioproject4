
function Pizza() {
  this.amount = amount,
  this.sizing = sizing,
  this.veggieMain = [],
  this.meatMain =[]
};


Pizza.prototype.priceCalculate = function(){
  var pizzaMath = 15 + (this.veggieMain.length * 2) + (this.meatMain.length * 3)
  if (this.sizing == "small"){
    return pizzaMath * this.amount;
    console.log(pizzMath * this.amount);
  }else if (this.sizing == "medium"){
    return pizzaMath * this.amount;
  }else if (this.sizing == "large"){
    return pizzaMath * this.amount;
  }else if (this.sizing == "xLarge"){
    return pizzaMath * this.amount;
  }
}




$(document).ready(function(){
  $("form.orderForm").submit(function(event){
  var amount = $("input#amount").val();
  var sizing = $("input#sizing").val();

  var newPizza = new Pizza(amount, sizing);

  var veggieMain = $("input.veggie:checkbox:checked").each(function() {
      newPizza.veggieMain.push(veggieMain);
    });
  var meatMain = $("input.meat:checkbox:checked").each(function() {
      newPizza.meatMain.push(meatMain);
    });

  var pizzaCost = newPizza.priceCalculate();
  $('#price').html(pizzaCost);
  console.log(pizzaCost);

  event.preventDefault();
  });
});
