
import React, { useState } from 'react';
 import ReactDOM from 'react-dom';
import LoginControl from './LoginControl';


// ReactDOM.render(
//  <h1>Hello, World!</h1>,
//  document.getElementById('root')
// );

// const name="pradeep"
// const ele=<h1>hello {name}</h1>
// ReactDOM.render(ele,document.getElementById("root"));




// function formatName(user){
//   return user.firstname+" "+user.lastname;
// }
// const user={
//   firstname:"pradeep",
//   lastname:"ninganuri"
// };
// const element=<h1>hello,{formatName(user)}
// </h1>
// ReactDOM.render(element,document.getElementById("root"));


// function formatName(user){
//     return user.firstname+" "+user.lastname;
// }
// function Greeting(user){
//     if(user){
//         return <h1>hello,{formatName(user)}</h1>
//     }
// return <h1>hello stranger</h1>
// }
// const user={
//     firstname:"pradeep",
//     lastname:"ninganuri"
// };
// const ele=<div>{Greeting(user)}
// <h3>mysore</h3>
// </div>
// ReactDOM.render(ele,document.getElementById("root"));

// function Button(props){
//     const handleClick=(event,id)=>{
//         console.log(event.target,id)
//     }
//     return <button onClick={(event)=>handleClick(event,props.id)}>{props.name}</button>
// }
// const button=<div>
//     <Button name="button 1" id="button-1"/>
//     <Button name="button 2" id="button-2"/>
// </div>
// ReactDOM.render(button,document.getElementById("root"));


// const numbers=[1,2,3,4,5];
// const listItems=numbers.map((number)=><li>{number}</li>);
// ReactDOM.render(
//   <ul>{listItems}</ul>,document.getElementById("root")
// );



// const links=[
//     {title:"google",link:"https://google.com"},
//     {title:"twitter",link:"https://twitter.com"}
// ];
// const listItems=links.map((element)=>
// <li>
//     <a href={element.link}>{element.title}</a>
// </li>);
// ReactDOM.render(<ul>{listItems}</ul>,document.getElementById("root"));



// const links=[
//   {title:"google",link:"https://google.com"},
//   {title:"twiter",link:"https://twitter.com"},
//   {title:"facebook",link:"https://facebook.com"}
// ];
// function Item(props){
//     return(<div>
//         <a href={props.link}>{props.title}</a>
//     </div>)
// }
// const element=(<div>{links.map((element)=>(
//     <Item key={element.title} link={element.link} title={element.title}/>
// ))}
// </div>)

// ReactDOM.render(element,document.getElementById("root"))



// class Welcome extends React.Component{
//     constructor(props){
//         super(props);
//         this.state={name:"bill"}
//     }
//     render(){
//         return <h1>hello,{this.state.name}</h1>
//     }
// }
// const element=(
//     <div>
//         <Welcome name="bill"/>
//     </div>
// );
// ReactDOM.render(element,document.getElementById("root"));




// function UserGreeting(props){
//     return <h1>Welcome Back</h1>
// }
// function GuestGreeting(props){
//     return <h1>please sign up</h1>
// }
//  function Greeting(props){
//     const isLoggedin=props.isLoggedin;
//      if(isLoggedin){
//         return <UserGreeting/>;
//     }
//     else{
//         return <GuestGreeting/>;
//     }
// }

// ReactDOM.render(<Greeting isLoggedin={false}/>,document.getElementById("root"));


//not work
// function LoginButton(props) {
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
//     <LoginControl  />,
//     document.getElementById('root')
//   );





// function Mailbox(props){
//     const unreadMessages=props.unreadMessages;
//     return(
//         <div>
//             <h1>hello</h1>
//             {unreadMessages.length>0 &&
//             <h3>
//                 you have {unreadMessages.length} unreadMessages;
//             </h3>
//             }
//         </div>
//     )
// }


// const Messages=['pradeep','ninganuri','ise'];
// ReactDOM.render(<Mailbox unreadMessages={Messages}/>,document.getElementById("root"))


// function Welcome(props){
//   return <h1>hello,{props.name}</h1>
// }

// class Welcome1 extends React.Component{
//   render(){
//     return <h1>hello,{this.props.name}</h1>


//   }
// }
// const element=(<div>
//   <Welcome name="bill"/>
//   <Welcome1 name="elon"/>_
//   <LoginControl/>
// </div>)
// ReactDOM.render(element,document.getElementById("root"));





import NameForm from './NameForm';
// import App from './hook';
import Clock from './Clock';
import HookCounterTwo from './hook'
import App from './use_effect';
import LayoutEffect from './layout_effect'
import UseRef from './useRef';
import Callbackhook from './Callbackhook'

class Welcome extends React.Component {
  constructor(props) {
    super(props);//calling constructor of the base class,now base class also have this props
    this.state={name:"bill"};//props is like the agrument the caller is passing and
  }// state is lilke a variable we are defining. state allow us to make component more dynamic
  render() {
    return <h1>Hello, {this.state.name}</h1>;
  }
}
const element=(<div>
{/* <App/>
  <Welcome/>

  <LoginControl/>
  <Clock/>
  <NameForm/>
  <HookCounterTwo/>
  

  <br/>
  <App/>
  <br/>
  <LayoutEffect/>
  <br/>
  <UseRef/>
  <br/>
  <br/>
  <Callbackhook/> */}
  {/* <UseRef/> */}
  {/* <Callbackhook/> */}
  <NameForm/>
</div>)
ReactDOM.render(element,document.getElementById("root"));



// import React from "react";
// import ReactDOM from "react-dom";
// function Card (props){
    
//     return(
//         <div className="cards">
//     <div className="card">
//         <img src={props.imgsrc} alt="myPic" className="card_img" />
//         <div className="card_info">
//             <span className="card_category">{props.title}</span>
//             <h3 className="card_title">{props.sname}</h3>
//             <a href={props.link} target="blank">
//                 <button>watch now</button>
//             </a>
//         </div>

//     </div>


// </div>
//     )
// }
// ReactDOM.render(
// <>
// <Card imgsrc="https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg"
//     title="Inception Movie Poster"
//     sname="Inception"
//     link="https://www.youtube.com/watch?v=YoHD9XEInc0"

//     />
// <Card imgsrc="https://www.filmibeat.com/img/2023/09/poster1-1695013579.jpg"
//     title="Animal Movie Poster"
//     sname="Animal"
//     link="https://www.youtube.com/watch?v=8FkLRUJj-o0"
// />

// </>
// , document.getElementById("root")
// );


// const ButtonCount=()=>
// {
//   const[count,newcount]=useState(1);
//   const ButtonClick=()=>{
//     newcount(count+1);
//     console.log(`button clicked ${count} times`);
//   };
//   return(
//     <div>
//     <h1>button clicked {count} times</h1>
//       <button onClick={ButtonClick}>
//         click me
//       </button>
//     </div>
//   );
// };
// ReactDOM.render(<ButtonCount/>,document.getElementById("root"));