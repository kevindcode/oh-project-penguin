import _ from 'lodash';
import './style.css';
import * as P5Instance from './p5';
import BlackHole from './BlackHole';
import SpaceObject from './SpaceObject';

const P5 = p5 => {
  let blackhole;
  let spaceObj;
  const BACKGROUND_COLOR = '#2E4052';

  let v1;
  let v2;

  p5.setup = () => {
    p5.createCanvas(window.innerWidth, window.innerHeight);
    p5.noStroke();
    blackhole = new BlackHole(120, p5);
    spaceObj = new SpaceObject(blackhole, 20, p5);
    v1 = p5.createVector(40, 50, 10);
    v2 = p5.createVector(40, 50, 10);
  };

  p5.draw = () => {
    p5.background(BACKGROUND_COLOR);
    blackhole.display();
    spaceObj.update(P5Instance);
    // console.log(P5Instance.Vector);
    spaceObj.display();
  };
};

const container = new P5Instance(P5);
// console.log(P5Instance.Vector);
