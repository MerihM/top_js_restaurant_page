import { openTab } from "./tabs";
import { createTabList } from "./tabs";
import { addTabContent } from "./tabs";
import data from './menu.json5';
const content = document.querySelector('.content');
let tablinks = document.getElementsByClassName("tablinks");
window.addEventListener("load", (event) => {
    console.log(data);
    content.appendChild(createTabList());
    content.appendChild(addTabContent());
    for (let e of tablinks) {
        e.addEventListener("click", openTab)
    }
});

