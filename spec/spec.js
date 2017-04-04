var test =  require('../ES6/test/test.js');


describe("test_1", function () {
    it("should accept correct answer", function () {

        var result;


        result = test.test_1('HTML', 'CSS', 'JavaScript');


        expect(result).toEqual('Поздравляем, тест пройден!');
    });
});

    describe("Power test", function () {
        it("Positive number", function () {
            var result;

            result = test.test_2(2, 3);

            expect(result).toBe(8);
        });

        it("Negative number", function () {

            var result;

            result = test.test_2(-3, 3);

            expect(result).toBe(-27);
        });

        it("Zero power", function () {

            var result;

            result = test.test_2(5, 0);

            expect(result).toBe(1);

        });

        it("Decimal number", function () {

            var result;

            result = test.test_2(0.4, 5);

            expect(result).toBe('Wrong number format');

        });
    });
