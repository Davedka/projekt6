document.getElementById("a").addEventListener("input", solveEquation);
document.getElementById("b").addEventListener("input", solveEquation);
document.getElementById("c").addEventListener("input", solveEquation);

function solveEquation() {
    const a = parseFloat(document.getElementById("a").value);
    const b = parseFloat(document.getElementById("b").value);
    const c = parseFloat(document.getElementById("c").value);

    const resultDiv = document.getElementById("result");
    const explanationDiv = document.getElementById("explanation");

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        resultDiv.textContent = "Kérlek, érvényes számokat adj meg.";
        explanationDiv.textContent = "";
        return;
    }

    const discriminant = b * b - 4 * a * c;

    if (discriminant < 0) {
        const realPart = -b / (2 * a);
        const imaginaryPart = Math.sqrt(-discriminant) / (2 * a);
        resultDiv.textContent = `Komplex gyökök: x₁ = ${realPart.toFixed(2)} + ${imaginaryPart.toFixed(2)}i, x₂ = ${realPart.toFixed(2)} - ${imaginaryPart.toFixed(2)}i`;
        explanationDiv.textContent = "A diszkrimináns negatív, ezért az egyenletnek nincs valós gyöke, hanem két komplex gyöke van.";
    } 
    
    else if (discriminant === 0) {
        const x = -b / (2 * a);
        resultDiv.textContent = `Egy valós gyök: x = ${x.toFixed(2)}`;
        explanationDiv.textContent = "A diszkrimináns nulla, ezért az egyenletnek egy valós gyöke van (dupla gyök).";
    } 
    
    else {
        const x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        const x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        resultDiv.textContent = `Két valós gyök: x₁ = ${x1.toFixed(2)}, x₂ = ${x2.toFixed(2)}`;
        explanationDiv.textContent = "A diszkrimináns pozitív, ezért az egyenletnek két különböző valós gyöke van.";
    }
}
