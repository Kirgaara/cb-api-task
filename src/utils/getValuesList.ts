import charCode from '../constants/charCode'

interface Value {
  CharCode: string
  Name: string
  Nominal: number
  Value: number
}

export default function getValuesList(
  obj: any,
  currency: string,
  favorites: string[]
) {
  let arr = []
  if (currency === 'Российский рубль' || currency === '') {
    for (let key in obj) {
      let current: Value = {
        CharCode: obj[key].CharCode,
        Name: obj[key].Name,
        Nominal: obj[key].Nominal,
        Value: obj[key].Value,
      }
      arr.push(current)
    }
    return arr
  } else {
    let currentCurrency = Object.keys(charCode).find(
      (key) => charCode[key as keyof typeof charCode] === currency
    )
    let rub: Value = {
      CharCode: 'RUB',
      Name: 'Российский рубль',
      Nominal: 1,
      Value: Number(
        (1 / obj[currentCurrency as keyof typeof charCode].Value).toFixed(4)
      ),
    }
    arr.push(rub)
    for (let key in obj) {
      let current: Value = {
        CharCode: obj[key].CharCode,
        Name: obj[key].Name,
        Nominal: obj[key].Nominal,
        Value: Number(
          (
            obj[key].Value / obj[currentCurrency as keyof typeof charCode].Value
          ).toFixed(4)
        ),
      }
      if (currentCurrency !== key) {
        arr.push(current)
      }
    }
    arr.sort((a, b) => {
      if (favorites.filter((element) => element === a.CharCode).length) {
        return -1
      } else {
        return 1
      }
    })
    return arr
  }
}
