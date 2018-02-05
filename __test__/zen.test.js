const zen = require('./../zen');

test('it gives the correct day', () => {
    const thought = zen(1);
    expect(thought.day).toBe(1)
});