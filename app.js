import inquirer from "inquirer"
import { initQuestions, gameQuestions } from "./questions.js"
import { Cat, Dog, Hedgehog, Parrot, Mouse, Rabbit } from "./pet.js"

let ui = new inquirer.ui.BottomBar()

const petStatusBar = (myPet) => {
    return `
${myPet.icon} ${myPet.name} | 🥪 Hunger: ${myPet.hunger} | 💧 Thirst: ${myPet.thirst} | 🎉 Happiness: ${myPet.happiness} | 🛁 Hygene: ${myPet.hygene} | 🔋 Energy: ${myPet.energy}

`
}

const choiceOfPet = async () => {
    let myPet
    let chosenPet = await inquirer.prompt(initQuestions)

    switch(chosenPet.petType) {
        case "Cat":
            myPet = new Cat(chosenPet.name, "😼")
            break
        case "Dog":
            myPet = new Dog(chosenPet.name, "🐶")
            break
        case "Hedgehog":
            myPet = new Hedgehog(chosenPet.name, "🦔")
            break
        case "Parrot":
            myPet = new Parrot(chosenPet.name, "🦜")
            break
        case "Mouse":
            myPet = new Mouse(chosenPet.name, "🐭")
            break
        case "Rabbit":
            myPet = new Rabbit(chosenPet.name, "🐰")
            break
    }

    ui.log.write(
        petStatusBar(myPet)
    ) 

    return myPet
}

const gameLoop = async (myPet) => {
    try {
        if (myPet.hunger >= 100 || myPet.thirst >= 100 || myPet.happiness <= 0) {
            console.log(`${myPet.name} has run away!`)
            console.log(`
            ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
            ░░░▄▄▀▀▀▀▀▄░░░░░░░░░░░░░░░░░░░░░░░░░░░░
            ░░▄▀░░░░░░░▀▄░░░░░░░░░░░░░░░░░░░░░░░░░░
            ░▄▀░░░▄▄░░░░▀▀▀▀▀▀▀▄▄▀▀▀▀▀▀▀▀▀▀▀▀▄▄░░░░
            ░█░░░░██░░░░░░░░░░░░░░░░░░░░░░░░░░░▀▄░░
            ░█░░░░██▄████▄░██▄░░░░▄██░▄████▄░░░░▀▄░
            ░█░░░░██▀░░▀██▄░██▄░░██▀░██▀░▄██░░░░░█░
            ░█░░░░██░░░░███░░█████▀░░██▄█▀▀░░░░░░█░
            ░█░░░░███▄▄███▀░░░▀██▀░░░▀██▄▄▄██░░░░█░
            ░▀▄░░░░▀▀▀▀▀▀░░░░░██▀░░░░░░▀▀▀▀▀░░░░░█░
            ░░▀▄░░░░░░░░░░░░░██▀░░░▄▄░░░░░░░░░▄▄▀░░
            ░░░░▀▀▀▀▀▀▀▀▀▄░░░▀▀░░░▄▀░▀▀▀▀▀▀▀▀▀░░░░░
            ░░░░░░░░░░░░░▀▄░░░░░░▄▀░░░░░░░░░░░░░░░░
            ░░░░░░░░░░░░░░░▀▀▀▀▀▀░░░░░░░░░░░░░░░░░░
            ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
            `)
            return
        }
        myPet.time()
        let chosenAction = await inquirer.prompt(gameQuestions)

        switch(chosenAction.action) {
            case "feed":
                myPet.eat()
                break
            case "drink":
                myPet.drink()
                break
            case "clean":
                myPet.clean()
                break
            case "sleep":
                myPet.sleep()
                break
            case "play":
                myPet.play()
                break
        }

        ui.log.write(
            petStatusBar(myPet)
        ) 

        gameLoop(myPet)
    } catch (error) {
        console.log(error)
    }
}

const myPet = await choiceOfPet()
gameLoop(myPet)