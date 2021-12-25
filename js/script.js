function writeTextByJS(id, text, speed){

    var ele = document.getElementById(id),
      txt = text.join("").split("");

  var interval = setInterval(function(){

      if(!txt[0]){

            return clearInterval(interval);
     };

     // console.log(txt[0] == '~');
     if (txt[0] == '~') {
        txt.shift()
        ele.innerHTML += '<br>';
     } else{
      ele.innerHTML += txt.shift();
     }
     // console.log(txt[0] = '~');
     // ele.innerHTML += txt.shift();
   }, speed != undefined ? speed : 100);

   return false;
};
writeTextByJS(
  "typing",
   [
       "С Новым годом! Всем чудес ~",
       "Пожелаю в эту ночь! ~",
       "Снег валит пускай с небес ~",
       "А печалька - валит прочь! ~"
    ],
    5000
);