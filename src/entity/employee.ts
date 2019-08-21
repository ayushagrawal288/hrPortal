import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, ManyToMany, JoinTable} from "typeorm";
import { Profile } from "./profile";

@Entity()
export class Employee {
    @PrimaryGeneratedColumn()
    id: number;

    @Column("date")
    birthDate: Date

    @Column("date")
    joiningDate: Date

    @Column("varchar")
    role: string

    @ManyToOne(type => Profile)
    profile: Profile

    @ManyToOne(type => Profile)
    secondHalf?: Profile

    @Column("text", {nullable: true})
    linkedInUrl?: string


    @Column("text", {nullable: true})
    fbUrl?: string

    @Column("varchar")
    panNumber: string

    @ManyToMany(type => Profile)
    @JoinTable()
    kids?: Profile



}
