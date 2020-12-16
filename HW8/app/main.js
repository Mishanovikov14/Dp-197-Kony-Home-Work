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
}

function dropList() {
    document.getElementById("myDropdown").classList.toggle("show");
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



const spinner1 = document.querySelector('.spinner1').addEventListener('click', () => choseSpinner(1));
const spinner2 = document.querySelector('.spinner2').addEventListener('click', () => choseSpinner(2));
const spinner3 = document.querySelector('.spinner3').addEventListener('click', () => choseSpinner(3));
const spinner4 = document.querySelector('.spinner4').addEventListener('click', () => choseSpinner(4));
const spinner5 = document.querySelector('.spinner5').addEventListener('click', () => choseSpinner(5));
const spinner6 = document.querySelector('.spinner6').addEventListener('click', () => choseSpinner(6));
const spinner7 = document.querySelector('.spinner7').addEventListener('click', () => choseSpinner(7));
const spinner8 = document.querySelector('.spinner8').addEventListener('click', () => choseSpinner(8));
const spinner9 = document.querySelector('.spinner9').addEventListener('click', () => choseSpinner(9));
const spinner10 = document.querySelector('.spinner10').addEventListener('click', () => choseSpinner(10));

function arrow(obj) {
    const symbols = ['🡠 arrow','🡤 arrow', '🡡 arrow', '🡥 arrow', '🡢 arrow', '🡦 arrow', '🡣 arrow', '🡧 arrow'];
    
    if (obj.count === 8) obj.count = 0;
    document.title = symbols[obj.count];
    obj.count++
}

function toggle8(obj) {
    const symbols = ['⭗ ⭗ ⭗', '⦿ ⭗ ⭗', '⭗ ⦿ ⭗', '⭗ ⭗ ⦿'];
    
    if (obj.count === 4) obj.count = 0;
    document.title = symbols[obj.count];
    obj.count++
}

function toggle7(obj) {
    const symbols = ['■', '■ ■', '■ ■ ■', '■ ■ ■ ■'];
    
    if (obj.count === 4) obj.count = 0;
    document.title = symbols[obj.count];
    obj.count++
}

function line(obj) {
    const symbols = ['𑁋', '⟍', '|', '⟋'];
    
    if (obj.count === 4) obj.count = 0;
    document.title = symbols[obj.count];
    obj.count++
}

let flag = Cookie.get('name');

switch (+flag) {
    case 1: {
        setInterval(arrow, 300 , {count: 0});
        break;
    }

    case 2: {
        setInterval(toggle8, 300 , {count: 0});
        break;
    }

    case 3: {
        setInterval(toggle7, 300 , {count: 0});
        break;
    }

    case 4: {
        setInterval(line, 300 , {count: 0});
        break;
    }
} 

