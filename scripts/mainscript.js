let eval_eq = "0";
let screen_equation = document.querySelector("#calc-screen-equation");
screen_equation.textContent = eval_eq;

const calc_keys = {
  0 : "0",
  1 : "1",
  2 : "2",
  3 : "3",
  4 : "4",
  5 : "5",
  6 : "6",
  7 : "7",
  8 : "8",
  9 : "9",
  "+" : "+",
  "-" : "-",
  "*" : "*",
  "/" : "/",
  "." : ".",
  "%" : "%",
  "(" : "(",
  ")" : ")"
};

function equation_append(to_append) {
    if (eval_eq === "Error!") {
      if (!isNaN(to_append)) {
        eval_eq = to_append
      } else {
        if ((to_append==="(") || (to_append===")")) {
          eval_eq = to_append
        } else {
        eval_eq = "0".concat(to_append);}
    }
  }else if ((eval_eq === "0")) {
        if (!isNaN(to_append)) {
            eval_eq = to_append
        } else {
          if ((to_append==="(") || (to_append===")")) {
            eval_eq = to_append
          } else {
          eval_eq = "0".concat(to_append);}
      }
    } else {
        eval_eq = eval_eq.concat(to_append);
    }
    refresh_screen();
}

function refresh_screen() {
    screen_equation.textContent = eval_eq;
}

function equation_reset() {
    eval_eq = "0";
    refresh_screen();
}

function equation_backspace() {
    if ((eval_eq!="0") && (eval_eq.length>1)) {
        eval_eq = eval_eq.slice(0,-1);
    } else if (eval_eq!="0") {
        eval_eq = "0"
    }
    refresh_screen();
}

function equation_evaluate() {
    eval_eq = eval_eq.replaceAll("%","/100");
    try {
      result = (window.mathjs.format((window.mathjs.evaluate(eval_eq)),{precision:10})).toString();
      eval_eq = result;
    }
    catch(err) {
      eval_eq = "Error!";
    }
    refresh_screen();
}

document.querySelector("#button-seven").addEventListener("click", () => {
    equation_append("7");
  });


document.querySelector("#button-eight").addEventListener("click", () => {
    equation_append("8");
  });

document.querySelector("#button-nine").addEventListener("click", () => {
    equation_append("9");
  });

document.querySelector("#button-four").addEventListener("click", () => {
    equation_append("4");
  });

document.querySelector("#button-five").addEventListener("click", () => {
    equation_append("5");
  });

document.querySelector("#button-six").addEventListener("click", () => {
    equation_append("6");
  });

document.querySelector("#button-one").addEventListener("click", () => {
    equation_append("1");
  });

document.querySelector("#button-two").addEventListener("click", () => {
    equation_append("2");
  });

document.querySelector("#button-three").addEventListener("click", () => {
    equation_append("3");
  });

document.querySelector("#button-decimal").addEventListener("click", () => {
    equation_append(".");
  });

document.querySelector("#button-zero").addEventListener("click", () => {
    equation_append("0");
  });

document.querySelector("#button-equal").addEventListener("click", () => {
    equation_evaluate();
  });

document.querySelector("#button-allclear").addEventListener("click", () => {
    equation_reset();
  });

document.querySelector("#button-clear").addEventListener("click", () => {
    equation_backspace();
  });

document.querySelector("#button-percent").addEventListener("click", () => {
    equation_append("%");
  });

document.querySelector("#button-divide").addEventListener("click", () => {
    equation_append("/");
  });

document.querySelector("#button-multiply").addEventListener("click", () => {
    equation_append("*");
  });

document.querySelector("#button-minus").addEventListener("click", () => {
    equation_append("-");
  });

document.querySelector("#button-plus").addEventListener("click", () => {
    equation_append("+");
  });

document.querySelector("#button-parenthesis-left").addEventListener("click", () => {
    equation_append("(");
  });

document.querySelector("#button-parenthesis-right").addEventListener("click", () => {
    equation_append(")");
  });

document.addEventListener("keydown", (e) => {
  console.log(e.key)
  if (e.ctrlKey && e.key === 'Backspace') {
    equation_reset();
  } else if (Object.keys(calc_keys).includes(e.key)) {
    equation_append(e.key);
  } else if (e.key === "Enter") {
    if (eval_eq === "Error!") {
      eval_eq = "0";
      refresh_screen()
    } else {
    equation_evaluate();
    };
  } else if (e.key == "Backspace") {
    equation_backspace();
  }
})