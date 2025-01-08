let a=[];
document.querySelector('input').oninput = search;
async function start(){
    const response = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/1DqsLYRqCm0JJQ64l47gzn309h_dPHLAE8XI57rVh_Ng/values/시트1?key=AIzaSyDccz-Qh9fa66POleHS0P7htB3NpVOz0Qg`);
    const data = await response.json();
    a = data.values;
}

start();

function search(){
    const inp = document.querySelector('input').value;
    a.forEach(element=>{
        if(element[0].includes(inp) || element[1].includes(inp);
            document.writeln(`<h2>${element[0]}</h2><div>${element[1]}</div>`);
        }
    });
}




    
