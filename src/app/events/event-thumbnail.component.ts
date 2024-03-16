import { Component, Input } from '@angular/core';
import { IEvent } from './index';

@Component({
    selector: 'event-thumbnail',
    template: `
    <div [routerLink]="['/events',event.id]" class="well hoverwell thumbnail">
        <h2>{{event.name}}</h2>  <!--removed event? because it is assured to be IEvent type-->
        <div>Date : {{event.date}}</div> 
        <div [ngClass]="setStylesNgClass()" [ngStyle]="setStylesNgStyle()" [ngSwitch]="event.time">
            Time : {{event.time}}
            <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
            <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
            <span *ngSwitchDefault>(Normal Start)</span>
        </div>
        <div>Price : \${{event.price}}</div> <!-- \ used to escape the special character-->
        <div [hidden]="!event.location">
          <span>Location : {{event.location?.address}}</span>
          <span class='pad-left'>{{event.location?.city}}, {{event.location?.country}}</span> 
        </div> 
        <div *ngIf="event?.onlineUrl">
            Online URL : {{event.onlineUrl}}
        </div>
    </div>`,
    styles:[`.pad-left { margin-left : 10px; }
             .well div { color : #bbb; }
             .thumbnail { min-height : 210px;}
             .bold { font-weight : bold, -webkit-text-stroke: 0.3px #000;/*outline for a text (width and color)*/} 
             .green { color: #8effa8 !important; }
         `]    
})

export class EventThumbnailComponent {
    @Input() event!:IEvent  // ! is a assurance to ts that it will be definitely assigned

    setStylesNgClass():any {
        if(this.event && this.event.time === '8:00 am')
            return ['green','bold'];
        return [];
    }

    setStylesNgStyle():any {
        if(this.event && this.event.time === '10:00 am')
            return {'color': 'red'};
        else if(this.event && this.event.time === '9:00 am')
            return {'color': 'yellow' , '-webkit-text-stroke' : ' 0.2px black'};
        return {};
    }
}
