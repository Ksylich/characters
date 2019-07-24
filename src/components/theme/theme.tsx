import React, { Component } from "react";
import { ChromePicker } from "react-color";
import { Radio, RadioGroup } from "react-radio-group";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import Gear from "../../assets/gear-24.png";
import {  changeBackground, changeTheme } from "../../redux/actions";
import { ChState } from "../../redux/store";
import Modal from "../modal";

import "./theme.css";

interface IProps {
  avatar: string;
  theme: string;
  background: string;
  text: any;
  changeBackgroundAction: typeof changeBackground;
  changeThemeAction: typeof changeTheme;
}

interface IState {
  imageBackground: string;
  contentBackground: string;
  isOpen: boolean;
}

class Theme extends Component<IProps, IState> {
  public state = {
    imageBackground: this.props.background,
    contentBackground: this.props.theme,
    isOpen: true,
  };

  public closeModal = () => {
    this.setState({
      isOpen: false,
    });
  }

  public handleChangeComplete = (color: any) => {
    this.setState({ imageBackground: color.hex });
  }

  public onContentBackChange = (color: string) => {
    this.setState({ contentBackground: color });
  }

  public onSave = () => {
    const { changeBackgroundAction, changeThemeAction } = this.props;
    const { imageBackground, contentBackground } = this.state;
    changeBackgroundAction(imageBackground);
    changeThemeAction(contentBackground);
  }

  public render() {
    const { avatar, text } = this.props;
    const { modalText } = text;
    const { imageBackground, contentBackground } = this.state;
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
        <Modal isOpen={this.state.isOpen} onGotIt={this.closeModal} text={modalText} />
        <div className="avatar-container" style={style.imageBack}>
          <img src={avatar} alt="" className="avatar" />
        </div>
        <div className="theme-content" style={style.contentBack}>
          <div className="text">Theme:</div> 
          <div className="theme-radio-croup">
            <RadioGroup
              className="theme-group"
              name="textColor"
              onChange={(val) => this.onContentBackChange(val)}
              selectedValue={contentBackground}
            >
              <div>
                <Radio value={"#FFF9F9"} id="onClick" />
                <label htmlFor="Day" className="radio">
                  Day
                </label>
              </div>

              <div>
                <Radio value={"#0C0C08"} id="onClick" />
                <label htmlFor="Night" className="radio">
                  Night
                </label>
              </div>
            </RadioGroup>
          </div>
          <div className="text" id="b-ground">
            Background:
          </div>
          <div className="color-box" id="onClick">
            <ChromePicker
              disableAlpha={true}
              color={imageBackground}
              onChangeComplete={this.handleChangeComplete}
            />
          </div>

          <Link className="lnk" to="/last-page">
          <div className="save-btn-box" id="onClick" onClick={this.onSave}>
            <div className="save">Save</div>
            <img src={Gear} alt="" className="btn-img" />
          </div>
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ theme, background }: ChState) => ({
 theme,
 background,
});

const mapDispatchToProps = {
  changeBackgroundAction: changeBackground,
  changeThemeAction: changeTheme,
};
export default connect(mapStateToProps, mapDispatchToProps)(Theme) ;
