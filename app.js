document.addEventListener('DOMContentLoaded', () => {
    const searchBtn = document.getElementById('search-btn');

    searchBtn.addEventListener('click', () => {
        
        fetch('superheroes.php')
            .then(response => response.text())
            .then(data => {
                
                alert(data);
            })
            .catch(error => {
                console.error('Error fetching superheroes:', error);
            });
    });
});