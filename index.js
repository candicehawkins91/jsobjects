var book ={
    title: "To kill a Mockingbird",
    author: "Harper Lee",
    page:324
    read: function(){
        console.log ("Currently reading " + book.title + " by" book.author + ".")
    }
}


function animal(species, name, sound){
this.species = "species"
this.name = "name"
this.sound = "sound"

    makeSound function(){
        console.log(this.name + " says " + this.sound)
    }
}
const pet = animal1("Dog","Buddy", "Wolf")
const wildLife = animal2("Lion", "Leo", "Roar")

pet.makeSound()
wildLife.makeSound()
