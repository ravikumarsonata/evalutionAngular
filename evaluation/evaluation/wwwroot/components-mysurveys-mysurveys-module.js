(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-mysurveys-mysurveys-module"],{

/***/ "NT9P":
/*!*************************************************************!*\
  !*** ./src/app/components/mysurveys/mysurveys.component.ts ***!
  \*************************************************************/
/*! exports provided: MysurveysComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MysurveysComponent", function() { return MysurveysComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class MysurveysComponent {
    constructor() { }
    ngOnInit() {
    }
}
MysurveysComponent.ɵfac = function MysurveysComponent_Factory(t) { return new (t || MysurveysComponent)(); };
MysurveysComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MysurveysComponent, selectors: [["app-mysurveys"]], decls: 2, vars: 0, template: function MysurveysComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "mysurveys works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJteXN1cnZleXMuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "cGo6":
/*!**********************************************************!*\
  !*** ./src/app/components/mysurveys/mysurveys.module.ts ***!
  \**********************************************************/
/*! exports provided: MysurveysModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MysurveysModule", function() { return MysurveysModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _mysurveys_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mysurveys-routing.module */ "ioZB");
/* harmony import */ var _mysurveys_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mysurveys.component */ "NT9P");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




class MysurveysModule {
}
MysurveysModule.ɵfac = function MysurveysModule_Factory(t) { return new (t || MysurveysModule)(); };
MysurveysModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: MysurveysModule });
MysurveysModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _mysurveys_routing_module__WEBPACK_IMPORTED_MODULE_1__["MysurveysRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](MysurveysModule, { declarations: [_mysurveys_component__WEBPACK_IMPORTED_MODULE_2__["MysurveysComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _mysurveys_routing_module__WEBPACK_IMPORTED_MODULE_1__["MysurveysRoutingModule"]] }); })();


/***/ }),

/***/ "ioZB":
/*!******************************************************************!*\
  !*** ./src/app/components/mysurveys/mysurveys-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: MysurveysRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MysurveysRoutingModule", function() { return MysurveysRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _mysurveys_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mysurveys.component */ "NT9P");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    {
        path: '',
        component: _mysurveys_component__WEBPACK_IMPORTED_MODULE_1__["MysurveysComponent"]
    }
];
class MysurveysRoutingModule {
}
MysurveysRoutingModule.ɵfac = function MysurveysRoutingModule_Factory(t) { return new (t || MysurveysRoutingModule)(); };
MysurveysRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: MysurveysRoutingModule });
MysurveysRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](MysurveysRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=components-mysurveys-mysurveys-module.js.map