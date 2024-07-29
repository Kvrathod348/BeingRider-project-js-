function searchResult() {
    const inputOption = document.getElementById("input-option")

    const resultImg = document.getElementById("search-img")

    const title = document.getElementById("place-title")

    const info = document.getElementById("place-info")


    const option = inputOption.value
    switch (option) {
        case "Punakha":
            resultImg.src = 'C:\Users\19sak\Desktop\BeingRider-project-js-\js\bhutan-bike-tours.js'
            title.innerText = "Punakha"
            info.innerText = "Punakha valley is famous in Bhutan for rice farming. Both red and white rice are grown along the river valley of Pho and Mo Chu, two of the most prominent rivers in Bhutan. Ritsha (meaning at the base of a hill) is a typical village in Punakha. The village houses are made of pounded mud with stone foundations."
            break

            case "Paro":
                resultImg.src = 'C:\Users\19sak\Desktop\BeingRider-project-js-\assets\bhutan-bike-tours\paro.png'
                title.innerText = "Paro"
                info.innerText = "Recognised as one of the most fertile as well as historic valleys of Bhutan, it is home to as many as 155 temples and monasteries dating back to the 14th century and also Bhutan's sole international airport."
                break

                case "Chele la":
                    resultImg.src = 'C:\Users\19sak\Desktop\BeingRider-project-js-\assets\bhutan-bike-tours\chele.png'
                    title.innerText = "Chele la"
                    info.innerText = "The notable things to do during your Chelela Pass Tour are hiking, bird watching, exploring Paro and more. Q. What is the distance between Thimphu and Chelela Pass? The approximate distance between these two places is around 78 km."
                    break

                    case "Chimi Lhakhang":
                        resultImg.src = 'C:\Users\19sak\Desktop\BeingRider-project-js-\assets\bhutan-bike-tours\chimi.png'
                        title.innerText = "Chimi Lhakhang"
                        info.innerText = "Mud (also known as Mudh and Muth) is a small village in the cold desert region of Spiti in Himachal Pradesh, India. Located at an altitude of 3,810 m (12,500 ft) on the left bank of the Pin River, a right bank tributary of the Spiti River, the village is nestled at the base of the Parbati range that towers almost vertically 1,600 m (5,200 ft) above. Mud is near the boundary of the Pin Valley National Park and is a convenient base for treks in the park, and to the neighbouring districts of Kullu and Kinnaur. It is the last village on the Spiti side of the Pin Parbati trek to Kullu and the Pin Bhaba trek to Kinnaur."
                        break

                        case "Trongsa":
                            resultImg.src = 'C:\Users\19sak\Desktop\BeingRider-project-js-\assets\bhutan-bike-tours\trongsa.png'
                            title.innerText = "Trongsa"
                            info.innerText = "Trongsa provides a strategic central location to control Bhutan and for centuries it was the seat of the Wangchuck dynasty of penlops (governors) who effectively ruled over much of eastern and central Bhutan, and from 1907 have been Kings of Bhutan."
                            break

                        }
                    }
                    
                    function changeImg(num) {
                        const mainImg = document.getElementById("mainImg")
                        const buttonName = document.getElementById("product-link")
                    
                        if (num == 1) {
                            mainImg.src = "./../assets/bhutan-bike-tours/full-set.png"
                            buttonName.innerHTML = '<a href="https://m.vffshop.top/products.aspx?cname=bike+riding+full+kit+price&cid=42&url=www.ilcascinone.com" class="img-name font-style" target="_blank" id="product-link">Full Set</a>'
                        }
                        else if (num == 2) {
                            mainImg.src = "./../assets/bhutan-bike-tours/helmet.png"
                            buttonName.innerHTML = '<a href="https://www.amazon.in/Steelbird-Certified-Motocross-Double-Helmet/dp/B0B77TC58M/ref=asc_df_B0B77TC58M/?tag=googleshopdes-21&linkCode=df0&hvadid=619450542151&hvpos=&hvnetw=g&hvrand=7051107289065676040&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9198250&hvtargid=pla-1748976179424&psc=1&mcid=9a710759b969367aaebff3e04c6433d0" class="img-name font-style" target="_blank" id="product-link">Helmet</a>'
                        }
                        else if (num ==3 ) {
                            mainImg.src = "./../assets/bhutan-bike-tours/glowes.png"
                            buttonName.innerHTML = '<a href="https://www.amazon.in/XTRIM-Protekt-Touchscreen-Compatible-Fingertips/dp/B0C1NZ46M8?ref_=Oct_d_otopr_d_5258042031_0&pd_rd_w=uonld&content-id=amzn1.sym.601891be-591c-4695-b226-dfc2707ab366&pf_rd_p=601891be-591c-4695-b226-dfc2707ab366&pf_rd_r=H0BZPN1X00PRH9P7TZ0P&pd_rd_wg=1Ovp2&pd_rd_r=1cc26ddc-a27d-4a5f-a918-63369e090f6b&pd_rd_i=B0C1NZ46M8&th=1" class="img-name font-style" target="_blank" id="product-link">Gloves</a>'
                        }
                        else if (num == 4) {
                            mainImg.src = "./../assets/bhutan-bike-tours/jacket.png"
                            buttonName.innerHTML = '<a href="https://store.royalenfield.com/en/windfarer-v2-green-3xl-48-cm-green?utm_source=google&utm_medium=cpc&utm_campaign=&utm_agid=&utm_term=&gad_source=1&gclid=CjwKCAjw4_K0BhBsEiwAfVVZ_8Scw3Ok_hT3Rr8_Y3fvfxlKt_eJFdKv9J5nJ7nC7pT-hnARlmGJERoCwqoQAvD_BwE" class="img-name font-style" target="_blank" id="product-link">Jacket</a>'
                        }
                        else if (num == 5) {
                            mainImg.src = "./../assets/bhutan-bike-tours/shoes.png"
                            buttonName.innerHTML =  '<a href="https://www.amazon.in/Axor-Slipstream-Riding-Boot-Black/dp/B0B2NXK5VC/ref=sr_1_11?dib=eyJ2IjoiMSJ9.dnO1FSbqeAtfh2BD_7SVWnPLasAHdja1GSeG7328MuQ0PLymFzmmj7MYOpJYp0a70_NjoIXmVDeYUY-gQgewm2JLPxC8RwcabYoH8Ug-xQs0rFS7_8TY1I7s9qWbHNgTrMOcaaeLvHrLljSHndkFwJ5ylUkGmAVuzi3ImhyQVewZiTCOKE4vQ7GhXk-xgz_2iZAWq_sxmCZM3N-YcKTD0pg29vi_65lnH0azW4iBi4yoKcQU5XYQCbh-zUuLXpsbrNtXfEB_Ps3ZWKqJ3Mklp2UrRCn6P9XfpWZ4-RSuGIc.AiNmbdkVVf9f47MgPVCo5RTICmozTcSWEKq1Av0E2QU&dib_tag=se&keywords=Riding+Boots&qid=1721590500&sr=8-11" class="img-name font-style" target="_blank" id="product-link">Boots</a>'
                        }
                    }