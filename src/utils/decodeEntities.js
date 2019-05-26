const decodeEntities = (function() {
  // this prevents any overhead from creating the object each time
  let element = document.createElement('div')

  function decodeEntities (str) {
    if(str && typeof str === 'string') {
      // strip script/html tags
      str = str.replace(/<script[^>]*>([\S\s]*?)<\/script>/gmi, '')
      str = str.replace(/<\/?\w(?:[^"'>]|"[^"]*"|'[^']*')*>/gmi, '')
      element.innerHTML = str
      str = element.textContent
      element.textContent = ''
    }

    return str
  }

  return decodeEntities
})()

export default decodeEntities