(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-newsurvey-newsurvey-module"],{

/***/ "LnMY":
/*!**********************************************************!*\
  !*** ./src/app/components/newsurvey/newsurvey.module.ts ***!
  \**********************************************************/
/*! exports provided: NewsurveyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsurveyModule", function() { return NewsurveyModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _newsurvey_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newsurvey-routing.module */ "RfAl");
/* harmony import */ var _newsurvey_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./newsurvey.component */ "YGzA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




class NewsurveyModule {
}
NewsurveyModule.ɵfac = function NewsurveyModule_Factory(t) { return new (t || NewsurveyModule)(); };
NewsurveyModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: NewsurveyModule });
NewsurveyModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _newsurvey_routing_module__WEBPACK_IMPORTED_MODULE_1__["NewsurveyRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](NewsurveyModule, { declarations: [_newsurvey_component__WEBPACK_IMPORTED_MODULE_2__["NewsurveyComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _newsurvey_routing_module__WEBPACK_IMPORTED_MODULE_1__["NewsurveyRoutingModule"]] }); })();


/***/ }),

/***/ "RfAl":
/*!******************************************************************!*\
  !*** ./src/app/components/newsurvey/newsurvey-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: NewsurveyRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsurveyRoutingModule", function() { return NewsurveyRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _newsurvey_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newsurvey.component */ "YGzA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    {
        path: '',
        component: _newsurvey_component__WEBPACK_IMPORTED_MODULE_1__["NewsurveyComponent"]
    }
];
class NewsurveyRoutingModule {
}
NewsurveyRoutingModule.ɵfac = function NewsurveyRoutingModule_Factory(t) { return new (t || NewsurveyRoutingModule)(); };
NewsurveyRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: NewsurveyRoutingModule });
NewsurveyRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](NewsurveyRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "YGzA":
/*!*************************************************************!*\
  !*** ./src/app/components/newsurvey/newsurvey.component.ts ***!
  \*************************************************************/
/*! exports provided: NewsurveyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsurveyComponent", function() { return NewsurveyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class NewsurveyComponent {
    constructor() { }
    ngOnInit() {
    }
}
NewsurveyComponent.ɵfac = function NewsurveyComponent_Factory(t) { return new (t || NewsurveyComponent)(); };
NewsurveyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NewsurveyComponent, selectors: [["app-newsurvey"]], decls: 2, vars: 0, template: function NewsurveyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "newsurvey works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuZXdzdXJ2ZXkuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ })

}]);
//# sourceMappingURL=components-newsurvey-newsurvey-module.js.map