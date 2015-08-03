$(function() {
  console.log("Loaded, bro.");
  $("#web-tab").hover(darkRedBack,noneBack);
  $("#skills-tab").hover(royalBlueBack,noneBack);
  $("#resume-tab").hover(mediumSeaGreenBack,noneBack);
  $("#about-tab").hover(goldenRodBack,noneBack);
  $("#contact-tab").hover(darkOrangeBack,noneBack);
  $("#web").hover(darkRed,white);
  $("#skills").hover(royalBlue,white);
  $("#resume").hover(mediumSeaGreen,white);
  $("#about").hover(goldenRod,white);
  $("#contact").hover(darkOrange,white);
  $("#buttons").hide().fadeIn(1500)
});


var white = function() {
  $(this).css("background-color","rgba(256,256,256,0.5)")
  $(this).css("height", "250px")
  $(this).css("width", "250px")
}

var purple = function() {
  $(this).css("color","rgba(72,61,139,0.8)");
}

var darkRed = function() {
  $(this).css("background-color","darkred");
  $(this).css("height", "260px")
  $(this).css("width", "260px")
}

var royalBlue = function() {
  $(this).css("background-color","royalblue");
  $(this).css("height", "260px")
  $(this).css("width", "260px")
}

var goldenRod = function() {
  $(this).css("background-color","goldenrod");
  $(this).css("height", "260px")
  $(this).css("width", "260px")
}

var mediumSeaGreen = function() {
  $(this).css("background-color","mediumseagreen");
  $(this).css("height", "260px")
  $(this).css("width", "260px")
}

var darkOrange = function() {
  $(this).css("background-color","darkorange");
  $(this).css("height", "260px")
  $(this).css("width", "260px")
}

var noneBack = function() {
  $(this).css("background-color","rgba(0,0,0,0)");
}

var darkRedBack = function() {
  $(this).css("background-color","darkred");
}

var royalBlueBack = function() {
  $(this).css("background-color","royalblue");
}

var goldenRodBack = function() {
  $(this).css("background-color","goldenrod");
}

var mediumSeaGreenBack = function() {
  $(this).css("background-color","mediumseagreen");
}

var darkOrangeBack = function() {
  $(this).css("background-color","darkorange");
}