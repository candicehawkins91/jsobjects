var book ={
    title: "To kill a Mockingbird",
    author: "Harper Lee",
    page:324
    read: function(){
        console.log ("Currently reading " + book.title + " by" book.author + ".")
    }
}


function Animal(species, name, sound){
this.species = species
this.name = name
this.sound = sound
this.makeSound = function() {
    console.log(this.name + "says" + this.sound + ".")
    }
}
const animal1 = new Animal("dog", "Buddy", "Woof")
const animal2 = new Animal("lion", "Leo", "roar")

animal1.makeSound()
animal2.makeSound()
