var value1 = $("#product1").val();
var value2 = $("#product2").val();
var value3 = $("#product3").val();
var value4 = $("#product4").val();
var value5 = $("#product5").val();
var value6 = $("#product6").val();
var value7 = $("#product7").val();
var value8 = $("#product8").val();
var value9 = $("#product9").val();
var value10 = $("#product10").val();
var value11 = $("#product11").val();
var value12 = $("#product12").val();
var value13 = $("#product13").val();
var value14 = $("#product14").val();


$("#product1").text(value1+" $");
$("#product2").text(value2+" $");
$("#product3").text(value3+" $");
$("#product4").text(value4+" $");
$("#product5").text(value5+" $");
$("#product6").text(value6+" $");
$("#product7").text(value7+" $");
$("#product8").text(value8+" $");
$("#product9").text(value9+" $");
$("#product10").text(value10+" $");
$("#product11").text(value11+" $");
$("#product12").text(value12+" $");
$("#product13").text(value13+" $");
$("#product14").text(value14+" $");

const pkr_rate = 160.25;

$(document).ready(function(){
    $(".usd").click(function(){
        $(".dropdown-toggle").text("USD");
        $("#product1").text(value1+" $");
        $("#product2").text(value2+" $");
        $("#product3").text(value3+" $");
        $("#product4").text(value4+" $");
        $("#product5").text(value5+" $");
        $("#product6").text(value6+" $");
        $("#product7").text(value7+" $");
        $("#product8").text(value8+" $");
        $("#product9").text(value9+" $");
        $("#product10").text(value10+" $");
        $("#product11").text(value11+" $");
        $("#product12").text(value12+" $");
        $("#product13").text(value13+" $");
        $("#product14").text(value14+" $");
    })
    $(".pkr").click(function(){
        $(".dropdown-toggle").text("PKR");
        $("#product1").text(value1*pkr_rate+" PKR");
        $("#product2").text(value2*pkr_rate+" PKR");
        $("#product3").text(value3*pkr_rate+" PKR");
        $("#product4").text(value4*pkr_rate+" PKR");
        $("#product5").text(value5*pkr_rate+" PKR");
        $("#product6").text(value6*pkr_rate+" PKR");
        $("#product7").text(value7*pkr_rate+" PKR");
        $("#product8").text(value8*pkr_rate+" PKR");
        $("#product9").text(value9*pkr_rate+" PKR");
        $("#product10").text(value10*pkr_rate+" PKR");
        $("#product11").text(value11*pkr_rate+" PKR");
        $("#product12").text(value12*pkr_rate+" PKR");
        $("#product13").text(value13*pkr_rate+" PKR");
        $("#product14").text(value14*pkr_rate+" PKR");
    })
})