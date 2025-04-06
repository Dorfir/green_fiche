console.log('-- DOM loaded')


/* Menu */
let menuItems = document.querySelectorAll('.menu-item')
for (let menuItem of menuItems) {
    menuItem.addEventListener('click', (e) => {
        let target = e.currentTarget
        if (!target.classList.contains('active')) {
            for (let item of menuItems) {
                (item.isEqualNode(target)) ? item.classList.add('active') : item.classList.remove('active')
            }
            let current_id = target.getAttribute('id')
            if ((current_id === "btn1")||(current_id === "btn3")) {
                generateFiche(fiches[0])
            }
            if ((current_id === "btn2")||(current_id === "btn4")) {
                generateFiche(fiches[1])
            }
        }
    })
}

/* Fiches */
fiches = [
    {
        titre: "Titre Ananas",
        sousTitre: "Sous-titre",
        imageURI: "./img/pineapple.jpg",
        bodyHTML: `
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla gravida venenatis massa, et dignissim magna suscipit ut. Aliquam maximus arcu at sollicitudin iaculis. Aliquam iaculis quam ac libero porta, eu euismod arcu auctor. Donec ullamcorper rutrum mollis. In vitae leo sed massa finibus hendrerit eget nec nunc. Nunc dignissim enim ut velit cursus, quis congue ex venenatis. Donec tincidunt consequat laoreet. Nunc elementum lacus molestie nisl tempus interdum. Aenean gravida risus in dolor maximus, eget egestas nunc tempus. Proin venenatis nunc eget purus hendrerit faucibus.
            </p>
            <p>
                Suspendisse consectetur bibendum libero, tempus blandit ante aliquam eu. Praesent condimentum leo tristique vehicula dignissim. Nullam pellentesque massa ut elit lacinia, vitae tincidunt felis vulputate. Nam aliquet elit in lobortis tristique. Pellentesque et velit quis turpis bibendum tempus eget non arcu. Suspendisse id tellus ipsum. Aliquam ultrices non turpis sit amet accumsan. Vestibulum tempor non justo nec maximus. Cras scelerisque lacus sem, id commodo felis blandit sed. Proin luctus nisl in turpis feugiat, quis ultricies ipsum mattis. Suspendisse eu ipsum et justo tincidunt sagittis sed id sapien. Praesent rhoncus egestas ex ac congue. Nullam tincidunt, est placerat ultrices congue, eros nulla sodales erat, quis tempus nisi nunc quis velit. Fusce tempus eros leo, sed tristique urna gravida porttitor. In velit est, sagittis ut pellentesque ac, accumsan non ipsum. Phasellus auctor ligula nibh, et pulvinar quam cursus a.
            </p>
            <p>
                Nullam fermentum pellentesque arcu sed tincidunt. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut sit amet mauris rutrum, vulputate orci nec, viverra sapien. Nunc porttitor congue lectus eu iaculis. Quisque sed turpis consequat, egestas nisi at, mollis nunc. Sed sit amet diam in tortor gravida sagittis. Donec commodo mauris mauris, semper hendrerit risus pretium id. Nullam fringilla sem quam, dignissim accumsan nisi tincidunt et. Nunc eu neque vitae orci finibus aliquam at bibendum ex. Nullam vehicula tincidunt convallis.
            </p>
            <p>
                Duis volutpat elementum orci eu commodo. Pellentesque dignissim malesuada nulla eu congue. Nam non sagittis sapien, in tristique ipsum. Integer interdum mauris rhoncus, lobortis lectus nec, pretium dolor. Sed dapibus eleifend mauris ut consectetur. Nullam eget nibh justo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur nec congue dolor. Etiam elit mi, gravida non dui vel, pellentesque varius orci.
            </p>
            <p>
                Nulla eu justo a enim fermentum gravida. Morbi id arcu id ante efficitur malesuada. Aenean dapibus lectus massa, at efficitur risus pellentesque vitae. Ut non placerat odio. Sed vestibulum non quam vitae pellentesque. Suspendisse blandit a eros sed auctor. Curabitur suscipit odio a sem iaculis lobortis.
            </p>
        `
    },
    {
        titre: "Titre Dragon",
        sousTitre: "Sous-titre",
        imageURI: "./img/dragon.jpg",
        bodyHTML: `
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla gravida venenatis massa, et dignissim magna suscipit ut. Aliquam maximus arcu at sollicitudin iaculis. Aliquam iaculis quam ac libero porta, eu euismod arcu auctor. Donec ullamcorper rutrum mollis. In vitae leo sed massa finibus hendrerit eget nec nunc. Nunc dignissim enim ut velit cursus, quis congue ex venenatis. Donec tincidunt consequat laoreet. Nunc elementum lacus molestie nisl tempus interdum. Aenean gravida risus in dolor maximus, eget egestas nunc tempus. Proin venenatis nunc eget purus hendrerit faucibus.
            </p>
            <p>
                Suspendisse consectetur bibendum libero, tempus blandit ante aliquam eu. Praesent condimentum leo tristique vehicula dignissim. Nullam pellentesque massa ut elit lacinia, vitae tincidunt felis vulputate. Nam aliquet elit in lobortis tristique. Pellentesque et velit quis turpis bibendum tempus eget non arcu. Suspendisse id tellus ipsum. Aliquam ultrices non turpis sit amet accumsan. Vestibulum tempor non justo nec maximus. Cras scelerisque lacus sem, id commodo felis blandit sed. Proin luctus nisl in turpis feugiat, quis ultricies ipsum mattis. Suspendisse eu ipsum et justo tincidunt sagittis sed id sapien. Praesent rhoncus egestas ex ac congue. Nullam tincidunt, est placerat ultrices congue, eros nulla sodales erat, quis tempus nisi nunc quis velit. Fusce tempus eros leo, sed tristique urna gravida porttitor. In velit est, sagittis ut pellentesque ac, accumsan non ipsum. Phasellus auctor ligula nibh, et pulvinar quam cursus a.
            </p>
            <p>
                Nullam fermentum pellentesque arcu sed tincidunt. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut sit amet mauris rutrum, vulputate orci nec, viverra sapien. Nunc porttitor congue lectus eu iaculis. Quisque sed turpis consequat, egestas nisi at, mollis nunc. Sed sit amet diam in tortor gravida sagittis. Donec commodo mauris mauris, semper hendrerit risus pretium id. Nullam fringilla sem quam, dignissim accumsan nisi tincidunt et. Nunc eu neque vitae orci finibus aliquam at bibendum ex. Nullam vehicula tincidunt convallis.
            </p>
            <p>
                Duis volutpat elementum orci eu commodo. Pellentesque dignissim malesuada nulla eu congue. Nam non sagittis sapien, in tristique ipsum. Integer interdum mauris rhoncus, lobortis lectus nec, pretium dolor. Sed dapibus eleifend mauris ut consectetur. Nullam eget nibh justo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur nec congue dolor. Etiam elit mi, gravida non dui vel, pellentesque varius orci.
            </p>
            <p>
                Nulla eu justo a enim fermentum gravida. Morbi id arcu id ante efficitur malesuada. Aenean dapibus lectus massa, at efficitur risus pellentesque vitae. Ut non placerat odio. Sed vestibulum non quam vitae pellentesque. Suspendisse blandit a eros sed auctor. Curabitur suscipit odio a sem iaculis lobortis.
            </p>
        `
    }
]

generateFiche(fiches[0])

function generateFiche(data) {

    let fiche = document.createElement('div')
    fiche.classList.add('fiche')

    let titre = document.createElement('h3')
    titre.classList.add('fiche-title')
    titre.innerText = data.titre
    fiche.appendChild(titre)

    let ficheBody = document.createElement('div')
    ficheBody.classList.add('fiche-body')

    let image = document.createElement('img')
    image.setAttribute('src', data.imageURI)
    ficheBody.appendChild(image)

    let sousTitre = document.createElement('h5')
    sousTitre.innerText = data.sousTitre
    ficheBody.appendChild(sousTitre)

    ficheBody.innerHTML += data.bodyHTML

    fiche.appendChild(ficheBody)

    let ficheContainer = document.getElementById('fiche-subcontainer')
    ficheContainer.innerHTML = ""
    ficheContainer.appendChild(fiche)

}

