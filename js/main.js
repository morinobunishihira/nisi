'use strict'
{
    const btn = document.getElementById('btn');

    btn.addEventListener('click', () => {
        const resolts = ['大吉','中吉','凶','末吉'];
        btn.textContent = resolts[Math.floor(Math.random() * resolts.length)];
    })
}