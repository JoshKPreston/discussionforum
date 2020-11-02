import { ProxyState } from "../AppState.js"
import { postService } from "../Services/PostService.js"


function _draw() {
<<<<<<< HEAD
  let template = /*html*/ `
    <!-- form to create new posts -->
    <div id="postHeader" class="row post-header">
        <form class="col-4" onsubmit="app.postController.create(event)">
            <input class="form-control input" id="postTitle" type="text" name="postTitle" placeholder="Create new post..." required>
            <input class="form-control input" id="postQuestion" type="text" name="postQuestion" placeholder="Add question..." required>
            <button class="btn btn-outline-success btn-lg btn-block create-post-btn" type="submit">Create Post</button>
        </form>
    </div>
  `;
=======
  let template = ''
>>>>>>> 9279837aa5b7d2e4b99a8c6eade31b54ef8ee06b
  ProxyState.posts.forEach(p => template += p.Template)
  document.getElementById('posts').innerHTML = template
}

export default class PostController {
  constructor() {
    console.log("hello from post controller")
    this.getPosts()
    ProxyState.on("posts", _draw)
  }

  getPosts() {
    try {
      postService.getPosts()
    } catch (error) {
      console.error(error);
    }
  }
  
  create(e) {
    e.preventDefault()
    let form = e.target
    let postQuestion = form.postQuestion
    let postTitle = form.postTitle
    console.log(postQuestion.value)
    let data = {}
    data.title = postTitle.value
    data.question = postQuestion.value
    try {
      postService.create(data)
    } catch (error) {
      console.error(error);
    }
  }
}
