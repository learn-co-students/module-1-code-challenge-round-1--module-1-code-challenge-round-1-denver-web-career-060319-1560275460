document.addEventListener('DOMContentLoaded', () => {
  // console.log('%c DOM Content Loaded and Parsed!', 'color: magenta')
  })

  let imageId = 2809

  const imageURL = `https://randopic.herokuapp.com/images/${imageId}`

  const likeURL = `https://randopic.herokuapp.com/likes/`

  const commentsURL = `https://randopic.herokuapp.com/comments/`
  const domImage = document.getElementById('image')
  domImage.src = ""
  const name = document.getElementById('name')
  const likeCount = document.getElementById('likes')
  const comments = document.getElementById('comments')
  const likeButton = document.getElementById('like_button')
  const submitButton = document.querySelectorAll('input')[1]
  const textBox = document.getElementById('comment_input')


function fetchImage(){
  return fetch(imageURL)
  .then(response => response.json())
  .then(response => {
    domImage.src = response.url
    return response.id
  })
}

function fetchName(){
  return fetch(imageURL)
  .then(response => response.json())
  .then(response => {
    name.innerText = response.name
    return response.id
  })
}

function fetchLikeCount(){
  return fetch(imageURL)
  .then(response => response.json())
  .then(response => {
    likeCount.innerText = response.like_count
    return response.id
  })
}

function fetchComments(){
  return fetch(imageURL)
  .then(response => response.json())
  .then(response => {
    response.comments.forEach(function(curent){
      li = document.createElement('li')
      li.textContent = curent.content
      comments.appendChild(li)
    }
    )
    return response.id
  })
}

likeButton.addEventListener("click", function(e){
  let likes = parseInt(likeCount.innerText)
  likeCount.innerText = likes + 1
  let currentLikes = likeCount.innerText
  const postLikes = async () =>{
   const reqBody = {image_id: 2809, image_likes:currentLikes}
   try {
     const response = await fetch(likeURL, {
       method: 'POST',
       body: JSON.stringify(reqBody),
       headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json'
               }
       })
     } catch(err){

       console.error(err)
     }
 }
postLikes()
})

submitButton.addEventListener("click", function(e){
  e.preventDefault()
let newComment = textBox.value
li = document.createElement('li')
li.textContent = newComment
comments.appendChild(li)
textBox.value = ""
const postComments = async () =>{
 const reqBody = {image_id: 2809, content:newComment}
 try {
   const response = await fetch(commentsURL, {
     method: 'POST',
     body: JSON.stringify(reqBody),
     headers: {
       'Accept': 'application/json',
       'Content-Type': 'application/json'
             }
     })
   } catch(err){

     console.error(err)
   }
}
postComments()
})

fetchComments()
fetchLikeCount()
fetchName()
fetchImage()
