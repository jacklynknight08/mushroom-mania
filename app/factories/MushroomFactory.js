"use strict";

app.factory("MushroomFactory", function($q, $http){  //$q is angular's promise

	let getMushrooms = () => {
		let items = [];  //hold onto items when i get them
		return $q((resolve, reject) => {
			$http.get('https://mushroom-data.firebaseio.com/.json') //tell it where to go get it, can put in a url /// .get is like an ajax call
			.then((itemObject) => {
				let itemCollection = itemObject.data;
				let mushroomCollection = itemCollection.mushrooms;
				console.log("mushroomCollection", mushroomCollection);
				for (let item in mushroomCollection) {
					let currentMushroom = mushroomCollection[item];
					items.push(currentMushroom);
				}
				console.log("items array", items);
				resolve(items); //want to resolve the flavors inside the itemCollection that is the data from the itemObject
			})
			.catch((error) => { //different way of dealing with errors
				reject(error);
			});
		});
	};

	return {getMushrooms}; //need to return it so we can use it
});