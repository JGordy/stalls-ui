module.exports = {
    modulePathIgnorePatterns: [
        '<rootDir>/node_modules',
        '<rootDir>/jest-test-results.json',
        '<rootDir>/src/jest-test-results.json',
    ],
    setupFilesAfterEnv: [
        "<rootDir>/src/setupTests.js"
    ],
    testPathIgnorePatterns: [
        '<rootDir>/node_modules',
        '<rootDir>/jest-test-results.json',
        '<rootDir>/src/jest-test-results.json',
    ],
    transform: {
        "^.+\\.js$": "babel-jest"
    },
    transformIgnorePatterns: [
        '<rootDir>/node_modules/'
    ],
    moduleNameMapper: {
        "\\.(css|less|sass|scss)$": "<rootDir>/src/__mocks__/styleMock.js",
        "\\.(gif|ttf|eot|svg)$": "<rootDir>/src/__mocks__/fileMock.js"
    }
};