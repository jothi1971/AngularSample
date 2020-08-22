import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from '../products';
import { CartService } from '../cart.service'

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
/* product property */
  product;

/* use ActivatedRoute service */
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      /* read specific product */
      this.product = products[+params.get('productId')]
    });
  }

  addToCart(product) {
    this.cartService.addToCart(product);
    window.alert('your product has been added to cart');
  }

}