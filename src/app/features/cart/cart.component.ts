import { Component } from '@angular/core';
import { CartService } from 'src/app/core/cart.service';
import { ToastrService } from 'ngx-toastr'; // For displaying toast messages

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  couponCode: string = '';

  constructor(
    public cartService: CartService,
    private toastr: ToastrService // Inject ToastrService
  ) {}

  // Apply the coupon code
  applyCoupon(): void {
    const isValid = this.cartService.applyCoupon(this.couponCode);
    if (isValid) {
      this.toastr.success('Coupon applied successfully!', 'Success');
    } else {
      this.toastr.error('Invalid coupon code', 'Error');
    }
  }
}