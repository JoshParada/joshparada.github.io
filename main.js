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
      x.style.height = "40%";
      x.style.width = "40%";
    }
    
    function normalImg(x) {
      x.style.height = "32%";
      x.style.width = "32%";
    }
    