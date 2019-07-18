import React, { Component } from "react";
import { Radio, RadioGroup } from "react-radio-group";
import { connect } from "react-redux";

import "./create-character.css";

import Arrow from "../../assets/arrow_forward_24px_outlined.png";
import { changeCharacterRace, changeOperationType } from "../../redux/actions";
import { ChState } from "../../redux/store";
import Modal from "../modal";
import ModalLabel from "../modal-label";

interface IProps {
  avatars: string[];
  text: any;
  operationType: string;
  changeRaceAction: typeof changeCharacterRace;
  changeOperationTypeAction: typeof changeOperationType;
}

interface IState {
  selected: number;
  isOpen: boolean;
  nextClickCount: number;
  isVisible: boolean;
}

class CreateCharacter extends Component<IProps, IState> {
  public state = {
    selected: 0,
    isOpen: true,
    nextClickCount: 0,
    isVisible: false,
  };

  public setNewValue = (value: number) => {
    this.setState({
      selected: value,
      nextClickCount: 0,
      isVisible: false,
    });
  }

  public closeModal = () => {
    this.setState({
      isOpen: false,
      isVisible: false,
      nextClickCount: 0,
    });
  }

  public onNextClick = () => {
    if (this.state.nextClickCount > 0) {
      const { operationType, changeRaceAction, text, changeOperationTypeAction } = this.props;
      const { selected } = this.state;
      const { radioText } = text;
      if (operationType === "race") {
        changeRaceAction(radioText[selected]);
        changeOperationTypeAction("class");
      }

      this.setState({
        isOpen: true,
        selected: 0,
      });
    }

    this.setState((state) => {
      return {
        nextClickCount: state.nextClickCount + 1,
        isVisible: true,
      };
    });

  }

  public render() {
    const { avatars, text } = this.props;
    const avatar = avatars[this.state.selected];
    const { modalText, instruction, radioText, choise } = text;
    return (
      <div className="body">
        <Modal isOpen={this.state.isOpen} onGotIt={this.closeModal} text={modalText} />
        <ModalLabel isOpen={this.state.isVisible} onClose={this.closeModal} text={choise[this.state.selected]} />
        <div className="avatar-container">
          <img src={avatar} alt="" className="avatar" />
        </div>
        <div className="text">{instruction}</div>
        <div className="radio-croup">
          <RadioGroup
            className="group"
            name="textColor"
            onChange={(val) => this.setNewValue(val)}
            selectedValue={this.state.selected}
          >
            <div>
              <Radio value={0} id="blue" />
              <label htmlFor="human" className="radio">
                {radioText[0]}
              </label>
            </div>

            <div>
              <Radio value={1} id="green" />
              <label htmlFor="elf" className="radio">
                {radioText[1]}
              </label>
            </div>

            <div>
              <Radio value={2} id="red" />
              <label htmlFor="dwarf" className="radio">
                {radioText[2]}
              </label>
            </div>
          </RadioGroup>
        </div>
        <div className="next-btn-box" onClick={this.onNextClick}>
          <div className="next">Next</div>
          <img src={Arrow} alt="" className="btn-img" />
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ operationType }: ChState) => ({
  operationType,
});

const mapDispatchToProps = {
  changeRaceAction: changeCharacterRace,
  changeOperationTypeAction: changeOperationType,
};
export default connect(mapStateToProps, mapDispatchToProps)(CreateCharacter);
