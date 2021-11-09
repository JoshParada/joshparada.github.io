window.addEventListener('DOMContentLoaded', (e) => {

    //handle vote buttons
    let votes = document.querySelectorAll('.vote button');
    votes.forEach((vote) => {
        addEventListener('click', (e) => {
            console.log(e.target.closest('div').querySelector('.progress-bar').pr);
        })
    });
})


    function bigImg(x) {
      x.style.height = "40px";
      x.style.width = "40px";
    }
    
    function normalImg(x) {
      x.style.height = "32px";
      x.style.width = "32px";
    }
    