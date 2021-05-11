const randomHex = (digits: number) => {
    const a = crypto.getRandomValues(new Uint8Array(digits))
    return Array.from(a).map(b => ('00' + b.toString(16)).slice(-2)).join('')
}

export default randomHex
