document.addEventListener('DOMContentLoaded', () => {
    const searchBtn = document.getElementById('search-btn');
    const searchBox = document.getElementById('search-box');
    const resultDiv = document.getElementById('result');

    searchBtn.addEventListener('click', () => {
        const query = searchBox.value.trim();
        const encodedQuery = encodeURIComponent(query);

        fetch(`superheroes.php?query=${encodedQuery}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Unable to retrieve superhero data.');
                }

                return response.text();
            })
            .then(data => {
                resultDiv.innerHTML = data;
            })
            .catch(error => {
                console.error('Error fetching superhero data:', error);

                resultDiv.textContent = 'An error occurred while searching.';
            });
    });
});