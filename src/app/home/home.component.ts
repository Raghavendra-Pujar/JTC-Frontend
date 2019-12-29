import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { AlertsService } from 'angular-alert-module';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public postObjects:any;

  constructor( private spinnerService: Ng4LoadingSpinnerService,
    public api: ApiService,private alerts: AlertsService) { }

  ngOnInit() {
    this.spinnerService.show();
    this.getPosts()
  }

  public getPosts = () =>{
    this.api.getPosts().subscribe((apiResponse:any)=>{
      if(apiResponse.status === 200){
        
      this.postObjects = apiResponse.data
      this.alerts.setMessage('Posts fetched successfully!','success');
      this.spinnerService.hide();//hide the spinner if success
      }else{
        
        this.alerts.setMessage('Unable to fetch posts','error')
      }

    })

  }

  public updatePosts = () => {
    this.postObjects = this.getPosts();
    this.spinnerService.hide();
  }

  public updateVotes = (postId) =>{
    console.log(postId)
    this.spinnerService.show();
    this.api.updateVotes(postId).subscribe((apiResponse:any)=>{ 

      if(apiResponse.status === 200)
      {
        console.log(apiResponse);
        this.updatePosts();

      }else {
        this.alerts.setMessage('Upvoting Failed!','error');
      }
    })
  }
  

}
