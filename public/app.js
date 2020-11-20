'use strict'

import MainController from './MainController.js'

const mainController = {}
mainController.instance = new MainController('Miller')
mainController.instance.sayName()