

var harryPotterTitles = ["and the Sorcerer's Stone", "and the Chamber of Secrets", "and the Prisoner of Azkaban", "and the Goblet of Fire", "and the Order of the Phoenix", "and the Half-Blood Prince", "and the Deathly Hallows"];
for(i in harryPotterTitles){
    console.log("Harry Potter " + harryPotterTitles[i]);
}


var grades = [92, 91, 75, 66, 52, 90, 83, 85, 64, 90, 72, 88, 77, 98, 100, 73, 92]
var A = 0;
var B = 0;
var C = 0;
var D = 0;
var F = 0;
var common = [];
for (i in grades){
    if(grades[i] <= 69){
        console.log("You got an F")
        F += 1
        
    }
    if((grades[i] >= 70) & (grades[i] <= 76)){
        console.log("You got a D");
        D += 1
    }
    if((grades[i] >= 77) & (grades[i] < 84)){
        console.log("You got a C");
        C += 1
    }
    if((grades[i] >= 84) & (grades[i] <= 92)){
        console.log("You got a B");
        B += 1
    }
    if((grades[i] >= 93) & (grades[i] <= 100)){
        console.log("You got a A");
        A += 1
    }
}
common.push(A,B,C,D,F)
console.log(A);
console.log(B);
console.log(common)
var sentenceArray = ["the", "cow", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"];
const emptyArray = [];
for(var i = 0; i < sentenceArray.length; i++){
    num = i + 1
    sum = num % 4
    
    if(sum === 0){
        emptyArray.push("MOOOOOO")
    }
      emptyArray.push(sentenceArray[i])
    
}
console.log(sentenceArray)
console.log(emptyArray.join(' '))


const beatles = {
    albums: ["Abbey Road", "Sgt Peppers Lonely Heart's Club Band", "Revolver", "Magical Mystery Tour"],
    history: {
        formed: 1960,
        disbanded: 1970
    },
    members: [
        {
            name: "George Harrison",
            birth: 1943,
            death: 2001
        },
        {
            name: "Paul McCartney",
            birth: 1942,
            death: null
        },
        {
            name: "John Lennon",
            birth: 1940,
            death: 1980
        },
        {
            name: "Ringo Starr",
            birth: 1940,
            death: null
        }
    ]
}

console.log(beatles.members[0].name + '  was in the Beatles from ' + beatles.history.formed + ' to ' + beatles.history.disbanded + '. He was born in ' + beatles.members[0].birth + '. He contributed heavily to the ' + beatles.albums[0] + ' Album.')