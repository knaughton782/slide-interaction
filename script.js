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
    $(".actionDisplay").hide();
    $(".conditionDisplay").hide();
    $(".criterionDisplay").hide();
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
    $(".actionDisplay").hide();
    $(".conditionDisplay").hide();
    $(".criterionDisplay").hide();
  });
  /** END Back / Continue Button Functionality ****************/


  /****************** button content switching functionality ********************/
  // default state shows no answers
  $(".actionDisplay").hide();
  $(".conditionDisplay").hide();
  $(".criterionDisplay").hide();


  $('.btn').click(function () {
    switch (true) {
      case $(this).hasClass('action'):
        $(".actionDisplay").show();
        $(".conditionDisplay").hide();
        $(".criterionDisplay").hide();
        break;
      case $(this).hasClass('condition'):
        $(".actionDisplay").hide();
        $(".conditionDisplay").show();
        $(".criterionDisplay").hide();
        break;
      case $(this).hasClass('criterion'):
        $(".actionDisplay").hide();
        $(".conditionDisplay").hide();
        $(".criterionDisplay").show();
        break;
    }



  })
  /****************** end content switching ********************/

}); // jquery end tag
