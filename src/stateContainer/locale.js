import { Container } from 'unstated'


const DEFAULT_STATE = {
    locale: 'es-ec'
}

class LocaleState extends Container {
    constructor() {
        super()
        this.state = DEFAULT_STATE
    }

    set = async (data = {}) => {
        const newState = {
            ...this.state,
            ...data
        }

        return this.setState(newState)
    }
}

export default new LocaleState()