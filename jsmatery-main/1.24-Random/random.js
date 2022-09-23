const randomNoGenerator = () => {
    let min = document.querySelector("#num1").value;
    let max = document.querySelector("#num2").value;

    if (min === '' || max === '') {
        alert("One or more fields are empty");
        return;
    }

    min = parseInt(min);
    max = parseInt(max);

    let randomNo = Math.floor(Math.random() * (max - min + 1) + min);
    document.querySelector("#result").innerHTML = `Result is : ${Math.round(randomNo)}`;
}