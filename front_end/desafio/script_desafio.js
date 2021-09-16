const modal_overlay = document.querySelector(".modal-overlay")
const posts = document.querySelectorAll(".post")

for(let post of posts){
    post.addEventListener("click", function(){
        const postId = post.getAttribute('id')
        modal_overlay.classList.add('active')
        modal_overlay.querySelector('iframe').src = ""
    })
}

document.querySelector(".modal-close").addEventListener("click", function(){
    modal_overlay.classList.remove("active")
})

