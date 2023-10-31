function startClassification()
{
  navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/kA4F-80yW/model.json', modelReady);
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
  
      document.getElementById("result_label").innerHTML = 'I can hear - '+ results[0].label;
      document.getElementById("result_confidence").innerHTML = 'Accuracy - '+ (results[0].confidence*100).toFixed(2)+" %";
      document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
      document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
  
      img = document.getElementById('alien1') 
      img1 = document.getElementById('alien2')
      img2 = document.getElementById('alien3')
      img3 = document.getElementById('alien4')
  
      if (results[0].label == "dog") {
        img.src = 'cat.jpg';
        img1.src = 'tenor(2).gif';
        img2.src = 'photo-1614027164847-1b28cfe1df60.avif';
      } else if (results[0].label == "cat") {
        img.src = 'tenor(1).gif';
        img1.src = 'dog.wedp';
        img2.src = 'photo-1614027164847-1b28cfe1df60.avif';
      } else if (results[0].label == "lion") {
        img.src = 'cat.jpg';
        img1.src = 'dog.wedp';
        img2.src = 'tenor.gif';
      }else{
        img.src = 'cat.jpg';
        img1.src = 'dog.wedp';
        img2.src = 'photo-1614027164847-1b28cfe1df60.avif';
      }
    }
  }
  