$(document).ready(function () {

   /** continue/back BUTTON FUNCTIONALITY  **/

  /** HIDE ALL SLIDES EXCEPT CURRENT, starts with first slide **/

  $('.allSlides .slide').each(function (e) {
    if (e != 0) {
      $(this).hide();
    }
  });

  // for each click on the continue button, hide the current slide and show the next one
  $('.continue').click(function () {
    if ($('.allSlides .slide:visible').next().length != 0) {
      $('.allSlides .slide:visible')
        .next()
        .show()
        .prev()
        .hide();
    } else {
      $('.allSlides .slide:visible').hide();
      $('.allSlides .slide:first').show(); //wraps around and shows first slide again
    }
    return false;
  });

  // for each click on the back button, hide the current slide and show the previous one
  $('.back').click(function () {
    if ($('.allSlides .slide:visible').prev().length != 0) {
      $('.allSlides .slide:visible')
        .prev()
        .show()
        .next()
        .hide();
    } else {
      $('.allSlides .slide:visible').hide();
      $('.allSlides .slide:last').show();
    }
    return false;
  });
  /** END Back / Continue Button Functionality ****************/

  // for each click on the skip button, hide the current slide and show the next one with the land class
  $('.skip').click(function () {
    // console.log('skip clicked');
    if ($('.allSlides .slide:visible').next().length != 0) {
      // console.log('did this one go?');
      $('.allSlides .slide:visible')
        .nextUntil('div.stop')
        .show()
        .prev()
        .hide();
      console.log('skip to stop triggered');
    } else {
      $('.allSlides .slide:visible').hide();
      $('.allSlides .slide:first').show(); //wraps around and shows first slide again
    }
    return false;
  });


  // for each click on the skipback button, hide the current slide and show the previous one with the landback class
  $('.skipBack').click(function () {
    // console.log('skip clicked');
    if ($('.allSlides .slide:visible').next().length != 0) {
      // console.log('did this one go?');
      $('.allSlides .slide:visible')
        .prevUntil('div.stopBack')
        .show()
        .next()
        .hide();
      console.log('skip to stop triggered');
    } else {
      $('.allSlides .slide:visible').hide();
      $('.allSlides .slide:first').show(); //wraps around and shows first slide again
    }
    return false;
  });


  /****************** button content switching functionality ********************/
  var intro = $("#intro");
  var learningObj = $("#learningObj");
  var prereqs = $("#prereqs");
  var requirements = $("#requirements");

  intro.show().addClass("selected");
  learningObj.hide();
  prereqs.hide();
  requirements.hide();

  function addIntro() {
    intro.show().addClass("selected");
    learningObj.hide();
    prereqs.hide();
    requirements.hide();
  }
  $("#introBtn").click(addIntro);

  function addlearningObj() {
    intro.hide();
    learningObj.show().addClass("selected");
    prereqs.hide();
    requirements.hide();
  }
  $("#learningObjBtn").click(addlearningObj);

  function addPrereqs() {
    intro.hide();
    learningObj.hide();
    prereqs.show().addClass("selected");
    requirements.hide();
  }
  $("#prereqsBtn").click(addPrereqs);

  function addRequirements() {
    intro.hide();
    learningObj.hide();
    prereqs.hide();
    requirements.show().addClass("selected");
  }
  $("#reqsBtn").click(addRequirements);
/****************** end slide 2 content switching ********************/



});

// future value calculation is FV = PV(1 + i)^time

/* ****************** for first exercise slide midway through lecture1 ******************* */
// exercise 1 - this exercise is in lecture1.html
function FV(principal, interest, time) {
  if (principal == 100 && interest == .10 && time == 10) {
    var answer = principal * Math.pow((1 + interest), time);
    return "The future value is $" + answer.toFixed(2) + ". Good job!";
  } else {
    return answer = "Please check your variables and try again."
  }
}

function calc_FV() {
  var principal = parseFloat(document.getElementById('pvalue').value);
  principal.toFixed(2);
  var interest = parseFloat(document.getElementById('int').value);
  interest.toFixed(2);
  var time = document.getElementById('yrs').value;
  var ans = FV(principal, interest, time);

  document.getElementById('answer').innerHTML = ans;
}
/* ****************** end slide 15 ******************* */



/* ************************************* */
/* ****************** for EXERCISES PAGE ******************* */
/* ******** for exercise 2 *********** */
function ex_2(principal, interest, time) {
  if (principal == 2000 && interest == 0.08 && time == 15) {
    var answer = principal * Math.pow((1 + interest), time);
    return `Your variables are correct!`;
  } else {
    return `Please check the variables and try again.`;
  }
}
function exercise_2() {
  var principal = parseFloat(document.getElementById('pvalue-ex2').value);
  principal.toFixed(2);
  var interest = parseFloat(document.getElementById('int-ex2').value);
  interest.toFixed(2);
  var time = document.getElementById('yrs-ex2').value;
  var ans = ex_2(principal, interest, time);

  document.getElementById('answer-ex2').innerHTML = ans;
}
/* ******** end exercise 2 *********** */




/* ******** for exercise 3 *********** */
function ex_3(futureValue) {
  if (futureValue == 6344.34) {
    return `Correct! The future value is $6344.34.`;
  } else {
    console.log('no here');
    return `Please check your math and try again.`;
  }
}
function exercise_3() {
  var futureValue = parseFloat(document.getElementById('fvalue-ex3').value);
  futureValue.toFixed(2);
  var ans = ex_3(futureValue);

  document.getElementById('answer-ex3').innerHTML = ans;
}
/* ******** end exercise 3 *********** */



/* ************  exercise 4 *************** */
function ex_4(principal, futureValue, interest, time) {
  if (futureValue == 1000 && interest == 0.12 && time == 20) {
    var answer = principal * Math.pow((1 + interest), time);
    return `Your variables are correct!`;
  } else {
    return `Please check the variables and try again.`;
  }
}
function exercise_4() {
  var principal = parseFloat(document.getElementById('pvalue-ex4').value);
  principal.toFixed(2);
  var futureValue = parseFloat(document.getElementById('fvalue-ex4').value);
  futureValue.toFixed(2);
  var interest = parseFloat(document.getElementById('int-ex4').value);
  interest.toFixed(2);
  var time = document.getElementById('yrs-ex4').value;
  var ans = ex_4(principal, futureValue, interest, time);

  document.getElementById('answer-ex4').innerHTML = ans;
}
/* ******** end exercise 4 *********** */




/* ******** for exercise 5 *********** */
function ex_5(principal) {
  if (principal = 103.67) {
    // futureValue = principal * Math.pow((1 + interest), time);
    return `Correct! The present value is $103.67.`;
  } else {
    return answer = "Please check your math and try again."
  }
}
function exercise_5() {
  var principal = parseFloat(document.getElementById('pvalue-ex5').value);
  principal.toFixed(2);
  var ans = ex_5(principal);

  document.getElementById('answer-ex5').innerHTML = ans;
}
/* ******** end exercise 5 *********** */




/* ************  exercise 6 *************** */
function ex_6(principal, futureValue, time) {
  if (futureValue == 2 && principal == 1 && time == 10) {
    // var answer = principal * Math.pow((1 + interest), time);
    return `Your variables are correct!`;
  } else {
    return `Please check the variables and try again.`;
  }
}
function exercise_6() {
  var principal = parseFloat(document.getElementById('pvalue-ex6').value);
  principal.toFixed(2);
  var futureValue = parseFloat(document.getElementById('fvalue-ex6').value);
  futureValue.toFixed(2);
  // var interest = parseFloat(document.getElementById('int-ex6').value);
  // interest.toFixed(2);
  var time = document.getElementById('yrs-ex6').value;
  var ans = ex_6(principal, futureValue, time);

  document.getElementById('answer-ex6').innerHTML = ans;
}
/* ******** end exercise 6 *********** */





/* ******** for exercise 7 *********** */
function ex_7(interest) {
  if (interest = 7.177) {
    return `Correct! The interest is 7.177%.`;
  } else {
    return answer = "Please check your math and try again."
  }
}
function exercise_7() {
  var interest = parseFloat(document.getElementById('int-ex7').value);
  interest.toFixed(2);
  var ans = ex_7(interest);

  document.getElementById('answer-ex7').innerHTML = ans;
}
/* ******** end exercise 7 *********** */




/* ************  exercise 8 *************** */
function ex_8(principal, futureValue, interest) {
  if (futureValue == 2 && principal == 1 && interest == .12) {
    // var answer = principal * Math.pow((1 + interest), time);
    return `Your variables are correct!`;
  } else {
    return `Please check the variables and try again.`;
  }
}
function exercise_8() {
  var principal = parseFloat(document.getElementById('pvalue-ex8').value);
  principal.toFixed(2);
  var futureValue = parseFloat(document.getElementById('fvalue-ex8').value);
  futureValue.toFixed(2);
  var interest = parseFloat(document.getElementById('int-ex8').value);
  interest.toFixed(2);
  // var time = document.getElementById('yrs-ex8').value;
  var ans = ex_8(principal, futureValue, interest);

  document.getElementById('answer-ex8').innerHTML = ans;
}
/* ******** end exercise 8 *********** */





/* ******** for exercise 9 *********** */
function ex_9(futureValue) {
  if (futureValue = 6.116) {
    return `Correct! It would take 6.116 years to double your investment.`;
  } else {
    return answer = "Please check your math and try again."
  }
}
function exercise_9() {
  var futureValue = parseFloat(document.getElementById('fvalue-ex8').value);
  futureValue.toFixed(2);
  var ans = ex_9(futureValue);

  document.getElementById('answer-ex9').innerHTML = ans;
}
/* ******** end exercise 9 *********** */




/* ******** for exercise 10 *********** */
function ex_10(futureValue) {
  if (futureValue = 1.1255) {
    return `Correct! The intersection of 3% and 4 years is 1.1255.`;
  } else {
    return answer = "Please check the table and try again."
  }
}
function exercise_10() {
  var futureValue = parseFloat(document.getElementById('fvalue-ex8').value);
  futureValue.toFixed(4);
  var ans = ex_10(futureValue);

  document.getElementById('answer-ex10').innerHTML = ans;
}
/* ******** end exercise 10 *********** */




/* ******** for exercise 11 *********** */
function ex_11(futureValue) {
  if (futureValue = 3376.50) {
    return `Correct! The FV is $3376.50.`;
  } else {
    return answer = "Please check the table and try again."
  }
}
function exercise_11() {
  var futureValue = parseFloat(document.getElementById('fvalue-ex8').value);
  futureValue.toFixed(2);
  var ans = ex_11(futureValue);

  document.getElementById('answer-ex11').innerHTML = ans;
}
/* ******** end exercise 11 *********** */





/* ************  exercise 12 *************** */
function ex_12(futureValue, interest, time) {
  if (futureValue == 20000 && interest == .07 && time == 18) {
    return `Your variables are correct!`;
  } else {
    return `Please check the variables and try again.`;
  }
}
function exercise_12() {
  // var principal = parseFloat(document.getElementById('pvalue-ex12').value);
  // principal.toFixed(2);
  var futureValue = parseFloat(document.getElementById('fvalue-ex12').value);
  futureValue.toFixed(2);
  var interest = parseFloat(document.getElementById('int-ex12').value);
  interest.toFixed(2);
  var time = document.getElementById('yrs-ex12').value;
  var ans = ex_12(futureValue, interest, time);

  document.getElementById('answer-ex12').innerHTML = ans;
}
/* ******** end exercise 12 *********** */




/* ******** for exercise 13 *********** */
function ex_13(principal) {
  if (principal = 5917.28) {
    return `Correct! The present value is $5917.28.`;
  } else {
    return answer = "Please check your math and try again."
  }
}
function exercise_13() {
  var principal = parseFloat(document.getElementById('pvalue-ex13').value);
  principal.toFixed(2);
  var ans = ex_13(principal);

  document.getElementById('answer-ex13').innerHTML = ans;
}
/* ******** end exercise 13 *********** */






/* ************  exercise 14 *************** */
function ex_14(futureValue, interest, time) {
  if (futureValue == 10000 && interest == .04 && time == 10) {
    return `Your variables are correct!`;
  } else {
    return `Please check the variables and try again.`;
  }
}
function exercise_14() {
  // var principal = parseFloat(document.getElementById('pvalue-ex14').value);
  // principal.toFixed(2);
  var futureValue = parseFloat(document.getElementById('fvalue-ex14').value);
  futureValue.toFixed(2);
  var interest = parseFloat(document.getElementById('int-ex14').value);
  interest.toFixed(2);
  var time = document.getElementById('yrs-ex14').value;
  var ans = ex_14(futureValue, interest, time);

  document.getElementById('answer-ex14').innerHTML = ans;
}
/* ******** end exercise 14 *********** */




/* ******** for exercise 15 *********** */
function ex_15(principal) {
  if (principal == 5917.28) {

    return `Correct! The present value is $5917.28.`;
  } else {
    return "Please check your math and try again."
  }
}
function exercise_15() {
  var principal = parseFloat(document.getElementById('pvalue-ex15').value);
  principal.toFixed(2);
  var ans = ex_15(principal);

  document.getElementById('answer-ex15').innerHTML = ans;
}
/* ******** end exercise 15 *********** */
