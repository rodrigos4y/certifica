import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SiteInfoService {

  private apiUrl = 'http://certificaafericoes.com.br/api/siteInfo.json';
  data : any = {};

  constructor(private http: Http) {
    console.log("Olá usuário");
    this.getInfos();
   }

  getData(){
    return this.http.get(this.apiUrl)
    .map((res: Response) => res.json())
  }

  getInfos(){
    this.getData().subscribe(data =>{
      this.data = data;
      console.log(this.data);
    })
  }
}
