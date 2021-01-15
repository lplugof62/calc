const btnSwitch = document.querySelector('#switch');

btnSwitch.addEventListener('click', () => {

    document.body.classList.toggle('dark');
    btnSwitch.classList.toggle('active');

    if (document.body.classList.contains('dark')) {
        localStorage.setItem('dark-mode', 'true');
        /* btnSwitch.classList.toggle('active'); */
    }else {
        localStorage.setItem('dark-mode', 'false');
        /* btnSwitch.classList.remove('active'); */
    }
})

if (localStorage.getItem('dark-mode') === 'true') {
    document.body.classList.add('dark');
    btnSwitch.classList.add('active');
}else {
    document.body.classList.remove('dark');
    btnSwitch.classList.remove('active');
}