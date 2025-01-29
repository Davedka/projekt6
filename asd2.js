document.getElementById("a").addEventListener("input", solveEquation);
document.getElementById("b").addEventListener("input", solveEquation);
document.getElementById("c").addEventListener("input", solveEquation);

function solveEquation() {
    const a = parseFloat(document.getElementById("a").value);
    const b = parseFloat(document.getElementById("b").value);
    const c = parseFloat(document.getElementById("c").value);

    const resultDiv = document.getElementById("result");

    
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        resultDiv.textContent = "Kérlek, érvényes számokat adj meg.";
        return;
    }

    const discriminant = b * b - 4 * a * c;

    
    if (discriminant < 0) {
        const realPart = -b / (2 * a);
        const imaginaryPart = Math.sqrt(-discriminant) / (2 * a);
        resultDiv.textContent = `Komplex gyökök: x₁ = ${realPart.toFixed(2)} + ${imaginaryPart.toFixed(2)}i, x₂ = ${realPart.toFixed(2)} - ${imaginaryPart.toFixed(2)}i`;
    } 
    
    else if (discriminant === 0) {
        const x = -b / (2 * a);
        resultDiv.textContent = `Egy valós gyök: x = ${x.toFixed(2)}`;
    } 
    
    else {
        const x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        const x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        resultDiv.textContent = `Két valós gyök: x₁ = ${x1.toFixed(2)}, x₂ = ${x2.toFixed(2)}`;
    }
}
