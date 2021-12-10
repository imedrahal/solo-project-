var $body = $("body")
$("#p").append("<h1 id=title>Taraji Dawla</h1>");
$("#title ").css({
    "background-color": "black",
    "width":"400px",
    "border":"10px solid red",
    "width":"300 px ",
    "text-align":"center",
    "color":"red",   
})
$body.css({
  "background-size":" cover ",
  "background - position - y":"inherit ",
  "background-repeat":"no-repeat"
})
///////////design of nav//////////////////////////////
$(".narve").css({
    "list-style-type": "none",
  "margin":"0",
  "padding":"0",
  "overflow":"hidden",
  "background-color": "red",})
  ///////////////sign in and sing up////////////////////
  var input1=$("<input type=text id=FirstName> <br>")
input1.attr("placeholder" ," here your first name")
 input1.appendTo(".signUp")
 var input2=$("<input type=text id=LastName> <br> ")
 input2.attr("placeholder"," your LastName")
 input2.appendTo(".signUp")
 var input3=$("<input type=email id=email><br>")
 input3.attr("placeholder" ," here your email")
 input3.appendTo(".signUp")
 var input4= $("<input type=number id=number><br>")
 input4.attr("placeholder" ," here your phone number")
 input4.appendTo(".signUp")
 var input5= $("<input type=password id=passeword ><br>")
 input5.attr("placeholder" ," here your password")
 input5.appendTo(".signUp")
 var input6= $("<input type=password id=confirm ><br>")
 input6.attr("placeholder" ," confirm your password here")
 input6.appendTo(".signUp")
var button1 =$("<button>clickHere to sign up!</button><br>")
button1.attr("id","signup")
button1.appendTo(".signUp")
///////////////////////////////////////////////////////////////
var input7=$("<input type=text id=gmail><br>")
input7.attr("placeholder" ," your mail")
 input7.appendTo(".signIn")
 var input8=$("<input type=password id=password ><br>")
 input8.attr("placeholder" ," here your password")
 input8.appendTo(".signIn")
var button2 =$("<button>clickHere to log in !</button><br>")
button2.attr("id","login")
button2.appendTo(".signIn")
/////////////////to sign up/////////////////////////////
var users=[]
$("#signup").click(function() {
  if(users.includes(input3.val())){
    alert('This email is already in use')
  }
  else if (input3.val().length > 8 && input1.val().length > 0 && input2.val().length > 0 && input2.val().length > 0 && input4.val().length > 0 && input5.val().length > 0 && input6.val().length > 0 && input5.val() === input6.val()) {
      $(".signUp").hide()
      $(".signIn").show()
      users.push(input3.val(),input5.val())
  } else {
      alert('Please fill all your information')
  }
});
/////////////////signIn/////////////////////////////////
$("#login").click(function() {
  if (input7.val() === input3.val() && input5.val() === input8.val()) {
      $(".signIn").hide()
      $(".narve").show()
     
  } else {
      alert('Please Check Your Password or email')
  }
});
  ///////////////to show the products //////////////////
var opened = false;
$("#product-btn").on('click',function(){
  if(opened == false) {
    $('#product').css({
      "display": "block",
    })
    opened = true;
  } else {
    $('#product').css({
      "display": "none",
    });
    opened = false;
  }
});
/////////////////show the scores /////////////////
$("#scores-btn").on('click',function(){
  if(opened == false) {
    $('#scores').css({
      "display": "block",
    })
    opened = true;
  } else {
    $('#scores').css({
      "display": "none",
    });
    opened = false;
  }
});
//////////////show the tickets /////////////////
$("#ticket-btn").on('click',function(){
  if(opened == false) {
    $('#tickets').css({
      "display": "block",
    })
    opened = true;
  } else {
    $('#tickets').css({
      "display": "none",
    });
    opened = false;
  }
});
//////////////show the news///////////////////
$("#news-btn").on('click',function(){
  if(opened == false) {
    $('#newws').css({
      "display": "block",
    })
    opened = true;
  } else {
    $('#newws').css({
      "display": "none",
    });
    opened = false;
  }
});
//////////////show the best player////////////
$("#best-btn").on('click',function(){
  if(opened == false) {
    $('#best').css({
      "display": "block",
    })
    opened = true;
  } else {
    $('#best').css({
      "display": "none",
    });
    opened = false;
  }
});
//////////////add the things selected /////////////////
var products = [];
$(".button-cart").on('click',function(){
  var container = $(this).parent(".btn-parent").parent(".container");
  var price = container.find(".price")[0].innerHTML;
  var name = container.find(".name-product")[0].innerHTML;
  var product = {
    "name": name,
    "price": price
  };
  products.push(product);
  $("#qte").html("("+products.length+")");
  alert('Product added');
});
////////////////////////////
$("#cart-btn").on("click",function(){
  products.forEach(e => {
    $("#cart-list").append("<div><h1>"+e.name+"</h1><h2>"+e.price+"</h2></div>")
  }) 
});
//////////////your best player///////////////
$("#best").click(function (e) { 
  alert('thank you for your choose!')
  })
;
