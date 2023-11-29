function getResults() {
    var subjectCount = document.getElementById("subjectCount").value;
    var resultsDiv = document.getElementById("results");

    // Validate input
    if (!subjectCount || subjectCount < 1) {
        alert("Please enter a valid number of subjects.");
        return;
    }

    // Get results for each subject
    var results = [];
    for (var i = 1; i <= subjectCount; i++) {
        var result = prompt("Enter the result for Subject " + i + ":");
        if (isNaN(result) || result === "" || result < 0 || result > 100) {
            alert("Please enter valid results for Subject " + i + ".");
            return;
        }
        results.push(Number(result));
    }

    // Calculate average
    var totalResults = results.reduce((acc, result) => acc + result, 0);
    var average = totalResults / subjectCount;

    // Display results
    resultsDiv.innerHTML = "<h2>Results</h2>";
    for (var i = 0; i < subjectCount; i++) {
        resultsDiv.innerHTML += "Subject " + (i + 1) + ": " + results[i] + "<br>";
    }
    resultsDiv.innerHTML += "<br>Overall Average: " + average.toFixed(2) + "<br>";
    resultsDiv.innerHTML += "Overall Grade: " + calculateGrade(average);
}

function calculateGrade(average) {
    if (average >= 90) {
        return 'A';
    } else if (average >= 80) {
        return 'B';
    } else if (average >= 70) {
        return 'C';
    } else if (average >= 60) {
        return 'D';
    } else if (average >= 50) {
        return 'E';
    } else {
        return 'F';
    }
}
