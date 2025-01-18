(function ($) {
  $(document).ready(function () {
    // Sidebar navigation
    $('.sidebar a').on('click', function (e) {
      e.preventDefault();

      // Remove active class from all sidebar links and add to clicked one
      $('.sidebar a').removeClass('active');
      $(this).addClass('active');

      // Show the corresponding content
      const target = $(this).attr('href');
      $('.content').removeClass('active');
      $(target).addClass('active');

      // Reset top tabs inside the active content
      $(target).find('.top-tabs button').removeClass('active').first().addClass('active');
      $(target).find('.tab-content').removeClass('active').first().addClass('active');
    });

    // Top tabs navigation
    $('.top-tabs button').on('click', function () {
      const parentContent = $(this).closest('.content');

      // Remove active class from all top tabs and add to clicked one
      $(this).siblings().removeClass('active');
      $(this).addClass('active');

      // Show the corresponding tab content
      const targetTab = $(this).data('tab');
      parentContent.find('.tab-content').removeClass('active');
      parentContent.find('#' + targetTab).addClass('active');
    });
    // Sticky Header on Scroll
    $(window).scroll(function () {
      var scrollTop = $(window).scrollTop();
      var $mainMenu = $('header');

      if (scrollTop > 0) {
        $mainMenu.addClass('is-sticky').css({
          'position': 'fixed',
          'width': '100%',
          'left': '0',
          'top': '0'
        });
      } else {
        $mainMenu.removeClass('is-sticky').removeAttr('style');
      }
    });

    // Counter Animation
    $('.counter').each(function () {
      const $this = $(this);
      const target = +$this.data('target');
      $({
        countNum: $this.text()
      }).animate({
        countNum: target
      }, {
        duration: 2000,
        easing: 'linear',
        step: function () {
          $this.text(Math.floor(this.countNum).toLocaleString());
        },
        complete: function () {
          $this.text(this.countNum.toLocaleString());
        }
      });
    });

    // Accordion Toggle
    $('.african_pioneer .accordion .card').click(function () {
      $('.african_pioneer .accordion .card').not(this).removeClass('active').find('.card-body').slideUp();
      $(this).toggleClass('active').find('.card-body').slideToggle();
      const attributeValue = $(this).data('attribute');
      console.log('Clicked card attribute:', attributeValue);
    });

    // Owl Carousel Initialization
    $('.banner_status_slider .owl-carousel').owlCarousel({
      // // stagePadding: 400,
      // // loop: true,
      // // items: 3,
      // // center:true,
      // // lazyLoad: true,
      // // autoplay: false,
      // // autoplaySpeed: 2000,
      // // autoplayTimeout: 5000,
      // // autoplayHoverPause: true,
      // // dots: false,
      // // responsive: {
      // //   0: {
      // //     items: 1,
      // //     stagePadding: null,

      // //   },
      // //   600: {
      // //     items: 1,
      // //     stagePadding: null,
      // //   },
      // //   1000: {
      // //     items: 3,

      // //   }
      // }
      stagePadding: 300,
      loop: true,
      items: 1,
      lazyLoad: true,
      autoplay: false,
      // margin: 30,
      autoplaySpeed: 2000,
      autoplayTimeout: 5000,
      autoplayHoverPause: true,
      autoHeight: false,
      responsive: {
        0: {
          items: 1,
          stagePadding: null,
          autoHeight: true,

        },
        600: {
          items: 1,
          stagePadding: null,
          autoHeight: true,
        },
        1000: {
          items: 1,

        }
      }

    });

    // Generate Alphabet Filter Buttons
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    const filterContainer = $("#filter");
    const articles = $(".article");

    alphabet.forEach(letter => {
      const button = $("<button>").text(letter);
      button.on("click", function () {
        filterArticles(letter, $(this));
      });
      filterContainer.append(button);
    });

    articles.show(); // Show all articles by default
    function filterArticles(letter, button) {
      $(".filter button").removeClass("active");
      button.addClass("active");
      articles.each(function () {
        const title = $(this).data("title");
        if (title.startsWith(letter)) {
          $(this).show();
        } else {
          $(this).hide();
        }
      });
    }
    // **************** 6666666
    // $('.members').slick({
    //   dots: true,
    //   infinite: false,
    //   speed: 300,
    //   slidesToShow: 7,
    //   slidesToScroll: 7,
    //   variableWidth: true,
    //   responsive: [{
    //     breakpoint: 768, // Define the breakpoint for smaller screens (e.g., tablets and phones)
    //     settings: {
    //       slidesToShow: 1, // Show only one slide
    //       slidesToScroll: 1, // Scroll one slide at a time
    //       variableWidth: false,

    //     }
    //   }]
    // });

    // // Custom Dropdown Logic
    // const $customSelect = $('#country-select');
    // const $selectedDiv = $customSelect.find('.select-selected');
    // const $itemsDiv = $customSelect.find('.select-items');

    // // Toggle dropdown visibility
    // $selectedDiv.on('click', function () {
    //   $customSelect.toggleClass('open');
    // });

    // // Handle option selection
    // $itemsDiv.on('click', 'div[data-value]', function () {
    //   const $option = $(this);
    //   const value = $option.data('value');
    //   const flagHtml = $option.find('img').prop('outerHTML');
    //   const countryName = $option.find('span').text();

    //   // Update the selected display
    //   $selectedDiv.html(`${flagHtml} <span>${countryName}</span>`);

    //   // Close dropdown
    //   $customSelect.removeClass('open');

    //   // Trigger custom change event
    //   $customSelect.trigger('change', {
    //     value
    //   });
    // });

    // // Close dropdown when clicking outside
    // $(document).on('click', function (e) {
    //   if (!$customSelect.is(e.target) && $customSelect.has(e.target).length === 0) {
    //     $customSelect.removeClass('open');
    //   }
    // });

    // // Update filtering logic to use the custom dropdown
    // $customSelect.on('change', function (e, data) {
    //   const selectedCountry = data.value;

    //   // Filter members based on selected country
    //   $('.member').each(function () {
    //     const memberCountry = $(this).data('country');

    //     if (!selectedCountry || memberCountry === selectedCountry) {
    //       $(this).removeClass('hidden');
    //     } else {
    //       $(this).addClass('hidden');
    //     }
    //   });

    //   // Update container visibility
    //   if ($('.member.hidden').length > 0) {
    //     $('.members').addClass('hidden_show');
    //   } else {
    //     $('.members').removeClass('hidden_show');
    //   }
    // });

    // // Additional Filters (Search and Category)
    // $('#searchFilter').on('input', function () {
    //   const searchTerm = $(this).val().toLowerCase();

    //   $('.member').each(function () {
    //     const title = $(this).find('.parnet--title').text().toLowerCase();
    //     if (title.includes(searchTerm)) {
    //       $(this).removeClass('hidden');
    //     } else {
    //       $(this).addClass('hidden');
    //     }
    //   });

    //   if ($('.member.hidden').length > 0) {
    //     $('.members').addClass('hidden_show');
    //   } else {
    //     $('.members').removeClass('hidden_show');
    //   }
    // });

    // $('.categoryFilter').on('click', function () {
    //   $('.categoryFilter').removeClass('active');
    //   $(this).addClass('active');

    //   const selectedCategory = $(this).data('category');

    //   $('.member').each(function () {
    //     const memberCategory = $(this).data('category');

    //     if (selectedCategory === 'all' || memberCategory === selectedCategory) {
    //       $(this).removeClass('hidden');
    //     } else {
    //       $(this).addClass('hidden');
    //     }
    //   });

    //   if ($('.member.hidden').length > 0) {
    //     $('.members').addClass('hidden_show');
    //   } else {
    //     $('.members').removeClass('hidden_show');
    //   }
    // });

    // // Set default category filter
    // $('.categoryFilter[data-category="all"]').addClass('active');
    // // 66666666
    // Slick Carousel Initialization
    // Initialize Slick Carousel
    $('.members').slick({
      dots: true,
      infinite: false,
      speed: 300,
      slidesToShow: 7,
      slidesToScroll: 7,
      variableWidth: true,
      appendDots: $('.slick-dots-container'),
      appendArrows: $('.slider-navigation'),
      prevArrow: $('.slick-prev'),
      nextArrow: $('.slick-next'),
      responsive: [{
        breakpoint: 768, // Define the breakpoint for smaller screens
        settings: {
          slidesToShow: 1, // Show only one slide
          slidesToScroll: 1, // Scroll one slide at a time
          variableWidth: false,
        }
      }]
    });

    // Unified Filter Function
    function applyFilters() {
      const selectedCountry = $countrySelect.find('.select-selected').data('value');
      const selectedCategory = $industrySelect.find('.select-selected').data('category');
      const searchTerm = $('#searchFilter').val().toLowerCase();

      var count = 0;
      $('.member').each(function () {
        const memberCountry = $(this).data('country');
        const memberCategory = $(this).data('category');
        const title = $(this).find('.parnet--title').text().toLowerCase();

        const matchesCountry = !selectedCountry || selectedCountry === 'all' || memberCountry === selectedCountry;
        const matchesCategory = !selectedCategory || selectedCategory === 'all' || memberCategory === selectedCategory;
        const matchesSearch = !searchTerm || title.includes(searchTerm);

        // Reset count class
        $(this).removeClass(function (index, className) {
          return (className.match(/(^|\s)count-\S+/g) || []).join(' ');
        });

        // If "All" is selected for country or category, remove `count-*` and show all members
        if (selectedCountry === 'all' || selectedCategory === 'all') {
          $(this).removeClass('hidden');
        } else {
          // Show only if all conditions match
          if (matchesCountry && matchesCategory && matchesSearch) {
            count++;
            $(this).removeClass('hidden');
            $(this).addClass('count-' + count);
          } else {
            $(this).addClass('hidden');
          }
        }
      });

      // Update container visibility
      if ($('.member:not(.hidden)').length === 0) {
        $('.members').addClass('hidden_show');
      } else {
        $('.members').removeClass('hidden_show');
      }

      $('.members').slick('slickGoTo', 0); // Navigate to the first slide (index 0)
    }

    // Custom Dropdown Logic for "country-select"
    const $countrySelect = $('#country-select');
    const $countrySelectedDiv = $countrySelect.find('.select-selected');
    const $countryItemsDiv = $countrySelect.find('.select-items');

    // Toggle dropdown visibility
    $countrySelectedDiv.on('click', function () {
      $countrySelect.toggleClass('open');
    });

    // Handle option selection
    $countryItemsDiv.on('click', 'div[data-value]', function () {
      const $option = $(this);
      const value = $option.data('value');
      const flagHtml = $option.find('img').prop('outerHTML');
      const countryName = $option.find('span').text();

      // Update the selected display
      $countrySelectedDiv.html(`${flagHtml} <span>${countryName}</span>`).data('value', value);

      // Close dropdown
      $countrySelect.removeClass('open');

      // Trigger filtering
      applyFilters();
    });

    // Close dropdown when clicking outside
    $(document).on('click', function (e) {
      if (!$countrySelect.is(e.target) && $countrySelect.has(e.target).length === 0) {
        $countrySelect.removeClass('open');
      }
    });

    // Custom Dropdown Logic for "industry-select"
    const $industrySelect = $('#industry-select');
    const $industrySelectedDiv = $industrySelect.find('.select-selected');
    const $industryItemsDiv = $industrySelect.find('.select-items');

    // Toggle dropdown visibility
    $industrySelectedDiv.on('click', function () {
      $industrySelect.toggleClass('open');
    });

    // Handle option selection
    $industryItemsDiv.on('click', 'div[data-category]', function () {
      const $option = $(this);
      const category = $option.data('category');
      const categoryName = $option.find('span').text();

      // Update the selected display
      $industrySelectedDiv.html(`<span>${categoryName}</span>`).data('category', category);

      // Close dropdown
      $industrySelect.removeClass('open');

      // Trigger filtering
      applyFilters();
    });

    // Close dropdown when clicking outside
    $(document).on('click', function (e) {
      if (!$industrySelect.is(e.target) && $industrySelect.has(e.target).length === 0) {
        $industrySelect.removeClass('open');
      }
    });

    // Search Filter Logic
    $('#searchFilter').on('input', function () {
      applyFilters();
    });

    // Set default category filter
    $industryItemsDiv.find('div[data-category="all"]').addClass('active');

    // ****************
    // var memberCount = $('.members .member').length;

    // // If more than 7 members, initialize Owl Carousel
    // if (memberCount > 7) {
    //   $('.members').addClass('owl-carousel').owlCarousel({
    //     items: 4, // You can customize the number of items shown here
    //     loop: false,
    //     margin: 10,
    //     nav: true,
    //     dots: false,
    //     autoWidth: true,

    //     responsive: {
    //       0: {
    //         items: 1
    //       },
    //       600: {
    //         items: 2
    //       },
    //       1000: {
    //         items: 4
    //       }
    //     }
    //   });
    // } else {
    //   // If there are 7 or fewer members, remove the owl-carousel class (in case it was applied)
    //   $('.members').removeClass('owl-carousel');
    // }
    // 
    // const $hoverBox = $("#hover-box");
    // let timeout;

    // $(".path-hover").on("mouseenter", function (e) {
    //   clearTimeout(timeout); // Clear timeout to prevent hiding
    //   const country = $(this).data("country");
    //   const factSheet = $(this).data("fact-sheet");

    //   // Position and display the tooltip
    //   $hoverBox.css({
    //     display: "block",
    //     left: e.pageX + 10 + "px",
    //     top: e.pageY + 10 + "px",
    //   });

    //   // Update content dynamically
    //   $hoverBox.find("#country-name").text(country);
    //   $hoverBox.find("#download-link").text(factSheet);
    // });

    // $(".path-hover").on("mousemove", function (e) {
    //   $hoverBox.css({
    //     left: e.pageX + 10 + "px",
    //     top: e.pageY + 10 + "px",
    //   });
    // });

    // $(".path-hover").on("mouseleave", function () {
    //   timeout = setTimeout(() => {
    //     $hoverBox.css("display", "none");
    //   }, 300); // Delay hiding for smoother interaction
    // });

    // $hoverBox.on("mouseenter", function () {
    //   clearTimeout(timeout); // Keep the tooltip visible when mouse enters it
    // });

    // $hoverBox.on("mouseleave", function () {
    //   $hoverBox.css("display", "none");
    // });
    // 
    // ************* Start MAPS


    // Function to show item-info
    // function showItemInfo(item, country, factSheet, factSheet_img) {
    //   // Create the content for the .item-info modal
    //   const content = `
    //     <div class="item-info-content">
    //       <div class="flag--element">
    //         <img src="${factSheet_img}" alt="Fact Sheet Flag">
    //       </div>
    //       <div class="wrapper-element-africa">
    //         <div>${country}</div>

    //            <div  class="click--modal-hp">Download the country facts sheet</div>
    //       </div>
    //     </div>
    //   `;

    //   // Find or create the .item-info modal
    //   let itemInfo = $('.item-info');
    //   if (itemInfo.length === 0) {
    //     itemInfo = $('<div class="item-info"></div>').appendTo('body');
    //   }

    //   itemInfo.html(content).show();

    //   // Get the position of the item relative to the document
    //   const pathOffset = item.offset();
    //   const windowWidth = $(window).width();
    //   const itemInfoWidth = itemInfo.outerWidth();
    //   const itemInfoHeight = itemInfo.outerHeight();

    //   // Position the modal above the item
    //   itemInfo.css({
    //     top: pathOffset.top - itemInfoHeight - 10, // Position above the item
    //     left: pathOffset.left,
    //     position: 'absolute',
    //   });

    //   // Check if the modal is off-screen on the left or right and adjust its position
    //   if (itemInfo.offset().left < 0) {
    //     itemInfo.css('left', 10); // Adjust to the left side of the viewport
    //   } else if (itemInfo.offset().left + itemInfoWidth > windowWidth) {
    //     itemInfo.css('left', windowWidth - itemInfoWidth - 10); // Adjust to the right side of the viewport
    //   }
    // }

    // // Handle hover or click on .item-wrap elements
    // $('.item-wrap').on('mouseenter click', function () {
    //   const country = $(this).data('country');
    //   const factSheet = $(this).data('fact-sheet');
    //   const factSheet_img = $(this).data('fact-img'); // Retrieve the fact sheet image link

    //   showItemInfo($(this), country, factSheet, factSheet_img);
    // });

    // // Handle the select dropdown interaction
    // $('#country-select .select-items div').on('click', function () {
    //   const country = $(this).data('country');

    //   // Find the corresponding SVG path for the selected country
    //   const path = $(`.map-container [data-country="${country}"]`);

    //   if (path.length) {
    //     // Extract data from the SVG path
    //     const factSheet = path.data('fact-sheet'); // Get the fact sheet link from the path
    //     const factSheet_img = path.data('fact-img'); // Get the flag image link from the path

    //     // Show the modal positioned relative to the path
    //     showItemInfo(path, country, factSheet, factSheet_img);
    //   }

    //   // Update the selected item display
    //   const selectedHtml = $(this).html(); // Get the HTML of the clicked item
    //   $('#country-select .select-selected').html(selectedHtml);
    // });

    // // Hide modal on mouse leave
    // $(document).on('mouseleave', '.map-container, .item-info', function (event) {
    //   if (
    //     !$(event.relatedTarget).closest('.item-info').length &&
    //     !$(event.relatedTarget).closest('.map-container').length
    //   ) {
    //     $('.item-info').hide();
    //   }
    // });

    function showItemInfo(item, country, factSheet, factSheet_img) {
      // Create the content for the .item-info modal
      const content = `
        <div class="item-info-content">
          <div class="flag--element">
            <img src="${factSheet_img}" alt="Fact Sheet Flag">
          </div>
          <div class="wrapper-element-africa">
            <div>${country}</div>
            <div class="click--modal-hp" data-pdf="${factSheet}">Download the country facts sheet</div>
          </div>
        </div>
      `;
    
      // Find or create the .item-info modal
      let itemInfo = $('.item-info');
      if (itemInfo.length === 0) {
        itemInfo = $('<div class="item-info"></div>').appendTo('body');
      }
    
      itemInfo.html(content).show();
    
      // Get the position of the item relative to the document
      const pathOffset = item.offset();
      const windowWidth = $(window).width();
      const itemInfoWidth = itemInfo.outerWidth();
      const itemInfoHeight = itemInfo.outerHeight();
    
      // Position the modal above the item
      itemInfo.css({
        top: pathOffset.top - itemInfoHeight - 10, // Position above the item
        left: pathOffset.left,
        position: 'absolute',
      });
    
      // Check if the modal is off-screen on the left or right and adjust its position
      if (itemInfo.offset().left < 0) {
        itemInfo.css('left', 10); // Adjust to the left side of the viewport
      } else if (itemInfo.offset().left + itemInfoWidth > windowWidth) {
        itemInfo.css('left', windowWidth - itemInfoWidth - 10); // Adjust to the right side of the viewport
      }
    
      // Modal click logic for ".click--modal-hp"
      $(".click--modal-hp").off("click").on("click", function () {
        const factSheetLink = $(this).data("pdf"); // Get the data-pdf attribute value
    
        // Update the download link dynamically
        $("#download-link").attr("href", factSheetLink); // Set the href attribute of the download link
    
        // Create the modal structure
        const modal = `
          <div class="showing_modal_pop_up" id="member-modal">
            <div class="modal-content">
              <span class="close">&times;</span>
              <h2>Access the country facts sheet</h2>
              <p>If you are a CFC member, please enter your access code:</p>
              <div class="modal__flixible">
                <input type="password" id="access-password" placeholder="Access password">
                <button id="download-btn"><a id="download-link" href="${factSheetLink}" download>Download<svg xmlns="http://www.w3.org/2000/svg" width="20" height="27" viewBox="0 0 20 27" fill="none">
  <path d="M11.0605 26.5452C10.7792 26.8264 10.3978 26.9844 10 26.9844C9.60228 26.9844 9.22082 26.8264 8.93953 26.5452L0.454026 18.0597C0.310761 17.9213 0.196488 17.7558 0.117874 17.5728C0.0392605 17.3898 -0.00211889 17.193 -0.00384962 16.9938C-0.00558034 16.7946 0.0323726 16.5971 0.107794 16.4128C0.183215 16.2284 0.294595 16.0609 0.435434 15.9201C0.576273 15.7793 0.74375 15.6679 0.928095 15.5925C1.11244 15.517 1.30996 15.4791 1.50913 15.4808C1.7083 15.4825 1.90513 15.5239 2.08813 15.6025C2.27114 15.6812 2.43666 15.7954 2.57503 15.9387L8.50003 21.8637L8.50003 1.9992C8.50003 1.60137 8.65806 1.21984 8.93937 0.938534C9.22067 0.65723 9.6022 0.499195 10 0.499195C10.3979 0.499195 10.7794 0.65723 11.0607 0.938534C11.342 1.21984 11.5 1.60137 11.5 1.9992L11.5 21.8637L17.425 15.9387C17.7079 15.6655 18.0868 15.5143 18.4801 15.5177C18.8734 15.5211 19.2496 15.6789 19.5278 15.957C19.8059 16.2351 19.9636 16.6113 19.967 17.0046C19.9705 17.3979 19.8193 17.7768 19.546 18.0597L11.0605 26.5452Z" fill="#007565"/>
</svg></a></button>
              </div>
              <p id="error-message" style="display: none; color: red;">The password that you've entered is incorrect.</p>
              <div class="wrapper-text-click" id="not-member-btn">
                I’m not a CFC member
              </div>
            </div>
          </div>
          <div class="showing_modal_pop_up" id="non-member-modal" style="display: none;">
            <div class="modal-content">
              <span class="close">&times;</span>
              <h2>Access the country facts sheet</h2>
              <p>If you are not a CFC member, please enter your email:</p>
              <div class="modal__flixible">
                <input type="email" id="email-address" placeholder="Email address">
                <button id="send-request-btn">Send request<svg xmlns="http://www.w3.org/2000/svg" width="27" height="20" viewBox="0 0 27 20" fill="none">
  <path d="M26.5462 8.94338C26.8274 9.22467 26.9854 9.60613 26.9854 10.0039C26.9854 10.4016 26.8274 10.7831 26.5462 11.0644L18.0607 19.5499C17.9223 19.6931 17.7568 19.8074 17.5738 19.886C17.3908 19.9646 17.1939 20.006 16.9948 20.0078C16.7956 20.0095 16.5981 19.9715 16.4137 19.8961C16.2294 19.8207 16.0619 19.7093 15.9211 19.5685C15.7802 19.4276 15.6689 19.2602 15.5934 19.0758C15.518 18.8915 15.4801 18.6939 15.4818 18.4948C15.4835 18.2956 15.5249 18.0988 15.6035 17.9158C15.6821 17.7328 15.7964 17.5673 15.9397 17.4289L21.8647 11.5039L2.00017 11.5039C1.60235 11.5039 1.22082 11.3458 0.93951 11.0645C0.658207 10.7832 0.500172 10.4017 0.500172 10.0039C0.500172 9.60606 0.658207 9.22452 0.93951 8.94322C1.22082 8.66192 1.60235 8.50388 2.00017 8.50388L21.8647 8.50388L15.9397 2.57888C15.6664 2.29597 15.5152 1.91707 15.5187 1.52378C15.5221 1.13048 15.6798 0.754265 15.9579 0.476152C16.2361 0.19804 16.6123 0.0402851 17.0056 0.036869C17.3989 0.0334511 17.7778 0.184643 18.0607 0.457878L26.5462 8.94338Z" fill="#007565"/>
</svg></button>
              </div>
              <div class="wrapper-text-click" id="already-member-btn">
                I’m already a CFC member
              </div>
            </div>
          </div>
        `;
    
        // Append modal to the body if it doesn't already exist
        if (!$(".showing_modal_pop_up").length) {
          $("body").append(modal);
        }
    
        // Show the member modal
        $("#member-modal").fadeIn();
    
        // Close modal functionality
        $(".showing_modal_pop_up .close").off("click").on("click", function () {
          $(".showing_modal_pop_up").fadeOut();
          $("#access-password").val(""); // Clear the input field
          $("#download-btn").prop("disabled", true); // Disable the download button
          $("#error-message").hide(); // Hide error message
        });
    
        // Switch to non-member modal
        $("#not-member-btn").off("click").on("click", function () {
          $("#member-modal").hide();
          $("#non-member-modal").fadeIn();
        });
    
        // Switch to member modal
        $("#already-member-btn").off("click").on("click", function () {
          $("#non-member-modal").hide();
          $("#member-modal").fadeIn();
        });
    
        // Validate password logic
        const correctPassword = "CFC123"; // Replace with the actual password
        $("#access-password").off("input").on("input", function () {
          const enteredPassword = $(this).val();
          if (enteredPassword === correctPassword) {
            $("#download-btn").prop("disabled", false); // Enable download button
            $("#error-message").hide();
          } else {
            $("#download-btn").prop("disabled", false); // Keep the button disabled
          }
        });
    
        // Handle download button click
        $("#download-btn").off("click").on("click", function (event) {
          const enteredPassword = $("#access-password").val();
    
          if (enteredPassword !== correctPassword) {
            event.preventDefault(); // Prevent the default link action
            $("#error-message").text("The password that you've entered is incorrect.").show(); // Show the error message
          } else {
            $("#error-message").hide(); // Hide the error message if the password is correct
          }
        });
    
        // Handle send request button in non-member modal
        $("#send-request-btn").off("click").on("click", function () {
          const email = $("#email-address").val();
          if (email) {
            alert("Request sent successfully!"); // Replace with real API integration
            $(".showing_modal_pop_up").fadeOut();
          } else {
            alert("Please enter a valid email address.");
          }
        });
      });
    }
    
    // Handle hover or click on .item-wrap elements
    $('.item-wrap').on('mouseenter click', function () {
      const country = $(this).data('country');
      const factSheet = $(this).data('fact-sheet');
      const factSheet_img = $(this).data('fact-img'); // Retrieve the fact sheet image link
    
      showItemInfo($(this), country, factSheet, factSheet_img);
    });
    
    // Handle the select dropdown interaction
    $('#country-select .select-items div').on('click', function () {
      const country = $(this).data('country');
    
      // Find the corresponding SVG path for the selected country
      const path = $(`.map-container [data-country="${country}"]`);
    
      if (path.length) {
        // Extract data from the SVG path
        const factSheet = path.data('fact-sheet'); // Get the fact sheet link from the path
        const factSheet_img = path.data('fact-img'); // Get the flag image link from the path
    
        // Show the modal positioned relative to the path
        showItemInfo(path, country, factSheet, factSheet_img);
      }
    
      // Update the selected item display
      const selectedHtml = $(this).html(); // Get the HTML of the clicked item
      $('#country-select .select-selected').html(selectedHtml);
    });
    
    // Hide modal on mouse leave
    $(document).on('mouseleave', '.map-container, .item-info', function (event) {
      if (
        !$(event.relatedTarget).closest('.item-info').length &&
        !$(event.relatedTarget).closest('.map-container').length
      ) {
        $('.item-info').hide();
      }
    });
    


    // ************* END MAPS
    // ************* Start MAPS 2
    // Function to show item-info
    function showItemInfo_1(item, factSheet_img_1) {
      // Create the content for the item-info modal
      const content =
        `<div class="item-info-content" id="about_maps_1">
              <div class="flag--element">
                  <img src="${factSheet_img_1}" alt="Fact Sheet Flag">
              </div>
              <div class="wrapper-element-africa">
                  <div class="tabs---1">To get in touch with this international financial center, please enter your email address</div> 
                  <div class="tabs---2">To get in touch with this promotion agency, please enter your email address</div> 
                  <form class="d-flex mt-3">
                      <input type="email" class="form-control rounded-pill" placeholder="Email.." required="">
                      <button type="submit" class="form--news">Submit <i class="fas fa-arrow-right ms-2"></i></button>
                  </form>
              </div>
          </div>`;

      // Find or create the .item-info modal
      let itemInfo = $('.item-info');
      if (itemInfo.length === 0) {
        itemInfo = $('<div class="item-info about_maps_1"></div>').appendTo('body');
      }

      itemInfo.html(content).show();

      // Get the position of the item relative to the document
      const pathOffset = item.offset();
      const windowWidth = $(window).width();
      const itemInfoWidth = itemInfo.outerWidth();
      const itemInfoHeight = itemInfo.outerHeight();

      // Position the modal above the item
      itemInfo.css({
        top: pathOffset.top - itemInfoHeight - 10, // Position above the item
        left: pathOffset.left,
        position: 'absolute',
      });

      // Check if the modal is off-screen on the left or right side and adjust position if necessary
      if (itemInfo.offset().left < 0) {
        itemInfo.css('left', 10); // Adjust to the left side of the viewport
      } else if ((itemInfo.offset().left + itemInfoWidth) > windowWidth) {
        itemInfo.css('left', windowWidth - itemInfoWidth - 10); // Adjust to the right side of the viewport
      }
    }

    // When the user hovers over the item with the class "item-wrap-1"
    $('.img-1-maps .item-wrap-1').on('mouseenter click', function () {
      const factSheet_img_1 = $(this).data('logo'); // Retrieve the fact sheet image link
      // Pass the data to the showItemInfo_1 function
      showItemInfo_1($(this), factSheet_img_1);
    });

    // When the mouse leaves the .map-container or .item-info, hide the modal
    $(document).on('mouseleave', '.map-container, .item-info', function (event) {
      // Check if the mouse has really left the map-container or item-info
      if (!$(event.relatedTarget).closest('.item-info').length && !$(event.relatedTarget).closest('.map-container').length) {
        $('.item-info').hide(); // Hide the item-info modal
      }
    });

  });
  AOS.init({
    duration: 1000, // Animation duration
    once: true, // Animate only once
  });

  // 
  const modal = $("#videoModal");
  const closeBtn = $(".close");
  const videoContainer = $("#videoContainer");

  // Handle click on video box
  $(".video-box,.success").on("click", function () {
    const iframeUrl = $(this).data("iframe");

    // Create iframe dynamically and append it to the modal content
    const iframe = $('<iframe></iframe>', {
      src: iframeUrl,
      width: '100%',
      height: '400',
      frameborder: '0',
      allowfullscreen: true
    });

    videoContainer.empty().append(iframe); // Clear and append the iframe

    // Show the modal with display flex
    modal.css('display', 'flex'); // Show modal using flexbox display
  });

  // Close modal on clicking close button
  closeBtn.on("click", function () {
    modal.css('display', 'none'); // Hide modal
    videoContainer.empty(); // Remove iframe from modal
  });

  // Close modal when clicking outside modal content
  $(window).on("click", function (e) {
    if ($(e.target).is(modal)) {
      modal.css('display', 'none'); // Hide modal
      videoContainer.empty(); // Remove iframe from modal
    }
  });
  // 
  $('.emblemes .element-sc').first().addClass('active');
  $('.emblemes .tabs--item button').first().addClass('active'); // Add active class to the first tab
  let initialBackgroundImage = $('.emblemes .element-sc.active').data('img');
  $('.emblemes .informations_pratiques').css('background-image', 'url(' + initialBackgroundImage + ')');

  // Function to handle tab activation based on ID
  function activateTabById(id) {
    // Remove active class from all tabs and elements
    $('.emblemes .tabs--item button').removeClass('active');
    $('.emblemes .element-sc').removeClass('active');

    // Add active class to the corresponding tab and content element
    $('#' + id).addClass('active');
    $('.emblemes .element-sc').eq($('#' + id).index()).addClass('active');


  }

  // Handle clicks on tabs
  $('.emblemes .tabs--item button').click(function () {
    var id = $(this).attr('id');
    activateTabById(id);
  });

  // 
  //   var $section = $('.scroll-sticky-tabs');
  //   var $header = $('header'); // Adjust this selector to match your header
  //   var sectionOffsetTop = $section.offset().top;
  //   var sectionOffsetBottom = sectionOffsetTop + $section.outerHeight();

  //   $(window).on('scroll', function () {
  //     var scrollPosition = $(window).scrollTop();

  //     // Add the class only when scrolling inside the section
  //     if (scrollPosition >= sectionOffsetTop && scrollPosition <= sectionOffsetBottom) {
  //       $header.addClass('active-header');
  //     } else {
  //       $header.removeClass('active-header');
  //     }
  //   });
  //   // 
  //   function revealSteps() {
  //     $('.step').each(function () {
  //       var windowBottom = $(window).scrollTop() + $(window).height();
  //       var stepTop = $(this).offset().top;

  //       // If the step is visible in the viewport
  //       if (windowBottom > stepTop + 50) {
  //         $(this).addClass('show'); // Add the show class for animation
  //       }
  //     });
  //   }

  //   // Run the function on page load and scroll
  //   revealSteps();
  //   $(window).on('scroll', revealSteps);
  //   // 
  //   function isInViewport(element) {
  //     var elementTop = $(element).offset().top;
  //     var elementBottom = elementTop + $(element).outerHeight();

  //     var viewportTop = $(window).scrollTop();
  //     var viewportBottom = viewportTop + $(window).height();

  //     // Check if the element is in the viewport
  //     return elementBottom > viewportTop && elementTop < viewportBottom;
  //   }

  //   // On scroll, check each .each-event
  //   $(window).on('scroll', function () {
  //     $('.each-event').each(function () {
  //       if (isInViewport(this)) {
  //         $(this).addClass('active'); // Make visible
  //       } else {
  //         $(this).removeClass('active'); // Dim if not in viewport
  //       }
  //     });
  //   });

  //   // Optional: Trigger scroll event on page load to check initial state
  //   $(window).trigger('scroll');
  //   // 
  //   $(".element--detail .element-sc:last-child .img-1-maps").hover(
  //     function() {
  //         // On hover in
  //         $(".about_maps_1").addClass("remove____title");
  //     },
  //     function() {
  //         // On hover out
  //         $(".about_maps_1").removeClass("remove____title");
  //     }
  // );
  var $section = $('.scroll-sticky-tabs');
  if ($section.length > 0) {
    var $header = $('header'); // Adjust this selector to match your header
    var sectionOffsetTop = $section.offset().top;
    var sectionOffsetBottom = sectionOffsetTop + $section.outerHeight();

    $(window).on('scroll', function () {
      var scrollPosition = $(window).scrollTop();

      // Add the class only when scrolling inside the section
      if (scrollPosition >= sectionOffsetTop && scrollPosition <= sectionOffsetBottom) {
        $header.addClass('active-header');
      } else {
        $header.removeClass('active-header');
      }
    });
  }

  function revealSteps() {
    $('.step').each(function () {
      var windowBottom = $(window).scrollTop() + $(window).height();
      var $this = $(this);
      if ($this.length > 0) {
        var stepTop = $this.offset().top;

        // If the step is visible in the viewport
        if (windowBottom > stepTop + 50) {
          $this.addClass('show'); // Add the show class for animation
        }
      }
    });
  }

  // Run the function on page load and scroll
  revealSteps();
  $(window).on('scroll', revealSteps);

  function isInViewport(element) {
    var $el = $(element);
    if ($el.length > 0) {
      var elementTop = $el.offset().top;
      var elementBottom = elementTop + $el.outerHeight();

      var viewportTop = $(window).scrollTop();
      var viewportBottom = viewportTop + $(window).height();

      return elementBottom > viewportTop && elementTop < viewportBottom;
    }
    return false;
  }

  // On scroll, check each .each-event
  $(window).on('scroll', function () {
    $('.each-event').each(function () {
      if (isInViewport(this)) {
        $(this).addClass('active'); // Make visible
      } else {
        $(this).removeClass('active'); // Dim if not in viewport
      }
    });
  });

  // Optional: Trigger scroll event on page load to check initial state
  $(window).trigger('scroll');

  $(".element--detail .element-sc:last-child .img-1-maps").hover(
    function () {
      // On hover in
      $(".about_maps_1").addClass("remove____title");
    },
    function () {
      // On hover out
      $(".about_maps_1").removeClass("remove____title");
    }
  );
})(jQuery);