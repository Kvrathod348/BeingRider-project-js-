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
            riderImg.src = './assets/home/Bhutan.jpg'
            riderInfo.innerHTML = `Bhutan offers a range of scenic bike tours, allowing enthusiasts to explore its natural beauty and cultural heritage. <br>
             Tours vary from leisurely rides to more adventurous expeditions, catering to different interests and fitness levels <br>
             [1]. Some tours are thoughtfully crafted to include e-bike options for easier exploration <br/>
             [2] Packages are available from nearby countries like India, making it accessible for international visitors <br/> [3 and 4].
             Discounts are sometimes offered on booking, enhancing the appeal for adventure seekers <br/>.
             Specialized tours, like the Thunder Dragon Bike Tour, focus on exploring Bhutan's unique landscapes and cultural sites` 
             break;
         
        case "Darjeeling to Sikkim":
            riderImg,src='./assets/home/Darjeeling to Sikkim.jpg'
            riderInfo.innerHTML = `A bike tour from Darjeeling to Sikkim offers breathtaking views of the Himalayan landscape, rich cultural experiences, and unique natural beauty. Key highlights of the tour include:
1. Mt. Kanchenjunga: The third highest mountain in the world, offering stunning scenic views throughout the journey [[3](https://www.universaladventures.in/products/9-days-sikkim-darjeeling-bike-trip)].
2. Tea Gardens: Rolling hills covered with lush tea gardens in Darjeeling, creating a picturesque backdrop [[1](https://www.trekkinginsikkims.com/tours/sikkim-darjeeling-bike-trip-)].
3. River Valleys and Waterfalls: Numerous waterfalls and river valleys along the way, adding to the tour's natural beauty [[5](https://www.stoneheadbikes.com/blog/8-days-bike-trip-to-sikkim/)].
4. High-altitude Lakes: In Sikkim, high-altitude lakes such as Tsomgo Lake provide serene and stunning views [[2](https://backpackclan.com/trip/bike-tour-to-sikkim/)].
5. Flora and Fauna: Diverse flora and fauna, especially in the meadows and forested areas of Sikkim, making the ride visually enriching [[3](https://www.universaladventures.in/products/9-days-sikkim-darjeeling-bike-trip)].`

    } 

    const spotName = document.getElementById('spot-title');
    spotName.innerText="Area :" +searchInputValue;
}