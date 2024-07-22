function changeImg(num) {
    const mainImg = document.getElementById("main-img")
    const accLink = document.getElementById("acc-link")

    if (num == 1) {
        mainImg.src = "./../assets/lonavala/tvs,png.webp"
        accLink.innerHTML = '<a href="https://www.flipkart.com/fox-1-bike-riding-kit-knee-aviatorridingglasses-armor-jacket-l-40-combo/p/itmeanaya7sstzha" class="img-name font-style" target="_blank" id="acc-link">Full Set</a>'
    }
    else if (num == 2) {
        mainImg.src = "./../assets/lonavala/helmate.png"
        accLink.innerHTML = '<a href="https://www.flipkart.com/steelbird-off-road-gt-isi-certified-motocross-helmet-men-inner-sun-shield-motorbike/p/itm4ab21e0a19400?pid=HLMGHPZYVGPJA5JW&lid=LSTHLMGHPZYVGPJA5JWKTONVJ&marketplace=FLIPKART&q=helmate&store=1mt%2Fztf%2Fiv8&srno=s_1_11&otracker=search&otracker1=search&fm=organic&iid=en_F9bKrqpQNLHWFZHGkNbRa79cPsdXc31Ev9iNCZVnR0du0HA19dmfneIpKJNssDhB52u1v7-PVPFogEEYbbU-0g%3D%3D&ppt=pp&ppn=pp&ssid=b10z2zp1400000001721638661353&qH=22873e4c9f8f0db9" class="img-name font-style" target="_blank" id="acc-link">Helmet</a>'
    }
    else if ( num== 3){
         mainImg.src = "./../assets/lonavala/jacket.png"
        accLink.innerHTML = '<a href="https://www.moglix.com/allextreme-turbo-polyester-red-bike-riding-jacket-size-2xl/mp/msng9vnqlwm6kp-g" class="img-name font-style" target="_blank" id="acc-link">jacket</a>'

    }
    else if ( num== 4){
        mainImg.src = "./../assets/lonavala/gloves.png"
       accLink.innerHTML = '<a href="https://www.flipkart.com/zaysoo-bike-riding-cycling-sports-gloves-men-women-riding/p/itma40d213359dff?pid=SGEHFBG3CYDHKD9G&lid=LSTSGEHFBG3CYDHKD9GXVHATM&marketplace=FLIPKART&q=gloves+for+bike+riding&store=1mt%2Fztf%2Ftbi%2F9tm&srno=s_1_22&otracker=AS_QueryStore_OrganicAutoSuggest_1_16_na_na_na&otracker1=AS_QueryStore_OrganicAutoSuggest_1_16_na_na_na&fm=organic&iid=20203774-859e-4a13-ae05-3e2f7bfa273e.SGEHFBG3CYDHKD9G.SEARCH&ppt=pp&ppn=pp&ssid=wh862vdqy80000001721639274319&qH=72efdc366632609d" class="img-name font-style" target="_blank" id="acc-link">gloves</a>'

   }
   else if ( num== 5){
    mainImg.src = "./../assets/lonavala/shoes.png"
   accLink.innerHTML = '<a href="https://www.customelements.in/product/forma-freccia-black-yellow-riding-boots/" class="img-name font-style" target="_blank" id="acc-link">shoes</a>'

}
}
