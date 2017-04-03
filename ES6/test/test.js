var test = {

    test_1: function (name) {
        return "hello " + name;
    },

    test_2: function (x, y, z) {
        // var final_res = void 0;
        var answer1 = 'Меркурий';
        var answer2 = 'Александр II';
        var answer3 = 'Дакка';
        var question_1 = x;
        var question_2 = y;
        var question_3 = z;


        if (question_1 === answer1)
        {return "Поздравляем, тест пройден!";}
        else {return "К сожалению, Вы не прошли тест";}

        // if (question_1 === answer1) {
        //     if (question_2 === answer2) {
        //         if (question_3 === answer3) {
        //             return 'Congratulation';
        //         } else {
        //             return "Try again";
        //         }
        //     } else {
        //         return "Try again";
        //     }
        // } else {
        //     return "Try again";
        // }
    }
};



module.exports = test;
