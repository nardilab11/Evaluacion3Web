
function encontrarDigitoVer(rut){
    var numRut =  rut;
    var digVer = 0;
    var secuencia = 2;
    var sum = 0;
    var multiplo;
    while(numRut !== 0){
        multiplo = ((numRut%10) * secuencia);
        sum = sum + multiplo;
        numRut = Math.floor(numRut / 10);
        secuencia = secuencia + 1;
        if(secuencia === 8){
            secuencia = 2;
        }
    }
    digVer = (11 - (sum % 11));
    
    if(digVer === 10){
        return "K";
    }else if(digVer === 11){
        return 0;
    }else{
        return digVer;
    }
}

function validarRUT(){
    var inputRUT = document.getElementById("iptRUT");
    var inputDV = document.getElementById("iptDV");
    
    //Validar que los campos no estén vacíos y que el RUT no tenga letras
    if(inputRUT.value === "" || inputDV.value === "" || isNaN(inputRUT.value)){
        inputRUT.value = "";
        inputDV.value = "";
        alert("Hay campos vacíos o el RUT tiene letras.");
    }else{
        //Validar la longitud de los campos
        if(inputRUT.value.length > 8 || inputDV.value.length > 1){
            inputRUT.value = "";
            inputDV.value = "";
            alert("RUT o dígito verificador muy largo.");
        }else{
            //Verificar si el dígito es un número o una K
            if(isNaN(inputDV.value)){
                if(inputDV.value !== "K" && inputDV.value !== "k"){
                    inputRUT.value = "";
                    inputDV.value = "";
                    alert("La única letra válida es la K.");
                }else{
                    inputDV.value = "K";
                    if((encontrarDigitoVer(inputRUT.value)) !== inputDV.value){
                        inputRUT.value = "";
                        inputDV.value = "";
                        alert("RUT no válido.");
                    }else{
                        alert("El RUT " + inputRUT.value + "-" + inputDV.value + " es válido.");
                    }
                }
            }else{
                if((encontrarDigitoVer(inputRUT.value)) !== parseInt(inputDV.value)){
                    inputRUT.value = "";
                    inputDV.value = "";
                    alert("RUT no válido.");
                }else{
                    alert("El RUT " + inputRUT.value + "-" + inputDV.value + " es válido.");
                }
            }
        }
    }
}

