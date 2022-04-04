import React from react;

var userEmail="";
var userPassword="";
hideElement("ErrorMsgLabel");


onEvent("UserEmailInput", "change", function( ) {
	userEmail= getText("UserEmailInput");
});
onEvent("UerPasswordInput", "change", function( ) {
	userPassword= getText("UerPasswordInput");
});

onEvent("LogInButton", "click", function( ) {
	if(userEmail != "" && userPassword !=""){
	  setScreen("MenuPage");
	}
	else(showElement("ErrorMsgLabel"));
});

onEvent("GroupButton", "click", function( ) {
	setScreen("GroupMainPage");
});

onEvent("RestaurantsButton", "click", function( ) {
	setScreen("RestaurantMainPage");
});

onEvent("BackButton", "click", function( ) {
	setScreen("MenuPage");
});
onEvent("BackButton1", "click", function( ) {
	setScreen("MenuPage");
});
onEvent("ForgotPasswordButton", "click", function( ) {
	setScreen("ForgotPassword");
});