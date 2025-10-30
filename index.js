var book ={
    title: "To kill a Mockingbird",
    author: "Harper Lee",
    page:324,
    read: function(){
        console.log ("Currently reading " + book.title + " by" + book.author + ".")
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

function Student(name,grade, subject){
    this.name = name
    this.grade = grade
    this.subject = subject
    this.inroduce(){
        console.log (`Hi, I am ${this.name}, studying ${subject}, in grade ${grade}`)
        this. finishesSchoolYear(){
            grade +=1 grade < 13
            if grade === 12 console.log(`Congratulations ${name} has graduated`) &
        }
    }    
} 
