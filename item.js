function postItem() {
    let item = document.getElementById('item').value;
    httpPost(item, (res) => {
        document.getElementById('item').value = '';
        getItems();
    });
}

function getItems() {
    httpGet((res) => {
        document.getElementById('list').innerHTML = '';
        for (let i = 0; i < res.length; i++) {
            let element = res[i];
            document.getElementById('list').innerHTML += `<p onclick=deleteItem(this.getAttribute('itemId')) itemId="${element.id}">${i+1}. ${element.name}</p>`;            
        }
    });
}

function deleteItem(id) {
    httpDelete(id, (res) => {
        getItems();
    });
}

function httpPost(item, success) {
    var http = new XMLHttpRequest();
    var url = `http://localhost:3000/vjs_todo/`;
    var params = `item=${item}`;

    http.open('POST', url, true);

    http.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    http.onreadystatechange = () => {
        if (http.readyState === 4 && http.status === 200) {
            success(http.response);
        }
    }

    http.send(params);
}

function httpGet(success) {
    var http = new XMLHttpRequest();
    var url = `http://localhost:3000/vjs_todo`;

    http.open('GET', url, true);

    http.onreadystatechange = () => {
        if (http.readyState === 4 && http.status === 200) {
            success(JSON.parse(http.response));
        }
    }

    http.send();
}

function httpDelete(id, success) {
    var http = new XMLHttpRequest();
    var url = `http://localhost:3000/vjs_todo/`;
    var params = `id=${id}`;

    http.open('DELETE', url, true);

    http.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    http.onreadystatechange = () => {
        if (http.readyState === 4 && http.status === 200) {
            success(http.response);
        }
    }

    http.send(params);
}

function inputEnter(e){
    if (e.keyCode == 13) {
        postItem();
        return false;
    }
}

getItems();