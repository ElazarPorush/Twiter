"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.post('/login', async (req, res) => {
    try {
        res.json({
            err: false,
            message: 'all good',
            data: undefined
        });
    }
    catch (err) {
        res.status(400).json({
            err: true,
            message: 'error',
            data: null
        });
    }
});
router.post('/logout', async (req, res) => {
    try {
        res.json({
            err: false,
            message: 'all good',
            data: undefined
        });
    }
    catch (err) {
        res.status(400).json({
            err: true,
            message: 'error',
            data: null
        });
    }
});
exports.default = router;
