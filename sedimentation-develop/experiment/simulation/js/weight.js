const display = document.querySelector(".weighing_balance > .display");
const startBtn = document.querySelector(".btn1");
const resetBtn = document.querySelector(".btn2");
const area = document.querySelector(".weigh_area");

let status_weight = 0; // 0 means the weighing scale is off, 1 means it is on

function weigh(weight) {
  display.textContent = `${weight}`;
}

startBtn.addEventListener("click", () => {
  if (status_weight) {
    display.classList.add("display_off");
    display.textContent = "0.000";
    status_weight = 0;
  } else {
    display.classList.remove("display_off");
    status_weight = 1;
  }
});

resetBtn.addEventListener("click", () => {
  display.textContent = "0.000";
});

area.addEventListener("click", () => {
  weigh(0.345);
});

const beaker = document.querySelector(".beaker");
const beakerRect = beaker.getBoundingClientRect();

const weighing_balance = document.querySelector(".weighing_balance");

const btnWeigh = document.querySelector(".actions > #weigh");

btnWeigh.addEventListener("click", () => {
  const beakerSand = document.querySelector(".beaker > .sediment");

  beakerSand.animate(
    [
      {},
      {
        transform: "translate(0, 0)",
        opacity: `30%`,
      },
      {
        transform: "translate(0, 100px)",
        opacity: `30%`,
      },
    ],
    {
      duration: 2500,
      fill: "forwards",
    }
  );

  beaker.style.setProperty("--shadowH", `${35}px`);

  beaker.animate(
    [
      {},
      {
        transform: `translate( 0, -50px) rotate(-45deg)`,
        height: `${beakerRect.height}px`,
        width: `${beakerRect.width}px`,
        opacity: "100%",
      },
    ],
    {
      duration: 1000,
      fill: "forwards",
    }
  ).onfinish = () => {
    setTimeout(() => {
      const sand = document.querySelector(".weigh_area");

      sand.animate(
        [
          {},
          {
            opacity: 1,
          },
        ],
        {
          duration: 1000,
          fill: "forwards",
        }
      ).onfinish = () => weigh(0.355);
      beaker.animate(
        [
          {},
          {
            transform: `translate(0, 0)`,
          },
        ],
        {
          duration: 1000,
          fill: "forwards",
        }
      );
    }, 1000);
  };
});
