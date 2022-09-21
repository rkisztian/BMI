

function szamol() {
    let magassag = parseFloat(document.getElementById('magassag').value);
    let suly = parseFloat(document.getElementById('suly').value);

    let eredmeny = document.getElementById('eredmeny').textContent = 
    Math.round(suly / (magassag / 100) ** 2);

    document.getElementById('sovany').style.backgroundColor = 'transparent';
    document.getElementById('normal').style.backgroundColor = 'transparent';
    document.getElementById('tulsuly').style.backgroundColor = 'transparent';
    document.getElementById('elhizas1').style.backgroundColor = 'transparent';
    document.getElementById('elhizas2').style.backgroundColor = 'transparent';
    document.getElementById('elhizas3').style.backgroundColor = 'transparent';
    
    if(eredmeny < 18.5 ){
        document.getElementById('sovany').style.backgroundColor = 'orange';
    }else if(eredmeny >= 18.5 && eredmeny <= 24.9){
        document.getElementById('normal').style.backgroundColor = 'orange';
    }else if(eredmeny >= 25 && eredmeny <= 29.9){
        document.getElementById('tulsuly').style.backgroundColor = 'orange';
    }else if(eredmeny >= 30 && eredmeny <= 34.9){
        document.getElementById('elhizas1').style.backgroundColor = 'orange';
    }else if(eredmeny >= 35 && eredmeny <= 39.9){
        document.getElementById('elhizas2').style.backgroundColor = 'orange';
    }else{
        document.getElementById('elhizas3').style.backgroundColor = 'orange';
    }


}