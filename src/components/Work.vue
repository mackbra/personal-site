<template>
    <div class="work-wrapper">
        <div class="work-img-wrapper">
          <img
            src="../assets/images/Esoteria.png"
            alt=""
            loading="lazy"
            class="image"
          />
        </div>
        <div class="overlay">
          <div class="text">
              Esoteria is a personal project I’ve been working on in my free time with some of my former colleagues. Our vision is to create a website for people who want to learn how to use tarot cards. My main contributions to the website have been creating the header and footer and the moon calendar. The header features a dynamic moon icon that changes with the current lunar phase. The moon calendar shows the moon phases for the next seven days and when clicked on a user can read about how the lunar phase affects the tarot readings.
              <br/>
              <span class="learnMore">
                This project is currently under construction and is not public, however you can <a class="portfolioLink" target="_blank" href="https://github.com/joshuavickstrom/TarotWebapp">visit our code</a> and view how we collaborate and manage a project through github.
              </span>
          </div>
        </div>
    </div>
    <div class="work-wrapper">
        <div class="work-img-wrapper">
          <img
            src="../assets/images/dashboard.png"
            alt=""
            loading="lazy"
            class="image"
          />
        </div>
        <div class="overlay">
          <div class="text">
            At T2MWorks, one of our main focuses was working on our website for customers that helped them manage their Microsoft365 account. The customer portal contains a lot of dense information and it was important to make that information easy to understand for people with varying levels of computer literacy. One of my main projects was creating a landing page after logging in. I created a dashboard look that relies heavily on Bootstrap components. This dashboard allows a user to navigate to important parts of the site in one click and make quick changes.
          </div>
        </div>
    </div>
    <div class="work-wrapper">
        <div class="work-img-wrapper">
          <img
            src="../assets/images/Phonebook.png"
            alt=""
            loading="lazy"
            class="image"
          />
        </div>
        <div class="overlay">
          <div class="text">
            My very first project at T2MWorks was a customer request to have a phonebook app. As the first person to be a part of the new web development team, I was responsible for creating both the backend and frontend. I created the database structure, the APIs that manipulated the databases, and designed and wired up the web app. This app used Bootstrap and <a class="portfolioLink" target="_blank" href="https://www.telerik.com/kendo-ui">Kendo UI</a> framework and allowed a user to create, edit, and delete both contacts and directories. 
            <br/>
            <span class="learnMore">
              Watch a <a href="#" class="portfolioLink" @click="open_in_new_window('html_contents', 'PhonebookPreview', 'location=1,status=1,toolbar=1,scrollbars=1,resizeable=1,width=800,height=400');">video preview</a>
              <div id="html_contents" data-new-window> <!-- data-new-window is important -->
                  <video controls style="width: 100%; height: auto;">
                      <source src="../assets/Phonebook Screen Capture.mp4" type="video/mp4" />
                  </video>
              </div>
            </span>
          </div>
        </div>
    </div>
</template>

<script>
export default {
  methods: {
    open_in_new_window(id, new_page_title, features) {
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
  }
}
</script>

<style scoped>
  .work-wrapper {
    position: relative;
    background-color: #fff;
    border-radius: 11px;
    box-shadow: 0 3px 10px lightgray;
    margin: 10px;
  }

.image {
  z-index: 1; /* Stay on top */
  display: block;
  height: 300px;
  transition: 1s ease;
}

.work-wrapper:hover .overlay {
  opacity: 1;
}

[data-new-window] {
    display: none;
}
::-webkit-scrollbar {
    width: 0px;
    background: transparent; /* make scrollbar transparent */
}

@media (min-width: 1000px) {
  .work-wrapper {
    position: relative;
    height: 300px;
    width: 100%;
    overflow:hidden;
  }
  .work-img-wrapper {
    z-index: 100; /* Stay on top */
    width: 33%;
    height:300px;
    overflow:hidden;
    transition: 1s ease;
  }
  
  .work-img-wrapper:hover {
    width: 100%;
    position:absolute;
  }
  
.overlay {
    width: 67%;
    position: absolute;
    padding: 10px;
    height: 100%;
    top: 0%;
    left: 33%;
}
.text {
    position: absolute;
    padding: 10px 20px 10px 10px;
    height: 100%;
    top: 0%;
}
.learnMore {
  position: absolute;
  margin-top: 15px;
  padding-right:20px;
}
}
  @media (max-width: 999px) {
  .work-wrapper {
    position: relative;
    width: 100%;
    height:auto;
    margin:40px auto;
  }
  .work-img-wrapper {
  z-index: 100; /* Stay on top */
  width: 100%;
  transition: 1s ease;
  overflow:hidden;
  }
  .image {
    width:100%;
    height:auto;
    border-radius: 11px 11px 0px 0px;
  }
.text {
    padding: 10px 20px 10px 10px;
}
  }

</style>
