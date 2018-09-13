var Menu = require("nativescript-menu").Menu;
var menu = new Menu();

describe("greet function", function() {
    it("exists", function() {
        expect(menu.greet).toBeDefined();
    });

    it("returns a string", function() {
        expect(menu.greet()).toEqual("Hello, NS");
    });
});