import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {}

  onButtonClick() {
    this.testPage();
  }

  testPage() {
    return this.authService.testPage().subscribe(
      (response) => {
        console.log('test works');
      },
      (error) => {
        console.log(error);
        this.router.navigate(['/login']);
      }
    );
  }
}
