//var teste  = new Date()

//console.log(teste)

function relogio () {

    var data = new Date()
    var horas = data.getHours()
    var minutos = data.getMinutes()
    var segundos = data.getSeconds()
    
    
    
    if(horas < 0){
    
    horas = "0" + horas
    
    }
    
    if(minutos < 10){
    
    minutos = "0" + minutos
    
    }
    
    if(segundos < 10) {
    
    segundos = "0" + segundos
    
    
    }
    
    var Horas = horas + ":" + minutos + ":" + segundos
    
    document.getElementById("rel").value=Horas
    
    }
    
    var timer = setInterval(relogio,1000)