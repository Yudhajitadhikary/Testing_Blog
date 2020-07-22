
import {
    submitAction
} from "./actions";
import {
    SUBMIT
} from "./actionTypes.js";

describe("gift", () => {
    it('should create an action to add a todo', () => {
        const payload = { email: 'yudhajitadhikary@gmail.com',
        password:'1234',
        address:'Kolkata',
        pincode:'700137',
        phoneno:'9903547318' }
        const expectedAction = {
          type: SUBMIT,
          payload
        }
        expect(submitAction(payload)).toEqual(expectedAction)
      })
})