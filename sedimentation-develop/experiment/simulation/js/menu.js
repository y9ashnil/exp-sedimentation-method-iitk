const menu = document.querySelector(".actions");
const menuOrds = menu.getBoundingClientRect();

const btnOpen = document.querySelector("#openAction");
const btnClose = document.querySelector(".actions > #close");

menu.style.transform = `translate(${menuOrds.width + 10}px,0)`;

btnOpen.addEventListener("click", () => {
  btnOpen.style.display = "none";
  menu.animate(
    [
      {},
      {
        transform: `translate(0,0)`,
        width: `${menuOrds.width}px`,
      },
    ],
    {
      duration: 500,
      fill: "forwards",
    }
  );
});

btnClose.addEventListener("click", () => {
  menu.animate(
    [
      {},
      {
        transform: `translate(${menuOrds.width + 10}px,0)`,
        width: `10px`,
      },
    ],
    {
      duration: 500,
      fill: "forwards",
    }
  ).onfinish = () => (btnOpen.style.display = "block");
});

function toggleAccordion(element) {
  const content = element.nextElementSibling;
  content.style.display = content.style.display === "block" ? "none" : "block";
}
