"use strict";
exports.__esModule = true;
function collatz(n) {
    var steps = 0;
    while (true) {
        steps++;
        if (n % 2 === 0) {
            n /= 2;
        }
        else {
            n = 3 * n + 1;
        }
        if (n === 1) {
            break;
        }
    }
    return steps;
}
exports.collatz = collatz;
function discoverLargestCollatz(rangeStart, rangeEnd) {
    var minSteps = -1;
    var maxSteps = -1;
    var results = [];
    for (var i = rangeStart; i < rangeEnd + 1; i++) {
        var result = collatz(i);
        results.push({ index: i, result: result });
        if (i % 10000 === 0) {
            minSteps = Math.min.apply(Math, results.map(function (r) { return r.result; }));
            maxSteps = Math.max.apply(Math, results.map(function (r) { return r.result; }));
            results = [
                {
                    index: results.find(function (r) { return r.result === minSteps; }).index,
                    result: minSteps
                },
                {
                    index: results.find(function (r) { return r.result === maxSteps; }).index,
                    result: maxSteps
                },
            ];
        }
    }
    minSteps = Math.min.apply(Math, results.map(function (r) { return r.result; }));
    maxSteps = Math.max.apply(Math, results.map(function (r) { return r.result; }));
    var min = {
        number: results.find(function (r) { return r.result === minSteps; }).index,
        steps: minSteps
    };
    var max = {
        number: results.find(function (r) { return r.result === maxSteps; }).index,
        steps: maxSteps
    };
    return {
        range: [rangeStart, rangeEnd],
        min: min,
        max: max
    };
}
exports.discoverLargestCollatz = discoverLargestCollatz;
