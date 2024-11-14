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
}

let eliza = new Eliza();

console.log(eliza.responses);
console.log(eliza.reflections);