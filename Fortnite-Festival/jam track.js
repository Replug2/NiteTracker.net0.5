// Mock data for search results
var items = [
  { name: 'OG (Future Remix)', imageUrl: 'https://admin.esports.gg/wp-content/uploads/2023/12/2023-12-13_10_32_36-Fortnite-removebg-preview.png' },
  { name: 'Show Them Who We Are', imageUrl: 'https://admin.esports.gg/wp-content/uploads/2023/12/2023-12-13_10_32_46-Fortnite-removebg-preview-1.png' },
  { name: 'I still haven\'t found what I\'m looking for', imageUrl: 'https://admin.esports.gg/wp-content/uploads/2024/01/2024-01-29_19_52_33-Fortnite-removebg-preview.png' }
  // Add more items as needed
];

// Function to perform search
function search() {
  var searchTerm = document.getElementById('search-input').value.toLowerCase();
  var filteredItems = items.filter(function(item) {
    return item.name.toLowerCase().includes(searchTerm);
  });
  displayResults(filteredItems);
}

// Function to display search results
function displayResults(results) {
  var searchResults = document.getElementById('search-results');
  searchResults.innerHTML = ''; // Clear previous results

  results.forEach(function(item) {
    var listItem = document.createElement('li');
    listItem.textContent = item.name;

    // Attach click event listener
    listItem.addEventListener('click', function() {
      selectJamTrack(item.name);
    });

    searchResults.appendChild(listItem);
  });
}

// Function to handle jam track selection
function selectJamTrack(jamTrackName) {
  document.getElementById("jam-track-name").textContent = jamTrackName;
}

// Event listener for search input
document.getElementById('search-input').addEventListener('input', search);