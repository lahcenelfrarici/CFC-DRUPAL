(function ($) {

  $(document).ready(function () {
    $("#customers-services").owlCarousel({
      margin: 5,
      loop: true,
      dots: true,
       autoHeight: true,
      nav: true,
      items: 3,
      center: true, // Add this line
      navText: ["<img src='/../themes/custom/ux4mation/public/images/left-arrow-1.png'>", "<img src='/../themes/custom/ux4mation/public/images/right-arrow-1.png'>"],

      responsive: {
        0: {
          items: 1
        },
        600: {

          items: 2
        },
        1000: {
          items: 3
        }
      }
    });
    var owl = $('#customers-services');
    var totalItems = owl.find('.item').length;
    var currentSlide = 1;

    function updateCounter() {
      $('.counter').text(currentSlide + ' of ' + totalItems);
    }
    var owl = $('#customers-services');
    var totalItems = owl.find('.item').length;
    var currentSlide = 1;

    function updateCounter() {
      $('.counter').text(currentSlide + ' of ' + totalItems);
    }

    owl.owlCarousel({
      loop: true,
      center: true,
      margin: -38,
      dots: false, // Disable dots
      nav: false, // Disable default nav
      autoplayTimeout: 5000,
      smartSpeed: 450,
      responsive: {
        0: {
          items: 1
        },
        600: {

          items: 2
        },
        1000: {
          items: 3
        }
      }
    });

    $('.prev-btn').click(function () {
      owl.trigger('prev.owl.carousel');
    });

    $('.next-btn').click(function () {
      owl.trigger('next.owl.carousel');
    });

    owl.on('changed.owl.carousel', function (event) {
      currentSlide = event.item.index - event.relatedTarget._clones.length / 2 + 1;
      if (currentSlide > totalItems) {
        currentSlide = currentSlide - totalItems;
      }
      if (currentSlide <= 0) {
        currentSlide = totalItems + currentSlide;
      }
      updateCounter();
    });

    updateCounter(); // Initial counter setup


    // Toggle pour le menu mobile


    $(".mobile-menu-toggle").click(function () {
      $(".mobile-menu").toggleClass("open");
    });

    // carousel logo

$('.brand-carousel').owlCarousel({
  dots: false,
  autoplayTimeout: 700,
  loop: true,
  margin: 10,
  autoplay: true,
  responsive: {
    0: {
      items: 2
    },
    600: {
      items: 3
    },
    1000: {
      items: 8
    }
  }
});





    // testimonial

    $('.testimonial-carousel').owlCarousel({
      nav: true,
      navText: ["<img src='/../themes/custom/ux4mation/public/images/left__1.png'>", "<img src='/../themes/custom/ux4mation/public/images/left__2.png'>"],
      dots: false,
      navigation: true,
      autoplayTimeout: 3000,
      autoHeight: true,
      loop: true,
      margin: 10,
      autoplay: false,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 1
        },
        1000: {
          items: 1
        }
      }
    })

  });


  $(document).ready(function () {
    // Fonction pour vérifier si un élément est dans le viewport
    function checkInView() {
      $('.card-clientleft, .card-clientright').each(function () {
        var elementTop = $(this).offset().top;
        var viewportBottom = $(window).scrollTop() + $(window).height();

        // Vérifiez si l'élément est dans le viewport
        if (elementTop < viewportBottom - 50) { // À 50px du bas du viewport
          $(this).addClass('in-view');
        }
      });
    }

    // Vérifiez si les éléments sont dans le viewport lors du scroll
    $(window).on('scroll', checkInView);

    // Vérifiez également lors du chargement de la page pour voir si des éléments sont déjà dans le viewport
    checkInView();
  });



  $(document).ready(function () {
    var owl = $('#customers-testimonials');
    var totalItems = owl.find('.item').length;
    var currentSlide = 1;

    function updateCounter() {
      $('.counter').text(currentSlide + ' of ' + totalItems);
    }

    owl.owlCarousel({
      loop: true,
      center: true,
      margin: -38,
      dots: false, // Disable dots
      nav: false, // Disable default nav
      autoplayTimeout: 5000,
      smartSpeed: 450,
      responsive: {
        0: {
          items: 1
        },
        600: {

          items: 2
        },
        1000: {
          items: 3
        }
      }
    });

    $('.prev-btn').click(function () {
      owl.trigger('prev.owl.carousel');
    });

    $('.next-btn').click(function () {
      owl.trigger('next.owl.carousel');
    });

    owl.on('changed.owl.carousel', function (event) {
      currentSlide = event.item.index - event.relatedTarget._clones.length / 2 + 1;
      if (currentSlide > totalItems) {
        currentSlide = currentSlide - totalItems;
      }
      if (currentSlide <= 0) {
        currentSlide = totalItems + currentSlide;
      }
      updateCounter();
    });

    updateCounter(); // Initial counter setup
  });
})(jQuery);
