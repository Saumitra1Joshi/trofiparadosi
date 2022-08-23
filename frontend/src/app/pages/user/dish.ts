export class dish{
    constructor(
        public dishid:number,
        public sku:string,
        public name:string,
        public description:string,
        public ratings:string,
        public unitPrice:number,
        public imageUrl:string,
        public active:boolean,
        public unitsInStock:number,
        public dateCreated:Date,
        public lastUpdated:Date

    ){
    }
}