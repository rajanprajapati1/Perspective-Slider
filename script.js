const array = [
  {
    name: "LOREM1",
    para: "1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim adipisci, autem laboriosam iusto consequuntur illo quaerat, eaque asperiores",
    color: "green",
  },
  {
    name: "LOREM2",
    para: "2 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim adipisci, autem laboriosam iusto consequuntur illo quaerat, eaque asperiores",
    color: " rgb(214, 52, 79)",
  },
  {
    name: "LOREM3",
    para: "3 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim adipisci, autem laboriosam iusto consequuntur illo quaerat, eaque asperiores",
    color: "purple",
  },
  {
    name: "LOREM4",
    para: "4 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim adipisci, autem laboriosam iusto consequuntur illo quaerat, eaque asperiores",
    color: "red",
  },
];

let index = 0;
let slidecount = array.length;

function showslide(cuindex) {
  const slide = array[cuindex];
  const main = document.querySelector(".main");
  main.style.background = slide.color;
  main.innerHTML = `
   <h1>${slide.name}</h1 >
   <p>${slide.para}</p>
  `;
}

function right() {
  index = (index - 1 + slidecount) % slidecount;
  showslide(index);
  const main = document.querySelector(".main");
  main.classList.add("scale-btn-reve");
  setTimeout(() => {
    main.classList.remove("scale-btn-reve");
  }, 200);
}

function left() {
  index = (index + 1) % slidecount;
  showslide(index);
  const main = document.querySelector(".main");
  main.classList.add("scale-btn");
  setTimeout(() => {
    main.classList.remove("scale-btn");
  }, 200);
}

showslide(index);
