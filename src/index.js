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

//Navigation with circles
class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          buttons: Array(9).fill(null),
          xIsNext: true,
        };
      }
      
      handleClick(i) {
        const buttons = this.state.buttons.slice();
        buttons[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({buttons: buttons,
                      xIsNext: !this.state.xIsNext,
                      });
      }
    
      renderSquare(i) {
        return (
          <Circle
            value={this.state.buttons[i]}
            onClick={() => this.handleClick(i)}
          />
        );
      }

    render() {
        return (
          <div className="navigation">
              {this.renderSquare(0)}
              {this.renderSquare(1)}
              {this.renderSquare(2)}
              {this.renderSquare(3)}
              {this.renderSquare(4)}
              {this.renderSquare(5)}
              {this.renderSquare(6)}
              {this.renderSquare(7)}
              {this.renderSquare(8)}
          </div>
        );
    }
}


  
  
  
  class Car extends React.Component {
    render() {
      return (
            <Navigation />
      );
    }
  }
  
  // ========================================
  
  ReactDOM.render(
    <Car />,
    document.getElementById('root')
  );