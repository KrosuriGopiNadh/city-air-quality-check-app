const getQuality = async () => {
  const apikey = "9GEoN75ki5xexD1aD0FZWg==jpEpBSPSkbR2gn2z";
  const city = document.getElementById("inp").value.trim();
  const result = document.getElementById("get-quality");
  const url = `https://api.api-ninjas.com/v1/airquality?city=${city}`;
  try {
    result.textContent = "Loading...";
    const res = await fetch(url, {
      headers: { "X-Api-Key": apikey },
    });
    const data = await res.json();
    result.textContent = `
            🌆 City: ${city.toUpperCase()}
            🟢 AQI: ${data.overall_aqi}
          `;
  } catch (error) {
    console.error(error);
    result.textContent = "❌ Failed to fetch data. Try a different city.";
  }
};
