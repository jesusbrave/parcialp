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
  constructor(private readonly httpSrv: HttpService, private readonly navCtr: NavController) {}

  async ngOnInit() {
    const url = environment.URL_BASE + "products";
    this.products = await this.httpSrv.get<ProductsResponse[]>(url);
  }

  public doNavigate(id: number){
    console.log(event);
     this.navCtr.navigateForward("details/"+id);
  }
}
