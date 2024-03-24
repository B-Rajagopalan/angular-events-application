import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'collapsible-well',
    template: `
    <div (click)="toggleContent()" class="well pointable">
        <ng-content select="[session-title]"></ng-content> <!-- displays the content inside selector -->
        <ng-content select="[session-body]" *ngIf="!collapse"></ng-content> 
    </div>
    `
})

export class CollapsibleWellComponent {
   collapse: boolean = false;

   toggleContent() {
    this.collapse = !this.collapse
   }
} 