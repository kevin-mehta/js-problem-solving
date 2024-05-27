document.addEventListener('DOMContentLoaded', (event) => {
  console.log('DOM loaded.');
});
let i = 1;
function onClickReply(event) {
  console.log('Reply button clicked.');

  document.getElementById('postBox').innerHTML += `
    <div class="comment-box-${i}"><input class="comment-box__name-${i}" type="text" placeholder="Your name" />
    <textarea
      class="comment-box__desc-${i}"
      cols="30"
      rows="3"
      placeholder="comment"
    ></textarea>
    <button class="comment-box__post-${i}">Post</button>
    <button class="comment-box__cancel-${i}">Cancel</button>
</div>
    `;
  i++;
}
