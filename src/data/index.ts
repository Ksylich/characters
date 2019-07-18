class Data {
  public Human = {
    warrior: "Original",
  };
  public Elf = {};
  public Dwarf = {
    warrior: "Classic",
  };
  public First = {
    modalText: {
      number: "The first",
      type: "Race",
      description: "Everyone is crazy about it now... ",
    },
    instruction: "Choose a race from the options:",
    radioText: ["Human", "Elf", "Dwarf"],
    choise: [
      [`Seriously?`, `Human?`, `You are human in real life... `],
      [`Elf?`, `Are you gay?`],
      ["Good choice."],
    ],
  };
  public Second = {
    modalText: {
      number: "The second",
      type: "Class",
      description: "Second but not least",
    },
    instruction: "Choose a class from the options:",
    radioText: ["Warrior", "Dude with bow", "Mage"],
    choise: [
      [`Seriously?`, `Human?`, `You are human in real life... `],
      [`Elf?`, `Are you gay?`],
      ["Good choice."],
    ],
  };
  public Third = {
    number: null,
    type: null,
    description: "Left a little just choose settings",
  };

  public getWindowText = (operation: string) => {
    if (operation === "race") {
      return this.First;
    } else if (operation === "class") {
      return this.Second;
    }
    return this.Third;
  }
}

export default new Data();
