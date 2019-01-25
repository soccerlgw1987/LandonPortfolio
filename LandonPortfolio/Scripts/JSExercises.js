//JS Modal Calculations

//@* Math *@
$("#resultHdr").hide();
//How do I use JQuery to tell the button what to do when I click
$("#btnNumber").click(function () {
    $("#resultHdr").show();
    //How do I use JQuery to get the value inside the input with id-num1?
    var num1 = Number($("#num1").val());
    var num2 = Number($("#num2").val());
    var num3 = Number($("#num3").val());
    var num4 = Number($("#num4").val());
    var num5 = Number($("#num5").val());

    if (num1 > 1000 || num1 < 1 || isNaN(num1) || num1 % 1 != 0 || num2 > 1000 || num2 < 1 || isNaN(num2) || num2 % 1 != 0 || num3 > 1000 || num3 < 1 || isNaN(num3) || num3 % 1 != 0 || num4 > 1000 || num4 < 1 || isNaN(num4) || num4 % 1 != 0 || num5 > 1000 || num5 < 1 || isNaN(num5) || num5 % 1 != 0) {
        $("#num1").val("Please Correct Number");
        $("#num2").val("Please Correct Number");
        $("#num3").val("Please Correct Number");
        $("#num4").val("Please Correct Number");
        $("#num5").val("Please Correct Number");
        $("#sum").html("Please correct input and try again.");
        $("#product").html("Please correct input and try again.");
        $("#avg").html("Please correct input and try again.");
        $("#max").html("Please correct input and try again.");
        $("#min").html("Please correct input and try again.");
    } else {
        //Calculate the Sum
        var sum = num1 + num2 + num3 + num4 + num5;
        //Calculate the Product
        var product = num1 * num2 * num3 * num4 * num5;
        //Calculate the Average
        var avg = sum / 5;
        //Calculate the Largest
        var max = Math.max(num1, num2, num3, num4, num5);
        //Calculate the Smallest
        var min = Math.min(num1, num2, num3, num4, num5);
        
        $("#sum").html("The sum of your numbers is: " + sum);
        $("#product").html("The product of your numbers is: " + product);
        $("#avg").html("The average of your numbers is: " + avg);
        $("#max").html("The max of your numbers is: " + max);
        $("#min").html("The min of your numbers is: " + min);
    }
});

$("#btnNumber2").click(function () {
    $("#resultHdr").hide();
    /* Single line Reset function executes on click of Reset Button */
    $("#num1, #num2, #num3, #num4, #num5").val("");
    $("#sum, #product, #avg, #max, #min").html("");
});

//@* Factorial *@
$("#resultHdrFact").hide();
$("#factSubmit").click(function () {
    $("#resultHdrFact").show();
    var x = $("#factNumber").val();
    var y = 100;
    if (x < 1 || x > y || isNaN(x) || x % 1 != 0) {
        $("#factNumber").val("Please Correct Number");
        $("#factResult").html("Please correct input and try again.");
    } else {
        for (var i = x - 1; i > 1; i--) {
            x = x * i;
        }
    $("#factResult").html("The factorial is " + x);
    }
});

$("#factRes").click(function () {
    $("#resultHdrFact").hide();
    $("#factNumber").val("");
    $("#factResult").html("");
});

//@* Fizz *@
$("#resultHdrFizz").hide();
$("#fizzSubmit").click(function () {
    $("#resultHdrFizz").show();
    var num1 = $("#FBFirstNum").val();
    var num2 = $("#FBSecondNum").val();
    var y = 100;
    var myArray = [];

    if (num1 < 1 || num2 < 1 || num1 > y || num2 > y || isNaN(num1) || isNaN(num2) || num1 % 1 != 0 || num2 % 1 != 0) {
        $("#FBFirstNum").val("Please Correct Number");
        $("#FBSecondNum").val("Please Correct Number");
        $("#FBResult1").html("Please correct input and try again.");
    } else {
        for (var i = 1; i <= 100; i++) {
            if (i % num1 == 0 && i % num2 == 0) {
                myArray.push("<span class='fizzBuzz'>Fizz-Buzz</span>");
            }
            else if (i % num1 == 0) {
                myArray.push("<span class='fizz'>Fizz</span>");
            }
            else if (i % num2 == 0) {
                myArray.push("<span class='buzz'>Buzz</span>");
            }
            else {
                myArray.push(i);
            }
        }
        $("#FBResult1").html(myArray.join(', '));
    }
});

$("#fizzRes").click(function () {
    $("#resultHdrFizz").hide();
    $("#FBFirstNum").val("");
    $("#FBSecondNum").val("");
    $("#FBResult1").html("");
});

//@* Palidrome *@
$("#resultHdrPal").hide();
$("#palSubmit").click(function () {
    $("#resultHdrPal").show();
    var userString = $("#palWord").val();
    var userLowerString = $("#palWord").val();
    if (userString == userString.split('').reverse().join('') || userLowerString.toLowerCase() == userLowerString.toLowerCase().split('').reverse().join('')) {
        $("#palResult1").html(userString + " is a palindrome.");
    }
    else {
        $("#palResult1").html(userString + " is not a palindrome.");
    }
});

$("#palRes").click(function () {
    $("#resultHdrPal").hide();
    $("#palWord").val("");
    $("#palResult1").html("");
    $("#palResult2").html("");
});

//Toggle Clear
$('a[data-toggle="tab"]').click(function () {
    clearModalData();
});

function clearModalData() {
    $("#resultHdr").hide();
    $("#num1, #num2, #num3, #num4, #num5").val("");
    $("#sum, #product, #avg, #max, #min").html("");
    $("#resultHdrFact").hide();
    $("#factNumber").val("");
    $("#factResult").html("");
    $("#resultHdrFizz").hide();
    $("#FBFirstNum").val("");
    $("#FBSecondNum").val("");
    $("#FBResult1").html("");
    $("#resultHdrPal").hide();
    $("#palWord").val("");
    $("#palResult1").html("");
    $("#palResult2").html("");
    $("#mathCode").hide();
    $("#factorialCode").hide();
    $("#fizzCode").hide();
    $("#palinCode").hide();
    $("#toggleCode").text("SHOW CODE")
}

//Toggle Code
function toggleCode() {
    
    if ($("#toggleCode").text() == "SHOW CODE") {
        $("#toggleCode").text("HIDE CODE");
        
    }
    else {
        $("#toggleCode").text("SHOW CODE");
        
    }
    var activeTab = $("#modalNav").find(".active");
    if (activeTab.text() == "Math") {
        $("#mathCode").toggle();
    }
    else if (activeTab.text() == "Factorial") {
        $("#factorialCode").toggle();
    }
    else if (activeTab.text() == "Fizz-Buzz") {
        $("#fizzCode").toggle();
    }
    else if (activeTab.text() == "Palindrome") {
        $("#palinCode").toggle();
    }
}

