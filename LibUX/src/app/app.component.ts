import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'LibraryUX';
  restItems: any;
  restItemsURL: 'http://localhost:8083/booksapi/books';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    console.log("test ng on init");
    this.getRestItems();
  }

  //read all the items from rest api

  getRestItems(): void {
    console.log("test getRestItems");
    this.restItemsServiceGetRestItems()
      .subscribe(
        restItems => {
          console.log('test restitems');
          this.restItems = restItems;
          console.log(this.restItems);
        }
      )

  }

 public restItemsServiceGetRestItems() {
    console.log("test restItemsServiceGetRestItems");
    console.log("url " + this.restItemsURL);
    return this.http
      //.get<any[]>(this.restItemsURL)
      .get<any[]>('http://localhost:8083/booksapi/books')
      .pipe(map(data => data));
  }

}
