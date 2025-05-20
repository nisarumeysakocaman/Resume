window.addEventListener("DOMContentLoaded", () => {
    const kutu = document.createElement("div");
    kutu.textContent = "Nisa Rümeysa Kocaman'ın Özgeçmişi ";
    kutu.style.position = "fixed";
    kutu.style.bottom = "35px";
    kutu.style.right = "35px";
    kutu.style.backgroundColor = "#fcfbed";
    kutu.style.color = "black";
    kutu.style.padding = "10px ";
    kutu.style.borderRadius = "9px";
    kutu.style.boxShadow = "3px 3px 6px #999";
    kutu.style.fontFamily = "Poppins, sans-serif";
    document.body.appendChild(kutu);

    setTimeout(() => {
        kutu.remove();
    }, 4000);
});