This is a small project to detect key sequence called KONAMI CODE.

## How to use
1. Download the project
2. Open the index.html file in your browser
3. Press the keys in the following order: ↑ ↑ ↓ ↓ ← → ← → B A
4. Enjoy the result

## How it works
The code is pretty simple.
 It uses a variable called 'pressdKeys' to store the keys pressed by the user and a constant 'code' to store the correct sequence. 
 Every time a key is pressed, the code adds the key to the 'pressedKeys' variable and checks if the last keys pressed are equal to the 'code' variable.