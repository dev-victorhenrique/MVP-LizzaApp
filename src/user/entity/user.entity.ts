import { Entity, 
PrimaryGeneratedColumn, 
Column, CreateDateColumn, 
DeleteDateColumn, 
UpdateDateColumn } from "typeorm";

@Entity({name:'users'})
export class UserEntity{
        @PrimaryGeneratedColumn('uuid')
        id:string

        @Column({name:'name',length:55, nullable:false  })
        name:string

        @Column({name:'age', nullable:false  })
        age:number

        @Column({name:'email',length:70, nullable:false  })
        email:string

        @Column({name:'password',length:255, nullable:false  })
        password:string

        @Column({name:'alergie',length:100, nullable:false  })
        alergie:String

        @Column({name:'blood_type',length:50, nullable:false  })
        bloodType:string

        @Column({name:'live_alone', length:50, nullable:true  })
        liveAlone:string

        @Column({name:'cep',length:20, nullable:false  })
        cep:string

        @Column({name:'address',length:100, nullable:false  })
        address:string

        @CreateDateColumn({name:'created_at'})
        createdAt:string

        @UpdateDateColumn({name:'updated_at'})
        updatedAt:string

        @DeleteDateColumn({name:'deleted_at'})
        deletedAt:string
}