// js/game.js

// Simulate fetching data from a server
async function fetchNationData() {
    // Replace this with actual API call
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                name: "Example Nation",
                currency: "Example Dollar",
                governmentType: "Democracy"
            });
        }, 1000);
    });
}

async function fetchEconomyData() {
    // Replace this with actual API call
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                gdp: "1,000,000",
                inflationRate: "2%",
                unemploymentRate: "5%",
                currencyValue: "1.00",
                tradeBalance: "0",
                governmentDebt: "100,000"
            });
        }, 1000);
    });
}

async function fetchInfrastructureData() {
    // Replace this with actual API call
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                roads: "100 km",
                railways: "50 km",
                cyclistPaths: "20 km",
                dams: "5",
                airports: "2"
            });
        }, 1000);
    });
}

// Update the dashboard with fetched data
async function updateDashboard() {
    try {
        const nationData = await fetchNationData();
        const economyData = await fetchEconomyData();
        const infrastructureData = await fetchInfrastructureData();

        document.getElementById('nationName').textContent = nationData.name;
        document.getElementById('currency').textContent = nationData.currency;
        document.getElementById('governmentType').textContent = nationData.governmentType;
        
        // Populate other sections
        document.getElementById('economy').innerHTML = `
            <div class="card">
                <h3>GDP</h3>
                <p>${economyData.gdp}</p>
            </div>
            <div class="card">
                <h3>Inflation Rate</h3>
                <p>${economyData.inflationRate}</p>
            </div>
            <div class="card">
                <h3>Unemployment Rate</h3>
                <p>${economyData.unemploymentRate}</p>
            </div>
            <div class="card">
                <h3>Currency Value</h3>
                <p>${economyData.currencyValue}</p>
            </div>
            <div class="card">
                <h3>Trade Balance</h3>
                <p>${economyData.tradeBalance}</p>
            </div>
            <div class="card">
                <h3>Government Debt</h3>
                <p>${economyData.governmentDebt}</p>
            </div>
        `;
        
        document.getElementById('infrastructure').innerHTML = `
            <div class="card">
                <h3>Roads</h3>
                <p>${infrastructureData.roads}</p>
            </div>
            <div class="card">
                <h3>Railways</h3>
                <p>${infrastructureData.railways}</p>
            </div>
            <div class="card">
                <h3>Cyclist Paths</h3>
                <p>${infrastructureData.cyclistPaths}</p>
            </div>
            <div class="card">
                <h3>Dams</h3>
                <p>${infrastructureData.dams}</p>
            </div>
            <div class="card">
                <h3>Airports</h3>
                <p>${infrastructureData.airports}</p>
            </div>
        `;
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

// Call updateDashboard on page load
window.onload = updateDashboard;

// Logout button functionality
document.getElementById('logout-btn').addEventListener('click', function() {
    // Logic for logging out
    alert('Logged out!');
});


// Function to update nation overview section
function updateNationOverview(data) {
    document.getElementById('nationName').textContent = data.name || 'N/A';
    document.getElementById('currency').textContent = data.currency || 'N/A';
    document.getElementById('governmentType').textContent = data.governmentType || 'N/A';
}

// Function to load content dynamically
function loadContent(section) {
    fetch(`js/${section}.html`)
        .then(response => response.text())
        .then(data => {
            document.querySelector(`#${section}`).innerHTML = data;
        })
        .catch(error => console.error('Error loading content:', error));
}

// Event listeners for navigation links
document.querySelectorAll('.sidebar a').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const section = e.target.getAttribute('href').substring(1);
        loadContent(section);
    });
});

// Example function to handle logout
document.getElementById('logout-btn').addEventListener('click', () => {
    // Implement logout logic here
});
