function FetchData(){
    let xhr = new XMLHttpRequest
    xhr.open("GET","https://jsonplaceholder.typicode.com/users")
    xhr.send()
    xhr.onload(() => {
        let response  = xhr.responseText
        let arr = JSON.parse(localStorage.getItem("users"))
        if(!arr)
        {
            localStorage.setItem("users",response)
        }
    })
}

function DisplayData(){
    let data = JSON.parse(localStorage.getItem("users"))
    let html = `<center>
    <table>
        <tr>
            <th>Name</th>
            <th>City</th>
            <th>Div</th>
        </tr>
    `;
    data.forEach(element => {
        html += 
        `
            <tr>
                <th>${element?.name}</th>
                <th>${element?.city}</th>
                <th>${element?.div}</th>
            </tr>
        `
    });
    html += `</table></center>`
    const w = open()
    w.document.body.innerHTML = html
}

document.forms.registrationForm.addEventListener("sumbit",formSubmit)

function formSubmit(){
    var name = document.getElementById("name").value
    var city = document.getElementById("city").value
    var div = document.getElementById("div").value

    const data = {name,city,div}

    $.ajax({
        type: "POST",
        url: "https://jsonplaceholder.typicode.com/users",
        contentType: "application/json; chatset=UTF-8 ",
        pdata : JSON.stringify(data),

        success: function(newUser){
            let xdata = JSON.parse(localStorage.getItem("users"));
            xdata.unshift(newUser);
            localStorage.setItem("users",JSON.stringify(arr));
            DisplayData();
        },

        error: function(){
            console.log("error");
        }


    })

}