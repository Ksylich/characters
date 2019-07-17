import React, { Component } from "react";
// import { connect } from "react-redux";
import { Radio, RadioGroup } from "react-radio-group";

import "./create-character.css";

import Arrow from "../../assets/arrow_forward_24px_outlined.png";
import Human from "../../assets/avatars/human.png";
import Modal from "../modal";

class CreateCharacter extends Component {
  public state = {
    selected: "Elf",
    isOpen: true,
  };

  public setNewValue = (value: string) => {
    this.setState(() => {
      return {
        selected: value,
      };
    });
  };

  public closeModal = () => {
    this.setState(() => {
      return {
        isOpen: false,
      };
    });
  }

  public render() {
    return (
      <div className="body">
        <Modal isOpen={this.state.isOpen} onGotIt={this.closeModal} />
        <div className="avatar-container">
          <img src={Human} alt="" className="avatar" />
        </div>
        <div className="text">Choose a race from the options:</div>
        <div className="radio-croup">
          <RadioGroup
            className="group"
            name="textColor"
            onChange={val => this.setNewValue(val)}
            selectedValue={this.state.selected}
          >
            <div>
              <Radio value="Human" id="blue" />
              <label htmlFor="human" className="radio">
                Human
              </label>
            </div>

            <div>
              <Radio value="Elf" id="green" />
              <label htmlFor="elf" className="radio">
                Elf
              </label>
            </div>

            <div>
              <Radio value="Dwarf" id="red" />
              <label htmlFor="dwarf" className="radio">
                Dwarf
              </label>
            </div>
          </RadioGroup>
        </div>
        <div className="next-btn-box">
          <div className="next">Next</div>
          <img src={Arrow} alt="" className="btn-img" />
        </div>
      </div>
    );
  }
}

export default CreateCharacter;
