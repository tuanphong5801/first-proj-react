import React from "react";
import UserInfo from "./UserInfo";
import DisplayInfo from "./DisplayInfo";

class MyComponent extends React.Component {
  state = {
    listUser: [
      { id: 1, name: "Nguyen Tuan Phong", age: "21" },
      { id: 2, name: "Nguyen Tuan Viet", age: "15" },
      { id: 3, name: "tuanphong58", age: "1" },
    ],
  };

  //JSX
  render() {
    //DRY: don't repeat yourself
    return (
      <div>
        <UserInfo />
        <br />
        <br />
        <DisplayInfo listUser={this.state.listUser} />
      </div>
    );
  }
}

export default MyComponent;
