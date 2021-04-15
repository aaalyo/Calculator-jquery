let result;
let action;
let screen = "";

function refreshScreen() {
    $('#screen').html(screen);
}

$('.num').click(function () {
    const number = $(this).attr('value');
    if (number !== '.' || !screen.includes(".")) {
        screen += number;
        refreshScreen();
    }
})



$('.del-bg').click(function () {
    screen = '';
    result = screen;
    refreshScreen();
});

$('.sum').click(function () {
    execute();
    action = '+';
});

$('.minus').click(function () {
    execute();
    action = '-';

});

$('.multiply').click(function () {
    execute();
    action = '*';

});

$('.divide').click(function () {
    execute();
    action = '/';

});

$('.eqn').click(function () {
    execute();
});


function execute() {
    if (screen === '') {
        return;
    }
    if (action === '+') {
        screen = Number(result) + Number(screen);
    }
    if (action === '-') {
        screen = Number(result) - Number(screen);
    }
    if (action === '*') {
        screen = Number(result) * Number(screen);
    }
    if (action === '/') {
        screen = Number(result) / Number(screen);
    }
    
    screen = Math.round(screen * 100000000) /  100000000;

    refreshScreen();
    result = screen;
    screen = '';
}