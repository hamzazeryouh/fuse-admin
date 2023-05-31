import { Component, OnInit } from '@angular/core';
import { ImageService } from 'app/core/core/service/ImageService/image.service';

@Component({
  selector: 'app-image-uploader',
  templateUrl: './image-uploader.component.html',
  styleUrls: ['./image-uploader.component.scss']
})
export class ImageUploaderComponent implements OnInit {



  ngOnInit(): void {
  }

  uploadedImages: File[] = [];




  constructor(private imageService: ImageService) { }

  handleDrop(event: DragEvent) {
    event.preventDefault();
    const files = Array.from(event.dataTransfer?.files || []);

    files.forEach(file => {
      this.imageService.uploadImage(file).subscribe(uploadResponse => {
        // Handle upload response if needed
        this.imageService.saveImage(uploadResponse).subscribe(saveResponse => {
          // Handle save response if needed
        });
      });
    });
  }

  handleDragOver(event: DragEvent) {
    event.preventDefault();
  }

}
