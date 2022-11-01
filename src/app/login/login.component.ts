
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup = new FormGroup({
    firstname: new FormControl('',),
    lastname: new FormControl('', ),
    email: new FormControl('', ),
    password: new FormControl('', ),
    phonenumber: new FormControl('', ),
    gender: new FormControl('', ),
    confirmPassword: new FormControl(''),

  });

  submitted = false;




  constructor(private formbuilder: FormBuilder) { }



  ngOnInit(): void {
    this.form = this.formbuilder.group({
      firstname: ['', [Validators.required,

      Validators.minLength(3),
      Validators.pattern(/^[A-z0-9]*$/)],
    ],


        lastname: ['', [Validators.required,
        Validators.required,
        Validators.minLength(3)],]
        ,

        email: ['', [Validators.required, Validators.email]],
        password: [
          '',[Validators.required,
            Validators.minLength(8),
            Validators.maxLength(15),
            Validators.pattern('(?=.*[A-Za-z])(?=.*[0-9])(?=.*[$@$!#^~%*?&,.<>"\'\\;:\{\\\}\\\[\\\]\\\|\\\+\\\-\\\=\\\_\\\)\\\(\\\)\\\`\\\/\\\\\\]])[A-Za-z0-9\d$@].{7,}'),

          ]
        ],


        phonenumber: ['', [ Validators.required,
          Validators.pattern("^[0-9]{10}"),
          Validators.minLength(10),
          Validators.maxLength(10)
        ]
      ],
      confirmPassword: ['', Validators.required],




    });
  }
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }


  onSubmit(): void {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }


    console.log(JSON.stringify(this.form.value, null, 2));

  }



}
