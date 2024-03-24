import { ISession } from "../shared"
import { VoterService } from "./voter.service"
import { of } from "rxjs"

describe('Voter Service', () => {
    let voterService: VoterService, mockHttp;

    beforeEach(() => {
        mockHttp = jasmine.createSpyObj('mockHttp',['delete','post'])
        voterService = new VoterService(mockHttp);
    })

    describe('deleteVoter', () => {
        it('should delete a voter from voters array', () => {
            const session = { id:9, voters: ["hello", "world"] }
            const voterName = { firstName: "hello" }
            mockHttp!.delete.and.returnValue(of (false))
            voterService.deleteVoter(2, <ISession>session,voterName)
            
            expect(session.voters.length).toBe(1);
            expect(session.voters[0]).toBe("world")
        })

        it('should call delete with right URL', () => {
            const session = { id:9, voters: ["hello", "world"] }
            const voterName = { firstName: "hello" }
            mockHttp!.delete.and.returnValue(of (false))
            voterService.deleteVoter(2, <ISession>session,voterName)

            expect(mockHttp!.delete).toHaveBeenCalledWith(`/api/events/2/sessions/9/voters/hello`)
        })
    })

    describe('addVoter', () => {
        it('should call add with right URL', () => {
            const session = { id:9, voters: ["hello", "world"] }
            const voterName = { firstName: "java" }
            mockHttp!.post.and.returnValue(of (false))
            voterService.addVoter(2, <ISession>session,voterName)
    
            expect(mockHttp!.post).toHaveBeenCalledWith(`/api/events/2/sessions/9/voters/java`, {}, 
             jasmine.any(Object))
        })
    })

})
