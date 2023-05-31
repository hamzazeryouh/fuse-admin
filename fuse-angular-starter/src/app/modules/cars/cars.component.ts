import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Car } from 'app/core/core/models/Car/Car.model';
import { IFilterOption } from 'app/core/core/models/general/filter-option.model';
import { IPagedResult } from 'app/core/core/models/general/result-model';
import { CarService } from 'app/core/core/service/CarService/Car.service';
@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {
  
  cars: Car[] = [];
  form: FormGroup;
  filterOption: IFilterOption;
  CarPagedResult: IPagedResult<Car>;
  Car: Car;
  constructor(private carService: CarService) { }

  ngOnInit(): void {
    this.carService.GetAsPagedResult().subscribe(cars => {
      this.cars = cars.value;
    
      console.log( this.CarPagedResult +"log cars");
    });
  }

}
