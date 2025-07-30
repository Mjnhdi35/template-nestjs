import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'

@Entity('user')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ type: 'varchar', unique: true, nullable: false, length: 255 })
  email: string

  @Column({ type: 'varchar', length: 255 })
  password: string

  @Column({ type: 'varchar', nullable: false, length: 100 })
  username: string

  @CreateDateColumn({
    name: 'created_at',
  })
  createdAt: Date

  @UpdateDateColumn({
    name: 'updated_at',
  })
  updatedAt: Date
}
