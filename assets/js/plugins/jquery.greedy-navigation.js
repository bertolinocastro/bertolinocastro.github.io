/*
* Greedy Navigation
*
* http://codepen.io/lukejacksonn/pen/PwmwWV
*
*/

var $nav = $('#site-nav');
var $btn = $('#site-nav button');
var $vlinks = $('#site-nav .visible-links');
var $hlinks = $('#site-nav .hidden-links');
var $search = $('#masthead__search-input');
var $result = $('.masterhead__gcse-searchresults-container');

var srfocs = false;

function updateNav() {

  var availableSpace = $btn.hasClass('hidden') ? $nav.width() : $nav.width() - $btn.width() - 14;

  // The visible list is overflowing the nav
  if($vlinks.width() > availableSpace) {

    // Move item to the hidden list
    $vlinks.children().last().prependTo($hlinks);

    // Show the dropdown btn
    if($btn.hasClass('hidden')) {
      $btn.removeClass('hidden');
      $btn.removeClass('close');
    }

    if($result.is(':visible')){
      $btn.addClass('close');
      $hlinks.removeClass('hidden');
    }

    // Show the list, if the input is opened
    if(!$search.is(':focus') && (srfocs || $search[0] == $(document.activeElement)[0])){
      $btn.addClass('close');
      $hlinks.removeClass('hidden');
      $search.addClass('masthead__search-notransition');
      $search.focus();
      $search[0].offsetHeight;
      $search.removeClass('masthead__search-notransition');
    }

  // The visible list is not overflowing
  } else {
    var extraSpace = $hlinks.children().length == 1 ? $btn.width()+14 : 0;
    var consumedSp = $hlinks.children().length ? $hlinks.children().first().width() : 0;
    // There is space for another item in the nav
    if(availableSpace+extraSpace > $vlinks.width()+consumedSp) {

      // Move the item to the visible list
      $hlinks.children().first().appendTo($vlinks);

      if(!$search.is(':focus') && (srfocs || $search[0] == $(document.activeElement)[0])){
        $search.addClass('masthead__search-notransition');
        $search.focus();
        $search[0].offsetHeight;
        $search.removeClass('masthead__search-notransition');
      }
    }

    // Hide the dropdown btn if hidden list is empty
    if($hlinks.children().length == 0) {
      $btn.addClass('hidden');
      $hlinks.addClass('hidden');
    }else if($result.is(':visible')){
      $btn.addClass('close');
      $hlinks.removeClass('hidden');
    }

  }

  // Recur if the visible list is still overflowing the nav
  if($vlinks.width() > availableSpace) {
    updateNav();
  }

}

// Window listeners

$(window).resize(function() {
  updateNav();
});

$btn.on('click', function() {
  if($hlinks.hasClass('hidden')){
    $(this).addClass('close');
    $hlinks.removeClass('hidden');
  }else{
    $(this).removeClass('close');
    $hlinks.addClass('hidden');
    $search.blur();
    srfocs = false;
    $result.hide();
    updateNav();
  }
});

$search.focusin(function(){
  srfocs = true;
});

$search.blur(function(){
  srfocs = false;
});

$search.on('transitionend', function(){
  updateNav();
});

updateNav();
