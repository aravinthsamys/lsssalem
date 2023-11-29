
function dat() {
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let dat = document.querySelector("#date");
    dat.value = day + "/ " + month + "/ " + year;
}

function subtotal() {
    var amt1 = document.querySelector("#amount1");
    var amt2 = document.querySelector("#amount2");
    var amt3 = document.querySelector("#amount3");
    var amt4 = document.querySelector("#amount4");
    var amt5 = document.querySelector("#amount5");
    var amt6 = document.querySelector("#amount6");
    var amt7 = document.querySelector("#amount7");
    var amt8 = document.querySelector("#amount8");
    var amt9 = document.querySelector("#amount9");
    var amt10 = document.querySelector("#amount10");
    var subtotal = eval(amt1.value + "+" + amt2.value + "+" + amt3.value + "+" + amt4.value + "+" + amt5.value + "+" + amt6.value + "+" + amt7.value + "+" + amt8.value + "+" + amt9.value + "+" + amt10.value);
    document.querySelector("#subtotal").innerHTML = ""
    var amount = Number(eval(subtotal))
    document.querySelector("#subtotal").innerHTML = amount
    document.querySelector("#subtotal").style.visibility='hidden'
    var total=document.querySelector("#subtotal").innerHTML
    document.querySelector("#subtotalin").value=parseInt(total)
var totalin=document.querySelector("#subtotalin").value
    var cgst=totalin*0.08
    var sgst=totalin*0.08
    // console.log(cgst)
    document.querySelector("#cgst").value=parseInt(cgst)
    document.querySelector("#sgst").value=parseInt(sgst)
    var roundgst=cgst+sgst
    document.querySelector("#roundgst").value=parseInt(roundgst)
    var grandtotal=eval(totalin+"+"+roundgst)
    document.querySelector("#grandtotal").value=parseInt(grandtotal)
}

function removepro2() {
    document.querySelector("#prod2").value=null
    document.querySelector("#rate2").value="0"
    document.querySelector("#qty2").value="0"
    document.querySelector("#amount2").value="0"
    document.querySelector("#pro2 ").style.display = "none ";
    document.querySelector("#pro1-but ").style.display = "inline ";
    
}

function removepro3() {
    document.querySelector("#prod3").value=null
    document.querySelector("#rate3").value="0"
    document.querySelector("#qty3").value="0"
    document.querySelector("#amount3").value="0"
    document.querySelector("#pro3 ").style.display = "none ";
    document.querySelector("#pro2-but ").style.display = "inline ";
}

function removepro4() {
    document.querySelector("#prod4").value=null
    document.querySelector("#rate4").value="0"
    document.querySelector("#qty4").value="0"
    document.querySelector("#amount4").value="0"
    document.querySelector("#pro4 ").style.display = "none ";
    document.querySelector("#pro3-but ").style.display = "inline ";
}

function removepro5() {
    document.querySelector("#prod5").value=null
    document.querySelector("#rate5").value="0"
    document.querySelector("#qty5").value="0"
    document.querySelector("#amount5").value="0"
    document.querySelector("#pro5 ").style.display = "none ";
    document.querySelector("#pro4-but ").style.display = "inline ";
}

function removepro6() {
    document.querySelector("#prod6").value=null
    document.querySelector("#rate6").value="0"
    document.querySelector("#qty6").value="0"
    document.querySelector("#amount6").value="0"
    document.querySelector("#pro6 ").style.display = "none ";
    document.querySelector("#pro5-but ").style.display = "inline ";
}

function removepro7() {
    document.querySelector("#prod7").value=null
    document.querySelector("#rate7").value="0"
    document.querySelector("#qty7").value="0"
    document.querySelector("#amount7").value="0"
    document.querySelector("#pro7 ").style.display = "none ";
    document.querySelector("#pro6-but ").style.display = "inline ";
}

function removepro8() {
    document.querySelector("#prod8").value=null
    document.querySelector("#rate8").value="0"
    document.querySelector("#qty8").value="0"
    document.querySelector("#amount8").value="0"
    document.querySelector("#pro8 ").style.display = "none ";
    document.querySelector("#pro7-but ").style.display = "inline ";
}

function removepro9() {
    document.querySelector("#prod9").value=null
    document.querySelector("#rate9").value="0"
    document.querySelector("#qty9").value="0"
    document.querySelector("#amount9").value="0"
    document.querySelector("#pro9 ").style.display = "none ";
    document.querySelector("#pro8-but ").style.display = "inline ";
}

function removepro10() {
    document.querySelector("#prod10").value=null
    document.querySelector("#rate10").value="0"
    document.querySelector("#qty10").value="0"
    document.querySelector("#amount10").value="0"
    document.querySelector("#pro10 ").style.display = "none ";
    document.querySelector("#pro9-but ").style.display = "inline ";
}

function amt1() {
    let rate1 = parseFloat(document.querySelector("#rate1").value)
    let qty1 = parseFloat(document.querySelector("#qty1").value)
    document.querySelector("#amount1").value = "0"
    document.querySelector("#amount1").value = rate1 * qty1;
}

function amt2() {
    let rate1 = parseFloat(document.querySelector("#rate2").value)
    let qty1 = parseFloat(document.querySelector("#qty2").value)
    document.querySelector("#amount2").value = "0"
    document.querySelector("#amount2").value = rate1 * qty1;
}

function amt3() {
    let rate1 = parseFloat(document.querySelector("#rate3").value)
    let qty1 = parseFloat(document.querySelector("#qty3").value)
    document.querySelector("#amount3").value = "0"
    document.querySelector("#amount3").value = rate1 * qty1;
}

function amt4() {
    let rate1 = parseFloat(document.querySelector("#rate4").value)
    let qty1 = parseFloat(document.querySelector("#qty4").value)
    document.querySelector("#amount4").value = "0"
    document.querySelector("#amount4").value = rate1 * qty1;
}
3

function amt5() {
    let rate1 = parseFloat(document.querySelector("#rate5").value)
    let qty1 = parseFloat(document.querySelector("#qty5").value)
    document.querySelector("#amount5").value = "0"
    document.querySelector("#amount5").value = rate1 * qty1;
}

function amt6() {
    let rate1 = parseFloat(document.querySelector("#rate6").value)
    let qty1 = parseFloat(document.querySelector("#qty6").value)
    document.querySelector("#amount6").value = "0"
    document.querySelector("#amount6").value = rate1 * qty1;
}

function amt7() {
    let rate1 = parseFloat(document.querySelector("#rate7").value)
    let qty1 = parseFloat(document.querySelector("#qty7").value)
    document.querySelector("#amount7").value = "0"
    document.querySelector("#amount7").value = rate1 * qty1;
}

function amt8() {
    let rate1 = parseFloat(document.querySelector("#rate8").value)
    let qty1 = parseFloat(document.querySelector("#qty8").value)
    document.querySelector("#amount8").value = "0"
    document.querySelector("#amount8").value = rate1 * qty1;
}

function amt9() {
    let rate1 = parseFloat(document.querySelector("#rate9").value)
    let qty1 = parseFloat(document.querySelector("#qty9").value)
    document.querySelector("#amount9").value = "0"
    document.querySelector("#amount9").value = rate1 * qty1;
}

function amt10() {
    let rate1 = parseFloat(document.querySelector("#rate10").value)
    let qty1 = parseFloat(document.querySelector("#qty10").value)
    document.querySelector("#amount10").value = "0"
    document.querySelector("#amount10").value = rate1 * qty1;
}

function addplus2() {
    document.querySelector("#pro2").style.display = "block ";
    document.querySelector("#pro1-but ").style.display = "none ";
}

function addplus3() {
    document.querySelector("#pro3 ").style.display = "block ";
    document.querySelector("#pro2-but ").style.display = "none ";
}

function addplus4() {
    document.querySelector("#pro4 ").style.display = "block ";
    document.querySelector("#pro3-but ").style.display = "none ";
}

function addplus5() {
    document.querySelector("#pro5 ").style.display = "block ";
    document.querySelector("#pro4-but ").style.display = "none ";
}

function addplus6() {
    document.querySelector("#pro6 ").style.display = "block ";
    document.querySelector("#pro5-but ").style.display = "none ";
}

function addplus7() {
    document.querySelector("#pro7 ").style.display = "block ";
    document.querySelector("#pro6-but ").style.display = "none ";
}

function addplus8() {
    document.querySelector("#pro8 ").style.display = "block ";
    document.querySelector("#pro7-but ").style.display = "none ";
}

function addplus9() {
    document.querySelector("#pro9 ").style.display = "block ";
    document.querySelector("#pro8-but ").style.display = "none ";
}

function addplus10() {
    document.querySelector("#pro10 ").style.display = "block ";
    document.querySelector("#pro9-but ").style.display = "none ";
    document.querySelector("#pro10-but ").style.display = "none ";
}

// function validate()
// {
// let name=document.querySelector("#uname");
// if(name.value==""){
//     alert("null value")
//     document.document.querySelector("#uname").style.border="2px solid red";
//     return false;
// }
// }else {
//     alert("value okay")
//     document.document.querySelector("#uname").style.border="none";
//     return false
// }


// document.addEventListener('keydown', e => {
//     if (e.keyCode == 38) {
//       window.scrollBy({
//         top: -30,
//         behavior: 'smooth'
//       });
//     } else if (e.keyCode == 40) {
//       window.scrollBy({
//         top: 30,
//         behavior: 'smooth'
//       });
//     }
//   });