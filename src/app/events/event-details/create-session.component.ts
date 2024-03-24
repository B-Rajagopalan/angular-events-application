import { Component, ElementRef, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ISession, restrictedWords } from '../shared';

@Component({
    selector: 'create-session',
    templateUrl: 'create-session.component.html',
    styles: [`
        em { font-family:'Source Code Pro',monospace; font-style:normal; float:right; color:#E05C65; padding-left:10px }
        .error input, .error select, .error textarea { background-color:#E3C3C5; }
    `]
})

export class CreateSessionComponent implements OnInit {
    newsessionForm!: FormGroup
    //Making FormControls public so that we can access them in html component
    name!: FormControl
    presenter!: FormControl
    duration!: FormControl
    level!: FormControl
    abstract!: FormControl

    mouseoversave!: boolean

    @Output() saveSessionEmitter = new EventEmitter();
    @Output() cancelEmitter = new EventEmitter();

    constructor(private elementRef: ElementRef) {

    }

    ngOnInit(): void {
       this.name = new FormControl('', Validators.required)
       this.presenter = new FormControl('', Validators.required)
       this.duration = new FormControl('', Validators.required)
       this.level = new FormControl('', Validators.required)
       this.abstract = new FormControl('', [Validators.required, Validators.maxLength(100), restrictedWords(['worst','fake'])])

       this.newsessionForm = new FormGroup(
        {
            name: this.name,
            presenter: this.presenter,
            duration: this.duration,
            level: this.level,
            abstract: this.abstract
        }
       )

        const targetElement = this.elementRef.nativeElement.querySelector('#targetElement');

        if (targetElement) {
            // Scroll to the target element
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    saveSession(formValues: any) {
        const session:ISession = {
            id: 0,
            name: formValues.name,
            presenter: formValues.presenter,
            duration: +formValues.duration,
            level: formValues.level,
            abstract: formValues.abstract,
            voters: []
        }
       this.saveSessionEmitter.emit(session);
    }

    cancel() {
        this.cancelEmitter.emit();
    }
    
}