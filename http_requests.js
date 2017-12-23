function httpGet(json, success){
    var http = new XMLHttpRequest();
    var url = `http://localhost:3000/hey/${json}`;
    //var params = 'username=ederL22&password=1234';

    http.open('GET', url, true);

    //http.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    http.onreadystatechange = () => {
        if(http.readyState === 4 && http.status === 200){
            success(http.response);
        }
    }

    http.send();
}

var jsons = ['tweets', 'friends', 'videos'];

function getJson(n = 0){
    httpGet(jsons[n], function(res){
        console.log(res);
        if(n < jsons.length-1) getJson(++n);
    });
}

getJson();