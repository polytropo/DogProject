class Dog {
	constructor(name, breed, hobby, image, idNumber) {
		this.name = name;
		this.breed = breed;
		this.hobby = hobby;
		this.image = image;
		this.idNumber = idNumber;
		
	}

	createCard(){
		var main = document.getElementById('main');
		//create card function
		var cardDog = document.createElement('div');
		cardDog.innerHTML = `
		    <div class="card"  style="width:21rem">
            	<img class="card-img-top" src=${this.image} alt="Card image cap" style="width: 100%; height: 275px">
            	<div class="card-body">
	                <h4 class="card-title">${this.name}</h4>
	                <p class="card-text">${this.name} - ${this.breed}.</p>
	                <p class="card-text">Favorite hobby: ${this.hobby}</p>
	                <p class="card-text likes">I have <span id="likes_${this.idNumber}">0</span> likes!</p>
	                <a href="#" class="btn btn-primary btn-block like" id="${myNumber}">LIKE ME!</a>
            	</div>
        	</div>
        `;
	
		main.appendChild(cardDog);
		cardDog.className = 'myCards margin';
	}
}

// function to add dogs from array into table
function dogInTable() {
	const dogList = document.getElementById("dog-list");
	dogList.innerHTML = "";
	for(var i = 0; i < dogs.length; i++) {
		dogList.innerHTML += `<tr><td>${dogs[i].name}</td><td>${dogs[i].breed}</td><td class="number${i}">0</td><td><a href="#">X</a></td></tr>`;
	}
}

var myNumber = 0;
// dogs array
var dogs = [new Dog('Rusty', 'golden retriever', 'catch the ball', 'img/dog1.jpg', 0)
			// new Dog('Toro', 'mixed breed', 'goes crazy when set loose','img/dog2.jpg', 1),
			// new Dog('Spike', 'unknown', 'lazy', 'img/dog3.jpg', 2),
			// new Dog('Blackbeard', 'good question', 'destroying puff toys', 'img/dog4.jpg', 3)
			];
//create card for every dog
for(var i = 0; i < dogs.length; i++) {
	myNumber =+ i;
	dogs[i].createCard();
	console.log(dogs[i].name);
}

// Add predefined dogs into table
dogInTable();


// Set Counter of like to 0 for every dog in dogs array
var counter = [];
counter.length = dogs.length
	for (i = 0; i < counter.length; i++){
		counter[i] = 0;
	}

// Function to update likes on click
function likes() {
	document.getElementById('main').addEventListener('click', function(e){

		for(i = 0; i < dogs.length; i++) {
			if (e.target.id === `${i}`) {
				// console.log(dogs[i].name);
				counter[i] += 1; 
				// console.log(counter);
				document.getElementById(`likes_${dogs[i].idNumber}`).innerHTML = counter[i];
				// Set number of like in the table
				document.querySelector(`.number${dogs[i].idNumber}`).innerHTML = counter[i];
			}

		// console.log(e.target);

		e.preventDefault();
		}
	})
}
// likes on click
likes();

// Event Listener for adding a dog
document.getElementById('dog-form').addEventListener('submit', function(e){
	// Get form values
	const name = document.getElementById('name').value,
	breed = document.getElementById('breed').value,
	hobby = document.getElementById('hobby').value

	// Create new Dog

	const newDog = new Dog(name, breed, hobby, `img/dog${dogs.length+1}.jpg`, Number(`${dogs.length}`));


	// console.log(newDog);

	if(name === '' || breed === '' || hobby === '') {
		
		// Error alert
		alert("Fill in all the required forms!");
		} else {

		// Push newDog into dogs array
		counter.push(0);
		myNumber += 1;
		dogs.push(newDog);

		//Create card of newly added dog
		newDog.createCard();
	
		// Push 1 more counter into counter array
		alert(`${name} was added successfully!`);
		
		// Clear data from input fields
		document.getElementById('name').value = '';
		document.getElementById('breed').value = '';
		document.getElementById('hobby').value = '';
		
		// Add added dog also in table
		dogInTable();
		
		// Keep number of like on all dogs already in table after adding a dog
		for (var i = 0; i < dogs.length; i++) {
		document.querySelector(`.number${dogs[i].idNumber}`).innerHTML = counter[i];
		}
		
	}

	e.preventDefault();

});



