var test =  require('../ES6/test/test.js');

// describe("test_1", function () {
//     it("should be say hello ", function () {
//
//         var result;
//         console.log('test', test);
//
//
//
//         result = test.test_1('Меркурий');
//
//
//
//         expect(result).toBe('hello Меркурий');
//     });
// });

describe("test_2", function () {
    it("should accept correct answer", function () {

        var result;



        result = test.test_2('Меркурий');



        expect(result).toEqual('Поздравляем, тест пройден!');
    });
});
