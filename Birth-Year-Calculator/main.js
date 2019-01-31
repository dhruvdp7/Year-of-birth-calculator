var btn = document.getElementById("btn");
btn.addEventListener("click",calculate)

    function calculate() {
        var age = document.getElementById("age").value;
        if (age == "" || age <= 0){ 
            window.alert("Please Enter Correct age");
        }
        else{
        var date = new Date().getFullYear();
        
        var birthyear=date-age;
        document.getElementById("year").innerText = "Your Birth Year is " + birthyear;
    }
}

   

