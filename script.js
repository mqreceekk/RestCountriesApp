let html = ``;
let container = document.getElementById('countries');

async function loadCountries() {
    const url = "countries.json";
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const countries = await response.json();

        countries.forEach(country => {
            html += `
            <div class="country-card">
                <img src="${country.flag}" class="countryflag">
                <h2>${country.name}</h2>
                <p class="population"><i class="fa-solid fa-users"></i> Population: ${country.population}</p>
                <p class="region"><i class="fa-solid fa-earth-americas"></i> Region: ${country.region}</p>
                <p class="capital"><i class="fa-solid fa-landmark"></i> Capital: ${country.capital}</p>
                <p class="language"><i class="fa-solid fa-language"></i> Language: ${country.language}</p>
                <p class="currency"><i class="fa-solid fa-money-bill-wave"></i> Currency: ${country.currency}</p>
                <p class="timezone"><i class="fa-solid fa-clock"></i> Timezone: ${country.timezone}</p>
            </div>
        `;
        })

        container.innerHTML = html;

        console.log(countries);
    } catch (error) {
        console.error(error.message);
    }
}

loadCountries();