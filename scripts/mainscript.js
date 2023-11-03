let eval_eq = "0";
let svg_eq = "0";
refresh_screen();
let screen_equation = document.querySelector("#calc-screen-equation");


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
    if ((eval_eq === "Error!") || (eval_eq ==="NaN")) {
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

function get_screen_chars(){
    let width_screen_chars = 0;
    screen_children = document.getElementById("calc-screen-main").childNodes;
    screen_children.forEach(function (currentValue){
      width_screen_chars = width_screen_chars + currentValue.offsetWidth;
    })
    return width_screen_chars
}

function get_screen_total() {
    let width_screen_total = (document.getElementById('calc-screen-main').offsetWidth);
    return width_screen_total
}

function refresh_screen() {
    ele_calc_screen = document.getElementById("calc-screen-main").innerHTML = svg_equivalent();

    while (get_screen_chars()>get_screen_total()-1){
      document.documentElement.style.setProperty('--screeniconheight', ((getComputedStyle(document.documentElement).getPropertyValue('--screeniconheight')).slice(0,-2)*0.75)+"vh");
      document.documentElement.style.setProperty('--decimaliconheight', ((getComputedStyle(document.documentElement).getPropertyValue('--decimaliconheight')).slice(0,-2)*0.75)+"vh");
      ele_calc_screen = document.getElementById("calc-screen-main").innerHTML = svg_equivalent();
    };

    while (((get_screen_chars()/(0.75))<get_screen_total())&&(((getComputedStyle(document.documentElement).getPropertyValue('--screeniconheight')).slice(0,-2)/0.75)<10)){
      document.documentElement.style.setProperty('--screeniconheight', ((getComputedStyle(document.documentElement).getPropertyValue('--screeniconheight')).slice(0,-2)/0.75)+"vh");
      document.documentElement.style.setProperty('--decimaliconheight', ((getComputedStyle(document.documentElement).getPropertyValue('--decimaliconheight')).slice(0,-2)/0.75)+"vh");
      ele_calc_screen = document.getElementById("calc-screen-main").innerHTML = svg_equivalent();
    }
  }

function svg_equivalent() {
    svg_eq = eval_eq.replaceAll("/",'<div class="scr~~n?charact~r"><img src="ass~ts/buttons/divid~?solid_svg" alt="/" class="scr~~n?icon" id="sicon?division"></div>')
    svg_eq = svg_eq.replaceAll("-",'<div class="scr~~n-charact~r"><img src="ass~ts\\buttons\\minus-solid_svg" alt="-" class="scr~~n-icon" id="sicon-subtraction"></div>')
    svg_eq = svg_eq.replaceAll(".",'<div class="scr~~n-charact~r" id="s-dmal"><img src="ass~ts/buttons/circl~-solid.svg" alt="." class="scr~~n-icon" id="sicon-d~cimal"></div>')
    svg_eq = svg_eq.replaceAll("e",'<div class="screen-character"><img src="assets/buttons/e-solid.svg" alt="." class="screen-icon" id="sicon-e"></div>')
    svg_eq = svg_eq.replaceAll("0",'<div class="screen-character"><img src="assets/buttons/0-solid.svg" alt="0" class="screen-icon" id="sicon-szero"></div>')
    svg_eq = svg_eq.replaceAll("1",'<div class="screen-character"><img src="assets/buttons/1-solid.svg" alt="1" class="screen-icon" id="sicon-sone"></div>')
    svg_eq = svg_eq.replaceAll("2",'<div class="screen-character"><img src="assets/buttons/2-solid.svg" alt="2" class="screen-icon" id="sicon-stwo"></div>')
    svg_eq = svg_eq.replaceAll("3",'<div class="screen-character"><img src="assets/buttons/3-solid.svg" alt="3" class="screen-icon" id="sicon-sthree"></div>')
    svg_eq = svg_eq.replaceAll("4",'<div class="screen-character"><img src="assets/buttons/4-solid.svg" alt="4" class="screen-icon" id="sicon-sfour"></div>')
    svg_eq = svg_eq.replaceAll("5",'<div class="screen-character"><img src="assets/buttons/5-solid.svg" alt="5" class="screen-icon" id="sicon-sfive"></div>')
    svg_eq = svg_eq.replaceAll("6",'<div class="screen-character"><img src="assets/buttons/6-solid.svg" alt="6" class="screen-icon" id="sicon-ssix"></div>')
    svg_eq = svg_eq.replaceAll("7",'<div class="screen-character"><img src="assets/buttons/7-solid.svg" alt="7" class="screen-icon" id="sicon-sseven"></div>')
    svg_eq = svg_eq.replaceAll("8",'<div class="screen-character"><img src="assets/buttons/8-solid.svg" alt="8" class="screen-icon" id="sicon-seight"></div>')
    svg_eq = svg_eq.replaceAll("9",'<div class="screen-character"><img src="assets/buttons/9-solid.svg" alt="9" class="screen-icon" id="sicon-snine"></div>')
    svg_eq = svg_eq.replaceAll("%",'<div class="screen-character"><img src="assets/buttons/percent-solid.svg" alt="%" class="screen-icon" id="sicon-percentage"></div>')
    svg_eq = svg_eq.replaceAll("(",'<div class="screen-character"><img src="assets/buttons/left-parenthesis.svg" alt="(" class="screen-icon" id="sicon-left-parenthesis"></div>')
    svg_eq = svg_eq.replaceAll(")",'<div class="screen-character"><img src="assets/buttons/right-parenthesis.svg" alt=")" class="screen-icon" id="sicon-right-parenthesis"></div>')
    svg_eq = svg_eq.replaceAll("+",'<div class="screen-character"><img src="assets/buttons/plus-solid.svg" alt="+" class="screen-icon" id="sicon-addition"></div>')
    svg_eq = svg_eq.replaceAll("*",'<div class="screen-character"><img src="assets/buttons/xmark-solid.svg" alt="*" class="screen-icon" id="sicon-multiplication"></div>')
    svg_eq = svg_eq.replaceAll("_",'.')
    svg_eq = svg_eq.replaceAll("?",'-')
    svg_eq = svg_eq.replaceAll("~",'e')
    svg_eq = svg_eq.replaceAll("∞",'<div class="screen-character"><img src="assets/buttons/infinity-solid.svg" alt="*" class="screen-icon" id="sicon-multiplication"></div>')
    return svg_eq;
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
      if (eval_eq==="Infinity"){
        eval_eq = "∞";
      };
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