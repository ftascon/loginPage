$(function() {
  /*elements*/
  elements = new Array("login", "register", "lostpassword");
  /*check url*/
  chk(elements);
  /*trigger clicks with btn_ */
  $('.flex .box + p a').on("click",function() {
    change($(this).attr("class"), elements);
  });
});

/* function change */
function change(btn_active, ctm_elements) {
  ctm_elements.map(function(ele){
    $('.'+ele).hide();
    $('.btn_'+ele).show();
  });
  let ele_active = btn_active.substr(4);
  $('.'+btn_active).hide();
  $('.'+ele_active).show();
}
/*function url*/
function chk(ctm_elements) {
  var i = 0;
  ctm_elements.map(function(ele){
    $('.'+ele).hide();
    $('.btn_'+ele).show();
    if(window.location.hash==='#'+ele){
      $('.'+ele).show();
      $('.btn_'+ele).hide();
      i++;
    }
  });
  if(i==0){
    $('.'+ctm_elements[0]).show();
  }
}
