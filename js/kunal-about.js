function light() {
    const lightMood = document.getElementById('icon-1')
    lightMood.classList.add('active-one')

    const darkMood = document.getElementById('icon-2')
    darkMood.classList.remove('active-two')

    const body = document.getElementById('body')
    body.classList = 'bg-light'

    const categories = document.getElementById('categories')
    categories.classList.remove('categories-box')

    const categorie = document.getElementById('categorie')
    categorie.classList.remove('categories-box')

}

function dark() {
    const darkMood = document.getElementById('icon-2')
    darkMood.classList.add('active-two')

    const lightMood = document.getElementById('icon-1')
    lightMood.classList.remove('active-one')

    const body = document.getElementById('body')
    body.classList = 'bg-black'

    const categories = document.getElementById('categories')
    categories.classList.add('categories-box')

    const categorie = document.getElementById('categorie')
    categorie.classList.add('categories-box')

    const footerBox = document.getElementById('footer')
    footerBox.classList.add('footer-box')
}