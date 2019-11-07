import React, { Component } from 'react';
import { Map, List } from 'immutable';
import keys from 'lodash-es/keys';
import { EditorState, AtomicBlockUtils, genKey } from 'draft-js';
import clsx from 'clsx';
import emojione from 'emojione';
import PropTypes from 'prop-types';
import strategy from 'emojione/emoji.json';
import FaSmileO from 'react-icons/lib/fa/smile-o';
import FaPaw from 'react-icons/lib/fa/paw';
import FaCutlery from 'react-icons/lib/fa/cutlery';
import FaFutbolO from 'react-icons/lib/fa/futbol-o';
import FaPlane from 'react-icons/lib/fa/plane';
import FaBell from 'react-icons/lib/fa/bell';
import FaHeart from 'react-icons/lib/fa/heart';
import FaFlag from 'react-icons/lib/fa/flag';
import { Scrollbars } from 'react-custom-scrollbars';
import toStyle from 'to-style';
import findWithRegex from 'find-with-regex';

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(source, true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

var Emoji = function Emoji(_ref) {
  var _ref$theme = _ref.theme,
      theme = _ref$theme === void 0 ? {} : _ref$theme,
      cacheBustParam = _ref.cacheBustParam,
      imagePath = _ref.imagePath,
      imageType = _ref.imageType,
      className = _ref.className,
      decoratedText = _ref.decoratedText,
      useNativeArt = _ref.useNativeArt,
      props = _objectWithoutProperties(_ref, ["theme", "cacheBustParam", "imagePath", "imageType", "className", "decoratedText", "useNativeArt"]);

  var shortName = emojione.toShort(decoratedText);
  var emojiDisplay = null;

  if (useNativeArt === true) {
    emojiDisplay = React.createElement("span", {
      title: emojione.toShort(decoratedText)
    }, props.children);
  } else {
    // short name to image url code steal from emojione source code
    var shortNameForImage = emojione.emojioneList[shortName].unicode[emojione.emojioneList[shortName].unicode.length - 1];
    var backgroundImage = "url(".concat(imagePath).concat(shortNameForImage, ".").concat(imageType).concat(cacheBustParam, ")");
    var combinedClassName = clsx(theme.emoji, className);
    emojiDisplay = React.createElement("span", {
      className: combinedClassName,
      title: emojione.toShort(decoratedText),
      style: {
        backgroundImage: backgroundImage
      }
    }, props.children);
  }

  return emojiDisplay;
};

var newEmojiListWithOutPriorityList = function newEmojiListWithOutPriorityList(priorityList) {
  var list = {};

  for (var key in emojione.emojioneList) {
    // eslint-disable-line no-restricted-syntax
    if (priorityList.hasOwnProperty(key)) {
      // eslint-disable-line no-prototype-builtins
      continue; // eslint-disable-line no-continue
    }

    list[key] = emojione.emojioneList[key].unicode;
  }

  return _objectSpread2({}, priorityList, {}, list);
};

var emojiList = {};

emojiList.setPriorityList = function (newPriorityList) {
  // re-generate emojiList when set PriorityList
  emojiList.list = newEmojiListWithOutPriorityList(newPriorityList);
}; // init emojiList


var priorityList = {
  ':thumbsup:': ['1f44d'],
  ':smile:': ['1f604'],
  ':heart:': ['2764-fe0f', '2764'],
  ':ok_hand:': ['1f44c'],
  ':joy:': ['1f602'],
  ':tada:': ['1f389'],
  ':see_no_evil:': ['1f648'],
  ':raised_hands:': ['1f64c'],
  ':100:': ['1f4af']
};
emojiList.setPriorityList(priorityList);

/* eslint-disable */
// Original can be found here: https://github.com/Ranks/emojione
var convertShortNameToUnicode = function convertShortNameToUnicode(unicode) {
  if (unicode.indexOf('-') > -1) {
    var parts = [];
    var s = unicode.split('-');

    for (var i = 0; i < s.length; i++) {
      var part = parseInt(s[i], 16);

      if (part >= 0x10000 && part <= 0x10ffff) {
        var hi = Math.floor((part - 0x10000) / 0x400) + 0xd800;
        var lo = (part - 0x10000) % 0x400 + 0xdc00;
        part = String.fromCharCode(hi) + String.fromCharCode(lo);
      } else {
        part = String.fromCharCode(part);
      }

      parts.push(part);
    }

    return parts.join('');
  } else {
    var s = parseInt(unicode, 16);

    if (s >= 0x10000 && s <= 0x10ffff) {
      var hi = Math.floor((s - 0x10000) / 0x400) + 0xd800;
      var lo = (s - 0x10000) % 0x400 + 0xdc00;
      return String.fromCharCode(hi) + String.fromCharCode(lo);
    } else {
      return String.fromCharCode(s);
    }
  }
};

var Entry =
/*#__PURE__*/
function (_Component) {
  _inherits(Entry, _Component);

  function Entry(props) {
    var _this;

    _classCallCheck(this, Entry);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Entry).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "onMouseUp", function () {
      if (_this.mouseDown) {
        _this.mouseDown = false;

        _this.props.onEmojiSelect(_this.props.emoji);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onMouseDown", function (event) {
      // Note: important to avoid a content edit change
      event.preventDefault();
      _this.mouseDown = true;
    });

    _defineProperty(_assertThisInitialized(_this), "onMouseEnter", function () {
      _this.props.onEmojiFocus(_this.props.index);
    });

    _this.mouseDown = false;
    return _this;
  }

  _createClass(Entry, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.mouseDown = false;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          _this$props$theme = _this$props.theme,
          theme = _this$props$theme === void 0 ? {} : _this$props$theme,
          imagePath = _this$props.imagePath,
          imageType = _this$props.imageType,
          cacheBustParam = _this$props.cacheBustParam,
          useNativeArt = _this$props.useNativeArt,
          isFocused = _this$props.isFocused,
          id = _this$props.id;
      var className = isFocused ? theme.emojiSuggestionsEntryFocused : theme.emojiSuggestionsEntry;
      var emojiDisplay = null;

      if (useNativeArt === true) {
        var unicode = emojiList.list[this.props.emoji][0];
        emojiDisplay = convertShortNameToUnicode(unicode);
      } else {
        // short name to image url code steal from emojione source code
        var shortNameForImage = emojione.emojioneList[this.props.emoji].unicode[emojione.emojioneList[this.props.emoji].unicode.length - 1];
        var fullImagePath = "".concat(imagePath).concat(shortNameForImage, ".").concat(imageType).concat(cacheBustParam);
        emojiDisplay = React.createElement("img", {
          src: fullImagePath,
          className: theme.emojiSuggestionsEntryIcon,
          role: "presentation"
        });
      }

      return React.createElement("div", {
        className: className,
        onMouseDown: this.onMouseDown,
        onMouseUp: this.onMouseUp,
        onMouseEnter: this.onMouseEnter,
        role: "option",
        id: id,
        "aria-selected": isFocused ? 'true' : null
      }, emojiDisplay, React.createElement("span", {
        className: theme.emojiSuggestionsEntryText
      }, this.props.emoji));
    }
  }]);

  return Entry;
}(Component);

var addEmoji = function addEmoji(editorState, emojiShortName) {
  var objEmojji = new DOMParser().parseFromString(emojione.toImage(emojiShortName), "text/xml");
  var urlType = 'IMAGE';
  var contentState = editorState.getCurrentContent();
  var contentStateWithEntity = contentState.createEntity(urlType, 'IMMUTABLE', {
    src: objEmojji.firstChild.getAttribute("src"),
    alt: objEmojji.firstChild.getAttribute("alt")
  });
  var entityKey = contentStateWithEntity.getLastCreatedEntityKey();
  var newEditorState = AtomicBlockUtils.insertAtomicBlock(editorState, entityKey, ' ');
  return EditorState.forceSelection(newEditorState, newEditorState.getCurrentContent().getSelectionAfter());
};

var getWordAt = function getWordAt(string, position) {
  // Perform type conversions.
  var str = String(string); // eslint-disable-next-line no-bitwise

  var pos = Number(position) >>> 0; // Search for the word's beginning and end.

  var left = str.slice(0, pos + 1).search(/\S+$/);
  var right = str.slice(pos).search(/\s/); // The last word in the string is a special case.

  if (right < 0) {
    return {
      word: str.slice(left),
      begin: left,
      end: str.length
    };
  } // Return the word, using the located bounds to extract it from the string.


  return {
    word: str.slice(left, right + pos),
    begin: left,
    end: right + pos
  };
};

var getSearchText = function getSearchText(editorState, selection) {
  var anchorKey = selection.getAnchorKey();
  var anchorOffset = selection.getAnchorOffset() - 1;
  var currentContent = editorState.getCurrentContent();
  var currentBlock = currentContent.getBlockForKey(anchorKey);
  var blockText = currentBlock.getText();
  return getWordAt(blockText, anchorOffset);
};

var decodeOffsetKey = function decodeOffsetKey(offsetKey) {
  var _offsetKey$split = offsetKey.split('-'),
      _offsetKey$split2 = _slicedToArray(_offsetKey$split, 3),
      blockKey = _offsetKey$split2[0],
      decoratorKey = _offsetKey$split2[1],
      leafKey = _offsetKey$split2[2];

  return {
    blockKey: blockKey,
    decoratorKey: parseInt(decoratorKey, 10),
    leafKey: parseInt(leafKey, 10)
  };
};

var EmojiSuggestions =
/*#__PURE__*/
function (_Component) {
  _inherits(EmojiSuggestions, _Component);

  function EmojiSuggestions() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, EmojiSuggestions);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(EmojiSuggestions)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      isActive: false,
      focusedOptionIndex: 0
    });

    _defineProperty(_assertThisInitialized(_this), "onEditorStateChange", function (editorState) {
      var searches = _this.props.store.getAllSearches(); // if no search portal is active there is no need to show the popover


      if (searches.size === 0) {
        return editorState;
      }

      var removeList = function removeList() {
        _this.props.store.resetEscapedSearch();

        _this.closeDropdown();

        return editorState;
      }; // get the current selection


      var selection = editorState.getSelection();
      var anchorKey = selection.getAnchorKey();
      var anchorOffset = selection.getAnchorOffset(); // the list should not be visible if a range is selected or the editor has no focus

      if (!selection.isCollapsed() || !selection.getHasFocus()) return removeList(); // identify the start & end positon of each search-text

      var offsetDetails = searches.map(function (offsetKey) {
        return decodeOffsetKey(offsetKey);
      }); // a leave can be empty when it is removed due e.g. using backspace

      var leaves = offsetDetails.filter(function (_ref) {
        var blockKey = _ref.blockKey;
        return blockKey === anchorKey;
      }).map(function (_ref2) {
        var blockKey = _ref2.blockKey,
            decoratorKey = _ref2.decoratorKey,
            leafKey = _ref2.leafKey;
        return editorState.getBlockTree(blockKey).getIn([decoratorKey, 'leaves', leafKey]);
      }); // if all leaves are undefined the popover should be removed

      if (leaves.every(function (leave) {
        return leave === undefined;
      })) {
        return removeList();
      } // Checks that the cursor is after the @ character but still somewhere in
      // the word (search term). Setting it to allow the cursor to be left of
      // the @ causes troubles due selection confusion.


      var plainText = editorState.getCurrentContent().getPlainText();
      var selectionIsInsideWord = leaves.filter(function (leave) {
        return leave !== undefined;
      }).map(function (_ref3) {
        var start = _ref3.start,
            end = _ref3.end;
        return start === 0 && anchorOffset === 1 && plainText.charAt(anchorOffset) !== ':' && /(\s|^):[\w]*/.test(plainText) && anchorOffset <= end || // : is the first character
        anchorOffset > start + 1 && anchorOffset <= end
        /*: is in the text or at the end*/
        ;
      });
      if (selectionIsInsideWord.every(function (isInside) {
        return isInside === false;
      })) return removeList();
      _this.activeOffsetKey = selectionIsInsideWord.filter(function (value) {
        return value === true;
      }).keySeq().first();

      _this.onSearchChange(editorState, selection); // make sure the escaped search is reseted in the cursor since the user
      // already switched to another emoji search


      if (!_this.props.store.isEscaped(_this.activeOffsetKey)) {
        _this.props.store.resetEscapedSearch();
      } // If none of the above triggered to close the window, it's safe to assume
      // the dropdown should be open. This is useful when a user focuses on another
      // input field and then comes back: the dropdown will again.


      if (!_this.state.isActive && !_this.props.store.isEscaped(_this.activeOffsetKey)) {
        _this.openDropdown();
      } // makes sure the focused index is reseted every time a new selection opens
      // or the selection was moved to another emoji search


      if (_this.lastSelectionIsInsideWord === undefined || !selectionIsInsideWord.equals(_this.lastSelectionIsInsideWord)) {
        _this.setState({
          focusedOptionIndex: 0
        });
      }

      _this.lastSelectionIsInsideWord = selectionIsInsideWord;
      return editorState;
    });

    _defineProperty(_assertThisInitialized(_this), "onSearchChange", function (editorState, selection) {
      var _getSearchText = getSearchText(editorState, selection),
          word = _getSearchText.word;

      var searchValue = word.substring(1, word.length);

      if (_this.lastSearchValue !== searchValue && typeof _this.props.onSearchChange === 'function') {
        _this.lastSearchValue = searchValue;

        _this.props.onSearchChange({
          value: searchValue
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onDownArrow", function (keyboardEvent) {
      keyboardEvent.preventDefault();
      var newIndex = _this.state.focusedOptionIndex + 1;

      _this.onEmojiFocus(newIndex >= _this.filteredEmojis.size ? 0 : newIndex);
    });

    _defineProperty(_assertThisInitialized(_this), "onTab", function (keyboardEvent) {
      keyboardEvent.preventDefault();

      _this.commitSelection();
    });

    _defineProperty(_assertThisInitialized(_this), "onUpArrow", function (keyboardEvent) {
      keyboardEvent.preventDefault();

      if (_this.filteredEmojis.size > 0) {
        var newIndex = _this.state.focusedOptionIndex - 1;

        _this.onEmojiFocus(Math.max(newIndex, 0));
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onEscape", function (keyboardEvent) {
      keyboardEvent.preventDefault();

      var activeOffsetKey = _this.lastSelectionIsInsideWord.filter(function (value) {
        return value === true;
      }).keySeq().first();

      _this.props.store.escapeSearch(activeOffsetKey);

      _this.closeDropdown(); // to force a re-render of the outer component to change the aria props


      _this.props.store.setEditorState(_this.props.store.getEditorState());
    });

    _defineProperty(_assertThisInitialized(_this), "onEmojiSelect", function (emoji) {
      _this.closeDropdown();

      var newEditorState = addEmoji(_this.props.store.getEditorState(), emoji);

      _this.props.store.setEditorState(newEditorState);
    });

    _defineProperty(_assertThisInitialized(_this), "onEmojiFocus", function (index) {
      var descendant = "emoji-option-".concat(_this.key, "-").concat(index);
      _this.props.ariaProps.ariaActiveDescendantID = descendant;

      _this.setState({
        focusedOptionIndex: index
      }); // to force a re-render of the outer component to change the aria props


      _this.props.store.setEditorState(_this.props.store.getEditorState());
    });

    _defineProperty(_assertThisInitialized(_this), "getEmojisForFilter", function () {
      var selection = _this.props.store.getEditorState().getSelection();

      var _getSearchText2 = getSearchText(_this.props.store.getEditorState(), selection),
          word = _getSearchText2.word;

      var emojiValue = word.substring(1, word.length).toLowerCase();

      var filteredValues = _this.props.shortNames.filter(function (emojiShortName) {
        return !emojiValue || emojiShortName.indexOf(emojiValue) > -1;
      });

      var size = filteredValues.size < 9 ? filteredValues.size : 9;
      return filteredValues.setSize(size);
    });

    _defineProperty(_assertThisInitialized(_this), "commitSelection", function () {
      _this.onEmojiSelect(_this.filteredEmojis.get(_this.state.focusedOptionIndex));

      return 'handled';
    });

    _defineProperty(_assertThisInitialized(_this), "openDropdown", function () {
      // This is a really nasty way of attaching & releasing the key related functions.
      // It assumes that the keyFunctions object will not loose its reference and
      // by this we can replace inner parameters spread over different modules.
      // This better be some registering & unregistering logic. PRs are welcome :)
      _this.props.callbacks.handleReturn = _this.commitSelection;

      _this.props.callbacks.keyBindingFn = function (keyboardEvent) {
        // arrow down
        if (keyboardEvent.keyCode === 40) {
          _this.onDownArrow(keyboardEvent);
        } // arrow up


        if (keyboardEvent.keyCode === 38) {
          _this.onUpArrow(keyboardEvent);
        } // escape


        if (keyboardEvent.keyCode === 27) {
          _this.onEscape(keyboardEvent);
        } // tab


        if (keyboardEvent.keyCode === 9) {
          _this.onTab(keyboardEvent);
        }
      };

      var descendant = "emoji-option-".concat(_this.key, "-").concat(_this.state.focusedOptionIndex);
      _this.props.ariaProps.ariaActiveDescendantID = descendant;
      _this.props.ariaProps.ariaOwneeID = "emojis-list-".concat(_this.key);
      _this.props.ariaProps.ariaHasPopup = 'true';
      _this.props.ariaProps.ariaExpanded = true;

      _this.setState({
        isActive: true
      });

      if (_this.props.onOpen) {
        _this.props.onOpen();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "closeDropdown", function () {
      // make sure none of these callbacks are triggered
      _this.props.callbacks.keyBindingFn = undefined;
      _this.props.callbacks.handleReturn = undefined;
      _this.props.ariaProps.ariaHasPopup = 'false';
      _this.props.ariaProps.ariaExpanded = false;
      _this.props.ariaProps.ariaActiveDescendantID = undefined;
      _this.props.ariaProps.ariaOwneeID = undefined;

      _this.setState({
        isActive: false
      });

      if (_this.props.onClose) {
        _this.props.onClose();
      }
    });

    return _this;
  }

  _createClass(EmojiSuggestions, [{
    key: "UNSAFE_componentWillMount",
    value: function UNSAFE_componentWillMount() {
      this.key = genKey();
      this.props.callbacks.onChange = this.onEditorStateChange;
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var _this2 = this;

      if (this.popover) {
        // In case the list shrinks there should be still an option focused.
        // Note: this might run multiple times and deduct 1 until the condition is
        // not fullfilled anymore.
        var size = this.filteredEmojis.size;

        if (size > 0 && this.state.focusedOptionIndex >= size) {
          this.setState({
            focusedOptionIndex: size - 1
          });
        }

        if (size <= 0) {
          this.closeDropdown();
        }

        var decoratorRect = this.props.store.getPortalClientRect(this.activeOffsetKey);
        var newStyles = this.props.positionSuggestions({
          decoratorRect: decoratorRect,
          prevProps: prevProps,
          prevState: prevState,
          props: this.props,
          state: this.state,
          filteredEmojis: this.filteredEmojis,
          popover: this.popover
        });
        Object.keys(newStyles).forEach(function (key) {
          _this2.popover.style[key] = newStyles[key];
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.props.callbacks.onChange = undefined;
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      if (!this.state.isActive) {
        return null;
      }

      this.filteredEmojis = this.getEmojisForFilter();

      var _this$props = this.props,
          _this$props$theme = _this$props.theme,
          theme = _this$props$theme === void 0 ? {} : _this$props$theme,
          cacheBustParam = _this$props.cacheBustParam,
          imagePath = _this$props.imagePath,
          imageType = _this$props.imageType,
          ariaProps = _this$props.ariaProps,
          callbacks = _this$props.callbacks,
          onClose = _this$props.onClose,
          onOpen = _this$props.onOpen,
          onSearchChange = _this$props.onSearchChange,
          positionSuggestions = _this$props.positionSuggestions,
          shortNames = _this$props.shortNames,
          store = _this$props.store,
          useNativeArt = _this$props.useNativeArt,
          restProps = _objectWithoutProperties(_this$props, ["theme", "cacheBustParam", "imagePath", "imageType", "ariaProps", "callbacks", "onClose", "onOpen", "onSearchChange", "positionSuggestions", "shortNames", "store", "useNativeArt"]);

      return React.createElement("div", _extends({}, restProps, {
        className: theme.emojiSuggestions,
        role: "listbox",
        id: "emojis-list-".concat(this.key),
        ref: function ref(element) {
          _this3.popover = element;
        }
      }), this.filteredEmojis.map(function (emoji, index) {
        return React.createElement(Entry, {
          key: emoji,
          onEmojiSelect: _this3.onEmojiSelect,
          onEmojiFocus: _this3.onEmojiFocus,
          isFocused: _this3.state.focusedOptionIndex === index,
          emoji: emoji,
          index: index,
          id: "emoji-option-".concat(_this3.key, "-").concat(index),
          theme: theme,
          imagePath: imagePath,
          imageType: imageType,
          cacheBustParam: cacheBustParam,
          useNativeArt: useNativeArt
        });
      }).toJS());
    }
  }]);

  return EmojiSuggestions;
}(Component);

var EmojiSuggestionsPortal =
/*#__PURE__*/
function (_Component) {
  _inherits(EmojiSuggestionsPortal, _Component);

  function EmojiSuggestionsPortal(props) {
    var _this;

    _classCallCheck(this, EmojiSuggestionsPortal);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(EmojiSuggestionsPortal).call(this, props));

    _this.searchPortalRef = function (element) {
      _this.searchPortal = element;
    };

    return _this;
  }

  _createClass(EmojiSuggestionsPortal, [{
    key: "UNSAFE_componentWillMount",
    value: function UNSAFE_componentWillMount() {
      this.props.store.register(this.props.offsetKey);
      this.updatePortalClientRect(this.props); // trigger a re-render so the EmojiSuggestions becomes active

      this.props.setEditorState(this.props.getEditorState());
    }
  }, {
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      this.updatePortalClientRect(nextProps);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.props.store.unregister(this.props.offsetKey);
    }
  }, {
    key: "updatePortalClientRect",
    value: function updatePortalClientRect(props) {
      var _this2 = this;

      this.props.store.updatePortalClientRect(props.offsetKey, function () {
        return _this2.searchPortal.getBoundingClientRect();
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement("span", {
        className: this.key,
        ref: this.searchPortalRef
      }, this.props.children);
    }
  }]);

  return EmojiSuggestionsPortal;
}(Component);

/* Idea from https://github.com/tommoor/emojione-picker */
function createEmojisFromStrategy(strategy) {
  var emojis = {}; // categorise and nest emoji
  // sort ensures that modifiers appear unmodified keys

  var keys = Object.keys(strategy);
  keys.forEach(function (key) {
    var value = strategy[key]; // skip unknown categories

    if (value.category !== 'modifier') {
      if (!emojis[value.category]) emojis[value.category] = {};
      var match = key.match(/(.*?)_tone(.*?)$/);

      if (match) {
        // this check is to stop the plugin from failing in the case that the
        // emoji strategy miscategorizes tones - which was the case here:
        // https://github.com/Ranks/emojione/pull/330
        var unmodifiedEmojiExists = !!emojis[value.category][match[1]];

        if (unmodifiedEmojiExists) {
          emojis[value.category][match[1]][match[2]] = value.shortname;
        }
      } else {
        emojis[value.category][key] = [value.shortname];
      }
    }
  });
  return emojis;
}

var defaultEmojiGroups = [{
  title: 'People',
  icon: React.createElement(FaSmileO, {
    style: {
      verticalAlign: ''
    }
  }),
  categories: ['people']
}, {
  title: 'Nature',
  icon: React.createElement(FaPaw, {
    style: {
      verticalAlign: ''
    }
  }),
  categories: ['nature']
}, {
  title: 'Food & Drink',
  icon: React.createElement(FaCutlery, {
    style: {
      verticalAlign: ''
    }
  }),
  categories: ['food']
}, {
  title: 'Activity',
  icon: React.createElement(FaFutbolO, {
    style: {
      verticalAlign: ''
    }
  }),
  categories: ['activity']
}, {
  title: 'Travel & Places',
  icon: React.createElement(FaPlane, {
    style: {
      verticalAlign: ''
    }
  }),
  categories: ['travel']
}, {
  title: 'Objects',
  icon: React.createElement(FaBell, {
    style: {
      verticalAlign: ''
    }
  }),
  categories: ['objects']
}, {
  title: 'Symbols',
  icon: React.createElement(FaHeart, {
    style: {
      verticalAlign: ''
    }
  }),
  categories: ['symbols']
}, {
  title: 'Flags',
  icon: React.createElement(FaFlag, {
    style: {
      verticalAlign: ''
    }
  }),
  categories: ['flags']
}];

var Entry$1 =
/*#__PURE__*/
function (_Component) {
  _inherits(Entry, _Component);

  function Entry() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Entry);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Entry)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      isFocused: false
    });

    _defineProperty(_assertThisInitialized(_this), "onMouseUp", function () {
      if (_this.mouseDown) {
        _this.mouseDown = false;

        _this.props.onEmojiSelect(_this.props.emoji);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onMouseDown", function () {
      _this.mouseDown = true;

      _this.props.onEmojiMouseDown(_assertThisInitialized(_this), _this.props.toneSet);
    });

    _defineProperty(_assertThisInitialized(_this), "onMouseEnter", function () {
      if (!_this.props.checkMouseDown()) {
        _this.setState({
          isFocused: true
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onMouseLeave", function () {
      if (!_this.props.checkMouseDown()) {
        _this.setState({
          isFocused: false
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "deselect", function () {
      _this.setState({
        isFocused: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "mouseDown", _this.props.mouseDown);

    return _this;
  }

  _createClass(Entry, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          cacheBustParam = _this$props.cacheBustParam,
          imagePath = _this$props.imagePath,
          imageType = _this$props.imageType,
          _this$props$theme = _this$props.theme,
          theme = _this$props$theme === void 0 ? {} : _this$props$theme,
          emoji = _this$props.emoji,
          useNativeArt = _this$props.useNativeArt;
      var isFocused = this.state.isFocused;
      var emojiDisplay = null;

      if (useNativeArt === true) {
        var unicode = emojiList.list[emoji][0];
        emojiDisplay = convertShortNameToUnicode(unicode);
      } else {
        // short name to image url code steal from emojione source code
        var shortNameForImage = emojione.emojioneList[emoji].unicode[emojione.emojioneList[emoji].unicode.length - 1];
        var fullImagePath = "".concat(imagePath).concat(shortNameForImage, ".").concat(imageType).concat(cacheBustParam);
        emojiDisplay = React.createElement("img", {
          src: fullImagePath,
          className: theme.emojiSelectPopoverEntryIcon,
          draggable: false,
          role: "presentation"
        });
      }

      return React.createElement("button", {
        type: "button",
        className: isFocused ? theme.emojiSelectPopoverEntryFocused : theme.emojiSelectPopoverEntry,
        onMouseDown: this.onMouseDown,
        onMouseEnter: this.onMouseEnter,
        onMouseLeave: this.onMouseLeave,
        onMouseUp: this.onMouseUp,
        ref: function ref(element) {
          _this2.button = element;
        }
      }, emojiDisplay);
    }
  }]);

  return Entry;
}(Component);

_defineProperty(Entry$1, "propTypes", {
  cacheBustParam: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired,
  imageType: PropTypes.string.isRequired,
  theme: PropTypes.object.isRequired,
  emoji: PropTypes.string.isRequired,
  mouseDown: PropTypes.bool,
  checkMouseDown: PropTypes.func.isRequired,
  onEmojiSelect: PropTypes.func.isRequired,
  onEmojiMouseDown: PropTypes.func,
  useNativeArt: PropTypes.bool
});

_defineProperty(Entry$1, "defaultProps", {
  mouseDown: false
});

var Group =
/*#__PURE__*/
function (_Component) {
  _inherits(Group, _Component);

  function Group() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Group);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Group)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      hasRenderedEmoji: false
    });

    _defineProperty(_assertThisInitialized(_this), "shouldComponentUpdate", function (nextProps) {
      if (_this.state.hasRenderedEmoji) {
        return false;
      }

      return nextProps.isActive;
    });

    _defineProperty(_assertThisInitialized(_this), "renderCategory", function (category) {
      var _this$props = _this.props,
          cacheBustParam = _this$props.cacheBustParam,
          imagePath = _this$props.imagePath,
          imageType = _this$props.imageType,
          _this$props$theme = _this$props.theme,
          theme = _this$props$theme === void 0 ? {} : _this$props$theme,
          emojis = _this$props.emojis,
          checkMouseDown = _this$props.checkMouseDown,
          onEmojiSelect = _this$props.onEmojiSelect,
          onEmojiMouseDown = _this$props.onEmojiMouseDown,
          useNativeArt = _this$props.useNativeArt,
          isActive = _this$props.isActive;
      var categoryEmojis = emojis[category];
      return Object.keys(categoryEmojis).map(function (key) {
        return React.createElement("li", {
          key: categoryEmojis[key][0],
          className: theme.emojiSelectPopoverGroupItem
        }, isActive && React.createElement(Entry$1, {
          emoji: categoryEmojis[key][0],
          theme: theme,
          imagePath: imagePath,
          imageType: imageType,
          cacheBustParam: cacheBustParam,
          toneSet: categoryEmojis[key].length > 1 ? categoryEmojis[key] : null,
          checkMouseDown: checkMouseDown,
          onEmojiSelect: onEmojiSelect,
          onEmojiMouseDown: onEmojiMouseDown,
          useNativeArt: useNativeArt
        }));
      });
    });

    return _this;
  }

  _createClass(Group, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (this.props.isActive) {
        this.setState({
          hasRenderedEmoji: true
        }); // eslint-disable-line
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          _this$props2$theme = _this$props2.theme,
          theme = _this$props2$theme === void 0 ? {} : _this$props2$theme,
          group = _this$props2.group;
      return React.createElement("section", {
        className: theme.emojiSelectPopoverGroup,
        ref: function ref(element) {
          _this2.container = element;
        }
      }, React.createElement("h3", {
        className: theme.emojiSelectPopoverGroupTitle
      }, group.title), React.createElement("ul", {
        className: theme.emojiSelectPopoverGroupList,
        ref: function ref(element) {
          _this2.list = element;
        }
      }, group.categories.map(function (category) {
        return _this2.renderCategory(category);
      })));
    }
  }]);

  return Group;
}(Component);

_defineProperty(Group, "propTypes", {
  cacheBustParam: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired,
  imageType: PropTypes.string.isRequired,
  theme: PropTypes.object.isRequired,
  group: PropTypes.object.isRequired,
  emojis: PropTypes.object.isRequired,
  checkMouseDown: PropTypes.func.isRequired,
  onEmojiSelect: PropTypes.func.isRequired,
  onEmojiMouseDown: PropTypes.func.isRequired,
  useNativeArt: PropTypes.bool,
  isActive: PropTypes.bool
});

var Groups =
/*#__PURE__*/
function (_Component) {
  _inherits(Groups, _Component);

  function Groups() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Groups);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Groups)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      activeGroup: 0
    });

    _defineProperty(_assertThisInitialized(_this), "onScroll", function (values) {
      var _this$props = _this.props,
          groups = _this$props.groups,
          onGroupScroll = _this$props.onGroupScroll;
      var activeGroup = 0;
      groups.forEach(function (group, index) {
        if (values.scrollTop >= group.top) {
          activeGroup = index;

          _this.setState({
            activeGroup: activeGroup
          });
        }
      });
      onGroupScroll(activeGroup);
    });

    _defineProperty(_assertThisInitialized(_this), "onWheel", function (e) {
      // Disable page scroll, but enable groups scroll
      var _this$scrollbars$getV = _this.scrollbars.getValues(),
          clientHeight = _this$scrollbars$getV.clientHeight,
          scrollHeight = _this$scrollbars$getV.scrollHeight,
          scrollTop = _this$scrollbars$getV.scrollTop;

      if (e.deltaY > 0) {
        if (scrollTop < scrollHeight - clientHeight - e.deltaY) {
          e.stopPropagation();
        } else {
          _this.scrollbars.scrollToBottom();
        }
      } else {
        if (scrollTop > -e.deltaY) {
          // eslint-disable-line no-lonely-if
          e.stopPropagation();
        } else {
          _this.scrollbars.scrollTop();
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "scrollToGroup", function (groupIndex) {
      var groups = _this.props.groups;

      _this.scrollbars.scrollTop(groups[groupIndex].topList);
    });

    _defineProperty(_assertThisInitialized(_this), "calculateBounds", function () {
      var _this$scrollbars$getV2 = _this.scrollbars.getValues(),
          scrollHeight = _this$scrollbars$getV2.scrollHeight,
          scrollTop = _this$scrollbars$getV2.scrollTop;

      if (scrollHeight) {
        var groups = _this.props.groups;
        var containerTop = _this.container.getBoundingClientRect().top - scrollTop;
        groups.forEach(function (group) {
          var groupTop = group.instance.container.getBoundingClientRect().top;
          var listTop = group.instance.list.getBoundingClientRect().top;
          group.top = groupTop - containerTop; // eslint-disable-line no-param-reassign

          group.topList = listTop - containerTop; // eslint-disable-line no-param-reassign
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "isRenderedGroupActive", function (index) {
      var activeGroup = _this.state.activeGroup;
      var isOpen = _this.props.isOpen;
      return activeGroup === index || isOpen && activeGroup + 1 === index; // we also preload next group when popup is open
    });

    return _this;
  }

  _createClass(Groups, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.calculateBounds();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.calculateBounds();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          cacheBustParam = _this$props2.cacheBustParam,
          imagePath = _this$props2.imagePath,
          imageType = _this$props2.imageType,
          _this$props2$theme = _this$props2.theme,
          theme = _this$props2$theme === void 0 ? {} : _this$props2$theme,
          _this$props2$groups = _this$props2.groups,
          groups = _this$props2$groups === void 0 ? [] : _this$props2$groups,
          emojis = _this$props2.emojis,
          checkMouseDown = _this$props2.checkMouseDown,
          onEmojiSelect = _this$props2.onEmojiSelect,
          onEmojiMouseDown = _this$props2.onEmojiMouseDown,
          useNativeArt = _this$props2.useNativeArt;
      return React.createElement("div", {
        className: theme.emojiSelectPopoverGroups,
        onWheel: this.onWheel,
        ref: function ref(element) {
          _this2.container = element;
        }
      }, React.createElement(Scrollbars, {
        onScrollFrame: this.onScroll,
        renderTrackVertical: function renderTrackVertical() {
          return React.createElement("div", {
            className: theme.emojiSelectPopoverScrollbar
          });
        },
        renderThumbVertical: function renderThumbVertical(props) {
          return React.createElement("div", _extends({}, props, {
            className: theme.emojiSelectPopoverScrollbarThumb
          }));
        },
        ref: function ref(element) {
          _this2.scrollbars = element;
        }
      }, groups.map(function (group, index) {
        return React.createElement(Group, {
          key: "group#".concat(index, "[").concat(group.categories.join(','), "]") // eslint-disable-line react/no-array-index-key
          ,
          theme: theme,
          group: group,
          emojis: emojis,
          imagePath: imagePath,
          imageType: imageType,
          cacheBustParam: cacheBustParam,
          checkMouseDown: checkMouseDown,
          onEmojiSelect: onEmojiSelect,
          onEmojiMouseDown: onEmojiMouseDown,
          ref: function ref(element) {
            group.instance = element; // eslint-disable-line no-param-reassign
          },
          useNativeArt: useNativeArt,
          isActive: _this2.isRenderedGroupActive(index)
        });
      })));
    }
  }]);

  return Groups;
}(Component);

_defineProperty(Groups, "propTypes", {
  cacheBustParam: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired,
  imageType: PropTypes.string.isRequired,
  theme: PropTypes.object.isRequired,
  groups: PropTypes.arrayOf(PropTypes.object).isRequired,
  emojis: PropTypes.object.isRequired,
  checkMouseDown: PropTypes.func.isRequired,
  onEmojiSelect: PropTypes.func.isRequired,
  onEmojiMouseDown: PropTypes.func.isRequired,
  onGroupScroll: PropTypes.func.isRequired,
  useNativeArt: PropTypes.bool,
  isOpen: PropTypes.bool
});

var Entry$2 =
/*#__PURE__*/
function (_Component) {
  _inherits(Entry, _Component);

  function Entry() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Entry);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Entry)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "onMouseDown", function () {
      _this.mouseDown = true;
    });

    _defineProperty(_assertThisInitialized(_this), "onMouseUp", function () {
      if (_this.mouseDown) {
        _this.mouseDown = false;

        _this.props.onGroupSelect(_this.props.groupIndex);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "mouseDown", false);

    return _this;
  }

  _createClass(Entry, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          _this$props$theme = _this$props.theme,
          theme = _this$props$theme === void 0 ? {} : _this$props$theme,
          icon = _this$props.icon,
          isActive = _this$props.isActive;
      return React.createElement("button", {
        className: isActive ? theme.emojiSelectPopoverNavEntryActive : theme.emojiSelectPopoverNavEntry,
        onMouseDown: this.onMouseDown,
        type: "button",
        onMouseUp: this.onMouseUp
      }, icon);
    }
  }]);

  return Entry;
}(Component);

_defineProperty(Entry$2, "propTypes", {
  theme: PropTypes.object.isRequired,
  icon: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,
  groupIndex: PropTypes.number.isRequired,
  isActive: PropTypes.bool,
  onGroupSelect: PropTypes.func.isRequired
});

_defineProperty(Entry$2, "defaultProps", {
  isActive: false
});

var Nav = function Nav(_ref) {
  var _ref$theme = _ref.theme,
      theme = _ref$theme === void 0 ? {} : _ref$theme,
      groups = _ref.groups,
      activeGroup = _ref.activeGroup,
      onGroupSelect = _ref.onGroupSelect;
  return React.createElement("ul", {
    className: theme.emojiSelectPopoverNav
  }, groups.map(function (group, index) {
    return React.createElement("li", {
      key: "nav-group#".concat(index, "[").concat(group.categories.join(','), "]") // eslint-disable-line react/no-array-index-key
      ,
      className: theme.emojiSelectPopoverNavItem
    }, React.createElement(Entry$2, {
      theme: theme,
      groupIndex: index,
      isActive: index === activeGroup,
      icon: group.icon,
      onGroupSelect: onGroupSelect
    }));
  }));
};

Nav.propTypes = {
  theme: PropTypes.object.isRequired,
  groups: PropTypes.arrayOf(PropTypes.object).isRequired,
  activeGroup: PropTypes.number.isRequired,
  onGroupSelect: PropTypes.func.isRequired
};

var ToneSelect =
/*#__PURE__*/
function (_Component) {
  _inherits(ToneSelect, _Component);

  function ToneSelect() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ToneSelect);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ToneSelect)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "setCorrectPosition", function (areaBounds, entryBounds) {
      var width = _this.tones.offsetWidth;
      var height = _this.tones.offsetHeight;
      var style = {
        marginLeft: 0,
        left: entryBounds.left + entryBounds.width / 2 - width / 2,
        // eslint-disable-line no-mixed-operators
        bottom: entryBounds.bottom + entryBounds.height
      };

      if (style.left < areaBounds.left) {
        delete style.marginLeft;
        style.left = areaBounds.left;
      } else if (style.left > areaBounds.left + areaBounds.width - width) {
        // eslint-disable-line no-mixed-operators
        delete style.marginLeft;
        delete style.left;
        style.right = areaBounds.right;
      }

      if (style.bottom > areaBounds.bottom + areaBounds.height - height) {
        // eslint-disable-line no-mixed-operators
        delete style.bottom;
        style.top = entryBounds.top + entryBounds.height;
      }

      style = toStyle.object(style);
      Object.keys(style).forEach(function (property) {
        _this.tones.style[property] = style[property];
      });
    });

    return _this;
  }

  _createClass(ToneSelect, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props$bounds = this.props.bounds,
          areaBounds = _this$props$bounds.areaBounds,
          entryBounds = _this$props$bounds.entryBounds;
      this.setCorrectPosition(areaBounds, entryBounds);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          cacheBustParam = _this$props.cacheBustParam,
          imagePath = _this$props.imagePath,
          imageType = _this$props.imageType,
          _this$props$theme = _this$props.theme,
          theme = _this$props$theme === void 0 ? {} : _this$props$theme,
          _this$props$toneSet = _this$props.toneSet,
          toneSet = _this$props$toneSet === void 0 ? [] : _this$props$toneSet,
          onEmojiSelect = _this$props.onEmojiSelect;
      return React.createElement("div", {
        className: theme.emojiSelectPopoverToneSelect
      }, React.createElement("ul", {
        className: theme.emojiSelectPopoverToneSelectList,
        ref: function ref(element) {
          _this2.tones = element;
        }
      }, toneSet.map(function (emoji) {
        return React.createElement("li", {
          key: "tone-select(".concat(emoji, ")"),
          className: theme.emojiSelectPopoverToneSelectItem
        }, React.createElement(Entry$1, {
          emoji: emoji,
          theme: theme,
          imagePath: imagePath,
          imageType: imageType,
          cacheBustParam: cacheBustParam,
          checkMouseDown: function checkMouseDown() {
            return false;
          },
          onEmojiSelect: onEmojiSelect,
          mouseDown: true
        }));
      })));
    }
  }]);

  return ToneSelect;
}(Component);

_defineProperty(ToneSelect, "propTypes", {
  cacheBustParam: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired,
  imageType: PropTypes.string.isRequired,
  theme: PropTypes.object.isRequired,
  bounds: PropTypes.shape({
    areaBounds: PropTypes.shape({
      left: PropTypes.number.isRequired,
      right: PropTypes.number.isRequired,
      top: PropTypes.number.isRequired,
      bottom: PropTypes.number.isRequired,
      width: PropTypes.number.isRequired,
      height: PropTypes.number.isRequired
    }).isRequired,
    entryBounds: PropTypes.shape({
      left: PropTypes.number.isRequired,
      right: PropTypes.number.isRequired,
      top: PropTypes.number.isRequired,
      bottom: PropTypes.number.isRequired,
      width: PropTypes.number.isRequired,
      height: PropTypes.number.isRequired
    }).isRequired
  }).isRequired,
  onEmojiSelect: PropTypes.func.isRequired
});

var Popover =
/*#__PURE__*/
function (_Component) {
  _inherits(Popover, _Component);

  function Popover() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Popover);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Popover)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      activeGroup: 0,
      showToneSelect: false
    });

    _defineProperty(_assertThisInitialized(_this), "onMouseDown", function () {
      _this.mouseDown = true;
    });

    _defineProperty(_assertThisInitialized(_this), "onMouseUp", function () {
      _this.mouseDown = false;

      if (_this.activeEmoji) {
        _this.activeEmoji.deselect();

        _this.activeEmoji = null;

        if (_this.state.showToneSelect) {
          _this.closeToneSelect();
        } else if (_this.toneSelectTimer) {
          clearTimeout(_this.toneSelectTimer);
          _this.toneSelectTimer = null;
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onWheel", function (e) {
      return e.preventDefault();
    });

    _defineProperty(_assertThisInitialized(_this), "onEmojiSelect", function (emoji) {
      var newEditorState = addEmoji(_this.props.store.getEditorState(), emoji);

      _this.props.store.setEditorState(newEditorState);
    });

    _defineProperty(_assertThisInitialized(_this), "onEmojiMouseDown", function (emojiEntry, toneSet) {
      _this.activeEmoji = emojiEntry;

      if (toneSet) {
        _this.openToneSelectWithTimer(toneSet);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onGroupSelect", function (groupIndex) {
      _this.groups.scrollToGroup(groupIndex);
    });

    _defineProperty(_assertThisInitialized(_this), "onGroupScroll", function (groupIndex) {
      if (groupIndex !== _this.state.activeGroup) {
        _this.setState({
          activeGroup: groupIndex
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "openToneSelectWithTimer", function (toneSet) {
      _this.toneSelectTimer = setTimeout(function () {
        _this.toneSelectTimer = null;

        _this.openToneSelect(toneSet);
      }, _this.props.toneSelectOpenDelay);
    });

    _defineProperty(_assertThisInitialized(_this), "openToneSelect", function (toneSet) {
      _this.toneSet = toneSet;

      _this.setState({
        showToneSelect: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "closeToneSelect", function () {
      _this.toneSet = [];

      _this.setState({
        showToneSelect: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "checkMouseDown", function () {
      return _this.mouseDown;
    });

    _defineProperty(_assertThisInitialized(_this), "mouseDown", false);

    _defineProperty(_assertThisInitialized(_this), "activeEmoji", null);

    _defineProperty(_assertThisInitialized(_this), "toneSet", []);

    _defineProperty(_assertThisInitialized(_this), "toneSelectTimer", null);

    _defineProperty(_assertThisInitialized(_this), "renderToneSelect", function () {
      if (_this.state.showToneSelect) {
        var _this$props = _this.props,
            cacheBustParam = _this$props.cacheBustParam,
            imagePath = _this$props.imagePath,
            imageType = _this$props.imageType,
            _this$props$theme = _this$props.theme,
            theme = _this$props$theme === void 0 ? {} : _this$props$theme;

        var containerBounds = _this.container.getBoundingClientRect();

        var areaBounds = _this.groups.container.getBoundingClientRect();

        var entryBounds = _this.activeEmoji.button.getBoundingClientRect(); // Translate TextRectangle coords to CSS relative coords


        var bounds = {
          areaBounds: {
            left: areaBounds.left - containerBounds.left,
            right: containerBounds.right - areaBounds.right,
            top: areaBounds.top - containerBounds.top,
            bottom: containerBounds.bottom - areaBounds.bottom,
            width: areaBounds.width,
            height: areaBounds.width
          },
          entryBounds: {
            left: entryBounds.left - containerBounds.left,
            right: containerBounds.right - entryBounds.right,
            top: entryBounds.top - containerBounds.top,
            bottom: containerBounds.bottom - entryBounds.bottom,
            width: entryBounds.width,
            height: entryBounds.width
          }
        };
        return React.createElement(ToneSelect, {
          theme: theme,
          bounds: bounds,
          toneSet: _this.toneSet,
          imagePath: imagePath,
          imageType: imageType,
          cacheBustParam: cacheBustParam,
          onEmojiSelect: _this.onEmojiSelect
        });
      }

      return null;
    });

    return _this;
  }

  _createClass(Popover, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener('mouseup', this.onMouseUp);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('mouseup', this.onMouseUp);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          cacheBustParam = _this$props2.cacheBustParam,
          imagePath = _this$props2.imagePath,
          imageType = _this$props2.imageType,
          _this$props2$theme = _this$props2.theme,
          theme = _this$props2$theme === void 0 ? {} : _this$props2$theme,
          _this$props2$groups = _this$props2.groups,
          groups = _this$props2$groups === void 0 ? [] : _this$props2$groups,
          emojis = _this$props2.emojis,
          _this$props2$isOpen = _this$props2.isOpen,
          isOpen = _this$props2$isOpen === void 0 ? false : _this$props2$isOpen,
          useNativeArt = _this$props2.useNativeArt;
      var className = isOpen ? theme.emojiSelectPopover : theme.emojiSelectPopoverClosed;
      var activeGroup = this.state.activeGroup;
      return React.createElement("div", {
        className: className,
        onMouseDown: this.onMouseDown,
        onWheel: this.onWheel,
        ref: function ref(element) {
          _this2.container = element;
        }
      }, React.createElement("h3", {
        className: theme.emojiSelectPopoverTitle
      }, groups[activeGroup].title), React.createElement(Groups, {
        theme: theme,
        groups: groups,
        emojis: emojis,
        imagePath: imagePath,
        imageType: imageType,
        cacheBustParam: cacheBustParam,
        checkMouseDown: this.checkMouseDown,
        onEmojiSelect: this.onEmojiSelect,
        onEmojiMouseDown: this.onEmojiMouseDown,
        onGroupScroll: this.onGroupScroll,
        ref: function ref(element) {
          _this2.groups = element;
        },
        useNativeArt: useNativeArt,
        isOpen: isOpen
      }), React.createElement(Nav, {
        theme: theme,
        groups: groups,
        activeGroup: activeGroup,
        onGroupSelect: this.onGroupSelect
      }), this.renderToneSelect());
    }
  }]);

  return Popover;
}(Component);

_defineProperty(Popover, "propTypes", {
  cacheBustParam: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired,
  imageType: PropTypes.string.isRequired,
  theme: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired,
  groups: PropTypes.arrayOf(PropTypes.object).isRequired,
  emojis: PropTypes.object.isRequired,
  toneSelectOpenDelay: PropTypes.number.isRequired,
  isOpen: PropTypes.bool,
  useNativeArt: PropTypes.bool
});

_defineProperty(Popover, "defaultProps", {
  isOpen: false
});

var emojis = createEmojisFromStrategy(strategy);

var EmojiSelect =
/*#__PURE__*/
function (_Component) {
  _inherits(EmojiSelect, _Component);

  function EmojiSelect() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, EmojiSelect);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(EmojiSelect)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      isOpen: false
    });

    _defineProperty(_assertThisInitialized(_this), "onClick", function (e) {
      e.stopPropagation();
      e.nativeEvent.stopImmediatePropagation();
    });

    _defineProperty(_assertThisInitialized(_this), "onButtonMouseUp", function () {
      return _this.state.isOpen ? _this.closePopover() : _this.openPopover();
    });

    _defineProperty(_assertThisInitialized(_this), "openPopover", function () {
      if (!_this.state.isOpen) {
        _this.setState({
          isOpen: true
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "closePopover", function () {
      if (_this.state.isOpen) {
        _this.setState({
          isOpen: false
        });
      }
    });

    return _this;
  }

  _createClass(EmojiSelect, [{
    key: "componentDidMount",
    // When the selector is open and users click anywhere on the page,
    // the selector should close
    value: function componentDidMount() {
      document.addEventListener('click', this.closePopover);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener('click', this.closePopover);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          cacheBustParam = _this$props.cacheBustParam,
          imagePath = _this$props.imagePath,
          imageType = _this$props.imageType,
          _this$props$theme = _this$props.theme,
          theme = _this$props$theme === void 0 ? {} : _this$props$theme,
          store = _this$props.store,
          selectGroups = _this$props.selectGroups,
          selectButtonContent = _this$props.selectButtonContent,
          toneSelectOpenDelay = _this$props.toneSelectOpenDelay,
          useNativeArt = _this$props.useNativeArt;
      var buttonClassName = this.state.isOpen ? theme.emojiSelectButtonPressed : theme.emojiSelectButton;
      return React.createElement("div", {
        className: theme.emojiSelect,
        onClick: this.onClick
      }, React.createElement("button", {
        className: buttonClassName,
        onMouseUp: this.onButtonMouseUp,
        type: "button"
      }, selectButtonContent), React.createElement(Popover, {
        cacheBustParam: cacheBustParam,
        imagePath: imagePath,
        imageType: imageType,
        theme: theme,
        store: store,
        groups: selectGroups,
        emojis: emojis,
        toneSelectOpenDelay: toneSelectOpenDelay,
        isOpen: this.state.isOpen,
        useNativeArt: useNativeArt
      }));
    }
  }]);

  return EmojiSelect;
}(Component);

_defineProperty(EmojiSelect, "propTypes", {
  cacheBustParam: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired,
  imageType: PropTypes.string.isRequired,
  theme: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired,
  selectGroups: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    icon: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,
    categories: PropTypes.arrayOf(PropTypes.oneOf(Object.keys(emojis))).isRequired
  })),
  selectButtonContent: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  toneSelectOpenDelay: PropTypes.number,
  useNativeArt: PropTypes.bool
});

_defineProperty(EmojiSelect, "defaultProps", {
  selectButtonContent: '☺',
  selectGroups: defaultEmojiGroups,
  toneSelectOpenDelay: 500
});

var unicodeRegex = new RegExp(emojione.unicodeRegexp, 'g');
var emojiStrategy = (function (contentBlock, callback) {
  findWithRegex(unicodeRegex, contentBlock, callback);
});

var EMOJI_REGEX = /(\s|^):[\w]*/g;
var emojiSuggestionsStrategy = (function (contentBlock, callback) {
  findWithRegex(EMOJI_REGEX, contentBlock, callback);
});

/*
 * Attaches Immutable DraftJS Entities to the Emoji text.
 *
 * This is necessary as emojis consist of 2 characters (unicode). By making them
 * immutable the whole Emoji is removed when hitting backspace.
 */

function attachImmutableEntitiesToEmojis(editorState) {
  return editorState;
}

var getRelativeParent = function getRelativeParent(element) {
  if (!element) {
    return null;
  }

  var position = window.getComputedStyle(element).getPropertyValue('position');

  if (position !== 'static') {
    return element;
  }

  return getRelativeParent(element.parentElement);
};

var positionSuggestions = function positionSuggestions(_ref) {
  var decoratorRect = _ref.decoratorRect,
      popover = _ref.popover,
      state = _ref.state,
      filteredEmojis = _ref.filteredEmojis;
  var relativeParent = getRelativeParent(popover.parentElement);
  var relativeRect = {};

  if (relativeParent) {
    relativeRect.scrollLeft = relativeParent.scrollLeft;
    relativeRect.scrollTop = relativeParent.scrollTop;
    var relativeParentRect = relativeParent.getBoundingClientRect();
    relativeRect.left = decoratorRect.left - relativeParentRect.left;
    relativeRect.top = decoratorRect.top - relativeParentRect.top;
  } else {
    relativeRect.scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    relativeRect.scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    relativeRect.top = decoratorRect.top;
    relativeRect.left = decoratorRect.left;
  }

  var left = relativeRect.left + relativeRect.scrollLeft;
  var top = relativeRect.top + relativeRect.scrollTop;
  var transform;
  var transition;

  if (state.isActive) {
    if (filteredEmojis.size > 0) {
      transform = 'scale(1)';
      transition = 'all 0.25s cubic-bezier(.3,1.2,.2,1)';
    } else {
      transform = 'scale(0)';
      transition = 'all 0.35s cubic-bezier(.3,1,.2,1)';
    }
  }

  return {
    left: "".concat(left, "px"),
    top: "".concat(top, "px"),
    transform: transform,
    transformOrigin: '1em 0%',
    transition: transition
  };
};

var emojiSelectPopoverScrollbar = "e1tbkpvz";
var emojiSelectPopoverGroupTitle = "elv743z";
var defaultTheme = {
  emoji: "e12q5piw",
  emojiSuggestions: "e14tyxfe",
  emojiSuggestionsEntry: "e8c948t",
  emojiSuggestionsEntryFocused: "e1p2dfmq",
  emojiSuggestionsEntryText: "egz6d8p",
  emojiSuggestionsEntryIcon: "ezpritq",
  emojiSelect: "eoqyfbi",
  emojiSelectButton: "e1a4bmxh",
  emojiSelectButtonPressed: "e1dawnwp",
  emojiSelectPopover: "e14wzft9",
  emojiSelectPopoverClosed: "e1y0dmik",
  emojiSelectPopoverTitle: "e115ln0i",
  emojiSelectPopoverGroups: "e4apto0",
  emojiSelectPopoverGroup: "eujihyd",
  emojiSelectPopoverGroupTitle: emojiSelectPopoverGroupTitle,
  emojiSelectPopoverGroupList: "eve87w6",
  emojiSelectPopoverGroupItem: "e7y6n3z",
  emojiSelectPopoverToneSelect: "e95dnq1",
  emojiSelectPopoverToneSelectList: "e184iueo",
  emojiSelectPopoverToneSelectItem: "edlz1v2",
  emojiSelectPopoverEntry: "e20avme",
  emojiSelectPopoverEntryFocused: "eqdko5g",
  emojiSelectPopoverEntryIcon: "ees7jd",
  emojiSelectPopoverNav: "emfot0t",
  emojiSelectPopoverNavItem: "e9wbvx0",
  emojiSelectPopoverNavEntry: "e1s1l8v8",
  emojiSelectPopoverNavEntryActive: "e8wc4bj",
  emojiSelectPopoverScrollbar: emojiSelectPopoverScrollbar,
  emojiSelectPopoverScrollbarThumb: "e1dnlg2i"
};

var defaultImagePath = '//cdn.jsdelivr.net/emojione/assets/svg/';
var defaultImageType = 'svg';
var defaultCacheBustParam = '?v=2.2.7'; // TODO activate/deactivate different the conversion or search part

var index = (function () {
  var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var callbacks = {
    keyBindingFn: undefined,
    handleKeyCommand: undefined,
    handleReturn: undefined,
    onChange: undefined
  };
  var ariaProps = {
    ariaHasPopup: 'false',
    ariaExpanded: false,
    ariaOwneeID: undefined,
    ariaActiveDescendantID: undefined
  };
  var searches = Map();
  var escapedSearch;
  var clientRectFunctions = Map();
  var store = {
    getEditorState: undefined,
    setEditorState: undefined,
    getPortalClientRect: function getPortalClientRect(offsetKey) {
      return clientRectFunctions.get(offsetKey)();
    },
    getAllSearches: function getAllSearches() {
      return searches;
    },
    isEscaped: function isEscaped(offsetKey) {
      return escapedSearch === offsetKey;
    },
    escapeSearch: function escapeSearch(offsetKey) {
      escapedSearch = offsetKey;
    },
    resetEscapedSearch: function resetEscapedSearch() {
      escapedSearch = undefined;
    },
    register: function register(offsetKey) {
      searches = searches.set(offsetKey, offsetKey);
    },
    updatePortalClientRect: function updatePortalClientRect(offsetKey, func) {
      clientRectFunctions = clientRectFunctions.set(offsetKey, func);
    },
    unregister: function unregister(offsetKey) {
      searches = searches["delete"](offsetKey);
      clientRectFunctions = clientRectFunctions["delete"](offsetKey);
    }
  }; // Styles are overwritten instead of merged as merging causes a lot of confusion.
  //
  // Why? Because when merging a developer needs to know all of the underlying
  // styles which needs a deep dive into the code. Merging also makes it prone to
  // errors when upgrading as basically every styling change would become a major
  // breaking change. 1px of an increased padding can break a whole layout.

  var _config$theme = config.theme,
      theme = _config$theme === void 0 ? defaultTheme : _config$theme,
      _config$imagePath = config.imagePath,
      imagePath = _config$imagePath === void 0 ? defaultImagePath : _config$imagePath,
      _config$imageType = config.imageType,
      imageType = _config$imageType === void 0 ? defaultImageType : _config$imageType,
      allowImageCache = config.allowImageCache,
      _config$positionSugge = config.positionSuggestions,
      positionSuggestions$1 = _config$positionSugge === void 0 ? positionSuggestions : _config$positionSugge,
      priorityList = config.priorityList,
      selectGroups = config.selectGroups,
      selectButtonContent = config.selectButtonContent,
      toneSelectOpenDelay = config.toneSelectOpenDelay,
      useNativeArt = config.useNativeArt;
  var cacheBustParam = allowImageCache ? '' : defaultCacheBustParam; // if priorityList is configured in config then set priorityList

  if (priorityList) emojiList.setPriorityList(priorityList);
  var suggestionsProps = {
    ariaProps: ariaProps,
    cacheBustParam: cacheBustParam,
    callbacks: callbacks,
    imagePath: imagePath,
    imageType: imageType,
    theme: theme,
    store: store,
    positionSuggestions: positionSuggestions$1,
    shortNames: List(keys(emojiList.list)),
    useNativeArt: useNativeArt
  };
  var selectProps = {
    cacheBustParam: cacheBustParam,
    imagePath: imagePath,
    imageType: imageType,
    theme: theme,
    store: store,
    selectGroups: selectGroups,
    selectButtonContent: selectButtonContent,
    toneSelectOpenDelay: toneSelectOpenDelay,
    useNativeArt: useNativeArt
  };

  var DecoratedEmojiSuggestions = function DecoratedEmojiSuggestions(props) {
    return React.createElement(EmojiSuggestions, _extends({}, props, suggestionsProps));
  };

  var DecoratedEmojiSelect = function DecoratedEmojiSelect(props) {
    return React.createElement(EmojiSelect, _extends({}, props, selectProps));
  };

  var DecoratedEmoji = function DecoratedEmoji(props) {
    return React.createElement(Emoji, _extends({}, props, {
      theme: theme,
      imagePath: imagePath,
      imageType: imageType,
      cacheBustParam: cacheBustParam,
      useNativeArt: useNativeArt
    }));
  };

  var DecoratedEmojiSuggestionsPortal = function DecoratedEmojiSuggestionsPortal(props) {
    return React.createElement(EmojiSuggestionsPortal, _extends({}, props, {
      store: store
    }));
  };

  return {
    EmojiSuggestions: DecoratedEmojiSuggestions,
    EmojiSelect: DecoratedEmojiSelect,
    decorators: [{
      strategy: emojiStrategy,
      component: DecoratedEmoji
    }, {
      strategy: emojiSuggestionsStrategy,
      component: DecoratedEmojiSuggestionsPortal
    }],
    getAccessibilityProps: function getAccessibilityProps() {
      return {
        role: 'combobox',
        ariaAutoComplete: 'list',
        ariaHasPopup: ariaProps.ariaHasPopup,
        ariaExpanded: ariaProps.ariaExpanded,
        ariaActiveDescendantID: ariaProps.ariaActiveDescendantID,
        ariaOwneeID: ariaProps.ariaOwneeID
      };
    },
    initialize: function initialize(_ref) {
      var getEditorState = _ref.getEditorState,
          setEditorState = _ref.setEditorState;
      store.getEditorState = getEditorState;
      store.setEditorState = setEditorState;
    },
    keyBindingFn: function keyBindingFn(keyboardEvent) {
      return callbacks.keyBindingFn && callbacks.keyBindingFn(keyboardEvent);
    },
    handleReturn: function handleReturn(keyboardEvent) {
      return callbacks.handleReturn && callbacks.handleReturn(keyboardEvent);
    },
    onChange: function onChange(editorState) {
      var newEditorState = attachImmutableEntitiesToEmojis(editorState);

      if (!newEditorState.getCurrentContent().equals(editorState.getCurrentContent())) {
        // Forcing the current selection ensures that it will be at it's right place.
        // This solves the issue where inserting an Emoji on OSX with Apple's Emoji
        // selector led to the right selection the data, but wrong position in
        // the contenteditable.
        newEditorState = EditorState.forceSelection(newEditorState, newEditorState.getSelection());
      }

      if (callbacks.onChange) return callbacks.onChange(newEditorState);
      return newEditorState;
    }
  };
});

export default index;
export { defaultTheme };
