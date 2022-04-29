"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.drawing = void 0;
const utils_1 = require("../utils");
function drawing() {
    return (0, utils_1.weightedRandom)(utils_1.BEING_ELECTED_LIST, utils_1.BEING_ELECTED_WEIGHT_LIST);
}
exports.drawing = drawing;
//# sourceMappingURL=index.js.map