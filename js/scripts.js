
function Pizza(amount, sizing) {
  this.amount = amount;
  this.sizing = sizing;
  this.veggieMain = [];
  this.meatMain =[];
};


Pizza.prototype.priceCalculate = function(){

}




$(document).ready(function(){
  $("form.submit").submit(function(event){
  var amount = $("input#amount").val();
  var sizing = $("input#sizing").val();

  var newPizza = new Pizza(amount, sizing);

  var veggieMain = $("input.veggie:checkbox:checked").each(function() {
      newPizza.veggieMain.push(veggieMain);
    });
  var meatMain = $("input.meat:checkbox:checked").each(function() {
      newPizza.meatMain.push(meatMain);
    });

  event.preventDefault();
  });
});
