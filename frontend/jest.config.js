// jest.config.js
export default {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  moduleNameMapper: {
    '\\.(css|scss)$': 'identity-obj-proxy',
  },
  extensionsToTreatAsEsm: ['.ts', '.tsx', '.js', '.jsx'],
};
