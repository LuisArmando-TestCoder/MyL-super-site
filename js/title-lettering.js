(function() {
    const title = document.querySelector('title');
    const split = '';
    const letters = 'MyL'.split(split);
    let letterIndex = 0;
    let i = setInterval(() => {
        if(letterIndex > letters.length - 1) return clearInterval(i);
        title.innerText += letters[letterIndex++];
    }, 300);
})();