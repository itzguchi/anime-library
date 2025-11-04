class Anime {
    constructor(title, img, description, smallDescription, category) {
        this.title = title
        this.img = img
        this.description = description
        this.smallDescription = smallDescription
        this.category = category
    }

    animeContent(content) {
        const article = document.createElement('article')

        const img = document.createElement('img')
        img.src = this.img

        const h3 = document.createElement('h3')
        h3.textContent = this.title

        const p = document.createElement('p')
        p.textContent = this.description

        const small = document.createElement('small')
        small.textContent = this.smallDescription

        article.append(img, h3, p, small)

        content.appendChild(article)

        this.relevant = article
    }
}

class AnimeSeries {
    constructor() {
        this.animes = []
        this.section = document.querySelector('section')
        this.searchBar = document.querySelector('.main-searchbar')
        this.radioButtons = document.querySelectorAll('input[name="category"]')
        this.animeCollection()
        this.searchFilter()
        this.categoryFilter()
    }

    animeCollection() {
        this.addAnime(new Anime (
            "One Piece",
            "img/One Piece.jpeg",
            "Lorem ipsum dolor sit amet, nostro vocibus apeirian te mel. Vel quando conceptam reformidans no. At nam veri mazim delicata. Mei ipsum atqui eleifend ad, vim et enim sadipscing mediocritatem. No iisque tractatos mea. Inciderint persequeris ei vim.",
            "One Piece",
            "Throwback"
        ))

        this.addAnime(new Anime (
            "Go! Go! Loser Ranger",
            "img/Go Go Loser Ranger.jpeg",
            "Lorem ipsum dolor sit amet, nostro vocibus apeirian te mel. Vel quando conceptam reformidans no. At nam veri mazim delicata. Mei ipsum atqui eleifend ad, vim et enim sadipscing mediocritatem. No iisque tractatos mea. Inciderint persequeris ei vim.",
            "Go! Go! Loser Ranger",
            "Recent"
        ))
        this.addAnime(new Anime (
            "Konosuba",
            "img/Konosuba.jpeg",
            "Lorem ipsum dolor sit amet, nostro vocibus apeirian te mel. Vel quando conceptam reformidans no. At nam veri mazim delicata. Mei ipsum atqui eleifend ad, vim et enim sadipscing mediocritatem. No iisque tractatos mea. Inciderint persequeris ei vim.",
            "Konosuba",
            "Recent"
        ))
        this.addAnime(new Anime (
            "Promised Neverland",
            "img/Promised Neverland.jpg",
            "Lorem ipsum dolor sit amet, nostro vocibus apeirian te mel. Vel quando conceptam reformidans no. At nam veri mazim delicata. Mei ipsum atqui eleifend ad, vim et enim sadipscing mediocritatem. No iisque tractatos mea. Inciderint persequeris ei vim.",
            "Promised Neverland",
            "Recent"
        ))
        this.addAnime(new Anime (
            "Solo Leveling",
            "img/Solo Leveling.png",
            "Lorem ipsum dolor sit amet, nostro vocibus apeirian te mel. Vel quando conceptam reformidans no. At nam veri mazim delicata. Mei ipsum atqui eleifend ad, vim et enim sadipscing mediocritatem. No iisque tractatos mea. Inciderint persequeris ei vim.",
            "Solo Leveling",
            "Recent"
        ))
        this.animeContent()
    }

    addAnime(anime) {
        this.animes.push(anime)
    }

    animeContent() {
        this.animes.forEach(anime => {
            anime.animeContent(this.section)
        })
    }

    searchFilter () {
        this.searchBar.addEventListener('input', () => {
            const filteredText = this.searchBar.value.toLowerCase()

            this.animes.forEach(anime => {
                if (anime.title.toLowerCase().includes(filteredText)) {
                    anime.relevant.style.display = ''
                } else {
                    anime.relevant.style.display = 'none'
                }
            })
        })
    }

    categoryFilter() {
        this.radioButtons.forEach(radio => {
            radio.addEventListener('input', (e) => {
                const selectedCategory = e.target.value

                this.animes.forEach(anime => {
                    if (selectedCategory === 'All') {
                        anime.relevant.style.display = ''
                    } else if (anime.category === selectedCategory) {
                        anime.relevant.style.display = ''
                    } else {
                        anime.relevant.style.display = 'none'
                    }
                })
            })
        })
    }
}

new AnimeSeries()

const menu = document.querySelector('.menu-icon')
const navMenu = document.querySelector('.header-links')

menu.addEventListener('click', () => {
    navMenu.classList.toggle('show')
})