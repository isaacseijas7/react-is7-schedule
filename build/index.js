module.exports =
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var uuidv4 = exports.uuidv4 = function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = Math.random() * 16 | 0,
        v = c === 'x' ? r : r && 0x3 | 0x8;
    return v.toString(16);
  });
};

var parseString = exports.parseString = function parseString(json) {
  return JSON.stringify(json);
};

var parseJson = exports.parseJson = function parseJson(json) {
  return JSON.parse(json);
};

var getRandomColor = exports.getRandomColor = function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color + '7a';
};

var getIntervalo = exports.getIntervalo = function getIntervalo(firstNumber, secondNumber) {
  var latest = void 0,
      first = void 0,
      numbers = [],
      i = void 0;
  if (firstNumber > secondNumber) {
    latest = firstNumber;
    first = secondNumber;
  } else if (secondNumber > firstNumber) {
    latest = secondNumber;
    first = firstNumber;
  } else {
    latest = secondNumber;
    first = firstNumber;
  }
  for (i = first; i <= latest; i++) {
    numbers.push(i);
  }
  return numbers;
};

var getTopLeft = exports.getTopLeft = function getTopLeft(selection) {
  var element = null;
  if (selection.days && selection.days.length > 0 && selection.hours && selection.hours.length > 0) {
    element = document.getElementById(selection.hours[0].key + '-' + selection.days[0].key);
  }
  return element;
};

var removeDuplicates = exports.removeDuplicates = function removeDuplicates(originalArray, prop) {
  var newArray = [];
  var lookupObject = {};
  for (var key in originalArray) {
    lookupObject[originalArray[key][prop]] = originalArray[key];
  }
  for (var _key in lookupObject) {
    newArray.push(lookupObject[_key]);
  }
  return newArray;
};

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _utils = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Selectable = function (_React$Component) {
  _inherits(Selectable, _React$Component);

  function Selectable() {
    _classCallCheck(this, Selectable);

    return _possibleConstructorReturn(this, (Selectable.__proto__ || Object.getPrototypeOf(Selectable)).apply(this, arguments));
  }

  _createClass(Selectable, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          hour = _props.hour,
          day = _props.day;

      return _react2.default.createElement('div', { className: 'item selectable',
        'data-info': (0, _utils.parseString)({
          hour: hour,
          day: day
        }),
        title: day.label + ' - ' + hour.label,
        id: hour.key + '-' + day.key });
    }
  }]);

  return Selectable;
}(_react2.default.Component);

var IS7Schedule = function (_React$Component2) {
  _inherits(IS7Schedule, _React$Component2);

  function IS7Schedule(props) {
    _classCallCheck(this, IS7Schedule);

    var _this2 = _possibleConstructorReturn(this, (IS7Schedule.__proto__ || Object.getPrototypeOf(IS7Schedule)).call(this, props));

    _this2.handleMouseDown = _this2.handleMouseDown.bind(_this2);
    _this2.handleMouseUp = _this2.handleMouseUp.bind(_this2);
    var hours = [];
    var key = 0;
    var hoursStart = _this2.props.hoursStart ? _this2.props.hoursStart : 0;
    var hoursEnd = _this2.props.hoursEnd ? _this2.props.hoursEnd : 24;
    for (var index = hoursStart; index < hoursEnd; index++) {
      var intervalsMinute = _this2.props.intervalsMinute ? _this2.props.intervalsMinute : ['00', '15', '30', '45'];
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = intervalsMinute[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var item = _step.value;

          var $index = index < 10 ? '0' + index : index;
          hours.push({
            key: key++,
            label: $index + ':' + item
          });
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
    var days = [{
      key: 0,
      label: 'Lunes'
    }, {
      key: 1,
      label: 'Martes'
    }, {
      key: 2,
      label: 'Miércoles'
    }, {
      key: 3,
      label: 'Jueves'
    }, {
      key: 4,
      label: 'Viernes'
    }, {
      key: 5,
      label: 'Sábado'
    }, {
      key: 6,
      label: 'Domingo'
    }];

    _this2.state = {
      hours: hours,
      days: days,
      elementStart: null,
      elementEnd: null,
      internalSelection: _this2.props.selections && Array.isArray(_this2.props.selections) ? _this2.props.selections : [] /**/
    };

    return _this2;
  }

  _createClass(IS7Schedule, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.buildPictures();
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(next_props) {
      var _this3 = this;

      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = this.state.internalSelection[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var selection = _step2.value;

          this.removePicture(selection.uuidv4);
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      setTimeout(function () {
        _this3.buildPictures();
      }, 100);
    }
  }, {
    key: 'handleMouseDown',
    value: function handleMouseDown(event) {
      var target = event.target;
      if (target && target.classList && target.classList.contains('active')) {
        this.setState({
          elementStart: null
        });
        //console.error('Está seleccionando espacios ocupados')
      } else {
        var elementStart = this.getInfo(target);
        this.setState({
          elementStart: elementStart
        });
      }
    }
  }, {
    key: 'handleMouseUp',
    value: function handleMouseUp(event) {
      var _this4 = this;

      var target = event.target;
      if (target && target.classList && target.classList.contains('active')) {
        this.setState({
          elementEnd: null
        });
        //console.error('Está seleccionando espacios ocupados')
      } else {
        var elementEnd = this.getInfo(target);
        this.setState({
          elementEnd: elementEnd
        });
      }
      setTimeout(function () {
        if (_this4.state.elementStart && _this4.state.elementEnd) {
          _this4.getInterval();
        }
      }, 100);
    }
  }, {
    key: 'getInterval',
    value: function getInterval() {
      var intervalHours = (0, _utils.getIntervalo)(this.state.elementStart.hour.key, this.state.elementEnd.hour.key);
      var intervalDay = (0, _utils.getIntervalo)(this.state.elementStart.day.key, this.state.elementEnd.day.key);
      var selection = this.buildPicture(intervalHours, intervalDay);
      var elementTopLeft = (0, _utils.getTopLeft)(selection);
      this.addSelection(selection);
      selection.uuidv4 = selection.uuidv4 ? selection.uuidv4 : (0, _utils.uuidv4)();
      if (elementTopLeft && selection.uuidv4) {
        this.addCloseButton(elementTopLeft, selection.uuidv4);
      }
    }
  }, {
    key: 'addSelection',
    value: function addSelection(selection) {
      if (selection.hours && selection.hours.length > 0 && selection.days && selection.days.length > 0) {
        this.state.internalSelection.push(selection);
        if (this.props.handleChange) {
          this.props.handleChange(this.state.internalSelection, selection);
        }
      }
    }
  }, {
    key: 'buildPicture',
    value: function buildPicture(intervalHours, intervalDay, element) {
      var days = [];
      var hours = [];

      var isNew = element ? false : true;

      var elements = this.getSelectedItems(intervalHours, intervalDay, isNew);

      var backgroundColor = (0, _utils.getRandomColor)();

      if (!isNew && element.backgroundColor && element.backgroundColor.length > 0) {
        backgroundColor = element.backgroundColor;
      }

      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = elements[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var _element = _step3.value;

          var info = this.getInfo(_element);
          info.backgroundColor = backgroundColor;
          if (info && _element.classList && !_element.classList.contains('active')) {
            this.addClassActive(_element);
            _element.style.backgroundColor = backgroundColor;
            hours.push(info.hour);
            days.push(info.day);
          }
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3.return) {
            _iterator3.return();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }

      hours = (0, _utils.removeDuplicates)(hours, 'key');
      days = (0, _utils.removeDuplicates)(days, 'key');
      return {
        hours: hours,
        days: days
      };
    }
  }, {
    key: 'buildPictures',
    value: function buildPictures() {
      var selections = this.props.selections && Array.isArray(this.props.selections) ? this.props.selections : [];

      this.setState({
        internalSelection: [].concat(_toConsumableArray(selections))
      });

      if (selections && Array.isArray(selections)) {
        var _iteratorNormalCompletion4 = true;
        var _didIteratorError4 = false;
        var _iteratorError4 = undefined;

        try {
          for (var _iterator4 = selections[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
            var selection = _step4.value;

            if (selection.hours && selection.days) {
              var intervalHours = selection.hours.map(function (item) {
                return item.key;
              });
              var intervalDay = selection.days.map(function (item) {
                return item.key;
              });
              var picture = this.buildPicture(intervalHours, intervalDay, selection);
              var elementTopLeft = (0, _utils.getTopLeft)(picture);
              selection.uuidv4 = selection.uuidv4 ? selection.uuidv4 : (0, _utils.uuidv4)();
              if (elementTopLeft && selection.uuidv4) {
                this.addCloseButton(elementTopLeft, selection.uuidv4);
              }
            }
          }
        } catch (err) {
          _didIteratorError4 = true;
          _iteratorError4 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion4 && _iterator4.return) {
              _iterator4.return();
            }
          } finally {
            if (_didIteratorError4) {
              throw _iteratorError4;
            }
          }
        }
      }
    }
  }, {
    key: 'addCloseButton',
    value: function addCloseButton(element, uuidv4) {
      var _this5 = this;

      var node = document.createElement("SPAN");
      node.classList.add('close');
      var textnode = document.createTextNode("X");
      node.appendChild(textnode);
      node.setAttribute('data-uuidv4', uuidv4);
      node.addEventListener('click', function (event) {
        var target = event.target;
        if (target.dataset.uuidv4) {
          _this5.removePicture(target.dataset.uuidv4);
        }
      });
      element.appendChild(node);
    }
  }, {
    key: 'removePicture',
    value: function removePicture(uuidv4) {
      var selection = this.state.internalSelection.find(function (item) {
        return item.uuidv4 === uuidv4;
      });
      if (selection && selection.uuidv4) {
        this.setState({
          internalSelection: this.state.internalSelection.filter(function (item) {
            return item.uuidv4 !== selection.uuidv4;
          })
        });
        if (selection.hours && selection.days) {
          var intervalHours = selection.hours.map(function (item) {
            return item.key;
          });
          var intervalDay = selection.days.map(function (item) {
            return item.key;
          });
          var elements = this.getSelectedItems(intervalHours, intervalDay);
          var backgroundColor = '#fff';
          var _iteratorNormalCompletion5 = true;
          var _didIteratorError5 = false;
          var _iteratorError5 = undefined;

          try {
            for (var _iterator5 = elements[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
              var element = _step5.value;

              var info = this.getInfo(element);
              if (info) {
                element.style.backgroundColor = backgroundColor;
                element.classList.remove('active');
                element.innerHTML = '';
              }
            }
          } catch (err) {
            _didIteratorError5 = true;
            _iteratorError5 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion5 && _iterator5.return) {
                _iterator5.return();
              }
            } finally {
              if (_didIteratorError5) {
                throw _iteratorError5;
              }
            }
          }

          if (this.props.handleChange) {
            this.props.handleChange(this.props.selections, selection);
          }
        }
      }
    }
  }, {
    key: 'getSelectedItems',
    value: function getSelectedItems(intervalHours, intervalDay, isNew) {
      var elements = [];
      var validItems = true;
      for (var x in intervalHours) {
        for (var y in intervalDay) {
          var element = document.getElementById(intervalHours[x] + '-' + intervalDay[y]);
          if (element) {
            elements.push(element);
          }
          if (element.classList.contains('active') && isNew) {
            validItems = false;
            //console.error('Está seleccionando espacios ocupados')
          }
        }
      }
      return validItems ? elements : [];
    }
  }, {
    key: 'addClassActive',
    value: function addClassActive(element) {
      if (element.classList && element.classList.add && !element.classList.contains('active')) {
        element.classList.add('active');
        return true;
      }
      return false;
    }
  }, {
    key: 'getInfo',
    value: function getInfo(target) {
      var info = null;
      if (target && target.dataset && target.dataset.info) {
        var _parseJson = (0, _utils.parseJson)(target.dataset.info),
            hour = _parseJson.hour,
            day = _parseJson.day;

        info = {
          element: document.getElementById(hour.key + '-' + day.key),
          hour: hour,
          day: day
        };
      }
      return info;
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          hours = _state.hours,
          days = _state.days,
          internalSelection = _state.internalSelection;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'schedule schedule_head' },
          _react2.default.createElement(
            'div',
            { className: 'items' },
            _react2.default.createElement(
              'div',
              { className: 'title' },
              'Horas'
            )
          ),
          days.map(function (day) {
            return _react2.default.createElement(
              'div',
              { key: day.key, className: 'items' },
              _react2.default.createElement(
                'div',
                { className: 'title' },
                day.label
              )
            );
          })
        ),
        _react2.default.createElement(
          'div',
          { className: 'schedule',
            onMouseDown: this.handleMouseDown,
            onMouseUp: this.handleMouseUp },
          _react2.default.createElement(
            'div',
            { className: 'items' },
            hours.map(function (item) {
              return _react2.default.createElement(
                'div',
                { key: item.label, className: 'item times' },
                item.label
              );
            })
          ),
          days.map(function (day) {
            return _react2.default.createElement(
              'div',
              { key: day.key, className: 'items' },
              hours.map(function (hour) {
                return _react2.default.createElement(Selectable, {
                  key: hour.label,
                  hour: hour, day: day });
              })
            );
          }),
          _react2.default.createElement(
            'style',
            { jsx: '' },
            '\n            .schedule {\n              display: grid;\n              grid-template-columns: 0.5fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;\n            }\n            .schedule_head .items {\n\n            }\n            .schedule .title {\n              background-color: #333;\n              color: #fff;\n              border-color: #333!important;\n            }\n            .schedule .item, .schedule .title {\n              font-family: sans-serif;\n              border: solid 0.5px #ddd;\n              min-height: 40px;\n              display: flex;\n              align-items: center;\n              padding: 0 5px;\n              font-size: 14px;\n            }\n            .schedule .title {\n              justify-content: center;\n            }\n            .schedule .item.selectable:hover {\n              background-color: #ddd;\n            }\n            .schedule .item.selectable.active {\n              background-color: #d4edda;\n              border-color: #3333337a!important;\n            }\n            .schedule .item.times {\n              background-color: #dddddda7;\n            }\n            .schedule span.close {\n              position: relative;\n              top: -22px;\n              font-size: 13px;\n              left: -13px;\n              background: red;\n              color: #fff;\n              width: 16px;\n              border-radius: 50%;\n              height: 16px;\n              display: flex;\n              justify-content: center;\n              cursor: pointer;\n            }\n          '
          )
        )
      );
    }
  }]);

  return IS7Schedule;
}(_react2.default.Component);

exports.default = IS7Schedule;

/***/ })
/******/ ]);