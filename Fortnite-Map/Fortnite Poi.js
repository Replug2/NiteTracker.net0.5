// HTML Element References
const poiSwitch = document.getElementById("poiSwitch");
const mapContainer = document.getElementById("map-container");
const map = document.getElementById("map");
const zoomInButton = document.getElementById("zoomIn");
const zoomOutButton = document.getElementById("zoomOut");

// POI Data
const pois = [
  {
    id: "Athena.Location.UnNamedPOI.GasStation.03",
    name: "BURD To Go",
    location: { x: -8568, y: -17134 },
  },
  {
    id: "Athena.Location.UnNamedPOI.Landmark.14",
    name: "Kite's Flight",
    location: { x: 107605, y: 89675 },
  },
  {
    id: "Athena.Location.UnNamedPOI.Landmark.20",
    name: "Splitting Pins",
    location: { x: -44328, y: 102776 },
  },
  {
    id: "Athena.Location.POI.Generic.17",
    name: "BRUTAL BOXCARS",
    location: { x: 9691, y: -34932 },
  },
  {
    id: "Athena.Location.POI.Generic.18",
    name: "MASKED MEADOWS",
    location: { x: 15134, y: 76343 },
  },
  {
    id: "Athena.Location.POI.Generic.04",
    name: "CANYON CROSSING",
    location: { x: -57184, y: 71601 },
  },
  {
    id: "Athena.Location.UnNamedPOI.Landmark.10",
    name: "Yacht Stop",
    location: { x: 6469, y: -110943 },
  },
  {
    id: "Athena.Location.UnNamedPOI.Landmark.32",
    name: "Way Station",
    location: { x: 39927, y: 88133 },
  },
  {
    id: "Athena.Location.POI.Generic.08",
    name: "WHIFFY WHARF",
    location: { x: -88950, y: -84496 },
  },
  {
    id: "Athena.Location.POI.Generic.10",
    name: "PUMPED POWER",
    location: { x: 50225, y: -57403 },
  },
  {
    id: "Athena.Location.UnNamedPOI.Landmark.11",
    name: "Moisty Manor",
    location: { x: -64686, y: -72055 },
  },
];

// POI Marker Elements
const poiElements = [];
let scale = 1; // Default scale for the map

// Toggle POI Visibility
poiSwitch.addEventListener("change", (e) => {
  const poiMode = e.target.checked; // Check if POIs should be displayed
  if (poiMode) {
    displayPOIs();
  } else {
    clearPOIs();
  }
});

// Display POIs on the map
function displayPOIs() {
  pois.forEach((poi) => {
    const x = poi.location.x; // x-coordinate
    const y = poi.location.y; // y-coordinate

    // Create a POI element
    const poiElement = document.createElement("div");
    poiElement.classList.add("poi-marker");
    poiElement.style.left = `${(x + 100000) / 1000}px`; // Adjust for scaling
    poiElement.style.top = `${(y + 100000) / 1000}px`; // Adjust for scaling
    poiElement.title = poi.name; // Tooltip with POI name

    // Append POI to the map container
    mapContainer.appendChild(poiElement);

    // Store the POI element
    poiElements.push(poiElement);
  });
}

// Clear POIs from the map
function clearPOIs() {
  poiElements.forEach((poiElement) => {
    poiElement.remove(); // Remove each POI element from the DOM
  });
  poiElements.length = 0; // Clear the array
}

// Zoom In
zoomInButton.addEventListener("click", () => {
  scale = Math.min(scale + 0.1, 2); // Limit zoom-in to 2x
  map.style.transform = `scale(${scale})`;
});

// Zoom Out
zoomOutButton.addEventListener("click", () => {
  scale = Math.max(scale - 0.1, 0.5); // Limit zoom-out to 0.5x
  map.style.transform = `scale(${scale})`;
});
