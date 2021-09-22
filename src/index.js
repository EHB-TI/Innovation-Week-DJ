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
          imageClass: "homeClass",
          current: "NameHome",
          steerCheck: false,
          wheelCheck: false,
          couchCheck: false,
          optionClass1: "baseOptions1",
          optionClass2: "baseOptions2",
          optionClass3: "baseOptions3",
        };
      }

    returnOptionToBase() {
        this.setState({
            optionClass1: "baseOptions1",
            optionClass2: "baseOptions2",
            optionClass3: "baseOptions3",
            steerCheck: false,
            wheelCheck: false,
            couchCheck: false
        })
    }

    handleOption(i) {
        if (this.state.steerCheck || this.state.wheelCheck || this.state.couchCheck) {
            this.returnOptionToBase()
        }else{
        switch(i){
            case "PushSteer":
                    this.setState({
                        optionClass1: "steerOptions1",
                        optionClass2: "steerOptions2",
                        steerCheck: true
                    })
                    break
            case "PushWheel":
                    this.setState({
                        optionClass1: "wheelOptions1",
                        optionClass2: "wheelOptions2",
                        optionClass3: "wheelOptions3",
                        wheelCheck: true
                    })
                    break
            case "PushCouch":
                
                    this.setState({
                        optionClass1: "couchOptions1",
                        optionClass2: "couchOptions2",
                        steerCheck: true
                    })
                    break
        }
    }
    console.log("Option was opened")
    }

    handleClick(i) {
        if (i != this.state.current){
            this.returnOptionToBase();
            this.setState({
                current: i,
            });
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
        }
        console.log("Button was pressed")
      }

    renderOption(i) {
        return (
          <Circle
            value={i}
            onClick={() => this.handleOption(i)}
          />
        );
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
              <div>
                <div 
                className={`carBased ${this.state.imageClass}`}>
                </div>
                <div className={`optionsBased ${this.state.optionClass1}`}>
                </div>
                <div className={`optionsBased ${this.state.optionClass2}`}>
                </div>
                <div className={`optionsBased ${this.state.optionClass3}`}>
                </div>
              </div>
            <div className="bar">
                <div className="navigation">
                    {this.renderCircle("NameHome")}
                    {this.renderCircle("NameDash")}
                    {this.renderCircle("NameWheel")}
                    {this.renderCircle("NameChair")}
                    {this.renderCircle("NameTest")}
                    {this.renderOption("PushSteer")}
                    {this.renderOption("PushWheel")}
                    {this.renderOption("PushCouch")}
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