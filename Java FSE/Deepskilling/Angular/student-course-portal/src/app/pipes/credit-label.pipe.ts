// Exercise 03 — CreditLabelPipe (Custom Pipe)
// Step 35: Transform credits number → human-readable string
// Pipes are pure by default: only re-run when the input reference changes.
// Set pure: false only for mutable data — use sparingly as it impacts performance.

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creditLabel',
  standalone: true,
  pure: true  // pure: re-runs only when input changes (default, best performance)
})
export class CreditLabelPipe implements PipeTransform {

  transform(credits: number | null | undefined): string {
    // Step 35: Handle edge cases — null, undefined, 0
    if (credits === null || credits === undefined || credits === 0) {
      return 'No Credits';
    }
    // 1 → '1 Credit', 2+ → '2 Credits'
    return credits === 1 ? '1 Credit' : `${credits} Credits`;
  }
}
