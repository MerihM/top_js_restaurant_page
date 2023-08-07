import { openTab } from "./tabs";
import { createTabList } from "./tabs";
import { addTabContent } from "./tabs";

const content = document.querySelector('.content');
let tablinks = document.getElementsByClassName("tablinks");
window.addEventListener("load", (event) => {
    content.appendChild(createTabList());
    content.appendChild(addTabContent());
    for (let e of tablinks) {
        e.addEventListener("click", openTab)
    }
});
