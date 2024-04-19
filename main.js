
const getCountry = async () => {
  try {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const data = await response.json();
    let htmlData = data.map(item => `
      <div class="card" style="width: 18rem;">
        <img class="card-img-top" src="${item.flags.png}" alt="${item.name.common} flag">
        <div class="card-body">
          <h5 class="card-title">${item.name.common}</h5>
        </div>
      </div>
    `).join('');
    document.getElementById('result').innerHTML = htmlData;
  } catch (error) {
    console.error('Error fetching countries:', error);
  }
};

getCountry();