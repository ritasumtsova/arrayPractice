//    + deleteLampById(id: Number): void
//       Array.prototype.filter()
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
        return this.#lamps.filter(lamp => lamp.id === id)[0] || null;
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

    deleteLampByIdFindIndexPlusSplice (id) {
        this.#lamps.splice(this.#lamps.findIndex(lamp => lamp.id === id), 1);
    }

    get lampsId () {
        return this.#lamps.map(lamp => lamp.id);
    }

    isAllOn () {
        return this.#lamps.every(lamp => lamp.status === true);
    }
}

