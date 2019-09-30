// function displayAlert()
// {
//     console.log("Coucou")
// }
// // setTimeout(displayAlert, 2000)

// setInterval(displayAlert, 2000)

function compteRebours(){
    let p = document.getElementById("para");
    let nb = Number(p.textContent);
    nb++
    p.textContent= nb;
}
setInterval(compteRebours, 1000)