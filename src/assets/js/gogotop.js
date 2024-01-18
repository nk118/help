$(function () {
  $(".gototop").click(function () {
      jQuery("html,body").animate({
          scrollTop: 0
      }, 1000);
  });
});
