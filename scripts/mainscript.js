let eval_eq = "0";
let svg_eq = "0";
let last_press = null;
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
    console.log(width_screen_chars)
    return width_screen_chars
}

function get_screen_total() {
    let width_screen_total = (document.getElementById('calc-screen-main').offsetWidth);
    console.log(width_screen_total)
    return width_screen_total
}

function change_units(var_change,units,increase=true){
    if (increase){
      document.documentElement.style.setProperty(var_change, ((getComputedStyle(document.documentElement).getPropertyValue(var_change)).slice(0,-(units.length))/0.75)+units);
    }else{
      document.documentElement.style.setProperty(var_change, ((getComputedStyle(document.documentElement).getPropertyValue(var_change)).slice(0,-(units.length))*0.75)+units);
    };
}

function refresh_screen() {
    ele_calc_screen = document.getElementById("calc-screen-main").innerHTML = svg_equivalent();

    while (get_screen_chars()>get_screen_total()-1){
      change_units("--screeniconheight","vh",false);
      change_units("--decimaliconheight","vh",false);
      change_units("--decimaliconpadding","%",false);
      ele_calc_screen = document.getElementById("calc-screen-main").innerHTML = svg_equivalent();
    };

    while (((get_screen_chars()/(0.75))<get_screen_total())&&(((getComputedStyle(document.documentElement).getPropertyValue('--screeniconheight')).slice(0,-2)/0.75)<10)){
      change_units("--screeniconheight","vh");
      change_units("--decimaliconheight","vh");
      change_units("--decimaliconpadding","%");
      ele_calc_screen = document.getElementById("calc-screen-main").innerHTML = svg_equivalent();
    }
  }

function svg_equivalent() {
    if (eval_eq==="NaN"){
      svg_eq = '<div class="screen-character"><img src="assets\\NaN\\n-solid.svg" alt="N" class="screen-icon" id="sicon-N1"></div><div class="screen-character"><img src="assets\\NaN\\a-solid.svg" alt="A" class="screen-icon" id="sicon-A"></div><div class="screen-character"><img src="assets\\NaN\\n-solid.svg" alt="N2" class="screen-icon" id="sicon-N"></div>'
    } else if (eval_eq==="Error!"){
      svg_eq = '<div class="screen-character"><img src="assets\\Error\\circle-exclamation-solid.svg" alt="Error" class="screen-icon" id="sicon-error"></div><div class="screen-character"><img src="assets\\Error\\e-solid.svg" alt="E" class="screen-icon" id="sicon-error-e1"></div><div class="screen-character"><img src="assets\\Error\\r-solid.svg" alt="R" class="screen-icon" id="sicon-error-r1"></div><div class="screen-character"><img src="assets\\Error\\r-solid.svg" alt="R" class="screen-icon" id="sicon-error-r2"></div><div class="screen-character"><img src="assets\\Error\\o-solid.svg" alt="O" class="screen-icon" id="sicon-error-o1"></div><div class="screen-character"><img src="assets\\Error\\r-solid.svg" alt="R" class="screen-icon" id="sicon-error-r3"></div>'
    }
    else{
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
    svg_eq = svg_eq.replaceAll("∞",'<div class="screen-character"><img src="assets/buttons/infinity-solid.svg" alt="*" class="screen-icon" id="sicon-multiplication"></div>')};
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
    if (eval_eq==="Error!"){
      eval_eq="0";
      refresh_screen()
    }else {
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

    if (!isNaN(eval_eq) && eval_eq!="0"){
      eval_eq = "("+eval_eq+")"
    };
    refresh_screen();}
}

document.querySelector("#button-seven").addEventListener("click", () => {
    ele = document.getElementById("icon-7");
    ele_parent = (ele.parentElement);
    ele_parent.classList.remove('calc-button')
    ele_parent.classList.add('calc-button-after')
    ele.classList.remove('button-icon')
    ele.classList.add('button-icon-after')
    setTimeout(function() {
      ele_parent.classList.remove('calc-button-after')
      ele_parent.classList.add('calc-button')
      ele.classList.remove('button-icon-after')
      ele.classList.add('button-icon')
  }, (0.15 * 1000));
    equation_append("7");
  });


document.querySelector("#button-eight").addEventListener("click", () => {
  ele = document.getElementById("icon-8");
  ele_parent = (ele.parentElement);
  ele_parent.classList.remove('calc-button')
  ele_parent.classList.add('calc-button-after')
  ele.classList.remove('button-icon')
  ele.classList.add('button-icon-after')
  setTimeout(function() {
    ele_parent.classList.remove('calc-button-after')
    ele_parent.classList.add('calc-button')
    ele.classList.remove('button-icon-after')
    ele.classList.add('button-icon')
}, (0.15 * 1000));
    equation_append("8");
  });

document.querySelector("#button-nine").addEventListener("click", () => {
  ele = document.getElementById("icon-9");
  ele_parent = (ele.parentElement);
  ele_parent.classList.remove('calc-button')
  ele_parent.classList.add('calc-button-after')
  ele.classList.remove('button-icon')
  ele.classList.add('button-icon-after')
  setTimeout(function() {
    ele_parent.classList.remove('calc-button-after')
    ele_parent.classList.add('calc-button')
    ele.classList.remove('button-icon-after')
    ele.classList.add('button-icon')
}, (0.15 * 1000));
    equation_append("9");
  });

document.querySelector("#button-four").addEventListener("click", () => {
  ele = document.getElementById("icon-4");
  ele_parent = (ele.parentElement);
  ele_parent.classList.remove('calc-button')
  ele_parent.classList.add('calc-button-after')
  ele.classList.remove('button-icon')
  ele.classList.add('button-icon-after')
  setTimeout(function() {
    ele_parent.classList.remove('calc-button-after')
    ele_parent.classList.add('calc-button')
    ele.classList.remove('button-icon-after')
    ele.classList.add('button-icon')
}, (0.15 * 1000));
    equation_append("4");
  });

document.querySelector("#button-five").addEventListener("click", () => {
  ele = document.getElementById("icon-5");
  ele_parent = (ele.parentElement);
  ele_parent.classList.remove('calc-button')
  ele_parent.classList.add('calc-button-after')
  ele.classList.remove('button-icon')
  ele.classList.add('button-icon-after')
  setTimeout(function() {
    ele_parent.classList.remove('calc-button-after')
    ele_parent.classList.add('calc-button')
    ele.classList.remove('button-icon-after')
    ele.classList.add('button-icon')
}, (0.15 * 1000));
    equation_append("5");
  });

document.querySelector("#button-six").addEventListener("click", () => {
  ele = document.getElementById("icon-6");
  ele_parent = (ele.parentElement);
  ele_parent.classList.remove('calc-button')
  ele_parent.classList.add('calc-button-after')
  ele.classList.remove('button-icon')
  ele.classList.add('button-icon-after')
  setTimeout(function() {
    ele_parent.classList.remove('calc-button-after')
    ele_parent.classList.add('calc-button')
    ele.classList.remove('button-icon-after')
    ele.classList.add('button-icon')
}, (0.15 * 1000));
    equation_append("6");
  });

document.querySelector("#button-one").addEventListener("click", () => {
  ele = document.getElementById("icon-1");
  ele_parent = (ele.parentElement);
  ele_parent.classList.remove('calc-button')
  ele_parent.classList.add('calc-button-after')
  ele.classList.remove('button-icon')
  ele.classList.add('button-icon-after')
  setTimeout(function() {
    ele_parent.classList.remove('calc-button-after')
    ele_parent.classList.add('calc-button')
    ele.classList.remove('button-icon-after')
    ele.classList.add('button-icon')
}, (0.15 * 1000));
    equation_append("1");
  });

document.querySelector("#button-two").addEventListener("click", () => {
  ele = document.getElementById("icon-2");
  ele_parent = (ele.parentElement);
  ele_parent.classList.remove('calc-button')
  ele_parent.classList.add('calc-button-after')
  ele.classList.remove('button-icon')
  ele.classList.add('button-icon-after')
  setTimeout(function() {
    ele_parent.classList.remove('calc-button-after')
    ele_parent.classList.add('calc-button')
    ele.classList.remove('button-icon-after')
    ele.classList.add('button-icon')
}, (0.15 * 1000));
    equation_append("2");
  });

document.querySelector("#button-three").addEventListener("click", () => {
  ele = document.getElementById("icon-3");
  ele_parent = (ele.parentElement);
  ele_parent.classList.remove('calc-button')
  ele_parent.classList.add('calc-button-after')
  ele.classList.remove('button-icon')
  ele.classList.add('button-icon-after')
  setTimeout(function() {
    ele_parent.classList.remove('calc-button-after')
    ele_parent.classList.add('calc-button')
    ele.classList.remove('button-icon-after')
    ele.classList.add('button-icon')
}, (0.15 * 1000));
    equation_append("3");
  });

document.querySelector("#button-decimal").addEventListener("click", () => {
  ele = document.getElementById("icon-decimal");
  ele_parent = (ele.parentElement);
  ele_parent.classList.remove('calc-button')
  ele_parent.classList.add('calc-button-after')
  ele.classList.remove('button-icon')
  ele.classList.add('button-icon-after')
  setTimeout(function() {
    ele_parent.classList.remove('calc-button-after')
    ele_parent.classList.add('calc-button')
    ele.classList.remove('button-icon-after')
    ele.classList.add('button-icon')
}, (0.15 * 1000));
    equation_append(".");
  });

document.querySelector("#button-zero").addEventListener("click", () => {
  ele = document.getElementById("icon-0");
  ele_parent = (ele.parentElement);
  ele_parent.classList.remove('calc-button')
  ele_parent.classList.add('calc-button-after')
  ele.classList.remove('button-icon')
  ele.classList.add('button-icon-after')
  setTimeout(function() {
    ele_parent.classList.remove('calc-button-after')
    ele_parent.classList.add('calc-button')
    ele.classList.remove('button-icon-after')
    ele.classList.add('button-icon')
}, (0.15 * 1000));
    equation_append("0");
  });

document.querySelector("#button-equal").addEventListener("click", () => {
  ele = document.getElementById("icon-equals");
  ele_parent = (ele.parentElement);
  ele_parent.classList.remove('calc-button')
  ele_parent.classList.add('calc-button-after')
  ele.classList.remove('button-icon')
  ele.classList.add('button-icon-after')
  setTimeout(function() {
    ele_parent.classList.remove('calc-button-after')
    ele_parent.classList.add('calc-button')
    ele.classList.remove('button-icon-after')
    ele.classList.add('button-icon')
}, (0.15 * 1000));
    equation_evaluate();
  });

document.querySelector("#button-allclear").addEventListener("click", () => {
  ele = document.getElementById("icon-allclear");
  ele_parent = (ele.parentElement);
  ele_parent.classList.remove('calc-button')
  ele_parent.classList.add('calc-button-after')
  ele.classList.remove('button-icon')
  ele.classList.add('button-icon-after')
  setTimeout(function() {
    ele_parent.classList.remove('calc-button-after')
    ele_parent.classList.add('calc-button')
    ele.classList.remove('button-icon-after')
    ele.classList.add('button-icon')
}, (0.15 * 1000));
    equation_reset();
  });

document.querySelector("#button-clear").addEventListener("click", () => {
  ele = document.getElementById("icon-backspace");
  ele_parent = (ele.parentElement);
  ele_parent.classList.remove('calc-button')
  ele_parent.classList.add('calc-button-after')
  ele.classList.remove('button-icon')
  ele.classList.add('button-icon-after')
  setTimeout(function() {
    ele_parent.classList.remove('calc-button-after')
    ele_parent.classList.add('calc-button')
    ele.classList.remove('button-icon-after')
    ele.classList.add('button-icon')
}, (0.15 * 1000));
    equation_backspace();
  });

document.querySelector("#button-percent").addEventListener("click", () => {
  ele = document.getElementById("icon-%");
  ele_parent = (ele.parentElement);
  ele_parent.classList.remove('calc-button')
  ele_parent.classList.add('calc-button-after')
  ele.classList.remove('button-icon')
  ele.classList.add('button-icon-after')
  setTimeout(function() {
    ele_parent.classList.remove('calc-button-after')
    ele_parent.classList.add('calc-button')
    ele.classList.remove('button-icon-after')
    ele.classList.add('button-icon')
}, (0.15 * 1000));
    equation_append("%");
  });

document.querySelector("#button-divide").addEventListener("click", () => {
  ele = document.getElementById("icon-/");
  ele_parent = (ele.parentElement);
  ele_parent.classList.remove('calc-button')
  ele_parent.classList.add('calc-button-after')
  ele.classList.remove('button-icon')
  ele.classList.add('button-icon-after')
  setTimeout(function() {
    ele_parent.classList.remove('calc-button-after')
    ele_parent.classList.add('calc-button')
    ele.classList.remove('button-icon-after')
    ele.classList.add('button-icon')
}, (0.15 * 1000));
    equation_append("/");
  });

document.querySelector("#button-multiply").addEventListener("click", () => {
  ele = document.getElementById("icon-*");
  ele_parent = (ele.parentElement);
  ele_parent.classList.remove('calc-button')
  ele_parent.classList.add('calc-button-after')
  ele.classList.remove('button-icon')
  ele.classList.add('button-icon-after')
  setTimeout(function() {
    ele_parent.classList.remove('calc-button-after')
    ele_parent.classList.add('calc-button')
    ele.classList.remove('button-icon-after')
    ele.classList.add('button-icon')
}, (0.15 * 1000));
    equation_append("*");
  });

document.querySelector("#button-minus").addEventListener("click", () => {
  ele = document.getElementById("icon--");
  ele_parent = (ele.parentElement);
  ele_parent.classList.remove('calc-button')
  ele_parent.classList.add('calc-button-after')
  ele.classList.remove('button-icon')
  ele.classList.add('button-icon-after')
  setTimeout(function() {
    ele_parent.classList.remove('calc-button-after')
    ele_parent.classList.add('calc-button')
    ele.classList.remove('button-icon-after')
    ele.classList.add('button-icon')
}, (0.15 * 1000));
    equation_append("-");
  });

document.querySelector("#button-plus").addEventListener("click", () => {
  ele = document.getElementById("icon-+");
  ele_parent = (ele.parentElement);
  ele_parent.classList.remove('calc-button')
  ele_parent.classList.add('calc-button-after')
  ele.classList.remove('button-icon')
  ele.classList.add('button-icon-after')
  setTimeout(function() {
    ele_parent.classList.remove('calc-button-after')
    ele_parent.classList.add('calc-button')
    ele.classList.remove('button-icon-after')
    ele.classList.add('button-icon')
}, (0.15 * 1000));
    equation_append("+");
  });

document.querySelector("#button-parenthesis-left").addEventListener("click", () => {
  ele = document.getElementById("icon-(");
  ele_parent = (ele.parentElement);
  ele_parent.classList.remove('calc-button')
  ele_parent.classList.add('calc-button-after')
  ele.classList.remove('button-icon')
  ele.classList.add('button-icon-after')
  setTimeout(function() {
    ele_parent.classList.remove('calc-button-after')
    ele_parent.classList.add('calc-button')
    ele.classList.remove('button-icon-after')
    ele.classList.add('button-icon')
}, (0.15 * 1000));
    equation_append("(");
  });

document.querySelector("#button-parenthesis-right").addEventListener("click", () => {
  ele = document.getElementById("icon-)");
  ele_parent = (ele.parentElement);
  ele_parent.classList.remove('calc-button')
  ele_parent.classList.add('calc-button-after')
  ele.classList.remove('button-icon')
  ele.classList.add('button-icon-after')
  setTimeout(function() {
    ele_parent.classList.remove('calc-button-after')
    ele_parent.classList.add('calc-button')
    ele.classList.remove('button-icon-after')
    ele.classList.add('button-icon')
}, (0.15 * 1000));
    equation_append(")");
  });

document.addEventListener("keydown", (e) => {
  if ((eval_eq=="NaN" || eval_eq==="Error!") || (last_press==="Enter" && e.key==="Enter")){
    eval_eq="0";
    refresh_screen()
  }
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
  last_press = e.key
})

document.addEventListener("keydown",(e) => {
  if (e.ctrlKey && e.key === 'Backspace') {
    ele = document.getElementById("icon-allclear");
    ele_parent = (ele.parentElement);
    ele_parent.classList.remove('calc-button')
    ele_parent.classList.add('calc-button-after')
    ele.classList.remove('button-icon')
    ele.classList.add('button-icon-after')
  } else if (e.key==="Enter" || e.key==="Backspace" || e.key==="."){
    if (e.key==="."){
      key_pressed = "decimal"
    }else if (e.key==="Backspace"){
      key_pressed = "backspace"
    }else if (e.key==="Enter"){
      key_pressed = "equals"
    }
    ele = document.getElementById("icon-"+key_pressed);
    ele_parent = (ele.parentElement);
    ele_parent.classList.remove('calc-button')
    ele_parent.classList.add('calc-button-after')
    ele.classList.remove('button-icon')
    ele.classList.add('button-icon-after')
  }else if (Object.keys(calc_keys).includes(e.key)) {
    ele = document.getElementById("icon-"+calc_keys[e.key])
    ele_parent = (ele.parentElement);
    ele_parent.classList.remove('calc-button')
    ele_parent.classList.add('calc-button-after')
    ele.classList.remove('button-icon')
    ele.classList.add('button-icon-after')
  }
})



document.addEventListener("keyup",(e) => {
  if (e.ctrlKey && e.key === 'Backspace') {
    ele = document.getElementById("icon-allclear");
    ele_parent = (ele.parentElement);
    ele_parent.classList.remove('calc-button-after')
    ele_parent.classList.add('calc-button')
    ele.classList.remove('button-icon-after')
    ele.classList.add('button-icon')
  } else if (e.key==="Enter" || e.key==="Backspace" || e.key==="."){
    if (e.key==="."){
      key_pressed = "decimal"
    }else if (e.key==="Backspace"){
      key_pressed = "backspace"
    }else if (e.key==="Enter"){
      key_pressed = "equals"
    }
    ele = document.getElementById("icon-"+key_pressed);
    ele_parent = (ele.parentElement);
    ele_parent.classList.remove('calc-button-after')
    ele_parent.classList.add('calc-button')
    ele.classList.remove('button-icon-after')
    ele.classList.add('button-icon')
  }else if (Object.keys(calc_keys).includes(e.key)) {
    ele = document.getElementById("icon-"+calc_keys[e.key])
    ele_parent = (ele.parentElement);
    ele_parent.classList.remove('calc-button-after')
    ele_parent.classList.add('calc-button')
    ele.classList.remove('button-icon-after')
    ele.classList.add('button-icon')
  }
})


document.addEventListener("touchstart",(e) => {
  if (e.ctrlKey && e.key === 'Backspace') {
    ele = document.getElementById("icon-allclear");
    ele_parent = (ele.parentElement);
    ele_parent.classList.remove('calc-button')
    ele_parent.classList.add('calc-button-after')
    ele.classList.remove('button-icon')
    ele.classList.add('button-icon-after')
    setTimeout(function() {
      ele_parent.classList.remove('calc-button-after')
      ele_parent.classList.add('calc-button')
      ele.classList.remove('button-icon-after')
      ele.classList.add('button-icon')
  }, (1 * 1000));
    
  } else if (e.key==="Enter" || e.key==="Backspace" || e.key==="."){
    if (e.key==="."){
      key_pressed = "decimal"
    }else if (e.key==="Backspace"){
      key_pressed = "backspace"
    }else if (e.key==="Enter"){
      key_pressed = "equals"
    }
    ele = document.getElementById("icon-"+key_pressed);
    ele_parent = (ele.parentElement);
    ele_parent.classList.remove('calc-button')
    ele_parent.classList.add('calc-button-after')
    ele.classList.remove('button-icon')
    ele.classList.add('button-icon-after')
    setTimeout(function() {
      ele_parent.classList.remove('calc-button-after')
      ele_parent.classList.add('calc-button')
      ele.classList.remove('button-icon-after')
      ele.classList.add('button-icon')
  }, (1 * 1000));
  }else if (Object.keys(calc_keys).includes(e.key)) {
    ele = document.getElementById("icon-"+calc_keys[e.key])
    ele_parent = (ele.parentElement);
    ele_parent.classList.remove('calc-button')
    ele_parent.classList.add('calc-button-after')
    ele.classList.remove('button-icon')
    ele.classList.add('button-icon-after')
    setTimeout(function() {
      ele_parent.classList.remove('calc-button-after')
      ele_parent.classList.add('calc-button')
      ele.classList.remove('button-icon-after')
      ele.classList.add('button-icon')
  }, (1 * 1000));
  }
})