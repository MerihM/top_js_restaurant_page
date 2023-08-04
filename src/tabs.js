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