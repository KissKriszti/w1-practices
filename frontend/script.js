/* const data = [
    "Gergely Kiss",
    "Krisztián Bui",
    "Buczkó Balázs",
    "András Varga",
    "Borbála Teréz Kovács"
];
 */

const data = [
    {
        name: "Gergely Kiss",
        favoriteFood: "Csirke/Rizs"
    },
    {
        name: "András Varga",
        favoriteFood: "Brassói"
    },
    {
        name: "Buczkó Balázs",
        favoriteFood: "Kolbászos Rájás Pizza"
    },
    {
        name: "Krisztián Bui",
        favoriteFood: "Banán"
    },
    {
        name: "Borbála Teréz Kovács",
        favoriteFood: "Avokádó"
    },
    {
        name: "Benett Viszokai",
        favoriteFood: "alma"
    },
    {
        name: "Krisztián Pörneczi",
        favoriteFood: "Almáspite"
    },
]
function loadEvent() {
    console.log("Az oldal betöltődött");

    const root = document.querySelector("#root")

    for (const frontEndStudent of data) {
        root.insertAdjacentHTML("beforeend", `
            <section>
                <h1>${frontEndStudent.name}</h1>
                <p>${frontEndStudent.favoriteFood}</p>
            </section>
        `)
    }
}
window.addEventListener("load", loadEvent);
