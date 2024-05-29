document.addEventListener('DOMContentLoaded', function() {
    const text = "BUAT UNGA YANG KAYA TAI";
    const typingTextElement = document.getElementById('typing-text');
    const typingSpeed = 100; // Kecepatan mengetik dalam milidetik

    let index = 0;

    function typeText() {
        if (index < text.length) {
            typingTextElement.textContent += text.charAt(index);
            index++;
            setTimeout(typeText, typingSpeed);
        } else {
            typingTextElement.classList.add('blinking-text');
        }
    }

    typeText();
});
