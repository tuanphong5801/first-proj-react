import React from "react";
import "./DisplayInfo.scss";
import logo from "./../logo.svg";

class DisplayInfo extends React.Component {
  constructor(props) {
    console.log(">>>>> call me constructor: 1");
    super(props);
    //babel compiler
    this.state = {
      isShowListUser: true,
    };
  }

  componentDidMount() {
    console.log(">>>>> call me component did mount");
    setTimeout(() => {
      document.title = "tuan phong";
    }, 3000);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(">>>>> call me component did update", this.props, prevProps);
    if (this.props.listUser !== prevProps.listUser) {
      if (this.props.listUser.length === 5) {
        alert("You got 5 members!");
      }
    }
  }

  handleShowHide = () => {
    this.setState({
      isShowListUser: !this.state.isShowListUser,
    });
  };
  render() {
    console.log(">>>>>>> call me render");
    //destructuring array/object
    const { listUser } = this.props; //object
    //const listUser = this.props.listUser;
    //props => viết tắt của properties

    //template + logic js
    return (
      <div className="display-info-container">
        {/* <img src={logo} /> */}
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
                  <>
                    <div>My name is {user.name}</div>
                    <div>I'm {user.age}</div>
                  </>
                  <button
                    onClick={() => {
                      this.props.handleDeleteUser(user.id);
                    }}
                  >
                    Delete
                  </button>
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
