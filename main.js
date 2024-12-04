const revealAnimation = {
    frames: [
        { scale: 1.05 },
        { scale: 0.95 },
        { scale: 1.1 },
        { scale: 0 }
    ],
    
    timing: {
        duration: 700,
        fill: "forwards",
    }
}

const errorAnimation = {
    frames: [
        { color: '#d4d4d4', transform: 'translateX(0)' },
        { color: '#dc2626', transform: 'translateX(-2%)'},
        { color: '#dc2626', transform: 'translateX(2%)'},
        { color: '#d4d4d4', transform: 'translateX(0)' },
    ],
    timing: {
        duration: 300,
    }
}

function cryptoRand() {
    const factor = 10 ** 4;
    const randomUint32 = new Uint32Array(1);
    window.crypto.getRandomValues(randomUint32);
    return (randomUint32[0] % factor) / factor;
}


let mainArray = [[{"multi":1.03,"prob":0.9611},{"multi":1.08,"prob":0.9166},{"multi":1.12,"prob":0.8839},{"multi":1.18,"prob":0.8389},{"multi":1.24,"prob":0.7983},{"multi":1.3,"prob":0.7615000000000001},{"multi":1.37,"prob":0.7226},{"multi":1.46,"prob":0.6779999999999999},{"multi":1.55,"prob":0.6386999999999999},{"multi":1.65,"prob":0.6},{"multi":1.77,"prob":0.5593},{"multi":1.9,"prob":0.521},{"multi":2.06,"prob":0.4805},{"multi":2.25,"prob":0.44},{"multi":2.47,"prob":0.4008},{"multi":2.75,"prob":0.36},{"multi":3.09,"prob":0.32030000000000003},{"multi":3.54,"prob":0.2796},{"multi":4.12,"prob":0.2402},{"multi":4.95,"prob":0.2},{"multi":6.19,"prob":0.15990000000000001},{"multi":8.25,"prob":0.12},{"multi":12.38,"prob":0.0799},{"multi":24.75,"prob":0.04}],[{"multi":1.08,"prob":0.9166},{"multi":1.17,"prob":0.8461},{"multi":1.29,"prob":0.7674},{"multi":1.41,"prob":0.7021},{"multi":1.56,"prob":0.6346},{"multi":1.74,"prob":0.5689},{"multi":1.94,"prob":0.5103},{"multi":2.18,"prob":0.5440999999999999},{"multi":2.47,"prob":0.4008},{"multi":2.83,"prob":0.34979999999999994},{"multi":3.26,"prob":0.3036},{"multi":3.81,"prob":0.25980000000000003},{"multi":4.5,"prob":0.22},{"multi":5.4,"prob":0.1833},{"multi":6.6,"prob":0.15},{"multi":8.25,"prob":0.12},{"multi":10.61,"prob":0.0933},{"multi":14.14,"prob":0.07},{"multi":19.8,"prob":0.05},{"multi":29.7,"prob":0.0333},{"multi":49.5,"prob":0.02},{"multi":99,"prob":0.01},{"multi":297,"prob":0.0033333}],[{"multi":1.12,"prob":0.8839},{"multi":1.29,"prob":0.7674},{"multi":1.48,"prob":0.6689},{"multi":1.71,"prob":0.5789},{"multi":2,"prob":0.495},{"multi":2.35,"prob":0.42119999999999996},{"multi":2.79,"prob":0.35479999999999995},{"multi":3.35,"prob":0.2955},{"multi":4.07,"prob":0.2432},{"multi":5,"prob":0.198},{"multi":6.26,"prob":0.15810000000000002},{"multi":7.96,"prob":0.1243},{"multi":10.35,"prob":0.0956},{"multi":13.8,"prob":0.0717},{"multi":18.97,"prob":0.0521},{"multi":27.11,"prob":0.0365},{"multi":40.66,"prob":0.024300000000000002},{"multi":65.06,"prob":0.0152},{"multi":113.85,"prob":0.008695699999999999},{"multi":227.7,"prob":0.0043478},{"multi":569.25,"prob":0.0017391000000000002},{"multi":2277,"prob":0.0004348}],[{"multi":1.18,"prob":0.8389},{"multi":1.41,"prob":0.7021},{"multi":1.71,"prob":0.5789},{"multi":2.09,"prob":0.4736},{"multi":2.58,"prob":0.3837},{"multi":3.32,"prob":0.3065},{"multi":4.09,"prob":0.242},{"multi":5.26,"prob":0.1882},{"multi":6.88,"prob":0.1438},{"multi":9.17,"prob":0.1079},{"multi":15.21,"prob":0.0791},{"multi":17.52,"prob":0.0565},{"multi":25.3,"prob":0.0391},{"multi":37.95,"prob":0.026000000000000002},{"multi":59.64,"prob":0.0165},{"multi":99.39,"prob":0.009960799999999999},{"multi":178.91,"prob":0.0055335},{"multi":357.81,"prob":0.0027668},{"multi":834.9,"prob":0.0011858},{"multi":2504.7,"prob":0.0003953},{"multi":12523.5,"prob":0.0000791}],[{"multi":1.24,"prob":0.7983},{"multi":1.56,"prob":0.6346},{"multi":2,"prob":0.495},{"multi":2.58,"prob":0.3837},{"multi":3.39,"prob":0.292},{"multi":4.52,"prob":0.21899999999999997},{"multi":6.14,"prob":0.1612},{"multi":8.5,"prob":0.1164},{"multi":12.04,"prob":0.08220000000000001},{"multi":17.52,"prob":0.0565},{"multi":26.27,"prob":0.037599999999999995},{"multi":40.87,"prob":0.0242},{"multi":66.41,"prob":0.0149},{"multi":113.85,"prob":0.008695699999999999},{"multi":208.72,"prob":0.0047432},{"multi":417.45,"prob":0.0023715},{"multi":939.26,"prob":0.001054},{"multi":2504.7,"prob":0.0003953},{"multi":8766.45,"prob":0.00011289999999999999},{"multi":52598.7,"prob":0.0000188}],[{"multi":1.3,"prob":0.7615000000000001},{"multi":1.74,"prob":0.5689},{"multi":2.35,"prob":0.42119999999999996},{"multi":3.23,"prob":0.3065},{"multi":4.52,"prob":0.21899999999999997},{"multi":6.46,"prob":0.1532},{"multi":9.44,"prob":0.1048},{"multi":14.17,"prob":0.0698},{"multi":21.89,"prob":0.0452},{"multi":35.03,"prob":0.0282},{"multi":58.38,"prob":0.0169},{"multi":102.17,"prob":0.0096897},{"multi":189.75,"prob":0.0052174},{"multi":379.5,"prob":0.0026087},{"multi":834.9,"prob":0.0011858},{"multi":2087.25,"prob":0.0004743},{"multi":6261.75,"prob":0.00015810000000000002},{"multi":25047,"prob":0.000039500000000000005},{"multi":175329,"prob":0.0000056}],[{"multi":1.37,"prob":0.7226},{"multi":1.94,"prob":0.5103},{"multi":2.79,"prob":0.35479999999999995},{"multi":4.09,"prob":0.242},{"multi":6.14,"prob":0.1612},{"multi":9.44,"prob":0.1048},{"multi":14.95,"prob":0.0662},{"multi":24.47,"prob":0.0404},{"multi":41.6,"prob":0.023700000000000002},{"multi":73.95,"prob":0.013300000000000001},{"multi":138.66,"prob":0.007139799999999999},{"multi":277.33,"prob":0.0035698},{"multi":600.87,"prob":0.0016476},{"multi":1442.1,"prob":0.0006865},{"multi":3965.77,"prob":0.0002496},{"multi":13219.25,"prob":0.0000749},{"multi":59486.62,"prob":0.0000166},{"multi":475893,"prob":0.0000021000000000000002}],[{"multi":1.46,"prob":0.6779999999999999},{"multi":2.18,"prob":0.45409999999999995},{"multi":3.35,"prob":0.2955},{"multi":5.26,"prob":0.1882},{"multi":8.5,"prob":0.1164},{"multi":14.17,"prob":0.0698},{"multi":24.47,"prob":0.0404},{"multi":44.05,"prob":0.022400000000000003},{"multi":83.2,"prob":0.0118},{"multi":166.5,"prob":0.0059495},{"multi":356.56,"prob":0.0027765},{"multi":831.98,"prob":0.0011899},{"multi":2163.15,"prob":0.00045769999999999996},{"multi":6489.45,"prob":0.0001526},{"multi":23794.65,"prob":0.000041599999999999995},{"multi":118973.25,"prob":0.0000083},{"multi":1070759.25,"prob":9.000000000000001e-7}],[{"multi":1.55,"prob":0.6386999999999999},{"multi":2.47,"prob":0.4008},{"multi":4.07,"prob":0.2432},{"multi":6.88,"prob":0.1438},{"multi":12.04,"prob":0.08220000000000001},{"multi":21.89,"prob":0.0452},{"multi":41.6,"prob":0.023700000000000002},{"multi":83.2,"prob":0.0118},{"multi":176.8,"prob":0.0055994999999999994},{"multi":404.1,"prob":0.0024499},{"multi":1010.26,"prob":0.0009799},{"multi":2828.73,"prob":0.00035000000000000005},{"multi":9139.39,"prob":0.0001077},{"multi":36773.55,"prob":0.0000269},{"multi":202254.52,"prob":0.0000049},{"multi":2022545.25,"prob":5e-7}],[{"multi":1.65,"prob":0.6},{"multi":2.83,"prob":0.34979999999999994},{"multi":5,"prob":0.198},{"multi":9.17,"prob":0.1079},{"multi":17.52,"prob":0.0565},{"multi":35.03,"prob":0.0282},{"multi":73.95,"prob":0.013300000000000001},{"multi":166.4,"prob":0.0059495},{"multi":404.1,"prob":0.0024499},{"multi":1077.61,"prob":0.0009186999999999999},{"multi":3232.84,"prob":0.0003062},{"multi":11314.94,"prob":0.00008750000000000001},{"multi":49031.4,"prob":0.0000202},{"multi":294188.4,"prob":0.0000034},{"multi":3236072.4,"prob":3e-7}],[{"multi":1.77,"prob":0.5593},{"multi":3.26,"prob":0.3036},{"multi":6.26,"prob":0.15810000000000002},{"multi":12.51,"prob":0.0791},{"multi":26.27,"prob":0.037599999999999995},{"multi":58.38,"prob":0.0169},{"multi":138.66,"prob":0.007139799999999999},{"multi":356.56,"prob":0.0027765},{"multi":1010.26,"prob":0.0009799},{"multi":3232.84,"prob":0.0003062},{"multi":12123.15,"prob":0.00008170000000000001},{"multi":56574.69,"prob":0.000017500000000000002},{"multi":367735.5,"prob":0.0000027},{"multi":4412826,"prob":2.0000000000000002e-7}],[{"multi":1.9,"prob":0.521},{"multi":3.81,"prob":0.25980000000000003},{"multi":7.96,"prob":0.1243},{"multi":17.52,"prob":0.0565},{"multi":40.87,"prob":0.0242},{"multi":102.17,"prob":0.0096897},{"multi":277.33,"prob":0.0035698},{"multi":831.98,"prob":0.0011899},{"multi":2828.73,"prob":0.00035000000000000005},{"multi":11314.94,"prob":0.00008750000000000001},{"multi":56574.69,"prob":0.000017500000000000002},{"multi":396022.85,"prob":0.0000025},{"multi":5148297,"prob":2.0000000000000002e-7}],[{"multi":2.06,"prob":0.4805},{"multi":4.5,"prob":0.22},{"multi":10.35,"prob":0.0956},{"multi":25.3,"prob":0.0391},{"multi":66.41,"prob":0.0149},{"multi":189.75,"prob":0.0052174},{"multi":600.87,"prob":0.0016476},{"multi":2163.15,"prob":0.00045769999999999996},{"multi":9193.39,"prob":0.0001077},{"multi":49301.4,"prob":0.0000202},{"multi":367735.5,"prob":0.0000027},{"multi":5148297,"prob":2.0000000000000002e-7}],[{"multi":2.25,"prob":0.44},{"multi":5.4,"prob":0.1833},{"multi":13.8,"prob":0.0717},{"multi":37.95,"prob":0.026000000000000002},{"multi":113.85,"prob":0.008695699999999999},{"multi":379.5,"prob":0.0026087},{"multi":1442.1,"prob":0.0006865},{"multi":6489.45,"prob":0.0001526},{"multi":36773.55,"prob":0.0000269},{"multi":294188.4,"prob":0.0000034},{"multi":4412826,"prob":2.0000000000000002e-7}],[{"multi":2.47,"prob":0.4008},{"multi":6.6,"prob":0.15},{"multi":18.97,"prob":0.0521},{"multi":59.64,"prob":0.0165},{"multi":208.72,"prob":0.0047432},{"multi":834.9,"prob":0.0011858},{"multi":3965.77,"prob":0.0002496},{"multi":23794.65,"prob":0.000041599999999999995},{"multi":202254.52,"prob":0.0000049},{"multi":3236072.4,"prob":3e-7}],[{"multi":2.75,"prob":0.36},{"multi":8.25,"prob":0.12},{"multi":27.11,"prob":0.0365},{"multi":99.39,"prob":0.009960799999999999},{"multi":417.45,"prob":0.0023715},{"multi":2087.25,"prob":0.0004743},{"multi":13219.25,"prob":0.0000749},{"multi":118973.25,"prob":0.0000083},{"multi":2022545.25,"prob":5e-7}],[{"multi":3.09,"prob":0.32030000000000003},{"multi":10.61,"prob":0.0933},{"multi":40.66,"prob":0.024300000000000002},{"multi":178.91,"prob":0.0055335},{"multi":939.26,"prob":0.001054},{"multi":6261.75,"prob":0.00015810000000000002},{"multi":59486.62,"prob":0.0000166},{"multi":1070759.25,"prob":9.000000000000001e-7}],[{"multi":3.54,"prob":0.2796},{"multi":14.14,"prob":0.07},{"multi":65.06,"prob":0.0152},{"multi":357.81,"prob":0.0027668},{"multi":2504.7,"prob":0.0003953},{"multi":25047,"prob":0.000039500000000000005},{"multi":475893,"prob":0.0000021000000000000002}],[{"multi":4.12,"prob":0.2402},{"multi":19.8,"prob":0.05},{"multi":113.85,"prob":0.008695699999999999},{"multi":834.9,"prob":0.0011858},{"multi":8766.45,"prob":0.00011289999999999999},{"multi":175329,"prob":0.0000056}],[{"multi":4.95,"prob":0.2},{"multi":29.7,"prob":0.0333},{"multi":227.7,"prob":0.0043478},{"multi":2504.7,"prob":0.0003953},{"multi":52598.7,"prob":0.0000188}],[{"multi":6.19,"prob":0.15990000000000001},{"multi":49.5,"prob":0.02},{"multi":596.25,"prob":0.0017391000000000002},{"multi":12523.5,"prob":0.0000791}],[{"multi":8.25,"prob":0.12},{"multi":99,"prob":0.01},{"multi":2277,"prob":0.0004348}],[{"multi":12.37,"prob":0.08},{"multi":297,"prob":0.0033333}],[{"multi":24.75,"prob":0.04}]]

const gemSvg = '<svg width="100" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--twemoji" preserveAspectRatio="xMidYMid meet"><path fill="#BDDDF4" d="M13 3H7l-7 9h10z"></path><path fill="#5DADEC" d="M36 12l-7-9h-6l3 9z"></path><path fill="#4289C1" d="M26 12h10L18 33z"></path><path fill="#8CCAF7" d="M10 12H0l18 21zm3-9l-3 9h16l-3-9z"></path><path fill="#5DADEC" d="M18 33l-8-21h16z"></path></svg>';
const bombSvg = '<svg width="100" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--noto" preserveAspectRatio="xMidYMid meet"><path fill="#ffe36c" d="M81.13 29.99l-18.34.18l15.68-8.55l-3.71-13.24l10.41 7.9l10.47-8.01l-2.75 10.78l17.26 1.98l-17.96 7l-7.16 12.5z"></path><path d="M92.27 13.37l-.76 2.96l-1.13 4.45l4.56.52l6.94.79l-9.76 3.81l-1.32.51l-.7 1.23l-4.68 8.17l-1.92-5.2l-.98-2.65l-2.82.04l-8.91.09l7.24-3.95l2.8-1.53l-.86-3.07l-1.67-5.96l4.44 3.37l2.43 1.84l2.42-1.85l4.68-3.57m-7.11.39L72.49 4.15c-.41-.31-.98.08-.84.57l4.46 15.91l-19.44 10.6c-.49.27-.3 1.01.26 1L79.74 32l4.5 12.17c.16.43.74.47.97.08l8.37-14.62l22.82-8.9c.52-.2.42-.97-.13-1.03L95.4 17.32l3.22-12.65c.13-.49-.44-.87-.84-.56l-12.62 9.65z" fill="#ff8f00"></path><path d="M94.59 44.29c-1.27-.18-7.6 6.13-12.17 2.17l-.01.01a43.674 43.674 0 0 0-8.72-5.51c-21.75-10.37-47.8-1.15-58.18 20.61c-10.37 21.75-1.15 47.8 20.61 58.18c21.75 10.37 47.8 1.15 58.18-20.61c3.37-7.06 4.67-14.57 4.14-21.85c-.04-.51-.13-1.64.12-2.48c1.71-5.74 7.93-8.6 7.8-8.87c-.13-.28-10.49-21.47-11.77-21.65z" fill="#4d4d4d"></path><ellipse transform="rotate(-29.923 100.447 55.121)" cx="100.46" cy="55.12" rx="5.83" ry="12.33" fill="#757575"></ellipse><ellipse transform="rotate(-30 102.345 55.102)" cx="102.35" cy="55.1" rx="2.29" ry="3.52" fill="#212121"></ellipse><path d="M53.9 52.57c2.74 7.78-1.27 12.42-6.46 15.39c-2.48 1.42-5.36 2.04-7.87 3.41c-4.88 2.66-7.84 7.79-12.09 11.36c-1.06.89-2.27 1.71-3.65 1.86c-1.84.2-3.64-.88-4.74-2.37c-1.09-1.5-5.56-15.72 10.76-30.27c7.29-6.5 21.05-7.91 24.05.62z" opacity=".9" fill="#757575"></path><linearGradient id="IconifyId17ecdb2904d178eab5809" gradientUnits="userSpaceOnUse" x1="42.079" y1="34.552" x2="83.812" y2="48.063"><stop offset="0" stop-color="#fff9c4" stop-opacity=".1"></stop><stop offset=".002" stop-color="#fff9c4" stop-opacity=".101"></stop><stop offset=".378" stop-color="#fffca6" stop-opacity=".263"></stop><stop offset=".701" stop-color="#fffe94" stop-opacity=".401"></stop><stop offset=".93" stop-color="#ffff8d" stop-opacity=".5"></stop></linearGradient><path d="M41.86 38.72c3.69.12 11.23.17 20.77 3.92c3.21 1.26 5.92 3.02 8.83 4.82c2.35 1.45 5.02 2.66 7.77 2.4c.97-.09 2.04-.47 2.42-1.37c.23-.56.21-1.13.01-1.69c-.24-.66-1.06-1.58-2.32-2.61a44.392 44.392 0 0 0-5.64-3.23c-10.36-4.94-21.69-5.43-31.84-2.24z" fill="url(#IconifyId17ecdb2904d178eab5809)"></path><linearGradient id="IconifyId17ecdb2904d178eab5810" gradientUnits="userSpaceOnUse" x1="102.029" y1="57.302" x2="91.139" y2="42.935"><stop offset=".11" stop-color="#fff9c4" stop-opacity="0"></stop><stop offset="1" stop-color="#ffff8d"></stop></linearGradient><path d="M102.13 47.64c-.05-.05-.1-.11-.15-.16c-.01-.01-.01-.02-.02-.02c-.23-.23-.46-.45-.69-.67c-.03-.03-.07-.06-.1-.1c-2.53-2.29-5.12-3.26-6.86-2.27c-2.79 1.6-2.3 7.69 1.1 13.59a25.56 25.56 0 0 0 2.37 3.43c-.1-.29-3.84-11.52-1.51-14.53c1.99-2.54 5.51.43 5.86.73z" fill="url(#IconifyId17ecdb2904d178eab5810)"></path><path d="M88.16 74.53c-2.42-1.59-4.79-3.75-6.26-9.18c-.19-.69-.83-4.12 1.02-4.67c1.6-.48 2.79 2.15 4.17 4.46c1.5 2.53 3.93 4.72 6.54 6.15c.76.41 4.29 2 1.97 4.22c-1.53 1.45-6.02-.04-7.44-.98z" fill="#212121"></path><path d="M100.85 53.44c.1-.04 10.25-4.65 9.37-11.34c-.58-4.42-2.3-6.62-11.4-8.78c-8.9-2.11-13.25-6.24-13.43-6.42c-.89-.86-.92-2.29-.05-3.19c.86-.89 2.28-.92 3.18-.06c.07.06 3.77 3.48 11.35 5.28c8.82 2.09 13.79 4.72 14.83 12.57c1.16 8.78-8.52 14.25-11.29 15.7c-1.72.91-3.7-3.26-2.56-3.76z" fill="#c69461"></path><path d="M88.5 23.66c-.89-.86-2.32-.83-3.18.06c-.86.9-.84 2.32.05 3.19c.13.13 2.5 2.37 7.25 4.39l.95-1.66l3.66-1.43c-5.81-1.86-8.67-4.5-8.73-4.55z" fill="#f6bc41"></path></svg>'
let gems = 0;
let bombs = 1;
let gameInProgress = false;

function truncateNum(num){
    let re = new RegExp('^-?\\d+(?:\.\\d{0,' + (2 || -1) + '})?');
    return num.toString().match(re)[0];
}

function cashout(){
    gameInProgress = false;
    let winAudio = new Audio('./sounds/win.m4a');
    winAudio.play();
    let profit = parseFloat(document.getElementById('profit').innerText.replace('$', ''));
    let betElm = document.getElementById('betAmmount');

    let balanceElm = document.getElementById('balance');
    let balance = parseFloat(balanceElm.getAttribute('data-balance'));
    
    console.log('trunc ', truncateNum(balance + profit))
    balanceElm.innerText = `Current Balance: $${truncateNum(balance + profit)}`;
    balanceElm.setAttribute('data-balance', balance + profit)

    let gameInfo = document.getElementById('gameInfo');

    let bombElm = document.getElementById('bombCount');

    document.getElementById('betBtn').disabled = false;
    betElm.parentElement.style.opacity = '100%';
    betElm.disabled = false;
    bombElm.disabled = false;

    //slide game info out
    gameInfo.animate([{transform: "translateX(0%)"}, {transform: "translateX(-120%)"}], {duration: 500, fill: "forwards", easing: "ease-out"});
    document.getElementById('multiplier').textContent = 'Total profit (0.00x)';
    document.getElementById('profit').textContent = '0.00';
}

function loseGame(){
    gameInProgress = false;
    let betElm = document.getElementById('betAmmount');
    let betVal = parseFloat(betElm.value);

    let gameInfo = document.getElementById('gameInfo');

    let bombElm = document.getElementById('bombCount');

    document.getElementById('betBtn').disabled = false;
    betElm.parentElement.style.opacity = '100%';
    betElm.disabled = false;
    bombElm.disabled = false;

    //slide game info out
    gameInfo.animate([{transform: "translateX(0%)"}, {transform: "translateX(-120%)"}], {duration: 500, fill: "forwards", easing: "ease-out"});
    document.getElementById('multiplier').textContent = 'Total profit (0.00x)';
    document.getElementById('profit').textContent = '0.00';
}

function calcWin(prob){
    const numCompare = cryptoRand();
    console.log(prob, numCompare);
    if(numCompare <= prob) return true
    return false;
}

function reveal(tile){
    if(!gameInProgress) return;
    if(tile.getAttribute('data-working') == 'true') return
    tile.setAttribute('data-working', 'true');
    let revealElm = document.createElement('div');
    revealElm.classList = "tile-reveal";
    
    let win = calcWin(mainArray[bombs-1][gems].prob);
    //let win = calcWin((25-(gems+1))/25);
    revealElm.innerHTML = (win) ? gemSvg : bombSvg;
    (win) ? gems++ : gameInProgress = false;

    tile.animate(revealAnimation.frames, revealAnimation.timing).onfinish = () => {
        tile.replaceWith(revealElm);
        if(!win){
            let bombAudio = new Audio('./sounds/bomb.m4a');
            bombAudio.play();
            loseGame();
            return;
        }

        document.getElementById('gemsCounter').textContent = 25-bombs-gems;

        let gemAudioPath = './sounds/gem1.m4a' 
        if(gems > 7) gemAudioPath = './sounds/gem2.m4a';
        if(gems > 15) gemAudioPath = './sounds/gem3.m4a';
        if(gems > 21) gemAudioPath = './sounds/gem4.m4a'
        let gemAudio = new Audio(gemAudioPath);
        gemAudio.play();

        let multi =  mainArray[bombs-1][gems-1].multi;
        let betVal = parseFloat(document.getElementById('betAmmount').value);
        document.getElementById('multiplier').textContent = `Total profit (${multi}x)`;
        document.getElementById('profit').textContent = `$${truncateNum(betVal * multi)}`;
    }
}

function startGame(){
    let betElm = document.getElementById('betAmmount');
    let betVal = parseFloat(betElm.value);

    let balanceElm = document.getElementById('balance');
    let balance = parseFloat(balanceElm.getAttribute('data-balance'));

    if(balance < betVal || betVal <= 0){
        let errorAudio = new Audio('./error.m4a');
        errorAudio.play();
        if(balance < betVal) balanceElm.animate(errorAnimation.frames, errorAnimation.timing);
        if(betVal <= 0) betElm.animate(errorAnimation.frames, errorAnimation.timing);
        return;
    }
    let startAudio = new Audio('./sounds/start.m4a');
    startAudio.play();

    balanceElm.setAttribute('data-balance', truncateNum(balance-betVal))
    balanceElm.innerText = `Current Balance: $${truncateNum(balance-betVal)}`;

    let bombElm = document.getElementById('bombCount');
    let bombCount = parseInt(bombElm.value);

    let gameInfo = document.getElementById('gameInfo');

    bombs = bombCount;
    gems = 0;

    //start animation
    Array.from(document.getElementById('tiles').children).forEach(tile => {tile.innerHTML = ''; tile.classList = 'tile'})
    document.querySelectorAll('.tile').forEach((tile, i) => {
        tile.animate(
            [{ transform: "rotate(180deg) scale(1)" },
            { transform: "rotate(180deg) scale(1.2)"},
            { transform: "rotate(180deg) scale(1)" }],
            { duration: 500, fill: "forwards", delay: i*15, easing: "ease-out"}
        )
    })

    document.getElementById('betBtn').disabled = true;
    betElm.parentElement.style.opacity = '50%';
    betElm.disabled = true;
    bombElm.disabled = true;

    document.getElementById('gemsCounter').innerText = 25-bombCount;
    document.getElementById('bombsCounter').innerText = bombCount;

    //slide game info in
    gameInfo.animate([{transform: "translateX(-100%)"}, {transform: "translateX(0%)"}], {duration: 500, fill: "forwards", easing: "ease-out"});
    gameInProgress = true;
}

document.getElementById('betBtn').addEventListener('click', () => startGame());
document.getElementById('cashoutBtn').addEventListener('click', () => cashout());
document.getElementById('tiles').addEventListener('click', (e) => {
    const tile = e.target.closest('.tile');
    if (tile) reveal(tile)
});
