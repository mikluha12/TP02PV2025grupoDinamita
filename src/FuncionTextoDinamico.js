export function setupTextLiveUpdate(inputId, outputId) {
    const textInput = document.getElementById(inputId);
    const displayText = document.getElementById(outputId);

    textInput.addEventListener('input', () => {
        displayText.textContent = textInput.value;
    });
}