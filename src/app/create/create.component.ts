import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { AlertsService } from 'angular-alert-module';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  public title: any;
  public description: any;
  public data: any;

  constructor(private alerts: AlertsService, public spinner: Ng4LoadingSpinnerService, public api: ApiService, public router: Router) { }

  ngOnInit() {
  }

  public createPost = () => {

    if (!this.title) this.alerts.setMessage('Title is required', 'error');
    else if (!this.description) this.alerts.setMessage('Content is required', 'error');
    else {/*+++++ */
      this.data = {
        title: this.title,
        description: this.description
      }

      this.api.createPost(this.data).subscribe((apiResponse: any) => {
        if (apiResponse.status === 200) {
          this.spinner.show();
          this.router.navigate(['/home']);
          this.spinner.hide();
          console.log(apiResponse)
        } else {
          this.spinner.hide();//+++++++++++++++
          this.alerts.setMessage('Unable to add the post', 'error')
        }
      })
    }
  }

}
