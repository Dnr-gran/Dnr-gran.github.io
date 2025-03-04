const downloadBtn = document.getElementById("downloadBtn").addEventListener("click", function(){
    const link = document.createElement("a");
    link.href = "Dnr-gran/Dnr-gran.github.io/assets/resume/CV- Daniel Roberto Granchelli.pdf";
    link.dowload = "CV- Daniel Roberto Granchelli.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});

function toggleMenu(){
    const menu = document.querySelector('.menu-links');
    const icon = document.querySelector('.hamburger-icon');

    menu.classList.toggle('open');
    icon.classList.toggle('open');
}