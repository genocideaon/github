
$(document).ready(function() {
	    
     	var tarGe = document.getElementById('targetElement');
     	var button = document.getElementById('append-button');
     	var msnry = new Masonry( tarGe , {itemSelector: '.item, .item-first'});

     	var requestObj = false;
         if (window.XMLHttpRequest) {
             requestObj = new XMLHttpRequest();
         } else if (window.ActiveXObject) {
             requestObj = new ActiveXObject("Microsoft.XMLHTTP");
         }
     
         function getData(source) {
             if (requestObj) {
                 requestObj.open("GET", source);
                 requestObj.onreadystatechange = function (){
                     if (requestObj.readyState == 4 && requestObj.status == 200) {
                         
                         var dataFormAjax = JSON.parse(requestObj.responseText);
                         var l = dataFormAjax["content1"].length;


                         var elemS = [];
                         var fragment = document.createDocumentFragment();

                         for(i=0;i<l;i++){

                             var elem = document.createElement('div');
                             var elemH = document.createElement('h1');
                             var elemP = document.createElement('p');

                             elem.className = 'item';
                             elemH.innerHTML = dataFormAjax["content1"][i]["head"];
                             elemP.innerHTML = dataFormAjax["content1"][i]["content"];
                             elem.appendChild(elemH);
                             elem.appendChild(elemP);

                             fragment.appendChild(elem);
                             elemS.push(elem);
                         }
                         console.log(l);
                         console.log(fragment);
                         console.log(elemS);

                         tarGe.appendChild( fragment );
                         msnry.appended( elemS );
                     }
                 }
                 requestObj.send(null);
             }
         }
     
         eventie.bind( button, 'click', function(e) {
             e = e || window.event;
             e.preventDefault ? e.preventDefault() : (e.returnValue=false);


             getData('text.html');
             
     
         });

});


					 