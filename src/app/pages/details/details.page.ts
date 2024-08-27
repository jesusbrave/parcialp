import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsResponse } from 'src/app/interfaces/products';
import { HttpService } from 'src/app/services/http.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  public product!: ProductsResponse;

  constructor(
    private readonly httpSrv: HttpService,
    private readonly route: ActivatedRoute
  ) {}

  async ngOnInit() {
    this.route.params.subscribe(async (params) => {
      const url = environment.URL_BASE + 'products/' + params['id'];
      this.product = await this.httpSrv.get<ProductsResponse>(url);
      console.log(this.product);
    });
  }
}
