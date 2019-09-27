function check() {
     let a,b, c;
     a = parseInt( document.getElementById('a').value);
     b = parseInt( document.getElementById('b').value);

    document.getElementById('photo').innerHTML = ((a+b) < 4 ) ? "Below" : "Over";;
     // sum = a+b;
    // if(sum<4){
    //     document.getElementById('photo').innerHTML="Below";
    // }else{
    //     document.getElementById('photo').innerHTML="Over";
    // }



 }