'use strict'

import MainController from '/assets/js/classes/MainController.js'

const mainController = {}
mainController.instance = new MainController('Miller')
mainController.instance.sayName()