const Format = {
  addComma(val) {
    return Number(val)
      .toString()
      .replace(
        /^(-?\d+?)((?:\d{3})+)(?=\.\d+$|$)/,
        (_all, pre, groupOf3Digital) => pre + groupOf3Digital.replace(/\d{3}/g, ',$&'),
      )
  },
  stringBy00(value) {
    if (value < 0) {
      return `00`
    }

    return parseInt(value / 10, 10) === 0 ? `0${value}` : value.toString()
  },
  stringBy000(value) {
    if (value < 0) {
      return `000`
    }

    if (value / 100 >= 1) {
      return value.toString()
    }

    if (value / 10 >= 1) {
      return `0${value}`
    }

    return `00${value}`
  },
}

const Maths = {
  getDegree(value) {
    return (Math.PI / 180) * value
  },
  /**
   *
   * @param {timestamp} timeA 較遠的時間
   * @param {timestamp} timeB 較近的時間
   * @returns
   */
  getTimeLag(timeA, timeB, checkingNegative) {
    const result = new Date(timeA - timeB)
    let data = {
      days: parseInt(Math.floor(result.getTime() / 3600000) / 24, 10),
      hours: Math.floor(result.getTime() / 3600000) % 24,
      minutes: result.getUTCMinutes(),
      seconds: result.getUTCSeconds(),
    }

    if (checkingNegative) {
      if (Object.values(data).some((element) => element < 0)) {
        data = { days: 0, hours: 0, minute: 0, seconds: 0 }
      }
    }

    return data
  },
  remap(value, low1, high1, low2, high2) {
    return low2 + ((value - low1) * (high2 - low2)) / (high1 - low1)
  },
  clamp(value, min, max) {
    return Math.min(Math.max(value, min), max)
  },
  getRandomByInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
  },
}

module.exports = { Format, Maths }
