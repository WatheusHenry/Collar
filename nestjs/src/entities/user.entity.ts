import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  OneToMany,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Publication } from './publication.entity';
import { Like } from './like.entity'; // Importe a entidade Like

@Entity()
export class User {
  @ApiProperty({ example: 1, description: 'ID do usuário' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: 'John Doe', description: 'Nome do usuário' })
  @Column({ type: 'varchar', length: 255 })
  name: string;

  @ApiProperty({
    example: 'john.doe@example.com',
    description: 'Email do usuário',
  })
  @Column({ type: 'varchar', length: 255, unique: true })
  email: string;

  @ApiProperty({
    example: 'senha123',
    description: 'Senha do usuário',
    writeOnly: true,
  })
  @Column({ type: 'varchar', length: 255 })
  password: string;

  @ApiProperty({
    example: 'https://your-base-url/bucket-name/profile-pic.jpg',
    description: 'URL da foto de perfil do usuário',
  })
  @Column({ type: 'varchar', nullable: true })
  profilePicture: string | null;

  @OneToMany(() => Publication, (publication) => publication.user)
  publications: Publication[];

  @OneToMany(() => Like, (like) => like.user)
  likes: Like[];

  @CreateDateColumn()
  createdAt: Date;
}
