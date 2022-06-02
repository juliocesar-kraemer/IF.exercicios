let n1 = 10;
let n2 = 20;
n1 = n1 + n2;
if(n1 > 30){
    if(n2 == 20){
        alert("opção 1")
        }
    }else if(n2 == 10){
        if(n1 > 40){
        alert("opção 2");
        }
    }else{
        alert("opção 3")
    }
    /*alert("opção1") se n1>30 e n2==20, alert("opcão2") se n2==10 e n1>40, alert("opção3")
    o alert que rodou foi a ("opção3"), pois as outras condições não são verdadeiras.*/