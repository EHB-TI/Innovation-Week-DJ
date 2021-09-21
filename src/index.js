import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//Circle buttons
function Circle(props) {
    return (
    <button className="circle" onClick={props.onClick}>
        {props.value}
    </button>
    );
}

//Option buttons
function Option(props) {
    return (
    <button className="option" onClick={props.onClick}>
        {props.value}
    </button>
    );
}

  class Car extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          buttons: Array(9).fill(null),
          imageClass: "homeClass"
        };
      }

    handleClick(i) {
        switch(i) {
            case "NameHome":
                this.setState({
                    imageClass: "homeClass"
                })
                break
            case "NameDash":
                this.setState({
                    imageClass: "dashClass"
                }) 
                break 
            case "NameWheel":
                this.setState({
                    imageClass: "wheelClass"
                })
                break
            case "NameChair":
                this.setState({
                    imageClass: "chairClass"
                })
                break
            case "NameTest":
                this.setState({
                    imageClass: "testClass"
                })
                break
        }
        console.log("Button was pressed")
      }

    renderCircle(i) {
        return (
          <Circle
            value={i}
            onClick={() => this.handleClick(i)}
          />
        );
      }

    render() {
      return (
          <div className="total">
            <div 
            className={this.state.imageClass}>
            </div>
            <div className="bar">
                <div className="navigation">
                    {this.renderCircle("NameHome")}
                    {this.renderCircle("NameDash")}
                    {this.renderCircle("NameWheel")}
                    {this.renderCircle("NameChair")}
                    {this.renderCircle("NameTest")}
                </div>
            </div>
          </div>
            
      );
    }
  }
  
  // ========================================
  
  ReactDOM.render(
    <Car />,
    document.getElementById('root')
  );