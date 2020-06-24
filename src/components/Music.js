import React from 'react';
import '../css/styles.css';
import * as Tone from "tone";
import { Button, SelectItemGroup } from 'carbon-components-react';

export default class Music extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
          singing: false,
          text: "Click on me to start/stop music!"
      };
      this.musicPlaying = false;
    }

    playMusic() {

        if (this.musicPlaying == true) {
            Tone.Transport.stop();
            this.musicPlaying = false;
            this.setState({"text":"Click on me to start/stop music!"});
            return;
        }

        // create a synth
        const synth = new Tone.Synth().toMaster();
        // create an array of notes to be played
        const notes = ["G4", "A4", "B4", "C5", null, "D5", "E5", "A4", null, "A4", "G4", "G4", "F4", null, "F4", "F4", "F4", "G4", null];

        // create a new sequence with the synth and notes
        const synthPart = new Tone.Sequence(
        (time, note) => {
            this.setState({singing: true});
            setTimeout(() => { this.setState({singing: false}) }, 300);
            console.log(note);
            this.setState({"text":note});
            synth.triggerAttackRelease(note, "3hz", time);
        },
        notes,
        "0.5s");

        // Setup the synth to be ready to play on beat 1
        synthPart.start();
        // Note that if you pass a time into the start method 
        // you can specify when the synth part starts 
        // e.g. .start('8n') will start after 1 eighth note
        // start the transport which controls the main timeline
        //Tone.Transport.start();

        // const chords = ["C3", "E3", "G3", "C4", null, null, "A3", "C3", "E4", "G4"];       
        // // create a new sequence with the synth and notes
        // const synthPart2 = new Tone.Sequence(
        // (time, note) => {
        //     synth.triggerAttackRelease(note, "3hz", time);
        // },
        // chords,
        // "0.5s");     
        
        // synthPart2.start('1n')

        Tone.Transport.start();
        this.musicPlaying = true;
    
    }

    render() {
            const singing = this.state.singing;
            return (
            <div>
              <p id="smileyText">{this.state.text}</p> 
              <div class="smileyface" onClick={(e) => this.playMusic()}>
                    <p class="eyes lefteye"></p>
                    <p class="eyes righteye"></p>
                        {singing
                        ? <div class="mouth"></div>
                        : <div class="smile"><div class="corner"></div>
                        <div class="corner right"></div></div>}
                </div>
            </div>);
        }
    }
