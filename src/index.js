console.log(data);

// WRITE YOUR CODE BELOW!

const state = {
  dogs: data,
  selectedDog: 0,
};
console.log(state);

function addButton() {
  const dogContainer = document.querySelector(".main");
  const addButton = document.querySelector(
    ".dogs-list__button",
    ".dogs-list__button--add"
  );

  createDogList();

  addButton.addEventListener("click", () => {
    dogContainer.innerHTML = " ";
    const formCard = document.createElement("section");
    formCard.classList = "main__dog-section";
    dogContainer.append(formCard);
    const formHeading = document.createElement("h2");
    formHeading.textContent = "Add a new Dog";
    formCard.append(formHeading);
    createForm();
    formCard.appendChild(createForm());
  });
}
function createDogList() {
  const dogContainer = document.querySelector(".main");
  const dogsList = document.querySelector(".dogs-list");

  for (let i = 0; i < state.dogs.length; i++) {
    const li = document.createElement("li");
    li.className = "dogs-list__button";
    li.innerText = state.dogs[i].name;
    dogsList.append(li);

    li.addEventListener("click", () => {
      dogContainer.innerHTML = " ";
      selectedDog = state.dogs[i];
      console.log(selectedDog);
      createDogCard(selectedDog);

      dogContainer.appendChild(createDogCard(selectedDog));
    });
  }
}
function createDogCard(selectedDog) {
  //Creating new dog card:
  const dogCard = document.createElement("section");
  dogCard.classList = "main__dog-section";
  createDogHeading(selectedDog);
  createDogImage(selectedDog);
  createDogDescription(selectedDog);
  createIsNaughty();
  createGoodDogButton();
  dogCard.appendChild(createDogHeading(selectedDog));
  dogCard.appendChild(createDogImage(selectedDog));
  dogCard.appendChild(createDogDescription(selectedDog));
  dogCard.appendChild(createIsNaughty());
  dogCard.appendChild(createGoodDogButton());
  return dogCard;
}

function createDogHeading(selectedDog) {
  const heading = document.createElement("h2");
  heading.textContent = selectedDog.name;
  return heading;
}

function createDogImage(selectedDog) {
  const dogImage = document.createElement("img");
  dogImage.src = selectedDog.image;
  return dogImage;
}

function createDogDescription(selectedDog) {
  const dogDescription = document.createElement("div");
  dogDescription.classList = "main__dog-section__desc";

  //Adding heading to the description:
  const bioHeading = document.createElement("h3");
  bioHeading.textContent = "Bio";
  dogDescription.append(bioHeading);

  //Adding paragraph to the description:
  const bioDescr = document.createElement("p");
  bioDescr.textContent = selectedDog.bio;
  dogDescription.append(bioDescr);

  return dogDescription;
}

function createIsNaughty() {
  const isNaughty = document.createElement("p");
  isNaughty.innerHTML = "<em>Is Naughty? </em>   Yes!";
  return isNaughty;
}

function createGoodDogButton() {
  //Adding button:
  const button = document.createElement("button");
  button.textContent = "Good dog!";
  return button;
}

function createForm() {
  //Adding the form:
  const form = document.createElement("form");
  form.classList = "form";

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

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const newDogObject = {};
    newDogObject.name = nameInput.value;
    newDogObject.image = imageInput.value;
    newDogObject.bio = bioInput.value;

    console.log(newDogObject);

    state.dogs.unshift(newDogObject);
    console.log(state.dogs);

    createDogList(state.dogs);
  });
  return form;
}

addButton();
