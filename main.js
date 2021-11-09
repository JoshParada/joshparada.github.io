window.addEventListener('DOMContentLoaded', (e) => {

    //handle search
    document.querySelector('#search').addEventListener('click', (e) => {
        e.preventDefault();
        let query = document.querySelector('#search-text').value;
        console.log("Query: ",query)
        //got this syntax from: https://stackoverflow.com/questions/503093/how-do-i-redirect-to-another-webpage
        if(query === ''){
            alert("Invalid search. Please try again.");
        } else{
            window.location.href=`search.html?${query}`;
        }
    })

    //handle vote buttons
    let votes = document.querySelectorAll('.vote button');
    // votes.forEach((vote) => {
    //     addEventListener('click', (e) => {
    //         console.log(e.target.closest('div').querySelector('.progress-bar'));
    //     })
    // });
})