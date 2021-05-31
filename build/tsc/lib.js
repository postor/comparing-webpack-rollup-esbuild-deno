"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.base642img = exports.file2base64 = exports.mergeFile = exports.mergeBase64 = void 0;
function mergeBase64(base64s, config) {
    if (base64s === void 0) { base64s = []; }
    if (config === void 0) { config = {}; }
    return __awaiter(this, void 0, void 0, function () {
        var quanlity, imgs, _a, width, height, offscreenCanvas, curTop, imageContext, _i, imgs_1, img;
        var _this = this;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    quanlity = __assign({ quanlity: 0.92 }, config).quanlity;
                    return [4 /*yield*/, Promise.all(base64s.map(function (x) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, base642img(x)];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        }); }); }))];
                case 1:
                    imgs = _b.sent();
                    _a = calcCanvas(imgs), width = _a.width, height = _a.height;
                    offscreenCanvas = document.createElement('canvas');
                    offscreenCanvas.width = width;
                    offscreenCanvas.height = height;
                    curTop = 0, imageContext = offscreenCanvas.getContext('2d');
                    for (_i = 0, imgs_1 = imgs; _i < imgs_1.length; _i++) {
                        img = imgs_1[_i];
                        imageContext.drawImage(img, 0, curTop);
                        curTop += img.height;
                    }
                    return [2 /*return*/, offscreenCanvas.toDataURL('image/jpeg', quanlity)];
            }
        });
    });
}
exports.mergeBase64 = mergeBase64;
function mergeFile(files, config) {
    if (files === void 0) { files = []; }
    if (config === void 0) { config = {}; }
    return __awaiter(this, void 0, void 0, function () {
        var base64s;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.all(__spreadArray([], files).map(function (x) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, file2base64(x)];
                            case 1: return [2 /*return*/, _a.sent()];
                        }
                    }); }); }))];
                case 1:
                    base64s = _a.sent();
                    return [2 /*return*/, mergeBase64(base64s, config)];
            }
        });
    });
}
exports.mergeFile = mergeFile;
function file2base64(file) {
    return URL.createObjectURL(file);
}
exports.file2base64 = file2base64;
function base642img(imgFile) {
    return new Promise(function (resolve, reject) {
        var img = new Image();
        img.onload = function () { return resolve(img); };
        img.onerror = function (err) { return reject(err); };
        img.src = imgFile;
    });
}
exports.base642img = base642img;
/**
 *
 * @param {Image[]} imgs
 */
function calcCanvas(imgs) {
    if (imgs === void 0) { imgs = []; }
    var width = 0, height = 0;
    for (var _i = 0, imgs_2 = imgs; _i < imgs_2.length; _i++) {
        var img = imgs_2[_i];
        width = Math.max(width, img.width);
        height += img.height;
    }
    return { width: width, height: height };
}
