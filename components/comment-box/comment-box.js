document.addEventListener('DOMContentLoaded', (event) => {
  console.log('DOM loaded.');

  let eleReplyButton = document.getElementById('btnReply');
  eleReplyButton.addEventListener('click', (event) => {
    console.log('Reply button clicked.');
  });
});
