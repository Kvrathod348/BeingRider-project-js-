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

    if (num == 1) {
        mainImg.src = "./../assets/kerala-bike-trip/full-set.webp"
        buttonName.innerHTML = '<a href="https://m.vffshop.top/products.aspx?cname=bike+riding+full+kit+price&cid=42&url=www.ilcascinone.com" class="img-name font-style" target="_blank" id="product-link">Full Set</a>'
        
    }
    else if (num == 2) {
        mainImg.src = "./../assets/kerala-bike-trip/helmet.webp"
        buttonName.innerHTML = '<a href="https://www.amazon.in/Steelbird-SBH-17-Terminator-Graphic-Helmet/dp/B089HWNSX7/ref=sr_1_14?crid=219YVI807VG2B&dib=eyJ2IjoiMSJ9.FC6-tPzeohQHZRrY44L4LrP6KGQ5EvyYgBQI65P5p1HQDKnm1pZsf17CMj0YWVo3JmPqtE02-S4ABg5AvEdkOvtdzDDaouzukFl-VZCDblUSLg-1zLrLKu-kqoTdfMkN-_2FMNoxpP-dbCFlP06XLr58iX75_ziHQvPRRLQNoOKW8C_rLlOZa1GIq9g9F5BQ8wvOuflH-MkPi6IigBJtz5Z_U47TwjdvbufsNDnai1fDlocDi-1-RkwnnUKCuik1T_W5-YWRY9oO-Exp_Xq2bJ-dsA_LZaqgxOxR5h8CLcQ.pxhR1EoDt73ELhLEgtdgm1JLfGYveeVU0GukYkZ1TPA&dib_tag=se&keywords=bike+riders+helmet&qid=1722082560&sprefix=bike+riders+helme%2Caps%2C488&sr=8-14">Helmet</a>'
    }
    else if (num ==3 ) {
        mainImg.src = "./../assets/kerala-bike-trip/jacket.webp"
        buttonName.innerHTML = '<a https://www.amazon.in/Rynox-Tornado-Pro-Jacket-Motorcycle/dp/B0D6Z4X3B4/ref=sr_1_3?dib=eyJ2IjoiMSJ9.QlAYLgZH9pisnFXPr-j6CWKU8pnEBK6g2qbQz3VMaE8akWmx4YV3wSfx3M3RNAL31WtPYQhDRQqJb7EiSkOcVVlL_b4izBDugKjEccqik7C3ni9ZT8bLSRMNljRZlgvROBU-vUAoT-2_c29cw-eOPV2a4TIRXG6W2jftTOl8QAuYslt4kEu3k_57L-AyNxrc4SNSsUy6jXLV4oFveqFsci_Uc0ACcir76MI_i6NOrf_5B6hTflA9MqyqcmD9V6v2lNwN9y4yQ9pE-lLjJivO9Qi6pjxQwxH_BMTG2Jo9ulA.-lealm8rWTaozIaTmAgAKpL209ZlHujJSiO_amC5PHQ&dib_tag=se&qid=1722083117&refinements=p_n_size_two_browse-vebin%3A1975326031&s=automotive&sr=1-3&th=1">jacket</a>'
    }
    else if (num == 4) {
        mainImg.src = "./../assets/kerala-bike-trip/shoes.jpg"
        buttonName.innerHTML = '<a href="https://www.fc-moto.de/epages/fcm.sf/?channable=0209916964003132363135363035323678&ObjectPath=/Shops/10207048/Products/Bogotto-Cartagena-perf-Motorcycle-Boots/SubProducts/Bogotto-Cartagena-perf-Motorcycle-Boots-0016&Locale=en_IN&gad_source=1&gclid=Cj0KCQjwtZK1BhDuARIsAAy2VzsysZgaVm_Fc3PS3EsAeIHywlYKF9btUqF2-w7TKr53M_Boj_nYK00aAoHgEALw_wcB>shoes</a>'
    }
    else if (num == 5) {
        mainImg.src = "./../assets/kerala-bike-trip/glaves.webp"
        buttonName.innerHTML =  '<a href="https://www.amazon.in/XTRIM-Protekt-Touchscreen-Compatible-Fingertips/dp/B0C1P1HQNS/ref=sxin_16_pa_sp_search_thematic_sspa?content-id=amzn1.sym.85e046b2-1010-4183-b7b7-f25119863240%3Aamzn1.sym.85e046b2-1010-4183-b7b7-f25119863240&crid=1HFGNLVODUTTD&cv_ct_cx=riding+gloves+for+bikers&dib=eyJ2IjoiMSJ9.5QgMD3VQkR-hiD3Ht_ia6jy5pYfYn0NKjxAhCe4PXih0nsgU9Sw81G0c2iRKzG_OWSR2wxDkWL640tYJbtqz-g.P5v5tHYsCXnietk8ongdKvUBM-PNHSGn97BdpUTIEkE&dib_tag=se&keywords=riding+gloves+for+bikers&pd_rd_i=B0C1P1HQNS&pd_rd_r=a078ea0a-f685-41ce-b941-e4d40a2daaa3&pd_rd_w=xUctM&pd_rd_wg=g8ZOj&pf_rd_p=85e046b2-1010-4183-b7b7-f25119863240&pf_rd_r=DC8KHJBQX875RSSBH7R0&qid=1722232745&s=automotive&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=glaves+%2Cautomotive%2C317&sr=1-2-ced4eeeb-b190-41d6-902a-1ecb3fb8b7c4-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9zZWFyY2hfdGhlbWF0aWM&psc=1>glaves</a>'
}