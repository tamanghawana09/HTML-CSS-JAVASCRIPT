function largest(){
    var a = document.getElementById("first").value;
    var b = document.getElementById("second").value;
    var c = document.getElementById("third").value;
    a = parseInt(a);
    b = parseInt(b);
    c = parseInt(c);
   
    if(a>b){
        if(a>c){
          
             document.getElementById("largest").textContent= a;
        }
    }else if (b>a){
        if(b > c) {
           
            document.getElementById("largest").textContent = b;
        }
    }
    else {
        document.getElementById("largest").textContent = c;
    }
    
}