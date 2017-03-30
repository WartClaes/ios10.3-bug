function freeze() {
    var $body = document.querySelector('body');
    $body.style.top = (0 - window.pageYOffset) + 'px';
    $body.classList.add('body--freeze');
}

function unFreeze() {
    var $body = document.querySelector('body');
    var scrollTop = - parseInt($body.style.top);

    $body.style.top = '';
    window.scrollTo(0, scrollTop);

    $body.classList.remove('body--freeze');
}
