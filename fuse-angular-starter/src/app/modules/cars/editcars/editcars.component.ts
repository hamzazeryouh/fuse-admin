import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editcars',
  templateUrl: './editcars.component.html',
  styleUrls: ['./editcars.component.scss']
})
export class EditcarsComponent implements OnInit {
  years: number[] = [];
  selectedYear: number | null = null;
  fuelTypes: string[] = [];
  selectedFuelType: string | null = null;
  constructor() { }

  ngOnInit(): void {
    this.setupColorPicker();
    this.populateYears();
    this.populateFuelTypes();
  }


  sendForm(): void {
    // Perform actions on send button click
  }

  clearForm(): void {
    // Perform actions on clear button click
  }



  populateFuelTypes(): void {
    this.fuelTypes = ['Gasoline', 'Diesel', 'Electric', 'Hybrid'];
    // Add more fuel types as needed
  }

  updateSelectedFuelType(event: any): void {
    this.selectedFuelType = event.target.value;
  }

  populateYears(): void {
    const currentYear = new Date().getFullYear();
    const startYear = currentYear - 50; // Example: Show 50 years in the past
    const endYear = currentYear + 10;  // Example: Show 10 years in the future

    for (let year = startYear; year <= endYear; year++) {
      this.years.push(year);
    }
  }

  updateSelectedYear(event: any): void {
    this.selectedYear = parseInt(event.target.value);
  }

 /* formatYear(event: any): void {
    const inputElement = event.target as HTMLInputElement;
    let year = inputElement.value;
    const currentYear = new Date().getFullYear();

    // Ensure year is within a valid range
    if (year.length > 4) {
      year = year.slice(0, 4);
    }
    year = Math.min(Math.max(parseInt(year), 0), currentYear).toString();

    // Update the input field value
    inputElement.value = year;
  }*/

  setupColorPicker(): void {
    const colorInput = document.getElementById('color') as HTMLInputElement;
    const colorHexInput = document.getElementById('colorHex') as HTMLInputElement;

    colorInput.addEventListener('input', (event) => {
      const selectedColor = (event.target as HTMLInputElement).value;
      colorHexInput.value = selectedColor;
    });
  }

}
