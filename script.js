document.addEventListener("DOMContentLoaded", function () {
  const display = document.querySelector(".answer input");
  let lastValue = "";
  document.querySelectorAll("input[type='button']").forEach(function (button) {
    button.addEventListener("click", function () {
      const value = button.value;

      if (value === "AC") {
        display.value = "";
        display.placeholder = "Enter an expression";
      } else if (value === "DE") {
        display.value = display.value.slice(0, -1);
      } else if (value === "=") {
        if (display.value === "") {
          display.placeholder = "Enter an expression";
        } else {
          lastValue = display.value;
          const result = eval(display.value);
          display.value = Number(result.toFixed(4)); //4 decimal
          display.placeholder = "";
          display.style.fontSize = "40px";
        }
      } else {
        display.placeholder = "";
        display.value += value;

        if (display.value.length > 9) {
          display.style.fontSize = "30px";
        } else {
          display.style.fontSize = "40px";
        }
      }
    });
  });
});
