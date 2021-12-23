/**
 * @param {string} date
 * @return {number}
 */
var dayOfYear = function (date) {
    const _date = new Date(date)
    const _first = new Date(date)
    _first.setDate(1)
    _first.setMonth(0)
    return (_date - _first) / (1000 * 60 * 60 * 24) + 1
}

console.log(dayOfYear('2019-01-09'))
