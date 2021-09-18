import * as i0 from '@angular/core';
import { Injectable, Component, NgModule } from '@angular/core';

class ThereseLibService {
    constructor() { }
}
ThereseLibService.ɵfac = function ThereseLibService_Factory(t) { return new (t || ThereseLibService)(); };
ThereseLibService.ɵprov = i0.ɵɵdefineInjectable({ token: ThereseLibService, factory: ThereseLibService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ThereseLibService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();

class ThereseLibComponent {
    constructor() { }
    ngOnInit() {
    }
}
ThereseLibComponent.ɵfac = function ThereseLibComponent_Factory(t) { return new (t || ThereseLibComponent)(); };
ThereseLibComponent.ɵcmp = i0.ɵɵngDeclareComponent({ version: "11.2.14", type: ThereseLibComponent, selector: "lib-therese-lib", ngImport: i0, template: `
    <p>
      therese-lib works!
    </p>
  `, isInline: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ThereseLibComponent, [{
        type: Component,
        args: [{
                selector: 'lib-therese-lib',
                template: `
    <p>
      therese-lib works!
    </p>
  `,
                styles: []
            }]
    }], function () { return []; }, null); })();

class ThereseLibModule {
}
ThereseLibModule.ɵfac = function ThereseLibModule_Factory(t) { return new (t || ThereseLibModule)(); };
ThereseLibModule.ɵmod = i0.ɵɵdefineNgModule({ type: ThereseLibModule });
ThereseLibModule.ɵinj = i0.ɵɵdefineInjector({ imports: [[]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(ThereseLibModule, { declarations: [ThereseLibComponent], exports: [ThereseLibComponent] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ThereseLibModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    ThereseLibComponent
                ],
                imports: [],
                exports: [
                    ThereseLibComponent
                ]
            }]
    }], null, null); })();

/*
 * Public API Surface of therese-lib
 */

/**
 * Generated bundle index. Do not edit.
 */

export { ThereseLibComponent, ThereseLibModule, ThereseLibService };
//# sourceMappingURL=scope-therese-lib.js.map
