//your code here
const input = document.getElementById('evaluatedText');
const count = document.getElementById('letterCount');

input.addEventListener('input', () => {
  count.textContent = input.value.length;
});