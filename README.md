# travistest

This is a minimal example for getting Travis CI to work on a GitHub repo. I chose the [Tape](https://en.wikipedia.org/wiki/Tape_(JavaScript_testing_framework)) framework for testing JavaScript. I like the [minimal setup](https://raygun.com/blog/javascript-unit-testing-frameworks/), especially for my learning purposes.

[![Build Status](https://travis-ci.org/hchiam/travistest.svg?branch=master)](https://travis-ci.org/hchiam/travistest)

You can see the automated test run data here: https://travis-ci.org/hchiam/travistest

## To run a test on your own computer:

(Uses code inspired by [my Tape repo](https://github.com/hchiam/learning-tape).)

1. Install dependencies:
```
npm install tape --save-dev
```
2. Run test using Tape:
```
node add.test.js
```
