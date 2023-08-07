export function createTabList() {
    const tabDiv = document.createElement('div');
    const cities = ['London', 'Paris', 'Tokyo'];
    tabDiv.classList.add('tab');
    for (let city of cities) {
        let tempBtn = document.createElement('button');
        tempBtn.classList.add('tablinks');
        tempBtn.innerText = city;
        tabDiv.appendChild(tempBtn);
    }
    return tabDiv;
}

export function openTab(tab) {
    const tablinks = document.getElementsByClassName("tablinks");
    const tabcontent = document.querySelectorAll('.tabcontent');
    for (let e of tablinks)
        e.classList.remove('active');
    tab.srcElement.classList.add('active');
    for (let cont of tabcontent) {
        cont.style.display = 'none';
        if ((tab.srcElement.innerHTML) == cont.id)
            cont.style.display = 'block'
    }
}
