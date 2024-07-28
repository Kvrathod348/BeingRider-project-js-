function search() {
    const searchInput = document.getElementById('input')
    const searchInputValue = searchInput.value;
    const placeImg = document.getElementById('placeimg')
    const placeInfo = document.getElementById('info')
    const placeName = document.getElementById('spot-title')




    switch (searchInputValue) {
        case "Kitchudumra Biodiversity Park":
            placeImg.src = '../assets/darjeeling-to-sikkim/place/KITCHUDUMRA BIODIVERSITY PARK.jpg'
            placeInfo.innerHTML = " composed of concentric circles representing nature s five elements – Earth, Air, Water, Fire and Ether.The circular pathway of black granite is engraved with names of different species. The fire ring is depicted by red granite and yellow limestone. The lower ether ring displays a world map with blue ocean waters. At the top of the pylon stands a double helix representin"
            placeName.innerHTML = "Kitchudumra Biodiversity Park"
            break;
        case "Samsing":
            placeImg.src = '../assets/darjeeling-to-sikkim/place/samsing.jpg'
            placeInfo.innerHTML = 'Samsing is a small hill village and tourist spot in the Matiali (community development block), Malbazar subdivision of Jalpaiguri district of West Bengal situated at an elevation of 3000 ft in the foothills in between Jalpaiguri and Darjeeling districts border.'
            placeName.innerHTML = "Samsing"
            break;
        case "Singla Tea Garden":
            placeImg.src = '../assets/darjeeling-to-sikkim/place/Singla Tea Garden.jpg'
            placeInfo.innerHTML = 'Places and tea estates in the north-western portion of Darjeeling Sadar subdivision (including Darjeeling Pulbazar CD block) in Darjeeling district CT: census town, R: rural/ urban centre, N: neighbourhood, H: hill centre, NP: national wildlife sanctuary, TE: tea estate, TA: tourist attraction Abbreviations used in names – TG for Tea Garden'
            placeName.innerHTML = "Singla Tea Garden"
            break;
        case "Tukvar Tea Garden":
            placeImg.src = '../assets/darjeeling-to-sikkim/place/tukvar-tea-garden.jpg'
            placeInfo.innerHTML = 'Darjeeling Himalayan hill region. Kangchenjunga, which rises with an elevation of 8,586 metres (28,169 ft) is located further north of the area shown.[1] Sandakphu, rising to a height of 3,665 metres'
            placeName.innerHTML = "Tukvar Tea Garden"
            break;
    }

}
