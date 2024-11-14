# Y4_Emerging_Technologies

## Trigram Tasks Program

### How To Run

* Clone the repo

* Install Jupyter Lab by running the following command in the terminal
`pip install jupyterlab`

* Navigate to the cloned repo in the terminal

* Run Jupyter Lab by running the following command in the terminal
`jupyter lab`

* Run the program

### Trigram Program Description

* This program first creates a trigram model from text files of books.
The model is a data structure of sequences of three characters, and the number of times each sequence appeared across all of the books.

* Using the created model the program then generates new text, character by character until a given character length has been reached.
It does this by taking a two character sequence, and finding all of the three character sequences from the trigram model that start with the two character sequence. One of the these three character sequences are chosen, using the counts as weights. The final character is appended to the new text. The process repeats this steps, always taking the last two characters of the generated text, until the given character limit is reached.

* The program then analyses the model by comparing the generated text to a list of real words, and finding out the percentage of real words in the generated text.

* Finally the program outputs the trigram model as JSON to a JSON file.
---
## Eliza Chatbot Program

### Program Description

ELIZA is an early natural language processing computer program developed from 1964 to 1967 at MIT by Joseph Weizenbaum. This is an implementation of that program using HTML and CSS for the interface and plain JavaScript for the chatbot logic and will be deployed to GitHub Pages.
