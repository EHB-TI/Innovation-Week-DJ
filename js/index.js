'use strict';
const e = React.createElement;

// Different Elements
function Button(props) {
  return (
    <div className={props.class} onClick={props.onClick}>
      <img className="button" src={props.img}/>
    </div>
  )
}

function ButtonText(props) {
  return (
    <div className={props.class}>
      <h3 className="button-text">{props.text}</h3>
    </div>
  )
}

function Logo(props) {
  return (
    <div className={props.class}>
      <img src={props.img}/>
    </div>
  )
}

function Colour(props) {
  const styleVar = {
    width: '5vw',
    height: '5vw',
    position: 'absolute',
    borderRadius: '50%',
    top: '125px',
    backgroundColor: props.backgroundColor,
    left: props.position,
    opacity: '0',
    animation: 'pop 0.3s linear 1',
    animationDelay: props.delay,
    animationFillMode: 'forwards'
  }
  return (
    <button className={`circle ${props.colour}`} style={styleVar} onClick={props.onClick} />
  )
}

function Steering(props) {

}

// Main Class
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImage: "ButtonOne",

      imageStateColour: false,
      imageStateDashboard: false,
      imageStateWheels: false,
      imageStateSeating: false,
      imageStateTestDrive: false,

      colourStateMetal: false,
      colourStateBlack: false,
      colourStateBlue: false,
      colourStatePink: false,

      dashboardStateRound: false,
      dashboardStateSquare: false,

      tiresStateBlue: false,
      tiresStateBlack: false,
      tiresStateWhite: false,

      colour: "metal",
      dashboard: "round",
      wheels: "blue",
      seating: "crosshooked"
    }
  }

  componentDidMount(){
    setTimeout(() => {
       this.setState({ imageStateColour : true })
    }, 18000);
  }

  resetImageState(){
    this.setState({
      imageStateColour: false,
      imageStateDashboard: false,
      imageStateWheels: false,
      imageStateSeating: false,
      imageStateTestDrive: false,

      colourStateMetal: false,
      colourStateBlack: false,
      colourStateBlue: false,
      colourStatePink: false,

      dashboardStateRound: false,
      dashboardStateSquare: false,

      tiresStateBlue: false,
      tiresStateBlack: false,
      tiresStateWhite: false,
    })
  }

  handleClick(option) {
    if (option != this.state.currentImage) {
      this.setState({currentImage: option})
      this.resetImageState()
      switch(option) {
        case "ButtonOne":
          switch (this.state.colour) {
            case "metal":
              this.setState({currentImage: "ButtonOne", imageStateColour: true, colourStateMetal: true})
              break;
            case "black":
              this.setState({currentImage: "ButtonOne", imageStateColour: true, colourStateBlack: true})
              break;
            case "blue":
              this.setState({currentImage: "ButtonOne", imageStateColour: true, colourStateBlue: true})
              break;
            case "pink":
              this.setState({currentImage: "ButtonOne", imageStateColour: true, colourStatePink: true})
              break;
          }
          break
        case "ButtonTwo":
          switch (this.state.dashboard) {
            case "round":
              this.setState({currentImage: "ButtonTwo", imageStateDashboard: true, dashboardStateRound: true})
              break;
            case "square":
              this.setState({currentImage: "ButtonTwo", imageStateDashboard: true, dashboardStateSquare: true})
              break;
          }
          break
        case "ButtonThree":
          switch (this.state.wheels) {
            case "blue":
              this.setState({currentImage: "ButtonThree", imageStateWheels: true, tiresStateBlue: true})
              break;
            case "black":
              this.setState({currentImage: "ButtonThree", imageStateWheels: true, tiresStateBlack: true})
              break;
            case "white":
              this.setState({currentImage: "ButtonThree", imageStateWheels: true, tiresStateWhite: true})
              break;
          }
          break
      }
    }
  }

  //colour picker
  colourAppear () {
    ReactDOM.render( 
      <div>
        <Colour colour="metal" backgroundColor='#878c92' position="calc(100% + 10vw)" onClick={() => this.colorReset()} delay="0s" />
        <Colour colour="black" backgroundColor='#242424' position="calc(100% + 20vw)" onClick={() => this.colorSelect("black")} delay="0.3s" />
        <Colour colour="blue" backgroundColor='#1d6bc1' position="calc(100% + 30vw)" onClick={() => this.colorSelect("blue")} delay="0.6s" />
        <Colour colour="pink" backgroundColor='#925858' position="calc(100% + 40vw)" onClick={() => this.colorSelect("pink")} delay="0.9s" />
      </div>,
      document.getElementById('car-colour')
    );
  }

  colorSelect (colour) {
    this.setState({colour: colour});
    ReactDOM.render(
      <div>
        <img className="image" src={`img/${colour}-car.svg`} style={{width: '76vw'}}/>
      </div>,
      document.getElementById('color-overlay')
    );
  }

  colorReset () {
    this.setState({colour: "metal"});
    ReactDOM.render(
      <div></div>,
      document.getElementById('color-overlay')
    );
  }

  //steering wheel picker
  steeringAppear () {

  }

  steeringSelect () {
    
  }

  //wheel picker
  wheelAppear () {
    ReactDOM.render( 
      <div>
        <Colour colour="blue" backgroundColor='#1d6bc1' position="calc(100% + 15vw)" onClick={() => this.wheelReset()} delay="0s" />
        <Colour colour="black" backgroundColor='#242424' position="calc(100% + 25vw)" onClick={() => this.wheelSelect("black")} delay="0.3s" />
        <Colour colour="white" backgroundColor='#fdfdfd' position="calc(100% + 35vw)" onClick={() => this.wheelSelect("white")} delay="0.6s" />
      </div>,
      document.getElementById('wheel-colour')
    );
  }

  wheelSelect (wheelColour) {
    this.setState({wheels: wheelColour});
    ReactDOM.render(
      <div>
        <img className="image" src={`img/${wheelColour}-tires.svg`} style={{width: '76vw'}}/>
      </div>,
      document.getElementById('wheel-overlay')
    );
  }

  wheelReset () {
    this.setState({wheels: "blue"});
    ReactDOM.render(
      <div></div>,
      document.getElementById('wheel-overlay')
    );
  }

  render() {
    return (
      <div>
        <Logo class="elementToFadeInAndOut" img="img/logo-dieteren-dark.svg"/>
        <Logo class="logo" img="img/logo-dieteren-dark.svg"/>

        <div className="lds-dual-ring"></div>

        <div className="buttons">
            <Button class="ButtonOne" onClick={() => this.handleClick("ButtonOne")} img="img/icon-car.svg" />
            <Button class="ButtonTwo" onClick={() => this.handleClick("ButtonTwo")} img="img/icon-steering.svg" />
            <Button class="ButtonThree" onClick={() => this.handleClick("ButtonThree")} img="img/icon-wheels.svg" />
            <Button class="ButtonFour" onClick={() => this.handleClick("ButtonFour")} img="img/icon-seats.svg" />
            <Button class="ButtonFive" onClick={() => this.handleClick("ButtonFive")} img="img/icon-rental.svg" />
        </div>
        <div className="buttons-text">
            <ButtonText class="TextOne" text="Colour"/>
            <ButtonText class="TextTwo" text="Dashboard"/>
            <ButtonText class="TextThree" text="Wheels"/>
            <ButtonText class="TextFour" text="Seating"/>
            <ButtonText class="TextFive" text="Test Drive"/>
        </div>

        <div id="main">
          <div className={`colour ${this.state.imageStateColour?'fadeIn':'fadeOut'}`}>
            <div className={`car`}>
                <img className="image" src="img/car.png"/>
            </div>
            <div id="car-colour" style={{display: 'inline', position: 'absolute'}}></div>
            <div id="color-overlay" className={`car`}></div>
            <div className={`car`}>
                <img className="light" src="img/car-light.png" onClick={() => this.colourAppear()}/>
            </div>
          </div>

          <div className={`dashboard ${this.state.imageStateDashboard?'fadeIn':'fadeOut'}`}>
            <div className={`car2`}>
                <img className="image" src="img/dashboard.png"/>
            </div>
            <div className={`dashboard-options`}>
              <div className={`car2-options`}>
                <img className="image" src="img/round-steering-wheel.png"/>
              </div>
              <div className={`car2-options`}>
                <img className="light" src="img/round-steering-wheel-light.png" onClick={() => this.steeringAppear()}/>
              </div>
            </div>
          </div>

          <div className={`wheels ${this.state.imageStateWheels?'fadeIn':'fadeOut'}`}>
            <div className={`car3`}>
                <img className="image" src="img/car.png"/>
            </div>
            <div id="wheel-colour" style={{display: 'inline', position: 'absolute'}}></div>
            <div id="wheel-overlay" className={`car`}></div>
            <div className={`car3`}>
                <img className="light" src="img/car-wheel.png" onClick={() => this.wheelAppear()}/>
            </div>
          </div>

          <div className={`seating ${this.state.imageStateSeating?'fadeIn':'fadeOut'}`}>
          </div>

          <div className={`test-drive ${this.state.imageStateTestDrive?'fadeIn':'fadeOut'}`}>
            <div className={`car3`}>
              <form>
                <label htmlFor="fname">Location:</label><br/>
                <input type="text" id="fname" name="fname"/><br/>
                <label htmlFor="lname">Name:</label><br/>
                <input type="text" id="lname" name="lname"/><br/><br/>
                <input type="submit" value="Submit"/>
              </form>
            </div> 
          </div>
        </div>
      </div>
    )
  }
}


// Render Elements
ReactDOM.render( 
  <App /> ,
  document.getElementById('root')
);