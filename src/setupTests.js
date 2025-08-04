// src/setupTests.js - Versi Super Sederhana

// Mock fetch untuk API calls
global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve([]),
  })
);

// Buat custom matchers sederhana
expect.extend({
  toBeInTheDocument(received) {
    const pass = received !== null && received !== undefined;
    return {
      message: () => `expected element to be in document`,
      pass,
    };
  },
  toHaveClass(received, className) {
    const pass =
      received && received.classList && received.classList.contains(className);
    return {
      message: () => `expected element to have class ${className}`,
      pass,
    };
  },
});
