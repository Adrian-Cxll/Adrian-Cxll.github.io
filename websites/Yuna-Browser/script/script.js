const tip = document.getElementById('footer-tip');
const footer = document.getElementById('footer');
const symb = document.getElementById('footer-tip-symbol');
let footeropen = false;
let valTransform = "-3rem";
let x = window.matchMedia("(max-width: 850px)");

tip.addEventListener('click', () => {
    if (x.matches)
        valTransform = "-1rem";
    else
        valTransform = "-3rem"

    if (footeropen) {
        footer.style.transform = 'translate(0, 0rem)';
        symb.innerHTML = 'expand_less';
    }
    else {
        footer.style.transform = `translate(0, ${valTransform})`;
        symb.innerHTML = 'expand_more';
    }
    footeropen = !footeropen;
});