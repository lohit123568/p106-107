function startClassification(){
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/M1rbSq4bV/json',modelReady);
}
function modelReady() {
    classifier.classify(gotResults);
}
function gotResults(error, results){
    if (error) {
        console.error(error);
    }
    else{
       console.log(results);
       random_number_r = Math.floor(Math.random() * 255) + 1; 
       random_number_g = Math.floor(Math.random() * 255) + 1; 
       random_number_b = Math.floor(Math.random() * 255) + 1;
       document.getElementById("result_label").innerHTML = "I CAN HEAR - "+
results[0].label;
document.getElementById("result_confidence").innerHTML = "ACCURACY - "+
(results[0].confidence*100).toFixed(2)+" %";
document.getElementById("result_label").style.color = "rgb("
+random_number_r+","+random_number_g+","+random_number_b+")";
document.getElementById("result_confidence").style.color = "rgb("
+random_number_r+","+random_number_g+","+random_number_b+")";
img = document.getElementById('d.jpg');
img0 = document.getElementById('h.jpg');
img1 = document.getElementById('tj.webp');
img2 = document.getElementById('f.jpg');

if (results[0].label == "BARKIND") {
    img.src = 'd.jpg';
} else if (results[0].label == "MEOWING") {
    img.src = 'h.jpg';
} else if (results[0].label == "ROARING") {
    img.src = 'tj.webp';
} else if (results[0].label == "MOOING") {
    img.src = 'f.jpg';
}}}