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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

function getOptionModel(value, label) {
    return {
        "value": (value === undefined) ? "" : value,
        "label": (label === undefined) ? "" : label
    }
}

module.exports = getOptionModel;


/***/ }),
/* 1 */
/***/ (function(module, exports) {

function createDomElement(html) {
    var el = document.createElement('div');
    el.innerHTML = html;
    return el.firstChild;
}

module.exports = createDomElement;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = function anonymous(locals, filters, escape, rethrow) {
    escape = escape || function(html) {
        return String(html).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&#39;").replace(/"/g, "&quot;");
    };
    var __stack = {
        lineno: 1,
        input: "<option value=<%=value%>>\n    <%=label%>\n</option>\n",
        filename: "."
    };
    function rethrow(err, str, filename, lineno) {
        var lines = str.split("\n"), start = Math.max(lineno - 3, 0), end = Math.min(lines.length, lineno + 3);
        var context = lines.slice(start, end).map(function(line, i) {
            var curr = i + start + 1;
            return (curr == lineno ? " >> " : "    ") + curr + "| " + line;
        }).join("\n");
        err.path = filename;
        err.message = (filename || "ejs") + ":" + lineno + "\n" + context + "\n\n" + err.message;
        throw err;
    }
    try {
        var buf = [];
        with (locals || {}) {
            (function() {
                buf.push("<option value=", escape((__stack.lineno = 1, value)), ">\n    ", escape((__stack.lineno = 2, label)), "\n</option>\n");
            })();
        }
        return buf.join("");
    } catch (err) {
        rethrow(err, __stack.input, __stack.filename, __stack.lineno);
    }
}

/***/ }),
/* 3 */
/***/ (function(module, exports) {

var CONSTS = {
    "LEFT_SELECTOR_ID": "#slush_left",
    "RIGHT_SELECTOR_ID": "#slush_right"
};

module.exports = CONSTS;


/***/ }),
/* 4 */
/***/ (function(module, exports) {

function closeModel() {
    document.querySelector('.modal-content').style.display = "none"
}

module.exports = closeModel;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var mainComponent = __webpack_require__(6);
var createDomElement = __webpack_require__(1);
var getModel = __webpack_require__(7);
var getOptionModel = __webpack_require__(0);
var closeModel = __webpack_require__(4);
var cancelChanges = __webpack_require__(8);
var applyChanges = __webpack_require__(9);
var resetChanges = __webpack_require__(10);
var moveDownSelected = __webpack_require__(11);
var moveUpSelected = __webpack_require__(12);
var moveLeftSelectedItems = __webpack_require__(13);
var moveRightSelectedItems = __webpack_require__(14);

function init() {

    var availableSettings = [
        getOptionModel("active", "Active"),
        getOptionModel("activity_due", "Activity due"),
        getOptionModel("work_end", "Actual end"),
        getOptionModel("work_start", "Actual start"),
        getOptionModel("additional_assignee_list", "Additional assignee list")
    ];

    var defaultSelectedSettings = [
        getOptionModel("business_stc", "Business resolve time"),
        getOptionModel("business_service", "Business service"),
        getOptionModel("caller_id", "Caller")
    ];

    document.querySelector('.main-wrapper')
        .appendChild(createDomElement(mainComponent(
            getModel(
                closeModel,
                applyChanges.bind(null, print),
                cancelChanges,
                resetChanges.bind(null, availableSettings, defaultSelectedSettings),
                moveDownSelected,
                moveUpSelected,
                moveRightSelectedItems,
                moveLeftSelectedItems,
                true,
                availableSettings,
                defaultSelectedSettings
            )
        )));
    function print(av, sel) {
        console.log(av);
        console.log(sel)
    }

}

document.addEventListener('DOMContentLoaded', init);



/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = function anonymous(locals, filters, escape, rethrow) {
    escape = escape || function(html) {
        return String(html).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&#39;").replace(/"/g, "&quot;");
    };
    var __stack = {
        lineno: 1,
        input: '<div class="modal-content" style=\'display:<%=(isDisplay) ? "block" : "none"%>\'>\n    <div class="modal-header">\n\n        <div class="modal-header_close-w">\n            <div class="modal-header_close_icon"></div>\n            <button class="modal-header_close"\n                    onclick=\'<%="closeModel()"%>\'>\n            </button>\n        </div>\n        <div class="modal-header_title">\n            <div class="modal-header_title-text">\n                Personalize List Columns\n            </div>\n        </div>\n    </div>\n\n    <div class="modal-body">\n        <div class="modal-body_left-selector">\n            <span class="sleshselect-title">Available</span>\n            <select class="slushselect"\n                    id="slush_left"\n                    multiple="yes"\n                    name="slush_left"\n                    size="10">\n                <%for (var i = 0; i < availableSettings.length; i++) {%>\n                    <option value=<%=availableSettings[i].value%>>\n                        <%=availableSettings[i].label%>\n                    </option>\n                <%}%>\n            </select>\n        </div>\n        <div class="modal-body_move-buttons">\n\n            <div class="modal-body_move-w">\n                <div class="modal-body_move_icon __right"></div>\n                <button class="modal-body_move"\n                        onclick=\'<%="moveRightSelectedItems()"%>\'></button>\n            </div>\n            <div class="modal-body_move-w">\n                <div class="modal-body_move_icon  __left"></div>\n                <button class="modal-body_move"\n                        onclick=\'<%="moveLeftSelectedItems()"%>\'></button>\n            </div>\n        </div>\n        <div class="modal-body_right-selector">\n            <span class="sleshselect-title">Selected</span>\n            <select class="slushselect"\n                    id="slush_right"\n                    multiple="yes"\n                    name="slush_right"\n                    size="10">\n                <%for (var i = 0; i < defaultSelectedSettings.length; i++) {%>\n                    <option value=<%=defaultSelectedSettings[i].value%>>\n                        <%=defaultSelectedSettings[i].label%>\n                    </option>\n                <%}%>\n            </select>\n        </div>\n\n        <div class="modal-body_move-buttons">\n            <div class="modal-body_move-w">\n                <div class="modal-body_move_icon  __top"></div>\n                <button class="modal-body_move"\n                        onclick=\'<%="moveUpSelected()"%>\'></button>\n            </div>\n            <div class="modal-body_move-w">\n                <div class="modal-body_move_icon __bottom"></div>\n                <button class="modal-body_move"\n                        onclick=\'<%="moveDownSelected()"%>\'></button>\n            </div>\n        </div>\n\n    </div>\n\n    <div class="modal-footer">\n        <div class="modal-footer_actions-buttons">\n            <div class="action-button-w">\n                <button class="action-button __reset"\n                        onclick=\'<%="resetChanges()"%>\'>\n                    Reset to column defaults\n                </button>\n            </div>\n            <div class="action-buttons_nessesary">\n                <div class="action-button-w">\n                    <button class="action-button __cancel"\n                            onclick=\'<%="cancelChanges()"%>\'>\n                        Cancel\n                    </button>\n                </div>\n                <div class="action-button-w">\n                    <button class="action-button __ok"\n                            onclick=\'<%="applyChanges()"%>\'>OK</button>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n',
        filename: "."
    };
    function rethrow(err, str, filename, lineno) {
        var lines = str.split("\n"), start = Math.max(lineno - 3, 0), end = Math.min(lines.length, lineno + 3);
        var context = lines.slice(start, end).map(function(line, i) {
            var curr = i + start + 1;
            return (curr == lineno ? " >> " : "    ") + curr + "| " + line;
        }).join("\n");
        err.path = filename;
        err.message = (filename || "ejs") + ":" + lineno + "\n" + context + "\n\n" + err.message;
        throw err;
    }
    try {
        var buf = [];
        with (locals || {}) {
            (function() {
                buf.push('<div class="modal-content" style=\'display:', escape((__stack.lineno = 1, isDisplay ? "block" : "none")), '\'>\n    <div class="modal-header">\n\n        <div class="modal-header_close-w">\n            <div class="modal-header_close_icon"></div>\n            <button class="modal-header_close"\n                    onclick=\'', escape((__stack.lineno = 7, "closeModel()")), '\'>\n            </button>\n        </div>\n        <div class="modal-header_title">\n            <div class="modal-header_title-text">\n                Personalize List Columns\n            </div>\n        </div>\n    </div>\n\n    <div class="modal-body">\n        <div class="modal-body_left-selector">\n            <span class="sleshselect-title">Available</span>\n            <select class="slushselect"\n                    id="slush_left"\n                    multiple="yes"\n                    name="slush_left"\n                    size="10">\n                ');
                __stack.lineno = 25;
                for (var i = 0; i < availableSettings.length; i++) {
                    buf.push("\n                    <option value=", escape((__stack.lineno = 26, availableSettings[i].value)), ">\n                        ", escape((__stack.lineno = 27, availableSettings[i].label)), "\n                    </option>\n                ");
                    __stack.lineno = 29;
                }
                buf.push('\n            </select>\n        </div>\n        <div class="modal-body_move-buttons">\n\n            <div class="modal-body_move-w">\n                <div class="modal-body_move_icon __right"></div>\n                <button class="modal-body_move"\n                        onclick=\'', escape((__stack.lineno = 37, "moveRightSelectedItems()")), '\'></button>\n            </div>\n            <div class="modal-body_move-w">\n                <div class="modal-body_move_icon  __left"></div>\n                <button class="modal-body_move"\n                        onclick=\'', escape((__stack.lineno = 42, "moveLeftSelectedItems()")), '\'></button>\n            </div>\n        </div>\n        <div class="modal-body_right-selector">\n            <span class="sleshselect-title">Selected</span>\n            <select class="slushselect"\n                    id="slush_right"\n                    multiple="yes"\n                    name="slush_right"\n                    size="10">\n                ');
                __stack.lineno = 52;
                for (var i = 0; i < defaultSelectedSettings.length; i++) {
                    buf.push("\n                    <option value=", escape((__stack.lineno = 53, defaultSelectedSettings[i].value)), ">\n                        ", escape((__stack.lineno = 54, defaultSelectedSettings[i].label)), "\n                    </option>\n                ");
                    __stack.lineno = 56;
                }
                buf.push('\n            </select>\n        </div>\n\n        <div class="modal-body_move-buttons">\n            <div class="modal-body_move-w">\n                <div class="modal-body_move_icon  __top"></div>\n                <button class="modal-body_move"\n                        onclick=\'', escape((__stack.lineno = 64, "moveUpSelected()")), '\'></button>\n            </div>\n            <div class="modal-body_move-w">\n                <div class="modal-body_move_icon __bottom"></div>\n                <button class="modal-body_move"\n                        onclick=\'', escape((__stack.lineno = 69, "moveDownSelected()")), '\'></button>\n            </div>\n        </div>\n\n    </div>\n\n    <div class="modal-footer">\n        <div class="modal-footer_actions-buttons">\n            <div class="action-button-w">\n                <button class="action-button __reset"\n                        onclick=\'', escape((__stack.lineno = 79, "resetChanges()")), '\'>\n                    Reset to column defaults\n                </button>\n            </div>\n            <div class="action-buttons_nessesary">\n                <div class="action-button-w">\n                    <button class="action-button __cancel"\n                            onclick=\'', escape((__stack.lineno = 86, "cancelChanges()")), '\'>\n                        Cancel\n                    </button>\n                </div>\n                <div class="action-button-w">\n                    <button class="action-button __ok"\n                            onclick=\'', escape((__stack.lineno = 92, "applyChanges()")), "'>OK</button>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n");
            })();
        }
        return buf.join("");
    } catch (err) {
        rethrow(err, __stack.input, __stack.filename, __stack.lineno);
    }
}

/***/ }),
/* 7 */
/***/ (function(module, exports) {

function setModel(closeModelFunc,
                  applyChangesFunc,
                  cancelChangesFunc,
                  resetChangesFunc,
                  moveDownSelectedFunc,
                  moveUpSelectedFunc,
                  moveRightSelectedItemsFunc,
                  moveLeftSelectedItemsFunc,
                  isDisplay,
                  availableSettings,
                  defaultSelectedSettings) {

    window.closeModel = closeModelFunc;
    window.applyChanges = applyChangesFunc;
    window.cancelChanges = cancelChangesFunc;
    window.resetChanges = resetChangesFunc;
    window.moveUpSelected = moveUpSelectedFunc;
    window.moveDownSelected = moveDownSelectedFunc;
    window.moveRightSelectedItems = moveRightSelectedItemsFunc;
    window.moveLeftSelectedItems = moveLeftSelectedItemsFunc;

    return {
        "moveUpSelected":
            (moveUpSelectedFunc === undefined) ?
                null :
                window.moveUpSelectedFunc,
        "moveDownSelected":
            (moveDownSelectedFunc === undefined) ?
                null :
                window.moveDownSelectedFunc,
        "moveRightSelectedItems":
            (moveRightSelectedItemsFunc === undefined) ?
                null :
                window.moveRightSelectedItemsFunc,
        "moveLeftSelectedItems":
            (moveLeftSelectedItemsFunc === undefined) ?
                null :
                window.moveLeftSelectedItemsFunc,
        "applyChanges":
            (applyChangesFunc === undefined) ?
                null :
                window.applyChangesFunc,
        "cancelChanges":
            (cancelChangesFunc === undefined) ?
                null :
                window.cancelChangesFunc,
        "resetChanges":
            (closeModelFunc === undefined) ?
                null :
                window.resetChangesFunc,
        "closeModel":
            (closeModelFunc === undefined) ?
                null :
                window.closeModelFunc,
        "isDisplay":
            (isDisplay === undefined) ?
                true :
                isDisplay,
        "availableSettings":
            (availableSettings === undefined) ?
                [] :
                availableSettings,
        "defaultSelectedSettings":
            (defaultSelectedSettings === undefined) ?
                [] :
                defaultSelectedSettings
    }
}

module.exports = setModel;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var closeModel = __webpack_require__(4);

function cancelChanges() {
    closeModel();
}

module.exports = cancelChanges;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var closeModel = __webpack_require__(4);
var getOptionModel = __webpack_require__(0);

var optionTemplate = __webpack_require__(2);

function applyChages(callback) {
    closeModel();
    var rightSelectorOptions = document.querySelector(
        "#slush_right").options;
    var leftSelectorOptions = document.querySelector(
        "#slush_left").options;
    var availableOptions = [];
    var selectedOptions = [];

    Array.prototype.forEach.call(
        leftSelectorOptions,
        function (option) {
            availableOptions.push(getOptionModel(
                option.value,
                option.label
            ))
        });

    Array.prototype.forEach.call(
        rightSelectorOptions,
        function (option) {
            selectedOptions.push(getOptionModel(
                option.value,
                option.label
            ))
        });

    callback(availableOptions, selectedOptions)
}

module.exports = applyChages;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var optionTemplate = __webpack_require__(2);
var createDomElement = __webpack_require__(1);
var getOptionModel = __webpack_require__(0);

function resetChanges(avalableOptions, selectedOptions) {
    var rightSelector = document.querySelector(
        "#slush_right");
    var leftSelector = document.querySelector(
        "#slush_left");
    rightSelector.innerHTML = "";
    leftSelector.innerHTML = "";

    avalableOptions.forEach(function (option) {
        leftSelector.appendChild(
            createDomElement(
                optionTemplate(
                    getOptionModel(option.value, option.label)
                )
            ))
    })

    selectedOptions.forEach(function (option) {
        rightSelector.appendChild(
            createDomElement(
                optionTemplate(
                    getOptionModel(option.value, option.label)
                )
            ))
    })
}

module.exports = resetChanges;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var SelectorsIds = __webpack_require__(3);

function moveDownSelected() {
    var rightSelectorOptions = document.querySelector(
        SelectorsIds.RIGHT_SELECTOR_ID).options;
    var rightSelector = document.querySelector(
        SelectorsIds.RIGHT_SELECTOR_ID);
    var el1, el2, index;

    for (index = rightSelectorOptions.length - 1; index >= 0; index--) {
        if (index + 1 < rightSelectorOptions.length && rightSelectorOptions[index].selected) {
            el1 = rightSelectorOptions[index].cloneNode(true);
            el2 = rightSelectorOptions[index + 1].cloneNode(true);
            rightSelector.replaceChild(el2, rightSelectorOptions[index]);
            rightSelector.replaceChild(el1, rightSelectorOptions[index + 1]);
            rightSelectorOptions[index + 1].selected = true;
        }
    }
}

module.exports = moveDownSelected;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var SelectorsIds = __webpack_require__(3);

function moveUpSelected() {
    var rightSelectorOptions = document.querySelector(
        SelectorsIds.RIGHT_SELECTOR_ID).options;
    var rightSelector = document.querySelector(
        SelectorsIds.RIGHT_SELECTOR_ID);
    var el1, el2;
    Array.prototype.forEach.call(
        rightSelectorOptions,
        function (option, index, array) {
            if (index - 1 > -1 && option.selected) {
                el1 = option.cloneNode(true);
                el2 = array[index - 1].cloneNode(true);
                rightSelector.replaceChild(el2, option);
                rightSelector.replaceChild(el1, array[index - 1]);
                array[index - 1].selected = true;
            }
        });
}

module.exports = moveUpSelected;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var optionTemplate = __webpack_require__(2);
var createDomElement = __webpack_require__(1);
var getOptionModel = __webpack_require__(0);

var SelectorsIds = __webpack_require__(3);

function moveLeftSelectedItems() {
    var rightSelectorOptions = document.querySelector(
        SelectorsIds.RIGHT_SELECTOR_ID).options;
    var leftSelector = document.querySelector(
        SelectorsIds.LEFT_SELECTOR_ID);
    var rightSelector = document.querySelector(
        SelectorsIds.RIGHT_SELECTOR_ID);

    var selectedOptions = Array.prototype.filter.call(
        rightSelectorOptions,
        function (option) {
            return option.selected
        });

    selectedOptions.forEach(function (option) {
        leftSelector.appendChild(
            createDomElement(
                optionTemplate(
                    getOptionModel(option.value, option.label)
                )
            )
        );
        rightSelector.removeChild(option)
    })
}

module.exports = moveLeftSelectedItems


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var optionTemplate = __webpack_require__(2);
var createDomElement = __webpack_require__(1);
var getOptionModel = __webpack_require__(0);

var SelectorsIds = __webpack_require__(3);

function moveRightSelectedItems() {
    var leftSelectorOptions = document.querySelector(
        SelectorsIds.LEFT_SELECTOR_ID).options;
    var leftSelector = document.querySelector(
        SelectorsIds.LEFT_SELECTOR_ID);
    var rightSelector = document.querySelector(
        SelectorsIds.RIGHT_SELECTOR_ID);

    var selectedOptions = Array.prototype.filter.call(
        leftSelectorOptions,
        function (option) {
            return option.selected
        });

    selectedOptions.forEach(function (option) {
        rightSelector.appendChild(
            createDomElement(
                optionTemplate(
                    getOptionModel(option.value, option.label)
                )
            )
        );
        leftSelector.removeChild(option)

    })
}

module.exports = moveRightSelectedItems;


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map