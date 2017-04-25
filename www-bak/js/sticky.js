var wrap = $(".scroll-content");

wrap.on("scroll", function(e) {

  if (this.scrollTop > 50) {
    wrap.addClass("fix-search");
  } else {
    wrap.removeClass("fix-search");
  }

});
