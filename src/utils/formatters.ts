export function formatToDecimalPercentage(value: number) {
  const formattedValue = Intl.NumberFormat('pt-br', {
    style: 'decimal',
    maximumFractionDigits: 2,
  }).format(value)

  return `${formattedValue}%`
}
