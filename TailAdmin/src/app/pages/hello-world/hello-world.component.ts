import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { PageBreadcrumbComponent } from "../../shared/components/common/page-breadcrumb/page-breadcrumb.component";

interface HelloResponse {
    message: string;
}

@Component({
    selector: 'app-hello-world',
    imports: [
    CommonModule,
    PageBreadcrumbComponent
],
    templateUrl: './hello-world.component.html',
    styles: ``
})
export class HelloWorldComponent implements OnInit {
    data: HelloResponse | null = null;
    error: string | null = null;

    constructor(private http: HttpClient) { }

    ngOnInit() {
        this.fetchData();
    }

    fetchData() {
        this.error = null;

        this.http.get<HelloResponse>('http://localhost:3000/hello').subscribe({
            next: (response) => {
                this.data = response;
            },
            error: () => {
                this.error = 'Failed to fetch data';
            }
        });
    }
}