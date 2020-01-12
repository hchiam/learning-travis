# travistest

Just one of the things I'm learning. https://github.com/hchiam/learning

This is a minimal example for getting Travis CI to work on a GitHub repo. I chose the [Tape](https://en.wikipedia.org/wiki/Tape_(JavaScript_testing_framework)) framework for testing JavaScript. I like the [minimal setup](https://raygun.com/blog/javascript-unit-testing-frameworks/), especially for my learning purposes. You might also like [an example setup to run Selenium on Travis CI](https://github.com/hchiam/selenium-travis).

[![Build Status](https://travis-ci.org/hchiam/learning-travis.svg?branch=master)](https://travis-ci.org/hchiam/learning-travis)

You can see the automated test run data here: https://travis-ci.org/hchiam/learning-travis

## To run a test on your own computer:

(Uses code inspired by [my Tape repo](https://github.com/hchiam/learning-tape).)

1. Install dependencies:
```
mkdir node_modules
npm install tape --save-dev
```
2. Run test using Tape:
```
node test.js
```

## Example setup to run Selenium on Travis CI

https://github.com/hchiam/selenium-travis

Used chrome extension Selenium IDE to create a .side file that gets run in Travis CI.

## Example repo that tests a desktop app on Travis CI

https://github.com/hchiam/anonymous-input

Built with [Electron](https://github.com/hchiam/learning-electron). Tested by using spectron and mocha instead of Selenium IDE.
