import { Advertise}from "./Advertisment";
export class Homeapplicance extends Advertise{
type:string;
condtition:string;
constructor(t:string,o:string,c:number,p:number,a:string,i:string,co:string,cond:string,typ:string)
{ super(t,o,c,p,a,i,co);
    this.condtition=cond;
    this.type=typ;
}
}