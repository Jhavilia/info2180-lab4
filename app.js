document.addEventListener('DOMContentLoaded', () => {
    const searchBtn = document.getElementById('search-btn');
    const searchBox = document.getElementById('search-box');
    const resultDiv = document.getElementById('result');

    searchBtn.addEventListener('click', () => {
        
        const query = searchBox.value.trim();
        const encodedQuery = encodeURIComponent(query);

        
        fetch(`superheroes.php?query=${encodedQuery}`)
            .then(response => response.text())
            .then(data => {
                
                resultDiv.innerHTML = data;
            })
            .catch(error => {
                console.error('Error fetching superhero data:', error);
                resultDiv.innerHTML = '<p style="color: red;">An error occurred while searching.</p>';
            });
    });
});