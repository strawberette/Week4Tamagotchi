class Pet {
  constructor (name, icon) {
      this.name = name
      this.icon = icon
  }

  hunger = 0
  thirst = 0
  happiness = 0
  hygene = 0
  energy = 0

  eat() {
      this.hunger -= 10
  }

  drink() {
      this.thirst -= 10
  }

  play() {
      if (this.energy <= 50) {
          return
      }


      this.happiness += 30
      this.hygene -= 20
      this.thirst += 5
      this.hunger += 3
      this.energy -= 5
  }

  clean() {
    this.hygene += 10
    this.happiness -=5
  }

  sleep() {
      this.energy += 10
      this.happiness++
  }

  time() {
    this.hunger += 5
    this.thirst += 5
    this.happiness -= 5
    this.energy -= 5
    this.hygene -= 5

    if (this.hygene <= 50) {
        this.happiness -= 5
    }

    if (this.energy <= 50) {
        this.happiness -= 5
        this.hunger += 3
    }
  }
}

export class Cat extends Pet {
  constructor(name, icon) {
      console.log(`
         /\\_/\\  (
        ( ^.^ ) _)
          \\"/  (
        ( | | )
       (__d b__)
      `)
      console.log("MEAOW!")
      super(name, icon)
  }

  happiness = 80
  thirst = 0
  hunger = 0
  hygene = 100
  energy = 80
}

export class Dog extends Pet {
  constructor(name, icon) {
      console.log(`
                  __
      (\\,--------'()'--o
       (_    ___    /~"
        (_)_)  (_)_)
      `)
      console.log("WOOF WOOF!")
      super(name, icon)
  } 

  happiness = 100
  thirst = 50
  hunger = 80
  hygene = 40
  energy = 100
}

export class Parrot extends Pet {
  constructor(name, icon) {
      console.log(`
           \\\\
           (o>
           //\\
     ______V_/_____
           ||
           ||
      `)
      console.log("Chiiirp Ciao!")
      super(name, icon)
  }

  happiness = 70
  thirst = 60
  hunger = 30
  hygene = 100
  energy = 80
}

export class Mouse extends Pet {
  constructor(name, icon) {
      console.log(`
       __QQ
      (_)_">
     _)
      `)
      console.log("Squeeeak squeak!")
      super(name, icon)
  }

  happiness = 50
  thirst = 20
  hunger = 40
  hygene = 20
  energy = 50
}

export class Rabbit extends Pet{
  constructor(name, icon){
      console.log(`
      //
      ('>
      /rr
     *\\))_
      `)
      console.log("HOP HOP HURRAY!")
      super(name, icon)
  }

  happiness = 90
  thirst = 35
  hunger = 40
  hygene = 60
  energy = 30

}

export class Hedgehog extends Pet{
  constructor(name, icon){
      console.log(`
      .::::::::..          
      :::::::::::::        
     :::::::::::' .\\      
     '::::::::::_,__o    
      `)
      console.log("SNIFF STING!")
      super(name, icon)
  }

  happiness = 30
  thirst = 10
  hunger = 10
  hygene = 40
  energy = 30
}


  
