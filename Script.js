document.getElementById("yes-btn").addEventListener("click", function() {
    window.location.href = "thankyou.html"; 
});

document.getElementById("no-btn").addEventListener("click", function() {
    let yesButton = document.getElementById("yes-btn");
    let currentSize = window.getComputedStyle(yesButton).fontSize;
    let newSize = parseFloat(currentSize) * 1.2 + "px";
    yesButton.style.fontSize = newSize;
});
