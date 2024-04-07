import React  from "react";

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }
  
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }
  
    componentWillUnmount() {
        clearInterval(this.timerID);//when user goes to different component ,timer doesn't required hen this will clear the timer
    }
  
    tick() {
        this.setState({
            date: new Date()
        });
    }
  
    render() {
        return (
            <div>
                {this.state.date.toLocaleTimeString()}.
            </div>
        );
    }
 }
  
 export default Clock;