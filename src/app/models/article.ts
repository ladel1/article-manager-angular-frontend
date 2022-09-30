export class Article{
    private id:number=0;
    private nom:string="";
    private prix:number=0;

     constructor(prix:number=0,nom:string="") {
        this.nom=nom;
        this.prix=prix;
     }
     
     public getId():number {
         return this.id;
     }
     public setId(id:number):void {
         this.id = id;
     }
     public getPrix():number {
         return this.prix;
     }
     public setPrix(prix:number):void {
         this.prix = prix;
     }
     public getNom():string {
         return this.nom;
     }
     public setNom( nom:string):void {
         this.nom = nom;
     }     

}