# Y4_Emerging_Technologies

## Trigram Tasks Program

### How To Run

* Clone the repo

* Install Jupyter Lab by running the following command in the terminal
`pip install jupyterlab`

* Run Jupyter Lab by running the following command in the terminal
`jupyter lab`

* In the Jupyter Lab navigate to the cloned repo and open it

* Run the program

### Trigram Program Description

* This program first creates a trigram model from text files of books.
The model is a data structure of sequences of three characters, and the number of times each sequence appeared across all of the books.

* Using the created model the program then generates new text, character by character until a given character length has been reached.
It does this by taking a two character sequence, and finding all of the three character sequences from the trigram model that start with the two character sequence. One of the these three character sequences are chosen, using the counts as weights. The final character is appended to the new text. The process repeats this steps, always taking the last two characters of the generated text, until the given character limit is reached.

* The program then analyzes the model by comparing the the generated text to a list of real words, and finding out the percentage of real words in the generated text.

* Finally the program outputs the trigram model as JSON to a JSON file.
---
## Eliza Chatbot Program
