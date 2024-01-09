const dropdown = document.querySelector(".dropdown");

dropdown.addEventListener("mouseenter", () => {
  dropdown.style.display = "block";
  dropdown.style.position = "absolute";
  dropdown.style.top = "100%";
  dropdown.style.left = "0%";
  dropdown.style.width = "100%";
  dropdown.style.height = "50rem";
  dropdown.style.backgroundColor = "#fff";
  dropdown.style.border = "1px solid #d4cfcd";
  dropdown.style.zIndex = "999";
});

dropdown.addEventListener("mouseleave", () => {
  dropdown.style.display = "none";
});
