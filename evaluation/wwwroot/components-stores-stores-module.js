(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-stores-stores-module"],{

/***/ "6X+k":
/*!*******************************************************!*\
  !*** ./src/app/components/stores/stores.component.ts ***!
  \*******************************************************/
/*! exports provided: StoresComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoresComponent", function() { return StoresComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class StoresComponent {
    constructor() { }
    ngOnInit() {
    }
}
StoresComponent.ɵfac = function StoresComponent_Factory(t) { return new (t || StoresComponent)(); };
StoresComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StoresComponent, selectors: [["app-stores"]], decls: 2, vars: 0, template: function StoresComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "stores works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdG9yZXMuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "BNG+":
/*!************************************************************!*\
  !*** ./src/app/components/stores/stores-routing.module.ts ***!
  \************************************************************/
/*! exports provided: StoresRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoresRoutingModule", function() { return StoresRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _stores_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stores.component */ "6X+k");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    {
        path: '',
        component: _stores_component__WEBPACK_IMPORTED_MODULE_1__["StoresComponent"]
    }
];
class StoresRoutingModule {
}
StoresRoutingModule.ɵfac = function StoresRoutingModule_Factory(t) { return new (t || StoresRoutingModule)(); };
StoresRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: StoresRoutingModule });
StoresRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](StoresRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "e7lA":
/*!****************************************************!*\
  !*** ./src/app/components/stores/stores.module.ts ***!
  \****************************************************/
/*! exports provided: StoresModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoresModule", function() { return StoresModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _stores_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stores-routing.module */ "BNG+");
/* harmony import */ var _stores_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stores.component */ "6X+k");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




class StoresModule {
}
StoresModule.ɵfac = function StoresModule_Factory(t) { return new (t || StoresModule)(); };
StoresModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: StoresModule });
StoresModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _stores_routing_module__WEBPACK_IMPORTED_MODULE_1__["StoresRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](StoresModule, { declarations: [_stores_component__WEBPACK_IMPORTED_MODULE_2__["StoresComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _stores_routing_module__WEBPACK_IMPORTED_MODULE_1__["StoresRoutingModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=components-stores-stores-module.js.map