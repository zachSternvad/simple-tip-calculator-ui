window.onload = () =>
{
    document.querySelector("#calculate").onclick = calculateTip;
}
function calculateTip()
{
    let amount = document.querySelector("#amount").value;
    let people = document.querySelector("#people").value;
    let service = document.querySelector("#services").value;

    console.log(service);

    if (amount == "" && service === "Select")
    {
        alert("Please enter an amount and select a service");
        return;
    }

    if (people === "1")
        document.querySelector("#each").style.display = "none";
    else
        document.querySelector("#each").style.display = "block";

    let total = (amount * service) / people;
    total = total.toFixed(2);

    document.querySelector(".tip").style.display = "block";
    document.querySelector("#total").innerHTML = total;
}