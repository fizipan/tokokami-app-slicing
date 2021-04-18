$(window).scroll(function () {
  let wscroll = $(this).scrollTop();
  const sectionProduct = $('#new-products');
  const cardInfo = $('.payment-info');

  if (wscroll > sectionProduct.offset().top - 400) {
    cardInfo.addClass('toggled');
  } else {
    cardInfo.removeClass('toggled');
  }
});
