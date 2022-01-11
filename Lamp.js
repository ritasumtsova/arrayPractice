class Lamp {
    #id;
    #status;

    constructor(id, status = false) {
        this.#id = id;
        this.#status = status;
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