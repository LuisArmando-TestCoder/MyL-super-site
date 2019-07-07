(function() {
    const featuresList = [...document.querySelectorAll('.features-list li')];
    function spanify(str) {
        return str.split('').map(letter => `<span>${letter}</span>`).join('');
    }
    featuresList.forEach(li => {
        li.innerHTML = spanify(li.innerText);
    });
})();