const container = document.querySelectorAll(".container");
container.forEach((contain) => {
  let isClicked = false;
  const trigger = contain.querySelector(".trigger");
  const content = contain.querySelector(".content");
  content.style.display = "none";
  trigger.addEventListener("click", () => {
    isClicked = !isClicked;
    content.style.display = isClicked ? "block" : "none";
  });
  trigger.addEventListener("mouseenter", () => {
    if (!isClicked) content.style.display = "block";
  });
  trigger.addEventListener("mouseleave", () => {
    if (!isClicked) content.style.display = "none";
  });
});
