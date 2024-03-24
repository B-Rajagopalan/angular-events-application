import { ISession } from "../shared"
import { SessionListComponent } from "./session-list.component"

describe('SessionListComponent', () => {
    let component: SessionListComponent
    let mockAuthService: any, mockVoterService: any

    beforeEach(() => {
        component = new SessionListComponent(mockAuthService, mockVoterService)
    })

    describe('ngOnChanges', () => {
        it('should filter sessions correctly', () => {
            //Arrange
            component.eventId = 1
            component.sessions = <ISession[]> [{name : 'session 1', level: 'beginner'},
                                {name : 'session 2', level: 'intermediate'},
                                {name : 'session 3', level: 'intermediate'}]
            component.filterBy = "intermediate"
            component.sortBy = "name"
            //Act
            component.ngOnChanges()
            //Assert
            expect(component.visibleSessions.length).toBe(2)
        })

        it('should sort sessions correctly', () => {
            component.eventId = 1
            component.sessions = <ISession[]> [{name : 'session 1', level: 'beginner'},
                                {name : 'session 3', level: 'intermediate'},
                                {name : 'session 2', level: 'intermediate'}]
            component.filterBy = "all"
            component.sortBy = "name"

            component.ngOnChanges()

            expect(component.visibleSessions[2].name).toBe('session 3')
        })
    })
})