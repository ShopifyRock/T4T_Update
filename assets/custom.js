$(document).ready(function() {
  $(".seachIcon.custom-icon").click(function() {
    $(".custom-icon").hide();
    $(".custom-icon-2").show();
    $("body").addClass("prevent-scrolling");
  });

  $(".seachIcon.custom-icon-2").click(function() {
    $(".custom-icon-2").hide();
    $(".custom-icon").show();
    $(".searchForm.mobile-search").removeClass(".search-active");
    $("body").removeClass("prevent-scrolling");
  });
    $(".all-categories").hover(function() {
        $("body").addClass("overlayer_menu_hover");
        $("#PageContainer").addClass("overlayer_menu_hover_2");
    },
    function() {
        $("body").removeClass("overlayer_menu_hover");
        $("#PageContainer").removeClass("overlayer_menu_hover_2");
    }
    );
    $(".accordion-page-title").click(function(){
      if($(this).hasClass("active") == false){
        $('.accordion-page-title').removeClass("active");
        $(this).addClass("active");
        $('.accordion-page-desc').slideUp();	
        $(this).next(".accordion-page-desc").slideToggle();
      }
      else
      {
      	$('.accordion-page-title').removeClass("active");
        $('.accordion-page-desc').slideUp();	
      }
    });
});



$(function() {
  window.innerWidth >= 768
    ? $(".navigation-wrapper")
        .mouseenter(function() {
          $("html").addClass("active-category-nav");
        })
        .mouseleave(function() {
          $("html").removeClass("active-category-nav");
        })
    : $("html").removeClass("active-category-nav");

  $(".navigation-wrapper .all-categories .sub-item-dropdown ul.submenu.level-1 li")
    .find("ul")
    .parent()
    .addClass("parent");
});

$(window).on("load", function() {
  $(".mobile-menu").click(function() {
    $(this).toggleClass("active");
    $("html").toggleClass("nav-open");
    $("body").toggleClass("body-nav-open");
  });

  $(".mobile-search .seachIcon").click(function() {
    $(".search-form").toggleClass("search-active");
  });
});

$(document).ready(function() {
  $("body .navigation-wrapper .all-categories>a").on("click", function() {
    $(".sub-item-dropdown").toggleClass("menu-open");
    $(this).toggleClass("menu-active");
    window.innerWidth < 992
      ? (jQuery(".sub-item-dropdown ul li.parent .toggleicon").remove(),
        jQuery(".sub-item-dropdown ul li.parent>a").append("<a class='toggleicon'>&nbsp;</a>"),
        jQuery(".sub-item-dropdown ul li.parent>a").addClass("toggle-active"),
        jQuery(".sub-item-dropdown ul li.parent>a .toggleicon").click(function(e) {
          jQuery(this).parent().toggleClass("active");
        }),
        $(".sub-item-dropdown ul li.parent > a").click(function(e) {
          var o = this.parentNode.getElementsByTagName("ul").item(0);
          e.preventDefault();
          $(o).slideToggle();
        }))
      : (jQuery(".sub-item-dropdown ul li.parent").find("ul").removeAttr("style"),
        jQuery(".sub-item-dropdown ul li.parent>a").removeClass("active"),
        jQuery(".sub-item-dropdown ul li.parent>a").removeClass("toggle"),
        jQuery(".sub-item-dropdown ul li.parent>a .toggleicon").remove(),
        $(".sub-item-dropdown ul, .sub-item-dropdown ul li  ul").removeAttr("style"));
  });

  $(".mobile-menu").click(function() {
    $(this).toggleClass("active");
    $("html").toggleClass("nav-open");
    $("body").toggleClass("body-nav-open");
  });

  $(".mobile-search .seachIcon").click(function() {
    $(this).parent().toggleClass("search-active");
  });

  $("body .kuDropSortBy .kuDropdownLabel").click(function() {
    $(this).parent().toggleClass("active").find(".kuDropdownOptions").slideToggle("slow");
  });

    $(".site-footer__item .h4").click(function() {
        $(this).hasClass("active") == !1 ? ($(".site-footer__item .h4").removeClass("active"), $(this).addClass("active"), $(".site-footer__item .site-footer__linklist, .site-footer__item .site-footer__item-inner__address").slideUp(), $(this).next(".site-footer__item .site-footer__linklist, .site-footer__item .site-footer__item-inner__address").slideToggle()) : ($(".site-footer__item .h4").removeClass("active"), $(".site-footer__item .site-footer__linklist, .site-footer__item .site-footer__item-inner__address").slideUp())
    })

    jQuery('.filter-button-mobile').click(function () {
        jQuery('html').addClass('active--filter--mobile')
        jQuery('.filter-sidebar').addClass('activeFilterMobile')
    })

    jQuery('.drawer__close-button').click(function () {
        jQuery('html').removeClass('active--filter--mobile')
        jQuery('.filter-sidebar').removeClass('activeFilterMobile')
    })

});
