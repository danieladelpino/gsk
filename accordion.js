var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");

    let arrow = this.querySelector(".arrow-accordion");
    var panel = this.nextElementSibling;
    if (panel.classList.contains("accordion-appear")) {
      console.log("desaparece");
      panel.classList.remove("accordion-appear");
      panel.classList.add("display-none");
      panel.classList.add("accordion-disappear");

      arrow.classList.add("rotate-arrow-down");
      arrow.classList.remove("rotate-arrow-up");
    } else {
      // panel.style.display = "block";
      console.log("aparece");
      panel.classList.remove("display-none");
      panel.classList.remove("accordion-disappear");
      panel.classList.add("accordion-appear");

      arrow.classList.remove("rotate-arrow-down");
      arrow.classList.add("rotate-arrow-up");
    }
  });
}