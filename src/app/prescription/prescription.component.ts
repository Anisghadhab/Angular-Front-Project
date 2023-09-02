import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-prescription',
  templateUrl: './prescription.component.html',
  styleUrls: ['./prescription.component.css']
})
export class PrescriptionComponent implements OnInit {
  consultationId!: number;
  constructor(
    private route: ActivatedRoute
  ) { }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.consultationId = +params['id'];
      
    });
}





}
