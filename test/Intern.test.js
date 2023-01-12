const Intern = require('../lib/Intern');

test("Can set school via constructor", () => {
    const school = "UCLA";
    const i = new Intern("Foo", 1, "test@example.com", school);
    expect(i.school).toBe(school);
});

test("getRole() should return \"Intern\"", () => {
    const i = new Intern("Foo", 1, "test@example.com", "UCLA");
    expect(i.getRole()).toBe("Intern");
});

test("Can get school via getSchool()", () => {
    const school = "UCLA";
    const i = new Intern("Foo", 1, "test@example.com", school);
    expect(i.getSchool()).toBe(school);
});