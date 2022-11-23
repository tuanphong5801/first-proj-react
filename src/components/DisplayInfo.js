import React from "react";
import "./DisplayInfo.scss";
import logo from "./../logo.svg";

class DisplayInfo extends React.Component {
  state = {
    isShowListUser: true,
  };

  handleShowHide = () => {
    this.setState({
      isShowListUser: !this.state.isShowListUser,
    });
  };
  render() {
    //destructuring array/object
    const { listUser } = this.props; //object
    //const listUser = this.props.listUser;
    //props => viết tắt của properties
    return (
      <div className="display-info-container">
        <img src={logo} />
        <div>
          <span
            onClick={() => {
              this.handleShowHide();
            }}
          >
            {this.state.isShowListUser === true
              ? "Hide list user"
              : "Show list user"}
          </span>
        </div>
        {this.state.isShowListUser && (
          <>
            {listUser.map((user, index) => {
              return (
                <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                  <div>My name is {user.name}</div>
                  <div>I'm {user.age}</div>
                  <hr />
                </div>
              );
            })}
          </>
        )}
      </div>
    );
  }
}
export default DisplayInfo;
