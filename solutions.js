"use strict";

/**
 * Write your solutions here.
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 * If you don't know what an iffe is, don't worry about it :)
 *
 * This file is for defining the following functions. See README.md for more detail.
 * isTrue
 * isFalse
 * not
 * addOne
 * isEven
 * isIdentical
 * isEqual
 * or
 * and
 * concat
 */

function isTrue(value) {
    return value === true;
}

function isFalse(value) {
    return value === false;
}

function not(input) {
    return input !== true;
}

function addOne(input) {
    return input(Number++);
}

function isEven(input) {
    return (input % 2 === 0);
}

function isIdentical(input1, input2) {
    if (input1 === input2) {
        return true;
    } else if (input1 !== input2) {
        return false;
    }
}

function isEqual(input1, input2) {
    if (input1 == input2) {
        return true;
    } else if (input1 !== input2) {
        return false;
    }
}

function or(input1, input2) {
    return (input1 || input2);
}

function and(input1, input2) {
    return (input1 && input2);
}

function concat(input1, input2) {
    if (Number+Number) {
        return (Number)
    }
}