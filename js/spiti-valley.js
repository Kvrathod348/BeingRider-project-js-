function searchResult() {
    const inputOption = document.getElementById("input-option")

    const resultImg = document.getElementById("search-img")

    const title = document.getElementById("place-title")

    const info = document.getElementById("place-info")


    const option = inputOption.value

    switch (option) {
        case "Manali":
            resultImg.src = './../assets/spiti-valley/manali.jpg'
            title.innerText = "Manali"
            info.innerText = "Manali is a town, near Kullu town in Kullu district in the Indian state of Himachal Pradesh.[2] It is situated in the northern end of the Kullu Valley, formed by the Beas River. The town is located in the Kullu district, approximately 270 kilometres (170 mi) north of the state capital of Shimla and 544 kilometres (338 mi) northeast of the national capital of New Delhi."
            break

        case "Chandratal":
            resultImg.src = './../assets/spiti-valley/chandratal.webp'
            title.innerText = "Chandratal"
            info.innerText = "Chandra Taal is a lake in the upper Chandra valley of the Lahul and Spiti district of Himachal Pradesh, India.Chandra Taal is near the source of the Chandra River. Despite the rugged and inhospitable surroundings, it is in a protected niche with some flowers and wildlife in summer. It is a favourite spot for tourists and high-altitude trekkers. It is usually associated with Spiti, although geographically it lies in the watershed of the Chandra River of Lahaul. Kunzum La separates Lahaul and Spiti valleys."
            break

        case "Key Monastery":
            resultImg.src = './../assets/spiti-valley/key-monastery.jpg'
            title.innerText = "Key Monastery"
            info.innerText = "Overlooking Kaza from a height of about 13,500 ft, the Kye monastery is the largest in the valley and holds a powerful sway over the most populous part of the valley around Kaza. The gompa is an irregular heap of low rooms and narrow corridors on a monolithic conical hill. From a distance is resembles the Thiksey monastery near Leh in Ladakh. The irregular prayer chambers are interconnected by dark passages, tortuous staircases and small doors."
            break

        case "Mud village":
            resultImg.src = './../assets/spiti-valley/mud-village.jpg'
            title.innerText = "Mud village"
            info.innerText = "Mud (also known as Mudh and Muth) is a small village in the cold desert region of Spiti in Himachal Pradesh, India. Located at an altitude of 3,810 m (12,500 ft) on the left bank of the Pin River, a right bank tributary of the Spiti River, the village is nestled at the base of the Parbati range that towers almost vertically 1,600 m (5,200 ft) above. Mud is near the boundary of the Pin Valley National Park and is a convenient base for treks in the park, and to the neighbouring districts of Kullu and Kinnaur. It is the last village on the Spiti side of the Pin Parbati trek to Kullu and the Pin Bhaba trek to Kinnaur."
            break

        case "Shimla":
            resultImg.src = "./../assets/spiti-valley/simla.jpg"
            title.innerText = "Shimla"
            info.innerText = "Shimla  also known as Simla, the official name until 1972)[10] is the capital and the largest city of the northern Indian state of Himachal Pradesh. In 1864, Shimla was declared as the summer capital of British India. After independence, the city became the capital of East Punjab and was later made the capital city of Himachal Pradesh. It is the principal commercial, cultural and educational centre of the state."
    }
} 