(function($){
  $(function(){

    $('.parallax').parallax();
    
  }); // end of document ready
})(jQuery); // end of jQuery name space
document.addEventListener('DOMContentLoaded', function () {
  // nav menu
  const menus = document.querySelectorAll('.side-menu');
  M.Sidenav.init(menus, { edge: 'right' });
});
