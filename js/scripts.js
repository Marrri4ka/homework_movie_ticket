//Business Logic


function Ticket(title, time, age) {
  this.title = title,
    this.time = time,
    this.age = age
}

Ticket.prototype.calculatePrice = function() {
  // var basePrice = 5;
  if (this.title === "Harry Potter" && this.time === "04:00 PM" && this.age === "adult") {
    return "$5";
  } else {
    return "$3";
  }
}



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


    });

  });

});