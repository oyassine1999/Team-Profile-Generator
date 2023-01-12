const Engineer = require('../lib/Engineer');

test("Can set GitHub account via constructor", () => {
    const github = "GitHubUser";
    const e = new Engineer("Foo", 1, "test@example.com", github);
    expect(e.github).toBe(github);
});

test("getRole() should return \"Engineer\"", () => {
    const e = new Engineer("Foo", 1, "test@example.com", "GitHubUser");
    expect(e.getRole()).toBe("Engineer");
});

test("Can get GitHub username via getGithub()", () => {
    const github = "GitHubUser";
    const e = new Engineer("Foo", 1, "test@example.com", github);
    expect(e.getGithub()).toBe(github);
});