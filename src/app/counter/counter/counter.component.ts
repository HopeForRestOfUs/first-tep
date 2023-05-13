import { Component } from "@angular/core";

@Component({
    selector: 'app-counter',
    template: `
    
        <h3>
            Counter: {{ counter }}
        </h3><br>

        <button (click)="incearBy()" class="btn btn-primary m-1">+1</button>
        <button (click)="resetValue(10)" class="btn btn-primary m-1">Reset</button>
        <button (click)="decresBy()" class="btn btn-primary m-1">-1</button>
    `,
    styleUrls: []
})

export class AppCounter{

    public counter: number = 10;

    incearBy(): void{
        
        this.counter += 1;
    }

    decresBy(): void{

        if(this.counter <= 0) { this.counter = 0; return}
        this.counter -= 1;
    }

    resetValue(value: number): void{

        this.counter = value;
    }
}