import { Directive, ElementRef, Inject, Input, OnInit } from '@angular/core';
import { JQ_TOKEN } from './jQuery.service';

@Directive({ 
    selector: '[modal-trigger]'
 })
export class ModalTriggerDirective implements OnInit {
    private domEl!: HTMLElement
    @Input('modal-trigger') modalId!: string

    constructor(@Inject(JQ_TOKEN) private $: any, private ref: ElementRef) {
        this.domEl = this.ref.nativeElement;
     }
    
    ngOnInit(): void {
        this.domEl.addEventListener('click', e => {
            this.$(`#${this.modalId}`).modal({}) // # attribute value of the div responsible for modal
        })
    }
}