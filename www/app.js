/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var State = (function () {
    function State(sc) {
        var _this = this;
        this.stateContext = sc;
        this.startTime = new Date().getTime();
        this.buttons = new Array();
        this.labels = new Array();
        this.bitmaps = new Array();
        this.bitmapButtons = new Array();
        this.backgroundImage = new Image();
        this.isBackgroundImageLoaded = false;
        this.backgroundImage.onload = function () {
            _this.isBackgroundImageLoaded = true;
        };
    }
    State.prototype.draw = function (canvas) {
        var context = canvas.getContext('2d');
        if (this.isBackgroundImageLoaded) {
            for (var x = 0; x < canvas.width; x += this.backgroundImage.width) {
                for (var y = 0; y < canvas.height; y += this.backgroundImage.height) {
                    context.drawImage(this.backgroundImage, x, y, this.backgroundImage.width, this.backgroundImage.height);
                }
            }
        }
        this.labels.forEach(function (l) { return l.draw(canvas); });
        this.buttons.forEach(function (b) { return b.draw(canvas); });
        this.bitmaps.forEach(function (b) { return b.draw(canvas); });
        this.bitmapButtons.forEach(function (bb) { return bb.draw(canvas); });
    };
    State.prototype.getTimeInCurrentState = function () {
        var result = new Date().getTime() - this.startTime;
        return result;
    };
    State.prototype.onDown = function (x, y) {
        console.log("Unhandled tap x: " + x + " y: " + y);
    };
    State.prototype.onUp = function (x, y) { };
    State.prototype.determineTapTarget = function (x, y) {
        var tappedButton = null;
        tappedButton = this.buttons.filter(function (b) { return b.isAtPoint(x, y); })[0];
        tappedButton = this.bitmapButtons.filter(function (b) { return b.isAtPoint(x, y); })[0];
        return tappedButton ? tappedButton : null;
    };
    return State;
}());
exports.State = State;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
exports.__esModule = true;
__export(__webpack_require__(5));
__export(__webpack_require__(20));
__export(__webpack_require__(21));
__export(__webpack_require__(22));
__export(__webpack_require__(3));
__export(__webpack_require__(24));


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var State_1 = __webpack_require__(0);
var StateAbout_1 = __webpack_require__(7);
var StateTutorial_1 = __webpack_require__(8);
var ui_1 = __webpack_require__(1);
var StateMainMenu = (function (_super) {
    __extends(StateMainMenu, _super);
    function StateMainMenu(sc) {
        var _this = _super.call(this, sc) || this;
        _this.labels.push(new ui_1.UILabel('MINDBREAKER', 1176 / 2, 160, ui_1.UILabel.SIZE_LARGE));
        _this.buttonPlay = new ui_1.UIButton('Play', 438, 250, ui_1.UIButton.SIZE_LARGE, ui_1.UIButton.COLOR_PRIMARY);
        _this.buttons.push(_this.buttonPlay);
        _this.buttonAbout = new ui_1.UIButton('About', 475, 500, ui_1.UIButton.SIZE_MEDIUM, ui_1.UIButton.COLOR_SECONDARY);
        _this.buttons.push(_this.buttonAbout);
        return _this;
    }
    StateMainMenu.prototype.onDown = function (x, y) {
        var tappedButton = this.determineTapTarget(x, y);
        if (tappedButton === this.buttonPlay) {
            this.stateContext.state = new StateTutorial_1.StateTutorial(this.stateContext);
        }
        else if (tappedButton === this.buttonAbout) {
            this.stateContext.state = new StateAbout_1.StateAbout(this.stateContext);
        }
    };
    StateMainMenu.prototype.tick = function () { };
    return StateMainMenu;
}(State_1.State));
exports.StateMainMenu = StateMainMenu;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var UIElement = (function () {
    function UIElement() {
    }
    UIElement.MODEL_WIDTH = 1176.0;
    UIElement.MODEL_HEIGHT = 696.0;
    return UIElement;
}());
exports.UIElement = UIElement;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var NamedColor_1 = __webpack_require__(18);
var Random_1 = __webpack_require__(19);
var State_1 = __webpack_require__(0);
var StateGameOver_1 = __webpack_require__(9);
var StatePause_1 = __webpack_require__(10);
var ui_1 = __webpack_require__(1);
var StatePlay = (function (_super) {
    __extends(StatePlay, _super);
    function StatePlay(sc) {
        var _this = _super.call(this, sc) || this;
        _this.score = 0;
        _this.countdown = 10;
        _this.buttonPause = new ui_1.UIButton('Pause', 60, 60, ui_1.UIButton.SIZE_MEDIUM, ui_1.UIButton.COLOR_SECONDARY);
        _this.buttons.push(_this.buttonPause);
        _this.buttonLeft = new ui_1.UIButton('', 60, 200, ui_1.UIButton.SIZE_SQUARE_MEDIUM, ui_1.UIButton.COLOR_TRANSPARENT);
        _this.buttons.push(_this.buttonLeft);
        _this.buttonRight = new ui_1.UIButton('', 900, 200, ui_1.UIButton.SIZE_SQUARE_MEDIUM, ui_1.UIButton.COLOR_TRANSPARENT);
        _this.buttons.push(_this.buttonRight);
        _this.labelScore = new ui_1.UILabel(_this.score + " pts", ui_1.UIElement.MODEL_WIDTH / 2, 560, ui_1.UILabel.SIZE_MEDIUM);
        _this.labels.push(_this.labelScore);
        _this.labelTime = new ui_1.UILabel(_this.countdown.toString(), ui_1.UIElement.MODEL_WIDTH / 2, ui_1.UIElement.MODEL_HEIGHT / 2, ui_1.UILabel.SIZE_LARGE);
        _this.labels.push(_this.labelTime);
        _this.labelColorName = new ui_1.UILabel('', ui_1.UIElement.MODEL_WIDTH / 2, 100, ui_1.UILabel.SIZE_LARGE);
        _this.labels.push(_this.labelColorName);
        _this.colorsCount = StatePlay.colors.length;
        _this.generateQuestion();
        return _this;
    }
    StatePlay.restore = function (sc, score, countdown, leftColorValue, rightColorValue, properColorName, properColorValue) {
        var result = new StatePlay(sc);
        result.score = score;
        result.countdown = countdown;
        result.leftColor = new NamedColor_1.NamedColor('', leftColorValue);
        result.rightColor = new NamedColor_1.NamedColor('', rightColorValue);
        result.properColor = new NamedColor_1.NamedColor(properColorName, properColorValue);
        result.labelScore.label = score + " pts";
        result.labelTime.label = countdown.toString();
        result.labelColorName.label = properColorName;
        result.labelColorName.foregroundColor = properColorValue;
        result.buttonLeft.backgroundColor = result.leftColor.value;
        result.buttonRight.backgroundColor = result.rightColor.value;
        return result;
    };
    StatePlay.prototype.generateQuestion = function () {
        this.leftColor = StatePlay.colors[Random_1.Random.nextInt(this.colorsCount)];
        do {
            this.rightColor = StatePlay.colors[Random_1.Random.nextInt(this.colorsCount)];
        } while (this.rightColor === this.leftColor);
        this.buttonLeft.backgroundColor = this.leftColor.value;
        this.buttonRight.backgroundColor = this.rightColor.value;
        this.properColor = Random_1.Random.nextBoolean() ? this.leftColor : this.rightColor;
        this.labelColorName.label = this.properColor.name;
        this.labelColorName.foregroundColor = Random_1.Random.nextBoolean() ? this.leftColor.value : this.rightColor.value;
    };
    StatePlay.prototype.onDown = function (x, y) {
        var tappedButton = this.determineTapTarget(x, y);
        if (tappedButton === this.buttonLeft || tappedButton === this.buttonRight) {
            if (tappedButton.backgroundColor === this.properColor.value) {
                if (this.countdown < 9)
                    this.countdown += 1;
                else
                    this.countdown = 10;
                this.score += 10;
                this.labelScore.label = this.score + " pts";
                this.generateQuestion();
            }
            else {
                this.stateContext.state = new StateGameOver_1.StateGameOver(this.stateContext, this.score, this.countdown);
            }
        }
        else if (tappedButton === this.buttonPause) {
            this.stateContext.state = new StatePause_1.StatePause(this.stateContext, this);
        }
    };
    StatePlay.prototype.tick = function () {
        this.countdown -= 0.05;
        if (this.countdown <= 0) {
            this.stateContext.state = new StateGameOver_1.StateGameOver(this.stateContext, this.score, this.countdown);
        }
        else {
            this.labelTime.label = (Math.round(this.countdown * 10) / 10.0).toString();
        }
    };
    StatePlay.colors = [
        new NamedColor_1.NamedColor('White', '#000'),
        new NamedColor_1.NamedColor('Blue', '#2673EC'),
        new NamedColor_1.NamedColor('Green', '#78BA00'),
        new NamedColor_1.NamedColor('Red', '#FF1111'),
        new NamedColor_1.NamedColor('Yellow', '#F4EE00'),
        new NamedColor_1.NamedColor('Purple', '#7200AC'),
        new NamedColor_1.NamedColor('Pink', '#FF76BC'),
        new NamedColor_1.NamedColor('Orange', '#FF7D23')
    ];
    return StatePlay;
}(State_1.State));
exports.StatePlay = StatePlay;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var UIElement_1 = __webpack_require__(3);
var Paint_1 = __webpack_require__(6);
var UIBitmap = (function (_super) {
    __extends(UIBitmap, _super);
    function UIBitmap(imagePath, canvas, x, y) {
        var _this = _super.call(this) || this;
        var verticalScale = canvas.height / UIElement_1.UIElement.MODEL_HEIGHT;
        var horizontalScale = canvas.width / UIElement_1.UIElement.MODEL_WIDTH;
        _this.scale = verticalScale < horizontalScale ? verticalScale : horizontalScale;
        _this.x = horizontalScale * x;
        _this.y = verticalScale * y;
        console.log("SCALE", "scale: " + _this.scale + " hScale: " + _this.horizontalScale + " vScale: " + _this.verticalScale);
        _this.invertedPositioning = _this.x < 0;
        if (_this.invertedPositioning) {
            _this.x *= -1;
            _this.y *= -1;
        }
        _this.isBitmapLoaded = false;
        _this.bitmap = new Image();
        _this.bitmap.onload = function () {
            _this.isBitmapLoaded = true;
            _this.bitmapHeight = _this.bitmap.height;
            _this.bitmapWidth = _this.bitmap.width;
        };
        _this.paint = new Paint_1.Paint();
        return _this;
    }
    UIBitmap.prototype.draw = function (canvas) {
        this.canvasWidth = canvas.width;
        this.canvasHeight = canvas.height;
    };
    return UIBitmap;
}(UIElement_1.UIElement));
exports.UIBitmap = UIBitmap;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var Paint = (function () {
    function Paint() {
    }
    return Paint;
}());
exports.Paint = Paint;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var State_1 = __webpack_require__(0);
var StateMainMenu_1 = __webpack_require__(2);
var ui_1 = __webpack_require__(1);
var StateAbout = (function (_super) {
    __extends(StateAbout, _super);
    function StateAbout(sc) {
        var _this = _super.call(this, sc) || this;
        _this.labels.push(new ui_1.UILabel('ABOUT', ui_1.UIElement.MODEL_WIDTH / 2, 160, ui_1.UILabel.SIZE_LARGE));
        _this.labels.push(new ui_1.UILabel('Krzysztof Zbiciñski 171148', ui_1.UIElement.MODEL_WIDTH / 2, 260, ui_1.UILabel.SIZE_MEDIUM));
        _this.labels.push(new ui_1.UILabel('Information Technology, IFE', ui_1.UIElement.MODEL_WIDTH / 2, 360, ui_1.UILabel.SIZE_MEDIUM));
        _this.buttonBack = new ui_1.UIButton('Back', 475, 500, ui_1.UIButton.SIZE_MEDIUM, ui_1.UIButton.COLOR_SECONDARY);
        _this.buttons.push(_this.buttonBack);
        return _this;
    }
    StateAbout.prototype.draw = function (canvas) {
        var context = canvas.getContext('2d');
        context.fillStyle = '#000';
        context.fillRect(0, 0, canvas.width, canvas.height);
        _super.prototype.draw.call(this, canvas);
    };
    StateAbout.prototype.onDown = function (x, y) {
        var tappedButton = this.determineTapTarget(x, y);
        if (tappedButton === this.buttonBack) {
            this.stateContext.state = new StateMainMenu_1.StateMainMenu(this.stateContext);
        }
    };
    StateAbout.prototype.tick = function () { };
    return StateAbout;
}(State_1.State));
exports.StateAbout = StateAbout;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var State_1 = __webpack_require__(0);
var StatePlay_1 = __webpack_require__(4);
var ui_1 = __webpack_require__(1);
var StateTutorial = (function (_super) {
    __extends(StateTutorial, _super);
    function StateTutorial(sc) {
        var _this = _super.call(this, sc) || this;
        _this.labels.push(new ui_1.UILabel("HOW TO PLAY?", ui_1.UIElement.MODEL_WIDTH / 2, 100, ui_1.UILabel.SIZE_LARGE));
        var goodColor = StatePlay_1.StatePlay.colors[2];
        var wrongColor = StatePlay_1.StatePlay.colors[3];
        _this.dummyColorName = new ui_1.UILabel(goodColor.name, ui_1.UIElement.MODEL_WIDTH / 2, 200, ui_1.UILabel.SIZE_LARGE);
        _this.dummyColorName.foregroundColor = wrongColor.value;
        _this.labels.push(_this.dummyColorName);
        _this.buttonLeft = new ui_1.UIButton("\u2714", 60, 250, ui_1.UIButton.SIZE_SQUARE_MEDIUM, goodColor.value);
        _this.buttons.push(_this.buttonLeft);
        _this.buttonRight = new ui_1.UIButton("\u2718", 900, 250, ui_1.UIButton.SIZE_SQUARE_MEDIUM, wrongColor.value);
        _this.buttons.push(_this.buttonRight);
        _this.buttonPlay = new ui_1.UIButton("Play", (ui_1.UIElement.MODEL_WIDTH - ui_1.UIButton.SIZE_MEDIUM.right) / 2, 530, ui_1.UIButton.SIZE_MEDIUM, ui_1.UIButton.COLOR_PRIMARY);
        _this.buttons.push(_this.buttonPlay);
        return _this;
    }
    StateTutorial.prototype.draw = function (canvas) {
        var context = canvas.getContext('2d');
        context.fillStyle = '#000';
        context.fillRect(0, 0, canvas.width, canvas.height);
        _super.prototype.draw.call(this, canvas);
    };
    StateTutorial.prototype.onDown = function (x, y) {
        var tappedButton = this.determineTapTarget(x, y);
        if (tappedButton === this.buttonPlay) {
            this.stateContext.state = new StatePlay_1.StatePlay(this.stateContext);
        }
    };
    StateTutorial.prototype.tick = function () { };
    return StateTutorial;
}(State_1.State));
exports.StateTutorial = StateTutorial;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var State_1 = __webpack_require__(0);
var StateMainMenu_1 = __webpack_require__(2);
var StatePlay_1 = __webpack_require__(4);
var ui_1 = __webpack_require__(1);
var StateGameOver = (function (_super) {
    __extends(StateGameOver, _super);
    function StateGameOver(sc, score, countdown) {
        var _this = _super.call(this, sc) || this;
        var reason = countdown > 0 ? 'GOTCHA!' : 'THE TIME HAS RUN OUT';
        _this.labels.push(new ui_1.UILabel(reason, ui_1.UIElement.MODEL_WIDTH / 2, 160, ui_1.UILabel.SIZE_LARGE));
        _this.labels.push(new ui_1.UILabel('Your score:', ui_1.UIElement.MODEL_WIDTH / 2, 260, ui_1.UILabel.SIZE_MEDIUM));
        _this.labels.push(new ui_1.UILabel(score + " pts", ui_1.UIElement.MODEL_WIDTH / 2, 360, ui_1.UILabel.SIZE_MEDIUM));
        _this.buttonAgain = new ui_1.UIButton('TRY AGAIN', 900, 530, ui_1.UIButton.SIZE_MEDIUM, ui_1.UIButton.COLOR_PRIMARY);
        _this.buttons.push(_this.buttonAgain);
        _this.buttonBack = new ui_1.UIButton('MENU', 60, 530, ui_1.UIButton.SIZE_MEDIUM, ui_1.UIButton.COLOR_SECONDARY);
        _this.buttons.push(_this.buttonBack);
        return _this;
    }
    StateGameOver.prototype.draw = function (canvas) {
        var context = canvas.getContext('2d');
        context.fillStyle = '#000';
        context.fillRect(0, 0, canvas.width, canvas.height);
        _super.prototype.draw.call(this, canvas);
    };
    StateGameOver.prototype.onDown = function (x, y) {
        var tappedButton = this.determineTapTarget(x, y);
        if (tappedButton === this.buttonBack) {
            this.stateContext.state = new StateMainMenu_1.StateMainMenu(this.stateContext);
        }
        else if (tappedButton === this.buttonAgain) {
            this.stateContext.state = new StatePlay_1.StatePlay(this.stateContext);
        }
    };
    StateGameOver.prototype.tick = function () { };
    return StateGameOver;
}(State_1.State));
exports.StateGameOver = StateGameOver;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var State_1 = __webpack_require__(0);
var StateMainMenu_1 = __webpack_require__(2);
var ui_1 = __webpack_require__(1);
var StatePause = (function (_super) {
    __extends(StatePause, _super);
    function StatePause(sc, statePlay) {
        var _this = _super.call(this, sc) || this;
        _this.labels.push(new ui_1.UILabel('PAUSED', ui_1.UIElement.MODEL_WIDTH / 2, 160, ui_1.UILabel.SIZE_LARGE));
        _this.buttonResume = new ui_1.UIButton('RESUME', (ui_1.UIElement.MODEL_WIDTH - ui_1.UIButton.SIZE_MEDIUM.right) / 2, 250, ui_1.UIButton.SIZE_MEDIUM, ui_1.UIButton.COLOR_PRIMARY);
        _this.buttons.push(_this.buttonResume);
        _this.buttonBack = new ui_1.UIButton('MENU', (ui_1.UIElement.MODEL_WIDTH - ui_1.UIButton.SIZE_MEDIUM.right) / 2, 400, ui_1.UIButton.SIZE_MEDIUM, ui_1.UIButton.COLOR_SECONDARY);
        _this.buttons.push(_this.buttonBack);
        _this.statePlay = statePlay;
        return _this;
    }
    StatePause.prototype.draw = function (canvas) {
        var context = canvas.getContext('2d');
        context.fillStyle = '#000';
        context.fillRect(0, 0, canvas.width, canvas.height);
        _super.prototype.draw.call(this, canvas);
    };
    StatePause.prototype.onDown = function (x, y) {
        var tappedButton = this.determineTapTarget(x, y);
        if (tappedButton === this.buttonBack) {
            this.stateContext.state = new StateMainMenu_1.StateMainMenu(this.stateContext);
        }
        else if (tappedButton === this.buttonResume) {
            this.stateContext.state = this.statePlay;
        }
    };
    StatePause.prototype.tick = function () { };
    return StatePause;
}(State_1.State));
exports.StatePause = StatePause;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var GameView_1 = __webpack_require__(12);
var SharedPreferences_1 = __webpack_require__(16);
var states_1 = __webpack_require__(17);
var Main = (function () {
    function Main() {
        this.onCreated();
    }
    Main.prototype.onCreated = function () {
        this.gameView = new GameView_1.GameView(this);
        this.stateContext = new states_1.StateContext(this, this.gameView);
        if (SharedPreferences_1.SharedPreferences.getInt('score', -1) > -1) {
            var statePlay = states_1.StatePlay.restore(this.stateContext, SharedPreferences_1.SharedPreferences.getInt('score', 0), SharedPreferences_1.SharedPreferences.getFloat('countdown', 10.0), SharedPreferences_1.SharedPreferences.getString('leftColorValue', states_1.StatePlay.colors[1].value), SharedPreferences_1.SharedPreferences.getString('rightColorValue', states_1.StatePlay.colors[2].value), SharedPreferences_1.SharedPreferences.getString('properColorName', states_1.StatePlay.colors[1].name), SharedPreferences_1.SharedPreferences.getString('properColorValue', states_1.StatePlay.colors[1].value));
            var statePause = new states_1.StatePause(this.stateContext, statePlay);
            this.stateContext.state = statePause;
        }
        else {
            this.stateContext.state = new states_1.StateMainMenu(this.stateContext);
        }
        this.setContentView(this.gameView);
        this.gameView.onCreated();
    };
    Main.prototype.onPause = function () {
        console.log('Pause');
        if (this.gameView.gameLoop !== null) {
            this.gameView.gameLoop.setRunning(false);
            if (this.stateContext.state instanceof states_1.StatePlay) {
                this.stateContext.state = new states_1.StatePause(this.stateContext, this.stateContext.state);
            }
        }
    };
    Main.prototype.onStop = function () {
        console.log('Stop');
        if (this.stateContext.state instanceof states_1.StatePause) {
            var statePlay = this.stateContext.state.statePlay;
        }
        else {
        }
    };
    Main.prototype.setContentView = function (gameView) {
        for (var i = 0; i < document.body.children.length; i++) {
            var item = document.body.children.item(i);
            if (item.tagName !== 'script') {
                document.body.removeChild(item);
            }
        }
        document.body.appendChild(gameView.canvas);
    };
    return Main;
}());
exports.Main = Main;
window.Main = Main;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var Enums_1 = __webpack_require__(13);
var GameLoop_1 = __webpack_require__(14);
var MyMotionEvent_1 = __webpack_require__(15);
var GameView = (function () {
    function GameView(main) {
        this.canvas = document.createElement('canvas');
        this.canvas.height = window.innerHeight;
        this.canvas.width = window.innerWidth;
        this.events = new Array();
        this.parent = main;
    }
    GameView.prototype.handleTouchScreen = function () {
        while (this.events.length > 0) {
            var event_1 = this.events.pop();
            if (event_1.action === Enums_1.Enums.Actions.TouchEnd) {
                this.parent.stateContext.state.onUp(event_1.x, event_1.y);
            }
            else if (event_1.action === Enums_1.Enums.Actions.TouchStart) {
                this.parent.stateContext.state.onDown(event_1.x, event_1.y);
            }
        }
    };
    GameView.prototype.onCreated = function () {
        this.gameLoop = new GameLoop_1.GameLoop(this);
        this.gameLoop.setRunning(true);
        this.gameLoop.start();
    };
    GameView.prototype.onDestroyed = function () {
        var retry = true;
        this.gameLoop.setRunning(false);
        this.gameLoop = null;
    };
    GameView.prototype.onDraw = function (canvas) {
        this.parent.stateContext.state.draw(canvas);
    };
    GameView.prototype.onTouchStart = function (e) {
        var touch = e.touches[0];
        this.events.push(new MyMotionEvent_1.MyMotionEvent(touch.clientX, touch.clientY, Enums_1.Enums.Actions.TouchStart));
    };
    GameView.prototype.onTouchEnd = function (e) {
        var touch = e.touches[0];
        this.events.push(new MyMotionEvent_1.MyMotionEvent(touch.clientX, touch.clientY, Enums_1.Enums.Actions.TouchEnd));
    };
    GameView.prototype.tick = function () {
        this.parent.stateContext.state.tick();
    };
    return GameView;
}());
exports.GameView = GameView;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var Enums;
(function (Enums) {
    var Actions;
    (function (Actions) {
        Actions[Actions["TouchEnd"] = 0] = "TouchEnd";
        Actions[Actions["TouchStart"] = 1] = "TouchStart";
    })(Actions = Enums.Actions || (Enums.Actions = {}));
})(Enums = exports.Enums || (exports.Enums = {}));


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var FPS = 20;
var ticksPerSecond = 1000 / FPS;
var GameLoop = (function () {
    function GameLoop(gameView) {
        this.gameView = gameView;
        this.isRunning = false;
    }
    GameLoop.prototype.setRunning = function (newValue) {
        this.isRunning = newValue;
    };
    GameLoop.prototype.run = function () {
        var _this = this;
        var startTime;
        var sleepTime;
        if (this.isRunning) {
            this.gameView.handleTouchScreen();
            this.gameView.tick();
            startTime = new Date().getTime();
            this.gameView.onDraw(this.gameView.canvas);
            sleepTime = ticksPerSecond - (new Date().getTime() - startTime);
            if (sleepTime > 0) {
                setTimeout(function () { return _this.run(); }, sleepTime);
            }
            else {
                setTimeout(function () { return _this.run(); }, 10);
            }
        }
    };
    GameLoop.prototype.start = function () {
        this.setRunning(true);
        this.run();
    };
    return GameLoop;
}());
exports.GameLoop = GameLoop;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var MyMotionEvent = (function () {
    function MyMotionEvent(x, y, action) {
        this.x = x;
        this.y = y;
        this.action = action;
    }
    return MyMotionEvent;
}());
exports.MyMotionEvent = MyMotionEvent;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var SharedPreferences = (function () {
    function SharedPreferences() {
    }
    SharedPreferences.getFloat = function (key, defaultValue) {
        var value = localStorage.getItem(key);
        return value === null ? defaultValue : parseFloat(value);
    };
    SharedPreferences.getInt = function (key, defaultValue) {
        var value = localStorage.getItem(key);
        return value === null ? defaultValue : parseInt(value, 10);
    };
    SharedPreferences.getString = function (key, defaultValue) {
        var value = localStorage.getItem(key);
        return value === null ? defaultValue : value;
    };
    return SharedPreferences;
}());
exports.SharedPreferences = SharedPreferences;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
exports.__esModule = true;
__export(__webpack_require__(0));
__export(__webpack_require__(7));
__export(__webpack_require__(25));
__export(__webpack_require__(9));
__export(__webpack_require__(2));
__export(__webpack_require__(10));
__export(__webpack_require__(4));
__export(__webpack_require__(8));


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var NamedColor = (function () {
    function NamedColor(n, v) {
        this.name = n;
        this.value = v;
    }
    return NamedColor;
}());
exports.NamedColor = NamedColor;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var Random = (function () {
    function Random() {
    }
    Random.nextBoolean = function () {
        return Random.nextInt(1) ? true : false;
    };
    Random.nextInt = function (maxValue) {
        return Math.floor((Math.random() * maxValue));
    };
    return Random;
}());
exports.Random = Random;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var UIBitmap_1 = __webpack_require__(5);
var UIBitmapButton = (function (_super) {
    __extends(UIBitmapButton, _super);
    function UIBitmapButton() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UIBitmapButton.prototype.draw = function (c) {
        _super.prototype.draw.call(this, c);
        if (this.isBitmapLoaded) {
            var context = c.getContext('2d');
            if (this.invertedPositioning) {
                var x = this.canvasWidth - this.x - this.bitmapWidth;
                var y = this.canvasHeight - this.y - this.bitmapHeight;
                context.drawImage(this.bitmap, x, y);
            }
            else {
                context.drawImage(this.bitmap, this.x, this.y);
            }
        }
    };
    UIBitmapButton.prototype.isAtPoint = function (x, y) {
        if (this.invertedPositioning) {
            return x <= this.canvasWidth - this.x
                && x >= this.canvasWidth - this.x - this.bitmapWidth
                && y <= this.canvasWidth - this.y
                && y >= this.canvasWidth - this.y - this.bitmapHeight;
        }
        else {
            return x >= this.x
                && x <= this.x + this.bitmapWidth
                && y >= this.y
                && y <= this.y + this.bitmapHeight;
        }
    };
    return UIBitmapButton;
}(UIBitmap_1.UIBitmap));
exports.UIBitmapButton = UIBitmapButton;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var UIBitmap_1 = __webpack_require__(5);
var UIBitmapLabel = (function (_super) {
    __extends(UIBitmapLabel, _super);
    function UIBitmapLabel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UIBitmapLabel.prototype.draw = function (c) {
        _super.prototype.draw.call(this, c);
        if (this.isBitmapLoaded) {
            var context = c.getContext('2d');
            if (this.invertedPositioning) {
                var x = this.canvasWidth - this.x - this.bitmapWidth;
                var y = this.canvasHeight - this.y - this.bitmapHeight;
                context.drawImage(this.bitmap, x, y);
            }
            else {
                context.drawImage(this.bitmap, this.x, this.y);
            }
        }
    };
    return UIBitmapLabel;
}(UIBitmap_1.UIBitmap));
exports.UIBitmapLabel = UIBitmapLabel;


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Paint_1 = __webpack_require__(6);
var Rect_1 = __webpack_require__(23);
var UIElement_1 = __webpack_require__(3);
var UIButton = (function (_super) {
    __extends(UIButton, _super);
    function UIButton(text, x, y, size, backgroundColor) {
        var _this = _super.call(this) || this;
        _this.label = text.toUpperCase();
        _this.x = x;
        _this.y = y;
        _this.size = size;
        _this.left = -1;
        _this.right = -1;
        _this.top = -1;
        _this.bottom = -1;
        _this.foregroundColor = '#FFFFFF';
        _this.backgroundColor = backgroundColor;
        _this.paintText = new Paint_1.Paint();
        _this.paintText.color = _this.foregroundColor;
        _this.paintText.textAlign = 'center';
        _this.paintText.isBoldText = true;
        _this.paintText.textShadowColor = 'rgba(0, 0, 0, 0.4)';
        _this.paintBackground = new Paint_1.Paint();
        _this.paintBackground.color = _this.backgroundColor;
        var underlineColor = _this.shadeColor(_this.backgroundColor, 0.6);
        _this.paintUnderline = new Paint_1.Paint();
        _this.paintUnderline.color = underlineColor;
        return _this;
    }
    UIButton.prototype.recalculatePosition = function (c) {
        var canvasWidth = c.width;
        var canvasHeight = c.height;
        this.verticalScale = canvasHeight / UIElement_1.UIElement.MODEL_HEIGHT;
        this.horizontalScale = canvasWidth / UIElement_1.UIElement.MODEL_WIDTH;
        this.left = (this.x * this.horizontalScale);
        this.right = (this.x * this.horizontalScale) + this.size.right * this.horizontalScale;
        this.top = (this.y * this.verticalScale);
        this.bottom = (this.y * this.verticalScale) + this.size.bottom * this.verticalScale;
        this.paintText.textSize = this.size.bottom * this.verticalScale * 0.35;
        this.paintText.textShadowSize = 6 * this.verticalScale;
        this.textY = (this.top + this.bottom) / 2;
        this.textX = (this.left + this.right) / 2;
        this.underlineThickness = 10 * this.verticalScale;
    };
    UIButton.prototype.draw = function (c) {
        if (this.left === -1) {
            this.recalculatePosition(c);
        }
        this.paintBackground.color = this.backgroundColor;
        var context = c.getContext('2d');
        context.fillStyle = this.paintBackground.color;
        context.fillRect(this.left, this.top, this.right, this.bottom);
        context.fillStyle = this.paintUnderline.color;
        context.fillRect(this.left, this.bottom - this.underlineThickness, this.right, this.bottom);
        context.font = this.paintText.textSize.toString + "px " + (this.paintText.isBoldText ? 'bold' : 'normal');
        context.shadowColor = this.paintText.textShadowColor;
        context.shadowBlur = this.paintText.textShadowSize;
        context.fillStyle = this.paintText.color;
        context.fillText(this.label, this.textX, this.textY);
    };
    UIButton.prototype.isAtPoint = function (x, y) {
        return x >= this.left
            && x <= this.right
            && y >= this.top
            && y <= this.bottom;
    };
    UIButton.prototype.shadeColor = function (color, percent) {
        var f = parseInt(color.slice(1), 16), t = percent < 0 ? 0 : 255, p = percent < 0 ? percent * -1 : percent, R = f >> 16, G = f >> 8 & 0x00FF, B = f & 0x0000FF;
        return "#" + (0x1000000 + (Math.round((t - R) * p) + R) * 0x10000 + (Math.round((t - G) * p) + G) * 0x100 + (Math.round((t - B) * p) + B)).toString(16).slice(1);
    };
    UIButton.SIZE_MEDIUM = new Rect_1.Rect(0, 0, 225, 120);
    UIButton.SIZE_LARGE = new Rect_1.Rect(0, 0, 300, 160);
    UIButton.SIZE_SQUARE_MEDIUM = new Rect_1.Rect(0, 0, 225, 255);
    UIButton.COLOR_PRIMARY = '#00b9e9';
    UIButton.COLOR_SECONDARY = '#4b717b';
    UIButton.COLOR_TRANSPARENT = 'rgba(0,0,0,0)';
    return UIButton;
}(UIElement_1.UIElement));
exports.UIButton = UIButton;


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var Rect = (function () {
    function Rect(x, y, width, height) {
        this.left = x;
        this.top = y;
        this.right = width;
        this.bottom = height;
    }
    return Rect;
}());
exports.Rect = Rect;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var UIElement_1 = __webpack_require__(3);
var Paint_1 = __webpack_require__(6);
var UILabel = (function (_super) {
    __extends(UILabel, _super);
    function UILabel(text, x, y, size) {
        var _this = _super.call(this) || this;
        _this.label = text;
        _this.x = x;
        _this.y = y;
        _this.size = size;
        _this.foregroundColor = '#FFFFFF';
        _this.paintText = new Paint_1.Paint();
        _this.paintText.textAlign = 'center';
        _this.paintText.isBoldText = true;
        _this.textX = -1;
        return _this;
    }
    UILabel.prototype.recalculatePosition = function (c) {
        var canvasWidth = c.width;
        var canvasHeight = c.height;
        this.verticalScale = canvasHeight / 696.0;
        this.horizontalScale = canvasWidth / 1176.0;
        this.textY = (this.y * this.verticalScale);
        this.textX = this.x * this.horizontalScale;
        this.paintText.textShadowColor = 'rgba(0,0,0,170)';
        this.paintText.textShadowSize = 15 * this.verticalScale;
    };
    UILabel.prototype.draw = function (c) {
        if (this.textX === -1) {
            this.recalculatePosition(c);
        }
        this.paintText.color = this.foregroundColor;
        var context = c.getContext('2d');
        context.fillStyle = this.paintText.color;
        context.fillText(this.label, this.textX, this.textY);
    };
    UILabel.SIZE_MEDIUM = 40;
    UILabel.SIZE_LARGE = 80;
    return UILabel;
}(UIElement_1.UIElement));
exports.UILabel = UILabel;


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var StateContext = (function () {
    function StateContext(main, gameView) {
        this.parent = main;
        this.gameView = gameView;
    }
    return StateContext;
}());
exports.StateContext = StateContext;


/***/ })
/******/ ]);
//# sourceMappingURL=app.js.map