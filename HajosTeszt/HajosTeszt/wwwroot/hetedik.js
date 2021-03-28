var kérdések;
var hanyadik = 0;
betoltes = () => {
    fetch('/kérdésbank.json')
        .then(response => response.json())
        .then(data => letoltes_bef(data))
}

letoltes_bef = (adat) => {
    document.getElementById("kulso");
    console.log(`${adat.length} objektum érkezett`)
    console.log("sikeres letöltés")
    console.log(adat)
    kérdések = adat;
    megjelenites(hanyadik)
}

megjelenites = (i) => {
    let kérdés_szöveg = document.getElementById("kérdés_szöveg")
    let kép = document.getElementById("abra")
    let válasz1 = document.getElementById("valasz1")
    let válasz2 = document.getElementById("valasz2")
    let válasz3 = document.getElementById("valasz3")

    kérdés_szöveg.innerText = kérdések[i].questionText;
    válasz1.innerText = kérdések[i].answer1;
    válasz2.innerText = kérdések[i].answer2;
    válasz3.innerText = kérdések[i].answer3;

    if (kérdések[i].image != "") {
        kép.src = "https://szoft1.comeback.hu/hajo/" + kérdések[hanyadik].image;
    }
    else {
        kép.src = "";
    }
}

window.onload = () => {
    betoltes();

    document.getElementById("valasz2").onclick = () => {
        if (kérdések[hanyadik].correctAnswer === 2) {
            document.getElementById("valasz2").style.background = "mediumseagreen";
        }
        else {
            document.getElementById("valasz2").style.background = "indianred";
            document.getElementById("valasz" + kérdések[hanyadik].correctAnswer).style.background = "mediumseagreen";
        }
    }
    document.getElementById("valasz1").onclick = () => {
        if (kérdések[hanyadik].correctAnswer === 1) {
            document.getElementById("valasz1").style.background = "mediumseagreen";
        }
        else {
            document.getElementById("valasz1").style.background = "indianred";
            document.getElementById("valasz" + kérdések[hanyadik].correctAnswer).style.background = "mediumseagreen";
        }
    }
    document.getElementById("valasz3").onclick = () => {
        if (kérdések[hanyadik].correctAnswer === 3) {
            document.getElementById("valasz3").style.background = "mediumseagreen";
        }
        else {
            document.getElementById("valasz3").style.background = "indianred";
            document.getElementById("valasz" + kérdések[hanyadik].correctAnswer).style.background = "mediumseagreen";
        }
    }
    document.getElementById("elore").onclick = () => {
        if (hanyadik === kérdések.length - 1) {
            document.getElementById("elore").disabled = true;
        }
        else {
            hanyadik++;
            document.getElementById("elore").disabled = false;
        }
        document.getElementById("valasz1").style.background = "cornsilk";
        document.getElementById("valasz2").style.background = "cornsilk";
        document.getElementById("valasz3").style.background = "cornsilk";
        megjelenites(hanyadik)
    }
    document.getElementById("vissza").onclick = () => {
        if (hanyadik === 0) {
            document.getElementById("vissza").disabled = true;
        }
        else {
            hanyadik--;
            document.getElementById("vissza").disabled = false;
        }
        document.getElementById("valasz1").style.background = "cornsilk";
        document.getElementById("valasz2").style.background = "cornsilk";
        document.getElementById("valasz3").style.background = "cornsilk";
        megjelenites(hanyadik)
    }
}