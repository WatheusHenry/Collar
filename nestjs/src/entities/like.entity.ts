import { Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Publication } from './publication.entity';
import { User } from './user.entity';

@Entity()
export class Like {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Publication, publication => publication.likes)
  publication: Publication;

  @ManyToOne(() => User, user => user.likes)
  user: User;
}
