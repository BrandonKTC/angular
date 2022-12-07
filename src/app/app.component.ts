import { Component } from "@angular/core";

@Component({
	selector: "app-root",
	// template: `<p>Hello World!</p>`, // can't use both template and styles at the same time
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.css"],
	// styles: ['']
})
export class AppComponent {
	name = "brandon";
	imgURL = "https://picsum.photos/id/237/500/500";
	images = [
		"https://picsum.photos/237/300",
		"https://picsum.photos/187/300",
		"https://picsum.photos/145/300",
	];
	currentDate = new Date();
	cost = 2000;
	temperature = 25.3;
	pizza = {
		toppings: ["pepperoni", "bacon", "mushroom"],
		size: "large",
	};
	blueClass = false;
	fontSize = 16;

	getName() {
		return this.name;
	}

	changeImage(e: KeyboardEvent) {
		return this.imgURL;
	}

	logImg(event: string) {
		console.log(event);
	}
}
