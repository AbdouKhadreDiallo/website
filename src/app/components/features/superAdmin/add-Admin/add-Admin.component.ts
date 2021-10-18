import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared/shared.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-Admin',
  templateUrl: './add-Admin.component.html',
  styleUrls: ['./add-Admin.component.scss']
})
export class AddAdminComponent implements OnInit {
  addAdmin: FormGroup
  constructor(private _fb: FormBuilder, private shared: SharedService, private router: Router ) {
    this.addAdmin = this._fb.group({
      username: ['', [Validators.required]],
      prenom: ['', [Validators.required]],
      nom: ['', [Validators.required]],
      logo: ['']
    })
  }

  ngOnInit() {
  }
  onFileSelect(event:any){
		if (event.target.files.length>0) {
			const file = event.target.files[0];
			this.addAdmin.get('logo')?.setValue(file);

		}
	}

  submit(){
    let attrs = ['username','prenom','nom'];
		if (this.addAdmin.value.logo) {
			attrs.push('logo');
		}
    const registerFormData = new FormData();
    for (let att of attrs) {
			registerFormData.append(att, this.addAdmin.get(att)?.value);
		}
    if (this.addAdmin.valid) {
      this.shared.post('/admins', registerFormData).subscribe(
        data=>{
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500
          })
          this.router.navigate(['/super_admins'])
        }, err => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            timer: 1500
          })
        }
      )
    }
    else{
      alert('error')
    }


  }

}
