import { Column, Entity } from "typeorm";

@Entity('users')
export class User {

    @Column("varchar")
    public fName:string;

    @Column("varchar")
    public lName:string;
    
    @Column('varchar')
    public email:string;
    
    @Column('number')
    public tel:number;

    @Column('string')
    public password:string;

    @Column('datetime')
    public created_At: Date;
    
    @Column('datetime')
    public updated_At: Date;
}
