import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'upvote',
    template: `
    <div class="votingWidgetContainer pointable" (click)="onClick()">
        <div class="well votingWidget">
            <div class="votingButton">    
                <i [ngClass]="heartIcon" [ngStyle]="heartColor"></i>
            </div>
            <div class="badge badge-inverse votingCount">
                <div>{{count}}</div>
            </div>
        </div>
    </div>`,
    styleUrl: './upvote.component.css'
})

export class UpvoteComponent {
    // Input Setter 
    @Input() set voted(val: boolean) {
        this.heartIcon = val ?  ['glyphicon glyphicon-heart']: ['glyphicon glyphicon-heart-empty']
        this.heartColor = val ? {'color':'red'} : {}
    }
    @Input() count!: number
    @Output() vote = new EventEmitter();
    heartIcon!: any
    heartColor!: any

    onClick() {
        this.vote.emit({});
    }
}