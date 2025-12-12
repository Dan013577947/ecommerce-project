import type { CartType } from "../interfaces/carts"


export const cartOverallTotal = (carts:CartType[]) => {
  let totalOverallValue: number = 0
  carts.map(cart => {
    totalOverallValue += cart.total
  })
  return totalOverallValue
}