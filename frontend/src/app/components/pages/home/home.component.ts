import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FertilizerService } from 'src/app/services/fertilizer.service';
import { Fertilizer } from 'src/app/Shared/models/Fertilizer';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  fertilizer:Fertilizer[]= [];
  constructor(private fertilizerService:FertilizerService,activatedRoute:ActivatedRoute) {
    activatedRoute.params.subscribe((params) =>{
      if(params.searchTerm)
      this.fertilizer= this.fertilizerService.getAllFertilizerBySearchTerm(params.searchTerm);
      else if(params.tag)
      this.fertilizer = this.fertilizerService.getAllFoodByTag(params.tag);
      else
      this.fertilizer = fertilizerService.getAll();
    })
    this.fertilizer=fertilizerService.getAll();

  }

  ngOnInit():void{}

}
