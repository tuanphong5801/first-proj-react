import React from "react";

class DisplayInfo extends React.Component {
  render() {
    //destructuring array/object
    const { listUser } = this.props; //object
    //const listUser = this.props.listUser;
    //props => viết tắt của properties
    return (
      <div>
        {listUser.map((user, index) => {
          return (
            <div key={user.id}>
              <div>My name is {user.name}</div>
              <div>I'm {user.age}</div>
              <hr />
            </div>
          );
        })}
        {/* <div>My name is {name}</div>
        <div>I'm {age} years old</div>
        <hr />
        <div>My name is {name}</div>
        <div>I'm {age} years old</div>
        <hr />
        <div>My name is {name}</div>
        <div>I'm {age} years old</div> */}
      </div>
    );
  }
}

export default DisplayInfo;
