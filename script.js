const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

//   Modal open function
const openModal = () => {
	console.log("Modal is Open");
	modal.classList.add("active");
	overlay.classList.add("overlayactive");
};

// Modal close function
const closeModal = () => {
	modal.classList.remove("active");
	overlay.classList.remove("overlayactive");
};


// Learn Pointer events
// why "pointer-events:initial" was used in overlay div element in "share modal project"?
// -> Makes the property use it default value