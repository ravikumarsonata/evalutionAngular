(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-questionnaire-questionnaire-module"],{

/***/ "B8eZ":
/*!**************************************************************************!*\
  !*** ./src/app/components/questionnaire/questionnaire-routing.module.ts ***!
  \**************************************************************************/
/*! exports provided: QuestionnaireRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionnaireRoutingModule", function() { return QuestionnaireRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _questionnaire_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./questionnaire.component */ "H1T3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    {
        path: '',
        component: _questionnaire_component__WEBPACK_IMPORTED_MODULE_1__["QuestionnaireComponent"]
    }
];
class QuestionnaireRoutingModule {
}
QuestionnaireRoutingModule.ɵfac = function QuestionnaireRoutingModule_Factory(t) { return new (t || QuestionnaireRoutingModule)(); };
QuestionnaireRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: QuestionnaireRoutingModule });
QuestionnaireRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](QuestionnaireRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "H1T3":
/*!*********************************************************************!*\
  !*** ./src/app/components/questionnaire/questionnaire.component.ts ***!
  \*********************************************************************/
/*! exports provided: QuestionnaireComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionnaireComponent", function() { return QuestionnaireComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class QuestionnaireComponent {
    constructor() { }
    ngOnInit() {
    }
}
QuestionnaireComponent.ɵfac = function QuestionnaireComponent_Factory(t) { return new (t || QuestionnaireComponent)(); };
QuestionnaireComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: QuestionnaireComponent, selectors: [["app-questionnaire"]], decls: 2, vars: 0, template: function QuestionnaireComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "questionnaire works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJxdWVzdGlvbm5haXJlLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "ZuBL":
/*!******************************************************************!*\
  !*** ./src/app/components/questionnaire/questionnaire.module.ts ***!
  \******************************************************************/
/*! exports provided: QuestionnaireModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionnaireModule", function() { return QuestionnaireModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _questionnaire_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./questionnaire-routing.module */ "B8eZ");
/* harmony import */ var _questionnaire_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./questionnaire.component */ "H1T3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




class QuestionnaireModule {
}
QuestionnaireModule.ɵfac = function QuestionnaireModule_Factory(t) { return new (t || QuestionnaireModule)(); };
QuestionnaireModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: QuestionnaireModule });
QuestionnaireModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _questionnaire_routing_module__WEBPACK_IMPORTED_MODULE_1__["QuestionnaireRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](QuestionnaireModule, { declarations: [_questionnaire_component__WEBPACK_IMPORTED_MODULE_2__["QuestionnaireComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _questionnaire_routing_module__WEBPACK_IMPORTED_MODULE_1__["QuestionnaireRoutingModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=components-questionnaire-questionnaire-module.js.map