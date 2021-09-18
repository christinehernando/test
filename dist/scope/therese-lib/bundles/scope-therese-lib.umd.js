(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('@scope/therese-lib', ['exports', '@angular/core'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.scope = global.scope || {}, global.scope['therese-lib'] = {}), global.ng.core));
}(this, (function (exports, i0) { 'use strict';

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () {
                            return e[k];
                        }
                    });
                }
            });
        }
        n['default'] = e;
        return Object.freeze(n);
    }

    var i0__namespace = /*#__PURE__*/_interopNamespace(i0);

    var ThereseLibService = /** @class */ (function () {
        function ThereseLibService() {
        }
        return ThereseLibService;
    }());
    ThereseLibService.ɵfac = function ThereseLibService_Factory(t) { return new (t || ThereseLibService)(); };
    ThereseLibService.ɵprov = i0__namespace.ɵɵdefineInjectable({ token: ThereseLibService, factory: ThereseLibService.ɵfac, providedIn: 'root' });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(ThereseLibService, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], function () { return []; }, null);
    })();

    var ThereseLibComponent = /** @class */ (function () {
        function ThereseLibComponent() {
        }
        ThereseLibComponent.prototype.ngOnInit = function () {
        };
        return ThereseLibComponent;
    }());
    ThereseLibComponent.ɵfac = function ThereseLibComponent_Factory(t) { return new (t || ThereseLibComponent)(); };
    ThereseLibComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ version: "11.2.14", type: ThereseLibComponent, selector: "lib-therese-lib", ngImport: i0__namespace, template: "\n    <p>\n      therese-lib works!\n    </p>\n  ", isInline: true });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(ThereseLibComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'lib-therese-lib',
                        template: "\n    <p>\n      therese-lib works!\n    </p>\n  ",
                        styles: []
                    }]
            }], function () { return []; }, null);
    })();

    var ThereseLibModule = /** @class */ (function () {
        function ThereseLibModule() {
        }
        return ThereseLibModule;
    }());
    ThereseLibModule.ɵfac = function ThereseLibModule_Factory(t) { return new (t || ThereseLibModule)(); };
    ThereseLibModule.ɵmod = i0__namespace.ɵɵdefineNgModule({ type: ThereseLibModule });
    ThereseLibModule.ɵinj = i0__namespace.ɵɵdefineInjector({ imports: [[]] });
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(ThereseLibModule, { declarations: [ThereseLibComponent], exports: [ThereseLibComponent] }); })();
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(ThereseLibModule, [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            ThereseLibComponent
                        ],
                        imports: [],
                        exports: [
                            ThereseLibComponent
                        ]
                    }]
            }], null, null);
    })();

    /*
     * Public API Surface of therese-lib
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.ThereseLibComponent = ThereseLibComponent;
    exports.ThereseLibModule = ThereseLibModule;
    exports.ThereseLibService = ThereseLibService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=scope-therese-lib.umd.js.map
