document.getElementById("uploadForm").addEventListener("submit", function (e) {
    e.preventDefault();

    // Crop options
    let crops = ["Rice 🌾", "Wheat 🌾"];
    let crop = crops[Math.floor(Math.random() * crops.length)];

    let disease = "";
    if (crop.includes("Rice")) {
        // Rice-specific diseases
        let riceDiseases = ["Healthy Plant ✅", "Leaf Blast ❌", "Brown Spot ❌"];
        disease = riceDiseases[Math.floor(Math.random() * riceDiseases.length)];
    } else {
        // Wheat-specific diseases
        let wheatDiseases = ["Healthy Plant ✅", "Rust ❌"];
        disease = wheatDiseases[Math.floor(Math.random() * wheatDiseases.length)];
    }

    // Nutrient status (common for both)
    let nutrients = ["Sufficient 💧", "Deficient ⚠️"];
    let nutrient = nutrients[Math.floor(Math.random() * nutrients.length)];

    // Show result
    document.getElementById("result").innerHTML = `
        <h3>Prediction Result:</h3>
        🌱 <b>Crop:</b> ${crop} <br>
        🦠 <b>Disease:</b> ${disease} <br>
        💧 <b>Nutrient Status:</b> ${nutrient}
    `;
});