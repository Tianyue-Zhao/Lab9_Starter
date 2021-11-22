window.addEventListener('DOMContentLoaded', init);

async function init()
{
    let buttons = document.getElementById('error-btns').children;
    buttons[5].addEventListener('click', cclear);
    buttons[2].addEventListener('click', ccount);
    buttons[1].addEventListener('click', cerror);
    buttons[6].addEventListener('click', cdir);
    buttons[3].addEventListener('click', cwarn);
    buttons[0].addEventListener('click', clog);
    buttons[4].addEventListener('click', cassert);
    buttons[8].addEventListener('click', cgroupstart);
    buttons[9].addEventListener('click', cgroupend);
    buttons[10].addEventListener('click', ctable);
    buttons[11].addEventListener('click', ctimerstart);
    buttons[12].addEventListener('click', ctimerend);
    buttons[13].addEventListener('click', ctrace);
    buttons[7].addEventListener('click', cdirxml);
    buttons[14].addEventListener('click', cthrowerror);
    window.onerror = errorHandler;
}

function errorHandler(errorEvent)
{
    console.log('yay an error occurred');
    return true;
}

function cthrowerror()
{
    let nullelement = document.getElementById('thisiddoesnotexist');
    let attempted = nullelement.children;
    try
    {
        let nullelement = document.getElementById('thisiddoesnotexist');
        let attempted = nullelement.children;
    }
    catch(e)
    {
        if(e instanceof TypeError)
        {
            console.log('Expected type error, got type error');
        }
    }
    throw new Error("Error showcase");
}

function cdirxml()
{
    let calculateOperator = document.getElementById('operator');
    console.dirxml(calculateOperator);
}

function ctrace()
{
    console.trace();
}

function ctimerend()
{
    console.timeEnd('Lab 9');
}

function ctimerstart()
{
    console.time('Lab 9');
}

function ctable()
{
    let buttons = document.getElementById('error-btns');
    console.table(buttons);
}

function cgroupend()
{
    console.groupEnd('Lab9');
}

function cgroupstart()
{
    console.group('Lab9');
    console.log('Message 1');
    console.log('Message 2');
    console.log('Message 3');
    console.log('Message 4');
}

function cassert()
{
    let buttons = document.getElementById('error-btns');
    let button1 = buttons[2];
    let button2 = buttons[5];
    let reason = 'Assert showcase';
    console.assert(button1 == button2, {button1, button2, reason});
}

function clog()
{
    console.log('Use this all the time');
}

function cwarn()
{
    console.warn('That\'s a warning');
}

function cdir()
{
    let cbutton = document.getElementById('calculate');
    console.dir(cbutton);
}

function cerror()
{
    console.error('Check error');
}

function cclear()
{
    console.clear();
}

function ccount()
{
    console.count('lab9');
}