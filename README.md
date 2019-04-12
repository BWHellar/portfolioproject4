# Pizza Calculator

#### This project will change the Pizza cost, 4/12/19


#### By _**Brendan Hellar**_

## Description


#### The goal of this project is to utilize the skills learned during the week in a solo project.  This week focused on Objects and Prototypes.  Objects are a collection of properties.  New objects are created by using Object constructors.  Prototypes are the same Objects that are pointed to as they retain some of the qualities but also allow to the integration of new ones as well.

###### This represents the objects that will be used in the project.  Within this object are three options that represent items that can be changed depending on the selection of the user.  This is always the constant as it pertains to all current selections.  Sizing, options, and amount alter depending on the user but they are always tied to the current "this".
```
function PizzaList(sizing, options, amount)  {
  this.sizing = sizing;
  this.options = options;
  this.amount = amount;
};
```
###### This represents the prototype that will be used in the project.  The first part "PizzList" refers to the above function.  By using prototype we are allowing the function object to morph their inner attributes with the "priceCalculate" function.  This prototype will look at the current selections sizing and determine the price based on the size selected for that user.  At the end the amount designatedby the current user.
```
PizzaList.prototype.priceCalculate = function(){
  var price = 0;
  if (this.sizing === "Large") {
   price += 20;
   console.log(price);
  }
  if (this.sizing === "Medium") {
   price += 15;
  }
  if (this.sizing === "Small") {
   price += 12;
  }
  return price * this.amount;
};
```
###### This represents the user Interface area.  In this area we are able to find the values for the 3 fields below and give them variables.  Then we want to take the variables that we have collected information on and combine them into one variable that we can work with.  In the last part we output the cost by calling on the object we just inputted and running the prototype we created to find the price.
```
$(document).ready(function(){
  $("form.orderForm").submit(function(event){
    event.preventDefault();
    var inputSize = $("#sizing").find(":selected").text();
    var inputOptions = $("#Listing").find(":selected").text();
    var amount = $("#amount").val();
    var freshPizza = new PizzaList(inputSize, inputOptions, amount);
    $("#thisCost").text("$" + freshPizza.priceCalculate());
  })
});
```
=======

## Setup/Installation Requirements

-   Please clone from the Github repo https://bwhellar.github.io/portfolioproject4/
-   By selecting the various options you will gain a different price.

This app requires the internet as it uses HTMl and CSS and Javascript.

## Known Bugs

No known bugs

## Support and contact details

If you have any issues please contact Brendan Hellar at bwhellar@gmail.com

## Technologies Used

HTML and CSS and Javascript

### License

MIT

Copyright (c) 2019 **Brendan Hellar**
