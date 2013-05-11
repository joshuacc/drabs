describe("Drabs", function() {
    it("should exist", function() {
        expect(typeof drabs).toBe("object");
    });

    describe("deepGet", function() {
        var deepObject = {
            a: {
                b: {
                    c: "c"
                }
            },
            "falseVal": false,
            "nullVal": null
        };

        it("should get a deep property's value", function() {
            expect(drabs.deepGet(deepObject, ["a", "b", "c"])).toEqual("c");
            expect(drabs.deepGet(deepObject, ["falseVal"])).toEqual(false);
        });

        it("should return undefined for non-values (including null)", function() {
            expect(drabs.deepGet(deepObject, ["a", "notHere"])).toBeUndefined();
            expect(drabs.deepGet(deepObject, ["nullVal"])).toBeUndefined();
        });

        it("should return a default value instead of undefined if one is provided", function() {
            expect(drabs.deepGet(deepObject, ["nullVal"], "defaultVal")).toBe("defaultVal");
        });

        it("should accept a 'dot notation' string as a property list", function() {
            expect(drabs.deepGet(deepObject, "a.b.c")).toEqual("c");
        });
    });
});