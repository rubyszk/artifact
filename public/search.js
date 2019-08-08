$('.seach').on('submit', (event) => {
    event.preventDefault();
    const search = $('.search').val();
    const BASE_URL = 'http://localhost:3000' || 'https://artifactarchive.herokuapp.com/'

    $.ajax({
        url: `${BASE_URL}/search/${search}`,
    })

})