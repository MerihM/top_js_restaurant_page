export function createTabList() {
    const tabDiv = document.createElement('div');
    const cities = ['London', 'Paris', 'Tokyo'];
    const tabBtn = document.createElement('button');
    tabDiv.classList.add('tab');
    tabBtn.classList.add('tablinks');
    for (let city of cities) {
        let tempBtn = document.createElement('button');
        tempBtn.classList.add('tablinks');
        tempBtn.innerText = city;
        tabDiv.appendChild(tempBtn);
    }
    return tabDiv;
}

const tablinks = document.getElementsByClassName("tablinks");
const tabcontent = document.querySelectorAll('.tabcontent');

export function openTab(tab) {

    for (let e of tablinks)
        e.classList.remove('active');
    tab.srcElement.classList.add('active');
    for (let cont of tabcontent) {
        cont.style.display = 'none';
        if ((tab.srcElement.innerHTML) == cont.id)
            cont.style.display = 'block'
    }
}



/* <div class="tab">
    <button class="tablinks">London</button>
    <button class="tablinks">Paris</button>
    <button class="tablinks">Tokyo</button>
</div> */