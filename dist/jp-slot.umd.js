(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.jpSlot = {}));
})(this, (function (exports) { 'use strict';

    const BEING_ELECTED_LIST = [
        'BIG当選',
        'REG当選',
        'BIG＋スイカ当選',
        'REG＋スイカ当選',
        'BIG＋チェリー当選',
        'REG＋チェリー当選',
        'スイカ当選',
        'チェリー当選',
        'ベル当選',
        'リプレイ当選',
        '当選無し'
    ];
    const BEING_ELECTED_WEIGHT_LIST = [5, 4, 50, 40, 170, 150, 1220, 610, 7710, 8978, 46599];

    /* eslint-disable consistent-return */
    function weightedRandom(items, weights) {
        if (items.length !== weights.length) {
            throw new Error('Items and weights must be of the same size');
        }
        if (!items.length) {
            throw new Error('Items must not be empty');
        }
        // Preparing the cumulative weights array.
        // For example:
        // - weights = [1, 4, 3]
        // - cumulativeWeights = [1, 5, 8]
        const cumulativeWeights = [];
        for (let i = 0; i < weights.length; i += 1) {
            cumulativeWeights[i] = weights[i] + (cumulativeWeights[i - 1] || 0);
        }
        // Getting the random number in a range of [0...sum(weights)]
        // For example:
        // - weights = [1, 4, 3]
        // - maxCumulativeWeight = 8
        // - range for the random number is [0...8]
        const maxCumulativeWeight = cumulativeWeights[cumulativeWeights.length - 1];
        const randomNumber = maxCumulativeWeight * Math.random();
        // Picking the random item based on its weight.
        // The items with higher weight will be picked more often.
        for (let itemIndex = 0; itemIndex < items.length; itemIndex += 1) {
            if (cumulativeWeights[itemIndex] >= randomNumber) {
                return {
                    item: items[itemIndex],
                    index: itemIndex,
                };
            }
        }
    }

    function drawing() {
        return weightedRandom(BEING_ELECTED_LIST, BEING_ELECTED_WEIGHT_LIST);
    }

    exports.drawing = drawing;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=jp-slot.umd.js.map
