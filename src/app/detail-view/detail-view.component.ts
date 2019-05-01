import { Component, OnInit } from '@angular/core';
import { FunService } from '../fun.service';

@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.css']
})
export class DetailViewComponent implements OnInit {
  private act : string;

  constructor(private funService : FunService) { 
    funService.getActivities().subscribe(
      (succ)=>{
        this.act = succ['act']
      }, (error : any) =>{
        console.log(error);
      }
    )
  }

  ngOnInit() {
  }

}
