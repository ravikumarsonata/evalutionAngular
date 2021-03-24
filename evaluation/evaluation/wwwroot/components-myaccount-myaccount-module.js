(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-myaccount-myaccount-module"],{

/***/ "AKBL":
/*!*************************************************************!*\
  !*** ./src/app/components/myaccount/myaccount.component.ts ***!
  \*************************************************************/
/*! exports provided: MyaccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyaccountComponent", function() { return MyaccountComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class MyaccountComponent {
    constructor() { }
    ngOnInit() {
    }
}
MyaccountComponent.ɵfac = function MyaccountComponent_Factory(t) { return new (t || MyaccountComponent)(); };
MyaccountComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MyaccountComponent, selectors: [["app-myaccount"]], decls: 2, vars: 0, template: function MyaccountComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "myaccount works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJteWFjY291bnQuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "Mj/l":
/*!******************************************************************!*\
  !*** ./src/app/components/myaccount/myaccount-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: MyaccountRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyaccountRoutingModule", function() { return MyaccountRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _myaccount_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./myaccount.component */ "AKBL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    {
        path: '',
        component: _myaccount_component__WEBPACK_IMPORTED_MODULE_1__["MyaccountComponent"]
    }
];
class MyaccountRoutingModule {
}
MyaccountRoutingModule.ɵfac = function MyaccountRoutingModule_Factory(t) { return new (t || MyaccountRoutingModule)(); };
MyaccountRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: MyaccountRoutingModule });
MyaccountRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](MyaccountRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "yToQ":
/*!**********************************************************!*\
  !*** ./src/app/components/myaccount/myaccount.module.ts ***!
  \**********************************************************/
/*! exports provided: MyaccountModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyaccountModule", function() { return MyaccountModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _myaccount_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./myaccount-routing.module */ "Mj/l");
/* harmony import */ var _myaccount_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./myaccount.component */ "AKBL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




class MyaccountModule {
}
MyaccountModule.ɵfac = function MyaccountModule_Factory(t) { return new (t || MyaccountModule)(); };
MyaccountModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: MyaccountModule });
MyaccountModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _myaccount_routing_module__WEBPACK_IMPORTED_MODULE_1__["MyaccountRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](MyaccountModule, { declarations: [_myaccount_component__WEBPACK_IMPORTED_MODULE_2__["MyaccountComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _myaccount_routing_module__WEBPACK_IMPORTED_MODULE_1__["MyaccountRoutingModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=components-myaccount-myaccount-module.js.map