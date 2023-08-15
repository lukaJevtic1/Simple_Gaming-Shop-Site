
function promenisliku(ovo)
{
    x = document.getElementById("mojaSLika");
    if(x.src.match("images/game.png"))
    {
        x.src = "images/game2.png";
    }
    promeniBoju = document.querySelector(".nav");
    promeniBoju.style="color:black"
}
function promenisliku2()
{
    x = document.getElementById("mojaSLika");
    if(x.src.match("images/game2.png"))
    {
        x.src = "images/game.png";
    }
   
}

function dajDatum()
{

    var today = new Date();
    var date = today.getFullYear()+ '-'+(today.getMonth()+1) +'-' +today.getDay()+'('+today.getHours()+":"+today.getMinutes()+":"+today.getSeconds()+")";
    document.getElementById("datum").innerHTML = date;
}

function Aktivno(t)
{ 
  var x=t;
  if(document.getElementById(x).style.display === 'block') 
  {
     document.getElementById(x).style.display = 'none';
  }
  else
  {
     document.getElementById(x).style.display = 'block';
  }
}
var XMLDOC;
var igrice;
function loadXMLDoc(){

    var xmlHttp = new XMLHttpRequest();

    xmlHttp.onreadystatechange = function(){
        if(this.status == 200 && this.readyState == 4)
        {
           XMLDOC =  xmlHttp.responseXML;
           igrice = XMLDOC.getElementsByTagName("Igrica"); 
          //console.log(igrice);                 
        }


    }
    xmlHttp.open("GET","igrice.xml",true);
    xmlHttp.send();



}
function show()
{  
    //var regex = new RegExp(ContentFilter,"ig");
   // var ContentFilter = document.getElementById("contentIgre").value.trim();
    element  = document.getElementById("kupovina");
    element.innerHTML ="";
    var contentIgre = document.getElementById("sadrzajIgre").value.trim();
    var regex = new RegExp(contentIgre,"ig");
    var ch1 = document.getElementById("ratne");
    var ch2 = document.getElementById("pucacine");
    var ch3 = document.getElementById("strategije");
   
    for(var i = 0; i < igrice.length;i++)
    {


        var umetni = "<div style='display:inline-block;border:1px solid white;padding:10px;'>";
        igra = igrice[i].getElementsByTagName("name")[0].childNodes[0].nodeValue;
        cena = igrice[i].getElementsByTagName("cena")[0].childNodes[0].nodeValue;
        slika = igrice[i].getElementsByTagName("s1")[0].childNodes[0].nodeValue;
        dajVrstu = igrice[i].getElementsByTagName("vrsta")[0].childNodes[0].nodeValue;
        console.log("AAAAAAAAAAA");
        if(regex.test(igra) || contentIgre == "")
        {        
          if(ch1.checked && dajVrstu == "Ratna")
            {
            umetni +="<h3> Naziv: "+igra+"</h3><br>";
            umetni +="<h5> CENA : "+cena+"$"+"</h5><br>";
            umetni +="<img style='height:100px;weight:100px' src='images/"+slika+"'><br>";
            umetni +="<br><button onclick='odgovori("+i+")' style='height:30px;width:50px;'>KUPI</button></div>";
            element.innerHTML += umetni;
        }
            if(ch2.checked && dajVrstu == "Pucacina")
            {
            umetni +="<h3> Naziv: "+igra+"</h3><br>";
            umetni +="<h5> CENA : "+cena+"$"+"</h5><br>";
            umetni +="<img style='height:100px;weight:100px' src='images/"+slika+"'><br>";
            umetni +="<br><button onclick='odgovori("+i+")' style='height:30px;width:50px;'>KUPI</button></div>";
            element.innerHTML += umetni;    
        }
            if(ch3.checked && dajVrstu == "Strategija")
            {
            umetni +="<h3> Naziv: "+igra+"</h3><br>";
            umetni +="<h5> CENA : "+cena+"$"+"</h5><br>";
            umetni +="<img style='height:100px;weight:100px' src='images/"+slika+"'><br>";
            umetni +="<br><button onclick='odgovori("+i+")' style='height:30px;width:50px;'>KUPI</button></div>";
            element.innerHTML += umetni;    
        }

        
        
        }
  }
    

}




function odgovori(i)
{
   igra =  igrice[i].getElementsByTagName("name")[0].childNodes[0].nodeValue;
   cena = igrice[i].getElementsByTagName("cena")[0].childNodes[0].nodeValue;
    alert("Uspesno ste kupili "+igra +" ,za cenu od - "+cena+"$");


}

function vratiME()
{
    doc


}
