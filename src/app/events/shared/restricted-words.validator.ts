import { FormControl, ValidationErrors } from "@angular/forms";

// Need to ignore letter case - on progress
export function restrictedWords(words: string[]) {
    return (control: FormControl): ValidationErrors | null => {
        if(!words) return null;
        let invalidWords: (string | null)[] = words.map((w) => control.value.includes(w) ? w : null)
        .filter((w) => w!=null);
        return invalidWords && invalidWords.length > 0
            ? {'restrictedWords' : invalidWords.join(', ')} : null;
    }
}