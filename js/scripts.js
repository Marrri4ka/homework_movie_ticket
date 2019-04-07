//Business Logic


function Ticket(title, time, age) {
  this.title = title,
    this.time = time,
    this.age = age
}

Ticket.prototype.calculatePrice = function() {
  var basePrice = 11;
  if (this.title === "Shazam" || this.title === "Hellboy") {
    return basePrice += 2;

  }

  if (this.time === "07:00 PM") {
    return basePrice += 1;
  }
  if (this.age === "youth" || this.age === "senior") {
    basePrice -= 1;
  } else {
    return basePrice;
  }
  return basePrice;
}


Ticket.prototype.show = function() {
  return this.title + " " + this.time + " " + this.age + " ";
}

// Ticket.prototype.showAbout = function() {
//   // var basePrice = 5;
//   return "hhhghgh"
// }


// UI Logic
$(document).ready(function() {
  $("#buy-ticket").click(function(event) {
    event.preventDefault();
    var movieTitle = $("input:radio[name=movie]:checked").val();
    $("#confirm").click(function() {
      var inputAge = $("input:radio[name=age]:checked").val();
      var inputTime = $("input:radio[name=time]:checked").val();
      var ticket = new Ticket(movieTitle, inputTime, inputAge);
      $("#price").text(ticket.calculatePrice());
      $("ul").append("<li>" + ticket.title + "</li>");
      $("ul").append("<li>" + ticket.time + "</li>");
      $("ul").append("<li>" + ticket.age + "</li>");
      // ticket.showAbout($("aboutplace"));

    });

  });

});