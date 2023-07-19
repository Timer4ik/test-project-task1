
export const getHmsFromSeconds = (secs: number) => {
    const hours = Math.floor(secs / 3600)
    const hoursModulo = secs % 3600

    const minutes = Math.floor(hoursModulo / 60)
    const minutesModulo = Math.floor(hoursModulo % 60)

    const seconds = minutesModulo

    return {
        hours,
        minutes,
        seconds
    }
}

export const getTwoCharNumberString = (number:number) => {
    if (!number) {
        return "00"
    }

    const stringNumber = number.toString()

    if (stringNumber.length < 2) {
        return "0" + stringNumber
    }
    else if (stringNumber.length > 2) {
        return stringNumber[stringNumber.length - 2] + stringNumber[stringNumber.length - 1]
    }
    return stringNumber
}

export const getStringTime = (secs:number) => {
    const hmsTime = getHmsFromSeconds(secs)

    const hours = getTwoCharNumberString(hmsTime.hours)
    const minutes = getTwoCharNumberString(hmsTime.minutes)
    const seconds = getTwoCharNumberString(hmsTime.seconds)

    return `${hours}:${minutes}:${seconds}`
}

