class Eliza 
{
    constructor() 
    {
        // Psychobabble taken from the python code from the lecture and converted to javascript.
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
        this.responses = {
            'hello|hi|hey': [
                "Hello! How are you feeling today?",
                "Hi there! What’s on your mind?",
                "Hey! How can I help you?"
            ],
            'you remind me of (.*)': [
                "Why do you think I remind you of $1?",
                "What makes you think of $1 when talking to me?",
                "Is it a good feeling to be reminded of $1?"
            ],
            '(.*) mother|father|family|parent(.*)': [
                "Tell me more about your family.",
                "How does that make you feel about your family?",
                "What role does your family play in your thoughts?"
            ],
            'I need (.*)': [
                "Why do you need $1?",
                "Would getting $1 really help you?",
                "What if you didn’t need $1?"
            ],
            'I am (.*)': [
                "Why do you think you are $1?",
                "How long have you felt that way?",
                "What made you feel like $1?"
            ],
            'I feel (.*)': [
                "Why do you feel $1?",
                "Does feeling $1 happen often?",
                "How does that feeling affect you?"
            ],
            '(.*) (sorry|apologize)(.*)': [
                "No need to apologize.",
                "Apologies aren't necessary. Why do you feel that way?",
                "It’s okay to feel that way."
            ],
            'bye|goodbye|exit': [
                "Goodbye! Take care.",
                "Thank you for sharing. Goodbye!",
                "Bye! I’m here if you need to talk again."
            ],
            '(.*)': [
                "Can you tell me more?",
                "Why do you say that?",
                "How does that make you feel?",
                "What do you mean by that?",
                "Interesting... go on."
            ]
        };

        this.reflections = {
            "I": "you",
            "me": "you",
            "my": "your",
            "am": "are",
            "you": "I",
            "your": "my",
            "yours": "mine",
            "are": "am",
        };
    }

    respond(userInput)
    {
        userInput = userInput.toLowerCase();
        
        // Get all possible responses
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
        let responseInputs = Object.keys(this.responses);
        
        for(let i = 0; i < responseInputs.length; i++)
        {
            // Create RegExp string from current responseInputs.
            // Use 'i' for case-insensitive matching
            // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp
            let regexString = new RegExp(responseInputs[i], 'i');

            // Find if there was a match
            // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match
            let match = userInput.match(regexString);

            if(match != null)
            {
                let possibleResponses = this.responses[responseInputs[i]];

                // Chose a random response from the possible responses
                let response = possibleResponses[Math.round(Math.random() * (possibleResponses.length - 1))];

                // Replace placeholders in the response with matched groups (if there is any)
                for (let j = 1; j < match.length; j++) 
                {
                    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
                    response = response.replace(`$${j}`, this.reflect(match[j]));
                }

                return response;
            }
        }

        return "Can you tell me more?";
    }

    // Reflect user inputs
    reflect(sentence)
    {
        // Split sentence into individual words
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
        let words = sentence.split();

        // Deep copy of words
        // https://developer.mozilla.org/en-US/docs/Web/API/WorkerGlobalScope/structuredClone
        let finalWords = structuredClone(words);

        let newSentences = [];
        let finalSentence = "";

        // Create a new sentence for each of the possible reflections
        Object.keys(this.reflections).forEach(key => 
        {
            newSentences.push(sentence.replace(key, this.reflections[key]));
        });

        // For each new sentence, compare each word to the words in the original sentence.
        // If a word is different, add it to the final senetnce words array
        newSentences.forEach(newSentence => 
        {
            let newWords = newSentence.split();

            for(let i = 0; i < words.length; i++)
            {
                if(words[i] != newWords[i])
                {
                    finalWords[i] = newWords[i];
                }
            }
        });

        // Convert the final words into a single sentence
        for(let i = 0; i < finalWords.length; i++)
        {
            finalSentence += finalWords[i];

            if(i < finalWords.length - 1)
            {
                finalSentence += " ";
            }
        }

        return finalSentence;
    }
}

let eliza = new Eliza();

// Function to handle user input and Eliza's response
function sendMessage()
{
    const userInput = document.getElementById("user-input").value;

    // Return if the user message is empty
    if (userInput.trim() === "")
    { 
        return;
    }

    // Display user message
    displayMessage(userInput, "user");

    // Get Eliza's response
    const elizaResponse = eliza.respond(userInput);
    displayMessage(elizaResponse, "eliza");

    // Clear the input field
    document.getElementById("user-input").value = "";
}

// Function to display messages in the chat window
function displayMessage(message, sender) 
{
    const messagesDiv = document.getElementById("messages");
    const messageElement = document.createElement("div");

    // Set the class based on the sender
    messageElement.classList.add(sender === "user" ? "user-message" : "eliza-message");

    messageElement.textContent = message;
    messagesDiv.appendChild(messageElement);

    // Scroll to the latest message
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

// Detect Enter key press in the user input field and call sendMessage
document.getElementById('user-input').addEventListener('keydown', function(event) 
{
    // Check if the pressed key was the Enter key
    if (event.key === 'Enter') 
    {
      sendMessage();
    }
});