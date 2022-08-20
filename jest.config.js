const { defaults } = require('jest-config');
module.exports = {
    moduleNameMapper: {
        "^.+\\.(css|less|scss)$": "babel-jest"
    },
    moduleFileExtensions: [...defaults.moduleFileExtensions, 'js', 'jsx'],
    testMatch: ['**/?(*.)test.js?(x)'],
    testEnvironment: 'jest-environment-jsdom',
};
