var ClozeCard = function (text, cloze) {
    this.text = text;
    this.cloze = cloze;  

    this.partial = text.replace(cloze, "....");
    this.fullText = this.text + this.cloze; 
};

var tallestMountainCloze = new ClozeCard ("Mount Everest is the tallest mountain in the world.", "Mount Everest"); 

//"Mount Everest"
console.log(tallestMountainCloze.cloze); 

//"..."is the tallest mountain in the world.
console.log(tallestMountainCloze.partial); 

//Mount Everest is the tallest mountain in the world.
console.log(tallestMountainCloze.fullText); 


var lowestPointCloze = new ClozeCard ("Dead Sea is the lowest point on Earth.", "Dead Sea"); 

//"Dead Sea"
console.log(lowestPointCloze.cloze);  

//"..."is the lowest point on Earth. 
console.log(lowestPointCloze.partial); 

//Dead Sea is the lowest point on Earth.
console.log(lowestPointCloze.fullText); 



var largestMammalCloze = new ClozeCard ("Blue whale is the largest mammal in the world.", "blue whale");
	
//"blue whale"
console.log(largestMammalCloze.cloze);  

//"..." is the largest mammal in the world. 
console.log(largestMammalCloze.partial);  

//Blue whale is the largest mammal in the world. 
console.log(largestMammalCloze.fullText); 


var brokenCloze = new ClozeCard("This doesn't work", "oops");

module.exports = ClozeCard; 
