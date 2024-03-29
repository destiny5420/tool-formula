/* eslint-disable no-nested-ternary */
/* eslint-disable no-undef */
// import $ from 'jquery'

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

const Fundraising = {
  rateFunction() {
    // eslint-disable-next-line prefer-rest-params
    const dataArray = [].slice.call(arguments)
    return function (value) {
      for (let i = 0; i < dataArray.length; i += 1) {
        if (i === dataArray.length - 1 && value / dataArray[i].value > 1) {
          return 100
        }

        if (value <= dataArray[i].value) {
          const lastValue = i === 0 ? 0 : dataArray[i - 1].value
          const lastRate = i === 0 ? 0 : dataArray[i - 1].rate

          return (
            ((value - lastValue) / (dataArray[i].value - lastValue)) *
              (dataArray[i].rate - lastRate) +
            lastRate
          )
        }
      }

      return -1
    }
  },
}

const Event = {
  jqCustomEvent(type, data) {
    return $.extend($.Event(type || '', data || {}))
  },
}

const Loader = {
  css(href, rel) {
    const linkElement = window.document.createElement('link')
    const tagHead = window.document.getElementsByTagName('head')[0]

    if (rel) {
      linkElement.rel = rel
    }

    linkElement.href = href

    linkElement.media = 'only x'
    tagHead.parentNode.insertBefore(linkElement, tagHead)
    setTimeout(function () {
      linkElement.media = 'all'
    }, 0)
  },
  video(className = '.js-preload-video', dataValue = 'data-videoUrl') {
    const videos = document.querySelectorAll(className)
    videos.forEach((e) => {
      const url = e.getAttribute(dataValue)
      e.src = url
    })
  },
  image(
    className = '.js-preload-img',
    isMobile = false,
    dataValueDesktop = 'data-imgUrlD',
    dataValueMobile = 'data-imgUrlM',
  ) {
    const data = document.querySelectorAll(className)
    data.forEach((e) => {
      const url = isMobile ? e.getAttribute(dataValueMobile) : e.getAttribute(dataValueDesktop)
      e.src = url
    })
  },
  backgroundImage(
    className = '.js-preload-bg',
    isMobile = false,
    dataValueDesktop = 'data-imgUrlD',
    dataValueMobile = 'data-imgUrlM',
  ) {
    const data = document.querySelectorAll(className)
    data.forEach((e) => {
      const url = isMobile ? e.getAttribute(dataValueMobile) : e.getAttribute(dataValueDesktop)
      e.style.backgroundImage = `url('${url}')`
    })
  },
}

const Time = {
  format(dateString) {
    return new Date(dateString.replace(/-/g, '/'))
  },
  /**
   *
   * @param {timestamp} timeA far away time
   * @param {timestamp} timeB far close time
   * @param {keepValuePositive} keepValuePositive Don't get negative value.
   * @returns
   */
  getLag(timeA, timeB, keepValuePositive) {
    const result = new Date(timeA - timeB)
    let data = {
      days: parseInt(Math.floor(result.getTime() / 3600000) / 24, 10),
      hours: Math.floor(result.getTime() / 3600000) % 24,
      minutes: result.getUTCMinutes(),
      seconds: result.getUTCSeconds(),
    }

    if (keepValuePositive) {
      if (Object.values(data).some((element) => element < 0)) {
        data = { days: 0, hours: 0, minute: 0, seconds: 0 }
      }
    }

    return data
  },
}

module.exports = { Format, Maths, Fundraising, Event, Loader, Time }
