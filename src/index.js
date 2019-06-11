document.addEventListener('DOMContentLoaded', () => {
  console.log('%c DOM Content Loaded and Parsed!', 'color: magenta')

  let imageId = 2809

  const imageURL = `https://randopic.herokuapp.com/images/${imageId}`

  const likeURL = `https://randopic.herokuapp.com/likes/`

  const commentsURL = `https://randopic.herokuapp.com/comments/`

  const fetchSomething = async() =>{

    try {
      const response = await fetch(imageURL)
      const result = await response.json()
      console.log(result)
    } catch(err) {
      console.error(err)
    }
  }

  fetchSomething()

  const postSomething = async() =>{
    const reqBody = {image_id: 2809}
    try {
      const response = await fetch(url, {
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

})

const li = document.createElement("li")
li.textContent = "I want my api info here"
const ul = document.querySelector("#likes")
ul.appendChild(li)
