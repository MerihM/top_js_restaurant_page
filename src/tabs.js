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

export function addTabContent() {
    const tablinks = document.querySelectorAll(".tablinks");
    let para = document.createElement('div');
    const kvTest = { 'London': 'England', 'Paris': 'France', 'Tokyo': 'Japan' };
    for (let city in kvTest) {
        let newDiv = document.createElement('div');
        let newHeading = document.createElement('h3');
        let newPara = document.createElement('p');
        newDiv.classList.add('tabcontent');
        newDiv.id = `${city}`;
        newHeading.innerText = `${city}`;
        newDiv.appendChild(newHeading);
        newPara.innerText = `${city} is capital city of ${kvTest[city]}`;
        newDiv.appendChild(newPara);
        para.appendChild(newDiv);
    }
    return para;
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
