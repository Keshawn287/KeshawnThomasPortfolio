import { Component } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { ContactFormComponent } from '../contact-form/contact-form.component';

@Component({
  selector: 'app-success-page',
  templateUrl: './success-page.component.html',
  styleUrls: ['./success-page.component.css']
})
export class SuccessPageComponent {
  constructor(private router: Router) {}

  goToHome() {
    this.router.navigate(['/home']);
  }

  goToContactForm() {
    this.router.navigate(['/contact-form']);
  }
}
