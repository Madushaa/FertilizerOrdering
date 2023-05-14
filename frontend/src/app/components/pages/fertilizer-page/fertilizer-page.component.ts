import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FertilizerService } from 'src/app/services/fertilizer.service';
import { Fertilizer } from 'src/app/Shared/models/Fertilizer';

@Component({
  selector: 'app-fertilizer-page',
  templateUrl: './fertilizer-page.component.html',
  styleUrls: ['./fertilizer-page.component.css']
})
export class FertilizerPageComponent implements OnInit{
  fertilizer! : Fertilizer;
  constructor(activatedRoute:ActivatedRoute, fertilizerService:FertilizerService){
    activatedRoute.params.subscribe((params) => {
      if(params.id)
      this.fertilizer=fertilizerService.getFertilizerById(params.id);
    })

  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
