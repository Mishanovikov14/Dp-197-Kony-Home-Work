class Cookie{
    static set(cname, cvalue, exdays){
        const d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        const expires = `expires=${d.toUTCString()}`;
        document.cookie = `${cname}=${cvalue};${expires};path=/`;
    }

    static get(cname) {
        const name = `${cname}=`;
        const c = document.cookie
                    .split(/\;\s?/)
                    .find(el => el.startsWith(name));

        return c?.slice(name.length) || '';
    }

    static del(cname){
        document.cookie = `${cname}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    }
}

function choseSpinner(i) {
    Cookie.set('name', i, 100);
    let highestTimeoutId = setTimeout(";");
    for (let i = 0 ; i < highestTimeoutId ; i++) {
        clearTimeout(i); 
    }

    saveSpinner();
}

function dropList() {
    document.getElementById("myDropdown").classList.toggle("show");
}

function timeCounter() {
    const now = Date.now();
    Cookie.set('time', now, 100);
}

console.log(pathTime());

function pathTime() {
    const lastTime = Date.now() - +Cookie.get('time');
    
    if (lastTime < 60000 + 1) {
        if (Math.round(lastTime / 1000) === 1) return 'You visited this page 1 second ago';
        return `You visited this page ${Math.round(lastTime / 1000)} seconds ago`;  
    } 

    if (lastTime < 3600000 + 1) {
        if (Math.round((lastTime / 1000) / 60) === 1) return 'You visited this page 1 minut ago';
        return `You visited this page ${Math.round((lastTime / 1000) / 60)} minuts ago`;
    } 

    if (lastTime < 3600000 * 60 + 1) {
        if (Math.round((lastTime / 1000) / 3600000) === 1) return 'You visited this page 1 hour ago';
        return `You visited this page ${Math.round((lastTime / 1000) / 3600000)} hours ago`;
    }

    if (lastTime < 3600000 * 60 * 24 + 1) {
        if (Math.round((lastTime / 1000) / (3600000 * 60)) === 1) return 'You visited this page 1 day ago';
        return `You visited this page ${Math.round((lastTime / 1000) / (3600000 * 60))} days ago`;
    }
}


onclick = (e => {
    if (!e.target.matches('.dropbtn')) {
        
        let dropdowns = document.getElementsByClassName("dropdown-content");
        
        for (let i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
});

document.querySelector('.spinner1').addEventListener('click', () => choseSpinner(1));
document.querySelector('.spinner2').addEventListener('click', () => choseSpinner(2));
document.querySelector('.spinner3').addEventListener('click', () => choseSpinner(3));
document.querySelector('.spinner4').addEventListener('click', () => choseSpinner(4));
document.querySelector('.spinner5').addEventListener('click', () => choseSpinner(5));
document.querySelector('.spinner6').addEventListener('click', () => choseSpinner(6));
document.querySelector('.spinner7').addEventListener('click', () => choseSpinner(7));
document.querySelector('.spinner8').addEventListener('click', () => choseSpinner(8));
document.querySelector('.spinner9').addEventListener('click', () => choseSpinner(9));
document.querySelector('.spinner10').addEventListener('click', () => choseSpinner(10));

document.querySelector('.timer').textContent = pathTime();

function arrow(obj) {
    const symbols = ['🡠 arrow','🡤 arrow', '🡡 arrow', '🡥 arrow', '🡢 arrow', '🡦 arrow', '🡣 arrow', '🡧 arrow'];
    
    if (obj.count === 8) obj.count = 0;
    document.title = symbols[obj.count];
    document.querySelector('.currentSpinner').textContent = 'Current spinner is - ' + symbols[obj.count];
    obj.count++
}

function toggle8(obj) {
    const symbols = ['⭗ ⭗ ⭗', '⦿ ⭗ ⭗', '⭗ ⦿ ⭗', '⭗ ⭗ ⦿'];
    
    if (obj.count === 4) obj.count = 0;
    document.title = symbols[obj.count]; 
    document.querySelector('.currentSpinner').textContent = 'Current spinner is - ' + symbols[obj.count];
    obj.count++
}

function toggle7(obj) {
    const symbols = ['■', '■ ■', '■ ■ ■', '■ ■ ■ ■'];
    
    if (obj.count === 4) obj.count = 0;
    document.title = symbols[obj.count];
    document.querySelector('.currentSpinner').textContent = 'Current spinner is - ' + symbols[obj.count];
    obj.count++
}

function line(obj) {
    const symbols = ['𑁋', '⟍', '|', '⟋'];
    
    if (obj.count === 4) obj.count = 0;
    document.title = symbols[obj.count];
    document.querySelector('.currentSpinner').textContent = 'Current spinner is - ' + symbols[obj.count];
    obj.count++
}

function dots1(obj) {
    const symbols = ['⠁', '⠂', '⠄', '⡀', '⢀', '⠠', '⠐', '⠈'];
    
    if (obj.count === 8) obj.count = 0;
    document.title = symbols[obj.count];
    document.querySelector('.currentSpinner').textContent = 'Current spinner is - ' + symbols[obj.count];
    obj.count++
}

function dots2(obj) {
    const symbols = ['⣾', '⣽', '⣻', '⢿', '⡿', '⣟', '⣯', '⣷'];
    
    if (obj.count === 8) obj.count = 0;
    document.title = symbols[obj.count];
    document.querySelector('.currentSpinner').textContent = 'Current spinner is - ' + symbols[obj.count];
    obj.count++
}

function toggle6(obj) {
    const symbols = ['(  ⬤ ◯ ◯  )', '(  ◯ ⬤ ◯  )', '(  ◯ ◯ ⬤  )', '(  ◯ ⬤ ◯  )'];
    
    if (obj.count === 4) obj.count = 0;
    document.title = symbols[obj.count];
    document.querySelector('.currentSpinner').textContent = 'Current spinner is - ' + symbols[obj.count];
    obj.count++
}

function traingle(obj) {
    const symbols = ['▸▹▹▹▹', '▹▸▹▹▹', '▹▹▸▹▹', '▹▹▹▸▹', '▹▹▹▹▸'];
    
    if (obj.count === 5) obj.count = 0;
    document.title = symbols[obj.count];
    document.querySelector('.currentSpinner').textContent = 'Current spinner is - ' + symbols[obj.count];
    obj.count++
}

function star(obj) {
    const symbols = ['✶', '✵', '✷'];
    
    if (obj.count === 3) obj.count = 0;
    document.title = symbols[obj.count];
    document.querySelector('.currentSpinner').textContent = 'Current spinner is - ' + symbols[obj.count];
    obj.count++
}

function line2(obj) {
    const symbols = ['⊢', '⊤', '⊣', '⊥'];
    
    if (obj.count === 4) obj.count = 0;
    document.title = symbols[obj.count];
    document.querySelector('.currentSpinner').textContent = 'Current spinner is - ' + symbols[obj.count];
    obj.count++
}

function saveSpinner(flag = Cookie.get('name')) {
    
    switch (+flag) {
        case 1: {
            arrow({count: 0});
            setInterval(arrow, 300 , {count: 1});
            break;
        }
        
        case 2: {
            toggle8({count: 0});
            setInterval(toggle8, 300 , {count: 1});
            break;
        }
        
        case 3: {
            toggle7({count: 0});
            setInterval(toggle7, 300 , {count: 1});
            break;
        }
        
        case 4: {
            line({count: 0});
            setInterval(line, 300 , {count: 1});
            break;
        }
        
        case 5: {
            dots1({count: 0});
            setInterval(dots1, 300 , {count: 1});
            break;
        }
        
        case 6: {
            dots2({count: 0});
            setInterval(dots2, 300 , {count: 1});
            break;
        }
        
        case 7: {
            toggle6({count: 0});
            setInterval(toggle6, 300 , {count: 1});
            break;
        }
        
        case 8: {
            traingle({count: 0});
            setInterval(traingle, 300 , {count: 1});
            break;
        }
        
        case 9: {
            star({count: 0});
            setInterval(star, 300 , {count: 1});
            break;
        }
        
        case 10: {
            line2({count: 0});
            setInterval(line2, 300 , {count: 1});
            break;
        }
    } 
}

timeCounter();
let savingSpinner = saveSpinner();
