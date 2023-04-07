import { Component, DoCheck, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-productvariant',
  templateUrl: './productvariant.component.html',
  styleUrls: ['./productvariant.component.scss'],
})
export class ProductvariantComponent implements OnInit, DoCheck {
  title = 'CRUD using FormArray';

  constructor(private product: ProductService, private route: Router) {
    this.loadData();
  }
  ngDoCheck(): void {
    let currentUrl = this.route.url;
    if (currentUrl == '/product') {
      this.isListing = true;
    } else {
      this.isListing = false;
    }
  }

  productData: any;
  isListing = true;

  ngOnInit(): void {
    this.product.RefreshNewData.subscribe((item) => {
      this.loadData();
    });
  }

  displayColums: string[] = ['code', 'name', 'price', 'remarks', 'action'];

  EditProduct(id: any) {
    this.route.navigate([`product/edit/${id}`]);
  }

  DeleteProduct(productId: string) {
    this.product.DeleteProduct(productId).subscribe((res) => {
      this.loadData();
    });
  }

  loadData() {
    this.product.GellAllProducts().subscribe((res) => {
      this.productData = res;
    });
  }
}
