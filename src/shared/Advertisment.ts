export class Advertise
{
title :string;
owner:string;
contact_number:number;
price:number;
area:string;
img:string;
category:string;
public constructor(t:string,o:string,c:number,p:number,a:string,i:string,co:string)
{
    this.title=t;
    this.owner=o;
    this.contact_number=c;
    this.price=p;
    this.area=a;
    this.img=i;
    this.category=co;
}


}