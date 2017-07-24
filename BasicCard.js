 function BasicCard(front, back) {
	this.front = front; 
	this.back = back; 
} 

var tallestMountain = new BasicCard ("What is the tallest mountain in the world?", "Mount Everest"); 

//"What is the tallest mountain in the world?"
console.log(tallestMountain.front); 
//Mount Everest
console.log(tallestMountain.back);

var lowestPoint = new BasicCard("What is the lowest point on Earth?", "Dead Sea"); 

//"What is the lowest point on Earth?" 
console.log(lowestPoint.front); 
//"Dead Sea"
console.log(lowestPoint.back); 

var largestMammal = new BasicCard ("What is the largest mammal in the world", "blue whale");
	
//"What is the largest mammal in the world?" 
console.log(largestMammal.front); 

//blue whale
console.log(largestMammal.back); 


module.exports = BasicCard; 