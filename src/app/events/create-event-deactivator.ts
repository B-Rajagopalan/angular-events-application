import { CreateEventComponent } from "./index";

export function checkDirtyState(component:CreateEventComponent) {
    if(component.checkDirty()) {
      return window.confirm('Are you Sure?')
    }
    return true;
  }