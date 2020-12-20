import React, {Component} from 'react';
import './App.css';
import Messages from './Messages';
import HelloWorld from './state-drills/HelloWorld';
import Counter from './state/Counter';
import TheDate from './state/TheDate';
import Bomb from './state-drills/Bomb';
import RouletteGun from './state-drills/RouletteGun';

class App extends Component{
  render(){
    return(
      <div className="App">
        <h1>YOUR APPLICATION NAME!</h1>
        <Messages name="Messages" unread={0} />
        <Messages name="Notifications" unread={10} />
        <TheDate  name="Date" />
        <Counter name="Counter" count={123}/>
        <HelloWorld name="Hello" />
        <Bomb name="BombApp" />
        <RouletteGun name="RouletteGun" />
      </div>
    );
  }
}


export default App;