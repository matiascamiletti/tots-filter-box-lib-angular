import { Injectable, InjectionToken } from "@angular/core";
import { ThemePalette } from "@angular/material/core";

export const TOTS_FILTER_BOX_DEFAULT_CONFIG = new InjectionToken<TotsFilterBoxDefaultConfig>('filter_box_default_config');
export type TotsFilterBoxButtonMatDirective = "mat-button"|"mat-flat-button"|"mat-raised-button"|"mat-stroked-button";

@Injectable()
export class TotsFilterBoxDefaultConfig {
  matButtonMaterialDirective? : TotsFilterBoxButtonMatDirective = "mat-button";
  matButtonColor? : ThemePalette = undefined;
  buttonIcon? : string|undefined = "tune";
  buttonCaption? : string = "Filters";

  addButtonCaption? : string = "+ Add Filter";
  applyFiltersButtonCaption? : string = "Apply filters";
  clearButtonCaption? : string = "Clear Filters";
  menuButtonsColor? : ThemePalette = "primary";
}
