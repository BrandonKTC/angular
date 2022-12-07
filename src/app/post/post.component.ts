import {
	Component,
	EventEmitter,
	Input,
	Output,
	OnInit,
	OnChanges,
	DoCheck,
	SimpleChanges,
	AfterContentInit,
	AfterContentChecked,
	AfterViewInit,
	AfterViewChecked,
	OnDestroy,
} from "@angular/core";

@Component({
	selector: "app-post",
	templateUrl: "./post.component.html",
	styleUrls: ["./post.component.css"],
})
export class PostComponent
	implements
		OnInit,
		OnChanges,
		DoCheck,
		AfterContentInit,
		AfterContentChecked,
		AfterViewInit,
		AfterViewChecked,
		OnDestroy
{
	@Input() postImg = "";
	@Output() selectedImg = new EventEmitter<string>();

	constructor() {
		console.log("constructor() called", this.postImg); // call in first
	}

	ngOnInit() {
		console.log("ngOnInit() called", this.postImg); // Receive the data
	}

	ngOnChanges(changes: SimpleChanges): void {
		console.log("ngOnChanges() called");
	}

	ngDoCheck(): void {
		console.log("ngDoCheck() called");
	}

	ngAfterContentInit(): void {
		console.log("ngAfterContentInit() called");
	}

	ngAfterContentChecked(): void {}

	ngAfterViewInit(): void {
		console.log("ngAfterViewInit() called"); // called in last and every angular changes
	}

	ngAfterViewChecked(): void {
		console.log("ngAfterViewInit() called");
	}

	ngOnDestroy(): void {
		console.log("ngOnDestroy() called");
	}
}
