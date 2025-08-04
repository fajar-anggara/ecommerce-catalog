module.exports = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"],
//   moduleNameMapping: {
//     "\\.(css|scss)$": "identity-obj-proxy",
//     "\\.(jpg|png|gif|svg)$": "jest-transform-stub",
//   },
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest",
  },
  collectCoverageFrom: ["src/**/*.js", "!src/main.js"],
};
