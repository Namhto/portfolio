window.addEventListener('DOMContentLoaded', () => init())

const navigation = ['home', 'cv', 'portfolio', 'contact']

const language = {
    english: {
        homeNavigation: 'Home',
        cvNavigation: 'Resume',
        portfolioNavigation: 'Portfolio',
        contactNavigation: 'Contact',
        homeTitle: 'I am a software engineer',
        homeDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque hic sed voluptas, minus temporibus nostrum ullam molestiae sequi dicta, cum totam dignissimos aliquid tempore et, debitis ex officiis maxime. Nam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates dolorem iure provident esse beatae delectus debitis libero. Tempora doloribus ratione deleniti, totam numquam dolor eligendi enim cum, nostrum voluptatem laboriosam?',
        cvDownloadTitle: 'Get my resume',
        cvDownloadFormat: '(PDF format)',
        cvDownloadButton: 'Download',
        skillsTitle: 'Skills',
        backend: 'Backend',
        frontend: 'Frontend',
        other: 'Other',
        positionTitle: 'Current position',
        positionDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque hic sed voluptas, minus temporibus nostrum ullam molestiae sequi dicta, cum totam dignissimos aliquid tempore et, debitis ex officiis maxime. Nam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates dolorem iure provident esse beatae delectus debitis libero. Tempora doloribus ratione deleniti, totam numquam dolor eligendi enim cum, nostrum voluptatem laboriosam?',
        github: 'Check my Github profile <a href="https://github.com/Namhto" value="githubLink">here</a>.',
        meetup: 'I am an active member of several <a href="https://www.meetup.com/fr-FR/members/278324342/">Meetups</a>.',
        craftsmanTitle: 'I am a software craftsman',
        craftsmanDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque hic sed voluptas, minus temporibus nostrum ullam molestiae sequi dicta, cum totam dignissimos aliquid tempore et, debitis ex officiis maxime. Nam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates dolorem iure provident esse beatae delectus debitis libero. Tempora doloribus ratione deleniti, totam numquam dolor eligendi enim cum, nostrum voluptatem laboriosam?',
        bookshelfTitle: 'On my bookshelf',
        bookshelfHint: '(click on the images to find them on Amazon)',
        contactNetworks: 'Find me on social networks',
        contactMessage: 'Send me a message'
    },
    french: {
        homeNavigation: 'Accueil',
        cvNavigation: 'CV',
        portfolioNavigation: 'Portfolio',
        contactNavigation: 'Contact',
        homeTitle: 'Je suis ingénieur logiciel',
        homeDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque hic sed voluptas, minus temporibus nostrum ullam molestiae sequi dicta, cum totam dignissimos aliquid tempore et, debitis ex officiis maxime. Nam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates dolorem iure provident esse beatae delectus debitis libero. Tempora doloribus ratione deleniti, totam numquam dolor eligendi enim cum, nostrum voluptatem laboriosam?',
        cvDownloadTitle: 'Obtenez mon CV',
        cvDownloadFormat: '(Format PDF)',
        cvDownloadButton: 'Télécharger',
        skillsTitle: 'Compétences',
        backend: 'Serveur',
        frontend: 'Client',
        other: 'Autre',
        positionTitle: 'Poste actuel',
        positionDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque hic sed voluptas, minus temporibus nostrum ullam molestiae sequi dicta, cum totam dignissimos aliquid tempore et, debitis ex officiis maxime. Nam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates dolorem iure provident esse beatae delectus debitis libero. Tempora doloribus ratione deleniti, totam numquam dolor eligendi enim cum, nostrum voluptatem laboriosam?',
        github: 'Consultez mon profil Github <a href="https://github.com/Namhto" value="githubLink">ici</a>.',
        meetup: 'Je suis un membre actif de plusieurs <a href="https://www.meetup.com/fr-FR/members/278324342/">Meetups</a>.',
        craftsmanTitle: 'Je suis un artisan du logiciel',
        craftsmanDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque hic sed voluptas, minus temporibus nostrum ullam molestiae sequi dicta, cum totam dignissimos aliquid tempore et, debitis ex officiis maxime. Nam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates dolorem iure provident esse beatae delectus debitis libero. Tempora doloribus ratione deleniti, totam numquam dolor eligendi enim cum, nostrum voluptatem laboriosam?',
        bookshelfTitle: 'Dans ma bibliothèque',
        bookshelfHint: '(cliquez sur les images pour les trouver sur Amazon)',
        contactNetworks: 'Me trouver sur les réseaux sociaux',
        contactMessage: 'Envoyez-moi un message'
    }
}

function init() {    
    bindNavigation()
    bindUserScroll()
    bindBurger()
    bindLanguage()
    setLanguage(language.english)
}

function bindNavigation() {
    navigation.forEach(item => {
        const navigationElement = document.querySelector(`#${item}-navigation`)
        navigationElement.addEventListener('click', () => {
            toggleNavigationActiveElement(navigationElement)
            closeMenu()
            const bounds = document.querySelector(`#${item}-section`).getBoundingClientRect()
            window.scrollTo({
                top: bounds.top + window.scrollY - 50,
                behavior: 'smooth'
            })
        })
    })
}

function bindUserScroll() {
    let isScrolling
    window.addEventListener('scroll', () => {
        window.clearTimeout(isScrolling)
        isScrolling = setTimeout(() => navigation.forEach(item => {
            const sectionBounds = document.querySelector(`#${item}-section`).getBoundingClientRect()
            const offset = -sectionBounds.top + 52
            if (offset >= -2 || window.scrollY === window.scrollMaxY) {
                toggleNavigationActiveElement(document.querySelector(`#${item}-navigation`))
            }
        }), 100)
    })
}

function bindBurger() {
    const burgerElement = document.querySelector('.navbar-burger')
    burgerElement.addEventListener('click', () => burgerElement.classList.contains('is-active') ? closeMenu() : openMenu())
}

function bindLanguage() {
    document.querySelector('#english').addEventListener('click', () => setLanguage(language.english))
    document.querySelector('#french').addEventListener('click', () => setLanguage(language.french))
}

function setLanguage(lang) {
    const englishElement = document.querySelector('#english')
    const frenchElement = document.querySelector('#french')
    if (lang === language.english) {
        englishElement.classList.add('is-active')
        frenchElement.classList.remove('is-active')
    } else if (lang === language.french) {
        frenchElement.classList.add('is-active')
        englishElement.classList.remove('is-active')
    }
    closeMenu()
    bindText(lang)
}

function bindText(lang) {
    document.querySelectorAll('[value]').forEach(element => {
        element.innerHTML = lang[element.getAttribute('value')]
    })
}

function downloadCv() {
    window.location = 'https://drive.google.com/uc?export=download&id=1inOvANrCuf6q9Jpe3h7pOLsbevxd8dAJ'
}

function toggleNavigationActiveElement(navigationElement) {
    navigation.forEach(item => {
        document.querySelector(`#${item}-navigation`).classList.remove('is-active')
    })
    navigationElement.classList.add('is-active')
}

function openMenu() {
    const burgerElement = document.querySelector('.navbar-burger')
    const menuElement = document.querySelector('.navbar-menu')
    burgerElement.classList.add('is-active')
    menuElement.classList.add('is-active')
}

function closeMenu() {
    const burgerElement = document.querySelector('.navbar-burger')
    const menuElement = document.querySelector('.navbar-menu')
    burgerElement.classList.remove('is-active')
    menuElement.classList.remove('is-active')
}