import selenium from 'selenium-webdriver'

export const isMatch = (actual, expected) => {
  if (Array.isArray(expected)) {
    return expected.includes(actual)
  }
  return actual === expected
}

// export const checkSite = async (site, driver) => {
//     const {
//         url, xPath, expected, wait = 1, description,
//     } = site
//     await driver.get(url)
//     await sleep(wait)
//     try {
//         // previously was .findElement(selenium.By.xpath)
//         const value = await driver.findElement(By.xpath(xPath)).getText()
//         if (!isMatch(String(value), expected)) {
// await notify ({ site, message: `${description} was expecting "${expected}" but got ${value}`})
//         }
//     } catch (e) {
//         await notify({site, message: `${description} could not reach the node specified`})
//     }
// }
