import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
import { environment } from 'src/environments/environment.prod';
import { ProductsResponse } from '../interfaces/products';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
public products: ProductsResponse[]=[];
url = environment.URL_BASE + "products";
  constructor(private readonly httpSrv: HttpService, private readonly navCtr: NavController) {}

  async ngOnInit() {
    this.products = await this.httpSrv.get<ProductsResponse[]>(this.url);
  }

  public doNavigate(id: number){
    console.log(event);
     this.navCtr.navigateForward("details/"+id);
  }
  async OptionCategory(event: any){
    this.products = await this.httpSrv.get<ProductsResponse[]>(this.url + '/category/' + event.detail.value);
  }
}
