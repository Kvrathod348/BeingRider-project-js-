function search() {
    const searchInput = document.getElementById('input')
    const searchInputValue = searchInput.value;
    const imgPlace = document.getElementById('riderimg');
    const namePlace = document.getElementById('info')

    switch (searchInputValue) {
        case "Thiksey Monastery":
            imgPlace.src = '../assets/ladakh/Thiksey-monasteryjpg.jpg'
            console.log('working');
            break;

        case "leh place":
            imgPlace.src = '../assets/ladakh/leh place.jpg'
            break;
        case "Pangong Tso":
            imgPlace.src = '../assets/ladakh/pangong-tso.jpg'
            break;
        case "Hemis gompa":
            imgPlace.src = '../assets/ladakh/hemis-gompa3.jpg'
            break;
        case "Nubra Valley":
            imgPlace.src = '../assets/ladakh/nubra-valley.jpg'
            break;
        case "Zanskar":
            imgPlace.src = '../assets/ladakh/zanskar-valley-tourism.jpg'
            break;
        case "Tso Moriri":
            imgPlace.src = '../assets/ladakh/tsoMoriri.webp'
            break;
        case "The Lamayuru Monastery":
            imgPlace.src = '../assets/ladakh/the-lamayuru-monastery.jpg'
            break;
    }

    const spotName = document.getElementById('spot-title');
    spotName.innerText = "Spot : " + searchInputValue;

}