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
/* harmony import */ var src_app_shared_components_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/components/dialog/dialog.component */ "jF+W");
/* harmony import */ var _mysurveys_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mysurveys.service */ "t+fD");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _shared_components_table_table_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/components/table/table.component */ "Xv+k");







class MysurveysComponent {
    constructor(dialog, employee) {
        this.dialog = dialog;
        this.employee = employee;
    }
    openDialog() {
        const dialogRef = this.dialog.open(src_app_shared_components_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_0__["DialogComponent"]);
        dialogRef.afterClosed().subscribe(result => {
            console.log(`Dialog result: ${result}`);
        });
    }
    ngOnInit() {
        this.employee.getData().subscribe(data => this.employeedata = data);
    }
}
MysurveysComponent.ɵfac = function MysurveysComponent_Factory(t) { return new (t || MysurveysComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_mysurveys_service__WEBPACK_IMPORTED_MODULE_1__["MysurveysService"])); };
MysurveysComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: MysurveysComponent, selectors: [["app-mysurveys"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([_mysurveys_service__WEBPACK_IMPORTED_MODULE_1__["MysurveysService"]])], decls: 56, vars: 1, consts: [[1, "container-fluid"], [1, "row"], [1, "col-md-12"], [1, "font-weight-lighter", "text-grey", "mt-4", "mb-4"], [1, "search-input"], ["mat-button", "", 3, "click"], [1, "col-md-3"], [1, "leftpanel", "bg-white", "example-container", "mat-elevation-z8"], [1, "container-flud", "p-0", "pt-3"], [1, "col-md-5"], [1, "col-md-2"], [1, "text-align-center", "badge", "badge-pill", "badge-info", "text-center", "rounded-circle", "p-3"], [1, "text-center", "text-grey", "font-weight-lighter", "pt-3", "pb-3"], [1, "table"], [1, "text-grey", "font-weight-lighter"], [1, "col-md-9"], [1, "container-fluid", "p-0"], [1, "list-inline"], [1, "list-inline-item"], [1, "input-group"], ["type", "button", 1, "btn", "btn-default", "border-left", "border-top", "border-bottom", "bg-white"], [1, "fa", "fa-search"], ["type", "text", "placeholder", "Search", 1, "form-control"], [1, "input-group-append"], ["href", "", 1, "text-info"], [1, "rightpanel", "bg-white"], [3, "datasource"]], template: function MysurveysComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "My Surveys");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MysurveysComponent_Template_button_click_6_listener() { return ctx.openDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Open dialog");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "h4", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "h5", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Active Survey");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "table", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "h6", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "Published");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "h6", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "h6", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "Draft");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "h6", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "ul", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](46, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](47, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](48, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](51, "New Survey");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](55, "app-table", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](55);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("datasource", ctx.employeedata);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _shared_components_table_table_component__WEBPACK_IMPORTED_MODULE_5__["TableComponent"]], styles: [".text-grey[_ngcontent-%COMP%]\r\n{\r\n    color:grey;\r\n}\r\n.leftpanel[_ngcontent-%COMP%]{\r\n    min-height:355px;\r\n}\r\n.text-align-center[_ngcontent-%COMP%] {\r\n  width: 50px;\r\n  height: 50px;\r\n  font-size: 20px\r\n}\r\n.selfassesmentlogo[_ngcontent-%COMP%]{\r\n    width:60px;\r\n    height:60px;\r\n    background-color:lightseagreen;\r\n}\r\n.example-container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  max-height: 300px;\r\n  min-width: 300px;\r\n}\r\n.mat-table[_ngcontent-%COMP%] {\r\n  overflow: auto;\r\n  max-height: 500px;\r\n\r\n}\r\n.mat-header-cell[_ngcontent-%COMP%]{\r\n  background-color: #cccaca;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15c3VydmV5cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLFVBQVU7QUFDZDtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaO0FBQ0Y7QUFFQTtJQUNJLFVBQVU7SUFDVixXQUFXO0lBQ1gsOEJBQThCO0FBQ2xDO0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7O0FBRW5CO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIiLCJmaWxlIjoibXlzdXJ2ZXlzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dC1ncmV5XHJcbntcclxuICAgIGNvbG9yOmdyZXk7XHJcbn1cclxuLmxlZnRwYW5lbHtcclxuICAgIG1pbi1oZWlnaHQ6MzU1cHg7XHJcbn1cclxuLnRleHQtYWxpZ24tY2VudGVyIHtcclxuICB3aWR0aDogNTBweDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgZm9udC1zaXplOiAyMHB4XHJcbn1cclxuXHJcbi5zZWxmYXNzZXNtZW50bG9nb3tcclxuICAgIHdpZHRoOjYwcHg7XHJcbiAgICBoZWlnaHQ6NjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6bGlnaHRzZWFncmVlbjtcclxufVxyXG5cclxuLmV4YW1wbGUtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgbWF4LWhlaWdodDogMzAwcHg7XHJcbiAgbWluLXdpZHRoOiAzMDBweDtcclxufVxyXG5cclxuLm1hdC10YWJsZSB7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgbWF4LWhlaWdodDogNTAwcHg7XHJcblxyXG59XHJcbi5tYXQtaGVhZGVyLWNlbGx7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjY2FjYTtcclxuICB9XHJcblxyXG5cclxuIl19 */"] });


/***/ }),

/***/ "PGri":
/*!*********************************************************!*\
  !*** ./src/app/components/mysurveys/configuration.json ***!
  \*********************************************************/
/*! exports provided: datasource, columnSettings, defaultSort, moduleName, selection, searchable, filterable, downloadable, expandable, pagination, clientSidePagination, maxGridHeight, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"datasource\":[{\"title\":\"GBW Demo Campaign\",\"modified\":\"15/07/2020\",\"response\":\"485\",\"symbol\":\"\",\"share\":\"\",\"analyze\":\"\",\"more\":\"\"},{\"title\":\"GBW Test Campaign\",\"modified\":\"05/07/2020\",\"response\":\"482\",\"symbol\":\"\",\"share\":\"\",\"analyze\":\"\",\"more\":\"\"},{\"title\":\"GBW Test\",\"modified\":\"01/07/2020\",\"response\":\"draft\",\"symbol\":\"\",\"share\":\"\",\"analyze\":\"\",\"more\":\"\"},{\"title\":\"4\",\"modified\":\"Beryllium\",\"response\":\"9.0122\",\"symbol\":\"\",\"share\":\"\",\"analyze\":\"\",\"more\":\"\"},{\"title\":\"5\",\"modified\":\"Boron\",\"response\":\"10.811\",\"symbol\":\"\",\"share\":\"\",\"analyze\":\"\",\"more\":\"\"},{\"title\":\"6\",\"modified\":\"Carbon\",\"response\":\"12.0107\",\"symbol\":\"\",\"share\":\"\",\"analyze\":\"\",\"more\":\"\"},{\"title\":\"7\",\"modified\":\"Nitrogen\",\"response\":\"14.0067\",\"symbol\":\"\",\"share\":\"\",\"analyze\":\"\",\"more\":\"\"},{\"title\":\"8\",\"modified\":\"Oxygen\",\"response\":\"15.9994\",\"symbol\":\"\",\"share\":\"\",\"analyze\":\"\",\"more\":\"\"},{\"title\":\"9\",\"modified\":\"Fluorine\",\"response\":\"18.9984\",\"symbol\":\"\",\"share\":\"\",\"analyze\":\"\",\"more\":\"m\"},{\"title\":\"10\",\"modified\":\"Neon\",\"response\":\"20.1797\",\"symbol\":\"\",\"share\":\"\",\"analyze\":\"\",\"more\":\"\"},{\"title\":\"11\",\"modified\":\"Sodium\",\"response\":\"22.9897\",\"symbol\":\"\",\"share\":\"\",\"analyze\":\"\",\"more\":\"\"},{\"title\":\"12\",\"modified\":\"Magnesium\",\"response\":\"24.305\",\"symbol\":\"\",\"share\":\"\",\"analyze\":\"\",\"more\":\"\"},{\"title\":\"13\",\"modified\":\"Aluminum\",\"response\":\"26.9815\",\"symbol\":\"\",\"share\":\"\",\"analyze\":\"\",\"more\":\"\"},{\"title\":\"14\",\"modified\":\"Silicon\",\"response\":\"28.0855\",\"symbol\":\"\",\"share\":\"\",\"analyze\":\"\",\"more\":\"\"},{\"title\":\"15\",\"modified\":\"Phosphorus\",\"response\":\"30.9738\",\"symbol\":\"\",\"share\":\"\",\"analyze\":\"\",\"more\":\"\"},{\"title\":\"16\",\"modified\":\"Sulfur\",\"response\":\"32.065\",\"symbol\":\"\",\"share\":\"\",\"analyze\":\"\",\"more\":\"\"},{\"title\":\"17\",\"modified\":\"Chlorine\",\"response\":\"35.453\",\"symbol\":\"\",\"share\":\"\",\"analyze\":\"\",\"more\":\"\"},{\"title\":\"18\",\"modified\":\"Argon\",\"response\":\"39.948\",\"symbol\":\"\",\"share\":\"\",\"analyze\":\"\",\"more\":\"\"},{\"title\":\"19\",\"modified\":\"Potassium\",\"response\":\"39.0983\",\"symbol\":\"\",\"share\":\"\",\"analyze\":\"\",\"more\":\"\"},{\"title\":\"20\",\"modified\":\"Calcium\",\"response\":\"40.078\",\"symbol\":\"\",\"share\":\"\",\"analyze\":\"\",\"more\":\"\"}],\"columnSettings\":[\"title\",\"modified\",\"response\",\"symbol\",\"share\",\"analyze\",\"more\"],\"defaultSort\":{\"field\":\"groupName\",\"dir\":\"asc\"},\"moduleName\":\"ServiceRequestDetails\",\"selection\":false,\"searchable\":false,\"filterable\":false,\"downloadable\":false,\"expandable\":true,\"pagination\":true,\"clientSidePagination\":true,\"maxGridHeight\":\"350\"}");

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
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../material/material.module */ "hctd");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/shared.module */ "PCNd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");







class MysurveysModule {
}
MysurveysModule.ɵfac = function MysurveysModule_Factory(t) { return new (t || MysurveysModule)(); };
MysurveysModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: MysurveysModule });
MysurveysModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _mysurveys_routing_module__WEBPACK_IMPORTED_MODULE_1__["MysurveysRoutingModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
            _material_material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"],
            /*TableModule,*/
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](MysurveysModule, { declarations: [_mysurveys_component__WEBPACK_IMPORTED_MODULE_2__["MysurveysComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _mysurveys_routing_module__WEBPACK_IMPORTED_MODULE_1__["MysurveysRoutingModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
        _material_material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"],
        /*TableModule,*/
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]] }); })();


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


/***/ }),

/***/ "t+fD":
/*!***********************************************************!*\
  !*** ./src/app/components/mysurveys/mysurveys.service.ts ***!
  \***********************************************************/
/*! exports provided: MysurveysService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MysurveysService", function() { return MysurveysService; });
/* harmony import */ var _configuration_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./configuration.json */ "PGri");
var _configuration_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./configuration.json */ "PGri", 1);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class MysurveysService {
    constructor(http) {
        this.http = http;
        this.employeeData = _configuration_json__WEBPACK_IMPORTED_MODULE_0___namespace;
    }
    getData() {
        console.info("calling...");
        return this.http
            .get('assets/employee.json');
        //.get<employee[]>(this.employeeData)
        // .pipe(map(x => x));
    }
}
MysurveysService.ɵfac = function MysurveysService_Factory(t) { return new (t || MysurveysService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
MysurveysService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: MysurveysService, factory: MysurveysService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=components-mysurveys-mysurveys-module.js.map