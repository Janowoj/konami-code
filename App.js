let pressedKeys = [];
const code = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

window.addEventListener('keydown', (e) => {

    pressedKeys.push(e.key);
    pressedKeys.splice(-code.length - 1, pressedKeys.length - code.length);
    console.log(pressedKeys);
    if (pressedKeys.join('').includes(code.join(''))) {
        console.log('KONAMI CODE WORKS');
    }
});