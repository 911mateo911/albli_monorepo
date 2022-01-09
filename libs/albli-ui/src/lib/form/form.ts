import { BehaviorSubject, every, mergeAll, Observable } from 'rxjs';
import { FieldType } from './form.interface';

export class Form {
    private fields = new BehaviorSubject<FieldType[]>([]);

    hasPreventedSubmit = !this.fields.pipe(
        mergeAll(),
        every((element) => !element.hasError)
    );

    getFields$(): Observable<FieldType[]> {
        return this.fields;
    }

    getAllFields(): FieldType[] {
        return this.fields.getValue();
    }

    getErroredFields(): FieldType[] {
        return this.fields.value.filter(input => input.hasError);
    }

    addField(field: FieldType): void {
        this.fields.next([...this.fields.value, field]);
    }
}
