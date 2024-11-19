import { ThemePalette } from "@angular/material/core";
import { TotsFilterBoxButtonMatDirective } from "./tots-filter-box-default-config";
import { TotsItemFilter } from "./tots-item-filter";

export class TotsFilterBoxConfig {
    filters: Array<TotsItemFilter> = [];

    textButton: string = '';
    textAddButton? : string;
    textClearButton: string = '';
    isOnlyIconButton: boolean = false;
    textApplyFilters: string = '';
    buttonIcon? : string;
    matButtonDirective? : TotsFilterBoxButtonMatDirective;
    matButtonColor? : ThemePalette;
    menuButtonsColor? : ThemePalette;
}
