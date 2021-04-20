const Manager = require("../lib/Manager");

test('creates a manager object', () => {
    const manager = new Manager('Dave', 5, 'dave@gmail.com', 2);

    expect(manager.name).toBe('Dave');
    expect(manager.id).toBe(5);
    expect(manager.email).toBe('dave@gmail.com');
    expect(manager.officeNumber).toBe(2);
});

test('gets manager role', () => {
    const manager = new Manager('Dave', 5, 'dave@gmail.com', 2);

    expect(manager.getRole()).toBe('Manager');
})