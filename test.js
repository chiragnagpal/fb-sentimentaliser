
function findAncestor (el, cls) {
    while ((el = el.parentElement) && !el.classList.contains(cls));
    return el;
}



function modifyTxt (e) {

  console.log(e.target);

  var ele = document.getElementsByTagName("p");

 // var r1 = sent('Cats are stupid.');
 // console.log(r1);

 // console.log(ele.length);

  for (var i = 0;i<ele.length;i++){

    var line = ele[i].innerHTML;
    var pol = sent(line);
//    console.log(line);
//    console.log(pol);
    if (pol.score>0){

      ele[i].style.color = "#3c763d";
    	ele[i].style.backgroundColor = "#dff0d8";
    }
    else if (pol.score<0){
      ele[i].style.color = "#a94442";
      ele[i].style.backgroundColor = "#f2dede";

    }

    else{

      ele[i].style.color = "#31708f";
      ele[i].style.backgroundColor = "#d9edf7";

    }

  }

 // 	$.get("http://www.sentiment140.com/api/bulkClassifyJson?appid=chiragnagpal94@hotmail.com", function(data){
 //	  console.log("Data: " + data);
 //	});


  }



document.addEventListener("DOMNodeInserted",modifyTxt, false);


