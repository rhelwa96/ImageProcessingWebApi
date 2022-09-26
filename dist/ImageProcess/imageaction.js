"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
var sharp_1 = __importDefault(require("sharp"));
var fs_2 = __importDefault(require("fs"));
function asyncCall(filename, width, height) {
    return __awaiter(this, void 0, void 0, function () {
        var thumbnailName, thumbnailImage_1, OriginalImage, thumbnailImage;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    thumbnailName = 'Images/thumbnails/' + "".concat(filename, "_").concat(width, "_").concat(height, ".jpg");
                    if (!!fs_2.default.existsSync('Images/thumbnails')) return [3 /*break*/, 2];
                    //Check if thumbnail folder is created
                    return [4 /*yield*/, fs_2.default.promises.mkdir('Images/thumbnails', { recursive: true })];
                case 1:
                    //Check if thumbnail folder is created
                    _a.sent();
                    _a.label = 2;
                case 2:
                    if (!fs_2.default.existsSync(thumbnailName)) return [3 /*break*/, 4];
                    return [4 /*yield*/, fs_1.promises.readFile(thumbnailName)];
                case 3:
                    thumbnailImage_1 = _a.sent();
                    console.log('Found a cached image');
                    return [2 /*return*/, thumbnailImage_1];
                case 4: return [4 /*yield*/, fs_1.promises.readFile('Images/' + "".concat(filename, ".jpg"))
                    // Assigning Nameof    Thumbnail
                ];
                case 5:
                    OriginalImage = _a.sent();
                    // Assigning Nameof    Thumbnail
                    return [4 /*yield*/, (0, sharp_1.default)(OriginalImage).resize(Number(width), Number(height)).toFile(thumbnailName)];
                case 6:
                    // Assigning Nameof    Thumbnail
                    _a.sent();
                    return [4 /*yield*/, fs_1.promises.readFile(thumbnailName)];
                case 7:
                    thumbnailImage = _a.sent();
                    return [2 /*return*/, thumbnailImage];
            }
        });
    });
}
exports.default = asyncCall;
