//Sun Oct 13 2024 05:26:27 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
// ==UserScript==
// @name        去水印神器
// @description 去水印神器（移除烦人的水印，还你一个干净清爽的页面）
// @namespace   maomao1996.kill-watermark
// @version     1.0.1
// @author      solid
// @license     MIT
// @match       *://*.gaoding.com/editor/*
// @match       *://*.chuangkit.com/odyssey/*
// @match       *://*.bigesj.com/*
// @match       *://*.818ps.com/v4/*
// @match       *://*.qingning6.com/editor*
// @match       *://*.isheji.com/editor*
// @match       *://*.editor-img.699pic.com/editor*
// @grant       GM_addStyle
// @require      https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js
// @require     https://cdn.bootcdn.net/ajax/libs/html2canvas/1.4.1/html2canvas.js
// @require     https://cdn.bootcdn.net/ajax/libs/html-to-image/1.11.11/html-to-image.js

// ==/UserScript==
!function () {
  "use strict";

  var _0xod7 = "jsjiami.com.v7";
  const _0x4a6e59 = _0x5f0b;
  (function (_0x2be644, _0x589944, _0x5d45c2, _0x3972ce, _0x3ab700, _0x1cfa3f, _0x522ebb) {
    return _0x2be644 = _0x2be644 >> 5, _0x1cfa3f = "hs", _0x522ebb = "hs", function (_0x4e6d20, _0x317ebe, _0x460406, _0x23dfb3, _0x249d96) {
      const _0x38cf5f = _0x5f0b;
      _0x23dfb3 = "tfi", _0x1cfa3f = _0x23dfb3 + _0x1cfa3f, _0x249d96 = "up", _0x522ebb += _0x249d96, _0x1cfa3f = _0x460406(_0x1cfa3f), _0x522ebb = _0x460406(_0x522ebb), _0x460406 = 0;
      const _0x555698 = _0x4e6d20();
      while (true && --_0x3972ce + _0x317ebe) {
        try {
          _0x23dfb3 = -parseInt(_0x38cf5f(340, "Uf16")) / 1 + parseInt(_0x38cf5f(644, "i!Q#")) / 2 * (parseInt(_0x38cf5f(218, "JkmZ")) / 3) + -parseInt(_0x38cf5f(325, "ipC)")) / 4 * (-parseInt(_0x38cf5f(229, "lZkz")) / 5) + parseInt(_0x38cf5f(630, "fV8q")) / 6 * (-parseInt(_0x38cf5f(234, "(Uvh")) / 7) + parseInt(_0x38cf5f(303, "s0wq")) / 8 * (parseInt(_0x38cf5f(440, "d1Yz")) / 9) + parseInt(_0x38cf5f(217, "^2#^")) / 10 * (-parseInt(_0x38cf5f(273, "JkmZ")) / 11) + parseInt(_0x38cf5f(591, "BUTu")) / 12 * (parseInt(_0x38cf5f(525, "D3lG")) / 13);
        } catch (_0x4a131a) {
          _0x23dfb3 = _0x460406;
        } finally {
          _0x249d96 = _0x555698[_0x1cfa3f]();
          if (_0x2be644 <= _0x3972ce) _0x460406 ? _0x3ab700 ? _0x23dfb3 = _0x249d96 : _0x3ab700 = _0x249d96 : _0x460406 = _0x249d96;else {
            if (_0x460406 == _0x3ab700["replace"](/[RxMFUKGrNDwuQpLkyhA=]/g, "")) {
              if (_0x23dfb3 === _0x317ebe) {
                _0x555698["un" + _0x1cfa3f](_0x249d96);
                break;
              }
              _0x555698[_0x522ebb](_0x249d96);
            }
          }
        }
      }
    }(_0x5d45c2, _0x589944, function (_0x19a407, _0x40d103, _0xc684ef, _0x426873, _0x1eb4ec, _0x298d0b, _0x30713a) {
      return _0x40d103 = "split", _0x19a407 = arguments[0], _0x19a407 = _0x19a407[_0x40d103](""), _0xc684ef = "reverse", _0x19a407 = _0x19a407[_0xc684ef]("v"), _0x426873 = "join", 1543245, _0x19a407[_0x426873]("");
    });
  }(6208, 889065, _0x4f90, 196), _0x4f90) && (_0xod7 = _0x4f90);
  let h = "div[style*=\"visibility\"][style*=\"display\"][style*=\"position\"][style*=\"top\"][style*=\"left\"] {\n      clip-path:circle(0) !important;\n      //z-index:-1 !important;\n  }\n      ",
    t = ".water,.watermark {\n        clip-path:circle(0)!;\n        display:none;\n    }\n    .material-water-mark{\n      clip-path:circle(0)!;\n        display:none;\n    }\n    ",
    h2 = "div[style*=\"pointer-events\"][style*=\"background\"][style*=\"position\"][style*=\"top\"][style*=\"left\"] {\n      clip-path:circle(0) !important;\n      //z-index:-1 !important;\n  }\n      ";
  GM_addStyle(h), GM_addStyle(h2), GM_addStyle(t);
  const loadingStyle = _0x4a6e59(464, "D3lG"),
    loadingHTML = _0x4a6e59(656, "[C3Z");
  function showLoadingScreen() {
    const _0x40b661 = _0x4a6e59,
      _0x3f66d8 = {
        "kNHAc": _0x40b661(667, "2ET6"),
        "sGSyt": _0x40b661(557, "Or@P"),
        "NACFz": _0x40b661(305, ")Tg7")
      },
      _0x5f2415 = document["createElement"](_0x3f66d8["kNHAc"]);
    _0x5f2415[_0x40b661(489, "AHo9")] = _0x3f66d8[_0x40b661(291, "*gF$")], _0x5f2415["id"] = _0x3f66d8[_0x40b661(392, "YXpu")], _0x5f2415["innerHTML"] = loadingStyle, document[_0x40b661(236, "D3lG")][_0x40b661(277, "iUMT")](_0x5f2415);
    const _0x49cc14 = document["createElement"](_0x40b661(701, "ipC)"));
    _0x49cc14[_0x40b661(584, "Uf16")] = loadingHTML, document[_0x40b661(650, "edB[")][_0x40b661(532, "Uf16")](_0x49cc14);
  }
  function hideLoadingScreen() {
    const _0x4e5514 = _0x4a6e59,
      _0x296db6 = {
        "XnInh": _0x4e5514(346, "mISl"),
        "fRbGQ": function (_0x4d652d, _0x5f0110) {
          return _0x4d652d === _0x5f0110;
        },
        "ifxvA": _0x4e5514(244, "E)!p"),
        "zSTHq": _0x4e5514(686, "Uf16")
      },
      _0x14b72f = document["getElementById"](_0x4e5514(501, "GKqN"));
    _0x14b72f && (_0x14b72f[_0x4e5514(290, "s0wq")]["display"] = "none");
    const _0x313ed2 = document[_0x4e5514(684, "iPF6")](_0x296db6[_0x4e5514(560, "i!Q#")]);
    _0x313ed2 && (_0x296db6[_0x4e5514(658, "d1Yz")](_0x296db6[_0x4e5514(408, "L]j%")], _0x296db6[_0x4e5514(321, "mISl")]) ? _0x59b047[_0x4e5514(365, "*gF$")][_0x4e5514(226, "lZkz")] = _0x4e5514(282, "2ET6") : _0x313ed2["remove"]());
  }
  let button = document[_0x4a6e59(509, "uuhC")](_0x4a6e59(577, "(Uvh"));
  button["innerHTML"] = "\u4E0B\u8F7D\u65E0\u6C34\u5370\u6D77\u62A5", button[_0x4a6e59(667, "2ET6")]["position"] = _0x4a6e59(713, ")Tg7"), button[_0x4a6e59(568, "fV8q")][_0x4a6e59(479, "D3lG")] = _0x4a6e59(617, "(Uvh"), button[_0x4a6e59(418, "dcjG")][_0x4a6e59(341, "u@bM")] = _0x4a6e59(657, "qdHv"), button["style"][_0x4a6e59(271, "8Kr[")] = _0x4a6e59(295, "E)!p"), button[_0x4a6e59(475, "(Uvh")][_0x4a6e59(222, "u@bM")] = _0x4a6e59(416, "Uf16"), button[_0x4a6e59(290, "s0wq")][_0x4a6e59(301, "JkmZ")] = _0x4a6e59(659, "[C3Z"), button["style"]["borderColor"] = "#409eff", button[_0x4a6e59(465, "qoX%")][_0x4a6e59(671, "edB[")] = _0x4a6e59(606, "s0wq"), button[_0x4a6e59(580, ")ciD")]["cursor"] = _0x4a6e59(316, "HrcV");
  let hostname = window[_0x4a6e59(468, "y#bF")]["hostname"],
    GaodingData = null;
  if (hostname["indexOf"](_0x4a6e59(322, "GKqN")) != -1) {
    button[_0x4a6e59(290, "s0wq")][_0x4a6e59(457, "d1Yz")] = _0x4a6e59(629, "dcjG"), button[_0x4a6e59(435, "YXpu")][_0x4a6e59(527, "s0wq")] = "30vw";
    var originalCreateObjectURL = URL[_0x4a6e59(505, "qoX%")],
      originalMathMax = Math[_0x4a6e59(609, "F%pW")];
    Math[_0x4a6e59(224, "qoX%")] = function () {
      const _0x27b981 = _0x4a6e59,
        _0x56b0a0 = {
          "Xopej": function (_0xa60ed4, _0xdca8de) {
            return _0xa60ed4 <= _0xdca8de;
          },
          "fdhsP": "[test-id=\"right-canvas-size-info\"]"
        };
      var _0x4b5538 = Array["prototype"][_0x27b981(550, "GKqN")][_0x27b981(491, ")Tg7")](arguments),
        _0x377f9c = originalMathMax[_0x27b981(431, "YXpu")](null, _0x4b5538);
      if (_0x56b0a0[_0x27b981(531, "4qIG")](_0x4b5538[0], 500) && _0x4b5538[1] == 256) {
        const _0x329a4a = document["querySelector"](_0x56b0a0[_0x27b981(344, "D3lG")]);
        let _0x595a4e = 1024;
        if (_0x329a4a) {
          const _0x1cc53a = _0x329a4a[_0x27b981(654, "JkmZ")],
            _0x5911f5 = _0x1cc53a[_0x27b981(559, "dcjG")](/(\d+)\s*×\s*(\d+)/);
          _0x595a4e = _0x5911f5[1];
        }
        return _0x595a4e;
      }
      return _0x377f9c;
    }, URL["createObjectURL"] = function (_0x54187) {
      const _0x3db24d = _0x4a6e59,
        _0x68d651 = {
          "tVxcP": function (_0x5082a2, _0x26db37) {
            return _0x5082a2 === _0x26db37;
          },
          "Niber": _0x3db24d(635, "edB["),
          "PCSSB": function (_0x72d8ff, _0x16d149) {
            return _0x72d8ff > _0x16d149;
          },
          "jQzgb": function (_0x4f08d9, _0x514915) {
            return _0x4f08d9 == _0x514915;
          },
          "MReAb": "image/svg+xml"
        };
      if (_0x68d651[_0x3db24d(265, "D3lG")](_0x54187[_0x3db24d(575, "(Uvh")], _0x68d651[_0x3db24d(645, "Uf16")]) && _0x68d651[_0x3db24d(533, "D3lG")](_0x54187[_0x3db24d(315, "Ck$g")], 200000)) GaodingData = _0x54187;else _0x68d651[_0x3db24d(339, "^wH@")](_0x54187[_0x3db24d(347, "^2#^")], _0x68d651["MReAb"]) && (_0x54187 = new Blob([""], {
        "type": _0x68d651[_0x3db24d(382, "*gF$")]
      }));
      var _0x18596d = originalCreateObjectURL(_0x54187);
      return _0x18596d;
    };
  } else {
    if (hostname["indexOf"]("chuangkit.com") != -1) button[_0x4a6e59(698, "JkmZ")]["top"] = _0x4a6e59(294, "1zJ#"), button[_0x4a6e59(417, "2Azd")][_0x4a6e59(520, "D3lG")] = _0x4a6e59(469, "ipC)");else {
      if (hostname[_0x4a6e59(704, "iPF6")](_0x4a6e59(233, "GKqN")) != -1) {
        button[_0x4a6e59(493, "[C3Z")]["top"] = "12px", button["style"][_0x4a6e59(314, "qoX%")] = _0x4a6e59(653, "(Uvh"), button["innerHTML"] = _0x4a6e59(311, "uuhC"), button[_0x4a6e59(439, "t&]W")][_0x4a6e59(599, "uuhC")] = "red", button[_0x4a6e59(351, "qoX%")] = true;
        const OriginalImage = window[_0x4a6e59(272, "D3lG")];
        function CustomImage() {
          const _0x2a5d04 = _0x4a6e59,
            _0x52552f = {
              "NeNep": _0x2a5d04(293, "L]j%"),
              "KMmxt": _0x2a5d04(648, "Ck$g"),
              "XUhxF": function (_0x39dc17) {
                return _0x39dc17();
              },
              "mtVOR": function (_0x150c55, _0x4f68c5) {
                return _0x150c55 !== _0x4f68c5;
              },
              "hsywD": "zhNdx",
              "Vnptg": _0x2a5d04(336, "y#bF"),
              "eZgPU": _0x2a5d04(326, "GKqN"),
              "hUlLi": _0x2a5d04(317, "Uf16")
            },
            _0x55fc56 = new OriginalImage();
          return Object[_0x2a5d04(688, "dcjG")](_0x55fc56, _0x52552f[_0x2a5d04(530, "L]j%")], {
            "set": function (_0xe53074) {
              const _0x2050d9 = _0x2a5d04,
                _0x669935 = {
                  "wYVpH": _0x52552f[_0x2050d9(711, "D3lG")],
                  "amonV": _0x52552f[_0x2050d9(707, "F%pW")],
                  "EsCkZ": function (_0x2842bb) {
                    return _0x52552f["XUhxF"](_0x2842bb);
                  }
                };
              if (_0x52552f[_0x2050d9(445, "L]j%")](_0x52552f[_0x2050d9(355, ")Tg7")], _0x52552f[_0x2050d9(262, "@2Mh")])) {
                if (_0xe53074[_0x2050d9(441, "Uf16")](_0x52552f[_0x2050d9(693, "uuhC")]) != -1) {
                  _0x55fc56[_0x2050d9(552, "8Kr[")]("src", "");
                  return;
                }
                _0x55fc56[_0x2050d9(579, "@2Mh")](_0x52552f["hUlLi"], _0xe53074);
              } else _0x54f72f[_0x2050d9(429, "YvuT")](_0x15c91a, _0x41697b)["then"](function (_0x3afe51) {
                const _0x425597 = _0x2050d9;
                let _0x205c32 = _0x456441["createElement"]("a");
                _0x205c32[_0x425597(251, "8Frn")](_0x669935[_0x425597(270, "Ck$g")], _0x3afe51), _0x205c32[_0x425597(237, "6mCg")](_0x669935["amonV"], _0x20c876), _0x205c32[_0x425597(449, "fV8q")](), _0x669935["EsCkZ"](_0x578613);
              });
            }
          }), _0x55fc56;
        }
        window[_0x4a6e59(383, "Uf16")] = CustomImage;
      } else {
        if (hostname["indexOf"](_0x4a6e59(660, "2ET6")) != -1) button["style"]["top"] = _0x4a6e59(521, "F%pW"), button[_0x4a6e59(403, "i!Q#")][_0x4a6e59(694, "y#bF")] = "38vw";else {
          if (hostname["indexOf"]("isheji.com") != -1) button["style"][_0x4a6e59(276, "mISl")] = _0x4a6e59(358, "GKqN"), button["style"][_0x4a6e59(384, "Or@P")] = _0x4a6e59(404, "iPF6");else {
            if (hostname["indexOf"](_0x4a6e59(318, "dcjG") != -1)) {
              button["style"][_0x4a6e59(672, "Or@P")] = _0x4a6e59(585, "u@bM"), button["style"]["right"] = "30vw";
              const originalCreateElement = document[_0x4a6e59(428, "4mlF")];
              document["createElement"] = function (_0x5a0e52) {
                const _0x3f22d8 = _0x4a6e59,
                  _0x72f026 = {
                    "PgAqy": function (_0x3b5b2e, _0x468e8f) {
                      return _0x3b5b2e != _0x468e8f;
                    },
                    "Jhudo": function (_0x4a5191, _0x549ce6) {
                      return _0x4a5191 === _0x549ce6;
                    },
                    "AIHUT": _0x3f22d8(289, "Or@P"),
                    "qfKYJ": _0x3f22d8(691, "ipC)"),
                    "gvVnf": _0x3f22d8(460, "^wH@"),
                    "KvHZh": _0x3f22d8(528, "Or@P")
                  },
                  _0x43294d = originalCreateElement[_0x3f22d8(519, "fV8q")](document, _0x5a0e52);
                return _0x5a0e52[_0x3f22d8(466, "Uf16")]() === _0x72f026[_0x3f22d8(405, "^wH@")] && Object[_0x3f22d8(640, "Or@P")](_0x43294d, _0x72f026["gvVnf"], {
                  "set": function (_0xbc1ab4) {
                    const _0xe10e50 = _0x3f22d8;
                    if (_0x72f026["PgAqy"](_0xbc1ab4["indexOf"](_0xe10e50(539, "t&]W")), -1)) {
                      if (_0x72f026[_0xe10e50(389, "D3lG")](_0x72f026[_0xe10e50(607, "4mlF")], _0x72f026[_0xe10e50(279, "F%pW")])) _0x44cec7["style"][_0xe10e50(680, "t&]W")] = _0xe10e50(353, "BUTu"), _0x1624dd[_0xe10e50(269, "E)!p")][_0xe10e50(332, "Uf16")] = "38vw";else {
                        img["setAttribute"]("src", "");
                        return;
                      }
                    }
                    _0x43294d[_0xe10e50(401, "u@bM")](_0xe10e50(567, "@2Mh"), _0xbc1ab4);
                  },
                  "get": function () {
                    const _0x4dd7e8 = _0x3f22d8;
                    return _0x43294d[_0x4dd7e8(556, "1zJ#")](_0x72f026["gvVnf"]);
                  }
                }), _0x43294d;
              };
            }
          }
        }
      }
    }
  }
  function _0x5f0b(_0x219a12, _0x4e64ee) {
    const _0x4f90ca = _0x4f90();
    return _0x5f0b = function (_0x5f0b61, _0x1f060a) {
      _0x5f0b61 = _0x5f0b61 - 215;
      let _0x1d8766 = _0x4f90ca[_0x5f0b61];
      if (_0x5f0b["pCeWyI"] === undefined) {
        var _0x5a98b5 = function (_0xe76f51) {
          const _0x4f24e0 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
          let _0x4b7949 = "",
            _0x3c3de6 = "";
          for (let _0x518075 = 0, _0x59aa23, _0x532c78, _0x4a0499 = 0; _0x532c78 = _0xe76f51["charAt"](_0x4a0499++); ~_0x532c78 && (_0x59aa23 = _0x518075 % 4 ? _0x59aa23 * 64 + _0x532c78 : _0x532c78, _0x518075++ % 4) ? _0x4b7949 += String["fromCharCode"](255 & _0x59aa23 >> (-2 * _0x518075 & 6)) : 0) {
            _0x532c78 = _0x4f24e0["indexOf"](_0x532c78);
          }
          for (let _0x4e78f6 = 0, _0x4e3eef = _0x4b7949["length"]; _0x4e78f6 < _0x4e3eef; _0x4e78f6++) {
            _0x3c3de6 += "%" + ("00" + _0x4b7949["charCodeAt"](_0x4e78f6)["toString"](16))["slice"](-2);
          }
          return decodeURIComponent(_0x3c3de6);
        };
        const _0x2c623f = function (_0x9760c9, _0x385368) {
          let _0x4dede6 = [],
            _0x44c62d = 0,
            _0x517a5f,
            _0x351836 = "";
          _0x9760c9 = _0x5a98b5(_0x9760c9);
          let _0x270624;
          for (_0x270624 = 0; _0x270624 < 256; _0x270624++) {
            _0x4dede6[_0x270624] = _0x270624;
          }
          for (_0x270624 = 0; _0x270624 < 256; _0x270624++) {
            _0x44c62d = (_0x44c62d + _0x4dede6[_0x270624] + _0x385368["charCodeAt"](_0x270624 % _0x385368["length"])) % 256, _0x517a5f = _0x4dede6[_0x270624], _0x4dede6[_0x270624] = _0x4dede6[_0x44c62d], _0x4dede6[_0x44c62d] = _0x517a5f;
          }
          _0x270624 = 0, _0x44c62d = 0;
          for (let _0x4d9c81 = 0; _0x4d9c81 < _0x9760c9["length"]; _0x4d9c81++) {
            _0x270624 = (_0x270624 + 1) % 256, _0x44c62d = (_0x44c62d + _0x4dede6[_0x270624]) % 256, _0x517a5f = _0x4dede6[_0x270624], _0x4dede6[_0x270624] = _0x4dede6[_0x44c62d], _0x4dede6[_0x44c62d] = _0x517a5f, _0x351836 += String["fromCharCode"](_0x9760c9["charCodeAt"](_0x4d9c81) ^ _0x4dede6[(_0x4dede6[_0x270624] + _0x4dede6[_0x44c62d]) % 256]);
          }
          return _0x351836;
        };
        _0x5f0b["wNaoyi"] = _0x2c623f, _0x219a12 = arguments, _0x5f0b["pCeWyI"] = true;
      }
      const _0x275943 = _0x4f90ca[0],
        _0x154aac = _0x5f0b61 + _0x275943,
        _0x514b69 = _0x219a12[_0x154aac];
      return !_0x514b69 ? (_0x5f0b["CuwLHT"] === undefined && (_0x5f0b["CuwLHT"] = true), _0x1d8766 = _0x5f0b["wNaoyi"](_0x1d8766, _0x1f060a), _0x219a12[_0x154aac] = _0x1d8766) : _0x1d8766 = _0x514b69, _0x1d8766;
    }, _0x5f0b(_0x219a12, _0x4e64ee);
  }
  setTimeout(() => {
    const _0x127979 = _0x4a6e59;
    document["body"][_0x127979(594, "^2#^")](button);
  }, 1000);
  function _0x4f90() {
    const _0x35a193 = function () {
      return [_0xod7, "DwjyLAsuMkjNhiaxMmiur.LLcoGmK.Qv7DwFLpUR==", "WRBdH8o0vHG", "b3WNWOdcJ8omvCoIW543f8kLbmo6", "DwhdK8k7W6e", "WRfqW4v/WRa", "W68cW4f6W5OMWQPE", "W5e5sMJdRWRcH1ZdVI1YW57cVmk9iK0", "WOKVuYS", "WP3cUCkNpxyHWR/dSmoREZq", "FmkUWOXcE8oBW7tcIb3cUCkshJVdTmomWQ/dM8obWQ9kyq", "WOfpW7bQWPK", "W4GFWPxdRSo+", "WOTMWRKbW5q", "WOXqWR/cKwPwfWPe", "txHEWP0F", "ofZcSCkBWQK", "q8oKW4FcG8ko", "WP5EW5jLWPO", "wXtcRSoppdL4WQGpW5ZdKKFcICoS", "W6hcOWFcQSom", "WO3dRSodxti", "ECkWWRdcPh8", "W77cUsTfw3iytmkqW6a", "lNaXWQdcKq", "WO14yL8N", "g2pcMSkPWOq", "W6SjguxdKSkgp3u", "5PcK5zUN57YcWPO", "WODsWRRcJW", "W7rWCYza", "zJVdMxDVzt3cVSk+WPnVW54", "ySozjKi", "WROcfY5exSk5zCo2qM0", "W4OdWOZdQmo7ou9eWOCzWQ8", "Dv/dVHBdNmkGW6hdGCovyCk9igGlW4FcMSk9W541etBdNHGxW4FcJ8oOr2biouraCqekWQldNtTbySoAWQ5nrSkuWRddTvbatKLqsG9UW555WR9cW7C8WQtdV17cMwiKhmkoCe3cOq85zZdcPCosoXddHHdcJSkuW4r3W6DEjSkVW7XiW4jGWPP6ySkNa8kRs8o6W5TmW6/cRmokWQXbWPxMRitLNPVNLkxMI63MLiNMSQRLJOJMT7xMIzy6W7ddLmoru8oQgSkpW7pdRJtdUZZdV2NcIWxdICopW5SdfttdKSk7tmkSW5Kz", "D8k/oG", "mMmEtb0", "tG/cPHBcJ8oVWQ3cImkryCkIigizWOhcLSoV", "W6OOWRKbkN7dIrlcL0evF8k+", "WPXZWPZcSgi", "rtddJCkaFxOWWOK", "WPPFW5bTWPy", "WPvdW7HyWQu", "fuzGqbW", "WRpcQSoopha", "W6G1WQ4kiq", "WRzanLRdPa", "WPbOW7HUWOBcG8k5W4hcLW", "W4HCymo7W5K", "WODsWQZcKMOlnqvhW6zZzq", "sX7cUa", "W7iQxhNdTq", "CWTVkXHUv8k7W48FW6/cPmouWQ3dRG", "oSk3WPlcGSkmla", "rSoJW4pcUSkm", "axCVkbtcSmk/W7JcUmkn", "vaJdPmkMtq", "DrBcTG8", "eN0R", "WRqTWPBdGCkO", "W4C5W4O", "bauJWQNcMdBdJW", "FmkUWOXfEmolW7FcIrRcO8k3jb7dUq", "WOvZWOtcHtq", "cLebWQtcRa", "W4a5W4hcMK8", "W5X4rtPyA8kjW648zmkqWOvFmW", "Bt3cN8ocfa", "papcRdJcMc7dPd3cPmoSmSonWOeuzmoX", "W4aoW5bpW7u", "WOfpWR/cGuyubGng", "W44PWPVdNCoa", "zZFdIL5V", "e2K/WQZcLW", "Dmk+WQ7cSwO", "WPtcSCorf2S", "WR0tfJzI", "WPb2WRxcHXG", "WOb6WQxcOWlcSSork18iuCkcW4FdImkFaW", "W6ifW5q", "WQDeWOucW6ZdGCkN", "WQtcRSocmq", "CSkLWPXLBmoHW7W", "WRfUWPRcTZ4", "r8koWQnbjW", "DSksWPhcI3K", "W68bW4nXW4O", "W7ddLmkvW4JcGa", "Cw3dG8koW73cMGCKWQRdMCkWBG", "yJVdOmkjEa", "WPmXudpcOW", "ErhcSvilau5g", "WOVdSCo0zdy", "c3O6ibm", "zKTIWRmk", "W5/dNti0WQG", "jKbphqLsvSkZ", "mmk9WPlcKCkUjCoOu8oUW7NdPa", "FsNcOe4R", "gbRcQNtcK8o1WQ/cHCkCl8oMb20uWOlcNCkTWRfYhI0", "ECkHWOTRxG", "f8kRWP7cHSkD", "bmkHohNdIq", "BCkIWOTPDSocW78", "cG4ZWONcJbZdHf7cLxVcSSkdk0hdRhu3aCkkW4SeW4K", "DJBdJeryFIVcSSkDWPi", "W601i0KLW5NdHqvm", "W7HEkG1IAmkzEW", "CJVdMxDVzt3cVSk+WPnVW54", "hNrMd8k6W5xcRmkHW4HZwZRcJq", "W4GwWPxdOq", "WQZdPSoAFWC", "WP9EWORcUL4", "o8kZWOq", "W6GKWQmNmgpdLrZdGXOcDq", "zMhdHmk/W6xcJWW", "W7BdSSk5W5ZcVSoND342c8kqWP0", "AM3dNSkOW6hcMG", "nJRcJSo7WR3dN0uLWPhdOCkVr8ou", "dWqJWRu", "W7ONWPqQkW", "W6uaW4T1W4q", "vCoTWOddMmouuYVdRIRcL8kgWRC", "zmovcuZdJCksWQey", "W5f7WPRcPei+nW", "rdVdJ8ki", "WOK9WPFdHmkAlSkkkd8yk8od", "EmkJWO1HESojW7hcHqddUCkwmJO", "vmknWPbSqW", "WRKrxZRcTmk4W6aEvmoWW5eeW54", "WQfinhxdOW", "qYNdVmkkua", "W6ldSSk5W5JcPSo2Ahi6cSkxWRRcKbxcLSopWOBdGbGnWPz8", "W6ekzKpdRq", "W6ZcItdcPmoB", "gbRcQNpcKmoLWQZcHmkBnCoYbNG+WOVcKSkQWPbzhdtdMG", "WRvqWOtcMaO", "W5u0WQiIaG", "W6z/uSoIW4rFW7ZdJa", "W4u5sMRdTbpcHuddQd1IW6G", "WR7cK28bECoYW4CIWRNcTSo1mG", "WPv6WRZcNaBcUa", "WONcJLK0tG", "gMn3lmkHW4xcH8kPW4rWwrFcLxdcTmouj37dGxBdOa", "lX8KWPBcPq", "yXX+cXH/ASkWW4CpW7JcTq", "sdFdNCkCzh8S", "wXJcHSo1pW", "WOnDfh3dGq", "WQlcO8ormhddP8ksoSkPzCkXW51FW5vF", "W6BdPCkOW7ZcVSo2sNu+g8khWOZcVatcTG", "WQ9OW6z/WPm", "bMf6vXmMAmk/WRPfW4RcPrqAtx8CW4pdNcytaq", "W45HWRRdVmkyo8kskq", "waJdLSkpwa", "WO10W75SWRu", "u8oTW5RcOCkrhYNdTgBcGCkDWR8", "WPrEox/dNSoDwSkVCW", "W4uOr0FdPq", "W7G/ofVdTG", "eftcT8kPWPOMv3G+FW", "ztpdJ8klBq", "W79uxwS1amkoCmorAeddVq", "mGJcVa3cKG7dSG", "a0dcSCkWWOqhxwe1EmknsCkeW6miya", "W5lcQbi", "bc5aFwTUW4NdQCozW6Ld", "W63dSSkKW7RcOSoN", "tmk5WRFcQKC", "vmkXWP/cN3HLWO3dJa", "WOaAAcNcKW"].concat(function () {
        return ["W7uUWRKd", "bdbeCwzLW6tcOCorW6TtW5CJW61AdCoLESobWQHrW4VcJCosW7WkWPhcKvb0W6xdSmoAaCkSW67dP1fT", "W5xdNZ8YWRVcHSk9", "ACkyWQ5i", "papcRdZcGYZdSq", "fxrMca", "gbRcQMlcLCoTWQq", "rsxcMSoenq", "W7fKxmoGW40", "WPn2lMFdNG", "W58CWRJdRmoHpfL+WQi", "WRirxZ0", "odzgWQi", "WPvOdHldHshcSq", "W4aUW5hcIu0xW5HtW4JcKuW", "nCkhWRRcSSkA", "B8kKWRrVy8olW6JcRXxcPmkq", "euFcSCkJWOKXFwe1DSkCsmkc", "WRpcTmocpM/dP8kynmkMBCk3W4D+", "WQWiht5IqW", "q3hdLCkSW6W", "WRmOfCk0WPHaW6xdUITOkW", "W5VdLc8dWQRcPmk+", "DbZcO1KogL1WWPxcTKGt", "CSkpWR9VfMtcSbT3usdcIq", "xJtdQCkprW", "W6mKW6P5W5u", "WQ3dMfWzuW", "WOz8WOJcKaq", "5PIP5lM+5PEt5O6m5Pw15RgP5y285lIN6l6t", "hHhcQL/cN8oVWQ/dGCkul8o1lwisWONdNSkPWO9IdNtdNbumW4RcHmojdNuFkJ4poe9EW6FcJW", "W5mUW53cVMevW4zsW5NcMLZcKMj1kCki", "oSk3WPRcKq", "W7Wpfe4", "kWNcSqBcNItdPG", "e2SW", "W515sIDzFmo0W7u+C8oBW4esCYNcICkj", "p8kJWQ7cLmkp", "WPrlW6ryWPG", "W5ZcLdBcPmom", "r8oPW4hcHmkmbtZcS2FcM8ke", "WRntWPi", "W5bVrJu", "WRiQW6zeW6ifWP8", "rmoPW5RcGCoFaJBdVgpcKCogWQK1rmkIve5Sfx5PsSoSWRTrWPtcJ2ZcKCoEgSkBACookCkIeHFcS8oyW63cICoFW6hcPqvvq3HLW5JdJt8", "WOrvWRyaW6K", "chW6WQlcI8oD", "W71krr5f", "jgerWRhcOa", "WOhdVmodvdm", "eNa0WQ3cLW", "W6mjcq", "smo6W4VcHG", "W7GZWRihmhldOHNdHaitFSkN", "CWJdMujv", "W4JdNHC4WRtcRmkPWPtcKCkTsG", "cKFcHSkwWRW", "W5BdOceWWQe", "us9GW7tdM8kqamovW6u5eCk2ja", "WR/dQmosDbZcNZy", "f1qBWRdcMW", "gwL0amkIW5/cImkP", "sJRdHSkFwa", "W4efW5TDW6a", "W4RcQapcImouumkFWQaVeCokAW", "WQb7y0S", "bwa+cG/cU8koW7hcPCkuWRVcJ8oy", "WRNdPwW2swKnq8kMW5BdNmoR", "h0bpj8kp", "mSk7WO/cHmkAkmo/xG", "vHBcUKql", "W6hdSCoxjW", "EqpcSLGjehLlWOJcO0a", "CadcU0OJ", "W7mZWRia", "yJ/dMvnPFc7cPCk3", "eCk/W57cMa", "wbtcVmo2idnyWR8sW5JdJMpcNmo5WPVdKa", "fmk9WP3dK8otcHldHgZcO8kJ", "DbZcPq", "WOvPWRtcVtO", "W6aiaKtdN8kn", "5yIo5A+86lAzAq", "WPnfbhldJW", "qmkDWR56fq", "WRtcR8o9WQxdUSoJFuuUd8kv", "WOX0WQNcUYC", "gLdcVCkLWPuG", "WQhcT8oIeKK", "ywrFWR0dqW", "W5D2W7HS", "WQiidJ5Ux8kWqSoNvxxdOG", "W6/dLCoNDHi", "WR0cgXTZrCkLEmoXww3dOG", "56ME5A6E6k6W6k6Zia", "wmk7WQn7fq", "WR1SCei7W7hdPaa", "AcFdHSkRFa", "W47dRCo7AIKUWPhcH8oGqXm", "WQJdRmocuXRcNYuEW6ZdNq", "WQ1Jgf/dIa", "kxqYWQlcHG", "trJcR8oojG", "W5TiWPRdTW", "q8o6W4VcGCkrdH7dSwhcMCkmWRq3", "WRzRDeTJW7BdOb1lW5/cSq", "W480WOVdPCoV", "zJBdM8kizW", "u8o6W40", "zSkpWR96c33cPW", "m0Dakmk0", "W5fZrZzoqCk/", "WQOvdI1oxmk2DSo2", "W6jxwWLd", "WQNdPSoevrtcKJK", "sKHfWOOQ", "W5SCWPxdO8oHoh4bWOSdWQ5cxCoP", "WQVdSgGsu3K8qSkTW4/dJa", "W7aftvpdKG", "WRZdRmocuqhcHsmsW7BdNbxcGG", "W4e9sK7dSKRcMKJdUcm", "WRNdTgeBwa", "kmoZWO53", "W7FdHXmnWQS", "xbtcOCok", "E2raWRuauKFcNSoOW5BdUthdHSknWRK", "WRmfqI3cGq", "FXBcTNWtaeHkWOpcULat", "fxCVkG/cQSk5W7tcOSkmWQRcHa", "WRzUrLGk", "DIZdGKvOxJ3cVSk7WO91", "WQTKdMVdOq", "gYLNFbSMFq", "W6lcSqdcVSoi", "q381WQm", "W7BdO8k0W7hcRW", "W4TPwJ9t", "BMrcWOOzwhJcMCoWW4FdOXpdSSkZWOdcHG", "WOWlhZDR", "eNrIEWS", "54MC6k+v6k+MWPm", "W4VdPCoZAZmQW5JdISoSqq", "jCkQnGBdHCoWbJRcH8owWR8FhqtdSSoz", "xYZdJq", "WQKrwq", "BbddR3b2", "WPzkWPhdSqJdN8kpftdcM8o3pLi", "fwTEFbG", "W68bW4nXW4PT", "hhzZaSk3", "W6RcTWhcI8oh", "WPXBWPVdQb0", "fCkDWQ/cJmki", "dNj6aSkR", "k8kHjJpdJ8oqea", "WRXWDKG", "bmkwms7dPq", "fwyIbX4", "yqLpot0MWPVcISodja", "cxC3WQdcM8oMxG", "bLRcKmkJWOK1Bv8C", "vJRcUmoinq", "W6tdTmkEAY/cS8oTmmkAtCk5W6vj", "WRCxBbtcKG", "WPjeW4ZdQSo+euHAWP8", "BMrcWPGeqMBcMmoRW53dVqBdV8k2WPdcJwSubuhdKq", "wtBcKNOp", "W4RdOmo9BsS", "ndpcUN/cLG", "oY7dG1e", "WRTwW7X8WPS", "W4TXD8ooW48"].concat(function () {
          return ["DrlcTLGvhvTpW4ZcUeucbdvJamkGEmoQ", "W69XuCoVW4a", "bhS8dLBcVCkQW7pcTSkyWQ0", "if4m", "W7zPvCoP", "W4hdPmkdW5tcGG", "W4/dGZG", "FWXYkb8", "WQvIWPldGc0", "C2hdMCkOW6FcHXSQW77cGSkNzmo6", "jN7cJSomkd51W5RcVcitECkzcCojdCoFWODZo8k9WPlcPCkjvaHUW6HSWQDyWRFcK1ddTtqVWPrwpmkIgSkCWOldRvmQWPv6DSoeWQGknW0lWRmyqracA8oUW64lgmk+wmkQBce4WRdcRCoAcmoOtL7dICocyI1UWPunWOaMohZcNmkJW6aundrmqdDaWQWYiqVcJCkqW7/cH3xdUuaXBXddQ1fpkgxdHmoEtLLfc8kxW5pcUMhdQ8kZaCkLlZtcNmkUWPusnvldNmoIrbHEWP/dTCkiWPBdH8kRmMX+BuFcJmo3W7ldQ0FcI8k3W7pcP8oNW6FcPbRdGWvCW67dQCkjW51vgulcT2pdOSk9qSkOt3DmW73cImohFmoUWP5ZW7W2kmocC2NdKs5Jds0nE8oun8ogW7lcI8kwW5JcSCoXih4femkDn8kYCaOynCo9WQ3cQSkqWQ7dJhFdNGmpabH4ymkviSo/wSoFCGtdId3cPutcOCkiWOFcImkVCCkLW6mjWPPzWOJdOSkUW5yHBxJcTmkeW7vUiCkQuSk2p8oXWOJcNSofWPCSW6OwFZxdI8kfzrCouaq3W7NdOCkBW7lcOe7dH8ozWOjOemk2W6FcSHhdOx8BWRvzW4X/W47dHIryWPLEWPymldddKSkMm1fjWQe2W4dcJgBcKSkeDCklW4dcIrRdGmofW68spCk+jvtdTSkEWQLxW695W55AWOVcStrmW5raE8kRv8k8WO7dKXxcTmkFqmoBzNRcGCoQySkRrJxdTmoGymktxCkTC8krWQNdSaKVW6fvn8kPW6/dRN/cR8ofDKTvWPVdSCkuWPCOWPLpW73dRmoEW6zEWQtdQ8kUWQ7cTb3dQmoQx8oztYlcSN3dGCoqW790WR14WOOpWR7cICkBW7D6rGJcL3zCWP/dG8krWRnAWPTQFmkEWP1mWQOWW45lzSkzB8kyACoSWOFdQe0GF3G2nrzmWP3dRehcT8kysH/dQ19wiCoZWQFdLSkIyKVcGSkLjSkbzHJcNmo7xtPMhu/cO8kMWOldR1DhWRpdImokgfZcHNHonSksW4NcUSotWR3dHCoUW7JdK8kLWQJcNCocW5BdL3ZcNsbayCofDSkEbqO2WQ/dVsZcLSo/f8kas8oszmkkqY8BW7GtW6K5W5JdOCo7W6f7WPnfA05Fw3CnxSkcWOpcOqpcS3JdU2ZcJSkzWOtcJmowy8k0omoCDvdcQCofWRyCWOL1W6zjhmonW49jW7/dNg7cICkJWO0+W5dcUc7cMhaFAmk6WOfOWPToW4RcPSkmWOtcHSo9m8oPW53dNKywWQzfch/cVN7dKf7dNSoqWPD1WRRcGCkxFCkiW7RcLaqWlSkvlSkDW5njhtzIWRmgbshdM1hdMvz4Ax7dMmopsb/cLdhdQwf5WOLocmk5W4WootVcOmoCixtdHqlcPeVdJSkjW7LZWRifdCoeWRHmxwblwCoFF1meW6XVsutdGSkaDSovE8kLFaJdTmoJW6nyxdFcNfJcHdBcGCkqWOpcVSoQjLNcSCotwSo7dSkXW4dcVbpcJGpdPsxcLmomW7GFW4y7W5RcPMCQWRRcJItcGSkgWPddR8k5WRNcHmo+kCkqW5NdGSoCW5FdPZ0xesRcUSoapsrZbeRcLf0lr8oWWRyoW5yGWPtcIrzucSkinmkLW77cOmk1CMRcLWadWQBdScJdOhpdNSoCW7GoW6/dTmoQC1JcVmoUW5hcHCosWQ4NxCoJEhvRt8ojA8kmoCoIkJxcGJfoWO5JjXFcHIFcRSodqSk0kGxdHNf4WRmq", "jCkMWOxcICkD", "fhyFWQRcLmomsSoeW5eWma", "WQ0kxI/cQa", "EthdJLDVEcdcUq", "WRvuW5rH", "p8k8WP/cICknimo/sq", "tKrDWOKA", "DrNcNmohma", "WPz4WQJcG0i", "WQT+WPdcUgi", "i8kykvNdNG", "nmkRWO7cPSkc", "W7pdNSoMFGm", "WOGwpqje", "vHFdGmkiBwy", "W7Wudq", "W4bFysD0", "WQZdRhCytW", "WRnNz348W7RdSrzpW4RcUYqwW60qtW", "WRFcO8otgNFdP8kWpCkTDmkHW6TZW4r/bsBcQKyHwmoI", "5lMQ6l255As/6ls3", "f8k+WPddHCkBkmoZwCoKW6tcSgtdPYBcVW1PmW7dOhW", "W6yiae7dJmkHcLZdMG", "WR7dPwadeh4ArmkWW4BdMSkUWOi2WOlcJa", "W4aYW5NcMa", "W4j+DX9N", "EXlcRLe", "nH7cJhtcMW", "daVcP1RcMq", "WPqCWPpdJ8kG", "WPFdRCoCwHC", "WPDWWQlcMGtcTmooia", "W6ZdUCkPW7JcSSoCyW", "oCkNifVdNa", "W6BdU8kKW77cOq", "W5b4sJrEEG", "tmoNW4/cHmkmbtZdMw3cGG", "WPGwjb5j", "W4NcRWRcUCol", "W7OjEN7dLG", "nCkGWPNcHmkmiCovwmoLW7ldS3pdNrNcGW", "nSkanu0", "W7WpW7zAW74", "qtntdZ4", "W4GbWPNdRmoHoeLaWOSyWQ5cxq", "W5bzBCocW5S", "AmksWRXQca", "WQbYWQ3cOwi", "ygFdK8k2", "5Q+w5Qc06kYj6k2UW5y", "W78yW4dcKgy", "W69PuCoMW6m", "W7HZCCoaW7K", "WRJdOmoszb0", "W4RdRCo4yG", "xJFdICkeFa", "dmoOWOZcIW", "W5FdMmkyW7BcSa", "W4mgW6hcIhy", "xYRdL8kaBq", "fgBcNCoEpcLMWRVdIxT6wmk0", "WQjWWPNdQry", "W7b5qSoKW5W", "vHZcRW", "CbBcQ1Opaa", "WRi2vHFcQq", "sbz6lWy", "awKJWQdcJConE8oVW5KVmq", "Fb3dVCk/sG", "EGxcT2qR", "W70TWRiE", "EXlcReSgbXDtWOdcOueA", "W4yZtuldTa7cMeC", "WQXbhNNdKa", "d0qzjcNcQCo7W5BcH8kEWRhcOmoTW7inWOKdWPVcRXVcVSonW6XSmuK8WOldTc4cWR8faSoTtq4AimkDWQ1WW7VcLmkTWOPcW5foWOxdPh1qgSkIW6tcHSomW5P6q0hcSSkuWRJdQSovhLJcT1HKs8ozt0qql8oOW5XWwKfdrCoqFwT5ivhdQmkPCqddSYrlWRVdVCkMwCoWqSoPWQmEWPxcTCoMsa9/j8ozW4nhsetdVr7cGSkQW6jQWQetc1niBmonW4mSWRxdKCoHWOVdVCoNW5pcOhrefehcPfBcHSkCl8oefSorWPSqwJRcJmoalwuaWPPPoa1EWP7dGgqKW7K+WR5kxwH/WQqEW7ddIwrdDuVdRWXYsCkaWPRdTCo6g3RdOrqeW5pcJhvmWR/dKCo2W4nqW4xdGaO8W4tdVmk7aSo7x8oczSoIWQpdQdH+WRVcO3JcGI3dR8oSWQdcUSkuWONdRSo/kvdcOYbHW5FcQLvqW5jTW747W6RcUSoDsMpdOSoalCogaIeaWRhcP8kBW5O3tWnpkSkRWOPaWR7cRa7cHHC+zJNdMxtcR8ov", "WOP3WORcN24", "W5WAWPJdUCo9", "W6BdU8kSW67cUCoFBgqG", "cXFcU1G", "W65hF8o2W7K", "WQathtr/", "W5WYW4xcVL4", "sZVdMSkPzhS4WP/dSNzdv8kpk8obbCocWPn5m8kMW5C", "wSoIW4lcPCkt", "W6n0qCojW55vW7pdNb1WkCoHW6vPWQ3cNa", "u8oKW4FcG8ka", "WRqeoXzw", "avdcOmkdWOKGsMqYBSknqW", "WQDeWOuvW6RdGSk2W6egW4y", "nLSpyay", "WRDTFvOVW7ZdRWa", "BMrcWPSFq3RcLCoGW4BdRIa", "sXtcSmosFt9BWQK", "W7pdHSoSvdu", "W5v8vZbE", "WPldRLezvq", "WO1SWPtcKH8", "W6uEW4D3W5SNWOPbW43dQ0ZdS8kU", "kqpcRGFcGstdMZRcVmo9kmoVWRuQxq", "mY5KqwW", "e1WLWRdcRG", "W5GbWP8", "WOP0W7u", "W5RdUmoTyIu", "W4CvW6T9W6y", "W7ldVSkPW6NcOG", "n8kWWO/cISkumCoUxW", "WPPwWPJdVX3dNG", "WQfAWO3dUtq", "ahWurZ4", "jmkvifa", "WO49WPVdSCoboCklmG", "mSkzjehdLmkD", "ErDPjHLVFCkQ", "WOPJW6jkWOdcV8kFW6xcUxdcKfu", "WRnvWOG6W6a", "uCk+WO/cH0rVWOZdMNqKDq", "vgGdkt0ZWRldK8oLW79JW5qP", "EgldM8kkW78", "cxC9WQdcKCoHBmokW7W", "W77cU8ogAa", "W7qtvdW", "jg3cNWCPibBcTSkEWQjcW4e", "WQxcK3iNzCoY", "cmkioN/dMq", "EGRcSh4D", "W6ldSSoMdvddISkplW", "W5GigehdJG", "WOBdQmoKuHi", "WRvYy0SGW7hdGHTuW5lcPG", "l0PucSki", "W4xcTqFcJCojw8k9WP8+bCodyaK", "WR11W5HcWRW", "pvWDBcLHWO/cPCoY", "W4KsWP/dPSoYl2nzWOar", "WRjUFee8", "WPjTWQyYW4m", "W43dO8oJycWVWPFdJq", "W4BdJ8kjW4RcSW", "W5CjWP/cPeqXnrm", "W64EW4DW", "WRzGxq", "WRrXWRZdHsG", "WPtcS006wG", "umk+WOq", "WPfYW6j7WOFdSCocWQm", "aWq1WQhcGru", "WQbTv086W7tdLcfX", "CCkOWPRcG28", "W4hcOHBcQCorw8kvWPy1hmovtaqIkrBdRSkFWRVdNCoBW5G", "WPSpvNVcO8kXW4WrwSoUWPqjW4xcUmoBa8k4WORcICkhWQW", "bMf6uraTCCk/WQXf", "yCovAqZcGSok", "WQjRyeCSW7ZdRrPjW4C", "WRKcvc3cOCkU", "W75eucTK", "EmkNWPfJFW", "WO8BWRVdKmkK"];
        }());
      }());
    }();
    _0x4f90 = function () {
      return _0x35a193;
    };
    return _0x4f90();
  }
  ;
  function getBase64Image(_0x28e18c) {
    const _0x287924 = _0x4a6e59,
      _0x5e5a15 = {
        "mMrSl": function (_0x30199c, _0x5c0526) {
          return _0x30199c + _0x5c0526;
        },
        "JLEwq": _0x287924(430, "ipC)")
      },
      _0x145f22 = "0|5|3|7|4|1|2|6"[_0x287924(421, "YvuT")]("|");
    let _0x557085 = 0;
    while (true) {
      switch (_0x145f22[_0x557085++]) {
        case "0":
          var _0x42fdd5 = document["createElement"]("canvas");
          continue;
        case "1":
          var _0x4c6a33 = _0x28e18c[_0x287924(390, "GKqN")]["substring"](_0x28e18c[_0x287924(682, "AHo9")][_0x287924(581, "F%pW")](".") + 1)[_0x287924(298, "iPF6")]();
          continue;
        case "2":
          var _0x192894 = _0x42fdd5["toDataURL"](_0x5e5a15[_0x287924(320, "@2Mh")](_0x5e5a15[_0x287924(670, "s0wq")], _0x4c6a33));
          continue;
        case "3":
          _0x42fdd5[_0x287924(588, "8Frn")] = _0x28e18c[_0x287924(278, "2Azd")];
          continue;
        case "4":
          _0x4d70ee["drawImage"](_0x28e18c, 0, 0, _0x28e18c[_0x287924(699, "by8^")], _0x28e18c[_0x287924(500, "dcjG")]);
          continue;
        case "5":
          _0x42fdd5["width"] = _0x28e18c["width"];
          continue;
        case "6":
          return _0x192894;
        case "7":
          var _0x4d70ee = _0x42fdd5[_0x287924(381, "u@bM")]("2d");
          continue;
      }
      break;
    }
  }
  button[_0x4a6e59(549, "s0wq")](_0x4a6e59(499, "2Azd"), function () {
    const _0x8bcb02 = _0x4a6e59,
      _0x170c97 = {
        "FYsxR": _0x8bcb02(602, "fV8q"),
        "bjskJ": function (_0x1ef61e) {
          return _0x1ef61e();
        },
        "DyhGt": function (_0x484061, _0x17cfe0) {
          return _0x484061(_0x17cfe0);
        },
        "zcTLQ": _0x8bcb02(356, "2ET6"),
        "RLWdF": _0x8bcb02(619, "L]j%"),
        "VqKDN": function (_0x37ddc8, _0x5800e7) {
          return _0x37ddc8 + _0x5800e7;
        },
        "gXDnn": "\u4E0B\u8F7D\u5931\u8D25",
        "blUvD": function (_0x2e683d, _0x2cc8e3) {
          return _0x2e683d !== _0x2cc8e3;
        },
        "DxBtC": function (_0x493c6b, _0x215f34) {
          return _0x493c6b != _0x215f34;
        },
        "ZRrpC": "blob:",
        "GEkSq": function (_0x26c166, _0x7672f4) {
          return _0x26c166 * _0x7672f4;
        },
        "AwuTw": function (_0x4e2608, _0x4203c7) {
          return _0x4e2608 * _0x4203c7;
        },
        "IaRBg": _0x8bcb02(598, "d1Yz"),
        "hylCP": function (_0x5ad392, _0x502fc1) {
          return _0x5ad392 != _0x502fc1;
        },
        "DCDXZ": _0x8bcb02(610, "@2Mh"),
        "sEvuM": function (_0x1db1dd, _0xb59afd) {
          return _0x1db1dd === _0xb59afd;
        },
        "mytjK": _0x8bcb02(302, "lZkz"),
        "JqwTw": _0x8bcb02(402, "E)!p"),
        "KByBd": _0x8bcb02(454, ")Tg7"),
        "AUCox": _0x8bcb02(472, "Or@P"),
        "yNBFm": _0x8bcb02(480, "Ck$g"),
        "DoLWr": _0x8bcb02(512, "edB["),
        "NuuDF": function (_0x5c8e12, _0x3c85a3) {
          return _0x5c8e12 + _0x3c85a3;
        },
        "uCXUJ": "\u6682\u65F6\u672A\u83B7\u53D6\u5230\u65E0\u6C34\u5370\u56FE\u7247,\u53EF\u968F\u610F\u79FB\u52A8\u4E00\u4E0B\u6D77\u62A5\u5143\u7D20\u518D\u5C1D\u8BD5\u4E0B\u8F7D",
        "xYBwj": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d",
        "xIEOs": function (_0x4bfebd, _0x118f51) {
          return _0x4bfebd === _0x118f51;
        },
        "tBnRc": _0x8bcb02(350, "YXpu"),
        "uJJfP": _0x8bcb02(368, "by8^"),
        "QJYER": _0x8bcb02(281, "L]j%"),
        "ntrnx": function (_0x453ae9) {
          return _0x453ae9();
        },
        "KUsuK": _0x8bcb02(486, "qoX%"),
        "byrCz": function (_0x397f92, _0x531046, _0x19c576) {
          return _0x397f92(_0x531046, _0x19c576);
        },
        "lyJsp": function (_0x1d4f99, _0xb7bd82) {
          return _0x1d4f99 < _0xb7bd82;
        },
        "TMhLr": function (_0x373b20) {
          return _0x373b20();
        },
        "SjZkQ": _0x8bcb02(641, "mISl"),
        "afCLo": "hzbBV",
        "trhgA": _0x8bcb02(618, "^2#^"),
        "AEPGh": _0x8bcb02(257, "D3lG"),
        "zjlEv": _0x8bcb02(414, "YvuT"),
        "CXDWy": _0x8bcb02(398, "uuhC"),
        "eHHoz": "none",
        "hxyGz": function (_0xaf243b) {
          return _0xaf243b();
        },
        "JNRHf": function (_0x383bd6, _0x22bfb8) {
          return _0x383bd6 * _0x22bfb8;
        },
        "wMHux": function (_0x4a5d2f) {
          return _0x4a5d2f();
        },
        "xVJJE": function (_0x158384, _0x22026a, _0x58994e) {
          return _0x158384(_0x22026a, _0x58994e);
        },
        "pvTSv": _0x8bcb02(456, "t&]W"),
        "MnbtY": _0x8bcb02(537, "E)!p"),
        "fkmZi": _0x8bcb02(357, "y#bF"),
        "VpTYi": _0x8bcb02(461, "4qIG"),
        "ohhUv": function (_0x28fee6) {
          return _0x28fee6();
        },
        "Lwfpb": function (_0x4cc332, _0x56c0f2) {
          return _0x4cc332 === _0x56c0f2;
        },
        "CIsPA": _0x8bcb02(450, "[C3Z"),
        "icoxa": function (_0x41316b) {
          return _0x41316b();
        },
        "KGHWQ": "style",
        "iqRqw": _0x8bcb02(373, "JkmZ"),
        "eZbsL": "div",
        "acYct": _0x8bcb02(380, "fV8q"),
        "ixwDj": function (_0x21de20) {
          return _0x21de20();
        },
        "KSimh": function (_0x3b10b3, _0xc397db) {
          return _0x3b10b3 !== _0xc397db;
        },
        "FdhoE": "pvBHA",
        "ROUkz": function (_0x389a00, _0x1d17b4) {
          return _0x389a00(_0x1d17b4);
        },
        "diNSm": function (_0x19cf43) {
          return _0x19cf43();
        },
        "esnZD": function (_0x3a5abb, _0x2ad3af) {
          return _0x3a5abb != _0x2ad3af;
        },
        "Wnvjp": _0x8bcb02(238, "iPF6"),
        "dGwhz": _0x8bcb02(364, "y#bF"),
        "DvbRu": _0x8bcb02(372, "@2Mh"),
        "mmLms": "canvas-slot-inner",
        "sxqbz": _0x8bcb02(423, "fV8q"),
        "PZfPQ": "DkhAt",
        "xIfam": _0x8bcb02(510, "s0wq"),
        "DtGVl": function (_0x5823bc, _0x368392) {
          return _0x5823bc + _0x368392;
        },
        "dvUVd": _0x8bcb02(514, "lZkz"),
        "uRSTS": _0x8bcb02(488, "i!Q#"),
        "mhaKh": function (_0xd2eb37, _0x232b3d) {
          return _0xd2eb37 >= _0x232b3d;
        },
        "YQhUw": _0x8bcb02(540, "edB["),
        "ZJxZu": function (_0x18ccba, _0x3772a1) {
          return _0x18ccba - _0x3772a1;
        },
        "RhMKa": function (_0x366749) {
          return _0x366749();
        },
        "IRjhc": _0x8bcb02(312, "[C3Z"),
        "BPjwo": function (_0x379a74, _0x2db8bb) {
          return _0x379a74 / _0x2db8bb;
        },
        "bvuYL": _0x8bcb02(463, "lZkz"),
        "lEnSQ": function (_0x5f13fa, _0x11f71c) {
          return _0x5f13fa + _0x11f71c;
        },
        "LUDUV": "\u9752\u67E0\u8BBE\u8BA1_",
        "mYzql": _0x8bcb02(536, ")Tg7"),
        "DwvHp": _0x8bcb02(611, "cG$D"),
        "TbyiH": function (_0x3527bd) {
          return _0x3527bd();
        },
        "ifcVR": "isheji.com",
        "XdjJb": _0x8bcb02(651, "dcjG"),
        "JieYT": "editor-center",
        "QoBhu": "editor-img.699pic",
        "SgXVA": function (_0x183c3c, _0x46a9eb) {
          return _0x183c3c + _0x46a9eb;
        },
        "yImOJ": _0x8bcb02(649, "Uf16"),
        "thEUU": function (_0x403882) {
          return _0x403882();
        },
        "EKmIH": "PageList_coverImage__iLVQs",
        "lWZzQ": function (_0x5c0d6f, _0x3a6229) {
          return _0x5c0d6f < _0x3a6229;
        },
        "cYFfb": "TVdZE",
        "XSZEM": function (_0x14e7ce) {
          return _0x14e7ce();
        }
      };
    let _0x5f6b43, _0x423fb8;
    if (_0x170c97["DxBtC"](hostname["indexOf"](_0x170c97[_0x8bcb02(310, "by8^")]), -1)) {
      _0x5f6b43 = _0x170c97[_0x8bcb02(248, "2ET6")]("\u7A3F\u5B9A\u8BBE\u8BA1_" + new Date()[_0x8bcb02(286, "HrcV")](), _0x8bcb02(385, "4mlF")), _0x170c97[_0x8bcb02(511, "k(8e")](showLoadingScreen);
      if (!GaodingData) {
        if (_0x170c97[_0x8bcb02(515, "AHo9")](_0x170c97["FdhoE"], _0x170c97[_0x8bcb02(706, "k(8e")])) {
          let _0x18623b = _0x32e61b["createElement"]("a");
          var _0x2a605b = _0x3d5b56[_0x8bcb02(268, "*gF$")]("image/png");
          _0x18623b[_0x8bcb02(375, "JkmZ")](_0x8bcb02(285, "k(8e"), _0x2a605b), _0x18623b["setAttribute"](_0x170c97[_0x8bcb02(438, "qdHv")], _0x1cee67), _0x18623b[_0x8bcb02(666, "BUTu")](), _0x170c97[_0x8bcb02(554, "d1Yz")](_0x4b4516);
        } else {
          _0x170c97[_0x8bcb02(523, "AHo9")](hideLoadingScreen), _0x170c97[_0x8bcb02(522, "2Azd")](alert, _0x170c97[_0x8bcb02(622, "6mCg")]);
          return;
        }
      }
      const _0x59bbc0 = URL[_0x8bcb02(261, "2Azd")](GaodingData);
      let _0x4b3210 = document[_0x8bcb02(299, "8Kr[")]("a");
      _0x4b3210["setAttribute"](_0x8bcb02(287, "YXpu"), _0x59bbc0), _0x4b3210[_0x8bcb02(227, "2Azd")]("download", _0x5f6b43), _0x4b3210[_0x8bcb02(717, "^wH@")](), _0x170c97[_0x8bcb02(258, "Or@P")](hideLoadingScreen), URL[_0x8bcb02(260, "BUTu")](_0x59bbc0);
    } else {
      if (_0x170c97["esnZD"](hostname[_0x8bcb02(274, "HrcV")](_0x170c97[_0x8bcb02(592, "Ck$g")]), -1)) {
        _0x5f6b43 = _0x170c97["NuuDF"](_0x170c97[_0x8bcb02(502, "JkmZ")](_0x170c97[_0x8bcb02(388, "uuhC")], new Date()[_0x8bcb02(288, "[C3Z")]()), _0x170c97[_0x8bcb02(415, "mISl")]), _0x423fb8 = document["getElementsByClassName"](_0x170c97["mmLms"])[0], _0x170c97["ohhUv"](showLoadingScreen);
        var _0x1533f2 = _0x423fb8[_0x8bcb02(275, "8Kr[")](_0x8bcb02(708, "ipC)"));
        _0x1533f2[_0x8bcb02(396, "u@bM")](function (_0x545394, _0x98069f) {
          const _0x38fdd4 = _0x8bcb02,
            _0x104a6c = {
              "mVMWU": _0x170c97[_0x38fdd4(689, "Or@P")],
              "AyIkI": function (_0x4f4fd3, _0x2181d1) {
                const _0x5b9e8d = _0x38fdd4;
                return _0x170c97[_0x5b9e8d(705, "by8^")](_0x4f4fd3, _0x2181d1);
              },
              "XvkCD": "image/",
              "NCNNm": function (_0x1a511e) {
                return _0x1a511e();
              },
              "jsEao": function (_0x363abe, _0x2da0fe) {
                return _0x363abe(_0x2da0fe);
              },
              "aofjJ": _0x170c97["gXDnn"]
            };
          if (_0x170c97[_0x38fdd4(411, "^2#^")]("UuGSI", _0x38fdd4(478, "JkmZ"))) {
            let _0x38c097 = _0x545394[_0x38fdd4(219, "y#bF")]("href");
            if (_0x170c97[_0x38fdd4(253, "8Frn")](_0x38c097[_0x38fdd4(274, "HrcV")](_0x170c97[_0x38fdd4(477, "fV8q")]), -1)) {
              let _0x50fb74 = _0x545394[_0x38fdd4(631, "iPF6")]();
              var _0xadc586 = document["createElement"](_0x170c97[_0x38fdd4(601, ")ciD")]),
                _0x1dc76c = _0xadc586[_0x38fdd4(553, ")ciD")]("2d");
              _0xadc586[_0x38fdd4(570, "2Azd")] = Math["ceil"](_0x170c97[_0x38fdd4(471, "1zJ#")](_0x50fb74["width"], 1.5)), _0xadc586["height"] = Math[_0x38fdd4(221, "uuhC")](_0x170c97[_0x38fdd4(366, "k(8e")](_0x50fb74["height"], 1.5)), _0x1dc76c["drawImage"](_0x545394, 0, 0), document[_0x38fdd4(513, "lZkz")][_0x38fdd4(354, ")Tg7")](_0xadc586);
              var _0x570b1f = _0xadc586["toDataURL"](_0x170c97[_0x38fdd4(593, "u@bM")]);
              _0x545394[_0x38fdd4(552, "8Kr[")](_0x170c97[_0x38fdd4(551, "JkmZ")], _0x570b1f);
            } else {
              if (_0x170c97[_0x38fdd4(546, "AHo9")](_0x38c097["indexOf"](_0x170c97["DCDXZ"]), -1)) {
                if (_0x170c97[_0x38fdd4(565, "Uf16")](_0x170c97[_0x38fdd4(516, "s0wq")], _0x38fdd4(723, "qoX%"))) {
                  var _0x52e256 = new Image();
                  _0x52e256["crossOrigin"] = "", _0x52e256["src"] = _0x38c097, _0x52e256[_0x38fdd4(363, "Ck$g")] = () => {
                    const _0x39b8bd = _0x38fdd4;
                    let _0x75b8bb = _0x170c97[_0x39b8bd(379, "D3lG")](getBase64Image, _0x52e256);
                    _0x545394["setAttribute"](_0x170c97["zcTLQ"], _0x75b8bb);
                  };
                } else {
                  var _0x5f4b6a = _0x516f0c[_0x38fdd4(240, "L]j%")](_0x104a6c["mVMWU"]);
                  _0x5f4b6a[_0x38fdd4(625, "lZkz")] = _0x4f8eaa["width"], _0x5f4b6a[_0x38fdd4(369, "8Kr[")] = _0x3533a5[_0x38fdd4(529, ")Tg7")];
                  var _0x3c4f22 = _0x5f4b6a[_0x38fdd4(677, "t&]W")]("2d");
                  _0x3c4f22[_0x38fdd4(394, "JkmZ")](_0x21616a, 0, 0, _0x5060ab[_0x38fdd4(541, "uuhC")], _0x933abf["height"]);
                  var _0xab7202 = _0x54bbee[_0x38fdd4(566, "uuhC")]["substring"](_0x104a6c[_0x38fdd4(569, "ipC)")](_0x246576[_0x38fdd4(426, "L]j%")]["lastIndexOf"]("."), 1))[_0x38fdd4(337, "^wH@")](),
                    _0x524e06 = _0x5f4b6a[_0x38fdd4(612, "^2#^")](_0x104a6c[_0x38fdd4(241, "*gF$")](_0x104a6c["XvkCD"], _0xab7202));
                  return _0x524e06;
                }
              }
            }
          } else _0x104a6c[_0x38fdd4(474, "edB[")](_0x25397b), _0x104a6c[_0x38fdd4(561, "by8^")](_0xb98e59, _0x104a6c["aofjJ"]);
        }), setTimeout(() => {
          const _0x59fc54 = _0x8bcb02,
            _0x39f773 = {
              "Lpcgz": function (_0x1fab3b) {
                return _0x170c97["bjskJ"](_0x1fab3b);
              },
              "Blpml": _0x170c97[_0x59fc54(309, "i!Q#")],
              "DsNIH": _0x170c97["AUCox"],
              "owRfX": _0x170c97[_0x59fc54(492, "[C3Z")],
              "OFhlW": _0x59fc54(324, "dcjG"),
              "Yzqqi": _0x170c97["FYsxR"]
            };
          let _0xdbfcc5 = _0x423fb8[_0x59fc54(447, "1zJ#")](),
            _0x3f3272 = _0xdbfcc5["width"],
            _0x412e8c = _0xdbfcc5[_0x59fc54(228, "lZkz")],
            _0x19a49c = {
              "backgroundColor": null,
              "useCORS": true,
              "allowTaint": true,
              "skipFonts": true,
              "x": 0,
              "y": 0,
              "ignoreElements": _0x372b6e => {
                const _0x18bddc = _0x59fc54;
                if (_0x372b6e[_0x18bddc(542, "2Azd")]["contains"](_0x170c97["JqwTw"]) || _0x372b6e["classList"]["contains"](_0x170c97["KByBd"])) return true;
              }
            };
          html2canvas(_0x423fb8, _0x19a49c)[_0x59fc54(543, "[C3Z")](function (_0x2c53d9) {
            const _0x1e3dc4 = _0x59fc54,
              _0x1d386f = {
                "bveNJ": function (_0x13f942) {
                  const _0x2a74ed = _0x5f0b;
                  return _0x39f773[_0x2a74ed(538, "*gF$")](_0x13f942);
                },
                "iVNky": _0x39f773[_0x1e3dc4(420, "JkmZ")]
              };
            if (_0x39f773[_0x1e3dc4(459, "2Azd")] === _0x39f773[_0x1e3dc4(597, "@2Mh")]) {
              let _0x35086d = document["createElement"]("a");
              var _0x3d9b6f = _0x2c53d9[_0x1e3dc4(292, "uuhC")](_0x39f773[_0x1e3dc4(242, "D3lG")]);
              _0x35086d["setAttribute"](_0x39f773[_0x1e3dc4(239, "iPF6")], _0x3d9b6f), _0x35086d[_0x1e3dc4(401, "u@bM")](_0x39f773[_0x1e3dc4(646, "^2#^")], _0x5f6b43), _0x35086d["click"](), _0x39f773[_0x1e3dc4(432, "mISl")](hideLoadingScreen);
            } else _0x1d386f[_0x1e3dc4(362, "by8^")](_0x485b43), _0x557b19(_0x1d386f[_0x1e3dc4(647, "8Kr[")]);
          });
        }, 3000);
      } else {
        if (hostname[_0x8bcb02(393, "dcjG")](_0x170c97["sxqbz"]) != -1) {
          if (_0x170c97["blUvD"](_0x170c97[_0x8bcb02(462, "4mlF")], _0x170c97[_0x8bcb02(632, "@2Mh")])) {
            _0x5f6b43 = _0x170c97[_0x8bcb02(681, "6mCg")](_0x170c97[_0x8bcb02(327, ")ciD")](_0x170c97["dvUVd"], new Date()["getTime"]()), _0x170c97[_0x8bcb02(673, "E)!p")]);
            let _0x432fcf = document[_0x8bcb02(547, "D3lG")](_0x170c97["uRSTS"])[0]["textContent"];
            _0x432fcf = parseInt(_0x432fcf);
            if (_0x170c97[_0x8bcb02(715, "t&]W")](_0x432fcf, 100)) {
              if (_0x170c97["KSimh"](_0x8bcb02(716, "1zJ#"), _0x170c97[_0x8bcb02(377, "k(8e")])) {
                _0x22727d[_0x8bcb02(652, "y#bF")](_0x170c97["yNBFm"], "");
                return;
              } else {
                let _0x5e0178 = document[_0x8bcb02(215, "cG$D")](_0x8bcb02(283, "iUMT"))[0],
                  _0x5acfa3 = Math[_0x8bcb02(482, "i!Q#")](_0x170c97[_0x8bcb02(558, "fV8q")](_0x432fcf, 100) / 10);
                function _0x3b6031() {
                  return new Promise(_0x313407 => {
                    const _0x1b2e82 = _0x5f0b;
                    if (_0x170c97[_0x1b2e82(643, "F%pW")] !== "EOsWm") {
                      const _0x2b6b43 = _0x53e898[_0x1b2e82(296, "AHo9")],
                        _0x140400 = _0x2b6b43[_0x1b2e82(455, "s0wq")](/(\d+)\s*×\s*(\d+)/);
                      _0x3e9284 = _0x140400[1];
                    } else _0x5e0178[_0x1b2e82(638, "GKqN")](), setTimeout(_0x313407, 100);
                  });
                }
                async function _0x1ae348() {
                  const _0x50df1f = _0x8bcb02,
                    _0x1b7aed = {
                      "DWUCL": _0x170c97["xYBwj"],
                      "EWfMs": _0x170c97[_0x50df1f(623, "u@bM")]
                    };
                  if (_0x170c97["xIEOs"](_0x170c97[_0x50df1f(665, "YvuT")], "bFLIA")) {
                    for (let _0x3c3f18 = 0; _0x3c3f18 < _0x5acfa3; _0x3c3f18++) {
                      if (_0x170c97["xIEOs"](_0x170c97["uJJfP"], _0x170c97[_0x50df1f(508, "4qIG")])) {
                        const _0x1f9e8e = new _0x50151b();
                        return _0x1b3841["defineProperty"](_0x1f9e8e, _0x170c97[_0x50df1f(427, "y#bF")], {
                          "set": function (_0x5953ae) {
                            const _0x472597 = _0x50df1f;
                            if (_0x5953ae["indexOf"](_0x1b7aed["DWUCL"]) != -1) {
                              _0x1f9e8e[_0x472597(251, "8Frn")](_0x472597(566, "uuhC"), "");
                              return;
                            }
                            _0x1f9e8e[_0x472597(251, "8Frn")](_0x1b7aed[_0x472597(329, "dcjG")], _0x5953ae);
                          }
                        }), _0x1f9e8e;
                      } else await _0x170c97[_0x50df1f(545, "JkmZ")](_0x3b6031);
                    }
                    console[_0x50df1f(333, "Ck$g")](_0x170c97[_0x50df1f(413, "*gF$")]);
                  } else {
                    _0xa852ea = _0x170c97[_0x50df1f(668, "*gF$")](_0x170c97["NuuDF"](_0x50df1f(376, "YvuT"), new _0x275f83()["getTime"]()), _0x50df1f(451, "y#bF")), _0x153c63();
                    if (!_0x404f36) {
                      _0x170c97[_0x50df1f(722, "iPF6")](_0x1195c9), _0x170c97["DyhGt"](_0x16db85, _0x170c97[_0x50df1f(709, "2Azd")]);
                      return;
                    }
                    const _0x3067e6 = _0x538cf7[_0x50df1f(674, "4qIG")](_0x346ce9);
                    let _0x5b8c72 = _0x14527a[_0x50df1f(335, "2ET6")]("a");
                    _0x5b8c72[_0x50df1f(267, "GKqN")](_0x50df1f(605, "ipC)"), _0x3067e6), _0x5b8c72[_0x50df1f(306, "k(8e")](_0x170c97[_0x50df1f(374, "fV8q")], _0x3b53e2), _0x5b8c72[_0x50df1f(499, "2Azd")](), _0x170c97["bjskJ"](_0x1a51b5), _0x2a245e[_0x50df1f(407, "1zJ#")](_0x3067e6);
                  }
                }
                _0x170c97["RhMKa"](_0x1ae348);
              }
            } else {
              let _0xa7e2d9 = document[_0x8bcb02(614, "mISl")](_0x170c97[_0x8bcb02(712, "L]j%")])[0],
                _0x1a9c9e = _0x170c97[_0x8bcb02(331, "u@bM")](Math[_0x8bcb02(600, "^2#^")](_0x170c97[_0x8bcb02(452, "@2Mh")](_0x170c97[_0x8bcb02(395, "dcjG")](100, _0x432fcf), 10)), 1);
              function _0x4c792d() {
                const _0x37a0f1 = {
                  "GiyKO": function (_0x143594, _0x281fd4) {
                    return _0x143594(_0x281fd4);
                  },
                  "RlvOW": "href",
                  "eGajB": function (_0x1bc798, _0x2d652a, _0x794e3a) {
                    const _0x1f52f2 = _0x5f0b;
                    return _0x170c97[_0x1f52f2(590, ")Tg7")](_0x1bc798, _0x2d652a, _0x794e3a);
                  }
                };
                return new Promise(_0x26e64e => {
                  const _0x4a13a5 = _0x5f0b,
                    _0x4157cc = {
                      "xrRTA": function (_0x2c6c07, _0x4f7b40) {
                        const _0x5104ec = _0x5f0b;
                        return _0x37a0f1[_0x5104ec(345, "ipC)")](_0x2c6c07, _0x4f7b40);
                      },
                      "WHmyj": _0x37a0f1["RlvOW"]
                    };
                  if (_0x4a13a5(498, "(Uvh") === _0x4a13a5(443, "Or@P")) _0xa7e2d9["click"](), _0x37a0f1["eGajB"](setTimeout, _0x26e64e, 100);else {
                    var _0x27e78b = new _0x165b8b();
                    _0x27e78b[_0x4a13a5(412, "y#bF")] = "", _0x27e78b[_0x4a13a5(323, ")ciD")] = _0x440181, _0x27e78b["onload"] = () => {
                      const _0x2add2b = _0x4a13a5;
                      let _0x202bd = _0x4157cc[_0x2add2b(338, "8Kr[")](_0x1fa68b, _0x27e78b);
                      _0x21428f[_0x2add2b(250, "E)!p")](_0x4157cc[_0x2add2b(526, "4mlF")], _0x202bd);
                    };
                  }
                });
              }
              async function _0x42e7d8() {
                const _0x48aa4c = _0x8bcb02;
                for (let _0x32af2a = 0; _0x170c97["lyJsp"](_0x32af2a, _0x1a9c9e); _0x32af2a++) {
                  await _0x170c97["TMhLr"](_0x4c792d);
                }
                console[_0x48aa4c(361, ")Tg7")](_0x48aa4c(615, "L]j%"));
              }
              _0x170c97[_0x8bcb02(724, "(Uvh")](_0x42e7d8);
            }
            setTimeout(() => {
              const _0x2e9f59 = _0x8bcb02,
                _0x5a0fab = {
                  "VJTiJ": _0x170c97[_0x2e9f59(595, "YXpu")],
                  "BguMG": function (_0x45356d, _0xaeea65) {
                    const _0x40ad6c = _0x2e9f59;
                    return _0x170c97[_0x40ad6c(245, "mISl")](_0x45356d, _0xaeea65);
                  },
                  "nDpJN": _0x170c97[_0x2e9f59(507, "ipC)")],
                  "rjGcO": _0x170c97["DCDXZ"]
                };
              _0x423fb8 = document[_0x2e9f59(484, "BUTu")](_0x2e9f59(387, "^2#^"))[0];
              let _0x30a832 = _0x423fb8["getBoundingClientRect"](),
                _0x1b8ee2 = _0x30a832["width"],
                _0xa1b966 = _0x30a832["height"],
                _0x34d188 = {
                  "width": _0x1b8ee2,
                  "height": _0xa1b966,
                  "backgroundColor": null,
                  "useCORS": true,
                  "allowTaint": true,
                  "x": 0,
                  "y": 0,
                  "ignoreElements": _0x517f75 => {
                    const _0x4d4c76 = _0x2e9f59;
                    if (_0x170c97["SjZkQ"] === _0x170c97[_0x4d4c76(231, "2ET6")]) {
                      const _0x14e53b = {
                        "YEVzW": function (_0x116d4b, _0x2ab7be) {
                          return _0x116d4b(_0x2ab7be);
                        }
                      };
                      let _0x448715 = _0x118ab4[_0x4d4c76(409, ")Tg7")](_0x4d4c76(334, "GKqN"));
                      if (_0x448715[_0x4d4c76(436, "qdHv")]("blob:") != -1) {
                        let _0x28c579 = _0x20fbfd[_0x4d4c76(254, "YXpu")]();
                        var _0x56edb0 = _0x1bc032["createElement"](_0x5a0fab["VJTiJ"]),
                          _0x2e09f9 = _0x56edb0[_0x4d4c76(616, "YvuT")]("2d");
                        _0x56edb0[_0x4d4c76(518, "u@bM")] = _0x56bd18["ceil"](_0x5a0fab[_0x4d4c76(642, "u@bM")](_0x28c579["width"], 1.5)), _0x56edb0[_0x4d4c76(371, "1zJ#")] = _0x34e9f6[_0x4d4c76(406, "Or@P")](_0x28c579["height"] * 1.5), _0x2e09f9[_0x4d4c76(692, "edB[")](_0x2c11cd, 0, 0), _0x435a73[_0x4d4c76(230, "cG$D")][_0x4d4c76(655, "uuhC")](_0x56edb0);
                        var _0x5d9280 = _0x56edb0["toDataURL"]("image/png");
                        _0x42b590[_0x4d4c76(652, "y#bF")](_0x5a0fab[_0x4d4c76(494, "6mCg")], _0x5d9280);
                      } else {
                        if (_0x448715[_0x4d4c76(497, "2Azd")](_0x5a0fab[_0x4d4c76(307, "D3lG")]) != -1) {
                          var _0x213502 = new _0x2bdb87();
                          _0x213502["crossOrigin"] = "", _0x213502[_0x4d4c76(425, "D3lG")] = _0x448715, _0x213502[_0x4d4c76(572, "4mlF")] = () => {
                            const _0x1a446c = _0x4d4c76;
                            let _0x201fbe = _0x14e53b[_0x1a446c(608, "8Frn")](_0x553672, _0x213502);
                            _0x52077d[_0x1a446c(710, "lZkz")](_0x1a446c(324, "dcjG"), _0x201fbe);
                          };
                        }
                      }
                    } else {
                      var _0x578adf = window[_0x4d4c76(313, "AHo9")](_0x517f75);
                      if (_0x578adf["getPropertyValue"](_0x170c97[_0x4d4c76(687, "AHo9")])["includes"](_0x4d4c76(725, "iPF6")) && _0x578adf[_0x4d4c76(483, "^2#^")](_0x170c97["AEPGh"])[_0x4d4c76(378, "^2#^")](_0x4d4c76(535, "2ET6")) && _0x578adf["getPropertyValue"](_0x4d4c76(496, "by8^"))[_0x4d4c76(578, "4qIG")](_0x4d4c76(571, "qoX%")) && _0x578adf["getPropertyValue"](_0x170c97[_0x4d4c76(583, "lZkz")])["includes"]("5") && _0x578adf[_0x4d4c76(419, "1zJ#")](_0x170c97[_0x4d4c76(603, "2Azd")])[_0x4d4c76(627, "ipC)")](_0x170c97[_0x4d4c76(308, "ipC)")])) return true;
                      return false;
                    }
                  }
                };
              _0x170c97[_0x2e9f59(342, "Uf16")](showLoadingScreen), _0x170c97[_0x2e9f59(678, "D3lG")](html2canvas, _0x423fb8, _0x34d188)[_0x2e9f59(703, "BUTu")](function (_0x1278a7) {
                const _0xb78147 = _0x2e9f59;
                let _0x52d44 = document[_0xb78147(348, "t&]W")]("a");
                var _0x5ba88f = _0x1278a7["toDataURL"](_0x170c97["IaRBg"]);
                _0x52d44[_0xb78147(349, "i!Q#")](_0x170c97[_0xb78147(490, "dcjG")], _0x5ba88f), _0x52d44[_0xb78147(256, "4qIG")](_0x170c97["FYsxR"], _0x5f6b43), _0x52d44[_0xb78147(633, "uuhC")](), _0x170c97["hxyGz"](hideLoadingScreen);
              });
            }, 1000);
          } else _0x523e68[_0x8bcb02(252, "by8^")]();
        } else {
          if (_0x170c97[_0x8bcb02(714, "u@bM")](hostname[_0x8bcb02(284, "^wH@")](_0x170c97[_0x8bcb02(534, ")Tg7")]), -1)) {
            _0x5f6b43 = _0x170c97[_0x8bcb02(664, "@2Mh")](_0x170c97[_0x8bcb02(504, "E)!p")] + new Date()[_0x8bcb02(304, "^wH@")](), _0x170c97["DvbRu"]), _0x423fb8 = document[_0x8bcb02(624, "Uf16")](_0x170c97["mYzql"]), _0x423fb8[_0x8bcb02(524, "D3lG")][_0x8bcb02(719, "qoX%")] = _0x170c97[_0x8bcb02(697, "BUTu")];
            let _0x172680 = _0x423fb8["getBoundingClientRect"](),
              _0x456e3e = _0x172680[_0x8bcb02(625, "lZkz")],
              _0x4258c9 = _0x172680[_0x8bcb02(369, "8Kr[")],
              _0x2025f5 = {
                "width": _0x456e3e,
                "height": _0x4258c9,
                "backgroundColor": null,
                "skipFonts": true,
                "x": 0,
                "y": 0,
                "filter": _0x521fd0 => {
                  const _0x265efd = _0x8bcb02,
                    _0x40e733 = {
                      "RBaVg": _0x170c97[_0x265efd(266, "@2Mh")],
                      "Qktyw": "visible",
                      "cUFWb": _0x170c97[_0x265efd(448, ")Tg7")],
                      "COSip": _0x265efd(506, "(Uvh"),
                      "HVStD": _0x170c97["MnbtY"],
                      "CVSYV": _0x170c97[_0x265efd(548, "GKqN")],
                      "TFioE": _0x170c97["CXDWy"],
                      "Nexyl": _0x170c97["eHHoz"],
                      "BtcZE": _0x170c97[_0x265efd(696, "F%pW")],
                      "qqEMR": "href",
                      "xBBtB": _0x170c97[_0x265efd(400, "E)!p")]
                    };
                  if (_0x521fd0["classList"][_0x265efd(555, "^2#^")](_0x170c97[_0x265efd(676, "GKqN")])) {
                    if (_0x170c97[_0x265efd(473, "edB[")](_0x170c97["VpTYi"], _0x170c97[_0x265efd(564, "iUMT")])) return true;else {
                      _0x397edf = _0x5c276e[_0x265efd(243, "2Azd")](_0x170c97["pvTSv"])[0];
                      let _0x1951cb = _0xac07e5[_0x265efd(721, "[C3Z")](),
                        _0x226fd9 = _0x1951cb[_0x265efd(467, "L]j%")],
                        _0x51b29f = _0x1951cb[_0x265efd(328, "Uf16")],
                        _0x1c9457 = {
                          "width": _0x226fd9,
                          "height": _0x51b29f,
                          "backgroundColor": null,
                          "useCORS": true,
                          "allowTaint": true,
                          "x": 0,
                          "y": 0,
                          "ignoreElements": _0x57a9ac => {
                            const _0x16d418 = _0x265efd;
                            var _0x24a8ba = _0x34c18f[_0x16d418(628, "E)!p")](_0x57a9ac);
                            if (_0x24a8ba[_0x16d418(424, "qdHv")](_0x40e733["RBaVg"])[_0x16d418(280, "F%pW")](_0x40e733["Qktyw"]) && _0x24a8ba["getPropertyValue"](_0x40e733[_0x16d418(297, "qoX%")])["includes"](_0x40e733[_0x16d418(434, "qoX%")]) && _0x24a8ba[_0x16d418(690, "HrcV")](_0x40e733[_0x16d418(626, "@2Mh")])[_0x16d418(470, "qoX%")]("absolute") && _0x24a8ba[_0x16d418(359, "Or@P")](_0x40e733["CVSYV"])[_0x16d418(662, "D3lG")]("5") && _0x24a8ba[_0x16d418(700, "by8^")](_0x40e733["TFioE"])[_0x16d418(627, "ipC)")](_0x40e733[_0x16d418(352, ")Tg7")])) return true;
                            return false;
                          }
                        };
                      _0x56ebe5(), _0x170c97[_0x265efd(476, "qoX%")](_0x59a16b, _0x4f9556, _0x1c9457)["then"](function (_0x522d74) {
                        const _0x4f5b33 = _0x265efd;
                        let _0x22ff78 = _0x414330[_0x4f5b33(300, "BUTu")]("a");
                        var _0x297485 = _0x522d74[_0x4f5b33(442, "8Kr[")](_0x40e733[_0x4f5b33(255, "cG$D")]);
                        _0x22ff78["setAttribute"](_0x40e733[_0x4f5b33(370, "BUTu")], _0x297485), _0x22ff78[_0x4f5b33(225, "2ET6")](_0x40e733[_0x4f5b33(481, "dcjG")], _0x40cd71), _0x22ff78["click"](), _0x46726a();
                      });
                    }
                  }
                }
              };
            _0x170c97[_0x8bcb02(573, "4mlF")](showLoadingScreen);
            try {
              htmlToImage["toPng"](_0x423fb8, _0x2025f5)["then"](function (_0x1d7b01) {
                const _0x41aa73 = _0x8bcb02;
                let _0x364165 = document[_0x41aa73(220, "YXpu")]("a");
                _0x364165[_0x41aa73(410, "t&]W")](_0x170c97[_0x41aa73(517, "s0wq")], _0x1d7b01), _0x364165["setAttribute"](_0x41aa73(249, "s0wq"), _0x5f6b43), _0x364165[_0x41aa73(259, "*gF$")](), _0x170c97[_0x41aa73(503, "mISl")](hideLoadingScreen);
              });
            } catch (_0x4519cd) {
              _0x170c97["hxyGz"](hideLoadingScreen), _0x170c97[_0x8bcb02(247, "by8^")](alert, _0x8bcb02(485, "YvuT"));
            }
          } else {
            if (_0x170c97[_0x8bcb02(330, "Uf16")](hostname["indexOf"](_0x170c97["ifcVR"]), -1)) {
              if (_0x170c97[_0x8bcb02(685, "by8^")](_0x170c97[_0x8bcb02(495, "u@bM")], _0x170c97[_0x8bcb02(589, "(Uvh")])) return new _0x2b1f6e(_0x322ebc => {
                const _0x30f15f = _0x8bcb02;
                _0x1d98e3[_0x30f15f(717, "^wH@")](), _0x26481d(_0x322ebc, 100);
              });else {
                _0x5f6b43 = _0x8bcb02(422, "cG$D") + new Date()[_0x8bcb02(391, "k(8e")]() + _0x8bcb02(586, "L]j%");
                let _0x4e51d6 = document[_0x8bcb02(263, "YvuT")](_0x170c97[_0x8bcb02(637, "8Kr[")])[0];
                document[_0x8bcb02(246, "[C3Z")]("icon-item")[0][_0x8bcb02(232, "ipC)")](), setTimeout(() => {
                  const _0x57e842 = _0x8bcb02;
                  if (_0x170c97[_0x57e842(613, "F%pW")]("glcvQ", _0x170c97[_0x57e842(397, "1zJ#")])) {
                    _0x255ea0["setAttribute"](_0x170c97[_0x57e842(661, "edB[")], "");
                    return;
                  } else {
                    _0x423fb8 = _0x4e51d6["children"][3];
                    let _0x1877c9 = _0x423fb8["getBoundingClientRect"](),
                      _0x18fe88 = _0x1877c9["width"],
                      _0x5ca4b6 = _0x1877c9["height"],
                      _0x146ad8 = {
                        "width": _0x18fe88,
                        "height": _0x5ca4b6,
                        "backgroundColor": null,
                        "skipFonts": true,
                        "x": 0,
                        "y": 0
                      };
                    _0x170c97[_0x57e842(574, "d1Yz")](showLoadingScreen);
                    try {
                      htmlToImage["toPng"](_0x423fb8, _0x146ad8)["then"](function (_0x5f1e9f) {
                        const _0x298a73 = _0x57e842;
                        let _0x3f680b = document[_0x298a73(562, "ipC)")]("a");
                        _0x3f680b["setAttribute"](_0x298a73(437, "^2#^"), _0x5f1e9f), _0x3f680b["setAttribute"](_0x298a73(343, "YXpu"), _0x5f6b43), _0x3f680b[_0x298a73(621, "iPF6")](), hideLoadingScreen();
                      });
                    } catch (_0x17cedb) {
                      _0x170c97[_0x57e842(433, "4mlF")](hideLoadingScreen), _0x170c97[_0x57e842(636, "1zJ#")](alert, _0x170c97[_0x57e842(639, "@2Mh")]);
                    }
                  }
                }, 1000);
              }
            } else {
              if (hostname[_0x8bcb02(683, "cG$D")](_0x170c97["QoBhu"]) != -1) {
                _0x5f6b43 = _0x170c97["SgXVA"](_0x170c97["DtGVl"](_0x170c97["yImOJ"], new Date()[_0x8bcb02(702, ")ciD")]()), _0x8bcb02(679, "HrcV")), _0x170c97["thEUU"](showLoadingScreen);
                let _0x301956 = document["getElementsByClassName"](_0x170c97["EKmIH"])[0]["src"];
                var _0x2874e1 = atob(_0x301956[_0x8bcb02(695, "Uf16")](",")[1]),
                  _0x16c98d = _0x2874e1[_0x8bcb02(675, "qoX%")],
                  _0xf2c8cc = new Uint8Array(_0x16c98d);
                for (var _0x5170a3 = 0; _0x170c97[_0x8bcb02(544, "s0wq")](_0x5170a3, _0x16c98d); _0x5170a3++) {
                  if ("TVdZE" === _0x170c97[_0x8bcb02(663, "@2Mh")]) _0xf2c8cc[_0x5170a3] = _0x2874e1[_0x8bcb02(216, "y#bF")](_0x5170a3);else {
                    const _0x68ae70 = _0x59aa23[_0x8bcb02(386, "GKqN")](_0x170c97[_0x8bcb02(634, ")ciD")]);
                    _0x68ae70[_0x8bcb02(458, "s0wq")] = _0x8bcb02(576, "6mCg"), _0x68ae70["id"] = _0x170c97[_0x8bcb02(319, "qoX%")], _0x68ae70[_0x8bcb02(487, "Ck$g")] = _0x532c78, _0x4a0499["head"]["appendChild"](_0x68ae70);
                    const _0x3f584b = _0x4e78f6["createElement"](_0x170c97[_0x8bcb02(720, ")Tg7")]);
                    _0x3f584b[_0x8bcb02(669, "@2Mh")] = _0x4e3eef, _0x9760c9[_0x8bcb02(513, "lZkz")][_0x8bcb02(399, "i!Q#")](_0x3f584b);
                  }
                }
                var _0x1c4705 = new Blob([_0xf2c8cc], {
                  "type": _0x170c97[_0x8bcb02(453, "s0wq")]
                });
                const _0x3e22f3 = URL["createObjectURL"](_0x1c4705);
                let _0x464e64 = document[_0x8bcb02(596, "mISl")]("a");
                _0x464e64[_0x8bcb02(349, "i!Q#")](_0x170c97[_0x8bcb02(223, "edB[")], _0x3e22f3), _0x464e64[_0x8bcb02(552, "8Kr[")](_0x170c97[_0x8bcb02(620, "dcjG")], _0x5f6b43), _0x464e64["click"](), _0x170c97["XSZEM"](hideLoadingScreen), URL[_0x8bcb02(563, "HrcV")](_0x3e22f3);
              }
            }
          }
        }
      }
    }
  });
  var version_ = "jsjiami.com.v7";
}();