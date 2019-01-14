//****Simple Number Calculations****

var invalidInput = "<span class='custom-bold-red'> Please correct input and try again. </span>";

function validate() {
    $("#resultHdr").show();
    var numArray = makeArray3();
    var checkNum = Math.min.apply(null, numArray);
    if (checkNum == -1) {
        $("#numResult").html(invalidInput);
        $("#minResult").html("");
        $("#maxResult").html("");
        $("#result").html("");
        $("#sumResult").html("");
        $("#meanResult").html("");
    } else {
        showArray(numArray);
        minNum(numArray);
        maxNum(numArray);
        multiplyBy(numArray);
        sumArray(numArray);
        meanArray(numArray);
    }
}

function meanArray(x) {
    var sum = 0;
    var count = 0;
    for (i = 0; i < x.length; i++) {
        sum += (x[i]);
        count++;
    }
    $("#meanResult").html("<b> Mean Total: </b>" + (sum / count));
}

function sumArray(x) {
    var numArray = x;
    var sum = 0;
    for (i = 0; i < numArray.length; i++) {
        sum += Number(numArray[i]);
    }
    $("#sumResult").html("<b> Sum Total: </b>" + sum.toLocaleString());
}

function minNum(x) {
    var minNum = Math.min.apply(null, x);
    $("#minResult").html("<b> Minimum Value: </b>" + minNum);
}
function maxNum(x) {
    var maxNum = Math.max.apply(null, x);
    $("#maxResult").html("<b> Max Value: </b>" + maxNum);
}

function makeArray4() {
    var y = 1000;
    var numArray = [];
    var $list = $("#simplemath input[type='text']");
    $list.each(function (i, v) {
        numArray[i] = isPosInteger($(v).val(), y) == -1 ? "INVALID NUMBER" : isPosInteger($(v).val(), y);
    });
    return numArray;
}

//Making array using .each and function (i, v)
function makeArray3() {
    var y = 1000;
    var numArray = [];
    var $list = $("#simplemath input[type='text']");
    $list.each(function (i, v) {
        numArray[i] = isPosInteger($(v).val(), y);
        if (numArray[i] == -1) {
            $(v).val("INVALID NUMBER");
        }
    });
    return numArray;
}

//Make array using .each and .push
function makeArray2() {
    var y = 1000;
    var numArray = [];
    var i = 0;
    $("#simplemath input[type='number']").each(function () {
        numArray.push(isPosInteger($(this).val(), y));
    });
    return numArray;
}

//Make array tageting each ID and setting to separate variables
function makeArray() {
    var y = 1000;
    var num1 = isPosInteger($("#firstNumber").val(), y);
    var num2 = isPosInteger($("#secondNumber").val(), y);
    var num3 = isPosInteger($("#thirdNumber").val(), y);
    var num4 = isPosInteger($("#fourthNumber").val(), y);
    var num5 = isPosInteger($("#fifthNumber").val(), y);
    var numArray = [num1, num2, num3, num4, num5];
    return numArray;
}

function showArray(x) {
    $("#numResult").html("<b> Validated Numbers: </b>" + x.toString());
}

function multiplyBy(x) {
    var numArray = x;
    var sum = 1;
    for (i = 0; i < numArray.length; i++) {
        sum *= Number(numArray[i]);
    }
    $("#result").html("<b> Multiplied Total: </b>" + sum.toLocaleString());
}

function isPosInteger(x, y) {
    var num = Number(x);
    var posInt = Math.round(num) === num && num > 0 && num <= y ? num : -1;
    return posInt;
}

//Palindrome
function palindrome() {
    var pStr = $("#palWord").val();
    var filteredStr = removeSpecial(pStr);
    $("#palResult1").html("<span class='custom-bold-red'>" + "( " + filteredStr + " )" + "</span> reversed is <span class='custom-bold-red'>" + "( " + reverseString(filteredStr) + " )" + "</span>.");
    $("#palResult2").html(testString(filteredStr));
}

function removeSpecial(str) {
    var outString = str.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '');
    return str.trim(outString);
}

function reverseString(str) {
    return str.split("").reverse().join("");
}

function testString(str) {
    var str = str.toLowerCase();
    if (str == "") {
        return "The word or phrase is <span class='custom-bold-red'>BLANK</span>.";
    }
    else if (str === reverseString(str)) {
        return "The word or phrase <span class='custom-bold-red'>is</span> a palindrome.";
    }
    else {
        return "The word or phrase <span class='custom-bold-red'>is not</span> a palindrome.";
    }
}

//Method to reset method call count (efficiency)
function resetCount() {
    callCnt = 0;
}
