function search(){
const inputOption = document.getElementById("input")
const outputOption =inputOption.value 

const imageOption = document.getElementById("spot-img")
const titleOption = document.getElementById("place-title")
const paragraphOption = document.getElementById("info")

switch(outputOption) {

    case "Choose the Place" :
        imageOption.src = "./../assets/Home/bhor-ghat.jpg"
        titleOption.innerText= "Bhor-Ghat"
        paragraphOption.innerText="The discovery of a route to make a motorable pass in Bhor Ghat came after information was provided by a local Dhangar tribesman called Shigroba. Later, the Great Indian Peninsula Railway laid a railway line from Mumbai to Pune. The section through Bhor Ghat with 28 tunnels, and old bridges was opened in 1863. The Ghat opened Mumbai to the Deccan plains of Peninsular India."
break

   case "Rajgad Fort" :
    imageOption.src = "./../assets/bhor-ghat/Rajgad_Fort.jpg"
    titleOption.innerText= "Rajgad Fort"
    paragraphOption.innerText="Rajgad is a Hill region fort situated in the Pune district of Maharashtra, India. Formerly known as Murumbdev, the fort was the first capital of the Maratha Empire under the rule of Chhatrapati Shivaji for almost 26 years, after which the capital was moved to the Raigad Fort."
  break

case "Menwali ghat" :
    imageOption.src = "./../assets/bhor-ghat/menwalighat.jpg"
    titleOption.innerText= "Menwali ghat"
    paragraphOption.innerText="Menwali is a village about three kilometres from Wai in the Satara district. The village's claim to fame is due to the palace (wada) built by Nana Fadnavis, 18th century Maratha statesman and the regent of Peshwa Madhavrao II."
  break
  case "Purandar Fort" :
    imageOption.src = "./../assets/bhor-ghat/purandar.jpg"
    titleOption.innerText= "Purandar Fort"
    paragraphOption.innerText="Purandar Fort is a mountain fort in Pune district in Western Indian state of Maharashtra, India. The fort stands at 1,374 metres above the sea level in the Western Ghats, 50 kilometres to the southeast of Pune."
  break
  case "Suvela Machi" :
    imageOption.src = "./../assets/bhor-ghat/suvela machi.jpg"
    titleOption.innerText= "suvela machi"
    paragraphOption.innerText="In summary, and a detailed blog should follow, we left Pune around 0730 and drove towards the Rajgadh base village – Gunjavane. Climbed Rajgadh and visited the various points on the fort (and there are quite a few to see, especially the Suvela Machi and Bale Killa, historic gates (darwaja) to the fort, besides some temples and cisterns, enough to take about half a day). There is also Sanjeevani Machi but since we were going to encounter it anyways on our way to Torna, we did not visit it on the first day.."
  break

}

}
