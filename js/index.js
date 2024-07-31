const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// themme part

// function light() {
//     const lightMood = document.getElementById('icon-1')
//     lightMood.classList.add('active-one')

//     const darkMood = document.getElementById('icon-2')
//     darkMood.classList.remove('active-two')

//     const body = document.getElementById('body')
//     body.classList = 'bg-light'

//     const categories = document.getElementById('categories')
//     categories.classList.remove('categories-box')

//     const categorie = document.getElementById('categorie')
//     categorie.classList.remove('categories-box')

// }

// function dark() {
//     const darkMood = document.getElementById('icon-2')
//     darkMood.classList.add('active-two')

//     const lightMood = document.getElementById('icon-1')
//     lightMood.classList.remove('active-one')

//     const body = document.getElementById('body')
//     body.classList = 'bg-black'

//     const categories = document.getElementById('categories')
//     categories.classList.add('categories-box')

//     const categorie = document.getElementById('categorie')
//     categorie.classList.add('categories-box')

//     const footerBox = document.getElementById('footer')
//     footerBox.classList.add('footer-box')
// }

const themeIcon = document.getElementById('theme-icon');
const body = document.body;

themeIcon.addEventListener('click', () => {
    if (body.classList.contains('bg-black')) {
        body.classList.remove('bg-black');
        body.classList.add('bg-light');
        themeIcon.classList.add('active-one')
        themeIcon.src = './assets/home/moon.png';
        body.style.transition='2s';
    } else {
        body.classList.remove('bg-light');
        body.classList.add('bg-black');
        categories.classList.add('categories-box')
        categorie.classList.add('categories-box')
        footer.classList.add('footer-box')
        themeIcon.classList.add('active-one');
        themeIcon.src = './assets/home/sun.png';
        body.style.transition='2s';
    }
});


function search() {
    const searchInput = document.getElementById('input')
    const searchInputValue = searchInput.value;
    const riderImg = document.getElementById('riderimg')
    const riderInfo = document.getElementById('info')

    const bikeName = document.getElementById('bike-name')
    const bikeImg = document.getElementById('bike-img')
    const accesories = document.getElementById('accessories')

    switch (searchInputValue) {
        case "Bhor Ghat":
            riderImg.src = './assets/home/bhor-ghat.jpg'
            riderInfo.innerHTML = `Bhor Ghat is a mountain pass in Maharashtra, India that connects Mumbai to Pune. <br />
            The area is known for its natural beauty, including valleys, meadows, and scenic spots.<br /> 
            The road route between Khopoli and Khandala is 18 km long and has six lanes on the Mumbai–Pune express highway and four lanes on the old Mumbai–Pune road. 
            <br />The railway route between Palsdari and Khandala includes 28 tunnels, which can make for a spooky train ride.`
            bikeImg.src = './assets/home/bhur-ghat-jawa-Perak.jpg'
            bikeName.innerHTML = `Royal Enfield Interceptor 650. Royal Enfield is the first name that comes to everyone's mind when thinking of a bike for long tours.`
            accesories.innerHTML = `<h3 class="font-style">Accessories Needed:</h3>
               <ul class="bike-need font-style">
                <li>Helmet: Ensure it meets safety standards.</li>
                <li>Gloves: For better grip and protection.</li>
                <li>Jacket: Provides protection against weather and potential falls.</li>
                <li>Knee Guards: Important for safety during rides.</li>
                <li>Saddlebags or Tank Bag: Useful for carrying essentials.</li>
               </ul> `
            break;

        case "Bhutan Bike Tours":
            riderImg.src = './assets/home/bhutan.jpg'
            riderInfo.innerHTML = `Bhutan offers a range of scenic bike tours, allowing enthusiasts to explore its natural beauty and cultural heritage. <br>
             Tours vary from leisurely rides to more adventurous expeditions, catering to different interests and fitness levels <br>
             [1]. Some tours are thoughtfully crafted to include e-bike options for easier exploration <br/>
             [2] Packages are available from nearby countries like India, making it accessible for international visitors <br/> [3 and 4].
             Discounts are sometimes offered on booking, enhancing the appeal for adventure seekers <br/>.
             Specialized tours, like the Thunder Dragon Bike Tour, focus on exploring Bhutan's unique landscapes and cultural sites`
            bikeImg.src = './assets/home/bhutan-royal-enfield-himalayan.jpg'
            bikeName.innerHTML = `The Royal Enfield Himalayan is equipped with a fuel-injected 411cc single-cylinder engine, providing adequate power for both highway cruising and off-road maneuvering`
            accesories.innerHTML = `<h3 class="font-style">Accessories Needed:</h3>
               <ul class="bike-need font-style">
                <li>Helmet: A high-quality helmet is crucial for safety. Ensure it meets safety standards and fits well .</li>
                <li>Gloves: Protect your hands and provide better grip on the handlebars</li>
                <li>Armoured Jacket and Pants: Provides protection in case of falls and keeps you warm in varying weather conditions [</li>
                <li>Boots: Choose durable, comfortable, and water-resistant boots suitable for long rides </li>
                <li>Rain Gear: Includes waterproof jackets and pants to keep you dry during unexpected showers </li>
               </ul> `
            break;

        case "Darjeeling to Sikkim":
            riderImg.src = './assets/home/darjeeling-sikkim.jpg'
            riderInfo.innerHTML = `A bike tour from Darjeeling to Sikkim offers breathtaking views of the Himalayan landscape, rich cultural experiences, and unique natural beauty. <br> Key highlights of the tour include:
1. Mt. Kanchenjunga: The third highest mountain in the world, offering stunning scenic views throughout the journey.<br>
2. Tea Gardens: Rolling hills covered with lush tea gardens in Darjeeling, creating a picturesque backdrop.<br>
3. River Valleys and Waterfalls: Numerous waterfalls and river valleys along the way, adding to the tour's natural beauty.<br>
4. High-altitude Lakes: In Sikkim, high-altitude lakes such as Tsomgo Lake provide serene and stunning views.<br>
5. Flora and Fauna: Diverse flora and fauna, especially in the meadows and forested areas of Sikkim, making the ride visually enriching.`
            bikeImg.src = './assets/home/der-dominor.png'
            bikeName.innerHTML = `Bajaj Dominar 400: This bike combines power and comfort, making it a great option for long-distance touring with good performance on hilly roads`
            accesories.innerHTML = `<h3 class="font-style">Accessories Needed:</h3>
               <ul class="bike-need font-style">
                <li>Helmet: A high-quality helmet is crucial for safety. Ensure it meets safety standards and fits well .</li>
                <li>Gloves: Protect your hands and provide better grip on the handlebars</li>
                <li>Armoured Jacket and Pants: Provides protection in case of falls and keeps you warm in varying weather conditions [</li>
                <li>Maps: Physical maps in case of GPS failure. </li>
                <li>Extra Fuel Canisters: In case of long stretches without fuel stations. </li>
               </ul> `
            break;

        case "Kerala Bike Trip":
            riderImg.src = './assets/home/kerala-bike-trip.png'
            riderInfo.innerHTML = `Munnar: Known
            for its tea plantations, rolling hills, and scenic views.The ride through the winding roads offers a refreshing experience. <br>
                Alleppey: Famous
            for its backwaters, you can enjoy serene views of the waterways, lush green paddy fields, and traditional houseboats. <br>
                Wayanad: This region is rich in biodiversity, with dense forests, waterfalls, and wildlife sanctuaries.The climb to places like Chembra Peak provides panoramic views. <br>
                Thekkady: Located near the Periyar Wildlife Sanctuary, this area is perfect
            for spotting wildlife amidst beautiful natural settings. <br>
                Varkala: Known
            for its cliffs adjacent to the Arabian Sea, it provides stunning coastal views.`
            bikeName.innerHTML = `The Royal Enfield Himalayan is equipped with a fuel-injected 411cc single-cylinder engine, providing adequate power for both highway cruising and off-road maneuvering`
            accesories.innerHTML = `<h3 class="font-style">Accessories Needed:</h3>
               <ul class="bike-need font-style">
                <li>Helmet: A high-quality helmet is crucial for safety. Ensure it meets safety standards and fits well .</li>
                <li>Gloves: Protect your hands and provide better grip on the handlebars</li>
                <li>Armoured Jacket and Pants: Provides protection in case of falls and keeps you warm in varying weather conditions </li>
                <li>Boots: Choose durable, comfortable, and water-resistant boots suitable for long rides </li>
                <li>Rain Gear: Includes waterproof jackets and pants to keep you dry during unexpected showers </li>
               </ul> `
            break;

        case "Ladakh":
            riderImg.src = './assets/home/ladakh.jpg'
            riderInfo.innerHTML = `
            Ladakh is a popular destination
            for bike tours, offering a unique
            blend of natural beauty, cultural experiences, and adventure.<br>
                Some key highlights of a bike tour in Ladakh include:<br>
                1. High - altitude passes: The region is home to several high - altitude passes,
                such as Khardung La, which offer breathtaking views of the surrounding
            mountains and valleys. <br>
                2. Monasteries: Ladakh is home to numerous monasteries, which offer
            insights into the region 's rich cultural heritage and spiritual traditions.<br>
            3. Wildlife: The region is home to a diverse range of wildlife, including
            snow leopards, blue sheep, and Himalayan ibex, making it a popular destination
            for wildlife enthusiasts.<br>
                4. Scenic landscapes: The region is known
            for its stunning landscapes,
            including vast deserts, snow - capped mountains, and crystal - clear lakes. <br>
                5. Adventure activities: Ladakh offers a range of adventure activities,
                such as trekking, mountain biking, and river rafting, making it a popular
            destination
            for adventure seekers.
            `
            bikeImg.src = './assets/home/bhur-ghat-jawa-Perak.jpg'
            bikeName.innerHTML = `Royal Enfield Interceptor 650. Royal Enfield is the first name that comes to everyone's mind when thinking of a bike for long tours.`
            accesories.innerHTML = `<h3 class="font-style">Accessories Needed:</h3>
               <ul class="bike-need font-style">
                <li>Helmet: Ensure it meets safety standards.</li>
                <li>Gloves: For better grip and protection.</li>
                <li>Jacket: Provides protection against weather and potential falls.</li>
                <li>Knee Guards: Important for safety during rides.</li>
                <li>Saddlebags or Tank Bag: Useful for carrying essentials.</li>
               </ul> `
            break;

        case "Lonavala":
            riderImg.src = './assets/home/lonavala.jpg'
            riderInfo.innerHTML = `
            Lonavala is a popular destination
            for bike tours in India, offering
            a range of scenic landscapes, cultural experiences, and adventure activities.
            Some key highlights of a bike tour in Lonavala include:<br>
                Scenic landscapes: The region is known
            for its rolling hills, lush green
            forests, and waterfalls, making it a popular destination
            for nature lovers. <ul>
                <li> Historical sites: The region is home to several historical sites, such as
            the Bhaja Caves and the Karla Caves, which offer insights into the region 's
            rich cultural heritage </li> 
            <li> Adventure activities: Lonavala offers a range of adventure activities,
                such as trekking, rock climbing, and rappelling, making it a popular destination
            for adventure seekers. </li> 
            <li> Wildlife: The region is home to a diverse range of wildlife, including
            leopards, langurs, and peacocks, making it a popular destination
            for wildlife
            enthusiasts. </li> 
            <li >
                Cultural experiences: The region is home to several cultural experiences,
                such as the Khandala Fair, which offers a glimpse into the region 's traditional
            customs and practices. </li>

                </ul>`
            break;

        case "Spiti Valley":
            riderImg.src = './assets/home/spiti-valley.jpg'
            riderInfo.innerHTML = `Natural beauty and cultural heritage. Tabo monastery is one of the most prominent attractions in Spiti. 
            The monasteries in Spiti are renowned for spectacular murals, ancient temples, and several stupas.
            <ul>
            <li>Kunzum Pass: At an altitude of 4,551 meters, this pass offers breathtaking panoramic views of the snow-capped Himalayas and the Spiti Valley below.</li>
            <li>Chandratal Lake: Known as the "Moon Lake," this high-altitude lake is surrounded by mountains and provides a serene and picturesque spot for travelers.</li>
            <li>Key Monastery: Perched on a hilltop, this ancient monastery not only provides spiritual solace but also offers stunning views of the Spiti River and the valley.</li>
            <li> Pin Valley National Park: Home to a variety of flora and fauna, this park offers lush green landscapes and scenic beauty, contrasting the rugged terrain of the rest of Spiti</li>
            </ul>`
            break;
        case "Western Arunchal Pradesh":
            riderImg.src = './assets/home/western-arunchal-pradesh.jpg'
            riderInfo.innerHTML = `Arunachal consists of a number of eco-regions. At the lowest elevations, at Arunachal Pradesh's border with Assam, are the Brahmaputra Valley semi-evergreen forests. 
            Much of the state, including the Himalayan foothills and the Patkai hills, are home to Eastern Himalayan broadleaf forests.
            Tawang: Known for the Tawang Monastery, one of the largest in India, this town offers stunning views of the surrounding mountains and valleys.<br/>
Sela Pass: This high-altitude pass at 13,700 feet is famous for its snow-covered landscapes and the serene Sela Lake, providing breathtaking views.<br/>
Bum La Pass: Located on the Indo-China border, this pass offers a sense of adventure and panoramic views of the Himalayas .<br/>
Dirang Valley: Known for its apple orchards, hot springs, and picturesque views, Dirang is a beautiful stopover on the way to Tawang.<br/>
Bomdila: This town offers beautiful views of the Eastern Himalayas, monasteries, and a cultural insight into the local Monpa tribe.
Ziro Valley: Famous for its lush green landscapes and the unique Apatani tribal culture, Ziro offers a tranquil and picturesque setting.`
            break;

        default:
            riderImg.src = './assets/home/bhutan.jpg'
    }

    const spotName = document.getElementById('spot-title');
    spotName.innerText = "Area :" + searchInputValue;
}

function first() {
    const viewImage = document.getElementById('view-img')
    const viewName = document.getElementById('view-name')

    viewImage.src = './assets/home/home-pposter-3.jpg'
    viewName.innerText = 'Bhur Ghat View 🤩'

}

function sec() {
    const viewImage = document.getElementById('view-img')
    const viewName = document.getElementById('view-name')

    viewImage.src = './assets/home/home-poster-4.jpg'
    viewName.innerText = 'Bhutan Best View 🤩'
}

function third() {
    const viewImage = document.getElementById('view-img')
    const viewName = document.getElementById('view-name')

    viewImage.src = './assets/home/home-poster-5.jpg'
    viewName.innerText = 'Darjeeling Best View spot 🤩'
}

function forth() {
    const viewImage = document.getElementById('view-img')
    const viewName = document.getElementById('view-name')

    viewImage.src = './assets/home/home-poster-6.jpg'
    viewName.innerText = 'Kerala Best View Spot 💖'
}

function fifth() {
    const viewImage = document.getElementById('view-img')
    const viewName = document.getElementById('view-name')

    viewImage.src = './assets/home/home-poster-7.jpg'
    viewName.innerText = 'Ladakh  View 🤩'
}

function sixth() {
    const viewImage = document.getElementById('view-img')
    const viewName = document.getElementById('view-name')

    viewImage.src = './assets/home/home-poster-8.jpg'
    viewName.innerText = 'Lonavala Best View 😍'
}

function seven() {
    const viewImage = document.getElementById('view-img')
    const viewName = document.getElementById('view-name')

    viewImage.src = './assets/home/home-poster-9.jpg'
    viewName.innerText = 'Spiti Valley best View 💖'
}

function eigth() {
    const viewImage = document.getElementById('view-img')
    const viewName = document.getElementById('view-name')

    viewImage.src = './assets/home/home-poster-10.jpeg'
    viewName.innerText = 'Western Arunchal Pradesh View 🤩'
}

function go() {
    const min = 0
    const max = 7

    const randomNumber = Math.round(Math.random() * (max - min) + min);
    console.log(randomNumber);

    const placeName = ['Bhor Ghat', 'Bhutan', 'Darjeeling to Sikkim', 'Kerala', 'Ladakh', 'Lonavala', 'Spiti Valley', 'Western Arunachal Pradesh']

    const randomName = document.getElementById('randomname')

    switch (randomNumber) {
        case 1:
            randomImg.src = './assets/home/bhor-ghat.jpg'
            randomName.innerText = ` ${placeName[0]} Awesome PLace 😍`

            break;

        case 2:
            randomImg.src = './assets/home/bhutan.jpg'
            randomName.innerText = ` ${placeName[1]} Nature incredible view  😍`
            break;

        case 3:
            randomImg.src = './assets/home/darjeeling-sikkim.jpg'
            randomName.innerText = ` ${placeName[2]} Snowing Mountains view ☃️❄️`
            break;

        case 4:
            randomImg.src = './assets/home/kerala-bike-trip.png'
            randomName.innerText = ` ${placeName[3]} Vibes are Amazing Nature and Lakes🌄`
            break;

        case 4:
            randomImg.src = './assets/home/ladakh.jpg'
            randomName.innerText = ` ${placeName[4]} mountain abonded Road specially of introvert and QuitPlace😁 `
            break;

        case 4:
            randomImg.src = './assets/home/lonavala.jpg'
            randomName.innerText = ` ${placeName[5]} Rainy Mounsoon View 😍`
            break;

        case 4:
            randomImg.src = './assets/home/spiti-valley.jpg'
            randomName.innerText = ` ${placeName[6]} Flower,s Garden and Awesome PLace 😍`
            break;

        case 4:
            randomImg.src = './assets/home/western-arunchal-pradesh.jpeg'
            randomName.innerText = ` ${placeName[7]} Snowing Mountains view ☃️❄️`
            break;
    }
}