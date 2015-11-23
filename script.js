OffGame = (function(){

  OffGame = function() {}; //Contructor

  objeto = null;

  OffGame.init = function() {
    console.log('Kill the fucking classmate');
    jqueryBtn();
  };

  jqueryBtn = function() {
    $('.box-lang-left > div').click(function() { saberQualClique($(this)); })
  }

  saberQualClique = function(obj) {
    var vaiProJson;
    obj.each(function() {
       vaiProJson = $(this).attr('data-image');
       getJsonData(vaiProJson);
    });
  }

  getJsonData = function(filtro){
    //pesquisar aqui pelo indice do objeto
    $.getJSON('content.json', function(data) {
     var outroNome = data, valor;
       if ( filtro === "js"){
        valor = data.Obj_1;
        $('.title').text(valor.title);
        $('.sub-1').text(valor.sub_1.desc_1);
        $('#imagem-centro > img').attr('src',valor.url);
      }
      //filtro aqui
      if ( filtro === "py"){
        valor = data.Obj_2;
        $('.title').text(valor.title);
        $('.sub-1').text(valor.sub_1);
        $('#imagem-centro > img').attr('src',valor.url);
      }
    });
  };  

  iniciarJavaScript = function(){
    $('.title').text(data)
  };

 

  return OffGame;
})();




//The right way to call the jQuery U_U
(function($){
  $(function(){ OffGame.init(); });
})(jQuery);