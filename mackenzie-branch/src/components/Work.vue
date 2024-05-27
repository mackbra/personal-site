<template>
    <div class="work-wrapper">
        <div class="work-img-wrapper">
          <img
            src="../assets/images/Esoteria.PNG"
            alt=""
            loading="lazy"
            class="image"
          />
        </div>
        <div class="overlay">
          <div class="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </div>
    </div>
    <div class="work-wrapper">
        <div class="work-img-wrapper">
          <img
            src="../assets/images/Phonebook.PNG"
            alt=""
            loading="lazy"
            class="image"
          />
        </div>
        <div class="overlay">
          <div class="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </div>
    </div>
</template>

<style scoped>
  .work-wrapper {
  position: relative;
    height: 300px;
    width: 100%;
    background-color: #fff;
    border-radius: 11px;
    box-shadow: 0 3px 10px lightgray;
    margin: 10px;
    overflow:hidden;

  }

.image {
  z-index: 100; /* Stay on top */
  display: block;
  height: 300px;
  transition: 1s ease;
}
.work-img-wrapper {
  z-index: 100; /* Stay on top */
  width: 33%;
  height:300px;
  overflow:hidden;
  transition: 1s ease;
}
.overlay {
    width: 67%;
    position: absolute;
    padding: 10px;
    height: 100%;
    top: 0%;
    left: 33%;
}
.work-img-wrapper:hover {
  width: 100%;
  position:absolute;
}
.work-wrapper:hover .overlay {
  opacity: 1;
}

.text {
    position: absolute;
    padding: 10px;
    height: 100%;
    top: 0%;
}
::-webkit-scrollbar {
    width: 0px;
    background: transparent; /* make scrollbar transparent */
}
</style>
