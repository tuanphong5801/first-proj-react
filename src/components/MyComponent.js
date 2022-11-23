import React from "react";
import AddUserInfo from "./AddUserInfo";
import DisplayInfo from "./DisplayInfo";

class MyComponent extends React.Component {
  state = {
    listUser: [
      { id: 1, name: "Nguyen Tuan Phong", age: "21" },
      { id: 2, name: "Nguyen Tuan Viet", age: "15" },
      { id: 3, name: "tuanphong58", age: "1" },
    ],
  };

  handleAddNewUser = (userObj) => {
    this.setState({
      listUser: [userObj, ...this.state.listUser],
    });
  };

  handleDeleteUser = (userId) => {
    let listUsersClone = [...this.state.listUser];
    listUsersClone = listUsersClone.filter((item) => item.id !== userId);
    this.setState({
      listUser: listUsersClone,
    });
  };

  //JSX
  render() {
    //DRY: don't repeat yourself
    return (
      <>
        <div className="a">
          <AddUserInfo handleAddNewUser={this.handleAddNewUser} />
          <br />
          <br />
          <DisplayInfo
            listUser={this.state.listUser}
            handleDeleteUser={this.handleDeleteUser}
          />
        </div>
        <div className="b"></div>
      </>
    );
  }
}

export default MyComponent;
