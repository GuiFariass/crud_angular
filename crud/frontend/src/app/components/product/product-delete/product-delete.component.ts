import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from './../product.service';
import { Product } from './../product.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

product: Product

  constructor(private producService: ProductService,
                private router: Router,
                private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') 
    this.producService.readById(id).subscribe(prod => {
      this.product = prod
    })
  }

  deleteProduct() {
    this.producService.delete(this.product.id).subscribe(prod => {
      this.producService.showMessage(`O produto foi excluido com sucesso!!!`)
      this.router.navigate(['/products'])
    })
  }

  cancel() {
    this.router.navigate(['/products'])
  }
}
