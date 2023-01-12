const Manager = require('../lib/Manager');

test("Can set office number via constructor argument", () => {
    const officeNumber = 100;
    const m = new Manager("Foo", 1, "test@example.com", officeNumber);
    expect(m.officeNumber).toBe(officeNumber);
});

test("getRole() should return \"Manager\"", () => {
    const m = new Manager("Foo", 1, "test@example.com", 100);
    expect(m.getRole()).toBe("Manager");
});

test("Can get office number via getOffice()", () => {
    const officeNumber = 100;
    const m = new Manager("Foo", 1, "test@example.com", officeNumber);
    expect(m.getOfficeNumber()).toBe(officeNumber);
});