class Qcm {
    #id;
    #name;
    #theme;
    #subject;
    #author;
    #nbpoints;
    #question;  // Add property for the question
    #options;   // Add property for options

    constructor(qcmToCreate) {
        this.#id = qcmToCreate.id;
        this.#name = qcmToCreate.name;
        this.#theme = qcmToCreate.theme;
        this.#subject = qcmToCreate.subject;
        this.#author = qcmToCreate.author;
        this.#nbpoints = qcmToCreate.nbpoints;
        this.#question = qcmToCreate.question; // Initialize the question
        this.#options = qcmToCreate.options || []; // Initialize the options (default to an empty array)
    }

    // Existing getters and setters...

    get question() {
        return this.#question;
    }

    set question(value) {
        this.#question = value;
    }

    get options() {
        return this.#options;
    }

    set options(value) {
        this.#options = value;
    }

    toJSON(key) {
        console.log(key);
        return { id: this.#id, name: this.#name };
    }
}

module.exports = Qcm;
