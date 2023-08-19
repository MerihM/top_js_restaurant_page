import data from './menu.json5';
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
    let tempData = data.hasMenu.hasMenuSection[0].Italy
    makeCard(tempData)
}

/* <div class="allCards tabcontent">
    <div class="menuTitle">Current menu</div>
    <div class="card">
        <h3 class="title">Title</h3>
        <p class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, labore sint placeat
            cum
            aliquid enim odio,
            voluptates tempora consequatur incidunt ex quos eligendi praesentium aspernatur ut sapiente natus eum
            sequi.
        </p>
        <div class="priceContainer">
            <span class="priceText">Price</span>
            <span class="price">5.23$</span>
        </div>
    </div>
</div> */
function makeCard(data) {
    for (let items of data) {
        let allCards = document.createElement('div');
        allCards.classList.add('allCards', 'tabcontent')
        for (let i = 1; i < 11; i++) {
            let item = items.MenuItems[`item${i}`]
            let card = document.createElement('div');
            let title = document.createElement('h3');
            let description = document.createElement('p');
            let priceContainer = document.createElement('div');
            let priceText = document.createElement('span');
            let price = document.createElement('span');
            card.classList.add('card');
            title.classList.add('menuTitle');
            description.classList.add('description');
            priceContainer.classList.add('priceContainer');
            priceText.classList.add('priceText');
            price.classList.add('price');
            title.innerText = item.name;
            description.innerText = item.description;
            priceText.innerText = 'Price';
            price.innerText = item.offers.price;
            priceContainer.appendChild(priceText);
            priceContainer.appendChild(price);
            card.appendChild(title);
            card.appendChild(description);
            card.appendChild(priceContainer);
            allCards.appendChild(card)
        }
        console.log(allCards)
    }
}