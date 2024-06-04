const dogList = document.querySelector(".dogs-list");
const dogContainer = document.querySelector(".main");

function creatingCards () {
for (let i = 0; i < data.length; i++) {
  const dog = data[i];

  //Creating dog list buttons:
  const li = document.createElement("li");
  li.classList = "dogs-list__button";
  li.textContent = dog.name;
  dogList.append(li);

  //Adding event listener:
  li.addEventListener("click", function () {
    console.log(dog.name);

    //Clearing previous dog cards:
    dogContainer.innerHTML = " ";

    //Creating new dog card:
    const dogCard = document.createElement("section");
    dogCard.classList = "main__dog-section";
    dogContainer.append(dogCard);

    //Adding heading to dog card:
    const heading = document.createElement("h2");
    heading.textContent = dog.name;
    dogCard.append(heading);

    //Adding the image:
    const dogImage = document.createElement("img");
    dogImage.src = dog.image;
    dogCard.append(dogImage);

    //Adding the description:
    const dogDescription = document.createElement("div");
    dogDescription.classList = "main__dog-section__desc";
    dogCard.append(dogDescription);

    //Adding heading to the description:
    const bioHeading = document.createElement("h3");
    bioHeading.textContent = "Bio";
    dogDescription.append(bioHeading);

    //Adding paragraph to the description:
    const bioDescr = document.createElement("p");
    bioDescr.textContent = dog.bio;
    dogDescription.append(bioDescr);

    //Adding 'is naughty?':
    const isNaughty = document.createElement("p");
    isNaughty.innerHTML = "<em>Is Naughty? </em>   Yes!";
    dogCard.append(isNaughty);

    //Adding button:
    const button = document.createElement("button");
    button.textContent = "Good dog!";
    dogCard.append(button);

    //Adding event listener to button:
    button.addEventListener("click", function () {
      button.textContent = "It works!";
    });
  });
}
}

console.log(dogContainer);

const addButton = document.querySelector(
  ".dogs-list__button",
  ".dogs-list__button--add"
);
//Adding a function to the add button:
addButton.addEventListener("click", function () {
  dogContainer.innerHTML = "";

  //Creating new dog card:
  const dogCard = document.createElement("section");
  dogCard.classList = "main__dog-section";
  dogContainer.append(dogCard);

  //Adding heading to dog card:
  const heading = document.createElement("h2");
  heading.textContent = "Add a new Dog";
  dogCard.append(heading);

  //Adding the form:
  const form = document.createElement("form");
  form.classList = "form";
  dogCard.append(form);

  //Adding details to the form:
  const nameLabel = document.createElement("label");
  nameLabel.setAttribute("for", "name");
  nameLabel.textContent = "Dog's Name: ";
  form.append(nameLabel);

  const nameInput = document.createElement("input");
  nameInput.setAttribute("type", "text");
  nameInput.setAttribute("id", "name");
  nameInput.setAttribute("name", "name");
  form.append(nameInput);

  const imageLabel = document.createElement("label");
  imageLabel.setAttribute("for", "image");
  imageLabel.textContent = "Dog's Picture: ";
  form.append(imageLabel);

  const imageInput = document.createElement("input");
  imageInput.setAttribute("type", "url");
  imageInput.setAttribute("id", "image");
  imageInput.setAttribute("name", "image");
  form.append(imageInput);

  const bioLabel = document.createElement("label");
  bioLabel.setAttribute("for", "bio");
  bioLabel.textContent = "Dog's Bio: ";
  form.append(bioLabel);

  const bioInput = document.createElement("textarea");
  bioInput.setAttribute("rows", "5");
  bioInput.setAttribute("id", "bio");
  bioInput.setAttribute("name", "bio");
  form.append(bioInput);

    const submit = document.createElement("input");
    submit.setAttribute("type", "submit");
    submit.setAttribute("id", "submit");
    submit.setAttribute("name", "submit");
    submit.setAttribute("value", "Let's add a dog!");
    submit.setAttribute("class", "form__button");
   form.append(submit);

   form.addEventListener("submit", function(event) {
    event.preventDefault();
    
    const newDogObject = {};
      newDogObject.name = nameInput.value
      newDogObject.image = imageInput.value
      newDogObject.bio = bioInput.value
    
    console.log(newDogObject);

     data.push(newDogObject);

     creatingCards(newDogObject);
     console.log(data);


   });
});

creatingCards();