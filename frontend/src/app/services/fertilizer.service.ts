import { Injectable } from '@angular/core';
import { sample_ferilizer, sample_tags } from 'src/data';
import { Fertilizer } from '../Shared/models/Fertilizer';
import { Tag } from '../Shared/models/Tag';

@Injectable({
  providedIn: 'root'
})
export class FertilizerService {

  constructor() { }

  getAll():Fertilizer[]{
    return sample_ferilizer;
  }

  getAllFertilizerBySearchTerm(searchTerm:string){
    return this.getAll().filter(Fertilizer =>Fertilizer.name.toLowerCase().includes(searchTerm.toLowerCase()))
  }

  getAllTags():Tag[]{
    return sample_tags
  }

  getAllFoodByTag(tag:string):Fertilizer[]{
    return tag == "All"?
    this.getAll():
    this.getAll().filter(Fertilizer => Fertilizer.tags?.includes(tag));
  }

  getFertilizerById(fertilizerId:string):Fertilizer{
    return this.getAll().find(fertilizer => fertilizer.id == fertilizerId)?? new Fertilizer();
  }
}
