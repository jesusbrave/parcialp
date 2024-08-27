import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { ProductsResponse } from '../../interfaces/products';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {

  cartProducts: ProductsResponse[] = [];

  constructor(
    private cartService: CartService,
    private alertController: AlertController,
    private toastController: ToastController
  ) {}

  ngOnInit() {
    this.cartProducts = this.cartService.getCart();
    if (this.cartProducts.length === 0) {
      this.showEmptyCartAlert();  
    }
  }

  removeFromCart(product: ProductsResponse) {
    this.cartService.removeProducts(product);
    this.cartProducts = this.cartService.getCart(); 
    this.showProductRemovedAlert(product);
    if (this.cartProducts.length === 0) {
      this.showEmptyCartAlert(); 
    }
  }

  async showEmptyCartAlert() {
    const alert = await this.alertController.create({
      header: 'Empty Cart',
      message: 'No products yet',
      buttons: ['OK']
    });

    await alert.present();
  }

  async showProductRemovedAlert(product: ProductsResponse) {
    const alert = await this.alertController.create({
      header: 'Product Removed',
      message: `The product "${product.title}" has been removed from your cart.`,
      buttons: ['OK']
    });

    await alert.present();
  }

  async buyNow() {
    this.cartService.clearCart(); // Asegúrate de tener este método en tu servicio de carrito
    this.cartProducts = this.cartService.getCart(); // Actualiza la lista de productos en el carrito

    const toast = await this.toastController.create({
      message: 'The product(s) were purchased successfully!',
      duration: 5000
    });

    await toast.present();
  }
}
