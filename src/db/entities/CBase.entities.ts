import { Column,CreateDateColumn,UpdateDateColumn} from "typeorm";

export abstract class CBaseEntities {

    @CreateDateColumn({default : () => 'CURRENT_TIMESTAMP', type : 'datetime',name : 'created_on',})  // added  datetime instead of timestamp
    createdOn! : Date;

    @Column({name: 'created_by',type: 'integer',nullable: false})
    createdBy: number;

    @UpdateDateColumn({default : () => 'CURRENT_TIMESTAMP',type : 'datetime', name : 'updated_on' })// added  datetime instead of timestamp
    updatedOn! : Date;

    @Column({name: 'updated_by',type: 'integer',nullable: false})
    updatedBy: number;
}


































// import { 
//     Column,
//     CreateDateColumn,
//     UpdateDateColumn
// } from "typeorm";

// export abstract class CBaseEntities {

//     @CreateDateColumn({
//         default : () => 'CURRENT_TIMESTAMP',
//         type : 'timestamp',
//         name : 'created_on',

//     })
//     createdOn! : Date;

//     @Column({'name' : 'created_by', 'type':'integer', 'nullable': false })
//     createdBy: number;

//     @UpdateDateColumn({
//         default : () => 'CURRENT_TIMESTAMP',
//         type : 'timestamp',
//         name : 'updated_on',

//     })
//     updatedOn! : Date;

//     @Column({'name' : 'updated_by', 'type':'integer', 'nullable': false })
//     updatedBy: number;
    
// }