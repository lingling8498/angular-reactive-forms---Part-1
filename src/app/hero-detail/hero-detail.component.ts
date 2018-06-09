import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { states, Address, Hero } from '../data-model';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  // heroForm = new FormGroup({
  //   name: new FormControl()
  // });
  heroForm: FormGroup; // <--- heroForm is of type FormGroup
  states = states;

  constructor(private fb: FormBuilder) { 
    // <--- inject FormBuilder
    this.createForm();
  }

  ngOnInit() {
  }

  // createForm() {
  //   this.heroForm = this.fb.group({
  //     name: ['', Validators.required ],
  //     street: '',
  //     city: '',
  //     state: '',
  //     zip: '',
  //     power: '',
  //     sidekick: ''
  //   });
  // }

  // //Option 2 ..........
  // createForm() {
  //   this.heroForm = this.fb.group({
  //     name: new FormControl (),
  //     address: new FormGroup({
  //       street: new FormControl(),
  //       city: new FormControl(),
  //       state: new FormControl(),
  //       zip: new FormControl()
  //     }),
  //     power: new FormControl(),
  //     sidekick: new FormControl()
  //   });
  // }

    // //Option 3 ..........
    // createForm() {
    //   this.heroForm = this.fb.group({
    //     name: ['abc@gmail.com', Validators.required],
    //     address: this.fb.group({
    //       street: '123 Main Street',
    //       city: '',
    //       state: '',
    //       zip: ''
    //     }),
    //     power: '',
    //     sidekick: ''
    //   });
    // }
  
  //Option 4 ..........
  createForm() {
    this.heroForm = this.fb.group({
      name: ['Choo-Choo', Validators.required],
      address: this.fb.group(new Address()),
      power: '',
      sidekick: ''
    });
  }

  submitMe(){
    const result: Hero = Object.assign({}, this.heroForm.value);
    result.addresses = Object.assign({}, result.addresses);

    // Do useful stuff with the gathered data
    console.log(result);
  }

  resetMe(){
    this.heroForm.reset({ address: new Address(), name: '', power: '', sidekick: ''})
  }

}

