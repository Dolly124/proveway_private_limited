// const pairSelection = Array.from(document.getElementsByName("pairSelection"));
// const pairSelection = document.getElementsByName("pairSelection");
const pairSelection = document.querySelectorAll(".cart__option__pair-selector"); // Here we Need All selected elements so we need to use querySelectorAll

console.log(pairSelection);

pairSelection.forEach((element) => {
  element.addEventListener("click", () => {
    //remove if selected class is there on any element
    const allCartOptions = document.querySelectorAll(".cart__option");

    allCartOptions.forEach((element) => {
      const isSelected = element.classList.contains("cart__option--selected");

      if (isSelected) {
        element.classList.remove("cart__option--selected");
      }
    });

    // add selected class on clicked element
    const child = event.currentTarget;
    const parent = child.closest(".cart__option");
    parent.classList.add(
      "cart__option--selected",
      ".cart__option--selected>.cart__option__grid-container"
    );
  });
});

//===================================================================================

// function displayNone() {
//   const allCartOptions = document.querySelectorAll(".cart__option");

//   allCartOptions.forEach((element) => {
//     const isSelected = element.classList.contains("cart__option--selected");

//     if (isSelected) {
//       element.classList.remove("cart__option--selected");
//     }
//   });
// }

// function onePairr() {
//   const child = document.getElementById("onePair");
//   const parent = child.closest(".cart__option");
//   parent.classList.add(
//     "cart__option--selected",
//     ".cart__option--selected>.cart__option__grid-container"
//   );
// }

// function twoPairr() {
//   const child = document.getElementById("twoPair");
//   const parent = child.closest(".cart__option");
//   parent.classList.add(
//     "cart__option--selected",
//     ".cart__option--selected>.cart__option__grid-container"
//   );
//   displayNone();
// }
