class House {
    #lamps;

    constructor () {
        this.#lamps = [];
    }

    get lamps () {
        return this.#lamps;
    }

    getLampByIdFind (id) {
        return this.#lamps.find(lamp => lamp.id === id) || null;
    }

    getLampByIdForEach (id) {
        let neededLamp = null;

        this.#lamps.forEach(lamp => {
            if (lamp.id === id) {
                neededLamp = lamp;
            }
        })

        return neededLamp;
    }

    getLampByIdFilter (id) {
        const [lamp = null] = this.#lamps.filter(lamp => lamp.id === id);
        return lamp;
    }

    addLampPush (lamp) {
        this.#lamps.push(lamp);
    }

    addLampLength (lamp) {
        this.#lamps[this.#lamps.length] = lamp;
    }

    deleteLampByIdFilter (id) {
        this.#lamps = this.#lamps.filter(lamp => lamp.id !== id);
    }

    deleteLampByIdFindPlusSplice (id) {
        const neededLamp = this.#lamps.findIndex(lamp => lamp.id === id);
        
        if(neededLamp) {
            this.#lamps.splice(neededLamp, 1);
        }
    }

    get lampsId () {
        return this.#lamps.map(lamp => lamp.id);
    }

    isAllOn () {
        return this.#lamps.every(lamp => lamp.status);
    }
}

