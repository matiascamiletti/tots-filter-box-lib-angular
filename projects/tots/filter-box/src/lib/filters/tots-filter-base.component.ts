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
        this.initializePresetValue();
        this.loadInput();
    }

    protected initializePresetValue() {
        if (this.item && this.item.value !== undefined) {
            this.input.setValue(this.item.value, { emitEvent: false });
        }
    }


    onChange() {
        this.change.emit(true);
    }

    loadInput() {
        // Ensure the initial value is set
        if (this.item.value !== undefined) {
            this.input.setValue(this.item.value, { emitEvent: false });
        }

        this.input.valueChanges.subscribe(val => {
            this.item.value = val;
            this.onChange();
        });
    }
}
