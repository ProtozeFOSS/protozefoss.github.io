(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: Olga */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Olga", function() { return Olga; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _game_score_game_score_ux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game-score/game-score.ux */ "./src/app/game-score/game-score.ux.ts");
/* harmony import */ var _canvas_chessboard_canvas_chessboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./canvas-chessboard/canvas-chessboard.component */ "./src/app/canvas-chessboard/canvas-chessboard.component.ts");
/* harmony import */ var _olga_controls_olga_controls_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./olga-controls/olga-controls.component */ "./src/app/olga-controls/olga-controls.component.ts");
/* harmony import */ var _olga_menu_olga_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./olga-menu/olga-menu.component */ "./src/app/olga-menu/olga-menu.component.ts");
/* harmony import */ var _services_olga_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/olga.service */ "./src/app/services/olga.service.ts");
/* harmony import */ var _services_colors_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/colors.service */ "./src/app/services/colors.service.ts");
/* harmony import */ var _services_layout_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/layout.service */ "./src/app/services/layout.service.ts");









const _c0 = ["olgaContainer"];
class Olga {
    constructor(olga, colorService, layout) {
        this.olga = olga;
        this.colorService = colorService;
        this.layout = layout;
        this.title = 'Olga PGN Viewer 2.0';
        this.gameScoreComponent = null;
        this.canvasBoardComponent = null;
        this.appContainer = null;
        this.menuComponent = null;
        this.controlsComponent = null;
        this.pgnString = '';
        this.gameScoreWidth = 389;
        this.oldWidth = 0;
        this.keymap = new Map();
        this.doneResizingScore = false;
        const date = new Date();
        this.olga.UUID = 'OLGA-' + date.getTime().toString();
        console.log('ID: ' + this.olga.UUID);
        this.loadKeymap();
        // this.olga..subscribe((game) => {
        //   this.currentGame = game;
        //   //this.gameScoreComponent.setGame(game);
        //   //this.canvasBoarComponent.setGame(game);
        //   //this.layout.updateLayout();
        // })
    }
    // tslint:disable-next-line: typedef
    ngAfterViewInit() {
        var _a;
        this.layout.gameScoreElement = document.getElementById('olga-score-' + this.olga.UUID);
        this.layout.boardElement = document.getElementById(this.olga.UUID + '-ccb');
        this.layout.controlsElement = document.getElementById('olga-controls-' + this.olga.UUID);
        this.layout.statusElement = document.getElementById('olga-status-' + this.olga.UUID);
        this.colorService.initializeColorPalette();
        this.colorService.setOlga(this.olga);
        this.colorService.boardBGDark.subscribe((bgDark) => {
            var _a;
            (_a = this.canvasBoardComponent) === null || _a === void 0 ? void 0 : _a.setDarkTile(bgDark);
        });
        if (this.canvasBoardComponent) {
            this.olga.attachBoard(this.canvasBoardComponent);
        }
        if (this.controlsComponent) {
            this.olga.attachControls(this.controlsComponent);
        }
        if (this.gameScoreComponent) {
            this.olga.attachScore(this.gameScoreComponent);
            this.gameScoreComponent.resizeHandleEvent = this.layout.onSliderDrag.bind(this.layout);
            this.gameScoreComponent.resizeTouchEvent = this.layout.onSliderTouch.bind(this.layout);
        }
        if (this.canvasBoardComponent) {
            this.olga.attachBoard(this.canvasBoardComponent);
        }
        this.colorService.boardBGLight.subscribe((light) => {
            if (this.canvasBoardComponent) {
                this.canvasBoardComponent.setLightTile(light);
            }
        });
        this.colorService.boardBGDark.subscribe((dark) => {
            if (this.canvasBoardComponent) {
                this.canvasBoardComponent.setDarkTile(dark);
            }
        });
        const pgn = (_a = this.gameScoreComponent) === null || _a === void 0 ? void 0 : _a.getPGN();
        if (pgn) {
            this.olga.loadPGN(pgn);
        }
        window.onkeydown = this.keyEvent.bind(this);
        this.layout.initializeLayout(this);
    }
    mouseMoved(event) {
        if (this.gameScoreComponent && this.gameScoreComponent.resizing) {
            this.gameScoreComponent.resizeHandleEvent(event);
            if (event.buttons === 0) {
                this.gameScoreComponent.resizing = false;
            }
        }
    }
    loadKeymap() {
        // initial default keymap
        this.keymap.set('Space', () => { this.olga.toggleAutoPlay(); });
        this.keymap.set('Home', () => { this.olga.moveToStart(); });
        this.keymap.set('End', () => { this.olga.moveToEnd(); });
        this.keymap.set('ArrowRight', () => { this.olga.advance(); });
        this.keymap.set('ArrowLeft', () => { this.olga.previous(); });
        this.keymap.set('KeyI', () => { this.olga.rotateBoardOrientation(); });
    }
    keyEvent(event) {
        console.log(event);
        if (this.keymap.has(event.code)) {
            console.log('Got this key: ' + event.code);
            const action = this.keymap.get(event.code);
            action();
        }
    }
    touchMoved(event) {
        if (this.gameScoreComponent && this.gameScoreComponent.resizing) {
            this.gameScoreComponent.resizeTouchEvent(event);
        }
    }
    setBoardSize(size) {
        if (this.canvasBoardComponent) {
            this.canvasBoardComponent.setSize(size);
        }
    }
    setGameScoreSize(size) {
        this.gameScoreWidth = size;
        if (this.canvasBoardComponent) {
            this.canvasBoardComponent.setSize(this.gameScoreWidth);
        }
    }
    setMenuSize(size) {
        var _a;
        (_a = this.menuComponent) === null || _a === void 0 ? void 0 : _a.resize(size, size);
    }
    ignoreEvent(event) {
        //console.log('Ignoring ' + event);
        event.preventDefault();
        event.stopPropagation();
    }
}
Olga.ɵfac = function Olga_Factory(t) { return new (t || Olga)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_olga_service__WEBPACK_IMPORTED_MODULE_5__["OlgaService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_colors_service__WEBPACK_IMPORTED_MODULE_6__["ColorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_layout_service__WEBPACK_IMPORTED_MODULE_7__["LayoutService"])); };
Olga.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Olga, selectors: [["olga"]], viewQuery: function Olga_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_game_score_game_score_ux__WEBPACK_IMPORTED_MODULE_1__["GamescoreUxComponent"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_canvas_chessboard_canvas_chessboard_component__WEBPACK_IMPORTED_MODULE_2__["CanvasChessBoard"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_olga_menu_olga_menu_component__WEBPACK_IMPORTED_MODULE_4__["OlgaMenuComponent"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_olga_controls_olga_controls_component__WEBPACK_IMPORTED_MODULE_3__["OlgaControlsComponent"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.gameScoreComponent = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.canvasBoardComponent = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.appContainer = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.menuComponent = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.controlsComponent = _t.first);
    } }, inputs: { pgnString: "pgnString" }, outputs: { gameScoreWidth: "gameScoreWidth", oldWidth: "oldWidth", keymap: "keymap" }, decls: 9, vars: 8, consts: [[1, "olga-container", 3, "id", "touchmove", "mousemove"], ["olgaContainer", ""], ["boardID", "this.olga.UUID", 3, "id", "theme", "showLabels", "touchstart"], ["canvasBoardComponent", ""], [3, "id", "contextmenu"], [3, "id"], [3, "id", "click"]], template: function Olga_Template(rf, ctx) { if (rf & 1) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("touchmove", function Olga_Template_div_touchmove_0_listener($event) { return ctx.touchMoved($event); })("mousemove", function Olga_Template_div_mousemove_0_listener($event) { return ctx.mouseMoved($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "canvas-chessboard", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("touchstart", function Olga_Template_canvas_chessboard_touchstart_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3); return _r1.touchStart($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "olga-score", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("contextmenu", function Olga_Template_olga_score_contextmenu_4_listener($event) { return ctx.ignoreEvent($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "olga-controls", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "olga-status", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "olga-menu", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Olga_Template_olga_menu_click_7_listener() { return ctx.layout.closeSettings(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "cookie-consent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "", ctx.olga.UUID, "-olga-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "", ctx.olga.UUID, "-ccb");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("theme", ctx.colorService.boardTheme())("showLabels", ctx.olga.showLabels.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "olga-score-", ctx.olga.UUID, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "olga-controls-", ctx.olga.UUID, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "olga-status-", ctx.olga.UUID, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "olga-menu-", ctx.olga.UUID, "");
    } }, styles: ["@font-face {\n  font-family: \"Caveat\";\n  src: url('Caveat-Bold.woff2') format(\"woff2\"), url('Caveat-Bold.woff') format(\"woff\");\n  font-weight: bold;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"Caveat\";\n  src: url('Caveat-Regular.woff2') format(\"woff2\"), url('Caveat-Regular.woff') format(\"woff\");\n  font-weight: 600;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"FigurineSymbolT1\";\n  src: url('FigurineSymbolT1Bold.woff2') format(\"woff2\"), url('FigurineSymbolT1Bold.woff') format(\"woff\");\n  font-weight: bold;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"FigurineSymbolT1\";\n  src: url('FigurineSymbolT1.woff2') format(\"woff2\"), url('FigurineSymbolT1.woff') format(\"woff\");\n  font-weight: 600;\n  font-style: normal;\n  font-display: swap;\n}\n\n\n\n\n\n\n\n\n\n\n[_ngcontent-%COMP%]:root {\n  --bg-color: #f2f3f7;\n  --fg-color: #383a41;\n  --red: #e43030;\n  --green: #19a187;\n  --blue: #367bf0;\n  --dark-blue: #265ab1;\n  --maroon: #b8174c;\n  --purple: #8c42ab;\n}\n.olga-container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0px;\n  bottom: 0px;\n  left: 0px;\n  right: 0px;\n  width: 100%;\n  height: auto;\n  overflow-y: hidden;\n}\n.fenbutton[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 80px;\n  position: absolute;\n  right: 10px;\n  bottom: 1%;\n}\nolga-score[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 1px;\n}\ncanvas-chessboard[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 1px;\n  left: 1px;\n  border: none;\n  border-radius: 1px;\n}\nolga-title[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 4px;\n  top: 0px;\n  height: 5%;\n  width: calc(50% -10px);\n  text-align: center;\n}\nolga-controls[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 1px;\n  bottom: 8%;\n  height: 128px;\n  width: 50%;\n  background-color: var(--gsBackground);\n  border: black solid 1px;\n  border-radius: 2px;\n}\nolga-status[_ngcontent-%COMP%] {\n  position: absolute;\n  widows: 45%;\n  right: 1px;\n}\nolga-menu[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0px;\n  bottom: 0px;\n  left: 0px;\n  right: 0px;\n  background: #100c0ce3;\n  z-index: 1000;\n  visibility: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMuc2NzcyIsInNyYy9hc3NldHMvc2Nzcy9tb2R1bGVzL19mb250cy5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOEVBQUE7QUNBQTtFQUNJLHFCQUFBO0VBQ0EscUZBQUE7RUFFQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNDSjtBREVBO0VBQ0kscUJBQUE7RUFDQSwyRkFBQTtFQUVBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0RKO0FESUE7RUFDRSwrQkFBQTtFQUNBLHVHQUFBO0VBRUEsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDSEY7QURNQTtFQUNFLCtCQUFBO0VBQ0EsK0ZBQUE7RUFFQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNMRjtBRmFBLCtFQUFBO0FBR0EsK0VBQUE7QUFRQSwrRUFBQTtBQU1BLCtFQUFBO0FBTUEsK0VBQUE7QUFNQSxnRkFBQTtBQUtBLCtFQUFBO0FBS0EseUVBQUE7QUFLQSx5RUFBQTtBQUlBLHVFQUFBO0FBZ0JBO0VBQ0UsbUJBQUE7RUFDQSxtQkFBQTtFQUVBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUVsRUY7QUE5Q0E7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBaURGO0FBOUNBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FBaURGO0FBOUNBO0VBQ0csa0JBQUE7RUFDQSxVQUFBO0FBaURIO0FBN0NBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQWdERjtBQTdDQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQWdERjtBQTdDQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUNBLHFDRkphO0VFS2IsdUJBQUE7RUFDQSxrQkFBQTtBQWdERjtBQTdDQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUFnREY7QUE1Q0E7RUFDRSxlQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBK0NGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuXG5AaW1wb3J0IFwiLi9hc3NldHMvc2Nzcy9tb2R1bGVzL19mb250cy5zY3NzXCI7XG4kZ2FtZXNjb3JlLWZhbWlseTogXCJGaWd1cmluZVN5bWJvbFQxXCI7XG4kZ2FtZXNjb3JlLWhpZ2hsaWdodDogIzU4NTg1OGZmO1xuJGdhbWVzY29yZS1mb3JlZ3JvdW5kOiB3aGl0ZTtcblxuJHJlZDogI2U0MzAzMDtcbiRncmVlbjogIzE5YTE4NztcbiRsaWdodC1ibHVlOiAjMDBmZmZmZmY7XG4kYmx1ZTogIzM2N2JmMDtcbiRkYXJrLWJsdWU6ICMyNjVhYjE7XG4kbWFyb29uOiAjYjgxNzRjO1xuJHB1cnBsZTogIzhjNDJhYjtcblxuLy8gTWFpbiBPTEdBIENvbG9yIEVsZW1lbnQgVmFyaWFibGVzXG4kdGV4dENvbG9yOiB2YXIoLS10ZXh0Q29sb3IpOyAvLyBNYWluIFRleHQgQ29sb3JcbiR0ZXh0Q29sb3JBdHRlbnRpb246IHZhcigtLXRleHRDb2xvckF0dGVudGlvbik7IC8vIEF0dGVudGlvbiB0ZXh0XG4kdGV4dENvbG9yUmVtb3ZlOiB2YXIoLS10ZXh0Q29sb3JSZW1vdmUpOyAvLyBSZW1vdmUvRGVsZXRlL0Nsb3NlXG4kdGV4dENvbG9yQWRkOiB2YXIoLS10ZXh0Q29sb3JBZGQpOyAvLyBBZGQvQ3JlYXRlL09wZW5cbiR0ZXh0Q29sb3JBY3RpdmU6IHZhcigtLXRleHRDb2xvckFjdGl2ZSk7IC8vIEFkZC9DcmVhdGUvT3BlblxuJGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQpOyAvLyBNYWluIGJhY2tncm91bmQgQ29sb3JcbiRiZ0NvbnRhaW5lcjogdmFyKC0tYmdDb250YWluZXIpOyAvLyBiYWNrZ3JvdW5kIG9mIENvbnRhaW5lcnNcbiRiZ01lbnU6IHZhcigtLWJnTWVudSk7IC8vIGJhY2tncm91bmQgb2YgTWVudXNcbiRiZ0l0ZW06IHZhcigtLWJnSXRlbSk7IC8vIGJhY2tncm91bmQgb2YgSXRlbXNcblxuLy8gQ29udGV4dCBNZW51XG4kYmdDb250ZXh0OiB2YXIoLS1iZ0NvbnRleHQpOyAvLyBiYWNrZ3JvdW5kIG9mIENvbnRleHQgTWVudVxuJHRleHRDb2xvckNvbnRleHQ6IHZhcigtLXRleHRDb2xvckNvbnRleHQpOyAvLyB0ZXh0IGNvbG9yIENvbnRleHQgTWVudVxuJGJvcmRlckNvbnRleHQ6IHZhcigtLWJvcmRlckNvbnRleHQpOyAvLyBib3JkZXIgQ29udGV4dCBNZW51XG4kb3ZlcmxheUNvbnRleHRCYWNrZ3JvdW5kOiB2YXIoXG4gIC0tb3ZlcmxheUNvbnRleHRCYWNrZ3JvdW5kXG4pOyAvLyBDb250ZXh0IE1lbnUgT3ZlcmxheSBiYWNrZ3JvdW5kIG1haW5cbiRvdmVybGF5Q29udGV4dEJhY2tncm91bmRHcmFkaWVudDogdmFyKFxuICAtLW92ZXJsYXlDb250ZXh0QmFja2dyb3VuZEdyYWRpZW50XG4pOyAvLyBDb250ZXh0IE1lbnUgYmFja2dyb3VuZCBncmFkaWVudFxuXG4kaXRlbTogdmFyKC0taXRlbSk7XG4kaXRlbS1jb250cmFzdDogdmFyKC0taXRlbS1jb250cmFzdCk7XG4kaXRlbS1iZzogdmFyKC0taXRlbS1iZyk7XG5cbi8qKioqKioqKioqKioqKioqKioqIE1lbnUgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4kbWVCYWNrZ3JvdW5kOiB2YXIoLS1tZUJhY2tncm91bmQpO1xuXG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIENvbnRhaW5lciBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuJGdzVGV4dENvbG9yOiB2YXIoLS1nc1RleHRDb2xvcik7IC8vIFRleHQgY29sb3IgZm9yIGdhbWUgc2NvcmVcbiRnc0JhY2tncm91bmQ6IHZhcigtLWdzQmFja2dyb3VuZCk7IC8vIGJhY2tncm91bmQgb2YgQ29udGFpbmVyc1xuJGdzTGlzdEJhY2tncm91bmQ6IHZhcigtLWdzTGlzdEJhY2tncm91bmQpOyAvLyBsaXN0IGJhY2tncm91bmQgb2YgZ2FtZSBzY29yZVxuJGdzQm9yZGVyOiB2YXIoLS1nc0JvcmRlcik7IC8vIGJhY2tncm91bmQgb2YgTWVudXNcbiRnc1RleHRTaXplOiB2YXIoLS1nc1RleHRTaXplKTsgLy8gYmFja2dyb3VuZCBvZiBNZW51c1xuJGdzRm9udEZhbWlseTogdmFyKC0tZ3NGb250RmFtaWx5KTsgLy8gc2NvcmUgZm9udFxuXG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIENvbnRhaW5lciBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuJGdzVGV4dENvbG9yTVc6IHZhcigtLWdzVGV4dENvbG9yTVcpOyAvLyBUZXh0IGNvbG9yIGZvciBnYW1lIHNjb3JlXG4kZ3NCYWNrZ3JvdW5kTVc6IHZhcigtLWdzQmFja2dyb3VuZE1XKTsgLy8gYmFja2dyb3VuZCBvZiBDb250YWluZXJzXG4kZ3NCb3JkZXJNVzogdmFyKC0tZ3NCb3JkZXJNVyk7IC8vIGJhY2tncm91bmQgb2YgTWVudXNcbiRnc1RleHRTaXplTVc6IHZhcigtLWdzVGV4dFNpemVNVyk7IC8vIGJhY2tncm91bmQgb2YgTWVudXNcblxuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBDb250YWluZXIgVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiRnc1RleHRDb2xvck1COiB2YXIoLS1nc1RleHRDb2xvck1CKTsgLy8gVGV4dCBjb2xvciBmb3IgZ2FtZSBzY29yZVxuJGdzQmFja2dyb3VuZE1COiB2YXIoLS1nc0JhY2tncm91bmRNQik7IC8vIGJhY2tncm91bmQgb2YgQ29udGFpbmVyc1xuJGdzQm9yZGVyTUI6IHZhcigtLWdzQm9yZGVyTUIpOyAvLyBiYWNrZ3JvdW5kIG9mIE1lbnVzXG4kZ3NUZXh0U2l6ZU1COiB2YXIoLS1nc1RleHRTaXplTUIpOyAvLyBiYWNrZ3JvdW5kIG9mIE1lbnVzXG5cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgSGlnaGxpZ2h0IFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4kZ3NUZXh0Q29sb3JIRzogdmFyKC0tZ3NUZXh0Q29sb3JIRyk7IC8vIFRleHQgY29sb3IgZm9yIGhpZ2hsaWdodFxuJGdzQW5ub3RhdGlvbkNvbG9ySEc6IHZhcigtLWdzQW5ub3RhdGlvbkNvbG9ySEcpOyAvLyBBbm5vdGF0aW9uL0NvbW1lbnQgY29sb3IgZm9yIGhpZ2hsaWdodFxuJGdzQmFja2dyb3VuZEhHOiB2YXIoLS1nc0JhY2tncm91bmRIRyk7IC8vIGJhY2tncm91bmQgZm9yIGhpZ2hsaWdodFxuJGdzQm9yZGVySEc6IHZhcigtLWdzQm9yZGVySEcpOyAvLyBib3JkZXIgZm9yIGhpZ2hsaWdodFxuXG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIEFubm90YXRpb24gVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiRnc1RleHRDb2xvckFOOiB2YXIoLS1nc1RleHRDb2xvckFOKTsgLy8gVGV4dCBjb2xvciBmb3IgaGlnaGxpZ2h0XG4kZ3NCYWNrZ3JvdW5kQU46IHZhcigtLWdzQmFja2dyb3VuZEFOKTsgLy8gYmFja2dyb3VuZCBmb3IgaGlnaGxpZ2h0XG4kZ3NCb3JkZXJBTjogdmFyKC0tZ3NCb3JkZXJBTik7IC8vIGJvcmRlciBmb3IgaGlnaGxpZ2h0XG5cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgVmFyaWF0aW9uIFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4kZ3NUZXh0Q29sb3JWQTogdmFyKC0tZ3NUZXh0Q29sb3JWQSk7IC8vIFRleHQgY29sb3IgZm9yIGhpZ2hsaWdodFxuJGdzQmFja2dyb3VuZFZBOiB2YXIoLS1nc0JhY2tncm91bmRWQSk7IC8vIGJhY2tncm91bmQgZm9yIGhpZ2hsaWdodFxuJGdzQm9yZGVyVkE6IHZhcigtLWdzQm9yZGVyVkEpOyAvLyBib3JkZXIgZm9yIGhpZ2hsaWdodFxuXG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIFBseSBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuJGdzVGV4dENvbG9yUEM6IHZhcigtLWdzVGV4dENvbG9yUEMpOyAvLyBUZXh0IGNvbG9yIGZvciBnYW1lIHNjb3JlIHBseVxuJGdzQmFja2dyb3VuZFBDOiB2YXIoLS1nc0JhY2tncm91bmRQQyk7IC8vIGJhY2tncm91bmQgZm9yIGdhbWUgc2NvcmUgcGx5XG4kZ3NCb3JkZXJQQzogdmFyKC0tZ3NCb3JkZXJQQyk7IC8vIGJvcmRlciBmb3IgZ2FtZSBzY29yZSBwbHlcblxuLyoqKioqKioqKioqKioqKioqKioqIENvbnRyb2wgQ29sb3JzICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiRjc0JhY2tncm91bmQ6IHZhcigtLWNzQmFja2dyb3VuZCk7IC8vIGJhY2tncm91bmQgZm9yIGNvbnRyb2xzXG4kY3NDb2xvcjogdmFyKC0tY3NDb2xvcik7IC8vIGNvbnRyb2xzIGNvbG9yIChmb3JlZ3JvdW5kKVxuXG4vKioqKioqKioqKioqKioqKioqKiogQm9hcmQgQ29sb3JzICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiRib2FyZEJHRGFyazogdmFyKC0tYm9hcmRCR0RhcmspOyAvLyBib2FyZCBkYXJrIHRpbGVcbiRib2FyZEJHTGlnaHQ6IHZhcigtLWJvYXJkQkdMaWdodCk7IC8vIGJvYXJkIGxpZ2h0IHRpbGVcbiRib2FyZExhYmVsTGlnaHQ6IHZhcigtLWJvYXJkTGFiZWxMaWdodCk7IC8vIGJvYXJkIGxpZ2h0IGxhYmVsXG4kYm9hcmRMYWJlbERhcms6IHZhcigtLWJvYXJkTGFiZWxEYXJrKTsgLy8gYm9hcmQgZGFyayBsYWJlbFxuXG4vLyBHZW5lcmFsIHN0dWZmXG4kdGV4dC1jb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XG4kYmctb3V0ZXI6IHZhcigtLWJnLW91dGVyKTtcbiRiZy1pbm5lcjogdmFyKC0tYmctaW5uZXIpO1xuXG4kYmctY29sb3I6ICNmMmYzZjc7XG4kZmctY29sb3I6ICMzODNhNDE7XG5cbiRnbG93LXNoYWRvdzogMCAwIDAuNWVtIHRyYW5zcGFyZW50aXplKCRibHVlLCAwLjMpO1xuXG46cm9vdCB7XG4gIC0tYmctY29sb3I6ICN7JGJnLWNvbG9yfTtcbiAgLS1mZy1jb2xvcjogI3skZmctY29sb3J9O1xuXG4gIC0tcmVkOiAjeyRyZWR9O1xuICAtLWdyZWVuOiAjeyRncmVlbn07XG4gIC0tYmx1ZTogI3skYmx1ZX07XG4gIC0tZGFyay1ibHVlOiAjeyRkYXJrLWJsdWV9O1xuICAtLW1hcm9vbjogI3skbWFyb29ufTtcbiAgLS1wdXJwbGU6ICN7JHB1cnBsZX07XG59XG5cbi8vIDo6LW1vei1mb2N1cy1pbm5lcixcbi8vIDotbW96LWZvY3VzcmluZyB7XG4vLyAgIGJvcmRlcjogMDtcbi8vICAgY29sb3I6IHRyYW5zcGFyZW50O1xuLy8gICB0ZXh0LXNoYWRvdzogMCAwIDAgJGZnLWNvbG9yO1xuLy8gfVxuXG4vLyA6OnNlbGVjdGlvbixcbi8vIDo6LW1vei1zZWxlY3Rpb24ge1xuLy8gICBjb2xvcjogd2hpdGU7XG4vLyAgIGJhY2tncm91bmQ6IGJsYWNrO1xuLy8gfVxuXG4vLyAqIHtcbi8vICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbi8vICAgb3V0bGluZTogbm9uZTtcbi8vICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4vLyAgIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcbi8vICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbi8vICAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lO1xuLy8gICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuLy8gICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4vLyAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbi8vICAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuLy8gICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCkgIWltcG9ydGFudDtcbi8vICAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xuLy8gICBjdXJzb3I6IGRlZmF1bHQ7XG4vLyAgIGxldHRlci1zcGFjaW5nOiAwO1xuLy8gfVxuXG4vLyAuc2VsZWN0YWJsZSxcbi8vIC5zZWxlY3RhYmxlICoge1xuLy8gICBjdXJzb3I6IGF1dG87XG4vLyAgIHVzZXItc2VsZWN0OiB0ZXh0O1xuLy8gICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IHRleHQ7XG4vLyAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IHRleHQ7XG4vLyAgIC1raHRtbC11c2VyLXNlbGVjdDogdGV4dDtcbi8vICAgLW1vei11c2VyLXNlbGVjdDogdGV4dDtcbi8vICAgLW1zLXVzZXItc2VsZWN0OiB0ZXh0O1xuLy8gfVxuXG4vLyBodG1sLFxuLy8gYm9keSB7XG4vLyAgIGJhY2tncm91bmQtY29sb3I6ICRiZy1jb2xvcjtcbi8vICAgY29sb3I6ICRmZy1jb2xvcjtcbi8vICAgbWFyZ2luOiAwO1xuLy8gICBwYWRkaW5nOiAwO1xuLy8gICBmb250LXNpemU6IDEwcHQ7XG4vLyAgIGhlaWdodDogMTAwJTtcbi8vICAgb3ZlcmZsb3c6IGF1dG87XG4vLyB9XG5cbi8vIC53aXRoLXNoYWRvdyB7XG4vLyAgIGJveC1zaGFkb3c6IDZweCA2cHggMTBweCB0cmFuc3BhcmVudGl6ZShibGFjaywgMC45KSwgLTZweCAtNnB4IDEwcHggd2hpdGU7XG4vLyB9XG5cbi8vIC5vdXRzZXQge1xuLy8gICBAZXh0ZW5kIC53aXRoLXNoYWRvdztcblxuLy8gICBib3JkZXItcmFkaXVzOiAxMHB4O1xuLy8gICBiYWNrZ3JvdW5kOiAkYmctY29sb3I7XG4vLyB9XG5cbi8vIC5pbnNldCB7XG4vLyAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4vLyAgIGJveC1zaGFkb3c6IDAgMCB0cmFuc3BhcmVudCwgMCAwIHRyYW5zcGFyZW50LFxuLy8gICAgIGluc2V0IDNweCAzcHggNXB4IHRyYW5zcGFyZW50aXplKGJsYWNrLCAwLjkpLCBpbnNldCAtM3B4IC0zcHggNXB4IHdoaXRlO1xuLy8gICBiYWNrZ3JvdW5kOiBsaWdodGVuKCRiZy1jb2xvciwgMiUpO1xuLy8gfVxuXG4vLyAucGFwZXIge1xuLy8gICBAZXh0ZW5kIC5vdXRzZXQ7XG4vLyAgIHBhZGRpbmc6IDEwcHggMjBweCAyMHB4O1xuLy8gICBtYXJnaW4tdG9wOiAyMHB4O1xuLy8gICBtaW4taGVpZ2h0OiAxMDBweDtcbi8vICAgZm9udC1zaXplOiAxLjJlbTtcbi8vICAgYmFja2dyb3VuZDogJGJnLWNvbG9yO1xuLy8gfVxuXG4vLyBzZWN0aW9uLFxuLy8gYXJ0aWNsZSxcbi8vIC5zZWN0aW9uLFxuLy8gLmFydGljbGUsXG4vLyAucGFwZXIge1xuLy8gICBsaW5lLWhlaWdodDogMmVtO1xuLy8gICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4vLyAgIHdvcmQtYnJlYWs6IG5vcm1hbDtcbi8vICAgbGluZS1oZWlnaHQ6IDJlbTtcbi8vIH1cblxuLy8gaW5wdXRbdHlwZT1cInRleHRcIl0sXG4vLyBpbnB1dFt0eXBlPVwic2VhcmNoXCJdLFxuLy8gaW5wdXRbdHlwZT1cInRlbFwiXSxcbi8vIGlucHV0W3R5cGU9XCJ1cmxcIl0sXG4vLyBpbnB1dFt0eXBlPVwiZW1haWxcIl0sXG4vLyBpbnB1dFt0eXBlPVwicGFzc3dvcmRcIl0sXG4vLyBpbnB1dFt0eXBlPVwiZGF0ZVwiXSxcbi8vIGlucHV0W3R5cGU9XCJtb250aFwiXSxcbi8vIGlucHV0W3R5cGU9XCJ3ZWVrXCJdLFxuLy8gaW5wdXRbdHlwZT1cInRpbWVcIl0sXG4vLyBpbnB1dFt0eXBlPVwibnVtYmVyXCJdLFxuLy8gaW5wdXRbdHlwZT1cImNvbG9yXCJdLFxuLy8gc2VsZWN0LFxuLy8gdGV4dGFyZWEge1xuLy8gICBib3JkZXI6IDA7XG4vLyAgIGJhY2tncm91bmQ6ICRiZy1jb2xvcjtcbi8vICAgY29sb3I6ICRmZy1jb2xvcjtcbi8vICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbi8vICAgcGFkZGluZzogMCAxLjI1ZW07XG4vLyAgIGxpbmUtaGVpZ2h0OiAxLjI1ZW07XG4vLyAgIGhlaWdodDogMy41ZW07XG4vLyAgIG1hcmdpbjogMTBweCAwO1xuLy8gICBmb250LXNpemU6IDEuMXJlbTtcbi8vICAgY3Vyc29yOiB0ZXh0O1xuLy8gICB1c2VyLXNlbGVjdDogdGV4dDtcbi8vICAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiB0ZXh0O1xuLy8gICAtd2Via2l0LXVzZXItc2VsZWN0OiB0ZXh0O1xuLy8gICAta2h0bWwtdXNlci1zZWxlY3Q6IHRleHQ7XG4vLyAgIC1tb3otdXNlci1zZWxlY3Q6IHRleHQ7XG4vLyAgIC1tcy11c2VyLXNlbGVjdDogdGV4dDtcbi8vICAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjJzO1xuXG4vLyAgICY6bm90KHNlbGVjdCkge1xuLy8gICAgIEBleHRlbmQgLmluc2V0O1xuXG4vLyAgICAgJjpmb2N1cyB7XG4vLyAgICAgICBAZXh0ZW5kIC5vdXRzZXQ7XG4vLyAgICAgfVxuLy8gICB9XG4vLyB9XG5cbi8vIHRleHRhcmVhIHtcbi8vICAgaGVpZ2h0OiAzNTBweDtcbi8vICAgcGFkZGluZzogMS4yNWVtO1xuLy8gfVxuXG4vLyBzZWxlY3Qge1xuLy8gICBAZXh0ZW5kIC5vdXRzZXQ7XG5cbi8vICAgY3Vyc29yOiBwb2ludGVyO1xuLy8gICBiYWNrZ3JvdW5kOiB1cmwoZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCMlpYSnphVzl1UFNJeExqRWlJSFpwWlhkQ2IzZzlJakFnTUNBeE9TQXhPU0lnZUcxc2JuTTlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5Mekl3TURBdmMzWm5JajQ4WnlCMGNtRnVjMlp2Y20wOUltMWhkSEpwZUNndU1ETTBJREFnTUNBdU1ETTBJQzAyTGpnZ01TNDNaUzAxS1NJZ2MzUjViR1U5SW1acGJHdzZJemRpTjJVNFl5SStQSEJoZEdnZ1pEMGliVFE0TUNBek5EUXRNakV4TFRJeE1tTXRNVFl0TVRZdE5ERXRNVFl0TlRjZ01DMHhOaUF4TmkweE5pQTBNaUF3SURVM2JESXpPQ0F5TXpsak9DNDBJRGd1TlNBeU1DQXhNaUF6TVNBeE1pQXhNU0F3TGpVMklESXlMVE11TWlBek1TMHhNbXd5TXpndE1qTTVZekUyTFRFMklERTJMVFF5SURBdE5UZHpMVFF4TFRFMkxUVTNJREI2SWlCemRIbHNaVDBpWm1sc2JEb2pOMkkzWlRoaklpOCtQQzluUGp3dmMzWm5QZ289KVxuLy8gICAgIG5vLXJlcGVhdCByaWdodCAxZW0gY2VudGVyO1xuLy8gICBiYWNrZ3JvdW5kLXNpemU6IDEuMmVtO1xuLy8gICBwYWRkaW5nLXJpZ2h0OiAzZW07XG4vLyB9XG5cbi8vIGlucHV0OjpwbGFjZWhvbGRlcixcbi8vIHRleHRhcmVhOjpwbGFjZWhvbGRlciB7XG4vLyAgIG9wYWNpdHk6IDE7XG4vLyAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycztcbi8vICAgY29sb3I6IGluaGVyaXQ7XG4vLyB9XG5cbi8vIGlucHV0OmZvY3VzOjpwbGFjZWhvbGRlcixcbi8vIHRleHRhcmVhOmZvY3VzOjpwbGFjZWhvbGRlciB7XG4vLyAgIG9wYWNpdHk6IDAuMjtcbi8vIH1cblxuLy8gaW5wdXQ6LW1zLWlucHV0LXBsYWNlaG9sZGVyLFxuLy8gdGV4dGFyZWE6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbi8vICAgb3BhY2l0eTogMTtcbi8vICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzO1xuLy8gICBjb2xvcjogaW5oZXJpdDtcbi8vIH1cblxuLy8gaW5wdXQ6Zm9jdXM6LW1zLWlucHV0LXBsYWNlaG9sZGVyLFxuLy8gdGV4dGFyZWE6Zm9jdXM6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbi8vICAgb3BhY2l0eTogMC4yO1xuLy8gfVxuXG4vLyBpbnB1dFt0eXBlPVwic2VhcmNoXCJdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uLFxuLy8gaW5wdXRbdHlwZT1cInNlYXJjaFwiXTo6LXdlYmtpdC1zZWFyY2gtY2FuY2VsLWJ1dHRvbixcbi8vIGlucHV0W3R5cGU9XCJzZWFyY2hcIl06Oi13ZWJraXQtc2VhcmNoLXJlc3VsdHMtYnV0dG9uLFxuLy8gaW5wdXRbdHlwZT1cInNlYXJjaFwiXTo6LXdlYmtpdC1zZWFyY2gtcmVzdWx0cy1kZWNvcmF0aW9uIHtcbi8vICAgZGlzcGxheTogbm9uZTtcbi8vIH1cblxuLy8gYnV0dG9uLFxuLy8gaW5wdXRbdHlwZT1cImJ1dHRvblwiXSxcbi8vIGlucHV0W3R5cGU9XCJzdWJtaXRcIl0sXG4vLyBpbnB1dFt0eXBlPVwicmVzZXRcIl0ge1xuLy8gICBAZXh0ZW5kIC5vdXRzZXQ7XG5cbi8vICAgYm9yZGVyOiAwO1xuLy8gICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbi8vICAgcGFkZGluZzogMTBweCAwO1xuLy8gICB3aWR0aDogOGVtO1xuLy8gICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4vLyAgIGN1cnNvcjogcG9pbnRlcjtcbi8vICAgY29sb3I6IGluaGVyaXQ7XG4vLyAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuLy8gICB0cmFuc2l0aW9uLXByb3BlcnR5OiBiYWNrZ3JvdW5kLWNvbG9yLCBib3gtc2hhZG93O1xuLy8gICB0cmFuc2l0aW9uLWRlbGF5OiAwLjJzO1xuLy8gICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjJzO1xuXG4vLyAgICYuYWN0aXZlLFxuLy8gICAmOmFjdGl2ZSB7XG4vLyAgICAgQGV4dGVuZCAuaW5zZXQ7XG5cbi8vICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwcztcbi8vICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjFzO1xuLy8gICB9XG5cbi8vICAgQGVhY2ggJG5hbWUsICRjb2xvciBpbiAoXCJyZWRcIjogJHJlZCwgXCJncmVlblwiOiAkZ3JlZW4sIFwiYmx1ZVwiOiAkYmx1ZSkge1xuLy8gICAgIEBhdC1yb290IC4jeyRuYW1lfS1idXR0b24sXG4vLyAgICAgICAmLiN7JG5hbWV9LWJ1dHRvbiB7XG4vLyAgICAgICBAZXh0ZW5kIGJ1dHRvbjtcblxuLy8gICAgICAgJF9iZy1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgJGNvbG9yIDMwJSwgbGlnaHRlbigkY29sb3IsIDYlKSA4MCUpO1xuXG4vLyAgICAgICBjb2xvcjogd2hpdGU7XG4vLyAgICAgICBmb250LXdlaWdodDogYm9sZDtcbi8vICAgICAgIHRleHQtc2hhZG93OiAwIDAuMWVtIDAuMWVtIHRyYW5zcGFyZW50aXplKGJsYWNrLCAwLjMpO1xuLy8gICAgICAgYmFja2dyb3VuZDogJF9iZy1pbWFnZTtcbi8vICAgICAgIGJveC1zaGFkb3c6IDAgMCAwLjVlbSB0cmFuc3BhcmVudGl6ZSgkY29sb3IsIDAuMyksIDAgMCB0cmFuc3BhcmVudCxcbi8vICAgICAgICAgaW5zZXQgMCAtNXB4IDAgdHJhbnNwYXJlbnRpemUoYmxhY2ssIDAuOTUpLFxuLy8gICAgICAgICBpbnNldCAwIDJweCAwIHRyYW5zcGFyZW50aXplKHdoaXRlLCAwLjgpO1xuLy8gICAgICAgYm9yZGVyLXJhZGl1czogNnB4IDZweCA4cHggOHB4O1xuLy8gICAgICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYm94LXNoYWRvdywgYm9yZGVyLXJhZGl1cztcblxuLy8gICAgICAgJi5hY3RpdmUsXG4vLyAgICAgICAmOmFjdGl2ZSB7XG4vLyAgICAgICAgIGJhY2tncm91bmQ6ICRfYmctaW1hZ2U7XG4vLyAgICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbi8vICAgICAgICAgYm94LXNoYWRvdzogMCAwIHRyYW5zcGFyZW50LCAwIDAgdHJhbnNwYXJlbnQsXG4vLyAgICAgICAgICAgaW5zZXQgMCAycHggNXB4IDJweCB0cmFuc3BhcmVudGl6ZShibGFjaywgMC44KTtcbi8vICAgICAgIH1cbi8vICAgICB9XG4vLyAgIH1cbi8vIH1cblxuLy8gbGFiZWwge1xuLy8gICAmLFxuLy8gICAmICoge1xuLy8gICAgIGN1cnNvcjogcG9pbnRlcjtcbi8vICAgfVxuXG4vLyAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbi8vICAgcGFkZGluZzogMC41NmVtIDA7XG4vLyB9XG5cbi8vIGEge1xuLy8gICAmLFxuLy8gICAmOmxpbmssXG4vLyAgICY6dmlzaXRlZCxcbi8vICAgJjpob3ZlciAmOmFjdGl2ZSB7XG4vLyAgICAgJixcbi8vICAgICAmICoge1xuLy8gICAgICAgY3Vyc29yOiBwb2ludGVyO1xuLy8gICAgIH1cblxuLy8gICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuLy8gICAgIGNvbG9yOiAkYmx1ZTtcbi8vICAgICBmb250LXdlaWdodDogYm9sZDtcbi8vICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4vLyAgIH1cbi8vIH1cblxuLy8gaDEsXG4vLyBoMixcbi8vIGgzLFxuLy8gaDQsXG4vLyBoNSxcbi8vIGg2IHtcbi8vICAgbGluZS1oZWlnaHQ6IDEuNWVtO1xuLy8gfVxuXG4vLyBoMSB7XG4vLyAgIGZvbnQtc2l6ZTogNGVtO1xuLy8gICBmb250LXdlaWdodDogbGlnaHRlcjtcbi8vICAgbWFyZ2luOiAwLjdlbSAwO1xuLy8gfVxuXG4vLyBoMiB7XG4vLyAgIGZvbnQtc2l6ZTogM2VtO1xuLy8gICBmb250LXdlaWdodDogbGlnaHRlcjtcbi8vICAgbWFyZ2luOiAwLjhlbSAwO1xuLy8gfVxuXG4vLyBoMyB7XG4vLyAgIGZvbnQtc2l6ZTogMi41ZW07XG4vLyAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuLy8gICBtYXJnaW46IDAuOWVtIDA7XG4vLyB9XG5cbi8vIGg0IHtcbi8vICAgZm9udC1zaXplOiAyZW07XG4vLyAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuLy8gICBtYXJnaW46IDFlbSAwO1xuLy8gfVxuXG4vLyBoNSB7XG4vLyAgIG1hcmdpbjogMC41ZW0gMDtcbi8vICAgZm9udC1zaXplOiAxLjJlbTtcbi8vICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbi8vIH1cblxuLy8gaDYge1xuLy8gICBtYXJnaW46IDFlbSAwIDFlbSAxLjRlbTtcbi8vICAgZm9udC1zaXplOiAxZW07XG4vLyAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuLy8gfVxuXG4vLyBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0sXG4vLyBpbnB1dFt0eXBlPVwicmFkaW9cIl0ge1xuLy8gICAkX2JvcmRlci13aWR0aDogMC4xNWVtO1xuLy8gICAkX2JveC1zaGFkb3c6IDJweCAycHggM3B4IHRyYW5zcGFyZW50aXplKGJsYWNrLCAwLjgpLCAtMnB4IC0ycHggM3B4IHdoaXRlLFxuLy8gICAgIGluc2V0IDFweCAxcHggMnB4IHRyYW5zcGFyZW50aXplKGJsYWNrLCAwLjgpLCBpbnNldCAtMXB4IC0xcHggMnB4IHdoaXRlO1xuLy8gICBmb250LXNpemU6IDFlbTtcbi8vICAgY3Vyc29yOiBwb2ludGVyO1xuLy8gICBoZWlnaHQ6IDEuMmVtO1xuLy8gICB3aWR0aDogMS4yZW07XG4vLyAgIG1hcmdpbjogMCAwLjNlbTtcbi8vICAgYm94LXNoYWRvdzogJF9ib3gtc2hhZG93O1xuLy8gICBib3JkZXI6ICRfYm9yZGVyLXdpZHRoIHNvbGlkICRiZy1jb2xvcjtcbi8vICAgdmVydGljYWwtYWxpZ246IHRleHQtYm90dG9tO1xuLy8gICB0cmFuc2l0aW9uLXByb3BlcnR5OiBiYWNrZ3JvdW5kLCBib3gtc2hhZG93O1xuLy8gICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjJzO1xuXG4vLyAgICY6YWN0aXZlIHtcbi8vICAgICBib3gtc2hhZG93OiAkX2JveC1zaGFkb3csIGluc2V0IDAgMC4xZW0gMC4yNWVtIHRyYW5zcGFyZW50aXplKGJsYWNrLCAwLjgpO1xuLy8gICB9XG5cbi8vICAgJjpjaGVja2VkIHtcbi8vICAgICBib3JkZXItd2lkdGg6IDAuMWVtO1xuLy8gICAgIGJvcmRlci1jb2xvcjogZGFya2VuKCRibHVlLCAxMCUpO1xuLy8gICAgIGJhY2tncm91bmQtY29sb3I6ICRibHVlO1xuLy8gICB9XG4vLyB9XG5cbi8vIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSB7XG4vLyAgIGJvcmRlci1yYWRpdXM6IDI1JTtcblxuLy8gICAmOmNoZWNrZWQge1xuLy8gICAgIGJveC1zaGFkb3c6ICRnbG93LXNoYWRvdywgaW5zZXQgMCAtMC4xZW0gMCB0cmFuc3BhcmVudGl6ZShibGFjaywgMC44KSxcbi8vICAgICAgIGluc2V0IDAgMC4xZW0gMC4xZW0gdHJhbnNwYXJlbnRpemUod2hpdGUsIDAuOCk7XG4vLyAgIH1cbi8vIH1cblxuLy8gaW5wdXRbdHlwZT1cInJhZGlvXCJdIHtcbi8vICAgYm9yZGVyLXJhZGl1czogMTAwJTtcblxuLy8gICAmOmNoZWNrZWQge1xuLy8gICAgIGJveC1zaGFkb3c6ICRnbG93LXNoYWRvdztcbi8vICAgICBib3gtc2hhZG93OiAkZ2xvdy1zaGFkb3csIGluc2V0IDAgMC4xMmVtIDAuMWVtIHRyYW5zcGFyZW50aXplKHdoaXRlLCAwLjc1KTtcbi8vICAgICBib3JkZXItYm90dG9tLXdpZHRoOiAwLjE1ZW07XG4vLyAgIH1cbi8vIH1cblxuLy8gLmNoZWNrdGV4dCB7XG4vLyAgIHdpZHRoOiBhdXRvO1xuLy8gICBtYXJnaW46IDAuNWVtO1xuXG4vLyAgIGlucHV0IHtcbi8vICAgICBkaXNwbGF5OiBub25lO1xuXG4vLyAgICAgKyBzcGFuIHtcbi8vICAgICAgIEBleHRlbmQgYnV0dG9uO1xuXG4vLyAgICAgICBmb250LXdlaWdodDogYm9sZDtcbi8vICAgICAgIHBhZGRpbmc6IDFlbTtcbi8vICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDBzO1xuLy8gICAgIH1cblxuLy8gICAgICY6Y2hlY2tlZCArIHNwYW4ge1xuLy8gICAgICAgQGV4dGVuZCAuYmx1ZS1idXR0b247XG5cbi8vICAgICAgIHBhZGRpbmc6IDFlbTtcbi8vICAgICB9XG4vLyAgIH1cbi8vIH1cblxuLy8gLnN3aXRjaCB7XG4vLyAgICRfaGVpZ2h0OiAycmVtO1xuLy8gICAkX3dpZHRoOiA4cmVtO1xuLy8gICAkX2hhbmRsZS13aWR0aDogJF9oZWlnaHQ7XG4vLyAgICRfaGFuZGxlLXRyYW5zbGF0aW9uOiAkX3dpZHRoIC0gJF9oYW5kbGUtd2lkdGg7XG5cbi8vICAgaGVpZ2h0OiAkX2hlaWdodDtcbi8vICAgd2lkdGg6ICRfd2lkdGg7XG4vLyAgIHBhZGRpbmc6IDA7XG4vLyAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuLy8gICBpbnB1dCB7XG4vLyAgICAgZGlzcGxheTogbm9uZTtcblxuLy8gICAgICsgZGl2IHtcbi8vICAgICAgIGhlaWdodDogMTAwJTtcbi8vICAgICAgIHdpZHRoOiAxMDAlO1xuLy8gICAgICAgYm9yZGVyLXJhZGl1czogOTk5cHg7XG4vLyAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbi8vICAgICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGJveC1zaGFkb3csIGJhY2tncm91bmQtY29sb3I7XG4vLyAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjJzO1xuLy8gICAgICAgdHJhbnNpdGlvbi1kZWxheTogMC4ycztcbi8vICAgICAgIGJveC1zaGFkb3c6IDNweCAzcHggMnB4IC0ycHggdHJhbnNwYXJlbnRpemUoYmxhY2ssIDAuOSksXG4vLyAgICAgICAgIGluc2V0IDJweCAycHggMnB4IDFweCB0cmFuc3BhcmVudGl6ZShibGFjaywgMC45KSxcbi8vICAgICAgICAgaW5zZXQgLTJweCAtMnB4IDFweCB3aGl0ZTtcblxuLy8gICAgICAgJjo6YmVmb3JlIHtcbi8vICAgICAgICAgY29udGVudDogXCJcIjtcbi8vICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4vLyAgICAgICAgIGhlaWdodDogY2FsYygjeyRfaGFuZGxlLXdpZHRofSArIDRweCk7XG4vLyAgICAgICAgIHdpZHRoOiBjYWxjKCN7JF9oYW5kbGUtd2lkdGh9ICsgNHB4KTtcbi8vICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbi8vICAgICAgICAgYm9yZGVyOiBzb2xpZCB3aGl0ZSAzcHg7XG4vLyAgICAgICAgIGJhY2tncm91bmQ6ICRibHVlO1xuLy8gICAgICAgICBib3gtc2hhZG93OiAwIDNweCAxMHB4IHRyYW5zcGFyZW50aXplKGJsYWNrLCAwLjgpLFxuLy8gICAgICAgICAgIGluc2V0IDAgLTFweCAzcHggdHJhbnNwYXJlbnRpemUoYmxhY2ssIDAuOSk7XG4vLyAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC02cHgpO1xuLy8gICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycztcbi8vICAgICAgIH1cbi8vICAgICB9XG5cbi8vICAgICAmOmNoZWNrZWQgKyBkaXYge1xuLy8gICAgICAgYmFja2dyb3VuZDogJGJsdWU7XG4vLyAgICAgICBib3gtc2hhZG93OiAkZ2xvdy1zaGFkb3csIGluc2V0IDAgMnB4IDJweCAycHggdHJhbnNwYXJlbnRpemUoYmxhY2ssIDAuNyksXG4vLyAgICAgICAgIGluc2V0IDAgMCB0cmFuc3BhcmVudDtcblxuLy8gICAgICAgJjo6YmVmb3JlIHtcbi8vICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoJF9oYW5kbGUtdHJhbnNsYXRpb24sIC02cHgpO1xuLy8gICAgICAgfVxuLy8gICAgIH1cbi8vICAgfVxuLy8gfVxuXG4vLyBociB7XG4vLyAgIEBleHRlbmQgLmluc2V0O1xuLy8gICB3aWR0aDogNzIlO1xuLy8gICBoZWlnaHQ6IDhweDtcbi8vICAgZmxvYXQ6IHJpZ2h0O1xuLy8gICBib3JkZXI6IDA7XG4vLyB9XG5cbi8vIGNvZGUsXG4vLyBwcmUge1xuLy8gICBwYWRkaW5nOiAwLjVlbSAxZW07XG4vLyAgIGJvcmRlci1yYWRpdXM6IDRweDtcbi8vICAgb3ZlcmZsb3c6IGF1dG87XG4vLyAgIGJveC1zaGFkb3c6IDAgNXB4IDMwcHggMCB0cmFuc3BhcmVudGl6ZShibGFjaywgMC45NSk7XG4vLyB9XG5cbi8vIGNvZGUge1xuLy8gICBiYWNrZ3JvdW5kOiAjZTZlNmU2O1xuLy8gfVxuXG4vLyBwcmUge1xuLy8gICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbi8vICAgbWFyZ2luOiA0ZW0gMDtcbi8vIH1cblxuLy8gY29kZSxcbi8vIHByZSB7XG4vLyAgICYsXG4vLyAgICYgKiB7XG4vLyAgICAgZm9udC1zaXplOiAwLjlyZW07XG4vLyAgICAgbGluZS1oZWlnaHQ6IDJlbTtcbi8vICAgICBjdXJzb3I6IGF1dG87XG4vLyAgICAgdXNlci1zZWxlY3Q6IHRleHQ7XG4vLyAgICAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiB0ZXh0O1xuLy8gICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IHRleHQ7XG4vLyAgICAgLWtodG1sLXVzZXItc2VsZWN0OiB0ZXh0O1xuLy8gICAgIC1tb3otdXNlci1zZWxlY3Q6IHRleHQ7XG4vLyAgICAgLW1zLXVzZXItc2VsZWN0OiB0ZXh0O1xuLy8gICB9XG4vLyB9XG5cbi8vIGJsb2NrcXVvdGUge1xuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbi8vICAgcGFkZGluZzogMC41ZW0gMWVtO1xuLy8gICBib3JkZXItcmFkaXVzOiA0cHg7XG4vLyAgIGJveC1zaGFkb3c6IDAgNXB4IDMwcHggMCB0cmFuc3BhcmVudGl6ZShibGFjaywgMC45NSk7XG4vLyAgIGJvcmRlci1sZWZ0OiA2cHggc29saWQgJGJsdWU7XG4vLyB9XG4iLCJAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ0NhdmVhdCc7XG4gICAgc3JjOiB1cmwoJy4uLy4uL2ZvbnRzL0JvbGQvQ2F2ZWF0LUJvbGQud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXG4gICAgICAgIHVybCgnLi4vLi4vZm9udHMvQm9sZC9DYXZlYXQtQm9sZC53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtZGlzcGxheTogc3dhcDtcbn1cblxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdDYXZlYXQnO1xuICAgIHNyYzogdXJsKCcuLi8uLi9mb250cy9SZWd1bGFyL0NhdmVhdC1SZWd1bGFyLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxuICAgICAgICB1cmwoJy4uLy4uL2ZvbnRzL1JlZ3VsYXIvQ2F2ZWF0LVJlZ3VsYXIud29mZicpIGZvcm1hdCgnd29mZicpO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtZGlzcGxheTogc3dhcDtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnRmlndXJpbmVTeW1ib2xUMSc7XG4gIHNyYzogdXJsKCcuLi8uLi9mb250cy8zcmQgUGFydHkvQ2hlc3NWYXJpYW50cy9GaWd1cmluZVN5bWJvbFQxQm9sZC53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcbiAgICAgIHVybCgnLi4vLi4vZm9udHMvM3JkIFBhcnR5L0NoZXNzVmFyaWFudHMvRmlndXJpbmVTeW1ib2xUMUJvbGQud29mZicpIGZvcm1hdCgnd29mZicpO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ0ZpZ3VyaW5lU3ltYm9sVDEnO1xuICBzcmM6IHVybCgnLi4vLi4vZm9udHMvM3JkIFBhcnR5L0NoZXNzVmFyaWFudHMvRmlndXJpbmVTeW1ib2xUMS53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcbiAgICAgIHVybCgnLi4vLi4vZm9udHMvM3JkIFBhcnR5L0NoZXNzVmFyaWFudHMvRmlndXJpbmVTeW1ib2xUMS53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xufVxuXG4iLCIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiQ2F2ZWF0XCI7XG4gIHNyYzogdXJsKFwiLi4vLi4vZm9udHMvQm9sZC9DYXZlYXQtQm9sZC53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKSwgdXJsKFwiLi4vLi4vZm9udHMvQm9sZC9DYXZlYXQtQm9sZC53b2ZmXCIpIGZvcm1hdChcIndvZmZcIik7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJDYXZlYXRcIjtcbiAgc3JjOiB1cmwoXCIuLi8uLi9mb250cy9SZWd1bGFyL0NhdmVhdC1SZWd1bGFyLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpLCB1cmwoXCIuLi8uLi9mb250cy9SZWd1bGFyL0NhdmVhdC1SZWd1bGFyLndvZmZcIikgZm9ybWF0KFwid29mZlwiKTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiRmlndXJpbmVTeW1ib2xUMVwiO1xuICBzcmM6IHVybChcIi4uLy4uL2ZvbnRzLzNyZCBQYXJ0eS9DaGVzc1ZhcmlhbnRzL0ZpZ3VyaW5lU3ltYm9sVDFCb2xkLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpLCB1cmwoXCIuLi8uLi9mb250cy8zcmQgUGFydHkvQ2hlc3NWYXJpYW50cy9GaWd1cmluZVN5bWJvbFQxQm9sZC53b2ZmXCIpIGZvcm1hdChcIndvZmZcIik7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJGaWd1cmluZVN5bWJvbFQxXCI7XG4gIHNyYzogdXJsKFwiLi4vLi4vZm9udHMvM3JkIFBhcnR5L0NoZXNzVmFyaWFudHMvRmlndXJpbmVTeW1ib2xUMS53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKSwgdXJsKFwiLi4vLi4vZm9udHMvM3JkIFBhcnR5L0NoZXNzVmFyaWFudHMvRmlndXJpbmVTeW1ib2xUMS53b2ZmXCIpIGZvcm1hdChcIndvZmZcIik7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xufVxuLyoqKioqKioqKioqKioqKioqKiogTWVudSAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgQ29udGFpbmVyIFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIENvbnRhaW5lciBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBDb250YWluZXIgVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgSGlnaGxpZ2h0IFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIEFubm90YXRpb24gVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgVmFyaWF0aW9uIFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIFBseSBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKioqIENvbnRyb2wgQ29sb3JzICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqKiBCb2FyZCBDb2xvcnMgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuOnJvb3Qge1xuICAtLWJnLWNvbG9yOiAjZjJmM2Y3O1xuICAtLWZnLWNvbG9yOiAjMzgzYTQxO1xuICAtLXJlZDogI2U0MzAzMDtcbiAgLS1ncmVlbjogIzE5YTE4NztcbiAgLS1ibHVlOiAjMzY3YmYwO1xuICAtLWRhcmstYmx1ZTogIzI2NWFiMTtcbiAgLS1tYXJvb246ICNiODE3NGM7XG4gIC0tcHVycGxlOiAjOGM0MmFiO1xufVxuXG4ub2xnYS1jb250YWluZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMHB4O1xuICBib3R0b206IDBweDtcbiAgbGVmdDogMHB4O1xuICByaWdodDogMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBvdmVyZmxvdy15OiBoaWRkZW47XG59XG5cbi5mZW5idXR0b24ge1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogODBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTBweDtcbiAgYm90dG9tOiAxJTtcbn1cblxub2xnYS1zY29yZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDFweDtcbn1cblxuY2FudmFzLWNoZXNzYm9hcmQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMXB4O1xuICBsZWZ0OiAxcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMXB4O1xufVxuXG5vbGdhLXRpdGxlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogNHB4O1xuICB0b3A6IDBweDtcbiAgaGVpZ2h0OiA1JTtcbiAgd2lkdGg6IGNhbGMoNTAlIC0xMHB4KTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5vbGdhLWNvbnRyb2xzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMXB4O1xuICBib3R0b206IDglO1xuICBoZWlnaHQ6IDEyOHB4O1xuICB3aWR0aDogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1nc0JhY2tncm91bmQpO1xuICBib3JkZXI6IGJsYWNrIHNvbGlkIDFweDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xufVxuXG5vbGdhLXN0YXR1cyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkb3dzOiA0NSU7XG4gIHJpZ2h0OiAxcHg7XG59XG5cbm9sZ2EtbWVudSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwcHg7XG4gIGJvdHRvbTogMHB4O1xuICBsZWZ0OiAwcHg7XG4gIHJpZ2h0OiAwcHg7XG4gIGJhY2tncm91bmQ6ICMxMDBjMGNlMztcbiAgei1pbmRleDogMTAwMDtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Olga, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'olga',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss'],
            }]
    }], function () { return [{ type: _services_olga_service__WEBPACK_IMPORTED_MODULE_5__["OlgaService"] }, { type: _services_colors_service__WEBPACK_IMPORTED_MODULE_6__["ColorService"] }, { type: _services_layout_service__WEBPACK_IMPORTED_MODULE_7__["LayoutService"] }]; }, { gameScoreComponent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_game_score_game_score_ux__WEBPACK_IMPORTED_MODULE_1__["GamescoreUxComponent"]]
        }], canvasBoardComponent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_canvas_chessboard_canvas_chessboard_component__WEBPACK_IMPORTED_MODULE_2__["CanvasChessBoard"]]
        }], appContainer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['olgaContainer']
        }], menuComponent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_olga_menu_olga_menu_component__WEBPACK_IMPORTED_MODULE_4__["OlgaMenuComponent"]]
        }], controlsComponent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_olga_controls_olga_controls_component__WEBPACK_IMPORTED_MODULE_3__["OlgaControlsComponent"]]
        }], pgnString: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], gameScoreWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], oldWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], keymap: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _olga_menu_gamescore_menu_gamescore_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./olga-menu/gamescore-menu/gamescore-menu.component */ "./src/app/olga-menu/gamescore-menu/gamescore-menu.component.ts");
/* harmony import */ var _game_score_game_score_ux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./game-score/game-score.ux */ "./src/app/game-score/game-score.ux.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
/* harmony import */ var _game_score_game_score_item_game_score_item_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./game-score/game-score-item/game-score-item.component */ "./src/app/game-score/game-score-item/game-score-item.component.ts");
/* harmony import */ var _services_colors_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/colors.service */ "./src/app/services/colors.service.ts");
/* harmony import */ var _common_toggle_switch_toggle_switch_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./common/toggle-switch/toggle-switch.component */ "./src/app/common/toggle-switch/toggle-switch.component.ts");
/* harmony import */ var _common_labeled_slider_labeled_slider_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./common/labeled-slider/labeled-slider.component */ "./src/app/common/labeled-slider/labeled-slider.component.ts");
/* harmony import */ var _olga_menu_main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./olga-menu/main-menu/main-menu.component */ "./src/app/olga-menu/main-menu/main-menu.component.ts");
/* harmony import */ var _olga_menu_board_menu_board_menu_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./olga-menu/board-menu/board-menu.component */ "./src/app/olga-menu/board-menu/board-menu.component.ts");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _olga_menu_score_item_menu_score_item_menu_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./olga-menu/score-item-menu/score-item-menu.component */ "./src/app/olga-menu/score-item-menu/score-item-menu.component.ts");
/* harmony import */ var _services_olga_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./services/olga.service */ "./src/app/services/olga.service.ts");
/* harmony import */ var _services_layout_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./services/layout.service */ "./src/app/services/layout.service.ts");
/* harmony import */ var _canvas_chessboard_canvas_chessboard_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./canvas-chessboard/canvas-chessboard.component */ "./src/app/canvas-chessboard/canvas-chessboard.component.ts");
/* harmony import */ var _olga_controls_olga_controls_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./olga-controls/olga-controls.component */ "./src/app/olga-controls/olga-controls.component.ts");
/* harmony import */ var _olga_status_olga_status_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./olga-status/olga-status.component */ "./src/app/olga-status/olga-status.component.ts");
/* harmony import */ var _olga_title_olga_title_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./olga-title/olga-title.component */ "./src/app/olga-title/olga-title.component.ts");
/* harmony import */ var _olga_menu_keymap_menu_keymap_menu_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./olga-menu/keymap-menu/keymap-menu.component */ "./src/app/olga-menu/keymap-menu/keymap-menu.component.ts");
/* harmony import */ var _olga_menu_general_menu_general_menu_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./olga-menu/general-menu/general-menu.component */ "./src/app/olga-menu/general-menu/general-menu.component.ts");
/* harmony import */ var _olga_menu_olga_menu_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./olga-menu/olga-menu.component */ "./src/app/olga-menu/olga-menu.component.ts");
/* harmony import */ var _olga_menu_keymap_menu_keymap_item_keymap_item_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./olga-menu/keymap-menu/keymap-item/keymap-item.component */ "./src/app/olga-menu/keymap-menu/keymap-item/keymap-item.component.ts");
/* harmony import */ var _olga_menu_score_item_menu_variation_item_variation_item_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./olga-menu/score-item-menu/variation-item/variation-item.component */ "./src/app/olga-menu/score-item-menu/variation-item/variation-item.component.ts");
/* harmony import */ var _olga_menu_common_menu_section_menu_section_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./olga-menu/common/menu-section/menu-section.component */ "./src/app/olga-menu/common/menu-section/menu-section.component.ts");
/* harmony import */ var _olga_menu_controls_layout_mode_select_layout_mode_select_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./olga-menu/controls/layout-mode-select/layout-mode-select.component */ "./src/app/olga-menu/controls/layout-mode-select/layout-mode-select.component.ts");
/* harmony import */ var _olga_menu_controls_color_select_color_select_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./olga-menu/controls/color-select/color-select.component */ "./src/app/olga-menu/controls/color-select/color-select.component.ts");
/* harmony import */ var _olga_menu_themes_menu_themes_menu_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./olga-menu/themes-menu/themes-menu.component */ "./src/app/olga-menu/themes-menu/themes-menu.component.ts");
/* harmony import */ var _olga_menu_pgn_menu_pgn_menu_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./olga-menu/pgn-menu/pgn-menu.component */ "./src/app/olga-menu/pgn-menu/pgn-menu.component.ts");
/* harmony import */ var _cookie_consent_cookie_consent_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./cookie-consent/cookie-consent.component */ "./src/app/cookie-consent/cookie-consent.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/bidi.js");
/* harmony import */ var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @angular/cdk/text-field */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/text-field.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/scrolling.js");



























































class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["Olga"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_services_layout_service__WEBPACK_IMPORTED_MODULE_25__["LayoutService"], _services_colors_service__WEBPACK_IMPORTED_MODULE_15__["ColorService"], _services_olga_service__WEBPACK_IMPORTED_MODULE_24__["OlgaService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__["MatDividerModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__["MatIconModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_20__["MatInputModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__["MatGridListModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_21__["MatMenuModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_9__["MatSliderModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_12__["MatSlideToggleModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__["MatTabsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["Olga"],
        _olga_menu_gamescore_menu_gamescore_menu_component__WEBPACK_IMPORTED_MODULE_4__["GamescoreMenuComponent"],
        _game_score_game_score_ux__WEBPACK_IMPORTED_MODULE_5__["GamescoreUxComponent"],
        _game_score_game_score_item_game_score_item_component__WEBPACK_IMPORTED_MODULE_14__["GameScoreItemComponent"],
        _common_toggle_switch_toggle_switch_component__WEBPACK_IMPORTED_MODULE_16__["ToggleSwitchComponent"],
        _common_labeled_slider_labeled_slider_component__WEBPACK_IMPORTED_MODULE_17__["LabeledSliderComponent"],
        _olga_menu_main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_18__["MainMenuComponent"],
        _olga_menu_board_menu_board_menu_component__WEBPACK_IMPORTED_MODULE_19__["BoardMenuComponent"],
        _olga_menu_score_item_menu_score_item_menu_component__WEBPACK_IMPORTED_MODULE_23__["ScoreItemMenu"],
        _canvas_chessboard_canvas_chessboard_component__WEBPACK_IMPORTED_MODULE_26__["CanvasChessBoard"],
        _olga_controls_olga_controls_component__WEBPACK_IMPORTED_MODULE_27__["OlgaControlsComponent"],
        _olga_status_olga_status_component__WEBPACK_IMPORTED_MODULE_28__["OlgaStatusComponent"],
        _olga_title_olga_title_component__WEBPACK_IMPORTED_MODULE_29__["OlgaTitleComponent"],
        _olga_menu_keymap_menu_keymap_menu_component__WEBPACK_IMPORTED_MODULE_30__["KeymapMenuComponent"],
        _olga_menu_general_menu_general_menu_component__WEBPACK_IMPORTED_MODULE_31__["GeneralMenuComponent"],
        _olga_menu_keymap_menu_keymap_item_keymap_item_component__WEBPACK_IMPORTED_MODULE_33__["KeymapItemComponent"],
        _olga_menu_score_item_menu_variation_item_variation_item_component__WEBPACK_IMPORTED_MODULE_34__["VariationItemComponent"],
        _olga_menu_olga_menu_component__WEBPACK_IMPORTED_MODULE_32__["OlgaMenuComponent"],
        _olga_menu_common_menu_section_menu_section_component__WEBPACK_IMPORTED_MODULE_35__["MenuSectionComponent"],
        _olga_menu_controls_layout_mode_select_layout_mode_select_component__WEBPACK_IMPORTED_MODULE_36__["LayoutModeSelectComponent"],
        _olga_menu_controls_color_select_color_select_component__WEBPACK_IMPORTED_MODULE_37__["ColorSelectComponent"],
        _olga_menu_themes_menu_themes_menu_component__WEBPACK_IMPORTED_MODULE_38__["ThemesMenuComponent"],
        _olga_menu_pgn_menu_pgn_menu_component__WEBPACK_IMPORTED_MODULE_39__["PgnMenuComponent"],
        _cookie_consent_cookie_consent_component__WEBPACK_IMPORTED_MODULE_40__["CookieConsentComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__["MatDividerModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_20__["MatInputModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__["MatGridListModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_21__["MatMenuModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_9__["MatSliderModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_12__["MatSlideToggleModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__["MatTabsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["Olga"],
                    _olga_menu_gamescore_menu_gamescore_menu_component__WEBPACK_IMPORTED_MODULE_4__["GamescoreMenuComponent"],
                    _game_score_game_score_ux__WEBPACK_IMPORTED_MODULE_5__["GamescoreUxComponent"],
                    _game_score_game_score_item_game_score_item_component__WEBPACK_IMPORTED_MODULE_14__["GameScoreItemComponent"],
                    _common_toggle_switch_toggle_switch_component__WEBPACK_IMPORTED_MODULE_16__["ToggleSwitchComponent"],
                    _common_labeled_slider_labeled_slider_component__WEBPACK_IMPORTED_MODULE_17__["LabeledSliderComponent"],
                    _olga_menu_main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_18__["MainMenuComponent"],
                    _olga_menu_board_menu_board_menu_component__WEBPACK_IMPORTED_MODULE_19__["BoardMenuComponent"],
                    _olga_menu_score_item_menu_score_item_menu_component__WEBPACK_IMPORTED_MODULE_23__["ScoreItemMenu"],
                    _canvas_chessboard_canvas_chessboard_component__WEBPACK_IMPORTED_MODULE_26__["CanvasChessBoard"],
                    _olga_controls_olga_controls_component__WEBPACK_IMPORTED_MODULE_27__["OlgaControlsComponent"],
                    _olga_status_olga_status_component__WEBPACK_IMPORTED_MODULE_28__["OlgaStatusComponent"],
                    _olga_title_olga_title_component__WEBPACK_IMPORTED_MODULE_29__["OlgaTitleComponent"],
                    _olga_menu_keymap_menu_keymap_menu_component__WEBPACK_IMPORTED_MODULE_30__["KeymapMenuComponent"],
                    _olga_menu_general_menu_general_menu_component__WEBPACK_IMPORTED_MODULE_31__["GeneralMenuComponent"],
                    _olga_menu_keymap_menu_keymap_item_keymap_item_component__WEBPACK_IMPORTED_MODULE_33__["KeymapItemComponent"],
                    _olga_menu_score_item_menu_variation_item_variation_item_component__WEBPACK_IMPORTED_MODULE_34__["VariationItemComponent"],
                    _olga_menu_olga_menu_component__WEBPACK_IMPORTED_MODULE_32__["OlgaMenuComponent"],
                    _olga_menu_common_menu_section_menu_section_component__WEBPACK_IMPORTED_MODULE_35__["MenuSectionComponent"],
                    _olga_menu_controls_layout_mode_select_layout_mode_select_component__WEBPACK_IMPORTED_MODULE_36__["LayoutModeSelectComponent"],
                    _olga_menu_controls_color_select_color_select_component__WEBPACK_IMPORTED_MODULE_37__["ColorSelectComponent"],
                    _olga_menu_themes_menu_themes_menu_component__WEBPACK_IMPORTED_MODULE_38__["ThemesMenuComponent"],
                    _olga_menu_pgn_menu_pgn_menu_component__WEBPACK_IMPORTED_MODULE_39__["PgnMenuComponent"],
                    _cookie_consent_cookie_consent_component__WEBPACK_IMPORTED_MODULE_40__["CookieConsentComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"],
                    _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__["MatDividerModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__["MatIconModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_20__["MatInputModule"],
                    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__["MatGridListModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_21__["MatMenuModule"],
                    _angular_material_slider__WEBPACK_IMPORTED_MODULE_9__["MatSliderModule"],
                    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_12__["MatSlideToggleModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__["MatTabsModule"],
                ],
                providers: [_services_layout_service__WEBPACK_IMPORTED_MODULE_25__["LayoutService"], _services_colors_service__WEBPACK_IMPORTED_MODULE_15__["ColorService"], _services_olga_service__WEBPACK_IMPORTED_MODULE_24__["OlgaService"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["Olga"]],
            }]
    }], null, null); })();
_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetComponentScope"](_app_component__WEBPACK_IMPORTED_MODULE_3__["Olga"], [_angular_common__WEBPACK_IMPORTED_MODULE_41__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_41__["NgComponentOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_41__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_41__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_41__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_41__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_41__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_41__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_41__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_41__["NgPlural"], _angular_common__WEBPACK_IMPORTED_MODULE_41__["NgPluralCase"], _angular_router__WEBPACK_IMPORTED_MODULE_42__["RouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_42__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_42__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_42__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_42__["ɵangular_packages_router_router_l"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatAnchor"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_43__["Dir"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardTitleGroup"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardActions"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardFooter"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardSmImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardMdImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardLgImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardXlImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardAvatar"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__["MatDivider"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__["MatIcon"], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_44__["CdkAutofill"], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_44__["CdkTextareaAutosize"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_45__["MatError"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_45__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_45__["MatHint"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_45__["MatLabel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_45__["MatPlaceholder"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_45__["MatPrefix"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_45__["MatSuffix"], _angular_material_input__WEBPACK_IMPORTED_MODULE_20__["MatInput"], _angular_material_input__WEBPACK_IMPORTED_MODULE_20__["MatTextareaAutosize"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__["MatGridList"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__["MatGridTile"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__["MatGridTileText"], _angular_material_core__WEBPACK_IMPORTED_MODULE_46__["MatLine"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__["MatGridTileHeaderCssMatStyler"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__["MatGridTileFooterCssMatStyler"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__["MatGridAvatarCssMatStyler"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_47__["CdkScrollable"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_21__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_21__["MatMenuItem"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_21__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_21__["MatMenuContent"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_9__["MatSlider"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_12__["MatSlideToggleRequiredValidator"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_12__["MatSlideToggle"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__["MatTabLabel"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__["MatTab"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__["MatTabNav"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__["MatTabLink"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__["MatTabContent"], _app_component__WEBPACK_IMPORTED_MODULE_3__["Olga"],
    _olga_menu_gamescore_menu_gamescore_menu_component__WEBPACK_IMPORTED_MODULE_4__["GamescoreMenuComponent"],
    _game_score_game_score_ux__WEBPACK_IMPORTED_MODULE_5__["GamescoreUxComponent"],
    _game_score_game_score_item_game_score_item_component__WEBPACK_IMPORTED_MODULE_14__["GameScoreItemComponent"],
    _common_toggle_switch_toggle_switch_component__WEBPACK_IMPORTED_MODULE_16__["ToggleSwitchComponent"],
    _common_labeled_slider_labeled_slider_component__WEBPACK_IMPORTED_MODULE_17__["LabeledSliderComponent"],
    _olga_menu_main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_18__["MainMenuComponent"],
    _olga_menu_board_menu_board_menu_component__WEBPACK_IMPORTED_MODULE_19__["BoardMenuComponent"],
    _olga_menu_score_item_menu_score_item_menu_component__WEBPACK_IMPORTED_MODULE_23__["ScoreItemMenu"],
    _canvas_chessboard_canvas_chessboard_component__WEBPACK_IMPORTED_MODULE_26__["CanvasChessBoard"],
    _olga_controls_olga_controls_component__WEBPACK_IMPORTED_MODULE_27__["OlgaControlsComponent"],
    _olga_status_olga_status_component__WEBPACK_IMPORTED_MODULE_28__["OlgaStatusComponent"],
    _olga_title_olga_title_component__WEBPACK_IMPORTED_MODULE_29__["OlgaTitleComponent"],
    _olga_menu_keymap_menu_keymap_menu_component__WEBPACK_IMPORTED_MODULE_30__["KeymapMenuComponent"],
    _olga_menu_general_menu_general_menu_component__WEBPACK_IMPORTED_MODULE_31__["GeneralMenuComponent"],
    _olga_menu_keymap_menu_keymap_item_keymap_item_component__WEBPACK_IMPORTED_MODULE_33__["KeymapItemComponent"],
    _olga_menu_score_item_menu_variation_item_variation_item_component__WEBPACK_IMPORTED_MODULE_34__["VariationItemComponent"],
    _olga_menu_olga_menu_component__WEBPACK_IMPORTED_MODULE_32__["OlgaMenuComponent"],
    _olga_menu_common_menu_section_menu_section_component__WEBPACK_IMPORTED_MODULE_35__["MenuSectionComponent"],
    _olga_menu_controls_layout_mode_select_layout_mode_select_component__WEBPACK_IMPORTED_MODULE_36__["LayoutModeSelectComponent"],
    _olga_menu_controls_color_select_color_select_component__WEBPACK_IMPORTED_MODULE_37__["ColorSelectComponent"],
    _olga_menu_themes_menu_themes_menu_component__WEBPACK_IMPORTED_MODULE_38__["ThemesMenuComponent"],
    _olga_menu_pgn_menu_pgn_menu_component__WEBPACK_IMPORTED_MODULE_39__["PgnMenuComponent"],
    _cookie_consent_cookie_consent_component__WEBPACK_IMPORTED_MODULE_40__["CookieConsentComponent"]], [_angular_common__WEBPACK_IMPORTED_MODULE_41__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_41__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_41__["LowerCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_41__["JsonPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_41__["SlicePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_41__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_41__["PercentPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_41__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_41__["CurrencyPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_41__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_41__["I18nPluralPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_41__["I18nSelectPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_41__["KeyValuePipe"]]);
_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetComponentScope"](_game_score_game_score_ux__WEBPACK_IMPORTED_MODULE_5__["GamescoreUxComponent"], [_angular_common__WEBPACK_IMPORTED_MODULE_41__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_41__["NgComponentOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_41__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_41__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_41__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_41__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_41__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_41__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_41__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_41__["NgPlural"], _angular_common__WEBPACK_IMPORTED_MODULE_41__["NgPluralCase"], _angular_router__WEBPACK_IMPORTED_MODULE_42__["RouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_42__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_42__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_42__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_42__["ɵangular_packages_router_router_l"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatAnchor"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_43__["Dir"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardTitleGroup"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardActions"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardFooter"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardSmImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardMdImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardLgImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardXlImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardAvatar"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__["MatDivider"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__["MatIcon"], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_44__["CdkAutofill"], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_44__["CdkTextareaAutosize"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_45__["MatError"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_45__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_45__["MatHint"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_45__["MatLabel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_45__["MatPlaceholder"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_45__["MatPrefix"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_45__["MatSuffix"], _angular_material_input__WEBPACK_IMPORTED_MODULE_20__["MatInput"], _angular_material_input__WEBPACK_IMPORTED_MODULE_20__["MatTextareaAutosize"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__["MatGridList"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__["MatGridTile"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__["MatGridTileText"], _angular_material_core__WEBPACK_IMPORTED_MODULE_46__["MatLine"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__["MatGridTileHeaderCssMatStyler"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__["MatGridTileFooterCssMatStyler"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__["MatGridAvatarCssMatStyler"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_47__["CdkScrollable"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_21__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_21__["MatMenuItem"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_21__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_21__["MatMenuContent"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_9__["MatSlider"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_12__["MatSlideToggleRequiredValidator"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_12__["MatSlideToggle"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__["MatTabLabel"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__["MatTab"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__["MatTabNav"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__["MatTabLink"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__["MatTabContent"], _app_component__WEBPACK_IMPORTED_MODULE_3__["Olga"],
    _olga_menu_gamescore_menu_gamescore_menu_component__WEBPACK_IMPORTED_MODULE_4__["GamescoreMenuComponent"],
    _game_score_game_score_ux__WEBPACK_IMPORTED_MODULE_5__["GamescoreUxComponent"],
    _game_score_game_score_item_game_score_item_component__WEBPACK_IMPORTED_MODULE_14__["GameScoreItemComponent"],
    _common_toggle_switch_toggle_switch_component__WEBPACK_IMPORTED_MODULE_16__["ToggleSwitchComponent"],
    _common_labeled_slider_labeled_slider_component__WEBPACK_IMPORTED_MODULE_17__["LabeledSliderComponent"],
    _olga_menu_main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_18__["MainMenuComponent"],
    _olga_menu_board_menu_board_menu_component__WEBPACK_IMPORTED_MODULE_19__["BoardMenuComponent"],
    _olga_menu_score_item_menu_score_item_menu_component__WEBPACK_IMPORTED_MODULE_23__["ScoreItemMenu"],
    _canvas_chessboard_canvas_chessboard_component__WEBPACK_IMPORTED_MODULE_26__["CanvasChessBoard"],
    _olga_controls_olga_controls_component__WEBPACK_IMPORTED_MODULE_27__["OlgaControlsComponent"],
    _olga_status_olga_status_component__WEBPACK_IMPORTED_MODULE_28__["OlgaStatusComponent"],
    _olga_title_olga_title_component__WEBPACK_IMPORTED_MODULE_29__["OlgaTitleComponent"],
    _olga_menu_keymap_menu_keymap_menu_component__WEBPACK_IMPORTED_MODULE_30__["KeymapMenuComponent"],
    _olga_menu_general_menu_general_menu_component__WEBPACK_IMPORTED_MODULE_31__["GeneralMenuComponent"],
    _olga_menu_keymap_menu_keymap_item_keymap_item_component__WEBPACK_IMPORTED_MODULE_33__["KeymapItemComponent"],
    _olga_menu_score_item_menu_variation_item_variation_item_component__WEBPACK_IMPORTED_MODULE_34__["VariationItemComponent"],
    _olga_menu_olga_menu_component__WEBPACK_IMPORTED_MODULE_32__["OlgaMenuComponent"],
    _olga_menu_common_menu_section_menu_section_component__WEBPACK_IMPORTED_MODULE_35__["MenuSectionComponent"],
    _olga_menu_controls_layout_mode_select_layout_mode_select_component__WEBPACK_IMPORTED_MODULE_36__["LayoutModeSelectComponent"],
    _olga_menu_controls_color_select_color_select_component__WEBPACK_IMPORTED_MODULE_37__["ColorSelectComponent"],
    _olga_menu_themes_menu_themes_menu_component__WEBPACK_IMPORTED_MODULE_38__["ThemesMenuComponent"],
    _olga_menu_pgn_menu_pgn_menu_component__WEBPACK_IMPORTED_MODULE_39__["PgnMenuComponent"],
    _cookie_consent_cookie_consent_component__WEBPACK_IMPORTED_MODULE_40__["CookieConsentComponent"]], [_angular_common__WEBPACK_IMPORTED_MODULE_41__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_41__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_41__["LowerCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_41__["JsonPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_41__["SlicePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_41__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_41__["PercentPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_41__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_41__["CurrencyPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_41__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_41__["I18nPluralPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_41__["I18nSelectPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_41__["KeyValuePipe"]]);
_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetComponentScope"](_olga_menu_main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_18__["MainMenuComponent"], [_angular_common__WEBPACK_IMPORTED_MODULE_41__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_41__["NgComponentOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_41__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_41__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_41__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_41__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_41__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_41__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_41__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_41__["NgPlural"], _angular_common__WEBPACK_IMPORTED_MODULE_41__["NgPluralCase"], _angular_router__WEBPACK_IMPORTED_MODULE_42__["RouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_42__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_42__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_42__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_42__["ɵangular_packages_router_router_l"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatAnchor"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_43__["Dir"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardTitleGroup"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardActions"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardFooter"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardSmImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardMdImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardLgImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardXlImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardAvatar"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__["MatDivider"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__["MatIcon"], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_44__["CdkAutofill"], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_44__["CdkTextareaAutosize"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_45__["MatError"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_45__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_45__["MatHint"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_45__["MatLabel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_45__["MatPlaceholder"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_45__["MatPrefix"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_45__["MatSuffix"], _angular_material_input__WEBPACK_IMPORTED_MODULE_20__["MatInput"], _angular_material_input__WEBPACK_IMPORTED_MODULE_20__["MatTextareaAutosize"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__["MatGridList"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__["MatGridTile"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__["MatGridTileText"], _angular_material_core__WEBPACK_IMPORTED_MODULE_46__["MatLine"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__["MatGridTileHeaderCssMatStyler"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__["MatGridTileFooterCssMatStyler"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__["MatGridAvatarCssMatStyler"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_47__["CdkScrollable"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_21__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_21__["MatMenuItem"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_21__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_21__["MatMenuContent"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_9__["MatSlider"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_12__["MatSlideToggleRequiredValidator"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_12__["MatSlideToggle"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__["MatTabLabel"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__["MatTab"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__["MatTabNav"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__["MatTabLink"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__["MatTabContent"], _app_component__WEBPACK_IMPORTED_MODULE_3__["Olga"],
    _olga_menu_gamescore_menu_gamescore_menu_component__WEBPACK_IMPORTED_MODULE_4__["GamescoreMenuComponent"],
    _game_score_game_score_ux__WEBPACK_IMPORTED_MODULE_5__["GamescoreUxComponent"],
    _game_score_game_score_item_game_score_item_component__WEBPACK_IMPORTED_MODULE_14__["GameScoreItemComponent"],
    _common_toggle_switch_toggle_switch_component__WEBPACK_IMPORTED_MODULE_16__["ToggleSwitchComponent"],
    _common_labeled_slider_labeled_slider_component__WEBPACK_IMPORTED_MODULE_17__["LabeledSliderComponent"],
    _olga_menu_main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_18__["MainMenuComponent"],
    _olga_menu_board_menu_board_menu_component__WEBPACK_IMPORTED_MODULE_19__["BoardMenuComponent"],
    _olga_menu_score_item_menu_score_item_menu_component__WEBPACK_IMPORTED_MODULE_23__["ScoreItemMenu"],
    _canvas_chessboard_canvas_chessboard_component__WEBPACK_IMPORTED_MODULE_26__["CanvasChessBoard"],
    _olga_controls_olga_controls_component__WEBPACK_IMPORTED_MODULE_27__["OlgaControlsComponent"],
    _olga_status_olga_status_component__WEBPACK_IMPORTED_MODULE_28__["OlgaStatusComponent"],
    _olga_title_olga_title_component__WEBPACK_IMPORTED_MODULE_29__["OlgaTitleComponent"],
    _olga_menu_keymap_menu_keymap_menu_component__WEBPACK_IMPORTED_MODULE_30__["KeymapMenuComponent"],
    _olga_menu_general_menu_general_menu_component__WEBPACK_IMPORTED_MODULE_31__["GeneralMenuComponent"],
    _olga_menu_keymap_menu_keymap_item_keymap_item_component__WEBPACK_IMPORTED_MODULE_33__["KeymapItemComponent"],
    _olga_menu_score_item_menu_variation_item_variation_item_component__WEBPACK_IMPORTED_MODULE_34__["VariationItemComponent"],
    _olga_menu_olga_menu_component__WEBPACK_IMPORTED_MODULE_32__["OlgaMenuComponent"],
    _olga_menu_common_menu_section_menu_section_component__WEBPACK_IMPORTED_MODULE_35__["MenuSectionComponent"],
    _olga_menu_controls_layout_mode_select_layout_mode_select_component__WEBPACK_IMPORTED_MODULE_36__["LayoutModeSelectComponent"],
    _olga_menu_controls_color_select_color_select_component__WEBPACK_IMPORTED_MODULE_37__["ColorSelectComponent"],
    _olga_menu_themes_menu_themes_menu_component__WEBPACK_IMPORTED_MODULE_38__["ThemesMenuComponent"],
    _olga_menu_pgn_menu_pgn_menu_component__WEBPACK_IMPORTED_MODULE_39__["PgnMenuComponent"],
    _cookie_consent_cookie_consent_component__WEBPACK_IMPORTED_MODULE_40__["CookieConsentComponent"]], [_angular_common__WEBPACK_IMPORTED_MODULE_41__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_41__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_41__["LowerCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_41__["JsonPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_41__["SlicePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_41__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_41__["PercentPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_41__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_41__["CurrencyPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_41__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_41__["I18nPluralPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_41__["I18nSelectPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_41__["KeyValuePipe"]]);
_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetComponentScope"](_olga_menu_score_item_menu_score_item_menu_component__WEBPACK_IMPORTED_MODULE_23__["ScoreItemMenu"], [_angular_common__WEBPACK_IMPORTED_MODULE_41__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_41__["NgComponentOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_41__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_41__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_41__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_41__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_41__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_41__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_41__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_41__["NgPlural"], _angular_common__WEBPACK_IMPORTED_MODULE_41__["NgPluralCase"], _angular_router__WEBPACK_IMPORTED_MODULE_42__["RouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_42__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_42__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_42__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_42__["ɵangular_packages_router_router_l"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatAnchor"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_43__["Dir"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardTitleGroup"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardActions"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardFooter"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardSmImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardMdImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardLgImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardXlImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardAvatar"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__["MatDivider"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__["MatIcon"], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_44__["CdkAutofill"], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_44__["CdkTextareaAutosize"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_45__["MatError"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_45__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_45__["MatHint"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_45__["MatLabel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_45__["MatPlaceholder"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_45__["MatPrefix"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_45__["MatSuffix"], _angular_material_input__WEBPACK_IMPORTED_MODULE_20__["MatInput"], _angular_material_input__WEBPACK_IMPORTED_MODULE_20__["MatTextareaAutosize"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__["MatGridList"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__["MatGridTile"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__["MatGridTileText"], _angular_material_core__WEBPACK_IMPORTED_MODULE_46__["MatLine"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__["MatGridTileHeaderCssMatStyler"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__["MatGridTileFooterCssMatStyler"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__["MatGridAvatarCssMatStyler"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_47__["CdkScrollable"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_21__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_21__["MatMenuItem"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_21__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_21__["MatMenuContent"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_9__["MatSlider"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_12__["MatSlideToggleRequiredValidator"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_12__["MatSlideToggle"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__["MatTabLabel"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__["MatTab"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__["MatTabNav"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__["MatTabLink"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__["MatTabContent"], _app_component__WEBPACK_IMPORTED_MODULE_3__["Olga"],
    _olga_menu_gamescore_menu_gamescore_menu_component__WEBPACK_IMPORTED_MODULE_4__["GamescoreMenuComponent"],
    _game_score_game_score_ux__WEBPACK_IMPORTED_MODULE_5__["GamescoreUxComponent"],
    _game_score_game_score_item_game_score_item_component__WEBPACK_IMPORTED_MODULE_14__["GameScoreItemComponent"],
    _common_toggle_switch_toggle_switch_component__WEBPACK_IMPORTED_MODULE_16__["ToggleSwitchComponent"],
    _common_labeled_slider_labeled_slider_component__WEBPACK_IMPORTED_MODULE_17__["LabeledSliderComponent"],
    _olga_menu_main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_18__["MainMenuComponent"],
    _olga_menu_board_menu_board_menu_component__WEBPACK_IMPORTED_MODULE_19__["BoardMenuComponent"],
    _olga_menu_score_item_menu_score_item_menu_component__WEBPACK_IMPORTED_MODULE_23__["ScoreItemMenu"],
    _canvas_chessboard_canvas_chessboard_component__WEBPACK_IMPORTED_MODULE_26__["CanvasChessBoard"],
    _olga_controls_olga_controls_component__WEBPACK_IMPORTED_MODULE_27__["OlgaControlsComponent"],
    _olga_status_olga_status_component__WEBPACK_IMPORTED_MODULE_28__["OlgaStatusComponent"],
    _olga_title_olga_title_component__WEBPACK_IMPORTED_MODULE_29__["OlgaTitleComponent"],
    _olga_menu_keymap_menu_keymap_menu_component__WEBPACK_IMPORTED_MODULE_30__["KeymapMenuComponent"],
    _olga_menu_general_menu_general_menu_component__WEBPACK_IMPORTED_MODULE_31__["GeneralMenuComponent"],
    _olga_menu_keymap_menu_keymap_item_keymap_item_component__WEBPACK_IMPORTED_MODULE_33__["KeymapItemComponent"],
    _olga_menu_score_item_menu_variation_item_variation_item_component__WEBPACK_IMPORTED_MODULE_34__["VariationItemComponent"],
    _olga_menu_olga_menu_component__WEBPACK_IMPORTED_MODULE_32__["OlgaMenuComponent"],
    _olga_menu_common_menu_section_menu_section_component__WEBPACK_IMPORTED_MODULE_35__["MenuSectionComponent"],
    _olga_menu_controls_layout_mode_select_layout_mode_select_component__WEBPACK_IMPORTED_MODULE_36__["LayoutModeSelectComponent"],
    _olga_menu_controls_color_select_color_select_component__WEBPACK_IMPORTED_MODULE_37__["ColorSelectComponent"],
    _olga_menu_themes_menu_themes_menu_component__WEBPACK_IMPORTED_MODULE_38__["ThemesMenuComponent"],
    _olga_menu_pgn_menu_pgn_menu_component__WEBPACK_IMPORTED_MODULE_39__["PgnMenuComponent"],
    _cookie_consent_cookie_consent_component__WEBPACK_IMPORTED_MODULE_40__["CookieConsentComponent"]], [_angular_common__WEBPACK_IMPORTED_MODULE_41__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_41__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_41__["LowerCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_41__["JsonPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_41__["SlicePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_41__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_41__["PercentPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_41__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_41__["CurrencyPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_41__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_41__["I18nPluralPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_41__["I18nSelectPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_41__["KeyValuePipe"]]);
_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetComponentScope"](_olga_menu_olga_menu_component__WEBPACK_IMPORTED_MODULE_32__["OlgaMenuComponent"], [_angular_common__WEBPACK_IMPORTED_MODULE_41__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_41__["NgComponentOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_41__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_41__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_41__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_41__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_41__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_41__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_41__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_41__["NgPlural"], _angular_common__WEBPACK_IMPORTED_MODULE_41__["NgPluralCase"], _angular_router__WEBPACK_IMPORTED_MODULE_42__["RouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_42__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_42__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_42__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_42__["ɵangular_packages_router_router_l"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatAnchor"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_43__["Dir"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardTitleGroup"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardActions"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardFooter"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardSmImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardMdImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardLgImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardXlImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardAvatar"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__["MatDivider"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__["MatIcon"], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_44__["CdkAutofill"], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_44__["CdkTextareaAutosize"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_45__["MatError"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_45__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_45__["MatHint"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_45__["MatLabel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_45__["MatPlaceholder"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_45__["MatPrefix"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_45__["MatSuffix"], _angular_material_input__WEBPACK_IMPORTED_MODULE_20__["MatInput"], _angular_material_input__WEBPACK_IMPORTED_MODULE_20__["MatTextareaAutosize"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__["MatGridList"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__["MatGridTile"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__["MatGridTileText"], _angular_material_core__WEBPACK_IMPORTED_MODULE_46__["MatLine"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__["MatGridTileHeaderCssMatStyler"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__["MatGridTileFooterCssMatStyler"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__["MatGridAvatarCssMatStyler"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_47__["CdkScrollable"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_21__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_21__["MatMenuItem"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_21__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_21__["MatMenuContent"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_9__["MatSlider"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_12__["MatSlideToggleRequiredValidator"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_12__["MatSlideToggle"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__["MatTabLabel"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__["MatTab"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__["MatTabNav"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__["MatTabLink"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__["MatTabContent"], _app_component__WEBPACK_IMPORTED_MODULE_3__["Olga"],
    _olga_menu_gamescore_menu_gamescore_menu_component__WEBPACK_IMPORTED_MODULE_4__["GamescoreMenuComponent"],
    _game_score_game_score_ux__WEBPACK_IMPORTED_MODULE_5__["GamescoreUxComponent"],
    _game_score_game_score_item_game_score_item_component__WEBPACK_IMPORTED_MODULE_14__["GameScoreItemComponent"],
    _common_toggle_switch_toggle_switch_component__WEBPACK_IMPORTED_MODULE_16__["ToggleSwitchComponent"],
    _common_labeled_slider_labeled_slider_component__WEBPACK_IMPORTED_MODULE_17__["LabeledSliderComponent"],
    _olga_menu_main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_18__["MainMenuComponent"],
    _olga_menu_board_menu_board_menu_component__WEBPACK_IMPORTED_MODULE_19__["BoardMenuComponent"],
    _olga_menu_score_item_menu_score_item_menu_component__WEBPACK_IMPORTED_MODULE_23__["ScoreItemMenu"],
    _canvas_chessboard_canvas_chessboard_component__WEBPACK_IMPORTED_MODULE_26__["CanvasChessBoard"],
    _olga_controls_olga_controls_component__WEBPACK_IMPORTED_MODULE_27__["OlgaControlsComponent"],
    _olga_status_olga_status_component__WEBPACK_IMPORTED_MODULE_28__["OlgaStatusComponent"],
    _olga_title_olga_title_component__WEBPACK_IMPORTED_MODULE_29__["OlgaTitleComponent"],
    _olga_menu_keymap_menu_keymap_menu_component__WEBPACK_IMPORTED_MODULE_30__["KeymapMenuComponent"],
    _olga_menu_general_menu_general_menu_component__WEBPACK_IMPORTED_MODULE_31__["GeneralMenuComponent"],
    _olga_menu_keymap_menu_keymap_item_keymap_item_component__WEBPACK_IMPORTED_MODULE_33__["KeymapItemComponent"],
    _olga_menu_score_item_menu_variation_item_variation_item_component__WEBPACK_IMPORTED_MODULE_34__["VariationItemComponent"],
    _olga_menu_olga_menu_component__WEBPACK_IMPORTED_MODULE_32__["OlgaMenuComponent"],
    _olga_menu_common_menu_section_menu_section_component__WEBPACK_IMPORTED_MODULE_35__["MenuSectionComponent"],
    _olga_menu_controls_layout_mode_select_layout_mode_select_component__WEBPACK_IMPORTED_MODULE_36__["LayoutModeSelectComponent"],
    _olga_menu_controls_color_select_color_select_component__WEBPACK_IMPORTED_MODULE_37__["ColorSelectComponent"],
    _olga_menu_themes_menu_themes_menu_component__WEBPACK_IMPORTED_MODULE_38__["ThemesMenuComponent"],
    _olga_menu_pgn_menu_pgn_menu_component__WEBPACK_IMPORTED_MODULE_39__["PgnMenuComponent"],
    _cookie_consent_cookie_consent_component__WEBPACK_IMPORTED_MODULE_40__["CookieConsentComponent"]], [_angular_common__WEBPACK_IMPORTED_MODULE_41__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_41__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_41__["LowerCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_41__["JsonPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_41__["SlicePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_41__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_41__["PercentPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_41__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_41__["CurrencyPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_41__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_41__["I18nPluralPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_41__["I18nSelectPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_41__["KeyValuePipe"]]);


/***/ }),

/***/ "./src/app/canvas-chessboard/canvas-chessboard.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/canvas-chessboard/canvas-chessboard.component.ts ***!
  \******************************************************************/
/*! exports provided: CanvasChessBoard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanvasChessBoard", function() { return CanvasChessBoard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var fabric__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fabric */ "./node_modules/fabric/dist/fabric.js");
/* harmony import */ var fabric__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fabric__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _common_kokopu_engine__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/kokopu-engine */ "./src/app/common/kokopu-engine.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./types */ "./src/app/canvas-chessboard/types.ts");
/* harmony import */ var _services_olga_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/olga.service */ "./src/app/services/olga.service.ts");
/* harmony import */ var _services_colors_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/colors.service */ "./src/app/services/colors.service.ts");








const _c0 = ["boardCanvas"];
var ObjectType;
(function (ObjectType) {
    ObjectType[ObjectType["Tile"] = 111] = "Tile";
    ObjectType[ObjectType["Label"] = 222] = "Label";
})(ObjectType || (ObjectType = {}));
class CanvasChessBoard {
    constructor(olga, colorService) {
        this.olga = olga;
        this.colorService = colorService;
        this.size = 320;
        this.tileSize = Math.floor(this.size / 8);
        this.interactive = true;
        this.showLabels = false;
        this.boardID = '';
        this.promotionDialog = null;
        this.knightButton = null;
        this.bishopButton = null;
        this.rookButton = null;
        this.queenButton = null;
        this.pieceAnimation = null;
        this.theme = new _types__WEBPACK_IMPORTED_MODULE_4__["BoardTheme"]();
        this.settings = new _types__WEBPACK_IMPORTED_MODULE_4__["BoardSettings"]();
        this.pieceMap = new Map();
        this.pieces = [];
        this.background = null;
        this.tileGroup = null;
        this.tiles = [];
        this.labels = [];
        this.canvas = null;
        this.labelState = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](_types__WEBPACK_IMPORTED_MODULE_4__["LabelState"].LeftBottom);
        this.selectedPiece = null;
        this.touching = false;
        this.midPromotion = false;
        this.boardCanvas = null;
    }
    // initialization
    ngOnInit() { }
    ngAfterViewInit() {
        fabric__WEBPACK_IMPORTED_MODULE_1__["fabric"].Object.prototype.transparentCorners = false;
        if (this.boardCanvas) {
            this.canvas = new fabric__WEBPACK_IMPORTED_MODULE_1__["fabric"].Canvas(this.boardCanvas.nativeElement);
            this.canvas.selection = false;
            const waitCount = this.loadPieces();
            waitCount.subscribe((count) => {
                var _a;
                if (count >= 12) {
                    this.generateBoard();
                    this.connectMouseInput();
                    const position = (_a = this.olga.getGame()) === null || _a === void 0 ? void 0 : _a.getPosition();
                    if (position) {
                        this.setBoardToPosition(position);
                    }
                    waitCount.unsubscribe();
                    this.resizeBoardObjects(this.size);
                }
            });
            this.canvas.hoverCursor = 'arrow';
            this.canvas.allowTouchScrolling = true;
            this.setInteractive(this.interactive);
        }
    }
    loadPieces() {
        const count = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](0);
        this.loadPieceImage('wK', count);
        this.loadPieceImage('wB', count);
        this.loadPieceImage('wQ', count);
        this.loadPieceImage('wR', count);
        this.loadPieceImage('wP', count);
        this.loadPieceImage('wN', count);
        this.loadPieceImage('bK', count);
        this.loadPieceImage('bB', count);
        this.loadPieceImage('bQ', count);
        this.loadPieceImage('bR', count);
        this.loadPieceImage('bP', count);
        this.loadPieceImage('bN', count);
        return count;
    }
    generateBoard() {
        var _a;
        this.generateBoardObjects();
        const position = (_a = this.olga.getGame()) === null || _a === void 0 ? void 0 : _a.getPosition();
        if (position) {
            this.setBoardToPosition(position);
        }
    }
    loadPieceImage(piece, subject) {
        var _a;
        if ((_a = this.theme) === null || _a === void 0 ? void 0 : _a.pieceSet) {
            if (this.theme.isSpriteSheet) {
            }
            else {
                if (this.theme.fileExtension === '.svg') {
                    fabric__WEBPACK_IMPORTED_MODULE_1__["fabric"].loadSVGFromURL(this.theme.pieceSet + piece + this.theme.fileExtension, (objects, options) => {
                        const obj = fabric__WEBPACK_IMPORTED_MODULE_1__["fabric"].util.groupSVGElements(objects, options);
                        obj.left = -400;
                        obj.top = 0;
                        obj.moveTo(10);
                        this.pieceMap.set(piece, obj);
                        subject.next(subject.value + 1);
                    });
                }
            }
        }
    }
    // Piece Animation
    updatePiece() {
        var _a;
        if (this.pieceAnimation) {
            const piece = this.pieceAnimation.piece;
            if (piece) {
                const xC = piece.get('left');
                let xN = (xC ? xC : 0);
                if (xC && xC != this.pieceAnimation.x) {
                    let increment = this.tileSize * .2;
                    if (Math.abs(this.pieceAnimation.x - xC) < increment) {
                        increment = this.pieceAnimation.x - xC;
                    }
                    else if (this.pieceAnimation.x < xC) {
                        increment *= -1;
                    }
                    xN = xC + increment;
                    piece.set('left', xN);
                }
                const yC = piece.get('top');
                let yN = (yC ? yC : 0);
                if (yC && yC != this.pieceAnimation.y) {
                    let increment = this.tileSize * .2;
                    if (Math.abs(this.pieceAnimation.y - yC) < increment) {
                        increment = this.pieceAnimation.y - yC;
                    }
                    else if (this.pieceAnimation.y < yC) {
                        increment *= -1;
                    }
                    yN = yC + increment;
                    piece.set('top', yN);
                }
                piece.setCoords();
                (_a = this.canvas) === null || _a === void 0 ? void 0 : _a.requestRenderAll();
                if (yN != this.pieceAnimation.y || xN != this.pieceAnimation.x) {
                    window.setTimeout(this.updatePiece.bind(this), 12);
                }
                else {
                    this.pieceAnimation = null;
                }
            }
        }
    }
    startMoveAnimation(piece, x, y) {
        if (this.pieceAnimation) {
            const lastPiece = this.pieceAnimation.piece;
            lastPiece === null || lastPiece === void 0 ? void 0 : lastPiece.set('left', this.pieceAnimation.x);
            lastPiece === null || lastPiece === void 0 ? void 0 : lastPiece.set('top', this.pieceAnimation.y);
            lastPiece.setCoords();
        }
        this.pieceAnimation = { piece, x, y };
        this.updatePiece();
    }
    performPromotion(move) {
        if (move.promotion) {
            console.log('Promoting to ' + move.promotion.role);
            console.log('@ ' + _types__WEBPACK_IMPORTED_MODULE_4__["SquareNames"][move.to]);
            // remove old piece
            this.removePiece(move.from);
            this.addPiece(move.to, move.color, move.promotion.role);
            this.olga.performPromotion(move);
            this.closePromotionDialog();
        }
    }
    closePromotionDialog() {
        var _a, _b, _c, _d, _e;
        if (this.knightButton) {
            (_a = this.canvas) === null || _a === void 0 ? void 0 : _a.remove(this.knightButton);
        }
        if (this.bishopButton) {
            (_b = this.canvas) === null || _b === void 0 ? void 0 : _b.remove(this.bishopButton);
        }
        if (this.rookButton) {
            (_c = this.canvas) === null || _c === void 0 ? void 0 : _c.remove(this.rookButton);
        }
        if (this.queenButton) {
            (_d = this.canvas) === null || _d === void 0 ? void 0 : _d.remove(this.queenButton);
        }
        if (this.promotionDialog) {
            (_e = this.canvas) === null || _e === void 0 ? void 0 : _e.remove(this.promotionDialog);
        }
        this.knightButton = null;
        this.bishopButton = null;
        this.rookButton = null;
        this.queenButton = null;
        this.promotionDialog = null;
    }
    createPromotionDialog(move) {
        var _a, _b, _c, _d, _e, _f;
        // pull items out of chess move
        const tileIndex = move.to;
        if (move.role && move.color && tileIndex >= 0 && tileIndex < 64) {
            const group = [];
            if (this.settings.orientation == 'white') {
                // translate tileIndex
            }
            // Create the background overlay (semi-transparent square)
            const overlay = new fabric__WEBPACK_IMPORTED_MODULE_1__["fabric"].Rect({
                width: this.size,
                height: this.size,
                left: 0,
                top: 0,
            });
            overlay.set('lockMovementX', true);
            overlay.set('lockMovementY', true);
            overlay.set('lockRotation', true);
            overlay.set('lockScalingX', true);
            overlay.set('lockScalingY', true);
            overlay.set('lockUniScaling', true);
            overlay.set('hasControls', false);
            overlay.set('hasBorders', false);
            overlay.set('selectable', false);
            overlay.set('opacity', 0.65);
            overlay.setCoords();
            overlay.setColor('#0a0a0a');
            group.push(overlay);
            // Create the background square (rounded rectangle 80% width 64% height vertically and horizontally centered)
            const height = 0.6 * this.size;
            const width = 0.8 * this.size;
            const bg = new fabric__WEBPACK_IMPORTED_MODULE_1__["fabric"].Rect({
                height: height,
                width: width,
                fill: this.colorService.bgMenu,
                left: (this.size - width) / 2,
                top: (this.size - height) / 2,
                rx: width * 0.02,
                ry: width * 0.02,
            });
            bg.setColor(this.colorService.bgMenu);
            bg.set('lockMovementX', true);
            bg.set('lockMovementY', true);
            bg.set('lockRotation', true);
            bg.set('lockScalingX', true);
            bg.set('lockScalingY', true);
            bg.set('lockUniScaling', true);
            bg.set('hasControls', false);
            bg.set('hasBorders', false);
            bg.set('selectable', false);
            bg.set('strokeWidth', 1);
            bg.set('stroke', 'white');
            bg.setCoords();
            group.push(bg);
            let pieceImage = null;
            // Create the title text "Promotion" - white, subtle
            const title = new fabric__WEBPACK_IMPORTED_MODULE_1__["fabric"].Text('Promotion', {
                fontWeight: '100',
                fontSize: this.size * 0.07,
                fontFamily: 'Courier New',
            });
            title.set('lockMovementX', true);
            title.set('lockMovementY', true);
            title.set('lockRotation', true);
            title.set('lockScalingX', true);
            title.set('lockScalingY', true);
            title.set('lockUniScaling', true);
            title.set('hasControls', false);
            title.set('hasBorders', false);
            title.set('selectable', false);
            title.setColor('white');
            title.set('originX', 'center');
            title.set('originY', 'center');
            title.set('left', this.size * 0.5);
            title.set('top', this.size * 0.235);
            title.setCoords();
            group.push(title);
            // Clone the promoted piece and tile and display them horizontally centered below title
            let x = this.size / 2;
            let y = this.size * 0.38 + 4;
            const tileSize = this.size * 0.2;
            // Tile Clone
            const tileToClone = this.tiles[tileIndex];
            if (tileToClone) {
                tileToClone.tile.clone((promotionTile) => {
                    promotionTile.set('top', y);
                    promotionTile.set('left', x);
                    promotionTile.set('originX', 'center');
                    promotionTile.set('originY', 'center');
                    promotionTile.scaleToHeight(tileSize);
                    promotionTile.setCoords();
                    group.push(promotionTile);
                });
                pieceImage = this.pieceMap.get(move.color + move.role);
                if (pieceImage) {
                    pieceImage.clone((pieceObject) => {
                        pieceObject.set('originX', 'center');
                        pieceObject.set('originY', 'center');
                        pieceObject.set('top', y);
                        pieceObject.set('left', x);
                        pieceObject.scaleToHeight(tileSize);
                        pieceObject.setCoords();
                        group.push(pieceObject);
                    });
                }
            }
            pieceImage = null;
            // Create text "{Color} has triggered at " below tile and piece clone
            // Create the title text "Promotion" - white, subtle
            let color = 'White';
            if (move.color === 'b') {
                color = 'Black';
            }
            const prompt = new fabric__WEBPACK_IMPORTED_MODULE_1__["fabric"].Text(color + ' has triggered promotion at', {
                fontSize: this.size * 0.04,
            });
            prompt.set('lockMovementX', true);
            prompt.set('lockMovementY', true);
            prompt.set('lockRotation', true);
            prompt.set('lockScalingX', true);
            prompt.set('lockScalingY', true);
            prompt.set('lockUniScaling', true);
            prompt.set('hasControls', false);
            prompt.set('hasBorders', false);
            prompt.set('selectable', false);
            prompt.setColor('white');
            prompt.set('originX', 'center');
            prompt.set('originY', 'center');
            prompt.set('left', this.size * 0.5 - 24);
            prompt.set('top', this.size * 0.53);
            prompt.setCoords();
            group.push(prompt);
            // Create text to right of triggered text with move
            const atText = new fabric__WEBPACK_IMPORTED_MODULE_1__["fabric"].Text(_types__WEBPACK_IMPORTED_MODULE_4__["SquareNames"][tileIndex], {
                fontSize: this.size * 0.055,
            });
            atText.set('lockMovementX', true);
            atText.set('lockMovementY', true);
            atText.set('lockRotation', true);
            atText.set('lockScalingX', true);
            atText.set('lockScalingY', true);
            atText.set('lockUniScaling', true);
            atText.set('hasControls', false);
            atText.set('hasBorders', false);
            atText.set('selectable', false);
            const bgColor = tileToClone.tile.get('fill');
            atText.setColor(bgColor ? bgColor.toString() : 'white');
            atText.set('originX', 'center');
            atText.set('originY', 'center');
            const promptWidth = prompt.get('width');
            const promptLeft = prompt.get('left');
            atText.set('left', (promptLeft ? promptLeft : this.size * 0.2) +
                (promptWidth !== undefined ? promptWidth : 20) / 2 +
                this.size * 0.035);
            atText.set('top', this.size * 0.53);
            atText.setCoords();
            group.push(atText);
            // Create 4 clones of tiles, 4 clones of pieces (Knight, Bishop, Rook, And King)
            // Create the four tiles
            y = this.size * 0.67 + 4;
            x = this.size * 0.205;
            const choiceSize = tileSize * 0.75;
            if (tileToClone) {
                let buttonGroup = [];
                tileToClone.tile.clone((tile) => {
                    tile.set('originX', 'left');
                    tile.set('originY', 'top');
                    tile.set('stroke', this.colorService.gsTextColorHG.value);
                    tile.set('strokeWidth', 2);
                    tile.set('top', 0);
                    tile.set('left', 0);
                    tile.scaleToHeight(choiceSize);
                    tile.setCoords();
                    buttonGroup.push(tile);
                });
                // Knight button
                pieceImage = this.pieceMap.get(move.color + 'N');
                if (pieceImage) {
                    pieceImage.clone((obj) => {
                        obj.set('originX', 'left');
                        obj.set('originY', 'top');
                        obj.set('top', 0);
                        obj.set('left', 0);
                        obj.scaleToHeight(choiceSize);
                        obj.setCoords();
                        buttonGroup.push(obj);
                    });
                }
                if (buttonGroup.length >= 2) {
                    this.knightButton = new fabric__WEBPACK_IMPORTED_MODULE_1__["fabric"].Group(buttonGroup);
                    this.knightButton.set('originX', 'center');
                    this.knightButton.set('originY', 'center');
                    this.knightButton.set('top', y);
                    this.knightButton.set('left', x);
                    this.knightButton.set('selectable', true);
                    this.knightButton.set('lockMovementX', true);
                    this.knightButton.set('lockMovementY', true);
                    this.knightButton.set('lockRotation', true);
                    this.knightButton.set('lockScalingX', true);
                    this.knightButton.set('lockScalingY', true);
                    this.knightButton.set('lockUniScaling', true);
                    this.knightButton.set('hasControls', false);
                    this.knightButton.set('hasBorders', false);
                    this.knightButton.scaleToHeight(choiceSize);
                    this.knightButton.setCoords();
                    this.knightButton.on('selected', () => {
                        move.promotion = { role: 'N' };
                        this.performPromotion(move);
                    });
                }
                let buttonGroup2 = [];
                // Bishop Button
                x = this.size * 0.4;
                tileToClone.tile.clone((tile) => {
                    tile.set('originX', 'left');
                    tile.set('originY', 'top');
                    tile.set('stroke', this.colorService.gsTextColorHG.value);
                    tile.set('strokeWidth', 2);
                    tile.set('top', 0);
                    tile.set('left', 0);
                    tile.scaleToHeight(choiceSize);
                    tile.setCoords();
                    buttonGroup2.push(tile);
                });
                pieceImage = this.pieceMap.get(move.color + 'B');
                if (pieceImage) {
                    pieceImage.clone((piece) => {
                        piece.set('originX', 'left');
                        piece.set('originY', 'top');
                        piece.set('top', 0);
                        piece.set('left', 0);
                        piece.scaleToHeight(choiceSize);
                        piece.setCoords();
                        buttonGroup2.push(piece);
                    });
                }
                if (buttonGroup2.length >= 2) {
                    this.bishopButton = new fabric__WEBPACK_IMPORTED_MODULE_1__["fabric"].Group(buttonGroup2);
                    this.bishopButton.set('originX', 'center');
                    this.bishopButton.set('originY', 'center');
                    this.bishopButton.set('top', y);
                    this.bishopButton.set('left', x);
                    this.bishopButton.set('selectable', true);
                    this.bishopButton.set('lockMovementX', true);
                    this.bishopButton.set('lockMovementY', true);
                    this.bishopButton.set('lockRotation', true);
                    this.bishopButton.set('lockScalingX', true);
                    this.bishopButton.set('lockScalingY', true);
                    this.bishopButton.set('lockUniScaling', true);
                    this.bishopButton.set('hasControls', false);
                    this.bishopButton.set('hasBorders', false);
                    this.bishopButton.scaleToHeight(choiceSize);
                    this.bishopButton.setCoords();
                    this.bishopButton.on('selected', () => {
                        move.promotion = { role: 'B' };
                        this.performPromotion(move);
                    });
                }
                // Rook Button
                x = this.size * 0.595;
                let buttonGroup3 = [];
                tileToClone.tile.clone((tile) => {
                    tile.set('originX', 'left');
                    tile.set('originY', 'top');
                    tile.set('stroke', this.colorService.gsTextColorHG.value);
                    tile.set('strokeWidth', 2);
                    tile.set('top', 0);
                    tile.set('left', 0);
                    tile.scaleToHeight(choiceSize);
                    tile.setCoords();
                    buttonGroup3.push(tile);
                });
                pieceImage = this.pieceMap.get(move.color + 'R');
                if (pieceImage) {
                    pieceImage.clone((piece) => {
                        piece.set('originX', 'left');
                        piece.set('originY', 'top');
                        piece.set('top', 0);
                        piece.set('left', 0);
                        piece.scaleToHeight(choiceSize);
                        piece.setCoords();
                        buttonGroup3.push(piece);
                    });
                }
                if (buttonGroup3.length >= 2) {
                    this.rookButton = new fabric__WEBPACK_IMPORTED_MODULE_1__["fabric"].Group(buttonGroup3);
                    this.rookButton.set('originX', 'center');
                    this.rookButton.set('originY', 'center');
                    this.rookButton.set('top', y);
                    this.rookButton.set('left', x);
                    this.rookButton.set('selectable', true);
                    this.rookButton.set('lockMovementX', true);
                    this.rookButton.set('lockMovementY', true);
                    this.rookButton.set('lockRotation', true);
                    this.rookButton.set('lockScalingX', true);
                    this.rookButton.set('lockScalingY', true);
                    this.rookButton.set('lockUniScaling', true);
                    this.rookButton.set('hasControls', false);
                    this.rookButton.set('hasBorders', false);
                    this.rookButton.scaleToHeight(choiceSize);
                    this.rookButton.setCoords();
                    this.rookButton.on('selected', () => {
                        move.promotion = { role: 'R' };
                        this.performPromotion(move);
                    });
                }
                // Queen
                x = this.size * 0.79;
                let buttonGroup4 = [];
                tileToClone.tile.clone((tile) => {
                    tile.set('originX', 'left');
                    tile.set('originY', 'top');
                    tile.set('stroke', this.colorService.gsTextColorHG.value);
                    tile.set('strokeWidth', 2);
                    tile.set('top', 0);
                    tile.set('left', 0);
                    tile.scaleToHeight(choiceSize);
                    tile.setCoords();
                    buttonGroup4.push(tile);
                });
                pieceImage = this.pieceMap.get(move.color + 'Q');
                if (pieceImage) {
                    pieceImage.clone((piece) => {
                        piece.set('originX', 'left');
                        piece.set('originY', 'top');
                        piece.set('top', 0);
                        piece.set('left', 0);
                        piece.scaleToHeight(choiceSize);
                        piece.setCoords();
                        buttonGroup4.push(piece);
                    });
                }
                if (buttonGroup4.length >= 2) {
                    this.queenButton = new fabric__WEBPACK_IMPORTED_MODULE_1__["fabric"].Group(buttonGroup4);
                    this.queenButton.set('originX', 'center');
                    this.queenButton.set('originY', 'center');
                    this.queenButton.set('top', y);
                    this.queenButton.set('left', x);
                    this.queenButton.set('selectable', true);
                    this.queenButton.set('lockMovementX', true);
                    this.queenButton.set('lockMovementY', true);
                    this.queenButton.set('lockRotation', true);
                    this.queenButton.set('lockScalingX', true);
                    this.queenButton.set('lockScalingY', true);
                    this.queenButton.set('lockUniScaling', true);
                    this.queenButton.set('hasControls', false);
                    this.queenButton.set('hasBorders', false);
                    this.queenButton.scaleToHeight(choiceSize);
                    this.queenButton.setCoords();
                    this.queenButton.on('selected', () => {
                        move.promotion = { role: 'Q' };
                        this.performPromotion(move);
                    });
                }
            }
            this.promotionDialog = new fabric__WEBPACK_IMPORTED_MODULE_1__["fabric"].Group(group, {
                left: 0,
                top: 0,
                width: this.size,
                height: this.size,
            });
            this.promotionDialog.set('lockMovementX', true);
            this.promotionDialog.set('lockMovementY', true);
            this.promotionDialog.set('lockRotation', true);
            this.promotionDialog.set('lockScalingX', true);
            this.promotionDialog.set('lockScalingY', true);
            this.promotionDialog.set('lockUniScaling', true);
            this.promotionDialog.set('hasControls', false);
            this.promotionDialog.set('hasBorders', false);
            this.promotionDialog.set('selectable', false);
            this.promotionDialog.scaleToHeight(this.size);
            this.promotionDialog.scaleToWidth(this.size);
            (_a = this.canvas) === null || _a === void 0 ? void 0 : _a.add(this.promotionDialog);
            this.promotionDialog.moveTo(500);
            if (this.knightButton) {
                (_b = this.canvas) === null || _b === void 0 ? void 0 : _b.add(this.knightButton);
                this.knightButton.moveTo(510);
            }
            if (this.bishopButton) {
                (_c = this.canvas) === null || _c === void 0 ? void 0 : _c.add(this.bishopButton);
                this.bishopButton.moveTo(510);
            }
            if (this.rookButton) {
                (_d = this.canvas) === null || _d === void 0 ? void 0 : _d.add(this.rookButton);
                this.rookButton.moveTo(510);
            }
            if (this.queenButton) {
                (_e = this.canvas) === null || _e === void 0 ? void 0 : _e.add(this.queenButton);
                this.queenButton.moveTo(510);
            }
            (_f = this.canvas) === null || _f === void 0 ? void 0 : _f.requestRenderAll();
        }
    }
    showPromotionDialog(move) {
        if (!this.promotionDialog) {
            const object = this.pieces[move.from].object;
            if (object) {
                object.set('lockMovementX', true);
                object.set('lockMovementY', true);
                object.set('selectable', false);
            }
            this.createPromotionDialog(move);
            this.midPromotion = true;
            return;
        }
    }
    makeMove(move) {
        var _a, _b;
        if (this.pieces[move.from]) {
            const piece = this.pieces[move.from];
            delete this.pieces[move.from];
            delete this.tiles[move.from].piece;
            if (piece.object) {
                const row = Math.floor(move.to / 8);
                const col = move.to % 8;
                const tileSizeFragment = this.tileSize / 100;
                const piecePadding = Math.ceil(tileSizeFragment * 3) + 1;
                let xDest = 0;
                let yDest = 0;
                if (this.settings.orientation === 'white') {
                    xDest = (col * this.tileSize) + piecePadding;
                    yDest = ((7 - row) * this.tileSize) + piecePadding;
                }
                else {
                    xDest = ((7 - col) * this.tileSize) + piecePadding;
                    yDest = (row * this.tileSize) + piecePadding;
                }
                this.startMoveAnimation(piece.object, xDest, yDest);
                const to = row * 8 + col;
                const capture = this.pieces[to];
                if (capture) {
                    (_a = this.canvas) === null || _a === void 0 ? void 0 : _a.remove(capture.object);
                }
                piece.tile = to;
                this.pieces[to] = piece;
                this.tiles[to].piece = { color: move.color, role: move.role };
                if (move.castle) {
                    const rmove = new _common_kokopu_engine__WEBPACK_IMPORTED_MODULE_3__["ChessMove"]();
                    rmove.to = move.castle.to;
                    rmove.from = move.castle.from;
                    rmove.color = move.color;
                    this.makeMove(rmove);
                }
            }
        }
        (_b = this.canvas) === null || _b === void 0 ? void 0 : _b.requestRenderAll();
    }
    unMakeMove(move) {
        var _a, _b;
        if (this.pieces[move.to]) {
            const piece = this.pieces[move.to];
            delete this.pieces[move.to];
            delete this.tiles[move.to].piece;
            if (piece.object) {
                const row = Math.floor(move.from / 8);
                const col = move.from % 8;
                const tileSizeFragment = this.tileSize / 100;
                const piecePadding = Math.ceil(tileSizeFragment * 3) + 1;
                let xDest = 0;
                let yDest = 0;
                if (this.settings.orientation === 'white') {
                    xDest = (col * this.tileSize) + piecePadding;
                    yDest = ((7 - row) * this.tileSize) + piecePadding;
                }
                else {
                    xDest = ((7 - col) * this.tileSize) + piecePadding;
                    yDest = (row * this.tileSize) + piecePadding;
                }
                this.startMoveAnimation(piece.object, xDest, yDest);
                const from = row * 8 + col;
                const capture = move.capture;
                if (capture) {
                    this.addPiece(move.to, capture.color, capture.role);
                }
                piece.tile = from;
                this.pieces[from] = piece;
                this.tiles[from].piece = { color: move.color, role: move.role };
                piece.object.moveTo(10);
                piece.object.setCoords();
                (_a = this.promotionDialog) === null || _a === void 0 ? void 0 : _a.moveTo(500);
                if (move.castle) {
                    const rmove = new _common_kokopu_engine__WEBPACK_IMPORTED_MODULE_3__["ChessMove"]();
                    rmove.to = move.castle.to;
                    rmove.from = move.castle.from;
                    rmove.color = move.color;
                    this.unMakeMove(rmove);
                }
            }
        }
        (_b = this.canvas) === null || _b === void 0 ? void 0 : _b.requestRenderAll();
    }
    resetMove(move) {
        var _a;
        const piece = this.pieces[move.from].object;
        if (piece) {
            const row = Math.floor(move.from / 8);
            const col = move.from % 8;
            const tileSizeFragment = this.tileSize / 100;
            piece.scaleToHeight(Math.ceil(tileSizeFragment * 90));
            const piecePadding = Math.ceil(tileSizeFragment * 3) + 1;
            if (this.settings.orientation == 'white') {
                piece.set('left', Math.floor(col * this.tileSize) + piecePadding);
                piece.set('top', Math.floor((7 - row) * this.tileSize) + piecePadding);
            }
            else {
                piece.set('left', Math.floor((7 - col) * this.tileSize) + piecePadding);
                piece.set('top', Math.floor(row * this.tileSize) + piecePadding);
            }
            piece.moveTo(10);
            (_a = this.promotionDialog) === null || _a === void 0 ? void 0 : _a.moveTo(500);
            piece.setCoords();
        }
    }
    // board API
    addPiece(tile, color, role) {
        const col = tile % 8;
        const row = Math.floor(tile / 8);
        const padding = 1;
        if (role && color) {
            const pieceImage = this.pieceMap.get(color + role);
            if (pieceImage) {
                pieceImage.clone((pieceObject) => {
                    var _a;
                    pieceObject.set('lockRotation', true);
                    pieceObject.set('lockScalingX', true);
                    pieceObject.set('lockScalingY', true);
                    pieceObject.set('lockUniScaling', true);
                    pieceObject.set('hasControls', false);
                    pieceObject.set('hasBorders', false);
                    if (!this.interactive) {
                        pieceObject.set('lockMovementX', true);
                        pieceObject.set('lockMovementY', true);
                    }
                    else {
                        pieceObject.hoverCursor = 'grab';
                        pieceObject.moveCursor = 'grabbing';
                    }
                    const tileSizeFragment = this.tileSize / 100;
                    pieceObject.scaleToHeight(Math.ceil(tileSizeFragment * 90));
                    const piecePadding = Math.ceil(tileSizeFragment * 3) + 1;
                    if (this.settings.orientation == 'white') {
                        pieceObject.set('left', Math.floor(col * this.tileSize) + piecePadding);
                        pieceObject.set('top', Math.floor((7 - row) * this.tileSize) + piecePadding);
                    }
                    else {
                        pieceObject.set('left', Math.floor((7 - col) * this.tileSize) + piecePadding);
                        pieceObject.set('top', Math.floor(row * this.tileSize) + piecePadding);
                    }
                    pieceObject.setCoords();
                    this.pieces[tile] = { tile: tile, object: pieceObject };
                    this.tiles[tile].piece = { role, color };
                    if (this.canvas) {
                        (_a = this.canvas) === null || _a === void 0 ? void 0 : _a.add(pieceObject);
                        pieceObject.moveTo(10);
                    }
                });
            }
        }
    }
    removePiece(tile) {
        var _a;
        const object = this.pieces[tile].object;
        delete this.pieces[tile];
        (_a = this.canvas) === null || _a === void 0 ? void 0 : _a.remove(object);
        delete this.tiles[tile].piece;
    }
    isValidDrop(from, to) {
        var _a;
        if (this.olga.validGame()) {
            const position = (_a = this.olga.getGame()) === null || _a === void 0 ? void 0 : _a.getPosition();
            const legal = position.isMoveLegal(_types__WEBPACK_IMPORTED_MODULE_4__["SquareNames"][from], _types__WEBPACK_IMPORTED_MODULE_4__["SquareNames"][to]);
            return legal !== false;
        }
        return false;
    }
    checkValidDrop(e) {
        var _a, _b;
        if ((_a = this.selectedPiece) === null || _a === void 0 ? void 0 : _a.object) {
            let x = 0;
            let y = 0;
            if (this.touching) {
                const event = e.e;
                if (event.changedTouches.length) {
                    x = event.changedTouches[0].clientX;
                    y = event.changedTouches[0].clientY;
                }
                this.touching = false;
            }
            else {
                const event = e.e;
                x = event.x;
                y = event.y;
            }
            let row = Math.ceil(y / this.tileSize) - 1;
            let col = Math.ceil(x / this.tileSize) - 1;
            if (this.settings.orientation == 'white') {
                row = Math.ceil((this.size - y) / this.tileSize) - 1;
            }
            else {
                col = Math.ceil((this.size - x) / this.tileSize) - 1;
            }
            const tile = row * 8 + col;
            const move = new _common_kokopu_engine__WEBPACK_IMPORTED_MODULE_3__["ChessMove"]();
            move.from = this.selectedPiece.tile;
            move.to = tile;
            const piece = this.tiles[move.from].piece;
            if (piece) {
                move.color = piece.color;
                move.role = piece.role;
            }
            if (x < 0 || x > this.size || y > this.size || y < 0) {
                this.resetMove(move);
            }
            else {
                if (this.isValidDrop(this.selectedPiece.tile, tile) &&
                    this.olga.validGame() && ((_b = this.olga.getGame()) === null || _b === void 0 ? void 0 : _b.makeMove(move))) {
                    this.makeMove(move);
                }
                else {
                    this.resetMove(move);
                }
            }
            this.selectedPiece = null;
        }
    }
    touchStart(event) {
        if (event.touches.length) {
            const point = event.touches[0];
            let row = Math.ceil(point.clientY / this.tileSize) - 1;
            let col = Math.ceil(point.clientX / this.tileSize) - 1;
            if (this.settings.orientation == 'white') {
                row = Math.ceil((this.size - point.clientY) / this.tileSize) - 1;
            }
            else {
                col = Math.ceil((this.size - point.clientX) / this.tileSize) - 1;
            }
            const tileIndex = row * 8 + col;
            if (tileIndex >= 0 && tileIndex < 64) {
                this.touching = true;
                this.selectedPiece = this.pieces[tileIndex];
                //this.highlightTile(tileIndex);
            }
        }
    }
    selectPiece(e) {
        var _a;
        let x = 0;
        let y = 0;
        const event = e.e;
        x = event.x;
        y = event.y;
        if (x === undefined || y === undefined) {
            const event = e.e;
            if (event.touches.length) {
                x = event.touches[0].clientX;
                y = event.touches[0].clientY;
            }
        }
        let row = Math.ceil(y / this.tileSize) - 1;
        let col = Math.ceil(x / this.tileSize) - 1;
        if (this.settings.orientation == 'white') {
            row = Math.ceil((this.size - y) / this.tileSize) - 1;
        }
        else {
            col = Math.ceil((this.size - x) / this.tileSize) - 1;
        }
        const tileIndex = row * 8 + col;
        if (tileIndex >= 0 && tileIndex < 64) {
            this.selectedPiece = this.pieces[tileIndex];
            //this.highlightTile(tileIndex);
        }
        else {
            (_a = this.canvas) === null || _a === void 0 ? void 0 : _a.discardActiveObject();
            this.selectedPiece = null;
        }
    }
    clearBoard() {
        var _a, _b;
        this.clearMaterial();
        this.clearLabels();
        this.tiles.forEach((tileData) => {
            var _a;
            (_a = this.canvas) === null || _a === void 0 ? void 0 : _a.remove(tileData.tile);
        });
        this.tiles = [];
        if (this.background) {
            (_a = this.canvas) === null || _a === void 0 ? void 0 : _a.remove(this.background);
        }
        if (this.tileGroup) {
            (_b = this.canvas) === null || _b === void 0 ? void 0 : _b.remove(this.tileGroup);
        }
    }
    clearMaterial() {
        this.pieces.forEach((piece) => {
            var _a;
            (_a = this.canvas) === null || _a === void 0 ? void 0 : _a.remove(piece.object);
        });
        this.pieces = [];
    }
    clearLabels() {
        this.labels.forEach((value) => {
            if (this.tileGroup) {
                this.tileGroup.remove(value);
            }
        });
        this.labels = [];
    }
    connectMouseInput() {
        if (this.canvas) {
            this.canvas.on('object:moved', this.checkValidDrop.bind(this));
            this.canvas.on('mouse:down', this.selectPiece.bind(this));
        }
    }
    createBoardObject(type, x, y, selectable = false, labelText = '', isDark) {
        let object = null;
        switch (type) {
            case ObjectType.Label: {
                object = new fabric__WEBPACK_IMPORTED_MODULE_1__["fabric"].Text(labelText, {
                    fontSize: this.theme.labelFontSize, left: x, top: y, fontFamily: this.theme.labelFontFamily,
                    fontWeight: this.theme.labelFontWeight
                });
                if (isDark !== undefined && isDark !== null) {
                    object.setColor(isDark ? this.colorService.boardLabelDark.value : this.colorService.boardLabelLight.value);
                }
                break;
            }
            case ObjectType.Tile: {
                object = new fabric__WEBPACK_IMPORTED_MODULE_1__["fabric"].Rect({
                    width: this.tileSize,
                    height: this.tileSize,
                });
                if (isDark !== undefined && isDark !== null) {
                    object.setColor(isDark ? this.colorService.boardBGDark.value : this.colorService.boardBGLight.value);
                }
                break;
            }
        }
        if (object) {
            object.set('left', x);
            object.set('top', y);
            object.set('lockRotation', true);
            object.set('lockScalingX', true);
            object.set('lockScalingY', true);
            object.set('lockUniScaling', true);
            object.set('hasControls', false);
            object.set('hasBorders', false);
            object.set('selectable', false);
            object.set('lockMovementX', !selectable);
            object.set('lockMovementY', !selectable);
            object.set('selectable', selectable);
            object.setCoords();
        }
        return object;
    }
    generateBoardObjects() {
        if (this.canvas) {
            const tiles = [];
            const labels = [];
            const padding = 2;
            let dark = false;
            const size = this.tileSize * 8;
            const background = new fabric__WEBPACK_IMPORTED_MODULE_1__["fabric"].Rect({
                // position from group center
                left: 0,
                top: 0,
                width: size,
                height: size,
                stroke: 'black',
                strokeWidth: 3,
                fill: undefined
            });
            background.set('lockMovementX', true);
            background.set('lockMovementY', true);
            background.set('lockRotation', true);
            background.set('lockScalingX', true);
            background.set('lockScalingY', true);
            background.set('lockUniScaling', true);
            background.set('hasControls', false);
            background.set('hasBorders', false);
            background.set('selectable', false);
            background.setCoords();
            this.background = background;
            for (let row = 7; row >= 0; row--) {
                for (let col = 0; col < 8; col++) {
                    if (row % 2 === 0) {
                        // even row 0, 2, 4, 6
                        if (col % 2 === 0) {
                            dark = false;
                        }
                        else {
                            dark = true;
                        }
                    }
                    else {
                        // odd row 1, 3, 5, 7
                        if (col % 2 === 0) {
                            dark = true;
                        }
                        else {
                            dark = false;
                        }
                    }
                    const tile = this.createBoardObject(ObjectType.Tile, col * this.tileSize + padding, row * this.tileSize + padding, true, '', dark);
                    if (tile) {
                        this.tiles.push({ tile });
                        tiles.push(tile);
                    }
                    if (this.showLabels) {
                        let labelText = '';
                        let rowText = '';
                        if (this.settings.orientation == 'white') {
                            labelText = _types__WEBPACK_IMPORTED_MODULE_4__["SquareNames"][((7 - row) * 8) + col][0];
                            rowText = (8 - row).toString();
                        }
                        else {
                            labelText = _types__WEBPACK_IMPORTED_MODULE_4__["SquareNames"][(row * 8) + (7 - col)][0];
                            rowText = (row + 1).toString();
                        }
                        let x = 4 + padding;
                        let y = (row * this.tileSize) + 4;
                        if (col == 0) {
                            const file = this.createBoardObject(ObjectType.Label, x, y, false, rowText, !dark);
                            if (file) {
                                labels.push(file);
                                this.labels.push(file);
                            }
                        }
                        if (row == 7) {
                            const rank = this.createBoardObject(ObjectType.Label, ((this.tileSize * (col + 1)) - this.theme.labelFontSize / 2) - padding, size - this.theme.labelFontSize, false, labelText, !dark);
                            if (rank) {
                                labels.push(rank);
                                this.labels.push(rank);
                            }
                        }
                    }
                }
            }
            let objects = [];
            objects = objects.concat(tiles, labels);
            const tileGroup = new fabric__WEBPACK_IMPORTED_MODULE_1__["fabric"].Group(objects, {
                left: 0,
                top: 0,
            });
            tileGroup.set('left', 0);
            tileGroup.set('top', 0);
            tileGroup.set('lockMovementX', true);
            tileGroup.set('lockMovementY', true);
            tileGroup.set('lockRotation', true);
            tileGroup.set('lockScalingX', true);
            tileGroup.set('lockScalingY', true);
            tileGroup.set('hasControls', false);
            tileGroup.set('hasBorders', false);
            tileGroup.set('lock');
            tileGroup.set('selectable', false);
            tileGroup.set('originX', 'left');
            tileGroup.set('originY', 'top');
            this.canvas.add(background);
            this.canvas.add(tileGroup);
            this.tileGroup = tileGroup;
            background.moveTo(-40);
            tileGroup.moveTo(-30);
            this.canvas.requestRenderAll();
        }
    }
    resizeBoardObjects(size) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0;
        if (!this.background) {
            return;
        }
        this.tileSize = Math.floor(this.size / 8);
        this.background.scaleToHeight((this.tileSize * 8) - 1);
        this.background.scaleToWidth((this.tileSize * 8) - 1);
        if (this.tileGroup) {
            this.tileGroup.set('top', 0);
            this.tileGroup.set('left', 0);
            this.tileGroup.scaleToHeight(this.tileSize * 8);
            this.tileGroup.scaleToWidth(this.tileSize * 8);
            this.tileGroup.moveTo(-300);
            this.tileGroup.setCoords();
        }
        this.pieces.forEach((pieceData) => {
            const piece = pieceData.object;
            if (piece.left !== undefined && piece.top !== undefined && this.canvas) {
                const row = Math.floor(pieceData.tile / 8);
                const col = pieceData.tile % 8;
                const tileSizeFragment = this.tileSize / 100;
                piece.scaleToHeight(Math.ceil(tileSizeFragment * 90));
                const piecePadding = Math.ceil(tileSizeFragment * 3) + 1;
                if (this.settings.orientation == 'white') {
                    piece.set('left', Math.floor(col * this.tileSize) + piecePadding);
                    piece.set('top', Math.floor((7 - row) * this.tileSize) + piecePadding);
                }
                else {
                    piece.set('left', Math.floor((7 - col) * this.tileSize) + piecePadding);
                    piece.set('top', Math.floor(row * this.tileSize) + piecePadding);
                }
                piece.moveTo(10);
                piece.setCoords();
            }
        });
        if (this.promotionDialog) {
            this.promotionDialog.scaleToHeight(this.size);
            this.promotionDialog.scaleToWidth(this.size);
            (_a = this.promotionDialog) === null || _a === void 0 ? void 0 : _a.moveTo(500);
            // knight
            let y = this.size * 0.67 + 4;
            let x = this.size * 0.205;
            (_b = this.knightButton) === null || _b === void 0 ? void 0 : _b.scaleToHeight(this.size * 0.15);
            (_c = this.knightButton) === null || _c === void 0 ? void 0 : _c.scaleToWidth(this.size * 0.15);
            (_d = this.knightButton) === null || _d === void 0 ? void 0 : _d.set('left', x);
            (_e = this.knightButton) === null || _e === void 0 ? void 0 : _e.set('top', y);
            (_f = this.knightButton) === null || _f === void 0 ? void 0 : _f.moveTo(510);
            (_g = this.knightButton) === null || _g === void 0 ? void 0 : _g.setCoords();
            // bishop
            x = this.size * 0.4;
            (_h = this.bishopButton) === null || _h === void 0 ? void 0 : _h.scaleToHeight(this.size * 0.15);
            (_j = this.bishopButton) === null || _j === void 0 ? void 0 : _j.scaleToWidth(this.size * 0.15);
            (_k = this.bishopButton) === null || _k === void 0 ? void 0 : _k.set('left', x);
            (_l = this.bishopButton) === null || _l === void 0 ? void 0 : _l.set('top', y);
            (_m = this.bishopButton) === null || _m === void 0 ? void 0 : _m.moveTo(510);
            (_o = this.bishopButton) === null || _o === void 0 ? void 0 : _o.setCoords();
            // rook
            x = this.size * 0.595;
            (_p = this.rookButton) === null || _p === void 0 ? void 0 : _p.scaleToHeight(this.size * 0.15);
            (_q = this.rookButton) === null || _q === void 0 ? void 0 : _q.scaleToWidth(this.size * 0.15);
            (_r = this.rookButton) === null || _r === void 0 ? void 0 : _r.set('left', x);
            (_s = this.rookButton) === null || _s === void 0 ? void 0 : _s.set('top', y);
            (_t = this.rookButton) === null || _t === void 0 ? void 0 : _t.moveTo(510);
            (_u = this.rookButton) === null || _u === void 0 ? void 0 : _u.setCoords();
            // queen
            x = this.size * 0.79;
            (_v = this.queenButton) === null || _v === void 0 ? void 0 : _v.scaleToHeight(this.size * 0.15);
            (_w = this.queenButton) === null || _w === void 0 ? void 0 : _w.scaleToWidth(this.size * 0.15);
            (_x = this.queenButton) === null || _x === void 0 ? void 0 : _x.set('left', x);
            (_y = this.queenButton) === null || _y === void 0 ? void 0 : _y.set('top', y);
            (_z = this.queenButton) === null || _z === void 0 ? void 0 : _z.moveTo(510);
            (_0 = this.queenButton) === null || _0 === void 0 ? void 0 : _0.setCoords();
        }
    }
    setDarkTile(color) {
        var _a;
        if (this.tiles.length != 0 && this.theme) {
            for (let index = 0; index < 64; index++) {
                const row = Math.floor(index / 8);
                if (row % 2 === 0) {
                    if (index % 2 === 0) {
                        const tile = this.tiles[index].tile;
                        tile.set('fill', color);
                    }
                }
                else {
                    if (index % 2 !== 0) {
                        const tile = this.tiles[index].tile;
                        tile.set('fill', color);
                    }
                }
            }
            if (this.labels.length) {
                this.labels.forEach((label) => {
                    // @ts-ignore
                    if (label && label.get('fill') === this.theme.tileDark) {
                        label.setColor(color);
                    }
                });
            }
            this.theme.tileDark = color;
            (_a = this.canvas) === null || _a === void 0 ? void 0 : _a.requestRenderAll();
        }
    }
    setLightTile(color) {
        var _a;
        if (this.tiles.length != 0 && this.theme) {
            for (let index = 0; index < 64; index++) {
                const row = Math.floor(index / 8);
                if (row % 2 !== 0) {
                    if (index % 2 === 0) {
                        const tile = this.tiles[index].tile;
                        tile.set('fill', color);
                    }
                }
                else {
                    if (index % 2 !== 0) {
                        const tile = this.tiles[index].tile;
                        tile.set('fill', color);
                    }
                }
            }
            if (this.labels.length) {
                this.labels.forEach((label) => {
                    // @ts-ignore
                    if (label && label.get('fill') === this.theme.tileLight) {
                        label.setColor(color);
                    }
                });
            }
            this.theme.tileLight = color;
            (_a = this.canvas) === null || _a === void 0 ? void 0 : _a.requestRenderAll();
        }
    }
    setSize(size) {
        if (this.canvas) {
            this.size = size;
            this.tileSize = Math.floor(size / 8);
            this.canvas.width = size;
            this.canvas.height = size;
            this.canvas.setDimensions({
                width: size + 4,
                height: size + 4,
            });
            this.resizeBoardObjects(size);
            this.canvas.requestRenderAll();
        }
    }
    setInteractive(interactive) {
        if (interactive) {
            if (this.canvas) {
            }
        }
        else {
            if (this.canvas) {
            }
        }
    }
    setBoardToPosition(position) {
        this.clearMaterial();
        if (position) {
            for (let index = 0; index < 64; ++index) {
                const squareData = position.square(_types__WEBPACK_IMPORTED_MODULE_4__["SquareNames"][index]);
                // get the first and last of the role and color
                if (squareData.length >= 2) {
                    this.addPiece(index, squareData[0], squareData[1].toUpperCase());
                }
            }
        }
    }
    requestRedraw() {
        this.clearBoard();
        this.generateBoard();
    }
    show() {
        if (this.boardCanvas) {
            this.boardCanvas.nativeElement.style.visibility = 'visible';
        }
    }
    hide() {
        if (this.boardCanvas) {
            this.boardCanvas.nativeElement.style.visibility = 'hidden';
        }
    }
}
CanvasChessBoard.ɵfac = function CanvasChessBoard_Factory(t) { return new (t || CanvasChessBoard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_olga_service__WEBPACK_IMPORTED_MODULE_5__["OlgaService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_colors_service__WEBPACK_IMPORTED_MODULE_6__["ColorService"])); };
CanvasChessBoard.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CanvasChessBoard, selectors: [["canvas-chessboard"]], viewQuery: function CanvasChessBoard_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.boardCanvas = _t.first);
    } }, inputs: { size: "size", tileSize: "tileSize", interactive: "interactive", showLabels: "showLabels", boardID: "boardID", theme: "theme", settings: "settings", selectedPiece: "selectedPiece" }, outputs: { tileSize: "tileSize", theme: "theme", settings: "settings", pieceMap: "pieceMap", pieces: "pieces", background: "background", tileGroup: "tileGroup", tiles: "tiles", labels: "labels", canvas: "canvas", selectedPiece: "selectedPiece", touching: "touching", midPromotion: "midPromotion" }, decls: 2, vars: 2, consts: [["resize", ""], ["boardCanvas", ""]], template: function CanvasChessBoard_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "canvas", 0, 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("z-index", 2);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhbnZhcy1jaGVzc2JvYXJkL2NhbnZhcy1jaGVzc2JvYXJkLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CanvasChessBoard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'canvas-chessboard',
                templateUrl: './canvas-chessboard.component.html',
                styleUrls: ['./canvas-chessboard.component.scss'],
            }]
    }], function () { return [{ type: _services_olga_service__WEBPACK_IMPORTED_MODULE_5__["OlgaService"] }, { type: _services_colors_service__WEBPACK_IMPORTED_MODULE_6__["ColorService"] }]; }, { size: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], tileSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], interactive: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], showLabels: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], boardID: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], theme: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], settings: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], pieceMap: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], pieces: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], background: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], tileGroup: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], tiles: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], labels: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], canvas: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], selectedPiece: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], touching: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], midPromotion: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], boardCanvas: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['boardCanvas', { static: false }]
        }] }); })();


/***/ }),

/***/ "./src/app/canvas-chessboard/types.ts":
/*!********************************************!*\
  !*** ./src/app/canvas-chessboard/types.ts ***!
  \********************************************/
/*! exports provided: SquareNames, BoardTheme, BoardSettings, LabelState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SquareNames", function() { return SquareNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardTheme", function() { return BoardTheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardSettings", function() { return BoardSettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LabelState", function() { return LabelState; });
const SquareNames = [
    'a1',
    'b1',
    'c1',
    'd1',
    'e1',
    'f1',
    'g1',
    'h1',
    'a2',
    'b2',
    'c2',
    'd2',
    'e2',
    'f2',
    'g2',
    'h2',
    'a3',
    'b3',
    'c3',
    'd3',
    'e3',
    'f3',
    'g3',
    'h3',
    'a4',
    'b4',
    'c4',
    'd4',
    'e4',
    'f4',
    'g4',
    'h4',
    'a5',
    'b5',
    'c5',
    'd5',
    'e5',
    'f5',
    'g5',
    'h5',
    'a6',
    'b6',
    'c6',
    'd6',
    'e6',
    'f6',
    'g6',
    'h6',
    'a7',
    'b7',
    'c7',
    'd7',
    'e7',
    'f7',
    'g7',
    'h7',
    'a8',
    'b8',
    'c8',
    'd8',
    'e8',
    'f8',
    'g8',
    'h8',
];
class BoardTheme {
    constructor(tileLight = '', tileDark = '', pieceSet = '', isSpriteSheet = false, fileExtension = '.svg', labelFontSize = 16, labelFontFamily = 'Cambria', labelFontWeight = 'bold') {
        this.tileLight = tileLight;
        this.tileDark = tileDark;
        this.pieceSet = pieceSet;
        this.isSpriteSheet = isSpriteSheet;
        this.fileExtension = fileExtension;
        this.labelFontSize = labelFontSize;
        this.labelFontFamily = labelFontFamily;
        this.labelFontWeight = labelFontWeight;
    }
}
class BoardSettings {
    constructor() {
        this.orientation = 'white';
    }
}
var LabelState;
(function (LabelState) {
    LabelState[LabelState["NoLabels"] = 0] = "NoLabels";
    LabelState[LabelState["LeftBottom"] = 1] = "LeftBottom";
    LabelState[LabelState["RightBottom"] = 2] = "RightBottom";
    LabelState[LabelState["LeftTop"] = 4] = "LeftTop";
    LabelState[LabelState["RightTop"] = 8] = "RightTop";
})(LabelState || (LabelState = {}));


/***/ }),

/***/ "./src/app/common/kokopu-engine.ts":
/*!*****************************************!*\
  !*** ./src/app/common/kokopu-engine.ts ***!
  \*****************************************/
/*! exports provided: GameScoreItem, ChessMove, ChessGame, GameScoreType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameScoreItem", function() { return GameScoreItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChessMove", function() { return ChessMove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChessGame", function() { return ChessGame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameScoreType", function() { return GameScoreType; });
/* harmony import */ var kokopu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! kokopu */ "./node_modules/kokopu/index.js");
/* harmony import */ var kokopu__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(kokopu__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _canvas_chessboard_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../canvas-chessboard/types */ "./src/app/canvas-chessboard/types.ts");
//@ts-ignore


class GameScoreItem {
    constructor(game = null, move) {
        this.game = game;
        this.type = 0;
        this.move = null;
        this.move = move;
    }
    addType(type) {
        this.type |= type;
    }
    removeType(type) {
        this.type ^= type;
    }
    getType(previous = null) {
        if (this.move) {
            let variations = this.move.variations();
            if (previous) {
                if (previous.move.moveColor() == 'w') {
                    this.type |= GameScoreType.HalfPly;
                    if (!previous.move.comment()) {
                        this.type |= GameScoreType.Group;
                    }
                }
            }
            if (variations && variations.length > 0) {
                this.type |= GameScoreType.Variation;
            }
            else if (this.move.comment()) {
                this.type |= GameScoreType.Annotation;
            }
            else {
                let comment = null;
                if (previous && previous.move) {
                    comment = previous.move.comment();
                }
                if ((!previous && this.move.moveColor() == 'w') || !comment) {
                    this.type |= GameScoreType.Group;
                }
            }
        }
        return this.type;
    }
    setSelected(select = true) {
        if (select) {
            this.type = this.type | GameScoreType.Selected;
        }
        else {
            this.type = this.type ^ GameScoreType.Selected;
        }
    }
    isBranched() {
        return ((this.type & GameScoreType.Branched) == GameScoreType.Branched);
    }
}
class ChessMove {
    constructor() {
        this.to = 0;
        this.from = 0;
        this.role = '';
        this.color = '';
    }
    static fromNode(node, descriptor = null) {
        if (!node || !node._info) {
            return null;
        }
        const move = new ChessMove();
        if (descriptor == null) {
            if (Object(kokopu__WEBPACK_IMPORTED_MODULE_0__["isMoveDescriptor"])(node._info.moveDescriptor)) {
                descriptor = node._info.moveDescriptor;
            }
            else {
                descriptor = node.positionBefore().notation(node._info.moveDescriptor);
            }
        }
        if (descriptor) {
            move.from = _canvas_chessboard_types__WEBPACK_IMPORTED_MODULE_1__["SquareNames"].indexOf(descriptor.from());
            move.to = _canvas_chessboard_types__WEBPACK_IMPORTED_MODULE_1__["SquareNames"].indexOf(descriptor.to());
            if (descriptor.isCapture()) {
                move.capture = { role: descriptor.capturedPiece().toUpperCase(), color: descriptor.capturedColoredPiece()[0] };
            }
            if (descriptor.isCastling()) {
                move.castle = { type: node.notation(), to: _canvas_chessboard_types__WEBPACK_IMPORTED_MODULE_1__["SquareNames"].indexOf(descriptor.rookTo()), from: _canvas_chessboard_types__WEBPACK_IMPORTED_MODULE_1__["SquareNames"].indexOf(descriptor.rookFrom()) };
            }
            if (descriptor.isPromotion()) {
                move.promotion = { role: descriptor.promotion() };
            }
            return move;
        }
        return null;
    }
    compareMoveToNode(node) {
        const mDescriptor = node._info.moveDescriptor;
        if (mDescriptor) {
            return (this.to === _canvas_chessboard_types__WEBPACK_IMPORTED_MODULE_1__["SquareNames"].indexOf(mDescriptor.to()) && this.from === _canvas_chessboard_types__WEBPACK_IMPORTED_MODULE_1__["SquareNames"].indexOf(mDescriptor.from()));
        }
        return false;
    }
}
class ChessGame {
    constructor(olga, game) {
        this.olga = olga;
        this.game = game;
        this.position = null;
        this.scorePath = [];
        this.startNode = null;
        this.currentNode = null;
        this.lastNode = null;
        this.currentIndex = 0;
        if (game) {
            this.setGame(this.game);
        }
    }
    static compareKNode(left, right) {
        if (left !== null &&
            right !== null &&
            left !== undefined &&
            right !== undefined) {
            const leftMove = left._info.moveDescriptor;
            const rightMove = right._info.moveDescriptor;
            return (leftMove.from() === rightMove.from() && leftMove.to() === rightMove.to());
        }
        return false;
    }
    static compareVariation(left, right) {
        if (left !== null &&
            right !== null &&
            left !== undefined &&
            right !== undefined) {
            if (ChessGame.compareKNode(left.first(), right.first())) {
                return (left.comment() === right.comment() &&
                    left.initialFullMoveNumber() === right.initialFullMoveNumber());
            }
        }
        return false;
    }
    static parsePGN(olga, pgn) {
        const games = [];
        const state = Object(kokopu__WEBPACK_IMPORTED_MODULE_0__["pgnRead"])(pgn);
        if (state) {
            const gameCount = state.gameCount();
            for (let index = 0; index < gameCount; ++index) {
                games.push(new ChessGame(olga, state.game(index)));
            }
        }
        return games;
    }
    static isMoveDescriptor(move) {
        return Object(kokopu__WEBPACK_IMPORTED_MODULE_0__["isMoveDescriptor"])(move);
    }
    getLastNode() {
        let node = this.currentNode;
        while (node && node.next()) {
            node = node.next();
        }
        return node;
    }
    setNode(node) {
        this.position = node.position();
        this.currentNode = node.next();
        this.lastNode = this.getLastNode();
        if (!this.currentNode) {
            this.currentNode = this.lastNode;
        }
        this.olga.redrawBoard();
        this.olga.updateStatus(this.position.turn(), node);
    }
    addNextMove(notation) {
        this.currentNode = this.currentNode.play(notation);
        this.olga.gameScoreItemsChanged(this.generateGameScore());
    }
    getMoveNotation(node) {
        if (Object(kokopu__WEBPACK_IMPORTED_MODULE_0__["isMoveDescriptor"])(node._info.moveDescriptor)) {
            return node.notation();
        }
        const positionBefore = node.positionBefore();
        if (positionBefore) {
            return node._info.moveDescriptor;
        }
        return '';
    }
    onVariant() {
        this.scorePath.forEach((traversal) => {
            if (traversal.down > 0) {
                return true;
            }
            return false;
        });
        return false;
    }
    performPromotion(move) {
        if (move.promotion && move.promoteFunction) {
            const moveDesc = move.promoteFunction(move.promotion.role.toLowerCase());
            if (this.position.play(moveDesc)) {
                const node = this.currentNode.play(moveDesc);
                if (!this.lastNode || this.lastNode == this.currentNode) {
                    this.lastNode = node;
                }
                if (!this.startNode) {
                    this.startNode = node;
                }
                this.currentNode = node;
                this.currentNode._info.moveDescriptor = moveDesc;
            }
        }
    }
    getPosition() {
        return this.position;
    }
    generateRootScore() {
        const items = Array();
        const variation = this.game.mainVariation();
        let node = variation.first();
        let previous = null;
        let gItem = null;
        while (node) {
            gItem = new GameScoreItem(this, node);
            gItem.getType(previous);
            items.push(gItem);
            previous = gItem;
            node = node.next();
        }
        return items;
    }
    generateGameScore() {
        let items = Array();
        let gItem = null;
        let previous = null;
        const traversals = this.scorePath.length;
        let current = this.startNode;
        if (traversals == 0) {
            items = this.generateRootScore();
        }
        for (let index = 0; index < traversals; ++index) {
            const traversal = this.scorePath[index];
            for (let j = 0; j < traversal.right; ++j) {
                gItem = new GameScoreItem(this, current);
                gItem.getType(previous);
                items.push(gItem);
                previous = gItem;
                current = current.next();
                // go down
            }
            if (traversal.down > 0) {
                const variations = current.variations();
                if (variations.length > (traversal.down - 1)) {
                    const variation = variations[traversal.down - 1];
                    current = variation.first();
                    console.log('Branching at ' + current.notation());
                    gItem = new GameScoreItem(this, current);
                    gItem.getType(previous);
                    items.push(gItem);
                    previous = gItem;
                    current = current.next();
                }
            }
        }
        while (current) {
            gItem = new GameScoreItem(this, current);
            gItem.getType(previous);
            items.push(gItem);
            previous = gItem;
            current = current.next();
        }
        if (items.length > 0) {
            this.lastNode = items[items.length - 1].move;
        }
        return items;
    }
    setGame(game) {
        this.game = game;
        let variation = this.game.mainVariation();
        this.startNode = variation.first();
        this.position = variation.initialPosition();
        this.currentNode = null;
        this.olga.redrawBoard();
    }
    moveToPrevious(previousNode, current) {
        if (this.currentNode) {
            const previousPosition = this.currentNode.positionBefore();
            if (previousPosition && this.currentNode) {
                const moveToBeUndone = ChessMove.fromNode(this.currentNode);
                this.olga.updateStatus(this.position.turn(), previousNode);
                return moveToBeUndone;
            }
            this.position = previousPosition;
            this.currentNode = previousNode;
            --this.currentIndex;
        }
        return null;
    }
    isGameOver() {
        return (this.position.isLegal() && this.position.moves().length == 0);
    }
    play(next) {
        if (this.position.play(next._info.moveDescriptor)) {
            this.currentNode = next;
            this.olga.updateStatus(this.position.turn(), next);
            ++this.currentIndex;
            return true;
        }
        return false;
    }
    unPlay(current, previous) {
        if (previous) {
            this.position = previous.position();
            this.currentNode = previous;
            --this.currentIndex;
            this.olga.updateStatus(this.position.turn(), previous);
            return true;
        }
        return false;
    }
    createVariation(move) {
        if (this.currentNode) {
            const variationsBefore = this.currentNode.variations();
            const variation = this.currentNode.addVariation(false);
            this.currentNode = variation.play(move);
            this.position = this.currentNode.position();
            this.scorePath.push({ right: this.currentIndex, down: variationsBefore.length + 1 });
            this.currentIndex = 0;
            this.olga.updateStatus(this.position.turn(), this.currentNode, move);
            // tell it to restore gamescore
            this.olga.gameScoreItemsChanged(this.generateGameScore());
            this.olga.incrementGameScoreSelection();
            return true;
        }
        return false;
    }
    addMoveToEnd(move) {
        if (this.currentNode && this.position.play(move)) {
            const next = this.currentNode.play(move);
            this.currentNode = next;
            this.position = this.currentNode.position();
            this.olga.updateStatus(this.position.turn(), this.currentNode);
            // tell it to restore gamescore
            this.olga.gameScoreItemsChanged([]);
            this.olga.gameScoreItemsChanged(this.generateGameScore());
            this.olga.incrementGameScoreSelection();
            return true;
        }
        return false;
    }
    makeVariantMove(index, node, updateBoard = false) {
        const variations = node.variations();
        if (index >= 0 && index < variations.length) {
            const variation = variations[index];
            this.currentNode = variation.first();
            this.position = this.currentNode.position();
            this.olga.updateStatus(this.position.turn(), this.currentNode);
            this.scorePath.push({ right: this.currentIndex, down: index + 1 });
            this.currentIndex = 0;
            if (updateBoard) {
                this.olga.makeBoardMove(ChessMove.fromNode(this.currentNode));
            }
            this.olga.updateStatus(this.position.turn(), this.currentNode);
            // tell it to restore gamescore
            this.olga.gameScoreItemsChanged(this.generateGameScore());
            this.olga.incrementGameScoreSelection();
            return true;
        }
        return false;
    }
    makeMoveOrVariation(nextMove, moveToBeMade, legalMove) {
        let valid = false;
        if (nextMove && moveToBeMade.compareMoveToNode(nextMove)) {
            valid = this.position.play(legalMove);
            this.olga.incrementGameScoreSelection();
            this.currentNode = nextMove;
            ++this.currentIndex;
        }
        else {
            // search through all the variant moves, if
            if (nextMove) {
                const variations = nextMove.variations();
                for (let index = 1; index <= variations.length; ++index) {
                    const variation = variations[index - 1];
                    const variantMove = variation.first();
                    if (moveToBeMade.compareMoveToNode(variantMove)) {
                        return this.makeVariantMove(index - 1, nextMove);
                    }
                }
            }
            // move is new, createVariant
            return this.createVariation(legalMove);
        }
        return valid;
    }
    makeMove(move) {
        // Valid move of current variation (continue main variation)
        // Move of a separate Variation that exists (move to that variation)
        // at the end of variation but game isnt over ( Create New Move)
        // move of separate variation that does not exist ( Create Move/Variation)  
        const legal = this.position.isMoveLegal(_canvas_chessboard_types__WEBPACK_IMPORTED_MODULE_1__["SquareNames"][move.from], _canvas_chessboard_types__WEBPACK_IMPORTED_MODULE_1__["SquareNames"][move.to]);
        let lastNode = null;
        if (legal) {
            if (legal.status == 'promotion') {
                move.promoteFunction = legal;
                this.olga.showPromotionDialog(move);
                return true;
            }
            const legalMove = legal();
            if (this.currentNode == null) {
                this.currentNode = this.startNode;
                return this.makeMoveOrVariation(this.currentNode, move, legalMove);
            }
            const nextMove = this.currentNode.next();
            if (!nextMove) {
                return this.addMoveToEnd(legalMove);
            }
            console.log("Next Move ->" + nextMove.notation());
            lastNode = this.currentNode;
            return this.makeMoveOrVariation(nextMove, move, legalMove);
        }
        return false;
    }
    resetEngine() {
        this.position.reset();
        this.currentNode = null;
        this.olga.updateStatus(this.position.turn());
    }
}
var GameScoreType;
(function (GameScoreType) {
    GameScoreType[GameScoreType["HalfPly"] = 1] = "HalfPly";
    GameScoreType[GameScoreType["Group"] = 2] = "Group";
    GameScoreType[GameScoreType["Variation"] = 4] = "Variation";
    GameScoreType[GameScoreType["Annotation"] = 8] = "Annotation";
    GameScoreType[GameScoreType["Selected"] = 16] = "Selected";
    GameScoreType[GameScoreType["Branched"] = 32] = "Branched";
})(GameScoreType || (GameScoreType = {}));


/***/ }),

/***/ "./src/app/common/labeled-slider/labeled-slider.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/common/labeled-slider/labeled-slider.component.ts ***!
  \*******************************************************************/
/*! exports provided: LabeledSliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LabeledSliderComponent", function() { return LabeledSliderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js");



class LabeledSliderComponent {
    constructor() {
        this.value = 18;
        this.minimum = 14;
        this.maximum = 24;
        this.step = 1;
        this.label = 'labeled slider';
    }
    ngOnInit() {
    }
    inputEventCapture(event) {
        //console.log(event);
    }
}
LabeledSliderComponent.ɵfac = function LabeledSliderComponent_Factory(t) { return new (t || LabeledSliderComponent)(); };
LabeledSliderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LabeledSliderComponent, selectors: [["app-labeled-slider"]], inputs: { value: "value", minimum: "minimum", maximum: "maximum", step: "step", label: "label" }, decls: 2, vars: 4, consts: [["thumbLabel", "", 1, "ls-slider", 3, "value", "min", "max", "step", "input"], ["scoreFontSize", ""]], template: function LabeledSliderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-slider", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function LabeledSliderComponent_Template_mat_slider_input_0_listener($event) { return ctx.inputEventCapture($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.value)("min", ctx.minimum)("max", ctx.maximum)("step", ctx.step);
    } }, directives: [_angular_material_slider__WEBPACK_IMPORTED_MODULE_1__["MatSlider"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi9sYWJlbGVkLXNsaWRlci9sYWJlbGVkLXNsaWRlci5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LabeledSliderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-labeled-slider',
                templateUrl: './labeled-slider.component.html',
                styleUrls: ['./labeled-slider.component.scss']
            }]
    }], function () { return []; }, { value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], minimum: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], maximum: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], step: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], label: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/common/toggle-switch/toggle-switch.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/common/toggle-switch/toggle-switch.component.ts ***!
  \*****************************************************************/
/*! exports provided: ToggleSwitchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleSwitchComponent", function() { return ToggleSwitchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ToggleSwitchComponent {
    constructor() { }
    ngOnInit() {
    }
}
ToggleSwitchComponent.ɵfac = function ToggleSwitchComponent_Factory(t) { return new (t || ToggleSwitchComponent)(); };
ToggleSwitchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ToggleSwitchComponent, selectors: [["app-toggle-switch"]], decls: 2, vars: 0, template: function ToggleSwitchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "toggle-switch works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi90b2dnbGUtc3dpdGNoL3RvZ2dsZS1zd2l0Y2guY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToggleSwitchComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-toggle-switch',
                templateUrl: './toggle-switch.component.html',
                styleUrls: ['./toggle-switch.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/cookie-consent/cookie-consent.component.ts":
/*!************************************************************!*\
  !*** ./src/app/cookie-consent/cookie-consent.component.ts ***!
  \************************************************************/
/*! exports provided: CookieConsentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CookieConsentComponent", function() { return CookieConsentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_olga_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/olga.service */ "./src/app/services/olga.service.ts");



const _c0 = ["container"];
const OLGA_COOKIE_NAME = 'OLGA_SETTINGS';
class CookieConsentComponent {
    constructor(olga) {
        this.olga = olga;
        this.container = null;
        const cookie = this.getCookie(OLGA_COOKIE_NAME);
        const consent = (cookie != null && cookie.length > 0);
        this.olga.setCookieConsent(consent);
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        if (!this.olga.cookiesAccepted.value && this.container) {
            this.container.nativeElement.style.visibility = 'visible';
        }
    }
    getCookie(name) {
        let ca = document.cookie.split(';');
        let caLen = ca.length;
        let cookieName = `${name}=`;
        let c;
        for (let i = 0; i < caLen; i += 1) {
            if (ca[i].indexOf(OLGA_COOKIE_NAME) >= 0) {
                return ca[i].substring(cookieName.length, ca[i].length);
            }
        }
        return '';
    }
    deleteCookie(name) {
        this.setCookie(name, '', 0);
    }
    setCookie(name, value, expireDays, path = '') {
        let d = new Date();
        d.setTime(d.getTime() + expireDays * 24 * 60 * 60 * 1000);
        let expires = `expires=${d.toUTCString()}`;
        let cpath = path ? `; path=${path}` : '';
        document.cookie = `${name}=${value}; ${expires}${cpath}`;
    }
    consent(consent) {
        this.olga.setCookieConsent(consent);
        if (consent) {
            this.setCookie(OLGA_COOKIE_NAME, '1', 7);
        }
        if (this.container) {
            this.container.nativeElement.style.visibility = 'hidden';
        }
    }
}
CookieConsentComponent.ɵfac = function CookieConsentComponent_Factory(t) { return new (t || CookieConsentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_olga_service__WEBPACK_IMPORTED_MODULE_1__["OlgaService"])); };
CookieConsentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CookieConsentComponent, selectors: [["cookie-consent"]], viewQuery: function CookieConsentComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.container = _t.first);
    } }, decls: 8, vars: 0, consts: [[1, "consent-bar"], ["container", ""], [1, "content-text"], [1, "consent-refuse", 3, "click"], [1, "consent-accept", 3, "click"]], template: function CookieConsentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Olga 2 uses cookies to store your user settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CookieConsentComponent_Template_button_click_4_listener() { return ctx.consent(false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Refuse cookies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CookieConsentComponent_Template_button_click_6_listener() { return ctx.consent(true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Allow cookies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".consent-bar[_ngcontent-%COMP%] {\n  position: absolute;\n  displaY: block;\n  bottom: 0px;\n  left: 0px;\n  right: 0px;\n  border-radius: 2px;\n  height: auto;\n  background: black;\n  padding-top: 4px;\n  color: white;\n  z-index: 1001;\n  line-height: 48px;\n  visibility: hidden;\n}\n\n.content-text[_ngcontent-%COMP%] {\n  left: 6px;\n  color: white;\n  background: transparent;\n  font-size: 16px;\n  float: left;\n  margin-left: 4px;\n  text-align: center;\n}\n\n.consent-refuse[_ngcontent-%COMP%] {\n  margin-right: 16px;\n  height: 42px;\n  background: transparent;\n  font-size: 16px;\n  font-weight: bold;\n  color: white;\n  border: none;\n  float: right;\n}\n\n.consent-accept[_ngcontent-%COMP%] {\n  float: right;\n  margin-right: 8px;\n  height: 42px;\n  width: auto;\n  font-size: 16px;\n  font-weight: bold;\n  background: #c75001;\n  color: black;\n  border-radius: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29va2llLWNvbnNlbnQvY29va2llLWNvbnNlbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxTQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY29va2llLWNvbnNlbnQvY29va2llLWNvbnNlbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29uc2VudC1iYXJ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBkaXNwbGFZOmJsb2NrO1xyXG4gICAgYm90dG9tOjBweDtcclxuICAgIGxlZnQ6MHB4O1xyXG4gICAgcmlnaHQ6MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgICBwYWRkaW5nLXRvcDogNHB4O1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbiAgICB6LWluZGV4OjEwMDE7XHJcbiAgICBsaW5lLWhlaWdodDogNDhweDtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxufVxyXG5cclxuLmNvbnRlbnQtdGV4dHtcclxuICAgIGxlZnQ6NnB4O1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kOnRyYW5zcGFyZW50O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZmxvYXQ6bGVmdDtcclxuICAgIG1hcmdpbi1sZWZ0OiA0cHg7XHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxufVxyXG5cclxuLmNvbnNlbnQtcmVmdXNle1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xyXG4gICAgaGVpZ2h0OiA0MnB4O1xyXG4gICAgYmFja2dyb3VuZDp0cmFuc3BhcmVudDtcclxuICAgIGZvbnQtc2l6ZToxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6Ym9sZDtcclxuICAgIGNvbG9yOndoaXRlO1xyXG4gICAgYm9yZGVyOm5vbmU7XHJcbiAgICBmbG9hdDpyaWdodDtcclxufVxyXG5cclxuLmNvbnNlbnQtYWNjZXB0e1xyXG4gICAgZmxvYXQ6cmlnaHQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcclxuICAgIGhlaWdodDogNDJweDtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgZm9udC1zaXplOjE2cHg7XHJcbiAgICBmb250LXdlaWdodDpib2xkO1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDE5OSwgODAsIDEpO1xyXG4gICAgY29sb3I6YmxhY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CookieConsentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'cookie-consent',
                templateUrl: './cookie-consent.component.html',
                styleUrls: ['./cookie-consent.component.scss']
            }]
    }], function () { return [{ type: _services_olga_service__WEBPACK_IMPORTED_MODULE_1__["OlgaService"] }]; }, { container: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['container']
        }] }); })();


/***/ }),

/***/ "./src/app/game-score/game-score-item/game-score-item.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/game-score/game-score-item/game-score-item.component.ts ***!
  \*************************************************************************/
/*! exports provided: GameScoreItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameScoreItemComponent", function() { return GameScoreItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _common_kokopu_engine__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/kokopu-engine */ "./src/app/common/kokopu-engine.ts");
/* harmony import */ var _services_olga_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/olga.service */ "./src/app/services/olga.service.ts");
/* harmony import */ var _services_colors_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/colors.service */ "./src/app/services/colors.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






const _c0 = ["gsiPly"];
function GameScoreItemComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("contextmenu", function GameScoreItemComponent_div_5_Template_div_contextmenu_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.olga.openVariation(ctx_r4.data); })("click", function GameScoreItemComponent_div_5_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.clickMove(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("gsi-move ", ctx_r2.typeName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.score, "");
} }
function GameScoreItemComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GameScoreItemComponent_div_6_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.clickMove(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("gsi-comment ", ctx_r3.typeName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.data.move.comment(), "");
} }
class GameScoreItemComponent {
    constructor(olga, colors) {
        // use data to actually set type
        this.olga = olga;
        this.colors = colors;
        this.data = new _common_kokopu_engine__WEBPACK_IMPORTED_MODULE_1__["GameScoreItem"](null, -1);
        this.typeName = '';
        // visual nodes
        this.ply = '';
        this.score = '';
        this.GameScoreType = _common_kokopu_engine__WEBPACK_IMPORTED_MODULE_1__["GameScoreType"];
        this.gsiPly = null;
    }
    ngOnInit() {
    }
    ngOnChanges(changes) {
        if (changes.data) {
            let newData = changes.data.currentValue;
            this.data = newData;
            if (this.data && this.gsiPly) {
                let showing = false;
                if (this.isFullPly()) {
                    showing = this.olga.showingPly.value;
                }
                else {
                    showing = this.olga.showingHalfPly.value;
                }
                if (!showing) {
                    this.gsiPly.nativeElement.remove();
                    this.gsiPly = null;
                }
                else {
                    this.ply = this.data.move.fullMoveNumber().toString() + '.';
                }
            }
            if (this.data.move._info.moveDescriptor && typeof this.data.move._info.moveDescriptor != 'string') {
                this.score = this.data.move.notation();
            }
            else {
                this.score = this.data.move._info.moveDescriptor;
            }
            this.data.getType();
            this.updateTypeName();
        }
    }
    ngAfterViewInit() {
        this.updateTypeName();
        if (this.gsiPly) {
            let showing = false;
            if (this.isFullPly()) {
                showing = this.olga.showingPly.value;
            }
            else {
                showing = this.olga.showingHalfPly.value;
            }
            if (!showing) {
                this.gsiPly.nativeElement.remove();
                this.gsiPly = null;
            }
            else {
                window.setTimeout(() => { this.ply = this.data.move.fullMoveNumber().toString() + '.'; }, 10);
            }
        }
    }
    showPly() {
        if (this.data) {
            if (this.isFullPly()) {
                return this.olga.showingPly.value;
            }
            return this.olga.showingHalfPly.value;
        }
        return false;
    }
    isFullPly() {
        if (this.data) {
            return (this.data.type & _common_kokopu_engine__WEBPACK_IMPORTED_MODULE_1__["GameScoreType"].HalfPly) == 0;
        }
        return false;
    }
    setSelected(select) {
        if (this.data) {
            if (select) {
                this.data.type = (this.data.type | _common_kokopu_engine__WEBPACK_IMPORTED_MODULE_1__["GameScoreType"].Selected);
                this.updateTypeName();
                return;
            }
            if (this.data.type >= _common_kokopu_engine__WEBPACK_IMPORTED_MODULE_1__["GameScoreType"].Selected) {
                this.data.type = this.data.type ^ _common_kokopu_engine__WEBPACK_IMPORTED_MODULE_1__["GameScoreType"].Selected;
            }
            this.updateTypeName();
        }
    }
    isSelected() {
        if (this.data) {
            return (this.data.type & _common_kokopu_engine__WEBPACK_IMPORTED_MODULE_1__["GameScoreType"].Selected) == _common_kokopu_engine__WEBPACK_IMPORTED_MODULE_1__["GameScoreType"].Selected;
        }
        return false;
    }
    getPly() {
        if (this.data && this.data.move) {
            return this.data.move.fullMoveNumber();
        }
        return -1;
    }
    isGroup() {
        if (this.data) {
            return (this.data.type & _common_kokopu_engine__WEBPACK_IMPORTED_MODULE_1__["GameScoreType"].Group) == _common_kokopu_engine__WEBPACK_IMPORTED_MODULE_1__["GameScoreType"].Group;
        }
        return false;
    }
    isAnnotation() {
        if (this.data) {
            return (this.data.type & _common_kokopu_engine__WEBPACK_IMPORTED_MODULE_1__["GameScoreType"].Annotation) == _common_kokopu_engine__WEBPACK_IMPORTED_MODULE_1__["GameScoreType"].Annotation;
        }
        return false;
    }
    clickMove() {
        const variations = this.data.move.variations();
        if (variations.length > 0) {
            this.olga.displayVariations(this.data);
            // show variation 
            console.log('Taking first variation');
            console.log(variations[0]);
        }
    }
    updateTypeName() {
        this.typeName = '';
        if (this.data) {
            const value = this.data.type & _common_kokopu_engine__WEBPACK_IMPORTED_MODULE_1__["GameScoreType"].Selected;
            if ((this.data.type & _common_kokopu_engine__WEBPACK_IMPORTED_MODULE_1__["GameScoreType"].Selected) == _common_kokopu_engine__WEBPACK_IMPORTED_MODULE_1__["GameScoreType"].Selected) {
                this.typeName += ' Current';
            }
            if ((this.data.type & _common_kokopu_engine__WEBPACK_IMPORTED_MODULE_1__["GameScoreType"].Annotation) == _common_kokopu_engine__WEBPACK_IMPORTED_MODULE_1__["GameScoreType"].Annotation) {
                this.typeName += ' Annotation ';
            }
            if ((this.data.type & _common_kokopu_engine__WEBPACK_IMPORTED_MODULE_1__["GameScoreType"].Group) == _common_kokopu_engine__WEBPACK_IMPORTED_MODULE_1__["GameScoreType"].Group) {
                this.typeName += ' Group ';
            }
            if ((this.data.type & _common_kokopu_engine__WEBPACK_IMPORTED_MODULE_1__["GameScoreType"].HalfPly) == _common_kokopu_engine__WEBPACK_IMPORTED_MODULE_1__["GameScoreType"].HalfPly) {
                this.typeName += ' HalfPly ';
            }
            const variations = this.data.move.variations();
            if (variations && variations.length > 0) {
                this.typeName += ' Variation ';
            }
            if ((this.data.type & _common_kokopu_engine__WEBPACK_IMPORTED_MODULE_1__["GameScoreType"].Branched) == _common_kokopu_engine__WEBPACK_IMPORTED_MODULE_1__["GameScoreType"].Branched) { // must have a variation to be branched
                this.typeName += ' Branched';
            }
        }
    }
}
GameScoreItemComponent.ɵfac = function GameScoreItemComponent_Factory(t) { return new (t || GameScoreItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_olga_service__WEBPACK_IMPORTED_MODULE_2__["OlgaService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_colors_service__WEBPACK_IMPORTED_MODULE_3__["ColorService"])); };
GameScoreItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GameScoreItemComponent, selectors: [["game-score-item"]], viewQuery: function GameScoreItemComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.gsiPly = _t.first);
    } }, inputs: { data: "data" }, outputs: { data: "data", typeName: "typeName", ply: "ply", score: "score" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 7, vars: 9, consts: [["domElement", ""], [3, "contextmenu", "click"], ["gsiPly", ""], [3, "class", "contextmenu", "click", 4, "ngIf"], [3, "class", "click", 4, "ngIf"], [3, "click"]], template: function GameScoreItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", null, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("contextmenu", function GameScoreItemComponent_Template_div_contextmenu_2_listener() { return ctx.olga.openVariation(ctx.data); })("click", function GameScoreItemComponent_Template_div_click_2_listener() { return ctx.clickMove(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, GameScoreItemComponent_div_5_Template, 2, 4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, GameScoreItemComponent_div_6_Template, 2, 4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("gsi-container ", ctx.typeName, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("gsi-ply ", ctx.typeName, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.ply, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.move);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.move);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: ["@font-face {\n  font-family: \"Caveat\";\n  src: url('Caveat-Bold.woff2') format(\"woff2\"), url('Caveat-Bold.woff') format(\"woff\");\n  font-weight: bold;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"Caveat\";\n  src: url('Caveat-Regular.woff2') format(\"woff2\"), url('Caveat-Regular.woff') format(\"woff\");\n  font-weight: 600;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"FigurineSymbolT1\";\n  src: url('FigurineSymbolT1Bold.woff2') format(\"woff2\"), url('FigurineSymbolT1Bold.woff') format(\"woff\");\n  font-weight: bold;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"FigurineSymbolT1\";\n  src: url('FigurineSymbolT1.woff2') format(\"woff2\"), url('FigurineSymbolT1.woff') format(\"woff\");\n  font-weight: 600;\n  font-style: normal;\n  font-display: swap;\n}\n\n\n\n\n\n\n\n\n\n\n[_ngcontent-%COMP%]:root {\n  --bg-color: #f2f3f7;\n  --fg-color: #383a41;\n  --red: #e43030;\n  --green: #19a187;\n  --blue: #367bf0;\n  --dark-blue: #265ab1;\n  --maroon: #b8174c;\n  --purple: #8c42ab;\n}\n.gsi-container[_ngcontent-%COMP%] {\n  display: inline-flex;\n  line-height: var(--gsTextSize);\n  margin: 2px;\n  padding-left: 2px;\n}\n.gsi-move[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  color: var(--gsTextColor);\n  font-size: 16px;\n  font-family: var(--gsFontFamily);\n}\n.gsi-ply[_ngcontent-%COMP%] {\n  color: var(--gsTextColor);\n  font-size: 18px;\n  font-weight: bold;\n}\n.gsi-comment[_ngcontent-%COMP%] {\n  color: var(--gsTextColorAN);\n  margin-left: 4px;\n  font-size: 13px;\n}\n.Current[_ngcontent-%COMP%] {\n  background: var(--gsBackgroundHG);\n  color: var(--gsTextColorHG);\n  border: var(--gsBorderHG);\n  line-height: var(--gsTextSize);\n}\n.Current.gsi-comment[_ngcontent-%COMP%] {\n  color: var(--gsAnnotationColorHG);\n}\n.Current.gsi-ply[_ngcontent-%COMP%] {\n  color: #00d4fa;\n}\n.Current.Variation.gsi-container[_ngcontent-%COMP%] {\n  border: #00d4fa 2px dashed;\n}\n.Current.Branched.gsi-container[_ngcontent-%COMP%] {\n  border: #00d4fa 2px dashed;\n}\n.Current.Branched.Variation.gsi-container[_ngcontent-%COMP%] {\n  border: #00d4fa 2px dashed;\n}\n.Branched.Variation.gsi-container[_ngcontent-%COMP%] {\n  border: 2px lightcoral dashed;\n}\n.Branched.gsi-container[_ngcontent-%COMP%] {\n  border: 2px lightcoral dashed;\n}\n\n.Group.gsi-container[_ngcontent-%COMP%] {\n  color: var(--gsTextColor);\n}\n.Group.gsi-container-hg[_ngcontent-%COMP%] {\n  background: var(--gsBackgroundHG);\n  border: var(--gsBorderHG);\n  line-height: var(--gsTextSize);\n}\n.Group.gsi-move[_ngcontent-%COMP%] {\n  padding-left: 2px;\n  line-height: var(--gsTextSize);\n}\n.Group.gsi-ply[_ngcontent-%COMP%] {\n  background: var(--gsBackgroundAN);\n  border-radius: 2px;\n  margin-right: 2px;\n  border: var(--gsBorderAN);\n  font-size: var(--gsTextSize);\n  line-height: var(--gsTextSize);\n}\n.Group.gsi-ply-highlight[_ngcontent-%COMP%] {\n  background: var(--gsBackgroundHG);\n  color: var(--gsTextColorHG);\n  border: var(--gsBorderHG);\n  line-height: var(--gsTextSize);\n}\n\n.Annotation.gsi-container[_ngcontent-%COMP%] {\n  color: var(--gsTextColor);\n  line-height: var(--gsTextSize);\n}\n.Annotation.gsi-container-hg[_ngcontent-%COMP%] {\n  background: var(--gsBackgroundHG);\n  border: var(--gsBorderHG);\n  line-height: var(--gsTextSize);\n}\n.Annotation.gsi-move[_ngcontent-%COMP%] {\n  padding-left: 2px;\n  line-height: var(--gsTextSize);\n}\n.Annotation.gsi-ply[_ngcontent-%COMP%] {\n  background: var(--gsBackgroundAN);\n  border-radius: 2px;\n  border: var(--gsBorderAN);\n  font-size: var(--gsTextSize);\n  line-height: var(--gsTextSize);\n}\n.Annotation.gsi-ply-highlight[_ngcontent-%COMP%] {\n  background: var(--gsBackgroundHG);\n  color: var(--gsTextColorHG);\n  border: var(--gsBorderHG);\n  line-height: var(--gsTextSize);\n}\n.Annotation.gsi-comment[_ngcontent-%COMP%] {\n  padding-left: 3px;\n  padding-right: 2px;\n  margin-left: 3px;\n  margin-right: 2px;\n  line-height: var(--gsTextSize);\n}\n\n.Variation.gsi-container[_ngcontent-%COMP%] {\n  border: white dashed 2px;\n  background: var(--gsBackground);\n  color: var(--gsTextColor);\n  padding: 2px;\n}\n.Variation.gsi-move[_ngcontent-%COMP%] {\n  padding-left: 2px;\n  line-height: var(--gsTextSize);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMuc2NzcyIsInNyYy9hc3NldHMvc2Nzcy9tb2R1bGVzL19mb250cy5zY3NzIiwic3JjL2FwcC9nYW1lLXNjb3JlL2dhbWUtc2NvcmUtaXRlbS9nYW1lLXNjb3JlLWl0ZW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOEVBQUE7QUNBQTtFQUNJLHFCQUFBO0VBQ0EscUZBQUE7RUFFQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNDSjtBREVBO0VBQ0kscUJBQUE7RUFDQSwyRkFBQTtFQUVBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0RKO0FESUE7RUFDRSwrQkFBQTtFQUNBLHVHQUFBO0VBRUEsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDSEY7QURNQTtFQUNFLCtCQUFBO0VBQ0EsK0ZBQUE7RUFFQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNMRjtBRmFBLCtFQUFBO0FBR0EsK0VBQUE7QUFRQSwrRUFBQTtBQU1BLCtFQUFBO0FBTUEsK0VBQUE7QUFNQSxnRkFBQTtBQUtBLCtFQUFBO0FBS0EseUVBQUE7QUFLQSx5RUFBQTtBQUlBLHVFQUFBO0FBZ0JBO0VBQ0UsbUJBQUE7RUFDQSxtQkFBQTtFQUVBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUVsRUY7QUE5Q0E7RUFDRSxvQkFBQTtFQUNBLDhCRjZDVztFRTVDWCxXQUFBO0VBQ0EsaUJBQUE7QUFpREY7QUE5Q0E7RUFDRSxtQkFBQTtFQUNBLHlCRmtDWTtFRWpDWixlQUFBO0VBQ0EsZ0NGcUNhO0FFWWY7QUE5Q0E7RUFDRSx5QkY0Qlk7RUUzQlosZUFBQTtFQUNBLGlCQUFBO0FBaURGO0FBOUNBO0VBQ0UsMkJGZ0RjO0VFL0NkLGdCQUFBO0VBQ0EsZUFBQTtBQWlERjtBQTlDQTtFQUNFLGlDRnNDZTtFRXJDZiwyQkZtQ2M7RUVsQ2QseUJGcUNXO0VFcENYLDhCRmlCVztBRWdDYjtBQTlDQTtFQUNFLGlDRjhCb0I7QUVtQnRCO0FBOUNBO0VBQ0UsY0FBQTtBQWlERjtBQTlDQTtFQUNFLDBCQUFBO0FBaURGO0FBL0NBO0VBQ0UsMEJBQUE7QUFrREY7QUFoREE7RUFDRSwwQkFBQTtBQW1ERjtBQWpEQTtFQUNFLDZCQUFBO0FBb0RGO0FBbERBO0VBQ0UsNkJBQUE7QUFxREY7QUFsREEsaUZBQUE7QUFDQTtFQUNFLHlCRmhCWTtBRXFFZDtBQW5EQTtFQUNFLGlDRkdlO0VFRmYseUJGR1c7RUVGWCw4QkZqQlc7QUV1RWI7QUFwREE7RUFDRSxpQkFBQTtFQUNBLDhCRnJCVztBRTRFYjtBQXBEQTtFQUNFLGlDRkZlO0VFR2Ysa0JBQUE7RUFDQSxpQkFBQTtFQUNBLHlCRkpXO0VFS1gsNEJGN0JXO0VFOEJYLDhCRjlCVztBRXFGYjtBQXBEQTtFQUNFLGlDRmhCZTtFRWlCZiwyQkZuQmM7RUVvQmQseUJGakJXO0VFa0JYLDhCRnJDVztBRTRGYjtBQWpEQSxrRkFBQTtBQUNBO0VBQ0UseUJGakRZO0VFa0RaLDhCRjlDVztBRWtHYjtBQWxEQTtFQUNFLGlDRi9CZTtFRWdDZix5QkYvQlc7RUVnQ1gsOEJGbkRXO0FFd0diO0FBbkRBO0VBQ0UsaUJBQUE7RUFDQSw4QkZ2RFc7QUU2R2I7QUFuREE7RUFDRSxpQ0ZwQ2U7RUVxQ2Ysa0JBQUE7RUFDQSx5QkZyQ1c7RUVzQ1gsNEJGOURXO0VFK0RYLDhCRi9EVztBRXFIYjtBQXBEQTtFQUNFLGlDRmhEZTtFRWlEZiwyQkZuRGM7RUVvRGQseUJGakRXO0VFa0RYLDhCRnJFVztBRTRIYjtBQXBEQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsOEJGN0VXO0FFb0liO0FBbkRBLGlGQUFBO0FBRUE7RUFDRSx3QkFBQTtFQUNBLCtCRnhGYTtFRXlGYix5QkYxRlk7RUUyRlosWUFBQTtBQXFERjtBQWxEQTtFQUNFLGlCQUFBO0VBQ0EsOEJGNUZXO0FFaUpiIiwiZmlsZSI6InNyYy9hcHAvZ2FtZS1zY29yZS9nYW1lLXNjb3JlLWl0ZW0vZ2FtZS1zY29yZS1pdGVtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuXG5AaW1wb3J0IFwiLi9hc3NldHMvc2Nzcy9tb2R1bGVzL19mb250cy5zY3NzXCI7XG4kZ2FtZXNjb3JlLWZhbWlseTogXCJGaWd1cmluZVN5bWJvbFQxXCI7XG4kZ2FtZXNjb3JlLWhpZ2hsaWdodDogIzU4NTg1OGZmO1xuJGdhbWVzY29yZS1mb3JlZ3JvdW5kOiB3aGl0ZTtcblxuJHJlZDogI2U0MzAzMDtcbiRncmVlbjogIzE5YTE4NztcbiRsaWdodC1ibHVlOiAjMDBmZmZmZmY7XG4kYmx1ZTogIzM2N2JmMDtcbiRkYXJrLWJsdWU6ICMyNjVhYjE7XG4kbWFyb29uOiAjYjgxNzRjO1xuJHB1cnBsZTogIzhjNDJhYjtcblxuLy8gTWFpbiBPTEdBIENvbG9yIEVsZW1lbnQgVmFyaWFibGVzXG4kdGV4dENvbG9yOiB2YXIoLS10ZXh0Q29sb3IpOyAvLyBNYWluIFRleHQgQ29sb3JcbiR0ZXh0Q29sb3JBdHRlbnRpb246IHZhcigtLXRleHRDb2xvckF0dGVudGlvbik7IC8vIEF0dGVudGlvbiB0ZXh0XG4kdGV4dENvbG9yUmVtb3ZlOiB2YXIoLS10ZXh0Q29sb3JSZW1vdmUpOyAvLyBSZW1vdmUvRGVsZXRlL0Nsb3NlXG4kdGV4dENvbG9yQWRkOiB2YXIoLS10ZXh0Q29sb3JBZGQpOyAvLyBBZGQvQ3JlYXRlL09wZW5cbiR0ZXh0Q29sb3JBY3RpdmU6IHZhcigtLXRleHRDb2xvckFjdGl2ZSk7IC8vIEFkZC9DcmVhdGUvT3BlblxuJGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQpOyAvLyBNYWluIGJhY2tncm91bmQgQ29sb3JcbiRiZ0NvbnRhaW5lcjogdmFyKC0tYmdDb250YWluZXIpOyAvLyBiYWNrZ3JvdW5kIG9mIENvbnRhaW5lcnNcbiRiZ01lbnU6IHZhcigtLWJnTWVudSk7IC8vIGJhY2tncm91bmQgb2YgTWVudXNcbiRiZ0l0ZW06IHZhcigtLWJnSXRlbSk7IC8vIGJhY2tncm91bmQgb2YgSXRlbXNcblxuLy8gQ29udGV4dCBNZW51XG4kYmdDb250ZXh0OiB2YXIoLS1iZ0NvbnRleHQpOyAvLyBiYWNrZ3JvdW5kIG9mIENvbnRleHQgTWVudVxuJHRleHRDb2xvckNvbnRleHQ6IHZhcigtLXRleHRDb2xvckNvbnRleHQpOyAvLyB0ZXh0IGNvbG9yIENvbnRleHQgTWVudVxuJGJvcmRlckNvbnRleHQ6IHZhcigtLWJvcmRlckNvbnRleHQpOyAvLyBib3JkZXIgQ29udGV4dCBNZW51XG4kb3ZlcmxheUNvbnRleHRCYWNrZ3JvdW5kOiB2YXIoXG4gIC0tb3ZlcmxheUNvbnRleHRCYWNrZ3JvdW5kXG4pOyAvLyBDb250ZXh0IE1lbnUgT3ZlcmxheSBiYWNrZ3JvdW5kIG1haW5cbiRvdmVybGF5Q29udGV4dEJhY2tncm91bmRHcmFkaWVudDogdmFyKFxuICAtLW92ZXJsYXlDb250ZXh0QmFja2dyb3VuZEdyYWRpZW50XG4pOyAvLyBDb250ZXh0IE1lbnUgYmFja2dyb3VuZCBncmFkaWVudFxuXG4kaXRlbTogdmFyKC0taXRlbSk7XG4kaXRlbS1jb250cmFzdDogdmFyKC0taXRlbS1jb250cmFzdCk7XG4kaXRlbS1iZzogdmFyKC0taXRlbS1iZyk7XG5cbi8qKioqKioqKioqKioqKioqKioqIE1lbnUgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4kbWVCYWNrZ3JvdW5kOiB2YXIoLS1tZUJhY2tncm91bmQpO1xuXG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIENvbnRhaW5lciBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuJGdzVGV4dENvbG9yOiB2YXIoLS1nc1RleHRDb2xvcik7IC8vIFRleHQgY29sb3IgZm9yIGdhbWUgc2NvcmVcbiRnc0JhY2tncm91bmQ6IHZhcigtLWdzQmFja2dyb3VuZCk7IC8vIGJhY2tncm91bmQgb2YgQ29udGFpbmVyc1xuJGdzTGlzdEJhY2tncm91bmQ6IHZhcigtLWdzTGlzdEJhY2tncm91bmQpOyAvLyBsaXN0IGJhY2tncm91bmQgb2YgZ2FtZSBzY29yZVxuJGdzQm9yZGVyOiB2YXIoLS1nc0JvcmRlcik7IC8vIGJhY2tncm91bmQgb2YgTWVudXNcbiRnc1RleHRTaXplOiB2YXIoLS1nc1RleHRTaXplKTsgLy8gYmFja2dyb3VuZCBvZiBNZW51c1xuJGdzRm9udEZhbWlseTogdmFyKC0tZ3NGb250RmFtaWx5KTsgLy8gc2NvcmUgZm9udFxuXG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIENvbnRhaW5lciBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuJGdzVGV4dENvbG9yTVc6IHZhcigtLWdzVGV4dENvbG9yTVcpOyAvLyBUZXh0IGNvbG9yIGZvciBnYW1lIHNjb3JlXG4kZ3NCYWNrZ3JvdW5kTVc6IHZhcigtLWdzQmFja2dyb3VuZE1XKTsgLy8gYmFja2dyb3VuZCBvZiBDb250YWluZXJzXG4kZ3NCb3JkZXJNVzogdmFyKC0tZ3NCb3JkZXJNVyk7IC8vIGJhY2tncm91bmQgb2YgTWVudXNcbiRnc1RleHRTaXplTVc6IHZhcigtLWdzVGV4dFNpemVNVyk7IC8vIGJhY2tncm91bmQgb2YgTWVudXNcblxuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBDb250YWluZXIgVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiRnc1RleHRDb2xvck1COiB2YXIoLS1nc1RleHRDb2xvck1CKTsgLy8gVGV4dCBjb2xvciBmb3IgZ2FtZSBzY29yZVxuJGdzQmFja2dyb3VuZE1COiB2YXIoLS1nc0JhY2tncm91bmRNQik7IC8vIGJhY2tncm91bmQgb2YgQ29udGFpbmVyc1xuJGdzQm9yZGVyTUI6IHZhcigtLWdzQm9yZGVyTUIpOyAvLyBiYWNrZ3JvdW5kIG9mIE1lbnVzXG4kZ3NUZXh0U2l6ZU1COiB2YXIoLS1nc1RleHRTaXplTUIpOyAvLyBiYWNrZ3JvdW5kIG9mIE1lbnVzXG5cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgSGlnaGxpZ2h0IFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4kZ3NUZXh0Q29sb3JIRzogdmFyKC0tZ3NUZXh0Q29sb3JIRyk7IC8vIFRleHQgY29sb3IgZm9yIGhpZ2hsaWdodFxuJGdzQW5ub3RhdGlvbkNvbG9ySEc6IHZhcigtLWdzQW5ub3RhdGlvbkNvbG9ySEcpOyAvLyBBbm5vdGF0aW9uL0NvbW1lbnQgY29sb3IgZm9yIGhpZ2hsaWdodFxuJGdzQmFja2dyb3VuZEhHOiB2YXIoLS1nc0JhY2tncm91bmRIRyk7IC8vIGJhY2tncm91bmQgZm9yIGhpZ2hsaWdodFxuJGdzQm9yZGVySEc6IHZhcigtLWdzQm9yZGVySEcpOyAvLyBib3JkZXIgZm9yIGhpZ2hsaWdodFxuXG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIEFubm90YXRpb24gVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiRnc1RleHRDb2xvckFOOiB2YXIoLS1nc1RleHRDb2xvckFOKTsgLy8gVGV4dCBjb2xvciBmb3IgaGlnaGxpZ2h0XG4kZ3NCYWNrZ3JvdW5kQU46IHZhcigtLWdzQmFja2dyb3VuZEFOKTsgLy8gYmFja2dyb3VuZCBmb3IgaGlnaGxpZ2h0XG4kZ3NCb3JkZXJBTjogdmFyKC0tZ3NCb3JkZXJBTik7IC8vIGJvcmRlciBmb3IgaGlnaGxpZ2h0XG5cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgVmFyaWF0aW9uIFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4kZ3NUZXh0Q29sb3JWQTogdmFyKC0tZ3NUZXh0Q29sb3JWQSk7IC8vIFRleHQgY29sb3IgZm9yIGhpZ2hsaWdodFxuJGdzQmFja2dyb3VuZFZBOiB2YXIoLS1nc0JhY2tncm91bmRWQSk7IC8vIGJhY2tncm91bmQgZm9yIGhpZ2hsaWdodFxuJGdzQm9yZGVyVkE6IHZhcigtLWdzQm9yZGVyVkEpOyAvLyBib3JkZXIgZm9yIGhpZ2hsaWdodFxuXG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIFBseSBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuJGdzVGV4dENvbG9yUEM6IHZhcigtLWdzVGV4dENvbG9yUEMpOyAvLyBUZXh0IGNvbG9yIGZvciBnYW1lIHNjb3JlIHBseVxuJGdzQmFja2dyb3VuZFBDOiB2YXIoLS1nc0JhY2tncm91bmRQQyk7IC8vIGJhY2tncm91bmQgZm9yIGdhbWUgc2NvcmUgcGx5XG4kZ3NCb3JkZXJQQzogdmFyKC0tZ3NCb3JkZXJQQyk7IC8vIGJvcmRlciBmb3IgZ2FtZSBzY29yZSBwbHlcblxuLyoqKioqKioqKioqKioqKioqKioqIENvbnRyb2wgQ29sb3JzICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiRjc0JhY2tncm91bmQ6IHZhcigtLWNzQmFja2dyb3VuZCk7IC8vIGJhY2tncm91bmQgZm9yIGNvbnRyb2xzXG4kY3NDb2xvcjogdmFyKC0tY3NDb2xvcik7IC8vIGNvbnRyb2xzIGNvbG9yIChmb3JlZ3JvdW5kKVxuXG4vKioqKioqKioqKioqKioqKioqKiogQm9hcmQgQ29sb3JzICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiRib2FyZEJHRGFyazogdmFyKC0tYm9hcmRCR0RhcmspOyAvLyBib2FyZCBkYXJrIHRpbGVcbiRib2FyZEJHTGlnaHQ6IHZhcigtLWJvYXJkQkdMaWdodCk7IC8vIGJvYXJkIGxpZ2h0IHRpbGVcbiRib2FyZExhYmVsTGlnaHQ6IHZhcigtLWJvYXJkTGFiZWxMaWdodCk7IC8vIGJvYXJkIGxpZ2h0IGxhYmVsXG4kYm9hcmRMYWJlbERhcms6IHZhcigtLWJvYXJkTGFiZWxEYXJrKTsgLy8gYm9hcmQgZGFyayBsYWJlbFxuXG4vLyBHZW5lcmFsIHN0dWZmXG4kdGV4dC1jb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XG4kYmctb3V0ZXI6IHZhcigtLWJnLW91dGVyKTtcbiRiZy1pbm5lcjogdmFyKC0tYmctaW5uZXIpO1xuXG4kYmctY29sb3I6ICNmMmYzZjc7XG4kZmctY29sb3I6ICMzODNhNDE7XG5cbiRnbG93LXNoYWRvdzogMCAwIDAuNWVtIHRyYW5zcGFyZW50aXplKCRibHVlLCAwLjMpO1xuXG46cm9vdCB7XG4gIC0tYmctY29sb3I6ICN7JGJnLWNvbG9yfTtcbiAgLS1mZy1jb2xvcjogI3skZmctY29sb3J9O1xuXG4gIC0tcmVkOiAjeyRyZWR9O1xuICAtLWdyZWVuOiAjeyRncmVlbn07XG4gIC0tYmx1ZTogI3skYmx1ZX07XG4gIC0tZGFyay1ibHVlOiAjeyRkYXJrLWJsdWV9O1xuICAtLW1hcm9vbjogI3skbWFyb29ufTtcbiAgLS1wdXJwbGU6ICN7JHB1cnBsZX07XG59XG5cbi8vIDo6LW1vei1mb2N1cy1pbm5lcixcbi8vIDotbW96LWZvY3VzcmluZyB7XG4vLyAgIGJvcmRlcjogMDtcbi8vICAgY29sb3I6IHRyYW5zcGFyZW50O1xuLy8gICB0ZXh0LXNoYWRvdzogMCAwIDAgJGZnLWNvbG9yO1xuLy8gfVxuXG4vLyA6OnNlbGVjdGlvbixcbi8vIDo6LW1vei1zZWxlY3Rpb24ge1xuLy8gICBjb2xvcjogd2hpdGU7XG4vLyAgIGJhY2tncm91bmQ6IGJsYWNrO1xuLy8gfVxuXG4vLyAqIHtcbi8vICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbi8vICAgb3V0bGluZTogbm9uZTtcbi8vICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4vLyAgIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcbi8vICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbi8vICAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lO1xuLy8gICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuLy8gICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4vLyAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbi8vICAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuLy8gICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCkgIWltcG9ydGFudDtcbi8vICAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xuLy8gICBjdXJzb3I6IGRlZmF1bHQ7XG4vLyAgIGxldHRlci1zcGFjaW5nOiAwO1xuLy8gfVxuXG4vLyAuc2VsZWN0YWJsZSxcbi8vIC5zZWxlY3RhYmxlICoge1xuLy8gICBjdXJzb3I6IGF1dG87XG4vLyAgIHVzZXItc2VsZWN0OiB0ZXh0O1xuLy8gICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IHRleHQ7XG4vLyAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IHRleHQ7XG4vLyAgIC1raHRtbC11c2VyLXNlbGVjdDogdGV4dDtcbi8vICAgLW1vei11c2VyLXNlbGVjdDogdGV4dDtcbi8vICAgLW1zLXVzZXItc2VsZWN0OiB0ZXh0O1xuLy8gfVxuXG4vLyBodG1sLFxuLy8gYm9keSB7XG4vLyAgIGJhY2tncm91bmQtY29sb3I6ICRiZy1jb2xvcjtcbi8vICAgY29sb3I6ICRmZy1jb2xvcjtcbi8vICAgbWFyZ2luOiAwO1xuLy8gICBwYWRkaW5nOiAwO1xuLy8gICBmb250LXNpemU6IDEwcHQ7XG4vLyAgIGhlaWdodDogMTAwJTtcbi8vICAgb3ZlcmZsb3c6IGF1dG87XG4vLyB9XG5cbi8vIC53aXRoLXNoYWRvdyB7XG4vLyAgIGJveC1zaGFkb3c6IDZweCA2cHggMTBweCB0cmFuc3BhcmVudGl6ZShibGFjaywgMC45KSwgLTZweCAtNnB4IDEwcHggd2hpdGU7XG4vLyB9XG5cbi8vIC5vdXRzZXQge1xuLy8gICBAZXh0ZW5kIC53aXRoLXNoYWRvdztcblxuLy8gICBib3JkZXItcmFkaXVzOiAxMHB4O1xuLy8gICBiYWNrZ3JvdW5kOiAkYmctY29sb3I7XG4vLyB9XG5cbi8vIC5pbnNldCB7XG4vLyAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4vLyAgIGJveC1zaGFkb3c6IDAgMCB0cmFuc3BhcmVudCwgMCAwIHRyYW5zcGFyZW50LFxuLy8gICAgIGluc2V0IDNweCAzcHggNXB4IHRyYW5zcGFyZW50aXplKGJsYWNrLCAwLjkpLCBpbnNldCAtM3B4IC0zcHggNXB4IHdoaXRlO1xuLy8gICBiYWNrZ3JvdW5kOiBsaWdodGVuKCRiZy1jb2xvciwgMiUpO1xuLy8gfVxuXG4vLyAucGFwZXIge1xuLy8gICBAZXh0ZW5kIC5vdXRzZXQ7XG4vLyAgIHBhZGRpbmc6IDEwcHggMjBweCAyMHB4O1xuLy8gICBtYXJnaW4tdG9wOiAyMHB4O1xuLy8gICBtaW4taGVpZ2h0OiAxMDBweDtcbi8vICAgZm9udC1zaXplOiAxLjJlbTtcbi8vICAgYmFja2dyb3VuZDogJGJnLWNvbG9yO1xuLy8gfVxuXG4vLyBzZWN0aW9uLFxuLy8gYXJ0aWNsZSxcbi8vIC5zZWN0aW9uLFxuLy8gLmFydGljbGUsXG4vLyAucGFwZXIge1xuLy8gICBsaW5lLWhlaWdodDogMmVtO1xuLy8gICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4vLyAgIHdvcmQtYnJlYWs6IG5vcm1hbDtcbi8vICAgbGluZS1oZWlnaHQ6IDJlbTtcbi8vIH1cblxuLy8gaW5wdXRbdHlwZT1cInRleHRcIl0sXG4vLyBpbnB1dFt0eXBlPVwic2VhcmNoXCJdLFxuLy8gaW5wdXRbdHlwZT1cInRlbFwiXSxcbi8vIGlucHV0W3R5cGU9XCJ1cmxcIl0sXG4vLyBpbnB1dFt0eXBlPVwiZW1haWxcIl0sXG4vLyBpbnB1dFt0eXBlPVwicGFzc3dvcmRcIl0sXG4vLyBpbnB1dFt0eXBlPVwiZGF0ZVwiXSxcbi8vIGlucHV0W3R5cGU9XCJtb250aFwiXSxcbi8vIGlucHV0W3R5cGU9XCJ3ZWVrXCJdLFxuLy8gaW5wdXRbdHlwZT1cInRpbWVcIl0sXG4vLyBpbnB1dFt0eXBlPVwibnVtYmVyXCJdLFxuLy8gaW5wdXRbdHlwZT1cImNvbG9yXCJdLFxuLy8gc2VsZWN0LFxuLy8gdGV4dGFyZWEge1xuLy8gICBib3JkZXI6IDA7XG4vLyAgIGJhY2tncm91bmQ6ICRiZy1jb2xvcjtcbi8vICAgY29sb3I6ICRmZy1jb2xvcjtcbi8vICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbi8vICAgcGFkZGluZzogMCAxLjI1ZW07XG4vLyAgIGxpbmUtaGVpZ2h0OiAxLjI1ZW07XG4vLyAgIGhlaWdodDogMy41ZW07XG4vLyAgIG1hcmdpbjogMTBweCAwO1xuLy8gICBmb250LXNpemU6IDEuMXJlbTtcbi8vICAgY3Vyc29yOiB0ZXh0O1xuLy8gICB1c2VyLXNlbGVjdDogdGV4dDtcbi8vICAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiB0ZXh0O1xuLy8gICAtd2Via2l0LXVzZXItc2VsZWN0OiB0ZXh0O1xuLy8gICAta2h0bWwtdXNlci1zZWxlY3Q6IHRleHQ7XG4vLyAgIC1tb3otdXNlci1zZWxlY3Q6IHRleHQ7XG4vLyAgIC1tcy11c2VyLXNlbGVjdDogdGV4dDtcbi8vICAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjJzO1xuXG4vLyAgICY6bm90KHNlbGVjdCkge1xuLy8gICAgIEBleHRlbmQgLmluc2V0O1xuXG4vLyAgICAgJjpmb2N1cyB7XG4vLyAgICAgICBAZXh0ZW5kIC5vdXRzZXQ7XG4vLyAgICAgfVxuLy8gICB9XG4vLyB9XG5cbi8vIHRleHRhcmVhIHtcbi8vICAgaGVpZ2h0OiAzNTBweDtcbi8vICAgcGFkZGluZzogMS4yNWVtO1xuLy8gfVxuXG4vLyBzZWxlY3Qge1xuLy8gICBAZXh0ZW5kIC5vdXRzZXQ7XG5cbi8vICAgY3Vyc29yOiBwb2ludGVyO1xuLy8gICBiYWNrZ3JvdW5kOiB1cmwoZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCMlpYSnphVzl1UFNJeExqRWlJSFpwWlhkQ2IzZzlJakFnTUNBeE9TQXhPU0lnZUcxc2JuTTlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5Mekl3TURBdmMzWm5JajQ4WnlCMGNtRnVjMlp2Y20wOUltMWhkSEpwZUNndU1ETTBJREFnTUNBdU1ETTBJQzAyTGpnZ01TNDNaUzAxS1NJZ2MzUjViR1U5SW1acGJHdzZJemRpTjJVNFl5SStQSEJoZEdnZ1pEMGliVFE0TUNBek5EUXRNakV4TFRJeE1tTXRNVFl0TVRZdE5ERXRNVFl0TlRjZ01DMHhOaUF4TmkweE5pQTBNaUF3SURVM2JESXpPQ0F5TXpsak9DNDBJRGd1TlNBeU1DQXhNaUF6TVNBeE1pQXhNU0F3TGpVMklESXlMVE11TWlBek1TMHhNbXd5TXpndE1qTTVZekUyTFRFMklERTJMVFF5SURBdE5UZHpMVFF4TFRFMkxUVTNJREI2SWlCemRIbHNaVDBpWm1sc2JEb2pOMkkzWlRoaklpOCtQQzluUGp3dmMzWm5QZ289KVxuLy8gICAgIG5vLXJlcGVhdCByaWdodCAxZW0gY2VudGVyO1xuLy8gICBiYWNrZ3JvdW5kLXNpemU6IDEuMmVtO1xuLy8gICBwYWRkaW5nLXJpZ2h0OiAzZW07XG4vLyB9XG5cbi8vIGlucHV0OjpwbGFjZWhvbGRlcixcbi8vIHRleHRhcmVhOjpwbGFjZWhvbGRlciB7XG4vLyAgIG9wYWNpdHk6IDE7XG4vLyAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycztcbi8vICAgY29sb3I6IGluaGVyaXQ7XG4vLyB9XG5cbi8vIGlucHV0OmZvY3VzOjpwbGFjZWhvbGRlcixcbi8vIHRleHRhcmVhOmZvY3VzOjpwbGFjZWhvbGRlciB7XG4vLyAgIG9wYWNpdHk6IDAuMjtcbi8vIH1cblxuLy8gaW5wdXQ6LW1zLWlucHV0LXBsYWNlaG9sZGVyLFxuLy8gdGV4dGFyZWE6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbi8vICAgb3BhY2l0eTogMTtcbi8vICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzO1xuLy8gICBjb2xvcjogaW5oZXJpdDtcbi8vIH1cblxuLy8gaW5wdXQ6Zm9jdXM6LW1zLWlucHV0LXBsYWNlaG9sZGVyLFxuLy8gdGV4dGFyZWE6Zm9jdXM6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbi8vICAgb3BhY2l0eTogMC4yO1xuLy8gfVxuXG4vLyBpbnB1dFt0eXBlPVwic2VhcmNoXCJdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uLFxuLy8gaW5wdXRbdHlwZT1cInNlYXJjaFwiXTo6LXdlYmtpdC1zZWFyY2gtY2FuY2VsLWJ1dHRvbixcbi8vIGlucHV0W3R5cGU9XCJzZWFyY2hcIl06Oi13ZWJraXQtc2VhcmNoLXJlc3VsdHMtYnV0dG9uLFxuLy8gaW5wdXRbdHlwZT1cInNlYXJjaFwiXTo6LXdlYmtpdC1zZWFyY2gtcmVzdWx0cy1kZWNvcmF0aW9uIHtcbi8vICAgZGlzcGxheTogbm9uZTtcbi8vIH1cblxuLy8gYnV0dG9uLFxuLy8gaW5wdXRbdHlwZT1cImJ1dHRvblwiXSxcbi8vIGlucHV0W3R5cGU9XCJzdWJtaXRcIl0sXG4vLyBpbnB1dFt0eXBlPVwicmVzZXRcIl0ge1xuLy8gICBAZXh0ZW5kIC5vdXRzZXQ7XG5cbi8vICAgYm9yZGVyOiAwO1xuLy8gICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbi8vICAgcGFkZGluZzogMTBweCAwO1xuLy8gICB3aWR0aDogOGVtO1xuLy8gICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4vLyAgIGN1cnNvcjogcG9pbnRlcjtcbi8vICAgY29sb3I6IGluaGVyaXQ7XG4vLyAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuLy8gICB0cmFuc2l0aW9uLXByb3BlcnR5OiBiYWNrZ3JvdW5kLWNvbG9yLCBib3gtc2hhZG93O1xuLy8gICB0cmFuc2l0aW9uLWRlbGF5OiAwLjJzO1xuLy8gICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjJzO1xuXG4vLyAgICYuYWN0aXZlLFxuLy8gICAmOmFjdGl2ZSB7XG4vLyAgICAgQGV4dGVuZCAuaW5zZXQ7XG5cbi8vICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwcztcbi8vICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjFzO1xuLy8gICB9XG5cbi8vICAgQGVhY2ggJG5hbWUsICRjb2xvciBpbiAoXCJyZWRcIjogJHJlZCwgXCJncmVlblwiOiAkZ3JlZW4sIFwiYmx1ZVwiOiAkYmx1ZSkge1xuLy8gICAgIEBhdC1yb290IC4jeyRuYW1lfS1idXR0b24sXG4vLyAgICAgICAmLiN7JG5hbWV9LWJ1dHRvbiB7XG4vLyAgICAgICBAZXh0ZW5kIGJ1dHRvbjtcblxuLy8gICAgICAgJF9iZy1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgJGNvbG9yIDMwJSwgbGlnaHRlbigkY29sb3IsIDYlKSA4MCUpO1xuXG4vLyAgICAgICBjb2xvcjogd2hpdGU7XG4vLyAgICAgICBmb250LXdlaWdodDogYm9sZDtcbi8vICAgICAgIHRleHQtc2hhZG93OiAwIDAuMWVtIDAuMWVtIHRyYW5zcGFyZW50aXplKGJsYWNrLCAwLjMpO1xuLy8gICAgICAgYmFja2dyb3VuZDogJF9iZy1pbWFnZTtcbi8vICAgICAgIGJveC1zaGFkb3c6IDAgMCAwLjVlbSB0cmFuc3BhcmVudGl6ZSgkY29sb3IsIDAuMyksIDAgMCB0cmFuc3BhcmVudCxcbi8vICAgICAgICAgaW5zZXQgMCAtNXB4IDAgdHJhbnNwYXJlbnRpemUoYmxhY2ssIDAuOTUpLFxuLy8gICAgICAgICBpbnNldCAwIDJweCAwIHRyYW5zcGFyZW50aXplKHdoaXRlLCAwLjgpO1xuLy8gICAgICAgYm9yZGVyLXJhZGl1czogNnB4IDZweCA4cHggOHB4O1xuLy8gICAgICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYm94LXNoYWRvdywgYm9yZGVyLXJhZGl1cztcblxuLy8gICAgICAgJi5hY3RpdmUsXG4vLyAgICAgICAmOmFjdGl2ZSB7XG4vLyAgICAgICAgIGJhY2tncm91bmQ6ICRfYmctaW1hZ2U7XG4vLyAgICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbi8vICAgICAgICAgYm94LXNoYWRvdzogMCAwIHRyYW5zcGFyZW50LCAwIDAgdHJhbnNwYXJlbnQsXG4vLyAgICAgICAgICAgaW5zZXQgMCAycHggNXB4IDJweCB0cmFuc3BhcmVudGl6ZShibGFjaywgMC44KTtcbi8vICAgICAgIH1cbi8vICAgICB9XG4vLyAgIH1cbi8vIH1cblxuLy8gbGFiZWwge1xuLy8gICAmLFxuLy8gICAmICoge1xuLy8gICAgIGN1cnNvcjogcG9pbnRlcjtcbi8vICAgfVxuXG4vLyAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbi8vICAgcGFkZGluZzogMC41NmVtIDA7XG4vLyB9XG5cbi8vIGEge1xuLy8gICAmLFxuLy8gICAmOmxpbmssXG4vLyAgICY6dmlzaXRlZCxcbi8vICAgJjpob3ZlciAmOmFjdGl2ZSB7XG4vLyAgICAgJixcbi8vICAgICAmICoge1xuLy8gICAgICAgY3Vyc29yOiBwb2ludGVyO1xuLy8gICAgIH1cblxuLy8gICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuLy8gICAgIGNvbG9yOiAkYmx1ZTtcbi8vICAgICBmb250LXdlaWdodDogYm9sZDtcbi8vICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4vLyAgIH1cbi8vIH1cblxuLy8gaDEsXG4vLyBoMixcbi8vIGgzLFxuLy8gaDQsXG4vLyBoNSxcbi8vIGg2IHtcbi8vICAgbGluZS1oZWlnaHQ6IDEuNWVtO1xuLy8gfVxuXG4vLyBoMSB7XG4vLyAgIGZvbnQtc2l6ZTogNGVtO1xuLy8gICBmb250LXdlaWdodDogbGlnaHRlcjtcbi8vICAgbWFyZ2luOiAwLjdlbSAwO1xuLy8gfVxuXG4vLyBoMiB7XG4vLyAgIGZvbnQtc2l6ZTogM2VtO1xuLy8gICBmb250LXdlaWdodDogbGlnaHRlcjtcbi8vICAgbWFyZ2luOiAwLjhlbSAwO1xuLy8gfVxuXG4vLyBoMyB7XG4vLyAgIGZvbnQtc2l6ZTogMi41ZW07XG4vLyAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuLy8gICBtYXJnaW46IDAuOWVtIDA7XG4vLyB9XG5cbi8vIGg0IHtcbi8vICAgZm9udC1zaXplOiAyZW07XG4vLyAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuLy8gICBtYXJnaW46IDFlbSAwO1xuLy8gfVxuXG4vLyBoNSB7XG4vLyAgIG1hcmdpbjogMC41ZW0gMDtcbi8vICAgZm9udC1zaXplOiAxLjJlbTtcbi8vICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbi8vIH1cblxuLy8gaDYge1xuLy8gICBtYXJnaW46IDFlbSAwIDFlbSAxLjRlbTtcbi8vICAgZm9udC1zaXplOiAxZW07XG4vLyAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuLy8gfVxuXG4vLyBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0sXG4vLyBpbnB1dFt0eXBlPVwicmFkaW9cIl0ge1xuLy8gICAkX2JvcmRlci13aWR0aDogMC4xNWVtO1xuLy8gICAkX2JveC1zaGFkb3c6IDJweCAycHggM3B4IHRyYW5zcGFyZW50aXplKGJsYWNrLCAwLjgpLCAtMnB4IC0ycHggM3B4IHdoaXRlLFxuLy8gICAgIGluc2V0IDFweCAxcHggMnB4IHRyYW5zcGFyZW50aXplKGJsYWNrLCAwLjgpLCBpbnNldCAtMXB4IC0xcHggMnB4IHdoaXRlO1xuLy8gICBmb250LXNpemU6IDFlbTtcbi8vICAgY3Vyc29yOiBwb2ludGVyO1xuLy8gICBoZWlnaHQ6IDEuMmVtO1xuLy8gICB3aWR0aDogMS4yZW07XG4vLyAgIG1hcmdpbjogMCAwLjNlbTtcbi8vICAgYm94LXNoYWRvdzogJF9ib3gtc2hhZG93O1xuLy8gICBib3JkZXI6ICRfYm9yZGVyLXdpZHRoIHNvbGlkICRiZy1jb2xvcjtcbi8vICAgdmVydGljYWwtYWxpZ246IHRleHQtYm90dG9tO1xuLy8gICB0cmFuc2l0aW9uLXByb3BlcnR5OiBiYWNrZ3JvdW5kLCBib3gtc2hhZG93O1xuLy8gICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjJzO1xuXG4vLyAgICY6YWN0aXZlIHtcbi8vICAgICBib3gtc2hhZG93OiAkX2JveC1zaGFkb3csIGluc2V0IDAgMC4xZW0gMC4yNWVtIHRyYW5zcGFyZW50aXplKGJsYWNrLCAwLjgpO1xuLy8gICB9XG5cbi8vICAgJjpjaGVja2VkIHtcbi8vICAgICBib3JkZXItd2lkdGg6IDAuMWVtO1xuLy8gICAgIGJvcmRlci1jb2xvcjogZGFya2VuKCRibHVlLCAxMCUpO1xuLy8gICAgIGJhY2tncm91bmQtY29sb3I6ICRibHVlO1xuLy8gICB9XG4vLyB9XG5cbi8vIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSB7XG4vLyAgIGJvcmRlci1yYWRpdXM6IDI1JTtcblxuLy8gICAmOmNoZWNrZWQge1xuLy8gICAgIGJveC1zaGFkb3c6ICRnbG93LXNoYWRvdywgaW5zZXQgMCAtMC4xZW0gMCB0cmFuc3BhcmVudGl6ZShibGFjaywgMC44KSxcbi8vICAgICAgIGluc2V0IDAgMC4xZW0gMC4xZW0gdHJhbnNwYXJlbnRpemUod2hpdGUsIDAuOCk7XG4vLyAgIH1cbi8vIH1cblxuLy8gaW5wdXRbdHlwZT1cInJhZGlvXCJdIHtcbi8vICAgYm9yZGVyLXJhZGl1czogMTAwJTtcblxuLy8gICAmOmNoZWNrZWQge1xuLy8gICAgIGJveC1zaGFkb3c6ICRnbG93LXNoYWRvdztcbi8vICAgICBib3gtc2hhZG93OiAkZ2xvdy1zaGFkb3csIGluc2V0IDAgMC4xMmVtIDAuMWVtIHRyYW5zcGFyZW50aXplKHdoaXRlLCAwLjc1KTtcbi8vICAgICBib3JkZXItYm90dG9tLXdpZHRoOiAwLjE1ZW07XG4vLyAgIH1cbi8vIH1cblxuLy8gLmNoZWNrdGV4dCB7XG4vLyAgIHdpZHRoOiBhdXRvO1xuLy8gICBtYXJnaW46IDAuNWVtO1xuXG4vLyAgIGlucHV0IHtcbi8vICAgICBkaXNwbGF5OiBub25lO1xuXG4vLyAgICAgKyBzcGFuIHtcbi8vICAgICAgIEBleHRlbmQgYnV0dG9uO1xuXG4vLyAgICAgICBmb250LXdlaWdodDogYm9sZDtcbi8vICAgICAgIHBhZGRpbmc6IDFlbTtcbi8vICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDBzO1xuLy8gICAgIH1cblxuLy8gICAgICY6Y2hlY2tlZCArIHNwYW4ge1xuLy8gICAgICAgQGV4dGVuZCAuYmx1ZS1idXR0b247XG5cbi8vICAgICAgIHBhZGRpbmc6IDFlbTtcbi8vICAgICB9XG4vLyAgIH1cbi8vIH1cblxuLy8gLnN3aXRjaCB7XG4vLyAgICRfaGVpZ2h0OiAycmVtO1xuLy8gICAkX3dpZHRoOiA4cmVtO1xuLy8gICAkX2hhbmRsZS13aWR0aDogJF9oZWlnaHQ7XG4vLyAgICRfaGFuZGxlLXRyYW5zbGF0aW9uOiAkX3dpZHRoIC0gJF9oYW5kbGUtd2lkdGg7XG5cbi8vICAgaGVpZ2h0OiAkX2hlaWdodDtcbi8vICAgd2lkdGg6ICRfd2lkdGg7XG4vLyAgIHBhZGRpbmc6IDA7XG4vLyAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuLy8gICBpbnB1dCB7XG4vLyAgICAgZGlzcGxheTogbm9uZTtcblxuLy8gICAgICsgZGl2IHtcbi8vICAgICAgIGhlaWdodDogMTAwJTtcbi8vICAgICAgIHdpZHRoOiAxMDAlO1xuLy8gICAgICAgYm9yZGVyLXJhZGl1czogOTk5cHg7XG4vLyAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbi8vICAgICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGJveC1zaGFkb3csIGJhY2tncm91bmQtY29sb3I7XG4vLyAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjJzO1xuLy8gICAgICAgdHJhbnNpdGlvbi1kZWxheTogMC4ycztcbi8vICAgICAgIGJveC1zaGFkb3c6IDNweCAzcHggMnB4IC0ycHggdHJhbnNwYXJlbnRpemUoYmxhY2ssIDAuOSksXG4vLyAgICAgICAgIGluc2V0IDJweCAycHggMnB4IDFweCB0cmFuc3BhcmVudGl6ZShibGFjaywgMC45KSxcbi8vICAgICAgICAgaW5zZXQgLTJweCAtMnB4IDFweCB3aGl0ZTtcblxuLy8gICAgICAgJjo6YmVmb3JlIHtcbi8vICAgICAgICAgY29udGVudDogXCJcIjtcbi8vICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4vLyAgICAgICAgIGhlaWdodDogY2FsYygjeyRfaGFuZGxlLXdpZHRofSArIDRweCk7XG4vLyAgICAgICAgIHdpZHRoOiBjYWxjKCN7JF9oYW5kbGUtd2lkdGh9ICsgNHB4KTtcbi8vICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbi8vICAgICAgICAgYm9yZGVyOiBzb2xpZCB3aGl0ZSAzcHg7XG4vLyAgICAgICAgIGJhY2tncm91bmQ6ICRibHVlO1xuLy8gICAgICAgICBib3gtc2hhZG93OiAwIDNweCAxMHB4IHRyYW5zcGFyZW50aXplKGJsYWNrLCAwLjgpLFxuLy8gICAgICAgICAgIGluc2V0IDAgLTFweCAzcHggdHJhbnNwYXJlbnRpemUoYmxhY2ssIDAuOSk7XG4vLyAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC02cHgpO1xuLy8gICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycztcbi8vICAgICAgIH1cbi8vICAgICB9XG5cbi8vICAgICAmOmNoZWNrZWQgKyBkaXYge1xuLy8gICAgICAgYmFja2dyb3VuZDogJGJsdWU7XG4vLyAgICAgICBib3gtc2hhZG93OiAkZ2xvdy1zaGFkb3csIGluc2V0IDAgMnB4IDJweCAycHggdHJhbnNwYXJlbnRpemUoYmxhY2ssIDAuNyksXG4vLyAgICAgICAgIGluc2V0IDAgMCB0cmFuc3BhcmVudDtcblxuLy8gICAgICAgJjo6YmVmb3JlIHtcbi8vICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoJF9oYW5kbGUtdHJhbnNsYXRpb24sIC02cHgpO1xuLy8gICAgICAgfVxuLy8gICAgIH1cbi8vICAgfVxuLy8gfVxuXG4vLyBociB7XG4vLyAgIEBleHRlbmQgLmluc2V0O1xuLy8gICB3aWR0aDogNzIlO1xuLy8gICBoZWlnaHQ6IDhweDtcbi8vICAgZmxvYXQ6IHJpZ2h0O1xuLy8gICBib3JkZXI6IDA7XG4vLyB9XG5cbi8vIGNvZGUsXG4vLyBwcmUge1xuLy8gICBwYWRkaW5nOiAwLjVlbSAxZW07XG4vLyAgIGJvcmRlci1yYWRpdXM6IDRweDtcbi8vICAgb3ZlcmZsb3c6IGF1dG87XG4vLyAgIGJveC1zaGFkb3c6IDAgNXB4IDMwcHggMCB0cmFuc3BhcmVudGl6ZShibGFjaywgMC45NSk7XG4vLyB9XG5cbi8vIGNvZGUge1xuLy8gICBiYWNrZ3JvdW5kOiAjZTZlNmU2O1xuLy8gfVxuXG4vLyBwcmUge1xuLy8gICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbi8vICAgbWFyZ2luOiA0ZW0gMDtcbi8vIH1cblxuLy8gY29kZSxcbi8vIHByZSB7XG4vLyAgICYsXG4vLyAgICYgKiB7XG4vLyAgICAgZm9udC1zaXplOiAwLjlyZW07XG4vLyAgICAgbGluZS1oZWlnaHQ6IDJlbTtcbi8vICAgICBjdXJzb3I6IGF1dG87XG4vLyAgICAgdXNlci1zZWxlY3Q6IHRleHQ7XG4vLyAgICAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiB0ZXh0O1xuLy8gICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IHRleHQ7XG4vLyAgICAgLWtodG1sLXVzZXItc2VsZWN0OiB0ZXh0O1xuLy8gICAgIC1tb3otdXNlci1zZWxlY3Q6IHRleHQ7XG4vLyAgICAgLW1zLXVzZXItc2VsZWN0OiB0ZXh0O1xuLy8gICB9XG4vLyB9XG5cbi8vIGJsb2NrcXVvdGUge1xuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbi8vICAgcGFkZGluZzogMC41ZW0gMWVtO1xuLy8gICBib3JkZXItcmFkaXVzOiA0cHg7XG4vLyAgIGJveC1zaGFkb3c6IDAgNXB4IDMwcHggMCB0cmFuc3BhcmVudGl6ZShibGFjaywgMC45NSk7XG4vLyAgIGJvcmRlci1sZWZ0OiA2cHggc29saWQgJGJsdWU7XG4vLyB9XG4iLCJAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ0NhdmVhdCc7XG4gICAgc3JjOiB1cmwoJy4uLy4uL2ZvbnRzL0JvbGQvQ2F2ZWF0LUJvbGQud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXG4gICAgICAgIHVybCgnLi4vLi4vZm9udHMvQm9sZC9DYXZlYXQtQm9sZC53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtZGlzcGxheTogc3dhcDtcbn1cblxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdDYXZlYXQnO1xuICAgIHNyYzogdXJsKCcuLi8uLi9mb250cy9SZWd1bGFyL0NhdmVhdC1SZWd1bGFyLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxuICAgICAgICB1cmwoJy4uLy4uL2ZvbnRzL1JlZ3VsYXIvQ2F2ZWF0LVJlZ3VsYXIud29mZicpIGZvcm1hdCgnd29mZicpO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtZGlzcGxheTogc3dhcDtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnRmlndXJpbmVTeW1ib2xUMSc7XG4gIHNyYzogdXJsKCcuLi8uLi9mb250cy8zcmQgUGFydHkvQ2hlc3NWYXJpYW50cy9GaWd1cmluZVN5bWJvbFQxQm9sZC53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcbiAgICAgIHVybCgnLi4vLi4vZm9udHMvM3JkIFBhcnR5L0NoZXNzVmFyaWFudHMvRmlndXJpbmVTeW1ib2xUMUJvbGQud29mZicpIGZvcm1hdCgnd29mZicpO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ0ZpZ3VyaW5lU3ltYm9sVDEnO1xuICBzcmM6IHVybCgnLi4vLi4vZm9udHMvM3JkIFBhcnR5L0NoZXNzVmFyaWFudHMvRmlndXJpbmVTeW1ib2xUMS53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcbiAgICAgIHVybCgnLi4vLi4vZm9udHMvM3JkIFBhcnR5L0NoZXNzVmFyaWFudHMvRmlndXJpbmVTeW1ib2xUMS53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xufVxuXG4iLCIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiQ2F2ZWF0XCI7XG4gIHNyYzogdXJsKFwiLi4vLi4vZm9udHMvQm9sZC9DYXZlYXQtQm9sZC53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKSwgdXJsKFwiLi4vLi4vZm9udHMvQm9sZC9DYXZlYXQtQm9sZC53b2ZmXCIpIGZvcm1hdChcIndvZmZcIik7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJDYXZlYXRcIjtcbiAgc3JjOiB1cmwoXCIuLi8uLi9mb250cy9SZWd1bGFyL0NhdmVhdC1SZWd1bGFyLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpLCB1cmwoXCIuLi8uLi9mb250cy9SZWd1bGFyL0NhdmVhdC1SZWd1bGFyLndvZmZcIikgZm9ybWF0KFwid29mZlwiKTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiRmlndXJpbmVTeW1ib2xUMVwiO1xuICBzcmM6IHVybChcIi4uLy4uL2ZvbnRzLzNyZCBQYXJ0eS9DaGVzc1ZhcmlhbnRzL0ZpZ3VyaW5lU3ltYm9sVDFCb2xkLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpLCB1cmwoXCIuLi8uLi9mb250cy8zcmQgUGFydHkvQ2hlc3NWYXJpYW50cy9GaWd1cmluZVN5bWJvbFQxQm9sZC53b2ZmXCIpIGZvcm1hdChcIndvZmZcIik7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJGaWd1cmluZVN5bWJvbFQxXCI7XG4gIHNyYzogdXJsKFwiLi4vLi4vZm9udHMvM3JkIFBhcnR5L0NoZXNzVmFyaWFudHMvRmlndXJpbmVTeW1ib2xUMS53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKSwgdXJsKFwiLi4vLi4vZm9udHMvM3JkIFBhcnR5L0NoZXNzVmFyaWFudHMvRmlndXJpbmVTeW1ib2xUMS53b2ZmXCIpIGZvcm1hdChcIndvZmZcIik7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xufVxuLyoqKioqKioqKioqKioqKioqKiogTWVudSAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgQ29udGFpbmVyIFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIENvbnRhaW5lciBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBDb250YWluZXIgVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgSGlnaGxpZ2h0IFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIEFubm90YXRpb24gVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgVmFyaWF0aW9uIFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIFBseSBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKioqIENvbnRyb2wgQ29sb3JzICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqKiBCb2FyZCBDb2xvcnMgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuOnJvb3Qge1xuICAtLWJnLWNvbG9yOiAjZjJmM2Y3O1xuICAtLWZnLWNvbG9yOiAjMzgzYTQxO1xuICAtLXJlZDogI2U0MzAzMDtcbiAgLS1ncmVlbjogIzE5YTE4NztcbiAgLS1ibHVlOiAjMzY3YmYwO1xuICAtLWRhcmstYmx1ZTogIzI2NWFiMTtcbiAgLS1tYXJvb246ICNiODE3NGM7XG4gIC0tcHVycGxlOiAjOGM0MmFiO1xufVxuXG4uZ3NpLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBsaW5lLWhlaWdodDogdmFyKC0tZ3NUZXh0U2l6ZSk7XG4gIG1hcmdpbjogMnB4O1xuICBwYWRkaW5nLWxlZnQ6IDJweDtcbn1cblxuLmdzaS1tb3ZlIHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgY29sb3I6IHZhcigtLWdzVGV4dENvbG9yKTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LWZhbWlseTogdmFyKC0tZ3NGb250RmFtaWx5KTtcbn1cblxuLmdzaS1wbHkge1xuICBjb2xvcjogdmFyKC0tZ3NUZXh0Q29sb3IpO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uZ3NpLWNvbW1lbnQge1xuICBjb2xvcjogdmFyKC0tZ3NUZXh0Q29sb3JBTik7XG4gIG1hcmdpbi1sZWZ0OiA0cHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuLkN1cnJlbnQge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1nc0JhY2tncm91bmRIRyk7XG4gIGNvbG9yOiB2YXIoLS1nc1RleHRDb2xvckhHKTtcbiAgYm9yZGVyOiB2YXIoLS1nc0JvcmRlckhHKTtcbiAgbGluZS1oZWlnaHQ6IHZhcigtLWdzVGV4dFNpemUpO1xufVxuXG4uQ3VycmVudC5nc2ktY29tbWVudCB7XG4gIGNvbG9yOiB2YXIoLS1nc0Fubm90YXRpb25Db2xvckhHKTtcbn1cblxuLkN1cnJlbnQuZ3NpLXBseSB7XG4gIGNvbG9yOiAjMDBkNGZhO1xufVxuXG4uQ3VycmVudC5WYXJpYXRpb24uZ3NpLWNvbnRhaW5lciB7XG4gIGJvcmRlcjogIzAwZDRmYSAycHggZGFzaGVkO1xufVxuXG4uQ3VycmVudC5CcmFuY2hlZC5nc2ktY29udGFpbmVyIHtcbiAgYm9yZGVyOiAjMDBkNGZhIDJweCBkYXNoZWQ7XG59XG5cbi5DdXJyZW50LkJyYW5jaGVkLlZhcmlhdGlvbi5nc2ktY29udGFpbmVyIHtcbiAgYm9yZGVyOiAjMDBkNGZhIDJweCBkYXNoZWQ7XG59XG5cbi5CcmFuY2hlZC5WYXJpYXRpb24uZ3NpLWNvbnRhaW5lciB7XG4gIGJvcmRlcjogMnB4IGxpZ2h0Y29yYWwgZGFzaGVkO1xufVxuXG4uQnJhbmNoZWQuZ3NpLWNvbnRhaW5lciB7XG4gIGJvcmRlcjogMnB4IGxpZ2h0Y29yYWwgZGFzaGVkO1xufVxuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgR3JvdXAgKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4uR3JvdXAuZ3NpLWNvbnRhaW5lciB7XG4gIGNvbG9yOiB2YXIoLS1nc1RleHRDb2xvcik7XG59XG5cbi5Hcm91cC5nc2ktY29udGFpbmVyLWhnIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tZ3NCYWNrZ3JvdW5kSEcpO1xuICBib3JkZXI6IHZhcigtLWdzQm9yZGVySEcpO1xuICBsaW5lLWhlaWdodDogdmFyKC0tZ3NUZXh0U2l6ZSk7XG59XG5cbi5Hcm91cC5nc2ktbW92ZSB7XG4gIHBhZGRpbmctbGVmdDogMnB4O1xuICBsaW5lLWhlaWdodDogdmFyKC0tZ3NUZXh0U2l6ZSk7XG59XG5cbi5Hcm91cC5nc2ktcGx5IHtcbiAgYmFja2dyb3VuZDogdmFyKC0tZ3NCYWNrZ3JvdW5kQU4pO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIG1hcmdpbi1yaWdodDogMnB4O1xuICBib3JkZXI6IHZhcigtLWdzQm9yZGVyQU4pO1xuICBmb250LXNpemU6IHZhcigtLWdzVGV4dFNpemUpO1xuICBsaW5lLWhlaWdodDogdmFyKC0tZ3NUZXh0U2l6ZSk7XG59XG5cbi5Hcm91cC5nc2ktcGx5LWhpZ2hsaWdodCB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWdzQmFja2dyb3VuZEhHKTtcbiAgY29sb3I6IHZhcigtLWdzVGV4dENvbG9ySEcpO1xuICBib3JkZXI6IHZhcigtLWdzQm9yZGVySEcpO1xuICBsaW5lLWhlaWdodDogdmFyKC0tZ3NUZXh0U2l6ZSk7XG59XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIEFubm90YXRpb24gR3JvdXAgKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4uQW5ub3RhdGlvbi5nc2ktY29udGFpbmVyIHtcbiAgY29sb3I6IHZhcigtLWdzVGV4dENvbG9yKTtcbiAgbGluZS1oZWlnaHQ6IHZhcigtLWdzVGV4dFNpemUpO1xufVxuXG4uQW5ub3RhdGlvbi5nc2ktY29udGFpbmVyLWhnIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tZ3NCYWNrZ3JvdW5kSEcpO1xuICBib3JkZXI6IHZhcigtLWdzQm9yZGVySEcpO1xuICBsaW5lLWhlaWdodDogdmFyKC0tZ3NUZXh0U2l6ZSk7XG59XG5cbi5Bbm5vdGF0aW9uLmdzaS1tb3ZlIHtcbiAgcGFkZGluZy1sZWZ0OiAycHg7XG4gIGxpbmUtaGVpZ2h0OiB2YXIoLS1nc1RleHRTaXplKTtcbn1cblxuLkFubm90YXRpb24uZ3NpLXBseSB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWdzQmFja2dyb3VuZEFOKTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBib3JkZXI6IHZhcigtLWdzQm9yZGVyQU4pO1xuICBmb250LXNpemU6IHZhcigtLWdzVGV4dFNpemUpO1xuICBsaW5lLWhlaWdodDogdmFyKC0tZ3NUZXh0U2l6ZSk7XG59XG5cbi5Bbm5vdGF0aW9uLmdzaS1wbHktaGlnaGxpZ2h0IHtcbiAgYmFja2dyb3VuZDogdmFyKC0tZ3NCYWNrZ3JvdW5kSEcpO1xuICBjb2xvcjogdmFyKC0tZ3NUZXh0Q29sb3JIRyk7XG4gIGJvcmRlcjogdmFyKC0tZ3NCb3JkZXJIRyk7XG4gIGxpbmUtaGVpZ2h0OiB2YXIoLS1nc1RleHRTaXplKTtcbn1cblxuLkFubm90YXRpb24uZ3NpLWNvbW1lbnQge1xuICBwYWRkaW5nLWxlZnQ6IDNweDtcbiAgcGFkZGluZy1yaWdodDogMnB4O1xuICBtYXJnaW4tbGVmdDogM3B4O1xuICBtYXJnaW4tcmlnaHQ6IDJweDtcbiAgbGluZS1oZWlnaHQ6IHZhcigtLWdzVGV4dFNpemUpO1xufVxuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIFZhcmlhdGlvbiBHcm91cCAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4uVmFyaWF0aW9uLmdzaS1jb250YWluZXIge1xuICBib3JkZXI6IHdoaXRlIGRhc2hlZCAycHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWdzQmFja2dyb3VuZCk7XG4gIGNvbG9yOiB2YXIoLS1nc1RleHRDb2xvcik7XG4gIHBhZGRpbmc6IDJweDtcbn1cblxuLlZhcmlhdGlvbi5nc2ktbW92ZSB7XG4gIHBhZGRpbmctbGVmdDogMnB4O1xuICBsaW5lLWhlaWdodDogdmFyKC0tZ3NUZXh0U2l6ZSk7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GameScoreItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'game-score-item',
                templateUrl: './game-score-item.component.html',
                styleUrls: ['./game-score-item.component.scss']
            }]
    }], function () { return [{ type: _services_olga_service__WEBPACK_IMPORTED_MODULE_2__["OlgaService"] }, { type: _services_colors_service__WEBPACK_IMPORTED_MODULE_3__["ColorService"] }]; }, { data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], typeName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], ply: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], score: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], gsiPly: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['gsiPly']
        }] }); })();


/***/ }),

/***/ "./src/app/game-score/game-score.ux.ts":
/*!*********************************************!*\
  !*** ./src/app/game-score/game-score.ux.ts ***!
  \*********************************************/
/*! exports provided: ScoreViewType, GamescoreUxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScoreViewType", function() { return ScoreViewType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GamescoreUxComponent", function() { return GamescoreUxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _common_kokopu_engine__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/kokopu-engine */ "./src/app/common/kokopu-engine.ts");
/* harmony import */ var _game_score_item_game_score_item_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game-score-item/game-score-item.component */ "./src/app/game-score/game-score-item/game-score-item.component.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _services_olga_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/olga.service */ "./src/app/services/olga.service.ts");
/* harmony import */ var _services_layout_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/layout.service */ "./src/app/services/layout.service.ts");







const _c0 = ["resizeHandle"];
const _c1 = ["gamescore-container"];
const _c2 = ["pgnData"];
function GamescoreUxComponent_game_score_item_5_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "game-score-item", 8, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GamescoreUxComponent_game_score_item_5_Template_game_score_item_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const i_r5 = ctx.index; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.navigateToNode(i_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", item_r4);
} }
var ScoreViewType;
(function (ScoreViewType) {
    ScoreViewType[ScoreViewType["Table"] = 101] = "Table";
    ScoreViewType[ScoreViewType["Flow"] = 202] = "Flow";
})(ScoreViewType || (ScoreViewType = {}));
;
class GamescoreUxComponent {
    constructor(olga, layout) {
        this.olga = olga;
        this.layout = layout;
        // Settings For Game Score Font
        this.viewType = ScoreViewType.Flow;
        // View Children Handles
        this.resizeHandle = null;
        this.scoreItems = null;
        this.container = null;
        this.pgnData = null; // To Be Deleted
        this.columnCount = 3;
        this.rowHeight = '50px';
        this.maxPlySize = 178;
        this.resizing = false;
        this.scoreWidth = 360;
        this.GameScoreType = _common_kokopu_engine__WEBPACK_IMPORTED_MODULE_1__["GameScoreType"];
        this.ScoreViewType = ScoreViewType;
        this._items = [];
        // Current item data and visual
        this.currentData = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        this.currentItem = null;
        this.currentIndex = -1;
        this.resetCursor();
    }
    ngOnInit() {
        //console.log(this.gameScore);
    }
    ngAfterViewInit() {
        this.layout.resizeElement = document.getElementById('resize-handle-' + this.olga.UUID);
    }
    setGameScoreItems(items) {
        if (items) {
            this._items = items;
            this.updateSelection();
        }
        else {
            this._items = [];
        }
    }
    updateSelection() {
        window.setTimeout(() => { this.selectGameScoreItem(this.currentIndex); }, 75);
    }
    navigateToItem(index) {
    }
    resizeScore() {
        this.olga.toggleAutoPlay();
        if (this.scoreWidth) {
            this.columnCount = Math.floor(this.scoreWidth / this.maxPlySize);
        }
        else {
            this.columnCount = 3;
        }
        this.olga.toggleAutoPlay();
    }
    openItemMenu(event, item) {
        event.preventDefault();
        event.stopPropagation();
        console.log(item);
        if (item.data) {
            //item.setCurrent(!item.data.current);
        }
        switch (item.data.type) { // open different menus
        }
    }
    ignoreEvent(event) {
        event.preventDefault();
        event.stopPropagation();
    }
    setWidth(width) {
        if (width) {
            this.columnCount = Math.floor(width / this.maxPlySize);
        }
    }
    resetResizeHandle(event) {
        this.resizing = false;
        if (this.resizeHandle && event.buttons === 0) {
            document.body.style.cursor = 'pointer';
            this.resizeHandle.nativeElement.style.cursor = 'pointer';
        }
        if (this.resizeHandleEvent) {
            this.resizeHandleEvent(event);
        }
    }
    setGrabCursor(event) {
        this.resizing = true;
        document.body.style.cursor = 'grab';
        if (this.resizeHandle) {
            this.resizeHandle.nativeElement.style.cursor = 'grab';
        }
    }
    resetCursor() {
        document.body.style.cursor = 'pointer';
        if (this.resizeHandle) {
            this.resizeHandle.nativeElement.style.cursor = 'pointer';
        }
    }
    startTouch(event) {
        const touchPoint = event.touches[0];
        if (touchPoint) {
            if (this.layout.resizeElement) {
                this.resizing = true;
            }
        }
    }
    stopTouch(event) {
        this.resizing = false;
    }
    resizeHandleEvent(event) {
        if (this.resizing) {
            this.resizeScore();
        }
    }
    resizeTouchEvent(event) {
        if (this.resizing) {
            this.resizeScore();
        }
    }
    resizeHandleCore(event) {
        event.preventDefault();
        event.stopPropagation();
        //document.body.style.cursor = 'grab';
        if (this.resizeHandle) {
            //this.resizeHandle.nativeElement.style.cursor = 'grab';
        }
        if (event.buttons > 0 && this.resizeHandleEvent) {
            this.resizeHandleEvent(event);
        }
    }
    selectGameScoreItem(index) {
        var _a;
        if (this.currentItem) {
            this.currentItem.setSelected(false);
            this.currentItem = null;
        }
        if (index >= 0) {
            const item = (_a = this.scoreItems) === null || _a === void 0 ? void 0 : _a.toArray()[index];
            if (item && item != this.currentItem) {
                item.setSelected(!item.isSelected());
                this.currentItem = item;
            }
        }
    }
    getPGN() {
        var _a;
        return (_a = this.pgnData) === null || _a === void 0 ? void 0 : _a.nativeElement.value;
    }
    // Navigation
    takeVariation(index) {
        this.navigateToNode(index - 1);
        window.setTimeout(() => {
            if (this.currentItem) {
                const item = this._items[++this.currentIndex];
                const variations = item.move.variations();
                if (variations.length > 0) {
                    // show variation 
                    console.log('Taking first variation');
                    console.log(variations[0]);
                    this.olga.makeVariantMove(0, item.move);
                    this.updateSelection();
                }
            }
        }, 200);
    }
    navigateToNode(index) {
        if (this.currentIndex < index) {
            while (this.currentIndex < index) {
                const next = this._items[++this.currentIndex];
                if (next) {
                    if (this.olga.play(next.move)) {
                        const nodeMove = _common_kokopu_engine__WEBPACK_IMPORTED_MODULE_1__["ChessMove"].fromNode(next.move);
                        if (nodeMove) {
                            this.olga.makeBoardMove(nodeMove);
                        }
                    }
                }
            }
            this.currentIndex = index;
            this.updateSelection();
            return;
        }
        while (this.currentIndex > index) {
            const node = this._items[this.currentIndex];
            let prev = null;
            if (this.currentIndex > 0) {
                prev = this._items[this.currentIndex - 1];
            }
            if (prev && node) {
                if (this.olga.unPlay(node.move, prev.move)) {
                    const nodeMove = _common_kokopu_engine__WEBPACK_IMPORTED_MODULE_1__["ChessMove"].fromNode(node.move);
                    if (nodeMove) {
                        this.olga.reverseBoardMove(nodeMove);
                    }
                }
            }
            --this.currentIndex;
        }
        if (index === -1) {
            this.olga.resetEngine();
            this.olga.redrawBoard();
        }
        this.updateSelection();
    }
    advance() {
        if (!this.isFinalPosition()) {
            const next = this.currentIndex + 1;
            if (next < this._items.length && next >= 0) {
                this.navigateToNode(next);
                return true;
            }
        }
        return false;
    }
    moveToStart() {
        while (this.previous()) { }
    }
    moveToEnd() {
        while (this.advance()) { }
    }
    previous() {
        if (this.currentIndex !== -1) {
            const prev = this.currentIndex - 1;
            if (prev < this._items.length && prev >= -1) {
                this.navigateToNode(prev);
                return true;
            }
        }
        return false;
    }
    isStartingPosition() {
        return this.currentIndex === -1;
    }
    isFinalPosition() {
        return this.currentIndex >= (this._items.length - 1);
    }
    incrementSelection() {
        ++this.currentIndex;
        this.updateSelection();
    }
}
GamescoreUxComponent.ɵfac = function GamescoreUxComponent_Factory(t) { return new (t || GamescoreUxComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_olga_service__WEBPACK_IMPORTED_MODULE_4__["OlgaService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_layout_service__WEBPACK_IMPORTED_MODULE_5__["LayoutService"])); };
GamescoreUxComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GamescoreUxComponent, selectors: [["olga-score"]], viewQuery: function GamescoreUxComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_game_score_item_game_score_item_component__WEBPACK_IMPORTED_MODULE_2__["GameScoreItemComponent"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.resizeHandle = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.container = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.pgnData = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.scoreItems = _t);
    } }, inputs: { viewType: "viewType", scoreWidth: "scoreWidth" }, outputs: { resizing: "resizing", currentData: "currentData", currentItem: "currentItem", currentIndex: "currentIndex" }, decls: 12, vars: 2, consts: [[1, "gamescore-container"], [1, "score-title"], [1, "score-list"], [3, "data", "click", 4, "ngFor", "ngForOf"], ["value", "[Event \"GMA, Wijk aan Zee NED\"]\n[Site \"?\"]\n[Date \"2003.??.??\"]\n[Round \"1\"]\n[White \"Anand,V\"]\n[Black \"Radjabov,T\"]\n[Result \"1/2\"]\n[WhiteElo \"2750\"]\n[BlackElo \"2620\"]\n[ECO \"C12\"]\n[PlyCount \"55\"]\n[Annotator \"Hathaway\"]\n\n1. e4 e6\n{ Im not terribly familiar with the style of Radjabov, so I dont know if this is his usual opening. }\n2. d4 d5 3. Nc3 Nf6 (3...Bb4\n{ The Winawer Variation is probably best, though not as easy to play. }) 4. Bg5\n{ threatens e4-e5xf6 }\n (4. e5\n{ keeps pieces on the board and avoids ...dxe4 }) 4...Bb4 (4...Be7\n{ is more common and aims to trade dark-square bishops to ease Blacks cramp }) (4...dxe4\n{ aims to avoid any cramp by bringing pieces into alignment for trading, though White does get at least one very good piece (Ne4 or Bg5) and an easier time castling queen-side, to stir up king-side threats }\n 5. Nxe4 Be7  (\n{ or Rubinsteins }\n 5...Nbd7) ) 5. e5 h6 6. Bd2 (6. Bh4 g5 7. exf6 gxh4\n{ Black seems to equalize a little easier after this as he can win Pf6 in exchange for Ph4. }) 6...Bxc3 (6...Nfd7 7. Qg4\n{ and White isnt incurring any weaknesses, but is either gaining Bb4 for Nc3 or after ...Bb4-f8 Black is cramped again }\n  (7. Nb5 $5 Bxd2+ 8. Qxd2 a6 9. Na3) ) 7. bxc3 Ne4 8. Qg4\n{ White immediately takes aim at the backward Pg7 & Rh8 and usually Pf7 & Ke8. For the moment Bd2 serves to defend Pc3 and to prevent ...Qd8-g5 (offering a queen trade to end the pressure) . }\n (\n{ While }\n 8. h4\n{ is often useful in the French Defense with this pawn structure, I dont know that its been tried in this opening on this move. }) 8...g6 9. Bd3 (9. h4\n{ could take over for Bd2 in guarding g5 and preparing a later attack by f2-f4, h4-h5 or vice versa. It also would allow Rh1 to develop to build the direct frontal threats to Pf7 & Pg6. }\n 9...c5 10. Bd3 Nxd2 11. Kxd2 Qa5 12. dxc5 Qxc5 13. Ne2 Qxf2 $4 14. Raf1 Qc5 15. Bxg6 fxg6 16. Qxg6+)  (9. Qd1\n{ Fritz7; Odd! }) 9...Nxd2 10. Kxd2 c5 11. Nf3\n{ This has been considered the main line for many years, but I wonder if White can allow ...c5-c4 and not use more pawns to fight through Blacks pawns. }\n (11. dxc5\n{ is probably still wrong because of ...Qg5+ }) (11. h4\n{ still makes sense }) 11...Bd7 (11...c4 $6\n{ The problem with this is that however much it slows White, it also limits Blacks queen-side offensive possibilities. }) (\n{ Prematurely playing }\n 11...cxd4\n{ lets White straighten-out his pawns and Black has made no real progress. }\n 12. cxd4)  (11...Qa5 $5\n{ Fritz7: with the idea of ...cxd4 }) 12. dxc5 Qe7 13. Rab1 Bc6 14. Nd4 Nd7\n{ These last few moves have been quite unusual for a French Defense, but they make sense; Qe7 defends Pf7 while Bc6 defends Pb7 and Nd7 threatens Pc5 & Pe5. }\n15. Rhe1 (15. Nxc6 bxc6 16. Rb7 Qxc5 17. Qf4 g5 18. Qd4 Qa5 19. Rb2 c5 $11\n{ Fritz7 }) 15...Nxc5 16. Re3\n{ another way of getting the rook into position, in front of the king-side pawns, to threaten Blacks king-side pawns }\n16...h5 17. Qg3 O-O-O\n{ After this it would seem Blacks pieces can handle any threats White can generate. However, black might also have ideas of winning. How might he do that? Well, ...Be8, ...Kc8-b8-a8, ...Rd8-c8, ...Nc5-a4 and Pc3 is a target (slow I know) . Another idea is to keep Kd2 from ever escaping to safety by advancing ...h5-h4-h3 to break open the king-side and open the h-file for Blacks rooks. }\n (17...h4 $15\n{ Fritz7 }) (17...Nxd3 $15\n{ Fritz7 }) 18. Ke1 Qc7 (18...h4 19. Qg4 Rh5) 19. h4\n{ Anand aims to keep the king-side perfectly safe to ensure a draw. }\n (19. Qh4\n{ Fritz7 }) 19...Qa5 20. Kf1 (20. Nxc6 bxc6 21. Kf1 Kd7 20. Qf4 Ke8 $11\n{ Fritz7 }) 20...Rd7 (\n{ Premature is }\n 20...Qxa2 21. Ree1 Qa5  (21...Ba4 $11\n{ Fritz7 })  22. Ra1 Qxc3 23. Nxc6 bxc6 24. Ba6+ $18) 21. Qf4\n{ This general activity is perfect. It threatens Pf7, defends Nd4 and in some cases prepares for Qf4-b4 to attack Kc8. }\n (21. Ree1\n{ Fritz7 }) (21. Nxc6 bxc6 22. Ree1\n{ Fritz7 }) 21...Rhd8\n{ Black is probably wondering why he organized his pieces to only defend light squares. Only Qa5 and Nc5 can get to dark squares and that makes Whites task of coordinating much easier. }\n (21...Qxa2\n{ still premature }\n 22. Nxc6 bxc6 23. Qb4 Nb7 24. Ree1)  (21...Qxc3 $4 22. Nxc6 bxc6 23. Ba6+)  (21...Rc7 $14\n{ Fritz7 }) (21...Na4 $14\n{ Fritz7 }) 22. Kg1 (22. Nxc6 bxc6 23. Qb4 Qxb4 24. cxb4 d4 25. Ree1 Na4 $11\n{ Fritz7 }) 22...Nxd3 23. Rxd3 (23. cxd3 Qxc3 24. Rg3 Rc7 $14\n{ Fritz7 }) 23...Qc5 (23...Qxa2 24. Rdd1 Qc4 $11\n{ Fritz7 }) 24. Rb4 a5 $2 (24...Rc7\n{ Mark and Fritz7 agree! }) 25. Rb1 Rc7 26. Qc1 Be8 27. Nb3 (27. Qb2\n{ If White commits too quickly to the b-file then Black might actually create some play against Ph4 and on the c-file. }\n 27...Qe7  (27...a4 $11\n{ Fritz7 })  28. Nf3 Rc4\n{ possibly preparing ...b5 }) 27...Qb6 (27...Qc4 28. Nxa5 Qxh4 $14\n{ Fritz7 }) 28. Nd4\n{ Black created the weakness (Pa5) and cant quite defend it, so Anand forces a draw. }\n1/2-1/2", "type", "text", 1, "input-box", 2, "visibility", "hidden", "display", "none"], ["pgnData", "", "pgnBox", ""], [1, "resize-handle", 3, "id", "touchstart", "touchend", "mouseup", "mousedown", "mouseleave"], ["resizeHandle", ""], [3, "data", "click"], ["scoreItem", ""]], template: function GamescoreUxComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Score");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-content", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, GamescoreUxComponent_game_score_item_5_Template, 2, 1, "game-score-item", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("touchstart", function GamescoreUxComponent_Template_div_touchstart_10_listener($event) { return ctx.startTouch($event); })("touchend", function GamescoreUxComponent_Template_div_touchend_10_listener($event) { return ctx.stopTouch($event); })("mouseup", function GamescoreUxComponent_Template_div_mouseup_10_listener($event) { return ctx.resetResizeHandle($event); })("mousedown", function GamescoreUxComponent_Template_div_mousedown_10_listener($event) { return ctx.setGrabCursor($event); })("mouseleave", function GamescoreUxComponent_Template_div_mouseleave_10_listener() { return ctx.resetCursor(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx._items);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "resize-handle-", ctx.olga.UUID, "");
    } }, styles: ["@font-face {\n  font-family: \"Caveat\";\n  src: url('Caveat-Bold.woff2') format(\"woff2\"), url('Caveat-Bold.woff') format(\"woff\");\n  font-weight: bold;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"Caveat\";\n  src: url('Caveat-Regular.woff2') format(\"woff2\"), url('Caveat-Regular.woff') format(\"woff\");\n  font-weight: 600;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"FigurineSymbolT1\";\n  src: url('FigurineSymbolT1Bold.woff2') format(\"woff2\"), url('FigurineSymbolT1Bold.woff') format(\"woff\");\n  font-weight: bold;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"FigurineSymbolT1\";\n  src: url('FigurineSymbolT1.woff2') format(\"woff2\"), url('FigurineSymbolT1.woff') format(\"woff\");\n  font-weight: 600;\n  font-style: normal;\n  font-display: swap;\n}\n\n\n\n\n\n\n\n\n\n\n[_ngcontent-%COMP%]:root {\n  --bg-color: #f2f3f7;\n  --fg-color: #383a41;\n  --red: #e43030;\n  --green: #19a187;\n  --blue: #367bf0;\n  --dark-blue: #265ab1;\n  --maroon: #b8174c;\n  --purple: #8c42ab;\n}\nmat-divider[_ngcontent-%COMP%] {\n  background-color: white;\n  margin: 2px;\n}\n.mat-grid-tile[_ngcontent-%COMP%] {\n  background: #585858ff;\n  color: white;\n  font-family: \"FigurineSymbolT1\";\n  font-weight: 360;\n  max-width: 164px;\n  font-size: 24px;\n  text-align: auto;\n}\n.score-title[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 28px;\n  position: absolute;\n  top: 1px;\n  left: 6px;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -o-user-select: none;\n  user-select: none;\n}\n.score-list[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 12px;\n  right: 0px;\n  top: 32px;\n  height: calc(99% - 30px);\n  overflow: auto;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -o-user-select: none;\n  user-select: none;\n  background: var(--gsListBackground);\n}\n.gamescore-container[_ngcontent-%COMP%] {\n  background: var(--gsBackground);\n  height: 100%;\n  border: 2px black solid;\n  overflow: hidden;\n  line-height: var(--gsTextSize);\n  word-break: keep-all;\n  vertical-align: bottom;\n}\n.gs-menu[_ngcontent-%COMP%] {\n  position: absolute;\n  background: transparent;\n  top: 10%;\n  left: 10%;\n  width: 80%;\n  height: 80%;\n  max-height: 480px;\n  max-width: 480px;\n}\n.resize-handle[_ngcontent-%COMP%] {\n  position: absolute;\n  clip: true;\n  top: calc(50% - 3em);\n  width: 36px;\n  border-radius: 5px;\n  border: solid grey 3px;\n  height: 6em;\n  background-color: #00000a;\n  cursor: grab;\n}\n.input-box[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 2px;\n  width: 100%;\n  height: 300px;\n  border: solid black 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMuc2NzcyIsInNyYy9hc3NldHMvc2Nzcy9tb2R1bGVzL19mb250cy5zY3NzIiwic3JjL2FwcC9nYW1lLXNjb3JlL2dhbWUtc2NvcmUudXguc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4RUFBQTtBQ0FBO0VBQ0kscUJBQUE7RUFDQSxxRkFBQTtFQUVBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0NKO0FERUE7RUFDSSxxQkFBQTtFQUNBLDJGQUFBO0VBRUEsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDREo7QURJQTtFQUNFLCtCQUFBO0VBQ0EsdUdBQUE7RUFFQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNIRjtBRE1BO0VBQ0UsK0JBQUE7RUFDQSwrRkFBQTtFQUVBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0xGO0FGYUEsK0VBQUE7QUFHQSwrRUFBQTtBQVFBLCtFQUFBO0FBTUEsK0VBQUE7QUFNQSwrRUFBQTtBQU1BLGdGQUFBO0FBS0EsK0VBQUE7QUFLQSx5RUFBQTtBQUtBLHlFQUFBO0FBSUEsdUVBQUE7QUFnQkE7RUFDRSxtQkFBQTtFQUNBLG1CQUFBO0VBRUEsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBRWxFRjtBQTlDQTtFQUNFLHVCQUFBO0VBQ0EsV0FBQTtBQWlERjtBQTdDQTtFQUNFLHFCRkxvQjtFRU1wQixZRkxxQjtFRU1yQiwrQkZSaUI7RUVTakIsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQWdERjtBQTdDQTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLHlCQUFBO0VBRUEsc0JBQUE7RUFFQSxvQkFBQTtFQUNBLGlCQUFBO0FBZ0RGO0FBOUNBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSx3QkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUVBLHNCQUFBO0VBRUEsb0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1DRkdpQjtBRThDbkI7QUEvQ0E7RUFDRSwrQkZEYTtFRUViLFlBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsOEJGRlc7RUVHWCxvQkFBQTtFQUNBLHNCQUFBO0FBa0RGO0FBOUNBO0VBQ0Usa0JBQUE7RUFDQSx1QkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBaURGO0FBN0NBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUFnREY7QUE5Q0E7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FBaURGIiwiZmlsZSI6InNyYy9hcHAvZ2FtZS1zY29yZS9nYW1lLXNjb3JlLnV4LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG5cbkBpbXBvcnQgXCIuL2Fzc2V0cy9zY3NzL21vZHVsZXMvX2ZvbnRzLnNjc3NcIjtcbiRnYW1lc2NvcmUtZmFtaWx5OiBcIkZpZ3VyaW5lU3ltYm9sVDFcIjtcbiRnYW1lc2NvcmUtaGlnaGxpZ2h0OiAjNTg1ODU4ZmY7XG4kZ2FtZXNjb3JlLWZvcmVncm91bmQ6IHdoaXRlO1xuXG4kcmVkOiAjZTQzMDMwO1xuJGdyZWVuOiAjMTlhMTg3O1xuJGxpZ2h0LWJsdWU6ICMwMGZmZmZmZjtcbiRibHVlOiAjMzY3YmYwO1xuJGRhcmstYmx1ZTogIzI2NWFiMTtcbiRtYXJvb246ICNiODE3NGM7XG4kcHVycGxlOiAjOGM0MmFiO1xuXG4vLyBNYWluIE9MR0EgQ29sb3IgRWxlbWVudCBWYXJpYWJsZXNcbiR0ZXh0Q29sb3I6IHZhcigtLXRleHRDb2xvcik7IC8vIE1haW4gVGV4dCBDb2xvclxuJHRleHRDb2xvckF0dGVudGlvbjogdmFyKC0tdGV4dENvbG9yQXR0ZW50aW9uKTsgLy8gQXR0ZW50aW9uIHRleHRcbiR0ZXh0Q29sb3JSZW1vdmU6IHZhcigtLXRleHRDb2xvclJlbW92ZSk7IC8vIFJlbW92ZS9EZWxldGUvQ2xvc2VcbiR0ZXh0Q29sb3JBZGQ6IHZhcigtLXRleHRDb2xvckFkZCk7IC8vIEFkZC9DcmVhdGUvT3BlblxuJHRleHRDb2xvckFjdGl2ZTogdmFyKC0tdGV4dENvbG9yQWN0aXZlKTsgLy8gQWRkL0NyZWF0ZS9PcGVuXG4kYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZCk7IC8vIE1haW4gYmFja2dyb3VuZCBDb2xvclxuJGJnQ29udGFpbmVyOiB2YXIoLS1iZ0NvbnRhaW5lcik7IC8vIGJhY2tncm91bmQgb2YgQ29udGFpbmVyc1xuJGJnTWVudTogdmFyKC0tYmdNZW51KTsgLy8gYmFja2dyb3VuZCBvZiBNZW51c1xuJGJnSXRlbTogdmFyKC0tYmdJdGVtKTsgLy8gYmFja2dyb3VuZCBvZiBJdGVtc1xuXG4vLyBDb250ZXh0IE1lbnVcbiRiZ0NvbnRleHQ6IHZhcigtLWJnQ29udGV4dCk7IC8vIGJhY2tncm91bmQgb2YgQ29udGV4dCBNZW51XG4kdGV4dENvbG9yQ29udGV4dDogdmFyKC0tdGV4dENvbG9yQ29udGV4dCk7IC8vIHRleHQgY29sb3IgQ29udGV4dCBNZW51XG4kYm9yZGVyQ29udGV4dDogdmFyKC0tYm9yZGVyQ29udGV4dCk7IC8vIGJvcmRlciBDb250ZXh0IE1lbnVcbiRvdmVybGF5Q29udGV4dEJhY2tncm91bmQ6IHZhcihcbiAgLS1vdmVybGF5Q29udGV4dEJhY2tncm91bmRcbik7IC8vIENvbnRleHQgTWVudSBPdmVybGF5IGJhY2tncm91bmQgbWFpblxuJG92ZXJsYXlDb250ZXh0QmFja2dyb3VuZEdyYWRpZW50OiB2YXIoXG4gIC0tb3ZlcmxheUNvbnRleHRCYWNrZ3JvdW5kR3JhZGllbnRcbik7IC8vIENvbnRleHQgTWVudSBiYWNrZ3JvdW5kIGdyYWRpZW50XG5cbiRpdGVtOiB2YXIoLS1pdGVtKTtcbiRpdGVtLWNvbnRyYXN0OiB2YXIoLS1pdGVtLWNvbnRyYXN0KTtcbiRpdGVtLWJnOiB2YXIoLS1pdGVtLWJnKTtcblxuLyoqKioqKioqKioqKioqKioqKiogTWVudSAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiRtZUJhY2tncm91bmQ6IHZhcigtLW1lQmFja2dyb3VuZCk7XG5cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgQ29udGFpbmVyIFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4kZ3NUZXh0Q29sb3I6IHZhcigtLWdzVGV4dENvbG9yKTsgLy8gVGV4dCBjb2xvciBmb3IgZ2FtZSBzY29yZVxuJGdzQmFja2dyb3VuZDogdmFyKC0tZ3NCYWNrZ3JvdW5kKTsgLy8gYmFja2dyb3VuZCBvZiBDb250YWluZXJzXG4kZ3NMaXN0QmFja2dyb3VuZDogdmFyKC0tZ3NMaXN0QmFja2dyb3VuZCk7IC8vIGxpc3QgYmFja2dyb3VuZCBvZiBnYW1lIHNjb3JlXG4kZ3NCb3JkZXI6IHZhcigtLWdzQm9yZGVyKTsgLy8gYmFja2dyb3VuZCBvZiBNZW51c1xuJGdzVGV4dFNpemU6IHZhcigtLWdzVGV4dFNpemUpOyAvLyBiYWNrZ3JvdW5kIG9mIE1lbnVzXG4kZ3NGb250RmFtaWx5OiB2YXIoLS1nc0ZvbnRGYW1pbHkpOyAvLyBzY29yZSBmb250XG5cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgQ29udGFpbmVyIFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4kZ3NUZXh0Q29sb3JNVzogdmFyKC0tZ3NUZXh0Q29sb3JNVyk7IC8vIFRleHQgY29sb3IgZm9yIGdhbWUgc2NvcmVcbiRnc0JhY2tncm91bmRNVzogdmFyKC0tZ3NCYWNrZ3JvdW5kTVcpOyAvLyBiYWNrZ3JvdW5kIG9mIENvbnRhaW5lcnNcbiRnc0JvcmRlck1XOiB2YXIoLS1nc0JvcmRlck1XKTsgLy8gYmFja2dyb3VuZCBvZiBNZW51c1xuJGdzVGV4dFNpemVNVzogdmFyKC0tZ3NUZXh0U2l6ZU1XKTsgLy8gYmFja2dyb3VuZCBvZiBNZW51c1xuXG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIENvbnRhaW5lciBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuJGdzVGV4dENvbG9yTUI6IHZhcigtLWdzVGV4dENvbG9yTUIpOyAvLyBUZXh0IGNvbG9yIGZvciBnYW1lIHNjb3JlXG4kZ3NCYWNrZ3JvdW5kTUI6IHZhcigtLWdzQmFja2dyb3VuZE1CKTsgLy8gYmFja2dyb3VuZCBvZiBDb250YWluZXJzXG4kZ3NCb3JkZXJNQjogdmFyKC0tZ3NCb3JkZXJNQik7IC8vIGJhY2tncm91bmQgb2YgTWVudXNcbiRnc1RleHRTaXplTUI6IHZhcigtLWdzVGV4dFNpemVNQik7IC8vIGJhY2tncm91bmQgb2YgTWVudXNcblxuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBIaWdobGlnaHQgVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiRnc1RleHRDb2xvckhHOiB2YXIoLS1nc1RleHRDb2xvckhHKTsgLy8gVGV4dCBjb2xvciBmb3IgaGlnaGxpZ2h0XG4kZ3NBbm5vdGF0aW9uQ29sb3JIRzogdmFyKC0tZ3NBbm5vdGF0aW9uQ29sb3JIRyk7IC8vIEFubm90YXRpb24vQ29tbWVudCBjb2xvciBmb3IgaGlnaGxpZ2h0XG4kZ3NCYWNrZ3JvdW5kSEc6IHZhcigtLWdzQmFja2dyb3VuZEhHKTsgLy8gYmFja2dyb3VuZCBmb3IgaGlnaGxpZ2h0XG4kZ3NCb3JkZXJIRzogdmFyKC0tZ3NCb3JkZXJIRyk7IC8vIGJvcmRlciBmb3IgaGlnaGxpZ2h0XG5cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgQW5ub3RhdGlvbiBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuJGdzVGV4dENvbG9yQU46IHZhcigtLWdzVGV4dENvbG9yQU4pOyAvLyBUZXh0IGNvbG9yIGZvciBoaWdobGlnaHRcbiRnc0JhY2tncm91bmRBTjogdmFyKC0tZ3NCYWNrZ3JvdW5kQU4pOyAvLyBiYWNrZ3JvdW5kIGZvciBoaWdobGlnaHRcbiRnc0JvcmRlckFOOiB2YXIoLS1nc0JvcmRlckFOKTsgLy8gYm9yZGVyIGZvciBoaWdobGlnaHRcblxuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBWYXJpYXRpb24gVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiRnc1RleHRDb2xvclZBOiB2YXIoLS1nc1RleHRDb2xvclZBKTsgLy8gVGV4dCBjb2xvciBmb3IgaGlnaGxpZ2h0XG4kZ3NCYWNrZ3JvdW5kVkE6IHZhcigtLWdzQmFja2dyb3VuZFZBKTsgLy8gYmFja2dyb3VuZCBmb3IgaGlnaGxpZ2h0XG4kZ3NCb3JkZXJWQTogdmFyKC0tZ3NCb3JkZXJWQSk7IC8vIGJvcmRlciBmb3IgaGlnaGxpZ2h0XG5cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgUGx5IFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4kZ3NUZXh0Q29sb3JQQzogdmFyKC0tZ3NUZXh0Q29sb3JQQyk7IC8vIFRleHQgY29sb3IgZm9yIGdhbWUgc2NvcmUgcGx5XG4kZ3NCYWNrZ3JvdW5kUEM6IHZhcigtLWdzQmFja2dyb3VuZFBDKTsgLy8gYmFja2dyb3VuZCBmb3IgZ2FtZSBzY29yZSBwbHlcbiRnc0JvcmRlclBDOiB2YXIoLS1nc0JvcmRlclBDKTsgLy8gYm9yZGVyIGZvciBnYW1lIHNjb3JlIHBseVxuXG4vKioqKioqKioqKioqKioqKioqKiogQ29udHJvbCBDb2xvcnMgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuJGNzQmFja2dyb3VuZDogdmFyKC0tY3NCYWNrZ3JvdW5kKTsgLy8gYmFja2dyb3VuZCBmb3IgY29udHJvbHNcbiRjc0NvbG9yOiB2YXIoLS1jc0NvbG9yKTsgLy8gY29udHJvbHMgY29sb3IgKGZvcmVncm91bmQpXG5cbi8qKioqKioqKioqKioqKioqKioqKiBCb2FyZCBDb2xvcnMgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuJGJvYXJkQkdEYXJrOiB2YXIoLS1ib2FyZEJHRGFyayk7IC8vIGJvYXJkIGRhcmsgdGlsZVxuJGJvYXJkQkdMaWdodDogdmFyKC0tYm9hcmRCR0xpZ2h0KTsgLy8gYm9hcmQgbGlnaHQgdGlsZVxuJGJvYXJkTGFiZWxMaWdodDogdmFyKC0tYm9hcmRMYWJlbExpZ2h0KTsgLy8gYm9hcmQgbGlnaHQgbGFiZWxcbiRib2FyZExhYmVsRGFyazogdmFyKC0tYm9hcmRMYWJlbERhcmspOyAvLyBib2FyZCBkYXJrIGxhYmVsXG5cbi8vIEdlbmVyYWwgc3R1ZmZcbiR0ZXh0LWNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcbiRiZy1vdXRlcjogdmFyKC0tYmctb3V0ZXIpO1xuJGJnLWlubmVyOiB2YXIoLS1iZy1pbm5lcik7XG5cbiRiZy1jb2xvcjogI2YyZjNmNztcbiRmZy1jb2xvcjogIzM4M2E0MTtcblxuJGdsb3ctc2hhZG93OiAwIDAgMC41ZW0gdHJhbnNwYXJlbnRpemUoJGJsdWUsIDAuMyk7XG5cbjpyb290IHtcbiAgLS1iZy1jb2xvcjogI3skYmctY29sb3J9O1xuICAtLWZnLWNvbG9yOiAjeyRmZy1jb2xvcn07XG5cbiAgLS1yZWQ6ICN7JHJlZH07XG4gIC0tZ3JlZW46ICN7JGdyZWVufTtcbiAgLS1ibHVlOiAjeyRibHVlfTtcbiAgLS1kYXJrLWJsdWU6ICN7JGRhcmstYmx1ZX07XG4gIC0tbWFyb29uOiAjeyRtYXJvb259O1xuICAtLXB1cnBsZTogI3skcHVycGxlfTtcbn1cblxuLy8gOjotbW96LWZvY3VzLWlubmVyLFxuLy8gOi1tb3otZm9jdXNyaW5nIHtcbi8vICAgYm9yZGVyOiAwO1xuLy8gICBjb2xvcjogdHJhbnNwYXJlbnQ7XG4vLyAgIHRleHQtc2hhZG93OiAwIDAgMCAkZmctY29sb3I7XG4vLyB9XG5cbi8vIDo6c2VsZWN0aW9uLFxuLy8gOjotbW96LXNlbGVjdGlvbiB7XG4vLyAgIGNvbG9yOiB3aGl0ZTtcbi8vICAgYmFja2dyb3VuZDogYmxhY2s7XG4vLyB9XG5cbi8vICoge1xuLy8gICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuLy8gICBvdXRsaW5lOiBub25lO1xuLy8gICB1c2VyLXNlbGVjdDogbm9uZTtcbi8vICAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xuLy8gICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuLy8gICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7XG4vLyAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4vLyAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbi8vICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuLy8gICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4vLyAgIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKSAhaW1wb3J0YW50O1xuLy8gICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XG4vLyAgIGN1cnNvcjogZGVmYXVsdDtcbi8vICAgbGV0dGVyLXNwYWNpbmc6IDA7XG4vLyB9XG5cbi8vIC5zZWxlY3RhYmxlLFxuLy8gLnNlbGVjdGFibGUgKiB7XG4vLyAgIGN1cnNvcjogYXV0bztcbi8vICAgdXNlci1zZWxlY3Q6IHRleHQ7XG4vLyAgIC13ZWJraXQtdG91Y2gtY2FsbG91dDogdGV4dDtcbi8vICAgLXdlYmtpdC11c2VyLXNlbGVjdDogdGV4dDtcbi8vICAgLWtodG1sLXVzZXItc2VsZWN0OiB0ZXh0O1xuLy8gICAtbW96LXVzZXItc2VsZWN0OiB0ZXh0O1xuLy8gICAtbXMtdXNlci1zZWxlY3Q6IHRleHQ7XG4vLyB9XG5cbi8vIGh0bWwsXG4vLyBib2R5IHtcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogJGJnLWNvbG9yO1xuLy8gICBjb2xvcjogJGZnLWNvbG9yO1xuLy8gICBtYXJnaW46IDA7XG4vLyAgIHBhZGRpbmc6IDA7XG4vLyAgIGZvbnQtc2l6ZTogMTBwdDtcbi8vICAgaGVpZ2h0OiAxMDAlO1xuLy8gICBvdmVyZmxvdzogYXV0bztcbi8vIH1cblxuLy8gLndpdGgtc2hhZG93IHtcbi8vICAgYm94LXNoYWRvdzogNnB4IDZweCAxMHB4IHRyYW5zcGFyZW50aXplKGJsYWNrLCAwLjkpLCAtNnB4IC02cHggMTBweCB3aGl0ZTtcbi8vIH1cblxuLy8gLm91dHNldCB7XG4vLyAgIEBleHRlbmQgLndpdGgtc2hhZG93O1xuXG4vLyAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4vLyAgIGJhY2tncm91bmQ6ICRiZy1jb2xvcjtcbi8vIH1cblxuLy8gLmluc2V0IHtcbi8vICAgYm9yZGVyLXJhZGl1czogMTBweDtcbi8vICAgYm94LXNoYWRvdzogMCAwIHRyYW5zcGFyZW50LCAwIDAgdHJhbnNwYXJlbnQsXG4vLyAgICAgaW5zZXQgM3B4IDNweCA1cHggdHJhbnNwYXJlbnRpemUoYmxhY2ssIDAuOSksIGluc2V0IC0zcHggLTNweCA1cHggd2hpdGU7XG4vLyAgIGJhY2tncm91bmQ6IGxpZ2h0ZW4oJGJnLWNvbG9yLCAyJSk7XG4vLyB9XG5cbi8vIC5wYXBlciB7XG4vLyAgIEBleHRlbmQgLm91dHNldDtcbi8vICAgcGFkZGluZzogMTBweCAyMHB4IDIwcHg7XG4vLyAgIG1hcmdpbi10b3A6IDIwcHg7XG4vLyAgIG1pbi1oZWlnaHQ6IDEwMHB4O1xuLy8gICBmb250LXNpemU6IDEuMmVtO1xuLy8gICBiYWNrZ3JvdW5kOiAkYmctY29sb3I7XG4vLyB9XG5cbi8vIHNlY3Rpb24sXG4vLyBhcnRpY2xlLFxuLy8gLnNlY3Rpb24sXG4vLyAuYXJ0aWNsZSxcbi8vIC5wYXBlciB7XG4vLyAgIGxpbmUtaGVpZ2h0OiAyZW07XG4vLyAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbi8vICAgd29yZC1icmVhazogbm9ybWFsO1xuLy8gICBsaW5lLWhlaWdodDogMmVtO1xuLy8gfVxuXG4vLyBpbnB1dFt0eXBlPVwidGV4dFwiXSxcbi8vIGlucHV0W3R5cGU9XCJzZWFyY2hcIl0sXG4vLyBpbnB1dFt0eXBlPVwidGVsXCJdLFxuLy8gaW5wdXRbdHlwZT1cInVybFwiXSxcbi8vIGlucHV0W3R5cGU9XCJlbWFpbFwiXSxcbi8vIGlucHV0W3R5cGU9XCJwYXNzd29yZFwiXSxcbi8vIGlucHV0W3R5cGU9XCJkYXRlXCJdLFxuLy8gaW5wdXRbdHlwZT1cIm1vbnRoXCJdLFxuLy8gaW5wdXRbdHlwZT1cIndlZWtcIl0sXG4vLyBpbnB1dFt0eXBlPVwidGltZVwiXSxcbi8vIGlucHV0W3R5cGU9XCJudW1iZXJcIl0sXG4vLyBpbnB1dFt0eXBlPVwiY29sb3JcIl0sXG4vLyBzZWxlY3QsXG4vLyB0ZXh0YXJlYSB7XG4vLyAgIGJvcmRlcjogMDtcbi8vICAgYmFja2dyb3VuZDogJGJnLWNvbG9yO1xuLy8gICBjb2xvcjogJGZnLWNvbG9yO1xuLy8gICBmb250LXdlaWdodDogbm9ybWFsO1xuLy8gICBwYWRkaW5nOiAwIDEuMjVlbTtcbi8vICAgbGluZS1oZWlnaHQ6IDEuMjVlbTtcbi8vICAgaGVpZ2h0OiAzLjVlbTtcbi8vICAgbWFyZ2luOiAxMHB4IDA7XG4vLyAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuLy8gICBjdXJzb3I6IHRleHQ7XG4vLyAgIHVzZXItc2VsZWN0OiB0ZXh0O1xuLy8gICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IHRleHQ7XG4vLyAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IHRleHQ7XG4vLyAgIC1raHRtbC11c2VyLXNlbGVjdDogdGV4dDtcbi8vICAgLW1vei11c2VyLXNlbGVjdDogdGV4dDtcbi8vICAgLW1zLXVzZXItc2VsZWN0OiB0ZXh0O1xuLy8gICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuMnM7XG5cbi8vICAgJjpub3Qoc2VsZWN0KSB7XG4vLyAgICAgQGV4dGVuZCAuaW5zZXQ7XG5cbi8vICAgICAmOmZvY3VzIHtcbi8vICAgICAgIEBleHRlbmQgLm91dHNldDtcbi8vICAgICB9XG4vLyAgIH1cbi8vIH1cblxuLy8gdGV4dGFyZWEge1xuLy8gICBoZWlnaHQ6IDM1MHB4O1xuLy8gICBwYWRkaW5nOiAxLjI1ZW07XG4vLyB9XG5cbi8vIHNlbGVjdCB7XG4vLyAgIEBleHRlbmQgLm91dHNldDtcblxuLy8gICBjdXJzb3I6IHBvaW50ZXI7XG4vLyAgIGJhY2tncm91bmQ6IHVybChkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUIyWlhKemFXOXVQU0l4TGpFaUlIWnBaWGRDYjNnOUlqQWdNQ0F4T1NBeE9TSWdlRzFzYm5NOUltaDBkSEE2THk5M2QzY3Vkek11YjNKbkx6SXdNREF2YzNabklqNDhaeUIwY21GdWMyWnZjbTA5SW0xaGRISnBlQ2d1TURNMElEQWdNQ0F1TURNMElDMDJMamdnTVM0M1pTMDFLU0lnYzNSNWJHVTlJbVpwYkd3Nkl6ZGlOMlU0WXlJK1BIQmhkR2dnWkQwaWJUUTRNQ0F6TkRRdE1qRXhMVEl4TW1NdE1UWXRNVFl0TkRFdE1UWXROVGNnTUMweE5pQXhOaTB4TmlBME1pQXdJRFUzYkRJek9DQXlNemxqT0M0MElEZ3VOU0F5TUNBeE1pQXpNU0F4TWlBeE1TQXdMalUySURJeUxUTXVNaUF6TVMweE1td3lNemd0TWpNNVl6RTJMVEUySURFMkxUUXlJREF0TlRkekxUUXhMVEUyTFRVM0lEQjZJaUJ6ZEhsc1pUMGlabWxzYkRvak4ySTNaVGhqSWk4K1BDOW5Qand2YzNablBnbz0pXG4vLyAgICAgbm8tcmVwZWF0IHJpZ2h0IDFlbSBjZW50ZXI7XG4vLyAgIGJhY2tncm91bmQtc2l6ZTogMS4yZW07XG4vLyAgIHBhZGRpbmctcmlnaHQ6IDNlbTtcbi8vIH1cblxuLy8gaW5wdXQ6OnBsYWNlaG9sZGVyLFxuLy8gdGV4dGFyZWE6OnBsYWNlaG9sZGVyIHtcbi8vICAgb3BhY2l0eTogMTtcbi8vICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzO1xuLy8gICBjb2xvcjogaW5oZXJpdDtcbi8vIH1cblxuLy8gaW5wdXQ6Zm9jdXM6OnBsYWNlaG9sZGVyLFxuLy8gdGV4dGFyZWE6Zm9jdXM6OnBsYWNlaG9sZGVyIHtcbi8vICAgb3BhY2l0eTogMC4yO1xuLy8gfVxuXG4vLyBpbnB1dDotbXMtaW5wdXQtcGxhY2Vob2xkZXIsXG4vLyB0ZXh0YXJlYTotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuLy8gICBvcGFjaXR5OiAxO1xuLy8gICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnM7XG4vLyAgIGNvbG9yOiBpbmhlcml0O1xuLy8gfVxuXG4vLyBpbnB1dDpmb2N1czotbXMtaW5wdXQtcGxhY2Vob2xkZXIsXG4vLyB0ZXh0YXJlYTpmb2N1czotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuLy8gICBvcGFjaXR5OiAwLjI7XG4vLyB9XG5cbi8vIGlucHV0W3R5cGU9XCJzZWFyY2hcIl06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24sXG4vLyBpbnB1dFt0eXBlPVwic2VhcmNoXCJdOjotd2Via2l0LXNlYXJjaC1jYW5jZWwtYnV0dG9uLFxuLy8gaW5wdXRbdHlwZT1cInNlYXJjaFwiXTo6LXdlYmtpdC1zZWFyY2gtcmVzdWx0cy1idXR0b24sXG4vLyBpbnB1dFt0eXBlPVwic2VhcmNoXCJdOjotd2Via2l0LXNlYXJjaC1yZXN1bHRzLWRlY29yYXRpb24ge1xuLy8gICBkaXNwbGF5OiBub25lO1xuLy8gfVxuXG4vLyBidXR0b24sXG4vLyBpbnB1dFt0eXBlPVwiYnV0dG9uXCJdLFxuLy8gaW5wdXRbdHlwZT1cInN1Ym1pdFwiXSxcbi8vIGlucHV0W3R5cGU9XCJyZXNldFwiXSB7XG4vLyAgIEBleHRlbmQgLm91dHNldDtcblxuLy8gICBib3JkZXI6IDA7XG4vLyAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuLy8gICBwYWRkaW5nOiAxMHB4IDA7XG4vLyAgIHdpZHRoOiA4ZW07XG4vLyAgIHRleHQtYWxpZ246IGNlbnRlcjtcbi8vICAgY3Vyc29yOiBwb2ludGVyO1xuLy8gICBjb2xvcjogaW5oZXJpdDtcbi8vICAgZm9udC1zaXplOiAxLjFyZW07XG4vLyAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGJhY2tncm91bmQtY29sb3IsIGJveC1zaGFkb3c7XG4vLyAgIHRyYW5zaXRpb24tZGVsYXk6IDAuMnM7XG4vLyAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMnM7XG5cbi8vICAgJi5hY3RpdmUsXG4vLyAgICY6YWN0aXZlIHtcbi8vICAgICBAZXh0ZW5kIC5pbnNldDtcblxuLy8gICAgIHRyYW5zaXRpb24tZGVsYXk6IDBzO1xuLy8gICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMXM7XG4vLyAgIH1cblxuLy8gICBAZWFjaCAkbmFtZSwgJGNvbG9yIGluIChcInJlZFwiOiAkcmVkLCBcImdyZWVuXCI6ICRncmVlbiwgXCJibHVlXCI6ICRibHVlKSB7XG4vLyAgICAgQGF0LXJvb3QgLiN7JG5hbWV9LWJ1dHRvbixcbi8vICAgICAgICYuI3skbmFtZX0tYnV0dG9uIHtcbi8vICAgICAgIEBleHRlbmQgYnV0dG9uO1xuXG4vLyAgICAgICAkX2JnLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAkY29sb3IgMzAlLCBsaWdodGVuKCRjb2xvciwgNiUpIDgwJSk7XG5cbi8vICAgICAgIGNvbG9yOiB3aGl0ZTtcbi8vICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuLy8gICAgICAgdGV4dC1zaGFkb3c6IDAgMC4xZW0gMC4xZW0gdHJhbnNwYXJlbnRpemUoYmxhY2ssIDAuMyk7XG4vLyAgICAgICBiYWNrZ3JvdW5kOiAkX2JnLWltYWdlO1xuLy8gICAgICAgYm94LXNoYWRvdzogMCAwIDAuNWVtIHRyYW5zcGFyZW50aXplKCRjb2xvciwgMC4zKSwgMCAwIHRyYW5zcGFyZW50LFxuLy8gICAgICAgICBpbnNldCAwIC01cHggMCB0cmFuc3BhcmVudGl6ZShibGFjaywgMC45NSksXG4vLyAgICAgICAgIGluc2V0IDAgMnB4IDAgdHJhbnNwYXJlbnRpemUod2hpdGUsIDAuOCk7XG4vLyAgICAgICBib3JkZXItcmFkaXVzOiA2cHggNnB4IDhweCA4cHg7XG4vLyAgICAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBib3gtc2hhZG93LCBib3JkZXItcmFkaXVzO1xuXG4vLyAgICAgICAmLmFjdGl2ZSxcbi8vICAgICAgICY6YWN0aXZlIHtcbi8vICAgICAgICAgYmFja2dyb3VuZDogJF9iZy1pbWFnZTtcbi8vICAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuLy8gICAgICAgICBib3gtc2hhZG93OiAwIDAgdHJhbnNwYXJlbnQsIDAgMCB0cmFuc3BhcmVudCxcbi8vICAgICAgICAgICBpbnNldCAwIDJweCA1cHggMnB4IHRyYW5zcGFyZW50aXplKGJsYWNrLCAwLjgpO1xuLy8gICAgICAgfVxuLy8gICAgIH1cbi8vICAgfVxuLy8gfVxuXG4vLyBsYWJlbCB7XG4vLyAgICYsXG4vLyAgICYgKiB7XG4vLyAgICAgY3Vyc29yOiBwb2ludGVyO1xuLy8gICB9XG5cbi8vICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuLy8gICBwYWRkaW5nOiAwLjU2ZW0gMDtcbi8vIH1cblxuLy8gYSB7XG4vLyAgICYsXG4vLyAgICY6bGluayxcbi8vICAgJjp2aXNpdGVkLFxuLy8gICAmOmhvdmVyICY6YWN0aXZlIHtcbi8vICAgICAmLFxuLy8gICAgICYgKiB7XG4vLyAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4vLyAgICAgfVxuXG4vLyAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4vLyAgICAgY29sb3I6ICRibHVlO1xuLy8gICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuLy8gICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbi8vICAgfVxuLy8gfVxuXG4vLyBoMSxcbi8vIGgyLFxuLy8gaDMsXG4vLyBoNCxcbi8vIGg1LFxuLy8gaDYge1xuLy8gICBsaW5lLWhlaWdodDogMS41ZW07XG4vLyB9XG5cbi8vIGgxIHtcbi8vICAgZm9udC1zaXplOiA0ZW07XG4vLyAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuLy8gICBtYXJnaW46IDAuN2VtIDA7XG4vLyB9XG5cbi8vIGgyIHtcbi8vICAgZm9udC1zaXplOiAzZW07XG4vLyAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuLy8gICBtYXJnaW46IDAuOGVtIDA7XG4vLyB9XG5cbi8vIGgzIHtcbi8vICAgZm9udC1zaXplOiAyLjVlbTtcbi8vICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4vLyAgIG1hcmdpbjogMC45ZW0gMDtcbi8vIH1cblxuLy8gaDQge1xuLy8gICBmb250LXNpemU6IDJlbTtcbi8vICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4vLyAgIG1hcmdpbjogMWVtIDA7XG4vLyB9XG5cbi8vIGg1IHtcbi8vICAgbWFyZ2luOiAwLjVlbSAwO1xuLy8gICBmb250LXNpemU6IDEuMmVtO1xuLy8gICBmb250LXdlaWdodDogbm9ybWFsO1xuLy8gfVxuXG4vLyBoNiB7XG4vLyAgIG1hcmdpbjogMWVtIDAgMWVtIDEuNGVtO1xuLy8gICBmb250LXNpemU6IDFlbTtcbi8vICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4vLyB9XG5cbi8vIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSxcbi8vIGlucHV0W3R5cGU9XCJyYWRpb1wiXSB7XG4vLyAgICRfYm9yZGVyLXdpZHRoOiAwLjE1ZW07XG4vLyAgICRfYm94LXNoYWRvdzogMnB4IDJweCAzcHggdHJhbnNwYXJlbnRpemUoYmxhY2ssIDAuOCksIC0ycHggLTJweCAzcHggd2hpdGUsXG4vLyAgICAgaW5zZXQgMXB4IDFweCAycHggdHJhbnNwYXJlbnRpemUoYmxhY2ssIDAuOCksIGluc2V0IC0xcHggLTFweCAycHggd2hpdGU7XG4vLyAgIGZvbnQtc2l6ZTogMWVtO1xuLy8gICBjdXJzb3I6IHBvaW50ZXI7XG4vLyAgIGhlaWdodDogMS4yZW07XG4vLyAgIHdpZHRoOiAxLjJlbTtcbi8vICAgbWFyZ2luOiAwIDAuM2VtO1xuLy8gICBib3gtc2hhZG93OiAkX2JveC1zaGFkb3c7XG4vLyAgIGJvcmRlcjogJF9ib3JkZXItd2lkdGggc29saWQgJGJnLWNvbG9yO1xuLy8gICB2ZXJ0aWNhbC1hbGlnbjogdGV4dC1ib3R0b207XG4vLyAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGJhY2tncm91bmQsIGJveC1zaGFkb3c7XG4vLyAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMnM7XG5cbi8vICAgJjphY3RpdmUge1xuLy8gICAgIGJveC1zaGFkb3c6ICRfYm94LXNoYWRvdywgaW5zZXQgMCAwLjFlbSAwLjI1ZW0gdHJhbnNwYXJlbnRpemUoYmxhY2ssIDAuOCk7XG4vLyAgIH1cblxuLy8gICAmOmNoZWNrZWQge1xuLy8gICAgIGJvcmRlci13aWR0aDogMC4xZW07XG4vLyAgICAgYm9yZGVyLWNvbG9yOiBkYXJrZW4oJGJsdWUsIDEwJSk7XG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJsdWU7XG4vLyAgIH1cbi8vIH1cblxuLy8gaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdIHtcbi8vICAgYm9yZGVyLXJhZGl1czogMjUlO1xuXG4vLyAgICY6Y2hlY2tlZCB7XG4vLyAgICAgYm94LXNoYWRvdzogJGdsb3ctc2hhZG93LCBpbnNldCAwIC0wLjFlbSAwIHRyYW5zcGFyZW50aXplKGJsYWNrLCAwLjgpLFxuLy8gICAgICAgaW5zZXQgMCAwLjFlbSAwLjFlbSB0cmFuc3BhcmVudGl6ZSh3aGl0ZSwgMC44KTtcbi8vICAgfVxuLy8gfVxuXG4vLyBpbnB1dFt0eXBlPVwicmFkaW9cIl0ge1xuLy8gICBib3JkZXItcmFkaXVzOiAxMDAlO1xuXG4vLyAgICY6Y2hlY2tlZCB7XG4vLyAgICAgYm94LXNoYWRvdzogJGdsb3ctc2hhZG93O1xuLy8gICAgIGJveC1zaGFkb3c6ICRnbG93LXNoYWRvdywgaW5zZXQgMCAwLjEyZW0gMC4xZW0gdHJhbnNwYXJlbnRpemUod2hpdGUsIDAuNzUpO1xuLy8gICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDAuMTVlbTtcbi8vICAgfVxuLy8gfVxuXG4vLyAuY2hlY2t0ZXh0IHtcbi8vICAgd2lkdGg6IGF1dG87XG4vLyAgIG1hcmdpbjogMC41ZW07XG5cbi8vICAgaW5wdXQge1xuLy8gICAgIGRpc3BsYXk6IG5vbmU7XG5cbi8vICAgICArIHNwYW4ge1xuLy8gICAgICAgQGV4dGVuZCBidXR0b247XG5cbi8vICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuLy8gICAgICAgcGFkZGluZzogMWVtO1xuLy8gICAgICAgdHJhbnNpdGlvbi1kZWxheTogMHM7XG4vLyAgICAgfVxuXG4vLyAgICAgJjpjaGVja2VkICsgc3BhbiB7XG4vLyAgICAgICBAZXh0ZW5kIC5ibHVlLWJ1dHRvbjtcblxuLy8gICAgICAgcGFkZGluZzogMWVtO1xuLy8gICAgIH1cbi8vICAgfVxuLy8gfVxuXG4vLyAuc3dpdGNoIHtcbi8vICAgJF9oZWlnaHQ6IDJyZW07XG4vLyAgICRfd2lkdGg6IDhyZW07XG4vLyAgICRfaGFuZGxlLXdpZHRoOiAkX2hlaWdodDtcbi8vICAgJF9oYW5kbGUtdHJhbnNsYXRpb246ICRfd2lkdGggLSAkX2hhbmRsZS13aWR0aDtcblxuLy8gICBoZWlnaHQ6ICRfaGVpZ2h0O1xuLy8gICB3aWR0aDogJF93aWR0aDtcbi8vICAgcGFkZGluZzogMDtcbi8vICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4vLyAgIGlucHV0IHtcbi8vICAgICBkaXNwbGF5OiBub25lO1xuXG4vLyAgICAgKyBkaXYge1xuLy8gICAgICAgaGVpZ2h0OiAxMDAlO1xuLy8gICAgICAgd2lkdGg6IDEwMCU7XG4vLyAgICAgICBib3JkZXItcmFkaXVzOiA5OTlweDtcbi8vICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuLy8gICAgICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYm94LXNoYWRvdywgYmFja2dyb3VuZC1jb2xvcjtcbi8vICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMnM7XG4vLyAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjJzO1xuLy8gICAgICAgYm94LXNoYWRvdzogM3B4IDNweCAycHggLTJweCB0cmFuc3BhcmVudGl6ZShibGFjaywgMC45KSxcbi8vICAgICAgICAgaW5zZXQgMnB4IDJweCAycHggMXB4IHRyYW5zcGFyZW50aXplKGJsYWNrLCAwLjkpLFxuLy8gICAgICAgICBpbnNldCAtMnB4IC0ycHggMXB4IHdoaXRlO1xuXG4vLyAgICAgICAmOjpiZWZvcmUge1xuLy8gICAgICAgICBjb250ZW50OiBcIlwiO1xuLy8gICAgICAgICBkaXNwbGF5OiBibG9jaztcbi8vICAgICAgICAgaGVpZ2h0OiBjYWxjKCN7JF9oYW5kbGUtd2lkdGh9ICsgNHB4KTtcbi8vICAgICAgICAgd2lkdGg6IGNhbGMoI3skX2hhbmRsZS13aWR0aH0gKyA0cHgpO1xuLy8gICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuLy8gICAgICAgICBib3JkZXI6IHNvbGlkIHdoaXRlIDNweDtcbi8vICAgICAgICAgYmFja2dyb3VuZDogJGJsdWU7XG4vLyAgICAgICAgIGJveC1zaGFkb3c6IDAgM3B4IDEwcHggdHJhbnNwYXJlbnRpemUoYmxhY2ssIDAuOCksXG4vLyAgICAgICAgICAgaW5zZXQgMCAtMXB4IDNweCB0cmFuc3BhcmVudGl6ZShibGFjaywgMC45KTtcbi8vICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTZweCk7XG4vLyAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzO1xuLy8gICAgICAgfVxuLy8gICAgIH1cblxuLy8gICAgICY6Y2hlY2tlZCArIGRpdiB7XG4vLyAgICAgICBiYWNrZ3JvdW5kOiAkYmx1ZTtcbi8vICAgICAgIGJveC1zaGFkb3c6ICRnbG93LXNoYWRvdywgaW5zZXQgMCAycHggMnB4IDJweCB0cmFuc3BhcmVudGl6ZShibGFjaywgMC43KSxcbi8vICAgICAgICAgaW5zZXQgMCAwIHRyYW5zcGFyZW50O1xuXG4vLyAgICAgICAmOjpiZWZvcmUge1xuLy8gICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgkX2hhbmRsZS10cmFuc2xhdGlvbiwgLTZweCk7XG4vLyAgICAgICB9XG4vLyAgICAgfVxuLy8gICB9XG4vLyB9XG5cbi8vIGhyIHtcbi8vICAgQGV4dGVuZCAuaW5zZXQ7XG4vLyAgIHdpZHRoOiA3MiU7XG4vLyAgIGhlaWdodDogOHB4O1xuLy8gICBmbG9hdDogcmlnaHQ7XG4vLyAgIGJvcmRlcjogMDtcbi8vIH1cblxuLy8gY29kZSxcbi8vIHByZSB7XG4vLyAgIHBhZGRpbmc6IDAuNWVtIDFlbTtcbi8vICAgYm9yZGVyLXJhZGl1czogNHB4O1xuLy8gICBvdmVyZmxvdzogYXV0bztcbi8vICAgYm94LXNoYWRvdzogMCA1cHggMzBweCAwIHRyYW5zcGFyZW50aXplKGJsYWNrLCAwLjk1KTtcbi8vIH1cblxuLy8gY29kZSB7XG4vLyAgIGJhY2tncm91bmQ6ICNlNmU2ZTY7XG4vLyB9XG5cbi8vIHByZSB7XG4vLyAgIGJhY2tncm91bmQ6IHdoaXRlO1xuLy8gICBtYXJnaW46IDRlbSAwO1xuLy8gfVxuXG4vLyBjb2RlLFxuLy8gcHJlIHtcbi8vICAgJixcbi8vICAgJiAqIHtcbi8vICAgICBmb250LXNpemU6IDAuOXJlbTtcbi8vICAgICBsaW5lLWhlaWdodDogMmVtO1xuLy8gICAgIGN1cnNvcjogYXV0bztcbi8vICAgICB1c2VyLXNlbGVjdDogdGV4dDtcbi8vICAgICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IHRleHQ7XG4vLyAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogdGV4dDtcbi8vICAgICAta2h0bWwtdXNlci1zZWxlY3Q6IHRleHQ7XG4vLyAgICAgLW1vei11c2VyLXNlbGVjdDogdGV4dDtcbi8vICAgICAtbXMtdXNlci1zZWxlY3Q6IHRleHQ7XG4vLyAgIH1cbi8vIH1cblxuLy8gYmxvY2txdW90ZSB7XG4vLyAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuLy8gICBwYWRkaW5nOiAwLjVlbSAxZW07XG4vLyAgIGJvcmRlci1yYWRpdXM6IDRweDtcbi8vICAgYm94LXNoYWRvdzogMCA1cHggMzBweCAwIHRyYW5zcGFyZW50aXplKGJsYWNrLCAwLjk1KTtcbi8vICAgYm9yZGVyLWxlZnQ6IDZweCBzb2xpZCAkYmx1ZTtcbi8vIH1cbiIsIkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnQ2F2ZWF0JztcbiAgICBzcmM6IHVybCgnLi4vLi4vZm9udHMvQm9sZC9DYXZlYXQtQm9sZC53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcbiAgICAgICAgdXJsKCcuLi8uLi9mb250cy9Cb2xkL0NhdmVhdC1Cb2xkLndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC1kaXNwbGF5OiBzd2FwO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ0NhdmVhdCc7XG4gICAgc3JjOiB1cmwoJy4uLy4uL2ZvbnRzL1JlZ3VsYXIvQ2F2ZWF0LVJlZ3VsYXIud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXG4gICAgICAgIHVybCgnLi4vLi4vZm9udHMvUmVndWxhci9DYXZlYXQtUmVndWxhci53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC1kaXNwbGF5OiBzd2FwO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdGaWd1cmluZVN5bWJvbFQxJztcbiAgc3JjOiB1cmwoJy4uLy4uL2ZvbnRzLzNyZCBQYXJ0eS9DaGVzc1ZhcmlhbnRzL0ZpZ3VyaW5lU3ltYm9sVDFCb2xkLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxuICAgICAgdXJsKCcuLi8uLi9mb250cy8zcmQgUGFydHkvQ2hlc3NWYXJpYW50cy9GaWd1cmluZVN5bWJvbFQxQm9sZC53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnRmlndXJpbmVTeW1ib2xUMSc7XG4gIHNyYzogdXJsKCcuLi8uLi9mb250cy8zcmQgUGFydHkvQ2hlc3NWYXJpYW50cy9GaWd1cmluZVN5bWJvbFQxLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxuICAgICAgdXJsKCcuLi8uLi9mb250cy8zcmQgUGFydHkvQ2hlc3NWYXJpYW50cy9GaWd1cmluZVN5bWJvbFQxLndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG59XG5cbiIsIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJDYXZlYXRcIjtcbiAgc3JjOiB1cmwoXCIuLi8uLi9mb250cy9Cb2xkL0NhdmVhdC1Cb2xkLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpLCB1cmwoXCIuLi8uLi9mb250cy9Cb2xkL0NhdmVhdC1Cb2xkLndvZmZcIikgZm9ybWF0KFwid29mZlwiKTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkNhdmVhdFwiO1xuICBzcmM6IHVybChcIi4uLy4uL2ZvbnRzL1JlZ3VsYXIvQ2F2ZWF0LVJlZ3VsYXIud29mZjJcIikgZm9ybWF0KFwid29mZjJcIiksIHVybChcIi4uLy4uL2ZvbnRzL1JlZ3VsYXIvQ2F2ZWF0LVJlZ3VsYXIud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJGaWd1cmluZVN5bWJvbFQxXCI7XG4gIHNyYzogdXJsKFwiLi4vLi4vZm9udHMvM3JkIFBhcnR5L0NoZXNzVmFyaWFudHMvRmlndXJpbmVTeW1ib2xUMUJvbGQud29mZjJcIikgZm9ybWF0KFwid29mZjJcIiksIHVybChcIi4uLy4uL2ZvbnRzLzNyZCBQYXJ0eS9DaGVzc1ZhcmlhbnRzL0ZpZ3VyaW5lU3ltYm9sVDFCb2xkLndvZmZcIikgZm9ybWF0KFwid29mZlwiKTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkZpZ3VyaW5lU3ltYm9sVDFcIjtcbiAgc3JjOiB1cmwoXCIuLi8uLi9mb250cy8zcmQgUGFydHkvQ2hlc3NWYXJpYW50cy9GaWd1cmluZVN5bWJvbFQxLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpLCB1cmwoXCIuLi8uLi9mb250cy8zcmQgUGFydHkvQ2hlc3NWYXJpYW50cy9GaWd1cmluZVN5bWJvbFQxLndvZmZcIikgZm9ybWF0KFwid29mZlwiKTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG59XG4vKioqKioqKioqKioqKioqKioqKiBNZW51ICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBDb250YWluZXIgVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgQ29udGFpbmVyIFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIENvbnRhaW5lciBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBIaWdobGlnaHQgVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgQW5ub3RhdGlvbiBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBWYXJpYXRpb24gVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgUGx5IFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKiogQ29udHJvbCBDb2xvcnMgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKioqIEJvYXJkIENvbG9ycyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG46cm9vdCB7XG4gIC0tYmctY29sb3I6ICNmMmYzZjc7XG4gIC0tZmctY29sb3I6ICMzODNhNDE7XG4gIC0tcmVkOiAjZTQzMDMwO1xuICAtLWdyZWVuOiAjMTlhMTg3O1xuICAtLWJsdWU6ICMzNjdiZjA7XG4gIC0tZGFyay1ibHVlOiAjMjY1YWIxO1xuICAtLW1hcm9vbjogI2I4MTc0YztcbiAgLS1wdXJwbGU6ICM4YzQyYWI7XG59XG5cbm1hdC1kaXZpZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIG1hcmdpbjogMnB4O1xufVxuXG4ubWF0LWdyaWQtdGlsZSB7XG4gIGJhY2tncm91bmQ6ICM1ODU4NThmZjtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LWZhbWlseTogXCJGaWd1cmluZVN5bWJvbFQxXCI7XG4gIGZvbnQtd2VpZ2h0OiAzNjA7XG4gIG1heC13aWR0aDogMTY0cHg7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgdGV4dC1hbGlnbjogYXV0bztcbn1cblxuLnNjb3JlLXRpdGxlIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDI4cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxcHg7XG4gIGxlZnQ6IDZweDtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lO1xuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1vLXVzZXItc2VsZWN0OiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuLnNjb3JlLWxpc3Qge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDEycHg7XG4gIHJpZ2h0OiAwcHg7XG4gIHRvcDogMzJweDtcbiAgaGVpZ2h0OiBjYWxjKDk5JSAtIDMwcHgpO1xuICBvdmVyZmxvdzogYXV0bztcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lO1xuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1vLXVzZXItc2VsZWN0OiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgYmFja2dyb3VuZDogdmFyKC0tZ3NMaXN0QmFja2dyb3VuZCk7XG59XG5cbi5nYW1lc2NvcmUtY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tZ3NCYWNrZ3JvdW5kKTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXI6IDJweCBibGFjayBzb2xpZDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbGluZS1oZWlnaHQ6IHZhcigtLWdzVGV4dFNpemUpO1xuICB3b3JkLWJyZWFrOiBrZWVwLWFsbDtcbiAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcbn1cblxuLmdzLW1lbnUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICB0b3A6IDEwJTtcbiAgbGVmdDogMTAlO1xuICB3aWR0aDogODAlO1xuICBoZWlnaHQ6IDgwJTtcbiAgbWF4LWhlaWdodDogNDgwcHg7XG4gIG1heC13aWR0aDogNDgwcHg7XG59XG5cbi5yZXNpemUtaGFuZGxlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjbGlwOiB0cnVlO1xuICB0b3A6IGNhbGMoNTAlIC0gM2VtKTtcbiAgd2lkdGg6IDM2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyOiBzb2xpZCBncmV5IDNweDtcbiAgaGVpZ2h0OiA2ZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMGE7XG4gIGN1cnNvcjogZ3JhYjtcbn1cblxuLmlucHV0LWJveCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDJweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMzAwcHg7XG4gIGJvcmRlcjogc29saWQgYmxhY2sgNHB4O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GamescoreUxComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'olga-score',
                templateUrl: './game-score.ux.html',
                styleUrls: ['./game-score.ux.scss'],
            }]
    }], function () { return [{ type: _services_olga_service__WEBPACK_IMPORTED_MODULE_4__["OlgaService"] }, { type: _services_layout_service__WEBPACK_IMPORTED_MODULE_5__["LayoutService"] }]; }, { viewType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], resizeHandle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['resizeHandle']
        }], scoreItems: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"],
            args: [_game_score_item_game_score_item_component__WEBPACK_IMPORTED_MODULE_2__["GameScoreItemComponent"]]
        }], container: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['gamescore-container']
        }], pgnData: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['pgnData']
        }], resizing: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], scoreWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], currentData: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], currentItem: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], currentIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/olga-controls/olga-controls.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/olga-controls/olga-controls.component.ts ***!
  \**********************************************************/
/*! exports provided: OlgaControlsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OlgaControlsComponent", function() { return OlgaControlsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_olga_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/olga.service */ "./src/app/services/olga.service.ts");
/* harmony import */ var _services_layout_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/layout.service */ "./src/app/services/layout.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





const _c0 = function (a0) { return { "visibility": a0 }; };
class OlgaControlsComponent {
    constructor(olga, layout) {
        this.olga = olga;
        this.layout = layout;
        this.playing = false;
        this.timeLeft = 0.6;
    }
    ngOnInit() {
    }
    advance(event) {
        event.preventDefault();
        event.stopPropagation();
        this.olga.advance();
    }
    moveToStart(event) {
        event.preventDefault();
        event.stopPropagation();
        this.olga.moveToStart();
    }
    previous(event) {
        event.preventDefault();
        event.stopPropagation();
        this.olga.previous();
    }
    moveToEnd(event) {
        event.preventDefault();
        event.stopPropagation();
        this.olga.moveToEnd();
    }
    toggleAutoPlay() {
        this.olga.toggleAutoPlay();
    }
    setTimer(time) {
        this.timeLeft = time / 1000;
    }
}
OlgaControlsComponent.ɵfac = function OlgaControlsComponent_Factory(t) { return new (t || OlgaControlsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_olga_service__WEBPACK_IMPORTED_MODULE_1__["OlgaService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_layout_service__WEBPACK_IMPORTED_MODULE_2__["LayoutService"])); };
OlgaControlsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OlgaControlsComponent, selectors: [["olga-controls"]], decls: 32, vars: 7, consts: [[1, "quick-actions-container"], [1, "play", 3, "click"], [1, "feather-play"], [0, "xlink", "href", "/assets/images/feather-sprite.svg#pause", 3, "ngStyle"], [0, "xlink", "href", "/assets/images/feather-sprite.svg#play", 3, "ngStyle"], [1, "timer"], [1, "view", 3, "click"], [1, "feather"], [0, "xlink", "href", "/assets/images/feather-sprite.svg#columns"], [1, "settings", 3, "click"], [0, "xlink", "href", "/assets/images/feather-sprite.svg#sliders"], [1, "shrink", 3, "click"], [0, "xlink", "href", "/assets/images/feather-sprite.svg#minus"], [1, "grow", 3, "click"], [0, "xlink", "href", "/assets/images/feather-sprite.svg#plus"], [1, "navigation-container"], [1, "button", "start", 3, "click"], [0, "xlink", "href", "/assets/images/feather-sprite.svg#rewind"], [1, "button", "previous", 3, "click"], [0, "xlink", "href", "/assets/images/feather-sprite.svg#chevron-left"], [1, "button", "next", 3, "click"], [0, "xlink", "href", "/assets/images/feather-sprite.svg#chevron-right"], [1, "button", "end", 3, "click"], [0, "xlink", "href", "/assets/images/feather-sprite.svg#fast-forward"]], template: function OlgaControlsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OlgaControlsComponent_Template_div_click_1_listener() { return ctx.toggleAutoPlay(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "svg", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "use", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "use", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OlgaControlsComponent_Template_div_click_7_listener() { return ctx.olga.toggleGameScoreViewType(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "svg", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "use", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OlgaControlsComponent_Template_div_click_10_listener() { return ctx.layout.openSettings(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "svg", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "use", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OlgaControlsComponent_Template_div_click_13_listener() { return ctx.layout.decreaseBoardSize(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "svg", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "use", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OlgaControlsComponent_Template_div_click_16_listener() { return ctx.layout.increaseBoardSize(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "svg", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "use", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OlgaControlsComponent_Template_div_click_20_listener($event) { return ctx.moveToStart($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "svg", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "use", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OlgaControlsComponent_Template_div_click_23_listener($event) { return ctx.previous($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "svg", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "use", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OlgaControlsComponent_Template_div_click_26_listener($event) { return ctx.advance($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "svg", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "use", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OlgaControlsComponent_Template_div_click_29_listener($event) { return ctx.moveToEnd($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "svg", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "use", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx.playing ? "visible" : "hidden"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, !ctx.playing ? "visible" : "hidden"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.timeLeft);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgStyle"]], styles: ["@font-face {\n  font-family: \"Caveat\";\n  src: url('Caveat-Bold.woff2') format(\"woff2\"), url('Caveat-Bold.woff') format(\"woff\");\n  font-weight: bold;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"Caveat\";\n  src: url('Caveat-Regular.woff2') format(\"woff2\"), url('Caveat-Regular.woff') format(\"woff\");\n  font-weight: 600;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"FigurineSymbolT1\";\n  src: url('FigurineSymbolT1Bold.woff2') format(\"woff2\"), url('FigurineSymbolT1Bold.woff') format(\"woff\");\n  font-weight: bold;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"FigurineSymbolT1\";\n  src: url('FigurineSymbolT1.woff2') format(\"woff2\"), url('FigurineSymbolT1.woff') format(\"woff\");\n  font-weight: 600;\n  font-style: normal;\n  font-display: swap;\n}\n\n\n\n\n\n\n\n\n\n\n[_ngcontent-%COMP%]:root {\n  --bg-color: #f2f3f7;\n  --fg-color: #383a41;\n  --red: #e43030;\n  --green: #19a187;\n  --blue: #367bf0;\n  --dark-blue: #265ab1;\n  --maroon: #b8174c;\n  --purple: #8c42ab;\n}\n.button[_ngcontent-%COMP%] {\n  position: absolute;\n  border: black 2px solid;\n  background: var(--csBackground);\n  text-align: center;\n  border-radius: 2px;\n}\n.quick-actions-container[_ngcontent-%COMP%] {\n  background: var(--csBackground);\n  border: none;\n  border-radius: 2px;\n  position: absolute;\n  height: 48px;\n  width: 100%;\n}\n.navigation-container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 42px;\n  width: 100%;\n  left: 0px;\n  height: 64px;\n}\n.start[_ngcontent-%COMP%] {\n  left: -1px;\n  width: 14%;\n  top: 6px;\n  bottom: 6px;\n}\n.previous[_ngcontent-%COMP%] {\n  left: calc(14% - 2px);\n  width: calc(22% - 2px);\n  top: 6px;\n  bottom: 6px;\n}\n.next[_ngcontent-%COMP%] {\n  width: calc(50% + 3px);\n  left: calc(36% - 5px);\n  top: 6px;\n  bottom: 6px;\n}\n.end[_ngcontent-%COMP%] {\n  width: calc(14% + 2px);\n  right: -1px;\n  top: 6px;\n  bottom: 6px;\n}\n.play[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 34%;\n  left: 4px;\n  top: 4px;\n  bottom: 4px;\n  border: var(--csColor) solid 2px;\n  border-radius: 6px;\n}\n.shrink[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 12%;\n  left: calc(49.5% + 12px);\n  top: 4px;\n  bottom: 4px;\n}\n.settings[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 12%;\n  right: 2px;\n  top: 4px;\n  bottom: 4px;\n}\n.grow[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 12%;\n  left: calc(63.5% + 16px);\n  top: 4px;\n  bottom: 4px;\n}\n.view[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 12%;\n  left: calc(36.5% + 8px);\n  top: 4px;\n  bottom: 4px;\n}\n.feather[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 4%;\n  width: 90%;\n  height: 90%;\n  top: 5%;\n  stroke: var(--csColor);\n  stroke-width: 2;\n  stroke-linecap: round;\n  stroke-linejoin: flat;\n  fill: none;\n}\n.feather-play[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 6px;\n  width: 32px;\n  height: 80%;\n  top: 10%;\n  stroke: var(--csColor);\n  stroke-width: 2;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n  fill: none;\n}\n.timer[_ngcontent-%COMP%] {\n  text-align: center;\n  color: var(--csColor);\n  line-height: 38px;\n  margin-left: 24px;\n  font-size: 18px;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -o-user-select: none;\n  user-select: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMuc2NzcyIsInNyYy9hc3NldHMvc2Nzcy9tb2R1bGVzL19mb250cy5zY3NzIiwic3JjL2FwcC9vbGdhLWNvbnRyb2xzL29sZ2EtY29udHJvbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOEVBQUE7QUNBQTtFQUNJLHFCQUFBO0VBQ0EscUZBQUE7RUFFQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNDSjtBREVBO0VBQ0kscUJBQUE7RUFDQSwyRkFBQTtFQUVBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0RKO0FESUE7RUFDRSwrQkFBQTtFQUNBLHVHQUFBO0VBRUEsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDSEY7QURNQTtFQUNFLCtCQUFBO0VBQ0EsK0ZBQUE7RUFFQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNMRjtBRmFBLCtFQUFBO0FBR0EsK0VBQUE7QUFRQSwrRUFBQTtBQU1BLCtFQUFBO0FBTUEsK0VBQUE7QUFNQSxnRkFBQTtBQUtBLCtFQUFBO0FBS0EseUVBQUE7QUFLQSx5RUFBQTtBQUlBLHVFQUFBO0FBZ0JBO0VBQ0UsbUJBQUE7RUFDQSxtQkFBQTtFQUVBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUVsRUY7QUE5Q0E7RUFDSSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsK0JGaUZXO0VFaEZYLGtCQUFBO0VBQ0Esa0JBQUE7QUFpREo7QUE5Q0E7RUFDSSwrQkYyRVc7RUUxRVgsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQWlESjtBQS9DQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtBQWtESjtBQS9DQTtFQUNJLFVBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7QUFrREo7QUFoREE7RUFDSSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7QUFtREo7QUFqREE7RUFDSSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7QUFvREo7QUFsREE7RUFDSSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtBQXFESjtBQWxEQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLGdDQUFBO0VBQ0Esa0JBQUE7QUFxREo7QUFuREE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSx3QkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0FBc0RKO0FBcERBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0FBdURKO0FBcERBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0Esd0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtBQXVESjtBQWxEQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLHVCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7QUFxREo7QUFsREE7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLE9BQUE7RUFDQSxzQkZaUTtFRWFSLGVBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsVUFBQTtBQXFERjtBQW5EQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUNBLHNCRnhCUTtFRXlCUixlQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLFVBQUE7QUFzREY7QUFwREE7RUFDSSxrQkFBQTtFQUNBLHFCRmhDTTtFRWlDTixpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBRUEsc0JBQUE7RUFFQSxvQkFBQTtFQUNBLGlCQUFBO0FBdURKIiwiZmlsZSI6InNyYy9hcHAvb2xnYS1jb250cm9scy9vbGdhLWNvbnRyb2xzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuXG5AaW1wb3J0IFwiLi9hc3NldHMvc2Nzcy9tb2R1bGVzL19mb250cy5zY3NzXCI7XG4kZ2FtZXNjb3JlLWZhbWlseTogXCJGaWd1cmluZVN5bWJvbFQxXCI7XG4kZ2FtZXNjb3JlLWhpZ2hsaWdodDogIzU4NTg1OGZmO1xuJGdhbWVzY29yZS1mb3JlZ3JvdW5kOiB3aGl0ZTtcblxuJHJlZDogI2U0MzAzMDtcbiRncmVlbjogIzE5YTE4NztcbiRsaWdodC1ibHVlOiAjMDBmZmZmZmY7XG4kYmx1ZTogIzM2N2JmMDtcbiRkYXJrLWJsdWU6ICMyNjVhYjE7XG4kbWFyb29uOiAjYjgxNzRjO1xuJHB1cnBsZTogIzhjNDJhYjtcblxuLy8gTWFpbiBPTEdBIENvbG9yIEVsZW1lbnQgVmFyaWFibGVzXG4kdGV4dENvbG9yOiB2YXIoLS10ZXh0Q29sb3IpOyAvLyBNYWluIFRleHQgQ29sb3JcbiR0ZXh0Q29sb3JBdHRlbnRpb246IHZhcigtLXRleHRDb2xvckF0dGVudGlvbik7IC8vIEF0dGVudGlvbiB0ZXh0XG4kdGV4dENvbG9yUmVtb3ZlOiB2YXIoLS10ZXh0Q29sb3JSZW1vdmUpOyAvLyBSZW1vdmUvRGVsZXRlL0Nsb3NlXG4kdGV4dENvbG9yQWRkOiB2YXIoLS10ZXh0Q29sb3JBZGQpOyAvLyBBZGQvQ3JlYXRlL09wZW5cbiR0ZXh0Q29sb3JBY3RpdmU6IHZhcigtLXRleHRDb2xvckFjdGl2ZSk7IC8vIEFkZC9DcmVhdGUvT3BlblxuJGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQpOyAvLyBNYWluIGJhY2tncm91bmQgQ29sb3JcbiRiZ0NvbnRhaW5lcjogdmFyKC0tYmdDb250YWluZXIpOyAvLyBiYWNrZ3JvdW5kIG9mIENvbnRhaW5lcnNcbiRiZ01lbnU6IHZhcigtLWJnTWVudSk7IC8vIGJhY2tncm91bmQgb2YgTWVudXNcbiRiZ0l0ZW06IHZhcigtLWJnSXRlbSk7IC8vIGJhY2tncm91bmQgb2YgSXRlbXNcblxuLy8gQ29udGV4dCBNZW51XG4kYmdDb250ZXh0OiB2YXIoLS1iZ0NvbnRleHQpOyAvLyBiYWNrZ3JvdW5kIG9mIENvbnRleHQgTWVudVxuJHRleHRDb2xvckNvbnRleHQ6IHZhcigtLXRleHRDb2xvckNvbnRleHQpOyAvLyB0ZXh0IGNvbG9yIENvbnRleHQgTWVudVxuJGJvcmRlckNvbnRleHQ6IHZhcigtLWJvcmRlckNvbnRleHQpOyAvLyBib3JkZXIgQ29udGV4dCBNZW51XG4kb3ZlcmxheUNvbnRleHRCYWNrZ3JvdW5kOiB2YXIoXG4gIC0tb3ZlcmxheUNvbnRleHRCYWNrZ3JvdW5kXG4pOyAvLyBDb250ZXh0IE1lbnUgT3ZlcmxheSBiYWNrZ3JvdW5kIG1haW5cbiRvdmVybGF5Q29udGV4dEJhY2tncm91bmRHcmFkaWVudDogdmFyKFxuICAtLW92ZXJsYXlDb250ZXh0QmFja2dyb3VuZEdyYWRpZW50XG4pOyAvLyBDb250ZXh0IE1lbnUgYmFja2dyb3VuZCBncmFkaWVudFxuXG4kaXRlbTogdmFyKC0taXRlbSk7XG4kaXRlbS1jb250cmFzdDogdmFyKC0taXRlbS1jb250cmFzdCk7XG4kaXRlbS1iZzogdmFyKC0taXRlbS1iZyk7XG5cbi8qKioqKioqKioqKioqKioqKioqIE1lbnUgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4kbWVCYWNrZ3JvdW5kOiB2YXIoLS1tZUJhY2tncm91bmQpO1xuXG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIENvbnRhaW5lciBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuJGdzVGV4dENvbG9yOiB2YXIoLS1nc1RleHRDb2xvcik7IC8vIFRleHQgY29sb3IgZm9yIGdhbWUgc2NvcmVcbiRnc0JhY2tncm91bmQ6IHZhcigtLWdzQmFja2dyb3VuZCk7IC8vIGJhY2tncm91bmQgb2YgQ29udGFpbmVyc1xuJGdzTGlzdEJhY2tncm91bmQ6IHZhcigtLWdzTGlzdEJhY2tncm91bmQpOyAvLyBsaXN0IGJhY2tncm91bmQgb2YgZ2FtZSBzY29yZVxuJGdzQm9yZGVyOiB2YXIoLS1nc0JvcmRlcik7IC8vIGJhY2tncm91bmQgb2YgTWVudXNcbiRnc1RleHRTaXplOiB2YXIoLS1nc1RleHRTaXplKTsgLy8gYmFja2dyb3VuZCBvZiBNZW51c1xuJGdzRm9udEZhbWlseTogdmFyKC0tZ3NGb250RmFtaWx5KTsgLy8gc2NvcmUgZm9udFxuXG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIENvbnRhaW5lciBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuJGdzVGV4dENvbG9yTVc6IHZhcigtLWdzVGV4dENvbG9yTVcpOyAvLyBUZXh0IGNvbG9yIGZvciBnYW1lIHNjb3JlXG4kZ3NCYWNrZ3JvdW5kTVc6IHZhcigtLWdzQmFja2dyb3VuZE1XKTsgLy8gYmFja2dyb3VuZCBvZiBDb250YWluZXJzXG4kZ3NCb3JkZXJNVzogdmFyKC0tZ3NCb3JkZXJNVyk7IC8vIGJhY2tncm91bmQgb2YgTWVudXNcbiRnc1RleHRTaXplTVc6IHZhcigtLWdzVGV4dFNpemVNVyk7IC8vIGJhY2tncm91bmQgb2YgTWVudXNcblxuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBDb250YWluZXIgVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiRnc1RleHRDb2xvck1COiB2YXIoLS1nc1RleHRDb2xvck1CKTsgLy8gVGV4dCBjb2xvciBmb3IgZ2FtZSBzY29yZVxuJGdzQmFja2dyb3VuZE1COiB2YXIoLS1nc0JhY2tncm91bmRNQik7IC8vIGJhY2tncm91bmQgb2YgQ29udGFpbmVyc1xuJGdzQm9yZGVyTUI6IHZhcigtLWdzQm9yZGVyTUIpOyAvLyBiYWNrZ3JvdW5kIG9mIE1lbnVzXG4kZ3NUZXh0U2l6ZU1COiB2YXIoLS1nc1RleHRTaXplTUIpOyAvLyBiYWNrZ3JvdW5kIG9mIE1lbnVzXG5cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgSGlnaGxpZ2h0IFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4kZ3NUZXh0Q29sb3JIRzogdmFyKC0tZ3NUZXh0Q29sb3JIRyk7IC8vIFRleHQgY29sb3IgZm9yIGhpZ2hsaWdodFxuJGdzQW5ub3RhdGlvbkNvbG9ySEc6IHZhcigtLWdzQW5ub3RhdGlvbkNvbG9ySEcpOyAvLyBBbm5vdGF0aW9uL0NvbW1lbnQgY29sb3IgZm9yIGhpZ2hsaWdodFxuJGdzQmFja2dyb3VuZEhHOiB2YXIoLS1nc0JhY2tncm91bmRIRyk7IC8vIGJhY2tncm91bmQgZm9yIGhpZ2hsaWdodFxuJGdzQm9yZGVySEc6IHZhcigtLWdzQm9yZGVySEcpOyAvLyBib3JkZXIgZm9yIGhpZ2hsaWdodFxuXG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIEFubm90YXRpb24gVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiRnc1RleHRDb2xvckFOOiB2YXIoLS1nc1RleHRDb2xvckFOKTsgLy8gVGV4dCBjb2xvciBmb3IgaGlnaGxpZ2h0XG4kZ3NCYWNrZ3JvdW5kQU46IHZhcigtLWdzQmFja2dyb3VuZEFOKTsgLy8gYmFja2dyb3VuZCBmb3IgaGlnaGxpZ2h0XG4kZ3NCb3JkZXJBTjogdmFyKC0tZ3NCb3JkZXJBTik7IC8vIGJvcmRlciBmb3IgaGlnaGxpZ2h0XG5cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgVmFyaWF0aW9uIFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4kZ3NUZXh0Q29sb3JWQTogdmFyKC0tZ3NUZXh0Q29sb3JWQSk7IC8vIFRleHQgY29sb3IgZm9yIGhpZ2hsaWdodFxuJGdzQmFja2dyb3VuZFZBOiB2YXIoLS1nc0JhY2tncm91bmRWQSk7IC8vIGJhY2tncm91bmQgZm9yIGhpZ2hsaWdodFxuJGdzQm9yZGVyVkE6IHZhcigtLWdzQm9yZGVyVkEpOyAvLyBib3JkZXIgZm9yIGhpZ2hsaWdodFxuXG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIFBseSBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuJGdzVGV4dENvbG9yUEM6IHZhcigtLWdzVGV4dENvbG9yUEMpOyAvLyBUZXh0IGNvbG9yIGZvciBnYW1lIHNjb3JlIHBseVxuJGdzQmFja2dyb3VuZFBDOiB2YXIoLS1nc0JhY2tncm91bmRQQyk7IC8vIGJhY2tncm91bmQgZm9yIGdhbWUgc2NvcmUgcGx5XG4kZ3NCb3JkZXJQQzogdmFyKC0tZ3NCb3JkZXJQQyk7IC8vIGJvcmRlciBmb3IgZ2FtZSBzY29yZSBwbHlcblxuLyoqKioqKioqKioqKioqKioqKioqIENvbnRyb2wgQ29sb3JzICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiRjc0JhY2tncm91bmQ6IHZhcigtLWNzQmFja2dyb3VuZCk7IC8vIGJhY2tncm91bmQgZm9yIGNvbnRyb2xzXG4kY3NDb2xvcjogdmFyKC0tY3NDb2xvcik7IC8vIGNvbnRyb2xzIGNvbG9yIChmb3JlZ3JvdW5kKVxuXG4vKioqKioqKioqKioqKioqKioqKiogQm9hcmQgQ29sb3JzICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiRib2FyZEJHRGFyazogdmFyKC0tYm9hcmRCR0RhcmspOyAvLyBib2FyZCBkYXJrIHRpbGVcbiRib2FyZEJHTGlnaHQ6IHZhcigtLWJvYXJkQkdMaWdodCk7IC8vIGJvYXJkIGxpZ2h0IHRpbGVcbiRib2FyZExhYmVsTGlnaHQ6IHZhcigtLWJvYXJkTGFiZWxMaWdodCk7IC8vIGJvYXJkIGxpZ2h0IGxhYmVsXG4kYm9hcmRMYWJlbERhcms6IHZhcigtLWJvYXJkTGFiZWxEYXJrKTsgLy8gYm9hcmQgZGFyayBsYWJlbFxuXG4vLyBHZW5lcmFsIHN0dWZmXG4kdGV4dC1jb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XG4kYmctb3V0ZXI6IHZhcigtLWJnLW91dGVyKTtcbiRiZy1pbm5lcjogdmFyKC0tYmctaW5uZXIpO1xuXG4kYmctY29sb3I6ICNmMmYzZjc7XG4kZmctY29sb3I6ICMzODNhNDE7XG5cbiRnbG93LXNoYWRvdzogMCAwIDAuNWVtIHRyYW5zcGFyZW50aXplKCRibHVlLCAwLjMpO1xuXG46cm9vdCB7XG4gIC0tYmctY29sb3I6ICN7JGJnLWNvbG9yfTtcbiAgLS1mZy1jb2xvcjogI3skZmctY29sb3J9O1xuXG4gIC0tcmVkOiAjeyRyZWR9O1xuICAtLWdyZWVuOiAjeyRncmVlbn07XG4gIC0tYmx1ZTogI3skYmx1ZX07XG4gIC0tZGFyay1ibHVlOiAjeyRkYXJrLWJsdWV9O1xuICAtLW1hcm9vbjogI3skbWFyb29ufTtcbiAgLS1wdXJwbGU6ICN7JHB1cnBsZX07XG59XG5cbi8vIDo6LW1vei1mb2N1cy1pbm5lcixcbi8vIDotbW96LWZvY3VzcmluZyB7XG4vLyAgIGJvcmRlcjogMDtcbi8vICAgY29sb3I6IHRyYW5zcGFyZW50O1xuLy8gICB0ZXh0LXNoYWRvdzogMCAwIDAgJGZnLWNvbG9yO1xuLy8gfVxuXG4vLyA6OnNlbGVjdGlvbixcbi8vIDo6LW1vei1zZWxlY3Rpb24ge1xuLy8gICBjb2xvcjogd2hpdGU7XG4vLyAgIGJhY2tncm91bmQ6IGJsYWNrO1xuLy8gfVxuXG4vLyAqIHtcbi8vICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbi8vICAgb3V0bGluZTogbm9uZTtcbi8vICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4vLyAgIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcbi8vICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbi8vICAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lO1xuLy8gICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuLy8gICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4vLyAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbi8vICAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuLy8gICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCkgIWltcG9ydGFudDtcbi8vICAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xuLy8gICBjdXJzb3I6IGRlZmF1bHQ7XG4vLyAgIGxldHRlci1zcGFjaW5nOiAwO1xuLy8gfVxuXG4vLyAuc2VsZWN0YWJsZSxcbi8vIC5zZWxlY3RhYmxlICoge1xuLy8gICBjdXJzb3I6IGF1dG87XG4vLyAgIHVzZXItc2VsZWN0OiB0ZXh0O1xuLy8gICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IHRleHQ7XG4vLyAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IHRleHQ7XG4vLyAgIC1raHRtbC11c2VyLXNlbGVjdDogdGV4dDtcbi8vICAgLW1vei11c2VyLXNlbGVjdDogdGV4dDtcbi8vICAgLW1zLXVzZXItc2VsZWN0OiB0ZXh0O1xuLy8gfVxuXG4vLyBodG1sLFxuLy8gYm9keSB7XG4vLyAgIGJhY2tncm91bmQtY29sb3I6ICRiZy1jb2xvcjtcbi8vICAgY29sb3I6ICRmZy1jb2xvcjtcbi8vICAgbWFyZ2luOiAwO1xuLy8gICBwYWRkaW5nOiAwO1xuLy8gICBmb250LXNpemU6IDEwcHQ7XG4vLyAgIGhlaWdodDogMTAwJTtcbi8vICAgb3ZlcmZsb3c6IGF1dG87XG4vLyB9XG5cbi8vIC53aXRoLXNoYWRvdyB7XG4vLyAgIGJveC1zaGFkb3c6IDZweCA2cHggMTBweCB0cmFuc3BhcmVudGl6ZShibGFjaywgMC45KSwgLTZweCAtNnB4IDEwcHggd2hpdGU7XG4vLyB9XG5cbi8vIC5vdXRzZXQge1xuLy8gICBAZXh0ZW5kIC53aXRoLXNoYWRvdztcblxuLy8gICBib3JkZXItcmFkaXVzOiAxMHB4O1xuLy8gICBiYWNrZ3JvdW5kOiAkYmctY29sb3I7XG4vLyB9XG5cbi8vIC5pbnNldCB7XG4vLyAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4vLyAgIGJveC1zaGFkb3c6IDAgMCB0cmFuc3BhcmVudCwgMCAwIHRyYW5zcGFyZW50LFxuLy8gICAgIGluc2V0IDNweCAzcHggNXB4IHRyYW5zcGFyZW50aXplKGJsYWNrLCAwLjkpLCBpbnNldCAtM3B4IC0zcHggNXB4IHdoaXRlO1xuLy8gICBiYWNrZ3JvdW5kOiBsaWdodGVuKCRiZy1jb2xvciwgMiUpO1xuLy8gfVxuXG4vLyAucGFwZXIge1xuLy8gICBAZXh0ZW5kIC5vdXRzZXQ7XG4vLyAgIHBhZGRpbmc6IDEwcHggMjBweCAyMHB4O1xuLy8gICBtYXJnaW4tdG9wOiAyMHB4O1xuLy8gICBtaW4taGVpZ2h0OiAxMDBweDtcbi8vICAgZm9udC1zaXplOiAxLjJlbTtcbi8vICAgYmFja2dyb3VuZDogJGJnLWNvbG9yO1xuLy8gfVxuXG4vLyBzZWN0aW9uLFxuLy8gYXJ0aWNsZSxcbi8vIC5zZWN0aW9uLFxuLy8gLmFydGljbGUsXG4vLyAucGFwZXIge1xuLy8gICBsaW5lLWhlaWdodDogMmVtO1xuLy8gICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4vLyAgIHdvcmQtYnJlYWs6IG5vcm1hbDtcbi8vICAgbGluZS1oZWlnaHQ6IDJlbTtcbi8vIH1cblxuLy8gaW5wdXRbdHlwZT1cInRleHRcIl0sXG4vLyBpbnB1dFt0eXBlPVwic2VhcmNoXCJdLFxuLy8gaW5wdXRbdHlwZT1cInRlbFwiXSxcbi8vIGlucHV0W3R5cGU9XCJ1cmxcIl0sXG4vLyBpbnB1dFt0eXBlPVwiZW1haWxcIl0sXG4vLyBpbnB1dFt0eXBlPVwicGFzc3dvcmRcIl0sXG4vLyBpbnB1dFt0eXBlPVwiZGF0ZVwiXSxcbi8vIGlucHV0W3R5cGU9XCJtb250aFwiXSxcbi8vIGlucHV0W3R5cGU9XCJ3ZWVrXCJdLFxuLy8gaW5wdXRbdHlwZT1cInRpbWVcIl0sXG4vLyBpbnB1dFt0eXBlPVwibnVtYmVyXCJdLFxuLy8gaW5wdXRbdHlwZT1cImNvbG9yXCJdLFxuLy8gc2VsZWN0LFxuLy8gdGV4dGFyZWEge1xuLy8gICBib3JkZXI6IDA7XG4vLyAgIGJhY2tncm91bmQ6ICRiZy1jb2xvcjtcbi8vICAgY29sb3I6ICRmZy1jb2xvcjtcbi8vICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbi8vICAgcGFkZGluZzogMCAxLjI1ZW07XG4vLyAgIGxpbmUtaGVpZ2h0OiAxLjI1ZW07XG4vLyAgIGhlaWdodDogMy41ZW07XG4vLyAgIG1hcmdpbjogMTBweCAwO1xuLy8gICBmb250LXNpemU6IDEuMXJlbTtcbi8vICAgY3Vyc29yOiB0ZXh0O1xuLy8gICB1c2VyLXNlbGVjdDogdGV4dDtcbi8vICAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiB0ZXh0O1xuLy8gICAtd2Via2l0LXVzZXItc2VsZWN0OiB0ZXh0O1xuLy8gICAta2h0bWwtdXNlci1zZWxlY3Q6IHRleHQ7XG4vLyAgIC1tb3otdXNlci1zZWxlY3Q6IHRleHQ7XG4vLyAgIC1tcy11c2VyLXNlbGVjdDogdGV4dDtcbi8vICAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjJzO1xuXG4vLyAgICY6bm90KHNlbGVjdCkge1xuLy8gICAgIEBleHRlbmQgLmluc2V0O1xuXG4vLyAgICAgJjpmb2N1cyB7XG4vLyAgICAgICBAZXh0ZW5kIC5vdXRzZXQ7XG4vLyAgICAgfVxuLy8gICB9XG4vLyB9XG5cbi8vIHRleHRhcmVhIHtcbi8vICAgaGVpZ2h0OiAzNTBweDtcbi8vICAgcGFkZGluZzogMS4yNWVtO1xuLy8gfVxuXG4vLyBzZWxlY3Qge1xuLy8gICBAZXh0ZW5kIC5vdXRzZXQ7XG5cbi8vICAgY3Vyc29yOiBwb2ludGVyO1xuLy8gICBiYWNrZ3JvdW5kOiB1cmwoZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCMlpYSnphVzl1UFNJeExqRWlJSFpwWlhkQ2IzZzlJakFnTUNBeE9TQXhPU0lnZUcxc2JuTTlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5Mekl3TURBdmMzWm5JajQ4WnlCMGNtRnVjMlp2Y20wOUltMWhkSEpwZUNndU1ETTBJREFnTUNBdU1ETTBJQzAyTGpnZ01TNDNaUzAxS1NJZ2MzUjViR1U5SW1acGJHdzZJemRpTjJVNFl5SStQSEJoZEdnZ1pEMGliVFE0TUNBek5EUXRNakV4TFRJeE1tTXRNVFl0TVRZdE5ERXRNVFl0TlRjZ01DMHhOaUF4TmkweE5pQTBNaUF3SURVM2JESXpPQ0F5TXpsak9DNDBJRGd1TlNBeU1DQXhNaUF6TVNBeE1pQXhNU0F3TGpVMklESXlMVE11TWlBek1TMHhNbXd5TXpndE1qTTVZekUyTFRFMklERTJMVFF5SURBdE5UZHpMVFF4TFRFMkxUVTNJREI2SWlCemRIbHNaVDBpWm1sc2JEb2pOMkkzWlRoaklpOCtQQzluUGp3dmMzWm5QZ289KVxuLy8gICAgIG5vLXJlcGVhdCByaWdodCAxZW0gY2VudGVyO1xuLy8gICBiYWNrZ3JvdW5kLXNpemU6IDEuMmVtO1xuLy8gICBwYWRkaW5nLXJpZ2h0OiAzZW07XG4vLyB9XG5cbi8vIGlucHV0OjpwbGFjZWhvbGRlcixcbi8vIHRleHRhcmVhOjpwbGFjZWhvbGRlciB7XG4vLyAgIG9wYWNpdHk6IDE7XG4vLyAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycztcbi8vICAgY29sb3I6IGluaGVyaXQ7XG4vLyB9XG5cbi8vIGlucHV0OmZvY3VzOjpwbGFjZWhvbGRlcixcbi8vIHRleHRhcmVhOmZvY3VzOjpwbGFjZWhvbGRlciB7XG4vLyAgIG9wYWNpdHk6IDAuMjtcbi8vIH1cblxuLy8gaW5wdXQ6LW1zLWlucHV0LXBsYWNlaG9sZGVyLFxuLy8gdGV4dGFyZWE6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbi8vICAgb3BhY2l0eTogMTtcbi8vICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzO1xuLy8gICBjb2xvcjogaW5oZXJpdDtcbi8vIH1cblxuLy8gaW5wdXQ6Zm9jdXM6LW1zLWlucHV0LXBsYWNlaG9sZGVyLFxuLy8gdGV4dGFyZWE6Zm9jdXM6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbi8vICAgb3BhY2l0eTogMC4yO1xuLy8gfVxuXG4vLyBpbnB1dFt0eXBlPVwic2VhcmNoXCJdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uLFxuLy8gaW5wdXRbdHlwZT1cInNlYXJjaFwiXTo6LXdlYmtpdC1zZWFyY2gtY2FuY2VsLWJ1dHRvbixcbi8vIGlucHV0W3R5cGU9XCJzZWFyY2hcIl06Oi13ZWJraXQtc2VhcmNoLXJlc3VsdHMtYnV0dG9uLFxuLy8gaW5wdXRbdHlwZT1cInNlYXJjaFwiXTo6LXdlYmtpdC1zZWFyY2gtcmVzdWx0cy1kZWNvcmF0aW9uIHtcbi8vICAgZGlzcGxheTogbm9uZTtcbi8vIH1cblxuLy8gYnV0dG9uLFxuLy8gaW5wdXRbdHlwZT1cImJ1dHRvblwiXSxcbi8vIGlucHV0W3R5cGU9XCJzdWJtaXRcIl0sXG4vLyBpbnB1dFt0eXBlPVwicmVzZXRcIl0ge1xuLy8gICBAZXh0ZW5kIC5vdXRzZXQ7XG5cbi8vICAgYm9yZGVyOiAwO1xuLy8gICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbi8vICAgcGFkZGluZzogMTBweCAwO1xuLy8gICB3aWR0aDogOGVtO1xuLy8gICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4vLyAgIGN1cnNvcjogcG9pbnRlcjtcbi8vICAgY29sb3I6IGluaGVyaXQ7XG4vLyAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuLy8gICB0cmFuc2l0aW9uLXByb3BlcnR5OiBiYWNrZ3JvdW5kLWNvbG9yLCBib3gtc2hhZG93O1xuLy8gICB0cmFuc2l0aW9uLWRlbGF5OiAwLjJzO1xuLy8gICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjJzO1xuXG4vLyAgICYuYWN0aXZlLFxuLy8gICAmOmFjdGl2ZSB7XG4vLyAgICAgQGV4dGVuZCAuaW5zZXQ7XG5cbi8vICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwcztcbi8vICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjFzO1xuLy8gICB9XG5cbi8vICAgQGVhY2ggJG5hbWUsICRjb2xvciBpbiAoXCJyZWRcIjogJHJlZCwgXCJncmVlblwiOiAkZ3JlZW4sIFwiYmx1ZVwiOiAkYmx1ZSkge1xuLy8gICAgIEBhdC1yb290IC4jeyRuYW1lfS1idXR0b24sXG4vLyAgICAgICAmLiN7JG5hbWV9LWJ1dHRvbiB7XG4vLyAgICAgICBAZXh0ZW5kIGJ1dHRvbjtcblxuLy8gICAgICAgJF9iZy1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgJGNvbG9yIDMwJSwgbGlnaHRlbigkY29sb3IsIDYlKSA4MCUpO1xuXG4vLyAgICAgICBjb2xvcjogd2hpdGU7XG4vLyAgICAgICBmb250LXdlaWdodDogYm9sZDtcbi8vICAgICAgIHRleHQtc2hhZG93OiAwIDAuMWVtIDAuMWVtIHRyYW5zcGFyZW50aXplKGJsYWNrLCAwLjMpO1xuLy8gICAgICAgYmFja2dyb3VuZDogJF9iZy1pbWFnZTtcbi8vICAgICAgIGJveC1zaGFkb3c6IDAgMCAwLjVlbSB0cmFuc3BhcmVudGl6ZSgkY29sb3IsIDAuMyksIDAgMCB0cmFuc3BhcmVudCxcbi8vICAgICAgICAgaW5zZXQgMCAtNXB4IDAgdHJhbnNwYXJlbnRpemUoYmxhY2ssIDAuOTUpLFxuLy8gICAgICAgICBpbnNldCAwIDJweCAwIHRyYW5zcGFyZW50aXplKHdoaXRlLCAwLjgpO1xuLy8gICAgICAgYm9yZGVyLXJhZGl1czogNnB4IDZweCA4cHggOHB4O1xuLy8gICAgICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYm94LXNoYWRvdywgYm9yZGVyLXJhZGl1cztcblxuLy8gICAgICAgJi5hY3RpdmUsXG4vLyAgICAgICAmOmFjdGl2ZSB7XG4vLyAgICAgICAgIGJhY2tncm91bmQ6ICRfYmctaW1hZ2U7XG4vLyAgICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbi8vICAgICAgICAgYm94LXNoYWRvdzogMCAwIHRyYW5zcGFyZW50LCAwIDAgdHJhbnNwYXJlbnQsXG4vLyAgICAgICAgICAgaW5zZXQgMCAycHggNXB4IDJweCB0cmFuc3BhcmVudGl6ZShibGFjaywgMC44KTtcbi8vICAgICAgIH1cbi8vICAgICB9XG4vLyAgIH1cbi8vIH1cblxuLy8gbGFiZWwge1xuLy8gICAmLFxuLy8gICAmICoge1xuLy8gICAgIGN1cnNvcjogcG9pbnRlcjtcbi8vICAgfVxuXG4vLyAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbi8vICAgcGFkZGluZzogMC41NmVtIDA7XG4vLyB9XG5cbi8vIGEge1xuLy8gICAmLFxuLy8gICAmOmxpbmssXG4vLyAgICY6dmlzaXRlZCxcbi8vICAgJjpob3ZlciAmOmFjdGl2ZSB7XG4vLyAgICAgJixcbi8vICAgICAmICoge1xuLy8gICAgICAgY3Vyc29yOiBwb2ludGVyO1xuLy8gICAgIH1cblxuLy8gICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuLy8gICAgIGNvbG9yOiAkYmx1ZTtcbi8vICAgICBmb250LXdlaWdodDogYm9sZDtcbi8vICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4vLyAgIH1cbi8vIH1cblxuLy8gaDEsXG4vLyBoMixcbi8vIGgzLFxuLy8gaDQsXG4vLyBoNSxcbi8vIGg2IHtcbi8vICAgbGluZS1oZWlnaHQ6IDEuNWVtO1xuLy8gfVxuXG4vLyBoMSB7XG4vLyAgIGZvbnQtc2l6ZTogNGVtO1xuLy8gICBmb250LXdlaWdodDogbGlnaHRlcjtcbi8vICAgbWFyZ2luOiAwLjdlbSAwO1xuLy8gfVxuXG4vLyBoMiB7XG4vLyAgIGZvbnQtc2l6ZTogM2VtO1xuLy8gICBmb250LXdlaWdodDogbGlnaHRlcjtcbi8vICAgbWFyZ2luOiAwLjhlbSAwO1xuLy8gfVxuXG4vLyBoMyB7XG4vLyAgIGZvbnQtc2l6ZTogMi41ZW07XG4vLyAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuLy8gICBtYXJnaW46IDAuOWVtIDA7XG4vLyB9XG5cbi8vIGg0IHtcbi8vICAgZm9udC1zaXplOiAyZW07XG4vLyAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuLy8gICBtYXJnaW46IDFlbSAwO1xuLy8gfVxuXG4vLyBoNSB7XG4vLyAgIG1hcmdpbjogMC41ZW0gMDtcbi8vICAgZm9udC1zaXplOiAxLjJlbTtcbi8vICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbi8vIH1cblxuLy8gaDYge1xuLy8gICBtYXJnaW46IDFlbSAwIDFlbSAxLjRlbTtcbi8vICAgZm9udC1zaXplOiAxZW07XG4vLyAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuLy8gfVxuXG4vLyBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0sXG4vLyBpbnB1dFt0eXBlPVwicmFkaW9cIl0ge1xuLy8gICAkX2JvcmRlci13aWR0aDogMC4xNWVtO1xuLy8gICAkX2JveC1zaGFkb3c6IDJweCAycHggM3B4IHRyYW5zcGFyZW50aXplKGJsYWNrLCAwLjgpLCAtMnB4IC0ycHggM3B4IHdoaXRlLFxuLy8gICAgIGluc2V0IDFweCAxcHggMnB4IHRyYW5zcGFyZW50aXplKGJsYWNrLCAwLjgpLCBpbnNldCAtMXB4IC0xcHggMnB4IHdoaXRlO1xuLy8gICBmb250LXNpemU6IDFlbTtcbi8vICAgY3Vyc29yOiBwb2ludGVyO1xuLy8gICBoZWlnaHQ6IDEuMmVtO1xuLy8gICB3aWR0aDogMS4yZW07XG4vLyAgIG1hcmdpbjogMCAwLjNlbTtcbi8vICAgYm94LXNoYWRvdzogJF9ib3gtc2hhZG93O1xuLy8gICBib3JkZXI6ICRfYm9yZGVyLXdpZHRoIHNvbGlkICRiZy1jb2xvcjtcbi8vICAgdmVydGljYWwtYWxpZ246IHRleHQtYm90dG9tO1xuLy8gICB0cmFuc2l0aW9uLXByb3BlcnR5OiBiYWNrZ3JvdW5kLCBib3gtc2hhZG93O1xuLy8gICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjJzO1xuXG4vLyAgICY6YWN0aXZlIHtcbi8vICAgICBib3gtc2hhZG93OiAkX2JveC1zaGFkb3csIGluc2V0IDAgMC4xZW0gMC4yNWVtIHRyYW5zcGFyZW50aXplKGJsYWNrLCAwLjgpO1xuLy8gICB9XG5cbi8vICAgJjpjaGVja2VkIHtcbi8vICAgICBib3JkZXItd2lkdGg6IDAuMWVtO1xuLy8gICAgIGJvcmRlci1jb2xvcjogZGFya2VuKCRibHVlLCAxMCUpO1xuLy8gICAgIGJhY2tncm91bmQtY29sb3I6ICRibHVlO1xuLy8gICB9XG4vLyB9XG5cbi8vIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSB7XG4vLyAgIGJvcmRlci1yYWRpdXM6IDI1JTtcblxuLy8gICAmOmNoZWNrZWQge1xuLy8gICAgIGJveC1zaGFkb3c6ICRnbG93LXNoYWRvdywgaW5zZXQgMCAtMC4xZW0gMCB0cmFuc3BhcmVudGl6ZShibGFjaywgMC44KSxcbi8vICAgICAgIGluc2V0IDAgMC4xZW0gMC4xZW0gdHJhbnNwYXJlbnRpemUod2hpdGUsIDAuOCk7XG4vLyAgIH1cbi8vIH1cblxuLy8gaW5wdXRbdHlwZT1cInJhZGlvXCJdIHtcbi8vICAgYm9yZGVyLXJhZGl1czogMTAwJTtcblxuLy8gICAmOmNoZWNrZWQge1xuLy8gICAgIGJveC1zaGFkb3c6ICRnbG93LXNoYWRvdztcbi8vICAgICBib3gtc2hhZG93OiAkZ2xvdy1zaGFkb3csIGluc2V0IDAgMC4xMmVtIDAuMWVtIHRyYW5zcGFyZW50aXplKHdoaXRlLCAwLjc1KTtcbi8vICAgICBib3JkZXItYm90dG9tLXdpZHRoOiAwLjE1ZW07XG4vLyAgIH1cbi8vIH1cblxuLy8gLmNoZWNrdGV4dCB7XG4vLyAgIHdpZHRoOiBhdXRvO1xuLy8gICBtYXJnaW46IDAuNWVtO1xuXG4vLyAgIGlucHV0IHtcbi8vICAgICBkaXNwbGF5OiBub25lO1xuXG4vLyAgICAgKyBzcGFuIHtcbi8vICAgICAgIEBleHRlbmQgYnV0dG9uO1xuXG4vLyAgICAgICBmb250LXdlaWdodDogYm9sZDtcbi8vICAgICAgIHBhZGRpbmc6IDFlbTtcbi8vICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDBzO1xuLy8gICAgIH1cblxuLy8gICAgICY6Y2hlY2tlZCArIHNwYW4ge1xuLy8gICAgICAgQGV4dGVuZCAuYmx1ZS1idXR0b247XG5cbi8vICAgICAgIHBhZGRpbmc6IDFlbTtcbi8vICAgICB9XG4vLyAgIH1cbi8vIH1cblxuLy8gLnN3aXRjaCB7XG4vLyAgICRfaGVpZ2h0OiAycmVtO1xuLy8gICAkX3dpZHRoOiA4cmVtO1xuLy8gICAkX2hhbmRsZS13aWR0aDogJF9oZWlnaHQ7XG4vLyAgICRfaGFuZGxlLXRyYW5zbGF0aW9uOiAkX3dpZHRoIC0gJF9oYW5kbGUtd2lkdGg7XG5cbi8vICAgaGVpZ2h0OiAkX2hlaWdodDtcbi8vICAgd2lkdGg6ICRfd2lkdGg7XG4vLyAgIHBhZGRpbmc6IDA7XG4vLyAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuLy8gICBpbnB1dCB7XG4vLyAgICAgZGlzcGxheTogbm9uZTtcblxuLy8gICAgICsgZGl2IHtcbi8vICAgICAgIGhlaWdodDogMTAwJTtcbi8vICAgICAgIHdpZHRoOiAxMDAlO1xuLy8gICAgICAgYm9yZGVyLXJhZGl1czogOTk5cHg7XG4vLyAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbi8vICAgICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGJveC1zaGFkb3csIGJhY2tncm91bmQtY29sb3I7XG4vLyAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjJzO1xuLy8gICAgICAgdHJhbnNpdGlvbi1kZWxheTogMC4ycztcbi8vICAgICAgIGJveC1zaGFkb3c6IDNweCAzcHggMnB4IC0ycHggdHJhbnNwYXJlbnRpemUoYmxhY2ssIDAuOSksXG4vLyAgICAgICAgIGluc2V0IDJweCAycHggMnB4IDFweCB0cmFuc3BhcmVudGl6ZShibGFjaywgMC45KSxcbi8vICAgICAgICAgaW5zZXQgLTJweCAtMnB4IDFweCB3aGl0ZTtcblxuLy8gICAgICAgJjo6YmVmb3JlIHtcbi8vICAgICAgICAgY29udGVudDogXCJcIjtcbi8vICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4vLyAgICAgICAgIGhlaWdodDogY2FsYygjeyRfaGFuZGxlLXdpZHRofSArIDRweCk7XG4vLyAgICAgICAgIHdpZHRoOiBjYWxjKCN7JF9oYW5kbGUtd2lkdGh9ICsgNHB4KTtcbi8vICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbi8vICAgICAgICAgYm9yZGVyOiBzb2xpZCB3aGl0ZSAzcHg7XG4vLyAgICAgICAgIGJhY2tncm91bmQ6ICRibHVlO1xuLy8gICAgICAgICBib3gtc2hhZG93OiAwIDNweCAxMHB4IHRyYW5zcGFyZW50aXplKGJsYWNrLCAwLjgpLFxuLy8gICAgICAgICAgIGluc2V0IDAgLTFweCAzcHggdHJhbnNwYXJlbnRpemUoYmxhY2ssIDAuOSk7XG4vLyAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC02cHgpO1xuLy8gICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycztcbi8vICAgICAgIH1cbi8vICAgICB9XG5cbi8vICAgICAmOmNoZWNrZWQgKyBkaXYge1xuLy8gICAgICAgYmFja2dyb3VuZDogJGJsdWU7XG4vLyAgICAgICBib3gtc2hhZG93OiAkZ2xvdy1zaGFkb3csIGluc2V0IDAgMnB4IDJweCAycHggdHJhbnNwYXJlbnRpemUoYmxhY2ssIDAuNyksXG4vLyAgICAgICAgIGluc2V0IDAgMCB0cmFuc3BhcmVudDtcblxuLy8gICAgICAgJjo6YmVmb3JlIHtcbi8vICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoJF9oYW5kbGUtdHJhbnNsYXRpb24sIC02cHgpO1xuLy8gICAgICAgfVxuLy8gICAgIH1cbi8vICAgfVxuLy8gfVxuXG4vLyBociB7XG4vLyAgIEBleHRlbmQgLmluc2V0O1xuLy8gICB3aWR0aDogNzIlO1xuLy8gICBoZWlnaHQ6IDhweDtcbi8vICAgZmxvYXQ6IHJpZ2h0O1xuLy8gICBib3JkZXI6IDA7XG4vLyB9XG5cbi8vIGNvZGUsXG4vLyBwcmUge1xuLy8gICBwYWRkaW5nOiAwLjVlbSAxZW07XG4vLyAgIGJvcmRlci1yYWRpdXM6IDRweDtcbi8vICAgb3ZlcmZsb3c6IGF1dG87XG4vLyAgIGJveC1zaGFkb3c6IDAgNXB4IDMwcHggMCB0cmFuc3BhcmVudGl6ZShibGFjaywgMC45NSk7XG4vLyB9XG5cbi8vIGNvZGUge1xuLy8gICBiYWNrZ3JvdW5kOiAjZTZlNmU2O1xuLy8gfVxuXG4vLyBwcmUge1xuLy8gICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbi8vICAgbWFyZ2luOiA0ZW0gMDtcbi8vIH1cblxuLy8gY29kZSxcbi8vIHByZSB7XG4vLyAgICYsXG4vLyAgICYgKiB7XG4vLyAgICAgZm9udC1zaXplOiAwLjlyZW07XG4vLyAgICAgbGluZS1oZWlnaHQ6IDJlbTtcbi8vICAgICBjdXJzb3I6IGF1dG87XG4vLyAgICAgdXNlci1zZWxlY3Q6IHRleHQ7XG4vLyAgICAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiB0ZXh0O1xuLy8gICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IHRleHQ7XG4vLyAgICAgLWtodG1sLXVzZXItc2VsZWN0OiB0ZXh0O1xuLy8gICAgIC1tb3otdXNlci1zZWxlY3Q6IHRleHQ7XG4vLyAgICAgLW1zLXVzZXItc2VsZWN0OiB0ZXh0O1xuLy8gICB9XG4vLyB9XG5cbi8vIGJsb2NrcXVvdGUge1xuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbi8vICAgcGFkZGluZzogMC41ZW0gMWVtO1xuLy8gICBib3JkZXItcmFkaXVzOiA0cHg7XG4vLyAgIGJveC1zaGFkb3c6IDAgNXB4IDMwcHggMCB0cmFuc3BhcmVudGl6ZShibGFjaywgMC45NSk7XG4vLyAgIGJvcmRlci1sZWZ0OiA2cHggc29saWQgJGJsdWU7XG4vLyB9XG4iLCJAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ0NhdmVhdCc7XG4gICAgc3JjOiB1cmwoJy4uLy4uL2ZvbnRzL0JvbGQvQ2F2ZWF0LUJvbGQud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXG4gICAgICAgIHVybCgnLi4vLi4vZm9udHMvQm9sZC9DYXZlYXQtQm9sZC53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtZGlzcGxheTogc3dhcDtcbn1cblxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdDYXZlYXQnO1xuICAgIHNyYzogdXJsKCcuLi8uLi9mb250cy9SZWd1bGFyL0NhdmVhdC1SZWd1bGFyLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxuICAgICAgICB1cmwoJy4uLy4uL2ZvbnRzL1JlZ3VsYXIvQ2F2ZWF0LVJlZ3VsYXIud29mZicpIGZvcm1hdCgnd29mZicpO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtZGlzcGxheTogc3dhcDtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnRmlndXJpbmVTeW1ib2xUMSc7XG4gIHNyYzogdXJsKCcuLi8uLi9mb250cy8zcmQgUGFydHkvQ2hlc3NWYXJpYW50cy9GaWd1cmluZVN5bWJvbFQxQm9sZC53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcbiAgICAgIHVybCgnLi4vLi4vZm9udHMvM3JkIFBhcnR5L0NoZXNzVmFyaWFudHMvRmlndXJpbmVTeW1ib2xUMUJvbGQud29mZicpIGZvcm1hdCgnd29mZicpO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ0ZpZ3VyaW5lU3ltYm9sVDEnO1xuICBzcmM6IHVybCgnLi4vLi4vZm9udHMvM3JkIFBhcnR5L0NoZXNzVmFyaWFudHMvRmlndXJpbmVTeW1ib2xUMS53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcbiAgICAgIHVybCgnLi4vLi4vZm9udHMvM3JkIFBhcnR5L0NoZXNzVmFyaWFudHMvRmlndXJpbmVTeW1ib2xUMS53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xufVxuXG4iLCIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiQ2F2ZWF0XCI7XG4gIHNyYzogdXJsKFwiLi4vLi4vZm9udHMvQm9sZC9DYXZlYXQtQm9sZC53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKSwgdXJsKFwiLi4vLi4vZm9udHMvQm9sZC9DYXZlYXQtQm9sZC53b2ZmXCIpIGZvcm1hdChcIndvZmZcIik7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJDYXZlYXRcIjtcbiAgc3JjOiB1cmwoXCIuLi8uLi9mb250cy9SZWd1bGFyL0NhdmVhdC1SZWd1bGFyLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpLCB1cmwoXCIuLi8uLi9mb250cy9SZWd1bGFyL0NhdmVhdC1SZWd1bGFyLndvZmZcIikgZm9ybWF0KFwid29mZlwiKTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiRmlndXJpbmVTeW1ib2xUMVwiO1xuICBzcmM6IHVybChcIi4uLy4uL2ZvbnRzLzNyZCBQYXJ0eS9DaGVzc1ZhcmlhbnRzL0ZpZ3VyaW5lU3ltYm9sVDFCb2xkLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpLCB1cmwoXCIuLi8uLi9mb250cy8zcmQgUGFydHkvQ2hlc3NWYXJpYW50cy9GaWd1cmluZVN5bWJvbFQxQm9sZC53b2ZmXCIpIGZvcm1hdChcIndvZmZcIik7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJGaWd1cmluZVN5bWJvbFQxXCI7XG4gIHNyYzogdXJsKFwiLi4vLi4vZm9udHMvM3JkIFBhcnR5L0NoZXNzVmFyaWFudHMvRmlndXJpbmVTeW1ib2xUMS53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKSwgdXJsKFwiLi4vLi4vZm9udHMvM3JkIFBhcnR5L0NoZXNzVmFyaWFudHMvRmlndXJpbmVTeW1ib2xUMS53b2ZmXCIpIGZvcm1hdChcIndvZmZcIik7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xufVxuLyoqKioqKioqKioqKioqKioqKiogTWVudSAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgQ29udGFpbmVyIFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIENvbnRhaW5lciBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBDb250YWluZXIgVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgSGlnaGxpZ2h0IFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIEFubm90YXRpb24gVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgVmFyaWF0aW9uIFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIFBseSBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKioqIENvbnRyb2wgQ29sb3JzICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqKiBCb2FyZCBDb2xvcnMgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuOnJvb3Qge1xuICAtLWJnLWNvbG9yOiAjZjJmM2Y3O1xuICAtLWZnLWNvbG9yOiAjMzgzYTQxO1xuICAtLXJlZDogI2U0MzAzMDtcbiAgLS1ncmVlbjogIzE5YTE4NztcbiAgLS1ibHVlOiAjMzY3YmYwO1xuICAtLWRhcmstYmx1ZTogIzI2NWFiMTtcbiAgLS1tYXJvb246ICNiODE3NGM7XG4gIC0tcHVycGxlOiAjOGM0MmFiO1xufVxuXG4uYnV0dG9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3JkZXI6IGJsYWNrIDJweCBzb2xpZDtcbiAgYmFja2dyb3VuZDogdmFyKC0tY3NCYWNrZ3JvdW5kKTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG59XG5cbi5xdWljay1hY3Rpb25zLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWNzQmFja2dyb3VuZCk7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogNDhweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5uYXZpZ2F0aW9uLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA0MnB4O1xuICB3aWR0aDogMTAwJTtcbiAgbGVmdDogMHB4O1xuICBoZWlnaHQ6IDY0cHg7XG59XG5cbi5zdGFydCB7XG4gIGxlZnQ6IC0xcHg7XG4gIHdpZHRoOiAxNCU7XG4gIHRvcDogNnB4O1xuICBib3R0b206IDZweDtcbn1cblxuLnByZXZpb3VzIHtcbiAgbGVmdDogY2FsYygxNCUgLSAycHgpO1xuICB3aWR0aDogY2FsYygyMiUgLSAycHgpO1xuICB0b3A6IDZweDtcbiAgYm90dG9tOiA2cHg7XG59XG5cbi5uZXh0IHtcbiAgd2lkdGg6IGNhbGMoNTAlICsgM3B4KTtcbiAgbGVmdDogY2FsYygzNiUgLSA1cHgpO1xuICB0b3A6IDZweDtcbiAgYm90dG9tOiA2cHg7XG59XG5cbi5lbmQge1xuICB3aWR0aDogY2FsYygxNCUgKyAycHgpO1xuICByaWdodDogLTFweDtcbiAgdG9wOiA2cHg7XG4gIGJvdHRvbTogNnB4O1xufVxuXG4ucGxheSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDM0JTtcbiAgbGVmdDogNHB4O1xuICB0b3A6IDRweDtcbiAgYm90dG9tOiA0cHg7XG4gIGJvcmRlcjogdmFyKC0tY3NDb2xvcikgc29saWQgMnB4O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG59XG5cbi5zaHJpbmsge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMiU7XG4gIGxlZnQ6IGNhbGMoNDkuNSUgKyAxMnB4KTtcbiAgdG9wOiA0cHg7XG4gIGJvdHRvbTogNHB4O1xufVxuXG4uc2V0dGluZ3Mge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMiU7XG4gIHJpZ2h0OiAycHg7XG4gIHRvcDogNHB4O1xuICBib3R0b206IDRweDtcbn1cblxuLmdyb3cge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMiU7XG4gIGxlZnQ6IGNhbGMoNjMuNSUgKyAxNnB4KTtcbiAgdG9wOiA0cHg7XG4gIGJvdHRvbTogNHB4O1xufVxuXG4udmlldyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEyJTtcbiAgbGVmdDogY2FsYygzNi41JSArIDhweCk7XG4gIHRvcDogNHB4O1xuICBib3R0b206IDRweDtcbn1cblxuLmZlYXRoZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDQlO1xuICB3aWR0aDogOTAlO1xuICBoZWlnaHQ6IDkwJTtcbiAgdG9wOiA1JTtcbiAgc3Ryb2tlOiB2YXIoLS1jc0NvbG9yKTtcbiAgc3Ryb2tlLXdpZHRoOiAyO1xuICBzdHJva2UtbGluZWNhcDogcm91bmQ7XG4gIHN0cm9rZS1saW5lam9pbjogZmxhdDtcbiAgZmlsbDogbm9uZTtcbn1cblxuLmZlYXRoZXItcGxheSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNnB4O1xuICB3aWR0aDogMzJweDtcbiAgaGVpZ2h0OiA4MCU7XG4gIHRvcDogMTAlO1xuICBzdHJva2U6IHZhcigtLWNzQ29sb3IpO1xuICBzdHJva2Utd2lkdGg6IDI7XG4gIHN0cm9rZS1saW5lY2FwOiByb3VuZDtcbiAgc3Ryb2tlLWxpbmVqb2luOiByb3VuZDtcbiAgZmlsbDogbm9uZTtcbn1cblxuLnRpbWVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogdmFyKC0tY3NDb2xvcik7XG4gIGxpbmUtaGVpZ2h0OiAzOHB4O1xuICBtYXJnaW4tbGVmdDogMjRweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW8tdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OlgaControlsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'olga-controls',
                templateUrl: './olga-controls.component.html',
                styleUrls: ['./olga-controls.component.scss']
            }]
    }], function () { return [{ type: _services_olga_service__WEBPACK_IMPORTED_MODULE_1__["OlgaService"] }, { type: _services_layout_service__WEBPACK_IMPORTED_MODULE_2__["LayoutService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/olga-menu/board-menu/board-menu.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/olga-menu/board-menu/board-menu.component.ts ***!
  \**************************************************************/
/*! exports provided: BoardMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardMenuComponent", function() { return BoardMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _canvas_chessboard_canvas_chessboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../canvas-chessboard/canvas-chessboard.component */ "./src/app/canvas-chessboard/canvas-chessboard.component.ts");
/* harmony import */ var _services_olga_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/olga.service */ "./src/app/services/olga.service.ts");
/* harmony import */ var _services_colors_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../..//services/colors.service */ "./src/app/services/colors.service.ts");





const _c0 = ["lightBGHandle"];
const _c1 = ["darkBGHandle"];
const _c2 = ["container"];
class BoardMenuComponent {
    constructor(olga, colorService) {
        this.olga = olga;
        this.colorService = colorService;
        this.settingsBoard = null;
        this.lightBGHandle = null;
        this.darkBGHandle = null;
        this.container = null;
    }
    ngOnInit() {
        const menus = document.getElementsByClassName('settings-content');
        this.colorService.boardBGDark.subscribe((color) => {
            var _a;
            (_a = this.settingsBoard) === null || _a === void 0 ? void 0 : _a.setDarkTile(color);
        });
        this.colorService.boardBGLight.subscribe((color) => {
            var _a;
            (_a = this.settingsBoard) === null || _a === void 0 ? void 0 : _a.setLightTile(color);
        });
    }
    ngAfterViewInit() {
        if (this.lightBGHandle) {
            this.lightBGHandle.nativeElement.value = this.colorService.boardBGLight.value;
        }
        if (this.darkBGHandle) {
            this.darkBGHandle.nativeElement.value = this.colorService.boardBGDark.value;
        }
    }
    updateLight(color) {
        const board = this.olga.getBoard();
        if (board) {
            board.setLightTile(color);
            this.colorService.boardBGLight.next(color);
        }
    }
    updateDark(color) {
        const board = this.olga.getBoard();
        if (board) {
            board.setDarkTile(color);
            this.colorService.boardBGDark.next(color);
        }
    }
    hide() {
        if (this.container) {
            this.container.nativeElement.style.visibility = 'hidden';
            if (this.settingsBoard) {
                this.settingsBoard.hide();
            }
        }
    }
    show() {
        if (this.container) {
            this.container.nativeElement.style.visibility = 'visible';
            if (this.settingsBoard) {
                this.settingsBoard.show();
            }
        }
    }
    resize(width, height) {
        const boardWidth = width * .5;
        const boardHeight = height * .8;
        if (this.settingsBoard) {
            if (boardHeight > boardWidth) {
                this.settingsBoard.setSize(boardWidth);
            }
            else {
                this.settingsBoard.setSize(boardHeight);
            }
        }
    }
}
BoardMenuComponent.ɵfac = function BoardMenuComponent_Factory(t) { return new (t || BoardMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_olga_service__WEBPACK_IMPORTED_MODULE_2__["OlgaService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_colors_service__WEBPACK_IMPORTED_MODULE_3__["ColorService"])); };
BoardMenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BoardMenuComponent, selectors: [["board-menu"]], viewQuery: function BoardMenuComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_canvas_chessboard_canvas_chessboard_component__WEBPACK_IMPORTED_MODULE_1__["CanvasChessBoard"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c1, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c2, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.settingsBoard = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.lightBGHandle = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.darkBGHandle = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.container = _t.first);
    } }, decls: 2, vars: 0, consts: [[1, "settings-container"], ["container", ""]], template: function BoardMenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0, 1);
    } }, styles: ["@font-face {\n  font-family: \"Caveat\";\n  src: url('Caveat-Bold.woff2') format(\"woff2\"), url('Caveat-Bold.woff') format(\"woff\");\n  font-weight: bold;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"Caveat\";\n  src: url('Caveat-Regular.woff2') format(\"woff2\"), url('Caveat-Regular.woff') format(\"woff\");\n  font-weight: 600;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"FigurineSymbolT1\";\n  src: url('FigurineSymbolT1Bold.woff2') format(\"woff2\"), url('FigurineSymbolT1Bold.woff') format(\"woff\");\n  font-weight: bold;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"FigurineSymbolT1\";\n  src: url('FigurineSymbolT1.woff2') format(\"woff2\"), url('FigurineSymbolT1.woff') format(\"woff\");\n  font-weight: 600;\n  font-style: normal;\n  font-display: swap;\n}\n\n\n\n\n\n\n\n\n\n\n[_ngcontent-%COMP%]:root {\n  --bg-color: #f2f3f7;\n  --fg-color: #383a41;\n  --red: #e43030;\n  --green: #19a187;\n  --blue: #367bf0;\n  --dark-blue: #265ab1;\n  --maroon: #b8174c;\n  --purple: #8c42ab;\n}\n.settings-container[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  height: 100%;\n  margin-left: 0px;\n  min-width: 240px;\n  overflow-y: auto;\n}\n.color-input[_ngcontent-%COMP%] {\n  background-color: var(--gsBackground);\n  font-size: 2.1vmin;\n  margin: 10px;\n}\n.settings-board[_ngcontent-%COMP%] {\n  height: 320px;\n  width: 320px;\n}\n  .small-slider.mat-slider.mat-slider-horizontal .mat-slider-thumb {\n  height: 32px;\n  width: 32px;\n  border: solid 3px var(--item-bg);\n  bottom: -20px;\n  right: -20px;\n}\n  .small-slider.mat-slider.mat-slider-horizontal .mat-slider-thumb-label-text {\n  font-size: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMuc2NzcyIsInNyYy9hc3NldHMvc2Nzcy9tb2R1bGVzL19mb250cy5zY3NzIiwic3JjL2FwcC9vbGdhLW1lbnUvYm9hcmQtbWVudS9ib2FyZC1tZW51LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhFQUFBO0FDQUE7RUFDSSxxQkFBQTtFQUNBLHFGQUFBO0VBRUEsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDQ0o7QURFQTtFQUNJLHFCQUFBO0VBQ0EsMkZBQUE7RUFFQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNESjtBRElBO0VBQ0UsK0JBQUE7RUFDQSx1R0FBQTtFQUVBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0hGO0FETUE7RUFDRSwrQkFBQTtFQUNBLCtGQUFBO0VBRUEsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDTEY7QUZhQSwrRUFBQTtBQUdBLCtFQUFBO0FBUUEsK0VBQUE7QUFNQSwrRUFBQTtBQU1BLCtFQUFBO0FBTUEsZ0ZBQUE7QUFLQSwrRUFBQTtBQUtBLHlFQUFBO0FBS0EseUVBQUE7QUFJQSx1RUFBQTtBQWdCQTtFQUNFLG1CQUFBO0VBQ0EsbUJBQUE7RUFFQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FFbEVGO0FBOUNBO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBaURGO0FBOUNBO0VBQ0UscUNGa0NhO0VFakNiLGtCQUFBO0VBQ0EsWUFBQTtBQWlERjtBQTlDQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0FBaURGO0FBNUNFO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxnQ0FBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FBK0NKO0FBNUNFO0VBQ0UsZUFBQTtBQThDSiIsImZpbGUiOiJzcmMvYXBwL29sZ2EtbWVudS9ib2FyZC1tZW51L2JvYXJkLW1lbnUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG5cbkBpbXBvcnQgXCIuL2Fzc2V0cy9zY3NzL21vZHVsZXMvX2ZvbnRzLnNjc3NcIjtcbiRnYW1lc2NvcmUtZmFtaWx5OiBcIkZpZ3VyaW5lU3ltYm9sVDFcIjtcbiRnYW1lc2NvcmUtaGlnaGxpZ2h0OiAjNTg1ODU4ZmY7XG4kZ2FtZXNjb3JlLWZvcmVncm91bmQ6IHdoaXRlO1xuXG4kcmVkOiAjZTQzMDMwO1xuJGdyZWVuOiAjMTlhMTg3O1xuJGxpZ2h0LWJsdWU6ICMwMGZmZmZmZjtcbiRibHVlOiAjMzY3YmYwO1xuJGRhcmstYmx1ZTogIzI2NWFiMTtcbiRtYXJvb246ICNiODE3NGM7XG4kcHVycGxlOiAjOGM0MmFiO1xuXG4vLyBNYWluIE9MR0EgQ29sb3IgRWxlbWVudCBWYXJpYWJsZXNcbiR0ZXh0Q29sb3I6IHZhcigtLXRleHRDb2xvcik7IC8vIE1haW4gVGV4dCBDb2xvclxuJHRleHRDb2xvckF0dGVudGlvbjogdmFyKC0tdGV4dENvbG9yQXR0ZW50aW9uKTsgLy8gQXR0ZW50aW9uIHRleHRcbiR0ZXh0Q29sb3JSZW1vdmU6IHZhcigtLXRleHRDb2xvclJlbW92ZSk7IC8vIFJlbW92ZS9EZWxldGUvQ2xvc2VcbiR0ZXh0Q29sb3JBZGQ6IHZhcigtLXRleHRDb2xvckFkZCk7IC8vIEFkZC9DcmVhdGUvT3BlblxuJHRleHRDb2xvckFjdGl2ZTogdmFyKC0tdGV4dENvbG9yQWN0aXZlKTsgLy8gQWRkL0NyZWF0ZS9PcGVuXG4kYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZCk7IC8vIE1haW4gYmFja2dyb3VuZCBDb2xvclxuJGJnQ29udGFpbmVyOiB2YXIoLS1iZ0NvbnRhaW5lcik7IC8vIGJhY2tncm91bmQgb2YgQ29udGFpbmVyc1xuJGJnTWVudTogdmFyKC0tYmdNZW51KTsgLy8gYmFja2dyb3VuZCBvZiBNZW51c1xuJGJnSXRlbTogdmFyKC0tYmdJdGVtKTsgLy8gYmFja2dyb3VuZCBvZiBJdGVtc1xuXG4vLyBDb250ZXh0IE1lbnVcbiRiZ0NvbnRleHQ6IHZhcigtLWJnQ29udGV4dCk7IC8vIGJhY2tncm91bmQgb2YgQ29udGV4dCBNZW51XG4kdGV4dENvbG9yQ29udGV4dDogdmFyKC0tdGV4dENvbG9yQ29udGV4dCk7IC8vIHRleHQgY29sb3IgQ29udGV4dCBNZW51XG4kYm9yZGVyQ29udGV4dDogdmFyKC0tYm9yZGVyQ29udGV4dCk7IC8vIGJvcmRlciBDb250ZXh0IE1lbnVcbiRvdmVybGF5Q29udGV4dEJhY2tncm91bmQ6IHZhcihcbiAgLS1vdmVybGF5Q29udGV4dEJhY2tncm91bmRcbik7IC8vIENvbnRleHQgTWVudSBPdmVybGF5IGJhY2tncm91bmQgbWFpblxuJG92ZXJsYXlDb250ZXh0QmFja2dyb3VuZEdyYWRpZW50OiB2YXIoXG4gIC0tb3ZlcmxheUNvbnRleHRCYWNrZ3JvdW5kR3JhZGllbnRcbik7IC8vIENvbnRleHQgTWVudSBiYWNrZ3JvdW5kIGdyYWRpZW50XG5cbiRpdGVtOiB2YXIoLS1pdGVtKTtcbiRpdGVtLWNvbnRyYXN0OiB2YXIoLS1pdGVtLWNvbnRyYXN0KTtcbiRpdGVtLWJnOiB2YXIoLS1pdGVtLWJnKTtcblxuLyoqKioqKioqKioqKioqKioqKiogTWVudSAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiRtZUJhY2tncm91bmQ6IHZhcigtLW1lQmFja2dyb3VuZCk7XG5cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgQ29udGFpbmVyIFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4kZ3NUZXh0Q29sb3I6IHZhcigtLWdzVGV4dENvbG9yKTsgLy8gVGV4dCBjb2xvciBmb3IgZ2FtZSBzY29yZVxuJGdzQmFja2dyb3VuZDogdmFyKC0tZ3NCYWNrZ3JvdW5kKTsgLy8gYmFja2dyb3VuZCBvZiBDb250YWluZXJzXG4kZ3NMaXN0QmFja2dyb3VuZDogdmFyKC0tZ3NMaXN0QmFja2dyb3VuZCk7IC8vIGxpc3QgYmFja2dyb3VuZCBvZiBnYW1lIHNjb3JlXG4kZ3NCb3JkZXI6IHZhcigtLWdzQm9yZGVyKTsgLy8gYmFja2dyb3VuZCBvZiBNZW51c1xuJGdzVGV4dFNpemU6IHZhcigtLWdzVGV4dFNpemUpOyAvLyBiYWNrZ3JvdW5kIG9mIE1lbnVzXG4kZ3NGb250RmFtaWx5OiB2YXIoLS1nc0ZvbnRGYW1pbHkpOyAvLyBzY29yZSBmb250XG5cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgQ29udGFpbmVyIFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4kZ3NUZXh0Q29sb3JNVzogdmFyKC0tZ3NUZXh0Q29sb3JNVyk7IC8vIFRleHQgY29sb3IgZm9yIGdhbWUgc2NvcmVcbiRnc0JhY2tncm91bmRNVzogdmFyKC0tZ3NCYWNrZ3JvdW5kTVcpOyAvLyBiYWNrZ3JvdW5kIG9mIENvbnRhaW5lcnNcbiRnc0JvcmRlck1XOiB2YXIoLS1nc0JvcmRlck1XKTsgLy8gYmFja2dyb3VuZCBvZiBNZW51c1xuJGdzVGV4dFNpemVNVzogdmFyKC0tZ3NUZXh0U2l6ZU1XKTsgLy8gYmFja2dyb3VuZCBvZiBNZW51c1xuXG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIENvbnRhaW5lciBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuJGdzVGV4dENvbG9yTUI6IHZhcigtLWdzVGV4dENvbG9yTUIpOyAvLyBUZXh0IGNvbG9yIGZvciBnYW1lIHNjb3JlXG4kZ3NCYWNrZ3JvdW5kTUI6IHZhcigtLWdzQmFja2dyb3VuZE1CKTsgLy8gYmFja2dyb3VuZCBvZiBDb250YWluZXJzXG4kZ3NCb3JkZXJNQjogdmFyKC0tZ3NCb3JkZXJNQik7IC8vIGJhY2tncm91bmQgb2YgTWVudXNcbiRnc1RleHRTaXplTUI6IHZhcigtLWdzVGV4dFNpemVNQik7IC8vIGJhY2tncm91bmQgb2YgTWVudXNcblxuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBIaWdobGlnaHQgVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiRnc1RleHRDb2xvckhHOiB2YXIoLS1nc1RleHRDb2xvckhHKTsgLy8gVGV4dCBjb2xvciBmb3IgaGlnaGxpZ2h0XG4kZ3NBbm5vdGF0aW9uQ29sb3JIRzogdmFyKC0tZ3NBbm5vdGF0aW9uQ29sb3JIRyk7IC8vIEFubm90YXRpb24vQ29tbWVudCBjb2xvciBmb3IgaGlnaGxpZ2h0XG4kZ3NCYWNrZ3JvdW5kSEc6IHZhcigtLWdzQmFja2dyb3VuZEhHKTsgLy8gYmFja2dyb3VuZCBmb3IgaGlnaGxpZ2h0XG4kZ3NCb3JkZXJIRzogdmFyKC0tZ3NCb3JkZXJIRyk7IC8vIGJvcmRlciBmb3IgaGlnaGxpZ2h0XG5cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgQW5ub3RhdGlvbiBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuJGdzVGV4dENvbG9yQU46IHZhcigtLWdzVGV4dENvbG9yQU4pOyAvLyBUZXh0IGNvbG9yIGZvciBoaWdobGlnaHRcbiRnc0JhY2tncm91bmRBTjogdmFyKC0tZ3NCYWNrZ3JvdW5kQU4pOyAvLyBiYWNrZ3JvdW5kIGZvciBoaWdobGlnaHRcbiRnc0JvcmRlckFOOiB2YXIoLS1nc0JvcmRlckFOKTsgLy8gYm9yZGVyIGZvciBoaWdobGlnaHRcblxuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBWYXJpYXRpb24gVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiRnc1RleHRDb2xvclZBOiB2YXIoLS1nc1RleHRDb2xvclZBKTsgLy8gVGV4dCBjb2xvciBmb3IgaGlnaGxpZ2h0XG4kZ3NCYWNrZ3JvdW5kVkE6IHZhcigtLWdzQmFja2dyb3VuZFZBKTsgLy8gYmFja2dyb3VuZCBmb3IgaGlnaGxpZ2h0XG4kZ3NCb3JkZXJWQTogdmFyKC0tZ3NCb3JkZXJWQSk7IC8vIGJvcmRlciBmb3IgaGlnaGxpZ2h0XG5cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgUGx5IFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4kZ3NUZXh0Q29sb3JQQzogdmFyKC0tZ3NUZXh0Q29sb3JQQyk7IC8vIFRleHQgY29sb3IgZm9yIGdhbWUgc2NvcmUgcGx5XG4kZ3NCYWNrZ3JvdW5kUEM6IHZhcigtLWdzQmFja2dyb3VuZFBDKTsgLy8gYmFja2dyb3VuZCBmb3IgZ2FtZSBzY29yZSBwbHlcbiRnc0JvcmRlclBDOiB2YXIoLS1nc0JvcmRlclBDKTsgLy8gYm9yZGVyIGZvciBnYW1lIHNjb3JlIHBseVxuXG4vKioqKioqKioqKioqKioqKioqKiogQ29udHJvbCBDb2xvcnMgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuJGNzQmFja2dyb3VuZDogdmFyKC0tY3NCYWNrZ3JvdW5kKTsgLy8gYmFja2dyb3VuZCBmb3IgY29udHJvbHNcbiRjc0NvbG9yOiB2YXIoLS1jc0NvbG9yKTsgLy8gY29udHJvbHMgY29sb3IgKGZvcmVncm91bmQpXG5cbi8qKioqKioqKioqKioqKioqKioqKiBCb2FyZCBDb2xvcnMgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuJGJvYXJkQkdEYXJrOiB2YXIoLS1ib2FyZEJHRGFyayk7IC8vIGJvYXJkIGRhcmsgdGlsZVxuJGJvYXJkQkdMaWdodDogdmFyKC0tYm9hcmRCR0xpZ2h0KTsgLy8gYm9hcmQgbGlnaHQgdGlsZVxuJGJvYXJkTGFiZWxMaWdodDogdmFyKC0tYm9hcmRMYWJlbExpZ2h0KTsgLy8gYm9hcmQgbGlnaHQgbGFiZWxcbiRib2FyZExhYmVsRGFyazogdmFyKC0tYm9hcmRMYWJlbERhcmspOyAvLyBib2FyZCBkYXJrIGxhYmVsXG5cbi8vIEdlbmVyYWwgc3R1ZmZcbiR0ZXh0LWNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcbiRiZy1vdXRlcjogdmFyKC0tYmctb3V0ZXIpO1xuJGJnLWlubmVyOiB2YXIoLS1iZy1pbm5lcik7XG5cbiRiZy1jb2xvcjogI2YyZjNmNztcbiRmZy1jb2xvcjogIzM4M2E0MTtcblxuJGdsb3ctc2hhZG93OiAwIDAgMC41ZW0gdHJhbnNwYXJlbnRpemUoJGJsdWUsIDAuMyk7XG5cbjpyb290IHtcbiAgLS1iZy1jb2xvcjogI3skYmctY29sb3J9O1xuICAtLWZnLWNvbG9yOiAjeyRmZy1jb2xvcn07XG5cbiAgLS1yZWQ6ICN7JHJlZH07XG4gIC0tZ3JlZW46ICN7JGdyZWVufTtcbiAgLS1ibHVlOiAjeyRibHVlfTtcbiAgLS1kYXJrLWJsdWU6ICN7JGRhcmstYmx1ZX07XG4gIC0tbWFyb29uOiAjeyRtYXJvb259O1xuICAtLXB1cnBsZTogI3skcHVycGxlfTtcbn1cblxuLy8gOjotbW96LWZvY3VzLWlubmVyLFxuLy8gOi1tb3otZm9jdXNyaW5nIHtcbi8vICAgYm9yZGVyOiAwO1xuLy8gICBjb2xvcjogdHJhbnNwYXJlbnQ7XG4vLyAgIHRleHQtc2hhZG93OiAwIDAgMCAkZmctY29sb3I7XG4vLyB9XG5cbi8vIDo6c2VsZWN0aW9uLFxuLy8gOjotbW96LXNlbGVjdGlvbiB7XG4vLyAgIGNvbG9yOiB3aGl0ZTtcbi8vICAgYmFja2dyb3VuZDogYmxhY2s7XG4vLyB9XG5cbi8vICoge1xuLy8gICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuLy8gICBvdXRsaW5lOiBub25lO1xuLy8gICB1c2VyLXNlbGVjdDogbm9uZTtcbi8vICAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xuLy8gICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuLy8gICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7XG4vLyAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4vLyAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbi8vICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuLy8gICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4vLyAgIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKSAhaW1wb3J0YW50O1xuLy8gICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XG4vLyAgIGN1cnNvcjogZGVmYXVsdDtcbi8vICAgbGV0dGVyLXNwYWNpbmc6IDA7XG4vLyB9XG5cbi8vIC5zZWxlY3RhYmxlLFxuLy8gLnNlbGVjdGFibGUgKiB7XG4vLyAgIGN1cnNvcjogYXV0bztcbi8vICAgdXNlci1zZWxlY3Q6IHRleHQ7XG4vLyAgIC13ZWJraXQtdG91Y2gtY2FsbG91dDogdGV4dDtcbi8vICAgLXdlYmtpdC11c2VyLXNlbGVjdDogdGV4dDtcbi8vICAgLWtodG1sLXVzZXItc2VsZWN0OiB0ZXh0O1xuLy8gICAtbW96LXVzZXItc2VsZWN0OiB0ZXh0O1xuLy8gICAtbXMtdXNlci1zZWxlY3Q6IHRleHQ7XG4vLyB9XG5cbi8vIGh0bWwsXG4vLyBib2R5IHtcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogJGJnLWNvbG9yO1xuLy8gICBjb2xvcjogJGZnLWNvbG9yO1xuLy8gICBtYXJnaW46IDA7XG4vLyAgIHBhZGRpbmc6IDA7XG4vLyAgIGZvbnQtc2l6ZTogMTBwdDtcbi8vICAgaGVpZ2h0OiAxMDAlO1xuLy8gICBvdmVyZmxvdzogYXV0bztcbi8vIH1cblxuLy8gLndpdGgtc2hhZG93IHtcbi8vICAgYm94LXNoYWRvdzogNnB4IDZweCAxMHB4IHRyYW5zcGFyZW50aXplKGJsYWNrLCAwLjkpLCAtNnB4IC02cHggMTBweCB3aGl0ZTtcbi8vIH1cblxuLy8gLm91dHNldCB7XG4vLyAgIEBleHRlbmQgLndpdGgtc2hhZG93O1xuXG4vLyAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4vLyAgIGJhY2tncm91bmQ6ICRiZy1jb2xvcjtcbi8vIH1cblxuLy8gLmluc2V0IHtcbi8vICAgYm9yZGVyLXJhZGl1czogMTBweDtcbi8vICAgYm94LXNoYWRvdzogMCAwIHRyYW5zcGFyZW50LCAwIDAgdHJhbnNwYXJlbnQsXG4vLyAgICAgaW5zZXQgM3B4IDNweCA1cHggdHJhbnNwYXJlbnRpemUoYmxhY2ssIDAuOSksIGluc2V0IC0zcHggLTNweCA1cHggd2hpdGU7XG4vLyAgIGJhY2tncm91bmQ6IGxpZ2h0ZW4oJGJnLWNvbG9yLCAyJSk7XG4vLyB9XG5cbi8vIC5wYXBlciB7XG4vLyAgIEBleHRlbmQgLm91dHNldDtcbi8vICAgcGFkZGluZzogMTBweCAyMHB4IDIwcHg7XG4vLyAgIG1hcmdpbi10b3A6IDIwcHg7XG4vLyAgIG1pbi1oZWlnaHQ6IDEwMHB4O1xuLy8gICBmb250LXNpemU6IDEuMmVtO1xuLy8gICBiYWNrZ3JvdW5kOiAkYmctY29sb3I7XG4vLyB9XG5cbi8vIHNlY3Rpb24sXG4vLyBhcnRpY2xlLFxuLy8gLnNlY3Rpb24sXG4vLyAuYXJ0aWNsZSxcbi8vIC5wYXBlciB7XG4vLyAgIGxpbmUtaGVpZ2h0OiAyZW07XG4vLyAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbi8vICAgd29yZC1icmVhazogbm9ybWFsO1xuLy8gICBsaW5lLWhlaWdodDogMmVtO1xuLy8gfVxuXG4vLyBpbnB1dFt0eXBlPVwidGV4dFwiXSxcbi8vIGlucHV0W3R5cGU9XCJzZWFyY2hcIl0sXG4vLyBpbnB1dFt0eXBlPVwidGVsXCJdLFxuLy8gaW5wdXRbdHlwZT1cInVybFwiXSxcbi8vIGlucHV0W3R5cGU9XCJlbWFpbFwiXSxcbi8vIGlucHV0W3R5cGU9XCJwYXNzd29yZFwiXSxcbi8vIGlucHV0W3R5cGU9XCJkYXRlXCJdLFxuLy8gaW5wdXRbdHlwZT1cIm1vbnRoXCJdLFxuLy8gaW5wdXRbdHlwZT1cIndlZWtcIl0sXG4vLyBpbnB1dFt0eXBlPVwidGltZVwiXSxcbi8vIGlucHV0W3R5cGU9XCJudW1iZXJcIl0sXG4vLyBpbnB1dFt0eXBlPVwiY29sb3JcIl0sXG4vLyBzZWxlY3QsXG4vLyB0ZXh0YXJlYSB7XG4vLyAgIGJvcmRlcjogMDtcbi8vICAgYmFja2dyb3VuZDogJGJnLWNvbG9yO1xuLy8gICBjb2xvcjogJGZnLWNvbG9yO1xuLy8gICBmb250LXdlaWdodDogbm9ybWFsO1xuLy8gICBwYWRkaW5nOiAwIDEuMjVlbTtcbi8vICAgbGluZS1oZWlnaHQ6IDEuMjVlbTtcbi8vICAgaGVpZ2h0OiAzLjVlbTtcbi8vICAgbWFyZ2luOiAxMHB4IDA7XG4vLyAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuLy8gICBjdXJzb3I6IHRleHQ7XG4vLyAgIHVzZXItc2VsZWN0OiB0ZXh0O1xuLy8gICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IHRleHQ7XG4vLyAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IHRleHQ7XG4vLyAgIC1raHRtbC11c2VyLXNlbGVjdDogdGV4dDtcbi8vICAgLW1vei11c2VyLXNlbGVjdDogdGV4dDtcbi8vICAgLW1zLXVzZXItc2VsZWN0OiB0ZXh0O1xuLy8gICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuMnM7XG5cbi8vICAgJjpub3Qoc2VsZWN0KSB7XG4vLyAgICAgQGV4dGVuZCAuaW5zZXQ7XG5cbi8vICAgICAmOmZvY3VzIHtcbi8vICAgICAgIEBleHRlbmQgLm91dHNldDtcbi8vICAgICB9XG4vLyAgIH1cbi8vIH1cblxuLy8gdGV4dGFyZWEge1xuLy8gICBoZWlnaHQ6IDM1MHB4O1xuLy8gICBwYWRkaW5nOiAxLjI1ZW07XG4vLyB9XG5cbi8vIHNlbGVjdCB7XG4vLyAgIEBleHRlbmQgLm91dHNldDtcblxuLy8gICBjdXJzb3I6IHBvaW50ZXI7XG4vLyAgIGJhY2tncm91bmQ6IHVybChkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUIyWlhKemFXOXVQU0l4TGpFaUlIWnBaWGRDYjNnOUlqQWdNQ0F4T1NBeE9TSWdlRzFzYm5NOUltaDBkSEE2THk5M2QzY3Vkek11YjNKbkx6SXdNREF2YzNabklqNDhaeUIwY21GdWMyWnZjbTA5SW0xaGRISnBlQ2d1TURNMElEQWdNQ0F1TURNMElDMDJMamdnTVM0M1pTMDFLU0lnYzNSNWJHVTlJbVpwYkd3Nkl6ZGlOMlU0WXlJK1BIQmhkR2dnWkQwaWJUUTRNQ0F6TkRRdE1qRXhMVEl4TW1NdE1UWXRNVFl0TkRFdE1UWXROVGNnTUMweE5pQXhOaTB4TmlBME1pQXdJRFUzYkRJek9DQXlNemxqT0M0MElEZ3VOU0F5TUNBeE1pQXpNU0F4TWlBeE1TQXdMalUySURJeUxUTXVNaUF6TVMweE1td3lNemd0TWpNNVl6RTJMVEUySURFMkxUUXlJREF0TlRkekxUUXhMVEUyTFRVM0lEQjZJaUJ6ZEhsc1pUMGlabWxzYkRvak4ySTNaVGhqSWk4K1BDOW5Qand2YzNablBnbz0pXG4vLyAgICAgbm8tcmVwZWF0IHJpZ2h0IDFlbSBjZW50ZXI7XG4vLyAgIGJhY2tncm91bmQtc2l6ZTogMS4yZW07XG4vLyAgIHBhZGRpbmctcmlnaHQ6IDNlbTtcbi8vIH1cblxuLy8gaW5wdXQ6OnBsYWNlaG9sZGVyLFxuLy8gdGV4dGFyZWE6OnBsYWNlaG9sZGVyIHtcbi8vICAgb3BhY2l0eTogMTtcbi8vICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzO1xuLy8gICBjb2xvcjogaW5oZXJpdDtcbi8vIH1cblxuLy8gaW5wdXQ6Zm9jdXM6OnBsYWNlaG9sZGVyLFxuLy8gdGV4dGFyZWE6Zm9jdXM6OnBsYWNlaG9sZGVyIHtcbi8vICAgb3BhY2l0eTogMC4yO1xuLy8gfVxuXG4vLyBpbnB1dDotbXMtaW5wdXQtcGxhY2Vob2xkZXIsXG4vLyB0ZXh0YXJlYTotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuLy8gICBvcGFjaXR5OiAxO1xuLy8gICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnM7XG4vLyAgIGNvbG9yOiBpbmhlcml0O1xuLy8gfVxuXG4vLyBpbnB1dDpmb2N1czotbXMtaW5wdXQtcGxhY2Vob2xkZXIsXG4vLyB0ZXh0YXJlYTpmb2N1czotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuLy8gICBvcGFjaXR5OiAwLjI7XG4vLyB9XG5cbi8vIGlucHV0W3R5cGU9XCJzZWFyY2hcIl06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24sXG4vLyBpbnB1dFt0eXBlPVwic2VhcmNoXCJdOjotd2Via2l0LXNlYXJjaC1jYW5jZWwtYnV0dG9uLFxuLy8gaW5wdXRbdHlwZT1cInNlYXJjaFwiXTo6LXdlYmtpdC1zZWFyY2gtcmVzdWx0cy1idXR0b24sXG4vLyBpbnB1dFt0eXBlPVwic2VhcmNoXCJdOjotd2Via2l0LXNlYXJjaC1yZXN1bHRzLWRlY29yYXRpb24ge1xuLy8gICBkaXNwbGF5OiBub25lO1xuLy8gfVxuXG4vLyBidXR0b24sXG4vLyBpbnB1dFt0eXBlPVwiYnV0dG9uXCJdLFxuLy8gaW5wdXRbdHlwZT1cInN1Ym1pdFwiXSxcbi8vIGlucHV0W3R5cGU9XCJyZXNldFwiXSB7XG4vLyAgIEBleHRlbmQgLm91dHNldDtcblxuLy8gICBib3JkZXI6IDA7XG4vLyAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuLy8gICBwYWRkaW5nOiAxMHB4IDA7XG4vLyAgIHdpZHRoOiA4ZW07XG4vLyAgIHRleHQtYWxpZ246IGNlbnRlcjtcbi8vICAgY3Vyc29yOiBwb2ludGVyO1xuLy8gICBjb2xvcjogaW5oZXJpdDtcbi8vICAgZm9udC1zaXplOiAxLjFyZW07XG4vLyAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGJhY2tncm91bmQtY29sb3IsIGJveC1zaGFkb3c7XG4vLyAgIHRyYW5zaXRpb24tZGVsYXk6IDAuMnM7XG4vLyAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMnM7XG5cbi8vICAgJi5hY3RpdmUsXG4vLyAgICY6YWN0aXZlIHtcbi8vICAgICBAZXh0ZW5kIC5pbnNldDtcblxuLy8gICAgIHRyYW5zaXRpb24tZGVsYXk6IDBzO1xuLy8gICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMXM7XG4vLyAgIH1cblxuLy8gICBAZWFjaCAkbmFtZSwgJGNvbG9yIGluIChcInJlZFwiOiAkcmVkLCBcImdyZWVuXCI6ICRncmVlbiwgXCJibHVlXCI6ICRibHVlKSB7XG4vLyAgICAgQGF0LXJvb3QgLiN7JG5hbWV9LWJ1dHRvbixcbi8vICAgICAgICYuI3skbmFtZX0tYnV0dG9uIHtcbi8vICAgICAgIEBleHRlbmQgYnV0dG9uO1xuXG4vLyAgICAgICAkX2JnLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAkY29sb3IgMzAlLCBsaWdodGVuKCRjb2xvciwgNiUpIDgwJSk7XG5cbi8vICAgICAgIGNvbG9yOiB3aGl0ZTtcbi8vICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuLy8gICAgICAgdGV4dC1zaGFkb3c6IDAgMC4xZW0gMC4xZW0gdHJhbnNwYXJlbnRpemUoYmxhY2ssIDAuMyk7XG4vLyAgICAgICBiYWNrZ3JvdW5kOiAkX2JnLWltYWdlO1xuLy8gICAgICAgYm94LXNoYWRvdzogMCAwIDAuNWVtIHRyYW5zcGFyZW50aXplKCRjb2xvciwgMC4zKSwgMCAwIHRyYW5zcGFyZW50LFxuLy8gICAgICAgICBpbnNldCAwIC01cHggMCB0cmFuc3BhcmVudGl6ZShibGFjaywgMC45NSksXG4vLyAgICAgICAgIGluc2V0IDAgMnB4IDAgdHJhbnNwYXJlbnRpemUod2hpdGUsIDAuOCk7XG4vLyAgICAgICBib3JkZXItcmFkaXVzOiA2cHggNnB4IDhweCA4cHg7XG4vLyAgICAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBib3gtc2hhZG93LCBib3JkZXItcmFkaXVzO1xuXG4vLyAgICAgICAmLmFjdGl2ZSxcbi8vICAgICAgICY6YWN0aXZlIHtcbi8vICAgICAgICAgYmFja2dyb3VuZDogJF9iZy1pbWFnZTtcbi8vICAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuLy8gICAgICAgICBib3gtc2hhZG93OiAwIDAgdHJhbnNwYXJlbnQsIDAgMCB0cmFuc3BhcmVudCxcbi8vICAgICAgICAgICBpbnNldCAwIDJweCA1cHggMnB4IHRyYW5zcGFyZW50aXplKGJsYWNrLCAwLjgpO1xuLy8gICAgICAgfVxuLy8gICAgIH1cbi8vICAgfVxuLy8gfVxuXG4vLyBsYWJlbCB7XG4vLyAgICYsXG4vLyAgICYgKiB7XG4vLyAgICAgY3Vyc29yOiBwb2ludGVyO1xuLy8gICB9XG5cbi8vICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuLy8gICBwYWRkaW5nOiAwLjU2ZW0gMDtcbi8vIH1cblxuLy8gYSB7XG4vLyAgICYsXG4vLyAgICY6bGluayxcbi8vICAgJjp2aXNpdGVkLFxuLy8gICAmOmhvdmVyICY6YWN0aXZlIHtcbi8vICAgICAmLFxuLy8gICAgICYgKiB7XG4vLyAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4vLyAgICAgfVxuXG4vLyAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4vLyAgICAgY29sb3I6ICRibHVlO1xuLy8gICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuLy8gICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbi8vICAgfVxuLy8gfVxuXG4vLyBoMSxcbi8vIGgyLFxuLy8gaDMsXG4vLyBoNCxcbi8vIGg1LFxuLy8gaDYge1xuLy8gICBsaW5lLWhlaWdodDogMS41ZW07XG4vLyB9XG5cbi8vIGgxIHtcbi8vICAgZm9udC1zaXplOiA0ZW07XG4vLyAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuLy8gICBtYXJnaW46IDAuN2VtIDA7XG4vLyB9XG5cbi8vIGgyIHtcbi8vICAgZm9udC1zaXplOiAzZW07XG4vLyAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuLy8gICBtYXJnaW46IDAuOGVtIDA7XG4vLyB9XG5cbi8vIGgzIHtcbi8vICAgZm9udC1zaXplOiAyLjVlbTtcbi8vICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4vLyAgIG1hcmdpbjogMC45ZW0gMDtcbi8vIH1cblxuLy8gaDQge1xuLy8gICBmb250LXNpemU6IDJlbTtcbi8vICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4vLyAgIG1hcmdpbjogMWVtIDA7XG4vLyB9XG5cbi8vIGg1IHtcbi8vICAgbWFyZ2luOiAwLjVlbSAwO1xuLy8gICBmb250LXNpemU6IDEuMmVtO1xuLy8gICBmb250LXdlaWdodDogbm9ybWFsO1xuLy8gfVxuXG4vLyBoNiB7XG4vLyAgIG1hcmdpbjogMWVtIDAgMWVtIDEuNGVtO1xuLy8gICBmb250LXNpemU6IDFlbTtcbi8vICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4vLyB9XG5cbi8vIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSxcbi8vIGlucHV0W3R5cGU9XCJyYWRpb1wiXSB7XG4vLyAgICRfYm9yZGVyLXdpZHRoOiAwLjE1ZW07XG4vLyAgICRfYm94LXNoYWRvdzogMnB4IDJweCAzcHggdHJhbnNwYXJlbnRpemUoYmxhY2ssIDAuOCksIC0ycHggLTJweCAzcHggd2hpdGUsXG4vLyAgICAgaW5zZXQgMXB4IDFweCAycHggdHJhbnNwYXJlbnRpemUoYmxhY2ssIDAuOCksIGluc2V0IC0xcHggLTFweCAycHggd2hpdGU7XG4vLyAgIGZvbnQtc2l6ZTogMWVtO1xuLy8gICBjdXJzb3I6IHBvaW50ZXI7XG4vLyAgIGhlaWdodDogMS4yZW07XG4vLyAgIHdpZHRoOiAxLjJlbTtcbi8vICAgbWFyZ2luOiAwIDAuM2VtO1xuLy8gICBib3gtc2hhZG93OiAkX2JveC1zaGFkb3c7XG4vLyAgIGJvcmRlcjogJF9ib3JkZXItd2lkdGggc29saWQgJGJnLWNvbG9yO1xuLy8gICB2ZXJ0aWNhbC1hbGlnbjogdGV4dC1ib3R0b207XG4vLyAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGJhY2tncm91bmQsIGJveC1zaGFkb3c7XG4vLyAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMnM7XG5cbi8vICAgJjphY3RpdmUge1xuLy8gICAgIGJveC1zaGFkb3c6ICRfYm94LXNoYWRvdywgaW5zZXQgMCAwLjFlbSAwLjI1ZW0gdHJhbnNwYXJlbnRpemUoYmxhY2ssIDAuOCk7XG4vLyAgIH1cblxuLy8gICAmOmNoZWNrZWQge1xuLy8gICAgIGJvcmRlci13aWR0aDogMC4xZW07XG4vLyAgICAgYm9yZGVyLWNvbG9yOiBkYXJrZW4oJGJsdWUsIDEwJSk7XG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJsdWU7XG4vLyAgIH1cbi8vIH1cblxuLy8gaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdIHtcbi8vICAgYm9yZGVyLXJhZGl1czogMjUlO1xuXG4vLyAgICY6Y2hlY2tlZCB7XG4vLyAgICAgYm94LXNoYWRvdzogJGdsb3ctc2hhZG93LCBpbnNldCAwIC0wLjFlbSAwIHRyYW5zcGFyZW50aXplKGJsYWNrLCAwLjgpLFxuLy8gICAgICAgaW5zZXQgMCAwLjFlbSAwLjFlbSB0cmFuc3BhcmVudGl6ZSh3aGl0ZSwgMC44KTtcbi8vICAgfVxuLy8gfVxuXG4vLyBpbnB1dFt0eXBlPVwicmFkaW9cIl0ge1xuLy8gICBib3JkZXItcmFkaXVzOiAxMDAlO1xuXG4vLyAgICY6Y2hlY2tlZCB7XG4vLyAgICAgYm94LXNoYWRvdzogJGdsb3ctc2hhZG93O1xuLy8gICAgIGJveC1zaGFkb3c6ICRnbG93LXNoYWRvdywgaW5zZXQgMCAwLjEyZW0gMC4xZW0gdHJhbnNwYXJlbnRpemUod2hpdGUsIDAuNzUpO1xuLy8gICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDAuMTVlbTtcbi8vICAgfVxuLy8gfVxuXG4vLyAuY2hlY2t0ZXh0IHtcbi8vICAgd2lkdGg6IGF1dG87XG4vLyAgIG1hcmdpbjogMC41ZW07XG5cbi8vICAgaW5wdXQge1xuLy8gICAgIGRpc3BsYXk6IG5vbmU7XG5cbi8vICAgICArIHNwYW4ge1xuLy8gICAgICAgQGV4dGVuZCBidXR0b247XG5cbi8vICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuLy8gICAgICAgcGFkZGluZzogMWVtO1xuLy8gICAgICAgdHJhbnNpdGlvbi1kZWxheTogMHM7XG4vLyAgICAgfVxuXG4vLyAgICAgJjpjaGVja2VkICsgc3BhbiB7XG4vLyAgICAgICBAZXh0ZW5kIC5ibHVlLWJ1dHRvbjtcblxuLy8gICAgICAgcGFkZGluZzogMWVtO1xuLy8gICAgIH1cbi8vICAgfVxuLy8gfVxuXG4vLyAuc3dpdGNoIHtcbi8vICAgJF9oZWlnaHQ6IDJyZW07XG4vLyAgICRfd2lkdGg6IDhyZW07XG4vLyAgICRfaGFuZGxlLXdpZHRoOiAkX2hlaWdodDtcbi8vICAgJF9oYW5kbGUtdHJhbnNsYXRpb246ICRfd2lkdGggLSAkX2hhbmRsZS13aWR0aDtcblxuLy8gICBoZWlnaHQ6ICRfaGVpZ2h0O1xuLy8gICB3aWR0aDogJF93aWR0aDtcbi8vICAgcGFkZGluZzogMDtcbi8vICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4vLyAgIGlucHV0IHtcbi8vICAgICBkaXNwbGF5OiBub25lO1xuXG4vLyAgICAgKyBkaXYge1xuLy8gICAgICAgaGVpZ2h0OiAxMDAlO1xuLy8gICAgICAgd2lkdGg6IDEwMCU7XG4vLyAgICAgICBib3JkZXItcmFkaXVzOiA5OTlweDtcbi8vICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuLy8gICAgICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYm94LXNoYWRvdywgYmFja2dyb3VuZC1jb2xvcjtcbi8vICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMnM7XG4vLyAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjJzO1xuLy8gICAgICAgYm94LXNoYWRvdzogM3B4IDNweCAycHggLTJweCB0cmFuc3BhcmVudGl6ZShibGFjaywgMC45KSxcbi8vICAgICAgICAgaW5zZXQgMnB4IDJweCAycHggMXB4IHRyYW5zcGFyZW50aXplKGJsYWNrLCAwLjkpLFxuLy8gICAgICAgICBpbnNldCAtMnB4IC0ycHggMXB4IHdoaXRlO1xuXG4vLyAgICAgICAmOjpiZWZvcmUge1xuLy8gICAgICAgICBjb250ZW50OiBcIlwiO1xuLy8gICAgICAgICBkaXNwbGF5OiBibG9jaztcbi8vICAgICAgICAgaGVpZ2h0OiBjYWxjKCN7JF9oYW5kbGUtd2lkdGh9ICsgNHB4KTtcbi8vICAgICAgICAgd2lkdGg6IGNhbGMoI3skX2hhbmRsZS13aWR0aH0gKyA0cHgpO1xuLy8gICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuLy8gICAgICAgICBib3JkZXI6IHNvbGlkIHdoaXRlIDNweDtcbi8vICAgICAgICAgYmFja2dyb3VuZDogJGJsdWU7XG4vLyAgICAgICAgIGJveC1zaGFkb3c6IDAgM3B4IDEwcHggdHJhbnNwYXJlbnRpemUoYmxhY2ssIDAuOCksXG4vLyAgICAgICAgICAgaW5zZXQgMCAtMXB4IDNweCB0cmFuc3BhcmVudGl6ZShibGFjaywgMC45KTtcbi8vICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTZweCk7XG4vLyAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzO1xuLy8gICAgICAgfVxuLy8gICAgIH1cblxuLy8gICAgICY6Y2hlY2tlZCArIGRpdiB7XG4vLyAgICAgICBiYWNrZ3JvdW5kOiAkYmx1ZTtcbi8vICAgICAgIGJveC1zaGFkb3c6ICRnbG93LXNoYWRvdywgaW5zZXQgMCAycHggMnB4IDJweCB0cmFuc3BhcmVudGl6ZShibGFjaywgMC43KSxcbi8vICAgICAgICAgaW5zZXQgMCAwIHRyYW5zcGFyZW50O1xuXG4vLyAgICAgICAmOjpiZWZvcmUge1xuLy8gICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgkX2hhbmRsZS10cmFuc2xhdGlvbiwgLTZweCk7XG4vLyAgICAgICB9XG4vLyAgICAgfVxuLy8gICB9XG4vLyB9XG5cbi8vIGhyIHtcbi8vICAgQGV4dGVuZCAuaW5zZXQ7XG4vLyAgIHdpZHRoOiA3MiU7XG4vLyAgIGhlaWdodDogOHB4O1xuLy8gICBmbG9hdDogcmlnaHQ7XG4vLyAgIGJvcmRlcjogMDtcbi8vIH1cblxuLy8gY29kZSxcbi8vIHByZSB7XG4vLyAgIHBhZGRpbmc6IDAuNWVtIDFlbTtcbi8vICAgYm9yZGVyLXJhZGl1czogNHB4O1xuLy8gICBvdmVyZmxvdzogYXV0bztcbi8vICAgYm94LXNoYWRvdzogMCA1cHggMzBweCAwIHRyYW5zcGFyZW50aXplKGJsYWNrLCAwLjk1KTtcbi8vIH1cblxuLy8gY29kZSB7XG4vLyAgIGJhY2tncm91bmQ6ICNlNmU2ZTY7XG4vLyB9XG5cbi8vIHByZSB7XG4vLyAgIGJhY2tncm91bmQ6IHdoaXRlO1xuLy8gICBtYXJnaW46IDRlbSAwO1xuLy8gfVxuXG4vLyBjb2RlLFxuLy8gcHJlIHtcbi8vICAgJixcbi8vICAgJiAqIHtcbi8vICAgICBmb250LXNpemU6IDAuOXJlbTtcbi8vICAgICBsaW5lLWhlaWdodDogMmVtO1xuLy8gICAgIGN1cnNvcjogYXV0bztcbi8vICAgICB1c2VyLXNlbGVjdDogdGV4dDtcbi8vICAgICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IHRleHQ7XG4vLyAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogdGV4dDtcbi8vICAgICAta2h0bWwtdXNlci1zZWxlY3Q6IHRleHQ7XG4vLyAgICAgLW1vei11c2VyLXNlbGVjdDogdGV4dDtcbi8vICAgICAtbXMtdXNlci1zZWxlY3Q6IHRleHQ7XG4vLyAgIH1cbi8vIH1cblxuLy8gYmxvY2txdW90ZSB7XG4vLyAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuLy8gICBwYWRkaW5nOiAwLjVlbSAxZW07XG4vLyAgIGJvcmRlci1yYWRpdXM6IDRweDtcbi8vICAgYm94LXNoYWRvdzogMCA1cHggMzBweCAwIHRyYW5zcGFyZW50aXplKGJsYWNrLCAwLjk1KTtcbi8vICAgYm9yZGVyLWxlZnQ6IDZweCBzb2xpZCAkYmx1ZTtcbi8vIH1cbiIsIkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnQ2F2ZWF0JztcbiAgICBzcmM6IHVybCgnLi4vLi4vZm9udHMvQm9sZC9DYXZlYXQtQm9sZC53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcbiAgICAgICAgdXJsKCcuLi8uLi9mb250cy9Cb2xkL0NhdmVhdC1Cb2xkLndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC1kaXNwbGF5OiBzd2FwO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ0NhdmVhdCc7XG4gICAgc3JjOiB1cmwoJy4uLy4uL2ZvbnRzL1JlZ3VsYXIvQ2F2ZWF0LVJlZ3VsYXIud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXG4gICAgICAgIHVybCgnLi4vLi4vZm9udHMvUmVndWxhci9DYXZlYXQtUmVndWxhci53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC1kaXNwbGF5OiBzd2FwO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdGaWd1cmluZVN5bWJvbFQxJztcbiAgc3JjOiB1cmwoJy4uLy4uL2ZvbnRzLzNyZCBQYXJ0eS9DaGVzc1ZhcmlhbnRzL0ZpZ3VyaW5lU3ltYm9sVDFCb2xkLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxuICAgICAgdXJsKCcuLi8uLi9mb250cy8zcmQgUGFydHkvQ2hlc3NWYXJpYW50cy9GaWd1cmluZVN5bWJvbFQxQm9sZC53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnRmlndXJpbmVTeW1ib2xUMSc7XG4gIHNyYzogdXJsKCcuLi8uLi9mb250cy8zcmQgUGFydHkvQ2hlc3NWYXJpYW50cy9GaWd1cmluZVN5bWJvbFQxLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxuICAgICAgdXJsKCcuLi8uLi9mb250cy8zcmQgUGFydHkvQ2hlc3NWYXJpYW50cy9GaWd1cmluZVN5bWJvbFQxLndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG59XG5cbiIsIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJDYXZlYXRcIjtcbiAgc3JjOiB1cmwoXCIuLi8uLi9mb250cy9Cb2xkL0NhdmVhdC1Cb2xkLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpLCB1cmwoXCIuLi8uLi9mb250cy9Cb2xkL0NhdmVhdC1Cb2xkLndvZmZcIikgZm9ybWF0KFwid29mZlwiKTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkNhdmVhdFwiO1xuICBzcmM6IHVybChcIi4uLy4uL2ZvbnRzL1JlZ3VsYXIvQ2F2ZWF0LVJlZ3VsYXIud29mZjJcIikgZm9ybWF0KFwid29mZjJcIiksIHVybChcIi4uLy4uL2ZvbnRzL1JlZ3VsYXIvQ2F2ZWF0LVJlZ3VsYXIud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJGaWd1cmluZVN5bWJvbFQxXCI7XG4gIHNyYzogdXJsKFwiLi4vLi4vZm9udHMvM3JkIFBhcnR5L0NoZXNzVmFyaWFudHMvRmlndXJpbmVTeW1ib2xUMUJvbGQud29mZjJcIikgZm9ybWF0KFwid29mZjJcIiksIHVybChcIi4uLy4uL2ZvbnRzLzNyZCBQYXJ0eS9DaGVzc1ZhcmlhbnRzL0ZpZ3VyaW5lU3ltYm9sVDFCb2xkLndvZmZcIikgZm9ybWF0KFwid29mZlwiKTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkZpZ3VyaW5lU3ltYm9sVDFcIjtcbiAgc3JjOiB1cmwoXCIuLi8uLi9mb250cy8zcmQgUGFydHkvQ2hlc3NWYXJpYW50cy9GaWd1cmluZVN5bWJvbFQxLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpLCB1cmwoXCIuLi8uLi9mb250cy8zcmQgUGFydHkvQ2hlc3NWYXJpYW50cy9GaWd1cmluZVN5bWJvbFQxLndvZmZcIikgZm9ybWF0KFwid29mZlwiKTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG59XG4vKioqKioqKioqKioqKioqKioqKiBNZW51ICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBDb250YWluZXIgVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgQ29udGFpbmVyIFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIENvbnRhaW5lciBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBIaWdobGlnaHQgVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgQW5ub3RhdGlvbiBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBWYXJpYXRpb24gVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgUGx5IFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKiogQ29udHJvbCBDb2xvcnMgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKioqIEJvYXJkIENvbG9ycyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG46cm9vdCB7XG4gIC0tYmctY29sb3I6ICNmMmYzZjc7XG4gIC0tZmctY29sb3I6ICMzODNhNDE7XG4gIC0tcmVkOiAjZTQzMDMwO1xuICAtLWdyZWVuOiAjMTlhMTg3O1xuICAtLWJsdWU6ICMzNjdiZjA7XG4gIC0tZGFyay1ibHVlOiAjMjY1YWIxO1xuICAtLW1hcm9vbjogI2I4MTc0YztcbiAgLS1wdXJwbGU6ICM4YzQyYWI7XG59XG5cbi5zZXR0aW5ncy1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW4tbGVmdDogMHB4O1xuICBtaW4td2lkdGg6IDI0MHB4O1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuXG4uY29sb3ItaW5wdXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1nc0JhY2tncm91bmQpO1xuICBmb250LXNpemU6IDIuMXZtaW47XG4gIG1hcmdpbjogMTBweDtcbn1cblxuLnNldHRpbmdzLWJvYXJkIHtcbiAgaGVpZ2h0OiAzMjBweDtcbiAgd2lkdGg6IDMyMHB4O1xufVxuXG46Om5nLWRlZXAgLnNtYWxsLXNsaWRlci5tYXQtc2xpZGVyLm1hdC1zbGlkZXItaG9yaXpvbnRhbCAubWF0LXNsaWRlci10aHVtYiB7XG4gIGhlaWdodDogMzJweDtcbiAgd2lkdGg6IDMycHg7XG4gIGJvcmRlcjogc29saWQgM3B4IHZhcigtLWl0ZW0tYmcpO1xuICBib3R0b206IC0yMHB4O1xuICByaWdodDogLTIwcHg7XG59XG46Om5nLWRlZXAgLnNtYWxsLXNsaWRlci5tYXQtc2xpZGVyLm1hdC1zbGlkZXItaG9yaXpvbnRhbCAubWF0LXNsaWRlci10aHVtYi1sYWJlbC10ZXh0IHtcbiAgZm9udC1zaXplOiAyNHB4O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BoardMenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'board-menu',
                templateUrl: './board-menu.component.html',
                styleUrls: ['./board-menu.component.scss']
            }]
    }], function () { return [{ type: _services_olga_service__WEBPACK_IMPORTED_MODULE_2__["OlgaService"] }, { type: _services_colors_service__WEBPACK_IMPORTED_MODULE_3__["ColorService"] }]; }, { settingsBoard: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_canvas_chessboard_canvas_chessboard_component__WEBPACK_IMPORTED_MODULE_1__["CanvasChessBoard"]]
        }], lightBGHandle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['lightBGHandle', { static: true }]
        }], darkBGHandle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['darkBGHandle', { static: true }]
        }], container: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['container', { static: true }]
        }] }); })();


/***/ }),

/***/ "./src/app/olga-menu/common/menu-section/menu-section.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/olga-menu/common/menu-section/menu-section.component.ts ***!
  \*************************************************************************/
/*! exports provided: MenuSectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuSectionComponent", function() { return MenuSectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");



class MenuSectionComponent {
    constructor() {
        this.sectionTitle = '';
    }
    ngOnInit() {
    }
}
MenuSectionComponent.ɵfac = function MenuSectionComponent_Factory(t) { return new (t || MenuSectionComponent)(); };
MenuSectionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenuSectionComponent, selectors: [["menu-section"]], inputs: { sectionTitle: "sectionTitle" }, decls: 2, vars: 2, consts: [[3, "vertical"]], template: function MenuSectionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-divider", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("vertical", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.sectionTitle);
    } }, directives: [_angular_material_divider__WEBPACK_IMPORTED_MODULE_1__["MatDivider"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29sZ2EtbWVudS9jb21tb24vbWVudS1zZWN0aW9uL21lbnUtc2VjdGlvbi5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuSectionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'menu-section',
                templateUrl: './menu-section.component.html',
                styleUrls: ['./menu-section.component.scss']
            }]
    }], function () { return []; }, { sectionTitle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/olga-menu/controls/color-select/color-select.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/olga-menu/controls/color-select/color-select.component.ts ***!
  \***************************************************************************/
/*! exports provided: ColorSelectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorSelectComponent", function() { return ColorSelectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_colors_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/colors.service */ "./src/app/services/colors.service.ts");



class ColorSelectComponent {
    constructor(colors) {
        this.colors = colors;
        this.title = '';
        this.variableName = '';
        this.color = '#000000000';
        this.rValue = 0;
        this.gValue = 0;
        this.bValue = 0;
    }
    ngOnInit() {
    }
    updateRGB() {
        let value = this.color.slice(1);
        if (value.length == 6) { // parse RRGGBB
            let r = value.slice(0, 2);
            let g = value.slice(2, 4);
            let b = value.slice(4, 6);
            this.rValue = parseInt(r, 16);
            this.gValue = parseInt(g, 16);
            this.bValue = parseInt(b, 16);
        }
        else if (value.length == 9) { // parse RRRGGBB
            let r = value.slice(0, 2);
            let g = value.slice(2, 4);
            let b = value.slice(4, 6);
            this.rValue = parseInt(r, 16);
            this.gValue = parseInt(g, 16);
            this.bValue = parseInt(b, 16);
        }
        else if (value.length == 12) { // parse RRRGGBBAAA
            let r = value.slice(0, 2);
            let g = value.slice(2, 4);
            let b = value.slice(4, 6);
            this.rValue = parseInt(r, 16);
            this.gValue = parseInt(g, 16);
            this.bValue = parseInt(b, 16);
        }
        // const bigint = parseInt(c,16);
        // this.rValue = (bigint >> 16) & 255;
        // this.gValue = (bigint >> 8) & 255;
        // this.bValue = bigint & 255;
    }
    ngOnChanges(changes) {
        if (changes.color) {
            this.updateRGB();
        }
    }
    updateColor(color) {
        this.color = color;
        this.colors.updateColor(this.variableName, color);
    }
}
ColorSelectComponent.ɵfac = function ColorSelectComponent_Factory(t) { return new (t || ColorSelectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_colors_service__WEBPACK_IMPORTED_MODULE_1__["ColorService"])); };
ColorSelectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ColorSelectComponent, selectors: [["color-select"]], inputs: { title: "title", variableName: "variableName", color: "color" }, outputs: { rValue: "rValue", gValue: "gValue", bValue: "bValue" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 12, vars: 5, consts: [[1, "control-container"], ["type", "color", "id", "color-handle", 1, "color-input", 3, "value", "input", "blur"], ["colorHandle", ""], [1, "rgb-row"], [1, "red"], [1, "green"], [1, "blue"], [1, "title-row"]], template: function ColorSelectComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function ColorSelectComponent_Template_input_input_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); return ctx.updateColor(_r0.value); })("blur", function ColorSelectComponent_Template_input_blur_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); return ctx.updateColor(_r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.color);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("RED:\u00A0\u00A0", ctx.rValue, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("GREEN:\u00A0\u00A0", ctx.gValue, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("BLUE:\u00A0\u00A0", ctx.bValue, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
    } }, styles: ["@font-face {\n  font-family: \"Caveat\";\n  src: url('Caveat-Bold.woff2') format(\"woff2\"), url('Caveat-Bold.woff') format(\"woff\");\n  font-weight: bold;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"Caveat\";\n  src: url('Caveat-Regular.woff2') format(\"woff2\"), url('Caveat-Regular.woff') format(\"woff\");\n  font-weight: 600;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"FigurineSymbolT1\";\n  src: url('FigurineSymbolT1Bold.woff2') format(\"woff2\"), url('FigurineSymbolT1Bold.woff') format(\"woff\");\n  font-weight: bold;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"FigurineSymbolT1\";\n  src: url('FigurineSymbolT1.woff2') format(\"woff2\"), url('FigurineSymbolT1.woff') format(\"woff\");\n  font-weight: 600;\n  font-style: normal;\n  font-display: swap;\n}\n\n\n\n\n\n\n\n\n\n\n[_ngcontent-%COMP%]:root {\n  --bg-color: #f2f3f7;\n  --fg-color: #383a41;\n  --red: #e43030;\n  --green: #19a187;\n  --blue: #367bf0;\n  --dark-blue: #265ab1;\n  --maroon: #b8174c;\n  --purple: #8c42ab;\n}\n.control-container[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n}\n.color-input[_ngcontent-%COMP%] {\n  height: 5.5em;\n  width: 5.5em;\n  margin-top: 4px;\n  margin-left: 4px;\n  margin-bottom: 4px;\n  float: left;\n}\n.red[_ngcontent-%COMP%] {\n  float: right;\n  color: #ff0000;\n  margin-right: 8px;\n}\n.green[_ngcontent-%COMP%] {\n  float: right;\n  color: #00ff00;\n  margin-right: 8px;\n}\n.blue[_ngcontent-%COMP%] {\n  float: right;\n  color: #03f6f6;\n  margin-right: 8px;\n}\n.rgb-row[_ngcontent-%COMP%] {\n  display: flex;\n  float: right;\n  font-size: 14pt;\n  margin-top: 16px;\n  margin-left: 8px;\n  margin-right: 4px;\n  width: calc(100% - 6em + 8px);\n  font-size: 16px;\n  color: var(--gsTextColor);\n  word-wrap: none;\n  white-space: nowrap;\n  overflow-y: visible;\n}\n.title-row[_ngcontent-%COMP%] {\n  float: none;\n  position: absolute;\n  bottom: 12px;\n  left: 82px;\n  font-size: 24px;\n  margin-top: 16px;\n  margin-left: 8px;\n  margin-right: 4px;\n  font-size: 14pt;\n  text-align: left;\n  width: calc(100% - 5.5em + 8px);\n  color: var(--gsTextColor);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMuc2NzcyIsInNyYy9hc3NldHMvc2Nzcy9tb2R1bGVzL19mb250cy5zY3NzIiwic3JjL2FwcC9vbGdhLW1lbnUvY29udHJvbHMvY29sb3Itc2VsZWN0L2NvbG9yLXNlbGVjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4RUFBQTtBQ0FBO0VBQ0kscUJBQUE7RUFDQSxxRkFBQTtFQUVBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0NKO0FERUE7RUFDSSxxQkFBQTtFQUNBLDJGQUFBO0VBRUEsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDREo7QURJQTtFQUNFLCtCQUFBO0VBQ0EsdUdBQUE7RUFFQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNIRjtBRE1BO0VBQ0UsK0JBQUE7RUFDQSwrRkFBQTtFQUVBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0xGO0FGYUEsK0VBQUE7QUFHQSwrRUFBQTtBQVFBLCtFQUFBO0FBTUEsK0VBQUE7QUFNQSwrRUFBQTtBQU1BLGdGQUFBO0FBS0EsK0VBQUE7QUFLQSx5RUFBQTtBQUtBLHlFQUFBO0FBSUEsdUVBQUE7QUFnQkE7RUFDRSxtQkFBQTtFQUNBLG1CQUFBO0VBRUEsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBRWxFRjtBQTlDQTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtBQWlESjtBQS9DQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBa0RKO0FBaERBO0VBQ0ksWUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQW1ESjtBQWhEQTtFQUNJLFlBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFtREo7QUFoREE7RUFDSSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBbURKO0FBaERBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsNkJBQUE7RUFDQSxlQUFBO0VBQ0EseUJGSVU7RUVIVixlQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQW1ESjtBQWpEQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLCtCQUFBO0VBQ0EseUJGYlU7QUVpRWQiLCJmaWxlIjoic3JjL2FwcC9vbGdhLW1lbnUvY29udHJvbHMvY29sb3Itc2VsZWN0L2NvbG9yLXNlbGVjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cblxuQGltcG9ydCBcIi4vYXNzZXRzL3Njc3MvbW9kdWxlcy9fZm9udHMuc2Nzc1wiO1xuJGdhbWVzY29yZS1mYW1pbHk6IFwiRmlndXJpbmVTeW1ib2xUMVwiO1xuJGdhbWVzY29yZS1oaWdobGlnaHQ6ICM1ODU4NThmZjtcbiRnYW1lc2NvcmUtZm9yZWdyb3VuZDogd2hpdGU7XG5cbiRyZWQ6ICNlNDMwMzA7XG4kZ3JlZW46ICMxOWExODc7XG4kbGlnaHQtYmx1ZTogIzAwZmZmZmZmO1xuJGJsdWU6ICMzNjdiZjA7XG4kZGFyay1ibHVlOiAjMjY1YWIxO1xuJG1hcm9vbjogI2I4MTc0YztcbiRwdXJwbGU6ICM4YzQyYWI7XG5cbi8vIE1haW4gT0xHQSBDb2xvciBFbGVtZW50IFZhcmlhYmxlc1xuJHRleHRDb2xvcjogdmFyKC0tdGV4dENvbG9yKTsgLy8gTWFpbiBUZXh0IENvbG9yXG4kdGV4dENvbG9yQXR0ZW50aW9uOiB2YXIoLS10ZXh0Q29sb3JBdHRlbnRpb24pOyAvLyBBdHRlbnRpb24gdGV4dFxuJHRleHRDb2xvclJlbW92ZTogdmFyKC0tdGV4dENvbG9yUmVtb3ZlKTsgLy8gUmVtb3ZlL0RlbGV0ZS9DbG9zZVxuJHRleHRDb2xvckFkZDogdmFyKC0tdGV4dENvbG9yQWRkKTsgLy8gQWRkL0NyZWF0ZS9PcGVuXG4kdGV4dENvbG9yQWN0aXZlOiB2YXIoLS10ZXh0Q29sb3JBY3RpdmUpOyAvLyBBZGQvQ3JlYXRlL09wZW5cbiRiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kKTsgLy8gTWFpbiBiYWNrZ3JvdW5kIENvbG9yXG4kYmdDb250YWluZXI6IHZhcigtLWJnQ29udGFpbmVyKTsgLy8gYmFja2dyb3VuZCBvZiBDb250YWluZXJzXG4kYmdNZW51OiB2YXIoLS1iZ01lbnUpOyAvLyBiYWNrZ3JvdW5kIG9mIE1lbnVzXG4kYmdJdGVtOiB2YXIoLS1iZ0l0ZW0pOyAvLyBiYWNrZ3JvdW5kIG9mIEl0ZW1zXG5cbi8vIENvbnRleHQgTWVudVxuJGJnQ29udGV4dDogdmFyKC0tYmdDb250ZXh0KTsgLy8gYmFja2dyb3VuZCBvZiBDb250ZXh0IE1lbnVcbiR0ZXh0Q29sb3JDb250ZXh0OiB2YXIoLS10ZXh0Q29sb3JDb250ZXh0KTsgLy8gdGV4dCBjb2xvciBDb250ZXh0IE1lbnVcbiRib3JkZXJDb250ZXh0OiB2YXIoLS1ib3JkZXJDb250ZXh0KTsgLy8gYm9yZGVyIENvbnRleHQgTWVudVxuJG92ZXJsYXlDb250ZXh0QmFja2dyb3VuZDogdmFyKFxuICAtLW92ZXJsYXlDb250ZXh0QmFja2dyb3VuZFxuKTsgLy8gQ29udGV4dCBNZW51IE92ZXJsYXkgYmFja2dyb3VuZCBtYWluXG4kb3ZlcmxheUNvbnRleHRCYWNrZ3JvdW5kR3JhZGllbnQ6IHZhcihcbiAgLS1vdmVybGF5Q29udGV4dEJhY2tncm91bmRHcmFkaWVudFxuKTsgLy8gQ29udGV4dCBNZW51IGJhY2tncm91bmQgZ3JhZGllbnRcblxuJGl0ZW06IHZhcigtLWl0ZW0pO1xuJGl0ZW0tY29udHJhc3Q6IHZhcigtLWl0ZW0tY29udHJhc3QpO1xuJGl0ZW0tYmc6IHZhcigtLWl0ZW0tYmcpO1xuXG4vKioqKioqKioqKioqKioqKioqKiBNZW51ICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuJG1lQmFja2dyb3VuZDogdmFyKC0tbWVCYWNrZ3JvdW5kKTtcblxuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBDb250YWluZXIgVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiRnc1RleHRDb2xvcjogdmFyKC0tZ3NUZXh0Q29sb3IpOyAvLyBUZXh0IGNvbG9yIGZvciBnYW1lIHNjb3JlXG4kZ3NCYWNrZ3JvdW5kOiB2YXIoLS1nc0JhY2tncm91bmQpOyAvLyBiYWNrZ3JvdW5kIG9mIENvbnRhaW5lcnNcbiRnc0xpc3RCYWNrZ3JvdW5kOiB2YXIoLS1nc0xpc3RCYWNrZ3JvdW5kKTsgLy8gbGlzdCBiYWNrZ3JvdW5kIG9mIGdhbWUgc2NvcmVcbiRnc0JvcmRlcjogdmFyKC0tZ3NCb3JkZXIpOyAvLyBiYWNrZ3JvdW5kIG9mIE1lbnVzXG4kZ3NUZXh0U2l6ZTogdmFyKC0tZ3NUZXh0U2l6ZSk7IC8vIGJhY2tncm91bmQgb2YgTWVudXNcbiRnc0ZvbnRGYW1pbHk6IHZhcigtLWdzRm9udEZhbWlseSk7IC8vIHNjb3JlIGZvbnRcblxuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBDb250YWluZXIgVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiRnc1RleHRDb2xvck1XOiB2YXIoLS1nc1RleHRDb2xvck1XKTsgLy8gVGV4dCBjb2xvciBmb3IgZ2FtZSBzY29yZVxuJGdzQmFja2dyb3VuZE1XOiB2YXIoLS1nc0JhY2tncm91bmRNVyk7IC8vIGJhY2tncm91bmQgb2YgQ29udGFpbmVyc1xuJGdzQm9yZGVyTVc6IHZhcigtLWdzQm9yZGVyTVcpOyAvLyBiYWNrZ3JvdW5kIG9mIE1lbnVzXG4kZ3NUZXh0U2l6ZU1XOiB2YXIoLS1nc1RleHRTaXplTVcpOyAvLyBiYWNrZ3JvdW5kIG9mIE1lbnVzXG5cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgQ29udGFpbmVyIFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4kZ3NUZXh0Q29sb3JNQjogdmFyKC0tZ3NUZXh0Q29sb3JNQik7IC8vIFRleHQgY29sb3IgZm9yIGdhbWUgc2NvcmVcbiRnc0JhY2tncm91bmRNQjogdmFyKC0tZ3NCYWNrZ3JvdW5kTUIpOyAvLyBiYWNrZ3JvdW5kIG9mIENvbnRhaW5lcnNcbiRnc0JvcmRlck1COiB2YXIoLS1nc0JvcmRlck1CKTsgLy8gYmFja2dyb3VuZCBvZiBNZW51c1xuJGdzVGV4dFNpemVNQjogdmFyKC0tZ3NUZXh0U2l6ZU1CKTsgLy8gYmFja2dyb3VuZCBvZiBNZW51c1xuXG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIEhpZ2hsaWdodCBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuJGdzVGV4dENvbG9ySEc6IHZhcigtLWdzVGV4dENvbG9ySEcpOyAvLyBUZXh0IGNvbG9yIGZvciBoaWdobGlnaHRcbiRnc0Fubm90YXRpb25Db2xvckhHOiB2YXIoLS1nc0Fubm90YXRpb25Db2xvckhHKTsgLy8gQW5ub3RhdGlvbi9Db21tZW50IGNvbG9yIGZvciBoaWdobGlnaHRcbiRnc0JhY2tncm91bmRIRzogdmFyKC0tZ3NCYWNrZ3JvdW5kSEcpOyAvLyBiYWNrZ3JvdW5kIGZvciBoaWdobGlnaHRcbiRnc0JvcmRlckhHOiB2YXIoLS1nc0JvcmRlckhHKTsgLy8gYm9yZGVyIGZvciBoaWdobGlnaHRcblxuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBBbm5vdGF0aW9uIFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4kZ3NUZXh0Q29sb3JBTjogdmFyKC0tZ3NUZXh0Q29sb3JBTik7IC8vIFRleHQgY29sb3IgZm9yIGhpZ2hsaWdodFxuJGdzQmFja2dyb3VuZEFOOiB2YXIoLS1nc0JhY2tncm91bmRBTik7IC8vIGJhY2tncm91bmQgZm9yIGhpZ2hsaWdodFxuJGdzQm9yZGVyQU46IHZhcigtLWdzQm9yZGVyQU4pOyAvLyBib3JkZXIgZm9yIGhpZ2hsaWdodFxuXG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIFZhcmlhdGlvbiBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuJGdzVGV4dENvbG9yVkE6IHZhcigtLWdzVGV4dENvbG9yVkEpOyAvLyBUZXh0IGNvbG9yIGZvciBoaWdobGlnaHRcbiRnc0JhY2tncm91bmRWQTogdmFyKC0tZ3NCYWNrZ3JvdW5kVkEpOyAvLyBiYWNrZ3JvdW5kIGZvciBoaWdobGlnaHRcbiRnc0JvcmRlclZBOiB2YXIoLS1nc0JvcmRlclZBKTsgLy8gYm9yZGVyIGZvciBoaWdobGlnaHRcblxuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBQbHkgVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiRnc1RleHRDb2xvclBDOiB2YXIoLS1nc1RleHRDb2xvclBDKTsgLy8gVGV4dCBjb2xvciBmb3IgZ2FtZSBzY29yZSBwbHlcbiRnc0JhY2tncm91bmRQQzogdmFyKC0tZ3NCYWNrZ3JvdW5kUEMpOyAvLyBiYWNrZ3JvdW5kIGZvciBnYW1lIHNjb3JlIHBseVxuJGdzQm9yZGVyUEM6IHZhcigtLWdzQm9yZGVyUEMpOyAvLyBib3JkZXIgZm9yIGdhbWUgc2NvcmUgcGx5XG5cbi8qKioqKioqKioqKioqKioqKioqKiBDb250cm9sIENvbG9ycyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4kY3NCYWNrZ3JvdW5kOiB2YXIoLS1jc0JhY2tncm91bmQpOyAvLyBiYWNrZ3JvdW5kIGZvciBjb250cm9sc1xuJGNzQ29sb3I6IHZhcigtLWNzQ29sb3IpOyAvLyBjb250cm9scyBjb2xvciAoZm9yZWdyb3VuZClcblxuLyoqKioqKioqKioqKioqKioqKioqIEJvYXJkIENvbG9ycyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4kYm9hcmRCR0Rhcms6IHZhcigtLWJvYXJkQkdEYXJrKTsgLy8gYm9hcmQgZGFyayB0aWxlXG4kYm9hcmRCR0xpZ2h0OiB2YXIoLS1ib2FyZEJHTGlnaHQpOyAvLyBib2FyZCBsaWdodCB0aWxlXG4kYm9hcmRMYWJlbExpZ2h0OiB2YXIoLS1ib2FyZExhYmVsTGlnaHQpOyAvLyBib2FyZCBsaWdodCBsYWJlbFxuJGJvYXJkTGFiZWxEYXJrOiB2YXIoLS1ib2FyZExhYmVsRGFyayk7IC8vIGJvYXJkIGRhcmsgbGFiZWxcblxuLy8gR2VuZXJhbCBzdHVmZlxuJHRleHQtY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xuJGJnLW91dGVyOiB2YXIoLS1iZy1vdXRlcik7XG4kYmctaW5uZXI6IHZhcigtLWJnLWlubmVyKTtcblxuJGJnLWNvbG9yOiAjZjJmM2Y3O1xuJGZnLWNvbG9yOiAjMzgzYTQxO1xuXG4kZ2xvdy1zaGFkb3c6IDAgMCAwLjVlbSB0cmFuc3BhcmVudGl6ZSgkYmx1ZSwgMC4zKTtcblxuOnJvb3Qge1xuICAtLWJnLWNvbG9yOiAjeyRiZy1jb2xvcn07XG4gIC0tZmctY29sb3I6ICN7JGZnLWNvbG9yfTtcblxuICAtLXJlZDogI3skcmVkfTtcbiAgLS1ncmVlbjogI3skZ3JlZW59O1xuICAtLWJsdWU6ICN7JGJsdWV9O1xuICAtLWRhcmstYmx1ZTogI3skZGFyay1ibHVlfTtcbiAgLS1tYXJvb246ICN7JG1hcm9vbn07XG4gIC0tcHVycGxlOiAjeyRwdXJwbGV9O1xufVxuXG4vLyA6Oi1tb3otZm9jdXMtaW5uZXIsXG4vLyA6LW1vei1mb2N1c3Jpbmcge1xuLy8gICBib3JkZXI6IDA7XG4vLyAgIGNvbG9yOiB0cmFuc3BhcmVudDtcbi8vICAgdGV4dC1zaGFkb3c6IDAgMCAwICRmZy1jb2xvcjtcbi8vIH1cblxuLy8gOjpzZWxlY3Rpb24sXG4vLyA6Oi1tb3otc2VsZWN0aW9uIHtcbi8vICAgY29sb3I6IHdoaXRlO1xuLy8gICBiYWNrZ3JvdW5kOiBibGFjaztcbi8vIH1cblxuLy8gKiB7XG4vLyAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4vLyAgIG91dGxpbmU6IG5vbmU7XG4vLyAgIHVzZXItc2VsZWN0OiBub25lO1xuLy8gICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XG4vLyAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4vLyAgIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTtcbi8vICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbi8vICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuLy8gICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4vLyAgIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbi8vICAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApICFpbXBvcnRhbnQ7XG4vLyAgIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcbi8vICAgY3Vyc29yOiBkZWZhdWx0O1xuLy8gICBsZXR0ZXItc3BhY2luZzogMDtcbi8vIH1cblxuLy8gLnNlbGVjdGFibGUsXG4vLyAuc2VsZWN0YWJsZSAqIHtcbi8vICAgY3Vyc29yOiBhdXRvO1xuLy8gICB1c2VyLXNlbGVjdDogdGV4dDtcbi8vICAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiB0ZXh0O1xuLy8gICAtd2Via2l0LXVzZXItc2VsZWN0OiB0ZXh0O1xuLy8gICAta2h0bWwtdXNlci1zZWxlY3Q6IHRleHQ7XG4vLyAgIC1tb3otdXNlci1zZWxlY3Q6IHRleHQ7XG4vLyAgIC1tcy11c2VyLXNlbGVjdDogdGV4dDtcbi8vIH1cblxuLy8gaHRtbCxcbi8vIGJvZHkge1xuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmctY29sb3I7XG4vLyAgIGNvbG9yOiAkZmctY29sb3I7XG4vLyAgIG1hcmdpbjogMDtcbi8vICAgcGFkZGluZzogMDtcbi8vICAgZm9udC1zaXplOiAxMHB0O1xuLy8gICBoZWlnaHQ6IDEwMCU7XG4vLyAgIG92ZXJmbG93OiBhdXRvO1xuLy8gfVxuXG4vLyAud2l0aC1zaGFkb3cge1xuLy8gICBib3gtc2hhZG93OiA2cHggNnB4IDEwcHggdHJhbnNwYXJlbnRpemUoYmxhY2ssIDAuOSksIC02cHggLTZweCAxMHB4IHdoaXRlO1xuLy8gfVxuXG4vLyAub3V0c2V0IHtcbi8vICAgQGV4dGVuZCAud2l0aC1zaGFkb3c7XG5cbi8vICAgYm9yZGVyLXJhZGl1czogMTBweDtcbi8vICAgYmFja2dyb3VuZDogJGJnLWNvbG9yO1xuLy8gfVxuXG4vLyAuaW5zZXQge1xuLy8gICBib3JkZXItcmFkaXVzOiAxMHB4O1xuLy8gICBib3gtc2hhZG93OiAwIDAgdHJhbnNwYXJlbnQsIDAgMCB0cmFuc3BhcmVudCxcbi8vICAgICBpbnNldCAzcHggM3B4IDVweCB0cmFuc3BhcmVudGl6ZShibGFjaywgMC45KSwgaW5zZXQgLTNweCAtM3B4IDVweCB3aGl0ZTtcbi8vICAgYmFja2dyb3VuZDogbGlnaHRlbigkYmctY29sb3IsIDIlKTtcbi8vIH1cblxuLy8gLnBhcGVyIHtcbi8vICAgQGV4dGVuZCAub3V0c2V0O1xuLy8gICBwYWRkaW5nOiAxMHB4IDIwcHggMjBweDtcbi8vICAgbWFyZ2luLXRvcDogMjBweDtcbi8vICAgbWluLWhlaWdodDogMTAwcHg7XG4vLyAgIGZvbnQtc2l6ZTogMS4yZW07XG4vLyAgIGJhY2tncm91bmQ6ICRiZy1jb2xvcjtcbi8vIH1cblxuLy8gc2VjdGlvbixcbi8vIGFydGljbGUsXG4vLyAuc2VjdGlvbixcbi8vIC5hcnRpY2xlLFxuLy8gLnBhcGVyIHtcbi8vICAgbGluZS1oZWlnaHQ6IDJlbTtcbi8vICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuLy8gICB3b3JkLWJyZWFrOiBub3JtYWw7XG4vLyAgIGxpbmUtaGVpZ2h0OiAyZW07XG4vLyB9XG5cbi8vIGlucHV0W3R5cGU9XCJ0ZXh0XCJdLFxuLy8gaW5wdXRbdHlwZT1cInNlYXJjaFwiXSxcbi8vIGlucHV0W3R5cGU9XCJ0ZWxcIl0sXG4vLyBpbnB1dFt0eXBlPVwidXJsXCJdLFxuLy8gaW5wdXRbdHlwZT1cImVtYWlsXCJdLFxuLy8gaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJdLFxuLy8gaW5wdXRbdHlwZT1cImRhdGVcIl0sXG4vLyBpbnB1dFt0eXBlPVwibW9udGhcIl0sXG4vLyBpbnB1dFt0eXBlPVwid2Vla1wiXSxcbi8vIGlucHV0W3R5cGU9XCJ0aW1lXCJdLFxuLy8gaW5wdXRbdHlwZT1cIm51bWJlclwiXSxcbi8vIGlucHV0W3R5cGU9XCJjb2xvclwiXSxcbi8vIHNlbGVjdCxcbi8vIHRleHRhcmVhIHtcbi8vICAgYm9yZGVyOiAwO1xuLy8gICBiYWNrZ3JvdW5kOiAkYmctY29sb3I7XG4vLyAgIGNvbG9yOiAkZmctY29sb3I7XG4vLyAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4vLyAgIHBhZGRpbmc6IDAgMS4yNWVtO1xuLy8gICBsaW5lLWhlaWdodDogMS4yNWVtO1xuLy8gICBoZWlnaHQ6IDMuNWVtO1xuLy8gICBtYXJnaW46IDEwcHggMDtcbi8vICAgZm9udC1zaXplOiAxLjFyZW07XG4vLyAgIGN1cnNvcjogdGV4dDtcbi8vICAgdXNlci1zZWxlY3Q6IHRleHQ7XG4vLyAgIC13ZWJraXQtdG91Y2gtY2FsbG91dDogdGV4dDtcbi8vICAgLXdlYmtpdC11c2VyLXNlbGVjdDogdGV4dDtcbi8vICAgLWtodG1sLXVzZXItc2VsZWN0OiB0ZXh0O1xuLy8gICAtbW96LXVzZXItc2VsZWN0OiB0ZXh0O1xuLy8gICAtbXMtdXNlci1zZWxlY3Q6IHRleHQ7XG4vLyAgIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC4ycztcblxuLy8gICAmOm5vdChzZWxlY3QpIHtcbi8vICAgICBAZXh0ZW5kIC5pbnNldDtcblxuLy8gICAgICY6Zm9jdXMge1xuLy8gICAgICAgQGV4dGVuZCAub3V0c2V0O1xuLy8gICAgIH1cbi8vICAgfVxuLy8gfVxuXG4vLyB0ZXh0YXJlYSB7XG4vLyAgIGhlaWdodDogMzUwcHg7XG4vLyAgIHBhZGRpbmc6IDEuMjVlbTtcbi8vIH1cblxuLy8gc2VsZWN0IHtcbi8vICAgQGV4dGVuZCAub3V0c2V0O1xuXG4vLyAgIGN1cnNvcjogcG9pbnRlcjtcbi8vICAgYmFja2dyb3VuZDogdXJsKGRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjJaWEp6YVc5dVBTSXhMakVpSUhacFpYZENiM2c5SWpBZ01DQXhPU0F4T1NJZ2VHMXNibk05SW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTHpJd01EQXZjM1puSWo0OFp5QjBjbUZ1YzJadmNtMDlJbTFoZEhKcGVDZ3VNRE0wSURBZ01DQXVNRE0wSUMwMkxqZ2dNUzQzWlMwMUtTSWdjM1I1YkdVOUltWnBiR3c2SXpkaU4yVTRZeUkrUEhCaGRHZ2daRDBpYlRRNE1DQXpORFF0TWpFeExUSXhNbU10TVRZdE1UWXROREV0TVRZdE5UY2dNQzB4TmlBeE5pMHhOaUEwTWlBd0lEVTNiREl6T0NBeU16bGpPQzQwSURndU5TQXlNQ0F4TWlBek1TQXhNaUF4TVNBd0xqVTJJREl5TFRNdU1pQXpNUzB4TW13eU16Z3RNak01WXpFMkxURTJJREUyTFRReUlEQXROVGR6TFRReExURTJMVFUzSURCNklpQnpkSGxzWlQwaVptbHNiRG9qTjJJM1pUaGpJaTgrUEM5blBqd3ZjM1puUGdvPSlcbi8vICAgICBuby1yZXBlYXQgcmlnaHQgMWVtIGNlbnRlcjtcbi8vICAgYmFja2dyb3VuZC1zaXplOiAxLjJlbTtcbi8vICAgcGFkZGluZy1yaWdodDogM2VtO1xuLy8gfVxuXG4vLyBpbnB1dDo6cGxhY2Vob2xkZXIsXG4vLyB0ZXh0YXJlYTo6cGxhY2Vob2xkZXIge1xuLy8gICBvcGFjaXR5OiAxO1xuLy8gICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnM7XG4vLyAgIGNvbG9yOiBpbmhlcml0O1xuLy8gfVxuXG4vLyBpbnB1dDpmb2N1czo6cGxhY2Vob2xkZXIsXG4vLyB0ZXh0YXJlYTpmb2N1czo6cGxhY2Vob2xkZXIge1xuLy8gICBvcGFjaXR5OiAwLjI7XG4vLyB9XG5cbi8vIGlucHV0Oi1tcy1pbnB1dC1wbGFjZWhvbGRlcixcbi8vIHRleHRhcmVhOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4vLyAgIG9wYWNpdHk6IDE7XG4vLyAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycztcbi8vICAgY29sb3I6IGluaGVyaXQ7XG4vLyB9XG5cbi8vIGlucHV0OmZvY3VzOi1tcy1pbnB1dC1wbGFjZWhvbGRlcixcbi8vIHRleHRhcmVhOmZvY3VzOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4vLyAgIG9wYWNpdHk6IDAuMjtcbi8vIH1cblxuLy8gaW5wdXRbdHlwZT1cInNlYXJjaFwiXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbixcbi8vIGlucHV0W3R5cGU9XCJzZWFyY2hcIl06Oi13ZWJraXQtc2VhcmNoLWNhbmNlbC1idXR0b24sXG4vLyBpbnB1dFt0eXBlPVwic2VhcmNoXCJdOjotd2Via2l0LXNlYXJjaC1yZXN1bHRzLWJ1dHRvbixcbi8vIGlucHV0W3R5cGU9XCJzZWFyY2hcIl06Oi13ZWJraXQtc2VhcmNoLXJlc3VsdHMtZGVjb3JhdGlvbiB7XG4vLyAgIGRpc3BsYXk6IG5vbmU7XG4vLyB9XG5cbi8vIGJ1dHRvbixcbi8vIGlucHV0W3R5cGU9XCJidXR0b25cIl0sXG4vLyBpbnB1dFt0eXBlPVwic3VibWl0XCJdLFxuLy8gaW5wdXRbdHlwZT1cInJlc2V0XCJdIHtcbi8vICAgQGV4dGVuZCAub3V0c2V0O1xuXG4vLyAgIGJvcmRlcjogMDtcbi8vICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4vLyAgIHBhZGRpbmc6IDEwcHggMDtcbi8vICAgd2lkdGg6IDhlbTtcbi8vICAgdGV4dC1hbGlnbjogY2VudGVyO1xuLy8gICBjdXJzb3I6IHBvaW50ZXI7XG4vLyAgIGNvbG9yOiBpbmhlcml0O1xuLy8gICBmb250LXNpemU6IDEuMXJlbTtcbi8vICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYmFja2dyb3VuZC1jb2xvciwgYm94LXNoYWRvdztcbi8vICAgdHJhbnNpdGlvbi1kZWxheTogMC4ycztcbi8vICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4ycztcblxuLy8gICAmLmFjdGl2ZSxcbi8vICAgJjphY3RpdmUge1xuLy8gICAgIEBleHRlbmQgLmluc2V0O1xuXG4vLyAgICAgdHJhbnNpdGlvbi1kZWxheTogMHM7XG4vLyAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4xcztcbi8vICAgfVxuXG4vLyAgIEBlYWNoICRuYW1lLCAkY29sb3IgaW4gKFwicmVkXCI6ICRyZWQsIFwiZ3JlZW5cIjogJGdyZWVuLCBcImJsdWVcIjogJGJsdWUpIHtcbi8vICAgICBAYXQtcm9vdCAuI3skbmFtZX0tYnV0dG9uLFxuLy8gICAgICAgJi4jeyRuYW1lfS1idXR0b24ge1xuLy8gICAgICAgQGV4dGVuZCBidXR0b247XG5cbi8vICAgICAgICRfYmctaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsICRjb2xvciAzMCUsIGxpZ2h0ZW4oJGNvbG9yLCA2JSkgODAlKTtcblxuLy8gICAgICAgY29sb3I6IHdoaXRlO1xuLy8gICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4vLyAgICAgICB0ZXh0LXNoYWRvdzogMCAwLjFlbSAwLjFlbSB0cmFuc3BhcmVudGl6ZShibGFjaywgMC4zKTtcbi8vICAgICAgIGJhY2tncm91bmQ6ICRfYmctaW1hZ2U7XG4vLyAgICAgICBib3gtc2hhZG93OiAwIDAgMC41ZW0gdHJhbnNwYXJlbnRpemUoJGNvbG9yLCAwLjMpLCAwIDAgdHJhbnNwYXJlbnQsXG4vLyAgICAgICAgIGluc2V0IDAgLTVweCAwIHRyYW5zcGFyZW50aXplKGJsYWNrLCAwLjk1KSxcbi8vICAgICAgICAgaW5zZXQgMCAycHggMCB0cmFuc3BhcmVudGl6ZSh3aGl0ZSwgMC44KTtcbi8vICAgICAgIGJvcmRlci1yYWRpdXM6IDZweCA2cHggOHB4IDhweDtcbi8vICAgICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGJveC1zaGFkb3csIGJvcmRlci1yYWRpdXM7XG5cbi8vICAgICAgICYuYWN0aXZlLFxuLy8gICAgICAgJjphY3RpdmUge1xuLy8gICAgICAgICBiYWNrZ3JvdW5kOiAkX2JnLWltYWdlO1xuLy8gICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4vLyAgICAgICAgIGJveC1zaGFkb3c6IDAgMCB0cmFuc3BhcmVudCwgMCAwIHRyYW5zcGFyZW50LFxuLy8gICAgICAgICAgIGluc2V0IDAgMnB4IDVweCAycHggdHJhbnNwYXJlbnRpemUoYmxhY2ssIDAuOCk7XG4vLyAgICAgICB9XG4vLyAgICAgfVxuLy8gICB9XG4vLyB9XG5cbi8vIGxhYmVsIHtcbi8vICAgJixcbi8vICAgJiAqIHtcbi8vICAgICBjdXJzb3I6IHBvaW50ZXI7XG4vLyAgIH1cblxuLy8gICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4vLyAgIHBhZGRpbmc6IDAuNTZlbSAwO1xuLy8gfVxuXG4vLyBhIHtcbi8vICAgJixcbi8vICAgJjpsaW5rLFxuLy8gICAmOnZpc2l0ZWQsXG4vLyAgICY6aG92ZXIgJjphY3RpdmUge1xuLy8gICAgICYsXG4vLyAgICAgJiAqIHtcbi8vICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbi8vICAgICB9XG5cbi8vICAgICBmb250LXdlaWdodDogYm9sZDtcbi8vICAgICBjb2xvcjogJGJsdWU7XG4vLyAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4vLyAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuLy8gICB9XG4vLyB9XG5cbi8vIGgxLFxuLy8gaDIsXG4vLyBoMyxcbi8vIGg0LFxuLy8gaDUsXG4vLyBoNiB7XG4vLyAgIGxpbmUtaGVpZ2h0OiAxLjVlbTtcbi8vIH1cblxuLy8gaDEge1xuLy8gICBmb250LXNpemU6IDRlbTtcbi8vICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4vLyAgIG1hcmdpbjogMC43ZW0gMDtcbi8vIH1cblxuLy8gaDIge1xuLy8gICBmb250LXNpemU6IDNlbTtcbi8vICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4vLyAgIG1hcmdpbjogMC44ZW0gMDtcbi8vIH1cblxuLy8gaDMge1xuLy8gICBmb250LXNpemU6IDIuNWVtO1xuLy8gICBmb250LXdlaWdodDogbGlnaHRlcjtcbi8vICAgbWFyZ2luOiAwLjllbSAwO1xuLy8gfVxuXG4vLyBoNCB7XG4vLyAgIGZvbnQtc2l6ZTogMmVtO1xuLy8gICBmb250LXdlaWdodDogbGlnaHRlcjtcbi8vICAgbWFyZ2luOiAxZW0gMDtcbi8vIH1cblxuLy8gaDUge1xuLy8gICBtYXJnaW46IDAuNWVtIDA7XG4vLyAgIGZvbnQtc2l6ZTogMS4yZW07XG4vLyAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4vLyB9XG5cbi8vIGg2IHtcbi8vICAgbWFyZ2luOiAxZW0gMCAxZW0gMS40ZW07XG4vLyAgIGZvbnQtc2l6ZTogMWVtO1xuLy8gICBmb250LXdlaWdodDogYm9sZDtcbi8vIH1cblxuLy8gaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdLFxuLy8gaW5wdXRbdHlwZT1cInJhZGlvXCJdIHtcbi8vICAgJF9ib3JkZXItd2lkdGg6IDAuMTVlbTtcbi8vICAgJF9ib3gtc2hhZG93OiAycHggMnB4IDNweCB0cmFuc3BhcmVudGl6ZShibGFjaywgMC44KSwgLTJweCAtMnB4IDNweCB3aGl0ZSxcbi8vICAgICBpbnNldCAxcHggMXB4IDJweCB0cmFuc3BhcmVudGl6ZShibGFjaywgMC44KSwgaW5zZXQgLTFweCAtMXB4IDJweCB3aGl0ZTtcbi8vICAgZm9udC1zaXplOiAxZW07XG4vLyAgIGN1cnNvcjogcG9pbnRlcjtcbi8vICAgaGVpZ2h0OiAxLjJlbTtcbi8vICAgd2lkdGg6IDEuMmVtO1xuLy8gICBtYXJnaW46IDAgMC4zZW07XG4vLyAgIGJveC1zaGFkb3c6ICRfYm94LXNoYWRvdztcbi8vICAgYm9yZGVyOiAkX2JvcmRlci13aWR0aCBzb2xpZCAkYmctY29sb3I7XG4vLyAgIHZlcnRpY2FsLWFsaWduOiB0ZXh0LWJvdHRvbTtcbi8vICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYmFja2dyb3VuZCwgYm94LXNoYWRvdztcbi8vICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4ycztcblxuLy8gICAmOmFjdGl2ZSB7XG4vLyAgICAgYm94LXNoYWRvdzogJF9ib3gtc2hhZG93LCBpbnNldCAwIDAuMWVtIDAuMjVlbSB0cmFuc3BhcmVudGl6ZShibGFjaywgMC44KTtcbi8vICAgfVxuXG4vLyAgICY6Y2hlY2tlZCB7XG4vLyAgICAgYm9yZGVyLXdpZHRoOiAwLjFlbTtcbi8vICAgICBib3JkZXItY29sb3I6IGRhcmtlbigkYmx1ZSwgMTAlKTtcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmx1ZTtcbi8vICAgfVxuLy8gfVxuXG4vLyBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0ge1xuLy8gICBib3JkZXItcmFkaXVzOiAyNSU7XG5cbi8vICAgJjpjaGVja2VkIHtcbi8vICAgICBib3gtc2hhZG93OiAkZ2xvdy1zaGFkb3csIGluc2V0IDAgLTAuMWVtIDAgdHJhbnNwYXJlbnRpemUoYmxhY2ssIDAuOCksXG4vLyAgICAgICBpbnNldCAwIDAuMWVtIDAuMWVtIHRyYW5zcGFyZW50aXplKHdoaXRlLCAwLjgpO1xuLy8gICB9XG4vLyB9XG5cbi8vIGlucHV0W3R5cGU9XCJyYWRpb1wiXSB7XG4vLyAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG5cbi8vICAgJjpjaGVja2VkIHtcbi8vICAgICBib3gtc2hhZG93OiAkZ2xvdy1zaGFkb3c7XG4vLyAgICAgYm94LXNoYWRvdzogJGdsb3ctc2hhZG93LCBpbnNldCAwIDAuMTJlbSAwLjFlbSB0cmFuc3BhcmVudGl6ZSh3aGl0ZSwgMC43NSk7XG4vLyAgICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMC4xNWVtO1xuLy8gICB9XG4vLyB9XG5cbi8vIC5jaGVja3RleHQge1xuLy8gICB3aWR0aDogYXV0bztcbi8vICAgbWFyZ2luOiAwLjVlbTtcblxuLy8gICBpbnB1dCB7XG4vLyAgICAgZGlzcGxheTogbm9uZTtcblxuLy8gICAgICsgc3BhbiB7XG4vLyAgICAgICBAZXh0ZW5kIGJ1dHRvbjtcblxuLy8gICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4vLyAgICAgICBwYWRkaW5nOiAxZW07XG4vLyAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwcztcbi8vICAgICB9XG5cbi8vICAgICAmOmNoZWNrZWQgKyBzcGFuIHtcbi8vICAgICAgIEBleHRlbmQgLmJsdWUtYnV0dG9uO1xuXG4vLyAgICAgICBwYWRkaW5nOiAxZW07XG4vLyAgICAgfVxuLy8gICB9XG4vLyB9XG5cbi8vIC5zd2l0Y2gge1xuLy8gICAkX2hlaWdodDogMnJlbTtcbi8vICAgJF93aWR0aDogOHJlbTtcbi8vICAgJF9oYW5kbGUtd2lkdGg6ICRfaGVpZ2h0O1xuLy8gICAkX2hhbmRsZS10cmFuc2xhdGlvbjogJF93aWR0aCAtICRfaGFuZGxlLXdpZHRoO1xuXG4vLyAgIGhlaWdodDogJF9oZWlnaHQ7XG4vLyAgIHdpZHRoOiAkX3dpZHRoO1xuLy8gICBwYWRkaW5nOiAwO1xuLy8gICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbi8vICAgaW5wdXQge1xuLy8gICAgIGRpc3BsYXk6IG5vbmU7XG5cbi8vICAgICArIGRpdiB7XG4vLyAgICAgICBoZWlnaHQ6IDEwMCU7XG4vLyAgICAgICB3aWR0aDogMTAwJTtcbi8vICAgICAgIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xuLy8gICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4vLyAgICAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBib3gtc2hhZG93LCBiYWNrZ3JvdW5kLWNvbG9yO1xuLy8gICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4ycztcbi8vICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuMnM7XG4vLyAgICAgICBib3gtc2hhZG93OiAzcHggM3B4IDJweCAtMnB4IHRyYW5zcGFyZW50aXplKGJsYWNrLCAwLjkpLFxuLy8gICAgICAgICBpbnNldCAycHggMnB4IDJweCAxcHggdHJhbnNwYXJlbnRpemUoYmxhY2ssIDAuOSksXG4vLyAgICAgICAgIGluc2V0IC0ycHggLTJweCAxcHggd2hpdGU7XG5cbi8vICAgICAgICY6OmJlZm9yZSB7XG4vLyAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4vLyAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuLy8gICAgICAgICBoZWlnaHQ6IGNhbGMoI3skX2hhbmRsZS13aWR0aH0gKyA0cHgpO1xuLy8gICAgICAgICB3aWR0aDogY2FsYygjeyRfaGFuZGxlLXdpZHRofSArIDRweCk7XG4vLyAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4vLyAgICAgICAgIGJvcmRlcjogc29saWQgd2hpdGUgM3B4O1xuLy8gICAgICAgICBiYWNrZ3JvdW5kOiAkYmx1ZTtcbi8vICAgICAgICAgYm94LXNoYWRvdzogMCAzcHggMTBweCB0cmFuc3BhcmVudGl6ZShibGFjaywgMC44KSxcbi8vICAgICAgICAgICBpbnNldCAwIC0xcHggM3B4IHRyYW5zcGFyZW50aXplKGJsYWNrLCAwLjkpO1xuLy8gICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNnB4KTtcbi8vICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnM7XG4vLyAgICAgICB9XG4vLyAgICAgfVxuXG4vLyAgICAgJjpjaGVja2VkICsgZGl2IHtcbi8vICAgICAgIGJhY2tncm91bmQ6ICRibHVlO1xuLy8gICAgICAgYm94LXNoYWRvdzogJGdsb3ctc2hhZG93LCBpbnNldCAwIDJweCAycHggMnB4IHRyYW5zcGFyZW50aXplKGJsYWNrLCAwLjcpLFxuLy8gICAgICAgICBpbnNldCAwIDAgdHJhbnNwYXJlbnQ7XG5cbi8vICAgICAgICY6OmJlZm9yZSB7XG4vLyAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKCRfaGFuZGxlLXRyYW5zbGF0aW9uLCAtNnB4KTtcbi8vICAgICAgIH1cbi8vICAgICB9XG4vLyAgIH1cbi8vIH1cblxuLy8gaHIge1xuLy8gICBAZXh0ZW5kIC5pbnNldDtcbi8vICAgd2lkdGg6IDcyJTtcbi8vICAgaGVpZ2h0OiA4cHg7XG4vLyAgIGZsb2F0OiByaWdodDtcbi8vICAgYm9yZGVyOiAwO1xuLy8gfVxuXG4vLyBjb2RlLFxuLy8gcHJlIHtcbi8vICAgcGFkZGluZzogMC41ZW0gMWVtO1xuLy8gICBib3JkZXItcmFkaXVzOiA0cHg7XG4vLyAgIG92ZXJmbG93OiBhdXRvO1xuLy8gICBib3gtc2hhZG93OiAwIDVweCAzMHB4IDAgdHJhbnNwYXJlbnRpemUoYmxhY2ssIDAuOTUpO1xuLy8gfVxuXG4vLyBjb2RlIHtcbi8vICAgYmFja2dyb3VuZDogI2U2ZTZlNjtcbi8vIH1cblxuLy8gcHJlIHtcbi8vICAgYmFja2dyb3VuZDogd2hpdGU7XG4vLyAgIG1hcmdpbjogNGVtIDA7XG4vLyB9XG5cbi8vIGNvZGUsXG4vLyBwcmUge1xuLy8gICAmLFxuLy8gICAmICoge1xuLy8gICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuLy8gICAgIGxpbmUtaGVpZ2h0OiAyZW07XG4vLyAgICAgY3Vyc29yOiBhdXRvO1xuLy8gICAgIHVzZXItc2VsZWN0OiB0ZXh0O1xuLy8gICAgIC13ZWJraXQtdG91Y2gtY2FsbG91dDogdGV4dDtcbi8vICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiB0ZXh0O1xuLy8gICAgIC1raHRtbC11c2VyLXNlbGVjdDogdGV4dDtcbi8vICAgICAtbW96LXVzZXItc2VsZWN0OiB0ZXh0O1xuLy8gICAgIC1tcy11c2VyLXNlbGVjdDogdGV4dDtcbi8vICAgfVxuLy8gfVxuXG4vLyBibG9ja3F1b3RlIHtcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4vLyAgIHBhZGRpbmc6IDAuNWVtIDFlbTtcbi8vICAgYm9yZGVyLXJhZGl1czogNHB4O1xuLy8gICBib3gtc2hhZG93OiAwIDVweCAzMHB4IDAgdHJhbnNwYXJlbnRpemUoYmxhY2ssIDAuOTUpO1xuLy8gICBib3JkZXItbGVmdDogNnB4IHNvbGlkICRibHVlO1xuLy8gfVxuIiwiQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdDYXZlYXQnO1xuICAgIHNyYzogdXJsKCcuLi8uLi9mb250cy9Cb2xkL0NhdmVhdC1Cb2xkLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxuICAgICAgICB1cmwoJy4uLy4uL2ZvbnRzL0JvbGQvQ2F2ZWF0LUJvbGQud29mZicpIGZvcm1hdCgnd29mZicpO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LWRpc3BsYXk6IHN3YXA7XG59XG5cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnQ2F2ZWF0JztcbiAgICBzcmM6IHVybCgnLi4vLi4vZm9udHMvUmVndWxhci9DYXZlYXQtUmVndWxhci53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcbiAgICAgICAgdXJsKCcuLi8uLi9mb250cy9SZWd1bGFyL0NhdmVhdC1SZWd1bGFyLndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LWRpc3BsYXk6IHN3YXA7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ0ZpZ3VyaW5lU3ltYm9sVDEnO1xuICBzcmM6IHVybCgnLi4vLi4vZm9udHMvM3JkIFBhcnR5L0NoZXNzVmFyaWFudHMvRmlndXJpbmVTeW1ib2xUMUJvbGQud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXG4gICAgICB1cmwoJy4uLy4uL2ZvbnRzLzNyZCBQYXJ0eS9DaGVzc1ZhcmlhbnRzL0ZpZ3VyaW5lU3ltYm9sVDFCb2xkLndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdGaWd1cmluZVN5bWJvbFQxJztcbiAgc3JjOiB1cmwoJy4uLy4uL2ZvbnRzLzNyZCBQYXJ0eS9DaGVzc1ZhcmlhbnRzL0ZpZ3VyaW5lU3ltYm9sVDEud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXG4gICAgICB1cmwoJy4uLy4uL2ZvbnRzLzNyZCBQYXJ0eS9DaGVzc1ZhcmlhbnRzL0ZpZ3VyaW5lU3ltYm9sVDEud29mZicpIGZvcm1hdCgnd29mZicpO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbn1cblxuIiwiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkNhdmVhdFwiO1xuICBzcmM6IHVybChcIi4uLy4uL2ZvbnRzL0JvbGQvQ2F2ZWF0LUJvbGQud29mZjJcIikgZm9ybWF0KFwid29mZjJcIiksIHVybChcIi4uLy4uL2ZvbnRzL0JvbGQvQ2F2ZWF0LUJvbGQud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiQ2F2ZWF0XCI7XG4gIHNyYzogdXJsKFwiLi4vLi4vZm9udHMvUmVndWxhci9DYXZlYXQtUmVndWxhci53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKSwgdXJsKFwiLi4vLi4vZm9udHMvUmVndWxhci9DYXZlYXQtUmVndWxhci53b2ZmXCIpIGZvcm1hdChcIndvZmZcIik7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkZpZ3VyaW5lU3ltYm9sVDFcIjtcbiAgc3JjOiB1cmwoXCIuLi8uLi9mb250cy8zcmQgUGFydHkvQ2hlc3NWYXJpYW50cy9GaWd1cmluZVN5bWJvbFQxQm9sZC53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKSwgdXJsKFwiLi4vLi4vZm9udHMvM3JkIFBhcnR5L0NoZXNzVmFyaWFudHMvRmlndXJpbmVTeW1ib2xUMUJvbGQud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiRmlndXJpbmVTeW1ib2xUMVwiO1xuICBzcmM6IHVybChcIi4uLy4uL2ZvbnRzLzNyZCBQYXJ0eS9DaGVzc1ZhcmlhbnRzL0ZpZ3VyaW5lU3ltYm9sVDEud29mZjJcIikgZm9ybWF0KFwid29mZjJcIiksIHVybChcIi4uLy4uL2ZvbnRzLzNyZCBQYXJ0eS9DaGVzc1ZhcmlhbnRzL0ZpZ3VyaW5lU3ltYm9sVDEud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbn1cbi8qKioqKioqKioqKioqKioqKioqIE1lbnUgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIENvbnRhaW5lciBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBDb250YWluZXIgVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgQ29udGFpbmVyIFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIEhpZ2hsaWdodCBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBBbm5vdGF0aW9uIFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIFZhcmlhdGlvbiBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBQbHkgVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqKiBDb250cm9sIENvbG9ycyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKiogQm9hcmQgQ29sb3JzICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbjpyb290IHtcbiAgLS1iZy1jb2xvcjogI2YyZjNmNztcbiAgLS1mZy1jb2xvcjogIzM4M2E0MTtcbiAgLS1yZWQ6ICNlNDMwMzA7XG4gIC0tZ3JlZW46ICMxOWExODc7XG4gIC0tYmx1ZTogIzM2N2JmMDtcbiAgLS1kYXJrLWJsdWU6ICMyNjVhYjE7XG4gIC0tbWFyb29uOiAjYjgxNzRjO1xuICAtLXB1cnBsZTogIzhjNDJhYjtcbn1cblxuLmNvbnRyb2wtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uY29sb3ItaW5wdXQge1xuICBoZWlnaHQ6IDUuNWVtO1xuICB3aWR0aDogNS41ZW07XG4gIG1hcmdpbi10b3A6IDRweDtcbiAgbWFyZ2luLWxlZnQ6IDRweDtcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICBmbG9hdDogbGVmdDtcbn1cblxuLnJlZCB7XG4gIGZsb2F0OiByaWdodDtcbiAgY29sb3I6ICNmZjAwMDA7XG4gIG1hcmdpbi1yaWdodDogOHB4O1xufVxuXG4uZ3JlZW4ge1xuICBmbG9hdDogcmlnaHQ7XG4gIGNvbG9yOiAjMDBmZjAwO1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbn1cblxuLmJsdWUge1xuICBmbG9hdDogcmlnaHQ7XG4gIGNvbG9yOiAjMDNmNmY2O1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbn1cblxuLnJnYi1yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbG9hdDogcmlnaHQ7XG4gIGZvbnQtc2l6ZTogMTRwdDtcbiAgbWFyZ2luLXRvcDogMTZweDtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgbWFyZ2luLXJpZ2h0OiA0cHg7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSA2ZW0gKyA4cHgpO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiB2YXIoLS1nc1RleHRDb2xvcik7XG4gIHdvcmQtd3JhcDogbm9uZTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3cteTogdmlzaWJsZTtcbn1cblxuLnRpdGxlLXJvdyB7XG4gIGZsb2F0OiBub25lO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMTJweDtcbiAgbGVmdDogODJweDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBtYXJnaW4tdG9wOiAxNnB4O1xuICBtYXJnaW4tbGVmdDogOHB4O1xuICBtYXJnaW4tcmlnaHQ6IDRweDtcbiAgZm9udC1zaXplOiAxNHB0O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB3aWR0aDogY2FsYygxMDAlIC0gNS41ZW0gKyA4cHgpO1xuICBjb2xvcjogdmFyKC0tZ3NUZXh0Q29sb3IpO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ColorSelectComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'color-select',
                templateUrl: './color-select.component.html',
                styleUrls: ['./color-select.component.scss']
            }]
    }], function () { return [{ type: _services_colors_service__WEBPACK_IMPORTED_MODULE_1__["ColorService"] }]; }, { title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], variableName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], color: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], rValue: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], gValue: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], bValue: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/olga-menu/controls/layout-mode-select/layout-mode-select.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/olga-menu/controls/layout-mode-select/layout-mode-select.component.ts ***!
  \***************************************************************************************/
/*! exports provided: LayoutModeSelectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutModeSelectComponent", function() { return LayoutModeSelectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class LayoutModeSelectComponent {
    constructor() { }
    ngOnInit() {
    }
}
LayoutModeSelectComponent.ɵfac = function LayoutModeSelectComponent_Factory(t) { return new (t || LayoutModeSelectComponent)(); };
LayoutModeSelectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LayoutModeSelectComponent, selectors: [["app-layout-mode-select"]], decls: 2, vars: 0, template: function LayoutModeSelectComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "layout-mode-select works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29sZ2EtbWVudS9jb250cm9scy9sYXlvdXQtbW9kZS1zZWxlY3QvbGF5b3V0LW1vZGUtc2VsZWN0LmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LayoutModeSelectComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-layout-mode-select',
                templateUrl: './layout-mode-select.component.html',
                styleUrls: ['./layout-mode-select.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/olga-menu/gamescore-menu/gamescore-menu.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/olga-menu/gamescore-menu/gamescore-menu.component.ts ***!
  \**********************************************************************/
/*! exports provided: GamescoreMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GamescoreMenuComponent", function() { return GamescoreMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_colors_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/colors.service */ "./src/app/services/colors.service.ts");
/* harmony import */ var _services_olga_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/olga.service */ "./src/app/services/olga.service.ts");




const _c0 = ["container"];
class GamescoreMenuComponent {
    constructor(colors, olga) {
        this.colors = colors;
        this.olga = olga;
        this.container = null;
    }
    ngOnInit() { }
    ngAfterViewInit() {
    }
    toggleFont() {
        this.olga.figurineNotation.next(!this.olga.figurineNotation.value);
        console.log('Figurine Font:');
        console.log(this.olga.figurineNotation.value);
    }
    hide() {
        if (this.olga) {
            this.olga.reRenderBoard();
        }
        if (this.container) {
            this.container.nativeElement.style.visibility = 'hidden';
        }
    }
    show() {
        if (this.container) {
            this.container.nativeElement.style.visibility = 'visible';
        }
    }
    resize(width, height) {
    }
}
GamescoreMenuComponent.ɵfac = function GamescoreMenuComponent_Factory(t) { return new (t || GamescoreMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_colors_service__WEBPACK_IMPORTED_MODULE_1__["ColorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_olga_service__WEBPACK_IMPORTED_MODULE_2__["OlgaService"])); };
GamescoreMenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GamescoreMenuComponent, selectors: [["gamescore-menu"]], viewQuery: function GamescoreMenuComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.container = _t.first);
    } }, decls: 4, vars: 0, consts: [[1, "menu-container"], ["container", ""], [3, "click"]], template: function GamescoreMenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GamescoreMenuComponent_Template_button_click_2_listener() { return ctx.toggleFont(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Toggle Font");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["@font-face {\n  font-family: \"Caveat\";\n  src: url('Caveat-Bold.woff2') format(\"woff2\"), url('Caveat-Bold.woff') format(\"woff\");\n  font-weight: bold;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"Caveat\";\n  src: url('Caveat-Regular.woff2') format(\"woff2\"), url('Caveat-Regular.woff') format(\"woff\");\n  font-weight: 600;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"FigurineSymbolT1\";\n  src: url('FigurineSymbolT1Bold.woff2') format(\"woff2\"), url('FigurineSymbolT1Bold.woff') format(\"woff\");\n  font-weight: bold;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"FigurineSymbolT1\";\n  src: url('FigurineSymbolT1.woff2') format(\"woff2\"), url('FigurineSymbolT1.woff') format(\"woff\");\n  font-weight: 600;\n  font-style: normal;\n  font-display: swap;\n}\n\n\n\n\n\n\n\n\n\n\n[_ngcontent-%COMP%]:root {\n  --bg-color: #f2f3f7;\n  --fg-color: #383a41;\n  --red: #e43030;\n  --green: #19a187;\n  --blue: #367bf0;\n  --dark-blue: #265ab1;\n  --maroon: #b8174c;\n  --purple: #8c42ab;\n}\n.menu-container[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  margin-left: 24px;\n  margin-right: 240px;\n  min-width: 240px;\n  overflow-y: wrap;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMuc2NzcyIsInNyYy9hc3NldHMvc2Nzcy9tb2R1bGVzL19mb250cy5zY3NzIiwic3JjL2FwcC9vbGdhLW1lbnUvZ2FtZXNjb3JlLW1lbnUvZ2FtZXNjb3JlLW1lbnUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOEVBQUE7QUNBQTtFQUNJLHFCQUFBO0VBQ0EscUZBQUE7RUFFQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNDSjtBREVBO0VBQ0kscUJBQUE7RUFDQSwyRkFBQTtFQUVBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0RKO0FESUE7RUFDRSwrQkFBQTtFQUNBLHVHQUFBO0VBRUEsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDSEY7QURNQTtFQUNFLCtCQUFBO0VBQ0EsK0ZBQUE7RUFFQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNMRjtBRmFBLCtFQUFBO0FBR0EsK0VBQUE7QUFRQSwrRUFBQTtBQU1BLCtFQUFBO0FBTUEsK0VBQUE7QUFNQSxnRkFBQTtBQUtBLCtFQUFBO0FBS0EseUVBQUE7QUFLQSx5RUFBQTtBQUlBLHVFQUFBO0FBZ0JBO0VBQ0UsbUJBQUE7RUFDQSxtQkFBQTtFQUVBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUVsRUY7QUE1Q0E7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUErQ0YiLCJmaWxlIjoic3JjL2FwcC9vbGdhLW1lbnUvZ2FtZXNjb3JlLW1lbnUvZ2FtZXNjb3JlLW1lbnUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG5cbkBpbXBvcnQgXCIuL2Fzc2V0cy9zY3NzL21vZHVsZXMvX2ZvbnRzLnNjc3NcIjtcbiRnYW1lc2NvcmUtZmFtaWx5OiBcIkZpZ3VyaW5lU3ltYm9sVDFcIjtcbiRnYW1lc2NvcmUtaGlnaGxpZ2h0OiAjNTg1ODU4ZmY7XG4kZ2FtZXNjb3JlLWZvcmVncm91bmQ6IHdoaXRlO1xuXG4kcmVkOiAjZTQzMDMwO1xuJGdyZWVuOiAjMTlhMTg3O1xuJGxpZ2h0LWJsdWU6ICMwMGZmZmZmZjtcbiRibHVlOiAjMzY3YmYwO1xuJGRhcmstYmx1ZTogIzI2NWFiMTtcbiRtYXJvb246ICNiODE3NGM7XG4kcHVycGxlOiAjOGM0MmFiO1xuXG4vLyBNYWluIE9MR0EgQ29sb3IgRWxlbWVudCBWYXJpYWJsZXNcbiR0ZXh0Q29sb3I6IHZhcigtLXRleHRDb2xvcik7IC8vIE1haW4gVGV4dCBDb2xvclxuJHRleHRDb2xvckF0dGVudGlvbjogdmFyKC0tdGV4dENvbG9yQXR0ZW50aW9uKTsgLy8gQXR0ZW50aW9uIHRleHRcbiR0ZXh0Q29sb3JSZW1vdmU6IHZhcigtLXRleHRDb2xvclJlbW92ZSk7IC8vIFJlbW92ZS9EZWxldGUvQ2xvc2VcbiR0ZXh0Q29sb3JBZGQ6IHZhcigtLXRleHRDb2xvckFkZCk7IC8vIEFkZC9DcmVhdGUvT3BlblxuJHRleHRDb2xvckFjdGl2ZTogdmFyKC0tdGV4dENvbG9yQWN0aXZlKTsgLy8gQWRkL0NyZWF0ZS9PcGVuXG4kYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZCk7IC8vIE1haW4gYmFja2dyb3VuZCBDb2xvclxuJGJnQ29udGFpbmVyOiB2YXIoLS1iZ0NvbnRhaW5lcik7IC8vIGJhY2tncm91bmQgb2YgQ29udGFpbmVyc1xuJGJnTWVudTogdmFyKC0tYmdNZW51KTsgLy8gYmFja2dyb3VuZCBvZiBNZW51c1xuJGJnSXRlbTogdmFyKC0tYmdJdGVtKTsgLy8gYmFja2dyb3VuZCBvZiBJdGVtc1xuXG4vLyBDb250ZXh0IE1lbnVcbiRiZ0NvbnRleHQ6IHZhcigtLWJnQ29udGV4dCk7IC8vIGJhY2tncm91bmQgb2YgQ29udGV4dCBNZW51XG4kdGV4dENvbG9yQ29udGV4dDogdmFyKC0tdGV4dENvbG9yQ29udGV4dCk7IC8vIHRleHQgY29sb3IgQ29udGV4dCBNZW51XG4kYm9yZGVyQ29udGV4dDogdmFyKC0tYm9yZGVyQ29udGV4dCk7IC8vIGJvcmRlciBDb250ZXh0IE1lbnVcbiRvdmVybGF5Q29udGV4dEJhY2tncm91bmQ6IHZhcihcbiAgLS1vdmVybGF5Q29udGV4dEJhY2tncm91bmRcbik7IC8vIENvbnRleHQgTWVudSBPdmVybGF5IGJhY2tncm91bmQgbWFpblxuJG92ZXJsYXlDb250ZXh0QmFja2dyb3VuZEdyYWRpZW50OiB2YXIoXG4gIC0tb3ZlcmxheUNvbnRleHRCYWNrZ3JvdW5kR3JhZGllbnRcbik7IC8vIENvbnRleHQgTWVudSBiYWNrZ3JvdW5kIGdyYWRpZW50XG5cbiRpdGVtOiB2YXIoLS1pdGVtKTtcbiRpdGVtLWNvbnRyYXN0OiB2YXIoLS1pdGVtLWNvbnRyYXN0KTtcbiRpdGVtLWJnOiB2YXIoLS1pdGVtLWJnKTtcblxuLyoqKioqKioqKioqKioqKioqKiogTWVudSAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiRtZUJhY2tncm91bmQ6IHZhcigtLW1lQmFja2dyb3VuZCk7XG5cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgQ29udGFpbmVyIFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4kZ3NUZXh0Q29sb3I6IHZhcigtLWdzVGV4dENvbG9yKTsgLy8gVGV4dCBjb2xvciBmb3IgZ2FtZSBzY29yZVxuJGdzQmFja2dyb3VuZDogdmFyKC0tZ3NCYWNrZ3JvdW5kKTsgLy8gYmFja2dyb3VuZCBvZiBDb250YWluZXJzXG4kZ3NMaXN0QmFja2dyb3VuZDogdmFyKC0tZ3NMaXN0QmFja2dyb3VuZCk7IC8vIGxpc3QgYmFja2dyb3VuZCBvZiBnYW1lIHNjb3JlXG4kZ3NCb3JkZXI6IHZhcigtLWdzQm9yZGVyKTsgLy8gYmFja2dyb3VuZCBvZiBNZW51c1xuJGdzVGV4dFNpemU6IHZhcigtLWdzVGV4dFNpemUpOyAvLyBiYWNrZ3JvdW5kIG9mIE1lbnVzXG4kZ3NGb250RmFtaWx5OiB2YXIoLS1nc0ZvbnRGYW1pbHkpOyAvLyBzY29yZSBmb250XG5cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgQ29udGFpbmVyIFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4kZ3NUZXh0Q29sb3JNVzogdmFyKC0tZ3NUZXh0Q29sb3JNVyk7IC8vIFRleHQgY29sb3IgZm9yIGdhbWUgc2NvcmVcbiRnc0JhY2tncm91bmRNVzogdmFyKC0tZ3NCYWNrZ3JvdW5kTVcpOyAvLyBiYWNrZ3JvdW5kIG9mIENvbnRhaW5lcnNcbiRnc0JvcmRlck1XOiB2YXIoLS1nc0JvcmRlck1XKTsgLy8gYmFja2dyb3VuZCBvZiBNZW51c1xuJGdzVGV4dFNpemVNVzogdmFyKC0tZ3NUZXh0U2l6ZU1XKTsgLy8gYmFja2dyb3VuZCBvZiBNZW51c1xuXG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIENvbnRhaW5lciBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuJGdzVGV4dENvbG9yTUI6IHZhcigtLWdzVGV4dENvbG9yTUIpOyAvLyBUZXh0IGNvbG9yIGZvciBnYW1lIHNjb3JlXG4kZ3NCYWNrZ3JvdW5kTUI6IHZhcigtLWdzQmFja2dyb3VuZE1CKTsgLy8gYmFja2dyb3VuZCBvZiBDb250YWluZXJzXG4kZ3NCb3JkZXJNQjogdmFyKC0tZ3NCb3JkZXJNQik7IC8vIGJhY2tncm91bmQgb2YgTWVudXNcbiRnc1RleHRTaXplTUI6IHZhcigtLWdzVGV4dFNpemVNQik7IC8vIGJhY2tncm91bmQgb2YgTWVudXNcblxuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBIaWdobGlnaHQgVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiRnc1RleHRDb2xvckhHOiB2YXIoLS1nc1RleHRDb2xvckhHKTsgLy8gVGV4dCBjb2xvciBmb3IgaGlnaGxpZ2h0XG4kZ3NBbm5vdGF0aW9uQ29sb3JIRzogdmFyKC0tZ3NBbm5vdGF0aW9uQ29sb3JIRyk7IC8vIEFubm90YXRpb24vQ29tbWVudCBjb2xvciBmb3IgaGlnaGxpZ2h0XG4kZ3NCYWNrZ3JvdW5kSEc6IHZhcigtLWdzQmFja2dyb3VuZEhHKTsgLy8gYmFja2dyb3VuZCBmb3IgaGlnaGxpZ2h0XG4kZ3NCb3JkZXJIRzogdmFyKC0tZ3NCb3JkZXJIRyk7IC8vIGJvcmRlciBmb3IgaGlnaGxpZ2h0XG5cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgQW5ub3RhdGlvbiBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuJGdzVGV4dENvbG9yQU46IHZhcigtLWdzVGV4dENvbG9yQU4pOyAvLyBUZXh0IGNvbG9yIGZvciBoaWdobGlnaHRcbiRnc0JhY2tncm91bmRBTjogdmFyKC0tZ3NCYWNrZ3JvdW5kQU4pOyAvLyBiYWNrZ3JvdW5kIGZvciBoaWdobGlnaHRcbiRnc0JvcmRlckFOOiB2YXIoLS1nc0JvcmRlckFOKTsgLy8gYm9yZGVyIGZvciBoaWdobGlnaHRcblxuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBWYXJpYXRpb24gVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiRnc1RleHRDb2xvclZBOiB2YXIoLS1nc1RleHRDb2xvclZBKTsgLy8gVGV4dCBjb2xvciBmb3IgaGlnaGxpZ2h0XG4kZ3NCYWNrZ3JvdW5kVkE6IHZhcigtLWdzQmFja2dyb3VuZFZBKTsgLy8gYmFja2dyb3VuZCBmb3IgaGlnaGxpZ2h0XG4kZ3NCb3JkZXJWQTogdmFyKC0tZ3NCb3JkZXJWQSk7IC8vIGJvcmRlciBmb3IgaGlnaGxpZ2h0XG5cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgUGx5IFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4kZ3NUZXh0Q29sb3JQQzogdmFyKC0tZ3NUZXh0Q29sb3JQQyk7IC8vIFRleHQgY29sb3IgZm9yIGdhbWUgc2NvcmUgcGx5XG4kZ3NCYWNrZ3JvdW5kUEM6IHZhcigtLWdzQmFja2dyb3VuZFBDKTsgLy8gYmFja2dyb3VuZCBmb3IgZ2FtZSBzY29yZSBwbHlcbiRnc0JvcmRlclBDOiB2YXIoLS1nc0JvcmRlclBDKTsgLy8gYm9yZGVyIGZvciBnYW1lIHNjb3JlIHBseVxuXG4vKioqKioqKioqKioqKioqKioqKiogQ29udHJvbCBDb2xvcnMgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuJGNzQmFja2dyb3VuZDogdmFyKC0tY3NCYWNrZ3JvdW5kKTsgLy8gYmFja2dyb3VuZCBmb3IgY29udHJvbHNcbiRjc0NvbG9yOiB2YXIoLS1jc0NvbG9yKTsgLy8gY29udHJvbHMgY29sb3IgKGZvcmVncm91bmQpXG5cbi8qKioqKioqKioqKioqKioqKioqKiBCb2FyZCBDb2xvcnMgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuJGJvYXJkQkdEYXJrOiB2YXIoLS1ib2FyZEJHRGFyayk7IC8vIGJvYXJkIGRhcmsgdGlsZVxuJGJvYXJkQkdMaWdodDogdmFyKC0tYm9hcmRCR0xpZ2h0KTsgLy8gYm9hcmQgbGlnaHQgdGlsZVxuJGJvYXJkTGFiZWxMaWdodDogdmFyKC0tYm9hcmRMYWJlbExpZ2h0KTsgLy8gYm9hcmQgbGlnaHQgbGFiZWxcbiRib2FyZExhYmVsRGFyazogdmFyKC0tYm9hcmRMYWJlbERhcmspOyAvLyBib2FyZCBkYXJrIGxhYmVsXG5cbi8vIEdlbmVyYWwgc3R1ZmZcbiR0ZXh0LWNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcbiRiZy1vdXRlcjogdmFyKC0tYmctb3V0ZXIpO1xuJGJnLWlubmVyOiB2YXIoLS1iZy1pbm5lcik7XG5cbiRiZy1jb2xvcjogI2YyZjNmNztcbiRmZy1jb2xvcjogIzM4M2E0MTtcblxuJGdsb3ctc2hhZG93OiAwIDAgMC41ZW0gdHJhbnNwYXJlbnRpemUoJGJsdWUsIDAuMyk7XG5cbjpyb290IHtcbiAgLS1iZy1jb2xvcjogI3skYmctY29sb3J9O1xuICAtLWZnLWNvbG9yOiAjeyRmZy1jb2xvcn07XG5cbiAgLS1yZWQ6ICN7JHJlZH07XG4gIC0tZ3JlZW46ICN7JGdyZWVufTtcbiAgLS1ibHVlOiAjeyRibHVlfTtcbiAgLS1kYXJrLWJsdWU6ICN7JGRhcmstYmx1ZX07XG4gIC0tbWFyb29uOiAjeyRtYXJvb259O1xuICAtLXB1cnBsZTogI3skcHVycGxlfTtcbn1cblxuLy8gOjotbW96LWZvY3VzLWlubmVyLFxuLy8gOi1tb3otZm9jdXNyaW5nIHtcbi8vICAgYm9yZGVyOiAwO1xuLy8gICBjb2xvcjogdHJhbnNwYXJlbnQ7XG4vLyAgIHRleHQtc2hhZG93OiAwIDAgMCAkZmctY29sb3I7XG4vLyB9XG5cbi8vIDo6c2VsZWN0aW9uLFxuLy8gOjotbW96LXNlbGVjdGlvbiB7XG4vLyAgIGNvbG9yOiB3aGl0ZTtcbi8vICAgYmFja2dyb3VuZDogYmxhY2s7XG4vLyB9XG5cbi8vICoge1xuLy8gICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuLy8gICBvdXRsaW5lOiBub25lO1xuLy8gICB1c2VyLXNlbGVjdDogbm9uZTtcbi8vICAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xuLy8gICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuLy8gICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7XG4vLyAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4vLyAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbi8vICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuLy8gICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4vLyAgIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKSAhaW1wb3J0YW50O1xuLy8gICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XG4vLyAgIGN1cnNvcjogZGVmYXVsdDtcbi8vICAgbGV0dGVyLXNwYWNpbmc6IDA7XG4vLyB9XG5cbi8vIC5zZWxlY3RhYmxlLFxuLy8gLnNlbGVjdGFibGUgKiB7XG4vLyAgIGN1cnNvcjogYXV0bztcbi8vICAgdXNlci1zZWxlY3Q6IHRleHQ7XG4vLyAgIC13ZWJraXQtdG91Y2gtY2FsbG91dDogdGV4dDtcbi8vICAgLXdlYmtpdC11c2VyLXNlbGVjdDogdGV4dDtcbi8vICAgLWtodG1sLXVzZXItc2VsZWN0OiB0ZXh0O1xuLy8gICAtbW96LXVzZXItc2VsZWN0OiB0ZXh0O1xuLy8gICAtbXMtdXNlci1zZWxlY3Q6IHRleHQ7XG4vLyB9XG5cbi8vIGh0bWwsXG4vLyBib2R5IHtcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogJGJnLWNvbG9yO1xuLy8gICBjb2xvcjogJGZnLWNvbG9yO1xuLy8gICBtYXJnaW46IDA7XG4vLyAgIHBhZGRpbmc6IDA7XG4vLyAgIGZvbnQtc2l6ZTogMTBwdDtcbi8vICAgaGVpZ2h0OiAxMDAlO1xuLy8gICBvdmVyZmxvdzogYXV0bztcbi8vIH1cblxuLy8gLndpdGgtc2hhZG93IHtcbi8vICAgYm94LXNoYWRvdzogNnB4IDZweCAxMHB4IHRyYW5zcGFyZW50aXplKGJsYWNrLCAwLjkpLCAtNnB4IC02cHggMTBweCB3aGl0ZTtcbi8vIH1cblxuLy8gLm91dHNldCB7XG4vLyAgIEBleHRlbmQgLndpdGgtc2hhZG93O1xuXG4vLyAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4vLyAgIGJhY2tncm91bmQ6ICRiZy1jb2xvcjtcbi8vIH1cblxuLy8gLmluc2V0IHtcbi8vICAgYm9yZGVyLXJhZGl1czogMTBweDtcbi8vICAgYm94LXNoYWRvdzogMCAwIHRyYW5zcGFyZW50LCAwIDAgdHJhbnNwYXJlbnQsXG4vLyAgICAgaW5zZXQgM3B4IDNweCA1cHggdHJhbnNwYXJlbnRpemUoYmxhY2ssIDAuOSksIGluc2V0IC0zcHggLTNweCA1cHggd2hpdGU7XG4vLyAgIGJhY2tncm91bmQ6IGxpZ2h0ZW4oJGJnLWNvbG9yLCAyJSk7XG4vLyB9XG5cbi8vIC5wYXBlciB7XG4vLyAgIEBleHRlbmQgLm91dHNldDtcbi8vICAgcGFkZGluZzogMTBweCAyMHB4IDIwcHg7XG4vLyAgIG1hcmdpbi10b3A6IDIwcHg7XG4vLyAgIG1pbi1oZWlnaHQ6IDEwMHB4O1xuLy8gICBmb250LXNpemU6IDEuMmVtO1xuLy8gICBiYWNrZ3JvdW5kOiAkYmctY29sb3I7XG4vLyB9XG5cbi8vIHNlY3Rpb24sXG4vLyBhcnRpY2xlLFxuLy8gLnNlY3Rpb24sXG4vLyAuYXJ0aWNsZSxcbi8vIC5wYXBlciB7XG4vLyAgIGxpbmUtaGVpZ2h0OiAyZW07XG4vLyAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbi8vICAgd29yZC1icmVhazogbm9ybWFsO1xuLy8gICBsaW5lLWhlaWdodDogMmVtO1xuLy8gfVxuXG4vLyBpbnB1dFt0eXBlPVwidGV4dFwiXSxcbi8vIGlucHV0W3R5cGU9XCJzZWFyY2hcIl0sXG4vLyBpbnB1dFt0eXBlPVwidGVsXCJdLFxuLy8gaW5wdXRbdHlwZT1cInVybFwiXSxcbi8vIGlucHV0W3R5cGU9XCJlbWFpbFwiXSxcbi8vIGlucHV0W3R5cGU9XCJwYXNzd29yZFwiXSxcbi8vIGlucHV0W3R5cGU9XCJkYXRlXCJdLFxuLy8gaW5wdXRbdHlwZT1cIm1vbnRoXCJdLFxuLy8gaW5wdXRbdHlwZT1cIndlZWtcIl0sXG4vLyBpbnB1dFt0eXBlPVwidGltZVwiXSxcbi8vIGlucHV0W3R5cGU9XCJudW1iZXJcIl0sXG4vLyBpbnB1dFt0eXBlPVwiY29sb3JcIl0sXG4vLyBzZWxlY3QsXG4vLyB0ZXh0YXJlYSB7XG4vLyAgIGJvcmRlcjogMDtcbi8vICAgYmFja2dyb3VuZDogJGJnLWNvbG9yO1xuLy8gICBjb2xvcjogJGZnLWNvbG9yO1xuLy8gICBmb250LXdlaWdodDogbm9ybWFsO1xuLy8gICBwYWRkaW5nOiAwIDEuMjVlbTtcbi8vICAgbGluZS1oZWlnaHQ6IDEuMjVlbTtcbi8vICAgaGVpZ2h0OiAzLjVlbTtcbi8vICAgbWFyZ2luOiAxMHB4IDA7XG4vLyAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuLy8gICBjdXJzb3I6IHRleHQ7XG4vLyAgIHVzZXItc2VsZWN0OiB0ZXh0O1xuLy8gICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IHRleHQ7XG4vLyAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IHRleHQ7XG4vLyAgIC1raHRtbC11c2VyLXNlbGVjdDogdGV4dDtcbi8vICAgLW1vei11c2VyLXNlbGVjdDogdGV4dDtcbi8vICAgLW1zLXVzZXItc2VsZWN0OiB0ZXh0O1xuLy8gICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuMnM7XG5cbi8vICAgJjpub3Qoc2VsZWN0KSB7XG4vLyAgICAgQGV4dGVuZCAuaW5zZXQ7XG5cbi8vICAgICAmOmZvY3VzIHtcbi8vICAgICAgIEBleHRlbmQgLm91dHNldDtcbi8vICAgICB9XG4vLyAgIH1cbi8vIH1cblxuLy8gdGV4dGFyZWEge1xuLy8gICBoZWlnaHQ6IDM1MHB4O1xuLy8gICBwYWRkaW5nOiAxLjI1ZW07XG4vLyB9XG5cbi8vIHNlbGVjdCB7XG4vLyAgIEBleHRlbmQgLm91dHNldDtcblxuLy8gICBjdXJzb3I6IHBvaW50ZXI7XG4vLyAgIGJhY2tncm91bmQ6IHVybChkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUIyWlhKemFXOXVQU0l4TGpFaUlIWnBaWGRDYjNnOUlqQWdNQ0F4T1NBeE9TSWdlRzFzYm5NOUltaDBkSEE2THk5M2QzY3Vkek11YjNKbkx6SXdNREF2YzNabklqNDhaeUIwY21GdWMyWnZjbTA5SW0xaGRISnBlQ2d1TURNMElEQWdNQ0F1TURNMElDMDJMamdnTVM0M1pTMDFLU0lnYzNSNWJHVTlJbVpwYkd3Nkl6ZGlOMlU0WXlJK1BIQmhkR2dnWkQwaWJUUTRNQ0F6TkRRdE1qRXhMVEl4TW1NdE1UWXRNVFl0TkRFdE1UWXROVGNnTUMweE5pQXhOaTB4TmlBME1pQXdJRFUzYkRJek9DQXlNemxqT0M0MElEZ3VOU0F5TUNBeE1pQXpNU0F4TWlBeE1TQXdMalUySURJeUxUTXVNaUF6TVMweE1td3lNemd0TWpNNVl6RTJMVEUySURFMkxUUXlJREF0TlRkekxUUXhMVEUyTFRVM0lEQjZJaUJ6ZEhsc1pUMGlabWxzYkRvak4ySTNaVGhqSWk4K1BDOW5Qand2YzNablBnbz0pXG4vLyAgICAgbm8tcmVwZWF0IHJpZ2h0IDFlbSBjZW50ZXI7XG4vLyAgIGJhY2tncm91bmQtc2l6ZTogMS4yZW07XG4vLyAgIHBhZGRpbmctcmlnaHQ6IDNlbTtcbi8vIH1cblxuLy8gaW5wdXQ6OnBsYWNlaG9sZGVyLFxuLy8gdGV4dGFyZWE6OnBsYWNlaG9sZGVyIHtcbi8vICAgb3BhY2l0eTogMTtcbi8vICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzO1xuLy8gICBjb2xvcjogaW5oZXJpdDtcbi8vIH1cblxuLy8gaW5wdXQ6Zm9jdXM6OnBsYWNlaG9sZGVyLFxuLy8gdGV4dGFyZWE6Zm9jdXM6OnBsYWNlaG9sZGVyIHtcbi8vICAgb3BhY2l0eTogMC4yO1xuLy8gfVxuXG4vLyBpbnB1dDotbXMtaW5wdXQtcGxhY2Vob2xkZXIsXG4vLyB0ZXh0YXJlYTotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuLy8gICBvcGFjaXR5OiAxO1xuLy8gICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnM7XG4vLyAgIGNvbG9yOiBpbmhlcml0O1xuLy8gfVxuXG4vLyBpbnB1dDpmb2N1czotbXMtaW5wdXQtcGxhY2Vob2xkZXIsXG4vLyB0ZXh0YXJlYTpmb2N1czotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuLy8gICBvcGFjaXR5OiAwLjI7XG4vLyB9XG5cbi8vIGlucHV0W3R5cGU9XCJzZWFyY2hcIl06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24sXG4vLyBpbnB1dFt0eXBlPVwic2VhcmNoXCJdOjotd2Via2l0LXNlYXJjaC1jYW5jZWwtYnV0dG9uLFxuLy8gaW5wdXRbdHlwZT1cInNlYXJjaFwiXTo6LXdlYmtpdC1zZWFyY2gtcmVzdWx0cy1idXR0b24sXG4vLyBpbnB1dFt0eXBlPVwic2VhcmNoXCJdOjotd2Via2l0LXNlYXJjaC1yZXN1bHRzLWRlY29yYXRpb24ge1xuLy8gICBkaXNwbGF5OiBub25lO1xuLy8gfVxuXG4vLyBidXR0b24sXG4vLyBpbnB1dFt0eXBlPVwiYnV0dG9uXCJdLFxuLy8gaW5wdXRbdHlwZT1cInN1Ym1pdFwiXSxcbi8vIGlucHV0W3R5cGU9XCJyZXNldFwiXSB7XG4vLyAgIEBleHRlbmQgLm91dHNldDtcblxuLy8gICBib3JkZXI6IDA7XG4vLyAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuLy8gICBwYWRkaW5nOiAxMHB4IDA7XG4vLyAgIHdpZHRoOiA4ZW07XG4vLyAgIHRleHQtYWxpZ246IGNlbnRlcjtcbi8vICAgY3Vyc29yOiBwb2ludGVyO1xuLy8gICBjb2xvcjogaW5oZXJpdDtcbi8vICAgZm9udC1zaXplOiAxLjFyZW07XG4vLyAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGJhY2tncm91bmQtY29sb3IsIGJveC1zaGFkb3c7XG4vLyAgIHRyYW5zaXRpb24tZGVsYXk6IDAuMnM7XG4vLyAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMnM7XG5cbi8vICAgJi5hY3RpdmUsXG4vLyAgICY6YWN0aXZlIHtcbi8vICAgICBAZXh0ZW5kIC5pbnNldDtcblxuLy8gICAgIHRyYW5zaXRpb24tZGVsYXk6IDBzO1xuLy8gICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMXM7XG4vLyAgIH1cblxuLy8gICBAZWFjaCAkbmFtZSwgJGNvbG9yIGluIChcInJlZFwiOiAkcmVkLCBcImdyZWVuXCI6ICRncmVlbiwgXCJibHVlXCI6ICRibHVlKSB7XG4vLyAgICAgQGF0LXJvb3QgLiN7JG5hbWV9LWJ1dHRvbixcbi8vICAgICAgICYuI3skbmFtZX0tYnV0dG9uIHtcbi8vICAgICAgIEBleHRlbmQgYnV0dG9uO1xuXG4vLyAgICAgICAkX2JnLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAkY29sb3IgMzAlLCBsaWdodGVuKCRjb2xvciwgNiUpIDgwJSk7XG5cbi8vICAgICAgIGNvbG9yOiB3aGl0ZTtcbi8vICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuLy8gICAgICAgdGV4dC1zaGFkb3c6IDAgMC4xZW0gMC4xZW0gdHJhbnNwYXJlbnRpemUoYmxhY2ssIDAuMyk7XG4vLyAgICAgICBiYWNrZ3JvdW5kOiAkX2JnLWltYWdlO1xuLy8gICAgICAgYm94LXNoYWRvdzogMCAwIDAuNWVtIHRyYW5zcGFyZW50aXplKCRjb2xvciwgMC4zKSwgMCAwIHRyYW5zcGFyZW50LFxuLy8gICAgICAgICBpbnNldCAwIC01cHggMCB0cmFuc3BhcmVudGl6ZShibGFjaywgMC45NSksXG4vLyAgICAgICAgIGluc2V0IDAgMnB4IDAgdHJhbnNwYXJlbnRpemUod2hpdGUsIDAuOCk7XG4vLyAgICAgICBib3JkZXItcmFkaXVzOiA2cHggNnB4IDhweCA4cHg7XG4vLyAgICAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBib3gtc2hhZG93LCBib3JkZXItcmFkaXVzO1xuXG4vLyAgICAgICAmLmFjdGl2ZSxcbi8vICAgICAgICY6YWN0aXZlIHtcbi8vICAgICAgICAgYmFja2dyb3VuZDogJF9iZy1pbWFnZTtcbi8vICAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuLy8gICAgICAgICBib3gtc2hhZG93OiAwIDAgdHJhbnNwYXJlbnQsIDAgMCB0cmFuc3BhcmVudCxcbi8vICAgICAgICAgICBpbnNldCAwIDJweCA1cHggMnB4IHRyYW5zcGFyZW50aXplKGJsYWNrLCAwLjgpO1xuLy8gICAgICAgfVxuLy8gICAgIH1cbi8vICAgfVxuLy8gfVxuXG4vLyBsYWJlbCB7XG4vLyAgICYsXG4vLyAgICYgKiB7XG4vLyAgICAgY3Vyc29yOiBwb2ludGVyO1xuLy8gICB9XG5cbi8vICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuLy8gICBwYWRkaW5nOiAwLjU2ZW0gMDtcbi8vIH1cblxuLy8gYSB7XG4vLyAgICYsXG4vLyAgICY6bGluayxcbi8vICAgJjp2aXNpdGVkLFxuLy8gICAmOmhvdmVyICY6YWN0aXZlIHtcbi8vICAgICAmLFxuLy8gICAgICYgKiB7XG4vLyAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4vLyAgICAgfVxuXG4vLyAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4vLyAgICAgY29sb3I6ICRibHVlO1xuLy8gICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuLy8gICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbi8vICAgfVxuLy8gfVxuXG4vLyBoMSxcbi8vIGgyLFxuLy8gaDMsXG4vLyBoNCxcbi8vIGg1LFxuLy8gaDYge1xuLy8gICBsaW5lLWhlaWdodDogMS41ZW07XG4vLyB9XG5cbi8vIGgxIHtcbi8vICAgZm9udC1zaXplOiA0ZW07XG4vLyAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuLy8gICBtYXJnaW46IDAuN2VtIDA7XG4vLyB9XG5cbi8vIGgyIHtcbi8vICAgZm9udC1zaXplOiAzZW07XG4vLyAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuLy8gICBtYXJnaW46IDAuOGVtIDA7XG4vLyB9XG5cbi8vIGgzIHtcbi8vICAgZm9udC1zaXplOiAyLjVlbTtcbi8vICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4vLyAgIG1hcmdpbjogMC45ZW0gMDtcbi8vIH1cblxuLy8gaDQge1xuLy8gICBmb250LXNpemU6IDJlbTtcbi8vICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4vLyAgIG1hcmdpbjogMWVtIDA7XG4vLyB9XG5cbi8vIGg1IHtcbi8vICAgbWFyZ2luOiAwLjVlbSAwO1xuLy8gICBmb250LXNpemU6IDEuMmVtO1xuLy8gICBmb250LXdlaWdodDogbm9ybWFsO1xuLy8gfVxuXG4vLyBoNiB7XG4vLyAgIG1hcmdpbjogMWVtIDAgMWVtIDEuNGVtO1xuLy8gICBmb250LXNpemU6IDFlbTtcbi8vICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4vLyB9XG5cbi8vIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSxcbi8vIGlucHV0W3R5cGU9XCJyYWRpb1wiXSB7XG4vLyAgICRfYm9yZGVyLXdpZHRoOiAwLjE1ZW07XG4vLyAgICRfYm94LXNoYWRvdzogMnB4IDJweCAzcHggdHJhbnNwYXJlbnRpemUoYmxhY2ssIDAuOCksIC0ycHggLTJweCAzcHggd2hpdGUsXG4vLyAgICAgaW5zZXQgMXB4IDFweCAycHggdHJhbnNwYXJlbnRpemUoYmxhY2ssIDAuOCksIGluc2V0IC0xcHggLTFweCAycHggd2hpdGU7XG4vLyAgIGZvbnQtc2l6ZTogMWVtO1xuLy8gICBjdXJzb3I6IHBvaW50ZXI7XG4vLyAgIGhlaWdodDogMS4yZW07XG4vLyAgIHdpZHRoOiAxLjJlbTtcbi8vICAgbWFyZ2luOiAwIDAuM2VtO1xuLy8gICBib3gtc2hhZG93OiAkX2JveC1zaGFkb3c7XG4vLyAgIGJvcmRlcjogJF9ib3JkZXItd2lkdGggc29saWQgJGJnLWNvbG9yO1xuLy8gICB2ZXJ0aWNhbC1hbGlnbjogdGV4dC1ib3R0b207XG4vLyAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGJhY2tncm91bmQsIGJveC1zaGFkb3c7XG4vLyAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMnM7XG5cbi8vICAgJjphY3RpdmUge1xuLy8gICAgIGJveC1zaGFkb3c6ICRfYm94LXNoYWRvdywgaW5zZXQgMCAwLjFlbSAwLjI1ZW0gdHJhbnNwYXJlbnRpemUoYmxhY2ssIDAuOCk7XG4vLyAgIH1cblxuLy8gICAmOmNoZWNrZWQge1xuLy8gICAgIGJvcmRlci13aWR0aDogMC4xZW07XG4vLyAgICAgYm9yZGVyLWNvbG9yOiBkYXJrZW4oJGJsdWUsIDEwJSk7XG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJsdWU7XG4vLyAgIH1cbi8vIH1cblxuLy8gaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdIHtcbi8vICAgYm9yZGVyLXJhZGl1czogMjUlO1xuXG4vLyAgICY6Y2hlY2tlZCB7XG4vLyAgICAgYm94LXNoYWRvdzogJGdsb3ctc2hhZG93LCBpbnNldCAwIC0wLjFlbSAwIHRyYW5zcGFyZW50aXplKGJsYWNrLCAwLjgpLFxuLy8gICAgICAgaW5zZXQgMCAwLjFlbSAwLjFlbSB0cmFuc3BhcmVudGl6ZSh3aGl0ZSwgMC44KTtcbi8vICAgfVxuLy8gfVxuXG4vLyBpbnB1dFt0eXBlPVwicmFkaW9cIl0ge1xuLy8gICBib3JkZXItcmFkaXVzOiAxMDAlO1xuXG4vLyAgICY6Y2hlY2tlZCB7XG4vLyAgICAgYm94LXNoYWRvdzogJGdsb3ctc2hhZG93O1xuLy8gICAgIGJveC1zaGFkb3c6ICRnbG93LXNoYWRvdywgaW5zZXQgMCAwLjEyZW0gMC4xZW0gdHJhbnNwYXJlbnRpemUod2hpdGUsIDAuNzUpO1xuLy8gICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDAuMTVlbTtcbi8vICAgfVxuLy8gfVxuXG4vLyAuY2hlY2t0ZXh0IHtcbi8vICAgd2lkdGg6IGF1dG87XG4vLyAgIG1hcmdpbjogMC41ZW07XG5cbi8vICAgaW5wdXQge1xuLy8gICAgIGRpc3BsYXk6IG5vbmU7XG5cbi8vICAgICArIHNwYW4ge1xuLy8gICAgICAgQGV4dGVuZCBidXR0b247XG5cbi8vICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuLy8gICAgICAgcGFkZGluZzogMWVtO1xuLy8gICAgICAgdHJhbnNpdGlvbi1kZWxheTogMHM7XG4vLyAgICAgfVxuXG4vLyAgICAgJjpjaGVja2VkICsgc3BhbiB7XG4vLyAgICAgICBAZXh0ZW5kIC5ibHVlLWJ1dHRvbjtcblxuLy8gICAgICAgcGFkZGluZzogMWVtO1xuLy8gICAgIH1cbi8vICAgfVxuLy8gfVxuXG4vLyAuc3dpdGNoIHtcbi8vICAgJF9oZWlnaHQ6IDJyZW07XG4vLyAgICRfd2lkdGg6IDhyZW07XG4vLyAgICRfaGFuZGxlLXdpZHRoOiAkX2hlaWdodDtcbi8vICAgJF9oYW5kbGUtdHJhbnNsYXRpb246ICRfd2lkdGggLSAkX2hhbmRsZS13aWR0aDtcblxuLy8gICBoZWlnaHQ6ICRfaGVpZ2h0O1xuLy8gICB3aWR0aDogJF93aWR0aDtcbi8vICAgcGFkZGluZzogMDtcbi8vICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4vLyAgIGlucHV0IHtcbi8vICAgICBkaXNwbGF5OiBub25lO1xuXG4vLyAgICAgKyBkaXYge1xuLy8gICAgICAgaGVpZ2h0OiAxMDAlO1xuLy8gICAgICAgd2lkdGg6IDEwMCU7XG4vLyAgICAgICBib3JkZXItcmFkaXVzOiA5OTlweDtcbi8vICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuLy8gICAgICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYm94LXNoYWRvdywgYmFja2dyb3VuZC1jb2xvcjtcbi8vICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMnM7XG4vLyAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjJzO1xuLy8gICAgICAgYm94LXNoYWRvdzogM3B4IDNweCAycHggLTJweCB0cmFuc3BhcmVudGl6ZShibGFjaywgMC45KSxcbi8vICAgICAgICAgaW5zZXQgMnB4IDJweCAycHggMXB4IHRyYW5zcGFyZW50aXplKGJsYWNrLCAwLjkpLFxuLy8gICAgICAgICBpbnNldCAtMnB4IC0ycHggMXB4IHdoaXRlO1xuXG4vLyAgICAgICAmOjpiZWZvcmUge1xuLy8gICAgICAgICBjb250ZW50OiBcIlwiO1xuLy8gICAgICAgICBkaXNwbGF5OiBibG9jaztcbi8vICAgICAgICAgaGVpZ2h0OiBjYWxjKCN7JF9oYW5kbGUtd2lkdGh9ICsgNHB4KTtcbi8vICAgICAgICAgd2lkdGg6IGNhbGMoI3skX2hhbmRsZS13aWR0aH0gKyA0cHgpO1xuLy8gICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuLy8gICAgICAgICBib3JkZXI6IHNvbGlkIHdoaXRlIDNweDtcbi8vICAgICAgICAgYmFja2dyb3VuZDogJGJsdWU7XG4vLyAgICAgICAgIGJveC1zaGFkb3c6IDAgM3B4IDEwcHggdHJhbnNwYXJlbnRpemUoYmxhY2ssIDAuOCksXG4vLyAgICAgICAgICAgaW5zZXQgMCAtMXB4IDNweCB0cmFuc3BhcmVudGl6ZShibGFjaywgMC45KTtcbi8vICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTZweCk7XG4vLyAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzO1xuLy8gICAgICAgfVxuLy8gICAgIH1cblxuLy8gICAgICY6Y2hlY2tlZCArIGRpdiB7XG4vLyAgICAgICBiYWNrZ3JvdW5kOiAkYmx1ZTtcbi8vICAgICAgIGJveC1zaGFkb3c6ICRnbG93LXNoYWRvdywgaW5zZXQgMCAycHggMnB4IDJweCB0cmFuc3BhcmVudGl6ZShibGFjaywgMC43KSxcbi8vICAgICAgICAgaW5zZXQgMCAwIHRyYW5zcGFyZW50O1xuXG4vLyAgICAgICAmOjpiZWZvcmUge1xuLy8gICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgkX2hhbmRsZS10cmFuc2xhdGlvbiwgLTZweCk7XG4vLyAgICAgICB9XG4vLyAgICAgfVxuLy8gICB9XG4vLyB9XG5cbi8vIGhyIHtcbi8vICAgQGV4dGVuZCAuaW5zZXQ7XG4vLyAgIHdpZHRoOiA3MiU7XG4vLyAgIGhlaWdodDogOHB4O1xuLy8gICBmbG9hdDogcmlnaHQ7XG4vLyAgIGJvcmRlcjogMDtcbi8vIH1cblxuLy8gY29kZSxcbi8vIHByZSB7XG4vLyAgIHBhZGRpbmc6IDAuNWVtIDFlbTtcbi8vICAgYm9yZGVyLXJhZGl1czogNHB4O1xuLy8gICBvdmVyZmxvdzogYXV0bztcbi8vICAgYm94LXNoYWRvdzogMCA1cHggMzBweCAwIHRyYW5zcGFyZW50aXplKGJsYWNrLCAwLjk1KTtcbi8vIH1cblxuLy8gY29kZSB7XG4vLyAgIGJhY2tncm91bmQ6ICNlNmU2ZTY7XG4vLyB9XG5cbi8vIHByZSB7XG4vLyAgIGJhY2tncm91bmQ6IHdoaXRlO1xuLy8gICBtYXJnaW46IDRlbSAwO1xuLy8gfVxuXG4vLyBjb2RlLFxuLy8gcHJlIHtcbi8vICAgJixcbi8vICAgJiAqIHtcbi8vICAgICBmb250LXNpemU6IDAuOXJlbTtcbi8vICAgICBsaW5lLWhlaWdodDogMmVtO1xuLy8gICAgIGN1cnNvcjogYXV0bztcbi8vICAgICB1c2VyLXNlbGVjdDogdGV4dDtcbi8vICAgICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IHRleHQ7XG4vLyAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogdGV4dDtcbi8vICAgICAta2h0bWwtdXNlci1zZWxlY3Q6IHRleHQ7XG4vLyAgICAgLW1vei11c2VyLXNlbGVjdDogdGV4dDtcbi8vICAgICAtbXMtdXNlci1zZWxlY3Q6IHRleHQ7XG4vLyAgIH1cbi8vIH1cblxuLy8gYmxvY2txdW90ZSB7XG4vLyAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuLy8gICBwYWRkaW5nOiAwLjVlbSAxZW07XG4vLyAgIGJvcmRlci1yYWRpdXM6IDRweDtcbi8vICAgYm94LXNoYWRvdzogMCA1cHggMzBweCAwIHRyYW5zcGFyZW50aXplKGJsYWNrLCAwLjk1KTtcbi8vICAgYm9yZGVyLWxlZnQ6IDZweCBzb2xpZCAkYmx1ZTtcbi8vIH1cbiIsIkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnQ2F2ZWF0JztcbiAgICBzcmM6IHVybCgnLi4vLi4vZm9udHMvQm9sZC9DYXZlYXQtQm9sZC53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcbiAgICAgICAgdXJsKCcuLi8uLi9mb250cy9Cb2xkL0NhdmVhdC1Cb2xkLndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC1kaXNwbGF5OiBzd2FwO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ0NhdmVhdCc7XG4gICAgc3JjOiB1cmwoJy4uLy4uL2ZvbnRzL1JlZ3VsYXIvQ2F2ZWF0LVJlZ3VsYXIud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXG4gICAgICAgIHVybCgnLi4vLi4vZm9udHMvUmVndWxhci9DYXZlYXQtUmVndWxhci53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC1kaXNwbGF5OiBzd2FwO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdGaWd1cmluZVN5bWJvbFQxJztcbiAgc3JjOiB1cmwoJy4uLy4uL2ZvbnRzLzNyZCBQYXJ0eS9DaGVzc1ZhcmlhbnRzL0ZpZ3VyaW5lU3ltYm9sVDFCb2xkLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxuICAgICAgdXJsKCcuLi8uLi9mb250cy8zcmQgUGFydHkvQ2hlc3NWYXJpYW50cy9GaWd1cmluZVN5bWJvbFQxQm9sZC53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnRmlndXJpbmVTeW1ib2xUMSc7XG4gIHNyYzogdXJsKCcuLi8uLi9mb250cy8zcmQgUGFydHkvQ2hlc3NWYXJpYW50cy9GaWd1cmluZVN5bWJvbFQxLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxuICAgICAgdXJsKCcuLi8uLi9mb250cy8zcmQgUGFydHkvQ2hlc3NWYXJpYW50cy9GaWd1cmluZVN5bWJvbFQxLndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG59XG5cbiIsIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJDYXZlYXRcIjtcbiAgc3JjOiB1cmwoXCIuLi8uLi9mb250cy9Cb2xkL0NhdmVhdC1Cb2xkLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpLCB1cmwoXCIuLi8uLi9mb250cy9Cb2xkL0NhdmVhdC1Cb2xkLndvZmZcIikgZm9ybWF0KFwid29mZlwiKTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkNhdmVhdFwiO1xuICBzcmM6IHVybChcIi4uLy4uL2ZvbnRzL1JlZ3VsYXIvQ2F2ZWF0LVJlZ3VsYXIud29mZjJcIikgZm9ybWF0KFwid29mZjJcIiksIHVybChcIi4uLy4uL2ZvbnRzL1JlZ3VsYXIvQ2F2ZWF0LVJlZ3VsYXIud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJGaWd1cmluZVN5bWJvbFQxXCI7XG4gIHNyYzogdXJsKFwiLi4vLi4vZm9udHMvM3JkIFBhcnR5L0NoZXNzVmFyaWFudHMvRmlndXJpbmVTeW1ib2xUMUJvbGQud29mZjJcIikgZm9ybWF0KFwid29mZjJcIiksIHVybChcIi4uLy4uL2ZvbnRzLzNyZCBQYXJ0eS9DaGVzc1ZhcmlhbnRzL0ZpZ3VyaW5lU3ltYm9sVDFCb2xkLndvZmZcIikgZm9ybWF0KFwid29mZlwiKTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkZpZ3VyaW5lU3ltYm9sVDFcIjtcbiAgc3JjOiB1cmwoXCIuLi8uLi9mb250cy8zcmQgUGFydHkvQ2hlc3NWYXJpYW50cy9GaWd1cmluZVN5bWJvbFQxLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpLCB1cmwoXCIuLi8uLi9mb250cy8zcmQgUGFydHkvQ2hlc3NWYXJpYW50cy9GaWd1cmluZVN5bWJvbFQxLndvZmZcIikgZm9ybWF0KFwid29mZlwiKTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG59XG4vKioqKioqKioqKioqKioqKioqKiBNZW51ICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBDb250YWluZXIgVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgQ29udGFpbmVyIFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIENvbnRhaW5lciBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBIaWdobGlnaHQgVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgQW5ub3RhdGlvbiBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBWYXJpYXRpb24gVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgUGx5IFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKiogQ29udHJvbCBDb2xvcnMgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKioqIEJvYXJkIENvbG9ycyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG46cm9vdCB7XG4gIC0tYmctY29sb3I6ICNmMmYzZjc7XG4gIC0tZmctY29sb3I6ICMzODNhNDE7XG4gIC0tcmVkOiAjZTQzMDMwO1xuICAtLWdyZWVuOiAjMTlhMTg3O1xuICAtLWJsdWU6ICMzNjdiZjA7XG4gIC0tZGFyay1ibHVlOiAjMjY1YWIxO1xuICAtLW1hcm9vbjogI2I4MTc0YztcbiAgLS1wdXJwbGU6ICM4YzQyYWI7XG59XG5cbi5tZW51LWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luLWxlZnQ6IDI0cHg7XG4gIG1hcmdpbi1yaWdodDogMjQwcHg7XG4gIG1pbi13aWR0aDogMjQwcHg7XG4gIG92ZXJmbG93LXk6IHdyYXA7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GamescoreMenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'gamescore-menu',
                templateUrl: './gamescore-menu.component.html',
                styleUrls: ['./gamescore-menu.component.scss'],
            }]
    }], function () { return [{ type: _services_colors_service__WEBPACK_IMPORTED_MODULE_1__["ColorService"] }, { type: _services_olga_service__WEBPACK_IMPORTED_MODULE_2__["OlgaService"] }]; }, { container: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['container']
        }] }); })();


/***/ }),

/***/ "./src/app/olga-menu/general-menu/general-menu.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/olga-menu/general-menu/general-menu.component.ts ***!
  \******************************************************************/
/*! exports provided: GeneralMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralMenuComponent", function() { return GeneralMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_colors_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/colors.service */ "./src/app/services/colors.service.ts");
/* harmony import */ var _controls_color_select_color_select_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../controls/color-select/color-select.component */ "./src/app/olga-menu/controls/color-select/color-select.component.ts");




const _c0 = ["container"];
class GeneralMenuComponent {
    constructor(colors) {
        this.colors = colors;
        this.container = null;
    }
    ngOnInit() {
    }
    hide() {
        if (this.container) {
            this.container.nativeElement.style.visibility = 'hidden';
        }
    }
    show() {
        if (this.container) {
            this.container.nativeElement.style.visibility = 'visible';
        }
    }
    resize(width, height) {
    }
}
GeneralMenuComponent.ɵfac = function GeneralMenuComponent_Factory(t) { return new (t || GeneralMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_colors_service__WEBPACK_IMPORTED_MODULE_1__["ColorService"])); };
GeneralMenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GeneralMenuComponent, selectors: [["general-menu"]], viewQuery: function GeneralMenuComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.container = _t.first);
    } }, decls: 3, vars: 1, consts: [[1, "menu-container"], ["container", ""], ["title", "Game Score Font", "variableName", "--gsTextColor", 1, "color-input", 3, "color"]], template: function GeneralMenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "color-select", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx.colors.gsTextColor.value);
    } }, directives: [_controls_color_select_color_select_component__WEBPACK_IMPORTED_MODULE_2__["ColorSelectComponent"]], styles: ["@font-face {\n  font-family: \"Caveat\";\n  src: url('Caveat-Bold.woff2') format(\"woff2\"), url('Caveat-Bold.woff') format(\"woff\");\n  font-weight: bold;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"Caveat\";\n  src: url('Caveat-Regular.woff2') format(\"woff2\"), url('Caveat-Regular.woff') format(\"woff\");\n  font-weight: 600;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"FigurineSymbolT1\";\n  src: url('FigurineSymbolT1Bold.woff2') format(\"woff2\"), url('FigurineSymbolT1Bold.woff') format(\"woff\");\n  font-weight: bold;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"FigurineSymbolT1\";\n  src: url('FigurineSymbolT1.woff2') format(\"woff2\"), url('FigurineSymbolT1.woff') format(\"woff\");\n  font-weight: 600;\n  font-style: normal;\n  font-display: swap;\n}\n\n\n\n\n\n\n\n\n\n\n[_ngcontent-%COMP%]:root {\n  --bg-color: #f2f3f7;\n  --fg-color: #383a41;\n  --red: #e43030;\n  --green: #19a187;\n  --blue: #367bf0;\n  --dark-blue: #265ab1;\n  --maroon: #b8174c;\n  --purple: #8c42ab;\n}\n.menu-container[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  margin-left: 24px;\n  min-width: 240px;\n  overflow-y: visible;\n}\n.inner-text[_ngcontent-%COMP%] {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMuc2NzcyIsInNyYy9hc3NldHMvc2Nzcy9tb2R1bGVzL19mb250cy5zY3NzIiwic3JjL2FwcC9vbGdhLW1lbnUvZ2VuZXJhbC1tZW51L2dlbmVyYWwtbWVudS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4RUFBQTtBQ0FBO0VBQ0kscUJBQUE7RUFDQSxxRkFBQTtFQUVBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0NKO0FERUE7RUFDSSxxQkFBQTtFQUNBLDJGQUFBO0VBRUEsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDREo7QURJQTtFQUNFLCtCQUFBO0VBQ0EsdUdBQUE7RUFFQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNIRjtBRE1BO0VBQ0UsK0JBQUE7RUFDQSwrRkFBQTtFQUVBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0xGO0FGYUEsK0VBQUE7QUFHQSwrRUFBQTtBQVFBLCtFQUFBO0FBTUEsK0VBQUE7QUFNQSwrRUFBQTtBQU1BLGdGQUFBO0FBS0EsK0VBQUE7QUFLQSx5RUFBQTtBQUtBLHlFQUFBO0FBSUEsdUVBQUE7QUFnQkE7RUFDRSxtQkFBQTtFQUNBLG1CQUFBO0VBRUEsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBRWxFRjtBQTlDQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFpREY7QUE5Q0E7RUFDRSxZQUFBO0FBaURGIiwiZmlsZSI6InNyYy9hcHAvb2xnYS1tZW51L2dlbmVyYWwtbWVudS9nZW5lcmFsLW1lbnUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG5cbkBpbXBvcnQgXCIuL2Fzc2V0cy9zY3NzL21vZHVsZXMvX2ZvbnRzLnNjc3NcIjtcbiRnYW1lc2NvcmUtZmFtaWx5OiBcIkZpZ3VyaW5lU3ltYm9sVDFcIjtcbiRnYW1lc2NvcmUtaGlnaGxpZ2h0OiAjNTg1ODU4ZmY7XG4kZ2FtZXNjb3JlLWZvcmVncm91bmQ6IHdoaXRlO1xuXG4kcmVkOiAjZTQzMDMwO1xuJGdyZWVuOiAjMTlhMTg3O1xuJGxpZ2h0LWJsdWU6ICMwMGZmZmZmZjtcbiRibHVlOiAjMzY3YmYwO1xuJGRhcmstYmx1ZTogIzI2NWFiMTtcbiRtYXJvb246ICNiODE3NGM7XG4kcHVycGxlOiAjOGM0MmFiO1xuXG4vLyBNYWluIE9MR0EgQ29sb3IgRWxlbWVudCBWYXJpYWJsZXNcbiR0ZXh0Q29sb3I6IHZhcigtLXRleHRDb2xvcik7IC8vIE1haW4gVGV4dCBDb2xvclxuJHRleHRDb2xvckF0dGVudGlvbjogdmFyKC0tdGV4dENvbG9yQXR0ZW50aW9uKTsgLy8gQXR0ZW50aW9uIHRleHRcbiR0ZXh0Q29sb3JSZW1vdmU6IHZhcigtLXRleHRDb2xvclJlbW92ZSk7IC8vIFJlbW92ZS9EZWxldGUvQ2xvc2VcbiR0ZXh0Q29sb3JBZGQ6IHZhcigtLXRleHRDb2xvckFkZCk7IC8vIEFkZC9DcmVhdGUvT3BlblxuJHRleHRDb2xvckFjdGl2ZTogdmFyKC0tdGV4dENvbG9yQWN0aXZlKTsgLy8gQWRkL0NyZWF0ZS9PcGVuXG4kYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZCk7IC8vIE1haW4gYmFja2dyb3VuZCBDb2xvclxuJGJnQ29udGFpbmVyOiB2YXIoLS1iZ0NvbnRhaW5lcik7IC8vIGJhY2tncm91bmQgb2YgQ29udGFpbmVyc1xuJGJnTWVudTogdmFyKC0tYmdNZW51KTsgLy8gYmFja2dyb3VuZCBvZiBNZW51c1xuJGJnSXRlbTogdmFyKC0tYmdJdGVtKTsgLy8gYmFja2dyb3VuZCBvZiBJdGVtc1xuXG4vLyBDb250ZXh0IE1lbnVcbiRiZ0NvbnRleHQ6IHZhcigtLWJnQ29udGV4dCk7IC8vIGJhY2tncm91bmQgb2YgQ29udGV4dCBNZW51XG4kdGV4dENvbG9yQ29udGV4dDogdmFyKC0tdGV4dENvbG9yQ29udGV4dCk7IC8vIHRleHQgY29sb3IgQ29udGV4dCBNZW51XG4kYm9yZGVyQ29udGV4dDogdmFyKC0tYm9yZGVyQ29udGV4dCk7IC8vIGJvcmRlciBDb250ZXh0IE1lbnVcbiRvdmVybGF5Q29udGV4dEJhY2tncm91bmQ6IHZhcihcbiAgLS1vdmVybGF5Q29udGV4dEJhY2tncm91bmRcbik7IC8vIENvbnRleHQgTWVudSBPdmVybGF5IGJhY2tncm91bmQgbWFpblxuJG92ZXJsYXlDb250ZXh0QmFja2dyb3VuZEdyYWRpZW50OiB2YXIoXG4gIC0tb3ZlcmxheUNvbnRleHRCYWNrZ3JvdW5kR3JhZGllbnRcbik7IC8vIENvbnRleHQgTWVudSBiYWNrZ3JvdW5kIGdyYWRpZW50XG5cbiRpdGVtOiB2YXIoLS1pdGVtKTtcbiRpdGVtLWNvbnRyYXN0OiB2YXIoLS1pdGVtLWNvbnRyYXN0KTtcbiRpdGVtLWJnOiB2YXIoLS1pdGVtLWJnKTtcblxuLyoqKioqKioqKioqKioqKioqKiogTWVudSAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiRtZUJhY2tncm91bmQ6IHZhcigtLW1lQmFja2dyb3VuZCk7XG5cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgQ29udGFpbmVyIFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4kZ3NUZXh0Q29sb3I6IHZhcigtLWdzVGV4dENvbG9yKTsgLy8gVGV4dCBjb2xvciBmb3IgZ2FtZSBzY29yZVxuJGdzQmFja2dyb3VuZDogdmFyKC0tZ3NCYWNrZ3JvdW5kKTsgLy8gYmFja2dyb3VuZCBvZiBDb250YWluZXJzXG4kZ3NMaXN0QmFja2dyb3VuZDogdmFyKC0tZ3NMaXN0QmFja2dyb3VuZCk7IC8vIGxpc3QgYmFja2dyb3VuZCBvZiBnYW1lIHNjb3JlXG4kZ3NCb3JkZXI6IHZhcigtLWdzQm9yZGVyKTsgLy8gYmFja2dyb3VuZCBvZiBNZW51c1xuJGdzVGV4dFNpemU6IHZhcigtLWdzVGV4dFNpemUpOyAvLyBiYWNrZ3JvdW5kIG9mIE1lbnVzXG4kZ3NGb250RmFtaWx5OiB2YXIoLS1nc0ZvbnRGYW1pbHkpOyAvLyBzY29yZSBmb250XG5cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgQ29udGFpbmVyIFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4kZ3NUZXh0Q29sb3JNVzogdmFyKC0tZ3NUZXh0Q29sb3JNVyk7IC8vIFRleHQgY29sb3IgZm9yIGdhbWUgc2NvcmVcbiRnc0JhY2tncm91bmRNVzogdmFyKC0tZ3NCYWNrZ3JvdW5kTVcpOyAvLyBiYWNrZ3JvdW5kIG9mIENvbnRhaW5lcnNcbiRnc0JvcmRlck1XOiB2YXIoLS1nc0JvcmRlck1XKTsgLy8gYmFja2dyb3VuZCBvZiBNZW51c1xuJGdzVGV4dFNpemVNVzogdmFyKC0tZ3NUZXh0U2l6ZU1XKTsgLy8gYmFja2dyb3VuZCBvZiBNZW51c1xuXG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIENvbnRhaW5lciBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuJGdzVGV4dENvbG9yTUI6IHZhcigtLWdzVGV4dENvbG9yTUIpOyAvLyBUZXh0IGNvbG9yIGZvciBnYW1lIHNjb3JlXG4kZ3NCYWNrZ3JvdW5kTUI6IHZhcigtLWdzQmFja2dyb3VuZE1CKTsgLy8gYmFja2dyb3VuZCBvZiBDb250YWluZXJzXG4kZ3NCb3JkZXJNQjogdmFyKC0tZ3NCb3JkZXJNQik7IC8vIGJhY2tncm91bmQgb2YgTWVudXNcbiRnc1RleHRTaXplTUI6IHZhcigtLWdzVGV4dFNpemVNQik7IC8vIGJhY2tncm91bmQgb2YgTWVudXNcblxuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBIaWdobGlnaHQgVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiRnc1RleHRDb2xvckhHOiB2YXIoLS1nc1RleHRDb2xvckhHKTsgLy8gVGV4dCBjb2xvciBmb3IgaGlnaGxpZ2h0XG4kZ3NBbm5vdGF0aW9uQ29sb3JIRzogdmFyKC0tZ3NBbm5vdGF0aW9uQ29sb3JIRyk7IC8vIEFubm90YXRpb24vQ29tbWVudCBjb2xvciBmb3IgaGlnaGxpZ2h0XG4kZ3NCYWNrZ3JvdW5kSEc6IHZhcigtLWdzQmFja2dyb3VuZEhHKTsgLy8gYmFja2dyb3VuZCBmb3IgaGlnaGxpZ2h0XG4kZ3NCb3JkZXJIRzogdmFyKC0tZ3NCb3JkZXJIRyk7IC8vIGJvcmRlciBmb3IgaGlnaGxpZ2h0XG5cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgQW5ub3RhdGlvbiBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuJGdzVGV4dENvbG9yQU46IHZhcigtLWdzVGV4dENvbG9yQU4pOyAvLyBUZXh0IGNvbG9yIGZvciBoaWdobGlnaHRcbiRnc0JhY2tncm91bmRBTjogdmFyKC0tZ3NCYWNrZ3JvdW5kQU4pOyAvLyBiYWNrZ3JvdW5kIGZvciBoaWdobGlnaHRcbiRnc0JvcmRlckFOOiB2YXIoLS1nc0JvcmRlckFOKTsgLy8gYm9yZGVyIGZvciBoaWdobGlnaHRcblxuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBWYXJpYXRpb24gVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiRnc1RleHRDb2xvclZBOiB2YXIoLS1nc1RleHRDb2xvclZBKTsgLy8gVGV4dCBjb2xvciBmb3IgaGlnaGxpZ2h0XG4kZ3NCYWNrZ3JvdW5kVkE6IHZhcigtLWdzQmFja2dyb3VuZFZBKTsgLy8gYmFja2dyb3VuZCBmb3IgaGlnaGxpZ2h0XG4kZ3NCb3JkZXJWQTogdmFyKC0tZ3NCb3JkZXJWQSk7IC8vIGJvcmRlciBmb3IgaGlnaGxpZ2h0XG5cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgUGx5IFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4kZ3NUZXh0Q29sb3JQQzogdmFyKC0tZ3NUZXh0Q29sb3JQQyk7IC8vIFRleHQgY29sb3IgZm9yIGdhbWUgc2NvcmUgcGx5XG4kZ3NCYWNrZ3JvdW5kUEM6IHZhcigtLWdzQmFja2dyb3VuZFBDKTsgLy8gYmFja2dyb3VuZCBmb3IgZ2FtZSBzY29yZSBwbHlcbiRnc0JvcmRlclBDOiB2YXIoLS1nc0JvcmRlclBDKTsgLy8gYm9yZGVyIGZvciBnYW1lIHNjb3JlIHBseVxuXG4vKioqKioqKioqKioqKioqKioqKiogQ29udHJvbCBDb2xvcnMgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuJGNzQmFja2dyb3VuZDogdmFyKC0tY3NCYWNrZ3JvdW5kKTsgLy8gYmFja2dyb3VuZCBmb3IgY29udHJvbHNcbiRjc0NvbG9yOiB2YXIoLS1jc0NvbG9yKTsgLy8gY29udHJvbHMgY29sb3IgKGZvcmVncm91bmQpXG5cbi8qKioqKioqKioqKioqKioqKioqKiBCb2FyZCBDb2xvcnMgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuJGJvYXJkQkdEYXJrOiB2YXIoLS1ib2FyZEJHRGFyayk7IC8vIGJvYXJkIGRhcmsgdGlsZVxuJGJvYXJkQkdMaWdodDogdmFyKC0tYm9hcmRCR0xpZ2h0KTsgLy8gYm9hcmQgbGlnaHQgdGlsZVxuJGJvYXJkTGFiZWxMaWdodDogdmFyKC0tYm9hcmRMYWJlbExpZ2h0KTsgLy8gYm9hcmQgbGlnaHQgbGFiZWxcbiRib2FyZExhYmVsRGFyazogdmFyKC0tYm9hcmRMYWJlbERhcmspOyAvLyBib2FyZCBkYXJrIGxhYmVsXG5cbi8vIEdlbmVyYWwgc3R1ZmZcbiR0ZXh0LWNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcbiRiZy1vdXRlcjogdmFyKC0tYmctb3V0ZXIpO1xuJGJnLWlubmVyOiB2YXIoLS1iZy1pbm5lcik7XG5cbiRiZy1jb2xvcjogI2YyZjNmNztcbiRmZy1jb2xvcjogIzM4M2E0MTtcblxuJGdsb3ctc2hhZG93OiAwIDAgMC41ZW0gdHJhbnNwYXJlbnRpemUoJGJsdWUsIDAuMyk7XG5cbjpyb290IHtcbiAgLS1iZy1jb2xvcjogI3skYmctY29sb3J9O1xuICAtLWZnLWNvbG9yOiAjeyRmZy1jb2xvcn07XG5cbiAgLS1yZWQ6ICN7JHJlZH07XG4gIC0tZ3JlZW46ICN7JGdyZWVufTtcbiAgLS1ibHVlOiAjeyRibHVlfTtcbiAgLS1kYXJrLWJsdWU6ICN7JGRhcmstYmx1ZX07XG4gIC0tbWFyb29uOiAjeyRtYXJvb259O1xuICAtLXB1cnBsZTogI3skcHVycGxlfTtcbn1cblxuLy8gOjotbW96LWZvY3VzLWlubmVyLFxuLy8gOi1tb3otZm9jdXNyaW5nIHtcbi8vICAgYm9yZGVyOiAwO1xuLy8gICBjb2xvcjogdHJhbnNwYXJlbnQ7XG4vLyAgIHRleHQtc2hhZG93OiAwIDAgMCAkZmctY29sb3I7XG4vLyB9XG5cbi8vIDo6c2VsZWN0aW9uLFxuLy8gOjotbW96LXNlbGVjdGlvbiB7XG4vLyAgIGNvbG9yOiB3aGl0ZTtcbi8vICAgYmFja2dyb3VuZDogYmxhY2s7XG4vLyB9XG5cbi8vICoge1xuLy8gICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuLy8gICBvdXRsaW5lOiBub25lO1xuLy8gICB1c2VyLXNlbGVjdDogbm9uZTtcbi8vICAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xuLy8gICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuLy8gICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7XG4vLyAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4vLyAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbi8vICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuLy8gICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4vLyAgIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKSAhaW1wb3J0YW50O1xuLy8gICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XG4vLyAgIGN1cnNvcjogZGVmYXVsdDtcbi8vICAgbGV0dGVyLXNwYWNpbmc6IDA7XG4vLyB9XG5cbi8vIC5zZWxlY3RhYmxlLFxuLy8gLnNlbGVjdGFibGUgKiB7XG4vLyAgIGN1cnNvcjogYXV0bztcbi8vICAgdXNlci1zZWxlY3Q6IHRleHQ7XG4vLyAgIC13ZWJraXQtdG91Y2gtY2FsbG91dDogdGV4dDtcbi8vICAgLXdlYmtpdC11c2VyLXNlbGVjdDogdGV4dDtcbi8vICAgLWtodG1sLXVzZXItc2VsZWN0OiB0ZXh0O1xuLy8gICAtbW96LXVzZXItc2VsZWN0OiB0ZXh0O1xuLy8gICAtbXMtdXNlci1zZWxlY3Q6IHRleHQ7XG4vLyB9XG5cbi8vIGh0bWwsXG4vLyBib2R5IHtcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogJGJnLWNvbG9yO1xuLy8gICBjb2xvcjogJGZnLWNvbG9yO1xuLy8gICBtYXJnaW46IDA7XG4vLyAgIHBhZGRpbmc6IDA7XG4vLyAgIGZvbnQtc2l6ZTogMTBwdDtcbi8vICAgaGVpZ2h0OiAxMDAlO1xuLy8gICBvdmVyZmxvdzogYXV0bztcbi8vIH1cblxuLy8gLndpdGgtc2hhZG93IHtcbi8vICAgYm94LXNoYWRvdzogNnB4IDZweCAxMHB4IHRyYW5zcGFyZW50aXplKGJsYWNrLCAwLjkpLCAtNnB4IC02cHggMTBweCB3aGl0ZTtcbi8vIH1cblxuLy8gLm91dHNldCB7XG4vLyAgIEBleHRlbmQgLndpdGgtc2hhZG93O1xuXG4vLyAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4vLyAgIGJhY2tncm91bmQ6ICRiZy1jb2xvcjtcbi8vIH1cblxuLy8gLmluc2V0IHtcbi8vICAgYm9yZGVyLXJhZGl1czogMTBweDtcbi8vICAgYm94LXNoYWRvdzogMCAwIHRyYW5zcGFyZW50LCAwIDAgdHJhbnNwYXJlbnQsXG4vLyAgICAgaW5zZXQgM3B4IDNweCA1cHggdHJhbnNwYXJlbnRpemUoYmxhY2ssIDAuOSksIGluc2V0IC0zcHggLTNweCA1cHggd2hpdGU7XG4vLyAgIGJhY2tncm91bmQ6IGxpZ2h0ZW4oJGJnLWNvbG9yLCAyJSk7XG4vLyB9XG5cbi8vIC5wYXBlciB7XG4vLyAgIEBleHRlbmQgLm91dHNldDtcbi8vICAgcGFkZGluZzogMTBweCAyMHB4IDIwcHg7XG4vLyAgIG1hcmdpbi10b3A6IDIwcHg7XG4vLyAgIG1pbi1oZWlnaHQ6IDEwMHB4O1xuLy8gICBmb250LXNpemU6IDEuMmVtO1xuLy8gICBiYWNrZ3JvdW5kOiAkYmctY29sb3I7XG4vLyB9XG5cbi8vIHNlY3Rpb24sXG4vLyBhcnRpY2xlLFxuLy8gLnNlY3Rpb24sXG4vLyAuYXJ0aWNsZSxcbi8vIC5wYXBlciB7XG4vLyAgIGxpbmUtaGVpZ2h0OiAyZW07XG4vLyAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbi8vICAgd29yZC1icmVhazogbm9ybWFsO1xuLy8gICBsaW5lLWhlaWdodDogMmVtO1xuLy8gfVxuXG4vLyBpbnB1dFt0eXBlPVwidGV4dFwiXSxcbi8vIGlucHV0W3R5cGU9XCJzZWFyY2hcIl0sXG4vLyBpbnB1dFt0eXBlPVwidGVsXCJdLFxuLy8gaW5wdXRbdHlwZT1cInVybFwiXSxcbi8vIGlucHV0W3R5cGU9XCJlbWFpbFwiXSxcbi8vIGlucHV0W3R5cGU9XCJwYXNzd29yZFwiXSxcbi8vIGlucHV0W3R5cGU9XCJkYXRlXCJdLFxuLy8gaW5wdXRbdHlwZT1cIm1vbnRoXCJdLFxuLy8gaW5wdXRbdHlwZT1cIndlZWtcIl0sXG4vLyBpbnB1dFt0eXBlPVwidGltZVwiXSxcbi8vIGlucHV0W3R5cGU9XCJudW1iZXJcIl0sXG4vLyBpbnB1dFt0eXBlPVwiY29sb3JcIl0sXG4vLyBzZWxlY3QsXG4vLyB0ZXh0YXJlYSB7XG4vLyAgIGJvcmRlcjogMDtcbi8vICAgYmFja2dyb3VuZDogJGJnLWNvbG9yO1xuLy8gICBjb2xvcjogJGZnLWNvbG9yO1xuLy8gICBmb250LXdlaWdodDogbm9ybWFsO1xuLy8gICBwYWRkaW5nOiAwIDEuMjVlbTtcbi8vICAgbGluZS1oZWlnaHQ6IDEuMjVlbTtcbi8vICAgaGVpZ2h0OiAzLjVlbTtcbi8vICAgbWFyZ2luOiAxMHB4IDA7XG4vLyAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuLy8gICBjdXJzb3I6IHRleHQ7XG4vLyAgIHVzZXItc2VsZWN0OiB0ZXh0O1xuLy8gICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IHRleHQ7XG4vLyAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IHRleHQ7XG4vLyAgIC1raHRtbC11c2VyLXNlbGVjdDogdGV4dDtcbi8vICAgLW1vei11c2VyLXNlbGVjdDogdGV4dDtcbi8vICAgLW1zLXVzZXItc2VsZWN0OiB0ZXh0O1xuLy8gICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuMnM7XG5cbi8vICAgJjpub3Qoc2VsZWN0KSB7XG4vLyAgICAgQGV4dGVuZCAuaW5zZXQ7XG5cbi8vICAgICAmOmZvY3VzIHtcbi8vICAgICAgIEBleHRlbmQgLm91dHNldDtcbi8vICAgICB9XG4vLyAgIH1cbi8vIH1cblxuLy8gdGV4dGFyZWEge1xuLy8gICBoZWlnaHQ6IDM1MHB4O1xuLy8gICBwYWRkaW5nOiAxLjI1ZW07XG4vLyB9XG5cbi8vIHNlbGVjdCB7XG4vLyAgIEBleHRlbmQgLm91dHNldDtcblxuLy8gICBjdXJzb3I6IHBvaW50ZXI7XG4vLyAgIGJhY2tncm91bmQ6IHVybChkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUIyWlhKemFXOXVQU0l4TGpFaUlIWnBaWGRDYjNnOUlqQWdNQ0F4T1NBeE9TSWdlRzFzYm5NOUltaDBkSEE2THk5M2QzY3Vkek11YjNKbkx6SXdNREF2YzNabklqNDhaeUIwY21GdWMyWnZjbTA5SW0xaGRISnBlQ2d1TURNMElEQWdNQ0F1TURNMElDMDJMamdnTVM0M1pTMDFLU0lnYzNSNWJHVTlJbVpwYkd3Nkl6ZGlOMlU0WXlJK1BIQmhkR2dnWkQwaWJUUTRNQ0F6TkRRdE1qRXhMVEl4TW1NdE1UWXRNVFl0TkRFdE1UWXROVGNnTUMweE5pQXhOaTB4TmlBME1pQXdJRFUzYkRJek9DQXlNemxqT0M0MElEZ3VOU0F5TUNBeE1pQXpNU0F4TWlBeE1TQXdMalUySURJeUxUTXVNaUF6TVMweE1td3lNemd0TWpNNVl6RTJMVEUySURFMkxUUXlJREF0TlRkekxUUXhMVEUyTFRVM0lEQjZJaUJ6ZEhsc1pUMGlabWxzYkRvak4ySTNaVGhqSWk4K1BDOW5Qand2YzNablBnbz0pXG4vLyAgICAgbm8tcmVwZWF0IHJpZ2h0IDFlbSBjZW50ZXI7XG4vLyAgIGJhY2tncm91bmQtc2l6ZTogMS4yZW07XG4vLyAgIHBhZGRpbmctcmlnaHQ6IDNlbTtcbi8vIH1cblxuLy8gaW5wdXQ6OnBsYWNlaG9sZGVyLFxuLy8gdGV4dGFyZWE6OnBsYWNlaG9sZGVyIHtcbi8vICAgb3BhY2l0eTogMTtcbi8vICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzO1xuLy8gICBjb2xvcjogaW5oZXJpdDtcbi8vIH1cblxuLy8gaW5wdXQ6Zm9jdXM6OnBsYWNlaG9sZGVyLFxuLy8gdGV4dGFyZWE6Zm9jdXM6OnBsYWNlaG9sZGVyIHtcbi8vICAgb3BhY2l0eTogMC4yO1xuLy8gfVxuXG4vLyBpbnB1dDotbXMtaW5wdXQtcGxhY2Vob2xkZXIsXG4vLyB0ZXh0YXJlYTotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuLy8gICBvcGFjaXR5OiAxO1xuLy8gICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnM7XG4vLyAgIGNvbG9yOiBpbmhlcml0O1xuLy8gfVxuXG4vLyBpbnB1dDpmb2N1czotbXMtaW5wdXQtcGxhY2Vob2xkZXIsXG4vLyB0ZXh0YXJlYTpmb2N1czotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuLy8gICBvcGFjaXR5OiAwLjI7XG4vLyB9XG5cbi8vIGlucHV0W3R5cGU9XCJzZWFyY2hcIl06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24sXG4vLyBpbnB1dFt0eXBlPVwic2VhcmNoXCJdOjotd2Via2l0LXNlYXJjaC1jYW5jZWwtYnV0dG9uLFxuLy8gaW5wdXRbdHlwZT1cInNlYXJjaFwiXTo6LXdlYmtpdC1zZWFyY2gtcmVzdWx0cy1idXR0b24sXG4vLyBpbnB1dFt0eXBlPVwic2VhcmNoXCJdOjotd2Via2l0LXNlYXJjaC1yZXN1bHRzLWRlY29yYXRpb24ge1xuLy8gICBkaXNwbGF5OiBub25lO1xuLy8gfVxuXG4vLyBidXR0b24sXG4vLyBpbnB1dFt0eXBlPVwiYnV0dG9uXCJdLFxuLy8gaW5wdXRbdHlwZT1cInN1Ym1pdFwiXSxcbi8vIGlucHV0W3R5cGU9XCJyZXNldFwiXSB7XG4vLyAgIEBleHRlbmQgLm91dHNldDtcblxuLy8gICBib3JkZXI6IDA7XG4vLyAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuLy8gICBwYWRkaW5nOiAxMHB4IDA7XG4vLyAgIHdpZHRoOiA4ZW07XG4vLyAgIHRleHQtYWxpZ246IGNlbnRlcjtcbi8vICAgY3Vyc29yOiBwb2ludGVyO1xuLy8gICBjb2xvcjogaW5oZXJpdDtcbi8vICAgZm9udC1zaXplOiAxLjFyZW07XG4vLyAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGJhY2tncm91bmQtY29sb3IsIGJveC1zaGFkb3c7XG4vLyAgIHRyYW5zaXRpb24tZGVsYXk6IDAuMnM7XG4vLyAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMnM7XG5cbi8vICAgJi5hY3RpdmUsXG4vLyAgICY6YWN0aXZlIHtcbi8vICAgICBAZXh0ZW5kIC5pbnNldDtcblxuLy8gICAgIHRyYW5zaXRpb24tZGVsYXk6IDBzO1xuLy8gICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMXM7XG4vLyAgIH1cblxuLy8gICBAZWFjaCAkbmFtZSwgJGNvbG9yIGluIChcInJlZFwiOiAkcmVkLCBcImdyZWVuXCI6ICRncmVlbiwgXCJibHVlXCI6ICRibHVlKSB7XG4vLyAgICAgQGF0LXJvb3QgLiN7JG5hbWV9LWJ1dHRvbixcbi8vICAgICAgICYuI3skbmFtZX0tYnV0dG9uIHtcbi8vICAgICAgIEBleHRlbmQgYnV0dG9uO1xuXG4vLyAgICAgICAkX2JnLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAkY29sb3IgMzAlLCBsaWdodGVuKCRjb2xvciwgNiUpIDgwJSk7XG5cbi8vICAgICAgIGNvbG9yOiB3aGl0ZTtcbi8vICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuLy8gICAgICAgdGV4dC1zaGFkb3c6IDAgMC4xZW0gMC4xZW0gdHJhbnNwYXJlbnRpemUoYmxhY2ssIDAuMyk7XG4vLyAgICAgICBiYWNrZ3JvdW5kOiAkX2JnLWltYWdlO1xuLy8gICAgICAgYm94LXNoYWRvdzogMCAwIDAuNWVtIHRyYW5zcGFyZW50aXplKCRjb2xvciwgMC4zKSwgMCAwIHRyYW5zcGFyZW50LFxuLy8gICAgICAgICBpbnNldCAwIC01cHggMCB0cmFuc3BhcmVudGl6ZShibGFjaywgMC45NSksXG4vLyAgICAgICAgIGluc2V0IDAgMnB4IDAgdHJhbnNwYXJlbnRpemUod2hpdGUsIDAuOCk7XG4vLyAgICAgICBib3JkZXItcmFkaXVzOiA2cHggNnB4IDhweCA4cHg7XG4vLyAgICAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBib3gtc2hhZG93LCBib3JkZXItcmFkaXVzO1xuXG4vLyAgICAgICAmLmFjdGl2ZSxcbi8vICAgICAgICY6YWN0aXZlIHtcbi8vICAgICAgICAgYmFja2dyb3VuZDogJF9iZy1pbWFnZTtcbi8vICAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuLy8gICAgICAgICBib3gtc2hhZG93OiAwIDAgdHJhbnNwYXJlbnQsIDAgMCB0cmFuc3BhcmVudCxcbi8vICAgICAgICAgICBpbnNldCAwIDJweCA1cHggMnB4IHRyYW5zcGFyZW50aXplKGJsYWNrLCAwLjgpO1xuLy8gICAgICAgfVxuLy8gICAgIH1cbi8vICAgfVxuLy8gfVxuXG4vLyBsYWJlbCB7XG4vLyAgICYsXG4vLyAgICYgKiB7XG4vLyAgICAgY3Vyc29yOiBwb2ludGVyO1xuLy8gICB9XG5cbi8vICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuLy8gICBwYWRkaW5nOiAwLjU2ZW0gMDtcbi8vIH1cblxuLy8gYSB7XG4vLyAgICYsXG4vLyAgICY6bGluayxcbi8vICAgJjp2aXNpdGVkLFxuLy8gICAmOmhvdmVyICY6YWN0aXZlIHtcbi8vICAgICAmLFxuLy8gICAgICYgKiB7XG4vLyAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4vLyAgICAgfVxuXG4vLyAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4vLyAgICAgY29sb3I6ICRibHVlO1xuLy8gICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuLy8gICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbi8vICAgfVxuLy8gfVxuXG4vLyBoMSxcbi8vIGgyLFxuLy8gaDMsXG4vLyBoNCxcbi8vIGg1LFxuLy8gaDYge1xuLy8gICBsaW5lLWhlaWdodDogMS41ZW07XG4vLyB9XG5cbi8vIGgxIHtcbi8vICAgZm9udC1zaXplOiA0ZW07XG4vLyAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuLy8gICBtYXJnaW46IDAuN2VtIDA7XG4vLyB9XG5cbi8vIGgyIHtcbi8vICAgZm9udC1zaXplOiAzZW07XG4vLyAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuLy8gICBtYXJnaW46IDAuOGVtIDA7XG4vLyB9XG5cbi8vIGgzIHtcbi8vICAgZm9udC1zaXplOiAyLjVlbTtcbi8vICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4vLyAgIG1hcmdpbjogMC45ZW0gMDtcbi8vIH1cblxuLy8gaDQge1xuLy8gICBmb250LXNpemU6IDJlbTtcbi8vICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4vLyAgIG1hcmdpbjogMWVtIDA7XG4vLyB9XG5cbi8vIGg1IHtcbi8vICAgbWFyZ2luOiAwLjVlbSAwO1xuLy8gICBmb250LXNpemU6IDEuMmVtO1xuLy8gICBmb250LXdlaWdodDogbm9ybWFsO1xuLy8gfVxuXG4vLyBoNiB7XG4vLyAgIG1hcmdpbjogMWVtIDAgMWVtIDEuNGVtO1xuLy8gICBmb250LXNpemU6IDFlbTtcbi8vICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4vLyB9XG5cbi8vIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSxcbi8vIGlucHV0W3R5cGU9XCJyYWRpb1wiXSB7XG4vLyAgICRfYm9yZGVyLXdpZHRoOiAwLjE1ZW07XG4vLyAgICRfYm94LXNoYWRvdzogMnB4IDJweCAzcHggdHJhbnNwYXJlbnRpemUoYmxhY2ssIDAuOCksIC0ycHggLTJweCAzcHggd2hpdGUsXG4vLyAgICAgaW5zZXQgMXB4IDFweCAycHggdHJhbnNwYXJlbnRpemUoYmxhY2ssIDAuOCksIGluc2V0IC0xcHggLTFweCAycHggd2hpdGU7XG4vLyAgIGZvbnQtc2l6ZTogMWVtO1xuLy8gICBjdXJzb3I6IHBvaW50ZXI7XG4vLyAgIGhlaWdodDogMS4yZW07XG4vLyAgIHdpZHRoOiAxLjJlbTtcbi8vICAgbWFyZ2luOiAwIDAuM2VtO1xuLy8gICBib3gtc2hhZG93OiAkX2JveC1zaGFkb3c7XG4vLyAgIGJvcmRlcjogJF9ib3JkZXItd2lkdGggc29saWQgJGJnLWNvbG9yO1xuLy8gICB2ZXJ0aWNhbC1hbGlnbjogdGV4dC1ib3R0b207XG4vLyAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGJhY2tncm91bmQsIGJveC1zaGFkb3c7XG4vLyAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMnM7XG5cbi8vICAgJjphY3RpdmUge1xuLy8gICAgIGJveC1zaGFkb3c6ICRfYm94LXNoYWRvdywgaW5zZXQgMCAwLjFlbSAwLjI1ZW0gdHJhbnNwYXJlbnRpemUoYmxhY2ssIDAuOCk7XG4vLyAgIH1cblxuLy8gICAmOmNoZWNrZWQge1xuLy8gICAgIGJvcmRlci13aWR0aDogMC4xZW07XG4vLyAgICAgYm9yZGVyLWNvbG9yOiBkYXJrZW4oJGJsdWUsIDEwJSk7XG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJsdWU7XG4vLyAgIH1cbi8vIH1cblxuLy8gaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdIHtcbi8vICAgYm9yZGVyLXJhZGl1czogMjUlO1xuXG4vLyAgICY6Y2hlY2tlZCB7XG4vLyAgICAgYm94LXNoYWRvdzogJGdsb3ctc2hhZG93LCBpbnNldCAwIC0wLjFlbSAwIHRyYW5zcGFyZW50aXplKGJsYWNrLCAwLjgpLFxuLy8gICAgICAgaW5zZXQgMCAwLjFlbSAwLjFlbSB0cmFuc3BhcmVudGl6ZSh3aGl0ZSwgMC44KTtcbi8vICAgfVxuLy8gfVxuXG4vLyBpbnB1dFt0eXBlPVwicmFkaW9cIl0ge1xuLy8gICBib3JkZXItcmFkaXVzOiAxMDAlO1xuXG4vLyAgICY6Y2hlY2tlZCB7XG4vLyAgICAgYm94LXNoYWRvdzogJGdsb3ctc2hhZG93O1xuLy8gICAgIGJveC1zaGFkb3c6ICRnbG93LXNoYWRvdywgaW5zZXQgMCAwLjEyZW0gMC4xZW0gdHJhbnNwYXJlbnRpemUod2hpdGUsIDAuNzUpO1xuLy8gICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDAuMTVlbTtcbi8vICAgfVxuLy8gfVxuXG4vLyAuY2hlY2t0ZXh0IHtcbi8vICAgd2lkdGg6IGF1dG87XG4vLyAgIG1hcmdpbjogMC41ZW07XG5cbi8vICAgaW5wdXQge1xuLy8gICAgIGRpc3BsYXk6IG5vbmU7XG5cbi8vICAgICArIHNwYW4ge1xuLy8gICAgICAgQGV4dGVuZCBidXR0b247XG5cbi8vICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuLy8gICAgICAgcGFkZGluZzogMWVtO1xuLy8gICAgICAgdHJhbnNpdGlvbi1kZWxheTogMHM7XG4vLyAgICAgfVxuXG4vLyAgICAgJjpjaGVja2VkICsgc3BhbiB7XG4vLyAgICAgICBAZXh0ZW5kIC5ibHVlLWJ1dHRvbjtcblxuLy8gICAgICAgcGFkZGluZzogMWVtO1xuLy8gICAgIH1cbi8vICAgfVxuLy8gfVxuXG4vLyAuc3dpdGNoIHtcbi8vICAgJF9oZWlnaHQ6IDJyZW07XG4vLyAgICRfd2lkdGg6IDhyZW07XG4vLyAgICRfaGFuZGxlLXdpZHRoOiAkX2hlaWdodDtcbi8vICAgJF9oYW5kbGUtdHJhbnNsYXRpb246ICRfd2lkdGggLSAkX2hhbmRsZS13aWR0aDtcblxuLy8gICBoZWlnaHQ6ICRfaGVpZ2h0O1xuLy8gICB3aWR0aDogJF93aWR0aDtcbi8vICAgcGFkZGluZzogMDtcbi8vICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4vLyAgIGlucHV0IHtcbi8vICAgICBkaXNwbGF5OiBub25lO1xuXG4vLyAgICAgKyBkaXYge1xuLy8gICAgICAgaGVpZ2h0OiAxMDAlO1xuLy8gICAgICAgd2lkdGg6IDEwMCU7XG4vLyAgICAgICBib3JkZXItcmFkaXVzOiA5OTlweDtcbi8vICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuLy8gICAgICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYm94LXNoYWRvdywgYmFja2dyb3VuZC1jb2xvcjtcbi8vICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMnM7XG4vLyAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjJzO1xuLy8gICAgICAgYm94LXNoYWRvdzogM3B4IDNweCAycHggLTJweCB0cmFuc3BhcmVudGl6ZShibGFjaywgMC45KSxcbi8vICAgICAgICAgaW5zZXQgMnB4IDJweCAycHggMXB4IHRyYW5zcGFyZW50aXplKGJsYWNrLCAwLjkpLFxuLy8gICAgICAgICBpbnNldCAtMnB4IC0ycHggMXB4IHdoaXRlO1xuXG4vLyAgICAgICAmOjpiZWZvcmUge1xuLy8gICAgICAgICBjb250ZW50OiBcIlwiO1xuLy8gICAgICAgICBkaXNwbGF5OiBibG9jaztcbi8vICAgICAgICAgaGVpZ2h0OiBjYWxjKCN7JF9oYW5kbGUtd2lkdGh9ICsgNHB4KTtcbi8vICAgICAgICAgd2lkdGg6IGNhbGMoI3skX2hhbmRsZS13aWR0aH0gKyA0cHgpO1xuLy8gICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuLy8gICAgICAgICBib3JkZXI6IHNvbGlkIHdoaXRlIDNweDtcbi8vICAgICAgICAgYmFja2dyb3VuZDogJGJsdWU7XG4vLyAgICAgICAgIGJveC1zaGFkb3c6IDAgM3B4IDEwcHggdHJhbnNwYXJlbnRpemUoYmxhY2ssIDAuOCksXG4vLyAgICAgICAgICAgaW5zZXQgMCAtMXB4IDNweCB0cmFuc3BhcmVudGl6ZShibGFjaywgMC45KTtcbi8vICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTZweCk7XG4vLyAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzO1xuLy8gICAgICAgfVxuLy8gICAgIH1cblxuLy8gICAgICY6Y2hlY2tlZCArIGRpdiB7XG4vLyAgICAgICBiYWNrZ3JvdW5kOiAkYmx1ZTtcbi8vICAgICAgIGJveC1zaGFkb3c6ICRnbG93LXNoYWRvdywgaW5zZXQgMCAycHggMnB4IDJweCB0cmFuc3BhcmVudGl6ZShibGFjaywgMC43KSxcbi8vICAgICAgICAgaW5zZXQgMCAwIHRyYW5zcGFyZW50O1xuXG4vLyAgICAgICAmOjpiZWZvcmUge1xuLy8gICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgkX2hhbmRsZS10cmFuc2xhdGlvbiwgLTZweCk7XG4vLyAgICAgICB9XG4vLyAgICAgfVxuLy8gICB9XG4vLyB9XG5cbi8vIGhyIHtcbi8vICAgQGV4dGVuZCAuaW5zZXQ7XG4vLyAgIHdpZHRoOiA3MiU7XG4vLyAgIGhlaWdodDogOHB4O1xuLy8gICBmbG9hdDogcmlnaHQ7XG4vLyAgIGJvcmRlcjogMDtcbi8vIH1cblxuLy8gY29kZSxcbi8vIHByZSB7XG4vLyAgIHBhZGRpbmc6IDAuNWVtIDFlbTtcbi8vICAgYm9yZGVyLXJhZGl1czogNHB4O1xuLy8gICBvdmVyZmxvdzogYXV0bztcbi8vICAgYm94LXNoYWRvdzogMCA1cHggMzBweCAwIHRyYW5zcGFyZW50aXplKGJsYWNrLCAwLjk1KTtcbi8vIH1cblxuLy8gY29kZSB7XG4vLyAgIGJhY2tncm91bmQ6ICNlNmU2ZTY7XG4vLyB9XG5cbi8vIHByZSB7XG4vLyAgIGJhY2tncm91bmQ6IHdoaXRlO1xuLy8gICBtYXJnaW46IDRlbSAwO1xuLy8gfVxuXG4vLyBjb2RlLFxuLy8gcHJlIHtcbi8vICAgJixcbi8vICAgJiAqIHtcbi8vICAgICBmb250LXNpemU6IDAuOXJlbTtcbi8vICAgICBsaW5lLWhlaWdodDogMmVtO1xuLy8gICAgIGN1cnNvcjogYXV0bztcbi8vICAgICB1c2VyLXNlbGVjdDogdGV4dDtcbi8vICAgICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IHRleHQ7XG4vLyAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogdGV4dDtcbi8vICAgICAta2h0bWwtdXNlci1zZWxlY3Q6IHRleHQ7XG4vLyAgICAgLW1vei11c2VyLXNlbGVjdDogdGV4dDtcbi8vICAgICAtbXMtdXNlci1zZWxlY3Q6IHRleHQ7XG4vLyAgIH1cbi8vIH1cblxuLy8gYmxvY2txdW90ZSB7XG4vLyAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuLy8gICBwYWRkaW5nOiAwLjVlbSAxZW07XG4vLyAgIGJvcmRlci1yYWRpdXM6IDRweDtcbi8vICAgYm94LXNoYWRvdzogMCA1cHggMzBweCAwIHRyYW5zcGFyZW50aXplKGJsYWNrLCAwLjk1KTtcbi8vICAgYm9yZGVyLWxlZnQ6IDZweCBzb2xpZCAkYmx1ZTtcbi8vIH1cbiIsIkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnQ2F2ZWF0JztcbiAgICBzcmM6IHVybCgnLi4vLi4vZm9udHMvQm9sZC9DYXZlYXQtQm9sZC53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcbiAgICAgICAgdXJsKCcuLi8uLi9mb250cy9Cb2xkL0NhdmVhdC1Cb2xkLndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC1kaXNwbGF5OiBzd2FwO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ0NhdmVhdCc7XG4gICAgc3JjOiB1cmwoJy4uLy4uL2ZvbnRzL1JlZ3VsYXIvQ2F2ZWF0LVJlZ3VsYXIud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXG4gICAgICAgIHVybCgnLi4vLi4vZm9udHMvUmVndWxhci9DYXZlYXQtUmVndWxhci53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC1kaXNwbGF5OiBzd2FwO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdGaWd1cmluZVN5bWJvbFQxJztcbiAgc3JjOiB1cmwoJy4uLy4uL2ZvbnRzLzNyZCBQYXJ0eS9DaGVzc1ZhcmlhbnRzL0ZpZ3VyaW5lU3ltYm9sVDFCb2xkLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxuICAgICAgdXJsKCcuLi8uLi9mb250cy8zcmQgUGFydHkvQ2hlc3NWYXJpYW50cy9GaWd1cmluZVN5bWJvbFQxQm9sZC53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnRmlndXJpbmVTeW1ib2xUMSc7XG4gIHNyYzogdXJsKCcuLi8uLi9mb250cy8zcmQgUGFydHkvQ2hlc3NWYXJpYW50cy9GaWd1cmluZVN5bWJvbFQxLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxuICAgICAgdXJsKCcuLi8uLi9mb250cy8zcmQgUGFydHkvQ2hlc3NWYXJpYW50cy9GaWd1cmluZVN5bWJvbFQxLndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG59XG5cbiIsIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJDYXZlYXRcIjtcbiAgc3JjOiB1cmwoXCIuLi8uLi9mb250cy9Cb2xkL0NhdmVhdC1Cb2xkLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpLCB1cmwoXCIuLi8uLi9mb250cy9Cb2xkL0NhdmVhdC1Cb2xkLndvZmZcIikgZm9ybWF0KFwid29mZlwiKTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkNhdmVhdFwiO1xuICBzcmM6IHVybChcIi4uLy4uL2ZvbnRzL1JlZ3VsYXIvQ2F2ZWF0LVJlZ3VsYXIud29mZjJcIikgZm9ybWF0KFwid29mZjJcIiksIHVybChcIi4uLy4uL2ZvbnRzL1JlZ3VsYXIvQ2F2ZWF0LVJlZ3VsYXIud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJGaWd1cmluZVN5bWJvbFQxXCI7XG4gIHNyYzogdXJsKFwiLi4vLi4vZm9udHMvM3JkIFBhcnR5L0NoZXNzVmFyaWFudHMvRmlndXJpbmVTeW1ib2xUMUJvbGQud29mZjJcIikgZm9ybWF0KFwid29mZjJcIiksIHVybChcIi4uLy4uL2ZvbnRzLzNyZCBQYXJ0eS9DaGVzc1ZhcmlhbnRzL0ZpZ3VyaW5lU3ltYm9sVDFCb2xkLndvZmZcIikgZm9ybWF0KFwid29mZlwiKTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkZpZ3VyaW5lU3ltYm9sVDFcIjtcbiAgc3JjOiB1cmwoXCIuLi8uLi9mb250cy8zcmQgUGFydHkvQ2hlc3NWYXJpYW50cy9GaWd1cmluZVN5bWJvbFQxLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpLCB1cmwoXCIuLi8uLi9mb250cy8zcmQgUGFydHkvQ2hlc3NWYXJpYW50cy9GaWd1cmluZVN5bWJvbFQxLndvZmZcIikgZm9ybWF0KFwid29mZlwiKTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG59XG4vKioqKioqKioqKioqKioqKioqKiBNZW51ICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBDb250YWluZXIgVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgQ29udGFpbmVyIFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIENvbnRhaW5lciBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBIaWdobGlnaHQgVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgQW5ub3RhdGlvbiBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBWYXJpYXRpb24gVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgUGx5IFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKiogQ29udHJvbCBDb2xvcnMgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKioqIEJvYXJkIENvbG9ycyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG46cm9vdCB7XG4gIC0tYmctY29sb3I6ICNmMmYzZjc7XG4gIC0tZmctY29sb3I6ICMzODNhNDE7XG4gIC0tcmVkOiAjZTQzMDMwO1xuICAtLWdyZWVuOiAjMTlhMTg3O1xuICAtLWJsdWU6ICMzNjdiZjA7XG4gIC0tZGFyay1ibHVlOiAjMjY1YWIxO1xuICAtLW1hcm9vbjogI2I4MTc0YztcbiAgLS1wdXJwbGU6ICM4YzQyYWI7XG59XG5cbi5tZW51LWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luLWxlZnQ6IDI0cHg7XG4gIG1pbi13aWR0aDogMjQwcHg7XG4gIG92ZXJmbG93LXk6IHZpc2libGU7XG59XG5cbi5pbm5lci10ZXh0IHtcbiAgY29sb3I6IHdoaXRlO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GeneralMenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'general-menu',
                templateUrl: './general-menu.component.html',
                styleUrls: ['./general-menu.component.scss']
            }]
    }], function () { return [{ type: _services_colors_service__WEBPACK_IMPORTED_MODULE_1__["ColorService"] }]; }, { container: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['container']
        }] }); })();


/***/ }),

/***/ "./src/app/olga-menu/keymap-menu/keymap-item/keymap-item.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/olga-menu/keymap-menu/keymap-item/keymap-item.component.ts ***!
  \****************************************************************************/
/*! exports provided: KeymapItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeymapItemComponent", function() { return KeymapItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


const _c0 = ["svgContainer"];
const _c1 = ["labelElement"];
class KeymapItemComponent {
    constructor() {
        this.icon = '';
        this.label = '';
        this.key = '';
        this.svgContainer = null;
        this.labelElement = null;
    }
    ngOnInit() {
        console.log('Icon ' + this.icon);
    }
    ngAfterViewInit() {
        if (this.labelElement) {
            this.labelElement.nativeElement.innerHTML = this.label;
        }
        if (this.svgContainer) {
            this.svgContainer.nativeElement.innerHTML = '<use xlink:href="/assets/images/feather-sprite.svg#' + this.icon + '" />';
        }
    }
    ngOnChanges(changes) {
        if (this.svgContainer) {
            this.svgContainer.nativeElement.innerHTML = '<use xlink:href="/assets/images/feather-sprite.svg#' + this.icon + '" />';
        }
    }
}
KeymapItemComponent.ɵfac = function KeymapItemComponent_Factory(t) { return new (t || KeymapItemComponent)(); };
KeymapItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: KeymapItemComponent, selectors: [["keymap-item"]], viewQuery: function KeymapItemComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.svgContainer = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.labelElement = _t.first);
    } }, inputs: { icon: "icon", label: "label", key: "key" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 5, vars: 0, consts: [[1, "icon"], [1, "feather"], ["svgContainer", ""], [1, "keymap-label"], ["labelElement", ""]], template: function KeymapItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "svg", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3, 4);
    } }, styles: ["@font-face {\n  font-family: \"Caveat\";\n  src: url('Caveat-Bold.woff2') format(\"woff2\"), url('Caveat-Bold.woff') format(\"woff\");\n  font-weight: bold;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"Caveat\";\n  src: url('Caveat-Regular.woff2') format(\"woff2\"), url('Caveat-Regular.woff') format(\"woff\");\n  font-weight: 600;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"FigurineSymbolT1\";\n  src: url('FigurineSymbolT1Bold.woff2') format(\"woff2\"), url('FigurineSymbolT1Bold.woff') format(\"woff\");\n  font-weight: bold;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"FigurineSymbolT1\";\n  src: url('FigurineSymbolT1.woff2') format(\"woff2\"), url('FigurineSymbolT1.woff') format(\"woff\");\n  font-weight: 600;\n  font-style: normal;\n  font-display: swap;\n}\n\n\n\n\n\n\n\n\n\n\n[_ngcontent-%COMP%]:root {\n  --bg-color: #f2f3f7;\n  --fg-color: #383a41;\n  --red: #e43030;\n  --green: #19a187;\n  --blue: #367bf0;\n  --dark-blue: #265ab1;\n  --maroon: #b8174c;\n  --purple: #8c42ab;\n}\n.keymap-label[_ngcontent-%COMP%] {\n  position: relative;\n  left: 86px;\n  bottom: 18px;\n  height: 14px;\n  width: 180px;\n  font-size: 14px;\n  line-height: 14px;\n  color: var(--gsTextColor);\n}\n.icon[_ngcontent-%COMP%] {\n  position: relative;\n  width: 64px;\n  height: 64px;\n  border: 2px white solid;\n  background: var(--csBackground);\n}\n.feather[_ngcontent-%COMP%] {\n  position: relative;\n  left: 10%;\n  width: 80%;\n  height: 80%;\n  top: 10%;\n  stroke: var(--csColor);\n  stroke-width: 2;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n  fill: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMuc2NzcyIsInNyYy9hc3NldHMvc2Nzcy9tb2R1bGVzL19mb250cy5zY3NzIiwic3JjL2FwcC9vbGdhLW1lbnUva2V5bWFwLW1lbnUva2V5bWFwLWl0ZW0va2V5bWFwLWl0ZW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOEVBQUE7QUNBQTtFQUNJLHFCQUFBO0VBQ0EscUZBQUE7RUFFQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNDSjtBREVBO0VBQ0kscUJBQUE7RUFDQSwyRkFBQTtFQUVBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0RKO0FESUE7RUFDRSwrQkFBQTtFQUNBLHVHQUFBO0VBRUEsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDSEY7QURNQTtFQUNFLCtCQUFBO0VBQ0EsK0ZBQUE7RUFFQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNMRjtBRmFBLCtFQUFBO0FBR0EsK0VBQUE7QUFRQSwrRUFBQTtBQU1BLCtFQUFBO0FBTUEsK0VBQUE7QUFNQSxnRkFBQTtBQUtBLCtFQUFBO0FBS0EseUVBQUE7QUFLQSx5RUFBQTtBQUlBLHVFQUFBO0FBZ0JBO0VBQ0UsbUJBQUE7RUFDQSxtQkFBQTtFQUVBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUVsRUY7QUE5Q0E7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkZtQ1U7QUVjZDtBQTlDQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLCtCRm9FVztBRW5CZjtBQTlDQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUNBLHNCRjRETTtFRTNETixlQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLFVBQUE7QUFpREoiLCJmaWxlIjoic3JjL2FwcC9vbGdhLW1lbnUva2V5bWFwLW1lbnUva2V5bWFwLWl0ZW0va2V5bWFwLWl0ZW0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG5cbkBpbXBvcnQgXCIuL2Fzc2V0cy9zY3NzL21vZHVsZXMvX2ZvbnRzLnNjc3NcIjtcbiRnYW1lc2NvcmUtZmFtaWx5OiBcIkZpZ3VyaW5lU3ltYm9sVDFcIjtcbiRnYW1lc2NvcmUtaGlnaGxpZ2h0OiAjNTg1ODU4ZmY7XG4kZ2FtZXNjb3JlLWZvcmVncm91bmQ6IHdoaXRlO1xuXG4kcmVkOiAjZTQzMDMwO1xuJGdyZWVuOiAjMTlhMTg3O1xuJGxpZ2h0LWJsdWU6ICMwMGZmZmZmZjtcbiRibHVlOiAjMzY3YmYwO1xuJGRhcmstYmx1ZTogIzI2NWFiMTtcbiRtYXJvb246ICNiODE3NGM7XG4kcHVycGxlOiAjOGM0MmFiO1xuXG4vLyBNYWluIE9MR0EgQ29sb3IgRWxlbWVudCBWYXJpYWJsZXNcbiR0ZXh0Q29sb3I6IHZhcigtLXRleHRDb2xvcik7IC8vIE1haW4gVGV4dCBDb2xvclxuJHRleHRDb2xvckF0dGVudGlvbjogdmFyKC0tdGV4dENvbG9yQXR0ZW50aW9uKTsgLy8gQXR0ZW50aW9uIHRleHRcbiR0ZXh0Q29sb3JSZW1vdmU6IHZhcigtLXRleHRDb2xvclJlbW92ZSk7IC8vIFJlbW92ZS9EZWxldGUvQ2xvc2VcbiR0ZXh0Q29sb3JBZGQ6IHZhcigtLXRleHRDb2xvckFkZCk7IC8vIEFkZC9DcmVhdGUvT3BlblxuJHRleHRDb2xvckFjdGl2ZTogdmFyKC0tdGV4dENvbG9yQWN0aXZlKTsgLy8gQWRkL0NyZWF0ZS9PcGVuXG4kYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZCk7IC8vIE1haW4gYmFja2dyb3VuZCBDb2xvclxuJGJnQ29udGFpbmVyOiB2YXIoLS1iZ0NvbnRhaW5lcik7IC8vIGJhY2tncm91bmQgb2YgQ29udGFpbmVyc1xuJGJnTWVudTogdmFyKC0tYmdNZW51KTsgLy8gYmFja2dyb3VuZCBvZiBNZW51c1xuJGJnSXRlbTogdmFyKC0tYmdJdGVtKTsgLy8gYmFja2dyb3VuZCBvZiBJdGVtc1xuXG4vLyBDb250ZXh0IE1lbnVcbiRiZ0NvbnRleHQ6IHZhcigtLWJnQ29udGV4dCk7IC8vIGJhY2tncm91bmQgb2YgQ29udGV4dCBNZW51XG4kdGV4dENvbG9yQ29udGV4dDogdmFyKC0tdGV4dENvbG9yQ29udGV4dCk7IC8vIHRleHQgY29sb3IgQ29udGV4dCBNZW51XG4kYm9yZGVyQ29udGV4dDogdmFyKC0tYm9yZGVyQ29udGV4dCk7IC8vIGJvcmRlciBDb250ZXh0IE1lbnVcbiRvdmVybGF5Q29udGV4dEJhY2tncm91bmQ6IHZhcihcbiAgLS1vdmVybGF5Q29udGV4dEJhY2tncm91bmRcbik7IC8vIENvbnRleHQgTWVudSBPdmVybGF5IGJhY2tncm91bmQgbWFpblxuJG92ZXJsYXlDb250ZXh0QmFja2dyb3VuZEdyYWRpZW50OiB2YXIoXG4gIC0tb3ZlcmxheUNvbnRleHRCYWNrZ3JvdW5kR3JhZGllbnRcbik7IC8vIENvbnRleHQgTWVudSBiYWNrZ3JvdW5kIGdyYWRpZW50XG5cbiRpdGVtOiB2YXIoLS1pdGVtKTtcbiRpdGVtLWNvbnRyYXN0OiB2YXIoLS1pdGVtLWNvbnRyYXN0KTtcbiRpdGVtLWJnOiB2YXIoLS1pdGVtLWJnKTtcblxuLyoqKioqKioqKioqKioqKioqKiogTWVudSAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiRtZUJhY2tncm91bmQ6IHZhcigtLW1lQmFja2dyb3VuZCk7XG5cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgQ29udGFpbmVyIFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4kZ3NUZXh0Q29sb3I6IHZhcigtLWdzVGV4dENvbG9yKTsgLy8gVGV4dCBjb2xvciBmb3IgZ2FtZSBzY29yZVxuJGdzQmFja2dyb3VuZDogdmFyKC0tZ3NCYWNrZ3JvdW5kKTsgLy8gYmFja2dyb3VuZCBvZiBDb250YWluZXJzXG4kZ3NMaXN0QmFja2dyb3VuZDogdmFyKC0tZ3NMaXN0QmFja2dyb3VuZCk7IC8vIGxpc3QgYmFja2dyb3VuZCBvZiBnYW1lIHNjb3JlXG4kZ3NCb3JkZXI6IHZhcigtLWdzQm9yZGVyKTsgLy8gYmFja2dyb3VuZCBvZiBNZW51c1xuJGdzVGV4dFNpemU6IHZhcigtLWdzVGV4dFNpemUpOyAvLyBiYWNrZ3JvdW5kIG9mIE1lbnVzXG4kZ3NGb250RmFtaWx5OiB2YXIoLS1nc0ZvbnRGYW1pbHkpOyAvLyBzY29yZSBmb250XG5cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgQ29udGFpbmVyIFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4kZ3NUZXh0Q29sb3JNVzogdmFyKC0tZ3NUZXh0Q29sb3JNVyk7IC8vIFRleHQgY29sb3IgZm9yIGdhbWUgc2NvcmVcbiRnc0JhY2tncm91bmRNVzogdmFyKC0tZ3NCYWNrZ3JvdW5kTVcpOyAvLyBiYWNrZ3JvdW5kIG9mIENvbnRhaW5lcnNcbiRnc0JvcmRlck1XOiB2YXIoLS1nc0JvcmRlck1XKTsgLy8gYmFja2dyb3VuZCBvZiBNZW51c1xuJGdzVGV4dFNpemVNVzogdmFyKC0tZ3NUZXh0U2l6ZU1XKTsgLy8gYmFja2dyb3VuZCBvZiBNZW51c1xuXG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIENvbnRhaW5lciBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuJGdzVGV4dENvbG9yTUI6IHZhcigtLWdzVGV4dENvbG9yTUIpOyAvLyBUZXh0IGNvbG9yIGZvciBnYW1lIHNjb3JlXG4kZ3NCYWNrZ3JvdW5kTUI6IHZhcigtLWdzQmFja2dyb3VuZE1CKTsgLy8gYmFja2dyb3VuZCBvZiBDb250YWluZXJzXG4kZ3NCb3JkZXJNQjogdmFyKC0tZ3NCb3JkZXJNQik7IC8vIGJhY2tncm91bmQgb2YgTWVudXNcbiRnc1RleHRTaXplTUI6IHZhcigtLWdzVGV4dFNpemVNQik7IC8vIGJhY2tncm91bmQgb2YgTWVudXNcblxuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBIaWdobGlnaHQgVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiRnc1RleHRDb2xvckhHOiB2YXIoLS1nc1RleHRDb2xvckhHKTsgLy8gVGV4dCBjb2xvciBmb3IgaGlnaGxpZ2h0XG4kZ3NBbm5vdGF0aW9uQ29sb3JIRzogdmFyKC0tZ3NBbm5vdGF0aW9uQ29sb3JIRyk7IC8vIEFubm90YXRpb24vQ29tbWVudCBjb2xvciBmb3IgaGlnaGxpZ2h0XG4kZ3NCYWNrZ3JvdW5kSEc6IHZhcigtLWdzQmFja2dyb3VuZEhHKTsgLy8gYmFja2dyb3VuZCBmb3IgaGlnaGxpZ2h0XG4kZ3NCb3JkZXJIRzogdmFyKC0tZ3NCb3JkZXJIRyk7IC8vIGJvcmRlciBmb3IgaGlnaGxpZ2h0XG5cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgQW5ub3RhdGlvbiBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuJGdzVGV4dENvbG9yQU46IHZhcigtLWdzVGV4dENvbG9yQU4pOyAvLyBUZXh0IGNvbG9yIGZvciBoaWdobGlnaHRcbiRnc0JhY2tncm91bmRBTjogdmFyKC0tZ3NCYWNrZ3JvdW5kQU4pOyAvLyBiYWNrZ3JvdW5kIGZvciBoaWdobGlnaHRcbiRnc0JvcmRlckFOOiB2YXIoLS1nc0JvcmRlckFOKTsgLy8gYm9yZGVyIGZvciBoaWdobGlnaHRcblxuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBWYXJpYXRpb24gVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiRnc1RleHRDb2xvclZBOiB2YXIoLS1nc1RleHRDb2xvclZBKTsgLy8gVGV4dCBjb2xvciBmb3IgaGlnaGxpZ2h0XG4kZ3NCYWNrZ3JvdW5kVkE6IHZhcigtLWdzQmFja2dyb3VuZFZBKTsgLy8gYmFja2dyb3VuZCBmb3IgaGlnaGxpZ2h0XG4kZ3NCb3JkZXJWQTogdmFyKC0tZ3NCb3JkZXJWQSk7IC8vIGJvcmRlciBmb3IgaGlnaGxpZ2h0XG5cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgUGx5IFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4kZ3NUZXh0Q29sb3JQQzogdmFyKC0tZ3NUZXh0Q29sb3JQQyk7IC8vIFRleHQgY29sb3IgZm9yIGdhbWUgc2NvcmUgcGx5XG4kZ3NCYWNrZ3JvdW5kUEM6IHZhcigtLWdzQmFja2dyb3VuZFBDKTsgLy8gYmFja2dyb3VuZCBmb3IgZ2FtZSBzY29yZSBwbHlcbiRnc0JvcmRlclBDOiB2YXIoLS1nc0JvcmRlclBDKTsgLy8gYm9yZGVyIGZvciBnYW1lIHNjb3JlIHBseVxuXG4vKioqKioqKioqKioqKioqKioqKiogQ29udHJvbCBDb2xvcnMgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuJGNzQmFja2dyb3VuZDogdmFyKC0tY3NCYWNrZ3JvdW5kKTsgLy8gYmFja2dyb3VuZCBmb3IgY29udHJvbHNcbiRjc0NvbG9yOiB2YXIoLS1jc0NvbG9yKTsgLy8gY29udHJvbHMgY29sb3IgKGZvcmVncm91bmQpXG5cbi8qKioqKioqKioqKioqKioqKioqKiBCb2FyZCBDb2xvcnMgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuJGJvYXJkQkdEYXJrOiB2YXIoLS1ib2FyZEJHRGFyayk7IC8vIGJvYXJkIGRhcmsgdGlsZVxuJGJvYXJkQkdMaWdodDogdmFyKC0tYm9hcmRCR0xpZ2h0KTsgLy8gYm9hcmQgbGlnaHQgdGlsZVxuJGJvYXJkTGFiZWxMaWdodDogdmFyKC0tYm9hcmRMYWJlbExpZ2h0KTsgLy8gYm9hcmQgbGlnaHQgbGFiZWxcbiRib2FyZExhYmVsRGFyazogdmFyKC0tYm9hcmRMYWJlbERhcmspOyAvLyBib2FyZCBkYXJrIGxhYmVsXG5cbi8vIEdlbmVyYWwgc3R1ZmZcbiR0ZXh0LWNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcbiRiZy1vdXRlcjogdmFyKC0tYmctb3V0ZXIpO1xuJGJnLWlubmVyOiB2YXIoLS1iZy1pbm5lcik7XG5cbiRiZy1jb2xvcjogI2YyZjNmNztcbiRmZy1jb2xvcjogIzM4M2E0MTtcblxuJGdsb3ctc2hhZG93OiAwIDAgMC41ZW0gdHJhbnNwYXJlbnRpemUoJGJsdWUsIDAuMyk7XG5cbjpyb290IHtcbiAgLS1iZy1jb2xvcjogI3skYmctY29sb3J9O1xuICAtLWZnLWNvbG9yOiAjeyRmZy1jb2xvcn07XG5cbiAgLS1yZWQ6ICN7JHJlZH07XG4gIC0tZ3JlZW46ICN7JGdyZWVufTtcbiAgLS1ibHVlOiAjeyRibHVlfTtcbiAgLS1kYXJrLWJsdWU6ICN7JGRhcmstYmx1ZX07XG4gIC0tbWFyb29uOiAjeyRtYXJvb259O1xuICAtLXB1cnBsZTogI3skcHVycGxlfTtcbn1cblxuLy8gOjotbW96LWZvY3VzLWlubmVyLFxuLy8gOi1tb3otZm9jdXNyaW5nIHtcbi8vICAgYm9yZGVyOiAwO1xuLy8gICBjb2xvcjogdHJhbnNwYXJlbnQ7XG4vLyAgIHRleHQtc2hhZG93OiAwIDAgMCAkZmctY29sb3I7XG4vLyB9XG5cbi8vIDo6c2VsZWN0aW9uLFxuLy8gOjotbW96LXNlbGVjdGlvbiB7XG4vLyAgIGNvbG9yOiB3aGl0ZTtcbi8vICAgYmFja2dyb3VuZDogYmxhY2s7XG4vLyB9XG5cbi8vICoge1xuLy8gICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuLy8gICBvdXRsaW5lOiBub25lO1xuLy8gICB1c2VyLXNlbGVjdDogbm9uZTtcbi8vICAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xuLy8gICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuLy8gICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7XG4vLyAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4vLyAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbi8vICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuLy8gICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4vLyAgIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKSAhaW1wb3J0YW50O1xuLy8gICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XG4vLyAgIGN1cnNvcjogZGVmYXVsdDtcbi8vICAgbGV0dGVyLXNwYWNpbmc6IDA7XG4vLyB9XG5cbi8vIC5zZWxlY3RhYmxlLFxuLy8gLnNlbGVjdGFibGUgKiB7XG4vLyAgIGN1cnNvcjogYXV0bztcbi8vICAgdXNlci1zZWxlY3Q6IHRleHQ7XG4vLyAgIC13ZWJraXQtdG91Y2gtY2FsbG91dDogdGV4dDtcbi8vICAgLXdlYmtpdC11c2VyLXNlbGVjdDogdGV4dDtcbi8vICAgLWtodG1sLXVzZXItc2VsZWN0OiB0ZXh0O1xuLy8gICAtbW96LXVzZXItc2VsZWN0OiB0ZXh0O1xuLy8gICAtbXMtdXNlci1zZWxlY3Q6IHRleHQ7XG4vLyB9XG5cbi8vIGh0bWwsXG4vLyBib2R5IHtcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogJGJnLWNvbG9yO1xuLy8gICBjb2xvcjogJGZnLWNvbG9yO1xuLy8gICBtYXJnaW46IDA7XG4vLyAgIHBhZGRpbmc6IDA7XG4vLyAgIGZvbnQtc2l6ZTogMTBwdDtcbi8vICAgaGVpZ2h0OiAxMDAlO1xuLy8gICBvdmVyZmxvdzogYXV0bztcbi8vIH1cblxuLy8gLndpdGgtc2hhZG93IHtcbi8vICAgYm94LXNoYWRvdzogNnB4IDZweCAxMHB4IHRyYW5zcGFyZW50aXplKGJsYWNrLCAwLjkpLCAtNnB4IC02cHggMTBweCB3aGl0ZTtcbi8vIH1cblxuLy8gLm91dHNldCB7XG4vLyAgIEBleHRlbmQgLndpdGgtc2hhZG93O1xuXG4vLyAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4vLyAgIGJhY2tncm91bmQ6ICRiZy1jb2xvcjtcbi8vIH1cblxuLy8gLmluc2V0IHtcbi8vICAgYm9yZGVyLXJhZGl1czogMTBweDtcbi8vICAgYm94LXNoYWRvdzogMCAwIHRyYW5zcGFyZW50LCAwIDAgdHJhbnNwYXJlbnQsXG4vLyAgICAgaW5zZXQgM3B4IDNweCA1cHggdHJhbnNwYXJlbnRpemUoYmxhY2ssIDAuOSksIGluc2V0IC0zcHggLTNweCA1cHggd2hpdGU7XG4vLyAgIGJhY2tncm91bmQ6IGxpZ2h0ZW4oJGJnLWNvbG9yLCAyJSk7XG4vLyB9XG5cbi8vIC5wYXBlciB7XG4vLyAgIEBleHRlbmQgLm91dHNldDtcbi8vICAgcGFkZGluZzogMTBweCAyMHB4IDIwcHg7XG4vLyAgIG1hcmdpbi10b3A6IDIwcHg7XG4vLyAgIG1pbi1oZWlnaHQ6IDEwMHB4O1xuLy8gICBmb250LXNpemU6IDEuMmVtO1xuLy8gICBiYWNrZ3JvdW5kOiAkYmctY29sb3I7XG4vLyB9XG5cbi8vIHNlY3Rpb24sXG4vLyBhcnRpY2xlLFxuLy8gLnNlY3Rpb24sXG4vLyAuYXJ0aWNsZSxcbi8vIC5wYXBlciB7XG4vLyAgIGxpbmUtaGVpZ2h0OiAyZW07XG4vLyAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbi8vICAgd29yZC1icmVhazogbm9ybWFsO1xuLy8gICBsaW5lLWhlaWdodDogMmVtO1xuLy8gfVxuXG4vLyBpbnB1dFt0eXBlPVwidGV4dFwiXSxcbi8vIGlucHV0W3R5cGU9XCJzZWFyY2hcIl0sXG4vLyBpbnB1dFt0eXBlPVwidGVsXCJdLFxuLy8gaW5wdXRbdHlwZT1cInVybFwiXSxcbi8vIGlucHV0W3R5cGU9XCJlbWFpbFwiXSxcbi8vIGlucHV0W3R5cGU9XCJwYXNzd29yZFwiXSxcbi8vIGlucHV0W3R5cGU9XCJkYXRlXCJdLFxuLy8gaW5wdXRbdHlwZT1cIm1vbnRoXCJdLFxuLy8gaW5wdXRbdHlwZT1cIndlZWtcIl0sXG4vLyBpbnB1dFt0eXBlPVwidGltZVwiXSxcbi8vIGlucHV0W3R5cGU9XCJudW1iZXJcIl0sXG4vLyBpbnB1dFt0eXBlPVwiY29sb3JcIl0sXG4vLyBzZWxlY3QsXG4vLyB0ZXh0YXJlYSB7XG4vLyAgIGJvcmRlcjogMDtcbi8vICAgYmFja2dyb3VuZDogJGJnLWNvbG9yO1xuLy8gICBjb2xvcjogJGZnLWNvbG9yO1xuLy8gICBmb250LXdlaWdodDogbm9ybWFsO1xuLy8gICBwYWRkaW5nOiAwIDEuMjVlbTtcbi8vICAgbGluZS1oZWlnaHQ6IDEuMjVlbTtcbi8vICAgaGVpZ2h0OiAzLjVlbTtcbi8vICAgbWFyZ2luOiAxMHB4IDA7XG4vLyAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuLy8gICBjdXJzb3I6IHRleHQ7XG4vLyAgIHVzZXItc2VsZWN0OiB0ZXh0O1xuLy8gICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IHRleHQ7XG4vLyAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IHRleHQ7XG4vLyAgIC1raHRtbC11c2VyLXNlbGVjdDogdGV4dDtcbi8vICAgLW1vei11c2VyLXNlbGVjdDogdGV4dDtcbi8vICAgLW1zLXVzZXItc2VsZWN0OiB0ZXh0O1xuLy8gICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuMnM7XG5cbi8vICAgJjpub3Qoc2VsZWN0KSB7XG4vLyAgICAgQGV4dGVuZCAuaW5zZXQ7XG5cbi8vICAgICAmOmZvY3VzIHtcbi8vICAgICAgIEBleHRlbmQgLm91dHNldDtcbi8vICAgICB9XG4vLyAgIH1cbi8vIH1cblxuLy8gdGV4dGFyZWEge1xuLy8gICBoZWlnaHQ6IDM1MHB4O1xuLy8gICBwYWRkaW5nOiAxLjI1ZW07XG4vLyB9XG5cbi8vIHNlbGVjdCB7XG4vLyAgIEBleHRlbmQgLm91dHNldDtcblxuLy8gICBjdXJzb3I6IHBvaW50ZXI7XG4vLyAgIGJhY2tncm91bmQ6IHVybChkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUIyWlhKemFXOXVQU0l4TGpFaUlIWnBaWGRDYjNnOUlqQWdNQ0F4T1NBeE9TSWdlRzFzYm5NOUltaDBkSEE2THk5M2QzY3Vkek11YjNKbkx6SXdNREF2YzNabklqNDhaeUIwY21GdWMyWnZjbTA5SW0xaGRISnBlQ2d1TURNMElEQWdNQ0F1TURNMElDMDJMamdnTVM0M1pTMDFLU0lnYzNSNWJHVTlJbVpwYkd3Nkl6ZGlOMlU0WXlJK1BIQmhkR2dnWkQwaWJUUTRNQ0F6TkRRdE1qRXhMVEl4TW1NdE1UWXRNVFl0TkRFdE1UWXROVGNnTUMweE5pQXhOaTB4TmlBME1pQXdJRFUzYkRJek9DQXlNemxqT0M0MElEZ3VOU0F5TUNBeE1pQXpNU0F4TWlBeE1TQXdMalUySURJeUxUTXVNaUF6TVMweE1td3lNemd0TWpNNVl6RTJMVEUySURFMkxUUXlJREF0TlRkekxUUXhMVEUyTFRVM0lEQjZJaUJ6ZEhsc1pUMGlabWxzYkRvak4ySTNaVGhqSWk4K1BDOW5Qand2YzNablBnbz0pXG4vLyAgICAgbm8tcmVwZWF0IHJpZ2h0IDFlbSBjZW50ZXI7XG4vLyAgIGJhY2tncm91bmQtc2l6ZTogMS4yZW07XG4vLyAgIHBhZGRpbmctcmlnaHQ6IDNlbTtcbi8vIH1cblxuLy8gaW5wdXQ6OnBsYWNlaG9sZGVyLFxuLy8gdGV4dGFyZWE6OnBsYWNlaG9sZGVyIHtcbi8vICAgb3BhY2l0eTogMTtcbi8vICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzO1xuLy8gICBjb2xvcjogaW5oZXJpdDtcbi8vIH1cblxuLy8gaW5wdXQ6Zm9jdXM6OnBsYWNlaG9sZGVyLFxuLy8gdGV4dGFyZWE6Zm9jdXM6OnBsYWNlaG9sZGVyIHtcbi8vICAgb3BhY2l0eTogMC4yO1xuLy8gfVxuXG4vLyBpbnB1dDotbXMtaW5wdXQtcGxhY2Vob2xkZXIsXG4vLyB0ZXh0YXJlYTotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuLy8gICBvcGFjaXR5OiAxO1xuLy8gICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnM7XG4vLyAgIGNvbG9yOiBpbmhlcml0O1xuLy8gfVxuXG4vLyBpbnB1dDpmb2N1czotbXMtaW5wdXQtcGxhY2Vob2xkZXIsXG4vLyB0ZXh0YXJlYTpmb2N1czotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuLy8gICBvcGFjaXR5OiAwLjI7XG4vLyB9XG5cbi8vIGlucHV0W3R5cGU9XCJzZWFyY2hcIl06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24sXG4vLyBpbnB1dFt0eXBlPVwic2VhcmNoXCJdOjotd2Via2l0LXNlYXJjaC1jYW5jZWwtYnV0dG9uLFxuLy8gaW5wdXRbdHlwZT1cInNlYXJjaFwiXTo6LXdlYmtpdC1zZWFyY2gtcmVzdWx0cy1idXR0b24sXG4vLyBpbnB1dFt0eXBlPVwic2VhcmNoXCJdOjotd2Via2l0LXNlYXJjaC1yZXN1bHRzLWRlY29yYXRpb24ge1xuLy8gICBkaXNwbGF5OiBub25lO1xuLy8gfVxuXG4vLyBidXR0b24sXG4vLyBpbnB1dFt0eXBlPVwiYnV0dG9uXCJdLFxuLy8gaW5wdXRbdHlwZT1cInN1Ym1pdFwiXSxcbi8vIGlucHV0W3R5cGU9XCJyZXNldFwiXSB7XG4vLyAgIEBleHRlbmQgLm91dHNldDtcblxuLy8gICBib3JkZXI6IDA7XG4vLyAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuLy8gICBwYWRkaW5nOiAxMHB4IDA7XG4vLyAgIHdpZHRoOiA4ZW07XG4vLyAgIHRleHQtYWxpZ246IGNlbnRlcjtcbi8vICAgY3Vyc29yOiBwb2ludGVyO1xuLy8gICBjb2xvcjogaW5oZXJpdDtcbi8vICAgZm9udC1zaXplOiAxLjFyZW07XG4vLyAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGJhY2tncm91bmQtY29sb3IsIGJveC1zaGFkb3c7XG4vLyAgIHRyYW5zaXRpb24tZGVsYXk6IDAuMnM7XG4vLyAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMnM7XG5cbi8vICAgJi5hY3RpdmUsXG4vLyAgICY6YWN0aXZlIHtcbi8vICAgICBAZXh0ZW5kIC5pbnNldDtcblxuLy8gICAgIHRyYW5zaXRpb24tZGVsYXk6IDBzO1xuLy8gICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMXM7XG4vLyAgIH1cblxuLy8gICBAZWFjaCAkbmFtZSwgJGNvbG9yIGluIChcInJlZFwiOiAkcmVkLCBcImdyZWVuXCI6ICRncmVlbiwgXCJibHVlXCI6ICRibHVlKSB7XG4vLyAgICAgQGF0LXJvb3QgLiN7JG5hbWV9LWJ1dHRvbixcbi8vICAgICAgICYuI3skbmFtZX0tYnV0dG9uIHtcbi8vICAgICAgIEBleHRlbmQgYnV0dG9uO1xuXG4vLyAgICAgICAkX2JnLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAkY29sb3IgMzAlLCBsaWdodGVuKCRjb2xvciwgNiUpIDgwJSk7XG5cbi8vICAgICAgIGNvbG9yOiB3aGl0ZTtcbi8vICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuLy8gICAgICAgdGV4dC1zaGFkb3c6IDAgMC4xZW0gMC4xZW0gdHJhbnNwYXJlbnRpemUoYmxhY2ssIDAuMyk7XG4vLyAgICAgICBiYWNrZ3JvdW5kOiAkX2JnLWltYWdlO1xuLy8gICAgICAgYm94LXNoYWRvdzogMCAwIDAuNWVtIHRyYW5zcGFyZW50aXplKCRjb2xvciwgMC4zKSwgMCAwIHRyYW5zcGFyZW50LFxuLy8gICAgICAgICBpbnNldCAwIC01cHggMCB0cmFuc3BhcmVudGl6ZShibGFjaywgMC45NSksXG4vLyAgICAgICAgIGluc2V0IDAgMnB4IDAgdHJhbnNwYXJlbnRpemUod2hpdGUsIDAuOCk7XG4vLyAgICAgICBib3JkZXItcmFkaXVzOiA2cHggNnB4IDhweCA4cHg7XG4vLyAgICAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBib3gtc2hhZG93LCBib3JkZXItcmFkaXVzO1xuXG4vLyAgICAgICAmLmFjdGl2ZSxcbi8vICAgICAgICY6YWN0aXZlIHtcbi8vICAgICAgICAgYmFja2dyb3VuZDogJF9iZy1pbWFnZTtcbi8vICAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuLy8gICAgICAgICBib3gtc2hhZG93OiAwIDAgdHJhbnNwYXJlbnQsIDAgMCB0cmFuc3BhcmVudCxcbi8vICAgICAgICAgICBpbnNldCAwIDJweCA1cHggMnB4IHRyYW5zcGFyZW50aXplKGJsYWNrLCAwLjgpO1xuLy8gICAgICAgfVxuLy8gICAgIH1cbi8vICAgfVxuLy8gfVxuXG4vLyBsYWJlbCB7XG4vLyAgICYsXG4vLyAgICYgKiB7XG4vLyAgICAgY3Vyc29yOiBwb2ludGVyO1xuLy8gICB9XG5cbi8vICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuLy8gICBwYWRkaW5nOiAwLjU2ZW0gMDtcbi8vIH1cblxuLy8gYSB7XG4vLyAgICYsXG4vLyAgICY6bGluayxcbi8vICAgJjp2aXNpdGVkLFxuLy8gICAmOmhvdmVyICY6YWN0aXZlIHtcbi8vICAgICAmLFxuLy8gICAgICYgKiB7XG4vLyAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4vLyAgICAgfVxuXG4vLyAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4vLyAgICAgY29sb3I6ICRibHVlO1xuLy8gICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuLy8gICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbi8vICAgfVxuLy8gfVxuXG4vLyBoMSxcbi8vIGgyLFxuLy8gaDMsXG4vLyBoNCxcbi8vIGg1LFxuLy8gaDYge1xuLy8gICBsaW5lLWhlaWdodDogMS41ZW07XG4vLyB9XG5cbi8vIGgxIHtcbi8vICAgZm9udC1zaXplOiA0ZW07XG4vLyAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuLy8gICBtYXJnaW46IDAuN2VtIDA7XG4vLyB9XG5cbi8vIGgyIHtcbi8vICAgZm9udC1zaXplOiAzZW07XG4vLyAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuLy8gICBtYXJnaW46IDAuOGVtIDA7XG4vLyB9XG5cbi8vIGgzIHtcbi8vICAgZm9udC1zaXplOiAyLjVlbTtcbi8vICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4vLyAgIG1hcmdpbjogMC45ZW0gMDtcbi8vIH1cblxuLy8gaDQge1xuLy8gICBmb250LXNpemU6IDJlbTtcbi8vICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4vLyAgIG1hcmdpbjogMWVtIDA7XG4vLyB9XG5cbi8vIGg1IHtcbi8vICAgbWFyZ2luOiAwLjVlbSAwO1xuLy8gICBmb250LXNpemU6IDEuMmVtO1xuLy8gICBmb250LXdlaWdodDogbm9ybWFsO1xuLy8gfVxuXG4vLyBoNiB7XG4vLyAgIG1hcmdpbjogMWVtIDAgMWVtIDEuNGVtO1xuLy8gICBmb250LXNpemU6IDFlbTtcbi8vICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4vLyB9XG5cbi8vIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSxcbi8vIGlucHV0W3R5cGU9XCJyYWRpb1wiXSB7XG4vLyAgICRfYm9yZGVyLXdpZHRoOiAwLjE1ZW07XG4vLyAgICRfYm94LXNoYWRvdzogMnB4IDJweCAzcHggdHJhbnNwYXJlbnRpemUoYmxhY2ssIDAuOCksIC0ycHggLTJweCAzcHggd2hpdGUsXG4vLyAgICAgaW5zZXQgMXB4IDFweCAycHggdHJhbnNwYXJlbnRpemUoYmxhY2ssIDAuOCksIGluc2V0IC0xcHggLTFweCAycHggd2hpdGU7XG4vLyAgIGZvbnQtc2l6ZTogMWVtO1xuLy8gICBjdXJzb3I6IHBvaW50ZXI7XG4vLyAgIGhlaWdodDogMS4yZW07XG4vLyAgIHdpZHRoOiAxLjJlbTtcbi8vICAgbWFyZ2luOiAwIDAuM2VtO1xuLy8gICBib3gtc2hhZG93OiAkX2JveC1zaGFkb3c7XG4vLyAgIGJvcmRlcjogJF9ib3JkZXItd2lkdGggc29saWQgJGJnLWNvbG9yO1xuLy8gICB2ZXJ0aWNhbC1hbGlnbjogdGV4dC1ib3R0b207XG4vLyAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGJhY2tncm91bmQsIGJveC1zaGFkb3c7XG4vLyAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMnM7XG5cbi8vICAgJjphY3RpdmUge1xuLy8gICAgIGJveC1zaGFkb3c6ICRfYm94LXNoYWRvdywgaW5zZXQgMCAwLjFlbSAwLjI1ZW0gdHJhbnNwYXJlbnRpemUoYmxhY2ssIDAuOCk7XG4vLyAgIH1cblxuLy8gICAmOmNoZWNrZWQge1xuLy8gICAgIGJvcmRlci13aWR0aDogMC4xZW07XG4vLyAgICAgYm9yZGVyLWNvbG9yOiBkYXJrZW4oJGJsdWUsIDEwJSk7XG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJsdWU7XG4vLyAgIH1cbi8vIH1cblxuLy8gaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdIHtcbi8vICAgYm9yZGVyLXJhZGl1czogMjUlO1xuXG4vLyAgICY6Y2hlY2tlZCB7XG4vLyAgICAgYm94LXNoYWRvdzogJGdsb3ctc2hhZG93LCBpbnNldCAwIC0wLjFlbSAwIHRyYW5zcGFyZW50aXplKGJsYWNrLCAwLjgpLFxuLy8gICAgICAgaW5zZXQgMCAwLjFlbSAwLjFlbSB0cmFuc3BhcmVudGl6ZSh3aGl0ZSwgMC44KTtcbi8vICAgfVxuLy8gfVxuXG4vLyBpbnB1dFt0eXBlPVwicmFkaW9cIl0ge1xuLy8gICBib3JkZXItcmFkaXVzOiAxMDAlO1xuXG4vLyAgICY6Y2hlY2tlZCB7XG4vLyAgICAgYm94LXNoYWRvdzogJGdsb3ctc2hhZG93O1xuLy8gICAgIGJveC1zaGFkb3c6ICRnbG93LXNoYWRvdywgaW5zZXQgMCAwLjEyZW0gMC4xZW0gdHJhbnNwYXJlbnRpemUod2hpdGUsIDAuNzUpO1xuLy8gICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDAuMTVlbTtcbi8vICAgfVxuLy8gfVxuXG4vLyAuY2hlY2t0ZXh0IHtcbi8vICAgd2lkdGg6IGF1dG87XG4vLyAgIG1hcmdpbjogMC41ZW07XG5cbi8vICAgaW5wdXQge1xuLy8gICAgIGRpc3BsYXk6IG5vbmU7XG5cbi8vICAgICArIHNwYW4ge1xuLy8gICAgICAgQGV4dGVuZCBidXR0b247XG5cbi8vICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuLy8gICAgICAgcGFkZGluZzogMWVtO1xuLy8gICAgICAgdHJhbnNpdGlvbi1kZWxheTogMHM7XG4vLyAgICAgfVxuXG4vLyAgICAgJjpjaGVja2VkICsgc3BhbiB7XG4vLyAgICAgICBAZXh0ZW5kIC5ibHVlLWJ1dHRvbjtcblxuLy8gICAgICAgcGFkZGluZzogMWVtO1xuLy8gICAgIH1cbi8vICAgfVxuLy8gfVxuXG4vLyAuc3dpdGNoIHtcbi8vICAgJF9oZWlnaHQ6IDJyZW07XG4vLyAgICRfd2lkdGg6IDhyZW07XG4vLyAgICRfaGFuZGxlLXdpZHRoOiAkX2hlaWdodDtcbi8vICAgJF9oYW5kbGUtdHJhbnNsYXRpb246ICRfd2lkdGggLSAkX2hhbmRsZS13aWR0aDtcblxuLy8gICBoZWlnaHQ6ICRfaGVpZ2h0O1xuLy8gICB3aWR0aDogJF93aWR0aDtcbi8vICAgcGFkZGluZzogMDtcbi8vICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4vLyAgIGlucHV0IHtcbi8vICAgICBkaXNwbGF5OiBub25lO1xuXG4vLyAgICAgKyBkaXYge1xuLy8gICAgICAgaGVpZ2h0OiAxMDAlO1xuLy8gICAgICAgd2lkdGg6IDEwMCU7XG4vLyAgICAgICBib3JkZXItcmFkaXVzOiA5OTlweDtcbi8vICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuLy8gICAgICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYm94LXNoYWRvdywgYmFja2dyb3VuZC1jb2xvcjtcbi8vICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMnM7XG4vLyAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjJzO1xuLy8gICAgICAgYm94LXNoYWRvdzogM3B4IDNweCAycHggLTJweCB0cmFuc3BhcmVudGl6ZShibGFjaywgMC45KSxcbi8vICAgICAgICAgaW5zZXQgMnB4IDJweCAycHggMXB4IHRyYW5zcGFyZW50aXplKGJsYWNrLCAwLjkpLFxuLy8gICAgICAgICBpbnNldCAtMnB4IC0ycHggMXB4IHdoaXRlO1xuXG4vLyAgICAgICAmOjpiZWZvcmUge1xuLy8gICAgICAgICBjb250ZW50OiBcIlwiO1xuLy8gICAgICAgICBkaXNwbGF5OiBibG9jaztcbi8vICAgICAgICAgaGVpZ2h0OiBjYWxjKCN7JF9oYW5kbGUtd2lkdGh9ICsgNHB4KTtcbi8vICAgICAgICAgd2lkdGg6IGNhbGMoI3skX2hhbmRsZS13aWR0aH0gKyA0cHgpO1xuLy8gICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuLy8gICAgICAgICBib3JkZXI6IHNvbGlkIHdoaXRlIDNweDtcbi8vICAgICAgICAgYmFja2dyb3VuZDogJGJsdWU7XG4vLyAgICAgICAgIGJveC1zaGFkb3c6IDAgM3B4IDEwcHggdHJhbnNwYXJlbnRpemUoYmxhY2ssIDAuOCksXG4vLyAgICAgICAgICAgaW5zZXQgMCAtMXB4IDNweCB0cmFuc3BhcmVudGl6ZShibGFjaywgMC45KTtcbi8vICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTZweCk7XG4vLyAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzO1xuLy8gICAgICAgfVxuLy8gICAgIH1cblxuLy8gICAgICY6Y2hlY2tlZCArIGRpdiB7XG4vLyAgICAgICBiYWNrZ3JvdW5kOiAkYmx1ZTtcbi8vICAgICAgIGJveC1zaGFkb3c6ICRnbG93LXNoYWRvdywgaW5zZXQgMCAycHggMnB4IDJweCB0cmFuc3BhcmVudGl6ZShibGFjaywgMC43KSxcbi8vICAgICAgICAgaW5zZXQgMCAwIHRyYW5zcGFyZW50O1xuXG4vLyAgICAgICAmOjpiZWZvcmUge1xuLy8gICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgkX2hhbmRsZS10cmFuc2xhdGlvbiwgLTZweCk7XG4vLyAgICAgICB9XG4vLyAgICAgfVxuLy8gICB9XG4vLyB9XG5cbi8vIGhyIHtcbi8vICAgQGV4dGVuZCAuaW5zZXQ7XG4vLyAgIHdpZHRoOiA3MiU7XG4vLyAgIGhlaWdodDogOHB4O1xuLy8gICBmbG9hdDogcmlnaHQ7XG4vLyAgIGJvcmRlcjogMDtcbi8vIH1cblxuLy8gY29kZSxcbi8vIHByZSB7XG4vLyAgIHBhZGRpbmc6IDAuNWVtIDFlbTtcbi8vICAgYm9yZGVyLXJhZGl1czogNHB4O1xuLy8gICBvdmVyZmxvdzogYXV0bztcbi8vICAgYm94LXNoYWRvdzogMCA1cHggMzBweCAwIHRyYW5zcGFyZW50aXplKGJsYWNrLCAwLjk1KTtcbi8vIH1cblxuLy8gY29kZSB7XG4vLyAgIGJhY2tncm91bmQ6ICNlNmU2ZTY7XG4vLyB9XG5cbi8vIHByZSB7XG4vLyAgIGJhY2tncm91bmQ6IHdoaXRlO1xuLy8gICBtYXJnaW46IDRlbSAwO1xuLy8gfVxuXG4vLyBjb2RlLFxuLy8gcHJlIHtcbi8vICAgJixcbi8vICAgJiAqIHtcbi8vICAgICBmb250LXNpemU6IDAuOXJlbTtcbi8vICAgICBsaW5lLWhlaWdodDogMmVtO1xuLy8gICAgIGN1cnNvcjogYXV0bztcbi8vICAgICB1c2VyLXNlbGVjdDogdGV4dDtcbi8vICAgICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IHRleHQ7XG4vLyAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogdGV4dDtcbi8vICAgICAta2h0bWwtdXNlci1zZWxlY3Q6IHRleHQ7XG4vLyAgICAgLW1vei11c2VyLXNlbGVjdDogdGV4dDtcbi8vICAgICAtbXMtdXNlci1zZWxlY3Q6IHRleHQ7XG4vLyAgIH1cbi8vIH1cblxuLy8gYmxvY2txdW90ZSB7XG4vLyAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuLy8gICBwYWRkaW5nOiAwLjVlbSAxZW07XG4vLyAgIGJvcmRlci1yYWRpdXM6IDRweDtcbi8vICAgYm94LXNoYWRvdzogMCA1cHggMzBweCAwIHRyYW5zcGFyZW50aXplKGJsYWNrLCAwLjk1KTtcbi8vICAgYm9yZGVyLWxlZnQ6IDZweCBzb2xpZCAkYmx1ZTtcbi8vIH1cbiIsIkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnQ2F2ZWF0JztcbiAgICBzcmM6IHVybCgnLi4vLi4vZm9udHMvQm9sZC9DYXZlYXQtQm9sZC53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcbiAgICAgICAgdXJsKCcuLi8uLi9mb250cy9Cb2xkL0NhdmVhdC1Cb2xkLndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC1kaXNwbGF5OiBzd2FwO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ0NhdmVhdCc7XG4gICAgc3JjOiB1cmwoJy4uLy4uL2ZvbnRzL1JlZ3VsYXIvQ2F2ZWF0LVJlZ3VsYXIud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXG4gICAgICAgIHVybCgnLi4vLi4vZm9udHMvUmVndWxhci9DYXZlYXQtUmVndWxhci53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC1kaXNwbGF5OiBzd2FwO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdGaWd1cmluZVN5bWJvbFQxJztcbiAgc3JjOiB1cmwoJy4uLy4uL2ZvbnRzLzNyZCBQYXJ0eS9DaGVzc1ZhcmlhbnRzL0ZpZ3VyaW5lU3ltYm9sVDFCb2xkLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxuICAgICAgdXJsKCcuLi8uLi9mb250cy8zcmQgUGFydHkvQ2hlc3NWYXJpYW50cy9GaWd1cmluZVN5bWJvbFQxQm9sZC53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnRmlndXJpbmVTeW1ib2xUMSc7XG4gIHNyYzogdXJsKCcuLi8uLi9mb250cy8zcmQgUGFydHkvQ2hlc3NWYXJpYW50cy9GaWd1cmluZVN5bWJvbFQxLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxuICAgICAgdXJsKCcuLi8uLi9mb250cy8zcmQgUGFydHkvQ2hlc3NWYXJpYW50cy9GaWd1cmluZVN5bWJvbFQxLndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG59XG5cbiIsIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJDYXZlYXRcIjtcbiAgc3JjOiB1cmwoXCIuLi8uLi9mb250cy9Cb2xkL0NhdmVhdC1Cb2xkLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpLCB1cmwoXCIuLi8uLi9mb250cy9Cb2xkL0NhdmVhdC1Cb2xkLndvZmZcIikgZm9ybWF0KFwid29mZlwiKTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkNhdmVhdFwiO1xuICBzcmM6IHVybChcIi4uLy4uL2ZvbnRzL1JlZ3VsYXIvQ2F2ZWF0LVJlZ3VsYXIud29mZjJcIikgZm9ybWF0KFwid29mZjJcIiksIHVybChcIi4uLy4uL2ZvbnRzL1JlZ3VsYXIvQ2F2ZWF0LVJlZ3VsYXIud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJGaWd1cmluZVN5bWJvbFQxXCI7XG4gIHNyYzogdXJsKFwiLi4vLi4vZm9udHMvM3JkIFBhcnR5L0NoZXNzVmFyaWFudHMvRmlndXJpbmVTeW1ib2xUMUJvbGQud29mZjJcIikgZm9ybWF0KFwid29mZjJcIiksIHVybChcIi4uLy4uL2ZvbnRzLzNyZCBQYXJ0eS9DaGVzc1ZhcmlhbnRzL0ZpZ3VyaW5lU3ltYm9sVDFCb2xkLndvZmZcIikgZm9ybWF0KFwid29mZlwiKTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkZpZ3VyaW5lU3ltYm9sVDFcIjtcbiAgc3JjOiB1cmwoXCIuLi8uLi9mb250cy8zcmQgUGFydHkvQ2hlc3NWYXJpYW50cy9GaWd1cmluZVN5bWJvbFQxLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpLCB1cmwoXCIuLi8uLi9mb250cy8zcmQgUGFydHkvQ2hlc3NWYXJpYW50cy9GaWd1cmluZVN5bWJvbFQxLndvZmZcIikgZm9ybWF0KFwid29mZlwiKTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG59XG4vKioqKioqKioqKioqKioqKioqKiBNZW51ICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBDb250YWluZXIgVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgQ29udGFpbmVyIFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIENvbnRhaW5lciBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBIaWdobGlnaHQgVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgQW5ub3RhdGlvbiBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBWYXJpYXRpb24gVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgUGx5IFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKiogQ29udHJvbCBDb2xvcnMgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKioqIEJvYXJkIENvbG9ycyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG46cm9vdCB7XG4gIC0tYmctY29sb3I6ICNmMmYzZjc7XG4gIC0tZmctY29sb3I6ICMzODNhNDE7XG4gIC0tcmVkOiAjZTQzMDMwO1xuICAtLWdyZWVuOiAjMTlhMTg3O1xuICAtLWJsdWU6ICMzNjdiZjA7XG4gIC0tZGFyay1ibHVlOiAjMjY1YWIxO1xuICAtLW1hcm9vbjogI2I4MTc0YztcbiAgLS1wdXJwbGU6ICM4YzQyYWI7XG59XG5cbi5rZXltYXAtbGFiZWwge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDg2cHg7XG4gIGJvdHRvbTogMThweDtcbiAgaGVpZ2h0OiAxNHB4O1xuICB3aWR0aDogMTgwcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDE0cHg7XG4gIGNvbG9yOiB2YXIoLS1nc1RleHRDb2xvcik7XG59XG5cbi5pY29uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogNjRweDtcbiAgaGVpZ2h0OiA2NHB4O1xuICBib3JkZXI6IDJweCB3aGl0ZSBzb2xpZDtcbiAgYmFja2dyb3VuZDogdmFyKC0tY3NCYWNrZ3JvdW5kKTtcbn1cblxuLmZlYXRoZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDEwJTtcbiAgd2lkdGg6IDgwJTtcbiAgaGVpZ2h0OiA4MCU7XG4gIHRvcDogMTAlO1xuICBzdHJva2U6IHZhcigtLWNzQ29sb3IpO1xuICBzdHJva2Utd2lkdGg6IDI7XG4gIHN0cm9rZS1saW5lY2FwOiByb3VuZDtcbiAgc3Ryb2tlLWxpbmVqb2luOiByb3VuZDtcbiAgZmlsbDogbm9uZTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](KeymapItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'keymap-item',
                templateUrl: './keymap-item.component.html',
                styleUrls: ['./keymap-item.component.scss']
            }]
    }], function () { return []; }, { icon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], label: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], key: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], svgContainer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["svgContainer", { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]
        }], labelElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["labelElement", { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]
        }] }); })();


/***/ }),

/***/ "./src/app/olga-menu/keymap-menu/keymap-menu.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/olga-menu/keymap-menu/keymap-menu.component.ts ***!
  \****************************************************************/
/*! exports provided: FeatherIcons, KeymapMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeatherIcons", function() { return FeatherIcons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeymapMenuComponent", function() { return KeymapMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _keymap_item_keymap_item_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keymap-item/keymap-item.component */ "./src/app/olga-menu/keymap-menu/keymap-item/keymap-item.component.ts");



const _c0 = ["container"];
class FeatherIcons {
}
FeatherIcons.Rewind = '/assets/images/feather-sprite.svg#rewind';
FeatherIcons.Forward = '/assets/images/feather-sprite.svg#forward';
class KeymapMenuComponent {
    constructor() {
        this.icons = FeatherIcons;
        this.container = null;
    }
    ngOnInit() {
    }
    hide() {
        if (this.container) {
            this.container.nativeElement.style.visibility = 'hidden';
        }
    }
    show() {
        if (this.container) {
            this.container.nativeElement.style.visibility = 'visible';
        }
    }
    resize(width, height) {
    }
}
KeymapMenuComponent.ɵfac = function KeymapMenuComponent_Factory(t) { return new (t || KeymapMenuComponent)(); };
KeymapMenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: KeymapMenuComponent, selectors: [["keymap-menu"]], viewQuery: function KeymapMenuComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.container = _t.first);
    } }, decls: 5, vars: 0, consts: [[1, "settings-container"], ["container", ""], ["icon", "rewind", "label", "Jump to <b>Start of Game</b>"], ["icon", "fast-forward", "label", "Jump to <b>End of Game</b>"], ["icon", "chevron-left", "label", "<b>Previous Move</b>"]], template: function KeymapMenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "keymap-item", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "keymap-item", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "keymap-item", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_keymap_item_keymap_item_component__WEBPACK_IMPORTED_MODULE_1__["KeymapItemComponent"]], styles: ["@font-face {\n  font-family: \"Caveat\";\n  src: url('Caveat-Bold.woff2') format(\"woff2\"), url('Caveat-Bold.woff') format(\"woff\");\n  font-weight: bold;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"Caveat\";\n  src: url('Caveat-Regular.woff2') format(\"woff2\"), url('Caveat-Regular.woff') format(\"woff\");\n  font-weight: 600;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"FigurineSymbolT1\";\n  src: url('FigurineSymbolT1Bold.woff2') format(\"woff2\"), url('FigurineSymbolT1Bold.woff') format(\"woff\");\n  font-weight: bold;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"FigurineSymbolT1\";\n  src: url('FigurineSymbolT1.woff2') format(\"woff2\"), url('FigurineSymbolT1.woff') format(\"woff\");\n  font-weight: 600;\n  font-style: normal;\n  font-display: swap;\n}\n\n\n\n\n\n\n\n\n\n\n[_ngcontent-%COMP%]:root {\n  --bg-color: #f2f3f7;\n  --fg-color: #383a41;\n  --red: #e43030;\n  --green: #19a187;\n  --blue: #367bf0;\n  --dark-blue: #265ab1;\n  --maroon: #b8174c;\n  --purple: #8c42ab;\n}\n.settings-container[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  margin-left: 24px;\n  min-width: 240px;\n  overflow-y: visible;\n}\nkeymap-item[_ngcontent-%COMP%] {\n  min-width: 240px;\n  max-width: 240px;\n  max-height: 64px;\n  height: 64px;\n  float: left;\n  padding: 12px;\n  left: 0px;\n  top: 0px;\n  border-radius: 2px;\n  width: 64px;\n  background: var(--gsBackground);\n  margin-top: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMuc2NzcyIsInNyYy9hc3NldHMvc2Nzcy9tb2R1bGVzL19mb250cy5zY3NzIiwic3JjL2FwcC9vbGdhLW1lbnUva2V5bWFwLW1lbnUva2V5bWFwLW1lbnUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOEVBQUE7QUNBQTtFQUNJLHFCQUFBO0VBQ0EscUZBQUE7RUFFQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNDSjtBREVBO0VBQ0kscUJBQUE7RUFDQSwyRkFBQTtFQUVBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0RKO0FESUE7RUFDRSwrQkFBQTtFQUNBLHVHQUFBO0VBRUEsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDSEY7QURNQTtFQUNFLCtCQUFBO0VBQ0EsK0ZBQUE7RUFFQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNMRjtBRmFBLCtFQUFBO0FBR0EsK0VBQUE7QUFRQSwrRUFBQTtBQU1BLCtFQUFBO0FBTUEsK0VBQUE7QUFNQSxnRkFBQTtBQUtBLCtFQUFBO0FBS0EseUVBQUE7QUFLQSx5RUFBQTtBQUlBLHVFQUFBO0FBZ0JBO0VBQ0UsbUJBQUE7RUFDQSxtQkFBQTtFQUVBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUVsRUY7QUE5Q0E7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBaURKO0FBOUNBO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSwrQkZ3Qlc7RUV2QlgsZ0JBQUE7QUFpREoiLCJmaWxlIjoic3JjL2FwcC9vbGdhLW1lbnUva2V5bWFwLW1lbnUva2V5bWFwLW1lbnUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG5cbkBpbXBvcnQgXCIuL2Fzc2V0cy9zY3NzL21vZHVsZXMvX2ZvbnRzLnNjc3NcIjtcbiRnYW1lc2NvcmUtZmFtaWx5OiBcIkZpZ3VyaW5lU3ltYm9sVDFcIjtcbiRnYW1lc2NvcmUtaGlnaGxpZ2h0OiAjNTg1ODU4ZmY7XG4kZ2FtZXNjb3JlLWZvcmVncm91bmQ6IHdoaXRlO1xuXG4kcmVkOiAjZTQzMDMwO1xuJGdyZWVuOiAjMTlhMTg3O1xuJGxpZ2h0LWJsdWU6ICMwMGZmZmZmZjtcbiRibHVlOiAjMzY3YmYwO1xuJGRhcmstYmx1ZTogIzI2NWFiMTtcbiRtYXJvb246ICNiODE3NGM7XG4kcHVycGxlOiAjOGM0MmFiO1xuXG4vLyBNYWluIE9MR0EgQ29sb3IgRWxlbWVudCBWYXJpYWJsZXNcbiR0ZXh0Q29sb3I6IHZhcigtLXRleHRDb2xvcik7IC8vIE1haW4gVGV4dCBDb2xvclxuJHRleHRDb2xvckF0dGVudGlvbjogdmFyKC0tdGV4dENvbG9yQXR0ZW50aW9uKTsgLy8gQXR0ZW50aW9uIHRleHRcbiR0ZXh0Q29sb3JSZW1vdmU6IHZhcigtLXRleHRDb2xvclJlbW92ZSk7IC8vIFJlbW92ZS9EZWxldGUvQ2xvc2VcbiR0ZXh0Q29sb3JBZGQ6IHZhcigtLXRleHRDb2xvckFkZCk7IC8vIEFkZC9DcmVhdGUvT3BlblxuJHRleHRDb2xvckFjdGl2ZTogdmFyKC0tdGV4dENvbG9yQWN0aXZlKTsgLy8gQWRkL0NyZWF0ZS9PcGVuXG4kYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZCk7IC8vIE1haW4gYmFja2dyb3VuZCBDb2xvclxuJGJnQ29udGFpbmVyOiB2YXIoLS1iZ0NvbnRhaW5lcik7IC8vIGJhY2tncm91bmQgb2YgQ29udGFpbmVyc1xuJGJnTWVudTogdmFyKC0tYmdNZW51KTsgLy8gYmFja2dyb3VuZCBvZiBNZW51c1xuJGJnSXRlbTogdmFyKC0tYmdJdGVtKTsgLy8gYmFja2dyb3VuZCBvZiBJdGVtc1xuXG4vLyBDb250ZXh0IE1lbnVcbiRiZ0NvbnRleHQ6IHZhcigtLWJnQ29udGV4dCk7IC8vIGJhY2tncm91bmQgb2YgQ29udGV4dCBNZW51XG4kdGV4dENvbG9yQ29udGV4dDogdmFyKC0tdGV4dENvbG9yQ29udGV4dCk7IC8vIHRleHQgY29sb3IgQ29udGV4dCBNZW51XG4kYm9yZGVyQ29udGV4dDogdmFyKC0tYm9yZGVyQ29udGV4dCk7IC8vIGJvcmRlciBDb250ZXh0IE1lbnVcbiRvdmVybGF5Q29udGV4dEJhY2tncm91bmQ6IHZhcihcbiAgLS1vdmVybGF5Q29udGV4dEJhY2tncm91bmRcbik7IC8vIENvbnRleHQgTWVudSBPdmVybGF5IGJhY2tncm91bmQgbWFpblxuJG92ZXJsYXlDb250ZXh0QmFja2dyb3VuZEdyYWRpZW50OiB2YXIoXG4gIC0tb3ZlcmxheUNvbnRleHRCYWNrZ3JvdW5kR3JhZGllbnRcbik7IC8vIENvbnRleHQgTWVudSBiYWNrZ3JvdW5kIGdyYWRpZW50XG5cbiRpdGVtOiB2YXIoLS1pdGVtKTtcbiRpdGVtLWNvbnRyYXN0OiB2YXIoLS1pdGVtLWNvbnRyYXN0KTtcbiRpdGVtLWJnOiB2YXIoLS1pdGVtLWJnKTtcblxuLyoqKioqKioqKioqKioqKioqKiogTWVudSAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiRtZUJhY2tncm91bmQ6IHZhcigtLW1lQmFja2dyb3VuZCk7XG5cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgQ29udGFpbmVyIFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4kZ3NUZXh0Q29sb3I6IHZhcigtLWdzVGV4dENvbG9yKTsgLy8gVGV4dCBjb2xvciBmb3IgZ2FtZSBzY29yZVxuJGdzQmFja2dyb3VuZDogdmFyKC0tZ3NCYWNrZ3JvdW5kKTsgLy8gYmFja2dyb3VuZCBvZiBDb250YWluZXJzXG4kZ3NMaXN0QmFja2dyb3VuZDogdmFyKC0tZ3NMaXN0QmFja2dyb3VuZCk7IC8vIGxpc3QgYmFja2dyb3VuZCBvZiBnYW1lIHNjb3JlXG4kZ3NCb3JkZXI6IHZhcigtLWdzQm9yZGVyKTsgLy8gYmFja2dyb3VuZCBvZiBNZW51c1xuJGdzVGV4dFNpemU6IHZhcigtLWdzVGV4dFNpemUpOyAvLyBiYWNrZ3JvdW5kIG9mIE1lbnVzXG4kZ3NGb250RmFtaWx5OiB2YXIoLS1nc0ZvbnRGYW1pbHkpOyAvLyBzY29yZSBmb250XG5cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgQ29udGFpbmVyIFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4kZ3NUZXh0Q29sb3JNVzogdmFyKC0tZ3NUZXh0Q29sb3JNVyk7IC8vIFRleHQgY29sb3IgZm9yIGdhbWUgc2NvcmVcbiRnc0JhY2tncm91bmRNVzogdmFyKC0tZ3NCYWNrZ3JvdW5kTVcpOyAvLyBiYWNrZ3JvdW5kIG9mIENvbnRhaW5lcnNcbiRnc0JvcmRlck1XOiB2YXIoLS1nc0JvcmRlck1XKTsgLy8gYmFja2dyb3VuZCBvZiBNZW51c1xuJGdzVGV4dFNpemVNVzogdmFyKC0tZ3NUZXh0U2l6ZU1XKTsgLy8gYmFja2dyb3VuZCBvZiBNZW51c1xuXG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIENvbnRhaW5lciBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuJGdzVGV4dENvbG9yTUI6IHZhcigtLWdzVGV4dENvbG9yTUIpOyAvLyBUZXh0IGNvbG9yIGZvciBnYW1lIHNjb3JlXG4kZ3NCYWNrZ3JvdW5kTUI6IHZhcigtLWdzQmFja2dyb3VuZE1CKTsgLy8gYmFja2dyb3VuZCBvZiBDb250YWluZXJzXG4kZ3NCb3JkZXJNQjogdmFyKC0tZ3NCb3JkZXJNQik7IC8vIGJhY2tncm91bmQgb2YgTWVudXNcbiRnc1RleHRTaXplTUI6IHZhcigtLWdzVGV4dFNpemVNQik7IC8vIGJhY2tncm91bmQgb2YgTWVudXNcblxuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBIaWdobGlnaHQgVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiRnc1RleHRDb2xvckhHOiB2YXIoLS1nc1RleHRDb2xvckhHKTsgLy8gVGV4dCBjb2xvciBmb3IgaGlnaGxpZ2h0XG4kZ3NBbm5vdGF0aW9uQ29sb3JIRzogdmFyKC0tZ3NBbm5vdGF0aW9uQ29sb3JIRyk7IC8vIEFubm90YXRpb24vQ29tbWVudCBjb2xvciBmb3IgaGlnaGxpZ2h0XG4kZ3NCYWNrZ3JvdW5kSEc6IHZhcigtLWdzQmFja2dyb3VuZEhHKTsgLy8gYmFja2dyb3VuZCBmb3IgaGlnaGxpZ2h0XG4kZ3NCb3JkZXJIRzogdmFyKC0tZ3NCb3JkZXJIRyk7IC8vIGJvcmRlciBmb3IgaGlnaGxpZ2h0XG5cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgQW5ub3RhdGlvbiBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuJGdzVGV4dENvbG9yQU46IHZhcigtLWdzVGV4dENvbG9yQU4pOyAvLyBUZXh0IGNvbG9yIGZvciBoaWdobGlnaHRcbiRnc0JhY2tncm91bmRBTjogdmFyKC0tZ3NCYWNrZ3JvdW5kQU4pOyAvLyBiYWNrZ3JvdW5kIGZvciBoaWdobGlnaHRcbiRnc0JvcmRlckFOOiB2YXIoLS1nc0JvcmRlckFOKTsgLy8gYm9yZGVyIGZvciBoaWdobGlnaHRcblxuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBWYXJpYXRpb24gVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiRnc1RleHRDb2xvclZBOiB2YXIoLS1nc1RleHRDb2xvclZBKTsgLy8gVGV4dCBjb2xvciBmb3IgaGlnaGxpZ2h0XG4kZ3NCYWNrZ3JvdW5kVkE6IHZhcigtLWdzQmFja2dyb3VuZFZBKTsgLy8gYmFja2dyb3VuZCBmb3IgaGlnaGxpZ2h0XG4kZ3NCb3JkZXJWQTogdmFyKC0tZ3NCb3JkZXJWQSk7IC8vIGJvcmRlciBmb3IgaGlnaGxpZ2h0XG5cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgUGx5IFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4kZ3NUZXh0Q29sb3JQQzogdmFyKC0tZ3NUZXh0Q29sb3JQQyk7IC8vIFRleHQgY29sb3IgZm9yIGdhbWUgc2NvcmUgcGx5XG4kZ3NCYWNrZ3JvdW5kUEM6IHZhcigtLWdzQmFja2dyb3VuZFBDKTsgLy8gYmFja2dyb3VuZCBmb3IgZ2FtZSBzY29yZSBwbHlcbiRnc0JvcmRlclBDOiB2YXIoLS1nc0JvcmRlclBDKTsgLy8gYm9yZGVyIGZvciBnYW1lIHNjb3JlIHBseVxuXG4vKioqKioqKioqKioqKioqKioqKiogQ29udHJvbCBDb2xvcnMgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuJGNzQmFja2dyb3VuZDogdmFyKC0tY3NCYWNrZ3JvdW5kKTsgLy8gYmFja2dyb3VuZCBmb3IgY29udHJvbHNcbiRjc0NvbG9yOiB2YXIoLS1jc0NvbG9yKTsgLy8gY29udHJvbHMgY29sb3IgKGZvcmVncm91bmQpXG5cbi8qKioqKioqKioqKioqKioqKioqKiBCb2FyZCBDb2xvcnMgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuJGJvYXJkQkdEYXJrOiB2YXIoLS1ib2FyZEJHRGFyayk7IC8vIGJvYXJkIGRhcmsgdGlsZVxuJGJvYXJkQkdMaWdodDogdmFyKC0tYm9hcmRCR0xpZ2h0KTsgLy8gYm9hcmQgbGlnaHQgdGlsZVxuJGJvYXJkTGFiZWxMaWdodDogdmFyKC0tYm9hcmRMYWJlbExpZ2h0KTsgLy8gYm9hcmQgbGlnaHQgbGFiZWxcbiRib2FyZExhYmVsRGFyazogdmFyKC0tYm9hcmRMYWJlbERhcmspOyAvLyBib2FyZCBkYXJrIGxhYmVsXG5cbi8vIEdlbmVyYWwgc3R1ZmZcbiR0ZXh0LWNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcbiRiZy1vdXRlcjogdmFyKC0tYmctb3V0ZXIpO1xuJGJnLWlubmVyOiB2YXIoLS1iZy1pbm5lcik7XG5cbiRiZy1jb2xvcjogI2YyZjNmNztcbiRmZy1jb2xvcjogIzM4M2E0MTtcblxuJGdsb3ctc2hhZG93OiAwIDAgMC41ZW0gdHJhbnNwYXJlbnRpemUoJGJsdWUsIDAuMyk7XG5cbjpyb290IHtcbiAgLS1iZy1jb2xvcjogI3skYmctY29sb3J9O1xuICAtLWZnLWNvbG9yOiAjeyRmZy1jb2xvcn07XG5cbiAgLS1yZWQ6ICN7JHJlZH07XG4gIC0tZ3JlZW46ICN7JGdyZWVufTtcbiAgLS1ibHVlOiAjeyRibHVlfTtcbiAgLS1kYXJrLWJsdWU6ICN7JGRhcmstYmx1ZX07XG4gIC0tbWFyb29uOiAjeyRtYXJvb259O1xuICAtLXB1cnBsZTogI3skcHVycGxlfTtcbn1cblxuLy8gOjotbW96LWZvY3VzLWlubmVyLFxuLy8gOi1tb3otZm9jdXNyaW5nIHtcbi8vICAgYm9yZGVyOiAwO1xuLy8gICBjb2xvcjogdHJhbnNwYXJlbnQ7XG4vLyAgIHRleHQtc2hhZG93OiAwIDAgMCAkZmctY29sb3I7XG4vLyB9XG5cbi8vIDo6c2VsZWN0aW9uLFxuLy8gOjotbW96LXNlbGVjdGlvbiB7XG4vLyAgIGNvbG9yOiB3aGl0ZTtcbi8vICAgYmFja2dyb3VuZDogYmxhY2s7XG4vLyB9XG5cbi8vICoge1xuLy8gICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuLy8gICBvdXRsaW5lOiBub25lO1xuLy8gICB1c2VyLXNlbGVjdDogbm9uZTtcbi8vICAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xuLy8gICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuLy8gICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7XG4vLyAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4vLyAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbi8vICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuLy8gICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4vLyAgIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKSAhaW1wb3J0YW50O1xuLy8gICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XG4vLyAgIGN1cnNvcjogZGVmYXVsdDtcbi8vICAgbGV0dGVyLXNwYWNpbmc6IDA7XG4vLyB9XG5cbi8vIC5zZWxlY3RhYmxlLFxuLy8gLnNlbGVjdGFibGUgKiB7XG4vLyAgIGN1cnNvcjogYXV0bztcbi8vICAgdXNlci1zZWxlY3Q6IHRleHQ7XG4vLyAgIC13ZWJraXQtdG91Y2gtY2FsbG91dDogdGV4dDtcbi8vICAgLXdlYmtpdC11c2VyLXNlbGVjdDogdGV4dDtcbi8vICAgLWtodG1sLXVzZXItc2VsZWN0OiB0ZXh0O1xuLy8gICAtbW96LXVzZXItc2VsZWN0OiB0ZXh0O1xuLy8gICAtbXMtdXNlci1zZWxlY3Q6IHRleHQ7XG4vLyB9XG5cbi8vIGh0bWwsXG4vLyBib2R5IHtcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogJGJnLWNvbG9yO1xuLy8gICBjb2xvcjogJGZnLWNvbG9yO1xuLy8gICBtYXJnaW46IDA7XG4vLyAgIHBhZGRpbmc6IDA7XG4vLyAgIGZvbnQtc2l6ZTogMTBwdDtcbi8vICAgaGVpZ2h0OiAxMDAlO1xuLy8gICBvdmVyZmxvdzogYXV0bztcbi8vIH1cblxuLy8gLndpdGgtc2hhZG93IHtcbi8vICAgYm94LXNoYWRvdzogNnB4IDZweCAxMHB4IHRyYW5zcGFyZW50aXplKGJsYWNrLCAwLjkpLCAtNnB4IC02cHggMTBweCB3aGl0ZTtcbi8vIH1cblxuLy8gLm91dHNldCB7XG4vLyAgIEBleHRlbmQgLndpdGgtc2hhZG93O1xuXG4vLyAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4vLyAgIGJhY2tncm91bmQ6ICRiZy1jb2xvcjtcbi8vIH1cblxuLy8gLmluc2V0IHtcbi8vICAgYm9yZGVyLXJhZGl1czogMTBweDtcbi8vICAgYm94LXNoYWRvdzogMCAwIHRyYW5zcGFyZW50LCAwIDAgdHJhbnNwYXJlbnQsXG4vLyAgICAgaW5zZXQgM3B4IDNweCA1cHggdHJhbnNwYXJlbnRpemUoYmxhY2ssIDAuOSksIGluc2V0IC0zcHggLTNweCA1cHggd2hpdGU7XG4vLyAgIGJhY2tncm91bmQ6IGxpZ2h0ZW4oJGJnLWNvbG9yLCAyJSk7XG4vLyB9XG5cbi8vIC5wYXBlciB7XG4vLyAgIEBleHRlbmQgLm91dHNldDtcbi8vICAgcGFkZGluZzogMTBweCAyMHB4IDIwcHg7XG4vLyAgIG1hcmdpbi10b3A6IDIwcHg7XG4vLyAgIG1pbi1oZWlnaHQ6IDEwMHB4O1xuLy8gICBmb250LXNpemU6IDEuMmVtO1xuLy8gICBiYWNrZ3JvdW5kOiAkYmctY29sb3I7XG4vLyB9XG5cbi8vIHNlY3Rpb24sXG4vLyBhcnRpY2xlLFxuLy8gLnNlY3Rpb24sXG4vLyAuYXJ0aWNsZSxcbi8vIC5wYXBlciB7XG4vLyAgIGxpbmUtaGVpZ2h0OiAyZW07XG4vLyAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbi8vICAgd29yZC1icmVhazogbm9ybWFsO1xuLy8gICBsaW5lLWhlaWdodDogMmVtO1xuLy8gfVxuXG4vLyBpbnB1dFt0eXBlPVwidGV4dFwiXSxcbi8vIGlucHV0W3R5cGU9XCJzZWFyY2hcIl0sXG4vLyBpbnB1dFt0eXBlPVwidGVsXCJdLFxuLy8gaW5wdXRbdHlwZT1cInVybFwiXSxcbi8vIGlucHV0W3R5cGU9XCJlbWFpbFwiXSxcbi8vIGlucHV0W3R5cGU9XCJwYXNzd29yZFwiXSxcbi8vIGlucHV0W3R5cGU9XCJkYXRlXCJdLFxuLy8gaW5wdXRbdHlwZT1cIm1vbnRoXCJdLFxuLy8gaW5wdXRbdHlwZT1cIndlZWtcIl0sXG4vLyBpbnB1dFt0eXBlPVwidGltZVwiXSxcbi8vIGlucHV0W3R5cGU9XCJudW1iZXJcIl0sXG4vLyBpbnB1dFt0eXBlPVwiY29sb3JcIl0sXG4vLyBzZWxlY3QsXG4vLyB0ZXh0YXJlYSB7XG4vLyAgIGJvcmRlcjogMDtcbi8vICAgYmFja2dyb3VuZDogJGJnLWNvbG9yO1xuLy8gICBjb2xvcjogJGZnLWNvbG9yO1xuLy8gICBmb250LXdlaWdodDogbm9ybWFsO1xuLy8gICBwYWRkaW5nOiAwIDEuMjVlbTtcbi8vICAgbGluZS1oZWlnaHQ6IDEuMjVlbTtcbi8vICAgaGVpZ2h0OiAzLjVlbTtcbi8vICAgbWFyZ2luOiAxMHB4IDA7XG4vLyAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuLy8gICBjdXJzb3I6IHRleHQ7XG4vLyAgIHVzZXItc2VsZWN0OiB0ZXh0O1xuLy8gICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IHRleHQ7XG4vLyAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IHRleHQ7XG4vLyAgIC1raHRtbC11c2VyLXNlbGVjdDogdGV4dDtcbi8vICAgLW1vei11c2VyLXNlbGVjdDogdGV4dDtcbi8vICAgLW1zLXVzZXItc2VsZWN0OiB0ZXh0O1xuLy8gICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuMnM7XG5cbi8vICAgJjpub3Qoc2VsZWN0KSB7XG4vLyAgICAgQGV4dGVuZCAuaW5zZXQ7XG5cbi8vICAgICAmOmZvY3VzIHtcbi8vICAgICAgIEBleHRlbmQgLm91dHNldDtcbi8vICAgICB9XG4vLyAgIH1cbi8vIH1cblxuLy8gdGV4dGFyZWEge1xuLy8gICBoZWlnaHQ6IDM1MHB4O1xuLy8gICBwYWRkaW5nOiAxLjI1ZW07XG4vLyB9XG5cbi8vIHNlbGVjdCB7XG4vLyAgIEBleHRlbmQgLm91dHNldDtcblxuLy8gICBjdXJzb3I6IHBvaW50ZXI7XG4vLyAgIGJhY2tncm91bmQ6IHVybChkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUIyWlhKemFXOXVQU0l4TGpFaUlIWnBaWGRDYjNnOUlqQWdNQ0F4T1NBeE9TSWdlRzFzYm5NOUltaDBkSEE2THk5M2QzY3Vkek11YjNKbkx6SXdNREF2YzNabklqNDhaeUIwY21GdWMyWnZjbTA5SW0xaGRISnBlQ2d1TURNMElEQWdNQ0F1TURNMElDMDJMamdnTVM0M1pTMDFLU0lnYzNSNWJHVTlJbVpwYkd3Nkl6ZGlOMlU0WXlJK1BIQmhkR2dnWkQwaWJUUTRNQ0F6TkRRdE1qRXhMVEl4TW1NdE1UWXRNVFl0TkRFdE1UWXROVGNnTUMweE5pQXhOaTB4TmlBME1pQXdJRFUzYkRJek9DQXlNemxqT0M0MElEZ3VOU0F5TUNBeE1pQXpNU0F4TWlBeE1TQXdMalUySURJeUxUTXVNaUF6TVMweE1td3lNemd0TWpNNVl6RTJMVEUySURFMkxUUXlJREF0TlRkekxUUXhMVEUyTFRVM0lEQjZJaUJ6ZEhsc1pUMGlabWxzYkRvak4ySTNaVGhqSWk4K1BDOW5Qand2YzNablBnbz0pXG4vLyAgICAgbm8tcmVwZWF0IHJpZ2h0IDFlbSBjZW50ZXI7XG4vLyAgIGJhY2tncm91bmQtc2l6ZTogMS4yZW07XG4vLyAgIHBhZGRpbmctcmlnaHQ6IDNlbTtcbi8vIH1cblxuLy8gaW5wdXQ6OnBsYWNlaG9sZGVyLFxuLy8gdGV4dGFyZWE6OnBsYWNlaG9sZGVyIHtcbi8vICAgb3BhY2l0eTogMTtcbi8vICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzO1xuLy8gICBjb2xvcjogaW5oZXJpdDtcbi8vIH1cblxuLy8gaW5wdXQ6Zm9jdXM6OnBsYWNlaG9sZGVyLFxuLy8gdGV4dGFyZWE6Zm9jdXM6OnBsYWNlaG9sZGVyIHtcbi8vICAgb3BhY2l0eTogMC4yO1xuLy8gfVxuXG4vLyBpbnB1dDotbXMtaW5wdXQtcGxhY2Vob2xkZXIsXG4vLyB0ZXh0YXJlYTotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuLy8gICBvcGFjaXR5OiAxO1xuLy8gICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnM7XG4vLyAgIGNvbG9yOiBpbmhlcml0O1xuLy8gfVxuXG4vLyBpbnB1dDpmb2N1czotbXMtaW5wdXQtcGxhY2Vob2xkZXIsXG4vLyB0ZXh0YXJlYTpmb2N1czotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuLy8gICBvcGFjaXR5OiAwLjI7XG4vLyB9XG5cbi8vIGlucHV0W3R5cGU9XCJzZWFyY2hcIl06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24sXG4vLyBpbnB1dFt0eXBlPVwic2VhcmNoXCJdOjotd2Via2l0LXNlYXJjaC1jYW5jZWwtYnV0dG9uLFxuLy8gaW5wdXRbdHlwZT1cInNlYXJjaFwiXTo6LXdlYmtpdC1zZWFyY2gtcmVzdWx0cy1idXR0b24sXG4vLyBpbnB1dFt0eXBlPVwic2VhcmNoXCJdOjotd2Via2l0LXNlYXJjaC1yZXN1bHRzLWRlY29yYXRpb24ge1xuLy8gICBkaXNwbGF5OiBub25lO1xuLy8gfVxuXG4vLyBidXR0b24sXG4vLyBpbnB1dFt0eXBlPVwiYnV0dG9uXCJdLFxuLy8gaW5wdXRbdHlwZT1cInN1Ym1pdFwiXSxcbi8vIGlucHV0W3R5cGU9XCJyZXNldFwiXSB7XG4vLyAgIEBleHRlbmQgLm91dHNldDtcblxuLy8gICBib3JkZXI6IDA7XG4vLyAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuLy8gICBwYWRkaW5nOiAxMHB4IDA7XG4vLyAgIHdpZHRoOiA4ZW07XG4vLyAgIHRleHQtYWxpZ246IGNlbnRlcjtcbi8vICAgY3Vyc29yOiBwb2ludGVyO1xuLy8gICBjb2xvcjogaW5oZXJpdDtcbi8vICAgZm9udC1zaXplOiAxLjFyZW07XG4vLyAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGJhY2tncm91bmQtY29sb3IsIGJveC1zaGFkb3c7XG4vLyAgIHRyYW5zaXRpb24tZGVsYXk6IDAuMnM7XG4vLyAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMnM7XG5cbi8vICAgJi5hY3RpdmUsXG4vLyAgICY6YWN0aXZlIHtcbi8vICAgICBAZXh0ZW5kIC5pbnNldDtcblxuLy8gICAgIHRyYW5zaXRpb24tZGVsYXk6IDBzO1xuLy8gICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMXM7XG4vLyAgIH1cblxuLy8gICBAZWFjaCAkbmFtZSwgJGNvbG9yIGluIChcInJlZFwiOiAkcmVkLCBcImdyZWVuXCI6ICRncmVlbiwgXCJibHVlXCI6ICRibHVlKSB7XG4vLyAgICAgQGF0LXJvb3QgLiN7JG5hbWV9LWJ1dHRvbixcbi8vICAgICAgICYuI3skbmFtZX0tYnV0dG9uIHtcbi8vICAgICAgIEBleHRlbmQgYnV0dG9uO1xuXG4vLyAgICAgICAkX2JnLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAkY29sb3IgMzAlLCBsaWdodGVuKCRjb2xvciwgNiUpIDgwJSk7XG5cbi8vICAgICAgIGNvbG9yOiB3aGl0ZTtcbi8vICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuLy8gICAgICAgdGV4dC1zaGFkb3c6IDAgMC4xZW0gMC4xZW0gdHJhbnNwYXJlbnRpemUoYmxhY2ssIDAuMyk7XG4vLyAgICAgICBiYWNrZ3JvdW5kOiAkX2JnLWltYWdlO1xuLy8gICAgICAgYm94LXNoYWRvdzogMCAwIDAuNWVtIHRyYW5zcGFyZW50aXplKCRjb2xvciwgMC4zKSwgMCAwIHRyYW5zcGFyZW50LFxuLy8gICAgICAgICBpbnNldCAwIC01cHggMCB0cmFuc3BhcmVudGl6ZShibGFjaywgMC45NSksXG4vLyAgICAgICAgIGluc2V0IDAgMnB4IDAgdHJhbnNwYXJlbnRpemUod2hpdGUsIDAuOCk7XG4vLyAgICAgICBib3JkZXItcmFkaXVzOiA2cHggNnB4IDhweCA4cHg7XG4vLyAgICAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBib3gtc2hhZG93LCBib3JkZXItcmFkaXVzO1xuXG4vLyAgICAgICAmLmFjdGl2ZSxcbi8vICAgICAgICY6YWN0aXZlIHtcbi8vICAgICAgICAgYmFja2dyb3VuZDogJF9iZy1pbWFnZTtcbi8vICAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuLy8gICAgICAgICBib3gtc2hhZG93OiAwIDAgdHJhbnNwYXJlbnQsIDAgMCB0cmFuc3BhcmVudCxcbi8vICAgICAgICAgICBpbnNldCAwIDJweCA1cHggMnB4IHRyYW5zcGFyZW50aXplKGJsYWNrLCAwLjgpO1xuLy8gICAgICAgfVxuLy8gICAgIH1cbi8vICAgfVxuLy8gfVxuXG4vLyBsYWJlbCB7XG4vLyAgICYsXG4vLyAgICYgKiB7XG4vLyAgICAgY3Vyc29yOiBwb2ludGVyO1xuLy8gICB9XG5cbi8vICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuLy8gICBwYWRkaW5nOiAwLjU2ZW0gMDtcbi8vIH1cblxuLy8gYSB7XG4vLyAgICYsXG4vLyAgICY6bGluayxcbi8vICAgJjp2aXNpdGVkLFxuLy8gICAmOmhvdmVyICY6YWN0aXZlIHtcbi8vICAgICAmLFxuLy8gICAgICYgKiB7XG4vLyAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4vLyAgICAgfVxuXG4vLyAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4vLyAgICAgY29sb3I6ICRibHVlO1xuLy8gICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuLy8gICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbi8vICAgfVxuLy8gfVxuXG4vLyBoMSxcbi8vIGgyLFxuLy8gaDMsXG4vLyBoNCxcbi8vIGg1LFxuLy8gaDYge1xuLy8gICBsaW5lLWhlaWdodDogMS41ZW07XG4vLyB9XG5cbi8vIGgxIHtcbi8vICAgZm9udC1zaXplOiA0ZW07XG4vLyAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuLy8gICBtYXJnaW46IDAuN2VtIDA7XG4vLyB9XG5cbi8vIGgyIHtcbi8vICAgZm9udC1zaXplOiAzZW07XG4vLyAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuLy8gICBtYXJnaW46IDAuOGVtIDA7XG4vLyB9XG5cbi8vIGgzIHtcbi8vICAgZm9udC1zaXplOiAyLjVlbTtcbi8vICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4vLyAgIG1hcmdpbjogMC45ZW0gMDtcbi8vIH1cblxuLy8gaDQge1xuLy8gICBmb250LXNpemU6IDJlbTtcbi8vICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4vLyAgIG1hcmdpbjogMWVtIDA7XG4vLyB9XG5cbi8vIGg1IHtcbi8vICAgbWFyZ2luOiAwLjVlbSAwO1xuLy8gICBmb250LXNpemU6IDEuMmVtO1xuLy8gICBmb250LXdlaWdodDogbm9ybWFsO1xuLy8gfVxuXG4vLyBoNiB7XG4vLyAgIG1hcmdpbjogMWVtIDAgMWVtIDEuNGVtO1xuLy8gICBmb250LXNpemU6IDFlbTtcbi8vICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4vLyB9XG5cbi8vIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSxcbi8vIGlucHV0W3R5cGU9XCJyYWRpb1wiXSB7XG4vLyAgICRfYm9yZGVyLXdpZHRoOiAwLjE1ZW07XG4vLyAgICRfYm94LXNoYWRvdzogMnB4IDJweCAzcHggdHJhbnNwYXJlbnRpemUoYmxhY2ssIDAuOCksIC0ycHggLTJweCAzcHggd2hpdGUsXG4vLyAgICAgaW5zZXQgMXB4IDFweCAycHggdHJhbnNwYXJlbnRpemUoYmxhY2ssIDAuOCksIGluc2V0IC0xcHggLTFweCAycHggd2hpdGU7XG4vLyAgIGZvbnQtc2l6ZTogMWVtO1xuLy8gICBjdXJzb3I6IHBvaW50ZXI7XG4vLyAgIGhlaWdodDogMS4yZW07XG4vLyAgIHdpZHRoOiAxLjJlbTtcbi8vICAgbWFyZ2luOiAwIDAuM2VtO1xuLy8gICBib3gtc2hhZG93OiAkX2JveC1zaGFkb3c7XG4vLyAgIGJvcmRlcjogJF9ib3JkZXItd2lkdGggc29saWQgJGJnLWNvbG9yO1xuLy8gICB2ZXJ0aWNhbC1hbGlnbjogdGV4dC1ib3R0b207XG4vLyAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGJhY2tncm91bmQsIGJveC1zaGFkb3c7XG4vLyAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMnM7XG5cbi8vICAgJjphY3RpdmUge1xuLy8gICAgIGJveC1zaGFkb3c6ICRfYm94LXNoYWRvdywgaW5zZXQgMCAwLjFlbSAwLjI1ZW0gdHJhbnNwYXJlbnRpemUoYmxhY2ssIDAuOCk7XG4vLyAgIH1cblxuLy8gICAmOmNoZWNrZWQge1xuLy8gICAgIGJvcmRlci13aWR0aDogMC4xZW07XG4vLyAgICAgYm9yZGVyLWNvbG9yOiBkYXJrZW4oJGJsdWUsIDEwJSk7XG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJsdWU7XG4vLyAgIH1cbi8vIH1cblxuLy8gaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdIHtcbi8vICAgYm9yZGVyLXJhZGl1czogMjUlO1xuXG4vLyAgICY6Y2hlY2tlZCB7XG4vLyAgICAgYm94LXNoYWRvdzogJGdsb3ctc2hhZG93LCBpbnNldCAwIC0wLjFlbSAwIHRyYW5zcGFyZW50aXplKGJsYWNrLCAwLjgpLFxuLy8gICAgICAgaW5zZXQgMCAwLjFlbSAwLjFlbSB0cmFuc3BhcmVudGl6ZSh3aGl0ZSwgMC44KTtcbi8vICAgfVxuLy8gfVxuXG4vLyBpbnB1dFt0eXBlPVwicmFkaW9cIl0ge1xuLy8gICBib3JkZXItcmFkaXVzOiAxMDAlO1xuXG4vLyAgICY6Y2hlY2tlZCB7XG4vLyAgICAgYm94LXNoYWRvdzogJGdsb3ctc2hhZG93O1xuLy8gICAgIGJveC1zaGFkb3c6ICRnbG93LXNoYWRvdywgaW5zZXQgMCAwLjEyZW0gMC4xZW0gdHJhbnNwYXJlbnRpemUod2hpdGUsIDAuNzUpO1xuLy8gICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDAuMTVlbTtcbi8vICAgfVxuLy8gfVxuXG4vLyAuY2hlY2t0ZXh0IHtcbi8vICAgd2lkdGg6IGF1dG87XG4vLyAgIG1hcmdpbjogMC41ZW07XG5cbi8vICAgaW5wdXQge1xuLy8gICAgIGRpc3BsYXk6IG5vbmU7XG5cbi8vICAgICArIHNwYW4ge1xuLy8gICAgICAgQGV4dGVuZCBidXR0b247XG5cbi8vICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuLy8gICAgICAgcGFkZGluZzogMWVtO1xuLy8gICAgICAgdHJhbnNpdGlvbi1kZWxheTogMHM7XG4vLyAgICAgfVxuXG4vLyAgICAgJjpjaGVja2VkICsgc3BhbiB7XG4vLyAgICAgICBAZXh0ZW5kIC5ibHVlLWJ1dHRvbjtcblxuLy8gICAgICAgcGFkZGluZzogMWVtO1xuLy8gICAgIH1cbi8vICAgfVxuLy8gfVxuXG4vLyAuc3dpdGNoIHtcbi8vICAgJF9oZWlnaHQ6IDJyZW07XG4vLyAgICRfd2lkdGg6IDhyZW07XG4vLyAgICRfaGFuZGxlLXdpZHRoOiAkX2hlaWdodDtcbi8vICAgJF9oYW5kbGUtdHJhbnNsYXRpb246ICRfd2lkdGggLSAkX2hhbmRsZS13aWR0aDtcblxuLy8gICBoZWlnaHQ6ICRfaGVpZ2h0O1xuLy8gICB3aWR0aDogJF93aWR0aDtcbi8vICAgcGFkZGluZzogMDtcbi8vICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4vLyAgIGlucHV0IHtcbi8vICAgICBkaXNwbGF5OiBub25lO1xuXG4vLyAgICAgKyBkaXYge1xuLy8gICAgICAgaGVpZ2h0OiAxMDAlO1xuLy8gICAgICAgd2lkdGg6IDEwMCU7XG4vLyAgICAgICBib3JkZXItcmFkaXVzOiA5OTlweDtcbi8vICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuLy8gICAgICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYm94LXNoYWRvdywgYmFja2dyb3VuZC1jb2xvcjtcbi8vICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMnM7XG4vLyAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjJzO1xuLy8gICAgICAgYm94LXNoYWRvdzogM3B4IDNweCAycHggLTJweCB0cmFuc3BhcmVudGl6ZShibGFjaywgMC45KSxcbi8vICAgICAgICAgaW5zZXQgMnB4IDJweCAycHggMXB4IHRyYW5zcGFyZW50aXplKGJsYWNrLCAwLjkpLFxuLy8gICAgICAgICBpbnNldCAtMnB4IC0ycHggMXB4IHdoaXRlO1xuXG4vLyAgICAgICAmOjpiZWZvcmUge1xuLy8gICAgICAgICBjb250ZW50OiBcIlwiO1xuLy8gICAgICAgICBkaXNwbGF5OiBibG9jaztcbi8vICAgICAgICAgaGVpZ2h0OiBjYWxjKCN7JF9oYW5kbGUtd2lkdGh9ICsgNHB4KTtcbi8vICAgICAgICAgd2lkdGg6IGNhbGMoI3skX2hhbmRsZS13aWR0aH0gKyA0cHgpO1xuLy8gICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuLy8gICAgICAgICBib3JkZXI6IHNvbGlkIHdoaXRlIDNweDtcbi8vICAgICAgICAgYmFja2dyb3VuZDogJGJsdWU7XG4vLyAgICAgICAgIGJveC1zaGFkb3c6IDAgM3B4IDEwcHggdHJhbnNwYXJlbnRpemUoYmxhY2ssIDAuOCksXG4vLyAgICAgICAgICAgaW5zZXQgMCAtMXB4IDNweCB0cmFuc3BhcmVudGl6ZShibGFjaywgMC45KTtcbi8vICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTZweCk7XG4vLyAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzO1xuLy8gICAgICAgfVxuLy8gICAgIH1cblxuLy8gICAgICY6Y2hlY2tlZCArIGRpdiB7XG4vLyAgICAgICBiYWNrZ3JvdW5kOiAkYmx1ZTtcbi8vICAgICAgIGJveC1zaGFkb3c6ICRnbG93LXNoYWRvdywgaW5zZXQgMCAycHggMnB4IDJweCB0cmFuc3BhcmVudGl6ZShibGFjaywgMC43KSxcbi8vICAgICAgICAgaW5zZXQgMCAwIHRyYW5zcGFyZW50O1xuXG4vLyAgICAgICAmOjpiZWZvcmUge1xuLy8gICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgkX2hhbmRsZS10cmFuc2xhdGlvbiwgLTZweCk7XG4vLyAgICAgICB9XG4vLyAgICAgfVxuLy8gICB9XG4vLyB9XG5cbi8vIGhyIHtcbi8vICAgQGV4dGVuZCAuaW5zZXQ7XG4vLyAgIHdpZHRoOiA3MiU7XG4vLyAgIGhlaWdodDogOHB4O1xuLy8gICBmbG9hdDogcmlnaHQ7XG4vLyAgIGJvcmRlcjogMDtcbi8vIH1cblxuLy8gY29kZSxcbi8vIHByZSB7XG4vLyAgIHBhZGRpbmc6IDAuNWVtIDFlbTtcbi8vICAgYm9yZGVyLXJhZGl1czogNHB4O1xuLy8gICBvdmVyZmxvdzogYXV0bztcbi8vICAgYm94LXNoYWRvdzogMCA1cHggMzBweCAwIHRyYW5zcGFyZW50aXplKGJsYWNrLCAwLjk1KTtcbi8vIH1cblxuLy8gY29kZSB7XG4vLyAgIGJhY2tncm91bmQ6ICNlNmU2ZTY7XG4vLyB9XG5cbi8vIHByZSB7XG4vLyAgIGJhY2tncm91bmQ6IHdoaXRlO1xuLy8gICBtYXJnaW46IDRlbSAwO1xuLy8gfVxuXG4vLyBjb2RlLFxuLy8gcHJlIHtcbi8vICAgJixcbi8vICAgJiAqIHtcbi8vICAgICBmb250LXNpemU6IDAuOXJlbTtcbi8vICAgICBsaW5lLWhlaWdodDogMmVtO1xuLy8gICAgIGN1cnNvcjogYXV0bztcbi8vICAgICB1c2VyLXNlbGVjdDogdGV4dDtcbi8vICAgICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IHRleHQ7XG4vLyAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogdGV4dDtcbi8vICAgICAta2h0bWwtdXNlci1zZWxlY3Q6IHRleHQ7XG4vLyAgICAgLW1vei11c2VyLXNlbGVjdDogdGV4dDtcbi8vICAgICAtbXMtdXNlci1zZWxlY3Q6IHRleHQ7XG4vLyAgIH1cbi8vIH1cblxuLy8gYmxvY2txdW90ZSB7XG4vLyAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuLy8gICBwYWRkaW5nOiAwLjVlbSAxZW07XG4vLyAgIGJvcmRlci1yYWRpdXM6IDRweDtcbi8vICAgYm94LXNoYWRvdzogMCA1cHggMzBweCAwIHRyYW5zcGFyZW50aXplKGJsYWNrLCAwLjk1KTtcbi8vICAgYm9yZGVyLWxlZnQ6IDZweCBzb2xpZCAkYmx1ZTtcbi8vIH1cbiIsIkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnQ2F2ZWF0JztcbiAgICBzcmM6IHVybCgnLi4vLi4vZm9udHMvQm9sZC9DYXZlYXQtQm9sZC53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcbiAgICAgICAgdXJsKCcuLi8uLi9mb250cy9Cb2xkL0NhdmVhdC1Cb2xkLndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC1kaXNwbGF5OiBzd2FwO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ0NhdmVhdCc7XG4gICAgc3JjOiB1cmwoJy4uLy4uL2ZvbnRzL1JlZ3VsYXIvQ2F2ZWF0LVJlZ3VsYXIud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXG4gICAgICAgIHVybCgnLi4vLi4vZm9udHMvUmVndWxhci9DYXZlYXQtUmVndWxhci53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC1kaXNwbGF5OiBzd2FwO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdGaWd1cmluZVN5bWJvbFQxJztcbiAgc3JjOiB1cmwoJy4uLy4uL2ZvbnRzLzNyZCBQYXJ0eS9DaGVzc1ZhcmlhbnRzL0ZpZ3VyaW5lU3ltYm9sVDFCb2xkLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxuICAgICAgdXJsKCcuLi8uLi9mb250cy8zcmQgUGFydHkvQ2hlc3NWYXJpYW50cy9GaWd1cmluZVN5bWJvbFQxQm9sZC53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnRmlndXJpbmVTeW1ib2xUMSc7XG4gIHNyYzogdXJsKCcuLi8uLi9mb250cy8zcmQgUGFydHkvQ2hlc3NWYXJpYW50cy9GaWd1cmluZVN5bWJvbFQxLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxuICAgICAgdXJsKCcuLi8uLi9mb250cy8zcmQgUGFydHkvQ2hlc3NWYXJpYW50cy9GaWd1cmluZVN5bWJvbFQxLndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG59XG5cbiIsIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJDYXZlYXRcIjtcbiAgc3JjOiB1cmwoXCIuLi8uLi9mb250cy9Cb2xkL0NhdmVhdC1Cb2xkLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpLCB1cmwoXCIuLi8uLi9mb250cy9Cb2xkL0NhdmVhdC1Cb2xkLndvZmZcIikgZm9ybWF0KFwid29mZlwiKTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkNhdmVhdFwiO1xuICBzcmM6IHVybChcIi4uLy4uL2ZvbnRzL1JlZ3VsYXIvQ2F2ZWF0LVJlZ3VsYXIud29mZjJcIikgZm9ybWF0KFwid29mZjJcIiksIHVybChcIi4uLy4uL2ZvbnRzL1JlZ3VsYXIvQ2F2ZWF0LVJlZ3VsYXIud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJGaWd1cmluZVN5bWJvbFQxXCI7XG4gIHNyYzogdXJsKFwiLi4vLi4vZm9udHMvM3JkIFBhcnR5L0NoZXNzVmFyaWFudHMvRmlndXJpbmVTeW1ib2xUMUJvbGQud29mZjJcIikgZm9ybWF0KFwid29mZjJcIiksIHVybChcIi4uLy4uL2ZvbnRzLzNyZCBQYXJ0eS9DaGVzc1ZhcmlhbnRzL0ZpZ3VyaW5lU3ltYm9sVDFCb2xkLndvZmZcIikgZm9ybWF0KFwid29mZlwiKTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkZpZ3VyaW5lU3ltYm9sVDFcIjtcbiAgc3JjOiB1cmwoXCIuLi8uLi9mb250cy8zcmQgUGFydHkvQ2hlc3NWYXJpYW50cy9GaWd1cmluZVN5bWJvbFQxLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpLCB1cmwoXCIuLi8uLi9mb250cy8zcmQgUGFydHkvQ2hlc3NWYXJpYW50cy9GaWd1cmluZVN5bWJvbFQxLndvZmZcIikgZm9ybWF0KFwid29mZlwiKTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG59XG4vKioqKioqKioqKioqKioqKioqKiBNZW51ICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBDb250YWluZXIgVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgQ29udGFpbmVyIFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIENvbnRhaW5lciBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBIaWdobGlnaHQgVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgQW5ub3RhdGlvbiBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBWYXJpYXRpb24gVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgUGx5IFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKiogQ29udHJvbCBDb2xvcnMgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKioqIEJvYXJkIENvbG9ycyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG46cm9vdCB7XG4gIC0tYmctY29sb3I6ICNmMmYzZjc7XG4gIC0tZmctY29sb3I6ICMzODNhNDE7XG4gIC0tcmVkOiAjZTQzMDMwO1xuICAtLWdyZWVuOiAjMTlhMTg3O1xuICAtLWJsdWU6ICMzNjdiZjA7XG4gIC0tZGFyay1ibHVlOiAjMjY1YWIxO1xuICAtLW1hcm9vbjogI2I4MTc0YztcbiAgLS1wdXJwbGU6ICM4YzQyYWI7XG59XG5cbi5zZXR0aW5ncy1jb250YWluZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbi1sZWZ0OiAyNHB4O1xuICBtaW4td2lkdGg6IDI0MHB4O1xuICBvdmVyZmxvdy15OiB2aXNpYmxlO1xufVxuXG5rZXltYXAtaXRlbSB7XG4gIG1pbi13aWR0aDogMjQwcHg7XG4gIG1heC13aWR0aDogMjQwcHg7XG4gIG1heC1oZWlnaHQ6IDY0cHg7XG4gIGhlaWdodDogNjRweDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHBhZGRpbmc6IDEycHg7XG4gIGxlZnQ6IDBweDtcbiAgdG9wOiAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgd2lkdGg6IDY0cHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWdzQmFja2dyb3VuZCk7XG4gIG1hcmdpbi10b3A6IDI0cHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](KeymapMenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'keymap-menu',
                templateUrl: './keymap-menu.component.html',
                styleUrls: ['./keymap-menu.component.scss']
            }]
    }], function () { return []; }, { container: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['container', { static: false }]
        }] }); })();


/***/ }),

/***/ "./src/app/olga-menu/main-menu/main-menu.component.ts":
/*!************************************************************!*\
  !*** ./src/app/olga-menu/main-menu/main-menu.component.ts ***!
  \************************************************************/
/*! exports provided: MenuType, MainMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuType", function() { return MenuType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainMenuComponent", function() { return MainMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _keymap_menu_keymap_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../keymap-menu/keymap-menu.component */ "./src/app/olga-menu/keymap-menu/keymap-menu.component.ts");
/* harmony import */ var _board_menu_board_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../board-menu/board-menu.component */ "./src/app/olga-menu/board-menu/board-menu.component.ts");
/* harmony import */ var _general_menu_general_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../general-menu/general-menu.component */ "./src/app/olga-menu/general-menu/general-menu.component.ts");
/* harmony import */ var _themes_menu_themes_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../themes-menu/themes-menu.component */ "./src/app/olga-menu/themes-menu/themes-menu.component.ts");
/* harmony import */ var _gamescore_menu_gamescore_menu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../gamescore-menu/gamescore-menu.component */ "./src/app/olga-menu/gamescore-menu/gamescore-menu.component.ts");
/* harmony import */ var _pgn_menu_pgn_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../pgn-menu/pgn-menu.component */ "./src/app/olga-menu/pgn-menu/pgn-menu.component.ts");
/* harmony import */ var _services_colors_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/colors.service */ "./src/app/services/colors.service.ts");
/* harmony import */ var _services_layout_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/layout.service */ "./src/app/services/layout.service.ts");
/* harmony import */ var _services_olga_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/olga.service */ "./src/app/services/olga.service.ts");











function MainMenuComponent_mat_tab_group_3_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-tab-group", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectedTabChange", function MainMenuComponent_mat_tab_group_3_Template_mat_tab_group_selectedTabChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.tabChanged($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-tab", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "mat-tab", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "mat-tab", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "mat-tab", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "mat-tab", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "mat-tab", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selectedIndex", ctx_r0.index);
} }
var MenuType;
(function (MenuType) {
    MenuType[MenuType["General"] = 444] = "General";
    MenuType[MenuType["Board"] = 454] = "Board";
    MenuType[MenuType["GameScore"] = 464] = "GameScore";
    MenuType[MenuType["Keymap"] = 474] = "Keymap";
    MenuType[MenuType["GameVariation"] = 484] = "GameVariation";
    MenuType[MenuType["Themes"] = 494] = "Themes";
    MenuType[MenuType["PgnMenu"] = 500] = "PgnMenu";
})(MenuType || (MenuType = {}));
class MainMenuComponent {
    constructor(colorService, layout, olga) {
        this.colorService = colorService;
        this.layout = layout;
        this.olga = olga;
        this.index = 0;
        this.menus = null;
        this.keymapMenu = null;
        this.boardMenu = null;
        this.gamescoreMenu = null;
        this.generalMenu = null;
        this.pgnMenu = null;
        this.themeMenu = null;
        this.menuElement = null;
        this.visible = false;
        this.size = { width: 0, height: 0 };
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        this.menuElement = document.getElementById('settings-menu-' + this.olga.UUID);
    }
    open(type) {
        this.visible = true;
        if (this.menuElement) {
            this.menuElement.style.visibility = 'visible';
        }
        switch (type) {
            case MenuType.General: {
                this.index = 0;
                if (this.generalMenu) {
                    this.generalMenu.resize(this.size.width, this.size.height);
                    this.generalMenu.show();
                }
                break;
            }
            case MenuType.Board: {
                this.index = 1;
                if (this.boardMenu) {
                    this.boardMenu.resize(this.size.width, this.size.height);
                    this.boardMenu.show();
                }
                break;
            }
            case MenuType.GameScore: {
                this.index = 1;
                if (this.gamescoreMenu) {
                    this.gamescoreMenu.resize(this.size.width, this.size.height);
                    this.gamescoreMenu.show();
                }
                break;
            }
            case MenuType.Themes: {
                this.index = 1;
                if (this.themeMenu) {
                    this.themeMenu.resize(this.size.width, this.size.height);
                    this.themeMenu.show();
                }
                break;
            }
            case MenuType.PgnMenu: {
                this.index = 1;
                if (this.pgnMenu) {
                    this.pgnMenu.show();
                }
                break;
            }
        }
    }
    close() {
        this.visible = false;
        if (this.keymapMenu) {
            this.keymapMenu.hide();
        }
        if (this.boardMenu) {
            this.boardMenu.hide();
        }
        if (this.generalMenu) {
            this.generalMenu.hide();
        }
        if (this.themeMenu) {
            this.themeMenu.hide();
        }
        if (this.gamescoreMenu) {
            this.gamescoreMenu.hide();
        }
        if (this.pgnMenu) {
            this.pgnMenu.hide();
        }
        if (this.menuElement) {
            this.menuElement.style.visibility = 'hidden';
        }
    }
    resize(size) {
        let height = Math.floor(size.height * .84) - 66;
        let width = Math.floor(size.width * .9);
        this.size = { height, width };
    }
    ignoreInnerClicks(event) {
        event.stopPropagation();
    }
    tabChanged(event) {
        if (this.keymapMenu) {
            this.keymapMenu.hide();
        }
        if (this.boardMenu) {
            this.boardMenu.hide();
        }
        if (this.generalMenu) {
            this.generalMenu.hide();
        }
        if (this.themeMenu) {
            this.themeMenu.hide();
        }
        if (this.gamescoreMenu) {
            this.gamescoreMenu.hide();
        }
        if (this.pgnMenu) {
            this.pgnMenu.hide();
        }
        if (event.tab) {
            let menu = null;
            switch (event.tab.textLabel) {
                case 'General': {
                    menu = this.generalMenu;
                    break;
                }
                case 'Board': {
                    menu = this.boardMenu;
                    break;
                }
                case 'Game Score': {
                    menu = this.gamescoreMenu;
                    break;
                }
                case 'Keymap': {
                    menu = this.keymapMenu;
                    break;
                }
                case 'Themes': {
                    menu = this.themeMenu;
                    break;
                }
                case 'PGN Edit': {
                    menu = this.pgnMenu;
                    break;
                }
                default: {
                    menu = null;
                }
            }
            if (menu) {
                menu.show();
            }
        }
    }
}
MainMenuComponent.ɵfac = function MainMenuComponent_Factory(t) { return new (t || MainMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_colors_service__WEBPACK_IMPORTED_MODULE_7__["ColorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_layout_service__WEBPACK_IMPORTED_MODULE_8__["LayoutService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_olga_service__WEBPACK_IMPORTED_MODULE_9__["OlgaService"])); };
MainMenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainMenuComponent, selectors: [["main-menu"]], viewQuery: function MainMenuComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_keymap_menu_keymap_menu_component__WEBPACK_IMPORTED_MODULE_1__["KeymapMenuComponent"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_board_menu_board_menu_component__WEBPACK_IMPORTED_MODULE_2__["BoardMenuComponent"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_gamescore_menu_gamescore_menu_component__WEBPACK_IMPORTED_MODULE_5__["GamescoreMenuComponent"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_general_menu_general_menu_component__WEBPACK_IMPORTED_MODULE_3__["GeneralMenuComponent"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_pgn_menu_pgn_menu_component__WEBPACK_IMPORTED_MODULE_6__["PgnMenuComponent"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_themes_menu_themes_menu_component__WEBPACK_IMPORTED_MODULE_4__["ThemesMenuComponent"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.keymapMenu = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.boardMenu = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.gamescoreMenu = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.generalMenu = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.pgnMenu = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.themeMenu = _t.first);
    } }, decls: 11, vars: 1, consts: [[1, "settings-background", 3, "click"], ["dynamicHeight", "true", "mat-align-tabs", "center", "animationDuration", "500ms", 3, "selectedIndex", "selectedTabChange", 4, "ngIf"], [1, "menu-content"], ["tMenu", ""], ["dynamicHeight", "true", "mat-align-tabs", "center", "animationDuration", "500ms", 3, "selectedIndex", "selectedTabChange"], ["label", "General"], ["label", "Board"], ["label", "Game Score"], ["label", "Keymap"], ["label", "Themes"], ["label", "PGN Edit"]], template: function MainMenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainMenuComponent_Template_div_click_0_listener($event) { return ctx.ignoreInnerClicks($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MainMenuComponent_mat_tab_group_3_Template, 7, 1, "mat-tab-group", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "general-menu", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "board-menu", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "gamescore-menu", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "keymap-menu", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "themes-menu", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "pgn-menu", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.visible);
    } }, styles: ["@font-face {\n  font-family: \"Caveat\";\n  src: url('Caveat-Bold.woff2') format(\"woff2\"), url('Caveat-Bold.woff') format(\"woff\");\n  font-weight: bold;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"Caveat\";\n  src: url('Caveat-Regular.woff2') format(\"woff2\"), url('Caveat-Regular.woff') format(\"woff\");\n  font-weight: 600;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"FigurineSymbolT1\";\n  src: url('FigurineSymbolT1Bold.woff2') format(\"woff2\"), url('FigurineSymbolT1Bold.woff') format(\"woff\");\n  font-weight: bold;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"FigurineSymbolT1\";\n  src: url('FigurineSymbolT1.woff2') format(\"woff2\"), url('FigurineSymbolT1.woff') format(\"woff\");\n  font-weight: 600;\n  font-style: normal;\n  font-display: swap;\n}\n\n\n\n\n\n\n\n\n\n\n[_ngcontent-%COMP%]:root {\n  --bg-color: #f2f3f7;\n  --fg-color: #383a41;\n  --red: #e43030;\n  --green: #19a187;\n  --blue: #367bf0;\n  --dark-blue: #265ab1;\n  --maroon: #b8174c;\n  --purple: #8c42ab;\n}\n.settings-background[_ngcontent-%COMP%] {\n  width: 98%;\n  height: 98%;\n  position: absolute;\n  left: 0.75%;\n  top: 1%;\n  z-index: 1000;\n  min-height: 380px;\n  background: var(--meBackground);\n  border: white 2px solid;\n  border-radius: 2px;\n}\nh3[_ngcontent-%COMP%] {\n  color: var(--gsTextColor);\n  position: absolute;\n  top: 6px;\n  left: 16px;\n  font-size: 28px;\n}\n.menu-content[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 88px;\n  width: 100%;\n  height: calc(100% - 88px);\n  margin-bottom: 1px;\n  margin-right: 1px;\n  left: 0px;\n  overflow-x: hidden;\n  overflow-y: auto;\n  visibility: hidden;\n}\n.settings[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 2px;\n  top: 2px;\n  width: 48%;\n  height: 100%;\n}\n  mat-tab-group {\n  position: absolute;\n  width: 100%;\n  top: 38px;\n}\n  .mat-ripple.mat-tab-label.mat-focus-indicator.mat-tab-label-active {\n  font-size: 26px;\n  color: white;\n  border-radius: 2px;\n  background-color: #131314;\n}\n  .mat-ripple.mat-tab-label {\n  font-size: 26px;\n  color: white;\n  margin-left: 8px;\n}\n  .mat-tab-body-content.ng-tns-c121-1.ng-trigger.ng-trigger-translateTab {\n  transform: none;\n  border: white 2px solid;\n  border-radius: 8px;\n  min-height: 200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMuc2NzcyIsInNyYy9hc3NldHMvc2Nzcy9tb2R1bGVzL19mb250cy5zY3NzIiwic3JjL2FwcC9vbGdhLW1lbnUvbWFpbi1tZW51L21haW4tbWVudS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4RUFBQTtBQ0FBO0VBQ0kscUJBQUE7RUFDQSxxRkFBQTtFQUVBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0NKO0FERUE7RUFDSSxxQkFBQTtFQUNBLDJGQUFBO0VBRUEsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDREo7QURJQTtFQUNFLCtCQUFBO0VBQ0EsdUdBQUE7RUFFQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNIRjtBRE1BO0VBQ0UsK0JBQUE7RUFDQSwrRkFBQTtFQUVBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0xGO0FGYUEsK0VBQUE7QUFHQSwrRUFBQTtBQVFBLCtFQUFBO0FBTUEsK0VBQUE7QUFNQSwrRUFBQTtBQU1BLGdGQUFBO0FBS0EsK0VBQUE7QUFLQSx5RUFBQTtBQUtBLHlFQUFBO0FBSUEsdUVBQUE7QUFnQkE7RUFDRSxtQkFBQTtFQUNBLG1CQUFBO0VBRUEsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBRWxFRjtBQS9DQTtFQUNJLFVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsT0FBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLCtCRmlDVztFRWhDWCx1QkFBQTtFQUNBLGtCQUFBO0FBa0RKO0FBaERBO0VBQ0kseUJGK0JVO0VFOUJWLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FBbURKO0FBL0NBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFrREo7QUE3Q0E7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUFnREo7QUEzQ0k7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0FBOENSO0FBNUNJO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FBOENSO0FBNUNJO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQThDUjtBQTVDSTtFQUNJLGVBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUE4Q1IiLCJmaWxlIjoic3JjL2FwcC9vbGdhLW1lbnUvbWFpbi1tZW51L21haW4tbWVudS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cblxuQGltcG9ydCBcIi4vYXNzZXRzL3Njc3MvbW9kdWxlcy9fZm9udHMuc2Nzc1wiO1xuJGdhbWVzY29yZS1mYW1pbHk6IFwiRmlndXJpbmVTeW1ib2xUMVwiO1xuJGdhbWVzY29yZS1oaWdobGlnaHQ6ICM1ODU4NThmZjtcbiRnYW1lc2NvcmUtZm9yZWdyb3VuZDogd2hpdGU7XG5cbiRyZWQ6ICNlNDMwMzA7XG4kZ3JlZW46ICMxOWExODc7XG4kbGlnaHQtYmx1ZTogIzAwZmZmZmZmO1xuJGJsdWU6ICMzNjdiZjA7XG4kZGFyay1ibHVlOiAjMjY1YWIxO1xuJG1hcm9vbjogI2I4MTc0YztcbiRwdXJwbGU6ICM4YzQyYWI7XG5cbi8vIE1haW4gT0xHQSBDb2xvciBFbGVtZW50IFZhcmlhYmxlc1xuJHRleHRDb2xvcjogdmFyKC0tdGV4dENvbG9yKTsgLy8gTWFpbiBUZXh0IENvbG9yXG4kdGV4dENvbG9yQXR0ZW50aW9uOiB2YXIoLS10ZXh0Q29sb3JBdHRlbnRpb24pOyAvLyBBdHRlbnRpb24gdGV4dFxuJHRleHRDb2xvclJlbW92ZTogdmFyKC0tdGV4dENvbG9yUmVtb3ZlKTsgLy8gUmVtb3ZlL0RlbGV0ZS9DbG9zZVxuJHRleHRDb2xvckFkZDogdmFyKC0tdGV4dENvbG9yQWRkKTsgLy8gQWRkL0NyZWF0ZS9PcGVuXG4kdGV4dENvbG9yQWN0aXZlOiB2YXIoLS10ZXh0Q29sb3JBY3RpdmUpOyAvLyBBZGQvQ3JlYXRlL09wZW5cbiRiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kKTsgLy8gTWFpbiBiYWNrZ3JvdW5kIENvbG9yXG4kYmdDb250YWluZXI6IHZhcigtLWJnQ29udGFpbmVyKTsgLy8gYmFja2dyb3VuZCBvZiBDb250YWluZXJzXG4kYmdNZW51OiB2YXIoLS1iZ01lbnUpOyAvLyBiYWNrZ3JvdW5kIG9mIE1lbnVzXG4kYmdJdGVtOiB2YXIoLS1iZ0l0ZW0pOyAvLyBiYWNrZ3JvdW5kIG9mIEl0ZW1zXG5cbi8vIENvbnRleHQgTWVudVxuJGJnQ29udGV4dDogdmFyKC0tYmdDb250ZXh0KTsgLy8gYmFja2dyb3VuZCBvZiBDb250ZXh0IE1lbnVcbiR0ZXh0Q29sb3JDb250ZXh0OiB2YXIoLS10ZXh0Q29sb3JDb250ZXh0KTsgLy8gdGV4dCBjb2xvciBDb250ZXh0IE1lbnVcbiRib3JkZXJDb250ZXh0OiB2YXIoLS1ib3JkZXJDb250ZXh0KTsgLy8gYm9yZGVyIENvbnRleHQgTWVudVxuJG92ZXJsYXlDb250ZXh0QmFja2dyb3VuZDogdmFyKFxuICAtLW92ZXJsYXlDb250ZXh0QmFja2dyb3VuZFxuKTsgLy8gQ29udGV4dCBNZW51IE92ZXJsYXkgYmFja2dyb3VuZCBtYWluXG4kb3ZlcmxheUNvbnRleHRCYWNrZ3JvdW5kR3JhZGllbnQ6IHZhcihcbiAgLS1vdmVybGF5Q29udGV4dEJhY2tncm91bmRHcmFkaWVudFxuKTsgLy8gQ29udGV4dCBNZW51IGJhY2tncm91bmQgZ3JhZGllbnRcblxuJGl0ZW06IHZhcigtLWl0ZW0pO1xuJGl0ZW0tY29udHJhc3Q6IHZhcigtLWl0ZW0tY29udHJhc3QpO1xuJGl0ZW0tYmc6IHZhcigtLWl0ZW0tYmcpO1xuXG4vKioqKioqKioqKioqKioqKioqKiBNZW51ICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuJG1lQmFja2dyb3VuZDogdmFyKC0tbWVCYWNrZ3JvdW5kKTtcblxuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBDb250YWluZXIgVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiRnc1RleHRDb2xvcjogdmFyKC0tZ3NUZXh0Q29sb3IpOyAvLyBUZXh0IGNvbG9yIGZvciBnYW1lIHNjb3JlXG4kZ3NCYWNrZ3JvdW5kOiB2YXIoLS1nc0JhY2tncm91bmQpOyAvLyBiYWNrZ3JvdW5kIG9mIENvbnRhaW5lcnNcbiRnc0xpc3RCYWNrZ3JvdW5kOiB2YXIoLS1nc0xpc3RCYWNrZ3JvdW5kKTsgLy8gbGlzdCBiYWNrZ3JvdW5kIG9mIGdhbWUgc2NvcmVcbiRnc0JvcmRlcjogdmFyKC0tZ3NCb3JkZXIpOyAvLyBiYWNrZ3JvdW5kIG9mIE1lbnVzXG4kZ3NUZXh0U2l6ZTogdmFyKC0tZ3NUZXh0U2l6ZSk7IC8vIGJhY2tncm91bmQgb2YgTWVudXNcbiRnc0ZvbnRGYW1pbHk6IHZhcigtLWdzRm9udEZhbWlseSk7IC8vIHNjb3JlIGZvbnRcblxuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBDb250YWluZXIgVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiRnc1RleHRDb2xvck1XOiB2YXIoLS1nc1RleHRDb2xvck1XKTsgLy8gVGV4dCBjb2xvciBmb3IgZ2FtZSBzY29yZVxuJGdzQmFja2dyb3VuZE1XOiB2YXIoLS1nc0JhY2tncm91bmRNVyk7IC8vIGJhY2tncm91bmQgb2YgQ29udGFpbmVyc1xuJGdzQm9yZGVyTVc6IHZhcigtLWdzQm9yZGVyTVcpOyAvLyBiYWNrZ3JvdW5kIG9mIE1lbnVzXG4kZ3NUZXh0U2l6ZU1XOiB2YXIoLS1nc1RleHRTaXplTVcpOyAvLyBiYWNrZ3JvdW5kIG9mIE1lbnVzXG5cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgQ29udGFpbmVyIFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4kZ3NUZXh0Q29sb3JNQjogdmFyKC0tZ3NUZXh0Q29sb3JNQik7IC8vIFRleHQgY29sb3IgZm9yIGdhbWUgc2NvcmVcbiRnc0JhY2tncm91bmRNQjogdmFyKC0tZ3NCYWNrZ3JvdW5kTUIpOyAvLyBiYWNrZ3JvdW5kIG9mIENvbnRhaW5lcnNcbiRnc0JvcmRlck1COiB2YXIoLS1nc0JvcmRlck1CKTsgLy8gYmFja2dyb3VuZCBvZiBNZW51c1xuJGdzVGV4dFNpemVNQjogdmFyKC0tZ3NUZXh0U2l6ZU1CKTsgLy8gYmFja2dyb3VuZCBvZiBNZW51c1xuXG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIEhpZ2hsaWdodCBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuJGdzVGV4dENvbG9ySEc6IHZhcigtLWdzVGV4dENvbG9ySEcpOyAvLyBUZXh0IGNvbG9yIGZvciBoaWdobGlnaHRcbiRnc0Fubm90YXRpb25Db2xvckhHOiB2YXIoLS1nc0Fubm90YXRpb25Db2xvckhHKTsgLy8gQW5ub3RhdGlvbi9Db21tZW50IGNvbG9yIGZvciBoaWdobGlnaHRcbiRnc0JhY2tncm91bmRIRzogdmFyKC0tZ3NCYWNrZ3JvdW5kSEcpOyAvLyBiYWNrZ3JvdW5kIGZvciBoaWdobGlnaHRcbiRnc0JvcmRlckhHOiB2YXIoLS1nc0JvcmRlckhHKTsgLy8gYm9yZGVyIGZvciBoaWdobGlnaHRcblxuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBBbm5vdGF0aW9uIFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4kZ3NUZXh0Q29sb3JBTjogdmFyKC0tZ3NUZXh0Q29sb3JBTik7IC8vIFRleHQgY29sb3IgZm9yIGhpZ2hsaWdodFxuJGdzQmFja2dyb3VuZEFOOiB2YXIoLS1nc0JhY2tncm91bmRBTik7IC8vIGJhY2tncm91bmQgZm9yIGhpZ2hsaWdodFxuJGdzQm9yZGVyQU46IHZhcigtLWdzQm9yZGVyQU4pOyAvLyBib3JkZXIgZm9yIGhpZ2hsaWdodFxuXG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIFZhcmlhdGlvbiBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuJGdzVGV4dENvbG9yVkE6IHZhcigtLWdzVGV4dENvbG9yVkEpOyAvLyBUZXh0IGNvbG9yIGZvciBoaWdobGlnaHRcbiRnc0JhY2tncm91bmRWQTogdmFyKC0tZ3NCYWNrZ3JvdW5kVkEpOyAvLyBiYWNrZ3JvdW5kIGZvciBoaWdobGlnaHRcbiRnc0JvcmRlclZBOiB2YXIoLS1nc0JvcmRlclZBKTsgLy8gYm9yZGVyIGZvciBoaWdobGlnaHRcblxuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBQbHkgVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiRnc1RleHRDb2xvclBDOiB2YXIoLS1nc1RleHRDb2xvclBDKTsgLy8gVGV4dCBjb2xvciBmb3IgZ2FtZSBzY29yZSBwbHlcbiRnc0JhY2tncm91bmRQQzogdmFyKC0tZ3NCYWNrZ3JvdW5kUEMpOyAvLyBiYWNrZ3JvdW5kIGZvciBnYW1lIHNjb3JlIHBseVxuJGdzQm9yZGVyUEM6IHZhcigtLWdzQm9yZGVyUEMpOyAvLyBib3JkZXIgZm9yIGdhbWUgc2NvcmUgcGx5XG5cbi8qKioqKioqKioqKioqKioqKioqKiBDb250cm9sIENvbG9ycyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4kY3NCYWNrZ3JvdW5kOiB2YXIoLS1jc0JhY2tncm91bmQpOyAvLyBiYWNrZ3JvdW5kIGZvciBjb250cm9sc1xuJGNzQ29sb3I6IHZhcigtLWNzQ29sb3IpOyAvLyBjb250cm9scyBjb2xvciAoZm9yZWdyb3VuZClcblxuLyoqKioqKioqKioqKioqKioqKioqIEJvYXJkIENvbG9ycyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4kYm9hcmRCR0Rhcms6IHZhcigtLWJvYXJkQkdEYXJrKTsgLy8gYm9hcmQgZGFyayB0aWxlXG4kYm9hcmRCR0xpZ2h0OiB2YXIoLS1ib2FyZEJHTGlnaHQpOyAvLyBib2FyZCBsaWdodCB0aWxlXG4kYm9hcmRMYWJlbExpZ2h0OiB2YXIoLS1ib2FyZExhYmVsTGlnaHQpOyAvLyBib2FyZCBsaWdodCBsYWJlbFxuJGJvYXJkTGFiZWxEYXJrOiB2YXIoLS1ib2FyZExhYmVsRGFyayk7IC8vIGJvYXJkIGRhcmsgbGFiZWxcblxuLy8gR2VuZXJhbCBzdHVmZlxuJHRleHQtY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xuJGJnLW91dGVyOiB2YXIoLS1iZy1vdXRlcik7XG4kYmctaW5uZXI6IHZhcigtLWJnLWlubmVyKTtcblxuJGJnLWNvbG9yOiAjZjJmM2Y3O1xuJGZnLWNvbG9yOiAjMzgzYTQxO1xuXG4kZ2xvdy1zaGFkb3c6IDAgMCAwLjVlbSB0cmFuc3BhcmVudGl6ZSgkYmx1ZSwgMC4zKTtcblxuOnJvb3Qge1xuICAtLWJnLWNvbG9yOiAjeyRiZy1jb2xvcn07XG4gIC0tZmctY29sb3I6ICN7JGZnLWNvbG9yfTtcblxuICAtLXJlZDogI3skcmVkfTtcbiAgLS1ncmVlbjogI3skZ3JlZW59O1xuICAtLWJsdWU6ICN7JGJsdWV9O1xuICAtLWRhcmstYmx1ZTogI3skZGFyay1ibHVlfTtcbiAgLS1tYXJvb246ICN7JG1hcm9vbn07XG4gIC0tcHVycGxlOiAjeyRwdXJwbGV9O1xufVxuXG4vLyA6Oi1tb3otZm9jdXMtaW5uZXIsXG4vLyA6LW1vei1mb2N1c3Jpbmcge1xuLy8gICBib3JkZXI6IDA7XG4vLyAgIGNvbG9yOiB0cmFuc3BhcmVudDtcbi8vICAgdGV4dC1zaGFkb3c6IDAgMCAwICRmZy1jb2xvcjtcbi8vIH1cblxuLy8gOjpzZWxlY3Rpb24sXG4vLyA6Oi1tb3otc2VsZWN0aW9uIHtcbi8vICAgY29sb3I6IHdoaXRlO1xuLy8gICBiYWNrZ3JvdW5kOiBibGFjaztcbi8vIH1cblxuLy8gKiB7XG4vLyAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4vLyAgIG91dGxpbmU6IG5vbmU7XG4vLyAgIHVzZXItc2VsZWN0OiBub25lO1xuLy8gICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XG4vLyAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4vLyAgIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTtcbi8vICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbi8vICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuLy8gICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4vLyAgIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbi8vICAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApICFpbXBvcnRhbnQ7XG4vLyAgIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcbi8vICAgY3Vyc29yOiBkZWZhdWx0O1xuLy8gICBsZXR0ZXItc3BhY2luZzogMDtcbi8vIH1cblxuLy8gLnNlbGVjdGFibGUsXG4vLyAuc2VsZWN0YWJsZSAqIHtcbi8vICAgY3Vyc29yOiBhdXRvO1xuLy8gICB1c2VyLXNlbGVjdDogdGV4dDtcbi8vICAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiB0ZXh0O1xuLy8gICAtd2Via2l0LXVzZXItc2VsZWN0OiB0ZXh0O1xuLy8gICAta2h0bWwtdXNlci1zZWxlY3Q6IHRleHQ7XG4vLyAgIC1tb3otdXNlci1zZWxlY3Q6IHRleHQ7XG4vLyAgIC1tcy11c2VyLXNlbGVjdDogdGV4dDtcbi8vIH1cblxuLy8gaHRtbCxcbi8vIGJvZHkge1xuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmctY29sb3I7XG4vLyAgIGNvbG9yOiAkZmctY29sb3I7XG4vLyAgIG1hcmdpbjogMDtcbi8vICAgcGFkZGluZzogMDtcbi8vICAgZm9udC1zaXplOiAxMHB0O1xuLy8gICBoZWlnaHQ6IDEwMCU7XG4vLyAgIG92ZXJmbG93OiBhdXRvO1xuLy8gfVxuXG4vLyAud2l0aC1zaGFkb3cge1xuLy8gICBib3gtc2hhZG93OiA2cHggNnB4IDEwcHggdHJhbnNwYXJlbnRpemUoYmxhY2ssIDAuOSksIC02cHggLTZweCAxMHB4IHdoaXRlO1xuLy8gfVxuXG4vLyAub3V0c2V0IHtcbi8vICAgQGV4dGVuZCAud2l0aC1zaGFkb3c7XG5cbi8vICAgYm9yZGVyLXJhZGl1czogMTBweDtcbi8vICAgYmFja2dyb3VuZDogJGJnLWNvbG9yO1xuLy8gfVxuXG4vLyAuaW5zZXQge1xuLy8gICBib3JkZXItcmFkaXVzOiAxMHB4O1xuLy8gICBib3gtc2hhZG93OiAwIDAgdHJhbnNwYXJlbnQsIDAgMCB0cmFuc3BhcmVudCxcbi8vICAgICBpbnNldCAzcHggM3B4IDVweCB0cmFuc3BhcmVudGl6ZShibGFjaywgMC45KSwgaW5zZXQgLTNweCAtM3B4IDVweCB3aGl0ZTtcbi8vICAgYmFja2dyb3VuZDogbGlnaHRlbigkYmctY29sb3IsIDIlKTtcbi8vIH1cblxuLy8gLnBhcGVyIHtcbi8vICAgQGV4dGVuZCAub3V0c2V0O1xuLy8gICBwYWRkaW5nOiAxMHB4IDIwcHggMjBweDtcbi8vICAgbWFyZ2luLXRvcDogMjBweDtcbi8vICAgbWluLWhlaWdodDogMTAwcHg7XG4vLyAgIGZvbnQtc2l6ZTogMS4yZW07XG4vLyAgIGJhY2tncm91bmQ6ICRiZy1jb2xvcjtcbi8vIH1cblxuLy8gc2VjdGlvbixcbi8vIGFydGljbGUsXG4vLyAuc2VjdGlvbixcbi8vIC5hcnRpY2xlLFxuLy8gLnBhcGVyIHtcbi8vICAgbGluZS1oZWlnaHQ6IDJlbTtcbi8vICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuLy8gICB3b3JkLWJyZWFrOiBub3JtYWw7XG4vLyAgIGxpbmUtaGVpZ2h0OiAyZW07XG4vLyB9XG5cbi8vIGlucHV0W3R5cGU9XCJ0ZXh0XCJdLFxuLy8gaW5wdXRbdHlwZT1cInNlYXJjaFwiXSxcbi8vIGlucHV0W3R5cGU9XCJ0ZWxcIl0sXG4vLyBpbnB1dFt0eXBlPVwidXJsXCJdLFxuLy8gaW5wdXRbdHlwZT1cImVtYWlsXCJdLFxuLy8gaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJdLFxuLy8gaW5wdXRbdHlwZT1cImRhdGVcIl0sXG4vLyBpbnB1dFt0eXBlPVwibW9udGhcIl0sXG4vLyBpbnB1dFt0eXBlPVwid2Vla1wiXSxcbi8vIGlucHV0W3R5cGU9XCJ0aW1lXCJdLFxuLy8gaW5wdXRbdHlwZT1cIm51bWJlclwiXSxcbi8vIGlucHV0W3R5cGU9XCJjb2xvclwiXSxcbi8vIHNlbGVjdCxcbi8vIHRleHRhcmVhIHtcbi8vICAgYm9yZGVyOiAwO1xuLy8gICBiYWNrZ3JvdW5kOiAkYmctY29sb3I7XG4vLyAgIGNvbG9yOiAkZmctY29sb3I7XG4vLyAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4vLyAgIHBhZGRpbmc6IDAgMS4yNWVtO1xuLy8gICBsaW5lLWhlaWdodDogMS4yNWVtO1xuLy8gICBoZWlnaHQ6IDMuNWVtO1xuLy8gICBtYXJnaW46IDEwcHggMDtcbi8vICAgZm9udC1zaXplOiAxLjFyZW07XG4vLyAgIGN1cnNvcjogdGV4dDtcbi8vICAgdXNlci1zZWxlY3Q6IHRleHQ7XG4vLyAgIC13ZWJraXQtdG91Y2gtY2FsbG91dDogdGV4dDtcbi8vICAgLXdlYmtpdC11c2VyLXNlbGVjdDogdGV4dDtcbi8vICAgLWtodG1sLXVzZXItc2VsZWN0OiB0ZXh0O1xuLy8gICAtbW96LXVzZXItc2VsZWN0OiB0ZXh0O1xuLy8gICAtbXMtdXNlci1zZWxlY3Q6IHRleHQ7XG4vLyAgIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC4ycztcblxuLy8gICAmOm5vdChzZWxlY3QpIHtcbi8vICAgICBAZXh0ZW5kIC5pbnNldDtcblxuLy8gICAgICY6Zm9jdXMge1xuLy8gICAgICAgQGV4dGVuZCAub3V0c2V0O1xuLy8gICAgIH1cbi8vICAgfVxuLy8gfVxuXG4vLyB0ZXh0YXJlYSB7XG4vLyAgIGhlaWdodDogMzUwcHg7XG4vLyAgIHBhZGRpbmc6IDEuMjVlbTtcbi8vIH1cblxuLy8gc2VsZWN0IHtcbi8vICAgQGV4dGVuZCAub3V0c2V0O1xuXG4vLyAgIGN1cnNvcjogcG9pbnRlcjtcbi8vICAgYmFja2dyb3VuZDogdXJsKGRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjJaWEp6YVc5dVBTSXhMakVpSUhacFpYZENiM2c5SWpBZ01DQXhPU0F4T1NJZ2VHMXNibk05SW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTHpJd01EQXZjM1puSWo0OFp5QjBjbUZ1YzJadmNtMDlJbTFoZEhKcGVDZ3VNRE0wSURBZ01DQXVNRE0wSUMwMkxqZ2dNUzQzWlMwMUtTSWdjM1I1YkdVOUltWnBiR3c2SXpkaU4yVTRZeUkrUEhCaGRHZ2daRDBpYlRRNE1DQXpORFF0TWpFeExUSXhNbU10TVRZdE1UWXROREV0TVRZdE5UY2dNQzB4TmlBeE5pMHhOaUEwTWlBd0lEVTNiREl6T0NBeU16bGpPQzQwSURndU5TQXlNQ0F4TWlBek1TQXhNaUF4TVNBd0xqVTJJREl5TFRNdU1pQXpNUzB4TW13eU16Z3RNak01WXpFMkxURTJJREUyTFRReUlEQXROVGR6TFRReExURTJMVFUzSURCNklpQnpkSGxzWlQwaVptbHNiRG9qTjJJM1pUaGpJaTgrUEM5blBqd3ZjM1puUGdvPSlcbi8vICAgICBuby1yZXBlYXQgcmlnaHQgMWVtIGNlbnRlcjtcbi8vICAgYmFja2dyb3VuZC1zaXplOiAxLjJlbTtcbi8vICAgcGFkZGluZy1yaWdodDogM2VtO1xuLy8gfVxuXG4vLyBpbnB1dDo6cGxhY2Vob2xkZXIsXG4vLyB0ZXh0YXJlYTo6cGxhY2Vob2xkZXIge1xuLy8gICBvcGFjaXR5OiAxO1xuLy8gICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnM7XG4vLyAgIGNvbG9yOiBpbmhlcml0O1xuLy8gfVxuXG4vLyBpbnB1dDpmb2N1czo6cGxhY2Vob2xkZXIsXG4vLyB0ZXh0YXJlYTpmb2N1czo6cGxhY2Vob2xkZXIge1xuLy8gICBvcGFjaXR5OiAwLjI7XG4vLyB9XG5cbi8vIGlucHV0Oi1tcy1pbnB1dC1wbGFjZWhvbGRlcixcbi8vIHRleHRhcmVhOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4vLyAgIG9wYWNpdHk6IDE7XG4vLyAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycztcbi8vICAgY29sb3I6IGluaGVyaXQ7XG4vLyB9XG5cbi8vIGlucHV0OmZvY3VzOi1tcy1pbnB1dC1wbGFjZWhvbGRlcixcbi8vIHRleHRhcmVhOmZvY3VzOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4vLyAgIG9wYWNpdHk6IDAuMjtcbi8vIH1cblxuLy8gaW5wdXRbdHlwZT1cInNlYXJjaFwiXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbixcbi8vIGlucHV0W3R5cGU9XCJzZWFyY2hcIl06Oi13ZWJraXQtc2VhcmNoLWNhbmNlbC1idXR0b24sXG4vLyBpbnB1dFt0eXBlPVwic2VhcmNoXCJdOjotd2Via2l0LXNlYXJjaC1yZXN1bHRzLWJ1dHRvbixcbi8vIGlucHV0W3R5cGU9XCJzZWFyY2hcIl06Oi13ZWJraXQtc2VhcmNoLXJlc3VsdHMtZGVjb3JhdGlvbiB7XG4vLyAgIGRpc3BsYXk6IG5vbmU7XG4vLyB9XG5cbi8vIGJ1dHRvbixcbi8vIGlucHV0W3R5cGU9XCJidXR0b25cIl0sXG4vLyBpbnB1dFt0eXBlPVwic3VibWl0XCJdLFxuLy8gaW5wdXRbdHlwZT1cInJlc2V0XCJdIHtcbi8vICAgQGV4dGVuZCAub3V0c2V0O1xuXG4vLyAgIGJvcmRlcjogMDtcbi8vICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4vLyAgIHBhZGRpbmc6IDEwcHggMDtcbi8vICAgd2lkdGg6IDhlbTtcbi8vICAgdGV4dC1hbGlnbjogY2VudGVyO1xuLy8gICBjdXJzb3I6IHBvaW50ZXI7XG4vLyAgIGNvbG9yOiBpbmhlcml0O1xuLy8gICBmb250LXNpemU6IDEuMXJlbTtcbi8vICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYmFja2dyb3VuZC1jb2xvciwgYm94LXNoYWRvdztcbi8vICAgdHJhbnNpdGlvbi1kZWxheTogMC4ycztcbi8vICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4ycztcblxuLy8gICAmLmFjdGl2ZSxcbi8vICAgJjphY3RpdmUge1xuLy8gICAgIEBleHRlbmQgLmluc2V0O1xuXG4vLyAgICAgdHJhbnNpdGlvbi1kZWxheTogMHM7XG4vLyAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4xcztcbi8vICAgfVxuXG4vLyAgIEBlYWNoICRuYW1lLCAkY29sb3IgaW4gKFwicmVkXCI6ICRyZWQsIFwiZ3JlZW5cIjogJGdyZWVuLCBcImJsdWVcIjogJGJsdWUpIHtcbi8vICAgICBAYXQtcm9vdCAuI3skbmFtZX0tYnV0dG9uLFxuLy8gICAgICAgJi4jeyRuYW1lfS1idXR0b24ge1xuLy8gICAgICAgQGV4dGVuZCBidXR0b247XG5cbi8vICAgICAgICRfYmctaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsICRjb2xvciAzMCUsIGxpZ2h0ZW4oJGNvbG9yLCA2JSkgODAlKTtcblxuLy8gICAgICAgY29sb3I6IHdoaXRlO1xuLy8gICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4vLyAgICAgICB0ZXh0LXNoYWRvdzogMCAwLjFlbSAwLjFlbSB0cmFuc3BhcmVudGl6ZShibGFjaywgMC4zKTtcbi8vICAgICAgIGJhY2tncm91bmQ6ICRfYmctaW1hZ2U7XG4vLyAgICAgICBib3gtc2hhZG93OiAwIDAgMC41ZW0gdHJhbnNwYXJlbnRpemUoJGNvbG9yLCAwLjMpLCAwIDAgdHJhbnNwYXJlbnQsXG4vLyAgICAgICAgIGluc2V0IDAgLTVweCAwIHRyYW5zcGFyZW50aXplKGJsYWNrLCAwLjk1KSxcbi8vICAgICAgICAgaW5zZXQgMCAycHggMCB0cmFuc3BhcmVudGl6ZSh3aGl0ZSwgMC44KTtcbi8vICAgICAgIGJvcmRlci1yYWRpdXM6IDZweCA2cHggOHB4IDhweDtcbi8vICAgICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGJveC1zaGFkb3csIGJvcmRlci1yYWRpdXM7XG5cbi8vICAgICAgICYuYWN0aXZlLFxuLy8gICAgICAgJjphY3RpdmUge1xuLy8gICAgICAgICBiYWNrZ3JvdW5kOiAkX2JnLWltYWdlO1xuLy8gICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4vLyAgICAgICAgIGJveC1zaGFkb3c6IDAgMCB0cmFuc3BhcmVudCwgMCAwIHRyYW5zcGFyZW50LFxuLy8gICAgICAgICAgIGluc2V0IDAgMnB4IDVweCAycHggdHJhbnNwYXJlbnRpemUoYmxhY2ssIDAuOCk7XG4vLyAgICAgICB9XG4vLyAgICAgfVxuLy8gICB9XG4vLyB9XG5cbi8vIGxhYmVsIHtcbi8vICAgJixcbi8vICAgJiAqIHtcbi8vICAgICBjdXJzb3I6IHBvaW50ZXI7XG4vLyAgIH1cblxuLy8gICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4vLyAgIHBhZGRpbmc6IDAuNTZlbSAwO1xuLy8gfVxuXG4vLyBhIHtcbi8vICAgJixcbi8vICAgJjpsaW5rLFxuLy8gICAmOnZpc2l0ZWQsXG4vLyAgICY6aG92ZXIgJjphY3RpdmUge1xuLy8gICAgICYsXG4vLyAgICAgJiAqIHtcbi8vICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbi8vICAgICB9XG5cbi8vICAgICBmb250LXdlaWdodDogYm9sZDtcbi8vICAgICBjb2xvcjogJGJsdWU7XG4vLyAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4vLyAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuLy8gICB9XG4vLyB9XG5cbi8vIGgxLFxuLy8gaDIsXG4vLyBoMyxcbi8vIGg0LFxuLy8gaDUsXG4vLyBoNiB7XG4vLyAgIGxpbmUtaGVpZ2h0OiAxLjVlbTtcbi8vIH1cblxuLy8gaDEge1xuLy8gICBmb250LXNpemU6IDRlbTtcbi8vICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4vLyAgIG1hcmdpbjogMC43ZW0gMDtcbi8vIH1cblxuLy8gaDIge1xuLy8gICBmb250LXNpemU6IDNlbTtcbi8vICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4vLyAgIG1hcmdpbjogMC44ZW0gMDtcbi8vIH1cblxuLy8gaDMge1xuLy8gICBmb250LXNpemU6IDIuNWVtO1xuLy8gICBmb250LXdlaWdodDogbGlnaHRlcjtcbi8vICAgbWFyZ2luOiAwLjllbSAwO1xuLy8gfVxuXG4vLyBoNCB7XG4vLyAgIGZvbnQtc2l6ZTogMmVtO1xuLy8gICBmb250LXdlaWdodDogbGlnaHRlcjtcbi8vICAgbWFyZ2luOiAxZW0gMDtcbi8vIH1cblxuLy8gaDUge1xuLy8gICBtYXJnaW46IDAuNWVtIDA7XG4vLyAgIGZvbnQtc2l6ZTogMS4yZW07XG4vLyAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4vLyB9XG5cbi8vIGg2IHtcbi8vICAgbWFyZ2luOiAxZW0gMCAxZW0gMS40ZW07XG4vLyAgIGZvbnQtc2l6ZTogMWVtO1xuLy8gICBmb250LXdlaWdodDogYm9sZDtcbi8vIH1cblxuLy8gaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdLFxuLy8gaW5wdXRbdHlwZT1cInJhZGlvXCJdIHtcbi8vICAgJF9ib3JkZXItd2lkdGg6IDAuMTVlbTtcbi8vICAgJF9ib3gtc2hhZG93OiAycHggMnB4IDNweCB0cmFuc3BhcmVudGl6ZShibGFjaywgMC44KSwgLTJweCAtMnB4IDNweCB3aGl0ZSxcbi8vICAgICBpbnNldCAxcHggMXB4IDJweCB0cmFuc3BhcmVudGl6ZShibGFjaywgMC44KSwgaW5zZXQgLTFweCAtMXB4IDJweCB3aGl0ZTtcbi8vICAgZm9udC1zaXplOiAxZW07XG4vLyAgIGN1cnNvcjogcG9pbnRlcjtcbi8vICAgaGVpZ2h0OiAxLjJlbTtcbi8vICAgd2lkdGg6IDEuMmVtO1xuLy8gICBtYXJnaW46IDAgMC4zZW07XG4vLyAgIGJveC1zaGFkb3c6ICRfYm94LXNoYWRvdztcbi8vICAgYm9yZGVyOiAkX2JvcmRlci13aWR0aCBzb2xpZCAkYmctY29sb3I7XG4vLyAgIHZlcnRpY2FsLWFsaWduOiB0ZXh0LWJvdHRvbTtcbi8vICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYmFja2dyb3VuZCwgYm94LXNoYWRvdztcbi8vICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4ycztcblxuLy8gICAmOmFjdGl2ZSB7XG4vLyAgICAgYm94LXNoYWRvdzogJF9ib3gtc2hhZG93LCBpbnNldCAwIDAuMWVtIDAuMjVlbSB0cmFuc3BhcmVudGl6ZShibGFjaywgMC44KTtcbi8vICAgfVxuXG4vLyAgICY6Y2hlY2tlZCB7XG4vLyAgICAgYm9yZGVyLXdpZHRoOiAwLjFlbTtcbi8vICAgICBib3JkZXItY29sb3I6IGRhcmtlbigkYmx1ZSwgMTAlKTtcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmx1ZTtcbi8vICAgfVxuLy8gfVxuXG4vLyBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0ge1xuLy8gICBib3JkZXItcmFkaXVzOiAyNSU7XG5cbi8vICAgJjpjaGVja2VkIHtcbi8vICAgICBib3gtc2hhZG93OiAkZ2xvdy1zaGFkb3csIGluc2V0IDAgLTAuMWVtIDAgdHJhbnNwYXJlbnRpemUoYmxhY2ssIDAuOCksXG4vLyAgICAgICBpbnNldCAwIDAuMWVtIDAuMWVtIHRyYW5zcGFyZW50aXplKHdoaXRlLCAwLjgpO1xuLy8gICB9XG4vLyB9XG5cbi8vIGlucHV0W3R5cGU9XCJyYWRpb1wiXSB7XG4vLyAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG5cbi8vICAgJjpjaGVja2VkIHtcbi8vICAgICBib3gtc2hhZG93OiAkZ2xvdy1zaGFkb3c7XG4vLyAgICAgYm94LXNoYWRvdzogJGdsb3ctc2hhZG93LCBpbnNldCAwIDAuMTJlbSAwLjFlbSB0cmFuc3BhcmVudGl6ZSh3aGl0ZSwgMC43NSk7XG4vLyAgICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMC4xNWVtO1xuLy8gICB9XG4vLyB9XG5cbi8vIC5jaGVja3RleHQge1xuLy8gICB3aWR0aDogYXV0bztcbi8vICAgbWFyZ2luOiAwLjVlbTtcblxuLy8gICBpbnB1dCB7XG4vLyAgICAgZGlzcGxheTogbm9uZTtcblxuLy8gICAgICsgc3BhbiB7XG4vLyAgICAgICBAZXh0ZW5kIGJ1dHRvbjtcblxuLy8gICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4vLyAgICAgICBwYWRkaW5nOiAxZW07XG4vLyAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwcztcbi8vICAgICB9XG5cbi8vICAgICAmOmNoZWNrZWQgKyBzcGFuIHtcbi8vICAgICAgIEBleHRlbmQgLmJsdWUtYnV0dG9uO1xuXG4vLyAgICAgICBwYWRkaW5nOiAxZW07XG4vLyAgICAgfVxuLy8gICB9XG4vLyB9XG5cbi8vIC5zd2l0Y2gge1xuLy8gICAkX2hlaWdodDogMnJlbTtcbi8vICAgJF93aWR0aDogOHJlbTtcbi8vICAgJF9oYW5kbGUtd2lkdGg6ICRfaGVpZ2h0O1xuLy8gICAkX2hhbmRsZS10cmFuc2xhdGlvbjogJF93aWR0aCAtICRfaGFuZGxlLXdpZHRoO1xuXG4vLyAgIGhlaWdodDogJF9oZWlnaHQ7XG4vLyAgIHdpZHRoOiAkX3dpZHRoO1xuLy8gICBwYWRkaW5nOiAwO1xuLy8gICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbi8vICAgaW5wdXQge1xuLy8gICAgIGRpc3BsYXk6IG5vbmU7XG5cbi8vICAgICArIGRpdiB7XG4vLyAgICAgICBoZWlnaHQ6IDEwMCU7XG4vLyAgICAgICB3aWR0aDogMTAwJTtcbi8vICAgICAgIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xuLy8gICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4vLyAgICAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBib3gtc2hhZG93LCBiYWNrZ3JvdW5kLWNvbG9yO1xuLy8gICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4ycztcbi8vICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuMnM7XG4vLyAgICAgICBib3gtc2hhZG93OiAzcHggM3B4IDJweCAtMnB4IHRyYW5zcGFyZW50aXplKGJsYWNrLCAwLjkpLFxuLy8gICAgICAgICBpbnNldCAycHggMnB4IDJweCAxcHggdHJhbnNwYXJlbnRpemUoYmxhY2ssIDAuOSksXG4vLyAgICAgICAgIGluc2V0IC0ycHggLTJweCAxcHggd2hpdGU7XG5cbi8vICAgICAgICY6OmJlZm9yZSB7XG4vLyAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4vLyAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuLy8gICAgICAgICBoZWlnaHQ6IGNhbGMoI3skX2hhbmRsZS13aWR0aH0gKyA0cHgpO1xuLy8gICAgICAgICB3aWR0aDogY2FsYygjeyRfaGFuZGxlLXdpZHRofSArIDRweCk7XG4vLyAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4vLyAgICAgICAgIGJvcmRlcjogc29saWQgd2hpdGUgM3B4O1xuLy8gICAgICAgICBiYWNrZ3JvdW5kOiAkYmx1ZTtcbi8vICAgICAgICAgYm94LXNoYWRvdzogMCAzcHggMTBweCB0cmFuc3BhcmVudGl6ZShibGFjaywgMC44KSxcbi8vICAgICAgICAgICBpbnNldCAwIC0xcHggM3B4IHRyYW5zcGFyZW50aXplKGJsYWNrLCAwLjkpO1xuLy8gICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNnB4KTtcbi8vICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnM7XG4vLyAgICAgICB9XG4vLyAgICAgfVxuXG4vLyAgICAgJjpjaGVja2VkICsgZGl2IHtcbi8vICAgICAgIGJhY2tncm91bmQ6ICRibHVlO1xuLy8gICAgICAgYm94LXNoYWRvdzogJGdsb3ctc2hhZG93LCBpbnNldCAwIDJweCAycHggMnB4IHRyYW5zcGFyZW50aXplKGJsYWNrLCAwLjcpLFxuLy8gICAgICAgICBpbnNldCAwIDAgdHJhbnNwYXJlbnQ7XG5cbi8vICAgICAgICY6OmJlZm9yZSB7XG4vLyAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKCRfaGFuZGxlLXRyYW5zbGF0aW9uLCAtNnB4KTtcbi8vICAgICAgIH1cbi8vICAgICB9XG4vLyAgIH1cbi8vIH1cblxuLy8gaHIge1xuLy8gICBAZXh0ZW5kIC5pbnNldDtcbi8vICAgd2lkdGg6IDcyJTtcbi8vICAgaGVpZ2h0OiA4cHg7XG4vLyAgIGZsb2F0OiByaWdodDtcbi8vICAgYm9yZGVyOiAwO1xuLy8gfVxuXG4vLyBjb2RlLFxuLy8gcHJlIHtcbi8vICAgcGFkZGluZzogMC41ZW0gMWVtO1xuLy8gICBib3JkZXItcmFkaXVzOiA0cHg7XG4vLyAgIG92ZXJmbG93OiBhdXRvO1xuLy8gICBib3gtc2hhZG93OiAwIDVweCAzMHB4IDAgdHJhbnNwYXJlbnRpemUoYmxhY2ssIDAuOTUpO1xuLy8gfVxuXG4vLyBjb2RlIHtcbi8vICAgYmFja2dyb3VuZDogI2U2ZTZlNjtcbi8vIH1cblxuLy8gcHJlIHtcbi8vICAgYmFja2dyb3VuZDogd2hpdGU7XG4vLyAgIG1hcmdpbjogNGVtIDA7XG4vLyB9XG5cbi8vIGNvZGUsXG4vLyBwcmUge1xuLy8gICAmLFxuLy8gICAmICoge1xuLy8gICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuLy8gICAgIGxpbmUtaGVpZ2h0OiAyZW07XG4vLyAgICAgY3Vyc29yOiBhdXRvO1xuLy8gICAgIHVzZXItc2VsZWN0OiB0ZXh0O1xuLy8gICAgIC13ZWJraXQtdG91Y2gtY2FsbG91dDogdGV4dDtcbi8vICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiB0ZXh0O1xuLy8gICAgIC1raHRtbC11c2VyLXNlbGVjdDogdGV4dDtcbi8vICAgICAtbW96LXVzZXItc2VsZWN0OiB0ZXh0O1xuLy8gICAgIC1tcy11c2VyLXNlbGVjdDogdGV4dDtcbi8vICAgfVxuLy8gfVxuXG4vLyBibG9ja3F1b3RlIHtcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4vLyAgIHBhZGRpbmc6IDAuNWVtIDFlbTtcbi8vICAgYm9yZGVyLXJhZGl1czogNHB4O1xuLy8gICBib3gtc2hhZG93OiAwIDVweCAzMHB4IDAgdHJhbnNwYXJlbnRpemUoYmxhY2ssIDAuOTUpO1xuLy8gICBib3JkZXItbGVmdDogNnB4IHNvbGlkICRibHVlO1xuLy8gfVxuIiwiQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdDYXZlYXQnO1xuICAgIHNyYzogdXJsKCcuLi8uLi9mb250cy9Cb2xkL0NhdmVhdC1Cb2xkLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxuICAgICAgICB1cmwoJy4uLy4uL2ZvbnRzL0JvbGQvQ2F2ZWF0LUJvbGQud29mZicpIGZvcm1hdCgnd29mZicpO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LWRpc3BsYXk6IHN3YXA7XG59XG5cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnQ2F2ZWF0JztcbiAgICBzcmM6IHVybCgnLi4vLi4vZm9udHMvUmVndWxhci9DYXZlYXQtUmVndWxhci53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcbiAgICAgICAgdXJsKCcuLi8uLi9mb250cy9SZWd1bGFyL0NhdmVhdC1SZWd1bGFyLndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LWRpc3BsYXk6IHN3YXA7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ0ZpZ3VyaW5lU3ltYm9sVDEnO1xuICBzcmM6IHVybCgnLi4vLi4vZm9udHMvM3JkIFBhcnR5L0NoZXNzVmFyaWFudHMvRmlndXJpbmVTeW1ib2xUMUJvbGQud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXG4gICAgICB1cmwoJy4uLy4uL2ZvbnRzLzNyZCBQYXJ0eS9DaGVzc1ZhcmlhbnRzL0ZpZ3VyaW5lU3ltYm9sVDFCb2xkLndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdGaWd1cmluZVN5bWJvbFQxJztcbiAgc3JjOiB1cmwoJy4uLy4uL2ZvbnRzLzNyZCBQYXJ0eS9DaGVzc1ZhcmlhbnRzL0ZpZ3VyaW5lU3ltYm9sVDEud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXG4gICAgICB1cmwoJy4uLy4uL2ZvbnRzLzNyZCBQYXJ0eS9DaGVzc1ZhcmlhbnRzL0ZpZ3VyaW5lU3ltYm9sVDEud29mZicpIGZvcm1hdCgnd29mZicpO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbn1cblxuIiwiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkNhdmVhdFwiO1xuICBzcmM6IHVybChcIi4uLy4uL2ZvbnRzL0JvbGQvQ2F2ZWF0LUJvbGQud29mZjJcIikgZm9ybWF0KFwid29mZjJcIiksIHVybChcIi4uLy4uL2ZvbnRzL0JvbGQvQ2F2ZWF0LUJvbGQud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiQ2F2ZWF0XCI7XG4gIHNyYzogdXJsKFwiLi4vLi4vZm9udHMvUmVndWxhci9DYXZlYXQtUmVndWxhci53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKSwgdXJsKFwiLi4vLi4vZm9udHMvUmVndWxhci9DYXZlYXQtUmVndWxhci53b2ZmXCIpIGZvcm1hdChcIndvZmZcIik7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkZpZ3VyaW5lU3ltYm9sVDFcIjtcbiAgc3JjOiB1cmwoXCIuLi8uLi9mb250cy8zcmQgUGFydHkvQ2hlc3NWYXJpYW50cy9GaWd1cmluZVN5bWJvbFQxQm9sZC53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKSwgdXJsKFwiLi4vLi4vZm9udHMvM3JkIFBhcnR5L0NoZXNzVmFyaWFudHMvRmlndXJpbmVTeW1ib2xUMUJvbGQud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiRmlndXJpbmVTeW1ib2xUMVwiO1xuICBzcmM6IHVybChcIi4uLy4uL2ZvbnRzLzNyZCBQYXJ0eS9DaGVzc1ZhcmlhbnRzL0ZpZ3VyaW5lU3ltYm9sVDEud29mZjJcIikgZm9ybWF0KFwid29mZjJcIiksIHVybChcIi4uLy4uL2ZvbnRzLzNyZCBQYXJ0eS9DaGVzc1ZhcmlhbnRzL0ZpZ3VyaW5lU3ltYm9sVDEud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbn1cbi8qKioqKioqKioqKioqKioqKioqIE1lbnUgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIENvbnRhaW5lciBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBDb250YWluZXIgVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgQ29udGFpbmVyIFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIEhpZ2hsaWdodCBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBBbm5vdGF0aW9uIFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIFZhcmlhdGlvbiBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBQbHkgVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqKiBDb250cm9sIENvbG9ycyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKiogQm9hcmQgQ29sb3JzICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbjpyb290IHtcbiAgLS1iZy1jb2xvcjogI2YyZjNmNztcbiAgLS1mZy1jb2xvcjogIzM4M2E0MTtcbiAgLS1yZWQ6ICNlNDMwMzA7XG4gIC0tZ3JlZW46ICMxOWExODc7XG4gIC0tYmx1ZTogIzM2N2JmMDtcbiAgLS1kYXJrLWJsdWU6ICMyNjVhYjE7XG4gIC0tbWFyb29uOiAjYjgxNzRjO1xuICAtLXB1cnBsZTogIzhjNDJhYjtcbn1cblxuLnNldHRpbmdzLWJhY2tncm91bmQge1xuICB3aWR0aDogOTglO1xuICBoZWlnaHQ6IDk4JTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwLjc1JTtcbiAgdG9wOiAxJTtcbiAgei1pbmRleDogMTAwMDtcbiAgbWluLWhlaWdodDogMzgwcHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLW1lQmFja2dyb3VuZCk7XG4gIGJvcmRlcjogd2hpdGUgMnB4IHNvbGlkO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG59XG5cbmgzIHtcbiAgY29sb3I6IHZhcigtLWdzVGV4dENvbG9yKTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDZweDtcbiAgbGVmdDogMTZweDtcbiAgZm9udC1zaXplOiAyOHB4O1xufVxuXG4ubWVudS1jb250ZW50IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDg4cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDg4cHgpO1xuICBtYXJnaW4tYm90dG9tOiAxcHg7XG4gIG1hcmdpbi1yaWdodDogMXB4O1xuICBsZWZ0OiAwcHg7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuXG4uc2V0dGluZ3Mge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAycHg7XG4gIHRvcDogMnB4O1xuICB3aWR0aDogNDglO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbjo6bmctZGVlcCBtYXQtdGFiLWdyb3VwIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgdG9wOiAzOHB4O1xufVxuOjpuZy1kZWVwIC5tYXQtcmlwcGxlLm1hdC10YWItbGFiZWwubWF0LWZvY3VzLWluZGljYXRvci5tYXQtdGFiLWxhYmVsLWFjdGl2ZSB7XG4gIGZvbnQtc2l6ZTogMjZweDtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxMzEzMTQ7XG59XG46Om5nLWRlZXAgLm1hdC1yaXBwbGUubWF0LXRhYi1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMjZweDtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tbGVmdDogOHB4O1xufVxuOjpuZy1kZWVwIC5tYXQtdGFiLWJvZHktY29udGVudC5uZy10bnMtYzEyMS0xLm5nLXRyaWdnZXIubmctdHJpZ2dlci10cmFuc2xhdGVUYWIge1xuICB0cmFuc2Zvcm06IG5vbmU7XG4gIGJvcmRlcjogd2hpdGUgMnB4IHNvbGlkO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIG1pbi1oZWlnaHQ6IDIwMHB4O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainMenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'main-menu',
                templateUrl: './main-menu.component.html',
                styleUrls: ['./main-menu.component.scss']
            }]
    }], function () { return [{ type: _services_colors_service__WEBPACK_IMPORTED_MODULE_7__["ColorService"] }, { type: _services_layout_service__WEBPACK_IMPORTED_MODULE_8__["LayoutService"] }, { type: _services_olga_service__WEBPACK_IMPORTED_MODULE_9__["OlgaService"] }]; }, { keymapMenu: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_keymap_menu_keymap_menu_component__WEBPACK_IMPORTED_MODULE_1__["KeymapMenuComponent"]]
        }], boardMenu: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_board_menu_board_menu_component__WEBPACK_IMPORTED_MODULE_2__["BoardMenuComponent"]]
        }], gamescoreMenu: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_gamescore_menu_gamescore_menu_component__WEBPACK_IMPORTED_MODULE_5__["GamescoreMenuComponent"]]
        }], generalMenu: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_general_menu_general_menu_component__WEBPACK_IMPORTED_MODULE_3__["GeneralMenuComponent"]]
        }], pgnMenu: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_pgn_menu_pgn_menu_component__WEBPACK_IMPORTED_MODULE_6__["PgnMenuComponent"]]
        }], themeMenu: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_themes_menu_themes_menu_component__WEBPACK_IMPORTED_MODULE_4__["ThemesMenuComponent"]]
        }] }); })();


/***/ }),

/***/ "./src/app/olga-menu/olga-menu.component.ts":
/*!**************************************************!*\
  !*** ./src/app/olga-menu/olga-menu.component.ts ***!
  \**************************************************/
/*! exports provided: OlgaMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OlgaMenuComponent", function() { return OlgaMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main-menu/main-menu.component */ "./src/app/olga-menu/main-menu/main-menu.component.ts");
/* harmony import */ var _score_item_menu_score_item_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./score-item-menu/score-item-menu.component */ "./src/app/olga-menu/score-item-menu/score-item-menu.component.ts");
/* harmony import */ var _services_olga_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/olga.service */ "./src/app/services/olga.service.ts");
/* harmony import */ var _services_layout_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/layout.service */ "./src/app/services/layout.service.ts");
/* harmony import */ var _services_colors_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/colors.service */ "./src/app/services/colors.service.ts");







// OLGAS Global Menu system
class OlgaMenuComponent {
    constructor(olga, layout, colors) {
        this.olga = olga;
        this.layout = layout;
        this.colors = colors;
        this.visible = false;
        this.settingsMenu = null;
        this.variationMenu = null;
        this.closeButton = null;
        this.overlay = null;
        this.size = { width: 0, height: 0 };
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        this.closeButton = document.getElementById('settings-close-' + this.olga.UUID);
        this.overlay = document.getElementById('settings-overlay-' + this.olga.UUID);
    }
    resize(width, height) {
        this.size = { width, height };
        if (this.settingsMenu) {
            this.settingsMenu.resize(this.size);
        }
    }
    open(type = _main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_1__["MenuType"].General) {
        if (this.closeButton && this.overlay) {
            this.closeButton.style.visibility = 'visible';
            this.overlay.style.visibility = 'visible';
            document.body.style.position = 'fixed';
            document.body.style.top = '-' + window.scrollY + 'px';
            document.body.style.overflowY = 'hidden';
        }
        if (type == _main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_1__["MenuType"].GameVariation) {
            return;
        }
        if (this.settingsMenu) {
            this.settingsMenu.open(type);
        }
    }
    openVariationMenu(data) {
        if (this.variationMenu) {
            this.variationMenu.resize(this.size);
            this.variationMenu.openAt(data);
        }
    }
    close() {
        if (this.closeButton && this.overlay) {
            this.closeButton.style.visibility = 'hidden';
            this.overlay.style.visibility = 'hidden';
            document.body.style.position = '';
            document.body.style.top = '';
            document.body.style.overflowY = 'auto';
        }
        if (this.settingsMenu) {
            this.settingsMenu.close();
        }
        this.layout.resizeLayout();
    }
}
OlgaMenuComponent.ɵfac = function OlgaMenuComponent_Factory(t) { return new (t || OlgaMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_olga_service__WEBPACK_IMPORTED_MODULE_3__["OlgaService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_layout_service__WEBPACK_IMPORTED_MODULE_4__["LayoutService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_colors_service__WEBPACK_IMPORTED_MODULE_5__["ColorService"])); };
OlgaMenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OlgaMenuComponent, selectors: [["olga-menu"]], viewQuery: function OlgaMenuComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_1__["MainMenuComponent"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_score_item_menu_score_item_menu_component__WEBPACK_IMPORTED_MODULE_2__["ScoreItemMenu"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.settingsMenu = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.variationMenu = _t.first);
    } }, decls: 7, vars: 3, consts: [[1, "settings-container", 3, "id"], ["mat-button-raised", "", 1, "close-button", 3, "id", "click"], [1, "gs-menu"], ["scoreItemMenu", ""], [3, "id"], ["settingsMenuComponent", ""]], template: function OlgaMenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OlgaMenuComponent_Template_button_click_1_listener() { return ctx.layout.closeSettings(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "X");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "score-item-menu", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "main-menu", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "settings-overlay-", ctx.olga.UUID, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "settings-close-", ctx.olga.UUID, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "settings-menu-", ctx.olga.UUID, "");
    } }, styles: ["@font-face {\n  font-family: \"Caveat\";\n  src: url('Caveat-Bold.woff2') format(\"woff2\"), url('Caveat-Bold.woff') format(\"woff\");\n  font-weight: bold;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"Caveat\";\n  src: url('Caveat-Regular.woff2') format(\"woff2\"), url('Caveat-Regular.woff') format(\"woff\");\n  font-weight: 600;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"FigurineSymbolT1\";\n  src: url('FigurineSymbolT1Bold.woff2') format(\"woff2\"), url('FigurineSymbolT1Bold.woff') format(\"woff\");\n  font-weight: bold;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"FigurineSymbolT1\";\n  src: url('FigurineSymbolT1.woff2') format(\"woff2\"), url('FigurineSymbolT1.woff') format(\"woff\");\n  font-weight: 600;\n  font-style: normal;\n  font-display: swap;\n}\n\n\n\n\n\n\n\n\n\n\n[_ngcontent-%COMP%]:root {\n  --bg-color: #f2f3f7;\n  --fg-color: #383a41;\n  --red: #e43030;\n  --green: #19a187;\n  --blue: #367bf0;\n  --dark-blue: #265ab1;\n  --maroon: #b8174c;\n  --purple: #8c42ab;\n}\n.settings-container[_ngcontent-%COMP%] {\n  color: black;\n  opacity: 1;\n  position: absolute;\n  top: 0px;\n  bottom: 0px;\n  left: 0px;\n  right: 0px;\n  z-index: 999;\n  background: #100c0ce3;\n}\nmain-menu[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0px;\n  bottom: 0px;\n  left: 0px;\n  right: 0px;\n  background: #100c0ce3;\n  z-index: 1000;\n  overflow-y: auto;\n  visibility: hidden;\n}\nscore-item-menu[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0px;\n  bottom: 0px;\n  left: 0px;\n  right: 0px;\n  background: #100c0ce3;\n  z-index: 1000;\n  visibility: hidden;\n}\n.close-button[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 6px;\n  top: 6px;\n  color: white;\n  background-color: var(--boardBGDark);\n  border-radius: 4px;\n  width: 44px;\n  height: 44px;\n  z-index: 1500;\n  border: white 1px solid;\n}\n  mat-tab-group {\n  position: absolute;\n  width: 100%;\n  top: 38px;\n}\n  .mat-ripple.mat-tab-label.mat-focus-indicator.mat-tab-label-active {\n  font-size: 26px;\n  color: white;\n  border-radius: 2px;\n  background-color: #131314;\n}\n  .mat-ripple.mat-tab-label {\n  font-size: 26px;\n  color: white;\n  margin-left: 8px;\n}\n  .mat-tab-body-content.ng-tns-c121-1.ng-trigger.ng-trigger-translateTab {\n  transform: none;\n  border: white 2px solid;\n  border-radius: 8px;\n  min-height: 200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMuc2NzcyIsInNyYy9hc3NldHMvc2Nzcy9tb2R1bGVzL19mb250cy5zY3NzIiwic3JjL2FwcC9vbGdhLW1lbnUvb2xnYS1tZW51LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhFQUFBO0FDQUE7RUFDSSxxQkFBQTtFQUNBLHFGQUFBO0VBRUEsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDQ0o7QURFQTtFQUNJLHFCQUFBO0VBQ0EsMkZBQUE7RUFFQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNESjtBRElBO0VBQ0UsK0JBQUE7RUFDQSx1R0FBQTtFQUVBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0hGO0FETUE7RUFDRSwrQkFBQTtFQUNBLCtGQUFBO0VBRUEsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDTEY7QUZhQSwrRUFBQTtBQUdBLCtFQUFBO0FBUUEsK0VBQUE7QUFNQSwrRUFBQTtBQU1BLCtFQUFBO0FBTUEsZ0ZBQUE7QUFLQSwrRUFBQTtBQUtBLHlFQUFBO0FBS0EseUVBQUE7QUFJQSx1RUFBQTtBQWdCQTtFQUNFLG1CQUFBO0VBQ0EsbUJBQUE7RUFFQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FFbEVGO0FBL0NBO0VBQ0ksWUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7QUFrREo7QUE5Q0E7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxxQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBaURKO0FBL0NBO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUFrREo7QUEvQ0E7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLG9DRmlEVTtFRWhEVixrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FBa0RKO0FBOUNJO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtBQWlEUjtBQS9DSTtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQWlEUjtBQS9DSTtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFpRFI7QUEvQ0k7RUFDSSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBaURSIiwiZmlsZSI6InNyYy9hcHAvb2xnYS1tZW51L29sZ2EtbWVudS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cblxuQGltcG9ydCBcIi4vYXNzZXRzL3Njc3MvbW9kdWxlcy9fZm9udHMuc2Nzc1wiO1xuJGdhbWVzY29yZS1mYW1pbHk6IFwiRmlndXJpbmVTeW1ib2xUMVwiO1xuJGdhbWVzY29yZS1oaWdobGlnaHQ6ICM1ODU4NThmZjtcbiRnYW1lc2NvcmUtZm9yZWdyb3VuZDogd2hpdGU7XG5cbiRyZWQ6ICNlNDMwMzA7XG4kZ3JlZW46ICMxOWExODc7XG4kbGlnaHQtYmx1ZTogIzAwZmZmZmZmO1xuJGJsdWU6ICMzNjdiZjA7XG4kZGFyay1ibHVlOiAjMjY1YWIxO1xuJG1hcm9vbjogI2I4MTc0YztcbiRwdXJwbGU6ICM4YzQyYWI7XG5cbi8vIE1haW4gT0xHQSBDb2xvciBFbGVtZW50IFZhcmlhYmxlc1xuJHRleHRDb2xvcjogdmFyKC0tdGV4dENvbG9yKTsgLy8gTWFpbiBUZXh0IENvbG9yXG4kdGV4dENvbG9yQXR0ZW50aW9uOiB2YXIoLS10ZXh0Q29sb3JBdHRlbnRpb24pOyAvLyBBdHRlbnRpb24gdGV4dFxuJHRleHRDb2xvclJlbW92ZTogdmFyKC0tdGV4dENvbG9yUmVtb3ZlKTsgLy8gUmVtb3ZlL0RlbGV0ZS9DbG9zZVxuJHRleHRDb2xvckFkZDogdmFyKC0tdGV4dENvbG9yQWRkKTsgLy8gQWRkL0NyZWF0ZS9PcGVuXG4kdGV4dENvbG9yQWN0aXZlOiB2YXIoLS10ZXh0Q29sb3JBY3RpdmUpOyAvLyBBZGQvQ3JlYXRlL09wZW5cbiRiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kKTsgLy8gTWFpbiBiYWNrZ3JvdW5kIENvbG9yXG4kYmdDb250YWluZXI6IHZhcigtLWJnQ29udGFpbmVyKTsgLy8gYmFja2dyb3VuZCBvZiBDb250YWluZXJzXG4kYmdNZW51OiB2YXIoLS1iZ01lbnUpOyAvLyBiYWNrZ3JvdW5kIG9mIE1lbnVzXG4kYmdJdGVtOiB2YXIoLS1iZ0l0ZW0pOyAvLyBiYWNrZ3JvdW5kIG9mIEl0ZW1zXG5cbi8vIENvbnRleHQgTWVudVxuJGJnQ29udGV4dDogdmFyKC0tYmdDb250ZXh0KTsgLy8gYmFja2dyb3VuZCBvZiBDb250ZXh0IE1lbnVcbiR0ZXh0Q29sb3JDb250ZXh0OiB2YXIoLS10ZXh0Q29sb3JDb250ZXh0KTsgLy8gdGV4dCBjb2xvciBDb250ZXh0IE1lbnVcbiRib3JkZXJDb250ZXh0OiB2YXIoLS1ib3JkZXJDb250ZXh0KTsgLy8gYm9yZGVyIENvbnRleHQgTWVudVxuJG92ZXJsYXlDb250ZXh0QmFja2dyb3VuZDogdmFyKFxuICAtLW92ZXJsYXlDb250ZXh0QmFja2dyb3VuZFxuKTsgLy8gQ29udGV4dCBNZW51IE92ZXJsYXkgYmFja2dyb3VuZCBtYWluXG4kb3ZlcmxheUNvbnRleHRCYWNrZ3JvdW5kR3JhZGllbnQ6IHZhcihcbiAgLS1vdmVybGF5Q29udGV4dEJhY2tncm91bmRHcmFkaWVudFxuKTsgLy8gQ29udGV4dCBNZW51IGJhY2tncm91bmQgZ3JhZGllbnRcblxuJGl0ZW06IHZhcigtLWl0ZW0pO1xuJGl0ZW0tY29udHJhc3Q6IHZhcigtLWl0ZW0tY29udHJhc3QpO1xuJGl0ZW0tYmc6IHZhcigtLWl0ZW0tYmcpO1xuXG4vKioqKioqKioqKioqKioqKioqKiBNZW51ICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuJG1lQmFja2dyb3VuZDogdmFyKC0tbWVCYWNrZ3JvdW5kKTtcblxuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBDb250YWluZXIgVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiRnc1RleHRDb2xvcjogdmFyKC0tZ3NUZXh0Q29sb3IpOyAvLyBUZXh0IGNvbG9yIGZvciBnYW1lIHNjb3JlXG4kZ3NCYWNrZ3JvdW5kOiB2YXIoLS1nc0JhY2tncm91bmQpOyAvLyBiYWNrZ3JvdW5kIG9mIENvbnRhaW5lcnNcbiRnc0xpc3RCYWNrZ3JvdW5kOiB2YXIoLS1nc0xpc3RCYWNrZ3JvdW5kKTsgLy8gbGlzdCBiYWNrZ3JvdW5kIG9mIGdhbWUgc2NvcmVcbiRnc0JvcmRlcjogdmFyKC0tZ3NCb3JkZXIpOyAvLyBiYWNrZ3JvdW5kIG9mIE1lbnVzXG4kZ3NUZXh0U2l6ZTogdmFyKC0tZ3NUZXh0U2l6ZSk7IC8vIGJhY2tncm91bmQgb2YgTWVudXNcbiRnc0ZvbnRGYW1pbHk6IHZhcigtLWdzRm9udEZhbWlseSk7IC8vIHNjb3JlIGZvbnRcblxuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBDb250YWluZXIgVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiRnc1RleHRDb2xvck1XOiB2YXIoLS1nc1RleHRDb2xvck1XKTsgLy8gVGV4dCBjb2xvciBmb3IgZ2FtZSBzY29yZVxuJGdzQmFja2dyb3VuZE1XOiB2YXIoLS1nc0JhY2tncm91bmRNVyk7IC8vIGJhY2tncm91bmQgb2YgQ29udGFpbmVyc1xuJGdzQm9yZGVyTVc6IHZhcigtLWdzQm9yZGVyTVcpOyAvLyBiYWNrZ3JvdW5kIG9mIE1lbnVzXG4kZ3NUZXh0U2l6ZU1XOiB2YXIoLS1nc1RleHRTaXplTVcpOyAvLyBiYWNrZ3JvdW5kIG9mIE1lbnVzXG5cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgQ29udGFpbmVyIFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4kZ3NUZXh0Q29sb3JNQjogdmFyKC0tZ3NUZXh0Q29sb3JNQik7IC8vIFRleHQgY29sb3IgZm9yIGdhbWUgc2NvcmVcbiRnc0JhY2tncm91bmRNQjogdmFyKC0tZ3NCYWNrZ3JvdW5kTUIpOyAvLyBiYWNrZ3JvdW5kIG9mIENvbnRhaW5lcnNcbiRnc0JvcmRlck1COiB2YXIoLS1nc0JvcmRlck1CKTsgLy8gYmFja2dyb3VuZCBvZiBNZW51c1xuJGdzVGV4dFNpemVNQjogdmFyKC0tZ3NUZXh0U2l6ZU1CKTsgLy8gYmFja2dyb3VuZCBvZiBNZW51c1xuXG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIEhpZ2hsaWdodCBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuJGdzVGV4dENvbG9ySEc6IHZhcigtLWdzVGV4dENvbG9ySEcpOyAvLyBUZXh0IGNvbG9yIGZvciBoaWdobGlnaHRcbiRnc0Fubm90YXRpb25Db2xvckhHOiB2YXIoLS1nc0Fubm90YXRpb25Db2xvckhHKTsgLy8gQW5ub3RhdGlvbi9Db21tZW50IGNvbG9yIGZvciBoaWdobGlnaHRcbiRnc0JhY2tncm91bmRIRzogdmFyKC0tZ3NCYWNrZ3JvdW5kSEcpOyAvLyBiYWNrZ3JvdW5kIGZvciBoaWdobGlnaHRcbiRnc0JvcmRlckhHOiB2YXIoLS1nc0JvcmRlckhHKTsgLy8gYm9yZGVyIGZvciBoaWdobGlnaHRcblxuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBBbm5vdGF0aW9uIFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4kZ3NUZXh0Q29sb3JBTjogdmFyKC0tZ3NUZXh0Q29sb3JBTik7IC8vIFRleHQgY29sb3IgZm9yIGhpZ2hsaWdodFxuJGdzQmFja2dyb3VuZEFOOiB2YXIoLS1nc0JhY2tncm91bmRBTik7IC8vIGJhY2tncm91bmQgZm9yIGhpZ2hsaWdodFxuJGdzQm9yZGVyQU46IHZhcigtLWdzQm9yZGVyQU4pOyAvLyBib3JkZXIgZm9yIGhpZ2hsaWdodFxuXG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIFZhcmlhdGlvbiBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuJGdzVGV4dENvbG9yVkE6IHZhcigtLWdzVGV4dENvbG9yVkEpOyAvLyBUZXh0IGNvbG9yIGZvciBoaWdobGlnaHRcbiRnc0JhY2tncm91bmRWQTogdmFyKC0tZ3NCYWNrZ3JvdW5kVkEpOyAvLyBiYWNrZ3JvdW5kIGZvciBoaWdobGlnaHRcbiRnc0JvcmRlclZBOiB2YXIoLS1nc0JvcmRlclZBKTsgLy8gYm9yZGVyIGZvciBoaWdobGlnaHRcblxuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBQbHkgVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiRnc1RleHRDb2xvclBDOiB2YXIoLS1nc1RleHRDb2xvclBDKTsgLy8gVGV4dCBjb2xvciBmb3IgZ2FtZSBzY29yZSBwbHlcbiRnc0JhY2tncm91bmRQQzogdmFyKC0tZ3NCYWNrZ3JvdW5kUEMpOyAvLyBiYWNrZ3JvdW5kIGZvciBnYW1lIHNjb3JlIHBseVxuJGdzQm9yZGVyUEM6IHZhcigtLWdzQm9yZGVyUEMpOyAvLyBib3JkZXIgZm9yIGdhbWUgc2NvcmUgcGx5XG5cbi8qKioqKioqKioqKioqKioqKioqKiBDb250cm9sIENvbG9ycyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4kY3NCYWNrZ3JvdW5kOiB2YXIoLS1jc0JhY2tncm91bmQpOyAvLyBiYWNrZ3JvdW5kIGZvciBjb250cm9sc1xuJGNzQ29sb3I6IHZhcigtLWNzQ29sb3IpOyAvLyBjb250cm9scyBjb2xvciAoZm9yZWdyb3VuZClcblxuLyoqKioqKioqKioqKioqKioqKioqIEJvYXJkIENvbG9ycyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4kYm9hcmRCR0Rhcms6IHZhcigtLWJvYXJkQkdEYXJrKTsgLy8gYm9hcmQgZGFyayB0aWxlXG4kYm9hcmRCR0xpZ2h0OiB2YXIoLS1ib2FyZEJHTGlnaHQpOyAvLyBib2FyZCBsaWdodCB0aWxlXG4kYm9hcmRMYWJlbExpZ2h0OiB2YXIoLS1ib2FyZExhYmVsTGlnaHQpOyAvLyBib2FyZCBsaWdodCBsYWJlbFxuJGJvYXJkTGFiZWxEYXJrOiB2YXIoLS1ib2FyZExhYmVsRGFyayk7IC8vIGJvYXJkIGRhcmsgbGFiZWxcblxuLy8gR2VuZXJhbCBzdHVmZlxuJHRleHQtY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xuJGJnLW91dGVyOiB2YXIoLS1iZy1vdXRlcik7XG4kYmctaW5uZXI6IHZhcigtLWJnLWlubmVyKTtcblxuJGJnLWNvbG9yOiAjZjJmM2Y3O1xuJGZnLWNvbG9yOiAjMzgzYTQxO1xuXG4kZ2xvdy1zaGFkb3c6IDAgMCAwLjVlbSB0cmFuc3BhcmVudGl6ZSgkYmx1ZSwgMC4zKTtcblxuOnJvb3Qge1xuICAtLWJnLWNvbG9yOiAjeyRiZy1jb2xvcn07XG4gIC0tZmctY29sb3I6ICN7JGZnLWNvbG9yfTtcblxuICAtLXJlZDogI3skcmVkfTtcbiAgLS1ncmVlbjogI3skZ3JlZW59O1xuICAtLWJsdWU6ICN7JGJsdWV9O1xuICAtLWRhcmstYmx1ZTogI3skZGFyay1ibHVlfTtcbiAgLS1tYXJvb246ICN7JG1hcm9vbn07XG4gIC0tcHVycGxlOiAjeyRwdXJwbGV9O1xufVxuXG4vLyA6Oi1tb3otZm9jdXMtaW5uZXIsXG4vLyA6LW1vei1mb2N1c3Jpbmcge1xuLy8gICBib3JkZXI6IDA7XG4vLyAgIGNvbG9yOiB0cmFuc3BhcmVudDtcbi8vICAgdGV4dC1zaGFkb3c6IDAgMCAwICRmZy1jb2xvcjtcbi8vIH1cblxuLy8gOjpzZWxlY3Rpb24sXG4vLyA6Oi1tb3otc2VsZWN0aW9uIHtcbi8vICAgY29sb3I6IHdoaXRlO1xuLy8gICBiYWNrZ3JvdW5kOiBibGFjaztcbi8vIH1cblxuLy8gKiB7XG4vLyAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4vLyAgIG91dGxpbmU6IG5vbmU7XG4vLyAgIHVzZXItc2VsZWN0OiBub25lO1xuLy8gICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XG4vLyAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4vLyAgIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTtcbi8vICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbi8vICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuLy8gICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4vLyAgIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbi8vICAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApICFpbXBvcnRhbnQ7XG4vLyAgIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcbi8vICAgY3Vyc29yOiBkZWZhdWx0O1xuLy8gICBsZXR0ZXItc3BhY2luZzogMDtcbi8vIH1cblxuLy8gLnNlbGVjdGFibGUsXG4vLyAuc2VsZWN0YWJsZSAqIHtcbi8vICAgY3Vyc29yOiBhdXRvO1xuLy8gICB1c2VyLXNlbGVjdDogdGV4dDtcbi8vICAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiB0ZXh0O1xuLy8gICAtd2Via2l0LXVzZXItc2VsZWN0OiB0ZXh0O1xuLy8gICAta2h0bWwtdXNlci1zZWxlY3Q6IHRleHQ7XG4vLyAgIC1tb3otdXNlci1zZWxlY3Q6IHRleHQ7XG4vLyAgIC1tcy11c2VyLXNlbGVjdDogdGV4dDtcbi8vIH1cblxuLy8gaHRtbCxcbi8vIGJvZHkge1xuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmctY29sb3I7XG4vLyAgIGNvbG9yOiAkZmctY29sb3I7XG4vLyAgIG1hcmdpbjogMDtcbi8vICAgcGFkZGluZzogMDtcbi8vICAgZm9udC1zaXplOiAxMHB0O1xuLy8gICBoZWlnaHQ6IDEwMCU7XG4vLyAgIG92ZXJmbG93OiBhdXRvO1xuLy8gfVxuXG4vLyAud2l0aC1zaGFkb3cge1xuLy8gICBib3gtc2hhZG93OiA2cHggNnB4IDEwcHggdHJhbnNwYXJlbnRpemUoYmxhY2ssIDAuOSksIC02cHggLTZweCAxMHB4IHdoaXRlO1xuLy8gfVxuXG4vLyAub3V0c2V0IHtcbi8vICAgQGV4dGVuZCAud2l0aC1zaGFkb3c7XG5cbi8vICAgYm9yZGVyLXJhZGl1czogMTBweDtcbi8vICAgYmFja2dyb3VuZDogJGJnLWNvbG9yO1xuLy8gfVxuXG4vLyAuaW5zZXQge1xuLy8gICBib3JkZXItcmFkaXVzOiAxMHB4O1xuLy8gICBib3gtc2hhZG93OiAwIDAgdHJhbnNwYXJlbnQsIDAgMCB0cmFuc3BhcmVudCxcbi8vICAgICBpbnNldCAzcHggM3B4IDVweCB0cmFuc3BhcmVudGl6ZShibGFjaywgMC45KSwgaW5zZXQgLTNweCAtM3B4IDVweCB3aGl0ZTtcbi8vICAgYmFja2dyb3VuZDogbGlnaHRlbigkYmctY29sb3IsIDIlKTtcbi8vIH1cblxuLy8gLnBhcGVyIHtcbi8vICAgQGV4dGVuZCAub3V0c2V0O1xuLy8gICBwYWRkaW5nOiAxMHB4IDIwcHggMjBweDtcbi8vICAgbWFyZ2luLXRvcDogMjBweDtcbi8vICAgbWluLWhlaWdodDogMTAwcHg7XG4vLyAgIGZvbnQtc2l6ZTogMS4yZW07XG4vLyAgIGJhY2tncm91bmQ6ICRiZy1jb2xvcjtcbi8vIH1cblxuLy8gc2VjdGlvbixcbi8vIGFydGljbGUsXG4vLyAuc2VjdGlvbixcbi8vIC5hcnRpY2xlLFxuLy8gLnBhcGVyIHtcbi8vICAgbGluZS1oZWlnaHQ6IDJlbTtcbi8vICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuLy8gICB3b3JkLWJyZWFrOiBub3JtYWw7XG4vLyAgIGxpbmUtaGVpZ2h0OiAyZW07XG4vLyB9XG5cbi8vIGlucHV0W3R5cGU9XCJ0ZXh0XCJdLFxuLy8gaW5wdXRbdHlwZT1cInNlYXJjaFwiXSxcbi8vIGlucHV0W3R5cGU9XCJ0ZWxcIl0sXG4vLyBpbnB1dFt0eXBlPVwidXJsXCJdLFxuLy8gaW5wdXRbdHlwZT1cImVtYWlsXCJdLFxuLy8gaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJdLFxuLy8gaW5wdXRbdHlwZT1cImRhdGVcIl0sXG4vLyBpbnB1dFt0eXBlPVwibW9udGhcIl0sXG4vLyBpbnB1dFt0eXBlPVwid2Vla1wiXSxcbi8vIGlucHV0W3R5cGU9XCJ0aW1lXCJdLFxuLy8gaW5wdXRbdHlwZT1cIm51bWJlclwiXSxcbi8vIGlucHV0W3R5cGU9XCJjb2xvclwiXSxcbi8vIHNlbGVjdCxcbi8vIHRleHRhcmVhIHtcbi8vICAgYm9yZGVyOiAwO1xuLy8gICBiYWNrZ3JvdW5kOiAkYmctY29sb3I7XG4vLyAgIGNvbG9yOiAkZmctY29sb3I7XG4vLyAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4vLyAgIHBhZGRpbmc6IDAgMS4yNWVtO1xuLy8gICBsaW5lLWhlaWdodDogMS4yNWVtO1xuLy8gICBoZWlnaHQ6IDMuNWVtO1xuLy8gICBtYXJnaW46IDEwcHggMDtcbi8vICAgZm9udC1zaXplOiAxLjFyZW07XG4vLyAgIGN1cnNvcjogdGV4dDtcbi8vICAgdXNlci1zZWxlY3Q6IHRleHQ7XG4vLyAgIC13ZWJraXQtdG91Y2gtY2FsbG91dDogdGV4dDtcbi8vICAgLXdlYmtpdC11c2VyLXNlbGVjdDogdGV4dDtcbi8vICAgLWtodG1sLXVzZXItc2VsZWN0OiB0ZXh0O1xuLy8gICAtbW96LXVzZXItc2VsZWN0OiB0ZXh0O1xuLy8gICAtbXMtdXNlci1zZWxlY3Q6IHRleHQ7XG4vLyAgIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC4ycztcblxuLy8gICAmOm5vdChzZWxlY3QpIHtcbi8vICAgICBAZXh0ZW5kIC5pbnNldDtcblxuLy8gICAgICY6Zm9jdXMge1xuLy8gICAgICAgQGV4dGVuZCAub3V0c2V0O1xuLy8gICAgIH1cbi8vICAgfVxuLy8gfVxuXG4vLyB0ZXh0YXJlYSB7XG4vLyAgIGhlaWdodDogMzUwcHg7XG4vLyAgIHBhZGRpbmc6IDEuMjVlbTtcbi8vIH1cblxuLy8gc2VsZWN0IHtcbi8vICAgQGV4dGVuZCAub3V0c2V0O1xuXG4vLyAgIGN1cnNvcjogcG9pbnRlcjtcbi8vICAgYmFja2dyb3VuZDogdXJsKGRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjJaWEp6YVc5dVBTSXhMakVpSUhacFpYZENiM2c5SWpBZ01DQXhPU0F4T1NJZ2VHMXNibk05SW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTHpJd01EQXZjM1puSWo0OFp5QjBjbUZ1YzJadmNtMDlJbTFoZEhKcGVDZ3VNRE0wSURBZ01DQXVNRE0wSUMwMkxqZ2dNUzQzWlMwMUtTSWdjM1I1YkdVOUltWnBiR3c2SXpkaU4yVTRZeUkrUEhCaGRHZ2daRDBpYlRRNE1DQXpORFF0TWpFeExUSXhNbU10TVRZdE1UWXROREV0TVRZdE5UY2dNQzB4TmlBeE5pMHhOaUEwTWlBd0lEVTNiREl6T0NBeU16bGpPQzQwSURndU5TQXlNQ0F4TWlBek1TQXhNaUF4TVNBd0xqVTJJREl5TFRNdU1pQXpNUzB4TW13eU16Z3RNak01WXpFMkxURTJJREUyTFRReUlEQXROVGR6TFRReExURTJMVFUzSURCNklpQnpkSGxzWlQwaVptbHNiRG9qTjJJM1pUaGpJaTgrUEM5blBqd3ZjM1puUGdvPSlcbi8vICAgICBuby1yZXBlYXQgcmlnaHQgMWVtIGNlbnRlcjtcbi8vICAgYmFja2dyb3VuZC1zaXplOiAxLjJlbTtcbi8vICAgcGFkZGluZy1yaWdodDogM2VtO1xuLy8gfVxuXG4vLyBpbnB1dDo6cGxhY2Vob2xkZXIsXG4vLyB0ZXh0YXJlYTo6cGxhY2Vob2xkZXIge1xuLy8gICBvcGFjaXR5OiAxO1xuLy8gICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnM7XG4vLyAgIGNvbG9yOiBpbmhlcml0O1xuLy8gfVxuXG4vLyBpbnB1dDpmb2N1czo6cGxhY2Vob2xkZXIsXG4vLyB0ZXh0YXJlYTpmb2N1czo6cGxhY2Vob2xkZXIge1xuLy8gICBvcGFjaXR5OiAwLjI7XG4vLyB9XG5cbi8vIGlucHV0Oi1tcy1pbnB1dC1wbGFjZWhvbGRlcixcbi8vIHRleHRhcmVhOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4vLyAgIG9wYWNpdHk6IDE7XG4vLyAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycztcbi8vICAgY29sb3I6IGluaGVyaXQ7XG4vLyB9XG5cbi8vIGlucHV0OmZvY3VzOi1tcy1pbnB1dC1wbGFjZWhvbGRlcixcbi8vIHRleHRhcmVhOmZvY3VzOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4vLyAgIG9wYWNpdHk6IDAuMjtcbi8vIH1cblxuLy8gaW5wdXRbdHlwZT1cInNlYXJjaFwiXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbixcbi8vIGlucHV0W3R5cGU9XCJzZWFyY2hcIl06Oi13ZWJraXQtc2VhcmNoLWNhbmNlbC1idXR0b24sXG4vLyBpbnB1dFt0eXBlPVwic2VhcmNoXCJdOjotd2Via2l0LXNlYXJjaC1yZXN1bHRzLWJ1dHRvbixcbi8vIGlucHV0W3R5cGU9XCJzZWFyY2hcIl06Oi13ZWJraXQtc2VhcmNoLXJlc3VsdHMtZGVjb3JhdGlvbiB7XG4vLyAgIGRpc3BsYXk6IG5vbmU7XG4vLyB9XG5cbi8vIGJ1dHRvbixcbi8vIGlucHV0W3R5cGU9XCJidXR0b25cIl0sXG4vLyBpbnB1dFt0eXBlPVwic3VibWl0XCJdLFxuLy8gaW5wdXRbdHlwZT1cInJlc2V0XCJdIHtcbi8vICAgQGV4dGVuZCAub3V0c2V0O1xuXG4vLyAgIGJvcmRlcjogMDtcbi8vICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4vLyAgIHBhZGRpbmc6IDEwcHggMDtcbi8vICAgd2lkdGg6IDhlbTtcbi8vICAgdGV4dC1hbGlnbjogY2VudGVyO1xuLy8gICBjdXJzb3I6IHBvaW50ZXI7XG4vLyAgIGNvbG9yOiBpbmhlcml0O1xuLy8gICBmb250LXNpemU6IDEuMXJlbTtcbi8vICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYmFja2dyb3VuZC1jb2xvciwgYm94LXNoYWRvdztcbi8vICAgdHJhbnNpdGlvbi1kZWxheTogMC4ycztcbi8vICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4ycztcblxuLy8gICAmLmFjdGl2ZSxcbi8vICAgJjphY3RpdmUge1xuLy8gICAgIEBleHRlbmQgLmluc2V0O1xuXG4vLyAgICAgdHJhbnNpdGlvbi1kZWxheTogMHM7XG4vLyAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4xcztcbi8vICAgfVxuXG4vLyAgIEBlYWNoICRuYW1lLCAkY29sb3IgaW4gKFwicmVkXCI6ICRyZWQsIFwiZ3JlZW5cIjogJGdyZWVuLCBcImJsdWVcIjogJGJsdWUpIHtcbi8vICAgICBAYXQtcm9vdCAuI3skbmFtZX0tYnV0dG9uLFxuLy8gICAgICAgJi4jeyRuYW1lfS1idXR0b24ge1xuLy8gICAgICAgQGV4dGVuZCBidXR0b247XG5cbi8vICAgICAgICRfYmctaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsICRjb2xvciAzMCUsIGxpZ2h0ZW4oJGNvbG9yLCA2JSkgODAlKTtcblxuLy8gICAgICAgY29sb3I6IHdoaXRlO1xuLy8gICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4vLyAgICAgICB0ZXh0LXNoYWRvdzogMCAwLjFlbSAwLjFlbSB0cmFuc3BhcmVudGl6ZShibGFjaywgMC4zKTtcbi8vICAgICAgIGJhY2tncm91bmQ6ICRfYmctaW1hZ2U7XG4vLyAgICAgICBib3gtc2hhZG93OiAwIDAgMC41ZW0gdHJhbnNwYXJlbnRpemUoJGNvbG9yLCAwLjMpLCAwIDAgdHJhbnNwYXJlbnQsXG4vLyAgICAgICAgIGluc2V0IDAgLTVweCAwIHRyYW5zcGFyZW50aXplKGJsYWNrLCAwLjk1KSxcbi8vICAgICAgICAgaW5zZXQgMCAycHggMCB0cmFuc3BhcmVudGl6ZSh3aGl0ZSwgMC44KTtcbi8vICAgICAgIGJvcmRlci1yYWRpdXM6IDZweCA2cHggOHB4IDhweDtcbi8vICAgICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGJveC1zaGFkb3csIGJvcmRlci1yYWRpdXM7XG5cbi8vICAgICAgICYuYWN0aXZlLFxuLy8gICAgICAgJjphY3RpdmUge1xuLy8gICAgICAgICBiYWNrZ3JvdW5kOiAkX2JnLWltYWdlO1xuLy8gICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4vLyAgICAgICAgIGJveC1zaGFkb3c6IDAgMCB0cmFuc3BhcmVudCwgMCAwIHRyYW5zcGFyZW50LFxuLy8gICAgICAgICAgIGluc2V0IDAgMnB4IDVweCAycHggdHJhbnNwYXJlbnRpemUoYmxhY2ssIDAuOCk7XG4vLyAgICAgICB9XG4vLyAgICAgfVxuLy8gICB9XG4vLyB9XG5cbi8vIGxhYmVsIHtcbi8vICAgJixcbi8vICAgJiAqIHtcbi8vICAgICBjdXJzb3I6IHBvaW50ZXI7XG4vLyAgIH1cblxuLy8gICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4vLyAgIHBhZGRpbmc6IDAuNTZlbSAwO1xuLy8gfVxuXG4vLyBhIHtcbi8vICAgJixcbi8vICAgJjpsaW5rLFxuLy8gICAmOnZpc2l0ZWQsXG4vLyAgICY6aG92ZXIgJjphY3RpdmUge1xuLy8gICAgICYsXG4vLyAgICAgJiAqIHtcbi8vICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbi8vICAgICB9XG5cbi8vICAgICBmb250LXdlaWdodDogYm9sZDtcbi8vICAgICBjb2xvcjogJGJsdWU7XG4vLyAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4vLyAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuLy8gICB9XG4vLyB9XG5cbi8vIGgxLFxuLy8gaDIsXG4vLyBoMyxcbi8vIGg0LFxuLy8gaDUsXG4vLyBoNiB7XG4vLyAgIGxpbmUtaGVpZ2h0OiAxLjVlbTtcbi8vIH1cblxuLy8gaDEge1xuLy8gICBmb250LXNpemU6IDRlbTtcbi8vICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4vLyAgIG1hcmdpbjogMC43ZW0gMDtcbi8vIH1cblxuLy8gaDIge1xuLy8gICBmb250LXNpemU6IDNlbTtcbi8vICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4vLyAgIG1hcmdpbjogMC44ZW0gMDtcbi8vIH1cblxuLy8gaDMge1xuLy8gICBmb250LXNpemU6IDIuNWVtO1xuLy8gICBmb250LXdlaWdodDogbGlnaHRlcjtcbi8vICAgbWFyZ2luOiAwLjllbSAwO1xuLy8gfVxuXG4vLyBoNCB7XG4vLyAgIGZvbnQtc2l6ZTogMmVtO1xuLy8gICBmb250LXdlaWdodDogbGlnaHRlcjtcbi8vICAgbWFyZ2luOiAxZW0gMDtcbi8vIH1cblxuLy8gaDUge1xuLy8gICBtYXJnaW46IDAuNWVtIDA7XG4vLyAgIGZvbnQtc2l6ZTogMS4yZW07XG4vLyAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4vLyB9XG5cbi8vIGg2IHtcbi8vICAgbWFyZ2luOiAxZW0gMCAxZW0gMS40ZW07XG4vLyAgIGZvbnQtc2l6ZTogMWVtO1xuLy8gICBmb250LXdlaWdodDogYm9sZDtcbi8vIH1cblxuLy8gaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdLFxuLy8gaW5wdXRbdHlwZT1cInJhZGlvXCJdIHtcbi8vICAgJF9ib3JkZXItd2lkdGg6IDAuMTVlbTtcbi8vICAgJF9ib3gtc2hhZG93OiAycHggMnB4IDNweCB0cmFuc3BhcmVudGl6ZShibGFjaywgMC44KSwgLTJweCAtMnB4IDNweCB3aGl0ZSxcbi8vICAgICBpbnNldCAxcHggMXB4IDJweCB0cmFuc3BhcmVudGl6ZShibGFjaywgMC44KSwgaW5zZXQgLTFweCAtMXB4IDJweCB3aGl0ZTtcbi8vICAgZm9udC1zaXplOiAxZW07XG4vLyAgIGN1cnNvcjogcG9pbnRlcjtcbi8vICAgaGVpZ2h0OiAxLjJlbTtcbi8vICAgd2lkdGg6IDEuMmVtO1xuLy8gICBtYXJnaW46IDAgMC4zZW07XG4vLyAgIGJveC1zaGFkb3c6ICRfYm94LXNoYWRvdztcbi8vICAgYm9yZGVyOiAkX2JvcmRlci13aWR0aCBzb2xpZCAkYmctY29sb3I7XG4vLyAgIHZlcnRpY2FsLWFsaWduOiB0ZXh0LWJvdHRvbTtcbi8vICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYmFja2dyb3VuZCwgYm94LXNoYWRvdztcbi8vICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4ycztcblxuLy8gICAmOmFjdGl2ZSB7XG4vLyAgICAgYm94LXNoYWRvdzogJF9ib3gtc2hhZG93LCBpbnNldCAwIDAuMWVtIDAuMjVlbSB0cmFuc3BhcmVudGl6ZShibGFjaywgMC44KTtcbi8vICAgfVxuXG4vLyAgICY6Y2hlY2tlZCB7XG4vLyAgICAgYm9yZGVyLXdpZHRoOiAwLjFlbTtcbi8vICAgICBib3JkZXItY29sb3I6IGRhcmtlbigkYmx1ZSwgMTAlKTtcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmx1ZTtcbi8vICAgfVxuLy8gfVxuXG4vLyBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0ge1xuLy8gICBib3JkZXItcmFkaXVzOiAyNSU7XG5cbi8vICAgJjpjaGVja2VkIHtcbi8vICAgICBib3gtc2hhZG93OiAkZ2xvdy1zaGFkb3csIGluc2V0IDAgLTAuMWVtIDAgdHJhbnNwYXJlbnRpemUoYmxhY2ssIDAuOCksXG4vLyAgICAgICBpbnNldCAwIDAuMWVtIDAuMWVtIHRyYW5zcGFyZW50aXplKHdoaXRlLCAwLjgpO1xuLy8gICB9XG4vLyB9XG5cbi8vIGlucHV0W3R5cGU9XCJyYWRpb1wiXSB7XG4vLyAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG5cbi8vICAgJjpjaGVja2VkIHtcbi8vICAgICBib3gtc2hhZG93OiAkZ2xvdy1zaGFkb3c7XG4vLyAgICAgYm94LXNoYWRvdzogJGdsb3ctc2hhZG93LCBpbnNldCAwIDAuMTJlbSAwLjFlbSB0cmFuc3BhcmVudGl6ZSh3aGl0ZSwgMC43NSk7XG4vLyAgICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMC4xNWVtO1xuLy8gICB9XG4vLyB9XG5cbi8vIC5jaGVja3RleHQge1xuLy8gICB3aWR0aDogYXV0bztcbi8vICAgbWFyZ2luOiAwLjVlbTtcblxuLy8gICBpbnB1dCB7XG4vLyAgICAgZGlzcGxheTogbm9uZTtcblxuLy8gICAgICsgc3BhbiB7XG4vLyAgICAgICBAZXh0ZW5kIGJ1dHRvbjtcblxuLy8gICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4vLyAgICAgICBwYWRkaW5nOiAxZW07XG4vLyAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwcztcbi8vICAgICB9XG5cbi8vICAgICAmOmNoZWNrZWQgKyBzcGFuIHtcbi8vICAgICAgIEBleHRlbmQgLmJsdWUtYnV0dG9uO1xuXG4vLyAgICAgICBwYWRkaW5nOiAxZW07XG4vLyAgICAgfVxuLy8gICB9XG4vLyB9XG5cbi8vIC5zd2l0Y2gge1xuLy8gICAkX2hlaWdodDogMnJlbTtcbi8vICAgJF93aWR0aDogOHJlbTtcbi8vICAgJF9oYW5kbGUtd2lkdGg6ICRfaGVpZ2h0O1xuLy8gICAkX2hhbmRsZS10cmFuc2xhdGlvbjogJF93aWR0aCAtICRfaGFuZGxlLXdpZHRoO1xuXG4vLyAgIGhlaWdodDogJF9oZWlnaHQ7XG4vLyAgIHdpZHRoOiAkX3dpZHRoO1xuLy8gICBwYWRkaW5nOiAwO1xuLy8gICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbi8vICAgaW5wdXQge1xuLy8gICAgIGRpc3BsYXk6IG5vbmU7XG5cbi8vICAgICArIGRpdiB7XG4vLyAgICAgICBoZWlnaHQ6IDEwMCU7XG4vLyAgICAgICB3aWR0aDogMTAwJTtcbi8vICAgICAgIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xuLy8gICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4vLyAgICAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBib3gtc2hhZG93LCBiYWNrZ3JvdW5kLWNvbG9yO1xuLy8gICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4ycztcbi8vICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuMnM7XG4vLyAgICAgICBib3gtc2hhZG93OiAzcHggM3B4IDJweCAtMnB4IHRyYW5zcGFyZW50aXplKGJsYWNrLCAwLjkpLFxuLy8gICAgICAgICBpbnNldCAycHggMnB4IDJweCAxcHggdHJhbnNwYXJlbnRpemUoYmxhY2ssIDAuOSksXG4vLyAgICAgICAgIGluc2V0IC0ycHggLTJweCAxcHggd2hpdGU7XG5cbi8vICAgICAgICY6OmJlZm9yZSB7XG4vLyAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4vLyAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuLy8gICAgICAgICBoZWlnaHQ6IGNhbGMoI3skX2hhbmRsZS13aWR0aH0gKyA0cHgpO1xuLy8gICAgICAgICB3aWR0aDogY2FsYygjeyRfaGFuZGxlLXdpZHRofSArIDRweCk7XG4vLyAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4vLyAgICAgICAgIGJvcmRlcjogc29saWQgd2hpdGUgM3B4O1xuLy8gICAgICAgICBiYWNrZ3JvdW5kOiAkYmx1ZTtcbi8vICAgICAgICAgYm94LXNoYWRvdzogMCAzcHggMTBweCB0cmFuc3BhcmVudGl6ZShibGFjaywgMC44KSxcbi8vICAgICAgICAgICBpbnNldCAwIC0xcHggM3B4IHRyYW5zcGFyZW50aXplKGJsYWNrLCAwLjkpO1xuLy8gICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNnB4KTtcbi8vICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnM7XG4vLyAgICAgICB9XG4vLyAgICAgfVxuXG4vLyAgICAgJjpjaGVja2VkICsgZGl2IHtcbi8vICAgICAgIGJhY2tncm91bmQ6ICRibHVlO1xuLy8gICAgICAgYm94LXNoYWRvdzogJGdsb3ctc2hhZG93LCBpbnNldCAwIDJweCAycHggMnB4IHRyYW5zcGFyZW50aXplKGJsYWNrLCAwLjcpLFxuLy8gICAgICAgICBpbnNldCAwIDAgdHJhbnNwYXJlbnQ7XG5cbi8vICAgICAgICY6OmJlZm9yZSB7XG4vLyAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKCRfaGFuZGxlLXRyYW5zbGF0aW9uLCAtNnB4KTtcbi8vICAgICAgIH1cbi8vICAgICB9XG4vLyAgIH1cbi8vIH1cblxuLy8gaHIge1xuLy8gICBAZXh0ZW5kIC5pbnNldDtcbi8vICAgd2lkdGg6IDcyJTtcbi8vICAgaGVpZ2h0OiA4cHg7XG4vLyAgIGZsb2F0OiByaWdodDtcbi8vICAgYm9yZGVyOiAwO1xuLy8gfVxuXG4vLyBjb2RlLFxuLy8gcHJlIHtcbi8vICAgcGFkZGluZzogMC41ZW0gMWVtO1xuLy8gICBib3JkZXItcmFkaXVzOiA0cHg7XG4vLyAgIG92ZXJmbG93OiBhdXRvO1xuLy8gICBib3gtc2hhZG93OiAwIDVweCAzMHB4IDAgdHJhbnNwYXJlbnRpemUoYmxhY2ssIDAuOTUpO1xuLy8gfVxuXG4vLyBjb2RlIHtcbi8vICAgYmFja2dyb3VuZDogI2U2ZTZlNjtcbi8vIH1cblxuLy8gcHJlIHtcbi8vICAgYmFja2dyb3VuZDogd2hpdGU7XG4vLyAgIG1hcmdpbjogNGVtIDA7XG4vLyB9XG5cbi8vIGNvZGUsXG4vLyBwcmUge1xuLy8gICAmLFxuLy8gICAmICoge1xuLy8gICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuLy8gICAgIGxpbmUtaGVpZ2h0OiAyZW07XG4vLyAgICAgY3Vyc29yOiBhdXRvO1xuLy8gICAgIHVzZXItc2VsZWN0OiB0ZXh0O1xuLy8gICAgIC13ZWJraXQtdG91Y2gtY2FsbG91dDogdGV4dDtcbi8vICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiB0ZXh0O1xuLy8gICAgIC1raHRtbC11c2VyLXNlbGVjdDogdGV4dDtcbi8vICAgICAtbW96LXVzZXItc2VsZWN0OiB0ZXh0O1xuLy8gICAgIC1tcy11c2VyLXNlbGVjdDogdGV4dDtcbi8vICAgfVxuLy8gfVxuXG4vLyBibG9ja3F1b3RlIHtcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4vLyAgIHBhZGRpbmc6IDAuNWVtIDFlbTtcbi8vICAgYm9yZGVyLXJhZGl1czogNHB4O1xuLy8gICBib3gtc2hhZG93OiAwIDVweCAzMHB4IDAgdHJhbnNwYXJlbnRpemUoYmxhY2ssIDAuOTUpO1xuLy8gICBib3JkZXItbGVmdDogNnB4IHNvbGlkICRibHVlO1xuLy8gfVxuIiwiQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdDYXZlYXQnO1xuICAgIHNyYzogdXJsKCcuLi8uLi9mb250cy9Cb2xkL0NhdmVhdC1Cb2xkLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxuICAgICAgICB1cmwoJy4uLy4uL2ZvbnRzL0JvbGQvQ2F2ZWF0LUJvbGQud29mZicpIGZvcm1hdCgnd29mZicpO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LWRpc3BsYXk6IHN3YXA7XG59XG5cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnQ2F2ZWF0JztcbiAgICBzcmM6IHVybCgnLi4vLi4vZm9udHMvUmVndWxhci9DYXZlYXQtUmVndWxhci53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcbiAgICAgICAgdXJsKCcuLi8uLi9mb250cy9SZWd1bGFyL0NhdmVhdC1SZWd1bGFyLndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LWRpc3BsYXk6IHN3YXA7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ0ZpZ3VyaW5lU3ltYm9sVDEnO1xuICBzcmM6IHVybCgnLi4vLi4vZm9udHMvM3JkIFBhcnR5L0NoZXNzVmFyaWFudHMvRmlndXJpbmVTeW1ib2xUMUJvbGQud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXG4gICAgICB1cmwoJy4uLy4uL2ZvbnRzLzNyZCBQYXJ0eS9DaGVzc1ZhcmlhbnRzL0ZpZ3VyaW5lU3ltYm9sVDFCb2xkLndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdGaWd1cmluZVN5bWJvbFQxJztcbiAgc3JjOiB1cmwoJy4uLy4uL2ZvbnRzLzNyZCBQYXJ0eS9DaGVzc1ZhcmlhbnRzL0ZpZ3VyaW5lU3ltYm9sVDEud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXG4gICAgICB1cmwoJy4uLy4uL2ZvbnRzLzNyZCBQYXJ0eS9DaGVzc1ZhcmlhbnRzL0ZpZ3VyaW5lU3ltYm9sVDEud29mZicpIGZvcm1hdCgnd29mZicpO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbn1cblxuIiwiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkNhdmVhdFwiO1xuICBzcmM6IHVybChcIi4uLy4uL2ZvbnRzL0JvbGQvQ2F2ZWF0LUJvbGQud29mZjJcIikgZm9ybWF0KFwid29mZjJcIiksIHVybChcIi4uLy4uL2ZvbnRzL0JvbGQvQ2F2ZWF0LUJvbGQud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiQ2F2ZWF0XCI7XG4gIHNyYzogdXJsKFwiLi4vLi4vZm9udHMvUmVndWxhci9DYXZlYXQtUmVndWxhci53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKSwgdXJsKFwiLi4vLi4vZm9udHMvUmVndWxhci9DYXZlYXQtUmVndWxhci53b2ZmXCIpIGZvcm1hdChcIndvZmZcIik7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkZpZ3VyaW5lU3ltYm9sVDFcIjtcbiAgc3JjOiB1cmwoXCIuLi8uLi9mb250cy8zcmQgUGFydHkvQ2hlc3NWYXJpYW50cy9GaWd1cmluZVN5bWJvbFQxQm9sZC53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKSwgdXJsKFwiLi4vLi4vZm9udHMvM3JkIFBhcnR5L0NoZXNzVmFyaWFudHMvRmlndXJpbmVTeW1ib2xUMUJvbGQud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiRmlndXJpbmVTeW1ib2xUMVwiO1xuICBzcmM6IHVybChcIi4uLy4uL2ZvbnRzLzNyZCBQYXJ0eS9DaGVzc1ZhcmlhbnRzL0ZpZ3VyaW5lU3ltYm9sVDEud29mZjJcIikgZm9ybWF0KFwid29mZjJcIiksIHVybChcIi4uLy4uL2ZvbnRzLzNyZCBQYXJ0eS9DaGVzc1ZhcmlhbnRzL0ZpZ3VyaW5lU3ltYm9sVDEud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbn1cbi8qKioqKioqKioqKioqKioqKioqIE1lbnUgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIENvbnRhaW5lciBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBDb250YWluZXIgVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgQ29udGFpbmVyIFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIEhpZ2hsaWdodCBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBBbm5vdGF0aW9uIFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIFZhcmlhdGlvbiBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBQbHkgVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqKiBDb250cm9sIENvbG9ycyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKiogQm9hcmQgQ29sb3JzICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbjpyb290IHtcbiAgLS1iZy1jb2xvcjogI2YyZjNmNztcbiAgLS1mZy1jb2xvcjogIzM4M2E0MTtcbiAgLS1yZWQ6ICNlNDMwMzA7XG4gIC0tZ3JlZW46ICMxOWExODc7XG4gIC0tYmx1ZTogIzM2N2JmMDtcbiAgLS1kYXJrLWJsdWU6ICMyNjVhYjE7XG4gIC0tbWFyb29uOiAjYjgxNzRjO1xuICAtLXB1cnBsZTogIzhjNDJhYjtcbn1cblxuLnNldHRpbmdzLWNvbnRhaW5lciB7XG4gIGNvbG9yOiBibGFjaztcbiAgb3BhY2l0eTogMTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDBweDtcbiAgYm90dG9tOiAwcHg7XG4gIGxlZnQ6IDBweDtcbiAgcmlnaHQ6IDBweDtcbiAgei1pbmRleDogOTk5O1xuICBiYWNrZ3JvdW5kOiAjMTAwYzBjZTM7XG59XG5cbm1haW4tbWVudSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwcHg7XG4gIGJvdHRvbTogMHB4O1xuICBsZWZ0OiAwcHg7XG4gIHJpZ2h0OiAwcHg7XG4gIGJhY2tncm91bmQ6ICMxMDBjMGNlMztcbiAgei1pbmRleDogMTAwMDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuXG5zY29yZS1pdGVtLW1lbnUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMHB4O1xuICBib3R0b206IDBweDtcbiAgbGVmdDogMHB4O1xuICByaWdodDogMHB4O1xuICBiYWNrZ3JvdW5kOiAjMTAwYzBjZTM7XG4gIHotaW5kZXg6IDEwMDA7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cblxuLmNsb3NlLWJ1dHRvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDZweDtcbiAgdG9wOiA2cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm9hcmRCR0RhcmspO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHdpZHRoOiA0NHB4O1xuICBoZWlnaHQ6IDQ0cHg7XG4gIHotaW5kZXg6IDE1MDA7XG4gIGJvcmRlcjogd2hpdGUgMXB4IHNvbGlkO1xufVxuXG46Om5nLWRlZXAgbWF0LXRhYi1ncm91cCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIHRvcDogMzhweDtcbn1cbjo6bmctZGVlcCAubWF0LXJpcHBsZS5tYXQtdGFiLWxhYmVsLm1hdC1mb2N1cy1pbmRpY2F0b3IubWF0LXRhYi1sYWJlbC1hY3RpdmUge1xuICBmb250LXNpemU6IDI2cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTMxMzE0O1xufVxuOjpuZy1kZWVwIC5tYXQtcmlwcGxlLm1hdC10YWItbGFiZWwge1xuICBmb250LXNpemU6IDI2cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbn1cbjo6bmctZGVlcCAubWF0LXRhYi1ib2R5LWNvbnRlbnQubmctdG5zLWMxMjEtMS5uZy10cmlnZ2VyLm5nLXRyaWdnZXItdHJhbnNsYXRlVGFiIHtcbiAgdHJhbnNmb3JtOiBub25lO1xuICBib3JkZXI6IHdoaXRlIDJweCBzb2xpZDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBtaW4taGVpZ2h0OiAyMDBweDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OlgaMenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'olga-menu',
                templateUrl: './olga-menu.component.html',
                styleUrls: ['./olga-menu.component.scss']
            }]
    }], function () { return [{ type: _services_olga_service__WEBPACK_IMPORTED_MODULE_3__["OlgaService"] }, { type: _services_layout_service__WEBPACK_IMPORTED_MODULE_4__["LayoutService"] }, { type: _services_colors_service__WEBPACK_IMPORTED_MODULE_5__["ColorService"] }]; }, { settingsMenu: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_1__["MainMenuComponent"]]
        }], variationMenu: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_score_item_menu_score_item_menu_component__WEBPACK_IMPORTED_MODULE_2__["ScoreItemMenu"]]
        }] }); })();


/***/ }),

/***/ "./src/app/olga-menu/pgn-menu/pgn-menu.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/olga-menu/pgn-menu/pgn-menu.component.ts ***!
  \**********************************************************/
/*! exports provided: PgnMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PgnMenuComponent", function() { return PgnMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_olga_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/olga.service */ "./src/app/services/olga.service.ts");



const _c0 = ["container"];
class PgnMenuComponent {
    constructor(olga) {
        this.olga = olga;
        this.container = null;
    }
    ngOnInit() {
    }
    show() {
        if (this.container) {
            this.container.nativeElement.style.visibility = 'visible';
        }
    }
    hide() {
        if (this.container) {
            this.container.nativeElement.style.visibility = 'hidden';
        }
    }
    setPGN(pgn) {
        console.log('Received PGN - ');
        console.log(pgn);
        this.olga.loadPGN(pgn);
    }
    resize(width, height) {
    }
}
PgnMenuComponent.ɵfac = function PgnMenuComponent_Factory(t) { return new (t || PgnMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_olga_service__WEBPACK_IMPORTED_MODULE_1__["OlgaService"])); };
PgnMenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PgnMenuComponent, selectors: [["pgn-menu"]], viewQuery: function PgnMenuComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.container = _t.first);
    } }, decls: 6, vars: 0, consts: [[1, "menu-container"], ["container", ""], ["type", "text", 1, "input-box"], ["pgnInput", ""], [1, "accept-pgn", 3, "click"]], template: function PgnMenuComponent_Template(rf, ctx) { if (rf & 1) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PgnMenuComponent_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3); return ctx.setPGN(_r1.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Set PGN");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["@font-face {\n  font-family: \"Caveat\";\n  src: url('Caveat-Bold.woff2') format(\"woff2\"), url('Caveat-Bold.woff') format(\"woff\");\n  font-weight: bold;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"Caveat\";\n  src: url('Caveat-Regular.woff2') format(\"woff2\"), url('Caveat-Regular.woff') format(\"woff\");\n  font-weight: 600;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"FigurineSymbolT1\";\n  src: url('FigurineSymbolT1Bold.woff2') format(\"woff2\"), url('FigurineSymbolT1Bold.woff') format(\"woff\");\n  font-weight: bold;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"FigurineSymbolT1\";\n  src: url('FigurineSymbolT1.woff2') format(\"woff2\"), url('FigurineSymbolT1.woff') format(\"woff\");\n  font-weight: 600;\n  font-style: normal;\n  font-display: swap;\n}\n\n\n\n\n\n\n\n\n\n\n[_ngcontent-%COMP%]:root {\n  --bg-color: #f2f3f7;\n  --fg-color: #383a41;\n  --red: #e43030;\n  --green: #19a187;\n  --blue: #367bf0;\n  --dark-blue: #265ab1;\n  --maroon: #b8174c;\n  --purple: #8c42ab;\n}\n.menu-container[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  margin-left: 24px;\n  margin-right: 240px;\n  min-width: 240px;\n  overflow-y: wrap;\n  display: flex;\n}\n.input-box[_ngcontent-%COMP%] {\n  background: white;\n  color: black;\n  border: black 1px solid;\n  width: 80%;\n  height: calc(96% - 72px);\n  top: 24px;\n  margin-top: 12px;\n  left: 10%;\n}\n.accept-pgn[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 8px;\n  right: 24px;\n  margin-top: 8px;\n  height: 72px;\n  width: 240px;\n  color: var(--csColor);\n  background: var(--csBackground);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMuc2NzcyIsInNyYy9hc3NldHMvc2Nzcy9tb2R1bGVzL19mb250cy5zY3NzIiwic3JjL2FwcC9vbGdhLW1lbnUvcGduLW1lbnUvcGduLW1lbnUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOEVBQUE7QUNBQTtFQUNJLHFCQUFBO0VBQ0EscUZBQUE7RUFFQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNDSjtBREVBO0VBQ0kscUJBQUE7RUFDQSwyRkFBQTtFQUVBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0RKO0FESUE7RUFDRSwrQkFBQTtFQUNBLHVHQUFBO0VBRUEsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDSEY7QURNQTtFQUNFLCtCQUFBO0VBQ0EsK0ZBQUE7RUFFQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNMRjtBRmFBLCtFQUFBO0FBR0EsK0VBQUE7QUFRQSwrRUFBQTtBQU1BLCtFQUFBO0FBTUEsK0VBQUE7QUFNQSxnRkFBQTtBQUtBLCtFQUFBO0FBS0EseUVBQUE7QUFLQSx5RUFBQTtBQUlBLHVFQUFBO0FBZ0JBO0VBQ0UsbUJBQUE7RUFDQSxtQkFBQTtFQUVBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUVsRUY7QUE5Q0E7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FBaURGO0FBOUNBO0VBQ0ksaUJBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxVQUFBO0VBQ0Esd0JBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0FBaURKO0FBN0NBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHFCRnVETTtFRXRETiwrQkZxRFc7QUVMZiIsImZpbGUiOiJzcmMvYXBwL29sZ2EtbWVudS9wZ24tbWVudS9wZ24tbWVudS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cblxuQGltcG9ydCBcIi4vYXNzZXRzL3Njc3MvbW9kdWxlcy9fZm9udHMuc2Nzc1wiO1xuJGdhbWVzY29yZS1mYW1pbHk6IFwiRmlndXJpbmVTeW1ib2xUMVwiO1xuJGdhbWVzY29yZS1oaWdobGlnaHQ6ICM1ODU4NThmZjtcbiRnYW1lc2NvcmUtZm9yZWdyb3VuZDogd2hpdGU7XG5cbiRyZWQ6ICNlNDMwMzA7XG4kZ3JlZW46ICMxOWExODc7XG4kbGlnaHQtYmx1ZTogIzAwZmZmZmZmO1xuJGJsdWU6ICMzNjdiZjA7XG4kZGFyay1ibHVlOiAjMjY1YWIxO1xuJG1hcm9vbjogI2I4MTc0YztcbiRwdXJwbGU6ICM4YzQyYWI7XG5cbi8vIE1haW4gT0xHQSBDb2xvciBFbGVtZW50IFZhcmlhYmxlc1xuJHRleHRDb2xvcjogdmFyKC0tdGV4dENvbG9yKTsgLy8gTWFpbiBUZXh0IENvbG9yXG4kdGV4dENvbG9yQXR0ZW50aW9uOiB2YXIoLS10ZXh0Q29sb3JBdHRlbnRpb24pOyAvLyBBdHRlbnRpb24gdGV4dFxuJHRleHRDb2xvclJlbW92ZTogdmFyKC0tdGV4dENvbG9yUmVtb3ZlKTsgLy8gUmVtb3ZlL0RlbGV0ZS9DbG9zZVxuJHRleHRDb2xvckFkZDogdmFyKC0tdGV4dENvbG9yQWRkKTsgLy8gQWRkL0NyZWF0ZS9PcGVuXG4kdGV4dENvbG9yQWN0aXZlOiB2YXIoLS10ZXh0Q29sb3JBY3RpdmUpOyAvLyBBZGQvQ3JlYXRlL09wZW5cbiRiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kKTsgLy8gTWFpbiBiYWNrZ3JvdW5kIENvbG9yXG4kYmdDb250YWluZXI6IHZhcigtLWJnQ29udGFpbmVyKTsgLy8gYmFja2dyb3VuZCBvZiBDb250YWluZXJzXG4kYmdNZW51OiB2YXIoLS1iZ01lbnUpOyAvLyBiYWNrZ3JvdW5kIG9mIE1lbnVzXG4kYmdJdGVtOiB2YXIoLS1iZ0l0ZW0pOyAvLyBiYWNrZ3JvdW5kIG9mIEl0ZW1zXG5cbi8vIENvbnRleHQgTWVudVxuJGJnQ29udGV4dDogdmFyKC0tYmdDb250ZXh0KTsgLy8gYmFja2dyb3VuZCBvZiBDb250ZXh0IE1lbnVcbiR0ZXh0Q29sb3JDb250ZXh0OiB2YXIoLS10ZXh0Q29sb3JDb250ZXh0KTsgLy8gdGV4dCBjb2xvciBDb250ZXh0IE1lbnVcbiRib3JkZXJDb250ZXh0OiB2YXIoLS1ib3JkZXJDb250ZXh0KTsgLy8gYm9yZGVyIENvbnRleHQgTWVudVxuJG92ZXJsYXlDb250ZXh0QmFja2dyb3VuZDogdmFyKFxuICAtLW92ZXJsYXlDb250ZXh0QmFja2dyb3VuZFxuKTsgLy8gQ29udGV4dCBNZW51IE92ZXJsYXkgYmFja2dyb3VuZCBtYWluXG4kb3ZlcmxheUNvbnRleHRCYWNrZ3JvdW5kR3JhZGllbnQ6IHZhcihcbiAgLS1vdmVybGF5Q29udGV4dEJhY2tncm91bmRHcmFkaWVudFxuKTsgLy8gQ29udGV4dCBNZW51IGJhY2tncm91bmQgZ3JhZGllbnRcblxuJGl0ZW06IHZhcigtLWl0ZW0pO1xuJGl0ZW0tY29udHJhc3Q6IHZhcigtLWl0ZW0tY29udHJhc3QpO1xuJGl0ZW0tYmc6IHZhcigtLWl0ZW0tYmcpO1xuXG4vKioqKioqKioqKioqKioqKioqKiBNZW51ICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuJG1lQmFja2dyb3VuZDogdmFyKC0tbWVCYWNrZ3JvdW5kKTtcblxuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBDb250YWluZXIgVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiRnc1RleHRDb2xvcjogdmFyKC0tZ3NUZXh0Q29sb3IpOyAvLyBUZXh0IGNvbG9yIGZvciBnYW1lIHNjb3JlXG4kZ3NCYWNrZ3JvdW5kOiB2YXIoLS1nc0JhY2tncm91bmQpOyAvLyBiYWNrZ3JvdW5kIG9mIENvbnRhaW5lcnNcbiRnc0xpc3RCYWNrZ3JvdW5kOiB2YXIoLS1nc0xpc3RCYWNrZ3JvdW5kKTsgLy8gbGlzdCBiYWNrZ3JvdW5kIG9mIGdhbWUgc2NvcmVcbiRnc0JvcmRlcjogdmFyKC0tZ3NCb3JkZXIpOyAvLyBiYWNrZ3JvdW5kIG9mIE1lbnVzXG4kZ3NUZXh0U2l6ZTogdmFyKC0tZ3NUZXh0U2l6ZSk7IC8vIGJhY2tncm91bmQgb2YgTWVudXNcbiRnc0ZvbnRGYW1pbHk6IHZhcigtLWdzRm9udEZhbWlseSk7IC8vIHNjb3JlIGZvbnRcblxuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBDb250YWluZXIgVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiRnc1RleHRDb2xvck1XOiB2YXIoLS1nc1RleHRDb2xvck1XKTsgLy8gVGV4dCBjb2xvciBmb3IgZ2FtZSBzY29yZVxuJGdzQmFja2dyb3VuZE1XOiB2YXIoLS1nc0JhY2tncm91bmRNVyk7IC8vIGJhY2tncm91bmQgb2YgQ29udGFpbmVyc1xuJGdzQm9yZGVyTVc6IHZhcigtLWdzQm9yZGVyTVcpOyAvLyBiYWNrZ3JvdW5kIG9mIE1lbnVzXG4kZ3NUZXh0U2l6ZU1XOiB2YXIoLS1nc1RleHRTaXplTVcpOyAvLyBiYWNrZ3JvdW5kIG9mIE1lbnVzXG5cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgQ29udGFpbmVyIFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4kZ3NUZXh0Q29sb3JNQjogdmFyKC0tZ3NUZXh0Q29sb3JNQik7IC8vIFRleHQgY29sb3IgZm9yIGdhbWUgc2NvcmVcbiRnc0JhY2tncm91bmRNQjogdmFyKC0tZ3NCYWNrZ3JvdW5kTUIpOyAvLyBiYWNrZ3JvdW5kIG9mIENvbnRhaW5lcnNcbiRnc0JvcmRlck1COiB2YXIoLS1nc0JvcmRlck1CKTsgLy8gYmFja2dyb3VuZCBvZiBNZW51c1xuJGdzVGV4dFNpemVNQjogdmFyKC0tZ3NUZXh0U2l6ZU1CKTsgLy8gYmFja2dyb3VuZCBvZiBNZW51c1xuXG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIEhpZ2hsaWdodCBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuJGdzVGV4dENvbG9ySEc6IHZhcigtLWdzVGV4dENvbG9ySEcpOyAvLyBUZXh0IGNvbG9yIGZvciBoaWdobGlnaHRcbiRnc0Fubm90YXRpb25Db2xvckhHOiB2YXIoLS1nc0Fubm90YXRpb25Db2xvckhHKTsgLy8gQW5ub3RhdGlvbi9Db21tZW50IGNvbG9yIGZvciBoaWdobGlnaHRcbiRnc0JhY2tncm91bmRIRzogdmFyKC0tZ3NCYWNrZ3JvdW5kSEcpOyAvLyBiYWNrZ3JvdW5kIGZvciBoaWdobGlnaHRcbiRnc0JvcmRlckhHOiB2YXIoLS1nc0JvcmRlckhHKTsgLy8gYm9yZGVyIGZvciBoaWdobGlnaHRcblxuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBBbm5vdGF0aW9uIFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4kZ3NUZXh0Q29sb3JBTjogdmFyKC0tZ3NUZXh0Q29sb3JBTik7IC8vIFRleHQgY29sb3IgZm9yIGhpZ2hsaWdodFxuJGdzQmFja2dyb3VuZEFOOiB2YXIoLS1nc0JhY2tncm91bmRBTik7IC8vIGJhY2tncm91bmQgZm9yIGhpZ2hsaWdodFxuJGdzQm9yZGVyQU46IHZhcigtLWdzQm9yZGVyQU4pOyAvLyBib3JkZXIgZm9yIGhpZ2hsaWdodFxuXG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIFZhcmlhdGlvbiBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuJGdzVGV4dENvbG9yVkE6IHZhcigtLWdzVGV4dENvbG9yVkEpOyAvLyBUZXh0IGNvbG9yIGZvciBoaWdobGlnaHRcbiRnc0JhY2tncm91bmRWQTogdmFyKC0tZ3NCYWNrZ3JvdW5kVkEpOyAvLyBiYWNrZ3JvdW5kIGZvciBoaWdobGlnaHRcbiRnc0JvcmRlclZBOiB2YXIoLS1nc0JvcmRlclZBKTsgLy8gYm9yZGVyIGZvciBoaWdobGlnaHRcblxuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBQbHkgVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiRnc1RleHRDb2xvclBDOiB2YXIoLS1nc1RleHRDb2xvclBDKTsgLy8gVGV4dCBjb2xvciBmb3IgZ2FtZSBzY29yZSBwbHlcbiRnc0JhY2tncm91bmRQQzogdmFyKC0tZ3NCYWNrZ3JvdW5kUEMpOyAvLyBiYWNrZ3JvdW5kIGZvciBnYW1lIHNjb3JlIHBseVxuJGdzQm9yZGVyUEM6IHZhcigtLWdzQm9yZGVyUEMpOyAvLyBib3JkZXIgZm9yIGdhbWUgc2NvcmUgcGx5XG5cbi8qKioqKioqKioqKioqKioqKioqKiBDb250cm9sIENvbG9ycyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4kY3NCYWNrZ3JvdW5kOiB2YXIoLS1jc0JhY2tncm91bmQpOyAvLyBiYWNrZ3JvdW5kIGZvciBjb250cm9sc1xuJGNzQ29sb3I6IHZhcigtLWNzQ29sb3IpOyAvLyBjb250cm9scyBjb2xvciAoZm9yZWdyb3VuZClcblxuLyoqKioqKioqKioqKioqKioqKioqIEJvYXJkIENvbG9ycyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4kYm9hcmRCR0Rhcms6IHZhcigtLWJvYXJkQkdEYXJrKTsgLy8gYm9hcmQgZGFyayB0aWxlXG4kYm9hcmRCR0xpZ2h0OiB2YXIoLS1ib2FyZEJHTGlnaHQpOyAvLyBib2FyZCBsaWdodCB0aWxlXG4kYm9hcmRMYWJlbExpZ2h0OiB2YXIoLS1ib2FyZExhYmVsTGlnaHQpOyAvLyBib2FyZCBsaWdodCBsYWJlbFxuJGJvYXJkTGFiZWxEYXJrOiB2YXIoLS1ib2FyZExhYmVsRGFyayk7IC8vIGJvYXJkIGRhcmsgbGFiZWxcblxuLy8gR2VuZXJhbCBzdHVmZlxuJHRleHQtY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xuJGJnLW91dGVyOiB2YXIoLS1iZy1vdXRlcik7XG4kYmctaW5uZXI6IHZhcigtLWJnLWlubmVyKTtcblxuJGJnLWNvbG9yOiAjZjJmM2Y3O1xuJGZnLWNvbG9yOiAjMzgzYTQxO1xuXG4kZ2xvdy1zaGFkb3c6IDAgMCAwLjVlbSB0cmFuc3BhcmVudGl6ZSgkYmx1ZSwgMC4zKTtcblxuOnJvb3Qge1xuICAtLWJnLWNvbG9yOiAjeyRiZy1jb2xvcn07XG4gIC0tZmctY29sb3I6ICN7JGZnLWNvbG9yfTtcblxuICAtLXJlZDogI3skcmVkfTtcbiAgLS1ncmVlbjogI3skZ3JlZW59O1xuICAtLWJsdWU6ICN7JGJsdWV9O1xuICAtLWRhcmstYmx1ZTogI3skZGFyay1ibHVlfTtcbiAgLS1tYXJvb246ICN7JG1hcm9vbn07XG4gIC0tcHVycGxlOiAjeyRwdXJwbGV9O1xufVxuXG4vLyA6Oi1tb3otZm9jdXMtaW5uZXIsXG4vLyA6LW1vei1mb2N1c3Jpbmcge1xuLy8gICBib3JkZXI6IDA7XG4vLyAgIGNvbG9yOiB0cmFuc3BhcmVudDtcbi8vICAgdGV4dC1zaGFkb3c6IDAgMCAwICRmZy1jb2xvcjtcbi8vIH1cblxuLy8gOjpzZWxlY3Rpb24sXG4vLyA6Oi1tb3otc2VsZWN0aW9uIHtcbi8vICAgY29sb3I6IHdoaXRlO1xuLy8gICBiYWNrZ3JvdW5kOiBibGFjaztcbi8vIH1cblxuLy8gKiB7XG4vLyAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4vLyAgIG91dGxpbmU6IG5vbmU7XG4vLyAgIHVzZXItc2VsZWN0OiBub25lO1xuLy8gICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XG4vLyAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4vLyAgIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTtcbi8vICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbi8vICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuLy8gICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4vLyAgIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbi8vICAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApICFpbXBvcnRhbnQ7XG4vLyAgIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcbi8vICAgY3Vyc29yOiBkZWZhdWx0O1xuLy8gICBsZXR0ZXItc3BhY2luZzogMDtcbi8vIH1cblxuLy8gLnNlbGVjdGFibGUsXG4vLyAuc2VsZWN0YWJsZSAqIHtcbi8vICAgY3Vyc29yOiBhdXRvO1xuLy8gICB1c2VyLXNlbGVjdDogdGV4dDtcbi8vICAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiB0ZXh0O1xuLy8gICAtd2Via2l0LXVzZXItc2VsZWN0OiB0ZXh0O1xuLy8gICAta2h0bWwtdXNlci1zZWxlY3Q6IHRleHQ7XG4vLyAgIC1tb3otdXNlci1zZWxlY3Q6IHRleHQ7XG4vLyAgIC1tcy11c2VyLXNlbGVjdDogdGV4dDtcbi8vIH1cblxuLy8gaHRtbCxcbi8vIGJvZHkge1xuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmctY29sb3I7XG4vLyAgIGNvbG9yOiAkZmctY29sb3I7XG4vLyAgIG1hcmdpbjogMDtcbi8vICAgcGFkZGluZzogMDtcbi8vICAgZm9udC1zaXplOiAxMHB0O1xuLy8gICBoZWlnaHQ6IDEwMCU7XG4vLyAgIG92ZXJmbG93OiBhdXRvO1xuLy8gfVxuXG4vLyAud2l0aC1zaGFkb3cge1xuLy8gICBib3gtc2hhZG93OiA2cHggNnB4IDEwcHggdHJhbnNwYXJlbnRpemUoYmxhY2ssIDAuOSksIC02cHggLTZweCAxMHB4IHdoaXRlO1xuLy8gfVxuXG4vLyAub3V0c2V0IHtcbi8vICAgQGV4dGVuZCAud2l0aC1zaGFkb3c7XG5cbi8vICAgYm9yZGVyLXJhZGl1czogMTBweDtcbi8vICAgYmFja2dyb3VuZDogJGJnLWNvbG9yO1xuLy8gfVxuXG4vLyAuaW5zZXQge1xuLy8gICBib3JkZXItcmFkaXVzOiAxMHB4O1xuLy8gICBib3gtc2hhZG93OiAwIDAgdHJhbnNwYXJlbnQsIDAgMCB0cmFuc3BhcmVudCxcbi8vICAgICBpbnNldCAzcHggM3B4IDVweCB0cmFuc3BhcmVudGl6ZShibGFjaywgMC45KSwgaW5zZXQgLTNweCAtM3B4IDVweCB3aGl0ZTtcbi8vICAgYmFja2dyb3VuZDogbGlnaHRlbigkYmctY29sb3IsIDIlKTtcbi8vIH1cblxuLy8gLnBhcGVyIHtcbi8vICAgQGV4dGVuZCAub3V0c2V0O1xuLy8gICBwYWRkaW5nOiAxMHB4IDIwcHggMjBweDtcbi8vICAgbWFyZ2luLXRvcDogMjBweDtcbi8vICAgbWluLWhlaWdodDogMTAwcHg7XG4vLyAgIGZvbnQtc2l6ZTogMS4yZW07XG4vLyAgIGJhY2tncm91bmQ6ICRiZy1jb2xvcjtcbi8vIH1cblxuLy8gc2VjdGlvbixcbi8vIGFydGljbGUsXG4vLyAuc2VjdGlvbixcbi8vIC5hcnRpY2xlLFxuLy8gLnBhcGVyIHtcbi8vICAgbGluZS1oZWlnaHQ6IDJlbTtcbi8vICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuLy8gICB3b3JkLWJyZWFrOiBub3JtYWw7XG4vLyAgIGxpbmUtaGVpZ2h0OiAyZW07XG4vLyB9XG5cbi8vIGlucHV0W3R5cGU9XCJ0ZXh0XCJdLFxuLy8gaW5wdXRbdHlwZT1cInNlYXJjaFwiXSxcbi8vIGlucHV0W3R5cGU9XCJ0ZWxcIl0sXG4vLyBpbnB1dFt0eXBlPVwidXJsXCJdLFxuLy8gaW5wdXRbdHlwZT1cImVtYWlsXCJdLFxuLy8gaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJdLFxuLy8gaW5wdXRbdHlwZT1cImRhdGVcIl0sXG4vLyBpbnB1dFt0eXBlPVwibW9udGhcIl0sXG4vLyBpbnB1dFt0eXBlPVwid2Vla1wiXSxcbi8vIGlucHV0W3R5cGU9XCJ0aW1lXCJdLFxuLy8gaW5wdXRbdHlwZT1cIm51bWJlclwiXSxcbi8vIGlucHV0W3R5cGU9XCJjb2xvclwiXSxcbi8vIHNlbGVjdCxcbi8vIHRleHRhcmVhIHtcbi8vICAgYm9yZGVyOiAwO1xuLy8gICBiYWNrZ3JvdW5kOiAkYmctY29sb3I7XG4vLyAgIGNvbG9yOiAkZmctY29sb3I7XG4vLyAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4vLyAgIHBhZGRpbmc6IDAgMS4yNWVtO1xuLy8gICBsaW5lLWhlaWdodDogMS4yNWVtO1xuLy8gICBoZWlnaHQ6IDMuNWVtO1xuLy8gICBtYXJnaW46IDEwcHggMDtcbi8vICAgZm9udC1zaXplOiAxLjFyZW07XG4vLyAgIGN1cnNvcjogdGV4dDtcbi8vICAgdXNlci1zZWxlY3Q6IHRleHQ7XG4vLyAgIC13ZWJraXQtdG91Y2gtY2FsbG91dDogdGV4dDtcbi8vICAgLXdlYmtpdC11c2VyLXNlbGVjdDogdGV4dDtcbi8vICAgLWtodG1sLXVzZXItc2VsZWN0OiB0ZXh0O1xuLy8gICAtbW96LXVzZXItc2VsZWN0OiB0ZXh0O1xuLy8gICAtbXMtdXNlci1zZWxlY3Q6IHRleHQ7XG4vLyAgIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC4ycztcblxuLy8gICAmOm5vdChzZWxlY3QpIHtcbi8vICAgICBAZXh0ZW5kIC5pbnNldDtcblxuLy8gICAgICY6Zm9jdXMge1xuLy8gICAgICAgQGV4dGVuZCAub3V0c2V0O1xuLy8gICAgIH1cbi8vICAgfVxuLy8gfVxuXG4vLyB0ZXh0YXJlYSB7XG4vLyAgIGhlaWdodDogMzUwcHg7XG4vLyAgIHBhZGRpbmc6IDEuMjVlbTtcbi8vIH1cblxuLy8gc2VsZWN0IHtcbi8vICAgQGV4dGVuZCAub3V0c2V0O1xuXG4vLyAgIGN1cnNvcjogcG9pbnRlcjtcbi8vICAgYmFja2dyb3VuZDogdXJsKGRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjJaWEp6YVc5dVBTSXhMakVpSUhacFpYZENiM2c5SWpBZ01DQXhPU0F4T1NJZ2VHMXNibk05SW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTHpJd01EQXZjM1puSWo0OFp5QjBjbUZ1YzJadmNtMDlJbTFoZEhKcGVDZ3VNRE0wSURBZ01DQXVNRE0wSUMwMkxqZ2dNUzQzWlMwMUtTSWdjM1I1YkdVOUltWnBiR3c2SXpkaU4yVTRZeUkrUEhCaGRHZ2daRDBpYlRRNE1DQXpORFF0TWpFeExUSXhNbU10TVRZdE1UWXROREV0TVRZdE5UY2dNQzB4TmlBeE5pMHhOaUEwTWlBd0lEVTNiREl6T0NBeU16bGpPQzQwSURndU5TQXlNQ0F4TWlBek1TQXhNaUF4TVNBd0xqVTJJREl5TFRNdU1pQXpNUzB4TW13eU16Z3RNak01WXpFMkxURTJJREUyTFRReUlEQXROVGR6TFRReExURTJMVFUzSURCNklpQnpkSGxzWlQwaVptbHNiRG9qTjJJM1pUaGpJaTgrUEM5blBqd3ZjM1puUGdvPSlcbi8vICAgICBuby1yZXBlYXQgcmlnaHQgMWVtIGNlbnRlcjtcbi8vICAgYmFja2dyb3VuZC1zaXplOiAxLjJlbTtcbi8vICAgcGFkZGluZy1yaWdodDogM2VtO1xuLy8gfVxuXG4vLyBpbnB1dDo6cGxhY2Vob2xkZXIsXG4vLyB0ZXh0YXJlYTo6cGxhY2Vob2xkZXIge1xuLy8gICBvcGFjaXR5OiAxO1xuLy8gICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnM7XG4vLyAgIGNvbG9yOiBpbmhlcml0O1xuLy8gfVxuXG4vLyBpbnB1dDpmb2N1czo6cGxhY2Vob2xkZXIsXG4vLyB0ZXh0YXJlYTpmb2N1czo6cGxhY2Vob2xkZXIge1xuLy8gICBvcGFjaXR5OiAwLjI7XG4vLyB9XG5cbi8vIGlucHV0Oi1tcy1pbnB1dC1wbGFjZWhvbGRlcixcbi8vIHRleHRhcmVhOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4vLyAgIG9wYWNpdHk6IDE7XG4vLyAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycztcbi8vICAgY29sb3I6IGluaGVyaXQ7XG4vLyB9XG5cbi8vIGlucHV0OmZvY3VzOi1tcy1pbnB1dC1wbGFjZWhvbGRlcixcbi8vIHRleHRhcmVhOmZvY3VzOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4vLyAgIG9wYWNpdHk6IDAuMjtcbi8vIH1cblxuLy8gaW5wdXRbdHlwZT1cInNlYXJjaFwiXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbixcbi8vIGlucHV0W3R5cGU9XCJzZWFyY2hcIl06Oi13ZWJraXQtc2VhcmNoLWNhbmNlbC1idXR0b24sXG4vLyBpbnB1dFt0eXBlPVwic2VhcmNoXCJdOjotd2Via2l0LXNlYXJjaC1yZXN1bHRzLWJ1dHRvbixcbi8vIGlucHV0W3R5cGU9XCJzZWFyY2hcIl06Oi13ZWJraXQtc2VhcmNoLXJlc3VsdHMtZGVjb3JhdGlvbiB7XG4vLyAgIGRpc3BsYXk6IG5vbmU7XG4vLyB9XG5cbi8vIGJ1dHRvbixcbi8vIGlucHV0W3R5cGU9XCJidXR0b25cIl0sXG4vLyBpbnB1dFt0eXBlPVwic3VibWl0XCJdLFxuLy8gaW5wdXRbdHlwZT1cInJlc2V0XCJdIHtcbi8vICAgQGV4dGVuZCAub3V0c2V0O1xuXG4vLyAgIGJvcmRlcjogMDtcbi8vICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4vLyAgIHBhZGRpbmc6IDEwcHggMDtcbi8vICAgd2lkdGg6IDhlbTtcbi8vICAgdGV4dC1hbGlnbjogY2VudGVyO1xuLy8gICBjdXJzb3I6IHBvaW50ZXI7XG4vLyAgIGNvbG9yOiBpbmhlcml0O1xuLy8gICBmb250LXNpemU6IDEuMXJlbTtcbi8vICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYmFja2dyb3VuZC1jb2xvciwgYm94LXNoYWRvdztcbi8vICAgdHJhbnNpdGlvbi1kZWxheTogMC4ycztcbi8vICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4ycztcblxuLy8gICAmLmFjdGl2ZSxcbi8vICAgJjphY3RpdmUge1xuLy8gICAgIEBleHRlbmQgLmluc2V0O1xuXG4vLyAgICAgdHJhbnNpdGlvbi1kZWxheTogMHM7XG4vLyAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4xcztcbi8vICAgfVxuXG4vLyAgIEBlYWNoICRuYW1lLCAkY29sb3IgaW4gKFwicmVkXCI6ICRyZWQsIFwiZ3JlZW5cIjogJGdyZWVuLCBcImJsdWVcIjogJGJsdWUpIHtcbi8vICAgICBAYXQtcm9vdCAuI3skbmFtZX0tYnV0dG9uLFxuLy8gICAgICAgJi4jeyRuYW1lfS1idXR0b24ge1xuLy8gICAgICAgQGV4dGVuZCBidXR0b247XG5cbi8vICAgICAgICRfYmctaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsICRjb2xvciAzMCUsIGxpZ2h0ZW4oJGNvbG9yLCA2JSkgODAlKTtcblxuLy8gICAgICAgY29sb3I6IHdoaXRlO1xuLy8gICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4vLyAgICAgICB0ZXh0LXNoYWRvdzogMCAwLjFlbSAwLjFlbSB0cmFuc3BhcmVudGl6ZShibGFjaywgMC4zKTtcbi8vICAgICAgIGJhY2tncm91bmQ6ICRfYmctaW1hZ2U7XG4vLyAgICAgICBib3gtc2hhZG93OiAwIDAgMC41ZW0gdHJhbnNwYXJlbnRpemUoJGNvbG9yLCAwLjMpLCAwIDAgdHJhbnNwYXJlbnQsXG4vLyAgICAgICAgIGluc2V0IDAgLTVweCAwIHRyYW5zcGFyZW50aXplKGJsYWNrLCAwLjk1KSxcbi8vICAgICAgICAgaW5zZXQgMCAycHggMCB0cmFuc3BhcmVudGl6ZSh3aGl0ZSwgMC44KTtcbi8vICAgICAgIGJvcmRlci1yYWRpdXM6IDZweCA2cHggOHB4IDhweDtcbi8vICAgICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGJveC1zaGFkb3csIGJvcmRlci1yYWRpdXM7XG5cbi8vICAgICAgICYuYWN0aXZlLFxuLy8gICAgICAgJjphY3RpdmUge1xuLy8gICAgICAgICBiYWNrZ3JvdW5kOiAkX2JnLWltYWdlO1xuLy8gICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4vLyAgICAgICAgIGJveC1zaGFkb3c6IDAgMCB0cmFuc3BhcmVudCwgMCAwIHRyYW5zcGFyZW50LFxuLy8gICAgICAgICAgIGluc2V0IDAgMnB4IDVweCAycHggdHJhbnNwYXJlbnRpemUoYmxhY2ssIDAuOCk7XG4vLyAgICAgICB9XG4vLyAgICAgfVxuLy8gICB9XG4vLyB9XG5cbi8vIGxhYmVsIHtcbi8vICAgJixcbi8vICAgJiAqIHtcbi8vICAgICBjdXJzb3I6IHBvaW50ZXI7XG4vLyAgIH1cblxuLy8gICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4vLyAgIHBhZGRpbmc6IDAuNTZlbSAwO1xuLy8gfVxuXG4vLyBhIHtcbi8vICAgJixcbi8vICAgJjpsaW5rLFxuLy8gICAmOnZpc2l0ZWQsXG4vLyAgICY6aG92ZXIgJjphY3RpdmUge1xuLy8gICAgICYsXG4vLyAgICAgJiAqIHtcbi8vICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbi8vICAgICB9XG5cbi8vICAgICBmb250LXdlaWdodDogYm9sZDtcbi8vICAgICBjb2xvcjogJGJsdWU7XG4vLyAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4vLyAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuLy8gICB9XG4vLyB9XG5cbi8vIGgxLFxuLy8gaDIsXG4vLyBoMyxcbi8vIGg0LFxuLy8gaDUsXG4vLyBoNiB7XG4vLyAgIGxpbmUtaGVpZ2h0OiAxLjVlbTtcbi8vIH1cblxuLy8gaDEge1xuLy8gICBmb250LXNpemU6IDRlbTtcbi8vICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4vLyAgIG1hcmdpbjogMC43ZW0gMDtcbi8vIH1cblxuLy8gaDIge1xuLy8gICBmb250LXNpemU6IDNlbTtcbi8vICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4vLyAgIG1hcmdpbjogMC44ZW0gMDtcbi8vIH1cblxuLy8gaDMge1xuLy8gICBmb250LXNpemU6IDIuNWVtO1xuLy8gICBmb250LXdlaWdodDogbGlnaHRlcjtcbi8vICAgbWFyZ2luOiAwLjllbSAwO1xuLy8gfVxuXG4vLyBoNCB7XG4vLyAgIGZvbnQtc2l6ZTogMmVtO1xuLy8gICBmb250LXdlaWdodDogbGlnaHRlcjtcbi8vICAgbWFyZ2luOiAxZW0gMDtcbi8vIH1cblxuLy8gaDUge1xuLy8gICBtYXJnaW46IDAuNWVtIDA7XG4vLyAgIGZvbnQtc2l6ZTogMS4yZW07XG4vLyAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4vLyB9XG5cbi8vIGg2IHtcbi8vICAgbWFyZ2luOiAxZW0gMCAxZW0gMS40ZW07XG4vLyAgIGZvbnQtc2l6ZTogMWVtO1xuLy8gICBmb250LXdlaWdodDogYm9sZDtcbi8vIH1cblxuLy8gaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdLFxuLy8gaW5wdXRbdHlwZT1cInJhZGlvXCJdIHtcbi8vICAgJF9ib3JkZXItd2lkdGg6IDAuMTVlbTtcbi8vICAgJF9ib3gtc2hhZG93OiAycHggMnB4IDNweCB0cmFuc3BhcmVudGl6ZShibGFjaywgMC44KSwgLTJweCAtMnB4IDNweCB3aGl0ZSxcbi8vICAgICBpbnNldCAxcHggMXB4IDJweCB0cmFuc3BhcmVudGl6ZShibGFjaywgMC44KSwgaW5zZXQgLTFweCAtMXB4IDJweCB3aGl0ZTtcbi8vICAgZm9udC1zaXplOiAxZW07XG4vLyAgIGN1cnNvcjogcG9pbnRlcjtcbi8vICAgaGVpZ2h0OiAxLjJlbTtcbi8vICAgd2lkdGg6IDEuMmVtO1xuLy8gICBtYXJnaW46IDAgMC4zZW07XG4vLyAgIGJveC1zaGFkb3c6ICRfYm94LXNoYWRvdztcbi8vICAgYm9yZGVyOiAkX2JvcmRlci13aWR0aCBzb2xpZCAkYmctY29sb3I7XG4vLyAgIHZlcnRpY2FsLWFsaWduOiB0ZXh0LWJvdHRvbTtcbi8vICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYmFja2dyb3VuZCwgYm94LXNoYWRvdztcbi8vICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4ycztcblxuLy8gICAmOmFjdGl2ZSB7XG4vLyAgICAgYm94LXNoYWRvdzogJF9ib3gtc2hhZG93LCBpbnNldCAwIDAuMWVtIDAuMjVlbSB0cmFuc3BhcmVudGl6ZShibGFjaywgMC44KTtcbi8vICAgfVxuXG4vLyAgICY6Y2hlY2tlZCB7XG4vLyAgICAgYm9yZGVyLXdpZHRoOiAwLjFlbTtcbi8vICAgICBib3JkZXItY29sb3I6IGRhcmtlbigkYmx1ZSwgMTAlKTtcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmx1ZTtcbi8vICAgfVxuLy8gfVxuXG4vLyBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0ge1xuLy8gICBib3JkZXItcmFkaXVzOiAyNSU7XG5cbi8vICAgJjpjaGVja2VkIHtcbi8vICAgICBib3gtc2hhZG93OiAkZ2xvdy1zaGFkb3csIGluc2V0IDAgLTAuMWVtIDAgdHJhbnNwYXJlbnRpemUoYmxhY2ssIDAuOCksXG4vLyAgICAgICBpbnNldCAwIDAuMWVtIDAuMWVtIHRyYW5zcGFyZW50aXplKHdoaXRlLCAwLjgpO1xuLy8gICB9XG4vLyB9XG5cbi8vIGlucHV0W3R5cGU9XCJyYWRpb1wiXSB7XG4vLyAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG5cbi8vICAgJjpjaGVja2VkIHtcbi8vICAgICBib3gtc2hhZG93OiAkZ2xvdy1zaGFkb3c7XG4vLyAgICAgYm94LXNoYWRvdzogJGdsb3ctc2hhZG93LCBpbnNldCAwIDAuMTJlbSAwLjFlbSB0cmFuc3BhcmVudGl6ZSh3aGl0ZSwgMC43NSk7XG4vLyAgICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMC4xNWVtO1xuLy8gICB9XG4vLyB9XG5cbi8vIC5jaGVja3RleHQge1xuLy8gICB3aWR0aDogYXV0bztcbi8vICAgbWFyZ2luOiAwLjVlbTtcblxuLy8gICBpbnB1dCB7XG4vLyAgICAgZGlzcGxheTogbm9uZTtcblxuLy8gICAgICsgc3BhbiB7XG4vLyAgICAgICBAZXh0ZW5kIGJ1dHRvbjtcblxuLy8gICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4vLyAgICAgICBwYWRkaW5nOiAxZW07XG4vLyAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwcztcbi8vICAgICB9XG5cbi8vICAgICAmOmNoZWNrZWQgKyBzcGFuIHtcbi8vICAgICAgIEBleHRlbmQgLmJsdWUtYnV0dG9uO1xuXG4vLyAgICAgICBwYWRkaW5nOiAxZW07XG4vLyAgICAgfVxuLy8gICB9XG4vLyB9XG5cbi8vIC5zd2l0Y2gge1xuLy8gICAkX2hlaWdodDogMnJlbTtcbi8vICAgJF93aWR0aDogOHJlbTtcbi8vICAgJF9oYW5kbGUtd2lkdGg6ICRfaGVpZ2h0O1xuLy8gICAkX2hhbmRsZS10cmFuc2xhdGlvbjogJF93aWR0aCAtICRfaGFuZGxlLXdpZHRoO1xuXG4vLyAgIGhlaWdodDogJF9oZWlnaHQ7XG4vLyAgIHdpZHRoOiAkX3dpZHRoO1xuLy8gICBwYWRkaW5nOiAwO1xuLy8gICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbi8vICAgaW5wdXQge1xuLy8gICAgIGRpc3BsYXk6IG5vbmU7XG5cbi8vICAgICArIGRpdiB7XG4vLyAgICAgICBoZWlnaHQ6IDEwMCU7XG4vLyAgICAgICB3aWR0aDogMTAwJTtcbi8vICAgICAgIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xuLy8gICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4vLyAgICAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBib3gtc2hhZG93LCBiYWNrZ3JvdW5kLWNvbG9yO1xuLy8gICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4ycztcbi8vICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuMnM7XG4vLyAgICAgICBib3gtc2hhZG93OiAzcHggM3B4IDJweCAtMnB4IHRyYW5zcGFyZW50aXplKGJsYWNrLCAwLjkpLFxuLy8gICAgICAgICBpbnNldCAycHggMnB4IDJweCAxcHggdHJhbnNwYXJlbnRpemUoYmxhY2ssIDAuOSksXG4vLyAgICAgICAgIGluc2V0IC0ycHggLTJweCAxcHggd2hpdGU7XG5cbi8vICAgICAgICY6OmJlZm9yZSB7XG4vLyAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4vLyAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuLy8gICAgICAgICBoZWlnaHQ6IGNhbGMoI3skX2hhbmRsZS13aWR0aH0gKyA0cHgpO1xuLy8gICAgICAgICB3aWR0aDogY2FsYygjeyRfaGFuZGxlLXdpZHRofSArIDRweCk7XG4vLyAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4vLyAgICAgICAgIGJvcmRlcjogc29saWQgd2hpdGUgM3B4O1xuLy8gICAgICAgICBiYWNrZ3JvdW5kOiAkYmx1ZTtcbi8vICAgICAgICAgYm94LXNoYWRvdzogMCAzcHggMTBweCB0cmFuc3BhcmVudGl6ZShibGFjaywgMC44KSxcbi8vICAgICAgICAgICBpbnNldCAwIC0xcHggM3B4IHRyYW5zcGFyZW50aXplKGJsYWNrLCAwLjkpO1xuLy8gICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNnB4KTtcbi8vICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnM7XG4vLyAgICAgICB9XG4vLyAgICAgfVxuXG4vLyAgICAgJjpjaGVja2VkICsgZGl2IHtcbi8vICAgICAgIGJhY2tncm91bmQ6ICRibHVlO1xuLy8gICAgICAgYm94LXNoYWRvdzogJGdsb3ctc2hhZG93LCBpbnNldCAwIDJweCAycHggMnB4IHRyYW5zcGFyZW50aXplKGJsYWNrLCAwLjcpLFxuLy8gICAgICAgICBpbnNldCAwIDAgdHJhbnNwYXJlbnQ7XG5cbi8vICAgICAgICY6OmJlZm9yZSB7XG4vLyAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKCRfaGFuZGxlLXRyYW5zbGF0aW9uLCAtNnB4KTtcbi8vICAgICAgIH1cbi8vICAgICB9XG4vLyAgIH1cbi8vIH1cblxuLy8gaHIge1xuLy8gICBAZXh0ZW5kIC5pbnNldDtcbi8vICAgd2lkdGg6IDcyJTtcbi8vICAgaGVpZ2h0OiA4cHg7XG4vLyAgIGZsb2F0OiByaWdodDtcbi8vICAgYm9yZGVyOiAwO1xuLy8gfVxuXG4vLyBjb2RlLFxuLy8gcHJlIHtcbi8vICAgcGFkZGluZzogMC41ZW0gMWVtO1xuLy8gICBib3JkZXItcmFkaXVzOiA0cHg7XG4vLyAgIG92ZXJmbG93OiBhdXRvO1xuLy8gICBib3gtc2hhZG93OiAwIDVweCAzMHB4IDAgdHJhbnNwYXJlbnRpemUoYmxhY2ssIDAuOTUpO1xuLy8gfVxuXG4vLyBjb2RlIHtcbi8vICAgYmFja2dyb3VuZDogI2U2ZTZlNjtcbi8vIH1cblxuLy8gcHJlIHtcbi8vICAgYmFja2dyb3VuZDogd2hpdGU7XG4vLyAgIG1hcmdpbjogNGVtIDA7XG4vLyB9XG5cbi8vIGNvZGUsXG4vLyBwcmUge1xuLy8gICAmLFxuLy8gICAmICoge1xuLy8gICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuLy8gICAgIGxpbmUtaGVpZ2h0OiAyZW07XG4vLyAgICAgY3Vyc29yOiBhdXRvO1xuLy8gICAgIHVzZXItc2VsZWN0OiB0ZXh0O1xuLy8gICAgIC13ZWJraXQtdG91Y2gtY2FsbG91dDogdGV4dDtcbi8vICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiB0ZXh0O1xuLy8gICAgIC1raHRtbC11c2VyLXNlbGVjdDogdGV4dDtcbi8vICAgICAtbW96LXVzZXItc2VsZWN0OiB0ZXh0O1xuLy8gICAgIC1tcy11c2VyLXNlbGVjdDogdGV4dDtcbi8vICAgfVxuLy8gfVxuXG4vLyBibG9ja3F1b3RlIHtcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4vLyAgIHBhZGRpbmc6IDAuNWVtIDFlbTtcbi8vICAgYm9yZGVyLXJhZGl1czogNHB4O1xuLy8gICBib3gtc2hhZG93OiAwIDVweCAzMHB4IDAgdHJhbnNwYXJlbnRpemUoYmxhY2ssIDAuOTUpO1xuLy8gICBib3JkZXItbGVmdDogNnB4IHNvbGlkICRibHVlO1xuLy8gfVxuIiwiQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdDYXZlYXQnO1xuICAgIHNyYzogdXJsKCcuLi8uLi9mb250cy9Cb2xkL0NhdmVhdC1Cb2xkLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxuICAgICAgICB1cmwoJy4uLy4uL2ZvbnRzL0JvbGQvQ2F2ZWF0LUJvbGQud29mZicpIGZvcm1hdCgnd29mZicpO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LWRpc3BsYXk6IHN3YXA7XG59XG5cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnQ2F2ZWF0JztcbiAgICBzcmM6IHVybCgnLi4vLi4vZm9udHMvUmVndWxhci9DYXZlYXQtUmVndWxhci53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcbiAgICAgICAgdXJsKCcuLi8uLi9mb250cy9SZWd1bGFyL0NhdmVhdC1SZWd1bGFyLndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LWRpc3BsYXk6IHN3YXA7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ0ZpZ3VyaW5lU3ltYm9sVDEnO1xuICBzcmM6IHVybCgnLi4vLi4vZm9udHMvM3JkIFBhcnR5L0NoZXNzVmFyaWFudHMvRmlndXJpbmVTeW1ib2xUMUJvbGQud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXG4gICAgICB1cmwoJy4uLy4uL2ZvbnRzLzNyZCBQYXJ0eS9DaGVzc1ZhcmlhbnRzL0ZpZ3VyaW5lU3ltYm9sVDFCb2xkLndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdGaWd1cmluZVN5bWJvbFQxJztcbiAgc3JjOiB1cmwoJy4uLy4uL2ZvbnRzLzNyZCBQYXJ0eS9DaGVzc1ZhcmlhbnRzL0ZpZ3VyaW5lU3ltYm9sVDEud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXG4gICAgICB1cmwoJy4uLy4uL2ZvbnRzLzNyZCBQYXJ0eS9DaGVzc1ZhcmlhbnRzL0ZpZ3VyaW5lU3ltYm9sVDEud29mZicpIGZvcm1hdCgnd29mZicpO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbn1cblxuIiwiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkNhdmVhdFwiO1xuICBzcmM6IHVybChcIi4uLy4uL2ZvbnRzL0JvbGQvQ2F2ZWF0LUJvbGQud29mZjJcIikgZm9ybWF0KFwid29mZjJcIiksIHVybChcIi4uLy4uL2ZvbnRzL0JvbGQvQ2F2ZWF0LUJvbGQud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiQ2F2ZWF0XCI7XG4gIHNyYzogdXJsKFwiLi4vLi4vZm9udHMvUmVndWxhci9DYXZlYXQtUmVndWxhci53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKSwgdXJsKFwiLi4vLi4vZm9udHMvUmVndWxhci9DYXZlYXQtUmVndWxhci53b2ZmXCIpIGZvcm1hdChcIndvZmZcIik7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkZpZ3VyaW5lU3ltYm9sVDFcIjtcbiAgc3JjOiB1cmwoXCIuLi8uLi9mb250cy8zcmQgUGFydHkvQ2hlc3NWYXJpYW50cy9GaWd1cmluZVN5bWJvbFQxQm9sZC53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKSwgdXJsKFwiLi4vLi4vZm9udHMvM3JkIFBhcnR5L0NoZXNzVmFyaWFudHMvRmlndXJpbmVTeW1ib2xUMUJvbGQud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiRmlndXJpbmVTeW1ib2xUMVwiO1xuICBzcmM6IHVybChcIi4uLy4uL2ZvbnRzLzNyZCBQYXJ0eS9DaGVzc1ZhcmlhbnRzL0ZpZ3VyaW5lU3ltYm9sVDEud29mZjJcIikgZm9ybWF0KFwid29mZjJcIiksIHVybChcIi4uLy4uL2ZvbnRzLzNyZCBQYXJ0eS9DaGVzc1ZhcmlhbnRzL0ZpZ3VyaW5lU3ltYm9sVDEud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbn1cbi8qKioqKioqKioqKioqKioqKioqIE1lbnUgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIENvbnRhaW5lciBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBDb250YWluZXIgVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgQ29udGFpbmVyIFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIEhpZ2hsaWdodCBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBBbm5vdGF0aW9uIFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIFZhcmlhdGlvbiBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBQbHkgVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqKiBDb250cm9sIENvbG9ycyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKiogQm9hcmQgQ29sb3JzICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbjpyb290IHtcbiAgLS1iZy1jb2xvcjogI2YyZjNmNztcbiAgLS1mZy1jb2xvcjogIzM4M2E0MTtcbiAgLS1yZWQ6ICNlNDMwMzA7XG4gIC0tZ3JlZW46ICMxOWExODc7XG4gIC0tYmx1ZTogIzM2N2JmMDtcbiAgLS1kYXJrLWJsdWU6ICMyNjVhYjE7XG4gIC0tbWFyb29uOiAjYjgxNzRjO1xuICAtLXB1cnBsZTogIzhjNDJhYjtcbn1cblxuLm1lbnUtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW4tbGVmdDogMjRweDtcbiAgbWFyZ2luLXJpZ2h0OiAyNDBweDtcbiAgbWluLXdpZHRoOiAyNDBweDtcbiAgb3ZlcmZsb3cteTogd3JhcDtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmlucHV0LWJveCB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBjb2xvcjogYmxhY2s7XG4gIGJvcmRlcjogYmxhY2sgMXB4IHNvbGlkO1xuICB3aWR0aDogODAlO1xuICBoZWlnaHQ6IGNhbGMoOTYlIC0gNzJweCk7XG4gIHRvcDogMjRweDtcbiAgbWFyZ2luLXRvcDogMTJweDtcbiAgbGVmdDogMTAlO1xufVxuXG4uYWNjZXB0LXBnbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiA4cHg7XG4gIHJpZ2h0OiAyNHB4O1xuICBtYXJnaW4tdG9wOiA4cHg7XG4gIGhlaWdodDogNzJweDtcbiAgd2lkdGg6IDI0MHB4O1xuICBjb2xvcjogdmFyKC0tY3NDb2xvcik7XG4gIGJhY2tncm91bmQ6IHZhcigtLWNzQmFja2dyb3VuZCk7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PgnMenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'pgn-menu',
                templateUrl: './pgn-menu.component.html',
                styleUrls: ['./pgn-menu.component.scss']
            }]
    }], function () { return [{ type: _services_olga_service__WEBPACK_IMPORTED_MODULE_1__["OlgaService"] }]; }, { container: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['container']
        }] }); })();


/***/ }),

/***/ "./src/app/olga-menu/score-item-menu/score-item-menu.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/olga-menu/score-item-menu/score-item-menu.component.ts ***!
  \************************************************************************/
/*! exports provided: ScoreItemMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScoreItemMenu", function() { return ScoreItemMenu; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


function ScoreItemMenu_mat_grid_list_5_mat_grid_tile_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-grid-tile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "variation-item", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const variation_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", variation_r2);
} }
function ScoreItemMenu_mat_grid_list_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-grid-list", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ScoreItemMenu_mat_grid_list_5_mat_grid_tile_1_Template, 2, 1, "mat-grid-tile", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cols", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.variations);
} }
class ScoreItemMenu {
    constructor() {
        this.data = null;
        this.menuTitle = 'Menu Title';
        this.variations = [];
        this.item = null;
        this.open = false;
    }
    ngOnInit() {
        if (this.data) {
            this.variations = this.data.move.variations();
        }
    }
    ngAfterViewInit() {
    }
    ignoreEvent(event) {
        //console.log('Ignoring ' + event);
        event.preventDefault();
        event.stopPropagation();
    }
    openAt(item) {
        this.data = item;
        this.variations = this.data.move.variations();
        this.menuTitle = item.move.notation();
        this.open = true;
    }
    resize(size) {
    }
}
ScoreItemMenu.ɵfac = function ScoreItemMenu_Factory(t) { return new (t || ScoreItemMenu)(); };
ScoreItemMenu.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ScoreItemMenu, selectors: [["score-item-menu"]], inputs: { data: "data", menuTitle: "menuTitle" }, outputs: { variations: "variations", item: "item" }, decls: 6, vars: 2, consts: [[1, "gs-context-menu-container", 3, "click"], ["rowHeight", "72px", 3, "cols", 4, "ngIf"], ["rowHeight", "72px", 3, "cols"], [4, "ngFor", "ngForOf"], [3, "data"]], template: function ScoreItemMenu_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScoreItemMenu_Template_div_click_0_listener() { return ctx.open = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Variations");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ScoreItemMenu_mat_grid_list_5_Template, 2, 2, "mat-grid-list", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("-> ", ctx.menuTitle, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data !== null);
    } }, styles: ["@font-face {\n  font-family: \"Caveat\";\n  src: url('Caveat-Bold.woff2') format(\"woff2\"), url('Caveat-Bold.woff') format(\"woff\");\n  font-weight: bold;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"Caveat\";\n  src: url('Caveat-Regular.woff2') format(\"woff2\"), url('Caveat-Regular.woff') format(\"woff\");\n  font-weight: 600;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"FigurineSymbolT1\";\n  src: url('FigurineSymbolT1Bold.woff2') format(\"woff2\"), url('FigurineSymbolT1Bold.woff') format(\"woff\");\n  font-weight: bold;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"FigurineSymbolT1\";\n  src: url('FigurineSymbolT1.woff2') format(\"woff2\"), url('FigurineSymbolT1.woff') format(\"woff\");\n  font-weight: 600;\n  font-style: normal;\n  font-display: swap;\n}\n\n\n\n\n\n\n\n\n\n\n[_ngcontent-%COMP%]:root {\n  --bg-color: #f2f3f7;\n  --fg-color: #383a41;\n  --red: #e43030;\n  --green: #19a187;\n  --blue: #367bf0;\n  --dark-blue: #265ab1;\n  --maroon: #b8174c;\n  --purple: #8c42ab;\n}\n.gs-context-menu-container[_ngcontent-%COMP%] {\n  background-color: var(--bgContext);\n  border-radius: 4px;\n  border: var(--borderContext);\n  background: var(--gsBackground);\n  position: absolute;\n  display: flexbox;\n  width: 100%;\n  height: 100%;\n  top: 0px;\n  left: 0px;\n  overflow: auto;\n}\n.gs-context-menu-overaly[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  left: 0px;\n  top: 0px;\n  text-align: center;\n}\n.gs-context-menu-overaly[_ngcontent-%COMP%]   .context-menu-button[_ngcontent-%COMP%] {\n  background: var(--item-bg);\n  border: var(--borderContext);\n  color: var(--textColorContext);\n  margin: 8px;\n  height: 10%;\n  top: 15%;\n  text-align: center;\n  line-height: 10%;\n}\nmat-card-title[_ngcontent-%COMP%] {\n  color: var(--textColorContext);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMuc2NzcyIsInNyYy9hc3NldHMvc2Nzcy9tb2R1bGVzL19mb250cy5zY3NzIiwic3JjL2FwcC9vbGdhLW1lbnUvc2NvcmUtaXRlbS1tZW51L3Njb3JlLWl0ZW0tbWVudS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4RUFBQTtBQ0FBO0VBQ0kscUJBQUE7RUFDQSxxRkFBQTtFQUVBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0NKO0FERUE7RUFDSSxxQkFBQTtFQUNBLDJGQUFBO0VBRUEsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDREo7QURJQTtFQUNFLCtCQUFBO0VBQ0EsdUdBQUE7RUFFQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNIRjtBRE1BO0VBQ0UsK0JBQUE7RUFDQSwrRkFBQTtFQUVBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0xGO0FGYUEsK0VBQUE7QUFHQSwrRUFBQTtBQVFBLCtFQUFBO0FBTUEsK0VBQUE7QUFNQSwrRUFBQTtBQU1BLGdGQUFBO0FBS0EsK0VBQUE7QUFLQSx5RUFBQTtBQUtBLHlFQUFBO0FBSUEsdUVBQUE7QUFnQkE7RUFDRSxtQkFBQTtFQUNBLG1CQUFBO0VBRUEsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBRWxFRjtBQTlDQTtFQUNFLGtDRndCVTtFRXZCVixrQkFBQTtFQUNBLDRCRndCYztFRXZCZCwrQkZ3Q2E7RUV2Q2Isa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0FBaURGO0FBL0NBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0Esa0JBQUE7QUFrREY7QUFqREU7RUFDRSwwQkZnQk07RUVmTiw0QkZLWTtFRUpaLDhCRkdlO0VFRmYsV0FBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQW1ESjtBQS9DQTtFQUNFLDhCRlBpQjtBRXlEbkIiLCJmaWxlIjoic3JjL2FwcC9vbGdhLW1lbnUvc2NvcmUtaXRlbS1tZW51L3Njb3JlLWl0ZW0tbWVudS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cblxuQGltcG9ydCBcIi4vYXNzZXRzL3Njc3MvbW9kdWxlcy9fZm9udHMuc2Nzc1wiO1xuJGdhbWVzY29yZS1mYW1pbHk6IFwiRmlndXJpbmVTeW1ib2xUMVwiO1xuJGdhbWVzY29yZS1oaWdobGlnaHQ6ICM1ODU4NThmZjtcbiRnYW1lc2NvcmUtZm9yZWdyb3VuZDogd2hpdGU7XG5cbiRyZWQ6ICNlNDMwMzA7XG4kZ3JlZW46ICMxOWExODc7XG4kbGlnaHQtYmx1ZTogIzAwZmZmZmZmO1xuJGJsdWU6ICMzNjdiZjA7XG4kZGFyay1ibHVlOiAjMjY1YWIxO1xuJG1hcm9vbjogI2I4MTc0YztcbiRwdXJwbGU6ICM4YzQyYWI7XG5cbi8vIE1haW4gT0xHQSBDb2xvciBFbGVtZW50IFZhcmlhYmxlc1xuJHRleHRDb2xvcjogdmFyKC0tdGV4dENvbG9yKTsgLy8gTWFpbiBUZXh0IENvbG9yXG4kdGV4dENvbG9yQXR0ZW50aW9uOiB2YXIoLS10ZXh0Q29sb3JBdHRlbnRpb24pOyAvLyBBdHRlbnRpb24gdGV4dFxuJHRleHRDb2xvclJlbW92ZTogdmFyKC0tdGV4dENvbG9yUmVtb3ZlKTsgLy8gUmVtb3ZlL0RlbGV0ZS9DbG9zZVxuJHRleHRDb2xvckFkZDogdmFyKC0tdGV4dENvbG9yQWRkKTsgLy8gQWRkL0NyZWF0ZS9PcGVuXG4kdGV4dENvbG9yQWN0aXZlOiB2YXIoLS10ZXh0Q29sb3JBY3RpdmUpOyAvLyBBZGQvQ3JlYXRlL09wZW5cbiRiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kKTsgLy8gTWFpbiBiYWNrZ3JvdW5kIENvbG9yXG4kYmdDb250YWluZXI6IHZhcigtLWJnQ29udGFpbmVyKTsgLy8gYmFja2dyb3VuZCBvZiBDb250YWluZXJzXG4kYmdNZW51OiB2YXIoLS1iZ01lbnUpOyAvLyBiYWNrZ3JvdW5kIG9mIE1lbnVzXG4kYmdJdGVtOiB2YXIoLS1iZ0l0ZW0pOyAvLyBiYWNrZ3JvdW5kIG9mIEl0ZW1zXG5cbi8vIENvbnRleHQgTWVudVxuJGJnQ29udGV4dDogdmFyKC0tYmdDb250ZXh0KTsgLy8gYmFja2dyb3VuZCBvZiBDb250ZXh0IE1lbnVcbiR0ZXh0Q29sb3JDb250ZXh0OiB2YXIoLS10ZXh0Q29sb3JDb250ZXh0KTsgLy8gdGV4dCBjb2xvciBDb250ZXh0IE1lbnVcbiRib3JkZXJDb250ZXh0OiB2YXIoLS1ib3JkZXJDb250ZXh0KTsgLy8gYm9yZGVyIENvbnRleHQgTWVudVxuJG92ZXJsYXlDb250ZXh0QmFja2dyb3VuZDogdmFyKFxuICAtLW92ZXJsYXlDb250ZXh0QmFja2dyb3VuZFxuKTsgLy8gQ29udGV4dCBNZW51IE92ZXJsYXkgYmFja2dyb3VuZCBtYWluXG4kb3ZlcmxheUNvbnRleHRCYWNrZ3JvdW5kR3JhZGllbnQ6IHZhcihcbiAgLS1vdmVybGF5Q29udGV4dEJhY2tncm91bmRHcmFkaWVudFxuKTsgLy8gQ29udGV4dCBNZW51IGJhY2tncm91bmQgZ3JhZGllbnRcblxuJGl0ZW06IHZhcigtLWl0ZW0pO1xuJGl0ZW0tY29udHJhc3Q6IHZhcigtLWl0ZW0tY29udHJhc3QpO1xuJGl0ZW0tYmc6IHZhcigtLWl0ZW0tYmcpO1xuXG4vKioqKioqKioqKioqKioqKioqKiBNZW51ICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuJG1lQmFja2dyb3VuZDogdmFyKC0tbWVCYWNrZ3JvdW5kKTtcblxuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBDb250YWluZXIgVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiRnc1RleHRDb2xvcjogdmFyKC0tZ3NUZXh0Q29sb3IpOyAvLyBUZXh0IGNvbG9yIGZvciBnYW1lIHNjb3JlXG4kZ3NCYWNrZ3JvdW5kOiB2YXIoLS1nc0JhY2tncm91bmQpOyAvLyBiYWNrZ3JvdW5kIG9mIENvbnRhaW5lcnNcbiRnc0xpc3RCYWNrZ3JvdW5kOiB2YXIoLS1nc0xpc3RCYWNrZ3JvdW5kKTsgLy8gbGlzdCBiYWNrZ3JvdW5kIG9mIGdhbWUgc2NvcmVcbiRnc0JvcmRlcjogdmFyKC0tZ3NCb3JkZXIpOyAvLyBiYWNrZ3JvdW5kIG9mIE1lbnVzXG4kZ3NUZXh0U2l6ZTogdmFyKC0tZ3NUZXh0U2l6ZSk7IC8vIGJhY2tncm91bmQgb2YgTWVudXNcbiRnc0ZvbnRGYW1pbHk6IHZhcigtLWdzRm9udEZhbWlseSk7IC8vIHNjb3JlIGZvbnRcblxuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBDb250YWluZXIgVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiRnc1RleHRDb2xvck1XOiB2YXIoLS1nc1RleHRDb2xvck1XKTsgLy8gVGV4dCBjb2xvciBmb3IgZ2FtZSBzY29yZVxuJGdzQmFja2dyb3VuZE1XOiB2YXIoLS1nc0JhY2tncm91bmRNVyk7IC8vIGJhY2tncm91bmQgb2YgQ29udGFpbmVyc1xuJGdzQm9yZGVyTVc6IHZhcigtLWdzQm9yZGVyTVcpOyAvLyBiYWNrZ3JvdW5kIG9mIE1lbnVzXG4kZ3NUZXh0U2l6ZU1XOiB2YXIoLS1nc1RleHRTaXplTVcpOyAvLyBiYWNrZ3JvdW5kIG9mIE1lbnVzXG5cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgQ29udGFpbmVyIFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4kZ3NUZXh0Q29sb3JNQjogdmFyKC0tZ3NUZXh0Q29sb3JNQik7IC8vIFRleHQgY29sb3IgZm9yIGdhbWUgc2NvcmVcbiRnc0JhY2tncm91bmRNQjogdmFyKC0tZ3NCYWNrZ3JvdW5kTUIpOyAvLyBiYWNrZ3JvdW5kIG9mIENvbnRhaW5lcnNcbiRnc0JvcmRlck1COiB2YXIoLS1nc0JvcmRlck1CKTsgLy8gYmFja2dyb3VuZCBvZiBNZW51c1xuJGdzVGV4dFNpemVNQjogdmFyKC0tZ3NUZXh0U2l6ZU1CKTsgLy8gYmFja2dyb3VuZCBvZiBNZW51c1xuXG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIEhpZ2hsaWdodCBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuJGdzVGV4dENvbG9ySEc6IHZhcigtLWdzVGV4dENvbG9ySEcpOyAvLyBUZXh0IGNvbG9yIGZvciBoaWdobGlnaHRcbiRnc0Fubm90YXRpb25Db2xvckhHOiB2YXIoLS1nc0Fubm90YXRpb25Db2xvckhHKTsgLy8gQW5ub3RhdGlvbi9Db21tZW50IGNvbG9yIGZvciBoaWdobGlnaHRcbiRnc0JhY2tncm91bmRIRzogdmFyKC0tZ3NCYWNrZ3JvdW5kSEcpOyAvLyBiYWNrZ3JvdW5kIGZvciBoaWdobGlnaHRcbiRnc0JvcmRlckhHOiB2YXIoLS1nc0JvcmRlckhHKTsgLy8gYm9yZGVyIGZvciBoaWdobGlnaHRcblxuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBBbm5vdGF0aW9uIFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4kZ3NUZXh0Q29sb3JBTjogdmFyKC0tZ3NUZXh0Q29sb3JBTik7IC8vIFRleHQgY29sb3IgZm9yIGhpZ2hsaWdodFxuJGdzQmFja2dyb3VuZEFOOiB2YXIoLS1nc0JhY2tncm91bmRBTik7IC8vIGJhY2tncm91bmQgZm9yIGhpZ2hsaWdodFxuJGdzQm9yZGVyQU46IHZhcigtLWdzQm9yZGVyQU4pOyAvLyBib3JkZXIgZm9yIGhpZ2hsaWdodFxuXG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIFZhcmlhdGlvbiBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuJGdzVGV4dENvbG9yVkE6IHZhcigtLWdzVGV4dENvbG9yVkEpOyAvLyBUZXh0IGNvbG9yIGZvciBoaWdobGlnaHRcbiRnc0JhY2tncm91bmRWQTogdmFyKC0tZ3NCYWNrZ3JvdW5kVkEpOyAvLyBiYWNrZ3JvdW5kIGZvciBoaWdobGlnaHRcbiRnc0JvcmRlclZBOiB2YXIoLS1nc0JvcmRlclZBKTsgLy8gYm9yZGVyIGZvciBoaWdobGlnaHRcblxuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBQbHkgVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiRnc1RleHRDb2xvclBDOiB2YXIoLS1nc1RleHRDb2xvclBDKTsgLy8gVGV4dCBjb2xvciBmb3IgZ2FtZSBzY29yZSBwbHlcbiRnc0JhY2tncm91bmRQQzogdmFyKC0tZ3NCYWNrZ3JvdW5kUEMpOyAvLyBiYWNrZ3JvdW5kIGZvciBnYW1lIHNjb3JlIHBseVxuJGdzQm9yZGVyUEM6IHZhcigtLWdzQm9yZGVyUEMpOyAvLyBib3JkZXIgZm9yIGdhbWUgc2NvcmUgcGx5XG5cbi8qKioqKioqKioqKioqKioqKioqKiBDb250cm9sIENvbG9ycyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4kY3NCYWNrZ3JvdW5kOiB2YXIoLS1jc0JhY2tncm91bmQpOyAvLyBiYWNrZ3JvdW5kIGZvciBjb250cm9sc1xuJGNzQ29sb3I6IHZhcigtLWNzQ29sb3IpOyAvLyBjb250cm9scyBjb2xvciAoZm9yZWdyb3VuZClcblxuLyoqKioqKioqKioqKioqKioqKioqIEJvYXJkIENvbG9ycyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4kYm9hcmRCR0Rhcms6IHZhcigtLWJvYXJkQkdEYXJrKTsgLy8gYm9hcmQgZGFyayB0aWxlXG4kYm9hcmRCR0xpZ2h0OiB2YXIoLS1ib2FyZEJHTGlnaHQpOyAvLyBib2FyZCBsaWdodCB0aWxlXG4kYm9hcmRMYWJlbExpZ2h0OiB2YXIoLS1ib2FyZExhYmVsTGlnaHQpOyAvLyBib2FyZCBsaWdodCBsYWJlbFxuJGJvYXJkTGFiZWxEYXJrOiB2YXIoLS1ib2FyZExhYmVsRGFyayk7IC8vIGJvYXJkIGRhcmsgbGFiZWxcblxuLy8gR2VuZXJhbCBzdHVmZlxuJHRleHQtY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xuJGJnLW91dGVyOiB2YXIoLS1iZy1vdXRlcik7XG4kYmctaW5uZXI6IHZhcigtLWJnLWlubmVyKTtcblxuJGJnLWNvbG9yOiAjZjJmM2Y3O1xuJGZnLWNvbG9yOiAjMzgzYTQxO1xuXG4kZ2xvdy1zaGFkb3c6IDAgMCAwLjVlbSB0cmFuc3BhcmVudGl6ZSgkYmx1ZSwgMC4zKTtcblxuOnJvb3Qge1xuICAtLWJnLWNvbG9yOiAjeyRiZy1jb2xvcn07XG4gIC0tZmctY29sb3I6ICN7JGZnLWNvbG9yfTtcblxuICAtLXJlZDogI3skcmVkfTtcbiAgLS1ncmVlbjogI3skZ3JlZW59O1xuICAtLWJsdWU6ICN7JGJsdWV9O1xuICAtLWRhcmstYmx1ZTogI3skZGFyay1ibHVlfTtcbiAgLS1tYXJvb246ICN7JG1hcm9vbn07XG4gIC0tcHVycGxlOiAjeyRwdXJwbGV9O1xufVxuXG4vLyA6Oi1tb3otZm9jdXMtaW5uZXIsXG4vLyA6LW1vei1mb2N1c3Jpbmcge1xuLy8gICBib3JkZXI6IDA7XG4vLyAgIGNvbG9yOiB0cmFuc3BhcmVudDtcbi8vICAgdGV4dC1zaGFkb3c6IDAgMCAwICRmZy1jb2xvcjtcbi8vIH1cblxuLy8gOjpzZWxlY3Rpb24sXG4vLyA6Oi1tb3otc2VsZWN0aW9uIHtcbi8vICAgY29sb3I6IHdoaXRlO1xuLy8gICBiYWNrZ3JvdW5kOiBibGFjaztcbi8vIH1cblxuLy8gKiB7XG4vLyAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4vLyAgIG91dGxpbmU6IG5vbmU7XG4vLyAgIHVzZXItc2VsZWN0OiBub25lO1xuLy8gICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XG4vLyAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4vLyAgIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTtcbi8vICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbi8vICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuLy8gICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4vLyAgIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbi8vICAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApICFpbXBvcnRhbnQ7XG4vLyAgIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcbi8vICAgY3Vyc29yOiBkZWZhdWx0O1xuLy8gICBsZXR0ZXItc3BhY2luZzogMDtcbi8vIH1cblxuLy8gLnNlbGVjdGFibGUsXG4vLyAuc2VsZWN0YWJsZSAqIHtcbi8vICAgY3Vyc29yOiBhdXRvO1xuLy8gICB1c2VyLXNlbGVjdDogdGV4dDtcbi8vICAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiB0ZXh0O1xuLy8gICAtd2Via2l0LXVzZXItc2VsZWN0OiB0ZXh0O1xuLy8gICAta2h0bWwtdXNlci1zZWxlY3Q6IHRleHQ7XG4vLyAgIC1tb3otdXNlci1zZWxlY3Q6IHRleHQ7XG4vLyAgIC1tcy11c2VyLXNlbGVjdDogdGV4dDtcbi8vIH1cblxuLy8gaHRtbCxcbi8vIGJvZHkge1xuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmctY29sb3I7XG4vLyAgIGNvbG9yOiAkZmctY29sb3I7XG4vLyAgIG1hcmdpbjogMDtcbi8vICAgcGFkZGluZzogMDtcbi8vICAgZm9udC1zaXplOiAxMHB0O1xuLy8gICBoZWlnaHQ6IDEwMCU7XG4vLyAgIG92ZXJmbG93OiBhdXRvO1xuLy8gfVxuXG4vLyAud2l0aC1zaGFkb3cge1xuLy8gICBib3gtc2hhZG93OiA2cHggNnB4IDEwcHggdHJhbnNwYXJlbnRpemUoYmxhY2ssIDAuOSksIC02cHggLTZweCAxMHB4IHdoaXRlO1xuLy8gfVxuXG4vLyAub3V0c2V0IHtcbi8vICAgQGV4dGVuZCAud2l0aC1zaGFkb3c7XG5cbi8vICAgYm9yZGVyLXJhZGl1czogMTBweDtcbi8vICAgYmFja2dyb3VuZDogJGJnLWNvbG9yO1xuLy8gfVxuXG4vLyAuaW5zZXQge1xuLy8gICBib3JkZXItcmFkaXVzOiAxMHB4O1xuLy8gICBib3gtc2hhZG93OiAwIDAgdHJhbnNwYXJlbnQsIDAgMCB0cmFuc3BhcmVudCxcbi8vICAgICBpbnNldCAzcHggM3B4IDVweCB0cmFuc3BhcmVudGl6ZShibGFjaywgMC45KSwgaW5zZXQgLTNweCAtM3B4IDVweCB3aGl0ZTtcbi8vICAgYmFja2dyb3VuZDogbGlnaHRlbigkYmctY29sb3IsIDIlKTtcbi8vIH1cblxuLy8gLnBhcGVyIHtcbi8vICAgQGV4dGVuZCAub3V0c2V0O1xuLy8gICBwYWRkaW5nOiAxMHB4IDIwcHggMjBweDtcbi8vICAgbWFyZ2luLXRvcDogMjBweDtcbi8vICAgbWluLWhlaWdodDogMTAwcHg7XG4vLyAgIGZvbnQtc2l6ZTogMS4yZW07XG4vLyAgIGJhY2tncm91bmQ6ICRiZy1jb2xvcjtcbi8vIH1cblxuLy8gc2VjdGlvbixcbi8vIGFydGljbGUsXG4vLyAuc2VjdGlvbixcbi8vIC5hcnRpY2xlLFxuLy8gLnBhcGVyIHtcbi8vICAgbGluZS1oZWlnaHQ6IDJlbTtcbi8vICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuLy8gICB3b3JkLWJyZWFrOiBub3JtYWw7XG4vLyAgIGxpbmUtaGVpZ2h0OiAyZW07XG4vLyB9XG5cbi8vIGlucHV0W3R5cGU9XCJ0ZXh0XCJdLFxuLy8gaW5wdXRbdHlwZT1cInNlYXJjaFwiXSxcbi8vIGlucHV0W3R5cGU9XCJ0ZWxcIl0sXG4vLyBpbnB1dFt0eXBlPVwidXJsXCJdLFxuLy8gaW5wdXRbdHlwZT1cImVtYWlsXCJdLFxuLy8gaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJdLFxuLy8gaW5wdXRbdHlwZT1cImRhdGVcIl0sXG4vLyBpbnB1dFt0eXBlPVwibW9udGhcIl0sXG4vLyBpbnB1dFt0eXBlPVwid2Vla1wiXSxcbi8vIGlucHV0W3R5cGU9XCJ0aW1lXCJdLFxuLy8gaW5wdXRbdHlwZT1cIm51bWJlclwiXSxcbi8vIGlucHV0W3R5cGU9XCJjb2xvclwiXSxcbi8vIHNlbGVjdCxcbi8vIHRleHRhcmVhIHtcbi8vICAgYm9yZGVyOiAwO1xuLy8gICBiYWNrZ3JvdW5kOiAkYmctY29sb3I7XG4vLyAgIGNvbG9yOiAkZmctY29sb3I7XG4vLyAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4vLyAgIHBhZGRpbmc6IDAgMS4yNWVtO1xuLy8gICBsaW5lLWhlaWdodDogMS4yNWVtO1xuLy8gICBoZWlnaHQ6IDMuNWVtO1xuLy8gICBtYXJnaW46IDEwcHggMDtcbi8vICAgZm9udC1zaXplOiAxLjFyZW07XG4vLyAgIGN1cnNvcjogdGV4dDtcbi8vICAgdXNlci1zZWxlY3Q6IHRleHQ7XG4vLyAgIC13ZWJraXQtdG91Y2gtY2FsbG91dDogdGV4dDtcbi8vICAgLXdlYmtpdC11c2VyLXNlbGVjdDogdGV4dDtcbi8vICAgLWtodG1sLXVzZXItc2VsZWN0OiB0ZXh0O1xuLy8gICAtbW96LXVzZXItc2VsZWN0OiB0ZXh0O1xuLy8gICAtbXMtdXNlci1zZWxlY3Q6IHRleHQ7XG4vLyAgIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC4ycztcblxuLy8gICAmOm5vdChzZWxlY3QpIHtcbi8vICAgICBAZXh0ZW5kIC5pbnNldDtcblxuLy8gICAgICY6Zm9jdXMge1xuLy8gICAgICAgQGV4dGVuZCAub3V0c2V0O1xuLy8gICAgIH1cbi8vICAgfVxuLy8gfVxuXG4vLyB0ZXh0YXJlYSB7XG4vLyAgIGhlaWdodDogMzUwcHg7XG4vLyAgIHBhZGRpbmc6IDEuMjVlbTtcbi8vIH1cblxuLy8gc2VsZWN0IHtcbi8vICAgQGV4dGVuZCAub3V0c2V0O1xuXG4vLyAgIGN1cnNvcjogcG9pbnRlcjtcbi8vICAgYmFja2dyb3VuZDogdXJsKGRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjJaWEp6YVc5dVBTSXhMakVpSUhacFpYZENiM2c5SWpBZ01DQXhPU0F4T1NJZ2VHMXNibk05SW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTHpJd01EQXZjM1puSWo0OFp5QjBjbUZ1YzJadmNtMDlJbTFoZEhKcGVDZ3VNRE0wSURBZ01DQXVNRE0wSUMwMkxqZ2dNUzQzWlMwMUtTSWdjM1I1YkdVOUltWnBiR3c2SXpkaU4yVTRZeUkrUEhCaGRHZ2daRDBpYlRRNE1DQXpORFF0TWpFeExUSXhNbU10TVRZdE1UWXROREV0TVRZdE5UY2dNQzB4TmlBeE5pMHhOaUEwTWlBd0lEVTNiREl6T0NBeU16bGpPQzQwSURndU5TQXlNQ0F4TWlBek1TQXhNaUF4TVNBd0xqVTJJREl5TFRNdU1pQXpNUzB4TW13eU16Z3RNak01WXpFMkxURTJJREUyTFRReUlEQXROVGR6TFRReExURTJMVFUzSURCNklpQnpkSGxzWlQwaVptbHNiRG9qTjJJM1pUaGpJaTgrUEM5blBqd3ZjM1puUGdvPSlcbi8vICAgICBuby1yZXBlYXQgcmlnaHQgMWVtIGNlbnRlcjtcbi8vICAgYmFja2dyb3VuZC1zaXplOiAxLjJlbTtcbi8vICAgcGFkZGluZy1yaWdodDogM2VtO1xuLy8gfVxuXG4vLyBpbnB1dDo6cGxhY2Vob2xkZXIsXG4vLyB0ZXh0YXJlYTo6cGxhY2Vob2xkZXIge1xuLy8gICBvcGFjaXR5OiAxO1xuLy8gICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnM7XG4vLyAgIGNvbG9yOiBpbmhlcml0O1xuLy8gfVxuXG4vLyBpbnB1dDpmb2N1czo6cGxhY2Vob2xkZXIsXG4vLyB0ZXh0YXJlYTpmb2N1czo6cGxhY2Vob2xkZXIge1xuLy8gICBvcGFjaXR5OiAwLjI7XG4vLyB9XG5cbi8vIGlucHV0Oi1tcy1pbnB1dC1wbGFjZWhvbGRlcixcbi8vIHRleHRhcmVhOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4vLyAgIG9wYWNpdHk6IDE7XG4vLyAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycztcbi8vICAgY29sb3I6IGluaGVyaXQ7XG4vLyB9XG5cbi8vIGlucHV0OmZvY3VzOi1tcy1pbnB1dC1wbGFjZWhvbGRlcixcbi8vIHRleHRhcmVhOmZvY3VzOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4vLyAgIG9wYWNpdHk6IDAuMjtcbi8vIH1cblxuLy8gaW5wdXRbdHlwZT1cInNlYXJjaFwiXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbixcbi8vIGlucHV0W3R5cGU9XCJzZWFyY2hcIl06Oi13ZWJraXQtc2VhcmNoLWNhbmNlbC1idXR0b24sXG4vLyBpbnB1dFt0eXBlPVwic2VhcmNoXCJdOjotd2Via2l0LXNlYXJjaC1yZXN1bHRzLWJ1dHRvbixcbi8vIGlucHV0W3R5cGU9XCJzZWFyY2hcIl06Oi13ZWJraXQtc2VhcmNoLXJlc3VsdHMtZGVjb3JhdGlvbiB7XG4vLyAgIGRpc3BsYXk6IG5vbmU7XG4vLyB9XG5cbi8vIGJ1dHRvbixcbi8vIGlucHV0W3R5cGU9XCJidXR0b25cIl0sXG4vLyBpbnB1dFt0eXBlPVwic3VibWl0XCJdLFxuLy8gaW5wdXRbdHlwZT1cInJlc2V0XCJdIHtcbi8vICAgQGV4dGVuZCAub3V0c2V0O1xuXG4vLyAgIGJvcmRlcjogMDtcbi8vICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4vLyAgIHBhZGRpbmc6IDEwcHggMDtcbi8vICAgd2lkdGg6IDhlbTtcbi8vICAgdGV4dC1hbGlnbjogY2VudGVyO1xuLy8gICBjdXJzb3I6IHBvaW50ZXI7XG4vLyAgIGNvbG9yOiBpbmhlcml0O1xuLy8gICBmb250LXNpemU6IDEuMXJlbTtcbi8vICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYmFja2dyb3VuZC1jb2xvciwgYm94LXNoYWRvdztcbi8vICAgdHJhbnNpdGlvbi1kZWxheTogMC4ycztcbi8vICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4ycztcblxuLy8gICAmLmFjdGl2ZSxcbi8vICAgJjphY3RpdmUge1xuLy8gICAgIEBleHRlbmQgLmluc2V0O1xuXG4vLyAgICAgdHJhbnNpdGlvbi1kZWxheTogMHM7XG4vLyAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4xcztcbi8vICAgfVxuXG4vLyAgIEBlYWNoICRuYW1lLCAkY29sb3IgaW4gKFwicmVkXCI6ICRyZWQsIFwiZ3JlZW5cIjogJGdyZWVuLCBcImJsdWVcIjogJGJsdWUpIHtcbi8vICAgICBAYXQtcm9vdCAuI3skbmFtZX0tYnV0dG9uLFxuLy8gICAgICAgJi4jeyRuYW1lfS1idXR0b24ge1xuLy8gICAgICAgQGV4dGVuZCBidXR0b247XG5cbi8vICAgICAgICRfYmctaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsICRjb2xvciAzMCUsIGxpZ2h0ZW4oJGNvbG9yLCA2JSkgODAlKTtcblxuLy8gICAgICAgY29sb3I6IHdoaXRlO1xuLy8gICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4vLyAgICAgICB0ZXh0LXNoYWRvdzogMCAwLjFlbSAwLjFlbSB0cmFuc3BhcmVudGl6ZShibGFjaywgMC4zKTtcbi8vICAgICAgIGJhY2tncm91bmQ6ICRfYmctaW1hZ2U7XG4vLyAgICAgICBib3gtc2hhZG93OiAwIDAgMC41ZW0gdHJhbnNwYXJlbnRpemUoJGNvbG9yLCAwLjMpLCAwIDAgdHJhbnNwYXJlbnQsXG4vLyAgICAgICAgIGluc2V0IDAgLTVweCAwIHRyYW5zcGFyZW50aXplKGJsYWNrLCAwLjk1KSxcbi8vICAgICAgICAgaW5zZXQgMCAycHggMCB0cmFuc3BhcmVudGl6ZSh3aGl0ZSwgMC44KTtcbi8vICAgICAgIGJvcmRlci1yYWRpdXM6IDZweCA2cHggOHB4IDhweDtcbi8vICAgICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGJveC1zaGFkb3csIGJvcmRlci1yYWRpdXM7XG5cbi8vICAgICAgICYuYWN0aXZlLFxuLy8gICAgICAgJjphY3RpdmUge1xuLy8gICAgICAgICBiYWNrZ3JvdW5kOiAkX2JnLWltYWdlO1xuLy8gICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4vLyAgICAgICAgIGJveC1zaGFkb3c6IDAgMCB0cmFuc3BhcmVudCwgMCAwIHRyYW5zcGFyZW50LFxuLy8gICAgICAgICAgIGluc2V0IDAgMnB4IDVweCAycHggdHJhbnNwYXJlbnRpemUoYmxhY2ssIDAuOCk7XG4vLyAgICAgICB9XG4vLyAgICAgfVxuLy8gICB9XG4vLyB9XG5cbi8vIGxhYmVsIHtcbi8vICAgJixcbi8vICAgJiAqIHtcbi8vICAgICBjdXJzb3I6IHBvaW50ZXI7XG4vLyAgIH1cblxuLy8gICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4vLyAgIHBhZGRpbmc6IDAuNTZlbSAwO1xuLy8gfVxuXG4vLyBhIHtcbi8vICAgJixcbi8vICAgJjpsaW5rLFxuLy8gICAmOnZpc2l0ZWQsXG4vLyAgICY6aG92ZXIgJjphY3RpdmUge1xuLy8gICAgICYsXG4vLyAgICAgJiAqIHtcbi8vICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbi8vICAgICB9XG5cbi8vICAgICBmb250LXdlaWdodDogYm9sZDtcbi8vICAgICBjb2xvcjogJGJsdWU7XG4vLyAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4vLyAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuLy8gICB9XG4vLyB9XG5cbi8vIGgxLFxuLy8gaDIsXG4vLyBoMyxcbi8vIGg0LFxuLy8gaDUsXG4vLyBoNiB7XG4vLyAgIGxpbmUtaGVpZ2h0OiAxLjVlbTtcbi8vIH1cblxuLy8gaDEge1xuLy8gICBmb250LXNpemU6IDRlbTtcbi8vICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4vLyAgIG1hcmdpbjogMC43ZW0gMDtcbi8vIH1cblxuLy8gaDIge1xuLy8gICBmb250LXNpemU6IDNlbTtcbi8vICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4vLyAgIG1hcmdpbjogMC44ZW0gMDtcbi8vIH1cblxuLy8gaDMge1xuLy8gICBmb250LXNpemU6IDIuNWVtO1xuLy8gICBmb250LXdlaWdodDogbGlnaHRlcjtcbi8vICAgbWFyZ2luOiAwLjllbSAwO1xuLy8gfVxuXG4vLyBoNCB7XG4vLyAgIGZvbnQtc2l6ZTogMmVtO1xuLy8gICBmb250LXdlaWdodDogbGlnaHRlcjtcbi8vICAgbWFyZ2luOiAxZW0gMDtcbi8vIH1cblxuLy8gaDUge1xuLy8gICBtYXJnaW46IDAuNWVtIDA7XG4vLyAgIGZvbnQtc2l6ZTogMS4yZW07XG4vLyAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4vLyB9XG5cbi8vIGg2IHtcbi8vICAgbWFyZ2luOiAxZW0gMCAxZW0gMS40ZW07XG4vLyAgIGZvbnQtc2l6ZTogMWVtO1xuLy8gICBmb250LXdlaWdodDogYm9sZDtcbi8vIH1cblxuLy8gaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdLFxuLy8gaW5wdXRbdHlwZT1cInJhZGlvXCJdIHtcbi8vICAgJF9ib3JkZXItd2lkdGg6IDAuMTVlbTtcbi8vICAgJF9ib3gtc2hhZG93OiAycHggMnB4IDNweCB0cmFuc3BhcmVudGl6ZShibGFjaywgMC44KSwgLTJweCAtMnB4IDNweCB3aGl0ZSxcbi8vICAgICBpbnNldCAxcHggMXB4IDJweCB0cmFuc3BhcmVudGl6ZShibGFjaywgMC44KSwgaW5zZXQgLTFweCAtMXB4IDJweCB3aGl0ZTtcbi8vICAgZm9udC1zaXplOiAxZW07XG4vLyAgIGN1cnNvcjogcG9pbnRlcjtcbi8vICAgaGVpZ2h0OiAxLjJlbTtcbi8vICAgd2lkdGg6IDEuMmVtO1xuLy8gICBtYXJnaW46IDAgMC4zZW07XG4vLyAgIGJveC1zaGFkb3c6ICRfYm94LXNoYWRvdztcbi8vICAgYm9yZGVyOiAkX2JvcmRlci13aWR0aCBzb2xpZCAkYmctY29sb3I7XG4vLyAgIHZlcnRpY2FsLWFsaWduOiB0ZXh0LWJvdHRvbTtcbi8vICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYmFja2dyb3VuZCwgYm94LXNoYWRvdztcbi8vICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4ycztcblxuLy8gICAmOmFjdGl2ZSB7XG4vLyAgICAgYm94LXNoYWRvdzogJF9ib3gtc2hhZG93LCBpbnNldCAwIDAuMWVtIDAuMjVlbSB0cmFuc3BhcmVudGl6ZShibGFjaywgMC44KTtcbi8vICAgfVxuXG4vLyAgICY6Y2hlY2tlZCB7XG4vLyAgICAgYm9yZGVyLXdpZHRoOiAwLjFlbTtcbi8vICAgICBib3JkZXItY29sb3I6IGRhcmtlbigkYmx1ZSwgMTAlKTtcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmx1ZTtcbi8vICAgfVxuLy8gfVxuXG4vLyBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0ge1xuLy8gICBib3JkZXItcmFkaXVzOiAyNSU7XG5cbi8vICAgJjpjaGVja2VkIHtcbi8vICAgICBib3gtc2hhZG93OiAkZ2xvdy1zaGFkb3csIGluc2V0IDAgLTAuMWVtIDAgdHJhbnNwYXJlbnRpemUoYmxhY2ssIDAuOCksXG4vLyAgICAgICBpbnNldCAwIDAuMWVtIDAuMWVtIHRyYW5zcGFyZW50aXplKHdoaXRlLCAwLjgpO1xuLy8gICB9XG4vLyB9XG5cbi8vIGlucHV0W3R5cGU9XCJyYWRpb1wiXSB7XG4vLyAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG5cbi8vICAgJjpjaGVja2VkIHtcbi8vICAgICBib3gtc2hhZG93OiAkZ2xvdy1zaGFkb3c7XG4vLyAgICAgYm94LXNoYWRvdzogJGdsb3ctc2hhZG93LCBpbnNldCAwIDAuMTJlbSAwLjFlbSB0cmFuc3BhcmVudGl6ZSh3aGl0ZSwgMC43NSk7XG4vLyAgICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMC4xNWVtO1xuLy8gICB9XG4vLyB9XG5cbi8vIC5jaGVja3RleHQge1xuLy8gICB3aWR0aDogYXV0bztcbi8vICAgbWFyZ2luOiAwLjVlbTtcblxuLy8gICBpbnB1dCB7XG4vLyAgICAgZGlzcGxheTogbm9uZTtcblxuLy8gICAgICsgc3BhbiB7XG4vLyAgICAgICBAZXh0ZW5kIGJ1dHRvbjtcblxuLy8gICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4vLyAgICAgICBwYWRkaW5nOiAxZW07XG4vLyAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwcztcbi8vICAgICB9XG5cbi8vICAgICAmOmNoZWNrZWQgKyBzcGFuIHtcbi8vICAgICAgIEBleHRlbmQgLmJsdWUtYnV0dG9uO1xuXG4vLyAgICAgICBwYWRkaW5nOiAxZW07XG4vLyAgICAgfVxuLy8gICB9XG4vLyB9XG5cbi8vIC5zd2l0Y2gge1xuLy8gICAkX2hlaWdodDogMnJlbTtcbi8vICAgJF93aWR0aDogOHJlbTtcbi8vICAgJF9oYW5kbGUtd2lkdGg6ICRfaGVpZ2h0O1xuLy8gICAkX2hhbmRsZS10cmFuc2xhdGlvbjogJF93aWR0aCAtICRfaGFuZGxlLXdpZHRoO1xuXG4vLyAgIGhlaWdodDogJF9oZWlnaHQ7XG4vLyAgIHdpZHRoOiAkX3dpZHRoO1xuLy8gICBwYWRkaW5nOiAwO1xuLy8gICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbi8vICAgaW5wdXQge1xuLy8gICAgIGRpc3BsYXk6IG5vbmU7XG5cbi8vICAgICArIGRpdiB7XG4vLyAgICAgICBoZWlnaHQ6IDEwMCU7XG4vLyAgICAgICB3aWR0aDogMTAwJTtcbi8vICAgICAgIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xuLy8gICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4vLyAgICAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBib3gtc2hhZG93LCBiYWNrZ3JvdW5kLWNvbG9yO1xuLy8gICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4ycztcbi8vICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuMnM7XG4vLyAgICAgICBib3gtc2hhZG93OiAzcHggM3B4IDJweCAtMnB4IHRyYW5zcGFyZW50aXplKGJsYWNrLCAwLjkpLFxuLy8gICAgICAgICBpbnNldCAycHggMnB4IDJweCAxcHggdHJhbnNwYXJlbnRpemUoYmxhY2ssIDAuOSksXG4vLyAgICAgICAgIGluc2V0IC0ycHggLTJweCAxcHggd2hpdGU7XG5cbi8vICAgICAgICY6OmJlZm9yZSB7XG4vLyAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4vLyAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuLy8gICAgICAgICBoZWlnaHQ6IGNhbGMoI3skX2hhbmRsZS13aWR0aH0gKyA0cHgpO1xuLy8gICAgICAgICB3aWR0aDogY2FsYygjeyRfaGFuZGxlLXdpZHRofSArIDRweCk7XG4vLyAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4vLyAgICAgICAgIGJvcmRlcjogc29saWQgd2hpdGUgM3B4O1xuLy8gICAgICAgICBiYWNrZ3JvdW5kOiAkYmx1ZTtcbi8vICAgICAgICAgYm94LXNoYWRvdzogMCAzcHggMTBweCB0cmFuc3BhcmVudGl6ZShibGFjaywgMC44KSxcbi8vICAgICAgICAgICBpbnNldCAwIC0xcHggM3B4IHRyYW5zcGFyZW50aXplKGJsYWNrLCAwLjkpO1xuLy8gICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNnB4KTtcbi8vICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnM7XG4vLyAgICAgICB9XG4vLyAgICAgfVxuXG4vLyAgICAgJjpjaGVja2VkICsgZGl2IHtcbi8vICAgICAgIGJhY2tncm91bmQ6ICRibHVlO1xuLy8gICAgICAgYm94LXNoYWRvdzogJGdsb3ctc2hhZG93LCBpbnNldCAwIDJweCAycHggMnB4IHRyYW5zcGFyZW50aXplKGJsYWNrLCAwLjcpLFxuLy8gICAgICAgICBpbnNldCAwIDAgdHJhbnNwYXJlbnQ7XG5cbi8vICAgICAgICY6OmJlZm9yZSB7XG4vLyAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKCRfaGFuZGxlLXRyYW5zbGF0aW9uLCAtNnB4KTtcbi8vICAgICAgIH1cbi8vICAgICB9XG4vLyAgIH1cbi8vIH1cblxuLy8gaHIge1xuLy8gICBAZXh0ZW5kIC5pbnNldDtcbi8vICAgd2lkdGg6IDcyJTtcbi8vICAgaGVpZ2h0OiA4cHg7XG4vLyAgIGZsb2F0OiByaWdodDtcbi8vICAgYm9yZGVyOiAwO1xuLy8gfVxuXG4vLyBjb2RlLFxuLy8gcHJlIHtcbi8vICAgcGFkZGluZzogMC41ZW0gMWVtO1xuLy8gICBib3JkZXItcmFkaXVzOiA0cHg7XG4vLyAgIG92ZXJmbG93OiBhdXRvO1xuLy8gICBib3gtc2hhZG93OiAwIDVweCAzMHB4IDAgdHJhbnNwYXJlbnRpemUoYmxhY2ssIDAuOTUpO1xuLy8gfVxuXG4vLyBjb2RlIHtcbi8vICAgYmFja2dyb3VuZDogI2U2ZTZlNjtcbi8vIH1cblxuLy8gcHJlIHtcbi8vICAgYmFja2dyb3VuZDogd2hpdGU7XG4vLyAgIG1hcmdpbjogNGVtIDA7XG4vLyB9XG5cbi8vIGNvZGUsXG4vLyBwcmUge1xuLy8gICAmLFxuLy8gICAmICoge1xuLy8gICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuLy8gICAgIGxpbmUtaGVpZ2h0OiAyZW07XG4vLyAgICAgY3Vyc29yOiBhdXRvO1xuLy8gICAgIHVzZXItc2VsZWN0OiB0ZXh0O1xuLy8gICAgIC13ZWJraXQtdG91Y2gtY2FsbG91dDogdGV4dDtcbi8vICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiB0ZXh0O1xuLy8gICAgIC1raHRtbC11c2VyLXNlbGVjdDogdGV4dDtcbi8vICAgICAtbW96LXVzZXItc2VsZWN0OiB0ZXh0O1xuLy8gICAgIC1tcy11c2VyLXNlbGVjdDogdGV4dDtcbi8vICAgfVxuLy8gfVxuXG4vLyBibG9ja3F1b3RlIHtcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4vLyAgIHBhZGRpbmc6IDAuNWVtIDFlbTtcbi8vICAgYm9yZGVyLXJhZGl1czogNHB4O1xuLy8gICBib3gtc2hhZG93OiAwIDVweCAzMHB4IDAgdHJhbnNwYXJlbnRpemUoYmxhY2ssIDAuOTUpO1xuLy8gICBib3JkZXItbGVmdDogNnB4IHNvbGlkICRibHVlO1xuLy8gfVxuIiwiQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdDYXZlYXQnO1xuICAgIHNyYzogdXJsKCcuLi8uLi9mb250cy9Cb2xkL0NhdmVhdC1Cb2xkLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxuICAgICAgICB1cmwoJy4uLy4uL2ZvbnRzL0JvbGQvQ2F2ZWF0LUJvbGQud29mZicpIGZvcm1hdCgnd29mZicpO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LWRpc3BsYXk6IHN3YXA7XG59XG5cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnQ2F2ZWF0JztcbiAgICBzcmM6IHVybCgnLi4vLi4vZm9udHMvUmVndWxhci9DYXZlYXQtUmVndWxhci53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcbiAgICAgICAgdXJsKCcuLi8uLi9mb250cy9SZWd1bGFyL0NhdmVhdC1SZWd1bGFyLndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LWRpc3BsYXk6IHN3YXA7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ0ZpZ3VyaW5lU3ltYm9sVDEnO1xuICBzcmM6IHVybCgnLi4vLi4vZm9udHMvM3JkIFBhcnR5L0NoZXNzVmFyaWFudHMvRmlndXJpbmVTeW1ib2xUMUJvbGQud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXG4gICAgICB1cmwoJy4uLy4uL2ZvbnRzLzNyZCBQYXJ0eS9DaGVzc1ZhcmlhbnRzL0ZpZ3VyaW5lU3ltYm9sVDFCb2xkLndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdGaWd1cmluZVN5bWJvbFQxJztcbiAgc3JjOiB1cmwoJy4uLy4uL2ZvbnRzLzNyZCBQYXJ0eS9DaGVzc1ZhcmlhbnRzL0ZpZ3VyaW5lU3ltYm9sVDEud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXG4gICAgICB1cmwoJy4uLy4uL2ZvbnRzLzNyZCBQYXJ0eS9DaGVzc1ZhcmlhbnRzL0ZpZ3VyaW5lU3ltYm9sVDEud29mZicpIGZvcm1hdCgnd29mZicpO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbn1cblxuIiwiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkNhdmVhdFwiO1xuICBzcmM6IHVybChcIi4uLy4uL2ZvbnRzL0JvbGQvQ2F2ZWF0LUJvbGQud29mZjJcIikgZm9ybWF0KFwid29mZjJcIiksIHVybChcIi4uLy4uL2ZvbnRzL0JvbGQvQ2F2ZWF0LUJvbGQud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiQ2F2ZWF0XCI7XG4gIHNyYzogdXJsKFwiLi4vLi4vZm9udHMvUmVndWxhci9DYXZlYXQtUmVndWxhci53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKSwgdXJsKFwiLi4vLi4vZm9udHMvUmVndWxhci9DYXZlYXQtUmVndWxhci53b2ZmXCIpIGZvcm1hdChcIndvZmZcIik7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkZpZ3VyaW5lU3ltYm9sVDFcIjtcbiAgc3JjOiB1cmwoXCIuLi8uLi9mb250cy8zcmQgUGFydHkvQ2hlc3NWYXJpYW50cy9GaWd1cmluZVN5bWJvbFQxQm9sZC53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKSwgdXJsKFwiLi4vLi4vZm9udHMvM3JkIFBhcnR5L0NoZXNzVmFyaWFudHMvRmlndXJpbmVTeW1ib2xUMUJvbGQud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiRmlndXJpbmVTeW1ib2xUMVwiO1xuICBzcmM6IHVybChcIi4uLy4uL2ZvbnRzLzNyZCBQYXJ0eS9DaGVzc1ZhcmlhbnRzL0ZpZ3VyaW5lU3ltYm9sVDEud29mZjJcIikgZm9ybWF0KFwid29mZjJcIiksIHVybChcIi4uLy4uL2ZvbnRzLzNyZCBQYXJ0eS9DaGVzc1ZhcmlhbnRzL0ZpZ3VyaW5lU3ltYm9sVDEud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbn1cbi8qKioqKioqKioqKioqKioqKioqIE1lbnUgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIENvbnRhaW5lciBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBDb250YWluZXIgVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgQ29udGFpbmVyIFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIEhpZ2hsaWdodCBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBBbm5vdGF0aW9uIFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIFZhcmlhdGlvbiBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBQbHkgVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqKiBDb250cm9sIENvbG9ycyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKiogQm9hcmQgQ29sb3JzICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbjpyb290IHtcbiAgLS1iZy1jb2xvcjogI2YyZjNmNztcbiAgLS1mZy1jb2xvcjogIzM4M2E0MTtcbiAgLS1yZWQ6ICNlNDMwMzA7XG4gIC0tZ3JlZW46ICMxOWExODc7XG4gIC0tYmx1ZTogIzM2N2JmMDtcbiAgLS1kYXJrLWJsdWU6ICMyNjVhYjE7XG4gIC0tbWFyb29uOiAjYjgxNzRjO1xuICAtLXB1cnBsZTogIzhjNDJhYjtcbn1cblxuLmdzLWNvbnRleHQtbWVudS1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZ0NvbnRleHQpO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJvcmRlcjogdmFyKC0tYm9yZGVyQ29udGV4dCk7XG4gIGJhY2tncm91bmQ6IHZhcigtLWdzQmFja2dyb3VuZCk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogZmxleGJveDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgdG9wOiAwcHg7XG4gIGxlZnQ6IDBweDtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi5ncy1jb250ZXh0LW1lbnUtb3ZlcmFseSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgbGVmdDogMHB4O1xuICB0b3A6IDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmdzLWNvbnRleHQtbWVudS1vdmVyYWx5IC5jb250ZXh0LW1lbnUtYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogdmFyKC0taXRlbS1iZyk7XG4gIGJvcmRlcjogdmFyKC0tYm9yZGVyQ29udGV4dCk7XG4gIGNvbG9yOiB2YXIoLS10ZXh0Q29sb3JDb250ZXh0KTtcbiAgbWFyZ2luOiA4cHg7XG4gIGhlaWdodDogMTAlO1xuICB0b3A6IDE1JTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsaW5lLWhlaWdodDogMTAlO1xufVxuXG5tYXQtY2FyZC10aXRsZSB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0Q29sb3JDb250ZXh0KTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ScoreItemMenu, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'score-item-menu',
                templateUrl: './score-item-menu.component.html',
                styleUrls: ['./score-item-menu.component.scss']
            }]
    }], function () { return []; }, { data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], menuTitle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], variations: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], item: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/olga-menu/score-item-menu/variation-item/variation-item.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/olga-menu/score-item-menu/variation-item/variation-item.component.ts ***!
  \**************************************************************************************/
/*! exports provided: VariationItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VariationItemComponent", function() { return VariationItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_colors_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/colors.service */ "./src/app/services/colors.service.ts");
/* harmony import */ var _canvas_chessboard_canvas_chessboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../canvas-chessboard/canvas-chessboard.component */ "./src/app/canvas-chessboard/canvas-chessboard.component.ts");




const _c0 = ["board"];
class VariationItemComponent {
    constructor(colorService) {
        this.colorService = colorService;
        this.data = null;
        this.score = '';
        this.board = null;
    }
    ngOnInit() {
        if (this.data) {
            const node = this.data.first();
            this.score = node ? node.notation() : '';
            console.log('initializing variation item component for ' + this.score);
        }
    }
    ngAfterViewInit() {
        if (this.data) {
            const node = this.data.first();
            if (node) {
                console.log('Setting the variation board to');
                window.setTimeout(() => {
                    if (this.board) {
                        this.board.setBoardToPosition(node.position());
                    }
                }, 10);
            }
        }
    }
}
VariationItemComponent.ɵfac = function VariationItemComponent_Factory(t) { return new (t || VariationItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_colors_service__WEBPACK_IMPORTED_MODULE_1__["ColorService"])); };
VariationItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VariationItemComponent, selectors: [["variation-item"]], viewQuery: function VariationItemComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.board = _t.first);
    } }, inputs: { data: "data" }, outputs: { score: "score" }, decls: 4, vars: 7, consts: [[3, "boardID", "theme", "size", "tileSize", "showLabels", "interactive"], ["board", ""], [2, "height", "60px", "width", "60px", "color", "red"]], template: function VariationItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "canvas-chessboard", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("boardID", "board-var-", ctx.score, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("theme", ctx.colorService.boardTheme())("size", 160)("tileSize", 20)("showLabels", false)("interactive", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.score);
    } }, directives: [_canvas_chessboard_canvas_chessboard_component__WEBPACK_IMPORTED_MODULE_2__["CanvasChessBoard"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29sZ2EtbWVudS9zY29yZS1pdGVtLW1lbnUvdmFyaWF0aW9uLWl0ZW0vdmFyaWF0aW9uLWl0ZW0uY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VariationItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'variation-item',
                templateUrl: './variation-item.component.html',
                styleUrls: ['./variation-item.component.scss']
            }]
    }], function () { return [{ type: _services_colors_service__WEBPACK_IMPORTED_MODULE_1__["ColorService"] }]; }, { data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], score: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], board: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['board']
        }] }); })();


/***/ }),

/***/ "./src/app/olga-menu/themes-menu/themes-menu.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/olga-menu/themes-menu/themes-menu.component.ts ***!
  \****************************************************************/
/*! exports provided: ThemesMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemesMenuComponent", function() { return ThemesMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_colors_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/colors.service */ "./src/app/services/colors.service.ts");
/* harmony import */ var _services_olga_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/olga.service */ "./src/app/services/olga.service.ts");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
/* harmony import */ var _controls_color_select_color_select_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../controls/color-select/color-select.component */ "./src/app/olga-menu/controls/color-select/color-select.component.ts");






const _c0 = ["container"];
class ThemesMenuComponent {
    constructor(colors, olga) {
        this.colors = colors;
        this.olga = olga;
        this.container = null;
    }
    ngOnInit() {
    }
    hide() {
        if (this.olga) {
            this.olga.reRenderBoard();
        }
        if (this.container) {
            this.container.nativeElement.style.visibility = 'hidden';
        }
    }
    show() {
        if (this.container) {
            this.container.nativeElement.style.visibility = 'visible';
        }
    }
    resize(width, height) {
    }
}
ThemesMenuComponent.ɵfac = function ThemesMenuComponent_Factory(t) { return new (t || ThemesMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_colors_service__WEBPACK_IMPORTED_MODULE_1__["ColorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_olga_service__WEBPACK_IMPORTED_MODULE_2__["OlgaService"])); };
ThemesMenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ThemesMenuComponent, selectors: [["themes-menu"]], viewQuery: function ThemesMenuComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.container = _t.first);
    } }, decls: 34, vars: 18, consts: [[1, "menu-container"], ["container", ""], [1, "divider-text"], [3, "vertical"], ["title", "Light Tile", "variableName", "--boardBGLight", 1, "color-input", 3, "color"], ["title", "Dark Tile", "variableName", "--boardBGDark", 1, "color-input", 3, "color"], ["title", "Light Label", "variableName", "--boardLabelLight", 1, "color-input", 3, "color"], ["title", "Dark Label", "variableName", "--boardLabelDark", 1, "color-input", 3, "color"], ["title", "Container Text", "variableName", "--gsTextColor", 1, "color-input", 3, "color"], ["title", "Contianer Background", "variableName", "--gsBackground", 1, "color-input", 3, "color"], ["title", "Annotation", "variableName", "--gsTextColorAN", 1, "color-input", 3, "color"], ["title", "Annotation Background", "variableName", "--gsBackgroundAN", 1, "color-input", 3, "color"], ["title", "List Background", "variableName", "--gsListBackground", 1, "color-input", 3, "color"], ["title", "Highlight", "variableName", "--gsTextColorHG", 1, "color-input", 3, "color"], ["title", "Highlight Background", "variableName", "--gsBackgroundHG", 1, "color-input", 3, "color"], ["title", "Highlight Annotation", "variableName", "--gsBackgroundHG", 1, "color-input", 3, "color"], ["title", "Controls Background", "variableName", "--csBackground", 1, "color-input", 3, "color"], ["title", "Controls", "variableName", "--csColor", 1, "color-input", 3, "color"]], template: function ThemesMenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Board");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "mat-divider", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "color-select", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "color-select", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "color-select", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "color-select", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Game Score");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "mat-divider", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "color-select", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "color-select", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "color-select", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "color-select", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "color-select", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Game Score Highlight");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "mat-divider", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "color-select", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "color-select", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "color-select", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Olga Control");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "mat-divider", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "color-select", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "color-select", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("vertical", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx.colors.boardBGLight.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx.colors.boardBGDark.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx.colors.boardLabelLight.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx.colors.boardLabelDark.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("vertical", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx.colors.gsTextColor.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx.colors.gsBackground.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx.colors.gsTextColorAN.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx.colors.gsBackgroundAN.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx.colors.gsListBackground.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("vertical", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx.colors.gsTextColorHG.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx.colors.gsBackgroundHG.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx.colors.gsBackgroundHG.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("vertical", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx.colors.csBackground.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx.colors.csColor.value);
    } }, directives: [_angular_material_divider__WEBPACK_IMPORTED_MODULE_3__["MatDivider"], _controls_color_select_color_select_component__WEBPACK_IMPORTED_MODULE_4__["ColorSelectComponent"]], styles: ["@font-face {\n  font-family: \"Caveat\";\n  src: url('Caveat-Bold.woff2') format(\"woff2\"), url('Caveat-Bold.woff') format(\"woff\");\n  font-weight: bold;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"Caveat\";\n  src: url('Caveat-Regular.woff2') format(\"woff2\"), url('Caveat-Regular.woff') format(\"woff\");\n  font-weight: 600;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"FigurineSymbolT1\";\n  src: url('FigurineSymbolT1Bold.woff2') format(\"woff2\"), url('FigurineSymbolT1Bold.woff') format(\"woff\");\n  font-weight: bold;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"FigurineSymbolT1\";\n  src: url('FigurineSymbolT1.woff2') format(\"woff2\"), url('FigurineSymbolT1.woff') format(\"woff\");\n  font-weight: 600;\n  font-style: normal;\n  font-display: swap;\n}\n\n\n\n\n\n\n\n\n\n\n[_ngcontent-%COMP%]:root {\n  --bg-color: #f2f3f7;\n  --fg-color: #383a41;\n  --red: #e43030;\n  --green: #19a187;\n  --blue: #367bf0;\n  --dark-blue: #265ab1;\n  --maroon: #b8174c;\n  --purple: #8c42ab;\n}\n.menu-container[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 100%;\n  min-width: 240px;\n  overflow-x: hidden;\n  overflow-y: auto;\n  clip: auto;\n}\n.inner-text[_ngcontent-%COMP%] {\n  color: white;\n}\n.divider-text[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 24px;\n  font-weight: bold;\n  line-height: 28px;\n  margin-bottom: -2px;\n  margin-left: 8px;\n  margin-top: 2px;\n  width: 100%;\n  clear: both;\n}\n.color-input[_ngcontent-%COMP%] {\n  background-color: var(--meBackground);\n  font-size: 2.1vmin;\n  margin: 10px;\n  float: left;\n}\nmat-divider[_ngcontent-%COMP%] {\n  color: white;\n  background: white;\n  height: 1px;\n  line-height: 2px;\n  width: 100%;\n  margin-left: 8px;\n  border: white solid 1px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMuc2NzcyIsInNyYy9hc3NldHMvc2Nzcy9tb2R1bGVzL19mb250cy5zY3NzIiwic3JjL2FwcC9vbGdhLW1lbnUvdGhlbWVzLW1lbnUvdGhlbWVzLW1lbnUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOEVBQUE7QUNBQTtFQUNJLHFCQUFBO0VBQ0EscUZBQUE7RUFFQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNDSjtBREVBO0VBQ0kscUJBQUE7RUFDQSwyRkFBQTtFQUVBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0RKO0FESUE7RUFDRSwrQkFBQTtFQUNBLHVHQUFBO0VBRUEsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDSEY7QURNQTtFQUNFLCtCQUFBO0VBQ0EsK0ZBQUE7RUFFQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNMRjtBRmFBLCtFQUFBO0FBR0EsK0VBQUE7QUFRQSwrRUFBQTtBQU1BLCtFQUFBO0FBTUEsK0VBQUE7QUFNQSxnRkFBQTtBQUtBLCtFQUFBO0FBS0EseUVBQUE7QUFLQSx5RUFBQTtBQUlBLHVFQUFBO0FBZ0JBO0VBQ0UsbUJBQUE7RUFDQSxtQkFBQTtFQUVBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUVsRUY7QUE5Q0E7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0FBaURGO0FBOUNBO0VBQ0UsWUFBQTtBQWlERjtBQS9DQTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUFrREo7QUFoREE7RUFDSSxxQ0ZnQlc7RUVmWCxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBbURKO0FBakRBO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUFvREoiLCJmaWxlIjoic3JjL2FwcC9vbGdhLW1lbnUvdGhlbWVzLW1lbnUvdGhlbWVzLW1lbnUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG5cbkBpbXBvcnQgXCIuL2Fzc2V0cy9zY3NzL21vZHVsZXMvX2ZvbnRzLnNjc3NcIjtcbiRnYW1lc2NvcmUtZmFtaWx5OiBcIkZpZ3VyaW5lU3ltYm9sVDFcIjtcbiRnYW1lc2NvcmUtaGlnaGxpZ2h0OiAjNTg1ODU4ZmY7XG4kZ2FtZXNjb3JlLWZvcmVncm91bmQ6IHdoaXRlO1xuXG4kcmVkOiAjZTQzMDMwO1xuJGdyZWVuOiAjMTlhMTg3O1xuJGxpZ2h0LWJsdWU6ICMwMGZmZmZmZjtcbiRibHVlOiAjMzY3YmYwO1xuJGRhcmstYmx1ZTogIzI2NWFiMTtcbiRtYXJvb246ICNiODE3NGM7XG4kcHVycGxlOiAjOGM0MmFiO1xuXG4vLyBNYWluIE9MR0EgQ29sb3IgRWxlbWVudCBWYXJpYWJsZXNcbiR0ZXh0Q29sb3I6IHZhcigtLXRleHRDb2xvcik7IC8vIE1haW4gVGV4dCBDb2xvclxuJHRleHRDb2xvckF0dGVudGlvbjogdmFyKC0tdGV4dENvbG9yQXR0ZW50aW9uKTsgLy8gQXR0ZW50aW9uIHRleHRcbiR0ZXh0Q29sb3JSZW1vdmU6IHZhcigtLXRleHRDb2xvclJlbW92ZSk7IC8vIFJlbW92ZS9EZWxldGUvQ2xvc2VcbiR0ZXh0Q29sb3JBZGQ6IHZhcigtLXRleHRDb2xvckFkZCk7IC8vIEFkZC9DcmVhdGUvT3BlblxuJHRleHRDb2xvckFjdGl2ZTogdmFyKC0tdGV4dENvbG9yQWN0aXZlKTsgLy8gQWRkL0NyZWF0ZS9PcGVuXG4kYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZCk7IC8vIE1haW4gYmFja2dyb3VuZCBDb2xvclxuJGJnQ29udGFpbmVyOiB2YXIoLS1iZ0NvbnRhaW5lcik7IC8vIGJhY2tncm91bmQgb2YgQ29udGFpbmVyc1xuJGJnTWVudTogdmFyKC0tYmdNZW51KTsgLy8gYmFja2dyb3VuZCBvZiBNZW51c1xuJGJnSXRlbTogdmFyKC0tYmdJdGVtKTsgLy8gYmFja2dyb3VuZCBvZiBJdGVtc1xuXG4vLyBDb250ZXh0IE1lbnVcbiRiZ0NvbnRleHQ6IHZhcigtLWJnQ29udGV4dCk7IC8vIGJhY2tncm91bmQgb2YgQ29udGV4dCBNZW51XG4kdGV4dENvbG9yQ29udGV4dDogdmFyKC0tdGV4dENvbG9yQ29udGV4dCk7IC8vIHRleHQgY29sb3IgQ29udGV4dCBNZW51XG4kYm9yZGVyQ29udGV4dDogdmFyKC0tYm9yZGVyQ29udGV4dCk7IC8vIGJvcmRlciBDb250ZXh0IE1lbnVcbiRvdmVybGF5Q29udGV4dEJhY2tncm91bmQ6IHZhcihcbiAgLS1vdmVybGF5Q29udGV4dEJhY2tncm91bmRcbik7IC8vIENvbnRleHQgTWVudSBPdmVybGF5IGJhY2tncm91bmQgbWFpblxuJG92ZXJsYXlDb250ZXh0QmFja2dyb3VuZEdyYWRpZW50OiB2YXIoXG4gIC0tb3ZlcmxheUNvbnRleHRCYWNrZ3JvdW5kR3JhZGllbnRcbik7IC8vIENvbnRleHQgTWVudSBiYWNrZ3JvdW5kIGdyYWRpZW50XG5cbiRpdGVtOiB2YXIoLS1pdGVtKTtcbiRpdGVtLWNvbnRyYXN0OiB2YXIoLS1pdGVtLWNvbnRyYXN0KTtcbiRpdGVtLWJnOiB2YXIoLS1pdGVtLWJnKTtcblxuLyoqKioqKioqKioqKioqKioqKiogTWVudSAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiRtZUJhY2tncm91bmQ6IHZhcigtLW1lQmFja2dyb3VuZCk7XG5cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgQ29udGFpbmVyIFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4kZ3NUZXh0Q29sb3I6IHZhcigtLWdzVGV4dENvbG9yKTsgLy8gVGV4dCBjb2xvciBmb3IgZ2FtZSBzY29yZVxuJGdzQmFja2dyb3VuZDogdmFyKC0tZ3NCYWNrZ3JvdW5kKTsgLy8gYmFja2dyb3VuZCBvZiBDb250YWluZXJzXG4kZ3NMaXN0QmFja2dyb3VuZDogdmFyKC0tZ3NMaXN0QmFja2dyb3VuZCk7IC8vIGxpc3QgYmFja2dyb3VuZCBvZiBnYW1lIHNjb3JlXG4kZ3NCb3JkZXI6IHZhcigtLWdzQm9yZGVyKTsgLy8gYmFja2dyb3VuZCBvZiBNZW51c1xuJGdzVGV4dFNpemU6IHZhcigtLWdzVGV4dFNpemUpOyAvLyBiYWNrZ3JvdW5kIG9mIE1lbnVzXG4kZ3NGb250RmFtaWx5OiB2YXIoLS1nc0ZvbnRGYW1pbHkpOyAvLyBzY29yZSBmb250XG5cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgQ29udGFpbmVyIFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4kZ3NUZXh0Q29sb3JNVzogdmFyKC0tZ3NUZXh0Q29sb3JNVyk7IC8vIFRleHQgY29sb3IgZm9yIGdhbWUgc2NvcmVcbiRnc0JhY2tncm91bmRNVzogdmFyKC0tZ3NCYWNrZ3JvdW5kTVcpOyAvLyBiYWNrZ3JvdW5kIG9mIENvbnRhaW5lcnNcbiRnc0JvcmRlck1XOiB2YXIoLS1nc0JvcmRlck1XKTsgLy8gYmFja2dyb3VuZCBvZiBNZW51c1xuJGdzVGV4dFNpemVNVzogdmFyKC0tZ3NUZXh0U2l6ZU1XKTsgLy8gYmFja2dyb3VuZCBvZiBNZW51c1xuXG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIENvbnRhaW5lciBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuJGdzVGV4dENvbG9yTUI6IHZhcigtLWdzVGV4dENvbG9yTUIpOyAvLyBUZXh0IGNvbG9yIGZvciBnYW1lIHNjb3JlXG4kZ3NCYWNrZ3JvdW5kTUI6IHZhcigtLWdzQmFja2dyb3VuZE1CKTsgLy8gYmFja2dyb3VuZCBvZiBDb250YWluZXJzXG4kZ3NCb3JkZXJNQjogdmFyKC0tZ3NCb3JkZXJNQik7IC8vIGJhY2tncm91bmQgb2YgTWVudXNcbiRnc1RleHRTaXplTUI6IHZhcigtLWdzVGV4dFNpemVNQik7IC8vIGJhY2tncm91bmQgb2YgTWVudXNcblxuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBIaWdobGlnaHQgVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiRnc1RleHRDb2xvckhHOiB2YXIoLS1nc1RleHRDb2xvckhHKTsgLy8gVGV4dCBjb2xvciBmb3IgaGlnaGxpZ2h0XG4kZ3NBbm5vdGF0aW9uQ29sb3JIRzogdmFyKC0tZ3NBbm5vdGF0aW9uQ29sb3JIRyk7IC8vIEFubm90YXRpb24vQ29tbWVudCBjb2xvciBmb3IgaGlnaGxpZ2h0XG4kZ3NCYWNrZ3JvdW5kSEc6IHZhcigtLWdzQmFja2dyb3VuZEhHKTsgLy8gYmFja2dyb3VuZCBmb3IgaGlnaGxpZ2h0XG4kZ3NCb3JkZXJIRzogdmFyKC0tZ3NCb3JkZXJIRyk7IC8vIGJvcmRlciBmb3IgaGlnaGxpZ2h0XG5cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgQW5ub3RhdGlvbiBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuJGdzVGV4dENvbG9yQU46IHZhcigtLWdzVGV4dENvbG9yQU4pOyAvLyBUZXh0IGNvbG9yIGZvciBoaWdobGlnaHRcbiRnc0JhY2tncm91bmRBTjogdmFyKC0tZ3NCYWNrZ3JvdW5kQU4pOyAvLyBiYWNrZ3JvdW5kIGZvciBoaWdobGlnaHRcbiRnc0JvcmRlckFOOiB2YXIoLS1nc0JvcmRlckFOKTsgLy8gYm9yZGVyIGZvciBoaWdobGlnaHRcblxuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBWYXJpYXRpb24gVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiRnc1RleHRDb2xvclZBOiB2YXIoLS1nc1RleHRDb2xvclZBKTsgLy8gVGV4dCBjb2xvciBmb3IgaGlnaGxpZ2h0XG4kZ3NCYWNrZ3JvdW5kVkE6IHZhcigtLWdzQmFja2dyb3VuZFZBKTsgLy8gYmFja2dyb3VuZCBmb3IgaGlnaGxpZ2h0XG4kZ3NCb3JkZXJWQTogdmFyKC0tZ3NCb3JkZXJWQSk7IC8vIGJvcmRlciBmb3IgaGlnaGxpZ2h0XG5cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgUGx5IFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4kZ3NUZXh0Q29sb3JQQzogdmFyKC0tZ3NUZXh0Q29sb3JQQyk7IC8vIFRleHQgY29sb3IgZm9yIGdhbWUgc2NvcmUgcGx5XG4kZ3NCYWNrZ3JvdW5kUEM6IHZhcigtLWdzQmFja2dyb3VuZFBDKTsgLy8gYmFja2dyb3VuZCBmb3IgZ2FtZSBzY29yZSBwbHlcbiRnc0JvcmRlclBDOiB2YXIoLS1nc0JvcmRlclBDKTsgLy8gYm9yZGVyIGZvciBnYW1lIHNjb3JlIHBseVxuXG4vKioqKioqKioqKioqKioqKioqKiogQ29udHJvbCBDb2xvcnMgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuJGNzQmFja2dyb3VuZDogdmFyKC0tY3NCYWNrZ3JvdW5kKTsgLy8gYmFja2dyb3VuZCBmb3IgY29udHJvbHNcbiRjc0NvbG9yOiB2YXIoLS1jc0NvbG9yKTsgLy8gY29udHJvbHMgY29sb3IgKGZvcmVncm91bmQpXG5cbi8qKioqKioqKioqKioqKioqKioqKiBCb2FyZCBDb2xvcnMgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuJGJvYXJkQkdEYXJrOiB2YXIoLS1ib2FyZEJHRGFyayk7IC8vIGJvYXJkIGRhcmsgdGlsZVxuJGJvYXJkQkdMaWdodDogdmFyKC0tYm9hcmRCR0xpZ2h0KTsgLy8gYm9hcmQgbGlnaHQgdGlsZVxuJGJvYXJkTGFiZWxMaWdodDogdmFyKC0tYm9hcmRMYWJlbExpZ2h0KTsgLy8gYm9hcmQgbGlnaHQgbGFiZWxcbiRib2FyZExhYmVsRGFyazogdmFyKC0tYm9hcmRMYWJlbERhcmspOyAvLyBib2FyZCBkYXJrIGxhYmVsXG5cbi8vIEdlbmVyYWwgc3R1ZmZcbiR0ZXh0LWNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcbiRiZy1vdXRlcjogdmFyKC0tYmctb3V0ZXIpO1xuJGJnLWlubmVyOiB2YXIoLS1iZy1pbm5lcik7XG5cbiRiZy1jb2xvcjogI2YyZjNmNztcbiRmZy1jb2xvcjogIzM4M2E0MTtcblxuJGdsb3ctc2hhZG93OiAwIDAgMC41ZW0gdHJhbnNwYXJlbnRpemUoJGJsdWUsIDAuMyk7XG5cbjpyb290IHtcbiAgLS1iZy1jb2xvcjogI3skYmctY29sb3J9O1xuICAtLWZnLWNvbG9yOiAjeyRmZy1jb2xvcn07XG5cbiAgLS1yZWQ6ICN7JHJlZH07XG4gIC0tZ3JlZW46ICN7JGdyZWVufTtcbiAgLS1ibHVlOiAjeyRibHVlfTtcbiAgLS1kYXJrLWJsdWU6ICN7JGRhcmstYmx1ZX07XG4gIC0tbWFyb29uOiAjeyRtYXJvb259O1xuICAtLXB1cnBsZTogI3skcHVycGxlfTtcbn1cblxuLy8gOjotbW96LWZvY3VzLWlubmVyLFxuLy8gOi1tb3otZm9jdXNyaW5nIHtcbi8vICAgYm9yZGVyOiAwO1xuLy8gICBjb2xvcjogdHJhbnNwYXJlbnQ7XG4vLyAgIHRleHQtc2hhZG93OiAwIDAgMCAkZmctY29sb3I7XG4vLyB9XG5cbi8vIDo6c2VsZWN0aW9uLFxuLy8gOjotbW96LXNlbGVjdGlvbiB7XG4vLyAgIGNvbG9yOiB3aGl0ZTtcbi8vICAgYmFja2dyb3VuZDogYmxhY2s7XG4vLyB9XG5cbi8vICoge1xuLy8gICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuLy8gICBvdXRsaW5lOiBub25lO1xuLy8gICB1c2VyLXNlbGVjdDogbm9uZTtcbi8vICAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xuLy8gICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuLy8gICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7XG4vLyAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4vLyAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbi8vICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuLy8gICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4vLyAgIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKSAhaW1wb3J0YW50O1xuLy8gICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XG4vLyAgIGN1cnNvcjogZGVmYXVsdDtcbi8vICAgbGV0dGVyLXNwYWNpbmc6IDA7XG4vLyB9XG5cbi8vIC5zZWxlY3RhYmxlLFxuLy8gLnNlbGVjdGFibGUgKiB7XG4vLyAgIGN1cnNvcjogYXV0bztcbi8vICAgdXNlci1zZWxlY3Q6IHRleHQ7XG4vLyAgIC13ZWJraXQtdG91Y2gtY2FsbG91dDogdGV4dDtcbi8vICAgLXdlYmtpdC11c2VyLXNlbGVjdDogdGV4dDtcbi8vICAgLWtodG1sLXVzZXItc2VsZWN0OiB0ZXh0O1xuLy8gICAtbW96LXVzZXItc2VsZWN0OiB0ZXh0O1xuLy8gICAtbXMtdXNlci1zZWxlY3Q6IHRleHQ7XG4vLyB9XG5cbi8vIGh0bWwsXG4vLyBib2R5IHtcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogJGJnLWNvbG9yO1xuLy8gICBjb2xvcjogJGZnLWNvbG9yO1xuLy8gICBtYXJnaW46IDA7XG4vLyAgIHBhZGRpbmc6IDA7XG4vLyAgIGZvbnQtc2l6ZTogMTBwdDtcbi8vICAgaGVpZ2h0OiAxMDAlO1xuLy8gICBvdmVyZmxvdzogYXV0bztcbi8vIH1cblxuLy8gLndpdGgtc2hhZG93IHtcbi8vICAgYm94LXNoYWRvdzogNnB4IDZweCAxMHB4IHRyYW5zcGFyZW50aXplKGJsYWNrLCAwLjkpLCAtNnB4IC02cHggMTBweCB3aGl0ZTtcbi8vIH1cblxuLy8gLm91dHNldCB7XG4vLyAgIEBleHRlbmQgLndpdGgtc2hhZG93O1xuXG4vLyAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4vLyAgIGJhY2tncm91bmQ6ICRiZy1jb2xvcjtcbi8vIH1cblxuLy8gLmluc2V0IHtcbi8vICAgYm9yZGVyLXJhZGl1czogMTBweDtcbi8vICAgYm94LXNoYWRvdzogMCAwIHRyYW5zcGFyZW50LCAwIDAgdHJhbnNwYXJlbnQsXG4vLyAgICAgaW5zZXQgM3B4IDNweCA1cHggdHJhbnNwYXJlbnRpemUoYmxhY2ssIDAuOSksIGluc2V0IC0zcHggLTNweCA1cHggd2hpdGU7XG4vLyAgIGJhY2tncm91bmQ6IGxpZ2h0ZW4oJGJnLWNvbG9yLCAyJSk7XG4vLyB9XG5cbi8vIC5wYXBlciB7XG4vLyAgIEBleHRlbmQgLm91dHNldDtcbi8vICAgcGFkZGluZzogMTBweCAyMHB4IDIwcHg7XG4vLyAgIG1hcmdpbi10b3A6IDIwcHg7XG4vLyAgIG1pbi1oZWlnaHQ6IDEwMHB4O1xuLy8gICBmb250LXNpemU6IDEuMmVtO1xuLy8gICBiYWNrZ3JvdW5kOiAkYmctY29sb3I7XG4vLyB9XG5cbi8vIHNlY3Rpb24sXG4vLyBhcnRpY2xlLFxuLy8gLnNlY3Rpb24sXG4vLyAuYXJ0aWNsZSxcbi8vIC5wYXBlciB7XG4vLyAgIGxpbmUtaGVpZ2h0OiAyZW07XG4vLyAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbi8vICAgd29yZC1icmVhazogbm9ybWFsO1xuLy8gICBsaW5lLWhlaWdodDogMmVtO1xuLy8gfVxuXG4vLyBpbnB1dFt0eXBlPVwidGV4dFwiXSxcbi8vIGlucHV0W3R5cGU9XCJzZWFyY2hcIl0sXG4vLyBpbnB1dFt0eXBlPVwidGVsXCJdLFxuLy8gaW5wdXRbdHlwZT1cInVybFwiXSxcbi8vIGlucHV0W3R5cGU9XCJlbWFpbFwiXSxcbi8vIGlucHV0W3R5cGU9XCJwYXNzd29yZFwiXSxcbi8vIGlucHV0W3R5cGU9XCJkYXRlXCJdLFxuLy8gaW5wdXRbdHlwZT1cIm1vbnRoXCJdLFxuLy8gaW5wdXRbdHlwZT1cIndlZWtcIl0sXG4vLyBpbnB1dFt0eXBlPVwidGltZVwiXSxcbi8vIGlucHV0W3R5cGU9XCJudW1iZXJcIl0sXG4vLyBpbnB1dFt0eXBlPVwiY29sb3JcIl0sXG4vLyBzZWxlY3QsXG4vLyB0ZXh0YXJlYSB7XG4vLyAgIGJvcmRlcjogMDtcbi8vICAgYmFja2dyb3VuZDogJGJnLWNvbG9yO1xuLy8gICBjb2xvcjogJGZnLWNvbG9yO1xuLy8gICBmb250LXdlaWdodDogbm9ybWFsO1xuLy8gICBwYWRkaW5nOiAwIDEuMjVlbTtcbi8vICAgbGluZS1oZWlnaHQ6IDEuMjVlbTtcbi8vICAgaGVpZ2h0OiAzLjVlbTtcbi8vICAgbWFyZ2luOiAxMHB4IDA7XG4vLyAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuLy8gICBjdXJzb3I6IHRleHQ7XG4vLyAgIHVzZXItc2VsZWN0OiB0ZXh0O1xuLy8gICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IHRleHQ7XG4vLyAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IHRleHQ7XG4vLyAgIC1raHRtbC11c2VyLXNlbGVjdDogdGV4dDtcbi8vICAgLW1vei11c2VyLXNlbGVjdDogdGV4dDtcbi8vICAgLW1zLXVzZXItc2VsZWN0OiB0ZXh0O1xuLy8gICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuMnM7XG5cbi8vICAgJjpub3Qoc2VsZWN0KSB7XG4vLyAgICAgQGV4dGVuZCAuaW5zZXQ7XG5cbi8vICAgICAmOmZvY3VzIHtcbi8vICAgICAgIEBleHRlbmQgLm91dHNldDtcbi8vICAgICB9XG4vLyAgIH1cbi8vIH1cblxuLy8gdGV4dGFyZWEge1xuLy8gICBoZWlnaHQ6IDM1MHB4O1xuLy8gICBwYWRkaW5nOiAxLjI1ZW07XG4vLyB9XG5cbi8vIHNlbGVjdCB7XG4vLyAgIEBleHRlbmQgLm91dHNldDtcblxuLy8gICBjdXJzb3I6IHBvaW50ZXI7XG4vLyAgIGJhY2tncm91bmQ6IHVybChkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUIyWlhKemFXOXVQU0l4TGpFaUlIWnBaWGRDYjNnOUlqQWdNQ0F4T1NBeE9TSWdlRzFzYm5NOUltaDBkSEE2THk5M2QzY3Vkek11YjNKbkx6SXdNREF2YzNabklqNDhaeUIwY21GdWMyWnZjbTA5SW0xaGRISnBlQ2d1TURNMElEQWdNQ0F1TURNMElDMDJMamdnTVM0M1pTMDFLU0lnYzNSNWJHVTlJbVpwYkd3Nkl6ZGlOMlU0WXlJK1BIQmhkR2dnWkQwaWJUUTRNQ0F6TkRRdE1qRXhMVEl4TW1NdE1UWXRNVFl0TkRFdE1UWXROVGNnTUMweE5pQXhOaTB4TmlBME1pQXdJRFUzYkRJek9DQXlNemxqT0M0MElEZ3VOU0F5TUNBeE1pQXpNU0F4TWlBeE1TQXdMalUySURJeUxUTXVNaUF6TVMweE1td3lNemd0TWpNNVl6RTJMVEUySURFMkxUUXlJREF0TlRkekxUUXhMVEUyTFRVM0lEQjZJaUJ6ZEhsc1pUMGlabWxzYkRvak4ySTNaVGhqSWk4K1BDOW5Qand2YzNablBnbz0pXG4vLyAgICAgbm8tcmVwZWF0IHJpZ2h0IDFlbSBjZW50ZXI7XG4vLyAgIGJhY2tncm91bmQtc2l6ZTogMS4yZW07XG4vLyAgIHBhZGRpbmctcmlnaHQ6IDNlbTtcbi8vIH1cblxuLy8gaW5wdXQ6OnBsYWNlaG9sZGVyLFxuLy8gdGV4dGFyZWE6OnBsYWNlaG9sZGVyIHtcbi8vICAgb3BhY2l0eTogMTtcbi8vICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzO1xuLy8gICBjb2xvcjogaW5oZXJpdDtcbi8vIH1cblxuLy8gaW5wdXQ6Zm9jdXM6OnBsYWNlaG9sZGVyLFxuLy8gdGV4dGFyZWE6Zm9jdXM6OnBsYWNlaG9sZGVyIHtcbi8vICAgb3BhY2l0eTogMC4yO1xuLy8gfVxuXG4vLyBpbnB1dDotbXMtaW5wdXQtcGxhY2Vob2xkZXIsXG4vLyB0ZXh0YXJlYTotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuLy8gICBvcGFjaXR5OiAxO1xuLy8gICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnM7XG4vLyAgIGNvbG9yOiBpbmhlcml0O1xuLy8gfVxuXG4vLyBpbnB1dDpmb2N1czotbXMtaW5wdXQtcGxhY2Vob2xkZXIsXG4vLyB0ZXh0YXJlYTpmb2N1czotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuLy8gICBvcGFjaXR5OiAwLjI7XG4vLyB9XG5cbi8vIGlucHV0W3R5cGU9XCJzZWFyY2hcIl06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24sXG4vLyBpbnB1dFt0eXBlPVwic2VhcmNoXCJdOjotd2Via2l0LXNlYXJjaC1jYW5jZWwtYnV0dG9uLFxuLy8gaW5wdXRbdHlwZT1cInNlYXJjaFwiXTo6LXdlYmtpdC1zZWFyY2gtcmVzdWx0cy1idXR0b24sXG4vLyBpbnB1dFt0eXBlPVwic2VhcmNoXCJdOjotd2Via2l0LXNlYXJjaC1yZXN1bHRzLWRlY29yYXRpb24ge1xuLy8gICBkaXNwbGF5OiBub25lO1xuLy8gfVxuXG4vLyBidXR0b24sXG4vLyBpbnB1dFt0eXBlPVwiYnV0dG9uXCJdLFxuLy8gaW5wdXRbdHlwZT1cInN1Ym1pdFwiXSxcbi8vIGlucHV0W3R5cGU9XCJyZXNldFwiXSB7XG4vLyAgIEBleHRlbmQgLm91dHNldDtcblxuLy8gICBib3JkZXI6IDA7XG4vLyAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuLy8gICBwYWRkaW5nOiAxMHB4IDA7XG4vLyAgIHdpZHRoOiA4ZW07XG4vLyAgIHRleHQtYWxpZ246IGNlbnRlcjtcbi8vICAgY3Vyc29yOiBwb2ludGVyO1xuLy8gICBjb2xvcjogaW5oZXJpdDtcbi8vICAgZm9udC1zaXplOiAxLjFyZW07XG4vLyAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGJhY2tncm91bmQtY29sb3IsIGJveC1zaGFkb3c7XG4vLyAgIHRyYW5zaXRpb24tZGVsYXk6IDAuMnM7XG4vLyAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMnM7XG5cbi8vICAgJi5hY3RpdmUsXG4vLyAgICY6YWN0aXZlIHtcbi8vICAgICBAZXh0ZW5kIC5pbnNldDtcblxuLy8gICAgIHRyYW5zaXRpb24tZGVsYXk6IDBzO1xuLy8gICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMXM7XG4vLyAgIH1cblxuLy8gICBAZWFjaCAkbmFtZSwgJGNvbG9yIGluIChcInJlZFwiOiAkcmVkLCBcImdyZWVuXCI6ICRncmVlbiwgXCJibHVlXCI6ICRibHVlKSB7XG4vLyAgICAgQGF0LXJvb3QgLiN7JG5hbWV9LWJ1dHRvbixcbi8vICAgICAgICYuI3skbmFtZX0tYnV0dG9uIHtcbi8vICAgICAgIEBleHRlbmQgYnV0dG9uO1xuXG4vLyAgICAgICAkX2JnLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAkY29sb3IgMzAlLCBsaWdodGVuKCRjb2xvciwgNiUpIDgwJSk7XG5cbi8vICAgICAgIGNvbG9yOiB3aGl0ZTtcbi8vICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuLy8gICAgICAgdGV4dC1zaGFkb3c6IDAgMC4xZW0gMC4xZW0gdHJhbnNwYXJlbnRpemUoYmxhY2ssIDAuMyk7XG4vLyAgICAgICBiYWNrZ3JvdW5kOiAkX2JnLWltYWdlO1xuLy8gICAgICAgYm94LXNoYWRvdzogMCAwIDAuNWVtIHRyYW5zcGFyZW50aXplKCRjb2xvciwgMC4zKSwgMCAwIHRyYW5zcGFyZW50LFxuLy8gICAgICAgICBpbnNldCAwIC01cHggMCB0cmFuc3BhcmVudGl6ZShibGFjaywgMC45NSksXG4vLyAgICAgICAgIGluc2V0IDAgMnB4IDAgdHJhbnNwYXJlbnRpemUod2hpdGUsIDAuOCk7XG4vLyAgICAgICBib3JkZXItcmFkaXVzOiA2cHggNnB4IDhweCA4cHg7XG4vLyAgICAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBib3gtc2hhZG93LCBib3JkZXItcmFkaXVzO1xuXG4vLyAgICAgICAmLmFjdGl2ZSxcbi8vICAgICAgICY6YWN0aXZlIHtcbi8vICAgICAgICAgYmFja2dyb3VuZDogJF9iZy1pbWFnZTtcbi8vICAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuLy8gICAgICAgICBib3gtc2hhZG93OiAwIDAgdHJhbnNwYXJlbnQsIDAgMCB0cmFuc3BhcmVudCxcbi8vICAgICAgICAgICBpbnNldCAwIDJweCA1cHggMnB4IHRyYW5zcGFyZW50aXplKGJsYWNrLCAwLjgpO1xuLy8gICAgICAgfVxuLy8gICAgIH1cbi8vICAgfVxuLy8gfVxuXG4vLyBsYWJlbCB7XG4vLyAgICYsXG4vLyAgICYgKiB7XG4vLyAgICAgY3Vyc29yOiBwb2ludGVyO1xuLy8gICB9XG5cbi8vICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuLy8gICBwYWRkaW5nOiAwLjU2ZW0gMDtcbi8vIH1cblxuLy8gYSB7XG4vLyAgICYsXG4vLyAgICY6bGluayxcbi8vICAgJjp2aXNpdGVkLFxuLy8gICAmOmhvdmVyICY6YWN0aXZlIHtcbi8vICAgICAmLFxuLy8gICAgICYgKiB7XG4vLyAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4vLyAgICAgfVxuXG4vLyAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4vLyAgICAgY29sb3I6ICRibHVlO1xuLy8gICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuLy8gICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbi8vICAgfVxuLy8gfVxuXG4vLyBoMSxcbi8vIGgyLFxuLy8gaDMsXG4vLyBoNCxcbi8vIGg1LFxuLy8gaDYge1xuLy8gICBsaW5lLWhlaWdodDogMS41ZW07XG4vLyB9XG5cbi8vIGgxIHtcbi8vICAgZm9udC1zaXplOiA0ZW07XG4vLyAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuLy8gICBtYXJnaW46IDAuN2VtIDA7XG4vLyB9XG5cbi8vIGgyIHtcbi8vICAgZm9udC1zaXplOiAzZW07XG4vLyAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuLy8gICBtYXJnaW46IDAuOGVtIDA7XG4vLyB9XG5cbi8vIGgzIHtcbi8vICAgZm9udC1zaXplOiAyLjVlbTtcbi8vICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4vLyAgIG1hcmdpbjogMC45ZW0gMDtcbi8vIH1cblxuLy8gaDQge1xuLy8gICBmb250LXNpemU6IDJlbTtcbi8vICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4vLyAgIG1hcmdpbjogMWVtIDA7XG4vLyB9XG5cbi8vIGg1IHtcbi8vICAgbWFyZ2luOiAwLjVlbSAwO1xuLy8gICBmb250LXNpemU6IDEuMmVtO1xuLy8gICBmb250LXdlaWdodDogbm9ybWFsO1xuLy8gfVxuXG4vLyBoNiB7XG4vLyAgIG1hcmdpbjogMWVtIDAgMWVtIDEuNGVtO1xuLy8gICBmb250LXNpemU6IDFlbTtcbi8vICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4vLyB9XG5cbi8vIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSxcbi8vIGlucHV0W3R5cGU9XCJyYWRpb1wiXSB7XG4vLyAgICRfYm9yZGVyLXdpZHRoOiAwLjE1ZW07XG4vLyAgICRfYm94LXNoYWRvdzogMnB4IDJweCAzcHggdHJhbnNwYXJlbnRpemUoYmxhY2ssIDAuOCksIC0ycHggLTJweCAzcHggd2hpdGUsXG4vLyAgICAgaW5zZXQgMXB4IDFweCAycHggdHJhbnNwYXJlbnRpemUoYmxhY2ssIDAuOCksIGluc2V0IC0xcHggLTFweCAycHggd2hpdGU7XG4vLyAgIGZvbnQtc2l6ZTogMWVtO1xuLy8gICBjdXJzb3I6IHBvaW50ZXI7XG4vLyAgIGhlaWdodDogMS4yZW07XG4vLyAgIHdpZHRoOiAxLjJlbTtcbi8vICAgbWFyZ2luOiAwIDAuM2VtO1xuLy8gICBib3gtc2hhZG93OiAkX2JveC1zaGFkb3c7XG4vLyAgIGJvcmRlcjogJF9ib3JkZXItd2lkdGggc29saWQgJGJnLWNvbG9yO1xuLy8gICB2ZXJ0aWNhbC1hbGlnbjogdGV4dC1ib3R0b207XG4vLyAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGJhY2tncm91bmQsIGJveC1zaGFkb3c7XG4vLyAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMnM7XG5cbi8vICAgJjphY3RpdmUge1xuLy8gICAgIGJveC1zaGFkb3c6ICRfYm94LXNoYWRvdywgaW5zZXQgMCAwLjFlbSAwLjI1ZW0gdHJhbnNwYXJlbnRpemUoYmxhY2ssIDAuOCk7XG4vLyAgIH1cblxuLy8gICAmOmNoZWNrZWQge1xuLy8gICAgIGJvcmRlci13aWR0aDogMC4xZW07XG4vLyAgICAgYm9yZGVyLWNvbG9yOiBkYXJrZW4oJGJsdWUsIDEwJSk7XG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJsdWU7XG4vLyAgIH1cbi8vIH1cblxuLy8gaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdIHtcbi8vICAgYm9yZGVyLXJhZGl1czogMjUlO1xuXG4vLyAgICY6Y2hlY2tlZCB7XG4vLyAgICAgYm94LXNoYWRvdzogJGdsb3ctc2hhZG93LCBpbnNldCAwIC0wLjFlbSAwIHRyYW5zcGFyZW50aXplKGJsYWNrLCAwLjgpLFxuLy8gICAgICAgaW5zZXQgMCAwLjFlbSAwLjFlbSB0cmFuc3BhcmVudGl6ZSh3aGl0ZSwgMC44KTtcbi8vICAgfVxuLy8gfVxuXG4vLyBpbnB1dFt0eXBlPVwicmFkaW9cIl0ge1xuLy8gICBib3JkZXItcmFkaXVzOiAxMDAlO1xuXG4vLyAgICY6Y2hlY2tlZCB7XG4vLyAgICAgYm94LXNoYWRvdzogJGdsb3ctc2hhZG93O1xuLy8gICAgIGJveC1zaGFkb3c6ICRnbG93LXNoYWRvdywgaW5zZXQgMCAwLjEyZW0gMC4xZW0gdHJhbnNwYXJlbnRpemUod2hpdGUsIDAuNzUpO1xuLy8gICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDAuMTVlbTtcbi8vICAgfVxuLy8gfVxuXG4vLyAuY2hlY2t0ZXh0IHtcbi8vICAgd2lkdGg6IGF1dG87XG4vLyAgIG1hcmdpbjogMC41ZW07XG5cbi8vICAgaW5wdXQge1xuLy8gICAgIGRpc3BsYXk6IG5vbmU7XG5cbi8vICAgICArIHNwYW4ge1xuLy8gICAgICAgQGV4dGVuZCBidXR0b247XG5cbi8vICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuLy8gICAgICAgcGFkZGluZzogMWVtO1xuLy8gICAgICAgdHJhbnNpdGlvbi1kZWxheTogMHM7XG4vLyAgICAgfVxuXG4vLyAgICAgJjpjaGVja2VkICsgc3BhbiB7XG4vLyAgICAgICBAZXh0ZW5kIC5ibHVlLWJ1dHRvbjtcblxuLy8gICAgICAgcGFkZGluZzogMWVtO1xuLy8gICAgIH1cbi8vICAgfVxuLy8gfVxuXG4vLyAuc3dpdGNoIHtcbi8vICAgJF9oZWlnaHQ6IDJyZW07XG4vLyAgICRfd2lkdGg6IDhyZW07XG4vLyAgICRfaGFuZGxlLXdpZHRoOiAkX2hlaWdodDtcbi8vICAgJF9oYW5kbGUtdHJhbnNsYXRpb246ICRfd2lkdGggLSAkX2hhbmRsZS13aWR0aDtcblxuLy8gICBoZWlnaHQ6ICRfaGVpZ2h0O1xuLy8gICB3aWR0aDogJF93aWR0aDtcbi8vICAgcGFkZGluZzogMDtcbi8vICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4vLyAgIGlucHV0IHtcbi8vICAgICBkaXNwbGF5OiBub25lO1xuXG4vLyAgICAgKyBkaXYge1xuLy8gICAgICAgaGVpZ2h0OiAxMDAlO1xuLy8gICAgICAgd2lkdGg6IDEwMCU7XG4vLyAgICAgICBib3JkZXItcmFkaXVzOiA5OTlweDtcbi8vICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuLy8gICAgICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYm94LXNoYWRvdywgYmFja2dyb3VuZC1jb2xvcjtcbi8vICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMnM7XG4vLyAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjJzO1xuLy8gICAgICAgYm94LXNoYWRvdzogM3B4IDNweCAycHggLTJweCB0cmFuc3BhcmVudGl6ZShibGFjaywgMC45KSxcbi8vICAgICAgICAgaW5zZXQgMnB4IDJweCAycHggMXB4IHRyYW5zcGFyZW50aXplKGJsYWNrLCAwLjkpLFxuLy8gICAgICAgICBpbnNldCAtMnB4IC0ycHggMXB4IHdoaXRlO1xuXG4vLyAgICAgICAmOjpiZWZvcmUge1xuLy8gICAgICAgICBjb250ZW50OiBcIlwiO1xuLy8gICAgICAgICBkaXNwbGF5OiBibG9jaztcbi8vICAgICAgICAgaGVpZ2h0OiBjYWxjKCN7JF9oYW5kbGUtd2lkdGh9ICsgNHB4KTtcbi8vICAgICAgICAgd2lkdGg6IGNhbGMoI3skX2hhbmRsZS13aWR0aH0gKyA0cHgpO1xuLy8gICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuLy8gICAgICAgICBib3JkZXI6IHNvbGlkIHdoaXRlIDNweDtcbi8vICAgICAgICAgYmFja2dyb3VuZDogJGJsdWU7XG4vLyAgICAgICAgIGJveC1zaGFkb3c6IDAgM3B4IDEwcHggdHJhbnNwYXJlbnRpemUoYmxhY2ssIDAuOCksXG4vLyAgICAgICAgICAgaW5zZXQgMCAtMXB4IDNweCB0cmFuc3BhcmVudGl6ZShibGFjaywgMC45KTtcbi8vICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTZweCk7XG4vLyAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzO1xuLy8gICAgICAgfVxuLy8gICAgIH1cblxuLy8gICAgICY6Y2hlY2tlZCArIGRpdiB7XG4vLyAgICAgICBiYWNrZ3JvdW5kOiAkYmx1ZTtcbi8vICAgICAgIGJveC1zaGFkb3c6ICRnbG93LXNoYWRvdywgaW5zZXQgMCAycHggMnB4IDJweCB0cmFuc3BhcmVudGl6ZShibGFjaywgMC43KSxcbi8vICAgICAgICAgaW5zZXQgMCAwIHRyYW5zcGFyZW50O1xuXG4vLyAgICAgICAmOjpiZWZvcmUge1xuLy8gICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgkX2hhbmRsZS10cmFuc2xhdGlvbiwgLTZweCk7XG4vLyAgICAgICB9XG4vLyAgICAgfVxuLy8gICB9XG4vLyB9XG5cbi8vIGhyIHtcbi8vICAgQGV4dGVuZCAuaW5zZXQ7XG4vLyAgIHdpZHRoOiA3MiU7XG4vLyAgIGhlaWdodDogOHB4O1xuLy8gICBmbG9hdDogcmlnaHQ7XG4vLyAgIGJvcmRlcjogMDtcbi8vIH1cblxuLy8gY29kZSxcbi8vIHByZSB7XG4vLyAgIHBhZGRpbmc6IDAuNWVtIDFlbTtcbi8vICAgYm9yZGVyLXJhZGl1czogNHB4O1xuLy8gICBvdmVyZmxvdzogYXV0bztcbi8vICAgYm94LXNoYWRvdzogMCA1cHggMzBweCAwIHRyYW5zcGFyZW50aXplKGJsYWNrLCAwLjk1KTtcbi8vIH1cblxuLy8gY29kZSB7XG4vLyAgIGJhY2tncm91bmQ6ICNlNmU2ZTY7XG4vLyB9XG5cbi8vIHByZSB7XG4vLyAgIGJhY2tncm91bmQ6IHdoaXRlO1xuLy8gICBtYXJnaW46IDRlbSAwO1xuLy8gfVxuXG4vLyBjb2RlLFxuLy8gcHJlIHtcbi8vICAgJixcbi8vICAgJiAqIHtcbi8vICAgICBmb250LXNpemU6IDAuOXJlbTtcbi8vICAgICBsaW5lLWhlaWdodDogMmVtO1xuLy8gICAgIGN1cnNvcjogYXV0bztcbi8vICAgICB1c2VyLXNlbGVjdDogdGV4dDtcbi8vICAgICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IHRleHQ7XG4vLyAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogdGV4dDtcbi8vICAgICAta2h0bWwtdXNlci1zZWxlY3Q6IHRleHQ7XG4vLyAgICAgLW1vei11c2VyLXNlbGVjdDogdGV4dDtcbi8vICAgICAtbXMtdXNlci1zZWxlY3Q6IHRleHQ7XG4vLyAgIH1cbi8vIH1cblxuLy8gYmxvY2txdW90ZSB7XG4vLyAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuLy8gICBwYWRkaW5nOiAwLjVlbSAxZW07XG4vLyAgIGJvcmRlci1yYWRpdXM6IDRweDtcbi8vICAgYm94LXNoYWRvdzogMCA1cHggMzBweCAwIHRyYW5zcGFyZW50aXplKGJsYWNrLCAwLjk1KTtcbi8vICAgYm9yZGVyLWxlZnQ6IDZweCBzb2xpZCAkYmx1ZTtcbi8vIH1cbiIsIkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnQ2F2ZWF0JztcbiAgICBzcmM6IHVybCgnLi4vLi4vZm9udHMvQm9sZC9DYXZlYXQtQm9sZC53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcbiAgICAgICAgdXJsKCcuLi8uLi9mb250cy9Cb2xkL0NhdmVhdC1Cb2xkLndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC1kaXNwbGF5OiBzd2FwO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ0NhdmVhdCc7XG4gICAgc3JjOiB1cmwoJy4uLy4uL2ZvbnRzL1JlZ3VsYXIvQ2F2ZWF0LVJlZ3VsYXIud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXG4gICAgICAgIHVybCgnLi4vLi4vZm9udHMvUmVndWxhci9DYXZlYXQtUmVndWxhci53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC1kaXNwbGF5OiBzd2FwO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdGaWd1cmluZVN5bWJvbFQxJztcbiAgc3JjOiB1cmwoJy4uLy4uL2ZvbnRzLzNyZCBQYXJ0eS9DaGVzc1ZhcmlhbnRzL0ZpZ3VyaW5lU3ltYm9sVDFCb2xkLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxuICAgICAgdXJsKCcuLi8uLi9mb250cy8zcmQgUGFydHkvQ2hlc3NWYXJpYW50cy9GaWd1cmluZVN5bWJvbFQxQm9sZC53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnRmlndXJpbmVTeW1ib2xUMSc7XG4gIHNyYzogdXJsKCcuLi8uLi9mb250cy8zcmQgUGFydHkvQ2hlc3NWYXJpYW50cy9GaWd1cmluZVN5bWJvbFQxLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxuICAgICAgdXJsKCcuLi8uLi9mb250cy8zcmQgUGFydHkvQ2hlc3NWYXJpYW50cy9GaWd1cmluZVN5bWJvbFQxLndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG59XG5cbiIsIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJDYXZlYXRcIjtcbiAgc3JjOiB1cmwoXCIuLi8uLi9mb250cy9Cb2xkL0NhdmVhdC1Cb2xkLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpLCB1cmwoXCIuLi8uLi9mb250cy9Cb2xkL0NhdmVhdC1Cb2xkLndvZmZcIikgZm9ybWF0KFwid29mZlwiKTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkNhdmVhdFwiO1xuICBzcmM6IHVybChcIi4uLy4uL2ZvbnRzL1JlZ3VsYXIvQ2F2ZWF0LVJlZ3VsYXIud29mZjJcIikgZm9ybWF0KFwid29mZjJcIiksIHVybChcIi4uLy4uL2ZvbnRzL1JlZ3VsYXIvQ2F2ZWF0LVJlZ3VsYXIud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJGaWd1cmluZVN5bWJvbFQxXCI7XG4gIHNyYzogdXJsKFwiLi4vLi4vZm9udHMvM3JkIFBhcnR5L0NoZXNzVmFyaWFudHMvRmlndXJpbmVTeW1ib2xUMUJvbGQud29mZjJcIikgZm9ybWF0KFwid29mZjJcIiksIHVybChcIi4uLy4uL2ZvbnRzLzNyZCBQYXJ0eS9DaGVzc1ZhcmlhbnRzL0ZpZ3VyaW5lU3ltYm9sVDFCb2xkLndvZmZcIikgZm9ybWF0KFwid29mZlwiKTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkZpZ3VyaW5lU3ltYm9sVDFcIjtcbiAgc3JjOiB1cmwoXCIuLi8uLi9mb250cy8zcmQgUGFydHkvQ2hlc3NWYXJpYW50cy9GaWd1cmluZVN5bWJvbFQxLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpLCB1cmwoXCIuLi8uLi9mb250cy8zcmQgUGFydHkvQ2hlc3NWYXJpYW50cy9GaWd1cmluZVN5bWJvbFQxLndvZmZcIikgZm9ybWF0KFwid29mZlwiKTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG59XG4vKioqKioqKioqKioqKioqKioqKiBNZW51ICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBDb250YWluZXIgVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgQ29udGFpbmVyIFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIENvbnRhaW5lciBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBIaWdobGlnaHQgVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgQW5ub3RhdGlvbiBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBWYXJpYXRpb24gVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgUGx5IFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKiogQ29udHJvbCBDb2xvcnMgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKioqIEJvYXJkIENvbG9ycyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG46cm9vdCB7XG4gIC0tYmctY29sb3I6ICNmMmYzZjc7XG4gIC0tZmctY29sb3I6ICMzODNhNDE7XG4gIC0tcmVkOiAjZTQzMDMwO1xuICAtLWdyZWVuOiAjMTlhMTg3O1xuICAtLWJsdWU6ICMzNjdiZjA7XG4gIC0tZGFyay1ibHVlOiAjMjY1YWIxO1xuICAtLW1hcm9vbjogI2I4MTc0YztcbiAgLS1wdXJwbGU6ICM4YzQyYWI7XG59XG5cbi5tZW51LWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtaW4td2lkdGg6IDI0MHB4O1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIGNsaXA6IGF1dG87XG59XG5cbi5pbm5lci10ZXh0IHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uZGl2aWRlci10ZXh0IHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsaW5lLWhlaWdodDogMjhweDtcbiAgbWFyZ2luLWJvdHRvbTogLTJweDtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgbWFyZ2luLXRvcDogMnB4O1xuICB3aWR0aDogMTAwJTtcbiAgY2xlYXI6IGJvdGg7XG59XG5cbi5jb2xvci1pbnB1dCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1lQmFja2dyb3VuZCk7XG4gIGZvbnQtc2l6ZTogMi4xdm1pbjtcbiAgbWFyZ2luOiAxMHB4O1xuICBmbG9hdDogbGVmdDtcbn1cblxubWF0LWRpdmlkZXIge1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBoZWlnaHQ6IDFweDtcbiAgbGluZS1oZWlnaHQ6IDJweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1sZWZ0OiA4cHg7XG4gIGJvcmRlcjogd2hpdGUgc29saWQgMXB4O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ThemesMenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'themes-menu',
                templateUrl: './themes-menu.component.html',
                styleUrls: ['./themes-menu.component.scss']
            }]
    }], function () { return [{ type: _services_colors_service__WEBPACK_IMPORTED_MODULE_1__["ColorService"] }, { type: _services_olga_service__WEBPACK_IMPORTED_MODULE_2__["OlgaService"] }]; }, { container: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['container']
        }] }); })();


/***/ }),

/***/ "./src/app/olga-status/olga-status.component.ts":
/*!******************************************************!*\
  !*** ./src/app/olga-status/olga-status.component.ts ***!
  \******************************************************/
/*! exports provided: OlgaStatusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OlgaStatusComponent", function() { return OlgaStatusComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _services_olga_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/olga.service */ "./src/app/services/olga.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





class OlgaStatusComponent {
    constructor(olga) {
        this.olga = olga;
        this.status = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('White to move.');
        olga.attachStatus(this);
    }
    ngOnInit() {
    }
    openEngine() {
    }
    updateStatus(turn, last, move) {
        let message = 'White';
        if (turn === 'b') {
            message = 'Black';
        }
        message += ' to move. ';
        if (last) {
            let notation = this.olga.getMoveNotation(last);
            message += 'Last: ' + last.fullMoveNumber() + (turn === 'b' ? '.' : '..') + notation;
        }
        this.status.next(message);
    }
    resetStatus() {
        this.status.next('White to move.');
    }
}
OlgaStatusComponent.ɵfac = function OlgaStatusComponent_Factory(t) { return new (t || OlgaStatusComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_olga_service__WEBPACK_IMPORTED_MODULE_2__["OlgaService"])); };
OlgaStatusComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OlgaStatusComponent, selectors: [["olga-status"]], decls: 3, vars: 3, consts: [[1, "status-text"]], template: function OlgaStatusComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx.status));
    } }, pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"]], styles: ["@font-face {\n  font-family: \"Caveat\";\n  src: url('Caveat-Bold.woff2') format(\"woff2\"), url('Caveat-Bold.woff') format(\"woff\");\n  font-weight: bold;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"Caveat\";\n  src: url('Caveat-Regular.woff2') format(\"woff2\"), url('Caveat-Regular.woff') format(\"woff\");\n  font-weight: 600;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"FigurineSymbolT1\";\n  src: url('FigurineSymbolT1Bold.woff2') format(\"woff2\"), url('FigurineSymbolT1Bold.woff') format(\"woff\");\n  font-weight: bold;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"FigurineSymbolT1\";\n  src: url('FigurineSymbolT1.woff2') format(\"woff2\"), url('FigurineSymbolT1.woff') format(\"woff\");\n  font-weight: 600;\n  font-style: normal;\n  font-display: swap;\n}\n\n\n\n\n\n\n\n\n\n\n[_ngcontent-%COMP%]:root {\n  --bg-color: #f2f3f7;\n  --fg-color: #383a41;\n  --red: #e43030;\n  --green: #19a187;\n  --blue: #367bf0;\n  --dark-blue: #265ab1;\n  --maroon: #b8174c;\n  --purple: #8c42ab;\n}\n.status-text[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-family: \"georgia\", garamond, palatino, bookman, \"Times New Roman\", times;\n  float: left;\n  text-align: left;\n  color: black;\n  line-height: 64px;\n  font-size: 130%;\n  vertical-align: bottom;\n  margin-top: 20px;\n  margin-left: 4px;\n  -moz-user-select: none;\n  -o-user-select: none;\n  -webkit-user-select: none;\n          user-select: none;\n}\n.button[_ngcontent-%COMP%] {\n  position: absolute;\n  border: black 2px solid;\n  background: var(--gsBackground);\n  border-radius: 2px;\n  float: right;\n  display: flexbox;\n  width: 30%;\n  height: 48px;\n  right: 0px;\n  top: 14px;\n  font-size: 28px;\n  line-height: 48px;\n  max-width: 240px;\n  min-width: 120px;\n}\n.feather[_ngcontent-%COMP%] {\n  left: 8px;\n  margin-top: 8px;\n  width: 33%;\n  height: 75%;\n  stroke: var(--boardBGDark);\n  stroke-width: 2;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n  fill: none;\n}\n.buttontext[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 42%;\n  height: 48px;\n  right: 20%;\n  top: 1%;\n  line-height: 48px;\n  color: var(--boardBGDark);\n  font-family: Cambria, Cochin, Georgia;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMuc2NzcyIsInNyYy9hc3NldHMvc2Nzcy9tb2R1bGVzL19mb250cy5zY3NzIiwic3JjL2FwcC9vbGdhLXN0YXR1cy9vbGdhLXN0YXR1cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4RUFBQTtBQ0FBO0VBQ0kscUJBQUE7RUFDQSxxRkFBQTtFQUVBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0NKO0FERUE7RUFDSSxxQkFBQTtFQUNBLDJGQUFBO0VBRUEsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDREo7QURJQTtFQUNFLCtCQUFBO0VBQ0EsdUdBQUE7RUFFQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNIRjtBRE1BO0VBQ0UsK0JBQUE7RUFDQSwrRkFBQTtFQUVBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0xGO0FGYUEsK0VBQUE7QUFHQSwrRUFBQTtBQVFBLCtFQUFBO0FBTUEsK0VBQUE7QUFNQSwrRUFBQTtBQU1BLGdGQUFBO0FBS0EsK0VBQUE7QUFLQSx5RUFBQTtBQUtBLHlFQUFBO0FBSUEsdUVBQUE7QUFnQkE7RUFDRSxtQkFBQTtFQUNBLG1CQUFBO0VBRUEsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBRWxFRjtBQTdDQTtFQUNFLGlCQUFBO0VBQ0EsNkVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBRUEsc0JBQUE7RUFFQSxvQkFBQTtFQUNBLHlCQUFBO1VBQUEsaUJBQUE7QUFnREY7QUE3Q0E7RUFDRSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsK0JGc0JhO0VFckJiLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFnREY7QUE1Q0E7RUFDRSxTQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsMEJGOENZO0VFN0NaLGVBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsVUFBQTtBQStDRjtBQTdDQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsT0FBQTtFQUNBLGlCQUFBO0VBQ0EseUJGaUNZO0VFaENaLHFDQUFBO0FBZ0RGIiwiZmlsZSI6InNyYy9hcHAvb2xnYS1zdGF0dXMvb2xnYS1zdGF0dXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG5cbkBpbXBvcnQgXCIuL2Fzc2V0cy9zY3NzL21vZHVsZXMvX2ZvbnRzLnNjc3NcIjtcbiRnYW1lc2NvcmUtZmFtaWx5OiBcIkZpZ3VyaW5lU3ltYm9sVDFcIjtcbiRnYW1lc2NvcmUtaGlnaGxpZ2h0OiAjNTg1ODU4ZmY7XG4kZ2FtZXNjb3JlLWZvcmVncm91bmQ6IHdoaXRlO1xuXG4kcmVkOiAjZTQzMDMwO1xuJGdyZWVuOiAjMTlhMTg3O1xuJGxpZ2h0LWJsdWU6ICMwMGZmZmZmZjtcbiRibHVlOiAjMzY3YmYwO1xuJGRhcmstYmx1ZTogIzI2NWFiMTtcbiRtYXJvb246ICNiODE3NGM7XG4kcHVycGxlOiAjOGM0MmFiO1xuXG4vLyBNYWluIE9MR0EgQ29sb3IgRWxlbWVudCBWYXJpYWJsZXNcbiR0ZXh0Q29sb3I6IHZhcigtLXRleHRDb2xvcik7IC8vIE1haW4gVGV4dCBDb2xvclxuJHRleHRDb2xvckF0dGVudGlvbjogdmFyKC0tdGV4dENvbG9yQXR0ZW50aW9uKTsgLy8gQXR0ZW50aW9uIHRleHRcbiR0ZXh0Q29sb3JSZW1vdmU6IHZhcigtLXRleHRDb2xvclJlbW92ZSk7IC8vIFJlbW92ZS9EZWxldGUvQ2xvc2VcbiR0ZXh0Q29sb3JBZGQ6IHZhcigtLXRleHRDb2xvckFkZCk7IC8vIEFkZC9DcmVhdGUvT3BlblxuJHRleHRDb2xvckFjdGl2ZTogdmFyKC0tdGV4dENvbG9yQWN0aXZlKTsgLy8gQWRkL0NyZWF0ZS9PcGVuXG4kYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZCk7IC8vIE1haW4gYmFja2dyb3VuZCBDb2xvclxuJGJnQ29udGFpbmVyOiB2YXIoLS1iZ0NvbnRhaW5lcik7IC8vIGJhY2tncm91bmQgb2YgQ29udGFpbmVyc1xuJGJnTWVudTogdmFyKC0tYmdNZW51KTsgLy8gYmFja2dyb3VuZCBvZiBNZW51c1xuJGJnSXRlbTogdmFyKC0tYmdJdGVtKTsgLy8gYmFja2dyb3VuZCBvZiBJdGVtc1xuXG4vLyBDb250ZXh0IE1lbnVcbiRiZ0NvbnRleHQ6IHZhcigtLWJnQ29udGV4dCk7IC8vIGJhY2tncm91bmQgb2YgQ29udGV4dCBNZW51XG4kdGV4dENvbG9yQ29udGV4dDogdmFyKC0tdGV4dENvbG9yQ29udGV4dCk7IC8vIHRleHQgY29sb3IgQ29udGV4dCBNZW51XG4kYm9yZGVyQ29udGV4dDogdmFyKC0tYm9yZGVyQ29udGV4dCk7IC8vIGJvcmRlciBDb250ZXh0IE1lbnVcbiRvdmVybGF5Q29udGV4dEJhY2tncm91bmQ6IHZhcihcbiAgLS1vdmVybGF5Q29udGV4dEJhY2tncm91bmRcbik7IC8vIENvbnRleHQgTWVudSBPdmVybGF5IGJhY2tncm91bmQgbWFpblxuJG92ZXJsYXlDb250ZXh0QmFja2dyb3VuZEdyYWRpZW50OiB2YXIoXG4gIC0tb3ZlcmxheUNvbnRleHRCYWNrZ3JvdW5kR3JhZGllbnRcbik7IC8vIENvbnRleHQgTWVudSBiYWNrZ3JvdW5kIGdyYWRpZW50XG5cbiRpdGVtOiB2YXIoLS1pdGVtKTtcbiRpdGVtLWNvbnRyYXN0OiB2YXIoLS1pdGVtLWNvbnRyYXN0KTtcbiRpdGVtLWJnOiB2YXIoLS1pdGVtLWJnKTtcblxuLyoqKioqKioqKioqKioqKioqKiogTWVudSAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiRtZUJhY2tncm91bmQ6IHZhcigtLW1lQmFja2dyb3VuZCk7XG5cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgQ29udGFpbmVyIFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4kZ3NUZXh0Q29sb3I6IHZhcigtLWdzVGV4dENvbG9yKTsgLy8gVGV4dCBjb2xvciBmb3IgZ2FtZSBzY29yZVxuJGdzQmFja2dyb3VuZDogdmFyKC0tZ3NCYWNrZ3JvdW5kKTsgLy8gYmFja2dyb3VuZCBvZiBDb250YWluZXJzXG4kZ3NMaXN0QmFja2dyb3VuZDogdmFyKC0tZ3NMaXN0QmFja2dyb3VuZCk7IC8vIGxpc3QgYmFja2dyb3VuZCBvZiBnYW1lIHNjb3JlXG4kZ3NCb3JkZXI6IHZhcigtLWdzQm9yZGVyKTsgLy8gYmFja2dyb3VuZCBvZiBNZW51c1xuJGdzVGV4dFNpemU6IHZhcigtLWdzVGV4dFNpemUpOyAvLyBiYWNrZ3JvdW5kIG9mIE1lbnVzXG4kZ3NGb250RmFtaWx5OiB2YXIoLS1nc0ZvbnRGYW1pbHkpOyAvLyBzY29yZSBmb250XG5cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgQ29udGFpbmVyIFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4kZ3NUZXh0Q29sb3JNVzogdmFyKC0tZ3NUZXh0Q29sb3JNVyk7IC8vIFRleHQgY29sb3IgZm9yIGdhbWUgc2NvcmVcbiRnc0JhY2tncm91bmRNVzogdmFyKC0tZ3NCYWNrZ3JvdW5kTVcpOyAvLyBiYWNrZ3JvdW5kIG9mIENvbnRhaW5lcnNcbiRnc0JvcmRlck1XOiB2YXIoLS1nc0JvcmRlck1XKTsgLy8gYmFja2dyb3VuZCBvZiBNZW51c1xuJGdzVGV4dFNpemVNVzogdmFyKC0tZ3NUZXh0U2l6ZU1XKTsgLy8gYmFja2dyb3VuZCBvZiBNZW51c1xuXG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIENvbnRhaW5lciBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuJGdzVGV4dENvbG9yTUI6IHZhcigtLWdzVGV4dENvbG9yTUIpOyAvLyBUZXh0IGNvbG9yIGZvciBnYW1lIHNjb3JlXG4kZ3NCYWNrZ3JvdW5kTUI6IHZhcigtLWdzQmFja2dyb3VuZE1CKTsgLy8gYmFja2dyb3VuZCBvZiBDb250YWluZXJzXG4kZ3NCb3JkZXJNQjogdmFyKC0tZ3NCb3JkZXJNQik7IC8vIGJhY2tncm91bmQgb2YgTWVudXNcbiRnc1RleHRTaXplTUI6IHZhcigtLWdzVGV4dFNpemVNQik7IC8vIGJhY2tncm91bmQgb2YgTWVudXNcblxuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBIaWdobGlnaHQgVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiRnc1RleHRDb2xvckhHOiB2YXIoLS1nc1RleHRDb2xvckhHKTsgLy8gVGV4dCBjb2xvciBmb3IgaGlnaGxpZ2h0XG4kZ3NBbm5vdGF0aW9uQ29sb3JIRzogdmFyKC0tZ3NBbm5vdGF0aW9uQ29sb3JIRyk7IC8vIEFubm90YXRpb24vQ29tbWVudCBjb2xvciBmb3IgaGlnaGxpZ2h0XG4kZ3NCYWNrZ3JvdW5kSEc6IHZhcigtLWdzQmFja2dyb3VuZEhHKTsgLy8gYmFja2dyb3VuZCBmb3IgaGlnaGxpZ2h0XG4kZ3NCb3JkZXJIRzogdmFyKC0tZ3NCb3JkZXJIRyk7IC8vIGJvcmRlciBmb3IgaGlnaGxpZ2h0XG5cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgQW5ub3RhdGlvbiBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuJGdzVGV4dENvbG9yQU46IHZhcigtLWdzVGV4dENvbG9yQU4pOyAvLyBUZXh0IGNvbG9yIGZvciBoaWdobGlnaHRcbiRnc0JhY2tncm91bmRBTjogdmFyKC0tZ3NCYWNrZ3JvdW5kQU4pOyAvLyBiYWNrZ3JvdW5kIGZvciBoaWdobGlnaHRcbiRnc0JvcmRlckFOOiB2YXIoLS1nc0JvcmRlckFOKTsgLy8gYm9yZGVyIGZvciBoaWdobGlnaHRcblxuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBWYXJpYXRpb24gVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiRnc1RleHRDb2xvclZBOiB2YXIoLS1nc1RleHRDb2xvclZBKTsgLy8gVGV4dCBjb2xvciBmb3IgaGlnaGxpZ2h0XG4kZ3NCYWNrZ3JvdW5kVkE6IHZhcigtLWdzQmFja2dyb3VuZFZBKTsgLy8gYmFja2dyb3VuZCBmb3IgaGlnaGxpZ2h0XG4kZ3NCb3JkZXJWQTogdmFyKC0tZ3NCb3JkZXJWQSk7IC8vIGJvcmRlciBmb3IgaGlnaGxpZ2h0XG5cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgUGx5IFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4kZ3NUZXh0Q29sb3JQQzogdmFyKC0tZ3NUZXh0Q29sb3JQQyk7IC8vIFRleHQgY29sb3IgZm9yIGdhbWUgc2NvcmUgcGx5XG4kZ3NCYWNrZ3JvdW5kUEM6IHZhcigtLWdzQmFja2dyb3VuZFBDKTsgLy8gYmFja2dyb3VuZCBmb3IgZ2FtZSBzY29yZSBwbHlcbiRnc0JvcmRlclBDOiB2YXIoLS1nc0JvcmRlclBDKTsgLy8gYm9yZGVyIGZvciBnYW1lIHNjb3JlIHBseVxuXG4vKioqKioqKioqKioqKioqKioqKiogQ29udHJvbCBDb2xvcnMgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuJGNzQmFja2dyb3VuZDogdmFyKC0tY3NCYWNrZ3JvdW5kKTsgLy8gYmFja2dyb3VuZCBmb3IgY29udHJvbHNcbiRjc0NvbG9yOiB2YXIoLS1jc0NvbG9yKTsgLy8gY29udHJvbHMgY29sb3IgKGZvcmVncm91bmQpXG5cbi8qKioqKioqKioqKioqKioqKioqKiBCb2FyZCBDb2xvcnMgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuJGJvYXJkQkdEYXJrOiB2YXIoLS1ib2FyZEJHRGFyayk7IC8vIGJvYXJkIGRhcmsgdGlsZVxuJGJvYXJkQkdMaWdodDogdmFyKC0tYm9hcmRCR0xpZ2h0KTsgLy8gYm9hcmQgbGlnaHQgdGlsZVxuJGJvYXJkTGFiZWxMaWdodDogdmFyKC0tYm9hcmRMYWJlbExpZ2h0KTsgLy8gYm9hcmQgbGlnaHQgbGFiZWxcbiRib2FyZExhYmVsRGFyazogdmFyKC0tYm9hcmRMYWJlbERhcmspOyAvLyBib2FyZCBkYXJrIGxhYmVsXG5cbi8vIEdlbmVyYWwgc3R1ZmZcbiR0ZXh0LWNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcbiRiZy1vdXRlcjogdmFyKC0tYmctb3V0ZXIpO1xuJGJnLWlubmVyOiB2YXIoLS1iZy1pbm5lcik7XG5cbiRiZy1jb2xvcjogI2YyZjNmNztcbiRmZy1jb2xvcjogIzM4M2E0MTtcblxuJGdsb3ctc2hhZG93OiAwIDAgMC41ZW0gdHJhbnNwYXJlbnRpemUoJGJsdWUsIDAuMyk7XG5cbjpyb290IHtcbiAgLS1iZy1jb2xvcjogI3skYmctY29sb3J9O1xuICAtLWZnLWNvbG9yOiAjeyRmZy1jb2xvcn07XG5cbiAgLS1yZWQ6ICN7JHJlZH07XG4gIC0tZ3JlZW46ICN7JGdyZWVufTtcbiAgLS1ibHVlOiAjeyRibHVlfTtcbiAgLS1kYXJrLWJsdWU6ICN7JGRhcmstYmx1ZX07XG4gIC0tbWFyb29uOiAjeyRtYXJvb259O1xuICAtLXB1cnBsZTogI3skcHVycGxlfTtcbn1cblxuLy8gOjotbW96LWZvY3VzLWlubmVyLFxuLy8gOi1tb3otZm9jdXNyaW5nIHtcbi8vICAgYm9yZGVyOiAwO1xuLy8gICBjb2xvcjogdHJhbnNwYXJlbnQ7XG4vLyAgIHRleHQtc2hhZG93OiAwIDAgMCAkZmctY29sb3I7XG4vLyB9XG5cbi8vIDo6c2VsZWN0aW9uLFxuLy8gOjotbW96LXNlbGVjdGlvbiB7XG4vLyAgIGNvbG9yOiB3aGl0ZTtcbi8vICAgYmFja2dyb3VuZDogYmxhY2s7XG4vLyB9XG5cbi8vICoge1xuLy8gICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuLy8gICBvdXRsaW5lOiBub25lO1xuLy8gICB1c2VyLXNlbGVjdDogbm9uZTtcbi8vICAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xuLy8gICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuLy8gICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7XG4vLyAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4vLyAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbi8vICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuLy8gICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4vLyAgIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKSAhaW1wb3J0YW50O1xuLy8gICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XG4vLyAgIGN1cnNvcjogZGVmYXVsdDtcbi8vICAgbGV0dGVyLXNwYWNpbmc6IDA7XG4vLyB9XG5cbi8vIC5zZWxlY3RhYmxlLFxuLy8gLnNlbGVjdGFibGUgKiB7XG4vLyAgIGN1cnNvcjogYXV0bztcbi8vICAgdXNlci1zZWxlY3Q6IHRleHQ7XG4vLyAgIC13ZWJraXQtdG91Y2gtY2FsbG91dDogdGV4dDtcbi8vICAgLXdlYmtpdC11c2VyLXNlbGVjdDogdGV4dDtcbi8vICAgLWtodG1sLXVzZXItc2VsZWN0OiB0ZXh0O1xuLy8gICAtbW96LXVzZXItc2VsZWN0OiB0ZXh0O1xuLy8gICAtbXMtdXNlci1zZWxlY3Q6IHRleHQ7XG4vLyB9XG5cbi8vIGh0bWwsXG4vLyBib2R5IHtcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogJGJnLWNvbG9yO1xuLy8gICBjb2xvcjogJGZnLWNvbG9yO1xuLy8gICBtYXJnaW46IDA7XG4vLyAgIHBhZGRpbmc6IDA7XG4vLyAgIGZvbnQtc2l6ZTogMTBwdDtcbi8vICAgaGVpZ2h0OiAxMDAlO1xuLy8gICBvdmVyZmxvdzogYXV0bztcbi8vIH1cblxuLy8gLndpdGgtc2hhZG93IHtcbi8vICAgYm94LXNoYWRvdzogNnB4IDZweCAxMHB4IHRyYW5zcGFyZW50aXplKGJsYWNrLCAwLjkpLCAtNnB4IC02cHggMTBweCB3aGl0ZTtcbi8vIH1cblxuLy8gLm91dHNldCB7XG4vLyAgIEBleHRlbmQgLndpdGgtc2hhZG93O1xuXG4vLyAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4vLyAgIGJhY2tncm91bmQ6ICRiZy1jb2xvcjtcbi8vIH1cblxuLy8gLmluc2V0IHtcbi8vICAgYm9yZGVyLXJhZGl1czogMTBweDtcbi8vICAgYm94LXNoYWRvdzogMCAwIHRyYW5zcGFyZW50LCAwIDAgdHJhbnNwYXJlbnQsXG4vLyAgICAgaW5zZXQgM3B4IDNweCA1cHggdHJhbnNwYXJlbnRpemUoYmxhY2ssIDAuOSksIGluc2V0IC0zcHggLTNweCA1cHggd2hpdGU7XG4vLyAgIGJhY2tncm91bmQ6IGxpZ2h0ZW4oJGJnLWNvbG9yLCAyJSk7XG4vLyB9XG5cbi8vIC5wYXBlciB7XG4vLyAgIEBleHRlbmQgLm91dHNldDtcbi8vICAgcGFkZGluZzogMTBweCAyMHB4IDIwcHg7XG4vLyAgIG1hcmdpbi10b3A6IDIwcHg7XG4vLyAgIG1pbi1oZWlnaHQ6IDEwMHB4O1xuLy8gICBmb250LXNpemU6IDEuMmVtO1xuLy8gICBiYWNrZ3JvdW5kOiAkYmctY29sb3I7XG4vLyB9XG5cbi8vIHNlY3Rpb24sXG4vLyBhcnRpY2xlLFxuLy8gLnNlY3Rpb24sXG4vLyAuYXJ0aWNsZSxcbi8vIC5wYXBlciB7XG4vLyAgIGxpbmUtaGVpZ2h0OiAyZW07XG4vLyAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbi8vICAgd29yZC1icmVhazogbm9ybWFsO1xuLy8gICBsaW5lLWhlaWdodDogMmVtO1xuLy8gfVxuXG4vLyBpbnB1dFt0eXBlPVwidGV4dFwiXSxcbi8vIGlucHV0W3R5cGU9XCJzZWFyY2hcIl0sXG4vLyBpbnB1dFt0eXBlPVwidGVsXCJdLFxuLy8gaW5wdXRbdHlwZT1cInVybFwiXSxcbi8vIGlucHV0W3R5cGU9XCJlbWFpbFwiXSxcbi8vIGlucHV0W3R5cGU9XCJwYXNzd29yZFwiXSxcbi8vIGlucHV0W3R5cGU9XCJkYXRlXCJdLFxuLy8gaW5wdXRbdHlwZT1cIm1vbnRoXCJdLFxuLy8gaW5wdXRbdHlwZT1cIndlZWtcIl0sXG4vLyBpbnB1dFt0eXBlPVwidGltZVwiXSxcbi8vIGlucHV0W3R5cGU9XCJudW1iZXJcIl0sXG4vLyBpbnB1dFt0eXBlPVwiY29sb3JcIl0sXG4vLyBzZWxlY3QsXG4vLyB0ZXh0YXJlYSB7XG4vLyAgIGJvcmRlcjogMDtcbi8vICAgYmFja2dyb3VuZDogJGJnLWNvbG9yO1xuLy8gICBjb2xvcjogJGZnLWNvbG9yO1xuLy8gICBmb250LXdlaWdodDogbm9ybWFsO1xuLy8gICBwYWRkaW5nOiAwIDEuMjVlbTtcbi8vICAgbGluZS1oZWlnaHQ6IDEuMjVlbTtcbi8vICAgaGVpZ2h0OiAzLjVlbTtcbi8vICAgbWFyZ2luOiAxMHB4IDA7XG4vLyAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuLy8gICBjdXJzb3I6IHRleHQ7XG4vLyAgIHVzZXItc2VsZWN0OiB0ZXh0O1xuLy8gICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IHRleHQ7XG4vLyAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IHRleHQ7XG4vLyAgIC1raHRtbC11c2VyLXNlbGVjdDogdGV4dDtcbi8vICAgLW1vei11c2VyLXNlbGVjdDogdGV4dDtcbi8vICAgLW1zLXVzZXItc2VsZWN0OiB0ZXh0O1xuLy8gICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuMnM7XG5cbi8vICAgJjpub3Qoc2VsZWN0KSB7XG4vLyAgICAgQGV4dGVuZCAuaW5zZXQ7XG5cbi8vICAgICAmOmZvY3VzIHtcbi8vICAgICAgIEBleHRlbmQgLm91dHNldDtcbi8vICAgICB9XG4vLyAgIH1cbi8vIH1cblxuLy8gdGV4dGFyZWEge1xuLy8gICBoZWlnaHQ6IDM1MHB4O1xuLy8gICBwYWRkaW5nOiAxLjI1ZW07XG4vLyB9XG5cbi8vIHNlbGVjdCB7XG4vLyAgIEBleHRlbmQgLm91dHNldDtcblxuLy8gICBjdXJzb3I6IHBvaW50ZXI7XG4vLyAgIGJhY2tncm91bmQ6IHVybChkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUIyWlhKemFXOXVQU0l4TGpFaUlIWnBaWGRDYjNnOUlqQWdNQ0F4T1NBeE9TSWdlRzFzYm5NOUltaDBkSEE2THk5M2QzY3Vkek11YjNKbkx6SXdNREF2YzNabklqNDhaeUIwY21GdWMyWnZjbTA5SW0xaGRISnBlQ2d1TURNMElEQWdNQ0F1TURNMElDMDJMamdnTVM0M1pTMDFLU0lnYzNSNWJHVTlJbVpwYkd3Nkl6ZGlOMlU0WXlJK1BIQmhkR2dnWkQwaWJUUTRNQ0F6TkRRdE1qRXhMVEl4TW1NdE1UWXRNVFl0TkRFdE1UWXROVGNnTUMweE5pQXhOaTB4TmlBME1pQXdJRFUzYkRJek9DQXlNemxqT0M0MElEZ3VOU0F5TUNBeE1pQXpNU0F4TWlBeE1TQXdMalUySURJeUxUTXVNaUF6TVMweE1td3lNemd0TWpNNVl6RTJMVEUySURFMkxUUXlJREF0TlRkekxUUXhMVEUyTFRVM0lEQjZJaUJ6ZEhsc1pUMGlabWxzYkRvak4ySTNaVGhqSWk4K1BDOW5Qand2YzNablBnbz0pXG4vLyAgICAgbm8tcmVwZWF0IHJpZ2h0IDFlbSBjZW50ZXI7XG4vLyAgIGJhY2tncm91bmQtc2l6ZTogMS4yZW07XG4vLyAgIHBhZGRpbmctcmlnaHQ6IDNlbTtcbi8vIH1cblxuLy8gaW5wdXQ6OnBsYWNlaG9sZGVyLFxuLy8gdGV4dGFyZWE6OnBsYWNlaG9sZGVyIHtcbi8vICAgb3BhY2l0eTogMTtcbi8vICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzO1xuLy8gICBjb2xvcjogaW5oZXJpdDtcbi8vIH1cblxuLy8gaW5wdXQ6Zm9jdXM6OnBsYWNlaG9sZGVyLFxuLy8gdGV4dGFyZWE6Zm9jdXM6OnBsYWNlaG9sZGVyIHtcbi8vICAgb3BhY2l0eTogMC4yO1xuLy8gfVxuXG4vLyBpbnB1dDotbXMtaW5wdXQtcGxhY2Vob2xkZXIsXG4vLyB0ZXh0YXJlYTotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuLy8gICBvcGFjaXR5OiAxO1xuLy8gICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnM7XG4vLyAgIGNvbG9yOiBpbmhlcml0O1xuLy8gfVxuXG4vLyBpbnB1dDpmb2N1czotbXMtaW5wdXQtcGxhY2Vob2xkZXIsXG4vLyB0ZXh0YXJlYTpmb2N1czotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuLy8gICBvcGFjaXR5OiAwLjI7XG4vLyB9XG5cbi8vIGlucHV0W3R5cGU9XCJzZWFyY2hcIl06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24sXG4vLyBpbnB1dFt0eXBlPVwic2VhcmNoXCJdOjotd2Via2l0LXNlYXJjaC1jYW5jZWwtYnV0dG9uLFxuLy8gaW5wdXRbdHlwZT1cInNlYXJjaFwiXTo6LXdlYmtpdC1zZWFyY2gtcmVzdWx0cy1idXR0b24sXG4vLyBpbnB1dFt0eXBlPVwic2VhcmNoXCJdOjotd2Via2l0LXNlYXJjaC1yZXN1bHRzLWRlY29yYXRpb24ge1xuLy8gICBkaXNwbGF5OiBub25lO1xuLy8gfVxuXG4vLyBidXR0b24sXG4vLyBpbnB1dFt0eXBlPVwiYnV0dG9uXCJdLFxuLy8gaW5wdXRbdHlwZT1cInN1Ym1pdFwiXSxcbi8vIGlucHV0W3R5cGU9XCJyZXNldFwiXSB7XG4vLyAgIEBleHRlbmQgLm91dHNldDtcblxuLy8gICBib3JkZXI6IDA7XG4vLyAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuLy8gICBwYWRkaW5nOiAxMHB4IDA7XG4vLyAgIHdpZHRoOiA4ZW07XG4vLyAgIHRleHQtYWxpZ246IGNlbnRlcjtcbi8vICAgY3Vyc29yOiBwb2ludGVyO1xuLy8gICBjb2xvcjogaW5oZXJpdDtcbi8vICAgZm9udC1zaXplOiAxLjFyZW07XG4vLyAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGJhY2tncm91bmQtY29sb3IsIGJveC1zaGFkb3c7XG4vLyAgIHRyYW5zaXRpb24tZGVsYXk6IDAuMnM7XG4vLyAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMnM7XG5cbi8vICAgJi5hY3RpdmUsXG4vLyAgICY6YWN0aXZlIHtcbi8vICAgICBAZXh0ZW5kIC5pbnNldDtcblxuLy8gICAgIHRyYW5zaXRpb24tZGVsYXk6IDBzO1xuLy8gICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMXM7XG4vLyAgIH1cblxuLy8gICBAZWFjaCAkbmFtZSwgJGNvbG9yIGluIChcInJlZFwiOiAkcmVkLCBcImdyZWVuXCI6ICRncmVlbiwgXCJibHVlXCI6ICRibHVlKSB7XG4vLyAgICAgQGF0LXJvb3QgLiN7JG5hbWV9LWJ1dHRvbixcbi8vICAgICAgICYuI3skbmFtZX0tYnV0dG9uIHtcbi8vICAgICAgIEBleHRlbmQgYnV0dG9uO1xuXG4vLyAgICAgICAkX2JnLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAkY29sb3IgMzAlLCBsaWdodGVuKCRjb2xvciwgNiUpIDgwJSk7XG5cbi8vICAgICAgIGNvbG9yOiB3aGl0ZTtcbi8vICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuLy8gICAgICAgdGV4dC1zaGFkb3c6IDAgMC4xZW0gMC4xZW0gdHJhbnNwYXJlbnRpemUoYmxhY2ssIDAuMyk7XG4vLyAgICAgICBiYWNrZ3JvdW5kOiAkX2JnLWltYWdlO1xuLy8gICAgICAgYm94LXNoYWRvdzogMCAwIDAuNWVtIHRyYW5zcGFyZW50aXplKCRjb2xvciwgMC4zKSwgMCAwIHRyYW5zcGFyZW50LFxuLy8gICAgICAgICBpbnNldCAwIC01cHggMCB0cmFuc3BhcmVudGl6ZShibGFjaywgMC45NSksXG4vLyAgICAgICAgIGluc2V0IDAgMnB4IDAgdHJhbnNwYXJlbnRpemUod2hpdGUsIDAuOCk7XG4vLyAgICAgICBib3JkZXItcmFkaXVzOiA2cHggNnB4IDhweCA4cHg7XG4vLyAgICAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBib3gtc2hhZG93LCBib3JkZXItcmFkaXVzO1xuXG4vLyAgICAgICAmLmFjdGl2ZSxcbi8vICAgICAgICY6YWN0aXZlIHtcbi8vICAgICAgICAgYmFja2dyb3VuZDogJF9iZy1pbWFnZTtcbi8vICAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuLy8gICAgICAgICBib3gtc2hhZG93OiAwIDAgdHJhbnNwYXJlbnQsIDAgMCB0cmFuc3BhcmVudCxcbi8vICAgICAgICAgICBpbnNldCAwIDJweCA1cHggMnB4IHRyYW5zcGFyZW50aXplKGJsYWNrLCAwLjgpO1xuLy8gICAgICAgfVxuLy8gICAgIH1cbi8vICAgfVxuLy8gfVxuXG4vLyBsYWJlbCB7XG4vLyAgICYsXG4vLyAgICYgKiB7XG4vLyAgICAgY3Vyc29yOiBwb2ludGVyO1xuLy8gICB9XG5cbi8vICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuLy8gICBwYWRkaW5nOiAwLjU2ZW0gMDtcbi8vIH1cblxuLy8gYSB7XG4vLyAgICYsXG4vLyAgICY6bGluayxcbi8vICAgJjp2aXNpdGVkLFxuLy8gICAmOmhvdmVyICY6YWN0aXZlIHtcbi8vICAgICAmLFxuLy8gICAgICYgKiB7XG4vLyAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4vLyAgICAgfVxuXG4vLyAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4vLyAgICAgY29sb3I6ICRibHVlO1xuLy8gICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuLy8gICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbi8vICAgfVxuLy8gfVxuXG4vLyBoMSxcbi8vIGgyLFxuLy8gaDMsXG4vLyBoNCxcbi8vIGg1LFxuLy8gaDYge1xuLy8gICBsaW5lLWhlaWdodDogMS41ZW07XG4vLyB9XG5cbi8vIGgxIHtcbi8vICAgZm9udC1zaXplOiA0ZW07XG4vLyAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuLy8gICBtYXJnaW46IDAuN2VtIDA7XG4vLyB9XG5cbi8vIGgyIHtcbi8vICAgZm9udC1zaXplOiAzZW07XG4vLyAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuLy8gICBtYXJnaW46IDAuOGVtIDA7XG4vLyB9XG5cbi8vIGgzIHtcbi8vICAgZm9udC1zaXplOiAyLjVlbTtcbi8vICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4vLyAgIG1hcmdpbjogMC45ZW0gMDtcbi8vIH1cblxuLy8gaDQge1xuLy8gICBmb250LXNpemU6IDJlbTtcbi8vICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4vLyAgIG1hcmdpbjogMWVtIDA7XG4vLyB9XG5cbi8vIGg1IHtcbi8vICAgbWFyZ2luOiAwLjVlbSAwO1xuLy8gICBmb250LXNpemU6IDEuMmVtO1xuLy8gICBmb250LXdlaWdodDogbm9ybWFsO1xuLy8gfVxuXG4vLyBoNiB7XG4vLyAgIG1hcmdpbjogMWVtIDAgMWVtIDEuNGVtO1xuLy8gICBmb250LXNpemU6IDFlbTtcbi8vICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4vLyB9XG5cbi8vIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSxcbi8vIGlucHV0W3R5cGU9XCJyYWRpb1wiXSB7XG4vLyAgICRfYm9yZGVyLXdpZHRoOiAwLjE1ZW07XG4vLyAgICRfYm94LXNoYWRvdzogMnB4IDJweCAzcHggdHJhbnNwYXJlbnRpemUoYmxhY2ssIDAuOCksIC0ycHggLTJweCAzcHggd2hpdGUsXG4vLyAgICAgaW5zZXQgMXB4IDFweCAycHggdHJhbnNwYXJlbnRpemUoYmxhY2ssIDAuOCksIGluc2V0IC0xcHggLTFweCAycHggd2hpdGU7XG4vLyAgIGZvbnQtc2l6ZTogMWVtO1xuLy8gICBjdXJzb3I6IHBvaW50ZXI7XG4vLyAgIGhlaWdodDogMS4yZW07XG4vLyAgIHdpZHRoOiAxLjJlbTtcbi8vICAgbWFyZ2luOiAwIDAuM2VtO1xuLy8gICBib3gtc2hhZG93OiAkX2JveC1zaGFkb3c7XG4vLyAgIGJvcmRlcjogJF9ib3JkZXItd2lkdGggc29saWQgJGJnLWNvbG9yO1xuLy8gICB2ZXJ0aWNhbC1hbGlnbjogdGV4dC1ib3R0b207XG4vLyAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGJhY2tncm91bmQsIGJveC1zaGFkb3c7XG4vLyAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMnM7XG5cbi8vICAgJjphY3RpdmUge1xuLy8gICAgIGJveC1zaGFkb3c6ICRfYm94LXNoYWRvdywgaW5zZXQgMCAwLjFlbSAwLjI1ZW0gdHJhbnNwYXJlbnRpemUoYmxhY2ssIDAuOCk7XG4vLyAgIH1cblxuLy8gICAmOmNoZWNrZWQge1xuLy8gICAgIGJvcmRlci13aWR0aDogMC4xZW07XG4vLyAgICAgYm9yZGVyLWNvbG9yOiBkYXJrZW4oJGJsdWUsIDEwJSk7XG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJsdWU7XG4vLyAgIH1cbi8vIH1cblxuLy8gaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdIHtcbi8vICAgYm9yZGVyLXJhZGl1czogMjUlO1xuXG4vLyAgICY6Y2hlY2tlZCB7XG4vLyAgICAgYm94LXNoYWRvdzogJGdsb3ctc2hhZG93LCBpbnNldCAwIC0wLjFlbSAwIHRyYW5zcGFyZW50aXplKGJsYWNrLCAwLjgpLFxuLy8gICAgICAgaW5zZXQgMCAwLjFlbSAwLjFlbSB0cmFuc3BhcmVudGl6ZSh3aGl0ZSwgMC44KTtcbi8vICAgfVxuLy8gfVxuXG4vLyBpbnB1dFt0eXBlPVwicmFkaW9cIl0ge1xuLy8gICBib3JkZXItcmFkaXVzOiAxMDAlO1xuXG4vLyAgICY6Y2hlY2tlZCB7XG4vLyAgICAgYm94LXNoYWRvdzogJGdsb3ctc2hhZG93O1xuLy8gICAgIGJveC1zaGFkb3c6ICRnbG93LXNoYWRvdywgaW5zZXQgMCAwLjEyZW0gMC4xZW0gdHJhbnNwYXJlbnRpemUod2hpdGUsIDAuNzUpO1xuLy8gICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDAuMTVlbTtcbi8vICAgfVxuLy8gfVxuXG4vLyAuY2hlY2t0ZXh0IHtcbi8vICAgd2lkdGg6IGF1dG87XG4vLyAgIG1hcmdpbjogMC41ZW07XG5cbi8vICAgaW5wdXQge1xuLy8gICAgIGRpc3BsYXk6IG5vbmU7XG5cbi8vICAgICArIHNwYW4ge1xuLy8gICAgICAgQGV4dGVuZCBidXR0b247XG5cbi8vICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuLy8gICAgICAgcGFkZGluZzogMWVtO1xuLy8gICAgICAgdHJhbnNpdGlvbi1kZWxheTogMHM7XG4vLyAgICAgfVxuXG4vLyAgICAgJjpjaGVja2VkICsgc3BhbiB7XG4vLyAgICAgICBAZXh0ZW5kIC5ibHVlLWJ1dHRvbjtcblxuLy8gICAgICAgcGFkZGluZzogMWVtO1xuLy8gICAgIH1cbi8vICAgfVxuLy8gfVxuXG4vLyAuc3dpdGNoIHtcbi8vICAgJF9oZWlnaHQ6IDJyZW07XG4vLyAgICRfd2lkdGg6IDhyZW07XG4vLyAgICRfaGFuZGxlLXdpZHRoOiAkX2hlaWdodDtcbi8vICAgJF9oYW5kbGUtdHJhbnNsYXRpb246ICRfd2lkdGggLSAkX2hhbmRsZS13aWR0aDtcblxuLy8gICBoZWlnaHQ6ICRfaGVpZ2h0O1xuLy8gICB3aWR0aDogJF93aWR0aDtcbi8vICAgcGFkZGluZzogMDtcbi8vICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4vLyAgIGlucHV0IHtcbi8vICAgICBkaXNwbGF5OiBub25lO1xuXG4vLyAgICAgKyBkaXYge1xuLy8gICAgICAgaGVpZ2h0OiAxMDAlO1xuLy8gICAgICAgd2lkdGg6IDEwMCU7XG4vLyAgICAgICBib3JkZXItcmFkaXVzOiA5OTlweDtcbi8vICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuLy8gICAgICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYm94LXNoYWRvdywgYmFja2dyb3VuZC1jb2xvcjtcbi8vICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMnM7XG4vLyAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjJzO1xuLy8gICAgICAgYm94LXNoYWRvdzogM3B4IDNweCAycHggLTJweCB0cmFuc3BhcmVudGl6ZShibGFjaywgMC45KSxcbi8vICAgICAgICAgaW5zZXQgMnB4IDJweCAycHggMXB4IHRyYW5zcGFyZW50aXplKGJsYWNrLCAwLjkpLFxuLy8gICAgICAgICBpbnNldCAtMnB4IC0ycHggMXB4IHdoaXRlO1xuXG4vLyAgICAgICAmOjpiZWZvcmUge1xuLy8gICAgICAgICBjb250ZW50OiBcIlwiO1xuLy8gICAgICAgICBkaXNwbGF5OiBibG9jaztcbi8vICAgICAgICAgaGVpZ2h0OiBjYWxjKCN7JF9oYW5kbGUtd2lkdGh9ICsgNHB4KTtcbi8vICAgICAgICAgd2lkdGg6IGNhbGMoI3skX2hhbmRsZS13aWR0aH0gKyA0cHgpO1xuLy8gICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuLy8gICAgICAgICBib3JkZXI6IHNvbGlkIHdoaXRlIDNweDtcbi8vICAgICAgICAgYmFja2dyb3VuZDogJGJsdWU7XG4vLyAgICAgICAgIGJveC1zaGFkb3c6IDAgM3B4IDEwcHggdHJhbnNwYXJlbnRpemUoYmxhY2ssIDAuOCksXG4vLyAgICAgICAgICAgaW5zZXQgMCAtMXB4IDNweCB0cmFuc3BhcmVudGl6ZShibGFjaywgMC45KTtcbi8vICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTZweCk7XG4vLyAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzO1xuLy8gICAgICAgfVxuLy8gICAgIH1cblxuLy8gICAgICY6Y2hlY2tlZCArIGRpdiB7XG4vLyAgICAgICBiYWNrZ3JvdW5kOiAkYmx1ZTtcbi8vICAgICAgIGJveC1zaGFkb3c6ICRnbG93LXNoYWRvdywgaW5zZXQgMCAycHggMnB4IDJweCB0cmFuc3BhcmVudGl6ZShibGFjaywgMC43KSxcbi8vICAgICAgICAgaW5zZXQgMCAwIHRyYW5zcGFyZW50O1xuXG4vLyAgICAgICAmOjpiZWZvcmUge1xuLy8gICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgkX2hhbmRsZS10cmFuc2xhdGlvbiwgLTZweCk7XG4vLyAgICAgICB9XG4vLyAgICAgfVxuLy8gICB9XG4vLyB9XG5cbi8vIGhyIHtcbi8vICAgQGV4dGVuZCAuaW5zZXQ7XG4vLyAgIHdpZHRoOiA3MiU7XG4vLyAgIGhlaWdodDogOHB4O1xuLy8gICBmbG9hdDogcmlnaHQ7XG4vLyAgIGJvcmRlcjogMDtcbi8vIH1cblxuLy8gY29kZSxcbi8vIHByZSB7XG4vLyAgIHBhZGRpbmc6IDAuNWVtIDFlbTtcbi8vICAgYm9yZGVyLXJhZGl1czogNHB4O1xuLy8gICBvdmVyZmxvdzogYXV0bztcbi8vICAgYm94LXNoYWRvdzogMCA1cHggMzBweCAwIHRyYW5zcGFyZW50aXplKGJsYWNrLCAwLjk1KTtcbi8vIH1cblxuLy8gY29kZSB7XG4vLyAgIGJhY2tncm91bmQ6ICNlNmU2ZTY7XG4vLyB9XG5cbi8vIHByZSB7XG4vLyAgIGJhY2tncm91bmQ6IHdoaXRlO1xuLy8gICBtYXJnaW46IDRlbSAwO1xuLy8gfVxuXG4vLyBjb2RlLFxuLy8gcHJlIHtcbi8vICAgJixcbi8vICAgJiAqIHtcbi8vICAgICBmb250LXNpemU6IDAuOXJlbTtcbi8vICAgICBsaW5lLWhlaWdodDogMmVtO1xuLy8gICAgIGN1cnNvcjogYXV0bztcbi8vICAgICB1c2VyLXNlbGVjdDogdGV4dDtcbi8vICAgICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IHRleHQ7XG4vLyAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogdGV4dDtcbi8vICAgICAta2h0bWwtdXNlci1zZWxlY3Q6IHRleHQ7XG4vLyAgICAgLW1vei11c2VyLXNlbGVjdDogdGV4dDtcbi8vICAgICAtbXMtdXNlci1zZWxlY3Q6IHRleHQ7XG4vLyAgIH1cbi8vIH1cblxuLy8gYmxvY2txdW90ZSB7XG4vLyAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuLy8gICBwYWRkaW5nOiAwLjVlbSAxZW07XG4vLyAgIGJvcmRlci1yYWRpdXM6IDRweDtcbi8vICAgYm94LXNoYWRvdzogMCA1cHggMzBweCAwIHRyYW5zcGFyZW50aXplKGJsYWNrLCAwLjk1KTtcbi8vICAgYm9yZGVyLWxlZnQ6IDZweCBzb2xpZCAkYmx1ZTtcbi8vIH1cbiIsIkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnQ2F2ZWF0JztcbiAgICBzcmM6IHVybCgnLi4vLi4vZm9udHMvQm9sZC9DYXZlYXQtQm9sZC53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcbiAgICAgICAgdXJsKCcuLi8uLi9mb250cy9Cb2xkL0NhdmVhdC1Cb2xkLndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC1kaXNwbGF5OiBzd2FwO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ0NhdmVhdCc7XG4gICAgc3JjOiB1cmwoJy4uLy4uL2ZvbnRzL1JlZ3VsYXIvQ2F2ZWF0LVJlZ3VsYXIud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXG4gICAgICAgIHVybCgnLi4vLi4vZm9udHMvUmVndWxhci9DYXZlYXQtUmVndWxhci53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC1kaXNwbGF5OiBzd2FwO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdGaWd1cmluZVN5bWJvbFQxJztcbiAgc3JjOiB1cmwoJy4uLy4uL2ZvbnRzLzNyZCBQYXJ0eS9DaGVzc1ZhcmlhbnRzL0ZpZ3VyaW5lU3ltYm9sVDFCb2xkLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxuICAgICAgdXJsKCcuLi8uLi9mb250cy8zcmQgUGFydHkvQ2hlc3NWYXJpYW50cy9GaWd1cmluZVN5bWJvbFQxQm9sZC53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnRmlndXJpbmVTeW1ib2xUMSc7XG4gIHNyYzogdXJsKCcuLi8uLi9mb250cy8zcmQgUGFydHkvQ2hlc3NWYXJpYW50cy9GaWd1cmluZVN5bWJvbFQxLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxuICAgICAgdXJsKCcuLi8uLi9mb250cy8zcmQgUGFydHkvQ2hlc3NWYXJpYW50cy9GaWd1cmluZVN5bWJvbFQxLndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG59XG5cbiIsIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJDYXZlYXRcIjtcbiAgc3JjOiB1cmwoXCIuLi8uLi9mb250cy9Cb2xkL0NhdmVhdC1Cb2xkLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpLCB1cmwoXCIuLi8uLi9mb250cy9Cb2xkL0NhdmVhdC1Cb2xkLndvZmZcIikgZm9ybWF0KFwid29mZlwiKTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkNhdmVhdFwiO1xuICBzcmM6IHVybChcIi4uLy4uL2ZvbnRzL1JlZ3VsYXIvQ2F2ZWF0LVJlZ3VsYXIud29mZjJcIikgZm9ybWF0KFwid29mZjJcIiksIHVybChcIi4uLy4uL2ZvbnRzL1JlZ3VsYXIvQ2F2ZWF0LVJlZ3VsYXIud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJGaWd1cmluZVN5bWJvbFQxXCI7XG4gIHNyYzogdXJsKFwiLi4vLi4vZm9udHMvM3JkIFBhcnR5L0NoZXNzVmFyaWFudHMvRmlndXJpbmVTeW1ib2xUMUJvbGQud29mZjJcIikgZm9ybWF0KFwid29mZjJcIiksIHVybChcIi4uLy4uL2ZvbnRzLzNyZCBQYXJ0eS9DaGVzc1ZhcmlhbnRzL0ZpZ3VyaW5lU3ltYm9sVDFCb2xkLndvZmZcIikgZm9ybWF0KFwid29mZlwiKTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkZpZ3VyaW5lU3ltYm9sVDFcIjtcbiAgc3JjOiB1cmwoXCIuLi8uLi9mb250cy8zcmQgUGFydHkvQ2hlc3NWYXJpYW50cy9GaWd1cmluZVN5bWJvbFQxLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpLCB1cmwoXCIuLi8uLi9mb250cy8zcmQgUGFydHkvQ2hlc3NWYXJpYW50cy9GaWd1cmluZVN5bWJvbFQxLndvZmZcIikgZm9ybWF0KFwid29mZlwiKTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG59XG4vKioqKioqKioqKioqKioqKioqKiBNZW51ICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBDb250YWluZXIgVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgQ29udGFpbmVyIFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIENvbnRhaW5lciBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBIaWdobGlnaHQgVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgQW5ub3RhdGlvbiBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBWYXJpYXRpb24gVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgUGx5IFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKiogQ29udHJvbCBDb2xvcnMgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKioqIEJvYXJkIENvbG9ycyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG46cm9vdCB7XG4gIC0tYmctY29sb3I6ICNmMmYzZjc7XG4gIC0tZmctY29sb3I6ICMzODNhNDE7XG4gIC0tcmVkOiAjZTQzMDMwO1xuICAtLWdyZWVuOiAjMTlhMTg3O1xuICAtLWJsdWU6ICMzNjdiZjA7XG4gIC0tZGFyay1ibHVlOiAjMjY1YWIxO1xuICAtLW1hcm9vbjogI2I4MTc0YztcbiAgLS1wdXJwbGU6ICM4YzQyYWI7XG59XG5cbi5zdGF0dXMtdGV4dCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LWZhbWlseTogXCJnZW9yZ2lhXCIsIGdhcmFtb25kLCBwYWxhdGlubywgYm9va21hbiwgXCJUaW1lcyBOZXcgUm9tYW5cIiwgdGltZXM7XG4gIGZsb2F0OiBsZWZ0O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBjb2xvcjogYmxhY2s7XG4gIGxpbmUtaGVpZ2h0OiA2NHB4O1xuICBmb250LXNpemU6IDEzMCU7XG4gIHZlcnRpY2FsLWFsaWduOiBib3R0b207XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIG1hcmdpbi1sZWZ0OiA0cHg7XG4gIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICAtby11c2VyLXNlbGVjdDogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbi5idXR0b24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvcmRlcjogYmxhY2sgMnB4IHNvbGlkO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1nc0JhY2tncm91bmQpO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGZsb2F0OiByaWdodDtcbiAgZGlzcGxheTogZmxleGJveDtcbiAgd2lkdGg6IDMwJTtcbiAgaGVpZ2h0OiA0OHB4O1xuICByaWdodDogMHB4O1xuICB0b3A6IDE0cHg7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgbGluZS1oZWlnaHQ6IDQ4cHg7XG4gIG1heC13aWR0aDogMjQwcHg7XG4gIG1pbi13aWR0aDogMTIwcHg7XG59XG5cbi5mZWF0aGVyIHtcbiAgbGVmdDogOHB4O1xuICBtYXJnaW4tdG9wOiA4cHg7XG4gIHdpZHRoOiAzMyU7XG4gIGhlaWdodDogNzUlO1xuICBzdHJva2U6IHZhcigtLWJvYXJkQkdEYXJrKTtcbiAgc3Ryb2tlLXdpZHRoOiAyO1xuICBzdHJva2UtbGluZWNhcDogcm91bmQ7XG4gIHN0cm9rZS1saW5lam9pbjogcm91bmQ7XG4gIGZpbGw6IG5vbmU7XG59XG5cbi5idXR0b250ZXh0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogNDIlO1xuICBoZWlnaHQ6IDQ4cHg7XG4gIHJpZ2h0OiAyMCU7XG4gIHRvcDogMSU7XG4gIGxpbmUtaGVpZ2h0OiA0OHB4O1xuICBjb2xvcjogdmFyKC0tYm9hcmRCR0RhcmspO1xuICBmb250LWZhbWlseTogQ2FtYnJpYSwgQ29jaGluLCBHZW9yZ2lhO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OlgaStatusComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'olga-status',
                templateUrl: './olga-status.component.html',
                styleUrls: ['./olga-status.component.scss']
            }]
    }], function () { return [{ type: _services_olga_service__WEBPACK_IMPORTED_MODULE_2__["OlgaService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/olga-title/olga-title.component.ts":
/*!****************************************************!*\
  !*** ./src/app/olga-title/olga-title.component.ts ***!
  \****************************************************/
/*! exports provided: OlgaTitleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OlgaTitleComponent", function() { return OlgaTitleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class OlgaTitleComponent {
    constructor() { }
    ngOnInit() {
    }
}
OlgaTitleComponent.ɵfac = function OlgaTitleComponent_Factory(t) { return new (t || OlgaTitleComponent)(); };
OlgaTitleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OlgaTitleComponent, selectors: [["olga-title"]], decls: 0, vars: 0, template: function OlgaTitleComponent_Template(rf, ctx) { }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29sZ2EtdGl0bGUvb2xnYS10aXRsZS5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OlgaTitleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'olga-title',
                templateUrl: './olga-title.component.html',
                styleUrls: ['./olga-title.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/services/colors.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/colors.service.ts ***!
  \********************************************/
/*! exports provided: ColorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorService", function() { return ColorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _canvas_chessboard_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../canvas-chessboard/types */ "./src/app/canvas-chessboard/types.ts");




class ColorService {
    // Menu specific Colors
    // Title Colors
    constructor() {
        // DEFAULTING TO DARK COLOR PALLETE
        // Main Elements (background, sub containers, context menu)
        this.olga = null;
        this.textColor = 'white'; // Main Text Color
        this.textColorAttention = 'purple'; // Attention text
        this.textColorRemove = 'red'; // Remove/Delete/Close
        this.textColorAdd = 'green'; // Add/Create/Open
        this.textColorActive = 'light-blue'; // Add/Create/Open
        this.background = '#434343'; // Main background Color
        this.bgContainer = '#353535'; // background of Containers
        this.bgMenu = '#353535'; // background of Menus
        this.bgItem = '#353535'; // background of containers
        // Context menu
        this.bgContext = '#CC9966';
        this.textColorContext = 'white';
        this.borderContext = 'solid black 1px';
        this.overlayContextBackground = 'rgb(199,199,199)';
        this.overlayContextBackgroundGradient = 'linear-gradient(153deg, rgba(199,199,199,0.9051995798319328) 41%, rgba(249,249,249,0.8911939775910365) 83%)';
        // Control Elements (Buttons, sliders, number wheels, toggle switches)
        this.fgItem = '#00ffffff';
        this.fgItemContrast = '#e25400';
        // Board Colors
        this.boardBGDark = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('#81388f');
        this.boardBGLight = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('#e0fffb');
        this.boardLabelDark = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('#81388f');
        this.boardLabelLight = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('#e0fffb');
        this.boardPieceSet = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('../../assets/images/pieces/merida/');
        // Menu
        this.meBackground = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('#353535');
        this.meTextColor = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('white');
        // Game Score Variables
        this.gsTextColor = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('white');
        this.gsBackground = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('#353535');
        this.gsListBackground = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('#353535');
        this.gsBorder = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('');
        this.gsTextSize = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('16px');
        // Game Score Highlight Colors
        this.gsTextColorHG = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('orange');
        this.gsAnnotationColorHG = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('lightcoral');
        this.gsBackgroundHG = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('#353535');
        this.gsBorderHG = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('');
        // Game Score Annotation Colors
        this.gsTextColorAN = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('#AED6F1');
        this.gsBackgroundAN = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('#333333');
        this.gsBorderAN = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('');
        this.gsTextSizeAN = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('16px');
        // Game Score Variation Colors
        this.gsTextColorVA = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('white');
        this.gsBackgroundVA = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('#353535');
        this.gsBorderVA = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('black 1px solid');
        // Game Score Ply Count
        this.gsTextColorPC = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('white');
        this.gsBackgroundPC = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('#353535');
        this.gsBorderPC = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('');
        this.csBackground = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('#81388f');
        this.csColor = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('#e0fffb');
        this.propertyMap = new Map();
        // Game Score
        this.propertyMap.set('--gsTextColorPC', this.gsTextColorPC);
        this.propertyMap.set('--gsTextColor', this.gsTextColor);
        this.propertyMap.set('--gsBackgroundPC', this.gsBackgroundPC);
        this.propertyMap.set('--gsBorderPC', this.gsBorderPC);
        this.propertyMap.set('--gsTextColorVA', this.gsTextColorVA);
        this.propertyMap.set('--gsBackgroundVA', this.gsBackgroundVA);
        this.propertyMap.set('--gsBorderVA', this.gsBorderVA);
        this.propertyMap.set('--gsTextColorAN', this.gsTextColorAN);
        this.propertyMap.set('--gsBackgroundAN', this.gsBackgroundAN);
        this.propertyMap.set('--gsBorderAN', this.gsBorderAN);
        this.propertyMap.set('--gsTextColorHG', this.gsTextColorHG);
        this.propertyMap.set('--gsBackgroundHG', this.gsBackgroundHG);
        this.propertyMap.set('--gsBackground', this.gsBackground);
        this.propertyMap.set('--gsListBackground', this.gsListBackground);
        this.propertyMap.set('--gsBorderHG', this.gsBorderHG);
        this.propertyMap.set('--gsTextColorHG', this.gsTextColorHG);
        this.propertyMap.set('--gsBackgroundHG', this.gsBackgroundHG);
        this.propertyMap.set('--gsAnnotationColorHG', this.gsAnnotationColorHG);
        // Menu
        this.propertyMap.set('--meBackground', this.meBackground);
        // Board
        this.propertyMap.set('--boardLabelDark', this.boardLabelDark);
        this.propertyMap.set('--boardLabelLight', this.boardLabelLight);
        this.propertyMap.set('--boardBGDark', this.boardBGDark);
        this.propertyMap.set('--boardBGLight', this.boardBGLight);
        // Controls
        this.propertyMap.set('--csBackground', this.csBackground);
        this.propertyMap.set('--csColor', this.csColor);
    }
    setOlga(olga) {
        this.olga = olga;
    }
    updateColor(name, color) {
        if (this.propertyMap.has(name)) {
            const subject = this.propertyMap.get(name);
            if (subject) {
                subject.next(color);
            }
            document.documentElement.style.setProperty(name, color);
        }
        // if(name.indexOf('board') >= 0) {
        //   if(this.olga && this.olga.reRenderBoard) {
        //     this.olga.reRenderBoard();
        //   }
        // }
    }
    boardTheme() {
        return new _canvas_chessboard_types__WEBPACK_IMPORTED_MODULE_2__["BoardTheme"](this.boardBGLight.value, this.boardBGDark.value, this.boardPieceSet.value);
    }
    setDarkColorPalette() { }
    setLightColorPalette() { }
    setStoredColorPalette() {
        // 1.) Read User color palette sent from CG.com
        // 2.) Look for a cookie on disk (load from disk)
        // 3.) User default CSS Styled color palette
    }
    initializeColorPalette() {
        // Main Elements
        document.documentElement.style.setProperty('--textCoolor', this.textColor);
        document.documentElement.style.setProperty('--textColorAttention', this.textColorAttention);
        document.documentElement.style.setProperty('--textColorRemove', this.textColorRemove);
        document.documentElement.style.setProperty('--textColorAdd', this.textColorAdd);
        document.documentElement.style.setProperty('--textColorActive', this.textColorActive);
        document.documentElement.style.setProperty('--background', this.background);
        document.documentElement.style.setProperty('--bgItem', this.bgItem);
        document.documentElement.style.setProperty('--bgContainer', this.bgContainer);
        document.documentElement.style.setProperty('--bgMenu', this.bgMenu);
        // Context Menu
        document.documentElement.style.setProperty('--bgContext', this.bgContext);
        document.documentElement.style.setProperty('--overlayContextBackground', this.overlayContextBackground);
        document.documentElement.style.setProperty('--textColorContext', this.textColorContext);
        document.documentElement.style.setProperty('--bgContext', this.bgContext);
        document.documentElement.style.setProperty('--overlayContextBackgroundGradient', this.overlayContextBackgroundGradient);
        document.documentElement.style.setProperty('--borderContext', this.borderContext);
        // Game Score
        document.documentElement.style.setProperty('--gsBackground', this.gsBackground.value);
        document.documentElement.style.setProperty('--gsTextSize', this.gsTextSize.value);
        document.documentElement.style.setProperty('--gsBackground', this.gsBackground.value);
        document.documentElement.style.setProperty('--gsBorder', this.gsBorder.value);
        this.propertyMap.forEach((value, key) => {
            document.documentElement.style.setProperty(key, value.value);
        });
    }
}
ColorService.ɵfac = function ColorService_Factory(t) { return new (t || ColorService)(); };
ColorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ColorService, factory: ColorService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ColorService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return []; }, { textColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], textColorAttention: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], textColorRemove: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], textColorAdd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], textColorActive: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], background: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], bgContainer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], bgMenu: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], bgItem: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], bgContext: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], textColorContext: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], borderContext: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], overlayContextBackground: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], overlayContextBackgroundGradient: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], fgItem: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], fgItemContrast: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], boardBGDark: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], boardBGLight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], boardLabelDark: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], boardLabelLight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], boardPieceSet: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], meBackground: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], meTextColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], gsTextColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], gsBackground: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], gsListBackground: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], gsBorder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], gsTextSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], gsTextColorHG: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], gsAnnotationColorHG: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], gsBackgroundHG: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], gsBorderHG: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], gsTextColorAN: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], gsBackgroundAN: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], gsBorderAN: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], gsTextSizeAN: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], gsTextColorVA: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], gsBackgroundVA: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], gsBorderVA: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], gsTextColorPC: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], gsBackgroundPC: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], gsBorderPC: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], csBackground: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], csColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], propertyMap: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/services/layout.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/layout.service.ts ***!
  \********************************************/
/*! exports provided: LayoutService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutService", function() { return LayoutService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



class LayoutService {
    constructor() {
        this.landscapeOrientation = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](true);
        this.mobileView = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this.boardSize = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](480);
        this.scoreSize = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](340);
        this.olga = null;
        this.appContainer = null;
        this.gameScore = null;
        this.board = null;
        this.resizeElement = null;
        this.preferredLayout = 'auto';
        this.preferredRatioLandscape = 0.3;
        this.preferredRatioPortrait = 0.4;
        this.preferredWidthPercentage = 1.0;
        this.preferredHeightPercentage = 1.0;
        this.gameScoreElement = null;
        this.boardElement = null;
        this.controlsElement = null;
        this.statusElement = null;
        this.menuComponent = null;
        this.boardRatio = 1;
    }
    rtl(width, height, gsSize) {
        if (this.mobileView.value) {
            // perform mobile setup
            //this.olga.rtlComponentsMobile(width, height, gsSize)
        }
        else {
            // prepare desktop view
            // determine the size of Olga and preferred ratio (unless we have already )
            //this.olga.rtlComponents(width, height, gsSize)
        }
    }
    rtp(width, height, gsSize) {
        if (this.mobileView.value) {
            // perform mobile setup
            //this.olga.rtpComponentsMobile(width, height, gsSize)
        }
        else {
            // prepare desktop view
            //this.olga.rtpComponents(width, height, gsSize)
        }
    }
    openSettings() {
        if (this.menuComponent) {
            this.menuComponent.open();
        }
    }
    closeSettings() {
        if (this.menuComponent) {
            this.menuComponent.close();
        }
    }
    resizeToLandscape(width, height, gsSize) {
        var _a, _b;
        if (this.olga &&
            this.gameScoreElement &&
            this.controlsElement &&
            this.statusElement &&
            this.menuComponent) {
            let boardSize = 0;
            const titleSize = 80;
            width = (this.preferredWidthPercentage * width);
            if (this.resizeElement) {
                this.resizeElement.style.left = '-10px';
                this.resizeElement.style.top = 'calc(50% - 3em)';
                this.resizeElement.style.width = '1.2em';
                this.resizeElement.style.height = '6em';
            }
            if (!gsSize) {
                let padding = width * 0.05;
                if (padding >= 16 || padding <= 10) {
                    padding = 12;
                }
                boardSize = Math.floor((1 - this.preferredRatioLandscape) * width);
                if (boardSize > height) {
                    boardSize = height - padding / 2;
                }
                let controlsHeight = boardSize / 7;
                controlsHeight = controlsHeight > 62 ? 62 : controlsHeight;
                let gsWidth = width - boardSize - padding;
                (_a = this.board) === null || _a === void 0 ? void 0 : _a.setSize(boardSize);
                let gsHeight = boardSize - 200 - controlsHeight;
                // game score
                this.gameScoreElement.style.left = '';
                this.gameScoreElement.style.top = titleSize + 2 + 'px'; // 64 represents the controls ux
                this.gameScoreElement.style.width = gsWidth + 'px';
                this.gameScoreElement.style.height = gsHeight + 'px';
                // controls
                this.controlsElement.style.left = '';
                this.controlsElement.style.top =
                    (gsHeight + (titleSize + 10)).toString() + 'px'; // 64 represents the
                this.controlsElement.style.width = (gsWidth - 2).toString() + 'px';
                this.controlsElement.style.height = controlsHeight + 'px';
                this.controlsElement.style.right = '1px';
                this.statusElement.style.left = '';
                this.statusElement.style.top =
                    (gsHeight + titleSize + controlsHeight + 62).toString() + 'px'; // 64 represents the
                this.statusElement.style.width = gsWidth.toString() + 'px';
                this.statusElement.style.height = controlsHeight + 'px';
                this.statusElement.style.right = '1px';
                this.scoreSize.next(gsWidth);
            }
            else {
                //this.preferredRatio = width / gsSize;
                let padding = width * 0.02;
                if (padding < 18) {
                    padding = 18;
                }
                const widthAvailable = window.innerWidth - (gsSize + padding);
                boardSize = Math.floor(widthAvailable / 8) * 8;
                if (boardSize >= window.innerHeight) {
                    boardSize = Math.floor((window.innerHeight - 16) / 8) * 8;
                    gsSize = window.innerWidth - boardSize + padding;
                }
                (_b = this.board) === null || _b === void 0 ? void 0 : _b.setSize(boardSize);
                let controlsHeight = boardSize / 7;
                controlsHeight = controlsHeight > 62 ? 62 : controlsHeight;
                let gsHeight = boardSize - 200 - controlsHeight;
                // game score
                this.gameScoreElement.style.left = '';
                this.gameScoreElement.style.top = titleSize + 2 + 'px'; // 64 represents the controls ux
                this.gameScoreElement.style.width = gsSize + 'px';
                this.gameScoreElement.style.height = gsHeight + 'px';
                this.gameScoreElement.style.overflow = 'visible';
                // controls
                this.controlsElement.style.left = '';
                this.controlsElement.style.top =
                    (gsHeight + titleSize + 34).toString() + 'px'; // 64 represents the
                this.controlsElement.style.width = (gsSize - 2).toString() + 'px';
                this.controlsElement.style.right = '1px';
                this.statusElement.style.left = '';
                this.statusElement.style.top =
                    (gsHeight + titleSize + controlsHeight + 62).toString() + 'px'; // 64 represents the
                this.statusElement.style.width = gsSize.toString() + 'px';
                this.statusElement.style.right = '1px';
                this.scoreSize.next(gsSize);
            }
            if (this.menuComponent && this.menuComponent.visible) {
                this.menuComponent.resize(width, height);
            }
            this.boardSize.next(boardSize);
        }
    }
    resizeToPortrait(width, height, gsSize) {
        var _a;
        if (this.olga) {
            const boardSize = width * this.boardRatio - 6;
            (_a = this.board) === null || _a === void 0 ? void 0 : _a.setSize(boardSize);
            if (this.statusElement) {
                this.statusElement.style.top = (boardSize - 32).toString() + 'px'; // 64 represents the controls ux
                this.statusElement.style.left = 'calc(1% - 1px)';
                this.statusElement.style.width = '98%';
                this.statusElement.style.height = '52px';
            }
            if (this.boardElement) {
                this.boardElement.style.left =
                    width * ((1 - this.boardRatio) / 2) + 'px';
            }
            if (this.gameScoreElement) {
                this.gameScoreElement.style.top = boardSize + 129 + 'px'; // 64 represents the controls ux
                this.gameScoreElement.style.left = 'calc(1% - 1px)';
                this.gameScoreElement.style.width = 'calc(98%  + 2px)';
                // MUST MOVE TO DYNAMICALLY RESIZING TO GAME SCORE
                this.gameScoreElement.style.height = height * .55 + 'px';
                this.gameScoreElement.style.overflow = 'visible ';
                //  (boardSize / 3 > 425 ? 425 : boardSize / 3).toString() + 'px';
            }
            if (this.controlsElement) {
                this.controlsElement.style.top =
                    (boardSize + 30).toString() + 'px'; // 64 represents the controls ux
                this.controlsElement.style.left = 'calc(1% - 1px)';
                this.controlsElement.style.width = '98%';
                this.controlsElement.style.height = '99px';
            }
            if (this.resizeElement) {
                this.resizeElement.style.left = 'calc(50% - 3em)';
                this.resizeElement.style.top = '-4px';
                this.resizeElement.style.width = '6em';
                this.resizeElement.style.height = '1.2em';
            }
            if (this.menuComponent && this.menuComponent.visible) {
                this.menuComponent.resize(width, height);
            }
        }
    }
    initializeLayout(olga, autoResize = true) {
        this.olga = olga;
        this.gameScore = olga.gameScoreComponent;
        this.board = olga.canvasBoardComponent;
        this.menuComponent = olga.menuComponent;
        this.appContainer = olga.appContainer;
        if (autoResize) {
            window.removeEventListener('resize', this.resizeLayout.bind(this));
            window.addEventListener('resize', this.resizeLayout.bind(this));
        }
        this.resizeLayout();
        window.setTimeout(() => {
            this.resizeLayout();
        }, 250);
    }
    increaseBoardSize() {
        if (this.preferredRatioLandscape > .3) {
            this.preferredRatioLandscape -= .025;
        }
        if (this.preferredRatioPortrait > .3) {
            this.preferredRatioPortrait -= .025;
        }
        this.resizeLayout();
    }
    decreaseBoardSize() {
        if (this.preferredRatioLandscape < .7) {
            this.preferredRatioLandscape += .025;
        }
        if (this.preferredRatioPortrait < .7) {
            this.preferredRatioPortrait += .025;
        }
        this.resizeLayout();
    }
    onSliderTouch(event) {
        if (event.touches.length > 0 &&
            this.landscapeOrientation &&
            event &&
            event.touches[0].clientX > 64) {
            if (this.olga && this.appContainer) {
                let gsSize = window.innerWidth - event.touches[0].clientX;
                const width = this.appContainer.nativeElement.clientWidth;
                const height = this.appContainer.nativeElement.clientHeight;
                switch (this.preferredLayout) {
                    case 'auto': {
                        if (width > height) {
                            this.resizeToLandscape(width, height, gsSize);
                        }
                        else {
                            this.resizeToPortrait(width, height, gsSize);
                        }
                        break;
                    }
                    case 'landscape': {
                        this.resizeToLandscape(width, height, gsSize);
                        break;
                    }
                    case 'portrait': {
                        this.resizeToPortrait(width, height, gsSize);
                        break;
                    }
                }
            }
        }
        else {
            if (!this.landscapeOrientation &&
                event &&
                event.touches[0].clientY > 64) {
                if (this.olga && this.appContainer) {
                    let gsSize = window.innerHeight - event.touches[0].clientY;
                    const width = this.appContainer.nativeElement.clientWidth;
                    const height = this.appContainer.nativeElement.clientHeight;
                    switch (this.preferredLayout) {
                        case 'auto': {
                            if (width > height) {
                                this.resizeToLandscape(width, height, gsSize);
                            }
                            else {
                                this.resizeToPortrait(width, height, gsSize);
                            }
                            break;
                        }
                        case 'landscape': {
                            this.resizeToLandscape(width, height, gsSize);
                            break;
                        }
                        case 'portrait': {
                            this.resizeToPortrait(width, height, gsSize);
                            break;
                        }
                    }
                }
            }
        }
    }
    onSliderDrag(event) {
        if (this.landscapeOrientation && event && event.clientX > 64) {
            if (this.olga && this.appContainer) {
                let gsSize = window.innerWidth - event.clientX;
                const width = this.appContainer.nativeElement.clientWidth;
                const height = this.appContainer.nativeElement.clientHeight;
                switch (this.preferredLayout) {
                    case 'auto': {
                        if (width > height) {
                            this.resizeToLandscape(width, height, gsSize);
                        }
                        else {
                            this.resizeToPortrait(width, height, gsSize);
                        }
                        break;
                    }
                    case 'landscape': {
                        this.resizeToLandscape(width, height, gsSize);
                        break;
                    }
                    case 'portrait': {
                        this.resizeToPortrait(width, height, gsSize);
                        break;
                    }
                }
            }
        }
        else {
            if (!this.landscapeOrientation && event && event.clientY > 64) {
                if (this.olga && this.appContainer) {
                    let gsSize = window.innerHeight - event.clientY;
                    const width = this.appContainer.nativeElement.clientWidth;
                    const height = this.appContainer.nativeElement.clientHeight;
                    switch (this.preferredLayout) {
                        case 'auto': {
                            if (width > height) {
                                this.resizeToLandscape(width, height, gsSize);
                            }
                            else {
                                this.resizeToPortrait(width, height, gsSize);
                            }
                            break;
                        }
                        case 'landscape': {
                            this.resizeToLandscape(width, height, gsSize);
                            break;
                        }
                        case 'portrait': {
                            this.resizeToPortrait(width, height, gsSize);
                            break;
                        }
                    }
                }
            }
        }
    }
    resizeLayout() {
        if (!this.appContainer) {
            console.log('Invalid (Null) App Container %$@');
        }
        else {
            const width = this.appContainer.nativeElement.clientWidth;
            const height = this.appContainer.nativeElement.clientHeight;
            switch (this.preferredLayout) {
                case 'auto': {
                    if (width > height) {
                        this.resizeToLandscape(width, height);
                    }
                    else {
                        this.resizeToPortrait(width, height);
                    }
                    break;
                }
                case 'landscape': {
                    this.resizeToLandscape(width, height);
                    break;
                }
                case 'portrait': {
                    this.resizeToPortrait(width, height);
                    break;
                }
            }
        }
    }
    shrink() {
        if (this.appContainer) {
            if (this.landscapeOrientation) {
                if (this.preferredWidthPercentage >= .3) {
                    this.preferredWidthPercentage -= .1;
                    this.appContainer.nativeElement.clientWidth = (window.innerWidth * this.preferredWidthPercentage);
                }
            }
            else {
                if (this.preferredHeightPercentage >= .3) {
                    this.preferredHeightPercentage -= .1;
                    this.appContainer.nativeElement.clientHeight = (window.innerHeight * this.preferredHeightPercentage);
                }
            }
            this.resizeLayout();
        }
    }
    grow() {
        if (this.appContainer) {
            if (this.landscapeOrientation) {
                if (this.preferredWidthPercentage <= .9) {
                    this.preferredWidthPercentage += .1;
                    this.appContainer.nativeElement.clientWidth = (window.innerWidth * this.preferredWidthPercentage);
                }
            }
            else {
                if (this.preferredHeightPercentage <= .9) {
                    this.preferredHeightPercentage += .1;
                    this.appContainer.nativeElement.clientHeight = (window.innerHeight * this.preferredHeightPercentage);
                }
            }
            this.resizeLayout();
        }
    }
}
LayoutService.ɵfac = function LayoutService_Factory(t) { return new (t || LayoutService)(); };
LayoutService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LayoutService, factory: LayoutService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LayoutService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/services/olga.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/olga.service.ts ***!
  \******************************************/
/*! exports provided: OlgaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OlgaService", function() { return OlgaService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _common_kokopu_engine__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/kokopu-engine */ "./src/app/common/kokopu-engine.ts");




class OlgaService {
    // Visual Settings
    constructor() {
        this.showingPly = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](true);
        this.showingHalfPly = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this.cookiesAccepted = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this.autoPlaySpeed = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](300);
        this.autoIntervalID = -1;
        this.timeLeft = 300;
        this.UUID = '';
        this.figurineNotation = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](true);
        this.gsFontFamily = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('FigurineSymbolT1');
        this.scoreFontSize = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](32);
        this.figurineSize = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](20);
        this.showLabels = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](true);
        this._games = [];
        this._game = null;
        this._board = null;
        this._score = null;
        this._status = null;
        this._controls = null;
        this._menu = null;
        this.isVariant = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this.figurineNotation.subscribe((figurineNotation) => {
            if (figurineNotation) {
                this.gsFontFamily.next('FigurineSymbolT1');
            }
            else {
                this.gsFontFamily.next('Cambria');
            }
            document.documentElement.style.setProperty('--gsFontFamily', this.gsFontFamily.value);
        });
    }
    moveToStart() {
        if (this._score) {
            this._score.moveToStart();
        }
    }
    advance() {
        if (this._score) {
            this._score.advance();
        }
    }
    previous() {
        if (this._score) {
            this._score.previous();
        }
    }
    moveToEnd() {
        if (this._score && !this._score.isFinalPosition()) {
            this._score.moveToEnd();
        }
    }
    getNodeIndex() {
        if (this._score) {
            return this._score.currentIndex;
        }
        return -1;
    }
    autoAdvance() {
        this.timeLeft -= 100;
        if (this._controls) {
            this._controls.setTimer(this.timeLeft);
        }
        if (this.timeLeft <= 0) {
            if (this._score && !this._score.isFinalPosition()) {
                this.advance();
            }
            else {
                this.toggleAutoPlay();
            }
            this.timeLeft = this.autoPlaySpeed.value;
        }
    }
    toggleAutoPlay() {
        if (this._score && !this._score.isFinalPosition() && this.autoIntervalID == -1) {
            this.autoIntervalID = window.setInterval(this.autoAdvance.bind(this), 100);
            if (this._controls) {
                this._controls.playing = true;
            }
        }
        else {
            window.clearInterval(this.autoIntervalID);
            this.autoIntervalID = -1;
            this.timeLeft = this.autoPlaySpeed.value;
            if (this._controls) {
                this._controls.setTimer(this.timeLeft);
                this._controls.playing = false;
            }
        }
    }
    getCookiesConsent() {
        return this.cookiesAccepted.value;
    }
    setCookieConsent(consent) {
        this.cookiesAccepted.next(consent);
    }
    openEngine() { }
    toggleGameScoreViewType() {
    }
    loadPGN(pgn) {
        var _a;
        this._games = _common_kokopu_engine__WEBPACK_IMPORTED_MODULE_2__["ChessGame"].parsePGN(this, pgn);
        (_a = this._score) === null || _a === void 0 ? void 0 : _a.setGameScoreItems([]);
        if (this._games.length > 0) {
            const game = this._games[0];
            this._game = game;
            window.setTimeout(() => {
                var _a, _b, _c, _d, _e;
                (_a = this._score) === null || _a === void 0 ? void 0 : _a.setGameScoreItems((_b = this._game) === null || _b === void 0 ? void 0 : _b.generateGameScore());
                (_c = this._board) === null || _c === void 0 ? void 0 : _c.setBoardToPosition((_d = this._game) === null || _d === void 0 ? void 0 : _d.getPosition());
                (_e = this._score) === null || _e === void 0 ? void 0 : _e.updateSelection();
            }, 1);
        }
    }
    clearItems() {
        if (this._score) {
            this._score._items = [];
        }
    }
    typeToString(type) {
        return _common_kokopu_engine__WEBPACK_IMPORTED_MODULE_2__["GameScoreType"][type];
    }
    selectGame(index) {
        if (index >= 0 && index <= this._games.length && this._score) {
            this._game = this._games[index];
            this._score._items = this._game.generateGameScore();
        }
    }
    initializeComponents() { }
    attachBoard(board) {
        this._board = board;
    }
    attachScore(score) {
        this._score = score;
    }
    attachStatus(status) {
        this._status = status;
    }
    attachControls(controls) {
        this._controls = controls;
    }
    editComment(data) {
        console.log('Editing Comment -> ' + data.move.comment());
    }
    openVariation(data) {
        const variations = data.move.variations();
        if (this._score && variations && variations.length) {
            console.log('Editing Variations on: ' + data.move.notation());
            console.log(variations);
            if (this._menu) {
                this._menu.openVariationMenu(data);
            }
        }
    }
    displayVariations(data) {
        console.log('Displaying Variations');
        console.log(data.move.notation());
        const variations = data.move.variations();
        let previous = data;
        variations.forEach((variation) => {
            console.log(variation);
            let current = variation.first();
            if (current) {
                console.log('Variation chain :');
                let chain = current.notation();
                if (previous) {
                    chain = previous.move.notation() + '->' + chain;
                }
                while (current) {
                    current = current.next();
                    if (current) {
                        chain += '->' + current.notation();
                    }
                }
                console.log(chain);
            }
        });
        console.log(variations);
    }
    // game score interface
    // Board interface
    rotateBoardOrientation() {
        if (this._board) {
            if (this._board.settings.orientation == 'white') {
                this._board.settings.orientation = 'black';
            }
            else {
                this._board.settings.orientation = 'white';
            }
            this._board.requestRedraw();
        }
    }
    reRenderBoard() {
        if (this._board) {
            this._board.requestRedraw();
        }
    }
    redrawBoard() {
        if (this._game && this._board) {
            const position = this._game.getPosition();
            if (position) {
                this._board.setBoardToPosition(position);
            }
        }
    }
    updateStatus(turn, last, move = null) {
        var _a;
        (_a = this._status) === null || _a === void 0 ? void 0 : _a.updateStatus(turn, last, move);
    }
    isVariantChanged(isVariant) {
        this.isVariant.next(isVariant);
    }
    makeBoardMove(move) {
        var _a;
        (_a = this._board) === null || _a === void 0 ? void 0 : _a.makeMove(move);
    }
    reverseBoardMove(move) {
        var _a;
        (_a = this._board) === null || _a === void 0 ? void 0 : _a.unMakeMove(move);
    }
    showPromotionDialog(move) {
        var _a;
        (_a = this._board) === null || _a === void 0 ? void 0 : _a.showPromotionDialog(move);
    }
    incrementGameScoreSelection() {
        var _a;
        (_a = this._score) === null || _a === void 0 ? void 0 : _a.incrementSelection();
    }
    gameScoreItemsChanged(items) {
        var _a;
        (_a = this._score) === null || _a === void 0 ? void 0 : _a.setGameScoreItems(items);
    }
    validGame() {
        return this._game !== null;
    }
    performPromotion(move) {
        var _a;
        (_a = this._game) === null || _a === void 0 ? void 0 : _a.performPromotion(move);
    }
    getGame() {
        return this._game;
    }
    getBoard() {
        return this._board;
    }
    // engine interface
    isMoveDescriptor(move) {
        return _common_kokopu_engine__WEBPACK_IMPORTED_MODULE_2__["ChessGame"].isMoveDescriptor(move);
    }
    getMoveNotation(node) {
        if (this._game) {
            return this._game.getMoveNotation(node);
        }
        return '';
    }
    play(next) {
        if (this._game) {
            return this._game.play(next);
        }
        return false;
    }
    unPlay(current, previous = null) {
        if (this._game) {
            return this._game.unPlay(current, previous);
        }
        return false;
    }
    makeEngineMove(next) {
        if (this._game) {
            return this._game.makeMove(next);
        }
        return null;
    }
    makeVariantMove(index, move) {
        if (this._game) {
            return this._game.makeVariantMove(index, move);
        }
        return false;
    }
    resetEngine() {
        if (this._game) {
            this._game.resetEngine();
        }
    }
}
OlgaService.ɵfac = function OlgaService_Factory(t) { return new (t || OlgaService)(); };
OlgaService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: OlgaService, factory: OlgaService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OlgaService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, { showingPly: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], showingHalfPly: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], cookiesAccepted: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], autoPlaySpeed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], figurineNotation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], gsFontFamily: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], scoreFontSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], figurineSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], showLabels: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




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

module.exports = __webpack_require__(/*! C:\projects\Olga\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!***********************!*\
  !*** jsdom (ignored) ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!********************************************************!*\
  !*** jsdom/lib/jsdom/living/generated/utils (ignored) ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!***************************************!*\
  !*** jsdom/lib/jsdom/utils (ignored) ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map