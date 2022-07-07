import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm'
import { v4 as uuidv4 } from 'uuid'

@Entity('cars')
class Car {
  @PrimaryColumn()
  id?: string

  @Column()
  name: string

  @Column()
  description: string

  @Column()
  daily_rate: number

  @Column()
  avaliable: boolean

  @Column()
  licence_plate: string

  @Column()
  fine_amount: number

  @Column()
  brand: string

  @CreateDateColumn()
  category_id: string

  constructor() {
    if (!this.id) {
      this.id = uuidv4()
    }
  }
}

export { Car }
