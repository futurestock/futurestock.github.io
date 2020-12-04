(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../widgets/src/lib/components/all-thing/all-thing.component.ts":
/*!**********************************************************************!*\
  !*** ../widgets/src/lib/components/all-thing/all-thing.component.ts ***!
  \**********************************************************************/
/*! exports provided: AllThingComponent, AllThingWidget */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllThingComponent", function() { return AllThingComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllThingWidget", function() { return AllThingWidget; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




const _c0 = function (a0) { return { "background": a0 }; };
const _c1 = function (a0) { return { color: a0 }; };
function AllThingComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r78 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AllThingComponent_div_7_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r78); const item_r76 = ctx.$implicit; const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r77.onSelectThing(item_r76); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r76 = ctx.$implicit;
    const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, ctx_r75.globalConfig.themeWidgetBackground));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r76.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c1, ctx_r75.globalConfig.themeWidgetBackground == "#000000" ? "white" : "black"))("innerHTML", "{" + item_r76.title + "}", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", "{" + item_r76.sensor + "} Sensors", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"])("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c1, ctx_r75.globalConfig.themeWidgetBackground == "#000000" ? "white" : "black"));
} }
class AllThingComponent {
    constructor(router, route) {
        this.router = router;
        this.route = route;
        this.arrData = [
            {
                id: 1,
                img: 'https://cdn4.iconfinder.com/data/icons/fugue/icon/status.png',
                title: '{Thing Name}',
                sensor: 9,
            },
            {
                id: 2,
                img: 'https://cdn4.iconfinder.com/data/icons/fugue/icon/status.png',
                title: '{Thing Name}',
                sensor: 9,
            },
            {
                id: 3,
                img: 'https://cdn4.iconfinder.com/data/icons/fugue/icon/status.png',
                title: '{Thing Name}',
                sensor: 9,
            },
            {
                id: 4,
                img: 'https://cdn4.iconfinder.com/data/icons/fugue/icon/status.png',
                title: '{Thing Name}',
                sensor: 9,
            },
            {
                id: 5,
                img: 'https://cdn4.iconfinder.com/data/icons/fugue/icon/status.png',
                title: '{Thing Name}',
                sensor: 9,
            },
            {
                id: 6,
                img: 'https://cdn4.iconfinder.com/data/icons/fugue/icon/status.png',
                title: '{Thing Name}',
                sensor: 9,
            },
            {
                id: 7,
                img: 'https://cdn4.iconfinder.com/data/icons/fugue/icon/status.png',
                title: '{Thing Name}',
                sensor: 9,
            },
            {
                id: 8,
                img: 'https://cdn4.iconfinder.com/data/icons/fugue/icon/status.png',
                title: '{Thing Name}',
                sensor: 9,
            },
            {
                id: 9,
                img: 'https://cdn4.iconfinder.com/data/icons/fugue/icon/status.png',
                title: '{Thing Name}',
                sensor: 9,
            },
            {
                id: 10,
                img: 'https://cdn4.iconfinder.com/data/icons/fugue/icon/status.png',
                title: '{Thing Name}',
                sensor: 9,
            },
            {
                id: 11,
                img: 'https://cdn4.iconfinder.com/data/icons/fugue/icon/status.png',
                title: '{Thing Name}',
                sensor: 9,
            },
            {
                id: 12,
                img: 'https://cdn4.iconfinder.com/data/icons/fugue/icon/status.png',
                title: '{Thing Name}',
                sensor: 9,
            },
            {
                id: 13,
                img: 'https://cdn4.iconfinder.com/data/icons/fugue/icon/status.png',
                title: '{Thing Name}',
                sensor: 9,
            },
            {
                id: 14,
                img: 'https://cdn4.iconfinder.com/data/icons/fugue/icon/status.png',
                title: '{Thing Name}',
                sensor: 9,
            },
            {
                id: 15,
                img: 'https://cdn4.iconfinder.com/data/icons/fugue/icon/status.png',
                title: '{Thing Name}',
                sensor: 9,
            },
            {
                id: 16,
                img: 'https://cdn4.iconfinder.com/data/icons/fugue/icon/status.png',
                title: '{Thing Name}',
                sensor: 9,
            },
            {
                id: 17,
                img: 'https://cdn4.iconfinder.com/data/icons/fugue/icon/status.png',
                title: '{Thing Name}',
                sensor: 9,
            },
            {
                id: 18,
                img: 'https://cdn4.iconfinder.com/data/icons/fugue/icon/status.png',
                title: '{Thing Name}',
                sensor: 9,
            },
            {
                id: 19,
                img: 'https://cdn4.iconfinder.com/data/icons/fugue/icon/status.png',
                title: '{Thing Name}',
                sensor: 9,
            },
            {
                id: 20,
                img: 'https://cdn4.iconfinder.com/data/icons/fugue/icon/status.png',
                title: '{Thing Name}',
                sensor: 9,
            },
            {
                id: 21,
                img: 'https://cdn4.iconfinder.com/data/icons/fugue/icon/status.png',
                title: '{Thing Name}',
                sensor: 9,
            },
            {
                id: 22,
                img: 'https://cdn4.iconfinder.com/data/icons/fugue/icon/status.png',
                title: '{Thing Name}',
                sensor: 9,
            },
            {
                id: 23,
                img: 'https://cdn4.iconfinder.com/data/icons/fugue/icon/status.png',
                title: '{Thing Name}',
                sensor: 9,
            },
            {
                id: 24,
                img: 'https://cdn4.iconfinder.com/data/icons/fugue/icon/status.png',
                title: '{Thing Name}',
                sensor: 9,
            },
        ];
    }
    ngOnInit() {
    }
    onSelectThing(item) {
        // Check only vms-site
        if (window.location.pathname === '/private') {
            this.router.navigateByUrl(`/private?page=thing-detail&id=${item.id}`);
        }
        if (window.location.pathname === '/editor') {
            this.router.navigateByUrl(`/editor?page=thing-detail`);
        }
    }
}
AllThingComponent.ɵfac = function AllThingComponent_Factory(t) { return new (t || AllThingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
AllThingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AllThingComponent, selectors: [["app-all-thing"]], inputs: { globalConfig: "globalConfig" }, decls: 22, vars: 2, consts: [["id", "all-thing"], [1, "container"], [1, "row"], [1, "col-lg-12", "_title", 2, "font-size", "1.3rem"], [1, "col-lg-12", "grid"], ["class", "grid__item", 3, "ngStyle", "click", 4, "ngFor", "ngForOf"], ["aria-label", "Page navigation example", 1, "mt-4"], [1, "pagination", "justify-content-center", 2, "min-width", "150px"], [1, "page-item", "disabled"], ["href", "javascript:void(0)", "tabindex", "-1", 1, "page-link"], [1, "fas", "fa-chevron-left"], [1, "page-item"], ["href", "javascript:void(0)", 1, "page-link"], ["href", "javascript:void(0)", 1, "page-link", "page-link1", 2, "color", "#999"], [1, "fas", "fa-chevron-right"], [1, "grid__item", 3, "ngStyle", "click"], [3, "src"], [2, "font-size", "22px", "line-height", "1.5rem", 3, "ngStyle", "innerHTML"], [2, "font-size", "1rem", 3, "innerHTML", "ngStyle"]], template: function AllThingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AllThingComponent_div_7_Template, 6, 12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "nav", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Thing (", ctx.arrData.length, ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.arrData);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"]], styles: ["@media only screen and (min-width: 1366px) {\n  [_nghost-%COMP%] {\n    zoom: 0.8;\n  }\n}\n@media only screen and (min-width: 1400px) {\n  [_nghost-%COMP%] {\n    zoom: 0.8;\n  }\n}\n@media only screen and (min-width: 1440px) {\n  [_nghost-%COMP%] {\n    zoom: 0.85;\n  }\n}\n@media only screen and (min-width: 1600px) {\n  [_nghost-%COMP%] {\n    zoom: 0.9;\n  }\n}\n@media only screen and (min-width: 1680px) {\n  [_nghost-%COMP%] {\n    zoom: 0.95;\n  }\n}\n@media only screen and (min-width: 1920px) {\n  [_nghost-%COMP%] {\n    zoom: 1;\n  }\n}\n[_nghost-%COMP%] {\n  width: 100% !important;\n  height: 100%;\n}\n#all-thing[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n}\nmain[_ngcontent-%COMP%] {\n  margin: 0;\n  width: 100%;\n  min-height: 100vh !important;\n  display: flex;\n  flex-direction: column;\n}\nmain[_ngcontent-%COMP%]   .container__grid[_ngcontent-%COMP%] {\n  width: 1100px;\n  margin: auto;\n}\nmain[_ngcontent-%COMP%]   .container__grid[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  margin-left: 0 !important;\n  margin-right: 0 !important;\n}\n.title[_ngcontent-%COMP%] {\n  color: #fff;\n  margin-top: -44px;\n  margin-left: 25px;\n}\nsection[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  grid-gap: 30px;\n  margin-top: 2rem;\n}\n.grid__item[_ngcontent-%COMP%] {\n  height: 160px;\n  color: #fff;\n  font-size: 1em;\n  padding: 1.2rem;\n  cursor: pointer;\n}\n.grid__item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n._title[_ngcontent-%COMP%] {\n  color: #fff;\n  margin-top: 20px;\n  font-size: 20px;\n}\n.arrPage[_ngcontent-%COMP%] {\n  margin-left: 20px;\n  margin-right: 20px;\n}\n.page-link[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border: none;\n  color: #fff;\n}\n.page-item.disabled[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border: none;\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3dpZGdldHMvc3JjL2xpYi9jb21wb25lbnRzL2FsbC10aGluZy9FOlxcUHJvamVjdFxcYWlzLXBvYy9wcm9qZWN0c1xcd2lkZ2V0c1xcc3JjXFxsaWJcXHNoYXJlZFxcY29tbW9uXFxfem9vbS5zY3NzIiwicHJvamVjdHMvd2lkZ2V0cy9zcmMvbGliL2NvbXBvbmVudHMvYWxsLXRoaW5nL2FsbC10aGluZy5jb21wb25lbnQuc2NzcyIsInByb2plY3RzL3dpZGdldHMvc3JjL2xpYi9jb21wb25lbnRzL2FsbC10aGluZy9FOlxcUHJvamVjdFxcYWlzLXBvYy9wcm9qZWN0c1xcd2lkZ2V0c1xcc3JjXFxsaWJcXGNvbXBvbmVudHNcXGFsbC10aGluZ1xcYWxsLXRoaW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBREY7SUFFSSxTQUFBO0VDQ0Y7QUFDRjtBRENFO0VBTEY7SUFNSSxTQUFBO0VDRUY7QUFDRjtBREFFO0VBVEY7SUFVSSxVQUFBO0VDR0Y7QUFDRjtBRERFO0VBYkY7SUFjSSxTQUFBO0VDSUY7QUFDRjtBREZFO0VBakJGO0lBa0JJLFVBQUE7RUNLRjtBQUNGO0FESEU7RUFyQkY7SUFzQkksT0FBQTtFQ01GO0FBQ0Y7QUMzQkE7RUFDRSxzQkFBQTtFQUNBLFlBQUE7QUQ4QkY7QUM1QkE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FEK0JGO0FDN0JBO0VBQ0UsU0FBQTtFQUNBLFdBQUE7RUFDQSw0QkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBRGdDRjtBQzdCRTtFQUNFLGFBQUE7RUFFQSxZQUFBO0FEOEJKO0FDN0JJO0VBQ0UseUJBQUE7RUFDQSwwQkFBQTtBRCtCTjtBQzFCQTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FENkJGO0FDMUJBO0VBQ0UsV0FBQTtBRDZCRjtBQzFCQTtFQUNFLGFBQUE7RUFDQSxxQ0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBRDZCRjtBQzNCQTtFQUNFLGFBQUE7RUFFQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFFQSxlQUFBO0FENEJGO0FDM0JFO0VBQ0UsbUJBQUE7QUQ2Qko7QUN6QkE7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FENEJGO0FDekJBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtBRDRCRjtBQ3pCQTtFQUNFLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUQ0QkY7QUMxQkE7RUFDRSw2QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FENkJGIiwiZmlsZSI6InByb2plY3RzL3dpZGdldHMvc3JjL2xpYi9jb21wb25lbnRzL2FsbC10aGluZy9hbGwtdGhpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMzY2cHgpIHtcclxuICAgIHpvb206IDAuODtcclxuICB9XHJcblxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTQwMHB4KSB7XHJcbiAgICB6b29tOiAwLjg7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE0NDBweCkge1xyXG4gICAgem9vbTogMC44NTtcclxuICB9XHJcblxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTYwMHB4KSB7XHJcbiAgICB6b29tOiAwLjk7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE2ODBweCkge1xyXG4gICAgem9vbTogMC45NTtcclxuICB9XHJcblxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTkyMHB4KSB7XHJcbiAgICB6b29tOiAxO1xyXG4gIH1cclxufVxyXG4iLCJAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEzNjZweCkge1xuICA6aG9zdCB7XG4gICAgem9vbTogMC44O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE0MDBweCkge1xuICA6aG9zdCB7XG4gICAgem9vbTogMC44O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE0NDBweCkge1xuICA6aG9zdCB7XG4gICAgem9vbTogMC44NTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNjAwcHgpIHtcbiAgOmhvc3Qge1xuICAgIHpvb206IDAuOTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNjgwcHgpIHtcbiAgOmhvc3Qge1xuICAgIHpvb206IDAuOTU7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTkyMHB4KSB7XG4gIDpob3N0IHtcbiAgICB6b29tOiAxO1xuICB9XG59XG5cbjpob3N0IHtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4jYWxsLXRoaW5nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbm1haW4ge1xuICBtYXJnaW46IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiAxMDB2aCAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxubWFpbiAuY29udGFpbmVyX19ncmlkIHtcbiAgd2lkdGg6IDExMDBweDtcbiAgbWFyZ2luOiBhdXRvO1xufVxubWFpbiAuY29udGFpbmVyX19ncmlkIC5yb3cge1xuICBtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50O1xuICBtYXJnaW4tcmlnaHQ6IDAgIWltcG9ydGFudDtcbn1cblxuLnRpdGxlIHtcbiAgY29sb3I6ICNmZmY7XG4gIG1hcmdpbi10b3A6IC00NHB4O1xuICBtYXJnaW4tbGVmdDogMjVweDtcbn1cblxuc2VjdGlvbiB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZ3JpZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDYsIDFmcik7XG4gIGdyaWQtZ2FwOiAzMHB4O1xuICBtYXJnaW4tdG9wOiAycmVtO1xufVxuXG4uZ3JpZF9faXRlbSB7XG4gIGhlaWdodDogMTYwcHg7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDFlbTtcbiAgcGFkZGluZzogMS4ycmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uZ3JpZF9faXRlbSBpbWcge1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuXG4uX3RpdGxlIHtcbiAgY29sb3I6ICNmZmY7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLmFyclBhZ2Uge1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuXG4ucGFnZS1saW5rIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5wYWdlLWl0ZW0uZGlzYWJsZWQgLnBhZ2UtbGluayB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiAjZmZmO1xufSIsIkBpbXBvcnQgJy4uLy4uL3NoYXJlZC9jb21tb24vem9vbSc7XHJcblxyXG46aG9zdCB7XHJcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuI2FsbC10aGluZyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcbm1haW4ge1xyXG4gIG1hcmdpbjogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBtaW4taGVpZ2h0OiAxMDB2aCAhaW1wb3J0YW50O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgLy8gaGVpZ2h0OiAxMDB2aDtcclxuICAuY29udGFpbmVyX19ncmlkIHtcclxuICAgIHdpZHRoOiAxMTAwcHg7XHJcbiAgICAvL21pbi1oZWlnaHQ6IDEwMHZoICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICAucm93IHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4udGl0bGUge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIG1hcmdpbi10b3A6IC00NHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAyNXB4O1xyXG59XHJcblxyXG5zZWN0aW9uIHtcclxuICB3aWR0aDogMTAwJTtcclxuICAvLyAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYigxNCwgOCwgMjcpIDAlLCByZ2IoMTIsIDcsIDMwKSA0OCUsIHJnYigxNiAsNjksIDcwKSAxMDAlKVxyXG59XHJcbi5ncmlkIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDYsIDFmcik7XHJcbiAgZ3JpZC1nYXA6IDMwcHg7XHJcbiAgbWFyZ2luLXRvcDogMnJlbTtcclxufVxyXG4uZ3JpZF9faXRlbSB7XHJcbiAgaGVpZ2h0OiAxNjBweDtcclxuXHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZm9udC1zaXplOiAxZW07XHJcbiAgcGFkZGluZzogMS4ycmVtO1xyXG5cclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgaW1nIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgfVxyXG59XHJcblxyXG4uX3RpdGxlIHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxuLmFyclBhZ2Uge1xyXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gIG1hcmdpbi1yaWdodDogMjBweDtcclxufVxyXG5cclxuLnBhZ2UtbGluayB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcbi5wYWdlLWl0ZW0uZGlzYWJsZWQgLnBhZ2UtbGluayB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AllThingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-all-thing',
                templateUrl: './all-thing.component.html',
                styleUrls: ['./all-thing.component.scss'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }]; }, { globalConfig: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
const AllThingWidget = {
    type: 'page',
    component: AllThingComponent,
    defaultconfig: []
};


/***/ }),

/***/ "../widgets/src/lib/components/area-container-widget/area-container-widget.component.ts":
/*!**********************************************************************************************!*\
  !*** ../widgets/src/lib/components/area-container-widget/area-container-widget.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: AreaContainerWidgetComponent, AreaContainerWidget */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AreaContainerWidgetComponent", function() { return AreaContainerWidgetComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AreaContainerWidget", function() { return AreaContainerWidget; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



const _c0 = function (a0, a1) { return { "background": a0, "border-left": a1 }; };
class AreaContainerWidgetComponent {
    constructor() { }
    ngOnInit() { }
}
AreaContainerWidgetComponent.ɵfac = function AreaContainerWidgetComponent_Factory(t) { return new (t || AreaContainerWidgetComponent)(); };
AreaContainerWidgetComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AreaContainerWidgetComponent, selectors: [["app-area-container-widget"]], inputs: { widget: "widget", gridInfo: "gridInfo" }, decls: 1, vars: 4, consts: [[1, "w-100", "h-100", "position-relative", 3, "ngStyle"]], template: function AreaContainerWidgetComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](1, _c0, ctx.widget.config == null ? null : ctx.widget.config.backgroundColor, ctx.widget.config == null ? null : ctx.widget.config.border));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy93aWRnZXRzL3NyYy9saWIvY29tcG9uZW50cy9hcmVhLWNvbnRhaW5lci13aWRnZXQvYXJlYS1jb250YWluZXItd2lkZ2V0LmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AreaContainerWidgetComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-area-container-widget.',
                templateUrl: './area-container-widget.component.html',
                styleUrls: ['./area-container-widget.component.scss'],
            }]
    }], function () { return []; }, { widget: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], gridInfo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
const AreaContainerWidget = {
    type: 'rectangle',
    component: AreaContainerWidgetComponent,
    defaultConfig: []
};


/***/ }),

/***/ "../widgets/src/lib/components/button-widget/button-widget.component.ts":
/*!******************************************************************************!*\
  !*** ../widgets/src/lib/components/button-widget/button-widget.component.ts ***!
  \******************************************************************************/
/*! exports provided: ButtonWidgetComponent, ButtonWidget */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonWidgetComponent", function() { return ButtonWidgetComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonWidget", function() { return ButtonWidget; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_common_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/common/util */ "../widgets/src/lib/shared/common/util.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




const _c0 = function (a0) { return { "background": a0 }; };
class ButtonWidgetComponent {
    constructor() {
        this.buttonStyles = {
            roundCorner: 'round_corner',
            capsule: 'capsule',
            rectangle: 'rectangle'
        };
        this.bgStyles = {
            solid: 'solid',
            gradient1: 'gradient1',
            gradient2: 'gradient2'
        };
    }
    ngOnInit() {
    }
    ngOnDestroy() {
    }
    getBackground(bgStyle, color = '#9FFFB1') {
        if (bgStyle === this.bgStyles.gradient1) {
            return _shared_common_util__WEBPACK_IMPORTED_MODULE_1__["Util"].bgGradient2(180, color, -220);
        }
        else if (bgStyle === this.bgStyles.gradient2) {
            return _shared_common_util__WEBPACK_IMPORTED_MODULE_1__["Util"].bgGradient2(90, color, -220);
        }
        else {
            return color;
        }
    }
}
ButtonWidgetComponent.ɵfac = function ButtonWidgetComponent_Factory(t) { return new (t || ButtonWidgetComponent)(); };
ButtonWidgetComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ButtonWidgetComponent, selectors: [["lib-button-widget"]], inputs: { widget: "widget" }, decls: 3, vars: 12, consts: [[1, "button-widget-content", "btn", 3, "id", "ngStyle"]], template: function ButtonWidgetComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "i18nSelect");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](1, 7, ctx.widget.config == null ? null : ctx.widget.config.buttonStyle, ctx.buttonStyles));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx.widget.config == null ? null : ctx.widget.config.color);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.widget == null ? null : ctx.widget.id)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, ctx.getBackground(ctx.widget.config == null ? null : ctx.widget.config.bgStyle, ctx.widget.config == null ? null : ctx.widget.config.background)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.widget.config == null ? null : ctx.widget.config.value, "\n");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["I18nSelectPipe"]], styles: ["@media only screen and (min-width: 1366px) {\n  [_nghost-%COMP%] {\n    zoom: 0.8;\n  }\n}\n@media only screen and (min-width: 1400px) {\n  [_nghost-%COMP%] {\n    zoom: 0.8;\n  }\n}\n@media only screen and (min-width: 1440px) {\n  [_nghost-%COMP%] {\n    zoom: 0.85;\n  }\n}\n@media only screen and (min-width: 1600px) {\n  [_nghost-%COMP%] {\n    zoom: 0.9;\n  }\n}\n@media only screen and (min-width: 1680px) {\n  [_nghost-%COMP%] {\n    zoom: 0.95;\n  }\n}\n@media only screen and (min-width: 1920px) {\n  [_nghost-%COMP%] {\n    zoom: 1;\n  }\n}\n.button-widget-content[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 6px;\n  color: #000000;\n  font-size: 20px;\n  font-family: \"SF Pro Text-Bold\";\n}\n.round_corner[_ngcontent-%COMP%], .rectangle[_ngcontent-%COMP%], .capsule[_ngcontent-%COMP%] {\n  border: 0;\n}\n.capsule[_ngcontent-%COMP%] {\n  border-radius: 30px;\n}\n.rectangle[_ngcontent-%COMP%] {\n  border-radius: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3dpZGdldHMvc3JjL2xpYi9jb21wb25lbnRzL2J1dHRvbi13aWRnZXQvRTpcXFByb2plY3RcXGFpcy1wb2MvcHJvamVjdHNcXHdpZGdldHNcXHNyY1xcbGliXFxzaGFyZWRcXGNvbW1vblxcX3pvb20uc2NzcyIsInByb2plY3RzL3dpZGdldHMvc3JjL2xpYi9jb21wb25lbnRzL2J1dHRvbi13aWRnZXQvYnV0dG9uLXdpZGdldC5jb21wb25lbnQuc2NzcyIsInByb2plY3RzL3dpZGdldHMvc3JjL2xpYi9jb21wb25lbnRzL2J1dHRvbi13aWRnZXQvRTpcXFByb2plY3RcXGFpcy1wb2MvcHJvamVjdHNcXHdpZGdldHNcXHNyY1xcbGliXFxjb21wb25lbnRzXFxidXR0b24td2lkZ2V0XFxidXR0b24td2lkZ2V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBREY7SUFFSSxTQUFBO0VDQ0Y7QUFDRjtBRENFO0VBTEY7SUFNSSxTQUFBO0VDRUY7QUFDRjtBREFFO0VBVEY7SUFVSSxVQUFBO0VDR0Y7QUFDRjtBRERFO0VBYkY7SUFjSSxTQUFBO0VDSUY7QUFDRjtBREZFO0VBakJGO0lBa0JJLFVBQUE7RUNLRjtBQUNGO0FESEU7RUFyQkY7SUFzQkksT0FBQTtFQ01GO0FBQ0Y7QUMzQkE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBRUEsZUFBQTtFQUNBLCtCQUFBO0FENkJGO0FDeEJBO0VBQ0UsU0FBQTtBRDJCRjtBQ3hCQTtFQUVFLG1CQUFBO0FEMEJGO0FDdkJBO0VBRUUsZ0JBQUE7QUR5QkYiLCJmaWxlIjoicHJvamVjdHMvd2lkZ2V0cy9zcmMvbGliL2NvbXBvbmVudHMvYnV0dG9uLXdpZGdldC9idXR0b24td2lkZ2V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTM2NnB4KSB7XHJcbiAgICB6b29tOiAwLjg7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE0MDBweCkge1xyXG4gICAgem9vbTogMC44O1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNDQwcHgpIHtcclxuICAgIHpvb206IDAuODU7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE2MDBweCkge1xyXG4gICAgem9vbTogMC45O1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNjgwcHgpIHtcclxuICAgIHpvb206IDAuOTU7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE5MjBweCkge1xyXG4gICAgem9vbTogMTtcclxuICB9XHJcbn1cclxuIiwiQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMzY2cHgpIHtcbiAgOmhvc3Qge1xuICAgIHpvb206IDAuODtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNDAwcHgpIHtcbiAgOmhvc3Qge1xuICAgIHpvb206IDAuODtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNDQwcHgpIHtcbiAgOmhvc3Qge1xuICAgIHpvb206IDAuODU7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTYwMHB4KSB7XG4gIDpob3N0IHtcbiAgICB6b29tOiAwLjk7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTY4MHB4KSB7XG4gIDpob3N0IHtcbiAgICB6b29tOiAwLjk1O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE5MjBweCkge1xuICA6aG9zdCB7XG4gICAgem9vbTogMTtcbiAgfVxufVxuXG4uYnV0dG9uLXdpZGdldC1jb250ZW50IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC1mYW1pbHk6IFwiU0YgUHJvIFRleHQtQm9sZFwiO1xufVxuXG4ucm91bmRfY29ybmVyLCAucmVjdGFuZ2xlLCAuY2Fwc3VsZSB7XG4gIGJvcmRlcjogMDtcbn1cblxuLmNhcHN1bGUge1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xufVxuXG4ucmVjdGFuZ2xlIHtcbiAgYm9yZGVyLXJhZGl1czogMDtcbn0iLCJAaW1wb3J0ICcuLi8uLi9zaGFyZWQvY29tbW9uL3pvb20nO1xyXG5cclxuLmJ1dHRvbi13aWRnZXQtY29udGVudCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgY29sb3I6ICMwMDAwMDA7XHJcblxyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBmb250LWZhbWlseTogXCJTRiBQcm8gVGV4dC1Cb2xkXCI7XHJcbn1cclxuXHJcbi8vIGJ1dHRvbiBzdHlsZVxyXG5cclxuLnJvdW5kX2Nvcm5lciB7XHJcbiAgYm9yZGVyOiAwO1xyXG59XHJcblxyXG4uY2Fwc3VsZSB7XHJcbiAgQGV4dGVuZCAucm91bmRfY29ybmVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbn1cclxuXHJcbi5yZWN0YW5nbGUge1xyXG4gIEBleHRlbmQgLnJvdW5kX2Nvcm5lcjtcclxuICBib3JkZXItcmFkaXVzOiAwO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ButtonWidgetComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'lib-button-widget',
                templateUrl: './button-widget.component.html',
                styleUrls: ['./button-widget.component.scss']
            }]
    }], function () { return []; }, { widget: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
const ButtonWidget = {
    type: 'button',
    component: ButtonWidgetComponent,
    defaultConfig: []
};


/***/ }),

/***/ "../widgets/src/lib/components/chart-widget/chart-widget.component.ts":
/*!****************************************************************************!*\
  !*** ../widgets/src/lib/components/chart-widget/chart-widget.component.ts ***!
  \****************************************************************************/
/*! exports provided: ChartWidgetComponent, ChartWidget */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartWidgetComponent", function() { return ChartWidgetComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartWidget", function() { return ChartWidget; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



const _c0 = ["chartContainerRef"];
// refer: https://www.zingchart.com/gallery/stacked-area-chart-with-crosshair
class ChartWidgetComponent {
    constructor(renderer2) {
        this.renderer2 = renderer2;
    }
    ngOnInit() {
        this.initConfig();
        // Key is unique
        this.id = `graph-${new Date().getTime()}`;
    }
    ngAfterViewInit() {
        // Use Angular's Renderer2 to create the div element
        const divContainer = this.renderer2.createElement('div');
        // Set the id of the div
        this.renderer2.setProperty(divContainer, 'id', this.id);
        // Add class
        this.renderer2.addClass(divContainer, 'h-100');
        this.renderer2.addClass(divContainer, 'w-100');
        // Append the created div to the body element
        this.renderer2.appendChild(this.el.nativeElement, divContainer);
        // Render
        setTimeout(() => {
            zingchart.render({
                id: this.id,
                data: this.graphConfig,
                height: '100%',
                width: '100%'
            });
        }, 0);
    }
    ngAfterViewChecked() {
        // Remove "Power by zingchart"
        const loop = setInterval(() => {
            const els = document.querySelectorAll('[id*="license-text"]');
            if (els.length > 0) {
                els.forEach(e => {
                    e.innerHTML = '';
                });
            }
        }, 1000);
        // After 3 seconds stop
        setTimeout(() => clearInterval(loop), 3000);
    }
    ngOnDestroy() {
        zingchart.exec(this.id, 'destroy');
    }
    initConfig() {
        switch (this.widget.config.active) {
            case 'line':
                this.graphConfig = this.lineJSON(this.widget);
                break;
            case 'area':
                this.graphConfig = this.areaJSON(this.widget);
                break;
            case 'bar':
                this.graphConfig = this.barJSON(this.widget);
                break;
            case 'hbar':
                this.graphConfig = this.barJSON(this.widget);
                break;
            case 'bar3d':
                this.graphConfig = this.barJSON(this.widget);
                break;
            case 'pie':
                this.graphConfig = this.pieJSON(this.widget);
                break;
            default:
                break;
        }
    }
    lineJSON(widget) {
        const xAxis = widget.config.chart.option.xAxis;
        const yAxis = widget.config.chart.option.yAxis;
        const valueScaleX = widget.config.chart.option.valueScaleX;
        const valueScaleY = widget.config.chart.option.valueScaleY;
        const defaulColor = widget.config.chart.option.defaulColor;
        const series = [];
        widget.config.chart.series.forEach((el, i) => {
            series.push({
                values: el.values,
                lineWidth: '1px',
                lineColor: i > 0 ? el.lineColor : defaulColor,
                marker: {
                    visible: false
                }
            });
        });
        return {
            type: this.widget.config.active,
            theme: 'classic',
            backgroundColor: 'transparent',
            plot: {
                legend: {
                    visible: false,
                }
            },
            plotarea: {
                'adjust-layout': true,
            },
            scaleX: {
                values: valueScaleX ? valueScaleX : null,
                label: {
                    text: xAxis ? xAxis : xAxis,
                    fontColor: '#959393',
                    fontSize: 12,
                    fontFamily: 'SF Pro Text-Regular',
                },
                guide: {
                    lineColor: '#808080',
                    lineStyle: 'solid'
                },
                item: {
                    fontColor: '#808080',
                    fontSize: '12px',
                    fontWeight: 'normal',
                    offsetY: '5%'
                },
                lineColor: '#808080',
                lineStyle: 'solid',
                lineWidth: '1px',
                tick: {
                    lineColor: '#808080',
                    lineWidth: '1px'
                }
            },
            scaleY: {
                values: valueScaleY ? valueScaleY : null,
                label: {
                    text: yAxis ? yAxis : null,
                    fontColor: '#959393',
                    fontSize: 12,
                    fontFamily: 'SF Pro Text-Regular',
                },
                guide: {
                    lineColor: '#808080',
                    lineStyle: 'solid'
                },
                item: {
                    fontColor: '#808080',
                    fontFamily: 'arial',
                    fontSize: '12px',
                    fontWeight: 'normal',
                    offsetX: '-5%'
                },
                lineColor: '#808080',
                lineWidth: '1px',
                tick: {
                    lineColor: '#808080',
                    lineWidth: '1px'
                }
            },
            series: series // []
        };
    }
    areaJSON(widget) {
        const xAxis = widget.config.chart.option.xAxis;
        const yAxis = widget.config.chart.option.yAxis;
        const valueScaleX = widget.config.chart.option.valueScaleX;
        const valueScaleY = widget.config.chart.option.valueScaleY;
        const defaulColor = widget.config.chart.option.defaulColor;
        const series = [];
        widget.config.chart.series.forEach((el, i) => {
            series.push({
                values: el.values,
                backgroundColor: i > 0 ? el.backgroundColor : defaulColor,
                lineWidth: '0px',
                marker: {
                    visible: false
                }
            });
        });
        return {
            type: this.widget.config.active,
            theme: 'classic',
            backgroundColor: 'transparent',
            plot: {
                legend: {
                    visible: false,
                }
            },
            plotarea: {
                'adjust-layout': true,
            },
            scaleX: {
                values: valueScaleX ? valueScaleX : null,
                label: {
                    text: xAxis ? xAxis : null,
                    fontColor: '#959393',
                    fontSize: 12,
                    fontFamily: 'SF Pro Text-Regular',
                },
                guide: {
                    lineColor: '#808080',
                    lineStyle: 'solid'
                },
                item: {
                    fontColor: '#808080',
                    fontSize: '12px',
                    fontWeight: 'normal',
                    offsetY: '5%'
                },
                lineColor: '#808080',
                lineStyle: 'solid',
                lineWidth: '1px',
                tick: {
                    lineColor: '#808080',
                    lineWidth: '1px'
                }
            },
            scaleY: {
                values: valueScaleY ? valueScaleY : null,
                label: {
                    text: yAxis ? yAxis : null,
                    fontColor: '#959393',
                    fontSize: 12,
                    fontFamily: 'SF Pro Text-Regular',
                },
                guide: {
                    lineColor: '#808080',
                    lineStyle: 'solid'
                },
                item: {
                    fontColor: '#808080',
                    fontFamily: 'arial',
                    fontSize: '12px',
                    fontWeight: 'normal',
                    offsetX: '-5%'
                },
                lineColor: '#808080',
                lineWidth: '1px',
                tick: {
                    lineColor: '#808080',
                    lineWidth: '1px'
                }
            },
            series: series // []
        };
    }
    barJSON(widget) {
        const stack = widget.config.chart.option.stack;
        const xAxis = widget.config.chart.option.xAxis;
        const yAxis = widget.config.chart.option.yAxis;
        const valueScaleX = widget.config.chart.option.valueScaleX;
        const valueScaleY = widget.config.chart.option.valueScaleY;
        const defaulColor = widget.config.chart.option.defaulColor;
        const series = [];
        widget.config.chart.series.forEach((el, i) => {
            series.push({
                values: el.values,
                backgroundColor: i > 0 ? el.backgroundColor : defaulColor,
                lineWidth: '0px',
                marker: {
                    visible: false
                }
            });
        });
        return {
            type: this.widget.config.active,
            theme: 'classic',
            backgroundColor: 'transparent',
            plot: {
                legend: {
                    visible: false,
                },
                stacked: stack ? true : false,
                'stack-type': stack > 0 ? `${stack}%` : `normal` // Refer: https://www.zingchart.com/docs/chart-types/bar
            },
            plotarea: {
                'adjust-layout': true,
            },
            scaleX: {
                values: valueScaleX ? valueScaleX : null,
                label: {
                    text: xAxis ? xAxis : null,
                    fontColor: '#959393',
                    fontSize: 12,
                    fontFamily: 'SF Pro Text-Regular',
                },
                guide: {
                    lineColor: '#808080',
                    lineStyle: 'solid'
                },
                item: {
                    fontColor: '#808080',
                    fontSize: '12px',
                    fontWeight: 'normal',
                    offsetY: '5%'
                },
                lineColor: '#808080',
                lineStyle: 'solid',
                lineWidth: '1px',
                tick: {
                    lineColor: '#808080',
                    lineWidth: '1px'
                }
            },
            scaleY: {
                values: valueScaleY ? valueScaleY : null,
                label: {
                    text: yAxis ? yAxis : null,
                    fontColor: '#959393',
                    fontSize: 12,
                    fontFamily: 'SF Pro Text-Regular',
                },
                guide: {
                    lineColor: '#808080',
                    lineStyle: 'solid'
                },
                item: {
                    fontColor: '#808080',
                    fontFamily: 'arial',
                    fontSize: '12px',
                    fontWeight: 'normal',
                    offsetX: '-5%'
                },
                lineColor: '#808080',
                lineWidth: '1px',
                tick: {
                    lineColor: '#808080',
                    lineWidth: '1px'
                }
            },
            series: series // []
        };
    }
    pieJSON(widget) {
        return {
            type: 'pie',
            backgroundColor: 'transparent',
            plotarea: {
                'adjust-layout': true,
            },
            series: widget.config.pie.series // []
        };
    }
}
ChartWidgetComponent.ɵfac = function ChartWidgetComponent_Factory(t) { return new (t || ChartWidgetComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); };
ChartWidgetComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChartWidgetComponent, selectors: [["lib-chart-widget"]], viewQuery: function ChartWidgetComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.el = _t.first);
    } }, inputs: { widget: "widget", gridInfo: "gridInfo" }, decls: 2, vars: 2, consts: [[1, "chart_container", "h-100", "w-100", 3, "ngClass", "ngStyle"], ["chartContainerRef", ""]], template: function ChartWidgetComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0, 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.widget.config == null ? null : ctx.widget.config.class)("ngStyle", ctx.widget.config == null ? null : ctx.widget.config.styles);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"]], styles: [".chart_container[_ngcontent-%COMP%]   div[class$=license-text][_ngcontent-%COMP%] {\n  display: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3dpZGdldHMvc3JjL2xpYi9jb21wb25lbnRzL2NoYXJ0LXdpZGdldC9FOlxcUHJvamVjdFxcYWlzLXBvYy9wcm9qZWN0c1xcd2lkZ2V0c1xcc3JjXFxsaWJcXGNvbXBvbmVudHNcXGNoYXJ0LXdpZGdldFxcY2hhcnQtd2lkZ2V0LmNvbXBvbmVudC5zY3NzIiwicHJvamVjdHMvd2lkZ2V0cy9zcmMvbGliL2NvbXBvbmVudHMvY2hhcnQtd2lkZ2V0L2NoYXJ0LXdpZGdldC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLHdCQUFBO0FDQUoiLCJmaWxlIjoicHJvamVjdHMvd2lkZ2V0cy9zcmMvbGliL2NvbXBvbmVudHMvY2hhcnQtd2lkZ2V0L2NoYXJ0LXdpZGdldC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jaGFydF9jb250YWluZXIge1xyXG4gIGRpdltjbGFzcyQ9XCJsaWNlbnNlLXRleHRcIl0ge1xyXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG4iLCIuY2hhcnRfY29udGFpbmVyIGRpdltjbGFzcyQ9bGljZW5zZS10ZXh0XSB7XG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChartWidgetComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'lib-chart-widget',
                templateUrl: './chart-widget.component.html',
                styleUrls: ['./chart-widget.component.scss']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }]; }, { el: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['chartContainerRef']
        }], widget: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], gridInfo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
const ChartWidget = {
    name: 'Chart',
    type: 'component',
    component: ChartWidgetComponent,
    // TYPE: area, line, bar, hbar, bar3d, pie
    defaultConfig: [
        {
            active: 'line',
            chart: {
                option: {
                    stack: 0,
                    yAxis: null,
                },
                series: [
                    {
                        values: [1, 4, 1, 2, 1],
                        lineColor: '#64b5f6',
                        backgroundColor: '#64b5f6',
                        text: 'Data 1',
                    },
                    {
                        values: [5, 1, 5, 3, 4],
                        lineColor: '#F7B50E',
                        backgroundColor: '#F7B50E',
                        text: 'Data 1',
                    }
                ]
            },
            pie: {
                option: {
                // defaulColor: '#9FFFB1',
                },
                series: [
                    {
                        values: [23],
                        backgroundColor: '#ff4081',
                        text: 'Day 1',
                    },
                    {
                        values: [20],
                        backgroundColor: '#e040fb',
                        text: 'Day 2'
                    },
                    {
                        values: [25],
                        backgroundColor: '#448aff',
                        text: 'Day 3'
                    },
                    {
                        values: [25],
                        backgroundColor: '#ff5252',
                        text: 'Day 4'
                    },
                    {
                        values: [25],
                        backgroundColor: '#ff6e40',
                        text: 'Day 5'
                    },
                    {
                        values: [25],
                        backgroundColor: '#69f0ae',
                        text: 'Day 6'
                    },
                    {
                        values: [25],
                        backgroundColor: '#7c4dff',
                        text: 'Day 7'
                    }
                ]
            }
        }
    ]
};


/***/ }),

/***/ "../widgets/src/lib/components/create-member/create-member.component.ts":
/*!******************************************************************************!*\
  !*** ../widgets/src/lib/components/create-member/create-member.component.ts ***!
  \******************************************************************************/
/*! exports provided: CreateMemberComponent, CreateMemberWidget */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateMemberComponent", function() { return CreateMemberComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateMemberWidget", function() { return CreateMemberWidget; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class CreateMemberComponent {
    constructor(router) {
        this.router = router;
        this.userList = [
            {
                id: 1,
                name: 'Rachel Bradley',
                role: 1,
                email: 'Kevin_ot@gmarachel.bl@gmail.com',
                status: 0,
                lastAttended: '15 May 2020',
            },
            {
                id: 2,
                name: 'Kevin Elliot',
                role: 2,
                email: 'Kevin_ot@gmail.com',
                status: 1,
                lastAttended: '15 May 2020',
            },
            {
                id: 3,
                name: 'Larry Holland',
                role: 1,
                email: 'larry.holland@gmail.com',
                status: 0,
                lastAttended: '15 May 2020',
            },
            {
                id: 4,
                name: 'Jerry Reynolds',
                role: 2,
                email: 'Kevin_ojerry_reynolds@gmail.com',
                status: 1,
                lastAttended: '15 May 2020',
            },
            {
                id: 5,
                name: 'Randy Wells',
                role: 2,
                email: 'Krandy.wells01@gmail.com',
                status: 1,
                lastAttended: '15 May 2020',
            },
            {
                id: 6,
                name: 'Roy Lynch',
                role: 2,
                email: 'roy_lynch@gmail.com',
                status: 1,
                lastAttended: '15 May 2020',
            },
            {
                id: 7,
                name: 'Denise Griffin',
                role: 1,
                email: 'denise1984@gmail.com',
                status: 1,
                lastAttended: '15 May 2020',
            },
            {
                id: 8,
                name: 'Adam Vargas',
                role: 1,
                email: 'adam.vargas@gmail.com',
                status: 1,
                lastAttended: '15 May 2020',
            },
            {
                id: 9,
                name: 'Kathryn Gray',
                role: 2,
                email: 'kathryn_gray_real@gmail.com',
                status: 0,
                lastAttended: '15 May 2020',
            },
            {
                id: 10,
                name: 'Kevin Elliot',
                role: 3,
                email: 'Kevin_ot@gmail.com',
                status: 0,
                lastAttended: '15 May 2020',
            },
        ];
    }
    previewUserInfo() {
        if (localStorage.getItem('switchMode') === 'preview') {
            localStorage.setItem('viewMode', 'preview');
            this.router.navigateByUrl('/editor?page=user-management');
        }
    }
    ngOnInit() { }
}
CreateMemberComponent.ɵfac = function CreateMemberComponent_Factory(t) { return new (t || CreateMemberComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
CreateMemberComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CreateMemberComponent, selectors: [["app-create-member"]], decls: 50, vars: 1, consts: [[1, "container"], [1, "row", "list_1"], [1, "col", "info"], [1, "userQuantity"], [1, "inp"], ["type", "text", "placeholder", "Rachel", "disabled", "", 1, "form-control"], ["type", "text", "placeholder", "Bradley", "disabled", "", 1, "form-control"], [1, "inp", 2, "border-bottom", "1px solid #ffffff", "padding-bottom", "20px"], [1, "role"], [1, "form-check"], ["type", "radio", "name", "exampleRadios", "id", "exampleRadios1", "value", "option1", "checked", "", 1, "form-check-input"], ["for", "exampleRadios1", 1, "form-check-label"], ["for", "exampleRadios2", 1, "form-check-label"], ["type", "radio", "name", "exampleRadios", "id", "exampleRadios2", "value", "option2", 1, "form-check-input"], ["type", "radio", "name", "exampleRadios", "id", "exampleRadios3", "value", "option3", 1, "form-check-input"], ["for", "exampleRadios3", 1, "form-check-label", 2, "padding-top", "20px", 3, "innerHTML"], [1, "col", "list_2"], [1, "col", "userName"], ["type", "text", "placeholder", "Username", "disabled", "", 1, "form-control"], ["type", "text", "placeholder", "Password", "disabled", "", 1, "form-control"], [1, "inp", 2, "padding-top", "5px"], ["type", "text", "placeholder", "Confirm Password", "disabled", "", 1, "form-control"], [1, "pagination"]], template: function CreateMemberComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Create Member");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Lastname");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Role");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Admin ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Description ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " User ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Description ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Create");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", "{Role}", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    } }, styles: ["[_nghost-%COMP%] {\n  width: 100%;\n  height: 100%;\n  margin: 0 auto;\n  overflow: hidden;\n  position: relative;\n}\n\n.container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.container[_ngcontent-%COMP%]   .list_1[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #fff;\n  padding-bottom: 25px;\n  margin: auto;\n}\n\n.container[_ngcontent-%COMP%]   .list_1[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  border-right: 1px solid #fff;\n  margin-top: 85px;\n  padding-right: 60px;\n}\n\n.container[_ngcontent-%COMP%]   .role[_ngcontent-%COMP%] {\n  padding-top: 20px;\n}\n\n.container[_ngcontent-%COMP%]   .role[_ngcontent-%COMP%]   .form-check[_ngcontent-%COMP%] {\n  display: grid;\n  margin-left: 30px;\n  margin-top: 20px;\n}\n\n.container[_ngcontent-%COMP%]   .role[_ngcontent-%COMP%]   .form-check[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 15px;\n}\n\n.container[_ngcontent-%COMP%]   .role[_ngcontent-%COMP%]   .form-check[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  padding-top: 10px;\n  opacity: 1;\n  color: #fff;\n  font-size: 16px;\n  font-family: \"SF Pro Text-Bold\";\n}\n\n.container[_ngcontent-%COMP%]   .role[_ngcontent-%COMP%]   .form-check[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 16px;\n  font-family: \"SF Pro Text-Regular\";\n  opacity: 0.7;\n}\n\n.container[_ngcontent-%COMP%]   .inp[_ngcontent-%COMP%] {\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n\n.container[_ngcontent-%COMP%]   .list_2[_ngcontent-%COMP%] {\n  padding-top: 82px;\n}\n\n.container[_ngcontent-%COMP%]   .list_2[_ngcontent-%COMP%]   .userName[_ngcontent-%COMP%] {\n  padding-left: 45px;\n}\n\n.container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  color: #fff;\n  margin-top: -35px;\n}\n\n.container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border-radius: 6px;\n  width: 350px;\n  height: 48px;\n  background-color: transparent !important;\n}\n\n.container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #ffffff;\n  font-size: 14px;\n  font-family: \"SF pro Text-Regular\";\n}\n\n.container[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%] {\n  padding-top: 40px;\n  margin: auto;\n}\n\n.container[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 350px;\n  height: 48px;\n  background-color: #9fffb1;\n  border-radius: 8px;\n  color: #212121;\n  font-size: 20px;\n  font-family: \"SF Pro Text-Bold\";\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3dpZGdldHMvc3JjL2xpYi9jb21wb25lbnRzL2NyZWF0ZS1tZW1iZXIvRTpcXFByb2plY3RcXGFpcy1wb2MvcHJvamVjdHNcXHdpZGdldHNcXHNyY1xcbGliXFxjb21wb25lbnRzXFxjcmVhdGUtbWVtYmVyXFxjcmVhdGUtbWVtYmVyLmNvbXBvbmVudC5zY3NzIiwicHJvamVjdHMvd2lkZ2V0cy9zcmMvbGliL2NvbXBvbmVudHMvY3JlYXRlLW1lbWJlci9jcmVhdGUtbWVtYmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBRUEsZ0JBQUE7RUFDQSxrQkFBQTtBQ0FGOztBRHdCQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtBQ3JCRjs7QURzQkU7RUFDRSw2QkFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtBQ3BCSjs7QURxQkk7RUFDRSw0QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNuQk47O0FEdUJFO0VBQ0UsaUJBQUE7QUNyQko7O0FEdUJJO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNyQk47O0FEc0JNO0VBQ0UsV0FBQTtBQ3BCUjs7QURzQk07RUFDRSxpQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLCtCQUFBO0FDcEJSOztBRHNCTTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0Esa0NBQUE7RUFDQSxZQUFBO0FDcEJSOztBRHlCRTtFQUNFLGlCQUFBO0VBQ0Esb0JBQUE7QUN2Qko7O0FEeUJFO0VBQ0UsaUJBQUE7QUN2Qko7O0FEeUJJO0VBQ0Usa0JBQUE7QUN2Qk47O0FEMEJFO0VBQ0UsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUN4Qko7O0FEMEJFO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHdDQUFBO0FDeEJKOztBRDBCRTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0NBQUE7QUN4Qko7O0FEMEJFO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0FDeEJKOztBRHlCSTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsK0JBQUE7QUN2Qk4iLCJmaWxlIjoicHJvamVjdHMvd2lkZ2V0cy9zcmMvbGliL2NvbXBvbmVudHMvY3JlYXRlLW1lbWJlci9jcmVhdGUtbWVtYmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICAvLyBIaWRkZW4gSGFtYnVyZ2VyXHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi8vIC5jb250YWluZXIge1xyXG4vLyAgIGRpc3BsYXk6IGZsZXg7XHJcbi8vICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbi8vICAgLmxpc3Qge1xyXG4vLyAgICAgd2lkdGg6IDEwMCU7XHJcbi8vICAgICBtYXJnaW46IGF1dG87XHJcbi8vICAgICBoZWlnaHQ6IGNhbGMoMTA4MHB4IC0gMTYwcHgpO1xyXG4vLyAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuLy8gICAgIC5saXN0LXVzZXIge1xyXG4vLyAgICAgICB3aWR0aDogMTEwMHB4O1xyXG4vLyAgICAgICBtYXJnaW46IGF1dG87XHJcbi8vICAgICAgIHBhZGRpbmctbGVmdDogMTYwcHg7XHJcbi8vICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmZmZjtcclxuLy8gICAgIH1cclxuLy8gICB9XHJcbi8vIH1cclxuXHJcbi8vXHJcblxyXG4uY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgLmxpc3RfMSB7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmZjtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyNXB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgLmluZm8ge1xyXG4gICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZmZmO1xyXG4gICAgICBtYXJnaW4tdG9wOiA4NXB4O1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiA2MHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnJvbGUge1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcblxyXG4gICAgLmZvcm0tY2hlY2sge1xyXG4gICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICBtYXJnaW4tbGVmdDogMzBweDtcclxuICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgaW5wdXQge1xyXG4gICAgICAgIHdpZHRoOiAxNXB4O1xyXG4gICAgICB9XHJcbiAgICAgIGxhYmVsIHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBmb250LWZhbWlseTogXCJTRiBQcm8gVGV4dC1Cb2xkXCI7XHJcbiAgICAgIH1cclxuICAgICAgc3BhbiB7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIlNGIFBybyBUZXh0LVJlZ3VsYXJcIjtcclxuICAgICAgICBvcGFjaXR5OiAwLjc7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5pbnAge1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICB9XHJcbiAgLmxpc3RfMiB7XHJcbiAgICBwYWRkaW5nLXRvcDogODJweDtcclxuXHJcbiAgICAudXNlck5hbWUge1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDQ1cHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHAge1xyXG4gICAgZm9udC1zaXplOiAxLjNyZW07XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIG1hcmdpbi10b3A6IC0zNXB4O1xyXG4gIH1cclxuICBpbnB1dCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICB3aWR0aDogMzUwcHg7XHJcbiAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBzcGFuIHtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFwiU0YgcHJvIFRleHQtUmVndWxhclwiO1xyXG4gIH1cclxuICAucGFnaW5hdGlvbiB7XHJcbiAgICBwYWRkaW5nLXRvcDogNDBweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgIHdpZHRoOiAzNTBweDtcclxuICAgICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWZmZmIxO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgIGNvbG9yOiMyMTIxMjE7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgZm9udC1mYW1pbHk6IFwiU0YgUHJvIFRleHQtQm9sZFwiO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCI6aG9zdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLmNvbnRhaW5lciAubGlzdF8xIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZmY7XG4gIHBhZGRpbmctYm90dG9tOiAyNXB4O1xuICBtYXJnaW46IGF1dG87XG59XG4uY29udGFpbmVyIC5saXN0XzEgLmluZm8ge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZmZmO1xuICBtYXJnaW4tdG9wOiA4NXB4O1xuICBwYWRkaW5nLXJpZ2h0OiA2MHB4O1xufVxuLmNvbnRhaW5lciAucm9sZSB7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xufVxuLmNvbnRhaW5lciAucm9sZSAuZm9ybS1jaGVjayB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuLmNvbnRhaW5lciAucm9sZSAuZm9ybS1jaGVjayBpbnB1dCB7XG4gIHdpZHRoOiAxNXB4O1xufVxuLmNvbnRhaW5lciAucm9sZSAuZm9ybS1jaGVjayBsYWJlbCB7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBvcGFjaXR5OiAxO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LWZhbWlseTogXCJTRiBQcm8gVGV4dC1Cb2xkXCI7XG59XG4uY29udGFpbmVyIC5yb2xlIC5mb3JtLWNoZWNrIHNwYW4ge1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LWZhbWlseTogXCJTRiBQcm8gVGV4dC1SZWd1bGFyXCI7XG4gIG9wYWNpdHk6IDAuNztcbn1cbi5jb250YWluZXIgLmlucCB7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cbi5jb250YWluZXIgLmxpc3RfMiB7XG4gIHBhZGRpbmctdG9wOiA4MnB4O1xufVxuLmNvbnRhaW5lciAubGlzdF8yIC51c2VyTmFtZSB7XG4gIHBhZGRpbmctbGVmdDogNDVweDtcbn1cbi5jb250YWluZXIgcCB7XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xuICBjb2xvcjogI2ZmZjtcbiAgbWFyZ2luLXRvcDogLTM1cHg7XG59XG4uY29udGFpbmVyIGlucHV0IHtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICB3aWR0aDogMzUwcHg7XG4gIGhlaWdodDogNDhweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cbi5jb250YWluZXIgc3BhbiB7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtZmFtaWx5OiBcIlNGIHBybyBUZXh0LVJlZ3VsYXJcIjtcbn1cbi5jb250YWluZXIgLnBhZ2luYXRpb24ge1xuICBwYWRkaW5nLXRvcDogNDBweDtcbiAgbWFyZ2luOiBhdXRvO1xufVxuLmNvbnRhaW5lciAucGFnaW5hdGlvbiBidXR0b24ge1xuICB3aWR0aDogMzUwcHg7XG4gIGhlaWdodDogNDhweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzlmZmZiMTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBjb2xvcjogIzIxMjEyMTtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LWZhbWlseTogXCJTRiBQcm8gVGV4dC1Cb2xkXCI7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreateMemberComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                // tslint:disable-next-line:component-selector
                selector: 'app-create-member',
                templateUrl: './create-member.component.html',
                styleUrls: ['./create-member.component.scss'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();
const CreateMemberWidget = {
    type: 'page',
    component: CreateMemberComponent,
    defaultconfig: [],
};


/***/ }),

/***/ "../widgets/src/lib/components/dashboard-management/dashboard-management.component.ts":
/*!********************************************************************************************!*\
  !*** ../widgets/src/lib/components/dashboard-management/dashboard-management.component.ts ***!
  \********************************************************************************************/
/*! exports provided: DashboardManagementComponent, DashboardManagementWidget */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardManagementComponent", function() { return DashboardManagementComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardManagementWidget", function() { return DashboardManagementWidget; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function DashboardManagementComponent_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    const _r180 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardManagementComponent_ng_container_7_Template_div_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r180); const row_r178 = ctx.$implicit; const ctx_r179 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r179.onSelectedDashboad(row_r178); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "dashboard");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const row_r178 = ctx.$implicit;
    const ctx_r175 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", row_r178.id == ctx_r175.selectedDashboad.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r178.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", row_r178.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", row_r178.amount, " Widgets");
} }
function DashboardManagementComponent_ng_container_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const row_r181 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", row_r181.avatarUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", row_r181.avatarUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r181.fullName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r181.roleName);
} }
function DashboardManagementComponent_ng_container_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const row_r182 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", row_r182.avatarUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", row_r182.avatarUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r182.fullName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r182.roleName);
} }
class DashboardManagementComponent {
    constructor() {
        this.dashboardNames = [
            {
                id: 1,
                name: '{Dashboard Name}',
                amount: '{999}',
                color: '#212121',
                active: true
            },
            {
                id: 2,
                name: '{Dashboard Name}',
                amount: '{999}',
                color: '#C58ECC',
                active: false
            },
            {
                id: 3,
                name: '{Dashboard Name}',
                amount: '{999}',
                color: '#E8829A',
                active: false
            }
        ];
        this.members = [
            {
                id: 1,
                fullName: 'Rachel Bradley',
                roleName: 'Admin',
                avatarUrl: 'https://i0.wp.com/danongonline.com.vn/wp-content/uploads/2018/02/anh-girl-xinh-9x-kute-24.jpg'
            },
            {
                id: 2,
                fullName: 'Larry Holland',
                roleName: 'User',
                avatarUrl: 'https://manofmany.com/wp-content/uploads/2019/06/50-Long-Haircuts-Hairstyle-Tips-for-Men-2.jpg'
            },
            {
                id: 3,
                fullName: 'Adam Vargas',
                roleName: 'User',
                avatarUrl: 'https://www.oregonlive.com/resizer/CI_DI9cMXK8XxR05dAOnL5NJpYs=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/6PWAWGTKTFHOZF4VJALHFHE3VU.png'
            },
            {
                id: 4,
                fullName: 'Larry Rommel',
                roleName: 'User',
                avatarUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/48/Outdoors-man-portrait_%28cropped%29.jpg'
            },
            {
                id: 1,
                fullName: 'Rachel Bradley',
                roleName: 'Admin',
                avatarUrl: 'https://i0.wp.com/danongonline.com.vn/wp-content/uploads/2018/02/anh-girl-xinh-9x-kute-24.jpg'
            },
            {
                id: 2,
                fullName: 'Larry Holland',
                roleName: 'User',
                avatarUrl: 'https://manofmany.com/wp-content/uploads/2019/06/50-Long-Haircuts-Hairstyle-Tips-for-Men-2.jpg'
            },
            {
                id: 3,
                fullName: 'Adam Vargas',
                roleName: 'User',
                avatarUrl: 'https://www.oregonlive.com/resizer/CI_DI9cMXK8XxR05dAOnL5NJpYs=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/6PWAWGTKTFHOZF4VJALHFHE3VU.png'
            },
            {
                id: 4,
                fullName: 'Larry Rommel',
                roleName: 'User',
                avatarUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/48/Outdoors-man-portrait_%28cropped%29.jpg'
            },
            {
                id: 1,
                fullName: 'Rachel Bradley',
                roleName: 'Admin',
                avatarUrl: 'https://i0.wp.com/danongonline.com.vn/wp-content/uploads/2018/02/anh-girl-xinh-9x-kute-24.jpg'
            },
            {
                id: 2,
                fullName: 'Larry Holland',
                roleName: 'User',
                avatarUrl: 'https://manofmany.com/wp-content/uploads/2019/06/50-Long-Haircuts-Hairstyle-Tips-for-Men-2.jpg'
            },
            {
                id: 3,
                fullName: 'Adam Vargas',
                roleName: 'User',
                avatarUrl: 'https://www.oregonlive.com/resizer/CI_DI9cMXK8XxR05dAOnL5NJpYs=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/6PWAWGTKTFHOZF4VJALHFHE3VU.png'
            },
            {
                id: 4,
                fullName: 'Larry Rommel',
                roleName: 'User',
                avatarUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/48/Outdoors-man-portrait_%28cropped%29.jpg'
            }
        ];
    }
    ngOnInit() {
        this.selectedDashboad = this.dashboardNames[0];
    }
    onSelectedDashboad(item) {
        this.selectedDashboad = item;
    }
}
DashboardManagementComponent.ɵfac = function DashboardManagementComponent_Factory(t) { return new (t || DashboardManagementComponent)(); };
DashboardManagementComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardManagementComponent, selectors: [["lib-dashboard-management"]], decls: 40, vars: 6, consts: [[1, "container", "p-0"], [1, "d-flex", "justify-content-around"], [1, "col-md-4", "p-0", "col_1"], [4, "ngFor", "ngForOf"], [1, "line_vertical"], [1, "col-md-4", "p-0", "col_2"], [1, "title"], [1, "goto_dashboard"], [1, "feather-arrow-right", "cursor_pointer"], [1, "dashboard_member"], [1, "add"], [1, "fas", "fa-user"], [1, "feather-plus-circle", "cursor_pointer"], [1, "list_member", "scroll-dark", 2, "max-height", "190px"], [1, "col-md-4", "p-0", "col_3"], [1, "input_icon_container"], [1, "feather-search"], ["type", "text", "placeholder", "Search\u2026", 1, "form-control"], [1, "list_member", "scroll-dark", 2, "max-height", "390px"], [1, "dashboard", "cursor_pointer"], [3, "click"], [1, "box"], [1, "name"], [1, "material-icons"], [1, "amount"], [1, "item"], [1, "user"], [3, "src", "alt"], [1, "feather-minus-circle", "cursor_pointer", 2, "color", "#333333"], [1, "feather-minus-circle", "cursor_pointer", 2, "color", "#FFFFFF"]], template: function DashboardManagementComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Dashboard Management");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, DashboardManagementComponent_ng_container_7_Template, 10, 6, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Go to Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Dashboard Member");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, DashboardManagementComponent_ng_container_28_Template, 10, 4, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Add Member");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "All Member (6)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, DashboardManagementComponent_ng_container_39_Template, 10, 4, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Dashboard (", ctx.dashboardNames == null ? null : ctx.dashboardNames.length, ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.dashboardNames);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]("Dashboard Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", "{999}", " Widgets");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.members);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.members);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: ["@media only screen and (min-width: 1366px) {\n  [_nghost-%COMP%] {\n    zoom: 0.8;\n  }\n}\n@media only screen and (min-width: 1400px) {\n  [_nghost-%COMP%] {\n    zoom: 0.8;\n  }\n}\n@media only screen and (min-width: 1440px) {\n  [_nghost-%COMP%] {\n    zoom: 0.85;\n  }\n}\n@media only screen and (min-width: 1600px) {\n  [_nghost-%COMP%] {\n    zoom: 0.9;\n  }\n}\n@media only screen and (min-width: 1680px) {\n  [_nghost-%COMP%] {\n    zoom: 0.95;\n  }\n}\n@media only screen and (min-width: 1920px) {\n  [_nghost-%COMP%] {\n    zoom: 1;\n  }\n}\n.container[_ngcontent-%COMP%] {\n  width: 1020px;\n}\n.container[_ngcontent-%COMP%]    > h3[_ngcontent-%COMP%] {\n  color: #FFFFFF;\n  font-size: 20px;\n  font-family: \"SF Pro Text-Bold\";\n  height: 80px;\n  display: flex;\n  align-items: center;\n  margin: 0;\n}\n.container[_ngcontent-%COMP%]   .line_vertical[_ngcontent-%COMP%] {\n  margin: 0 30px;\n  border: 1px solid #E0E0E0;\n  opacity: 0.2;\n}\n.container[_ngcontent-%COMP%]   .col_1[_ngcontent-%COMP%] {\n  max-width: 300px;\n  min-width: 300px;\n  min-height: 90vh;\n}\n.container[_ngcontent-%COMP%]   .col_1[_ngcontent-%COMP%]    > h3[_ngcontent-%COMP%] {\n  line-height: normal;\n  color: #FFFFFF;\n  font-size: 20px;\n  font-family: \"SF Pro Text-Medium\";\n  margin-bottom: 33px;\n}\n.container[_ngcontent-%COMP%]   .col_1[_ngcontent-%COMP%]   .dashboard[_ngcontent-%COMP%] {\n  width: 300px;\n  min-height: 140px;\n  background: #000000;\n  padding-left: 20px;\n  margin-bottom: 20px;\n  display: flex;\n  align-items: center;\n}\n.container[_ngcontent-%COMP%]   .col_1[_ngcontent-%COMP%]   .dashboard[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 5px;\n}\n.container[_ngcontent-%COMP%]   .col_1[_ngcontent-%COMP%]   .dashboard[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  color: #FFFFFF;\n  font-size: 28px;\n  font-family: \"SF Pro Text-Bold\";\n  line-height: 1;\n}\n.container[_ngcontent-%COMP%]   .col_1[_ngcontent-%COMP%]   .dashboard[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #212121;\n  font-size: 36px;\n  padding-right: 52px;\n}\n.container[_ngcontent-%COMP%]   .col_1[_ngcontent-%COMP%]   .dashboard[_ngcontent-%COMP%]   .amount[_ngcontent-%COMP%] {\n  color: #FFFFFF;\n  font-size: 14px;\n  font-family: \"SF Pro Text-Regular\";\n}\n.container[_ngcontent-%COMP%]   .col_1[_ngcontent-%COMP%]   .dashboard.active[_ngcontent-%COMP%] {\n  background: #9FFFB1;\n}\n.container[_ngcontent-%COMP%]   .col_1[_ngcontent-%COMP%]   .dashboard.active[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  color: #212121;\n}\n.container[_ngcontent-%COMP%]   .col_1[_ngcontent-%COMP%]   .dashboard.active[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #212121;\n}\n.container[_ngcontent-%COMP%]   .col_1[_ngcontent-%COMP%]   .dashboard.active[_ngcontent-%COMP%]   .amount[_ngcontent-%COMP%] {\n  color: #212121;\n}\n.container[_ngcontent-%COMP%]   .col_2[_ngcontent-%COMP%] {\n  max-width: 300px;\n  min-width: 300px;\n  min-height: 90vh;\n}\n.container[_ngcontent-%COMP%]   .col_2[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #FFFFFF;\n  font-size: 20px;\n  line-height: normal;\n}\n.container[_ngcontent-%COMP%]   .col_2[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]:nth-child(1) {\n  margin-bottom: 33px;\n  font-family: \"SF Pro Text-Medium\";\n}\n.container[_ngcontent-%COMP%]   .col_2[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]:nth-child(2) {\n  font-family: \"SF Pro Text-Regular\";\n}\n.container[_ngcontent-%COMP%]   .col_2[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  margin: 20px 0;\n  border: 1px solid #E0E0E0;\n  opacity: 0.2;\n}\n.container[_ngcontent-%COMP%]   .col_2[_ngcontent-%COMP%]   .goto_dashboard[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  color: #9FFFB1;\n  font-size: 20px;\n  font-family: \"SF Pro Text-Bold\";\n  margin-bottom: 40px;\n}\n.container[_ngcontent-%COMP%]   .col_2[_ngcontent-%COMP%]   .goto_dashboard[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n.container[_ngcontent-%COMP%]   .col_2[_ngcontent-%COMP%]   .dashboard_member[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n.container[_ngcontent-%COMP%]   .col_2[_ngcontent-%COMP%]   .dashboard_member[_ngcontent-%COMP%]   .add[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n.container[_ngcontent-%COMP%]   .col_2[_ngcontent-%COMP%]   .dashboard_member[_ngcontent-%COMP%]   .add[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  color: #FFFFFF;\n  font-size: 20px;\n  font-family: \"SF Pro Text-Medium\";\n}\n.container[_ngcontent-%COMP%]   .col_2[_ngcontent-%COMP%]   .dashboard_member[_ngcontent-%COMP%]   .add[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n.container[_ngcontent-%COMP%]   .col_2[_ngcontent-%COMP%]   .dashboard_member[_ngcontent-%COMP%]   .add[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%] {\n  color: #9FFFB1;\n  font-size: 20px;\n}\n.container[_ngcontent-%COMP%]   .col_3[_ngcontent-%COMP%] {\n  max-width: 300px;\n  min-width: 300px;\n  margin-top: 180px;\n}\n.container[_ngcontent-%COMP%]   .col_3[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #FFFFFF;\n  font-size: 20px;\n  line-height: normal;\n  font-family: \"SF Pro Text-Medium\";\n}\n.container[_ngcontent-%COMP%]   .col_3[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  color: #FFFFFF;\n  font-size: 14px;\n  line-height: normal;\n  font-family: \"SF Pro Text-Regular\";\n  margin: 20px 0;\n}\n.container[_ngcontent-%COMP%]   .col_3[_ngcontent-%COMP%]   .input_icon_container[_ngcontent-%COMP%] {\n  position: relative;\n}\n.container[_ngcontent-%COMP%]   .col_3[_ngcontent-%COMP%]   .input_icon_container[_ngcontent-%COMP%]   .feather-search[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 6px;\n  left: 15px;\n  font-size: 24px;\n  color: #FFFFFF;\n}\n.container[_ngcontent-%COMP%]   .col_3[_ngcontent-%COMP%]   .input_icon_container[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%] {\n  width: 300px;\n  height: 36px;\n  border: unset;\n  border-radius: 6px;\n  color: #FFFFFF;\n  background: #FFFFFF1A 0% 0% no-repeat padding-box;\n  padding-left: 50px;\n  font-size: 16px;\n  font-family: \"SF Pro Text-Regular\";\n}\n.container[_ngcontent-%COMP%]   .col_3[_ngcontent-%COMP%]   .input_icon_container[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]::-webkit-input-placeholder {\n  opacity: 0.3;\n}\n.container[_ngcontent-%COMP%]   .col_3[_ngcontent-%COMP%]   .input_icon_container[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]::-moz-placeholder {\n  opacity: 0.3;\n}\n.container[_ngcontent-%COMP%]   .col_3[_ngcontent-%COMP%]   .input_icon_container[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]:-ms-input-placeholder {\n  opacity: 0.3;\n}\n.container[_ngcontent-%COMP%]   .col_3[_ngcontent-%COMP%]   .input_icon_container[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]::-ms-input-placeholder {\n  opacity: 0.3;\n}\n.container[_ngcontent-%COMP%]   .col_3[_ngcontent-%COMP%]   .input_icon_container[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]::placeholder {\n  opacity: 0.3;\n}\n.container[_ngcontent-%COMP%]   .list_member[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   .col_2[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   .col_3[_ngcontent-%COMP%] {\n  width: 320px;\n  padding-right: 15px;\n}\n.container[_ngcontent-%COMP%]   .list_member[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   .col_2[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   .col_3[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n  height: 48px;\n}\n.container[_ngcontent-%COMP%]   .list_member[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   .col_2[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   .col_3[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n}\n.container[_ngcontent-%COMP%]   .list_member[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   .col_2[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   .col_3[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  height: 48px;\n}\n.container[_ngcontent-%COMP%]   .list_member[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   .col_2[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   .col_3[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 16px;\n  color: #FFFFFF;\n}\n.container[_ngcontent-%COMP%]   .list_member[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-child(1), .container[_ngcontent-%COMP%]   .col_2[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-child(1), .container[_ngcontent-%COMP%]   .col_3[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-child(1) {\n  font-family: \"SF Pro Text-Bold\";\n}\n.container[_ngcontent-%COMP%]   .list_member[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-child(2), .container[_ngcontent-%COMP%]   .col_2[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-child(2), .container[_ngcontent-%COMP%]   .col_3[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-child(2) {\n  margin-top: 10px;\n  font-family: \"SF Pro Text-Regular\";\n  opacity: 0.7;\n}\n.container[_ngcontent-%COMP%]   .list_member[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   .col_2[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   .col_3[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border-radius: 100px;\n  margin-right: 10px;\n}\n.container[_ngcontent-%COMP%]   .list_member[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   .col_2[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   .col_3[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3dpZGdldHMvc3JjL2xpYi9jb21wb25lbnRzL2Rhc2hib2FyZC1tYW5hZ2VtZW50L0U6XFxQcm9qZWN0XFxhaXMtcG9jL3Byb2plY3RzXFx3aWRnZXRzXFxzcmNcXGxpYlxcc2hhcmVkXFxjb21tb25cXF96b29tLnNjc3MiLCJwcm9qZWN0cy93aWRnZXRzL3NyYy9saWIvY29tcG9uZW50cy9kYXNoYm9hcmQtbWFuYWdlbWVudC9kYXNoYm9hcmQtbWFuYWdlbWVudC5jb21wb25lbnQuc2NzcyIsInByb2plY3RzL3dpZGdldHMvc3JjL2xpYi9jb21wb25lbnRzL2Rhc2hib2FyZC1tYW5hZ2VtZW50L0U6XFxQcm9qZWN0XFxhaXMtcG9jL3Byb2plY3RzXFx3aWRnZXRzXFxzcmNcXGxpYlxcY29tcG9uZW50c1xcZGFzaGJvYXJkLW1hbmFnZW1lbnRcXGRhc2hib2FyZC1tYW5hZ2VtZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBREY7SUFFSSxTQUFBO0VDQ0Y7QUFDRjtBRENFO0VBTEY7SUFNSSxTQUFBO0VDRUY7QUFDRjtBREFFO0VBVEY7SUFVSSxVQUFBO0VDR0Y7QUFDRjtBRERFO0VBYkY7SUFjSSxTQUFBO0VDSUY7QUFDRjtBREZFO0VBakJGO0lBa0JJLFVBQUE7RUNLRjtBQUNGO0FESEU7RUFyQkY7SUFzQkksT0FBQTtFQ01GO0FBQ0Y7QUMzQkE7RUFDRSxhQUFBO0FEOEJGO0FDNUJFO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSwrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0FEOEJKO0FDM0JFO0VBQ0UsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBRDZCSjtBQzFCRTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBRDRCSjtBQzFCSTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQ0FBQTtFQUNBLG1CQUFBO0FENEJOO0FDekJJO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FEMkJOO0FDekJNO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUQyQlI7QUN6QlE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLCtCQUFBO0VBQ0EsY0FBQTtBRDJCVjtBQ3hCUTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUQwQlY7QUNyQk07RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtDQUFBO0FEdUJSO0FDcEJNO0VBQ0UsbUJBQUE7QURzQlI7QUNsQlU7RUFDRSxjQUFBO0FEb0JaO0FDakJVO0VBQ0UsY0FBQTtBRG1CWjtBQ2ZRO0VBQ0UsY0FBQTtBRGlCVjtBQ1ZFO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FEWUo7QUNUTTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QURXUjtBQ1RRO0VBQ0UsbUJBQUE7RUFDQSxpQ0FBQTtBRFdWO0FDUlE7RUFDRSxrQ0FBQTtBRFVWO0FDTEk7RUFDRSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0FET047QUNKSTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBRUEsY0FBQTtFQUNBLGVBQUE7RUFDQSwrQkFBQTtFQUNBLG1CQUFBO0FES047QUNKTTtFQUNFLGVBQUE7QURNUjtBQ0ZJO0VBQ0UsbUJBQUE7QURJTjtBQ0ZNO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0FESVI7QUNGUTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUNBQUE7QURJVjtBQ0ZVO0VBQ0UsaUJBQUE7QURJWjtBQ0FRO0VBQ0UsY0FBQTtFQUNBLGVBQUE7QURFVjtBQ01FO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FESko7QUNLSTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQ0FBQTtBREhOO0FDS0k7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0NBQUE7RUFDQSxjQUFBO0FESE47QUNNSTtFQUNFLGtCQUFBO0FESk47QUNNTTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBREpSO0FDT007RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxpREFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGtDQUFBO0FETFI7QUNPUTtFQUNFLFlBQUE7QURMVjtBQ0lRO0VBQ0UsWUFBQTtBRExWO0FDSVE7RUFDRSxZQUFBO0FETFY7QUNJUTtFQUNFLFlBQUE7QURMVjtBQ0lRO0VBQ0UsWUFBQTtBRExWO0FDYUU7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7QURYSjtBQ2FJO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QURYTjtBQ2FNO0VBQ0UsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7QURYUjtBQ2FRO0VBQ0UsWUFBQTtBRFhWO0FDWVU7RUFDRSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QURWWjtBQ1lZO0VBQ0UsK0JBQUE7QURWZDtBQ2FZO0VBQ0UsZ0JBQUE7RUFDQSxrQ0FBQTtFQUNBLFlBQUE7QURYZDtBQ2lCTTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtBRGZSO0FDa0JNO0VBQ0UsZUFBQTtBRGhCUiIsImZpbGUiOiJwcm9qZWN0cy93aWRnZXRzL3NyYy9saWIvY29tcG9uZW50cy9kYXNoYm9hcmQtbWFuYWdlbWVudC9kYXNoYm9hcmQtbWFuYWdlbWVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEzNjZweCkge1xyXG4gICAgem9vbTogMC44O1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNDAwcHgpIHtcclxuICAgIHpvb206IDAuODtcclxuICB9XHJcblxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTQ0MHB4KSB7XHJcbiAgICB6b29tOiAwLjg1O1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNjAwcHgpIHtcclxuICAgIHpvb206IDAuOTtcclxuICB9XHJcblxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTY4MHB4KSB7XHJcbiAgICB6b29tOiAwLjk1O1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxOTIwcHgpIHtcclxuICAgIHpvb206IDE7XHJcbiAgfVxyXG59XHJcbiIsIkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTM2NnB4KSB7XG4gIDpob3N0IHtcbiAgICB6b29tOiAwLjg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTQwMHB4KSB7XG4gIDpob3N0IHtcbiAgICB6b29tOiAwLjg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTQ0MHB4KSB7XG4gIDpob3N0IHtcbiAgICB6b29tOiAwLjg1O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE2MDBweCkge1xuICA6aG9zdCB7XG4gICAgem9vbTogMC45O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE2ODBweCkge1xuICA6aG9zdCB7XG4gICAgem9vbTogMC45NTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxOTIwcHgpIHtcbiAgOmhvc3Qge1xuICAgIHpvb206IDE7XG4gIH1cbn1cblxuLmNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDIwcHg7XG59XG4uY29udGFpbmVyID4gaDMge1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LWZhbWlseTogXCJTRiBQcm8gVGV4dC1Cb2xkXCI7XG4gIGhlaWdodDogODBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiAwO1xufVxuLmNvbnRhaW5lciAubGluZV92ZXJ0aWNhbCB7XG4gIG1hcmdpbjogMCAzMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjRTBFMEUwO1xuICBvcGFjaXR5OiAwLjI7XG59XG4uY29udGFpbmVyIC5jb2xfMSB7XG4gIG1heC13aWR0aDogMzAwcHg7XG4gIG1pbi13aWR0aDogMzAwcHg7XG4gIG1pbi1oZWlnaHQ6IDkwdmg7XG59XG4uY29udGFpbmVyIC5jb2xfMSA+IGgzIHtcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC1mYW1pbHk6IFwiU0YgUHJvIFRleHQtTWVkaXVtXCI7XG4gIG1hcmdpbi1ib3R0b206IDMzcHg7XG59XG4uY29udGFpbmVyIC5jb2xfMSAuZGFzaGJvYXJkIHtcbiAgd2lkdGg6IDMwMHB4O1xuICBtaW4taGVpZ2h0OiAxNDBweDtcbiAgYmFja2dyb3VuZDogIzAwMDAwMDtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmNvbnRhaW5lciAuY29sXzEgLmRhc2hib2FyZCAuYm94IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuLmNvbnRhaW5lciAuY29sXzEgLmRhc2hib2FyZCAuYm94IC5uYW1lIHtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgZm9udC1mYW1pbHk6IFwiU0YgUHJvIFRleHQtQm9sZFwiO1xuICBsaW5lLWhlaWdodDogMTtcbn1cbi5jb250YWluZXIgLmNvbF8xIC5kYXNoYm9hcmQgLmJveCBzcGFuIHtcbiAgY29sb3I6ICMyMTIxMjE7XG4gIGZvbnQtc2l6ZTogMzZweDtcbiAgcGFkZGluZy1yaWdodDogNTJweDtcbn1cbi5jb250YWluZXIgLmNvbF8xIC5kYXNoYm9hcmQgLmFtb3VudCB7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtZmFtaWx5OiBcIlNGIFBybyBUZXh0LVJlZ3VsYXJcIjtcbn1cbi5jb250YWluZXIgLmNvbF8xIC5kYXNoYm9hcmQuYWN0aXZlIHtcbiAgYmFja2dyb3VuZDogIzlGRkZCMTtcbn1cbi5jb250YWluZXIgLmNvbF8xIC5kYXNoYm9hcmQuYWN0aXZlIC5ib3ggLm5hbWUge1xuICBjb2xvcjogIzIxMjEyMTtcbn1cbi5jb250YWluZXIgLmNvbF8xIC5kYXNoYm9hcmQuYWN0aXZlIC5ib3ggc3BhbiB7XG4gIGNvbG9yOiAjMjEyMTIxO1xufVxuLmNvbnRhaW5lciAuY29sXzEgLmRhc2hib2FyZC5hY3RpdmUgLmFtb3VudCB7XG4gIGNvbG9yOiAjMjEyMTIxO1xufVxuLmNvbnRhaW5lciAuY29sXzIge1xuICBtYXgtd2lkdGg6IDMwMHB4O1xuICBtaW4td2lkdGg6IDMwMHB4O1xuICBtaW4taGVpZ2h0OiA5MHZoO1xufVxuLmNvbnRhaW5lciAuY29sXzIgLnRpdGxlIGgzIHtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbn1cbi5jb250YWluZXIgLmNvbF8yIC50aXRsZSBoMzpudGgtY2hpbGQoMSkge1xuICBtYXJnaW4tYm90dG9tOiAzM3B4O1xuICBmb250LWZhbWlseTogXCJTRiBQcm8gVGV4dC1NZWRpdW1cIjtcbn1cbi5jb250YWluZXIgLmNvbF8yIC50aXRsZSBoMzpudGgtY2hpbGQoMikge1xuICBmb250LWZhbWlseTogXCJTRiBQcm8gVGV4dC1SZWd1bGFyXCI7XG59XG4uY29udGFpbmVyIC5jb2xfMiBociB7XG4gIG1hcmdpbjogMjBweCAwO1xuICBib3JkZXI6IDFweCBzb2xpZCAjRTBFMEUwO1xuICBvcGFjaXR5OiAwLjI7XG59XG4uY29udGFpbmVyIC5jb2xfMiAuZ290b19kYXNoYm9hcmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiAjOUZGRkIxO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIlNGIFBybyBUZXh0LUJvbGRcIjtcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcbn1cbi5jb250YWluZXIgLmNvbF8yIC5nb3RvX2Rhc2hib2FyZCBpIHtcbiAgZm9udC1zaXplOiAyNHB4O1xufVxuLmNvbnRhaW5lciAuY29sXzIgLmRhc2hib2FyZF9tZW1iZXIge1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuLmNvbnRhaW5lciAuY29sXzIgLmRhc2hib2FyZF9tZW1iZXIgLmFkZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5jb250YWluZXIgLmNvbF8yIC5kYXNoYm9hcmRfbWVtYmVyIC5hZGQgPiBkaXYge1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LWZhbWlseTogXCJTRiBQcm8gVGV4dC1NZWRpdW1cIjtcbn1cbi5jb250YWluZXIgLmNvbF8yIC5kYXNoYm9hcmRfbWVtYmVyIC5hZGQgPiBkaXYgc3BhbiB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuLmNvbnRhaW5lciAuY29sXzIgLmRhc2hib2FyZF9tZW1iZXIgLmFkZCA+IGkge1xuICBjb2xvcjogIzlGRkZCMTtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuLmNvbnRhaW5lciAuY29sXzMge1xuICBtYXgtd2lkdGg6IDMwMHB4O1xuICBtaW4td2lkdGg6IDMwMHB4O1xuICBtYXJnaW4tdG9wOiAxODBweDtcbn1cbi5jb250YWluZXIgLmNvbF8zIGgzIHtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1mYW1pbHk6IFwiU0YgUHJvIFRleHQtTWVkaXVtXCI7XG59XG4uY29udGFpbmVyIC5jb2xfMyBoNSB7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gIGZvbnQtZmFtaWx5OiBcIlNGIFBybyBUZXh0LVJlZ3VsYXJcIjtcbiAgbWFyZ2luOiAyMHB4IDA7XG59XG4uY29udGFpbmVyIC5jb2xfMyAuaW5wdXRfaWNvbl9jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uY29udGFpbmVyIC5jb2xfMyAuaW5wdXRfaWNvbl9jb250YWluZXIgLmZlYXRoZXItc2VhcmNoIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDZweDtcbiAgbGVmdDogMTVweDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBjb2xvcjogI0ZGRkZGRjtcbn1cbi5jb250YWluZXIgLmNvbF8zIC5pbnB1dF9pY29uX2NvbnRhaW5lciBpbnB1dFt0eXBlPXRleHRdIHtcbiAgd2lkdGg6IDMwMHB4O1xuICBoZWlnaHQ6IDM2cHg7XG4gIGJvcmRlcjogdW5zZXQ7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIGJhY2tncm91bmQ6ICNGRkZGRkYxQSAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XG4gIHBhZGRpbmctbGVmdDogNTBweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LWZhbWlseTogXCJTRiBQcm8gVGV4dC1SZWd1bGFyXCI7XG59XG4uY29udGFpbmVyIC5jb2xfMyAuaW5wdXRfaWNvbl9jb250YWluZXIgaW5wdXRbdHlwZT10ZXh0XTo6cGxhY2Vob2xkZXIge1xuICBvcGFjaXR5OiAwLjM7XG59XG4uY29udGFpbmVyIC5saXN0X21lbWJlciwgLmNvbnRhaW5lciAuY29sXzIsIC5jb250YWluZXIgLmNvbF8zIHtcbiAgd2lkdGg6IDMyMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xufVxuLmNvbnRhaW5lciAubGlzdF9tZW1iZXIgLml0ZW0sIC5jb250YWluZXIgLmNvbF8yIC5pdGVtLCAuY29udGFpbmVyIC5jb2xfMyAuaXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgaGVpZ2h0OiA0OHB4O1xufVxuLmNvbnRhaW5lciAubGlzdF9tZW1iZXIgLml0ZW0gLnVzZXIsIC5jb250YWluZXIgLmNvbF8yIC5pdGVtIC51c2VyLCAuY29udGFpbmVyIC5jb2xfMyAuaXRlbSAudXNlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5jb250YWluZXIgLmxpc3RfbWVtYmVyIC5pdGVtIC51c2VyIC5uYW1lLCAuY29udGFpbmVyIC5jb2xfMiAuaXRlbSAudXNlciAubmFtZSwgLmNvbnRhaW5lciAuY29sXzMgLml0ZW0gLnVzZXIgLm5hbWUge1xuICBoZWlnaHQ6IDQ4cHg7XG59XG4uY29udGFpbmVyIC5saXN0X21lbWJlciAuaXRlbSAudXNlciAubmFtZSBwLCAuY29udGFpbmVyIC5jb2xfMiAuaXRlbSAudXNlciAubmFtZSBwLCAuY29udGFpbmVyIC5jb2xfMyAuaXRlbSAudXNlciAubmFtZSBwIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjRkZGRkZGO1xufVxuLmNvbnRhaW5lciAubGlzdF9tZW1iZXIgLml0ZW0gLnVzZXIgLm5hbWUgcDpudGgtY2hpbGQoMSksIC5jb250YWluZXIgLmNvbF8yIC5pdGVtIC51c2VyIC5uYW1lIHA6bnRoLWNoaWxkKDEpLCAuY29udGFpbmVyIC5jb2xfMyAuaXRlbSAudXNlciAubmFtZSBwOm50aC1jaGlsZCgxKSB7XG4gIGZvbnQtZmFtaWx5OiBcIlNGIFBybyBUZXh0LUJvbGRcIjtcbn1cbi5jb250YWluZXIgLmxpc3RfbWVtYmVyIC5pdGVtIC51c2VyIC5uYW1lIHA6bnRoLWNoaWxkKDIpLCAuY29udGFpbmVyIC5jb2xfMiAuaXRlbSAudXNlciAubmFtZSBwOm50aC1jaGlsZCgyKSwgLmNvbnRhaW5lciAuY29sXzMgLml0ZW0gLnVzZXIgLm5hbWUgcDpudGgtY2hpbGQoMikge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBmb250LWZhbWlseTogXCJTRiBQcm8gVGV4dC1SZWd1bGFyXCI7XG4gIG9wYWNpdHk6IDAuNztcbn1cbi5jb250YWluZXIgLmxpc3RfbWVtYmVyIC5pdGVtIGltZywgLmNvbnRhaW5lciAuY29sXzIgLml0ZW0gaW1nLCAuY29udGFpbmVyIC5jb2xfMyAuaXRlbSBpbWcge1xuICB3aWR0aDogNDhweDtcbiAgaGVpZ2h0OiA0OHB4O1xuICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuLmNvbnRhaW5lciAubGlzdF9tZW1iZXIgLml0ZW0gaSwgLmNvbnRhaW5lciAuY29sXzIgLml0ZW0gaSwgLmNvbnRhaW5lciAuY29sXzMgLml0ZW0gaSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn0iLCJAaW1wb3J0ICcuLi8uLi9zaGFyZWQvY29tbW9uL3pvb20nO1xyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDEwMjBweDtcclxuXHJcbiAgJj5oMyB7XHJcbiAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlNGIFBybyBUZXh0LUJvbGRcIjtcclxuICAgIGhlaWdodDogODBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuXHJcbiAgLmxpbmVfdmVydGljYWwge1xyXG4gICAgbWFyZ2luOiAwIDMwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRTBFMEUwO1xyXG4gICAgb3BhY2l0eTogMC4yO1xyXG4gIH1cclxuXHJcbiAgLmNvbF8xIHtcclxuICAgIG1heC13aWR0aDogMzAwcHg7XHJcbiAgICBtaW4td2lkdGg6IDMwMHB4O1xyXG4gICAgbWluLWhlaWdodDogOTB2aDtcclxuXHJcbiAgICAmPmgzIHtcclxuICAgICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgZm9udC1mYW1pbHk6IFwiU0YgUHJvIFRleHQtTWVkaXVtXCI7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDMzcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmRhc2hib2FyZCB7XHJcbiAgICAgIHdpZHRoOiAzMDBweDtcclxuICAgICAgbWluLWhlaWdodDogMTQwcHg7XHJcbiAgICAgIGJhY2tncm91bmQ6ICMwMDAwMDA7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgIC5ib3gge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcblxyXG4gICAgICAgIC5uYW1lIHtcclxuICAgICAgICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6IFwiU0YgUHJvIFRleHQtQm9sZFwiO1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzcGFuIHtcclxuICAgICAgICAgIGNvbG9yOiAjMjEyMTIxO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAzNnB4O1xyXG4gICAgICAgICAgcGFkZGluZy1yaWdodDogNTJweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICB9XHJcblxyXG4gICAgICAuYW1vdW50IHtcclxuICAgICAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiU0YgUHJvIFRleHQtUmVndWxhclwiO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmLmFjdGl2ZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzlGRkZCMTtcclxuXHJcbiAgICAgICAgLmJveCB7XHJcblxyXG4gICAgICAgICAgLm5hbWUge1xyXG4gICAgICAgICAgICBjb2xvcjogIzIxMjEyMTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgY29sb3I6ICMyMTIxMjE7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYW1vdW50IHtcclxuICAgICAgICAgIGNvbG9yOiAjMjEyMTIxO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gIC5jb2xfMiB7XHJcbiAgICBtYXgtd2lkdGg6IDMwMHB4O1xyXG4gICAgbWluLXdpZHRoOiAzMDBweDtcclxuICAgIG1pbi1oZWlnaHQ6IDkwdmg7XHJcblxyXG4gICAgLnRpdGxlIHtcclxuICAgICAgaDMge1xyXG4gICAgICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG5cclxuICAgICAgICAmOm50aC1jaGlsZCgxKSB7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzM3B4O1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6IFwiU0YgUHJvIFRleHQtTWVkaXVtXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmOm50aC1jaGlsZCgyKSB7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogXCJTRiBQcm8gVGV4dC1SZWd1bGFyXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaHIge1xyXG4gICAgICBtYXJnaW46IDIwcHggMDtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgI0UwRTBFMDtcclxuICAgICAgb3BhY2l0eTogMC4yO1xyXG4gICAgfVxyXG5cclxuICAgIC5nb3RvX2Rhc2hib2FyZCB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgIGNvbG9yOiAjOUZGRkIxO1xyXG4gICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBcIlNGIFBybyBUZXh0LUJvbGRcIjtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuICAgICAgaSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmRhc2hib2FyZF9tZW1iZXIge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG5cclxuICAgICAgLmFkZCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblxyXG4gICAgICAgICY+ZGl2IHtcclxuICAgICAgICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6IFwiU0YgUHJvIFRleHQtTWVkaXVtXCI7XHJcblxyXG4gICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJj5pIHtcclxuICAgICAgICAgIGNvbG9yOiAjOUZGRkIxO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIEBleHRlbmQgLmxpc3RfbWVtYmVyXHJcbiAgfVxyXG5cclxuICAuY29sXzMge1xyXG4gICAgbWF4LXdpZHRoOiAzMDBweDtcclxuICAgIG1pbi13aWR0aDogMzAwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxODBweDtcclxuICAgIGgzIHtcclxuICAgICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgZm9udC1mYW1pbHk6IFwiU0YgUHJvIFRleHQtTWVkaXVtXCI7XHJcbiAgICB9XHJcbiAgICBoNSB7XHJcbiAgICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBcIlNGIFBybyBUZXh0LVJlZ3VsYXJcIjtcclxuICAgICAgbWFyZ2luOiAyMHB4IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLmlucHV0X2ljb25fY29udGFpbmVyIHtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgICAgLmZlYXRoZXItc2VhcmNoIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiA2cHg7XHJcbiAgICAgICAgbGVmdDogMTVweDtcclxuICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlucHV0W3R5cGU9XCJ0ZXh0XCJdIHtcclxuICAgICAgICB3aWR0aDogMzAwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAzNnB4O1xyXG4gICAgICAgIGJvcmRlcjogdW5zZXQ7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNGRkZGRkYxQSAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA1MHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBmb250LWZhbWlseTogXCJTRiBQcm8gVGV4dC1SZWd1bGFyXCI7XHJcblxyXG4gICAgICAgICY6OnBsYWNlaG9sZGVyIHtcclxuICAgICAgICAgIG9wYWNpdHk6IDAuMztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBAZXh0ZW5kIC5saXN0X21lbWJlclxyXG4gIH1cclxuXHJcbiAgLmxpc3RfbWVtYmVyIHtcclxuICAgIHdpZHRoOiAzMjBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcblxyXG4gICAgLml0ZW0ge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgIGhlaWdodDogNDhweDtcclxuXHJcbiAgICAgIC51c2VyIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICAubmFtZSB7XHJcbiAgICAgICAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgJjpudGgtY2hpbGQoMSkge1xyXG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIlNGIFBybyBUZXh0LUJvbGRcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgJjpudGgtY2hpbGQoMikge1xyXG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiU0YgUHJvIFRleHQtUmVndWxhclwiO1xyXG4gICAgICAgICAgICAgIG9wYWNpdHk6IDAuNztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgaW1nIHtcclxuICAgICAgICB3aWR0aDogNDhweDtcclxuICAgICAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpIHtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardManagementComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'lib-dashboard-management',
                templateUrl: './dashboard-management.component.html',
                styleUrls: ['./dashboard-management.component.scss']
            }]
    }], function () { return []; }, null); })();
const DashboardManagementWidget = {
    type: 'page',
    component: DashboardManagementComponent,
    defaultconfig: [],
};


/***/ }),

/***/ "../widgets/src/lib/components/gauge1-widget/gauge1-widget.component.ts":
/*!******************************************************************************!*\
  !*** ../widgets/src/lib/components/gauge1-widget/gauge1-widget.component.ts ***!
  \******************************************************************************/
/*! exports provided: Gauge1WidgetComponent, Gauge1Widget */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Gauge1WidgetComponent", function() { return Gauge1WidgetComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Gauge1Widget", function() { return Gauge1Widget; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_common_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/common/util */ "../widgets/src/lib/shared/common/util.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var angular_resize_event__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-resize-event */ "../../node_modules/angular-resize-event/__ivy_ngcc__/fesm2015/angular-resize-event.js");
/* harmony import */ var ngx_gauge__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-gauge */ "../../node_modules/ngx-gauge/__ivy_ngcc__/fesm2015/ngx-gauge.js");






const _c0 = function () { return {}; };
function Gauge1WidgetComponent_ng_template_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ngx-gauge", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cloneConfig_r41 = ctx.cloneConfig;
    const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    var tmp_3_0 = null;
    const currVal_3 = (cloneConfig_r41 == null ? null : cloneConfig_r41.thresholdColor) ? ctx_r40.convertColorOpacity((tmp_3_0 = ctx_r40.getThresholdColorByRange()) == null ? null : tmp_3_0.color) : ctx_r40.convertColorOpacity(ctx_r40.widget.config == null ? null : ctx_r40.widget.config.foregroundColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("gauge_" + (ctx_r40.widget == null ? null : ctx_r40.widget.config == null ? null : ctx_r40.widget.config.type));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("thick", cloneConfig_r41 == null ? null : cloneConfig_r41.thick)("foregroundColor", cloneConfig_r41 == null ? null : cloneConfig_r41.foregroundColor)("backgroundColor", currVal_3)("min", cloneConfig_r41 == null ? null : cloneConfig_r41.gaugeMin)("max", cloneConfig_r41 == null ? null : cloneConfig_r41.gaugeMax)("type", cloneConfig_r41 == null ? null : cloneConfig_r41.type)("value", cloneConfig_r41 == null ? null : cloneConfig_r41.value)("thresholds", (cloneConfig_r41 == null ? null : cloneConfig_r41.thresholdColor) ? cloneConfig_r41.thresholdColor : _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c0))("label", cloneConfig_r41 == null ? null : cloneConfig_r41.bottomVariable)("append", cloneConfig_r41 == null ? null : cloneConfig_r41.centerVariable);
} }
const _c1 = function (a0) { return { cloneConfig: a0 }; };
class Gauge1WidgetComponent {
    constructor(cdr) {
        this.cdr = cdr;
    }
    ngOnInit() {
        if (this.gridInfo.rows === this.gridInfo.cols) {
            this.mode = 1; // Square
        }
        if (this.gridInfo.rows < this.gridInfo.cols) {
            this.mode = 2; // Rectangle
        }
        if (this.gridInfo.rows > this.gridInfo.cols) {
            this.mode = 3; // Vertical
        }
    }
    onResized(event) {
        setTimeout(() => {
            const wh = event.newWidth - event.newHeight;
            if (wh < 70) {
                this.mode = 1; // Square
            }
            if (wh > 70) {
                this.mode = 2; // Rectangle
            }
            if (wh < -50) {
                this.mode = 3; // Vertical
            }
            this.cdr.detectChanges();
        }, 0);
    }
    convertColorOpacity(color) {
        try {
            return _shared_common_util__WEBPACK_IMPORTED_MODULE_1__["Util"].convertColorOpacity(color, 20);
        }
        catch (er) {
            return null;
        }
    }
    // Check hasOwnProperty
    canActivate(filed) {
        return this.widget.config.hasOwnProperty(filed);
    }
    /**
     * ThresholdColor
     */
    getThresholdColorByRange() {
        const base = { color: this.widget.config.foregroundColor };
        if (this.canActivate('thresholdColor')) {
            const value = _shared_common_util__WEBPACK_IMPORTED_MODULE_1__["Util"].clamp(this.widget.config.value, this.widget.config.gaugeMin, this.widget.config.gaugeMax);
            const match = Object.keys(this.widget.config.thresholdColor)
                .filter(function (item) { return _shared_common_util__WEBPACK_IMPORTED_MODULE_1__["Util"].isNumber(item) && Number(item) <= value; })
                .sort((a, b) => Number(a) - Number(b))
                .reverse()[0];
            return match ? this.widget.config.thresholdColor[match] : base;
        }
        else {
            return base;
        }
    }
}
Gauge1WidgetComponent.ɵfac = function Gauge1WidgetComponent_Factory(t) { return new (t || Gauge1WidgetComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
Gauge1WidgetComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Gauge1WidgetComponent, selectors: [["lib-gauge1-widget"]], inputs: { widget: "widget", gridInfo: "gridInfo" }, decls: 26, vars: 47, consts: [[1, "gauge1", "h-100", "w-100", 3, "ngClass", "ngStyle", "hidden", "resized"], [1, "display_center", "d-flex", "justify-content-center", "align-items-center"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "h-100", "w-100", "d-flex", "justify-content-center", "align-items-center"], [1, "col-6", "p-0", "text-center"], [1, "center_variable", "mb-0"], [1, "col-6"], [1, "bottom_variable", "mb-0"], [1, "row", "w-100", "m-0", "h-50", "gauge_container"], [1, "value_container"], [1, "center_variable"], [1, "row", "w-100", "m-0", "h-50", "d-flex", "justify-content-center", "align-items-center"], ["gaugeTemplate", ""], [3, "thick", "foregroundColor", "backgroundColor", "min", "max", "type", "value", "thresholds", "label", "append"]], template: function Gauge1WidgetComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resized", function Gauge1WidgetComponent_Template_div_resized_0_listener($event) { return ctx.onResized($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](5, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resized", function Gauge1WidgetComponent_Template_div_resized_6_listener($event) { return ctx.onResized($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](11, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resized", function Gauge1WidgetComponent_Template_div_resized_15_listener($event) { return ctx.onResized($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](20, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, Gauge1WidgetComponent_ng_template_24_Template, 2, 13, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("mode_square");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.widget.config == null ? null : ctx.widget.config.class)("ngStyle", ctx.widget.config == null ? null : ctx.widget.config.styles)("hidden", !(ctx.mode == 1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx.widget.config == null ? null : ctx.widget.config.colorText);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.widget.config == null ? null : ctx.widget.config.value, "", ctx.widget.config == null ? null : ctx.widget.config.centerVariable, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx.widget.config == null ? null : ctx.widget.config.colorText);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r39)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](41, _c1, ctx.widget.config));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("mode_rectangle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.widget.config == null ? null : ctx.widget.config.class)("ngStyle", ctx.widget.config == null ? null : ctx.widget.config.styles)("hidden", !(ctx.mode == 2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx.widget.config == null ? null : ctx.widget.config.colorText);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.widget.config == null ? null : ctx.widget.config.value, "", ctx.widget.config == null ? null : ctx.widget.config.centerVariable, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r39)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](43, _c1, ctx.widget.config));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx.widget.config == null ? null : ctx.widget.config.colorText);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.widget.config == null ? null : ctx.widget.config.bottomVariable);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("mode_vertical");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.widget.config == null ? null : ctx.widget.config.class)("ngStyle", ctx.widget.config == null ? null : ctx.widget.config.styles)("hidden", !(ctx.mode == 3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx.widget.config == null ? null : ctx.widget.config.colorText);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.widget.config == null ? null : ctx.widget.config.value, "", ctx.widget.config == null ? null : ctx.widget.config.centerVariable, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r39)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](45, _c1, ctx.widget.config));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx.widget.config == null ? null : ctx.widget.config.colorText);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.widget.config == null ? null : ctx.widget.config.bottomVariable);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], angular_resize_event__WEBPACK_IMPORTED_MODULE_3__["ResizedDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"], ngx_gauge__WEBPACK_IMPORTED_MODULE_4__["ɵa"]], styles: ["@media only screen and (min-width: 1366px) {\n  [_nghost-%COMP%] {\n    zoom: 0.8;\n  }\n}\n@media only screen and (min-width: 1400px) {\n  [_nghost-%COMP%] {\n    zoom: 0.8;\n  }\n}\n@media only screen and (min-width: 1440px) {\n  [_nghost-%COMP%] {\n    zoom: 0.85;\n  }\n}\n@media only screen and (min-width: 1600px) {\n  [_nghost-%COMP%] {\n    zoom: 0.9;\n  }\n}\n@media only screen and (min-width: 1680px) {\n  [_nghost-%COMP%] {\n    zoom: 0.95;\n  }\n}\n@media only screen and (min-width: 1920px) {\n  [_nghost-%COMP%] {\n    zoom: 1;\n  }\n}\n[_nghost-%COMP%]     .gauge1 {\n  color: #FFFFFF;\n}\n[_nghost-%COMP%]     .gauge1 ngx-gauge, [_nghost-%COMP%]     .gauge1 .display_center {\n  width: 100% !important;\n  height: 100% !important;\n  position: absolute;\n  display: flex;\n  align-items: center;\n}\n[_nghost-%COMP%]     .mode_square .display_center {\n  top: -8%;\n}\n[_nghost-%COMP%]     .mode_square .display_center span {\n  font-size: 18px;\n  position: absolute;\n  text-align: center;\n  color: #FFFFFF;\n  font-family: \"SF Pro Rounded-Bold\";\n}\n[_nghost-%COMP%]     .mode_square .gauge_arch canvas, [_nghost-%COMP%]     .mode_square .gauge_semi canvas {\n  margin-bottom: 8%;\n}\n[_nghost-%COMP%]     .mode_square ngx-gauge {\n  justify-content: center;\n  top: -8%;\n}\n[_nghost-%COMP%]     .mode_square ngx-gauge canvas {\n  width: 58%;\n}\n[_nghost-%COMP%]     .mode_square ngx-gauge .reading-block {\n  display: none;\n}\n[_nghost-%COMP%]     .mode_square ngx-gauge .reading-label {\n  bottom: 0px;\n  font-size: 16px !important;\n  transform: none !important;\n  font-family: \"SF Pro Text-Regular\";\n}\n[_nghost-%COMP%]     .mode_rectangle .gauge_arch canvas, [_nghost-%COMP%]     .mode_rectangle .gauge_semi canvas {\n  margin-bottom: 8%;\n}\n[_nghost-%COMP%]     .mode_rectangle ngx-gauge {\n  justify-content: center;\n  top: 0;\n}\n[_nghost-%COMP%]     .mode_rectangle ngx-gauge canvas {\n  width: 58%;\n}\n[_nghost-%COMP%]     .mode_rectangle ngx-gauge .reading-block {\n  display: none;\n}\n[_nghost-%COMP%]     .mode_rectangle ngx-gauge .reading-label {\n  display: none;\n}\n[_nghost-%COMP%]     .mode_rectangle .center_variable {\n  font-size: 18px;\n  color: #FFFFFF;\n  font-family: \"SF Pro Rounded-Bold\";\n}\n[_nghost-%COMP%]     .mode_rectangle .bottom_variable {\n  font-size: 18px;\n  text-align: center;\n  color: #959393;\n  font-family: \"SF Pro Text-Regular\";\n}\n[_nghost-%COMP%]     .mode_vertical .gauge_arch canvas, [_nghost-%COMP%]     .mode_vertical .gauge_semi canvas {\n  margin-bottom: 8%;\n}\n[_nghost-%COMP%]     .mode_vertical .gauge_container .value_container {\n  position: absolute;\n  transform: translate(-50%, -50%);\n  top: 25%;\n  left: 50%;\n  text-align: center;\n}\n[_nghost-%COMP%]     .mode_vertical ngx-gauge {\n  justify-content: center;\n  top: 0;\n  height: 50% !important;\n}\n[_nghost-%COMP%]     .mode_vertical ngx-gauge canvas {\n  width: 58%;\n}\n[_nghost-%COMP%]     .mode_vertical ngx-gauge .reading-block {\n  display: none;\n}\n[_nghost-%COMP%]     .mode_vertical ngx-gauge .reading-label {\n  display: none;\n}\n[_nghost-%COMP%]     .mode_vertical .center_variable {\n  font-size: 18px;\n  margin: 15% 0;\n  color: #FFFFFF;\n  font-family: \"SF Pro Rounded-Bold\";\n  line-height: normal;\n}\n[_nghost-%COMP%]     .mode_vertical .bottom_variable {\n  font-size: 16px;\n  text-align: center;\n  color: #959393;\n  font-family: \"SF Pro Text-Regular\";\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3dpZGdldHMvc3JjL2xpYi9jb21wb25lbnRzL2dhdWdlMS13aWRnZXQvRTpcXFByb2plY3RcXGFpcy1wb2MvcHJvamVjdHNcXHdpZGdldHNcXHNyY1xcbGliXFxzaGFyZWRcXGNvbW1vblxcX3pvb20uc2NzcyIsInByb2plY3RzL3dpZGdldHMvc3JjL2xpYi9jb21wb25lbnRzL2dhdWdlMS13aWRnZXQvZ2F1Z2UxLXdpZGdldC5jb21wb25lbnQuc2NzcyIsInByb2plY3RzL3dpZGdldHMvc3JjL2xpYi9jb21wb25lbnRzL2dhdWdlMS13aWRnZXQvRTpcXFByb2plY3RcXGFpcy1wb2MvcHJvamVjdHNcXHdpZGdldHNcXHNyY1xcbGliXFxjb21wb25lbnRzXFxnYXVnZTEtd2lkZ2V0XFxnYXVnZTEtd2lkZ2V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBREY7SUFFSSxTQUFBO0VDQ0Y7QUFDRjtBRENFO0VBTEY7SUFNSSxTQUFBO0VDRUY7QUFDRjtBREFFO0VBVEY7SUFVSSxVQUFBO0VDR0Y7QUFDRjtBRERFO0VBYkY7SUFjSSxTQUFBO0VDSUY7QUFDRjtBREZFO0VBakJGO0lBa0JJLFVBQUE7RUNLRjtBQUNGO0FESEU7RUFyQkY7SUFzQkksT0FBQTtFQ01GO0FBQ0Y7QUMxQkU7RUFDRSxjQUFBO0FENkJKO0FDM0JJOztFQUVFLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBRDZCTjtBQ3ZCSTtFQUNFLFFBQUE7QUR5Qk47QUN2Qk07RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxrQ0FBQTtBRHlCUjtBQ25CUTtFQUNFLGlCQUFBO0FEcUJWO0FDaEJJO0VBQ0UsdUJBQUE7RUFDQSxRQUFBO0FEa0JOO0FDaEJNO0VBQ0UsVUFBQTtBRGtCUjtBQ2ZNO0VBQ0UsYUFBQTtBRGlCUjtBQ2RNO0VBQ0UsV0FBQTtFQUNBLDBCQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQ0FBQTtBRGdCUjtBQ1BRO0VBQ0UsaUJBQUE7QURTVjtBQ0pJO0VBQ0UsdUJBQUE7RUFDQSxNQUFBO0FETU47QUNKTTtFQUNFLFVBQUE7QURNUjtBQ0hNO0VBQ0UsYUFBQTtBREtSO0FDRk07RUFDRSxhQUFBO0FESVI7QUNDSTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0Esa0NBQUE7QURDTjtBQ0VJO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGtDQUFBO0FEQU47QUNRUTtFQUNFLGlCQUFBO0FETlY7QUNZTTtFQUNFLGtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0FEVlI7QUNjSTtFQUNFLHVCQUFBO0VBQ0EsTUFBQTtFQUNBLHNCQUFBO0FEWk47QUNjTTtFQUNFLFVBQUE7QURaUjtBQ2VNO0VBQ0UsYUFBQTtBRGJSO0FDZ0JNO0VBQ0UsYUFBQTtBRGRSO0FDbUJJO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0Esa0NBQUE7RUFDQSxtQkFBQTtBRGpCTjtBQ29CSTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxrQ0FBQTtBRGxCTiIsImZpbGUiOiJwcm9qZWN0cy93aWRnZXRzL3NyYy9saWIvY29tcG9uZW50cy9nYXVnZTEtd2lkZ2V0L2dhdWdlMS13aWRnZXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMzY2cHgpIHtcclxuICAgIHpvb206IDAuODtcclxuICB9XHJcblxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTQwMHB4KSB7XHJcbiAgICB6b29tOiAwLjg7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE0NDBweCkge1xyXG4gICAgem9vbTogMC44NTtcclxuICB9XHJcblxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTYwMHB4KSB7XHJcbiAgICB6b29tOiAwLjk7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE2ODBweCkge1xyXG4gICAgem9vbTogMC45NTtcclxuICB9XHJcblxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTkyMHB4KSB7XHJcbiAgICB6b29tOiAxO1xyXG4gIH1cclxufVxyXG4iLCJAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEzNjZweCkge1xuICA6aG9zdCB7XG4gICAgem9vbTogMC44O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE0MDBweCkge1xuICA6aG9zdCB7XG4gICAgem9vbTogMC44O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE0NDBweCkge1xuICA6aG9zdCB7XG4gICAgem9vbTogMC44NTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNjAwcHgpIHtcbiAgOmhvc3Qge1xuICAgIHpvb206IDAuOTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNjgwcHgpIHtcbiAgOmhvc3Qge1xuICAgIHpvb206IDAuOTU7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTkyMHB4KSB7XG4gIDpob3N0IHtcbiAgICB6b29tOiAxO1xuICB9XG59XG5cbjpob3N0IDo6bmctZGVlcCAuZ2F1Z2UxIHtcbiAgY29sb3I6ICNGRkZGRkY7XG59XG46aG9zdCA6Om5nLWRlZXAgLmdhdWdlMSBuZ3gtZ2F1Z2UsXG46aG9zdCA6Om5nLWRlZXAgLmdhdWdlMSAuZGlzcGxheV9jZW50ZXIge1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5tb2RlX3NxdWFyZSAuZGlzcGxheV9jZW50ZXIge1xuICB0b3A6IC04JTtcbn1cbjpob3N0IDo6bmctZGVlcCAubW9kZV9zcXVhcmUgLmRpc3BsYXlfY2VudGVyIHNwYW4ge1xuICBmb250LXNpemU6IDE4cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgZm9udC1mYW1pbHk6IFwiU0YgUHJvIFJvdW5kZWQtQm9sZFwiO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5tb2RlX3NxdWFyZSAuZ2F1Z2VfYXJjaCBjYW52YXMsIDpob3N0IDo6bmctZGVlcCAubW9kZV9zcXVhcmUgLmdhdWdlX3NlbWkgY2FudmFzIHtcbiAgbWFyZ2luLWJvdHRvbTogOCU7XG59XG46aG9zdCA6Om5nLWRlZXAgLm1vZGVfc3F1YXJlIG5neC1nYXVnZSB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB0b3A6IC04JTtcbn1cbjpob3N0IDo6bmctZGVlcCAubW9kZV9zcXVhcmUgbmd4LWdhdWdlIGNhbnZhcyB7XG4gIHdpZHRoOiA1OCU7XG59XG46aG9zdCA6Om5nLWRlZXAgLm1vZGVfc3F1YXJlIG5neC1nYXVnZSAucmVhZGluZy1ibG9jayB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG46aG9zdCA6Om5nLWRlZXAgLm1vZGVfc3F1YXJlIG5neC1nYXVnZSAucmVhZGluZy1sYWJlbCB7XG4gIGJvdHRvbTogMHB4O1xuICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDtcbiAgdHJhbnNmb3JtOiBub25lICFpbXBvcnRhbnQ7XG4gIGZvbnQtZmFtaWx5OiBcIlNGIFBybyBUZXh0LVJlZ3VsYXJcIjtcbn1cbjpob3N0IDo6bmctZGVlcCAubW9kZV9yZWN0YW5nbGUgLmdhdWdlX2FyY2ggY2FudmFzLCA6aG9zdCA6Om5nLWRlZXAgLm1vZGVfcmVjdGFuZ2xlIC5nYXVnZV9zZW1pIGNhbnZhcyB7XG4gIG1hcmdpbi1ib3R0b206IDglO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5tb2RlX3JlY3RhbmdsZSBuZ3gtZ2F1Z2Uge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgdG9wOiAwO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5tb2RlX3JlY3RhbmdsZSBuZ3gtZ2F1Z2UgY2FudmFzIHtcbiAgd2lkdGg6IDU4JTtcbn1cbjpob3N0IDo6bmctZGVlcCAubW9kZV9yZWN0YW5nbGUgbmd4LWdhdWdlIC5yZWFkaW5nLWJsb2NrIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbjpob3N0IDo6bmctZGVlcCAubW9kZV9yZWN0YW5nbGUgbmd4LWdhdWdlIC5yZWFkaW5nLWxhYmVsIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbjpob3N0IDo6bmctZGVlcCAubW9kZV9yZWN0YW5nbGUgLmNlbnRlcl92YXJpYWJsZSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIGZvbnQtZmFtaWx5OiBcIlNGIFBybyBSb3VuZGVkLUJvbGRcIjtcbn1cbjpob3N0IDo6bmctZGVlcCAubW9kZV9yZWN0YW5nbGUgLmJvdHRvbV92YXJpYWJsZSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzk1OTM5MztcbiAgZm9udC1mYW1pbHk6IFwiU0YgUHJvIFRleHQtUmVndWxhclwiO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5tb2RlX3ZlcnRpY2FsIC5nYXVnZV9hcmNoIGNhbnZhcywgOmhvc3QgOjpuZy1kZWVwIC5tb2RlX3ZlcnRpY2FsIC5nYXVnZV9zZW1pIGNhbnZhcyB7XG4gIG1hcmdpbi1ib3R0b206IDglO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5tb2RlX3ZlcnRpY2FsIC5nYXVnZV9jb250YWluZXIgLnZhbHVlX2NvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHRvcDogMjUlO1xuICBsZWZ0OiA1MCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbjpob3N0IDo6bmctZGVlcCAubW9kZV92ZXJ0aWNhbCBuZ3gtZ2F1Z2Uge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgdG9wOiAwO1xuICBoZWlnaHQ6IDUwJSAhaW1wb3J0YW50O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5tb2RlX3ZlcnRpY2FsIG5neC1nYXVnZSBjYW52YXMge1xuICB3aWR0aDogNTglO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5tb2RlX3ZlcnRpY2FsIG5neC1nYXVnZSAucmVhZGluZy1ibG9jayB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG46aG9zdCA6Om5nLWRlZXAgLm1vZGVfdmVydGljYWwgbmd4LWdhdWdlIC5yZWFkaW5nLWxhYmVsIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbjpob3N0IDo6bmctZGVlcCAubW9kZV92ZXJ0aWNhbCAuY2VudGVyX3ZhcmlhYmxlIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBtYXJnaW46IDE1JSAwO1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgZm9udC1mYW1pbHk6IFwiU0YgUHJvIFJvdW5kZWQtQm9sZFwiO1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5tb2RlX3ZlcnRpY2FsIC5ib3R0b21fdmFyaWFibGUge1xuICBmb250LXNpemU6IDE2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICM5NTkzOTM7XG4gIGZvbnQtZmFtaWx5OiBcIlNGIFBybyBUZXh0LVJlZ3VsYXJcIjtcbn0iLCJAaW1wb3J0ICcuLi8uLi9zaGFyZWQvY29tbW9uL3pvb20nO1xyXG5cclxuOmhvc3QgOjpuZy1kZWVwIHtcclxuICAuZ2F1Z2UxIHtcclxuICAgIGNvbG9yOiAjRkZGRkZGO1xyXG5cclxuICAgIG5neC1nYXVnZSxcclxuICAgIC5kaXNwbGF5X2NlbnRlciB7XHJcbiAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICAgIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAubW9kZV9zcXVhcmUge1xyXG5cclxuICAgIC5kaXNwbGF5X2NlbnRlciB7XHJcbiAgICAgIHRvcDogLTglO1xyXG5cclxuICAgICAgc3BhbiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiU0YgUHJvIFJvdW5kZWQtQm9sZFwiO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmdhdWdlXyB7XHJcbiAgICAgICZhcmNoLCAmc2VtaSB7XHJcbiAgICAgICAgY2FudmFzIHtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDglO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG5neC1nYXVnZSB7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICB0b3A6IC04JTtcclxuXHJcbiAgICAgIGNhbnZhcyB7XHJcbiAgICAgICAgd2lkdGg6IDU4JTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnJlYWRpbmctYmxvY2sge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5yZWFkaW5nLWxhYmVsIHtcclxuICAgICAgICBib3R0b206IDBweDtcclxuICAgICAgICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDtcclxuICAgICAgICB0cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICBmb250LWZhbWlseTogXCJTRiBQcm8gVGV4dC1SZWd1bGFyXCI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5tb2RlX3JlY3RhbmdsZSB7XHJcblxyXG4gICAgLmdhdWdlXyB7XHJcbiAgICAgICZhcmNoLCAmc2VtaSB7XHJcbiAgICAgICAgY2FudmFzIHtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDglO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG5neC1nYXVnZSB7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICB0b3A6IDA7XHJcblxyXG4gICAgICBjYW52YXMge1xyXG4gICAgICAgIHdpZHRoOiA1OCU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5yZWFkaW5nLWJsb2NrIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAucmVhZGluZy1sYWJlbCB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICAuY2VudGVyX3ZhcmlhYmxlIHtcclxuICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgICAgZm9udC1mYW1pbHk6IFwiU0YgUHJvIFJvdW5kZWQtQm9sZFwiO1xyXG4gICAgfVxyXG5cclxuICAgIC5ib3R0b21fdmFyaWFibGUge1xyXG4gICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgY29sb3I6ICM5NTkzOTM7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBcIlNGIFBybyBUZXh0LVJlZ3VsYXJcIjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5tb2RlX3ZlcnRpY2FsIHtcclxuXHJcbiAgICAuZ2F1Z2VfIHtcclxuICAgICAgJmFyY2gsICZzZW1pIHtcclxuICAgICAgICBjYW52YXMge1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogOCU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmdhdWdlX2NvbnRhaW5lciB7XHJcbiAgICAgIC52YWx1ZV9jb250YWluZXIge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgICAgICB0b3A6IDI1JTtcclxuICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbmd4LWdhdWdlIHtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIHRvcDogMDtcclxuICAgICAgaGVpZ2h0OiA1MCUgIWltcG9ydGFudDtcclxuXHJcbiAgICAgIGNhbnZhcyB7XHJcbiAgICAgICAgd2lkdGg6IDU4JTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnJlYWRpbmctYmxvY2sge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5yZWFkaW5nLWxhYmVsIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC5jZW50ZXJfdmFyaWFibGUge1xyXG4gICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgIG1hcmdpbjogMTUlIDA7XHJcbiAgICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgICBmb250LWZhbWlseTogXCJTRiBQcm8gUm91bmRlZC1Cb2xkXCI7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgICB9XHJcblxyXG4gICAgLmJvdHRvbV92YXJpYWJsZSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBjb2xvcjogIzk1OTM5MztcclxuICAgICAgZm9udC1mYW1pbHk6IFwiU0YgUHJvIFRleHQtUmVndWxhclwiO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Gauge1WidgetComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'lib-gauge1-widget',
                templateUrl: './gauge1-widget.component.html',
                styleUrls: ['./gauge1-widget.component.scss']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, { widget: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], gridInfo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
const Gauge1Widget = {
    name: 'Gauge 1',
    type: 'component',
    component: Gauge1WidgetComponent,
    defaultConfig: [
        { type: 'full', value: 75, centerVariable: '%', bottomVariable: 'Humidity', thick: 15, foregroundColor: '#919DEB', gaugeMin: 0, gaugeMax: 100 },
        { type: 'arch', value: 25, centerVariable: '℃', bottomVariable: 'Temperature', thick: 15, foregroundColor: '#96C8DD', gaugeMin: 0, gaugeMax: 40 },
        { type: 'semi', value: '6.00', centerVariable: '', bottomVariable: 'pH', thick: 15, foregroundColor: '#EA857A', gaugeMin: 0, gaugeMax: 8 }
    ]
};


/***/ }),

/***/ "../widgets/src/lib/components/gauge2-widget/gauge2-widget.component.ts":
/*!******************************************************************************!*\
  !*** ../widgets/src/lib/components/gauge2-widget/gauge2-widget.component.ts ***!
  \******************************************************************************/
/*! exports provided: Gauge2WidgetComponent, Gauge2Widget */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Gauge2WidgetComponent", function() { return Gauge2WidgetComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Gauge2Widget", function() { return Gauge2Widget; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_common_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/common/util */ "../widgets/src/lib/shared/common/util.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var angular_resize_event__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-resize-event */ "../../node_modules/angular-resize-event/__ivy_ngcc__/fesm2015/angular-resize-event.js");
/* harmony import */ var ngx_gauge__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-gauge */ "../../node_modules/ngx-gauge/__ivy_ngcc__/fesm2015/ngx-gauge.js");






const _c0 = function (a0) { return { "color": a0 }; };
function Gauge2WidgetComponent_i_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i");
} if (rf & 2) {
    const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    var tmp_0_0 = null;
    const currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, (tmp_0_0 = ctx_r42.getThresholdIconByRange()) == null ? null : tmp_0_0.color);
    var tmp_1_0 = null;
    const currVal_1 = (tmp_1_0 = ctx_r42.getThresholdIconByRange()) == null ? null : tmp_1_0.icon;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](currVal_0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](currVal_1);
} }
function Gauge2WidgetComponent_i_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i");
} if (rf & 2) {
    const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    var tmp_0_0 = null;
    const currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, (tmp_0_0 = ctx_r43.getThresholdIconByRange()) == null ? null : tmp_0_0.color);
    var tmp_1_0 = null;
    const currVal_1 = (tmp_1_0 = ctx_r43.getThresholdIconByRange()) == null ? null : tmp_1_0.icon;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](currVal_0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](currVal_1);
} }
function Gauge2WidgetComponent_i_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i");
} if (rf & 2) {
    const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    var tmp_0_0 = null;
    const currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, (tmp_0_0 = ctx_r44.getThresholdIconByRange()) == null ? null : tmp_0_0.color);
    var tmp_1_0 = null;
    const currVal_1 = (tmp_1_0 = ctx_r44.getThresholdIconByRange()) == null ? null : tmp_1_0.icon;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](currVal_0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](currVal_1);
} }
const _c1 = function () { return {}; };
function Gauge2WidgetComponent_ng_template_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ngx-gauge", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cloneConfig_r47 = ctx.cloneConfig;
    const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    var tmp_3_0 = null;
    const currVal_3 = (cloneConfig_r47 == null ? null : cloneConfig_r47.thresholdColor) ? ctx_r46.convertColorOpacity((tmp_3_0 = ctx_r46.getThresholdColorByRange()) == null ? null : tmp_3_0.color) : ctx_r46.convertColorOpacity(ctx_r46.widget.config == null ? null : ctx_r46.widget.config.foregroundColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("gauge_" + (ctx_r46.widget == null ? null : ctx_r46.widget.config == null ? null : ctx_r46.widget.config.type));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("thick", cloneConfig_r47 == null ? null : cloneConfig_r47.thick)("foregroundColor", cloneConfig_r47 == null ? null : cloneConfig_r47.foregroundColor)("backgroundColor", currVal_3)("min", cloneConfig_r47 == null ? null : cloneConfig_r47.gaugeMin)("max", cloneConfig_r47 == null ? null : cloneConfig_r47.gaugeMax)("type", cloneConfig_r47 == null ? null : cloneConfig_r47.type)("value", cloneConfig_r47 == null ? null : cloneConfig_r47.value)("thresholds", (cloneConfig_r47 == null ? null : cloneConfig_r47.thresholdColor) ? cloneConfig_r47.thresholdColor : _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c1))("label", cloneConfig_r47 == null ? null : cloneConfig_r47.bottomVariable)("append", cloneConfig_r47 == null ? null : cloneConfig_r47.centerVariable);
} }
const _c2 = function (a0) { return { cloneConfig: a0 }; };
class Gauge2WidgetComponent {
    constructor(cdr) {
        this.cdr = cdr;
    }
    ngOnInit() {
        if (this.gridInfo.rows === this.gridInfo.cols) {
            this.mode = 1; // Square
        }
        if (this.gridInfo.rows < this.gridInfo.cols) {
            this.mode = 2; // Rectangle
        }
        if (this.gridInfo.rows > this.gridInfo.cols) {
            this.mode = 3; // Vertical
        }
    }
    onResized(event) {
        setTimeout(() => {
            const wh = event.newWidth - event.newHeight;
            if (wh < 70) {
                this.mode = 1; // Square
            }
            if (wh > 70) {
                this.mode = 2; // Rectangle
            }
            if (wh < -50) {
                this.mode = 3; // Vertical
            }
            this.cdr.detectChanges();
        }, 0);
    }
    convertColorOpacity(color) {
        try {
            return _shared_common_util__WEBPACK_IMPORTED_MODULE_1__["Util"].convertColorOpacity(color, 20);
        }
        catch (er) {
            return null;
        }
    }
    // Check hasOwnProperty
    canActivate(filed) {
        return this.widget.config.hasOwnProperty(filed);
    }
    /**
     * ThresholdIcon
     */
    getThresholdIconByRange() {
        const base = { color: this.widget.config.colorIcon, icon: this.widget.config.faCenter };
        if (this.canActivate('thresholdIcon')) {
            const value = _shared_common_util__WEBPACK_IMPORTED_MODULE_1__["Util"].clamp(this.widget.config.value, this.widget.config.iconMin, this.widget.config.iconMax);
            const match = Object.keys(this.widget.config.thresholdIcon)
                .filter(function (item) { return _shared_common_util__WEBPACK_IMPORTED_MODULE_1__["Util"].isNumber(item) && Number(item) <= value; })
                .sort((a, b) => Number(a) - Number(b))
                .reverse()[0];
            return match ? this.widget.config.thresholdIcon[match] : base;
        }
        else {
            return base;
        }
    }
    /**
     * ThresholdColor
     */
    getThresholdColorByRange() {
        const base = { color: this.widget.config.foregroundColor };
        if (this.canActivate('thresholdColor')) {
            const value = _shared_common_util__WEBPACK_IMPORTED_MODULE_1__["Util"].clamp(this.widget.config.value, this.widget.config.gaugeMin, this.widget.config.gaugeMax);
            const match = Object.keys(this.widget.config.thresholdColor)
                .filter(function (item) { return _shared_common_util__WEBPACK_IMPORTED_MODULE_1__["Util"].isNumber(item) && Number(item) <= value; })
                .sort((a, b) => Number(a) - Number(b))
                .reverse()[0];
            return match ? this.widget.config.thresholdColor[match] : base;
        }
        else {
            return base;
        }
    }
}
Gauge2WidgetComponent.ɵfac = function Gauge2WidgetComponent_Factory(t) { return new (t || Gauge2WidgetComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
Gauge2WidgetComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Gauge2WidgetComponent, selectors: [["lib-gauge2-widget"]], inputs: { widget: "widget", gridInfo: "gridInfo" }, decls: 30, vars: 50, consts: [[1, "gauge2", "h-100", "w-100", 3, "ngClass", "ngStyle", "hidden", "resized"], [1, "display_center", "d-flex", "justify-content-center", "align-items-center"], [3, "class", "style", 4, "ngIf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "h-100", "w-100", "d-flex", "justify-content-center", "align-items-center"], [1, "col-6", "p-0", "text-center"], [1, "center_variable"], [1, "col-6"], [1, "bottom_variable", "mb-0"], [1, "row", "w-100", "m-0", "h-50", "gauge_container"], [1, "value_container"], [1, "row", "w-100", "m-0", "h-50", "d-flex", "justify-content-center", "align-items-center"], ["gaugeTemplate", ""], ["getThresholdColorByRange", "", 3, "thick", "foregroundColor", "backgroundColor", "min", "max", "type", "value", "thresholds", "label", "append"]], template: function Gauge2WidgetComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resized", function Gauge2WidgetComponent_Template_div_resized_0_listener($event) { return ctx.onResized($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, Gauge2WidgetComponent_i_4_Template, 1, 6, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](6, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resized", function Gauge2WidgetComponent_Template_div_resized_7_listener($event) { return ctx.onResized($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, Gauge2WidgetComponent_i_13_Template, 1, 6, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](14, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resized", function Gauge2WidgetComponent_Template_div_resized_18_listener($event) { return ctx.onResized($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, Gauge2WidgetComponent_i_23_Template, 1, 6, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](24, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, Gauge2WidgetComponent_ng_template_28_Template, 2, 13, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("mode_square");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.widget.config == null ? null : ctx.widget.config.class)("ngStyle", ctx.widget.config == null ? null : ctx.widget.config.styles)("hidden", !(ctx.mode == 1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx.widget.config == null ? null : ctx.widget.config.colorText);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.widget.config == null ? null : ctx.widget.config.value, "", ctx.widget.config == null ? null : ctx.widget.config.centerVariable, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.canActivate("faCenter"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx.widget.config == null ? null : ctx.widget.config.colorText);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r45)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](44, _c2, ctx.widget.config));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("mode_rectangle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.widget.config == null ? null : ctx.widget.config.class)("ngStyle", ctx.widget.config == null ? null : ctx.widget.config.styles)("hidden", !(ctx.mode == 2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx.widget.config == null ? null : ctx.widget.config.colorText);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.widget.config == null ? null : ctx.widget.config.value, "", ctx.widget.config == null ? null : ctx.widget.config.centerVariable, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.canActivate("faCenter"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r45)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](46, _c2, ctx.widget.config));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx.widget.config == null ? null : ctx.widget.config.colorText);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.widget.config == null ? null : ctx.widget.config.bottomVariable);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("mode_vertical");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.widget.config == null ? null : ctx.widget.config.class)("ngStyle", ctx.widget.config == null ? null : ctx.widget.config.styles)("hidden", !(ctx.mode == 3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx.widget.config == null ? null : ctx.widget.config.colorText);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.widget.config == null ? null : ctx.widget.config.value, "", ctx.widget.config == null ? null : ctx.widget.config.centerVariable, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.canActivate("faCenter"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r45)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](48, _c2, ctx.widget.config));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx.widget.config == null ? null : ctx.widget.config.colorText);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.widget.config == null ? null : ctx.widget.config.bottomVariable);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], angular_resize_event__WEBPACK_IMPORTED_MODULE_3__["ResizedDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"], ngx_gauge__WEBPACK_IMPORTED_MODULE_4__["ɵa"]], styles: ["@media only screen and (min-width: 1366px) {\n  [_nghost-%COMP%] {\n    zoom: 0.8;\n  }\n}\n@media only screen and (min-width: 1400px) {\n  [_nghost-%COMP%] {\n    zoom: 0.8;\n  }\n}\n@media only screen and (min-width: 1440px) {\n  [_nghost-%COMP%] {\n    zoom: 0.85;\n  }\n}\n@media only screen and (min-width: 1600px) {\n  [_nghost-%COMP%] {\n    zoom: 0.9;\n  }\n}\n@media only screen and (min-width: 1680px) {\n  [_nghost-%COMP%] {\n    zoom: 0.95;\n  }\n}\n@media only screen and (min-width: 1920px) {\n  [_nghost-%COMP%] {\n    zoom: 1;\n  }\n}\n[_nghost-%COMP%]     .gauge2 {\n  color: #FFFFFF;\n}\n[_nghost-%COMP%]     .gauge2 ngx-gauge, [_nghost-%COMP%]     .gauge2 .display_center {\n  width: 100% !important;\n  height: 100% !important;\n  position: absolute;\n  display: flex;\n  align-items: center;\n}\n[_nghost-%COMP%]     .mode_square .display_center {\n  padding-bottom: 30%;\n}\n[_nghost-%COMP%]     .mode_square .display_center span {\n  font-size: 18px;\n  position: absolute;\n  text-align: center;\n  color: #FFFFFF;\n  font-family: \"SF Pro Rounded-Bold\";\n}\n[_nghost-%COMP%]     .mode_square .display_center i {\n  font-size: 20px;\n  margin-top: 33%;\n}\n[_nghost-%COMP%]     .mode_square .gauge_arch canvas, [_nghost-%COMP%]     .mode_square .gauge_semi canvas {\n  margin-bottom: 8%;\n}\n[_nghost-%COMP%]     .mode_square ngx-gauge {\n  justify-content: center;\n  top: -8%;\n}\n[_nghost-%COMP%]     .mode_square ngx-gauge canvas {\n  width: 58%;\n}\n[_nghost-%COMP%]     .mode_square ngx-gauge .reading-block {\n  display: none;\n}\n[_nghost-%COMP%]     .mode_square ngx-gauge .reading-label {\n  bottom: 0px;\n  font-size: 16px !important;\n  transform: none !important;\n  font-family: \"SF Pro Text-Regular\";\n}\n[_nghost-%COMP%]     .mode_rectangle i {\n  font-size: 20px;\n}\n[_nghost-%COMP%]     .mode_rectangle .gauge_arch canvas, [_nghost-%COMP%]     .mode_rectangle .gauge_semi canvas {\n  margin-bottom: 8%;\n}\n[_nghost-%COMP%]     .mode_rectangle ngx-gauge {\n  justify-content: center;\n  top: 0;\n}\n[_nghost-%COMP%]     .mode_rectangle ngx-gauge canvas {\n  width: 58%;\n}\n[_nghost-%COMP%]     .mode_rectangle ngx-gauge .reading-block {\n  display: none;\n}\n[_nghost-%COMP%]     .mode_rectangle ngx-gauge .reading-label {\n  display: none;\n}\n[_nghost-%COMP%]     .mode_rectangle .center_variable {\n  font-size: 18px;\n  margin: 4% 0;\n  color: #FFFFFF;\n  font-family: \"SF Pro Rounded-Bold\";\n  line-height: normal;\n}\n[_nghost-%COMP%]     .mode_rectangle .bottom_variable {\n  font-size: 18px;\n  text-align: center;\n  color: #959393;\n  font-family: \"SF Pro Text-Regular\";\n}\n[_nghost-%COMP%]     .mode_vertical i {\n  font-size: 20px;\n}\n[_nghost-%COMP%]     .mode_vertical .gauge_arch canvas, [_nghost-%COMP%]     .mode_vertical .gauge_semi canvas {\n  margin-bottom: 8%;\n}\n[_nghost-%COMP%]     .mode_vertical .gauge_container .value_container {\n  position: absolute;\n  transform: translate(-50%, -50%);\n  top: 26%;\n  left: 50%;\n  text-align: center;\n}\n[_nghost-%COMP%]     .mode_vertical ngx-gauge {\n  justify-content: center;\n  top: 0;\n  height: 50% !important;\n}\n[_nghost-%COMP%]     .mode_vertical ngx-gauge canvas {\n  width: 58%;\n}\n[_nghost-%COMP%]     .mode_vertical ngx-gauge .reading-block {\n  display: none;\n}\n[_nghost-%COMP%]     .mode_vertical ngx-gauge .reading-label {\n  display: none;\n}\n[_nghost-%COMP%]     .mode_vertical .center_variable {\n  font-size: 18px;\n  margin: 15% 0;\n  color: #FFFFFF;\n  font-family: \"SF Pro Rounded-Bold\";\n  line-height: normal;\n}\n[_nghost-%COMP%]     .mode_vertical .bottom_variable {\n  font-size: 16px;\n  text-align: center;\n  color: #959393;\n  font-family: \"SF Pro Text-Regular\";\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3dpZGdldHMvc3JjL2xpYi9jb21wb25lbnRzL2dhdWdlMi13aWRnZXQvRTpcXFByb2plY3RcXGFpcy1wb2MvcHJvamVjdHNcXHdpZGdldHNcXHNyY1xcbGliXFxzaGFyZWRcXGNvbW1vblxcX3pvb20uc2NzcyIsInByb2plY3RzL3dpZGdldHMvc3JjL2xpYi9jb21wb25lbnRzL2dhdWdlMi13aWRnZXQvZ2F1Z2UyLXdpZGdldC5jb21wb25lbnQuc2NzcyIsInByb2plY3RzL3dpZGdldHMvc3JjL2xpYi9jb21wb25lbnRzL2dhdWdlMi13aWRnZXQvRTpcXFByb2plY3RcXGFpcy1wb2MvcHJvamVjdHNcXHdpZGdldHNcXHNyY1xcbGliXFxjb21wb25lbnRzXFxnYXVnZTItd2lkZ2V0XFxnYXVnZTItd2lkZ2V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBREY7SUFFSSxTQUFBO0VDQ0Y7QUFDRjtBRENFO0VBTEY7SUFNSSxTQUFBO0VDRUY7QUFDRjtBREFFO0VBVEY7SUFVSSxVQUFBO0VDR0Y7QUFDRjtBRERFO0VBYkY7SUFjSSxTQUFBO0VDSUY7QUFDRjtBREZFO0VBakJGO0lBa0JJLFVBQUE7RUNLRjtBQUNGO0FESEU7RUFyQkY7SUFzQkksT0FBQTtFQ01GO0FBQ0Y7QUMxQkU7RUFDRSxjQUFBO0FENkJKO0FDM0JJOztFQUVFLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBRDZCTjtBQ3ZCSTtFQUNFLG1CQUFBO0FEeUJOO0FDdkJNO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0NBQUE7QUR5QlI7QUN0Qk07RUFDRSxlQUFBO0VBQ0EsZUFBQTtBRHdCUjtBQ2xCUTtFQUNFLGlCQUFBO0FEb0JWO0FDZkk7RUFDRSx1QkFBQTtFQUNBLFFBQUE7QURpQk47QUNmTTtFQUNFLFVBQUE7QURpQlI7QUNkTTtFQUNFLGFBQUE7QURnQlI7QUNiTTtFQUNFLFdBQUE7RUFDQSwwQkFBQTtFQUNBLDBCQUFBO0VBQ0Esa0NBQUE7QURlUjtBQ1RJO0VBQ0UsZUFBQTtBRFdOO0FDTlE7RUFDRSxpQkFBQTtBRFFWO0FDSEk7RUFDRSx1QkFBQTtFQUNBLE1BQUE7QURLTjtBQ0hNO0VBQ0UsVUFBQTtBREtSO0FDRk07RUFDRSxhQUFBO0FESVI7QUNETTtFQUNFLGFBQUE7QURHUjtBQ0VJO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0Esa0NBQUE7RUFDQSxtQkFBQTtBREFOO0FDR0k7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0NBQUE7QURETjtBQ01JO0VBQ0UsZUFBQTtBREpOO0FDU1E7RUFDRSxpQkFBQTtBRFBWO0FDYU07RUFDRSxrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtBRFhSO0FDZUk7RUFDRSx1QkFBQTtFQUNBLE1BQUE7RUFDQSxzQkFBQTtBRGJOO0FDZU07RUFDRSxVQUFBO0FEYlI7QUNnQk07RUFDRSxhQUFBO0FEZFI7QUNpQk07RUFDRSxhQUFBO0FEZlI7QUNvQkk7RUFDRSxlQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxrQ0FBQTtFQUNBLG1CQUFBO0FEbEJOO0FDcUJJO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGtDQUFBO0FEbkJOIiwiZmlsZSI6InByb2plY3RzL3dpZGdldHMvc3JjL2xpYi9jb21wb25lbnRzL2dhdWdlMi13aWRnZXQvZ2F1Z2UyLXdpZGdldC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEzNjZweCkge1xyXG4gICAgem9vbTogMC44O1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNDAwcHgpIHtcclxuICAgIHpvb206IDAuODtcclxuICB9XHJcblxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTQ0MHB4KSB7XHJcbiAgICB6b29tOiAwLjg1O1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNjAwcHgpIHtcclxuICAgIHpvb206IDAuOTtcclxuICB9XHJcblxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTY4MHB4KSB7XHJcbiAgICB6b29tOiAwLjk1O1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxOTIwcHgpIHtcclxuICAgIHpvb206IDE7XHJcbiAgfVxyXG59XHJcbiIsIkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTM2NnB4KSB7XG4gIDpob3N0IHtcbiAgICB6b29tOiAwLjg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTQwMHB4KSB7XG4gIDpob3N0IHtcbiAgICB6b29tOiAwLjg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTQ0MHB4KSB7XG4gIDpob3N0IHtcbiAgICB6b29tOiAwLjg1O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE2MDBweCkge1xuICA6aG9zdCB7XG4gICAgem9vbTogMC45O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE2ODBweCkge1xuICA6aG9zdCB7XG4gICAgem9vbTogMC45NTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxOTIwcHgpIHtcbiAgOmhvc3Qge1xuICAgIHpvb206IDE7XG4gIH1cbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5nYXVnZTIge1xuICBjb2xvcjogI0ZGRkZGRjtcbn1cbjpob3N0IDo6bmctZGVlcCAuZ2F1Z2UyIG5neC1nYXVnZSxcbjpob3N0IDo6bmctZGVlcCAuZ2F1Z2UyIC5kaXNwbGF5X2NlbnRlciB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG46aG9zdCA6Om5nLWRlZXAgLm1vZGVfc3F1YXJlIC5kaXNwbGF5X2NlbnRlciB7XG4gIHBhZGRpbmctYm90dG9tOiAzMCU7XG59XG46aG9zdCA6Om5nLWRlZXAgLm1vZGVfc3F1YXJlIC5kaXNwbGF5X2NlbnRlciBzcGFuIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIGZvbnQtZmFtaWx5OiBcIlNGIFBybyBSb3VuZGVkLUJvbGRcIjtcbn1cbjpob3N0IDo6bmctZGVlcCAubW9kZV9zcXVhcmUgLmRpc3BsYXlfY2VudGVyIGkge1xuICBmb250LXNpemU6IDIwcHg7XG4gIG1hcmdpbi10b3A6IDMzJTtcbn1cbjpob3N0IDo6bmctZGVlcCAubW9kZV9zcXVhcmUgLmdhdWdlX2FyY2ggY2FudmFzLCA6aG9zdCA6Om5nLWRlZXAgLm1vZGVfc3F1YXJlIC5nYXVnZV9zZW1pIGNhbnZhcyB7XG4gIG1hcmdpbi1ib3R0b206IDglO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5tb2RlX3NxdWFyZSBuZ3gtZ2F1Z2Uge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgdG9wOiAtOCU7XG59XG46aG9zdCA6Om5nLWRlZXAgLm1vZGVfc3F1YXJlIG5neC1nYXVnZSBjYW52YXMge1xuICB3aWR0aDogNTglO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5tb2RlX3NxdWFyZSBuZ3gtZ2F1Z2UgLnJlYWRpbmctYmxvY2sge1xuICBkaXNwbGF5OiBub25lO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5tb2RlX3NxdWFyZSBuZ3gtZ2F1Z2UgLnJlYWRpbmctbGFiZWwge1xuICBib3R0b206IDBweDtcbiAgZm9udC1zaXplOiAxNnB4ICFpbXBvcnRhbnQ7XG4gIHRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xuICBmb250LWZhbWlseTogXCJTRiBQcm8gVGV4dC1SZWd1bGFyXCI7XG59XG46aG9zdCA6Om5nLWRlZXAgLm1vZGVfcmVjdGFuZ2xlIGkge1xuICBmb250LXNpemU6IDIwcHg7XG59XG46aG9zdCA6Om5nLWRlZXAgLm1vZGVfcmVjdGFuZ2xlIC5nYXVnZV9hcmNoIGNhbnZhcywgOmhvc3QgOjpuZy1kZWVwIC5tb2RlX3JlY3RhbmdsZSAuZ2F1Z2Vfc2VtaSBjYW52YXMge1xuICBtYXJnaW4tYm90dG9tOiA4JTtcbn1cbjpob3N0IDo6bmctZGVlcCAubW9kZV9yZWN0YW5nbGUgbmd4LWdhdWdlIHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHRvcDogMDtcbn1cbjpob3N0IDo6bmctZGVlcCAubW9kZV9yZWN0YW5nbGUgbmd4LWdhdWdlIGNhbnZhcyB7XG4gIHdpZHRoOiA1OCU7XG59XG46aG9zdCA6Om5nLWRlZXAgLm1vZGVfcmVjdGFuZ2xlIG5neC1nYXVnZSAucmVhZGluZy1ibG9jayB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG46aG9zdCA6Om5nLWRlZXAgLm1vZGVfcmVjdGFuZ2xlIG5neC1nYXVnZSAucmVhZGluZy1sYWJlbCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG46aG9zdCA6Om5nLWRlZXAgLm1vZGVfcmVjdGFuZ2xlIC5jZW50ZXJfdmFyaWFibGUge1xuICBmb250LXNpemU6IDE4cHg7XG4gIG1hcmdpbjogNCUgMDtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIGZvbnQtZmFtaWx5OiBcIlNGIFBybyBSb3VuZGVkLUJvbGRcIjtcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbn1cbjpob3N0IDo6bmctZGVlcCAubW9kZV9yZWN0YW5nbGUgLmJvdHRvbV92YXJpYWJsZSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzk1OTM5MztcbiAgZm9udC1mYW1pbHk6IFwiU0YgUHJvIFRleHQtUmVndWxhclwiO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5tb2RlX3ZlcnRpY2FsIGkge1xuICBmb250LXNpemU6IDIwcHg7XG59XG46aG9zdCA6Om5nLWRlZXAgLm1vZGVfdmVydGljYWwgLmdhdWdlX2FyY2ggY2FudmFzLCA6aG9zdCA6Om5nLWRlZXAgLm1vZGVfdmVydGljYWwgLmdhdWdlX3NlbWkgY2FudmFzIHtcbiAgbWFyZ2luLWJvdHRvbTogOCU7XG59XG46aG9zdCA6Om5nLWRlZXAgLm1vZGVfdmVydGljYWwgLmdhdWdlX2NvbnRhaW5lciAudmFsdWVfY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgdG9wOiAyNiU7XG4gIGxlZnQ6IDUwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5tb2RlX3ZlcnRpY2FsIG5neC1nYXVnZSB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB0b3A6IDA7XG4gIGhlaWdodDogNTAlICFpbXBvcnRhbnQ7XG59XG46aG9zdCA6Om5nLWRlZXAgLm1vZGVfdmVydGljYWwgbmd4LWdhdWdlIGNhbnZhcyB7XG4gIHdpZHRoOiA1OCU7XG59XG46aG9zdCA6Om5nLWRlZXAgLm1vZGVfdmVydGljYWwgbmd4LWdhdWdlIC5yZWFkaW5nLWJsb2NrIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbjpob3N0IDo6bmctZGVlcCAubW9kZV92ZXJ0aWNhbCBuZ3gtZ2F1Z2UgLnJlYWRpbmctbGFiZWwge1xuICBkaXNwbGF5OiBub25lO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5tb2RlX3ZlcnRpY2FsIC5jZW50ZXJfdmFyaWFibGUge1xuICBmb250LXNpemU6IDE4cHg7XG4gIG1hcmdpbjogMTUlIDA7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBmb250LWZhbWlseTogXCJTRiBQcm8gUm91bmRlZC1Cb2xkXCI7XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG59XG46aG9zdCA6Om5nLWRlZXAgLm1vZGVfdmVydGljYWwgLmJvdHRvbV92YXJpYWJsZSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzk1OTM5MztcbiAgZm9udC1mYW1pbHk6IFwiU0YgUHJvIFRleHQtUmVndWxhclwiO1xufSIsIkBpbXBvcnQgJy4uLy4uL3NoYXJlZC9jb21tb24vem9vbSc7XHJcblxyXG46aG9zdCA6Om5nLWRlZXAge1xyXG4gIC5nYXVnZTIge1xyXG4gICAgY29sb3I6ICNGRkZGRkY7XHJcblxyXG4gICAgbmd4LWdhdWdlLFxyXG4gICAgLmRpc3BsYXlfY2VudGVyIHtcclxuICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgICAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5tb2RlX3NxdWFyZSB7XHJcblxyXG4gICAgLmRpc3BsYXlfY2VudGVyIHtcclxuICAgICAgcGFkZGluZy1ib3R0b206IDMwJTtcclxuXHJcbiAgICAgIHNwYW4ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIlNGIFBybyBSb3VuZGVkLUJvbGRcIjtcclxuICAgICAgfVxyXG5cclxuICAgICAgaSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDMzJTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5nYXVnZV8ge1xyXG4gICAgICAmYXJjaCwgJnNlbWkge1xyXG4gICAgICAgIGNhbnZhcyB7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA4JTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBuZ3gtZ2F1Z2Uge1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgdG9wOiAtOCU7XHJcblxyXG4gICAgICBjYW52YXMge1xyXG4gICAgICAgIHdpZHRoOiA1OCU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5yZWFkaW5nLWJsb2NrIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAucmVhZGluZy1sYWJlbCB7XHJcbiAgICAgICAgYm90dG9tOiAwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiU0YgUHJvIFRleHQtUmVndWxhclwiO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAubW9kZV9yZWN0YW5nbGUge1xyXG4gICAgaSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIH1cclxuXHJcbiAgICAuZ2F1Z2VfIHtcclxuICAgICAgJmFyY2gsICZzZW1pIHtcclxuICAgICAgICBjYW52YXMge1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogOCU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbmd4LWdhdWdlIHtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIHRvcDogMDtcclxuXHJcbiAgICAgIGNhbnZhcyB7XHJcbiAgICAgICAgd2lkdGg6IDU4JTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnJlYWRpbmctYmxvY2sge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5yZWFkaW5nLWxhYmVsIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC5jZW50ZXJfdmFyaWFibGUge1xyXG4gICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgIG1hcmdpbjogNCUgMDtcclxuICAgICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBcIlNGIFBybyBSb3VuZGVkLUJvbGRcIjtcclxuICAgICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICAgIH1cclxuXHJcbiAgICAuYm90dG9tX3ZhcmlhYmxlIHtcclxuICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGNvbG9yOiAjOTU5MzkzO1xyXG4gICAgICBmb250LWZhbWlseTogXCJTRiBQcm8gVGV4dC1SZWd1bGFyXCI7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAubW9kZV92ZXJ0aWNhbCB7XHJcbiAgICBpIHtcclxuICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5nYXVnZV8ge1xyXG4gICAgICAmYXJjaCwgJnNlbWkge1xyXG4gICAgICAgIGNhbnZhcyB7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA4JTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuZ2F1Z2VfY29udGFpbmVyIHtcclxuICAgICAgLnZhbHVlX2NvbnRhaW5lciB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgICAgIHRvcDogMjYlO1xyXG4gICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBuZ3gtZ2F1Z2Uge1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgdG9wOiAwO1xyXG4gICAgICBoZWlnaHQ6IDUwJSAhaW1wb3J0YW50O1xyXG5cclxuICAgICAgY2FudmFzIHtcclxuICAgICAgICB3aWR0aDogNTglO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAucmVhZGluZy1ibG9jayB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnJlYWRpbmctbGFiZWwge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgLmNlbnRlcl92YXJpYWJsZSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgbWFyZ2luOiAxNSUgMDtcclxuICAgICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBcIlNGIFBybyBSb3VuZGVkLUJvbGRcIjtcclxuICAgICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICAgIH1cclxuXHJcbiAgICAuYm90dG9tX3ZhcmlhYmxlIHtcclxuICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGNvbG9yOiAjOTU5MzkzO1xyXG4gICAgICBmb250LWZhbWlseTogXCJTRiBQcm8gVGV4dC1SZWd1bGFyXCI7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Gauge2WidgetComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'lib-gauge2-widget',
                templateUrl: './gauge2-widget.component.html',
                styleUrls: ['./gauge2-widget.component.scss']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, { widget: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], gridInfo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
const Gauge2Widget = {
    name: 'Gauge 2',
    type: 'component',
    component: Gauge2WidgetComponent,
    defaultConfig: [
        { faCenter: 'fa fa-battery-full', foregroundColor: '#73B18D', colorIcon: '#73B18D', type: 'full', value: '75', centerVariable: '%', bottomVariable: 'Battery', thick: 15, gaugeMin: 0, gaugeMax: 100, iconMin: 0, iconMax: 100 },
        { faCenter: 'feather-droplet', foregroundColor: '#9DCB7A', colorIcon: '#9DCB7A', type: 'arch', value: '75', centerVariable: '%', bottomVariable: 'Humidity', thick: 15, gaugeMin: 0, gaugeMax: 100, iconMin: 0, iconMax: 100 },
        { faCenter: 'feather-layers', foregroundColor: '#919DEB', colorIcon: '#919DEB', type: 'semi', value: '75', centerVariable: '%', bottomVariable: 'RH%', thick: 15, gaugeMin: 0, gaugeMax: 100, iconMin: 0, iconMax: 100 }
    ]
};


/***/ }),

/***/ "../widgets/src/lib/components/gauge3-widget/gauge3-widget.component.ts":
/*!******************************************************************************!*\
  !*** ../widgets/src/lib/components/gauge3-widget/gauge3-widget.component.ts ***!
  \******************************************************************************/
/*! exports provided: Gauge3WidgetComponent, Gauge3Widget */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Gauge3WidgetComponent", function() { return Gauge3WidgetComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Gauge3Widget", function() { return Gauge3Widget; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_common_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/common/util */ "../widgets/src/lib/shared/common/util.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var angular_resize_event__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-resize-event */ "../../node_modules/angular-resize-event/__ivy_ngcc__/fesm2015/angular-resize-event.js");
/* harmony import */ var ngx_gauge__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-gauge */ "../../node_modules/ngx-gauge/__ivy_ngcc__/fesm2015/ngx-gauge.js");






const _c0 = ["gauge3Ref"];
const _c1 = function (a0) { return { "color": a0 }; };
function Gauge3WidgetComponent_i_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i");
} if (rf & 2) {
    const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    var tmp_0_0 = null;
    const currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c1, (tmp_0_0 = ctx_r49.getThresholdIconByRange()) == null ? null : tmp_0_0.color);
    var tmp_1_0 = null;
    const currVal_1 = (tmp_1_0 = ctx_r49.getThresholdIconByRange()) == null ? null : tmp_1_0.icon;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](currVal_0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](currVal_1);
} }
function Gauge3WidgetComponent_i_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i");
} if (rf & 2) {
    const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    var tmp_0_0 = null;
    const currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c1, (tmp_0_0 = ctx_r50.getThresholdIconByRange()) == null ? null : tmp_0_0.color);
    var tmp_1_0 = null;
    const currVal_1 = (tmp_1_0 = ctx_r50.getThresholdIconByRange()) == null ? null : tmp_1_0.icon;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](currVal_0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](currVal_1);
} }
function Gauge3WidgetComponent_i_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i");
} if (rf & 2) {
    const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    var tmp_0_0 = null;
    const currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c1, (tmp_0_0 = ctx_r51.getThresholdIconByRange()) == null ? null : tmp_0_0.color);
    var tmp_1_0 = null;
    const currVal_1 = (tmp_1_0 = ctx_r51.getThresholdIconByRange()) == null ? null : tmp_1_0.icon;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](currVal_0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](currVal_1);
} }
const _c2 = function () { return {}; };
function Gauge3WidgetComponent_ng_template_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ngx-gauge", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cloneConfig_r54 = ctx.cloneConfig;
    const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    var tmp_3_0 = null;
    const currVal_3 = (cloneConfig_r54 == null ? null : cloneConfig_r54.thresholdColor) ? ctx_r53.convertColorOpacity((tmp_3_0 = ctx_r53.getThresholdColorByRange()) == null ? null : tmp_3_0.color) : ctx_r53.convertColorOpacity(ctx_r53.widget.config == null ? null : ctx_r53.widget.config.foregroundColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("gauge_" + (ctx_r53.widget == null ? null : ctx_r53.widget.config == null ? null : ctx_r53.widget.config.type));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("thick", cloneConfig_r54 == null ? null : cloneConfig_r54.thick)("foregroundColor", cloneConfig_r54 == null ? null : cloneConfig_r54.foregroundColor)("backgroundColor", currVal_3)("min", cloneConfig_r54 == null ? null : cloneConfig_r54.gaugeMin)("max", cloneConfig_r54 == null ? null : cloneConfig_r54.gaugeMax)("type", cloneConfig_r54 == null ? null : cloneConfig_r54.type)("value", cloneConfig_r54 == null ? null : cloneConfig_r54.value)("thresholds", (cloneConfig_r54 == null ? null : cloneConfig_r54.thresholdColor) ? cloneConfig_r54.thresholdColor : _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c2))("label", cloneConfig_r54 == null ? null : cloneConfig_r54.bottomVariable)("append", cloneConfig_r54 == null ? null : cloneConfig_r54.centerVariable);
} }
const _c3 = function (a0) { return { cloneConfig: a0 }; };
class Gauge3WidgetComponent {
    constructor(cdr) {
        this.cdr = cdr;
    }
    ngOnInit() {
        if (this.gridInfo.rows === this.gridInfo.cols) {
            this.mode = 1; // Square
        }
        if (this.gridInfo.rows < this.gridInfo.cols) {
            this.mode = 2; // Rectangle
        }
        if (this.gridInfo.rows > this.gridInfo.cols) {
            this.mode = 3; // Vertical
        }
    }
    onResized(event) {
        setTimeout(() => {
            const wh = event.newWidth - event.newHeight;
            if (wh < 70) {
                this.mode = 1; // Square
            }
            if (wh > 70) {
                this.mode = 2; // Rectangle
            }
            if (wh < -50) {
                this.mode = 3; // Vertical
            }
            this.cdr.detectChanges();
        }, 0);
    }
    ngAfterViewInit() {
        // TODO
    }
    ngAfterViewChecked() {
        this.changeDataToElement(this.gridInfo, this.widget.config);
    }
    /**
     * Update value
     * Update centerVariable
     * Update bottomVariable
     * @param gridInfo
     * @param data
     */
    changeDataToElement(gridInfo, data) {
        if (this.el) {
            const rl = this.el.nativeElement.querySelector('.reading-label');
            const cv = this.el.nativeElement.querySelector('.center_variable');
            const bv = this.el.nativeElement.querySelector('.bottom_variable');
            if (gridInfo.cols > gridInfo.rows && cv && bv) {
                cv.innerHTML = `${data === null || data === void 0 ? void 0 : data.value}${data === null || data === void 0 ? void 0 : data.centerVariable}`;
                bv.innerHTML = `${data === null || data === void 0 ? void 0 : data.bottomVariable}`;
            }
            else if (rl) {
                rl.innerHTML = `${data === null || data === void 0 ? void 0 : data.bottomVariable} ${data === null || data === void 0 ? void 0 : data.value}${(data === null || data === void 0 ? void 0 : data.centerVariable) ? data === null || data === void 0 ? void 0 : data.centerVariable : data === null || data === void 0 ? void 0 : data.bottomVariableUnit}`;
            }
        }
    }
    convertColorOpacity(color) {
        try {
            return _shared_common_util__WEBPACK_IMPORTED_MODULE_1__["Util"].convertColorOpacity(color, 20);
        }
        catch (er) {
            return null;
        }
    }
    // Check show/hiden
    canActivate(filed) {
        return this.widget.config.hasOwnProperty(filed);
    }
    /**
     * ThresholdIcon
     */
    getThresholdIconByRange() {
        const base = { color: this.widget.config.colorIcon, icon: this.widget.config.faCenter };
        if (this.canActivate('thresholdIcon')) {
            const value = _shared_common_util__WEBPACK_IMPORTED_MODULE_1__["Util"].clamp(this.widget.config.value, this.widget.config.iconMin, this.widget.config.iconMax);
            const match = Object.keys(this.widget.config.thresholdIcon)
                .filter(function (item) { return _shared_common_util__WEBPACK_IMPORTED_MODULE_1__["Util"].isNumber(item) && Number(item) <= value; })
                .sort((a, b) => Number(a) - Number(b))
                .reverse()[0];
            return match ? this.widget.config.thresholdIcon[match] : base;
        }
        else {
            return base;
        }
    }
    /**
     * ThresholdColor
     */
    getThresholdColorByRange() {
        const base = { color: this.widget.config.foregroundColor };
        if (this.canActivate('thresholdColor')) {
            const value = _shared_common_util__WEBPACK_IMPORTED_MODULE_1__["Util"].clamp(this.widget.config.value, this.widget.config.gaugeMin, this.widget.config.gaugeMax);
            const match = Object.keys(this.widget.config.thresholdColor)
                .filter(function (item) { return _shared_common_util__WEBPACK_IMPORTED_MODULE_1__["Util"].isNumber(item) && Number(item) <= value; })
                .sort((a, b) => Number(a) - Number(b))
                .reverse()[0];
            return match ? this.widget.config.thresholdColor[match] : base;
        }
        else {
            return base;
        }
    }
}
Gauge3WidgetComponent.ɵfac = function Gauge3WidgetComponent_Factory(t) { return new (t || Gauge3WidgetComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
Gauge3WidgetComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Gauge3WidgetComponent, selectors: [["lib-gauge3-widget"]], viewQuery: function Gauge3WidgetComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.el = _t.first);
    } }, inputs: { widget: "widget", gridInfo: "gridInfo" }, decls: 29, vars: 46, consts: [[1, "gauge3", "h-100", "w-100", 3, "ngClass", "ngStyle", "hidden", "resized"], ["gauge3Ref", ""], [1, "display_center", "d-flex", "justify-content-center", "align-items-center"], [3, "class", "style", 4, "ngIf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "h-100", "w-100", "d-flex", "justify-content-center", "align-items-center"], [1, "col-6", "p-0", "text-center"], [1, "col-6"], [1, "center_variable", "mb-1"], [1, "button_variable", "mb-0"], [1, "row", "w-100", "m-0", "h-50", "gauge_container"], [1, "icon_container"], [1, "row", "w-100", "m-0", "h-50", "d-flex", "justify-content-center", "align-items-center"], [1, "content"], ["gaugeTemplate", ""], [3, "thick", "foregroundColor", "backgroundColor", "min", "max", "type", "value", "thresholds", "label", "append"]], template: function Gauge3WidgetComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resized", function Gauge3WidgetComponent_Template_div_resized_0_listener($event) { return ctx.onResized($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, Gauge3WidgetComponent_i_3_Template, 1, 6, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](5, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resized", function Gauge3WidgetComponent_Template_div_resized_6_listener($event) { return ctx.onResized($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, Gauge3WidgetComponent_i_9_Template, 1, 6, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](10, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resized", function Gauge3WidgetComponent_Template_div_resized_16_listener($event) { return ctx.onResized($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, Gauge3WidgetComponent_i_19_Template, 1, 6, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](20, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, Gauge3WidgetComponent_ng_template_27_Template, 2, 13, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("mode_square");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.widget.config == null ? null : ctx.widget.config.class)("ngStyle", ctx.widget.config == null ? null : ctx.widget.config.styles)("hidden", !(ctx.mode == 1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.canActivate("faCenter"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx.widget.config == null ? null : ctx.widget.config.colorText);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r52)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](40, _c3, ctx.widget.config));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("mode_rectangle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.widget.config == null ? null : ctx.widget.config.class)("ngStyle", ctx.widget.config == null ? null : ctx.widget.config.styles)("hidden", !(ctx.mode == 2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.canActivate("faCenter"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r52)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](42, _c3, ctx.widget.config));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx.widget.config == null ? null : ctx.widget.config.colorText);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.widget.config == null ? null : ctx.widget.config.value, "", ctx.widget.config == null ? null : ctx.widget.config.centerVariable, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx.widget.config == null ? null : ctx.widget.config.colorText);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.widget.config == null ? null : ctx.widget.config.bottomVariable);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("mode_vertical");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.widget.config == null ? null : ctx.widget.config.class)("ngStyle", ctx.widget.config == null ? null : ctx.widget.config.styles)("hidden", !(ctx.mode == 3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.canActivate("faCenter"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r52)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](44, _c3, ctx.widget.config));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx.widget.config == null ? null : ctx.widget.config.colorText);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.widget.config == null ? null : ctx.widget.config.value, "", ctx.widget.config == null ? null : ctx.widget.config.centerVariable, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx.widget.config == null ? null : ctx.widget.config.colorText);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.widget.config == null ? null : ctx.widget.config.bottomVariable);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], angular_resize_event__WEBPACK_IMPORTED_MODULE_3__["ResizedDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"], ngx_gauge__WEBPACK_IMPORTED_MODULE_4__["ɵa"]], styles: ["@media only screen and (min-width: 1366px) {\n  [_nghost-%COMP%] {\n    zoom: 0.8;\n  }\n}\n@media only screen and (min-width: 1400px) {\n  [_nghost-%COMP%] {\n    zoom: 0.8;\n  }\n}\n@media only screen and (min-width: 1440px) {\n  [_nghost-%COMP%] {\n    zoom: 0.85;\n  }\n}\n@media only screen and (min-width: 1600px) {\n  [_nghost-%COMP%] {\n    zoom: 0.9;\n  }\n}\n@media only screen and (min-width: 1680px) {\n  [_nghost-%COMP%] {\n    zoom: 0.95;\n  }\n}\n@media only screen and (min-width: 1920px) {\n  [_nghost-%COMP%] {\n    zoom: 1;\n  }\n}\n[_nghost-%COMP%]     .gauge3 {\n  color: #FFFFFF;\n}\n[_nghost-%COMP%]     .gauge3 ngx-gauge, [_nghost-%COMP%]     .gauge3 .display_center {\n  width: 100% !important;\n  height: 100% !important;\n  position: absolute;\n  display: flex;\n  align-items: center;\n}\n[_nghost-%COMP%]     .mode_square .display_center {\n  top: -8%;\n}\n[_nghost-%COMP%]     .mode_square .display_center i {\n  font-size: 38px;\n  position: absolute;\n  text-align: center;\n}\n[_nghost-%COMP%]     .mode_square .gauge_arch canvas, [_nghost-%COMP%]     .mode_square .gauge_semi canvas {\n  margin-bottom: 8%;\n}\n[_nghost-%COMP%]     .mode_square ngx-gauge {\n  justify-content: center;\n  top: -8%;\n}\n[_nghost-%COMP%]     .mode_square ngx-gauge canvas {\n  width: 58%;\n}\n[_nghost-%COMP%]     .mode_square ngx-gauge .reading-block {\n  display: none;\n}\n[_nghost-%COMP%]     .mode_square ngx-gauge .reading-label {\n  bottom: 0px;\n  font-size: 16px !important;\n  transform: none !important;\n  font-family: \"SF Pro Text-Regular\";\n}\n[_nghost-%COMP%]     .mode_rectangle i {\n  font-size: 38px;\n}\n[_nghost-%COMP%]     .mode_rectangle .gauge_arch canvas, [_nghost-%COMP%]     .mode_rectangle .gauge_semi canvas {\n  margin-bottom: 8%;\n}\n[_nghost-%COMP%]     .mode_rectangle ngx-gauge {\n  justify-content: center;\n  top: 0;\n}\n[_nghost-%COMP%]     .mode_rectangle ngx-gauge canvas {\n  width: 58%;\n}\n[_nghost-%COMP%]     .mode_rectangle ngx-gauge .reading-block {\n  display: none;\n}\n[_nghost-%COMP%]     .mode_rectangle ngx-gauge .reading-label {\n  display: none;\n}\n[_nghost-%COMP%]     .mode_rectangle .center_variable {\n  font-size: 36px;\n  color: #FFFFFF;\n  font-family: \"SF Pro Rounded-Bold\";\n}\n[_nghost-%COMP%]     .mode_rectangle .button_variable {\n  margin-top: 10%;\n  font-size: 16px;\n  color: #959393;\n  font-family: \"SF Pro Text-Regular\";\n}\n[_nghost-%COMP%]     .mode_vertical .gauge_arch canvas, [_nghost-%COMP%]     .mode_vertical .gauge_semi canvas {\n  margin-bottom: 8%;\n}\n[_nghost-%COMP%]     .mode_vertical .gauge_container .icon_container {\n  position: absolute;\n  transform: translate(-50%, -50%);\n  top: 25%;\n  left: 50%;\n  text-align: center;\n  line-height: normal;\n}\n[_nghost-%COMP%]     .mode_vertical .gauge_container .icon_container i {\n  font-size: 38px;\n}\n[_nghost-%COMP%]     .mode_vertical ngx-gauge {\n  justify-content: center;\n  top: 0;\n  height: 50% !important;\n}\n[_nghost-%COMP%]     .mode_vertical ngx-gauge canvas {\n  width: 58%;\n}\n[_nghost-%COMP%]     .mode_vertical ngx-gauge .reading-block {\n  display: none;\n}\n[_nghost-%COMP%]     .mode_vertical ngx-gauge .reading-label {\n  display: none;\n}\n[_nghost-%COMP%]     .mode_vertical .content {\n  text-align: center;\n}\n[_nghost-%COMP%]     .mode_vertical .content:nth-child(1) {\n  font-size: 36px;\n  margin: 15% 0;\n  color: #FFFFFF;\n  font-family: \"SF Pro Rounded-Bold\";\n  line-height: normal;\n}\n[_nghost-%COMP%]     .mode_vertical .content :nth-child(2) {\n  font-size: 16px;\n  text-align: center;\n  color: #959393;\n  font-family: \"SF Pro Text-Regular\";\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3dpZGdldHMvc3JjL2xpYi9jb21wb25lbnRzL2dhdWdlMy13aWRnZXQvRTpcXFByb2plY3RcXGFpcy1wb2MvcHJvamVjdHNcXHdpZGdldHNcXHNyY1xcbGliXFxzaGFyZWRcXGNvbW1vblxcX3pvb20uc2NzcyIsInByb2plY3RzL3dpZGdldHMvc3JjL2xpYi9jb21wb25lbnRzL2dhdWdlMy13aWRnZXQvZ2F1Z2UzLXdpZGdldC5jb21wb25lbnQuc2NzcyIsInByb2plY3RzL3dpZGdldHMvc3JjL2xpYi9jb21wb25lbnRzL2dhdWdlMy13aWRnZXQvRTpcXFByb2plY3RcXGFpcy1wb2MvcHJvamVjdHNcXHdpZGdldHNcXHNyY1xcbGliXFxjb21wb25lbnRzXFxnYXVnZTMtd2lkZ2V0XFxnYXVnZTMtd2lkZ2V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBREY7SUFFSSxTQUFBO0VDQ0Y7QUFDRjtBRENFO0VBTEY7SUFNSSxTQUFBO0VDRUY7QUFDRjtBREFFO0VBVEY7SUFVSSxVQUFBO0VDR0Y7QUFDRjtBRERFO0VBYkY7SUFjSSxTQUFBO0VDSUY7QUFDRjtBREZFO0VBakJGO0lBa0JJLFVBQUE7RUNLRjtBQUNGO0FESEU7RUFyQkY7SUFzQkksT0FBQTtFQ01GO0FBQ0Y7QUMxQkU7RUFDRSxjQUFBO0FENkJKO0FDM0JJOztFQUVFLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBRDZCTjtBQ3ZCSTtFQUNFLFFBQUE7QUR5Qk47QUN2Qk07RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBRHlCUjtBQ25CUTtFQUNFLGlCQUFBO0FEcUJWO0FDaEJJO0VBQ0UsdUJBQUE7RUFDQSxRQUFBO0FEa0JOO0FDaEJNO0VBQ0UsVUFBQTtBRGtCUjtBQ2ZNO0VBQ0UsYUFBQTtBRGlCUjtBQ2RNO0VBQ0UsV0FBQTtFQUNBLDBCQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQ0FBQTtBRGdCUjtBQ1ZJO0VBQ0UsZUFBQTtBRFlOO0FDUFE7RUFDRSxpQkFBQTtBRFNWO0FDSkk7RUFDRSx1QkFBQTtFQUNBLE1BQUE7QURNTjtBQ0pNO0VBQ0UsVUFBQTtBRE1SO0FDSE07RUFDRSxhQUFBO0FES1I7QUNGTTtFQUNFLGFBQUE7QURJUjtBQ0NJO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxrQ0FBQTtBRENOO0FDRUk7RUFDRSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxrQ0FBQTtBREFOO0FDUVE7RUFDRSxpQkFBQTtBRE5WO0FDWU07RUFDRSxrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FEVlI7QUNXUTtFQUNFLGVBQUE7QURUVjtBQ2NJO0VBQ0UsdUJBQUE7RUFDQSxNQUFBO0VBQ0Esc0JBQUE7QURaTjtBQ2NNO0VBQ0UsVUFBQTtBRFpSO0FDZU07RUFDRSxhQUFBO0FEYlI7QUNnQk07RUFDRSxhQUFBO0FEZFI7QUNtQkk7RUFDRSxrQkFBQTtBRGpCTjtBQ2tCTTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGtDQUFBO0VBQ0EsbUJBQUE7QURoQlI7QUNtQk07RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0NBQUE7QURqQlIiLCJmaWxlIjoicHJvamVjdHMvd2lkZ2V0cy9zcmMvbGliL2NvbXBvbmVudHMvZ2F1Z2UzLXdpZGdldC9nYXVnZTMtd2lkZ2V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTM2NnB4KSB7XHJcbiAgICB6b29tOiAwLjg7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE0MDBweCkge1xyXG4gICAgem9vbTogMC44O1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNDQwcHgpIHtcclxuICAgIHpvb206IDAuODU7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE2MDBweCkge1xyXG4gICAgem9vbTogMC45O1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNjgwcHgpIHtcclxuICAgIHpvb206IDAuOTU7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE5MjBweCkge1xyXG4gICAgem9vbTogMTtcclxuICB9XHJcbn1cclxuIiwiQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMzY2cHgpIHtcbiAgOmhvc3Qge1xuICAgIHpvb206IDAuODtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNDAwcHgpIHtcbiAgOmhvc3Qge1xuICAgIHpvb206IDAuODtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNDQwcHgpIHtcbiAgOmhvc3Qge1xuICAgIHpvb206IDAuODU7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTYwMHB4KSB7XG4gIDpob3N0IHtcbiAgICB6b29tOiAwLjk7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTY4MHB4KSB7XG4gIDpob3N0IHtcbiAgICB6b29tOiAwLjk1O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE5MjBweCkge1xuICA6aG9zdCB7XG4gICAgem9vbTogMTtcbiAgfVxufVxuXG46aG9zdCA6Om5nLWRlZXAgLmdhdWdlMyB7XG4gIGNvbG9yOiAjRkZGRkZGO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5nYXVnZTMgbmd4LWdhdWdlLFxuOmhvc3QgOjpuZy1kZWVwIC5nYXVnZTMgLmRpc3BsYXlfY2VudGVyIHtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbjpob3N0IDo6bmctZGVlcCAubW9kZV9zcXVhcmUgLmRpc3BsYXlfY2VudGVyIHtcbiAgdG9wOiAtOCU7XG59XG46aG9zdCA6Om5nLWRlZXAgLm1vZGVfc3F1YXJlIC5kaXNwbGF5X2NlbnRlciBpIHtcbiAgZm9udC1zaXplOiAzOHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbjpob3N0IDo6bmctZGVlcCAubW9kZV9zcXVhcmUgLmdhdWdlX2FyY2ggY2FudmFzLCA6aG9zdCA6Om5nLWRlZXAgLm1vZGVfc3F1YXJlIC5nYXVnZV9zZW1pIGNhbnZhcyB7XG4gIG1hcmdpbi1ib3R0b206IDglO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5tb2RlX3NxdWFyZSBuZ3gtZ2F1Z2Uge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgdG9wOiAtOCU7XG59XG46aG9zdCA6Om5nLWRlZXAgLm1vZGVfc3F1YXJlIG5neC1nYXVnZSBjYW52YXMge1xuICB3aWR0aDogNTglO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5tb2RlX3NxdWFyZSBuZ3gtZ2F1Z2UgLnJlYWRpbmctYmxvY2sge1xuICBkaXNwbGF5OiBub25lO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5tb2RlX3NxdWFyZSBuZ3gtZ2F1Z2UgLnJlYWRpbmctbGFiZWwge1xuICBib3R0b206IDBweDtcbiAgZm9udC1zaXplOiAxNnB4ICFpbXBvcnRhbnQ7XG4gIHRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xuICBmb250LWZhbWlseTogXCJTRiBQcm8gVGV4dC1SZWd1bGFyXCI7XG59XG46aG9zdCA6Om5nLWRlZXAgLm1vZGVfcmVjdGFuZ2xlIGkge1xuICBmb250LXNpemU6IDM4cHg7XG59XG46aG9zdCA6Om5nLWRlZXAgLm1vZGVfcmVjdGFuZ2xlIC5nYXVnZV9hcmNoIGNhbnZhcywgOmhvc3QgOjpuZy1kZWVwIC5tb2RlX3JlY3RhbmdsZSAuZ2F1Z2Vfc2VtaSBjYW52YXMge1xuICBtYXJnaW4tYm90dG9tOiA4JTtcbn1cbjpob3N0IDo6bmctZGVlcCAubW9kZV9yZWN0YW5nbGUgbmd4LWdhdWdlIHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHRvcDogMDtcbn1cbjpob3N0IDo6bmctZGVlcCAubW9kZV9yZWN0YW5nbGUgbmd4LWdhdWdlIGNhbnZhcyB7XG4gIHdpZHRoOiA1OCU7XG59XG46aG9zdCA6Om5nLWRlZXAgLm1vZGVfcmVjdGFuZ2xlIG5neC1nYXVnZSAucmVhZGluZy1ibG9jayB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG46aG9zdCA6Om5nLWRlZXAgLm1vZGVfcmVjdGFuZ2xlIG5neC1nYXVnZSAucmVhZGluZy1sYWJlbCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG46aG9zdCA6Om5nLWRlZXAgLm1vZGVfcmVjdGFuZ2xlIC5jZW50ZXJfdmFyaWFibGUge1xuICBmb250LXNpemU6IDM2cHg7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBmb250LWZhbWlseTogXCJTRiBQcm8gUm91bmRlZC1Cb2xkXCI7XG59XG46aG9zdCA6Om5nLWRlZXAgLm1vZGVfcmVjdGFuZ2xlIC5idXR0b25fdmFyaWFibGUge1xuICBtYXJnaW4tdG9wOiAxMCU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICM5NTkzOTM7XG4gIGZvbnQtZmFtaWx5OiBcIlNGIFBybyBUZXh0LVJlZ3VsYXJcIjtcbn1cbjpob3N0IDo6bmctZGVlcCAubW9kZV92ZXJ0aWNhbCAuZ2F1Z2VfYXJjaCBjYW52YXMsIDpob3N0IDo6bmctZGVlcCAubW9kZV92ZXJ0aWNhbCAuZ2F1Z2Vfc2VtaSBjYW52YXMge1xuICBtYXJnaW4tYm90dG9tOiA4JTtcbn1cbjpob3N0IDo6bmctZGVlcCAubW9kZV92ZXJ0aWNhbCAuZ2F1Z2VfY29udGFpbmVyIC5pY29uX2NvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHRvcDogMjUlO1xuICBsZWZ0OiA1MCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbn1cbjpob3N0IDo6bmctZGVlcCAubW9kZV92ZXJ0aWNhbCAuZ2F1Z2VfY29udGFpbmVyIC5pY29uX2NvbnRhaW5lciBpIHtcbiAgZm9udC1zaXplOiAzOHB4O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5tb2RlX3ZlcnRpY2FsIG5neC1nYXVnZSB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB0b3A6IDA7XG4gIGhlaWdodDogNTAlICFpbXBvcnRhbnQ7XG59XG46aG9zdCA6Om5nLWRlZXAgLm1vZGVfdmVydGljYWwgbmd4LWdhdWdlIGNhbnZhcyB7XG4gIHdpZHRoOiA1OCU7XG59XG46aG9zdCA6Om5nLWRlZXAgLm1vZGVfdmVydGljYWwgbmd4LWdhdWdlIC5yZWFkaW5nLWJsb2NrIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbjpob3N0IDo6bmctZGVlcCAubW9kZV92ZXJ0aWNhbCBuZ3gtZ2F1Z2UgLnJlYWRpbmctbGFiZWwge1xuICBkaXNwbGF5OiBub25lO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5tb2RlX3ZlcnRpY2FsIC5jb250ZW50IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5tb2RlX3ZlcnRpY2FsIC5jb250ZW50Om50aC1jaGlsZCgxKSB7XG4gIGZvbnQtc2l6ZTogMzZweDtcbiAgbWFyZ2luOiAxNSUgMDtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIGZvbnQtZmFtaWx5OiBcIlNGIFBybyBSb3VuZGVkLUJvbGRcIjtcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbn1cbjpob3N0IDo6bmctZGVlcCAubW9kZV92ZXJ0aWNhbCAuY29udGVudCA6bnRoLWNoaWxkKDIpIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjOTU5MzkzO1xuICBmb250LWZhbWlseTogXCJTRiBQcm8gVGV4dC1SZWd1bGFyXCI7XG59IiwiQGltcG9ydCAnLi4vLi4vc2hhcmVkL2NvbW1vbi96b29tJztcclxuXHJcbjpob3N0IDo6bmctZGVlcCB7XHJcbiAgLmdhdWdlMyB7XHJcbiAgICBjb2xvcjogI0ZGRkZGRjtcclxuXHJcbiAgICBuZ3gtZ2F1Z2UsXHJcbiAgICAuZGlzcGxheV9jZW50ZXIge1xyXG4gICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLm1vZGVfc3F1YXJlIHtcclxuXHJcbiAgICAuZGlzcGxheV9jZW50ZXIge1xyXG4gICAgICB0b3A6IC04JTtcclxuXHJcbiAgICAgIGkge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzhweDtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmdhdWdlXyB7XHJcbiAgICAgICZhcmNoLCAmc2VtaSB7XHJcbiAgICAgICAgY2FudmFzIHtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDglO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG5neC1nYXVnZSB7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICB0b3A6IC04JTtcclxuXHJcbiAgICAgIGNhbnZhcyB7XHJcbiAgICAgICAgd2lkdGg6IDU4JTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnJlYWRpbmctYmxvY2sge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5yZWFkaW5nLWxhYmVsIHtcclxuICAgICAgICBib3R0b206IDBweDtcclxuICAgICAgICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDtcclxuICAgICAgICB0cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICBmb250LWZhbWlseTogXCJTRiBQcm8gVGV4dC1SZWd1bGFyXCI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5tb2RlX3JlY3RhbmdsZSB7XHJcbiAgICBpIHtcclxuICAgICAgZm9udC1zaXplOiAzOHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5nYXVnZV8ge1xyXG4gICAgICAmYXJjaCwgJnNlbWkge1xyXG4gICAgICAgIGNhbnZhcyB7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA4JTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBuZ3gtZ2F1Z2Uge1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgdG9wOiAwO1xyXG5cclxuICAgICAgY2FudmFzIHtcclxuICAgICAgICB3aWR0aDogNTglO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAucmVhZGluZy1ibG9jayB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnJlYWRpbmctbGFiZWwge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgLmNlbnRlcl92YXJpYWJsZSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMzZweDtcclxuICAgICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBcIlNGIFBybyBSb3VuZGVkLUJvbGRcIjtcclxuICAgIH1cclxuXHJcbiAgICAuYnV0dG9uX3ZhcmlhYmxlIHtcclxuICAgICAgbWFyZ2luLXRvcDogMTAlO1xyXG4gICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgIGNvbG9yOiAjOTU5MzkzO1xyXG4gICAgICBmb250LWZhbWlseTogXCJTRiBQcm8gVGV4dC1SZWd1bGFyXCI7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAubW9kZV92ZXJ0aWNhbCB7XHJcblxyXG4gICAgLmdhdWdlXyB7XHJcbiAgICAgICZhcmNoLCAmc2VtaSB7XHJcbiAgICAgICAgY2FudmFzIHtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDglO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5nYXVnZV9jb250YWluZXIge1xyXG4gICAgICAuaWNvbl9jb250YWluZXIge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgICAgICB0b3A6IDI1JTtcclxuICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgaSB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDM4cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbmd4LWdhdWdlIHtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIHRvcDogMDtcclxuICAgICAgaGVpZ2h0OiA1MCUgIWltcG9ydGFudDtcclxuXHJcbiAgICAgIGNhbnZhcyB7XHJcbiAgICAgICAgd2lkdGg6IDU4JTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnJlYWRpbmctYmxvY2sge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5yZWFkaW5nLWxhYmVsIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC5jb250ZW50IHtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAmOm50aC1jaGlsZCgxKSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAzNnB4O1xyXG4gICAgICAgIG1hcmdpbjogMTUlIDA7XHJcbiAgICAgICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiU0YgUHJvIFJvdW5kZWQtQm9sZFwiO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIDpudGgtY2hpbGQoMikge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgY29sb3I6ICM5NTkzOTM7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiU0YgUHJvIFRleHQtUmVndWxhclwiO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Gauge3WidgetComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'lib-gauge3-widget',
                templateUrl: './gauge3-widget.component.html',
                styleUrls: ['./gauge3-widget.component.scss']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, { el: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['gauge3Ref']
        }], widget: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], gridInfo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
const Gauge3Widget = {
    name: 'Gauge 3',
    type: 'component',
    component: Gauge3WidgetComponent,
    defaultConfig: [
        { faCenter: 'feather-droplet', type: 'full', foregroundColor: '#70AFAA', colorIcon: '#70AFAA', value: '75', centerVariable: '%', bottomVariable: 'Humidity', thick: 15, gaugeMin: 0, gaugeMax: 100, iconMin: 0, iconMax: 100 },
        { faCenter: 'feather-thermometer', type: 'arch', foregroundColor: '#EA857A', colorIcon: '#EA857A', value: '25', centerVariable: '℃', bottomVariable: 'Temperature', thick: 15, gaugeMin: 0, gaugeMax: 40, iconMin: 0, iconMax: 100 },
        { faCenter: 'feather-cloud-rain', type: 'semi', foregroundColor: '#97C9DE', colorIcon: '#97C9DE', value: '101', centerVariable: 'mm', bottomVariable: 'Rainfail', thick: 15, gaugeMin: 0, gaugeMax: 100, iconMin: 0, iconMax: 100 }
    ]
};


/***/ }),

/***/ "../widgets/src/lib/components/img-input-widget/img-input-widget.component.ts":
/*!************************************************************************************!*\
  !*** ../widgets/src/lib/components/img-input-widget/img-input-widget.component.ts ***!
  \************************************************************************************/
/*! exports provided: ImgInputWidgetComponent, ImgInputWidget */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImgInputWidgetComponent", function() { return ImgInputWidgetComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImgInputWidget", function() { return ImgInputWidget; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



const _c0 = function (a0) { return { "background": a0 }; };
class ImgInputWidgetComponent {
    constructor() { }
    ngOnInit() {
    }
}
ImgInputWidgetComponent.ɵfac = function ImgInputWidgetComponent_Factory(t) { return new (t || ImgInputWidgetComponent)(); };
ImgInputWidgetComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ImgInputWidgetComponent, selectors: [["app-img-input-widget"]], inputs: { widget: "widget" }, decls: 2, vars: 4, consts: [[1, "w-100", "h-100", "position-relative", 3, "ngStyle"], [1, "image", 3, "src"]], template: function ImgInputWidgetComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx.widget.config == null ? null : ctx.widget.config.backgroundColor));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.widget.config == null ? null : ctx.widget.config.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"]], styles: ["@media only screen and (min-width: 1366px) {\n  [_nghost-%COMP%] {\n    zoom: 0.8;\n  }\n}\n@media only screen and (min-width: 1400px) {\n  [_nghost-%COMP%] {\n    zoom: 0.8;\n  }\n}\n@media only screen and (min-width: 1440px) {\n  [_nghost-%COMP%] {\n    zoom: 0.85;\n  }\n}\n@media only screen and (min-width: 1600px) {\n  [_nghost-%COMP%] {\n    zoom: 0.9;\n  }\n}\n@media only screen and (min-width: 1680px) {\n  [_nghost-%COMP%] {\n    zoom: 0.95;\n  }\n}\n@media only screen and (min-width: 1920px) {\n  [_nghost-%COMP%] {\n    zoom: 1;\n  }\n}\n.image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  -o-object-position: center;\n     object-position: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3dpZGdldHMvc3JjL2xpYi9jb21wb25lbnRzL2ltZy1pbnB1dC13aWRnZXQvRTpcXFByb2plY3RcXGFpcy1wb2MvcHJvamVjdHNcXHdpZGdldHNcXHNyY1xcbGliXFxzaGFyZWRcXGNvbW1vblxcX3pvb20uc2NzcyIsInByb2plY3RzL3dpZGdldHMvc3JjL2xpYi9jb21wb25lbnRzL2ltZy1pbnB1dC13aWRnZXQvaW1nLWlucHV0LXdpZGdldC5jb21wb25lbnQuc2NzcyIsInByb2plY3RzL3dpZGdldHMvc3JjL2xpYi9jb21wb25lbnRzL2ltZy1pbnB1dC13aWRnZXQvRTpcXFByb2plY3RcXGFpcy1wb2MvcHJvamVjdHNcXHdpZGdldHNcXHNyY1xcbGliXFxjb21wb25lbnRzXFxpbWctaW5wdXQtd2lkZ2V0XFxpbWctaW5wdXQtd2lkZ2V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBREY7SUFFSSxTQUFBO0VDQ0Y7QUFDRjtBRENFO0VBTEY7SUFNSSxTQUFBO0VDRUY7QUFDRjtBREFFO0VBVEY7SUFVSSxVQUFBO0VDR0Y7QUFDRjtBRERFO0VBYkY7SUFjSSxTQUFBO0VDSUY7QUFDRjtBREZFO0VBakJGO0lBa0JJLFVBQUE7RUNLRjtBQUNGO0FESEU7RUFyQkY7SUFzQkksT0FBQTtFQ01GO0FBQ0Y7QUMzQkE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7S0FBQSx1QkFBQTtBRDhCRiIsImZpbGUiOiJwcm9qZWN0cy93aWRnZXRzL3NyYy9saWIvY29tcG9uZW50cy9pbWctaW5wdXQtd2lkZ2V0L2ltZy1pbnB1dC13aWRnZXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMzY2cHgpIHtcclxuICAgIHpvb206IDAuODtcclxuICB9XHJcblxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTQwMHB4KSB7XHJcbiAgICB6b29tOiAwLjg7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE0NDBweCkge1xyXG4gICAgem9vbTogMC44NTtcclxuICB9XHJcblxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTYwMHB4KSB7XHJcbiAgICB6b29tOiAwLjk7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE2ODBweCkge1xyXG4gICAgem9vbTogMC45NTtcclxuICB9XHJcblxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTkyMHB4KSB7XHJcbiAgICB6b29tOiAxO1xyXG4gIH1cclxufVxyXG4iLCJAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEzNjZweCkge1xuICA6aG9zdCB7XG4gICAgem9vbTogMC44O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE0MDBweCkge1xuICA6aG9zdCB7XG4gICAgem9vbTogMC44O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE0NDBweCkge1xuICA6aG9zdCB7XG4gICAgem9vbTogMC44NTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNjAwcHgpIHtcbiAgOmhvc3Qge1xuICAgIHpvb206IDAuOTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNjgwcHgpIHtcbiAgOmhvc3Qge1xuICAgIHpvb206IDAuOTU7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTkyMHB4KSB7XG4gIDpob3N0IHtcbiAgICB6b29tOiAxO1xuICB9XG59XG5cbi5pbWFnZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXI7XG59IiwiQGltcG9ydCAnLi4vLi4vc2hhcmVkL2NvbW1vbi96b29tJztcclxuXHJcbi5pbWFnZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBvYmplY3QtcG9zaXRpb246IGNlbnRlcjtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ImgInputWidgetComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-img-input-widget.',
                templateUrl: './img-input-widget.component.html',
                styleUrls: ['./img-input-widget.component.scss'],
            }]
    }], function () { return []; }, { widget: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
const ImgInputWidget = {
    type: 'input',
    component: ImgInputWidgetComponent,
    defaultConfig: []
};


/***/ }),

/***/ "../widgets/src/lib/components/img-widget/img-widget.component.ts":
/*!************************************************************************!*\
  !*** ../widgets/src/lib/components/img-widget/img-widget.component.ts ***!
  \************************************************************************/
/*! exports provided: ImgWidgetComponent, ImgWidget */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImgWidgetComponent", function() { return ImgWidgetComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImgWidget", function() { return ImgWidget; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



class ImgWidgetComponent {
    constructor() {
        this.hiden = false;
    }
    ngOnInit() {
    }
    ngAfterViewChecked() {
        this.hiden = localStorage.getItem('switchMode') === 'preview' ? true : false;
    }
}
ImgWidgetComponent.ɵfac = function ImgWidgetComponent_Factory(t) { return new (t || ImgWidgetComponent)(); };
ImgWidgetComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ImgWidgetComponent, selectors: [["lib-img-widget"]], inputs: { widget: "widget" }, decls: 1, vars: 12, consts: [[3, "src", "alt", "ngClass", "ngStyle"]], template: function ImgWidgetComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", 100, "%")("height", 100, "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", ctx.widget == null ? null : ctx.widget.config == null ? null : ctx.widget.config.disabled)("d-none", ctx.hiden && (ctx.widget == null ? null : ctx.widget.config == null ? null : ctx.widget.config.disabled));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.widget == null ? null : ctx.widget.config == null ? null : ctx.widget.config.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx.widget == null ? null : ctx.widget.config == null ? null : ctx.widget.config.alt)("ngClass", ctx.widget == null ? null : ctx.widget.config == null ? null : ctx.widget.config.class)("ngStyle", ctx.widget == null ? null : ctx.widget.config == null ? null : ctx.widget.config.styles);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"]], styles: ["@media only screen and (min-width: 1366px) {\n  [_nghost-%COMP%] {\n    zoom: 0.8;\n  }\n}\n@media only screen and (min-width: 1400px) {\n  [_nghost-%COMP%] {\n    zoom: 0.8;\n  }\n}\n@media only screen and (min-width: 1440px) {\n  [_nghost-%COMP%] {\n    zoom: 0.85;\n  }\n}\n@media only screen and (min-width: 1600px) {\n  [_nghost-%COMP%] {\n    zoom: 0.9;\n  }\n}\n@media only screen and (min-width: 1680px) {\n  [_nghost-%COMP%] {\n    zoom: 0.95;\n  }\n}\n@media only screen and (min-width: 1920px) {\n  [_nghost-%COMP%] {\n    zoom: 1;\n  }\n}\n[_nghost-%COMP%]   .disabled[_ngcontent-%COMP%] {\n  opacity: 0.2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3dpZGdldHMvc3JjL2xpYi9jb21wb25lbnRzL2ltZy13aWRnZXQvRTpcXFByb2plY3RcXGFpcy1wb2MvcHJvamVjdHNcXHdpZGdldHNcXHNyY1xcbGliXFxzaGFyZWRcXGNvbW1vblxcX3pvb20uc2NzcyIsInByb2plY3RzL3dpZGdldHMvc3JjL2xpYi9jb21wb25lbnRzL2ltZy13aWRnZXQvaW1nLXdpZGdldC5jb21wb25lbnQuc2NzcyIsInByb2plY3RzL3dpZGdldHMvc3JjL2xpYi9jb21wb25lbnRzL2ltZy13aWRnZXQvRTpcXFByb2plY3RcXGFpcy1wb2MvcHJvamVjdHNcXHdpZGdldHNcXHNyY1xcbGliXFxjb21wb25lbnRzXFxpbWctd2lkZ2V0XFxpbWctd2lkZ2V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBREY7SUFFSSxTQUFBO0VDQ0Y7QUFDRjtBRENFO0VBTEY7SUFNSSxTQUFBO0VDRUY7QUFDRjtBREFFO0VBVEY7SUFVSSxVQUFBO0VDR0Y7QUFDRjtBRERFO0VBYkY7SUFjSSxTQUFBO0VDSUY7QUFDRjtBREZFO0VBakJGO0lBa0JJLFVBQUE7RUNLRjtBQUNGO0FESEU7RUFyQkY7SUFzQkksT0FBQTtFQ01GO0FBQ0Y7QUMxQkU7RUFDRSxZQUFBO0FENkJKIiwiZmlsZSI6InByb2plY3RzL3dpZGdldHMvc3JjL2xpYi9jb21wb25lbnRzL2ltZy13aWRnZXQvaW1nLXdpZGdldC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEzNjZweCkge1xyXG4gICAgem9vbTogMC44O1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNDAwcHgpIHtcclxuICAgIHpvb206IDAuODtcclxuICB9XHJcblxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTQ0MHB4KSB7XHJcbiAgICB6b29tOiAwLjg1O1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNjAwcHgpIHtcclxuICAgIHpvb206IDAuOTtcclxuICB9XHJcblxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTY4MHB4KSB7XHJcbiAgICB6b29tOiAwLjk1O1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxOTIwcHgpIHtcclxuICAgIHpvb206IDE7XHJcbiAgfVxyXG59XHJcbiIsIkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTM2NnB4KSB7XG4gIDpob3N0IHtcbiAgICB6b29tOiAwLjg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTQwMHB4KSB7XG4gIDpob3N0IHtcbiAgICB6b29tOiAwLjg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTQ0MHB4KSB7XG4gIDpob3N0IHtcbiAgICB6b29tOiAwLjg1O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE2MDBweCkge1xuICA6aG9zdCB7XG4gICAgem9vbTogMC45O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE2ODBweCkge1xuICA6aG9zdCB7XG4gICAgem9vbTogMC45NTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxOTIwcHgpIHtcbiAgOmhvc3Qge1xuICAgIHpvb206IDE7XG4gIH1cbn1cblxuOmhvc3QgLmRpc2FibGVkIHtcbiAgb3BhY2l0eTogMC4yO1xufSIsIkBpbXBvcnQgJy4uLy4uL3NoYXJlZC9jb21tb24vem9vbSc7XHJcblxyXG46aG9zdCB7XHJcbiAgLmRpc2FibGVkIHtcclxuICAgIG9wYWNpdHk6IDAuMjtcclxuICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ImgWidgetComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'lib-img-widget',
                templateUrl: './img-widget.component.html',
                styleUrls: ['./img-widget.component.scss']
            }]
    }], function () { return []; }, { widget: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
const ImgWidget = {
    type: 'image',
    component: ImgWidgetComponent,
    defaultConfig: [{ disabled: false, alt: 'image' }]
};


/***/ }),

/***/ "../widgets/src/lib/components/label-widget/label-widget.component.ts":
/*!****************************************************************************!*\
  !*** ../widgets/src/lib/components/label-widget/label-widget.component.ts ***!
  \****************************************************************************/
/*! exports provided: LabelWidgetComponent, LabelWidget */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LabelWidgetComponent", function() { return LabelWidgetComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LabelWidget", function() { return LabelWidget; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_common_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/common/util */ "../widgets/src/lib/shared/common/util.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




const _c0 = function (a0) { return { "color": a0 }; };
class LabelWidgetComponent {
    constructor() { }
    ngOnInit() {
    }
    ngOnDestroy() {
    }
    getColor() {
        // tslint:disable-next-line: max-line-length
        return _shared_common_util__WEBPACK_IMPORTED_MODULE_1__["Util"].convertColorOpacity(this.widget.config.styles && this.widget.config.styles.color, this.widget.config.styles && this.widget.config.styles.opacity);
    }
}
LabelWidgetComponent.ɵfac = function LabelWidgetComponent_Factory(t) { return new (t || LabelWidgetComponent)(); };
LabelWidgetComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LabelWidgetComponent, selectors: [["lib-label-widget"]], inputs: { widget: "widget" }, decls: 3, vars: 9, consts: [[1, "label-widget-content", "d-block", 3, "ngClass", "ngStyle"]], template: function LabelWidgetComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](ctx.widget.config == null ? null : ctx.widget.config.styles);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.widget.config == null ? null : ctx.widget.config.class)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, ctx.getColor()));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx.widget.config == null ? null : ctx.widget.config.colorImportant);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.widget.config == null ? null : ctx.widget.config.value);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"]], styles: ["@media only screen and (min-width: 1366px) {\n  [_nghost-%COMP%] {\n    zoom: 0.8;\n  }\n}\n@media only screen and (min-width: 1400px) {\n  [_nghost-%COMP%] {\n    zoom: 0.8;\n  }\n}\n@media only screen and (min-width: 1440px) {\n  [_nghost-%COMP%] {\n    zoom: 0.85;\n  }\n}\n@media only screen and (min-width: 1600px) {\n  [_nghost-%COMP%] {\n    zoom: 0.9;\n  }\n}\n@media only screen and (min-width: 1680px) {\n  [_nghost-%COMP%] {\n    zoom: 0.95;\n  }\n}\n@media only screen and (min-width: 1920px) {\n  [_nghost-%COMP%] {\n    zoom: 1;\n  }\n}\n.label-widget-content[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  z-index: 0;\n}\n.label-widget-content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  line-height: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3dpZGdldHMvc3JjL2xpYi9jb21wb25lbnRzL2xhYmVsLXdpZGdldC9FOlxcUHJvamVjdFxcYWlzLXBvYy9wcm9qZWN0c1xcd2lkZ2V0c1xcc3JjXFxsaWJcXHNoYXJlZFxcY29tbW9uXFxfem9vbS5zY3NzIiwicHJvamVjdHMvd2lkZ2V0cy9zcmMvbGliL2NvbXBvbmVudHMvbGFiZWwtd2lkZ2V0L2xhYmVsLXdpZGdldC5jb21wb25lbnQuc2NzcyIsInByb2plY3RzL3dpZGdldHMvc3JjL2xpYi9jb21wb25lbnRzL2xhYmVsLXdpZGdldC9FOlxcUHJvamVjdFxcYWlzLXBvYy9wcm9qZWN0c1xcd2lkZ2V0c1xcc3JjXFxsaWJcXGNvbXBvbmVudHNcXGxhYmVsLXdpZGdldFxcbGFiZWwtd2lkZ2V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBREY7SUFFSSxTQUFBO0VDQ0Y7QUFDRjtBRENFO0VBTEY7SUFNSSxTQUFBO0VDRUY7QUFDRjtBREFFO0VBVEY7SUFVSSxVQUFBO0VDR0Y7QUFDRjtBRERFO0VBYkY7SUFjSSxTQUFBO0VDSUY7QUFDRjtBREZFO0VBakJGO0lBa0JJLFVBQUE7RUNLRjtBQUNGO0FESEU7RUFyQkY7SUFzQkksT0FBQTtFQ01GO0FBQ0Y7QUMzQkE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7QUQ4QkY7QUM1QkU7RUFDRSxjQUFBO0FEOEJKIiwiZmlsZSI6InByb2plY3RzL3dpZGdldHMvc3JjL2xpYi9jb21wb25lbnRzL2xhYmVsLXdpZGdldC9sYWJlbC13aWRnZXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMzY2cHgpIHtcclxuICAgIHpvb206IDAuODtcclxuICB9XHJcblxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTQwMHB4KSB7XHJcbiAgICB6b29tOiAwLjg7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE0NDBweCkge1xyXG4gICAgem9vbTogMC44NTtcclxuICB9XHJcblxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTYwMHB4KSB7XHJcbiAgICB6b29tOiAwLjk7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE2ODBweCkge1xyXG4gICAgem9vbTogMC45NTtcclxuICB9XHJcblxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTkyMHB4KSB7XHJcbiAgICB6b29tOiAxO1xyXG4gIH1cclxufVxyXG4iLCJAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEzNjZweCkge1xuICA6aG9zdCB7XG4gICAgem9vbTogMC44O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE0MDBweCkge1xuICA6aG9zdCB7XG4gICAgem9vbTogMC44O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE0NDBweCkge1xuICA6aG9zdCB7XG4gICAgem9vbTogMC44NTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNjAwcHgpIHtcbiAgOmhvc3Qge1xuICAgIHpvb206IDAuOTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNjgwcHgpIHtcbiAgOmhvc3Qge1xuICAgIHpvb206IDAuOTU7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTkyMHB4KSB7XG4gIDpob3N0IHtcbiAgICB6b29tOiAxO1xuICB9XG59XG5cbi5sYWJlbC13aWRnZXQtY29udGVudCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHotaW5kZXg6IDA7XG59XG4ubGFiZWwtd2lkZ2V0LWNvbnRlbnQgc3BhbiB7XG4gIGxpbmUtaGVpZ2h0OiAxO1xufSIsIkBpbXBvcnQgJy4uLy4uL3NoYXJlZC9jb21tb24vem9vbSc7XHJcblxyXG4ubGFiZWwtd2lkZ2V0LWNvbnRlbnQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgei1pbmRleDogMDtcclxuXHJcbiAgc3BhbiB7XHJcbiAgICBsaW5lLWhlaWdodDogMTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LabelWidgetComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'lib-label-widget',
                templateUrl: './label-widget.component.html',
                styleUrls: ['./label-widget.component.scss']
            }]
    }], function () { return []; }, { widget: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
const LabelWidget = {
    type: 'label',
    component: LabelWidgetComponent,
    defaultConfig: [
        { value: "Header", styles: { 'font-family': 'SF Pro Text-Heavy', 'font-size': '40px', 'text-align': 'left', color: '#707070', opacity: 100 } },
        { value: "Sub Header", styles: { 'font-family': 'SF Pro Text-Regular', 'font-size': '24px', 'text-align': 'left', color: '#707070', opacity: 100 } },
        { value: "Description", styles: { 'font-family': 'SF Pro Text-Regular', 'font-size': '20px', 'text-align': 'left', color: '#707070', opacity: 100 } },
        { value: "Detail", styles: { 'font-family': 'SF Pro Text-Regular', 'font-size': '16px', 'text-align': 'left', color: '#707070', opacity: 100 } }
    ]
};


/***/ }),

/***/ "../widgets/src/lib/components/link-icon-widget/link-icon-widget.component.ts":
/*!************************************************************************************!*\
  !*** ../widgets/src/lib/components/link-icon-widget/link-icon-widget.component.ts ***!
  \************************************************************************************/
/*! exports provided: LinkIconWidgetComponent, LinkIconWidget */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkIconWidgetComponent", function() { return LinkIconWidgetComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkIconWidget", function() { return LinkIconWidget; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function LinkIconWidgetComponent_i_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 3);
} if (rf & 2) {
    const ctx_r136 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r136.widget.config == null ? null : ctx_r136.widget.config.faLeft);
} }
function LinkIconWidgetComponent_i_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 4);
} if (rf & 2) {
    const ctx_r137 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r137.widget.config == null ? null : ctx_r137.widget.config.faRight);
} }
class LinkIconWidgetComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    onClick(url) {
        if (url) {
            this.router.navigateByUrl(url);
        }
    }
    canActivate(filed) {
        return this.widget.config.hasOwnProperty(filed);
    }
}
LinkIconWidgetComponent.ɵfac = function LinkIconWidgetComponent_Factory(t) { return new (t || LinkIconWidgetComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
LinkIconWidgetComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LinkIconWidgetComponent, selectors: [["lib-link-icon-widget"]], inputs: { widget: "widget" }, decls: 4, vars: 5, consts: [[1, "d-flex", 3, "click"], ["class", "pull-right", 3, "class", 4, "ngIf"], ["class", "pull-left", 3, "class", 4, "ngIf"], [1, "pull-right"], [1, "pull-left"]], template: function LinkIconWidgetComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LinkIconWidgetComponent_Template_div_click_0_listener() { return ctx.onClick(ctx.widget.config == null ? null : ctx.widget.config.url); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LinkIconWidgetComponent_i_1_Template, 1, 2, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, LinkIconWidgetComponent_i_3_Template, 1, 2, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](ctx.widget.config == null ? null : ctx.widget.config.styles);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.canActivate("faLeft"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.widget.config == null ? null : ctx.widget.config.value, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.canActivate("faRight"));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: ["@media only screen and (min-width: 1366px) {\n  [_nghost-%COMP%] {\n    zoom: 0.8;\n  }\n}\n@media only screen and (min-width: 1400px) {\n  [_nghost-%COMP%] {\n    zoom: 0.8;\n  }\n}\n@media only screen and (min-width: 1440px) {\n  [_nghost-%COMP%] {\n    zoom: 0.85;\n  }\n}\n@media only screen and (min-width: 1600px) {\n  [_nghost-%COMP%] {\n    zoom: 0.9;\n  }\n}\n@media only screen and (min-width: 1680px) {\n  [_nghost-%COMP%] {\n    zoom: 0.95;\n  }\n}\n@media only screen and (min-width: 1920px) {\n  [_nghost-%COMP%] {\n    zoom: 1;\n  }\n}\ndiv[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\ndiv[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3dpZGdldHMvc3JjL2xpYi9jb21wb25lbnRzL2xpbmstaWNvbi13aWRnZXQvRTpcXFByb2plY3RcXGFpcy1wb2MvcHJvamVjdHNcXHdpZGdldHNcXHNyY1xcbGliXFxzaGFyZWRcXGNvbW1vblxcX3pvb20uc2NzcyIsInByb2plY3RzL3dpZGdldHMvc3JjL2xpYi9jb21wb25lbnRzL2xpbmstaWNvbi13aWRnZXQvbGluay1pY29uLXdpZGdldC5jb21wb25lbnQuc2NzcyIsInByb2plY3RzL3dpZGdldHMvc3JjL2xpYi9jb21wb25lbnRzL2xpbmstaWNvbi13aWRnZXQvRTpcXFByb2plY3RcXGFpcy1wb2MvcHJvamVjdHNcXHdpZGdldHNcXHNyY1xcbGliXFxjb21wb25lbnRzXFxsaW5rLWljb24td2lkZ2V0XFxsaW5rLWljb24td2lkZ2V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBREY7SUFFSSxTQUFBO0VDQ0Y7QUFDRjtBRENFO0VBTEY7SUFNSSxTQUFBO0VDRUY7QUFDRjtBREFFO0VBVEY7SUFVSSxVQUFBO0VDR0Y7QUFDRjtBRERFO0VBYkY7SUFjSSxTQUFBO0VDSUY7QUFDRjtBREZFO0VBakJGO0lBa0JJLFVBQUE7RUNLRjtBQUNGO0FESEU7RUFyQkY7SUFzQkksT0FBQTtFQ01GO0FBQ0Y7QUMzQkE7RUFDRSxlQUFBO0FEOEJGO0FDNUJFO0VBQ0Usa0JBQUE7QUQ4QkoiLCJmaWxlIjoicHJvamVjdHMvd2lkZ2V0cy9zcmMvbGliL2NvbXBvbmVudHMvbGluay1pY29uLXdpZGdldC9saW5rLWljb24td2lkZ2V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTM2NnB4KSB7XHJcbiAgICB6b29tOiAwLjg7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE0MDBweCkge1xyXG4gICAgem9vbTogMC44O1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNDQwcHgpIHtcclxuICAgIHpvb206IDAuODU7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE2MDBweCkge1xyXG4gICAgem9vbTogMC45O1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNjgwcHgpIHtcclxuICAgIHpvb206IDAuOTU7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE5MjBweCkge1xyXG4gICAgem9vbTogMTtcclxuICB9XHJcbn1cclxuIiwiQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMzY2cHgpIHtcbiAgOmhvc3Qge1xuICAgIHpvb206IDAuODtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNDAwcHgpIHtcbiAgOmhvc3Qge1xuICAgIHpvb206IDAuODtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNDQwcHgpIHtcbiAgOmhvc3Qge1xuICAgIHpvb206IDAuODU7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTYwMHB4KSB7XG4gIDpob3N0IHtcbiAgICB6b29tOiAwLjk7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTY4MHB4KSB7XG4gIDpob3N0IHtcbiAgICB6b29tOiAwLjk1O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE5MjBweCkge1xuICA6aG9zdCB7XG4gICAgem9vbTogMTtcbiAgfVxufVxuXG5kaXYge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5kaXYgaSB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn0iLCJAaW1wb3J0ICcuLi8uLi9zaGFyZWQvY29tbW9uL3pvb20nO1xyXG5cclxuZGl2IHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gIGkge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LinkIconWidgetComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'lib-link-icon-widget',
                templateUrl: './link-icon-widget.component.html',
                styleUrls: ['./link-icon-widget.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, { widget: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
const LinkIconWidget = {
    type: 'link',
    component: LinkIconWidgetComponent,
    defaultConfig: []
};


/***/ }),

/***/ "../widgets/src/lib/components/link-widget/link-widget.component.ts":
/*!**************************************************************************!*\
  !*** ../widgets/src/lib/components/link-widget/link-widget.component.ts ***!
  \**************************************************************************/
/*! exports provided: LinkWidgetComponent, LinkWidget */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkWidgetComponent", function() { return LinkWidgetComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkWidget", function() { return LinkWidget; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_common_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/common/util */ "../widgets/src/lib/shared/common/util.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function LinkWidgetComponent_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 2);
} if (rf & 2) {
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r31.widget.config == null ? null : ctx_r31.widget.config.faRight);
} }
const _c0 = function (a0) { return { "color": a0 }; };
class LinkWidgetComponent {
    constructor() { }
    ngOnInit() { }
    getColor() {
        // tslint:disable-next-line: max-line-length
        return _shared_common_util__WEBPACK_IMPORTED_MODULE_1__["Util"].convertColorOpacity(this.widget.config.styles && this.widget.config.styles.color, this.widget.config.styles && this.widget.config.styles.opacity);
    }
    // Check hasOwnProperty
    canActivate(filed) {
        return this.widget.config.hasOwnProperty(filed);
    }
}
LinkWidgetComponent.ɵfac = function LinkWidgetComponent_Factory(t) { return new (t || LinkWidgetComponent)(); };
LinkWidgetComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LinkWidgetComponent, selectors: [["lib-link-widget"]], inputs: { widget: "widget" }, decls: 3, vars: 8, consts: [[1, "link-widget-content", "d-block", 3, "href", "ngStyle"], ["class", "pull-right", 3, "class", 4, "ngIf"], [1, "pull-right"]], template: function LinkWidgetComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LinkWidgetComponent_i_2_Template, 1, 2, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](ctx.widget.config == null ? null : ctx.widget.config.styles);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.widget.config == null ? null : ctx.widget.config.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, ctx.getColor()));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.widget.config == null ? null : ctx.widget.config.value, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.canActivate("faRight"));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: ["@media only screen and (min-width: 1366px) {\n  [_nghost-%COMP%] {\n    zoom: 0.8;\n  }\n}\n@media only screen and (min-width: 1400px) {\n  [_nghost-%COMP%] {\n    zoom: 0.8;\n  }\n}\n@media only screen and (min-width: 1440px) {\n  [_nghost-%COMP%] {\n    zoom: 0.85;\n  }\n}\n@media only screen and (min-width: 1600px) {\n  [_nghost-%COMP%] {\n    zoom: 0.9;\n  }\n}\n@media only screen and (min-width: 1680px) {\n  [_nghost-%COMP%] {\n    zoom: 0.95;\n  }\n}\n@media only screen and (min-width: 1920px) {\n  [_nghost-%COMP%] {\n    zoom: 1;\n  }\n}\n.link-widget-content[_ngcontent-%COMP%] {\n  width: 95%;\n  height: 95%;\n  display: flex;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3dpZGdldHMvc3JjL2xpYi9jb21wb25lbnRzL2xpbmstd2lkZ2V0L0U6XFxQcm9qZWN0XFxhaXMtcG9jL3Byb2plY3RzXFx3aWRnZXRzXFxzcmNcXGxpYlxcc2hhcmVkXFxjb21tb25cXF96b29tLnNjc3MiLCJwcm9qZWN0cy93aWRnZXRzL3NyYy9saWIvY29tcG9uZW50cy9saW5rLXdpZGdldC9saW5rLXdpZGdldC5jb21wb25lbnQuc2NzcyIsInByb2plY3RzL3dpZGdldHMvc3JjL2xpYi9jb21wb25lbnRzL2xpbmstd2lkZ2V0L0U6XFxQcm9qZWN0XFxhaXMtcG9jL3Byb2plY3RzXFx3aWRnZXRzXFxzcmNcXGxpYlxcY29tcG9uZW50c1xcbGluay13aWRnZXRcXGxpbmstd2lkZ2V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBREY7SUFFSSxTQUFBO0VDQ0Y7QUFDRjtBRENFO0VBTEY7SUFNSSxTQUFBO0VDRUY7QUFDRjtBREFFO0VBVEY7SUFVSSxVQUFBO0VDR0Y7QUFDRjtBRERFO0VBYkY7SUFjSSxTQUFBO0VDSUY7QUFDRjtBREZFO0VBakJGO0lBa0JJLFVBQUE7RUNLRjtBQUNGO0FESEU7RUFyQkY7SUFzQkksT0FBQTtFQ01GO0FBQ0Y7QUMzQkE7RUFDRSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBRDhCRiIsImZpbGUiOiJwcm9qZWN0cy93aWRnZXRzL3NyYy9saWIvY29tcG9uZW50cy9saW5rLXdpZGdldC9saW5rLXdpZGdldC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEzNjZweCkge1xyXG4gICAgem9vbTogMC44O1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNDAwcHgpIHtcclxuICAgIHpvb206IDAuODtcclxuICB9XHJcblxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTQ0MHB4KSB7XHJcbiAgICB6b29tOiAwLjg1O1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNjAwcHgpIHtcclxuICAgIHpvb206IDAuOTtcclxuICB9XHJcblxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTY4MHB4KSB7XHJcbiAgICB6b29tOiAwLjk1O1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxOTIwcHgpIHtcclxuICAgIHpvb206IDE7XHJcbiAgfVxyXG59XHJcbiIsIkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTM2NnB4KSB7XG4gIDpob3N0IHtcbiAgICB6b29tOiAwLjg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTQwMHB4KSB7XG4gIDpob3N0IHtcbiAgICB6b29tOiAwLjg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTQ0MHB4KSB7XG4gIDpob3N0IHtcbiAgICB6b29tOiAwLjg1O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE2MDBweCkge1xuICA6aG9zdCB7XG4gICAgem9vbTogMC45O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE2ODBweCkge1xuICA6aG9zdCB7XG4gICAgem9vbTogMC45NTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxOTIwcHgpIHtcbiAgOmhvc3Qge1xuICAgIHpvb206IDE7XG4gIH1cbn1cblxuLmxpbmstd2lkZ2V0LWNvbnRlbnQge1xuICB3aWR0aDogOTUlO1xuICBoZWlnaHQ6IDk1JTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn0iLCJAaW1wb3J0ICcuLi8uLi9zaGFyZWQvY29tbW9uL3pvb20nO1xyXG5cclxuLmxpbmstd2lkZ2V0LWNvbnRlbnQge1xyXG4gIHdpZHRoOiA5NSU7XHJcbiAgaGVpZ2h0OiA5NSU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LinkWidgetComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'lib-link-widget',
                templateUrl: './link-widget.component.html',
                styleUrls: ['./link-widget.component.scss']
            }]
    }], function () { return []; }, { widget: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
const LinkWidget = {
    type: 'link',
    component: LinkWidgetComponent,
    defaultConfig: []
};


/***/ }),

/***/ "../widgets/src/lib/components/map-widget/map-widget.component.ts":
/*!************************************************************************!*\
  !*** ../widgets/src/lib/components/map-widget/map-widget.component.ts ***!
  \************************************************************************/
/*! exports provided: MapWidgetComponent, MapWidget */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapWidgetComponent", function() { return MapWidgetComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapWidget", function() { return MapWidget; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @agm/core */ "../../node_modules/@agm/core/__ivy_ngcc__/fesm2015/agm-core.js");



class MapWidgetComponent {
    constructor() { }
    ngOnInit() {
        this.location = {
            latitude: 9.17682,
            longitude: 109.32094
        };
    }
}
MapWidgetComponent.ɵfac = function MapWidgetComponent_Factory(t) { return new (t || MapWidgetComponent)(); };
MapWidgetComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MapWidgetComponent, selectors: [["lib-map-widget"]], inputs: { widget: "widget", gridInfo: "gridInfo" }, decls: 2, vars: 2, consts: [[1, "divMapMain", "v-100", "h-100"], [3, "latitude", "longitude"]], template: function MapWidgetComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "agm-map", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("latitude", ctx.location.latitude)("longitude", ctx.location.longitude);
    } }, directives: [_agm_core__WEBPACK_IMPORTED_MODULE_1__["AgmMap"]], styles: [".divMapMain[_ngcontent-%COMP%]{\r\n    display: block;\r\n    border: solid 1px black;\r\n    color: white;\r\n}\r\n\r\nagm-map[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 100%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3dpZGdldHMvc3JjL2xpYi9jb21wb25lbnRzL21hcC13aWRnZXQvbWFwLXdpZGdldC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztJQUNkLHVCQUF1QjtJQUN2QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEIiLCJmaWxlIjoicHJvamVjdHMvd2lkZ2V0cy9zcmMvbGliL2NvbXBvbmVudHMvbWFwLXdpZGdldC9tYXAtd2lkZ2V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGl2TWFwTWFpbntcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggYmxhY2s7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbmFnbS1tYXAge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapWidgetComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'lib-map-widget',
                templateUrl: './map-widget.component.html',
                styleUrls: ['./map-widget.component.css']
            }]
    }], function () { return []; }, { widget: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], gridInfo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
const MapWidget = {
    name: 'Map',
    type: 'component',
    component: MapWidgetComponent,
    defaultConfig: [{
            lat: '1231',
            lng: '12312'
        }]
};


/***/ }),

/***/ "../widgets/src/lib/components/role-management/role-management.component.ts":
/*!**********************************************************************************!*\
  !*** ../widgets/src/lib/components/role-management/role-management.component.ts ***!
  \**********************************************************************************/
/*! exports provided: RoleManagementComponent, RoleManagementWidget */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleManagementComponent", function() { return RoleManagementComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleManagementWidget", function() { return RoleManagementWidget; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var primeng_tristatecheckbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/tristatecheckbox */ "../../node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-tristatecheckbox.js");
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/checkbox */ "../../node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-checkbox.js");







function RoleManagementComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    const _r188 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RoleManagementComponent_ng_container_5_Template_div_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r188); const row_r185 = ctx.$implicit; const ctx_r187 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r187.selectedRole = row_r185; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Role");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RoleManagementComponent_ng_container_5_Template_i_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r188); const row_r185 = ctx.$implicit; const ctx_r189 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r189.onDeleteRole(row_r185); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const row_r185 = ctx.$implicit;
    const last_r186 = ctx.last;
    const ctx_r183 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", row_r185.id == ctx_r183.selectedRole.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r185 == null ? null : row_r185.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("invisible", !last_r186);
} }
function RoleManagementComponent_ul_31_li_7_Template(rf, ctx) { if (rf & 1) {
    const _r194 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p-checkbox", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RoleManagementComponent_ul_31_li_7_Template_p_checkbox_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r194); const child_r192 = ctx.$implicit; return child_r192.value = $event; })("onChange", function RoleManagementComponent_ul_31_li_7_Template_p_checkbox_onChange_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r194); const item_r190 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r195 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r195.onChangeCbox(item_r190); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const child_r192 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](child_r192 == null ? null : child_r192.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", child_r192.value)("binary", true);
} }
function RoleManagementComponent_ul_31_Template(rf, ctx) { if (rf & 1) {
    const _r198 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p-triStateCheckbox", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RoleManagementComponent_ul_31_Template_p_triStateCheckbox_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r198); const item_r190 = ctx.$implicit; return item_r190.value = $event; })("onChange", function RoleManagementComponent_ul_31_Template_p_triStateCheckbox_onChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r198); const item_r190 = ctx.$implicit; const ctx_r199 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r199.onChangeTriStateCbox(item_r190, $event.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, RoleManagementComponent_ul_31_li_7_Template, 4, 3, "li", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r190 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r190 == null ? null : item_r190.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", item_r190.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r190.children);
} }
class RoleManagementComponent {
    constructor() {
        this.roles = [
            {
                id: 1,
                name: 'Admin',
                color: '#212121',
                description: '-'
            },
            {
                id: 2,
                name: 'User',
                color: '#C58ECC',
                description: '-'
            },
            {
                id: 3,
                name: '{Role Name}',
                color: '#E8829A',
                description: '-'
            }
        ];
        this.permissions = [
            {
                id: 1,
                value: true,
                name: 'Dashboard',
                children: [
                    { id: 1, name: 'View Dashboard', value: true },
                    { id: 2, name: 'Edit Dashboard', value: true },
                    { id: 3, name: 'Add/Delete Member', value: true }
                ]
            },
            {
                id: 2,
                value: null,
                name: 'All Thing',
                children: [
                    { id: 1, name: 'View All Thing', value: false },
                    { id: 2, name: 'View Thing Detail', value: false }
                ]
            },
            {
                id: 3,
                value: false,
                name: 'User Management',
                children: [
                    { id: 1, name: 'View User Management', value: false },
                    { id: 2, name: 'Edit Role Management', value: true },
                    { id: 3, name: 'Create/Delete Member', value: false }
                ]
            },
            {
                id: 4,
                value: true,
                name: 'User Information',
                children: [
                    { id: 1, name: 'View User Information', value: true },
                    { id: 2, name: 'Edit User Information', value: true },
                    { id: 2, name: 'Change Password', value: true }
                ]
            },
        ];
    }
    ngOnInit() {
        this.selectedRole = this.roles[0];
        this.validate();
    }
    validate() {
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
        });
    }
    get f() { return this.formGroup.controls; }
    onDeleteRole(item) {
        console.log('Delete role:', item);
    }
    onAddNewRole() {
        console.log('Add new role');
    }
    onChangeTriStateCbox(item, value) {
        // Set unselect all for children
        if (value == null) {
            this.permissions = this.permissions.map(m1 => {
                const update = m1['children'].map(m2 => (Object.assign(Object.assign({}, m2), { value: false })));
                return m1.id === item.id ? Object.assign(Object.assign({}, m1), { children: update }) : m1;
            });
        }
    }
    onChangeCbox(item) {
        // Set select or unselect for parent
        this.permissions = this.permissions.map(m1 => {
            const values = m1['children'].map(el => el.value);
            if (m1.id === item.id) {
                if (values.every(e => e === true)) {
                    // If select all children
                    return Object.assign(Object.assign({}, m1), { value: true });
                }
                else if (values.every(e => e === false)) {
                    // If children null
                    return Object.assign(Object.assign({}, m1), { value: null });
                }
                else {
                    // If a few selected
                    return Object.assign(Object.assign({}, m1), { value: false });
                }
            }
            else {
                return m1;
            }
        });
    }
}
RoleManagementComponent.ɵfac = function RoleManagementComponent_Factory(t) { return new (t || RoleManagementComponent)(); };
RoleManagementComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RoleManagementComponent, selectors: [["lib-role-management"]], decls: 32, vars: 5, consts: [[1, "container", "p-0"], [1, "d-flex", "justify-content-around"], [1, "col-md-4", "p-0", "col_1"], [4, "ngFor", "ngForOf"], [1, "d-flex", "align-items-center", "add_new", 3, "click"], [1, "feather-plus"], [1, "line_vertical"], [1, "col-md-4", "p-0", "col_2"], [3, "formGroup"], [1, "form-group"], ["for", "name"], [1, "input_icon_container"], [1, "fas", "fa-pencil-alt"], ["type", "text", "formControlName", "name", "id", "name", "placeholder", "Enter Name", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "description"], ["type", "text", "formControlName", "description", "id", "description", "placeholder", "Enter Description", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "col-md-4", "p-0", "col_3"], [1, "permission", "scroll-dark"], ["class", "p-0", 4, "ngFor", "ngForOf"], [1, "role"], [1, "box", 3, "click"], [1, "name"], [1, "fas", "fa-users"], [1, "feather-trash-2", 3, "click"], [1, "p-0"], [1, "d-flex", "justify-content-between", "align-items-center"], [3, "ngModel", "ngModelChange", "onChange"], [1, "nested"], [3, "ngModel", "binary", "ngModelChange", "onChange"]], template: function RoleManagementComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Role");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, RoleManagementComponent_ng_container_5_Template, 10, 5, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RoleManagementComponent_Template_h3_click_6_listener() { return ctx.onAddNewRole(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Add New Role ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Set up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RoleManagementComponent_Template_input_ngModelChange_19_listener($event) { return ctx.selectedRole.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RoleManagementComponent_Template_input_ngModelChange_25_listener($event) { return ctx.selectedRole.description = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Permission");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, RoleManagementComponent_ul_31_Template, 8, 3, "ul", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.roles);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedRole.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedRole.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.permissions);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], primeng_tristatecheckbox__WEBPACK_IMPORTED_MODULE_3__["TriStateCheckbox"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], primeng_checkbox__WEBPACK_IMPORTED_MODULE_4__["Checkbox"]], styles: ["@charset \"UTF-8\";\n@media only screen and (min-width: 1366px) {\n  [_nghost-%COMP%] {\n    zoom: 0.8;\n  }\n}\n@media only screen and (min-width: 1400px) {\n  [_nghost-%COMP%] {\n    zoom: 0.8;\n  }\n}\n@media only screen and (min-width: 1440px) {\n  [_nghost-%COMP%] {\n    zoom: 0.85;\n  }\n}\n@media only screen and (min-width: 1600px) {\n  [_nghost-%COMP%] {\n    zoom: 0.9;\n  }\n}\n@media only screen and (min-width: 1680px) {\n  [_nghost-%COMP%] {\n    zoom: 0.95;\n  }\n}\n@media only screen and (min-width: 1920px) {\n  [_nghost-%COMP%] {\n    zoom: 1;\n  }\n}\n[_nghost-%COMP%]     p-tristatecheckbox .ui-chkbox-box, [_nghost-%COMP%]     p-checkbox .ui-chkbox-box {\n  color: #000000 !important;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #FFFFFF !important;\n}\n[_nghost-%COMP%]     p-tristatecheckbox .ui-chkbox-box .ui-chkbox-icon, [_nghost-%COMP%]     p-checkbox .ui-chkbox-box .ui-chkbox-icon {\n  font-size: 13px;\n  font-weight: bold;\n  margin-top: 2px;\n}\n[_nghost-%COMP%]     p-tristatecheckbox .ui-state-active .pi-times::before, [_nghost-%COMP%]     p-checkbox .ui-state-active .pi-times::before {\n  content: \"\uE90F\";\n}\n.container[_ngcontent-%COMP%] {\n  width: 1085px;\n}\n.container[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  margin-top: 30px;\n}\n.container[_ngcontent-%COMP%]    > h3[_ngcontent-%COMP%] {\n  color: #FFFFFF;\n  font-size: 20px;\n  font-family: \"SF Pro Text-Bold\";\n  height: 80px;\n  display: flex;\n  align-items: center;\n  margin: 0;\n}\n.container[_ngcontent-%COMP%]   .line_vertical[_ngcontent-%COMP%] {\n  margin: 0 30px;\n  border: 1px solid #E0E0E0;\n  opacity: 0.2;\n  margin-top: 45px;\n}\n.container[_ngcontent-%COMP%]   .col_1[_ngcontent-%COMP%] {\n  max-width: 340px;\n  min-width: 340px;\n  min-height: 90vh;\n}\n.container[_ngcontent-%COMP%]   .col_1[_ngcontent-%COMP%]    > h3[_ngcontent-%COMP%] {\n  line-height: normal;\n  color: #FFFFFF;\n  font-size: 20px;\n  font-family: \"SF Pro Text-Medium\";\n  margin-bottom: 33px;\n}\n.container[_ngcontent-%COMP%]   .col_1[_ngcontent-%COMP%]   .add_new[_ngcontent-%COMP%] {\n  cursor: pointer;\n  margin-top: 30px;\n}\n.container[_ngcontent-%COMP%]   .col_1[_ngcontent-%COMP%]   .add_new[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 24px;\n  margin-right: 10px;\n}\n.container[_ngcontent-%COMP%]   .col_1[_ngcontent-%COMP%]   .role[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 20px;\n}\n.container[_ngcontent-%COMP%]   .col_1[_ngcontent-%COMP%]   .role[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%] {\n  cursor: pointer;\n  min-width: 300px;\n  min-height: 80px;\n  background: #000000;\n  padding-left: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.container[_ngcontent-%COMP%]   .col_1[_ngcontent-%COMP%]   .role[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  height: 45px;\n  display: grid;\n}\n.container[_ngcontent-%COMP%]   .col_1[_ngcontent-%COMP%]   .role[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #FFFFFF;\n  line-height: 1;\n  margin: 0;\n}\n.container[_ngcontent-%COMP%]   .col_1[_ngcontent-%COMP%]   .role[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-child(1) {\n  font-size: 14px;\n  font-family: \"SF Pro Text-Regular\";\n}\n.container[_ngcontent-%COMP%]   .col_1[_ngcontent-%COMP%]   .role[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-child(2) {\n  font-size: 24px;\n  font-family: \"SF Pro Text-Bold\";\n}\n.container[_ngcontent-%COMP%]   .col_1[_ngcontent-%COMP%]   .role[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #9FFFB1;\n  font-size: 28px;\n  padding-right: 52px;\n}\n.container[_ngcontent-%COMP%]   .col_1[_ngcontent-%COMP%]   .role[_ngcontent-%COMP%]   .box.active[_ngcontent-%COMP%] {\n  background: #9FFFB1;\n}\n.container[_ngcontent-%COMP%]   .col_1[_ngcontent-%COMP%]   .role[_ngcontent-%COMP%]   .box.active[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #212121;\n}\n.container[_ngcontent-%COMP%]   .col_1[_ngcontent-%COMP%]   .role[_ngcontent-%COMP%]   .box.active[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #212121;\n}\n.container[_ngcontent-%COMP%]   .col_1[_ngcontent-%COMP%]   .role[_ngcontent-%COMP%]   .feather-trash-2[_ngcontent-%COMP%] {\n  font-size: 24px;\n  margin-left: 20px;\n  cursor: pointer;\n}\n.container[_ngcontent-%COMP%]   .col_2[_ngcontent-%COMP%] {\n  max-width: 300px;\n  min-width: 300px;\n  min-height: 90vh;\n}\n.container[_ngcontent-%COMP%]   .col_2[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #FFFFFF;\n  font-size: 20px;\n  line-height: normal;\n  font-family: \"SF Pro Text-Bold\";\n  margin-bottom: 28px;\n}\n.container[_ngcontent-%COMP%]   .col_2[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: #FFFFFF;\n  font-size: 14px;\n  font-family: \"SF Pro Text-Regular\";\n}\n.container[_ngcontent-%COMP%]   .col_2[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .input_icon_container[_ngcontent-%COMP%] {\n  position: relative;\n}\n.container[_ngcontent-%COMP%]   .col_2[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .input_icon_container[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 15px;\n  right: 20px;\n  font-size: 16px;\n  color: #FFFFFF;\n}\n.container[_ngcontent-%COMP%]   .col_2[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .input_icon_container[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%] {\n  width: 300px;\n  height: 48px;\n  border-radius: 6px;\n  color: #FFFFFF;\n  background: #FFFFFF1A 0% 0% no-repeat padding-box;\n  padding-right: 50px;\n  font-size: 16px;\n  border: 1px solid #EAEAEA;\n  font-family: \"SF Pro Text-Regular\";\n}\n.container[_ngcontent-%COMP%]   .col_2[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .input_icon_container[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]::-webkit-input-placeholder {\n  opacity: 0.3;\n}\n.container[_ngcontent-%COMP%]   .col_2[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .input_icon_container[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]::-moz-placeholder {\n  opacity: 0.3;\n}\n.container[_ngcontent-%COMP%]   .col_2[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .input_icon_container[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]:-ms-input-placeholder {\n  opacity: 0.3;\n}\n.container[_ngcontent-%COMP%]   .col_2[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .input_icon_container[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]::-ms-input-placeholder {\n  opacity: 0.3;\n}\n.container[_ngcontent-%COMP%]   .col_2[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .input_icon_container[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]::placeholder {\n  opacity: 0.3;\n}\n.container[_ngcontent-%COMP%]   .col_3[_ngcontent-%COMP%] {\n  max-width: 320px;\n  min-width: 320px;\n  margin-top: 54px;\n}\n.container[_ngcontent-%COMP%]   .col_3[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  color: #FFFFFF;\n  font-size: 14px;\n  line-height: normal;\n  font-family: \"SF Pro Text-Regular\";\n}\n.container[_ngcontent-%COMP%]   .col_3[_ngcontent-%COMP%]   .permission[_ngcontent-%COMP%] {\n  max-height: 80vh;\n  padding-right: 20px;\n}\n.container[_ngcontent-%COMP%]   .col_3[_ngcontent-%COMP%]   .permission[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  color: #FFFFFF;\n  font-size: 16px;\n  font-family: \"SF Pro Text-Medium\";\n  list-style-type: none;\n  margin: 0;\n}\n.container[_ngcontent-%COMP%]   .col_3[_ngcontent-%COMP%]   .permission[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  height: 45px;\n}\n.container[_ngcontent-%COMP%]   .col_3[_ngcontent-%COMP%]   .permission[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  padding-left: 20px;\n}\n.container[_ngcontent-%COMP%]   .col_3[_ngcontent-%COMP%]   .permission[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  height: 45px;\n  align-items: center;\n  display: flex;\n  justify-content: space-between;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3dpZGdldHMvc3JjL2xpYi9jb21wb25lbnRzL3JvbGUtbWFuYWdlbWVudC9yb2xlLW1hbmFnZW1lbnQuY29tcG9uZW50LnNjc3MiLCJwcm9qZWN0cy93aWRnZXRzL3NyYy9saWIvY29tcG9uZW50cy9yb2xlLW1hbmFnZW1lbnQvRTpcXFByb2plY3RcXGFpcy1wb2MvcHJvamVjdHNcXHdpZGdldHNcXHNyY1xcbGliXFxzaGFyZWRcXGNvbW1vblxcX3pvb20uc2NzcyIsInByb2plY3RzL3dpZGdldHMvc3JjL2xpYi9jb21wb25lbnRzL3JvbGUtbWFuYWdlbWVudC9FOlxcUHJvamVjdFxcYWlzLXBvYy9wcm9qZWN0c1xcd2lkZ2V0c1xcc3JjXFxsaWJcXGNvbXBvbmVudHNcXHJvbGUtbWFuYWdlbWVudFxccm9sZS1tYW5hZ2VtZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0NkO0VBREY7SUFFSSxTQUFBO0VERUY7QUFDRjtBQ0FFO0VBTEY7SUFNSSxTQUFBO0VER0Y7QUFDRjtBQ0RFO0VBVEY7SUFVSSxVQUFBO0VESUY7QUFDRjtBQ0ZFO0VBYkY7SUFjSSxTQUFBO0VES0Y7QUFDRjtBQ0hFO0VBakJGO0lBa0JJLFVBQUE7RURNRjtBQUNGO0FDSkU7RUFyQkY7SUFzQkksT0FBQTtFRE9GO0FBQ0Y7QUV4Qkk7O0VBQ0UseUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG9DQUFBO0FGNEJOO0FFMUJNOztFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUY2QlI7QUV2QlE7O0VBQ0UsWUFBQTtBRjBCVjtBRW5CQTtFQUNFLGFBQUE7QUZzQkY7QUVwQkU7RUFDRSxnQkFBQTtBRnNCSjtBRW5CRTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsK0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtBRnFCSjtBRWxCRTtFQUNFLGNBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBRm9CSjtBRWpCRTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBRm1CSjtBRWpCSTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQ0FBQTtFQUNBLG1CQUFBO0FGbUJOO0FFaEJJO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FGa0JOO0FFaEJNO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0FGa0JSO0FFZEk7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FGZ0JOO0FFZE07RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBRmdCUjtBRWRRO0VBQ0UsWUFBQTtFQUNBLGFBQUE7QUZnQlY7QUVkVTtFQUNFLGNBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtBRmdCWjtBRWRZO0VBQ0UsZUFBQTtFQUNBLGtDQUFBO0FGZ0JkO0FFYlk7RUFDRSxlQUFBO0VBQ0EsK0JBQUE7QUZlZDtBRVZRO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBRllWO0FFVFE7RUFDRSxtQkFBQTtBRldWO0FFUlk7RUFDRSxjQUFBO0FGVWQ7QUVOVTtFQUNFLGNBQUE7QUZRWjtBRUhNO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBRktSO0FFQUU7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUZFSjtBRUFJO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLCtCQUFBO0VBQ0EsbUJBQUE7QUZFTjtBRUVNO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxrQ0FBQTtBRkFSO0FFR007RUFDRSxrQkFBQTtBRkRSO0FFR1E7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUZEVjtBRUlRO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxpREFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0NBQUE7QUZGVjtBRUlVO0VBQ0UsWUFBQTtBRkZaO0FFQ1U7RUFDRSxZQUFBO0FGRlo7QUVDVTtFQUNFLFlBQUE7QUZGWjtBRUNVO0VBQ0UsWUFBQTtBRkZaO0FFQ1U7RUFDRSxZQUFBO0FGRlo7QUVVRTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBRlJKO0FFVUk7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0NBQUE7QUZSTjtBRVdJO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtBRlROO0FFVU07RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlDQUFBO0VBQ0EscUJBQUE7RUFDQSxTQUFBO0FGUlI7QUVXVTtFQUNFLFlBQUE7QUZUWjtBRVlVO0VBQ0Usa0JBQUE7QUZWWjtBRVdZO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0FGVGQiLCJmaWxlIjoicHJvamVjdHMvd2lkZ2V0cy9zcmMvbGliL2NvbXBvbmVudHMvcm9sZS1tYW5hZ2VtZW50L3JvbGUtbWFuYWdlbWVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTM2NnB4KSB7XG4gIDpob3N0IHtcbiAgICB6b29tOiAwLjg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTQwMHB4KSB7XG4gIDpob3N0IHtcbiAgICB6b29tOiAwLjg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTQ0MHB4KSB7XG4gIDpob3N0IHtcbiAgICB6b29tOiAwLjg1O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE2MDBweCkge1xuICA6aG9zdCB7XG4gICAgem9vbTogMC45O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE2ODBweCkge1xuICA6aG9zdCB7XG4gICAgem9vbTogMC45NTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxOTIwcHgpIHtcbiAgOmhvc3Qge1xuICAgIHpvb206IDE7XG4gIH1cbn1cblxuOmhvc3QgOjpuZy1kZWVwIHAtdHJpc3RhdGVjaGVja2JveCAudWktY2hrYm94LWJveCxcbjpob3N0IDo6bmctZGVlcCBwLWNoZWNrYm94IC51aS1jaGtib3gtYm94IHtcbiAgY29sb3I6ICMwMDAwMDAgIWltcG9ydGFudDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkYgIWltcG9ydGFudDtcbn1cbjpob3N0IDo6bmctZGVlcCBwLXRyaXN0YXRlY2hlY2tib3ggLnVpLWNoa2JveC1ib3ggLnVpLWNoa2JveC1pY29uLFxuOmhvc3QgOjpuZy1kZWVwIHAtY2hlY2tib3ggLnVpLWNoa2JveC1ib3ggLnVpLWNoa2JveC1pY29uIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLXRvcDogMnB4O1xufVxuOmhvc3QgOjpuZy1kZWVwIHAtdHJpc3RhdGVjaGVja2JveCAudWktc3RhdGUtYWN0aXZlIC5waS10aW1lczo6YmVmb3JlLFxuOmhvc3QgOjpuZy1kZWVwIHAtY2hlY2tib3ggLnVpLXN0YXRlLWFjdGl2ZSAucGktdGltZXM6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7qSPXCI7XG59XG5cbi5jb250YWluZXIge1xuICB3aWR0aDogMTA4NXB4O1xufVxuLmNvbnRhaW5lciA+IGRpdiB7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG59XG4uY29udGFpbmVyID4gaDMge1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LWZhbWlseTogXCJTRiBQcm8gVGV4dC1Cb2xkXCI7XG4gIGhlaWdodDogODBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiAwO1xufVxuLmNvbnRhaW5lciAubGluZV92ZXJ0aWNhbCB7XG4gIG1hcmdpbjogMCAzMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjRTBFMEUwO1xuICBvcGFjaXR5OiAwLjI7XG4gIG1hcmdpbi10b3A6IDQ1cHg7XG59XG4uY29udGFpbmVyIC5jb2xfMSB7XG4gIG1heC13aWR0aDogMzQwcHg7XG4gIG1pbi13aWR0aDogMzQwcHg7XG4gIG1pbi1oZWlnaHQ6IDkwdmg7XG59XG4uY29udGFpbmVyIC5jb2xfMSA+IGgzIHtcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC1mYW1pbHk6IFwiU0YgUHJvIFRleHQtTWVkaXVtXCI7XG4gIG1hcmdpbi1ib3R0b206IDMzcHg7XG59XG4uY29udGFpbmVyIC5jb2xfMSAuYWRkX25ldyB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cbi5jb250YWluZXIgLmNvbF8xIC5hZGRfbmV3IGkge1xuICBmb250LXNpemU6IDI0cHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbi5jb250YWluZXIgLmNvbF8xIC5yb2xlIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4uY29udGFpbmVyIC5jb2xfMSAucm9sZSAuYm94IHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtaW4td2lkdGg6IDMwMHB4O1xuICBtaW4taGVpZ2h0OiA4MHB4O1xuICBiYWNrZ3JvdW5kOiAjMDAwMDAwO1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5jb250YWluZXIgLmNvbF8xIC5yb2xlIC5ib3ggLm5hbWUge1xuICBoZWlnaHQ6IDQ1cHg7XG4gIGRpc3BsYXk6IGdyaWQ7XG59XG4uY29udGFpbmVyIC5jb2xfMSAucm9sZSAuYm94IC5uYW1lIHAge1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIG1hcmdpbjogMDtcbn1cbi5jb250YWluZXIgLmNvbF8xIC5yb2xlIC5ib3ggLm5hbWUgcDpudGgtY2hpbGQoMSkge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtZmFtaWx5OiBcIlNGIFBybyBUZXh0LVJlZ3VsYXJcIjtcbn1cbi5jb250YWluZXIgLmNvbF8xIC5yb2xlIC5ib3ggLm5hbWUgcDpudGgtY2hpbGQoMikge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtZmFtaWx5OiBcIlNGIFBybyBUZXh0LUJvbGRcIjtcbn1cbi5jb250YWluZXIgLmNvbF8xIC5yb2xlIC5ib3ggaSB7XG4gIGNvbG9yOiAjOUZGRkIxO1xuICBmb250LXNpemU6IDI4cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDUycHg7XG59XG4uY29udGFpbmVyIC5jb2xfMSAucm9sZSAuYm94LmFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6ICM5RkZGQjE7XG59XG4uY29udGFpbmVyIC5jb2xfMSAucm9sZSAuYm94LmFjdGl2ZSAubmFtZSBwIHtcbiAgY29sb3I6ICMyMTIxMjE7XG59XG4uY29udGFpbmVyIC5jb2xfMSAucm9sZSAuYm94LmFjdGl2ZSBpIHtcbiAgY29sb3I6ICMyMTIxMjE7XG59XG4uY29udGFpbmVyIC5jb2xfMSAucm9sZSAuZmVhdGhlci10cmFzaC0yIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmNvbnRhaW5lciAuY29sXzIge1xuICBtYXgtd2lkdGg6IDMwMHB4O1xuICBtaW4td2lkdGg6IDMwMHB4O1xuICBtaW4taGVpZ2h0OiA5MHZoO1xufVxuLmNvbnRhaW5lciAuY29sXzIgaDMge1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICBmb250LWZhbWlseTogXCJTRiBQcm8gVGV4dC1Cb2xkXCI7XG4gIG1hcmdpbi1ib3R0b206IDI4cHg7XG59XG4uY29udGFpbmVyIC5jb2xfMiAuZm9ybS1ncm91cCBsYWJlbCB7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtZmFtaWx5OiBcIlNGIFBybyBUZXh0LVJlZ3VsYXJcIjtcbn1cbi5jb250YWluZXIgLmNvbF8yIC5mb3JtLWdyb3VwIC5pbnB1dF9pY29uX2NvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5jb250YWluZXIgLmNvbF8yIC5mb3JtLWdyb3VwIC5pbnB1dF9pY29uX2NvbnRhaW5lciBpIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDE1cHg7XG4gIHJpZ2h0OiAyMHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjRkZGRkZGO1xufVxuLmNvbnRhaW5lciAuY29sXzIgLmZvcm0tZ3JvdXAgLmlucHV0X2ljb25fY29udGFpbmVyIGlucHV0W3R5cGU9dGV4dF0ge1xuICB3aWR0aDogMzAwcHg7XG4gIGhlaWdodDogNDhweDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgYmFja2dyb3VuZDogI0ZGRkZGRjFBIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcbiAgcGFkZGluZy1yaWdodDogNTBweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjRUFFQUVBO1xuICBmb250LWZhbWlseTogXCJTRiBQcm8gVGV4dC1SZWd1bGFyXCI7XG59XG4uY29udGFpbmVyIC5jb2xfMiAuZm9ybS1ncm91cCAuaW5wdXRfaWNvbl9jb250YWluZXIgaW5wdXRbdHlwZT10ZXh0XTo6cGxhY2Vob2xkZXIge1xuICBvcGFjaXR5OiAwLjM7XG59XG4uY29udGFpbmVyIC5jb2xfMyB7XG4gIG1heC13aWR0aDogMzIwcHg7XG4gIG1pbi13aWR0aDogMzIwcHg7XG4gIG1hcmdpbi10b3A6IDU0cHg7XG59XG4uY29udGFpbmVyIC5jb2xfMyA+IHAge1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICBmb250LWZhbWlseTogXCJTRiBQcm8gVGV4dC1SZWd1bGFyXCI7XG59XG4uY29udGFpbmVyIC5jb2xfMyAucGVybWlzc2lvbiB7XG4gIG1heC1oZWlnaHQ6IDgwdmg7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG59XG4uY29udGFpbmVyIC5jb2xfMyAucGVybWlzc2lvbiB1bCB7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtZmFtaWx5OiBcIlNGIFBybyBUZXh0LU1lZGl1bVwiO1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIG1hcmdpbjogMDtcbn1cbi5jb250YWluZXIgLmNvbF8zIC5wZXJtaXNzaW9uIHVsIGxpID4gZGl2IHtcbiAgaGVpZ2h0OiA0NXB4O1xufVxuLmNvbnRhaW5lciAuY29sXzMgLnBlcm1pc3Npb24gdWwgbGkgdWwge1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG59XG4uY29udGFpbmVyIC5jb2xfMyAucGVybWlzc2lvbiB1bCBsaSB1bCBsaSB7XG4gIGhlaWdodDogNDVweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufSIsIjpob3N0IHtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEzNjZweCkge1xyXG4gICAgem9vbTogMC44O1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNDAwcHgpIHtcclxuICAgIHpvb206IDAuODtcclxuICB9XHJcblxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTQ0MHB4KSB7XHJcbiAgICB6b29tOiAwLjg1O1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNjAwcHgpIHtcclxuICAgIHpvb206IDAuOTtcclxuICB9XHJcblxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTY4MHB4KSB7XHJcbiAgICB6b29tOiAwLjk1O1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxOTIwcHgpIHtcclxuICAgIHpvb206IDE7XHJcbiAgfVxyXG59XHJcbiIsIkBpbXBvcnQgJy4uLy4uL3NoYXJlZC9jb21tb24vem9vbSc7XHJcblxyXG46aG9zdCA6Om5nLWRlZXAge1xyXG5cclxuICBwLXRyaXN0YXRlY2hlY2tib3gsXHJcbiAgcC1jaGVja2JveCB7XHJcbiAgICAudWktY2hrYm94LWJveCB7XHJcbiAgICAgIGNvbG9yOiAjMDAwMDAwICFpbXBvcnRhbnQ7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgICAudWktY2hrYm94LWljb24ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAycHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAudWktc3RhdGUtYWN0aXZlIHtcclxuICAgICAgLnBpLXRpbWVzIHtcclxuICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgY29udGVudDogXCJcXGU5MGZcIjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gIHdpZHRoOiAxMDg1cHg7XHJcblxyXG4gICY+ZGl2IHtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgfVxyXG5cclxuICAmPmgzIHtcclxuICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFwiU0YgUHJvIFRleHQtQm9sZFwiO1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG5cclxuICAubGluZV92ZXJ0aWNhbCB7XHJcbiAgICBtYXJnaW46IDAgMzBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNFMEUwRTA7XHJcbiAgICBvcGFjaXR5OiAwLjI7XHJcbiAgICBtYXJnaW4tdG9wOiA0NXB4O1xyXG4gIH1cclxuXHJcbiAgLmNvbF8xIHtcclxuICAgIG1heC13aWR0aDogMzQwcHg7XHJcbiAgICBtaW4td2lkdGg6IDM0MHB4O1xyXG4gICAgbWluLWhlaWdodDogOTB2aDtcclxuXHJcbiAgICAmPmgzIHtcclxuICAgICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgZm9udC1mYW1pbHk6IFwiU0YgUHJvIFRleHQtTWVkaXVtXCI7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDMzcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmFkZF9uZXcge1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcblxyXG4gICAgICBpIHtcclxuICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnJvbGUge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuXHJcbiAgICAgIC5ib3gge1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBtaW4td2lkdGg6IDMwMHB4O1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDgwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzAwMDAwMDtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHJcbiAgICAgICAgLm5hbWUge1xyXG4gICAgICAgICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuXHJcbiAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcblxyXG4gICAgICAgICAgICAmOm50aC1jaGlsZCgxKSB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIlNGIFBybyBUZXh0LVJlZ3VsYXJcIjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJjpudGgtY2hpbGQoMikge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJTRiBQcm8gVGV4dC1Cb2xkXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGkge1xyXG4gICAgICAgICAgY29sb3I6ICM5RkZGQjE7XHJcbiAgICAgICAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA1MnB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJi5hY3RpdmUge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogIzlGRkZCMTtcclxuXHJcbiAgICAgICAgICAubmFtZSB7XHJcbiAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAjMjEyMTIxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgaSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMjEyMTIxO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLmZlYXRoZXItdHJhc2gtMiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmNvbF8yIHtcclxuICAgIG1heC13aWR0aDogMzAwcHg7XHJcbiAgICBtaW4td2lkdGg6IDMwMHB4O1xyXG4gICAgbWluLWhlaWdodDogOTB2aDtcclxuXHJcbiAgICBoMyB7XHJcbiAgICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBcIlNGIFBybyBUZXh0LUJvbGRcIjtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMjhweDtcclxuICAgIH1cclxuXHJcbiAgICAuZm9ybS1ncm91cCB7XHJcbiAgICAgIGxhYmVsIHtcclxuICAgICAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiU0YgUHJvIFRleHQtUmVndWxhclwiO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuaW5wdXRfaWNvbl9jb250YWluZXIge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAgICAgaSB7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICB0b3A6IDE1cHg7XHJcbiAgICAgICAgICByaWdodDogMjBweDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW5wdXRbdHlwZT1cInRleHRcIl0ge1xyXG4gICAgICAgICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgICAgICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGMUEgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG4gICAgICAgICAgcGFkZGluZy1yaWdodDogNTBweDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNFQUVBRUE7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogXCJTRiBQcm8gVGV4dC1SZWd1bGFyXCI7XHJcblxyXG4gICAgICAgICAgJjo6cGxhY2Vob2xkZXIge1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAwLjM7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgLmNvbF8zIHtcclxuICAgIG1heC13aWR0aDogMzIwcHg7XHJcbiAgICBtaW4td2lkdGg6IDMyMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogNTRweDtcclxuXHJcbiAgICAmPnAge1xyXG4gICAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gICAgICBmb250LWZhbWlseTogXCJTRiBQcm8gVGV4dC1SZWd1bGFyXCI7XHJcbiAgICB9XHJcblxyXG4gICAgLnBlcm1pc3Npb24ge1xyXG4gICAgICBtYXgtaGVpZ2h0OiA4MHZoO1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG4gICAgICB1bCB7XHJcbiAgICAgICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIlNGIFBybyBUZXh0LU1lZGl1bVwiO1xyXG4gICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgICAgICBtYXJnaW46IDA7XHJcblxyXG4gICAgICAgIGxpIHtcclxuICAgICAgICAgICY+ZGl2IHtcclxuICAgICAgICAgICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHVsIHtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgICAgICAgICBsaSB7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RoleManagementComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'lib-role-management',
                templateUrl: './role-management.component.html',
                styleUrls: ['./role-management.component.scss']
            }]
    }], function () { return []; }, null); })();
const RoleManagementWidget = {
    type: 'page',
    component: RoleManagementComponent,
    defaultconfig: [],
};


/***/ }),

/***/ "../widgets/src/lib/components/shape-widget/shape-widget.component.ts":
/*!****************************************************************************!*\
  !*** ../widgets/src/lib/components/shape-widget/shape-widget.component.ts ***!
  \****************************************************************************/
/*! exports provided: ShapeWidgetComponent, ShapeWidget */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShapeWidgetComponent", function() { return ShapeWidgetComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShapeWidget", function() { return ShapeWidget; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



const _c0 = function (a0, a1) { return { fill: a0, stroke: a1 }; };
function ShapeWidgetComponent__svg_svg_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "polygon", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](1, _c0, ctx_r69.widget.config.fillEnable ? ctx_r69.widget.config.fill : "none", ctx_r69.widget.config.strokeEnable ? ctx_r69.widget.config.stroke : "none"));
} }
function ShapeWidgetComponent__svg_svg_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "polygon", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](1, _c0, ctx_r70.widget.config.fillEnable ? ctx_r70.widget.config.fill : "none", ctx_r70.widget.config.strokeEnable ? ctx_r70.widget.config.stroke : "none"));
} }
function ShapeWidgetComponent__svg_svg_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "polygon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](1, _c0, ctx_r71.widget.config.fillEnable ? ctx_r71.widget.config.fill : "none", ctx_r71.widget.config.strokeEnable ? ctx_r71.widget.config.stroke : "none"));
} }
function ShapeWidgetComponent__svg_svg_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "circle", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](1, _c0, ctx_r72.widget.config.fillEnable ? ctx_r72.widget.config.fill : "none", ctx_r72.widget.config.strokeEnable ? ctx_r72.widget.config.stroke : "none"));
} }
function ShapeWidgetComponent__svg_svg_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "g", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](1, _c0, ctx_r73.widget.config.fillEnable ? ctx_r73.widget.config.fill : "none", ctx_r73.widget.config.strokeEnable ? ctx_r73.widget.config.stroke : "none"));
} }
function ShapeWidgetComponent__svg_svg_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "g", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](1, _c0, ctx_r74.widget.config.fillEnable ? ctx_r74.widget.config.fill : "none", ctx_r74.widget.config.strokeEnable ? ctx_r74.widget.config.stroke : "none"));
} }
const _c1 = function (a0) { return { transform: a0 }; };
class ShapeWidgetComponent {
    constructor() { }
    ngOnInit() {
    }
    ngOnChange() {
        console.log(this.widget);
    }
}
ShapeWidgetComponent.ɵfac = function ShapeWidgetComponent_Factory(t) { return new (t || ShapeWidgetComponent)(); };
ShapeWidgetComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ShapeWidgetComponent, selectors: [["lib-shape-widget"]], inputs: { widget: "widget" }, decls: 7, vars: 10, consts: [[1, "w-100", "h-100", "position-relative", "d-flex", 3, "ngClass", "ngStyle"], ["class", "align-self-center w-100 h-100", "viewBox", "0 0 100 100", "preserveAspectRatio", "none", "style", "margin:auto;overflow:visible", 4, "ngIf"], ["class", "align-self-center w-100 h-100", "viewBox", "0 0 200 200", "preserveAspectRatio", "none", "style", "margin:auto;overflow:visible", 4, "ngIf"], ["viewBox", "0 0 100 100", "preserveAspectRatio", "none", 1, "align-self-center", "w-100", "h-100", 2, "margin", "auto", "overflow", "visible"], ["points", "50,0 0,100 100,100 50,0", "stroke-width", "3", 3, "ngStyle"], ["points", "0,50 100,50", "stroke-width", "3", 3, "ngStyle"], ["points", "0,0 100,0 100,100 0,100", "stroke-width", "3", 3, "ngStyle"], ["cx", "50", "cy", "50", "r", "50", "stroke-width", "3", 3, "ngStyle"], ["viewBox", "0 0 200 200", "preserveAspectRatio", "none", 1, "align-self-center", "w-100", "h-100", 2, "margin", "auto", "overflow", "visible"], ["transform", "translate(0,200) scale(0.1,-0.1)"], ["stroke-width", "70", "d", "M845 1668 c-104 -222 -156 -323 -170 -329 -11 -4 -159 -29 -330 -54\n            -171 -25 -316 -48 -323 -51 -9 -2 82 -103 230 -255 234 -242 243 -253 240\n            -288 -1 -20 -26 -181 -55 -359 -30 -177 -53 -322 -52 -322 2 0 137 74 301 165\n            165 91 304 165 310 165 7 0 146 -74 310 -165 164 -90 299 -164 300 -162 1 1\n            -24 161 -56 356 l-58 355 241 248 c133 137 243 252 245 256 1 4 -143 29 -320\n            56 -178 27 -331 52 -341 55 -11 4 -72 123 -168 326 -82 175 -151 320 -152 322\n            -2 1 -70 -142 -152 -319z", 3, "ngStyle"], ["stroke-width", "70", "d", "M444 1989 c-182 -30 -347 -184 -410 -383 -60 -191 -38 -389 64 -553\n            30 -49 886 -1043 898 -1043 4 0 791 902 851 975 55 67 87 126 115 210 33 100\n            33 297 1 400 -84 265 -322 433 -560 395 -130 -21 -236 -87 -338 -208 -52 -64\n            -85 -88 -85 -64 0 4 -39 49 -87 99 -72 75 -101 98 -163 127 -41 19 -104 40\n            -140 46 -73 11 -75 11 -146 -1z", 3, "ngStyle"]], template: function ShapeWidgetComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ShapeWidgetComponent__svg_svg_1_Template, 2, 4, "svg", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ShapeWidgetComponent__svg_svg_2_Template, 2, 4, "svg", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ShapeWidgetComponent__svg_svg_3_Template, 2, 4, "svg", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ShapeWidgetComponent__svg_svg_4_Template, 2, 4, "svg", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ShapeWidgetComponent__svg_svg_5_Template, 3, 4, "svg", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ShapeWidgetComponent__svg_svg_6_Template, 3, 4, "svg", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.widget.config.type != "line" ? "p-2" : "")("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c1, "rotate(" + ctx.widget.config.rotation + "deg)"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.widget.config.type == "triangle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.widget.config.type == "line");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.widget.config.type == "rectangle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.widget.config.type == "ellipses");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.widget.config.type == "star");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.widget.config.type == "heart");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy93aWRnZXRzL3NyYy9saWIvY29tcG9uZW50cy9zaGFwZS13aWRnZXQvc2hhcGUtd2lkZ2V0LmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShapeWidgetComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'lib-shape-widget',
                templateUrl: './shape-widget.component.html',
                styleUrls: ['./shape-widget.component.scss']
            }]
    }], function () { return []; }, { widget: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
const ShapeWidget = {
    type: 'shape',
    component: ShapeWidgetComponent,
    defaultConfig: [
        { type: 'rectangle', fill: 'none', fillEnable: true, strokeEnable: true, stroke: '#717171', rotation: '0' },
        { type: 'triangle', fill: 'none', fillEnable: true, strokeEnable: true, stroke: '#717171', rotation: '0' },
        { type: 'line', fill: 'none', fillEnable: true, strokeEnable: true, stroke: '#717171', rotation: '135' },
        { type: 'ellipses', fill: 'none', fillEnable: true, strokeEnable: true, stroke: '#717171', rotation: '0' },
        { type: 'star', fill: 'none', fillEnable: true, strokeEnable: true, stroke: '#717171', rotation: '0' },
        { type: 'heart', fill: 'none', fillEnable: true, strokeEnable: true, stroke: '#717171', rotation: '0' }
    ]
};


/***/ }),

/***/ "../widgets/src/lib/components/simple1-widget/simple1-widget.component.ts":
/*!********************************************************************************!*\
  !*** ../widgets/src/lib/components/simple1-widget/simple1-widget.component.ts ***!
  \********************************************************************************/
/*! exports provided: Simple1WidgetComponent, Simple1Widget */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Simple1WidgetComponent", function() { return Simple1WidgetComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Simple1Widget", function() { return Simple1Widget; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_common_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/common/util */ "../widgets/src/lib/shared/common/util.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var angular_resize_event__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-resize-event */ "../../node_modules/angular-resize-event/__ivy_ngcc__/fesm2015/angular-resize-event.js");





const _c0 = function (a0) { return { "color": a0 }; };
function Simple1WidgetComponent_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i");
} if (rf & 2) {
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    var tmp_0_0 = null;
    const currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, (tmp_0_0 = ctx_r32.getObjByRange()) == null ? null : tmp_0_0.color);
    var tmp_1_0 = null;
    const currVal_1 = (tmp_1_0 = ctx_r32.getObjByRange()) == null ? null : tmp_1_0.icon;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](currVal_0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](currVal_1);
} }
function Simple1WidgetComponent_i_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i");
} if (rf & 2) {
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    var tmp_0_0 = null;
    const currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, (tmp_0_0 = ctx_r33.getObjByRange()) == null ? null : tmp_0_0.color);
    var tmp_1_0 = null;
    const currVal_1 = (tmp_1_0 = ctx_r33.getObjByRange()) == null ? null : tmp_1_0.icon;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](currVal_0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](currVal_1);
} }
function Simple1WidgetComponent_i_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i");
} if (rf & 2) {
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    var tmp_0_0 = null;
    const currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, (tmp_0_0 = ctx_r34.getObjByRange()) == null ? null : tmp_0_0.color);
    var tmp_1_0 = null;
    const currVal_1 = (tmp_1_0 = ctx_r34.getObjByRange()) == null ? null : tmp_1_0.icon;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](currVal_0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](currVal_1);
} }
class Simple1WidgetComponent {
    constructor(cdr) {
        this.cdr = cdr;
    }
    ngOnInit() {
        if (this.gridInfo.rows === this.gridInfo.cols) {
            this.mode = 1; // Square
        }
        if (this.gridInfo.rows < this.gridInfo.cols) {
            this.mode = 2; // Rectangle
        }
        if (this.gridInfo.rows > this.gridInfo.cols) {
            this.mode = 3; // Vertical
        }
    }
    onResized(event) {
        setTimeout(() => {
            const wh = event.newWidth - event.newHeight;
            if (wh < 70) {
                this.mode = 1; // Square
            }
            if (wh > 70) {
                this.mode = 2; // Rectangle
            }
            if (wh < -50) {
                this.mode = 3; // Vertical
            }
            this.cdr.detectChanges();
        }, 0);
    }
    // Check hasOwnProperty
    canActivate(filed) {
        return this.widget.config.hasOwnProperty(filed);
    }
    /**
     * ThresholdIcon
     */
    getObjByRange() {
        const base = { color: this.widget.config.colorIcon, icon: this.widget.config.faTopLeft };
        if (this.canActivate('thresholdIcon')) {
            const value = _shared_common_util__WEBPACK_IMPORTED_MODULE_1__["Util"].clamp(this.widget.config.value, this.widget.config.iconMin, this.widget.config.iconMax);
            const match = Object.keys(this.widget.config.thresholdIcon)
                .filter(function (item) { return _shared_common_util__WEBPACK_IMPORTED_MODULE_1__["Util"].isNumber(item) && Number(item) <= value; })
                .sort((a, b) => Number(a) - Number(b))
                .reverse()[0];
            return match ? this.widget.config.thresholdIcon[match] : base;
        }
        else {
            return base;
        }
    }
}
Simple1WidgetComponent.ɵfac = function Simple1WidgetComponent_Factory(t) { return new (t || Simple1WidgetComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
Simple1WidgetComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Simple1WidgetComponent, selectors: [["lib-simple1-widget"]], inputs: { widget: "widget", gridInfo: "gridInfo" }, decls: 28, vars: 39, consts: [[1, "h-100", "w-100", "simple", 3, "ngClass", "ngStyle", "hidden", "resized"], [3, "class", "style", 4, "ngIf"], [1, "content_simple"], [2, "font-size", "24px"], [1, "h-100", "w-100", "simple_vertical", 3, "ngClass", "ngStyle", "hidden", "resized"], [1, "row", "w-100", "m-0", "h-50", "d-flex", "justify-content-center", "align-items-center"]], template: function Simple1WidgetComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resized", function Simple1WidgetComponent_Template_div_resized_0_listener($event) { return ctx.onResized($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, Simple1WidgetComponent_i_2_Template, 1, 6, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resized", function Simple1WidgetComponent_Template_div_resized_7_listener($event) { return ctx.onResized($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, Simple1WidgetComponent_i_9_Template, 1, 6, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resized", function Simple1WidgetComponent_Template_div_resized_17_listener($event) { return ctx.onResized($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, Simple1WidgetComponent_i_19_Template, 1, 6, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("mode_square");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.widget.config == null ? null : ctx.widget.config.class)("ngStyle", ctx.widget.config == null ? null : ctx.widget.config.styles)("hidden", !(ctx.mode == 1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.canActivate("faTopLeft"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx.widget.config == null ? null : ctx.widget.config.colorText);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.widget.config == null ? null : ctx.widget.config.value, "", ctx.widget.config == null ? null : ctx.widget.config.centerVariable, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx.widget.config == null ? null : ctx.widget.config.colorText);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.widget.config == null ? null : ctx.widget.config.bottomVariable);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("mode_rectangle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.widget.config == null ? null : ctx.widget.config.class)("ngStyle", ctx.widget.config == null ? null : ctx.widget.config.styles)("hidden", !(ctx.mode == 2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.canActivate("faTopLeft"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx.widget.config == null ? null : ctx.widget.config.colorText);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.widget.config == null ? null : ctx.widget.config.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.widget.config == null ? null : ctx.widget.config.centerVariable);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx.widget.config == null ? null : ctx.widget.config.colorText);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.widget.config == null ? null : ctx.widget.config.bottomVariable);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("mode_vertical");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.widget.config == null ? null : ctx.widget.config.class)("ngStyle", ctx.widget.config == null ? null : ctx.widget.config.styles)("hidden", !(ctx.mode == 3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.canActivate("faTopLeft"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx.widget.config == null ? null : ctx.widget.config.colorText);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.widget.config == null ? null : ctx.widget.config.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.widget.config == null ? null : ctx.widget.config.centerVariable);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx.widget.config == null ? null : ctx.widget.config.colorText);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.widget.config == null ? null : ctx.widget.config.bottomVariable);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], angular_resize_event__WEBPACK_IMPORTED_MODULE_3__["ResizedDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: ["@media only screen and (min-width: 1366px) {\n  [_nghost-%COMP%] {\n    zoom: 0.8;\n  }\n}\n@media only screen and (min-width: 1400px) {\n  [_nghost-%COMP%] {\n    zoom: 0.8;\n  }\n}\n@media only screen and (min-width: 1440px) {\n  [_nghost-%COMP%] {\n    zoom: 0.85;\n  }\n}\n@media only screen and (min-width: 1600px) {\n  [_nghost-%COMP%] {\n    zoom: 0.9;\n  }\n}\n@media only screen and (min-width: 1680px) {\n  [_nghost-%COMP%] {\n    zoom: 0.95;\n  }\n}\n@media only screen and (min-width: 1920px) {\n  [_nghost-%COMP%] {\n    zoom: 1;\n  }\n}\n[_nghost-%COMP%]   .simple[_ngcontent-%COMP%] {\n  color: #FFFFFF;\n  display: flex;\n}\n[_nghost-%COMP%]   .simple[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  width: 100%;\n}\n[_nghost-%COMP%]   .mode_square[_ngcontent-%COMP%] {\n  flex-wrap: wrap;\n  align-content: space-between;\n  padding: 8%;\n}\n[_nghost-%COMP%]   .mode_square[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(1)   i[_ngcontent-%COMP%] {\n  font-size: 28px;\n}\n[_nghost-%COMP%]   .mode_square[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(2) {\n  font-size: 36px;\n  color: #FFFFFF;\n  font-family: \"SF Pro Rounded-Bold\";\n}\n[_nghost-%COMP%]   .mode_square[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(3) {\n  font-size: 16px;\n  color: #959393;\n  font-family: \"SF Pro Text-Regular\";\n}\n[_nghost-%COMP%]   .mode_rectangle[_ngcontent-%COMP%] {\n  align-items: center;\n  justify-content: center;\n  padding: 8% 8% 8% 0;\n}\n[_nghost-%COMP%]   .mode_rectangle[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(1) {\n  text-align: center;\n}\n[_nghost-%COMP%]   .mode_rectangle[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(1)   i[_ngcontent-%COMP%] {\n  font-size: 65px;\n}\n[_nghost-%COMP%]   .mode_rectangle[_ngcontent-%COMP%]   .content_simple[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(1) {\n  font-size: 36px;\n  color: #FFFFFF;\n  font-family: \"SF Pro Rounded-Bold\";\n}\n[_nghost-%COMP%]   .mode_rectangle[_ngcontent-%COMP%]   .content_simple[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(2) {\n  margin-top: 10%;\n  font-size: 16px;\n  color: #959393;\n  font-family: \"SF Pro Text-Regular\";\n}\n[_nghost-%COMP%]   .mode_vertical[_ngcontent-%COMP%] {\n  padding: 8%;\n}\n[_nghost-%COMP%]   .mode_vertical[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 65px;\n}\n[_nghost-%COMP%]   .mode_vertical[_ngcontent-%COMP%]   .content_simple[_ngcontent-%COMP%]:nth-child(1) {\n  font-size: 36px;\n  margin: 15% 0;\n  color: #FFFFFF;\n  font-family: \"SF Pro Rounded-Bold\";\n  line-height: normal;\n}\n[_nghost-%COMP%]   .mode_vertical[_ngcontent-%COMP%]   .content_simple[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(2) {\n  font-size: 16px;\n  text-align: center;\n  color: #959393;\n  font-family: \"SF Pro Text-Regular\";\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3dpZGdldHMvc3JjL2xpYi9jb21wb25lbnRzL3NpbXBsZTEtd2lkZ2V0L0U6XFxQcm9qZWN0XFxhaXMtcG9jL3Byb2plY3RzXFx3aWRnZXRzXFxzcmNcXGxpYlxcc2hhcmVkXFxjb21tb25cXF96b29tLnNjc3MiLCJwcm9qZWN0cy93aWRnZXRzL3NyYy9saWIvY29tcG9uZW50cy9zaW1wbGUxLXdpZGdldC9zaW1wbGUxLXdpZGdldC5jb21wb25lbnQuc2NzcyIsInByb2plY3RzL3dpZGdldHMvc3JjL2xpYi9jb21wb25lbnRzL3NpbXBsZTEtd2lkZ2V0L0U6XFxQcm9qZWN0XFxhaXMtcG9jL3Byb2plY3RzXFx3aWRnZXRzXFxzcmNcXGxpYlxcY29tcG9uZW50c1xcc2ltcGxlMS13aWRnZXRcXHNpbXBsZTEtd2lkZ2V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBREY7SUFFSSxTQUFBO0VDQ0Y7QUFDRjtBRENFO0VBTEY7SUFNSSxTQUFBO0VDRUY7QUFDRjtBREFFO0VBVEY7SUFVSSxVQUFBO0VDR0Y7QUFDRjtBRERFO0VBYkY7SUFjSSxTQUFBO0VDSUY7QUFDRjtBREZFO0VBakJGO0lBa0JJLFVBQUE7RUNLRjtBQUNGO0FESEU7RUFyQkY7SUFzQkksT0FBQTtFQ01GO0FBQ0Y7QUMxQkU7RUFDRSxjQUFBO0VBQ0EsYUFBQTtBRDZCSjtBQzNCSTtFQUNFLFdBQUE7QUQ2Qk47QUN6QkU7RUFDRSxlQUFBO0VBQ0EsNEJBQUE7RUFDQSxXQUFBO0FEMkJKO0FDdkJNO0VBQ0UsZUFBQTtBRHlCUjtBQ3JCSTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0Esa0NBQUE7QUR1Qk47QUNwQkk7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGtDQUFBO0FEc0JOO0FDbEJFO0VBQ0UsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FEb0JKO0FDbEJJO0VBQ0Usa0JBQUE7QURvQk47QUNuQk07RUFDRSxlQUFBO0FEcUJSO0FDaEJNO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxrQ0FBQTtBRGtCUjtBQ2ZNO0VBQ0UsZUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0Esa0NBQUE7QURpQlI7QUNaRTtFQUNFLFdBQUE7QURjSjtBQ1pJO0VBQ0UsZUFBQTtBRGNOO0FDVk07RUFDRSxlQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxrQ0FBQTtFQUNBLG1CQUFBO0FEWVI7QUNUTTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxrQ0FBQTtBRFdSIiwiZmlsZSI6InByb2plY3RzL3dpZGdldHMvc3JjL2xpYi9jb21wb25lbnRzL3NpbXBsZTEtd2lkZ2V0L3NpbXBsZTEtd2lkZ2V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTM2NnB4KSB7XHJcbiAgICB6b29tOiAwLjg7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE0MDBweCkge1xyXG4gICAgem9vbTogMC44O1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNDQwcHgpIHtcclxuICAgIHpvb206IDAuODU7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE2MDBweCkge1xyXG4gICAgem9vbTogMC45O1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNjgwcHgpIHtcclxuICAgIHpvb206IDAuOTU7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE5MjBweCkge1xyXG4gICAgem9vbTogMTtcclxuICB9XHJcbn1cclxuIiwiQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMzY2cHgpIHtcbiAgOmhvc3Qge1xuICAgIHpvb206IDAuODtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNDAwcHgpIHtcbiAgOmhvc3Qge1xuICAgIHpvb206IDAuODtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNDQwcHgpIHtcbiAgOmhvc3Qge1xuICAgIHpvb206IDAuODU7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTYwMHB4KSB7XG4gIDpob3N0IHtcbiAgICB6b29tOiAwLjk7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTY4MHB4KSB7XG4gIDpob3N0IHtcbiAgICB6b29tOiAwLjk1O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE5MjBweCkge1xuICA6aG9zdCB7XG4gICAgem9vbTogMTtcbiAgfVxufVxuXG46aG9zdCAuc2ltcGxlIHtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG46aG9zdCAuc2ltcGxlID4gZGl2IHtcbiAgd2lkdGg6IDEwMCU7XG59XG46aG9zdCAubW9kZV9zcXVhcmUge1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDglO1xufVxuOmhvc3QgLm1vZGVfc3F1YXJlID4gZGl2Om50aC1jaGlsZCgxKSBpIHtcbiAgZm9udC1zaXplOiAyOHB4O1xufVxuOmhvc3QgLm1vZGVfc3F1YXJlID4gZGl2Om50aC1jaGlsZCgyKSB7XG4gIGZvbnQtc2l6ZTogMzZweDtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIGZvbnQtZmFtaWx5OiBcIlNGIFBybyBSb3VuZGVkLUJvbGRcIjtcbn1cbjpob3N0IC5tb2RlX3NxdWFyZSA+IGRpdjpudGgtY2hpbGQoMykge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjOTU5MzkzO1xuICBmb250LWZhbWlseTogXCJTRiBQcm8gVGV4dC1SZWd1bGFyXCI7XG59XG46aG9zdCAubW9kZV9yZWN0YW5nbGUge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogOCUgOCUgOCUgMDtcbn1cbjpob3N0IC5tb2RlX3JlY3RhbmdsZSA+IGRpdjpudGgtY2hpbGQoMSkge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG46aG9zdCAubW9kZV9yZWN0YW5nbGUgPiBkaXY6bnRoLWNoaWxkKDEpIGkge1xuICBmb250LXNpemU6IDY1cHg7XG59XG46aG9zdCAubW9kZV9yZWN0YW5nbGUgLmNvbnRlbnRfc2ltcGxlID4gZGl2Om50aC1jaGlsZCgxKSB7XG4gIGZvbnQtc2l6ZTogMzZweDtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIGZvbnQtZmFtaWx5OiBcIlNGIFBybyBSb3VuZGVkLUJvbGRcIjtcbn1cbjpob3N0IC5tb2RlX3JlY3RhbmdsZSAuY29udGVudF9zaW1wbGUgPiBkaXY6bnRoLWNoaWxkKDIpIHtcbiAgbWFyZ2luLXRvcDogMTAlO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjOTU5MzkzO1xuICBmb250LWZhbWlseTogXCJTRiBQcm8gVGV4dC1SZWd1bGFyXCI7XG59XG46aG9zdCAubW9kZV92ZXJ0aWNhbCB7XG4gIHBhZGRpbmc6IDglO1xufVxuOmhvc3QgLm1vZGVfdmVydGljYWwgaSB7XG4gIGZvbnQtc2l6ZTogNjVweDtcbn1cbjpob3N0IC5tb2RlX3ZlcnRpY2FsIC5jb250ZW50X3NpbXBsZTpudGgtY2hpbGQoMSkge1xuICBmb250LXNpemU6IDM2cHg7XG4gIG1hcmdpbjogMTUlIDA7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBmb250LWZhbWlseTogXCJTRiBQcm8gUm91bmRlZC1Cb2xkXCI7XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG59XG46aG9zdCAubW9kZV92ZXJ0aWNhbCAuY29udGVudF9zaW1wbGUgOm50aC1jaGlsZCgyKSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzk1OTM5MztcbiAgZm9udC1mYW1pbHk6IFwiU0YgUHJvIFRleHQtUmVndWxhclwiO1xufSIsIkBpbXBvcnQgJy4uLy4uL3NoYXJlZC9jb21tb24vem9vbSc7XHJcblxyXG46aG9zdCB7XHJcbiAgLnNpbXBsZSB7XHJcbiAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gICAgJj5kaXYge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5tb2RlX3NxdWFyZSB7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBhbGlnbi1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgcGFkZGluZzogOCU7XHJcblxyXG4gICAgJj5kaXY6bnRoLWNoaWxkKDEpIHtcclxuXHJcbiAgICAgIGkge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICY+ZGl2Om50aC1jaGlsZCgyKSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMzZweDtcclxuICAgICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBcIlNGIFBybyBSb3VuZGVkLUJvbGRcIjtcclxuICAgIH1cclxuXHJcbiAgICAmPmRpdjpudGgtY2hpbGQoMykge1xyXG4gICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgIGNvbG9yOiAjOTU5MzkzO1xyXG4gICAgICBmb250LWZhbWlseTogXCJTRiBQcm8gVGV4dC1SZWd1bGFyXCI7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAubW9kZV9yZWN0YW5nbGUge1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgcGFkZGluZzogOCUgOCUgOCUgMDtcclxuXHJcbiAgICAmPmRpdjpudGgtY2hpbGQoMSkge1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGkge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNjVweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5jb250ZW50X3NpbXBsZSB7XHJcbiAgICAgICY+ZGl2Om50aC1jaGlsZCgxKSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAzNnB4O1xyXG4gICAgICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIlNGIFBybyBSb3VuZGVkLUJvbGRcIjtcclxuICAgICAgfVxyXG5cclxuICAgICAgJj5kaXY6bnRoLWNoaWxkKDIpIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMCU7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIGNvbG9yOiAjOTU5MzkzO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIlNGIFBybyBUZXh0LVJlZ3VsYXJcIjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLm1vZGVfdmVydGljYWwge1xyXG4gICAgcGFkZGluZzogOCU7XHJcblxyXG4gICAgaSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogNjVweDtcclxuICAgIH1cclxuXHJcbiAgICAuY29udGVudF9zaW1wbGUge1xyXG4gICAgICAmOm50aC1jaGlsZCgxKSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAzNnB4O1xyXG4gICAgICAgIG1hcmdpbjogMTUlIDA7XHJcbiAgICAgICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiU0YgUHJvIFJvdW5kZWQtQm9sZFwiO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIDpudGgtY2hpbGQoMikge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgY29sb3I6ICM5NTkzOTM7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiU0YgUHJvIFRleHQtUmVndWxhclwiO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Simple1WidgetComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'lib-simple1-widget',
                templateUrl: './simple1-widget.component.html',
                styleUrls: ['./simple1-widget.component.scss']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, { widget: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], gridInfo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
const Simple1Widget = {
    name: 'Simple 1',
    type: 'component',
    component: Simple1WidgetComponent,
    defaultConfig: [
        { faTopLeft: 'fa fa-battery-full', colorIcon: '#E8829A', format: 'square', value: '100', centerVariable: '%', bottomVariable: 'Battery', iconMin: 0, iconMax: 100 },
        { faTopLeft: 'feather-thermometer', colorIcon: '#E8829A', format: 'square', value: '25', centerVariable: '℃', bottomVariable: 'Temperature', iconMin: 0, iconMax: 100 },
        { faTopLeft: 'feather-layers', colorIcon: '#73B18D', format: 'square', value: '77', centerVariable: '%', bottomVariable: 'RH%', iconMin: 0, iconMax: 100 },
        { faTopLeft: 'feather-droplet', colorIcon: '#97C9DE', format: 'square', value: '6.00', centerVariable: '', bottomVariable: 'pH', iconMin: 0, iconMax: 100 },
        { faTopLeft: 'feather-droplet', colorIcon: '#C58ECC', format: 'square', value: '67.1', centerVariable: '%', bottomVariable: 'Humidity', iconMin: 0, iconMax: 100 },
        { faTopLeft: 'feather-cloud-rain', colorIcon: '#C58ECC', format: 'square', value: '101', centerVariable: 'mm', bottomVariable: 'Rainfail', iconMin: 0, iconMax: 100 }
    ]
};


/***/ }),

/***/ "../widgets/src/lib/components/simple2-widget/simple2-widget.component.ts":
/*!********************************************************************************!*\
  !*** ../widgets/src/lib/components/simple2-widget/simple2-widget.component.ts ***!
  \********************************************************************************/
/*! exports provided: Simple2WidgetComponent, Simple2Widget */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Simple2WidgetComponent", function() { return Simple2WidgetComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Simple2Widget", function() { return Simple2Widget; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var angular_resize_event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-resize-event */ "../../node_modules/angular-resize-event/__ivy_ngcc__/fesm2015/angular-resize-event.js");




const _c0 = function (a0) { return { "color": a0 }; };
function Simple2WidgetComponent_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i");
} if (rf & 2) {
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    var tmp_0_0 = null;
    const currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, (tmp_0_0 = ctx_r35.getObjByRange()) == null ? null : tmp_0_0.color);
    var tmp_1_0 = null;
    const currVal_1 = (tmp_1_0 = ctx_r35.getObjByRange()) == null ? null : tmp_1_0.icon;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](currVal_0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](currVal_1);
} }
function Simple2WidgetComponent_i_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i");
} if (rf & 2) {
    const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    var tmp_0_0 = null;
    const currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, (tmp_0_0 = ctx_r36.getObjByRange()) == null ? null : tmp_0_0.color);
    var tmp_1_0 = null;
    const currVal_1 = (tmp_1_0 = ctx_r36.getObjByRange()) == null ? null : tmp_1_0.icon;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](currVal_0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](currVal_1);
} }
function Simple2WidgetComponent_i_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i");
} if (rf & 2) {
    const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    var tmp_0_0 = null;
    const currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, (tmp_0_0 = ctx_r37.getObjByRange()) == null ? null : tmp_0_0.color);
    var tmp_1_0 = null;
    const currVal_1 = (tmp_1_0 = ctx_r37.getObjByRange()) == null ? null : tmp_1_0.icon;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](currVal_0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](currVal_1);
} }
class Simple2WidgetComponent {
    constructor(cdr) {
        this.cdr = cdr;
    }
    ngOnInit() {
        if (this.gridInfo.rows === this.gridInfo.cols) {
            this.mode = 1; // Square
        }
        if (this.gridInfo.rows < this.gridInfo.cols) {
            this.mode = 2; // Rectangle
        }
        if (this.gridInfo.rows > this.gridInfo.cols) {
            this.mode = 3; // Vertical
        }
    }
    onResized(event) {
        setTimeout(() => {
            const wh = event.newWidth - event.newHeight;
            if (wh < 70) {
                this.mode = 1; // Square
            }
            if (wh > 70) {
                this.mode = 2; // Rectangle
            }
            if (wh < -50) {
                this.mode = 3; // Vertical
            }
            this.cdr.detectChanges();
        }, 0);
    }
    // Check hasOwnProperty
    canActivate(filed) {
        return this.widget.config.hasOwnProperty(filed);
    }
    /**
     * ThresholdIcon
     */
    getObjByRange() {
        const base = { color: this.widget.config.colorIcon, icon: this.widget.config.faTopLeft };
        if (this.canActivate('thresholdIcon')) {
            const value = this.widget.config && this.widget.config.value;
            const match = Object.keys(this.widget.config.thresholdIcon)
                .filter(function (item) { return (item && value) ? item.toLowerCase() === value.toLowerCase() : item === value; })[0];
            return match ? this.widget.config.thresholdIcon[match] : base;
        }
        else {
            return base;
        }
    }
}
Simple2WidgetComponent.ɵfac = function Simple2WidgetComponent_Factory(t) { return new (t || Simple2WidgetComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
Simple2WidgetComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Simple2WidgetComponent, selectors: [["lib-simple2-widget"]], inputs: { widget: "widget", gridInfo: "gridInfo" }, decls: 28, vars: 39, consts: [[1, "h-100", "w-100", "simple", 3, "ngClass", "ngStyle", "hidden", "resized"], [3, "class", "style", 4, "ngIf"], [1, "content_simple"], [2, "font-size", "0.7em"], [1, "h-100", "w-100", "simple_vertical", 3, "ngClass", "ngStyle", "hidden", "resized"], [1, "row", "w-100", "m-0", "h-50", "d-flex", "justify-content-center", "align-items-center"]], template: function Simple2WidgetComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resized", function Simple2WidgetComponent_Template_div_resized_0_listener($event) { return ctx.onResized($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, Simple2WidgetComponent_i_2_Template, 1, 6, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resized", function Simple2WidgetComponent_Template_div_resized_7_listener($event) { return ctx.onResized($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, Simple2WidgetComponent_i_9_Template, 1, 6, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resized", function Simple2WidgetComponent_Template_div_resized_17_listener($event) { return ctx.onResized($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, Simple2WidgetComponent_i_19_Template, 1, 6, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("mode_square");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.widget.config == null ? null : ctx.widget.config.class)("ngStyle", ctx.widget.config == null ? null : ctx.widget.config.styles)("hidden", !(ctx.mode == 1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.canActivate("faTopLeft"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx.widget.config == null ? null : ctx.widget.config.colorText);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.widget.config == null ? null : ctx.widget.config.value, "", ctx.widget.config == null ? null : ctx.widget.config.centerVariable, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx.widget.config == null ? null : ctx.widget.config.colorText);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.widget.config == null ? null : ctx.widget.config.bottomVariable);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("mode_rectangle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.widget.config == null ? null : ctx.widget.config.class)("ngStyle", ctx.widget.config == null ? null : ctx.widget.config.styles)("hidden", !(ctx.mode == 2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.canActivate("faTopLeft"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx.widget.config == null ? null : ctx.widget.config.colorText);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.widget.config == null ? null : ctx.widget.config.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.widget.config == null ? null : ctx.widget.config.centerVariable);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx.widget.config == null ? null : ctx.widget.config.colorText);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.widget.config == null ? null : ctx.widget.config.bottomVariable);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("mode_vertical");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.widget.config == null ? null : ctx.widget.config.class)("ngStyle", ctx.widget.config == null ? null : ctx.widget.config.styles)("hidden", !(ctx.mode == 3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.canActivate("faTopLeft"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx.widget.config == null ? null : ctx.widget.config.colorText);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.widget.config == null ? null : ctx.widget.config.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.widget.config == null ? null : ctx.widget.config.centerVariable);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx.widget.config == null ? null : ctx.widget.config.colorText);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.widget.config == null ? null : ctx.widget.config.bottomVariable);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"], angular_resize_event__WEBPACK_IMPORTED_MODULE_2__["ResizedDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: ["@media only screen and (min-width: 1366px) {\n  [_nghost-%COMP%] {\n    zoom: 0.8;\n  }\n}\n@media only screen and (min-width: 1400px) {\n  [_nghost-%COMP%] {\n    zoom: 0.8;\n  }\n}\n@media only screen and (min-width: 1440px) {\n  [_nghost-%COMP%] {\n    zoom: 0.85;\n  }\n}\n@media only screen and (min-width: 1600px) {\n  [_nghost-%COMP%] {\n    zoom: 0.9;\n  }\n}\n@media only screen and (min-width: 1680px) {\n  [_nghost-%COMP%] {\n    zoom: 0.95;\n  }\n}\n@media only screen and (min-width: 1920px) {\n  [_nghost-%COMP%] {\n    zoom: 1;\n  }\n}\n[_nghost-%COMP%]   .simple[_ngcontent-%COMP%] {\n  color: #FFFFFF;\n  display: flex;\n}\n[_nghost-%COMP%]   .simple[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  width: 100%;\n}\n[_nghost-%COMP%]   .mode_square[_ngcontent-%COMP%] {\n  flex-wrap: wrap;\n  align-content: space-between;\n  padding: 8%;\n}\n[_nghost-%COMP%]   .mode_square[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(1)   i[_ngcontent-%COMP%] {\n  font-size: 28px;\n}\n[_nghost-%COMP%]   .mode_square[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(2) {\n  font-size: 36px;\n}\n[_nghost-%COMP%]   .mode_square[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(3) {\n  font-size: 16px;\n  color: #959393;\n}\n[_nghost-%COMP%]   .mode_rectangle[_ngcontent-%COMP%] {\n  align-items: center;\n  justify-content: center;\n  padding: 8% 8% 8% 0;\n}\n[_nghost-%COMP%]   .mode_rectangle[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(1) {\n  text-align: center;\n}\n[_nghost-%COMP%]   .mode_rectangle[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(1)   i[_ngcontent-%COMP%] {\n  font-size: 65px;\n}\n[_nghost-%COMP%]   .mode_rectangle[_ngcontent-%COMP%]   .content_simple[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(1) {\n  font-size: 36px;\n}\n[_nghost-%COMP%]   .mode_rectangle[_ngcontent-%COMP%]   .content_simple[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(2) {\n  margin-top: 10%;\n  color: #959393;\n  font-size: 16px;\n}\n[_nghost-%COMP%]   .mode_vertical[_ngcontent-%COMP%] {\n  padding: 8%;\n}\n[_nghost-%COMP%]   .mode_vertical[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 65px;\n}\n[_nghost-%COMP%]   .mode_vertical[_ngcontent-%COMP%]   .content_simple[_ngcontent-%COMP%]:nth-child(1) {\n  font-size: 36px;\n  margin: 15% 0;\n  color: #FFFFFF;\n  font-family: \"SF Pro Rounded-Bold\";\n  line-height: normal;\n}\n[_nghost-%COMP%]   .mode_vertical[_ngcontent-%COMP%]   .content_simple[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(2) {\n  font-size: 16px;\n  text-align: center;\n  color: #959393;\n  font-family: \"SF Pro Text-Regular\";\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3dpZGdldHMvc3JjL2xpYi9jb21wb25lbnRzL3NpbXBsZTItd2lkZ2V0L0U6XFxQcm9qZWN0XFxhaXMtcG9jL3Byb2plY3RzXFx3aWRnZXRzXFxzcmNcXGxpYlxcc2hhcmVkXFxjb21tb25cXF96b29tLnNjc3MiLCJwcm9qZWN0cy93aWRnZXRzL3NyYy9saWIvY29tcG9uZW50cy9zaW1wbGUyLXdpZGdldC9zaW1wbGUyLXdpZGdldC5jb21wb25lbnQuc2NzcyIsInByb2plY3RzL3dpZGdldHMvc3JjL2xpYi9jb21wb25lbnRzL3NpbXBsZTItd2lkZ2V0L0U6XFxQcm9qZWN0XFxhaXMtcG9jL3Byb2plY3RzXFx3aWRnZXRzXFxzcmNcXGxpYlxcY29tcG9uZW50c1xcc2ltcGxlMi13aWRnZXRcXHNpbXBsZTItd2lkZ2V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBREY7SUFFSSxTQUFBO0VDQ0Y7QUFDRjtBRENFO0VBTEY7SUFNSSxTQUFBO0VDRUY7QUFDRjtBREFFO0VBVEY7SUFVSSxVQUFBO0VDR0Y7QUFDRjtBRERFO0VBYkY7SUFjSSxTQUFBO0VDSUY7QUFDRjtBREZFO0VBakJGO0lBa0JJLFVBQUE7RUNLRjtBQUNGO0FESEU7RUFyQkY7SUFzQkksT0FBQTtFQ01GO0FBQ0Y7QUMxQkU7RUFDRSxjQUFBO0VBQ0EsYUFBQTtBRDZCSjtBQzNCSTtFQUNFLFdBQUE7QUQ2Qk47QUN6QkU7RUFDRSxlQUFBO0VBQ0EsNEJBQUE7RUFDQSxXQUFBO0FEMkJKO0FDdkJNO0VBQ0UsZUFBQTtBRHlCUjtBQ3JCSTtFQUNFLGVBQUE7QUR1Qk47QUNwQkk7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBRHNCTjtBQ2xCRTtFQUNFLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBRG9CSjtBQ2xCSTtFQUNFLGtCQUFBO0FEb0JOO0FDbkJNO0VBQ0UsZUFBQTtBRHFCUjtBQ2hCTTtFQUNFLGVBQUE7QURrQlI7QUNmTTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBRGlCUjtBQ1pFO0VBQ0UsV0FBQTtBRGNKO0FDYkk7RUFDRSxlQUFBO0FEZU47QUNYTTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGtDQUFBO0VBQ0EsbUJBQUE7QURhUjtBQ1ZNO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGtDQUFBO0FEWVIiLCJmaWxlIjoicHJvamVjdHMvd2lkZ2V0cy9zcmMvbGliL2NvbXBvbmVudHMvc2ltcGxlMi13aWRnZXQvc2ltcGxlMi13aWRnZXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMzY2cHgpIHtcclxuICAgIHpvb206IDAuODtcclxuICB9XHJcblxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTQwMHB4KSB7XHJcbiAgICB6b29tOiAwLjg7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE0NDBweCkge1xyXG4gICAgem9vbTogMC44NTtcclxuICB9XHJcblxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTYwMHB4KSB7XHJcbiAgICB6b29tOiAwLjk7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE2ODBweCkge1xyXG4gICAgem9vbTogMC45NTtcclxuICB9XHJcblxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTkyMHB4KSB7XHJcbiAgICB6b29tOiAxO1xyXG4gIH1cclxufVxyXG4iLCJAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEzNjZweCkge1xuICA6aG9zdCB7XG4gICAgem9vbTogMC44O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE0MDBweCkge1xuICA6aG9zdCB7XG4gICAgem9vbTogMC44O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE0NDBweCkge1xuICA6aG9zdCB7XG4gICAgem9vbTogMC44NTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNjAwcHgpIHtcbiAgOmhvc3Qge1xuICAgIHpvb206IDAuOTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNjgwcHgpIHtcbiAgOmhvc3Qge1xuICAgIHpvb206IDAuOTU7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTkyMHB4KSB7XG4gIDpob3N0IHtcbiAgICB6b29tOiAxO1xuICB9XG59XG5cbjpob3N0IC5zaW1wbGUge1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgZGlzcGxheTogZmxleDtcbn1cbjpob3N0IC5zaW1wbGUgPiBkaXYge1xuICB3aWR0aDogMTAwJTtcbn1cbjpob3N0IC5tb2RlX3NxdWFyZSB7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgYWxpZ24tY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZzogOCU7XG59XG46aG9zdCAubW9kZV9zcXVhcmUgPiBkaXY6bnRoLWNoaWxkKDEpIGkge1xuICBmb250LXNpemU6IDI4cHg7XG59XG46aG9zdCAubW9kZV9zcXVhcmUgPiBkaXY6bnRoLWNoaWxkKDIpIHtcbiAgZm9udC1zaXplOiAzNnB4O1xufVxuOmhvc3QgLm1vZGVfc3F1YXJlID4gZGl2Om50aC1jaGlsZCgzKSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICM5NTkzOTM7XG59XG46aG9zdCAubW9kZV9yZWN0YW5nbGUge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogOCUgOCUgOCUgMDtcbn1cbjpob3N0IC5tb2RlX3JlY3RhbmdsZSA+IGRpdjpudGgtY2hpbGQoMSkge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG46aG9zdCAubW9kZV9yZWN0YW5nbGUgPiBkaXY6bnRoLWNoaWxkKDEpIGkge1xuICBmb250LXNpemU6IDY1cHg7XG59XG46aG9zdCAubW9kZV9yZWN0YW5nbGUgLmNvbnRlbnRfc2ltcGxlID4gZGl2Om50aC1jaGlsZCgxKSB7XG4gIGZvbnQtc2l6ZTogMzZweDtcbn1cbjpob3N0IC5tb2RlX3JlY3RhbmdsZSAuY29udGVudF9zaW1wbGUgPiBkaXY6bnRoLWNoaWxkKDIpIHtcbiAgbWFyZ2luLXRvcDogMTAlO1xuICBjb2xvcjogIzk1OTM5MztcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuOmhvc3QgLm1vZGVfdmVydGljYWwge1xuICBwYWRkaW5nOiA4JTtcbn1cbjpob3N0IC5tb2RlX3ZlcnRpY2FsIGkge1xuICBmb250LXNpemU6IDY1cHg7XG59XG46aG9zdCAubW9kZV92ZXJ0aWNhbCAuY29udGVudF9zaW1wbGU6bnRoLWNoaWxkKDEpIHtcbiAgZm9udC1zaXplOiAzNnB4O1xuICBtYXJnaW46IDE1JSAwO1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgZm9udC1mYW1pbHk6IFwiU0YgUHJvIFJvdW5kZWQtQm9sZFwiO1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xufVxuOmhvc3QgLm1vZGVfdmVydGljYWwgLmNvbnRlbnRfc2ltcGxlIDpudGgtY2hpbGQoMikge1xuICBmb250LXNpemU6IDE2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICM5NTkzOTM7XG4gIGZvbnQtZmFtaWx5OiBcIlNGIFBybyBUZXh0LVJlZ3VsYXJcIjtcbn0iLCJAaW1wb3J0ICcuLi8uLi9zaGFyZWQvY29tbW9uL3pvb20nO1xyXG5cclxuOmhvc3Qge1xyXG4gIC5zaW1wbGUge1xyXG4gICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICAgICY+ZGl2IHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAubW9kZV9zcXVhcmUge1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgYWxpZ24tY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHBhZGRpbmc6IDglO1xyXG5cclxuICAgICY+ZGl2Om50aC1jaGlsZCgxKSB7XHJcblxyXG4gICAgICBpIHtcclxuICAgICAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmPmRpdjpudGgtY2hpbGQoMikge1xyXG4gICAgICBmb250LXNpemU6IDM2cHg7XHJcbiAgICB9XHJcblxyXG4gICAgJj5kaXY6bnRoLWNoaWxkKDMpIHtcclxuICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICBjb2xvcjogIzk1OTM5MztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5tb2RlX3JlY3RhbmdsZSB7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiA4JSA4JSA4JSAwO1xyXG5cclxuICAgICY+ZGl2Om50aC1jaGlsZCgxKSB7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgaSB7XHJcbiAgICAgICAgZm9udC1zaXplOiA2NXB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbnRlbnRfc2ltcGxlIHtcclxuICAgICAgJj5kaXY6bnRoLWNoaWxkKDEpIHtcclxuICAgICAgICBmb250LXNpemU6IDM2cHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICY+ZGl2Om50aC1jaGlsZCgyKSB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTAlO1xyXG4gICAgICAgIGNvbG9yOiAjOTU5MzkzO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLm1vZGVfdmVydGljYWwge1xyXG4gICAgcGFkZGluZzogOCU7XHJcbiAgICBpIHtcclxuICAgICAgZm9udC1zaXplOiA2NXB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5jb250ZW50X3NpbXBsZSB7XHJcbiAgICAgICY6bnRoLWNoaWxkKDEpIHtcclxuICAgICAgICBmb250LXNpemU6IDM2cHg7XHJcbiAgICAgICAgbWFyZ2luOiAxNSUgMDtcclxuICAgICAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgICAgICBmb250LWZhbWlseTogXCJTRiBQcm8gUm91bmRlZC1Cb2xkXCI7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgfVxyXG5cclxuICAgICAgOm50aC1jaGlsZCgyKSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBjb2xvcjogIzk1OTM5MztcclxuICAgICAgICBmb250LWZhbWlseTogXCJTRiBQcm8gVGV4dC1SZWd1bGFyXCI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Simple2WidgetComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'lib-simple2-widget',
                templateUrl: './simple2-widget.component.html',
                styleUrls: ['./simple2-widget.component.scss']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, { widget: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], gridInfo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
const Simple2Widget = {
    name: 'Simple 2',
    type: 'component',
    component: Simple2WidgetComponent,
    defaultConfig: [
        { faTopLeft: 'feather-sun', colorIcon: '#E8829A', format: 'square', value: 'On', centerVariable: '', bottomVariable: 'Light' },
        { faTopLeft: 'feather-wifi', colorIcon: '#9FFFB1', format: 'square', value: 'On', centerVariable: '', bottomVariable: 'Wifi' },
    ]
};


/***/ }),

/***/ "../widgets/src/lib/components/textbox-otp-widget/textbox-otp-widget.component.ts":
/*!****************************************************************************************!*\
  !*** ../widgets/src/lib/components/textbox-otp-widget/textbox-otp-widget.component.ts ***!
  \****************************************************************************************/
/*! exports provided: TextboxOtpWidgetComponent, TextboxOtpWidget */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextboxOtpWidgetComponent", function() { return TextboxOtpWidgetComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextboxOtpWidget", function() { return TextboxOtpWidget; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_directives_numbers_only_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/directives/numbers-only.directive */ "../widgets/src/lib/shared/directives/numbers-only.directive.ts");




function TextboxOtpWidgetComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r93 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function TextboxOtpWidgetComponent_ng_container_1_Template_input_keyup_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r93); const i_r91 = ctx.$implicit; const ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r92.onKeyup($event, i_r91); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const i_r91 = ctx.$implicit;
    const ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("id", "", ctx_r90.widget.id, "_", i_r91, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r90.widget.config == null ? null : ctx_r90.widget.config.class)("ngStyle", ctx_r90.widget.config == null ? null : ctx_r90.widget.config.styles);
} }
class TextboxOtpWidgetComponent {
    constructor() {
        this.rows = [0, 1, 2, 3, 4, 5];
    }
    ngOnInit() {
    }
    onKeyup(event, i) {
        const value = event.target.value;
        const reg = new RegExp('^[0-9]$');
        if (reg.test(value)) {
            const index = i + 1;
            const next = index === this.rows.length ? 0 : index;
            document.getElementById(`${this.widget.id}_${next}`).focus();
        }
    }
}
TextboxOtpWidgetComponent.ɵfac = function TextboxOtpWidgetComponent_Factory(t) { return new (t || TextboxOtpWidgetComponent)(); };
TextboxOtpWidgetComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TextboxOtpWidgetComponent, selectors: [["lib-textbox-otp-widget"]], inputs: { widget: "widget" }, decls: 2, vars: 1, consts: [[1, "d-flex", "justify-content-between"], [4, "ngFor", "ngForOf"], ["numbersOnly", "", "type", "text", "maxlength", "1", "autocomplete", "off", 3, "id", "ngClass", "ngStyle", "keyup"]], template: function TextboxOtpWidgetComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TextboxOtpWidgetComponent_ng_container_1_Template, 2, 6, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.rows);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _shared_directives_numbers_only_directive__WEBPACK_IMPORTED_MODULE_2__["NumbersOnlyDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"]], styles: ["@media only screen and (min-width: 1366px) {\n  [_nghost-%COMP%] {\n    zoom: 0.8;\n  }\n}\n@media only screen and (min-width: 1400px) {\n  [_nghost-%COMP%] {\n    zoom: 0.8;\n  }\n}\n@media only screen and (min-width: 1440px) {\n  [_nghost-%COMP%] {\n    zoom: 0.85;\n  }\n}\n@media only screen and (min-width: 1600px) {\n  [_nghost-%COMP%] {\n    zoom: 0.9;\n  }\n}\n@media only screen and (min-width: 1680px) {\n  [_nghost-%COMP%] {\n    zoom: 0.95;\n  }\n}\n@media only screen and (min-width: 1920px) {\n  [_nghost-%COMP%] {\n    zoom: 1;\n  }\n}\ndiv[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 48px;\n  border: solid 1px #EAEAEA;\n  border-radius: 6px;\n  background-color: #FFFFFF1A;\n  color: #FFFFFF;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3dpZGdldHMvc3JjL2xpYi9jb21wb25lbnRzL3RleHRib3gtb3RwLXdpZGdldC9FOlxcUHJvamVjdFxcYWlzLXBvYy9wcm9qZWN0c1xcd2lkZ2V0c1xcc3JjXFxsaWJcXHNoYXJlZFxcY29tbW9uXFxfem9vbS5zY3NzIiwicHJvamVjdHMvd2lkZ2V0cy9zcmMvbGliL2NvbXBvbmVudHMvdGV4dGJveC1vdHAtd2lkZ2V0L3RleHRib3gtb3RwLXdpZGdldC5jb21wb25lbnQuc2NzcyIsInByb2plY3RzL3dpZGdldHMvc3JjL2xpYi9jb21wb25lbnRzL3RleHRib3gtb3RwLXdpZGdldC9FOlxcUHJvamVjdFxcYWlzLXBvYy9wcm9qZWN0c1xcd2lkZ2V0c1xcc3JjXFxsaWJcXGNvbXBvbmVudHNcXHRleHRib3gtb3RwLXdpZGdldFxcdGV4dGJveC1vdHAtd2lkZ2V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBREY7SUFFSSxTQUFBO0VDQ0Y7QUFDRjtBRENFO0VBTEY7SUFNSSxTQUFBO0VDRUY7QUFDRjtBREFFO0VBVEY7SUFVSSxVQUFBO0VDR0Y7QUFDRjtBRERFO0VBYkY7SUFjSSxTQUFBO0VDSUY7QUFDRjtBREZFO0VBakJGO0lBa0JJLFVBQUE7RUNLRjtBQUNGO0FESEU7RUFyQkY7SUFzQkksT0FBQTtFQ01GO0FBQ0Y7QUMxQkU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBRDZCSiIsImZpbGUiOiJwcm9qZWN0cy93aWRnZXRzL3NyYy9saWIvY29tcG9uZW50cy90ZXh0Ym94LW90cC13aWRnZXQvdGV4dGJveC1vdHAtd2lkZ2V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTM2NnB4KSB7XHJcbiAgICB6b29tOiAwLjg7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE0MDBweCkge1xyXG4gICAgem9vbTogMC44O1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNDQwcHgpIHtcclxuICAgIHpvb206IDAuODU7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE2MDBweCkge1xyXG4gICAgem9vbTogMC45O1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNjgwcHgpIHtcclxuICAgIHpvb206IDAuOTU7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE5MjBweCkge1xyXG4gICAgem9vbTogMTtcclxuICB9XHJcbn1cclxuIiwiQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMzY2cHgpIHtcbiAgOmhvc3Qge1xuICAgIHpvb206IDAuODtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNDAwcHgpIHtcbiAgOmhvc3Qge1xuICAgIHpvb206IDAuODtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNDQwcHgpIHtcbiAgOmhvc3Qge1xuICAgIHpvb206IDAuODU7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTYwMHB4KSB7XG4gIDpob3N0IHtcbiAgICB6b29tOiAwLjk7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTY4MHB4KSB7XG4gIDpob3N0IHtcbiAgICB6b29tOiAwLjk1O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE5MjBweCkge1xuICA6aG9zdCB7XG4gICAgem9vbTogMTtcbiAgfVxufVxuXG5kaXYgPiBpbnB1dCB7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDQ4cHg7XG4gIGJvcmRlcjogc29saWQgMXB4ICNFQUVBRUE7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjFBO1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSIsIkBpbXBvcnQgJy4uLy4uL3NoYXJlZC9jb21tb24vem9vbSc7XHJcblxyXG5kaXYge1xyXG4gICY+aW5wdXQge1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICBib3JkZXI6IHNvbGlkIDFweCAjRUFFQUVBO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjFBO1xyXG4gICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TextboxOtpWidgetComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'lib-textbox-otp-widget',
                templateUrl: './textbox-otp-widget.component.html',
                styleUrls: ['./textbox-otp-widget.component.scss']
            }]
    }], function () { return []; }, { widget: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
const TextboxOtpWidget = {
    type: 'textbox',
    component: TextboxOtpWidgetComponent,
    defaultConfig: []
};


/***/ }),

/***/ "../widgets/src/lib/components/textbox-widget/textbox-widget.component.ts":
/*!********************************************************************************!*\
  !*** ../widgets/src/lib/components/textbox-widget/textbox-widget.component.ts ***!
  \********************************************************************************/
/*! exports provided: TextboxWidgetComponent, TextboxWidget */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextboxWidgetComponent", function() { return TextboxWidgetComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextboxWidget", function() { return TextboxWidget; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



class TextboxWidgetComponent {
    constructor() {
        this.inputStyles = {
            roundCorner: 'round_corner',
            underline: 'underline',
            capsule: 'capsule',
            rectangle: 'rectangle'
        };
    }
    ngOnInit() {
    }
    ngOnDestroy() {
    }
}
TextboxWidgetComponent.ɵfac = function TextboxWidgetComponent_Factory(t) { return new (t || TextboxWidgetComponent)(); };
TextboxWidgetComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TextboxWidgetComponent, selectors: [["lib-textbox-widget"]], inputs: { widget: "widget" }, decls: 2, vars: 10, consts: [["autocomplete", "off", 1, "textbox-widget-content", "form-control", 3, "id", "type", "ngClass", "ngStyle", "placeholder"]], template: function TextboxWidgetComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "i18nSelect");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](1, 7, ctx.widget.config == null ? null : ctx.widget.config.inputStyle, ctx.inputStyles));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.widget == null ? null : ctx.widget.id)("type", ctx.widget.config == null ? null : ctx.widget.config.type)("ngClass", ctx.widget.config == null ? null : ctx.widget.config.class)("ngStyle", ctx.widget.config == null ? null : ctx.widget.config.styles)("placeholder", ctx.widget.config == null ? null : ctx.widget.config.placeholder);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["I18nSelectPipe"]], styles: ["@media only screen and (min-width: 1366px) {\n  [_nghost-%COMP%] {\n    zoom: 0.8;\n  }\n}\n@media only screen and (min-width: 1400px) {\n  [_nghost-%COMP%] {\n    zoom: 0.8;\n  }\n}\n@media only screen and (min-width: 1440px) {\n  [_nghost-%COMP%] {\n    zoom: 0.85;\n  }\n}\n@media only screen and (min-width: 1600px) {\n  [_nghost-%COMP%] {\n    zoom: 0.9;\n  }\n}\n@media only screen and (min-width: 1680px) {\n  [_nghost-%COMP%] {\n    zoom: 0.95;\n  }\n}\n@media only screen and (min-width: 1920px) {\n  [_nghost-%COMP%] {\n    zoom: 1;\n  }\n}\n.textbox-widget-content[_ngcontent-%COMP%] {\n  font-size: larger;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: solid 1px;\n  border-radius: 6px;\n  background-color: #FFFFFF1A;\n}\n.capsule[_ngcontent-%COMP%] {\n  border-radius: 30px;\n}\n.underline[_ngcontent-%COMP%] {\n  border: none;\n  border-radius: 0px;\n  border-bottom: 1px solid;\n  background: transparent;\n}\n.rectangle[_ngcontent-%COMP%] {\n  border-radius: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3dpZGdldHMvc3JjL2xpYi9jb21wb25lbnRzL3RleHRib3gtd2lkZ2V0L0U6XFxQcm9qZWN0XFxhaXMtcG9jL3Byb2plY3RzXFx3aWRnZXRzXFxzcmNcXGxpYlxcc2hhcmVkXFxjb21tb25cXF96b29tLnNjc3MiLCJwcm9qZWN0cy93aWRnZXRzL3NyYy9saWIvY29tcG9uZW50cy90ZXh0Ym94LXdpZGdldC90ZXh0Ym94LXdpZGdldC5jb21wb25lbnQuc2NzcyIsInByb2plY3RzL3dpZGdldHMvc3JjL2xpYi9jb21wb25lbnRzL3RleHRib3gtd2lkZ2V0L0U6XFxQcm9qZWN0XFxhaXMtcG9jL3Byb2plY3RzXFx3aWRnZXRzXFxzcmNcXGxpYlxcY29tcG9uZW50c1xcdGV4dGJveC13aWRnZXRcXHRleHRib3gtd2lkZ2V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBREY7SUFFSSxTQUFBO0VDQ0Y7QUFDRjtBRENFO0VBTEY7SUFNSSxTQUFBO0VDRUY7QUFDRjtBREFFO0VBVEY7SUFVSSxVQUFBO0VDR0Y7QUFDRjtBRERFO0VBYkY7SUFjSSxTQUFBO0VDSUY7QUFDRjtBREZFO0VBakJGO0lBa0JJLFVBQUE7RUNLRjtBQUNGO0FESEU7RUFyQkY7SUFzQkksT0FBQTtFQ01GO0FBQ0Y7QUMzQkE7RUFDRSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7QUQ4QkY7QUN2QkE7RUFDRSxtQkFBQTtBRDBCRjtBQ3ZCQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO0VBQ0EsdUJBQUE7QUQwQkY7QUN2QkE7RUFDRSxrQkFBQTtBRDBCRiIsImZpbGUiOiJwcm9qZWN0cy93aWRnZXRzL3NyYy9saWIvY29tcG9uZW50cy90ZXh0Ym94LXdpZGdldC90ZXh0Ym94LXdpZGdldC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEzNjZweCkge1xyXG4gICAgem9vbTogMC44O1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNDAwcHgpIHtcclxuICAgIHpvb206IDAuODtcclxuICB9XHJcblxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTQ0MHB4KSB7XHJcbiAgICB6b29tOiAwLjg1O1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNjAwcHgpIHtcclxuICAgIHpvb206IDAuOTtcclxuICB9XHJcblxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTY4MHB4KSB7XHJcbiAgICB6b29tOiAwLjk1O1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxOTIwcHgpIHtcclxuICAgIHpvb206IDE7XHJcbiAgfVxyXG59XHJcbiIsIkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTM2NnB4KSB7XG4gIDpob3N0IHtcbiAgICB6b29tOiAwLjg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTQwMHB4KSB7XG4gIDpob3N0IHtcbiAgICB6b29tOiAwLjg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTQ0MHB4KSB7XG4gIDpob3N0IHtcbiAgICB6b29tOiAwLjg1O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE2MDBweCkge1xuICA6aG9zdCB7XG4gICAgem9vbTogMC45O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE2ODBweCkge1xuICA6aG9zdCB7XG4gICAgem9vbTogMC45NTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxOTIwcHgpIHtcbiAgOmhvc3Qge1xuICAgIHpvb206IDE7XG4gIH1cbn1cblxuLnRleHRib3gtd2lkZ2V0LWNvbnRlbnQge1xuICBmb250LXNpemU6IGxhcmdlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJvcmRlcjogc29saWQgMXB4O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkYxQTtcbn1cblxuLmNhcHN1bGUge1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xufVxuXG4udW5kZXJsaW5lIHtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAwcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbi5yZWN0YW5nbGUge1xuICBib3JkZXItcmFkaXVzOiAwcHg7XG59IiwiQGltcG9ydCAnLi4vLi4vc2hhcmVkL2NvbW1vbi96b29tJztcclxuXHJcbi50ZXh0Ym94LXdpZGdldC1jb250ZW50IHtcclxuICBmb250LXNpemU6IGxhcmdlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGJvcmRlcjogc29saWQgMXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGMUE7XHJcbn1cclxuXHJcbi5yb3VuZF9jb3JuZXIge1xyXG4gIC8vIGRlZmF1bHRcclxufVxyXG5cclxuLmNhcHN1bGUge1xyXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbn1cclxuXHJcbi51bmRlcmxpbmUge1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkO1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4ucmVjdGFuZ2xlIHtcclxuICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TextboxWidgetComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'lib-textbox-widget',
                templateUrl: './textbox-widget.component.html',
                styleUrls: ['./textbox-widget.component.scss']
            }]
    }], function () { return []; }, { widget: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
const TextboxWidget = {
    type: 'textbox',
    component: TextboxWidgetComponent,
    defaultConfig: []
};


/***/ }),

/***/ "../widgets/src/lib/components/thing-detail/date-option/date-option.component.ts":
/*!***************************************************************************************!*\
  !*** ../widgets/src/lib/components/thing-detail/date-option/date-option.component.ts ***!
  \***************************************************************************************/
/*! exports provided: DateOptionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateOptionComponent", function() { return DateOptionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/dropdown */ "../../node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-dropdown.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/api */ "../../node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-api.js");







function DateOptionComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r94.selectedDay == null ? null : ctx_r94.selectedDay.label);
} }
function DateOptionComponent_ng_template_10_i_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 21);
} }
function DateOptionComponent_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    const _r111 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DateOptionComponent_ng_template_10_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r111); const group_r108 = ctx.$implicit; const ctx_r110 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r110.onSelectDay(group_r108.label); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DateOptionComponent_ng_template_10_i_3_Template, 1, 0, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const group_r108 = ctx.$implicit;
    const ctx_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](group_r108.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (group_r108 == null ? null : group_r108.label) == (ctx_r95.selectedDay == null ? null : ctx_r95.selectedDay.label));
} }
function DateOptionComponent_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r96.selectedMonth == null ? null : ctx_r96.selectedMonth.label);
} }
function DateOptionComponent_ng_template_14_i_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 21);
} }
function DateOptionComponent_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    const _r115 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DateOptionComponent_ng_template_14_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r115); const group_r112 = ctx.$implicit; const ctx_r114 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r114.onSelectMonth(group_r112.label); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DateOptionComponent_ng_template_14_i_3_Template, 1, 0, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const group_r112 = ctx.$implicit;
    const ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](group_r112.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (group_r112 == null ? null : group_r112.label) == (ctx_r97.selectedMonth == null ? null : ctx_r97.selectedMonth.label));
} }
function DateOptionComponent_ng_template_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r98.selectedYear == null ? null : ctx_r98.selectedYear.label);
} }
function DateOptionComponent_ng_template_18_i_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 21);
} }
function DateOptionComponent_ng_template_18_Template(rf, ctx) { if (rf & 1) {
    const _r119 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DateOptionComponent_ng_template_18_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r119); const group_r116 = ctx.$implicit; const ctx_r118 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r118.onSelectYear(group_r116.label); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DateOptionComponent_ng_template_18_i_3_Template, 1, 0, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const group_r116 = ctx.$implicit;
    const ctx_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](group_r116.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (group_r116 == null ? null : group_r116.label) == (ctx_r99.selectedYear == null ? null : ctx_r99.selectedYear.label));
} }
function DateOptionComponent_ng_template_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r100 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r100.selectedFromHour == null ? null : ctx_r100.selectedFromHour.label);
} }
function DateOptionComponent_ng_template_27_i_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 21);
} }
function DateOptionComponent_ng_template_27_Template(rf, ctx) { if (rf & 1) {
    const _r123 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DateOptionComponent_ng_template_27_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r123); const group_r120 = ctx.$implicit; const ctx_r122 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r122.onSelectFromHour(group_r120.label); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DateOptionComponent_ng_template_27_i_3_Template, 1, 0, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const group_r120 = ctx.$implicit;
    const ctx_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](group_r120.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (group_r120 == null ? null : group_r120.label) == (ctx_r101.selectedFromHour == null ? null : ctx_r101.selectedFromHour.label));
} }
function DateOptionComponent_ng_template_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r102.selectedFromMinute == null ? null : ctx_r102.selectedFromMinute.label);
} }
function DateOptionComponent_ng_template_31_i_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 21);
} }
function DateOptionComponent_ng_template_31_Template(rf, ctx) { if (rf & 1) {
    const _r127 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DateOptionComponent_ng_template_31_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r127); const group_r124 = ctx.$implicit; const ctx_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r126.onSelectFromMinute(group_r124.label); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DateOptionComponent_ng_template_31_i_3_Template, 1, 0, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const group_r124 = ctx.$implicit;
    const ctx_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](group_r124.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (group_r124 == null ? null : group_r124.label) == (ctx_r103.selectedFromMinute == null ? null : ctx_r103.selectedFromMinute.label));
} }
function DateOptionComponent_ng_template_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r104 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r104.selectedToHour == null ? null : ctx_r104.selectedToHour.label);
} }
function DateOptionComponent_ng_template_38_i_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 21);
} }
function DateOptionComponent_ng_template_38_Template(rf, ctx) { if (rf & 1) {
    const _r131 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DateOptionComponent_ng_template_38_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r131); const group_r128 = ctx.$implicit; const ctx_r130 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r130.onSelectToHour(group_r128.label); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DateOptionComponent_ng_template_38_i_3_Template, 1, 0, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const group_r128 = ctx.$implicit;
    const ctx_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](group_r128.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (group_r128 == null ? null : group_r128.label) == (ctx_r105.selectedToHour == null ? null : ctx_r105.selectedToHour.label));
} }
function DateOptionComponent_ng_template_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r106 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r106.selectedToMinute == null ? null : ctx_r106.selectedToMinute.label);
} }
function DateOptionComponent_ng_template_42_i_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 21);
} }
function DateOptionComponent_ng_template_42_Template(rf, ctx) { if (rf & 1) {
    const _r135 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DateOptionComponent_ng_template_42_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r135); const group_r132 = ctx.$implicit; const ctx_r134 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r134.onSelectToMinute(group_r132.label); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DateOptionComponent_ng_template_42_i_3_Template, 1, 0, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const group_r132 = ctx.$implicit;
    const ctx_r107 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](group_r132.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (group_r132 == null ? null : group_r132.label) == (ctx_r107.selectedToMinute == null ? null : ctx_r107.selectedToMinute.label));
} }
const _c0 = function (a0) { return { "background": a0 }; };
const _c1 = function () { return { "minWidth": "100px", "width": "100px" }; };
const _c2 = function () { return { "minWidth": "150px", "width": "150px" }; };
const _c3 = function () { return { "minWidth": "150px", "width": "150px", background: "#FFFFFF0A" }; };
const _c4 = function (a0, a1) { return { "color": a0, "borderColor": a1 }; };
class DateOptionComponent {
    constructor(cdf, activatedRoute) {
        this.cdf = cdf;
        this.activatedRoute = activatedRoute;
        this.days = [];
        this.months = [];
        this.years = [];
        this.fromHours = [];
        this.fromMinutes = [];
        this.toHours = [];
        this.toMinutes = [];
    }
    ngOnInit() {
        // Days
        for (let i = 1; i <= 31; i++) {
            this.days.push({ label: i.toString(), value: i });
        }
        // Mounths
        const strMonths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        for (let i = 1; i <= 12; i++) {
            this.months.push({ label: strMonths[i - 1].toString(), value: i });
        }
        // Years
        for (let i = 2000; i <= 3000; i++) {
            this.years.push({ label: i.toString(), value: i });
        }
        // Hours
        for (let i = 1; i <= 24; i++) {
            this.fromHours.push({ label: i.toString(), value: i });
            this.toHours.push({ label: i.toString(), value: i });
        }
        // Minutes
        for (let i = 1; i <= 60; i++) {
            this.fromMinutes.push({ label: i.toString(), value: i });
            this.toMinutes.push({ label: i.toString(), value: i });
        }
    }
    ngAfterViewChecked() {
        this.activatedRoute.queryParams.subscribe(params => {
            this.viewOnly = !params['id'] ? (localStorage.getItem('switchMode') === 'preview' ? true : false) : true;
            this.cdf.detectChanges();
        });
    }
    onSelectDay(value) {
        this.selectedDay = value;
    }
    onSelectMonth(value) {
        this.selectedMonth = value;
    }
    onSelectYear(value) {
        this.selectedYear = value;
    }
    onSelectFromHour(value) {
        this.selectedFromHour = value;
    }
    onSelectFromMinute(value) {
        this.selectedFromMinute = value;
    }
    onSelectToHour(value) {
        this.selectedToHour = value;
    }
    onSelectToMinute(value) {
        this.selectedToMinute = value;
    }
}
DateOptionComponent.ɵfac = function DateOptionComponent_Factory(t) { return new (t || DateOptionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
DateOptionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DateOptionComponent, selectors: [["lib-date-option"]], inputs: { globalConfig: "globalConfig" }, decls: 52, vars: 53, consts: [["id", "dropdownDate", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "feather-calendar", "cursor_pointer", 2, "font-size", "18px"], ["aria-labelledby", "dropdownDateOption", 1, "dropdown-menu", "dropdown-menu-right", "dropdown-date", 3, "ngStyle"], [1, "container_option"], [1, "mb-0"], [1, "form-row"], [1, "col-md-4"], ["optionLabel", "label", "placeholder", "Day", "name", "day", 3, "options", "ngModel", "ngModelChange"], ["pTemplate", "selectedItem"], ["pTemplate", "item"], ["optionLabel", "label", "placeholder", "Month", "name", "month", 3, "options", "ngModel", "ngModelChange"], ["optionLabel", "label", "placeholder", "Year", "name", "year", 3, "options", "ngModel", "ngModelChange"], [1, "mb-0", "mt-4"], [1, "col-md-6"], ["optionLabel", "label", "placeholder", "Hour", "name", "fromHour", 3, "options", "ngModel", "ngModelChange"], ["optionLabel", "label", "placeholder", "Minute", "name", "fromMinute", 3, "options", "ngModel", "ngModelChange"], ["optionLabel", "label", "placeholder", "Hour", "name", "toHour", 3, "options", "ngModel", "ngModelChange"], ["optionLabel", "label", "placeholder", "Minute", "name", "toMinute", 3, "options", "ngModel", "ngModelChange"], [2, "border", "solid 1px #FFFFFF"], ["data-toggle", "dropdown", 1, "btn", "w-100", 3, "ngStyle"], [1, "d-flex", "justify-content-between", 3, "click"], ["class", "feather-check", 4, "ngIf"], [1, "feather-check"]], template: function DateOptionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p-dropdown", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DateOptionComponent_Template_p_dropdown_ngModelChange_8_listener($event) { return ctx.selectedDay = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, DateOptionComponent_ng_template_9_Template, 2, 1, "ng-template", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, DateOptionComponent_ng_template_10_Template, 4, 2, "ng-template", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p-dropdown", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DateOptionComponent_Template_p_dropdown_ngModelChange_12_listener($event) { return ctx.selectedMonth = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, DateOptionComponent_ng_template_13_Template, 2, 1, "ng-template", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, DateOptionComponent_ng_template_14_Template, 4, 2, "ng-template", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p-dropdown", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DateOptionComponent_Template_p_dropdown_ngModelChange_16_listener($event) { return ctx.selectedYear = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, DateOptionComponent_ng_template_17_Template, 2, 1, "ng-template", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, DateOptionComponent_ng_template_18_Template, 4, 2, "ng-template", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h3", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Time");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p-dropdown", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DateOptionComponent_Template_p_dropdown_ngModelChange_25_listener($event) { return ctx.selectedFromHour = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, DateOptionComponent_ng_template_26_Template, 2, 1, "ng-template", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, DateOptionComponent_ng_template_27_Template, 4, 2, "ng-template", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p-dropdown", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DateOptionComponent_Template_p_dropdown_ngModelChange_29_listener($event) { return ctx.selectedFromMinute = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, DateOptionComponent_ng_template_30_Template, 2, 1, "ng-template", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, DateOptionComponent_ng_template_31_Template, 4, 2, "ng-template", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "To");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p-dropdown", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DateOptionComponent_Template_p_dropdown_ngModelChange_36_listener($event) { return ctx.selectedToHour = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, DateOptionComponent_ng_template_37_Template, 2, 1, "ng-template", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, DateOptionComponent_ng_template_38_Template, 4, 2, "ng-template", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p-dropdown", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DateOptionComponent_Template_p_dropdown_ngModelChange_40_listener($event) { return ctx.selectedToMinute = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, DateOptionComponent_ng_template_41_Template, 2, 1, "ng-template", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, DateOptionComponent_ng_template_42_Template, 4, 2, "ng-template", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "hr", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Default");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Apply");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("invisible", !ctx.viewOnly);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](37, _c0, ctx.globalConfig == null ? null : ctx.globalConfig.AreaContainerWidget.backgroundColor));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](39, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.days)("ngModel", ctx.selectedDay);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](40, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.months)("ngModel", ctx.selectedMonth);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](41, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.years)("ngModel", ctx.selectedYear);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](42, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.fromHours)("ngModel", ctx.selectedFromHour);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](43, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.fromMinutes)("ngModel", ctx.selectedFromMinute);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](44, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.toHours)("ngModel", ctx.selectedToHour);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](45, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.toMinutes)("ngModel", ctx.selectedToMinute);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](46, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](47, _c4, ctx.globalConfig == null ? null : ctx.globalConfig.ButtonWidget.background, ctx.globalConfig == null ? null : ctx.globalConfig.ButtonWidget.background));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](50, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](51, _c0, ctx.globalConfig == null ? null : ctx.globalConfig.ButtonWidget.background));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], primeng_dropdown__WEBPACK_IMPORTED_MODULE_4__["Dropdown"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], primeng_api__WEBPACK_IMPORTED_MODULE_5__["PrimeTemplate"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: [".dropdown-date {\n  padding: 0;\n  border: 1px solid #F9FAFD33;\n  min-width: 380px;\n  min-height: 435px;\n  margin-top: 20px;\n  justify-content: center;\n  box-shadow: 1px 1px 10px #f4f4f426;\n}\n  .dropdown-date form .container_option {\n  margin: 30px;\n}\n  .dropdown-date form .container_option h3 {\n  font-size: 14px;\n  font-family: \"SF Pro Text-Medium\";\n  color: #FFFFFF;\n}\n  .dropdown-date form .container_option button {\n  font-size: 20px;\n  font-family: \"SF Pro Text-Bold\";\n  background-color: unset;\n}\n  .dropdown-date p-dropdown .ui-inputtext {\n  color: #FFFFFF;\n  background: unset;\n  padding-left: 15px;\n  font-size: 16px;\n  font-family: \"SF Pro Text-Regular\";\n}\n  .dropdown-date p-dropdown .ui-dropdown-trigger {\n  background: unset;\n  color: #FFFFFF;\n}\n  .dropdown-date p-dropdown .ui-dropdown-panel .ui-dropdown-item {\n  font-size: 16px;\n  font-family: \"SF Pro Text-Regular\";\n}\n  .dropdown-date p-dropdown .ui-dropdown-items-wrapper::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n}\n  .dropdown-date p-dropdown .ui-dropdown-items-wrapper::-webkit-scrollbar-track {\n  border: 2px solid transparent;\n  background-clip: content-box;\n}\n  .dropdown-date p-dropdown .ui-dropdown-items-wrapper::-webkit-scrollbar {\n  width: 5px;\n}\n  .dropdown-date p-dropdown .ui-dropdown-items-wrapper::-webkit-scrollbar-thumb {\n  background: #333333;\n  border: 1px solid #333333;\n}\n  .dropdown-date p-dropdown .ui-dropdown {\n  display: flex;\n  align-items: center;\n  height: 48px;\n  color: #ffffff;\n  background: #FFFFFF1A;\n  justify-content: center;\n}\n  .dropdown-date p-dropdown .ui-dropdown:not(.ui-state-disabled):hover {\n  border-color: #ffffff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3dpZGdldHMvc3JjL2xpYi9jb21wb25lbnRzL3RoaW5nLWRldGFpbC9kYXRlLW9wdGlvbi9FOlxcUHJvamVjdFxcYWlzLXBvYy9wcm9qZWN0c1xcd2lkZ2V0c1xcc3JjXFxsaWJcXGNvbXBvbmVudHNcXHRoaW5nLWRldGFpbFxcZGF0ZS1vcHRpb25cXGRhdGUtb3B0aW9uLmNvbXBvbmVudC5zY3NzIiwicHJvamVjdHMvd2lkZ2V0cy9zcmMvbGliL2NvbXBvbmVudHMvdGhpbmctZGV0YWlsL2RhdGUtb3B0aW9uL2RhdGUtb3B0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVFO0VBQ0UsVUFBQTtFQUNBLDJCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQ0FBQTtBQ0RKO0FESU07RUFDRSxZQUFBO0FDRlI7QURJUTtFQUNFLGVBQUE7RUFDQSxpQ0FBQTtFQUNBLGNBQUE7QUNGVjtBREtRO0VBQ0UsZUFBQTtFQUNBLCtCQUFBO0VBQ0EsdUJBQUE7QUNIVjtBRFNNO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0NBQUE7QUNQUjtBRFVNO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0FDUlI7QURZUTtFQUNFLGVBQUE7RUFDQSxrQ0FBQTtBQ1ZWO0FEZVE7RUFDRSxtQkFBQTtBQ2JWO0FEZ0JRO0VBQ0UsNkJBQUE7RUFDQSw0QkFBQTtBQ2RWO0FEaUJRO0VBQ0UsVUFBQTtBQ2ZWO0FEa0JRO0VBQ0UsbUJBQUE7RUFDQSx5QkFBQTtBQ2hCVjtBRG9CTTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtBQ2xCUjtBRHFCVTtFQUNFLHFCQUFBO0FDbkJaIiwiZmlsZSI6InByb2plY3RzL3dpZGdldHMvc3JjL2xpYi9jb21wb25lbnRzL3RoaW5nLWRldGFpbC9kYXRlLW9wdGlvbi9kYXRlLW9wdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIE92ZXJyaWRlIHAtZHJvcGRvd25cclxuOjpuZy1kZWVwIHtcclxuICAuZHJvcGRvd24tZGF0ZSB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI0Y5RkFGRDMzO1xyXG4gICAgbWluLXdpZHRoOiAzODBweDtcclxuICAgIG1pbi1oZWlnaHQ6IDQzNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAxMHB4ICNmNGY0ZjQyNjtcclxuXHJcbiAgICBmb3JtIHtcclxuICAgICAgLmNvbnRhaW5lcl9vcHRpb24ge1xyXG4gICAgICAgIG1hcmdpbjogMzBweDtcclxuXHJcbiAgICAgICAgaDMge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6IFwiU0YgUHJvIFRleHQtTWVkaXVtXCI7XHJcbiAgICAgICAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogXCJTRiBQcm8gVGV4dC1Cb2xkXCI7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB1bnNldDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwLWRyb3Bkb3duIHtcclxuICAgICAgLnVpLWlucHV0dGV4dCB7XHJcbiAgICAgICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdW5zZXQ7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBmb250LWZhbWlseTogXCJTRiBQcm8gVGV4dC1SZWd1bGFyXCI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC51aS1kcm9wZG93bi10cmlnZ2VyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB1bnNldDtcclxuICAgICAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnVpLWRyb3Bkb3duLXBhbmVsIHtcclxuICAgICAgICAudWktZHJvcGRvd24taXRlbSB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogXCJTRiBQcm8gVGV4dC1SZWd1bGFyXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAudWktZHJvcGRvd24taXRlbXMtd3JhcHBlciB7XHJcbiAgICAgICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jbGlwOiBjb250ZW50LWJveDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgICAgICAgIHdpZHRoOiA1cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjMzMzMzMzO1xyXG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzMzMzMzMztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC51aS1kcm9wZG93biB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGhlaWdodDogNDhweDtcclxuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGMUE7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gICAgICAgICY6bm90KC51aS1zdGF0ZS1kaXNhYmxlZCkge1xyXG4gICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiOjpuZy1kZWVwIC5kcm9wZG93bi1kYXRlIHtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyOiAxcHggc29saWQgI0Y5RkFGRDMzO1xuICBtaW4td2lkdGg6IDM4MHB4O1xuICBtaW4taGVpZ2h0OiA0MzVweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggMTBweCAjZjRmNGY0MjY7XG59XG46Om5nLWRlZXAgLmRyb3Bkb3duLWRhdGUgZm9ybSAuY29udGFpbmVyX29wdGlvbiB7XG4gIG1hcmdpbjogMzBweDtcbn1cbjo6bmctZGVlcCAuZHJvcGRvd24tZGF0ZSBmb3JtIC5jb250YWluZXJfb3B0aW9uIGgzIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LWZhbWlseTogXCJTRiBQcm8gVGV4dC1NZWRpdW1cIjtcbiAgY29sb3I6ICNGRkZGRkY7XG59XG46Om5nLWRlZXAgLmRyb3Bkb3duLWRhdGUgZm9ybSAuY29udGFpbmVyX29wdGlvbiBidXR0b24ge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIlNGIFBybyBUZXh0LUJvbGRcIjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdW5zZXQ7XG59XG46Om5nLWRlZXAgLmRyb3Bkb3duLWRhdGUgcC1kcm9wZG93biAudWktaW5wdXR0ZXh0IHtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIGJhY2tncm91bmQ6IHVuc2V0O1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC1mYW1pbHk6IFwiU0YgUHJvIFRleHQtUmVndWxhclwiO1xufVxuOjpuZy1kZWVwIC5kcm9wZG93bi1kYXRlIHAtZHJvcGRvd24gLnVpLWRyb3Bkb3duLXRyaWdnZXIge1xuICBiYWNrZ3JvdW5kOiB1bnNldDtcbiAgY29sb3I6ICNGRkZGRkY7XG59XG46Om5nLWRlZXAgLmRyb3Bkb3duLWRhdGUgcC1kcm9wZG93biAudWktZHJvcGRvd24tcGFuZWwgLnVpLWRyb3Bkb3duLWl0ZW0ge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtZmFtaWx5OiBcIlNGIFBybyBUZXh0LVJlZ3VsYXJcIjtcbn1cbjo6bmctZGVlcCAuZHJvcGRvd24tZGF0ZSBwLWRyb3Bkb3duIC51aS1kcm9wZG93bi1pdGVtcy13cmFwcGVyOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG46Om5nLWRlZXAgLmRyb3Bkb3duLWRhdGUgcC1kcm9wZG93biAudWktZHJvcGRvd24taXRlbXMtd3JhcHBlcjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICBib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYmFja2dyb3VuZC1jbGlwOiBjb250ZW50LWJveDtcbn1cbjo6bmctZGVlcCAuZHJvcGRvd24tZGF0ZSBwLWRyb3Bkb3duIC51aS1kcm9wZG93bi1pdGVtcy13cmFwcGVyOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiA1cHg7XG59XG46Om5nLWRlZXAgLmRyb3Bkb3duLWRhdGUgcC1kcm9wZG93biAudWktZHJvcGRvd24taXRlbXMtd3JhcHBlcjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICBiYWNrZ3JvdW5kOiAjMzMzMzMzO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMzMzMzMzO1xufVxuOjpuZy1kZWVwIC5kcm9wZG93bi1kYXRlIHAtZHJvcGRvd24gLnVpLWRyb3Bkb3duIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiA0OHB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYmFja2dyb3VuZDogI0ZGRkZGRjFBO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbjo6bmctZGVlcCAuZHJvcGRvd24tZGF0ZSBwLWRyb3Bkb3duIC51aS1kcm9wZG93bjpub3QoLnVpLXN0YXRlLWRpc2FibGVkKTpob3ZlciB7XG4gIGJvcmRlci1jb2xvcjogI2ZmZmZmZjtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DateOptionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'lib-date-option',
                templateUrl: './date-option.component.html',
                styleUrls: ['./date-option.component.scss']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }]; }, { globalConfig: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "../widgets/src/lib/components/thing-detail/thing-detail.component.ts":
/*!****************************************************************************!*\
  !*** ../widgets/src/lib/components/thing-detail/thing-detail.component.ts ***!
  \****************************************************************************/
/*! exports provided: ThingDetailComponent, ThingDetailWidget */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThingDetailComponent", function() { return ThingDetailComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThingDetailWidget", function() { return ThingDetailWidget; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _date_option_date_option_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./date-option/date-option.component */ "../widgets/src/lib/components/thing-detail/date-option/date-option.component.ts");




const _c0 = function (a0) { return { "background": a0 }; };
const _c1 = function (a0) { return { color: a0 }; };
function ThingDetailComponent_div_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r80 = ctx.$implicit;
    const ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, ctx_r79.globalConfig.themeWidgetBackground));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("activeColor ", item_r80.icon, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c1, ctx_r79.globalConfig.themeWidgetBackground == "#000000" ? "white" : "black"))("title", item_r80.content);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r80.content, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c1, ctx_r79.globalConfig.themeWidgetBackground == "#000000" ? "white" : "black"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r80.name, " ");
} }
class ThingDetailComponent {
    constructor() {
        this.sensorItems = [
            {
                icon: 'fas fa-border-all',
                content: '21.0007,105.7938112583,15',
                name: 'GPS'
            },
            {
                icon: 'fas fa-border-all',
                content: '37.5',
                name: 'Temperature'
            },
            {
                icon: 'fas fa-border-all',
                content: '44.06',
                name: 'Humidity'
            },
            {
                icon: 'fas fa-border-all',
                content: '1',
                name: 'Lamp'
            },
            {
                icon: 'fas fa-border-all',
                content: '97%',
                name: 'Batery'
            },
            {
                icon: 'fas fa-border-all',
                content: '58',
                name: 'Guage'
            },
            {
                icon: 'fas fa-border-all',
                content: '-59',
                name: 'RSSLNB'
            },
            {
                icon: 'fas fa-border-all',
                content: '0',
                name: 'RSSLWi-Fi'
            },
            {
                icon: 'fas fa-border-all',
                content: '1',
                name: 'Light'
            },
            {
                icon: 'fas fa-border-all',
                content: '100',
                name: 'RSSLWi-Fi'
            }
        ];
    }
    ngOnInit() {
    }
}
ThingDetailComponent.ɵfac = function ThingDetailComponent_Factory(t) { return new (t || ThingDetailComponent)(); };
ThingDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ThingDetailComponent, selectors: [["app-thing-detail"]], inputs: { globalConfig: "globalConfig" }, decls: 120, vars: 18, consts: [[1, "thing-detail"], [1, "thing-container"], [1, "thing-content"], [1, "thing-grid", "dropdown"], [1, "grid-item", "group"], [1, "group-box", 3, "ngStyle"], [1, "fas", "fa-circle"], [1, "group-box-info"], [3, "ngStyle"], [1, "number-info"], [1, "fas", "fa-laptop"], [1, "fas", "fa-arrow-up"], [1, "fas", "fa-share-alt"], [1, "fas", "fa-cloud-upload-alt"], [1, "group-device-info"], [1, "info-item"], [1, "name-item"], [1, "content-item", "activeColor"], [1, "content-item"], [1, "grid-item", "sensor"], [1, "sensors__grid"], ["class", "sensors__grid--item", 3, "ngStyle", 4, "ngFor", "ngForOf"], [1, "grid-item", "activity"], [1, "activity__items", "activity__time"], [3, "globalConfig"], [1, "activity__items"], [1, "activity__items--header"], [1, "feather-code", 2, "font-size", "1rem"], [1, "timeline"], [1, "activity__items--body"], [1, "fas", "fa-circle", "activeColor"], [1, "fas", "fa-wrench", 2, "font-size", "1rem"], [1, "sensors__grid--item", 3, "ngStyle"], [1, "sensor--item--content", 3, "ngStyle", "title"], [1, "sensor--item--name", 3, "ngStyle"]], template: function ThingDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Overview");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ul", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Developer State ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Active ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " ICCID ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " 23423534645647567 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " IMEI ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " 23423412123 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " IMSI ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " 23423412123 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " Token ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " asd3-2123-asda1-231a-sda1-2312 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " S/N ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " 0900-1232-4444-2222 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Sensors");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](62, ThingDetailComponent_div_62_Template, 6, 15, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Activity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "1/23/20");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "lib-date-option", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, " Report data ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, " 15:48:59 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "i", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, " Connected ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, " 15:48:59 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, " Disconnected ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, " 15:48:59 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, " Report data ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, " 15:48:59 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, " Report data ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, " 15:48:59 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "i", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, " Configuration ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, " 15:48:59 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", "{999}", " Group");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c0, ctx.globalConfig.themeWidgetBackground));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](16, _c1, ctx.globalConfig.themeWidgetBackground == "#000000" ? "white" : "black"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]("{Thing Name}");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", "{9}", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", "{9}", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", "{9}", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", "{9}", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.sensorItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("globalConfig", ctx.globalConfig);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", "{\u201Ctemperature\u201D:27.47\u201D, \u201Chumidity\u201D:34.51, \u201Cilluminate\u201D:148, \u201CGPS\u201D:13.7813466, 100.5442207\u201D, \u201Cgauge\u201D:52, \u201Cbattery\u201D:80, \u201CRSSI_NB\u201D:-59, \u201CRSSI_Wifi\u201D:0}", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", "{\u201Ctemperature\u201D:27.47\u201D, \u201Chumidity\u201D:34.51, \u201Cilluminate\u201D:148, \u201CGPS\u201D:13.7813466, 100.5442207\u201D, \u201Cgauge\u201D:52, \u201Cbattery\u201D:80, \u201CRSSI_NB\u201D:-59, \u201CRSSI_Wifi\u201D:0}", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", "{\u201Ctemperature\u201D:27.47\u201D, \u201Chumidity\u201D:34.51, \u201Cilluminate\u201D:148, \u201CGPS\u201D:13.7813466, 100.5442207\u201D, \u201Cgauge\u201D:52, \u201Cbattery\u201D:80, \u201CRSSI_NB\u201D:-59, \u201CRSSI_Wifi\u201D:0}", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", "{\u201CLamp\u201D:1}", " ");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _date_option_date_option_component__WEBPACK_IMPORTED_MODULE_2__["DateOptionComponent"]], styles: ["@media only screen and (min-width: 1366px) {\n  [_nghost-%COMP%] {\n    zoom: 0.8;\n  }\n}\n@media only screen and (min-width: 1400px) {\n  [_nghost-%COMP%] {\n    zoom: 0.8;\n  }\n}\n@media only screen and (min-width: 1440px) {\n  [_nghost-%COMP%] {\n    zoom: 0.85;\n  }\n}\n@media only screen and (min-width: 1600px) {\n  [_nghost-%COMP%] {\n    zoom: 0.9;\n  }\n}\n@media only screen and (min-width: 1680px) {\n  [_nghost-%COMP%] {\n    zoom: 0.95;\n  }\n}\n@media only screen and (min-width: 1920px) {\n  [_nghost-%COMP%] {\n    zoom: 1;\n  }\n}\n.activeColor[_ngcontent-%COMP%] {\n  color: #9fffb1;\n}\n[_nghost-%COMP%] {\n  width: 100%;\n  height: 100%;\n  margin: 0 auto;\n  overflow: hidden;\n  position: relative;\n}\n.thing-detail[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.thing-detail[_ngcontent-%COMP%]   .thing-container[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: auto;\n  height: calc(1080px - 160px);\n}\n.thing-detail[_ngcontent-%COMP%]   .thing-container[_ngcontent-%COMP%]   .thing-content[_ngcontent-%COMP%] {\n  width: 1100px;\n  margin: auto;\n  margin-top: 2rem;\n}\n.thing-detail[_ngcontent-%COMP%]   .thing-container[_ngcontent-%COMP%]   .thing-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 1.6rem;\n  font-weight: 500;\n}\n.thing-detail[_ngcontent-%COMP%]   .thing-container[_ngcontent-%COMP%]   .thing-content[_ngcontent-%COMP%]   .thing-grid[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  align-items: stretch;\n}\n.thing-detail[_ngcontent-%COMP%]   .thing-container[_ngcontent-%COMP%]   .thing-content[_ngcontent-%COMP%]   .thing-grid[_ngcontent-%COMP%]   .grid-item[_ngcontent-%COMP%] {\n  width: 31%;\n}\n.thing-detail[_ngcontent-%COMP%]   .thing-container[_ngcontent-%COMP%]   .thing-content[_ngcontent-%COMP%]   .thing-grid[_ngcontent-%COMP%]   .grid-item[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 1.3rem;\n}\n.thing-detail[_ngcontent-%COMP%]   .thing-container[_ngcontent-%COMP%]   .thing-content[_ngcontent-%COMP%]   .thing-grid[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%]   .group-box[_ngcontent-%COMP%] {\n  position: relative;\n  height: 300px;\n  background-color: #000;\n}\n.thing-detail[_ngcontent-%COMP%]   .thing-container[_ngcontent-%COMP%]   .thing-content[_ngcontent-%COMP%]   .thing-grid[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%]   .group-box[_ngcontent-%COMP%]   .fa-circle[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 15px;\n  left: 15px;\n  font-size: 7px;\n  color: #9fffb1;\n}\n.thing-detail[_ngcontent-%COMP%]   .thing-container[_ngcontent-%COMP%]   .thing-content[_ngcontent-%COMP%]   .thing-grid[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%]   .group-box[_ngcontent-%COMP%]   .group-box-info[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n}\n.thing-detail[_ngcontent-%COMP%]   .thing-container[_ngcontent-%COMP%]   .thing-content[_ngcontent-%COMP%]   .thing-grid[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%]   .group-box[_ngcontent-%COMP%]   .group-box-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 500;\n  color: #fff;\n  padding-left: 15px;\n}\n.thing-detail[_ngcontent-%COMP%]   .thing-container[_ngcontent-%COMP%]   .thing-content[_ngcontent-%COMP%]   .thing-grid[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%]   .group-box[_ngcontent-%COMP%]   .group-box-info[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  justify-content: flex-start;\n  padding: 0 !important;\n  list-style: none;\n  padding-left: 15px !important;\n}\n.thing-detail[_ngcontent-%COMP%]   .thing-container[_ngcontent-%COMP%]   .thing-content[_ngcontent-%COMP%]   .thing-grid[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%]   .group-box[_ngcontent-%COMP%]   .group-box-info[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  color: #fff;\n  margin-right: 1rem;\n}\n.thing-detail[_ngcontent-%COMP%]   .thing-container[_ngcontent-%COMP%]   .thing-content[_ngcontent-%COMP%]   .thing-grid[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%]   .group-box[_ngcontent-%COMP%]   .group-box-info[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #b1b1b1;\n}\n.thing-detail[_ngcontent-%COMP%]   .thing-container[_ngcontent-%COMP%]   .thing-content[_ngcontent-%COMP%]   .thing-grid[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%]   .group-device-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.thing-detail[_ngcontent-%COMP%]   .thing-container[_ngcontent-%COMP%]   .thing-content[_ngcontent-%COMP%]   .thing-grid[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%]   .group-device-info[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  justify-content: space-between;\n  align-items: center;\n  color: #fff;\n  margin-top: 1.5rem;\n}\n.thing-detail[_ngcontent-%COMP%]   .thing-container[_ngcontent-%COMP%]   .thing-content[_ngcontent-%COMP%]   .thing-grid[_ngcontent-%COMP%]   .sensors__grid[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 5px;\n  background-color: none;\n  color: #333333;\n}\n.thing-detail[_ngcontent-%COMP%]   .thing-container[_ngcontent-%COMP%]   .thing-content[_ngcontent-%COMP%]   .thing-grid[_ngcontent-%COMP%]   .sensors__grid[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  border-radius: 20px;\n  background-color: #333333;\n}\n.thing-detail[_ngcontent-%COMP%]   .thing-container[_ngcontent-%COMP%]   .thing-content[_ngcontent-%COMP%]   .thing-grid[_ngcontent-%COMP%]   .sensors__grid[_ngcontent-%COMP%] {\n  overflow-y: scroll;\n  max-height: 642px;\n  padding-right: 6px;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n}\n.thing-detail[_ngcontent-%COMP%]   .thing-container[_ngcontent-%COMP%]   .thing-content[_ngcontent-%COMP%]   .thing-grid[_ngcontent-%COMP%]   .sensors__grid--item[_ngcontent-%COMP%] {\n  width: 48%;\n  height: 150px;\n  background-color: #000;\n  margin-bottom: 0.9rem;\n  border-radius: 5px;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  padding: 1rem;\n}\n.thing-detail[_ngcontent-%COMP%]   .thing-container[_ngcontent-%COMP%]   .thing-content[_ngcontent-%COMP%]   .thing-grid[_ngcontent-%COMP%]   .sensors__grid--item[_ngcontent-%COMP%]   .sensor--item--content[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  font-size: 1.3rem;\n  color: #fff;\n  word-wrap: break-word !important;\n  height: 40%;\n  outline: 1px solid #000;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.thing-detail[_ngcontent-%COMP%]   .thing-container[_ngcontent-%COMP%]   .thing-content[_ngcontent-%COMP%]   .thing-grid[_ngcontent-%COMP%]   .sensors__grid--item[_ngcontent-%COMP%]   .sensor--item--name[_ngcontent-%COMP%] {\n  color: #b1b1b1;\n  margin-top: auto;\n}\n.thing-detail[_ngcontent-%COMP%]   .thing-container[_ngcontent-%COMP%]   .thing-content[_ngcontent-%COMP%]   .thing-grid[_ngcontent-%COMP%]   .activity[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.thing-detail[_ngcontent-%COMP%]   .thing-container[_ngcontent-%COMP%]   .thing-content[_ngcontent-%COMP%]   .thing-grid[_ngcontent-%COMP%]   .activity__items[_ngcontent-%COMP%] {\n  padding-top: 0.7rem;\n  padding-bottom: 0.7rem;\n  border-bottom: 1px solid #fff;\n}\n.thing-detail[_ngcontent-%COMP%]   .thing-container[_ngcontent-%COMP%]   .thing-content[_ngcontent-%COMP%]   .thing-grid[_ngcontent-%COMP%]   .activity__items[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.thing-detail[_ngcontent-%COMP%]   .thing-container[_ngcontent-%COMP%]   .thing-content[_ngcontent-%COMP%]   .thing-grid[_ngcontent-%COMP%]   .activity__items--header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  color: #fff;\n}\n.thing-detail[_ngcontent-%COMP%]   .thing-container[_ngcontent-%COMP%]   .thing-content[_ngcontent-%COMP%]   .thing-grid[_ngcontent-%COMP%]   .activity__items--header[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  display: flex;\n  align-items: center;\n  width: 40%;\n}\n.thing-detail[_ngcontent-%COMP%]   .thing-container[_ngcontent-%COMP%]   .thing-content[_ngcontent-%COMP%]   .thing-grid[_ngcontent-%COMP%]   .activity__items--header[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 7px;\n  width: 13%;\n  margin-right: 0.7rem;\n}\n.thing-detail[_ngcontent-%COMP%]   .thing-container[_ngcontent-%COMP%]   .thing-content[_ngcontent-%COMP%]   .thing-grid[_ngcontent-%COMP%]   .activity__items--header[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 13%;\n  margin-right: 0.7rem;\n}\n.thing-detail[_ngcontent-%COMP%]   .thing-container[_ngcontent-%COMP%]   .thing-content[_ngcontent-%COMP%]   .thing-grid[_ngcontent-%COMP%]   .activity__items--header[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.thing-detail[_ngcontent-%COMP%]   .thing-container[_ngcontent-%COMP%]   .thing-content[_ngcontent-%COMP%]   .thing-grid[_ngcontent-%COMP%]   .activity__items--body[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.thing-detail[_ngcontent-%COMP%]   .thing-container[_ngcontent-%COMP%]   .thing-content[_ngcontent-%COMP%]   .thing-grid[_ngcontent-%COMP%]   .activity__time[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  color: #fff;\n}\n.thing-detail[_ngcontent-%COMP%]   .thing-container[_ngcontent-%COMP%]   .thing-content[_ngcontent-%COMP%]   .thing-grid[_ngcontent-%COMP%]   .activity__time[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.thing-detail[_ngcontent-%COMP%]   .thing-container[_ngcontent-%COMP%]   .thing-content[_ngcontent-%COMP%]   .thing-grid[_ngcontent-%COMP%]   .activity__time[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3dpZGdldHMvc3JjL2xpYi9jb21wb25lbnRzL3RoaW5nLWRldGFpbC9FOlxcUHJvamVjdFxcYWlzLXBvYy9wcm9qZWN0c1xcd2lkZ2V0c1xcc3JjXFxsaWJcXHNoYXJlZFxcY29tbW9uXFxfem9vbS5zY3NzIiwicHJvamVjdHMvd2lkZ2V0cy9zcmMvbGliL2NvbXBvbmVudHMvdGhpbmctZGV0YWlsL3RoaW5nLWRldGFpbC5jb21wb25lbnQuc2NzcyIsInByb2plY3RzL3dpZGdldHMvc3JjL2xpYi9jb21wb25lbnRzL3RoaW5nLWRldGFpbC9FOlxcUHJvamVjdFxcYWlzLXBvYy9wcm9qZWN0c1xcd2lkZ2V0c1xcc3JjXFxsaWJcXGNvbXBvbmVudHNcXHRoaW5nLWRldGFpbFxcdGhpbmctZGV0YWlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBREY7SUFFSSxTQUFBO0VDQ0Y7QUFDRjtBRENFO0VBTEY7SUFNSSxTQUFBO0VDRUY7QUFDRjtBREFFO0VBVEY7SUFVSSxVQUFBO0VDR0Y7QUFDRjtBRERFO0VBYkY7SUFjSSxTQUFBO0VDSUY7QUFDRjtBREZFO0VBakJGO0lBa0JJLFVBQUE7RUNLRjtBQUNGO0FESEU7RUFyQkY7SUFzQkksT0FBQTtFQ01GO0FBQ0Y7QUNiQTtFQUNFLGNBSFk7QURtQmQ7QUNiQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUVBLGdCQUFBO0VBQ0Esa0JBQUE7QURlRjtBQ1pBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0FEZUY7QUNiRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsNEJBQUE7QURlSjtBQ2JJO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBRGVOO0FDYk07RUFDRSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBRGVSO0FDWk07RUF6Q0osYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQXdDTSxvQkFBQTtBRGlCUjtBQ2ZRO0VBQ0UsVUFBQTtBRGlCVjtBQ2ZVO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0FEaUJaO0FDWlU7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBRGNaO0FDWlk7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLGNBM0RBO0FEeUVkO0FDWFk7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtBRGFkO0FDWGM7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QURhaEI7QUNWYztFQWpGWixhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBZ0ZjLDJCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLDZCQUFBO0FEZWhCO0FDYmdCO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0FEZWxCO0FDYmtCO0VBQ0UsY0FBQTtBRGVwQjtBQ1JVO0VBekdSLGFBQUE7RUFDQSxzQkFBQTtBRG9IRjtBQ1RZO0VBdkdWLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFzR1ksOEJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBRGNkO0FDUlU7RUFDRSxVQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0FEVVo7QUNQVTtFQUVFLG1CQUFBO0VBQ0EseUJBQUE7QURRWjtBQ0xVO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBRUEsYUFBQTtFQUNBLGVBQUE7RUFDQSw4QkFBQTtBRE1aO0FDSlk7RUFDRSxVQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUVBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBRUEsYUFBQTtBRElkO0FDQWM7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGdDQUFBO0VBQ0EsV0FBQTtFQUdBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FEQWhCO0FDR2M7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7QUREaEI7QUNPUTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtBRExWO0FDT1U7RUFDRSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNkJBQUE7QURMWjtBQ09ZO0VBQ0UsbUJBQUE7QURMZDtBQ1FZO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsV0FBQTtBRE5kO0FDUWM7RUFDRSxlQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtBRE5oQjtBQ1FnQjtFQUNFLGNBQUE7RUFDQSxVQUFBO0VBQ0Esb0JBQUE7QURObEI7QUNTZ0I7RUFDRSxVQUFBO0VBQ0Esb0JBQUE7QURQbEI7QUNXYztFQUNFLFdBQUE7QURUaEI7QUNhWTtFQUNFLFdBQUE7QURYZDtBQ2VVO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsV0FBQTtBRGJaO0FDZVk7RUFDRSxlQUFBO0FEYmQ7QUNnQlk7RUFDRSxlQUFBO0FEZGQiLCJmaWxlIjoicHJvamVjdHMvd2lkZ2V0cy9zcmMvbGliL2NvbXBvbmVudHMvdGhpbmctZGV0YWlsL3RoaW5nLWRldGFpbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEzNjZweCkge1xyXG4gICAgem9vbTogMC44O1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNDAwcHgpIHtcclxuICAgIHpvb206IDAuODtcclxuICB9XHJcblxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTQ0MHB4KSB7XHJcbiAgICB6b29tOiAwLjg1O1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNjAwcHgpIHtcclxuICAgIHpvb206IDAuOTtcclxuICB9XHJcblxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTY4MHB4KSB7XHJcbiAgICB6b29tOiAwLjk1O1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxOTIwcHgpIHtcclxuICAgIHpvb206IDE7XHJcbiAgfVxyXG59XHJcbiIsIkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTM2NnB4KSB7XG4gIDpob3N0IHtcbiAgICB6b29tOiAwLjg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTQwMHB4KSB7XG4gIDpob3N0IHtcbiAgICB6b29tOiAwLjg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTQ0MHB4KSB7XG4gIDpob3N0IHtcbiAgICB6b29tOiAwLjg1O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE2MDBweCkge1xuICA6aG9zdCB7XG4gICAgem9vbTogMC45O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE2ODBweCkge1xuICA6aG9zdCB7XG4gICAgem9vbTogMC45NTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxOTIwcHgpIHtcbiAgOmhvc3Qge1xuICAgIHpvb206IDE7XG4gIH1cbn1cblxuLmFjdGl2ZUNvbG9yIHtcbiAgY29sb3I6ICM5ZmZmYjE7XG59XG5cbjpob3N0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnRoaW5nLWRldGFpbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4udGhpbmctZGV0YWlsIC50aGluZy1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiBhdXRvO1xuICBoZWlnaHQ6IGNhbGMoMTA4MHB4IC0gMTYwcHgpO1xufVxuLnRoaW5nLWRldGFpbCAudGhpbmctY29udGFpbmVyIC50aGluZy1jb250ZW50IHtcbiAgd2lkdGg6IDExMDBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBtYXJnaW4tdG9wOiAycmVtO1xufVxuLnRoaW5nLWRldGFpbCAudGhpbmctY29udGFpbmVyIC50aGluZy1jb250ZW50IGg0IHtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuLnRoaW5nLWRldGFpbCAudGhpbmctY29udGFpbmVyIC50aGluZy1jb250ZW50IC50aGluZy1ncmlkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbn1cbi50aGluZy1kZXRhaWwgLnRoaW5nLWNvbnRhaW5lciAudGhpbmctY29udGVudCAudGhpbmctZ3JpZCAuZ3JpZC1pdGVtIHtcbiAgd2lkdGg6IDMxJTtcbn1cbi50aGluZy1kZXRhaWwgLnRoaW5nLWNvbnRhaW5lciAudGhpbmctY29udGVudCAudGhpbmctZ3JpZCAuZ3JpZC1pdGVtIGg1IHtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xufVxuLnRoaW5nLWRldGFpbCAudGhpbmctY29udGFpbmVyIC50aGluZy1jb250ZW50IC50aGluZy1ncmlkIC5ncm91cCAuZ3JvdXAtYm94IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDMwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xufVxuLnRoaW5nLWRldGFpbCAudGhpbmctY29udGFpbmVyIC50aGluZy1jb250ZW50IC50aGluZy1ncmlkIC5ncm91cCAuZ3JvdXAtYm94IC5mYS1jaXJjbGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTVweDtcbiAgbGVmdDogMTVweDtcbiAgZm9udC1zaXplOiA3cHg7XG4gIGNvbG9yOiAjOWZmZmIxO1xufVxuLnRoaW5nLWRldGFpbCAudGhpbmctY29udGFpbmVyIC50aGluZy1jb250ZW50IC50aGluZy1ncmlkIC5ncm91cCAuZ3JvdXAtYm94IC5ncm91cC1ib3gtaW5mbyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbn1cbi50aGluZy1kZXRhaWwgLnRoaW5nLWNvbnRhaW5lciAudGhpbmctY29udGVudCAudGhpbmctZ3JpZCAuZ3JvdXAgLmdyb3VwLWJveCAuZ3JvdXAtYm94LWluZm8gcCB7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbn1cbi50aGluZy1kZXRhaWwgLnRoaW5nLWNvbnRhaW5lciAudGhpbmctY29udGVudCAudGhpbmctZ3JpZCAuZ3JvdXAgLmdyb3VwLWJveCAuZ3JvdXAtYm94LWluZm8gdWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBwYWRkaW5nLWxlZnQ6IDE1cHggIWltcG9ydGFudDtcbn1cbi50aGluZy1kZXRhaWwgLnRoaW5nLWNvbnRhaW5lciAudGhpbmctY29udGVudCAudGhpbmctZ3JpZCAuZ3JvdXAgLmdyb3VwLWJveCAuZ3JvdXAtYm94LWluZm8gdWwgbGkge1xuICBjb2xvcjogI2ZmZjtcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xufVxuLnRoaW5nLWRldGFpbCAudGhpbmctY29udGFpbmVyIC50aGluZy1jb250ZW50IC50aGluZy1ncmlkIC5ncm91cCAuZ3JvdXAtYm94IC5ncm91cC1ib3gtaW5mbyB1bCBsaSBpIHtcbiAgY29sb3I6ICNiMWIxYjE7XG59XG4udGhpbmctZGV0YWlsIC50aGluZy1jb250YWluZXIgLnRoaW5nLWNvbnRlbnQgLnRoaW5nLWdyaWQgLmdyb3VwIC5ncm91cC1kZXZpY2UtaW5mbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4udGhpbmctZGV0YWlsIC50aGluZy1jb250YWluZXIgLnRoaW5nLWNvbnRlbnQgLnRoaW5nLWdyaWQgLmdyb3VwIC5ncm91cC1kZXZpY2UtaW5mbyAuaW5mby1pdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiAjZmZmO1xuICBtYXJnaW4tdG9wOiAxLjVyZW07XG59XG4udGhpbmctZGV0YWlsIC50aGluZy1jb250YWluZXIgLnRoaW5nLWNvbnRlbnQgLnRoaW5nLWdyaWQgLnNlbnNvcnNfX2dyaWQ6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogbm9uZTtcbiAgY29sb3I6ICMzMzMzMzM7XG59XG4udGhpbmctZGV0YWlsIC50aGluZy1jb250YWluZXIgLnRoaW5nLWNvbnRlbnQgLnRoaW5nLWdyaWQgLnNlbnNvcnNfX2dyaWQ6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMzMzMztcbn1cbi50aGluZy1kZXRhaWwgLnRoaW5nLWNvbnRhaW5lciAudGhpbmctY29udGVudCAudGhpbmctZ3JpZCAuc2Vuc29yc19fZ3JpZCB7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgbWF4LWhlaWdodDogNjQycHg7XG4gIHBhZGRpbmctcmlnaHQ6IDZweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4udGhpbmctZGV0YWlsIC50aGluZy1jb250YWluZXIgLnRoaW5nLWNvbnRlbnQgLnRoaW5nLWdyaWQgLnNlbnNvcnNfX2dyaWQtLWl0ZW0ge1xuICB3aWR0aDogNDglO1xuICBoZWlnaHQ6IDE1MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xuICBtYXJnaW4tYm90dG9tOiAwLjlyZW07XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBwYWRkaW5nOiAxcmVtO1xufVxuLnRoaW5nLWRldGFpbCAudGhpbmctY29udGFpbmVyIC50aGluZy1jb250ZW50IC50aGluZy1ncmlkIC5zZW5zb3JzX19ncmlkLS1pdGVtIC5zZW5zb3ItLWl0ZW0tLWNvbnRlbnQge1xuICBtYXJnaW4tdG9wOiAxcmVtO1xuICBmb250LXNpemU6IDEuM3JlbTtcbiAgY29sb3I6ICNmZmY7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDQwJTtcbiAgb3V0bGluZTogMXB4IHNvbGlkICMwMDA7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuLnRoaW5nLWRldGFpbCAudGhpbmctY29udGFpbmVyIC50aGluZy1jb250ZW50IC50aGluZy1ncmlkIC5zZW5zb3JzX19ncmlkLS1pdGVtIC5zZW5zb3ItLWl0ZW0tLW5hbWUge1xuICBjb2xvcjogI2IxYjFiMTtcbiAgbWFyZ2luLXRvcDogYXV0bztcbn1cbi50aGluZy1kZXRhaWwgLnRoaW5nLWNvbnRhaW5lciAudGhpbmctY29udGVudCAudGhpbmctZ3JpZCAuYWN0aXZpdHkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLnRoaW5nLWRldGFpbCAudGhpbmctY29udGFpbmVyIC50aGluZy1jb250ZW50IC50aGluZy1ncmlkIC5hY3Rpdml0eV9faXRlbXMge1xuICBwYWRkaW5nLXRvcDogMC43cmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMC43cmVtO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmZjtcbn1cbi50aGluZy1kZXRhaWwgLnRoaW5nLWNvbnRhaW5lciAudGhpbmctY29udGVudCAudGhpbmctZ3JpZCAuYWN0aXZpdHlfX2l0ZW1zOmxhc3QtY2hpbGQge1xuICBib3JkZXItYm90dG9tOiBub25lO1xufVxuLnRoaW5nLWRldGFpbCAudGhpbmctY29udGFpbmVyIC50aGluZy1jb250ZW50IC50aGluZy1ncmlkIC5hY3Rpdml0eV9faXRlbXMtLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgY29sb3I6ICNmZmY7XG59XG4udGhpbmctZGV0YWlsIC50aGluZy1jb250YWluZXIgLnRoaW5nLWNvbnRlbnQgLnRoaW5nLWdyaWQgLmFjdGl2aXR5X19pdGVtcy0taGVhZGVyIGg2IHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogNDAlO1xufVxuLnRoaW5nLWRldGFpbCAudGhpbmctY29udGFpbmVyIC50aGluZy1jb250ZW50IC50aGluZy1ncmlkIC5hY3Rpdml0eV9faXRlbXMtLWhlYWRlciBoNiBpIHtcbiAgZm9udC1zaXplOiA3cHg7XG4gIHdpZHRoOiAxMyU7XG4gIG1hcmdpbi1yaWdodDogMC43cmVtO1xufVxuLnRoaW5nLWRldGFpbCAudGhpbmctY29udGFpbmVyIC50aGluZy1jb250ZW50IC50aGluZy1ncmlkIC5hY3Rpdml0eV9faXRlbXMtLWhlYWRlciBoNiBpbWcge1xuICB3aWR0aDogMTMlO1xuICBtYXJnaW4tcmlnaHQ6IDAuN3JlbTtcbn1cbi50aGluZy1kZXRhaWwgLnRoaW5nLWNvbnRhaW5lciAudGhpbmctY29udGVudCAudGhpbmctZ3JpZCAuYWN0aXZpdHlfX2l0ZW1zLS1oZWFkZXIgLnRpbWVsaW5lIHtcbiAgY29sb3I6ICNmZmY7XG59XG4udGhpbmctZGV0YWlsIC50aGluZy1jb250YWluZXIgLnRoaW5nLWNvbnRlbnQgLnRoaW5nLWdyaWQgLmFjdGl2aXR5X19pdGVtcy0tYm9keSB7XG4gIGNvbG9yOiAjZmZmO1xufVxuLnRoaW5nLWRldGFpbCAudGhpbmctY29udGFpbmVyIC50aGluZy1jb250ZW50IC50aGluZy1ncmlkIC5hY3Rpdml0eV9fdGltZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgY29sb3I6ICNmZmY7XG59XG4udGhpbmctZGV0YWlsIC50aGluZy1jb250YWluZXIgLnRoaW5nLWNvbnRlbnQgLnRoaW5nLWdyaWQgLmFjdGl2aXR5X190aW1lIGg2IHtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuLnRoaW5nLWRldGFpbCAudGhpbmctY29udGFpbmVyIC50aGluZy1jb250ZW50IC50aGluZy1ncmlkIC5hY3Rpdml0eV9fdGltZSBpIHtcbiAgZm9udC1zaXplOiAxcmVtO1xufSIsIkBpbXBvcnQgJy4uLy4uL3NoYXJlZC9jb21tb24vem9vbSc7XHJcblxyXG5AbWl4aW4gZmxleENvbHVtbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG5AbWl4aW4gZmxleFJvdyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4kY29sb3JBY3RpdmU6ICM5ZmZmYjE7XHJcblxyXG4uYWN0aXZlQ29sb3Ige1xyXG4gIGNvbG9yOiAkY29sb3JBY3RpdmU7XHJcbn1cclxuXHJcbjpob3N0IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgLy8gSGlkZGVuIEhhbWJ1cmdlciBcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLnRoaW5nLWRldGFpbCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAudGhpbmctY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwODBweCAtIDE2MHB4KTtcclxuXHJcbiAgICAudGhpbmctY29udGVudCB7XHJcbiAgICAgIHdpZHRoOiAxMTAwcHg7XHJcbiAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgbWFyZ2luLXRvcDogMnJlbTtcclxuXHJcbiAgICAgIGg0IHtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBmb250LXNpemU6IDEuNnJlbTtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAudGhpbmctZ3JpZCB7XHJcbiAgICAgICAgQGluY2x1ZGUgZmxleFJvdygpO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG5cclxuICAgICAgICAuZ3JpZC1pdGVtIHtcclxuICAgICAgICAgIHdpZHRoOiAzMSU7XHJcblxyXG4gICAgICAgICAgaDUge1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjNyZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZ3JvdXAge1xyXG4gICAgICAgICAgLmdyb3VwLWJveCB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAzMDBweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcclxuXHJcbiAgICAgICAgICAgIC5mYS1jaXJjbGUge1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICB0b3A6IDE1cHg7XHJcbiAgICAgICAgICAgICAgbGVmdDogMTVweDtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDdweDtcclxuICAgICAgICAgICAgICBjb2xvcjogJGNvbG9yQWN0aXZlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuZ3JvdXAtYm94LWluZm8ge1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICB1bCB7XHJcbiAgICAgICAgICAgICAgICBAaW5jbHVkZSBmbGV4Um93KCk7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxNXB4ICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgICAgICAgICAgICAgbGkge1xyXG4gICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xyXG5cclxuICAgICAgICAgICAgICAgICAgaSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNiMWIxYjE7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuZ3JvdXAtZGV2aWNlLWluZm8ge1xyXG4gICAgICAgICAgICBAaW5jbHVkZSBmbGV4Q29sdW1uKCk7XHJcblxyXG4gICAgICAgICAgICAuaW5mby1pdGVtIHtcclxuICAgICAgICAgICAgICBAaW5jbHVkZSBmbGV4Um93KCk7XHJcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMS41cmVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuc2Vuc29ycyB7XHJcbiAgICAgICAgICAmX19ncmlkOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA1cHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IG5vbmU7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMzMzMzMzO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICZfX2dyaWQ6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuXHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzMzMzM7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgJl9fZ3JpZCB7XHJcbiAgICAgICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgICAgICAgICAgbWF4LWhlaWdodDogNjQycHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDZweDtcclxuXHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuICAgICAgICAgICAgJi0taXRlbSB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDQ4JTtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMC45cmVtO1xyXG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuXHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuXHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMXJlbTtcclxuXHJcbiAgICAgICAgICAgICAgaSB7fVxyXG5cclxuICAgICAgICAgICAgICAuc2Vuc29yLS1pdGVtLS1jb250ZW50IHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuM3JlbTtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgd29yZC13cmFwOiBicmVhay13b3JkICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwJTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBFbGxpcHNpcyAuLi5cclxuICAgICAgICAgICAgICAgIG91dGxpbmU6IDFweCBzb2xpZCAjMDAwO1xyXG4gICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIC5zZW5zb3ItLWl0ZW0tLW5hbWUge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNiMWIxYjE7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiBhdXRvO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmFjdGl2aXR5IHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAgICAgICAgICZfX2l0ZW1zIHtcclxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDAuN3JlbTtcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDAuN3JlbTtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZmY7XHJcblxyXG4gICAgICAgICAgICAmOmxhc3QtY2hpbGQge1xyXG4gICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICYtLWhlYWRlciB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcblxyXG4gICAgICAgICAgICAgIGg2IHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDQwJTtcclxuXHJcbiAgICAgICAgICAgICAgICBpIHtcclxuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiA3cHg7XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMyU7XHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMC43cmVtO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMyU7XHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMC43cmVtO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgLnRpbWVsaW5lIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJi0tYm9keSB7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAmX190aW1lIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuXHJcbiAgICAgICAgICAgIGg2IHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGkge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ThingDetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-thing-detail',
                templateUrl: './thing-detail.component.html',
                styleUrls: ['./thing-detail.component.scss']
            }]
    }], function () { return []; }, { globalConfig: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
const ThingDetailWidget = {
    type: 'page',
    component: ThingDetailComponent,
    defaultconfig: []
};


/***/ }),

/***/ "../widgets/src/lib/components/user-info-admin/user-info-admin.component.ts":
/*!**********************************************************************************!*\
  !*** ../widgets/src/lib/components/user-info-admin/user-info-admin.component.ts ***!
  \**********************************************************************************/
/*! exports provided: UserInfoAdminComponent, UserInfoAdminWidget */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserInfoAdminComponent", function() { return UserInfoAdminComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserInfoAdminWidget", function() { return UserInfoAdminWidget; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



const _c0 = function (a0, a1) { return { color: a0, background: a1 }; };
const _c1 = function (a0) { return { background: a0 }; };
class UserInfoAdminComponent {
    constructor() { }
    ngOnInit() { }
}
UserInfoAdminComponent.ɵfac = function UserInfoAdminComponent_Factory(t) { return new (t || UserInfoAdminComponent)(); };
UserInfoAdminComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserInfoAdminComponent, selectors: [["app-user-info-admin"]], inputs: { globalConfig: "globalConfig" }, decls: 94, vars: 7, consts: [[1, "container-fluid", "h-100", "page-container"], [1, "h-100", "row", "justify-content-center"], [1, "col-12", "col-md-3", "p-5"], [1, "text-white", "ml-md-5"], [1, "avatar", "position-relative", "ml-md-5", "mt-5", "cursor-pointer"], ["src", "https://i0.wp.com/danongonline.com.vn/wp-content/uploads/2018/02/anh-girl-xinh-9x-kute-24.jpg", 1, "w-100", "h-100"], [1, "position-absolute", "w-100", "d-flex", "justify-content-center", 2, "background-color", "#FFFFFF7A", "height", "30%", "bottom", "0px"], [1, "material-icons", "align-self-center", 2, "font-size", "40px"], [1, "col-12", "col-md-4", "p-5"], [1, "form", "mt-5"], [1, "text-white", "mt-3"], ["type", "text", "value", "Rachel", 1, "form-control"], ["type", "text", "value", "Bradly", 1, "form-control"], ["type", "text", "value", "rachelbl@gmail.com", 1, "form-control"], [1, "d-flex", "mt-2"], [1, "align-self-center", "mr-3", "position-relative"], ["type", "radio", "name", "role", "value", "admin", 1, "d-none"], [1, "checkmark"], [1, "checkmark-inner"], [1, "align-self-center"], [1, "text-white"], [1, "text-secondary"], ["type", "radio", "name", "role", "value", "user", 1, "d-none"], ["type", "radio", "name", "role", "value", "role", 1, "d-none"], [1, "btn", "btn-block", "mt-4", "submit-button", 3, "ngStyle"], [1, "col-12", "col-md-5", "h-100", "p-5", 3, "ngStyle"], [1, "d-flex", 2, "font-size", "18px"], [1, "align-self-center", "mb-0", "pr-3", 2, "border-right", "solid 2px #FFFFFF2A"], ["type", "checkbox", 1, "d-none"], [1, "checkboxmark"], [1, "checkboxmark-inner"], [1, "d-flex", "align-self-center", "pl-3"], [1, "material-icons", "align-self-center", 2, "color", "#9FFFB1"], [1, "align-self-center", "text-white", "ml-2"], [1, "material-icons", "align-self-center", 2, "color", "#C58ECC"], [1, "material-icons", "align-self-center", 2, "color", "#E8829A"]], template: function UserInfoAdminComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Basic Information");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "camera_alt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Lastname");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "User");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Role");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Update");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "h2", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Dashboard name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Dashboard name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Dashboard name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c0, ctx.globalConfig.ButtonWidget.color, ctx.globalConfig.ButtonWidget.background));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c1, ctx.globalConfig.AreaContainerWidget.backgroundColor));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"]], styles: [".avatar[_ngcontent-%COMP%] {\n  width: 240px;\n  height: 240px;\n  border-radius: 50%;\n  -o-object-position: center;\n     object-position: center;\n  overflow: hidden;\n}\n\nh1[_ngcontent-%COMP%] {\n  font-size: 42px;\n}\n\nh2[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n\n.cursor-pointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.submit-button[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n.cancel-button[_ngcontent-%COMP%] {\n  border: 1px solid;\n  font-weight: bold;\n  background: #1d202b;\n}\n\n.form[_ngcontent-%COMP%] {\n  max-width: 300px;\n}\n\n@media (min-width: 1380px) {\n  .page-container[_ngcontent-%COMP%] {\n    padding-left: 195px;\n  }\n\n  .avatar[_ngcontent-%COMP%] {\n    width: 300px;\n    height: 300px;\n  }\n}\n\nhr[_ngcontent-%COMP%] {\n  border-top: 1px solid #FFFFFF1A;\n}\n\n.checkmark[_ngcontent-%COMP%] {\n  height: 20px;\n  width: 20px;\n  border: solid 2px white;\n  border-radius: 50%;\n  cursor: pointer;\n}\n\ninput[type=radio][_ngcontent-%COMP%]:checked    + .checkmark[_ngcontent-%COMP%] {\n  border: solid 2px #9FFFB1;\n  padding: 2px;\n}\n\ninput[type=radio][_ngcontent-%COMP%]:checked    + .checkmark[_ngcontent-%COMP%]   .checkmark-inner[_ngcontent-%COMP%] {\n  background: #9FFFB1;\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n}\n\ninput[type=text][_ngcontent-%COMP%] {\n  background: #FFFFFF1A;\n  color: white;\n  height: 48px;\n}\n\n.checkboxmark[_ngcontent-%COMP%] {\n  height: 20px;\n  width: 20px;\n  border: solid 2px white;\n  cursor: pointer;\n  border-radius: 3px;\n}\n\ninput[type=checkbox][_ngcontent-%COMP%]:checked    + .checkboxmark[_ngcontent-%COMP%] {\n  border: solid 2px #9FFFB1;\n  background: #9FFFB1;\n  padding: 2px;\n}\n\ninput[type=checkbox][_ngcontent-%COMP%]:checked    + .checkboxmark[_ngcontent-%COMP%]   .checkboxmark-inner[_ngcontent-%COMP%] {\n  margin-left: 3px;\n  margin-top: -2px;\n  width: 70%;\n  height: 100%;\n  border: solid #212121;\n  border-width: 0 2px 2px 0;\n  transform: rotate(45deg);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3dpZGdldHMvc3JjL2xpYi9jb21wb25lbnRzL3VzZXItaW5mby1hZG1pbi9FOlxcUHJvamVjdFxcYWlzLXBvYy9wcm9qZWN0c1xcd2lkZ2V0c1xcc3JjXFxsaWJcXGNvbXBvbmVudHNcXHVzZXItaW5mby1hZG1pblxcdXNlci1pbmZvLWFkbWluLmNvbXBvbmVudC5zY3NzIiwicHJvamVjdHMvd2lkZ2V0cy9zcmMvbGliL2NvbXBvbmVudHMvdXNlci1pbmZvLWFkbWluL3VzZXItaW5mby1hZG1pbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtLQUFBLHVCQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURDQTtFQUNJLGVBQUE7QUNFSjs7QURBQTtFQUNJLGVBQUE7QUNHSjs7QUREQTtFQUNJLGVBQUE7QUNJSjs7QUREQTtFQUNJLGlCQUFBO0FDSUo7O0FEREE7RUFDSSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUNJSjs7QURGQTtFQUNJLGdCQUFBO0FDS0o7O0FESEE7RUFDSTtJQUNJLG1CQUFBO0VDTU47O0VESkU7SUFDSSxZQUFBO0lBQ0EsYUFBQTtFQ09OO0FBQ0Y7O0FETEE7RUFDSSwrQkFBQTtBQ09KOztBRExBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ1FKOztBRExBO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0FDUUo7O0FETEE7RUFDSSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNRSjs7QURMQTtFQUNJLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUNRSjs7QURMQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNRSjs7QURMQTtFQUNJLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FDUUo7O0FETEE7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0Esd0JBQUE7QUNRSiIsImZpbGUiOiJwcm9qZWN0cy93aWRnZXRzL3NyYy9saWIvY29tcG9uZW50cy91c2VyLWluZm8tYWRtaW4vdXNlci1pbmZvLWFkbWluLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmF2YXRhcntcclxuICAgIHdpZHRoOiAyNDBweDtcclxuICAgIGhlaWdodDoyNDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIG9iamVjdC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5oMXtcclxuICAgIGZvbnQtc2l6ZTogNDJweDtcclxufVxyXG5oMntcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG4uY3Vyc29yLXBvaW50ZXJ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5zdWJtaXQtYnV0dG9ue1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5jYW5jZWwtYnV0dG9ue1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQ7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGJhY2tncm91bmQ6ICMxZDIwMmI7XHJcbn1cclxuLmZvcm17XHJcbiAgICBtYXgtd2lkdGg6IDMwMHB4O1xyXG59XHJcbkBtZWRpYShtaW4td2lkdGg6IDEzODBweCl7XHJcbiAgICAucGFnZS1jb250YWluZXJ7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxOTVweDtcclxuICAgIH1cclxuICAgIC5hdmF0YXJ7XHJcbiAgICAgICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgICAgIGhlaWdodDozMDBweDtcclxuICAgIH1cclxufVxyXG5ocntcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjRkZGRkZGMUE7XHJcbn1cclxuLmNoZWNrbWFyayB7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGJvcmRlcjogc29saWQgMnB4IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPVwicmFkaW9cIl06Y2hlY2tlZCArIC5jaGVja21hcmsge1xyXG4gICAgYm9yZGVyOiBzb2xpZCAycHggIzlGRkZCMTtcclxuICAgIHBhZGRpbmc6MnB4O1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPVwicmFkaW9cIl06Y2hlY2tlZCArIC5jaGVja21hcmsgLmNoZWNrbWFyay1pbm5lciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjOUZGRkIxO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9dGV4dF17XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGMUE7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBoZWlnaHQ6NDhweDtcclxufVxyXG5cclxuLmNoZWNrYm94bWFyayB7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGJvcmRlcjogc29saWQgMnB4IHdoaXRlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06Y2hlY2tlZCArIC5jaGVja2JveG1hcmsge1xyXG4gICAgYm9yZGVyOiBzb2xpZCAycHggIzlGRkZCMTtcclxuICAgIGJhY2tncm91bmQ6ICM5RkZGQjE7XHJcbiAgICBwYWRkaW5nOjJweDtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWQgKyAuY2hlY2tib3htYXJrIC5jaGVja2JveG1hcmstaW5uZXIge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDNweDtcclxuICAgIG1hcmdpbi10b3A6IC0ycHg7XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYm9yZGVyOiBzb2xpZCAjMjEyMTIxO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAwIDJweCAycHggMDtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxufSIsIi5hdmF0YXIge1xuICB3aWR0aDogMjQwcHg7XG4gIGhlaWdodDogMjQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXI7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbmgxIHtcbiAgZm9udC1zaXplOiA0MnB4O1xufVxuXG5oMiB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLmN1cnNvci1wb2ludGVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uc3VibWl0LWJ1dHRvbiB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uY2FuY2VsLWJ1dHRvbiB7XG4gIGJvcmRlcjogMXB4IHNvbGlkO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYmFja2dyb3VuZDogIzFkMjAyYjtcbn1cblxuLmZvcm0ge1xuICBtYXgtd2lkdGg6IDMwMHB4O1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogMTM4MHB4KSB7XG4gIC5wYWdlLWNvbnRhaW5lciB7XG4gICAgcGFkZGluZy1sZWZ0OiAxOTVweDtcbiAgfVxuXG4gIC5hdmF0YXIge1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICBoZWlnaHQ6IDMwMHB4O1xuICB9XG59XG5ociB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjRkZGRkZGMUE7XG59XG5cbi5jaGVja21hcmsge1xuICBoZWlnaHQ6IDIwcHg7XG4gIHdpZHRoOiAyMHB4O1xuICBib3JkZXI6IHNvbGlkIDJweCB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmlucHV0W3R5cGU9cmFkaW9dOmNoZWNrZWQgKyAuY2hlY2ttYXJrIHtcbiAgYm9yZGVyOiBzb2xpZCAycHggIzlGRkZCMTtcbiAgcGFkZGluZzogMnB4O1xufVxuXG5pbnB1dFt0eXBlPXJhZGlvXTpjaGVja2VkICsgLmNoZWNrbWFyayAuY2hlY2ttYXJrLWlubmVyIHtcbiAgYmFja2dyb3VuZDogIzlGRkZCMTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG5pbnB1dFt0eXBlPXRleHRdIHtcbiAgYmFja2dyb3VuZDogI0ZGRkZGRjFBO1xuICBjb2xvcjogd2hpdGU7XG4gIGhlaWdodDogNDhweDtcbn1cblxuLmNoZWNrYm94bWFyayB7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IDIwcHg7XG4gIGJvcmRlcjogc29saWQgMnB4IHdoaXRlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbn1cblxuaW5wdXRbdHlwZT1jaGVja2JveF06Y2hlY2tlZCArIC5jaGVja2JveG1hcmsge1xuICBib3JkZXI6IHNvbGlkIDJweCAjOUZGRkIxO1xuICBiYWNrZ3JvdW5kOiAjOUZGRkIxO1xuICBwYWRkaW5nOiAycHg7XG59XG5cbmlucHV0W3R5cGU9Y2hlY2tib3hdOmNoZWNrZWQgKyAuY2hlY2tib3htYXJrIC5jaGVja2JveG1hcmstaW5uZXIge1xuICBtYXJnaW4tbGVmdDogM3B4O1xuICBtYXJnaW4tdG9wOiAtMnB4O1xuICB3aWR0aDogNzAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlcjogc29saWQgIzIxMjEyMTtcbiAgYm9yZGVyLXdpZHRoOiAwIDJweCAycHggMDtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserInfoAdminComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-user-info-admin',
                templateUrl: './user-info-admin.component.html',
                styleUrls: ['./user-info-admin.component.scss']
            }]
    }], function () { return []; }, { globalConfig: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
const UserInfoAdminWidget = {
    type: 'page',
    component: UserInfoAdminComponent,
    defaultconfig: []
};


/***/ }),

/***/ "../widgets/src/lib/components/user-info/user-info.component.ts":
/*!**********************************************************************!*\
  !*** ../widgets/src/lib/components/user-info/user-info.component.ts ***!
  \**********************************************************************/
/*! exports provided: UserInfoComponent, UserInfoWidget */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserInfoComponent", function() { return UserInfoComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserInfoWidget", function() { return UserInfoWidget; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



const _c0 = function (a0) { return { color: a0 }; };
function UserInfoComponent_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    const _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Rachel Bradly");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "rachelbl@gmail.com");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Admin");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserInfoComponent_ng_container_13_Template_h2_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r60); const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r59.setEditMode("user_info"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Update info");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx_r55.globalConfig.LinkWidget.styles.color));
} }
const _c1 = function (a0, a1) { return { color: a0, background: a1 }; };
const _c2 = function (a0, a1) { return { color: a0, borderColor: a1 }; };
function UserInfoComponent_ng_container_14_Template(rf, ctx) { if (rf & 1) {
    const _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Lastname");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserInfoComponent_ng_container_14_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r62); const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r61.setEditMode(""); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserInfoComponent_ng_container_14_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r62); const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r63.setEditMode(""); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c1, ctx_r56.globalConfig.ButtonWidget.color, ctx_r56.globalConfig.ButtonWidget.background));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](5, _c2, ctx_r56.globalConfig.ButtonWidget.background, ctx_r56.globalConfig.ButtonWidget.background));
} }
function UserInfoComponent_ng_container_18_Template(rf, ctx) { if (rf & 1) {
    const _r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserInfoComponent_ng_container_18_Template_h2_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r65); const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r64.setEditMode("user_password"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Change Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx_r57.globalConfig.LinkWidget.styles.color));
} }
function UserInfoComponent_ng_container_19_Template(rf, ctx) { if (rf & 1) {
    const _r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Change Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserInfoComponent_ng_container_19_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r67); const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r66.setEditMode(""); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserInfoComponent_ng_container_19_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r67); const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r68.setEditMode(""); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c1, ctx_r58.globalConfig.ButtonWidget.color, ctx_r58.globalConfig.ButtonWidget.background));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](5, _c2, ctx_r58.globalConfig.ButtonWidget.background, ctx_r58.globalConfig.ButtonWidget.background));
} }
const _c3 = function (a0) { return { background: a0 }; };
class UserInfoComponent {
    constructor() {
        this.editMode = '';
    }
    ngOnInit() { }
    setEditMode(value) {
        this.editMode = value;
    }
    test() {
        console.log('test');
    }
}
UserInfoComponent.ɵfac = function UserInfoComponent_Factory(t) { return new (t || UserInfoComponent)(); };
UserInfoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserInfoComponent, selectors: [["app-user-info"]], inputs: { globalConfig: "globalConfig" }, decls: 20, vars: 7, consts: [[1, "container-fluid", "h-100", "page-container"], [1, "h-100", "row", "justify-content-center"], [1, "col-12", "col-md-3", "p-5"], [1, "text-white", "ml-md-5"], [1, "avatar", "position-relative", "ml-md-5", "mt-5", "cursor-pointer"], ["src", "https://i0.wp.com/danongonline.com.vn/wp-content/uploads/2018/02/anh-girl-xinh-9x-kute-24.jpg", 1, "w-100", "h-100"], [1, "position-absolute", "w-100", "d-flex", "justify-content-center", 2, "background-color", "#FFFFFF7A", "height", "30%", "bottom", "0px"], [1, "material-icons", "align-self-center", 2, "font-size", "40px"], [1, "col-12", "col-md-4", "p-5"], [4, "ngIf"], [1, "col-12", "col-md-5", "h-100", "p-5", 3, "ngStyle"], [1, "text-white"], [1, "text-white", "mt-5"], [1, "d-flex", "cursor-pointer", 3, "ngStyle", "click"], [1, "mr-3"], [1, "ml-5", "material-icons", "align-self-center"], [1, "form", "mt-5"], [1, "text-white", "mt-3"], ["type", "text", "value", "Rachel", 1, "form-control"], ["type", "text", "value", "Bradly", 1, "form-control"], ["type", "text", "value", "rachelbl@gmail.com", 1, "form-control"], [1, "btn", "btn-block", "mt-4", "submit-button", 3, "ngStyle", "click"], [1, "btn", "btn-block", "mt-2", "cancel-button", 3, "ngStyle", "click"], [1, "d-flex", "cursor-pointer", "mt-5", 3, "ngStyle", "click"], [1, "form"], ["type", "text", "placeholder", "Old Password", 1, "form-control", "mt-3"], ["type", "text", "placeholder", "New Password", 1, "form-control", "mt-3"], ["type", "text", "placeholder", "Confirm New Password", 1, "form-control", "mt-3"]], template: function UserInfoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Basic Information");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "camera_alt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, UserInfoComponent_ng_container_13_Template, 12, 3, "ng-container", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, UserInfoComponent_ng_container_14_Template, 15, 8, "ng-container", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h2", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Security and Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, UserInfoComponent_ng_container_18_Template, 6, 3, "ng-container", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, UserInfoComponent_ng_container_19_Template, 11, 8, "ng-container", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.editMode != "user_info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.editMode == "user_info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c3, ctx.globalConfig.AreaContainerWidget.backgroundColor));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.editMode != "user_password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.editMode == "user_password");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"]], styles: [".avatar[_ngcontent-%COMP%] {\n  width: 240px;\n  height: 240px;\n  border-radius: 50%;\n  -o-object-position: center;\n     object-position: center;\n  overflow: hidden;\n}\n\nh1[_ngcontent-%COMP%] {\n  font-size: 42px;\n}\n\nh2[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n\n.cursor-pointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.submit-button[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n.cancel-button[_ngcontent-%COMP%] {\n  border: 1px solid;\n  font-weight: bold;\n  background: #1d202b;\n}\n\n.form[_ngcontent-%COMP%] {\n  max-width: 300px;\n}\n\n@media (min-width: 1380px) {\n  .page-container[_ngcontent-%COMP%] {\n    padding-left: 195px;\n  }\n\n  .avatar[_ngcontent-%COMP%] {\n    width: 300px;\n    height: 300px;\n  }\n}\n\nhr[_ngcontent-%COMP%] {\n  border-top: 1px solid #FFFFFF1A;\n}\n\n.checkmark[_ngcontent-%COMP%] {\n  height: 20px;\n  width: 20px;\n  border: solid 2px white;\n  border-radius: 50%;\n  cursor: pointer;\n}\n\ninput[type=radio][_ngcontent-%COMP%]:checked    + .checkmark[_ngcontent-%COMP%] {\n  border: solid 2px #9FFFB1;\n  padding: 2px;\n}\n\ninput[type=radio][_ngcontent-%COMP%]:checked    + .checkmark[_ngcontent-%COMP%]   .checkmark-inner[_ngcontent-%COMP%] {\n  background: #9FFFB1;\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n}\n\ninput[type=text][_ngcontent-%COMP%] {\n  background: #FFFFFF1A;\n  color: white;\n  height: 48px;\n}\n\n.checkboxmark[_ngcontent-%COMP%] {\n  height: 20px;\n  width: 20px;\n  border: solid 2px white;\n  cursor: pointer;\n  border-radius: 3px;\n}\n\ninput[type=checkbox][_ngcontent-%COMP%]:checked    + .checkboxmark[_ngcontent-%COMP%] {\n  border: solid 2px #9FFFB1;\n  background: #9FFFB1;\n  padding: 2px;\n}\n\ninput[type=checkbox][_ngcontent-%COMP%]:checked    + .checkboxmark[_ngcontent-%COMP%]   .checkboxmark-inner[_ngcontent-%COMP%] {\n  margin-left: 3px;\n  margin-top: -2px;\n  width: 70%;\n  height: 100%;\n  border: solid #212121;\n  border-width: 0 2px 2px 0;\n  transform: rotate(45deg);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3dpZGdldHMvc3JjL2xpYi9jb21wb25lbnRzL3VzZXItaW5mby9FOlxcUHJvamVjdFxcYWlzLXBvYy9wcm9qZWN0c1xcd2lkZ2V0c1xcc3JjXFxsaWJcXGNvbXBvbmVudHNcXHVzZXItaW5mb1xcdXNlci1pbmZvLmNvbXBvbmVudC5zY3NzIiwicHJvamVjdHMvd2lkZ2V0cy9zcmMvbGliL2NvbXBvbmVudHMvdXNlci1pbmZvL3VzZXItaW5mby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtLQUFBLHVCQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURDQTtFQUNJLGVBQUE7QUNFSjs7QURBQTtFQUNJLGVBQUE7QUNHSjs7QUREQTtFQUNJLGVBQUE7QUNJSjs7QUREQTtFQUNJLGlCQUFBO0FDSUo7O0FEREE7RUFDSSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUNJSjs7QURGQTtFQUNJLGdCQUFBO0FDS0o7O0FESEE7RUFDSTtJQUNJLG1CQUFBO0VDTU47O0VESkU7SUFDSSxZQUFBO0lBQ0EsYUFBQTtFQ09OO0FBQ0Y7O0FETEE7RUFDSSwrQkFBQTtBQ09KOztBRExBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ1FKOztBRExBO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0FDUUo7O0FETEE7RUFDSSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNRSjs7QURMQTtFQUNJLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUNRSjs7QURMQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNRSjs7QURMQTtFQUNJLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FDUUo7O0FETEE7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0Esd0JBQUE7QUNRSiIsImZpbGUiOiJwcm9qZWN0cy93aWRnZXRzL3NyYy9saWIvY29tcG9uZW50cy91c2VyLWluZm8vdXNlci1pbmZvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmF2YXRhcntcclxuICAgIHdpZHRoOiAyNDBweDtcclxuICAgIGhlaWdodDoyNDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIG9iamVjdC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5oMXtcclxuICAgIGZvbnQtc2l6ZTogNDJweDtcclxufVxyXG5oMntcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG4uY3Vyc29yLXBvaW50ZXJ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5zdWJtaXQtYnV0dG9ue1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5jYW5jZWwtYnV0dG9ue1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQ7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGJhY2tncm91bmQ6ICMxZDIwMmI7XHJcbn1cclxuLmZvcm17XHJcbiAgICBtYXgtd2lkdGg6IDMwMHB4O1xyXG59XHJcbkBtZWRpYShtaW4td2lkdGg6IDEzODBweCl7XHJcbiAgICAucGFnZS1jb250YWluZXJ7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxOTVweDtcclxuICAgIH1cclxuICAgIC5hdmF0YXJ7XHJcbiAgICAgICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgICAgIGhlaWdodDozMDBweDtcclxuICAgIH1cclxufVxyXG5ocntcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjRkZGRkZGMUE7XHJcbn1cclxuLmNoZWNrbWFyayB7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGJvcmRlcjogc29saWQgMnB4IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPVwicmFkaW9cIl06Y2hlY2tlZCArIC5jaGVja21hcmsge1xyXG4gICAgYm9yZGVyOiBzb2xpZCAycHggIzlGRkZCMTtcclxuICAgIHBhZGRpbmc6MnB4O1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPVwicmFkaW9cIl06Y2hlY2tlZCArIC5jaGVja21hcmsgLmNoZWNrbWFyay1pbm5lciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjOUZGRkIxO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9dGV4dF17XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGMUE7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBoZWlnaHQ6NDhweDtcclxufVxyXG5cclxuLmNoZWNrYm94bWFyayB7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGJvcmRlcjogc29saWQgMnB4IHdoaXRlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06Y2hlY2tlZCArIC5jaGVja2JveG1hcmsge1xyXG4gICAgYm9yZGVyOiBzb2xpZCAycHggIzlGRkZCMTtcclxuICAgIGJhY2tncm91bmQ6ICM5RkZGQjE7XHJcbiAgICBwYWRkaW5nOjJweDtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWQgKyAuY2hlY2tib3htYXJrIC5jaGVja2JveG1hcmstaW5uZXIge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDNweDtcclxuICAgIG1hcmdpbi10b3A6IC0ycHg7XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYm9yZGVyOiBzb2xpZCAjMjEyMTIxO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAwIDJweCAycHggMDtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxufSIsIi5hdmF0YXIge1xuICB3aWR0aDogMjQwcHg7XG4gIGhlaWdodDogMjQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXI7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbmgxIHtcbiAgZm9udC1zaXplOiA0MnB4O1xufVxuXG5oMiB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLmN1cnNvci1wb2ludGVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uc3VibWl0LWJ1dHRvbiB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uY2FuY2VsLWJ1dHRvbiB7XG4gIGJvcmRlcjogMXB4IHNvbGlkO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYmFja2dyb3VuZDogIzFkMjAyYjtcbn1cblxuLmZvcm0ge1xuICBtYXgtd2lkdGg6IDMwMHB4O1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogMTM4MHB4KSB7XG4gIC5wYWdlLWNvbnRhaW5lciB7XG4gICAgcGFkZGluZy1sZWZ0OiAxOTVweDtcbiAgfVxuXG4gIC5hdmF0YXIge1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICBoZWlnaHQ6IDMwMHB4O1xuICB9XG59XG5ociB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjRkZGRkZGMUE7XG59XG5cbi5jaGVja21hcmsge1xuICBoZWlnaHQ6IDIwcHg7XG4gIHdpZHRoOiAyMHB4O1xuICBib3JkZXI6IHNvbGlkIDJweCB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmlucHV0W3R5cGU9cmFkaW9dOmNoZWNrZWQgKyAuY2hlY2ttYXJrIHtcbiAgYm9yZGVyOiBzb2xpZCAycHggIzlGRkZCMTtcbiAgcGFkZGluZzogMnB4O1xufVxuXG5pbnB1dFt0eXBlPXJhZGlvXTpjaGVja2VkICsgLmNoZWNrbWFyayAuY2hlY2ttYXJrLWlubmVyIHtcbiAgYmFja2dyb3VuZDogIzlGRkZCMTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG5pbnB1dFt0eXBlPXRleHRdIHtcbiAgYmFja2dyb3VuZDogI0ZGRkZGRjFBO1xuICBjb2xvcjogd2hpdGU7XG4gIGhlaWdodDogNDhweDtcbn1cblxuLmNoZWNrYm94bWFyayB7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IDIwcHg7XG4gIGJvcmRlcjogc29saWQgMnB4IHdoaXRlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbn1cblxuaW5wdXRbdHlwZT1jaGVja2JveF06Y2hlY2tlZCArIC5jaGVja2JveG1hcmsge1xuICBib3JkZXI6IHNvbGlkIDJweCAjOUZGRkIxO1xuICBiYWNrZ3JvdW5kOiAjOUZGRkIxO1xuICBwYWRkaW5nOiAycHg7XG59XG5cbmlucHV0W3R5cGU9Y2hlY2tib3hdOmNoZWNrZWQgKyAuY2hlY2tib3htYXJrIC5jaGVja2JveG1hcmstaW5uZXIge1xuICBtYXJnaW4tbGVmdDogM3B4O1xuICBtYXJnaW4tdG9wOiAtMnB4O1xuICB3aWR0aDogNzAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlcjogc29saWQgIzIxMjEyMTtcbiAgYm9yZGVyLXdpZHRoOiAwIDJweCAycHggMDtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserInfoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-user-info',
                templateUrl: './user-info.component.html',
                styleUrls: ['./user-info.component.scss']
            }]
    }], function () { return []; }, { globalConfig: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
const UserInfoWidget = {
    type: 'page',
    component: UserInfoComponent,
    defaultconfig: []
};


/***/ }),

/***/ "../widgets/src/lib/components/user-management/user-management.component.ts":
/*!**********************************************************************************!*\
  !*** ../widgets/src/lib/components/user-management/user-management.component.ts ***!
  \**********************************************************************************/
/*! exports provided: UserManagementComponent, UserManagementWidget */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserManagementComponent", function() { return UserManagementComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserManagementWidget", function() { return UserManagementWidget; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function UserManagementComponent_tr_20_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Admin");
} }
function UserManagementComponent_tr_20_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "User");
} }
function UserManagementComponent_tr_20_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", "{Role}", " ");
} }
function UserManagementComponent_tr_20_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Inactive");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserManagementComponent_tr_20_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Active");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function () { return ["/private"]; };
const _c1 = function () { return { page: "user-information-admin" }; };
function UserManagementComponent_tr_20_Template(rf, ctx) { if (rf & 1) {
    const _r89 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserManagementComponent_tr_20_Template_td_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r89); const ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r88.previewUserInfo(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, UserManagementComponent_tr_20_ng_template_5_Template, 1, 0, "ng-template", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, UserManagementComponent_tr_20_ng_template_6_Template, 1, 0, "ng-template", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, UserManagementComponent_tr_20_ng_template_7_Template, 1, 1, "ng-template", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, UserManagementComponent_tr_20_ng_template_11_Template, 2, 0, "ng-template", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, UserManagementComponent_tr_20_ng_template_12_Template, 2, 0, "ng-template", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "19 May 2020");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "more_horiz");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r82 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", user_r82.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", user_r82.role === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", user_r82.role === 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", user_r82.role === 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r82.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", user_r82.status === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", user_r82.status === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c1));
} }
class UserManagementComponent {
    constructor(router) {
        this.router = router;
        this.userList = [
            {
                id: 1,
                name: 'Rachel Bradley',
                role: 1,
                email: 'Kevin_ot@gmarachel.bl@gmail.com',
                status: 0,
                lastAttended: '15 May 2020',
            },
            {
                id: 2,
                name: 'Kevin Elliot',
                role: 2,
                email: 'Kevin_ot@gmail.com',
                status: 1,
                lastAttended: '15 May 2020',
            },
            {
                id: 3,
                name: 'Larry Holland',
                role: 1,
                email: 'larry.holland@gmail.com',
                status: 0,
                lastAttended: '15 May 2020',
            },
            {
                id: 4,
                name: 'Jerry Reynolds',
                role: 2,
                email: 'Kevin_ojerry_reynolds@gmail.com',
                status: 1,
                lastAttended: '15 May 2020',
            },
            {
                id: 5,
                name: 'Randy Wells',
                role: 2,
                email: 'Krandy.wells01@gmail.com',
                status: 1,
                lastAttended: '15 May 2020',
            },
            {
                id: 6,
                name: 'Roy Lynch',
                role: 2,
                email: 'roy_lynch@gmail.com',
                status: 1,
                lastAttended: '15 May 2020',
            },
            {
                id: 7,
                name: 'Denise Griffin',
                role: 1,
                email: 'denise1984@gmail.com',
                status: 1,
                lastAttended: '15 May 2020',
            },
            {
                id: 8,
                name: 'Adam Vargas',
                role: 1,
                email: 'adam.vargas@gmail.com',
                status: 1,
                lastAttended: '15 May 2020',
            },
            {
                id: 9,
                name: 'Kathryn Gray',
                role: 2,
                email: 'kathryn_gray_real@gmail.com',
                status: 0,
                lastAttended: '15 May 2020',
            },
            {
                id: 10,
                name: 'Kevin Elliot',
                role: 3,
                email: 'Kevin_ot@gmail.com',
                status: 0,
                lastAttended: '15 May 2020',
            },
        ];
    }
    ngOnInit() { }
    previewUserInfo() {
        if (localStorage.getItem('switchMode') === 'preview') {
            localStorage.setItem('viewMode', 'preview');
            this.router.navigateByUrl('/editor?page=user-information');
        }
    }
}
UserManagementComponent.ɵfac = function UserManagementComponent_Factory(t) { return new (t || UserManagementComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
UserManagementComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserManagementComponent, selectors: [["app-user-manage"]], decls: 28, vars: 2, consts: [["id", "user-manage"], [1, "list"], [1, "list-user"], [1, "userQuantity"], [1, "table"], [4, "ngFor", "ngForOf"], [1, "pagination"], [1, "material-icons"], ["href", "", 1, "number-pagination"], [2, "font-size", "16px", 3, "click"], ["src", "https://i0.wp.com/danongonline.com.vn/wp-content/uploads/2018/02/anh-girl-xinh-9x-kute-24.jpg", "width", "30px", "height", "30px", "alt", "avatar", 1, "rounded-circle"], [3, "ngIf"], [1, "dropdown"], ["id", "dropdownMenuButton", "data-toggle", "dropdown", 1, "material-icons", "text-secondary"], ["aria-labelledby", "dropdownMenuButton", 1, "dropdown-menu", "dropdown-menu-right", "p-2", 2, "background", "#212121"], [1, "d-flex", "text-white", 3, "routerLink", "queryParams"], [1, "material-icons", "align-self-center", "mr-3"], [1, "align-self-center"], [1, "d-flex", "mt-2", "text-danger"], [2, "color", "#9FFFB1"]], template: function UserManagementComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "table", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Role");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Email Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Last attended");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, UserManagementComponent_tr_20_Template, 30, 11, "tr", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " keyboard_arrow_left ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " keyboard_arrow_right ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Member (", ctx.userList.length, ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.userList);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: ["@media only screen and (min-width: 1366px) {\n  [_nghost-%COMP%] {\n    zoom: 0.8;\n  }\n}\n@media only screen and (min-width: 1400px) {\n  [_nghost-%COMP%] {\n    zoom: 0.8;\n  }\n}\n@media only screen and (min-width: 1440px) {\n  [_nghost-%COMP%] {\n    zoom: 0.85;\n  }\n}\n@media only screen and (min-width: 1600px) {\n  [_nghost-%COMP%] {\n    zoom: 0.9;\n  }\n}\n@media only screen and (min-width: 1680px) {\n  [_nghost-%COMP%] {\n    zoom: 0.95;\n  }\n}\n@media only screen and (min-width: 1920px) {\n  [_nghost-%COMP%] {\n    zoom: 1;\n  }\n}\n[_nghost-%COMP%] {\n  width: 100%;\n  height: 100%;\n  margin: 0 auto;\n  overflow: hidden;\n  position: relative;\n}\n#user-manage[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n#user-manage[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: auto;\n  position: relative;\n}\n#user-manage[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .list-user[_ngcontent-%COMP%] {\n  width: 1100px;\n  margin: auto;\n}\n#user-manage[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .list-user[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: \"SF Pro Text-Bold\";\n  margin-top: 50px;\n  font-size: 20px;\n  color: #fff;\n}\n#user-manage[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .list-user[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  color: #fff;\n}\n#user-manage[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .list-user[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], #user-manage[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .list-user[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border: none;\n  padding-left: 0 !important;\n}\n#user-manage[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .list-user[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  font-family: \"SF Pro Text-Regular\";\n  font-size: 16px;\n}\n#user-manage[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .list-user[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-family: \"SF Pro Text-Medium\";\n  font-size: 18px;\n  font-weight: 500;\n}\n#user-manage[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .list-user[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n#user-manage[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .list-user[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n  display: flex;\n  align-items: center;\n  font-size: 1.1rem;\n  font-weight: 500;\n  font-family: \"SF Pro Text-Bold\";\n}\n#user-manage[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .list-user[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child   img[_ngcontent-%COMP%] {\n  margin-right: 1rem;\n}\n#user-manage[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%] {\n  width: 70px;\n  margin: 5rem auto;\n  color: #fff;\n  left: 50%;\n  top: 90%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n#user-manage[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n}\n#user-manage[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]   .number-pagination[_ngcontent-%COMP%] {\n  color: #fff !important;\n  text-decoration: none;\n  font-size: 1.2rem;\n  margin: auto 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3dpZGdldHMvc3JjL2xpYi9jb21wb25lbnRzL3VzZXItbWFuYWdlbWVudC9FOlxcUHJvamVjdFxcYWlzLXBvYy9wcm9qZWN0c1xcd2lkZ2V0c1xcc3JjXFxsaWJcXHNoYXJlZFxcY29tbW9uXFxfem9vbS5zY3NzIiwicHJvamVjdHMvd2lkZ2V0cy9zcmMvbGliL2NvbXBvbmVudHMvdXNlci1tYW5hZ2VtZW50L3VzZXItbWFuYWdlbWVudC5jb21wb25lbnQuc2NzcyIsInByb2plY3RzL3dpZGdldHMvc3JjL2xpYi9jb21wb25lbnRzL3VzZXItbWFuYWdlbWVudC9FOlxcUHJvamVjdFxcYWlzLXBvYy9wcm9qZWN0c1xcd2lkZ2V0c1xcc3JjXFxsaWJcXGNvbXBvbmVudHNcXHVzZXItbWFuYWdlbWVudFxcdXNlci1tYW5hZ2VtZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBREY7SUFFSSxTQUFBO0VDQ0Y7QUFDRjtBRENFO0VBTEY7SUFNSSxTQUFBO0VDRUY7QUFDRjtBREFFO0VBVEY7SUFVSSxVQUFBO0VDR0Y7QUFDRjtBRERFO0VBYkY7SUFjSSxTQUFBO0VDSUY7QUFDRjtBREZFO0VBakJGO0lBa0JJLFVBQUE7RUNLRjtBQUNGO0FESEU7RUFyQkY7SUFzQkksT0FBQTtFQ01GO0FBQ0Y7QUMzQkE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFFQSxnQkFBQTtFQUNBLGtCQUFBO0FENkJGO0FDMUJBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0FENkJGO0FDM0JFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFFQSxrQkFBQTtBRDRCSjtBQzFCSTtFQUNFLGFBQUE7RUFDQSxZQUFBO0FENEJOO0FDMUJNO0VBQ0UsK0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FENEJSO0FDekJNO0VBQ0UsV0FBQTtBRDJCUjtBQ3pCUTs7RUFFRSxZQUFBO0VBQ0EsMEJBQUE7QUQyQlY7QUN4QlE7RUFDRSxrQ0FBQTtFQUNBLGVBQUE7QUQwQlY7QUN2QlE7RUFDRSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBRHlCVjtBQ3BCWTtFQUNFLGVBQUE7QURzQmQ7QUNyQmM7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsK0JBQUE7QUR1QmhCO0FDdEJnQjtFQUNFLGtCQUFBO0FEd0JsQjtBQ2ZJO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBRUEsV0FBQTtFQUVBLFNBQUE7RUFDQSxRQUFBO0VBRUEsYUFBQTtFQUVBLG1CQUFBO0VBQ0EsdUJBQUE7QURhTjtBQ1hNO0VBQ0UsaUJBQUE7QURhUjtBQ1ZNO0VBQ0Usc0JBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QURZUiIsImZpbGUiOiJwcm9qZWN0cy93aWRnZXRzL3NyYy9saWIvY29tcG9uZW50cy91c2VyLW1hbmFnZW1lbnQvdXNlci1tYW5hZ2VtZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTM2NnB4KSB7XHJcbiAgICB6b29tOiAwLjg7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE0MDBweCkge1xyXG4gICAgem9vbTogMC44O1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNDQwcHgpIHtcclxuICAgIHpvb206IDAuODU7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE2MDBweCkge1xyXG4gICAgem9vbTogMC45O1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNjgwcHgpIHtcclxuICAgIHpvb206IDAuOTU7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE5MjBweCkge1xyXG4gICAgem9vbTogMTtcclxuICB9XHJcbn1cclxuIiwiQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMzY2cHgpIHtcbiAgOmhvc3Qge1xuICAgIHpvb206IDAuODtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNDAwcHgpIHtcbiAgOmhvc3Qge1xuICAgIHpvb206IDAuODtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNDQwcHgpIHtcbiAgOmhvc3Qge1xuICAgIHpvb206IDAuODU7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTYwMHB4KSB7XG4gIDpob3N0IHtcbiAgICB6b29tOiAwLjk7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTY4MHB4KSB7XG4gIDpob3N0IHtcbiAgICB6b29tOiAwLjk1O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE5MjBweCkge1xuICA6aG9zdCB7XG4gICAgem9vbTogMTtcbiAgfVxufVxuXG46aG9zdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbiN1c2VyLW1hbmFnZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4jdXNlci1tYW5hZ2UgLmxpc3Qge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiBhdXRvO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4jdXNlci1tYW5hZ2UgLmxpc3QgLmxpc3QtdXNlciB7XG4gIHdpZHRoOiAxMTAwcHg7XG4gIG1hcmdpbjogYXV0bztcbn1cbiN1c2VyLW1hbmFnZSAubGlzdCAubGlzdC11c2VyIHAge1xuICBmb250LWZhbWlseTogXCJTRiBQcm8gVGV4dC1Cb2xkXCI7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6ICNmZmY7XG59XG4jdXNlci1tYW5hZ2UgLmxpc3QgLmxpc3QtdXNlciB0YWJsZSB7XG4gIGNvbG9yOiAjZmZmO1xufVxuI3VzZXItbWFuYWdlIC5saXN0IC5saXN0LXVzZXIgdGFibGUgdGgsXG4jdXNlci1tYW5hZ2UgLmxpc3QgLmxpc3QtdXNlciB0YWJsZSB0ZCB7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZy1sZWZ0OiAwICFpbXBvcnRhbnQ7XG59XG4jdXNlci1tYW5hZ2UgLmxpc3QgLmxpc3QtdXNlciB0YWJsZSB0ZCB7XG4gIGZvbnQtZmFtaWx5OiBcIlNGIFBybyBUZXh0LVJlZ3VsYXJcIjtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuI3VzZXItbWFuYWdlIC5saXN0IC5saXN0LXVzZXIgdGFibGUgdGgge1xuICBmb250LWZhbWlseTogXCJTRiBQcm8gVGV4dC1NZWRpdW1cIjtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuI3VzZXItbWFuYWdlIC5saXN0IC5saXN0LXVzZXIgdGFibGUgdGJvZHkgdHIgdGQge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4jdXNlci1tYW5hZ2UgLmxpc3QgLmxpc3QtdXNlciB0YWJsZSB0Ym9keSB0ciB0ZDpmaXJzdC1jaGlsZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LWZhbWlseTogXCJTRiBQcm8gVGV4dC1Cb2xkXCI7XG59XG4jdXNlci1tYW5hZ2UgLmxpc3QgLmxpc3QtdXNlciB0YWJsZSB0Ym9keSB0ciB0ZDpmaXJzdC1jaGlsZCBpbWcge1xuICBtYXJnaW4tcmlnaHQ6IDFyZW07XG59XG4jdXNlci1tYW5hZ2UgLmxpc3QgLnBhZ2luYXRpb24ge1xuICB3aWR0aDogNzBweDtcbiAgbWFyZ2luOiA1cmVtIGF1dG87XG4gIGNvbG9yOiAjZmZmO1xuICBsZWZ0OiA1MCU7XG4gIHRvcDogOTAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbiN1c2VyLW1hbmFnZSAubGlzdCAucGFnaW5hdGlvbiBzcGFuIHtcbiAgZm9udC1zaXplOiAxLjhyZW07XG59XG4jdXNlci1tYW5hZ2UgLmxpc3QgLnBhZ2luYXRpb24gLm51bWJlci1wYWdpbmF0aW9uIHtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgbWFyZ2luOiBhdXRvIDFyZW07XG59IiwiQGltcG9ydCBcIi4uLy4uL3NoYXJlZC9jb21tb24vem9vbVwiO1xyXG5cclxuOmhvc3Qge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICAvLyBIaWRkZW4gSGFtYnVyZ2VyXHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbiN1c2VyLW1hbmFnZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAubGlzdCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIC8vaGVpZ2h0OiBjYWxjKDEwODBweCAtIDE2MHB4KTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAubGlzdC11c2VyIHtcclxuICAgICAgd2lkdGg6IDExMDBweDtcclxuICAgICAgbWFyZ2luOiBhdXRvO1xyXG5cclxuICAgICAgcCB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiU0YgUHJvIFRleHQtQm9sZFwiO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0YWJsZSB7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcblxyXG4gICAgICAgIHRoLFxyXG4gICAgICAgIHRkIHtcclxuICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgIHBhZGRpbmctbGVmdDogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGQge1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6IFwiU0YgUHJvIFRleHQtUmVndWxhclwiO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGgge1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6IFwiU0YgUHJvIFRleHQtTWVkaXVtXCI7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGJvZHkge1xyXG4gICAgICAgICAgdHIge1xyXG4gICAgICAgICAgICB0ZCB7XHJcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICY6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJTRiBQcm8gVGV4dC1Cb2xkXCI7XHJcbiAgICAgICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnBhZ2luYXRpb24ge1xyXG4gICAgICB3aWR0aDogNzBweDtcclxuICAgICAgbWFyZ2luOiA1cmVtIGF1dG87XHJcblxyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuXHJcbiAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgdG9wOiA5MCU7XHJcblxyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gICAgICBzcGFuIHtcclxuICAgICAgICBmb250LXNpemU6IDEuOHJlbTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLm51bWJlci1wYWdpbmF0aW9uIHtcclxuICAgICAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgICAgICBtYXJnaW46IGF1dG8gMXJlbTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserManagementComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-user-manage',
                templateUrl: './user-management.component.html',
                styleUrls: ['./user-management.component.scss'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();
const UserManagementWidget = {
    type: 'page',
    component: UserManagementComponent,
    defaultconfig: [],
};


/***/ }),

/***/ "../widgets/src/lib/components/widget-setting/modal-select-sensor/modal-select-sensor.component.ts":
/*!*********************************************************************************************************!*\
  !*** ../widgets/src/lib/components/widget-setting/modal-select-sensor/modal-select-sensor.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: ModalSelectSensorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalSelectSensorComponent", function() { return ModalSelectSensorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/modal */ "../../node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm2015/ngx-bootstrap-modal.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




const _c0 = ["template"];
function ModalSelectSensorComponent_ng_template_0_ng_container_19_Template(rf, ctx) { if (rf & 1) {
    const _r144 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalSelectSensorComponent_ng_template_0_ng_container_19_Template_i_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r144); const row_r142 = ctx.$implicit; const ctx_r143 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r143.select(row_r142); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const row_r142 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](row_r142.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", row_r142.active);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("font-size", row_r142.value.length > 6 ? 18 : 32, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r142.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r142.variable);
} }
function ModalSelectSensorComponent_ng_template_0_ng_container_24_Template(rf, ctx) { if (rf & 1) {
    const _r147 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalSelectSensorComponent_ng_template_0_ng_container_24_Template_i_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r147); const row_r145 = ctx.$implicit; const ctx_r146 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r146.unSelect(row_r145); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const row_r145 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](row_r145.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("font-size", row_r145.value.length > 6 ? 18 : 32, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r145.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r145.variable);
} }
function ModalSelectSensorComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    const _r149 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Select Sensor");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalSelectSensorComponent_ng_template_0_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r149); const ctx_r148 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r148.hideModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Add");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Recently Add");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "All Thing");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h4", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Sensor");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ModalSelectSensorComponent_ng_template_0_ng_container_19_Template, 9, 8, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h4", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Select");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, ModalSelectSensorComponent_ng_template_0_ng_container_24_Template, 9, 6, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r139 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r139.sensors);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r139.selected);
} }
class ModalSelectSensorComponent {
    constructor(modalService) {
        this.modalService = modalService;
        this.sensors = [
            {
                id: 1,
                icon: 'feather-grid',
                active: false,
                value: '12.334.344,755',
                variable: 'GPS'
            },
            {
                id: 2,
                icon: 'feather-grid',
                active: true,
                value: '75.5',
                variable: 'Temprature'
            },
            {
                id: 3,
                icon: 'feather-grid',
                active: false,
                value: '47.65',
                variable: 'Huminity'
            },
            {
                id: 4,
                icon: 'feather-grid',
                active: false,
                value: '97%',
                variable: 'Battery'
            },
            {
                id: 5,
                icon: 'feather-grid',
                active: false,
                value: '58',
                variable: 'Gauge'
            },
            {
                id: 6,
                icon: 'feather-grid',
                active: false,
                value: '-59',
                variable: 'RSSI_NB'
            },
            {
                id: 7,
                icon: 'feather-grid',
                active: false,
                value: '0',
                variable: 'RSSI_WIFI'
            },
            {
                id: 8,
                icon: 'feather-grid',
                active: false,
                value: '1',
                variable: 'Lamp'
            },
            {
                id: 9,
                icon: 'feather-grid',
                active: false,
                value: '47.65',
                variable: 'Huminity'
            }
        ];
        this.selected = [this.sensors[2]];
    }
    ngOnInit() {
    }
    showModal() {
        this.modalRef = this.modalService.show(this.template, { class: 'modal-lg modal_select_sensor' });
    }
    hideModal() {
        this.modalRef.hide();
    }
    select(row) {
        this.selected.push(row);
    }
    unSelect(row) {
        this.selected = this.selected.filter(f => f.id !== row.id);
    }
}
ModalSelectSensorComponent.ɵfac = function ModalSelectSensorComponent_Factory(t) { return new (t || ModalSelectSensorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["BsModalService"])); };
ModalSelectSensorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ModalSelectSensorComponent, selectors: [["lib-modal-select-sensor"]], viewQuery: function ModalSelectSensorComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.template = _t.first);
    } }, decls: 2, vars: 0, consts: [["template", ""], [1, "modal-header"], ["id", "dialog-child-name", 1, "modal-title", "pull-left"], ["type", "button", "aria-label", "Close", 1, "btn", "pull-right", 3, "click"], [1, "modal-body"], [1, "col_1"], [1, "input_icon_container"], [1, "feather-search"], ["type", "text", "placeholder", "Search\u2026", 1, "form-control"], [1, "recently_add"], [1, "page_name"], [1, "col_2"], [1, "title"], [1, "sensors", "scroll-dark"], [4, "ngFor", "ngForOf"], [1, "col_3"], [1, "sensor"], [1, "icon"], [1, "feather-check", "rounded-circle", "cursor_pointer", 3, "click"], [1, "value"], [1, "variable"], [1, "feather-minus-circle", "cursor_pointer", 2, "font-size", "20px", "color", "#FFFFFF", "background", "unset", 3, "click"]], template: function ModalSelectSensorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ModalSelectSensorComponent_ng_template_0_Template, 25, 2, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: [".modal_select_sensor {\n  width: 922px;\n  height: 900px;\n}\n  .modal_select_sensor .modal-content {\n  width: 922px;\n  height: 900px;\n  background-color: #212121;\n}\n  .modal_select_sensor .modal-content .modal-header {\n  border-bottom: unset;\n  display: flex;\n  align-items: center;\n  padding: 30px;\n}\n  .modal_select_sensor .modal-content .modal-header .modal-title {\n  margin: 0;\n  color: #FFFFFF;\n  font-size: 20px;\n  font-family: \"SF Pro Text-Regular\";\n}\n  .modal_select_sensor .modal-content .modal-header .btn {\n  background-color: #9FFFB1;\n  font-size: 20px;\n  font-family: \"SF Pro Text-Bold\";\n  width: 142px;\n  height: 42px;\n}\n  .modal_select_sensor .modal-content .modal-body {\n  display: flex;\n  justify-content: space-between;\n  padding: 30px;\n}\n  .modal_select_sensor .modal-content .modal-body .col_1 {\n  width: 330px;\n  height: 735px;\n  padding-right: 30px;\n}\n  .modal_select_sensor .modal-content .modal-body .col_1 .input_icon_container {\n  position: relative;\n}\n  .modal_select_sensor .modal-content .modal-body .col_1 .input_icon_container .feather-search {\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  font-size: 25px;\n  color: #FFFFFF;\n}\n  .modal_select_sensor .modal-content .modal-body .col_1 .input_icon_container input[type=text] {\n  width: 300px;\n  height: 48px;\n  border: unset;\n  color: #FFFFFF;\n  background: #383838 0% 0% no-repeat padding-box;\n  padding-left: 50px;\n  font-size: 16px;\n  font-family: \"SF Pro Text-Regular\";\n}\n  .modal_select_sensor .modal-content .modal-body .col_1 .input_icon_container input[type=text]::-webkit-input-placeholder {\n  color: #FFFFFF;\n}\n  .modal_select_sensor .modal-content .modal-body .col_1 .input_icon_container input[type=text]::-moz-placeholder {\n  color: #FFFFFF;\n}\n  .modal_select_sensor .modal-content .modal-body .col_1 .input_icon_container input[type=text]:-ms-input-placeholder {\n  color: #FFFFFF;\n}\n  .modal_select_sensor .modal-content .modal-body .col_1 .input_icon_container input[type=text]::-ms-input-placeholder {\n  color: #FFFFFF;\n}\n  .modal_select_sensor .modal-content .modal-body .col_1 .input_icon_container input[type=text]::placeholder {\n  color: #FFFFFF;\n}\n  .modal_select_sensor .modal-content .modal-body .col_1 .recently_add {\n  margin-top: 40px;\n  color: #FFFFFF;\n  font-size: 20px;\n  font-family: \"SF Pro Text-Regular\";\n}\n  .modal_select_sensor .modal-content .modal-body .col_1 .page_name {\n  margin-top: 30px;\n  color: #909090;\n  font-size: 20px;\n  font-family: \"SF Pro Text-Regular\";\n}\n  .modal_select_sensor .modal-content .modal-body .col_1 hr {\n  border: 1px solid #595959;\n}\n  .modal_select_sensor .modal-content .modal-body .col_2 {\n  width: 350px;\n  height: 735px;\n  border-left: 1px solid #595959;\n  border-right: 1px solid #595959;\n  padding-right: 10px;\n}\n  .modal_select_sensor .modal-content .modal-body .col_2 .title {\n  color: #FFFFFF;\n  font-size: 20px;\n  padding-left: 20px;\n  font-family: \"SF Pro Text-Regular\";\n}\n  .modal_select_sensor .modal-content .modal-body .col_2 .sensors {\n  max-height: 695px;\n}\n  .modal_select_sensor .modal-content .modal-body .col_2 .sensors .sensor {\n  min-width: 140px;\n  min-height: 140px;\n  max-width: 140px;\n  max-height: 140px;\n  background-color: #000000;\n  display: flex;\n  flex-wrap: wrap;\n  align-content: space-between;\n  padding: 10px;\n  margin: 0 0 20px 20px;\n  float: left;\n}\n  .modal_select_sensor .modal-content .modal-body .col_2 .sensors .sensor .icon {\n  width: 100%;\n}\n  .modal_select_sensor .modal-content .modal-body .col_2 .sensors .sensor .icon i {\n  font-weight: bold;\n}\n  .modal_select_sensor .modal-content .modal-body .col_2 .sensors .sensor .icon i:nth-child(1) {\n  font-size: 20px;\n  float: left;\n  color: #9fffb1;\n}\n  .modal_select_sensor .modal-content .modal-body .col_2 .sensors .sensor .icon i:nth-child(2) {\n  float: right;\n  width: 20px;\n  height: 20px;\n  color: #000000;\n  background-color: #333333;\n  font-size: 14px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n  .modal_select_sensor .modal-content .modal-body .col_2 .sensors .sensor .icon i:nth-child(2).active {\n  background-color: #9fffb1;\n}\n  .modal_select_sensor .modal-content .modal-body .col_2 .sensors .sensor .value {\n  color: #FFFFFF;\n  font-family: \"SF Pro Rounded-Bold\";\n  word-break: break-all;\n  line-height: 1;\n  width: 100%;\n}\n  .modal_select_sensor .modal-content .modal-body .col_2 .sensors .sensor .variable {\n  color: #FFFFFF;\n  font-size: 14px;\n  font-family: \"SF Pro Text-Regular\";\n  width: 100%;\n}\n  .modal_select_sensor .modal-content .modal-body .col_3 {\n  width: 170px;\n  height: 735px;\n}\n  .modal_select_sensor .modal-content .modal-body .col_3 .title {\n  color: #FFFFFF;\n  font-size: 20px;\n  padding-left: 20px;\n  font-family: \"SF Pro Text-Regular\";\n}\n  .modal_select_sensor .modal-content .modal-body .col_3 .sensors {\n  max-height: 695px;\n}\n  .modal_select_sensor .modal-content .modal-body .col_3 .sensors .sensor {\n  min-width: 140px;\n  min-height: 140px;\n  max-width: 140px;\n  max-height: 140px;\n  background-color: #000000;\n  display: flex;\n  flex-wrap: wrap;\n  align-content: space-between;\n  padding: 10px;\n  margin: 0 0 20px 20px;\n  float: left;\n}\n  .modal_select_sensor .modal-content .modal-body .col_3 .sensors .sensor .icon {\n  width: 100%;\n}\n  .modal_select_sensor .modal-content .modal-body .col_3 .sensors .sensor .icon i {\n  font-weight: bold;\n}\n  .modal_select_sensor .modal-content .modal-body .col_3 .sensors .sensor .icon i:nth-child(1) {\n  font-size: 20px;\n  float: left;\n  color: #9fffb1;\n}\n  .modal_select_sensor .modal-content .modal-body .col_3 .sensors .sensor .icon i:nth-child(2) {\n  float: right;\n  width: 20px;\n  height: 20px;\n  color: #000000;\n  background-color: #333333;\n  font-size: 14px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n  .modal_select_sensor .modal-content .modal-body .col_3 .sensors .sensor .icon i:nth-child(2).active {\n  background-color: #9fffb1;\n}\n  .modal_select_sensor .modal-content .modal-body .col_3 .sensors .sensor .value {\n  color: #FFFFFF;\n  font-family: \"SF Pro Rounded-Bold\";\n  word-break: break-all;\n  line-height: 1;\n  width: 100%;\n}\n  .modal_select_sensor .modal-content .modal-body .col_3 .sensors .sensor .variable {\n  color: #FFFFFF;\n  font-size: 14px;\n  font-family: \"SF Pro Text-Regular\";\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3dpZGdldHMvc3JjL2xpYi9jb21wb25lbnRzL3dpZGdldC1zZXR0aW5nL21vZGFsLXNlbGVjdC1zZW5zb3IvRTpcXFByb2plY3RcXGFpcy1wb2MvcHJvamVjdHNcXHdpZGdldHNcXHNyY1xcbGliXFxjb21wb25lbnRzXFx3aWRnZXQtc2V0dGluZ1xcbW9kYWwtc2VsZWN0LXNlbnNvclxcbW9kYWwtc2VsZWN0LXNlbnNvci5jb21wb25lbnQuc2NzcyIsInByb2plY3RzL3dpZGdldHMvc3JjL2xpYi9jb21wb25lbnRzL3dpZGdldC1zZXR0aW5nL21vZGFsLXNlbGVjdC1zZW5zb3IvbW9kYWwtc2VsZWN0LXNlbnNvci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4REU7RUFDRSxZQUFBO0VBQ0EsYUFBQTtBQzdESjtBRCtESTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7QUM3RE47QUQrRE07RUFDRSxvQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUM3RFI7QUQrRFE7RUFDRSxTQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxrQ0FBQTtBQzdEVjtBRGdFUTtFQUNFLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLCtCQUFBO0VBRUEsWUFBQTtFQUNBLFlBQUE7QUMvRFY7QURtRU07RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxhQUFBO0FDakVSO0FEbUVRO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQ2pFVjtBRG1FVTtFQUNFLGtCQUFBO0FDakVaO0FEbUVZO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDakVkO0FEb0VZO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLCtDQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0NBQUE7QUNsRWQ7QURvRWM7RUFDRSxjQUFBO0FDbEVoQjtBRGlFYztFQUNFLGNBQUE7QUNsRWhCO0FEaUVjO0VBQ0UsY0FBQTtBQ2xFaEI7QURpRWM7RUFDRSxjQUFBO0FDbEVoQjtBRGlFYztFQUNFLGNBQUE7QUNsRWhCO0FEd0VVO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtDQUFBO0FDdEVaO0FEeUVVO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtDQUFBO0FDdkVaO0FEMEVVO0VBQ0UseUJBQUE7QUN4RVo7QUQ0RVE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsK0JBQUE7RUFDQSxtQkFBQTtBQzFFVjtBRDRFVTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQ0FBQTtBQzFFWjtBRDZFVTtFQUVFLGlCQUFBO0FDNUVaO0FEMUZFO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsNEJBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0FDNEZKO0FEMUZJO0VBQ0UsV0FBQTtBQzRGTjtBRDFGTTtFQUNFLGlCQUFBO0FDNEZSO0FEMUZRO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0FDNEZWO0FEekZRO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDMkZWO0FEekZVO0VBQ0UseUJBQUE7QUMyRlo7QURyRkk7RUFDRSxjQUFBO0VBQ0Esa0NBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FDdUZOO0FEcEZJO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxrQ0FBQTtFQUNBLFdBQUE7QUNzRk47QUQ2QlE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtBQzNCVjtBRDZCVTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQ0FBQTtBQzNCWjtBRDhCVTtFQUVFLGlCQUFBO0FDN0JaO0FEMUpFO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsNEJBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0FDNEpKO0FEMUpJO0VBQ0UsV0FBQTtBQzRKTjtBRDFKTTtFQUNFLGlCQUFBO0FDNEpSO0FEMUpRO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0FDNEpWO0FEekpRO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDMkpWO0FEekpVO0VBQ0UseUJBQUE7QUMySlo7QURySkk7RUFDRSxjQUFBO0VBQ0Esa0NBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FDdUpOO0FEcEpJO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxrQ0FBQTtFQUNBLFdBQUE7QUNzSk4iLCJmaWxlIjoicHJvamVjdHMvd2lkZ2V0cy9zcmMvbGliL2NvbXBvbmVudHMvd2lkZ2V0LXNldHRpbmcvbW9kYWwtc2VsZWN0LXNlbnNvci9tb2RhbC1zZWxlY3Qtc2Vuc29yLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1peGluIHNlbnNvciB7XHJcbiAgLnNlbnNvciB7XHJcbiAgICBtaW4td2lkdGg6IDE0MHB4O1xyXG4gICAgbWluLWhlaWdodDogMTQwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDE0MHB4O1xyXG4gICAgbWF4LWhlaWdodDogMTQwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgbWFyZ2luOiAwIDAgMjBweCAyMHB4O1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcblxyXG4gICAgLmljb24ge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAgIGkge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cclxuICAgICAgICAmOm50aC1jaGlsZCgxKSB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgIGNvbG9yOiAjOWZmZmIxO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJjpudGgtY2hpbGQoMikge1xyXG4gICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzMzMzM7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICAgICYuYWN0aXZlIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzlmZmZiMTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAudmFsdWUge1xyXG4gICAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgICAgZm9udC1mYW1pbHk6IFwiU0YgUHJvIFJvdW5kZWQtQm9sZFwiO1xyXG4gICAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuXHJcbiAgICAudmFyaWFibGUge1xyXG4gICAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICBmb250LWZhbWlseTogXCJTRiBQcm8gVGV4dC1SZWd1bGFyXCI7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuOjpuZy1kZWVwIHtcclxuICAubW9kYWxfc2VsZWN0X3NlbnNvciB7XHJcbiAgICB3aWR0aDogOTIycHg7XHJcbiAgICBoZWlnaHQ6IDkwMHB4O1xyXG5cclxuICAgIC5tb2RhbC1jb250ZW50IHtcclxuICAgICAgd2lkdGg6IDkyMnB4O1xyXG4gICAgICBoZWlnaHQ6IDkwMHB4O1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyMTIxO1xyXG5cclxuICAgICAgLm1vZGFsLWhlYWRlciB7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogdW5zZXQ7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIHBhZGRpbmc6IDMwcHg7XHJcblxyXG4gICAgICAgIC5tb2RhbC10aXRsZSB7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIlNGIFBybyBUZXh0LVJlZ3VsYXJcIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5idG4ge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzlGRkZCMTtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIlNGIFBybyBUZXh0LUJvbGRcIjtcclxuXHJcbiAgICAgICAgICB3aWR0aDogMTQycHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDQycHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAubW9kYWwtYm9keSB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgcGFkZGluZzogMzBweDtcclxuXHJcbiAgICAgICAgLmNvbF8xIHtcclxuICAgICAgICAgIHdpZHRoOiAzMzBweDtcclxuICAgICAgICAgIGhlaWdodDogNzM1cHg7XHJcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xyXG5cclxuICAgICAgICAgIC5pbnB1dF9pY29uX2NvbnRhaW5lciB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAgICAgICAgIC5mZWF0aGVyLXNlYXJjaCB7XHJcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgIHRvcDogMTBweDtcclxuICAgICAgICAgICAgICBsZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgICAgICAgICAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaW5wdXRbdHlwZT1cInRleHRcIl0ge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAzMDBweDtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICAgICAgICAgICAgYm9yZGVyOiB1bnNldDtcclxuICAgICAgICAgICAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMzgzODM4IDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxuICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDUwcHg7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIlNGIFBybyBUZXh0LVJlZ3VsYXJcIjtcclxuXHJcbiAgICAgICAgICAgICAgJjo6cGxhY2Vob2xkZXIge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5yZWNlbnRseV9hZGQge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJTRiBQcm8gVGV4dC1SZWd1bGFyXCI7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnBhZ2VfbmFtZSB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjOTA5MDkwO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIlNGIFBybyBUZXh0LVJlZ3VsYXJcIjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBociB7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM1OTU5NTk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY29sXzIge1xyXG4gICAgICAgICAgd2lkdGg6IDM1MHB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiA3MzVweDtcclxuICAgICAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgIzU5NTk1OTtcclxuICAgICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICM1OTU5NTk7XHJcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG5cclxuICAgICAgICAgIC50aXRsZSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiU0YgUHJvIFRleHQtUmVndWxhclwiO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5zZW5zb3JzIHtcclxuICAgICAgICAgICAgQGluY2x1ZGUgc2Vuc29yKCk7XHJcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDY5NXB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNvbF8zIHtcclxuICAgICAgICAgIHdpZHRoOiAxNzBweDtcclxuICAgICAgICAgIGhlaWdodDogNzM1cHg7XHJcblxyXG4gICAgICAgICAgLnRpdGxlIHtcclxuICAgICAgICAgICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJTRiBQcm8gVGV4dC1SZWd1bGFyXCI7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnNlbnNvcnMge1xyXG4gICAgICAgICAgICBAaW5jbHVkZSBzZW5zb3IoKTtcclxuICAgICAgICAgICAgbWF4LWhlaWdodDogNjk1cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIjo6bmctZGVlcCAubW9kYWxfc2VsZWN0X3NlbnNvciB7XG4gIHdpZHRoOiA5MjJweDtcbiAgaGVpZ2h0OiA5MDBweDtcbn1cbjo6bmctZGVlcCAubW9kYWxfc2VsZWN0X3NlbnNvciAubW9kYWwtY29udGVudCB7XG4gIHdpZHRoOiA5MjJweDtcbiAgaGVpZ2h0OiA5MDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxMjEyMTtcbn1cbjo6bmctZGVlcCAubW9kYWxfc2VsZWN0X3NlbnNvciAubW9kYWwtY29udGVudCAubW9kYWwtaGVhZGVyIHtcbiAgYm9yZGVyLWJvdHRvbTogdW5zZXQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDMwcHg7XG59XG46Om5nLWRlZXAgLm1vZGFsX3NlbGVjdF9zZW5zb3IgLm1vZGFsLWNvbnRlbnQgLm1vZGFsLWhlYWRlciAubW9kYWwtdGl0bGUge1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIlNGIFBybyBUZXh0LVJlZ3VsYXJcIjtcbn1cbjo6bmctZGVlcCAubW9kYWxfc2VsZWN0X3NlbnNvciAubW9kYWwtY29udGVudCAubW9kYWwtaGVhZGVyIC5idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOUZGRkIxO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIlNGIFBybyBUZXh0LUJvbGRcIjtcbiAgd2lkdGg6IDE0MnB4O1xuICBoZWlnaHQ6IDQycHg7XG59XG46Om5nLWRlZXAgLm1vZGFsX3NlbGVjdF9zZW5zb3IgLm1vZGFsLWNvbnRlbnQgLm1vZGFsLWJvZHkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDMwcHg7XG59XG46Om5nLWRlZXAgLm1vZGFsX3NlbGVjdF9zZW5zb3IgLm1vZGFsLWNvbnRlbnQgLm1vZGFsLWJvZHkgLmNvbF8xIHtcbiAgd2lkdGg6IDMzMHB4O1xuICBoZWlnaHQ6IDczNXB4O1xuICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xufVxuOjpuZy1kZWVwIC5tb2RhbF9zZWxlY3Rfc2Vuc29yIC5tb2RhbC1jb250ZW50IC5tb2RhbC1ib2R5IC5jb2xfMSAuaW5wdXRfaWNvbl9jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG46Om5nLWRlZXAgLm1vZGFsX3NlbGVjdF9zZW5zb3IgLm1vZGFsLWNvbnRlbnQgLm1vZGFsLWJvZHkgLmNvbF8xIC5pbnB1dF9pY29uX2NvbnRhaW5lciAuZmVhdGhlci1zZWFyY2gge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTBweDtcbiAgbGVmdDogMTBweDtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBjb2xvcjogI0ZGRkZGRjtcbn1cbjo6bmctZGVlcCAubW9kYWxfc2VsZWN0X3NlbnNvciAubW9kYWwtY29udGVudCAubW9kYWwtYm9keSAuY29sXzEgLmlucHV0X2ljb25fY29udGFpbmVyIGlucHV0W3R5cGU9dGV4dF0ge1xuICB3aWR0aDogMzAwcHg7XG4gIGhlaWdodDogNDhweDtcbiAgYm9yZGVyOiB1bnNldDtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIGJhY2tncm91bmQ6ICMzODM4MzggMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xuICBwYWRkaW5nLWxlZnQ6IDUwcHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC1mYW1pbHk6IFwiU0YgUHJvIFRleHQtUmVndWxhclwiO1xufVxuOjpuZy1kZWVwIC5tb2RhbF9zZWxlY3Rfc2Vuc29yIC5tb2RhbC1jb250ZW50IC5tb2RhbC1ib2R5IC5jb2xfMSAuaW5wdXRfaWNvbl9jb250YWluZXIgaW5wdXRbdHlwZT10ZXh0XTo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogI0ZGRkZGRjtcbn1cbjo6bmctZGVlcCAubW9kYWxfc2VsZWN0X3NlbnNvciAubW9kYWwtY29udGVudCAubW9kYWwtYm9keSAuY29sXzEgLnJlY2VudGx5X2FkZCB7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIlNGIFBybyBUZXh0LVJlZ3VsYXJcIjtcbn1cbjo6bmctZGVlcCAubW9kYWxfc2VsZWN0X3NlbnNvciAubW9kYWwtY29udGVudCAubW9kYWwtYm9keSAuY29sXzEgLnBhZ2VfbmFtZSB7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIGNvbG9yOiAjOTA5MDkwO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIlNGIFBybyBUZXh0LVJlZ3VsYXJcIjtcbn1cbjo6bmctZGVlcCAubW9kYWxfc2VsZWN0X3NlbnNvciAubW9kYWwtY29udGVudCAubW9kYWwtYm9keSAuY29sXzEgaHIge1xuICBib3JkZXI6IDFweCBzb2xpZCAjNTk1OTU5O1xufVxuOjpuZy1kZWVwIC5tb2RhbF9zZWxlY3Rfc2Vuc29yIC5tb2RhbC1jb250ZW50IC5tb2RhbC1ib2R5IC5jb2xfMiB7XG4gIHdpZHRoOiAzNTBweDtcbiAgaGVpZ2h0OiA3MzVweDtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjNTk1OTU5O1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjNTk1OTU5O1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xufVxuOjpuZy1kZWVwIC5tb2RhbF9zZWxlY3Rfc2Vuc29yIC5tb2RhbC1jb250ZW50IC5tb2RhbC1ib2R5IC5jb2xfMiAudGl0bGUge1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIlNGIFBybyBUZXh0LVJlZ3VsYXJcIjtcbn1cbjo6bmctZGVlcCAubW9kYWxfc2VsZWN0X3NlbnNvciAubW9kYWwtY29udGVudCAubW9kYWwtYm9keSAuY29sXzIgLnNlbnNvcnMge1xuICBtYXgtaGVpZ2h0OiA2OTVweDtcbn1cbjo6bmctZGVlcCAubW9kYWxfc2VsZWN0X3NlbnNvciAubW9kYWwtY29udGVudCAubW9kYWwtYm9keSAuY29sXzIgLnNlbnNvcnMgLnNlbnNvciB7XG4gIG1pbi13aWR0aDogMTQwcHg7XG4gIG1pbi1oZWlnaHQ6IDE0MHB4O1xuICBtYXgtd2lkdGg6IDE0MHB4O1xuICBtYXgtaGVpZ2h0OiAxNDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBhbGlnbi1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiAxMHB4O1xuICBtYXJnaW46IDAgMCAyMHB4IDIwcHg7XG4gIGZsb2F0OiBsZWZ0O1xufVxuOjpuZy1kZWVwIC5tb2RhbF9zZWxlY3Rfc2Vuc29yIC5tb2RhbC1jb250ZW50IC5tb2RhbC1ib2R5IC5jb2xfMiAuc2Vuc29ycyAuc2Vuc29yIC5pY29uIHtcbiAgd2lkdGg6IDEwMCU7XG59XG46Om5nLWRlZXAgLm1vZGFsX3NlbGVjdF9zZW5zb3IgLm1vZGFsLWNvbnRlbnQgLm1vZGFsLWJvZHkgLmNvbF8yIC5zZW5zb3JzIC5zZW5zb3IgLmljb24gaSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuOjpuZy1kZWVwIC5tb2RhbF9zZWxlY3Rfc2Vuc29yIC5tb2RhbC1jb250ZW50IC5tb2RhbC1ib2R5IC5jb2xfMiAuc2Vuc29ycyAuc2Vuc29yIC5pY29uIGk6bnRoLWNoaWxkKDEpIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmbG9hdDogbGVmdDtcbiAgY29sb3I6ICM5ZmZmYjE7XG59XG46Om5nLWRlZXAgLm1vZGFsX3NlbGVjdF9zZW5zb3IgLm1vZGFsLWNvbnRlbnQgLm1vZGFsLWJvZHkgLmNvbF8yIC5zZW5zb3JzIC5zZW5zb3IgLmljb24gaTpudGgtY2hpbGQoMikge1xuICBmbG9hdDogcmlnaHQ7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMzMzO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuOjpuZy1kZWVwIC5tb2RhbF9zZWxlY3Rfc2Vuc29yIC5tb2RhbC1jb250ZW50IC5tb2RhbC1ib2R5IC5jb2xfMiAuc2Vuc29ycyAuc2Vuc29yIC5pY29uIGk6bnRoLWNoaWxkKDIpLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM5ZmZmYjE7XG59XG46Om5nLWRlZXAgLm1vZGFsX3NlbGVjdF9zZW5zb3IgLm1vZGFsLWNvbnRlbnQgLm1vZGFsLWJvZHkgLmNvbF8yIC5zZW5zb3JzIC5zZW5zb3IgLnZhbHVlIHtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIGZvbnQtZmFtaWx5OiBcIlNGIFBybyBSb3VuZGVkLUJvbGRcIjtcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xuICBsaW5lLWhlaWdodDogMTtcbiAgd2lkdGg6IDEwMCU7XG59XG46Om5nLWRlZXAgLm1vZGFsX3NlbGVjdF9zZW5zb3IgLm1vZGFsLWNvbnRlbnQgLm1vZGFsLWJvZHkgLmNvbF8yIC5zZW5zb3JzIC5zZW5zb3IgLnZhcmlhYmxlIHtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC1mYW1pbHk6IFwiU0YgUHJvIFRleHQtUmVndWxhclwiO1xuICB3aWR0aDogMTAwJTtcbn1cbjo6bmctZGVlcCAubW9kYWxfc2VsZWN0X3NlbnNvciAubW9kYWwtY29udGVudCAubW9kYWwtYm9keSAuY29sXzMge1xuICB3aWR0aDogMTcwcHg7XG4gIGhlaWdodDogNzM1cHg7XG59XG46Om5nLWRlZXAgLm1vZGFsX3NlbGVjdF9zZW5zb3IgLm1vZGFsLWNvbnRlbnQgLm1vZGFsLWJvZHkgLmNvbF8zIC50aXRsZSB7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBmb250LXNpemU6IDIwcHg7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgZm9udC1mYW1pbHk6IFwiU0YgUHJvIFRleHQtUmVndWxhclwiO1xufVxuOjpuZy1kZWVwIC5tb2RhbF9zZWxlY3Rfc2Vuc29yIC5tb2RhbC1jb250ZW50IC5tb2RhbC1ib2R5IC5jb2xfMyAuc2Vuc29ycyB7XG4gIG1heC1oZWlnaHQ6IDY5NXB4O1xufVxuOjpuZy1kZWVwIC5tb2RhbF9zZWxlY3Rfc2Vuc29yIC5tb2RhbC1jb250ZW50IC5tb2RhbC1ib2R5IC5jb2xfMyAuc2Vuc29ycyAuc2Vuc29yIHtcbiAgbWluLXdpZHRoOiAxNDBweDtcbiAgbWluLWhlaWdodDogMTQwcHg7XG4gIG1heC13aWR0aDogMTQwcHg7XG4gIG1heC1oZWlnaHQ6IDE0MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG1hcmdpbjogMCAwIDIwcHggMjBweDtcbiAgZmxvYXQ6IGxlZnQ7XG59XG46Om5nLWRlZXAgLm1vZGFsX3NlbGVjdF9zZW5zb3IgLm1vZGFsLWNvbnRlbnQgLm1vZGFsLWJvZHkgLmNvbF8zIC5zZW5zb3JzIC5zZW5zb3IgLmljb24ge1xuICB3aWR0aDogMTAwJTtcbn1cbjo6bmctZGVlcCAubW9kYWxfc2VsZWN0X3NlbnNvciAubW9kYWwtY29udGVudCAubW9kYWwtYm9keSAuY29sXzMgLnNlbnNvcnMgLnNlbnNvciAuaWNvbiBpIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG46Om5nLWRlZXAgLm1vZGFsX3NlbGVjdF9zZW5zb3IgLm1vZGFsLWNvbnRlbnQgLm1vZGFsLWJvZHkgLmNvbF8zIC5zZW5zb3JzIC5zZW5zb3IgLmljb24gaTpudGgtY2hpbGQoMSkge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZsb2F0OiBsZWZ0O1xuICBjb2xvcjogIzlmZmZiMTtcbn1cbjo6bmctZGVlcCAubW9kYWxfc2VsZWN0X3NlbnNvciAubW9kYWwtY29udGVudCAubW9kYWwtYm9keSAuY29sXzMgLnNlbnNvcnMgLnNlbnNvciAuaWNvbiBpOm50aC1jaGlsZCgyKSB7XG4gIGZsb2F0OiByaWdodDtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzMzMzM7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG46Om5nLWRlZXAgLm1vZGFsX3NlbGVjdF9zZW5zb3IgLm1vZGFsLWNvbnRlbnQgLm1vZGFsLWJvZHkgLmNvbF8zIC5zZW5zb3JzIC5zZW5zb3IgLmljb24gaTpudGgtY2hpbGQoMikuYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzlmZmZiMTtcbn1cbjo6bmctZGVlcCAubW9kYWxfc2VsZWN0X3NlbnNvciAubW9kYWwtY29udGVudCAubW9kYWwtYm9keSAuY29sXzMgLnNlbnNvcnMgLnNlbnNvciAudmFsdWUge1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgZm9udC1mYW1pbHk6IFwiU0YgUHJvIFJvdW5kZWQtQm9sZFwiO1xuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICB3aWR0aDogMTAwJTtcbn1cbjo6bmctZGVlcCAubW9kYWxfc2VsZWN0X3NlbnNvciAubW9kYWwtY29udGVudCAubW9kYWwtYm9keSAuY29sXzMgLnNlbnNvcnMgLnNlbnNvciAudmFyaWFibGUge1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LWZhbWlseTogXCJTRiBQcm8gVGV4dC1SZWd1bGFyXCI7XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalSelectSensorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'lib-modal-select-sensor',
                templateUrl: './modal-select-sensor.component.html',
                styleUrls: ['./modal-select-sensor.component.scss']
            }]
    }], function () { return [{ type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["BsModalService"] }]; }, { template: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['template', { static: false }]
        }] }); })();


/***/ }),

/***/ "../widgets/src/lib/components/widget-setting/widget-setting.component.ts":
/*!********************************************************************************!*\
  !*** ../widgets/src/lib/components/widget-setting/widget-setting.component.ts ***!
  \********************************************************************************/
/*! exports provided: WidgetSettingComponent, WidgetSettingWidget */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetSettingComponent", function() { return WidgetSettingComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetSettingWidget", function() { return WidgetSettingWidget; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _vms_site_src_app_services_example__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../../../vms-site/src/app/services/example */ "./src/app/services/example.js");
/* harmony import */ var _vms_site_src_app_services_themes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../../../vms-site/src/app/services/themes */ "./src/app/services/themes.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _modal_select_sensor_modal_select_sensor_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modal-select-sensor/modal-select-sensor.component */ "../widgets/src/lib/components/widget-setting/modal-select-sensor/modal-select-sensor.component.ts");
/* harmony import */ var _simple1_widget_simple1_widget_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../simple1-widget/simple1-widget.component */ "../widgets/src/lib/components/simple1-widget/simple1-widget.component.ts");
/* harmony import */ var _simple2_widget_simple2_widget_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../simple2-widget/simple2-widget.component */ "../widgets/src/lib/components/simple2-widget/simple2-widget.component.ts");
/* harmony import */ var _gauge1_widget_gauge1_widget_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../gauge1-widget/gauge1-widget.component */ "../widgets/src/lib/components/gauge1-widget/gauge1-widget.component.ts");
/* harmony import */ var _gauge2_widget_gauge2_widget_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../gauge2-widget/gauge2-widget.component */ "../widgets/src/lib/components/gauge2-widget/gauge2-widget.component.ts");
/* harmony import */ var _gauge3_widget_gauge3_widget_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../gauge3-widget/gauge3-widget.component */ "../widgets/src/lib/components/gauge3-widget/gauge3-widget.component.ts");
/* harmony import */ var _chart_widget_chart_widget_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../chart-widget/chart-widget.component */ "../widgets/src/lib/components/chart-widget/chart-widget.component.ts");
/* harmony import */ var _map_widget_map_widget_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../map-widget/map-widget.component */ "../widgets/src/lib/components/map-widget/map-widget.component.ts");














const _c0 = ["modalSelectSensor"];
function WidgetSettingComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "lib-simple1-widget", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r150 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("widget", ctx_r150.dataWidget == null ? null : ctx_r150.dataWidget.widget)("gridInfo", ctx_r150.dataWidget);
} }
function WidgetSettingComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "lib-simple2-widget", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r151 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("widget", ctx_r151.dataWidget == null ? null : ctx_r151.dataWidget.widget)("gridInfo", ctx_r151.dataWidget);
} }
function WidgetSettingComponent_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "lib-gauge1-widget", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r152 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("widget", ctx_r152.dataWidget == null ? null : ctx_r152.dataWidget.widget)("gridInfo", ctx_r152.dataWidget);
} }
function WidgetSettingComponent_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "lib-gauge2-widget", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r153 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("widget", ctx_r153.dataWidget == null ? null : ctx_r153.dataWidget.widget)("gridInfo", ctx_r153.dataWidget);
} }
function WidgetSettingComponent_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "lib-gauge3-widget", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r154 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("widget", ctx_r154.dataWidget == null ? null : ctx_r154.dataWidget.widget)("gridInfo", ctx_r154.dataWidget);
} }
function WidgetSettingComponent_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "lib-chart-widget", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r155 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("widget", ctx_r155.dataWidget == null ? null : ctx_r155.dataWidget.widget)("gridInfo", ctx_r155.dataWidget);
} }
function WidgetSettingComponent_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "lib-map-widget", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r156 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("widget", ctx_r156.dataWidget == null ? null : ctx_r156.dataWidget.widget)("gridInfo", ctx_r156.dataWidget);
} }
function WidgetSettingComponent_div_12_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r164 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Center");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WidgetSettingComponent_div_12_div_3_Template_div_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r164); const ctx_r163 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r163.openModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Sensor");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Select");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function WidgetSettingComponent_div_12_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r166 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Bottom");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WidgetSettingComponent_div_12_div_4_Template_div_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r166); const ctx_r165 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r165.openModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Sensor");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Select");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function WidgetSettingComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Properties");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, WidgetSettingComponent_div_12_div_3_Template, 10, 0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, WidgetSettingComponent_div_12_div_4_Template, 10, 0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r157 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r157.canActivate("centerVariable"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r157.canActivate("bottomVariable"));
} }
function WidgetSettingComponent_div_13_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r168 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", row_r168.color, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefaultStyleSanitizer"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r168.value);
} }
function WidgetSettingComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Chart");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, WidgetSettingComponent_div_13_div_5_Template, 4, 3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r158 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r158.graphsColor);
} }
function WidgetSettingComponent_div_14_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r171 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", row_r171.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", row_r171 == null ? null : row_r171.active);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r171.value);
} }
function WidgetSettingComponent_div_14_li_32_Template(rf, ctx) { if (rf & 1) {
    const _r174 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WidgetSettingComponent_div_14_li_32_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r174); const row_r172 = ctx.$implicit; const ctx_r173 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r173.initialZoomActive = row_r172; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r172 = ctx.$implicit;
    const ctx_r170 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-active", row_r172 == ctx_r170.initialZoomActive);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r172);
} }
const _c1 = function () { return [0, 10, 20]; };
function WidgetSettingComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Properties");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, WidgetSettingComponent_div_14_div_5_Template, 4, 5, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "API Key");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Roadmap");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Satellite");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Hybrid");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Terrain");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Initial Zoom");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "ol", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, WidgetSettingComponent_div_14_li_32_Template, 3, 3, "li", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r159 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r159.pinsColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c1));
} }
class WidgetSettingComponent {
    constructor(router, activatedRoute) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.graphsColor = [
            {
                id: 1,
                color: '#97C9DE',
                value: '{Graph 1}'
            },
            {
                id: 2,
                color: '#9DCB7A',
                value: '{Graph 2}'
            }
        ];
        this.pinsColor = [
            {
                id: 1,
                color: '#97C9DE',
                value: '{Pin 1}',
                active: true
            },
            {
                id: 2,
                color: '#C58ECC',
                value: '{Pin 2}'
            },
            {
                id: 3,
                color: '#EA857A',
                value: '{Pin 3}'
            },
            {
                id: 4,
                color: '#73B18D',
                value: '{Pin 4}'
            },
            {
                id: 5,
                color: '#73B14D',
                value: '{Pin 5}'
            }
        ];
        this.initialZoomActive = 10;
        this.activatedRoute.queryParams.subscribe(params => {
            this.screenParameterId = params['id'];
            this.screenParameterName = params['previous'] ? params['previous'] : 'dashboard';
        });
    }
    ngOnInit() {
        this.loadDataWidget();
    }
    openModal() {
        this.modalSelectSensor.showModal();
    }
    loadDataWidget() {
        this.dataWidget = _vms_site_src_app_services_example__WEBPACK_IMPORTED_MODULE_1__["default"][this.screenParameterName]['widgets'].find(f => f.id == this.screenParameterId);
        // Get theme string
        const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme').replace(/"/g, '') : 'dark.default';
        // Get type witget
        const widgetType = this.dataWidget.widget['type'];
        if (this.dataWidget.widget['type'] === 'ChartWidget') {
            const defaulColor = _vms_site_src_app_services_themes__WEBPACK_IMPORTED_MODULE_2__["default"][currentTheme][widgetType]['chart']['option']['defaulColor'];
            // Merge defaulColor theme
            this.dataWidget.widget['config']['chart']['option']['defaulColor'] = defaulColor;
        }
        else {
            const themColors = _vms_site_src_app_services_themes__WEBPACK_IMPORTED_MODULE_2__["default"][currentTheme][widgetType];
            // Merge defaulColor theme
            this.dataWidget.widget['config'] = Object.assign(Object.assign({}, this.dataWidget.widget['config']), themColors);
        }
    }
    onClickWidget() {
        this.router.navigateByUrl(`/private?page=${this.screenParameterName}`);
    }
    // Check show button
    canActivate(field) {
        return this.dataWidget && this.dataWidget.widget.config.hasOwnProperty(field);
    }
}
WidgetSettingComponent.ɵfac = function WidgetSettingComponent_Factory(t) { return new (t || WidgetSettingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
WidgetSettingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WidgetSettingComponent, selectors: [["lib-widget-setting"]], viewQuery: function WidgetSettingComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.modalSelectSensor = _t.first);
    } }, decls: 17, vars: 12, consts: [[1, "widget_setting"], [1, "content_left"], [1, "widget_box", "cursor_pointer", 3, "ngSwitch", "click"], [4, "ngSwitchCase"], ["class", "content_right", 4, "ngIf"], ["modalSelectSensor", ""], [3, "widget", "gridInfo"], [1, "content_right"], ["class", "select", 4, "ngIf"], [1, "select"], [1, "title"], [1, "select_box", 3, "click"], [1, "feather-arrow-right"], [1, "graph"], [1, "colors"], ["class", "item", 4, "ngFor", "ngForOf"], [1, "item"], [1, "color_box"], [1, "value"], [1, "map"], [1, "pins", "scroll-dark"], ["type", "text", "placeholder", "URL"], [1, "map_type"], ["src", "assets/images/Icon-Map-Roadmap.png", "alt", "Icon-Map-Roadmap.png", 1, "type_box"], [1, "name"], ["src", "assets/images/Icon-Map-Satellite.png", "alt", "Icon-Map-Satellite.png", 1, "type_box"], ["src", "assets/images/Icon-Map-Hybrid.png", "alt", "Icon-Map-Hybrid.png", 1, "type_box"], ["src", "assets/images/Icon-Map-Terrain.png", "alt", "Icon-Map-Terrain.png", 1, "type_box"], [1, "clearfix"], [1, "ranger"], [1, "progress_bar", "mt-3"], ["class", "is_complete cursor_pointer", 3, "is-active", "click", 4, "ngFor", "ngForOf"], [1, "action"], [1, "btn"], [1, "fas", "fa-walking"], [1, "feather-maximize"], [1, "feather-layers"], [1, "feather-zoom-in"], [1, "fa", "fa-mouse"], [1, "pin_box", "fa-map-marker-alt", "fas"], [1, "is_complete", "cursor_pointer", 3, "click"]], template: function WidgetSettingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WidgetSettingComponent_Template_div_click_4_listener() { return ctx.onClickWidget(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, WidgetSettingComponent_ng_container_5_Template, 2, 2, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, WidgetSettingComponent_ng_container_6_Template, 2, 2, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, WidgetSettingComponent_ng_container_7_Template, 2, 2, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, WidgetSettingComponent_ng_container_8_Template, 2, 2, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, WidgetSettingComponent_ng_container_9_Template, 2, 2, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, WidgetSettingComponent_ng_container_10_Template, 2, 2, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, WidgetSettingComponent_ng_container_11_Template, 2, 2, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, WidgetSettingComponent_div_12_Template, 5, 2, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, WidgetSettingComponent_div_13_Template, 6, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, WidgetSettingComponent_div_14_Template, 44, 5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "lib-modal-select-sensor", null, 5);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.dataWidget == null ? null : ctx.dataWidget.widget == null ? null : ctx.dataWidget.widget.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx.dataWidget == null ? null : ctx.dataWidget.widget == null ? null : ctx.dataWidget.widget.type);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "Simple1Widget");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "Simple2Widget");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "Gauge1Widget");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "Gauge2Widget");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "Gauge3Widget");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "ChartWidget");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "MapWidget");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.dataWidget == null ? null : ctx.dataWidget.widget == null ? null : ctx.dataWidget.widget.type.includes("Gauge")) || (ctx.dataWidget == null ? null : ctx.dataWidget.widget == null ? null : ctx.dataWidget.widget.type.includes("Simple")));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.dataWidget == null ? null : ctx.dataWidget.widget == null ? null : ctx.dataWidget.widget.type) == "ChartWidget");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.dataWidget == null ? null : ctx.dataWidget.widget == null ? null : ctx.dataWidget.widget.type) == "MapWidget");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _modal_select_sensor_modal_select_sensor_component__WEBPACK_IMPORTED_MODULE_5__["ModalSelectSensorComponent"], _simple1_widget_simple1_widget_component__WEBPACK_IMPORTED_MODULE_6__["Simple1WidgetComponent"], _simple2_widget_simple2_widget_component__WEBPACK_IMPORTED_MODULE_7__["Simple2WidgetComponent"], _gauge1_widget_gauge1_widget_component__WEBPACK_IMPORTED_MODULE_8__["Gauge1WidgetComponent"], _gauge2_widget_gauge2_widget_component__WEBPACK_IMPORTED_MODULE_9__["Gauge2WidgetComponent"], _gauge3_widget_gauge3_widget_component__WEBPACK_IMPORTED_MODULE_10__["Gauge3WidgetComponent"], _chart_widget_chart_widget_component__WEBPACK_IMPORTED_MODULE_11__["ChartWidgetComponent"], _map_widget_map_widget_component__WEBPACK_IMPORTED_MODULE_12__["MapWidgetComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: ["@media only screen and (min-width: 1366px) {\n  [_nghost-%COMP%] {\n    zoom: 0.8;\n  }\n}\n@media only screen and (min-width: 1400px) {\n  [_nghost-%COMP%] {\n    zoom: 0.8;\n  }\n}\n@media only screen and (min-width: 1440px) {\n  [_nghost-%COMP%] {\n    zoom: 0.85;\n  }\n}\n@media only screen and (min-width: 1600px) {\n  [_nghost-%COMP%] {\n    zoom: 0.9;\n  }\n}\n@media only screen and (min-width: 1680px) {\n  [_nghost-%COMP%] {\n    zoom: 0.95;\n  }\n}\n@media only screen and (min-width: 1920px) {\n  [_nghost-%COMP%] {\n    zoom: 1;\n  }\n}\n.widget_setting[_ngcontent-%COMP%]  gridster-item {\n  transform: none;\n}\n.widget_setting[_ngcontent-%COMP%] {\n  margin: 70px auto;\n  min-height: 380px;\n  max-height: 700px;\n  width: 700px;\n  display: flex;\n  justify-content: space-around;\n}\n.widget_setting[_ngcontent-%COMP%]   .content_left[_ngcontent-%COMP%] {\n  width: 300px;\n  min-height: 380px;\n  padding-right: 30px;\n}\n.widget_setting[_ngcontent-%COMP%]   .content_left[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #FFFFFF;\n  font-size: 20px;\n  font-family: \"SF Pro Text-Medium\";\n}\n.widget_setting[_ngcontent-%COMP%]   .content_left[_ngcontent-%COMP%]   .widget_box[_ngcontent-%COMP%] {\n  width: 300px;\n  height: 300px;\n  background: black;\n  margin-top: 50px;\n}\n.widget_setting[_ngcontent-%COMP%]   .content_right[_ngcontent-%COMP%] {\n  width: 400px;\n  min-height: 380px;\n  padding-left: 30px;\n  margin-left: 30px;\n  border-left: 1px solid #e0e0e033;\n}\n.widget_setting[_ngcontent-%COMP%]   .content_right[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #FFFFFF;\n  font-size: 20px;\n  font-family: \"SF Pro Text-Medium\";\n}\n.widget_setting[_ngcontent-%COMP%]   .content_right[_ngcontent-%COMP%]   .select[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n.widget_setting[_ngcontent-%COMP%]   .content_right[_ngcontent-%COMP%]   .select[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: #FFFFFF;\n  font-size: 14px;\n  font-family: \"SF Pro Text-Regular\";\n}\n.widget_setting[_ngcontent-%COMP%]   .content_right[_ngcontent-%COMP%]   .select[_ngcontent-%COMP%]   .select_box[_ngcontent-%COMP%] {\n  cursor: pointer;\n  width: 300px;\n  height: 48px;\n  font-size: 16px;\n  color: #FFFFFF;\n  font-family: \"SF Pro Text-Medium\";\n  background-color: #000000;\n  padding: 0 10px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.widget_setting[_ngcontent-%COMP%]   .content_right[_ngcontent-%COMP%]   .select[_ngcontent-%COMP%]   .select_box[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.widget_setting[_ngcontent-%COMP%]   .content_right[_ngcontent-%COMP%]   .select[_ngcontent-%COMP%]   .select_box[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.widget_setting[_ngcontent-%COMP%]   .content_right[_ngcontent-%COMP%]   .select[_ngcontent-%COMP%]   .select_box[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n.widget_setting[_ngcontent-%COMP%]   .content_right[_ngcontent-%COMP%]   .select[_ngcontent-%COMP%]   .select_box[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  color: #9FFFB1;\n}\n.widget_setting[_ngcontent-%COMP%]   .content_right[_ngcontent-%COMP%]   .graph[_ngcontent-%COMP%] {\n  margin-top: 50px;\n}\n.widget_setting[_ngcontent-%COMP%]   .content_right[_ngcontent-%COMP%]   .graph[_ngcontent-%COMP%]   .colors[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  margin-top: 20px;\n}\n.widget_setting[_ngcontent-%COMP%]   .content_right[_ngcontent-%COMP%]   .graph[_ngcontent-%COMP%]   .colors[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .color_box[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border: 2px solid #FFFFFF;\n  border-radius: 8px;\n}\n.widget_setting[_ngcontent-%COMP%]   .content_right[_ngcontent-%COMP%]   .graph[_ngcontent-%COMP%]   .colors[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  color: #FFFFFF;\n  font-size: 16px;\n  font-size: \"SF Pro Text-Medium\";\n  margin-left: 20px;\n}\n.widget_setting[_ngcontent-%COMP%]   .content_right[_ngcontent-%COMP%]   .map[_ngcontent-%COMP%] {\n  width: 300px;\n}\n.widget_setting[_ngcontent-%COMP%]   .content_right[_ngcontent-%COMP%]   .map[_ngcontent-%COMP%]   .pins[_ngcontent-%COMP%] {\n  max-height: 240px;\n  cursor: pointer;\n}\n.widget_setting[_ngcontent-%COMP%]   .content_right[_ngcontent-%COMP%]   .map[_ngcontent-%COMP%]   .pins[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  margin-top: 10px;\n}\n.widget_setting[_ngcontent-%COMP%]   .content_right[_ngcontent-%COMP%]   .map[_ngcontent-%COMP%]   .pins[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .pin_box[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  background-color: #000000;\n  font-size: 25px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.widget_setting[_ngcontent-%COMP%]   .content_right[_ngcontent-%COMP%]   .map[_ngcontent-%COMP%]   .pins[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .pin_box.active[_ngcontent-%COMP%] {\n  border: 2px solid #9FFFB1;\n}\n.widget_setting[_ngcontent-%COMP%]   .content_right[_ngcontent-%COMP%]   .map[_ngcontent-%COMP%]   .pins[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .pin_box[_ngcontent-%COMP%]:hover {\n  border: 2px solid #9FFFB1;\n}\n.widget_setting[_ngcontent-%COMP%]   .content_right[_ngcontent-%COMP%]   .map[_ngcontent-%COMP%]   .pins[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  color: #FFFFFF;\n  font-size: 16px;\n  margin-left: 20px;\n  font-family: \"SF Pro Text-Medium\";\n}\n.widget_setting[_ngcontent-%COMP%]   .content_right[_ngcontent-%COMP%]   .map[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  border: 1px solid #E0E0E0;\n  opacity: 0.2;\n}\n.widget_setting[_ngcontent-%COMP%]   .content_right[_ngcontent-%COMP%]   .map[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: #959393;\n  font-family: \"SF Pro Text-Regular\";\n}\n.widget_setting[_ngcontent-%COMP%]   .content_right[_ngcontent-%COMP%]   .map[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 36px;\n  padding: 0 10px;\n  background: #F7F7FE 0% 0% no-repeat padding-box;\n  border-radius: 8px;\n}\n.widget_setting[_ngcontent-%COMP%]   .content_right[_ngcontent-%COMP%]   .map[_ngcontent-%COMP%]   .map_type[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n.widget_setting[_ngcontent-%COMP%]   .content_right[_ngcontent-%COMP%]   .map[_ngcontent-%COMP%]   .map_type[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n  float: left;\n  cursor: pointer;\n}\n.widget_setting[_ngcontent-%COMP%]   .content_right[_ngcontent-%COMP%]   .map[_ngcontent-%COMP%]   .map_type[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .type_box[_ngcontent-%COMP%] {\n  width: 62px;\n  height: 63px;\n}\n.widget_setting[_ngcontent-%COMP%]   .content_right[_ngcontent-%COMP%]   .map[_ngcontent-%COMP%]   .map_type[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  color: #959393;\n  font-size: 12px;\n  text-align: center;\n  font-family: \"SF Pro Text-Regular\";\n}\n.widget_setting[_ngcontent-%COMP%]   .content_right[_ngcontent-%COMP%]   .map[_ngcontent-%COMP%]   .map_type[_ngcontent-%COMP%]   .item.active[_ngcontent-%COMP%]   .type_box[_ngcontent-%COMP%], .widget_setting[_ngcontent-%COMP%]   .content_right[_ngcontent-%COMP%]   .map[_ngcontent-%COMP%]   .map_type[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:hover   .type_box[_ngcontent-%COMP%] {\n  border: 2px solid #FFFFFF;\n}\n.widget_setting[_ngcontent-%COMP%]   .content_right[_ngcontent-%COMP%]   .map[_ngcontent-%COMP%]   .map_type[_ngcontent-%COMP%]   .item.active[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%], .widget_setting[_ngcontent-%COMP%]   .content_right[_ngcontent-%COMP%]   .map[_ngcontent-%COMP%]   .map_type[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:hover   .name[_ngcontent-%COMP%] {\n  color: #FFFFFF;\n}\n.widget_setting[_ngcontent-%COMP%]   .content_right[_ngcontent-%COMP%]   .map[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n.widget_setting[_ngcontent-%COMP%]   .content_right[_ngcontent-%COMP%]   .map[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  min-width: 52px;\n  height: 52px;\n  border-radius: 8px;\n}\n.widget_setting[_ngcontent-%COMP%]   .content_right[_ngcontent-%COMP%]   .map[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 30px;\n}\n.widget_setting[_ngcontent-%COMP%]   .content_right[_ngcontent-%COMP%]   .map[_ngcontent-%COMP%]   .ranger[_ngcontent-%COMP%] {\n  margin: 20px 0;\n}\n.widget_setting[_ngcontent-%COMP%]   .content_right[_ngcontent-%COMP%]   .map[_ngcontent-%COMP%]   .ranger[_ngcontent-%COMP%]   .progress_bar[_ngcontent-%COMP%] {\n  font-family: \"Open Sans\", sans-serif;\n  display: flex;\n  justify-content: space-between;\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.widget_setting[_ngcontent-%COMP%]   .content_right[_ngcontent-%COMP%]   .map[_ngcontent-%COMP%]   .ranger[_ngcontent-%COMP%]   .progress_bar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  flex: 2;\n  position: relative;\n  font-size: 0.6rem;\n  color: #75787b;\n  white-space: nowrap;\n  overflow: visible;\n  min-width: 0;\n  text-align: center;\n  border-top: 2px solid #e8e8e8;\n}\n.widget_setting[_ngcontent-%COMP%]   .content_right[_ngcontent-%COMP%]   .map[_ngcontent-%COMP%]   .ranger[_ngcontent-%COMP%]   .progress_bar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child {\n  flex: 1;\n  text-align: left;\n}\n.widget_setting[_ngcontent-%COMP%]   .content_right[_ngcontent-%COMP%]   .map[_ngcontent-%COMP%]   .ranger[_ngcontent-%COMP%]   .progress_bar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child:before {\n  left: 0;\n}\n.widget_setting[_ngcontent-%COMP%]   .content_right[_ngcontent-%COMP%]   .map[_ngcontent-%COMP%]   .ranger[_ngcontent-%COMP%]   .progress_bar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n  flex: 1;\n  text-align: right;\n}\n.widget_setting[_ngcontent-%COMP%]   .content_right[_ngcontent-%COMP%]   .map[_ngcontent-%COMP%]   .ranger[_ngcontent-%COMP%]   .progress_bar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child:before {\n  right: 0;\n  left: auto;\n}\n.widget_setting[_ngcontent-%COMP%]   .content_right[_ngcontent-%COMP%]   .map[_ngcontent-%COMP%]   .ranger[_ngcontent-%COMP%]   .progress_bar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child   span[_ngcontent-%COMP%] {\n  width: 200%;\n  display: inline-block;\n  position: absolute;\n  left: -100%;\n}\n.widget_setting[_ngcontent-%COMP%]   .content_right[_ngcontent-%COMP%]   .map[_ngcontent-%COMP%]   .ranger[_ngcontent-%COMP%]   .progress_bar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before {\n  content: \"\";\n  display: block;\n  height: 8px;\n  background-color: #e8e8e8;\n  border: 1px solid #fff;\n  position: absolute;\n  left: calc(50% - 6px);\n  bottom: 18px;\n  z-index: 3;\n  transition: all 0.2s ease-in-out;\n  opacity: 1;\n}\n.widget_setting[_ngcontent-%COMP%]   .content_right[_ngcontent-%COMP%]   .map[_ngcontent-%COMP%]   .ranger[_ngcontent-%COMP%]   .progress_bar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover:before {\n  background-color: #fff;\n  transform: scale(1.33);\n}\n.widget_setting[_ngcontent-%COMP%]   .content_right[_ngcontent-%COMP%]   .map[_ngcontent-%COMP%]   .ranger[_ngcontent-%COMP%]   .progress_bar[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #FFFFFF;\n  font-size: 10px;\n  font-family: \"SF Pro Text-Regular\";\n  transition: opacity 0.3s ease-in-out;\n}\n.widget_setting[_ngcontent-%COMP%]   .content_right[_ngcontent-%COMP%]   .map[_ngcontent-%COMP%]   .ranger[_ngcontent-%COMP%]   .progress_bar[_ngcontent-%COMP%]   .is_complete[_ngcontent-%COMP%]:not(:first-child):after {\n  content: \"\";\n  display: block;\n  width: 100%;\n  position: absolute;\n  bottom: 21px;\n  left: -50%;\n  z-index: 2;\n}\n.widget_setting[_ngcontent-%COMP%]   .content_right[_ngcontent-%COMP%]   .map[_ngcontent-%COMP%]   .ranger[_ngcontent-%COMP%]   .progress_bar[_ngcontent-%COMP%]   .is_complete[_ngcontent-%COMP%]:last-child:after {\n  width: 200%;\n  left: -100%;\n}\n.widget_setting[_ngcontent-%COMP%]   .content_right[_ngcontent-%COMP%]   .map[_ngcontent-%COMP%]   .ranger[_ngcontent-%COMP%]   .progress_bar[_ngcontent-%COMP%]   .is-active[_ngcontent-%COMP%]:not(:first-child):after {\n  content: \"\";\n  display: block;\n  width: 100%;\n  position: absolute;\n  bottom: 21px;\n  left: -50%;\n  z-index: 2;\n}\n.widget_setting[_ngcontent-%COMP%]   .content_right[_ngcontent-%COMP%]   .map[_ngcontent-%COMP%]   .ranger[_ngcontent-%COMP%]   .progress_bar[_ngcontent-%COMP%]   .is-active[_ngcontent-%COMP%]:last-child:after {\n  width: 200%;\n  left: -100%;\n}\n.widget_setting[_ngcontent-%COMP%]   .content_right[_ngcontent-%COMP%]   .map[_ngcontent-%COMP%]   .ranger[_ngcontent-%COMP%]   .progress_bar[_ngcontent-%COMP%]   .is-active[_ngcontent-%COMP%]:before {\n  background-color: #fff;\n  width: 8px;\n  border-radius: 50%;\n}\n.widget_setting[_ngcontent-%COMP%]   .content_right[_ngcontent-%COMP%]   .map[_ngcontent-%COMP%]   .ranger[_ngcontent-%COMP%]   .progress_bar[_ngcontent-%COMP%]   .is-hovered[_ngcontent-%COMP%]:before {\n  background-color: #fff;\n  border-color: #0000e8;\n  transform: scale(1.33);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3dpZGdldHMvc3JjL2xpYi9jb21wb25lbnRzL3dpZGdldC1zZXR0aW5nL0U6XFxQcm9qZWN0XFxhaXMtcG9jL3Byb2plY3RzXFx3aWRnZXRzXFxzcmNcXGxpYlxcc2hhcmVkXFxjb21tb25cXF96b29tLnNjc3MiLCJwcm9qZWN0cy93aWRnZXRzL3NyYy9saWIvY29tcG9uZW50cy93aWRnZXQtc2V0dGluZy93aWRnZXQtc2V0dGluZy5jb21wb25lbnQuc2NzcyIsInByb2plY3RzL3dpZGdldHMvc3JjL2xpYi9jb21wb25lbnRzL3dpZGdldC1zZXR0aW5nL0U6XFxQcm9qZWN0XFxhaXMtcG9jL3Byb2plY3RzXFx3aWRnZXRzXFxzcmNcXGxpYlxcY29tcG9uZW50c1xcd2lkZ2V0LXNldHRpbmdcXHdpZGdldC1zZXR0aW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBREY7SUFFSSxTQUFBO0VDQ0Y7QUFDRjtBRENFO0VBTEY7SUFNSSxTQUFBO0VDRUY7QUFDRjtBREFFO0VBVEY7SUFVSSxVQUFBO0VDR0Y7QUFDRjtBRERFO0VBYkY7SUFjSSxTQUFBO0VDSUY7QUFDRjtBREZFO0VBakJGO0lBa0JJLFVBQUE7RUNLRjtBQUNGO0FESEU7RUFyQkY7SUFzQkksT0FBQTtFQ01GO0FBQ0Y7QUMxQkU7RUFDRSxlQUFBO0FENkJKO0FDekJBO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSw2QkFBQTtBRDRCRjtBQ3pCRTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FEMkJKO0FDekJJO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQ0FBQTtBRDJCTjtBQ3hCSTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBRDBCTjtBQ3JCRTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQ0FBQTtBRHVCSjtBQ3JCSTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUNBQUE7QUR1Qk47QUNuQkk7RUFDRSxnQkFBQTtBRHFCTjtBQ25CTTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0NBQUE7QURxQlI7QUNsQk07RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlDQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBRUEsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QURtQlI7QUNqQlE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QURtQlY7QUNqQlU7RUFDRSxlQUFBO0FEbUJaO0FDaEJVO0VBQ0UsaUJBQUE7QURrQlo7QUNkUTtFQUNFLGNBQUE7QURnQlY7QUNWSTtFQUNFLGdCQUFBO0FEWU47QUNUUTtFQUNFLGFBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QURXVjtBQ1RVO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FEV1o7QUNSVTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsK0JBQUE7RUFDQSxpQkFBQTtBRFVaO0FDSEk7RUFDRSxZQUFBO0FES047QUNITTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtBREtSO0FDSFE7RUFDRSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FES1Y7QUNIVTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QURLWjtBQ0hZO0VBQ0UseUJBQUE7QURLZDtBQ0ZZO0VBQ0UseUJBQUE7QURJZDtBQ0FVO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGlDQUFBO0FERVo7QUNHTTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtBRERSO0FDSU07RUFDRSxjQUFBO0VBQ0Esa0NBQUE7QURGUjtBQ0tNO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsK0NBQUE7RUFDQSxrQkFBQTtBREhSO0FDTU07RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FESlI7QUNNUTtFQUNFLFdBQUE7RUFDQSxlQUFBO0FESlY7QUNNVTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FESlo7QUNPVTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGtDQUFBO0FETFo7QUNTWTtFQUNFLHlCQUFBO0FEUGQ7QUNVWTtFQUNFLGNBQUE7QURSZDtBQ2NNO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0FEWlI7QUNjUTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QURaVjtBQ2NVO0VBQ0UsZUFBQTtBRFpaO0FDaUJNO0VBQ0UsY0FBQTtBRGZSO0FDeUJRO0VBQ0Usb0NBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FEdkJWO0FDd0JVO0VBQ0UsT0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBWGtCO0VBWWxCLGNBbEJXO0VBbUJYLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtBRHRCWjtBQ3VCWTtFQUNFLE9BQUE7RUFDQSxnQkFBQTtBRHJCZDtBQ3NCYztFQUNFLE9BQUE7QURwQmhCO0FDdUJZO0VBQ0UsT0FBQTtFQUNBLGlCQUFBO0FEckJkO0FDc0JjO0VBQ0UsUUFBQTtFQUNBLFVBQUE7QURwQmhCO0FDc0JjO0VBQ0UsV0FBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FEcEJoQjtBQ3VCWTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQS9Da0I7RUFnRGxCLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsZ0NBQUE7RUFDQSxVQUFBO0FEckJkO0FDd0JjO0VBQ0Usc0JBOURRO0VBK0RSLHNCQUFBO0FEdEJoQjtBQzBCVTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0NBQUE7RUFDQSxvQ0FBQTtBRHhCWjtBQzRCYztFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0FEMUJoQjtBQzhCYztFQUNFLFdBQUE7RUFDQSxXQUFBO0FENUJoQjtBQ2tDYztFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0FEaENoQjtBQ29DYztFQUNFLFdBQUE7RUFDQSxXQUFBO0FEbENoQjtBQ3FDWTtFQUNFLHNCQS9HVTtFQWdIVixVQUFBO0VBQ0Esa0JBQUE7QURuQ2Q7QUN1Q1k7RUFDRSxzQkF0SFU7RUF1SFYscUJBbEhVO0VBbUhWLHNCQUFBO0FEckNkIiwiZmlsZSI6InByb2plY3RzL3dpZGdldHMvc3JjL2xpYi9jb21wb25lbnRzL3dpZGdldC1zZXR0aW5nL3dpZGdldC1zZXR0aW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTM2NnB4KSB7XHJcbiAgICB6b29tOiAwLjg7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE0MDBweCkge1xyXG4gICAgem9vbTogMC44O1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNDQwcHgpIHtcclxuICAgIHpvb206IDAuODU7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE2MDBweCkge1xyXG4gICAgem9vbTogMC45O1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNjgwcHgpIHtcclxuICAgIHpvb206IDAuOTU7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE5MjBweCkge1xyXG4gICAgem9vbTogMTtcclxuICB9XHJcbn1cclxuIiwiQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMzY2cHgpIHtcbiAgOmhvc3Qge1xuICAgIHpvb206IDAuODtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNDAwcHgpIHtcbiAgOmhvc3Qge1xuICAgIHpvb206IDAuODtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNDQwcHgpIHtcbiAgOmhvc3Qge1xuICAgIHpvb206IDAuODU7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTYwMHB4KSB7XG4gIDpob3N0IHtcbiAgICB6b29tOiAwLjk7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTY4MHB4KSB7XG4gIDpob3N0IHtcbiAgICB6b29tOiAwLjk1O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE5MjBweCkge1xuICA6aG9zdCB7XG4gICAgem9vbTogMTtcbiAgfVxufVxuXG4ud2lkZ2V0X3NldHRpbmc6Om5nLWRlZXAgZ3JpZHN0ZXItaXRlbSB7XG4gIHRyYW5zZm9ybTogbm9uZTtcbn1cblxuLndpZGdldF9zZXR0aW5nIHtcbiAgbWFyZ2luOiA3MHB4IGF1dG87XG4gIG1pbi1oZWlnaHQ6IDM4MHB4O1xuICBtYXgtaGVpZ2h0OiA3MDBweDtcbiAgd2lkdGg6IDcwMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cbi53aWRnZXRfc2V0dGluZyAuY29udGVudF9sZWZ0IHtcbiAgd2lkdGg6IDMwMHB4O1xuICBtaW4taGVpZ2h0OiAzODBweDtcbiAgcGFkZGluZy1yaWdodDogMzBweDtcbn1cbi53aWRnZXRfc2V0dGluZyAuY29udGVudF9sZWZ0IGgzIHtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC1mYW1pbHk6IFwiU0YgUHJvIFRleHQtTWVkaXVtXCI7XG59XG4ud2lkZ2V0X3NldHRpbmcgLmNvbnRlbnRfbGVmdCAud2lkZ2V0X2JveCB7XG4gIHdpZHRoOiAzMDBweDtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgYmFja2dyb3VuZDogYmxhY2s7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG59XG4ud2lkZ2V0X3NldHRpbmcgLmNvbnRlbnRfcmlnaHQge1xuICB3aWR0aDogNDAwcHg7XG4gIG1pbi1oZWlnaHQ6IDM4MHB4O1xuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNlMGUwZTAzMztcbn1cbi53aWRnZXRfc2V0dGluZyAuY29udGVudF9yaWdodCBoMyB7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIlNGIFBybyBUZXh0LU1lZGl1bVwiO1xufVxuLndpZGdldF9zZXR0aW5nIC5jb250ZW50X3JpZ2h0IC5zZWxlY3Qge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuLndpZGdldF9zZXR0aW5nIC5jb250ZW50X3JpZ2h0IC5zZWxlY3QgLnRpdGxlIHtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC1mYW1pbHk6IFwiU0YgUHJvIFRleHQtUmVndWxhclwiO1xufVxuLndpZGdldF9zZXR0aW5nIC5jb250ZW50X3JpZ2h0IC5zZWxlY3QgLnNlbGVjdF9ib3gge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHdpZHRoOiAzMDBweDtcbiAgaGVpZ2h0OiA0OHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBmb250LWZhbWlseTogXCJTRiBQcm8gVGV4dC1NZWRpdW1cIjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcbiAgcGFkZGluZzogMCAxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4ud2lkZ2V0X3NldHRpbmcgLmNvbnRlbnRfcmlnaHQgLnNlbGVjdCAuc2VsZWN0X2JveCA+IGRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ud2lkZ2V0X3NldHRpbmcgLmNvbnRlbnRfcmlnaHQgLnNlbGVjdCAuc2VsZWN0X2JveCA+IGRpdiBpIHtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuLndpZGdldF9zZXR0aW5nIC5jb250ZW50X3JpZ2h0IC5zZWxlY3QgLnNlbGVjdF9ib3ggPiBkaXYgc3BhbiB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuLndpZGdldF9zZXR0aW5nIC5jb250ZW50X3JpZ2h0IC5zZWxlY3QgLnNlbGVjdF9ib3ggPiBzcGFuIHtcbiAgY29sb3I6ICM5RkZGQjE7XG59XG4ud2lkZ2V0X3NldHRpbmcgLmNvbnRlbnRfcmlnaHQgLmdyYXBoIHtcbiAgbWFyZ2luLXRvcDogNTBweDtcbn1cbi53aWRnZXRfc2V0dGluZyAuY29udGVudF9yaWdodCAuZ3JhcGggLmNvbG9ycyAuaXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cbi53aWRnZXRfc2V0dGluZyAuY29udGVudF9yaWdodCAuZ3JhcGggLmNvbG9ycyAuaXRlbSAuY29sb3JfYm94IHtcbiAgd2lkdGg6IDQ4cHg7XG4gIGhlaWdodDogNDhweDtcbiAgYm9yZGVyOiAycHggc29saWQgI0ZGRkZGRjtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuLndpZGdldF9zZXR0aW5nIC5jb250ZW50X3JpZ2h0IC5ncmFwaCAuY29sb3JzIC5pdGVtIC52YWx1ZSB7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtc2l6ZTogXCJTRiBQcm8gVGV4dC1NZWRpdW1cIjtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG4ud2lkZ2V0X3NldHRpbmcgLmNvbnRlbnRfcmlnaHQgLm1hcCB7XG4gIHdpZHRoOiAzMDBweDtcbn1cbi53aWRnZXRfc2V0dGluZyAuY29udGVudF9yaWdodCAubWFwIC5waW5zIHtcbiAgbWF4LWhlaWdodDogMjQwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi53aWRnZXRfc2V0dGluZyAuY29udGVudF9yaWdodCAubWFwIC5waW5zIC5pdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLndpZGdldF9zZXR0aW5nIC5jb250ZW50X3JpZ2h0IC5tYXAgLnBpbnMgLml0ZW0gLnBpbl9ib3gge1xuICB3aWR0aDogNDhweDtcbiAgaGVpZ2h0OiA0OHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xuICBmb250LXNpemU6IDI1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLndpZGdldF9zZXR0aW5nIC5jb250ZW50X3JpZ2h0IC5tYXAgLnBpbnMgLml0ZW0gLnBpbl9ib3guYWN0aXZlIHtcbiAgYm9yZGVyOiAycHggc29saWQgIzlGRkZCMTtcbn1cbi53aWRnZXRfc2V0dGluZyAuY29udGVudF9yaWdodCAubWFwIC5waW5zIC5pdGVtIC5waW5fYm94OmhvdmVyIHtcbiAgYm9yZGVyOiAycHggc29saWQgIzlGRkZCMTtcbn1cbi53aWRnZXRfc2V0dGluZyAuY29udGVudF9yaWdodCAubWFwIC5waW5zIC5pdGVtIC52YWx1ZSB7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBmb250LXNpemU6IDE2cHg7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBmb250LWZhbWlseTogXCJTRiBQcm8gVGV4dC1NZWRpdW1cIjtcbn1cbi53aWRnZXRfc2V0dGluZyAuY29udGVudF9yaWdodCAubWFwIGhyIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI0UwRTBFMDtcbiAgb3BhY2l0eTogMC4yO1xufVxuLndpZGdldF9zZXR0aW5nIC5jb250ZW50X3JpZ2h0IC5tYXAgLnRpdGxlIHtcbiAgY29sb3I6ICM5NTkzOTM7XG4gIGZvbnQtZmFtaWx5OiBcIlNGIFBybyBUZXh0LVJlZ3VsYXJcIjtcbn1cbi53aWRnZXRfc2V0dGluZyAuY29udGVudF9yaWdodCAubWFwIGlucHV0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMzZweDtcbiAgcGFkZGluZzogMCAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjRjdGN0ZFIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuLndpZGdldF9zZXR0aW5nIC5jb250ZW50X3JpZ2h0IC5tYXAgLm1hcF90eXBlIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLndpZGdldF9zZXR0aW5nIC5jb250ZW50X3JpZ2h0IC5tYXAgLm1hcF90eXBlIC5pdGVtIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi53aWRnZXRfc2V0dGluZyAuY29udGVudF9yaWdodCAubWFwIC5tYXBfdHlwZSAuaXRlbSAudHlwZV9ib3gge1xuICB3aWR0aDogNjJweDtcbiAgaGVpZ2h0OiA2M3B4O1xufVxuLndpZGdldF9zZXR0aW5nIC5jb250ZW50X3JpZ2h0IC5tYXAgLm1hcF90eXBlIC5pdGVtIC5uYW1lIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgY29sb3I6ICM5NTkzOTM7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogXCJTRiBQcm8gVGV4dC1SZWd1bGFyXCI7XG59XG4ud2lkZ2V0X3NldHRpbmcgLmNvbnRlbnRfcmlnaHQgLm1hcCAubWFwX3R5cGUgLml0ZW0uYWN0aXZlIC50eXBlX2JveCwgLndpZGdldF9zZXR0aW5nIC5jb250ZW50X3JpZ2h0IC5tYXAgLm1hcF90eXBlIC5pdGVtOmhvdmVyIC50eXBlX2JveCB7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNGRkZGRkY7XG59XG4ud2lkZ2V0X3NldHRpbmcgLmNvbnRlbnRfcmlnaHQgLm1hcCAubWFwX3R5cGUgLml0ZW0uYWN0aXZlIC5uYW1lLCAud2lkZ2V0X3NldHRpbmcgLmNvbnRlbnRfcmlnaHQgLm1hcCAubWFwX3R5cGUgLml0ZW06aG92ZXIgLm5hbWUge1xuICBjb2xvcjogI0ZGRkZGRjtcbn1cbi53aWRnZXRfc2V0dGluZyAuY29udGVudF9yaWdodCAubWFwIC5hY3Rpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4ud2lkZ2V0X3NldHRpbmcgLmNvbnRlbnRfcmlnaHQgLm1hcCAuYWN0aW9uIGJ1dHRvbiB7XG4gIG1pbi13aWR0aDogNTJweDtcbiAgaGVpZ2h0OiA1MnB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG4ud2lkZ2V0X3NldHRpbmcgLmNvbnRlbnRfcmlnaHQgLm1hcCAuYWN0aW9uIGJ1dHRvbiBpIHtcbiAgZm9udC1zaXplOiAzMHB4O1xufVxuLndpZGdldF9zZXR0aW5nIC5jb250ZW50X3JpZ2h0IC5tYXAgLnJhbmdlciB7XG4gIG1hcmdpbjogMjBweCAwO1xufVxuLndpZGdldF9zZXR0aW5nIC5jb250ZW50X3JpZ2h0IC5tYXAgLnJhbmdlciAucHJvZ3Jlc3NfYmFyIHtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xufVxuLndpZGdldF9zZXR0aW5nIC5jb250ZW50X3JpZ2h0IC5tYXAgLnJhbmdlciAucHJvZ3Jlc3NfYmFyIGxpIHtcbiAgZmxleDogMjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmb250LXNpemU6IDAuNnJlbTtcbiAgY29sb3I6ICM3NTc4N2I7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xuICBtaW4td2lkdGg6IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICNlOGU4ZTg7XG59XG4ud2lkZ2V0X3NldHRpbmcgLmNvbnRlbnRfcmlnaHQgLm1hcCAucmFuZ2VyIC5wcm9ncmVzc19iYXIgbGk6Zmlyc3QtY2hpbGQge1xuICBmbGV4OiAxO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLndpZGdldF9zZXR0aW5nIC5jb250ZW50X3JpZ2h0IC5tYXAgLnJhbmdlciAucHJvZ3Jlc3NfYmFyIGxpOmZpcnN0LWNoaWxkOmJlZm9yZSB7XG4gIGxlZnQ6IDA7XG59XG4ud2lkZ2V0X3NldHRpbmcgLmNvbnRlbnRfcmlnaHQgLm1hcCAucmFuZ2VyIC5wcm9ncmVzc19iYXIgbGk6bGFzdC1jaGlsZCB7XG4gIGZsZXg6IDE7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuLndpZGdldF9zZXR0aW5nIC5jb250ZW50X3JpZ2h0IC5tYXAgLnJhbmdlciAucHJvZ3Jlc3NfYmFyIGxpOmxhc3QtY2hpbGQ6YmVmb3JlIHtcbiAgcmlnaHQ6IDA7XG4gIGxlZnQ6IGF1dG87XG59XG4ud2lkZ2V0X3NldHRpbmcgLmNvbnRlbnRfcmlnaHQgLm1hcCAucmFuZ2VyIC5wcm9ncmVzc19iYXIgbGk6bGFzdC1jaGlsZCBzcGFuIHtcbiAgd2lkdGg6IDIwMCU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAtMTAwJTtcbn1cbi53aWRnZXRfc2V0dGluZyAuY29udGVudF9yaWdodCAubWFwIC5yYW5nZXIgLnByb2dyZXNzX2JhciBsaTpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiA4cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlOGU4ZTg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogY2FsYyg1MCUgLSA2cHgpO1xuICBib3R0b206IDE4cHg7XG4gIHotaW5kZXg6IDM7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICBvcGFjaXR5OiAxO1xufVxuLndpZGdldF9zZXR0aW5nIC5jb250ZW50X3JpZ2h0IC5tYXAgLnJhbmdlciAucHJvZ3Jlc3NfYmFyIGxpOmhvdmVyOmJlZm9yZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4zMyk7XG59XG4ud2lkZ2V0X3NldHRpbmcgLmNvbnRlbnRfcmlnaHQgLm1hcCAucmFuZ2VyIC5wcm9ncmVzc19iYXIgc3BhbiB7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBmb250LXNpemU6IDEwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIlNGIFBybyBUZXh0LVJlZ3VsYXJcIjtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2UtaW4tb3V0O1xufVxuLndpZGdldF9zZXR0aW5nIC5jb250ZW50X3JpZ2h0IC5tYXAgLnJhbmdlciAucHJvZ3Jlc3NfYmFyIC5pc19jb21wbGV0ZTpub3QoOmZpcnN0LWNoaWxkKTphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDIxcHg7XG4gIGxlZnQ6IC01MCU7XG4gIHotaW5kZXg6IDI7XG59XG4ud2lkZ2V0X3NldHRpbmcgLmNvbnRlbnRfcmlnaHQgLm1hcCAucmFuZ2VyIC5wcm9ncmVzc19iYXIgLmlzX2NvbXBsZXRlOmxhc3QtY2hpbGQ6YWZ0ZXIge1xuICB3aWR0aDogMjAwJTtcbiAgbGVmdDogLTEwMCU7XG59XG4ud2lkZ2V0X3NldHRpbmcgLmNvbnRlbnRfcmlnaHQgLm1hcCAucmFuZ2VyIC5wcm9ncmVzc19iYXIgLmlzLWFjdGl2ZTpub3QoOmZpcnN0LWNoaWxkKTphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDIxcHg7XG4gIGxlZnQ6IC01MCU7XG4gIHotaW5kZXg6IDI7XG59XG4ud2lkZ2V0X3NldHRpbmcgLmNvbnRlbnRfcmlnaHQgLm1hcCAucmFuZ2VyIC5wcm9ncmVzc19iYXIgLmlzLWFjdGl2ZTpsYXN0LWNoaWxkOmFmdGVyIHtcbiAgd2lkdGg6IDIwMCU7XG4gIGxlZnQ6IC0xMDAlO1xufVxuLndpZGdldF9zZXR0aW5nIC5jb250ZW50X3JpZ2h0IC5tYXAgLnJhbmdlciAucHJvZ3Jlc3NfYmFyIC5pcy1hY3RpdmU6YmVmb3JlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgd2lkdGg6IDhweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuLndpZGdldF9zZXR0aW5nIC5jb250ZW50X3JpZ2h0IC5tYXAgLnJhbmdlciAucHJvZ3Jlc3NfYmFyIC5pcy1ob3ZlcmVkOmJlZm9yZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlci1jb2xvcjogIzAwMDBlODtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjMzKTtcbn0iLCJAaW1wb3J0ICcuLi8uLi9zaGFyZWQvY29tbW9uL3pvb20nO1xyXG5cclxuLndpZGdldF9zZXR0aW5nOjpuZy1kZWVwIHtcclxuICBncmlkc3Rlci1pdGVtIHtcclxuICAgIHRyYW5zZm9ybTogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbi53aWRnZXRfc2V0dGluZyB7XHJcbiAgbWFyZ2luOiA3MHB4IGF1dG87XHJcbiAgbWluLWhlaWdodDogMzgwcHg7XHJcbiAgbWF4LWhlaWdodDogNzAwcHg7XHJcbiAgd2lkdGg6IDcwMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcblxyXG4gIC8vIExFRlRcclxuICAuY29udGVudF9sZWZ0IHtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIG1pbi1oZWlnaHQ6IDM4MHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMzBweDtcclxuXHJcbiAgICBoMyB7XHJcbiAgICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBcIlNGIFBybyBUZXh0LU1lZGl1bVwiO1xyXG4gICAgfVxyXG5cclxuICAgIC53aWRnZXRfYm94IHtcclxuICAgICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgICBiYWNrZ3JvdW5kOiBibGFjaztcclxuICAgICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIFJJR0hUXHJcbiAgLmNvbnRlbnRfcmlnaHQge1xyXG4gICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgbWluLWhlaWdodDogMzgwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcclxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2UwZTBlMDMzO1xyXG5cclxuICAgIGgzIHtcclxuICAgICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgZm9udC1mYW1pbHk6IFwiU0YgUHJvIFRleHQtTWVkaXVtXCI7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU2VsZWN0IC0gR2F1Z2UgJiBTaW1wbGVcclxuICAgIC5zZWxlY3Qge1xyXG4gICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG5cclxuICAgICAgLnRpdGxlIHtcclxuICAgICAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiU0YgUHJvIFRleHQtUmVndWxhclwiO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuc2VsZWN0X2JveCB7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIHdpZHRoOiAzMDBweDtcclxuICAgICAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIlNGIFBybyBUZXh0LU1lZGl1bVwiO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XHJcbiAgICAgICAgcGFkZGluZzogMCAxMHB4O1xyXG5cclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuICAgICAgICAmPmRpdiB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgICBpIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICY+c3BhbiB7XHJcbiAgICAgICAgICBjb2xvcjogIzlGRkZCMTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBTZWxlY3QgY29sb3IgLSBDaGFydFxyXG4gICAgLmdyYXBoIHtcclxuICAgICAgbWFyZ2luLXRvcDogNTBweDtcclxuXHJcbiAgICAgIC5jb2xvcnMge1xyXG4gICAgICAgIC5pdGVtIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuXHJcbiAgICAgICAgICAuY29sb3JfYm94IHtcclxuICAgICAgICAgICAgd2lkdGg6IDQ4cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogNDhweDtcclxuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgI0ZGRkZGRjtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC52YWx1ZSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogXCJTRiBQcm8gVGV4dC1NZWRpdW1cIjtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU2VsZWN0IG9wdGlvbiAtIE1hcFxyXG4gICAgLm1hcCB7XHJcbiAgICAgIHdpZHRoOiAzMDBweDtcclxuXHJcbiAgICAgIC5waW5zIHtcclxuICAgICAgICBtYXgtaGVpZ2h0OiAyNDBweDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgICAgIC5pdGVtIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuXHJcbiAgICAgICAgICAucGluX2JveCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA0OHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICAgICAgICAmLmFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgIzlGRkZCMTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgIzlGRkZCMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC52YWx1ZSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJTRiBQcm8gVGV4dC1NZWRpdW1cIjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGhyIHtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjRTBFMEUwO1xyXG4gICAgICAgIG9wYWNpdHk6IDAuMjtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnRpdGxlIHtcclxuICAgICAgICBjb2xvcjogIzk1OTM5MztcclxuICAgICAgICBmb250LWZhbWlseTogXCJTRiBQcm8gVGV4dC1SZWd1bGFyXCI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlucHV0IHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDM2cHg7XHJcbiAgICAgICAgcGFkZGluZzogMCAxMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNGN0Y3RkUgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLm1hcF90eXBlIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcblxyXG4gICAgICAgIC5pdGVtIHtcclxuICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAudHlwZV9ib3gge1xyXG4gICAgICAgICAgICB3aWR0aDogNjJweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA2M3B4O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5uYW1lIHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICAgICAgY29sb3I6ICM5NTkzOTM7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJTRiBQcm8gVGV4dC1SZWd1bGFyXCI7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgJi5hY3RpdmUsICY6aG92ZXIge1xyXG4gICAgICAgICAgICAudHlwZV9ib3gge1xyXG4gICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNGRkZGRkY7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5uYW1lIHtcclxuICAgICAgICAgICAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLmFjdGlvbiB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblxyXG4gICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICBtaW4td2lkdGg6IDUycHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDUycHg7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcblxyXG4gICAgICAgICAgaSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5yYW5nZXIge1xyXG4gICAgICAgIG1hcmdpbjogMjBweCAwO1xyXG4gICAgICAgICQtLWNvbG9yLXdoaXRlOiAjZmZmO1xyXG4gICAgICAgICQtLWNvbG9yLWJsYWNrOiAjMzMzO1xyXG4gICAgICAgICQtLWNvbG9yLWdyYXk6ICM3NTc4N2I7XHJcbiAgICAgICAgJC0tY29sb3ItZ3JheS1saWdodDogI2JiYjtcclxuICAgICAgICAkLS1jb2xvci1ncmF5LWRpc2FibGVkOiAjZThlOGU4O1xyXG4gICAgICAgICQtLWNvbG9yLWdyZWVuOiAjMDAwMGU4O1xyXG4gICAgICAgICQtLWNvbG9yLWdyZWVuLWRhcms6ICMwMDAwZTg7XHJcbiAgICAgICAgJC0tZm9udC1zaXplLXNtYWxsOiAuNnJlbTtcclxuICAgICAgICAkLS1mb250LXNpemUtZGVmYXVsdDogLjZyZW07XHJcbiAgICAgICAgLnByb2dyZXNzX2JhciB7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICBsaSB7XHJcbiAgICAgICAgICAgIGZsZXg6IDI7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAkLS1mb250LXNpemUtZGVmYXVsdDtcclxuICAgICAgICAgICAgY29sb3I6ICQtLWNvbG9yLWdyYXk7XHJcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiB2aXNpYmxlO1xyXG4gICAgICAgICAgICBtaW4td2lkdGg6IDA7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICQtLWNvbG9yLWdyYXktZGlzYWJsZWQ7XHJcbiAgICAgICAgICAgICY6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmOmxhc3QtY2hpbGQge1xyXG4gICAgICAgICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgICAgICAgJjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiBhdXRvO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAyMDAlO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgbGVmdDogLTEwMCU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICY6YmVmb3JlIHtcclxuICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgIGhlaWdodDogOHB4O1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICQtLWNvbG9yLWdyYXktZGlzYWJsZWQ7XHJcbiAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJC0tY29sb3Itd2hpdGU7XHJcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgIGxlZnQ6IGNhbGMoNTAlIC0gNnB4KTtcclxuICAgICAgICAgICAgICBib3R0b206IDE4cHg7XHJcbiAgICAgICAgICAgICAgei1pbmRleDogMztcclxuICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgJjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJC0tY29sb3Itd2hpdGU7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMzMpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIlNGIFBybyBUZXh0LVJlZ3VsYXJcIjtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuaXNfY29tcGxldGUge1xyXG4gICAgICAgICAgICAmOm5vdCg6Zmlyc3QtY2hpbGQpIHtcclxuICAgICAgICAgICAgICAmOmFmdGVyIHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgYm90dG9tOiAyMXB4O1xyXG4gICAgICAgICAgICAgICAgbGVmdDogLTUwJTtcclxuICAgICAgICAgICAgICAgIHotaW5kZXg6IDI7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMjAwJTtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IC0xMDAlO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmlzLWFjdGl2ZSB7XHJcbiAgICAgICAgICAgICY6bm90KDpmaXJzdC1jaGlsZCkge1xyXG4gICAgICAgICAgICAgICY6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICBib3R0b206IDIxcHg7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAtNTAlO1xyXG4gICAgICAgICAgICAgICAgei1pbmRleDogMjtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgICAgICAmOmFmdGVyIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAyMDAlO1xyXG4gICAgICAgICAgICAgICAgbGVmdDogLTEwMCU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICY6YmVmb3JlIHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkLS1jb2xvci13aGl0ZTtcclxuICAgICAgICAgICAgICB3aWR0aDogOHB4O1xyXG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmlzLWhvdmVyZWQge1xyXG4gICAgICAgICAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJC0tY29sb3Itd2hpdGU7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAkLS1jb2xvci1ncmVlbjtcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMzMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WidgetSettingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'lib-widget-setting',
                templateUrl: './widget-setting.component.html',
                styleUrls: ['./widget-setting.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }]; }, { modalSelectSensor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['modalSelectSensor', { static: false }]
        }] }); })();
const WidgetSettingWidget = {
    type: 'page',
    component: WidgetSettingComponent,
    defaultconfig: [],
};


/***/ }),

/***/ "../widgets/src/lib/material.module.ts":
/*!*********************************************!*\
  !*** ../widgets/src/lib/material.module.ts ***!
  \*********************************************/
/*! exports provided: DemoMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoMaterialModule", function() { return DemoMaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/a11y */ "../../node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/a11y.js");
/* harmony import */ var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/clipboard */ "../../node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/clipboard.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "../../node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/drag-drop.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/portal */ "../../node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/portal.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/scrolling */ "../../node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/scrolling.js");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/stepper */ "../../node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/stepper.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/table */ "../../node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/tree */ "../../node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/tree.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/autocomplete */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/badge */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/badge.js");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/bottom-sheet.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button-toggle */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/button-toggle.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/card */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/checkbox */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/chips */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/chips.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/stepper */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/stepper.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/datepicker */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/dialog */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/divider */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/expansion */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/grid-list */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/icon */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/input */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/list */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/menu */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/core */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/paginator */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/progress-bar */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/progress-spinner */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/radio */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/select */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/sidenav */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/slider */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/slide-toggle */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/snack-bar */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/sort */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/table */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/tabs */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/toolbar */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/tooltip */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/material/tree */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/tree.js");












































class DemoMaterialModule {
}
DemoMaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DemoMaterialModule });
DemoMaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DemoMaterialModule_Factory(t) { return new (t || DemoMaterialModule)(); }, imports: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["A11yModule"],
        _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_2__["ClipboardModule"],
        _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__["CdkStepperModule"],
        _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__["CdkTableModule"],
        _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__["CdkTreeModule"],
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDropModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__["MatBadgeModule"],
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__["MatBottomSheetModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__["MatButtonToggleModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__["MatChipsModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__["MatStepperModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__["MatDividerModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__["MatExpansionModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__["MatGridListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_24__["MatInputModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_25__["MatListModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__["MatMenuModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatNativeDateModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__["MatPaginatorModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__["MatProgressBarModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__["MatProgressSpinnerModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__["MatRadioModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatRippleModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_32__["MatSelectModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__["MatSidenavModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__["MatSliderModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__["MatSlideToggleModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__["MatSnackBarModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__["MatSortModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_38__["MatTableModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__["MatTabsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__["MatToolbarModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__["MatTooltipModule"],
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_42__["MatTreeModule"],
        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["PortalModule"],
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollingModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DemoMaterialModule, { exports: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["A11yModule"],
        _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_2__["ClipboardModule"],
        _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__["CdkStepperModule"],
        _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__["CdkTableModule"],
        _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__["CdkTreeModule"],
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDropModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__["MatBadgeModule"],
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__["MatBottomSheetModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__["MatButtonToggleModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__["MatChipsModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__["MatStepperModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__["MatDividerModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__["MatExpansionModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__["MatGridListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_24__["MatInputModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_25__["MatListModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__["MatMenuModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatNativeDateModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__["MatPaginatorModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__["MatProgressBarModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__["MatProgressSpinnerModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__["MatRadioModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatRippleModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_32__["MatSelectModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__["MatSidenavModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__["MatSliderModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__["MatSlideToggleModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__["MatSnackBarModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__["MatSortModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_38__["MatTableModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__["MatTabsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__["MatToolbarModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__["MatTooltipModule"],
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_42__["MatTreeModule"],
        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["PortalModule"],
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DemoMaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                exports: [
                    _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["A11yModule"],
                    _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_2__["ClipboardModule"],
                    _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__["CdkStepperModule"],
                    _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__["CdkTableModule"],
                    _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__["CdkTreeModule"],
                    _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDropModule"],
                    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"],
                    _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__["MatBadgeModule"],
                    _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__["MatBottomSheetModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
                    _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__["MatButtonToggleModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"],
                    _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__["MatChipsModule"],
                    _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__["MatStepperModule"],
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"],
                    _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__["MatDividerModule"],
                    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__["MatExpansionModule"],
                    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__["MatGridListModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__["MatIconModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_24__["MatInputModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_25__["MatListModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__["MatMenuModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatNativeDateModule"],
                    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__["MatPaginatorModule"],
                    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__["MatProgressBarModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__["MatProgressSpinnerModule"],
                    _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__["MatRadioModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatRippleModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_32__["MatSelectModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__["MatSidenavModule"],
                    _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__["MatSliderModule"],
                    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__["MatSlideToggleModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__["MatSnackBarModule"],
                    _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__["MatSortModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_38__["MatTableModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__["MatTabsModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__["MatToolbarModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__["MatTooltipModule"],
                    _angular_material_tree__WEBPACK_IMPORTED_MODULE_42__["MatTreeModule"],
                    _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["PortalModule"],
                    _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollingModule"],
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "../widgets/src/lib/models/widget-event-type.ts":
/*!******************************************************!*\
  !*** ../widgets/src/lib/models/widget-event-type.ts ***!
  \******************************************************/
/*! exports provided: WidgetEventType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetEventType", function() { return WidgetEventType; });
var WidgetEventType;
(function (WidgetEventType) {
    WidgetEventType["CLICK"] = "CLICK";
    WidgetEventType["DOUBLE_CLICK"] = "DOUBLE_CLICK";
})(WidgetEventType || (WidgetEventType = {}));


/***/ }),

/***/ "../widgets/src/lib/models/widget-type.ts":
/*!************************************************!*\
  !*** ../widgets/src/lib/models/widget-type.ts ***!
  \************************************************/
/*! exports provided: WidgetType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetType", function() { return WidgetType; });
var WidgetType;
(function (WidgetType) {
    WidgetType["LABEL_WIDGET"] = "label-widget";
    WidgetType["BUTTON_WIDGET"] = "button-widget";
    WidgetType["TEXTBOX_WIDGET"] = "textbox-widget";
    WidgetType["ALERT_WIDGET"] = "alert-widget";
    WidgetType["ALARM_WIDGET"] = "alarm-widget";
})(WidgetType || (WidgetType = {}));


/***/ }),

/***/ "../widgets/src/lib/services/widgets.service.ts":
/*!******************************************************!*\
  !*** ../widgets/src/lib/services/widgets.service.ts ***!
  \******************************************************/
/*! exports provided: WidgetsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetsService", function() { return WidgetsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _models_widget_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/widget-type */ "../widgets/src/lib/models/widget-type.ts");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uuid */ "../../node_modules/uuid/dist/esm-browser/index.js");




class WidgetsService {
    constructor() {
        this._widgets = [];
        this._dashboards = [];
    }
    addDashboardIfNotExist(dashboardId) {
        if (this._dashboards.findIndex(w => w.dashboardId === dashboardId) < 0) {
            this.addDashboard(dashboardId);
        }
    }
    addDashboard(dashboardId) {
        let widgetsService = this;
        const widgetContentAccessor = {
            getWidgetContents(type) {
                return widgetsService.getWidgetContentsByType(dashboardId, type);
            }
        };
        this._dashboards.push({ dashboardId: dashboardId, widgetContentAccessor: widgetContentAccessor });
    }
    removeDashboard(dashboardId) {
        this._dashboards.splice(this._dashboards.findIndex(d => dashboardId == dashboardId), 1);
        this._widgets = this._widgets.filter(w => w.dashboardId != dashboardId);
    }
    addWidget(dashboardId, widgetItem) {
        this._widgets.push({
            dashboardId: dashboardId,
            widgetItem: widgetItem
        });
    }
    getWidgetContentsByType(dashboardId, type) {
        return this._widgets.filter(w => w.dashboardId === dashboardId && w.widgetItem.widgetContent.type === type).map(w => w.widgetItem.widgetContent);
    }
    getWidgetById(widgetId) {
        return this._widgets.find(w => w.widgetItem.widgetContent.id === widgetId).widgetItem;
    }
    removeWidget(widgetId) {
        this._widgets.splice(this._widgets.findIndex(w => w.widgetItem.widgetContent.id = widgetId), 1);
    }
    getDashboardWidgets(dashboardId) {
        return this._widgets.filter(w => w.dashboardId == dashboardId).map(w => w.widgetItem);
    }
    serialize(dashboardId) {
        return JSON.stringify(this.getDashboardWidgets(dashboardId));
    }
    deserialize(dashboardId, jsonString) {
        this.removeDashboard(dashboardId);
        this.addDashboard(dashboardId);
        let widgetContentAccessor = this._dashboards.find(d => d.dashboardId === dashboardId).widgetContentAccessor;
        let widgetItems = JSON.parse(jsonString);
        widgetItems.forEach(w => {
            w.widgetContentAccessor = widgetContentAccessor;
            /*
            switch(w.widgetContent.type) {
              case WidgetType.BUTTON_WIDGET:
                w.widgetContent = <ButtonWidgetContent>(w.widgetContent);
                break;
            }
            */
            this.addWidget(dashboardId, w);
        });
        return widgetItems;
    }
    createAddWidget(dashboardId, type, gridsterItem) {
        const widgetContentAccessor = this._dashboards.find(w => w.dashboardId === dashboardId).widgetContentAccessor;
        const id = this.generateWidgetId(widgetContentAccessor, type);
        let content;
        switch (type) {
            case _models_widget_type__WEBPACK_IMPORTED_MODULE_1__["WidgetType"].ALARM_WIDGET:
                content = {
                    id: id,
                    type: type,
                    label: "Alarm",
                };
                break;
            case _models_widget_type__WEBPACK_IMPORTED_MODULE_1__["WidgetType"].ALERT_WIDGET:
                content = {
                    id: id,
                    type: type,
                    label: "Alert",
                };
                break;
            case _models_widget_type__WEBPACK_IMPORTED_MODULE_1__["WidgetType"].BUTTON_WIDGET:
                const buttonContent = {
                    id: id,
                    type: type,
                    label: "Button",
                    apiName: "",
                    apiParams: [],
                };
                content = buttonContent;
                break;
            case _models_widget_type__WEBPACK_IMPORTED_MODULE_1__["WidgetType"].LABEL_WIDGET:
                content = {
                    id: id,
                    type: type,
                    label: "Label",
                };
                break;
            case _models_widget_type__WEBPACK_IMPORTED_MODULE_1__["WidgetType"].TEXTBOX_WIDGET:
                content = {
                    id: id,
                    type: type,
                    label: "Textbox",
                };
                break;
            default:
                throw console.error("Unsupported content type ", type);
        }
        let widgetItem = { gridsterItem: gridsterItem, widgetContent: content, widgetContentAccessor: widgetContentAccessor };
        this.addWidget(dashboardId, widgetItem);
        return widgetItem;
    }
    generateWidgetId(widgetContentAccessor, type) {
        return Object(uuid__WEBPACK_IMPORTED_MODULE_2__["v4"])();
    }
    clearAll() {
        this._dashboards = [];
        this._widgets = [];
    }
}
WidgetsService.ɵfac = function WidgetsService_Factory(t) { return new (t || WidgetsService)(); };
WidgetsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: WidgetsService, factory: WidgetsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WidgetsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "../widgets/src/lib/shared/common/util.ts":
/*!************************************************!*\
  !*** ../widgets/src/lib/shared/common/util.ts ***!
  \************************************************/
/*! exports provided: Util */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Util", function() { return Util; });
class Util {
    static convertColorOpacity(code, opacity) {
        const HEX = /^#(?:[A-Fa-f0-9]{3}){1,2}$/;
        const RGB = /^rgb[(](?:\s*0*(?:\d\d?(?:\.\d+)?(?:\s*%)?|\.\d+\s*%|100(?:\.0*)?\s*%|(?:1\d\d|2[0-4]\d|25[0-5])(?:\.\d+)?)\s*(?:,(?![)])|(?=[)]))){3}[)]$/;
        const RGBA = /^rgba[(](?:\s*0*(?:\d\d?(?:\.\d+)?(?:\s*%)?|\.\d+\s*%|100(?:\.0*)?\s*%|(?:1\d\d|2[0-4]\d|25[0-5])(?:\.\d+)?)\s*,){3}\s*0*(?:\.\d+|1(?:\.0*)?)\s*[)]$/;
        const HSL = /^hsl[(]\s*0*(?:[12]?\d{1,2}|3(?:[0-5]\d|60))\s*(?:\s*,\s*0*(?:\d\d?(?:\.\d+)?\s*%|\.\d+\s*%|100(?:\.0*)?\s*%)){2}\s*[)]$/;
        const HSLA = /^hsla[(]\s*0*(?:[12]?\d{1,2}|3(?:[0-5]\d|60))\s*(?:\s*,\s*0*(?:\d\d?(?:\.\d+)?\s*%|\.\d+\s*%|100(?:\.0*)?\s*%)){2}\s*,\s*0*(?:\.\d+|1(?:\.0*)?)\s*[)]$/;
        if (HEX.test(code)) {
            // HEX -> HEXA
            return this.HEXtoHEXA(code, opacity);
        }
        else if (RGB.test(code)) {
            // RGB -> HEXA
            const hex = this.RGBToHex(code);
            return this.HEXtoHEXA(hex, opacity);
        }
        else if (RGBA.test(code)) {
            // RGBA -> HEXA
            const hex = this.RGBAToHex(code);
            return this.HEXtoHEXA(hex, opacity);
        }
        else if (HSL.test(code)) {
            // HSL -> HEXA
            const hex = this.HSLToHex(code);
            return this.HEXtoHEXA(hex, opacity);
        }
        else if (HSLA.test(code)) {
            // HSLA -> HEXA
            // TODO pedding!
            // const hex = this.HSLAToHexA(code);
            // return this.HEXtoHEXA(hex, opacity);
            return code;
        }
    }
    static HEXtoHEXA(code, opacity) {
        let hex = code.replace('#', '');
        if (hex.length === 3) {
            hex += hex;
        }
        const r = parseInt(hex.substring(0, 2), 16);
        const g = parseInt(hex.substring(2, 4), 16);
        const b = parseInt(hex.substring(4, 6), 16);
        return this.RGBAToHexA(r, g, b, opacity / 100);
    }
    static RGBToHex(rgb) {
        // Choose correct separator
        let sep = rgb.indexOf(',') > -1 ? ',' : ' ';
        // Turn 'rgb(r,g,b)' into [r,g,b]
        rgb = rgb.substr(4).split(')')[0].split(sep);
        let r = (+rgb[0]).toString(16), g = (+rgb[1]).toString(16), b = (+rgb[2]).toString(16);
        if (r.length == 1)
            r = '0' + r;
        if (g.length == 1)
            g = '0' + g;
        if (b.length == 1)
            b = '0' + b;
        return '#' + r + g + b;
    }
    static RGBAToHex(rgba) {
        const code = rgba.replace(/^rgba?\(|\s+|\)$/g, '').split(',');
        const hex = `#${((1 << 24) + (parseInt(code[0]) << 16) + (parseInt(code[1]) << 8) + parseInt(code[2])).toString(16).slice(1)}`;
        return hex;
    }
    static RGBAToHexA(r, g, b, a) {
        r = r.toString(16);
        g = g.toString(16);
        b = b.toString(16);
        a = Math.round(a * 255).toString(16);
        if (r.length == 1)
            r = "0" + r;
        if (g.length == 1)
            g = "0" + g;
        if (b.length == 1)
            b = "0" + b;
        if (a.length == 1)
            a = "0" + a;
        return "#" + r + g + b + a;
    }
    static HSLToHex(hsl) {
        const sep = hsl.indexOf(',') > -1 ? ',' : ' ';
        hsl = hsl.substr(4).split(')')[0].split(sep);
        let h = hsl[0], s = hsl[1].substr(0, hsl[1].length - 1) / 100, l = hsl[2].substr(0, hsl[2].length - 1) / 100;
        let c = (1 - Math.abs(2 * l - 1)) * s, x = c * (1 - Math.abs((h / 60) % 2 - 1)), m = l - c / 2, r = 0, g = 0, b = 0;
        if (0 <= h && h < 60) {
            r = c;
            g = x;
            b = 0;
        }
        else if (60 <= h && h < 120) {
            r = x;
            g = c;
            b = 0;
        }
        else if (120 <= h && h < 180) {
            r = 0;
            g = c;
            b = x;
        }
        else if (180 <= h && h < 240) {
            r = 0;
            g = x;
            b = c;
        }
        else if (240 <= h && h < 300) {
            r = x;
            g = 0;
            b = c;
        }
        else if (300 <= h && h < 360) {
            r = c;
            g = 0;
            b = x;
        }
        // Having obtained RGB, convert channels to hex
        r = Math.round((r + m) * 255).toString(16);
        g = Math.round((g + m) * 255).toString(16);
        b = Math.round((b + m) * 255).toString(16);
        // Prepend 0s, if necessary
        if (r.length == 1)
            r = '0' + r;
        if (g.length == 1)
            g = '0' + g;
        if (b.length == 1)
            b = '0' + b;
        return '#' + r + g + b;
    }
    static HSLAToHexA(hsla) {
        const sep = hsla.indexOf(",") > -1 ? "," : " ";
        hsla = hsla.substr(5).split(")")[0].split(sep);
        // Strip the slash
        if (hsla.indexOf("/") > -1)
            hsla.splice(3, 1);
        let h = hsla[0], s = hsla[1].substr(0, hsla[1].length - 1) / 100, l = hsla[2].substr(0, hsla[2].length - 1) / 100, a = hsla[3];
        return hsla;
    }
    static bgGradient2(deg, color, amount) {
        return `transparent linear-gradient(${deg}deg, ${color} 0%, ${this.colorShade(color, amount)} 100%) 0% 0% no-repeat padding-box`;
    }
    static bgGradient3(deg, color, amount) {
        return `transparent linear-gradient(${deg}deg, ${color} -40%, ${this.colorShade(color, amount + 50)} 50%, ${this.colorShade(color, amount)} 100%) 0% 0% no-repeat padding-box`;
    }
    static colorShade(color, amount) {
        if (color && amount) {
            return '#' + color.replace(/^#/, '').replace(/../g, color => ('0' + Math.min(255, Math.max(0, parseInt(color, 16) + amount)).toString(16)).substr(-2));
        }
        else {
            return '';
        }
    }
    static isNumber(value) {
        return value != undefined && !isNaN(parseFloat(value)) && !isNaN(Number(value));
    }
    static clamp(value, min, max) {
        return Math.max(min, Math.min(max, value));
    }
}


/***/ }),

/***/ "../widgets/src/lib/shared/directives/numbers-only.directive.ts":
/*!**********************************************************************!*\
  !*** ../widgets/src/lib/shared/directives/numbers-only.directive.ts ***!
  \**********************************************************************/
/*! exports provided: NumbersOnlyDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumbersOnlyDirective", function() { return NumbersOnlyDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class NumbersOnlyDirective {
    constructor(el) {
        this.el = el;
    }
    onInputChange(event) {
        const initalValue = this.el.nativeElement.value;
        this.el.nativeElement.value = initalValue.replace(/[^0-9]*/g, '');
        if (initalValue !== this.el.nativeElement.value) {
            event.stopPropagation();
        }
    }
}
NumbersOnlyDirective.ɵfac = function NumbersOnlyDirective_Factory(t) { return new (t || NumbersOnlyDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
NumbersOnlyDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: NumbersOnlyDirective, selectors: [["input", "numbersOnly", ""]], hostBindings: function NumbersOnlyDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function NumbersOnlyDirective_input_HostBindingHandler($event) { return ctx.onInputChange($event); });
    } } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NumbersOnlyDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: 'input[numbersOnly]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { onInputChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['input', ['$event']]
        }] }); })();


/***/ }),

/***/ "../widgets/src/lib/shared/shared.module.ts":
/*!**************************************************!*\
  !*** ../widgets/src/lib/shared/shared.module.ts ***!
  \**************************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _directives_numbers_only_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./directives/numbers-only.directive */ "../widgets/src/lib/shared/directives/numbers-only.directive.ts");




class SharedModule {
}
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_directives_numbers_only_directive__WEBPACK_IMPORTED_MODULE_2__["NumbersOnlyDirective"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_directives_numbers_only_directive__WEBPACK_IMPORTED_MODULE_2__["NumbersOnlyDirective"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _directives_numbers_only_directive__WEBPACK_IMPORTED_MODULE_2__["NumbersOnlyDirective"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ],
                exports: [
                    _directives_numbers_only_directive__WEBPACK_IMPORTED_MODULE_2__["NumbersOnlyDirective"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "../widgets/src/lib/widgets.module.ts":
/*!********************************************!*\
  !*** ../widgets/src/lib/widgets.module.ts ***!
  \********************************************/
/*! exports provided: WidgetsModule, widgetMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetsModule", function() { return WidgetsModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "widgetMap", function() { return widgetMap; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "../../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/core */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _iplab_ngx_color_picker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @iplab/ngx-color-picker */ "../../node_modules/@iplab/ngx-color-picker/__ivy_ngcc__/fesm2015/iplab-ngx-color-picker.js");
/* harmony import */ var primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/overlaypanel */ "../../node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-overlaypanel.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @agm/core */ "../../node_modules/@agm/core/__ivy_ngcc__/fesm2015/agm-core.js");
/* harmony import */ var ngx_gauge__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-gauge */ "../../node_modules/ngx-gauge/__ivy_ngcc__/fesm2015/ngx-gauge.js");
/* harmony import */ var angular_resize_event__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! angular-resize-event */ "../../node_modules/angular-resize-event/__ivy_ngcc__/fesm2015/angular-resize-event.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/dropdown */ "../../node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-dropdown.js");
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/checkbox */ "../../node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-checkbox.js");
/* harmony import */ var angular_gridster2__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! angular-gridster2 */ "../../node_modules/angular-gridster2/__ivy_ngcc__/fesm2015/angular-gridster2.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-bootstrap/modal */ "../../node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm2015/ngx-bootstrap-modal.js");
/* harmony import */ var primeng_tristatecheckbox__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/tristatecheckbox */ "../../node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-tristatecheckbox.js");
/* harmony import */ var _components_label_widget_label_widget_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/label-widget/label-widget.component */ "../widgets/src/lib/components/label-widget/label-widget.component.ts");
/* harmony import */ var _components_button_widget_button_widget_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/button-widget/button-widget.component */ "../widgets/src/lib/components/button-widget/button-widget.component.ts");
/* harmony import */ var _components_textbox_widget_textbox_widget_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/textbox-widget/textbox-widget.component */ "../widgets/src/lib/components/textbox-widget/textbox-widget.component.ts");
/* harmony import */ var _components_link_widget_link_widget_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/link-widget/link-widget.component */ "../widgets/src/lib/components/link-widget/link-widget.component.ts");
/* harmony import */ var _components_area_container_widget_area_container_widget_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/area-container-widget/area-container-widget.component */ "../widgets/src/lib/components/area-container-widget/area-container-widget.component.ts");
/* harmony import */ var _components_img_widget_img_widget_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/img-widget/img-widget.component */ "../widgets/src/lib/components/img-widget/img-widget.component.ts");
/* harmony import */ var _components_map_widget_map_widget_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/map-widget/map-widget.component */ "../widgets/src/lib/components/map-widget/map-widget.component.ts");
/* harmony import */ var _components_simple1_widget_simple1_widget_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/simple1-widget/simple1-widget.component */ "../widgets/src/lib/components/simple1-widget/simple1-widget.component.ts");
/* harmony import */ var _components_simple2_widget_simple2_widget_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/simple2-widget/simple2-widget.component */ "../widgets/src/lib/components/simple2-widget/simple2-widget.component.ts");
/* harmony import */ var _components_chart_widget_chart_widget_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/chart-widget/chart-widget.component */ "../widgets/src/lib/components/chart-widget/chart-widget.component.ts");
/* harmony import */ var _components_gauge1_widget_gauge1_widget_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/gauge1-widget/gauge1-widget.component */ "../widgets/src/lib/components/gauge1-widget/gauge1-widget.component.ts");
/* harmony import */ var _components_gauge2_widget_gauge2_widget_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/gauge2-widget/gauge2-widget.component */ "../widgets/src/lib/components/gauge2-widget/gauge2-widget.component.ts");
/* harmony import */ var _components_gauge3_widget_gauge3_widget_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/gauge3-widget/gauge3-widget.component */ "../widgets/src/lib/components/gauge3-widget/gauge3-widget.component.ts");
/* harmony import */ var _components_img_input_widget_img_input_widget_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/img-input-widget/img-input-widget.component */ "../widgets/src/lib/components/img-input-widget/img-input-widget.component.ts");
/* harmony import */ var _components_user_info_user_info_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/user-info/user-info.component */ "../widgets/src/lib/components/user-info/user-info.component.ts");
/* harmony import */ var _components_user_info_admin_user_info_admin_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/user-info-admin/user-info-admin.component */ "../widgets/src/lib/components/user-info-admin/user-info-admin.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./shared/shared.module */ "../widgets/src/lib/shared/shared.module.ts");
/* harmony import */ var _components_shape_widget_shape_widget_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./components/shape-widget/shape-widget.component */ "../widgets/src/lib/components/shape-widget/shape-widget.component.ts");
/* harmony import */ var _components_all_thing_all_thing_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./components/all-thing/all-thing.component */ "../widgets/src/lib/components/all-thing/all-thing.component.ts");
/* harmony import */ var _components_thing_detail_thing_detail_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./components/thing-detail/thing-detail.component */ "../widgets/src/lib/components/thing-detail/thing-detail.component.ts");
/* harmony import */ var _components_user_management_user_management_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./components/user-management/user-management.component */ "../widgets/src/lib/components/user-management/user-management.component.ts");
/* harmony import */ var _components_textbox_otp_widget_textbox_otp_widget_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./components/textbox-otp-widget/textbox-otp-widget.component */ "../widgets/src/lib/components/textbox-otp-widget/textbox-otp-widget.component.ts");
/* harmony import */ var _components_thing_detail_date_option_date_option_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./components/thing-detail/date-option/date-option.component */ "../widgets/src/lib/components/thing-detail/date-option/date-option.component.ts");
/* harmony import */ var _components_link_icon_widget_link_icon_widget_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./components/link-icon-widget/link-icon-widget.component */ "../widgets/src/lib/components/link-icon-widget/link-icon-widget.component.ts");
/* harmony import */ var _components_widget_setting_widget_setting_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./components/widget-setting/widget-setting.component */ "../widgets/src/lib/components/widget-setting/widget-setting.component.ts");
/* harmony import */ var _components_widget_setting_modal_select_sensor_modal_select_sensor_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./components/widget-setting/modal-select-sensor/modal-select-sensor.component */ "../widgets/src/lib/components/widget-setting/modal-select-sensor/modal-select-sensor.component.ts");
/* harmony import */ var _components_dashboard_management_dashboard_management_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./components/dashboard-management/dashboard-management.component */ "../widgets/src/lib/components/dashboard-management/dashboard-management.component.ts");
/* harmony import */ var _components_role_management_role_management_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./components/role-management/role-management.component */ "../widgets/src/lib/components/role-management/role-management.component.ts");
/* harmony import */ var _components_create_member_create_member_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./components/create-member/create-member.component */ "../widgets/src/lib/components/create-member/create-member.component.ts");
// Angular









// Lib










// App


























































class WidgetsModule {
    static forRoot() {
        return {
            ngModule: WidgetsModule
        };
    }
}
WidgetsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: WidgetsModule });
WidgetsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function WidgetsModule_Factory(t) { return new (t || WidgetsModule)(); }, providers: [{ provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MAT_FORM_FIELD_DEFAULT_OPTIONS"], useValue: { appearance: 'fill' } }], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatNativeDateModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _iplab_ngx_color_picker__WEBPACK_IMPORTED_MODULE_9__["ColorPickerModule"],
            primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_10__["OverlayPanelModule"],
            _agm_core__WEBPACK_IMPORTED_MODULE_11__["AgmCoreModule"].forRoot({
                apiKey: 'AIzaSyAKVk6PXfcnrvxcZ7yc8e8I_I-xmaNA3U0',
                libraries: ['places', 'geometry']
            }),
            ngx_gauge__WEBPACK_IMPORTED_MODULE_12__["NgxGaugeModule"],
            angular_resize_event__WEBPACK_IMPORTED_MODULE_13__["AngularResizedEventModule"],
            primeng_dropdown__WEBPACK_IMPORTED_MODULE_14__["DropdownModule"],
            primeng_checkbox__WEBPACK_IMPORTED_MODULE_15__["CheckboxModule"],
            primeng_tristatecheckbox__WEBPACK_IMPORTED_MODULE_18__["TriStateCheckboxModule"],
            angular_gridster2__WEBPACK_IMPORTED_MODULE_16__["GridsterModule"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_17__["ModalModule"].forRoot(),
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_35__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](WidgetsModule, { declarations: [_components_label_widget_label_widget_component__WEBPACK_IMPORTED_MODULE_19__["LabelWidgetComponent"], _components_button_widget_button_widget_component__WEBPACK_IMPORTED_MODULE_20__["ButtonWidgetComponent"], _components_textbox_widget_textbox_widget_component__WEBPACK_IMPORTED_MODULE_21__["TextboxWidgetComponent"], _components_area_container_widget_area_container_widget_component__WEBPACK_IMPORTED_MODULE_23__["AreaContainerWidgetComponent"], _components_link_widget_link_widget_component__WEBPACK_IMPORTED_MODULE_22__["LinkWidgetComponent"], _components_img_widget_img_widget_component__WEBPACK_IMPORTED_MODULE_24__["ImgWidgetComponent"], _components_map_widget_map_widget_component__WEBPACK_IMPORTED_MODULE_25__["MapWidgetComponent"], _components_simple1_widget_simple1_widget_component__WEBPACK_IMPORTED_MODULE_26__["Simple1WidgetComponent"], _components_simple2_widget_simple2_widget_component__WEBPACK_IMPORTED_MODULE_27__["Simple2WidgetComponent"], _components_chart_widget_chart_widget_component__WEBPACK_IMPORTED_MODULE_28__["ChartWidgetComponent"], _components_gauge1_widget_gauge1_widget_component__WEBPACK_IMPORTED_MODULE_29__["Gauge1WidgetComponent"], _components_gauge2_widget_gauge2_widget_component__WEBPACK_IMPORTED_MODULE_30__["Gauge2WidgetComponent"], _components_gauge3_widget_gauge3_widget_component__WEBPACK_IMPORTED_MODULE_31__["Gauge3WidgetComponent"], _components_shape_widget_shape_widget_component__WEBPACK_IMPORTED_MODULE_36__["ShapeWidgetComponent"], _components_img_input_widget_img_input_widget_component__WEBPACK_IMPORTED_MODULE_32__["ImgInputWidgetComponent"], _components_all_thing_all_thing_component__WEBPACK_IMPORTED_MODULE_37__["AllThingComponent"], _components_thing_detail_thing_detail_component__WEBPACK_IMPORTED_MODULE_38__["ThingDetailComponent"], _components_user_management_user_management_component__WEBPACK_IMPORTED_MODULE_39__["UserManagementComponent"], _components_user_info_user_info_component__WEBPACK_IMPORTED_MODULE_33__["UserInfoComponent"], _components_textbox_otp_widget_textbox_otp_widget_component__WEBPACK_IMPORTED_MODULE_40__["TextboxOtpWidgetComponent"], _components_link_icon_widget_link_icon_widget_component__WEBPACK_IMPORTED_MODULE_42__["LinkIconWidgetComponent"], _components_widget_setting_widget_setting_component__WEBPACK_IMPORTED_MODULE_43__["WidgetSettingComponent"], _components_dashboard_management_dashboard_management_component__WEBPACK_IMPORTED_MODULE_45__["DashboardManagementComponent"], _components_role_management_role_management_component__WEBPACK_IMPORTED_MODULE_46__["RoleManagementComponent"], _components_user_info_admin_user_info_admin_component__WEBPACK_IMPORTED_MODULE_34__["UserInfoAdminComponent"], _components_create_member_create_member_component__WEBPACK_IMPORTED_MODULE_47__["CreateMemberComponent"], _components_thing_detail_date_option_date_option_component__WEBPACK_IMPORTED_MODULE_41__["DateOptionComponent"],
        _components_widget_setting_modal_select_sensor_modal_select_sensor_component__WEBPACK_IMPORTED_MODULE_44__["ModalSelectSensorComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatNativeDateModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
        _iplab_ngx_color_picker__WEBPACK_IMPORTED_MODULE_9__["ColorPickerModule"],
        primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_10__["OverlayPanelModule"], _agm_core__WEBPACK_IMPORTED_MODULE_11__["AgmCoreModule"], ngx_gauge__WEBPACK_IMPORTED_MODULE_12__["NgxGaugeModule"],
        angular_resize_event__WEBPACK_IMPORTED_MODULE_13__["AngularResizedEventModule"],
        primeng_dropdown__WEBPACK_IMPORTED_MODULE_14__["DropdownModule"],
        primeng_checkbox__WEBPACK_IMPORTED_MODULE_15__["CheckboxModule"],
        primeng_tristatecheckbox__WEBPACK_IMPORTED_MODULE_18__["TriStateCheckboxModule"],
        angular_gridster2__WEBPACK_IMPORTED_MODULE_16__["GridsterModule"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_17__["ModalModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_35__["SharedModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]], exports: [_components_label_widget_label_widget_component__WEBPACK_IMPORTED_MODULE_19__["LabelWidgetComponent"], _components_button_widget_button_widget_component__WEBPACK_IMPORTED_MODULE_20__["ButtonWidgetComponent"], _components_textbox_widget_textbox_widget_component__WEBPACK_IMPORTED_MODULE_21__["TextboxWidgetComponent"], _components_area_container_widget_area_container_widget_component__WEBPACK_IMPORTED_MODULE_23__["AreaContainerWidgetComponent"], _components_link_widget_link_widget_component__WEBPACK_IMPORTED_MODULE_22__["LinkWidgetComponent"], _components_img_widget_img_widget_component__WEBPACK_IMPORTED_MODULE_24__["ImgWidgetComponent"], _components_map_widget_map_widget_component__WEBPACK_IMPORTED_MODULE_25__["MapWidgetComponent"], _components_simple1_widget_simple1_widget_component__WEBPACK_IMPORTED_MODULE_26__["Simple1WidgetComponent"], _components_simple2_widget_simple2_widget_component__WEBPACK_IMPORTED_MODULE_27__["Simple2WidgetComponent"], _components_chart_widget_chart_widget_component__WEBPACK_IMPORTED_MODULE_28__["ChartWidgetComponent"], _components_gauge1_widget_gauge1_widget_component__WEBPACK_IMPORTED_MODULE_29__["Gauge1WidgetComponent"], _components_gauge2_widget_gauge2_widget_component__WEBPACK_IMPORTED_MODULE_30__["Gauge2WidgetComponent"], _components_gauge3_widget_gauge3_widget_component__WEBPACK_IMPORTED_MODULE_31__["Gauge3WidgetComponent"], _components_shape_widget_shape_widget_component__WEBPACK_IMPORTED_MODULE_36__["ShapeWidgetComponent"], _components_img_input_widget_img_input_widget_component__WEBPACK_IMPORTED_MODULE_32__["ImgInputWidgetComponent"], _components_all_thing_all_thing_component__WEBPACK_IMPORTED_MODULE_37__["AllThingComponent"], _components_thing_detail_thing_detail_component__WEBPACK_IMPORTED_MODULE_38__["ThingDetailComponent"], _components_user_management_user_management_component__WEBPACK_IMPORTED_MODULE_39__["UserManagementComponent"], _components_user_info_user_info_component__WEBPACK_IMPORTED_MODULE_33__["UserInfoComponent"], _components_textbox_otp_widget_textbox_otp_widget_component__WEBPACK_IMPORTED_MODULE_40__["TextboxOtpWidgetComponent"], _components_link_icon_widget_link_icon_widget_component__WEBPACK_IMPORTED_MODULE_42__["LinkIconWidgetComponent"], _components_widget_setting_widget_setting_component__WEBPACK_IMPORTED_MODULE_43__["WidgetSettingComponent"], _components_dashboard_management_dashboard_management_component__WEBPACK_IMPORTED_MODULE_45__["DashboardManagementComponent"], _components_role_management_role_management_component__WEBPACK_IMPORTED_MODULE_46__["RoleManagementComponent"], _components_user_info_admin_user_info_admin_component__WEBPACK_IMPORTED_MODULE_34__["UserInfoAdminComponent"], _components_create_member_create_member_component__WEBPACK_IMPORTED_MODULE_47__["CreateMemberComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WidgetsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _components_label_widget_label_widget_component__WEBPACK_IMPORTED_MODULE_19__["LabelWidget"].component,
                    _components_button_widget_button_widget_component__WEBPACK_IMPORTED_MODULE_20__["ButtonWidget"].component,
                    _components_textbox_widget_textbox_widget_component__WEBPACK_IMPORTED_MODULE_21__["TextboxWidget"].component,
                    _components_area_container_widget_area_container_widget_component__WEBPACK_IMPORTED_MODULE_23__["AreaContainerWidget"].component,
                    _components_link_widget_link_widget_component__WEBPACK_IMPORTED_MODULE_22__["LinkWidget"].component,
                    _components_img_widget_img_widget_component__WEBPACK_IMPORTED_MODULE_24__["ImgWidget"].component,
                    _components_map_widget_map_widget_component__WEBPACK_IMPORTED_MODULE_25__["MapWidget"].component,
                    _components_simple1_widget_simple1_widget_component__WEBPACK_IMPORTED_MODULE_26__["Simple1Widget"].component,
                    _components_simple2_widget_simple2_widget_component__WEBPACK_IMPORTED_MODULE_27__["Simple2Widget"].component,
                    _components_chart_widget_chart_widget_component__WEBPACK_IMPORTED_MODULE_28__["ChartWidget"].component,
                    _components_gauge1_widget_gauge1_widget_component__WEBPACK_IMPORTED_MODULE_29__["Gauge1Widget"].component,
                    _components_gauge2_widget_gauge2_widget_component__WEBPACK_IMPORTED_MODULE_30__["Gauge2Widget"].component,
                    _components_gauge3_widget_gauge3_widget_component__WEBPACK_IMPORTED_MODULE_31__["Gauge3Widget"].component,
                    _components_shape_widget_shape_widget_component__WEBPACK_IMPORTED_MODULE_36__["ShapeWidget"].component,
                    _components_img_input_widget_img_input_widget_component__WEBPACK_IMPORTED_MODULE_32__["ImgInputWidget"].component,
                    _components_all_thing_all_thing_component__WEBPACK_IMPORTED_MODULE_37__["AllThingWidget"].component,
                    _components_thing_detail_thing_detail_component__WEBPACK_IMPORTED_MODULE_38__["ThingDetailWidget"].component,
                    _components_user_management_user_management_component__WEBPACK_IMPORTED_MODULE_39__["UserManagementWidget"].component,
                    _components_user_info_user_info_component__WEBPACK_IMPORTED_MODULE_33__["UserInfoWidget"].component,
                    _components_textbox_otp_widget_textbox_otp_widget_component__WEBPACK_IMPORTED_MODULE_40__["TextboxOtpWidget"].component,
                    _components_link_icon_widget_link_icon_widget_component__WEBPACK_IMPORTED_MODULE_42__["LinkIconWidget"].component,
                    _components_widget_setting_widget_setting_component__WEBPACK_IMPORTED_MODULE_43__["WidgetSettingWidget"].component,
                    _components_dashboard_management_dashboard_management_component__WEBPACK_IMPORTED_MODULE_45__["DashboardManagementWidget"].component,
                    _components_role_management_role_management_component__WEBPACK_IMPORTED_MODULE_46__["RoleManagementWidget"].component,
                    _components_user_info_admin_user_info_admin_component__WEBPACK_IMPORTED_MODULE_34__["UserInfoAdminWidget"].component,
                    _components_create_member_create_member_component__WEBPACK_IMPORTED_MODULE_47__["CreateMemberWidget"].component,
                    _components_thing_detail_date_option_date_option_component__WEBPACK_IMPORTED_MODULE_41__["DateOptionComponent"],
                    _components_widget_setting_modal_select_sensor_modal_select_sensor_component__WEBPACK_IMPORTED_MODULE_44__["ModalSelectSensorComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatNativeDateModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                    _iplab_ngx_color_picker__WEBPACK_IMPORTED_MODULE_9__["ColorPickerModule"],
                    primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_10__["OverlayPanelModule"],
                    _agm_core__WEBPACK_IMPORTED_MODULE_11__["AgmCoreModule"].forRoot({
                        apiKey: 'AIzaSyAKVk6PXfcnrvxcZ7yc8e8I_I-xmaNA3U0',
                        libraries: ['places', 'geometry']
                    }),
                    ngx_gauge__WEBPACK_IMPORTED_MODULE_12__["NgxGaugeModule"],
                    angular_resize_event__WEBPACK_IMPORTED_MODULE_13__["AngularResizedEventModule"],
                    primeng_dropdown__WEBPACK_IMPORTED_MODULE_14__["DropdownModule"],
                    primeng_checkbox__WEBPACK_IMPORTED_MODULE_15__["CheckboxModule"],
                    primeng_tristatecheckbox__WEBPACK_IMPORTED_MODULE_18__["TriStateCheckboxModule"],
                    angular_gridster2__WEBPACK_IMPORTED_MODULE_16__["GridsterModule"],
                    ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_17__["ModalModule"].forRoot(),
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_35__["SharedModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]
                ],
                exports: [
                    _components_label_widget_label_widget_component__WEBPACK_IMPORTED_MODULE_19__["LabelWidget"].component,
                    _components_button_widget_button_widget_component__WEBPACK_IMPORTED_MODULE_20__["ButtonWidget"].component,
                    _components_textbox_widget_textbox_widget_component__WEBPACK_IMPORTED_MODULE_21__["TextboxWidget"].component,
                    _components_area_container_widget_area_container_widget_component__WEBPACK_IMPORTED_MODULE_23__["AreaContainerWidget"].component,
                    _components_link_widget_link_widget_component__WEBPACK_IMPORTED_MODULE_22__["LinkWidget"].component,
                    _components_img_widget_img_widget_component__WEBPACK_IMPORTED_MODULE_24__["ImgWidget"].component,
                    _components_map_widget_map_widget_component__WEBPACK_IMPORTED_MODULE_25__["MapWidget"].component,
                    _components_simple1_widget_simple1_widget_component__WEBPACK_IMPORTED_MODULE_26__["Simple1Widget"].component,
                    _components_simple2_widget_simple2_widget_component__WEBPACK_IMPORTED_MODULE_27__["Simple2Widget"].component,
                    _components_chart_widget_chart_widget_component__WEBPACK_IMPORTED_MODULE_28__["ChartWidget"].component,
                    _components_gauge1_widget_gauge1_widget_component__WEBPACK_IMPORTED_MODULE_29__["Gauge1Widget"].component,
                    _components_gauge2_widget_gauge2_widget_component__WEBPACK_IMPORTED_MODULE_30__["Gauge2Widget"].component,
                    _components_gauge3_widget_gauge3_widget_component__WEBPACK_IMPORTED_MODULE_31__["Gauge3Widget"].component,
                    _components_shape_widget_shape_widget_component__WEBPACK_IMPORTED_MODULE_36__["ShapeWidget"].component,
                    _components_img_input_widget_img_input_widget_component__WEBPACK_IMPORTED_MODULE_32__["ImgInputWidget"].component,
                    _components_all_thing_all_thing_component__WEBPACK_IMPORTED_MODULE_37__["AllThingWidget"].component,
                    _components_thing_detail_thing_detail_component__WEBPACK_IMPORTED_MODULE_38__["ThingDetailWidget"].component,
                    _components_user_management_user_management_component__WEBPACK_IMPORTED_MODULE_39__["UserManagementWidget"].component,
                    _components_user_info_user_info_component__WEBPACK_IMPORTED_MODULE_33__["UserInfoWidget"].component,
                    _components_textbox_otp_widget_textbox_otp_widget_component__WEBPACK_IMPORTED_MODULE_40__["TextboxOtpWidget"].component,
                    _components_link_icon_widget_link_icon_widget_component__WEBPACK_IMPORTED_MODULE_42__["LinkIconWidget"].component,
                    _components_widget_setting_widget_setting_component__WEBPACK_IMPORTED_MODULE_43__["WidgetSettingWidget"].component,
                    _components_dashboard_management_dashboard_management_component__WEBPACK_IMPORTED_MODULE_45__["DashboardManagementWidget"].component,
                    _components_role_management_role_management_component__WEBPACK_IMPORTED_MODULE_46__["RoleManagementWidget"].component,
                    _components_user_info_admin_user_info_admin_component__WEBPACK_IMPORTED_MODULE_34__["UserInfoAdminWidget"].component,
                    _components_create_member_create_member_component__WEBPACK_IMPORTED_MODULE_47__["CreateMemberWidget"].component,
                ],
                providers: [{ provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MAT_FORM_FIELD_DEFAULT_OPTIONS"], useValue: { appearance: 'fill' } }]
            }]
    }], null, null); })();
const widgetMap = {
    AreaContainerWidget: _components_area_container_widget_area_container_widget_component__WEBPACK_IMPORTED_MODULE_23__["AreaContainerWidget"],
    Simple1Widget: _components_simple1_widget_simple1_widget_component__WEBPACK_IMPORTED_MODULE_26__["Simple1Widget"],
    Simple2Widget: _components_simple2_widget_simple2_widget_component__WEBPACK_IMPORTED_MODULE_27__["Simple2Widget"],
    Gauge1Widget: _components_gauge1_widget_gauge1_widget_component__WEBPACK_IMPORTED_MODULE_29__["Gauge1Widget"],
    Gauge2Widget: _components_gauge2_widget_gauge2_widget_component__WEBPACK_IMPORTED_MODULE_30__["Gauge2Widget"],
    Gauge3Widget: _components_gauge3_widget_gauge3_widget_component__WEBPACK_IMPORTED_MODULE_31__["Gauge3Widget"],
    ChartWidget: _components_chart_widget_chart_widget_component__WEBPACK_IMPORTED_MODULE_28__["ChartWidget"],
    MapWidget: _components_map_widget_map_widget_component__WEBPACK_IMPORTED_MODULE_25__["MapWidget"],
    TextboxWidget: _components_textbox_widget_textbox_widget_component__WEBPACK_IMPORTED_MODULE_21__["TextboxWidget"],
    LabelWidget: _components_label_widget_label_widget_component__WEBPACK_IMPORTED_MODULE_19__["LabelWidget"],
    ButtonWidget: _components_button_widget_button_widget_component__WEBPACK_IMPORTED_MODULE_20__["ButtonWidget"],
    LinkWidget: _components_link_widget_link_widget_component__WEBPACK_IMPORTED_MODULE_22__["LinkWidget"],
    ImgWidget: _components_img_widget_img_widget_component__WEBPACK_IMPORTED_MODULE_24__["ImgWidget"],
    ShapeWidget: _components_shape_widget_shape_widget_component__WEBPACK_IMPORTED_MODULE_36__["ShapeWidget"],
    ImgInputWidget: _components_img_input_widget_img_input_widget_component__WEBPACK_IMPORTED_MODULE_32__["ImgInputWidget"],
    AllThingWidget: _components_all_thing_all_thing_component__WEBPACK_IMPORTED_MODULE_37__["AllThingWidget"],
    ThingDetailWidget: _components_thing_detail_thing_detail_component__WEBPACK_IMPORTED_MODULE_38__["ThingDetailWidget"],
    UserManagementWidget: _components_user_management_user_management_component__WEBPACK_IMPORTED_MODULE_39__["UserManagementWidget"],
    UserInfoWidget: _components_user_info_user_info_component__WEBPACK_IMPORTED_MODULE_33__["UserInfoWidget"],
    TextboxOtpWidget: _components_textbox_otp_widget_textbox_otp_widget_component__WEBPACK_IMPORTED_MODULE_40__["TextboxOtpWidget"],
    LinkIconWidget: _components_link_icon_widget_link_icon_widget_component__WEBPACK_IMPORTED_MODULE_42__["LinkIconWidget"],
    WidgetSettingWidget: _components_widget_setting_widget_setting_component__WEBPACK_IMPORTED_MODULE_43__["WidgetSettingWidget"],
    DashboardManagementWidget: _components_dashboard_management_dashboard_management_component__WEBPACK_IMPORTED_MODULE_45__["DashboardManagementWidget"],
    RoleManagementWidget: _components_role_management_role_management_component__WEBPACK_IMPORTED_MODULE_46__["RoleManagementWidget"],
    UserInfoAdminWidget: _components_user_info_admin_user_info_admin_component__WEBPACK_IMPORTED_MODULE_34__["UserInfoAdminWidget"],
    CreateMemberWidget: _components_create_member_create_member_component__WEBPACK_IMPORTED_MODULE_47__["CreateMemberWidget"]
};


/***/ }),

/***/ "../widgets/src/public-api.ts":
/*!************************************!*\
  !*** ../widgets/src/public-api.ts ***!
  \************************************/
/*! exports provided: WidgetsService, WidgetsModule, widgetMap, WidgetEventType, WidgetType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_services_widgets_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/services/widgets.service */ "../widgets/src/lib/services/widgets.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WidgetsService", function() { return _lib_services_widgets_service__WEBPACK_IMPORTED_MODULE_0__["WidgetsService"]; });

/* harmony import */ var _lib_widgets_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/widgets.module */ "../widgets/src/lib/widgets.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WidgetsModule", function() { return _lib_widgets_module__WEBPACK_IMPORTED_MODULE_1__["WidgetsModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "widgetMap", function() { return _lib_widgets_module__WEBPACK_IMPORTED_MODULE_1__["widgetMap"]; });

/* harmony import */ var _lib_models_widget_event_type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/models/widget-event-type */ "../widgets/src/lib/models/widget-event-type.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WidgetEventType", function() { return _lib_models_widget_event_type__WEBPACK_IMPORTED_MODULE_2__["WidgetEventType"]; });

/* harmony import */ var _lib_models_widget_type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/models/widget-type */ "../widgets/src/lib/models/widget-type.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WidgetType", function() { return _lib_models_widget_type__WEBPACK_IMPORTED_MODULE_3__["WidgetType"]; });

/*
 * Public API Surface of widgets
 */






/***/ }),

/***/ "./$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-config.module.ts":
/*!**************************************!*\
  !*** ./src/app/app-config.module.ts ***!
  \**************************************/
/*! exports provided: APP_CONFIG, AppConfig, APP_DI_CONFIG, AppConfigModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_CONFIG", function() { return APP_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppConfig", function() { return AppConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_DI_CONFIG", function() { return APP_DI_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppConfigModule", function() { return AppConfigModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");



let APP_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('app.config');
class AppConfig {
}
const APP_DI_CONFIG = {
    apiEndpoint: _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiEndpoint,
    vmsSiteUserName: _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].vmsSiteUserName,
};
class AppConfigModule {
}
AppConfigModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppConfigModule });
AppConfigModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppConfigModule_Factory(t) { return new (t || AppConfigModule)(); }, providers: [{
            provide: APP_CONFIG,
            useValue: APP_DI_CONFIG
        }] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppConfigModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                providers: [{
                        provide: APP_CONFIG,
                        useValue: APP_DI_CONFIG
                    }]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_private_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/private-guard */ "./src/app/services/private-guard.ts");
/* harmony import */ var _services_public_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/public-guard */ "./src/app/services/public-guard.ts");
/* harmony import */ var _components_private_pages_private_pages_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/private-pages/private-pages.component */ "./src/app/components/private-pages/private-pages.component.ts");
/* harmony import */ var _components_public_pages_public_pages_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/public-pages/public-pages.component */ "./src/app/components/public-pages/public-pages.component.ts");








const routes = [
    {
        path: 'private',
        component: _components_private_pages_private_pages_component__WEBPACK_IMPORTED_MODULE_4__["PrivatePagesComponent"],
        canActivate: [_services_private_guard__WEBPACK_IMPORTED_MODULE_2__["PrivateGuard"]],
    },
    {
        path: 'public',
        component: _components_public_pages_public_pages_component__WEBPACK_IMPORTED_MODULE_5__["PublicPagesComponent"],
        canActivate: [_services_public_guard__WEBPACK_IMPORTED_MODULE_3__["PublicGuard"]],
    },
    { path: '**', redirectTo: '' },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "../../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var angular_gridster2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-gridster2 */ "../../node_modules/angular-gridster2/__ivy_ngcc__/fesm2015/angular-gridster2.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/core */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _app_config_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app-config.module */ "./src/app/app-config.module.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _components_root_app_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/_root/app.component */ "./src/app/components/_root/app.component.ts");
/* harmony import */ var projects_widgets_src_public_api__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! projects/widgets/src/public-api */ "../widgets/src/public-api.ts");
/* harmony import */ var projects_widgets_src_lib_material_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! projects/widgets/src/lib/material.module */ "../widgets/src/lib/material.module.ts");
/* harmony import */ var _components_private_pages_private_pages_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/private-pages/private-pages.component */ "./src/app/components/private-pages/private-pages.component.ts");
/* harmony import */ var _components_public_pages_public_pages_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/public-pages/public-pages.component */ "./src/app/components/public-pages/public-pages.component.ts");
/* harmony import */ var _components_widget_container_widget_container_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/widget-container/widget-container.component */ "./src/app/components/widget-container/widget-container.component.ts");
/* harmony import */ var _services_private_guard__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/private-guard */ "./src/app/services/private-guard.ts");
/* harmony import */ var _services_public_guard__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./services/public-guard */ "./src/app/services/public-guard.ts");
// Angular






// Lib



// Project












class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_components_root_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        _services_public_guard__WEBPACK_IMPORTED_MODULE_19__["PublicGuard"],
        _services_private_guard__WEBPACK_IMPORTED_MODULE_18__["PrivateGuard"],
        { provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MAT_FORM_FIELD_DEFAULT_OPTIONS"], useValue: { appearance: 'fill' } }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            projects_widgets_src_lib_material_module__WEBPACK_IMPORTED_MODULE_14__["DemoMaterialModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatNativeDateModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            angular_gridster2__WEBPACK_IMPORTED_MODULE_6__["GridsterModule"],
            projects_widgets_src_public_api__WEBPACK_IMPORTED_MODULE_13__["WidgetsModule"],
            _app_config_module__WEBPACK_IMPORTED_MODULE_10__["AppConfigModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_components_root_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"],
        _components_public_pages_public_pages_component__WEBPACK_IMPORTED_MODULE_16__["PublicPagesComponent"],
        _components_private_pages_private_pages_component__WEBPACK_IMPORTED_MODULE_15__["PrivatePagesComponent"],
        _components_widget_container_widget_container_component__WEBPACK_IMPORTED_MODULE_17__["WidgetContainerComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        projects_widgets_src_lib_material_module__WEBPACK_IMPORTED_MODULE_14__["DemoMaterialModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatNativeDateModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
        angular_gridster2__WEBPACK_IMPORTED_MODULE_6__["GridsterModule"],
        projects_widgets_src_public_api__WEBPACK_IMPORTED_MODULE_13__["WidgetsModule"],
        _app_config_module__WEBPACK_IMPORTED_MODULE_10__["AppConfigModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _components_root_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"],
                    _components_public_pages_public_pages_component__WEBPACK_IMPORTED_MODULE_16__["PublicPagesComponent"],
                    _components_private_pages_private_pages_component__WEBPACK_IMPORTED_MODULE_15__["PrivatePagesComponent"],
                    _components_widget_container_widget_container_component__WEBPACK_IMPORTED_MODULE_17__["WidgetContainerComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                    projects_widgets_src_lib_material_module__WEBPACK_IMPORTED_MODULE_14__["DemoMaterialModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatNativeDateModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                    angular_gridster2__WEBPACK_IMPORTED_MODULE_6__["GridsterModule"],
                    projects_widgets_src_public_api__WEBPACK_IMPORTED_MODULE_13__["WidgetsModule"],
                    _app_config_module__WEBPACK_IMPORTED_MODULE_10__["AppConfigModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"]
                ],
                providers: [
                    _services_public_guard__WEBPACK_IMPORTED_MODULE_19__["PublicGuard"],
                    _services_private_guard__WEBPACK_IMPORTED_MODULE_18__["PrivateGuard"],
                    { provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MAT_FORM_FIELD_DEFAULT_OPTIONS"], useValue: { appearance: 'fill' } }
                ],
                bootstrap: [_components_root_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/_root/app.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/_root/app.component.ts ***!
  \***************************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
    constructor() { }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy92bXMtc2l0ZS9zcmMvYXBwL2NvbXBvbmVudHMvX3Jvb3QvYXBwLmNvbXBvbmVudC5zY3NzIn0= */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/private-pages/private-pages.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/private-pages/private-pages.component.ts ***!
  \*********************************************************************/
/*! exports provided: PrivatePagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivatePagesComponent", function() { return PrivatePagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_pageData_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/pageData.service */ "./src/app/services/pageData.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_components_topbar_preview_topbar_preview_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/components/topbar-preview/topbar-preview.component */ "./src/app/shared/components/topbar-preview/topbar-preview.component.ts");
/* harmony import */ var angular_gridster2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-gridster2 */ "../../node_modules/angular-gridster2/__ivy_ngcc__/fesm2015/angular-gridster2.js");
/* harmony import */ var _widget_container_widget_container_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../widget-container/widget-container.component */ "./src/app/components/widget-container/widget-container.component.ts");








function PrivatePagesComponent_gridster_item_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "gridster-item", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-widget-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r28 = ctx.$implicit;
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", item_r28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", item_r28)("globalConfig", ctx_r27.globalConfig);
} }
const _c0 = function (a0) { return { background: a0 }; };
class PrivatePagesComponent {
    constructor(router, pageData, activatedRoute) {
        this.router = router;
        this.pageData = pageData;
        this.activatedRoute = activatedRoute;
        this.globalConfig = {};
        this.pageType = '';
        this.breadcumbs = [];
        this.widgets = [];
        this.options = {
            //displayGrid: DisplayGrid.Always,
            gridType: 'scrollVertical',
            minCols: 28,
            minRows: 18,
            maxCols: 28,
            maxRows: 18,
            outerMargin: false,
            margin: 20,
            draggable: {
                enabled: false
            },
            resizable: {
                enabled: false
            },
            allowMultiLayer: true
        };
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.activatedRoute.queryParams.subscribe(params => {
            this.screenPrevious = params['previous'];
        });
        this.pageData.pageBreadcumbs.subscribe((value) => {
            this.breadcumbs = value;
            if (this.screenPrevious && this.breadcumbs) {
                this.breadcumbs[0].url = `/private?page=${this.screenPrevious}`;
            }
        });
        this.pageData.widgets.subscribe((value) => {
            this.widgets = value;
            console.log(value);
        });
        this.pageData.pageConfig.subscribe((value) => {
            this.globalConfig = value;
        });
        this.pageData.pageType.subscribe((value) => {
            this.pageType = value;
            if (value == 'dashboard') {
                this.options.minCols = 6;
                this.options.maxCols = 6;
                this.options.minRows = 5;
                this.options.maxRows = 100;
                this.options.gridType = 'scrollVertical';
            }
            else {
                this.options.minCols = 28;
                this.options.maxCols = 28;
                this.options.minRows = 18;
                this.options.maxRows = 18;
                this.options.gridType = 'fit';
            }
        });
    }
    ngOnInit() {
        this.activatedRoute.queryParams.subscribe(params => {
            this.pageData.getWidgets(params.page);
        });
    }
}
PrivatePagesComponent.ɵfac = function PrivatePagesComponent_Factory(t) { return new (t || PrivatePagesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_pageData_service__WEBPACK_IMPORTED_MODULE_2__["PageDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
PrivatePagesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PrivatePagesComponent, selectors: [["private-pages-component"]], decls: 5, vars: 9, consts: [[1, "grid-container", 3, "ngStyle"], [2, "z-index", "2", 3, "globalConfig", "pageType", "breadcumbs"], [1, "scroll-gray", 2, "z-index", "1", 3, "ngClass"], [2, "background", "transparent", "overflow", "visible", 3, "options"], [3, "item", 4, "ngFor", "ngForOf"], [3, "item"], [3, "item", "globalConfig"]], template: function PrivatePagesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-topbar-preview", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "gridster", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PrivatePagesComponent_gridster_item_4_Template, 2, 3, "gridster-item", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, ctx.globalConfig.themeBackground));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("globalConfig", ctx.globalConfig)("pageType", ctx.pageType)("breadcumbs", ctx.breadcumbs);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.pageType == "dashboard" ? "dashboard-grid-container" : "page-grid-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.options);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.widgets);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgStyle"], _shared_components_topbar_preview_topbar_preview_component__WEBPACK_IMPORTED_MODULE_4__["TopbarPreviewComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], angular_gridster2__WEBPACK_IMPORTED_MODULE_5__["GridsterComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], angular_gridster2__WEBPACK_IMPORTED_MODULE_5__["GridsterItemComponent"], _widget_container_widget_container_component__WEBPACK_IMPORTED_MODULE_6__["WidgetContainerComponent"]], styles: [".grid-container[_ngcontent-%COMP%] {\n  width: 100vw;\n  height: 100vh;\n}\n\n.grid-container[_ngcontent-%COMP%]     gridster-item {\n  background: none !important;\n  overflow: initial !important;\n}\n\n.grid-container[_ngcontent-%COMP%]     gridster-preview {\n  background: none !important;\n}\n\n.dashboard-grid-container[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: calc(100vh - 130px);\n  margin: auto;\n  margin-bottom: 20px;\n  padding: 20px 21%;\n  overflow-x: hidden;\n  overflow-y: scroll;\n}\n\n.page-grid-container[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: calc(100vh - 110px);\n  overflow-x: hidden;\n  overflow-y: scroll;\n}\n\n.scroll-gray[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #333333;\n  border: 1px solid #333333;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3Ztcy1zaXRlL3NyYy9hcHAvY29tcG9uZW50cy9wcml2YXRlLXBhZ2VzL0U6XFxQcm9qZWN0XFxhaXMtcG9jL3Byb2plY3RzXFx2bXMtc2l0ZVxcc3JjXFxhcHBcXGNvbXBvbmVudHNcXHByaXZhdGUtcGFnZXNcXHByaXZhdGUtcGFnZXMuY29tcG9uZW50LnNjc3MiLCJwcm9qZWN0cy92bXMtc2l0ZS9zcmMvYXBwL2NvbXBvbmVudHMvcHJpdmF0ZS1wYWdlcy9wcml2YXRlLXBhZ2VzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7QUNDRjs7QURHRTtFQUNFLDJCQUFBO0VBQ0EsNEJBQUE7QUNBSjs7QURHRTtFQUNFLDJCQUFBO0FDREo7O0FES0E7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSwyQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0ZGOztBREtBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDRkY7O0FES0E7RUFDRSxtQkFBQTtFQUNBLHlCQUFBO0FDRkYiLCJmaWxlIjoicHJvamVjdHMvdm1zLXNpdGUvc3JjL2FwcC9jb21wb25lbnRzL3ByaXZhdGUtcGFnZXMvcHJpdmF0ZS1wYWdlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ncmlkLWNvbnRhaW5lcntcclxuICB3aWR0aDogMTAwdnc7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxufVxyXG5cclxuLmdyaWQtY29udGFpbmVyIDo6bmctZGVlcCB7XHJcbiAgZ3JpZHN0ZXItaXRlbSB7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICBvdmVyZmxvdzogaW5pdGlhbCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgZ3JpZHN0ZXItcHJldmlldyB7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG4uZGFzaGJvYXJkLWdyaWQtY29udGFpbmVye1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDoxMDAlO1xyXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDEzMHB4KTtcclxuICBtYXJnaW46YXV0bztcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIHBhZGRpbmc6MjBweCAyMSU7XHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcclxufVxyXG5cclxuLnBhZ2UtZ3JpZC1jb250YWluZXJ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOjEwMCU7XHJcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTEwcHgpO1xyXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbn1cclxuXHJcbi5zY3JvbGwtZ3JheTo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWJ7XHJcbiAgYmFja2dyb3VuZDogIzMzMzMzMztcclxuICBib3JkZXI6IDFweCBzb2xpZCAjMzMzMzMzO1xyXG59XHJcblxyXG4iLCIuZ3JpZC1jb250YWluZXIge1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG59XG5cbi5ncmlkLWNvbnRhaW5lciA6Om5nLWRlZXAgZ3JpZHN0ZXItaXRlbSB7XG4gIGJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDtcbiAgb3ZlcmZsb3c6IGluaXRpYWwgIWltcG9ydGFudDtcbn1cbi5ncmlkLWNvbnRhaW5lciA6Om5nLWRlZXAgZ3JpZHN0ZXItcHJldmlldyB7XG4gIGJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLmRhc2hib2FyZC1ncmlkLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDEzMHB4KTtcbiAgbWFyZ2luOiBhdXRvO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBwYWRkaW5nOiAyMHB4IDIxJTtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG59XG5cbi5wYWdlLWdyaWQtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTEwcHgpO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cblxuLnNjcm9sbC1ncmF5Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJhY2tncm91bmQ6ICMzMzMzMzM7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMzMzMzMzM7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PrivatePagesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'private-pages-component',
                templateUrl: './private-pages.component.html',
                styleUrls: ['./private-pages.component.scss'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _services_pageData_service__WEBPACK_IMPORTED_MODULE_2__["PageDataService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/public-pages/public-pages.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/public-pages/public-pages.component.ts ***!
  \*******************************************************************/
/*! exports provided: PublicPagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicPagesComponent", function() { return PublicPagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_pageData_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/pageData.service */ "./src/app/services/pageData.service.ts");
/* harmony import */ var _public_pages_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./public-pages.service */ "./src/app/components/public-pages/public-pages.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var angular_gridster2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-gridster2 */ "../../node_modules/angular-gridster2/__ivy_ngcc__/fesm2015/angular-gridster2.js");
/* harmony import */ var _widget_container_widget_container_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../widget-container/widget-container.component */ "./src/app/components/widget-container/widget-container.component.ts");








const _c0 = ["grid"];
const _c1 = ["container"];
function PublicPagesComponent_gridster_item_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "gridster-item", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-widget-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r30 = ctx.$implicit;
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", item_r30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", item_r30)("globalConfig", ctx_r29.globalConfig);
} }
const _c2 = function (a0) { return { background: a0 }; };
class PublicPagesComponent {
    constructor(router, activatedRoute, pageData, publicPages) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.pageData = pageData;
        this.publicPages = publicPages;
        this.globalConfig = {};
        this.type = '';
        this.widgets = [];
        this.options = {
            //displayGrid: DisplayGrid.Always,
            gridType: 'scrollVertical',
            minCols: 28,
            minRows: 18,
            maxCols: 28,
            maxRows: 18,
            outerMargin: false,
            margin: 20,
            disableScrollHorizontal: true,
            disableScrollVertical: true,
            draggable: {
                enabled: false
            },
            resizable: {
                enabled: false
            },
            allowMultiLayer: true
        };
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.pageData.widgets.subscribe((value) => {
            this.widgets = value;
        });
        this.pageData.pageConfig.subscribe((value) => {
            this.globalConfig = value;
        });
    }
    ngOnInit() {
        this.activatedRoute.queryParams.subscribe(params => {
            this.pageData.getWidgets(params.page);
        });
        setTimeout(() => {
            try {
                document.getElementById('login-submit').addEventListener('click', () => {
                    this.publicPages.login();
                });
            }
            catch (err) { }
        }, 500);
    }
    trackBy(index, item) {
        return item.id + JSON.stringify(item.widget);
    }
}
PublicPagesComponent.ɵfac = function PublicPagesComponent_Factory(t) { return new (t || PublicPagesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_pageData_service__WEBPACK_IMPORTED_MODULE_2__["PageDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_public_pages_service__WEBPACK_IMPORTED_MODULE_3__["PublicPagesService"])); };
PublicPagesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PublicPagesComponent, selectors: [["public-pages-component"]], viewQuery: function PublicPagesComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c1, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.grid = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.container = _t.first);
    } }, decls: 3, vars: 6, consts: [[1, "grid-container", 3, "ngStyle"], [2, "background", "transparent", 3, "options"], [3, "item", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "item"], [3, "item", "globalConfig"]], template: function PublicPagesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "gridster", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PublicPagesComponent_gridster_item_2_Template, 2, 3, "gridster-item", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c2, ctx.globalConfig.themeAuthBackground));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.options);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.widgets)("ngForTrackBy", ctx.trackBy);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgStyle"], angular_gridster2__WEBPACK_IMPORTED_MODULE_5__["GridsterComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], angular_gridster2__WEBPACK_IMPORTED_MODULE_5__["GridsterItemComponent"], _widget_container_widget_container_component__WEBPACK_IMPORTED_MODULE_6__["WidgetContainerComponent"]], styles: [".grid-container[_ngcontent-%COMP%] {\n  width: 100vw;\n  height: 100vh;\n}\n\n.grid-container[_ngcontent-%COMP%]     gridster-item {\n  background: none !important;\n  overflow: initial !important;\n}\n\n.grid-container[_ngcontent-%COMP%]     gridster-preview {\n  background: none !important;\n}\n\n.gridster-column[_ngcontent-%COMP%] {\n  border-left: 1px solid rgba(255, 255, 255, 0.5) !important;\n  border-right: 1px solid rgba(255, 255, 255, 0.5) !important;\n}\n\n.gridster-row[_ngcontent-%COMP%] {\n  border-top: 1px solid rgba(255, 255, 255, 0.5) !important;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.5) !important;\n}\n\n.scroll-gray[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #333333;\n  border: 1px solid #333333;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3Ztcy1zaXRlL3NyYy9hcHAvY29tcG9uZW50cy9wdWJsaWMtcGFnZXMvRTpcXFByb2plY3RcXGFpcy1wb2MvcHJvamVjdHNcXHZtcy1zaXRlXFxzcmNcXGFwcFxcY29tcG9uZW50c1xccHVibGljLXBhZ2VzXFxwdWJsaWMtcGFnZXMuY29tcG9uZW50LnNjc3MiLCJwcm9qZWN0cy92bXMtc2l0ZS9zcmMvYXBwL2NvbXBvbmVudHMvcHVibGljLXBhZ2VzL3B1YmxpYy1wYWdlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0FDQ0Y7O0FER0U7RUFDRSwyQkFBQTtFQUNBLDRCQUFBO0FDQUo7O0FER0U7RUFDRSwyQkFBQTtBQ0RKOztBREtBO0VBQ0UsMERBQUE7RUFDQSwyREFBQTtBQ0ZGOztBREtBO0VBQ0UseURBQUE7RUFDQSw0REFBQTtBQ0ZGOztBRE1FO0VBQ0UsbUJBQUE7RUFDQSx5QkFBQTtBQ0hKIiwiZmlsZSI6InByb2plY3RzL3Ztcy1zaXRlL3NyYy9hcHAvY29tcG9uZW50cy9wdWJsaWMtcGFnZXMvcHVibGljLXBhZ2VzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdyaWQtY29udGFpbmVye1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG59XHJcblxyXG4uZ3JpZC1jb250YWluZXIgOjpuZy1kZWVwIHtcclxuICBncmlkc3Rlci1pdGVtIHtcclxuICAgIGJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIG92ZXJmbG93OiBpbml0aWFsICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICBncmlkc3Rlci1wcmV2aWV3IHtcclxuICAgIGJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbi5ncmlkc3Rlci1jb2x1bW4ge1xyXG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5ncmlkc3Rlci1yb3cge1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSkgIWltcG9ydGFudDtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zY3JvbGwtZ3JheSB7XHJcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgYmFja2dyb3VuZDogIzMzMzMzMztcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMzMzMzMzM7XHJcbiAgfVxyXG59XHJcbiIsIi5ncmlkLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuLmdyaWQtY29udGFpbmVyIDo6bmctZGVlcCBncmlkc3Rlci1pdGVtIHtcbiAgYmFja2dyb3VuZDogbm9uZSAhaW1wb3J0YW50O1xuICBvdmVyZmxvdzogaW5pdGlhbCAhaW1wb3J0YW50O1xufVxuLmdyaWQtY29udGFpbmVyIDo6bmctZGVlcCBncmlkc3Rlci1wcmV2aWV3IHtcbiAgYmFja2dyb3VuZDogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4uZ3JpZHN0ZXItY29sdW1uIHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSkgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpICFpbXBvcnRhbnQ7XG59XG5cbi5ncmlkc3Rlci1yb3cge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSkgIWltcG9ydGFudDtcbn1cblxuLnNjcm9sbC1ncmF5Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJhY2tncm91bmQ6ICMzMzMzMzM7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMzMzMzMzM7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PublicPagesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'public-pages-component',
                templateUrl: './public-pages.component.html',
                styleUrls: ['./public-pages.component.scss'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _services_pageData_service__WEBPACK_IMPORTED_MODULE_2__["PageDataService"] }, { type: _public_pages_service__WEBPACK_IMPORTED_MODULE_3__["PublicPagesService"] }]; }, { grid: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['grid', { static: false }]
        }], container: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['container', { static: true, read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }]
        }] }); })();


/***/ }),

/***/ "./src/app/components/public-pages/public-pages.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/public-pages/public-pages.service.ts ***!
  \*****************************************************************/
/*! exports provided: PublicPagesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicPagesService", function() { return PublicPagesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class PublicPagesService {
    constructor(router) {
        this.router = router;
    }
    login() {
        let email = document.getElementById('login-email')['value'];
        let password = document.getElementById('login-password')['value'];
        localStorage.setItem('token', 'example_token');
        this.router.navigateByUrl('/private?page=dashboard-1');
    }
}
PublicPagesService.ɵfac = function PublicPagesService_Factory(t) { return new (t || PublicPagesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
PublicPagesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PublicPagesService, factory: PublicPagesService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PublicPagesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/widget-container/widget-container.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/widget-container/widget-container.component.ts ***!
  \***************************************************************************/
/*! exports provided: WidgetContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetContainerComponent", function() { return WidgetContainerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "../../node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _widgets_src_public_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../widgets/src/public-api */ "../widgets/src/public-api.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_pageData_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/pageData.service */ "./src/app/services/pageData.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

// Lib






const _c0 = ["widgetHost"];
const _c1 = function (a0) { return { "animate__fadeIn": a0 }; };
const _c2 = function (a0) { return { "background": a0 }; };
class WidgetContainerComponent {
    constructor(router, pageData, activatedRoute, componentFactoryResolver) {
        this.router = router;
        this.pageData = pageData;
        this.activatedRoute = activatedRoute;
        this.componentFactoryResolver = componentFactoryResolver;
        this.globalConfig = {};
        this.type = 'input';
        this.activatedRoute.queryParams.subscribe(params => {
            this.screenParameter = params['page'] ? params['page'] : 'dashboard';
        });
        this.pageData.pageType.subscribe((value) => {
            this.screenType = value;
        });
    }
    ngOnInit() {
        this.loadComponentViewOnly(this.item.widget.type);
        this.type = _widgets_src_public_api__WEBPACK_IMPORTED_MODULE_2__["widgetMap"][this.item.widget.type].type;
    }
    loadComponentViewOnly(componentTypeToRender) {
        const c = this.componentFactoryResolver.resolveComponentFactory(_widgets_src_public_api__WEBPACK_IMPORTED_MODULE_2__["widgetMap"][componentTypeToRender].component);
        const component = this.widgetHost.createComponent(c);
        let item = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["cloneDeep"])(this.item);
        if (this.globalConfig[componentTypeToRender]) {
            component.instance.widget = Object.assign(Object.assign({}, item.widget), { config: Object(lodash__WEBPACK_IMPORTED_MODULE_1__["merge"])({}, this.globalConfig[componentTypeToRender], item.widget['config']) });
        }
        else {
            component.instance.widget = Object.assign({}, item.widget);
        }
        component.instance.gridInfo = item;
        component.instance.globalConfig = this.globalConfig;
    }
    notTransparentBgType() {
        return this.type == 'component';
    }
    onSelectWidget(id) {
        if (this.screenType === 'dashboard') {
            this.router.navigateByUrl(`/private?page=widget-setting&previous=${this.screenParameter}&id=${id}`);
        }
    }
    ngOnDestroy() {
    }
}
WidgetContainerComponent.ɵfac = function WidgetContainerComponent_Factory(t) { return new (t || WidgetContainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_pageData_service__WEBPACK_IMPORTED_MODULE_4__["PageDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"])); };
WidgetContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WidgetContainerComponent, selectors: [["app-widget-container"]], viewQuery: function WidgetContainerComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.widgetHost = _t.first);
    } }, inputs: { item: "item", globalConfig: "globalConfig" }, decls: 3, vars: 6, consts: [[1, "w-100", "h-100", "position-relative", "animate__animated", "animate__fast", 3, "ngClass", "ngStyle", "click"], ["widgetHost", ""]], template: function WidgetContainerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WidgetContainerComponent_Template_div_click_0_listener() { return ctx.onSelectWidget(ctx.item.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](1, null, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, ctx.screenType == "dashboard"))("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c2, ctx.notTransparentBgType() ? ctx.globalConfig.themeWidgetBackground : "transparent"));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgStyle"]], styles: ["[_nghost-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n[_nghost-%COMP%]   .overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3Ztcy1zaXRlL3NyYy9hcHAvY29tcG9uZW50cy93aWRnZXQtY29udGFpbmVyL0U6XFxQcm9qZWN0XFxhaXMtcG9jL3Byb2plY3RzXFx2bXMtc2l0ZVxcc3JjXFxhcHBcXGNvbXBvbmVudHNcXHdpZGdldC1jb250YWluZXJcXHdpZGdldC1jb250YWluZXIuY29tcG9uZW50LnNjc3MiLCJwcm9qZWN0cy92bXMtc2l0ZS9zcmMvYXBwL2NvbXBvbmVudHMvd2lkZ2V0LWNvbnRhaW5lci93aWRnZXQtY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNDRjtBRENFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0FDQ0oiLCJmaWxlIjoicHJvamVjdHMvdm1zLXNpdGUvc3JjL2FwcC9jb21wb25lbnRzL3dpZGdldC1jb250YWluZXIvd2lkZ2V0LWNvbnRhaW5lci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gIC5vdmVybGF5IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICB9XHJcblxyXG59XHJcbiIsIjpob3N0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbjpob3N0IC5vdmVybGF5IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WidgetContainerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-widget-container',
                templateUrl: './widget-container.component.html',
                styleUrls: ['./widget-container.component.scss'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _services_pageData_service__WEBPACK_IMPORTED_MODULE_4__["PageDataService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"] }]; }, { widgetHost: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['widgetHost', { static: true, read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }]
        }], item: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], globalConfig: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/services/example.js":
/*!*************************************!*\
  !*** ./src/app/services/example.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
    "login": {
        type: 'auth',
        name: 'Login',
        widgets: [
            {
                id: 1, cols: 9, rows: 18, y: 0, x: 0, layerIndex: 1, resizeEnabled: false, dragEnabled: false,
                widget: {
                    type: 'AreaContainerWidget',
                    name: 'AreaContainerWidget',
                    required: true,
                    config: {}
                }
            },
            {
                id: 9, cols: 2, rows: 3, y: 7, x: 4, layerIndex: 2, resizeEnabled: true,
                widget: {
                    type: 'ImgWidget',
                    name: 'ImgWidget',
                    required: true,
                    config: { src: 'assets/images/Graphic-Sample logo 1.png', disabled: false },
                }
            },
            {
                id: 2, cols: 6, rows: 1, y: 4, x: 14, layerIndex: 2,
                widget: {
                    type: 'LabelWidget',
                    name: 'LabelWidget',
                    config: {
                        value: 'Welcome',
                        styles: {
                            'font-family': 'SF Pro Text-Heavy', 'font-size': '40px', 'text-align': 'left', opacity: 100
                        }
                    },
                }
            },
            {
                id: 3, cols: 6, rows: 1, y: 5, x: 14, layerIndex: 2,
                widget: {
                    type: 'LabelWidget',
                    name: 'LabelWidget',
                    config: {
                        value: 'Please login to your account',
                        styles: {
                            'font-family': 'SF Pro Text-Regular', 'font-size': '24px', 'text-align': 'left', opacity: 100
                        }
                    }
                }
            },
            {
                id: 4, cols: 6, rows: 1, y: 6, x: 14, layerIndex: 2,
                widget: {
                    id: 'login-email',
                    type: 'TextboxWidget',
                    name: 'TextboxWidget',
                    config: { type: 'text', placeholder: 'E-mail', inputStyle: 'roundCorner' },
                }
            },
            {
                id: 5, cols: 6, rows: 1, y: 7, x: 14, layerIndex: 2,
                widget: {
                    id: 'login-password',
                    type: 'TextboxWidget',
                    name: 'TextboxWidget',
                    config: { type: 'password', placeholder: 'Password', inputStyle: 'roundCorner' },
                }
            },
            {
                id: 6, cols: 6, rows: 1, y: 9, x: 14, layerIndex: 2,
                widget: {
                    id: 'login-submit',
                    type: 'ButtonWidget',
                    name: 'ButtonWidget',
                    config: { type: 'button', value: 'Next', buttonStyle: 'roundCorner', bgStyle: 'solid' },
                }
            },
            {
                id: 7, cols: 6, rows: 1, y: 10, x: 14, layerIndex: 2,
                widget: {
                    type: 'LinkWidget',
                    name: 'LinkWidget',
                    config: {
                        value: 'Forgot password ?', url: 'public?page=forgot-1',
                        styles: {
                            'font-family': 'SF Pro Text-Medium', 'font-size': '20px', 'text-align': 'left', opacity: 100
                        }
                    }
                }
            },
            {
                id: 8, cols: 6, rows: 1, y: 12, x: 14, layerIndex: 2,
                widget: {
                    type: 'LabelWidget',
                    name: 'LabelWidget',
                    config: {
                        value: 'Need help? Contact 02 123-4567',
                        styles: {
                            'font-family': 'SF Pro Text-Medium', 'font-size': '20px', 'text-align': 'left', opacity: 100
                        }
                    }
                }
            },
            {
                id: 10, cols: 6, rows: 1, y: 11, x: 14, layerIndex: 2,
                widget: {
                    type: 'ShapeWidget',
                    name: 'ShapeWidget',
                    config: {},
                }
            }
        ]
    },
    "forgot-1": {
        type: 'auth',
        name: 'Forgot Password',
        widgets: [
            {
                id: 1, cols: 9, rows: 18, y: 0, x: 0, layerIndex: 1, resizeEnabled: false, dragEnabled: false,
                widget: {
                    type: 'AreaContainerWidget',
                    name: 'AreaContainerWidget',
                    required: true,
                    config: {}
                }
            },
            {
                id: 9, cols: 2, rows: 3, y: 7, x: 4, layerIndex: 2, resizeEnabled: false,
                widget: {
                    type: 'ImgWidget',
                    name: 'ImgWidget',
                    required: true,
                    config: { src: 'assets/images/Graphic-Sample logo 1.png', disabled: false },
                }
            },
            {
                id: 3, cols: 6, rows: 1, y: 4, x: 14, layerIndex: 2,
                widget: {
                    type: 'LinkIconWidget',
                    name: 'LinkIconWidget',
                    config: {
                        value: 'Log in', faLeft: 'feather-chevron-left', url: 'public?page=login',
                        styles: {
                            'font-family': 'SF Pro Text-Bold', 'font-size': '20px', color: '#FFFFFF', 'jusify-content': 'start'
                        }
                    }
                }
            },
            {
                id: 2, cols: 6, rows: 1, y: 5, x: 14, layerIndex: 2,
                widget: {
                    type: 'LabelWidget',
                    name: 'LabelWidget',
                    config: {
                        value: 'Reset Password',
                        styles: {
                            'font-family': 'SF Pro Text-Heavy', 'font-size': '40px', 'text-align': 'left', opacity: 100
                        }
                    },
                }
            },
            {
                id: 3, cols: 6, rows: 1, y: 6, x: 14, layerIndex: 2,
                widget: {
                    type: 'LabelWidget',
                    name: 'LabelWidget',
                    config: {
                        value: 'Please enter your email',
                        styles: {
                            'font-family': 'SF Pro Text-Regular', 'font-size': '18px', 'text-align': 'left', opacity: 100
                        }
                    }
                }
            },
            {
                id: 4, cols: 6, rows: 1, y: 7, x: 14, layerIndex: 2,
                widget: {
                    id: 'forgot_1_textbox_email',
                    type: 'TextboxWidget',
                    name: 'TextboxWidget',
                    config: { type: 'text', placeholder: 'E-mail', inputStyle: 'roundCorner' },
                }
            },
            {
                id: 6, cols: 6, rows: 1, y: 8, x: 14, layerIndex: 2,
                widget: {
                    id: 'forgot_1_button_next',
                    type: 'ButtonWidget',
                    name: 'ButtonWidget',
                    config: { type: 'button', value: 'Next', buttonStyle: 'roundCorner', bgStyle: 'solid' },
                }
            },
            {
                id: 10, cols: 6, rows: 1, y: 9, x: 14, layerIndex: 2,
                widget: {
                    type: 'ShapeWidget',
                    name: 'ShapeWidget',
                    config: {},
                }
            },
            {
                id: 8, cols: 6, rows: 1, y: 10, x: 14, layerIndex: 2,
                widget: {
                    type: 'LabelWidget',
                    name: 'LabelWidget',
                    config: {
                        value: 'Need Help? Contact 02 123 4567',
                        styles: {
                            'font-family': 'SF Pro Text-Medium', 'font-size': '20px', 'text-align': 'left', opacity: 100
                        }
                    }
                }
            }
        ]
    },
    "forgot-2": {
        type: 'auth',
        name: 'Forgot Password',
        widgets: [
            {
                id: 1, cols: 9, rows: 18, y: 0, x: 0, layerIndex: 1, resizeEnabled: false, dragEnabled: false,
                widget: {
                    type: 'AreaContainerWidget',
                    name: 'AreaContainerWidget',
                    required: true,
                    config: {}
                }
            },
            {
                id: 9, cols: 2, rows: 3, y: 7, x: 4, layerIndex: 2, resizeEnabled: false,
                widget: {
                    type: 'ImgWidget',
                    name: 'ImgWidget',
                    required: true,
                    config: { src: 'assets/images/Graphic-Sample logo 1.png', disabled: false },
                }
            },
            {
                id: 3, cols: 6, rows: 1, y: 4, x: 14, layerIndex: 2,
                widget: {
                    type: 'LinkIconWidget',
                    name: 'LinkIconWidget',
                    config: {
                        value: 'Back', faLeft: 'feather-chevron-left', url: 'public?page=forgot-1',
                        styles: {
                            'font-family': 'SF Pro Text-Bold', 'font-size': '20px', color: '#FFFFFF', 'jusify-content': 'start'
                        }
                    }
                }
            },
            {
                id: 2, cols: 6, rows: 1, y: 5, x: 14, layerIndex: 2,
                widget: {
                    type: 'LabelWidget',
                    name: 'LabelWidget',
                    config: {
                        value: 'Check your email',
                        styles: {
                            'font-family': 'SF Pro Text-Heavy', 'font-size': '40px', 'text-align': 'left', opacity: 100
                        }
                    },
                }
            },
            {
                id: 3, cols: 6, rows: 1, y: 6, x: 14, layerIndex: 2,
                widget: {
                    type: 'LabelWidget',
                    name: 'LabelWidget',
                    config: {
                        value: 'A 6-digit code was send to',
                        styles: {
                            'font-family': 'SF Pro Text-Regular', 'font-size': '18px', 'text-align': 'left', opacity: 100
                        }
                    }
                }
            },
            {
                id: 3, cols: 6, rows: 1, y: 7, x: 14, layerIndex: 2,
                widget: {
                    type: 'LabelWidget',
                    name: 'LabelWidget',
                    config: {
                        value: 'youremaitl@email.com',
                        styles: {
                            'font-family': 'SF Pro Text-Regular', 'font-size': '18px', 'text-align': 'left', opacity: 100, color: '#9FFFB1'
                        }
                    }
                }
            },
            {
                id: 6, cols: 6, rows: 1, y: 8, x: 14, layerIndex: 2,
                widget: {
                    id: 'forgot_2_textbox_otp',
                    type: 'TextboxOtpWidget',
                    name: 'TextboxOtpWidget',
                    config: {
                        styles: {
                            'font-family': 'SF Pro Text-Regular', 'font-size': '18px'
                        }
                    },
                }
            },
            {
                id: 6, cols: 6, rows: 1, y: 9, x: 14, layerIndex: 2,
                widget: {
                    id: 'forgot_2_button_next',
                    type: 'ButtonWidget',
                    name: 'ButtonWidget',
                    config: { type: 'button', value: 'Next', buttonStyle: 'roundCorner', bgStyle: 'solid' },
                }
            },
            {
                id: 7, cols: 6, rows: 1, y: 10, x: 14, layerIndex: 2,
                widget: {
                    type: 'LinkWidget',
                    name: 'LinkWidget',
                    config: {
                        value: 'Resend Password', url: 'https://www.google.com',
                        styles: {
                            'font-family': 'SF Pro Text-Medium', 'font-size': '20px', 'text-align': 'left', opacity: 100
                        }
                    }
                }
            },
            {
                id: 10, cols: 6, rows: 1, y: 11, x: 14, layerIndex: 2,
                widget: {
                    type: 'ShapeWidget',
                    name: 'ShapeWidget',
                    config: {},
                }
            },
            {
                id: 8, cols: 6, rows: 1, y: 12, x: 14, layerIndex: 2,
                widget: {
                    type: 'LabelWidget',
                    name: 'LabelWidget',
                    config: {
                        value: 'Need Help? Contact 02 123 4567',
                        styles: {
                            'font-family': 'SF Pro Text-Medium', 'font-size': '20px', 'text-align': 'left', opacity: 100
                        }
                    }
                }
            }
        ]
    },
    "forgot-3": {
        type: 'auth',
        name: 'Forgot Password',
        widgets: [
            {
                id: 1, cols: 9, rows: 18, y: 0, x: 0, layerIndex: 1, resizeEnabled: false, dragEnabled: false,
                widget: {
                    type: 'AreaContainerWidget',
                    name: 'AreaContainerWidget',
                    required: true,
                    config: {}
                }
            },
            {
                id: 9, cols: 2, rows: 3, y: 7, x: 4, layerIndex: 2, resizeEnabled: false,
                widget: {
                    type: 'ImgWidget',
                    name: 'ImgWidget',
                    required: true,
                    config: { src: 'assets/images/Graphic-Sample logo 1.png', disabled: false },
                }
            },
            {
                id: 3, cols: 6, rows: 1, y: 4, x: 14, layerIndex: 2,
                widget: {
                    type: 'LinkIconWidget',
                    name: 'LinkIconWidget',
                    config: {
                        value: 'Back', faLeft: 'feather-chevron-left', url: 'public?page=forgot-2',
                        styles: {
                            'font-family': 'SF Pro Text-Bold', 'font-size': '20px', color: '#FFFFFF', 'jusify-content': 'start'
                        }
                    }
                }
            },
            {
                id: 2, cols: 6, rows: 1, y: 5, x: 14, layerIndex: 2,
                widget: {
                    type: 'LabelWidget',
                    name: 'LabelWidget',
                    config: {
                        value: 'Reset Password',
                        styles: {
                            'font-family': 'SF Pro Text-Heavy', 'font-size': '40px', 'text-align': 'left', opacity: 100
                        }
                    },
                }
            },
            {
                id: 3, cols: 6, rows: 1, y: 6, x: 14, layerIndex: 2,
                widget: {
                    type: 'LabelWidget',
                    name: 'LabelWidget',
                    config: {
                        value: 'Enter a new password for',
                        styles: {
                            'font-family': 'SF Pro Text-Regular', 'font-size': '18px', 'text-align': 'left', opacity: 100
                        }
                    }
                }
            },
            {
                id: 3, cols: 6, rows: 1, y: 7, x: 14, layerIndex: 2,
                widget: {
                    type: 'LabelWidget',
                    name: 'LabelWidget',
                    config: {
                        value: 'youremaitl@email.com',
                        styles: {
                            'font-family': 'SF Pro Text-Regular', 'font-size': '18px', 'text-align': 'left', opacity: 100, color: '#9FFFB1'
                        }
                    }
                }
            },
            {
                id: 4, cols: 6, rows: 1, y: 8, x: 14, layerIndex: 2,
                widget: {
                    id: 'forgot_3_textbox_new_password',
                    type: 'TextboxWidget',
                    name: 'TextboxWidget',
                    config: { type: 'text', placeholder: 'New Password', inputStyle: 'roundCorner' },
                }
            },
            {
                id: 4, cols: 6, rows: 1, y: 9, x: 14, layerIndex: 2,
                widget: {
                    id: 'forgot_3_textbox_confirm_new_password',
                    type: 'TextboxWidget',
                    name: 'TextboxWidget',
                    config: { type: 'text', placeholder: 'Confirm New Password', inputStyle: 'roundCorner' },
                }
            },
            {
                id: 6, cols: 6, rows: 1, y: 10, x: 14, layerIndex: 2,
                widget: {
                    id: 'forgot_3_button_next',
                    type: 'ButtonWidget',
                    name: 'ButtonWidget',
                    config: { type: 'button', value: 'Next', buttonStyle: 'roundCorner', bgStyle: 'solid' },
                }
            },
            {
                id: 10, cols: 6, rows: 1, y: 11, x: 14, layerIndex: 2,
                widget: {
                    type: 'ShapeWidget',
                    name: 'ShapeWidget',
                    config: {},
                }
            },
            {
                id: 8, cols: 6, rows: 1, y: 12, x: 14, layerIndex: 2,
                widget: {
                    type: 'LabelWidget',
                    name: 'LabelWidget',
                    config: {
                        value: 'Need Help? Contact 02 123 4567',
                        styles: {
                            'font-family': 'SF Pro Text-Medium', 'font-size': '20px', 'text-align': 'left', opacity: 100
                        }
                    }
                }
            }
        ]
    },
    "forgot-4": {
        type: 'auth',
        name: 'Forgot Password',
        widgets: [
            {
                id: 1, cols: 9, rows: 18, y: 0, x: 0, layerIndex: 1, resizeEnabled: false, dragEnabled: false,
                widget: {
                    type: 'AreaContainerWidget',
                    name: 'AreaContainerWidget',
                    required: true,
                    config: {}
                }
            },
            {
                id: 9, cols: 2, rows: 3, y: 7, x: 4, layerIndex: 2, resizeEnabled: false,
                widget: {
                    type: 'ImgWidget',
                    name: 'ImgWidget',
                    required: true,
                    config: { src: 'assets/images/Graphic-Sample logo 1.png', disabled: false },
                }
            },
            {
                id: 2, cols: 6, rows: 1, y: 6, x: 14, layerIndex: 2,
                widget: {
                    type: 'LabelWidget',
                    name: 'LabelWidget',
                    config: {
                        value: 'Your Password',
                        styles: {
                            'font-family': 'SF Pro Text-Heavy', 'font-size': '40px', 'text-align': 'left', opacity: 100
                        }
                    },
                }
            },
            {
                id: 3, cols: 7, rows: 1, y: 7, x: 14, layerIndex: 2,
                widget: {
                    type: 'LabelWidget',
                    name: 'LabelWidget',
                    config: {
                        value: 'Has been changed',
                        styles: {
                            'font-family': 'SF Pro Text-Heavy', 'font-size': '40px', 'text-align': 'left', opacity: 100
                        }
                    }
                }
            },
            {
                id: 4, cols: 6, rows: 1, y: 8.5, x: 14, layerIndex: 2,
                widget: {
                    id: 'forgot_3_button_login',
                    type: 'ButtonWidget',
                    name: 'ButtonWidget',
                    config: { type: 'button', value: 'Login', 'font-size': '20px', buttonStyle: 'roundCorner', bgStyle: 'solid' },
                }
            },
        ]
    },
    "dashboard-1": {
        type: 'dashboard',
        name: 'Dashboard 1',
        widgets: [
            {
                id: 1, cols: 1, rows: 1, y: 0, x: 0, layerIndex: 2, minItemCols: 1, minItemRows: 1, maxItemCols: 2, maxItemRows: 2,
                widget: {
                    type: 'Simple1Widget',
                    name: 'Simple 1',
                    config: { faTopLeft: 'fa fa-battery-full', format: 'square', value: '100', centerVariable: '%', bottomVariable: 'Battery', iconMin: 0, iconMax: 100 },
                }
            },
            {
                id: 2, cols: 1, rows: 1, y: 0, x: 1, layerIndex: 2, minItemCols: 1, minItemRows: 1, maxItemCols: 2, maxItemRows: 2,
                widget: {
                    type: 'Gauge3Widget',
                    name: 'Gauge 3',
                    config: { faCenter: 'feather-droplet', type: 'full', value: 75, bottomVariableUnit: '%', bottomVariable: 'Humidity', thick: 15, gaugeMin: 0, gaugeMax: 100, iconMin: 0, iconMax: 100 },
                }
            },
            {
                id: 3, cols: 2, rows: 1, y: 0, x: 2, layerIndex: 2, minItemCols: 1, minItemRows: 1,
                widget: {
                    type: 'ChartWidget',
                    name: 'Chart',
                    config: {
                        active: 'line',  // TYPE: area, line, bar, hbar, bar3d, pie
                        chart: {
                            option: {
                                stack: 0,
                                yAxis: null,
                                // defaulColor: '#9FFFB1',
                            },
                            series: [
                                {
                                    values: [1, 4, 1, 2, 1] ,
                                    lineColor: '#64b5f6',
                                    backgroundColor: '#64b5f6',
                                    text: 'Data 1',
                                },
                                {
                                    values: [5, 1, 5, 3, 4] ,
                                    lineColor: '#F7B50E',
                                    backgroundColor: '#F7B50E',
                                    text: 'Data 1',
                                }
                            ]
                        },
                        pie: {
                            option: { 
                                // defaulColor: '#9FFFB1',
                            },
                            series: [
                                {
                                    values: [23],
                                    backgroundColor: '#ff4081',
                                    text: 'Day 1',
                                },
                                {
                                    values: [20],
                                    backgroundColor: '#e040fb',
                                    text: 'Day 2'
                                },
                                {
                                    values: [25],
                                    backgroundColor: '#448aff',
                                    text: 'Day 3'
                                },
                                {
                                    values: [25],
                                    backgroundColor: '#ff5252',
                                    text: 'Day 4'
                                },
                                {
                                    values: [25],
                                    backgroundColor: '#ff6e40',
                                    text: 'Day 5'
                                },
                                {
                                    values: [25],
                                    backgroundColor: '#69f0ae',
                                    text: 'Day 6'
                                },
                                {
                                    values: [25],
                                    backgroundColor: '#7c4dff',
                                    text: 'Day 7'
                                }
                            ]
                        }
                    }
                }
            },
            {
                id: 4, cols: 2, rows: 2, y: 0, x: 4, layerIndex: 2, minItemCols: 1, minItemRows: 1,
                widget: {
                    type: 'MapWidget',
                    name: 'Map',
                    config: {
                        lat: '1231',
                        lng: '12312'
                    },
                }
            },
            {
                id: 5, cols: 1, rows: 1, y: 1, x: 0, layerIndex: 2, minItemCols: 1, minItemRows: 1, maxItemCols: 2, maxItemRows: 2,
                widget: {
                    type: 'Gauge2Widget',
                    name: 'Gauge 2',
                    config: { faCenter: 'feather-layers', type: 'semi', value: '75', centerVariable: '%', bottomVariable: 'RH%', thick: 15, gaugeMin: 0, gaugeMax: 100, iconMin: 0, iconMax: 100 },
                }
            },
            {
                id: 6, cols: 1, rows: 1, y: 1, x: 1, layerIndex: 2, minItemCols: 1, minItemRows: 1, maxItemCols: 2, maxItemRows: 2,
                widget: {
                    type: 'Gauge1Widget',
                    name: 'Gauge 1',
                    config: { type: 'arch', value: 25, centerVariable: '℃', bottomVariable: 'Temperature', thick: 15, gaugeMin: 0, gaugeMax: 100 },
                }
            },
            {
                id: 7, cols: 2, rows: 1, y: 1, x: 2, layerIndex: 2, minItemCols: 1, minItemRows: 1, maxItemCols: 2, maxItemRows: 2,
                widget: {
                    type: 'Simple1Widget',
                    name: 'Simple 1',
                    config: { faTopLeft: 'feather-cloud-rain', value: '101', centerVariable: 'mm', bottomVariable: 'Rainfall', iconMin: 0, iconMax: 100 },
                }
            },
            {
                id: 8, cols: 2, rows: 1, y: 2, x: 0, layerIndex: 2, minItemCols: 1, minItemRows: 1, maxItemCols: 2, maxItemRows: 2,
                widget: {
                    type: 'Gauge2Widget',
                    name: 'Gauge 2',
                    config: { faCenter: 'feather-layers', type: 'semi', value: '75', centerVariable: '%', bottomVariable: 'RH%', thick: 15, gaugeMin: 0, gaugeMax: 100, iconMin: 0, iconMax: 100 },
                }
            },
            {
                id: 9, cols: 2, rows: 1, y: 2, x: 2, layerIndex: 2, minItemCols: 1, minItemRows: 1, maxItemCols: 2, maxItemRows: 2,
                widget: {
                    type: 'Gauge1Widget',
                    name: 'Gauge 1',
                    config: { type: 'full', value: '75', centerVariable: '%', bottomVariable: 'Humidity', thick: 15, gaugeMin: 0, gaugeMax: 100 },
                }
            },
            {
                id: 10, cols: 2, rows: 1, y: 2, x: 4, layerIndex: 2, minItemCols: 1, minItemRows: 1, maxItemCols: 2, maxItemRows: 2,
                widget: {
                    type: 'Gauge3Widget',
                    name: 'Gauge 3',
                    config: { faCenter: 'feather-thermometer', type: 'arch', value: '25', bottomVariableUnit: '℃', bottomVariable: 'Temperature', thick: 15, gaugeMin: 0, gaugeMax: 40, iconMin: 0, iconMax: 100 },
                }
            },
            {
                id: 11, cols: 1, rows: 2, y: 3, x: 0, layerIndex: 2, minItemCols: 1, minItemRows: 1, maxItemCols: 2, maxItemRows: 2,
                widget: {
                    type: 'Simple1Widget',
                    name: 'Simple 1',
                    config: { faTopLeft: 'feather-cloud-rain', value: '101', centerVariable: 'mm', bottomVariable: 'Rainfall', iconMin: 0, iconMax: 100 },
                }
            },
            {
                id: 12, cols: 1, rows: 2, y: 3, x: 1, layerIndex: 2, minItemCols: 1, minItemRows: 1, maxItemCols: 2, maxItemRows: 2,
                widget: {
                    type: 'Gauge1Widget',
                    name: 'Gauge 1',
                    config: { type: 'full', value: '75', centerVariable: '%', bottomVariable: 'Rainfall', thick: 15, gaugeMin: 0, gaugeMax: 100 },
                }
            }
        ]
    },
    "dashboard-2": {
        type: 'dashboard',
        name: 'Dashboard 2',
        widgets: [
            {
                id: 4, cols: 4, rows: 3, y: 0, x: 1, layerIndex: 2, minItemCols: 1, minItemRows: 1,
                widget: {
                    type: 'MapWidget',
                    name: 'Map',
                    config: {
                        lat: '1231',
                        lng: '12312'
                    },
                }
            },
            {
                id: 5, cols: 1, rows: 1, y: 3, x: 1, layerIndex: 2, minItemCols: 1, minItemRows: 1, maxItemCols: 2, maxItemRows: 2,
                widget: {
                    type: 'Simple1Widget',
                    name: 'Simple 1',
                    config: { faTopLeft: 'fa fa-battery-full', format: 'square', value: '100', centerVariable: '%', bottomVariable: 'Battery', iconMin: 0, iconMax: 100 },
                }
            },

            {
                id: 6, cols: 1, rows: 1, y: 3, x: 2, layerIndex: 2, minItemCols: 1, minItemRows: 1, maxItemCols: 2, maxItemRows: 2,
                widget: {
                    type: 'Gauge1Widget',
                    name: 'Gauge 1',
                    config: { type: 'full', value: '75', centerVariable: '%', bottomVariable: 'Humidity 75%', thick: 15, gaugeMin: 0, gaugeMax: 100 },
                }
            },
            {
                id: 1, cols: 2, rows: 1, y: 3, x: 3, layerIndex: 2, minItemCols: 1, minItemRows: 1,
                widget: {
                    type: 'ChartWidget',
                    name: 'Chart',
                    config: {
                        active: 'line',  // TYPE: area, line, bar, hbar, bar3d, pie
                        chart: {
                            option: {
                                stack: 0,
                                yAxis: null,
                                // defaulColor: '#9FFFB1',
                            },
                            series: [
                                {
                                    values: [1, 4, 1, 2, 1] ,
                                    lineColor: '#64b5f6',
                                    backgroundColor: '#64b5f6',
                                    text: 'Data 1',
                                },
                                {
                                    values: [5, 1, 5, 3, 4] ,
                                    lineColor: '#F7B50E',
                                    backgroundColor: '#F7B50E',
                                    text: 'Data 1',
                                }
                            ]
                        },
                        pie: {
                            option: { 
                                // defaulColor: '#9FFFB1',
                            },
                            series: [
                                {
                                    values: [23],
                                    backgroundColor: '#ff4081',
                                    text: 'Day 1',
                                },
                                {
                                    values: [20],
                                    backgroundColor: '#e040fb',
                                    text: 'Day 2'
                                },
                                {
                                    values: [25],
                                    backgroundColor: '#448aff',
                                    text: 'Day 3'
                                },
                                {
                                    values: [25],
                                    backgroundColor: '#ff5252',
                                    text: 'Day 4'
                                },
                                {
                                    values: [25],
                                    backgroundColor: '#ff6e40',
                                    text: 'Day 5'
                                },
                                {
                                    values: [25],
                                    backgroundColor: '#69f0ae',
                                    text: 'Day 6'
                                },
                                {
                                    values: [25],
                                    backgroundColor: '#7c4dff',
                                    text: 'Day 7'
                                }
                            ]
                        }
                    }
                }
            },
            {
                id: 8, cols: 1, rows: 1, y: 4, x: 1, layerIndex: 2, minItemCols: 1, minItemRows: 1, maxItemCols: 2, maxItemRows: 2,
                widget: {
                    type: 'Gauge2Widget',
                    name: 'Gauge 2',
                    config: { faCenter: 'feather-layers', type: 'semi', value: '75', centerVariable: '%', bottomVariable: 'RH%', thick: 15, gaugeMin: 0, gaugeMax: 100, iconMin: 0, iconMax: 100 },
                }
            },
            {
                id: 9, cols: 1, rows: 1, y: 4, x: 2, layerIndex: 2, minItemCols: 1, minItemRows: 1, maxItemCols: 2, maxItemRows: 2,
                widget: {
                    type: 'Gauge3Widget',
                    name: 'Gauge 3',
                    config: { faCenter: 'feather-thermometer', type: 'arch', value: '25', bottomVariableUnit: '℃', bottomVariable: 'Temperature', thick: 15, gaugeMin: 0, gaugeMax: 40, iconMin: 0, iconMax: 100 },
                }
            },
            {
                id: 10, cols: 2, rows: 1, y: 4, x: 3, layerIndex: 2, minItemCols: 1, minItemRows: 1, maxItemCols: 2, maxItemRows: 2,
                widget: {
                    type: 'Simple1Widget',
                    name: 'Simple 1',
                    config: { faTopLeft: 'feather-cloud-rain', value: '101', centerVariable: 'mm', bottomVariable: 'Rainfall', iconMin: 0, iconMax: 100 },
                }
            },
        ]
    },
    "all-thing": {
        type: 'page',
        name: 'All Thing',
        breadcumbs: [
            { label: 'All Thing' }
        ],
        widgets: [
            {
                id: 1, cols: 28, rows: 18, y: 0, x: 1, layerIndex: 2, resizeEnabled: false,
                widget: {
                    type: 'AllThingWidget',
                    name: 'AllThingWidget',
                    required: true,
                    config: {}
                }
            },
        ]
    },
    "thing-detail":{
        type:'page',
        name:'Thing Detail',
        breadcumbs: [
            { label: 'All Thing', url: 'private?page=all-thing'},
            { label: '{Thing Name}' }
        ],
        widgets:[
            {
                id: 1, cols: 28, rows: 18, y: 0, x: 0, layerIndex: 2, resizeEnabled: false,
                widget: {
                    type: 'ThingDetailWidget',
                    name: 'ThingDetailWidget',
                    required: true,
                    config: {}
                }
            },
        ]
    },
    "user-management":{
        type:'page',
        name:'User Management',
        breadcumbs: [
            { label: 'User Management' },
        ],
        widgets:[
            {
                id: 1, cols: 28, rows: 18, y: 0, x: 0, layerIndex: 2, resizeEnabled: false,
                widget: {
                    type: 'UserManagementWidget',
                    name: 'UserManagementWidget',
                    required: true,
                    config: {}
                }
            },
        ]
    },
    "create-member": {
        type: 'page',
        name: 'Create Member',
        breadcumbs: [
            { label: 'User Management', url: 'private?page=user-management'},
            { label: 'Create Member' }
        ],
        widgets: [
            {
                id: 1, cols: 28, rows: 18, y: 0, x: 0, layerIndex: 2, resizeEnabled: false,
                widget: {
                    type: 'CreateMemberWidget',
                    name: 'CreateMemberWidget',
                    required: true,
                    config: {}
                }
            },
        ]
    },
    "user-information-admin": {
        type: 'page',
        name: 'User Infomation Edit',
        breadcumbs: [
            { label: 'User Management', url: 'private?page=user-management' },
            { label: 'Edit' },
        ],
        widgets: [
            {
                id: 1, cols: 28, rows: 18, y: 0, x: 0, layerIndex: 2, resizeEnabled: false,
                widget: {
                    type: 'UserInfoAdminWidget',
                    name: 'UserInfoAdminWidget',
                    required:true,
                    config:{}
                }
            },
        ]
    },
    "user-information": {
        type: 'page',
        name: 'User Infomation',
        breadcumbs: [
            { label: 'User Infomation' },
        ],
        widgets: [
            {
                id: 1, cols: 28, rows: 18, y: 0, x: 0, layerIndex: 2, resizeEnabled: false,
                widget: {
                    type: 'UserInfoWidget',
                    name: 'UserInfoWidget',
                    required: true,
                    config: {}
                }
            },
        ]
    },
    "widget-setting": {
        type: 'page',
        name: 'Widget Setting',
        breadcumbs: [
            { label: 'Dashboard', url: 'private?page=dashboard-1' },
            { label: 'Widget Setting' }
        ],
        widgets:[
            {
                id: 1, cols: 28, rows: 18, y: 0, x: 0, layerIndex: 2, resizeEnabled: false,
                widget: {
                    type: 'WidgetSettingWidget',
                    name: 'WidgetSettingWidget',
                    required: true,
                    config: {}
                }
            }
        ]
    },
    "dashboard-management": {
        type: 'page',
        name: 'Dashboard Management',
        breadcumbs: [
            { label: 'Dashboard', url: 'private?page=dashboard-1'},
            { label: 'Dashboard Management' }
        ],
        widgets:[
            {
                id: 1, cols: 28, rows: 18, y: 0, x: 0, layerIndex: 2, resizeEnabled: false,
                widget: {
                    type: 'DashboardManagementWidget',
                    name: 'DashboardManagementWidget',
                    required: true,
                    config: {}
                }
            }
        ]
    },
    "role-management": {
        type: 'page',
        name: 'Role Management',
        breadcumbs: [
            { label: 'User Management', url: 'private?page=user-management'},
            { label: 'Role Management' }
        ],
        widgets:[
            {
                id: 1, cols: 28, rows: 18, y: 0, x: 0, layerIndex: 2, resizeEnabled: false,
                widget: {
                    type: 'RoleManagementWidget',
                    name: 'RoleManagementWidget',
                    required: true,
                    config:{}
                }
            }
        ] 
    },
});

/***/ }),

/***/ "./src/app/services/pageData.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/pageData.service.ts ***!
  \**********************************************/
/*! exports provided: PageDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageDataService", function() { return PageDataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "../../node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _example__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./example */ "./src/app/services/example.js");
/* harmony import */ var _themes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./themes */ "./src/app/services/themes.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");







class PageDataService {
    constructor(router) {
        this.router = router;
        this.data = _example__WEBPACK_IMPORTED_MODULE_3__["default"];
        this.widgets = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this.page = '';
        this.pageType = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.pageBreadcumbs = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.pageConfig = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({
            themeAuthBackground: 'linear-gradient(180deg, #214F44 0%, #00252E 22%, #0D061D 52%, #121212 100%)',
            themeBackground: 'linear-gradient(180deg, #214F44 0%, #00252E 22%, #0D061D 52%, #121212 100%)',
            themeWidgetBackground: '#000000',
            AreaContainerWidget: {
                backgroundColor: 'linear-gradient(180deg, #103F36 0%, #001A23 22%, #000012 52%, #121212 100%)'
            },
            TextboxWidget: {
                styles: { background: "transparent" }
            },
            ButtonWidget: {
                background: "#9FFFB1"
            },
            Gauge1Widget: {
                colorIcon: '#9FFFB1',
                foregroundColor: '#9FFFB1'
            },
            Gauge2Widget: {
                colorIcon: '#9FFFB1',
                foregroundColor: '#9FFFB1'
            },
            Gauge3Widget: {
                colorIcon: '#9FFFB1',
                foregroundColor: '#9FFFB1'
            },
            Simple1Widget: {
                colorIcon: '#9FFFB1',
            },
            LinkWidget: {
                styles: {
                    color: '#9FFFB1'
                },
            },
            ChartWidget: {
                option: {
                    defaulColor: '#9FFFB1'
                }
            },
            LabelWidget: {
                styles: {
                    color: '#FFFFFF'
                }
            }
        });
    }
    getWidgets(page) {
        if (!page)
            page = Object.keys(this.data).find((key) => this.data[key] == 'dashboard');
        this.page = page;
        let data = this.data[page] ? Object(lodash__WEBPACK_IMPORTED_MODULE_2__["cloneDeep"])(this.data[page].widgets) : [];
        let type = this.data[page] ? this.data[page].type : '';
        let breadcumbs = this.data[page] ? this.data[page].breadcumbs : '';
        let theme = JSON.parse(localStorage.getItem('theme'));
        if (theme) {
            this.pageConfig.next(_themes__WEBPACK_IMPORTED_MODULE_4__["default"][theme]);
        }
        this.widgets.next(data);
        this.pageType.next(type);
        this.pageBreadcumbs.next(breadcumbs);
    }
}
PageDataService.ɵfac = function PageDataService_Factory(t) { return new (t || PageDataService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
PageDataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PageDataService, factory: PageDataService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageDataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/private-guard.ts":
/*!*******************************************!*\
  !*** ./src/app/services/private-guard.ts ***!
  \*******************************************/
/*! exports provided: PrivateGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivateGuard", function() { return PrivateGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class PrivateGuard {
    constructor(router) {
        this.router = router;
    }
    canActivate(next, state) {
        let token = localStorage.getItem('token');
        if (token) {
            return true;
        }
        else {
            this.router.navigate(['/public'], { queryParams: { page: 'login' } });
        }
    }
}
PrivateGuard.ɵfac = function PrivateGuard_Factory(t) { return new (t || PrivateGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
PrivateGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PrivateGuard, factory: PrivateGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PrivateGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/public-guard.ts":
/*!******************************************!*\
  !*** ./src/app/services/public-guard.ts ***!
  \******************************************/
/*! exports provided: PublicGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicGuard", function() { return PublicGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class PublicGuard {
    constructor(router) {
        this.router = router;
    }
    canActivate(next, state) {
        let token = localStorage.getItem('token');
        if (token) {
            this.router.navigate(['/private']);
        }
        else {
            return true;
        }
    }
}
PublicGuard.ɵfac = function PublicGuard_Factory(t) { return new (t || PublicGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
PublicGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PublicGuard, factory: PublicGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PublicGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/themes.js":
/*!************************************!*\
  !*** ./src/app/services/themes.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  'dark.gray': {
    themeAuthBackground: 'linear-gradient(180deg, #304724 0%, #2B2C2D 0%, #171819 22%, #0A0B0C 52%, #070809 100%)',
    themeBackground: 'linear-gradient(180deg, #304724 0%, #2B2C2D 0%, #171819 22%, #0A0B0C 52%, #070809 100%)',
    themeWidgetBackground: '#000000',
    AreaContainerWidget: {
      backgroundColor: 'linear-gradient(180deg, #1C1D1E 0%, #0B0C0D 22%, #000001 52%, #070809 100%)'
    },
    TextboxWidget: {
      styles: {
        background: "transparent",
        color: '#959393'
      }
    },
    ButtonWidget: {
      color: "#212121",
      background: "#FFFFFF"
    },
    Gauge1Widget: {
      colorText: '#FAFAFA',
      colorIcon: '#FFFFFF',
      foregroundColor: '#FFFFFF'
    },
    Gauge2Widget: {
      colorText: '#FAFAFA',
      colorIcon: '#FFFFFF',
      foregroundColor: '#FFFFFF'
    },
    Gauge3Widget: {
      colorText: '#FAFAFA',
      colorIcon: '#FFFFFF',
      foregroundColor: '#FFFFFF'
    },
    Simple1Widget: {
      colorText: '#FAFAFA',
      colorIcon: '#FFFFFF',
    },
    Simple2Widget: {
      colorText: '#FAFAFA',
      colorIcon: '#FFFFFF',
    },
    LinkWidget: {
      styles: {
        color: '#FFFFFF'
      },
    },
    ChartWidget: {
      chart: {
        option: {
          defaulColor: '#FFFFFF'
        }
      }
    },
    LabelWidget: {
      styles: {
        color: '#FFFFFF'
      },
    }
  },
  'dark.default': {
    themeAuthBackground: 'linear-gradient(180deg, #214F44 0%, #00252E 22%, #0D061D 52%, #121212 100%)',
    themeBackground: 'linear-gradient(180deg, #214F44 0%, #00252E 22%, #0D061D 52%, #121212 100%)',
    themeWidgetBackground: '#000000',
    AreaContainerWidget: {
      backgroundColor: 'linear-gradient(180deg, #103F36 0%, #001A23 22%, #000012 52%, #121212 100%)'
    },
    TextboxWidget: {
      styles: {
        background: "transparent",
        color: '#959393'
      }
    },
    ButtonWidget: {
      color: "#212121",
      background: "#9FFFB1"
    },
    Gauge1Widget: {
      colorText: '#FAFAFA',
      colorIcon: '#9FFFB1',
      foregroundColor: '#9FFFB1'
    },
    Gauge2Widget: {
      colorText: '#FAFAFA',
      colorIcon: '#9FFFB1',
      foregroundColor: '#9FFFB1'
    },
    Gauge3Widget: {
      colorText: '#FAFAFA',
      colorIcon: '#9FFFB1',
      foregroundColor: '#9FFFB1'
    },
    Simple1Widget: {
      colorText: '#FAFAFA',
      colorIcon: '#9FFFB1',
    },
    Simple2Widget: {
      colorText: '#FAFAFA',
      colorIcon: '#9FFFB1',
    },
    LinkWidget: {
      styles: {
        color: '#9FFFB1'
      },
    },
    ChartWidget: {
      chart: {
        option: {
          defaulColor: '#9FFFB1'
        }
      }
    },
    LabelWidget: {
      styles: {
        color: '#FFFFFF'
      },
    }
  },
  'dark.blue': {
    themeAuthBackground: 'linear-gradient(180deg, #2E4650 0%, #172F38 22%, #0A1113 52%, #121212 100%)',
    themeBackground: 'linear-gradient(180deg, #2E4650 0%, #172F38 22%, #0A1113 52%, #121212 100%)',
    themeWidgetBackground: '#000000',
    AreaContainerWidget: {
      backgroundColor: 'linear-gradient(180deg, #1E363F 0%, #0B222B 22%, #000505 52%, #121212 100%)'
    },
    TextboxWidget: {
      styles: {
        background: "transparent",
        color: '#959393'
      }
    },
    ButtonWidget: {
      color: "#212121",
      background: "#97C9DE"
    },
    Gauge1Widget: {
      colorText: '#FAFAFA',
      colorIcon: '#97C9DE',
      foregroundColor: '#97C9DE'
    },
    Gauge2Widget: {
      colorText: '#FAFAFA',
      colorIcon: '#97C9DE',
      foregroundColor: '#97C9DE'
    },
    Gauge3Widget: {
      colorText: '#FAFAFA',
      colorIcon: '#97C9DE',
      foregroundColor: '#97C9DE'
    },
    Simple1Widget: {
      colorText: '#FAFAFA',
      colorIcon: '#97C9DE',
    },
    Simple2Widget: {
      colorText: '#FAFAFA',
      colorIcon: '#97C9DE',
    },
    LinkWidget: {
      styles: {
        color: '#97C9DE'
      },
    },
    ChartWidget: {
      chart: {
        option: {
          defaulColor: '#97C9DE'
        }
      }
    },
    LabelWidget: {
      styles: {
        color: '#FFFFFF'
      },
    }
  },
  'dark.violet': {
    themeAuthBackground: 'linear-gradient(180deg, #2B3455 0%, #131E3C 22%, #0A0D13 52%, #121212 100%)',
    themeBackground: 'linear-gradient(180deg, #2B3455 0%, #131E3C 22%, #0A0D13 52%, #121212 100%)',
    themeWidgetBackground: '#000000',
    AreaContainerWidget: {
      backgroundColor: 'linear-gradient(180deg, #1B2445 0%, #07122F 22%, #000107 52%, #121212 100%)'
    },
    TextboxWidget: {
      styles: {
        background: "transparent",
        color: '#959393'
      }
    },
    ButtonWidget: {
      color: "#212121",
      background: "#919DEB"
    },
    Gauge1Widget: {
      colorText: '#FAFAFA',
      colorIcon: '#919DEB',
      foregroundColor: '#919DEB'
    },
    Gauge2Widget: {
      colorText: '#FAFAFA',
      colorIcon: '#919DEB',
      foregroundColor: '#919DEB'
    },
    Gauge3Widget: {
      colorText: '#FAFAFA',
      colorIcon: '#919DEB',
      foregroundColor: '#919DEB'
    },
    Simple1Widget: {
      colorText: '#FAFAFA',
      colorIcon: '#919DEB',
    },
    Simple2Widget: {
      colorText: '#FAFAFA',
      colorIcon: '#919DEB',
    },
    LinkWidget: {
      styles: {
        color: '#919DEB'
      },
    },
    ChartWidget: {
      chart: {
        option: {
          defaulColor: '#919DEB'
        }
      }
    },
    LabelWidget: {
      styles: {
        color: '#FFFFFF'
      },
    }
  },
  'dark.purple': {
    themeAuthBackground: 'linear-gradient(180deg, #412B45 0%, #2A1830 22%, #0E0B11 52%, #070809 100%)',
    themeBackground: 'linear-gradient(180deg, #412B45 0%, #2A1830 22%, #0E0B11 52%, #070809 100%)',
    themeWidgetBackground: '#000000',
    AreaContainerWidget: {
      backgroundColor: 'linear-gradient(180deg, #321C36 0%, #1D0A22 22%, #010003 52%, #070809 100%)'
    },
    TextboxWidget: {
      styles: {
        background: "transparent",
        color: '#959393'
      }
    },
    ButtonWidget: {
      color: "#212121",
      background: "#C58ECC"
    },
    Gauge1Widget: {
      colorText: '#FAFAFA',
      colorIcon: '#C58ECC',
      foregroundColor: '#C58ECC'
    },
    Gauge2Widget: {
      colorText: '#FAFAFA',
      colorIcon: '#C58ECC',
      foregroundColor: '#C58ECC'
    },
    Gauge3Widget: {
      colorText: '#FAFAFA',
      colorIcon: '#C58ECC',
      foregroundColor: '#C58ECC'
    },
    Simple1Widget: {
      colorText: '#FAFAFA',
      colorIcon: '#C58ECC',
    },
    Simple2Widget: {
      colorText: '#FAFAFA',
      colorIcon: '#C58ECC',
    },
    LinkWidget: {
      styles: {
        color: '#C58ECC'
      },
    },
    ChartWidget: {
      chart: {
        option: {
          defaulColor: '#C58ECC'
        }
      }
    },
    LabelWidget: {
      styles: {
        color: '#FFFFFF'
      },
    }
  },
  'dark.pink': {
    themeAuthBackground: 'linear-gradient(180deg, #502632 0%, #36101E 22%, #110B0E 52%, #070809 100%)',
    themeBackground: 'linear-gradient(180deg, #502632 0%, #36101E 22%, #110B0E 52%, #070809 100%)',
    themeWidgetBackground: '#000000',
    AreaContainerWidget: {
      backgroundColor: 'linear-gradient(180deg, #411724 0%, #2A0410 22%, #050101 52%, #070809 100%)'
    },
    TextboxWidget: {
      styles: {
        background: "transparent",
        color: '#959393'
      }
    },
    ButtonWidget: {
      color: "#212121",
      background: "#E8829A"
    },
    Gauge1Widget: {
      colorText: '#FAFAFA',
      colorIcon: '#E8829A',
      foregroundColor: '#E8829A'
    },
    Gauge2Widget: {
      colorText: '#FAFAFA',
      colorIcon: '#E8829A',
      foregroundColor: '#E8829A'
    },
    Gauge3Widget: {
      colorText: '#FAFAFA',
      colorIcon: '#E8829A',
      foregroundColor: '#E8829A'
    },
    Simple1Widget: {
      colorText: '#FAFAFA',
      colorIcon: '#E8829A',
    },
    Simple2Widget: {
      colorText: '#FAFAFA',
      colorIcon: '#E8829A',
    },
    LinkWidget: {
      styles: {
        color: '#E8829A'
      },
    },
    ChartWidget: {
      chart: {
        option: {
          defaulColor: '#E8829A'
        }
      }
    },
    LabelWidget: {
      styles: {
        color: '#FFFFFF'
      },
    }
  },
  'dark.orange': {
    themeAuthBackground: 'linear-gradient(180deg, #502824 0%, #361211 22%, #110B0A 52%, #070809 100%)',
    themeBackground: 'linear-gradient(180deg, #502824 0%, #361211 22%, #110B0A 52%, #070809 100%)',
    themeWidgetBackground: '#000000',
    AreaContainerWidget: {
      backgroundColor: 'linear-gradient(180deg, #421916 0%, #2A0605 22%, #050101 52%, #070809 100%)'
    },
    TextboxWidget: {
      styles: {
        background: "transparent",
        color: '#959393'
      }
    },
    ButtonWidget: {
      color: "#212121",
      background: "#EA857A"
    },
    Gauge1Widget: {
      colorText: '#FAFAFA',
      colorIcon: '#EA857A',
      foregroundColor: '#EA857A'
    },
    Gauge2Widget: {
      colorText: '#FAFAFA',
      colorIcon: '#EA857A',
      foregroundColor: '#EA857A'
    },
    Gauge3Widget: {
      colorText: '#FAFAFA',
      colorIcon: '#EA857A',
      foregroundColor: '#EA857A'
    },
    Simple1Widget: {
      colorText: '#FAFAFA',
      colorIcon: '#EA857A',
    },
    Simple2Widget: {
      colorText: '#FAFAFA',
      colorIcon: '#EA857A',
    },
    LinkWidget: {
      styles: {
        color: '#EA857A'
      },
    },
    ChartWidget: {
      chart: {
        option: {
          defaulColor: '#EA857A'
        }
      }
    },
    LabelWidget: {
      styles: {
        color: '#FFFFFF'
      },
    }
  },
  'dark.lightGreen': {
    themeAuthBackground: 'linear-gradient(180deg, #304724 0%, #1A2F0E 22%, #0A110B 52%, #070809 100%)',
    themeBackground: 'linear-gradient(180deg, #304724 0%, #1A2F0E 22%, #0A110B 52%, #070809 100%)',
    themeWidgetBackground: '#000000',
    AreaContainerWidget: {
      backgroundColor: 'linear-gradient(180deg, #203815 0%, #0E2304 22%, #000502 52%, #070809 100%)'
    },
    TextboxWidget: {
      styles: {
        background: "transparent",
        color: '#959393'
      }
    },
    ButtonWidget: {
      color: "#212121",
      background: "#9DCB7A"
    },
    Gauge1Widget: {
      colorText: '#FAFAFA',
      colorIcon: '#9DCB7A',
      foregroundColor: '#9DCB7A'
    },
    Gauge2Widget: {
      colorText: '#FAFAFA',
      colorIcon: '#9DCB7A',
      foregroundColor: '#9DCB7A'
    },
    Gauge3Widget: {
      colorText: '#FAFAFA',
      colorIcon: '#9DCB7A',
      foregroundColor: '#9DCB7A'
    },
    Simple1Widget: {
      colorText: '#FAFAFA',
      colorIcon: '#9DCB7A',
    },
    Simple2Widget: {
      colorText: '#FAFAFA',
      colorIcon: '#9DCB7A',
    },
    LinkWidget: {
      styles: {
        color: '#9DCB7A'
      },
    },
    ChartWidget: {
      chart: {
        option: {
          defaulColor: '#9DCB7A'
        }
      }
    },
    LabelWidget: {
      styles: {
        color: '#FFFFFF'
      },
    }
  },
  'dark.darkGreen': {
    themeAuthBackground: 'linear-gradient(180deg, #304724 0%, #1D3B2B 0%, #092518 22%, #070F0C 52%, #070809 100%)',
    themeBackground: 'linear-gradient(180deg, #304724 0%, #1D3B2B 0%, #092518 22%, #070F0C 52%, #070809 100%)',
    themeWidgetBackground: '#000000',
    AreaContainerWidget: {
      backgroundColor: 'linear-gradient(180deg, #102C1D 0%, #00180C 22%, #000300 52%, #070809 100%)'
    },
    TextboxWidget: {
      styles: {
        background: "transparent",
        color: '#959393'
      }
    },
    ButtonWidget: {
      color: "#212121",
      background: "#73B18D"
    },
    Gauge1Widget: {
      colorText: '#FAFAFA',
      colorIcon: '#73B18D',
      foregroundColor: '#73B18D'
    },
    Gauge2Widget: {
      colorText: '#FAFAFA',
      colorIcon: '#73B18D',
      foregroundColor: '#73B18D'
    },
    Gauge3Widget: {
      colorText: '#FAFAFA',
      colorIcon: '#73B18D',
      foregroundColor: '#73B18D'
    },
    Simple1Widget: {
      colorText: '#FAFAFA',
      colorIcon: '#73B18D',
    },
    Simple2Widget: {
      colorText: '#FAFAFA',
      colorIcon: '#73B18D',
    },
    LinkWidget: {
      styles: {
        color: '#73B18D'
      },
    },
    ChartWidget: {
      chart: {
        option: {
          defaulColor: '#73B18D'
        }
      }
    },
    LabelWidget: {
      styles: {
        color: '#FFFFFF'
      },
    }
  },
  'dark.teal': {
    themeAuthBackground: 'linear-gradient(180deg, #304724 0%, #1C3A39 0%, #052524 22%, #060E0E 52%, #070809 100%)',
    themeBackground: 'linear-gradient(180deg, #304724 0%, #1C3A39 0%, #052524 22%, #060E0E 52%, #070809 100%)',
    themeWidgetBackground: '#000000',
    AreaContainerWidget: {
      backgroundColor: 'linear-gradient(180deg, #0D2B2A 0%, #001716 22%, #000202 52%, #070809 100%)'
    },
    TextboxWidget: {
      styles: {
        background: "transparent",
        color: '#959393'
      }
    },
    ButtonWidget: {
      color: "#212121",
      background: "#70AFAA"
    },
    Gauge1Widget: {
      colorText: '#FAFAFA',
      colorIcon: '#70AFAA',
      foregroundColor: '#70AFAA'
    },
    Gauge2Widget: {
      colorText: '#FAFAFA',
      colorIcon: '#70AFAA',
      foregroundColor: '#70AFAA'
    },
    Gauge3Widget: {
      colorText: '#FAFAFA',
      colorIcon: '#70AFAA',
      foregroundColor: '#70AFAA'
    },
    Simple1Widget: {
      colorText: '#FAFAFA',
      colorIcon: '#70AFAA',
    },
    Simple2Widget: {
      colorText: '#FAFAFA',
      colorIcon: '#70AFAA',
    },
    LinkWidget: {
      styles: {
        color: '#70AFAA'
      },
    },
    ChartWidget: {
      chart: {
        option: {
          defaulColor: '#70AFAA'
        }
      }
    },
    LabelWidget: {
      styles: {
        color: '#FFFFFF'
      },
    }
  },
  'light.gray': {
    themeAuthBackground: '#FFFFFF',
    themeBackground: 'linear-gradient(180deg, #212121 0%, #6A6A6A 100%)',
    themeWidgetBackground: '#FFFFFF',
    AreaContainerWidget: {
      backgroundColor: 'linear-gradient(180deg, #212121 0%, #6A6A6A 100%)'
    },
    TextboxWidget: {
      styles: {
        background: "transparent",
        color: '#959393'
      }
    },
    ButtonWidget: {
      color: "#FFFFFF",
      background: "#212121",
    },
    Gauge1Widget: {
      colorText: '#212121',
      colorIcon: '#212121',
      foregroundColor: '#212121'
    },
    Gauge2Widget: {
      colorText: '#212121',
      colorIcon: '#212121',
      foregroundColor: '#212121'
    },
    Gauge3Widget: {
      colorText: '#212121',
      colorIcon: '#212121',
      foregroundColor: '#212121'
    },
    Simple1Widget: {
      colorText: '#212121',
      colorIcon: '#212121',
    },
    Simple2Widget: {
      colorText: '#212121',
      colorIcon: '#212121',
    },
    LinkWidget: {
      styles: {
        color: '#212121'
      },
    },
    ChartWidget: {
      chart: {
        option: {
          defaulColor: '#212121'
        }
      }
    },
    LabelWidget: {
      styles: {
        color: '#212121'
      },
    }
  },
  'light.default': {
    themeAuthBackground: '#FFFFFF',
    themeBackground: 'linear-gradient(180deg, #628D6A 0%, #A8FEB8 100%)',
    themeWidgetBackground: '#FFFFFF',
    AreaContainerWidget: {
      backgroundColor: 'linear-gradient(180deg, #628D6A 0%, #A8FEB8 100%)'
    },
    TextboxWidget: {
      styles: {
        background: "transparent",
        color: '#959393'
      }
    },
    ButtonWidget: {
      color: '#FFFFFF',
      background: "#9FFFB1"
    },
    Gauge1Widget: {
      colorText: '#212121',
      colorIcon: '#9FFFB1',
      foregroundColor: '#9FFFB1'
    },
    Gauge2Widget: {
      colorText: '#212121',
      colorIcon: '#9FFFB1',
      foregroundColor: '#9FFFB1'
    },
    Gauge3Widget: {
      colorText: '#212121',
      colorIcon: '#9FFFB1',
      foregroundColor: '#9FFFB1'
    },
    Simple1Widget: {
      colorText: '#212121',
      colorIcon: '#9FFFB1',
    },
    Simple2Widget: {
      colorText: '#212121',
      colorIcon: '#9FFFB1',
    },
    LinkWidget: {
      styles: {
        color: '#9FFFB1'
      },
    },
    ChartWidget: {
      chart: {
        option: {
          defaulColor: '#9FFFB1'
        }
      }
    },
    LabelWidget: {
      styles: {
        color: '#212121'
      },
    }
  },
  'light.blue': {
    themeAuthBackground: '#FFFFFF',
    themeBackground: 'linear-gradient(180deg, #5E757E 0%, #A1CEE1 100%)',
    themeWidgetBackground: '#FFFFFF',
    AreaContainerWidget: {
      backgroundColor: 'linear-gradient(180deg, #5E757E 0%, #A1CEE1 100%)'
    },
    TextboxWidget: {
      styles: {
        background: "transparent",
        color: '#959393'
      }
    },
    ButtonWidget: {
      color: '#FFFFFF',
      background: "#97C9DE"
    },
    Gauge1Widget: {
      colorText: '#212121',
      colorIcon: '#97C9DE',
      foregroundColor: '#97C9DE'
    },
    Gauge2Widget: {
      colorText: '#212121',
      colorIcon: '#97C9DE',
      foregroundColor: '#97C9DE'
    },
    Gauge3Widget: {
      colorText: '#212121',
      colorIcon: '#97C9DE',
      foregroundColor: '#97C9DE'
    },
    Simple1Widget: {
      colorText: '#212121',
      colorIcon: '#97C9DE',
    },
    Simple2Widget: {
      colorText: '#212121',
      colorIcon: '#97C9DE',
    },
    LinkWidget: {
      styles: {
        color: '#97C9DE'
      },
    },
    ChartWidget: {
      chart: {
        option: {
          defaulColor: '#97C9DE'
        }
      }
    },
    LabelWidget: {
      styles: {
        color: '#212121'
      },
    }
  },
  'light.violet': {
    themeAuthBackground: '#FFFFFF',
    themeBackground: 'linear-gradient(180deg, #5C6184 0%, #9BA6EC 100%)',
    themeWidgetBackground: '#FFFFFF',
    AreaContainerWidget: {
      backgroundColor: 'linear-gradient(180deg, #5C6184 0%, #9BA6EC 100%)'
    },
    TextboxWidget: {
      styles: {
        background: "transparent",
        color: '#959393'
      }
    },
    ButtonWidget: {
      color: '#FFFFFF',
      background: "#919DEB"
    },
    Gauge1Widget: {
      colorText: '#212121',
      colorIcon: '#919DEB',
      foregroundColor: '#919DEB'
    },
    Gauge2Widget: {
      colorText: '#212121',
      colorIcon: '#919DEB',
      foregroundColor: '#919DEB'
    },
    Gauge3Widget: {
      colorText: '#212121',
      colorIcon: '#919DEB',
      foregroundColor: '#919DEB'
    },
    Simple1Widget: {
      colorText: '#212121',
      colorIcon: '#919DEB',
    },
    Simple2Widget: {
      colorText: '#212121',
      colorIcon: '#919DEB',
    },
    LinkWidget: {
      styles: {
        color: '#919DEB'
      },
    },
    ChartWidget: {
      chart: {
        option: {
          defaulColor: '#919DEB'
        }
      }
    },
    LabelWidget: {
      styles: {
        color: '#212121'
      },
    }
  },
  'light.purple': {
    themeAuthBackground: '#FFFFFF',
    themeBackground: 'linear-gradient(180deg, #735A77 0%, #C999CF 100%)',
    themeWidgetBackground: '#FFFFFF',
    AreaContainerWidget: {
      backgroundColor: 'linear-gradient(180deg, #735A77 0%, #C999CF 100%)'
    },
    TextboxWidget: {
      styles: {
        background: "transparent",
        color: '#959393'
      }
    },
    ButtonWidget: {
      color: '#FFFFFF',
      background: "#C58ECC"
    },
    Gauge1Widget: {
      colorText: '#212121',
      colorIcon: '#C58ECC',
      foregroundColor: '#C58ECC'
    },
    Gauge2Widget: {
      colorText: '#212121',
      colorIcon: '#C58ECC',
      foregroundColor: '#C58ECC'
    },
    Gauge3Widget: {
      colorText: '#212121',
      colorIcon: '#C58ECC',
      foregroundColor: '#C58ECC'
    },
    Simple1Widget: {
      colorText: '#212121',
      colorIcon: '#C58ECC',
    },
    Simple2Widget: {
      colorText: '#212121',
      colorIcon: '#C58ECC',
    },
    LinkWidget: {
      styles: {
        color: '#C58ECC'
      },
    },
    ChartWidget: {
      chart: {
        option: {
          defaulColor: '#C58ECC'
        }
      }
    },
    LabelWidget: {
      styles: {
        color: '#212121'
      },
    }
  },
  'light.pink': {
    themeAuthBackground: '#FFFFFF',
    themeBackground: 'linear-gradient(180deg, #82545F 0%, #E88DA3 100%)',
    themeWidgetBackground: '#FFFFFF',
    AreaContainerWidget: {
      backgroundColor: 'linear-gradient(180deg, #82545F 0%, #E88DA3 100%)'
    },
    TextboxWidget: {
      styles: {
        background: "transparent",
        color: '#959393'
      }
    },
    ButtonWidget: {
      color: '#FFFFFF',
      background: "#E8829A"
    },
    Gauge1Widget: {
      colorText: '#212121',
      colorIcon: '#E8829A',
      foregroundColor: '#E8829A'
    },
    Gauge2Widget: {
      colorText: '#212121',
      colorIcon: '#E8829A',
      foregroundColor: '#E8829A'
    },
    Gauge3Widget: {
      colorText: '#212121',
      colorIcon: '#E8829A',
      foregroundColor: '#E8829A'
    },
    Simple1Widget: {
      colorText: '#212121',
      colorIcon: '#E8829A',
    },
    Simple2Widget: {
      colorText: '#212121',
      colorIcon: '#E8829A',
    },
    LinkWidget: {
      styles: {
        color: '#E8829A'
      },
    },
    ChartWidget: {
      chart: {
        option: {
          defaulColor: '#E8829A'
        }
      }
    },
    LabelWidget: {
      styles: {
        color: '#212121'
      },
    }
  },
  'light.orange': {
    themeAuthBackground: '#FFFFFF',
    themeBackground: 'linear-gradient(180deg, #835651 0%, #EB9187 100%)',
    themeWidgetBackground: '#FFFFFF',
    AreaContainerWidget: {
      backgroundColor: 'linear-gradient(180deg, #835651 0%, #EB9187 100%)'
    },
    TextboxWidget: {
      styles: {
        background: "transparent",
        color: '#959393'
      }
    },
    ButtonWidget: {
      color: '#FFFFFF',
      background: "#EA857A"
    },
    Gauge1Widget: {
      colorText: '#212121',
      colorIcon: '#EA857A',
      foregroundColor: '#EA857A'
    },
    Gauge2Widget: {
      colorText: '#212121',
      colorIcon: '#EA857A',
      foregroundColor: '#EA857A'
    },
    Gauge3Widget: {
      colorText: '#212121',
      colorIcon: '#EA857A',
      foregroundColor: '#EA857A'
    },
    Simple1Widget: {
      colorText: '#212121',
      colorIcon: '#EA857A',
    },
    Simple2Widget: {
      colorText: '#212121',
      colorIcon: '#EA857A',
    },
    LinkWidget: {
      styles: {
        color: '#EA857A'
      },
    },
    ChartWidget: {
      chart: {
        option: {
          defaulColor: '#EA857A'
        }
      }
    },
    LabelWidget: {
      styles: {
        color: '#212121'
      },
    }
  },
  'light.lightGreen': {
    themeAuthBackground: '#FFFFFF',
    themeBackground: 'linear-gradient(180deg, #617651 0%, #A6CF87 100%)',
    themeWidgetBackground: '#FFFFFF',
    AreaContainerWidget: {
      backgroundColor: 'linear-gradient(180deg, #617651 0%, #A6CF87 100%)'
    },
    TextboxWidget: {
      styles: {
        background: "transparent",
        color: '#959393'
      }
    },
    ButtonWidget: {
      color: '#FFFFFF',
      background: "#9DCB7A"
    },
    Gauge1Widget: {
      colorText: '#212121',
      colorIcon: '#9DCB7A',
      foregroundColor: '#9DCB7A'
    },
    Gauge2Widget: {
      colorText: '#212121',
      colorIcon: '#9DCB7A',
      foregroundColor: '#9DCB7A'
    },
    Gauge3Widget: {
      colorText: '#212121',
      colorIcon: '#9DCB7A',
      foregroundColor: '#9DCB7A'
    },
    Simple1Widget: {
      colorText: '#212121',
      colorIcon: '#9DCB7A',
    },
    Simple2Widget: {
      colorText: '#212121',
      colorIcon: '#9DCB7A',
    },
    LinkWidget: {
      styles: {
        color: '#9DCB7A'
      },
    },
    ChartWidget: {
      chart: {
        option: {
          defaulColor: '#9DCB7A'
        }
      }
    },
    LabelWidget: {
      styles: {
        color: '#212121'
      },
    }
  },
  'light.darkGreen': {
    themeAuthBackground: '#FFFFFF',
    themeBackground: 'linear-gradient(180deg, #304724 0%, #4F6C5B 0%, #80B898 100%)',
    themeWidgetBackground: '#FFFFFF',
    AreaContainerWidget: {
      backgroundColor: 'linear-gradient(180deg, #304724 0%, #4F6C5B 0%, #80B898 100%)'
    },
    TextboxWidget: {
      styles: {
        background: "transparent",
        color: '#959393'
      }
    },
    ButtonWidget: {
      color: '#FFFFFF',
      background: "#73B18D"
    },
    Gauge1Widget: {
      colorText: '#212121',
      colorIcon: '#73B18D',
      foregroundColor: '#73B18D'
    },
    Gauge2Widget: {
      colorText: '#212121',
      colorIcon: '#73B18D',
      foregroundColor: '#73B18D'
    },
    Gauge3Widget: {
      colorText: '#212121',
      colorIcon: '#73B18D',
      foregroundColor: '#73B18D'
    },
    Simple1Widget: {
      colorText: '#212121',
      colorIcon: '#73B18D',
    },
    Simple2Widget: {
      colorText: '#212121',
      colorIcon: '#73B18D',
    },
    LinkWidget: {
      styles: {
        color: '#73B18D'
      },
    },
    ChartWidget: {
      chart: {
        option: {
          defaulColor: '#73B18D'
        }
      }
    },
    LabelWidget: {
      styles: {
        color: '#212121'
      }
    }
  },
  'light.teal': {
    themeAuthBackground: '#FFFFFF',
    themeBackground: 'linear-gradient(180deg, #304724 0%, #4C6966 0%, #7EB6B2 100%)',
    themeWidgetBackground: '#FFFFFF',
    AreaContainerWidget: {
      backgroundColor: 'linear-gradient(180deg, #304724 0%, #4C6966 0%, #7EB6B2 100%)'
    },
    TextboxWidget: {
      styles: {
        background: "transparent",
        color: '#959393'
      }
    },
    ButtonWidget: {
      color: '#FFFFFF',
      background: "#70AFAA"
    },
    Gauge1Widget: {
      colorText: '#212121',
      colorIcon: '#70AFAA',
      foregroundColor: '#70AFAA'
    },
    Gauge2Widget: {
      colorText: '#212121',
      colorIcon: '#70AFAA',
      foregroundColor: '#70AFAA'
    },
    Gauge3Widget: {
      colorText: '#212121',
      colorIcon: '#70AFAA',
      foregroundColor: '#70AFAA'
    },
    Simple1Widget: {
      colorText: '#212121',
      colorIcon: '#70AFAA',
    },
    Simple2Widget: {
      colorText: '#212121',
      colorIcon: '#70AFAA',
    },
    LinkWidget: {
      styles: {
        color: '#70AFAA'
      },
    },
    ChartWidget: {
      chart: {
        option: {
          defaulColor: '#70AFAA'
        }
      }
    },
    LabelWidget: {
      styles: {
        color: '#212121'
      }
    }
  },
});


/***/ }),

/***/ "./src/app/shared/components/breadcrumb/breadcrumb.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/breadcrumb/breadcrumb.component.ts ***!
  \**********************************************************************/
/*! exports provided: BreadcrumbComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbComponent", function() { return BreadcrumbComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function BreadcrumbComponent_ng_container_2_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BreadcrumbComponent_ng_container_2_li_1_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const row_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.openUrl(row_r15.url); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r15.label);
} }
function BreadcrumbComponent_ng_container_2_li_2_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BreadcrumbComponent_ng_container_2_li_2_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const row_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r23.openUrl(row_r15.url); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r15.label);
} }
function BreadcrumbComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BreadcrumbComponent_ng_container_2_li_1_Template, 3, 1, "li", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, BreadcrumbComponent_ng_container_2_li_2_Template, 2, 1, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const last_r16 = ctx.last;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !last_r16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", last_r16);
} }
class BreadcrumbComponent {
    constructor(router) {
        this.router = router;
        this.model = [];
    }
    ngOnInit() {
    }
    openUrl(url) {
        if (url) {
            this.router.navigateByUrl(url);
        }
    }
}
BreadcrumbComponent.ɵfac = function BreadcrumbComponent_Factory(t) { return new (t || BreadcrumbComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
BreadcrumbComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BreadcrumbComponent, selectors: [["app-breadcrumb"]], inputs: { model: "model" }, decls: 3, vars: 1, consts: [["aria-label", "breadcrumb"], [1, "breadcrumb"], [4, "ngFor", "ngForOf"], ["class", "breadcrumb-item cursor_pointer", 4, "ngIf"], ["class", "breadcrumb-item cursor_text active", "aria-current", "page", 3, "click", 4, "ngIf"], [1, "breadcrumb-item", "cursor_pointer"], [3, "click"], ["aria-current", "page", 1, "breadcrumb-item", "cursor_text", "active", 3, "click"]], template: function BreadcrumbComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ol", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, BreadcrumbComponent_ng_container_2_Template, 3, 2, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.model);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: ["@charset \"UTF-8\";\n  .breadcrumb {\n  padding: 0;\n  margin-bottom: 0;\n  background: unset;\n}\n  .breadcrumb .breadcrumb-item {\n  display: flex;\n  align-items: center;\n  font-size: 18px;\n  font-family: \"SF Pro Text-Medium\";\n}\n  .breadcrumb .breadcrumb-item a {\n  color: #FFFFFF;\n  opacity: 0.5;\n}\n  .breadcrumb .breadcrumb-item + .breadcrumb-item::before {\n  font: 25px/1 \"Feather\";\n  content: \"\uE930\";\n}\n  .breadcrumb .breadcrumb-item + .breadcrumb-item.active::before {\n  color: #FFFFFF;\n}\n  .breadcrumb .breadcrumb-item.active {\n  color: #FFFFFF;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3Ztcy1zaXRlL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvYnJlYWRjcnVtYi9icmVhZGNydW1iLmNvbXBvbmVudC5zY3NzIiwicHJvamVjdHMvdm1zLXNpdGUvc3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9icmVhZGNydW1iL0U6XFxQcm9qZWN0XFxhaXMtcG9jL3Byb2plY3RzXFx2bXMtc2l0ZVxcc3JjXFxhcHBcXHNoYXJlZFxcY29tcG9uZW50c1xcYnJlYWRjcnVtYlxcYnJlYWRjcnVtYi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNDZDtFQUNFLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FEQ0o7QUNDSTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQ0FBQTtBRENOO0FDQ007RUFDRSxjQUFBO0VBQ0EsWUFBQTtBRENSO0FDR1E7RUFDRSxzQkFBQTtFQUNBLFlBQUE7QUREVjtBQ0lVO0VBQ0UsY0FBQTtBREZaO0FDT007RUFDRSxjQUFBO0FETFIiLCJmaWxlIjoicHJvamVjdHMvdm1zLXNpdGUvc3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9icmVhZGNydW1iL2JyZWFkY3J1bWIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG46Om5nLWRlZXAgLmJyZWFkY3J1bWIge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kOiB1bnNldDtcbn1cbjo6bmctZGVlcCAuYnJlYWRjcnVtYiAuYnJlYWRjcnVtYi1pdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LWZhbWlseTogXCJTRiBQcm8gVGV4dC1NZWRpdW1cIjtcbn1cbjo6bmctZGVlcCAuYnJlYWRjcnVtYiAuYnJlYWRjcnVtYi1pdGVtIGEge1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgb3BhY2l0eTogMC41O1xufVxuOjpuZy1kZWVwIC5icmVhZGNydW1iIC5icmVhZGNydW1iLWl0ZW0gKyAuYnJlYWRjcnVtYi1pdGVtOjpiZWZvcmUge1xuICBmb250OiAyNXB4LzEgXCJGZWF0aGVyXCI7XG4gIGNvbnRlbnQ6IFwi7qSwXCI7XG59XG46Om5nLWRlZXAgLmJyZWFkY3J1bWIgLmJyZWFkY3J1bWItaXRlbSArIC5icmVhZGNydW1iLWl0ZW0uYWN0aXZlOjpiZWZvcmUge1xuICBjb2xvcjogI0ZGRkZGRjtcbn1cbjo6bmctZGVlcCAuYnJlYWRjcnVtYiAuYnJlYWRjcnVtYi1pdGVtLmFjdGl2ZSB7XG4gIGNvbG9yOiAjRkZGRkZGO1xufSIsIjo6bmctZGVlcCB7XHJcbiAgLmJyZWFkY3J1bWIge1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiB1bnNldDtcclxuXHJcbiAgICAuYnJlYWRjcnVtYi1pdGVtIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICBmb250LWZhbWlseTogXCJTRiBQcm8gVGV4dC1NZWRpdW1cIjtcclxuXHJcbiAgICAgIGEge1xyXG4gICAgICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgICAgIG9wYWNpdHk6IDAuNTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJisuYnJlYWRjcnVtYi1pdGVtIHtcclxuICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgZm9udDogMjVweC8xIFwiRmVhdGhlclwiO1xyXG4gICAgICAgICAgY29udGVudDogXCJcXGU5MzBcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgJi5hY3RpdmUge1xyXG4gICAgICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAmLmFjdGl2ZSB7XHJcbiAgICAgICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BreadcrumbComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-breadcrumb',
                templateUrl: './breadcrumb.component.html',
                styleUrls: ['./breadcrumb.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, { model: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/components/topbar-preview/topbar-preview.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/shared/components/topbar-preview/topbar-preview.component.ts ***!
  \******************************************************************************/
/*! exports provided: TopbarPreviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopbarPreviewComponent", function() { return TopbarPreviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_example__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/example */ "./src/app/services/example.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../breadcrumb/breadcrumb.component */ "./src/app/shared/components/breadcrumb/breadcrumb.component.ts");
/* harmony import */ var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/collapse */ "../../node_modules/ngx-bootstrap/__ivy_ngcc__/collapse/fesm2015/ngx-bootstrap-collapse.js");







function TopbarPreviewComponent_ng_template_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-breadcrumb", 46);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("model", ctx_r0.breadcumbs);
} }
const _c0 = function () { return ["/private"]; };
const _c1 = function (a0) { return { page: a0 }; };
const _c2 = function (a0) { return { "color": a0 }; };
function TopbarPreviewComponent_ng_template_44_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "dashboard");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c1, item_r5.link));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c2, ctx_r4.globalConfig == null ? null : ctx_r4.globalConfig.ButtonWidget.background));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r5.name);
} }
const _c3 = function (a0) { return { "background": a0 }; };
function TopbarPreviewComponent_ng_template_44_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TopbarPreviewComponent_ng_template_44_ng_container_6_Template, 7, 9, "ng-container", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "img", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TopbarPreviewComponent_ng_template_44_Template_img_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.onSettingDashboard(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "i", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TopbarPreviewComponent_ng_template_44_Template_i_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.prevPage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "i", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TopbarPreviewComponent_ng_template_44_Template_i_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.nextPage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.getDashboardName(), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c3, ctx_r1.globalConfig == null ? null : ctx_r1.globalConfig.AreaContainerWidget.backgroundColor));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.dashboardItems);
} }
function TopbarPreviewComponent_div_45_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TopbarPreviewComponent_div_45_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.onRoleManagement(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Role Management");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TopbarPreviewComponent_div_45_Template_div_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.onCreateMember(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Create Member");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TopbarPreviewComponent_div_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r13 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("collapse", !ctx_r3.isCollapsed);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c1, item_r13.link));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r13.name);
} }
const _c4 = function (a0) { return { "d-flex justify-content-between": a0 }; };
const _c5 = function () { return { page: "all-thing" }; };
const _c6 = function () { return { page: "user-management" }; };
const _c7 = function () { return { page: "role-management" }; };
class TopbarPreviewComponent {
    constructor(router, route) {
        this.router = router;
        this.route = route;
        this.breadcumbs = [];
        this.sidebarActive = false;
        this.isShowLogo = true;
        this.isCollapsed = false;
        this.dashboardItems = [];
        this.route.queryParams.subscribe(params => {
            this.queryParamsPage = params['page'];
        });
    }
    ngOnInit() {
        Object.keys(_services_example__WEBPACK_IMPORTED_MODULE_1__["default"]).map((key) => {
            if (_services_example__WEBPACK_IMPORTED_MODULE_1__["default"][key].type == 'dashboard') {
                this.dashboardItems.push({
                    link: key,
                    name: _services_example__WEBPACK_IMPORTED_MODULE_1__["default"][key].name
                });
            }
        });
    }
    move() {
        this.sidebarActive = !this.sidebarActive;
        this.isCollapsed = false;
    }
    nextPage() {
        let i = this.dashboardItems.findIndex((el) => el.link == this.queryParamsPage);
        if (this.dashboardItems[i + 1]) {
            this.router.navigateByUrl('/private?page=' + this.dashboardItems[i + 1].link);
        }
        else {
            this.router.navigateByUrl('/private?page=' + this.dashboardItems[0].link);
        }
    }
    prevPage() {
        let i = this.dashboardItems.findIndex((el) => el.link == this.queryParamsPage);
        if (this.dashboardItems[i - 1]) {
            this.router.navigateByUrl('/private?page=' + this.dashboardItems[i - 1].link);
        }
        else {
            this.router.navigateByUrl('/private?page=' + this.dashboardItems[this.dashboardItems.length - 1].link);
        }
    }
    editProfile() {
        this.router.navigateByUrl('/public?page=user-information');
    }
    changePassword() {
        this.router.navigateByUrl('/public?page=user-information');
    }
    onLogout() {
        localStorage.removeItem('token');
        this.router.navigateByUrl('/public?page=login');
    }
    getDashboardName() {
        const item = this.dashboardItems.find(f => f.link === this.route.snapshot.queryParams['page']);
        return item && item['name'];
    }
    onRoleManagement() {
        this.router.navigateByUrl('private?page=role-management');
    }
    onCreateMember() {
        this.router.navigateByUrl('private?page=create-member');
    }
    onSettingDashboard() {
        this.router.navigateByUrl('private?page=dashboard-management');
    }
}
TopbarPreviewComponent.ɵfac = function TopbarPreviewComponent_Factory(t) { return new (t || TopbarPreviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
TopbarPreviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TopbarPreviewComponent, selectors: [["app-topbar-preview"]], inputs: { breadcumbs: "breadcumbs", pageType: "pageType", globalConfig: "globalConfig" }, decls: 78, vars: 44, consts: [[1, "topbar"], [1, "overlay1"], [1, "topbar__logo", "position-relative", 2, "z-index", "1"], [1, "fas", "fa-bars", "fa-2x", "cursor_pointer", 2, "font-size", "21px", 3, "click"], [1, "active_resizers"], ["alt", "logo", 3, "src"], [1, "topbar__search", "position-relative", 2, "z-index", "1"], [1, "search-group"], [1, "feather-search"], ["type", "text", "placeholder", "Search", 1, "font-regular", 2, "font-size", "16px"], [1, "topbar__profile", "position-relative", 2, "z-index", "2"], [1, "avatar"], ["src", "https://i0.wp.com/danongonline.com.vn/wp-content/uploads/2018/02/anh-girl-xinh-9x-kute-24.jpg", "width", "48", "height", "48", "alt", "avatar"], [1, "dropdown", "cursor_pointer", "ml-sm-2", "ml-md-3", "dropdown2"], ["id", "dropdownMenuButton", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "d-table-cell", "align-middle", "dropdown-toggle"], ["aria-labelledby", "dropdownMenuButton", 1, "dropdown-menu", 3, "ngStyle"], [1, "_user"], ["src", "https://i0.wp.com/danongonline.com.vn/wp-content/uploads/2018/02/anh-girl-xinh-9x-kute-24.jpg", "alt", "avatar"], [1, "_profile"], [1, "_name"], [1, "_role"], [1, "_edit", "cursor_pointer", 3, "click"], [1, "fas", "fa-cog", 3, "ngStyle"], [1, "_change_password", "cursor_pointer", 3, "click"], [1, "material-icons", 3, "ngStyle"], [1, "_logout", "cursor_pointer", 3, "click"], [1, "feather-log-out"], [1, "title-manager", "text-capitalize"], [1, "overlay2"], [3, "ngClass"], [3, "ngIf"], ["class", "member_link", 4, "ngIf"], [1, "sidebar", 3, "ngClass", "ngStyle"], [1, "sidebar__logo"], [1, "container_link"], [1, "link", 3, "click"], [1, "dashboard"], ["src", "assets/images/Icon-Dashboard-White.png", "alt", "Icon-Dashboard-White"], [1, "feather-chevron-up", 3, "hidden"], [1, "feather-chevron-down", 3, "hidden"], ["class", "link", 3, "collapse", 4, "ngFor", "ngForOf"], [1, "link"], ["routerLinkActive", "active", 3, "routerLink", "queryParams"], ["src", "assets/images/Icon-All Thing-White.png", "alt", "Icon-Dashboard-White"], ["src", "assets/images/Icon-User-White.png", "alt", "Icon-Dashboard-White"], ["src", "assets/images/Icon-Role-White.png", "alt", "Icon-Dashboard-White"], [3, "model"], [1, "d-flex", "justify-content-between", "align-items-center", "position-relative"], [1, "d-flex", "align-items-center"], [1, "dropdown", "cursor_pointer", "dropdown1"], ["aria-labelledby", "dropdownMenuButton", 1, "dropdown-menu", "scroll-gray", 3, "ngStyle"], [4, "ngFor", "ngForOf"], [1, "vertical_line"], ["src", "assets/images/Icon-Dashboard Edit-White.png", "alt", "Icon-Dashboard Edit-White", 1, "cursor_pointer", 3, "click"], [1, "feather-arrow-left", "mx-2", "cursor_pointer", 3, "click"], [1, "feather-arrow-right", "mx-2", "cursor_pointer", 3, "click"], [1, "dropdown-item", 3, "routerLink", "queryParams"], [1, "material-icons", "arrow-explore", 3, "ngStyle"], [1, "member_link"], [1, "cursor_pointer", 3, "click"], [1, "fas", "fa-users-cog"], [1, "v_line"], [1, "fas", "fa-user-plus"], [1, "link", 3, "collapse"], ["routerLinkActive", "active", 2, "margin-left", "40px", 3, "routerLink", "queryParams"]], template: function TopbarPreviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TopbarPreviewComponent_Template_i_click_3_listener() { return ctx.move(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Rachel Bradley ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Rachel Bradley ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TopbarPreviewComponent_Template_div_click_25_listener() { return ctx.editProfile(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Edit Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TopbarPreviewComponent_Template_div_click_29_listener() { return ctx.changePassword(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "https");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Change password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TopbarPreviewComponent_Template_div_click_35_listener() { return ctx.onLogout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Log out");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, TopbarPreviewComponent_ng_template_43_Template, 1, 1, "ng-template", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, TopbarPreviewComponent_ng_template_44_Template, 12, 5, "ng-template", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, TopbarPreviewComponent_div_45_Template, 10, 0, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TopbarPreviewComponent_Template_i_click_49_listener() { return ctx.move(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TopbarPreviewComponent_Template_div_click_52_listener() { return ctx.isCollapsed = !ctx.isCollapsed; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "img", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "i", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "i", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](60, TopbarPreviewComponent_div_60_Template, 3, 7, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "a", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "img", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "All Thing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "a", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "img", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "User Management");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "a", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "img", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Role Management");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disable", !ctx.isShowLogo)("invisible", !ctx.isShowLogo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.logoUrl ? ctx.logoUrl : "assets/images/Graphic-Sample logo 2.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](28, _c3, ctx.globalConfig == null ? null : ctx.globalConfig.AreaContainerWidget.backgroundColor));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](30, _c2, ctx.globalConfig == null ? null : ctx.globalConfig.ButtonWidget.background));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](32, _c2, ctx.globalConfig == null ? null : ctx.globalConfig.ButtonWidget.background));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](34, _c4, ctx.queryParamsPage == "user-management"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.pageType != "dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.pageType == "dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.queryParamsPage == "user-management");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.sidebarActive === true ? "sidebar-move" : "sidebar")("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](36, _c3, ctx.globalConfig == null ? null : ctx.globalConfig.AreaContainerWidget.backgroundColor));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disable", !ctx.isShowLogo)("invisible", !ctx.isShowLogo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.logoUrl ? ctx.logoUrl : "assets/images/Graphic-Sample logo 2.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.isCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.isCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.dashboardItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](38, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](39, _c5));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](40, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](41, _c6));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](42, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](43, _c7));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_4__["BreadcrumbComponent"], ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_5__["CollapseDirective"]], styles: [".title-manager[_ngcontent-%COMP%] {\n  width: 100%;\n  color: #fff;\n  padding: 0 30px;\n  border-bottom: solid 1px #FFFFFF1A;\n  font-size: 1.3rem;\n  line-height: 50px;\n  height: 55px;\n  position: relative;\n}\n.title-manager[_ngcontent-%COMP%]   .member_link[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-right: 62px;\n  z-index: 20;\n}\n.title-manager[_ngcontent-%COMP%]   .member_link[_ngcontent-%COMP%]   .v_line[_ngcontent-%COMP%] {\n  width: 0px;\n  height: 24px;\n  border: 1px solid #FFFFFF;\n  opacity: 0.2;\n  margin: 0 30px;\n}\n.title-manager[_ngcontent-%COMP%]   .member_link[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin: 0 10px;\n}\n.title-manager[_ngcontent-%COMP%]   .member_link[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #FFFFFF;\n  font-size: 18px;\n  font-family: \"SF Pro Text-Medium\";\n}\n.sidebar[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  top: 0;\n  display: flex;\n  flex-direction: column;\n  width: 300px;\n  height: 100vh;\n  z-index: 998;\n  transform: translateX(-100%);\n  transition: transform 0.4s ease-out;\n}\n.sidebar__logo[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 55px;\n  padding-left: 10px;\n  padding-right: 10px;\n}\n.sidebar__logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 74px;\n  height: 30px;\n}\n.sidebar__logo[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 1rem;\n}\n.sidebar[_ngcontent-%COMP%]   .container_link[_ngcontent-%COMP%] {\n  padding: 0 8px;\n}\n.sidebar[_ngcontent-%COMP%]   .container_link[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  color: #ffffff;\n  border: 1px solid;\n  opacity: 0.1;\n}\n.sidebar[_ngcontent-%COMP%]   .container_link[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%]:nth-child(1) {\n  margin-top: 0px;\n  margin-bottom: 22px;\n}\n.sidebar[_ngcontent-%COMP%]   .container_link[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%]:not(:nth-child(1)) {\n  margin: 22px 0;\n}\n.sidebar[_ngcontent-%COMP%]   .container_link[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%] {\n  margin-left: 14px;\n}\n.sidebar[_ngcontent-%COMP%]   .container_link[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .sidebar[_ngcontent-%COMP%]   .container_link[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .sidebar[_ngcontent-%COMP%]   .container_link[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  opacity: 0.6;\n}\n.sidebar[_ngcontent-%COMP%]   .container_link[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  opacity: 1 !important;\n}\n.sidebar[_ngcontent-%COMP%]   .container_link[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .sidebar[_ngcontent-%COMP%]   .container_link[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  opacity: 1 !important;\n}\n.sidebar[_ngcontent-%COMP%]   .container_link[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n}\n.sidebar[_ngcontent-%COMP%]   .container_link[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-left: 20px;\n  color: #ffffff;\n  font-size: 16px;\n  font-family: \"SF Pro Text-Medium\";\n}\n.sidebar[_ngcontent-%COMP%]   .container_link[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #ffffff;\n  font-size: 16px;\n  font-family: \"SF Pro Text-Medium\";\n  text-decoration: none;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  margin-top: 22px;\n}\n.sidebar[_ngcontent-%COMP%]   .container_link[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]   .dashboard[_ngcontent-%COMP%] {\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.sidebar[_ngcontent-%COMP%]   .container_link[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]   .dashboard[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.sidebar[_ngcontent-%COMP%]   .container_link[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]   .dashboard[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #ffffff;\n  font-size: 20px !important;\n}\n.sidebar-move[_ngcontent-%COMP%] {\n  transform: translateX(0%);\n}\n.topbar[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 55px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 30px;\n  position: relative;\n}\n.topbar__logo[_ngcontent-%COMP%] {\n  height: 100%;\n  display: flex;\n  align-items: center;\n}\n.topbar__logo[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 1.3rem;\n  margin-right: 29px;\n}\n.topbar__logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 74px;\n  height: 30px;\n}\n.topbar__logo[_ngcontent-%COMP%]   img.disable[_ngcontent-%COMP%] {\n  opacity: 0.2;\n}\n.topbar__search[_ngcontent-%COMP%] {\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: row;\n  width: 300px;\n}\n.topbar__search[_ngcontent-%COMP%]   .search-group[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 30px;\n  display: flex;\n  align-items: center;\n  border-radius: 8px;\n  padding-left: 1rem;\n  padding-right: 1rem;\n  background: #FFFFFF1A;\n}\n.topbar__search[_ngcontent-%COMP%]   .search-group[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 1rem;\n  font-size: 1.3rem;\n  color: #fff;\n}\n.topbar__search[_ngcontent-%COMP%]   .search-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border: none;\n  outline: none;\n  color: #fff;\n}\n.topbar__search[_ngcontent-%COMP%]   .search-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n.topbar__search[_ngcontent-%COMP%]   .search-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-input-placeholder {\n  color: #b1b1b1;\n  font-size: 1.05rem;\n}\n.topbar__search[_ngcontent-%COMP%]   .search-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-moz-placeholder {\n  color: #b1b1b1;\n  font-size: 1.05rem;\n}\n.topbar__search[_ngcontent-%COMP%]   .search-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-ms-input-placeholder {\n  color: #b1b1b1;\n  font-size: 1.05rem;\n}\n.topbar__search[_ngcontent-%COMP%]   .search-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: #b1b1b1;\n  font-size: 1.05rem;\n}\n.topbar__profile[_ngcontent-%COMP%] {\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: row;\n}\n.topbar__profile[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  border: 2px solid #fff;\n  overflow: hidden;\n}\n.topbar__profile[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.vertical_line[_ngcontent-%COMP%] {\n  border-left: solid 2px;\n  height: 35px;\n  margin: 0 20px 0 10px;\n}\n.dropdown[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.dropdown[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-family: \"SF Pro Text-Medium\";\n}\n.dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n  max-height: 201px;\n  line-height: normal;\n  padding: 0;\n  color: #ffffff;\n  border: 1px solid #f9fafd33;\n  margin-left: -47px;\n  margin-top: 17px;\n}\n.dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  height: 1px;\n  background-color: #ccc;\n  border: none;\n  opacity: 0.2;\n}\n.dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   ._user[_ngcontent-%COMP%] {\n  width: 137px;\n  height: 32px;\n  margin-left: 10px;\n  margin-top: 15px;\n  display: flex;\n  align-items: center;\n}\n.dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   ._user[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n  border: 2px solid #fff;\n  overflow: hidden;\n  margin-right: 12px;\n}\n.dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   ._user[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   ._user[_ngcontent-%COMP%]   ._profile[_ngcontent-%COMP%] {\n  width: 101px;\n  display: inline-block;\n}\n.dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   ._user[_ngcontent-%COMP%]   ._profile[_ngcontent-%COMP%]   ._name[_ngcontent-%COMP%] {\n  font-family: \"SF Pro Text-Medium\";\n  font-size: 14px;\n  width: 101px;\n}\n.dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   ._user[_ngcontent-%COMP%]   ._profile[_ngcontent-%COMP%]   ._role[_ngcontent-%COMP%] {\n  font-family: \"SF Pro Text-Medium\";\n  font-size: 12px;\n  width: 37px;\n}\n.dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   ._edit[_ngcontent-%COMP%] {\n  width: 110px;\n  height: 24px;\n  margin-left: 10px;\n  margin-top: 20px;\n}\n.dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   ._edit[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #9fffb1;\n  margin-left: 5px;\n}\n.dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   ._edit[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-family: \"SF Pro Text-Medium\";\n  margin-left: 17px;\n}\n.dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   ._change_password[_ngcontent-%COMP%] {\n  width: 157px;\n  height: 24px;\n  margin-left: 10px;\n  margin-top: 16px;\n}\n.dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   ._change_password[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #9fffb1;\n  margin-left: 5px;\n  vertical-align: middle;\n}\n.dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   ._change_password[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-family: \"SF Pro Text-Medium\";\n  margin-left: 17px;\n  vertical-align: middle;\n}\n.dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   ._logout[_ngcontent-%COMP%] {\n  width: 157px;\n  height: 24px;\n  margin: 16px 2px;\n}\n.dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   ._logout[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 19px;\n  color: #f46363;\n  margin-left: 15px;\n  vertical-align: middle;\n}\n.dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   ._logout[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-family: \"SF Pro Text-Medium\";\n  margin-left: 17px;\n  vertical-align: middle;\n  color: #f46363;\n}\n.dropdown1[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n  min-width: 200px;\n  margin-left: 0 !important;\n  margin-top: 5px !important;\n}\n.dropdown1[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  height: 50px;\n  padding: 0 20px;\n}\n.dropdown1[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #FFFFFF;\n  font-size: 14px;\n  font-family: \"SF Pro Text-Medium\";\n  margin: 0 0 0 20px;\n}\n.dropdown1[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:focus, .dropdown1[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:hover {\n  color: unset !important;\n  text-decoration: unset !important;\n  background-color: unset !important;\n}\n.dropdown1[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  margin: 0 10px;\n}\n.dropdown2[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n  width: 200px;\n}\n.overlay1[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: #212121;\n  opacity: 0.1;\n  z-index: 0;\n}\n.overlay2[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: #FFFFFF;\n  opacity: 0.05;\n  z-index: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3Ztcy1zaXRlL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvdG9wYmFyLXByZXZpZXcvRTpcXFByb2plY3RcXGFpcy1wb2MvcHJvamVjdHNcXHZtcy1zaXRlXFxzcmNcXGFwcFxcc2hhcmVkXFxjb21wb25lbnRzXFx0b3BiYXItcHJldmlld1xcdG9wYmFyLXByZXZpZXcuY29tcG9uZW50LnNjc3MiLCJwcm9qZWN0cy92bXMtc2l0ZS9zcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3RvcGJhci1wcmV2aWV3L3RvcGJhci1wcmV2aWV3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU9BO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0Esa0NBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDTkY7QURRRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FDTko7QURRSTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQ05OO0FEU0k7RUFDRSxjQUFBO0FDUE47QURVSTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUNBQUE7QUNSTjtBRGFBO0VBQ0Usa0JBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUVBLFlBQUE7RUFDQSxhQUFBO0VBRUEsWUFBQTtFQUNBLDRCQUFBO0VBQ0EsbUNBQUE7QUNaRjtBRGNFO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ1pKO0FEY0k7RUFDRSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDWk47QURlSTtFQUNFLFdBQUE7RUFDQSxlQUFBO0FDYk47QURpQkU7RUFDRSxjQUFBO0FDZko7QURpQkk7RUFVRSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FDeEJOO0FEYU07RUFDRSxlQUFBO0VBQ0EsbUJBQUE7QUNYUjtBRGNNO0VBQ0UsY0FBQTtBQ1pSO0FEb0JJO0VBQ0UsaUJBQUE7QUNsQk47QURvQk07OztFQUdFLFlBQUE7QUNsQlI7QURxQk07RUFDRSxxQkFBQTtBQ25CUjtBRHFCUTs7RUFFRSxxQkFBQTtBQ25CVjtBRHVCTTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDckJSO0FEd0JNO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlDQUFBO0FDdEJSO0FEeUJNO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQ0FBQTtFQUVBLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ3hCUjtBRDJCTTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQ3pCUjtBRDJCUTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQ3pCVjtBRDRCUTtFQUNFLGNBQUE7RUFDQSwwQkFBQTtBQzFCVjtBRGlDQTtFQUNFLHlCQUFBO0FDOUJGO0FEaUNBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQzlCRjtBRGdDRTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUM5Qko7QURnQ0k7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQzlCTjtBRGlDSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDL0JOO0FEaUNNO0VBQ0UsWUFBQTtBQy9CUjtBRG9DRTtFQUNFLFlBQUE7RUFoTUYsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQStMRSxZQUFBO0FDL0JKO0FEaUNJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQy9CTjtBRGlDTTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FDL0JSO0FEa0NNO0VBQ0UsNkJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7QUNoQ1I7QURrQ1E7RUFDRSxhQUFBO0FDaENWO0FEbUNRO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0FDakNWO0FEK0JRO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0FDakNWO0FEK0JRO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0FDakNWO0FEK0JRO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0FDakNWO0FEdUNFO0VBQ0UsWUFBQTtFQXZPRixhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FDbU1GO0FEb0NJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7QUNsQ047QURvQ007RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7QUNsQ1I7QUR3Q0E7RUFDRSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtBQ3JDRjtBRHlDQTtFQUNFLFdBQUE7QUN0Q0Y7QUR3Q0U7RUFDRSxlQUFBO0VBQ0EsaUNBQUE7QUN0Q0o7QUR5Q0U7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUN2Q0o7QUR5Q0k7RUFDRSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQ3ZDTjtBRDBDSTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQ3hDTjtBRDBDTTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUN4Q1I7QUQwQ1E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7QUN4Q1Y7QUQ0Q007RUFDRSxZQUFBO0VBQ0EscUJBQUE7QUMxQ1I7QUQ0Q1E7RUFDRSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FDMUNWO0FENkNRO0VBQ0UsaUNBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQzNDVjtBRGdESTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQzlDTjtBRGdETTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUM5Q1I7QURpRE07RUFDRSxlQUFBO0VBQ0EsaUNBQUE7RUFDQSxpQkFBQTtBQy9DUjtBRG1ESTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ2pETjtBRG1ETTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtBQ2pEUjtBRG9ETTtFQUNFLGVBQUE7RUFDQSxpQ0FBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7QUNsRFI7QURzREk7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDcEROO0FEc0RNO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0FDcERSO0FEdURNO0VBQ0UsZUFBQTtFQUNBLGlDQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7QUNyRFI7QUQ2REU7RUFDRSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsMEJBQUE7QUMxREo7QUQ0REk7RUFDRSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDMUROO0FENERNO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQ0FBQTtFQUNBLGtCQUFBO0FDMURSO0FENkRNO0VBRUUsdUJBQUE7RUFDQSxpQ0FBQTtFQUNBLGtDQUFBO0FDNURSO0FEZ0VJO0VBQ0UsY0FBQTtBQzlETjtBRHFFRTtFQUNFLFlBQUE7QUNsRUo7QURzRUE7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FDbkVGO0FEc0VBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtBQ25FRiIsImZpbGUiOiJwcm9qZWN0cy92bXMtc2l0ZS9zcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3RvcGJhci1wcmV2aWV3L3RvcGJhci1wcmV2aWV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1peGluIGZsZXhDZW50ZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG59XHJcblxyXG4udGl0bGUtbWFuYWdlciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgcGFkZGluZzogMCAzMHB4O1xyXG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjRkZGRkZGMUE7XHJcbiAgZm9udC1zaXplOiAxLjNyZW07XHJcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XHJcbiAgaGVpZ2h0OiA1NXB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgLm1lbWJlcl9saW5rIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDYycHg7XHJcbiAgICB6LWluZGV4OiAyMDtcclxuXHJcbiAgICAudl9saW5lIHtcclxuICAgICAgd2lkdGg6IDBweDtcclxuICAgICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjRkZGRkZGO1xyXG4gICAgICBvcGFjaXR5OiAwLjI7XHJcbiAgICAgIG1hcmdpbjogMCAzMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIGkge1xyXG4gICAgICBtYXJnaW46IDAgMTBweDtcclxuICAgIH1cclxuXHJcbiAgICBzcGFuIHtcclxuICAgICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgZm9udC1mYW1pbHk6IFwiU0YgUHJvIFRleHQtTWVkaXVtXCI7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uc2lkZWJhciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgdG9wOiAwO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgd2lkdGg6IDMwMHB4O1xyXG4gIGhlaWdodDogMTAwdmg7XHJcblxyXG4gIHotaW5kZXg6IDk5ODtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjRzIGVhc2Utb3V0O1xyXG5cclxuICAmX19sb2dvIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiA1NXB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuXHJcbiAgICBpbWcge1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIHdpZHRoOiA3NHB4O1xyXG4gICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgaSB7XHJcbiAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuY29udGFpbmVyX2xpbmsge1xyXG4gICAgcGFkZGluZzogMCA4cHg7XHJcblxyXG4gICAgaHIge1xyXG4gICAgICAmOm50aC1jaGlsZCgxKSB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIycHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICY6bm90KDpudGgtY2hpbGQoMSkpIHtcclxuICAgICAgICBtYXJnaW46IDIycHggMDtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkO1xyXG4gICAgICBvcGFjaXR5OiAwLjE7XHJcbiAgICB9XHJcblxyXG4gICAgLmxpbmsge1xyXG4gICAgICBtYXJnaW4tbGVmdDogMTRweDtcclxuXHJcbiAgICAgIGltZyxcclxuICAgICAgc3BhbixcclxuICAgICAgYSB7XHJcbiAgICAgICAgb3BhY2l0eTogMC42O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuYWN0aXZlIHtcclxuICAgICAgICBvcGFjaXR5OiAxICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgICAgIGltZyxcclxuICAgICAgICBzcGFuIHtcclxuICAgICAgICAgIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBzcGFuIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiU0YgUHJvIFRleHQtTWVkaXVtXCI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGEge1xyXG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBmb250LWZhbWlseTogXCJTRiBQcm8gVGV4dC1NZWRpdW1cIjtcclxuXHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjJweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmRhc2hib2FyZCB7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblxyXG4gICAgICAgICY+ZGl2IHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaSB7XHJcbiAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMjBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLnNpZGViYXItbW92ZSB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcclxufVxyXG5cclxuLnRvcGJhciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA1NXB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMCAzMHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgJl9fbG9nbyB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICBpIHtcclxuICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDI5cHg7XHJcbiAgICB9XHJcblxyXG4gICAgaW1nIHtcclxuICAgICAgd2lkdGg6IDc0cHg7XHJcbiAgICAgIGhlaWdodDogMzBweDtcclxuXHJcbiAgICAgICYuZGlzYWJsZSB7XHJcbiAgICAgICAgb3BhY2l0eTogMC4yO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmX19zZWFyY2gge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgQGluY2x1ZGUgZmxleENlbnRlcigpO1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG5cclxuICAgIC5zZWFyY2gtZ3JvdXAge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMXJlbTtcclxuICAgICAgcGFkZGluZy1yaWdodDogMXJlbTtcclxuICAgICAgYmFja2dyb3VuZDogI0ZGRkZGRjFBO1xyXG5cclxuICAgICAgaSB7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpbnB1dCB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcblxyXG4gICAgICAgICY6Zm9jdXMge1xyXG4gICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICY6OnBsYWNlaG9sZGVyIHtcclxuICAgICAgICAgIGNvbG9yOiAjYjFiMWIxO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxLjA1cmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJl9fcHJvZmlsZSB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBAaW5jbHVkZSBmbGV4Q2VudGVyKCk7XHJcblxyXG4gICAgLmF2YXRhciB7XHJcbiAgICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgICAgIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4udmVydGljYWxfbGluZSB7XHJcbiAgYm9yZGVyLWxlZnQ6IHNvbGlkIDJweDtcclxuICBoZWlnaHQ6IDM1cHg7XHJcbiAgbWFyZ2luOiAwIDIwcHggMCAxMHB4O1xyXG59XHJcblxyXG4vLyBEcm9wZG93biBiYXNlXHJcbi5kcm9wZG93biB7XHJcbiAgY29sb3I6ICNmZmY7XHJcblxyXG4gIHAge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFwiU0YgUHJvIFRleHQtTWVkaXVtXCI7XHJcbiAgfVxyXG5cclxuICAuZHJvcGRvd24tbWVudSB7XHJcbiAgICBtYXgtaGVpZ2h0OiAyMDFweDtcclxuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZjlmYWZkMzM7XHJcbiAgICBtYXJnaW4tbGVmdDogLTQ3cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxN3B4O1xyXG5cclxuICAgIGhyIHtcclxuICAgICAgaGVpZ2h0OiAxcHg7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XHJcbiAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgb3BhY2l0eTogMC4yO1xyXG4gICAgfVxyXG5cclxuICAgIC5fdXNlciB7XHJcbiAgICAgIHdpZHRoOiAxMzdweDtcclxuICAgICAgaGVpZ2h0OiAzMnB4O1xyXG4gICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgIC5hdmF0YXIge1xyXG4gICAgICAgIHdpZHRoOiAyNHB4O1xyXG4gICAgICAgIGhlaWdodDogMjRweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTJweDtcclxuXHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAuX3Byb2ZpbGUge1xyXG4gICAgICAgIHdpZHRoOiAxMDFweDtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblxyXG4gICAgICAgIC5fbmFtZSB7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogXCJTRiBQcm8gVGV4dC1NZWRpdW1cIjtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgIHdpZHRoOiAxMDFweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5fcm9sZSB7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogXCJTRiBQcm8gVGV4dC1NZWRpdW1cIjtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgIHdpZHRoOiAzN3B4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5fZWRpdCB7XHJcbiAgICAgIHdpZHRoOiAxMTBweDtcclxuICAgICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuXHJcbiAgICAgIGkge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBjb2xvcjogIzlmZmZiMTtcclxuICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBzcGFuIHtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiU0YgUHJvIFRleHQtTWVkaXVtXCI7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE3cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuX2NoYW5nZV9wYXNzd29yZCB7XHJcbiAgICAgIHdpZHRoOiAxNTdweDtcclxuICAgICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgbWFyZ2luLXRvcDogMTZweDtcclxuXHJcbiAgICAgIGkge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBjb2xvcjogIzlmZmZiMTtcclxuICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHNwYW4ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBmb250LWZhbWlseTogXCJTRiBQcm8gVGV4dC1NZWRpdW1cIjtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTdweDtcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLl9sb2dvdXQge1xyXG4gICAgICB3aWR0aDogMTU3cHg7XHJcbiAgICAgIGhlaWdodDogMjRweDtcclxuICAgICAgbWFyZ2luOiAxNnB4IDJweDtcclxuXHJcbiAgICAgIGkge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTlweDtcclxuICAgICAgICBjb2xvcjogI2Y0NjM2MztcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBzcGFuIHtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiU0YgUHJvIFRleHQtTWVkaXVtXCI7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE3cHg7XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICBjb2xvcjogI2Y0NjM2MztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gRHJvcGRvd24gbWVudSAxXHJcbi5kcm9wZG93bjEge1xyXG4gIC5kcm9wZG93bi1tZW51IHtcclxuICAgIG1pbi13aWR0aDogMjAwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLXRvcDogNXB4ICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgLmRyb3Bkb3duLWl0ZW0ge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgcGFkZGluZzogMCAyMHB4O1xyXG5cclxuICAgICAgcCB7XHJcbiAgICAgICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIlNGIFBybyBUZXh0LU1lZGl1bVwiO1xyXG4gICAgICAgIG1hcmdpbjogMCAwIDAgMjBweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgJjpmb2N1cyxcclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgY29sb3I6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bnNldCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBociB7XHJcbiAgICAgIG1hcmdpbjogMCAxMHB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gRHJvcGRvd24gbWVudSAyXHJcbi5kcm9wZG93bjIge1xyXG4gIC5kcm9wZG93bi1tZW51IHtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICB9XHJcbn1cclxuXHJcbi5vdmVybGF5MSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kOiAjMjEyMTIxO1xyXG4gIG9wYWNpdHk6IDAuMTtcclxuICB6LWluZGV4OiAwO1xyXG59XHJcblxyXG4ub3ZlcmxheTIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogI0ZGRkZGRjtcclxuICBvcGFjaXR5OiAwLjA1O1xyXG4gIHotaW5kZXg6IDA7XHJcbn1cclxuIiwiLnRpdGxlLW1hbmFnZXIge1xuICB3aWR0aDogMTAwJTtcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDAgMzBweDtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICNGRkZGRkYxQTtcbiAgZm9udC1zaXplOiAxLjNyZW07XG4gIGxpbmUtaGVpZ2h0OiA1MHB4O1xuICBoZWlnaHQ6IDU1cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi50aXRsZS1tYW5hZ2VyIC5tZW1iZXJfbGluayB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tcmlnaHQ6IDYycHg7XG4gIHotaW5kZXg6IDIwO1xufVxuLnRpdGxlLW1hbmFnZXIgLm1lbWJlcl9saW5rIC52X2xpbmUge1xuICB3aWR0aDogMHB4O1xuICBoZWlnaHQ6IDI0cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNGRkZGRkY7XG4gIG9wYWNpdHk6IDAuMjtcbiAgbWFyZ2luOiAwIDMwcHg7XG59XG4udGl0bGUtbWFuYWdlciAubWVtYmVyX2xpbmsgaSB7XG4gIG1hcmdpbjogMCAxMHB4O1xufVxuLnRpdGxlLW1hbmFnZXIgLm1lbWJlcl9saW5rIHNwYW4ge1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LWZhbWlseTogXCJTRiBQcm8gVGV4dC1NZWRpdW1cIjtcbn1cblxuLnNpZGViYXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDMwMHB4O1xuICBoZWlnaHQ6IDEwMHZoO1xuICB6LWluZGV4OiA5OTg7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjRzIGVhc2Utb3V0O1xufVxuLnNpZGViYXJfX2xvZ28ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogNTVweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xufVxuLnNpZGViYXJfX2xvZ28gaW1nIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogNzRweDtcbiAgaGVpZ2h0OiAzMHB4O1xufVxuLnNpZGViYXJfX2xvZ28gaSB7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDFyZW07XG59XG4uc2lkZWJhciAuY29udGFpbmVyX2xpbmsge1xuICBwYWRkaW5nOiAwIDhweDtcbn1cbi5zaWRlYmFyIC5jb250YWluZXJfbGluayBociB7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZDtcbiAgb3BhY2l0eTogMC4xO1xufVxuLnNpZGViYXIgLmNvbnRhaW5lcl9saW5rIGhyOm50aC1jaGlsZCgxKSB7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjJweDtcbn1cbi5zaWRlYmFyIC5jb250YWluZXJfbGluayBocjpub3QoOm50aC1jaGlsZCgxKSkge1xuICBtYXJnaW46IDIycHggMDtcbn1cbi5zaWRlYmFyIC5jb250YWluZXJfbGluayAubGluayB7XG4gIG1hcmdpbi1sZWZ0OiAxNHB4O1xufVxuLnNpZGViYXIgLmNvbnRhaW5lcl9saW5rIC5saW5rIGltZyxcbi5zaWRlYmFyIC5jb250YWluZXJfbGluayAubGluayBzcGFuLFxuLnNpZGViYXIgLmNvbnRhaW5lcl9saW5rIC5saW5rIGEge1xuICBvcGFjaXR5OiAwLjY7XG59XG4uc2lkZWJhciAuY29udGFpbmVyX2xpbmsgLmxpbmsgLmFjdGl2ZSB7XG4gIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcbn1cbi5zaWRlYmFyIC5jb250YWluZXJfbGluayAubGluayAuYWN0aXZlIGltZyxcbi5zaWRlYmFyIC5jb250YWluZXJfbGluayAubGluayAuYWN0aXZlIHNwYW4ge1xuICBvcGFjaXR5OiAxICFpbXBvcnRhbnQ7XG59XG4uc2lkZWJhciAuY29udGFpbmVyX2xpbmsgLmxpbmsgaW1nIHtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbn1cbi5zaWRlYmFyIC5jb250YWluZXJfbGluayAubGluayBzcGFuIHtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtZmFtaWx5OiBcIlNGIFBybyBUZXh0LU1lZGl1bVwiO1xufVxuLnNpZGViYXIgLmNvbnRhaW5lcl9saW5rIC5saW5rIGEge1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LWZhbWlseTogXCJTRiBQcm8gVGV4dC1NZWRpdW1cIjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDIycHg7XG59XG4uc2lkZWJhciAuY29udGFpbmVyX2xpbmsgLmxpbmsgLmRhc2hib2FyZCB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLnNpZGViYXIgLmNvbnRhaW5lcl9saW5rIC5saW5rIC5kYXNoYm9hcmQgPiBkaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnNpZGViYXIgLmNvbnRhaW5lcl9saW5rIC5saW5rIC5kYXNoYm9hcmQgaSB7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LXNpemU6IDIwcHggIWltcG9ydGFudDtcbn1cblxuLnNpZGViYXItbW92ZSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XG59XG5cbi50b3BiYXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1NXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAgMzBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnRvcGJhcl9fbG9nbyB7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi50b3BiYXJfX2xvZ28gaSB7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDEuM3JlbTtcbiAgbWFyZ2luLXJpZ2h0OiAyOXB4O1xufVxuLnRvcGJhcl9fbG9nbyBpbWcge1xuICB3aWR0aDogNzRweDtcbiAgaGVpZ2h0OiAzMHB4O1xufVxuLnRvcGJhcl9fbG9nbyBpbWcuZGlzYWJsZSB7XG4gIG9wYWNpdHk6IDAuMjtcbn1cbi50b3BiYXJfX3NlYXJjaCB7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIHdpZHRoOiAzMDBweDtcbn1cbi50b3BiYXJfX3NlYXJjaCAuc2VhcmNoLWdyb3VwIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMzBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBwYWRkaW5nLWxlZnQ6IDFyZW07XG4gIHBhZGRpbmctcmlnaHQ6IDFyZW07XG4gIGJhY2tncm91bmQ6ICNGRkZGRkYxQTtcbn1cbi50b3BiYXJfX3NlYXJjaCAuc2VhcmNoLWdyb3VwIGkge1xuICBtYXJnaW4tcmlnaHQ6IDFyZW07XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xuICBjb2xvcjogI2ZmZjtcbn1cbi50b3BiYXJfX3NlYXJjaCAuc2VhcmNoLWdyb3VwIGlucHV0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgY29sb3I6ICNmZmY7XG59XG4udG9wYmFyX19zZWFyY2ggLnNlYXJjaC1ncm91cCBpbnB1dDpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4udG9wYmFyX19zZWFyY2ggLnNlYXJjaC1ncm91cCBpbnB1dDo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogI2IxYjFiMTtcbiAgZm9udC1zaXplOiAxLjA1cmVtO1xufVxuLnRvcGJhcl9fcHJvZmlsZSB7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG4udG9wYmFyX19wcm9maWxlIC5hdmF0YXIge1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4udG9wYmFyX19wcm9maWxlIC5hdmF0YXIgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG5cbi52ZXJ0aWNhbF9saW5lIHtcbiAgYm9yZGVyLWxlZnQ6IHNvbGlkIDJweDtcbiAgaGVpZ2h0OiAzNXB4O1xuICBtYXJnaW46IDAgMjBweCAwIDEwcHg7XG59XG5cbi5kcm9wZG93biB7XG4gIGNvbG9yOiAjZmZmO1xufVxuLmRyb3Bkb3duIHAge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtZmFtaWx5OiBcIlNGIFBybyBUZXh0LU1lZGl1bVwiO1xufVxuLmRyb3Bkb3duIC5kcm9wZG93bi1tZW51IHtcbiAgbWF4LWhlaWdodDogMjAxcHg7XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gIHBhZGRpbmc6IDA7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZjlmYWZkMzM7XG4gIG1hcmdpbi1sZWZ0OiAtNDdweDtcbiAgbWFyZ2luLXRvcDogMTdweDtcbn1cbi5kcm9wZG93biAuZHJvcGRvd24tbWVudSBociB7XG4gIGhlaWdodDogMXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xuICBib3JkZXI6IG5vbmU7XG4gIG9wYWNpdHk6IDAuMjtcbn1cbi5kcm9wZG93biAuZHJvcGRvd24tbWVudSAuX3VzZXIge1xuICB3aWR0aDogMTM3cHg7XG4gIGhlaWdodDogMzJweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uZHJvcGRvd24gLmRyb3Bkb3duLW1lbnUgLl91c2VyIC5hdmF0YXIge1xuICB3aWR0aDogMjRweDtcbiAgaGVpZ2h0OiAyNHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1hcmdpbi1yaWdodDogMTJweDtcbn1cbi5kcm9wZG93biAuZHJvcGRvd24tbWVudSAuX3VzZXIgLmF2YXRhciBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cbi5kcm9wZG93biAuZHJvcGRvd24tbWVudSAuX3VzZXIgLl9wcm9maWxlIHtcbiAgd2lkdGg6IDEwMXB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4uZHJvcGRvd24gLmRyb3Bkb3duLW1lbnUgLl91c2VyIC5fcHJvZmlsZSAuX25hbWUge1xuICBmb250LWZhbWlseTogXCJTRiBQcm8gVGV4dC1NZWRpdW1cIjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB3aWR0aDogMTAxcHg7XG59XG4uZHJvcGRvd24gLmRyb3Bkb3duLW1lbnUgLl91c2VyIC5fcHJvZmlsZSAuX3JvbGUge1xuICBmb250LWZhbWlseTogXCJTRiBQcm8gVGV4dC1NZWRpdW1cIjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB3aWR0aDogMzdweDtcbn1cbi5kcm9wZG93biAuZHJvcGRvd24tbWVudSAuX2VkaXQge1xuICB3aWR0aDogMTEwcHg7XG4gIGhlaWdodDogMjRweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG4uZHJvcGRvd24gLmRyb3Bkb3duLW1lbnUgLl9lZGl0IGkge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjOWZmZmIxO1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuLmRyb3Bkb3duIC5kcm9wZG93bi1tZW51IC5fZWRpdCBzcGFuIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LWZhbWlseTogXCJTRiBQcm8gVGV4dC1NZWRpdW1cIjtcbiAgbWFyZ2luLWxlZnQ6IDE3cHg7XG59XG4uZHJvcGRvd24gLmRyb3Bkb3duLW1lbnUgLl9jaGFuZ2VfcGFzc3dvcmQge1xuICB3aWR0aDogMTU3cHg7XG4gIGhlaWdodDogMjRweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG59XG4uZHJvcGRvd24gLmRyb3Bkb3duLW1lbnUgLl9jaGFuZ2VfcGFzc3dvcmQgaSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICM5ZmZmYjE7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG4uZHJvcGRvd24gLmRyb3Bkb3duLW1lbnUgLl9jaGFuZ2VfcGFzc3dvcmQgc3BhbiB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC1mYW1pbHk6IFwiU0YgUHJvIFRleHQtTWVkaXVtXCI7XG4gIG1hcmdpbi1sZWZ0OiAxN3B4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuLmRyb3Bkb3duIC5kcm9wZG93bi1tZW51IC5fbG9nb3V0IHtcbiAgd2lkdGg6IDE1N3B4O1xuICBoZWlnaHQ6IDI0cHg7XG4gIG1hcmdpbjogMTZweCAycHg7XG59XG4uZHJvcGRvd24gLmRyb3Bkb3duLW1lbnUgLl9sb2dvdXQgaSB7XG4gIGZvbnQtc2l6ZTogMTlweDtcbiAgY29sb3I6ICNmNDYzNjM7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuLmRyb3Bkb3duIC5kcm9wZG93bi1tZW51IC5fbG9nb3V0IHNwYW4ge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtZmFtaWx5OiBcIlNGIFBybyBUZXh0LU1lZGl1bVwiO1xuICBtYXJnaW4tbGVmdDogMTdweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgY29sb3I6ICNmNDYzNjM7XG59XG5cbi5kcm9wZG93bjEgLmRyb3Bkb3duLW1lbnUge1xuICBtaW4td2lkdGg6IDIwMHB4O1xuICBtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiA1cHggIWltcG9ydGFudDtcbn1cbi5kcm9wZG93bjEgLmRyb3Bkb3duLW1lbnUgLmRyb3Bkb3duLWl0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogNTBweDtcbiAgcGFkZGluZzogMCAyMHB4O1xufVxuLmRyb3Bkb3duMSAuZHJvcGRvd24tbWVudSAuZHJvcGRvd24taXRlbSBwIHtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC1mYW1pbHk6IFwiU0YgUHJvIFRleHQtTWVkaXVtXCI7XG4gIG1hcmdpbjogMCAwIDAgMjBweDtcbn1cbi5kcm9wZG93bjEgLmRyb3Bkb3duLW1lbnUgLmRyb3Bkb3duLWl0ZW06Zm9jdXMsIC5kcm9wZG93bjEgLmRyb3Bkb3duLW1lbnUgLmRyb3Bkb3duLWl0ZW06aG92ZXIge1xuICBjb2xvcjogdW5zZXQgIWltcG9ydGFudDtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bnNldCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB1bnNldCAhaW1wb3J0YW50O1xufVxuLmRyb3Bkb3duMSAuZHJvcGRvd24tbWVudSBociB7XG4gIG1hcmdpbjogMCAxMHB4O1xufVxuXG4uZHJvcGRvd24yIC5kcm9wZG93bi1tZW51IHtcbiAgd2lkdGg6IDIwMHB4O1xufVxuXG4ub3ZlcmxheTEge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogIzIxMjEyMTtcbiAgb3BhY2l0eTogMC4xO1xuICB6LWluZGV4OiAwO1xufVxuXG4ub3ZlcmxheTIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgb3BhY2l0eTogMC4wNTtcbiAgei1pbmRleDogMDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TopbarPreviewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-topbar-preview',
                templateUrl: './topbar-preview.component.html',
                styleUrls: ['./topbar-preview.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, { breadcumbs: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], pageType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], globalConfig: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "../../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/collapse */ "../../node_modules/ngx-bootstrap/__ivy_ngcc__/collapse/fesm2015/ngx-bootstrap-collapse.js");
/* harmony import */ var _components_topbar_preview_topbar_preview_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/topbar-preview/topbar-preview.component */ "./src/app/shared/components/topbar-preview/topbar-preview.component.ts");
/* harmony import */ var _components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/breadcrumb/breadcrumb.component */ "./src/app/shared/components/breadcrumb/breadcrumb.component.ts");




// Lib

// Project




class SharedModule {
}
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_4__["CollapseModule"].forRoot(),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_components_topbar_preview_topbar_preview_component__WEBPACK_IMPORTED_MODULE_5__["TopbarPreviewComponent"],
        _components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_6__["BreadcrumbComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_4__["CollapseModule"]], exports: [_components_topbar_preview_topbar_preview_component__WEBPACK_IMPORTED_MODULE_5__["TopbarPreviewComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _components_topbar_preview_topbar_preview_component__WEBPACK_IMPORTED_MODULE_5__["TopbarPreviewComponent"],
                    _components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_6__["BreadcrumbComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                    ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_4__["CollapseModule"].forRoot(),
                ],
                exports: [
                    _components_topbar_preview_topbar_preview_component__WEBPACK_IMPORTED_MODULE_5__["TopbarPreviewComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
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
    production: false,
    apiEndpoint: undefined || "http://52.163.56.227:30052/vmsapi/",
    vmsSiteUserName: undefined || "",
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Project\ais-poc\projects\vms-site\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map