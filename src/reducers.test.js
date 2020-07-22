import addReducer from "./reducer";

describe("giftsReducer", () => {
  it("should sets up initial state", () => {
    const state = addReducer(undefined, {
      type: "@@INIT"
    });
    

    expect(state).toEqual({
        email: '',
    password:'',
    address:'',
    pincode:'',
    phoneno:''
    });
  });

  it("FETCH_CARD", () => {
    const props={
        email: '',
        password:'',
        address:'',
        pincode:'',
        phoneno:''
     }
    const action = {
      type: "SUBMIT",
      payload: { email: 'yudhajitadhikary@gmail.com',
      password:'1234',
      address:'Kolkata',
      pincode:'700137',
      phoneno:'9903547318' }
    };

    const state = addReducer(props, action);

    expect(state).toEqual({
        email: 'yudhajitadhikary@gmail.com',
        password:'1234',
        address:'Kolkata',
        pincode:'700137',
        phoneno:'9903547318'
    });
  });
})

 