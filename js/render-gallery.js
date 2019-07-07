(function() {
    let index = 0;
    const gallery = document.querySelector('.gallery ul');
    function renderGallery({path, format, amount}) {
        for(let i = 1; i <= amount; i++) {
            const li = document.createElement('li');
            const img = document.createElement('img');

            img.src = `${path} (${i}).${format}`;

            li.appendChild(img);
            gallery.appendChild(li);
        }
        gallery.style.setProperty('grid-template-columns', `repeat(${amount + 1}, 100vw)`);
        gallery.style.setProperty('width', `${amount * 100}vw`);
    }
    renderGallery(
        {
            path: './img/stock2/gallery',
            format: 'webp',
            amount: 31
        }
    );
    function moveIndex(direction) { // direction might be -1, 1 or 0 to stay
        index += direction;
        if(index < 0) index = 0; // to stay static
        else if(index > gallery.children.length - 1) index = gallery.children.length - 1;
        gallery.style.setProperty('left', `calc(${-index} * 100vw)`);
    }
    moveIndex(0);
    gallery.parentElement.addEventListener('click', e => {
        if(e.clientX < window.innerWidth / 2) moveIndex(-1);
        else moveIndex(1);
    });
})();