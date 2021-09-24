var form1=document.getElementById("form1");
var form2=document.getElementById("form2");
var form3=document.getElementById("form3");
var form4=document.getElementById("form4");
var next1=document.getElementById("next1");
var next2=document.getElementById("next2");
var next3=document.getElementById("next3");
var back1=document.getElementById("back1");
var back2=document.getElementById("back2");
var back3=document.getElementById("back3");
var backcol=document.getElementById("backcol");
function submitfinal(){
    let cont=document.getElementById("cont");
    cont.innerHTML="<H1>Your Response was submitted successfully</H1>";
}
next1.onclick= function(){
    let inp1=document.getElementById("inp1");
    let inp2=document.getElementById("inp2");
    let inp3=document.getElementById("inp3");
    if(inp1.value=="")
        alert('Please enter your name!!!');
    else if(inp2.value=="")
        alert('Please select a valid date!!!');
    else if(inp3.selectedIndex==0)
        alert('Please select a gender');
    else{
        form1.style.left="-450px";
        form2.style.left="45px";
        backcol.style.width="12.5rem";
    }
}
back1.onclick=function(){
    form1.style.left="45px";
    form2.style.left="450px";
    backcol.style.width="6.25rem";
}
next2.onclick= function(){
    let inp4=document.getElementById("inp4");
    let inp5=document.getElementById("inp5");
    if(inp4.value=="")
        alert('Enter your present address');
    else if(inp5.value=="")
        alert('Enter your permanent address');
    else{
        console.log(inp5.value);
        form2.style.left="-450px";
        form3.style.left="45px";
        backcol.style.width="18.75rem";
    }
}
back2.onclick=function(){
    form2.style.left="45px";
    form3.style.left="450px";
    backcol.style.width="12.5rem";
}
next3.onclick= function(){
    let inp6=document.getElementById("inp6");
    let inp7=document.getElementById("inp7");
    let inp8=document.getElementById("inp8");
    if(inp6.value=="")
        alert('Please enter your college name!!!');
    else if(inp7.value=="")
        alert('Please enter your college roll!!!');
    else if(inp8.value=="")
        alert('Please enter your current CGPA');
    else{
        form3.style.left="-450px";
        form4.style.left="45px";
        backcol.style.width="25rem";
    }
}
back3.onclick=function(){
    form3.style.left="45px";
    form4.style.left="450px";
    backcol.style.width="18.75rem";
}