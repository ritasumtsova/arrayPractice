class Lamp {
    #id;
    #status;

    constructor(id) {
        this.#id = id;
        this.#status = false;
    }

    get id () {
        return this.#id;
    }

    get status () {
        return this.#status;
    }

    on () {
        this.#status = true;
    }

    off () {
        this.#status = false;
    }
}