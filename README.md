# Y4_Emerging_Technologies

## Trigram Tasks Program

### How to Run

1. Clone the repository:
   ```bash
   git clone https://github.com/PatrickDuffy1/Y4_Emerging_Technologies.git
   ```

2. Install Jupyter Lab by running the following command in your terminal:
   ```bash
   pip install jupyterlab
   ```

3. Navigate to the cloned repository in your terminal:
   ```bash
   cd Y4_Emerging_Technologies
   ```

4. Start Jupyter Lab:
   ```bash
   jupyter lab
   ```

5. Open the relevant notebook and run the program.

### Trigram Program Description

This program builds a trigram model from the text of books, where the trigram consists of sequences of three characters and their occurrence frequency across all input texts.

#### Key Features:
- **Text Generation:**  
   The program generates new text, character by character, using the trigram model.  
   It starts with a random two-character sequence and chooses the next character based on the trigram model, using the counts as weights for selection.  
   The process repeats, always considering the last two characters of the generated text, until a specified character length is reached.

- **Model Analysis:**  
   After generating the text, the program analyzes the output by comparing it to a list of real words.  
   It calculates the percentage of real words in the generated text, offering insight into how "realistic" the generated text is.

- **Model Export:**  
   The trigram model is saved as a JSON file for later use or analysis.

### Example Workflow:

1. Load a set of books (text files).
2. Build the trigram model.
3. Generate text using the model.
4. Analyze the generated text (e.g., word accuracy).
5. Export the model as a JSON file.

---
## Eliza Chatbot Program

### Program Description

ELIZA is an early natural language processing computer program developed from 1964 to 1967 at MIT by Joseph Weizenbaum. This is an implementation of that program using HTML and CSS for the interface and plain JavaScript for the chatbot logic and is also deployed to GitHub Pages.

### How to use (without cloning the repo)
Navigate to https://patrickduffy1.github.io/Y4_Emerging_Technologies/

## Features

- **Client-side chatbot**: The chatbot runs entirely in the browser using only HTML, CSS, and plain JavaScript.
- **Conversation history**: Displays a conversation history in the chat interface.
- **No external dependencies**: No third-party libraries or frameworks are used.

## How it Works

The ELIZA chatbot uses a simple set of predefined rules to simulate a conversation. It can interpret user input and respond with pre-programmed responses based on keywords or patterns in the user's messages. The bot is designed to imitate a Rogerian therapist, offering empathetic and reflective replies.

## Project Structure

- **index.html**: The main page that includes the chatbot's user interface, including a text input and an area to display the conversation history.
- **style.css**: Contains styles for the chat interface, making it visually appealing and user-friendly.
- **eliza.js**: Implements the logic for the ELIZA chatbot, including parsing user input and generating responses.

## Getting Started

1. Clone this repository to your local machine:

    ```bash
    git clone https://github.com/PatrickDuffy1/Y4_Emerging_Technologies.git
    ```

2. Navigate to the `eliza` directory:

    ```bash
    cd Y4_Emerging_Technologies/eliza
    ```

3. Open `index.html` in your browser to try out the chatbot.
