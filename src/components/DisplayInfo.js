import React, { useEffect, useState } from "react";
import "./DisplayInfo.scss";
import logo from "./../logo.svg";

//stateless vs stateful
// class DisplayInfo extends React.Component {
//   render() {
//     console.log(">>>>>>> call me render");
//     //destructuring array/object
//     const { listUser } = this.props; //object
//     //const listUser = this.props.listUser;
//     //props => viết tắt của properties

//     //template + logic js
//     return (
//       <div className="display-info-container">
//         {true && (
//           <>
//             {listUser.map((user, index) => {
//               return (
//                 <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
//                   <>
//                     <div>My name is {user.name}</div>
//                     <div>I'm {user.age}</div>
//                   </>
//                   <button
//                     onClick={() => {
//                       this.props.handleDeleteUser(user.id);
//                     }}
//                   >
//                     Delete
//                   </button>
//                   <hr />
//                 </div>
//               );
//             })}
//           </>
//         )}
//       </div>
//     );
//   }
// }

const DisplayInfo = (props) => {
  const { listUser } = props; //object

  const [isShowHideListUser, setShowHideListUser] = useState(true);
  //Destructuring assignment
  // this.state = {
  //   isShowHideListUser: true,
  // }
  const handleShowHideListUser = () => {
    // this.setState({
    //   isShowHideListUser: true,
    // });
    setShowHideListUser(!isShowHideListUser);
  };

  console.log(`>>> call me render`);

  useEffect(() => {
    if (listUser.length === 0) {
      alert("Deleted all");
    }
    console.log(`>>> call me useEffect`);
  }, [listUser]);

  return (
    <div className="display-info-container">
      <div>
        <span
          onClick={() => {
            handleShowHideListUser();
          }}
        >
          {isShowHideListUser === true ? "Hide list users" : "Show list users"}
        </span>
      </div>
      {isShowHideListUser && (
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
                    props.handleDeleteUser(user.id);
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
};

export default DisplayInfo;
