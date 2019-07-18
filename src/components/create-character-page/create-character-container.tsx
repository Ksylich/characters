import React, { Component } from "react";
import { connect } from "react-redux";

import Dwarf_Mag from "../../assets/avatars/dwarf-mag.png";
import Dwarf_Warrior from "../../assets/avatars/dwarf-warrior.png";
import Dwarf_With_Bow from "../../assets/avatars/dwarf-with-bow.png";
import Dwarf from "../../assets/avatars/dwarf.png";
import Elf_Mag from "../../assets/avatars/elf-mag.png";
import Elf_Warrior from "../../assets/avatars/elf-warrior.png";
import Elf_With_Bow from "../../assets/avatars/elf-with-bow.png";
import Elf from "../../assets/avatars/elf.png";
import Human_Mag from "../../assets/avatars/human-mag.png";
import Human_Warrior from "../../assets/avatars/human-warrior.png";
import Human_With_Bow from "../../assets/avatars/human-with-bow.png";
import Human from "../../assets/avatars/human.png";

import data from "../../data";
import { ChState } from "../../redux/store";
import { ICharacter } from "../../redux/types";
import CreateCharacter from "./create-character";

interface IProps {
    operationType: string;
    character: ICharacter;
}

class CreateCharacterContainer extends Component<IProps> {
    public render() {

        const { operationType, character } = this.props;
        let avatars = [Human, Elf, Dwarf];
        let windowText;

        if (operationType === "class") {
            switch (character.race) {
                case "Human":
                avatars = [Human_Warrior, Human_With_Bow, Human_Mag];
                break;
                case "Elf":
                avatars = [Elf_Warrior, Elf_With_Bow, Elf_Mag];
                break;
                case "Dwarf":
                avatars = [Dwarf_Warrior, Dwarf_With_Bow, Dwarf_Mag];
                break;
            }
        }
        windowText = data.getWindowText(operationType);
        return <CreateCharacter avatars={avatars} text={windowText} />;
    }
}

const mapStateToProps = ({ character, operationType }: ChState) => ({
    character,
    operationType,
});

export default connect(mapStateToProps)(CreateCharacterContainer);
