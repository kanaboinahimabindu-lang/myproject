console.log("Website Loaded");
const exploreBtn = document.getElementById("exploreBtn");
const popup = document.getElementById("popup");

exploreBtn.addEventListener("click", () => {
    popup.classList.toggle("active");
});

const facts = [
    "Aloe Vera stores water in its leaves, allowing it to survive long periods of drought.",
    "Banana plants are actually giant herbs, not trees.",
    "Sunflowers follow the sun while growing.",
    "Tulsi has medicinal properties and is widely used in traditional medicine.",
    "Mint spreads through underground stems called runners.",
    "Bamboo is one of the fastest-growing plants in the world.",
    "The Venus Flytrap catches insects to obtain extra nutrients.",
    "Cactus plants can survive for months without rainfall.",
    "Lotus flowers can grow in muddy water yet bloom beautifully.",
    "Neem is known for its natural medicinal and pest-repellent properties.",
    "Some orchids can live for over 100 years.",
    "Coconut palms provide food, water, fiber, and timber.",
    "The world's tallest trees are Redwoods, reaching over 100 meters.",
    "Plants release oxygen during photosynthesis, supporting life on Earth.",
    "A single oak tree can produce thousands of acorns each year.",
    "Lavender is famous for its pleasant fragrance and calming effects.",
    "Tea comes from the leaves of the Camellia sinensis plant.",
    "Mango is often called the 'King of Fruits' in India.",
    "Water lilies float on the water's surface while rooted in the soil below.",
    "Trees communicate through underground fungal networks sometimes called the 'wood wide web'."
];

let currentFact = 0;

setInterval(function() {
    currentFact = (currentFact + 1) % facts.length;
    document.getElementById("fact-text").textContent = facts[currentFact];
}, 5000);
