
/**
 * Formats an IsoDateTime "yyyy-mm-dd'T'HH:MM:ss" to Kiwi.com api format "%d\/%m\/%Y %H:%M"
 * makes an array.
 * @param string date
 * @return string date
 */
export function dateSwap(date) {
    const [ total, year, month, day, hour, minute, second ] = date.match(/^(\d{4})-(\d{1,2})-(\d{1,2})T(\d{1,2}):(\d{1,2}):(\d{1,2})/)

    return `${day}/${month}/${year} ${hour}:${minute}`
}