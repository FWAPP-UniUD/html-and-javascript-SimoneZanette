function parameter(event) {
    let str2;
    if(document.getElementById("Alc").checked == true) 
        str2 = "Alcoholic";
    else if(document.getElementById("N_Alc").checked == true)
        str2 = "Non_Alcoholic";

    const str1 = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=";
    const link = str1.concat(str2);

    fetch(link)
        .then((response) => {
            if (response.status == 200)
                return response.json();
        })
        .then((json) => {
            document.querySelector("#placeholder2").textContent = JSON.stringify(json);
        });
    event.preventDefault();
}

document.getElementById("bt").addEventListener("click", parameter);