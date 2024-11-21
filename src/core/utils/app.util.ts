export const formatShortScale = (value: number, decimalPlaces = 1) => {
  const suffixes = ['', 'K', 'M', 'B', 'T']
  let suffixIndex = 0

  while (Math.abs(value) >= 1000 && suffixIndex < suffixes.length - 1) {
    value /= 1000
    suffixIndex++
  }

  return `${value.toFixed(decimalPlaces)}${suffixes[suffixIndex]}`
}

export const formatPercentage = (value: number): string => {
  return `${(value * 100).toFixed(2)}%`
}
