function loadEvent() {
    console.log("Az oldal betöltődött")

    const list = document.querySelectorAll("section")
    

    for (const elem of list) {
        elem.insertAdjacentHTML("beforeend", `
        <p>text</p>
        `)
        //elem.querySelector("h1").outerHTML = ""
        //elem.style.fontFamily = "Poppins"
        // elem.querySelector("p").style.fontFamily = `'Poppins', sans-serif`
    }
}
window.addEventListener("load", loadEvent)
