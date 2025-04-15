export class TotsItemFilter {
    id?: string = '';
    title: string = '';
    component: any;
    extra?: any;
    value?: any;
}

export class TotsItemSelectedFilter {
    filter!: TotsItemFilter;
    conditional: number = 0;
    value?: any;
}