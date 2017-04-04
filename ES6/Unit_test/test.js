var test = {

    test_1: function (x, y, z) {
        var answer1 = 'HTML';
        var answer2 = 'CSS';
        var answer3 = 'JavaScript';
        var question_1 = x;
        var question_2 = y;
        var question_3 = z;

        if (question_1 === answer1) {
            if (question_2 === answer2) {
                if (question_3 === answer3) {
                    return 'Поздравляем, тест пройден!';
                } else {
                    return "К сожалению, Вы не прошли тест";
                }
            } else {
                return "К сожалению, Вы не прошли тест";
            }
        } else {
            return "К сожалению, Вы не прошли тест";
        }
    },

    test_2: function (num, power) {

        var num;
        var power;
        var k;
        var result;

        if(num%1 == 0 && power%1 == 0) {
            if(power==0) {
                result=1;
                return result;
            } else if(power<0) {
                result=num;
                for (k = 1; k<Math.abs(power); k++) {
                    result=result*num;
                }
                result=1/result;
                return result;
            } else {
                result=num;
                for (k = 1; k<power; k++) {
                    result = result * num;
                }
                return result;
            }
        } else {
            result = 'Wrong number format';
            return result;
        }
    }
};


module.exports = test;
