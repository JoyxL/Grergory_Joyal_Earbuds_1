
const onProgress = (event) => {
  const progressBar = event.target.querySelector('.progress-bar');
  const updatingBar = event.target.querySelector('.update-bar');
  updatingBar.style.width = `${event.detail.totalProgress * 100}%`;
  if (event.detail.totalProgress === 1) {
    progressBar.classList.add('hide');
    event.target.removeEventListener('progress', onProgress);
  } else {
    progressBar.classList.remove('hide');
  }
};
document.querySelector('model-viewer').addEventListener('progress', onProgress);

(() => {

  //variables
  const model = document.querySelector("model-viewer");
  const hotspots = document.querySelectorAll(".Hotspot");

//Data 

const infoBoxes = [ 
  {
    title: "Silicone Buds",
    text: "comfortable fit and enhanced sound isolation",
    image: "images/soft.svg"
  },
  {
    title: "Metal body",
    text: " offer a perfect balance of durability and elegance",
    image: "images/metal_frame.svg"
  },
  {
    title: "ANC",
    text: "Block out the noise and immerse yourself in pure sound with ANC technology",
    image: "images/anc.svg"
  },
  {
    title: "Charging Area",
    text: "charging area designed for quick and hassle-free power-ups",
    image: "images/charging.svg"
  }
]

function loadInfo() {
  infoBoxes.forEach((infoBox, index)=>{

    let selected = document.querySelector(`#hotspot-${index+1}`);

    const title = document.createElement("h2");
    title.textContent= infoBox.title;

    const text = document.createElement("p");
    text.textContent = infoBox.text;

    const image = document.createElement("img"); 
      image.src = infoBox.image; 
      image.alt = infoBox.title;
      image.style.width = "100px"; 
      image.style.height = "auto";  
      selected.appendChild(image);

    selected.appendChild(title);
    selected.appendChild(text);
  })
}

//call the function to load data
loadInfo();

  function showInfo() {
    let selected = document.querySelector(`#${this.slot}`);
    gsap.to(selected, 1, { autoAlpha: 1 });
  }

  function hideInfo() {
    let selected = document.querySelector(`#${this.slot}`);
    gsap.to(selected, 1, { autoAlpha: 0 });
  }

  //Event listeners
  // model.addEventListener("load", modelLoaded);

  hotspots.forEach(function (hotspot) {
    hotspot.addEventListener("mouseenter", showInfo);
    hotspot.addEventListener("mouseleave", hideInfo);
  });

})();

