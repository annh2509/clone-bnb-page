import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity('homestay')
export class HomestayEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    name: 'type',
  })
  type: string;

  @Column({
    name: 'name',
  })
  name: string;

  @Column({
    name: 'guests',
  })
  guests: number;

  @Column({
    name: 'bedrooms',
  })
  bedrooms: number;

  @Column({
    name: 'beds',
  })
  beds: number;

  @Column({
    name: 'baths',
  })
  baths: number;

  @Column({
    name: 'location',
  })
  location: string;

  @Column({
    name: 'desc',
  })
  desc: string;

  @Column({
    name: 'date',
  })
  date: string;

  @Column({
    name: 'price',
  })
  price: number;

  @Column({
    name: 'star',
  })
  star: number;

  @Column({
    name: 'reviews',
  })
  reviews: number;

  @Column({
    name: 'images',
    type: 'jsonb',
  })
  images: string[];

  @Column({
    name: 'mini_image',
  })
  miniImage: string;

  @Column({
    name: 'owner_name',
  })
  ownerName: string;

  @Column({
    name: 'owner_avatar',
  })
  ownerAvatar: string;

  @CreateDateColumn({
    name: 'created_at',
  })
  createdAt: Date;

  @UpdateDateColumn({
    name: 'updated_at',
  })
  updatedAt: Date;
}
