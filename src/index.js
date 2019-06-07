import _ from 'lodash';
import './style.scss';
import 'p5';
import BlackHole from './BlackHole';
import SpaceObject from './SpaceObject';

const BACKGROUND_COLOR = '#2E4052';
let blackhole;
let testBall;

window.setup = function () {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  blackhole = new BlackHole(200, windowHeight / 2, 120, 5);
  testBall = new SpaceObject(20);
};

window.draw = function () {
  background(BACKGROUND_COLOR);

  blackhole.display();
  blackhole.update();

  testBall.display();
  testBall.moveToTarget(blackhole);
};