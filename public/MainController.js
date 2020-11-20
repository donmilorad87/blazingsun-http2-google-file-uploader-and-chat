'use strict';

export default class MainController {

  constructor(name) {
    this.name = name
  }

  sayName() {
    console.log('Hi, I am a ', this.name + '.');
  }

}