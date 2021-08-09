function btnclick(val)
{
    document.getElementById("screen").value+=val

}

function btnclear(){
    document.getElementById("screen").value=""
}

function eclick(){
    var text=document.getElementById("screen").value
    var result=eval(text)
    document.getElementById("screen").value=result
}

function back(){
    var bk=document.getElementById("screen").value
    var rslt=bk.slice(0,-1);
    document.getElementById("screen").value=rslt
    
}