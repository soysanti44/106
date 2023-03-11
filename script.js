function startClassification()
{
  navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/3ZiMV0MUb/model.json', modelReady);
}


function modelReady(){
  classifier.classify( gotResults);
}


function gotResults(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
    random_number_r = Math.floor(Math.random() * 255) + 1;
    random_number_g = Math.floor(Math.random() * 255) + 1;
    random_number_b = Math.floor(Math.random() * 255) + 1;


    document.getElementById("result_label").innerHTML = 'Escucho - '+ results[0].label;
    document.getElementById("result_confidence").innerHTML = 'Precisión - '+ (results[0].confidence*100).toFixed(2)+" %";
    document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
    document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";


    img = document.getElementById('alien1')
    img1 = document.getElementById('alien2')
    img2 = document.getElementById('alien3')
    img3 = document.getElementById('alien4')


    perro= 'blueheeler.jpg';
    perro_gif="blueheeler gif.gif";
    gato= "gato.png";
    gato_gif ="gato gif.gif"
    vaca="baca.png"
    vaca_gif="vaca gif.gif"
    pato="pato.png"
    pato_gif="pato gif.gif"


    if (results[0].label == "pato") {
      img.src =vaca;
      img1.src =perro;
      img2.src =gato;
      img3.src =pato_gif;
     
    } else if (results[0].label == "gato") {
        img.src =vaca;
        img1.src =perro;
        img2.src =gato_gif;
        img3.src =pato;
    } 
    else if (results[0].label == "perro") {
        img.src =vaca;
        img1.src =perro_gif;
        img2.src =gato;
        img3.src =pato;
    } else {
        img.src =vaca_gif;
        img1.src =perro;
        img2.src =gato;
        img3.src =pato;
    }
  }
}
