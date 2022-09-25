$("#view-work").on("click", function () {
  const images = $("#images").position().top;

  $("html, body").animate(
    {
      scrollTop: images,
    },
    900
  );
});

$("#view-accolades").on("click", function () {
  const accolades = $("#accolades").position().top;

  $("html, body").animate(
    {
      scrollTop: accolades,
    },
    1800
  );
});
