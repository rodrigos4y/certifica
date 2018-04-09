import { Component, OnInit } from '@angular/core';
import { Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private apiUrl = 'http://www.certificaafericoes.com.br/api/siteInfo.json';
  data = [];

  constructor(private http: Http) {
    this.getInfos();
    this.getData();
   }

  ngOnInit() {
  }

  getData(){
    return this.http.get(this.apiUrl)
    .map((res: Response) => res.json())
  }

  getInfos(){
    this.getData().subscribe(data =>{
      this.data = data;
    })
  }

}
