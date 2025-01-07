(function ($) {
  $(document).ready(function () {
    $(".box-video").click(function () {
      $('iframe', this)[0].src += "&amp;autoplay=1";
      $(this).addClass('open');
    });
    //
    var jobCount = $('#list .in').length;
    $('.list-count').text(jobCount + ' items');


    $("#search-text").keyup(function () {
      //$(this).addClass('hidden');

      var searchTerm = $("#search-text").val();
      var listItem = $('#list').children('li');


      var searchSplit = searchTerm.replace(/ /g, "'):containsi('")

      //extends :contains to be case insensitive
      $.extend($.expr[':'], {
        'containsi': function (elem, i, match, array) {
          return (elem.textContent || elem.innerText || '').toLowerCase()
            .indexOf((match[3] || "").toLowerCase()) >= 0;
        }
      });


      $("#list li").not(":containsi('" + searchSplit + "')").each(function (e) {
        $(this).addClass('hiding out').removeClass('in');
        setTimeout(function () {
          $('.out').addClass('hidden');
        }, 300);
      });

      $("#list li:containsi('" + searchSplit + "')").each(function (e) {
        $(this).removeClass('hidden out').addClass('in');
        setTimeout(function () {
          $('.in').removeClass('hiding');
        }, 1);
      });


      var jobCount = $('#list .in').length;
      $('.list-count').text(jobCount + ' items');

      //shows empty state text when no jobs found
      if (jobCount == '0') {
        $('#list').addClass('empty');
      } else {
        $('#list').removeClass('empty');
      }

    });

    //
    $("#navbarNavDropdown .nav-item").hover(
      function () {
        $(this).addClass("hover-stable-line");
      },
      function () {
        $(this).removeClass("hover-stable-line");
      }
    );
    // HEADER SEARCH
    $("header .search-btn").on("click", function () {
      $("header .search--bar").slideToggle();
      $(".search--bar input").focus();
    });

    $("header .search--bar button").on("click", function (e) {
      e.preventDefault();
      $("header .search--bar").slideToggle();
    });
    var headerHeight = $('.header-transparent').outerHeight();

    $(window).scroll(function () {
      var scrollTop = $(window).scrollTop();
      var $mainMenu = $('.custom-header');

      if (scrollTop > headerHeight) {
        $mainMenu.addClass('is-sticky').css({
          'position': 'fixed',
          'width': '100%', // Adjust width as needed
          'left': '0',
          'top': '0'
        });
      } else {
        $mainMenu.removeClass('is-sticky').removeAttr('style');
      }
    });
    // Show the preloader for 3 seconds
    setTimeout(function () {
      // Hide the preloader
      $('#preloader').fadeOut('slow', function () {
        // Show the main content
        $('#content').fadeIn('slow');

        // Allow scrolling again
        $('body').css('overflow', 'auto');
      });
    }, 3000); // 3 seconds delay
    // Initialize the Bootstrap carousel with autoplay and interval
    $('#carouselExampleCaptions').carousel({
      interval: 3000, // 3 seconds interval
      pause: 'hover' // Pause the carousel on hover
    });

    // Add animation to the carousel captions when the slide changes
    $('#carouselExampleCaptions').on('slide.bs.carousel', function (e) {
      var $nextSlide = $(e.relatedTarget); // The slide being transitioned to
      var $caption = $nextSlide.find('.carousel-caption');

      // Add animation class
      $caption.addClass('animate__animated animate__fadeInUp');

      // Remove the animation class after the animation completes (optional)
      $caption.one('animationend', function () {
        $caption.removeClass('animate__animated animate__fadeInUp');
      });
    });
    // Menu
    $('.menu-subs-inner').each(function () {
      var menuCols = $(this).find('.menu-subs-col').length;

      switch (menuCols) {
        case 1:
          $(this).addClass("class-list-title");
          break;
          // case 6:
          //   $(this).addClass("class-for-6");
          //   break;
          // case 7:
          //   $(this).addClass("class-for-7");
          //   break;
        default:
          // Handle other cases if needed
          break;
      }
    });
    //
    $('.main-menu .navbar-toggler').click(function () {
      $('#navbarNavDropdown').toggleClass('show--menu');
    });
    $('.burger-menu').click(function () {
      $('#navbarNavDropdown').removeClass('show--menu');
    });

    $("#menu-second-main-mobile > li > .list-product-cat").each(
      function () {
        $(this).on("click", function () {
          // $('.list-product-cat').removeClass("hover-color-mobile");
          // $(this).addClass('hover-color-mobile');
          if ($(this).hasClass("hover-color-mobile")) {
            $(this).removeClass("hover-color-mobile");
          } else {
            $(
              "#menu-second-main-mobile  > li > a .glyphicon"
            ).removeClass("glyphicon-menu-up");
            $(".list-product-cat").removeClass("hover-color-mobile");
            $(this).addClass("hover-color-mobile");
          }
        });
      }
    );

    $("#menu-second-main-mobile  > li > .list-product-cat").click(function (e) {
      var $this = $(this);
      var href = $this.attr("href");

      if (href !== "#") {
        return; // Don't prevent default behavior
      }

      $(
        "#menu-second-main-mobile > li .list-product-subnav"
      ).slideUp();
      if (!$this.next().is(":visible")) {
        $this.next().slideDown();
      }
      e.stopPropagation();

      var spann = $this.find(".glyphicon");
      spann.toggleClass("glyphicon-menu-up");
    });


    $(".list-product-subnav .menu-item-has-children .list-product-subnav")
      .parent()
      .addClass("li_with_arrow");

    function removeinverse(indexElment) {
      $(".list-product-subnav .menu-item-has-children a").each(function () {
        if (indexElment !== $(this).parent().index()) {
          $(this).removeClass("inverse_arrow");
          $(this).next().removeClass("showmostdropdown");
        }
      });
    }
    $(".list-product-subnav .menu-item-has-children a").on("click", function () {
      removeinverse($(this).parent().index());
      $(this).toggleClass("inverse_arrow");
    });
    var inner_hs = $(
        ".show_all_menu .list-product-subnav .list-product-subnav"
      )
      .parent()
      .children("a");
    inner_hs.on("click", function (e) {
      e.preventDefault();
      $(this).next().toggleClass("showmostdropdown");
    });
    // Metire
    $(".nos-metire-li").each(function () {
      $(this).on("click", function () {
        if ($(this).hasClass("niveau--3")) {
          $(this).removeClass("niveau--3");
        } else {
          $(".nos-metire-li").removeClass("niveau--3");
          $(this).addClass("niveau--3");
        }
      });
    });
  });
  $("#customers_work_1").owlCarousel({
    margin: 5,
    loop: true,
    dots: true,
    nav: true,
    items: 1,


    navText: ["<img src='../themes/custom/ux4mation/public/images/left__1.png'>", "<img src='../themes/custom/ux4mation/public/images/left__2.png'>"],

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
  });
  var owl_work = $('#customers_work_1');
  var totalItems = owl_work.find('.item').length;
  var currentSlide = 1;

  function updateCounter() {
    $('.counter').text(currentSlide + ' of ' + totalItems);
  }
  var owl_work = $('#customers_work_1');
  var totalItems = owl_work.find('.item').length;
  var currentSlide = 1;

  function updateCounter() {
    $('.counter').text(currentSlide + ' of ' + totalItems);
  }

  owl_work.owlCarousel({
    loop: true,
    center: true,

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
        items: 1
      }
    }
  });
  $('.brand-carouselhow').owlCarousel({
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
        items: 5
      }
    }
  })
  let targetNumber = 30; // Set the target number you want to reach
  let speed = 50; // Set the speed of the counter (in milliseconds)

  function countUp(element, target) {
    let current = 0;
    let increment = Math.ceil(target / (2000 / speed)); // Adjust increment based on speed

    let counterInterval = setInterval(function () {
      if (current < target) {
        current += increment;
        if (current > target) {
          current = target; // Make sure the count stops at the target number
        }
        $(element).text(current + " +");
      } else {
        clearInterval(counterInterval);
      }
    }, speed);
  }

  // Call the counter function
  countUp('.number', targetNumber);
  var owl = $('#customers-work');
  var totalItems = owl.find('.item').length; // Number of total items
  var currentSlide = 1;

  // Initialize Owl Carousel with 1 item visible
  owl.owlCarousel({
    items: 1, // Show 1 image at a time
    loop: true,
    margin: 10,
    nav: false, // Disable default nav
    dots: false, // Disable dots
    smartSpeed: 450
  });

  // Update counter on slide change
  function updateCounter() {
    $('.counter').text(currentSlide + ' of ' + totalItems);
  }

  // Custom Previous Button
  $('.prev-btn').click(function () {
    owl.trigger('prev.owl.carousel');
  });

  // Custom Next Button
  $('.next-btn').click(function () {
    owl.trigger('next.owl.carousel');
  });

  // Update counter when carousel changes
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

  // Initial counter setup
  updateCounter();
  // Smooth scrolling for elements with class "nav-item"
  $('.nav-item a[href^="#"]').on('click', function (e) {
    e.preventDefault();

    var target = $(this.getAttribute('href'));

    if (target.length) {
      var scrollOffset = 123 + 40; // 163px total offset

      $('html, body').animate({
        scrollTop: target.offset().top - scrollOffset
      }, 1000); // Duration of the scroll (1000ms = 1 second)
    }
  });

// Show modal on button click
$('.btn').click(function() {
  $('.modul--form').fadeIn(300); // Show the modal with fade-in effect
});

// Close modal on clicking X
$('.modul--form .close').click(function() {
  $('.modul--form').fadeOut(300); // Hide the modal with fade-out effect
});

// Close modal on clicking outside the modal content
$(document).mouseup(function(e) {
  var modalContent = $('.modul--form .modal-content');
  if (!modalContent.is(e.target) && modalContent.has(e.target).length === 0) {
      $('.modul--form').fadeOut(300); // Hide modal if click is outside content
  }
});
// On form submit
$('#webform-submission-contact-add-form').submit(function(e) {
  // Basic validation
  var isValid = true;
  $('#webform-submission-contact-add-form input[required], #webform-submission-contact-add-form textarea[required]').each(function() {
    if ($(this).val() === '') {
      isValid = false;
      alert('Please fill all required fields.');
      return false;
    }
  });

  // If valid, show modal and allow form to submit
  if (isValid) {
    $('#thank-you-modal').fadeIn();

    // Allow form submission (no e.preventDefault)
    return true;
  } else {
    // Prevent form submission if validation fails
    e.preventDefault();
  }
});

// Close modal functionality
$('.close-modal').click(function() {
  $('#thank-you-modal').fadeOut();
});
})(jQuery);
