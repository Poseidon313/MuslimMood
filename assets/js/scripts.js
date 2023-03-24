

function openNav() {
  document.getElementById("myNav").style.width = "100%";
  document.querySelector(".fa-bars").style.display = "none";
  document.querySelector(".navbar").classList.add("overlay-active");
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
  document.querySelector(".fa-bars").style.display = "block";
  document.querySelector(".navbar").classList.remove("overlay-active");
}

document.querySelector(".fa-bars").onclick = function () {
  openNav();
};
document.querySelector(".closebtn").onclick = function () {
  closeNav();
};




const feelingChoice = document.querySelector("#feeling-choice");
const feelingImage = document.querySelector("#feeling-image");
const pageTitle = document.querySelector("h1#test");
const pageContent = document.querySelector("p");
const imageContainer = document.querySelector("#image-container");
const prevButton = document.createElement("button");
const nextButton = document.createElement("button");
let thankfulIndex = 0;
let sadIndex = 0;
let anxiousIndex = 0;
let aloneIndex = 0;
let duaParentsIndex = 0;
let duaSchoolIndex = 0;
let duaWealthIndex = 0;
let grievedIndex = 0;
let stressedIndex = 0;
let unsureIndex = 0;
let randomIndex = 0;

const randomImages = [
  "assets/images/random1.jpg",
  "assets/images/random2.jpg",
  "assets/images/random3.jpg",
  "assets/images/random4.jpg",
  "assets/images/random5.jpg",
  "assets/images/random6.jpg",
  "assets/images/random7.jpg",
];

const thankfulImages = [
  "assets/images/thankful1.jpg",
  "assets/images/thankful2.jpg",
  "assets/images/thankful3.jpg",
  "assets/images/thankful4.jpg",
];

const sadImages = [
  "assets/images/sads1.jpg",
  "assets/images/sads2.jpg",
  "assets/images/sads3.jpg",
];
const aloneImages = [
  "assets/images/alone1.jpg",
  "assets/images/alone2.jpg",
  "assets/images/alone3.jpg",
];

const anxiousImages = [
  "assets/images/anxious1.jpg",
  "assets/images/anxious2.jpg",
  "assets/images/anxious3.jpg",
];

const duaParentsImages = [
  "assets/images/dua-parents1.jpg",
  "assets/images/dua-parents2.jpg",
  "assets/images/dua-parents3.jpg",
];

const duaSchoolImages = [
  "assets/images/dua-school1.jpg",
  "assets/images/dua-school2.jpg",
  "assets/images/dua-school3.jpg",
  "assets/images/dua-school4.jpg",
];

const duaWealthImages = [
  "assets/images/dua-wealth1.jpg",
  "assets/images/dua-wealth2.jpg",
  "assets/images/dua-wealth3.jpg",
];

const grievedImages = [
  "assets/images/grieved1.jpg",
  "assets/images/grieved2.jpg",
  "assets/images/grieved3.jpg",
];

const stressedImages = [
  "assets/images/stressed1.jpg",
  "assets/images/stressed2.jpg",
  "assets/images/stressed3.jpg",
  "assets/images/stressed4.jpg",
  "assets/images/stressed5.jpg",
  "assets/images/stressed6.jpg",
];

const unsureImages = [
  "assets/images/unsure1.jpg",
  "assets/images/unsure2.jpg",
  "assets/images/unsure3.jpg",
  "assets/images/unsure4.jpg",
  "assets/images/unsure5.jpg",
  "assets/images/unsure6.jpg",
];
feelingChoice.addEventListener("input", () => {
  const chosenFeeling = feelingChoice.value.toLowerCase();

  if (chosenFeeling === "thankful") {
    feelingImage.src = thankfulImages[thankfulIndex];
    prevButton.addEventListener("click", () => {
      thankfulIndex =
        (thankfulIndex - 1 + thankfulImages.length) % thankfulImages.length;
      feelingImage.src = thankfulImages[thankfulIndex];
    });
    nextButton.addEventListener("click", () => {
      thankfulIndex = (thankfulIndex + 1) % thankfulImages.length;
      feelingImage.src = thankfulImages[thankfulIndex];
    });
  } else if (chosenFeeling === "sad") {
    feelingImage.src = sadImages[sadIndex];
    prevButton.addEventListener("click", () => {
      sadIndex = (sadIndex - 1 + sadImages.length) % sadImages.length;
      feelingImage.src = sadImages[sadIndex];
    });
    nextButton.addEventListener("click", () => {
      sadIndex = (sadIndex + 1) % sadImages.length;
      feelingImage.src = sadImages[sadIndex];
    });
  } else if (chosenFeeling === "anxious") {
    feelingImage.src = anxiousImages[anxiousIndex];
    prevButton.addEventListener("click", () => {
      anxiousIndex =
        (anxiousIndex - 1 + anxiousImages.length) % anxiousImages.length;
      feelingImage.src = anxiousImages[anxiousIndex];
    });
    nextButton.addEventListener("click", () => {
      anxiousIndex = (anxiousIndex + 1) % anxiousImages.length;
      feelingImage.src = anxiousImages[anxiousIndex];
    });
  } else if (chosenFeeling === "alone") {
    feelingImage.src = aloneImages[aloneIndex];
    prevButton.addEventListener("click", () => {
      aloneIndex = (aloneIndex - 1 + aloneImages.length) % aloneImages.length;
      feelingImage.src = aloneImages[aloneIndex];
    });
    nextButton.addEventListener("click", () => {
      aloneIndex = (aloneIndex + 1) % aloneImages.length;
      feelingImage.src = aloneImages[aloneIndex];
    });
  } else if (chosenFeeling === "dua-parents") {
    feelingImage.src = duaParentsImages[duaParentsIndex];
    prevButton.addEventListener("click", () => {
      duaParentsIndex =
        (duaParentsIndex - 1 + duaParentsImages.length) %
        duaParentsImages.length;
      feelingImage.src = duaParentsImages[duaParentsIndex];
    });
    nextButton.addEventListener("click", () => {
      duaParentsIndex = (duaParentsIndex + 1) % duaParentsImages.length;
      feelingImage.src = duaParentsImages[duaParentsIndex];
    });
  } else if (chosenFeeling === "dua-wealth") {
    feelingImage.src = duaWealthImages[duaWealthIndex];
    prevButton.addEventListener("click", () => {
      duaWealthIndex =
        (duaWealthIndex - 1 + duaWealthImages.length) % duaWealthImages.length;
      feelingImage.src = duaWealthImages[duaWealthIndex];
    });
    nextButton.addEventListener("click", () => {
      duaWealthIndex = (duaWealthIndex + 1) % duaWealthImages.length;
      feelingImage.src = duaWealthImages[duaWealthIndex];
    });
  } else if (chosenFeeling === "grieved") {
    feelingImage.src = grievedImages[grievedIndex];
    prevButton.addEventListener("click", () => {
      grievedIndex =
        (grievedIndex - 1 + grievedImages.length) % grievedImages.length;
      feelingImage.src = grievedImages[grievedIndex];
    });
    nextButton.addEventListener("click", () => {
      grievedIndex = (grievedIndex + 1) % grievedImages.length;
      feelingImage.src = grievedImages[grievedIndex];
    });
  } else if (chosenFeeling === "unsure") {
    feelingImage.src = unsureImages[unsureIndex];
    prevButton.addEventListener("click", () => {
      unsureIndex =
        (unsureIndex - 1 + unsureImages.length) % unsureImages.length;
      feelingImage.src = unsureImages[unsureIndex];
    });
    nextButton.addEventListener("click", () => {
      unsureIndex = (unsureIndex + 1) % unsureImages.length;
      feelingImage.src = unsureImages[unsureIndex];
    });
  } else if (chosenFeeling === "stressed") {
    feelingImage.src = stressedImages[stressedIndex];
    prevButton.addEventListener("click", () => {
      stressedIndex =
        (stressedIndex - 1 + stressedImages.length) % stressedImages.length;
      feelingImage.src = stressedImages[stressedIndex];
    });
    nextButton.addEventListener("click", () => {
      stressedIndex = (stressedIndex + 1) % stressedImages.length;
      feelingImage.src = stressedImages[stressedIndex];
    });
  } else if (chosenFeeling === "dua-school") {
    feelingImage.src = duaSchoolImages[duaSchoolIndex];
    prevButton.addEventListener("click", () => {
      duaSchoolIndex =
        (duaSchoolIndex - 1 + duaSchoolImages.length) % duaSchoolImages.length;
      feelingImage.src = duaSchoolImages[duaSchoolIndex];
    });
    nextButton.addEventListener("click", () => {
      duaSchoolIndex = (duaSchoolIndex + 1) % duaSchoolImages.length;
      feelingImage.src = duaSchoolImages[duaSchoolIndex];
    });
  } else if (chosenFeeling === "random") {
    feelingImage.src = randomImages[randomIndex];
    prevButton.addEventListener("click", () => {
      randomIndex =
        (randomIndex - 1 + randomImages.length) % randomImages.length;
      feelingImage.src = randomImages[randomIndex];
    });
    nextButton.addEventListener("click", () => {
      randomIndex = (randomIndex + 1) % randomImages.length;
      feelingImage.src = randomImages[randomIndex];
    });
  }

  // Add event listeners to arrow buttons
  prevButton.textContent = "<";
  imageContainer.appendChild(prevButton);
  prevButton.style.display = "inline-block";

  nextButton.textContent = ">";
  imageContainer.appendChild(nextButton);
  nextButton.style.display = "inline-block";

  // Hide all elements except the image and select a feeling option
  pageTitle.style.display = "none";
  pageContent.style.display = "none";
  feelingChoice.style.display = "block";
  feelingImage.style.display = "block";
});

// select the heading element by its id
const heading = document.getElementById("content").querySelector("h1");

// set the initial styles for the heading
heading.style.opacity = 0;
heading.style.transform = "scale(0.5)";

// define the animation settings
const animationSettings = {
  duration: 1000,
  easing: "ease-in-out",
  fill: "forwards",
};

// create the animation using the Web Animations API
const animation = heading.animate(
  [
    { opacity: 0, transform: "scale(0.5)" },
    { opacity: 1, transform: "scale(1)" },
  ],
  animationSettings
);

// play the animation when the page is loaded
window.addEventListener("load", () => {
  animation.play();
});

const headingp = document.getElementById("content").querySelector("p");

// set the initial styles for the heading
heading.style.opacity = 0;
heading.style.transform = "scale(0.5)";

// define the animation settings
const animationSettingss = {
  duration: 1000,
  easing: "ease-in-out",
  fill: "forwards",
};

// create the animation using the Web Animations API
const animations = headingp.animate(
  [
    { opacity: 0, transform: "scale(0.5)" },
    { opacity: 1, transform: "scale(1)" },
  ],
  animationSettingss
);

// play the animation when the page is loaded
window.addEventListener("load", () => {
  animations.play();
});
