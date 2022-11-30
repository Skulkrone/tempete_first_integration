$(document).ready(function () {
  $("a.entrer").click(function () {
    $(this).toggle(function () {
      if ($("div.content").is(":hidden")) {
        $("div.content").slideDown("slow");
        $("a.entrer").show();
      } else {
        $("div.content").slideUp("slow");
        $("a.entrer").show();
      }
    });
  });
});

$(document).ready(function () {
  $("div.rond").mouseover(function () {
    if ($(this).addClass("gros", "gros p"));
  });
  $("div.rond").mouseout(function () {
    if ($(this).removeClass("gros", "gros p"));
  });
});

$(document).ready(function () {
  $(".js-scrollTo").on("click", function () {
    var page = $(this).attr("href");
    var speed = 3050;
    $("html, body").animate({ scrollTop: $(page).offset().top }, speed);
    return false;
  });
});

$(document).ready(function () {
  $("#cookie-accept").click(function () {
    $.cookie("acceptCookies", "On", { expires: 30 * 12 });
    $(".cookie_banner").fadeOut();
  });
});
