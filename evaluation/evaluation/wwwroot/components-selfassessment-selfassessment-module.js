(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-selfassessment-selfassessment-module"],{

/***/ "8pcF":
/*!********************************************************************!*\
  !*** ./src/app/components/selfassessment/selfassessment.module.ts ***!
  \********************************************************************/
/*! exports provided: SelfassessmentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelfassessmentModule", function() { return SelfassessmentModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _selfassessment_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./selfassessment-routing.module */ "JXYa");
/* harmony import */ var _selfassessment_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./selfassessment.component */ "N1Zt");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




class SelfassessmentModule {
}
SelfassessmentModule.ɵfac = function SelfassessmentModule_Factory(t) { return new (t || SelfassessmentModule)(); };
SelfassessmentModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: SelfassessmentModule });
SelfassessmentModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _selfassessment_routing_module__WEBPACK_IMPORTED_MODULE_1__["SelfassessmentRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](SelfassessmentModule, { declarations: [_selfassessment_component__WEBPACK_IMPORTED_MODULE_2__["SelfassessmentComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _selfassessment_routing_module__WEBPACK_IMPORTED_MODULE_1__["SelfassessmentRoutingModule"]] }); })();


/***/ }),

/***/ "JXYa":
/*!****************************************************************************!*\
  !*** ./src/app/components/selfassessment/selfassessment-routing.module.ts ***!
  \****************************************************************************/
/*! exports provided: SelfassessmentRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelfassessmentRoutingModule", function() { return SelfassessmentRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _selfassessment_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./selfassessment.component */ "N1Zt");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    {
        path: '',
        component: _selfassessment_component__WEBPACK_IMPORTED_MODULE_1__["SelfassessmentComponent"]
    }
];
class SelfassessmentRoutingModule {
}
SelfassessmentRoutingModule.ɵfac = function SelfassessmentRoutingModule_Factory(t) { return new (t || SelfassessmentRoutingModule)(); };
SelfassessmentRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: SelfassessmentRoutingModule });
SelfassessmentRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](SelfassessmentRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "N1Zt":
/*!***********************************************************************!*\
  !*** ./src/app/components/selfassessment/selfassessment.component.ts ***!
  \***********************************************************************/
/*! exports provided: SelfassessmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelfassessmentComponent", function() { return SelfassessmentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class SelfassessmentComponent {
    constructor() { }
    ngOnInit() {
    }
}
SelfassessmentComponent.ɵfac = function SelfassessmentComponent_Factory(t) { return new (t || SelfassessmentComponent)(); };
SelfassessmentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SelfassessmentComponent, selectors: [["app-selfassessment"]], decls: 2, vars: 0, template: function SelfassessmentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "selfassessment works!recereredfd");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZWxmYXNzZXNzbWVudC5jb21wb25lbnQuY3NzIn0= */"] });


/***/ })

}]);
//# sourceMappingURL=components-selfassessment-selfassessment-module.js.map