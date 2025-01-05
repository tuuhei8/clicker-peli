const laskuri = document.getElementById('laskuri')
const harjat = document.getElementById('harjat')
document.getElementById('kuva').addEventListener('click', laske)
document.getElementById('osta').addEventListener('click', taikuri)

function laske() {
    laskuri.innerHTML ++;
    if (laskuri.innerHTML >= 10) {
        document.getElementById('hiiri').style.display = '';
        document.getElementById('vihje').style.display = 'none';
        if (harjat.innerHTML < 3) {
            document.getElementById('osta').style.color = '';
            document.getElementById('osta').style.border = '';
        };
    };
};

function taikuri() {
    if (laskuri.innerHTML >= 10 && harjat.innerHTML < 3) {
        laskuri.innerHTML = laskuri.innerHTML - 10;
        setInterval(laske, 1000);
        harjat.innerHTML ++;
        if (laskuri.innerHTML < 10 || harjat.innerHTML == 3) {
            document.getElementById('osta').style.color = 'red';
            document.getElementById('osta').style.border = 'solid 1px red';
        };
    }; 
};