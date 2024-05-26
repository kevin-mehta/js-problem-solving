document.addEventListener('DOMContentLoaded', (event) => {
  console.log('DOM loaded.');

  let eleReplyButton = document.getElementById('btnReply');
  eleReplyButton.addEventListener('click', (event) => {
    console.log('Reply button clicked.');

    document.getElementById('postBox').innerHTML += `
    <div class="comment-box"><input class="comment-box__name" type="text" placeholder="Your name" />
	<textarea
	  class="comment-box__desc"
	  cols="30"
	  rows="3"
	  placeholder="comment"
	></textarea>
	<button class="comment-box__post">Post</button>
	<button class="comment-box__cancel">Cancel</button>
</div>
    `;
  });
});
