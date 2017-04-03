let obj = {
    title: "Тест на проверку знаний",
    question1: "1. Какая планета Солнечной Системы ближе всего к Солнцу?",
    set1: {
        answer1: "Меркурий",
        answer2: "Плутон",
        answer3: "Венера" },
    question2: '2. Кто автор Великих реформ 1860х в Российской Империи?',
    set2: {
        answer1: 'Николай II',
        answer2: 'Александр II',
        answer3: 'Александр III' },
    question3: '3. Какой город является столицей государства Бангладеш?',
    set3: {
        answer1: 'Манила',
        answer2: 'Джакарта',
        answer3: 'Дакка' }
};

localStorage.setItem('questionnaire', JSON.stringify(obj));
let localData = localStorage.getItem('questionnaire');
let dataObj = JSON.parse(localData);

$(() => {
    let $answer1 = dataObj.set1.answer1;
    let $answer2 = dataObj.set2.answer2;
    let $answer3 = dataObj.set3.answer3;

let html = $('#test').html();
let content = tmpl(html, dataObj);
$('body').append(content);


$('#button').click(e => {
    e.preventDefault();
$('#overlay').stop().fadeIn(400, () => {
    $('#modal_form').css('display', 'block')
    .animate({ opacity: 1, top: '50%' }, 200);
});
});

$('body').dblclick('change', () => {
    $('input[name=radioName]').prop('checked', false);
});

$('.modal_close').click(() => {
    $('#modal_form').animate({ opacity: 0, top: '45%' }, 200, function () {
    $(this).css('display', 'none');
    $('#overlay').stop().fadeOut(400);
    $('.result1').empty();
    $('.result2').empty();
    $('.result3').empty();
    $('.test_summary').empty();
    $('input[name=radioName]').prop('checked', false);
    let $result1 = "Ответ не указан!";
    $('.result1').append($result1);
    let $result2 = "Ответ не указан!";
    $('.result2').append($result2);
    let $result3 = "Ответ не указан!";
    $('.result3').append($result3);
});
});





$('form:nth-of-type(1) label:nth-of-type(1) input').attr('value', dataObj.set1.answer1);
$('form:nth-of-type(1) label:nth-of-type(2) input').attr('value', dataObj.set1.answer2);
$('form:nth-of-type(1) label:nth-of-type(3) input').attr('value', dataObj.set1.answer3);
$('form:nth-of-type(2) label:nth-of-type(1) input').attr('value', dataObj.set2.answer1);
$('form:nth-of-type(2) label:nth-of-type(2) input').attr('value', dataObj.set2.answer2);
$('form:nth-of-type(2) label:nth-of-type(3) input').attr('value', dataObj.set2.answer3);
$('form:nth-of-type(3) label:nth-of-type(1) input').attr('value', dataObj.set3.answer1);
$('form:nth-of-type(3) label:nth-of-type(2) input').attr('value', dataObj.set3.answer2);
$('form:nth-of-type(3) label:nth-of-type(3) input').attr('value', dataObj.set3.answer3);


let $result1 = "Ответ не указан!";
$('.result1').append($result1);
let $result2 = "Ответ не указан!";
$('.result2').append($result2);
let $result3 = "Ответ не указан!";
$('.result3').append($result3);



$('form:nth-of-type(1)').on('change', () => {

    if ($('input[name=radioName]:checked', 'form:nth-of-type(1)').val() === $answer1) {
    $('.result1').empty();
    $result1 = "Ответ правильный!";
    $('.result1').append($result1);
} else {
    $('.result1').empty();
    $result1 = "К сожалению, ответ неверный";
    $('.result1').append($result1);
}
});



$('form:nth-of-type(2)').on('change', () => {

    if ($('input[name=radioName]:checked', 'form:nth-of-type(2)').val() === $answer2) {
    $('.result2').empty();
    $result2 = "Ответ правильный!";
    $('.result2').append($result2);
} else {
    $('.result2').empty();
    $result2 = "К сожалению, ответ неверный";
    $('.result2').append($result2);
}
});



$('form:nth-of-type(3)').on('change', () => {

    if ($('input[name=radioName]:checked', 'form:nth-of-type(3)').val() === $answer3) {
    $('.result3').empty();
    $result3 = "Ответ правильный!";
    $('.result3').append($result3);
} else {
    $('.result3').empty();
    $result3 = "К сожалению, ответ неверный";
    $('.result3').append($result3);
}
});

$('.button').click(() => {
    let $final_res = void 0;
if ($('input[name=radioName]:checked', 'form:nth-of-type(1)').val() === $answer1) {
    if ($('input[name=radioName]:checked', 'form:nth-of-type(2)').val() === $answer2) {
        if ($('input[name=radioName]:checked', 'form:nth-of-type(3)').val() === $answer3) {
            $final_res = "Поздравляем, тест пройден!";
        } else {
            $final_res = "К сожалению, Вы не прошли тест";
        };
    } else {
        $final_res = "К сожалению, Вы не прошли тест";
    };
} else {
    $final_res = "К сожалению, Вы не прошли тест";
};

$('.test_summary').append($final_res);
});
});