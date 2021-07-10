function focus() {
  document.getElementById("principal").focus();
}

function compute() {
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100; //Interest calculation
    var year = new Date().getFullYear()+parseInt(years); //Adds the actual year to the selected number of years
    
    if (principal <= 0) { //Principal Validation
        alert("Enter a positive number greater than 0.");
        focus(); //Focus on the "principal" field
    }
    else {
        //Adding Text to the Span class with "result" ID
        document.getElementById("result").innerHTML = "If you deposit \<mark\>"+principal+"\</mark\>,\<br\> at an interest rate of \<mark\>"+rate+"%\</mark\>\<br\> You will receive an amount of \<mark\>"+interest+"\</mark\>,\<br\> in the year \<mark\>"+year+"\</mark\>\<br\>"
    }
}

function updateRate() { //Changing the value of "rate_val" span when range changes
    var rateVal = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateVal + "%";
}