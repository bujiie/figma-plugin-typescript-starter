function randomInRange(min: number, max: number): number {
    if (min >= max) return -1
    return min + Math.floor(Math.random() * (max - min));
}

async function delayLog(message: string): Promise<void> {
    return new Promise((resolve, _) => setTimeout(() => {
        console.log(message)
        resolve()
    }, randomInRange(500, 2000)))
}

(async function () {
    await Promise.all(["one", "two", "three"].map(delayLog))
    figma.closePlugin()
})()