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

    let scorePage = document.querySelector('#scores-area');
    console.log(scorePage)
    let scoreContent = '';
    if(scorePage !== null){
        fetch('https://www.balldontlie.io/api/v1/games?seasons[]=2021', {
            method: 'get'
        })
        .then(response => response.json())
        .then(
            jsonData => {
                //console.log(jsonData.data)
                if(jsonData.data.length > 0){
                    jsonData.data.forEach((game) => {
                        scoreContent += `
                        <div class="scorecard">
                        <div class="row g-0">
                            <div class="col-md-8">
                                <h4>${game.date.substring(0, 10)}</h4>
                                <p><img src="/assets/${game.home_team.abbreviation}.png" alt="" /> ${game.home_team.full_name}<br>
                                <img src="/assets/${game.visitor_team.abbreviation}.png" alt="" /> ${game.visitor_team.full_name}</p>
                            </div>
                            <div class="col-md-4">
                                <div class="card-body">
                                    <h4>${game.status}</h4>
                                    <p>${game.home_team_score}<br>
                                    ${game.visitor_team_score}</p>
                                </div>
                            </div>
                        </div>
                        </div>`
                    })
                    scorePage.innerHTML = scoreContent;
                    console.log(jsonData.data)
                }else {
                    scorePage.innerHTML = "Sorry, no scores are available just yet.";
                }
            })
        .catch(err => {
                //error block
        })
    }      
})

function bigImg(x) {
    x.style.height = "6%";
    x.style.width = "6%";
}

    
function normalImg(x) {
    x.style.height = "5%";
    x.style.width = "5%";
}
    
