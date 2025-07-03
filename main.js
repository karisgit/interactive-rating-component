
// first we check if we're on the rating page (index.html)

if (document.querySelector(".rating__form")) {
  const form = document.getElementById("ratingForm");
  const ratingButtons = document.querySelectorAll(".rating__button");

  // highlight selected rating
  ratingButtons.forEach(button => {
    button.addEventListener("click", () => {
      // remove active class from all buttons
      ratingButtons.forEach((otherButton) => otherButton.classList.remove("active")
      );

      //  adding the active class when one button is clicked
      button.classList.add("active");

      // automatically check the radio button
      const input = button.querySelector(".rating__input");
      if (input) {
        input.checked = true;
      }
    });
  });

  // form submission block
  form.addEventListener("submit", (e) => {
    e.preventDefault(); //prevents the page from reloading

    const selectedRating = form.querySelector(".rating__input:checked");

    if (selectedRating) {
      const ratingValue = selectedRating.value;

      //save value in local storage
      localStorage.setItem("userRating", ratingValue);

      // redirect to thanks.html
      window.location.href = "thanks.html";
    }
  });
}


// check if we are on the thanks.html
if (document.querySelector(".thanks__container")) {
  window.addEventListener("DOMContentLoaded", () => {
    const ratingNumSpan = document.querySelector(".thanks__rating-number");

    // get the input value from local storage
    const rating = localStorage.getItem("userRating");

    if (rating && ratingNumSpan) {
      ratingNumSpan.textContent = rating;
    } else {
      ratingNumSpan.textContent = ""; //this is the fallback
    }
  });
}