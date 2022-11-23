import React from "react";
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
  return (
    <div className="display-info-container">
      {true && (
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
