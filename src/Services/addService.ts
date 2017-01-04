import {Injectable} from "@angular/core";
import {Advertise} from "../shared/Advertisment";
import { Homeapplicance } from "../shared/HomeApplicance";
import {homeapp_ads } from '../AdsMock/mock'; 

@Injectable()
export class Servies  {
getAdvertsie():Promise<any[]>{
    return Promise.resolve(homeapp_ads);
}
}