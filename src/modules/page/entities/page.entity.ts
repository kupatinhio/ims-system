import { text } from "stream/consumers";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('pages')
export class PageEntity {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column('varchar')
    public title: string;

    @Column('text')
    public content: string;

    @Column('varchar')
    public homepage: string;

    @Column('varchar')
    public about: string;

}
