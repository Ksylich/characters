import React, { Component } from "react";
import { ChromePicker } from "react-color";
import { Radio, RadioGroup } from "react-radio-group";
import { connect } from "react-redux";

import Gear from "../../assets/gear-24.png";
import {  changeBackground, changeTheme } from "../../redux/actions";
import { ChState } from "../../redux/store";

import "./theme.css";

interface IProps {
  avatar: string;
  theme: string;
  background: string;
  changeBackgroundAction: typeof changeBackground;
  changeThemeAction: typeof changeTheme;
}

interface IState {
  imageBackground: string;
  contentBackground: string;
}

class Theme extends Component<IProps, IState> {
  public state = {
    imageBackground: this.props.background,
    contentBackground: this.props.theme,
  };

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
    const { avatar } = this.props;
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
                <Radio value={"#FFF9F9"} id="Day" />
                <label htmlFor="Day" className="radio">
                  Day
                </label>
              </div>

              <div>
                <Radio value={"#0C0C08"} id="Night" />
                <label htmlFor="Night" className="radio">
                  Night
                </label>
              </div>
            </RadioGroup>
          </div>
          <div className="text" id="b-ground">
            Background:
          </div>
          <div className="color-box">
            <ChromePicker
              disableAlpha={true}
              color={imageBackground}
              onChangeComplete={this.handleChangeComplete}
            />
          </div>

          <div className="save-btn-box" onClick={this.onSave}>
            <div className="save">Save</div>
            <img src={Gear} alt="" className="btn-img" />
          </div>
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
