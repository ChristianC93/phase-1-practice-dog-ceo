console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', () => {
    let breeds;

    const dogContainer = document.querySelector('#dog-image-container')

    const dogBreeds = document.querySelector('#dog-breeds')

    const dropDown = document.querySelector('#breed-dropdown')



    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(resp => resp.json())
    .then(data => {
        const images = data.message
        for (const element of images) {
            const img = document.createElement('img')
            img.setAttribute('src', `${element}`)
            dogContainer.appendChild(img)
        }
    })
    fetch('https://dog.ceo/api/breeds/list/all')
    .then(resp => resp.json())
    .then(data => {
        breeds = data.message
        for (let dog in breeds) {
            const li = document.createElement('li')
            li.innerText = dog
            dogBreeds.appendChild(li)
        }
    })
    dogBreeds.addEventListener('click', (e) => {
        if (e.target.style.color === 'blue'){
            e.target.style.color = 'black'
        } else {
            e.target.style.color = 'blue'
        }
    })
    dropDown.addEventListener('change', (e) => {
        const letter = e.target.value
        const breedsArray = Object.keys(breeds)
        const filteredBreeds = breedsArray.filter(breed => breed.startsWith(letter))
        dogBreeds.innerHTML = ''
        for (const element of filteredBreeds) {
            const li = document.createElement('li')
            li.innerText = element
            dogBreeds.appendChild(li)
        }
    })
})
