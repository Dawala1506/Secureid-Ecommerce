import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { CartService } from 'src/app/core/cart.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductListComponent implements OnInit {
  products: Product[] = [
    {
      id: 1,
      name: 'A Brand New Smartwatch',
      price: 11984,
      description: 'Wireless Calling/Receiving, Multiple Sports Modes, Camera Control, Message Notifications',
      imageUrl: 'assets/images/smartwatch.jpg',
    },
    {
      id: 2,
      name: '10.1-inch Android Tablet',
      price: 114940,
      description: 'Android 14 Operating System, 4GB RAM, 128GB Storage',
      imageUrl: 'assets/images/tablet.jpg',
    },
    {
      id: 3,
      name: 'Airpod',
      price: 11984,
      description: 'Touch Control Wireless Earbuds with LED Display - HiFi Stereo Sound, Lightweight & Compact Design for Gaming, Running & Cycling',
      imageUrl: 'assets/images/Airpod.jpg',
    },
    {
      id: 4,
      name: 'Remote Control Drift Car',
      price: 114940,
      description: ' 2.4Ghz 4WD Remote Control Car with Lights, Tires And Road Obstacle Tools, Best Birthday, Halloween, Christmas Gifts for winter',
      imageUrl: 'assets/images/drift-car.jpg',
    },
    {
      id: 5,
      name: 'Portable Wireless Speaker',
      price: 11984,
      description: ' 5.1 Surround Sound, Dual Speakers, Hi-Res Audio, TWS, with USB Charging, 1200mAh Rechargeable Lithium Battery, FM Radio, TF Card/USB Disk Support for Wireless Audio',
      imageUrl: 'assets/images/wireless-speaker.jpg',
    },
    {
      id: 6,
      name: 'Coralline Velvet Bathroom Anti-slip Mat',
      price: 114940,
      description: 'Bathroom Anti-slip Mat with PVC Lining on the Bottom for Anti-slip and Water Absorption, Suitable for Bathroom Door, Bathroom, Bedroom, Machine Washable, Flat Velvet Design',
      imageUrl: 'assets/images/Bathroom-mat.png',
    },
    {
      id: 7,
      name: 'Men Classic Black Oxfords',
      price: 11984,
      description: ' Casual Lace-Up Dress Shoes, Solid Color Faux Low Top with PVC Sole, Round Toe for Daily & Business Wear, Spring/Fall Season',
      imageUrl: 'assets/images/shoe.jpg',
    },
    {
      id: 8,
      name: 'Gas Range Burner',
      price: 114940,
      description: '4-Pack Gas Range Burner Covers Compatible with Sabaf Stoves – Durable Replacement Caps, No Battery Required, Variety Pack with 55mm, 75mm, & 100mm Options',
      imageUrl: 'assets/images/gas-burner.jpg',
    },
    {
      id: 9,
      name: 'Professional Electric Hair Clipper',
      price: 114940,
      description: '1-Set Professional Electric Hair Clipper Kit for Men - Dragon Design in Golden, Black, & Copper, Rechargeable 400mAh Lithium Battery, Ideal Father Day Gift',
      imageUrl: 'assets/images/clipper.jpg',
    },
    {
      id: 10,
      name: 'Fashionable PU Leather Belt',
      price: 114940,
      description: 'Men Fashionable PU Leather Belt, Simple And Retro Design, Smooth Buckle, for Men Daily Life, Leisure Time Party Festival Workvalentine Day',
      imageUrl: 'assets/images/belt.jpg',
    },
    
  ];
  constructor(private cartService: CartService, private toastr: ToastrService) {}

  addToCart(product: Product): void {
    this.cartService.addToCart(product);
    this.toastr.success(`${product.name} added to cart!`, 'Success'); 
  }

  ngOnInit(): void {
  }

}
