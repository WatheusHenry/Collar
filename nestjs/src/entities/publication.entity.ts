import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
} from 'typeorm';
import { User } from './user.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity('publications')
export class Publication {
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: 'O animal foi perdido na região do centro.' })
  @Column({ type: 'text' })
  description: string;

  @ApiProperty({ example: 'perdido' })
  @Column({ type: 'varchar', length: 20 })
  status: string; // Status do animal (perdido, encontrado, etc.)

  @ApiProperty({ type: [String], example: ['image1.jpg', 'image2.jpg'] })
  @Column("simple-array")
  images: string[]; 

  @CreateDateColumn()
  createdAt: Date; // Data de criação da publicação

  @ManyToOne(() => User, (user) => user.publications, { eager: true })
  user: User; // Ligação com o usuário que criou a publicação
}
