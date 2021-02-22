let time = 0;
let timer = setInterval(function ()
{
    time += 2;
    console.log(time + 'Seconds have passed');
    if (time > 30)
    {
        clearInterval(timer);
    }
}, 3000);ff

