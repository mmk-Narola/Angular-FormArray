import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.scss'],
})
export class AddproductComponent implements OnInit {
  formVariants!: FormArray<any>;
  colorData: any = [];
  sizeData: any = [];
  categoryData: any = [];
  productId: string;
  editData: any = [];
  isEdit: boolean;

  constructor(
    private builder: FormBuilder,
    private route: Router,
    private productSevices: ProductService,
    private activeRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe((param) => {
      this.productId = param.get('id');
    });

    this.loadCate();
    this.loadColor();
    this.loadSize();

    if (this.productId != null) {
      this.isEdit = true;
      console.log('this.isEdit :>> ', this.isEdit);
      this.productSevices.GellProductsId(this.productId).subscribe((res) => {
        this.editData = res;

        if (this.editData.variants != null) {
          for (let i = 0; i < this.editData.variants.length; i++) {
            this.addVariants();
          }
        }

        this.productForm.patchValue({
          code: this.editData.code,
          name: this.editData.name,
          price: this.editData.price,
          remark: this.editData.remark,
          category: this.editData.category,
          variants: this.editData.variants,
        });
      });
    }
  }

  loadCate() {
    this.productSevices.getCategory().subscribe((res) => {
      // console.log('res :>> ', res);
      this.categoryData = res;
    });
  }
  loadColor() {
    this.productSevices.getColor().subscribe((res) => {
      // console.log('res :>> ', res);
      this.colorData = res;
    });
  }
  loadSize() {
    this.productSevices.getSize().subscribe((res) => {
      // console.log('res :>> ', res);
      this.sizeData = res;
    });
  }
  productForm = this.builder.group({
    code: this.builder.control('', Validators.required),
    name: this.builder.control('', Validators.required),
    price: this.builder.control('', Validators.required),
    remark: this.builder.control(''),
    category: this.builder.control('0'),
    variants: this.builder.array([]),
  });

  redirect() {
    this.route.navigate(['product']);
  }

  get variants() {
    return this.productForm.get('variants') as FormArray;
  }

  addVariants() {
    this.formVariants = this.productForm.get('variants') as FormArray;
    this.formVariants.push(this.generateRow());
  }

  Removevariant(index: any) {
    if (confirm('Do you want to Delete this')) {
      this.formVariants = this.productForm.get('variants') as FormArray;
      this.formVariants.removeAt(index);
    }
  }

  generateRow() {
    return this.builder.group({
      id: this.builder.control({ value: 0, disabled: true }),
      productCode: this.builder.control(this.productForm.value.code),
      price: this.builder.control(this.productForm.value.price),
      isactive: this.builder.control(true),
      colorId: this.builder.control(''),
      sizeId: this.builder.control(''),
      remarks: this.builder.control(''),
    });
  }

  saveData() {
    if (this.productForm.invalid) {
      return;
    }

    this.isEdit ? this.updateProduct() : this.addProduct();
  }

  addProduct() {
    this.productSevices
      .SaveProduct(this.productForm.value)
      .subscribe((item) => {
        console.log('item :>> ', item);
        this.route.navigate(['product']);
      });
  }

  updateProduct() {
    this.productSevices
      .EditProduct(this.productId, this.productForm.value)
      .subscribe((res) => {
        console.log('res :>> ', res);
        this.route.navigate(['product']);
        this.productSevices.RefreshNewData.next();
      });
  }
}
