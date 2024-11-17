async function getReq() {
    try {
        const con = document.getElementById('consol');
        con.innerText = "";
        const resp = await fetch('/statusCarrito');
        const data = await resp.json();
        data.forEach(element => {
            con.innerText += "Id:" + element.id + "\n";
            con.innerText += "Status:" + element.status + "\n";
            con.innerText += "Ip:" + element.ip_client + "\n";
            con.innerText += "Name:" + element.name + "\n";
            con.innerText += "Date:" + element.date + "\n";
            con.innerText += "Id device:" + element.id_device + "\n\n";
        });

    } catch (e) {
        console.log(e);
    }
}
async function actStatus(status,ep) {
    try {
        const URL_API = "https://api.ipify.org/?format=json";
        const ipResp = await fetch(URL_API);
        const ip = await ipResp.json();

        const con = document.getElementById('consol');
        const resp = await fetch(`/${ep}`, {
            headers: { 'Content-Type': 'application/json' },
            method: 'POST', body: JSON.stringify({
                status: `${status}`,
                ip: `${ip.ip}`
            })
        })
        const data = await resp.json();
        con.innerText = data.msj;
    } catch (e) {
        console.log(e);
    }
}