import { Component, ElementRef, Inject, Input, ViewChild } from '@angular/core';
import { JQ_TOKEN } from './jQuery.service';

@Component({
    selector: 'simple-modal',
    template: `
    <div id={{elementId}} #modalcontainer class="modal fade" tabindex="-1">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">
                        <span>&times;</span>
                    </button>
                    <h4 class="modal-title">{{title}}</h4>
                </div>
                <div (click)="closeModal()" class="modal-body">
                    <ng-content></ng-content>
                </div>
            </div>
        </div>
    </div>
    `,
    styles: [`.modal-body { height: 400px; overflow-y: scroll; }`]  
})

export class SimpleModalComponent {
    @Input() title!: string
    @Input() elementId!: string
    @Input() closeOnBodyClick!: boolean
    @ViewChild('modalcontainer') modalElement!: ElementRef

    constructor(@Inject(JQ_TOKEN) private $: any) {

    }

    closeModal() {
        if(this.closeOnBodyClick)
            this.$(this.modalElement.nativeElement).modal('hide'); 
        //this.$('#'+this.elementId).modal('hide'); This also works
    }
}