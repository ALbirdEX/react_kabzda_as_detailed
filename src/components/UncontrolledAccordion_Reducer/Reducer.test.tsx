import {reducer, StateType, TOGGLE_COLLAPSED} from "./Reducer";

test("collapsed should true", () => {
    //data
    const state: StateType = {
        collapsed: false
    }
    //action
    const newState = reducer(state, {type: TOGGLE_COLLAPSED})

    //expection
    expect(newState.collapsed).toBe(true)
})

test("collapsed should false", () => {

    const state: StateType = {
        collapsed: true
    }

    const newState = reducer(state, {type: TOGGLE_COLLAPSED})

    expect(newState.collapsed).toBe(false)
})

test("type to fake", () => {

    const state: StateType = {
        collapsed: true
    }

    expect(()=>{
        reducer(state, {type: "FAKETYPE"})
    }).toThrowError()
})