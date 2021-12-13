export let initQuestions = [
    {
      type: "list",
      name: "petType",
      message: "What type of pet do you want to adopt?",
      choices: ["Cat", "Dog", "Parrot", "Mouse", "Rabbit", "Hedgehog"],
    },
    {
      type: "input",
      name: "name",
      message: "Please choose a name for your pet: ",
    },
  ]

  export let gameQuestions = [
    {
      type: "list",
      name: "action",
      message: "What would you like to do?",
      choices: ["feed","drink","clean", "sleep", "play"]
    }
  ]