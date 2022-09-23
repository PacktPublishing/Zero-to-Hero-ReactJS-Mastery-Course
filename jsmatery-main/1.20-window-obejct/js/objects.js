console.log(window);

function getPageUrl() {
    let url = window.location.href;
    //debugger;
    console.log(url);
    window.history.forward();
}

getPageUrl();

function add() {
    let result = 4 + 5;
    let emp = JSON.stringify({ "id": 111, "age": 33 });

    //Data stored in localStorage is available until explicitely deleted
    window.localStorage.setItem("result", result);
    window.localStorage.setItem("name", "John");//data stored inside localstorage is in string format
    localStorage.setItem("empOne", emp);

    console.log(result);
}

function addToSession() {
    let result = 4 + 5;
    let emp = JSON.stringify({ "id": 111, "age": 33 });

    //Data stored in sessionStorage is available until user closes all browser window
    window.sessionStorage.setItem("result", result);
    window.sessionStorage.setItem("name", "John");//data stored inside sessionStorage is in string format
    sessionStorage.setItem("empOne", emp);

    console.log(result);
}

function getStorageDataSession() {
    let name = sessionStorage.getItem("name");
    let result = sessionStorage.getItem("result");
    let e = sessionStorage.getItem("empOne");//here e is a string

    console.log(typeof (name) + " name is " + name);
    console.log(typeof (result) + " result is " + result);
    console.log(typeof (e) + " emp one data is " + e);

    console.log(name);
    console.log(parseInt(result));
    let empObj = JSON.parse(e);//converts the string form of emp object to object form
    console.log(typeof (empObj));
    console.log(empObj);

    const { id, age } = empObj;//Object destructing another feature of ES6
    console.log(id);
    console.log(age);

}

function clearDataSession() {
    sessionStorage.clear();
}

function getStorageData() {
    let name = localStorage.getItem("name");
    let result = localStorage.getItem("result");
    let e = localStorage.getItem("empOne");//here e is a string

    console.log(typeof (name) + " name is " + name);
    console.log(typeof (result) + " result is " + result);
    console.log(typeof (e) + " emp one data is " + e);

    console.log(name);
    console.log(parseInt(result));
    let empObj = JSON.parse(e);//converts the string form of emp object to object form
    console.log(typeof (empObj));
    console.log(empObj);

    const { id, age } = empObj;//Object destructing another feature of ES6
    console.log(id);
    console.log(age);

}

function clearData() {
    localStorage.clear();
}