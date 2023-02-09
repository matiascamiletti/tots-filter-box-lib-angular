import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { UntypedFormControl } from "@angular/forms";
import { Subject } from "rxjs";
import { TotsItemSelectedFilter } from "../entities/tots-item-filter";

@Component({
    selector: 'tots-base-column',
    template: ''
})
export class TotsFilterBaseComponent implements OnInit {

    @Input() item!: TotsItemSelectedFilter;
    @Output() change = new EventEmitter<boolean>();
    //@Input() item: any;
    //@Input() onAction!: Subject<TotsActionTable>;

    input = new UntypedFormControl();

    ngOnInit(): void {
        this.loadInput();
    }

    /*getItemValue(): any {
        return TotsTableHelper.getItemValueByKey(this.item, this.column.field_key);
    }*/

    onChange() {
        this.change.emit(true);
    }

    loadInput() {
        this.input.valueChanges.subscribe(val => {
            this.item.value = val;
        });
    }
}
