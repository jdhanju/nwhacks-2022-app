

function getBase64(imageURL, callback){
    var imageString = '';
    let xhr = new XMLHttpRequest();
    xhr.onload = function() {
        let reader = new FileReader();
        reader.onloadend = function() {
            callback(reader.result);
          }
        reader.readAsDataURL(xhr.response);
    };
    xhr.open('GET', imageURL);
    xhr.responseType = 'blob';
    xhr.send();

    return imageString;
}

export default function postImage(imageURL){
    console.log(imageURL);

    getBase64(imageURL, function(dataUrl) {
        console.log('RESULT:', dataUrl)
    })

}