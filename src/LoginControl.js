// import React from 'react';
//  import ReactDOM from 'react-dom';

// function UserGreeting(props) {
//     return <h1>Welcome back!</h1>;
//   }

//   function GuestGreeting(props) {
//     return <h1>Please sign up.</h1>;
//   }

//   function Greeting(props) {
//     const isLoggedIn = props.isLoggedIn;
//     if (isLoggedIn) {
//       return <UserGreeting />;
//     }
//     return <GuestGreeting />;
//   }

//   ReactDOM.render(

//     <Greeting isLoggedIn={false} />,
//     document.getElementById('root')
//   );

//   function LoginButton(props) {
//     return (
//       <button onClick={props.onClick}>
//         Login
//       </button>
//     );
//   }

//   function LogoutButton(props) {
//     return (
//       <button onClick={props.onClick}>
//         Logout
//       </button>
//     );
//   }

//   function LoginControl(props) {
//       const handleLoginClick = () => {
//           console.log("Logged in");
//       }

//       const handleLogoutClick = () => {
//           console.log("Logged out");
//       }

//       const isLoggedIn = props.isLoggedIn;
//       let button;
//       if (isLoggedIn) {
//         button = <LogoutButton onClick={handleLogoutClick} />;
//       } else {
//         button = <LoginButton onClick={handleLoginClick} />;
//       }

//       return (
//         <div>
//           <Greeting isLoggedIn={isLoggedIn} />
//           {button}
//         </div>
//       );
//   }

//   ReactDOM.render(
//     <LoginControl />,
//     document.getElementById('root')
//   );

//   export default LoginControl;


//insted of the function component we are using the class component
import React from 'react';

function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}
function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}

class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoggedIn: false };//we are setting islogged in false
  }

  handleLoginClick = () => {
    this.setState({ isLoggedIn: true });//to change the state value,we can do this using setState function,
    //we pass the keys we want to update.when we chage the state react component know it has to re-render
    //we can add new property also ex-this.setState({ isLoggedIn: true,name:"pradeep" });,to remove state set to null
  }

  handleLogoutClick = () => {
    this.setState({ isLoggedIn: false });
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;//previosly we are takeing is loggged in from props now we are taking from state
    let button;
    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    );
  }
}

export default LoginControl;