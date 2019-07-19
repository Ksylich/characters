class Data {
  public Human = [[`"Original"`], [], []];
  public Elf = [[], [`"Original"`], []];
  public Dwarf = [["Classic"], [], ["LOL really?"]];
  public First = {
    modalText: {
      number: "The first",
      type: "Race",
      description: "Everyone is crazy about it now... ",
    },
    instruction: "Choose a race from the options:",
    radioText: ["Human", "Elf", "Dwarf"],
    choice: [
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
    choice: [[`"Original"`]],
  };
  public Third = {
    number: null,
    type: null,
    description: "Left a little just choose settings",
  };

  public getchoice = (avatar: string) => {
    switch (avatar) {
      case "Human":
        return this.Human;
      case "Elf":
        return this.Elf;
      case "Dwarf":
        return this.Dwarf;
      default: return [];
    }
  }

  public getWindowText = (operation: string, avatar: string) => {
    if (operation === "race") {
      return this.First;
    } else if (operation === "class") {
      const choice = this.getchoice(avatar);
      this.Second.choice = choice;
      return this.Second;
    }
    return this.Third;
  }
}

export default new Data();
