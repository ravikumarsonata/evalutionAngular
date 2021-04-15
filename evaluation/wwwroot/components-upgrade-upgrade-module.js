(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-upgrade-upgrade-module"],{

/***/ "ZiiF":
/*!*********************************************************!*\
  !*** ./src/app/components/upgrade/upgrade.component.ts ***!
  \*********************************************************/
/*! exports provided: UpgradeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpgradeComponent", function() { return UpgradeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class UpgradeComponent {
    constructor() { }
    ngOnInit() {
    }
}
UpgradeComponent.ɵfac = function UpgradeComponent_Factory(t) { return new (t || UpgradeComponent)(); };
UpgradeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UpgradeComponent, selectors: [["app-upgrade"]], decls: 2, vars: 0, template: function UpgradeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "upgrade works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1cGdyYWRlLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "cCqi":
/*!**************************************************************!*\
  !*** ./src/app/components/upgrade/upgrade-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: UpgradeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpgradeRoutingModule", function() { return UpgradeRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _upgrade_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./upgrade.component */ "ZiiF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    {
        path: '',
        component: _upgrade_component__WEBPACK_IMPORTED_MODULE_1__["UpgradeComponent"]
    }
];
class UpgradeRoutingModule {
}
UpgradeRoutingModule.ɵfac = function UpgradeRoutingModule_Factory(t) { return new (t || UpgradeRoutingModule)(); };
UpgradeRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: UpgradeRoutingModule });
UpgradeRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](UpgradeRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "fpCc":
/*!******************************************************!*\
  !*** ./src/app/components/upgrade/upgrade.module.ts ***!
  \******************************************************/
/*! exports provided: UpgradeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpgradeModule", function() { return UpgradeModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _upgrade_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./upgrade-routing.module */ "cCqi");
/* harmony import */ var _upgrade_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./upgrade.component */ "ZiiF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




class UpgradeModule {
}
UpgradeModule.ɵfac = function UpgradeModule_Factory(t) { return new (t || UpgradeModule)(); };
UpgradeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: UpgradeModule });
UpgradeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _upgrade_routing_module__WEBPACK_IMPORTED_MODULE_1__["UpgradeRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](UpgradeModule, { declarations: [_upgrade_component__WEBPACK_IMPORTED_MODULE_2__["UpgradeComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _upgrade_routing_module__WEBPACK_IMPORTED_MODULE_1__["UpgradeRoutingModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=components-upgrade-upgrade-module.js.map