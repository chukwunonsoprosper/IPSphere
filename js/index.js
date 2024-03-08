async function getIp() {
    let query = document.querySelector("input").value.trim();
    if (query == "") {
        //
    } else {
        let result = (document.getElementById("res").style.display = "block");
        const url = "https://community-neutrino-ip-info.p.rapidapi.com/ip-info";
        const options = {
            method: "POST",
            headers: {
                "content-type": "application/x-www-form-urlencoded",
                "X-RapidAPI-Key": "4273ea270amshe9b959a46322d44p1945b1jsn885a1014a2eb",
                "X-RapidAPI-Host": "community-neutrino-ip-info.p.rapidapi.com",
            },
            body: new URLSearchParams({
                ip: query,
                "reverse-lookup": "checked",
            }),
        };

        try {
            const response = await fetch(url, options);
            const result = await response.text();
            let parse = JSON.parse(result);
            for (var key in parse) {
                document.getElementById('pars').innerHTML += key + ":" + "<br>";
                document.getElementById('respi').innerHTML += parse[key] + "<br>";
            }
        } catch (error) {
            document.getElementById('error').innerHTML = error;
        }
    }
}
