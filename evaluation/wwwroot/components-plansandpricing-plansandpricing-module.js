(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-plansandpricing-plansandpricing-module"],{

/***/ "2tgm":
/*!**********************************************************************!*\
  !*** ./src/app/components/plansandpricing/plansandpricing.module.ts ***!
  \**********************************************************************/
/*! exports provided: PlansandpricingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlansandpricingModule", function() { return PlansandpricingModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _plansandpricing_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./plansandpricing-routing.module */ "npiA");
/* harmony import */ var _plansandpricing_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./plansandpricing.component */ "blOn");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




class PlansandpricingModule {
}
PlansandpricingModule.ɵfac = function PlansandpricingModule_Factory(t) { return new (t || PlansandpricingModule)(); };
PlansandpricingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: PlansandpricingModule });
PlansandpricingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _plansandpricing_routing_module__WEBPACK_IMPORTED_MODULE_1__["PlansandpricingRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](PlansandpricingModule, { declarations: [_plansandpricing_component__WEBPACK_IMPORTED_MODULE_2__["PlansandpricingComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _plansandpricing_routing_module__WEBPACK_IMPORTED_MODULE_1__["PlansandpricingRoutingModule"]] }); })();


/***/ }),

/***/ "blOn":
/*!*************************************************************************!*\
  !*** ./src/app/components/plansandpricing/plansandpricing.component.ts ***!
  \*************************************************************************/
/*! exports provided: PlansandpricingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlansandpricingComponent", function() { return PlansandpricingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class PlansandpricingComponent {
    constructor() { }
    ngOnInit() {
    }
}
PlansandpricingComponent.ɵfac = function PlansandpricingComponent_Factory(t) { return new (t || PlansandpricingComponent)(); };
PlansandpricingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PlansandpricingComponent, selectors: [["app-plansandpricing"]], decls: 2, vars: 0, template: function PlansandpricingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "plansandpricing works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwbGFuc2FuZHByaWNpbmcuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "npiA":
/*!******************************************************************************!*\
  !*** ./src/app/components/plansandpricing/plansandpricing-routing.module.ts ***!
  \******************************************************************************/
/*! exports provided: PlansandpricingRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlansandpricingRoutingModule", function() { return PlansandpricingRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _plansandpricing_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./plansandpricing.component */ "blOn");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    {
        path: '',
        component: _plansandpricing_component__WEBPACK_IMPORTED_MODULE_1__["PlansandpricingComponent"]
    }
];
class PlansandpricingRoutingModule {
}
PlansandpricingRoutingModule.ɵfac = function PlansandpricingRoutingModule_Factory(t) { return new (t || PlansandpricingRoutingModule)(); };
PlansandpricingRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: PlansandpricingRoutingModule });
PlansandpricingRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](PlansandpricingRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=components-plansandpricing-plansandpricing-module.js.map