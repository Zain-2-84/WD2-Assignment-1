Whenever we use export default, it means that we are exporting to sending only one function / component from that file. And the file where we bring or import, we can rename it, but it is best practice not to do so.

When we export multiple components, we use these:

export {
    NumberAddSubtract,
    Something
}

OR

export function NumberAddSubtract () {
    random words.
}

export function Something () {
    more random words.
}

// No need to write export below separately.