var fs = require('fs');



fs.readFile('food.txt','utf8', function(error,data){
	if(error){
		console.log(error);
		return;
	}

	console.log('FOOD');
	console.log(data);
});



fs.readFile('drinks.txt', 'utf8', function(error,data){
	if(error){
		console.log(error);
		return;
	}
	
	console.log('DRINKS');
	console.log(data);
})	