// Exercise 07 — UnsavedChangesGuard (CanDeactivate)
// Step 77: Warns the user before leaving a dirty form
// CanDeactivate guards prevent accidental loss of form data

import { CanDeactivateFn } from '@angular/router';

export interface HasUnsavedChanges {
  hasUnsavedChanges(): boolean;
}

export const unsavedChangesGuard: CanDeactivateFn<HasUnsavedChanges> = (component) => {
  if (component.hasUnsavedChanges()) {
    return window.confirm('You have unsaved changes. Leave anyway?');
  }
  return true;
};
