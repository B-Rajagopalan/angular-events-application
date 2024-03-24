import { ComponentFixture, TestBed } from '@angular/core/testing'
import { SessionListComponent } from './session-list.component'
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core'
import { AuthService } from '../../user/auth.service'
import { VoterService } from './voter.service'
import { DurationPipe } from '../shared'
import { By } from '@angular/platform-browser' 

describe('SessionListComponent', () => {
    let mockAuthService: AuthService,
        mockVoterService: VoterService,
        fixture: ComponentFixture<SessionListComponent>,
        component: SessionListComponent,
        element: HTMLElement,
        debugEl: DebugElement

    beforeEach(() => { 
        mockAuthService = <AuthService>{isAuthenticated: ()=> true, currentUser: { userName: { firstName:'Raja' } }}
        mockVoterService = <VoterService><unknown>{ userHasVoted: () => true } 
        // can't cast to VoterService without <unknown>
        
        TestBed.configureTestingModule({
            declarations: [
                SessionListComponent,
                DurationPipe,
                //UpvoteComponent,
                //CollapsibleWellComponent   (Deep Integration Test)
            ],
            providers: [
                { provide: AuthService, useValue: mockAuthService },
                { provide: VoterService, useValue: mockVoterService }
            ],
            schemas: [NO_ERRORS_SCHEMA] // to ignore <collapsible-well> and <upvote> (Shallow Integration Test)
        })

        fixture = TestBed.createComponent(SessionListComponent);
        component = fixture.componentInstance;
        element = fixture.nativeElement;
        debugEl = fixture.debugElement;
    })

    describe('initial display', () => {
        it('should have correct session name', () => {
            //Arrange
            component.sessions = [{ name: 'Session 1', id: 3, presenter: 'Joe', duration: 1, 
            level: 'beginner', abstract: 'abstract', voters: ['hello', 'world']}]
            component.filterBy = 'all'
            component.sortBy = 'name'
            component.eventId = 1
            component.ngOnChanges()

            //Act
            fixture.detectChanges();  // to update the template with input changes

            //Assert
            expect(element.querySelector('[session-title]')!.textContent)
                .toContain('Session 1')  //Using nativeElement
           
            expect(debugEl.query(By.css('[session-title]')).nativeElement.textContent)
                .toContain('Session 1')  //Using debugElement
        })
    })
})