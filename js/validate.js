function echeck(){
 var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
 		if(document.getElementById('email').value=="")
 		{
 			document.getElementById('email').innerHTML='This is a required field';
 		}

        else if (reg.test(document.getElementById('email').value)==false) 
        {
            document.getElementById('email').innerHTML='This is not a valid email address';
            
        }

        

}

function tcheck(){
var reg=/^\+?(\d[\d\-\+\(\) ]{13}\d$)/;
console.log(document.getElementById('tel').value.length)
if(document.getElementById('tel').value=="")
 		{
 			document.getElementById('tel').innerHTML='This is a required field';
 		}
if(String(document.getElementById('tel').value).length!==10 || reg.test(String(document.getElementById('tel').value))){
document.getElementById('tel').innerHTML="This is not a valid phone number";
}
}
function ncheck(){
var reg=/^\+?(\d[\d\-\+\(\) ]{13}\d$)/;
if(document.getElementById('nog').value=="")
 		{
 			document.getElementById('nog').innerHTML='This is a required field';
 		}
if( reg.test(String(document.getElementById('nog').value))){
document.getElementById('nog').innerHTML="This is not a valid guest number";
}
}
function datecheck(){
	if(document.getElementById('date').value=="")
 		{
 			document.getElementById('date').innerHTML='This is a required field';
 		}

}

