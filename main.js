window.addEventListener('DOMContentLoaded', (e) => {

    //handle vote buttons
    let votes = document.querySelectorAll('.vote button');
    votes.forEach((vote) => {
        addEventListener('click', (e) => {
            console.log(e.target.closest('div').querySelector('.progress-bar').pr);
        })
    });
})