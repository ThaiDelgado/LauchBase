const posts = document.querySelectorAll(".post")
const postModal = document.querySelector("post-modal")

for(let post of posts){
    post.addEventListener("click", function(){
        postModal.classList.add("active")
    })
}

document.querySelector(".post-close").addEventListener("click", function(){
    postModal.classList.remove("active")
})

