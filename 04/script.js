$("h1").html(function(index, html) {
  return html.replace(/\S/g, '<span>$&</span>');
});