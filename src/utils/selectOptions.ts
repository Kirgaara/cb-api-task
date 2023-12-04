export default function selectOptions(currencyList: any) {
  let arr: string[] = []
  for (let key in currencyList) {
    let current: string = currencyList[key]
    arr.push(current)
  }
  return arr
}
