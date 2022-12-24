import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { ApiService } from '../service/api.service';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit{
  productForm!: FormGroup
freshnessList = ["Brand New", "second Hand", "Refurbished"]
  constructor(private formBuilder:FormBuilder, private api:ApiService, private dialog: MatDialogRef<DialogComponent>){}
  ngOnInit(): void {
    this.productForm= this.formBuilder.group({
      productName: ['', Validators.required],
      category: ['', Validators.required],
      freshness: ['', Validators.required],
      price: ['', Validators.required],
      comment: ['', Validators.required],
      date: ['', Validators.required],
    })
  }
  addProduct(){
    if(this.productForm.valid){
      this.api.postProduct(this.productForm.value).subscribe({
        next:(res)=>{
          alert("product add succesfully");
          this.productForm.reset;
          this.dialog.close('save');

        },
        error:()=>{
          alert("error while adding the product")
        }
      })
    }
    
  }

}