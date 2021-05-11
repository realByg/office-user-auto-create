import {KV} from '../plugins/env'

import randomHex from '../plugins/random-hex'

class Code {
    separator = '-'

    async validate(code: string) {
        if (!code.includes(this.separator))
            return false

        const key = code.split(this.separator)[0]
        const value = code.split(this.separator)[1]
        return await KV.get(key) === value
    }

    async delete(code: string) {
        const key = code.split(this.separator)[0]
        await KV.delete(key)
    }

    async generate(amount: number) {
        const codes = []
        for (let i = 0; i < amount; i++) {
            const key = randomHex(3)
            const value = randomHex(3)
            await KV.put(key, value)
            codes.push(`${key}${this.separator}${value}`)
        }
        return codes
    }

}

const code = new Code()
export default code
