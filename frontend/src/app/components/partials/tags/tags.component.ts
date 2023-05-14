import { Component } from '@angular/core';
import { FertilizerService } from 'src/app/services/fertilizer.service';
import { Tag } from 'src/app/Shared/models/Tag';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent {
  tags?:Tag[];
  constructor(fertilizerService:FertilizerService) {
    this.tags=fertilizerService.getAllTags();
  }

  ngOnInit():void{

  }

}
