var clients = document.getElementById('achievements');
var services = document.getElementById('projects');


achievements.addEventListener('click', function() {
  $(achievements).toggleClass("active");
  $(".parent:not(#achievements)").toggleClass("invisible");
}, false);

projects.addEventListener('click', function() {
  $(projects).toggleClass("active");
  $(".parent:not(#projects)").toggleClass("invisible");
}, false);

