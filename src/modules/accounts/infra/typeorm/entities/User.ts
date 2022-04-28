import { CreateDateColumn, Column, PrimaryColumn, Entity } from 'typeorm'
import { v4 as uuidv4 } from 'uuid'

@Entity('users')
class User {
  @PrimaryColumn()
  id: string

  @Column()
  name: string

  @Column()
  password: string

  @Column()
  email: string

  @Column()
  driver_licence: string

  @Column()
  is_admin: boolean

  @Column({
    nullable: true,
  })
  avatar?: string

  @CreateDateColumn()
  created_at: Date

  constructor() {
    if (!this.id) {
      this.id = uuidv4()
    }
  }
}

export { User }
