import { Component, EventEmitter, Input, OnInit } from "@angular/core";
import { Subject } from "rxjs";
import { TotsItemSelectedFilter } from "../entities/tots-item-filter";

@Component({
    selector: 'tots-base-column',
    template: ''
})
export class TotsFilterBaseComponent {

    @Input() item!: TotsItemSelectedFilter;
    //@Input() item: any;
    //@Input() onAction!: Subject<TotsActionTable>;

    /*getItemValue(): any {
        return TotsTableHelper.getItemValueByKey(this.item, this.column.field_key);
    }*/
}
