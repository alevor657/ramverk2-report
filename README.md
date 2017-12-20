[![Build Status](https://travis-ci.org/alevor657/ramverk2-report.svg?branch=master)](https://travis-ci.org/alevor657/ramverk2-report)
[![BCH compliance](https://bettercodehub.com/edge/badge/alevor657/ramverk2-report?branch=master)](https://bettercodehub.com/)
[![Scrutinizer Code Quality](https://scrutinizer-ci.com/g/alevor657/ramverk2-report/badges/quality-score.png?b=master)](https://scrutinizer-ci.com/g/alevor657/ramverk2-report/?branch=master)
[![Code Coverage](https://scrutinizer-ci.com/g/alevor657/ramverk2-report/badges/coverage.png?b=master)](https://scrutinizer-ci.com/g/alevor657/ramverk2-report/?branch=master)
[![Build Status](https://scrutinizer-ci.com/g/alevor657/ramverk2-report/badges/build.png?b=master)](https://scrutinizer-ci.com/g/alevor657/ramverk2-report/build-status/master)

### Usage

    npm i
    npm start

If you modify something in the code use `npm run webpack`

### Docker containers

In order to start application in either node8 or latest run following:

    npm run node_latest
    npm run node_8

My server code needs at least node 8 to function properly.

In order to use database functionality you have to spin up a mongodb container:

    docker-compose up -d mongodb node_latest

Then you will be provided with server address
Observe that socket server does not work when using docker!

### Environment vars

    var port = process.env.DBWEBB_PORT || 1337;
    var socketioPort = process.env.DBWEBB_SOCKETIO_PORT || 1340;

### Testing

    npm test

Or you have a possibility to run the tests by starting up docker containers

    npm run test_latest
    npm run test_8

##### Code coverage

You can find in in coverage/lcov-report. Open up index.html file.


-------------------------

# ramverk2-report
Report application build in react with webpack
I also use redux, react-router

### Application is available at

** Not the latest version! **

http://80.78.218.152:1337/
