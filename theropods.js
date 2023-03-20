// Create an array for holding all the objects
let theropods = [];

// Create a function for adding theropods to the array
function addTheropod(name, place, size, length, when, about, link) {
  theropods.push({
    name: name,
    place: place,
    size: size,
    length: length,
    when: when,
    about: about,
    link: link
  });
}

// Add theropods to the array
addTheropod(
  "Tyrannosaurus",
  "USA",
  "6-9 tons",
  "12-13 meters",
  "1877",
  "One of the largest carnivorous dinosaurs ever found.",
  "https://en.wikipedia.org/wiki/Tyrannosaurus"
);

addTheropod(
  "Velociraptor",
  "Mongolia",
  "15-20 kg",
  "2 meters",
  "1924",
  "Made famous by the Jurassic Park movie franchise.",
  "https://en.wikipedia.org/wiki/Velociraptor"
);

addTheropod(
  "Spinosaurus",
  "Morocco",
  "4-14 tons",
  "12-18 meters",
  "1912",
  "Possibly the largest theropod dinosaur known to have existed.",
  "https://en.wikipedia.org/wiki/Spinosaurus"
);

// Convert the array to a JSON file
let theropodsJSON = JSON.stringify(theropods);


// The resulting `theropodsJSON` file will list the three late cretaceous theropods with their respective properties as requested.