        async function getReq(){
            try{
            const con = document.getElementById('consol');
            con.innerText="";
            const resp = await fetch('/statusCarrito');
            const data = await resp.json();
            data.forEach(element => {
                con.innerText+="Id:"+element.id+"\n";
                con.innerText+="Status:"+element.status+"\n";
                con.innerText+="Ip:"+element.ip_client+"\n";
                con.innerText+="Name:"+element.name+"\n";
                con.innerText+="Date:"+element.date+"\n";
                con.innerText+="Id device:"+element.id_device+"\n\n";
            });
            
            }catch(e){
                console.log(e);
            }
        }
        async function postReq(){
            try{
                const con = document.getElementById('consol');
                const resp = await fetch('/statusCarrito',{method: 'POST'})
                const data = await resp.json();
                con.innerText=data.msj;
            }catch(e){
                console.log(e);
            }
        }
        async function putReq(){
            try{
                const con = document.getElementById('consol');
                const resp = await fetch('/statusCarrito',{method: 'PUT'})
                const data = await resp.json();
                con.innerText=data.msj;
            }catch(e){
                console.log(e);
            }
        }
        async function deleteReq(){
            try{
                const con = document.getElementById('consol');
                const resp = await fetch('/statusCarrito',{method: 'DELETE'})
                const data = await resp.json();
                con.innerText=data.msj;
            }catch(e){
                console.log(e);
            }
        }