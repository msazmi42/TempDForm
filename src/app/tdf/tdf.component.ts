import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Student } from '../models/student';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tdf',
  imports: [FormsModule,CommonModule],
  templateUrl: './tdf.component.html',
  styleUrl: './tdf.component.css'
})
export class TdfComponent {

  SelectedHobbies:string[]=[];
   std=new Student();
   constructor(){
    this.std.currency='';
   }
  save(formData:any){
    //console.log(formData.value);
    //const std=new Student(formData.name,formData.age,formData.email)
    console.log(this.std);
    console.log(this.SelectedHobbies);

  }
  onChange(e:any){
    let selectedValue=e.target.value;
    let checked=e.target.checked;

    if(checked){
      this.SelectedHobbies.push(selectedValue);
    }
    else{
      let index=this.SelectedHobbies.indexOf(selectedValue);
      this.SelectedHobbies.splice(index,1);
    }
     
  }
  resetForm(my_form:NgForm){
    my_form.resetForm();
  }
}
