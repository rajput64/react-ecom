

export default function FormatPrice({price}) {
  return (
    Intl.NumberFormat("en-IN",{
        style:"currency",
        currency: "INR",
        maximunFractionDigits: 2,
    }).format(price/100)
  )
}
