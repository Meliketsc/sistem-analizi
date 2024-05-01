window.addEventListener("scroll", function() {
    const backToTopButton = document.querySelector(".back-to-top");
  
    if (window.pageYOffset > 100) {
      backToTopButton.style.display = "block";
    } else {
      backToTopButton.style.display = "none";
    }
  
    backToTopButton.addEventListener("click", function() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  });
  