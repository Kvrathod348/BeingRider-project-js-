function search() {
    const searchInput = document.getElementById('input')
    const searchInputValue = searchInput.value;
    const riderImg = document.getElementById('riderimg')
    const riderInfo = document.getElementById('info')

    switch (searchInputValue) {
        case "Bhor Ghat":
            riderImg.src = './assets/home/bhor-ghat.jpg'
            riderInfo.innerHTML = `Bhor Ghat is a mountain pass in Maharashtra, India that connects Mumbai to Pune. <br />The area is known for its natural beauty, including valleys, meadows, and scenic spots.<br /> The road route between Khopoli and Khandala is 18 km long and has six lanes on the Mumbai–Pune express highway and four lanes on the old Mumbai–Pune road. <br />The railway route between Palsdari and Khandala includes 28 tunnels, which can make for a spooky train ride.`
            console.log("image")
            break;

        case "Bhutan Bike Tours":
            riderImg.src = './assets/home/bhutan.jpg'
            riderInfo.innerHTML = `Bhutan offers a range of scenic bike tours, allowing enthusiasts to explore its natural beauty and cultural heritage. <br>
             Tours vary from leisurely rides to more adventurous expeditions, catering to different interests and fitness levels <br>
             [1]. Some tours are thoughtfully crafted to include e-bike options for easier exploration <br/>
             [2] Packages are available from nearby countries like India, making it accessible for international visitors <br/> [3 and 4].
             Discounts are sometimes offered on booking, enhancing the appeal for adventure seekers <br/>.
             Specialized tours, like the Thunder Dragon Bike Tour, focus on exploring Bhutan's unique landscapes and cultural sites`
            break;

        case "Darjeeling to Sikkim":
            riderImg.src = './assets/home/darjeeling-sikkim.jpg'
            riderInfo.innerHTML = `A bike tour from Darjeeling to Sikkim offers breathtaking views of the Himalayan landscape, rich cultural experiences, and unique natural beauty. <br> Key highlights of the tour include:
1. Mt. Kanchenjunga: The third highest mountain in the world, offering stunning scenic views throughout the journey.<br>
2. Tea Gardens: Rolling hills covered with lush tea gardens in Darjeeling, creating a picturesque backdrop.<br>
3. River Valleys and Waterfalls: Numerous waterfalls and river valleys along the way, adding to the tour's natural beauty.<br>
4. High-altitude Lakes: In Sikkim, high-altitude lakes such as Tsomgo Lake provide serene and stunning views.<br>
5. Flora and Fauna: Diverse flora and fauna, especially in the meadows and forested areas of Sikkim, making the ride visually enriching.`
            break;

        case "Kerala Bike Trip":
            riderImg.src = './assets/home/kerala-bike-trip.png'
            riderInfo.innerHTML = `Munnar: Known for its tea plantations, rolling hills, and scenic views. The ride through the winding roads offers a refreshing experience.<br>
Alleppey: Famous for its backwaters, you can enjoy serene views of the waterways, lush green paddy fields, and traditional houseboats.<br>
Wayanad: This region is rich in biodiversity, with dense forests, waterfalls, and wildlife sanctuaries. The climb to places like Chembra Peak provides panoramic views.<br>
Thekkady: Located near the Periyar Wildlife Sanctuary, this area is perfect for spotting wildlife amidst beautiful natural settings.<br>
Varkala: Known for its cliffs adjacent to the Arabian Sea, it provides stunning coastal views.`
            break;

        case "Ladakh":
            riderImg.src = './assets/home/ladakh.jpg'
            riderInfo.innerHTML = `Ladakh is a popular destination for bike tours, offering a unique
    blend of natural beauty, cultural experiences, and adventure. <br>
    Some key highlights of a bike tour in Ladakh include:<br>
    1. High-altitude passes: The region is home to several high-altitude passes,
    such as Khardung La, which offer breathtaking views of the surrounding
    mountains and valleys.<br>
    2. Monasteries: Ladakh is home to numerous monasteries, which offer
    insights into the region's rich cultural heritage and spiritual traditions.<br>
    3. Wildlife: The region is home to a diverse range of wildlife, including
    snow leopards, blue sheep, and Himalayan ibex, making it a popular destination
    for wildlife enthusiasts.<br>
    4. Scenic landscapes: The region is known for its stunning landscapes,
    including vast deserts, snow-capped mountains, and crystal-clear lakes.<br>
    5. Adventure activities: Ladakh offers a range of adventure activities,
    such as trekking, mountain biking, and river rafting, making it a popular
    destination for adventure seekers.`
            break;

        case "Lonavala":
            riderImg.src = './assets/home/lonavala.jpg'
            riderInfo.innerHTML = `Lonavala is a popular destination for bike tours in India, offering
        a range of scenic landscapes, cultural experiences, and adventure activities.
        Some key highlights of a bike tour in Lonavala include:<br>
         Scenic landscapes: The region is known for its rolling hills, lush green
        forests, and waterfalls, making it a popular destination for nature lovers.
        <ul>
        <li>Historical sites: The region is home to several historical sites, such as
        the Bhaja Caves and the Karla Caves, which offer insights into the region's
        rich cultural heritage</li>
        <li> Adventure activities: Lonavala offers a range of adventure activities,
        such as trekking, rock climbing, and rappelling, making it a popular destination
        for adventure seekers.</li>
        <li>Wildlife: The region is home to a diverse range of wildlife, including
        leopards, langurs, and peacocks, making it a popular destination for wildlife
        enthusiasts.</li>
        <li>
         Cultural experiences: The region is home to several cultural experiences,
        such as the Khandala Fair, which offers a glimpse into the region's traditional
        customs and practices.</li>
        
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