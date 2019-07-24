import React, { Component } from "react";
import { Radio, RadioGroup } from "react-radio-group";
import { connect } from "react-redux";

import "./create-character.css";

import Back from "../../assets/arrow_back_24px.png";
import Arrow from "../../assets/arrow_forward_24px_outlined.png";
import {
  changeCharacterAvatar,
  changeCharacterClass,
  changeCharacterRace,
  changeOperationType,
} from "../../redux/actions";
import { ChState } from "../../redux/store";
import Modal from "../modal";
import ModalLabel from "../modal-label";

interface IProps {
  avatars: string[];
  text: any;
  operationType: string;
  changeRaceAction: typeof changeCharacterRace;
  changeOperationTypeAction: typeof changeOperationType;
  changeCharacterClassAction: typeof changeCharacterClass;
  showBack: boolean;
  changeAvatarAction: typeof changeCharacterAvatar;
  theme: string;
  background: string;
}

interface IState {
  selected: number;
  isOpen: boolean;
  nextClick: boolean;
  isVisible: boolean;
  imageBackground: string;
  contentBackground: string;
}

class CreateCharacter extends Component<IProps, IState> {
  public state = {
    selected: 0,
    isOpen: true,
    nextClick: false,
    isVisible: false,
    imageBackground: this.props.background,
    contentBackground: this.props.theme,
  };

  public setNewValue = (value: number) => {
    this.setState({
      selected: value,
      nextClick: false,
      isVisible: false,
    });
  }

  public closeModal = () => {
    this.setState({
      isOpen: false,
      isVisible: false,
      nextClick: false,
    });
  }

  public onBackClick = () => {
    const { changeOperationTypeAction } = this.props;
    changeOperationTypeAction("race");
  }

  public onNextClick = () => {
    if (this.state.nextClick) {
      const {
        operationType,
        changeRaceAction,
        text,
        changeOperationTypeAction,
        changeCharacterClassAction,
        changeAvatarAction,
        avatars,
      } = this.props;
      const { selected } = this.state;
      const { radioText } = text;
      if (operationType === "race") {
        changeRaceAction(radioText[selected]);
        changeOperationTypeAction("class");
      } else {
        changeCharacterClassAction(radioText[selected]);
        changeAvatarAction(avatars[selected]);
        changeOperationTypeAction("theme");
      }

      this.setState({
        isOpen: true,
        selected: 0,
      });
    }

    this.setState({
      nextClick: true,
      isVisible: true,
    });
  }

  public render() {
    const { avatars, text, showBack } = this.props;
    const {
      isVisible,
      isOpen,
      selected,
      imageBackground,
      contentBackground,
    } = this.state;
    const avatar = avatars[selected];
    const { modalText, instruction, radioText, choice } = text;
    const style = {
      imageBack: {
        backgroundColor: imageBackground,
      },
      contentBack: {
        backgroundColor: contentBackground,
      },
    };
    return (
      <div className="body">
        <Modal isOpen={isOpen} onGotIt={this.closeModal} text={modalText} />
        <ModalLabel
          isOpen={isVisible}
          onClose={this.closeModal}
          text={choice[selected]}
        />
        <div className="avatar-container" style={style.imageBack}>
          <img src={avatar} alt="" className="avatar"/>
        </div>
        <div className="create-character-content" style={style.contentBack} >
          <div className="text">{instruction}</div>
          <div className="radio-croup">
            <RadioGroup
              className="group"
              name="textColor"
              onChange={(val) => this.setNewValue(val)}
              selectedValue={selected}
            >
              <div>
                <Radio value={0} id="radio" />
                <label htmlFor="human" className="radio">
                  {radioText[0]}
                </label>
              </div>

              <div>
                <Radio value={1} id="radio" />
                <label htmlFor="elf" className="radio">
                  {radioText[1]}
                </label>
              </div>

              <div>
                <Radio value={2} id="radio" />
                <label htmlFor="dwarf" className="radio">
                  {radioText[2]}
                </label>
              </div>
            </RadioGroup>
          </div>
          <div className="next-btn-box" id="onClick" onClick={this.onNextClick}>
            <div className="next" >Next</div>
            <img src={Arrow} alt="" className="btn-img" />
          </div>

          {showBack && (
            <div className="back-btn-box" id="back"  onClick={this.onBackClick}>
              <img src={Back} alt="" className="btn-img-back" />
              <div className="back">Back</div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ operationType, theme, background }: ChState) => ({
  operationType,
  theme,
  background,
});

const mapDispatchToProps = {
  changeRaceAction: changeCharacterRace,
  changeOperationTypeAction: changeOperationType,
  changeCharacterClassAction: changeCharacterClass,
  changeAvatarAction: changeCharacterAvatar,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CreateCharacter);
