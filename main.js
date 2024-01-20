const pets = [
    {
      id: 1,
      name: "Dusty",
      color: "Green",
      specialSkill: "Gives sincere apologies.",
      type: "cat",
      imageUrl: "http://kittentoob.com/wp-content/uploads/2015/06/funny-cat-with-a-towel.jpg",
    },
    {
        id: 2,
      name: "Trouble",
      color: "Brown",
      specialSkill: "Just picks the tomatoes off of a sandwich instead of requesting a whole new sandwich.",
      type: "dino",
      imageUrl: "https://www.specfictionshop.com/cdn/shop/products/MAIN-VELOCIRAPTOR_400x.png?v=1651276475",
    },
    {
      id: 3,
      name: "Whiskers",
      color: "Yellow",
      specialSkill: "Can prove he is a real man by drinking whiskey.",
      type: "dino",
      imageUrl: "https://mydinosaurs.com/wp-content/uploads/2017/02/2-3-600x400.jpg"
    },
    {
      id: 4,
      name: "Coco",
      color: "Black",
      specialSkill: "Burps minimally.",
      type: "dog",
      imageUrl: "http://cdn.akc.org/content/article-body-image/funny-pembroke_welsh_corgi.jpg"
    },
    {
      id: 5,
      name: "Spooky",
      color: "Brown",
      specialSkill: "Comfortable in the outdoors for up to eight hours.",
      type: "cat",
      imageUrl: "http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg"
    },
    {
      id: 6,
      name: "Tiger",
      color: "Black",
      specialSkill: "Can read (but cannot understand) Hebrew.",
      type: "dog",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Basset_Hound_600.jpg"
    },
    {
      id: 7,
      name: "Oreo",
      color: "Yellow",
      specialSkill: "Able to stop chewing ice or whistling on request.",
      type: "cat",
      imageUrl: "https://i.pinimg.com/originals/9d/da/3e/9dda3e5fd2b9886fc3d13ee47f52e8a0.jpg"
    },
    {
      id: 8,
      name: "Ginger",
      color: "Grey",
      specialSkill: "Comfortable in the outdoors for up to eight hours.",
      type: "dino",
      imageUrl: "https://media.wdwnt.com/2022/02/dinosaur-aladar-primer-paint-6-1200x900.jpg"
    },
    {
      id: 9,
      name: "Sassy",
      color: "Brown",
      specialSkill: "Adept at talking self and others out of fights.",
      type: "cat",
      imageUrl: "https://tailandfur.com/wp-content/uploads/2015/09/40-Amazing-Cat-Funny-Moment-Pictures-Feature-Image.jpg"
    },
    {
      id: 10,
      name: "Sammy",
      color: "Blue",
      specialSkill: "Listens attentively to boring stories.",
      type: "cat",
      imageUrl: "https://i.pinimg.com/originals/04/54/92/0454926d39eeb420f4f01948e94e9e41.jpg"
    },
    {
      id: 11,
      name: "Coco",
      color: "Orange",
      specialSkill: "Can be around food without staring creepily at it.",
      type: "dino",
      imageUrl: "https://arc-anglerfish-arc2-prod-bostonglobe.s3.amazonaws.com/public/IBL4LFSGSQI6TIMQQMFSUSNU6Y.jpg"
    },
    {
      id: 12,
      name: "Buster",
      color: "Green",
      specialSkill: "Does not use excessive acronyms.",
      type: "dog",
      imageUrl: "https://i.pinimg.com/originals/1f/30/8c/1f308c9c108a384b91b39430cc7312e9.jpg"
    },
    {
      id: 13,
      name: "Chester",
      color: "Red",
      specialSkill: "Expertly quotes and recognizes dialogue from early seasons of The Simpsons.",
      type: "dog",
      imageUrl: "https://cdn.britannica.com/58/8158-050-43A2303C/Australian-cattle-dog.jpg"
    },
    {
      id: 14,
      name: "Samantha",
      color: "Brown",
      specialSkill: "Always up for dessert.",
      type: "cat",
      imageUrl: "http://3.bp.blogspot.com/-RzIFLsIO-XQ/UFoMLOT66JI/AAAAAAAAVps/JRF98hdA9S8/s640/funny-cat-pictures-016-027.jpg"
    },
    {
      id: 15,
      name: "Coco",
      color: "Red",
      specialSkill: "Burps minimally.",
      type: "cat",
      imageUrl: "http://cathumor.net/wp-content/uploads/2013/12/cat-humor-funny-karate-cat-2.jpg"
    },
    {
      id: 16,
      name: "Smokey",
      color: "Brown",
      specialSkill: "Drives at a safe rate of speed in snow or rain.",
      type: "dino",
      imageUrl: "https://variety.com/wp-content/uploads/2022/06/2512_D093_00185RV4_CROP-e1654811831650.jpeg?w=1000"
    },
    {
     id: 17,
      name: "Muffin",
      color: "Yellow",
      specialSkill: "Does not freak out if you haven’t seen his favorite movie (The Big Lebowski).",
      type: "cat",
      imageUrl: "https://a-z-animals.com/media/2021/11/Persian-4-1024x535.jpg"
    },
    {
      id: 18,
      name: "Salem",
      color: "Black",
      specialSkill: "Proficient in air guitar",
      type: "cat",
      imageUrl: "https://images.pexels.com/photos/7725968/pexels-photo-7725968.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: 19,
      name: "Callie",
      color: "Blue",
      specialSkill: "Listens attentively to boring stories.",
      type: "dog",
      imageUrl: "https://media-be.chewy.com/wp-content/uploads/2021/06/16153832/AustralianCattleDog-FeaturedImage-1024x615.jpg"
    },
    {
      id: 20,
      name: "Spooky",
      color: "Black",
      specialSkill: "Uses litter box at appropriate hours.",
      type: "cat",
      imageUrl: "https://media.nbclosangeles.com/2022/08/GettyImages-1402118614.jpg?quality=85&strip=all&resize=1200%2C675"
    },
    {
      id: 21,
      name: "Miss Kitty",
      color: "Red",
      specialSkill: "Owns a Nintendo Power Glove.",
      type: "dino",
      imageUrl: "https://i0.wp.com/onlydinosaurs.com/wp-content/uploads/2021/04/Jurassic-Park-Red-Raptor-Dinosaur-Costume%EF%BC%885%EF%BC%89.jpg"
    },
    {
        id: 22,
      name: "Snuggles",
      color: "Orange",
      specialSkill: "Is comfortable with jokes about his receding hairline.",
      type: "cat",
      imageUrl: "https://i.pinimg.com/originals/c7/19/b9/c719b92fe73c1ddc8d0fee17c5b2267a.jpg"
    },
    {
        id: 23,
      name: "Buddy",
      color: "Red",
      specialSkill: "Enjoys fine wine.",
      type: "dog",
      imageUrl: "http://1.bp.blogspot.com/-VjM0CmtN-vU/T7YX-LXa09I/AAAAAAAADA0/Vt1oGWEG0lw/s1600/sheepdog+border+collie+shakes+off+water+funny+picture+photo+pulling+faces+raspberry+tongue.jpg"
    },
    {
        id: 24,
      name: "George",
      color: "Brown",
      specialSkill: "Participates in karaoke but does not force others to go out to karaoke.",
      type: "dog",
      imageUrl: "https://static.nationalgeographic.co.uk/files/styles/image_3200/public/01-chocolate-lab-nationalgeographic_1154144.jpg?w=1600"
    },
    {
      id: 25,
      name: "Salem",
      color: "Red",
      specialSkill: "Knows the words to 4 rap songs.",
      type: "cat",
      imageUrl: "https://www.findcatnames.com/wp-content/uploads/2017/10/orange-striped-cat.jpg"
    },
    {
        id: 26,
      name: "Bubba",
      color: "Yellow",
      specialSkill: "Cleans himself.",
      type: "dog",
      imageUrl: "https://www.thetrendywhippet.co.uk/wp-content/uploads/2016/11/IMG_1651-600x400.jpg"
    },
    {
        id: 27,
      name: "Chloe",
      color: "Green",
      specialSkill: "Admits he is wrong",
      type: "dino",
      imageUrl: "https://assets.creationmuseum.org/img/pages/1703-DinoDen-TwoCard.jpg"
    },
    {
        id: 28,
      name: "Nala",
      color: "Purple",
      specialSkill: "Dances when he has to.",
      type: "cat",
      imageUrl: "https://tailandfur.com/wp-content/uploads/2016/03/40-Scary-and-Funny-Cat-Pictures-8.jpg"
    },
    {
        id: 29,
      name: "Oscar",
      color: "Green",
      specialSkill: "Gives hugs with appropriate pressure and for the right length of time.",
      type: "cat",
      imageUrl: "http://img.izismile.com/img/img2/20090219/cats_02.jpg"
    },
    {
        id: 30,
      name: "Lucy",
      color: "Red",
      specialSkill: "Doesn’t get weirded out by the word “moist.”",
      type: "dino",
      imageUrl: "https://i0.wp.com/onlydinosaurs.com/wp-content/uploads/2023/07/Lifelike-Pink-Berry-Giant-Electronic-Ankylosaurus-1.jpg"
    }
  ];

// ** FUNCTIONS **


  // get cards on DOM
const renderToDom = (divID, htmlToRender) => {
    const selectedDiv = document.querySelector(divID);
    selectedDiv.innerHTML = htmlToRender;
  };

const cardsOnDom = (array) => {
  let domString = "";
  for (const pet of array) {
    domString += `  <div class="card" style="width: 18rem;">
    <img src=${pet.imageUrl} class="card-img-top" alt=${pet.name}>
    <div class="card-body">
      <h5 class="card-title">${pet.name}</h5>
      <p class="card-text">Type: ${pet.type}</p>
      <p class="card-text">Color: ${pet.color}</p>
      <p class="card-text">Special Skill: ${pet.specialSkill}</p>
    </div>`;
  }

  renderToDom("#app", domString);
}

//targeting buttons on DOM
const showAllButton = document.querySelector("#all-btn");
const showDogsButton = document.querySelector("#dogs-btn");
const showCatsButton = document.querySelector("#cats-btn");
const showDinosButton = document.querySelector("#dinos-btn");

// function to filter pets of certain type
const filter = (array, typeString) => {
  const typeArray = [];
  // array.forEach((item) => {
  // if (item.type === typeString) {
  // typeArray.push(item); 
  // }
  // });
for (const pet of array) {
  if (pet.type === typeString) {
    typeArray.push(pet);
  }
 }
 return typeArray;
};

//adding click event to show all
showAllButton.addEventListener("click", (e) => {
  cardsOnDom(pets);
});

//adding click event to filter dogs
showDogsButton.addEventListener("click", (e) => {
  const dogTypePets = filter(pets, "dog");
  cardsOnDom(dogTypePets);
});

showCatsButton.addEventListener("click", (e) => {
  const catTypePets = filter(pets, "cat");
  cardsOnDom(catTypePets);
});

showDinosButton.addEventListener("click", (e) => {
  const dinoTypePets = filter(pets, "dino");
  cardsOnDom(dinoTypePets);
});


//target form on DOM
const form = document.querySelector("form");

//function to yoink push and repaint
const addPet = (e) => {
  e.preventDefault(); // remember this for future forms

 const addPetObj = {
  id: pets.length + 1,
  name: document.querySelector("#name").value,
  type: document.querySelector("#type").value,
  color: document.querySelector("#color").value,
  specialSkill: document.querySelector("#specialSkills").value,
  image: document.querySelector("#image").value,

 }

 pets.push(addPetObj);
 cardsOnDom(pets);
 form.reset();
}

// form submit listener w/ callback
form.addEventListener('submit', addPet);
