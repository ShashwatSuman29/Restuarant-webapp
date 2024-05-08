let images_dt = [
  {
    title: "THE CHICKEN <br> BURGER",
    price: "120rs",
    MRP: "200rs",
    calorie: 650,
    fat: 70,
    protein: 30,
  },
  {
    title: "THE PINK <br> BURGER",
    price: "80rs",
    MRP: "150rs",
    calorie: 450,
    fat: 60,
    protein: 26,
  },
  {
    title: "THE BLACK <br> BURGER",
    price: "115rs",
    MRP: "200rs",
    calorie: 600,
    fat: 80,
    protein: 34,
  },
  {
    title: "THE RED <br> BURGER",
    price: "130rs",
    MRP: "190rs",
    calorie: 500,
    fat: 68,
    protein: 26,
  },
  {
    title: "THE GREEN <br> BURGER",
    price: "120rs",
    MRP: "170rs",
    calorie: 400,
    fat: 45,
    protein: 22,
  },
  {
    title: "THE TORNADO <br> BURGER",
    price: "160rs",
    MRP: "220rs",
    calorie: 700,
    fat: 92,
    protein: 40,
  },
  {
    title: "THE COMBO <br> BURGER",
    price: "130rs",
    MRP: "180rs",
    calorie: 620,
    fat: 49,
    protein: 28,
  },
];
let index = 0;
let length = Array.from(document.getElementsByClassName("main_imgs")).length * 310;

let images_off = () => {
  Array.from(document.getElementsByClassName("main_imgs")).forEach((el) => {
    el.style.width = "35%";
    el.style.filter = "blur(1.5px)";
  });
};

let icon_off = () => {
    Array.from(document.getElementsByClassName("page-icon-slider")).forEach((el) => {
      el.style.transform = "unset";
      el.style.opacity = ".6";
    });
  };

document
  .getElementsByClassName("bi-chevron-right")[0]
  .addEventListener("click", () => {
    index += 310;
    if (index > length - 310) {
      index = length - 310;
    }
    document.getElementsByClassName("images")[0].scrollLeft = index;
    images_off();
    let main_imgs = document.getElementsByClassName("main_imgs");
    if (main_imgs[index / 310]) {
      main_imgs[index / 310].style.width = "60%";
      main_imgs[index / 310].style.filter = "blur(0px)";
      document.getElementsByClassName('title')[0].innerHTML = images_dt[(index/310)].title;
      document.getElementsByClassName('price')[0].innerHTML = `${images_dt[(index/310)].price}<sup><del>${images_dt[(index/310)].MRP}</del></sup>`;
      document.getElementById('calorie').innerText = images_dt[(index/310)].calorie;
      document.getElementById('fat').innerText = images_dt[(index/310)].fat;
      document.getElementById('protein').innerText = images_dt[(index/310)].protein;
      icon_off();
      document.getElementsByClassName('page-icon-slider')[(index/310)].style.transform = "scale(1.1)"
      document.getElementsByClassName('page-icon-slider')[(index/310)].style.opacity = 1;
        
    }
  });


  document
  .getElementsByClassName("bi-chevron-left")[0]
  .addEventListener("click", () => {
    index -= 310;
    if (index < 0) {
      index = 0;
    }
    document.getElementsByClassName("images")[0].scrollLeft = index;
    images_off();
    let main_imgs = document.getElementsByClassName("main_imgs");
    if (main_imgs[index / 310]) {
      main_imgs[index / 310].style.width = "60%";
      main_imgs[index / 310].style.filter = "blur(0px)";
      document.getElementsByClassName('title')[0].innerHTML = images_dt[(index/310)].title;
      document.getElementsByClassName('price')[0].innerHTML = `${images_dt[(index/310)].price}<sup><del>${images_dt[(index/310)].MRP}</del></sup>`;
      document.getElementById('calorie').innerText = images_dt[(index/310)].calorie;
      document.getElementById('fat').innerText = images_dt[(index/310)].fat;
      document.getElementById('protein').innerText = images_dt[(index/310)].protein;
      icon_off();
      document.getElementsByClassName('page-icon-slider')[(index/310)].style.transform = "scale(1.1)"
      document.getElementsByClassName('page-icon-slider')[(index/310)].style.opacity = 1;
        
    }
  });


  Array.from(document.getElementsByClassName('page-icon-slider')).forEach((el, i) => {
  el.addEventListener('click', () => {
    index = 310 * i; 

    document.getElementsByClassName("images")[0].scrollLeft = index;
    images_off();
    let main_imgs = document.getElementsByClassName("main_imgs");
    if (main_imgs[Math.floor(index / 310)]) {
      main_imgs[Math.floor(index / 310)].style.width = "60%";
      main_imgs[Math.floor(index / 310)].style.filter = "blur(0px)";
      document.getElementsByClassName('title')[0].innerHTML = images_dt[Math.floor(index / 310)].title;
      document.getElementsByClassName('price')[0].innerHTML = `${images_dt[Math.floor(index / 310)].price}<sup><del>${images_dt[Math.floor(index / 310)].MRP}</del></sup>`;
      document.getElementById('calorie').innerText = images_dt[Math.floor(index / 310)].calorie;
      document.getElementById('fat').innerText = images_dt[Math.floor(index / 310)].fat;
      document.getElementById('protein').innerText = images_dt[Math.floor(index / 310)].protein;
      icon_off();
      document.getElementsByClassName('page-icon-slider')[Math.floor(index / 310)].style.transform = "scale(1.1)";
      document.getElementsByClassName('page-icon-slider')[Math.floor(index / 310)].style.opacity = 1;
    }
  });
});
