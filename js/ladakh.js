// themme part

function light(){
    const lightMood = document.getElementById('icon-1')
    lightMood.classList.add('active-one')
     
    const darkMood = document.getElementById('icon-2')
    darkMood.classList.remove('active-two')

    const categorie = document.getElementById('categorie')
    categorie.classList.remove('categories-box')

}
function dark(){
    const darkMood = document.getElementById('icon-2')
    darkMood.classList.add('active-two')

    const lightMood = document.getElementById('icon-1')
    lightMood.classList.remove('active-one')

    const body = document.getElementById('body')
    body.classList='bg-black'

    const footerBox=document.getElementById('footer')
    footerBox.classList.add('footer-box')
}



function search() {
    const searchInput = document.getElementById('input')
    const searchInputValue = searchInput.value;
    const imgPlace = document.getElementById('riderimg');
    const namePlace = document.getElementById('info')
    const descriptionPlace = document.getElementById('description')
    const mapDetails = document.getElementById('map-details')
    const mapLocation = document.getElementById('co-ordinates')
    const map = document.getElementById('map-frame')

    switch (searchInputValue) {
        case "Thiksey Monastery":
            imgPlace.src = '../assets/ladakh/Thiksey-monasteryjpg.jpg'
            namePlace.innerHTML = `One of the main points of interest is the Maitreya (future Buddha) Temple erected to commemorate visit of the 14th Dalai Lama to this monastery in 1970. <br>
            It contains a 15 metres (49 ft) high statue of Maitreya Buddha, the largest such statue in Ladakh, covering two stories of the building.<br>
            Thiksey Monastery, also known as Thiksey Gompa, is a famous Buddhist monastery in Ladakh, India that's known for its many notable features:<br>
Buddhist art<br>
The monastery is home to Buddhist murals, sculptures, and important manuscripts.<br>
Architecture<br>
The monastery is similar to the Potala Palace in Lhasa, Tibet. It's a 12-story building located at an altitude of 11,800 ft (3,600 m) on a hilltop that offers panoramic views of the surrounding valleys and mountains<br>
Religious objects.`
            descriptionPlace.innerHTML = `Thiksey Monastery is a Tibetan Buddhist monastery of the Gelug
            order of Tibetan Buddhism. It is located in Thikse village in Ladakh, India.`
            mapDetails.innerHTML = ` Large hilltop monastery from the mid 1400s, with temples, a nunnery & a variety of Buddhist art.`
            mapLocation.innerHTML = `Co-ordinates: <br> 34.05610481914003, 77.6677625`
            map.innerHTML = ` <iframe class="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.5301135376603!2d77.6677625!3d34.055922588748736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38fdf1e497c37b1b%3A0xfc0ddd49e1b9fa4a!2sThiksey%20Monastery!5e0!3m2!1sen!2sin!4v1721561717103!5m2!1sen!2sin"
                width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"></iframe>`
            console.log('working');
            break;

        case "leh place":
            imgPlace.src = '../assets/ladakh/leh place.jpg'
            namePlace.innerHTML = `The Leh Palace in Ladakh, India is a hub of Buddhist culture and religion and offers many special features, including:<br>
Architecture<br>
The 17th century palace is modeled after the Potala Palace in Tibet and features wooden carved figurines at the entrance, grey brick walls, and multiple floors.<br>
Buddhism<br>
The palace has a monastery with a statue of Lord Buddha, and display galleries with Tibetan thangkas, historical paintings, and pictures. Some of the paintings are almost 450 years old and use colors derived from powdered stones and jewels.<br>
Royal artifacts<br>
The palace also houses a museum with artifacts over 450 years old, as well as a collection of ceremonial gowns, crowns, and royal jewels.`
            descriptionPlace.innerHTML = `Leh Palace is a former royal palace overlooking the town of Leh in
the Leh district, in the Indian state of Jammu and Kashmir. It is nine stories high;
the upper floors of the palace were used by the royal family and the lower floors stored grain and hay
`
            mapDetails.innerHTML = `Former royal palace situated on top of a mountain, accessible by hike with picturesque city views.`
           mapLocation.innerHTML = `Co-ordinates: <br> 34.16617357109787, 77.58653028039274`
            map.innerHTML = `<iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3301.232114536028!2d77.58399827518197!3d34.16598271171695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38fdeb150c993295%3A0xc41a8d83a5a327e6!2sLeh%20Palace!5e0!3m2!1sen!2sin!4v1721565840992!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
            break;

        case "Pangong Tso":
            imgPlace.src = '../assets/ladakh/pangong-tso.jpg'
            namePlace.innerHTML= `Pangong Tso, also known as Pangong Lake, is a famous lake in Ladakh, India. The lake's name comes from the Tibetan word Pangong Tso, which means "high grassland lake". It's known for its many special features, including:
Changing colors<br>
The lake's color can change depending on the weather and the angle of the sunlight, appearing in shades of blue, green, and sometimes red.<br>
Frozen land <br>
In the winter, the lake freezes completely.<br>
Highest salt water lake <br>
Pangong Tso is the highest salt water lake in the world and extends into Tibet. <br>
Brackish water <br>
The lake's water is brackish and has low micro-vegetation. Guides say there are no fish or other aquatic life in the lake, but visitors often see ducks and gulls.`
descriptionPlace.innerHTML= `The Pangong Tso Lake is a breeding ground for different types of birds, including migratory ones. During the summer, the bar-headed goose and Brahminy Ducks are commonly spotted. Fishes such as False Osman and Kunar Snow Trout reside in the lake.`
mapDetails.innerHTML = `Remote, closed-basin lake in the Himalayas featuring brackish water migrating birds & more.`
 mapLocation.innerHTML = `Co-ordinates: <br> 34.16617357109787, 77.58653028039274`
map.innerHTML= `<iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d212135.36608155147!2d78.5587766923561!3d33.82224473838094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39002d69b6082a97%3A0xb7ba17e3c8c016a9!2sPangong%20Tso!5e0!3m2!1sen!2sin!4v1721594765522!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
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