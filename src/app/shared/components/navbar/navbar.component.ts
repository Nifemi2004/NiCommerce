import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  searchQuery!: string;

  search(): void {
    // Implement your search functionality here
    console.log('Searching for:', this.searchQuery);
    // You can call an API, perform filtering, or update the search results in the component
  }
}
