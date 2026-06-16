let string = "";
let memory = 0;

let buttons = document.querySelectorAll('.btn');
const input = document.querySelector('input');

function showMemoryHint(msg) {
  input.placeholder = msg;
  setTimeout(() => { input.placeholder = ""; }, 1500);
}

Array.from(buttons).forEach((button) => {
  button.addEventListener('click', (e) => {
    const label = e.target.innerHTML;

    if (label === '=') {
      try {
        string = String(eval(string));
        input.value = string;
      } catch {
        input.value = "Error";
        string = "";
      }
    }
    else if (label === 'C') {
      string = "";
      input.value = "";
    }
    else if (label === 'M+') {
      const current = parseFloat(input.value);
      if (!isNaN(current)) {
        memory += current;
        showMemoryHint("M: " + memory);
      }
    }
    else if (label === 'M-') {
      if (memory !== 0) {
        string = String(memory);
        input.value = string;
      } else {
        showMemoryHint("Memory empty");
      }
    }
    else {
      string += label;
      input.value = string;
    }
  });
});