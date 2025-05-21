document.addEventListener('DOMContentLoaded', () => {
  const restaurantList = document.getElementById('restaurant-list');
  const searchInput = document.getElementById('search');

  fetch('data/restaurants.json')
    .then(response => response.json())
    .then(data => {
      displayRestaurants(data);

      searchInput.addEventListener('input', () => {
        const filtered = data.filter(restaurant =>
          restaurant.name.toLowerCase().includes(searchInput.value.toLowerCase())
        );
        displayRestaurants(filtered);
      });
    });

  function displayRestaurants(restaurants) {
    restaurantList.innerHTML = '';
    restaurants.forEach(restaurant => {
      const card = document.createElement('div');
      card.className = 'restaurant-card';
      card.innerHTML = `
        <img src="${restaurant.image}" alt="${restaurant.name}">
        <h2>${restaurant.name}</h2>
        <p>${restaurant.description}</p>
      `;
      restaurantList.appendChild(card);
    });
  }
});
