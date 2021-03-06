import sendSocketMessage from './socket'

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

export default function postImage(imageURL, setloader, roomId, toggle){
    console.log(roomId)
    const socketServerUrl = "https://revisionsocketserver.herokuapp.com/";

    getBase64(imageURL, function(dataUrl) {
        // console.log('RESULT:', dataUrl)
        let imageInBase64 = dataUrl.substring(dataUrl.indexOf(',') + 1);

        //build JSON
        let serverData = {
            "code": toggle === true? "code" : false,
            "image" : imageInBase64,
            "ext": "png"
        }

        //make post call to server
        let xhr = new XMLHttpRequest();
        xhr.open("POST", "https://text-recognition-api-v2.herokuapp.com/api/annotate", true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.onload = function() {
            let data = JSON.parse(this.responseText);
            console.log(data);
            //setting the loading wheel state to false
            //** */
            sendSocketMessage(roomId, socketServerUrl, data.text)

            setloader(false);
        }

        xhr.send(JSON.stringify(serverData));

    })

    //wait 500 milliseconds before printing data
    //const myTimeout = setTimeout(() => console.log(imageInBase64), 500);


}