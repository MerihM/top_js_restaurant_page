import { openTab } from "./tabs";
const tablinks = document.getElementsByClassName("tablinks");
for (let e of tablinks) {
    e.addEventListener("click", openTab)
}
