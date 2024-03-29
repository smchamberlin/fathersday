import React from 'react';
import '../css/carbon-components.css';
import '../css/styles.css';
import { ContentSwitcher } from 'carbon-components-react';
import { Switch } from 'carbon-components-react';
import Music from './Music.js';
import Dad from './fathersday.jpg'
import Dadisyou from './dadisyou.png'

export default class Switcher extends React.Component {

constructor(props) {
    super(props);
    this.state = {
        greeting: false,
        video: false,
        timeMachine: false,
        poem: true
    }
}

handleChange(e) {
    console.log(e);
    if (e.index == 0) {
        this.setState({video: false});
        this.setState({greeting: false});
        this.setState({timeMachine: false});
        this.setState({poem: true});
    }
    else if (e.index == 1) {
        this.setState({greeting: true});
        this.setState({video: false});
        this.setState({timeMachine: false});
        this.setState({poem: false});
    }
    else if (e.index == 2) {
        this.setState({timeMachine: true});
        this.setState({greeting: false});
        this.setState({video: false});
        this.setState({poem: false});
    }
    else if (e.index == 3) {
        this.setState({video: true});
        this.setState({greeting: false});
        this.setState({timeMachine: false});
        this.setState({poem: false});
    }
}

render() {
    return (
    <div>
        <ContentSwitcher id="content-switcher" onChange={(e) => this.handleChange(e)}>
            <Switch name={'Poem'} text='Poem (new for 2022!)' />
            <Switch name={'Greeting'} text='Greeting' />
            <Switch name={'Time Machine'} text='Time Machine' />
            <Switch name={'Video'} text='Video' />
        </ContentSwitcher>
        {this.state.greeting ?
            <img id="greeting-pic" src={Dad}></img>
            : null}
        {this.state.video ?
            <iframe id="video-iframe" width="1120" height="630" src="https://www.youtube-nocookie.com/embed/RGwoaiwSIgo" 
            frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen></iframe>
            : null}     
        {this.state.timeMachine ?
            <Music />
            : null}
        {this.state.poem ?
                      <img id="dad-poem" src={Dadisyou}></img>
            : null}
    </div>)
}

}