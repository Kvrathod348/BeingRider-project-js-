function searchResult() {
    const inputOption = document.getElementById("input")

    const resultImg = document.getElementById("content1-img")

    const title = document.getElementById("heading1")

    const info = document.getElementById("para1")


    const option = inputOption.value

    switch (option) {
        case "Varkala to Kappil Beach":
            resultImg.src = './../assets/kerala-bike-trip/Kappil_Beach_hd.jpg'
            title.innerText = "Varkala to Kappil Beach"
            info.innerText = "Distance : 30km ,Best time for the Bike Ride :'Monsoons from June to March'.You can start at Alleppey beach and proceed to Kuttanad for a scenic bike ride near to backwaters. The land of farming and scenic beauty, Kuttanad is the lowest region in the Indian subcontinent and one of the most picturesque places to visit in Kerala. You can enjoy the real beauty of this place when you visit thereafter the monsoons while the farming is on i.e. from October to April."
            break
        case "Munnar to Annamalai":
            resultImg.src = './../assets/kerala-bike-trip/munnar-ann-hd.jpg'
            title.innerText = "Munnar to Annamalai"
            info.innerText = "Distance : 160 KM, Best time for the Bike Ride : Monsoons from June to FebruaryA drive from Munnar to Annamalai is one of the best bike trips in Kerala and the prettiest one, you will want to stop for photographs every few kilometers. The Annamalai tourist place is situated in the Western Ghats in the southern Indian states of Tamil Nadu and Kerala. Through the Munnar-Gundumalai-Marayoor-Annamalai route, you can ride and witness the most beautiful Shola Forests of South India."
             break
        case "Munnar Tea Plantations":
            resultImg.src = './../assets/kerala-bike-trip/Munnar-tree-pantation-hd.jpg'
            title.innerText = "Munnar Tea Plantations"
            info.innerText = "Distance : 120 KM, Best time for the Bike Ride : June to February Munnar is a place highlighted in every traveller’s diary to Kerala. A bike ride through Munnar is all about exploring the perfect blend of nature. Munnar is located at the district of Idukki which lies almost 1600 meters above the sea level. With tea plantations rising above both sides of the road and cascading down the mountains beyond, Munnar tea plantations provide for the best bike trips in Kerala."
            break
        case "Munnar to Marayoor":
            resultImg.src = './../assets/kerala-bike-trip/munnar-to-marayoor.gif'
            title.innerText = "Munnar to Marayoor"
            info.innerText = "Distance : 40 KM,Best time for the Bike Ride: Monsoons from June to September Located about 42 Kilometers from Munnar, Marayoor is a town in the Idukki district, and Udumalpet Rd through Munnar – Marayoor – Amravati dam- udumalapet from Munnar to Marayoor is one of the best places in Kerala for ride bikes. This road goes through dense forests as well as sandalwood forests just before Marayor. The place is famous for its Sandalwood forest and holds the record for being the only place in Kerala with natural Sandalwood forests."
            break
        case "Alleppey to Kuttanad":
            resultImg.src = './../assets/kerala-bike-trip/munnar-to-marayoor.gif'
            title.innerText = "Alleppey to Kuttanad"
            info.innerText = "Distance : 30 KM Best time for the Bike Ride : Monsoons from June to March You can start at Alleppey beach and proceed to Kuttanad for a scenic bike ride near to backwaters. The land of farming and scenic beauty, Kuttanad is the lowest region in the Indian subcontinent and one of the most picturesque places to visit in Kerala. You can enjoy the real beauty of this place when you visit thereafter the monsoons while the farming is on i.e. from October to April."
            break
    }
}
function changeImg(num) {
    const mainImg = document.getElementById("head-image")
    const buttonName = document.getElementById("head-product")
}

    