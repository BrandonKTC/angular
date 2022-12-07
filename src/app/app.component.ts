import { Component } from "@angular/core";

@Component({
	selector: "app-root",
	// template: `<p>Hello World!</p>`, // can't use both template and styles at the same time
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.css"],
	// styles: ['']
})
export class AppComponent {
	name = "Brandon";
	imgURL = "https://picsum.photos/id/237/500/500";
	getName() {
		this.name;
	}

	changeImage(e: KeyboardEvent) {
		this.imgURL = (e.target as HTMLInputElement).value;
	}

	logImg(event: string) {
		console.log(event);
	}
}
