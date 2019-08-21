import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Profile {
    @PrimaryGeneratedColumn()
    id: number;

    @Column("varchar")
    firstName: string;

    @Column("varchar", {nullable: true})
    middleName?: string

    @Column("varchar")
    lastName: string;

    @Column("varchar")
    phoneNo: string

    @Column("varchar")
    email: string

    @Column("varchar", {nullable: true})
    designation?: string

    @Column("varchar")
    gender: "M" | "F"

    constructor(req:{firstName: string
        ,middleName?: string,
         lastName: string,
          phoneNo: string;email: string;designation?: string;gender: "M" | "F" }) {
              if (req) {
                  this.firstName = req.firstName
                  this.lastName = req.lastName
                  this.phoneNo = req.phoneNo
                  this.email = req.email
                  this.designation = req.designation
                  this.gender = req.gender
              }
          }

}
