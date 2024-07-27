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

function changeImg(num) {
    const mainImg = document.getElementById("mainImg")
    const buttonName = document.getElementById("product-link")


    if (num == 1) {
        mainImg.src = "./../assets/spiti-valley/full-set.webp"
        buttonName.innerHTML = '<a href="https://m.vffshop.top/products.aspx?cname=bike+riding+full+kit+price&cid=42&url=www.ilcascinone.com" class="img-name font-style" target="_blank" id="product-link">Full Set</a>'
    }
    else if (num == 2) {
        mainImg.src = "./../assets/spiti-valley/helmet.jpg"
        buttonName.innerHTML = '<a href="https://www.amazon.in/Steelbird-Certified-Motocross-Double-Helmet/dp/B0B77TC58M/ref=asc_df_B0B77TC58M/?tag=googleshopdes-21&linkCode=df0&hvadid=619450542151&hvpos=&hvnetw=g&hvrand=7051107289065676040&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9198250&hvtargid=pla-1748976179424&psc=1&mcid=9a710759b969367aaebff3e04c6433d0" class="img-name font-style" target="_blank" id="product-link">Helmet</a>'
    }
    else if (num ==3 ) {
        mainImg.src = "./../assets/spiti-valley/gloves.jpg"
        buttonName.innerHTML = '<a href="https://www.amazon.in/XTRIM-Protekt-Touchscreen-Compatible-Fingertips/dp/B0C1NZ46M8?ref_=Oct_d_otopr_d_5258042031_0&pd_rd_w=uonld&content-id=amzn1.sym.601891be-591c-4695-b226-dfc2707ab366&pf_rd_p=601891be-591c-4695-b226-dfc2707ab366&pf_rd_r=H0BZPN1X00PRH9P7TZ0P&pd_rd_wg=1Ovp2&pd_rd_r=1cc26ddc-a27d-4a5f-a918-63369e090f6b&pd_rd_i=B0C1NZ46M8&th=1" class="img-name font-style" target="_blank" id="product-link">Gloves</a>'
    }
    else if (num == 4) {
        mainImg.src = "./../assets/spiti-valley/jacket.webp"
        buttonName.innerHTML = '<a href="https://store.royalenfield.com/en/windfarer-v2-green-3xl-48-cm-green?utm_source=google&utm_medium=cpc&utm_campaign=&utm_agid=&utm_term=&gad_source=1&gclid=CjwKCAjw4_K0BhBsEiwAfVVZ_8Scw3Ok_hT3Rr8_Y3fvfxlKt_eJFdKv9J5nJ7nC7pT-hnARlmGJERoCwqoQAvD_BwE" class="img-name font-style" target="_blank" id="product-link">Jacket</a>'
    }
    else if (num == 5) {
        mainImg.src = "./../assets/spiti-valley/shoes.jpg"
        buttonName.innerHTML ='<a href="https://www.amazon.in/Axor-Slipstream-Riding-Boot-Black/dp/B0B2NXK5VC/ref=sr_1_11?dib=eyJ2IjoiMSJ9.dnO1FSbqeAtfh2BD_7SVWnPLasAHdja1GSeG7328MuQ0PLymFzmmj7MYOpJYp0a70_NjoIXmVDeYUY-gQgewm2JLPxC8RwcabYoH8Ug-xQs0rFS7_8TY1I7s9qWbHNgTrMOcaaeLvHrLljSHndkFwJ5ylUkGmAVuzi3ImhyQVewZiTCOKE4vQ7GhXk-xgz_2iZAWq_sxmCZM3N-YcKTD0pg29vi_65lnH0azW4iBi4yoKcQU5XYQCbh-zUuLXpsbrNtXfEB_Ps3ZWKqJ3Mklp2UrRCn6P9XfpWZ4-RSuGIc.AiNmbdkVVf9f47MgPVCo5RTICmozTcSWEKq1Av0E2QU&dib_tag=se&keywords=Riding+Boots&qid=1721590500&sr=8-11" class="img-name font-style" target="_blank" id="product-link">Boots</a>'
    }
}