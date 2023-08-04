const tablinks = document.getElementsByClassName("tablinks");
const tabcontent = document.querySelectorAll('.tabcontent');

for (tab of tablinks) {
    tab.addEventListener("click", openTab)
}

function openTab(tab) {

    for (e of tablinks)
        e.classList.remove('active');
    tab.srcElement.classList.add('active');
    for (cont of tabcontent) {
        cont.style.display = 'none';
        if ((tab.srcElement.innerHTML) == cont.id)
            cont.style.display = 'block'
    }
}