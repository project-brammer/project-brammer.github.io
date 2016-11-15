$(document).ready(function() {
  $('.menu-button').sidr();
  $('.close-button').sidr('close', 'sidr-main');
  if ( $('.meta-stick').is(":visible")){
    stickyMeta();
  }
  $('.post a').attr('target', '_blank').attr('title','This link will open in a new window.');
  socialShare();
  headerScroll();
  filterButtons();
});

// FUNCTIONS

function socialShare(){
  $(".js-social-share").on("click", function(e) {
  e.preventDefault();

  windowPopup($(this).attr("href"), 500, 300);
  });
  var jsSocialShares = document.querySelectorAll(".js-social-share");
  if (jsSocialShares) {
    [].forEach.call(jsSocialShares, function(anchor) {
      anchor.addEventListener("click", function(e) {
        e.preventDefault();

        windowPopup(this.href, 500, 300);
      });
    });
  }
}

function headerScroll(){
  $(window).scroll(function() {
  var siteHeader = $('#site-header-container')
  var siteFooter = $('#site-footer-container')
  if ($(this).scrollTop() > 1){  
      siteHeader.addClass("sticky");
    }
    else{
      siteHeader.removeClass("sticky");
    }
  });
}

function windowPopup(url, width, height) {
  // Calculate the position of the popup so
  // it’s centered on the screen.
  var left = (screen.width / 2) - (width / 2),
      top = (screen.height / 2) - (height / 2);

  window.open(
    url,
    "",
    "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,width=" + width + ",height=" + height + ",top=" + top + ",left=" + left
  );
}

function filterButtons(){
  var $btns = $('.filter-buttons').click(function() {
  if (this.id == 'all') {
    $('.post').show();
  } else {
    var $el = $('.' + this.id).show();
    $('.post').not($el).hide();
  }
  $btns.removeClass('active');
  $(this).addClass('active');
  })
}

function stickyMeta(){
  $(window).scroll(function() {
    var Meta = $('.meta-stick')
    var TopPos = $(this).scrollTop()
    if (TopPos > 1) {  
        Meta.css('top', TopPos + "px" )
      }
    else if(TopPos < 1) {
      Meta.css('top','18px');
    }
    else{
      Meta.css('top','18px');
    }
  });

  $(window).scroll(function(){
    if ( ($(document).height() - $(window).height()) - $(window).scrollTop() < 150 ){
      $('.meta-stick').fadeOut(300);
    }
    else {
      $('.meta-stick').fadeIn(300);
    }
  });
}
