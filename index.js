document.getElementById("a").addEventListener("input", solveEquation);
document.getElementById("b").addEventListener("input", solveEquation);
document.getElementById("c").addEventListener("input", solveEquation);

function solveEquation() {
    const a = parseFloat(document.getElementById("a").value);
    const b = parseFloat(document.getElementById("b").value);
    const c = parseFloat(document.getElementById("c").value);
    
    const resultDiv = document.getElementById("result");
    const instructionsDiv = document.getElementById("instructions");
    
    // Input validation message
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        resultDiv.textContent = "Kérlek, érvényes számokat adj meg a három paraméterhez (a, b, c).";
        return;
    }
    
    // Checking if 'a' is zero (not a quadratic equation)
    if (a === 0) {
        resultDiv.textContent = "A 'a' értékének nem lehet nulla, mivel akkor nem másodfokú egyenletről van szó.";
        return;
    }
    
    const d = b * b - 4 * a * c;

    // Solution for complex roots
    if (d < 0) {
        const realPart = -b / (2 * a);
        const imaginaryPart = Math.sqrt(-d) / (2 * a);
        resultDiv.innerHTML = `Komplex gyökök találhatók: <br>
        x₁ = ${realPart.toFixed(2)} + ${imaginaryPart.toFixed(2)}i <br>
        x₂ = ${realPart.toFixed(2)} - ${imaginaryPart.toFixed(2)}i`;
    } 
    // Solution for one real root
    else if (d === 0) {
        const x = -b / (2 * a);
        resultDiv.innerHTML = `Egy valós gyök található: <br>
        x = ${x.toFixed(2)}.`;
    } 
    // Solution for two real roots
    else {
        const x1 = (-b + Math.sqrt(d)) / (2 * a);
        const x2 = (-b - Math.sqrt(d)) / (2 * a);
        resultDiv.innerHTML = `Két valós gyök található: <br>
        x₁ = ${x1.toFixed(2)}, <br>
        x₂ = ${x2.toFixed(2)}.`;
    }
}
