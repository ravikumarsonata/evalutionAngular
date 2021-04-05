(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+803":
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/breadcrumb/breadcrumb.component.ts ***!
  \**********************************************************************/
/*! exports provided: BreadcrumbComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbComponent", function() { return BreadcrumbComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class BreadcrumbComponent {
    constructor() { }
    ngOnInit() {
    }
}
BreadcrumbComponent.ɵfac = function BreadcrumbComponent_Factory(t) { return new (t || BreadcrumbComponent)(); };
BreadcrumbComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BreadcrumbComponent, selectors: [["app-breadcrumb"]], decls: 0, vars: 0, template: function BreadcrumbComponent_Template(rf, ctx) { }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJicmVhZGNydW1iLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\DELL\Desktop\angular\evaluationangular\evalutionAngular\evaluation\ClientApp\src\main.ts */"zUnb");


/***/ }),

/***/ "2MiI":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 36, vars: 0, consts: [[1, "navbar", "navbar-expand-md", "navbar-dark", "bg-primary"], ["href", "#", 1, "navbar-brand", "abs"], ["type", "button", "data-toggle", "collapse", "data-target", "#collapsingNavbar", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "collapsingNavbar", 1, "navbar-collapse", "collapse"], [1, "navbar-nav"], [1, "nav-item", "active"], ["mat-mini-fab", "", "color", "mini-info", 2, "background-color", "darkcyan"], ["routerLink", "/selfassesment", "mat-button", "", 1, "nav-link"], [1, "nav-item"], ["routerLink", "/dashboard", "mat-button", "", 1, "nav-link"], ["routerLink", "/mysurveys", "mat-button", "", 1, "nav-link"], ["routerLink", "/assessors", "mat-button", "", 1, "nav-link"], ["routerLink", "/stores", "mat-button", "", 1, "nav-link"], ["routerLink", "/plansandpricing", "mat-button", "", 1, "nav-link"], [1, "navbar-nav", "ml-auto"], ["routerLink", "/upgrade", "mat-button", "", 1, "nav-link", "mat-raised-button", "light-button"], ["routerLink", "/newsurvey", "mat-button", "", 1, "nav-link"], ["mat-mini-fab", "", "color", "mini-secondary"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Navbar 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Self Assesment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " My surveys");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Assessors");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Stores");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Plans & Pricing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "ul", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Upgrade");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " New Survey");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "YT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatAnchor"]], styles: [".navbar-dark[_ngcontent-%COMP%]\r\n{\r\n    background-color:white !important;\r\n    color:black;\r\n\r\n}\r\n  .navbar-dark[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%]{\r\n      background:black;\r\n  }\r\n  .navbar-dark[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\r\n    color: black;\r\n  }\r\n  @media (min-width: 768px) {\r\n  .navbar-brand.abs[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    width: 100%;\r\n    left: 0;\r\n    text-align: center;\r\n  }\r\n}\r\n  .light-button[_ngcontent-%COMP%] {\r\ncolor:red !important;\r\nborder-radius:20px;\r\nborder: 2px solid red !important;\r\n}\r\n  .mini-secondary[_ngcontent-%COMP%] {\r\n  background-color: grey !important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLGlDQUFpQztJQUNqQyxXQUFXOztBQUVmO0VBQ0U7TUFDSSxnQkFBZ0I7RUFDcEI7RUFDQTtJQUNFLFlBQVk7RUFDZDtFQUdGO0VBQ0U7SUFDRSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLE9BQU87SUFDUCxrQkFBa0I7RUFDcEI7QUFDRjtFQUVBO0FBQ0Esb0JBQW9CO0FBQ3BCLGtCQUFrQjtBQUNsQixnQ0FBZ0M7QUFDaEM7RUFDQTtFQUNFLGlDQUFpQztBQUNuQyIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZiYXItZGFya1xyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjpibGFjaztcclxuXHJcbn1cclxuICAubmF2YmFyLWRhcmsgLm5hdmJhci10b2dnbGVye1xyXG4gICAgICBiYWNrZ3JvdW5kOmJsYWNrO1xyXG4gIH1cclxuICAubmF2YmFyLWRhcmsgLm5hdmJhci1uYXYgLm5hdi1saW5rIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICB9XHJcbiAgXHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAubmF2YmFyLWJyYW5kLmFicyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG59XHJcblxyXG4ubGlnaHQtYnV0dG9uIHtcclxuY29sb3I6cmVkICFpbXBvcnRhbnQ7XHJcbmJvcmRlci1yYWRpdXM6MjBweDtcclxuYm9yZGVyOiAycHggc29saWQgcmVkICFpbXBvcnRhbnQ7XHJcbn1cclxuLm1pbmktc2Vjb25kYXJ5IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5ICFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "DHTX":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/toggle/toggle.component.ts ***!
  \**************************************************************/
/*! exports provided: ToggleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleComponent", function() { return ToggleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ToggleComponent {
    constructor() { }
    ngOnInit() {
    }
}
ToggleComponent.ɵfac = function ToggleComponent_Factory(t) { return new (t || ToggleComponent)(); };
ToggleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ToggleComponent, selectors: [["app-toggle"]], decls: 2, vars: 0, template: function ToggleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "toggle works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0b2dnbGUuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "FKbk":
/*!**********************************************************!*\
  !*** ./src/app/shared/components/tabs/tabs.component.ts ***!
  \**********************************************************/
/*! exports provided: TabsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsComponent", function() { return TabsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class TabsComponent {
    constructor() { }
    ngOnInit() {
    }
}
TabsComponent.ɵfac = function TabsComponent_Factory(t) { return new (t || TabsComponent)(); };
TabsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TabsComponent, selectors: [["app-tabs"]], decls: 2, vars: 0, template: function TabsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "tabs works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWJzLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "FYjP":
/*!************************************************************!*\
  !*** ./src/app/shared/components/alert/alert.component.ts ***!
  \************************************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return AlertComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class AlertComponent {
    constructor() { }
    ngOnInit() {
    }
}
AlertComponent.ɵfac = function AlertComponent_Factory(t) { return new (t || AlertComponent)(); };
AlertComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AlertComponent, selectors: [["app-alert"]], decls: 2, vars: 0, template: function AlertComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "alert works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhbGVydC5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "KPdS":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/search/search.component.ts ***!
  \**************************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class SearchComponent {
    constructor() { }
    ngOnInit() {
    }
}
SearchComponent.ɵfac = function SearchComponent_Factory(t) { return new (t || SearchComponent)(); };
SearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SearchComponent, selectors: [["app-search"]], decls: 2, vars: 0, template: function SearchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "search works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZWFyY2guY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "LmEr":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 4, vars: 0, consts: [[1, "mt-auto"], [1, "footer-copyright", "text-center", "py-3"], ["src", "assets/images/gbw.png", "alt", "GBW", 1, "float-right"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Terms and Conditions | Privacy Policy | Cookies Policy Copyright \u00A9 2020 GAPbuster Worldwide ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "PCNd":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_alert_alert_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/alert/alert.component */ "FYjP");
/* harmony import */ var _components_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/dialog/dialog.component */ "jF+W");
/* harmony import */ var _components_loading_panel_loading_panel_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/loading-panel/loading-panel.component */ "XFyV");
/* harmony import */ var _components_popover_popover_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/popover/popover.component */ "v4IX");
/* harmony import */ var _components_toggle_toggle_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/toggle/toggle.component */ "DHTX");
/* harmony import */ var _components_search_search_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/search/search.component */ "KPdS");
/* harmony import */ var _components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/breadcrumb/breadcrumb.component */ "+803");
/* harmony import */ var _components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/tabs/tabs.component */ "FKbk");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../material/material.module */ "hctd");
/* harmony import */ var _components_table_table_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/table/table.component */ "Xv+k");
/* harmony import */ var _components_error_error_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/error/error.component */ "UyyX");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ "fXoL");






/*import { TableComponent } from './components/table/table.component';*/








let componentDeclarations = [_components_alert_alert_component__WEBPACK_IMPORTED_MODULE_1__["AlertComponent"], _components_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_2__["DialogComponent"], _components_loading_panel_loading_panel_component__WEBPACK_IMPORTED_MODULE_3__["LoadingPanelComponent"], _components_popover_popover_component__WEBPACK_IMPORTED_MODULE_4__["PopoverComponent"], _components_toggle_toggle_component__WEBPACK_IMPORTED_MODULE_5__["ToggleComponent"], _components_search_search_component__WEBPACK_IMPORTED_MODULE_6__["SearchComponent"], _components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_7__["BreadcrumbComponent"], _components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_8__["TabsComponent"], _components_table_table_component__WEBPACK_IMPORTED_MODULE_11__["TableComponent"], _components_error_error_component__WEBPACK_IMPORTED_MODULE_12__["ErrorComponent"]];
class SharedModule {
}
SharedModule.ɵfac = function SharedModule_Factory(t) { return new (t || SharedModule)(); };
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"],
            _material_material_module__WEBPACK_IMPORTED_MODULE_10__["MaterialModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_components_alert_alert_component__WEBPACK_IMPORTED_MODULE_1__["AlertComponent"], _components_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_2__["DialogComponent"], _components_loading_panel_loading_panel_component__WEBPACK_IMPORTED_MODULE_3__["LoadingPanelComponent"], _components_popover_popover_component__WEBPACK_IMPORTED_MODULE_4__["PopoverComponent"], _components_toggle_toggle_component__WEBPACK_IMPORTED_MODULE_5__["ToggleComponent"], _components_search_search_component__WEBPACK_IMPORTED_MODULE_6__["SearchComponent"], _components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_7__["BreadcrumbComponent"], _components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_8__["TabsComponent"], _components_table_table_component__WEBPACK_IMPORTED_MODULE_11__["TableComponent"], _components_error_error_component__WEBPACK_IMPORTED_MODULE_12__["ErrorComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"],
        _material_material_module__WEBPACK_IMPORTED_MODULE_10__["MaterialModule"]], exports: [_components_alert_alert_component__WEBPACK_IMPORTED_MODULE_1__["AlertComponent"], _components_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_2__["DialogComponent"], _components_loading_panel_loading_panel_component__WEBPACK_IMPORTED_MODULE_3__["LoadingPanelComponent"], _components_popover_popover_component__WEBPACK_IMPORTED_MODULE_4__["PopoverComponent"], _components_toggle_toggle_component__WEBPACK_IMPORTED_MODULE_5__["ToggleComponent"], _components_search_search_component__WEBPACK_IMPORTED_MODULE_6__["SearchComponent"], _components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_7__["BreadcrumbComponent"], _components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_8__["TabsComponent"], _components_table_table_component__WEBPACK_IMPORTED_MODULE_11__["TableComponent"], _components_error_error_component__WEBPACK_IMPORTED_MODULE_12__["ErrorComponent"]] }); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/header/header.component */ "2MiI");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/footer/footer.component */ "LmEr");
/* harmony import */ var _shared_components_loading_panel_loading_panel_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/components/loading-panel/loading-panel.component */ "XFyV");







function AppComponent_app_loading_panel_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-loading-panel");
} }
//import { MySurveyComponent } from './my-survey/my-survey.component';
//import { DashboardComponent } from './dashboard/dashboard.component';
class AppComponent {
    constructor(_router) {
        this._router = _router;
        this.showLoadingIndiator = true;
    }
    ngAfterViewInit() {
        this._router.events.subscribe((routerEvent) => {
            if (routerEvent instanceof _angular_router__WEBPACK_IMPORTED_MODULE_0__["NavigationStart"]) {
                this.showLoadingIndiator = true;
            }
            if (routerEvent instanceof _angular_router__WEBPACK_IMPORTED_MODULE_0__["NavigationEnd"] ||
                routerEvent instanceof _angular_router__WEBPACK_IMPORTED_MODULE_0__["NavigationError"] ||
                routerEvent instanceof _angular_router__WEBPACK_IMPORTED_MODULE_0__["NavigationCancel"]) {
                this.showLoadingIndiator = false;
            }
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 7, vars: 1, consts: [[1, "container-fluid", "p-0"], [1, "row"], [1, "col-md-12"], [4, "ngIf"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, AppComponent_app_loading_panel_3_Template, 1, 0, "app-loading-panel", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showLoadingIndiator);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterOutlet"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"], _shared_components_loading_panel_loading_panel_component__WEBPACK_IMPORTED_MODULE_5__["LoadingPanelComponent"]], styles: [".buttonData[_ngcontent-%COMP%] {\r\n    background-color: rgb(247, 238, 238);\r\n    border: red;\r\n    color: rgb(219, 22, 22);\r\n    padding: 10px 20px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    margin: 4px 2px;\r\n    cursor: pointer;\r\n    border-radius: 16px;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksb0NBQW9DO0lBQ3BDLFdBQVc7SUFDWCx1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixlQUFlO0lBQ2YsbUJBQW1CO0VBQ3JCIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ1dHRvbkRhdGEge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NywgMjM4LCAyMzgpO1xyXG4gICAgYm9yZGVyOiByZWQ7XHJcbiAgICBjb2xvcjogcmdiKDIxOSwgMjIsIDIyKTtcclxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbjogNHB4IDJweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgfVxyXG5cclxuIl19 */"] });


/***/ }),

/***/ "UyyX":
/*!************************************************************!*\
  !*** ./src/app/shared/components/error/error.component.ts ***!
  \************************************************************/
/*! exports provided: ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return ErrorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ErrorComponent {
    constructor() { }
    ngOnInit() {
    }
}
ErrorComponent.ɵfac = function ErrorComponent_Factory(t) { return new (t || ErrorComponent)(); };
ErrorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ErrorComponent, selectors: [["app-error"]], decls: 2, vars: 0, template: function ErrorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "error works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlcnJvci5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "XFyV":
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/loading-panel/loading-panel.component.ts ***!
  \****************************************************************************/
/*! exports provided: LoadingPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingPanelComponent", function() { return LoadingPanelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");


class LoadingPanelComponent {
    constructor() { }
    ngOnInit() {
    }
}
LoadingPanelComponent.ɵfac = function LoadingPanelComponent_Factory(t) { return new (t || LoadingPanelComponent)(); };
LoadingPanelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoadingPanelComponent, selectors: [["app-loading-panel"]], decls: 2, vars: 0, consts: [[1, "loading-indicator"]], template: function LoadingPanelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-spinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_1__["MatSpinner"]], styles: [".loading-indicator[_ngcontent-%COMP%] {\r\n  position: fixed;\r\n  z-index: 999;\r\n  height: 2em;\r\n  width: 2em;\r\n  overflow: show;\r\n  margin: auto;\r\n  top: 0;\r\n  left: 0;\r\n  bottom: 0;\r\n  right: 0;\r\n}\r\n\r\n.loading-indicator[_ngcontent-%COMP%]:before {\r\n    content: '';\r\n    display: block;\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: rgba(0,0,0,0.3);\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvYWRpbmctcGFuZWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw0QkFBNEI7QUFDNUI7RUFDRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLFdBQVc7RUFDWCxVQUFVO0VBQ1YsY0FBYztFQUNkLFlBQVk7RUFDWixNQUFNO0VBQ04sT0FBTztFQUNQLFNBQVM7RUFDVCxRQUFRO0FBQ1Y7QUFFRSx3QkFBd0I7QUFDeEI7SUFDRSxXQUFXO0lBQ1gsY0FBYztJQUNkLGVBQWU7SUFDZixNQUFNO0lBQ04sT0FBTztJQUNQLFdBQVc7SUFDWCxZQUFZO0lBQ1osaUNBQWlDO0VBQ25DIiwiZmlsZSI6ImxvYWRpbmctcGFuZWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEFic29sdXRlIENlbnRlciBTcGlubmVyICovXHJcbi5sb2FkaW5nLWluZGljYXRvciB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHotaW5kZXg6IDk5OTtcclxuICBoZWlnaHQ6IDJlbTtcclxuICB3aWR0aDogMmVtO1xyXG4gIG92ZXJmbG93OiBzaG93O1xyXG4gIG1hcmdpbjogYXV0bztcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBib3R0b206IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbn1cclxuXHJcbiAgLyogVHJhbnNwYXJlbnQgT3ZlcmxheSAqL1xyXG4gIC5sb2FkaW5nLWluZGljYXRvcjpiZWZvcmUge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC4zKTtcclxuICB9XHJcbiJdfQ== */"] });


/***/ }),

/***/ "Xv+k":
/*!************************************************************!*\
  !*** ./src/app/shared/components/table/table.component.ts ***!
  \************************************************************/
/*! exports provided: TableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableComponent", function() { return TableComponent; });
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");






function TableComponent_mat_table_1_mat_header_cell_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Title ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function TableComponent_mat_table_1_mat_cell_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", element_r19.title, " ");
} }
function TableComponent_mat_table_1_mat_header_cell_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Modified ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function TableComponent_mat_table_1_mat_cell_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", element_r20.modified, " ");
} }
function TableComponent_mat_table_1_mat_header_cell_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Response ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function TableComponent_mat_table_1_mat_cell_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", element_r21.response, " ");
} }
function TableComponent_mat_table_1_mat_header_cell_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Share ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function TableComponent_mat_table_1_mat_cell_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "svg", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "path", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "path", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", element_r22.share, " ");
} }
function TableComponent_mat_table_1_mat_header_cell_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Analyze ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function TableComponent_mat_table_1_mat_cell_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "svg", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "path", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", element_r23.analyze, " ");
} }
function TableComponent_mat_table_1_mat_header_cell_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " More ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function TableComponent_mat_table_1_mat_cell_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "svg", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "path", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", element_r24.more, " ");
} }
function TableComponent_mat_table_1_mat_header_cell_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Design ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function TableComponent_mat_table_1_mat_cell_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "svg", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "path", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "path", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", element_r25.symbol, " ");
} }
function TableComponent_mat_table_1_mat_header_row_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "mat-header-row");
} }
function TableComponent_mat_table_1_mat_row_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "mat-row");
} }
function TableComponent_mat_table_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-table", 4, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Position Column ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](3, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, TableComponent_mat_table_1_mat_header_cell_4_Template, 2, 0, "mat-header-cell", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, TableComponent_mat_table_1_mat_cell_5_Template, 2, 1, "mat-cell", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, " Name Column ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](7, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, TableComponent_mat_table_1_mat_header_cell_8_Template, 2, 0, "mat-header-cell", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, TableComponent_mat_table_1_mat_cell_9_Template, 2, 1, "mat-cell", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, " Weight Column ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](11, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, TableComponent_mat_table_1_mat_header_cell_12_Template, 2, 0, "mat-header-cell", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, TableComponent_mat_table_1_mat_cell_13_Template, 2, 1, "mat-cell", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, " Symbol Column ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](15, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, TableComponent_mat_table_1_mat_header_cell_16_Template, 2, 0, "mat-header-cell", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, TableComponent_mat_table_1_mat_cell_17_Template, 5, 1, "mat-cell", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](18, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, TableComponent_mat_table_1_mat_header_cell_19_Template, 2, 0, "mat-header-cell", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, TableComponent_mat_table_1_mat_cell_20_Template, 4, 1, "mat-cell", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](21, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, TableComponent_mat_table_1_mat_header_cell_22_Template, 2, 0, "mat-header-cell", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, TableComponent_mat_table_1_mat_cell_23_Template, 4, 1, "mat-cell", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](24, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](25, TableComponent_mat_table_1_mat_header_cell_25_Template, 2, 0, "mat-header-cell", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, TableComponent_mat_table_1_mat_cell_26_Template, 5, 1, "mat-cell", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](27, TableComponent_mat_table_1_mat_header_row_27_Template, 1, 0, "mat-header-row", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](28, TableComponent_mat_table_1_mat_row_28_Template, 1, 0, "mat-row", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dataSource", ctx_r0.matdataSource);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matHeaderRowDef", ctx_r0.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matRowDefColumns", ctx_r0.displayedColumns);
} }
const _c0 = function () { return [5, 10, 20]; };
class TableComponent {
    constructor() {
        this.displayedColumns = ['title', 'modified', 'response', 'symbol', 'share', 'analyze', 'more'];
        console.log(this.datasource);
    }
    get datasource() {
        return this._datasource;
    }
    set datasource(value) {
        this._datasource = value;
        this.matdataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](this.datasource.datasource);
        this.matdataSource.paginator = this.paginator;
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        this.matdataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](this.datasource.datasource);
        this.matdataSource.paginator = this.paginator;
    }
}
TableComponent.ɵfac = function TableComponent_Factory(t) { return new (t || TableComponent)(); };
TableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: TableComponent, selectors: [["app-table"]], viewQuery: function TableComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_0__["MatPaginator"], 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
    } }, inputs: { datasource: "datasource" }, decls: 4, vars: 5, consts: [[1, "example-container", "mat-elevation-z8"], [3, "dataSource", 4, "ngIf"], [3, "pageSize", "pageSizeOptions", "showFirstLastButtons"], ["paginator", ""], [3, "dataSource"], ["table", ""], ["matColumnDef", "title"], [4, "matHeaderCellDef"], [4, "matCellDef"], ["matColumnDef", "modified"], ["matColumnDef", "response"], ["matColumnDef", "share"], ["matColumnDef", "analyze"], ["matColumnDef", "more"], ["matColumnDef", "symbol"], [4, "matHeaderRowDef"], [4, "matRowDef", "matRowDefColumns"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-box-arrow-up-right"], ["fill-rule", "evenodd", "d", "M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"], ["fill-rule", "evenodd", "d", "M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-graph-up"], ["fill-rule", "evenodd", "d", "M0 0h1v15h15v1H0V0zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 0 1-.5-.5z"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-three-dots"], ["d", "M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-pencil-square"], ["d", "M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"], ["fill-rule", "evenodd", "d", "M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"]], template: function TableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, TableComponent_mat_table_1_Template, 29, 3, "mat-table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "mat-paginator", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.matdataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("pageSize", 4)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](4, _c0))("showFirstLastButtons", true);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_0__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRow"]], styles: [".example-container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  max-height: 300px;\r\n  min-width: 300px;\r\n}\r\n\r\n.mat-table[_ngcontent-%COMP%] {\r\n  overflow: auto;\r\n  max-height: 500px;\r\n}\r\n\r\n.mat-header-cell[_ngcontent-%COMP%] {\r\n  background-color: #cccaca;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYmxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCIiwiZmlsZSI6InRhYmxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBtYXgtaGVpZ2h0OiAzMDBweDtcclxuICBtaW4td2lkdGg6IDMwMHB4O1xyXG59XHJcblxyXG4ubWF0LXRhYmxlIHtcclxuICBvdmVyZmxvdzogYXV0bztcclxuICBtYXgtaGVpZ2h0OiA1MDBweDtcclxufVxyXG5cclxuLm1hdC1oZWFkZXItY2VsbCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjY2FjYTtcclxufVxyXG4iXX0= */"] });
const ELEMENT_DATA = [
    { title: 'GBW Demo Campaign', modified: '15/07/2020', response: '485', symbol: '', share: '', analyze: '', more: '' },
    { title: 'GBW Test Campaign', modified: '05/07/2020', response: '482', symbol: '', share: '', analyze: '', more: '' },
    { title: 'GBW Test', modified: '01/07/2020', response: 'draft', symbol: '', share: '', analyze: '', more: '' },
    { title: '4', modified: 'Beryllium', response: '9.0122', symbol: '', share: '', analyze: '', more: '' },
    { title: '5', modified: 'Boron', response: '10.811', symbol: '', share: '', analyze: '', more: '' },
    { title: '6', modified: 'Carbon', response: '12.0107', symbol: '', share: '', analyze: '', more: '' },
    { title: '7', modified: 'Nitrogen', response: '14.0067', symbol: '', share: '', analyze: '', more: '' },
    { title: '8', modified: 'Oxygen', response: '15.9994', symbol: '', share: '', analyze: '', more: '' },
    { title: '9', modified: 'Fluorine', response: '18.9984', symbol: '', share: '', analyze: '', more: 'm' },
    { title: '10', modified: 'Neon', response: '20.1797', symbol: '', share: '', analyze: '', more: '' },
    { title: '11', modified: 'Sodium', response: '22.9897', symbol: '', share: '', analyze: '', more: '' },
    { title: '12', modified: 'Magnesium', response: '24.305', symbol: '', share: '', analyze: '', more: '' },
    { title: '13', modified: 'Aluminum', response: '26.9815', symbol: '', share: '', analyze: '', more: '' },
    { title: '14', modified: 'Silicon', response: '28.0855', symbol: '', share: '', analyze: '', more: '' },
    { title: '15', modified: 'Phosphorus', response: '30.9738', symbol: '', share: '', analyze: '', more: '' },
    { title: '16', modified: 'Sulfur', response: '32.065', symbol: '', share: '', analyze: '', more: '' },
    { title: '17', modified: 'Chlorine', response: '35.453', symbol: '', share: '', analyze: '', more: '' },
    { title: '18', modified: 'Argon', response: '39.948', symbol: '', share: '', analyze: '', more: '' },
    { title: '19', modified: 'Potassium', response: '39.0983', symbol: '', share: '', analyze: '', more: '' },
    { title: '20', modified: 'Calcium', response: '40.078', symbol: '', share: '', analyze: '', more: '' },
];


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/header/header.component */ "2MiI");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/footer/footer.component */ "LmEr");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./material/material.module */ "hctd");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/shared.module */ "PCNd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "fXoL");










/*import { SharedModule } from './shared/shared.module';*/
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _material_material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _components_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _material_material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"]] }); })();


/***/ }),

/***/ "hctd":
/*!*********************************************!*\
  !*** ./src/app/material/material.module.ts ***!
  \*********************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/slider */ "5RNC");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/a11y */ "u47x");
/* harmony import */ var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/clipboard */ "UXJo");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/portal */ "+rOU");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/scrolling */ "vxfF");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/stepper */ "B/XX");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/table */ "f6nW");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/tree */ "FvrZ");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/badge */ "TU8p");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "2ChS");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button-toggle */ "jaxi");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/stepper */ "xHqg");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/material/tree */ "8yBR");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/cdk/overlay */ "rDax");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @angular/core */ "fXoL");













































let materialModule = [
    _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_1__["MatTabsModule"],
    _angular_material_slider__WEBPACK_IMPORTED_MODULE_3__["MatSliderModule"],
    _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__["A11yModule"],
    _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_5__["ClipboardModule"],
    _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_9__["CdkStepperModule"],
    _angular_cdk_table__WEBPACK_IMPORTED_MODULE_10__["CdkTableModule"],
    _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_11__["CdkTreeModule"],
    _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__["DragDropModule"],
    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__["MatAutocompleteModule"],
    _angular_material_badge__WEBPACK_IMPORTED_MODULE_13__["MatBadgeModule"],
    _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_14__["MatBottomSheetModule"],
    _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_15__["MatButtonToggleModule"],
    _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCardModule"],
    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__["MatCheckboxModule"],
    _angular_material_chips__WEBPACK_IMPORTED_MODULE_18__["MatChipsModule"],
    _angular_material_stepper__WEBPACK_IMPORTED_MODULE_19__["MatStepperModule"],
    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__["MatDatepickerModule"],
    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__["MatDialogModule"],
    _angular_material_divider__WEBPACK_IMPORTED_MODULE_22__["MatDividerModule"],
    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_23__["MatExpansionModule"],
    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_24__["MatGridListModule"],
    _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__["MatIconModule"],
    _angular_material_input__WEBPACK_IMPORTED_MODULE_26__["MatInputModule"],
    _angular_material_list__WEBPACK_IMPORTED_MODULE_27__["MatListModule"],
    _angular_material_menu__WEBPACK_IMPORTED_MODULE_28__["MatMenuModule"],
    _angular_material_core__WEBPACK_IMPORTED_MODULE_29__["MatNativeDateModule"],
    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_30__["MatPaginatorModule"],
    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_31__["MatProgressBarModule"],
    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_32__["MatProgressSpinnerModule"],
    _angular_material_radio__WEBPACK_IMPORTED_MODULE_33__["MatRadioModule"],
    _angular_material_core__WEBPACK_IMPORTED_MODULE_29__["MatRippleModule"],
    _angular_material_select__WEBPACK_IMPORTED_MODULE_34__["MatSelectModule"],
    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_35__["MatSidenavModule"],
    _angular_material_slider__WEBPACK_IMPORTED_MODULE_3__["MatSliderModule"],
    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_36__["MatSlideToggleModule"],
    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_37__["MatSnackBarModule"],
    _angular_material_sort__WEBPACK_IMPORTED_MODULE_38__["MatSortModule"],
    _angular_material_table__WEBPACK_IMPORTED_MODULE_39__["MatTableModule"],
    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_1__["MatTabsModule"],
    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__["MatToolbarModule"],
    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__["MatTooltipModule"],
    _angular_material_tree__WEBPACK_IMPORTED_MODULE_42__["MatTreeModule"],
    _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_43__["OverlayModule"],
    _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_7__["PortalModule"],
    _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_8__["ScrollingModule"],
    _angular_material_core__WEBPACK_IMPORTED_MODULE_29__["MatNativeDateModule"],
    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__["MatDialogModule"],
];
class MaterialModule {
}
MaterialModule.ɵfac = function MaterialModule_Factory(t) { return new (t || MaterialModule)(); };
MaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_44__["ɵɵdefineNgModule"]({ type: MaterialModule });
MaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_44__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            ...materialModule
        ], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_1__["MatTabsModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_3__["MatSliderModule"],
        _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__["A11yModule"],
        _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_5__["ClipboardModule"],
        _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_9__["CdkStepperModule"],
        _angular_cdk_table__WEBPACK_IMPORTED_MODULE_10__["CdkTableModule"],
        _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_11__["CdkTreeModule"],
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__["DragDropModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__["MatAutocompleteModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_13__["MatBadgeModule"],
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_14__["MatBottomSheetModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_15__["MatButtonToggleModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCardModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__["MatCheckboxModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_18__["MatChipsModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_19__["MatStepperModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__["MatDatepickerModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__["MatDialogModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_22__["MatDividerModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_23__["MatExpansionModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_24__["MatGridListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_26__["MatInputModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_27__["MatListModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_28__["MatMenuModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_29__["MatNativeDateModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_30__["MatPaginatorModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_31__["MatProgressBarModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_32__["MatProgressSpinnerModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_33__["MatRadioModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_29__["MatRippleModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_34__["MatSelectModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_35__["MatSidenavModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_3__["MatSliderModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_36__["MatSlideToggleModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_37__["MatSnackBarModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_38__["MatSortModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_39__["MatTableModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_1__["MatTabsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__["MatToolbarModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__["MatTooltipModule"],
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_42__["MatTreeModule"],
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_43__["OverlayModule"],
        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_7__["PortalModule"],
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_8__["ScrollingModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_29__["MatNativeDateModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__["MatDialogModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_44__["ɵɵsetNgModuleScope"](MaterialModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_1__["MatTabsModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_3__["MatSliderModule"],
        _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__["A11yModule"],
        _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_5__["ClipboardModule"],
        _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_9__["CdkStepperModule"],
        _angular_cdk_table__WEBPACK_IMPORTED_MODULE_10__["CdkTableModule"],
        _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_11__["CdkTreeModule"],
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__["DragDropModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__["MatAutocompleteModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_13__["MatBadgeModule"],
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_14__["MatBottomSheetModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_15__["MatButtonToggleModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCardModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__["MatCheckboxModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_18__["MatChipsModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_19__["MatStepperModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__["MatDatepickerModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__["MatDialogModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_22__["MatDividerModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_23__["MatExpansionModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_24__["MatGridListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_26__["MatInputModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_27__["MatListModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_28__["MatMenuModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_29__["MatNativeDateModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_30__["MatPaginatorModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_31__["MatProgressBarModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_32__["MatProgressSpinnerModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_33__["MatRadioModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_29__["MatRippleModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_34__["MatSelectModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_35__["MatSidenavModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_3__["MatSliderModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_36__["MatSlideToggleModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_37__["MatSnackBarModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_38__["MatSortModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_39__["MatTableModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_1__["MatTabsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__["MatToolbarModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__["MatTooltipModule"],
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_42__["MatTreeModule"],
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_43__["OverlayModule"],
        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_7__["PortalModule"],
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_8__["ScrollingModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_29__["MatNativeDateModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__["MatDialogModule"]], exports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_1__["MatTabsModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_3__["MatSliderModule"],
        _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__["A11yModule"],
        _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_5__["ClipboardModule"],
        _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_9__["CdkStepperModule"],
        _angular_cdk_table__WEBPACK_IMPORTED_MODULE_10__["CdkTableModule"],
        _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_11__["CdkTreeModule"],
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__["DragDropModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__["MatAutocompleteModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_13__["MatBadgeModule"],
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_14__["MatBottomSheetModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_15__["MatButtonToggleModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCardModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__["MatCheckboxModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_18__["MatChipsModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_19__["MatStepperModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__["MatDatepickerModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__["MatDialogModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_22__["MatDividerModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_23__["MatExpansionModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_24__["MatGridListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_26__["MatInputModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_27__["MatListModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_28__["MatMenuModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_29__["MatNativeDateModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_30__["MatPaginatorModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_31__["MatProgressBarModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_32__["MatProgressSpinnerModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_33__["MatRadioModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_29__["MatRippleModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_34__["MatSelectModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_35__["MatSidenavModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_3__["MatSliderModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_36__["MatSlideToggleModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_37__["MatSnackBarModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_38__["MatSortModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_39__["MatTableModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_1__["MatTabsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__["MatToolbarModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__["MatTooltipModule"],
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_42__["MatTreeModule"],
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_43__["OverlayModule"],
        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_7__["PortalModule"],
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_8__["ScrollingModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_29__["MatNativeDateModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__["MatDialogModule"]] }); })();


/***/ }),

/***/ "jF+W":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/dialog/dialog.component.ts ***!
  \**************************************************************/
/*! exports provided: DialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogComponent", function() { return DialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "bTqV");



class DialogComponent {
    constructor() { }
    ngOnInit() {
    }
}
DialogComponent.ɵfac = function DialogComponent_Factory(t) { return new (t || DialogComponent)(); };
DialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DialogComponent, selectors: [["app-dialog"]], decls: 8, vars: 1, consts: [[1, "mat-typography"], ["align", "end"], ["mat-button", "", "mat-dialog-close", ""], ["mat-button", "", "cdkFocusInitial", "", 3, "mat-dialog-close"]], template: function DialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-dialog-content", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Do you want to save?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-dialog-actions", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", true);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkaWFsb2cuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "v4IX":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/popover/popover.component.ts ***!
  \****************************************************************/
/*! exports provided: PopoverComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverComponent", function() { return PopoverComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class PopoverComponent {
    constructor() { }
    ngOnInit() {
    }
}
PopoverComponent.ɵfac = function PopoverComponent_Factory(t) { return new (t || PopoverComponent)(); };
PopoverComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PopoverComponent, selectors: [["app-popover"]], decls: 2, vars: 0, template: function PopoverComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "popover works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwb3BvdmVyLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



const routes = [
    {
        path: "",
        loadChildren: () => __webpack_require__.e(/*! import() | components-mysurveys-mysurveys-module */ "components-mysurveys-mysurveys-module").then(__webpack_require__.bind(null, /*! ./components/mysurveys/mysurveys.module */ "cGo6")).then(m => m.MysurveysModule)
    },
    {
        path: "selfassesment",
        loadChildren: () => __webpack_require__.e(/*! import() | components-selfassessment-selfassessment-module */ "components-selfassessment-selfassessment-module").then(__webpack_require__.bind(null, /*! ./components/selfassessment/selfassessment.module */ "8pcF")).then(m => m.SelfassessmentModule)
    },
    {
        path: "dashboard",
        loadChildren: () => __webpack_require__.e(/*! import() | components-dashboard-dashboard-module */ "components-dashboard-dashboard-module").then(__webpack_require__.bind(null, /*! ./components/dashboard/dashboard.module */ "5+sL")).then(m => m.DashboardModule)
    },
    {
        path: "mysurveys",
        loadChildren: () => __webpack_require__.e(/*! import() | components-mysurveys-mysurveys-module */ "components-mysurveys-mysurveys-module").then(__webpack_require__.bind(null, /*! ./components/mysurveys/mysurveys.module */ "cGo6")).then(m => m.MysurveysModule)
    },
    {
        path: "assessors",
        loadChildren: () => __webpack_require__.e(/*! import() | components-assessors-assessors-module */ "components-assessors-assessors-module").then(__webpack_require__.bind(null, /*! ./components/assessors/assessors.module */ "IOTR")).then(m => m.AssessorsModule)
    },
    {
        path: "stores",
        loadChildren: () => __webpack_require__.e(/*! import() | components-stores-stores-module */ "components-stores-stores-module").then(__webpack_require__.bind(null, /*! ./components/stores/stores.module */ "e7lA")).then(m => m.StoresModule)
    },
    {
        path: "plansandpricing",
        loadChildren: () => __webpack_require__.e(/*! import() | components-plansandpricing-plansandpricing-module */ "components-plansandpricing-plansandpricing-module").then(__webpack_require__.bind(null, /*! ./components/plansandpricing/plansandpricing.module */ "2tgm")).then(m => m.PlansandpricingModule)
    },
    {
        path: "newsurvey",
        loadChildren: () => __webpack_require__.e(/*! import() | components-newsurvey-newsurvey-module */ "components-newsurvey-newsurvey-module").then(__webpack_require__.bind(null, /*! ./components/newsurvey/newsurvey.module */ "LnMY")).then(m => m.NewsurveyModule)
    },
    {
        path: "myaccount",
        loadChildren: () => __webpack_require__.e(/*! import() | components-myaccount-myaccount-module */ "components-myaccount-myaccount-module").then(__webpack_require__.bind(null, /*! ./components/myaccount/myaccount.module */ "yToQ")).then(m => m.MyaccountModule)
    },
    {
        path: "upgrade",
        loadChildren: () => __webpack_require__.e(/*! import() | components-upgrade-upgrade-module */ "components-upgrade-upgrade-module").then(__webpack_require__.bind(null, /*! ./components/upgrade/upgrade.module */ "fpCc")).then(m => m.UpgradeModule)
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map