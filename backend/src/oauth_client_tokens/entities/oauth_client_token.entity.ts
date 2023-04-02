import { User } from 'src/user/entities/user.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinColumn,
  ManyToOne,
} from 'typeorm';

export enum AccountType {
  EMAIL = 'email',
  GOOGLE = 'google',
  FACEBOOK = 'facebook',
}
@Entity()
export class OAuthClientToken {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: true,
  })
  accessToken: string;

  @Column({
    nullable: true,
  })
  refreshToken: string;

  @Column({
    type: 'enum',
    enum: AccountType,
    default: AccountType.EMAIL,
  })
  accountType: AccountType;

  @Column({
    type: 'timestamptz',
    nullable: true,
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;

  @Column({
    type: 'timestamptz',
    nullable: true,
    default: () => 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;

  @ManyToOne(() => User, (user) => user.id, { nullable: true })
  @JoinColumn()
  User: User;
}
