console.log("hello!")

const {ipcRenderer} = require('electron');
ipcRenderer.on('skipClick', () => {
  let skip = document.getElementById("skip");
  skip.preventDefault();
  skip.addEventListener('click',(skipClicked) => {
    skip.preventDefault();
    console.log("Clicked!");
  });
});
// let skip = document.getElementById("skip");
// skip.addEventListener('skipbutton', (event) => {
//   event.preventDefault();
//   console.log('skipped');

// });