document.addEventListener("DOMContentLoaded", function () {
  // Initialize Swiper with custom settings
  const constructionSwiper = new Swiper(".hero-main", {
    // Only 2 slides as requested
    slidesPerView: 1,
    loop: true,
    speed: 1200,
    autoplay: {
      delay: 8000,
      disableOnInteraction: false,
    },

    // Custom fade + scale effect
    effect: "creative",
    creativeEffect: {
      prev: {
        shadow: true,
        translate: [0, 0, -400],
        opacity: 0,
      },
      next: {
        translate: ["100%", 0, 0],
        opacity: 0,
      },
    },

    // Custom pagination
    pagination: {
      el: ".construction-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '"></span>';
      },
    },

    // Custom navigation
    navigation: {
      nextEl: ".construction-next",
      prevEl: ".construction-prev",
    },

    // Keyboard control
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },

    // Accessibility
    a11y: {
      prevSlideMessage: "Previous slide",
      nextSlideMessage: "Next slide",
      paginationBulletMessage: "Go to slide {{index}}",
    },
  });

  // Content animation on slide change
  constructionSwiper.on("slideChange", function () {
    const activeSlide = this.slides[this.activeIndex];
    const content = activeSlide.querySelector(".slide-content");

    // Reset animation
    content.style.opacity = "0";
    content.style.transform = "translateY(50px)";

    // Trigger reflow
    void content.offsetWidth;

    // Apply animation
    content.style.opacity = "1";
    content.style.transform = "translateY(0)";
  });
});
// index counter section
document.addEventListener("DOMContentLoaded", function () {
  // Initialize counters when they come into view
  const counters = document.querySelectorAll(".odometer");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const count = parseInt(el.getAttribute("data-count"));
          const od = new Odometer({
            el: el,
            value: 0,
            format: "(,ddd)",
            theme: "default",
          });
          od.update(count);
          observer.unobserve(el);
        }
      });
    },
    { threshold: 0.5 }
  );

  counters.forEach((counter) => {
    observer.observe(counter);
  });
});
// navbar scrolling
document.addEventListener("DOMContentLoaded", function () {
  // Elements
  const mobileNav = document.getElementById("mobile-nav");
  const desktopNav = document.querySelector(".desktop-nav");
  const banners = [
    document.getElementById("index-banner"),
    document.getElementById("services-banner"),
  ].filter((banner) => banner !== null);
  const mobileMenu = document.getElementById("navbarsExample01");
  const mobileToggler = document.querySelector(".navbar-toggler.x");

  // Breakpoints
  const LG_BREAKPOINT = 992;

  function handleNavVisibility() {
    const isLargeScreen = window.innerWidth >= LG_BREAKPOINT;
    const isPastAnyBanner = banners.some((banner) => {
      const rect = banner.getBoundingClientRect();
      return rect.bottom <= 0;
    });

    // DESKTOP NAV - Always visible on LG+ screens
    if (desktopNav) {
      desktopNav.classList.toggle("d-none", !isLargeScreen);
      desktopNav.classList.toggle("d-block", isLargeScreen);
    }

    // MOBILE NAV - Visibility logic
    if (mobileNav) {
      if (isLargeScreen) {
        if (isPastAnyBanner) {
          // Show mobile nav
          mobileNav.classList.remove("d-none", "nav-hidden");
          mobileNav.classList.add(
            "d-block",
            "sticky-top",
            "shadow-sm",
            "nav-visible"
          );

          // Expand menu and hide toggler
          if (mobileMenu) mobileMenu.classList.add("show");
          if (mobileToggler) mobileToggler.classList.add("d-none");
        } else {
          // Hide mobile nav with animation
          mobileNav.classList.add("nav-hidden");
          setTimeout(() => {
            mobileNav.classList.remove(
              "d-block",
              "sticky-top",
              "shadow-sm",
              "nav-visible"
            );
            mobileNav.classList.add("d-none");

            // Reset mobile menu
            if (mobileMenu) mobileMenu.classList.remove("show");
            if (mobileToggler) mobileToggler.classList.remove("d-none");
          }, 300);
        }
      } else {
        // ALWAYS STICKY on medium/small screens
        mobileNav.classList.remove("d-none", "nav-hidden");
        mobileNav.classList.add("d-block", "sticky-top", "shadow-sm");

        // Reset to default mobile behavior
        if (mobileMenu) mobileMenu.classList.remove("show");
        if (mobileToggler) mobileToggler.classList.remove("d-none");
      }
    }
  }

  // Initial check
  handleNavVisibility();

  // Debounced event listeners
  let resizeTimeout;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(handleNavVisibility, 100);
  });

  let scrollTimeout;
  window.addEventListener("scroll", () => {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(handleNavVisibility, 50);
  });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      if (targetId === "#" || targetId === "#!") return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const offset = 70;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });

        // Close mobile menu if needed
        if (
          window.innerWidth < LG_BREAKPOINT &&
          mobileMenu &&
          mobileMenu.classList.contains("show")
        ) {
          const toggler = document.querySelector(".navbar-toggler.x");
          if (toggler) toggler.click();
        }

        // Update URL
        if (history.pushState) {
          history.pushState(null, null, targetId);
        } else {
          window.location.hash = targetId;
        }
      }
    });
  });
});
// page routing service links
document.addEventListener("DOMContentLoaded", function () {
  // Offset configuration
  const offsetConfig = {
    default: 0,
    about: -140,
    contact: -40,
    "child-care": -35,
    "elder-care": -40,
    "women-care": -40,
  };

  // Header heights
  const headerHeights = {
    desktop: 140,
    mobile: 101,
  };

  // Get header height
  function getHeaderHeight() {
    return window.innerWidth >= 992
      ? headerHeights.desktop
      : headerHeights.mobile;
  }

  // Smooth scroll function
  function smoothScroll(targetId) {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const headerHeight = getHeaderHeight();
      const sectionOffset = offsetConfig[targetId] || offsetConfig.default;
      window.scrollTo({
        top: targetElement.offsetTop - headerHeight - sectionOffset,
        behavior: "smooth",
      });
    }
  }

  // Close mobile menu - WORKING SOLUTION
  function closeMobileMenu() {
    const mobileMenu = document.getElementById("mobileNavContent");
    const toggler = document.querySelector("#mobile-nav .navbar-toggler");

    if (!mobileMenu || !toggler) return;

    // Method 1: Trigger click on toggler (most reliable)
    if (!toggler.classList.contains("collapsed")) {
      toggler.click();
    }

    // Method 2: Fallback - direct class manipulation
    else {
      mobileMenu.classList.remove("show");
      toggler.classList.add("collapsed");
      toggler.setAttribute("aria-expanded", "false");
    }
  }

  // Handle anchor links
  function handleAnchorLinks(e, linkElement) {
    e.preventDefault();
    const targetHash = linkElement.getAttribute("href");
    const targetId = targetHash.substring(1);
    const currentPage = window.location.pathname.split("/").pop();

    // Special handling for #about link
    if (targetHash === "#about" && currentPage === "services.php") {
      closeMobileMenu();
      setTimeout(() => {
        window.location.href = "index.php" + targetHash;
      }, 100);
      return;
    }

    // Close menu then scroll
    closeMobileMenu();
    setTimeout(() => {
      smoothScroll(targetId);
      history.pushState(null, null, targetHash);
    }, 150); // Slightly longer delay for mobile menu to close
  }

  // Handle service dropdown links
  function handleServiceLinks(e, linkElement) {
    e.preventDefault();
    const isServiceLink =
      linkElement.classList.contains("dropdown-item") &&
      (linkElement.getAttribute("href").includes("#child-care") ||
        linkElement.getAttribute("href").includes("#elder-care") ||
        linkElement.getAttribute("href").includes("#women-care"));

    if (isServiceLink) {
      const currentPage = window.location.pathname.split("/").pop();
      const targetHash = linkElement.getAttribute("href").split("#")[1];

      closeMobileMenu();

      setTimeout(() => {
        if (currentPage === "index.php") {
          window.location.href = "services.php#" + targetHash;
        } else if (currentPage === "services.php") {
          smoothScroll(targetHash);
        }
      }, 150);
    }
  }

  // Event delegation
  document.addEventListener("click", function (e) {
    let linkElement = e.target;
    if (!linkElement.matches("a")) {
      linkElement = linkElement.closest("a");
      if (!linkElement) return;
    }

    if (linkElement.matches(".dropdown-item")) {
      handleServiceLinks(e, linkElement);
    } else if (
      linkElement.matches('a[href^="#"]') &&
      !linkElement.matches(".dropdown-toggle") &&
      !linkElement.closest(".dropdown-menu")
    ) {
      handleAnchorLinks(e, linkElement);
    }
  });

  // Initial hash check
  if (window.location.hash) {
    setTimeout(() => {
      smoothScroll(window.location.hash.substring(1));
    }, 100);
  }

  // Resize handler
  window.addEventListener("resize", function () {
    if (window.location.hash) {
      setTimeout(() => {
        smoothScroll(window.location.hash.substring(1));
      }, 100);
    }
  });
});
