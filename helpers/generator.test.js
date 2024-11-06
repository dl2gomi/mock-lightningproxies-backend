const { randomString } = require('./generator');

function isAlphanumeric(str) {
  return /^[a-zA-Z0-9]+$/.test(str);
}

describe('Random string generator', () => {
  describe('Username suffix', () => {
    it('Unique 6 letters', () => {
      const suffix = randomString(6);

      expect(suffix).toHaveLength(6);
      expect(isAlphanumeric(suffix)).toBe(true);
    });

    it('Unique 42 letters', () => {
      const suffix = randomString(42);

      expect(suffix).toHaveLength(42);
      expect(isAlphanumeric(suffix)).toBe(true);
    });
  });
});
