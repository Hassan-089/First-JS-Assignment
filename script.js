// let User = prompt('Enter your Name:')
document.getElementById("Alert-name").addEventListener("click", (e) => {
    alert("User");
    let output = "alert(User)"
    document.getElementById("output").innerHTML = output;
    document.getElementById("input-No").style.display = "none";
})
document.getElementById("Alert-No").addEventListener("click", (e) => {
    alert("123");
    let output = "alert(123)"
    document.getElementById("output").innerHTML = output;
    document.getElementById("input-No").style.display = "none";
})
document.getElementById("Add-no").addEventListener("click", (e) => {
    document.getElementById("input-No").style.display = "block";
    document.getElementById("submit").onclick = function () {
        let no1 = parseInt(document.getElementById("input1").value);
        let no2 = parseInt(document.getElementById("input2").value);
        let sum = no1 + no2;

        document.getElementById("output").innerHTML = sum;

    };

})
document.getElementById("Sub-no").addEventListener("click", (e) => {
    document.getElementById("input-No").style.display = "block";
    document.getElementById("submit").onclick = function () {
        let no1 = parseInt(document.getElementById("input1").value);
        let no2 = parseInt(document.getElementById("input2").value);
        let sub = no1 - no2;

        document.getElementById("output").innerHTML = sub;

    };

})
document.getElementById("Mul-no").addEventListener("click", (e) => {
    document.getElementById("input-No").style.display = "block";
    document.getElementById("submit").onclick = function () {
        let no1 = parseInt(document.getElementById("input1").value);
        let no2 = parseInt(document.getElementById("input2").value);
        let mul = no1 * no2;

        document.getElementById("output").innerHTML = mul;

    };

})
document.getElementById("Div-no").addEventListener("click", (e) => {
    document.getElementById("input-No").style.display = "block";


    document.getElementById("submit").onclick = function () {
        let no1 = parseInt(document.getElementById("input1").value);
        let no2 = parseInt(document.getElementById("input2").value);
        let div = parseFloat(no1 / no2);
        document.getElementById("output").innerHTML = div

    };
})

