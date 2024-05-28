let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 5000); // Change image every 5 seconds
}

function open_in_new_window(id, new_page_title, features) {
  var new_window;

  if(features !== undefined && features !== '') {
  new_window = window.open('', '_blank', features);
  }
  else {
      new_window = window.open('', '_blank');
  }

  var html_contents = document.getElementById(id);
  if(html_contents !== null) {
      new_window.document.write('<!doctype html><html><head><title>' + new_page_title + '</title><meta charset="UTF-8" /></head><body>' + html_contents.innerHTML + '</body></html>');
  }
}