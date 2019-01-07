$('.tree li .icon').click( function() {
  console.log("this");
  $(this).parent().toggleClass('expanded').
  closest('li').find('ul:first').
  toggleClass('show-effect');
});
