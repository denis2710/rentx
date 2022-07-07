interface ICreateCarDto {
  name: string
  description: string
  daily_rate: number
  avaliable: boolean
  licence_plate: string
  fine_amount: number
  brand: string
  category_id: string
}

export { ICreateCarDto }
