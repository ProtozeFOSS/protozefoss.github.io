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
/* harmony import */ var _services_olga_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/olga.service */ "./src/app/services/olga.service.ts");
/* harmony import */ var _services_colors_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/colors.service */ "./src/app/services/colors.service.ts");
/* harmony import */ var _services_game_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/game.service */ "./src/app/services/game.service.ts");
/* harmony import */ var _services_layout_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/layout.service */ "./src/app/services/layout.service.ts");








const _c0 = ["olgaContainer"];
class Olga {
    constructor(olga, colorService, gameService, layoutService) {
        this.olga = olga;
        this.colorService = colorService;
        this.gameService = gameService;
        this.layoutService = layoutService;
        this.title = 'Olga PGN Viewer 2.0';
        this.gameScoreComponent = null;
        this.canvasBoardComponent = null;
        this.appContainer = null;
        this.gameScoreElement = null;
        this.boardElement = null;
        this.controlsElement = null;
        this.pgnString = '';
        this.olgaID = '12312321';
        this.gameScoreWidth = 389;
        this.oldWidth = 0;
        this.doneResizingScore = false;
        const date = new Date();
        this.olgaID = 'OLGA-' + date.getTime().toString();
        console.log('ID: ' + this.olgaID);
        // this.gameService..subscribe((game) => {
        //   this.currentGame = game;
        //   //this.gameScoreComponent.setGame(game);
        //   //this.canvasBoarComponent.setGame(game);
        //   //this.layoutService.updateLayout();
        // })
    }
    // tslint:disable-next-line: typedef
    ngAfterViewInit() {
        this.gameScoreElement = document.getElementById('app-gamescore' + this.olgaID);
        this.boardElement = document.getElementById(this.olgaID + '-ccb');
        this.controlsElement = document.getElementById('olga-controls' + this.olgaID);
        this.colorService.initializeColorPalette();
        this.layoutService.initializeLayout(this);
        if (this.canvasBoardComponent) {
            this.gameService.attachBoard(this.canvasBoardComponent);
        }
        if (this.gameScoreComponent) {
            this.gameService.attachScore(this.gameScoreComponent);
            this.gameScoreComponent.resizeHandleEvent = this.layoutService.onSliderDrag.bind(this.layoutService);
            this.gameScoreComponent.resizeTouchEvent = this.layoutService.onSliderTouch.bind(this.layoutService);
        }
    }
    mouseMoved(event) {
        if (this.gameScoreComponent && this.gameScoreComponent.resizing) {
            this.gameScoreComponent.resizeHandleEvent(event);
            if (event.buttons === 0) {
                this.gameScoreComponent.resizing = false;
            }
        }
    }
    touchMoved(event) {
        if (this.gameScoreComponent && this.gameScoreComponent.resizing) {
            this.gameScoreComponent.resizeTouchEvent(event);
        }
    }
    loadPGN(pgn) {
        this.gameService.loadPGN(pgn);
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
    ignoreEvent(event) {
        //console.log('Ignoring ' + event);
        event.preventDefault();
        event.stopPropagation();
    }
}
Olga.ɵfac = function Olga_Factory(t) { return new (t || Olga)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_olga_service__WEBPACK_IMPORTED_MODULE_3__["OlgaService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_colors_service__WEBPACK_IMPORTED_MODULE_4__["ColorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_game_service__WEBPACK_IMPORTED_MODULE_5__["GameService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_layout_service__WEBPACK_IMPORTED_MODULE_6__["LayoutService"])); };
Olga.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Olga, selectors: [["olga"]], viewQuery: function Olga_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_game_score_game_score_ux__WEBPACK_IMPORTED_MODULE_1__["GamescoreUxComponent"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_canvas_chessboard_canvas_chessboard_component__WEBPACK_IMPORTED_MODULE_2__["CanvasChessBoard"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.gameScoreComponent = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.canvasBoardComponent = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.appContainer = _t.first);
    } }, inputs: { pgnString: "pgnString", olgaID: "olgaID" }, outputs: { gameScoreElement: "gameScoreElement", boardElement: "boardElement", controlsElement: "controlsElement", gameScoreWidth: "gameScoreWidth", oldWidth: "oldWidth" }, decls: 6, vars: 7, consts: [[1, "olga-container", 3, "id", "touchmove", "mousemove"], ["olgaContainer", ""], [3, "id", "UUID", "theme", "touchstart"], ["canvasBoardComponent", ""], [3, "id", "UUID", "contextmenu"], [3, "id"]], template: function Olga_Template(rf, ctx) { if (rf & 1) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("touchmove", function Olga_Template_div_touchmove_0_listener($event) { return ctx.touchMoved($event); })("mousemove", function Olga_Template_div_mousemove_0_listener($event) { return ctx.mouseMoved($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "canvas-chessboard", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("touchstart", function Olga_Template_canvas_chessboard_touchstart_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3); return _r1.touchStart($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "app-game-score-ux", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("contextmenu", function Olga_Template_app_game_score_ux_contextmenu_4_listener($event) { return ctx.ignoreEvent($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "olga-controls", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "", ctx.olgaID, "-olga-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "", ctx.olgaID, "-ccb");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("UUID", ctx.olgaID)("theme", ctx.colorService.boardTheme());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "app-gamescore", ctx.olgaID, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("UUID", ctx.olgaID);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "olga-controls", ctx.olgaID, "");
    } }, styles: ["@font-face {\n  font-family: \"Caveat\";\n  src: url('Caveat-Bold.woff2') format(\"woff2\"), url('Caveat-Bold.woff') format(\"woff\");\n  font-weight: bold;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"Caveat\";\n  src: url('Caveat-Regular.woff2') format(\"woff2\"), url('Caveat-Regular.woff') format(\"woff\");\n  font-weight: 600;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"FigurineSymbolT1\";\n  src: url('FigurineSymbolT1Bold.woff2') format(\"woff2\"), url('FigurineSymbolT1Bold.woff') format(\"woff\");\n  font-weight: bold;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"FigurineSymbolT1\";\n  src: url('FigurineSymbolT1.woff2') format(\"woff2\"), url('FigurineSymbolT1.woff') format(\"woff\");\n  font-weight: 600;\n  font-style: normal;\n  font-display: swap;\n}\n\n\n\n\n\n\n\n[_ngcontent-%COMP%]:root {\n  --bg-color: #f2f3f7;\n  --fg-color: #383a41;\n  --red: #e43030;\n  --green: #19a187;\n  --blue: #367bf0;\n  --dark-blue: #265ab1;\n  --maroon: #b8174c;\n  --purple: #8c42ab;\n}\n[_ngcontent-%COMP%]::-moz-focus-inner, [_ngcontent-%COMP%]:-moz-focusring {\n  border: 0;\n  color: transparent;\n  text-shadow: 0 0 0 #383a41;\n}\n[_ngcontent-%COMP%]::selection, [_ngcontent-%COMP%]::-moz-selection {\n  color: white;\n  background: black;\n}\n*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  outline: none;\n  user-select: none;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  -webkit-appearance: none;\n  -webkit-tap-highlight-color: transparent !important;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0) !important;\n  -webkit-touch-callout: none;\n  cursor: default;\n  letter-spacing: 0;\n}\n.selectable[_ngcontent-%COMP%], .selectable[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  cursor: auto;\n  user-select: text;\n  -webkit-touch-callout: text;\n  -webkit-user-select: text;\n  -khtml-user-select: text;\n  -moz-user-select: text;\n  -ms-user-select: text;\n}\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  background-color: #f2f3f7;\n  color: #383a41;\n  margin: 0;\n  padding: 0;\n  font-size: 10pt;\n  height: 100%;\n  overflow: auto;\n}\n.with-shadow[_ngcontent-%COMP%], .outset[_ngcontent-%COMP%], button[_ngcontent-%COMP%], .checktext[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]    + span[_ngcontent-%COMP%], .blue-button[_ngcontent-%COMP%], .checktext[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + span[_ngcontent-%COMP%], button.blue-button[_ngcontent-%COMP%], .red-button.blue-button[_ngcontent-%COMP%], .green-button.blue-button[_ngcontent-%COMP%], .green-button[_ngcontent-%COMP%], button.green-button[_ngcontent-%COMP%], .red-button.green-button[_ngcontent-%COMP%], .red-button[_ngcontent-%COMP%], button.red-button[_ngcontent-%COMP%], input[type=button][_ngcontent-%COMP%], input[type=submit][_ngcontent-%COMP%], input[type=reset][_ngcontent-%COMP%], select[_ngcontent-%COMP%], input[type=text][_ngcontent-%COMP%]:not(select):focus, input[type=search][_ngcontent-%COMP%]:not(select):focus, input[type=tel][_ngcontent-%COMP%]:not(select):focus, input[type=url][_ngcontent-%COMP%]:not(select):focus, input[type=email][_ngcontent-%COMP%]:not(select):focus, input[type=password][_ngcontent-%COMP%]:not(select):focus, input[type=date][_ngcontent-%COMP%]:not(select):focus, input[type=month][_ngcontent-%COMP%]:not(select):focus, input[type=week][_ngcontent-%COMP%]:not(select):focus, input[type=time][_ngcontent-%COMP%]:not(select):focus, input[type=number][_ngcontent-%COMP%]:not(select):focus, input[type=color][_ngcontent-%COMP%]:not(select):focus, select[_ngcontent-%COMP%]:not(select):focus, textarea[_ngcontent-%COMP%]:not(select):focus, .paper[_ngcontent-%COMP%] {\n  box-shadow: 6px 6px 10px rgba(0, 0, 0, 0.1), -6px -6px 10px white;\n}\n.outset[_ngcontent-%COMP%], button[_ngcontent-%COMP%], .checktext[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]    + span[_ngcontent-%COMP%], .blue-button[_ngcontent-%COMP%], .checktext[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + span[_ngcontent-%COMP%], button.blue-button[_ngcontent-%COMP%], .red-button.blue-button[_ngcontent-%COMP%], .green-button.blue-button[_ngcontent-%COMP%], .green-button[_ngcontent-%COMP%], button.green-button[_ngcontent-%COMP%], .red-button.green-button[_ngcontent-%COMP%], .red-button[_ngcontent-%COMP%], button.red-button[_ngcontent-%COMP%], input[type=button][_ngcontent-%COMP%], input[type=submit][_ngcontent-%COMP%], input[type=reset][_ngcontent-%COMP%], select[_ngcontent-%COMP%], input[type=text][_ngcontent-%COMP%]:not(select):focus, input[type=search][_ngcontent-%COMP%]:not(select):focus, input[type=tel][_ngcontent-%COMP%]:not(select):focus, input[type=url][_ngcontent-%COMP%]:not(select):focus, input[type=email][_ngcontent-%COMP%]:not(select):focus, input[type=password][_ngcontent-%COMP%]:not(select):focus, input[type=date][_ngcontent-%COMP%]:not(select):focus, input[type=month][_ngcontent-%COMP%]:not(select):focus, input[type=week][_ngcontent-%COMP%]:not(select):focus, input[type=time][_ngcontent-%COMP%]:not(select):focus, input[type=number][_ngcontent-%COMP%]:not(select):focus, input[type=color][_ngcontent-%COMP%]:not(select):focus, select[_ngcontent-%COMP%]:not(select):focus, textarea[_ngcontent-%COMP%]:not(select):focus, .paper[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  background: #f2f3f7;\n}\n.inset[_ngcontent-%COMP%], hr[_ngcontent-%COMP%], button.active[_ngcontent-%COMP%], .checktext[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]    + span.active[_ngcontent-%COMP%], .active.blue-button[_ngcontent-%COMP%], .active.green-button[_ngcontent-%COMP%], .active.red-button[_ngcontent-%COMP%], button[_ngcontent-%COMP%]:active, .checktext[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]    + span[_ngcontent-%COMP%]:active, .blue-button[_ngcontent-%COMP%]:active, .green-button[_ngcontent-%COMP%]:active, .red-button[_ngcontent-%COMP%]:active, input[type=button].active[_ngcontent-%COMP%], input[type=button][_ngcontent-%COMP%]:active, input[type=submit].active[_ngcontent-%COMP%], input[type=submit][_ngcontent-%COMP%]:active, input[type=reset].active[_ngcontent-%COMP%], input[type=reset][_ngcontent-%COMP%]:active, input[type=text][_ngcontent-%COMP%]:not(select), input[type=search][_ngcontent-%COMP%]:not(select), input[type=tel][_ngcontent-%COMP%]:not(select), input[type=url][_ngcontent-%COMP%]:not(select), input[type=email][_ngcontent-%COMP%]:not(select), input[type=password][_ngcontent-%COMP%]:not(select), input[type=date][_ngcontent-%COMP%]:not(select), input[type=month][_ngcontent-%COMP%]:not(select), input[type=week][_ngcontent-%COMP%]:not(select), input[type=time][_ngcontent-%COMP%]:not(select), input[type=number][_ngcontent-%COMP%]:not(select), input[type=color][_ngcontent-%COMP%]:not(select), select[_ngcontent-%COMP%]:not(select), textarea[_ngcontent-%COMP%]:not(select) {\n  border-radius: 10px;\n  box-shadow: 0 0 transparent, 0 0 transparent, inset 3px 3px 5px rgba(0, 0, 0, 0.1), inset -3px -3px 5px white;\n  background: #f8f9fb;\n}\n.paper[_ngcontent-%COMP%] {\n  padding: 10px 20px 20px;\n  margin-top: 20px;\n  min-height: 100px;\n  font-size: 1.2em;\n  background: #f2f3f7;\n}\nsection[_ngcontent-%COMP%], article[_ngcontent-%COMP%], .section[_ngcontent-%COMP%], .article[_ngcontent-%COMP%], .paper[_ngcontent-%COMP%] {\n  line-height: 2em;\n  word-wrap: break-word;\n  word-break: normal;\n  line-height: 2em;\n}\ninput[type=text][_ngcontent-%COMP%], input[type=search][_ngcontent-%COMP%], input[type=tel][_ngcontent-%COMP%], input[type=url][_ngcontent-%COMP%], input[type=email][_ngcontent-%COMP%], input[type=password][_ngcontent-%COMP%], input[type=date][_ngcontent-%COMP%], input[type=month][_ngcontent-%COMP%], input[type=week][_ngcontent-%COMP%], input[type=time][_ngcontent-%COMP%], input[type=number][_ngcontent-%COMP%], input[type=color][_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  border: 0;\n  background: #f2f3f7;\n  color: #383a41;\n  font-weight: normal;\n  padding: 0 1.25em;\n  line-height: 1.25em;\n  height: 3.5em;\n  margin: 10px 0;\n  font-size: 1.1rem;\n  cursor: text;\n  user-select: text;\n  -webkit-touch-callout: text;\n  -webkit-user-select: text;\n  -khtml-user-select: text;\n  -moz-user-select: text;\n  -ms-user-select: text;\n  transition: box-shadow 0.2s;\n}\ntextarea[_ngcontent-%COMP%] {\n  height: 350px;\n  padding: 1.25em;\n}\nselect[_ngcontent-%COMP%] {\n  cursor: pointer;\n  background: url(data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAxOSAxOSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyB0cmFuc2Zvcm09Im1hdHJpeCguMDM0IDAgMCAuMDM0IC02LjggMS43ZS01KSIgc3R5bGU9ImZpbGw6IzdiN2U4YyI+PHBhdGggZD0ibTQ4MCAzNDQtMjExLTIxMmMtMTYtMTYtNDEtMTYtNTcgMC0xNiAxNi0xNiA0MiAwIDU3bDIzOCAyMzljOC40IDguNSAyMCAxMiAzMSAxMiAxMSAwLjU2IDIyLTMuMiAzMS0xMmwyMzgtMjM5YzE2LTE2IDE2LTQyIDAtNTdzLTQxLTE2LTU3IDB6IiBzdHlsZT0iZmlsbDojN2I3ZThjIi8+PC9nPjwvc3ZnPgo=) no-repeat right 1em center;\n  background-size: 1.2em;\n  padding-right: 3em;\n}\ninput[_ngcontent-%COMP%]::placeholder, textarea[_ngcontent-%COMP%]::placeholder {\n  opacity: 1;\n  transition: opacity 0.2s;\n  color: inherit;\n}\ninput[_ngcontent-%COMP%]:focus::placeholder, textarea[_ngcontent-%COMP%]:focus::placeholder {\n  opacity: 0.2;\n}\ninput[_ngcontent-%COMP%]:-ms-input-placeholder, textarea[_ngcontent-%COMP%]:-ms-input-placeholder {\n  opacity: 1;\n  -ms-transition: opacity 0.2s;\n  transition: opacity 0.2s;\n  color: inherit;\n}\ninput[_ngcontent-%COMP%]:focus:-ms-input-placeholder, textarea[_ngcontent-%COMP%]:focus:-ms-input-placeholder {\n  opacity: 0.2;\n}\ninput[type=search][_ngcontent-%COMP%]::-webkit-search-decoration, input[type=search][_ngcontent-%COMP%]::-webkit-search-cancel-button, input[type=search][_ngcontent-%COMP%]::-webkit-search-results-button, input[type=search][_ngcontent-%COMP%]::-webkit-search-results-decoration {\n  display: none;\n}\nbutton[_ngcontent-%COMP%], .checktext[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]    + span[_ngcontent-%COMP%], .blue-button[_ngcontent-%COMP%], .checktext[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + span[_ngcontent-%COMP%], button.blue-button[_ngcontent-%COMP%], .red-button.blue-button[_ngcontent-%COMP%], .green-button.blue-button[_ngcontent-%COMP%], .green-button[_ngcontent-%COMP%], button.green-button[_ngcontent-%COMP%], .red-button.green-button[_ngcontent-%COMP%], .red-button[_ngcontent-%COMP%], button.red-button[_ngcontent-%COMP%], input[type=button][_ngcontent-%COMP%], input[type=submit][_ngcontent-%COMP%], input[type=reset][_ngcontent-%COMP%] {\n  border: 0;\n  text-transform: capitalize;\n  padding: 10px 0;\n  width: 8em;\n  text-align: center;\n  cursor: pointer;\n  color: inherit;\n  font-size: 1.1rem;\n  transition-property: background-color, box-shadow;\n  transition-delay: 0.2s;\n  transition-duration: 0.2s;\n}\nbutton.active[_ngcontent-%COMP%], .checktext[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]    + span.active[_ngcontent-%COMP%], .active.blue-button[_ngcontent-%COMP%], .active.green-button[_ngcontent-%COMP%], .active.red-button[_ngcontent-%COMP%], button[_ngcontent-%COMP%]:active, .checktext[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]    + span[_ngcontent-%COMP%]:active, .blue-button[_ngcontent-%COMP%]:active, .green-button[_ngcontent-%COMP%]:active, .red-button[_ngcontent-%COMP%]:active, input[type=button].active[_ngcontent-%COMP%], input[type=button][_ngcontent-%COMP%]:active, input[type=submit].active[_ngcontent-%COMP%], input[type=submit][_ngcontent-%COMP%]:active, input[type=reset].active[_ngcontent-%COMP%], input[type=reset][_ngcontent-%COMP%]:active {\n  transition-delay: 0s;\n  transition-duration: 0.1s;\n}\n.red-button[_ngcontent-%COMP%], button.red-button[_ngcontent-%COMP%], .checktext[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]    + span.red-button[_ngcontent-%COMP%], .red-button.blue-button[_ngcontent-%COMP%], .red-button.green-button[_ngcontent-%COMP%], input[type=button].red-button[_ngcontent-%COMP%], input[type=submit].red-button[_ngcontent-%COMP%], input[type=reset].red-button[_ngcontent-%COMP%] {\n  color: white;\n  font-weight: bold;\n  text-shadow: 0 0.1em 0.1em rgba(0, 0, 0, 0.7);\n  background: linear-gradient(to top, #e43030 30%, #e84b4b 80%);\n  box-shadow: 0 0 0.5em rgba(228, 48, 48, 0.7), 0 0 transparent, inset 0 -5px 0 rgba(0, 0, 0, 0.05), inset 0 2px 0 rgba(255, 255, 255, 0.2);\n  border-radius: 6px 6px 8px 8px;\n  transition-property: box-shadow, border-radius;\n}\n.red-button.active[_ngcontent-%COMP%], .red-button[_ngcontent-%COMP%]:active, button.red-button.active[_ngcontent-%COMP%], button.red-button[_ngcontent-%COMP%]:active, input[type=button].red-button.active[_ngcontent-%COMP%], input[type=button].red-button[_ngcontent-%COMP%]:active, input[type=submit].red-button.active[_ngcontent-%COMP%], input[type=submit].red-button[_ngcontent-%COMP%]:active, input[type=reset].red-button.active[_ngcontent-%COMP%], input[type=reset].red-button[_ngcontent-%COMP%]:active {\n  background: linear-gradient(to top, #e43030 30%, #e84b4b 80%);\n  border-radius: 6px;\n  box-shadow: 0 0 transparent, 0 0 transparent, inset 0 2px 5px 2px rgba(0, 0, 0, 0.2);\n}\n.green-button[_ngcontent-%COMP%], button.green-button[_ngcontent-%COMP%], .checktext[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]    + span.green-button[_ngcontent-%COMP%], .green-button.blue-button[_ngcontent-%COMP%], .green-button.red-button[_ngcontent-%COMP%], input[type=button].green-button[_ngcontent-%COMP%], input[type=submit].green-button[_ngcontent-%COMP%], input[type=reset].green-button[_ngcontent-%COMP%] {\n  color: white;\n  font-weight: bold;\n  text-shadow: 0 0.1em 0.1em rgba(0, 0, 0, 0.7);\n  background: linear-gradient(to top, #19a187 30%, #1dbb9d 80%);\n  box-shadow: 0 0 0.5em rgba(25, 161, 135, 0.7), 0 0 transparent, inset 0 -5px 0 rgba(0, 0, 0, 0.05), inset 0 2px 0 rgba(255, 255, 255, 0.2);\n  border-radius: 6px 6px 8px 8px;\n  transition-property: box-shadow, border-radius;\n}\n.green-button.active[_ngcontent-%COMP%], .green-button[_ngcontent-%COMP%]:active, button.green-button.active[_ngcontent-%COMP%], button.green-button[_ngcontent-%COMP%]:active, input[type=button].green-button.active[_ngcontent-%COMP%], input[type=button].green-button[_ngcontent-%COMP%]:active, input[type=submit].green-button.active[_ngcontent-%COMP%], input[type=submit].green-button[_ngcontent-%COMP%]:active, input[type=reset].green-button.active[_ngcontent-%COMP%], input[type=reset].green-button[_ngcontent-%COMP%]:active {\n  background: linear-gradient(to top, #19a187 30%, #1dbb9d 80%);\n  border-radius: 6px;\n  box-shadow: 0 0 transparent, 0 0 transparent, inset 0 2px 5px 2px rgba(0, 0, 0, 0.2);\n}\n.blue-button[_ngcontent-%COMP%], .checktext[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + span[_ngcontent-%COMP%], button.blue-button[_ngcontent-%COMP%], .checktext[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]    + span.blue-button[_ngcontent-%COMP%], .blue-button.red-button[_ngcontent-%COMP%], .blue-button.green-button[_ngcontent-%COMP%], input[type=button].blue-button[_ngcontent-%COMP%], input[type=submit].blue-button[_ngcontent-%COMP%], input[type=reset].blue-button[_ngcontent-%COMP%] {\n  color: white;\n  font-weight: bold;\n  text-shadow: 0 0.1em 0.1em rgba(0, 0, 0, 0.7);\n  background: linear-gradient(to top, #367bf0 30%, #528ef2 80%);\n  box-shadow: 0 0 0.5em rgba(54, 123, 240, 0.7), 0 0 transparent, inset 0 -5px 0 rgba(0, 0, 0, 0.05), inset 0 2px 0 rgba(255, 255, 255, 0.2);\n  border-radius: 6px 6px 8px 8px;\n  transition-property: box-shadow, border-radius;\n}\n.blue-button.active[_ngcontent-%COMP%], .checktext[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + span.active[_ngcontent-%COMP%], .blue-button[_ngcontent-%COMP%]:active, .checktext[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + span[_ngcontent-%COMP%]:active, button.blue-button.active[_ngcontent-%COMP%], button.blue-button[_ngcontent-%COMP%]:active, input[type=button].blue-button.active[_ngcontent-%COMP%], input[type=button].blue-button[_ngcontent-%COMP%]:active, input[type=submit].blue-button.active[_ngcontent-%COMP%], input[type=submit].blue-button[_ngcontent-%COMP%]:active, input[type=reset].blue-button.active[_ngcontent-%COMP%], input[type=reset].blue-button[_ngcontent-%COMP%]:active {\n  background: linear-gradient(to top, #367bf0 30%, #528ef2 80%);\n  border-radius: 6px;\n  box-shadow: 0 0 transparent, 0 0 transparent, inset 0 2px 5px 2px rgba(0, 0, 0, 0.2);\n}\nlabel[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0.56em 0;\n}\nlabel[_ngcontent-%COMP%], label[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\na[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:link, a[_ngcontent-%COMP%]:visited, a[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%]:active {\n  font-weight: bold;\n  color: #367bf0;\n  font-weight: bold;\n  text-decoration: none;\n}\na[_ngcontent-%COMP%], a[_ngcontent-%COMP%]   *[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:link, a[_ngcontent-%COMP%]:link   *[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:visited, a[_ngcontent-%COMP%]:visited   *[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%]:active, a[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%]:active   *[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\n  line-height: 1.5em;\n}\nh1[_ngcontent-%COMP%] {\n  font-size: 4em;\n  font-weight: lighter;\n  margin: 0.7em 0;\n}\nh2[_ngcontent-%COMP%] {\n  font-size: 3em;\n  font-weight: lighter;\n  margin: 0.8em 0;\n}\nh3[_ngcontent-%COMP%] {\n  font-size: 2.5em;\n  font-weight: lighter;\n  margin: 0.9em 0;\n}\nh4[_ngcontent-%COMP%] {\n  font-size: 2em;\n  font-weight: lighter;\n  margin: 1em 0;\n}\nh5[_ngcontent-%COMP%] {\n  margin: 0.5em 0;\n  font-size: 1.2em;\n  font-weight: normal;\n}\nh6[_ngcontent-%COMP%] {\n  margin: 1em 0 1em 1.4em;\n  font-size: 1em;\n  font-weight: bold;\n}\ninput[type=checkbox][_ngcontent-%COMP%], input[type=radio][_ngcontent-%COMP%] {\n  font-size: 1em;\n  cursor: pointer;\n  height: 1.2em;\n  width: 1.2em;\n  margin: 0 0.3em;\n  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.2), -2px -2px 3px white, inset 1px 1px 2px rgba(0, 0, 0, 0.2), inset -1px -1px 2px white;\n  border: 0.15em solid #f2f3f7;\n  vertical-align: text-bottom;\n  transition-property: background, box-shadow;\n  transition-duration: 0.2s;\n}\ninput[type=checkbox][_ngcontent-%COMP%]:active, input[type=radio][_ngcontent-%COMP%]:active {\n  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.2), -2px -2px 3px white, inset 1px 1px 2px rgba(0, 0, 0, 0.2), inset -1px -1px 2px white, inset 0 0.1em 0.25em rgba(0, 0, 0, 0.2);\n}\ninput[type=checkbox][_ngcontent-%COMP%]:checked, input[type=radio][_ngcontent-%COMP%]:checked {\n  border-width: 0.1em;\n  border-color: #115fe2;\n  background-color: #367bf0;\n}\ninput[type=checkbox][_ngcontent-%COMP%] {\n  border-radius: 25%;\n}\ninput[type=checkbox][_ngcontent-%COMP%]:checked {\n  box-shadow: 0 0 0.5em rgba(54, 123, 240, 0.7), inset 0 -0.1em 0 rgba(0, 0, 0, 0.2), inset 0 0.1em 0.1em rgba(255, 255, 255, 0.2);\n}\ninput[type=radio][_ngcontent-%COMP%] {\n  border-radius: 100%;\n}\ninput[type=radio][_ngcontent-%COMP%]:checked {\n  box-shadow: 0 0 0.5em rgba(54, 123, 240, 0.7);\n  box-shadow: 0 0 0.5em rgba(54, 123, 240, 0.7), inset 0 0.12em 0.1em rgba(255, 255, 255, 0.25);\n  border-bottom-width: 0.15em;\n}\n.checktext[_ngcontent-%COMP%] {\n  width: auto;\n  margin: 0.5em;\n}\n.checktext[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  display: none;\n}\n.checktext[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]    + span[_ngcontent-%COMP%] {\n  font-weight: bold;\n  padding: 1em;\n  transition-delay: 0s;\n}\n.checktext[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + span[_ngcontent-%COMP%] {\n  padding: 1em;\n}\n.switch[_ngcontent-%COMP%] {\n  height: 2rem;\n  width: 8rem;\n  padding: 0;\n  position: relative;\n}\n.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  display: none;\n}\n.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]    + div[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  border-radius: 999px;\n  background: transparent;\n  transition-property: box-shadow, background-color;\n  transition-duration: 0.2s;\n  transition-delay: 0.2s;\n  box-shadow: 3px 3px 2px -2px rgba(0, 0, 0, 0.1), inset 2px 2px 2px 1px rgba(0, 0, 0, 0.1), inset -2px -2px 1px white;\n}\n.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]    + div[_ngcontent-%COMP%]::before {\n  content: \"\";\n  display: block;\n  height: calc(2rem + 4px);\n  width: calc(2rem + 4px);\n  border-radius: 100%;\n  border: solid white 3px;\n  background: #367bf0;\n  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2), inset 0 -1px 3px rgba(0, 0, 0, 0.1);\n  transform: translate(0, -6px);\n  transition: transform 0.2s;\n}\n.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + div[_ngcontent-%COMP%] {\n  background: #367bf0;\n  box-shadow: 0 0 0.5em rgba(54, 123, 240, 0.7), inset 0 2px 2px 2px rgba(0, 0, 0, 0.3), inset 0 0 transparent;\n}\n.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + div[_ngcontent-%COMP%]::before {\n  transform: translate(6rem, -6px);\n}\nhr[_ngcontent-%COMP%] {\n  width: 72%;\n  height: 8px;\n  float: right;\n  border: 0;\n}\ncode[_ngcontent-%COMP%], pre[_ngcontent-%COMP%] {\n  padding: 0.5em 1em;\n  border-radius: 4px;\n  overflow: auto;\n  box-shadow: 0 5px 30px 0 rgba(0, 0, 0, 0.05);\n}\ncode[_ngcontent-%COMP%] {\n  background: #e6e6e6;\n}\npre[_ngcontent-%COMP%] {\n  background: white;\n  margin: 4em 0;\n}\ncode[_ngcontent-%COMP%], code[_ngcontent-%COMP%]   *[_ngcontent-%COMP%], pre[_ngcontent-%COMP%], pre[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  line-height: 2em;\n  cursor: auto;\n  user-select: text;\n  -webkit-touch-callout: text;\n  -webkit-user-select: text;\n  -khtml-user-select: text;\n  -moz-user-select: text;\n  -ms-user-select: text;\n}\nblockquote[_ngcontent-%COMP%] {\n  background-color: white;\n  padding: 0.5em 1em;\n  border-radius: 4px;\n  box-shadow: 0 5px 30px 0 rgba(0, 0, 0, 0.05);\n  border-left: 6px solid #367bf0;\n}\n.olga-container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0px;\n  bottom: 0px;\n  left: 0px;\n  right: 0px;\n  width: 100%;\n  height: 100%;\n}\n.fenbutton[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 80px;\n  position: absolute;\n  right: 10px;\n  bottom: 1%;\n}\napp-game-score-ux[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 1px;\n}\ncanvas-chessboard[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 1px;\n  left: 1px;\n  border: 2px black solid;\n  border-radius: 1px;\n}\napp-gamescore-settings[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 4px;\n  bottom: 2%;\n  height: 10%;\n}\nolga-controls[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 1px;\n  bottom: 8%;\n  height: 128px;\n  width: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMuc2NzcyIsInNyYy9hc3NldHMvc2Nzcy9tb2R1bGVzL19mb250cy5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOEVBQUE7QUNBQTtFQUNJLHFCQUFBO0VBQ0EscUZBQUE7RUFFQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNDSjtBREVBO0VBQ0kscUJBQUE7RUFDQSwyRkFBQTtFQUVBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0RKO0FESUE7RUFDRSwrQkFBQTtFQUNBLHVHQUFBO0VBRUEsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDSEY7QURNQTtFQUNFLCtCQUFBO0VBQ0EsK0ZBQUE7RUFFQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNMRjtBRmNBLCtFQUFBO0FBTUEsK0VBQUE7QUFNQSwrRUFBQTtBQU1BLCtFQUFBO0FBS0EsZ0ZBQUE7QUFLQSwrRUFBQTtBQUtBLHlFQUFBO0FBa0JBO0VBQ0UsbUJBQUE7RUFDQSxtQkFBQTtFQUVBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUV6REY7QUY0REE7O0VBRUUsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7QUV6REY7QUY0REE7O0VBRUUsWUFBQTtFQUNBLGlCQUFBO0FFekRGO0FGNERBO0VBQ0Usc0JBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSwyQkFBQTtFQUNBLHlCQUFBO0VBQ0Esd0JBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0Esd0JBQUE7RUFDQSxtREFBQTtFQUNBLHdEQUFBO0VBQ0EsMkJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUV6REY7QUY0REE7O0VBRUUsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsMkJBQUE7RUFDQSx5QkFBQTtFQUNBLHdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtBRXpERjtBRjREQTs7RUFFRSx5QkE1RFM7RUE2RFQsY0E1RFM7RUE2RFQsU0FBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUV6REY7QUY0REE7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBQ0UsaUVBQUE7QUV6Q0Y7QUY0Q0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBR0UsbUJBQUE7RUFDQSxtQkE3RVM7QUVrRFg7QUY4QkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBQ0UsbUJBQUE7RUFDQSw2R0FBQTtFQUVBLG1CQUFBO0FFVEY7QUZZQTtFQUVFLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBN0ZTO0FFbUZYO0FGYUE7Ozs7O0VBS0UsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUVWRjtBRmFBOzs7Ozs7Ozs7Ozs7OztFQWNFLFNBQUE7RUFDQSxtQkExSFM7RUEySFQsY0ExSFM7RUEySFQsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLDJCQUFBO0VBQ0EseUJBQUE7RUFDQSx3QkFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSwyQkFBQTtBRVZGO0FGcUJBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7QUVuQkY7QUZzQkE7RUFHRSxlQUFBO0VBQ0EsMGZBQUE7RUFFQSxzQkFBQTtFQUNBLGtCQUFBO0FFdEJGO0FGeUJBOztFQUVFLFVBQUE7RUFDQSx3QkFBQTtFQUNBLGNBQUE7QUV0QkY7QUZ5QkE7O0VBRUUsWUFBQTtBRXRCRjtBRnlCQTs7RUFFRSxVQUFBO0VBQ0EsNEJBQUE7RUFBQSx3QkFBQTtFQUNBLGNBQUE7QUV0QkY7QUZ5QkE7O0VBRUUsWUFBQTtBRXRCRjtBRnlCQTs7OztFQUlFLGFBQUE7QUV0QkY7QUZ5QkE7Ozs7RUFNRSxTQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGlEQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtBRXhCRjtBRjBCRTs7Ozs7OztFQUlFLG9CQUFBO0VBQ0EseUJBQUE7QUVyQko7QUZ5QmE7Ozs7RUFNUCxZQUFBO0VBQ0EsaUJBQUE7RUFDQSw2Q0FBQTtFQUNBLDZEQUxZO0VBTVoseUlBQUE7RUFHQSw4QkFBQTtFQUNBLDhDQUFBO0FFM0JOO0FGNkJNOzs7Ozs7O0VBRUUsNkRBZFU7RUFlVixrQkFBQTtFQUNBLG9GQUFBO0FFdEJSO0FGRWE7Ozs7RUFNUCxZQUFBO0VBQ0EsaUJBQUE7RUFDQSw2Q0FBQTtFQUNBLDZEQUxZO0VBTVosMElBQUE7RUFHQSw4QkFBQTtFQUNBLDhDQUFBO0FFSE47QUZLTTs7Ozs7OztFQUVFLDZEQWRVO0VBZVYsa0JBQUE7RUFDQSxvRkFBQTtBRUVSO0FGdEJhOzs7O0VBTVAsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsNkNBQUE7RUFDQSw2REFMWTtFQU1aLDBJQUFBO0VBR0EsOEJBQUE7RUFDQSw4Q0FBQTtBRXFCTjtBRm5CTTs7Ozs7OztFQUVFLDZEQWRVO0VBZVYsa0JBQUE7RUFDQSxvRkFBQTtBRTBCUjtBRm5CQTtFQU1FLHFCQUFBO0VBQ0EsaUJBQUE7QUVpQkY7QUZ2QkU7RUFFRSxlQUFBO0FFd0JKO0FGaEJFO0VBU0UsaUJBQUE7RUFDQSxjQTNWRztFQTRWSCxpQkFBQTtFQUNBLHFCQUFBO0FFV0o7QUZuQkk7RUFFRSxlQUFBO0FFb0JOO0FGVkE7Ozs7OztFQU1FLGtCQUFBO0FFYUY7QUZWQTtFQUNFLGNBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7QUVhRjtBRlZBO0VBQ0UsY0FBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtBRWFGO0FGVkE7RUFDRSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtBRWFGO0FGVkE7RUFDRSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSxhQUFBO0FFYUY7QUZWQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FFYUY7QUZWQTtFQUNFLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FFYUY7QUZWQTs7RUFLRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdJQVBjO0VBUWQsNEJBQUE7RUFDQSwyQkFBQTtFQUNBLDJDQUFBO0VBQ0EseUJBQUE7QUVVRjtBRlJFOztFQUNFLHlLQUFBO0FFV0o7QUZSRTs7RUFDRSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBcmFHO0FFZ2JQO0FGUEE7RUFDRSxrQkFBQTtBRVVGO0FGUkU7RUFDRSxnSUFBQTtBRVVKO0FGTEE7RUFDRSxtQkFBQTtBRVFGO0FGTkU7RUFDRSw2Q0FyV1U7RUFzV1YsNkZBQUE7RUFDQSwyQkFBQTtBRVFKO0FGSkE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtBRU9GO0FGTEU7RUFDRSxhQUFBO0FFT0o7QUZMSTtFQUdFLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0FFS047QUZGSTtFQUdFLFlBQUE7QUVFTjtBRkdBO0VBTUUsWUFMVTtFQU1WLFdBTFM7RUFNVCxVQUFBO0VBQ0Esa0JBQUE7QUVMRjtBRk9FO0VBQ0UsYUFBQTtBRUxKO0FGT0k7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQ0EsdUJBQUE7RUFDQSxpREFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxvSEFBQTtBRUxOO0FGU007RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLHdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBcGZEO0VBcWZDLDhFQUFBO0VBRUEsNkJBQUE7RUFDQSwwQkFBQTtBRVJSO0FGWUk7RUFDRSxtQkE3ZkM7RUE4ZkQsNEdBQUE7QUVWTjtBRmFNO0VBQ0UsZ0NBQUE7QUVYUjtBRmlCQTtFQUVFLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7QUVmRjtBRmtCQTs7RUFFRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLDRDQUFBO0FFZkY7QUZrQkE7RUFDRSxtQkFBQTtBRWZGO0FGa0JBO0VBQ0UsaUJBQUE7RUFDQSxhQUFBO0FFZkY7QUZvQkU7OztFQUVFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSwyQkFBQTtFQUNBLHlCQUFBO0VBQ0Esd0JBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0FFaEJKO0FGb0JBO0VBQ0UsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNENBQUE7RUFDQSw4QkFBQTtBRWpCRjtBQTdpQkE7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQWdqQkY7QUE3aUJBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FBZ2pCRjtBQTdpQkE7RUFDRyxrQkFBQTtFQUNBLFVBQUE7QUFnakJIO0FBNWlCQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FBK2lCRjtBQTVpQkE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQStpQkY7QUE1aUJBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0FBK2lCRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cblxuQGltcG9ydCBcIi4vYXNzZXRzL3Njc3MvbW9kdWxlcy9fZm9udHMuc2Nzc1wiO1xuJGdhbWVzY29yZS1mYW1pbHk6IFwiRmlndXJpbmVTeW1ib2xUMVwiO1xuJGdhbWVzY29yZS1oaWdobGlnaHQ6ICM1ODU4NThmZjtcbiRnYW1lc2NvcmUtZm9yZWdyb3VuZDogd2hpdGU7XG5cbiRyZWQ6ICNlNDMwMzA7XG4kZ3JlZW46ICMxOWExODc7XG4kbGlnaHQtYmx1ZTogIzAwZmZmZmZmO1xuJGJsdWU6ICMzNjdiZjA7XG4kZGFyay1ibHVlOiAjMjY1YWIxO1xuJG1hcm9vbjogI2I4MTc0YztcbiRwdXJwbGU6ICM4YzQyYWI7XG5cbi8vIE1haW4gT0xHQSBDb2xvciBFbGVtZW50IFZhcmlhYmxlc1xuJHRleHRDb2xvcjogdmFyKC0tdGV4dENvbG9yKTsgLy8gTWFpbiBUZXh0IENvbG9yXG4kdGV4dENvbG9yQXR0ZW50aW9uOiB2YXIoLS10ZXh0Q29sb3JBdHRlbnRpb24pOyAvLyBBdHRlbnRpb24gdGV4dFxuJHRleHRDb2xvclJlbW92ZTogdmFyKC0tdGV4dENvbG9yUmVtb3ZlKTsgLy8gUmVtb3ZlL0RlbGV0ZS9DbG9zZVxuJHRleHRDb2xvckFkZDogdmFyKC0tdGV4dENvbG9yQWRkKTsgLy8gQWRkL0NyZWF0ZS9PcGVuXG4kdGV4dENvbG9yQWN0aXZlOiB2YXIoLS10ZXh0Q29sb3JBY3RpdmUpOyAvLyBBZGQvQ3JlYXRlL09wZW5cbiRiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kKTsgLy8gTWFpbiBiYWNrZ3JvdW5kIENvbG9yXG4kYmdDb250YWluZXI6IHZhcigtLWJnQ29udGFpbmVyKTsgLy8gYmFja2dyb3VuZCBvZiBDb250YWluZXJzXG4kYmdNZW51OiB2YXIoLS1iZ01lbnUpOyAvLyBiYWNrZ3JvdW5kIG9mIE1lbnVzXG4kYmdJdGVtOiB2YXIoLS1iZ0l0ZW0pOyAvLyBiYWNrZ3JvdW5kIG9mIEl0ZW1zXG5cbi8vIENvbnRleHQgTWVudVxuJGJnQ29udGV4dDogdmFyKC0tYmdDb250ZXh0KTsgLy8gYmFja2dyb3VuZCBvZiBDb250ZXh0IE1lbnVcbiR0ZXh0Q29sb3JDb250ZXh0OiB2YXIoLS10ZXh0Q29sb3JDb250ZXh0KTsgLy8gdGV4dCBjb2xvciBDb250ZXh0IE1lbnVcbiRib3JkZXJDb250ZXh0OiB2YXIoLS1ib3JkZXJDb250ZXh0KTsgLy8gYm9yZGVyIENvbnRleHQgTWVudVxuJG92ZXJsYXlDb250ZXh0QmFja2dyb3VuZDogdmFyKFxuICAtLW92ZXJsYXlDb250ZXh0QmFja2dyb3VuZFxuKTsgLy8gQ29udGV4dCBNZW51IE92ZXJsYXkgYmFja2dyb3VuZCBtYWluXG4kb3ZlcmxheUNvbnRleHRCYWNrZ3JvdW5kR3JhZGllbnQ6IHZhcihcbiAgLS1vdmVybGF5Q29udGV4dEJhY2tncm91bmRHcmFkaWVudFxuKTsgLy8gQ29udGV4dCBNZW51IGJhY2tncm91bmQgZ3JhZGllbnRcblxuJGl0ZW06IHZhcigtLWl0ZW0pO1xuJGl0ZW0tY29udHJhc3Q6IHZhcigtLWl0ZW0tY29udHJhc3QpO1xuJGl0ZW0tYmc6IHZhcigtLWl0ZW0tYmcpO1xuXG5cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgQ29udGFpbmVyIFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4kZ3NUZXh0Q29sb3I6IHZhcigtLWdzVGV4dENvbG9yKTsgLy8gVGV4dCBjb2xvciBmb3IgZ2FtZSBzY29yZVxuJGdzQmFja2dyb3VuZDogdmFyKC0tZ3NCYWNrZ3JvdW5kKTsgLy8gYmFja2dyb3VuZCBvZiBDb250YWluZXJzXG4kZ3NCb3JkZXI6IHZhcigtLWdzQm9yZGVyKTsgLy8gYmFja2dyb3VuZCBvZiBNZW51c1xuJGdzVGV4dFNpemU6IHZhcigtLWdzVGV4dFNpemUpOyAvLyBiYWNrZ3JvdW5kIG9mIE1lbnVzXG5cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgQ29udGFpbmVyIFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4kZ3NUZXh0Q29sb3JNVzogdmFyKC0tZ3NUZXh0Q29sb3JNVyk7IC8vIFRleHQgY29sb3IgZm9yIGdhbWUgc2NvcmVcbiRnc0JhY2tncm91bmRNVzogdmFyKC0tZ3NCYWNrZ3JvdW5kTVcpOyAvLyBiYWNrZ3JvdW5kIG9mIENvbnRhaW5lcnNcbiRnc0JvcmRlck1XOiB2YXIoLS1nc0JvcmRlck1XKTsgLy8gYmFja2dyb3VuZCBvZiBNZW51c1xuJGdzVGV4dFNpemVNVzogdmFyKC0tZ3NUZXh0U2l6ZU1XKTsgLy8gYmFja2dyb3VuZCBvZiBNZW51c1xuXG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIENvbnRhaW5lciBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuJGdzVGV4dENvbG9yTUI6IHZhcigtLWdzVGV4dENvbG9yTUIpOyAvLyBUZXh0IGNvbG9yIGZvciBnYW1lIHNjb3JlXG4kZ3NCYWNrZ3JvdW5kTUI6IHZhcigtLWdzQmFja2dyb3VuZE1CKTsgLy8gYmFja2dyb3VuZCBvZiBDb250YWluZXJzXG4kZ3NCb3JkZXJNQjogdmFyKC0tZ3NCb3JkZXJNQik7IC8vIGJhY2tncm91bmQgb2YgTWVudXNcbiRnc1RleHRTaXplTUI6IHZhcigtLWdzVGV4dFNpemVNQik7IC8vIGJhY2tncm91bmQgb2YgTWVudXNcblxuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBIaWdobGlnaHQgVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiRnc1RleHRDb2xvckhHOiB2YXIoLS1nc1RleHRDb2xvckhHKTsgLy8gVGV4dCBjb2xvciBmb3IgaGlnaGxpZ2h0XG4kZ3NCYWNrZ3JvdW5kSEc6IHZhcigtLWdzQmFja2dyb3VuZEhHKTsgLy8gYmFja2dyb3VuZCBmb3IgaGlnaGxpZ2h0XG4kZ3NCb3JkZXJIRzogdmFyKC0tZ3NCb3JkZXJIRyk7IC8vIGJvcmRlciBmb3IgaGlnaGxpZ2h0XG5cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgQW5ub3RhdGlvbiBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuJGdzVGV4dENvbG9yQU46IHZhcigtLWdzVGV4dENvbG9yQU4pOyAvLyBUZXh0IGNvbG9yIGZvciBoaWdobGlnaHRcbiRnc0JhY2tncm91bmRBTjogdmFyKC0tZ3NCYWNrZ3JvdW5kQU4pOyAvLyBiYWNrZ3JvdW5kIGZvciBoaWdobGlnaHRcbiRnc0JvcmRlckFOOiB2YXIoLS1nc0JvcmRlckFOKTsgLy8gYm9yZGVyIGZvciBoaWdobGlnaHRcblxuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBWYXJpYXRpb24gVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiRnc1RleHRDb2xvclZBOiB2YXIoLS1nc1RleHRDb2xvclZBKTsgLy8gVGV4dCBjb2xvciBmb3IgaGlnaGxpZ2h0XG4kZ3NCYWNrZ3JvdW5kVkE6IHZhcigtLWdzQmFja2dyb3VuZFZBKTsgLy8gYmFja2dyb3VuZCBmb3IgaGlnaGxpZ2h0XG4kZ3NCb3JkZXJWQTogdmFyKC0tZ3NCb3JkZXJWQSk7IC8vIGJvcmRlciBmb3IgaGlnaGxpZ2h0XG5cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgUGx5IFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4kZ3NUZXh0Q29sb3JQQzogdmFyKC0tZ3NUZXh0Q29sb3JQQyk7IC8vIFRleHQgY29sb3IgZm9yIGdhbWUgc2NvcmUgcGx5XG4kZ3NCYWNrZ3JvdW5kUEM6IHZhcigtLWdzQmFja2dyb3VuZFBDKTsgLy8gYmFja2dyb3VuZCBmb3IgZ2FtZSBzY29yZSBwbHlcbiRnc0JvcmRlclBDOiB2YXIoLS1nc0JvcmRlclBDKTsgLy8gYm9yZGVyIGZvciBnYW1lIHNjb3JlIHBseVxuXG4vLyBCb2FyZCBjb2xvcnMgcmVmbGVjdGVkIG91dFxuJGJvYXJkQkdEYXJrOiB2YXIoLS1ib2FyZEJHRGFyayk7IC8vIGJvcmRlciBmb3IgaGlnaGxpZ2h0XG5cbi8vIEdlbmVyYWwgc3R1ZmZcbiR0ZXh0LWNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcbiRiZy1vdXRlcjogdmFyKC0tYmctb3V0ZXIpO1xuJGJnLWlubmVyOiB2YXIoLS1iZy1pbm5lcik7XG5cbiRiZy1jb2xvcjogI2YyZjNmNztcbiRmZy1jb2xvcjogIzM4M2E0MTtcblxuJGdsb3ctc2hhZG93OiAwIDAgMC41ZW0gdHJhbnNwYXJlbnRpemUoJGJsdWUsIDAuMyk7XG5cbjpyb290IHtcbiAgLS1iZy1jb2xvcjogI3skYmctY29sb3J9O1xuICAtLWZnLWNvbG9yOiAjeyRmZy1jb2xvcn07XG5cbiAgLS1yZWQ6ICN7JHJlZH07XG4gIC0tZ3JlZW46ICN7JGdyZWVufTtcbiAgLS1ibHVlOiAjeyRibHVlfTtcbiAgLS1kYXJrLWJsdWU6ICN7JGRhcmstYmx1ZX07XG4gIC0tbWFyb29uOiAjeyRtYXJvb259O1xuICAtLXB1cnBsZTogI3skcHVycGxlfTtcbn1cblxuOjotbW96LWZvY3VzLWlubmVyLFxuOi1tb3otZm9jdXNyaW5nIHtcbiAgYm9yZGVyOiAwO1xuICBjb2xvcjogdHJhbnNwYXJlbnQ7XG4gIHRleHQtc2hhZG93OiAwIDAgMCAkZmctY29sb3I7XG59XG5cbjo6c2VsZWN0aW9uLFxuOjotbW96LXNlbGVjdGlvbiB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZDogYmxhY2s7XG59XG5cbioge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBvdXRsaW5lOiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKSAhaW1wb3J0YW50O1xuICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XG4gIGN1cnNvcjogZGVmYXVsdDtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG59XG5cbi5zZWxlY3RhYmxlLFxuLnNlbGVjdGFibGUgKiB7XG4gIGN1cnNvcjogYXV0bztcbiAgdXNlci1zZWxlY3Q6IHRleHQ7XG4gIC13ZWJraXQtdG91Y2gtY2FsbG91dDogdGV4dDtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogdGV4dDtcbiAgLWtodG1sLXVzZXItc2VsZWN0OiB0ZXh0O1xuICAtbW96LXVzZXItc2VsZWN0OiB0ZXh0O1xuICAtbXMtdXNlci1zZWxlY3Q6IHRleHQ7XG59XG5cbmh0bWwsXG5ib2R5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJnLWNvbG9yO1xuICBjb2xvcjogJGZnLWNvbG9yO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGZvbnQtc2l6ZTogMTBwdDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdzogYXV0bztcbn1cblxuLndpdGgtc2hhZG93IHtcbiAgYm94LXNoYWRvdzogNnB4IDZweCAxMHB4IHRyYW5zcGFyZW50aXplKGJsYWNrLCAwLjkpLCAtNnB4IC02cHggMTBweCB3aGl0ZTtcbn1cblxuLm91dHNldCB7XG4gIEBleHRlbmQgLndpdGgtc2hhZG93O1xuXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQ6ICRiZy1jb2xvcjtcbn1cblxuLmluc2V0IHtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm94LXNoYWRvdzogMCAwIHRyYW5zcGFyZW50LCAwIDAgdHJhbnNwYXJlbnQsXG4gICAgaW5zZXQgM3B4IDNweCA1cHggdHJhbnNwYXJlbnRpemUoYmxhY2ssIDAuOSksIGluc2V0IC0zcHggLTNweCA1cHggd2hpdGU7XG4gIGJhY2tncm91bmQ6IGxpZ2h0ZW4oJGJnLWNvbG9yLCAyJSk7XG59XG5cbi5wYXBlciB7XG4gIEBleHRlbmQgLm91dHNldDtcbiAgcGFkZGluZzogMTBweCAyMHB4IDIwcHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIG1pbi1oZWlnaHQ6IDEwMHB4O1xuICBmb250LXNpemU6IDEuMmVtO1xuICBiYWNrZ3JvdW5kOiAkYmctY29sb3I7XG59XG5cbnNlY3Rpb24sXG5hcnRpY2xlLFxuLnNlY3Rpb24sXG4uYXJ0aWNsZSxcbi5wYXBlciB7XG4gIGxpbmUtaGVpZ2h0OiAyZW07XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgd29yZC1icmVhazogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMmVtO1xufVxuXG5pbnB1dFt0eXBlPVwidGV4dFwiXSxcbmlucHV0W3R5cGU9XCJzZWFyY2hcIl0sXG5pbnB1dFt0eXBlPVwidGVsXCJdLFxuaW5wdXRbdHlwZT1cInVybFwiXSxcbmlucHV0W3R5cGU9XCJlbWFpbFwiXSxcbmlucHV0W3R5cGU9XCJwYXNzd29yZFwiXSxcbmlucHV0W3R5cGU9XCJkYXRlXCJdLFxuaW5wdXRbdHlwZT1cIm1vbnRoXCJdLFxuaW5wdXRbdHlwZT1cIndlZWtcIl0sXG5pbnB1dFt0eXBlPVwidGltZVwiXSxcbmlucHV0W3R5cGU9XCJudW1iZXJcIl0sXG5pbnB1dFt0eXBlPVwiY29sb3JcIl0sXG5zZWxlY3QsXG50ZXh0YXJlYSB7XG4gIGJvcmRlcjogMDtcbiAgYmFja2dyb3VuZDogJGJnLWNvbG9yO1xuICBjb2xvcjogJGZnLWNvbG9yO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBwYWRkaW5nOiAwIDEuMjVlbTtcbiAgbGluZS1oZWlnaHQ6IDEuMjVlbTtcbiAgaGVpZ2h0OiAzLjVlbTtcbiAgbWFyZ2luOiAxMHB4IDA7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xuICBjdXJzb3I6IHRleHQ7XG4gIHVzZXItc2VsZWN0OiB0ZXh0O1xuICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IHRleHQ7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IHRleHQ7XG4gIC1raHRtbC11c2VyLXNlbGVjdDogdGV4dDtcbiAgLW1vei11c2VyLXNlbGVjdDogdGV4dDtcbiAgLW1zLXVzZXItc2VsZWN0OiB0ZXh0O1xuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuMnM7XG5cbiAgJjpub3Qoc2VsZWN0KSB7XG4gICAgQGV4dGVuZCAuaW5zZXQ7XG5cbiAgICAmOmZvY3VzIHtcbiAgICAgIEBleHRlbmQgLm91dHNldDtcbiAgICB9XG4gIH1cbn1cblxudGV4dGFyZWEge1xuICBoZWlnaHQ6IDM1MHB4O1xuICBwYWRkaW5nOiAxLjI1ZW07XG59XG5cbnNlbGVjdCB7XG4gIEBleHRlbmQgLm91dHNldDtcblxuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQ6IHVybChkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUIyWlhKemFXOXVQU0l4TGpFaUlIWnBaWGRDYjNnOUlqQWdNQ0F4T1NBeE9TSWdlRzFzYm5NOUltaDBkSEE2THk5M2QzY3Vkek11YjNKbkx6SXdNREF2YzNabklqNDhaeUIwY21GdWMyWnZjbTA5SW0xaGRISnBlQ2d1TURNMElEQWdNQ0F1TURNMElDMDJMamdnTVM0M1pTMDFLU0lnYzNSNWJHVTlJbVpwYkd3Nkl6ZGlOMlU0WXlJK1BIQmhkR2dnWkQwaWJUUTRNQ0F6TkRRdE1qRXhMVEl4TW1NdE1UWXRNVFl0TkRFdE1UWXROVGNnTUMweE5pQXhOaTB4TmlBME1pQXdJRFUzYkRJek9DQXlNemxqT0M0MElEZ3VOU0F5TUNBeE1pQXpNU0F4TWlBeE1TQXdMalUySURJeUxUTXVNaUF6TVMweE1td3lNemd0TWpNNVl6RTJMVEUySURFMkxUUXlJREF0TlRkekxUUXhMVEUyTFRVM0lEQjZJaUJ6ZEhsc1pUMGlabWxzYkRvak4ySTNaVGhqSWk4K1BDOW5Qand2YzNablBnbz0pXG4gICAgbm8tcmVwZWF0IHJpZ2h0IDFlbSBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogMS4yZW07XG4gIHBhZGRpbmctcmlnaHQ6IDNlbTtcbn1cblxuaW5wdXQ6OnBsYWNlaG9sZGVyLFxudGV4dGFyZWE6OnBsYWNlaG9sZGVyIHtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzO1xuICBjb2xvcjogaW5oZXJpdDtcbn1cblxuaW5wdXQ6Zm9jdXM6OnBsYWNlaG9sZGVyLFxudGV4dGFyZWE6Zm9jdXM6OnBsYWNlaG9sZGVyIHtcbiAgb3BhY2l0eTogMC4yO1xufVxuXG5pbnB1dDotbXMtaW5wdXQtcGxhY2Vob2xkZXIsXG50ZXh0YXJlYTotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICBvcGFjaXR5OiAxO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnM7XG4gIGNvbG9yOiBpbmhlcml0O1xufVxuXG5pbnB1dDpmb2N1czotbXMtaW5wdXQtcGxhY2Vob2xkZXIsXG50ZXh0YXJlYTpmb2N1czotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICBvcGFjaXR5OiAwLjI7XG59XG5cbmlucHV0W3R5cGU9XCJzZWFyY2hcIl06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24sXG5pbnB1dFt0eXBlPVwic2VhcmNoXCJdOjotd2Via2l0LXNlYXJjaC1jYW5jZWwtYnV0dG9uLFxuaW5wdXRbdHlwZT1cInNlYXJjaFwiXTo6LXdlYmtpdC1zZWFyY2gtcmVzdWx0cy1idXR0b24sXG5pbnB1dFt0eXBlPVwic2VhcmNoXCJdOjotd2Via2l0LXNlYXJjaC1yZXN1bHRzLWRlY29yYXRpb24ge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5idXR0b24sXG5pbnB1dFt0eXBlPVwiYnV0dG9uXCJdLFxuaW5wdXRbdHlwZT1cInN1Ym1pdFwiXSxcbmlucHV0W3R5cGU9XCJyZXNldFwiXSB7XG4gIEBleHRlbmQgLm91dHNldDtcblxuICBib3JkZXI6IDA7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBwYWRkaW5nOiAxMHB4IDA7XG4gIHdpZHRoOiA4ZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogaW5oZXJpdDtcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGJhY2tncm91bmQtY29sb3IsIGJveC1zaGFkb3c7XG4gIHRyYW5zaXRpb24tZGVsYXk6IDAuMnM7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMnM7XG5cbiAgJi5hY3RpdmUsXG4gICY6YWN0aXZlIHtcbiAgICBAZXh0ZW5kIC5pbnNldDtcblxuICAgIHRyYW5zaXRpb24tZGVsYXk6IDBzO1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMXM7XG4gIH1cblxuICBAZWFjaCAkbmFtZSwgJGNvbG9yIGluIChcInJlZFwiOiAkcmVkLCBcImdyZWVuXCI6ICRncmVlbiwgXCJibHVlXCI6ICRibHVlKSB7XG4gICAgQGF0LXJvb3QgLiN7JG5hbWV9LWJ1dHRvbixcbiAgICAgICYuI3skbmFtZX0tYnV0dG9uIHtcbiAgICAgIEBleHRlbmQgYnV0dG9uO1xuXG4gICAgICAkX2JnLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAkY29sb3IgMzAlLCBsaWdodGVuKCRjb2xvciwgNiUpIDgwJSk7XG5cbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgdGV4dC1zaGFkb3c6IDAgMC4xZW0gMC4xZW0gdHJhbnNwYXJlbnRpemUoYmxhY2ssIDAuMyk7XG4gICAgICBiYWNrZ3JvdW5kOiAkX2JnLWltYWdlO1xuICAgICAgYm94LXNoYWRvdzogMCAwIDAuNWVtIHRyYW5zcGFyZW50aXplKCRjb2xvciwgMC4zKSwgMCAwIHRyYW5zcGFyZW50LFxuICAgICAgICBpbnNldCAwIC01cHggMCB0cmFuc3BhcmVudGl6ZShibGFjaywgMC45NSksXG4gICAgICAgIGluc2V0IDAgMnB4IDAgdHJhbnNwYXJlbnRpemUod2hpdGUsIDAuOCk7XG4gICAgICBib3JkZXItcmFkaXVzOiA2cHggNnB4IDhweCA4cHg7XG4gICAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBib3gtc2hhZG93LCBib3JkZXItcmFkaXVzO1xuXG4gICAgICAmLmFjdGl2ZSxcbiAgICAgICY6YWN0aXZlIHtcbiAgICAgICAgYmFja2dyb3VuZDogJF9iZy1pbWFnZTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgICBib3gtc2hhZG93OiAwIDAgdHJhbnNwYXJlbnQsIDAgMCB0cmFuc3BhcmVudCxcbiAgICAgICAgICBpbnNldCAwIDJweCA1cHggMnB4IHRyYW5zcGFyZW50aXplKGJsYWNrLCAwLjgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5sYWJlbCB7XG4gICYsXG4gICYgKiB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5cbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiAwLjU2ZW0gMDtcbn1cblxuYSB7XG4gICYsXG4gICY6bGluayxcbiAgJjp2aXNpdGVkLFxuICAmOmhvdmVyICY6YWN0aXZlIHtcbiAgICAmLFxuICAgICYgKiB7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6ICRibHVlO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxufVxuXG5oMSxcbmgyLFxuaDMsXG5oNCxcbmg1LFxuaDYge1xuICBsaW5lLWhlaWdodDogMS41ZW07XG59XG5cbmgxIHtcbiAgZm9udC1zaXplOiA0ZW07XG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuICBtYXJnaW46IDAuN2VtIDA7XG59XG5cbmgyIHtcbiAgZm9udC1zaXplOiAzZW07XG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuICBtYXJnaW46IDAuOGVtIDA7XG59XG5cbmgzIHtcbiAgZm9udC1zaXplOiAyLjVlbTtcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4gIG1hcmdpbjogMC45ZW0gMDtcbn1cblxuaDQge1xuICBmb250LXNpemU6IDJlbTtcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4gIG1hcmdpbjogMWVtIDA7XG59XG5cbmg1IHtcbiAgbWFyZ2luOiAwLjVlbSAwO1xuICBmb250LXNpemU6IDEuMmVtO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuXG5oNiB7XG4gIG1hcmdpbjogMWVtIDAgMWVtIDEuNGVtO1xuICBmb250LXNpemU6IDFlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbmlucHV0W3R5cGU9XCJjaGVja2JveFwiXSxcbmlucHV0W3R5cGU9XCJyYWRpb1wiXSB7XG4gICRfYm9yZGVyLXdpZHRoOiAwLjE1ZW07XG4gICRfYm94LXNoYWRvdzogMnB4IDJweCAzcHggdHJhbnNwYXJlbnRpemUoYmxhY2ssIDAuOCksIC0ycHggLTJweCAzcHggd2hpdGUsXG4gICAgaW5zZXQgMXB4IDFweCAycHggdHJhbnNwYXJlbnRpemUoYmxhY2ssIDAuOCksIGluc2V0IC0xcHggLTFweCAycHggd2hpdGU7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGhlaWdodDogMS4yZW07XG4gIHdpZHRoOiAxLjJlbTtcbiAgbWFyZ2luOiAwIDAuM2VtO1xuICBib3gtc2hhZG93OiAkX2JveC1zaGFkb3c7XG4gIGJvcmRlcjogJF9ib3JkZXItd2lkdGggc29saWQgJGJnLWNvbG9yO1xuICB2ZXJ0aWNhbC1hbGlnbjogdGV4dC1ib3R0b207XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGJhY2tncm91bmQsIGJveC1zaGFkb3c7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMnM7XG5cbiAgJjphY3RpdmUge1xuICAgIGJveC1zaGFkb3c6ICRfYm94LXNoYWRvdywgaW5zZXQgMCAwLjFlbSAwLjI1ZW0gdHJhbnNwYXJlbnRpemUoYmxhY2ssIDAuOCk7XG4gIH1cblxuICAmOmNoZWNrZWQge1xuICAgIGJvcmRlci13aWR0aDogMC4xZW07XG4gICAgYm9yZGVyLWNvbG9yOiBkYXJrZW4oJGJsdWUsIDEwJSk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJsdWU7XG4gIH1cbn1cblxuaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdIHtcbiAgYm9yZGVyLXJhZGl1czogMjUlO1xuXG4gICY6Y2hlY2tlZCB7XG4gICAgYm94LXNoYWRvdzogJGdsb3ctc2hhZG93LCBpbnNldCAwIC0wLjFlbSAwIHRyYW5zcGFyZW50aXplKGJsYWNrLCAwLjgpLFxuICAgICAgaW5zZXQgMCAwLjFlbSAwLjFlbSB0cmFuc3BhcmVudGl6ZSh3aGl0ZSwgMC44KTtcbiAgfVxufVxuXG5pbnB1dFt0eXBlPVwicmFkaW9cIl0ge1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuXG4gICY6Y2hlY2tlZCB7XG4gICAgYm94LXNoYWRvdzogJGdsb3ctc2hhZG93O1xuICAgIGJveC1zaGFkb3c6ICRnbG93LXNoYWRvdywgaW5zZXQgMCAwLjEyZW0gMC4xZW0gdHJhbnNwYXJlbnRpemUod2hpdGUsIDAuNzUpO1xuICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDAuMTVlbTtcbiAgfVxufVxuXG4uY2hlY2t0ZXh0IHtcbiAgd2lkdGg6IGF1dG87XG4gIG1hcmdpbjogMC41ZW07XG5cbiAgaW5wdXQge1xuICAgIGRpc3BsYXk6IG5vbmU7XG5cbiAgICArIHNwYW4ge1xuICAgICAgQGV4dGVuZCBidXR0b247XG5cbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgcGFkZGluZzogMWVtO1xuICAgICAgdHJhbnNpdGlvbi1kZWxheTogMHM7XG4gICAgfVxuXG4gICAgJjpjaGVja2VkICsgc3BhbiB7XG4gICAgICBAZXh0ZW5kIC5ibHVlLWJ1dHRvbjtcblxuICAgICAgcGFkZGluZzogMWVtO1xuICAgIH1cbiAgfVxufVxuXG4uc3dpdGNoIHtcbiAgJF9oZWlnaHQ6IDJyZW07XG4gICRfd2lkdGg6IDhyZW07XG4gICRfaGFuZGxlLXdpZHRoOiAkX2hlaWdodDtcbiAgJF9oYW5kbGUtdHJhbnNsYXRpb246ICRfd2lkdGggLSAkX2hhbmRsZS13aWR0aDtcblxuICBoZWlnaHQ6ICRfaGVpZ2h0O1xuICB3aWR0aDogJF93aWR0aDtcbiAgcGFkZGluZzogMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gIGlucHV0IHtcbiAgICBkaXNwbGF5OiBub25lO1xuXG4gICAgKyBkaXYge1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBib3JkZXItcmFkaXVzOiA5OTlweDtcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYm94LXNoYWRvdywgYmFja2dyb3VuZC1jb2xvcjtcbiAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMnM7XG4gICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjJzO1xuICAgICAgYm94LXNoYWRvdzogM3B4IDNweCAycHggLTJweCB0cmFuc3BhcmVudGl6ZShibGFjaywgMC45KSxcbiAgICAgICAgaW5zZXQgMnB4IDJweCAycHggMXB4IHRyYW5zcGFyZW50aXplKGJsYWNrLCAwLjkpLFxuICAgICAgICBpbnNldCAtMnB4IC0ycHggMXB4IHdoaXRlO1xuXG4gICAgICAmOjpiZWZvcmUge1xuICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgaGVpZ2h0OiBjYWxjKCN7JF9oYW5kbGUtd2lkdGh9ICsgNHB4KTtcbiAgICAgICAgd2lkdGg6IGNhbGMoI3skX2hhbmRsZS13aWR0aH0gKyA0cHgpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgICAgICBib3JkZXI6IHNvbGlkIHdoaXRlIDNweDtcbiAgICAgICAgYmFja2dyb3VuZDogJGJsdWU7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgM3B4IDEwcHggdHJhbnNwYXJlbnRpemUoYmxhY2ssIDAuOCksXG4gICAgICAgICAgaW5zZXQgMCAtMXB4IDNweCB0cmFuc3BhcmVudGl6ZShibGFjaywgMC45KTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTZweCk7XG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzO1xuICAgICAgfVxuICAgIH1cblxuICAgICY6Y2hlY2tlZCArIGRpdiB7XG4gICAgICBiYWNrZ3JvdW5kOiAkYmx1ZTtcbiAgICAgIGJveC1zaGFkb3c6ICRnbG93LXNoYWRvdywgaW5zZXQgMCAycHggMnB4IDJweCB0cmFuc3BhcmVudGl6ZShibGFjaywgMC43KSxcbiAgICAgICAgaW5zZXQgMCAwIHRyYW5zcGFyZW50O1xuXG4gICAgICAmOjpiZWZvcmUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgkX2hhbmRsZS10cmFuc2xhdGlvbiwgLTZweCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmhyIHtcbiAgQGV4dGVuZCAuaW5zZXQ7XG4gIHdpZHRoOiA3MiU7XG4gIGhlaWdodDogOHB4O1xuICBmbG9hdDogcmlnaHQ7XG4gIGJvcmRlcjogMDtcbn1cblxuY29kZSxcbnByZSB7XG4gIHBhZGRpbmc6IDAuNWVtIDFlbTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBvdmVyZmxvdzogYXV0bztcbiAgYm94LXNoYWRvdzogMCA1cHggMzBweCAwIHRyYW5zcGFyZW50aXplKGJsYWNrLCAwLjk1KTtcbn1cblxuY29kZSB7XG4gIGJhY2tncm91bmQ6ICNlNmU2ZTY7XG59XG5cbnByZSB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBtYXJnaW46IDRlbSAwO1xufVxuXG5jb2RlLFxucHJlIHtcbiAgJixcbiAgJiAqIHtcbiAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgICBsaW5lLWhlaWdodDogMmVtO1xuICAgIGN1cnNvcjogYXV0bztcbiAgICB1c2VyLXNlbGVjdDogdGV4dDtcbiAgICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IHRleHQ7XG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogdGV4dDtcbiAgICAta2h0bWwtdXNlci1zZWxlY3Q6IHRleHQ7XG4gICAgLW1vei11c2VyLXNlbGVjdDogdGV4dDtcbiAgICAtbXMtdXNlci1zZWxlY3Q6IHRleHQ7XG4gIH1cbn1cblxuYmxvY2txdW90ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAwLjVlbSAxZW07XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm94LXNoYWRvdzogMCA1cHggMzBweCAwIHRyYW5zcGFyZW50aXplKGJsYWNrLCAwLjk1KTtcbiAgYm9yZGVyLWxlZnQ6IDZweCBzb2xpZCAkYmx1ZTtcbn1cbiIsIkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnQ2F2ZWF0JztcbiAgICBzcmM6IHVybCgnLi4vLi4vZm9udHMvQm9sZC9DYXZlYXQtQm9sZC53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcbiAgICAgICAgdXJsKCcuLi8uLi9mb250cy9Cb2xkL0NhdmVhdC1Cb2xkLndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC1kaXNwbGF5OiBzd2FwO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ0NhdmVhdCc7XG4gICAgc3JjOiB1cmwoJy4uLy4uL2ZvbnRzL1JlZ3VsYXIvQ2F2ZWF0LVJlZ3VsYXIud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXG4gICAgICAgIHVybCgnLi4vLi4vZm9udHMvUmVndWxhci9DYXZlYXQtUmVndWxhci53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC1kaXNwbGF5OiBzd2FwO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdGaWd1cmluZVN5bWJvbFQxJztcbiAgc3JjOiB1cmwoJy4uLy4uL2ZvbnRzLzNyZCBQYXJ0eS9DaGVzc1ZhcmlhbnRzL0ZpZ3VyaW5lU3ltYm9sVDFCb2xkLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxuICAgICAgdXJsKCcuLi8uLi9mb250cy8zcmQgUGFydHkvQ2hlc3NWYXJpYW50cy9GaWd1cmluZVN5bWJvbFQxQm9sZC53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnRmlndXJpbmVTeW1ib2xUMSc7XG4gIHNyYzogdXJsKCcuLi8uLi9mb250cy8zcmQgUGFydHkvQ2hlc3NWYXJpYW50cy9GaWd1cmluZVN5bWJvbFQxLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxuICAgICAgdXJsKCcuLi8uLi9mb250cy8zcmQgUGFydHkvQ2hlc3NWYXJpYW50cy9GaWd1cmluZVN5bWJvbFQxLndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG59XG5cbiIsIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJDYXZlYXRcIjtcbiAgc3JjOiB1cmwoXCIuLi8uLi9mb250cy9Cb2xkL0NhdmVhdC1Cb2xkLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpLCB1cmwoXCIuLi8uLi9mb250cy9Cb2xkL0NhdmVhdC1Cb2xkLndvZmZcIikgZm9ybWF0KFwid29mZlwiKTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkNhdmVhdFwiO1xuICBzcmM6IHVybChcIi4uLy4uL2ZvbnRzL1JlZ3VsYXIvQ2F2ZWF0LVJlZ3VsYXIud29mZjJcIikgZm9ybWF0KFwid29mZjJcIiksIHVybChcIi4uLy4uL2ZvbnRzL1JlZ3VsYXIvQ2F2ZWF0LVJlZ3VsYXIud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJGaWd1cmluZVN5bWJvbFQxXCI7XG4gIHNyYzogdXJsKFwiLi4vLi4vZm9udHMvM3JkIFBhcnR5L0NoZXNzVmFyaWFudHMvRmlndXJpbmVTeW1ib2xUMUJvbGQud29mZjJcIikgZm9ybWF0KFwid29mZjJcIiksIHVybChcIi4uLy4uL2ZvbnRzLzNyZCBQYXJ0eS9DaGVzc1ZhcmlhbnRzL0ZpZ3VyaW5lU3ltYm9sVDFCb2xkLndvZmZcIikgZm9ybWF0KFwid29mZlwiKTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkZpZ3VyaW5lU3ltYm9sVDFcIjtcbiAgc3JjOiB1cmwoXCIuLi8uLi9mb250cy8zcmQgUGFydHkvQ2hlc3NWYXJpYW50cy9GaWd1cmluZVN5bWJvbFQxLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpLCB1cmwoXCIuLi8uLi9mb250cy8zcmQgUGFydHkvQ2hlc3NWYXJpYW50cy9GaWd1cmluZVN5bWJvbFQxLndvZmZcIikgZm9ybWF0KFwid29mZlwiKTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG59XG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIENvbnRhaW5lciBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBDb250YWluZXIgVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgQ29udGFpbmVyIFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIEhpZ2hsaWdodCBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBBbm5vdGF0aW9uIFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIFZhcmlhdGlvbiBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBQbHkgVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbjpyb290IHtcbiAgLS1iZy1jb2xvcjogI2YyZjNmNztcbiAgLS1mZy1jb2xvcjogIzM4M2E0MTtcbiAgLS1yZWQ6ICNlNDMwMzA7XG4gIC0tZ3JlZW46ICMxOWExODc7XG4gIC0tYmx1ZTogIzM2N2JmMDtcbiAgLS1kYXJrLWJsdWU6ICMyNjVhYjE7XG4gIC0tbWFyb29uOiAjYjgxNzRjO1xuICAtLXB1cnBsZTogIzhjNDJhYjtcbn1cblxuOjotbW96LWZvY3VzLWlubmVyLFxuOi1tb3otZm9jdXNyaW5nIHtcbiAgYm9yZGVyOiAwO1xuICBjb2xvcjogdHJhbnNwYXJlbnQ7XG4gIHRleHQtc2hhZG93OiAwIDAgMCAjMzgzYTQxO1xufVxuXG46OnNlbGVjdGlvbixcbjo6LW1vei1zZWxlY3Rpb24ge1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQ6IGJsYWNrO1xufVxuXG4qIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgb3V0bGluZTogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lO1xuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCkgIWltcG9ydGFudDtcbiAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xuICBjdXJzb3I6IGRlZmF1bHQ7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xufVxuXG4uc2VsZWN0YWJsZSxcbi5zZWxlY3RhYmxlICoge1xuICBjdXJzb3I6IGF1dG87XG4gIHVzZXItc2VsZWN0OiB0ZXh0O1xuICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IHRleHQ7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IHRleHQ7XG4gIC1raHRtbC11c2VyLXNlbGVjdDogdGV4dDtcbiAgLW1vei11c2VyLXNlbGVjdDogdGV4dDtcbiAgLW1zLXVzZXItc2VsZWN0OiB0ZXh0O1xufVxuXG5odG1sLFxuYm9keSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYzZjc7XG4gIGNvbG9yOiAjMzgzYTQxO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGZvbnQtc2l6ZTogMTBwdDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdzogYXV0bztcbn1cblxuLndpdGgtc2hhZG93LCAub3V0c2V0LCBidXR0b24sIC5jaGVja3RleHQgaW5wdXQgKyBzcGFuLCAuYmx1ZS1idXR0b24sIC5jaGVja3RleHQgaW5wdXQ6Y2hlY2tlZCArIHNwYW4sIGJ1dHRvbi5ibHVlLWJ1dHRvbiwgLnJlZC1idXR0b24uYmx1ZS1idXR0b24sIC5ncmVlbi1idXR0b24uYmx1ZS1idXR0b24sIC5ncmVlbi1idXR0b24sIGJ1dHRvbi5ncmVlbi1idXR0b24sIC5yZWQtYnV0dG9uLmdyZWVuLWJ1dHRvbiwgLnJlZC1idXR0b24sIGJ1dHRvbi5yZWQtYnV0dG9uLFxuaW5wdXRbdHlwZT1idXR0b25dLFxuaW5wdXRbdHlwZT1zdWJtaXRdLFxuaW5wdXRbdHlwZT1yZXNldF0sIHNlbGVjdCwgaW5wdXRbdHlwZT10ZXh0XTpub3Qoc2VsZWN0KTpmb2N1cyxcbmlucHV0W3R5cGU9c2VhcmNoXTpub3Qoc2VsZWN0KTpmb2N1cyxcbmlucHV0W3R5cGU9dGVsXTpub3Qoc2VsZWN0KTpmb2N1cyxcbmlucHV0W3R5cGU9dXJsXTpub3Qoc2VsZWN0KTpmb2N1cyxcbmlucHV0W3R5cGU9ZW1haWxdOm5vdChzZWxlY3QpOmZvY3VzLFxuaW5wdXRbdHlwZT1wYXNzd29yZF06bm90KHNlbGVjdCk6Zm9jdXMsXG5pbnB1dFt0eXBlPWRhdGVdOm5vdChzZWxlY3QpOmZvY3VzLFxuaW5wdXRbdHlwZT1tb250aF06bm90KHNlbGVjdCk6Zm9jdXMsXG5pbnB1dFt0eXBlPXdlZWtdOm5vdChzZWxlY3QpOmZvY3VzLFxuaW5wdXRbdHlwZT10aW1lXTpub3Qoc2VsZWN0KTpmb2N1cyxcbmlucHV0W3R5cGU9bnVtYmVyXTpub3Qoc2VsZWN0KTpmb2N1cyxcbmlucHV0W3R5cGU9Y29sb3JdOm5vdChzZWxlY3QpOmZvY3VzLFxuc2VsZWN0Om5vdChzZWxlY3QpOmZvY3VzLFxudGV4dGFyZWE6bm90KHNlbGVjdCk6Zm9jdXMsIC5wYXBlciB7XG4gIGJveC1zaGFkb3c6IDZweCA2cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMSksIC02cHggLTZweCAxMHB4IHdoaXRlO1xufVxuXG4ub3V0c2V0LCBidXR0b24sIC5jaGVja3RleHQgaW5wdXQgKyBzcGFuLCAuYmx1ZS1idXR0b24sIC5jaGVja3RleHQgaW5wdXQ6Y2hlY2tlZCArIHNwYW4sIGJ1dHRvbi5ibHVlLWJ1dHRvbiwgLnJlZC1idXR0b24uYmx1ZS1idXR0b24sIC5ncmVlbi1idXR0b24uYmx1ZS1idXR0b24sIC5ncmVlbi1idXR0b24sIGJ1dHRvbi5ncmVlbi1idXR0b24sIC5yZWQtYnV0dG9uLmdyZWVuLWJ1dHRvbiwgLnJlZC1idXR0b24sIGJ1dHRvbi5yZWQtYnV0dG9uLFxuaW5wdXRbdHlwZT1idXR0b25dLFxuaW5wdXRbdHlwZT1zdWJtaXRdLFxuaW5wdXRbdHlwZT1yZXNldF0sIHNlbGVjdCwgaW5wdXRbdHlwZT10ZXh0XTpub3Qoc2VsZWN0KTpmb2N1cyxcbmlucHV0W3R5cGU9c2VhcmNoXTpub3Qoc2VsZWN0KTpmb2N1cyxcbmlucHV0W3R5cGU9dGVsXTpub3Qoc2VsZWN0KTpmb2N1cyxcbmlucHV0W3R5cGU9dXJsXTpub3Qoc2VsZWN0KTpmb2N1cyxcbmlucHV0W3R5cGU9ZW1haWxdOm5vdChzZWxlY3QpOmZvY3VzLFxuaW5wdXRbdHlwZT1wYXNzd29yZF06bm90KHNlbGVjdCk6Zm9jdXMsXG5pbnB1dFt0eXBlPWRhdGVdOm5vdChzZWxlY3QpOmZvY3VzLFxuaW5wdXRbdHlwZT1tb250aF06bm90KHNlbGVjdCk6Zm9jdXMsXG5pbnB1dFt0eXBlPXdlZWtdOm5vdChzZWxlY3QpOmZvY3VzLFxuaW5wdXRbdHlwZT10aW1lXTpub3Qoc2VsZWN0KTpmb2N1cyxcbmlucHV0W3R5cGU9bnVtYmVyXTpub3Qoc2VsZWN0KTpmb2N1cyxcbmlucHV0W3R5cGU9Y29sb3JdOm5vdChzZWxlY3QpOmZvY3VzLFxuc2VsZWN0Om5vdChzZWxlY3QpOmZvY3VzLFxudGV4dGFyZWE6bm90KHNlbGVjdCk6Zm9jdXMsIC5wYXBlciB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQ6ICNmMmYzZjc7XG59XG5cbi5pbnNldCwgaHIsIGJ1dHRvbi5hY3RpdmUsIC5jaGVja3RleHQgaW5wdXQgKyBzcGFuLmFjdGl2ZSwgLmFjdGl2ZS5ibHVlLWJ1dHRvbiwgLmFjdGl2ZS5ncmVlbi1idXR0b24sIC5hY3RpdmUucmVkLWJ1dHRvbiwgYnV0dG9uOmFjdGl2ZSwgLmNoZWNrdGV4dCBpbnB1dCArIHNwYW46YWN0aXZlLCAuYmx1ZS1idXR0b246YWN0aXZlLCAuZ3JlZW4tYnV0dG9uOmFjdGl2ZSwgLnJlZC1idXR0b246YWN0aXZlLFxuaW5wdXRbdHlwZT1idXR0b25dLmFjdGl2ZSxcbmlucHV0W3R5cGU9YnV0dG9uXTphY3RpdmUsXG5pbnB1dFt0eXBlPXN1Ym1pdF0uYWN0aXZlLFxuaW5wdXRbdHlwZT1zdWJtaXRdOmFjdGl2ZSxcbmlucHV0W3R5cGU9cmVzZXRdLmFjdGl2ZSxcbmlucHV0W3R5cGU9cmVzZXRdOmFjdGl2ZSwgaW5wdXRbdHlwZT10ZXh0XTpub3Qoc2VsZWN0KSxcbmlucHV0W3R5cGU9c2VhcmNoXTpub3Qoc2VsZWN0KSxcbmlucHV0W3R5cGU9dGVsXTpub3Qoc2VsZWN0KSxcbmlucHV0W3R5cGU9dXJsXTpub3Qoc2VsZWN0KSxcbmlucHV0W3R5cGU9ZW1haWxdOm5vdChzZWxlY3QpLFxuaW5wdXRbdHlwZT1wYXNzd29yZF06bm90KHNlbGVjdCksXG5pbnB1dFt0eXBlPWRhdGVdOm5vdChzZWxlY3QpLFxuaW5wdXRbdHlwZT1tb250aF06bm90KHNlbGVjdCksXG5pbnB1dFt0eXBlPXdlZWtdOm5vdChzZWxlY3QpLFxuaW5wdXRbdHlwZT10aW1lXTpub3Qoc2VsZWN0KSxcbmlucHV0W3R5cGU9bnVtYmVyXTpub3Qoc2VsZWN0KSxcbmlucHV0W3R5cGU9Y29sb3JdOm5vdChzZWxlY3QpLFxuc2VsZWN0Om5vdChzZWxlY3QpLFxudGV4dGFyZWE6bm90KHNlbGVjdCkge1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3gtc2hhZG93OiAwIDAgdHJhbnNwYXJlbnQsIDAgMCB0cmFuc3BhcmVudCwgaW5zZXQgM3B4IDNweCA1cHggcmdiYSgwLCAwLCAwLCAwLjEpLCBpbnNldCAtM3B4IC0zcHggNXB4IHdoaXRlO1xuICBiYWNrZ3JvdW5kOiAjZjhmOWZiO1xufVxuXG4ucGFwZXIge1xuICBwYWRkaW5nOiAxMHB4IDIwcHggMjBweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgbWluLWhlaWdodDogMTAwcHg7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG4gIGJhY2tncm91bmQ6ICNmMmYzZjc7XG59XG5cbnNlY3Rpb24sXG5hcnRpY2xlLFxuLnNlY3Rpb24sXG4uYXJ0aWNsZSxcbi5wYXBlciB7XG4gIGxpbmUtaGVpZ2h0OiAyZW07XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgd29yZC1icmVhazogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMmVtO1xufVxuXG5pbnB1dFt0eXBlPXRleHRdLFxuaW5wdXRbdHlwZT1zZWFyY2hdLFxuaW5wdXRbdHlwZT10ZWxdLFxuaW5wdXRbdHlwZT11cmxdLFxuaW5wdXRbdHlwZT1lbWFpbF0sXG5pbnB1dFt0eXBlPXBhc3N3b3JkXSxcbmlucHV0W3R5cGU9ZGF0ZV0sXG5pbnB1dFt0eXBlPW1vbnRoXSxcbmlucHV0W3R5cGU9d2Vla10sXG5pbnB1dFt0eXBlPXRpbWVdLFxuaW5wdXRbdHlwZT1udW1iZXJdLFxuaW5wdXRbdHlwZT1jb2xvcl0sXG5zZWxlY3QsXG50ZXh0YXJlYSB7XG4gIGJvcmRlcjogMDtcbiAgYmFja2dyb3VuZDogI2YyZjNmNztcbiAgY29sb3I6ICMzODNhNDE7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIHBhZGRpbmc6IDAgMS4yNWVtO1xuICBsaW5lLWhlaWdodDogMS4yNWVtO1xuICBoZWlnaHQ6IDMuNWVtO1xuICBtYXJnaW46IDEwcHggMDtcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIGN1cnNvcjogdGV4dDtcbiAgdXNlci1zZWxlY3Q6IHRleHQ7XG4gIC13ZWJraXQtdG91Y2gtY2FsbG91dDogdGV4dDtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogdGV4dDtcbiAgLWtodG1sLXVzZXItc2VsZWN0OiB0ZXh0O1xuICAtbW96LXVzZXItc2VsZWN0OiB0ZXh0O1xuICAtbXMtdXNlci1zZWxlY3Q6IHRleHQ7XG4gIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC4ycztcbn1cbnRleHRhcmVhIHtcbiAgaGVpZ2h0OiAzNTBweDtcbiAgcGFkZGluZzogMS4yNWVtO1xufVxuXG5zZWxlY3Qge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQ6IHVybChkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUIyWlhKemFXOXVQU0l4TGpFaUlIWnBaWGRDYjNnOUlqQWdNQ0F4T1NBeE9TSWdlRzFzYm5NOUltaDBkSEE2THk5M2QzY3Vkek11YjNKbkx6SXdNREF2YzNabklqNDhaeUIwY21GdWMyWnZjbTA5SW0xaGRISnBlQ2d1TURNMElEQWdNQ0F1TURNMElDMDJMamdnTVM0M1pTMDFLU0lnYzNSNWJHVTlJbVpwYkd3Nkl6ZGlOMlU0WXlJK1BIQmhkR2dnWkQwaWJUUTRNQ0F6TkRRdE1qRXhMVEl4TW1NdE1UWXRNVFl0TkRFdE1UWXROVGNnTUMweE5pQXhOaTB4TmlBME1pQXdJRFUzYkRJek9DQXlNemxqT0M0MElEZ3VOU0F5TUNBeE1pQXpNU0F4TWlBeE1TQXdMalUySURJeUxUTXVNaUF6TVMweE1td3lNemd0TWpNNVl6RTJMVEUySURFMkxUUXlJREF0TlRkekxUUXhMVEUyTFRVM0lEQjZJaUJ6ZEhsc1pUMGlabWxzYkRvak4ySTNaVGhqSWk4K1BDOW5Qand2YzNablBnbz0pIG5vLXJlcGVhdCByaWdodCAxZW0gY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEuMmVtO1xuICBwYWRkaW5nLXJpZ2h0OiAzZW07XG59XG5cbmlucHV0OjpwbGFjZWhvbGRlcixcbnRleHRhcmVhOjpwbGFjZWhvbGRlciB7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycztcbiAgY29sb3I6IGluaGVyaXQ7XG59XG5cbmlucHV0OmZvY3VzOjpwbGFjZWhvbGRlcixcbnRleHRhcmVhOmZvY3VzOjpwbGFjZWhvbGRlciB7XG4gIG9wYWNpdHk6IDAuMjtcbn1cblxuaW5wdXQ6LW1zLWlucHV0LXBsYWNlaG9sZGVyLFxudGV4dGFyZWE6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzO1xuICBjb2xvcjogaW5oZXJpdDtcbn1cblxuaW5wdXQ6Zm9jdXM6LW1zLWlucHV0LXBsYWNlaG9sZGVyLFxudGV4dGFyZWE6Zm9jdXM6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgb3BhY2l0eTogMC4yO1xufVxuXG5pbnB1dFt0eXBlPXNlYXJjaF06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24sXG5pbnB1dFt0eXBlPXNlYXJjaF06Oi13ZWJraXQtc2VhcmNoLWNhbmNlbC1idXR0b24sXG5pbnB1dFt0eXBlPXNlYXJjaF06Oi13ZWJraXQtc2VhcmNoLXJlc3VsdHMtYnV0dG9uLFxuaW5wdXRbdHlwZT1zZWFyY2hdOjotd2Via2l0LXNlYXJjaC1yZXN1bHRzLWRlY29yYXRpb24ge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5idXR0b24sIC5jaGVja3RleHQgaW5wdXQgKyBzcGFuLCAuYmx1ZS1idXR0b24sIC5jaGVja3RleHQgaW5wdXQ6Y2hlY2tlZCArIHNwYW4sIGJ1dHRvbi5ibHVlLWJ1dHRvbiwgLnJlZC1idXR0b24uYmx1ZS1idXR0b24sIC5ncmVlbi1idXR0b24uYmx1ZS1idXR0b24sIC5ncmVlbi1idXR0b24sIGJ1dHRvbi5ncmVlbi1idXR0b24sIC5yZWQtYnV0dG9uLmdyZWVuLWJ1dHRvbiwgLnJlZC1idXR0b24sIGJ1dHRvbi5yZWQtYnV0dG9uLFxuaW5wdXRbdHlwZT1idXR0b25dLFxuaW5wdXRbdHlwZT1zdWJtaXRdLFxuaW5wdXRbdHlwZT1yZXNldF0ge1xuICBib3JkZXI6IDA7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBwYWRkaW5nOiAxMHB4IDA7XG4gIHdpZHRoOiA4ZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogaW5oZXJpdDtcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGJhY2tncm91bmQtY29sb3IsIGJveC1zaGFkb3c7XG4gIHRyYW5zaXRpb24tZGVsYXk6IDAuMnM7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMnM7XG59XG5idXR0b24uYWN0aXZlLCAuY2hlY2t0ZXh0IGlucHV0ICsgc3Bhbi5hY3RpdmUsIC5hY3RpdmUuYmx1ZS1idXR0b24sIC5hY3RpdmUuZ3JlZW4tYnV0dG9uLCAuYWN0aXZlLnJlZC1idXR0b24sIGJ1dHRvbjphY3RpdmUsIC5jaGVja3RleHQgaW5wdXQgKyBzcGFuOmFjdGl2ZSwgLmJsdWUtYnV0dG9uOmFjdGl2ZSwgLmdyZWVuLWJ1dHRvbjphY3RpdmUsIC5yZWQtYnV0dG9uOmFjdGl2ZSxcbmlucHV0W3R5cGU9YnV0dG9uXS5hY3RpdmUsXG5pbnB1dFt0eXBlPWJ1dHRvbl06YWN0aXZlLFxuaW5wdXRbdHlwZT1zdWJtaXRdLmFjdGl2ZSxcbmlucHV0W3R5cGU9c3VibWl0XTphY3RpdmUsXG5pbnB1dFt0eXBlPXJlc2V0XS5hY3RpdmUsXG5pbnB1dFt0eXBlPXJlc2V0XTphY3RpdmUge1xuICB0cmFuc2l0aW9uLWRlbGF5OiAwcztcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4xcztcbn1cbi5yZWQtYnV0dG9uLCBidXR0b24ucmVkLWJ1dHRvbiwgLmNoZWNrdGV4dCBpbnB1dCArIHNwYW4ucmVkLWJ1dHRvbiwgLnJlZC1idXR0b24uYmx1ZS1idXR0b24sIC5yZWQtYnV0dG9uLmdyZWVuLWJ1dHRvbixcbmlucHV0W3R5cGU9YnV0dG9uXS5yZWQtYnV0dG9uLFxuaW5wdXRbdHlwZT1zdWJtaXRdLnJlZC1idXR0b24sXG5pbnB1dFt0eXBlPXJlc2V0XS5yZWQtYnV0dG9uIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1zaGFkb3c6IDAgMC4xZW0gMC4xZW0gcmdiYSgwLCAwLCAwLCAwLjcpO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAjZTQzMDMwIDMwJSwgI2U4NGI0YiA4MCUpO1xuICBib3gtc2hhZG93OiAwIDAgMC41ZW0gcmdiYSgyMjgsIDQ4LCA0OCwgMC43KSwgMCAwIHRyYW5zcGFyZW50LCBpbnNldCAwIC01cHggMCByZ2JhKDAsIDAsIDAsIDAuMDUpLCBpbnNldCAwIDJweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbiAgYm9yZGVyLXJhZGl1czogNnB4IDZweCA4cHggOHB4O1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBib3gtc2hhZG93LCBib3JkZXItcmFkaXVzO1xufVxuLnJlZC1idXR0b24uYWN0aXZlLCAucmVkLWJ1dHRvbjphY3RpdmUsIGJ1dHRvbi5yZWQtYnV0dG9uLmFjdGl2ZSwgYnV0dG9uLnJlZC1idXR0b246YWN0aXZlLFxuaW5wdXRbdHlwZT1idXR0b25dLnJlZC1idXR0b24uYWN0aXZlLFxuaW5wdXRbdHlwZT1idXR0b25dLnJlZC1idXR0b246YWN0aXZlLFxuaW5wdXRbdHlwZT1zdWJtaXRdLnJlZC1idXR0b24uYWN0aXZlLFxuaW5wdXRbdHlwZT1zdWJtaXRdLnJlZC1idXR0b246YWN0aXZlLFxuaW5wdXRbdHlwZT1yZXNldF0ucmVkLWJ1dHRvbi5hY3RpdmUsXG5pbnB1dFt0eXBlPXJlc2V0XS5yZWQtYnV0dG9uOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsICNlNDMwMzAgMzAlLCAjZTg0YjRiIDgwJSk7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgYm94LXNoYWRvdzogMCAwIHRyYW5zcGFyZW50LCAwIDAgdHJhbnNwYXJlbnQsIGluc2V0IDAgMnB4IDVweCAycHggcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuXG4uZ3JlZW4tYnV0dG9uLCBidXR0b24uZ3JlZW4tYnV0dG9uLCAuY2hlY2t0ZXh0IGlucHV0ICsgc3Bhbi5ncmVlbi1idXR0b24sIC5ncmVlbi1idXR0b24uYmx1ZS1idXR0b24sIC5ncmVlbi1idXR0b24ucmVkLWJ1dHRvbixcbmlucHV0W3R5cGU9YnV0dG9uXS5ncmVlbi1idXR0b24sXG5pbnB1dFt0eXBlPXN1Ym1pdF0uZ3JlZW4tYnV0dG9uLFxuaW5wdXRbdHlwZT1yZXNldF0uZ3JlZW4tYnV0dG9uIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1zaGFkb3c6IDAgMC4xZW0gMC4xZW0gcmdiYSgwLCAwLCAwLCAwLjcpO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAjMTlhMTg3IDMwJSwgIzFkYmI5ZCA4MCUpO1xuICBib3gtc2hhZG93OiAwIDAgMC41ZW0gcmdiYSgyNSwgMTYxLCAxMzUsIDAuNyksIDAgMCB0cmFuc3BhcmVudCwgaW5zZXQgMCAtNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjA1KSwgaW5zZXQgMCAycHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG4gIGJvcmRlci1yYWRpdXM6IDZweCA2cHggOHB4IDhweDtcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYm94LXNoYWRvdywgYm9yZGVyLXJhZGl1cztcbn1cbi5ncmVlbi1idXR0b24uYWN0aXZlLCAuZ3JlZW4tYnV0dG9uOmFjdGl2ZSwgYnV0dG9uLmdyZWVuLWJ1dHRvbi5hY3RpdmUsIGJ1dHRvbi5ncmVlbi1idXR0b246YWN0aXZlLFxuaW5wdXRbdHlwZT1idXR0b25dLmdyZWVuLWJ1dHRvbi5hY3RpdmUsXG5pbnB1dFt0eXBlPWJ1dHRvbl0uZ3JlZW4tYnV0dG9uOmFjdGl2ZSxcbmlucHV0W3R5cGU9c3VibWl0XS5ncmVlbi1idXR0b24uYWN0aXZlLFxuaW5wdXRbdHlwZT1zdWJtaXRdLmdyZWVuLWJ1dHRvbjphY3RpdmUsXG5pbnB1dFt0eXBlPXJlc2V0XS5ncmVlbi1idXR0b24uYWN0aXZlLFxuaW5wdXRbdHlwZT1yZXNldF0uZ3JlZW4tYnV0dG9uOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsICMxOWExODcgMzAlLCAjMWRiYjlkIDgwJSk7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgYm94LXNoYWRvdzogMCAwIHRyYW5zcGFyZW50LCAwIDAgdHJhbnNwYXJlbnQsIGluc2V0IDAgMnB4IDVweCAycHggcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuXG4uYmx1ZS1idXR0b24sIC5jaGVja3RleHQgaW5wdXQ6Y2hlY2tlZCArIHNwYW4sIGJ1dHRvbi5ibHVlLWJ1dHRvbiwgLmNoZWNrdGV4dCBpbnB1dCArIHNwYW4uYmx1ZS1idXR0b24sIC5ibHVlLWJ1dHRvbi5yZWQtYnV0dG9uLCAuYmx1ZS1idXR0b24uZ3JlZW4tYnV0dG9uLFxuaW5wdXRbdHlwZT1idXR0b25dLmJsdWUtYnV0dG9uLFxuaW5wdXRbdHlwZT1zdWJtaXRdLmJsdWUtYnV0dG9uLFxuaW5wdXRbdHlwZT1yZXNldF0uYmx1ZS1idXR0b24ge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LXNoYWRvdzogMCAwLjFlbSAwLjFlbSByZ2JhKDAsIDAsIDAsIDAuNyk7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsICMzNjdiZjAgMzAlLCAjNTI4ZWYyIDgwJSk7XG4gIGJveC1zaGFkb3c6IDAgMCAwLjVlbSByZ2JhKDU0LCAxMjMsIDI0MCwgMC43KSwgMCAwIHRyYW5zcGFyZW50LCBpbnNldCAwIC01cHggMCByZ2JhKDAsIDAsIDAsIDAuMDUpLCBpbnNldCAwIDJweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbiAgYm9yZGVyLXJhZGl1czogNnB4IDZweCA4cHggOHB4O1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBib3gtc2hhZG93LCBib3JkZXItcmFkaXVzO1xufVxuLmJsdWUtYnV0dG9uLmFjdGl2ZSwgLmNoZWNrdGV4dCBpbnB1dDpjaGVja2VkICsgc3Bhbi5hY3RpdmUsIC5ibHVlLWJ1dHRvbjphY3RpdmUsIC5jaGVja3RleHQgaW5wdXQ6Y2hlY2tlZCArIHNwYW46YWN0aXZlLCBidXR0b24uYmx1ZS1idXR0b24uYWN0aXZlLCBidXR0b24uYmx1ZS1idXR0b246YWN0aXZlLFxuaW5wdXRbdHlwZT1idXR0b25dLmJsdWUtYnV0dG9uLmFjdGl2ZSxcbmlucHV0W3R5cGU9YnV0dG9uXS5ibHVlLWJ1dHRvbjphY3RpdmUsXG5pbnB1dFt0eXBlPXN1Ym1pdF0uYmx1ZS1idXR0b24uYWN0aXZlLFxuaW5wdXRbdHlwZT1zdWJtaXRdLmJsdWUtYnV0dG9uOmFjdGl2ZSxcbmlucHV0W3R5cGU9cmVzZXRdLmJsdWUtYnV0dG9uLmFjdGl2ZSxcbmlucHV0W3R5cGU9cmVzZXRdLmJsdWUtYnV0dG9uOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsICMzNjdiZjAgMzAlLCAjNTI4ZWYyIDgwJSk7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgYm94LXNoYWRvdzogMCAwIHRyYW5zcGFyZW50LCAwIDAgdHJhbnNwYXJlbnQsIGluc2V0IDAgMnB4IDVweCAycHggcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuXG5sYWJlbCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogMC41NmVtIDA7XG59XG5sYWJlbCwgbGFiZWwgKiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuYSwgYTpsaW5rLCBhOnZpc2l0ZWQsIGE6aG92ZXIgYTphY3RpdmUge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICMzNjdiZjA7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5hLCBhICosIGE6bGluaywgYTpsaW5rICosIGE6dmlzaXRlZCwgYTp2aXNpdGVkICosIGE6aG92ZXIgYTphY3RpdmUsIGE6aG92ZXIgYTphY3RpdmUgKiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuaDEsXG5oMixcbmgzLFxuaDQsXG5oNSxcbmg2IHtcbiAgbGluZS1oZWlnaHQ6IDEuNWVtO1xufVxuXG5oMSB7XG4gIGZvbnQtc2l6ZTogNGVtO1xuICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgbWFyZ2luOiAwLjdlbSAwO1xufVxuXG5oMiB7XG4gIGZvbnQtc2l6ZTogM2VtO1xuICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgbWFyZ2luOiAwLjhlbSAwO1xufVxuXG5oMyB7XG4gIGZvbnQtc2l6ZTogMi41ZW07XG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuICBtYXJnaW46IDAuOWVtIDA7XG59XG5cbmg0IHtcbiAgZm9udC1zaXplOiAyZW07XG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuICBtYXJnaW46IDFlbSAwO1xufVxuXG5oNSB7XG4gIG1hcmdpbjogMC41ZW0gMDtcbiAgZm9udC1zaXplOiAxLjJlbTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cblxuaDYge1xuICBtYXJnaW46IDFlbSAwIDFlbSAxLjRlbTtcbiAgZm9udC1zaXplOiAxZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5pbnB1dFt0eXBlPWNoZWNrYm94XSxcbmlucHV0W3R5cGU9cmFkaW9dIHtcbiAgZm9udC1zaXplOiAxZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgaGVpZ2h0OiAxLjJlbTtcbiAgd2lkdGg6IDEuMmVtO1xuICBtYXJnaW46IDAgMC4zZW07XG4gIGJveC1zaGFkb3c6IDJweCAycHggM3B4IHJnYmEoMCwgMCwgMCwgMC4yKSwgLTJweCAtMnB4IDNweCB3aGl0ZSwgaW5zZXQgMXB4IDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjIpLCBpbnNldCAtMXB4IC0xcHggMnB4IHdoaXRlO1xuICBib3JkZXI6IDAuMTVlbSBzb2xpZCAjZjJmM2Y3O1xuICB2ZXJ0aWNhbC1hbGlnbjogdGV4dC1ib3R0b207XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGJhY2tncm91bmQsIGJveC1zaGFkb3c7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMnM7XG59XG5pbnB1dFt0eXBlPWNoZWNrYm94XTphY3RpdmUsXG5pbnB1dFt0eXBlPXJhZGlvXTphY3RpdmUge1xuICBib3gtc2hhZG93OiAycHggMnB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMiksIC0ycHggLTJweCAzcHggd2hpdGUsIGluc2V0IDFweCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgaW5zZXQgLTFweCAtMXB4IDJweCB3aGl0ZSwgaW5zZXQgMCAwLjFlbSAwLjI1ZW0gcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuaW5wdXRbdHlwZT1jaGVja2JveF06Y2hlY2tlZCxcbmlucHV0W3R5cGU9cmFkaW9dOmNoZWNrZWQge1xuICBib3JkZXItd2lkdGg6IDAuMWVtO1xuICBib3JkZXItY29sb3I6ICMxMTVmZTI7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNjdiZjA7XG59XG5cbmlucHV0W3R5cGU9Y2hlY2tib3hdIHtcbiAgYm9yZGVyLXJhZGl1czogMjUlO1xufVxuaW5wdXRbdHlwZT1jaGVja2JveF06Y2hlY2tlZCB7XG4gIGJveC1zaGFkb3c6IDAgMCAwLjVlbSByZ2JhKDU0LCAxMjMsIDI0MCwgMC43KSwgaW5zZXQgMCAtMC4xZW0gMCByZ2JhKDAsIDAsIDAsIDAuMiksIGluc2V0IDAgMC4xZW0gMC4xZW0gcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xufVxuXG5pbnB1dFt0eXBlPXJhZGlvXSB7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG59XG5pbnB1dFt0eXBlPXJhZGlvXTpjaGVja2VkIHtcbiAgYm94LXNoYWRvdzogMCAwIDAuNWVtIHJnYmEoNTQsIDEyMywgMjQwLCAwLjcpO1xuICBib3gtc2hhZG93OiAwIDAgMC41ZW0gcmdiYSg1NCwgMTIzLCAyNDAsIDAuNyksIGluc2V0IDAgMC4xMmVtIDAuMWVtIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSk7XG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDAuMTVlbTtcbn1cblxuLmNoZWNrdGV4dCB7XG4gIHdpZHRoOiBhdXRvO1xuICBtYXJnaW46IDAuNWVtO1xufVxuLmNoZWNrdGV4dCBpbnB1dCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uY2hlY2t0ZXh0IGlucHV0ICsgc3BhbiB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nOiAxZW07XG4gIHRyYW5zaXRpb24tZGVsYXk6IDBzO1xufVxuLmNoZWNrdGV4dCBpbnB1dDpjaGVja2VkICsgc3BhbiB7XG4gIHBhZGRpbmc6IDFlbTtcbn1cblxuLnN3aXRjaCB7XG4gIGhlaWdodDogMnJlbTtcbiAgd2lkdGg6IDhyZW07XG4gIHBhZGRpbmc6IDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5zd2l0Y2ggaW5wdXQge1xuICBkaXNwbGF5OiBub25lO1xufVxuLnN3aXRjaCBpbnB1dCArIGRpdiB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYm94LXNoYWRvdywgYmFja2dyb3VuZC1jb2xvcjtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4ycztcbiAgdHJhbnNpdGlvbi1kZWxheTogMC4ycztcbiAgYm94LXNoYWRvdzogM3B4IDNweCAycHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMSksIGluc2V0IDJweCAycHggMnB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMSksIGluc2V0IC0ycHggLTJweCAxcHggd2hpdGU7XG59XG4uc3dpdGNoIGlucHV0ICsgZGl2OjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiBjYWxjKDJyZW0gKyA0cHgpO1xuICB3aWR0aDogY2FsYygycmVtICsgNHB4KTtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgYm9yZGVyOiBzb2xpZCB3aGl0ZSAzcHg7XG4gIGJhY2tncm91bmQ6ICMzNjdiZjA7XG4gIGJveC1zaGFkb3c6IDAgM3B4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjIpLCBpbnNldCAwIC0xcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTZweCk7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzO1xufVxuLnN3aXRjaCBpbnB1dDpjaGVja2VkICsgZGl2IHtcbiAgYmFja2dyb3VuZDogIzM2N2JmMDtcbiAgYm94LXNoYWRvdzogMCAwIDAuNWVtIHJnYmEoNTQsIDEyMywgMjQwLCAwLjcpLCBpbnNldCAwIDJweCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4zKSwgaW5zZXQgMCAwIHRyYW5zcGFyZW50O1xufVxuLnN3aXRjaCBpbnB1dDpjaGVja2VkICsgZGl2OjpiZWZvcmUge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg2cmVtLCAtNnB4KTtcbn1cblxuaHIge1xuICB3aWR0aDogNzIlO1xuICBoZWlnaHQ6IDhweDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBib3JkZXI6IDA7XG59XG5cbmNvZGUsXG5wcmUge1xuICBwYWRkaW5nOiAwLjVlbSAxZW07XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIGJveC1zaGFkb3c6IDAgNXB4IDMwcHggMCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xufVxuXG5jb2RlIHtcbiAgYmFja2dyb3VuZDogI2U2ZTZlNjtcbn1cblxucHJlIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIG1hcmdpbjogNGVtIDA7XG59XG5cbmNvZGUsIGNvZGUgKixcbnByZSxcbnByZSAqIHtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIGxpbmUtaGVpZ2h0OiAyZW07XG4gIGN1cnNvcjogYXV0bztcbiAgdXNlci1zZWxlY3Q6IHRleHQ7XG4gIC13ZWJraXQtdG91Y2gtY2FsbG91dDogdGV4dDtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogdGV4dDtcbiAgLWtodG1sLXVzZXItc2VsZWN0OiB0ZXh0O1xuICAtbW96LXVzZXItc2VsZWN0OiB0ZXh0O1xuICAtbXMtdXNlci1zZWxlY3Q6IHRleHQ7XG59XG5cbmJsb2NrcXVvdGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMC41ZW0gMWVtO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJveC1zaGFkb3c6IDAgNXB4IDMwcHggMCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICBib3JkZXItbGVmdDogNnB4IHNvbGlkICMzNjdiZjA7XG59XG5cbi5vbGdhLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwcHg7XG4gIGJvdHRvbTogMHB4O1xuICBsZWZ0OiAwcHg7XG4gIHJpZ2h0OiAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5mZW5idXR0b24ge1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogODBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTBweDtcbiAgYm90dG9tOiAxJTtcbn1cblxuYXBwLWdhbWUtc2NvcmUtdXgge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxcHg7XG59XG5cbmNhbnZhcy1jaGVzc2JvYXJkIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDFweDtcbiAgbGVmdDogMXB4O1xuICBib3JkZXI6IDJweCBibGFjayBzb2xpZDtcbiAgYm9yZGVyLXJhZGl1czogMXB4O1xufVxuXG5hcHAtZ2FtZXNjb3JlLXNldHRpbmdzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogNHB4O1xuICBib3R0b206IDIlO1xuICBoZWlnaHQ6IDEwJTtcbn1cblxub2xnYS1jb250cm9scyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDFweDtcbiAgYm90dG9tOiA4JTtcbiAgaGVpZ2h0OiAxMjhweDtcbiAgd2lkdGg6IDUwJTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Olga, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'olga',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss'],
            }]
    }], function () { return [{ type: _services_olga_service__WEBPACK_IMPORTED_MODULE_3__["OlgaService"] }, { type: _services_colors_service__WEBPACK_IMPORTED_MODULE_4__["ColorService"] }, { type: _services_game_service__WEBPACK_IMPORTED_MODULE_5__["GameService"] }, { type: _services_layout_service__WEBPACK_IMPORTED_MODULE_6__["LayoutService"] }]; }, { gameScoreComponent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_game_score_game_score_ux__WEBPACK_IMPORTED_MODULE_1__["GamescoreUxComponent"]]
        }], canvasBoardComponent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_canvas_chessboard_canvas_chessboard_component__WEBPACK_IMPORTED_MODULE_2__["CanvasChessBoard"]]
        }], appContainer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['olgaContainer']
        }], gameScoreElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], boardElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], controlsElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], pgnString: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], olgaID: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], gameScoreWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], oldWidth: [{
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
/* harmony import */ var _settings_settings_gamescore_settings_gamescore_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./settings/settings-gamescore/settings-gamescore.component */ "./src/app/settings/settings-gamescore/settings-gamescore.component.ts");
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
/* harmony import */ var _settings_settings_menu_settings_menu_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./settings/settings-menu/settings-menu.component */ "./src/app/settings/settings-menu/settings-menu.component.ts");
/* harmony import */ var _settings_settings_board_settings_board_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./settings/settings-board/settings-board.component */ "./src/app/settings/settings-board/settings-board.component.ts");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _game_score_menu_game_score_item_menu_game_score_item_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./game-score/menu-game-score-item/menu-game-score-item.component */ "./src/app/game-score/menu-game-score-item/menu-game-score-item.component.ts");
/* harmony import */ var _services_olga_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./services/olga.service */ "./src/app/services/olga.service.ts");
/* harmony import */ var _services_game_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./services/game.service */ "./src/app/services/game.service.ts");
/* harmony import */ var _services_layout_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./services/layout.service */ "./src/app/services/layout.service.ts");
/* harmony import */ var _canvas_chessboard_canvas_chessboard_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./canvas-chessboard/canvas-chessboard.component */ "./src/app/canvas-chessboard/canvas-chessboard.component.ts");
/* harmony import */ var _olga_controls_olga_controls_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./olga-controls/olga-controls.component */ "./src/app/olga-controls/olga-controls.component.ts");
/* harmony import */ var _olga_status_olga_status_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./olga-status/olga-status.component */ "./src/app/olga-status/olga-status.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/bidi.js");
/* harmony import */ var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/cdk/text-field */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/text-field.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/scrolling.js");
















































class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["Olga"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_services_layout_service__WEBPACK_IMPORTED_MODULE_26__["LayoutService"], _services_colors_service__WEBPACK_IMPORTED_MODULE_15__["ColorService"], _services_game_service__WEBPACK_IMPORTED_MODULE_25__["GameService"], _services_olga_service__WEBPACK_IMPORTED_MODULE_24__["OlgaService"]], imports: [[
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
        _settings_settings_gamescore_settings_gamescore_component__WEBPACK_IMPORTED_MODULE_4__["GamescoreSettingsComponent"],
        _game_score_game_score_ux__WEBPACK_IMPORTED_MODULE_5__["GamescoreUxComponent"],
        _game_score_game_score_item_game_score_item_component__WEBPACK_IMPORTED_MODULE_14__["GameScoreItemComponent"],
        _common_toggle_switch_toggle_switch_component__WEBPACK_IMPORTED_MODULE_16__["ToggleSwitchComponent"],
        _common_labeled_slider_labeled_slider_component__WEBPACK_IMPORTED_MODULE_17__["LabeledSliderComponent"],
        _settings_settings_menu_settings_menu_component__WEBPACK_IMPORTED_MODULE_18__["SettingsMenuComponent"],
        _settings_settings_board_settings_board_component__WEBPACK_IMPORTED_MODULE_19__["SettingsBoardComponent"],
        _game_score_menu_game_score_item_menu_game_score_item_component__WEBPACK_IMPORTED_MODULE_23__["MenuGameScoreItemComponent"],
        _canvas_chessboard_canvas_chessboard_component__WEBPACK_IMPORTED_MODULE_27__["CanvasChessBoard"],
        _olga_controls_olga_controls_component__WEBPACK_IMPORTED_MODULE_28__["OlgaControlsComponent"],
        _olga_status_olga_status_component__WEBPACK_IMPORTED_MODULE_29__["OlgaStatusComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
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
                    _settings_settings_gamescore_settings_gamescore_component__WEBPACK_IMPORTED_MODULE_4__["GamescoreSettingsComponent"],
                    _game_score_game_score_ux__WEBPACK_IMPORTED_MODULE_5__["GamescoreUxComponent"],
                    _game_score_game_score_item_game_score_item_component__WEBPACK_IMPORTED_MODULE_14__["GameScoreItemComponent"],
                    _common_toggle_switch_toggle_switch_component__WEBPACK_IMPORTED_MODULE_16__["ToggleSwitchComponent"],
                    _common_labeled_slider_labeled_slider_component__WEBPACK_IMPORTED_MODULE_17__["LabeledSliderComponent"],
                    _settings_settings_menu_settings_menu_component__WEBPACK_IMPORTED_MODULE_18__["SettingsMenuComponent"],
                    _settings_settings_board_settings_board_component__WEBPACK_IMPORTED_MODULE_19__["SettingsBoardComponent"],
                    _game_score_menu_game_score_item_menu_game_score_item_component__WEBPACK_IMPORTED_MODULE_23__["MenuGameScoreItemComponent"],
                    _canvas_chessboard_canvas_chessboard_component__WEBPACK_IMPORTED_MODULE_27__["CanvasChessBoard"],
                    _olga_controls_olga_controls_component__WEBPACK_IMPORTED_MODULE_28__["OlgaControlsComponent"],
                    _olga_status_olga_status_component__WEBPACK_IMPORTED_MODULE_29__["OlgaStatusComponent"]
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
                providers: [_services_layout_service__WEBPACK_IMPORTED_MODULE_26__["LayoutService"], _services_colors_service__WEBPACK_IMPORTED_MODULE_15__["ColorService"], _services_game_service__WEBPACK_IMPORTED_MODULE_25__["GameService"], _services_olga_service__WEBPACK_IMPORTED_MODULE_24__["OlgaService"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["Olga"]],
            }]
    }], null, null); })();
_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetComponentScope"](_app_component__WEBPACK_IMPORTED_MODULE_3__["Olga"], [_angular_common__WEBPACK_IMPORTED_MODULE_30__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["NgComponentOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["NgPlural"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["NgPluralCase"], _angular_router__WEBPACK_IMPORTED_MODULE_31__["RouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_31__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_31__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_31__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_31__["ɵangular_packages_router_router_l"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatAnchor"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_32__["Dir"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardTitleGroup"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardActions"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardFooter"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardSmImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardMdImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardLgImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardXlImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardAvatar"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__["MatDivider"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__["MatIcon"], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_33__["CdkAutofill"], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_33__["CdkTextareaAutosize"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_34__["MatError"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_34__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_34__["MatHint"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_34__["MatLabel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_34__["MatPlaceholder"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_34__["MatPrefix"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_34__["MatSuffix"], _angular_material_input__WEBPACK_IMPORTED_MODULE_20__["MatInput"], _angular_material_input__WEBPACK_IMPORTED_MODULE_20__["MatTextareaAutosize"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__["MatGridList"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__["MatGridTile"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__["MatGridTileText"], _angular_material_core__WEBPACK_IMPORTED_MODULE_35__["MatLine"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__["MatGridTileHeaderCssMatStyler"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__["MatGridTileFooterCssMatStyler"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__["MatGridAvatarCssMatStyler"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_36__["CdkScrollable"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_21__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_21__["MatMenuItem"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_21__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_21__["MatMenuContent"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_9__["MatSlider"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_12__["MatSlideToggleRequiredValidator"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_12__["MatSlideToggle"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__["MatTabLabel"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__["MatTab"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__["MatTabNav"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__["MatTabLink"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__["MatTabContent"], _app_component__WEBPACK_IMPORTED_MODULE_3__["Olga"],
    _settings_settings_gamescore_settings_gamescore_component__WEBPACK_IMPORTED_MODULE_4__["GamescoreSettingsComponent"],
    _game_score_game_score_ux__WEBPACK_IMPORTED_MODULE_5__["GamescoreUxComponent"],
    _game_score_game_score_item_game_score_item_component__WEBPACK_IMPORTED_MODULE_14__["GameScoreItemComponent"],
    _common_toggle_switch_toggle_switch_component__WEBPACK_IMPORTED_MODULE_16__["ToggleSwitchComponent"],
    _common_labeled_slider_labeled_slider_component__WEBPACK_IMPORTED_MODULE_17__["LabeledSliderComponent"],
    _settings_settings_menu_settings_menu_component__WEBPACK_IMPORTED_MODULE_18__["SettingsMenuComponent"],
    _settings_settings_board_settings_board_component__WEBPACK_IMPORTED_MODULE_19__["SettingsBoardComponent"],
    _game_score_menu_game_score_item_menu_game_score_item_component__WEBPACK_IMPORTED_MODULE_23__["MenuGameScoreItemComponent"],
    _canvas_chessboard_canvas_chessboard_component__WEBPACK_IMPORTED_MODULE_27__["CanvasChessBoard"],
    _olga_controls_olga_controls_component__WEBPACK_IMPORTED_MODULE_28__["OlgaControlsComponent"],
    _olga_status_olga_status_component__WEBPACK_IMPORTED_MODULE_29__["OlgaStatusComponent"]], [_angular_common__WEBPACK_IMPORTED_MODULE_30__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["LowerCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["JsonPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["SlicePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["PercentPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["CurrencyPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["I18nPluralPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["I18nSelectPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["KeyValuePipe"]]);
_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetComponentScope"](_game_score_game_score_ux__WEBPACK_IMPORTED_MODULE_5__["GamescoreUxComponent"], [_angular_common__WEBPACK_IMPORTED_MODULE_30__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["NgComponentOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["NgPlural"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["NgPluralCase"], _angular_router__WEBPACK_IMPORTED_MODULE_31__["RouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_31__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_31__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_31__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_31__["ɵangular_packages_router_router_l"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatAnchor"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_32__["Dir"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardTitleGroup"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardActions"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardFooter"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardSmImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardMdImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardLgImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardXlImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardAvatar"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__["MatDivider"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__["MatIcon"], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_33__["CdkAutofill"], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_33__["CdkTextareaAutosize"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_34__["MatError"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_34__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_34__["MatHint"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_34__["MatLabel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_34__["MatPlaceholder"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_34__["MatPrefix"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_34__["MatSuffix"], _angular_material_input__WEBPACK_IMPORTED_MODULE_20__["MatInput"], _angular_material_input__WEBPACK_IMPORTED_MODULE_20__["MatTextareaAutosize"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__["MatGridList"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__["MatGridTile"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__["MatGridTileText"], _angular_material_core__WEBPACK_IMPORTED_MODULE_35__["MatLine"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__["MatGridTileHeaderCssMatStyler"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__["MatGridTileFooterCssMatStyler"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__["MatGridAvatarCssMatStyler"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_36__["CdkScrollable"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_21__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_21__["MatMenuItem"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_21__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_21__["MatMenuContent"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_9__["MatSlider"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_12__["MatSlideToggleRequiredValidator"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_12__["MatSlideToggle"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__["MatTabLabel"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__["MatTab"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__["MatTabNav"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__["MatTabLink"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__["MatTabContent"], _app_component__WEBPACK_IMPORTED_MODULE_3__["Olga"],
    _settings_settings_gamescore_settings_gamescore_component__WEBPACK_IMPORTED_MODULE_4__["GamescoreSettingsComponent"],
    _game_score_game_score_ux__WEBPACK_IMPORTED_MODULE_5__["GamescoreUxComponent"],
    _game_score_game_score_item_game_score_item_component__WEBPACK_IMPORTED_MODULE_14__["GameScoreItemComponent"],
    _common_toggle_switch_toggle_switch_component__WEBPACK_IMPORTED_MODULE_16__["ToggleSwitchComponent"],
    _common_labeled_slider_labeled_slider_component__WEBPACK_IMPORTED_MODULE_17__["LabeledSliderComponent"],
    _settings_settings_menu_settings_menu_component__WEBPACK_IMPORTED_MODULE_18__["SettingsMenuComponent"],
    _settings_settings_board_settings_board_component__WEBPACK_IMPORTED_MODULE_19__["SettingsBoardComponent"],
    _game_score_menu_game_score_item_menu_game_score_item_component__WEBPACK_IMPORTED_MODULE_23__["MenuGameScoreItemComponent"],
    _canvas_chessboard_canvas_chessboard_component__WEBPACK_IMPORTED_MODULE_27__["CanvasChessBoard"],
    _olga_controls_olga_controls_component__WEBPACK_IMPORTED_MODULE_28__["OlgaControlsComponent"],
    _olga_status_olga_status_component__WEBPACK_IMPORTED_MODULE_29__["OlgaStatusComponent"]], [_angular_common__WEBPACK_IMPORTED_MODULE_30__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["LowerCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["JsonPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["SlicePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["PercentPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["CurrencyPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["I18nPluralPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["I18nSelectPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["KeyValuePipe"]]);


/***/ }),

/***/ "./src/app/canvas-chessboard/canvas-chessboard.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/canvas-chessboard/canvas-chessboard.component.ts ***!
  \******************************************************************/
/*! exports provided: SquareNames, BoardTheme, BoardSettings, CanvasChessBoard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SquareNames", function() { return SquareNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardTheme", function() { return BoardTheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardSettings", function() { return BoardSettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanvasChessBoard", function() { return CanvasChessBoard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var fabric__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fabric */ "./node_modules/fabric/dist/fabric.js");
/* harmony import */ var fabric__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fabric__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _services_game_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/game.service */ "./src/app/services/game.service.ts");
/* harmony import */ var _services_colors_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/colors.service */ "./src/app/services/colors.service.ts");







const SquareNames = ['a1', 'b1', 'c1', 'd1', 'e1', 'f1', 'g1', 'h1', 'a2', 'b2', 'c2', 'd2', 'e2', 'f2', 'g2', 'h2', 'a3', 'b3', 'c3', 'd3', 'e3', 'f3', 'g3', 'h3', 'a4', 'b4', 'c4', 'd4', 'e4', 'f4', 'g4', 'h4', 'a5', 'b5', 'c5', 'd5', 'e5', 'f5', 'g5', 'h5', 'a6', 'b6', 'c6', 'd6', 'e6', 'f6', 'g6', 'h6', 'a7', 'b7', 'c7', 'd7', 'e7', 'f7', 'g7', 'h7', 'a8', 'b8', 'c8', 'd8', 'e8', 'f8', 'g8', 'h8'];
class BoardTheme {
    constructor(tileLight = '', tileDark = '', pieceSet = '', isSpriteSheet = false, fileExtension = '.svg') {
        this.tileLight = tileLight;
        this.tileDark = tileDark;
        this.pieceSet = pieceSet;
        this.isSpriteSheet = isSpriteSheet;
        this.fileExtension = fileExtension;
    }
}
class BoardSettings {
    constructor() {
        this.orientation = 'white';
    }
}
;
class CanvasChessBoard {
    constructor(gameService, colorService) {
        this.gameService = gameService;
        this.colorService = colorService;
        this.UUID = '';
        this.size = 320;
        this.tileSize = Math.floor(this.size / 8);
        this.interactive = true;
        this.promotionDialog = null;
        this.knightButton = null;
        this.bishopButton = null;
        this.rookButton = null;
        this.queenButton = null;
        this.theme = new BoardTheme();
        this.settings = new BoardSettings();
        this.pieceMap = new Map();
        this.pieces = [];
        this.tileGroup = null;
        this.tiles = [];
        this.canvas = null;
        this.selectedPiece = null;
        this.touching = false;
        this.midPromotion = false;
        this.gameService.attachBoard(this);
        if (this.gameService.game.value !== null) {
            this.setBoardToGamePosition();
        }
    }
    ngOnInit() { }
    ngAfterViewInit() {
        fabric__WEBPACK_IMPORTED_MODULE_1__["fabric"].Object.prototype.transparentCorners = false;
        this.canvas = new fabric__WEBPACK_IMPORTED_MODULE_1__["fabric"].Canvas(this.UUID + '-canvas');
        this.canvas.selection = false;
        const waitCount = this.loadPieces();
        waitCount.subscribe((count) => {
            if (count >= 12) {
                this.generateBoard();
                this.connectMouseInput();
                this.setBoardToGamePosition();
                waitCount.unsubscribe();
            }
        });
        this.canvas.hoverCursor = 'arrow';
        this.canvas.allowTouchScrolling = true;
        this.setInteractive(this.interactive);
    }
    addPiece(tile, color, role) {
        const col = tile % 8;
        const row = Math.floor(tile / 8);
        const padding = Math.floor((this.size - this.tileSize * 8) / 2);
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
                    if (this.settings.orientation == 'white') {
                        pieceObject.set('left', Math.floor(col * this.tileSize) + padding);
                        pieceObject.set('top', Math.floor((7 - row) * this.tileSize) + padding);
                    }
                    else {
                        pieceObject.set('left', Math.floor((7 - col) * this.tileSize) + padding);
                        pieceObject.set('top', Math.floor(row * this.tileSize) + padding);
                    }
                    pieceObject.scaleToHeight(this.tileSize);
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
    performPromotion(move) {
        if (move.promotion) {
            console.log('Promoting to ' + move.promotion.role);
            console.log('@ ' + SquareNames[move.to]);
            // remove old piece
            this.removePiece(move.to);
            this.addPiece(move.to, move.color, move.promotion.role);
            if (this.gameService.game.value) {
                this.gameService.game.value.performPromotion(move);
                this.closePromotionDialog();
            }
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
            const overlay = new fabric__WEBPACK_IMPORTED_MODULE_1__["fabric"].Rect({ width: this.size, height: this.size, left: 0, top: 0 });
            overlay.set('lockMovementX', true);
            overlay.set('lockMovementY', true);
            overlay.set('lockRotation', true);
            overlay.set('lockScalingX', true);
            overlay.set('lockScalingY', true);
            overlay.set('lockUniScaling', true);
            overlay.set('hasControls', false);
            overlay.set('hasBorders', false);
            overlay.set('selectable', false);
            overlay.set('opacity', .65);
            overlay.setCoords();
            overlay.setColor('#0a0a0a');
            group.push(overlay);
            // Create the background square (rounded rectangle 80% width 64% height vertically and horizontally centered)
            const height = .60 * this.size;
            const width = .8 * this.size;
            const bg = new fabric__WEBPACK_IMPORTED_MODULE_1__["fabric"].Rect({
                height: height, width: width, fill: this.colorService.bgMenu, left: (this.size - width) / 2, top: (this.size - height) / 2,
                rx: width * .02, ry: width * .02
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
            const title = new fabric__WEBPACK_IMPORTED_MODULE_1__["fabric"].Text('Promotion', { fontWeight: '100', fontSize: this.size * .07, fontFamily: 'Courier New' });
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
            title.set('left', this.size * .5);
            title.set('top', this.size * .235);
            title.setCoords();
            group.push(title);
            // Clone the promoted piece and tile and display them horizontally centered below title
            let x = this.size / 2;
            let y = (this.size * .38) + 4;
            const tileSize = this.size * .2;
            // Tile Clone
            const tileToClone = this.tiles[tileIndex];
            if (tileToClone) {
                tileToClone.tile.clone(((promotionTile) => {
                    promotionTile.set('top', y);
                    promotionTile.set('left', x);
                    promotionTile.set('originX', 'center');
                    promotionTile.set('originY', 'center');
                    promotionTile.scaleToHeight(tileSize);
                    promotionTile.setCoords();
                    group.push(promotionTile);
                }));
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
            const prompt = new fabric__WEBPACK_IMPORTED_MODULE_1__["fabric"].Text(color + ' has triggered promotion at', { fontSize: this.size * .04 });
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
            prompt.set('left', (this.size * .5) - 24);
            prompt.set('top', this.size * .53);
            prompt.setCoords();
            group.push(prompt);
            // Create text to right of triggered text with move
            const atText = new fabric__WEBPACK_IMPORTED_MODULE_1__["fabric"].Text(SquareNames[tileIndex], { fontSize: this.size * .055 });
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
            atText.set('left', (promptLeft ? promptLeft : this.size * .2) + ((promptWidth !== undefined ? promptWidth : 20) / 2) + this.size * .035);
            atText.set('top', this.size * .53);
            atText.setCoords();
            group.push(atText);
            // Create 4 clones of tiles, 4 clones of pieces (Knight, Bishop, Rook, And King)
            // Create the four tiles
            y = (this.size * .67) + 4;
            x = (this.size * .205);
            const choiceSize = tileSize * .75;
            if (tileToClone) {
                let buttonGroup = [];
                tileToClone.tile.clone(((tile) => {
                    tile.set('originX', 'left');
                    tile.set('originY', 'top');
                    tile.set('stroke', this.colorService.gsTextColorHG.value);
                    tile.set('strokeWidth', 2);
                    tile.set('top', 0);
                    tile.set('left', 0);
                    tile.scaleToHeight(choiceSize);
                    tile.setCoords();
                    buttonGroup.push(tile);
                }));
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
                x = (this.size * .4);
                tileToClone.tile.clone(((tile) => {
                    tile.set('originX', 'left');
                    tile.set('originY', 'top');
                    tile.set('stroke', this.colorService.gsTextColorHG.value);
                    tile.set('strokeWidth', 2);
                    tile.set('top', 0);
                    tile.set('left', 0);
                    tile.scaleToHeight(choiceSize);
                    tile.setCoords();
                    buttonGroup2.push(tile);
                }));
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
                x = (this.size * .595);
                let buttonGroup3 = [];
                tileToClone.tile.clone(((tile) => {
                    tile.set('originX', 'left');
                    tile.set('originY', 'top');
                    tile.set('stroke', this.colorService.gsTextColorHG.value);
                    tile.set('strokeWidth', 2);
                    tile.set('top', 0);
                    tile.set('left', 0);
                    tile.scaleToHeight(choiceSize);
                    tile.setCoords();
                    buttonGroup3.push(tile);
                }));
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
                x = (this.size * .79);
                let buttonGroup4 = [];
                tileToClone.tile.clone(((tile) => {
                    tile.set('originX', 'left');
                    tile.set('originY', 'top');
                    tile.set('stroke', this.colorService.gsTextColorHG.value);
                    tile.set('strokeWidth', 2);
                    tile.set('top', 0);
                    tile.set('left', 0);
                    tile.scaleToHeight(choiceSize);
                    tile.setCoords();
                    buttonGroup4.push(tile);
                }));
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
            this.promotionDialog = new fabric__WEBPACK_IMPORTED_MODULE_1__["fabric"].Group(group, { left: 0, top: 0, width: this.size, height: this.size });
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
                if (this.settings.orientation == 'white') {
                    piece.object.set('left', col * this.tileSize);
                    piece.object.set('top', (7 - row) * this.tileSize);
                }
                else {
                    piece.object.set('left', (7 - col) * this.tileSize);
                    piece.object.set('top', row * this.tileSize);
                }
                const to = (row * 8) + col;
                const capture = this.pieces[to];
                if (capture) {
                    (_a = this.canvas) === null || _a === void 0 ? void 0 : _a.remove(capture.object);
                }
                piece.tile = to;
                this.pieces[to] = piece;
                this.tiles[to].piece = { color: move.color, role: move.role };
                // piece.object.moveTo(10);
                // this.promotionDialog?.moveTo(500);
                piece.object.setCoords();
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
                if (this.settings.orientation == 'white') {
                    piece.object.set('left', col * this.tileSize);
                    piece.object.set('top', (7 - row) * this.tileSize);
                }
                else {
                    piece.object.set('left', (7 - col) * this.tileSize);
                    piece.object.set('top', row * this.tileSize);
                }
                const from = (row * 8) + col;
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
            if (this.settings.orientation == 'white') {
                piece.set('left', col * this.tileSize);
                piece.set('top', (7 - row) * this.tileSize);
            }
            else {
                piece.set('left', (7 - col) * this.tileSize);
                piece.set('top', row * this.tileSize);
            }
            piece.moveTo(10);
            (_a = this.promotionDialog) === null || _a === void 0 ? void 0 : _a.moveTo(500);
            piece.setCoords();
        }
    }
    // Move to just board functions
    // movePiece(to, from);
    // removePiece(tile);
    // addPiece(tile, piece);
    // clearPieces();
    // 
    checkPieceCanMove(fromData, toData) { return true; }
    isValidDrop(from, to) {
        if (this.gameService.game.value !== null) {
            const position = this.gameService.game.value.getPosition();
            const legal = position.isMoveLegal(SquareNames[from], SquareNames[to]);
            return legal !== false;
        }
        return false;
    }
    checkValidDrop(e) {
        var _a;
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
            const tile = ((row * 8) + col);
            const move = new _services_game_service__WEBPACK_IMPORTED_MODULE_3__["ChessMove"]();
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
                if (this.isValidDrop(this.selectedPiece.tile, tile) && this.gameService.game.value !== null) {
                    this.gameService.game.value.makeMove(move);
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
            const tileIndex = ((row * 8) + col);
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
        const tileIndex = ((row * 8) + col);
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
        this.pieces.forEach((piece) => {
            var _a;
            (_a = this.canvas) === null || _a === void 0 ? void 0 : _a.remove(piece.object);
        });
        this.pieces = [];
        this.tiles.forEach((tileData) => {
            var _a;
            (_a = this.canvas) === null || _a === void 0 ? void 0 : _a.remove(tileData.tile);
        });
        this.tiles = [];
    }
    clearMaterial() {
        this.pieces.forEach((piece) => {
            var _a;
            (_a = this.canvas) === null || _a === void 0 ? void 0 : _a.remove(piece.object);
        });
        this.pieces = [];
    }
    connectMouseInput() {
        if (this.canvas) {
            this.canvas.on('object:moved', this.checkValidDrop.bind(this));
            this.canvas.on('mouse:down', this.selectPiece.bind(this));
        }
    }
    generateTiles() {
        if (this.canvas) {
            if (!this.theme) {
                console.log('Cannot generate board without theme');
                return;
            }
            const tiles = [];
            const padding = Math.floor((this.size - this.tileSize * 8) / 2);
            for (let row = 7; row >= 0; row--) {
                for (let col = 0; col < 8; col++) {
                    // move this to clone feature, only create the tiles once.
                    const tile = new fabric__WEBPACK_IMPORTED_MODULE_1__["fabric"].Rect({
                        width: this.tileSize,
                        height: this.tileSize
                    });
                    // create piece
                    if (this.settings.orientation == 'white') {
                        tile.set('left', col * this.tileSize + padding);
                        tile.set('top', row * this.tileSize + padding);
                    }
                    else {
                        tile.set('left', col * this.tileSize + padding);
                        tile.set('top', row * this.tileSize + padding);
                    }
                    tile.set('lockMovementX', true);
                    tile.set('lockMovementY', true);
                    tile.set('lockRotation', true);
                    tile.set('lockScalingX', true);
                    tile.set('lockScalingY', true);
                    tile.set('lockUniScaling', true);
                    tile.set('hasControls', false);
                    tile.set('hasBorders', false);
                    tile.set('selectable', false);
                    tile.setCoords();
                    if (row % 2 === 0) {
                        // even row 0, 2, 4, 6
                        if (col % 2 === 0) {
                            tile.setColor(this.theme.tileLight);
                        }
                        else {
                            tile.setColor(this.theme.tileDark);
                        }
                    }
                    else {
                        // odd row 1, 3, 5, 7
                        if (col % 2 === 0) {
                            tile.setColor(this.theme.tileDark);
                        }
                        else {
                            tile.setColor(this.theme.tileLight);
                        }
                    }
                    this.tiles.push({ tile: tile });
                    tiles.push(tile);
                }
            }
            const tileGroup = new fabric__WEBPACK_IMPORTED_MODULE_1__["fabric"].Group(tiles, {
                left: 0, top: 0
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
            this.canvas.add(tileGroup);
            this.tileGroup = tileGroup;
            tileGroup.moveTo(-30);
            this.canvas.requestRenderAll();
        }
    }
    addTile(tileData) {
        if (this.canvas) {
            this.canvas.add(tileData.tile);
            tileData.tile.moveTo(-100);
            tileData.tile.setCoords();
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
        this.clearBoard();
        this.generateTiles();
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
    resizeBoardObjects(size) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0;
        const padding = Math.floor((this.size - (this.tileSize * 8)) / 2);
        if (this.tileGroup) {
            const border = padding / 2;
            this.tileGroup.set('top', border);
            this.tileGroup.set('left', border);
            this.tileGroup.scaleToHeight((this.tileSize * 8) + border);
            this.tileGroup.scaleToWidth((this.tileSize * 8) + border);
            this.tileGroup.moveTo(-300);
            this.tileGroup.setCoords();
        }
        // if (this.tiles.length > 0) {
        //   for (let index = 0; index < 64; index++) {
        //     const tile = this.tiles[index].tile;
        //     const row = Math.floor(index / 8);
        //     const col = index % 8;
        //     tile.set('originX', 'left');
        //     tile.set('originY', 'top');
        //     tile.set('width', this.tileSize);
        //     tile.set('height', this.tileSize);
        //     tile.set('top', row * this.tileSize);
        //     tile.set('left', col * this.tileSize);
        //     tile.setCoords();
        //   }
        // }
        this.pieces.forEach((pieceData) => {
            const piece = pieceData.object;
            if (piece.left !== undefined &&
                piece.top !== undefined &&
                this.canvas) {
                const row = Math.floor(pieceData.tile / 8);
                const col = pieceData.tile % 8;
                piece.scaleToHeight(this.tileSize);
                if (this.settings.orientation == 'white') {
                    piece.set('left', Math.floor(col * this.tileSize) + padding);
                    piece.set('top', Math.floor((7 - row) * this.tileSize) + padding);
                }
                else {
                    piece.set('left', Math.floor((7 - col) * this.tileSize) + padding);
                    piece.set('top', Math.floor(row * this.tileSize) + padding);
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
            let y = (this.size * .67) + 4;
            let x = (this.size * .205);
            (_b = this.knightButton) === null || _b === void 0 ? void 0 : _b.scaleToHeight(this.size * .15);
            (_c = this.knightButton) === null || _c === void 0 ? void 0 : _c.scaleToWidth(this.size * .15);
            (_d = this.knightButton) === null || _d === void 0 ? void 0 : _d.set('left', x);
            (_e = this.knightButton) === null || _e === void 0 ? void 0 : _e.set('top', y);
            (_f = this.knightButton) === null || _f === void 0 ? void 0 : _f.moveTo(510);
            (_g = this.knightButton) === null || _g === void 0 ? void 0 : _g.setCoords();
            // bishop
            x = (this.size * .4);
            (_h = this.bishopButton) === null || _h === void 0 ? void 0 : _h.scaleToHeight(this.size * .15);
            (_j = this.bishopButton) === null || _j === void 0 ? void 0 : _j.scaleToWidth(this.size * .15);
            (_k = this.bishopButton) === null || _k === void 0 ? void 0 : _k.set('left', x);
            (_l = this.bishopButton) === null || _l === void 0 ? void 0 : _l.set('top', y);
            (_m = this.bishopButton) === null || _m === void 0 ? void 0 : _m.moveTo(510);
            (_o = this.bishopButton) === null || _o === void 0 ? void 0 : _o.setCoords();
            // rook
            x = (this.size * .595);
            (_p = this.rookButton) === null || _p === void 0 ? void 0 : _p.scaleToHeight(this.size * .15);
            (_q = this.rookButton) === null || _q === void 0 ? void 0 : _q.scaleToWidth(this.size * .15);
            (_r = this.rookButton) === null || _r === void 0 ? void 0 : _r.set('left', x);
            (_s = this.rookButton) === null || _s === void 0 ? void 0 : _s.set('top', y);
            (_t = this.rookButton) === null || _t === void 0 ? void 0 : _t.moveTo(510);
            (_u = this.rookButton) === null || _u === void 0 ? void 0 : _u.setCoords();
            // queen
            x = (this.size * .79);
            (_v = this.queenButton) === null || _v === void 0 ? void 0 : _v.scaleToHeight(this.size * .15);
            (_w = this.queenButton) === null || _w === void 0 ? void 0 : _w.scaleToWidth(this.size * .15);
            (_x = this.queenButton) === null || _x === void 0 ? void 0 : _x.set('left', x);
            (_y = this.queenButton) === null || _y === void 0 ? void 0 : _y.set('top', y);
            (_z = this.queenButton) === null || _z === void 0 ? void 0 : _z.moveTo(510);
            (_0 = this.queenButton) === null || _0 === void 0 ? void 0 : _0.setCoords();
        }
    }
    setDarkTile(color) {
        var _a;
        if (this.theme) {
            this.theme.tileDark = color;
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
            (_a = this.canvas) === null || _a === void 0 ? void 0 : _a.requestRenderAll();
        }
        else {
            console.log('Cannot set board-canvas tile dark with Null theme');
        }
    }
    setLightTile(color) {
        var _a;
        if (this.theme) {
            this.theme.tileLight = color;
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
            (_a = this.canvas) === null || _a === void 0 ? void 0 : _a.requestRenderAll();
        }
        else {
            console.log('Cannot set board-canvas tile light with Null theme');
        }
    }
    setSize(size) {
        if (this.canvas) {
            this.size = size;
            this.tileSize = Math.floor(size / 8);
            this.canvas.width = size;
            this.canvas.height = size;
            this.canvas.setDimensions({
                width: size,
                height: size,
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
    setBoardToGamePosition() {
        this.clearMaterial();
        if (this.gameService.game.value !== null) {
            const position = this.gameService.game.value.getPosition();
            if (position) {
                for (let index = 0; index < 64; ++index) {
                    const squareData = position.square(SquareNames[index]);
                    // get the first and last of the role and color
                    if (squareData.length >= 2) {
                        this.addPiece(index, squareData[0], squareData[1].toUpperCase());
                    }
                }
            }
        }
    }
    requestRedraw() {
        this.clearBoard();
        this.generateBoard();
    }
}
CanvasChessBoard.ɵfac = function CanvasChessBoard_Factory(t) { return new (t || CanvasChessBoard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_game_service__WEBPACK_IMPORTED_MODULE_3__["GameService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_colors_service__WEBPACK_IMPORTED_MODULE_4__["ColorService"])); };
CanvasChessBoard.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CanvasChessBoard, selectors: [["canvas-chessboard"]], inputs: { UUID: "UUID", size: "size", interactive: "interactive", theme: "theme", settings: "settings", selectedPiece: "selectedPiece" }, outputs: { tileSize: "tileSize", theme: "theme", settings: "settings", pieceMap: "pieceMap", pieces: "pieces", tileGroup: "tileGroup", tiles: "tiles", canvas: "canvas", selectedPiece: "selectedPiece", touching: "touching", midPromotion: "midPromotion" }, decls: 1, vars: 13, consts: [["resize", "", 2, "position", "absolute", 3, "id", "height", "width"]], template: function CanvasChessBoard_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "canvas", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("top", 0)("left", 0)("width", ctx.size, "px")("height", ctx.size, "px")("z-index", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "", ctx.UUID, "-canvas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("height", ctx.size)("width", ctx.size);
    } }, styles: ["canvas[_ngcontent-%COMP%] {\n  cursor: grab;\n  border: 2px solid black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FudmFzLWNoZXNzYm9hcmQvY2FudmFzLWNoZXNzYm9hcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsdUJBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2NhbnZhcy1jaGVzc2JvYXJkL2NhbnZhcy1jaGVzc2JvYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiY2FudmFze1xyXG4gICAgY3Vyc29yOiBncmFiO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CanvasChessBoard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'canvas-chessboard',
                templateUrl: './canvas-chessboard.component.html',
                styleUrls: ['./canvas-chessboard.component.scss'],
            }]
    }], function () { return [{ type: _services_game_service__WEBPACK_IMPORTED_MODULE_3__["GameService"] }, { type: _services_colors_service__WEBPACK_IMPORTED_MODULE_4__["ColorService"] }]; }, { UUID: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], size: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], tileSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], interactive: [{
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
        }], tileGroup: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], tiles: [{
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
        }] }); })();


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
/* harmony import */ var _services_game_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/game.service */ "./src/app/services/game.service.ts");
/* harmony import */ var src_app_services_olga_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/olga.service */ "./src/app/services/olga.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function GameScoreItemComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("gsi-ply ", ctx_r3.typeName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.data == null ? null : ctx_r3.data.moveData == null ? null : ctx_r3.data.moveData.ply, "");
} }
function GameScoreItemComponent_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("gsi-movew ", ctx_r4.typeName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.data == null ? null : ctx_r4.data.moveData == null ? null : ctx_r4.data.moveData.move);
} }
function GameScoreItemComponent_div_0_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("gsi-moveb ", ctx_r5.typeName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.data == null ? null : ctx_r5.data.moveData == null ? null : ctx_r5.data.moveData.move);
} }
function GameScoreItemComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GameScoreItemComponent_div_0_div_1_Template, 2, 4, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GameScoreItemComponent_div_0_div_2_Template, 2, 4, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, GameScoreItemComponent_div_0_div_3_Template, 2, 4, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("gsi-container ", ctx_r0.typeName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.showPly());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isFullPly());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.isFullPly());
} }
function GameScoreItemComponent_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("gsi-ply ", ctx_r6.typeName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r6.data == null ? null : ctx_r6.data.moveData == null ? null : ctx_r6.data.moveData.ply);
} }
function GameScoreItemComponent_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("gsi-movew ", ctx_r7.typeName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r7.data == null ? null : ctx_r7.data.moveData == null ? null : ctx_r7.data.moveData.move);
} }
function GameScoreItemComponent_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("gsi-moveb ", ctx_r8.typeName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r8.data == null ? null : ctx_r8.data.moveData == null ? null : ctx_r8.data.moveData.move);
} }
function GameScoreItemComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GameScoreItemComponent_div_1_div_1_Template, 2, 4, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GameScoreItemComponent_div_1_div_2_Template, 2, 4, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, GameScoreItemComponent_div_1_div_3_Template, 2, 4, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("gsi-container ", ctx_r1.typeName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.showPly());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.isFullPly());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.isFullPly());
} }
function GameScoreItemComponent_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("gsi-ply ", ctx_r9.typeName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r9.data == null ? null : ctx_r9.data.moveData == null ? null : ctx_r9.data.moveData.ply);
} }
function GameScoreItemComponent_div_2_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("gsi-movew ", ctx_r10.typeName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r10.data == null ? null : ctx_r10.data.moveData == null ? null : ctx_r10.data.moveData.move);
} }
function GameScoreItemComponent_div_2_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("gsi-moveb ", ctx_r11.typeName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r11.data == null ? null : ctx_r11.data.moveData == null ? null : ctx_r11.data.moveData.move);
} }
function GameScoreItemComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GameScoreItemComponent_div_2_div_1_Template, 2, 4, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GameScoreItemComponent_div_2_div_2_Template, 2, 4, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, GameScoreItemComponent_div_2_div_3_Template, 2, 4, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("gsi-container ", ctx_r2.typeName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.showPly());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.isFullPly());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.isFullPly());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("gsi-comment ", ctx_r2.typeName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r2.data == null ? null : ctx_r2.data.annotationData == null ? null : ctx_r2.data.annotationData.annotation, " ");
} }
class GameScoreItemComponent {
    constructor(olga, gameService) {
        // use data to actually set type
        this.olga = olga;
        this.gameService = gameService;
        this.data = null;
        this.type = _services_game_service__WEBPACK_IMPORTED_MODULE_1__["GameScoreType"].GameScoreGroup;
        this.typeName = '';
        this.GameScoreType = _services_game_service__WEBPACK_IMPORTED_MODULE_1__["GameScoreType"];
    }
    ngOnInit() {
        if (this.data && this.data.type) {
            this.type = this.data.type;
            this.typeName = this.gameService.typeToString(this.type) + (this.data.current ? ' current-move' : '');
        }
        else {
            this.typeName = this.gameService.typeToString(this.type);
        }
    }
    ngOnChanges(changes) {
        if (changes.data) {
            let newData = changes.data.currentValue;
            this.data = newData;
        }
        this.updateTypeName();
    }
    ngAfterViewInit() {
    }
    showPly() {
        if (this.data && this.data.moveData) {
            if (this.data.moveData.ply == Math.ceil(this.data.moveData.ply)) {
                return this.olga.showingPly.value;
            }
            return this.olga.showingHalfPly.value;
        }
        return false;
    }
    isFullPly() {
        if (this.data && this.data.moveData) {
            return this.data.moveData.ply == Math.ceil(this.data.moveData.ply);
        }
        return false;
    }
    setCurrent(current) {
        if (this.data) {
            this.data.current = current;
            this.updateTypeName();
        }
    }
    updateTypeName() {
        if (this.data && this.data.type) {
            this.type = this.data.type;
            this.typeName = this.gameService.typeToString(this.type) + (this.data.current ? ' current-move' : '');
        }
        else {
            this.typeName = this.gameService.typeToString(this.type);
        }
    }
}
GameScoreItemComponent.ɵfac = function GameScoreItemComponent_Factory(t) { return new (t || GameScoreItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_olga_service__WEBPACK_IMPORTED_MODULE_2__["OlgaService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_game_service__WEBPACK_IMPORTED_MODULE_1__["GameService"])); };
GameScoreItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GameScoreItemComponent, selectors: [["app-game-score-item"]], inputs: { data: "data" }, outputs: { data: "data", type: "type", typeName: "typeName" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 3, vars: 3, consts: [[3, "class", 4, "ngIf"]], template: function GameScoreItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, GameScoreItemComponent_div_0_Template, 4, 6, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GameScoreItemComponent_div_1_Template, 4, 6, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GameScoreItemComponent_div_2_Template, 6, 10, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === ctx.GameScoreType.GameScoreGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === ctx.GameScoreType.Variation);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === ctx.GameScoreType.Annotation);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: ["@font-face {\n  font-family: \"Caveat\";\n  src: url('Caveat-Bold.woff2') format(\"woff2\"), url('Caveat-Bold.woff') format(\"woff\");\n  font-weight: bold;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"Caveat\";\n  src: url('Caveat-Regular.woff2') format(\"woff2\"), url('Caveat-Regular.woff') format(\"woff\");\n  font-weight: 600;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"FigurineSymbolT1\";\n  src: url('FigurineSymbolT1Bold.woff2') format(\"woff2\"), url('FigurineSymbolT1Bold.woff') format(\"woff\");\n  font-weight: bold;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"FigurineSymbolT1\";\n  src: url('FigurineSymbolT1.woff2') format(\"woff2\"), url('FigurineSymbolT1.woff') format(\"woff\");\n  font-weight: 600;\n  font-style: normal;\n  font-display: swap;\n}\n\n\n\n\n\n\n\n[_ngcontent-%COMP%]:root {\n  --bg-color: #f2f3f7;\n  --fg-color: #383a41;\n  --red: #e43030;\n  --green: #19a187;\n  --blue: #367bf0;\n  --dark-blue: #265ab1;\n  --maroon: #b8174c;\n  --purple: #8c42ab;\n}\n[_ngcontent-%COMP%]::-moz-focus-inner, [_ngcontent-%COMP%]:-moz-focusring {\n  border: 0;\n  color: transparent;\n  text-shadow: 0 0 0 #383a41;\n}\n[_ngcontent-%COMP%]::selection, [_ngcontent-%COMP%]::-moz-selection {\n  color: white;\n  background: black;\n}\n*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  outline: none;\n  user-select: none;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  -webkit-appearance: none;\n  -webkit-tap-highlight-color: transparent !important;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0) !important;\n  -webkit-touch-callout: none;\n  cursor: default;\n  letter-spacing: 0;\n}\n.selectable[_ngcontent-%COMP%], .selectable[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  cursor: auto;\n  user-select: text;\n  -webkit-touch-callout: text;\n  -webkit-user-select: text;\n  -khtml-user-select: text;\n  -moz-user-select: text;\n  -ms-user-select: text;\n}\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  background-color: #f2f3f7;\n  color: #383a41;\n  margin: 0;\n  padding: 0;\n  font-size: 10pt;\n  height: 100%;\n  overflow: auto;\n}\n.with-shadow[_ngcontent-%COMP%], .outset[_ngcontent-%COMP%], button[_ngcontent-%COMP%], .checktext[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]    + span[_ngcontent-%COMP%], .blue-button[_ngcontent-%COMP%], .checktext[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + span[_ngcontent-%COMP%], button.blue-button[_ngcontent-%COMP%], .red-button.blue-button[_ngcontent-%COMP%], .green-button.blue-button[_ngcontent-%COMP%], .green-button[_ngcontent-%COMP%], button.green-button[_ngcontent-%COMP%], .red-button.green-button[_ngcontent-%COMP%], .red-button[_ngcontent-%COMP%], button.red-button[_ngcontent-%COMP%], input[type=button][_ngcontent-%COMP%], input[type=submit][_ngcontent-%COMP%], input[type=reset][_ngcontent-%COMP%], select[_ngcontent-%COMP%], input[type=text][_ngcontent-%COMP%]:not(select):focus, input[type=search][_ngcontent-%COMP%]:not(select):focus, input[type=tel][_ngcontent-%COMP%]:not(select):focus, input[type=url][_ngcontent-%COMP%]:not(select):focus, input[type=email][_ngcontent-%COMP%]:not(select):focus, input[type=password][_ngcontent-%COMP%]:not(select):focus, input[type=date][_ngcontent-%COMP%]:not(select):focus, input[type=month][_ngcontent-%COMP%]:not(select):focus, input[type=week][_ngcontent-%COMP%]:not(select):focus, input[type=time][_ngcontent-%COMP%]:not(select):focus, input[type=number][_ngcontent-%COMP%]:not(select):focus, input[type=color][_ngcontent-%COMP%]:not(select):focus, select[_ngcontent-%COMP%]:not(select):focus, textarea[_ngcontent-%COMP%]:not(select):focus, .paper[_ngcontent-%COMP%] {\n  box-shadow: 6px 6px 10px rgba(0, 0, 0, 0.1), -6px -6px 10px white;\n}\n.outset[_ngcontent-%COMP%], button[_ngcontent-%COMP%], .checktext[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]    + span[_ngcontent-%COMP%], .blue-button[_ngcontent-%COMP%], .checktext[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + span[_ngcontent-%COMP%], button.blue-button[_ngcontent-%COMP%], .red-button.blue-button[_ngcontent-%COMP%], .green-button.blue-button[_ngcontent-%COMP%], .green-button[_ngcontent-%COMP%], button.green-button[_ngcontent-%COMP%], .red-button.green-button[_ngcontent-%COMP%], .red-button[_ngcontent-%COMP%], button.red-button[_ngcontent-%COMP%], input[type=button][_ngcontent-%COMP%], input[type=submit][_ngcontent-%COMP%], input[type=reset][_ngcontent-%COMP%], select[_ngcontent-%COMP%], input[type=text][_ngcontent-%COMP%]:not(select):focus, input[type=search][_ngcontent-%COMP%]:not(select):focus, input[type=tel][_ngcontent-%COMP%]:not(select):focus, input[type=url][_ngcontent-%COMP%]:not(select):focus, input[type=email][_ngcontent-%COMP%]:not(select):focus, input[type=password][_ngcontent-%COMP%]:not(select):focus, input[type=date][_ngcontent-%COMP%]:not(select):focus, input[type=month][_ngcontent-%COMP%]:not(select):focus, input[type=week][_ngcontent-%COMP%]:not(select):focus, input[type=time][_ngcontent-%COMP%]:not(select):focus, input[type=number][_ngcontent-%COMP%]:not(select):focus, input[type=color][_ngcontent-%COMP%]:not(select):focus, select[_ngcontent-%COMP%]:not(select):focus, textarea[_ngcontent-%COMP%]:not(select):focus, .paper[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  background: #f2f3f7;\n}\n.inset[_ngcontent-%COMP%], hr[_ngcontent-%COMP%], button.active[_ngcontent-%COMP%], .checktext[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]    + span.active[_ngcontent-%COMP%], .active.blue-button[_ngcontent-%COMP%], .active.green-button[_ngcontent-%COMP%], .active.red-button[_ngcontent-%COMP%], button[_ngcontent-%COMP%]:active, .checktext[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]    + span[_ngcontent-%COMP%]:active, .blue-button[_ngcontent-%COMP%]:active, .green-button[_ngcontent-%COMP%]:active, .red-button[_ngcontent-%COMP%]:active, input[type=button].active[_ngcontent-%COMP%], input[type=button][_ngcontent-%COMP%]:active, input[type=submit].active[_ngcontent-%COMP%], input[type=submit][_ngcontent-%COMP%]:active, input[type=reset].active[_ngcontent-%COMP%], input[type=reset][_ngcontent-%COMP%]:active, input[type=text][_ngcontent-%COMP%]:not(select), input[type=search][_ngcontent-%COMP%]:not(select), input[type=tel][_ngcontent-%COMP%]:not(select), input[type=url][_ngcontent-%COMP%]:not(select), input[type=email][_ngcontent-%COMP%]:not(select), input[type=password][_ngcontent-%COMP%]:not(select), input[type=date][_ngcontent-%COMP%]:not(select), input[type=month][_ngcontent-%COMP%]:not(select), input[type=week][_ngcontent-%COMP%]:not(select), input[type=time][_ngcontent-%COMP%]:not(select), input[type=number][_ngcontent-%COMP%]:not(select), input[type=color][_ngcontent-%COMP%]:not(select), select[_ngcontent-%COMP%]:not(select), textarea[_ngcontent-%COMP%]:not(select) {\n  border-radius: 10px;\n  box-shadow: 0 0 transparent, 0 0 transparent, inset 3px 3px 5px rgba(0, 0, 0, 0.1), inset -3px -3px 5px white;\n  background: #f8f9fb;\n}\n.paper[_ngcontent-%COMP%] {\n  padding: 10px 20px 20px;\n  margin-top: 20px;\n  min-height: 100px;\n  font-size: 1.2em;\n  background: #f2f3f7;\n}\nsection[_ngcontent-%COMP%], article[_ngcontent-%COMP%], .section[_ngcontent-%COMP%], .article[_ngcontent-%COMP%], .paper[_ngcontent-%COMP%] {\n  line-height: 2em;\n  word-wrap: break-word;\n  word-break: normal;\n  line-height: 2em;\n}\ninput[type=text][_ngcontent-%COMP%], input[type=search][_ngcontent-%COMP%], input[type=tel][_ngcontent-%COMP%], input[type=url][_ngcontent-%COMP%], input[type=email][_ngcontent-%COMP%], input[type=password][_ngcontent-%COMP%], input[type=date][_ngcontent-%COMP%], input[type=month][_ngcontent-%COMP%], input[type=week][_ngcontent-%COMP%], input[type=time][_ngcontent-%COMP%], input[type=number][_ngcontent-%COMP%], input[type=color][_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  border: 0;\n  background: #f2f3f7;\n  color: #383a41;\n  font-weight: normal;\n  padding: 0 1.25em;\n  line-height: 1.25em;\n  height: 3.5em;\n  margin: 10px 0;\n  font-size: 1.1rem;\n  cursor: text;\n  user-select: text;\n  -webkit-touch-callout: text;\n  -webkit-user-select: text;\n  -khtml-user-select: text;\n  -moz-user-select: text;\n  -ms-user-select: text;\n  transition: box-shadow 0.2s;\n}\ntextarea[_ngcontent-%COMP%] {\n  height: 350px;\n  padding: 1.25em;\n}\nselect[_ngcontent-%COMP%] {\n  cursor: pointer;\n  background: url(data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAxOSAxOSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyB0cmFuc2Zvcm09Im1hdHJpeCguMDM0IDAgMCAuMDM0IC02LjggMS43ZS01KSIgc3R5bGU9ImZpbGw6IzdiN2U4YyI+PHBhdGggZD0ibTQ4MCAzNDQtMjExLTIxMmMtMTYtMTYtNDEtMTYtNTcgMC0xNiAxNi0xNiA0MiAwIDU3bDIzOCAyMzljOC40IDguNSAyMCAxMiAzMSAxMiAxMSAwLjU2IDIyLTMuMiAzMS0xMmwyMzgtMjM5YzE2LTE2IDE2LTQyIDAtNTdzLTQxLTE2LTU3IDB6IiBzdHlsZT0iZmlsbDojN2I3ZThjIi8+PC9nPjwvc3ZnPgo=) no-repeat right 1em center;\n  background-size: 1.2em;\n  padding-right: 3em;\n}\ninput[_ngcontent-%COMP%]::placeholder, textarea[_ngcontent-%COMP%]::placeholder {\n  opacity: 1;\n  transition: opacity 0.2s;\n  color: inherit;\n}\ninput[_ngcontent-%COMP%]:focus::placeholder, textarea[_ngcontent-%COMP%]:focus::placeholder {\n  opacity: 0.2;\n}\ninput[_ngcontent-%COMP%]:-ms-input-placeholder, textarea[_ngcontent-%COMP%]:-ms-input-placeholder {\n  opacity: 1;\n  -ms-transition: opacity 0.2s;\n  transition: opacity 0.2s;\n  color: inherit;\n}\ninput[_ngcontent-%COMP%]:focus:-ms-input-placeholder, textarea[_ngcontent-%COMP%]:focus:-ms-input-placeholder {\n  opacity: 0.2;\n}\ninput[type=search][_ngcontent-%COMP%]::-webkit-search-decoration, input[type=search][_ngcontent-%COMP%]::-webkit-search-cancel-button, input[type=search][_ngcontent-%COMP%]::-webkit-search-results-button, input[type=search][_ngcontent-%COMP%]::-webkit-search-results-decoration {\n  display: none;\n}\nbutton[_ngcontent-%COMP%], .checktext[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]    + span[_ngcontent-%COMP%], .blue-button[_ngcontent-%COMP%], .checktext[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + span[_ngcontent-%COMP%], button.blue-button[_ngcontent-%COMP%], .red-button.blue-button[_ngcontent-%COMP%], .green-button.blue-button[_ngcontent-%COMP%], .green-button[_ngcontent-%COMP%], button.green-button[_ngcontent-%COMP%], .red-button.green-button[_ngcontent-%COMP%], .red-button[_ngcontent-%COMP%], button.red-button[_ngcontent-%COMP%], input[type=button][_ngcontent-%COMP%], input[type=submit][_ngcontent-%COMP%], input[type=reset][_ngcontent-%COMP%] {\n  border: 0;\n  text-transform: capitalize;\n  padding: 10px 0;\n  width: 8em;\n  text-align: center;\n  cursor: pointer;\n  color: inherit;\n  font-size: 1.1rem;\n  transition-property: background-color, box-shadow;\n  transition-delay: 0.2s;\n  transition-duration: 0.2s;\n}\nbutton.active[_ngcontent-%COMP%], .checktext[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]    + span.active[_ngcontent-%COMP%], .active.blue-button[_ngcontent-%COMP%], .active.green-button[_ngcontent-%COMP%], .active.red-button[_ngcontent-%COMP%], button[_ngcontent-%COMP%]:active, .checktext[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]    + span[_ngcontent-%COMP%]:active, .blue-button[_ngcontent-%COMP%]:active, .green-button[_ngcontent-%COMP%]:active, .red-button[_ngcontent-%COMP%]:active, input[type=button].active[_ngcontent-%COMP%], input[type=button][_ngcontent-%COMP%]:active, input[type=submit].active[_ngcontent-%COMP%], input[type=submit][_ngcontent-%COMP%]:active, input[type=reset].active[_ngcontent-%COMP%], input[type=reset][_ngcontent-%COMP%]:active {\n  transition-delay: 0s;\n  transition-duration: 0.1s;\n}\n.red-button[_ngcontent-%COMP%], button.red-button[_ngcontent-%COMP%], .checktext[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]    + span.red-button[_ngcontent-%COMP%], .red-button.blue-button[_ngcontent-%COMP%], .red-button.green-button[_ngcontent-%COMP%], input[type=button].red-button[_ngcontent-%COMP%], input[type=submit].red-button[_ngcontent-%COMP%], input[type=reset].red-button[_ngcontent-%COMP%] {\n  color: white;\n  font-weight: bold;\n  text-shadow: 0 0.1em 0.1em rgba(0, 0, 0, 0.7);\n  background: linear-gradient(to top, #e43030 30%, #e84b4b 80%);\n  box-shadow: 0 0 0.5em rgba(228, 48, 48, 0.7), 0 0 transparent, inset 0 -5px 0 rgba(0, 0, 0, 0.05), inset 0 2px 0 rgba(255, 255, 255, 0.2);\n  border-radius: 6px 6px 8px 8px;\n  transition-property: box-shadow, border-radius;\n}\n.red-button.active[_ngcontent-%COMP%], .red-button[_ngcontent-%COMP%]:active, button.red-button.active[_ngcontent-%COMP%], button.red-button[_ngcontent-%COMP%]:active, input[type=button].red-button.active[_ngcontent-%COMP%], input[type=button].red-button[_ngcontent-%COMP%]:active, input[type=submit].red-button.active[_ngcontent-%COMP%], input[type=submit].red-button[_ngcontent-%COMP%]:active, input[type=reset].red-button.active[_ngcontent-%COMP%], input[type=reset].red-button[_ngcontent-%COMP%]:active {\n  background: linear-gradient(to top, #e43030 30%, #e84b4b 80%);\n  border-radius: 6px;\n  box-shadow: 0 0 transparent, 0 0 transparent, inset 0 2px 5px 2px rgba(0, 0, 0, 0.2);\n}\n.green-button[_ngcontent-%COMP%], button.green-button[_ngcontent-%COMP%], .checktext[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]    + span.green-button[_ngcontent-%COMP%], .green-button.blue-button[_ngcontent-%COMP%], .green-button.red-button[_ngcontent-%COMP%], input[type=button].green-button[_ngcontent-%COMP%], input[type=submit].green-button[_ngcontent-%COMP%], input[type=reset].green-button[_ngcontent-%COMP%] {\n  color: white;\n  font-weight: bold;\n  text-shadow: 0 0.1em 0.1em rgba(0, 0, 0, 0.7);\n  background: linear-gradient(to top, #19a187 30%, #1dbb9d 80%);\n  box-shadow: 0 0 0.5em rgba(25, 161, 135, 0.7), 0 0 transparent, inset 0 -5px 0 rgba(0, 0, 0, 0.05), inset 0 2px 0 rgba(255, 255, 255, 0.2);\n  border-radius: 6px 6px 8px 8px;\n  transition-property: box-shadow, border-radius;\n}\n.green-button.active[_ngcontent-%COMP%], .green-button[_ngcontent-%COMP%]:active, button.green-button.active[_ngcontent-%COMP%], button.green-button[_ngcontent-%COMP%]:active, input[type=button].green-button.active[_ngcontent-%COMP%], input[type=button].green-button[_ngcontent-%COMP%]:active, input[type=submit].green-button.active[_ngcontent-%COMP%], input[type=submit].green-button[_ngcontent-%COMP%]:active, input[type=reset].green-button.active[_ngcontent-%COMP%], input[type=reset].green-button[_ngcontent-%COMP%]:active {\n  background: linear-gradient(to top, #19a187 30%, #1dbb9d 80%);\n  border-radius: 6px;\n  box-shadow: 0 0 transparent, 0 0 transparent, inset 0 2px 5px 2px rgba(0, 0, 0, 0.2);\n}\n.blue-button[_ngcontent-%COMP%], .checktext[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + span[_ngcontent-%COMP%], button.blue-button[_ngcontent-%COMP%], .checktext[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]    + span.blue-button[_ngcontent-%COMP%], .blue-button.red-button[_ngcontent-%COMP%], .blue-button.green-button[_ngcontent-%COMP%], input[type=button].blue-button[_ngcontent-%COMP%], input[type=submit].blue-button[_ngcontent-%COMP%], input[type=reset].blue-button[_ngcontent-%COMP%] {\n  color: white;\n  font-weight: bold;\n  text-shadow: 0 0.1em 0.1em rgba(0, 0, 0, 0.7);\n  background: linear-gradient(to top, #367bf0 30%, #528ef2 80%);\n  box-shadow: 0 0 0.5em rgba(54, 123, 240, 0.7), 0 0 transparent, inset 0 -5px 0 rgba(0, 0, 0, 0.05), inset 0 2px 0 rgba(255, 255, 255, 0.2);\n  border-radius: 6px 6px 8px 8px;\n  transition-property: box-shadow, border-radius;\n}\n.blue-button.active[_ngcontent-%COMP%], .checktext[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + span.active[_ngcontent-%COMP%], .blue-button[_ngcontent-%COMP%]:active, .checktext[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + span[_ngcontent-%COMP%]:active, button.blue-button.active[_ngcontent-%COMP%], button.blue-button[_ngcontent-%COMP%]:active, input[type=button].blue-button.active[_ngcontent-%COMP%], input[type=button].blue-button[_ngcontent-%COMP%]:active, input[type=submit].blue-button.active[_ngcontent-%COMP%], input[type=submit].blue-button[_ngcontent-%COMP%]:active, input[type=reset].blue-button.active[_ngcontent-%COMP%], input[type=reset].blue-button[_ngcontent-%COMP%]:active {\n  background: linear-gradient(to top, #367bf0 30%, #528ef2 80%);\n  border-radius: 6px;\n  box-shadow: 0 0 transparent, 0 0 transparent, inset 0 2px 5px 2px rgba(0, 0, 0, 0.2);\n}\nlabel[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0.56em 0;\n}\nlabel[_ngcontent-%COMP%], label[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\na[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:link, a[_ngcontent-%COMP%]:visited, a[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%]:active {\n  font-weight: bold;\n  color: #367bf0;\n  font-weight: bold;\n  text-decoration: none;\n}\na[_ngcontent-%COMP%], a[_ngcontent-%COMP%]   *[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:link, a[_ngcontent-%COMP%]:link   *[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:visited, a[_ngcontent-%COMP%]:visited   *[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%]:active, a[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%]:active   *[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\n  line-height: 1.5em;\n}\nh1[_ngcontent-%COMP%] {\n  font-size: 4em;\n  font-weight: lighter;\n  margin: 0.7em 0;\n}\nh2[_ngcontent-%COMP%] {\n  font-size: 3em;\n  font-weight: lighter;\n  margin: 0.8em 0;\n}\nh3[_ngcontent-%COMP%] {\n  font-size: 2.5em;\n  font-weight: lighter;\n  margin: 0.9em 0;\n}\nh4[_ngcontent-%COMP%] {\n  font-size: 2em;\n  font-weight: lighter;\n  margin: 1em 0;\n}\nh5[_ngcontent-%COMP%] {\n  margin: 0.5em 0;\n  font-size: 1.2em;\n  font-weight: normal;\n}\nh6[_ngcontent-%COMP%] {\n  margin: 1em 0 1em 1.4em;\n  font-size: 1em;\n  font-weight: bold;\n}\ninput[type=checkbox][_ngcontent-%COMP%], input[type=radio][_ngcontent-%COMP%] {\n  font-size: 1em;\n  cursor: pointer;\n  height: 1.2em;\n  width: 1.2em;\n  margin: 0 0.3em;\n  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.2), -2px -2px 3px white, inset 1px 1px 2px rgba(0, 0, 0, 0.2), inset -1px -1px 2px white;\n  border: 0.15em solid #f2f3f7;\n  vertical-align: text-bottom;\n  transition-property: background, box-shadow;\n  transition-duration: 0.2s;\n}\ninput[type=checkbox][_ngcontent-%COMP%]:active, input[type=radio][_ngcontent-%COMP%]:active {\n  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.2), -2px -2px 3px white, inset 1px 1px 2px rgba(0, 0, 0, 0.2), inset -1px -1px 2px white, inset 0 0.1em 0.25em rgba(0, 0, 0, 0.2);\n}\ninput[type=checkbox][_ngcontent-%COMP%]:checked, input[type=radio][_ngcontent-%COMP%]:checked {\n  border-width: 0.1em;\n  border-color: #115fe2;\n  background-color: #367bf0;\n}\ninput[type=checkbox][_ngcontent-%COMP%] {\n  border-radius: 25%;\n}\ninput[type=checkbox][_ngcontent-%COMP%]:checked {\n  box-shadow: 0 0 0.5em rgba(54, 123, 240, 0.7), inset 0 -0.1em 0 rgba(0, 0, 0, 0.2), inset 0 0.1em 0.1em rgba(255, 255, 255, 0.2);\n}\ninput[type=radio][_ngcontent-%COMP%] {\n  border-radius: 100%;\n}\ninput[type=radio][_ngcontent-%COMP%]:checked {\n  box-shadow: 0 0 0.5em rgba(54, 123, 240, 0.7);\n  box-shadow: 0 0 0.5em rgba(54, 123, 240, 0.7), inset 0 0.12em 0.1em rgba(255, 255, 255, 0.25);\n  border-bottom-width: 0.15em;\n}\n.checktext[_ngcontent-%COMP%] {\n  width: auto;\n  margin: 0.5em;\n}\n.checktext[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  display: none;\n}\n.checktext[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]    + span[_ngcontent-%COMP%] {\n  font-weight: bold;\n  padding: 1em;\n  transition-delay: 0s;\n}\n.checktext[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + span[_ngcontent-%COMP%] {\n  padding: 1em;\n}\n.switch[_ngcontent-%COMP%] {\n  height: 2rem;\n  width: 8rem;\n  padding: 0;\n  position: relative;\n}\n.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  display: none;\n}\n.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]    + div[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  border-radius: 999px;\n  background: transparent;\n  transition-property: box-shadow, background-color;\n  transition-duration: 0.2s;\n  transition-delay: 0.2s;\n  box-shadow: 3px 3px 2px -2px rgba(0, 0, 0, 0.1), inset 2px 2px 2px 1px rgba(0, 0, 0, 0.1), inset -2px -2px 1px white;\n}\n.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]    + div[_ngcontent-%COMP%]::before {\n  content: \"\";\n  display: block;\n  height: calc(2rem + 4px);\n  width: calc(2rem + 4px);\n  border-radius: 100%;\n  border: solid white 3px;\n  background: #367bf0;\n  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2), inset 0 -1px 3px rgba(0, 0, 0, 0.1);\n  transform: translate(0, -6px);\n  transition: transform 0.2s;\n}\n.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + div[_ngcontent-%COMP%] {\n  background: #367bf0;\n  box-shadow: 0 0 0.5em rgba(54, 123, 240, 0.7), inset 0 2px 2px 2px rgba(0, 0, 0, 0.3), inset 0 0 transparent;\n}\n.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + div[_ngcontent-%COMP%]::before {\n  transform: translate(6rem, -6px);\n}\nhr[_ngcontent-%COMP%] {\n  width: 72%;\n  height: 8px;\n  float: right;\n  border: 0;\n}\ncode[_ngcontent-%COMP%], pre[_ngcontent-%COMP%] {\n  padding: 0.5em 1em;\n  border-radius: 4px;\n  overflow: auto;\n  box-shadow: 0 5px 30px 0 rgba(0, 0, 0, 0.05);\n}\ncode[_ngcontent-%COMP%] {\n  background: #e6e6e6;\n}\npre[_ngcontent-%COMP%] {\n  background: white;\n  margin: 4em 0;\n}\ncode[_ngcontent-%COMP%], code[_ngcontent-%COMP%]   *[_ngcontent-%COMP%], pre[_ngcontent-%COMP%], pre[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  line-height: 2em;\n  cursor: auto;\n  user-select: text;\n  -webkit-touch-callout: text;\n  -webkit-user-select: text;\n  -khtml-user-select: text;\n  -moz-user-select: text;\n  -ms-user-select: text;\n}\nblockquote[_ngcontent-%COMP%] {\n  background-color: white;\n  padding: 0.5em 1em;\n  border-radius: 4px;\n  box-shadow: 0 5px 30px 0 rgba(0, 0, 0, 0.05);\n  border-left: 6px solid #367bf0;\n}\n.gsi-container[_ngcontent-%COMP%] {\n  display: inline-flex;\n  line-height: var(--gsTextSize);\n}\n\n.GameScoreGroup.gsi-container[_ngcontent-%COMP%] {\n  border: var(--gsBorder);\n  background: var(--gsBackground);\n  padding-right: 2px;\n  margin-left: 3px;\n  color: var(--gsTextColor);\n}\n.GameScoreGroup.gsi-container-hg[_ngcontent-%COMP%] {\n  background: var(--gsBackgroundHG);\n  border: var(--gsBorderHG);\n  line-height: var(--gsTextSize);\n}\n.GameScoreGroup.gsi-movew[_ngcontent-%COMP%] {\n  padding-left: 2px;\n  line-height: var(--gsTextSize);\n}\n.GameScoreGroup.gsi-moveb[_ngcontent-%COMP%] {\n  padding-left: 2px;\n  line-height: var(--gsTextSize);\n}\n.GameScoreGroup.gsi-ply[_ngcontent-%COMP%] {\n  background: var(--gsBackgroundAN);\n  border-radius: 2px;\n  margin-right: 2px;\n  border: var(--gsBorderAN);\n  font-size: var(--gsTextSize);\n  line-height: var(--gsTextSize);\n}\n.GameScoreGroup.gsi-ply-highlight[_ngcontent-%COMP%] {\n  background: var(--gsBackgroundHG);\n  color: var(--gsTextColorHG);\n  border: var(--gsBorderHG);\n  line-height: var(--gsTextSize);\n}\n\n\n.Annotation.gsi-container[_ngcontent-%COMP%] {\n  border: var(--gsBorderAN);\n  background: var(--gsBackgroundAN);\n  padding-left: 2px;\n  padding-right: 3px;\n  color: var(--gsTextColor);\n  line-height: var(--gsTextSize);\n}\n.Annotation.gsi-container-hg[_ngcontent-%COMP%] {\n  background: var(--gsBackgroundHG);\n  border: var(--gsBorderHG);\n  line-height: var(--gsTextSize);\n}\n.Annotation.gsi-movew[_ngcontent-%COMP%] {\n  padding-left: 2px;\n  line-height: var(--gsTextSize);\n}\n.Annotation.gsi-moveb[_ngcontent-%COMP%] {\n  padding-left: 2px;\n  line-height: var(--gsTextSize);\n}\n.Annotation.gsi-ply[_ngcontent-%COMP%] {\n  background: var(--gsBackgroundAN);\n  border-radius: 2px;\n  border: var(--gsBorderAN);\n  font-size: var(--gsTextSize);\n  line-height: var(--gsTextSize);\n}\n.Annotation.gsi-ply-highlight[_ngcontent-%COMP%] {\n  background: var(--gsBackgroundHG);\n  color: var(--gsTextColorHG);\n  border: var(--gsBorderHG);\n  line-height: var(--gsTextSize);\n}\n.Annotation.gsi-comment[_ngcontent-%COMP%] {\n  color: var(--gsTextColorAN);\n  padding-left: 3px;\n  padding-right: 2px;\n  margin-left: 3px;\n  margin-right: 2px;\n  line-height: var(--gsTextSize);\n}\n.current-move[_ngcontent-%COMP%] {\n  background: var(--gsBackgroundHG);\n  border: var(--gsBorderHG);\n  color: var(--gsTextColorHG);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMuc2NzcyIsInNyYy9hc3NldHMvc2Nzcy9tb2R1bGVzL19mb250cy5zY3NzIiwic3JjL2FwcC9nYW1lLXNjb3JlL2dhbWUtc2NvcmUtaXRlbS9nYW1lLXNjb3JlLWl0ZW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOEVBQUE7QUNBQTtFQUNJLHFCQUFBO0VBQ0EscUZBQUE7RUFFQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNDSjtBREVBO0VBQ0kscUJBQUE7RUFDQSwyRkFBQTtFQUVBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0RKO0FESUE7RUFDRSwrQkFBQTtFQUNBLHVHQUFBO0VBRUEsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDSEY7QURNQTtFQUNFLCtCQUFBO0VBQ0EsK0ZBQUE7RUFFQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNMRjtBRmNBLCtFQUFBO0FBTUEsK0VBQUE7QUFNQSwrRUFBQTtBQU1BLCtFQUFBO0FBS0EsZ0ZBQUE7QUFLQSwrRUFBQTtBQUtBLHlFQUFBO0FBa0JBO0VBQ0UsbUJBQUE7RUFDQSxtQkFBQTtFQUVBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUV6REY7QUY0REE7O0VBRUUsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7QUV6REY7QUY0REE7O0VBRUUsWUFBQTtFQUNBLGlCQUFBO0FFekRGO0FGNERBO0VBQ0Usc0JBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSwyQkFBQTtFQUNBLHlCQUFBO0VBQ0Esd0JBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0Esd0JBQUE7RUFDQSxtREFBQTtFQUNBLHdEQUFBO0VBQ0EsMkJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUV6REY7QUY0REE7O0VBRUUsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsMkJBQUE7RUFDQSx5QkFBQTtFQUNBLHdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtBRXpERjtBRjREQTs7RUFFRSx5QkE1RFM7RUE2RFQsY0E1RFM7RUE2RFQsU0FBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUV6REY7QUY0REE7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBQ0UsaUVBQUE7QUV6Q0Y7QUY0Q0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBR0UsbUJBQUE7RUFDQSxtQkE3RVM7QUVrRFg7QUY4QkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBQ0UsbUJBQUE7RUFDQSw2R0FBQTtFQUVBLG1CQUFBO0FFVEY7QUZZQTtFQUVFLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBN0ZTO0FFbUZYO0FGYUE7Ozs7O0VBS0UsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUVWRjtBRmFBOzs7Ozs7Ozs7Ozs7OztFQWNFLFNBQUE7RUFDQSxtQkExSFM7RUEySFQsY0ExSFM7RUEySFQsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLDJCQUFBO0VBQ0EseUJBQUE7RUFDQSx3QkFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSwyQkFBQTtBRVZGO0FGcUJBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7QUVuQkY7QUZzQkE7RUFHRSxlQUFBO0VBQ0EsMGZBQUE7RUFFQSxzQkFBQTtFQUNBLGtCQUFBO0FFdEJGO0FGeUJBOztFQUVFLFVBQUE7RUFDQSx3QkFBQTtFQUNBLGNBQUE7QUV0QkY7QUZ5QkE7O0VBRUUsWUFBQTtBRXRCRjtBRnlCQTs7RUFFRSxVQUFBO0VBQ0EsNEJBQUE7RUFBQSx3QkFBQTtFQUNBLGNBQUE7QUV0QkY7QUZ5QkE7O0VBRUUsWUFBQTtBRXRCRjtBRnlCQTs7OztFQUlFLGFBQUE7QUV0QkY7QUZ5QkE7Ozs7RUFNRSxTQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGlEQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtBRXhCRjtBRjBCRTs7Ozs7OztFQUlFLG9CQUFBO0VBQ0EseUJBQUE7QUVyQko7QUZ5QmE7Ozs7RUFNUCxZQUFBO0VBQ0EsaUJBQUE7RUFDQSw2Q0FBQTtFQUNBLDZEQUxZO0VBTVoseUlBQUE7RUFHQSw4QkFBQTtFQUNBLDhDQUFBO0FFM0JOO0FGNkJNOzs7Ozs7O0VBRUUsNkRBZFU7RUFlVixrQkFBQTtFQUNBLG9GQUFBO0FFdEJSO0FGRWE7Ozs7RUFNUCxZQUFBO0VBQ0EsaUJBQUE7RUFDQSw2Q0FBQTtFQUNBLDZEQUxZO0VBTVosMElBQUE7RUFHQSw4QkFBQTtFQUNBLDhDQUFBO0FFSE47QUZLTTs7Ozs7OztFQUVFLDZEQWRVO0VBZVYsa0JBQUE7RUFDQSxvRkFBQTtBRUVSO0FGdEJhOzs7O0VBTVAsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsNkNBQUE7RUFDQSw2REFMWTtFQU1aLDBJQUFBO0VBR0EsOEJBQUE7RUFDQSw4Q0FBQTtBRXFCTjtBRm5CTTs7Ozs7OztFQUVFLDZEQWRVO0VBZVYsa0JBQUE7RUFDQSxvRkFBQTtBRTBCUjtBRm5CQTtFQU1FLHFCQUFBO0VBQ0EsaUJBQUE7QUVpQkY7QUZ2QkU7RUFFRSxlQUFBO0FFd0JKO0FGaEJFO0VBU0UsaUJBQUE7RUFDQSxjQTNWRztFQTRWSCxpQkFBQTtFQUNBLHFCQUFBO0FFV0o7QUZuQkk7RUFFRSxlQUFBO0FFb0JOO0FGVkE7Ozs7OztFQU1FLGtCQUFBO0FFYUY7QUZWQTtFQUNFLGNBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7QUVhRjtBRlZBO0VBQ0UsY0FBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtBRWFGO0FGVkE7RUFDRSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtBRWFGO0FGVkE7RUFDRSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSxhQUFBO0FFYUY7QUZWQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FFYUY7QUZWQTtFQUNFLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FFYUY7QUZWQTs7RUFLRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdJQVBjO0VBUWQsNEJBQUE7RUFDQSwyQkFBQTtFQUNBLDJDQUFBO0VBQ0EseUJBQUE7QUVVRjtBRlJFOztFQUNFLHlLQUFBO0FFV0o7QUZSRTs7RUFDRSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBcmFHO0FFZ2JQO0FGUEE7RUFDRSxrQkFBQTtBRVVGO0FGUkU7RUFDRSxnSUFBQTtBRVVKO0FGTEE7RUFDRSxtQkFBQTtBRVFGO0FGTkU7RUFDRSw2Q0FyV1U7RUFzV1YsNkZBQUE7RUFDQSwyQkFBQTtBRVFKO0FGSkE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtBRU9GO0FGTEU7RUFDRSxhQUFBO0FFT0o7QUZMSTtFQUdFLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0FFS047QUZGSTtFQUdFLFlBQUE7QUVFTjtBRkdBO0VBTUUsWUFMVTtFQU1WLFdBTFM7RUFNVCxVQUFBO0VBQ0Esa0JBQUE7QUVMRjtBRk9FO0VBQ0UsYUFBQTtBRUxKO0FGT0k7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQ0EsdUJBQUE7RUFDQSxpREFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxvSEFBQTtBRUxOO0FGU007RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLHdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBcGZEO0VBcWZDLDhFQUFBO0VBRUEsNkJBQUE7RUFDQSwwQkFBQTtBRVJSO0FGWUk7RUFDRSxtQkE3ZkM7RUE4ZkQsNEdBQUE7QUVWTjtBRmFNO0VBQ0UsZ0NBQUE7QUVYUjtBRmlCQTtFQUVFLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7QUVmRjtBRmtCQTs7RUFFRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLDRDQUFBO0FFZkY7QUZrQkE7RUFDRSxtQkFBQTtBRWZGO0FGa0JBO0VBQ0UsaUJBQUE7RUFDQSxhQUFBO0FFZkY7QUZvQkU7OztFQUVFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSwyQkFBQTtFQUNBLHlCQUFBO0VBQ0Esd0JBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0FFaEJKO0FGb0JBO0VBQ0UsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNENBQUE7RUFDQSw4QkFBQTtBRWpCRjtBQTdpQkE7RUFDRSxvQkFBQTtFQUNBLDhCRjBDVztBRXNnQmI7QUE3aUJBLGlGQUFBO0FBQ0E7RUFDRSx1QkZvQ1M7RUVuQ1QsK0JGa0NhO0VFakNiLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkY4Qlk7QUVraEJkO0FBOWlCQTtFQUNFLGlDRjhDZTtFRTdDZix5QkY4Q1c7RUU3Q1gsOEJGNEJXO0FFcWhCYjtBQS9pQkE7RUFDRSxpQkFBQTtFQUNBLDhCRndCVztBRTBoQmI7QUEvaUJBO0VBQ0UsaUJBQUE7RUFDQSw4QkZtQlc7QUUraEJiO0FBL2lCQTtFQUNFLGlDRm9DZTtFRW5DZixrQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJGa0NXO0VFakNYLDRCRldXO0VFVlgsOEJGVVc7QUV3aUJiO0FBL2lCQTtFQUNFLGlDRnNCZTtFRXJCZiwyQkZvQmM7RUVuQmQseUJGcUJXO0VFcEJYLDhCRkdXO0FFK2lCYjtBQTlpQkEsaUZBQUE7QUFHQSxrRkFBQTtBQUNBO0VBQ0UseUJGZ0JXO0VFZlgsaUNGY2U7RUViZixpQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJGYlk7RUVjWiw4QkZYVztBRTBqQmI7QUE3aUJBO0VBQ0UsaUNGRWU7RUVEZix5QkZFVztFRURYLDhCRmhCVztBRWdrQmI7QUE5aUJBO0VBQ0UsaUJBQUE7RUFDQSw4QkZwQlc7QUVxa0JiO0FBOWlCQTtFQUNFLGlCQUFBO0VBQ0EsOEJGekJXO0FFMGtCYjtBQTlpQkE7RUFDRSxpQ0ZSZTtFRVNmLGtCQUFBO0VBQ0EseUJGVFc7RUVVWCw0QkZoQ1c7RUVpQ1gsOEJGakNXO0FFa2xCYjtBQS9pQkE7RUFDRSxpQ0ZwQmU7RUVxQmYsMkJGdEJjO0VFdUJkLHlCRnJCVztFRXNCWCw4QkZ2Q1c7QUV5bEJiO0FBL2lCQTtFQUNFLDJCRnZCYztFRXdCZCxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLDhCRmhEVztBRWttQmI7QUEvaUJBO0VBQ0UsaUNGcENlO0VFcUNmLHlCRnBDVztFRXFDWCwyQkZ2Q2M7QUV5bEJoQiIsImZpbGUiOiJzcmMvYXBwL2dhbWUtc2NvcmUvZ2FtZS1zY29yZS1pdGVtL2dhbWUtc2NvcmUtaXRlbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cblxuQGltcG9ydCBcIi4vYXNzZXRzL3Njc3MvbW9kdWxlcy9fZm9udHMuc2Nzc1wiO1xuJGdhbWVzY29yZS1mYW1pbHk6IFwiRmlndXJpbmVTeW1ib2xUMVwiO1xuJGdhbWVzY29yZS1oaWdobGlnaHQ6ICM1ODU4NThmZjtcbiRnYW1lc2NvcmUtZm9yZWdyb3VuZDogd2hpdGU7XG5cbiRyZWQ6ICNlNDMwMzA7XG4kZ3JlZW46ICMxOWExODc7XG4kbGlnaHQtYmx1ZTogIzAwZmZmZmZmO1xuJGJsdWU6ICMzNjdiZjA7XG4kZGFyay1ibHVlOiAjMjY1YWIxO1xuJG1hcm9vbjogI2I4MTc0YztcbiRwdXJwbGU6ICM4YzQyYWI7XG5cbi8vIE1haW4gT0xHQSBDb2xvciBFbGVtZW50IFZhcmlhYmxlc1xuJHRleHRDb2xvcjogdmFyKC0tdGV4dENvbG9yKTsgLy8gTWFpbiBUZXh0IENvbG9yXG4kdGV4dENvbG9yQXR0ZW50aW9uOiB2YXIoLS10ZXh0Q29sb3JBdHRlbnRpb24pOyAvLyBBdHRlbnRpb24gdGV4dFxuJHRleHRDb2xvclJlbW92ZTogdmFyKC0tdGV4dENvbG9yUmVtb3ZlKTsgLy8gUmVtb3ZlL0RlbGV0ZS9DbG9zZVxuJHRleHRDb2xvckFkZDogdmFyKC0tdGV4dENvbG9yQWRkKTsgLy8gQWRkL0NyZWF0ZS9PcGVuXG4kdGV4dENvbG9yQWN0aXZlOiB2YXIoLS10ZXh0Q29sb3JBY3RpdmUpOyAvLyBBZGQvQ3JlYXRlL09wZW5cbiRiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kKTsgLy8gTWFpbiBiYWNrZ3JvdW5kIENvbG9yXG4kYmdDb250YWluZXI6IHZhcigtLWJnQ29udGFpbmVyKTsgLy8gYmFja2dyb3VuZCBvZiBDb250YWluZXJzXG4kYmdNZW51OiB2YXIoLS1iZ01lbnUpOyAvLyBiYWNrZ3JvdW5kIG9mIE1lbnVzXG4kYmdJdGVtOiB2YXIoLS1iZ0l0ZW0pOyAvLyBiYWNrZ3JvdW5kIG9mIEl0ZW1zXG5cbi8vIENvbnRleHQgTWVudVxuJGJnQ29udGV4dDogdmFyKC0tYmdDb250ZXh0KTsgLy8gYmFja2dyb3VuZCBvZiBDb250ZXh0IE1lbnVcbiR0ZXh0Q29sb3JDb250ZXh0OiB2YXIoLS10ZXh0Q29sb3JDb250ZXh0KTsgLy8gdGV4dCBjb2xvciBDb250ZXh0IE1lbnVcbiRib3JkZXJDb250ZXh0OiB2YXIoLS1ib3JkZXJDb250ZXh0KTsgLy8gYm9yZGVyIENvbnRleHQgTWVudVxuJG92ZXJsYXlDb250ZXh0QmFja2dyb3VuZDogdmFyKFxuICAtLW92ZXJsYXlDb250ZXh0QmFja2dyb3VuZFxuKTsgLy8gQ29udGV4dCBNZW51IE92ZXJsYXkgYmFja2dyb3VuZCBtYWluXG4kb3ZlcmxheUNvbnRleHRCYWNrZ3JvdW5kR3JhZGllbnQ6IHZhcihcbiAgLS1vdmVybGF5Q29udGV4dEJhY2tncm91bmRHcmFkaWVudFxuKTsgLy8gQ29udGV4dCBNZW51IGJhY2tncm91bmQgZ3JhZGllbnRcblxuJGl0ZW06IHZhcigtLWl0ZW0pO1xuJGl0ZW0tY29udHJhc3Q6IHZhcigtLWl0ZW0tY29udHJhc3QpO1xuJGl0ZW0tYmc6IHZhcigtLWl0ZW0tYmcpO1xuXG5cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgQ29udGFpbmVyIFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4kZ3NUZXh0Q29sb3I6IHZhcigtLWdzVGV4dENvbG9yKTsgLy8gVGV4dCBjb2xvciBmb3IgZ2FtZSBzY29yZVxuJGdzQmFja2dyb3VuZDogdmFyKC0tZ3NCYWNrZ3JvdW5kKTsgLy8gYmFja2dyb3VuZCBvZiBDb250YWluZXJzXG4kZ3NCb3JkZXI6IHZhcigtLWdzQm9yZGVyKTsgLy8gYmFja2dyb3VuZCBvZiBNZW51c1xuJGdzVGV4dFNpemU6IHZhcigtLWdzVGV4dFNpemUpOyAvLyBiYWNrZ3JvdW5kIG9mIE1lbnVzXG5cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgQ29udGFpbmVyIFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4kZ3NUZXh0Q29sb3JNVzogdmFyKC0tZ3NUZXh0Q29sb3JNVyk7IC8vIFRleHQgY29sb3IgZm9yIGdhbWUgc2NvcmVcbiRnc0JhY2tncm91bmRNVzogdmFyKC0tZ3NCYWNrZ3JvdW5kTVcpOyAvLyBiYWNrZ3JvdW5kIG9mIENvbnRhaW5lcnNcbiRnc0JvcmRlck1XOiB2YXIoLS1nc0JvcmRlck1XKTsgLy8gYmFja2dyb3VuZCBvZiBNZW51c1xuJGdzVGV4dFNpemVNVzogdmFyKC0tZ3NUZXh0U2l6ZU1XKTsgLy8gYmFja2dyb3VuZCBvZiBNZW51c1xuXG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIENvbnRhaW5lciBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuJGdzVGV4dENvbG9yTUI6IHZhcigtLWdzVGV4dENvbG9yTUIpOyAvLyBUZXh0IGNvbG9yIGZvciBnYW1lIHNjb3JlXG4kZ3NCYWNrZ3JvdW5kTUI6IHZhcigtLWdzQmFja2dyb3VuZE1CKTsgLy8gYmFja2dyb3VuZCBvZiBDb250YWluZXJzXG4kZ3NCb3JkZXJNQjogdmFyKC0tZ3NCb3JkZXJNQik7IC8vIGJhY2tncm91bmQgb2YgTWVudXNcbiRnc1RleHRTaXplTUI6IHZhcigtLWdzVGV4dFNpemVNQik7IC8vIGJhY2tncm91bmQgb2YgTWVudXNcblxuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBIaWdobGlnaHQgVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiRnc1RleHRDb2xvckhHOiB2YXIoLS1nc1RleHRDb2xvckhHKTsgLy8gVGV4dCBjb2xvciBmb3IgaGlnaGxpZ2h0XG4kZ3NCYWNrZ3JvdW5kSEc6IHZhcigtLWdzQmFja2dyb3VuZEhHKTsgLy8gYmFja2dyb3VuZCBmb3IgaGlnaGxpZ2h0XG4kZ3NCb3JkZXJIRzogdmFyKC0tZ3NCb3JkZXJIRyk7IC8vIGJvcmRlciBmb3IgaGlnaGxpZ2h0XG5cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgQW5ub3RhdGlvbiBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuJGdzVGV4dENvbG9yQU46IHZhcigtLWdzVGV4dENvbG9yQU4pOyAvLyBUZXh0IGNvbG9yIGZvciBoaWdobGlnaHRcbiRnc0JhY2tncm91bmRBTjogdmFyKC0tZ3NCYWNrZ3JvdW5kQU4pOyAvLyBiYWNrZ3JvdW5kIGZvciBoaWdobGlnaHRcbiRnc0JvcmRlckFOOiB2YXIoLS1nc0JvcmRlckFOKTsgLy8gYm9yZGVyIGZvciBoaWdobGlnaHRcblxuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBWYXJpYXRpb24gVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiRnc1RleHRDb2xvclZBOiB2YXIoLS1nc1RleHRDb2xvclZBKTsgLy8gVGV4dCBjb2xvciBmb3IgaGlnaGxpZ2h0XG4kZ3NCYWNrZ3JvdW5kVkE6IHZhcigtLWdzQmFja2dyb3VuZFZBKTsgLy8gYmFja2dyb3VuZCBmb3IgaGlnaGxpZ2h0XG4kZ3NCb3JkZXJWQTogdmFyKC0tZ3NCb3JkZXJWQSk7IC8vIGJvcmRlciBmb3IgaGlnaGxpZ2h0XG5cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgUGx5IFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4kZ3NUZXh0Q29sb3JQQzogdmFyKC0tZ3NUZXh0Q29sb3JQQyk7IC8vIFRleHQgY29sb3IgZm9yIGdhbWUgc2NvcmUgcGx5XG4kZ3NCYWNrZ3JvdW5kUEM6IHZhcigtLWdzQmFja2dyb3VuZFBDKTsgLy8gYmFja2dyb3VuZCBmb3IgZ2FtZSBzY29yZSBwbHlcbiRnc0JvcmRlclBDOiB2YXIoLS1nc0JvcmRlclBDKTsgLy8gYm9yZGVyIGZvciBnYW1lIHNjb3JlIHBseVxuXG4vLyBCb2FyZCBjb2xvcnMgcmVmbGVjdGVkIG91dFxuJGJvYXJkQkdEYXJrOiB2YXIoLS1ib2FyZEJHRGFyayk7IC8vIGJvcmRlciBmb3IgaGlnaGxpZ2h0XG5cbi8vIEdlbmVyYWwgc3R1ZmZcbiR0ZXh0LWNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcbiRiZy1vdXRlcjogdmFyKC0tYmctb3V0ZXIpO1xuJGJnLWlubmVyOiB2YXIoLS1iZy1pbm5lcik7XG5cbiRiZy1jb2xvcjogI2YyZjNmNztcbiRmZy1jb2xvcjogIzM4M2E0MTtcblxuJGdsb3ctc2hhZG93OiAwIDAgMC41ZW0gdHJhbnNwYXJlbnRpemUoJGJsdWUsIDAuMyk7XG5cbjpyb290IHtcbiAgLS1iZy1jb2xvcjogI3skYmctY29sb3J9O1xuICAtLWZnLWNvbG9yOiAjeyRmZy1jb2xvcn07XG5cbiAgLS1yZWQ6ICN7JHJlZH07XG4gIC0tZ3JlZW46ICN7JGdyZWVufTtcbiAgLS1ibHVlOiAjeyRibHVlfTtcbiAgLS1kYXJrLWJsdWU6ICN7JGRhcmstYmx1ZX07XG4gIC0tbWFyb29uOiAjeyRtYXJvb259O1xuICAtLXB1cnBsZTogI3skcHVycGxlfTtcbn1cblxuOjotbW96LWZvY3VzLWlubmVyLFxuOi1tb3otZm9jdXNyaW5nIHtcbiAgYm9yZGVyOiAwO1xuICBjb2xvcjogdHJhbnNwYXJlbnQ7XG4gIHRleHQtc2hhZG93OiAwIDAgMCAkZmctY29sb3I7XG59XG5cbjo6c2VsZWN0aW9uLFxuOjotbW96LXNlbGVjdGlvbiB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZDogYmxhY2s7XG59XG5cbioge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBvdXRsaW5lOiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKSAhaW1wb3J0YW50O1xuICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XG4gIGN1cnNvcjogZGVmYXVsdDtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG59XG5cbi5zZWxlY3RhYmxlLFxuLnNlbGVjdGFibGUgKiB7XG4gIGN1cnNvcjogYXV0bztcbiAgdXNlci1zZWxlY3Q6IHRleHQ7XG4gIC13ZWJraXQtdG91Y2gtY2FsbG91dDogdGV4dDtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogdGV4dDtcbiAgLWtodG1sLXVzZXItc2VsZWN0OiB0ZXh0O1xuICAtbW96LXVzZXItc2VsZWN0OiB0ZXh0O1xuICAtbXMtdXNlci1zZWxlY3Q6IHRleHQ7XG59XG5cbmh0bWwsXG5ib2R5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJnLWNvbG9yO1xuICBjb2xvcjogJGZnLWNvbG9yO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGZvbnQtc2l6ZTogMTBwdDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdzogYXV0bztcbn1cblxuLndpdGgtc2hhZG93IHtcbiAgYm94LXNoYWRvdzogNnB4IDZweCAxMHB4IHRyYW5zcGFyZW50aXplKGJsYWNrLCAwLjkpLCAtNnB4IC02cHggMTBweCB3aGl0ZTtcbn1cblxuLm91dHNldCB7XG4gIEBleHRlbmQgLndpdGgtc2hhZG93O1xuXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQ6ICRiZy1jb2xvcjtcbn1cblxuLmluc2V0IHtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm94LXNoYWRvdzogMCAwIHRyYW5zcGFyZW50LCAwIDAgdHJhbnNwYXJlbnQsXG4gICAgaW5zZXQgM3B4IDNweCA1cHggdHJhbnNwYXJlbnRpemUoYmxhY2ssIDAuOSksIGluc2V0IC0zcHggLTNweCA1cHggd2hpdGU7XG4gIGJhY2tncm91bmQ6IGxpZ2h0ZW4oJGJnLWNvbG9yLCAyJSk7XG59XG5cbi5wYXBlciB7XG4gIEBleHRlbmQgLm91dHNldDtcbiAgcGFkZGluZzogMTBweCAyMHB4IDIwcHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIG1pbi1oZWlnaHQ6IDEwMHB4O1xuICBmb250LXNpemU6IDEuMmVtO1xuICBiYWNrZ3JvdW5kOiAkYmctY29sb3I7XG59XG5cbnNlY3Rpb24sXG5hcnRpY2xlLFxuLnNlY3Rpb24sXG4uYXJ0aWNsZSxcbi5wYXBlciB7XG4gIGxpbmUtaGVpZ2h0OiAyZW07XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgd29yZC1icmVhazogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMmVtO1xufVxuXG5pbnB1dFt0eXBlPVwidGV4dFwiXSxcbmlucHV0W3R5cGU9XCJzZWFyY2hcIl0sXG5pbnB1dFt0eXBlPVwidGVsXCJdLFxuaW5wdXRbdHlwZT1cInVybFwiXSxcbmlucHV0W3R5cGU9XCJlbWFpbFwiXSxcbmlucHV0W3R5cGU9XCJwYXNzd29yZFwiXSxcbmlucHV0W3R5cGU9XCJkYXRlXCJdLFxuaW5wdXRbdHlwZT1cIm1vbnRoXCJdLFxuaW5wdXRbdHlwZT1cIndlZWtcIl0sXG5pbnB1dFt0eXBlPVwidGltZVwiXSxcbmlucHV0W3R5cGU9XCJudW1iZXJcIl0sXG5pbnB1dFt0eXBlPVwiY29sb3JcIl0sXG5zZWxlY3QsXG50ZXh0YXJlYSB7XG4gIGJvcmRlcjogMDtcbiAgYmFja2dyb3VuZDogJGJnLWNvbG9yO1xuICBjb2xvcjogJGZnLWNvbG9yO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBwYWRkaW5nOiAwIDEuMjVlbTtcbiAgbGluZS1oZWlnaHQ6IDEuMjVlbTtcbiAgaGVpZ2h0OiAzLjVlbTtcbiAgbWFyZ2luOiAxMHB4IDA7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xuICBjdXJzb3I6IHRleHQ7XG4gIHVzZXItc2VsZWN0OiB0ZXh0O1xuICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IHRleHQ7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IHRleHQ7XG4gIC1raHRtbC11c2VyLXNlbGVjdDogdGV4dDtcbiAgLW1vei11c2VyLXNlbGVjdDogdGV4dDtcbiAgLW1zLXVzZXItc2VsZWN0OiB0ZXh0O1xuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuMnM7XG5cbiAgJjpub3Qoc2VsZWN0KSB7XG4gICAgQGV4dGVuZCAuaW5zZXQ7XG5cbiAgICAmOmZvY3VzIHtcbiAgICAgIEBleHRlbmQgLm91dHNldDtcbiAgICB9XG4gIH1cbn1cblxudGV4dGFyZWEge1xuICBoZWlnaHQ6IDM1MHB4O1xuICBwYWRkaW5nOiAxLjI1ZW07XG59XG5cbnNlbGVjdCB7XG4gIEBleHRlbmQgLm91dHNldDtcblxuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQ6IHVybChkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUIyWlhKemFXOXVQU0l4TGpFaUlIWnBaWGRDYjNnOUlqQWdNQ0F4T1NBeE9TSWdlRzFzYm5NOUltaDBkSEE2THk5M2QzY3Vkek11YjNKbkx6SXdNREF2YzNabklqNDhaeUIwY21GdWMyWnZjbTA5SW0xaGRISnBlQ2d1TURNMElEQWdNQ0F1TURNMElDMDJMamdnTVM0M1pTMDFLU0lnYzNSNWJHVTlJbVpwYkd3Nkl6ZGlOMlU0WXlJK1BIQmhkR2dnWkQwaWJUUTRNQ0F6TkRRdE1qRXhMVEl4TW1NdE1UWXRNVFl0TkRFdE1UWXROVGNnTUMweE5pQXhOaTB4TmlBME1pQXdJRFUzYkRJek9DQXlNemxqT0M0MElEZ3VOU0F5TUNBeE1pQXpNU0F4TWlBeE1TQXdMalUySURJeUxUTXVNaUF6TVMweE1td3lNemd0TWpNNVl6RTJMVEUySURFMkxUUXlJREF0TlRkekxUUXhMVEUyTFRVM0lEQjZJaUJ6ZEhsc1pUMGlabWxzYkRvak4ySTNaVGhqSWk4K1BDOW5Qand2YzNablBnbz0pXG4gICAgbm8tcmVwZWF0IHJpZ2h0IDFlbSBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogMS4yZW07XG4gIHBhZGRpbmctcmlnaHQ6IDNlbTtcbn1cblxuaW5wdXQ6OnBsYWNlaG9sZGVyLFxudGV4dGFyZWE6OnBsYWNlaG9sZGVyIHtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzO1xuICBjb2xvcjogaW5oZXJpdDtcbn1cblxuaW5wdXQ6Zm9jdXM6OnBsYWNlaG9sZGVyLFxudGV4dGFyZWE6Zm9jdXM6OnBsYWNlaG9sZGVyIHtcbiAgb3BhY2l0eTogMC4yO1xufVxuXG5pbnB1dDotbXMtaW5wdXQtcGxhY2Vob2xkZXIsXG50ZXh0YXJlYTotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICBvcGFjaXR5OiAxO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnM7XG4gIGNvbG9yOiBpbmhlcml0O1xufVxuXG5pbnB1dDpmb2N1czotbXMtaW5wdXQtcGxhY2Vob2xkZXIsXG50ZXh0YXJlYTpmb2N1czotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICBvcGFjaXR5OiAwLjI7XG59XG5cbmlucHV0W3R5cGU9XCJzZWFyY2hcIl06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24sXG5pbnB1dFt0eXBlPVwic2VhcmNoXCJdOjotd2Via2l0LXNlYXJjaC1jYW5jZWwtYnV0dG9uLFxuaW5wdXRbdHlwZT1cInNlYXJjaFwiXTo6LXdlYmtpdC1zZWFyY2gtcmVzdWx0cy1idXR0b24sXG5pbnB1dFt0eXBlPVwic2VhcmNoXCJdOjotd2Via2l0LXNlYXJjaC1yZXN1bHRzLWRlY29yYXRpb24ge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5idXR0b24sXG5pbnB1dFt0eXBlPVwiYnV0dG9uXCJdLFxuaW5wdXRbdHlwZT1cInN1Ym1pdFwiXSxcbmlucHV0W3R5cGU9XCJyZXNldFwiXSB7XG4gIEBleHRlbmQgLm91dHNldDtcblxuICBib3JkZXI6IDA7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBwYWRkaW5nOiAxMHB4IDA7XG4gIHdpZHRoOiA4ZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogaW5oZXJpdDtcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGJhY2tncm91bmQtY29sb3IsIGJveC1zaGFkb3c7XG4gIHRyYW5zaXRpb24tZGVsYXk6IDAuMnM7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMnM7XG5cbiAgJi5hY3RpdmUsXG4gICY6YWN0aXZlIHtcbiAgICBAZXh0ZW5kIC5pbnNldDtcblxuICAgIHRyYW5zaXRpb24tZGVsYXk6IDBzO1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMXM7XG4gIH1cblxuICBAZWFjaCAkbmFtZSwgJGNvbG9yIGluIChcInJlZFwiOiAkcmVkLCBcImdyZWVuXCI6ICRncmVlbiwgXCJibHVlXCI6ICRibHVlKSB7XG4gICAgQGF0LXJvb3QgLiN7JG5hbWV9LWJ1dHRvbixcbiAgICAgICYuI3skbmFtZX0tYnV0dG9uIHtcbiAgICAgIEBleHRlbmQgYnV0dG9uO1xuXG4gICAgICAkX2JnLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAkY29sb3IgMzAlLCBsaWdodGVuKCRjb2xvciwgNiUpIDgwJSk7XG5cbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgdGV4dC1zaGFkb3c6IDAgMC4xZW0gMC4xZW0gdHJhbnNwYXJlbnRpemUoYmxhY2ssIDAuMyk7XG4gICAgICBiYWNrZ3JvdW5kOiAkX2JnLWltYWdlO1xuICAgICAgYm94LXNoYWRvdzogMCAwIDAuNWVtIHRyYW5zcGFyZW50aXplKCRjb2xvciwgMC4zKSwgMCAwIHRyYW5zcGFyZW50LFxuICAgICAgICBpbnNldCAwIC01cHggMCB0cmFuc3BhcmVudGl6ZShibGFjaywgMC45NSksXG4gICAgICAgIGluc2V0IDAgMnB4IDAgdHJhbnNwYXJlbnRpemUod2hpdGUsIDAuOCk7XG4gICAgICBib3JkZXItcmFkaXVzOiA2cHggNnB4IDhweCA4cHg7XG4gICAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBib3gtc2hhZG93LCBib3JkZXItcmFkaXVzO1xuXG4gICAgICAmLmFjdGl2ZSxcbiAgICAgICY6YWN0aXZlIHtcbiAgICAgICAgYmFja2dyb3VuZDogJF9iZy1pbWFnZTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgICBib3gtc2hhZG93OiAwIDAgdHJhbnNwYXJlbnQsIDAgMCB0cmFuc3BhcmVudCxcbiAgICAgICAgICBpbnNldCAwIDJweCA1cHggMnB4IHRyYW5zcGFyZW50aXplKGJsYWNrLCAwLjgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5sYWJlbCB7XG4gICYsXG4gICYgKiB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5cbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiAwLjU2ZW0gMDtcbn1cblxuYSB7XG4gICYsXG4gICY6bGluayxcbiAgJjp2aXNpdGVkLFxuICAmOmhvdmVyICY6YWN0aXZlIHtcbiAgICAmLFxuICAgICYgKiB7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6ICRibHVlO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxufVxuXG5oMSxcbmgyLFxuaDMsXG5oNCxcbmg1LFxuaDYge1xuICBsaW5lLWhlaWdodDogMS41ZW07XG59XG5cbmgxIHtcbiAgZm9udC1zaXplOiA0ZW07XG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuICBtYXJnaW46IDAuN2VtIDA7XG59XG5cbmgyIHtcbiAgZm9udC1zaXplOiAzZW07XG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuICBtYXJnaW46IDAuOGVtIDA7XG59XG5cbmgzIHtcbiAgZm9udC1zaXplOiAyLjVlbTtcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4gIG1hcmdpbjogMC45ZW0gMDtcbn1cblxuaDQge1xuICBmb250LXNpemU6IDJlbTtcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4gIG1hcmdpbjogMWVtIDA7XG59XG5cbmg1IHtcbiAgbWFyZ2luOiAwLjVlbSAwO1xuICBmb250LXNpemU6IDEuMmVtO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuXG5oNiB7XG4gIG1hcmdpbjogMWVtIDAgMWVtIDEuNGVtO1xuICBmb250LXNpemU6IDFlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbmlucHV0W3R5cGU9XCJjaGVja2JveFwiXSxcbmlucHV0W3R5cGU9XCJyYWRpb1wiXSB7XG4gICRfYm9yZGVyLXdpZHRoOiAwLjE1ZW07XG4gICRfYm94LXNoYWRvdzogMnB4IDJweCAzcHggdHJhbnNwYXJlbnRpemUoYmxhY2ssIDAuOCksIC0ycHggLTJweCAzcHggd2hpdGUsXG4gICAgaW5zZXQgMXB4IDFweCAycHggdHJhbnNwYXJlbnRpemUoYmxhY2ssIDAuOCksIGluc2V0IC0xcHggLTFweCAycHggd2hpdGU7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGhlaWdodDogMS4yZW07XG4gIHdpZHRoOiAxLjJlbTtcbiAgbWFyZ2luOiAwIDAuM2VtO1xuICBib3gtc2hhZG93OiAkX2JveC1zaGFkb3c7XG4gIGJvcmRlcjogJF9ib3JkZXItd2lkdGggc29saWQgJGJnLWNvbG9yO1xuICB2ZXJ0aWNhbC1hbGlnbjogdGV4dC1ib3R0b207XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGJhY2tncm91bmQsIGJveC1zaGFkb3c7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMnM7XG5cbiAgJjphY3RpdmUge1xuICAgIGJveC1zaGFkb3c6ICRfYm94LXNoYWRvdywgaW5zZXQgMCAwLjFlbSAwLjI1ZW0gdHJhbnNwYXJlbnRpemUoYmxhY2ssIDAuOCk7XG4gIH1cblxuICAmOmNoZWNrZWQge1xuICAgIGJvcmRlci13aWR0aDogMC4xZW07XG4gICAgYm9yZGVyLWNvbG9yOiBkYXJrZW4oJGJsdWUsIDEwJSk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJsdWU7XG4gIH1cbn1cblxuaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdIHtcbiAgYm9yZGVyLXJhZGl1czogMjUlO1xuXG4gICY6Y2hlY2tlZCB7XG4gICAgYm94LXNoYWRvdzogJGdsb3ctc2hhZG93LCBpbnNldCAwIC0wLjFlbSAwIHRyYW5zcGFyZW50aXplKGJsYWNrLCAwLjgpLFxuICAgICAgaW5zZXQgMCAwLjFlbSAwLjFlbSB0cmFuc3BhcmVudGl6ZSh3aGl0ZSwgMC44KTtcbiAgfVxufVxuXG5pbnB1dFt0eXBlPVwicmFkaW9cIl0ge1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuXG4gICY6Y2hlY2tlZCB7XG4gICAgYm94LXNoYWRvdzogJGdsb3ctc2hhZG93O1xuICAgIGJveC1zaGFkb3c6ICRnbG93LXNoYWRvdywgaW5zZXQgMCAwLjEyZW0gMC4xZW0gdHJhbnNwYXJlbnRpemUod2hpdGUsIDAuNzUpO1xuICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDAuMTVlbTtcbiAgfVxufVxuXG4uY2hlY2t0ZXh0IHtcbiAgd2lkdGg6IGF1dG87XG4gIG1hcmdpbjogMC41ZW07XG5cbiAgaW5wdXQge1xuICAgIGRpc3BsYXk6IG5vbmU7XG5cbiAgICArIHNwYW4ge1xuICAgICAgQGV4dGVuZCBidXR0b247XG5cbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgcGFkZGluZzogMWVtO1xuICAgICAgdHJhbnNpdGlvbi1kZWxheTogMHM7XG4gICAgfVxuXG4gICAgJjpjaGVja2VkICsgc3BhbiB7XG4gICAgICBAZXh0ZW5kIC5ibHVlLWJ1dHRvbjtcblxuICAgICAgcGFkZGluZzogMWVtO1xuICAgIH1cbiAgfVxufVxuXG4uc3dpdGNoIHtcbiAgJF9oZWlnaHQ6IDJyZW07XG4gICRfd2lkdGg6IDhyZW07XG4gICRfaGFuZGxlLXdpZHRoOiAkX2hlaWdodDtcbiAgJF9oYW5kbGUtdHJhbnNsYXRpb246ICRfd2lkdGggLSAkX2hhbmRsZS13aWR0aDtcblxuICBoZWlnaHQ6ICRfaGVpZ2h0O1xuICB3aWR0aDogJF93aWR0aDtcbiAgcGFkZGluZzogMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gIGlucHV0IHtcbiAgICBkaXNwbGF5OiBub25lO1xuXG4gICAgKyBkaXYge1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBib3JkZXItcmFkaXVzOiA5OTlweDtcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYm94LXNoYWRvdywgYmFja2dyb3VuZC1jb2xvcjtcbiAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMnM7XG4gICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjJzO1xuICAgICAgYm94LXNoYWRvdzogM3B4IDNweCAycHggLTJweCB0cmFuc3BhcmVudGl6ZShibGFjaywgMC45KSxcbiAgICAgICAgaW5zZXQgMnB4IDJweCAycHggMXB4IHRyYW5zcGFyZW50aXplKGJsYWNrLCAwLjkpLFxuICAgICAgICBpbnNldCAtMnB4IC0ycHggMXB4IHdoaXRlO1xuXG4gICAgICAmOjpiZWZvcmUge1xuICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgaGVpZ2h0OiBjYWxjKCN7JF9oYW5kbGUtd2lkdGh9ICsgNHB4KTtcbiAgICAgICAgd2lkdGg6IGNhbGMoI3skX2hhbmRsZS13aWR0aH0gKyA0cHgpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgICAgICBib3JkZXI6IHNvbGlkIHdoaXRlIDNweDtcbiAgICAgICAgYmFja2dyb3VuZDogJGJsdWU7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgM3B4IDEwcHggdHJhbnNwYXJlbnRpemUoYmxhY2ssIDAuOCksXG4gICAgICAgICAgaW5zZXQgMCAtMXB4IDNweCB0cmFuc3BhcmVudGl6ZShibGFjaywgMC45KTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTZweCk7XG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzO1xuICAgICAgfVxuICAgIH1cblxuICAgICY6Y2hlY2tlZCArIGRpdiB7XG4gICAgICBiYWNrZ3JvdW5kOiAkYmx1ZTtcbiAgICAgIGJveC1zaGFkb3c6ICRnbG93LXNoYWRvdywgaW5zZXQgMCAycHggMnB4IDJweCB0cmFuc3BhcmVudGl6ZShibGFjaywgMC43KSxcbiAgICAgICAgaW5zZXQgMCAwIHRyYW5zcGFyZW50O1xuXG4gICAgICAmOjpiZWZvcmUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgkX2hhbmRsZS10cmFuc2xhdGlvbiwgLTZweCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmhyIHtcbiAgQGV4dGVuZCAuaW5zZXQ7XG4gIHdpZHRoOiA3MiU7XG4gIGhlaWdodDogOHB4O1xuICBmbG9hdDogcmlnaHQ7XG4gIGJvcmRlcjogMDtcbn1cblxuY29kZSxcbnByZSB7XG4gIHBhZGRpbmc6IDAuNWVtIDFlbTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBvdmVyZmxvdzogYXV0bztcbiAgYm94LXNoYWRvdzogMCA1cHggMzBweCAwIHRyYW5zcGFyZW50aXplKGJsYWNrLCAwLjk1KTtcbn1cblxuY29kZSB7XG4gIGJhY2tncm91bmQ6ICNlNmU2ZTY7XG59XG5cbnByZSB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBtYXJnaW46IDRlbSAwO1xufVxuXG5jb2RlLFxucHJlIHtcbiAgJixcbiAgJiAqIHtcbiAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgICBsaW5lLWhlaWdodDogMmVtO1xuICAgIGN1cnNvcjogYXV0bztcbiAgICB1c2VyLXNlbGVjdDogdGV4dDtcbiAgICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IHRleHQ7XG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogdGV4dDtcbiAgICAta2h0bWwtdXNlci1zZWxlY3Q6IHRleHQ7XG4gICAgLW1vei11c2VyLXNlbGVjdDogdGV4dDtcbiAgICAtbXMtdXNlci1zZWxlY3Q6IHRleHQ7XG4gIH1cbn1cblxuYmxvY2txdW90ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAwLjVlbSAxZW07XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm94LXNoYWRvdzogMCA1cHggMzBweCAwIHRyYW5zcGFyZW50aXplKGJsYWNrLCAwLjk1KTtcbiAgYm9yZGVyLWxlZnQ6IDZweCBzb2xpZCAkYmx1ZTtcbn1cbiIsIkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnQ2F2ZWF0JztcbiAgICBzcmM6IHVybCgnLi4vLi4vZm9udHMvQm9sZC9DYXZlYXQtQm9sZC53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcbiAgICAgICAgdXJsKCcuLi8uLi9mb250cy9Cb2xkL0NhdmVhdC1Cb2xkLndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC1kaXNwbGF5OiBzd2FwO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ0NhdmVhdCc7XG4gICAgc3JjOiB1cmwoJy4uLy4uL2ZvbnRzL1JlZ3VsYXIvQ2F2ZWF0LVJlZ3VsYXIud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXG4gICAgICAgIHVybCgnLi4vLi4vZm9udHMvUmVndWxhci9DYXZlYXQtUmVndWxhci53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC1kaXNwbGF5OiBzd2FwO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdGaWd1cmluZVN5bWJvbFQxJztcbiAgc3JjOiB1cmwoJy4uLy4uL2ZvbnRzLzNyZCBQYXJ0eS9DaGVzc1ZhcmlhbnRzL0ZpZ3VyaW5lU3ltYm9sVDFCb2xkLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxuICAgICAgdXJsKCcuLi8uLi9mb250cy8zcmQgUGFydHkvQ2hlc3NWYXJpYW50cy9GaWd1cmluZVN5bWJvbFQxQm9sZC53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnRmlndXJpbmVTeW1ib2xUMSc7XG4gIHNyYzogdXJsKCcuLi8uLi9mb250cy8zcmQgUGFydHkvQ2hlc3NWYXJpYW50cy9GaWd1cmluZVN5bWJvbFQxLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxuICAgICAgdXJsKCcuLi8uLi9mb250cy8zcmQgUGFydHkvQ2hlc3NWYXJpYW50cy9GaWd1cmluZVN5bWJvbFQxLndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG59XG5cbiIsIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJDYXZlYXRcIjtcbiAgc3JjOiB1cmwoXCIuLi8uLi9mb250cy9Cb2xkL0NhdmVhdC1Cb2xkLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpLCB1cmwoXCIuLi8uLi9mb250cy9Cb2xkL0NhdmVhdC1Cb2xkLndvZmZcIikgZm9ybWF0KFwid29mZlwiKTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkNhdmVhdFwiO1xuICBzcmM6IHVybChcIi4uLy4uL2ZvbnRzL1JlZ3VsYXIvQ2F2ZWF0LVJlZ3VsYXIud29mZjJcIikgZm9ybWF0KFwid29mZjJcIiksIHVybChcIi4uLy4uL2ZvbnRzL1JlZ3VsYXIvQ2F2ZWF0LVJlZ3VsYXIud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJGaWd1cmluZVN5bWJvbFQxXCI7XG4gIHNyYzogdXJsKFwiLi4vLi4vZm9udHMvM3JkIFBhcnR5L0NoZXNzVmFyaWFudHMvRmlndXJpbmVTeW1ib2xUMUJvbGQud29mZjJcIikgZm9ybWF0KFwid29mZjJcIiksIHVybChcIi4uLy4uL2ZvbnRzLzNyZCBQYXJ0eS9DaGVzc1ZhcmlhbnRzL0ZpZ3VyaW5lU3ltYm9sVDFCb2xkLndvZmZcIikgZm9ybWF0KFwid29mZlwiKTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkZpZ3VyaW5lU3ltYm9sVDFcIjtcbiAgc3JjOiB1cmwoXCIuLi8uLi9mb250cy8zcmQgUGFydHkvQ2hlc3NWYXJpYW50cy9GaWd1cmluZVN5bWJvbFQxLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpLCB1cmwoXCIuLi8uLi9mb250cy8zcmQgUGFydHkvQ2hlc3NWYXJpYW50cy9GaWd1cmluZVN5bWJvbFQxLndvZmZcIikgZm9ybWF0KFwid29mZlwiKTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG59XG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIENvbnRhaW5lciBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBDb250YWluZXIgVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgQ29udGFpbmVyIFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIEhpZ2hsaWdodCBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBBbm5vdGF0aW9uIFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIFZhcmlhdGlvbiBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBQbHkgVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbjpyb290IHtcbiAgLS1iZy1jb2xvcjogI2YyZjNmNztcbiAgLS1mZy1jb2xvcjogIzM4M2E0MTtcbiAgLS1yZWQ6ICNlNDMwMzA7XG4gIC0tZ3JlZW46ICMxOWExODc7XG4gIC0tYmx1ZTogIzM2N2JmMDtcbiAgLS1kYXJrLWJsdWU6ICMyNjVhYjE7XG4gIC0tbWFyb29uOiAjYjgxNzRjO1xuICAtLXB1cnBsZTogIzhjNDJhYjtcbn1cblxuOjotbW96LWZvY3VzLWlubmVyLFxuOi1tb3otZm9jdXNyaW5nIHtcbiAgYm9yZGVyOiAwO1xuICBjb2xvcjogdHJhbnNwYXJlbnQ7XG4gIHRleHQtc2hhZG93OiAwIDAgMCAjMzgzYTQxO1xufVxuXG46OnNlbGVjdGlvbixcbjo6LW1vei1zZWxlY3Rpb24ge1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQ6IGJsYWNrO1xufVxuXG4qIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgb3V0bGluZTogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lO1xuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCkgIWltcG9ydGFudDtcbiAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xuICBjdXJzb3I6IGRlZmF1bHQ7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xufVxuXG4uc2VsZWN0YWJsZSxcbi5zZWxlY3RhYmxlICoge1xuICBjdXJzb3I6IGF1dG87XG4gIHVzZXItc2VsZWN0OiB0ZXh0O1xuICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IHRleHQ7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IHRleHQ7XG4gIC1raHRtbC11c2VyLXNlbGVjdDogdGV4dDtcbiAgLW1vei11c2VyLXNlbGVjdDogdGV4dDtcbiAgLW1zLXVzZXItc2VsZWN0OiB0ZXh0O1xufVxuXG5odG1sLFxuYm9keSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYzZjc7XG4gIGNvbG9yOiAjMzgzYTQxO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGZvbnQtc2l6ZTogMTBwdDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdzogYXV0bztcbn1cblxuLndpdGgtc2hhZG93LCAub3V0c2V0LCBidXR0b24sIC5jaGVja3RleHQgaW5wdXQgKyBzcGFuLCAuYmx1ZS1idXR0b24sIC5jaGVja3RleHQgaW5wdXQ6Y2hlY2tlZCArIHNwYW4sIGJ1dHRvbi5ibHVlLWJ1dHRvbiwgLnJlZC1idXR0b24uYmx1ZS1idXR0b24sIC5ncmVlbi1idXR0b24uYmx1ZS1idXR0b24sIC5ncmVlbi1idXR0b24sIGJ1dHRvbi5ncmVlbi1idXR0b24sIC5yZWQtYnV0dG9uLmdyZWVuLWJ1dHRvbiwgLnJlZC1idXR0b24sIGJ1dHRvbi5yZWQtYnV0dG9uLFxuaW5wdXRbdHlwZT1idXR0b25dLFxuaW5wdXRbdHlwZT1zdWJtaXRdLFxuaW5wdXRbdHlwZT1yZXNldF0sIHNlbGVjdCwgaW5wdXRbdHlwZT10ZXh0XTpub3Qoc2VsZWN0KTpmb2N1cyxcbmlucHV0W3R5cGU9c2VhcmNoXTpub3Qoc2VsZWN0KTpmb2N1cyxcbmlucHV0W3R5cGU9dGVsXTpub3Qoc2VsZWN0KTpmb2N1cyxcbmlucHV0W3R5cGU9dXJsXTpub3Qoc2VsZWN0KTpmb2N1cyxcbmlucHV0W3R5cGU9ZW1haWxdOm5vdChzZWxlY3QpOmZvY3VzLFxuaW5wdXRbdHlwZT1wYXNzd29yZF06bm90KHNlbGVjdCk6Zm9jdXMsXG5pbnB1dFt0eXBlPWRhdGVdOm5vdChzZWxlY3QpOmZvY3VzLFxuaW5wdXRbdHlwZT1tb250aF06bm90KHNlbGVjdCk6Zm9jdXMsXG5pbnB1dFt0eXBlPXdlZWtdOm5vdChzZWxlY3QpOmZvY3VzLFxuaW5wdXRbdHlwZT10aW1lXTpub3Qoc2VsZWN0KTpmb2N1cyxcbmlucHV0W3R5cGU9bnVtYmVyXTpub3Qoc2VsZWN0KTpmb2N1cyxcbmlucHV0W3R5cGU9Y29sb3JdOm5vdChzZWxlY3QpOmZvY3VzLFxuc2VsZWN0Om5vdChzZWxlY3QpOmZvY3VzLFxudGV4dGFyZWE6bm90KHNlbGVjdCk6Zm9jdXMsIC5wYXBlciB7XG4gIGJveC1zaGFkb3c6IDZweCA2cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMSksIC02cHggLTZweCAxMHB4IHdoaXRlO1xufVxuXG4ub3V0c2V0LCBidXR0b24sIC5jaGVja3RleHQgaW5wdXQgKyBzcGFuLCAuYmx1ZS1idXR0b24sIC5jaGVja3RleHQgaW5wdXQ6Y2hlY2tlZCArIHNwYW4sIGJ1dHRvbi5ibHVlLWJ1dHRvbiwgLnJlZC1idXR0b24uYmx1ZS1idXR0b24sIC5ncmVlbi1idXR0b24uYmx1ZS1idXR0b24sIC5ncmVlbi1idXR0b24sIGJ1dHRvbi5ncmVlbi1idXR0b24sIC5yZWQtYnV0dG9uLmdyZWVuLWJ1dHRvbiwgLnJlZC1idXR0b24sIGJ1dHRvbi5yZWQtYnV0dG9uLFxuaW5wdXRbdHlwZT1idXR0b25dLFxuaW5wdXRbdHlwZT1zdWJtaXRdLFxuaW5wdXRbdHlwZT1yZXNldF0sIHNlbGVjdCwgaW5wdXRbdHlwZT10ZXh0XTpub3Qoc2VsZWN0KTpmb2N1cyxcbmlucHV0W3R5cGU9c2VhcmNoXTpub3Qoc2VsZWN0KTpmb2N1cyxcbmlucHV0W3R5cGU9dGVsXTpub3Qoc2VsZWN0KTpmb2N1cyxcbmlucHV0W3R5cGU9dXJsXTpub3Qoc2VsZWN0KTpmb2N1cyxcbmlucHV0W3R5cGU9ZW1haWxdOm5vdChzZWxlY3QpOmZvY3VzLFxuaW5wdXRbdHlwZT1wYXNzd29yZF06bm90KHNlbGVjdCk6Zm9jdXMsXG5pbnB1dFt0eXBlPWRhdGVdOm5vdChzZWxlY3QpOmZvY3VzLFxuaW5wdXRbdHlwZT1tb250aF06bm90KHNlbGVjdCk6Zm9jdXMsXG5pbnB1dFt0eXBlPXdlZWtdOm5vdChzZWxlY3QpOmZvY3VzLFxuaW5wdXRbdHlwZT10aW1lXTpub3Qoc2VsZWN0KTpmb2N1cyxcbmlucHV0W3R5cGU9bnVtYmVyXTpub3Qoc2VsZWN0KTpmb2N1cyxcbmlucHV0W3R5cGU9Y29sb3JdOm5vdChzZWxlY3QpOmZvY3VzLFxuc2VsZWN0Om5vdChzZWxlY3QpOmZvY3VzLFxudGV4dGFyZWE6bm90KHNlbGVjdCk6Zm9jdXMsIC5wYXBlciB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQ6ICNmMmYzZjc7XG59XG5cbi5pbnNldCwgaHIsIGJ1dHRvbi5hY3RpdmUsIC5jaGVja3RleHQgaW5wdXQgKyBzcGFuLmFjdGl2ZSwgLmFjdGl2ZS5ibHVlLWJ1dHRvbiwgLmFjdGl2ZS5ncmVlbi1idXR0b24sIC5hY3RpdmUucmVkLWJ1dHRvbiwgYnV0dG9uOmFjdGl2ZSwgLmNoZWNrdGV4dCBpbnB1dCArIHNwYW46YWN0aXZlLCAuYmx1ZS1idXR0b246YWN0aXZlLCAuZ3JlZW4tYnV0dG9uOmFjdGl2ZSwgLnJlZC1idXR0b246YWN0aXZlLFxuaW5wdXRbdHlwZT1idXR0b25dLmFjdGl2ZSxcbmlucHV0W3R5cGU9YnV0dG9uXTphY3RpdmUsXG5pbnB1dFt0eXBlPXN1Ym1pdF0uYWN0aXZlLFxuaW5wdXRbdHlwZT1zdWJtaXRdOmFjdGl2ZSxcbmlucHV0W3R5cGU9cmVzZXRdLmFjdGl2ZSxcbmlucHV0W3R5cGU9cmVzZXRdOmFjdGl2ZSwgaW5wdXRbdHlwZT10ZXh0XTpub3Qoc2VsZWN0KSxcbmlucHV0W3R5cGU9c2VhcmNoXTpub3Qoc2VsZWN0KSxcbmlucHV0W3R5cGU9dGVsXTpub3Qoc2VsZWN0KSxcbmlucHV0W3R5cGU9dXJsXTpub3Qoc2VsZWN0KSxcbmlucHV0W3R5cGU9ZW1haWxdOm5vdChzZWxlY3QpLFxuaW5wdXRbdHlwZT1wYXNzd29yZF06bm90KHNlbGVjdCksXG5pbnB1dFt0eXBlPWRhdGVdOm5vdChzZWxlY3QpLFxuaW5wdXRbdHlwZT1tb250aF06bm90KHNlbGVjdCksXG5pbnB1dFt0eXBlPXdlZWtdOm5vdChzZWxlY3QpLFxuaW5wdXRbdHlwZT10aW1lXTpub3Qoc2VsZWN0KSxcbmlucHV0W3R5cGU9bnVtYmVyXTpub3Qoc2VsZWN0KSxcbmlucHV0W3R5cGU9Y29sb3JdOm5vdChzZWxlY3QpLFxuc2VsZWN0Om5vdChzZWxlY3QpLFxudGV4dGFyZWE6bm90KHNlbGVjdCkge1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3gtc2hhZG93OiAwIDAgdHJhbnNwYXJlbnQsIDAgMCB0cmFuc3BhcmVudCwgaW5zZXQgM3B4IDNweCA1cHggcmdiYSgwLCAwLCAwLCAwLjEpLCBpbnNldCAtM3B4IC0zcHggNXB4IHdoaXRlO1xuICBiYWNrZ3JvdW5kOiAjZjhmOWZiO1xufVxuXG4ucGFwZXIge1xuICBwYWRkaW5nOiAxMHB4IDIwcHggMjBweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgbWluLWhlaWdodDogMTAwcHg7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG4gIGJhY2tncm91bmQ6ICNmMmYzZjc7XG59XG5cbnNlY3Rpb24sXG5hcnRpY2xlLFxuLnNlY3Rpb24sXG4uYXJ0aWNsZSxcbi5wYXBlciB7XG4gIGxpbmUtaGVpZ2h0OiAyZW07XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgd29yZC1icmVhazogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMmVtO1xufVxuXG5pbnB1dFt0eXBlPXRleHRdLFxuaW5wdXRbdHlwZT1zZWFyY2hdLFxuaW5wdXRbdHlwZT10ZWxdLFxuaW5wdXRbdHlwZT11cmxdLFxuaW5wdXRbdHlwZT1lbWFpbF0sXG5pbnB1dFt0eXBlPXBhc3N3b3JkXSxcbmlucHV0W3R5cGU9ZGF0ZV0sXG5pbnB1dFt0eXBlPW1vbnRoXSxcbmlucHV0W3R5cGU9d2Vla10sXG5pbnB1dFt0eXBlPXRpbWVdLFxuaW5wdXRbdHlwZT1udW1iZXJdLFxuaW5wdXRbdHlwZT1jb2xvcl0sXG5zZWxlY3QsXG50ZXh0YXJlYSB7XG4gIGJvcmRlcjogMDtcbiAgYmFja2dyb3VuZDogI2YyZjNmNztcbiAgY29sb3I6ICMzODNhNDE7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIHBhZGRpbmc6IDAgMS4yNWVtO1xuICBsaW5lLWhlaWdodDogMS4yNWVtO1xuICBoZWlnaHQ6IDMuNWVtO1xuICBtYXJnaW46IDEwcHggMDtcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIGN1cnNvcjogdGV4dDtcbiAgdXNlci1zZWxlY3Q6IHRleHQ7XG4gIC13ZWJraXQtdG91Y2gtY2FsbG91dDogdGV4dDtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogdGV4dDtcbiAgLWtodG1sLXVzZXItc2VsZWN0OiB0ZXh0O1xuICAtbW96LXVzZXItc2VsZWN0OiB0ZXh0O1xuICAtbXMtdXNlci1zZWxlY3Q6IHRleHQ7XG4gIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC4ycztcbn1cbnRleHRhcmVhIHtcbiAgaGVpZ2h0OiAzNTBweDtcbiAgcGFkZGluZzogMS4yNWVtO1xufVxuXG5zZWxlY3Qge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQ6IHVybChkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUIyWlhKemFXOXVQU0l4TGpFaUlIWnBaWGRDYjNnOUlqQWdNQ0F4T1NBeE9TSWdlRzFzYm5NOUltaDBkSEE2THk5M2QzY3Vkek11YjNKbkx6SXdNREF2YzNabklqNDhaeUIwY21GdWMyWnZjbTA5SW0xaGRISnBlQ2d1TURNMElEQWdNQ0F1TURNMElDMDJMamdnTVM0M1pTMDFLU0lnYzNSNWJHVTlJbVpwYkd3Nkl6ZGlOMlU0WXlJK1BIQmhkR2dnWkQwaWJUUTRNQ0F6TkRRdE1qRXhMVEl4TW1NdE1UWXRNVFl0TkRFdE1UWXROVGNnTUMweE5pQXhOaTB4TmlBME1pQXdJRFUzYkRJek9DQXlNemxqT0M0MElEZ3VOU0F5TUNBeE1pQXpNU0F4TWlBeE1TQXdMalUySURJeUxUTXVNaUF6TVMweE1td3lNemd0TWpNNVl6RTJMVEUySURFMkxUUXlJREF0TlRkekxUUXhMVEUyTFRVM0lEQjZJaUJ6ZEhsc1pUMGlabWxzYkRvak4ySTNaVGhqSWk4K1BDOW5Qand2YzNablBnbz0pIG5vLXJlcGVhdCByaWdodCAxZW0gY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEuMmVtO1xuICBwYWRkaW5nLXJpZ2h0OiAzZW07XG59XG5cbmlucHV0OjpwbGFjZWhvbGRlcixcbnRleHRhcmVhOjpwbGFjZWhvbGRlciB7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycztcbiAgY29sb3I6IGluaGVyaXQ7XG59XG5cbmlucHV0OmZvY3VzOjpwbGFjZWhvbGRlcixcbnRleHRhcmVhOmZvY3VzOjpwbGFjZWhvbGRlciB7XG4gIG9wYWNpdHk6IDAuMjtcbn1cblxuaW5wdXQ6LW1zLWlucHV0LXBsYWNlaG9sZGVyLFxudGV4dGFyZWE6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzO1xuICBjb2xvcjogaW5oZXJpdDtcbn1cblxuaW5wdXQ6Zm9jdXM6LW1zLWlucHV0LXBsYWNlaG9sZGVyLFxudGV4dGFyZWE6Zm9jdXM6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgb3BhY2l0eTogMC4yO1xufVxuXG5pbnB1dFt0eXBlPXNlYXJjaF06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24sXG5pbnB1dFt0eXBlPXNlYXJjaF06Oi13ZWJraXQtc2VhcmNoLWNhbmNlbC1idXR0b24sXG5pbnB1dFt0eXBlPXNlYXJjaF06Oi13ZWJraXQtc2VhcmNoLXJlc3VsdHMtYnV0dG9uLFxuaW5wdXRbdHlwZT1zZWFyY2hdOjotd2Via2l0LXNlYXJjaC1yZXN1bHRzLWRlY29yYXRpb24ge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5idXR0b24sIC5jaGVja3RleHQgaW5wdXQgKyBzcGFuLCAuYmx1ZS1idXR0b24sIC5jaGVja3RleHQgaW5wdXQ6Y2hlY2tlZCArIHNwYW4sIGJ1dHRvbi5ibHVlLWJ1dHRvbiwgLnJlZC1idXR0b24uYmx1ZS1idXR0b24sIC5ncmVlbi1idXR0b24uYmx1ZS1idXR0b24sIC5ncmVlbi1idXR0b24sIGJ1dHRvbi5ncmVlbi1idXR0b24sIC5yZWQtYnV0dG9uLmdyZWVuLWJ1dHRvbiwgLnJlZC1idXR0b24sIGJ1dHRvbi5yZWQtYnV0dG9uLFxuaW5wdXRbdHlwZT1idXR0b25dLFxuaW5wdXRbdHlwZT1zdWJtaXRdLFxuaW5wdXRbdHlwZT1yZXNldF0ge1xuICBib3JkZXI6IDA7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBwYWRkaW5nOiAxMHB4IDA7XG4gIHdpZHRoOiA4ZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogaW5oZXJpdDtcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGJhY2tncm91bmQtY29sb3IsIGJveC1zaGFkb3c7XG4gIHRyYW5zaXRpb24tZGVsYXk6IDAuMnM7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMnM7XG59XG5idXR0b24uYWN0aXZlLCAuY2hlY2t0ZXh0IGlucHV0ICsgc3Bhbi5hY3RpdmUsIC5hY3RpdmUuYmx1ZS1idXR0b24sIC5hY3RpdmUuZ3JlZW4tYnV0dG9uLCAuYWN0aXZlLnJlZC1idXR0b24sIGJ1dHRvbjphY3RpdmUsIC5jaGVja3RleHQgaW5wdXQgKyBzcGFuOmFjdGl2ZSwgLmJsdWUtYnV0dG9uOmFjdGl2ZSwgLmdyZWVuLWJ1dHRvbjphY3RpdmUsIC5yZWQtYnV0dG9uOmFjdGl2ZSxcbmlucHV0W3R5cGU9YnV0dG9uXS5hY3RpdmUsXG5pbnB1dFt0eXBlPWJ1dHRvbl06YWN0aXZlLFxuaW5wdXRbdHlwZT1zdWJtaXRdLmFjdGl2ZSxcbmlucHV0W3R5cGU9c3VibWl0XTphY3RpdmUsXG5pbnB1dFt0eXBlPXJlc2V0XS5hY3RpdmUsXG5pbnB1dFt0eXBlPXJlc2V0XTphY3RpdmUge1xuICB0cmFuc2l0aW9uLWRlbGF5OiAwcztcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4xcztcbn1cbi5yZWQtYnV0dG9uLCBidXR0b24ucmVkLWJ1dHRvbiwgLmNoZWNrdGV4dCBpbnB1dCArIHNwYW4ucmVkLWJ1dHRvbiwgLnJlZC1idXR0b24uYmx1ZS1idXR0b24sIC5yZWQtYnV0dG9uLmdyZWVuLWJ1dHRvbixcbmlucHV0W3R5cGU9YnV0dG9uXS5yZWQtYnV0dG9uLFxuaW5wdXRbdHlwZT1zdWJtaXRdLnJlZC1idXR0b24sXG5pbnB1dFt0eXBlPXJlc2V0XS5yZWQtYnV0dG9uIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1zaGFkb3c6IDAgMC4xZW0gMC4xZW0gcmdiYSgwLCAwLCAwLCAwLjcpO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAjZTQzMDMwIDMwJSwgI2U4NGI0YiA4MCUpO1xuICBib3gtc2hhZG93OiAwIDAgMC41ZW0gcmdiYSgyMjgsIDQ4LCA0OCwgMC43KSwgMCAwIHRyYW5zcGFyZW50LCBpbnNldCAwIC01cHggMCByZ2JhKDAsIDAsIDAsIDAuMDUpLCBpbnNldCAwIDJweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbiAgYm9yZGVyLXJhZGl1czogNnB4IDZweCA4cHggOHB4O1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBib3gtc2hhZG93LCBib3JkZXItcmFkaXVzO1xufVxuLnJlZC1idXR0b24uYWN0aXZlLCAucmVkLWJ1dHRvbjphY3RpdmUsIGJ1dHRvbi5yZWQtYnV0dG9uLmFjdGl2ZSwgYnV0dG9uLnJlZC1idXR0b246YWN0aXZlLFxuaW5wdXRbdHlwZT1idXR0b25dLnJlZC1idXR0b24uYWN0aXZlLFxuaW5wdXRbdHlwZT1idXR0b25dLnJlZC1idXR0b246YWN0aXZlLFxuaW5wdXRbdHlwZT1zdWJtaXRdLnJlZC1idXR0b24uYWN0aXZlLFxuaW5wdXRbdHlwZT1zdWJtaXRdLnJlZC1idXR0b246YWN0aXZlLFxuaW5wdXRbdHlwZT1yZXNldF0ucmVkLWJ1dHRvbi5hY3RpdmUsXG5pbnB1dFt0eXBlPXJlc2V0XS5yZWQtYnV0dG9uOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsICNlNDMwMzAgMzAlLCAjZTg0YjRiIDgwJSk7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgYm94LXNoYWRvdzogMCAwIHRyYW5zcGFyZW50LCAwIDAgdHJhbnNwYXJlbnQsIGluc2V0IDAgMnB4IDVweCAycHggcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuXG4uZ3JlZW4tYnV0dG9uLCBidXR0b24uZ3JlZW4tYnV0dG9uLCAuY2hlY2t0ZXh0IGlucHV0ICsgc3Bhbi5ncmVlbi1idXR0b24sIC5ncmVlbi1idXR0b24uYmx1ZS1idXR0b24sIC5ncmVlbi1idXR0b24ucmVkLWJ1dHRvbixcbmlucHV0W3R5cGU9YnV0dG9uXS5ncmVlbi1idXR0b24sXG5pbnB1dFt0eXBlPXN1Ym1pdF0uZ3JlZW4tYnV0dG9uLFxuaW5wdXRbdHlwZT1yZXNldF0uZ3JlZW4tYnV0dG9uIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1zaGFkb3c6IDAgMC4xZW0gMC4xZW0gcmdiYSgwLCAwLCAwLCAwLjcpO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAjMTlhMTg3IDMwJSwgIzFkYmI5ZCA4MCUpO1xuICBib3gtc2hhZG93OiAwIDAgMC41ZW0gcmdiYSgyNSwgMTYxLCAxMzUsIDAuNyksIDAgMCB0cmFuc3BhcmVudCwgaW5zZXQgMCAtNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjA1KSwgaW5zZXQgMCAycHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG4gIGJvcmRlci1yYWRpdXM6IDZweCA2cHggOHB4IDhweDtcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYm94LXNoYWRvdywgYm9yZGVyLXJhZGl1cztcbn1cbi5ncmVlbi1idXR0b24uYWN0aXZlLCAuZ3JlZW4tYnV0dG9uOmFjdGl2ZSwgYnV0dG9uLmdyZWVuLWJ1dHRvbi5hY3RpdmUsIGJ1dHRvbi5ncmVlbi1idXR0b246YWN0aXZlLFxuaW5wdXRbdHlwZT1idXR0b25dLmdyZWVuLWJ1dHRvbi5hY3RpdmUsXG5pbnB1dFt0eXBlPWJ1dHRvbl0uZ3JlZW4tYnV0dG9uOmFjdGl2ZSxcbmlucHV0W3R5cGU9c3VibWl0XS5ncmVlbi1idXR0b24uYWN0aXZlLFxuaW5wdXRbdHlwZT1zdWJtaXRdLmdyZWVuLWJ1dHRvbjphY3RpdmUsXG5pbnB1dFt0eXBlPXJlc2V0XS5ncmVlbi1idXR0b24uYWN0aXZlLFxuaW5wdXRbdHlwZT1yZXNldF0uZ3JlZW4tYnV0dG9uOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsICMxOWExODcgMzAlLCAjMWRiYjlkIDgwJSk7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgYm94LXNoYWRvdzogMCAwIHRyYW5zcGFyZW50LCAwIDAgdHJhbnNwYXJlbnQsIGluc2V0IDAgMnB4IDVweCAycHggcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuXG4uYmx1ZS1idXR0b24sIC5jaGVja3RleHQgaW5wdXQ6Y2hlY2tlZCArIHNwYW4sIGJ1dHRvbi5ibHVlLWJ1dHRvbiwgLmNoZWNrdGV4dCBpbnB1dCArIHNwYW4uYmx1ZS1idXR0b24sIC5ibHVlLWJ1dHRvbi5yZWQtYnV0dG9uLCAuYmx1ZS1idXR0b24uZ3JlZW4tYnV0dG9uLFxuaW5wdXRbdHlwZT1idXR0b25dLmJsdWUtYnV0dG9uLFxuaW5wdXRbdHlwZT1zdWJtaXRdLmJsdWUtYnV0dG9uLFxuaW5wdXRbdHlwZT1yZXNldF0uYmx1ZS1idXR0b24ge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LXNoYWRvdzogMCAwLjFlbSAwLjFlbSByZ2JhKDAsIDAsIDAsIDAuNyk7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsICMzNjdiZjAgMzAlLCAjNTI4ZWYyIDgwJSk7XG4gIGJveC1zaGFkb3c6IDAgMCAwLjVlbSByZ2JhKDU0LCAxMjMsIDI0MCwgMC43KSwgMCAwIHRyYW5zcGFyZW50LCBpbnNldCAwIC01cHggMCByZ2JhKDAsIDAsIDAsIDAuMDUpLCBpbnNldCAwIDJweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbiAgYm9yZGVyLXJhZGl1czogNnB4IDZweCA4cHggOHB4O1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBib3gtc2hhZG93LCBib3JkZXItcmFkaXVzO1xufVxuLmJsdWUtYnV0dG9uLmFjdGl2ZSwgLmNoZWNrdGV4dCBpbnB1dDpjaGVja2VkICsgc3Bhbi5hY3RpdmUsIC5ibHVlLWJ1dHRvbjphY3RpdmUsIC5jaGVja3RleHQgaW5wdXQ6Y2hlY2tlZCArIHNwYW46YWN0aXZlLCBidXR0b24uYmx1ZS1idXR0b24uYWN0aXZlLCBidXR0b24uYmx1ZS1idXR0b246YWN0aXZlLFxuaW5wdXRbdHlwZT1idXR0b25dLmJsdWUtYnV0dG9uLmFjdGl2ZSxcbmlucHV0W3R5cGU9YnV0dG9uXS5ibHVlLWJ1dHRvbjphY3RpdmUsXG5pbnB1dFt0eXBlPXN1Ym1pdF0uYmx1ZS1idXR0b24uYWN0aXZlLFxuaW5wdXRbdHlwZT1zdWJtaXRdLmJsdWUtYnV0dG9uOmFjdGl2ZSxcbmlucHV0W3R5cGU9cmVzZXRdLmJsdWUtYnV0dG9uLmFjdGl2ZSxcbmlucHV0W3R5cGU9cmVzZXRdLmJsdWUtYnV0dG9uOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsICMzNjdiZjAgMzAlLCAjNTI4ZWYyIDgwJSk7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgYm94LXNoYWRvdzogMCAwIHRyYW5zcGFyZW50LCAwIDAgdHJhbnNwYXJlbnQsIGluc2V0IDAgMnB4IDVweCAycHggcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuXG5sYWJlbCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogMC41NmVtIDA7XG59XG5sYWJlbCwgbGFiZWwgKiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuYSwgYTpsaW5rLCBhOnZpc2l0ZWQsIGE6aG92ZXIgYTphY3RpdmUge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICMzNjdiZjA7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5hLCBhICosIGE6bGluaywgYTpsaW5rICosIGE6dmlzaXRlZCwgYTp2aXNpdGVkICosIGE6aG92ZXIgYTphY3RpdmUsIGE6aG92ZXIgYTphY3RpdmUgKiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuaDEsXG5oMixcbmgzLFxuaDQsXG5oNSxcbmg2IHtcbiAgbGluZS1oZWlnaHQ6IDEuNWVtO1xufVxuXG5oMSB7XG4gIGZvbnQtc2l6ZTogNGVtO1xuICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgbWFyZ2luOiAwLjdlbSAwO1xufVxuXG5oMiB7XG4gIGZvbnQtc2l6ZTogM2VtO1xuICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgbWFyZ2luOiAwLjhlbSAwO1xufVxuXG5oMyB7XG4gIGZvbnQtc2l6ZTogMi41ZW07XG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuICBtYXJnaW46IDAuOWVtIDA7XG59XG5cbmg0IHtcbiAgZm9udC1zaXplOiAyZW07XG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuICBtYXJnaW46IDFlbSAwO1xufVxuXG5oNSB7XG4gIG1hcmdpbjogMC41ZW0gMDtcbiAgZm9udC1zaXplOiAxLjJlbTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cblxuaDYge1xuICBtYXJnaW46IDFlbSAwIDFlbSAxLjRlbTtcbiAgZm9udC1zaXplOiAxZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5pbnB1dFt0eXBlPWNoZWNrYm94XSxcbmlucHV0W3R5cGU9cmFkaW9dIHtcbiAgZm9udC1zaXplOiAxZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgaGVpZ2h0OiAxLjJlbTtcbiAgd2lkdGg6IDEuMmVtO1xuICBtYXJnaW46IDAgMC4zZW07XG4gIGJveC1zaGFkb3c6IDJweCAycHggM3B4IHJnYmEoMCwgMCwgMCwgMC4yKSwgLTJweCAtMnB4IDNweCB3aGl0ZSwgaW5zZXQgMXB4IDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjIpLCBpbnNldCAtMXB4IC0xcHggMnB4IHdoaXRlO1xuICBib3JkZXI6IDAuMTVlbSBzb2xpZCAjZjJmM2Y3O1xuICB2ZXJ0aWNhbC1hbGlnbjogdGV4dC1ib3R0b207XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGJhY2tncm91bmQsIGJveC1zaGFkb3c7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMnM7XG59XG5pbnB1dFt0eXBlPWNoZWNrYm94XTphY3RpdmUsXG5pbnB1dFt0eXBlPXJhZGlvXTphY3RpdmUge1xuICBib3gtc2hhZG93OiAycHggMnB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMiksIC0ycHggLTJweCAzcHggd2hpdGUsIGluc2V0IDFweCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgaW5zZXQgLTFweCAtMXB4IDJweCB3aGl0ZSwgaW5zZXQgMCAwLjFlbSAwLjI1ZW0gcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuaW5wdXRbdHlwZT1jaGVja2JveF06Y2hlY2tlZCxcbmlucHV0W3R5cGU9cmFkaW9dOmNoZWNrZWQge1xuICBib3JkZXItd2lkdGg6IDAuMWVtO1xuICBib3JkZXItY29sb3I6ICMxMTVmZTI7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNjdiZjA7XG59XG5cbmlucHV0W3R5cGU9Y2hlY2tib3hdIHtcbiAgYm9yZGVyLXJhZGl1czogMjUlO1xufVxuaW5wdXRbdHlwZT1jaGVja2JveF06Y2hlY2tlZCB7XG4gIGJveC1zaGFkb3c6IDAgMCAwLjVlbSByZ2JhKDU0LCAxMjMsIDI0MCwgMC43KSwgaW5zZXQgMCAtMC4xZW0gMCByZ2JhKDAsIDAsIDAsIDAuMiksIGluc2V0IDAgMC4xZW0gMC4xZW0gcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xufVxuXG5pbnB1dFt0eXBlPXJhZGlvXSB7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG59XG5pbnB1dFt0eXBlPXJhZGlvXTpjaGVja2VkIHtcbiAgYm94LXNoYWRvdzogMCAwIDAuNWVtIHJnYmEoNTQsIDEyMywgMjQwLCAwLjcpO1xuICBib3gtc2hhZG93OiAwIDAgMC41ZW0gcmdiYSg1NCwgMTIzLCAyNDAsIDAuNyksIGluc2V0IDAgMC4xMmVtIDAuMWVtIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSk7XG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDAuMTVlbTtcbn1cblxuLmNoZWNrdGV4dCB7XG4gIHdpZHRoOiBhdXRvO1xuICBtYXJnaW46IDAuNWVtO1xufVxuLmNoZWNrdGV4dCBpbnB1dCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uY2hlY2t0ZXh0IGlucHV0ICsgc3BhbiB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nOiAxZW07XG4gIHRyYW5zaXRpb24tZGVsYXk6IDBzO1xufVxuLmNoZWNrdGV4dCBpbnB1dDpjaGVja2VkICsgc3BhbiB7XG4gIHBhZGRpbmc6IDFlbTtcbn1cblxuLnN3aXRjaCB7XG4gIGhlaWdodDogMnJlbTtcbiAgd2lkdGg6IDhyZW07XG4gIHBhZGRpbmc6IDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5zd2l0Y2ggaW5wdXQge1xuICBkaXNwbGF5OiBub25lO1xufVxuLnN3aXRjaCBpbnB1dCArIGRpdiB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYm94LXNoYWRvdywgYmFja2dyb3VuZC1jb2xvcjtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4ycztcbiAgdHJhbnNpdGlvbi1kZWxheTogMC4ycztcbiAgYm94LXNoYWRvdzogM3B4IDNweCAycHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMSksIGluc2V0IDJweCAycHggMnB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMSksIGluc2V0IC0ycHggLTJweCAxcHggd2hpdGU7XG59XG4uc3dpdGNoIGlucHV0ICsgZGl2OjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiBjYWxjKDJyZW0gKyA0cHgpO1xuICB3aWR0aDogY2FsYygycmVtICsgNHB4KTtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgYm9yZGVyOiBzb2xpZCB3aGl0ZSAzcHg7XG4gIGJhY2tncm91bmQ6ICMzNjdiZjA7XG4gIGJveC1zaGFkb3c6IDAgM3B4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjIpLCBpbnNldCAwIC0xcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTZweCk7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzO1xufVxuLnN3aXRjaCBpbnB1dDpjaGVja2VkICsgZGl2IHtcbiAgYmFja2dyb3VuZDogIzM2N2JmMDtcbiAgYm94LXNoYWRvdzogMCAwIDAuNWVtIHJnYmEoNTQsIDEyMywgMjQwLCAwLjcpLCBpbnNldCAwIDJweCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4zKSwgaW5zZXQgMCAwIHRyYW5zcGFyZW50O1xufVxuLnN3aXRjaCBpbnB1dDpjaGVja2VkICsgZGl2OjpiZWZvcmUge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg2cmVtLCAtNnB4KTtcbn1cblxuaHIge1xuICB3aWR0aDogNzIlO1xuICBoZWlnaHQ6IDhweDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBib3JkZXI6IDA7XG59XG5cbmNvZGUsXG5wcmUge1xuICBwYWRkaW5nOiAwLjVlbSAxZW07XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIGJveC1zaGFkb3c6IDAgNXB4IDMwcHggMCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xufVxuXG5jb2RlIHtcbiAgYmFja2dyb3VuZDogI2U2ZTZlNjtcbn1cblxucHJlIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIG1hcmdpbjogNGVtIDA7XG59XG5cbmNvZGUsIGNvZGUgKixcbnByZSxcbnByZSAqIHtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIGxpbmUtaGVpZ2h0OiAyZW07XG4gIGN1cnNvcjogYXV0bztcbiAgdXNlci1zZWxlY3Q6IHRleHQ7XG4gIC13ZWJraXQtdG91Y2gtY2FsbG91dDogdGV4dDtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogdGV4dDtcbiAgLWtodG1sLXVzZXItc2VsZWN0OiB0ZXh0O1xuICAtbW96LXVzZXItc2VsZWN0OiB0ZXh0O1xuICAtbXMtdXNlci1zZWxlY3Q6IHRleHQ7XG59XG5cbmJsb2NrcXVvdGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMC41ZW0gMWVtO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJveC1zaGFkb3c6IDAgNXB4IDMwcHggMCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICBib3JkZXItbGVmdDogNnB4IHNvbGlkICMzNjdiZjA7XG59XG5cbi5nc2ktY29udGFpbmVyIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGxpbmUtaGVpZ2h0OiB2YXIoLS1nc1RleHRTaXplKTtcbn1cblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIEdyb3VwICoqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLkdhbWVTY29yZUdyb3VwLmdzaS1jb250YWluZXIge1xuICBib3JkZXI6IHZhcigtLWdzQm9yZGVyKTtcbiAgYmFja2dyb3VuZDogdmFyKC0tZ3NCYWNrZ3JvdW5kKTtcbiAgcGFkZGluZy1yaWdodDogMnB4O1xuICBtYXJnaW4tbGVmdDogM3B4O1xuICBjb2xvcjogdmFyKC0tZ3NUZXh0Q29sb3IpO1xufVxuXG4uR2FtZVNjb3JlR3JvdXAuZ3NpLWNvbnRhaW5lci1oZyB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWdzQmFja2dyb3VuZEhHKTtcbiAgYm9yZGVyOiB2YXIoLS1nc0JvcmRlckhHKTtcbiAgbGluZS1oZWlnaHQ6IHZhcigtLWdzVGV4dFNpemUpO1xufVxuXG4uR2FtZVNjb3JlR3JvdXAuZ3NpLW1vdmV3IHtcbiAgcGFkZGluZy1sZWZ0OiAycHg7XG4gIGxpbmUtaGVpZ2h0OiB2YXIoLS1nc1RleHRTaXplKTtcbn1cblxuLkdhbWVTY29yZUdyb3VwLmdzaS1tb3ZlYiB7XG4gIHBhZGRpbmctbGVmdDogMnB4O1xuICBsaW5lLWhlaWdodDogdmFyKC0tZ3NUZXh0U2l6ZSk7XG59XG5cbi5HYW1lU2NvcmVHcm91cC5nc2ktcGx5IHtcbiAgYmFja2dyb3VuZDogdmFyKC0tZ3NCYWNrZ3JvdW5kQU4pO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIG1hcmdpbi1yaWdodDogMnB4O1xuICBib3JkZXI6IHZhcigtLWdzQm9yZGVyQU4pO1xuICBmb250LXNpemU6IHZhcigtLWdzVGV4dFNpemUpO1xuICBsaW5lLWhlaWdodDogdmFyKC0tZ3NUZXh0U2l6ZSk7XG59XG5cbi5HYW1lU2NvcmVHcm91cC5nc2ktcGx5LWhpZ2hsaWdodCB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWdzQmFja2dyb3VuZEhHKTtcbiAgY29sb3I6IHZhcigtLWdzVGV4dENvbG9ySEcpO1xuICBib3JkZXI6IHZhcigtLWdzQm9yZGVySEcpO1xuICBsaW5lLWhlaWdodDogdmFyKC0tZ3NUZXh0U2l6ZSk7XG59XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogVmFyaWF0aW9uIEdyb3VwICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIEFubm90YXRpb24gR3JvdXAgKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4uQW5ub3RhdGlvbi5nc2ktY29udGFpbmVyIHtcbiAgYm9yZGVyOiB2YXIoLS1nc0JvcmRlckFOKTtcbiAgYmFja2dyb3VuZDogdmFyKC0tZ3NCYWNrZ3JvdW5kQU4pO1xuICBwYWRkaW5nLWxlZnQ6IDJweDtcbiAgcGFkZGluZy1yaWdodDogM3B4O1xuICBjb2xvcjogdmFyKC0tZ3NUZXh0Q29sb3IpO1xuICBsaW5lLWhlaWdodDogdmFyKC0tZ3NUZXh0U2l6ZSk7XG59XG5cbi5Bbm5vdGF0aW9uLmdzaS1jb250YWluZXItaGcge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1nc0JhY2tncm91bmRIRyk7XG4gIGJvcmRlcjogdmFyKC0tZ3NCb3JkZXJIRyk7XG4gIGxpbmUtaGVpZ2h0OiB2YXIoLS1nc1RleHRTaXplKTtcbn1cblxuLkFubm90YXRpb24uZ3NpLW1vdmV3IHtcbiAgcGFkZGluZy1sZWZ0OiAycHg7XG4gIGxpbmUtaGVpZ2h0OiB2YXIoLS1nc1RleHRTaXplKTtcbn1cblxuLkFubm90YXRpb24uZ3NpLW1vdmViIHtcbiAgcGFkZGluZy1sZWZ0OiAycHg7XG4gIGxpbmUtaGVpZ2h0OiB2YXIoLS1nc1RleHRTaXplKTtcbn1cblxuLkFubm90YXRpb24uZ3NpLXBseSB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWdzQmFja2dyb3VuZEFOKTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBib3JkZXI6IHZhcigtLWdzQm9yZGVyQU4pO1xuICBmb250LXNpemU6IHZhcigtLWdzVGV4dFNpemUpO1xuICBsaW5lLWhlaWdodDogdmFyKC0tZ3NUZXh0U2l6ZSk7XG59XG5cbi5Bbm5vdGF0aW9uLmdzaS1wbHktaGlnaGxpZ2h0IHtcbiAgYmFja2dyb3VuZDogdmFyKC0tZ3NCYWNrZ3JvdW5kSEcpO1xuICBjb2xvcjogdmFyKC0tZ3NUZXh0Q29sb3JIRyk7XG4gIGJvcmRlcjogdmFyKC0tZ3NCb3JkZXJIRyk7XG4gIGxpbmUtaGVpZ2h0OiB2YXIoLS1nc1RleHRTaXplKTtcbn1cblxuLkFubm90YXRpb24uZ3NpLWNvbW1lbnQge1xuICBjb2xvcjogdmFyKC0tZ3NUZXh0Q29sb3JBTik7XG4gIHBhZGRpbmctbGVmdDogM3B4O1xuICBwYWRkaW5nLXJpZ2h0OiAycHg7XG4gIG1hcmdpbi1sZWZ0OiAzcHg7XG4gIG1hcmdpbi1yaWdodDogMnB4O1xuICBsaW5lLWhlaWdodDogdmFyKC0tZ3NUZXh0U2l6ZSk7XG59XG5cbi5jdXJyZW50LW1vdmUge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1nc0JhY2tncm91bmRIRyk7XG4gIGJvcmRlcjogdmFyKC0tZ3NCb3JkZXJIRyk7XG4gIGNvbG9yOiB2YXIoLS1nc1RleHRDb2xvckhHKTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GameScoreItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-game-score-item',
                templateUrl: './game-score-item.component.html',
                styleUrls: ['./game-score-item.component.scss']
            }]
    }], function () { return [{ type: src_app_services_olga_service__WEBPACK_IMPORTED_MODULE_2__["OlgaService"] }, { type: _services_game_service__WEBPACK_IMPORTED_MODULE_1__["GameService"] }]; }, { data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], type: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], typeName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
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
/* harmony import */ var _services_game_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/game.service */ "./src/app/services/game.service.ts");
/* harmony import */ var _menu_game_score_item_menu_game_score_item_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu-game-score-item/menu-game-score-item.component */ "./src/app/game-score/menu-game-score-item/menu-game-score-item.component.ts");
/* harmony import */ var _game_score_item_game_score_item_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./game-score-item/game-score-item.component */ "./src/app/game-score/game-score-item/game-score-item.component.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _services_olga_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/olga.service */ "./src/app/services/olga.service.ts");
/* harmony import */ var _services_layout_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/layout.service */ "./src/app/services/layout.service.ts");









const _c0 = ["resizeHandle"];
const _c1 = ["pgnData"];
const _c2 = ["gamescore-container"];
function GamescoreUxComponent_mat_card_content_5_app_game_score_item_1_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-game-score-item", 11, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("contextmenu", function GamescoreUxComponent_mat_card_content_5_app_game_score_item_1_Template_app_game_score_item_contextmenu_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r9.openItemMenu($event, _r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", item_r6);
} }
function GamescoreUxComponent_mat_card_content_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card-content", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GamescoreUxComponent_mat_card_content_5_app_game_score_item_1_Template, 2, 1, "app-game-score-item", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx_r1.gameService._items));
} }
;
var ScoreViewType;
(function (ScoreViewType) {
    ScoreViewType[ScoreViewType["Table"] = 101] = "Table";
    ScoreViewType[ScoreViewType["Flow"] = 202] = "Flow";
})(ScoreViewType || (ScoreViewType = {}));
;
class GamescoreUxComponent {
    constructor(olga, gameService, layoutService) {
        this.olga = olga;
        this.gameService = gameService;
        this.layoutService = layoutService;
        this.scoreFontFamily = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]('Caveat');
        this.scoreFontSize = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](18);
        this.scoreItemMenu = null;
        this.resizeHandle = null;
        this.pgnData = null;
        this.container = null;
        this.gameScoreFontSize = 24;
        this.UUID = '';
        this.columnCount = 3;
        this.gameScore = [];
        this.rowHeight = '50px';
        this.maxPlySize = 178;
        this.resizing = false;
        this.scoreWidth = 360;
        this.viewType = ScoreViewType.Flow;
        this.previousCursor = 'pointer';
        this.GameScoreType = _services_game_service__WEBPACK_IMPORTED_MODULE_1__["GameScoreType"];
        this.ScoreViewType = ScoreViewType;
        // Settings
        this.currentItem = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](null);
        this.scoreItems = null;
        this.currentScoreItem = null;
        this.gameService.figurineNotation.subscribe((figurineNotation) => {
            if (figurineNotation) {
                this.scoreFontFamily.next('FigurineSymbolT1');
            }
            else {
                this.scoreFontFamily.next('Cambria');
            }
        });
        // this.gameService.currentItem.subscribe((item) => {
        //   if (this.currentScoreItem) {
        //     this.currentScoreItem.setCurrent(false);
        //   }
        //   if (this.scoreItems) {
        //     this.scoreItems.forEach((scoreItem) => {
        //       if (scoreItem.data === item) {
        //         scoreItem.setCurrent(true);
        //         this.currentScoreItem = scoreItem;
        //       }
        //     });
        //   }
        //   // move to manually updating the elements
        // })
    }
    ngOnInit() {
        //console.log(this.gameScore);
    }
    ngAfterViewInit() {
        if (this.pgnData) {
            this.gameService.loadPGN(this.pgnData.nativeElement.value);
            this.layoutService.resizeElement = document.getElementById('resize-handle-' + this.UUID);
            //console.log(this.scoreItems);
            window.setTimeout(() => {
                if (this.scoreItems) {
                    this.currentScoreItem = this.scoreItems.first;
                }
            }, 300);
        }
        this.resizeScore();
    }
    resizeScore() {
        if (this.scoreWidth) {
            this.columnCount = Math.floor(this.scoreWidth / this.maxPlySize);
        }
        else {
            this.columnCount = 3;
        }
    }
    openItemMenu(event, item) {
        event.preventDefault();
        event.stopPropagation();
        console.log(item);
        if (item.data) {
            item.setCurrent(!item.data.current);
        }
        switch (item.type) { // open different menus
        }
        //this.scoreItemMenu?.openAt(item);
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
            document.body.style.cursor = this.previousCursor;
        }
        if (this.resizeHandleEvent) {
            this.resizeHandleEvent(event);
        }
    }
    setGrabCursor(event) {
        this.previousCursor = document.body.style.cursor;
        this.resizing = true;
        document.body.style.cursor = 'grab';
        if (this.resizeHandle) {
            this.resizeHandle.nativeElement.style.cursor = 'grab';
        }
    }
    startTouch(event) {
        this.previousCursor = document.body.style.cursor;
        const touchPoint = event.touches[0];
        if (touchPoint) {
            if (this.layoutService.resizeElement) {
                this.resizing = true;
            }
        }
    }
    stopTouch(event) {
        this.resizing = false;
    }
    loadPGN(pgn) {
        this.gameService.loadPGN(pgn);
        this.ngOnInit();
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
        document.body.style.cursor = 'grab';
        if (this.resizeHandle) {
            this.resizeHandle.nativeElement.style.cursor = 'grab';
        }
        if (event.buttons > 0 && this.resizeHandleEvent) {
            this.resizeHandleEvent(event);
        }
    }
}
GamescoreUxComponent.ɵfac = function GamescoreUxComponent_Factory(t) { return new (t || GamescoreUxComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_olga_service__WEBPACK_IMPORTED_MODULE_5__["OlgaService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_game_service__WEBPACK_IMPORTED_MODULE_1__["GameService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_layout_service__WEBPACK_IMPORTED_MODULE_6__["LayoutService"])); };
GamescoreUxComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GamescoreUxComponent, selectors: [["app-game-score-ux"]], viewQuery: function GamescoreUxComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_menu_game_score_item_menu_game_score_item_component__WEBPACK_IMPORTED_MODULE_2__["MenuGameScoreItemComponent"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_game_score_item_game_score_item_component__WEBPACK_IMPORTED_MODULE_3__["GameScoreItemComponent"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.scoreItemMenu = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.resizeHandle = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.pgnData = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.container = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.scoreItems = _t);
    } }, inputs: { gameScoreFontSize: "gameScoreFontSize", UUID: "UUID", scoreWidth: "scoreWidth", viewType: "viewType" }, outputs: { scoreFontFamily: "scoreFontFamily", scoreFontSize: "scoreFontSize", resizing: "resizing", currentItem: "currentItem", currentScoreItem: "currentScoreItem" }, decls: 15, vars: 4, consts: [[1, "gs-menu", 3, "click"], ["scoreItemMenu", ""], [1, "gamescore-container"], [1, "score-title"], ["class", "score-list", 4, "ngIf"], ["value", "[Event \"GMA, Wijk aan Zee NED\"]\n[Site \"?\"]\n[Date \"2003.??.??\"]\n[Round \"1\"]\n[White \"Anand,V\"]\n[Black \"Radjabov,T\"]\n[Result \"1/2\"]\n[WhiteElo \"2750\"]\n[BlackElo \"2620\"]\n[ECO \"C12\"]\n[PlyCount \"55\"]\n[Annotator \"Hathaway\"]\n\n1. e4 e6 \n{ Im not terribly familiar with the style of Radjabov, so I dont know if this is his usual opening. }\n2. d4 d5 3. Nc3 Nf6 (3...Bb4 \n{ The Winawer Variation is probably best, though not as easy to play. }) 4. Bg5\n{ threatens e4-e5xf6 }\n (4. e5 \n{ keeps pieces on the board and avoids ...dxe4 }) 4...Bb4 (4...Be7 \n{ is more common and aims to trade dark-square bishops to ease Blacks cramp }) (4...dxe4 \n{ aims to avoid any cramp by bringing pieces into alignment for trading, though White does get at least one very good piece (Ne4 or Bg5) and an easier time castling queen-side, to stir up king-side threats }\n 5. Nxe4 Be7  (\n{ or Rubinsteins }\n 5...Nbd7) ) 5. e5 h6 6. Bd2 (6. Bh4 g5 7. exf6 gxh4 \n{ Black seems to equalize a little easier after this as he can win Pf6 in exchange for Ph4. }) 6...Bxc3 (6...Nfd7 7. Qg4 \n{ and White isnt incurring any weaknesses, but is either gaining Bb4 for Nc3 or after ...Bb4-f8 Black is cramped again }\n  (7. Nb5 $5 Bxd2+ 8. Qxd2 a6 9. Na3) ) 7. bxc3 Ne4 8. Qg4\n{ White immediately takes aim at the backward Pg7 & Rh8 and usually Pf7 & Ke8. For the moment Bd2 serves to defend Pc3 and to prevent ...Qd8-g5 (offering a queen trade to end the pressure) . }\n (\n{ While }\n 8. h4 \n{ is often useful in the French Defense with this pawn structure, I dont know that its been tried in this opening on this move. }) 8...g6 9. Bd3 (9. h4 \n{ could take over for Bd2 in guarding g5 and preparing a later attack by f2-f4, h4-h5 or vice versa. It also would allow Rh1 to develop to build the direct frontal threats to Pf7 & Pg6. }\n 9...c5 10. Bd3 Nxd2 11. Kxd2 Qa5 12. dxc5 Qxc5 13. Ne2 Qxf2 $4 14. Raf1 Qc5 15. Bxg6 fxg6 16. Qxg6+)  (9. Qd1 \n{ Fritz7; Odd! }) 9...Nxd2 10. Kxd2 c5 11. Nf3\n{ This has been considered the main line for many years, but I wonder if White can allow ...c5-c4 and not use more pawns to fight through Blacks pawns. }\n (11. dxc5 \n{ is probably still wrong because of ...Qg5+ }) (11. h4 \n{ still makes sense }) 11...Bd7 (11...c4 $6 \n{ The problem with this is that however much it slows White, it also limits Blacks queen-side offensive possibilities. }) (\n{ Prematurely playing }\n 11...cxd4 \n{ lets White straighten-out his pawns and Black has made no real progress. }\n 12. cxd4)  (11...Qa5 $5 \n{ Fritz7: with the idea of ...cxd4 }) 12. dxc5 Qe7 13. Rab1 Bc6 14. Nd4 Nd7\n{ These last few moves have been quite unusual for a French Defense, but they make sense; Qe7 defends Pf7 while Bc6 defends Pb7 and Nd7 threatens Pc5 & Pe5. }\n15. Rhe1 (15. Nxc6 bxc6 16. Rb7 Qxc5 17. Qf4 g5 18. Qd4 Qa5 19. Rb2 c5 $11 \n{ Fritz7 }) 15...Nxc5 16. Re3\n{ another way of getting the rook into position, in front of the king-side pawns, to threaten Blacks king-side pawns }\n16...h5 17. Qg3 O-O-O\n{ After this it would seem Blacks pieces can handle any threats White can generate. However, black might also have ideas of winning. How might he do that? Well, ...Be8, ...Kc8-b8-a8, ...Rd8-c8, ...Nc5-a4 and Pc3 is a target (slow I know) . Another idea is to keep Kd2 from ever escaping to safety by advancing ...h5-h4-h3 to break open the king-side and open the h-file for Blacks rooks. }\n (17...h4 $15 \n{ Fritz7 }) (17...Nxd3 $15 \n{ Fritz7 }) 18. Ke1 Qc7 (18...h4 19. Qg4 Rh5) 19. h4\n{ Anand aims to keep the king-side perfectly safe to ensure a draw. }\n (19. Qh4 \n{ Fritz7 }) 19...Qa5 20. Kf1 (20. Nxc6 bxc6 21. Kf1 Kd7 20. Qf4 Ke8 $11 \n{ Fritz7 }) 20...Rd7 (\n{ Premature is }\n 20...Qxa2 21. Ree1 Qa5  (21...Ba4 $11 \n{ Fritz7 })  22. Ra1 Qxc3 23. Nxc6 bxc6 24. Ba6+ $18) 21. Qf4\n{ This general activity is perfect. It threatens Pf7, defends Nd4 and in some cases prepares for Qf4-b4 to attack Kc8. }\n (21. Ree1 \n{ Fritz7 }) (21. Nxc6 bxc6 22. Ree1 \n{ Fritz7 }) 21...Rhd8\n{ Black is probably wondering why he organized his pieces to only defend light squares. Only Qa5 and Nc5 can get to dark squares and that makes Whites task of coordinating much easier. }\n (21...Qxa2 \n{ still premature }\n 22. Nxc6 bxc6 23. Qb4 Nb7 24. Ree1)  (21...Qxc3 $4 22. Nxc6 bxc6 23. Ba6+)  (21...Rc7 $14 \n{ Fritz7 }) (21...Na4 $14 \n{ Fritz7 }) 22. Kg1 (22. Nxc6 bxc6 23. Qb4 Qxb4 24. cxb4 d4 25. Ree1 Na4 $11 \n{ Fritz7 }) 22...Nxd3 23. Rxd3 (23. cxd3 Qxc3 24. Rg3 Rc7 $14 \n{ Fritz7 }) 23...Qc5 (23...Qxa2 24. Rdd1 Qc4 $11 \n{ Fritz7 }) 24. Rb4 a5 $2 (24...Rc7 \n{ Mark and Fritz7 agree! }) 25. Rb1 Rc7 26. Qc1 Be8 27. Nb3 (27. Qb2 \n{ If White commits too quickly to the b-file then Black might actually create some play against Ph4 and on the c-file. }\n 27...Qe7  (27...a4 $11 \n{ Fritz7 })  28. Nf3 Rc4 \n{ possibly preparing ...b5 }) 27...Qb6 (27...Qc4 28. Nxa5 Qxh4 $14 \n{ Fritz7 }) 28. Nd4\n{ Black created the weakness (Pa5) and cant quite defend it, so Anand forces a draw. }\n1/2-1/2", "type", "text", 1, "input-box", 3, "click", "change"], ["pgnData", "", "pgnBox", ""], [1, "resize-handle", 3, "id", "touchstart", "touchend", "mouseup", "mousedown"], ["resizeHandle", ""], [1, "score-list"], [3, "data", "contextmenu", 4, "ngFor", "ngForOf"], [3, "data", "contextmenu"], ["scoreItem", ""]], template: function GamescoreUxComponent_Template(rf, ctx) { if (rf & 1) {
        const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-menu-game-score-item", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GamescoreUxComponent_Template_app_menu_game_score_item_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); return _r0.open = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Score");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, GamescoreUxComponent_mat_card_content_5_Template, 3, 3, "mat-card-content", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "PGN:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GamescoreUxComponent_Template_input_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12); return ctx.loadPGN(_r3.value); })("change", function GamescoreUxComponent_Template_input_change_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12); return ctx.loadPGN(_r3.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("touchstart", function GamescoreUxComponent_Template_div_touchstart_13_listener($event) { return ctx.startTouch($event); })("touchend", function GamescoreUxComponent_Template_div_touchend_13_listener($event) { return ctx.stopTouch($event); })("mouseup", function GamescoreUxComponent_Template_div_mouseup_13_listener($event) { return ctx.resetResizeHandle($event); })("mousedown", function GamescoreUxComponent_Template_div_mousedown_13_listener($event) { return ctx.setGrabCursor($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("z-index", _r0.open ? 20 : 0 - 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.viewType === ctx.ScoreViewType.Flow);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "resize-handle-", ctx.UUID, "");
    } }, styles: ["@font-face {\n  font-family: \"Caveat\";\n  src: url('Caveat-Bold.woff2') format(\"woff2\"), url('Caveat-Bold.woff') format(\"woff\");\n  font-weight: bold;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"Caveat\";\n  src: url('Caveat-Regular.woff2') format(\"woff2\"), url('Caveat-Regular.woff') format(\"woff\");\n  font-weight: 600;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"FigurineSymbolT1\";\n  src: url('FigurineSymbolT1Bold.woff2') format(\"woff2\"), url('FigurineSymbolT1Bold.woff') format(\"woff\");\n  font-weight: bold;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"FigurineSymbolT1\";\n  src: url('FigurineSymbolT1.woff2') format(\"woff2\"), url('FigurineSymbolT1.woff') format(\"woff\");\n  font-weight: 600;\n  font-style: normal;\n  font-display: swap;\n}\n\n\n\n\n\n\n\n[_ngcontent-%COMP%]:root {\n  --bg-color: #f2f3f7;\n  --fg-color: #383a41;\n  --red: #e43030;\n  --green: #19a187;\n  --blue: #367bf0;\n  --dark-blue: #265ab1;\n  --maroon: #b8174c;\n  --purple: #8c42ab;\n}\n[_ngcontent-%COMP%]::-moz-focus-inner, [_ngcontent-%COMP%]:-moz-focusring {\n  border: 0;\n  color: transparent;\n  text-shadow: 0 0 0 #383a41;\n}\n[_ngcontent-%COMP%]::selection, [_ngcontent-%COMP%]::-moz-selection {\n  color: white;\n  background: black;\n}\n*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  outline: none;\n  user-select: none;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  -webkit-appearance: none;\n  -webkit-tap-highlight-color: transparent !important;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0) !important;\n  -webkit-touch-callout: none;\n  cursor: default;\n  letter-spacing: 0;\n}\n.selectable[_ngcontent-%COMP%], .selectable[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  cursor: auto;\n  user-select: text;\n  -webkit-touch-callout: text;\n  -webkit-user-select: text;\n  -khtml-user-select: text;\n  -moz-user-select: text;\n  -ms-user-select: text;\n}\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  background-color: #f2f3f7;\n  color: #383a41;\n  margin: 0;\n  padding: 0;\n  font-size: 10pt;\n  height: 100%;\n  overflow: auto;\n}\n.with-shadow[_ngcontent-%COMP%], .outset[_ngcontent-%COMP%], button[_ngcontent-%COMP%], .checktext[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]    + span[_ngcontent-%COMP%], .blue-button[_ngcontent-%COMP%], .checktext[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + span[_ngcontent-%COMP%], button.blue-button[_ngcontent-%COMP%], .red-button.blue-button[_ngcontent-%COMP%], .green-button.blue-button[_ngcontent-%COMP%], .green-button[_ngcontent-%COMP%], button.green-button[_ngcontent-%COMP%], .red-button.green-button[_ngcontent-%COMP%], .red-button[_ngcontent-%COMP%], button.red-button[_ngcontent-%COMP%], input[type=button][_ngcontent-%COMP%], input[type=submit][_ngcontent-%COMP%], input[type=reset][_ngcontent-%COMP%], select[_ngcontent-%COMP%], input[type=text][_ngcontent-%COMP%]:not(select):focus, input[type=search][_ngcontent-%COMP%]:not(select):focus, input[type=tel][_ngcontent-%COMP%]:not(select):focus, input[type=url][_ngcontent-%COMP%]:not(select):focus, input[type=email][_ngcontent-%COMP%]:not(select):focus, input[type=password][_ngcontent-%COMP%]:not(select):focus, input[type=date][_ngcontent-%COMP%]:not(select):focus, input[type=month][_ngcontent-%COMP%]:not(select):focus, input[type=week][_ngcontent-%COMP%]:not(select):focus, input[type=time][_ngcontent-%COMP%]:not(select):focus, input[type=number][_ngcontent-%COMP%]:not(select):focus, input[type=color][_ngcontent-%COMP%]:not(select):focus, select[_ngcontent-%COMP%]:not(select):focus, textarea[_ngcontent-%COMP%]:not(select):focus, .paper[_ngcontent-%COMP%] {\n  box-shadow: 6px 6px 10px rgba(0, 0, 0, 0.1), -6px -6px 10px white;\n}\n.outset[_ngcontent-%COMP%], button[_ngcontent-%COMP%], .checktext[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]    + span[_ngcontent-%COMP%], .blue-button[_ngcontent-%COMP%], .checktext[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + span[_ngcontent-%COMP%], button.blue-button[_ngcontent-%COMP%], .red-button.blue-button[_ngcontent-%COMP%], .green-button.blue-button[_ngcontent-%COMP%], .green-button[_ngcontent-%COMP%], button.green-button[_ngcontent-%COMP%], .red-button.green-button[_ngcontent-%COMP%], .red-button[_ngcontent-%COMP%], button.red-button[_ngcontent-%COMP%], input[type=button][_ngcontent-%COMP%], input[type=submit][_ngcontent-%COMP%], input[type=reset][_ngcontent-%COMP%], select[_ngcontent-%COMP%], input[type=text][_ngcontent-%COMP%]:not(select):focus, input[type=search][_ngcontent-%COMP%]:not(select):focus, input[type=tel][_ngcontent-%COMP%]:not(select):focus, input[type=url][_ngcontent-%COMP%]:not(select):focus, input[type=email][_ngcontent-%COMP%]:not(select):focus, input[type=password][_ngcontent-%COMP%]:not(select):focus, input[type=date][_ngcontent-%COMP%]:not(select):focus, input[type=month][_ngcontent-%COMP%]:not(select):focus, input[type=week][_ngcontent-%COMP%]:not(select):focus, input[type=time][_ngcontent-%COMP%]:not(select):focus, input[type=number][_ngcontent-%COMP%]:not(select):focus, input[type=color][_ngcontent-%COMP%]:not(select):focus, select[_ngcontent-%COMP%]:not(select):focus, textarea[_ngcontent-%COMP%]:not(select):focus, .paper[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  background: #f2f3f7;\n}\n.inset[_ngcontent-%COMP%], hr[_ngcontent-%COMP%], button.active[_ngcontent-%COMP%], .checktext[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]    + span.active[_ngcontent-%COMP%], .active.blue-button[_ngcontent-%COMP%], .active.green-button[_ngcontent-%COMP%], .active.red-button[_ngcontent-%COMP%], button[_ngcontent-%COMP%]:active, .checktext[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]    + span[_ngcontent-%COMP%]:active, .blue-button[_ngcontent-%COMP%]:active, .green-button[_ngcontent-%COMP%]:active, .red-button[_ngcontent-%COMP%]:active, input[type=button].active[_ngcontent-%COMP%], input[type=button][_ngcontent-%COMP%]:active, input[type=submit].active[_ngcontent-%COMP%], input[type=submit][_ngcontent-%COMP%]:active, input[type=reset].active[_ngcontent-%COMP%], input[type=reset][_ngcontent-%COMP%]:active, input[type=text][_ngcontent-%COMP%]:not(select), input[type=search][_ngcontent-%COMP%]:not(select), input[type=tel][_ngcontent-%COMP%]:not(select), input[type=url][_ngcontent-%COMP%]:not(select), input[type=email][_ngcontent-%COMP%]:not(select), input[type=password][_ngcontent-%COMP%]:not(select), input[type=date][_ngcontent-%COMP%]:not(select), input[type=month][_ngcontent-%COMP%]:not(select), input[type=week][_ngcontent-%COMP%]:not(select), input[type=time][_ngcontent-%COMP%]:not(select), input[type=number][_ngcontent-%COMP%]:not(select), input[type=color][_ngcontent-%COMP%]:not(select), select[_ngcontent-%COMP%]:not(select), textarea[_ngcontent-%COMP%]:not(select) {\n  border-radius: 10px;\n  box-shadow: 0 0 transparent, 0 0 transparent, inset 3px 3px 5px rgba(0, 0, 0, 0.1), inset -3px -3px 5px white;\n  background: #f8f9fb;\n}\n.paper[_ngcontent-%COMP%] {\n  padding: 10px 20px 20px;\n  margin-top: 20px;\n  min-height: 100px;\n  font-size: 1.2em;\n  background: #f2f3f7;\n}\nsection[_ngcontent-%COMP%], article[_ngcontent-%COMP%], .section[_ngcontent-%COMP%], .article[_ngcontent-%COMP%], .paper[_ngcontent-%COMP%] {\n  line-height: 2em;\n  word-wrap: break-word;\n  word-break: normal;\n  line-height: 2em;\n}\ninput[type=text][_ngcontent-%COMP%], input[type=search][_ngcontent-%COMP%], input[type=tel][_ngcontent-%COMP%], input[type=url][_ngcontent-%COMP%], input[type=email][_ngcontent-%COMP%], input[type=password][_ngcontent-%COMP%], input[type=date][_ngcontent-%COMP%], input[type=month][_ngcontent-%COMP%], input[type=week][_ngcontent-%COMP%], input[type=time][_ngcontent-%COMP%], input[type=number][_ngcontent-%COMP%], input[type=color][_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  border: 0;\n  background: #f2f3f7;\n  color: #383a41;\n  font-weight: normal;\n  padding: 0 1.25em;\n  line-height: 1.25em;\n  height: 3.5em;\n  margin: 10px 0;\n  font-size: 1.1rem;\n  cursor: text;\n  user-select: text;\n  -webkit-touch-callout: text;\n  -webkit-user-select: text;\n  -khtml-user-select: text;\n  -moz-user-select: text;\n  -ms-user-select: text;\n  transition: box-shadow 0.2s;\n}\ntextarea[_ngcontent-%COMP%] {\n  height: 350px;\n  padding: 1.25em;\n}\nselect[_ngcontent-%COMP%] {\n  cursor: pointer;\n  background: url(data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAxOSAxOSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyB0cmFuc2Zvcm09Im1hdHJpeCguMDM0IDAgMCAuMDM0IC02LjggMS43ZS01KSIgc3R5bGU9ImZpbGw6IzdiN2U4YyI+PHBhdGggZD0ibTQ4MCAzNDQtMjExLTIxMmMtMTYtMTYtNDEtMTYtNTcgMC0xNiAxNi0xNiA0MiAwIDU3bDIzOCAyMzljOC40IDguNSAyMCAxMiAzMSAxMiAxMSAwLjU2IDIyLTMuMiAzMS0xMmwyMzgtMjM5YzE2LTE2IDE2LTQyIDAtNTdzLTQxLTE2LTU3IDB6IiBzdHlsZT0iZmlsbDojN2I3ZThjIi8+PC9nPjwvc3ZnPgo=) no-repeat right 1em center;\n  background-size: 1.2em;\n  padding-right: 3em;\n}\ninput[_ngcontent-%COMP%]::placeholder, textarea[_ngcontent-%COMP%]::placeholder {\n  opacity: 1;\n  transition: opacity 0.2s;\n  color: inherit;\n}\ninput[_ngcontent-%COMP%]:focus::placeholder, textarea[_ngcontent-%COMP%]:focus::placeholder {\n  opacity: 0.2;\n}\ninput[_ngcontent-%COMP%]:-ms-input-placeholder, textarea[_ngcontent-%COMP%]:-ms-input-placeholder {\n  opacity: 1;\n  -ms-transition: opacity 0.2s;\n  transition: opacity 0.2s;\n  color: inherit;\n}\ninput[_ngcontent-%COMP%]:focus:-ms-input-placeholder, textarea[_ngcontent-%COMP%]:focus:-ms-input-placeholder {\n  opacity: 0.2;\n}\ninput[type=search][_ngcontent-%COMP%]::-webkit-search-decoration, input[type=search][_ngcontent-%COMP%]::-webkit-search-cancel-button, input[type=search][_ngcontent-%COMP%]::-webkit-search-results-button, input[type=search][_ngcontent-%COMP%]::-webkit-search-results-decoration {\n  display: none;\n}\nbutton[_ngcontent-%COMP%], .checktext[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]    + span[_ngcontent-%COMP%], .blue-button[_ngcontent-%COMP%], .checktext[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + span[_ngcontent-%COMP%], button.blue-button[_ngcontent-%COMP%], .red-button.blue-button[_ngcontent-%COMP%], .green-button.blue-button[_ngcontent-%COMP%], .green-button[_ngcontent-%COMP%], button.green-button[_ngcontent-%COMP%], .red-button.green-button[_ngcontent-%COMP%], .red-button[_ngcontent-%COMP%], button.red-button[_ngcontent-%COMP%], input[type=button][_ngcontent-%COMP%], input[type=submit][_ngcontent-%COMP%], input[type=reset][_ngcontent-%COMP%] {\n  border: 0;\n  text-transform: capitalize;\n  padding: 10px 0;\n  width: 8em;\n  text-align: center;\n  cursor: pointer;\n  color: inherit;\n  font-size: 1.1rem;\n  transition-property: background-color, box-shadow;\n  transition-delay: 0.2s;\n  transition-duration: 0.2s;\n}\nbutton.active[_ngcontent-%COMP%], .checktext[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]    + span.active[_ngcontent-%COMP%], .active.blue-button[_ngcontent-%COMP%], .active.green-button[_ngcontent-%COMP%], .active.red-button[_ngcontent-%COMP%], button[_ngcontent-%COMP%]:active, .checktext[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]    + span[_ngcontent-%COMP%]:active, .blue-button[_ngcontent-%COMP%]:active, .green-button[_ngcontent-%COMP%]:active, .red-button[_ngcontent-%COMP%]:active, input[type=button].active[_ngcontent-%COMP%], input[type=button][_ngcontent-%COMP%]:active, input[type=submit].active[_ngcontent-%COMP%], input[type=submit][_ngcontent-%COMP%]:active, input[type=reset].active[_ngcontent-%COMP%], input[type=reset][_ngcontent-%COMP%]:active {\n  transition-delay: 0s;\n  transition-duration: 0.1s;\n}\n.red-button[_ngcontent-%COMP%], button.red-button[_ngcontent-%COMP%], .checktext[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]    + span.red-button[_ngcontent-%COMP%], .red-button.blue-button[_ngcontent-%COMP%], .red-button.green-button[_ngcontent-%COMP%], input[type=button].red-button[_ngcontent-%COMP%], input[type=submit].red-button[_ngcontent-%COMP%], input[type=reset].red-button[_ngcontent-%COMP%] {\n  color: white;\n  font-weight: bold;\n  text-shadow: 0 0.1em 0.1em rgba(0, 0, 0, 0.7);\n  background: linear-gradient(to top, #e43030 30%, #e84b4b 80%);\n  box-shadow: 0 0 0.5em rgba(228, 48, 48, 0.7), 0 0 transparent, inset 0 -5px 0 rgba(0, 0, 0, 0.05), inset 0 2px 0 rgba(255, 255, 255, 0.2);\n  border-radius: 6px 6px 8px 8px;\n  transition-property: box-shadow, border-radius;\n}\n.red-button.active[_ngcontent-%COMP%], .red-button[_ngcontent-%COMP%]:active, button.red-button.active[_ngcontent-%COMP%], button.red-button[_ngcontent-%COMP%]:active, input[type=button].red-button.active[_ngcontent-%COMP%], input[type=button].red-button[_ngcontent-%COMP%]:active, input[type=submit].red-button.active[_ngcontent-%COMP%], input[type=submit].red-button[_ngcontent-%COMP%]:active, input[type=reset].red-button.active[_ngcontent-%COMP%], input[type=reset].red-button[_ngcontent-%COMP%]:active {\n  background: linear-gradient(to top, #e43030 30%, #e84b4b 80%);\n  border-radius: 6px;\n  box-shadow: 0 0 transparent, 0 0 transparent, inset 0 2px 5px 2px rgba(0, 0, 0, 0.2);\n}\n.green-button[_ngcontent-%COMP%], button.green-button[_ngcontent-%COMP%], .checktext[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]    + span.green-button[_ngcontent-%COMP%], .green-button.blue-button[_ngcontent-%COMP%], .green-button.red-button[_ngcontent-%COMP%], input[type=button].green-button[_ngcontent-%COMP%], input[type=submit].green-button[_ngcontent-%COMP%], input[type=reset].green-button[_ngcontent-%COMP%] {\n  color: white;\n  font-weight: bold;\n  text-shadow: 0 0.1em 0.1em rgba(0, 0, 0, 0.7);\n  background: linear-gradient(to top, #19a187 30%, #1dbb9d 80%);\n  box-shadow: 0 0 0.5em rgba(25, 161, 135, 0.7), 0 0 transparent, inset 0 -5px 0 rgba(0, 0, 0, 0.05), inset 0 2px 0 rgba(255, 255, 255, 0.2);\n  border-radius: 6px 6px 8px 8px;\n  transition-property: box-shadow, border-radius;\n}\n.green-button.active[_ngcontent-%COMP%], .green-button[_ngcontent-%COMP%]:active, button.green-button.active[_ngcontent-%COMP%], button.green-button[_ngcontent-%COMP%]:active, input[type=button].green-button.active[_ngcontent-%COMP%], input[type=button].green-button[_ngcontent-%COMP%]:active, input[type=submit].green-button.active[_ngcontent-%COMP%], input[type=submit].green-button[_ngcontent-%COMP%]:active, input[type=reset].green-button.active[_ngcontent-%COMP%], input[type=reset].green-button[_ngcontent-%COMP%]:active {\n  background: linear-gradient(to top, #19a187 30%, #1dbb9d 80%);\n  border-radius: 6px;\n  box-shadow: 0 0 transparent, 0 0 transparent, inset 0 2px 5px 2px rgba(0, 0, 0, 0.2);\n}\n.blue-button[_ngcontent-%COMP%], .checktext[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + span[_ngcontent-%COMP%], button.blue-button[_ngcontent-%COMP%], .checktext[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]    + span.blue-button[_ngcontent-%COMP%], .blue-button.red-button[_ngcontent-%COMP%], .blue-button.green-button[_ngcontent-%COMP%], input[type=button].blue-button[_ngcontent-%COMP%], input[type=submit].blue-button[_ngcontent-%COMP%], input[type=reset].blue-button[_ngcontent-%COMP%] {\n  color: white;\n  font-weight: bold;\n  text-shadow: 0 0.1em 0.1em rgba(0, 0, 0, 0.7);\n  background: linear-gradient(to top, #367bf0 30%, #528ef2 80%);\n  box-shadow: 0 0 0.5em rgba(54, 123, 240, 0.7), 0 0 transparent, inset 0 -5px 0 rgba(0, 0, 0, 0.05), inset 0 2px 0 rgba(255, 255, 255, 0.2);\n  border-radius: 6px 6px 8px 8px;\n  transition-property: box-shadow, border-radius;\n}\n.blue-button.active[_ngcontent-%COMP%], .checktext[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + span.active[_ngcontent-%COMP%], .blue-button[_ngcontent-%COMP%]:active, .checktext[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + span[_ngcontent-%COMP%]:active, button.blue-button.active[_ngcontent-%COMP%], button.blue-button[_ngcontent-%COMP%]:active, input[type=button].blue-button.active[_ngcontent-%COMP%], input[type=button].blue-button[_ngcontent-%COMP%]:active, input[type=submit].blue-button.active[_ngcontent-%COMP%], input[type=submit].blue-button[_ngcontent-%COMP%]:active, input[type=reset].blue-button.active[_ngcontent-%COMP%], input[type=reset].blue-button[_ngcontent-%COMP%]:active {\n  background: linear-gradient(to top, #367bf0 30%, #528ef2 80%);\n  border-radius: 6px;\n  box-shadow: 0 0 transparent, 0 0 transparent, inset 0 2px 5px 2px rgba(0, 0, 0, 0.2);\n}\nlabel[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0.56em 0;\n}\nlabel[_ngcontent-%COMP%], label[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\na[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:link, a[_ngcontent-%COMP%]:visited, a[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%]:active {\n  font-weight: bold;\n  color: #367bf0;\n  font-weight: bold;\n  text-decoration: none;\n}\na[_ngcontent-%COMP%], a[_ngcontent-%COMP%]   *[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:link, a[_ngcontent-%COMP%]:link   *[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:visited, a[_ngcontent-%COMP%]:visited   *[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%]:active, a[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%]:active   *[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\n  line-height: 1.5em;\n}\nh1[_ngcontent-%COMP%] {\n  font-size: 4em;\n  font-weight: lighter;\n  margin: 0.7em 0;\n}\nh2[_ngcontent-%COMP%] {\n  font-size: 3em;\n  font-weight: lighter;\n  margin: 0.8em 0;\n}\nh3[_ngcontent-%COMP%] {\n  font-size: 2.5em;\n  font-weight: lighter;\n  margin: 0.9em 0;\n}\nh4[_ngcontent-%COMP%] {\n  font-size: 2em;\n  font-weight: lighter;\n  margin: 1em 0;\n}\nh5[_ngcontent-%COMP%] {\n  margin: 0.5em 0;\n  font-size: 1.2em;\n  font-weight: normal;\n}\nh6[_ngcontent-%COMP%] {\n  margin: 1em 0 1em 1.4em;\n  font-size: 1em;\n  font-weight: bold;\n}\ninput[type=checkbox][_ngcontent-%COMP%], input[type=radio][_ngcontent-%COMP%] {\n  font-size: 1em;\n  cursor: pointer;\n  height: 1.2em;\n  width: 1.2em;\n  margin: 0 0.3em;\n  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.2), -2px -2px 3px white, inset 1px 1px 2px rgba(0, 0, 0, 0.2), inset -1px -1px 2px white;\n  border: 0.15em solid #f2f3f7;\n  vertical-align: text-bottom;\n  transition-property: background, box-shadow;\n  transition-duration: 0.2s;\n}\ninput[type=checkbox][_ngcontent-%COMP%]:active, input[type=radio][_ngcontent-%COMP%]:active {\n  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.2), -2px -2px 3px white, inset 1px 1px 2px rgba(0, 0, 0, 0.2), inset -1px -1px 2px white, inset 0 0.1em 0.25em rgba(0, 0, 0, 0.2);\n}\ninput[type=checkbox][_ngcontent-%COMP%]:checked, input[type=radio][_ngcontent-%COMP%]:checked {\n  border-width: 0.1em;\n  border-color: #115fe2;\n  background-color: #367bf0;\n}\ninput[type=checkbox][_ngcontent-%COMP%] {\n  border-radius: 25%;\n}\ninput[type=checkbox][_ngcontent-%COMP%]:checked {\n  box-shadow: 0 0 0.5em rgba(54, 123, 240, 0.7), inset 0 -0.1em 0 rgba(0, 0, 0, 0.2), inset 0 0.1em 0.1em rgba(255, 255, 255, 0.2);\n}\ninput[type=radio][_ngcontent-%COMP%] {\n  border-radius: 100%;\n}\ninput[type=radio][_ngcontent-%COMP%]:checked {\n  box-shadow: 0 0 0.5em rgba(54, 123, 240, 0.7);\n  box-shadow: 0 0 0.5em rgba(54, 123, 240, 0.7), inset 0 0.12em 0.1em rgba(255, 255, 255, 0.25);\n  border-bottom-width: 0.15em;\n}\n.checktext[_ngcontent-%COMP%] {\n  width: auto;\n  margin: 0.5em;\n}\n.checktext[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  display: none;\n}\n.checktext[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]    + span[_ngcontent-%COMP%] {\n  font-weight: bold;\n  padding: 1em;\n  transition-delay: 0s;\n}\n.checktext[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + span[_ngcontent-%COMP%] {\n  padding: 1em;\n}\n.switch[_ngcontent-%COMP%] {\n  height: 2rem;\n  width: 8rem;\n  padding: 0;\n  position: relative;\n}\n.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  display: none;\n}\n.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]    + div[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  border-radius: 999px;\n  background: transparent;\n  transition-property: box-shadow, background-color;\n  transition-duration: 0.2s;\n  transition-delay: 0.2s;\n  box-shadow: 3px 3px 2px -2px rgba(0, 0, 0, 0.1), inset 2px 2px 2px 1px rgba(0, 0, 0, 0.1), inset -2px -2px 1px white;\n}\n.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]    + div[_ngcontent-%COMP%]::before {\n  content: \"\";\n  display: block;\n  height: calc(2rem + 4px);\n  width: calc(2rem + 4px);\n  border-radius: 100%;\n  border: solid white 3px;\n  background: #367bf0;\n  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2), inset 0 -1px 3px rgba(0, 0, 0, 0.1);\n  transform: translate(0, -6px);\n  transition: transform 0.2s;\n}\n.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + div[_ngcontent-%COMP%] {\n  background: #367bf0;\n  box-shadow: 0 0 0.5em rgba(54, 123, 240, 0.7), inset 0 2px 2px 2px rgba(0, 0, 0, 0.3), inset 0 0 transparent;\n}\n.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + div[_ngcontent-%COMP%]::before {\n  transform: translate(6rem, -6px);\n}\nhr[_ngcontent-%COMP%] {\n  width: 72%;\n  height: 8px;\n  float: right;\n  border: 0;\n}\ncode[_ngcontent-%COMP%], pre[_ngcontent-%COMP%] {\n  padding: 0.5em 1em;\n  border-radius: 4px;\n  overflow: auto;\n  box-shadow: 0 5px 30px 0 rgba(0, 0, 0, 0.05);\n}\ncode[_ngcontent-%COMP%] {\n  background: #e6e6e6;\n}\npre[_ngcontent-%COMP%] {\n  background: white;\n  margin: 4em 0;\n}\ncode[_ngcontent-%COMP%], code[_ngcontent-%COMP%]   *[_ngcontent-%COMP%], pre[_ngcontent-%COMP%], pre[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  line-height: 2em;\n  cursor: auto;\n  user-select: text;\n  -webkit-touch-callout: text;\n  -webkit-user-select: text;\n  -khtml-user-select: text;\n  -moz-user-select: text;\n  -ms-user-select: text;\n}\nblockquote[_ngcontent-%COMP%] {\n  background-color: white;\n  padding: 0.5em 1em;\n  border-radius: 4px;\n  box-shadow: 0 5px 30px 0 rgba(0, 0, 0, 0.05);\n  border-left: 6px solid #367bf0;\n}\nmat-divider[_ngcontent-%COMP%] {\n  background-color: white;\n  margin: 2px;\n}\n.mat-grid-tile[_ngcontent-%COMP%] {\n  background: #585858ff;\n  color: white;\n  font-family: \"FigurineSymbolT1\";\n  font-weight: 360;\n  max-width: 164px;\n  font-size: 24px;\n  text-align: auto;\n}\n.score-title[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 28px;\n  position: absolute;\n  top: 2px;\n  left: 6px;\n}\n.score-list[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 8px;\n  right: 8px;\n  top: 40px;\n  bottom: 8px;\n  overflow: auto;\n}\n.gamescore-container[_ngcontent-%COMP%] {\n  background: var(--bgContainer);\n  height: 100%;\n  border: 2px black solid;\n  overflow: hidden;\n  margin-left: 4px;\n  margin-right: 4px;\n  line-height: var(--gsTextSize);\n  word-break: keep-all;\n  vertical-align: bottom;\n}\n.score-font[_ngcontent-%COMP%] {\n  font-family: \"FigurineSymbolT1\";\n  letter-spacing: 4px;\n  margin-left: 2px;\n  color: white;\n  text-decoration: none;\n  line-height: var(--gsTextSize);\n}\n.gs-menu[_ngcontent-%COMP%] {\n  position: absolute;\n  background: transparent;\n  top: 0px;\n  left: 0px;\n  right: 0px;\n  bottom: 0px;\n  width: 100%;\n  height: 100%;\n}\n.score-move[_ngcontent-%COMP%] {\n  margin-left: 8px;\n  line-height: var(--gsTextSize);\n}\n.score-ply[_ngcontent-%COMP%] {\n  font-family: \"FigurineSymbolT1\";\n  font-weight: bold;\n  margin-right: 6px;\n}\n.resize-handle[_ngcontent-%COMP%] {\n  position: absolute;\n  clip: true;\n  left: -4px;\n  top: calc(50% - 3em);\n  width: 36px;\n  border-radius: 5px;\n  border: solid grey 3px;\n  height: 6em;\n  background-color: #00000a;\n  cursor: grab;\n}\n.input-box[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 2px;\n  width: 100%;\n  height: 300px;\n  border: solid black 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMuc2NzcyIsInNyYy9hc3NldHMvc2Nzcy9tb2R1bGVzL19mb250cy5zY3NzIiwic3JjL2FwcC9nYW1lLXNjb3JlL2dhbWUtc2NvcmUudXguc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4RUFBQTtBQ0FBO0VBQ0kscUJBQUE7RUFDQSxxRkFBQTtFQUVBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0NKO0FERUE7RUFDSSxxQkFBQTtFQUNBLDJGQUFBO0VBRUEsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDREo7QURJQTtFQUNFLCtCQUFBO0VBQ0EsdUdBQUE7RUFFQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNIRjtBRE1BO0VBQ0UsK0JBQUE7RUFDQSwrRkFBQTtFQUVBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0xGO0FGY0EsK0VBQUE7QUFNQSwrRUFBQTtBQU1BLCtFQUFBO0FBTUEsK0VBQUE7QUFLQSxnRkFBQTtBQUtBLCtFQUFBO0FBS0EseUVBQUE7QUFrQkE7RUFDRSxtQkFBQTtFQUNBLG1CQUFBO0VBRUEsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBRXpERjtBRjREQTs7RUFFRSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtBRXpERjtBRjREQTs7RUFFRSxZQUFBO0VBQ0EsaUJBQUE7QUV6REY7QUY0REE7RUFDRSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLDJCQUFBO0VBQ0EseUJBQUE7RUFDQSx3QkFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSx3QkFBQTtFQUNBLG1EQUFBO0VBQ0Esd0RBQUE7RUFDQSwyQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBRXpERjtBRjREQTs7RUFFRSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSwyQkFBQTtFQUNBLHlCQUFBO0VBQ0Esd0JBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0FFekRGO0FGNERBOztFQUVFLHlCQTVEUztFQTZEVCxjQTVEUztFQTZEVCxTQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBRXpERjtBRjREQTs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFDRSxpRUFBQTtBRXpDRjtBRjRDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFHRSxtQkFBQTtFQUNBLG1CQTdFUztBRWtEWDtBRjhCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFDRSxtQkFBQTtFQUNBLDZHQUFBO0VBRUEsbUJBQUE7QUVURjtBRllBO0VBRUUsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkE3RlM7QUVtRlg7QUZhQTs7Ozs7RUFLRSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBRVZGO0FGYUE7Ozs7Ozs7Ozs7Ozs7O0VBY0UsU0FBQTtFQUNBLG1CQTFIUztFQTJIVCxjQTFIUztFQTJIVCxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsMkJBQUE7RUFDQSx5QkFBQTtFQUNBLHdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLDJCQUFBO0FFVkY7QUZxQkE7RUFDRSxhQUFBO0VBQ0EsZUFBQTtBRW5CRjtBRnNCQTtFQUdFLGVBQUE7RUFDQSwwZkFBQTtFQUVBLHNCQUFBO0VBQ0Esa0JBQUE7QUV0QkY7QUZ5QkE7O0VBRUUsVUFBQTtFQUNBLHdCQUFBO0VBQ0EsY0FBQTtBRXRCRjtBRnlCQTs7RUFFRSxZQUFBO0FFdEJGO0FGeUJBOztFQUVFLFVBQUE7RUFDQSw0QkFBQTtFQUFBLHdCQUFBO0VBQ0EsY0FBQTtBRXRCRjtBRnlCQTs7RUFFRSxZQUFBO0FFdEJGO0FGeUJBOzs7O0VBSUUsYUFBQTtBRXRCRjtBRnlCQTs7OztFQU1FLFNBQUE7RUFDQSwwQkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsaURBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0FFeEJGO0FGMEJFOzs7Ozs7O0VBSUUsb0JBQUE7RUFDQSx5QkFBQTtBRXJCSjtBRnlCYTs7OztFQU1QLFlBQUE7RUFDQSxpQkFBQTtFQUNBLDZDQUFBO0VBQ0EsNkRBTFk7RUFNWix5SUFBQTtFQUdBLDhCQUFBO0VBQ0EsOENBQUE7QUUzQk47QUY2Qk07Ozs7Ozs7RUFFRSw2REFkVTtFQWVWLGtCQUFBO0VBQ0Esb0ZBQUE7QUV0QlI7QUZFYTs7OztFQU1QLFlBQUE7RUFDQSxpQkFBQTtFQUNBLDZDQUFBO0VBQ0EsNkRBTFk7RUFNWiwwSUFBQTtFQUdBLDhCQUFBO0VBQ0EsOENBQUE7QUVITjtBRktNOzs7Ozs7O0VBRUUsNkRBZFU7RUFlVixrQkFBQTtFQUNBLG9GQUFBO0FFRVI7QUZ0QmE7Ozs7RUFNUCxZQUFBO0VBQ0EsaUJBQUE7RUFDQSw2Q0FBQTtFQUNBLDZEQUxZO0VBTVosMElBQUE7RUFHQSw4QkFBQTtFQUNBLDhDQUFBO0FFcUJOO0FGbkJNOzs7Ozs7O0VBRUUsNkRBZFU7RUFlVixrQkFBQTtFQUNBLG9GQUFBO0FFMEJSO0FGbkJBO0VBTUUscUJBQUE7RUFDQSxpQkFBQTtBRWlCRjtBRnZCRTtFQUVFLGVBQUE7QUV3Qko7QUZoQkU7RUFTRSxpQkFBQTtFQUNBLGNBM1ZHO0VBNFZILGlCQUFBO0VBQ0EscUJBQUE7QUVXSjtBRm5CSTtFQUVFLGVBQUE7QUVvQk47QUZWQTs7Ozs7O0VBTUUsa0JBQUE7QUVhRjtBRlZBO0VBQ0UsY0FBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtBRWFGO0FGVkE7RUFDRSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0FFYUY7QUZWQTtFQUNFLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0FFYUY7QUZWQTtFQUNFLGNBQUE7RUFDQSxvQkFBQTtFQUNBLGFBQUE7QUVhRjtBRlZBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUVhRjtBRlZBO0VBQ0UsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUVhRjtBRlZBOztFQUtFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0lBUGM7RUFRZCw0QkFBQTtFQUNBLDJCQUFBO0VBQ0EsMkNBQUE7RUFDQSx5QkFBQTtBRVVGO0FGUkU7O0VBQ0UseUtBQUE7QUVXSjtBRlJFOztFQUNFLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFyYUc7QUVnYlA7QUZQQTtFQUNFLGtCQUFBO0FFVUY7QUZSRTtFQUNFLGdJQUFBO0FFVUo7QUZMQTtFQUNFLG1CQUFBO0FFUUY7QUZORTtFQUNFLDZDQXJXVTtFQXNXViw2RkFBQTtFQUNBLDJCQUFBO0FFUUo7QUZKQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0FFT0Y7QUZMRTtFQUNFLGFBQUE7QUVPSjtBRkxJO0VBR0UsaUJBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7QUVLTjtBRkZJO0VBR0UsWUFBQTtBRUVOO0FGR0E7RUFNRSxZQUxVO0VBTVYsV0FMUztFQU1ULFVBQUE7RUFDQSxrQkFBQTtBRUxGO0FGT0U7RUFDRSxhQUFBO0FFTEo7QUZPSTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSx1QkFBQTtFQUNBLGlEQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLG9IQUFBO0FFTE47QUZTTTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0Esd0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFwZkQ7RUFxZkMsOEVBQUE7RUFFQSw2QkFBQTtFQUNBLDBCQUFBO0FFUlI7QUZZSTtFQUNFLG1CQTdmQztFQThmRCw0R0FBQTtBRVZOO0FGYU07RUFDRSxnQ0FBQTtBRVhSO0FGaUJBO0VBRUUsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtBRWZGO0FGa0JBOztFQUVFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsNENBQUE7QUVmRjtBRmtCQTtFQUNFLG1CQUFBO0FFZkY7QUZrQkE7RUFDRSxpQkFBQTtFQUNBLGFBQUE7QUVmRjtBRm9CRTs7O0VBRUUsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLDJCQUFBO0VBQ0EseUJBQUE7RUFDQSx3QkFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7QUVoQko7QUZvQkE7RUFDRSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSw0Q0FBQTtFQUNBLDhCQUFBO0FFakJGO0FBN2lCQTtFQUNFLHVCQUFBO0VBQ0EsV0FBQTtBQWdqQkY7QUE1aUJBO0VBQ0UscUJGTG9CO0VFTXBCLFlGTHFCO0VFTXJCLCtCRlJpQjtFRVNqQixnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBK2lCRjtBQTVpQkE7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7QUEraUJGO0FBN2lCQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUFnakJGO0FBOWlCQTtFQUNFLDhCRlpZO0VFYVosWUFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsOEJGTVc7RUVMWCxvQkFBQTtFQUNBLHNCQUFBO0FBaWpCRjtBQTlpQkE7RUFDRSwrQkYzQ2lCO0VFNENqQixtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsOEJGTFc7QUVzakJiO0FBOWlCQTtFQUNFLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFpakJGO0FBOWlCQTtFQUNFLGdCQUFBO0VBQ0EsOEJGckJXO0FFc2tCYjtBQTlpQkE7RUFDRSwrQkZwRWlCO0VFcUVqQixpQkFBQTtFQUNBLGlCQUFBO0FBaWpCRjtBQTlpQkE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUFpakJGO0FBL2lCQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7QUFrakJGIiwiZmlsZSI6InNyYy9hcHAvZ2FtZS1zY29yZS9nYW1lLXNjb3JlLnV4LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG5cbkBpbXBvcnQgXCIuL2Fzc2V0cy9zY3NzL21vZHVsZXMvX2ZvbnRzLnNjc3NcIjtcbiRnYW1lc2NvcmUtZmFtaWx5OiBcIkZpZ3VyaW5lU3ltYm9sVDFcIjtcbiRnYW1lc2NvcmUtaGlnaGxpZ2h0OiAjNTg1ODU4ZmY7XG4kZ2FtZXNjb3JlLWZvcmVncm91bmQ6IHdoaXRlO1xuXG4kcmVkOiAjZTQzMDMwO1xuJGdyZWVuOiAjMTlhMTg3O1xuJGxpZ2h0LWJsdWU6ICMwMGZmZmZmZjtcbiRibHVlOiAjMzY3YmYwO1xuJGRhcmstYmx1ZTogIzI2NWFiMTtcbiRtYXJvb246ICNiODE3NGM7XG4kcHVycGxlOiAjOGM0MmFiO1xuXG4vLyBNYWluIE9MR0EgQ29sb3IgRWxlbWVudCBWYXJpYWJsZXNcbiR0ZXh0Q29sb3I6IHZhcigtLXRleHRDb2xvcik7IC8vIE1haW4gVGV4dCBDb2xvclxuJHRleHRDb2xvckF0dGVudGlvbjogdmFyKC0tdGV4dENvbG9yQXR0ZW50aW9uKTsgLy8gQXR0ZW50aW9uIHRleHRcbiR0ZXh0Q29sb3JSZW1vdmU6IHZhcigtLXRleHRDb2xvclJlbW92ZSk7IC8vIFJlbW92ZS9EZWxldGUvQ2xvc2VcbiR0ZXh0Q29sb3JBZGQ6IHZhcigtLXRleHRDb2xvckFkZCk7IC8vIEFkZC9DcmVhdGUvT3BlblxuJHRleHRDb2xvckFjdGl2ZTogdmFyKC0tdGV4dENvbG9yQWN0aXZlKTsgLy8gQWRkL0NyZWF0ZS9PcGVuXG4kYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZCk7IC8vIE1haW4gYmFja2dyb3VuZCBDb2xvclxuJGJnQ29udGFpbmVyOiB2YXIoLS1iZ0NvbnRhaW5lcik7IC8vIGJhY2tncm91bmQgb2YgQ29udGFpbmVyc1xuJGJnTWVudTogdmFyKC0tYmdNZW51KTsgLy8gYmFja2dyb3VuZCBvZiBNZW51c1xuJGJnSXRlbTogdmFyKC0tYmdJdGVtKTsgLy8gYmFja2dyb3VuZCBvZiBJdGVtc1xuXG4vLyBDb250ZXh0IE1lbnVcbiRiZ0NvbnRleHQ6IHZhcigtLWJnQ29udGV4dCk7IC8vIGJhY2tncm91bmQgb2YgQ29udGV4dCBNZW51XG4kdGV4dENvbG9yQ29udGV4dDogdmFyKC0tdGV4dENvbG9yQ29udGV4dCk7IC8vIHRleHQgY29sb3IgQ29udGV4dCBNZW51XG4kYm9yZGVyQ29udGV4dDogdmFyKC0tYm9yZGVyQ29udGV4dCk7IC8vIGJvcmRlciBDb250ZXh0IE1lbnVcbiRvdmVybGF5Q29udGV4dEJhY2tncm91bmQ6IHZhcihcbiAgLS1vdmVybGF5Q29udGV4dEJhY2tncm91bmRcbik7IC8vIENvbnRleHQgTWVudSBPdmVybGF5IGJhY2tncm91bmQgbWFpblxuJG92ZXJsYXlDb250ZXh0QmFja2dyb3VuZEdyYWRpZW50OiB2YXIoXG4gIC0tb3ZlcmxheUNvbnRleHRCYWNrZ3JvdW5kR3JhZGllbnRcbik7IC8vIENvbnRleHQgTWVudSBiYWNrZ3JvdW5kIGdyYWRpZW50XG5cbiRpdGVtOiB2YXIoLS1pdGVtKTtcbiRpdGVtLWNvbnRyYXN0OiB2YXIoLS1pdGVtLWNvbnRyYXN0KTtcbiRpdGVtLWJnOiB2YXIoLS1pdGVtLWJnKTtcblxuXG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIENvbnRhaW5lciBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuJGdzVGV4dENvbG9yOiB2YXIoLS1nc1RleHRDb2xvcik7IC8vIFRleHQgY29sb3IgZm9yIGdhbWUgc2NvcmVcbiRnc0JhY2tncm91bmQ6IHZhcigtLWdzQmFja2dyb3VuZCk7IC8vIGJhY2tncm91bmQgb2YgQ29udGFpbmVyc1xuJGdzQm9yZGVyOiB2YXIoLS1nc0JvcmRlcik7IC8vIGJhY2tncm91bmQgb2YgTWVudXNcbiRnc1RleHRTaXplOiB2YXIoLS1nc1RleHRTaXplKTsgLy8gYmFja2dyb3VuZCBvZiBNZW51c1xuXG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIENvbnRhaW5lciBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuJGdzVGV4dENvbG9yTVc6IHZhcigtLWdzVGV4dENvbG9yTVcpOyAvLyBUZXh0IGNvbG9yIGZvciBnYW1lIHNjb3JlXG4kZ3NCYWNrZ3JvdW5kTVc6IHZhcigtLWdzQmFja2dyb3VuZE1XKTsgLy8gYmFja2dyb3VuZCBvZiBDb250YWluZXJzXG4kZ3NCb3JkZXJNVzogdmFyKC0tZ3NCb3JkZXJNVyk7IC8vIGJhY2tncm91bmQgb2YgTWVudXNcbiRnc1RleHRTaXplTVc6IHZhcigtLWdzVGV4dFNpemVNVyk7IC8vIGJhY2tncm91bmQgb2YgTWVudXNcblxuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBDb250YWluZXIgVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiRnc1RleHRDb2xvck1COiB2YXIoLS1nc1RleHRDb2xvck1CKTsgLy8gVGV4dCBjb2xvciBmb3IgZ2FtZSBzY29yZVxuJGdzQmFja2dyb3VuZE1COiB2YXIoLS1nc0JhY2tncm91bmRNQik7IC8vIGJhY2tncm91bmQgb2YgQ29udGFpbmVyc1xuJGdzQm9yZGVyTUI6IHZhcigtLWdzQm9yZGVyTUIpOyAvLyBiYWNrZ3JvdW5kIG9mIE1lbnVzXG4kZ3NUZXh0U2l6ZU1COiB2YXIoLS1nc1RleHRTaXplTUIpOyAvLyBiYWNrZ3JvdW5kIG9mIE1lbnVzXG5cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgSGlnaGxpZ2h0IFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4kZ3NUZXh0Q29sb3JIRzogdmFyKC0tZ3NUZXh0Q29sb3JIRyk7IC8vIFRleHQgY29sb3IgZm9yIGhpZ2hsaWdodFxuJGdzQmFja2dyb3VuZEhHOiB2YXIoLS1nc0JhY2tncm91bmRIRyk7IC8vIGJhY2tncm91bmQgZm9yIGhpZ2hsaWdodFxuJGdzQm9yZGVySEc6IHZhcigtLWdzQm9yZGVySEcpOyAvLyBib3JkZXIgZm9yIGhpZ2hsaWdodFxuXG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIEFubm90YXRpb24gVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiRnc1RleHRDb2xvckFOOiB2YXIoLS1nc1RleHRDb2xvckFOKTsgLy8gVGV4dCBjb2xvciBmb3IgaGlnaGxpZ2h0XG4kZ3NCYWNrZ3JvdW5kQU46IHZhcigtLWdzQmFja2dyb3VuZEFOKTsgLy8gYmFja2dyb3VuZCBmb3IgaGlnaGxpZ2h0XG4kZ3NCb3JkZXJBTjogdmFyKC0tZ3NCb3JkZXJBTik7IC8vIGJvcmRlciBmb3IgaGlnaGxpZ2h0XG5cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgVmFyaWF0aW9uIFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4kZ3NUZXh0Q29sb3JWQTogdmFyKC0tZ3NUZXh0Q29sb3JWQSk7IC8vIFRleHQgY29sb3IgZm9yIGhpZ2hsaWdodFxuJGdzQmFja2dyb3VuZFZBOiB2YXIoLS1nc0JhY2tncm91bmRWQSk7IC8vIGJhY2tncm91bmQgZm9yIGhpZ2hsaWdodFxuJGdzQm9yZGVyVkE6IHZhcigtLWdzQm9yZGVyVkEpOyAvLyBib3JkZXIgZm9yIGhpZ2hsaWdodFxuXG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIFBseSBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuJGdzVGV4dENvbG9yUEM6IHZhcigtLWdzVGV4dENvbG9yUEMpOyAvLyBUZXh0IGNvbG9yIGZvciBnYW1lIHNjb3JlIHBseVxuJGdzQmFja2dyb3VuZFBDOiB2YXIoLS1nc0JhY2tncm91bmRQQyk7IC8vIGJhY2tncm91bmQgZm9yIGdhbWUgc2NvcmUgcGx5XG4kZ3NCb3JkZXJQQzogdmFyKC0tZ3NCb3JkZXJQQyk7IC8vIGJvcmRlciBmb3IgZ2FtZSBzY29yZSBwbHlcblxuLy8gQm9hcmQgY29sb3JzIHJlZmxlY3RlZCBvdXRcbiRib2FyZEJHRGFyazogdmFyKC0tYm9hcmRCR0RhcmspOyAvLyBib3JkZXIgZm9yIGhpZ2hsaWdodFxuXG4vLyBHZW5lcmFsIHN0dWZmXG4kdGV4dC1jb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XG4kYmctb3V0ZXI6IHZhcigtLWJnLW91dGVyKTtcbiRiZy1pbm5lcjogdmFyKC0tYmctaW5uZXIpO1xuXG4kYmctY29sb3I6ICNmMmYzZjc7XG4kZmctY29sb3I6ICMzODNhNDE7XG5cbiRnbG93LXNoYWRvdzogMCAwIDAuNWVtIHRyYW5zcGFyZW50aXplKCRibHVlLCAwLjMpO1xuXG46cm9vdCB7XG4gIC0tYmctY29sb3I6ICN7JGJnLWNvbG9yfTtcbiAgLS1mZy1jb2xvcjogI3skZmctY29sb3J9O1xuXG4gIC0tcmVkOiAjeyRyZWR9O1xuICAtLWdyZWVuOiAjeyRncmVlbn07XG4gIC0tYmx1ZTogI3skYmx1ZX07XG4gIC0tZGFyay1ibHVlOiAjeyRkYXJrLWJsdWV9O1xuICAtLW1hcm9vbjogI3skbWFyb29ufTtcbiAgLS1wdXJwbGU6ICN7JHB1cnBsZX07XG59XG5cbjo6LW1vei1mb2N1cy1pbm5lcixcbjotbW96LWZvY3VzcmluZyB7XG4gIGJvcmRlcjogMDtcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xuICB0ZXh0LXNoYWRvdzogMCAwIDAgJGZnLWNvbG9yO1xufVxuXG46OnNlbGVjdGlvbixcbjo6LW1vei1zZWxlY3Rpb24ge1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQ6IGJsYWNrO1xufVxuXG4qIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgb3V0bGluZTogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lO1xuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCkgIWltcG9ydGFudDtcbiAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xuICBjdXJzb3I6IGRlZmF1bHQ7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xufVxuXG4uc2VsZWN0YWJsZSxcbi5zZWxlY3RhYmxlICoge1xuICBjdXJzb3I6IGF1dG87XG4gIHVzZXItc2VsZWN0OiB0ZXh0O1xuICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IHRleHQ7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IHRleHQ7XG4gIC1raHRtbC11c2VyLXNlbGVjdDogdGV4dDtcbiAgLW1vei11c2VyLXNlbGVjdDogdGV4dDtcbiAgLW1zLXVzZXItc2VsZWN0OiB0ZXh0O1xufVxuXG5odG1sLFxuYm9keSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRiZy1jb2xvcjtcbiAgY29sb3I6ICRmZy1jb2xvcjtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBmb250LXNpemU6IDEwcHQ7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi53aXRoLXNoYWRvdyB7XG4gIGJveC1zaGFkb3c6IDZweCA2cHggMTBweCB0cmFuc3BhcmVudGl6ZShibGFjaywgMC45KSwgLTZweCAtNnB4IDEwcHggd2hpdGU7XG59XG5cbi5vdXRzZXQge1xuICBAZXh0ZW5kIC53aXRoLXNoYWRvdztcblxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiAkYmctY29sb3I7XG59XG5cbi5pbnNldCB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJveC1zaGFkb3c6IDAgMCB0cmFuc3BhcmVudCwgMCAwIHRyYW5zcGFyZW50LFxuICAgIGluc2V0IDNweCAzcHggNXB4IHRyYW5zcGFyZW50aXplKGJsYWNrLCAwLjkpLCBpbnNldCAtM3B4IC0zcHggNXB4IHdoaXRlO1xuICBiYWNrZ3JvdW5kOiBsaWdodGVuKCRiZy1jb2xvciwgMiUpO1xufVxuXG4ucGFwZXIge1xuICBAZXh0ZW5kIC5vdXRzZXQ7XG4gIHBhZGRpbmc6IDEwcHggMjBweCAyMHB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBtaW4taGVpZ2h0OiAxMDBweDtcbiAgZm9udC1zaXplOiAxLjJlbTtcbiAgYmFja2dyb3VuZDogJGJnLWNvbG9yO1xufVxuXG5zZWN0aW9uLFxuYXJ0aWNsZSxcbi5zZWN0aW9uLFxuLmFydGljbGUsXG4ucGFwZXIge1xuICBsaW5lLWhlaWdodDogMmVtO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIHdvcmQtYnJlYWs6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDJlbTtcbn1cblxuaW5wdXRbdHlwZT1cInRleHRcIl0sXG5pbnB1dFt0eXBlPVwic2VhcmNoXCJdLFxuaW5wdXRbdHlwZT1cInRlbFwiXSxcbmlucHV0W3R5cGU9XCJ1cmxcIl0sXG5pbnB1dFt0eXBlPVwiZW1haWxcIl0sXG5pbnB1dFt0eXBlPVwicGFzc3dvcmRcIl0sXG5pbnB1dFt0eXBlPVwiZGF0ZVwiXSxcbmlucHV0W3R5cGU9XCJtb250aFwiXSxcbmlucHV0W3R5cGU9XCJ3ZWVrXCJdLFxuaW5wdXRbdHlwZT1cInRpbWVcIl0sXG5pbnB1dFt0eXBlPVwibnVtYmVyXCJdLFxuaW5wdXRbdHlwZT1cImNvbG9yXCJdLFxuc2VsZWN0LFxudGV4dGFyZWEge1xuICBib3JkZXI6IDA7XG4gIGJhY2tncm91bmQ6ICRiZy1jb2xvcjtcbiAgY29sb3I6ICRmZy1jb2xvcjtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgcGFkZGluZzogMCAxLjI1ZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjI1ZW07XG4gIGhlaWdodDogMy41ZW07XG4gIG1hcmdpbjogMTBweCAwO1xuICBmb250LXNpemU6IDEuMXJlbTtcbiAgY3Vyc29yOiB0ZXh0O1xuICB1c2VyLXNlbGVjdDogdGV4dDtcbiAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiB0ZXh0O1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiB0ZXh0O1xuICAta2h0bWwtdXNlci1zZWxlY3Q6IHRleHQ7XG4gIC1tb3otdXNlci1zZWxlY3Q6IHRleHQ7XG4gIC1tcy11c2VyLXNlbGVjdDogdGV4dDtcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjJzO1xuXG4gICY6bm90KHNlbGVjdCkge1xuICAgIEBleHRlbmQgLmluc2V0O1xuXG4gICAgJjpmb2N1cyB7XG4gICAgICBAZXh0ZW5kIC5vdXRzZXQ7XG4gICAgfVxuICB9XG59XG5cbnRleHRhcmVhIHtcbiAgaGVpZ2h0OiAzNTBweDtcbiAgcGFkZGluZzogMS4yNWVtO1xufVxuXG5zZWxlY3Qge1xuICBAZXh0ZW5kIC5vdXRzZXQ7XG5cbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kOiB1cmwoZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCMlpYSnphVzl1UFNJeExqRWlJSFpwWlhkQ2IzZzlJakFnTUNBeE9TQXhPU0lnZUcxc2JuTTlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5Mekl3TURBdmMzWm5JajQ4WnlCMGNtRnVjMlp2Y20wOUltMWhkSEpwZUNndU1ETTBJREFnTUNBdU1ETTBJQzAyTGpnZ01TNDNaUzAxS1NJZ2MzUjViR1U5SW1acGJHdzZJemRpTjJVNFl5SStQSEJoZEdnZ1pEMGliVFE0TUNBek5EUXRNakV4TFRJeE1tTXRNVFl0TVRZdE5ERXRNVFl0TlRjZ01DMHhOaUF4TmkweE5pQTBNaUF3SURVM2JESXpPQ0F5TXpsak9DNDBJRGd1TlNBeU1DQXhNaUF6TVNBeE1pQXhNU0F3TGpVMklESXlMVE11TWlBek1TMHhNbXd5TXpndE1qTTVZekUyTFRFMklERTJMVFF5SURBdE5UZHpMVFF4TFRFMkxUVTNJREI2SWlCemRIbHNaVDBpWm1sc2JEb2pOMkkzWlRoaklpOCtQQzluUGp3dmMzWm5QZ289KVxuICAgIG5vLXJlcGVhdCByaWdodCAxZW0gY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEuMmVtO1xuICBwYWRkaW5nLXJpZ2h0OiAzZW07XG59XG5cbmlucHV0OjpwbGFjZWhvbGRlcixcbnRleHRhcmVhOjpwbGFjZWhvbGRlciB7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycztcbiAgY29sb3I6IGluaGVyaXQ7XG59XG5cbmlucHV0OmZvY3VzOjpwbGFjZWhvbGRlcixcbnRleHRhcmVhOmZvY3VzOjpwbGFjZWhvbGRlciB7XG4gIG9wYWNpdHk6IDAuMjtcbn1cblxuaW5wdXQ6LW1zLWlucHV0LXBsYWNlaG9sZGVyLFxudGV4dGFyZWE6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzO1xuICBjb2xvcjogaW5oZXJpdDtcbn1cblxuaW5wdXQ6Zm9jdXM6LW1zLWlucHV0LXBsYWNlaG9sZGVyLFxudGV4dGFyZWE6Zm9jdXM6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgb3BhY2l0eTogMC4yO1xufVxuXG5pbnB1dFt0eXBlPVwic2VhcmNoXCJdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uLFxuaW5wdXRbdHlwZT1cInNlYXJjaFwiXTo6LXdlYmtpdC1zZWFyY2gtY2FuY2VsLWJ1dHRvbixcbmlucHV0W3R5cGU9XCJzZWFyY2hcIl06Oi13ZWJraXQtc2VhcmNoLXJlc3VsdHMtYnV0dG9uLFxuaW5wdXRbdHlwZT1cInNlYXJjaFwiXTo6LXdlYmtpdC1zZWFyY2gtcmVzdWx0cy1kZWNvcmF0aW9uIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuYnV0dG9uLFxuaW5wdXRbdHlwZT1cImJ1dHRvblwiXSxcbmlucHV0W3R5cGU9XCJzdWJtaXRcIl0sXG5pbnB1dFt0eXBlPVwicmVzZXRcIl0ge1xuICBAZXh0ZW5kIC5vdXRzZXQ7XG5cbiAgYm9yZGVyOiAwO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgcGFkZGluZzogMTBweCAwO1xuICB3aWR0aDogOGVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBiYWNrZ3JvdW5kLWNvbG9yLCBib3gtc2hhZG93O1xuICB0cmFuc2l0aW9uLWRlbGF5OiAwLjJzO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjJzO1xuXG4gICYuYWN0aXZlLFxuICAmOmFjdGl2ZSB7XG4gICAgQGV4dGVuZCAuaW5zZXQ7XG5cbiAgICB0cmFuc2l0aW9uLWRlbGF5OiAwcztcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjFzO1xuICB9XG5cbiAgQGVhY2ggJG5hbWUsICRjb2xvciBpbiAoXCJyZWRcIjogJHJlZCwgXCJncmVlblwiOiAkZ3JlZW4sIFwiYmx1ZVwiOiAkYmx1ZSkge1xuICAgIEBhdC1yb290IC4jeyRuYW1lfS1idXR0b24sXG4gICAgICAmLiN7JG5hbWV9LWJ1dHRvbiB7XG4gICAgICBAZXh0ZW5kIGJ1dHRvbjtcblxuICAgICAgJF9iZy1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgJGNvbG9yIDMwJSwgbGlnaHRlbigkY29sb3IsIDYlKSA4MCUpO1xuXG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIHRleHQtc2hhZG93OiAwIDAuMWVtIDAuMWVtIHRyYW5zcGFyZW50aXplKGJsYWNrLCAwLjMpO1xuICAgICAgYmFja2dyb3VuZDogJF9iZy1pbWFnZTtcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAwLjVlbSB0cmFuc3BhcmVudGl6ZSgkY29sb3IsIDAuMyksIDAgMCB0cmFuc3BhcmVudCxcbiAgICAgICAgaW5zZXQgMCAtNXB4IDAgdHJhbnNwYXJlbnRpemUoYmxhY2ssIDAuOTUpLFxuICAgICAgICBpbnNldCAwIDJweCAwIHRyYW5zcGFyZW50aXplKHdoaXRlLCAwLjgpO1xuICAgICAgYm9yZGVyLXJhZGl1czogNnB4IDZweCA4cHggOHB4O1xuICAgICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYm94LXNoYWRvdywgYm9yZGVyLXJhZGl1cztcblxuICAgICAgJi5hY3RpdmUsXG4gICAgICAmOmFjdGl2ZSB7XG4gICAgICAgIGJhY2tncm91bmQ6ICRfYmctaW1hZ2U7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIHRyYW5zcGFyZW50LCAwIDAgdHJhbnNwYXJlbnQsXG4gICAgICAgICAgaW5zZXQgMCAycHggNXB4IDJweCB0cmFuc3BhcmVudGl6ZShibGFjaywgMC44KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxubGFiZWwge1xuICAmLFxuICAmICoge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogMC41NmVtIDA7XG59XG5cbmEge1xuICAmLFxuICAmOmxpbmssXG4gICY6dmlzaXRlZCxcbiAgJjpob3ZlciAmOmFjdGl2ZSB7XG4gICAgJixcbiAgICAmICoge1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cblxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiAkYmx1ZTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIH1cbn1cblxuaDEsXG5oMixcbmgzLFxuaDQsXG5oNSxcbmg2IHtcbiAgbGluZS1oZWlnaHQ6IDEuNWVtO1xufVxuXG5oMSB7XG4gIGZvbnQtc2l6ZTogNGVtO1xuICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgbWFyZ2luOiAwLjdlbSAwO1xufVxuXG5oMiB7XG4gIGZvbnQtc2l6ZTogM2VtO1xuICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgbWFyZ2luOiAwLjhlbSAwO1xufVxuXG5oMyB7XG4gIGZvbnQtc2l6ZTogMi41ZW07XG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuICBtYXJnaW46IDAuOWVtIDA7XG59XG5cbmg0IHtcbiAgZm9udC1zaXplOiAyZW07XG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuICBtYXJnaW46IDFlbSAwO1xufVxuXG5oNSB7XG4gIG1hcmdpbjogMC41ZW0gMDtcbiAgZm9udC1zaXplOiAxLjJlbTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cblxuaDYge1xuICBtYXJnaW46IDFlbSAwIDFlbSAxLjRlbTtcbiAgZm9udC1zaXplOiAxZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5pbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0sXG5pbnB1dFt0eXBlPVwicmFkaW9cIl0ge1xuICAkX2JvcmRlci13aWR0aDogMC4xNWVtO1xuICAkX2JveC1zaGFkb3c6IDJweCAycHggM3B4IHRyYW5zcGFyZW50aXplKGJsYWNrLCAwLjgpLCAtMnB4IC0ycHggM3B4IHdoaXRlLFxuICAgIGluc2V0IDFweCAxcHggMnB4IHRyYW5zcGFyZW50aXplKGJsYWNrLCAwLjgpLCBpbnNldCAtMXB4IC0xcHggMnB4IHdoaXRlO1xuICBmb250LXNpemU6IDFlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBoZWlnaHQ6IDEuMmVtO1xuICB3aWR0aDogMS4yZW07XG4gIG1hcmdpbjogMCAwLjNlbTtcbiAgYm94LXNoYWRvdzogJF9ib3gtc2hhZG93O1xuICBib3JkZXI6ICRfYm9yZGVyLXdpZHRoIHNvbGlkICRiZy1jb2xvcjtcbiAgdmVydGljYWwtYWxpZ246IHRleHQtYm90dG9tO1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBiYWNrZ3JvdW5kLCBib3gtc2hhZG93O1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjJzO1xuXG4gICY6YWN0aXZlIHtcbiAgICBib3gtc2hhZG93OiAkX2JveC1zaGFkb3csIGluc2V0IDAgMC4xZW0gMC4yNWVtIHRyYW5zcGFyZW50aXplKGJsYWNrLCAwLjgpO1xuICB9XG5cbiAgJjpjaGVja2VkIHtcbiAgICBib3JkZXItd2lkdGg6IDAuMWVtO1xuICAgIGJvcmRlci1jb2xvcjogZGFya2VuKCRibHVlLCAxMCUpO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRibHVlO1xuICB9XG59XG5cbmlucHV0W3R5cGU9XCJjaGVja2JveFwiXSB7XG4gIGJvcmRlci1yYWRpdXM6IDI1JTtcblxuICAmOmNoZWNrZWQge1xuICAgIGJveC1zaGFkb3c6ICRnbG93LXNoYWRvdywgaW5zZXQgMCAtMC4xZW0gMCB0cmFuc3BhcmVudGl6ZShibGFjaywgMC44KSxcbiAgICAgIGluc2V0IDAgMC4xZW0gMC4xZW0gdHJhbnNwYXJlbnRpemUod2hpdGUsIDAuOCk7XG4gIH1cbn1cblxuaW5wdXRbdHlwZT1cInJhZGlvXCJdIHtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcblxuICAmOmNoZWNrZWQge1xuICAgIGJveC1zaGFkb3c6ICRnbG93LXNoYWRvdztcbiAgICBib3gtc2hhZG93OiAkZ2xvdy1zaGFkb3csIGluc2V0IDAgMC4xMmVtIDAuMWVtIHRyYW5zcGFyZW50aXplKHdoaXRlLCAwLjc1KTtcbiAgICBib3JkZXItYm90dG9tLXdpZHRoOiAwLjE1ZW07XG4gIH1cbn1cblxuLmNoZWNrdGV4dCB7XG4gIHdpZHRoOiBhdXRvO1xuICBtYXJnaW46IDAuNWVtO1xuXG4gIGlucHV0IHtcbiAgICBkaXNwbGF5OiBub25lO1xuXG4gICAgKyBzcGFuIHtcbiAgICAgIEBleHRlbmQgYnV0dG9uO1xuXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIHBhZGRpbmc6IDFlbTtcbiAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDBzO1xuICAgIH1cblxuICAgICY6Y2hlY2tlZCArIHNwYW4ge1xuICAgICAgQGV4dGVuZCAuYmx1ZS1idXR0b247XG5cbiAgICAgIHBhZGRpbmc6IDFlbTtcbiAgICB9XG4gIH1cbn1cblxuLnN3aXRjaCB7XG4gICRfaGVpZ2h0OiAycmVtO1xuICAkX3dpZHRoOiA4cmVtO1xuICAkX2hhbmRsZS13aWR0aDogJF9oZWlnaHQ7XG4gICRfaGFuZGxlLXRyYW5zbGF0aW9uOiAkX3dpZHRoIC0gJF9oYW5kbGUtd2lkdGg7XG5cbiAgaGVpZ2h0OiAkX2hlaWdodDtcbiAgd2lkdGg6ICRfd2lkdGg7XG4gIHBhZGRpbmc6IDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICBpbnB1dCB7XG4gICAgZGlzcGxheTogbm9uZTtcblxuICAgICsgZGl2IHtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgYm9yZGVyLXJhZGl1czogOTk5cHg7XG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGJveC1zaGFkb3csIGJhY2tncm91bmQtY29sb3I7XG4gICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjJzO1xuICAgICAgdHJhbnNpdGlvbi1kZWxheTogMC4ycztcbiAgICAgIGJveC1zaGFkb3c6IDNweCAzcHggMnB4IC0ycHggdHJhbnNwYXJlbnRpemUoYmxhY2ssIDAuOSksXG4gICAgICAgIGluc2V0IDJweCAycHggMnB4IDFweCB0cmFuc3BhcmVudGl6ZShibGFjaywgMC45KSxcbiAgICAgICAgaW5zZXQgLTJweCAtMnB4IDFweCB3aGl0ZTtcblxuICAgICAgJjo6YmVmb3JlIHtcbiAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGhlaWdodDogY2FsYygjeyRfaGFuZGxlLXdpZHRofSArIDRweCk7XG4gICAgICAgIHdpZHRoOiBjYWxjKCN7JF9oYW5kbGUtd2lkdGh9ICsgNHB4KTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICAgICAgYm9yZGVyOiBzb2xpZCB3aGl0ZSAzcHg7XG4gICAgICAgIGJhY2tncm91bmQ6ICRibHVlO1xuICAgICAgICBib3gtc2hhZG93OiAwIDNweCAxMHB4IHRyYW5zcGFyZW50aXplKGJsYWNrLCAwLjgpLFxuICAgICAgICAgIGluc2V0IDAgLTFweCAzcHggdHJhbnNwYXJlbnRpemUoYmxhY2ssIDAuOSk7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC02cHgpO1xuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycztcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmOmNoZWNrZWQgKyBkaXYge1xuICAgICAgYmFja2dyb3VuZDogJGJsdWU7XG4gICAgICBib3gtc2hhZG93OiAkZ2xvdy1zaGFkb3csIGluc2V0IDAgMnB4IDJweCAycHggdHJhbnNwYXJlbnRpemUoYmxhY2ssIDAuNyksXG4gICAgICAgIGluc2V0IDAgMCB0cmFuc3BhcmVudDtcblxuICAgICAgJjo6YmVmb3JlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoJF9oYW5kbGUtdHJhbnNsYXRpb24sIC02cHgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5ociB7XG4gIEBleHRlbmQgLmluc2V0O1xuICB3aWR0aDogNzIlO1xuICBoZWlnaHQ6IDhweDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBib3JkZXI6IDA7XG59XG5cbmNvZGUsXG5wcmUge1xuICBwYWRkaW5nOiAwLjVlbSAxZW07XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIGJveC1zaGFkb3c6IDAgNXB4IDMwcHggMCB0cmFuc3BhcmVudGl6ZShibGFjaywgMC45NSk7XG59XG5cbmNvZGUge1xuICBiYWNrZ3JvdW5kOiAjZTZlNmU2O1xufVxuXG5wcmUge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgbWFyZ2luOiA0ZW0gMDtcbn1cblxuY29kZSxcbnByZSB7XG4gICYsXG4gICYgKiB7XG4gICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgbGluZS1oZWlnaHQ6IDJlbTtcbiAgICBjdXJzb3I6IGF1dG87XG4gICAgdXNlci1zZWxlY3Q6IHRleHQ7XG4gICAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiB0ZXh0O1xuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IHRleHQ7XG4gICAgLWtodG1sLXVzZXItc2VsZWN0OiB0ZXh0O1xuICAgIC1tb3otdXNlci1zZWxlY3Q6IHRleHQ7XG4gICAgLW1zLXVzZXItc2VsZWN0OiB0ZXh0O1xuICB9XG59XG5cbmJsb2NrcXVvdGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMC41ZW0gMWVtO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJveC1zaGFkb3c6IDAgNXB4IDMwcHggMCB0cmFuc3BhcmVudGl6ZShibGFjaywgMC45NSk7XG4gIGJvcmRlci1sZWZ0OiA2cHggc29saWQgJGJsdWU7XG59XG4iLCJAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ0NhdmVhdCc7XG4gICAgc3JjOiB1cmwoJy4uLy4uL2ZvbnRzL0JvbGQvQ2F2ZWF0LUJvbGQud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXG4gICAgICAgIHVybCgnLi4vLi4vZm9udHMvQm9sZC9DYXZlYXQtQm9sZC53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtZGlzcGxheTogc3dhcDtcbn1cblxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdDYXZlYXQnO1xuICAgIHNyYzogdXJsKCcuLi8uLi9mb250cy9SZWd1bGFyL0NhdmVhdC1SZWd1bGFyLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxuICAgICAgICB1cmwoJy4uLy4uL2ZvbnRzL1JlZ3VsYXIvQ2F2ZWF0LVJlZ3VsYXIud29mZicpIGZvcm1hdCgnd29mZicpO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtZGlzcGxheTogc3dhcDtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnRmlndXJpbmVTeW1ib2xUMSc7XG4gIHNyYzogdXJsKCcuLi8uLi9mb250cy8zcmQgUGFydHkvQ2hlc3NWYXJpYW50cy9GaWd1cmluZVN5bWJvbFQxQm9sZC53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcbiAgICAgIHVybCgnLi4vLi4vZm9udHMvM3JkIFBhcnR5L0NoZXNzVmFyaWFudHMvRmlndXJpbmVTeW1ib2xUMUJvbGQud29mZicpIGZvcm1hdCgnd29mZicpO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ0ZpZ3VyaW5lU3ltYm9sVDEnO1xuICBzcmM6IHVybCgnLi4vLi4vZm9udHMvM3JkIFBhcnR5L0NoZXNzVmFyaWFudHMvRmlndXJpbmVTeW1ib2xUMS53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcbiAgICAgIHVybCgnLi4vLi4vZm9udHMvM3JkIFBhcnR5L0NoZXNzVmFyaWFudHMvRmlndXJpbmVTeW1ib2xUMS53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xufVxuXG4iLCIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiQ2F2ZWF0XCI7XG4gIHNyYzogdXJsKFwiLi4vLi4vZm9udHMvQm9sZC9DYXZlYXQtQm9sZC53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKSwgdXJsKFwiLi4vLi4vZm9udHMvQm9sZC9DYXZlYXQtQm9sZC53b2ZmXCIpIGZvcm1hdChcIndvZmZcIik7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJDYXZlYXRcIjtcbiAgc3JjOiB1cmwoXCIuLi8uLi9mb250cy9SZWd1bGFyL0NhdmVhdC1SZWd1bGFyLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpLCB1cmwoXCIuLi8uLi9mb250cy9SZWd1bGFyL0NhdmVhdC1SZWd1bGFyLndvZmZcIikgZm9ybWF0KFwid29mZlwiKTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiRmlndXJpbmVTeW1ib2xUMVwiO1xuICBzcmM6IHVybChcIi4uLy4uL2ZvbnRzLzNyZCBQYXJ0eS9DaGVzc1ZhcmlhbnRzL0ZpZ3VyaW5lU3ltYm9sVDFCb2xkLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpLCB1cmwoXCIuLi8uLi9mb250cy8zcmQgUGFydHkvQ2hlc3NWYXJpYW50cy9GaWd1cmluZVN5bWJvbFQxQm9sZC53b2ZmXCIpIGZvcm1hdChcIndvZmZcIik7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJGaWd1cmluZVN5bWJvbFQxXCI7XG4gIHNyYzogdXJsKFwiLi4vLi4vZm9udHMvM3JkIFBhcnR5L0NoZXNzVmFyaWFudHMvRmlndXJpbmVTeW1ib2xUMS53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKSwgdXJsKFwiLi4vLi4vZm9udHMvM3JkIFBhcnR5L0NoZXNzVmFyaWFudHMvRmlndXJpbmVTeW1ib2xUMS53b2ZmXCIpIGZvcm1hdChcIndvZmZcIik7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xufVxuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBDb250YWluZXIgVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgQ29udGFpbmVyIFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIENvbnRhaW5lciBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBIaWdobGlnaHQgVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgQW5ub3RhdGlvbiBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBWYXJpYXRpb24gVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgUGx5IFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG46cm9vdCB7XG4gIC0tYmctY29sb3I6ICNmMmYzZjc7XG4gIC0tZmctY29sb3I6ICMzODNhNDE7XG4gIC0tcmVkOiAjZTQzMDMwO1xuICAtLWdyZWVuOiAjMTlhMTg3O1xuICAtLWJsdWU6ICMzNjdiZjA7XG4gIC0tZGFyay1ibHVlOiAjMjY1YWIxO1xuICAtLW1hcm9vbjogI2I4MTc0YztcbiAgLS1wdXJwbGU6ICM4YzQyYWI7XG59XG5cbjo6LW1vei1mb2N1cy1pbm5lcixcbjotbW96LWZvY3VzcmluZyB7XG4gIGJvcmRlcjogMDtcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xuICB0ZXh0LXNoYWRvdzogMCAwIDAgIzM4M2E0MTtcbn1cblxuOjpzZWxlY3Rpb24sXG46Oi1tb3otc2VsZWN0aW9uIHtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kOiBibGFjaztcbn1cblxuKiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApICFpbXBvcnRhbnQ7XG4gIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcbiAgY3Vyc29yOiBkZWZhdWx0O1xuICBsZXR0ZXItc3BhY2luZzogMDtcbn1cblxuLnNlbGVjdGFibGUsXG4uc2VsZWN0YWJsZSAqIHtcbiAgY3Vyc29yOiBhdXRvO1xuICB1c2VyLXNlbGVjdDogdGV4dDtcbiAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiB0ZXh0O1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiB0ZXh0O1xuICAta2h0bWwtdXNlci1zZWxlY3Q6IHRleHQ7XG4gIC1tb3otdXNlci1zZWxlY3Q6IHRleHQ7XG4gIC1tcy11c2VyLXNlbGVjdDogdGV4dDtcbn1cblxuaHRtbCxcbmJvZHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmM2Y3O1xuICBjb2xvcjogIzM4M2E0MTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBmb250LXNpemU6IDEwcHQ7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi53aXRoLXNoYWRvdywgLm91dHNldCwgYnV0dG9uLCAuY2hlY2t0ZXh0IGlucHV0ICsgc3BhbiwgLmJsdWUtYnV0dG9uLCAuY2hlY2t0ZXh0IGlucHV0OmNoZWNrZWQgKyBzcGFuLCBidXR0b24uYmx1ZS1idXR0b24sIC5yZWQtYnV0dG9uLmJsdWUtYnV0dG9uLCAuZ3JlZW4tYnV0dG9uLmJsdWUtYnV0dG9uLCAuZ3JlZW4tYnV0dG9uLCBidXR0b24uZ3JlZW4tYnV0dG9uLCAucmVkLWJ1dHRvbi5ncmVlbi1idXR0b24sIC5yZWQtYnV0dG9uLCBidXR0b24ucmVkLWJ1dHRvbixcbmlucHV0W3R5cGU9YnV0dG9uXSxcbmlucHV0W3R5cGU9c3VibWl0XSxcbmlucHV0W3R5cGU9cmVzZXRdLCBzZWxlY3QsIGlucHV0W3R5cGU9dGV4dF06bm90KHNlbGVjdCk6Zm9jdXMsXG5pbnB1dFt0eXBlPXNlYXJjaF06bm90KHNlbGVjdCk6Zm9jdXMsXG5pbnB1dFt0eXBlPXRlbF06bm90KHNlbGVjdCk6Zm9jdXMsXG5pbnB1dFt0eXBlPXVybF06bm90KHNlbGVjdCk6Zm9jdXMsXG5pbnB1dFt0eXBlPWVtYWlsXTpub3Qoc2VsZWN0KTpmb2N1cyxcbmlucHV0W3R5cGU9cGFzc3dvcmRdOm5vdChzZWxlY3QpOmZvY3VzLFxuaW5wdXRbdHlwZT1kYXRlXTpub3Qoc2VsZWN0KTpmb2N1cyxcbmlucHV0W3R5cGU9bW9udGhdOm5vdChzZWxlY3QpOmZvY3VzLFxuaW5wdXRbdHlwZT13ZWVrXTpub3Qoc2VsZWN0KTpmb2N1cyxcbmlucHV0W3R5cGU9dGltZV06bm90KHNlbGVjdCk6Zm9jdXMsXG5pbnB1dFt0eXBlPW51bWJlcl06bm90KHNlbGVjdCk6Zm9jdXMsXG5pbnB1dFt0eXBlPWNvbG9yXTpub3Qoc2VsZWN0KTpmb2N1cyxcbnNlbGVjdDpub3Qoc2VsZWN0KTpmb2N1cyxcbnRleHRhcmVhOm5vdChzZWxlY3QpOmZvY3VzLCAucGFwZXIge1xuICBib3gtc2hhZG93OiA2cHggNnB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpLCAtNnB4IC02cHggMTBweCB3aGl0ZTtcbn1cblxuLm91dHNldCwgYnV0dG9uLCAuY2hlY2t0ZXh0IGlucHV0ICsgc3BhbiwgLmJsdWUtYnV0dG9uLCAuY2hlY2t0ZXh0IGlucHV0OmNoZWNrZWQgKyBzcGFuLCBidXR0b24uYmx1ZS1idXR0b24sIC5yZWQtYnV0dG9uLmJsdWUtYnV0dG9uLCAuZ3JlZW4tYnV0dG9uLmJsdWUtYnV0dG9uLCAuZ3JlZW4tYnV0dG9uLCBidXR0b24uZ3JlZW4tYnV0dG9uLCAucmVkLWJ1dHRvbi5ncmVlbi1idXR0b24sIC5yZWQtYnV0dG9uLCBidXR0b24ucmVkLWJ1dHRvbixcbmlucHV0W3R5cGU9YnV0dG9uXSxcbmlucHV0W3R5cGU9c3VibWl0XSxcbmlucHV0W3R5cGU9cmVzZXRdLCBzZWxlY3QsIGlucHV0W3R5cGU9dGV4dF06bm90KHNlbGVjdCk6Zm9jdXMsXG5pbnB1dFt0eXBlPXNlYXJjaF06bm90KHNlbGVjdCk6Zm9jdXMsXG5pbnB1dFt0eXBlPXRlbF06bm90KHNlbGVjdCk6Zm9jdXMsXG5pbnB1dFt0eXBlPXVybF06bm90KHNlbGVjdCk6Zm9jdXMsXG5pbnB1dFt0eXBlPWVtYWlsXTpub3Qoc2VsZWN0KTpmb2N1cyxcbmlucHV0W3R5cGU9cGFzc3dvcmRdOm5vdChzZWxlY3QpOmZvY3VzLFxuaW5wdXRbdHlwZT1kYXRlXTpub3Qoc2VsZWN0KTpmb2N1cyxcbmlucHV0W3R5cGU9bW9udGhdOm5vdChzZWxlY3QpOmZvY3VzLFxuaW5wdXRbdHlwZT13ZWVrXTpub3Qoc2VsZWN0KTpmb2N1cyxcbmlucHV0W3R5cGU9dGltZV06bm90KHNlbGVjdCk6Zm9jdXMsXG5pbnB1dFt0eXBlPW51bWJlcl06bm90KHNlbGVjdCk6Zm9jdXMsXG5pbnB1dFt0eXBlPWNvbG9yXTpub3Qoc2VsZWN0KTpmb2N1cyxcbnNlbGVjdDpub3Qoc2VsZWN0KTpmb2N1cyxcbnRleHRhcmVhOm5vdChzZWxlY3QpOmZvY3VzLCAucGFwZXIge1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjZjJmM2Y3O1xufVxuXG4uaW5zZXQsIGhyLCBidXR0b24uYWN0aXZlLCAuY2hlY2t0ZXh0IGlucHV0ICsgc3Bhbi5hY3RpdmUsIC5hY3RpdmUuYmx1ZS1idXR0b24sIC5hY3RpdmUuZ3JlZW4tYnV0dG9uLCAuYWN0aXZlLnJlZC1idXR0b24sIGJ1dHRvbjphY3RpdmUsIC5jaGVja3RleHQgaW5wdXQgKyBzcGFuOmFjdGl2ZSwgLmJsdWUtYnV0dG9uOmFjdGl2ZSwgLmdyZWVuLWJ1dHRvbjphY3RpdmUsIC5yZWQtYnV0dG9uOmFjdGl2ZSxcbmlucHV0W3R5cGU9YnV0dG9uXS5hY3RpdmUsXG5pbnB1dFt0eXBlPWJ1dHRvbl06YWN0aXZlLFxuaW5wdXRbdHlwZT1zdWJtaXRdLmFjdGl2ZSxcbmlucHV0W3R5cGU9c3VibWl0XTphY3RpdmUsXG5pbnB1dFt0eXBlPXJlc2V0XS5hY3RpdmUsXG5pbnB1dFt0eXBlPXJlc2V0XTphY3RpdmUsIGlucHV0W3R5cGU9dGV4dF06bm90KHNlbGVjdCksXG5pbnB1dFt0eXBlPXNlYXJjaF06bm90KHNlbGVjdCksXG5pbnB1dFt0eXBlPXRlbF06bm90KHNlbGVjdCksXG5pbnB1dFt0eXBlPXVybF06bm90KHNlbGVjdCksXG5pbnB1dFt0eXBlPWVtYWlsXTpub3Qoc2VsZWN0KSxcbmlucHV0W3R5cGU9cGFzc3dvcmRdOm5vdChzZWxlY3QpLFxuaW5wdXRbdHlwZT1kYXRlXTpub3Qoc2VsZWN0KSxcbmlucHV0W3R5cGU9bW9udGhdOm5vdChzZWxlY3QpLFxuaW5wdXRbdHlwZT13ZWVrXTpub3Qoc2VsZWN0KSxcbmlucHV0W3R5cGU9dGltZV06bm90KHNlbGVjdCksXG5pbnB1dFt0eXBlPW51bWJlcl06bm90KHNlbGVjdCksXG5pbnB1dFt0eXBlPWNvbG9yXTpub3Qoc2VsZWN0KSxcbnNlbGVjdDpub3Qoc2VsZWN0KSxcbnRleHRhcmVhOm5vdChzZWxlY3QpIHtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm94LXNoYWRvdzogMCAwIHRyYW5zcGFyZW50LCAwIDAgdHJhbnNwYXJlbnQsIGluc2V0IDNweCAzcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4xKSwgaW5zZXQgLTNweCAtM3B4IDVweCB3aGl0ZTtcbiAgYmFja2dyb3VuZDogI2Y4ZjlmYjtcbn1cblxuLnBhcGVyIHtcbiAgcGFkZGluZzogMTBweCAyMHB4IDIwcHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIG1pbi1oZWlnaHQ6IDEwMHB4O1xuICBmb250LXNpemU6IDEuMmVtO1xuICBiYWNrZ3JvdW5kOiAjZjJmM2Y3O1xufVxuXG5zZWN0aW9uLFxuYXJ0aWNsZSxcbi5zZWN0aW9uLFxuLmFydGljbGUsXG4ucGFwZXIge1xuICBsaW5lLWhlaWdodDogMmVtO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIHdvcmQtYnJlYWs6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDJlbTtcbn1cblxuaW5wdXRbdHlwZT10ZXh0XSxcbmlucHV0W3R5cGU9c2VhcmNoXSxcbmlucHV0W3R5cGU9dGVsXSxcbmlucHV0W3R5cGU9dXJsXSxcbmlucHV0W3R5cGU9ZW1haWxdLFxuaW5wdXRbdHlwZT1wYXNzd29yZF0sXG5pbnB1dFt0eXBlPWRhdGVdLFxuaW5wdXRbdHlwZT1tb250aF0sXG5pbnB1dFt0eXBlPXdlZWtdLFxuaW5wdXRbdHlwZT10aW1lXSxcbmlucHV0W3R5cGU9bnVtYmVyXSxcbmlucHV0W3R5cGU9Y29sb3JdLFxuc2VsZWN0LFxudGV4dGFyZWEge1xuICBib3JkZXI6IDA7XG4gIGJhY2tncm91bmQ6ICNmMmYzZjc7XG4gIGNvbG9yOiAjMzgzYTQxO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBwYWRkaW5nOiAwIDEuMjVlbTtcbiAgbGluZS1oZWlnaHQ6IDEuMjVlbTtcbiAgaGVpZ2h0OiAzLjVlbTtcbiAgbWFyZ2luOiAxMHB4IDA7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xuICBjdXJzb3I6IHRleHQ7XG4gIHVzZXItc2VsZWN0OiB0ZXh0O1xuICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IHRleHQ7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IHRleHQ7XG4gIC1raHRtbC11c2VyLXNlbGVjdDogdGV4dDtcbiAgLW1vei11c2VyLXNlbGVjdDogdGV4dDtcbiAgLW1zLXVzZXItc2VsZWN0OiB0ZXh0O1xuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuMnM7XG59XG50ZXh0YXJlYSB7XG4gIGhlaWdodDogMzUwcHg7XG4gIHBhZGRpbmc6IDEuMjVlbTtcbn1cblxuc2VsZWN0IHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kOiB1cmwoZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCMlpYSnphVzl1UFNJeExqRWlJSFpwWlhkQ2IzZzlJakFnTUNBeE9TQXhPU0lnZUcxc2JuTTlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5Mekl3TURBdmMzWm5JajQ4WnlCMGNtRnVjMlp2Y20wOUltMWhkSEpwZUNndU1ETTBJREFnTUNBdU1ETTBJQzAyTGpnZ01TNDNaUzAxS1NJZ2MzUjViR1U5SW1acGJHdzZJemRpTjJVNFl5SStQSEJoZEdnZ1pEMGliVFE0TUNBek5EUXRNakV4TFRJeE1tTXRNVFl0TVRZdE5ERXRNVFl0TlRjZ01DMHhOaUF4TmkweE5pQTBNaUF3SURVM2JESXpPQ0F5TXpsak9DNDBJRGd1TlNBeU1DQXhNaUF6TVNBeE1pQXhNU0F3TGpVMklESXlMVE11TWlBek1TMHhNbXd5TXpndE1qTTVZekUyTFRFMklERTJMVFF5SURBdE5UZHpMVFF4TFRFMkxUVTNJREI2SWlCemRIbHNaVDBpWm1sc2JEb2pOMkkzWlRoaklpOCtQQzluUGp3dmMzWm5QZ289KSBuby1yZXBlYXQgcmlnaHQgMWVtIGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiAxLjJlbTtcbiAgcGFkZGluZy1yaWdodDogM2VtO1xufVxuXG5pbnB1dDo6cGxhY2Vob2xkZXIsXG50ZXh0YXJlYTo6cGxhY2Vob2xkZXIge1xuICBvcGFjaXR5OiAxO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnM7XG4gIGNvbG9yOiBpbmhlcml0O1xufVxuXG5pbnB1dDpmb2N1czo6cGxhY2Vob2xkZXIsXG50ZXh0YXJlYTpmb2N1czo6cGxhY2Vob2xkZXIge1xuICBvcGFjaXR5OiAwLjI7XG59XG5cbmlucHV0Oi1tcy1pbnB1dC1wbGFjZWhvbGRlcixcbnRleHRhcmVhOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycztcbiAgY29sb3I6IGluaGVyaXQ7XG59XG5cbmlucHV0OmZvY3VzOi1tcy1pbnB1dC1wbGFjZWhvbGRlcixcbnRleHRhcmVhOmZvY3VzOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIG9wYWNpdHk6IDAuMjtcbn1cblxuaW5wdXRbdHlwZT1zZWFyY2hdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uLFxuaW5wdXRbdHlwZT1zZWFyY2hdOjotd2Via2l0LXNlYXJjaC1jYW5jZWwtYnV0dG9uLFxuaW5wdXRbdHlwZT1zZWFyY2hdOjotd2Via2l0LXNlYXJjaC1yZXN1bHRzLWJ1dHRvbixcbmlucHV0W3R5cGU9c2VhcmNoXTo6LXdlYmtpdC1zZWFyY2gtcmVzdWx0cy1kZWNvcmF0aW9uIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuYnV0dG9uLCAuY2hlY2t0ZXh0IGlucHV0ICsgc3BhbiwgLmJsdWUtYnV0dG9uLCAuY2hlY2t0ZXh0IGlucHV0OmNoZWNrZWQgKyBzcGFuLCBidXR0b24uYmx1ZS1idXR0b24sIC5yZWQtYnV0dG9uLmJsdWUtYnV0dG9uLCAuZ3JlZW4tYnV0dG9uLmJsdWUtYnV0dG9uLCAuZ3JlZW4tYnV0dG9uLCBidXR0b24uZ3JlZW4tYnV0dG9uLCAucmVkLWJ1dHRvbi5ncmVlbi1idXR0b24sIC5yZWQtYnV0dG9uLCBidXR0b24ucmVkLWJ1dHRvbixcbmlucHV0W3R5cGU9YnV0dG9uXSxcbmlucHV0W3R5cGU9c3VibWl0XSxcbmlucHV0W3R5cGU9cmVzZXRdIHtcbiAgYm9yZGVyOiAwO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgcGFkZGluZzogMTBweCAwO1xuICB3aWR0aDogOGVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBiYWNrZ3JvdW5kLWNvbG9yLCBib3gtc2hhZG93O1xuICB0cmFuc2l0aW9uLWRlbGF5OiAwLjJzO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjJzO1xufVxuYnV0dG9uLmFjdGl2ZSwgLmNoZWNrdGV4dCBpbnB1dCArIHNwYW4uYWN0aXZlLCAuYWN0aXZlLmJsdWUtYnV0dG9uLCAuYWN0aXZlLmdyZWVuLWJ1dHRvbiwgLmFjdGl2ZS5yZWQtYnV0dG9uLCBidXR0b246YWN0aXZlLCAuY2hlY2t0ZXh0IGlucHV0ICsgc3BhbjphY3RpdmUsIC5ibHVlLWJ1dHRvbjphY3RpdmUsIC5ncmVlbi1idXR0b246YWN0aXZlLCAucmVkLWJ1dHRvbjphY3RpdmUsXG5pbnB1dFt0eXBlPWJ1dHRvbl0uYWN0aXZlLFxuaW5wdXRbdHlwZT1idXR0b25dOmFjdGl2ZSxcbmlucHV0W3R5cGU9c3VibWl0XS5hY3RpdmUsXG5pbnB1dFt0eXBlPXN1Ym1pdF06YWN0aXZlLFxuaW5wdXRbdHlwZT1yZXNldF0uYWN0aXZlLFxuaW5wdXRbdHlwZT1yZXNldF06YWN0aXZlIHtcbiAgdHJhbnNpdGlvbi1kZWxheTogMHM7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMXM7XG59XG4ucmVkLWJ1dHRvbiwgYnV0dG9uLnJlZC1idXR0b24sIC5jaGVja3RleHQgaW5wdXQgKyBzcGFuLnJlZC1idXR0b24sIC5yZWQtYnV0dG9uLmJsdWUtYnV0dG9uLCAucmVkLWJ1dHRvbi5ncmVlbi1idXR0b24sXG5pbnB1dFt0eXBlPWJ1dHRvbl0ucmVkLWJ1dHRvbixcbmlucHV0W3R5cGU9c3VibWl0XS5yZWQtYnV0dG9uLFxuaW5wdXRbdHlwZT1yZXNldF0ucmVkLWJ1dHRvbiB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtc2hhZG93OiAwIDAuMWVtIDAuMWVtIHJnYmEoMCwgMCwgMCwgMC43KTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgI2U0MzAzMCAzMCUsICNlODRiNGIgODAlKTtcbiAgYm94LXNoYWRvdzogMCAwIDAuNWVtIHJnYmEoMjI4LCA0OCwgNDgsIDAuNyksIDAgMCB0cmFuc3BhcmVudCwgaW5zZXQgMCAtNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjA1KSwgaW5zZXQgMCAycHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG4gIGJvcmRlci1yYWRpdXM6IDZweCA2cHggOHB4IDhweDtcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYm94LXNoYWRvdywgYm9yZGVyLXJhZGl1cztcbn1cbi5yZWQtYnV0dG9uLmFjdGl2ZSwgLnJlZC1idXR0b246YWN0aXZlLCBidXR0b24ucmVkLWJ1dHRvbi5hY3RpdmUsIGJ1dHRvbi5yZWQtYnV0dG9uOmFjdGl2ZSxcbmlucHV0W3R5cGU9YnV0dG9uXS5yZWQtYnV0dG9uLmFjdGl2ZSxcbmlucHV0W3R5cGU9YnV0dG9uXS5yZWQtYnV0dG9uOmFjdGl2ZSxcbmlucHV0W3R5cGU9c3VibWl0XS5yZWQtYnV0dG9uLmFjdGl2ZSxcbmlucHV0W3R5cGU9c3VibWl0XS5yZWQtYnV0dG9uOmFjdGl2ZSxcbmlucHV0W3R5cGU9cmVzZXRdLnJlZC1idXR0b24uYWN0aXZlLFxuaW5wdXRbdHlwZT1yZXNldF0ucmVkLWJ1dHRvbjphY3RpdmUge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAjZTQzMDMwIDMwJSwgI2U4NGI0YiA4MCUpO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGJveC1zaGFkb3c6IDAgMCB0cmFuc3BhcmVudCwgMCAwIHRyYW5zcGFyZW50LCBpbnNldCAwIDJweCA1cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cblxuLmdyZWVuLWJ1dHRvbiwgYnV0dG9uLmdyZWVuLWJ1dHRvbiwgLmNoZWNrdGV4dCBpbnB1dCArIHNwYW4uZ3JlZW4tYnV0dG9uLCAuZ3JlZW4tYnV0dG9uLmJsdWUtYnV0dG9uLCAuZ3JlZW4tYnV0dG9uLnJlZC1idXR0b24sXG5pbnB1dFt0eXBlPWJ1dHRvbl0uZ3JlZW4tYnV0dG9uLFxuaW5wdXRbdHlwZT1zdWJtaXRdLmdyZWVuLWJ1dHRvbixcbmlucHV0W3R5cGU9cmVzZXRdLmdyZWVuLWJ1dHRvbiB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtc2hhZG93OiAwIDAuMWVtIDAuMWVtIHJnYmEoMCwgMCwgMCwgMC43KTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgIzE5YTE4NyAzMCUsICMxZGJiOWQgODAlKTtcbiAgYm94LXNoYWRvdzogMCAwIDAuNWVtIHJnYmEoMjUsIDE2MSwgMTM1LCAwLjcpLCAwIDAgdHJhbnNwYXJlbnQsIGluc2V0IDAgLTVweCAwIHJnYmEoMCwgMCwgMCwgMC4wNSksIGluc2V0IDAgMnB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuICBib3JkZXItcmFkaXVzOiA2cHggNnB4IDhweCA4cHg7XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGJveC1zaGFkb3csIGJvcmRlci1yYWRpdXM7XG59XG4uZ3JlZW4tYnV0dG9uLmFjdGl2ZSwgLmdyZWVuLWJ1dHRvbjphY3RpdmUsIGJ1dHRvbi5ncmVlbi1idXR0b24uYWN0aXZlLCBidXR0b24uZ3JlZW4tYnV0dG9uOmFjdGl2ZSxcbmlucHV0W3R5cGU9YnV0dG9uXS5ncmVlbi1idXR0b24uYWN0aXZlLFxuaW5wdXRbdHlwZT1idXR0b25dLmdyZWVuLWJ1dHRvbjphY3RpdmUsXG5pbnB1dFt0eXBlPXN1Ym1pdF0uZ3JlZW4tYnV0dG9uLmFjdGl2ZSxcbmlucHV0W3R5cGU9c3VibWl0XS5ncmVlbi1idXR0b246YWN0aXZlLFxuaW5wdXRbdHlwZT1yZXNldF0uZ3JlZW4tYnV0dG9uLmFjdGl2ZSxcbmlucHV0W3R5cGU9cmVzZXRdLmdyZWVuLWJ1dHRvbjphY3RpdmUge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAjMTlhMTg3IDMwJSwgIzFkYmI5ZCA4MCUpO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGJveC1zaGFkb3c6IDAgMCB0cmFuc3BhcmVudCwgMCAwIHRyYW5zcGFyZW50LCBpbnNldCAwIDJweCA1cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cblxuLmJsdWUtYnV0dG9uLCAuY2hlY2t0ZXh0IGlucHV0OmNoZWNrZWQgKyBzcGFuLCBidXR0b24uYmx1ZS1idXR0b24sIC5jaGVja3RleHQgaW5wdXQgKyBzcGFuLmJsdWUtYnV0dG9uLCAuYmx1ZS1idXR0b24ucmVkLWJ1dHRvbiwgLmJsdWUtYnV0dG9uLmdyZWVuLWJ1dHRvbixcbmlucHV0W3R5cGU9YnV0dG9uXS5ibHVlLWJ1dHRvbixcbmlucHV0W3R5cGU9c3VibWl0XS5ibHVlLWJ1dHRvbixcbmlucHV0W3R5cGU9cmVzZXRdLmJsdWUtYnV0dG9uIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1zaGFkb3c6IDAgMC4xZW0gMC4xZW0gcmdiYSgwLCAwLCAwLCAwLjcpO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAjMzY3YmYwIDMwJSwgIzUyOGVmMiA4MCUpO1xuICBib3gtc2hhZG93OiAwIDAgMC41ZW0gcmdiYSg1NCwgMTIzLCAyNDAsIDAuNyksIDAgMCB0cmFuc3BhcmVudCwgaW5zZXQgMCAtNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjA1KSwgaW5zZXQgMCAycHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG4gIGJvcmRlci1yYWRpdXM6IDZweCA2cHggOHB4IDhweDtcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYm94LXNoYWRvdywgYm9yZGVyLXJhZGl1cztcbn1cbi5ibHVlLWJ1dHRvbi5hY3RpdmUsIC5jaGVja3RleHQgaW5wdXQ6Y2hlY2tlZCArIHNwYW4uYWN0aXZlLCAuYmx1ZS1idXR0b246YWN0aXZlLCAuY2hlY2t0ZXh0IGlucHV0OmNoZWNrZWQgKyBzcGFuOmFjdGl2ZSwgYnV0dG9uLmJsdWUtYnV0dG9uLmFjdGl2ZSwgYnV0dG9uLmJsdWUtYnV0dG9uOmFjdGl2ZSxcbmlucHV0W3R5cGU9YnV0dG9uXS5ibHVlLWJ1dHRvbi5hY3RpdmUsXG5pbnB1dFt0eXBlPWJ1dHRvbl0uYmx1ZS1idXR0b246YWN0aXZlLFxuaW5wdXRbdHlwZT1zdWJtaXRdLmJsdWUtYnV0dG9uLmFjdGl2ZSxcbmlucHV0W3R5cGU9c3VibWl0XS5ibHVlLWJ1dHRvbjphY3RpdmUsXG5pbnB1dFt0eXBlPXJlc2V0XS5ibHVlLWJ1dHRvbi5hY3RpdmUsXG5pbnB1dFt0eXBlPXJlc2V0XS5ibHVlLWJ1dHRvbjphY3RpdmUge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAjMzY3YmYwIDMwJSwgIzUyOGVmMiA4MCUpO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGJveC1zaGFkb3c6IDAgMCB0cmFuc3BhcmVudCwgMCAwIHRyYW5zcGFyZW50LCBpbnNldCAwIDJweCA1cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cblxubGFiZWwge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDAuNTZlbSAwO1xufVxubGFiZWwsIGxhYmVsICoge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmEsIGE6bGluaywgYTp2aXNpdGVkLCBhOmhvdmVyIGE6YWN0aXZlIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjMzY3YmYwO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuYSwgYSAqLCBhOmxpbmssIGE6bGluayAqLCBhOnZpc2l0ZWQsIGE6dmlzaXRlZCAqLCBhOmhvdmVyIGE6YWN0aXZlLCBhOmhvdmVyIGE6YWN0aXZlICoge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmgxLFxuaDIsXG5oMyxcbmg0LFxuaDUsXG5oNiB7XG4gIGxpbmUtaGVpZ2h0OiAxLjVlbTtcbn1cblxuaDEge1xuICBmb250LXNpemU6IDRlbTtcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4gIG1hcmdpbjogMC43ZW0gMDtcbn1cblxuaDIge1xuICBmb250LXNpemU6IDNlbTtcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4gIG1hcmdpbjogMC44ZW0gMDtcbn1cblxuaDMge1xuICBmb250LXNpemU6IDIuNWVtO1xuICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgbWFyZ2luOiAwLjllbSAwO1xufVxuXG5oNCB7XG4gIGZvbnQtc2l6ZTogMmVtO1xuICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgbWFyZ2luOiAxZW0gMDtcbn1cblxuaDUge1xuICBtYXJnaW46IDAuNWVtIDA7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG5cbmg2IHtcbiAgbWFyZ2luOiAxZW0gMCAxZW0gMS40ZW07XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuaW5wdXRbdHlwZT1jaGVja2JveF0sXG5pbnB1dFt0eXBlPXJhZGlvXSB7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGhlaWdodDogMS4yZW07XG4gIHdpZHRoOiAxLjJlbTtcbiAgbWFyZ2luOiAwIDAuM2VtO1xuICBib3gtc2hhZG93OiAycHggMnB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMiksIC0ycHggLTJweCAzcHggd2hpdGUsIGluc2V0IDFweCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgaW5zZXQgLTFweCAtMXB4IDJweCB3aGl0ZTtcbiAgYm9yZGVyOiAwLjE1ZW0gc29saWQgI2YyZjNmNztcbiAgdmVydGljYWwtYWxpZ246IHRleHQtYm90dG9tO1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBiYWNrZ3JvdW5kLCBib3gtc2hhZG93O1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjJzO1xufVxuaW5wdXRbdHlwZT1jaGVja2JveF06YWN0aXZlLFxuaW5wdXRbdHlwZT1yYWRpb106YWN0aXZlIHtcbiAgYm94LXNoYWRvdzogMnB4IDJweCAzcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAtMnB4IC0ycHggM3B4IHdoaXRlLCBpbnNldCAxcHggMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMiksIGluc2V0IC0xcHggLTFweCAycHggd2hpdGUsIGluc2V0IDAgMC4xZW0gMC4yNWVtIHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cbmlucHV0W3R5cGU9Y2hlY2tib3hdOmNoZWNrZWQsXG5pbnB1dFt0eXBlPXJhZGlvXTpjaGVja2VkIHtcbiAgYm9yZGVyLXdpZHRoOiAwLjFlbTtcbiAgYm9yZGVyLWNvbG9yOiAjMTE1ZmUyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzY3YmYwO1xufVxuXG5pbnB1dFt0eXBlPWNoZWNrYm94XSB7XG4gIGJvcmRlci1yYWRpdXM6IDI1JTtcbn1cbmlucHV0W3R5cGU9Y2hlY2tib3hdOmNoZWNrZWQge1xuICBib3gtc2hhZG93OiAwIDAgMC41ZW0gcmdiYSg1NCwgMTIzLCAyNDAsIDAuNyksIGluc2V0IDAgLTAuMWVtIDAgcmdiYSgwLCAwLCAwLCAwLjIpLCBpbnNldCAwIDAuMWVtIDAuMWVtIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbn1cblxuaW5wdXRbdHlwZT1yYWRpb10ge1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xufVxuaW5wdXRbdHlwZT1yYWRpb106Y2hlY2tlZCB7XG4gIGJveC1zaGFkb3c6IDAgMCAwLjVlbSByZ2JhKDU0LCAxMjMsIDI0MCwgMC43KTtcbiAgYm94LXNoYWRvdzogMCAwIDAuNWVtIHJnYmEoNTQsIDEyMywgMjQwLCAwLjcpLCBpbnNldCAwIDAuMTJlbSAwLjFlbSByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpO1xuICBib3JkZXItYm90dG9tLXdpZHRoOiAwLjE1ZW07XG59XG5cbi5jaGVja3RleHQge1xuICB3aWR0aDogYXV0bztcbiAgbWFyZ2luOiAwLjVlbTtcbn1cbi5jaGVja3RleHQgaW5wdXQge1xuICBkaXNwbGF5OiBub25lO1xufVxuLmNoZWNrdGV4dCBpbnB1dCArIHNwYW4ge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZzogMWVtO1xuICB0cmFuc2l0aW9uLWRlbGF5OiAwcztcbn1cbi5jaGVja3RleHQgaW5wdXQ6Y2hlY2tlZCArIHNwYW4ge1xuICBwYWRkaW5nOiAxZW07XG59XG5cbi5zd2l0Y2gge1xuICBoZWlnaHQ6IDJyZW07XG4gIHdpZHRoOiA4cmVtO1xuICBwYWRkaW5nOiAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uc3dpdGNoIGlucHV0IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5zd2l0Y2ggaW5wdXQgKyBkaXYge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiA5OTlweDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGJveC1zaGFkb3csIGJhY2tncm91bmQtY29sb3I7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMnM7XG4gIHRyYW5zaXRpb24tZGVsYXk6IDAuMnM7XG4gIGJveC1zaGFkb3c6IDNweCAzcHggMnB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjEpLCBpbnNldCAycHggMnB4IDJweCAxcHggcmdiYSgwLCAwLCAwLCAwLjEpLCBpbnNldCAtMnB4IC0ycHggMXB4IHdoaXRlO1xufVxuLnN3aXRjaCBpbnB1dCArIGRpdjo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogY2FsYygycmVtICsgNHB4KTtcbiAgd2lkdGg6IGNhbGMoMnJlbSArIDRweCk7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIGJvcmRlcjogc29saWQgd2hpdGUgM3B4O1xuICBiYWNrZ3JvdW5kOiAjMzY3YmYwO1xuICBib3gtc2hhZG93OiAwIDNweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgaW5zZXQgMCAtMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC02cHgpO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycztcbn1cbi5zd2l0Y2ggaW5wdXQ6Y2hlY2tlZCArIGRpdiB7XG4gIGJhY2tncm91bmQ6ICMzNjdiZjA7XG4gIGJveC1zaGFkb3c6IDAgMCAwLjVlbSByZ2JhKDU0LCAxMjMsIDI0MCwgMC43KSwgaW5zZXQgMCAycHggMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMyksIGluc2V0IDAgMCB0cmFuc3BhcmVudDtcbn1cbi5zd2l0Y2ggaW5wdXQ6Y2hlY2tlZCArIGRpdjo6YmVmb3JlIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNnJlbSwgLTZweCk7XG59XG5cbmhyIHtcbiAgd2lkdGg6IDcyJTtcbiAgaGVpZ2h0OiA4cHg7XG4gIGZsb2F0OiByaWdodDtcbiAgYm9yZGVyOiAwO1xufVxuXG5jb2RlLFxucHJlIHtcbiAgcGFkZGluZzogMC41ZW0gMWVtO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBib3gtc2hhZG93OiAwIDVweCAzMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjA1KTtcbn1cblxuY29kZSB7XG4gIGJhY2tncm91bmQ6ICNlNmU2ZTY7XG59XG5cbnByZSB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBtYXJnaW46IDRlbSAwO1xufVxuXG5jb2RlLCBjb2RlICosXG5wcmUsXG5wcmUgKiB7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBsaW5lLWhlaWdodDogMmVtO1xuICBjdXJzb3I6IGF1dG87XG4gIHVzZXItc2VsZWN0OiB0ZXh0O1xuICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IHRleHQ7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IHRleHQ7XG4gIC1raHRtbC11c2VyLXNlbGVjdDogdGV4dDtcbiAgLW1vei11c2VyLXNlbGVjdDogdGV4dDtcbiAgLW1zLXVzZXItc2VsZWN0OiB0ZXh0O1xufVxuXG5ibG9ja3F1b3RlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDAuNWVtIDFlbTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3gtc2hhZG93OiAwIDVweCAzMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgYm9yZGVyLWxlZnQ6IDZweCBzb2xpZCAjMzY3YmYwO1xufVxuXG5tYXQtZGl2aWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBtYXJnaW46IDJweDtcbn1cblxuLm1hdC1ncmlkLXRpbGUge1xuICBiYWNrZ3JvdW5kOiAjNTg1ODU4ZmY7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1mYW1pbHk6IFwiRmlndXJpbmVTeW1ib2xUMVwiO1xuICBmb250LXdlaWdodDogMzYwO1xuICBtYXgtd2lkdGg6IDE2NHB4O1xuICBmb250LXNpemU6IDI0cHg7XG4gIHRleHQtYWxpZ246IGF1dG87XG59XG5cbi5zY29yZS10aXRsZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAyOHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMnB4O1xuICBsZWZ0OiA2cHg7XG59XG5cbi5zY29yZS1saXN0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA4cHg7XG4gIHJpZ2h0OiA4cHg7XG4gIHRvcDogNDBweDtcbiAgYm90dG9tOiA4cHg7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG4uZ2FtZXNjb3JlLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJnQ29udGFpbmVyKTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXI6IDJweCBibGFjayBzb2xpZDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWFyZ2luLWxlZnQ6IDRweDtcbiAgbWFyZ2luLXJpZ2h0OiA0cHg7XG4gIGxpbmUtaGVpZ2h0OiB2YXIoLS1nc1RleHRTaXplKTtcbiAgd29yZC1icmVhazoga2VlcC1hbGw7XG4gIHZlcnRpY2FsLWFsaWduOiBib3R0b207XG59XG5cbi5zY29yZS1mb250IHtcbiAgZm9udC1mYW1pbHk6IFwiRmlndXJpbmVTeW1ib2xUMVwiO1xuICBsZXR0ZXItc3BhY2luZzogNHB4O1xuICBtYXJnaW4tbGVmdDogMnB4O1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgbGluZS1oZWlnaHQ6IHZhcigtLWdzVGV4dFNpemUpO1xufVxuXG4uZ3MtbWVudSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIHRvcDogMHB4O1xuICBsZWZ0OiAwcHg7XG4gIHJpZ2h0OiAwcHg7XG4gIGJvdHRvbTogMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uc2NvcmUtbW92ZSB7XG4gIG1hcmdpbi1sZWZ0OiA4cHg7XG4gIGxpbmUtaGVpZ2h0OiB2YXIoLS1nc1RleHRTaXplKTtcbn1cblxuLnNjb3JlLXBseSB7XG4gIGZvbnQtZmFtaWx5OiBcIkZpZ3VyaW5lU3ltYm9sVDFcIjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi1yaWdodDogNnB4O1xufVxuXG4ucmVzaXplLWhhbmRsZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY2xpcDogdHJ1ZTtcbiAgbGVmdDogLTRweDtcbiAgdG9wOiBjYWxjKDUwJSAtIDNlbSk7XG4gIHdpZHRoOiAzNnB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJvcmRlcjogc29saWQgZ3JleSAzcHg7XG4gIGhlaWdodDogNmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDBhO1xuICBjdXJzb3I6IGdyYWI7XG59XG5cbi5pbnB1dC1ib3gge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAycHg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDMwMHB4O1xuICBib3JkZXI6IHNvbGlkIGJsYWNrIDRweDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GamescoreUxComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-game-score-ux',
                templateUrl: './game-score.ux.html',
                styleUrls: ['./game-score.ux.scss'],
            }]
    }], function () { return [{ type: _services_olga_service__WEBPACK_IMPORTED_MODULE_5__["OlgaService"] }, { type: _services_game_service__WEBPACK_IMPORTED_MODULE_1__["GameService"] }, { type: _services_layout_service__WEBPACK_IMPORTED_MODULE_6__["LayoutService"] }]; }, { scoreFontFamily: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], scoreFontSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], scoreItemMenu: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_menu_game_score_item_menu_game_score_item_component__WEBPACK_IMPORTED_MODULE_2__["MenuGameScoreItemComponent"]]
        }], resizeHandle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['resizeHandle']
        }], pgnData: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['pgnData']
        }], container: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['gamescore-container']
        }], gameScoreFontSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], UUID: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], resizing: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], scoreWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], viewType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], currentItem: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], scoreItems: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"],
            args: [_game_score_item_game_score_item_component__WEBPACK_IMPORTED_MODULE_3__["GameScoreItemComponent"]]
        }], currentScoreItem: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/game-score/menu-game-score-item/menu-game-score-item.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/game-score/menu-game-score-item/menu-game-score-item.component.ts ***!
  \***********************************************************************************/
/*! exports provided: MenuGameScoreItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuGameScoreItemComponent", function() { return MenuGameScoreItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");





class MenuGameScoreItemComponent {
    constructor() {
        this.data = null;
        this.menuTitle = 'Menu Title';
        this.open = false;
        this.matMenuTrigger = null;
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        var _a;
        (_a = this.matMenuTrigger) === null || _a === void 0 ? void 0 : _a.menuClosed.subscribe(() => {
            //console.log('Menu closed');
        });
    }
    ignoreEvent(event) {
        //console.log('Ignoring ' + event);
        event.preventDefault();
        event.stopPropagation();
    }
    openAt(item) {
        this.open = true;
    }
}
MenuGameScoreItemComponent.ɵfac = function MenuGameScoreItemComponent_Factory(t) { return new (t || MenuGameScoreItemComponent)(); };
MenuGameScoreItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenuGameScoreItemComponent, selectors: [["app-menu-game-score-item"]], viewQuery: function MenuGameScoreItemComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_menu__WEBPACK_IMPORTED_MODULE_1__["MatMenuTrigger"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.matMenuTrigger = _t.first);
    } }, inputs: { data: "data", menuTitle: "menuTitle" }, decls: 14, vars: 1, consts: [[1, "gs-context-menu-container", 3, "click"], [1, "gs-context-menu-overaly"], ["mat-button", "", 1, "context-menu-button"]], template: function MenuGameScoreItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuGameScoreItemComponent_Template_mat_card_click_0_listener() { return ctx.open = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-content", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Add");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Remove");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Keep");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Restore");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.menuTitle);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardContent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"]], styles: ["@font-face {\n  font-family: \"Caveat\";\n  src: url('Caveat-Bold.woff2') format(\"woff2\"), url('Caveat-Bold.woff') format(\"woff\");\n  font-weight: bold;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"Caveat\";\n  src: url('Caveat-Regular.woff2') format(\"woff2\"), url('Caveat-Regular.woff') format(\"woff\");\n  font-weight: 600;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"FigurineSymbolT1\";\n  src: url('FigurineSymbolT1Bold.woff2') format(\"woff2\"), url('FigurineSymbolT1Bold.woff') format(\"woff\");\n  font-weight: bold;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"FigurineSymbolT1\";\n  src: url('FigurineSymbolT1.woff2') format(\"woff2\"), url('FigurineSymbolT1.woff') format(\"woff\");\n  font-weight: 600;\n  font-style: normal;\n  font-display: swap;\n}\n\n\n\n\n\n\n\n[_ngcontent-%COMP%]:root {\n  --bg-color: #f2f3f7;\n  --fg-color: #383a41;\n  --red: #e43030;\n  --green: #19a187;\n  --blue: #367bf0;\n  --dark-blue: #265ab1;\n  --maroon: #b8174c;\n  --purple: #8c42ab;\n}\n[_ngcontent-%COMP%]::-moz-focus-inner, [_ngcontent-%COMP%]:-moz-focusring {\n  border: 0;\n  color: transparent;\n  text-shadow: 0 0 0 #383a41;\n}\n[_ngcontent-%COMP%]::selection, [_ngcontent-%COMP%]::-moz-selection {\n  color: white;\n  background: black;\n}\n*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  outline: none;\n  user-select: none;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  -webkit-appearance: none;\n  -webkit-tap-highlight-color: transparent !important;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0) !important;\n  -webkit-touch-callout: none;\n  cursor: default;\n  letter-spacing: 0;\n}\n.selectable[_ngcontent-%COMP%], .selectable[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  cursor: auto;\n  user-select: text;\n  -webkit-touch-callout: text;\n  -webkit-user-select: text;\n  -khtml-user-select: text;\n  -moz-user-select: text;\n  -ms-user-select: text;\n}\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  background-color: #f2f3f7;\n  color: #383a41;\n  margin: 0;\n  padding: 0;\n  font-size: 10pt;\n  height: 100%;\n  overflow: auto;\n}\n.with-shadow[_ngcontent-%COMP%], .outset[_ngcontent-%COMP%], button[_ngcontent-%COMP%], .checktext[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]    + span[_ngcontent-%COMP%], .blue-button[_ngcontent-%COMP%], .checktext[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + span[_ngcontent-%COMP%], button.blue-button[_ngcontent-%COMP%], .red-button.blue-button[_ngcontent-%COMP%], .green-button.blue-button[_ngcontent-%COMP%], .green-button[_ngcontent-%COMP%], button.green-button[_ngcontent-%COMP%], .red-button.green-button[_ngcontent-%COMP%], .red-button[_ngcontent-%COMP%], button.red-button[_ngcontent-%COMP%], input[type=button][_ngcontent-%COMP%], input[type=submit][_ngcontent-%COMP%], input[type=reset][_ngcontent-%COMP%], select[_ngcontent-%COMP%], input[type=text][_ngcontent-%COMP%]:not(select):focus, input[type=search][_ngcontent-%COMP%]:not(select):focus, input[type=tel][_ngcontent-%COMP%]:not(select):focus, input[type=url][_ngcontent-%COMP%]:not(select):focus, input[type=email][_ngcontent-%COMP%]:not(select):focus, input[type=password][_ngcontent-%COMP%]:not(select):focus, input[type=date][_ngcontent-%COMP%]:not(select):focus, input[type=month][_ngcontent-%COMP%]:not(select):focus, input[type=week][_ngcontent-%COMP%]:not(select):focus, input[type=time][_ngcontent-%COMP%]:not(select):focus, input[type=number][_ngcontent-%COMP%]:not(select):focus, input[type=color][_ngcontent-%COMP%]:not(select):focus, select[_ngcontent-%COMP%]:not(select):focus, textarea[_ngcontent-%COMP%]:not(select):focus, .paper[_ngcontent-%COMP%] {\n  box-shadow: 6px 6px 10px rgba(0, 0, 0, 0.1), -6px -6px 10px white;\n}\n.outset[_ngcontent-%COMP%], button[_ngcontent-%COMP%], .checktext[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]    + span[_ngcontent-%COMP%], .blue-button[_ngcontent-%COMP%], .checktext[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + span[_ngcontent-%COMP%], button.blue-button[_ngcontent-%COMP%], .red-button.blue-button[_ngcontent-%COMP%], .green-button.blue-button[_ngcontent-%COMP%], .green-button[_ngcontent-%COMP%], button.green-button[_ngcontent-%COMP%], .red-button.green-button[_ngcontent-%COMP%], .red-button[_ngcontent-%COMP%], button.red-button[_ngcontent-%COMP%], input[type=button][_ngcontent-%COMP%], input[type=submit][_ngcontent-%COMP%], input[type=reset][_ngcontent-%COMP%], select[_ngcontent-%COMP%], input[type=text][_ngcontent-%COMP%]:not(select):focus, input[type=search][_ngcontent-%COMP%]:not(select):focus, input[type=tel][_ngcontent-%COMP%]:not(select):focus, input[type=url][_ngcontent-%COMP%]:not(select):focus, input[type=email][_ngcontent-%COMP%]:not(select):focus, input[type=password][_ngcontent-%COMP%]:not(select):focus, input[type=date][_ngcontent-%COMP%]:not(select):focus, input[type=month][_ngcontent-%COMP%]:not(select):focus, input[type=week][_ngcontent-%COMP%]:not(select):focus, input[type=time][_ngcontent-%COMP%]:not(select):focus, input[type=number][_ngcontent-%COMP%]:not(select):focus, input[type=color][_ngcontent-%COMP%]:not(select):focus, select[_ngcontent-%COMP%]:not(select):focus, textarea[_ngcontent-%COMP%]:not(select):focus, .paper[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  background: #f2f3f7;\n}\n.inset[_ngcontent-%COMP%], hr[_ngcontent-%COMP%], button.active[_ngcontent-%COMP%], .checktext[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]    + span.active[_ngcontent-%COMP%], .active.blue-button[_ngcontent-%COMP%], .active.green-button[_ngcontent-%COMP%], .active.red-button[_ngcontent-%COMP%], button[_ngcontent-%COMP%]:active, .checktext[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]    + span[_ngcontent-%COMP%]:active, .blue-button[_ngcontent-%COMP%]:active, .green-button[_ngcontent-%COMP%]:active, .red-button[_ngcontent-%COMP%]:active, input[type=button].active[_ngcontent-%COMP%], input[type=button][_ngcontent-%COMP%]:active, input[type=submit].active[_ngcontent-%COMP%], input[type=submit][_ngcontent-%COMP%]:active, input[type=reset].active[_ngcontent-%COMP%], input[type=reset][_ngcontent-%COMP%]:active, input[type=text][_ngcontent-%COMP%]:not(select), input[type=search][_ngcontent-%COMP%]:not(select), input[type=tel][_ngcontent-%COMP%]:not(select), input[type=url][_ngcontent-%COMP%]:not(select), input[type=email][_ngcontent-%COMP%]:not(select), input[type=password][_ngcontent-%COMP%]:not(select), input[type=date][_ngcontent-%COMP%]:not(select), input[type=month][_ngcontent-%COMP%]:not(select), input[type=week][_ngcontent-%COMP%]:not(select), input[type=time][_ngcontent-%COMP%]:not(select), input[type=number][_ngcontent-%COMP%]:not(select), input[type=color][_ngcontent-%COMP%]:not(select), select[_ngcontent-%COMP%]:not(select), textarea[_ngcontent-%COMP%]:not(select) {\n  border-radius: 10px;\n  box-shadow: 0 0 transparent, 0 0 transparent, inset 3px 3px 5px rgba(0, 0, 0, 0.1), inset -3px -3px 5px white;\n  background: #f8f9fb;\n}\n.paper[_ngcontent-%COMP%] {\n  padding: 10px 20px 20px;\n  margin-top: 20px;\n  min-height: 100px;\n  font-size: 1.2em;\n  background: #f2f3f7;\n}\nsection[_ngcontent-%COMP%], article[_ngcontent-%COMP%], .section[_ngcontent-%COMP%], .article[_ngcontent-%COMP%], .paper[_ngcontent-%COMP%] {\n  line-height: 2em;\n  word-wrap: break-word;\n  word-break: normal;\n  line-height: 2em;\n}\ninput[type=text][_ngcontent-%COMP%], input[type=search][_ngcontent-%COMP%], input[type=tel][_ngcontent-%COMP%], input[type=url][_ngcontent-%COMP%], input[type=email][_ngcontent-%COMP%], input[type=password][_ngcontent-%COMP%], input[type=date][_ngcontent-%COMP%], input[type=month][_ngcontent-%COMP%], input[type=week][_ngcontent-%COMP%], input[type=time][_ngcontent-%COMP%], input[type=number][_ngcontent-%COMP%], input[type=color][_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  border: 0;\n  background: #f2f3f7;\n  color: #383a41;\n  font-weight: normal;\n  padding: 0 1.25em;\n  line-height: 1.25em;\n  height: 3.5em;\n  margin: 10px 0;\n  font-size: 1.1rem;\n  cursor: text;\n  user-select: text;\n  -webkit-touch-callout: text;\n  -webkit-user-select: text;\n  -khtml-user-select: text;\n  -moz-user-select: text;\n  -ms-user-select: text;\n  transition: box-shadow 0.2s;\n}\ntextarea[_ngcontent-%COMP%] {\n  height: 350px;\n  padding: 1.25em;\n}\nselect[_ngcontent-%COMP%] {\n  cursor: pointer;\n  background: url(data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAxOSAxOSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyB0cmFuc2Zvcm09Im1hdHJpeCguMDM0IDAgMCAuMDM0IC02LjggMS43ZS01KSIgc3R5bGU9ImZpbGw6IzdiN2U4YyI+PHBhdGggZD0ibTQ4MCAzNDQtMjExLTIxMmMtMTYtMTYtNDEtMTYtNTcgMC0xNiAxNi0xNiA0MiAwIDU3bDIzOCAyMzljOC40IDguNSAyMCAxMiAzMSAxMiAxMSAwLjU2IDIyLTMuMiAzMS0xMmwyMzgtMjM5YzE2LTE2IDE2LTQyIDAtNTdzLTQxLTE2LTU3IDB6IiBzdHlsZT0iZmlsbDojN2I3ZThjIi8+PC9nPjwvc3ZnPgo=) no-repeat right 1em center;\n  background-size: 1.2em;\n  padding-right: 3em;\n}\ninput[_ngcontent-%COMP%]::placeholder, textarea[_ngcontent-%COMP%]::placeholder {\n  opacity: 1;\n  transition: opacity 0.2s;\n  color: inherit;\n}\ninput[_ngcontent-%COMP%]:focus::placeholder, textarea[_ngcontent-%COMP%]:focus::placeholder {\n  opacity: 0.2;\n}\ninput[_ngcontent-%COMP%]:-ms-input-placeholder, textarea[_ngcontent-%COMP%]:-ms-input-placeholder {\n  opacity: 1;\n  -ms-transition: opacity 0.2s;\n  transition: opacity 0.2s;\n  color: inherit;\n}\ninput[_ngcontent-%COMP%]:focus:-ms-input-placeholder, textarea[_ngcontent-%COMP%]:focus:-ms-input-placeholder {\n  opacity: 0.2;\n}\ninput[type=search][_ngcontent-%COMP%]::-webkit-search-decoration, input[type=search][_ngcontent-%COMP%]::-webkit-search-cancel-button, input[type=search][_ngcontent-%COMP%]::-webkit-search-results-button, input[type=search][_ngcontent-%COMP%]::-webkit-search-results-decoration {\n  display: none;\n}\nbutton[_ngcontent-%COMP%], .checktext[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]    + span[_ngcontent-%COMP%], .blue-button[_ngcontent-%COMP%], .checktext[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + span[_ngcontent-%COMP%], button.blue-button[_ngcontent-%COMP%], .red-button.blue-button[_ngcontent-%COMP%], .green-button.blue-button[_ngcontent-%COMP%], .green-button[_ngcontent-%COMP%], button.green-button[_ngcontent-%COMP%], .red-button.green-button[_ngcontent-%COMP%], .red-button[_ngcontent-%COMP%], button.red-button[_ngcontent-%COMP%], input[type=button][_ngcontent-%COMP%], input[type=submit][_ngcontent-%COMP%], input[type=reset][_ngcontent-%COMP%] {\n  border: 0;\n  text-transform: capitalize;\n  padding: 10px 0;\n  width: 8em;\n  text-align: center;\n  cursor: pointer;\n  color: inherit;\n  font-size: 1.1rem;\n  transition-property: background-color, box-shadow;\n  transition-delay: 0.2s;\n  transition-duration: 0.2s;\n}\nbutton.active[_ngcontent-%COMP%], .checktext[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]    + span.active[_ngcontent-%COMP%], .active.blue-button[_ngcontent-%COMP%], .active.green-button[_ngcontent-%COMP%], .active.red-button[_ngcontent-%COMP%], button[_ngcontent-%COMP%]:active, .checktext[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]    + span[_ngcontent-%COMP%]:active, .blue-button[_ngcontent-%COMP%]:active, .green-button[_ngcontent-%COMP%]:active, .red-button[_ngcontent-%COMP%]:active, input[type=button].active[_ngcontent-%COMP%], input[type=button][_ngcontent-%COMP%]:active, input[type=submit].active[_ngcontent-%COMP%], input[type=submit][_ngcontent-%COMP%]:active, input[type=reset].active[_ngcontent-%COMP%], input[type=reset][_ngcontent-%COMP%]:active {\n  transition-delay: 0s;\n  transition-duration: 0.1s;\n}\n.red-button[_ngcontent-%COMP%], button.red-button[_ngcontent-%COMP%], .checktext[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]    + span.red-button[_ngcontent-%COMP%], .red-button.blue-button[_ngcontent-%COMP%], .red-button.green-button[_ngcontent-%COMP%], input[type=button].red-button[_ngcontent-%COMP%], input[type=submit].red-button[_ngcontent-%COMP%], input[type=reset].red-button[_ngcontent-%COMP%] {\n  color: white;\n  font-weight: bold;\n  text-shadow: 0 0.1em 0.1em rgba(0, 0, 0, 0.7);\n  background: linear-gradient(to top, #e43030 30%, #e84b4b 80%);\n  box-shadow: 0 0 0.5em rgba(228, 48, 48, 0.7), 0 0 transparent, inset 0 -5px 0 rgba(0, 0, 0, 0.05), inset 0 2px 0 rgba(255, 255, 255, 0.2);\n  border-radius: 6px 6px 8px 8px;\n  transition-property: box-shadow, border-radius;\n}\n.red-button.active[_ngcontent-%COMP%], .red-button[_ngcontent-%COMP%]:active, button.red-button.active[_ngcontent-%COMP%], button.red-button[_ngcontent-%COMP%]:active, input[type=button].red-button.active[_ngcontent-%COMP%], input[type=button].red-button[_ngcontent-%COMP%]:active, input[type=submit].red-button.active[_ngcontent-%COMP%], input[type=submit].red-button[_ngcontent-%COMP%]:active, input[type=reset].red-button.active[_ngcontent-%COMP%], input[type=reset].red-button[_ngcontent-%COMP%]:active {\n  background: linear-gradient(to top, #e43030 30%, #e84b4b 80%);\n  border-radius: 6px;\n  box-shadow: 0 0 transparent, 0 0 transparent, inset 0 2px 5px 2px rgba(0, 0, 0, 0.2);\n}\n.green-button[_ngcontent-%COMP%], button.green-button[_ngcontent-%COMP%], .checktext[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]    + span.green-button[_ngcontent-%COMP%], .green-button.blue-button[_ngcontent-%COMP%], .green-button.red-button[_ngcontent-%COMP%], input[type=button].green-button[_ngcontent-%COMP%], input[type=submit].green-button[_ngcontent-%COMP%], input[type=reset].green-button[_ngcontent-%COMP%] {\n  color: white;\n  font-weight: bold;\n  text-shadow: 0 0.1em 0.1em rgba(0, 0, 0, 0.7);\n  background: linear-gradient(to top, #19a187 30%, #1dbb9d 80%);\n  box-shadow: 0 0 0.5em rgba(25, 161, 135, 0.7), 0 0 transparent, inset 0 -5px 0 rgba(0, 0, 0, 0.05), inset 0 2px 0 rgba(255, 255, 255, 0.2);\n  border-radius: 6px 6px 8px 8px;\n  transition-property: box-shadow, border-radius;\n}\n.green-button.active[_ngcontent-%COMP%], .green-button[_ngcontent-%COMP%]:active, button.green-button.active[_ngcontent-%COMP%], button.green-button[_ngcontent-%COMP%]:active, input[type=button].green-button.active[_ngcontent-%COMP%], input[type=button].green-button[_ngcontent-%COMP%]:active, input[type=submit].green-button.active[_ngcontent-%COMP%], input[type=submit].green-button[_ngcontent-%COMP%]:active, input[type=reset].green-button.active[_ngcontent-%COMP%], input[type=reset].green-button[_ngcontent-%COMP%]:active {\n  background: linear-gradient(to top, #19a187 30%, #1dbb9d 80%);\n  border-radius: 6px;\n  box-shadow: 0 0 transparent, 0 0 transparent, inset 0 2px 5px 2px rgba(0, 0, 0, 0.2);\n}\n.blue-button[_ngcontent-%COMP%], .checktext[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + span[_ngcontent-%COMP%], button.blue-button[_ngcontent-%COMP%], .checktext[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]    + span.blue-button[_ngcontent-%COMP%], .blue-button.red-button[_ngcontent-%COMP%], .blue-button.green-button[_ngcontent-%COMP%], input[type=button].blue-button[_ngcontent-%COMP%], input[type=submit].blue-button[_ngcontent-%COMP%], input[type=reset].blue-button[_ngcontent-%COMP%] {\n  color: white;\n  font-weight: bold;\n  text-shadow: 0 0.1em 0.1em rgba(0, 0, 0, 0.7);\n  background: linear-gradient(to top, #367bf0 30%, #528ef2 80%);\n  box-shadow: 0 0 0.5em rgba(54, 123, 240, 0.7), 0 0 transparent, inset 0 -5px 0 rgba(0, 0, 0, 0.05), inset 0 2px 0 rgba(255, 255, 255, 0.2);\n  border-radius: 6px 6px 8px 8px;\n  transition-property: box-shadow, border-radius;\n}\n.blue-button.active[_ngcontent-%COMP%], .checktext[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + span.active[_ngcontent-%COMP%], .blue-button[_ngcontent-%COMP%]:active, .checktext[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + span[_ngcontent-%COMP%]:active, button.blue-button.active[_ngcontent-%COMP%], button.blue-button[_ngcontent-%COMP%]:active, input[type=button].blue-button.active[_ngcontent-%COMP%], input[type=button].blue-button[_ngcontent-%COMP%]:active, input[type=submit].blue-button.active[_ngcontent-%COMP%], input[type=submit].blue-button[_ngcontent-%COMP%]:active, input[type=reset].blue-button.active[_ngcontent-%COMP%], input[type=reset].blue-button[_ngcontent-%COMP%]:active {\n  background: linear-gradient(to top, #367bf0 30%, #528ef2 80%);\n  border-radius: 6px;\n  box-shadow: 0 0 transparent, 0 0 transparent, inset 0 2px 5px 2px rgba(0, 0, 0, 0.2);\n}\nlabel[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0.56em 0;\n}\nlabel[_ngcontent-%COMP%], label[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\na[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:link, a[_ngcontent-%COMP%]:visited, a[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%]:active {\n  font-weight: bold;\n  color: #367bf0;\n  font-weight: bold;\n  text-decoration: none;\n}\na[_ngcontent-%COMP%], a[_ngcontent-%COMP%]   *[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:link, a[_ngcontent-%COMP%]:link   *[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:visited, a[_ngcontent-%COMP%]:visited   *[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%]:active, a[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%]:active   *[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\n  line-height: 1.5em;\n}\nh1[_ngcontent-%COMP%] {\n  font-size: 4em;\n  font-weight: lighter;\n  margin: 0.7em 0;\n}\nh2[_ngcontent-%COMP%] {\n  font-size: 3em;\n  font-weight: lighter;\n  margin: 0.8em 0;\n}\nh3[_ngcontent-%COMP%] {\n  font-size: 2.5em;\n  font-weight: lighter;\n  margin: 0.9em 0;\n}\nh4[_ngcontent-%COMP%] {\n  font-size: 2em;\n  font-weight: lighter;\n  margin: 1em 0;\n}\nh5[_ngcontent-%COMP%] {\n  margin: 0.5em 0;\n  font-size: 1.2em;\n  font-weight: normal;\n}\nh6[_ngcontent-%COMP%] {\n  margin: 1em 0 1em 1.4em;\n  font-size: 1em;\n  font-weight: bold;\n}\ninput[type=checkbox][_ngcontent-%COMP%], input[type=radio][_ngcontent-%COMP%] {\n  font-size: 1em;\n  cursor: pointer;\n  height: 1.2em;\n  width: 1.2em;\n  margin: 0 0.3em;\n  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.2), -2px -2px 3px white, inset 1px 1px 2px rgba(0, 0, 0, 0.2), inset -1px -1px 2px white;\n  border: 0.15em solid #f2f3f7;\n  vertical-align: text-bottom;\n  transition-property: background, box-shadow;\n  transition-duration: 0.2s;\n}\ninput[type=checkbox][_ngcontent-%COMP%]:active, input[type=radio][_ngcontent-%COMP%]:active {\n  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.2), -2px -2px 3px white, inset 1px 1px 2px rgba(0, 0, 0, 0.2), inset -1px -1px 2px white, inset 0 0.1em 0.25em rgba(0, 0, 0, 0.2);\n}\ninput[type=checkbox][_ngcontent-%COMP%]:checked, input[type=radio][_ngcontent-%COMP%]:checked {\n  border-width: 0.1em;\n  border-color: #115fe2;\n  background-color: #367bf0;\n}\ninput[type=checkbox][_ngcontent-%COMP%] {\n  border-radius: 25%;\n}\ninput[type=checkbox][_ngcontent-%COMP%]:checked {\n  box-shadow: 0 0 0.5em rgba(54, 123, 240, 0.7), inset 0 -0.1em 0 rgba(0, 0, 0, 0.2), inset 0 0.1em 0.1em rgba(255, 255, 255, 0.2);\n}\ninput[type=radio][_ngcontent-%COMP%] {\n  border-radius: 100%;\n}\ninput[type=radio][_ngcontent-%COMP%]:checked {\n  box-shadow: 0 0 0.5em rgba(54, 123, 240, 0.7);\n  box-shadow: 0 0 0.5em rgba(54, 123, 240, 0.7), inset 0 0.12em 0.1em rgba(255, 255, 255, 0.25);\n  border-bottom-width: 0.15em;\n}\n.checktext[_ngcontent-%COMP%] {\n  width: auto;\n  margin: 0.5em;\n}\n.checktext[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  display: none;\n}\n.checktext[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]    + span[_ngcontent-%COMP%] {\n  font-weight: bold;\n  padding: 1em;\n  transition-delay: 0s;\n}\n.checktext[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + span[_ngcontent-%COMP%] {\n  padding: 1em;\n}\n.switch[_ngcontent-%COMP%] {\n  height: 2rem;\n  width: 8rem;\n  padding: 0;\n  position: relative;\n}\n.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  display: none;\n}\n.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]    + div[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  border-radius: 999px;\n  background: transparent;\n  transition-property: box-shadow, background-color;\n  transition-duration: 0.2s;\n  transition-delay: 0.2s;\n  box-shadow: 3px 3px 2px -2px rgba(0, 0, 0, 0.1), inset 2px 2px 2px 1px rgba(0, 0, 0, 0.1), inset -2px -2px 1px white;\n}\n.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]    + div[_ngcontent-%COMP%]::before {\n  content: \"\";\n  display: block;\n  height: calc(2rem + 4px);\n  width: calc(2rem + 4px);\n  border-radius: 100%;\n  border: solid white 3px;\n  background: #367bf0;\n  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2), inset 0 -1px 3px rgba(0, 0, 0, 0.1);\n  transform: translate(0, -6px);\n  transition: transform 0.2s;\n}\n.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + div[_ngcontent-%COMP%] {\n  background: #367bf0;\n  box-shadow: 0 0 0.5em rgba(54, 123, 240, 0.7), inset 0 2px 2px 2px rgba(0, 0, 0, 0.3), inset 0 0 transparent;\n}\n.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + div[_ngcontent-%COMP%]::before {\n  transform: translate(6rem, -6px);\n}\nhr[_ngcontent-%COMP%] {\n  width: 72%;\n  height: 8px;\n  float: right;\n  border: 0;\n}\ncode[_ngcontent-%COMP%], pre[_ngcontent-%COMP%] {\n  padding: 0.5em 1em;\n  border-radius: 4px;\n  overflow: auto;\n  box-shadow: 0 5px 30px 0 rgba(0, 0, 0, 0.05);\n}\ncode[_ngcontent-%COMP%] {\n  background: #e6e6e6;\n}\npre[_ngcontent-%COMP%] {\n  background: white;\n  margin: 4em 0;\n}\ncode[_ngcontent-%COMP%], code[_ngcontent-%COMP%]   *[_ngcontent-%COMP%], pre[_ngcontent-%COMP%], pre[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  line-height: 2em;\n  cursor: auto;\n  user-select: text;\n  -webkit-touch-callout: text;\n  -webkit-user-select: text;\n  -khtml-user-select: text;\n  -moz-user-select: text;\n  -ms-user-select: text;\n}\nblockquote[_ngcontent-%COMP%] {\n  background-color: white;\n  padding: 0.5em 1em;\n  border-radius: 4px;\n  box-shadow: 0 5px 30px 0 rgba(0, 0, 0, 0.05);\n  border-left: 6px solid #367bf0;\n}\n.gs-context-menu-container[_ngcontent-%COMP%] {\n  background-color: var(--bgContext);\n  border-radius: 3%;\n  border: var(--borderContext);\n  color: var(--textColorContext);\n  position: absolute;\n  display: flexbox;\n  width: 40%;\n  max-width: 160px;\n  min-width: 130px;\n  min-height: 200px;\n  top: 10%;\n  left: 10%;\n  right: 10%;\n  bottom: 15%;\n}\n.gs-context-menu-overaly[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  left: 0px;\n  top: 0px;\n  text-align: center;\n}\n.gs-context-menu-overaly[_ngcontent-%COMP%]   .context-menu-button[_ngcontent-%COMP%] {\n  background: var(--item-bg);\n  border: var(--borderContext);\n  color: var(--textColorContext);\n  margin: 8px;\n  height: 10%;\n  top: 15%;\n  text-align: center;\n  line-height: 10%;\n}\nmat-card-title[_ngcontent-%COMP%] {\n  color: var(--textColorContext);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMuc2NzcyIsInNyYy9hc3NldHMvc2Nzcy9tb2R1bGVzL19mb250cy5zY3NzIiwic3JjL2FwcC9nYW1lLXNjb3JlL21lbnUtZ2FtZS1zY29yZS1pdGVtL21lbnUtZ2FtZS1zY29yZS1pdGVtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhFQUFBO0FDQUE7RUFDSSxxQkFBQTtFQUNBLHFGQUFBO0VBRUEsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDQ0o7QURFQTtFQUNJLHFCQUFBO0VBQ0EsMkZBQUE7RUFFQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNESjtBRElBO0VBQ0UsK0JBQUE7RUFDQSx1R0FBQTtFQUVBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0hGO0FETUE7RUFDRSwrQkFBQTtFQUNBLCtGQUFBO0VBRUEsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDTEY7QUZjQSwrRUFBQTtBQU1BLCtFQUFBO0FBTUEsK0VBQUE7QUFNQSwrRUFBQTtBQUtBLGdGQUFBO0FBS0EsK0VBQUE7QUFLQSx5RUFBQTtBQWtCQTtFQUNFLG1CQUFBO0VBQ0EsbUJBQUE7RUFFQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FFekRGO0FGNERBOztFQUVFLFNBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0FFekRGO0FGNERBOztFQUVFLFlBQUE7RUFDQSxpQkFBQTtBRXpERjtBRjREQTtFQUNFLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsMkJBQUE7RUFDQSx5QkFBQTtFQUNBLHdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLHdCQUFBO0VBQ0EsbURBQUE7RUFDQSx3REFBQTtFQUNBLDJCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FFekRGO0FGNERBOztFQUVFLFlBQUE7RUFDQSxpQkFBQTtFQUNBLDJCQUFBO0VBQ0EseUJBQUE7RUFDQSx3QkFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7QUV6REY7QUY0REE7O0VBRUUseUJBNURTO0VBNkRULGNBNURTO0VBNkRULFNBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FFekRGO0FGNERBOzs7Ozs7Ozs7Ozs7Ozs7OztFQUNFLGlFQUFBO0FFekNGO0FGNENBOzs7Ozs7Ozs7Ozs7Ozs7OztFQUdFLG1CQUFBO0VBQ0EsbUJBN0VTO0FFa0RYO0FGOEJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQUNFLG1CQUFBO0VBQ0EsNkdBQUE7RUFFQSxtQkFBQTtBRVRGO0FGWUE7RUFFRSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQTdGUztBRW1GWDtBRmFBOzs7OztFQUtFLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FFVkY7QUZhQTs7Ozs7Ozs7Ozs7Ozs7RUFjRSxTQUFBO0VBQ0EsbUJBMUhTO0VBMkhULGNBMUhTO0VBMkhULG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSwyQkFBQTtFQUNBLHlCQUFBO0VBQ0Esd0JBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsMkJBQUE7QUVWRjtBRnFCQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0FFbkJGO0FGc0JBO0VBR0UsZUFBQTtFQUNBLDBmQUFBO0VBRUEsc0JBQUE7RUFDQSxrQkFBQTtBRXRCRjtBRnlCQTs7RUFFRSxVQUFBO0VBQ0Esd0JBQUE7RUFDQSxjQUFBO0FFdEJGO0FGeUJBOztFQUVFLFlBQUE7QUV0QkY7QUZ5QkE7O0VBRUUsVUFBQTtFQUNBLDRCQUFBO0VBQUEsd0JBQUE7RUFDQSxjQUFBO0FFdEJGO0FGeUJBOztFQUVFLFlBQUE7QUV0QkY7QUZ5QkE7Ozs7RUFJRSxhQUFBO0FFdEJGO0FGeUJBOzs7O0VBTUUsU0FBQTtFQUNBLDBCQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxpREFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7QUV4QkY7QUYwQkU7Ozs7Ozs7RUFJRSxvQkFBQTtFQUNBLHlCQUFBO0FFckJKO0FGeUJhOzs7O0VBTVAsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsNkNBQUE7RUFDQSw2REFMWTtFQU1aLHlJQUFBO0VBR0EsOEJBQUE7RUFDQSw4Q0FBQTtBRTNCTjtBRjZCTTs7Ozs7OztFQUVFLDZEQWRVO0VBZVYsa0JBQUE7RUFDQSxvRkFBQTtBRXRCUjtBRkVhOzs7O0VBTVAsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsNkNBQUE7RUFDQSw2REFMWTtFQU1aLDBJQUFBO0VBR0EsOEJBQUE7RUFDQSw4Q0FBQTtBRUhOO0FGS007Ozs7Ozs7RUFFRSw2REFkVTtFQWVWLGtCQUFBO0VBQ0Esb0ZBQUE7QUVFUjtBRnRCYTs7OztFQU1QLFlBQUE7RUFDQSxpQkFBQTtFQUNBLDZDQUFBO0VBQ0EsNkRBTFk7RUFNWiwwSUFBQTtFQUdBLDhCQUFBO0VBQ0EsOENBQUE7QUVxQk47QUZuQk07Ozs7Ozs7RUFFRSw2REFkVTtFQWVWLGtCQUFBO0VBQ0Esb0ZBQUE7QUUwQlI7QUZuQkE7RUFNRSxxQkFBQTtFQUNBLGlCQUFBO0FFaUJGO0FGdkJFO0VBRUUsZUFBQTtBRXdCSjtBRmhCRTtFQVNFLGlCQUFBO0VBQ0EsY0EzVkc7RUE0VkgsaUJBQUE7RUFDQSxxQkFBQTtBRVdKO0FGbkJJO0VBRUUsZUFBQTtBRW9CTjtBRlZBOzs7Ozs7RUFNRSxrQkFBQTtBRWFGO0FGVkE7RUFDRSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0FFYUY7QUZWQTtFQUNFLGNBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7QUVhRjtBRlZBO0VBQ0UsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7QUVhRjtBRlZBO0VBQ0UsY0FBQTtFQUNBLG9CQUFBO0VBQ0EsYUFBQTtBRWFGO0FGVkE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBRWFGO0FGVkE7RUFDRSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBRWFGO0FGVkE7O0VBS0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxnSUFQYztFQVFkLDRCQUFBO0VBQ0EsMkJBQUE7RUFDQSwyQ0FBQTtFQUNBLHlCQUFBO0FFVUY7QUZSRTs7RUFDRSx5S0FBQTtBRVdKO0FGUkU7O0VBQ0UsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQXJhRztBRWdiUDtBRlBBO0VBQ0Usa0JBQUE7QUVVRjtBRlJFO0VBQ0UsZ0lBQUE7QUVVSjtBRkxBO0VBQ0UsbUJBQUE7QUVRRjtBRk5FO0VBQ0UsNkNBcldVO0VBc1dWLDZGQUFBO0VBQ0EsMkJBQUE7QUVRSjtBRkpBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7QUVPRjtBRkxFO0VBQ0UsYUFBQTtBRU9KO0FGTEk7RUFHRSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtBRUtOO0FGRkk7RUFHRSxZQUFBO0FFRU47QUZHQTtFQU1FLFlBTFU7RUFNVixXQUxTO0VBTVQsVUFBQTtFQUNBLGtCQUFBO0FFTEY7QUZPRTtFQUNFLGFBQUE7QUVMSjtBRk9JO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUNBLHVCQUFBO0VBQ0EsaURBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0Esb0hBQUE7QUVMTjtBRlNNO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSx3QkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQXBmRDtFQXFmQyw4RUFBQTtFQUVBLDZCQUFBO0VBQ0EsMEJBQUE7QUVSUjtBRllJO0VBQ0UsbUJBN2ZDO0VBOGZELDRHQUFBO0FFVk47QUZhTTtFQUNFLGdDQUFBO0FFWFI7QUZpQkE7RUFFRSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0FFZkY7QUZrQkE7O0VBRUUsa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSw0Q0FBQTtBRWZGO0FGa0JBO0VBQ0UsbUJBQUE7QUVmRjtBRmtCQTtFQUNFLGlCQUFBO0VBQ0EsYUFBQTtBRWZGO0FGb0JFOzs7RUFFRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsMkJBQUE7RUFDQSx5QkFBQTtFQUNBLHdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtBRWhCSjtBRm9CQTtFQUNFLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLDRDQUFBO0VBQ0EsOEJBQUE7QUVqQkY7QUE3aUJBO0VBQ0Usa0NGd0JVO0VFdkJWLGlCQUFBO0VBQ0EsNEJGd0JjO0VFdkJkLDhCRnNCaUI7RUVyQmpCLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQWdqQkY7QUE5aUJBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0Esa0JBQUE7QUFpakJGO0FBaGpCRTtFQUNFLDBCRmFNO0VFWk4sNEJGRVk7RUVEWiw4QkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFrakJKO0FBOWlCQTtFQUNFLDhCRlZpQjtBRTJqQm5CIiwiZmlsZSI6InNyYy9hcHAvZ2FtZS1zY29yZS9tZW51LWdhbWUtc2NvcmUtaXRlbS9tZW51LWdhbWUtc2NvcmUtaXRlbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cblxuQGltcG9ydCBcIi4vYXNzZXRzL3Njc3MvbW9kdWxlcy9fZm9udHMuc2Nzc1wiO1xuJGdhbWVzY29yZS1mYW1pbHk6IFwiRmlndXJpbmVTeW1ib2xUMVwiO1xuJGdhbWVzY29yZS1oaWdobGlnaHQ6ICM1ODU4NThmZjtcbiRnYW1lc2NvcmUtZm9yZWdyb3VuZDogd2hpdGU7XG5cbiRyZWQ6ICNlNDMwMzA7XG4kZ3JlZW46ICMxOWExODc7XG4kbGlnaHQtYmx1ZTogIzAwZmZmZmZmO1xuJGJsdWU6ICMzNjdiZjA7XG4kZGFyay1ibHVlOiAjMjY1YWIxO1xuJG1hcm9vbjogI2I4MTc0YztcbiRwdXJwbGU6ICM4YzQyYWI7XG5cbi8vIE1haW4gT0xHQSBDb2xvciBFbGVtZW50IFZhcmlhYmxlc1xuJHRleHRDb2xvcjogdmFyKC0tdGV4dENvbG9yKTsgLy8gTWFpbiBUZXh0IENvbG9yXG4kdGV4dENvbG9yQXR0ZW50aW9uOiB2YXIoLS10ZXh0Q29sb3JBdHRlbnRpb24pOyAvLyBBdHRlbnRpb24gdGV4dFxuJHRleHRDb2xvclJlbW92ZTogdmFyKC0tdGV4dENvbG9yUmVtb3ZlKTsgLy8gUmVtb3ZlL0RlbGV0ZS9DbG9zZVxuJHRleHRDb2xvckFkZDogdmFyKC0tdGV4dENvbG9yQWRkKTsgLy8gQWRkL0NyZWF0ZS9PcGVuXG4kdGV4dENvbG9yQWN0aXZlOiB2YXIoLS10ZXh0Q29sb3JBY3RpdmUpOyAvLyBBZGQvQ3JlYXRlL09wZW5cbiRiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kKTsgLy8gTWFpbiBiYWNrZ3JvdW5kIENvbG9yXG4kYmdDb250YWluZXI6IHZhcigtLWJnQ29udGFpbmVyKTsgLy8gYmFja2dyb3VuZCBvZiBDb250YWluZXJzXG4kYmdNZW51OiB2YXIoLS1iZ01lbnUpOyAvLyBiYWNrZ3JvdW5kIG9mIE1lbnVzXG4kYmdJdGVtOiB2YXIoLS1iZ0l0ZW0pOyAvLyBiYWNrZ3JvdW5kIG9mIEl0ZW1zXG5cbi8vIENvbnRleHQgTWVudVxuJGJnQ29udGV4dDogdmFyKC0tYmdDb250ZXh0KTsgLy8gYmFja2dyb3VuZCBvZiBDb250ZXh0IE1lbnVcbiR0ZXh0Q29sb3JDb250ZXh0OiB2YXIoLS10ZXh0Q29sb3JDb250ZXh0KTsgLy8gdGV4dCBjb2xvciBDb250ZXh0IE1lbnVcbiRib3JkZXJDb250ZXh0OiB2YXIoLS1ib3JkZXJDb250ZXh0KTsgLy8gYm9yZGVyIENvbnRleHQgTWVudVxuJG92ZXJsYXlDb250ZXh0QmFja2dyb3VuZDogdmFyKFxuICAtLW92ZXJsYXlDb250ZXh0QmFja2dyb3VuZFxuKTsgLy8gQ29udGV4dCBNZW51IE92ZXJsYXkgYmFja2dyb3VuZCBtYWluXG4kb3ZlcmxheUNvbnRleHRCYWNrZ3JvdW5kR3JhZGllbnQ6IHZhcihcbiAgLS1vdmVybGF5Q29udGV4dEJhY2tncm91bmRHcmFkaWVudFxuKTsgLy8gQ29udGV4dCBNZW51IGJhY2tncm91bmQgZ3JhZGllbnRcblxuJGl0ZW06IHZhcigtLWl0ZW0pO1xuJGl0ZW0tY29udHJhc3Q6IHZhcigtLWl0ZW0tY29udHJhc3QpO1xuJGl0ZW0tYmc6IHZhcigtLWl0ZW0tYmcpO1xuXG5cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgQ29udGFpbmVyIFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4kZ3NUZXh0Q29sb3I6IHZhcigtLWdzVGV4dENvbG9yKTsgLy8gVGV4dCBjb2xvciBmb3IgZ2FtZSBzY29yZVxuJGdzQmFja2dyb3VuZDogdmFyKC0tZ3NCYWNrZ3JvdW5kKTsgLy8gYmFja2dyb3VuZCBvZiBDb250YWluZXJzXG4kZ3NCb3JkZXI6IHZhcigtLWdzQm9yZGVyKTsgLy8gYmFja2dyb3VuZCBvZiBNZW51c1xuJGdzVGV4dFNpemU6IHZhcigtLWdzVGV4dFNpemUpOyAvLyBiYWNrZ3JvdW5kIG9mIE1lbnVzXG5cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgQ29udGFpbmVyIFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4kZ3NUZXh0Q29sb3JNVzogdmFyKC0tZ3NUZXh0Q29sb3JNVyk7IC8vIFRleHQgY29sb3IgZm9yIGdhbWUgc2NvcmVcbiRnc0JhY2tncm91bmRNVzogdmFyKC0tZ3NCYWNrZ3JvdW5kTVcpOyAvLyBiYWNrZ3JvdW5kIG9mIENvbnRhaW5lcnNcbiRnc0JvcmRlck1XOiB2YXIoLS1nc0JvcmRlck1XKTsgLy8gYmFja2dyb3VuZCBvZiBNZW51c1xuJGdzVGV4dFNpemVNVzogdmFyKC0tZ3NUZXh0U2l6ZU1XKTsgLy8gYmFja2dyb3VuZCBvZiBNZW51c1xuXG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIENvbnRhaW5lciBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuJGdzVGV4dENvbG9yTUI6IHZhcigtLWdzVGV4dENvbG9yTUIpOyAvLyBUZXh0IGNvbG9yIGZvciBnYW1lIHNjb3JlXG4kZ3NCYWNrZ3JvdW5kTUI6IHZhcigtLWdzQmFja2dyb3VuZE1CKTsgLy8gYmFja2dyb3VuZCBvZiBDb250YWluZXJzXG4kZ3NCb3JkZXJNQjogdmFyKC0tZ3NCb3JkZXJNQik7IC8vIGJhY2tncm91bmQgb2YgTWVudXNcbiRnc1RleHRTaXplTUI6IHZhcigtLWdzVGV4dFNpemVNQik7IC8vIGJhY2tncm91bmQgb2YgTWVudXNcblxuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBIaWdobGlnaHQgVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiRnc1RleHRDb2xvckhHOiB2YXIoLS1nc1RleHRDb2xvckhHKTsgLy8gVGV4dCBjb2xvciBmb3IgaGlnaGxpZ2h0XG4kZ3NCYWNrZ3JvdW5kSEc6IHZhcigtLWdzQmFja2dyb3VuZEhHKTsgLy8gYmFja2dyb3VuZCBmb3IgaGlnaGxpZ2h0XG4kZ3NCb3JkZXJIRzogdmFyKC0tZ3NCb3JkZXJIRyk7IC8vIGJvcmRlciBmb3IgaGlnaGxpZ2h0XG5cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgQW5ub3RhdGlvbiBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuJGdzVGV4dENvbG9yQU46IHZhcigtLWdzVGV4dENvbG9yQU4pOyAvLyBUZXh0IGNvbG9yIGZvciBoaWdobGlnaHRcbiRnc0JhY2tncm91bmRBTjogdmFyKC0tZ3NCYWNrZ3JvdW5kQU4pOyAvLyBiYWNrZ3JvdW5kIGZvciBoaWdobGlnaHRcbiRnc0JvcmRlckFOOiB2YXIoLS1nc0JvcmRlckFOKTsgLy8gYm9yZGVyIGZvciBoaWdobGlnaHRcblxuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBWYXJpYXRpb24gVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiRnc1RleHRDb2xvclZBOiB2YXIoLS1nc1RleHRDb2xvclZBKTsgLy8gVGV4dCBjb2xvciBmb3IgaGlnaGxpZ2h0XG4kZ3NCYWNrZ3JvdW5kVkE6IHZhcigtLWdzQmFja2dyb3VuZFZBKTsgLy8gYmFja2dyb3VuZCBmb3IgaGlnaGxpZ2h0XG4kZ3NCb3JkZXJWQTogdmFyKC0tZ3NCb3JkZXJWQSk7IC8vIGJvcmRlciBmb3IgaGlnaGxpZ2h0XG5cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgUGx5IFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4kZ3NUZXh0Q29sb3JQQzogdmFyKC0tZ3NUZXh0Q29sb3JQQyk7IC8vIFRleHQgY29sb3IgZm9yIGdhbWUgc2NvcmUgcGx5XG4kZ3NCYWNrZ3JvdW5kUEM6IHZhcigtLWdzQmFja2dyb3VuZFBDKTsgLy8gYmFja2dyb3VuZCBmb3IgZ2FtZSBzY29yZSBwbHlcbiRnc0JvcmRlclBDOiB2YXIoLS1nc0JvcmRlclBDKTsgLy8gYm9yZGVyIGZvciBnYW1lIHNjb3JlIHBseVxuXG4vLyBCb2FyZCBjb2xvcnMgcmVmbGVjdGVkIG91dFxuJGJvYXJkQkdEYXJrOiB2YXIoLS1ib2FyZEJHRGFyayk7IC8vIGJvcmRlciBmb3IgaGlnaGxpZ2h0XG5cbi8vIEdlbmVyYWwgc3R1ZmZcbiR0ZXh0LWNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcbiRiZy1vdXRlcjogdmFyKC0tYmctb3V0ZXIpO1xuJGJnLWlubmVyOiB2YXIoLS1iZy1pbm5lcik7XG5cbiRiZy1jb2xvcjogI2YyZjNmNztcbiRmZy1jb2xvcjogIzM4M2E0MTtcblxuJGdsb3ctc2hhZG93OiAwIDAgMC41ZW0gdHJhbnNwYXJlbnRpemUoJGJsdWUsIDAuMyk7XG5cbjpyb290IHtcbiAgLS1iZy1jb2xvcjogI3skYmctY29sb3J9O1xuICAtLWZnLWNvbG9yOiAjeyRmZy1jb2xvcn07XG5cbiAgLS1yZWQ6ICN7JHJlZH07XG4gIC0tZ3JlZW46ICN7JGdyZWVufTtcbiAgLS1ibHVlOiAjeyRibHVlfTtcbiAgLS1kYXJrLWJsdWU6ICN7JGRhcmstYmx1ZX07XG4gIC0tbWFyb29uOiAjeyRtYXJvb259O1xuICAtLXB1cnBsZTogI3skcHVycGxlfTtcbn1cblxuOjotbW96LWZvY3VzLWlubmVyLFxuOi1tb3otZm9jdXNyaW5nIHtcbiAgYm9yZGVyOiAwO1xuICBjb2xvcjogdHJhbnNwYXJlbnQ7XG4gIHRleHQtc2hhZG93OiAwIDAgMCAkZmctY29sb3I7XG59XG5cbjo6c2VsZWN0aW9uLFxuOjotbW96LXNlbGVjdGlvbiB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZDogYmxhY2s7XG59XG5cbioge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBvdXRsaW5lOiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKSAhaW1wb3J0YW50O1xuICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XG4gIGN1cnNvcjogZGVmYXVsdDtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG59XG5cbi5zZWxlY3RhYmxlLFxuLnNlbGVjdGFibGUgKiB7XG4gIGN1cnNvcjogYXV0bztcbiAgdXNlci1zZWxlY3Q6IHRleHQ7XG4gIC13ZWJraXQtdG91Y2gtY2FsbG91dDogdGV4dDtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogdGV4dDtcbiAgLWtodG1sLXVzZXItc2VsZWN0OiB0ZXh0O1xuICAtbW96LXVzZXItc2VsZWN0OiB0ZXh0O1xuICAtbXMtdXNlci1zZWxlY3Q6IHRleHQ7XG59XG5cbmh0bWwsXG5ib2R5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJnLWNvbG9yO1xuICBjb2xvcjogJGZnLWNvbG9yO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGZvbnQtc2l6ZTogMTBwdDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdzogYXV0bztcbn1cblxuLndpdGgtc2hhZG93IHtcbiAgYm94LXNoYWRvdzogNnB4IDZweCAxMHB4IHRyYW5zcGFyZW50aXplKGJsYWNrLCAwLjkpLCAtNnB4IC02cHggMTBweCB3aGl0ZTtcbn1cblxuLm91dHNldCB7XG4gIEBleHRlbmQgLndpdGgtc2hhZG93O1xuXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQ6ICRiZy1jb2xvcjtcbn1cblxuLmluc2V0IHtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm94LXNoYWRvdzogMCAwIHRyYW5zcGFyZW50LCAwIDAgdHJhbnNwYXJlbnQsXG4gICAgaW5zZXQgM3B4IDNweCA1cHggdHJhbnNwYXJlbnRpemUoYmxhY2ssIDAuOSksIGluc2V0IC0zcHggLTNweCA1cHggd2hpdGU7XG4gIGJhY2tncm91bmQ6IGxpZ2h0ZW4oJGJnLWNvbG9yLCAyJSk7XG59XG5cbi5wYXBlciB7XG4gIEBleHRlbmQgLm91dHNldDtcbiAgcGFkZGluZzogMTBweCAyMHB4IDIwcHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIG1pbi1oZWlnaHQ6IDEwMHB4O1xuICBmb250LXNpemU6IDEuMmVtO1xuICBiYWNrZ3JvdW5kOiAkYmctY29sb3I7XG59XG5cbnNlY3Rpb24sXG5hcnRpY2xlLFxuLnNlY3Rpb24sXG4uYXJ0aWNsZSxcbi5wYXBlciB7XG4gIGxpbmUtaGVpZ2h0OiAyZW07XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgd29yZC1icmVhazogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMmVtO1xufVxuXG5pbnB1dFt0eXBlPVwidGV4dFwiXSxcbmlucHV0W3R5cGU9XCJzZWFyY2hcIl0sXG5pbnB1dFt0eXBlPVwidGVsXCJdLFxuaW5wdXRbdHlwZT1cInVybFwiXSxcbmlucHV0W3R5cGU9XCJlbWFpbFwiXSxcbmlucHV0W3R5cGU9XCJwYXNzd29yZFwiXSxcbmlucHV0W3R5cGU9XCJkYXRlXCJdLFxuaW5wdXRbdHlwZT1cIm1vbnRoXCJdLFxuaW5wdXRbdHlwZT1cIndlZWtcIl0sXG5pbnB1dFt0eXBlPVwidGltZVwiXSxcbmlucHV0W3R5cGU9XCJudW1iZXJcIl0sXG5pbnB1dFt0eXBlPVwiY29sb3JcIl0sXG5zZWxlY3QsXG50ZXh0YXJlYSB7XG4gIGJvcmRlcjogMDtcbiAgYmFja2dyb3VuZDogJGJnLWNvbG9yO1xuICBjb2xvcjogJGZnLWNvbG9yO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBwYWRkaW5nOiAwIDEuMjVlbTtcbiAgbGluZS1oZWlnaHQ6IDEuMjVlbTtcbiAgaGVpZ2h0OiAzLjVlbTtcbiAgbWFyZ2luOiAxMHB4IDA7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xuICBjdXJzb3I6IHRleHQ7XG4gIHVzZXItc2VsZWN0OiB0ZXh0O1xuICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IHRleHQ7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IHRleHQ7XG4gIC1raHRtbC11c2VyLXNlbGVjdDogdGV4dDtcbiAgLW1vei11c2VyLXNlbGVjdDogdGV4dDtcbiAgLW1zLXVzZXItc2VsZWN0OiB0ZXh0O1xuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuMnM7XG5cbiAgJjpub3Qoc2VsZWN0KSB7XG4gICAgQGV4dGVuZCAuaW5zZXQ7XG5cbiAgICAmOmZvY3VzIHtcbiAgICAgIEBleHRlbmQgLm91dHNldDtcbiAgICB9XG4gIH1cbn1cblxudGV4dGFyZWEge1xuICBoZWlnaHQ6IDM1MHB4O1xuICBwYWRkaW5nOiAxLjI1ZW07XG59XG5cbnNlbGVjdCB7XG4gIEBleHRlbmQgLm91dHNldDtcblxuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQ6IHVybChkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUIyWlhKemFXOXVQU0l4TGpFaUlIWnBaWGRDYjNnOUlqQWdNQ0F4T1NBeE9TSWdlRzFzYm5NOUltaDBkSEE2THk5M2QzY3Vkek11YjNKbkx6SXdNREF2YzNabklqNDhaeUIwY21GdWMyWnZjbTA5SW0xaGRISnBlQ2d1TURNMElEQWdNQ0F1TURNMElDMDJMamdnTVM0M1pTMDFLU0lnYzNSNWJHVTlJbVpwYkd3Nkl6ZGlOMlU0WXlJK1BIQmhkR2dnWkQwaWJUUTRNQ0F6TkRRdE1qRXhMVEl4TW1NdE1UWXRNVFl0TkRFdE1UWXROVGNnTUMweE5pQXhOaTB4TmlBME1pQXdJRFUzYkRJek9DQXlNemxqT0M0MElEZ3VOU0F5TUNBeE1pQXpNU0F4TWlBeE1TQXdMalUySURJeUxUTXVNaUF6TVMweE1td3lNemd0TWpNNVl6RTJMVEUySURFMkxUUXlJREF0TlRkekxUUXhMVEUyTFRVM0lEQjZJaUJ6ZEhsc1pUMGlabWxzYkRvak4ySTNaVGhqSWk4K1BDOW5Qand2YzNablBnbz0pXG4gICAgbm8tcmVwZWF0IHJpZ2h0IDFlbSBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogMS4yZW07XG4gIHBhZGRpbmctcmlnaHQ6IDNlbTtcbn1cblxuaW5wdXQ6OnBsYWNlaG9sZGVyLFxudGV4dGFyZWE6OnBsYWNlaG9sZGVyIHtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzO1xuICBjb2xvcjogaW5oZXJpdDtcbn1cblxuaW5wdXQ6Zm9jdXM6OnBsYWNlaG9sZGVyLFxudGV4dGFyZWE6Zm9jdXM6OnBsYWNlaG9sZGVyIHtcbiAgb3BhY2l0eTogMC4yO1xufVxuXG5pbnB1dDotbXMtaW5wdXQtcGxhY2Vob2xkZXIsXG50ZXh0YXJlYTotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICBvcGFjaXR5OiAxO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnM7XG4gIGNvbG9yOiBpbmhlcml0O1xufVxuXG5pbnB1dDpmb2N1czotbXMtaW5wdXQtcGxhY2Vob2xkZXIsXG50ZXh0YXJlYTpmb2N1czotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICBvcGFjaXR5OiAwLjI7XG59XG5cbmlucHV0W3R5cGU9XCJzZWFyY2hcIl06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24sXG5pbnB1dFt0eXBlPVwic2VhcmNoXCJdOjotd2Via2l0LXNlYXJjaC1jYW5jZWwtYnV0dG9uLFxuaW5wdXRbdHlwZT1cInNlYXJjaFwiXTo6LXdlYmtpdC1zZWFyY2gtcmVzdWx0cy1idXR0b24sXG5pbnB1dFt0eXBlPVwic2VhcmNoXCJdOjotd2Via2l0LXNlYXJjaC1yZXN1bHRzLWRlY29yYXRpb24ge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5idXR0b24sXG5pbnB1dFt0eXBlPVwiYnV0dG9uXCJdLFxuaW5wdXRbdHlwZT1cInN1Ym1pdFwiXSxcbmlucHV0W3R5cGU9XCJyZXNldFwiXSB7XG4gIEBleHRlbmQgLm91dHNldDtcblxuICBib3JkZXI6IDA7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBwYWRkaW5nOiAxMHB4IDA7XG4gIHdpZHRoOiA4ZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogaW5oZXJpdDtcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGJhY2tncm91bmQtY29sb3IsIGJveC1zaGFkb3c7XG4gIHRyYW5zaXRpb24tZGVsYXk6IDAuMnM7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMnM7XG5cbiAgJi5hY3RpdmUsXG4gICY6YWN0aXZlIHtcbiAgICBAZXh0ZW5kIC5pbnNldDtcblxuICAgIHRyYW5zaXRpb24tZGVsYXk6IDBzO1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMXM7XG4gIH1cblxuICBAZWFjaCAkbmFtZSwgJGNvbG9yIGluIChcInJlZFwiOiAkcmVkLCBcImdyZWVuXCI6ICRncmVlbiwgXCJibHVlXCI6ICRibHVlKSB7XG4gICAgQGF0LXJvb3QgLiN7JG5hbWV9LWJ1dHRvbixcbiAgICAgICYuI3skbmFtZX0tYnV0dG9uIHtcbiAgICAgIEBleHRlbmQgYnV0dG9uO1xuXG4gICAgICAkX2JnLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAkY29sb3IgMzAlLCBsaWdodGVuKCRjb2xvciwgNiUpIDgwJSk7XG5cbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgdGV4dC1zaGFkb3c6IDAgMC4xZW0gMC4xZW0gdHJhbnNwYXJlbnRpemUoYmxhY2ssIDAuMyk7XG4gICAgICBiYWNrZ3JvdW5kOiAkX2JnLWltYWdlO1xuICAgICAgYm94LXNoYWRvdzogMCAwIDAuNWVtIHRyYW5zcGFyZW50aXplKCRjb2xvciwgMC4zKSwgMCAwIHRyYW5zcGFyZW50LFxuICAgICAgICBpbnNldCAwIC01cHggMCB0cmFuc3BhcmVudGl6ZShibGFjaywgMC45NSksXG4gICAgICAgIGluc2V0IDAgMnB4IDAgdHJhbnNwYXJlbnRpemUod2hpdGUsIDAuOCk7XG4gICAgICBib3JkZXItcmFkaXVzOiA2cHggNnB4IDhweCA4cHg7XG4gICAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBib3gtc2hhZG93LCBib3JkZXItcmFkaXVzO1xuXG4gICAgICAmLmFjdGl2ZSxcbiAgICAgICY6YWN0aXZlIHtcbiAgICAgICAgYmFja2dyb3VuZDogJF9iZy1pbWFnZTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgICBib3gtc2hhZG93OiAwIDAgdHJhbnNwYXJlbnQsIDAgMCB0cmFuc3BhcmVudCxcbiAgICAgICAgICBpbnNldCAwIDJweCA1cHggMnB4IHRyYW5zcGFyZW50aXplKGJsYWNrLCAwLjgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5sYWJlbCB7XG4gICYsXG4gICYgKiB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5cbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiAwLjU2ZW0gMDtcbn1cblxuYSB7XG4gICYsXG4gICY6bGluayxcbiAgJjp2aXNpdGVkLFxuICAmOmhvdmVyICY6YWN0aXZlIHtcbiAgICAmLFxuICAgICYgKiB7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6ICRibHVlO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxufVxuXG5oMSxcbmgyLFxuaDMsXG5oNCxcbmg1LFxuaDYge1xuICBsaW5lLWhlaWdodDogMS41ZW07XG59XG5cbmgxIHtcbiAgZm9udC1zaXplOiA0ZW07XG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuICBtYXJnaW46IDAuN2VtIDA7XG59XG5cbmgyIHtcbiAgZm9udC1zaXplOiAzZW07XG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuICBtYXJnaW46IDAuOGVtIDA7XG59XG5cbmgzIHtcbiAgZm9udC1zaXplOiAyLjVlbTtcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4gIG1hcmdpbjogMC45ZW0gMDtcbn1cblxuaDQge1xuICBmb250LXNpemU6IDJlbTtcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4gIG1hcmdpbjogMWVtIDA7XG59XG5cbmg1IHtcbiAgbWFyZ2luOiAwLjVlbSAwO1xuICBmb250LXNpemU6IDEuMmVtO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuXG5oNiB7XG4gIG1hcmdpbjogMWVtIDAgMWVtIDEuNGVtO1xuICBmb250LXNpemU6IDFlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbmlucHV0W3R5cGU9XCJjaGVja2JveFwiXSxcbmlucHV0W3R5cGU9XCJyYWRpb1wiXSB7XG4gICRfYm9yZGVyLXdpZHRoOiAwLjE1ZW07XG4gICRfYm94LXNoYWRvdzogMnB4IDJweCAzcHggdHJhbnNwYXJlbnRpemUoYmxhY2ssIDAuOCksIC0ycHggLTJweCAzcHggd2hpdGUsXG4gICAgaW5zZXQgMXB4IDFweCAycHggdHJhbnNwYXJlbnRpemUoYmxhY2ssIDAuOCksIGluc2V0IC0xcHggLTFweCAycHggd2hpdGU7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGhlaWdodDogMS4yZW07XG4gIHdpZHRoOiAxLjJlbTtcbiAgbWFyZ2luOiAwIDAuM2VtO1xuICBib3gtc2hhZG93OiAkX2JveC1zaGFkb3c7XG4gIGJvcmRlcjogJF9ib3JkZXItd2lkdGggc29saWQgJGJnLWNvbG9yO1xuICB2ZXJ0aWNhbC1hbGlnbjogdGV4dC1ib3R0b207XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGJhY2tncm91bmQsIGJveC1zaGFkb3c7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMnM7XG5cbiAgJjphY3RpdmUge1xuICAgIGJveC1zaGFkb3c6ICRfYm94LXNoYWRvdywgaW5zZXQgMCAwLjFlbSAwLjI1ZW0gdHJhbnNwYXJlbnRpemUoYmxhY2ssIDAuOCk7XG4gIH1cblxuICAmOmNoZWNrZWQge1xuICAgIGJvcmRlci13aWR0aDogMC4xZW07XG4gICAgYm9yZGVyLWNvbG9yOiBkYXJrZW4oJGJsdWUsIDEwJSk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJsdWU7XG4gIH1cbn1cblxuaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdIHtcbiAgYm9yZGVyLXJhZGl1czogMjUlO1xuXG4gICY6Y2hlY2tlZCB7XG4gICAgYm94LXNoYWRvdzogJGdsb3ctc2hhZG93LCBpbnNldCAwIC0wLjFlbSAwIHRyYW5zcGFyZW50aXplKGJsYWNrLCAwLjgpLFxuICAgICAgaW5zZXQgMCAwLjFlbSAwLjFlbSB0cmFuc3BhcmVudGl6ZSh3aGl0ZSwgMC44KTtcbiAgfVxufVxuXG5pbnB1dFt0eXBlPVwicmFkaW9cIl0ge1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuXG4gICY6Y2hlY2tlZCB7XG4gICAgYm94LXNoYWRvdzogJGdsb3ctc2hhZG93O1xuICAgIGJveC1zaGFkb3c6ICRnbG93LXNoYWRvdywgaW5zZXQgMCAwLjEyZW0gMC4xZW0gdHJhbnNwYXJlbnRpemUod2hpdGUsIDAuNzUpO1xuICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDAuMTVlbTtcbiAgfVxufVxuXG4uY2hlY2t0ZXh0IHtcbiAgd2lkdGg6IGF1dG87XG4gIG1hcmdpbjogMC41ZW07XG5cbiAgaW5wdXQge1xuICAgIGRpc3BsYXk6IG5vbmU7XG5cbiAgICArIHNwYW4ge1xuICAgICAgQGV4dGVuZCBidXR0b247XG5cbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgcGFkZGluZzogMWVtO1xuICAgICAgdHJhbnNpdGlvbi1kZWxheTogMHM7XG4gICAgfVxuXG4gICAgJjpjaGVja2VkICsgc3BhbiB7XG4gICAgICBAZXh0ZW5kIC5ibHVlLWJ1dHRvbjtcblxuICAgICAgcGFkZGluZzogMWVtO1xuICAgIH1cbiAgfVxufVxuXG4uc3dpdGNoIHtcbiAgJF9oZWlnaHQ6IDJyZW07XG4gICRfd2lkdGg6IDhyZW07XG4gICRfaGFuZGxlLXdpZHRoOiAkX2hlaWdodDtcbiAgJF9oYW5kbGUtdHJhbnNsYXRpb246ICRfd2lkdGggLSAkX2hhbmRsZS13aWR0aDtcblxuICBoZWlnaHQ6ICRfaGVpZ2h0O1xuICB3aWR0aDogJF93aWR0aDtcbiAgcGFkZGluZzogMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gIGlucHV0IHtcbiAgICBkaXNwbGF5OiBub25lO1xuXG4gICAgKyBkaXYge1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBib3JkZXItcmFkaXVzOiA5OTlweDtcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYm94LXNoYWRvdywgYmFja2dyb3VuZC1jb2xvcjtcbiAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMnM7XG4gICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjJzO1xuICAgICAgYm94LXNoYWRvdzogM3B4IDNweCAycHggLTJweCB0cmFuc3BhcmVudGl6ZShibGFjaywgMC45KSxcbiAgICAgICAgaW5zZXQgMnB4IDJweCAycHggMXB4IHRyYW5zcGFyZW50aXplKGJsYWNrLCAwLjkpLFxuICAgICAgICBpbnNldCAtMnB4IC0ycHggMXB4IHdoaXRlO1xuXG4gICAgICAmOjpiZWZvcmUge1xuICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgaGVpZ2h0OiBjYWxjKCN7JF9oYW5kbGUtd2lkdGh9ICsgNHB4KTtcbiAgICAgICAgd2lkdGg6IGNhbGMoI3skX2hhbmRsZS13aWR0aH0gKyA0cHgpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgICAgICBib3JkZXI6IHNvbGlkIHdoaXRlIDNweDtcbiAgICAgICAgYmFja2dyb3VuZDogJGJsdWU7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgM3B4IDEwcHggdHJhbnNwYXJlbnRpemUoYmxhY2ssIDAuOCksXG4gICAgICAgICAgaW5zZXQgMCAtMXB4IDNweCB0cmFuc3BhcmVudGl6ZShibGFjaywgMC45KTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTZweCk7XG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzO1xuICAgICAgfVxuICAgIH1cblxuICAgICY6Y2hlY2tlZCArIGRpdiB7XG4gICAgICBiYWNrZ3JvdW5kOiAkYmx1ZTtcbiAgICAgIGJveC1zaGFkb3c6ICRnbG93LXNoYWRvdywgaW5zZXQgMCAycHggMnB4IDJweCB0cmFuc3BhcmVudGl6ZShibGFjaywgMC43KSxcbiAgICAgICAgaW5zZXQgMCAwIHRyYW5zcGFyZW50O1xuXG4gICAgICAmOjpiZWZvcmUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgkX2hhbmRsZS10cmFuc2xhdGlvbiwgLTZweCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmhyIHtcbiAgQGV4dGVuZCAuaW5zZXQ7XG4gIHdpZHRoOiA3MiU7XG4gIGhlaWdodDogOHB4O1xuICBmbG9hdDogcmlnaHQ7XG4gIGJvcmRlcjogMDtcbn1cblxuY29kZSxcbnByZSB7XG4gIHBhZGRpbmc6IDAuNWVtIDFlbTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBvdmVyZmxvdzogYXV0bztcbiAgYm94LXNoYWRvdzogMCA1cHggMzBweCAwIHRyYW5zcGFyZW50aXplKGJsYWNrLCAwLjk1KTtcbn1cblxuY29kZSB7XG4gIGJhY2tncm91bmQ6ICNlNmU2ZTY7XG59XG5cbnByZSB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBtYXJnaW46IDRlbSAwO1xufVxuXG5jb2RlLFxucHJlIHtcbiAgJixcbiAgJiAqIHtcbiAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgICBsaW5lLWhlaWdodDogMmVtO1xuICAgIGN1cnNvcjogYXV0bztcbiAgICB1c2VyLXNlbGVjdDogdGV4dDtcbiAgICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IHRleHQ7XG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogdGV4dDtcbiAgICAta2h0bWwtdXNlci1zZWxlY3Q6IHRleHQ7XG4gICAgLW1vei11c2VyLXNlbGVjdDogdGV4dDtcbiAgICAtbXMtdXNlci1zZWxlY3Q6IHRleHQ7XG4gIH1cbn1cblxuYmxvY2txdW90ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAwLjVlbSAxZW07XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm94LXNoYWRvdzogMCA1cHggMzBweCAwIHRyYW5zcGFyZW50aXplKGJsYWNrLCAwLjk1KTtcbiAgYm9yZGVyLWxlZnQ6IDZweCBzb2xpZCAkYmx1ZTtcbn1cbiIsIkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnQ2F2ZWF0JztcbiAgICBzcmM6IHVybCgnLi4vLi4vZm9udHMvQm9sZC9DYXZlYXQtQm9sZC53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcbiAgICAgICAgdXJsKCcuLi8uLi9mb250cy9Cb2xkL0NhdmVhdC1Cb2xkLndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC1kaXNwbGF5OiBzd2FwO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ0NhdmVhdCc7XG4gICAgc3JjOiB1cmwoJy4uLy4uL2ZvbnRzL1JlZ3VsYXIvQ2F2ZWF0LVJlZ3VsYXIud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXG4gICAgICAgIHVybCgnLi4vLi4vZm9udHMvUmVndWxhci9DYXZlYXQtUmVndWxhci53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC1kaXNwbGF5OiBzd2FwO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdGaWd1cmluZVN5bWJvbFQxJztcbiAgc3JjOiB1cmwoJy4uLy4uL2ZvbnRzLzNyZCBQYXJ0eS9DaGVzc1ZhcmlhbnRzL0ZpZ3VyaW5lU3ltYm9sVDFCb2xkLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxuICAgICAgdXJsKCcuLi8uLi9mb250cy8zcmQgUGFydHkvQ2hlc3NWYXJpYW50cy9GaWd1cmluZVN5bWJvbFQxQm9sZC53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnRmlndXJpbmVTeW1ib2xUMSc7XG4gIHNyYzogdXJsKCcuLi8uLi9mb250cy8zcmQgUGFydHkvQ2hlc3NWYXJpYW50cy9GaWd1cmluZVN5bWJvbFQxLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxuICAgICAgdXJsKCcuLi8uLi9mb250cy8zcmQgUGFydHkvQ2hlc3NWYXJpYW50cy9GaWd1cmluZVN5bWJvbFQxLndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG59XG5cbiIsIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJDYXZlYXRcIjtcbiAgc3JjOiB1cmwoXCIuLi8uLi9mb250cy9Cb2xkL0NhdmVhdC1Cb2xkLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpLCB1cmwoXCIuLi8uLi9mb250cy9Cb2xkL0NhdmVhdC1Cb2xkLndvZmZcIikgZm9ybWF0KFwid29mZlwiKTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkNhdmVhdFwiO1xuICBzcmM6IHVybChcIi4uLy4uL2ZvbnRzL1JlZ3VsYXIvQ2F2ZWF0LVJlZ3VsYXIud29mZjJcIikgZm9ybWF0KFwid29mZjJcIiksIHVybChcIi4uLy4uL2ZvbnRzL1JlZ3VsYXIvQ2F2ZWF0LVJlZ3VsYXIud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJGaWd1cmluZVN5bWJvbFQxXCI7XG4gIHNyYzogdXJsKFwiLi4vLi4vZm9udHMvM3JkIFBhcnR5L0NoZXNzVmFyaWFudHMvRmlndXJpbmVTeW1ib2xUMUJvbGQud29mZjJcIikgZm9ybWF0KFwid29mZjJcIiksIHVybChcIi4uLy4uL2ZvbnRzLzNyZCBQYXJ0eS9DaGVzc1ZhcmlhbnRzL0ZpZ3VyaW5lU3ltYm9sVDFCb2xkLndvZmZcIikgZm9ybWF0KFwid29mZlwiKTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkZpZ3VyaW5lU3ltYm9sVDFcIjtcbiAgc3JjOiB1cmwoXCIuLi8uLi9mb250cy8zcmQgUGFydHkvQ2hlc3NWYXJpYW50cy9GaWd1cmluZVN5bWJvbFQxLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpLCB1cmwoXCIuLi8uLi9mb250cy8zcmQgUGFydHkvQ2hlc3NWYXJpYW50cy9GaWd1cmluZVN5bWJvbFQxLndvZmZcIikgZm9ybWF0KFwid29mZlwiKTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG59XG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIENvbnRhaW5lciBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBDb250YWluZXIgVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgQ29udGFpbmVyIFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIEhpZ2hsaWdodCBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBBbm5vdGF0aW9uIFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIFZhcmlhdGlvbiBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBQbHkgVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbjpyb290IHtcbiAgLS1iZy1jb2xvcjogI2YyZjNmNztcbiAgLS1mZy1jb2xvcjogIzM4M2E0MTtcbiAgLS1yZWQ6ICNlNDMwMzA7XG4gIC0tZ3JlZW46ICMxOWExODc7XG4gIC0tYmx1ZTogIzM2N2JmMDtcbiAgLS1kYXJrLWJsdWU6ICMyNjVhYjE7XG4gIC0tbWFyb29uOiAjYjgxNzRjO1xuICAtLXB1cnBsZTogIzhjNDJhYjtcbn1cblxuOjotbW96LWZvY3VzLWlubmVyLFxuOi1tb3otZm9jdXNyaW5nIHtcbiAgYm9yZGVyOiAwO1xuICBjb2xvcjogdHJhbnNwYXJlbnQ7XG4gIHRleHQtc2hhZG93OiAwIDAgMCAjMzgzYTQxO1xufVxuXG46OnNlbGVjdGlvbixcbjo6LW1vei1zZWxlY3Rpb24ge1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQ6IGJsYWNrO1xufVxuXG4qIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgb3V0bGluZTogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lO1xuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCkgIWltcG9ydGFudDtcbiAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xuICBjdXJzb3I6IGRlZmF1bHQ7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xufVxuXG4uc2VsZWN0YWJsZSxcbi5zZWxlY3RhYmxlICoge1xuICBjdXJzb3I6IGF1dG87XG4gIHVzZXItc2VsZWN0OiB0ZXh0O1xuICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IHRleHQ7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IHRleHQ7XG4gIC1raHRtbC11c2VyLXNlbGVjdDogdGV4dDtcbiAgLW1vei11c2VyLXNlbGVjdDogdGV4dDtcbiAgLW1zLXVzZXItc2VsZWN0OiB0ZXh0O1xufVxuXG5odG1sLFxuYm9keSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYzZjc7XG4gIGNvbG9yOiAjMzgzYTQxO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGZvbnQtc2l6ZTogMTBwdDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdzogYXV0bztcbn1cblxuLndpdGgtc2hhZG93LCAub3V0c2V0LCBidXR0b24sIC5jaGVja3RleHQgaW5wdXQgKyBzcGFuLCAuYmx1ZS1idXR0b24sIC5jaGVja3RleHQgaW5wdXQ6Y2hlY2tlZCArIHNwYW4sIGJ1dHRvbi5ibHVlLWJ1dHRvbiwgLnJlZC1idXR0b24uYmx1ZS1idXR0b24sIC5ncmVlbi1idXR0b24uYmx1ZS1idXR0b24sIC5ncmVlbi1idXR0b24sIGJ1dHRvbi5ncmVlbi1idXR0b24sIC5yZWQtYnV0dG9uLmdyZWVuLWJ1dHRvbiwgLnJlZC1idXR0b24sIGJ1dHRvbi5yZWQtYnV0dG9uLFxuaW5wdXRbdHlwZT1idXR0b25dLFxuaW5wdXRbdHlwZT1zdWJtaXRdLFxuaW5wdXRbdHlwZT1yZXNldF0sIHNlbGVjdCwgaW5wdXRbdHlwZT10ZXh0XTpub3Qoc2VsZWN0KTpmb2N1cyxcbmlucHV0W3R5cGU9c2VhcmNoXTpub3Qoc2VsZWN0KTpmb2N1cyxcbmlucHV0W3R5cGU9dGVsXTpub3Qoc2VsZWN0KTpmb2N1cyxcbmlucHV0W3R5cGU9dXJsXTpub3Qoc2VsZWN0KTpmb2N1cyxcbmlucHV0W3R5cGU9ZW1haWxdOm5vdChzZWxlY3QpOmZvY3VzLFxuaW5wdXRbdHlwZT1wYXNzd29yZF06bm90KHNlbGVjdCk6Zm9jdXMsXG5pbnB1dFt0eXBlPWRhdGVdOm5vdChzZWxlY3QpOmZvY3VzLFxuaW5wdXRbdHlwZT1tb250aF06bm90KHNlbGVjdCk6Zm9jdXMsXG5pbnB1dFt0eXBlPXdlZWtdOm5vdChzZWxlY3QpOmZvY3VzLFxuaW5wdXRbdHlwZT10aW1lXTpub3Qoc2VsZWN0KTpmb2N1cyxcbmlucHV0W3R5cGU9bnVtYmVyXTpub3Qoc2VsZWN0KTpmb2N1cyxcbmlucHV0W3R5cGU9Y29sb3JdOm5vdChzZWxlY3QpOmZvY3VzLFxuc2VsZWN0Om5vdChzZWxlY3QpOmZvY3VzLFxudGV4dGFyZWE6bm90KHNlbGVjdCk6Zm9jdXMsIC5wYXBlciB7XG4gIGJveC1zaGFkb3c6IDZweCA2cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMSksIC02cHggLTZweCAxMHB4IHdoaXRlO1xufVxuXG4ub3V0c2V0LCBidXR0b24sIC5jaGVja3RleHQgaW5wdXQgKyBzcGFuLCAuYmx1ZS1idXR0b24sIC5jaGVja3RleHQgaW5wdXQ6Y2hlY2tlZCArIHNwYW4sIGJ1dHRvbi5ibHVlLWJ1dHRvbiwgLnJlZC1idXR0b24uYmx1ZS1idXR0b24sIC5ncmVlbi1idXR0b24uYmx1ZS1idXR0b24sIC5ncmVlbi1idXR0b24sIGJ1dHRvbi5ncmVlbi1idXR0b24sIC5yZWQtYnV0dG9uLmdyZWVuLWJ1dHRvbiwgLnJlZC1idXR0b24sIGJ1dHRvbi5yZWQtYnV0dG9uLFxuaW5wdXRbdHlwZT1idXR0b25dLFxuaW5wdXRbdHlwZT1zdWJtaXRdLFxuaW5wdXRbdHlwZT1yZXNldF0sIHNlbGVjdCwgaW5wdXRbdHlwZT10ZXh0XTpub3Qoc2VsZWN0KTpmb2N1cyxcbmlucHV0W3R5cGU9c2VhcmNoXTpub3Qoc2VsZWN0KTpmb2N1cyxcbmlucHV0W3R5cGU9dGVsXTpub3Qoc2VsZWN0KTpmb2N1cyxcbmlucHV0W3R5cGU9dXJsXTpub3Qoc2VsZWN0KTpmb2N1cyxcbmlucHV0W3R5cGU9ZW1haWxdOm5vdChzZWxlY3QpOmZvY3VzLFxuaW5wdXRbdHlwZT1wYXNzd29yZF06bm90KHNlbGVjdCk6Zm9jdXMsXG5pbnB1dFt0eXBlPWRhdGVdOm5vdChzZWxlY3QpOmZvY3VzLFxuaW5wdXRbdHlwZT1tb250aF06bm90KHNlbGVjdCk6Zm9jdXMsXG5pbnB1dFt0eXBlPXdlZWtdOm5vdChzZWxlY3QpOmZvY3VzLFxuaW5wdXRbdHlwZT10aW1lXTpub3Qoc2VsZWN0KTpmb2N1cyxcbmlucHV0W3R5cGU9bnVtYmVyXTpub3Qoc2VsZWN0KTpmb2N1cyxcbmlucHV0W3R5cGU9Y29sb3JdOm5vdChzZWxlY3QpOmZvY3VzLFxuc2VsZWN0Om5vdChzZWxlY3QpOmZvY3VzLFxudGV4dGFyZWE6bm90KHNlbGVjdCk6Zm9jdXMsIC5wYXBlciB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQ6ICNmMmYzZjc7XG59XG5cbi5pbnNldCwgaHIsIGJ1dHRvbi5hY3RpdmUsIC5jaGVja3RleHQgaW5wdXQgKyBzcGFuLmFjdGl2ZSwgLmFjdGl2ZS5ibHVlLWJ1dHRvbiwgLmFjdGl2ZS5ncmVlbi1idXR0b24sIC5hY3RpdmUucmVkLWJ1dHRvbiwgYnV0dG9uOmFjdGl2ZSwgLmNoZWNrdGV4dCBpbnB1dCArIHNwYW46YWN0aXZlLCAuYmx1ZS1idXR0b246YWN0aXZlLCAuZ3JlZW4tYnV0dG9uOmFjdGl2ZSwgLnJlZC1idXR0b246YWN0aXZlLFxuaW5wdXRbdHlwZT1idXR0b25dLmFjdGl2ZSxcbmlucHV0W3R5cGU9YnV0dG9uXTphY3RpdmUsXG5pbnB1dFt0eXBlPXN1Ym1pdF0uYWN0aXZlLFxuaW5wdXRbdHlwZT1zdWJtaXRdOmFjdGl2ZSxcbmlucHV0W3R5cGU9cmVzZXRdLmFjdGl2ZSxcbmlucHV0W3R5cGU9cmVzZXRdOmFjdGl2ZSwgaW5wdXRbdHlwZT10ZXh0XTpub3Qoc2VsZWN0KSxcbmlucHV0W3R5cGU9c2VhcmNoXTpub3Qoc2VsZWN0KSxcbmlucHV0W3R5cGU9dGVsXTpub3Qoc2VsZWN0KSxcbmlucHV0W3R5cGU9dXJsXTpub3Qoc2VsZWN0KSxcbmlucHV0W3R5cGU9ZW1haWxdOm5vdChzZWxlY3QpLFxuaW5wdXRbdHlwZT1wYXNzd29yZF06bm90KHNlbGVjdCksXG5pbnB1dFt0eXBlPWRhdGVdOm5vdChzZWxlY3QpLFxuaW5wdXRbdHlwZT1tb250aF06bm90KHNlbGVjdCksXG5pbnB1dFt0eXBlPXdlZWtdOm5vdChzZWxlY3QpLFxuaW5wdXRbdHlwZT10aW1lXTpub3Qoc2VsZWN0KSxcbmlucHV0W3R5cGU9bnVtYmVyXTpub3Qoc2VsZWN0KSxcbmlucHV0W3R5cGU9Y29sb3JdOm5vdChzZWxlY3QpLFxuc2VsZWN0Om5vdChzZWxlY3QpLFxudGV4dGFyZWE6bm90KHNlbGVjdCkge1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3gtc2hhZG93OiAwIDAgdHJhbnNwYXJlbnQsIDAgMCB0cmFuc3BhcmVudCwgaW5zZXQgM3B4IDNweCA1cHggcmdiYSgwLCAwLCAwLCAwLjEpLCBpbnNldCAtM3B4IC0zcHggNXB4IHdoaXRlO1xuICBiYWNrZ3JvdW5kOiAjZjhmOWZiO1xufVxuXG4ucGFwZXIge1xuICBwYWRkaW5nOiAxMHB4IDIwcHggMjBweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgbWluLWhlaWdodDogMTAwcHg7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG4gIGJhY2tncm91bmQ6ICNmMmYzZjc7XG59XG5cbnNlY3Rpb24sXG5hcnRpY2xlLFxuLnNlY3Rpb24sXG4uYXJ0aWNsZSxcbi5wYXBlciB7XG4gIGxpbmUtaGVpZ2h0OiAyZW07XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgd29yZC1icmVhazogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMmVtO1xufVxuXG5pbnB1dFt0eXBlPXRleHRdLFxuaW5wdXRbdHlwZT1zZWFyY2hdLFxuaW5wdXRbdHlwZT10ZWxdLFxuaW5wdXRbdHlwZT11cmxdLFxuaW5wdXRbdHlwZT1lbWFpbF0sXG5pbnB1dFt0eXBlPXBhc3N3b3JkXSxcbmlucHV0W3R5cGU9ZGF0ZV0sXG5pbnB1dFt0eXBlPW1vbnRoXSxcbmlucHV0W3R5cGU9d2Vla10sXG5pbnB1dFt0eXBlPXRpbWVdLFxuaW5wdXRbdHlwZT1udW1iZXJdLFxuaW5wdXRbdHlwZT1jb2xvcl0sXG5zZWxlY3QsXG50ZXh0YXJlYSB7XG4gIGJvcmRlcjogMDtcbiAgYmFja2dyb3VuZDogI2YyZjNmNztcbiAgY29sb3I6ICMzODNhNDE7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIHBhZGRpbmc6IDAgMS4yNWVtO1xuICBsaW5lLWhlaWdodDogMS4yNWVtO1xuICBoZWlnaHQ6IDMuNWVtO1xuICBtYXJnaW46IDEwcHggMDtcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIGN1cnNvcjogdGV4dDtcbiAgdXNlci1zZWxlY3Q6IHRleHQ7XG4gIC13ZWJraXQtdG91Y2gtY2FsbG91dDogdGV4dDtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogdGV4dDtcbiAgLWtodG1sLXVzZXItc2VsZWN0OiB0ZXh0O1xuICAtbW96LXVzZXItc2VsZWN0OiB0ZXh0O1xuICAtbXMtdXNlci1zZWxlY3Q6IHRleHQ7XG4gIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC4ycztcbn1cbnRleHRhcmVhIHtcbiAgaGVpZ2h0OiAzNTBweDtcbiAgcGFkZGluZzogMS4yNWVtO1xufVxuXG5zZWxlY3Qge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQ6IHVybChkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUIyWlhKemFXOXVQU0l4TGpFaUlIWnBaWGRDYjNnOUlqQWdNQ0F4T1NBeE9TSWdlRzFzYm5NOUltaDBkSEE2THk5M2QzY3Vkek11YjNKbkx6SXdNREF2YzNabklqNDhaeUIwY21GdWMyWnZjbTA5SW0xaGRISnBlQ2d1TURNMElEQWdNQ0F1TURNMElDMDJMamdnTVM0M1pTMDFLU0lnYzNSNWJHVTlJbVpwYkd3Nkl6ZGlOMlU0WXlJK1BIQmhkR2dnWkQwaWJUUTRNQ0F6TkRRdE1qRXhMVEl4TW1NdE1UWXRNVFl0TkRFdE1UWXROVGNnTUMweE5pQXhOaTB4TmlBME1pQXdJRFUzYkRJek9DQXlNemxqT0M0MElEZ3VOU0F5TUNBeE1pQXpNU0F4TWlBeE1TQXdMalUySURJeUxUTXVNaUF6TVMweE1td3lNemd0TWpNNVl6RTJMVEUySURFMkxUUXlJREF0TlRkekxUUXhMVEUyTFRVM0lEQjZJaUJ6ZEhsc1pUMGlabWxzYkRvak4ySTNaVGhqSWk4K1BDOW5Qand2YzNablBnbz0pIG5vLXJlcGVhdCByaWdodCAxZW0gY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEuMmVtO1xuICBwYWRkaW5nLXJpZ2h0OiAzZW07XG59XG5cbmlucHV0OjpwbGFjZWhvbGRlcixcbnRleHRhcmVhOjpwbGFjZWhvbGRlciB7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycztcbiAgY29sb3I6IGluaGVyaXQ7XG59XG5cbmlucHV0OmZvY3VzOjpwbGFjZWhvbGRlcixcbnRleHRhcmVhOmZvY3VzOjpwbGFjZWhvbGRlciB7XG4gIG9wYWNpdHk6IDAuMjtcbn1cblxuaW5wdXQ6LW1zLWlucHV0LXBsYWNlaG9sZGVyLFxudGV4dGFyZWE6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzO1xuICBjb2xvcjogaW5oZXJpdDtcbn1cblxuaW5wdXQ6Zm9jdXM6LW1zLWlucHV0LXBsYWNlaG9sZGVyLFxudGV4dGFyZWE6Zm9jdXM6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgb3BhY2l0eTogMC4yO1xufVxuXG5pbnB1dFt0eXBlPXNlYXJjaF06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24sXG5pbnB1dFt0eXBlPXNlYXJjaF06Oi13ZWJraXQtc2VhcmNoLWNhbmNlbC1idXR0b24sXG5pbnB1dFt0eXBlPXNlYXJjaF06Oi13ZWJraXQtc2VhcmNoLXJlc3VsdHMtYnV0dG9uLFxuaW5wdXRbdHlwZT1zZWFyY2hdOjotd2Via2l0LXNlYXJjaC1yZXN1bHRzLWRlY29yYXRpb24ge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5idXR0b24sIC5jaGVja3RleHQgaW5wdXQgKyBzcGFuLCAuYmx1ZS1idXR0b24sIC5jaGVja3RleHQgaW5wdXQ6Y2hlY2tlZCArIHNwYW4sIGJ1dHRvbi5ibHVlLWJ1dHRvbiwgLnJlZC1idXR0b24uYmx1ZS1idXR0b24sIC5ncmVlbi1idXR0b24uYmx1ZS1idXR0b24sIC5ncmVlbi1idXR0b24sIGJ1dHRvbi5ncmVlbi1idXR0b24sIC5yZWQtYnV0dG9uLmdyZWVuLWJ1dHRvbiwgLnJlZC1idXR0b24sIGJ1dHRvbi5yZWQtYnV0dG9uLFxuaW5wdXRbdHlwZT1idXR0b25dLFxuaW5wdXRbdHlwZT1zdWJtaXRdLFxuaW5wdXRbdHlwZT1yZXNldF0ge1xuICBib3JkZXI6IDA7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBwYWRkaW5nOiAxMHB4IDA7XG4gIHdpZHRoOiA4ZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogaW5oZXJpdDtcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGJhY2tncm91bmQtY29sb3IsIGJveC1zaGFkb3c7XG4gIHRyYW5zaXRpb24tZGVsYXk6IDAuMnM7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMnM7XG59XG5idXR0b24uYWN0aXZlLCAuY2hlY2t0ZXh0IGlucHV0ICsgc3Bhbi5hY3RpdmUsIC5hY3RpdmUuYmx1ZS1idXR0b24sIC5hY3RpdmUuZ3JlZW4tYnV0dG9uLCAuYWN0aXZlLnJlZC1idXR0b24sIGJ1dHRvbjphY3RpdmUsIC5jaGVja3RleHQgaW5wdXQgKyBzcGFuOmFjdGl2ZSwgLmJsdWUtYnV0dG9uOmFjdGl2ZSwgLmdyZWVuLWJ1dHRvbjphY3RpdmUsIC5yZWQtYnV0dG9uOmFjdGl2ZSxcbmlucHV0W3R5cGU9YnV0dG9uXS5hY3RpdmUsXG5pbnB1dFt0eXBlPWJ1dHRvbl06YWN0aXZlLFxuaW5wdXRbdHlwZT1zdWJtaXRdLmFjdGl2ZSxcbmlucHV0W3R5cGU9c3VibWl0XTphY3RpdmUsXG5pbnB1dFt0eXBlPXJlc2V0XS5hY3RpdmUsXG5pbnB1dFt0eXBlPXJlc2V0XTphY3RpdmUge1xuICB0cmFuc2l0aW9uLWRlbGF5OiAwcztcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4xcztcbn1cbi5yZWQtYnV0dG9uLCBidXR0b24ucmVkLWJ1dHRvbiwgLmNoZWNrdGV4dCBpbnB1dCArIHNwYW4ucmVkLWJ1dHRvbiwgLnJlZC1idXR0b24uYmx1ZS1idXR0b24sIC5yZWQtYnV0dG9uLmdyZWVuLWJ1dHRvbixcbmlucHV0W3R5cGU9YnV0dG9uXS5yZWQtYnV0dG9uLFxuaW5wdXRbdHlwZT1zdWJtaXRdLnJlZC1idXR0b24sXG5pbnB1dFt0eXBlPXJlc2V0XS5yZWQtYnV0dG9uIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1zaGFkb3c6IDAgMC4xZW0gMC4xZW0gcmdiYSgwLCAwLCAwLCAwLjcpO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAjZTQzMDMwIDMwJSwgI2U4NGI0YiA4MCUpO1xuICBib3gtc2hhZG93OiAwIDAgMC41ZW0gcmdiYSgyMjgsIDQ4LCA0OCwgMC43KSwgMCAwIHRyYW5zcGFyZW50LCBpbnNldCAwIC01cHggMCByZ2JhKDAsIDAsIDAsIDAuMDUpLCBpbnNldCAwIDJweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbiAgYm9yZGVyLXJhZGl1czogNnB4IDZweCA4cHggOHB4O1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBib3gtc2hhZG93LCBib3JkZXItcmFkaXVzO1xufVxuLnJlZC1idXR0b24uYWN0aXZlLCAucmVkLWJ1dHRvbjphY3RpdmUsIGJ1dHRvbi5yZWQtYnV0dG9uLmFjdGl2ZSwgYnV0dG9uLnJlZC1idXR0b246YWN0aXZlLFxuaW5wdXRbdHlwZT1idXR0b25dLnJlZC1idXR0b24uYWN0aXZlLFxuaW5wdXRbdHlwZT1idXR0b25dLnJlZC1idXR0b246YWN0aXZlLFxuaW5wdXRbdHlwZT1zdWJtaXRdLnJlZC1idXR0b24uYWN0aXZlLFxuaW5wdXRbdHlwZT1zdWJtaXRdLnJlZC1idXR0b246YWN0aXZlLFxuaW5wdXRbdHlwZT1yZXNldF0ucmVkLWJ1dHRvbi5hY3RpdmUsXG5pbnB1dFt0eXBlPXJlc2V0XS5yZWQtYnV0dG9uOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsICNlNDMwMzAgMzAlLCAjZTg0YjRiIDgwJSk7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgYm94LXNoYWRvdzogMCAwIHRyYW5zcGFyZW50LCAwIDAgdHJhbnNwYXJlbnQsIGluc2V0IDAgMnB4IDVweCAycHggcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuXG4uZ3JlZW4tYnV0dG9uLCBidXR0b24uZ3JlZW4tYnV0dG9uLCAuY2hlY2t0ZXh0IGlucHV0ICsgc3Bhbi5ncmVlbi1idXR0b24sIC5ncmVlbi1idXR0b24uYmx1ZS1idXR0b24sIC5ncmVlbi1idXR0b24ucmVkLWJ1dHRvbixcbmlucHV0W3R5cGU9YnV0dG9uXS5ncmVlbi1idXR0b24sXG5pbnB1dFt0eXBlPXN1Ym1pdF0uZ3JlZW4tYnV0dG9uLFxuaW5wdXRbdHlwZT1yZXNldF0uZ3JlZW4tYnV0dG9uIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1zaGFkb3c6IDAgMC4xZW0gMC4xZW0gcmdiYSgwLCAwLCAwLCAwLjcpO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAjMTlhMTg3IDMwJSwgIzFkYmI5ZCA4MCUpO1xuICBib3gtc2hhZG93OiAwIDAgMC41ZW0gcmdiYSgyNSwgMTYxLCAxMzUsIDAuNyksIDAgMCB0cmFuc3BhcmVudCwgaW5zZXQgMCAtNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjA1KSwgaW5zZXQgMCAycHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG4gIGJvcmRlci1yYWRpdXM6IDZweCA2cHggOHB4IDhweDtcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYm94LXNoYWRvdywgYm9yZGVyLXJhZGl1cztcbn1cbi5ncmVlbi1idXR0b24uYWN0aXZlLCAuZ3JlZW4tYnV0dG9uOmFjdGl2ZSwgYnV0dG9uLmdyZWVuLWJ1dHRvbi5hY3RpdmUsIGJ1dHRvbi5ncmVlbi1idXR0b246YWN0aXZlLFxuaW5wdXRbdHlwZT1idXR0b25dLmdyZWVuLWJ1dHRvbi5hY3RpdmUsXG5pbnB1dFt0eXBlPWJ1dHRvbl0uZ3JlZW4tYnV0dG9uOmFjdGl2ZSxcbmlucHV0W3R5cGU9c3VibWl0XS5ncmVlbi1idXR0b24uYWN0aXZlLFxuaW5wdXRbdHlwZT1zdWJtaXRdLmdyZWVuLWJ1dHRvbjphY3RpdmUsXG5pbnB1dFt0eXBlPXJlc2V0XS5ncmVlbi1idXR0b24uYWN0aXZlLFxuaW5wdXRbdHlwZT1yZXNldF0uZ3JlZW4tYnV0dG9uOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsICMxOWExODcgMzAlLCAjMWRiYjlkIDgwJSk7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgYm94LXNoYWRvdzogMCAwIHRyYW5zcGFyZW50LCAwIDAgdHJhbnNwYXJlbnQsIGluc2V0IDAgMnB4IDVweCAycHggcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuXG4uYmx1ZS1idXR0b24sIC5jaGVja3RleHQgaW5wdXQ6Y2hlY2tlZCArIHNwYW4sIGJ1dHRvbi5ibHVlLWJ1dHRvbiwgLmNoZWNrdGV4dCBpbnB1dCArIHNwYW4uYmx1ZS1idXR0b24sIC5ibHVlLWJ1dHRvbi5yZWQtYnV0dG9uLCAuYmx1ZS1idXR0b24uZ3JlZW4tYnV0dG9uLFxuaW5wdXRbdHlwZT1idXR0b25dLmJsdWUtYnV0dG9uLFxuaW5wdXRbdHlwZT1zdWJtaXRdLmJsdWUtYnV0dG9uLFxuaW5wdXRbdHlwZT1yZXNldF0uYmx1ZS1idXR0b24ge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LXNoYWRvdzogMCAwLjFlbSAwLjFlbSByZ2JhKDAsIDAsIDAsIDAuNyk7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsICMzNjdiZjAgMzAlLCAjNTI4ZWYyIDgwJSk7XG4gIGJveC1zaGFkb3c6IDAgMCAwLjVlbSByZ2JhKDU0LCAxMjMsIDI0MCwgMC43KSwgMCAwIHRyYW5zcGFyZW50LCBpbnNldCAwIC01cHggMCByZ2JhKDAsIDAsIDAsIDAuMDUpLCBpbnNldCAwIDJweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbiAgYm9yZGVyLXJhZGl1czogNnB4IDZweCA4cHggOHB4O1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBib3gtc2hhZG93LCBib3JkZXItcmFkaXVzO1xufVxuLmJsdWUtYnV0dG9uLmFjdGl2ZSwgLmNoZWNrdGV4dCBpbnB1dDpjaGVja2VkICsgc3Bhbi5hY3RpdmUsIC5ibHVlLWJ1dHRvbjphY3RpdmUsIC5jaGVja3RleHQgaW5wdXQ6Y2hlY2tlZCArIHNwYW46YWN0aXZlLCBidXR0b24uYmx1ZS1idXR0b24uYWN0aXZlLCBidXR0b24uYmx1ZS1idXR0b246YWN0aXZlLFxuaW5wdXRbdHlwZT1idXR0b25dLmJsdWUtYnV0dG9uLmFjdGl2ZSxcbmlucHV0W3R5cGU9YnV0dG9uXS5ibHVlLWJ1dHRvbjphY3RpdmUsXG5pbnB1dFt0eXBlPXN1Ym1pdF0uYmx1ZS1idXR0b24uYWN0aXZlLFxuaW5wdXRbdHlwZT1zdWJtaXRdLmJsdWUtYnV0dG9uOmFjdGl2ZSxcbmlucHV0W3R5cGU9cmVzZXRdLmJsdWUtYnV0dG9uLmFjdGl2ZSxcbmlucHV0W3R5cGU9cmVzZXRdLmJsdWUtYnV0dG9uOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsICMzNjdiZjAgMzAlLCAjNTI4ZWYyIDgwJSk7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgYm94LXNoYWRvdzogMCAwIHRyYW5zcGFyZW50LCAwIDAgdHJhbnNwYXJlbnQsIGluc2V0IDAgMnB4IDVweCAycHggcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuXG5sYWJlbCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogMC41NmVtIDA7XG59XG5sYWJlbCwgbGFiZWwgKiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuYSwgYTpsaW5rLCBhOnZpc2l0ZWQsIGE6aG92ZXIgYTphY3RpdmUge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICMzNjdiZjA7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5hLCBhICosIGE6bGluaywgYTpsaW5rICosIGE6dmlzaXRlZCwgYTp2aXNpdGVkICosIGE6aG92ZXIgYTphY3RpdmUsIGE6aG92ZXIgYTphY3RpdmUgKiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuaDEsXG5oMixcbmgzLFxuaDQsXG5oNSxcbmg2IHtcbiAgbGluZS1oZWlnaHQ6IDEuNWVtO1xufVxuXG5oMSB7XG4gIGZvbnQtc2l6ZTogNGVtO1xuICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgbWFyZ2luOiAwLjdlbSAwO1xufVxuXG5oMiB7XG4gIGZvbnQtc2l6ZTogM2VtO1xuICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgbWFyZ2luOiAwLjhlbSAwO1xufVxuXG5oMyB7XG4gIGZvbnQtc2l6ZTogMi41ZW07XG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuICBtYXJnaW46IDAuOWVtIDA7XG59XG5cbmg0IHtcbiAgZm9udC1zaXplOiAyZW07XG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuICBtYXJnaW46IDFlbSAwO1xufVxuXG5oNSB7XG4gIG1hcmdpbjogMC41ZW0gMDtcbiAgZm9udC1zaXplOiAxLjJlbTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cblxuaDYge1xuICBtYXJnaW46IDFlbSAwIDFlbSAxLjRlbTtcbiAgZm9udC1zaXplOiAxZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5pbnB1dFt0eXBlPWNoZWNrYm94XSxcbmlucHV0W3R5cGU9cmFkaW9dIHtcbiAgZm9udC1zaXplOiAxZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgaGVpZ2h0OiAxLjJlbTtcbiAgd2lkdGg6IDEuMmVtO1xuICBtYXJnaW46IDAgMC4zZW07XG4gIGJveC1zaGFkb3c6IDJweCAycHggM3B4IHJnYmEoMCwgMCwgMCwgMC4yKSwgLTJweCAtMnB4IDNweCB3aGl0ZSwgaW5zZXQgMXB4IDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjIpLCBpbnNldCAtMXB4IC0xcHggMnB4IHdoaXRlO1xuICBib3JkZXI6IDAuMTVlbSBzb2xpZCAjZjJmM2Y3O1xuICB2ZXJ0aWNhbC1hbGlnbjogdGV4dC1ib3R0b207XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGJhY2tncm91bmQsIGJveC1zaGFkb3c7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMnM7XG59XG5pbnB1dFt0eXBlPWNoZWNrYm94XTphY3RpdmUsXG5pbnB1dFt0eXBlPXJhZGlvXTphY3RpdmUge1xuICBib3gtc2hhZG93OiAycHggMnB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMiksIC0ycHggLTJweCAzcHggd2hpdGUsIGluc2V0IDFweCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgaW5zZXQgLTFweCAtMXB4IDJweCB3aGl0ZSwgaW5zZXQgMCAwLjFlbSAwLjI1ZW0gcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuaW5wdXRbdHlwZT1jaGVja2JveF06Y2hlY2tlZCxcbmlucHV0W3R5cGU9cmFkaW9dOmNoZWNrZWQge1xuICBib3JkZXItd2lkdGg6IDAuMWVtO1xuICBib3JkZXItY29sb3I6ICMxMTVmZTI7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNjdiZjA7XG59XG5cbmlucHV0W3R5cGU9Y2hlY2tib3hdIHtcbiAgYm9yZGVyLXJhZGl1czogMjUlO1xufVxuaW5wdXRbdHlwZT1jaGVja2JveF06Y2hlY2tlZCB7XG4gIGJveC1zaGFkb3c6IDAgMCAwLjVlbSByZ2JhKDU0LCAxMjMsIDI0MCwgMC43KSwgaW5zZXQgMCAtMC4xZW0gMCByZ2JhKDAsIDAsIDAsIDAuMiksIGluc2V0IDAgMC4xZW0gMC4xZW0gcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xufVxuXG5pbnB1dFt0eXBlPXJhZGlvXSB7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG59XG5pbnB1dFt0eXBlPXJhZGlvXTpjaGVja2VkIHtcbiAgYm94LXNoYWRvdzogMCAwIDAuNWVtIHJnYmEoNTQsIDEyMywgMjQwLCAwLjcpO1xuICBib3gtc2hhZG93OiAwIDAgMC41ZW0gcmdiYSg1NCwgMTIzLCAyNDAsIDAuNyksIGluc2V0IDAgMC4xMmVtIDAuMWVtIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSk7XG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDAuMTVlbTtcbn1cblxuLmNoZWNrdGV4dCB7XG4gIHdpZHRoOiBhdXRvO1xuICBtYXJnaW46IDAuNWVtO1xufVxuLmNoZWNrdGV4dCBpbnB1dCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uY2hlY2t0ZXh0IGlucHV0ICsgc3BhbiB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nOiAxZW07XG4gIHRyYW5zaXRpb24tZGVsYXk6IDBzO1xufVxuLmNoZWNrdGV4dCBpbnB1dDpjaGVja2VkICsgc3BhbiB7XG4gIHBhZGRpbmc6IDFlbTtcbn1cblxuLnN3aXRjaCB7XG4gIGhlaWdodDogMnJlbTtcbiAgd2lkdGg6IDhyZW07XG4gIHBhZGRpbmc6IDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5zd2l0Y2ggaW5wdXQge1xuICBkaXNwbGF5OiBub25lO1xufVxuLnN3aXRjaCBpbnB1dCArIGRpdiB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYm94LXNoYWRvdywgYmFja2dyb3VuZC1jb2xvcjtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4ycztcbiAgdHJhbnNpdGlvbi1kZWxheTogMC4ycztcbiAgYm94LXNoYWRvdzogM3B4IDNweCAycHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMSksIGluc2V0IDJweCAycHggMnB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMSksIGluc2V0IC0ycHggLTJweCAxcHggd2hpdGU7XG59XG4uc3dpdGNoIGlucHV0ICsgZGl2OjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiBjYWxjKDJyZW0gKyA0cHgpO1xuICB3aWR0aDogY2FsYygycmVtICsgNHB4KTtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgYm9yZGVyOiBzb2xpZCB3aGl0ZSAzcHg7XG4gIGJhY2tncm91bmQ6ICMzNjdiZjA7XG4gIGJveC1zaGFkb3c6IDAgM3B4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjIpLCBpbnNldCAwIC0xcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTZweCk7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzO1xufVxuLnN3aXRjaCBpbnB1dDpjaGVja2VkICsgZGl2IHtcbiAgYmFja2dyb3VuZDogIzM2N2JmMDtcbiAgYm94LXNoYWRvdzogMCAwIDAuNWVtIHJnYmEoNTQsIDEyMywgMjQwLCAwLjcpLCBpbnNldCAwIDJweCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4zKSwgaW5zZXQgMCAwIHRyYW5zcGFyZW50O1xufVxuLnN3aXRjaCBpbnB1dDpjaGVja2VkICsgZGl2OjpiZWZvcmUge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg2cmVtLCAtNnB4KTtcbn1cblxuaHIge1xuICB3aWR0aDogNzIlO1xuICBoZWlnaHQ6IDhweDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBib3JkZXI6IDA7XG59XG5cbmNvZGUsXG5wcmUge1xuICBwYWRkaW5nOiAwLjVlbSAxZW07XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIGJveC1zaGFkb3c6IDAgNXB4IDMwcHggMCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xufVxuXG5jb2RlIHtcbiAgYmFja2dyb3VuZDogI2U2ZTZlNjtcbn1cblxucHJlIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIG1hcmdpbjogNGVtIDA7XG59XG5cbmNvZGUsIGNvZGUgKixcbnByZSxcbnByZSAqIHtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIGxpbmUtaGVpZ2h0OiAyZW07XG4gIGN1cnNvcjogYXV0bztcbiAgdXNlci1zZWxlY3Q6IHRleHQ7XG4gIC13ZWJraXQtdG91Y2gtY2FsbG91dDogdGV4dDtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogdGV4dDtcbiAgLWtodG1sLXVzZXItc2VsZWN0OiB0ZXh0O1xuICAtbW96LXVzZXItc2VsZWN0OiB0ZXh0O1xuICAtbXMtdXNlci1zZWxlY3Q6IHRleHQ7XG59XG5cbmJsb2NrcXVvdGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMC41ZW0gMWVtO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJveC1zaGFkb3c6IDAgNXB4IDMwcHggMCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICBib3JkZXItbGVmdDogNnB4IHNvbGlkICMzNjdiZjA7XG59XG5cbi5ncy1jb250ZXh0LW1lbnUtY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmdDb250ZXh0KTtcbiAgYm9yZGVyLXJhZGl1czogMyU7XG4gIGJvcmRlcjogdmFyKC0tYm9yZGVyQ29udGV4dCk7XG4gIGNvbG9yOiB2YXIoLS10ZXh0Q29sb3JDb250ZXh0KTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBmbGV4Ym94O1xuICB3aWR0aDogNDAlO1xuICBtYXgtd2lkdGg6IDE2MHB4O1xuICBtaW4td2lkdGg6IDEzMHB4O1xuICBtaW4taGVpZ2h0OiAyMDBweDtcbiAgdG9wOiAxMCU7XG4gIGxlZnQ6IDEwJTtcbiAgcmlnaHQ6IDEwJTtcbiAgYm90dG9tOiAxNSU7XG59XG5cbi5ncy1jb250ZXh0LW1lbnUtb3ZlcmFseSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgbGVmdDogMHB4O1xuICB0b3A6IDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmdzLWNvbnRleHQtbWVudS1vdmVyYWx5IC5jb250ZXh0LW1lbnUtYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogdmFyKC0taXRlbS1iZyk7XG4gIGJvcmRlcjogdmFyKC0tYm9yZGVyQ29udGV4dCk7XG4gIGNvbG9yOiB2YXIoLS10ZXh0Q29sb3JDb250ZXh0KTtcbiAgbWFyZ2luOiA4cHg7XG4gIGhlaWdodDogMTAlO1xuICB0b3A6IDE1JTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsaW5lLWhlaWdodDogMTAlO1xufVxuXG5tYXQtY2FyZC10aXRsZSB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0Q29sb3JDb250ZXh0KTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuGameScoreItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-menu-game-score-item',
                templateUrl: './menu-game-score-item.component.html',
                styleUrls: ['./menu-game-score-item.component.scss']
            }]
    }], function () { return []; }, { data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], menuTitle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], matMenuTrigger: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_menu__WEBPACK_IMPORTED_MODULE_1__["MatMenuTrigger"]]
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
/* harmony import */ var src_app_services_game_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/game.service */ "./src/app/services/game.service.ts");



class OlgaControlsComponent {
    constructor(gameService) {
        this.gameService = gameService;
    }
    ngOnInit() {
    }
}
OlgaControlsComponent.ɵfac = function OlgaControlsComponent_Factory(t) { return new (t || OlgaControlsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_game_service__WEBPACK_IMPORTED_MODULE_1__["GameService"])); };
OlgaControlsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OlgaControlsComponent, selectors: [["olga-controls"]], decls: 12, vars: 0, consts: [[1, "button", "start", 3, "click"], [1, "feather"], [0, "xlink", "href", "/assets/images/feather-sprite.svg#chevrons-left"], [1, "button", "previous", 3, "click"], [0, "xlink", "href", "/assets/images/feather-sprite.svg#chevron-left"], [1, "button", "next", 3, "click"], [0, "xlink", "href", "/assets/images/feather-sprite.svg#chevron-right"], [1, "button", "end", 3, "click"], [0, "xlink", "href", "/assets/images/feather-sprite.svg#chevrons-right"]], template: function OlgaControlsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OlgaControlsComponent_Template_div_click_0_listener() { return ctx.gameService.moveToStart(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "use", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OlgaControlsComponent_Template_div_click_3_listener() { return ctx.gameService.previous(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "svg", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "use", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OlgaControlsComponent_Template_div_click_6_listener() { return ctx.gameService.advance(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "svg", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "use", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OlgaControlsComponent_Template_div_click_9_listener() { return ctx.gameService.moveToEnd(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "svg", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "use", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["@font-face {\n  font-family: \"Caveat\";\n  src: url('Caveat-Bold.woff2') format(\"woff2\"), url('Caveat-Bold.woff') format(\"woff\");\n  font-weight: bold;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"Caveat\";\n  src: url('Caveat-Regular.woff2') format(\"woff2\"), url('Caveat-Regular.woff') format(\"woff\");\n  font-weight: 600;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"FigurineSymbolT1\";\n  src: url('FigurineSymbolT1Bold.woff2') format(\"woff2\"), url('FigurineSymbolT1Bold.woff') format(\"woff\");\n  font-weight: bold;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"FigurineSymbolT1\";\n  src: url('FigurineSymbolT1.woff2') format(\"woff2\"), url('FigurineSymbolT1.woff') format(\"woff\");\n  font-weight: 600;\n  font-style: normal;\n  font-display: swap;\n}\n\n\n\n\n\n\n\n[_ngcontent-%COMP%]:root {\n  --bg-color: #f2f3f7;\n  --fg-color: #383a41;\n  --red: #e43030;\n  --green: #19a187;\n  --blue: #367bf0;\n  --dark-blue: #265ab1;\n  --maroon: #b8174c;\n  --purple: #8c42ab;\n}\n[_ngcontent-%COMP%]::-moz-focus-inner, [_ngcontent-%COMP%]:-moz-focusring {\n  border: 0;\n  color: transparent;\n  text-shadow: 0 0 0 #383a41;\n}\n[_ngcontent-%COMP%]::selection, [_ngcontent-%COMP%]::-moz-selection {\n  color: white;\n  background: black;\n}\n*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  outline: none;\n  user-select: none;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  -webkit-appearance: none;\n  -webkit-tap-highlight-color: transparent !important;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0) !important;\n  -webkit-touch-callout: none;\n  cursor: default;\n  letter-spacing: 0;\n}\n.selectable[_ngcontent-%COMP%], .selectable[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  cursor: auto;\n  user-select: text;\n  -webkit-touch-callout: text;\n  -webkit-user-select: text;\n  -khtml-user-select: text;\n  -moz-user-select: text;\n  -ms-user-select: text;\n}\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  background-color: #f2f3f7;\n  color: #383a41;\n  margin: 0;\n  padding: 0;\n  font-size: 10pt;\n  height: 100%;\n  overflow: auto;\n}\n.with-shadow[_ngcontent-%COMP%], .outset[_ngcontent-%COMP%], button[_ngcontent-%COMP%], .checktext[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]    + span[_ngcontent-%COMP%], .blue-button[_ngcontent-%COMP%], .checktext[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + span[_ngcontent-%COMP%], button.blue-button[_ngcontent-%COMP%], .red-button.blue-button[_ngcontent-%COMP%], .green-button.blue-button[_ngcontent-%COMP%], .green-button[_ngcontent-%COMP%], button.green-button[_ngcontent-%COMP%], .red-button.green-button[_ngcontent-%COMP%], .red-button[_ngcontent-%COMP%], button.red-button[_ngcontent-%COMP%], input[type=button][_ngcontent-%COMP%], input[type=submit][_ngcontent-%COMP%], input[type=reset][_ngcontent-%COMP%], select[_ngcontent-%COMP%], input[type=text][_ngcontent-%COMP%]:not(select):focus, input[type=search][_ngcontent-%COMP%]:not(select):focus, input[type=tel][_ngcontent-%COMP%]:not(select):focus, input[type=url][_ngcontent-%COMP%]:not(select):focus, input[type=email][_ngcontent-%COMP%]:not(select):focus, input[type=password][_ngcontent-%COMP%]:not(select):focus, input[type=date][_ngcontent-%COMP%]:not(select):focus, input[type=month][_ngcontent-%COMP%]:not(select):focus, input[type=week][_ngcontent-%COMP%]:not(select):focus, input[type=time][_ngcontent-%COMP%]:not(select):focus, input[type=number][_ngcontent-%COMP%]:not(select):focus, input[type=color][_ngcontent-%COMP%]:not(select):focus, select[_ngcontent-%COMP%]:not(select):focus, textarea[_ngcontent-%COMP%]:not(select):focus, .paper[_ngcontent-%COMP%] {\n  box-shadow: 6px 6px 10px rgba(0, 0, 0, 0.1), -6px -6px 10px white;\n}\n.outset[_ngcontent-%COMP%], button[_ngcontent-%COMP%], .checktext[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]    + span[_ngcontent-%COMP%], .blue-button[_ngcontent-%COMP%], .checktext[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + span[_ngcontent-%COMP%], button.blue-button[_ngcontent-%COMP%], .red-button.blue-button[_ngcontent-%COMP%], .green-button.blue-button[_ngcontent-%COMP%], .green-button[_ngcontent-%COMP%], button.green-button[_ngcontent-%COMP%], .red-button.green-button[_ngcontent-%COMP%], .red-button[_ngcontent-%COMP%], button.red-button[_ngcontent-%COMP%], input[type=button][_ngcontent-%COMP%], input[type=submit][_ngcontent-%COMP%], input[type=reset][_ngcontent-%COMP%], select[_ngcontent-%COMP%], input[type=text][_ngcontent-%COMP%]:not(select):focus, input[type=search][_ngcontent-%COMP%]:not(select):focus, input[type=tel][_ngcontent-%COMP%]:not(select):focus, input[type=url][_ngcontent-%COMP%]:not(select):focus, input[type=email][_ngcontent-%COMP%]:not(select):focus, input[type=password][_ngcontent-%COMP%]:not(select):focus, input[type=date][_ngcontent-%COMP%]:not(select):focus, input[type=month][_ngcontent-%COMP%]:not(select):focus, input[type=week][_ngcontent-%COMP%]:not(select):focus, input[type=time][_ngcontent-%COMP%]:not(select):focus, input[type=number][_ngcontent-%COMP%]:not(select):focus, input[type=color][_ngcontent-%COMP%]:not(select):focus, select[_ngcontent-%COMP%]:not(select):focus, textarea[_ngcontent-%COMP%]:not(select):focus, .paper[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  background: #f2f3f7;\n}\n.inset[_ngcontent-%COMP%], hr[_ngcontent-%COMP%], button.active[_ngcontent-%COMP%], .checktext[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]    + span.active[_ngcontent-%COMP%], .active.blue-button[_ngcontent-%COMP%], .active.green-button[_ngcontent-%COMP%], .active.red-button[_ngcontent-%COMP%], button[_ngcontent-%COMP%]:active, .checktext[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]    + span[_ngcontent-%COMP%]:active, .blue-button[_ngcontent-%COMP%]:active, .green-button[_ngcontent-%COMP%]:active, .red-button[_ngcontent-%COMP%]:active, input[type=button].active[_ngcontent-%COMP%], input[type=button][_ngcontent-%COMP%]:active, input[type=submit].active[_ngcontent-%COMP%], input[type=submit][_ngcontent-%COMP%]:active, input[type=reset].active[_ngcontent-%COMP%], input[type=reset][_ngcontent-%COMP%]:active, input[type=text][_ngcontent-%COMP%]:not(select), input[type=search][_ngcontent-%COMP%]:not(select), input[type=tel][_ngcontent-%COMP%]:not(select), input[type=url][_ngcontent-%COMP%]:not(select), input[type=email][_ngcontent-%COMP%]:not(select), input[type=password][_ngcontent-%COMP%]:not(select), input[type=date][_ngcontent-%COMP%]:not(select), input[type=month][_ngcontent-%COMP%]:not(select), input[type=week][_ngcontent-%COMP%]:not(select), input[type=time][_ngcontent-%COMP%]:not(select), input[type=number][_ngcontent-%COMP%]:not(select), input[type=color][_ngcontent-%COMP%]:not(select), select[_ngcontent-%COMP%]:not(select), textarea[_ngcontent-%COMP%]:not(select) {\n  border-radius: 10px;\n  box-shadow: 0 0 transparent, 0 0 transparent, inset 3px 3px 5px rgba(0, 0, 0, 0.1), inset -3px -3px 5px white;\n  background: #f8f9fb;\n}\n.paper[_ngcontent-%COMP%] {\n  padding: 10px 20px 20px;\n  margin-top: 20px;\n  min-height: 100px;\n  font-size: 1.2em;\n  background: #f2f3f7;\n}\nsection[_ngcontent-%COMP%], article[_ngcontent-%COMP%], .section[_ngcontent-%COMP%], .article[_ngcontent-%COMP%], .paper[_ngcontent-%COMP%] {\n  line-height: 2em;\n  word-wrap: break-word;\n  word-break: normal;\n  line-height: 2em;\n}\ninput[type=text][_ngcontent-%COMP%], input[type=search][_ngcontent-%COMP%], input[type=tel][_ngcontent-%COMP%], input[type=url][_ngcontent-%COMP%], input[type=email][_ngcontent-%COMP%], input[type=password][_ngcontent-%COMP%], input[type=date][_ngcontent-%COMP%], input[type=month][_ngcontent-%COMP%], input[type=week][_ngcontent-%COMP%], input[type=time][_ngcontent-%COMP%], input[type=number][_ngcontent-%COMP%], input[type=color][_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  border: 0;\n  background: #f2f3f7;\n  color: #383a41;\n  font-weight: normal;\n  padding: 0 1.25em;\n  line-height: 1.25em;\n  height: 3.5em;\n  margin: 10px 0;\n  font-size: 1.1rem;\n  cursor: text;\n  user-select: text;\n  -webkit-touch-callout: text;\n  -webkit-user-select: text;\n  -khtml-user-select: text;\n  -moz-user-select: text;\n  -ms-user-select: text;\n  transition: box-shadow 0.2s;\n}\ntextarea[_ngcontent-%COMP%] {\n  height: 350px;\n  padding: 1.25em;\n}\nselect[_ngcontent-%COMP%] {\n  cursor: pointer;\n  background: url(data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAxOSAxOSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyB0cmFuc2Zvcm09Im1hdHJpeCguMDM0IDAgMCAuMDM0IC02LjggMS43ZS01KSIgc3R5bGU9ImZpbGw6IzdiN2U4YyI+PHBhdGggZD0ibTQ4MCAzNDQtMjExLTIxMmMtMTYtMTYtNDEtMTYtNTcgMC0xNiAxNi0xNiA0MiAwIDU3bDIzOCAyMzljOC40IDguNSAyMCAxMiAzMSAxMiAxMSAwLjU2IDIyLTMuMiAzMS0xMmwyMzgtMjM5YzE2LTE2IDE2LTQyIDAtNTdzLTQxLTE2LTU3IDB6IiBzdHlsZT0iZmlsbDojN2I3ZThjIi8+PC9nPjwvc3ZnPgo=) no-repeat right 1em center;\n  background-size: 1.2em;\n  padding-right: 3em;\n}\ninput[_ngcontent-%COMP%]::placeholder, textarea[_ngcontent-%COMP%]::placeholder {\n  opacity: 1;\n  transition: opacity 0.2s;\n  color: inherit;\n}\ninput[_ngcontent-%COMP%]:focus::placeholder, textarea[_ngcontent-%COMP%]:focus::placeholder {\n  opacity: 0.2;\n}\ninput[_ngcontent-%COMP%]:-ms-input-placeholder, textarea[_ngcontent-%COMP%]:-ms-input-placeholder {\n  opacity: 1;\n  -ms-transition: opacity 0.2s;\n  transition: opacity 0.2s;\n  color: inherit;\n}\ninput[_ngcontent-%COMP%]:focus:-ms-input-placeholder, textarea[_ngcontent-%COMP%]:focus:-ms-input-placeholder {\n  opacity: 0.2;\n}\ninput[type=search][_ngcontent-%COMP%]::-webkit-search-decoration, input[type=search][_ngcontent-%COMP%]::-webkit-search-cancel-button, input[type=search][_ngcontent-%COMP%]::-webkit-search-results-button, input[type=search][_ngcontent-%COMP%]::-webkit-search-results-decoration {\n  display: none;\n}\nbutton[_ngcontent-%COMP%], .checktext[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]    + span[_ngcontent-%COMP%], .blue-button[_ngcontent-%COMP%], .checktext[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + span[_ngcontent-%COMP%], button.blue-button[_ngcontent-%COMP%], .red-button.blue-button[_ngcontent-%COMP%], .green-button.blue-button[_ngcontent-%COMP%], .green-button[_ngcontent-%COMP%], button.green-button[_ngcontent-%COMP%], .red-button.green-button[_ngcontent-%COMP%], .red-button[_ngcontent-%COMP%], button.red-button[_ngcontent-%COMP%], input[type=button][_ngcontent-%COMP%], input[type=submit][_ngcontent-%COMP%], input[type=reset][_ngcontent-%COMP%] {\n  border: 0;\n  text-transform: capitalize;\n  padding: 10px 0;\n  width: 8em;\n  text-align: center;\n  cursor: pointer;\n  color: inherit;\n  font-size: 1.1rem;\n  transition-property: background-color, box-shadow;\n  transition-delay: 0.2s;\n  transition-duration: 0.2s;\n}\nbutton.active[_ngcontent-%COMP%], .checktext[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]    + span.active[_ngcontent-%COMP%], .active.blue-button[_ngcontent-%COMP%], .active.green-button[_ngcontent-%COMP%], .active.red-button[_ngcontent-%COMP%], button[_ngcontent-%COMP%]:active, .checktext[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]    + span[_ngcontent-%COMP%]:active, .blue-button[_ngcontent-%COMP%]:active, .green-button[_ngcontent-%COMP%]:active, .red-button[_ngcontent-%COMP%]:active, input[type=button].active[_ngcontent-%COMP%], input[type=button][_ngcontent-%COMP%]:active, input[type=submit].active[_ngcontent-%COMP%], input[type=submit][_ngcontent-%COMP%]:active, input[type=reset].active[_ngcontent-%COMP%], input[type=reset][_ngcontent-%COMP%]:active {\n  transition-delay: 0s;\n  transition-duration: 0.1s;\n}\n.red-button[_ngcontent-%COMP%], button.red-button[_ngcontent-%COMP%], .checktext[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]    + span.red-button[_ngcontent-%COMP%], .red-button.blue-button[_ngcontent-%COMP%], .red-button.green-button[_ngcontent-%COMP%], input[type=button].red-button[_ngcontent-%COMP%], input[type=submit].red-button[_ngcontent-%COMP%], input[type=reset].red-button[_ngcontent-%COMP%] {\n  color: white;\n  font-weight: bold;\n  text-shadow: 0 0.1em 0.1em rgba(0, 0, 0, 0.7);\n  background: linear-gradient(to top, #e43030 30%, #e84b4b 80%);\n  box-shadow: 0 0 0.5em rgba(228, 48, 48, 0.7), 0 0 transparent, inset 0 -5px 0 rgba(0, 0, 0, 0.05), inset 0 2px 0 rgba(255, 255, 255, 0.2);\n  border-radius: 6px 6px 8px 8px;\n  transition-property: box-shadow, border-radius;\n}\n.red-button.active[_ngcontent-%COMP%], .red-button[_ngcontent-%COMP%]:active, button.red-button.active[_ngcontent-%COMP%], button.red-button[_ngcontent-%COMP%]:active, input[type=button].red-button.active[_ngcontent-%COMP%], input[type=button].red-button[_ngcontent-%COMP%]:active, input[type=submit].red-button.active[_ngcontent-%COMP%], input[type=submit].red-button[_ngcontent-%COMP%]:active, input[type=reset].red-button.active[_ngcontent-%COMP%], input[type=reset].red-button[_ngcontent-%COMP%]:active {\n  background: linear-gradient(to top, #e43030 30%, #e84b4b 80%);\n  border-radius: 6px;\n  box-shadow: 0 0 transparent, 0 0 transparent, inset 0 2px 5px 2px rgba(0, 0, 0, 0.2);\n}\n.green-button[_ngcontent-%COMP%], button.green-button[_ngcontent-%COMP%], .checktext[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]    + span.green-button[_ngcontent-%COMP%], .green-button.blue-button[_ngcontent-%COMP%], .green-button.red-button[_ngcontent-%COMP%], input[type=button].green-button[_ngcontent-%COMP%], input[type=submit].green-button[_ngcontent-%COMP%], input[type=reset].green-button[_ngcontent-%COMP%] {\n  color: white;\n  font-weight: bold;\n  text-shadow: 0 0.1em 0.1em rgba(0, 0, 0, 0.7);\n  background: linear-gradient(to top, #19a187 30%, #1dbb9d 80%);\n  box-shadow: 0 0 0.5em rgba(25, 161, 135, 0.7), 0 0 transparent, inset 0 -5px 0 rgba(0, 0, 0, 0.05), inset 0 2px 0 rgba(255, 255, 255, 0.2);\n  border-radius: 6px 6px 8px 8px;\n  transition-property: box-shadow, border-radius;\n}\n.green-button.active[_ngcontent-%COMP%], .green-button[_ngcontent-%COMP%]:active, button.green-button.active[_ngcontent-%COMP%], button.green-button[_ngcontent-%COMP%]:active, input[type=button].green-button.active[_ngcontent-%COMP%], input[type=button].green-button[_ngcontent-%COMP%]:active, input[type=submit].green-button.active[_ngcontent-%COMP%], input[type=submit].green-button[_ngcontent-%COMP%]:active, input[type=reset].green-button.active[_ngcontent-%COMP%], input[type=reset].green-button[_ngcontent-%COMP%]:active {\n  background: linear-gradient(to top, #19a187 30%, #1dbb9d 80%);\n  border-radius: 6px;\n  box-shadow: 0 0 transparent, 0 0 transparent, inset 0 2px 5px 2px rgba(0, 0, 0, 0.2);\n}\n.blue-button[_ngcontent-%COMP%], .checktext[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + span[_ngcontent-%COMP%], button.blue-button[_ngcontent-%COMP%], .checktext[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]    + span.blue-button[_ngcontent-%COMP%], .blue-button.red-button[_ngcontent-%COMP%], .blue-button.green-button[_ngcontent-%COMP%], input[type=button].blue-button[_ngcontent-%COMP%], input[type=submit].blue-button[_ngcontent-%COMP%], input[type=reset].blue-button[_ngcontent-%COMP%] {\n  color: white;\n  font-weight: bold;\n  text-shadow: 0 0.1em 0.1em rgba(0, 0, 0, 0.7);\n  background: linear-gradient(to top, #367bf0 30%, #528ef2 80%);\n  box-shadow: 0 0 0.5em rgba(54, 123, 240, 0.7), 0 0 transparent, inset 0 -5px 0 rgba(0, 0, 0, 0.05), inset 0 2px 0 rgba(255, 255, 255, 0.2);\n  border-radius: 6px 6px 8px 8px;\n  transition-property: box-shadow, border-radius;\n}\n.blue-button.active[_ngcontent-%COMP%], .checktext[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + span.active[_ngcontent-%COMP%], .blue-button[_ngcontent-%COMP%]:active, .checktext[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + span[_ngcontent-%COMP%]:active, button.blue-button.active[_ngcontent-%COMP%], button.blue-button[_ngcontent-%COMP%]:active, input[type=button].blue-button.active[_ngcontent-%COMP%], input[type=button].blue-button[_ngcontent-%COMP%]:active, input[type=submit].blue-button.active[_ngcontent-%COMP%], input[type=submit].blue-button[_ngcontent-%COMP%]:active, input[type=reset].blue-button.active[_ngcontent-%COMP%], input[type=reset].blue-button[_ngcontent-%COMP%]:active {\n  background: linear-gradient(to top, #367bf0 30%, #528ef2 80%);\n  border-radius: 6px;\n  box-shadow: 0 0 transparent, 0 0 transparent, inset 0 2px 5px 2px rgba(0, 0, 0, 0.2);\n}\nlabel[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0.56em 0;\n}\nlabel[_ngcontent-%COMP%], label[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\na[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:link, a[_ngcontent-%COMP%]:visited, a[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%]:active {\n  font-weight: bold;\n  color: #367bf0;\n  font-weight: bold;\n  text-decoration: none;\n}\na[_ngcontent-%COMP%], a[_ngcontent-%COMP%]   *[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:link, a[_ngcontent-%COMP%]:link   *[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:visited, a[_ngcontent-%COMP%]:visited   *[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%]:active, a[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%]:active   *[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\n  line-height: 1.5em;\n}\nh1[_ngcontent-%COMP%] {\n  font-size: 4em;\n  font-weight: lighter;\n  margin: 0.7em 0;\n}\nh2[_ngcontent-%COMP%] {\n  font-size: 3em;\n  font-weight: lighter;\n  margin: 0.8em 0;\n}\nh3[_ngcontent-%COMP%] {\n  font-size: 2.5em;\n  font-weight: lighter;\n  margin: 0.9em 0;\n}\nh4[_ngcontent-%COMP%] {\n  font-size: 2em;\n  font-weight: lighter;\n  margin: 1em 0;\n}\nh5[_ngcontent-%COMP%] {\n  margin: 0.5em 0;\n  font-size: 1.2em;\n  font-weight: normal;\n}\nh6[_ngcontent-%COMP%] {\n  margin: 1em 0 1em 1.4em;\n  font-size: 1em;\n  font-weight: bold;\n}\ninput[type=checkbox][_ngcontent-%COMP%], input[type=radio][_ngcontent-%COMP%] {\n  font-size: 1em;\n  cursor: pointer;\n  height: 1.2em;\n  width: 1.2em;\n  margin: 0 0.3em;\n  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.2), -2px -2px 3px white, inset 1px 1px 2px rgba(0, 0, 0, 0.2), inset -1px -1px 2px white;\n  border: 0.15em solid #f2f3f7;\n  vertical-align: text-bottom;\n  transition-property: background, box-shadow;\n  transition-duration: 0.2s;\n}\ninput[type=checkbox][_ngcontent-%COMP%]:active, input[type=radio][_ngcontent-%COMP%]:active {\n  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.2), -2px -2px 3px white, inset 1px 1px 2px rgba(0, 0, 0, 0.2), inset -1px -1px 2px white, inset 0 0.1em 0.25em rgba(0, 0, 0, 0.2);\n}\ninput[type=checkbox][_ngcontent-%COMP%]:checked, input[type=radio][_ngcontent-%COMP%]:checked {\n  border-width: 0.1em;\n  border-color: #115fe2;\n  background-color: #367bf0;\n}\ninput[type=checkbox][_ngcontent-%COMP%] {\n  border-radius: 25%;\n}\ninput[type=checkbox][_ngcontent-%COMP%]:checked {\n  box-shadow: 0 0 0.5em rgba(54, 123, 240, 0.7), inset 0 -0.1em 0 rgba(0, 0, 0, 0.2), inset 0 0.1em 0.1em rgba(255, 255, 255, 0.2);\n}\ninput[type=radio][_ngcontent-%COMP%] {\n  border-radius: 100%;\n}\ninput[type=radio][_ngcontent-%COMP%]:checked {\n  box-shadow: 0 0 0.5em rgba(54, 123, 240, 0.7);\n  box-shadow: 0 0 0.5em rgba(54, 123, 240, 0.7), inset 0 0.12em 0.1em rgba(255, 255, 255, 0.25);\n  border-bottom-width: 0.15em;\n}\n.checktext[_ngcontent-%COMP%] {\n  width: auto;\n  margin: 0.5em;\n}\n.checktext[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  display: none;\n}\n.checktext[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]    + span[_ngcontent-%COMP%] {\n  font-weight: bold;\n  padding: 1em;\n  transition-delay: 0s;\n}\n.checktext[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + span[_ngcontent-%COMP%] {\n  padding: 1em;\n}\n.switch[_ngcontent-%COMP%] {\n  height: 2rem;\n  width: 8rem;\n  padding: 0;\n  position: relative;\n}\n.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  display: none;\n}\n.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]    + div[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  border-radius: 999px;\n  background: transparent;\n  transition-property: box-shadow, background-color;\n  transition-duration: 0.2s;\n  transition-delay: 0.2s;\n  box-shadow: 3px 3px 2px -2px rgba(0, 0, 0, 0.1), inset 2px 2px 2px 1px rgba(0, 0, 0, 0.1), inset -2px -2px 1px white;\n}\n.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]    + div[_ngcontent-%COMP%]::before {\n  content: \"\";\n  display: block;\n  height: calc(2rem + 4px);\n  width: calc(2rem + 4px);\n  border-radius: 100%;\n  border: solid white 3px;\n  background: #367bf0;\n  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2), inset 0 -1px 3px rgba(0, 0, 0, 0.1);\n  transform: translate(0, -6px);\n  transition: transform 0.2s;\n}\n.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + div[_ngcontent-%COMP%] {\n  background: #367bf0;\n  box-shadow: 0 0 0.5em rgba(54, 123, 240, 0.7), inset 0 2px 2px 2px rgba(0, 0, 0, 0.3), inset 0 0 transparent;\n}\n.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + div[_ngcontent-%COMP%]::before {\n  transform: translate(6rem, -6px);\n}\nhr[_ngcontent-%COMP%] {\n  width: 72%;\n  height: 8px;\n  float: right;\n  border: 0;\n}\ncode[_ngcontent-%COMP%], pre[_ngcontent-%COMP%] {\n  padding: 0.5em 1em;\n  border-radius: 4px;\n  overflow: auto;\n  box-shadow: 0 5px 30px 0 rgba(0, 0, 0, 0.05);\n}\ncode[_ngcontent-%COMP%] {\n  background: #e6e6e6;\n}\npre[_ngcontent-%COMP%] {\n  background: white;\n  margin: 4em 0;\n}\ncode[_ngcontent-%COMP%], code[_ngcontent-%COMP%]   *[_ngcontent-%COMP%], pre[_ngcontent-%COMP%], pre[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  line-height: 2em;\n  cursor: auto;\n  user-select: text;\n  -webkit-touch-callout: text;\n  -webkit-user-select: text;\n  -khtml-user-select: text;\n  -moz-user-select: text;\n  -ms-user-select: text;\n}\nblockquote[_ngcontent-%COMP%] {\n  background-color: white;\n  padding: 0.5em 1em;\n  border-radius: 4px;\n  box-shadow: 0 5px 30px 0 rgba(0, 0, 0, 0.05);\n  border-left: 6px solid #367bf0;\n}\n.button[_ngcontent-%COMP%] {\n  position: absolute;\n  border: black 2px solid;\n  background: var(--gsBackground);\n  text-align: center;\n  border-radius: 2px;\n}\n.start[_ngcontent-%COMP%] {\n  left: 4px;\n  width: calc(14% - 4px);\n  top: 6px;\n  bottom: 6px;\n}\n.previous[_ngcontent-%COMP%] {\n  left: calc(14% - 2px);\n  width: calc(22% - 2px);\n  top: 6px;\n  bottom: 6px;\n}\n.next[_ngcontent-%COMP%] {\n  width: calc(50% + 3px);\n  left: calc(36% - 6px);\n  top: 6px;\n  bottom: 6px;\n}\n.end[_ngcontent-%COMP%] {\n  width: calc(14% + 2px);\n  right: 4px;\n  top: 6px;\n  bottom: 6px;\n}\nsvg[_ngcontent-%COMP%] {\n  height: 98%;\n  width: height;\n}\n.feather[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  stroke: var(--boardBGDark);\n  stroke-width: 2;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n  fill: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMuc2NzcyIsInNyYy9hc3NldHMvc2Nzcy9tb2R1bGVzL19mb250cy5zY3NzIiwic3JjL2FwcC9vbGdhLWNvbnRyb2xzL29sZ2EtY29udHJvbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOEVBQUE7QUNBQTtFQUNJLHFCQUFBO0VBQ0EscUZBQUE7RUFFQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNDSjtBREVBO0VBQ0kscUJBQUE7RUFDQSwyRkFBQTtFQUVBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0RKO0FESUE7RUFDRSwrQkFBQTtFQUNBLHVHQUFBO0VBRUEsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDSEY7QURNQTtFQUNFLCtCQUFBO0VBQ0EsK0ZBQUE7RUFFQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNMRjtBRmNBLCtFQUFBO0FBTUEsK0VBQUE7QUFNQSwrRUFBQTtBQU1BLCtFQUFBO0FBS0EsZ0ZBQUE7QUFLQSwrRUFBQTtBQUtBLHlFQUFBO0FBa0JBO0VBQ0UsbUJBQUE7RUFDQSxtQkFBQTtFQUVBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUV6REY7QUY0REE7O0VBRUUsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7QUV6REY7QUY0REE7O0VBRUUsWUFBQTtFQUNBLGlCQUFBO0FFekRGO0FGNERBO0VBQ0Usc0JBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSwyQkFBQTtFQUNBLHlCQUFBO0VBQ0Esd0JBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0Esd0JBQUE7RUFDQSxtREFBQTtFQUNBLHdEQUFBO0VBQ0EsMkJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUV6REY7QUY0REE7O0VBRUUsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsMkJBQUE7RUFDQSx5QkFBQTtFQUNBLHdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtBRXpERjtBRjREQTs7RUFFRSx5QkE1RFM7RUE2RFQsY0E1RFM7RUE2RFQsU0FBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUV6REY7QUY0REE7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBQ0UsaUVBQUE7QUV6Q0Y7QUY0Q0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBR0UsbUJBQUE7RUFDQSxtQkE3RVM7QUVrRFg7QUY4QkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBQ0UsbUJBQUE7RUFDQSw2R0FBQTtFQUVBLG1CQUFBO0FFVEY7QUZZQTtFQUVFLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBN0ZTO0FFbUZYO0FGYUE7Ozs7O0VBS0UsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUVWRjtBRmFBOzs7Ozs7Ozs7Ozs7OztFQWNFLFNBQUE7RUFDQSxtQkExSFM7RUEySFQsY0ExSFM7RUEySFQsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLDJCQUFBO0VBQ0EseUJBQUE7RUFDQSx3QkFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSwyQkFBQTtBRVZGO0FGcUJBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7QUVuQkY7QUZzQkE7RUFHRSxlQUFBO0VBQ0EsMGZBQUE7RUFFQSxzQkFBQTtFQUNBLGtCQUFBO0FFdEJGO0FGeUJBOztFQUVFLFVBQUE7RUFDQSx3QkFBQTtFQUNBLGNBQUE7QUV0QkY7QUZ5QkE7O0VBRUUsWUFBQTtBRXRCRjtBRnlCQTs7RUFFRSxVQUFBO0VBQ0EsNEJBQUE7RUFBQSx3QkFBQTtFQUNBLGNBQUE7QUV0QkY7QUZ5QkE7O0VBRUUsWUFBQTtBRXRCRjtBRnlCQTs7OztFQUlFLGFBQUE7QUV0QkY7QUZ5QkE7Ozs7RUFNRSxTQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGlEQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtBRXhCRjtBRjBCRTs7Ozs7OztFQUlFLG9CQUFBO0VBQ0EseUJBQUE7QUVyQko7QUZ5QmE7Ozs7RUFNUCxZQUFBO0VBQ0EsaUJBQUE7RUFDQSw2Q0FBQTtFQUNBLDZEQUxZO0VBTVoseUlBQUE7RUFHQSw4QkFBQTtFQUNBLDhDQUFBO0FFM0JOO0FGNkJNOzs7Ozs7O0VBRUUsNkRBZFU7RUFlVixrQkFBQTtFQUNBLG9GQUFBO0FFdEJSO0FGRWE7Ozs7RUFNUCxZQUFBO0VBQ0EsaUJBQUE7RUFDQSw2Q0FBQTtFQUNBLDZEQUxZO0VBTVosMElBQUE7RUFHQSw4QkFBQTtFQUNBLDhDQUFBO0FFSE47QUZLTTs7Ozs7OztFQUVFLDZEQWRVO0VBZVYsa0JBQUE7RUFDQSxvRkFBQTtBRUVSO0FGdEJhOzs7O0VBTVAsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsNkNBQUE7RUFDQSw2REFMWTtFQU1aLDBJQUFBO0VBR0EsOEJBQUE7RUFDQSw4Q0FBQTtBRXFCTjtBRm5CTTs7Ozs7OztFQUVFLDZEQWRVO0VBZVYsa0JBQUE7RUFDQSxvRkFBQTtBRTBCUjtBRm5CQTtFQU1FLHFCQUFBO0VBQ0EsaUJBQUE7QUVpQkY7QUZ2QkU7RUFFRSxlQUFBO0FFd0JKO0FGaEJFO0VBU0UsaUJBQUE7RUFDQSxjQTNWRztFQTRWSCxpQkFBQTtFQUNBLHFCQUFBO0FFV0o7QUZuQkk7RUFFRSxlQUFBO0FFb0JOO0FGVkE7Ozs7OztFQU1FLGtCQUFBO0FFYUY7QUZWQTtFQUNFLGNBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7QUVhRjtBRlZBO0VBQ0UsY0FBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtBRWFGO0FGVkE7RUFDRSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtBRWFGO0FGVkE7RUFDRSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSxhQUFBO0FFYUY7QUZWQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FFYUY7QUZWQTtFQUNFLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FFYUY7QUZWQTs7RUFLRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdJQVBjO0VBUWQsNEJBQUE7RUFDQSwyQkFBQTtFQUNBLDJDQUFBO0VBQ0EseUJBQUE7QUVVRjtBRlJFOztFQUNFLHlLQUFBO0FFV0o7QUZSRTs7RUFDRSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBcmFHO0FFZ2JQO0FGUEE7RUFDRSxrQkFBQTtBRVVGO0FGUkU7RUFDRSxnSUFBQTtBRVVKO0FGTEE7RUFDRSxtQkFBQTtBRVFGO0FGTkU7RUFDRSw2Q0FyV1U7RUFzV1YsNkZBQUE7RUFDQSwyQkFBQTtBRVFKO0FGSkE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtBRU9GO0FGTEU7RUFDRSxhQUFBO0FFT0o7QUZMSTtFQUdFLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0FFS047QUZGSTtFQUdFLFlBQUE7QUVFTjtBRkdBO0VBTUUsWUFMVTtFQU1WLFdBTFM7RUFNVCxVQUFBO0VBQ0Esa0JBQUE7QUVMRjtBRk9FO0VBQ0UsYUFBQTtBRUxKO0FGT0k7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQ0EsdUJBQUE7RUFDQSxpREFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxvSEFBQTtBRUxOO0FGU007RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLHdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBcGZEO0VBcWZDLDhFQUFBO0VBRUEsNkJBQUE7RUFDQSwwQkFBQTtBRVJSO0FGWUk7RUFDRSxtQkE3ZkM7RUE4ZkQsNEdBQUE7QUVWTjtBRmFNO0VBQ0UsZ0NBQUE7QUVYUjtBRmlCQTtFQUVFLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7QUVmRjtBRmtCQTs7RUFFRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLDRDQUFBO0FFZkY7QUZrQkE7RUFDRSxtQkFBQTtBRWZGO0FGa0JBO0VBQ0UsaUJBQUE7RUFDQSxhQUFBO0FFZkY7QUZvQkU7OztFQUVFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSwyQkFBQTtFQUNBLHlCQUFBO0VBQ0Esd0JBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0FFaEJKO0FGb0JBO0VBQ0UsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNENBQUE7RUFDQSw4QkFBQTtBRWpCRjtBQTdpQkE7RUFDSSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsK0JGdUNXO0VFdENYLGtCQUFBO0VBQ0Esa0JBQUE7QUFnakJKO0FBNWlCQTtFQUNJLFNBQUE7RUFDQSxzQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0FBK2lCSjtBQTdpQkE7RUFDSSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7QUFnakJKO0FBOWlCQTtFQUNJLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtBQWlqQko7QUEvaUJBO0VBQ0ksc0JBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7QUFrakJKO0FBaGpCQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0FBbWpCSjtBQWpqQkE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDBCRnVDWTtFRXRDWixlQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLFVBQUE7QUFvakJGIiwiZmlsZSI6InNyYy9hcHAvb2xnYS1jb250cm9scy9vbGdhLWNvbnRyb2xzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuXG5AaW1wb3J0IFwiLi9hc3NldHMvc2Nzcy9tb2R1bGVzL19mb250cy5zY3NzXCI7XG4kZ2FtZXNjb3JlLWZhbWlseTogXCJGaWd1cmluZVN5bWJvbFQxXCI7XG4kZ2FtZXNjb3JlLWhpZ2hsaWdodDogIzU4NTg1OGZmO1xuJGdhbWVzY29yZS1mb3JlZ3JvdW5kOiB3aGl0ZTtcblxuJHJlZDogI2U0MzAzMDtcbiRncmVlbjogIzE5YTE4NztcbiRsaWdodC1ibHVlOiAjMDBmZmZmZmY7XG4kYmx1ZTogIzM2N2JmMDtcbiRkYXJrLWJsdWU6ICMyNjVhYjE7XG4kbWFyb29uOiAjYjgxNzRjO1xuJHB1cnBsZTogIzhjNDJhYjtcblxuLy8gTWFpbiBPTEdBIENvbG9yIEVsZW1lbnQgVmFyaWFibGVzXG4kdGV4dENvbG9yOiB2YXIoLS10ZXh0Q29sb3IpOyAvLyBNYWluIFRleHQgQ29sb3JcbiR0ZXh0Q29sb3JBdHRlbnRpb246IHZhcigtLXRleHRDb2xvckF0dGVudGlvbik7IC8vIEF0dGVudGlvbiB0ZXh0XG4kdGV4dENvbG9yUmVtb3ZlOiB2YXIoLS10ZXh0Q29sb3JSZW1vdmUpOyAvLyBSZW1vdmUvRGVsZXRlL0Nsb3NlXG4kdGV4dENvbG9yQWRkOiB2YXIoLS10ZXh0Q29sb3JBZGQpOyAvLyBBZGQvQ3JlYXRlL09wZW5cbiR0ZXh0Q29sb3JBY3RpdmU6IHZhcigtLXRleHRDb2xvckFjdGl2ZSk7IC8vIEFkZC9DcmVhdGUvT3BlblxuJGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQpOyAvLyBNYWluIGJhY2tncm91bmQgQ29sb3JcbiRiZ0NvbnRhaW5lcjogdmFyKC0tYmdDb250YWluZXIpOyAvLyBiYWNrZ3JvdW5kIG9mIENvbnRhaW5lcnNcbiRiZ01lbnU6IHZhcigtLWJnTWVudSk7IC8vIGJhY2tncm91bmQgb2YgTWVudXNcbiRiZ0l0ZW06IHZhcigtLWJnSXRlbSk7IC8vIGJhY2tncm91bmQgb2YgSXRlbXNcblxuLy8gQ29udGV4dCBNZW51XG4kYmdDb250ZXh0OiB2YXIoLS1iZ0NvbnRleHQpOyAvLyBiYWNrZ3JvdW5kIG9mIENvbnRleHQgTWVudVxuJHRleHRDb2xvckNvbnRleHQ6IHZhcigtLXRleHRDb2xvckNvbnRleHQpOyAvLyB0ZXh0IGNvbG9yIENvbnRleHQgTWVudVxuJGJvcmRlckNvbnRleHQ6IHZhcigtLWJvcmRlckNvbnRleHQpOyAvLyBib3JkZXIgQ29udGV4dCBNZW51XG4kb3ZlcmxheUNvbnRleHRCYWNrZ3JvdW5kOiB2YXIoXG4gIC0tb3ZlcmxheUNvbnRleHRCYWNrZ3JvdW5kXG4pOyAvLyBDb250ZXh0IE1lbnUgT3ZlcmxheSBiYWNrZ3JvdW5kIG1haW5cbiRvdmVybGF5Q29udGV4dEJhY2tncm91bmRHcmFkaWVudDogdmFyKFxuICAtLW92ZXJsYXlDb250ZXh0QmFja2dyb3VuZEdyYWRpZW50XG4pOyAvLyBDb250ZXh0IE1lbnUgYmFja2dyb3VuZCBncmFkaWVudFxuXG4kaXRlbTogdmFyKC0taXRlbSk7XG4kaXRlbS1jb250cmFzdDogdmFyKC0taXRlbS1jb250cmFzdCk7XG4kaXRlbS1iZzogdmFyKC0taXRlbS1iZyk7XG5cblxuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBDb250YWluZXIgVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiRnc1RleHRDb2xvcjogdmFyKC0tZ3NUZXh0Q29sb3IpOyAvLyBUZXh0IGNvbG9yIGZvciBnYW1lIHNjb3JlXG4kZ3NCYWNrZ3JvdW5kOiB2YXIoLS1nc0JhY2tncm91bmQpOyAvLyBiYWNrZ3JvdW5kIG9mIENvbnRhaW5lcnNcbiRnc0JvcmRlcjogdmFyKC0tZ3NCb3JkZXIpOyAvLyBiYWNrZ3JvdW5kIG9mIE1lbnVzXG4kZ3NUZXh0U2l6ZTogdmFyKC0tZ3NUZXh0U2l6ZSk7IC8vIGJhY2tncm91bmQgb2YgTWVudXNcblxuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBDb250YWluZXIgVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiRnc1RleHRDb2xvck1XOiB2YXIoLS1nc1RleHRDb2xvck1XKTsgLy8gVGV4dCBjb2xvciBmb3IgZ2FtZSBzY29yZVxuJGdzQmFja2dyb3VuZE1XOiB2YXIoLS1nc0JhY2tncm91bmRNVyk7IC8vIGJhY2tncm91bmQgb2YgQ29udGFpbmVyc1xuJGdzQm9yZGVyTVc6IHZhcigtLWdzQm9yZGVyTVcpOyAvLyBiYWNrZ3JvdW5kIG9mIE1lbnVzXG4kZ3NUZXh0U2l6ZU1XOiB2YXIoLS1nc1RleHRTaXplTVcpOyAvLyBiYWNrZ3JvdW5kIG9mIE1lbnVzXG5cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgQ29udGFpbmVyIFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4kZ3NUZXh0Q29sb3JNQjogdmFyKC0tZ3NUZXh0Q29sb3JNQik7IC8vIFRleHQgY29sb3IgZm9yIGdhbWUgc2NvcmVcbiRnc0JhY2tncm91bmRNQjogdmFyKC0tZ3NCYWNrZ3JvdW5kTUIpOyAvLyBiYWNrZ3JvdW5kIG9mIENvbnRhaW5lcnNcbiRnc0JvcmRlck1COiB2YXIoLS1nc0JvcmRlck1CKTsgLy8gYmFja2dyb3VuZCBvZiBNZW51c1xuJGdzVGV4dFNpemVNQjogdmFyKC0tZ3NUZXh0U2l6ZU1CKTsgLy8gYmFja2dyb3VuZCBvZiBNZW51c1xuXG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIEhpZ2hsaWdodCBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuJGdzVGV4dENvbG9ySEc6IHZhcigtLWdzVGV4dENvbG9ySEcpOyAvLyBUZXh0IGNvbG9yIGZvciBoaWdobGlnaHRcbiRnc0JhY2tncm91bmRIRzogdmFyKC0tZ3NCYWNrZ3JvdW5kSEcpOyAvLyBiYWNrZ3JvdW5kIGZvciBoaWdobGlnaHRcbiRnc0JvcmRlckhHOiB2YXIoLS1nc0JvcmRlckhHKTsgLy8gYm9yZGVyIGZvciBoaWdobGlnaHRcblxuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBBbm5vdGF0aW9uIFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4kZ3NUZXh0Q29sb3JBTjogdmFyKC0tZ3NUZXh0Q29sb3JBTik7IC8vIFRleHQgY29sb3IgZm9yIGhpZ2hsaWdodFxuJGdzQmFja2dyb3VuZEFOOiB2YXIoLS1nc0JhY2tncm91bmRBTik7IC8vIGJhY2tncm91bmQgZm9yIGhpZ2hsaWdodFxuJGdzQm9yZGVyQU46IHZhcigtLWdzQm9yZGVyQU4pOyAvLyBib3JkZXIgZm9yIGhpZ2hsaWdodFxuXG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIFZhcmlhdGlvbiBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuJGdzVGV4dENvbG9yVkE6IHZhcigtLWdzVGV4dENvbG9yVkEpOyAvLyBUZXh0IGNvbG9yIGZvciBoaWdobGlnaHRcbiRnc0JhY2tncm91bmRWQTogdmFyKC0tZ3NCYWNrZ3JvdW5kVkEpOyAvLyBiYWNrZ3JvdW5kIGZvciBoaWdobGlnaHRcbiRnc0JvcmRlclZBOiB2YXIoLS1nc0JvcmRlclZBKTsgLy8gYm9yZGVyIGZvciBoaWdobGlnaHRcblxuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBQbHkgVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiRnc1RleHRDb2xvclBDOiB2YXIoLS1nc1RleHRDb2xvclBDKTsgLy8gVGV4dCBjb2xvciBmb3IgZ2FtZSBzY29yZSBwbHlcbiRnc0JhY2tncm91bmRQQzogdmFyKC0tZ3NCYWNrZ3JvdW5kUEMpOyAvLyBiYWNrZ3JvdW5kIGZvciBnYW1lIHNjb3JlIHBseVxuJGdzQm9yZGVyUEM6IHZhcigtLWdzQm9yZGVyUEMpOyAvLyBib3JkZXIgZm9yIGdhbWUgc2NvcmUgcGx5XG5cbi8vIEJvYXJkIGNvbG9ycyByZWZsZWN0ZWQgb3V0XG4kYm9hcmRCR0Rhcms6IHZhcigtLWJvYXJkQkdEYXJrKTsgLy8gYm9yZGVyIGZvciBoaWdobGlnaHRcblxuLy8gR2VuZXJhbCBzdHVmZlxuJHRleHQtY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xuJGJnLW91dGVyOiB2YXIoLS1iZy1vdXRlcik7XG4kYmctaW5uZXI6IHZhcigtLWJnLWlubmVyKTtcblxuJGJnLWNvbG9yOiAjZjJmM2Y3O1xuJGZnLWNvbG9yOiAjMzgzYTQxO1xuXG4kZ2xvdy1zaGFkb3c6IDAgMCAwLjVlbSB0cmFuc3BhcmVudGl6ZSgkYmx1ZSwgMC4zKTtcblxuOnJvb3Qge1xuICAtLWJnLWNvbG9yOiAjeyRiZy1jb2xvcn07XG4gIC0tZmctY29sb3I6ICN7JGZnLWNvbG9yfTtcblxuICAtLXJlZDogI3skcmVkfTtcbiAgLS1ncmVlbjogI3skZ3JlZW59O1xuICAtLWJsdWU6ICN7JGJsdWV9O1xuICAtLWRhcmstYmx1ZTogI3skZGFyay1ibHVlfTtcbiAgLS1tYXJvb246ICN7JG1hcm9vbn07XG4gIC0tcHVycGxlOiAjeyRwdXJwbGV9O1xufVxuXG46Oi1tb3otZm9jdXMtaW5uZXIsXG46LW1vei1mb2N1c3Jpbmcge1xuICBib3JkZXI6IDA7XG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcbiAgdGV4dC1zaGFkb3c6IDAgMCAwICRmZy1jb2xvcjtcbn1cblxuOjpzZWxlY3Rpb24sXG46Oi1tb3otc2VsZWN0aW9uIHtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kOiBibGFjaztcbn1cblxuKiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApICFpbXBvcnRhbnQ7XG4gIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcbiAgY3Vyc29yOiBkZWZhdWx0O1xuICBsZXR0ZXItc3BhY2luZzogMDtcbn1cblxuLnNlbGVjdGFibGUsXG4uc2VsZWN0YWJsZSAqIHtcbiAgY3Vyc29yOiBhdXRvO1xuICB1c2VyLXNlbGVjdDogdGV4dDtcbiAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiB0ZXh0O1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiB0ZXh0O1xuICAta2h0bWwtdXNlci1zZWxlY3Q6IHRleHQ7XG4gIC1tb3otdXNlci1zZWxlY3Q6IHRleHQ7XG4gIC1tcy11c2VyLXNlbGVjdDogdGV4dDtcbn1cblxuaHRtbCxcbmJvZHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmctY29sb3I7XG4gIGNvbG9yOiAkZmctY29sb3I7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgZm9udC1zaXplOiAxMHB0O1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG4ud2l0aC1zaGFkb3cge1xuICBib3gtc2hhZG93OiA2cHggNnB4IDEwcHggdHJhbnNwYXJlbnRpemUoYmxhY2ssIDAuOSksIC02cHggLTZweCAxMHB4IHdoaXRlO1xufVxuXG4ub3V0c2V0IHtcbiAgQGV4dGVuZCAud2l0aC1zaGFkb3c7XG5cbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZDogJGJnLWNvbG9yO1xufVxuXG4uaW5zZXQge1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3gtc2hhZG93OiAwIDAgdHJhbnNwYXJlbnQsIDAgMCB0cmFuc3BhcmVudCxcbiAgICBpbnNldCAzcHggM3B4IDVweCB0cmFuc3BhcmVudGl6ZShibGFjaywgMC45KSwgaW5zZXQgLTNweCAtM3B4IDVweCB3aGl0ZTtcbiAgYmFja2dyb3VuZDogbGlnaHRlbigkYmctY29sb3IsIDIlKTtcbn1cblxuLnBhcGVyIHtcbiAgQGV4dGVuZCAub3V0c2V0O1xuICBwYWRkaW5nOiAxMHB4IDIwcHggMjBweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgbWluLWhlaWdodDogMTAwcHg7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG4gIGJhY2tncm91bmQ6ICRiZy1jb2xvcjtcbn1cblxuc2VjdGlvbixcbmFydGljbGUsXG4uc2VjdGlvbixcbi5hcnRpY2xlLFxuLnBhcGVyIHtcbiAgbGluZS1oZWlnaHQ6IDJlbTtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICB3b3JkLWJyZWFrOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAyZW07XG59XG5cbmlucHV0W3R5cGU9XCJ0ZXh0XCJdLFxuaW5wdXRbdHlwZT1cInNlYXJjaFwiXSxcbmlucHV0W3R5cGU9XCJ0ZWxcIl0sXG5pbnB1dFt0eXBlPVwidXJsXCJdLFxuaW5wdXRbdHlwZT1cImVtYWlsXCJdLFxuaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJdLFxuaW5wdXRbdHlwZT1cImRhdGVcIl0sXG5pbnB1dFt0eXBlPVwibW9udGhcIl0sXG5pbnB1dFt0eXBlPVwid2Vla1wiXSxcbmlucHV0W3R5cGU9XCJ0aW1lXCJdLFxuaW5wdXRbdHlwZT1cIm51bWJlclwiXSxcbmlucHV0W3R5cGU9XCJjb2xvclwiXSxcbnNlbGVjdCxcbnRleHRhcmVhIHtcbiAgYm9yZGVyOiAwO1xuICBiYWNrZ3JvdW5kOiAkYmctY29sb3I7XG4gIGNvbG9yOiAkZmctY29sb3I7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIHBhZGRpbmc6IDAgMS4yNWVtO1xuICBsaW5lLWhlaWdodDogMS4yNWVtO1xuICBoZWlnaHQ6IDMuNWVtO1xuICBtYXJnaW46IDEwcHggMDtcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIGN1cnNvcjogdGV4dDtcbiAgdXNlci1zZWxlY3Q6IHRleHQ7XG4gIC13ZWJraXQtdG91Y2gtY2FsbG91dDogdGV4dDtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogdGV4dDtcbiAgLWtodG1sLXVzZXItc2VsZWN0OiB0ZXh0O1xuICAtbW96LXVzZXItc2VsZWN0OiB0ZXh0O1xuICAtbXMtdXNlci1zZWxlY3Q6IHRleHQ7XG4gIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC4ycztcblxuICAmOm5vdChzZWxlY3QpIHtcbiAgICBAZXh0ZW5kIC5pbnNldDtcblxuICAgICY6Zm9jdXMge1xuICAgICAgQGV4dGVuZCAub3V0c2V0O1xuICAgIH1cbiAgfVxufVxuXG50ZXh0YXJlYSB7XG4gIGhlaWdodDogMzUwcHg7XG4gIHBhZGRpbmc6IDEuMjVlbTtcbn1cblxuc2VsZWN0IHtcbiAgQGV4dGVuZCAub3V0c2V0O1xuXG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZDogdXJsKGRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjJaWEp6YVc5dVBTSXhMakVpSUhacFpYZENiM2c5SWpBZ01DQXhPU0F4T1NJZ2VHMXNibk05SW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTHpJd01EQXZjM1puSWo0OFp5QjBjbUZ1YzJadmNtMDlJbTFoZEhKcGVDZ3VNRE0wSURBZ01DQXVNRE0wSUMwMkxqZ2dNUzQzWlMwMUtTSWdjM1I1YkdVOUltWnBiR3c2SXpkaU4yVTRZeUkrUEhCaGRHZ2daRDBpYlRRNE1DQXpORFF0TWpFeExUSXhNbU10TVRZdE1UWXROREV0TVRZdE5UY2dNQzB4TmlBeE5pMHhOaUEwTWlBd0lEVTNiREl6T0NBeU16bGpPQzQwSURndU5TQXlNQ0F4TWlBek1TQXhNaUF4TVNBd0xqVTJJREl5TFRNdU1pQXpNUzB4TW13eU16Z3RNak01WXpFMkxURTJJREUyTFRReUlEQXROVGR6TFRReExURTJMVFUzSURCNklpQnpkSGxzWlQwaVptbHNiRG9qTjJJM1pUaGpJaTgrUEM5blBqd3ZjM1puUGdvPSlcbiAgICBuby1yZXBlYXQgcmlnaHQgMWVtIGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiAxLjJlbTtcbiAgcGFkZGluZy1yaWdodDogM2VtO1xufVxuXG5pbnB1dDo6cGxhY2Vob2xkZXIsXG50ZXh0YXJlYTo6cGxhY2Vob2xkZXIge1xuICBvcGFjaXR5OiAxO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnM7XG4gIGNvbG9yOiBpbmhlcml0O1xufVxuXG5pbnB1dDpmb2N1czo6cGxhY2Vob2xkZXIsXG50ZXh0YXJlYTpmb2N1czo6cGxhY2Vob2xkZXIge1xuICBvcGFjaXR5OiAwLjI7XG59XG5cbmlucHV0Oi1tcy1pbnB1dC1wbGFjZWhvbGRlcixcbnRleHRhcmVhOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycztcbiAgY29sb3I6IGluaGVyaXQ7XG59XG5cbmlucHV0OmZvY3VzOi1tcy1pbnB1dC1wbGFjZWhvbGRlcixcbnRleHRhcmVhOmZvY3VzOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIG9wYWNpdHk6IDAuMjtcbn1cblxuaW5wdXRbdHlwZT1cInNlYXJjaFwiXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbixcbmlucHV0W3R5cGU9XCJzZWFyY2hcIl06Oi13ZWJraXQtc2VhcmNoLWNhbmNlbC1idXR0b24sXG5pbnB1dFt0eXBlPVwic2VhcmNoXCJdOjotd2Via2l0LXNlYXJjaC1yZXN1bHRzLWJ1dHRvbixcbmlucHV0W3R5cGU9XCJzZWFyY2hcIl06Oi13ZWJraXQtc2VhcmNoLXJlc3VsdHMtZGVjb3JhdGlvbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbmJ1dHRvbixcbmlucHV0W3R5cGU9XCJidXR0b25cIl0sXG5pbnB1dFt0eXBlPVwic3VibWl0XCJdLFxuaW5wdXRbdHlwZT1cInJlc2V0XCJdIHtcbiAgQGV4dGVuZCAub3V0c2V0O1xuXG4gIGJvcmRlcjogMDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIHBhZGRpbmc6IDEwcHggMDtcbiAgd2lkdGg6IDhlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiBpbmhlcml0O1xuICBmb250LXNpemU6IDEuMXJlbTtcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYmFja2dyb3VuZC1jb2xvciwgYm94LXNoYWRvdztcbiAgdHJhbnNpdGlvbi1kZWxheTogMC4ycztcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4ycztcblxuICAmLmFjdGl2ZSxcbiAgJjphY3RpdmUge1xuICAgIEBleHRlbmQgLmluc2V0O1xuXG4gICAgdHJhbnNpdGlvbi1kZWxheTogMHM7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4xcztcbiAgfVxuXG4gIEBlYWNoICRuYW1lLCAkY29sb3IgaW4gKFwicmVkXCI6ICRyZWQsIFwiZ3JlZW5cIjogJGdyZWVuLCBcImJsdWVcIjogJGJsdWUpIHtcbiAgICBAYXQtcm9vdCAuI3skbmFtZX0tYnV0dG9uLFxuICAgICAgJi4jeyRuYW1lfS1idXR0b24ge1xuICAgICAgQGV4dGVuZCBidXR0b247XG5cbiAgICAgICRfYmctaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsICRjb2xvciAzMCUsIGxpZ2h0ZW4oJGNvbG9yLCA2JSkgODAlKTtcblxuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICB0ZXh0LXNoYWRvdzogMCAwLjFlbSAwLjFlbSB0cmFuc3BhcmVudGl6ZShibGFjaywgMC4zKTtcbiAgICAgIGJhY2tncm91bmQ6ICRfYmctaW1hZ2U7XG4gICAgICBib3gtc2hhZG93OiAwIDAgMC41ZW0gdHJhbnNwYXJlbnRpemUoJGNvbG9yLCAwLjMpLCAwIDAgdHJhbnNwYXJlbnQsXG4gICAgICAgIGluc2V0IDAgLTVweCAwIHRyYW5zcGFyZW50aXplKGJsYWNrLCAwLjk1KSxcbiAgICAgICAgaW5zZXQgMCAycHggMCB0cmFuc3BhcmVudGl6ZSh3aGl0ZSwgMC44KTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDZweCA2cHggOHB4IDhweDtcbiAgICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGJveC1zaGFkb3csIGJvcmRlci1yYWRpdXM7XG5cbiAgICAgICYuYWN0aXZlLFxuICAgICAgJjphY3RpdmUge1xuICAgICAgICBiYWNrZ3JvdW5kOiAkX2JnLWltYWdlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCB0cmFuc3BhcmVudCwgMCAwIHRyYW5zcGFyZW50LFxuICAgICAgICAgIGluc2V0IDAgMnB4IDVweCAycHggdHJhbnNwYXJlbnRpemUoYmxhY2ssIDAuOCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmxhYmVsIHtcbiAgJixcbiAgJiAqIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cblxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDAuNTZlbSAwO1xufVxuXG5hIHtcbiAgJixcbiAgJjpsaW5rLFxuICAmOnZpc2l0ZWQsXG4gICY6aG92ZXIgJjphY3RpdmUge1xuICAgICYsXG4gICAgJiAqIHtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG5cbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogJGJsdWU7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB9XG59XG5cbmgxLFxuaDIsXG5oMyxcbmg0LFxuaDUsXG5oNiB7XG4gIGxpbmUtaGVpZ2h0OiAxLjVlbTtcbn1cblxuaDEge1xuICBmb250LXNpemU6IDRlbTtcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4gIG1hcmdpbjogMC43ZW0gMDtcbn1cblxuaDIge1xuICBmb250LXNpemU6IDNlbTtcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4gIG1hcmdpbjogMC44ZW0gMDtcbn1cblxuaDMge1xuICBmb250LXNpemU6IDIuNWVtO1xuICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgbWFyZ2luOiAwLjllbSAwO1xufVxuXG5oNCB7XG4gIGZvbnQtc2l6ZTogMmVtO1xuICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgbWFyZ2luOiAxZW0gMDtcbn1cblxuaDUge1xuICBtYXJnaW46IDAuNWVtIDA7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG5cbmg2IHtcbiAgbWFyZ2luOiAxZW0gMCAxZW0gMS40ZW07XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdLFxuaW5wdXRbdHlwZT1cInJhZGlvXCJdIHtcbiAgJF9ib3JkZXItd2lkdGg6IDAuMTVlbTtcbiAgJF9ib3gtc2hhZG93OiAycHggMnB4IDNweCB0cmFuc3BhcmVudGl6ZShibGFjaywgMC44KSwgLTJweCAtMnB4IDNweCB3aGl0ZSxcbiAgICBpbnNldCAxcHggMXB4IDJweCB0cmFuc3BhcmVudGl6ZShibGFjaywgMC44KSwgaW5zZXQgLTFweCAtMXB4IDJweCB3aGl0ZTtcbiAgZm9udC1zaXplOiAxZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgaGVpZ2h0OiAxLjJlbTtcbiAgd2lkdGg6IDEuMmVtO1xuICBtYXJnaW46IDAgMC4zZW07XG4gIGJveC1zaGFkb3c6ICRfYm94LXNoYWRvdztcbiAgYm9yZGVyOiAkX2JvcmRlci13aWR0aCBzb2xpZCAkYmctY29sb3I7XG4gIHZlcnRpY2FsLWFsaWduOiB0ZXh0LWJvdHRvbTtcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYmFja2dyb3VuZCwgYm94LXNoYWRvdztcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4ycztcblxuICAmOmFjdGl2ZSB7XG4gICAgYm94LXNoYWRvdzogJF9ib3gtc2hhZG93LCBpbnNldCAwIDAuMWVtIDAuMjVlbSB0cmFuc3BhcmVudGl6ZShibGFjaywgMC44KTtcbiAgfVxuXG4gICY6Y2hlY2tlZCB7XG4gICAgYm9yZGVyLXdpZHRoOiAwLjFlbTtcbiAgICBib3JkZXItY29sb3I6IGRhcmtlbigkYmx1ZSwgMTAlKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmx1ZTtcbiAgfVxufVxuXG5pbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0ge1xuICBib3JkZXItcmFkaXVzOiAyNSU7XG5cbiAgJjpjaGVja2VkIHtcbiAgICBib3gtc2hhZG93OiAkZ2xvdy1zaGFkb3csIGluc2V0IDAgLTAuMWVtIDAgdHJhbnNwYXJlbnRpemUoYmxhY2ssIDAuOCksXG4gICAgICBpbnNldCAwIDAuMWVtIDAuMWVtIHRyYW5zcGFyZW50aXplKHdoaXRlLCAwLjgpO1xuICB9XG59XG5cbmlucHV0W3R5cGU9XCJyYWRpb1wiXSB7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG5cbiAgJjpjaGVja2VkIHtcbiAgICBib3gtc2hhZG93OiAkZ2xvdy1zaGFkb3c7XG4gICAgYm94LXNoYWRvdzogJGdsb3ctc2hhZG93LCBpbnNldCAwIDAuMTJlbSAwLjFlbSB0cmFuc3BhcmVudGl6ZSh3aGl0ZSwgMC43NSk7XG4gICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMC4xNWVtO1xuICB9XG59XG5cbi5jaGVja3RleHQge1xuICB3aWR0aDogYXV0bztcbiAgbWFyZ2luOiAwLjVlbTtcblxuICBpbnB1dCB7XG4gICAgZGlzcGxheTogbm9uZTtcblxuICAgICsgc3BhbiB7XG4gICAgICBAZXh0ZW5kIGJ1dHRvbjtcblxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICBwYWRkaW5nOiAxZW07XG4gICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwcztcbiAgICB9XG5cbiAgICAmOmNoZWNrZWQgKyBzcGFuIHtcbiAgICAgIEBleHRlbmQgLmJsdWUtYnV0dG9uO1xuXG4gICAgICBwYWRkaW5nOiAxZW07XG4gICAgfVxuICB9XG59XG5cbi5zd2l0Y2gge1xuICAkX2hlaWdodDogMnJlbTtcbiAgJF93aWR0aDogOHJlbTtcbiAgJF9oYW5kbGUtd2lkdGg6ICRfaGVpZ2h0O1xuICAkX2hhbmRsZS10cmFuc2xhdGlvbjogJF93aWR0aCAtICRfaGFuZGxlLXdpZHRoO1xuXG4gIGhlaWdodDogJF9oZWlnaHQ7XG4gIHdpZHRoOiAkX3dpZHRoO1xuICBwYWRkaW5nOiAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgaW5wdXQge1xuICAgIGRpc3BsYXk6IG5vbmU7XG5cbiAgICArIGRpdiB7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBib3gtc2hhZG93LCBiYWNrZ3JvdW5kLWNvbG9yO1xuICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4ycztcbiAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuMnM7XG4gICAgICBib3gtc2hhZG93OiAzcHggM3B4IDJweCAtMnB4IHRyYW5zcGFyZW50aXplKGJsYWNrLCAwLjkpLFxuICAgICAgICBpbnNldCAycHggMnB4IDJweCAxcHggdHJhbnNwYXJlbnRpemUoYmxhY2ssIDAuOSksXG4gICAgICAgIGluc2V0IC0ycHggLTJweCAxcHggd2hpdGU7XG5cbiAgICAgICY6OmJlZm9yZSB7XG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBoZWlnaHQ6IGNhbGMoI3skX2hhbmRsZS13aWR0aH0gKyA0cHgpO1xuICAgICAgICB3aWR0aDogY2FsYygjeyRfaGFuZGxlLXdpZHRofSArIDRweCk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgICAgIGJvcmRlcjogc29saWQgd2hpdGUgM3B4O1xuICAgICAgICBiYWNrZ3JvdW5kOiAkYmx1ZTtcbiAgICAgICAgYm94LXNoYWRvdzogMCAzcHggMTBweCB0cmFuc3BhcmVudGl6ZShibGFjaywgMC44KSxcbiAgICAgICAgICBpbnNldCAwIC0xcHggM3B4IHRyYW5zcGFyZW50aXplKGJsYWNrLCAwLjkpO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNnB4KTtcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnM7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJjpjaGVja2VkICsgZGl2IHtcbiAgICAgIGJhY2tncm91bmQ6ICRibHVlO1xuICAgICAgYm94LXNoYWRvdzogJGdsb3ctc2hhZG93LCBpbnNldCAwIDJweCAycHggMnB4IHRyYW5zcGFyZW50aXplKGJsYWNrLCAwLjcpLFxuICAgICAgICBpbnNldCAwIDAgdHJhbnNwYXJlbnQ7XG5cbiAgICAgICY6OmJlZm9yZSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKCRfaGFuZGxlLXRyYW5zbGF0aW9uLCAtNnB4KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuaHIge1xuICBAZXh0ZW5kIC5pbnNldDtcbiAgd2lkdGg6IDcyJTtcbiAgaGVpZ2h0OiA4cHg7XG4gIGZsb2F0OiByaWdodDtcbiAgYm9yZGVyOiAwO1xufVxuXG5jb2RlLFxucHJlIHtcbiAgcGFkZGluZzogMC41ZW0gMWVtO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBib3gtc2hhZG93OiAwIDVweCAzMHB4IDAgdHJhbnNwYXJlbnRpemUoYmxhY2ssIDAuOTUpO1xufVxuXG5jb2RlIHtcbiAgYmFja2dyb3VuZDogI2U2ZTZlNjtcbn1cblxucHJlIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIG1hcmdpbjogNGVtIDA7XG59XG5cbmNvZGUsXG5wcmUge1xuICAmLFxuICAmICoge1xuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAyZW07XG4gICAgY3Vyc29yOiBhdXRvO1xuICAgIHVzZXItc2VsZWN0OiB0ZXh0O1xuICAgIC13ZWJraXQtdG91Y2gtY2FsbG91dDogdGV4dDtcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiB0ZXh0O1xuICAgIC1raHRtbC11c2VyLXNlbGVjdDogdGV4dDtcbiAgICAtbW96LXVzZXItc2VsZWN0OiB0ZXh0O1xuICAgIC1tcy11c2VyLXNlbGVjdDogdGV4dDtcbiAgfVxufVxuXG5ibG9ja3F1b3RlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDAuNWVtIDFlbTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3gtc2hhZG93OiAwIDVweCAzMHB4IDAgdHJhbnNwYXJlbnRpemUoYmxhY2ssIDAuOTUpO1xuICBib3JkZXItbGVmdDogNnB4IHNvbGlkICRibHVlO1xufVxuIiwiQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdDYXZlYXQnO1xuICAgIHNyYzogdXJsKCcuLi8uLi9mb250cy9Cb2xkL0NhdmVhdC1Cb2xkLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxuICAgICAgICB1cmwoJy4uLy4uL2ZvbnRzL0JvbGQvQ2F2ZWF0LUJvbGQud29mZicpIGZvcm1hdCgnd29mZicpO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LWRpc3BsYXk6IHN3YXA7XG59XG5cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnQ2F2ZWF0JztcbiAgICBzcmM6IHVybCgnLi4vLi4vZm9udHMvUmVndWxhci9DYXZlYXQtUmVndWxhci53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcbiAgICAgICAgdXJsKCcuLi8uLi9mb250cy9SZWd1bGFyL0NhdmVhdC1SZWd1bGFyLndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LWRpc3BsYXk6IHN3YXA7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ0ZpZ3VyaW5lU3ltYm9sVDEnO1xuICBzcmM6IHVybCgnLi4vLi4vZm9udHMvM3JkIFBhcnR5L0NoZXNzVmFyaWFudHMvRmlndXJpbmVTeW1ib2xUMUJvbGQud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXG4gICAgICB1cmwoJy4uLy4uL2ZvbnRzLzNyZCBQYXJ0eS9DaGVzc1ZhcmlhbnRzL0ZpZ3VyaW5lU3ltYm9sVDFCb2xkLndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdGaWd1cmluZVN5bWJvbFQxJztcbiAgc3JjOiB1cmwoJy4uLy4uL2ZvbnRzLzNyZCBQYXJ0eS9DaGVzc1ZhcmlhbnRzL0ZpZ3VyaW5lU3ltYm9sVDEud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXG4gICAgICB1cmwoJy4uLy4uL2ZvbnRzLzNyZCBQYXJ0eS9DaGVzc1ZhcmlhbnRzL0ZpZ3VyaW5lU3ltYm9sVDEud29mZicpIGZvcm1hdCgnd29mZicpO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbn1cblxuIiwiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkNhdmVhdFwiO1xuICBzcmM6IHVybChcIi4uLy4uL2ZvbnRzL0JvbGQvQ2F2ZWF0LUJvbGQud29mZjJcIikgZm9ybWF0KFwid29mZjJcIiksIHVybChcIi4uLy4uL2ZvbnRzL0JvbGQvQ2F2ZWF0LUJvbGQud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiQ2F2ZWF0XCI7XG4gIHNyYzogdXJsKFwiLi4vLi4vZm9udHMvUmVndWxhci9DYXZlYXQtUmVndWxhci53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKSwgdXJsKFwiLi4vLi4vZm9udHMvUmVndWxhci9DYXZlYXQtUmVndWxhci53b2ZmXCIpIGZvcm1hdChcIndvZmZcIik7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkZpZ3VyaW5lU3ltYm9sVDFcIjtcbiAgc3JjOiB1cmwoXCIuLi8uLi9mb250cy8zcmQgUGFydHkvQ2hlc3NWYXJpYW50cy9GaWd1cmluZVN5bWJvbFQxQm9sZC53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKSwgdXJsKFwiLi4vLi4vZm9udHMvM3JkIFBhcnR5L0NoZXNzVmFyaWFudHMvRmlndXJpbmVTeW1ib2xUMUJvbGQud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiRmlndXJpbmVTeW1ib2xUMVwiO1xuICBzcmM6IHVybChcIi4uLy4uL2ZvbnRzLzNyZCBQYXJ0eS9DaGVzc1ZhcmlhbnRzL0ZpZ3VyaW5lU3ltYm9sVDEud29mZjJcIikgZm9ybWF0KFwid29mZjJcIiksIHVybChcIi4uLy4uL2ZvbnRzLzNyZCBQYXJ0eS9DaGVzc1ZhcmlhbnRzL0ZpZ3VyaW5lU3ltYm9sVDEud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbn1cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgQ29udGFpbmVyIFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIENvbnRhaW5lciBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBDb250YWluZXIgVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgSGlnaGxpZ2h0IFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIEFubm90YXRpb24gVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgVmFyaWF0aW9uIFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIFBseSBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuOnJvb3Qge1xuICAtLWJnLWNvbG9yOiAjZjJmM2Y3O1xuICAtLWZnLWNvbG9yOiAjMzgzYTQxO1xuICAtLXJlZDogI2U0MzAzMDtcbiAgLS1ncmVlbjogIzE5YTE4NztcbiAgLS1ibHVlOiAjMzY3YmYwO1xuICAtLWRhcmstYmx1ZTogIzI2NWFiMTtcbiAgLS1tYXJvb246ICNiODE3NGM7XG4gIC0tcHVycGxlOiAjOGM0MmFiO1xufVxuXG46Oi1tb3otZm9jdXMtaW5uZXIsXG46LW1vei1mb2N1c3Jpbmcge1xuICBib3JkZXI6IDA7XG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcbiAgdGV4dC1zaGFkb3c6IDAgMCAwICMzODNhNDE7XG59XG5cbjo6c2VsZWN0aW9uLFxuOjotbW96LXNlbGVjdGlvbiB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZDogYmxhY2s7XG59XG5cbioge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBvdXRsaW5lOiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKSAhaW1wb3J0YW50O1xuICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XG4gIGN1cnNvcjogZGVmYXVsdDtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG59XG5cbi5zZWxlY3RhYmxlLFxuLnNlbGVjdGFibGUgKiB7XG4gIGN1cnNvcjogYXV0bztcbiAgdXNlci1zZWxlY3Q6IHRleHQ7XG4gIC13ZWJraXQtdG91Y2gtY2FsbG91dDogdGV4dDtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogdGV4dDtcbiAgLWtodG1sLXVzZXItc2VsZWN0OiB0ZXh0O1xuICAtbW96LXVzZXItc2VsZWN0OiB0ZXh0O1xuICAtbXMtdXNlci1zZWxlY3Q6IHRleHQ7XG59XG5cbmh0bWwsXG5ib2R5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjNmNztcbiAgY29sb3I6ICMzODNhNDE7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgZm9udC1zaXplOiAxMHB0O1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG4ud2l0aC1zaGFkb3csIC5vdXRzZXQsIGJ1dHRvbiwgLmNoZWNrdGV4dCBpbnB1dCArIHNwYW4sIC5ibHVlLWJ1dHRvbiwgLmNoZWNrdGV4dCBpbnB1dDpjaGVja2VkICsgc3BhbiwgYnV0dG9uLmJsdWUtYnV0dG9uLCAucmVkLWJ1dHRvbi5ibHVlLWJ1dHRvbiwgLmdyZWVuLWJ1dHRvbi5ibHVlLWJ1dHRvbiwgLmdyZWVuLWJ1dHRvbiwgYnV0dG9uLmdyZWVuLWJ1dHRvbiwgLnJlZC1idXR0b24uZ3JlZW4tYnV0dG9uLCAucmVkLWJ1dHRvbiwgYnV0dG9uLnJlZC1idXR0b24sXG5pbnB1dFt0eXBlPWJ1dHRvbl0sXG5pbnB1dFt0eXBlPXN1Ym1pdF0sXG5pbnB1dFt0eXBlPXJlc2V0XSwgc2VsZWN0LCBpbnB1dFt0eXBlPXRleHRdOm5vdChzZWxlY3QpOmZvY3VzLFxuaW5wdXRbdHlwZT1zZWFyY2hdOm5vdChzZWxlY3QpOmZvY3VzLFxuaW5wdXRbdHlwZT10ZWxdOm5vdChzZWxlY3QpOmZvY3VzLFxuaW5wdXRbdHlwZT11cmxdOm5vdChzZWxlY3QpOmZvY3VzLFxuaW5wdXRbdHlwZT1lbWFpbF06bm90KHNlbGVjdCk6Zm9jdXMsXG5pbnB1dFt0eXBlPXBhc3N3b3JkXTpub3Qoc2VsZWN0KTpmb2N1cyxcbmlucHV0W3R5cGU9ZGF0ZV06bm90KHNlbGVjdCk6Zm9jdXMsXG5pbnB1dFt0eXBlPW1vbnRoXTpub3Qoc2VsZWN0KTpmb2N1cyxcbmlucHV0W3R5cGU9d2Vla106bm90KHNlbGVjdCk6Zm9jdXMsXG5pbnB1dFt0eXBlPXRpbWVdOm5vdChzZWxlY3QpOmZvY3VzLFxuaW5wdXRbdHlwZT1udW1iZXJdOm5vdChzZWxlY3QpOmZvY3VzLFxuaW5wdXRbdHlwZT1jb2xvcl06bm90KHNlbGVjdCk6Zm9jdXMsXG5zZWxlY3Q6bm90KHNlbGVjdCk6Zm9jdXMsXG50ZXh0YXJlYTpub3Qoc2VsZWN0KTpmb2N1cywgLnBhcGVyIHtcbiAgYm94LXNoYWRvdzogNnB4IDZweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKSwgLTZweCAtNnB4IDEwcHggd2hpdGU7XG59XG5cbi5vdXRzZXQsIGJ1dHRvbiwgLmNoZWNrdGV4dCBpbnB1dCArIHNwYW4sIC5ibHVlLWJ1dHRvbiwgLmNoZWNrdGV4dCBpbnB1dDpjaGVja2VkICsgc3BhbiwgYnV0dG9uLmJsdWUtYnV0dG9uLCAucmVkLWJ1dHRvbi5ibHVlLWJ1dHRvbiwgLmdyZWVuLWJ1dHRvbi5ibHVlLWJ1dHRvbiwgLmdyZWVuLWJ1dHRvbiwgYnV0dG9uLmdyZWVuLWJ1dHRvbiwgLnJlZC1idXR0b24uZ3JlZW4tYnV0dG9uLCAucmVkLWJ1dHRvbiwgYnV0dG9uLnJlZC1idXR0b24sXG5pbnB1dFt0eXBlPWJ1dHRvbl0sXG5pbnB1dFt0eXBlPXN1Ym1pdF0sXG5pbnB1dFt0eXBlPXJlc2V0XSwgc2VsZWN0LCBpbnB1dFt0eXBlPXRleHRdOm5vdChzZWxlY3QpOmZvY3VzLFxuaW5wdXRbdHlwZT1zZWFyY2hdOm5vdChzZWxlY3QpOmZvY3VzLFxuaW5wdXRbdHlwZT10ZWxdOm5vdChzZWxlY3QpOmZvY3VzLFxuaW5wdXRbdHlwZT11cmxdOm5vdChzZWxlY3QpOmZvY3VzLFxuaW5wdXRbdHlwZT1lbWFpbF06bm90KHNlbGVjdCk6Zm9jdXMsXG5pbnB1dFt0eXBlPXBhc3N3b3JkXTpub3Qoc2VsZWN0KTpmb2N1cyxcbmlucHV0W3R5cGU9ZGF0ZV06bm90KHNlbGVjdCk6Zm9jdXMsXG5pbnB1dFt0eXBlPW1vbnRoXTpub3Qoc2VsZWN0KTpmb2N1cyxcbmlucHV0W3R5cGU9d2Vla106bm90KHNlbGVjdCk6Zm9jdXMsXG5pbnB1dFt0eXBlPXRpbWVdOm5vdChzZWxlY3QpOmZvY3VzLFxuaW5wdXRbdHlwZT1udW1iZXJdOm5vdChzZWxlY3QpOmZvY3VzLFxuaW5wdXRbdHlwZT1jb2xvcl06bm90KHNlbGVjdCk6Zm9jdXMsXG5zZWxlY3Q6bm90KHNlbGVjdCk6Zm9jdXMsXG50ZXh0YXJlYTpub3Qoc2VsZWN0KTpmb2N1cywgLnBhcGVyIHtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZDogI2YyZjNmNztcbn1cblxuLmluc2V0LCBociwgYnV0dG9uLmFjdGl2ZSwgLmNoZWNrdGV4dCBpbnB1dCArIHNwYW4uYWN0aXZlLCAuYWN0aXZlLmJsdWUtYnV0dG9uLCAuYWN0aXZlLmdyZWVuLWJ1dHRvbiwgLmFjdGl2ZS5yZWQtYnV0dG9uLCBidXR0b246YWN0aXZlLCAuY2hlY2t0ZXh0IGlucHV0ICsgc3BhbjphY3RpdmUsIC5ibHVlLWJ1dHRvbjphY3RpdmUsIC5ncmVlbi1idXR0b246YWN0aXZlLCAucmVkLWJ1dHRvbjphY3RpdmUsXG5pbnB1dFt0eXBlPWJ1dHRvbl0uYWN0aXZlLFxuaW5wdXRbdHlwZT1idXR0b25dOmFjdGl2ZSxcbmlucHV0W3R5cGU9c3VibWl0XS5hY3RpdmUsXG5pbnB1dFt0eXBlPXN1Ym1pdF06YWN0aXZlLFxuaW5wdXRbdHlwZT1yZXNldF0uYWN0aXZlLFxuaW5wdXRbdHlwZT1yZXNldF06YWN0aXZlLCBpbnB1dFt0eXBlPXRleHRdOm5vdChzZWxlY3QpLFxuaW5wdXRbdHlwZT1zZWFyY2hdOm5vdChzZWxlY3QpLFxuaW5wdXRbdHlwZT10ZWxdOm5vdChzZWxlY3QpLFxuaW5wdXRbdHlwZT11cmxdOm5vdChzZWxlY3QpLFxuaW5wdXRbdHlwZT1lbWFpbF06bm90KHNlbGVjdCksXG5pbnB1dFt0eXBlPXBhc3N3b3JkXTpub3Qoc2VsZWN0KSxcbmlucHV0W3R5cGU9ZGF0ZV06bm90KHNlbGVjdCksXG5pbnB1dFt0eXBlPW1vbnRoXTpub3Qoc2VsZWN0KSxcbmlucHV0W3R5cGU9d2Vla106bm90KHNlbGVjdCksXG5pbnB1dFt0eXBlPXRpbWVdOm5vdChzZWxlY3QpLFxuaW5wdXRbdHlwZT1udW1iZXJdOm5vdChzZWxlY3QpLFxuaW5wdXRbdHlwZT1jb2xvcl06bm90KHNlbGVjdCksXG5zZWxlY3Q6bm90KHNlbGVjdCksXG50ZXh0YXJlYTpub3Qoc2VsZWN0KSB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJveC1zaGFkb3c6IDAgMCB0cmFuc3BhcmVudCwgMCAwIHRyYW5zcGFyZW50LCBpbnNldCAzcHggM3B4IDVweCByZ2JhKDAsIDAsIDAsIDAuMSksIGluc2V0IC0zcHggLTNweCA1cHggd2hpdGU7XG4gIGJhY2tncm91bmQ6ICNmOGY5ZmI7XG59XG5cbi5wYXBlciB7XG4gIHBhZGRpbmc6IDEwcHggMjBweCAyMHB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBtaW4taGVpZ2h0OiAxMDBweDtcbiAgZm9udC1zaXplOiAxLjJlbTtcbiAgYmFja2dyb3VuZDogI2YyZjNmNztcbn1cblxuc2VjdGlvbixcbmFydGljbGUsXG4uc2VjdGlvbixcbi5hcnRpY2xlLFxuLnBhcGVyIHtcbiAgbGluZS1oZWlnaHQ6IDJlbTtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICB3b3JkLWJyZWFrOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAyZW07XG59XG5cbmlucHV0W3R5cGU9dGV4dF0sXG5pbnB1dFt0eXBlPXNlYXJjaF0sXG5pbnB1dFt0eXBlPXRlbF0sXG5pbnB1dFt0eXBlPXVybF0sXG5pbnB1dFt0eXBlPWVtYWlsXSxcbmlucHV0W3R5cGU9cGFzc3dvcmRdLFxuaW5wdXRbdHlwZT1kYXRlXSxcbmlucHV0W3R5cGU9bW9udGhdLFxuaW5wdXRbdHlwZT13ZWVrXSxcbmlucHV0W3R5cGU9dGltZV0sXG5pbnB1dFt0eXBlPW51bWJlcl0sXG5pbnB1dFt0eXBlPWNvbG9yXSxcbnNlbGVjdCxcbnRleHRhcmVhIHtcbiAgYm9yZGVyOiAwO1xuICBiYWNrZ3JvdW5kOiAjZjJmM2Y3O1xuICBjb2xvcjogIzM4M2E0MTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgcGFkZGluZzogMCAxLjI1ZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjI1ZW07XG4gIGhlaWdodDogMy41ZW07XG4gIG1hcmdpbjogMTBweCAwO1xuICBmb250LXNpemU6IDEuMXJlbTtcbiAgY3Vyc29yOiB0ZXh0O1xuICB1c2VyLXNlbGVjdDogdGV4dDtcbiAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiB0ZXh0O1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiB0ZXh0O1xuICAta2h0bWwtdXNlci1zZWxlY3Q6IHRleHQ7XG4gIC1tb3otdXNlci1zZWxlY3Q6IHRleHQ7XG4gIC1tcy11c2VyLXNlbGVjdDogdGV4dDtcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjJzO1xufVxudGV4dGFyZWEge1xuICBoZWlnaHQ6IDM1MHB4O1xuICBwYWRkaW5nOiAxLjI1ZW07XG59XG5cbnNlbGVjdCB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZDogdXJsKGRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjJaWEp6YVc5dVBTSXhMakVpSUhacFpYZENiM2c5SWpBZ01DQXhPU0F4T1NJZ2VHMXNibk05SW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTHpJd01EQXZjM1puSWo0OFp5QjBjbUZ1YzJadmNtMDlJbTFoZEhKcGVDZ3VNRE0wSURBZ01DQXVNRE0wSUMwMkxqZ2dNUzQzWlMwMUtTSWdjM1I1YkdVOUltWnBiR3c2SXpkaU4yVTRZeUkrUEhCaGRHZ2daRDBpYlRRNE1DQXpORFF0TWpFeExUSXhNbU10TVRZdE1UWXROREV0TVRZdE5UY2dNQzB4TmlBeE5pMHhOaUEwTWlBd0lEVTNiREl6T0NBeU16bGpPQzQwSURndU5TQXlNQ0F4TWlBek1TQXhNaUF4TVNBd0xqVTJJREl5TFRNdU1pQXpNUzB4TW13eU16Z3RNak01WXpFMkxURTJJREUyTFRReUlEQXROVGR6TFRReExURTJMVFUzSURCNklpQnpkSGxzWlQwaVptbHNiRG9qTjJJM1pUaGpJaTgrUEM5blBqd3ZjM1puUGdvPSkgbm8tcmVwZWF0IHJpZ2h0IDFlbSBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogMS4yZW07XG4gIHBhZGRpbmctcmlnaHQ6IDNlbTtcbn1cblxuaW5wdXQ6OnBsYWNlaG9sZGVyLFxudGV4dGFyZWE6OnBsYWNlaG9sZGVyIHtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzO1xuICBjb2xvcjogaW5oZXJpdDtcbn1cblxuaW5wdXQ6Zm9jdXM6OnBsYWNlaG9sZGVyLFxudGV4dGFyZWE6Zm9jdXM6OnBsYWNlaG9sZGVyIHtcbiAgb3BhY2l0eTogMC4yO1xufVxuXG5pbnB1dDotbXMtaW5wdXQtcGxhY2Vob2xkZXIsXG50ZXh0YXJlYTotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICBvcGFjaXR5OiAxO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnM7XG4gIGNvbG9yOiBpbmhlcml0O1xufVxuXG5pbnB1dDpmb2N1czotbXMtaW5wdXQtcGxhY2Vob2xkZXIsXG50ZXh0YXJlYTpmb2N1czotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICBvcGFjaXR5OiAwLjI7XG59XG5cbmlucHV0W3R5cGU9c2VhcmNoXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbixcbmlucHV0W3R5cGU9c2VhcmNoXTo6LXdlYmtpdC1zZWFyY2gtY2FuY2VsLWJ1dHRvbixcbmlucHV0W3R5cGU9c2VhcmNoXTo6LXdlYmtpdC1zZWFyY2gtcmVzdWx0cy1idXR0b24sXG5pbnB1dFt0eXBlPXNlYXJjaF06Oi13ZWJraXQtc2VhcmNoLXJlc3VsdHMtZGVjb3JhdGlvbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbmJ1dHRvbiwgLmNoZWNrdGV4dCBpbnB1dCArIHNwYW4sIC5ibHVlLWJ1dHRvbiwgLmNoZWNrdGV4dCBpbnB1dDpjaGVja2VkICsgc3BhbiwgYnV0dG9uLmJsdWUtYnV0dG9uLCAucmVkLWJ1dHRvbi5ibHVlLWJ1dHRvbiwgLmdyZWVuLWJ1dHRvbi5ibHVlLWJ1dHRvbiwgLmdyZWVuLWJ1dHRvbiwgYnV0dG9uLmdyZWVuLWJ1dHRvbiwgLnJlZC1idXR0b24uZ3JlZW4tYnV0dG9uLCAucmVkLWJ1dHRvbiwgYnV0dG9uLnJlZC1idXR0b24sXG5pbnB1dFt0eXBlPWJ1dHRvbl0sXG5pbnB1dFt0eXBlPXN1Ym1pdF0sXG5pbnB1dFt0eXBlPXJlc2V0XSB7XG4gIGJvcmRlcjogMDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIHBhZGRpbmc6IDEwcHggMDtcbiAgd2lkdGg6IDhlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiBpbmhlcml0O1xuICBmb250LXNpemU6IDEuMXJlbTtcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYmFja2dyb3VuZC1jb2xvciwgYm94LXNoYWRvdztcbiAgdHJhbnNpdGlvbi1kZWxheTogMC4ycztcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4ycztcbn1cbmJ1dHRvbi5hY3RpdmUsIC5jaGVja3RleHQgaW5wdXQgKyBzcGFuLmFjdGl2ZSwgLmFjdGl2ZS5ibHVlLWJ1dHRvbiwgLmFjdGl2ZS5ncmVlbi1idXR0b24sIC5hY3RpdmUucmVkLWJ1dHRvbiwgYnV0dG9uOmFjdGl2ZSwgLmNoZWNrdGV4dCBpbnB1dCArIHNwYW46YWN0aXZlLCAuYmx1ZS1idXR0b246YWN0aXZlLCAuZ3JlZW4tYnV0dG9uOmFjdGl2ZSwgLnJlZC1idXR0b246YWN0aXZlLFxuaW5wdXRbdHlwZT1idXR0b25dLmFjdGl2ZSxcbmlucHV0W3R5cGU9YnV0dG9uXTphY3RpdmUsXG5pbnB1dFt0eXBlPXN1Ym1pdF0uYWN0aXZlLFxuaW5wdXRbdHlwZT1zdWJtaXRdOmFjdGl2ZSxcbmlucHV0W3R5cGU9cmVzZXRdLmFjdGl2ZSxcbmlucHV0W3R5cGU9cmVzZXRdOmFjdGl2ZSB7XG4gIHRyYW5zaXRpb24tZGVsYXk6IDBzO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjFzO1xufVxuLnJlZC1idXR0b24sIGJ1dHRvbi5yZWQtYnV0dG9uLCAuY2hlY2t0ZXh0IGlucHV0ICsgc3Bhbi5yZWQtYnV0dG9uLCAucmVkLWJ1dHRvbi5ibHVlLWJ1dHRvbiwgLnJlZC1idXR0b24uZ3JlZW4tYnV0dG9uLFxuaW5wdXRbdHlwZT1idXR0b25dLnJlZC1idXR0b24sXG5pbnB1dFt0eXBlPXN1Ym1pdF0ucmVkLWJ1dHRvbixcbmlucHV0W3R5cGU9cmVzZXRdLnJlZC1idXR0b24ge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LXNoYWRvdzogMCAwLjFlbSAwLjFlbSByZ2JhKDAsIDAsIDAsIDAuNyk7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsICNlNDMwMzAgMzAlLCAjZTg0YjRiIDgwJSk7XG4gIGJveC1zaGFkb3c6IDAgMCAwLjVlbSByZ2JhKDIyOCwgNDgsIDQ4LCAwLjcpLCAwIDAgdHJhbnNwYXJlbnQsIGluc2V0IDAgLTVweCAwIHJnYmEoMCwgMCwgMCwgMC4wNSksIGluc2V0IDAgMnB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuICBib3JkZXItcmFkaXVzOiA2cHggNnB4IDhweCA4cHg7XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGJveC1zaGFkb3csIGJvcmRlci1yYWRpdXM7XG59XG4ucmVkLWJ1dHRvbi5hY3RpdmUsIC5yZWQtYnV0dG9uOmFjdGl2ZSwgYnV0dG9uLnJlZC1idXR0b24uYWN0aXZlLCBidXR0b24ucmVkLWJ1dHRvbjphY3RpdmUsXG5pbnB1dFt0eXBlPWJ1dHRvbl0ucmVkLWJ1dHRvbi5hY3RpdmUsXG5pbnB1dFt0eXBlPWJ1dHRvbl0ucmVkLWJ1dHRvbjphY3RpdmUsXG5pbnB1dFt0eXBlPXN1Ym1pdF0ucmVkLWJ1dHRvbi5hY3RpdmUsXG5pbnB1dFt0eXBlPXN1Ym1pdF0ucmVkLWJ1dHRvbjphY3RpdmUsXG5pbnB1dFt0eXBlPXJlc2V0XS5yZWQtYnV0dG9uLmFjdGl2ZSxcbmlucHV0W3R5cGU9cmVzZXRdLnJlZC1idXR0b246YWN0aXZlIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgI2U0MzAzMCAzMCUsICNlODRiNGIgODAlKTtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBib3gtc2hhZG93OiAwIDAgdHJhbnNwYXJlbnQsIDAgMCB0cmFuc3BhcmVudCwgaW5zZXQgMCAycHggNXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMik7XG59XG5cbi5ncmVlbi1idXR0b24sIGJ1dHRvbi5ncmVlbi1idXR0b24sIC5jaGVja3RleHQgaW5wdXQgKyBzcGFuLmdyZWVuLWJ1dHRvbiwgLmdyZWVuLWJ1dHRvbi5ibHVlLWJ1dHRvbiwgLmdyZWVuLWJ1dHRvbi5yZWQtYnV0dG9uLFxuaW5wdXRbdHlwZT1idXR0b25dLmdyZWVuLWJ1dHRvbixcbmlucHV0W3R5cGU9c3VibWl0XS5ncmVlbi1idXR0b24sXG5pbnB1dFt0eXBlPXJlc2V0XS5ncmVlbi1idXR0b24ge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LXNoYWRvdzogMCAwLjFlbSAwLjFlbSByZ2JhKDAsIDAsIDAsIDAuNyk7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsICMxOWExODcgMzAlLCAjMWRiYjlkIDgwJSk7XG4gIGJveC1zaGFkb3c6IDAgMCAwLjVlbSByZ2JhKDI1LCAxNjEsIDEzNSwgMC43KSwgMCAwIHRyYW5zcGFyZW50LCBpbnNldCAwIC01cHggMCByZ2JhKDAsIDAsIDAsIDAuMDUpLCBpbnNldCAwIDJweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbiAgYm9yZGVyLXJhZGl1czogNnB4IDZweCA4cHggOHB4O1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBib3gtc2hhZG93LCBib3JkZXItcmFkaXVzO1xufVxuLmdyZWVuLWJ1dHRvbi5hY3RpdmUsIC5ncmVlbi1idXR0b246YWN0aXZlLCBidXR0b24uZ3JlZW4tYnV0dG9uLmFjdGl2ZSwgYnV0dG9uLmdyZWVuLWJ1dHRvbjphY3RpdmUsXG5pbnB1dFt0eXBlPWJ1dHRvbl0uZ3JlZW4tYnV0dG9uLmFjdGl2ZSxcbmlucHV0W3R5cGU9YnV0dG9uXS5ncmVlbi1idXR0b246YWN0aXZlLFxuaW5wdXRbdHlwZT1zdWJtaXRdLmdyZWVuLWJ1dHRvbi5hY3RpdmUsXG5pbnB1dFt0eXBlPXN1Ym1pdF0uZ3JlZW4tYnV0dG9uOmFjdGl2ZSxcbmlucHV0W3R5cGU9cmVzZXRdLmdyZWVuLWJ1dHRvbi5hY3RpdmUsXG5pbnB1dFt0eXBlPXJlc2V0XS5ncmVlbi1idXR0b246YWN0aXZlIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgIzE5YTE4NyAzMCUsICMxZGJiOWQgODAlKTtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBib3gtc2hhZG93OiAwIDAgdHJhbnNwYXJlbnQsIDAgMCB0cmFuc3BhcmVudCwgaW5zZXQgMCAycHggNXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMik7XG59XG5cbi5ibHVlLWJ1dHRvbiwgLmNoZWNrdGV4dCBpbnB1dDpjaGVja2VkICsgc3BhbiwgYnV0dG9uLmJsdWUtYnV0dG9uLCAuY2hlY2t0ZXh0IGlucHV0ICsgc3Bhbi5ibHVlLWJ1dHRvbiwgLmJsdWUtYnV0dG9uLnJlZC1idXR0b24sIC5ibHVlLWJ1dHRvbi5ncmVlbi1idXR0b24sXG5pbnB1dFt0eXBlPWJ1dHRvbl0uYmx1ZS1idXR0b24sXG5pbnB1dFt0eXBlPXN1Ym1pdF0uYmx1ZS1idXR0b24sXG5pbnB1dFt0eXBlPXJlc2V0XS5ibHVlLWJ1dHRvbiB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtc2hhZG93OiAwIDAuMWVtIDAuMWVtIHJnYmEoMCwgMCwgMCwgMC43KTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgIzM2N2JmMCAzMCUsICM1MjhlZjIgODAlKTtcbiAgYm94LXNoYWRvdzogMCAwIDAuNWVtIHJnYmEoNTQsIDEyMywgMjQwLCAwLjcpLCAwIDAgdHJhbnNwYXJlbnQsIGluc2V0IDAgLTVweCAwIHJnYmEoMCwgMCwgMCwgMC4wNSksIGluc2V0IDAgMnB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuICBib3JkZXItcmFkaXVzOiA2cHggNnB4IDhweCA4cHg7XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGJveC1zaGFkb3csIGJvcmRlci1yYWRpdXM7XG59XG4uYmx1ZS1idXR0b24uYWN0aXZlLCAuY2hlY2t0ZXh0IGlucHV0OmNoZWNrZWQgKyBzcGFuLmFjdGl2ZSwgLmJsdWUtYnV0dG9uOmFjdGl2ZSwgLmNoZWNrdGV4dCBpbnB1dDpjaGVja2VkICsgc3BhbjphY3RpdmUsIGJ1dHRvbi5ibHVlLWJ1dHRvbi5hY3RpdmUsIGJ1dHRvbi5ibHVlLWJ1dHRvbjphY3RpdmUsXG5pbnB1dFt0eXBlPWJ1dHRvbl0uYmx1ZS1idXR0b24uYWN0aXZlLFxuaW5wdXRbdHlwZT1idXR0b25dLmJsdWUtYnV0dG9uOmFjdGl2ZSxcbmlucHV0W3R5cGU9c3VibWl0XS5ibHVlLWJ1dHRvbi5hY3RpdmUsXG5pbnB1dFt0eXBlPXN1Ym1pdF0uYmx1ZS1idXR0b246YWN0aXZlLFxuaW5wdXRbdHlwZT1yZXNldF0uYmx1ZS1idXR0b24uYWN0aXZlLFxuaW5wdXRbdHlwZT1yZXNldF0uYmx1ZS1idXR0b246YWN0aXZlIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgIzM2N2JmMCAzMCUsICM1MjhlZjIgODAlKTtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBib3gtc2hhZG93OiAwIDAgdHJhbnNwYXJlbnQsIDAgMCB0cmFuc3BhcmVudCwgaW5zZXQgMCAycHggNXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMik7XG59XG5cbmxhYmVsIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiAwLjU2ZW0gMDtcbn1cbmxhYmVsLCBsYWJlbCAqIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5hLCBhOmxpbmssIGE6dmlzaXRlZCwgYTpob3ZlciBhOmFjdGl2ZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzM2N2JmMDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbmEsIGEgKiwgYTpsaW5rLCBhOmxpbmsgKiwgYTp2aXNpdGVkLCBhOnZpc2l0ZWQgKiwgYTpob3ZlciBhOmFjdGl2ZSwgYTpob3ZlciBhOmFjdGl2ZSAqIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5oMSxcbmgyLFxuaDMsXG5oNCxcbmg1LFxuaDYge1xuICBsaW5lLWhlaWdodDogMS41ZW07XG59XG5cbmgxIHtcbiAgZm9udC1zaXplOiA0ZW07XG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuICBtYXJnaW46IDAuN2VtIDA7XG59XG5cbmgyIHtcbiAgZm9udC1zaXplOiAzZW07XG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuICBtYXJnaW46IDAuOGVtIDA7XG59XG5cbmgzIHtcbiAgZm9udC1zaXplOiAyLjVlbTtcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4gIG1hcmdpbjogMC45ZW0gMDtcbn1cblxuaDQge1xuICBmb250LXNpemU6IDJlbTtcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4gIG1hcmdpbjogMWVtIDA7XG59XG5cbmg1IHtcbiAgbWFyZ2luOiAwLjVlbSAwO1xuICBmb250LXNpemU6IDEuMmVtO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuXG5oNiB7XG4gIG1hcmdpbjogMWVtIDAgMWVtIDEuNGVtO1xuICBmb250LXNpemU6IDFlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbmlucHV0W3R5cGU9Y2hlY2tib3hdLFxuaW5wdXRbdHlwZT1yYWRpb10ge1xuICBmb250LXNpemU6IDFlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBoZWlnaHQ6IDEuMmVtO1xuICB3aWR0aDogMS4yZW07XG4gIG1hcmdpbjogMCAwLjNlbTtcbiAgYm94LXNoYWRvdzogMnB4IDJweCAzcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAtMnB4IC0ycHggM3B4IHdoaXRlLCBpbnNldCAxcHggMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMiksIGluc2V0IC0xcHggLTFweCAycHggd2hpdGU7XG4gIGJvcmRlcjogMC4xNWVtIHNvbGlkICNmMmYzZjc7XG4gIHZlcnRpY2FsLWFsaWduOiB0ZXh0LWJvdHRvbTtcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYmFja2dyb3VuZCwgYm94LXNoYWRvdztcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4ycztcbn1cbmlucHV0W3R5cGU9Y2hlY2tib3hdOmFjdGl2ZSxcbmlucHV0W3R5cGU9cmFkaW9dOmFjdGl2ZSB7XG4gIGJveC1zaGFkb3c6IDJweCAycHggM3B4IHJnYmEoMCwgMCwgMCwgMC4yKSwgLTJweCAtMnB4IDNweCB3aGl0ZSwgaW5zZXQgMXB4IDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjIpLCBpbnNldCAtMXB4IC0xcHggMnB4IHdoaXRlLCBpbnNldCAwIDAuMWVtIDAuMjVlbSByZ2JhKDAsIDAsIDAsIDAuMik7XG59XG5pbnB1dFt0eXBlPWNoZWNrYm94XTpjaGVja2VkLFxuaW5wdXRbdHlwZT1yYWRpb106Y2hlY2tlZCB7XG4gIGJvcmRlci13aWR0aDogMC4xZW07XG4gIGJvcmRlci1jb2xvcjogIzExNWZlMjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM2N2JmMDtcbn1cblxuaW5wdXRbdHlwZT1jaGVja2JveF0ge1xuICBib3JkZXItcmFkaXVzOiAyNSU7XG59XG5pbnB1dFt0eXBlPWNoZWNrYm94XTpjaGVja2VkIHtcbiAgYm94LXNoYWRvdzogMCAwIDAuNWVtIHJnYmEoNTQsIDEyMywgMjQwLCAwLjcpLCBpbnNldCAwIC0wLjFlbSAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgaW5zZXQgMCAwLjFlbSAwLjFlbSByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG59XG5cbmlucHV0W3R5cGU9cmFkaW9dIHtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbn1cbmlucHV0W3R5cGU9cmFkaW9dOmNoZWNrZWQge1xuICBib3gtc2hhZG93OiAwIDAgMC41ZW0gcmdiYSg1NCwgMTIzLCAyNDAsIDAuNyk7XG4gIGJveC1zaGFkb3c6IDAgMCAwLjVlbSByZ2JhKDU0LCAxMjMsIDI0MCwgMC43KSwgaW5zZXQgMCAwLjEyZW0gMC4xZW0gcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KTtcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogMC4xNWVtO1xufVxuXG4uY2hlY2t0ZXh0IHtcbiAgd2lkdGg6IGF1dG87XG4gIG1hcmdpbjogMC41ZW07XG59XG4uY2hlY2t0ZXh0IGlucHV0IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5jaGVja3RleHQgaW5wdXQgKyBzcGFuIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmc6IDFlbTtcbiAgdHJhbnNpdGlvbi1kZWxheTogMHM7XG59XG4uY2hlY2t0ZXh0IGlucHV0OmNoZWNrZWQgKyBzcGFuIHtcbiAgcGFkZGluZzogMWVtO1xufVxuXG4uc3dpdGNoIHtcbiAgaGVpZ2h0OiAycmVtO1xuICB3aWR0aDogOHJlbTtcbiAgcGFkZGluZzogMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnN3aXRjaCBpbnB1dCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uc3dpdGNoIGlucHV0ICsgZGl2IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogOTk5cHg7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBib3gtc2hhZG93LCBiYWNrZ3JvdW5kLWNvbG9yO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjJzO1xuICB0cmFuc2l0aW9uLWRlbGF5OiAwLjJzO1xuICBib3gtc2hhZG93OiAzcHggM3B4IDJweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4xKSwgaW5zZXQgMnB4IDJweCAycHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xKSwgaW5zZXQgLTJweCAtMnB4IDFweCB3aGl0ZTtcbn1cbi5zd2l0Y2ggaW5wdXQgKyBkaXY6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IGNhbGMoMnJlbSArIDRweCk7XG4gIHdpZHRoOiBjYWxjKDJyZW0gKyA0cHgpO1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBib3JkZXI6IHNvbGlkIHdoaXRlIDNweDtcbiAgYmFja2dyb3VuZDogIzM2N2JmMDtcbiAgYm94LXNoYWRvdzogMCAzcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMiksIGluc2V0IDAgLTFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNnB4KTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnM7XG59XG4uc3dpdGNoIGlucHV0OmNoZWNrZWQgKyBkaXYge1xuICBiYWNrZ3JvdW5kOiAjMzY3YmYwO1xuICBib3gtc2hhZG93OiAwIDAgMC41ZW0gcmdiYSg1NCwgMTIzLCAyNDAsIDAuNyksIGluc2V0IDAgMnB4IDJweCAycHggcmdiYSgwLCAwLCAwLCAwLjMpLCBpbnNldCAwIDAgdHJhbnNwYXJlbnQ7XG59XG4uc3dpdGNoIGlucHV0OmNoZWNrZWQgKyBkaXY6OmJlZm9yZSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDZyZW0sIC02cHgpO1xufVxuXG5ociB7XG4gIHdpZHRoOiA3MiU7XG4gIGhlaWdodDogOHB4O1xuICBmbG9hdDogcmlnaHQ7XG4gIGJvcmRlcjogMDtcbn1cblxuY29kZSxcbnByZSB7XG4gIHBhZGRpbmc6IDAuNWVtIDFlbTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBvdmVyZmxvdzogYXV0bztcbiAgYm94LXNoYWRvdzogMCA1cHggMzBweCAwIHJnYmEoMCwgMCwgMCwgMC4wNSk7XG59XG5cbmNvZGUge1xuICBiYWNrZ3JvdW5kOiAjZTZlNmU2O1xufVxuXG5wcmUge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgbWFyZ2luOiA0ZW0gMDtcbn1cblxuY29kZSwgY29kZSAqLFxucHJlLFxucHJlICoge1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgbGluZS1oZWlnaHQ6IDJlbTtcbiAgY3Vyc29yOiBhdXRvO1xuICB1c2VyLXNlbGVjdDogdGV4dDtcbiAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiB0ZXh0O1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiB0ZXh0O1xuICAta2h0bWwtdXNlci1zZWxlY3Q6IHRleHQ7XG4gIC1tb3otdXNlci1zZWxlY3Q6IHRleHQ7XG4gIC1tcy11c2VyLXNlbGVjdDogdGV4dDtcbn1cblxuYmxvY2txdW90ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAwLjVlbSAxZW07XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm94LXNoYWRvdzogMCA1cHggMzBweCAwIHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gIGJvcmRlci1sZWZ0OiA2cHggc29saWQgIzM2N2JmMDtcbn1cblxuLmJ1dHRvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm9yZGVyOiBibGFjayAycHggc29saWQ7XG4gIGJhY2tncm91bmQ6IHZhcigtLWdzQmFja2dyb3VuZCk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xufVxuXG4uc3RhcnQge1xuICBsZWZ0OiA0cHg7XG4gIHdpZHRoOiBjYWxjKDE0JSAtIDRweCk7XG4gIHRvcDogNnB4O1xuICBib3R0b206IDZweDtcbn1cblxuLnByZXZpb3VzIHtcbiAgbGVmdDogY2FsYygxNCUgLSAycHgpO1xuICB3aWR0aDogY2FsYygyMiUgLSAycHgpO1xuICB0b3A6IDZweDtcbiAgYm90dG9tOiA2cHg7XG59XG5cbi5uZXh0IHtcbiAgd2lkdGg6IGNhbGMoNTAlICsgM3B4KTtcbiAgbGVmdDogY2FsYygzNiUgLSA2cHgpO1xuICB0b3A6IDZweDtcbiAgYm90dG9tOiA2cHg7XG59XG5cbi5lbmQge1xuICB3aWR0aDogY2FsYygxNCUgKyAycHgpO1xuICByaWdodDogNHB4O1xuICB0b3A6IDZweDtcbiAgYm90dG9tOiA2cHg7XG59XG5cbnN2ZyB7XG4gIGhlaWdodDogOTglO1xuICB3aWR0aDogaGVpZ2h0O1xufVxuXG4uZmVhdGhlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHN0cm9rZTogdmFyKC0tYm9hcmRCR0RhcmspO1xuICBzdHJva2Utd2lkdGg6IDI7XG4gIHN0cm9rZS1saW5lY2FwOiByb3VuZDtcbiAgc3Ryb2tlLWxpbmVqb2luOiByb3VuZDtcbiAgZmlsbDogbm9uZTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OlgaControlsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'olga-controls',
                templateUrl: './olga-controls.component.html',
                styleUrls: ['./olga-controls.component.scss']
            }]
    }], function () { return [{ type: src_app_services_game_service__WEBPACK_IMPORTED_MODULE_1__["GameService"] }]; }, null); })();


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


class OlgaStatusComponent {
    constructor() { }
    ngOnInit() {
    }
}
OlgaStatusComponent.ɵfac = function OlgaStatusComponent_Factory(t) { return new (t || OlgaStatusComponent)(); };
OlgaStatusComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OlgaStatusComponent, selectors: [["olga-status"]], decls: 2, vars: 0, template: function OlgaStatusComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "olga-status works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29sZ2Etc3RhdHVzL29sZ2Etc3RhdHVzLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OlgaStatusComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'olga-status',
                templateUrl: './olga-status.component.html',
                styleUrls: ['./olga-status.component.scss']
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
/* harmony import */ var _canvas_chessboard_canvas_chessboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../canvas-chessboard/canvas-chessboard.component */ "./src/app/canvas-chessboard/canvas-chessboard.component.ts");




class ColorService {
    // Menu specific Colors
    // Title Colors
    constructor() {
        // DEFAULTING TO DARK COLOR PALLETE
        // Main Elements (background, sub containers, context menu)
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
        this.boardPieceSet = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('../../assets/images/pieces/merida/');
        // Game Score Variables
        this.gsTextColor = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('white');
        this.gsBackground = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('#353535');
        this.gsBorder = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('');
        this.gsTextSize = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('16px');
        // Game Score Highlight Colors
        this.gsTextColorHG = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('orange');
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
        this.propertyMap = new Map();
        this.propertyMap.set(this.gsTextColorPC, '--gsTextColorPC');
        this.propertyMap.set(this.gsBackgroundPC, '--gsBackgroundPC');
        this.propertyMap.set(this.gsBorderPC, '--gsBorderPC');
        this.propertyMap.set(this.gsTextColorVA, '--gsTextColorVA');
        this.propertyMap.set(this.gsBackgroundVA, '--gsBackgroundVA');
        this.propertyMap.set(this.gsBorderVA, '--gsBorderVA');
        this.propertyMap.set(this.gsTextColorAN, '--gsTextColorAN');
        this.propertyMap.set(this.gsBackgroundAN, '--gsBackgroundAN');
        this.propertyMap.set(this.gsBorderAN, '--gsBorderAN');
        this.propertyMap.set(this.gsTextColorHG, '--gsTextColorHG');
        this.propertyMap.set(this.gsBackgroundHG, '--gsBackgroundHG');
        this.propertyMap.set(this.gsBorderHG, '--gsBorderHG');
        this.propertyMap.set(this.gsTextColorHG, '--gsTextColorHG');
        this.propertyMap.set(this.gsBackgroundHG, '--gsBackgroundHG');
        this.propertyMap.set(this.gsBorderHG, '--gsBorderHG');
    }
    boardTheme() {
        return new _canvas_chessboard_canvas_chessboard_component__WEBPACK_IMPORTED_MODULE_2__["BoardTheme"](this.boardBGLight.value, this.boardBGDark.value, this.boardPieceSet.value);
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
        document.documentElement.style.setProperty('--itextColorAttention', this.textColorAttention);
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
        document.documentElement.style.setProperty('--gsTextColor', this.gsTextColor.value);
        document.documentElement.style.setProperty('--gsTextSize', this.gsTextSize.value);
        document.documentElement.style.setProperty('--gsBackground', this.gsBackground.value);
        document.documentElement.style.setProperty('--gsBorder', this.gsBorder.value);
        document.documentElement.style.setProperty('--boardBGDark', this.boardBGDark.value);
        this.propertyMap.forEach((value, key) => {
            document.documentElement.style.setProperty(value, key.value);
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
        }], boardPieceSet: [{
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
        }], propertyMap: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/services/game.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/game.service.ts ***!
  \******************************************/
/*! exports provided: GameScoreMove, GameScoreVariation, GameScoreAnnotation, GameScoreItem, ChessMove, ScoreMarker, ChessGame, GameScoreType, GameService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameScoreMove", function() { return GameScoreMove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameScoreVariation", function() { return GameScoreVariation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameScoreAnnotation", function() { return GameScoreAnnotation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameScoreItem", function() { return GameScoreItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChessMove", function() { return ChessMove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScoreMarker", function() { return ScoreMarker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChessGame", function() { return ChessGame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameScoreType", function() { return GameScoreType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameService", function() { return GameService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var kokopu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! kokopu */ "./node_modules/kokopu/index.js");
/* harmony import */ var kokopu__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(kokopu__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _canvas_chessboard_canvas_chessboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../canvas-chessboard/canvas-chessboard.component */ "./src/app/canvas-chessboard/canvas-chessboard.component.ts");
/* harmony import */ var _olga_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./olga.service */ "./src/app/services/olga.service.ts");

//@ts-ignore





// Game Score
class GameScoreMove {
    constructor(move = '', ply = 1) {
        this.move = '';
        this.ply = 1;
        this.move = move;
        this.ply = ply;
    }
}
class GameScoreVariation {
    constructor(variationData = []) { this.variationData = variationData; }
}
class GameScoreAnnotation {
    constructor(annotation = '') {
        this.annotation = '';
        this.annotation = annotation;
    }
}
class GameScoreItem {
    constructor(type, moveData = null, annotationData = null, variationData = null) {
        this.type = null;
        this.moveData = null;
        this.annotationData = null;
        this.variationData = null;
        this.current = false;
        this.type = type;
        this.moveData = moveData;
        this.annotationData = annotationData;
        this.variationData = variationData;
    }
}
class ChessMove {
    constructor() {
        this.to = 0;
        this.from = 0;
        this.role = '';
        this.color = '';
    }
}
class ScoreMarker {
}
class ChessGame {
    constructor(gameService, game) {
        this.gameService = gameService;
        this.game = game;
        this.position = null;
        this.currentNode = null;
        this.gameScore = [];
        this.score = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.gameVariations = [];
        this.variation = null;
        this.startNode = null;
        this.lastNode = null;
        this.isVariation = false;
        this.fen = '';
        if (game) {
            this.setGame(this.game);
        }
    }
    static compareKNode(left, right) {
        if (left !== null && right !== null && left !== undefined && right !== undefined) {
            const leftMove = left._info.moveDescriptor;
            const rightMove = right._info.moveDescriptor;
            return (leftMove.from() === rightMove.from() && leftMove.to() === rightMove.to());
        }
        return false;
    }
    onVariant() {
        return this.isVariation;
    }
    performPromotion(move) {
        if (move.promotion && move.promoteFunction) {
            //const moveDesc = 1
            const moveDesc = move.promoteFunction(move.promotion.role.toLowerCase());
            console.log(this.position.notation(moveDesc));
            if (this.position.play(moveDesc)) {
                const node = this.variation.play(moveDesc);
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
    makeMove(move, fromPGN = false) {
        var _a;
        if (this.currentNode) {
            const pgnMove = this.currentNode._info.moveDescriptor;
            const toSquare = _canvas_chessboard_canvas_chessboard_component__WEBPACK_IMPORTED_MODULE_3__["SquareNames"][move.to];
            const fromSquare = _canvas_chessboard_canvas_chessboard_component__WEBPACK_IMPORTED_MODULE_3__["SquareNames"][move.from];
            if (pgnMove && pgnMove.from() == fromSquare && pgnMove.to() == toSquare) {
                this.advance(false);
            }
            else {
                // look for an existing variant
                console.log('Normal Move: ' + pgnMove.from() + ' -> ' + pgnMove.to());
                const variations = this.currentNode.variations();
                let madeMove = false;
                this.isVariation = true;
                this.gameService.isVariant.next(this.isVariation);
                variations.forEach((variation) => {
                    const firstMove = variation.first();
                    if (firstMove && firstMove._info.moveDescriptor) {
                        const test = firstMove._info.moveDescriptor;
                        if (test.to() == toSquare && test.from() == fromSquare) {
                            this.startNode = firstMove;
                            this.position.play(test);
                            this.currentNode = firstMove.next();
                            if (this.currentNode == null) {
                                this.currentNode = this.lastNode = this.startNode;
                            }
                            madeMove = true;
                            console.log('Found Exisiting Variation');
                        }
                        else {
                            console.log('Variation checked: ' + test.from() + ' -> ' + test.to());
                        }
                    }
                });
                if (!madeMove) {
                    // Create a user variant
                    const legal = this.position.isMoveLegal(fromSquare, toSquare);
                    if (legal !== false) {
                        let variation = this.variation;
                        if (this.currentNode != this.lastNode) {
                            console.log('Variant Created: ' + fromSquare + ' -> ' + toSquare);
                            variation = this.currentNode.addVariation();
                            this.variation = variation;
                            this.startNode = null;
                            this.lastNode = null;
                        }
                        else {
                            console.log('Variant Continued: ' + fromSquare + ' -> ' + toSquare);
                        }
                        if (legal.status === 'promotion') {
                            move.promoteFunction = legal;
                            (_a = this.gameService.board.value) === null || _a === void 0 ? void 0 : _a.showPromotionDialog(move);
                        }
                        else {
                            const legalMove = legal();
                            if (this.position.play(legalMove)) {
                                const node = this.variation.play(legalMove);
                                if (!this.lastNode || this.lastNode == this.currentNode) {
                                    this.lastNode = node;
                                }
                                if (!this.startNode) {
                                    this.startNode = node;
                                }
                                this.currentNode = node;
                                this.currentNode._info.moveDescriptor = legalMove;
                            }
                        }
                    }
                }
            }
            console.log('Game is on a variant -> ' + (this.onVariant() ? 'Yes' : 'No'));
        }
    }
    getPosition() {
        return this.position;
    }
    setGame(game) {
        this.game = game;
        this.variation = this.game.mainVariation();
        this.gameVariations.push(this.variation);
        this.position = this.variation.initialPosition();
        this.fen = this.position.fen();
        this.currentNode = this.startNode = this.variation.first();
        if (this.gameService.board.value) {
            this.gameService.board.value.setBoardToGamePosition();
        }
        const items = [];
        let nextScore = this.startNode;
        let previous = null;
        while (nextScore) {
            let notation = nextScore.notation();
            const isHalfPly = (nextScore._positionBefore._impl.turn % 2 != 0);
            if (nextScore._info && nextScore._info.comment) {
                if (nextScore._info.variations.length) {
                    this.gameVariations = this.gameVariations.concat(nextScore._info.variations);
                }
                if (previous) {
                    items.push(new GameScoreItem(GameScoreType.GameScoreGroup, new GameScoreMove(previous.notation(), nextScore._fullMoveNumber)));
                    previous = null;
                }
                items.push(new GameScoreItem(GameScoreType.Annotation, new GameScoreMove(notation, nextScore._fullMoveNumber + (isHalfPly ? .5 : 0)), new GameScoreAnnotation(nextScore._info.comment)));
            }
            else {
                if (isHalfPly) {
                    if (previous) {
                        notation += ' ' + previous.notation();
                    }
                    items.push(new GameScoreItem(GameScoreType.GameScoreGroup, new GameScoreMove(notation, nextScore._fullMoveNumber)));
                    previous = null;
                }
                else {
                    previous = nextScore;
                }
            }
            nextScore = nextScore.next();
        }
        items[0].current = true;
        this.gameScore = items;
        this.score.next(this.gameScore);
    }
    // navigation
    advance(updateBoard = true) {
        if (this.position) {
            const next = this.currentNode.next();
            if (next && (this.position.isMoveLegal(this.currentNode._info.moveDescriptor.from(), this.currentNode._info.moveDescriptor.to()) !== false)) {
                this.position.play(this.currentNode._info.moveDescriptor);
                const move = new ChessMove();
                move.from = _canvas_chessboard_canvas_chessboard_component__WEBPACK_IMPORTED_MODULE_3__["SquareNames"].indexOf(this.currentNode._info.moveDescriptor.from());
                move.to = _canvas_chessboard_canvas_chessboard_component__WEBPACK_IMPORTED_MODULE_3__["SquareNames"].indexOf(this.currentNode._info.moveDescriptor.to());
                let newTo = move.to;
                let newFrom = move.from;
                if (this.currentNode._info.moveDescriptor._to >= 64) {
                    let rowFrom = Math.ceil(newFrom / 8);
                    let colFrom = newFrom % 8;
                    newFrom = (rowFrom * 8) - colFrom;
                    let rowTo = Math.floor(newTo / 8);
                    let colTo = newTo % 8;
                    newTo = (rowTo * 8) - colTo;
                    console.log(_canvas_chessboard_canvas_chessboard_component__WEBPACK_IMPORTED_MODULE_3__["SquareNames"][newFrom]);
                    console.log(_canvas_chessboard_canvas_chessboard_component__WEBPACK_IMPORTED_MODULE_3__["SquareNames"][newTo]);
                }
                if (updateBoard && this.gameService.board.value !== null) {
                    this.gameService.board.value.makeMove(move);
                }
                this.currentNode = next;
                return true;
            }
            // const items = this.gameScore;
            // const currentItem = items[previousIndex];
            // const nextItem = items[this.currentNode._fullMoveNumber];
            // this.position.items = items;
            // this._items.next(Object.assign({}, this.dataStore).items);
        }
        return false;
    }
    moveToStart() {
        while (this.previous()) {
        }
    }
    moveToEnd() {
        if (this.currentNode && this.position && this.currentNode.next() && this.gameService.board.value) {
            while (this.advance()) { }
        }
    }
    previous() {
        if (!this.isStartingPosition() && this.gameService.board.value) {
            if (!ChessGame.compareKNode(this.startNode, this.currentNode)) {
                let currentNode = this.startNode;
                while (currentNode.next() && !ChessGame.compareKNode(currentNode.next(), this.currentNode)) {
                    currentNode = currentNode.next();
                }
                if (this.gameService.board.value) {
                    const move = currentNode._info.moveDescriptor;
                    const unmove = new ChessMove();
                    unmove.to = _canvas_chessboard_canvas_chessboard_component__WEBPACK_IMPORTED_MODULE_3__["SquareNames"].indexOf(move.to());
                    unmove.from = _canvas_chessboard_canvas_chessboard_component__WEBPACK_IMPORTED_MODULE_3__["SquareNames"].indexOf(move.from());
                    if (move.isCapture()) {
                        const piece = move.capturedPiece();
                        const color = move.color();
                        if (piece && color) {
                            unmove.capture = { role: piece.toUpperCase(), color: color === 'w' ? 'b' : 'w' };
                        }
                    }
                    this.gameService.board.value.unMakeMove(unmove);
                }
                this.position = currentNode.positionBefore();
                this.lastNode = this.position._last;
                this.fen = this.position.fen();
                this.currentNode = currentNode;
                return true;
            }
        }
        return false;
    }
    isStartingPosition() {
        return ChessGame.compareKNode(this.variation.first(), this.currentNode);
    }
    isFinalPosition() {
        return (ChessGame.compareKNode(this.position.__last, this.currentNode) || this.currentNode.next() === null);
    }
    createScoreItems() {
        return [];
    }
}
var GameScoreType;
(function (GameScoreType) {
    GameScoreType[GameScoreType["GameScoreGroup"] = 121] = "GameScoreGroup";
    GameScoreType[GameScoreType["Variation"] = 222] = "Variation";
    GameScoreType[GameScoreType["Annotation"] = 323] = "Annotation";
    GameScoreType[GameScoreType["AnnotatedVariation"] = 424] = "AnnotatedVariation";
})(GameScoreType || (GameScoreType = {}));
class GameService {
    // Visual Settings
    constructor(olga) {
        this.olga = olga;
        this.figurineNotation = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this._items = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.scoreData = { items: [] };
        this.currentScore = this._items.asObservable();
        this._fen = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]('');
        this.fen = this._fen.asObservable();
        this._games = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.gamesData = { games: [] };
        this.games = this._games.asObservable();
        this.state = null;
        // current
        this._game = null;
        this.game = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this._board = null;
        this.board = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this._score = null;
        this.score = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.isVariant = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
    }
    parsePGN(pgn) {
        const gameCount = 1;
        if (gameCount == 1) {
            this.state = Object(kokopu__WEBPACK_IMPORTED_MODULE_1__["pgnRead"])(pgn);
            const first = this.state.game(0);
            const game = new ChessGame(this);
            this.gamesData.games.push(game);
            this._games.next(Object.assign({}, this.gamesData).games);
            this._game = game;
            this.game.next(game);
            this._game.setGame(first);
            if (this._game.score.value !== null) {
                this._items.next(this._game.score.value);
            }
        }
    }
    makeMove(move, fromPGN = false) {
        // if (!fromPGN) {
        //   this._game?.moveOrCreateVariant(move, fromPGN);
        // }
        // this.attachedBoards.forEach((board) => {
        //   board.makeMove(move);
        // })
    }
    moveToStart() {
        if (this._game) {
            this._game.moveToStart();
        }
    }
    advance() {
        if (this._game && !this._game.isFinalPosition()) {
            this._game.advance();
        }
    }
    previous() {
        if (this._game) {
            this._game.previous();
        }
    }
    moveToEnd() {
        if (this._game && !this._game.isFinalPosition()) {
            this._game.moveToEnd();
        }
    }
    loadPGN(pgn) {
        // parse potential multiple games
        console.log('Loading PGN: ');
        console.log(pgn);
        this.gamesData.games = [];
        this._games.next([]);
        this.parsePGN(pgn);
    }
    clearItems() {
        this.scoreData.items = [];
        this._items.next(Object.assign({}, this.scoreData).items);
    }
    typeToString(type) {
        return GameScoreType[type];
    }
    selectGame(index) {
        if (index >= 0 && index <= this.gamesData.games.length) {
            this._game = this.gamesData.games[index];
            this.scoreData.items = this._game.createScoreItems();
            this.game.next(this._game);
        }
    }
    attachBoard(board) {
        this._board = board;
        this.board.next(board);
    }
    attachScore(score) {
        this._score = score;
        this.score.next(score);
    }
}
GameService.ɵfac = function GameService_Factory(t) { return new (t || GameService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_olga_service__WEBPACK_IMPORTED_MODULE_4__["OlgaService"])); };
GameService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GameService, factory: GameService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GameService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _olga_service__WEBPACK_IMPORTED_MODULE_4__["OlgaService"] }]; }, { figurineNotation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }, {
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
        this.boardSize = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](480);
        this.scoreSize = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](340);
        this.olga = null;
        this.appContainer = null;
        this.gameScore = null;
        this.board = null;
        this.resizeElement = null;
        this.preferredLayout = 'auto';
        this.preferredRatio = .3;
        this.boardRatio = 1;
    }
    resizeToLandscape(width, height, gsSize) {
        var _a, _b;
        if (this.olga && this.olga.gameScoreElement && this.olga.controlsElement) {
            let boardSize = 0;
            const titleSize = 80;
            if (this.resizeElement) {
                this.resizeElement.style.left = "-2px";
                this.resizeElement.style.top = "calc(50% - 3em)";
                this.resizeElement.style.width = "1.2em";
                this.resizeElement.style.height = "6em";
            }
            if (!gsSize) {
                let padding = width * 0.05;
                if (padding >= 16 || padding <= 10) {
                    padding = 12;
                }
                let boardSize = Math.floor((1 - this.preferredRatio) * width);
                if (boardSize > height) {
                    boardSize = height - (padding / 2);
                }
                let controlsHeight = boardSize / 7;
                controlsHeight = controlsHeight > 64 ? 64 : controlsHeight;
                let gsWidth = (width - boardSize) - padding;
                (_a = this.board) === null || _a === void 0 ? void 0 : _a.setSize(boardSize);
                let gsHeight = (boardSize - 200) - controlsHeight;
                // game score
                this.olga.gameScoreElement.style.top = titleSize + 2 + 'px'; // 64 represents the controls ux
                this.olga.gameScoreElement.style.width = gsWidth + 'px';
                this.olga.gameScoreElement.style.height = gsHeight + 'px';
                // controls
                this.olga.controlsElement.style.left = '';
                this.olga.controlsElement.style.top = (gsHeight + titleSize - 8).toString() + 'px'; // 64 represents the 
                this.olga.controlsElement.style.width = gsWidth.toString() + 'px';
                this.olga.controlsElement.style.height = controlsHeight + 'px';
                this.olga.controlsElement.style.right = '1px';
                this.scoreSize.next(gsWidth);
            }
            else {
                let padding = width * 0.05;
                if (padding >= 16 || padding <= 10) {
                    padding = 12;
                }
                const widthAvailable = window.innerWidth - (gsSize + padding);
                let boardSize = Math.floor(widthAvailable / 8) * 8;
                if (boardSize >= window.innerHeight) {
                    boardSize = Math.floor((window.innerHeight - 16) / 8) * 8;
                    gsSize = window.innerWidth - boardSize + padding;
                }
                (_b = this.board) === null || _b === void 0 ? void 0 : _b.setSize(boardSize);
                let controlsHeight = boardSize / 7;
                controlsHeight = controlsHeight > 64 ? 64 : controlsHeight;
                let gsHeight = (boardSize - 200) - controlsHeight;
                // game score
                this.olga.gameScoreElement.style.top = titleSize + 2 + 'px'; // 64 represents the controls ux
                this.olga.gameScoreElement.style.width = gsSize + 'px';
                this.olga.gameScoreElement.style.height = gsHeight + 'px';
                // controls
                this.olga.controlsElement.style.left = '';
                this.olga.controlsElement.style.top = (gsHeight + titleSize - 8).toString() + 'px'; // 64 represents the 
                this.olga.controlsElement.style.width = gsSize.toString() + 'px';
                this.olga.controlsElement.style.height = controlsHeight + 'px';
                this.olga.controlsElement.style.right = '1px';
                this.scoreSize.next(gsSize);
            }
            this.boardSize.next(boardSize);
        }
    }
    resizeToPortrait(width, height, gsSize) {
        var _a;
        if (this.olga) {
            const boardSize = (width * this.boardRatio) - 6;
            (_a = this.board) === null || _a === void 0 ? void 0 : _a.setSize(boardSize);
            if (this.olga.boardElement) {
                this.olga.boardElement.style.left = (width * ((1 - this.boardRatio) / 2)) + 'px';
            }
            if (this.olga.gameScoreElement) {
                this.olga.gameScoreElement.style.top = (boardSize + 74 + 'px'); // 64 represents the controls ux
                this.olga.gameScoreElement.style.width = '100%';
                this.olga.gameScoreElement.style.height = (boardSize / 3 > 425 ? 425 : boardSize / 3).toString() + 'px';
            }
            if (this.olga.controlsElement) {
                this.olga.controlsElement.style.top = (boardSize + 2).toString() + 'px'; // 64 represents the controls ux
                this.olga.controlsElement.style.width = '80%';
                this.olga.controlsElement.style.left = '10%';
                this.olga.controlsElement.style.height = '64px';
            }
            if (this.resizeElement) {
                this.resizeElement.style.left = "calc(50% - 3em)";
                this.resizeElement.style.top = "-4px";
                this.resizeElement.style.width = "6em";
                this.resizeElement.style.height = "1.2em";
            }
        }
    }
    initializeLayout(olga, autoResize = true) {
        this.olga = olga;
        this.gameScore = olga.gameScoreComponent;
        this.board = olga.canvasBoardComponent;
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
    onSliderTouch(event) {
        if (event.touches.length > 0 && this.landscapeOrientation && event && event.touches[0].clientX > 64) {
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
            if (!this.landscapeOrientation && event && event.touches[0].clientY > 64) {
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
                                console.log('GSSize vertical slider: ' + gsSize);
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
                                console.log('GSSize vertical slider: ' + gsSize);
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



class OlgaService {
    constructor() {
        this.annotations = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this.showingPly = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](true);
        this.showingHalfPly = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this.variation = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
    }
}
OlgaService.ɵfac = function OlgaService_Factory(t) { return new (t || OlgaService)(); };
OlgaService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: OlgaService, factory: OlgaService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OlgaService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, { annotations: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], showingPly: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], showingHalfPly: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], variation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/settings/settings-board/settings-board.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/settings/settings-board/settings-board.component.ts ***!
  \*********************************************************************/
/*! exports provided: SettingsBoardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsBoardComponent", function() { return SettingsBoardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class SettingsBoardComponent {
    constructor() { }
    ngOnInit() {
    }
}
SettingsBoardComponent.ɵfac = function SettingsBoardComponent_Factory(t) { return new (t || SettingsBoardComponent)(); };
SettingsBoardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SettingsBoardComponent, selectors: [["app-settings-board"]], decls: 2, vars: 0, template: function SettingsBoardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "settings-board works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NldHRpbmdzL3NldHRpbmdzLWJvYXJkL3NldHRpbmdzLWJvYXJkLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SettingsBoardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-settings-board',
                templateUrl: './settings-board.component.html',
                styleUrls: ['./settings-board.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/settings/settings-gamescore/settings-gamescore.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/settings/settings-gamescore/settings-gamescore.component.ts ***!
  \*****************************************************************************/
/*! exports provided: GamescoreSettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GamescoreSettingsComponent", function() { return GamescoreSettingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_olga_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/olga.service */ "./src/app/services/olga.service.ts");
/* harmony import */ var _services_game_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/game.service */ "./src/app/services/game.service.ts");
/* harmony import */ var _services_colors_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/colors.service */ "./src/app/services/colors.service.ts");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");







const _c0 = ["lightBGHandle"];
const _c1 = ["darkBGHandle"];
class GamescoreSettingsComponent {
    constructor(olga, gameService, colorService) {
        this.olga = olga;
        this.gameService = gameService;
        this.colorService = colorService;
        this.lightBGHandle = null;
        this.darkBGHandle = null;
    }
    ngOnInit() { }
    ngAfterViewInit() {
        if (this.lightBGHandle) {
            this.lightBGHandle.nativeElement.value = this.colorService.boardBGLight.value;
        }
        if (this.darkBGHandle) {
            this.darkBGHandle.nativeElement.value = this.colorService.boardBGDark.value;
        }
    }
}
GamescoreSettingsComponent.ɵfac = function GamescoreSettingsComponent_Factory(t) { return new (t || GamescoreSettingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_olga_service__WEBPACK_IMPORTED_MODULE_1__["OlgaService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_game_service__WEBPACK_IMPORTED_MODULE_2__["GameService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_colors_service__WEBPACK_IMPORTED_MODULE_3__["ColorService"])); };
GamescoreSettingsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GamescoreSettingsComponent, selectors: [["app-gamescore-settings"]], viewQuery: function GamescoreSettingsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c1, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.lightBGHandle = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.darkBGHandle = _t.first);
    } }, decls: 15, vars: 0, consts: [["matInput", "", "type", "color", "id", "lightColor", 1, "color-input", 3, "input"], ["lightBGHandle", ""], ["matInput", "", "type", "color", "id", "darkColor", 1, "color-input", 3, "input"], ["darkBGHandle", ""]], template: function GamescoreSettingsComponent_Template(rf, ctx) { if (rf & 1) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Colors ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Settings ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Light Background");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function GamescoreSettingsComponent_Template_input_input_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9); return ctx.colorService.boardBGLight.next(_r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Dark Background");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function GamescoreSettingsComponent_Template_input_input_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13); return ctx.colorService.boardBGDark.next(_r1.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardContent"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"]], styles: ["@font-face {\n  font-family: \"Caveat\";\n  src: url('Caveat-Bold.woff2') format(\"woff2\"), url('Caveat-Bold.woff') format(\"woff\");\n  font-weight: bold;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"Caveat\";\n  src: url('Caveat-Regular.woff2') format(\"woff2\"), url('Caveat-Regular.woff') format(\"woff\");\n  font-weight: 600;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"FigurineSymbolT1\";\n  src: url('FigurineSymbolT1Bold.woff2') format(\"woff2\"), url('FigurineSymbolT1Bold.woff') format(\"woff\");\n  font-weight: bold;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"FigurineSymbolT1\";\n  src: url('FigurineSymbolT1.woff2') format(\"woff2\"), url('FigurineSymbolT1.woff') format(\"woff\");\n  font-weight: 600;\n  font-style: normal;\n  font-display: swap;\n}\n\n\n\n\n\n\n\n[_ngcontent-%COMP%]:root {\n  --bg-color: #f2f3f7;\n  --fg-color: #383a41;\n  --red: #e43030;\n  --green: #19a187;\n  --blue: #367bf0;\n  --dark-blue: #265ab1;\n  --maroon: #b8174c;\n  --purple: #8c42ab;\n}\n[_ngcontent-%COMP%]::-moz-focus-inner, [_ngcontent-%COMP%]:-moz-focusring {\n  border: 0;\n  color: transparent;\n  text-shadow: 0 0 0 #383a41;\n}\n[_ngcontent-%COMP%]::selection, [_ngcontent-%COMP%]::-moz-selection {\n  color: white;\n  background: black;\n}\n*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  outline: none;\n  user-select: none;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  -webkit-appearance: none;\n  -webkit-tap-highlight-color: transparent !important;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0) !important;\n  -webkit-touch-callout: none;\n  cursor: default;\n  letter-spacing: 0;\n}\n.selectable[_ngcontent-%COMP%], .selectable[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  cursor: auto;\n  user-select: text;\n  -webkit-touch-callout: text;\n  -webkit-user-select: text;\n  -khtml-user-select: text;\n  -moz-user-select: text;\n  -ms-user-select: text;\n}\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  background-color: #f2f3f7;\n  color: #383a41;\n  margin: 0;\n  padding: 0;\n  font-size: 10pt;\n  height: 100%;\n  overflow: auto;\n}\n.with-shadow[_ngcontent-%COMP%], .outset[_ngcontent-%COMP%], button[_ngcontent-%COMP%], .checktext[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]    + span[_ngcontent-%COMP%], .blue-button[_ngcontent-%COMP%], .checktext[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + span[_ngcontent-%COMP%], button.blue-button[_ngcontent-%COMP%], .red-button.blue-button[_ngcontent-%COMP%], .green-button.blue-button[_ngcontent-%COMP%], .green-button[_ngcontent-%COMP%], button.green-button[_ngcontent-%COMP%], .red-button.green-button[_ngcontent-%COMP%], .red-button[_ngcontent-%COMP%], button.red-button[_ngcontent-%COMP%], input[type=button][_ngcontent-%COMP%], input[type=submit][_ngcontent-%COMP%], input[type=reset][_ngcontent-%COMP%], select[_ngcontent-%COMP%], input[type=text][_ngcontent-%COMP%]:not(select):focus, input[type=search][_ngcontent-%COMP%]:not(select):focus, input[type=tel][_ngcontent-%COMP%]:not(select):focus, input[type=url][_ngcontent-%COMP%]:not(select):focus, input[type=email][_ngcontent-%COMP%]:not(select):focus, input[type=password][_ngcontent-%COMP%]:not(select):focus, input[type=date][_ngcontent-%COMP%]:not(select):focus, input[type=month][_ngcontent-%COMP%]:not(select):focus, input[type=week][_ngcontent-%COMP%]:not(select):focus, input[type=time][_ngcontent-%COMP%]:not(select):focus, input[type=number][_ngcontent-%COMP%]:not(select):focus, input[type=color][_ngcontent-%COMP%]:not(select):focus, select[_ngcontent-%COMP%]:not(select):focus, textarea[_ngcontent-%COMP%]:not(select):focus, .paper[_ngcontent-%COMP%] {\n  box-shadow: 6px 6px 10px rgba(0, 0, 0, 0.1), -6px -6px 10px white;\n}\n.outset[_ngcontent-%COMP%], button[_ngcontent-%COMP%], .checktext[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]    + span[_ngcontent-%COMP%], .blue-button[_ngcontent-%COMP%], .checktext[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + span[_ngcontent-%COMP%], button.blue-button[_ngcontent-%COMP%], .red-button.blue-button[_ngcontent-%COMP%], .green-button.blue-button[_ngcontent-%COMP%], .green-button[_ngcontent-%COMP%], button.green-button[_ngcontent-%COMP%], .red-button.green-button[_ngcontent-%COMP%], .red-button[_ngcontent-%COMP%], button.red-button[_ngcontent-%COMP%], input[type=button][_ngcontent-%COMP%], input[type=submit][_ngcontent-%COMP%], input[type=reset][_ngcontent-%COMP%], select[_ngcontent-%COMP%], input[type=text][_ngcontent-%COMP%]:not(select):focus, input[type=search][_ngcontent-%COMP%]:not(select):focus, input[type=tel][_ngcontent-%COMP%]:not(select):focus, input[type=url][_ngcontent-%COMP%]:not(select):focus, input[type=email][_ngcontent-%COMP%]:not(select):focus, input[type=password][_ngcontent-%COMP%]:not(select):focus, input[type=date][_ngcontent-%COMP%]:not(select):focus, input[type=month][_ngcontent-%COMP%]:not(select):focus, input[type=week][_ngcontent-%COMP%]:not(select):focus, input[type=time][_ngcontent-%COMP%]:not(select):focus, input[type=number][_ngcontent-%COMP%]:not(select):focus, input[type=color][_ngcontent-%COMP%]:not(select):focus, select[_ngcontent-%COMP%]:not(select):focus, textarea[_ngcontent-%COMP%]:not(select):focus, .paper[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  background: #f2f3f7;\n}\n.inset[_ngcontent-%COMP%], hr[_ngcontent-%COMP%], button.active[_ngcontent-%COMP%], .checktext[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]    + span.active[_ngcontent-%COMP%], .active.blue-button[_ngcontent-%COMP%], .active.green-button[_ngcontent-%COMP%], .active.red-button[_ngcontent-%COMP%], button[_ngcontent-%COMP%]:active, .checktext[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]    + span[_ngcontent-%COMP%]:active, .blue-button[_ngcontent-%COMP%]:active, .green-button[_ngcontent-%COMP%]:active, .red-button[_ngcontent-%COMP%]:active, input[type=button].active[_ngcontent-%COMP%], input[type=button][_ngcontent-%COMP%]:active, input[type=submit].active[_ngcontent-%COMP%], input[type=submit][_ngcontent-%COMP%]:active, input[type=reset].active[_ngcontent-%COMP%], input[type=reset][_ngcontent-%COMP%]:active, input[type=text][_ngcontent-%COMP%]:not(select), input[type=search][_ngcontent-%COMP%]:not(select), input[type=tel][_ngcontent-%COMP%]:not(select), input[type=url][_ngcontent-%COMP%]:not(select), input[type=email][_ngcontent-%COMP%]:not(select), input[type=password][_ngcontent-%COMP%]:not(select), input[type=date][_ngcontent-%COMP%]:not(select), input[type=month][_ngcontent-%COMP%]:not(select), input[type=week][_ngcontent-%COMP%]:not(select), input[type=time][_ngcontent-%COMP%]:not(select), input[type=number][_ngcontent-%COMP%]:not(select), input[type=color][_ngcontent-%COMP%]:not(select), select[_ngcontent-%COMP%]:not(select), textarea[_ngcontent-%COMP%]:not(select) {\n  border-radius: 10px;\n  box-shadow: 0 0 transparent, 0 0 transparent, inset 3px 3px 5px rgba(0, 0, 0, 0.1), inset -3px -3px 5px white;\n  background: #f8f9fb;\n}\n.paper[_ngcontent-%COMP%] {\n  padding: 10px 20px 20px;\n  margin-top: 20px;\n  min-height: 100px;\n  font-size: 1.2em;\n  background: #f2f3f7;\n}\nsection[_ngcontent-%COMP%], article[_ngcontent-%COMP%], .section[_ngcontent-%COMP%], .article[_ngcontent-%COMP%], .paper[_ngcontent-%COMP%] {\n  line-height: 2em;\n  word-wrap: break-word;\n  word-break: normal;\n  line-height: 2em;\n}\ninput[type=text][_ngcontent-%COMP%], input[type=search][_ngcontent-%COMP%], input[type=tel][_ngcontent-%COMP%], input[type=url][_ngcontent-%COMP%], input[type=email][_ngcontent-%COMP%], input[type=password][_ngcontent-%COMP%], input[type=date][_ngcontent-%COMP%], input[type=month][_ngcontent-%COMP%], input[type=week][_ngcontent-%COMP%], input[type=time][_ngcontent-%COMP%], input[type=number][_ngcontent-%COMP%], input[type=color][_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  border: 0;\n  background: #f2f3f7;\n  color: #383a41;\n  font-weight: normal;\n  padding: 0 1.25em;\n  line-height: 1.25em;\n  height: 3.5em;\n  margin: 10px 0;\n  font-size: 1.1rem;\n  cursor: text;\n  user-select: text;\n  -webkit-touch-callout: text;\n  -webkit-user-select: text;\n  -khtml-user-select: text;\n  -moz-user-select: text;\n  -ms-user-select: text;\n  transition: box-shadow 0.2s;\n}\ntextarea[_ngcontent-%COMP%] {\n  height: 350px;\n  padding: 1.25em;\n}\nselect[_ngcontent-%COMP%] {\n  cursor: pointer;\n  background: url(data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAxOSAxOSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyB0cmFuc2Zvcm09Im1hdHJpeCguMDM0IDAgMCAuMDM0IC02LjggMS43ZS01KSIgc3R5bGU9ImZpbGw6IzdiN2U4YyI+PHBhdGggZD0ibTQ4MCAzNDQtMjExLTIxMmMtMTYtMTYtNDEtMTYtNTcgMC0xNiAxNi0xNiA0MiAwIDU3bDIzOCAyMzljOC40IDguNSAyMCAxMiAzMSAxMiAxMSAwLjU2IDIyLTMuMiAzMS0xMmwyMzgtMjM5YzE2LTE2IDE2LTQyIDAtNTdzLTQxLTE2LTU3IDB6IiBzdHlsZT0iZmlsbDojN2I3ZThjIi8+PC9nPjwvc3ZnPgo=) no-repeat right 1em center;\n  background-size: 1.2em;\n  padding-right: 3em;\n}\ninput[_ngcontent-%COMP%]::placeholder, textarea[_ngcontent-%COMP%]::placeholder {\n  opacity: 1;\n  transition: opacity 0.2s;\n  color: inherit;\n}\ninput[_ngcontent-%COMP%]:focus::placeholder, textarea[_ngcontent-%COMP%]:focus::placeholder {\n  opacity: 0.2;\n}\ninput[_ngcontent-%COMP%]:-ms-input-placeholder, textarea[_ngcontent-%COMP%]:-ms-input-placeholder {\n  opacity: 1;\n  -ms-transition: opacity 0.2s;\n  transition: opacity 0.2s;\n  color: inherit;\n}\ninput[_ngcontent-%COMP%]:focus:-ms-input-placeholder, textarea[_ngcontent-%COMP%]:focus:-ms-input-placeholder {\n  opacity: 0.2;\n}\ninput[type=search][_ngcontent-%COMP%]::-webkit-search-decoration, input[type=search][_ngcontent-%COMP%]::-webkit-search-cancel-button, input[type=search][_ngcontent-%COMP%]::-webkit-search-results-button, input[type=search][_ngcontent-%COMP%]::-webkit-search-results-decoration {\n  display: none;\n}\nbutton[_ngcontent-%COMP%], .checktext[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]    + span[_ngcontent-%COMP%], .blue-button[_ngcontent-%COMP%], .checktext[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + span[_ngcontent-%COMP%], button.blue-button[_ngcontent-%COMP%], .red-button.blue-button[_ngcontent-%COMP%], .green-button.blue-button[_ngcontent-%COMP%], .green-button[_ngcontent-%COMP%], button.green-button[_ngcontent-%COMP%], .red-button.green-button[_ngcontent-%COMP%], .red-button[_ngcontent-%COMP%], button.red-button[_ngcontent-%COMP%], input[type=button][_ngcontent-%COMP%], input[type=submit][_ngcontent-%COMP%], input[type=reset][_ngcontent-%COMP%] {\n  border: 0;\n  text-transform: capitalize;\n  padding: 10px 0;\n  width: 8em;\n  text-align: center;\n  cursor: pointer;\n  color: inherit;\n  font-size: 1.1rem;\n  transition-property: background-color, box-shadow;\n  transition-delay: 0.2s;\n  transition-duration: 0.2s;\n}\nbutton.active[_ngcontent-%COMP%], .checktext[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]    + span.active[_ngcontent-%COMP%], .active.blue-button[_ngcontent-%COMP%], .active.green-button[_ngcontent-%COMP%], .active.red-button[_ngcontent-%COMP%], button[_ngcontent-%COMP%]:active, .checktext[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]    + span[_ngcontent-%COMP%]:active, .blue-button[_ngcontent-%COMP%]:active, .green-button[_ngcontent-%COMP%]:active, .red-button[_ngcontent-%COMP%]:active, input[type=button].active[_ngcontent-%COMP%], input[type=button][_ngcontent-%COMP%]:active, input[type=submit].active[_ngcontent-%COMP%], input[type=submit][_ngcontent-%COMP%]:active, input[type=reset].active[_ngcontent-%COMP%], input[type=reset][_ngcontent-%COMP%]:active {\n  transition-delay: 0s;\n  transition-duration: 0.1s;\n}\n.red-button[_ngcontent-%COMP%], button.red-button[_ngcontent-%COMP%], .checktext[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]    + span.red-button[_ngcontent-%COMP%], .red-button.blue-button[_ngcontent-%COMP%], .red-button.green-button[_ngcontent-%COMP%], input[type=button].red-button[_ngcontent-%COMP%], input[type=submit].red-button[_ngcontent-%COMP%], input[type=reset].red-button[_ngcontent-%COMP%] {\n  color: white;\n  font-weight: bold;\n  text-shadow: 0 0.1em 0.1em rgba(0, 0, 0, 0.7);\n  background: linear-gradient(to top, #e43030 30%, #e84b4b 80%);\n  box-shadow: 0 0 0.5em rgba(228, 48, 48, 0.7), 0 0 transparent, inset 0 -5px 0 rgba(0, 0, 0, 0.05), inset 0 2px 0 rgba(255, 255, 255, 0.2);\n  border-radius: 6px 6px 8px 8px;\n  transition-property: box-shadow, border-radius;\n}\n.red-button.active[_ngcontent-%COMP%], .red-button[_ngcontent-%COMP%]:active, button.red-button.active[_ngcontent-%COMP%], button.red-button[_ngcontent-%COMP%]:active, input[type=button].red-button.active[_ngcontent-%COMP%], input[type=button].red-button[_ngcontent-%COMP%]:active, input[type=submit].red-button.active[_ngcontent-%COMP%], input[type=submit].red-button[_ngcontent-%COMP%]:active, input[type=reset].red-button.active[_ngcontent-%COMP%], input[type=reset].red-button[_ngcontent-%COMP%]:active {\n  background: linear-gradient(to top, #e43030 30%, #e84b4b 80%);\n  border-radius: 6px;\n  box-shadow: 0 0 transparent, 0 0 transparent, inset 0 2px 5px 2px rgba(0, 0, 0, 0.2);\n}\n.green-button[_ngcontent-%COMP%], button.green-button[_ngcontent-%COMP%], .checktext[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]    + span.green-button[_ngcontent-%COMP%], .green-button.blue-button[_ngcontent-%COMP%], .green-button.red-button[_ngcontent-%COMP%], input[type=button].green-button[_ngcontent-%COMP%], input[type=submit].green-button[_ngcontent-%COMP%], input[type=reset].green-button[_ngcontent-%COMP%] {\n  color: white;\n  font-weight: bold;\n  text-shadow: 0 0.1em 0.1em rgba(0, 0, 0, 0.7);\n  background: linear-gradient(to top, #19a187 30%, #1dbb9d 80%);\n  box-shadow: 0 0 0.5em rgba(25, 161, 135, 0.7), 0 0 transparent, inset 0 -5px 0 rgba(0, 0, 0, 0.05), inset 0 2px 0 rgba(255, 255, 255, 0.2);\n  border-radius: 6px 6px 8px 8px;\n  transition-property: box-shadow, border-radius;\n}\n.green-button.active[_ngcontent-%COMP%], .green-button[_ngcontent-%COMP%]:active, button.green-button.active[_ngcontent-%COMP%], button.green-button[_ngcontent-%COMP%]:active, input[type=button].green-button.active[_ngcontent-%COMP%], input[type=button].green-button[_ngcontent-%COMP%]:active, input[type=submit].green-button.active[_ngcontent-%COMP%], input[type=submit].green-button[_ngcontent-%COMP%]:active, input[type=reset].green-button.active[_ngcontent-%COMP%], input[type=reset].green-button[_ngcontent-%COMP%]:active {\n  background: linear-gradient(to top, #19a187 30%, #1dbb9d 80%);\n  border-radius: 6px;\n  box-shadow: 0 0 transparent, 0 0 transparent, inset 0 2px 5px 2px rgba(0, 0, 0, 0.2);\n}\n.blue-button[_ngcontent-%COMP%], .checktext[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + span[_ngcontent-%COMP%], button.blue-button[_ngcontent-%COMP%], .checktext[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]    + span.blue-button[_ngcontent-%COMP%], .blue-button.red-button[_ngcontent-%COMP%], .blue-button.green-button[_ngcontent-%COMP%], input[type=button].blue-button[_ngcontent-%COMP%], input[type=submit].blue-button[_ngcontent-%COMP%], input[type=reset].blue-button[_ngcontent-%COMP%] {\n  color: white;\n  font-weight: bold;\n  text-shadow: 0 0.1em 0.1em rgba(0, 0, 0, 0.7);\n  background: linear-gradient(to top, #367bf0 30%, #528ef2 80%);\n  box-shadow: 0 0 0.5em rgba(54, 123, 240, 0.7), 0 0 transparent, inset 0 -5px 0 rgba(0, 0, 0, 0.05), inset 0 2px 0 rgba(255, 255, 255, 0.2);\n  border-radius: 6px 6px 8px 8px;\n  transition-property: box-shadow, border-radius;\n}\n.blue-button.active[_ngcontent-%COMP%], .checktext[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + span.active[_ngcontent-%COMP%], .blue-button[_ngcontent-%COMP%]:active, .checktext[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + span[_ngcontent-%COMP%]:active, button.blue-button.active[_ngcontent-%COMP%], button.blue-button[_ngcontent-%COMP%]:active, input[type=button].blue-button.active[_ngcontent-%COMP%], input[type=button].blue-button[_ngcontent-%COMP%]:active, input[type=submit].blue-button.active[_ngcontent-%COMP%], input[type=submit].blue-button[_ngcontent-%COMP%]:active, input[type=reset].blue-button.active[_ngcontent-%COMP%], input[type=reset].blue-button[_ngcontent-%COMP%]:active {\n  background: linear-gradient(to top, #367bf0 30%, #528ef2 80%);\n  border-radius: 6px;\n  box-shadow: 0 0 transparent, 0 0 transparent, inset 0 2px 5px 2px rgba(0, 0, 0, 0.2);\n}\nlabel[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0.56em 0;\n}\nlabel[_ngcontent-%COMP%], label[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\na[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:link, a[_ngcontent-%COMP%]:visited, a[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%]:active {\n  font-weight: bold;\n  color: #367bf0;\n  font-weight: bold;\n  text-decoration: none;\n}\na[_ngcontent-%COMP%], a[_ngcontent-%COMP%]   *[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:link, a[_ngcontent-%COMP%]:link   *[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:visited, a[_ngcontent-%COMP%]:visited   *[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%]:active, a[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%]:active   *[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\n  line-height: 1.5em;\n}\nh1[_ngcontent-%COMP%] {\n  font-size: 4em;\n  font-weight: lighter;\n  margin: 0.7em 0;\n}\nh2[_ngcontent-%COMP%] {\n  font-size: 3em;\n  font-weight: lighter;\n  margin: 0.8em 0;\n}\nh3[_ngcontent-%COMP%] {\n  font-size: 2.5em;\n  font-weight: lighter;\n  margin: 0.9em 0;\n}\nh4[_ngcontent-%COMP%] {\n  font-size: 2em;\n  font-weight: lighter;\n  margin: 1em 0;\n}\nh5[_ngcontent-%COMP%] {\n  margin: 0.5em 0;\n  font-size: 1.2em;\n  font-weight: normal;\n}\nh6[_ngcontent-%COMP%] {\n  margin: 1em 0 1em 1.4em;\n  font-size: 1em;\n  font-weight: bold;\n}\ninput[type=checkbox][_ngcontent-%COMP%], input[type=radio][_ngcontent-%COMP%] {\n  font-size: 1em;\n  cursor: pointer;\n  height: 1.2em;\n  width: 1.2em;\n  margin: 0 0.3em;\n  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.2), -2px -2px 3px white, inset 1px 1px 2px rgba(0, 0, 0, 0.2), inset -1px -1px 2px white;\n  border: 0.15em solid #f2f3f7;\n  vertical-align: text-bottom;\n  transition-property: background, box-shadow;\n  transition-duration: 0.2s;\n}\ninput[type=checkbox][_ngcontent-%COMP%]:active, input[type=radio][_ngcontent-%COMP%]:active {\n  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.2), -2px -2px 3px white, inset 1px 1px 2px rgba(0, 0, 0, 0.2), inset -1px -1px 2px white, inset 0 0.1em 0.25em rgba(0, 0, 0, 0.2);\n}\ninput[type=checkbox][_ngcontent-%COMP%]:checked, input[type=radio][_ngcontent-%COMP%]:checked {\n  border-width: 0.1em;\n  border-color: #115fe2;\n  background-color: #367bf0;\n}\ninput[type=checkbox][_ngcontent-%COMP%] {\n  border-radius: 25%;\n}\ninput[type=checkbox][_ngcontent-%COMP%]:checked {\n  box-shadow: 0 0 0.5em rgba(54, 123, 240, 0.7), inset 0 -0.1em 0 rgba(0, 0, 0, 0.2), inset 0 0.1em 0.1em rgba(255, 255, 255, 0.2);\n}\ninput[type=radio][_ngcontent-%COMP%] {\n  border-radius: 100%;\n}\ninput[type=radio][_ngcontent-%COMP%]:checked {\n  box-shadow: 0 0 0.5em rgba(54, 123, 240, 0.7);\n  box-shadow: 0 0 0.5em rgba(54, 123, 240, 0.7), inset 0 0.12em 0.1em rgba(255, 255, 255, 0.25);\n  border-bottom-width: 0.15em;\n}\n.checktext[_ngcontent-%COMP%] {\n  width: auto;\n  margin: 0.5em;\n}\n.checktext[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  display: none;\n}\n.checktext[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]    + span[_ngcontent-%COMP%] {\n  font-weight: bold;\n  padding: 1em;\n  transition-delay: 0s;\n}\n.checktext[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + span[_ngcontent-%COMP%] {\n  padding: 1em;\n}\n.switch[_ngcontent-%COMP%] {\n  height: 2rem;\n  width: 8rem;\n  padding: 0;\n  position: relative;\n}\n.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  display: none;\n}\n.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]    + div[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  border-radius: 999px;\n  background: transparent;\n  transition-property: box-shadow, background-color;\n  transition-duration: 0.2s;\n  transition-delay: 0.2s;\n  box-shadow: 3px 3px 2px -2px rgba(0, 0, 0, 0.1), inset 2px 2px 2px 1px rgba(0, 0, 0, 0.1), inset -2px -2px 1px white;\n}\n.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]    + div[_ngcontent-%COMP%]::before {\n  content: \"\";\n  display: block;\n  height: calc(2rem + 4px);\n  width: calc(2rem + 4px);\n  border-radius: 100%;\n  border: solid white 3px;\n  background: #367bf0;\n  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2), inset 0 -1px 3px rgba(0, 0, 0, 0.1);\n  transform: translate(0, -6px);\n  transition: transform 0.2s;\n}\n.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + div[_ngcontent-%COMP%] {\n  background: #367bf0;\n  box-shadow: 0 0 0.5em rgba(54, 123, 240, 0.7), inset 0 2px 2px 2px rgba(0, 0, 0, 0.3), inset 0 0 transparent;\n}\n.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + div[_ngcontent-%COMP%]::before {\n  transform: translate(6rem, -6px);\n}\nhr[_ngcontent-%COMP%] {\n  width: 72%;\n  height: 8px;\n  float: right;\n  border: 0;\n}\ncode[_ngcontent-%COMP%], pre[_ngcontent-%COMP%] {\n  padding: 0.5em 1em;\n  border-radius: 4px;\n  overflow: auto;\n  box-shadow: 0 5px 30px 0 rgba(0, 0, 0, 0.05);\n}\ncode[_ngcontent-%COMP%] {\n  background: #e6e6e6;\n}\npre[_ngcontent-%COMP%] {\n  background: white;\n  margin: 4em 0;\n}\ncode[_ngcontent-%COMP%], code[_ngcontent-%COMP%]   *[_ngcontent-%COMP%], pre[_ngcontent-%COMP%], pre[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  line-height: 2em;\n  cursor: auto;\n  user-select: text;\n  -webkit-touch-callout: text;\n  -webkit-user-select: text;\n  -khtml-user-select: text;\n  -moz-user-select: text;\n  -ms-user-select: text;\n}\nblockquote[_ngcontent-%COMP%] {\n  background-color: white;\n  padding: 0.5em 1em;\n  border-radius: 4px;\n  box-shadow: 0 5px 30px 0 rgba(0, 0, 0, 0.05);\n  border-left: 6px solid #367bf0;\n}\n  Todo add all the correct adjustments .mat-slider.mat-slider-horizontal .mat-slider-wrapper {\n  top: 18px;\n  box-shadow: 3px 3px 2px -2px rgba(0, 0, 0, 0.1), inset 2px 2px 2px 1px rgba(0, 0, 0, 0.1), inset -2px -2px 1px white;\n}\n  .mat-slider.mat-slider-horizontal .mat-slider-track-wrapper {\n  height: 16px;\n  border-radius: 10px;\n  box-shadow: 3px 3px 2px -2px rgba(0, 0, 0, 0.1), inset 2px 2px 2px 1px rgba(0, 0, 0, 0.1), inset -2px -2px 1px white;\n}\n  .mat-slider.mat-slider-horizontal.small-slider .mat-slider-track-wrapper {\n  height: 12px;\n  border-radius: 10px;\n  box-shadow: 3px 3px 2px -2px rgba(0, 0, 0, 0.1), inset 2px 2px 2px 1px rgba(0, 0, 0, 0.1), inset -2px -2px 1px white;\n}\n  .mat-slider.mat-slider-horizontal .mat-slider-track-background {\n  background-color: var(--item-bg);\n  height: 100%;\n  width: 100%;\n  border-radius: 999px;\n  background: transparent;\n  transition-property: box-shadow, background-color;\n  transition-duration: 0.2s;\n  transition-delay: 0.2s;\n  box-shadow: 3px 3px 2px -2px rgba(0, 0, 0, 0.1), inset 2px 2px 2px 1px rgba(0, 0, 0, 0.1), inset -2px -2px 1px white;\n}\n  .mat-slider.mat-slider-horizontal .mat-slider-thumb-label {\n  height: 42px;\n  width: 42px;\n  right: -22px;\n  top: -42px;\n  transform: translateY(0px) scale(0.01) rotate(45deg);\n  background-color: var(--item);\n  box-shadow: 0 0 0.5em rgba(54, 123, 240, 0.7), inset 0 2px 2px 2px rgba(0, 0, 0, 0.3), inset 0 0 transparent;\n}\n  .mat-slider.mat-slider-horizontal .mat-slider-thumb-label-text {\n  color: var(--item-contrast);\n}\n  .mat-slider.mat-slider-horizontal .mat-slider-track-background,   .mat-slider.mat-slider-horizontal .mat-slider-track-fill {\n  height: 100%;\n  box-shadow: 0 0 0.5em rgba(54, 123, 240, 0.7), inset 0 2px 2px 2px rgba(255, 255, 255, 0.3), inset 0 0 transparent;\n}\n  .mat-slider.mat-slider-horizontal .mat-slider-track-fill {\n  background-color: var(--item);\n}\n  .mat-slider.mat-slider-horizontal .mat-slider-track-background {\n  background-color: transparent;\n}\n  .mat-slider-min-value:not(.mat-slider-thumb-label-showing) .mat-slider-thumb {\n  background-color: transparent;\n}\n  .mat-slider.mat-slider-horizontal .mat-slider-thumb {\n  background-color: var(--item);\n}\n  .mat-slider.mat-slider-horizontal .mat-slider-thumb-label-text {\n  font-size: 18px;\n}\n  .mat-slider.mat-slider-horizontal .mat-slider-thumb {\n  height: 40px;\n  width: 40px;\n  border: solid 4px var(--item-bg);\n  bottom: -24px;\n  right: -24px;\n}\nmat-card[_ngcontent-%COMP%] {\n  background-color: var(--bg-inner);\n  color: var(--text-color);\n}\n.color-input[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  margin-bottom: 6px;\n  color: #0000ff;\n  text-align: left;\n  font-size: 2vmin;\n}\n  .small-slider.mat-slider.mat-slider-horizontal .mat-slider-thumb {\n  height: 32px;\n  width: 32px;\n  border: solid 3px var(--item-bg);\n  bottom: -20px;\n  right: -20px;\n}\n  .small-slider.mat-slider.mat-slider-horizontal .mat-slider-thumb-label-text {\n  font-size: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMuc2NzcyIsInNyYy9hc3NldHMvc2Nzcy9tb2R1bGVzL19mb250cy5zY3NzIiwic3JjL2FwcC9zZXR0aW5ncy9zZXR0aW5ncy1nYW1lc2NvcmUvc2V0dGluZ3MtZ2FtZXNjb3JlLmNvbXBvbmVudC5zY3NzIiwic3JjL2Fzc2V0cy9zY3NzL3NrdWVyb21vcnBoaXNtLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOEVBQUE7QUNBQTtFQUNJLHFCQUFBO0VBQ0EscUZBQUE7RUFFQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNDSjtBREVBO0VBQ0kscUJBQUE7RUFDQSwyRkFBQTtFQUVBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0RKO0FESUE7RUFDRSwrQkFBQTtFQUNBLHVHQUFBO0VBRUEsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDSEY7QURNQTtFQUNFLCtCQUFBO0VBQ0EsK0ZBQUE7RUFFQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNMRjtBRmNBLCtFQUFBO0FBTUEsK0VBQUE7QUFNQSwrRUFBQTtBQU1BLCtFQUFBO0FBS0EsZ0ZBQUE7QUFLQSwrRUFBQTtBQUtBLHlFQUFBO0FBa0JBO0VBQ0UsbUJBQUE7RUFDQSxtQkFBQTtFQUVBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUV6REY7QUY0REE7O0VBRUUsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7QUV6REY7QUY0REE7O0VBRUUsWUFBQTtFQUNBLGlCQUFBO0FFekRGO0FGNERBO0VBQ0Usc0JBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSwyQkFBQTtFQUNBLHlCQUFBO0VBQ0Esd0JBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0Esd0JBQUE7RUFDQSxtREFBQTtFQUNBLHdEQUFBO0VBQ0EsMkJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUV6REY7QUY0REE7O0VBRUUsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsMkJBQUE7RUFDQSx5QkFBQTtFQUNBLHdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtBRXpERjtBRjREQTs7RUFFRSx5QkE1RFM7RUE2RFQsY0E1RFM7RUE2RFQsU0FBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUV6REY7QUY0REE7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBQ0UsaUVBQUE7QUV6Q0Y7QUY0Q0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBR0UsbUJBQUE7RUFDQSxtQkE3RVM7QUVrRFg7QUY4QkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBQ0UsbUJBQUE7RUFDQSw2R0FBQTtFQUVBLG1CQUFBO0FFVEY7QUZZQTtFQUVFLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBN0ZTO0FFbUZYO0FGYUE7Ozs7O0VBS0UsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUVWRjtBRmFBOzs7Ozs7Ozs7Ozs7OztFQWNFLFNBQUE7RUFDQSxtQkExSFM7RUEySFQsY0ExSFM7RUEySFQsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLDJCQUFBO0VBQ0EseUJBQUE7RUFDQSx3QkFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSwyQkFBQTtBRVZGO0FGcUJBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7QUVuQkY7QUZzQkE7RUFHRSxlQUFBO0VBQ0EsMGZBQUE7RUFFQSxzQkFBQTtFQUNBLGtCQUFBO0FFdEJGO0FGeUJBOztFQUVFLFVBQUE7RUFDQSx3QkFBQTtFQUNBLGNBQUE7QUV0QkY7QUZ5QkE7O0VBRUUsWUFBQTtBRXRCRjtBRnlCQTs7RUFFRSxVQUFBO0VBQ0EsNEJBQUE7RUFBQSx3QkFBQTtFQUNBLGNBQUE7QUV0QkY7QUZ5QkE7O0VBRUUsWUFBQTtBRXRCRjtBRnlCQTs7OztFQUlFLGFBQUE7QUV0QkY7QUZ5QkE7Ozs7RUFNRSxTQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGlEQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtBRXhCRjtBRjBCRTs7Ozs7OztFQUlFLG9CQUFBO0VBQ0EseUJBQUE7QUVyQko7QUZ5QmE7Ozs7RUFNUCxZQUFBO0VBQ0EsaUJBQUE7RUFDQSw2Q0FBQTtFQUNBLDZEQUxZO0VBTVoseUlBQUE7RUFHQSw4QkFBQTtFQUNBLDhDQUFBO0FFM0JOO0FGNkJNOzs7Ozs7O0VBRUUsNkRBZFU7RUFlVixrQkFBQTtFQUNBLG9GQUFBO0FFdEJSO0FGRWE7Ozs7RUFNUCxZQUFBO0VBQ0EsaUJBQUE7RUFDQSw2Q0FBQTtFQUNBLDZEQUxZO0VBTVosMElBQUE7RUFHQSw4QkFBQTtFQUNBLDhDQUFBO0FFSE47QUZLTTs7Ozs7OztFQUVFLDZEQWRVO0VBZVYsa0JBQUE7RUFDQSxvRkFBQTtBRUVSO0FGdEJhOzs7O0VBTVAsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsNkNBQUE7RUFDQSw2REFMWTtFQU1aLDBJQUFBO0VBR0EsOEJBQUE7RUFDQSw4Q0FBQTtBRXFCTjtBRm5CTTs7Ozs7OztFQUVFLDZEQWRVO0VBZVYsa0JBQUE7RUFDQSxvRkFBQTtBRTBCUjtBRm5CQTtFQU1FLHFCQUFBO0VBQ0EsaUJBQUE7QUVpQkY7QUZ2QkU7RUFFRSxlQUFBO0FFd0JKO0FGaEJFO0VBU0UsaUJBQUE7RUFDQSxjQTNWRztFQTRWSCxpQkFBQTtFQUNBLHFCQUFBO0FFV0o7QUZuQkk7RUFFRSxlQUFBO0FFb0JOO0FGVkE7Ozs7OztFQU1FLGtCQUFBO0FFYUY7QUZWQTtFQUNFLGNBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7QUVhRjtBRlZBO0VBQ0UsY0FBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtBRWFGO0FGVkE7RUFDRSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtBRWFGO0FGVkE7RUFDRSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSxhQUFBO0FFYUY7QUZWQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FFYUY7QUZWQTtFQUNFLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FFYUY7QUZWQTs7RUFLRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdJQVBjO0VBUWQsNEJBQUE7RUFDQSwyQkFBQTtFQUNBLDJDQUFBO0VBQ0EseUJBQUE7QUVVRjtBRlJFOztFQUNFLHlLQUFBO0FFV0o7QUZSRTs7RUFDRSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBcmFHO0FFZ2JQO0FGUEE7RUFDRSxrQkFBQTtBRVVGO0FGUkU7RUFDRSxnSUFBQTtBRVVKO0FGTEE7RUFDRSxtQkFBQTtBRVFGO0FGTkU7RUFDRSw2Q0FyV1U7RUFzV1YsNkZBQUE7RUFDQSwyQkFBQTtBRVFKO0FGSkE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtBRU9GO0FGTEU7RUFDRSxhQUFBO0FFT0o7QUZMSTtFQUdFLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0FFS047QUZGSTtFQUdFLFlBQUE7QUVFTjtBRkdBO0VBTUUsWUFMVTtFQU1WLFdBTFM7RUFNVCxVQUFBO0VBQ0Esa0JBQUE7QUVMRjtBRk9FO0VBQ0UsYUFBQTtBRUxKO0FGT0k7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQ0EsdUJBQUE7RUFDQSxpREFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxvSEFBQTtBRUxOO0FGU007RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLHdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBcGZEO0VBcWZDLDhFQUFBO0VBRUEsNkJBQUE7RUFDQSwwQkFBQTtBRVJSO0FGWUk7RUFDRSxtQkE3ZkM7RUE4ZkQsNEdBQUE7QUVWTjtBRmFNO0VBQ0UsZ0NBQUE7QUVYUjtBRmlCQTtFQUVFLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7QUVmRjtBRmtCQTs7RUFFRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLDRDQUFBO0FFZkY7QUZrQkE7RUFDRSxtQkFBQTtBRWZGO0FGa0JBO0VBQ0UsaUJBQUE7RUFDQSxhQUFBO0FFZkY7QUZvQkU7OztFQUVFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSwyQkFBQTtFQUNBLHlCQUFBO0VBQ0Esd0JBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0FFaEJKO0FGb0JBO0VBQ0UsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNENBQUE7RUFDQSw4QkFBQTtBRWpCRjtBQzVpQkU7RUFHRSxTQUFBO0VBQ0Esb0hBQUE7QUQ2aUJKO0FDemlCRTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtFQUNBLG9IQUFBO0FEMmlCSjtBQ3ZpQkU7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxvSEFBQTtBRHlpQko7QUNyaUJFO0VBQ0UsZ0NIYU07RUdaTixZQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQ0EsdUJBQUE7RUFDQSxpREFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxvSEFBQTtBRHVpQko7QUNuaUJFO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLG9EQUFBO0VBQ0EsNkJIUEc7RUdRSCw0R0FBQTtBRHFpQko7QUNsaUJFO0VBQ0UsMkJIWFk7QUUraUJoQjtBQ2xpQkU7O0VBRUUsWUFBQTtFQUNBLGtIQUFBO0FEb2lCSjtBQ2ppQkU7RUFDRSw2QkhyQkc7QUV3akJQO0FDamlCRTtFQUNFLDZCQUFBO0FEbWlCSjtBQ2ppQkU7RUFDRSw2QkFBQTtBRG1pQko7QUNqaUJFO0VBQ0UsNkJIOUJHO0FFaWtCUDtBQ2ppQkU7RUFDRSxlQUFBO0FEbWlCSjtBQ2ppQkU7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdDQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QURtaUJKO0FBM21CQTtFQUNFLGlDRmdGUztFRS9FVCx3QkY2RVc7QUVpaUJiO0FBM21CQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQThtQkY7QUExbUJFO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxnQ0FBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FBNm1CSjtBQTFtQkU7RUFDRSxlQUFBO0FBNG1CSiIsImZpbGUiOiJzcmMvYXBwL3NldHRpbmdzL3NldHRpbmdzLWdhbWVzY29yZS9zZXR0aW5ncy1nYW1lc2NvcmUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG5cbkBpbXBvcnQgXCIuL2Fzc2V0cy9zY3NzL21vZHVsZXMvX2ZvbnRzLnNjc3NcIjtcbiRnYW1lc2NvcmUtZmFtaWx5OiBcIkZpZ3VyaW5lU3ltYm9sVDFcIjtcbiRnYW1lc2NvcmUtaGlnaGxpZ2h0OiAjNTg1ODU4ZmY7XG4kZ2FtZXNjb3JlLWZvcmVncm91bmQ6IHdoaXRlO1xuXG4kcmVkOiAjZTQzMDMwO1xuJGdyZWVuOiAjMTlhMTg3O1xuJGxpZ2h0LWJsdWU6ICMwMGZmZmZmZjtcbiRibHVlOiAjMzY3YmYwO1xuJGRhcmstYmx1ZTogIzI2NWFiMTtcbiRtYXJvb246ICNiODE3NGM7XG4kcHVycGxlOiAjOGM0MmFiO1xuXG4vLyBNYWluIE9MR0EgQ29sb3IgRWxlbWVudCBWYXJpYWJsZXNcbiR0ZXh0Q29sb3I6IHZhcigtLXRleHRDb2xvcik7IC8vIE1haW4gVGV4dCBDb2xvclxuJHRleHRDb2xvckF0dGVudGlvbjogdmFyKC0tdGV4dENvbG9yQXR0ZW50aW9uKTsgLy8gQXR0ZW50aW9uIHRleHRcbiR0ZXh0Q29sb3JSZW1vdmU6IHZhcigtLXRleHRDb2xvclJlbW92ZSk7IC8vIFJlbW92ZS9EZWxldGUvQ2xvc2VcbiR0ZXh0Q29sb3JBZGQ6IHZhcigtLXRleHRDb2xvckFkZCk7IC8vIEFkZC9DcmVhdGUvT3BlblxuJHRleHRDb2xvckFjdGl2ZTogdmFyKC0tdGV4dENvbG9yQWN0aXZlKTsgLy8gQWRkL0NyZWF0ZS9PcGVuXG4kYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZCk7IC8vIE1haW4gYmFja2dyb3VuZCBDb2xvclxuJGJnQ29udGFpbmVyOiB2YXIoLS1iZ0NvbnRhaW5lcik7IC8vIGJhY2tncm91bmQgb2YgQ29udGFpbmVyc1xuJGJnTWVudTogdmFyKC0tYmdNZW51KTsgLy8gYmFja2dyb3VuZCBvZiBNZW51c1xuJGJnSXRlbTogdmFyKC0tYmdJdGVtKTsgLy8gYmFja2dyb3VuZCBvZiBJdGVtc1xuXG4vLyBDb250ZXh0IE1lbnVcbiRiZ0NvbnRleHQ6IHZhcigtLWJnQ29udGV4dCk7IC8vIGJhY2tncm91bmQgb2YgQ29udGV4dCBNZW51XG4kdGV4dENvbG9yQ29udGV4dDogdmFyKC0tdGV4dENvbG9yQ29udGV4dCk7IC8vIHRleHQgY29sb3IgQ29udGV4dCBNZW51XG4kYm9yZGVyQ29udGV4dDogdmFyKC0tYm9yZGVyQ29udGV4dCk7IC8vIGJvcmRlciBDb250ZXh0IE1lbnVcbiRvdmVybGF5Q29udGV4dEJhY2tncm91bmQ6IHZhcihcbiAgLS1vdmVybGF5Q29udGV4dEJhY2tncm91bmRcbik7IC8vIENvbnRleHQgTWVudSBPdmVybGF5IGJhY2tncm91bmQgbWFpblxuJG92ZXJsYXlDb250ZXh0QmFja2dyb3VuZEdyYWRpZW50OiB2YXIoXG4gIC0tb3ZlcmxheUNvbnRleHRCYWNrZ3JvdW5kR3JhZGllbnRcbik7IC8vIENvbnRleHQgTWVudSBiYWNrZ3JvdW5kIGdyYWRpZW50XG5cbiRpdGVtOiB2YXIoLS1pdGVtKTtcbiRpdGVtLWNvbnRyYXN0OiB2YXIoLS1pdGVtLWNvbnRyYXN0KTtcbiRpdGVtLWJnOiB2YXIoLS1pdGVtLWJnKTtcblxuXG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIENvbnRhaW5lciBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuJGdzVGV4dENvbG9yOiB2YXIoLS1nc1RleHRDb2xvcik7IC8vIFRleHQgY29sb3IgZm9yIGdhbWUgc2NvcmVcbiRnc0JhY2tncm91bmQ6IHZhcigtLWdzQmFja2dyb3VuZCk7IC8vIGJhY2tncm91bmQgb2YgQ29udGFpbmVyc1xuJGdzQm9yZGVyOiB2YXIoLS1nc0JvcmRlcik7IC8vIGJhY2tncm91bmQgb2YgTWVudXNcbiRnc1RleHRTaXplOiB2YXIoLS1nc1RleHRTaXplKTsgLy8gYmFja2dyb3VuZCBvZiBNZW51c1xuXG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIENvbnRhaW5lciBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuJGdzVGV4dENvbG9yTVc6IHZhcigtLWdzVGV4dENvbG9yTVcpOyAvLyBUZXh0IGNvbG9yIGZvciBnYW1lIHNjb3JlXG4kZ3NCYWNrZ3JvdW5kTVc6IHZhcigtLWdzQmFja2dyb3VuZE1XKTsgLy8gYmFja2dyb3VuZCBvZiBDb250YWluZXJzXG4kZ3NCb3JkZXJNVzogdmFyKC0tZ3NCb3JkZXJNVyk7IC8vIGJhY2tncm91bmQgb2YgTWVudXNcbiRnc1RleHRTaXplTVc6IHZhcigtLWdzVGV4dFNpemVNVyk7IC8vIGJhY2tncm91bmQgb2YgTWVudXNcblxuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBDb250YWluZXIgVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiRnc1RleHRDb2xvck1COiB2YXIoLS1nc1RleHRDb2xvck1CKTsgLy8gVGV4dCBjb2xvciBmb3IgZ2FtZSBzY29yZVxuJGdzQmFja2dyb3VuZE1COiB2YXIoLS1nc0JhY2tncm91bmRNQik7IC8vIGJhY2tncm91bmQgb2YgQ29udGFpbmVyc1xuJGdzQm9yZGVyTUI6IHZhcigtLWdzQm9yZGVyTUIpOyAvLyBiYWNrZ3JvdW5kIG9mIE1lbnVzXG4kZ3NUZXh0U2l6ZU1COiB2YXIoLS1nc1RleHRTaXplTUIpOyAvLyBiYWNrZ3JvdW5kIG9mIE1lbnVzXG5cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgSGlnaGxpZ2h0IFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4kZ3NUZXh0Q29sb3JIRzogdmFyKC0tZ3NUZXh0Q29sb3JIRyk7IC8vIFRleHQgY29sb3IgZm9yIGhpZ2hsaWdodFxuJGdzQmFja2dyb3VuZEhHOiB2YXIoLS1nc0JhY2tncm91bmRIRyk7IC8vIGJhY2tncm91bmQgZm9yIGhpZ2hsaWdodFxuJGdzQm9yZGVySEc6IHZhcigtLWdzQm9yZGVySEcpOyAvLyBib3JkZXIgZm9yIGhpZ2hsaWdodFxuXG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIEFubm90YXRpb24gVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiRnc1RleHRDb2xvckFOOiB2YXIoLS1nc1RleHRDb2xvckFOKTsgLy8gVGV4dCBjb2xvciBmb3IgaGlnaGxpZ2h0XG4kZ3NCYWNrZ3JvdW5kQU46IHZhcigtLWdzQmFja2dyb3VuZEFOKTsgLy8gYmFja2dyb3VuZCBmb3IgaGlnaGxpZ2h0XG4kZ3NCb3JkZXJBTjogdmFyKC0tZ3NCb3JkZXJBTik7IC8vIGJvcmRlciBmb3IgaGlnaGxpZ2h0XG5cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgVmFyaWF0aW9uIFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4kZ3NUZXh0Q29sb3JWQTogdmFyKC0tZ3NUZXh0Q29sb3JWQSk7IC8vIFRleHQgY29sb3IgZm9yIGhpZ2hsaWdodFxuJGdzQmFja2dyb3VuZFZBOiB2YXIoLS1nc0JhY2tncm91bmRWQSk7IC8vIGJhY2tncm91bmQgZm9yIGhpZ2hsaWdodFxuJGdzQm9yZGVyVkE6IHZhcigtLWdzQm9yZGVyVkEpOyAvLyBib3JkZXIgZm9yIGhpZ2hsaWdodFxuXG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIFBseSBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuJGdzVGV4dENvbG9yUEM6IHZhcigtLWdzVGV4dENvbG9yUEMpOyAvLyBUZXh0IGNvbG9yIGZvciBnYW1lIHNjb3JlIHBseVxuJGdzQmFja2dyb3VuZFBDOiB2YXIoLS1nc0JhY2tncm91bmRQQyk7IC8vIGJhY2tncm91bmQgZm9yIGdhbWUgc2NvcmUgcGx5XG4kZ3NCb3JkZXJQQzogdmFyKC0tZ3NCb3JkZXJQQyk7IC8vIGJvcmRlciBmb3IgZ2FtZSBzY29yZSBwbHlcblxuLy8gQm9hcmQgY29sb3JzIHJlZmxlY3RlZCBvdXRcbiRib2FyZEJHRGFyazogdmFyKC0tYm9hcmRCR0RhcmspOyAvLyBib3JkZXIgZm9yIGhpZ2hsaWdodFxuXG4vLyBHZW5lcmFsIHN0dWZmXG4kdGV4dC1jb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XG4kYmctb3V0ZXI6IHZhcigtLWJnLW91dGVyKTtcbiRiZy1pbm5lcjogdmFyKC0tYmctaW5uZXIpO1xuXG4kYmctY29sb3I6ICNmMmYzZjc7XG4kZmctY29sb3I6ICMzODNhNDE7XG5cbiRnbG93LXNoYWRvdzogMCAwIDAuNWVtIHRyYW5zcGFyZW50aXplKCRibHVlLCAwLjMpO1xuXG46cm9vdCB7XG4gIC0tYmctY29sb3I6ICN7JGJnLWNvbG9yfTtcbiAgLS1mZy1jb2xvcjogI3skZmctY29sb3J9O1xuXG4gIC0tcmVkOiAjeyRyZWR9O1xuICAtLWdyZWVuOiAjeyRncmVlbn07XG4gIC0tYmx1ZTogI3skYmx1ZX07XG4gIC0tZGFyay1ibHVlOiAjeyRkYXJrLWJsdWV9O1xuICAtLW1hcm9vbjogI3skbWFyb29ufTtcbiAgLS1wdXJwbGU6ICN7JHB1cnBsZX07XG59XG5cbjo6LW1vei1mb2N1cy1pbm5lcixcbjotbW96LWZvY3VzcmluZyB7XG4gIGJvcmRlcjogMDtcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xuICB0ZXh0LXNoYWRvdzogMCAwIDAgJGZnLWNvbG9yO1xufVxuXG46OnNlbGVjdGlvbixcbjo6LW1vei1zZWxlY3Rpb24ge1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQ6IGJsYWNrO1xufVxuXG4qIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgb3V0bGluZTogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lO1xuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCkgIWltcG9ydGFudDtcbiAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xuICBjdXJzb3I6IGRlZmF1bHQ7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xufVxuXG4uc2VsZWN0YWJsZSxcbi5zZWxlY3RhYmxlICoge1xuICBjdXJzb3I6IGF1dG87XG4gIHVzZXItc2VsZWN0OiB0ZXh0O1xuICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IHRleHQ7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IHRleHQ7XG4gIC1raHRtbC11c2VyLXNlbGVjdDogdGV4dDtcbiAgLW1vei11c2VyLXNlbGVjdDogdGV4dDtcbiAgLW1zLXVzZXItc2VsZWN0OiB0ZXh0O1xufVxuXG5odG1sLFxuYm9keSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRiZy1jb2xvcjtcbiAgY29sb3I6ICRmZy1jb2xvcjtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBmb250LXNpemU6IDEwcHQ7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi53aXRoLXNoYWRvdyB7XG4gIGJveC1zaGFkb3c6IDZweCA2cHggMTBweCB0cmFuc3BhcmVudGl6ZShibGFjaywgMC45KSwgLTZweCAtNnB4IDEwcHggd2hpdGU7XG59XG5cbi5vdXRzZXQge1xuICBAZXh0ZW5kIC53aXRoLXNoYWRvdztcblxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiAkYmctY29sb3I7XG59XG5cbi5pbnNldCB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJveC1zaGFkb3c6IDAgMCB0cmFuc3BhcmVudCwgMCAwIHRyYW5zcGFyZW50LFxuICAgIGluc2V0IDNweCAzcHggNXB4IHRyYW5zcGFyZW50aXplKGJsYWNrLCAwLjkpLCBpbnNldCAtM3B4IC0zcHggNXB4IHdoaXRlO1xuICBiYWNrZ3JvdW5kOiBsaWdodGVuKCRiZy1jb2xvciwgMiUpO1xufVxuXG4ucGFwZXIge1xuICBAZXh0ZW5kIC5vdXRzZXQ7XG4gIHBhZGRpbmc6IDEwcHggMjBweCAyMHB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBtaW4taGVpZ2h0OiAxMDBweDtcbiAgZm9udC1zaXplOiAxLjJlbTtcbiAgYmFja2dyb3VuZDogJGJnLWNvbG9yO1xufVxuXG5zZWN0aW9uLFxuYXJ0aWNsZSxcbi5zZWN0aW9uLFxuLmFydGljbGUsXG4ucGFwZXIge1xuICBsaW5lLWhlaWdodDogMmVtO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIHdvcmQtYnJlYWs6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDJlbTtcbn1cblxuaW5wdXRbdHlwZT1cInRleHRcIl0sXG5pbnB1dFt0eXBlPVwic2VhcmNoXCJdLFxuaW5wdXRbdHlwZT1cInRlbFwiXSxcbmlucHV0W3R5cGU9XCJ1cmxcIl0sXG5pbnB1dFt0eXBlPVwiZW1haWxcIl0sXG5pbnB1dFt0eXBlPVwicGFzc3dvcmRcIl0sXG5pbnB1dFt0eXBlPVwiZGF0ZVwiXSxcbmlucHV0W3R5cGU9XCJtb250aFwiXSxcbmlucHV0W3R5cGU9XCJ3ZWVrXCJdLFxuaW5wdXRbdHlwZT1cInRpbWVcIl0sXG5pbnB1dFt0eXBlPVwibnVtYmVyXCJdLFxuaW5wdXRbdHlwZT1cImNvbG9yXCJdLFxuc2VsZWN0LFxudGV4dGFyZWEge1xuICBib3JkZXI6IDA7XG4gIGJhY2tncm91bmQ6ICRiZy1jb2xvcjtcbiAgY29sb3I6ICRmZy1jb2xvcjtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgcGFkZGluZzogMCAxLjI1ZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjI1ZW07XG4gIGhlaWdodDogMy41ZW07XG4gIG1hcmdpbjogMTBweCAwO1xuICBmb250LXNpemU6IDEuMXJlbTtcbiAgY3Vyc29yOiB0ZXh0O1xuICB1c2VyLXNlbGVjdDogdGV4dDtcbiAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiB0ZXh0O1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiB0ZXh0O1xuICAta2h0bWwtdXNlci1zZWxlY3Q6IHRleHQ7XG4gIC1tb3otdXNlci1zZWxlY3Q6IHRleHQ7XG4gIC1tcy11c2VyLXNlbGVjdDogdGV4dDtcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjJzO1xuXG4gICY6bm90KHNlbGVjdCkge1xuICAgIEBleHRlbmQgLmluc2V0O1xuXG4gICAgJjpmb2N1cyB7XG4gICAgICBAZXh0ZW5kIC5vdXRzZXQ7XG4gICAgfVxuICB9XG59XG5cbnRleHRhcmVhIHtcbiAgaGVpZ2h0OiAzNTBweDtcbiAgcGFkZGluZzogMS4yNWVtO1xufVxuXG5zZWxlY3Qge1xuICBAZXh0ZW5kIC5vdXRzZXQ7XG5cbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kOiB1cmwoZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCMlpYSnphVzl1UFNJeExqRWlJSFpwWlhkQ2IzZzlJakFnTUNBeE9TQXhPU0lnZUcxc2JuTTlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5Mekl3TURBdmMzWm5JajQ4WnlCMGNtRnVjMlp2Y20wOUltMWhkSEpwZUNndU1ETTBJREFnTUNBdU1ETTBJQzAyTGpnZ01TNDNaUzAxS1NJZ2MzUjViR1U5SW1acGJHdzZJemRpTjJVNFl5SStQSEJoZEdnZ1pEMGliVFE0TUNBek5EUXRNakV4TFRJeE1tTXRNVFl0TVRZdE5ERXRNVFl0TlRjZ01DMHhOaUF4TmkweE5pQTBNaUF3SURVM2JESXpPQ0F5TXpsak9DNDBJRGd1TlNBeU1DQXhNaUF6TVNBeE1pQXhNU0F3TGpVMklESXlMVE11TWlBek1TMHhNbXd5TXpndE1qTTVZekUyTFRFMklERTJMVFF5SURBdE5UZHpMVFF4TFRFMkxUVTNJREI2SWlCemRIbHNaVDBpWm1sc2JEb2pOMkkzWlRoaklpOCtQQzluUGp3dmMzWm5QZ289KVxuICAgIG5vLXJlcGVhdCByaWdodCAxZW0gY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEuMmVtO1xuICBwYWRkaW5nLXJpZ2h0OiAzZW07XG59XG5cbmlucHV0OjpwbGFjZWhvbGRlcixcbnRleHRhcmVhOjpwbGFjZWhvbGRlciB7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycztcbiAgY29sb3I6IGluaGVyaXQ7XG59XG5cbmlucHV0OmZvY3VzOjpwbGFjZWhvbGRlcixcbnRleHRhcmVhOmZvY3VzOjpwbGFjZWhvbGRlciB7XG4gIG9wYWNpdHk6IDAuMjtcbn1cblxuaW5wdXQ6LW1zLWlucHV0LXBsYWNlaG9sZGVyLFxudGV4dGFyZWE6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzO1xuICBjb2xvcjogaW5oZXJpdDtcbn1cblxuaW5wdXQ6Zm9jdXM6LW1zLWlucHV0LXBsYWNlaG9sZGVyLFxudGV4dGFyZWE6Zm9jdXM6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgb3BhY2l0eTogMC4yO1xufVxuXG5pbnB1dFt0eXBlPVwic2VhcmNoXCJdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uLFxuaW5wdXRbdHlwZT1cInNlYXJjaFwiXTo6LXdlYmtpdC1zZWFyY2gtY2FuY2VsLWJ1dHRvbixcbmlucHV0W3R5cGU9XCJzZWFyY2hcIl06Oi13ZWJraXQtc2VhcmNoLXJlc3VsdHMtYnV0dG9uLFxuaW5wdXRbdHlwZT1cInNlYXJjaFwiXTo6LXdlYmtpdC1zZWFyY2gtcmVzdWx0cy1kZWNvcmF0aW9uIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuYnV0dG9uLFxuaW5wdXRbdHlwZT1cImJ1dHRvblwiXSxcbmlucHV0W3R5cGU9XCJzdWJtaXRcIl0sXG5pbnB1dFt0eXBlPVwicmVzZXRcIl0ge1xuICBAZXh0ZW5kIC5vdXRzZXQ7XG5cbiAgYm9yZGVyOiAwO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgcGFkZGluZzogMTBweCAwO1xuICB3aWR0aDogOGVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBiYWNrZ3JvdW5kLWNvbG9yLCBib3gtc2hhZG93O1xuICB0cmFuc2l0aW9uLWRlbGF5OiAwLjJzO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjJzO1xuXG4gICYuYWN0aXZlLFxuICAmOmFjdGl2ZSB7XG4gICAgQGV4dGVuZCAuaW5zZXQ7XG5cbiAgICB0cmFuc2l0aW9uLWRlbGF5OiAwcztcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjFzO1xuICB9XG5cbiAgQGVhY2ggJG5hbWUsICRjb2xvciBpbiAoXCJyZWRcIjogJHJlZCwgXCJncmVlblwiOiAkZ3JlZW4sIFwiYmx1ZVwiOiAkYmx1ZSkge1xuICAgIEBhdC1yb290IC4jeyRuYW1lfS1idXR0b24sXG4gICAgICAmLiN7JG5hbWV9LWJ1dHRvbiB7XG4gICAgICBAZXh0ZW5kIGJ1dHRvbjtcblxuICAgICAgJF9iZy1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgJGNvbG9yIDMwJSwgbGlnaHRlbigkY29sb3IsIDYlKSA4MCUpO1xuXG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIHRleHQtc2hhZG93OiAwIDAuMWVtIDAuMWVtIHRyYW5zcGFyZW50aXplKGJsYWNrLCAwLjMpO1xuICAgICAgYmFja2dyb3VuZDogJF9iZy1pbWFnZTtcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAwLjVlbSB0cmFuc3BhcmVudGl6ZSgkY29sb3IsIDAuMyksIDAgMCB0cmFuc3BhcmVudCxcbiAgICAgICAgaW5zZXQgMCAtNXB4IDAgdHJhbnNwYXJlbnRpemUoYmxhY2ssIDAuOTUpLFxuICAgICAgICBpbnNldCAwIDJweCAwIHRyYW5zcGFyZW50aXplKHdoaXRlLCAwLjgpO1xuICAgICAgYm9yZGVyLXJhZGl1czogNnB4IDZweCA4cHggOHB4O1xuICAgICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYm94LXNoYWRvdywgYm9yZGVyLXJhZGl1cztcblxuICAgICAgJi5hY3RpdmUsXG4gICAgICAmOmFjdGl2ZSB7XG4gICAgICAgIGJhY2tncm91bmQ6ICRfYmctaW1hZ2U7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIHRyYW5zcGFyZW50LCAwIDAgdHJhbnNwYXJlbnQsXG4gICAgICAgICAgaW5zZXQgMCAycHggNXB4IDJweCB0cmFuc3BhcmVudGl6ZShibGFjaywgMC44KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxubGFiZWwge1xuICAmLFxuICAmICoge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogMC41NmVtIDA7XG59XG5cbmEge1xuICAmLFxuICAmOmxpbmssXG4gICY6dmlzaXRlZCxcbiAgJjpob3ZlciAmOmFjdGl2ZSB7XG4gICAgJixcbiAgICAmICoge1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cblxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiAkYmx1ZTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIH1cbn1cblxuaDEsXG5oMixcbmgzLFxuaDQsXG5oNSxcbmg2IHtcbiAgbGluZS1oZWlnaHQ6IDEuNWVtO1xufVxuXG5oMSB7XG4gIGZvbnQtc2l6ZTogNGVtO1xuICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgbWFyZ2luOiAwLjdlbSAwO1xufVxuXG5oMiB7XG4gIGZvbnQtc2l6ZTogM2VtO1xuICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgbWFyZ2luOiAwLjhlbSAwO1xufVxuXG5oMyB7XG4gIGZvbnQtc2l6ZTogMi41ZW07XG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuICBtYXJnaW46IDAuOWVtIDA7XG59XG5cbmg0IHtcbiAgZm9udC1zaXplOiAyZW07XG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuICBtYXJnaW46IDFlbSAwO1xufVxuXG5oNSB7XG4gIG1hcmdpbjogMC41ZW0gMDtcbiAgZm9udC1zaXplOiAxLjJlbTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cblxuaDYge1xuICBtYXJnaW46IDFlbSAwIDFlbSAxLjRlbTtcbiAgZm9udC1zaXplOiAxZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5pbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0sXG5pbnB1dFt0eXBlPVwicmFkaW9cIl0ge1xuICAkX2JvcmRlci13aWR0aDogMC4xNWVtO1xuICAkX2JveC1zaGFkb3c6IDJweCAycHggM3B4IHRyYW5zcGFyZW50aXplKGJsYWNrLCAwLjgpLCAtMnB4IC0ycHggM3B4IHdoaXRlLFxuICAgIGluc2V0IDFweCAxcHggMnB4IHRyYW5zcGFyZW50aXplKGJsYWNrLCAwLjgpLCBpbnNldCAtMXB4IC0xcHggMnB4IHdoaXRlO1xuICBmb250LXNpemU6IDFlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBoZWlnaHQ6IDEuMmVtO1xuICB3aWR0aDogMS4yZW07XG4gIG1hcmdpbjogMCAwLjNlbTtcbiAgYm94LXNoYWRvdzogJF9ib3gtc2hhZG93O1xuICBib3JkZXI6ICRfYm9yZGVyLXdpZHRoIHNvbGlkICRiZy1jb2xvcjtcbiAgdmVydGljYWwtYWxpZ246IHRleHQtYm90dG9tO1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBiYWNrZ3JvdW5kLCBib3gtc2hhZG93O1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjJzO1xuXG4gICY6YWN0aXZlIHtcbiAgICBib3gtc2hhZG93OiAkX2JveC1zaGFkb3csIGluc2V0IDAgMC4xZW0gMC4yNWVtIHRyYW5zcGFyZW50aXplKGJsYWNrLCAwLjgpO1xuICB9XG5cbiAgJjpjaGVja2VkIHtcbiAgICBib3JkZXItd2lkdGg6IDAuMWVtO1xuICAgIGJvcmRlci1jb2xvcjogZGFya2VuKCRibHVlLCAxMCUpO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRibHVlO1xuICB9XG59XG5cbmlucHV0W3R5cGU9XCJjaGVja2JveFwiXSB7XG4gIGJvcmRlci1yYWRpdXM6IDI1JTtcblxuICAmOmNoZWNrZWQge1xuICAgIGJveC1zaGFkb3c6ICRnbG93LXNoYWRvdywgaW5zZXQgMCAtMC4xZW0gMCB0cmFuc3BhcmVudGl6ZShibGFjaywgMC44KSxcbiAgICAgIGluc2V0IDAgMC4xZW0gMC4xZW0gdHJhbnNwYXJlbnRpemUod2hpdGUsIDAuOCk7XG4gIH1cbn1cblxuaW5wdXRbdHlwZT1cInJhZGlvXCJdIHtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcblxuICAmOmNoZWNrZWQge1xuICAgIGJveC1zaGFkb3c6ICRnbG93LXNoYWRvdztcbiAgICBib3gtc2hhZG93OiAkZ2xvdy1zaGFkb3csIGluc2V0IDAgMC4xMmVtIDAuMWVtIHRyYW5zcGFyZW50aXplKHdoaXRlLCAwLjc1KTtcbiAgICBib3JkZXItYm90dG9tLXdpZHRoOiAwLjE1ZW07XG4gIH1cbn1cblxuLmNoZWNrdGV4dCB7XG4gIHdpZHRoOiBhdXRvO1xuICBtYXJnaW46IDAuNWVtO1xuXG4gIGlucHV0IHtcbiAgICBkaXNwbGF5OiBub25lO1xuXG4gICAgKyBzcGFuIHtcbiAgICAgIEBleHRlbmQgYnV0dG9uO1xuXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIHBhZGRpbmc6IDFlbTtcbiAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDBzO1xuICAgIH1cblxuICAgICY6Y2hlY2tlZCArIHNwYW4ge1xuICAgICAgQGV4dGVuZCAuYmx1ZS1idXR0b247XG5cbiAgICAgIHBhZGRpbmc6IDFlbTtcbiAgICB9XG4gIH1cbn1cblxuLnN3aXRjaCB7XG4gICRfaGVpZ2h0OiAycmVtO1xuICAkX3dpZHRoOiA4cmVtO1xuICAkX2hhbmRsZS13aWR0aDogJF9oZWlnaHQ7XG4gICRfaGFuZGxlLXRyYW5zbGF0aW9uOiAkX3dpZHRoIC0gJF9oYW5kbGUtd2lkdGg7XG5cbiAgaGVpZ2h0OiAkX2hlaWdodDtcbiAgd2lkdGg6ICRfd2lkdGg7XG4gIHBhZGRpbmc6IDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICBpbnB1dCB7XG4gICAgZGlzcGxheTogbm9uZTtcblxuICAgICsgZGl2IHtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgYm9yZGVyLXJhZGl1czogOTk5cHg7XG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGJveC1zaGFkb3csIGJhY2tncm91bmQtY29sb3I7XG4gICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjJzO1xuICAgICAgdHJhbnNpdGlvbi1kZWxheTogMC4ycztcbiAgICAgIGJveC1zaGFkb3c6IDNweCAzcHggMnB4IC0ycHggdHJhbnNwYXJlbnRpemUoYmxhY2ssIDAuOSksXG4gICAgICAgIGluc2V0IDJweCAycHggMnB4IDFweCB0cmFuc3BhcmVudGl6ZShibGFjaywgMC45KSxcbiAgICAgICAgaW5zZXQgLTJweCAtMnB4IDFweCB3aGl0ZTtcblxuICAgICAgJjo6YmVmb3JlIHtcbiAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGhlaWdodDogY2FsYygjeyRfaGFuZGxlLXdpZHRofSArIDRweCk7XG4gICAgICAgIHdpZHRoOiBjYWxjKCN7JF9oYW5kbGUtd2lkdGh9ICsgNHB4KTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICAgICAgYm9yZGVyOiBzb2xpZCB3aGl0ZSAzcHg7XG4gICAgICAgIGJhY2tncm91bmQ6ICRibHVlO1xuICAgICAgICBib3gtc2hhZG93OiAwIDNweCAxMHB4IHRyYW5zcGFyZW50aXplKGJsYWNrLCAwLjgpLFxuICAgICAgICAgIGluc2V0IDAgLTFweCAzcHggdHJhbnNwYXJlbnRpemUoYmxhY2ssIDAuOSk7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC02cHgpO1xuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycztcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmOmNoZWNrZWQgKyBkaXYge1xuICAgICAgYmFja2dyb3VuZDogJGJsdWU7XG4gICAgICBib3gtc2hhZG93OiAkZ2xvdy1zaGFkb3csIGluc2V0IDAgMnB4IDJweCAycHggdHJhbnNwYXJlbnRpemUoYmxhY2ssIDAuNyksXG4gICAgICAgIGluc2V0IDAgMCB0cmFuc3BhcmVudDtcblxuICAgICAgJjo6YmVmb3JlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoJF9oYW5kbGUtdHJhbnNsYXRpb24sIC02cHgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5ociB7XG4gIEBleHRlbmQgLmluc2V0O1xuICB3aWR0aDogNzIlO1xuICBoZWlnaHQ6IDhweDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBib3JkZXI6IDA7XG59XG5cbmNvZGUsXG5wcmUge1xuICBwYWRkaW5nOiAwLjVlbSAxZW07XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIGJveC1zaGFkb3c6IDAgNXB4IDMwcHggMCB0cmFuc3BhcmVudGl6ZShibGFjaywgMC45NSk7XG59XG5cbmNvZGUge1xuICBiYWNrZ3JvdW5kOiAjZTZlNmU2O1xufVxuXG5wcmUge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgbWFyZ2luOiA0ZW0gMDtcbn1cblxuY29kZSxcbnByZSB7XG4gICYsXG4gICYgKiB7XG4gICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgbGluZS1oZWlnaHQ6IDJlbTtcbiAgICBjdXJzb3I6IGF1dG87XG4gICAgdXNlci1zZWxlY3Q6IHRleHQ7XG4gICAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiB0ZXh0O1xuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IHRleHQ7XG4gICAgLWtodG1sLXVzZXItc2VsZWN0OiB0ZXh0O1xuICAgIC1tb3otdXNlci1zZWxlY3Q6IHRleHQ7XG4gICAgLW1zLXVzZXItc2VsZWN0OiB0ZXh0O1xuICB9XG59XG5cbmJsb2NrcXVvdGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMC41ZW0gMWVtO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJveC1zaGFkb3c6IDAgNXB4IDMwcHggMCB0cmFuc3BhcmVudGl6ZShibGFjaywgMC45NSk7XG4gIGJvcmRlci1sZWZ0OiA2cHggc29saWQgJGJsdWU7XG59XG4iLCJAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ0NhdmVhdCc7XG4gICAgc3JjOiB1cmwoJy4uLy4uL2ZvbnRzL0JvbGQvQ2F2ZWF0LUJvbGQud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXG4gICAgICAgIHVybCgnLi4vLi4vZm9udHMvQm9sZC9DYXZlYXQtQm9sZC53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtZGlzcGxheTogc3dhcDtcbn1cblxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdDYXZlYXQnO1xuICAgIHNyYzogdXJsKCcuLi8uLi9mb250cy9SZWd1bGFyL0NhdmVhdC1SZWd1bGFyLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxuICAgICAgICB1cmwoJy4uLy4uL2ZvbnRzL1JlZ3VsYXIvQ2F2ZWF0LVJlZ3VsYXIud29mZicpIGZvcm1hdCgnd29mZicpO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtZGlzcGxheTogc3dhcDtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnRmlndXJpbmVTeW1ib2xUMSc7XG4gIHNyYzogdXJsKCcuLi8uLi9mb250cy8zcmQgUGFydHkvQ2hlc3NWYXJpYW50cy9GaWd1cmluZVN5bWJvbFQxQm9sZC53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcbiAgICAgIHVybCgnLi4vLi4vZm9udHMvM3JkIFBhcnR5L0NoZXNzVmFyaWFudHMvRmlndXJpbmVTeW1ib2xUMUJvbGQud29mZicpIGZvcm1hdCgnd29mZicpO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ0ZpZ3VyaW5lU3ltYm9sVDEnO1xuICBzcmM6IHVybCgnLi4vLi4vZm9udHMvM3JkIFBhcnR5L0NoZXNzVmFyaWFudHMvRmlndXJpbmVTeW1ib2xUMS53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcbiAgICAgIHVybCgnLi4vLi4vZm9udHMvM3JkIFBhcnR5L0NoZXNzVmFyaWFudHMvRmlndXJpbmVTeW1ib2xUMS53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xufVxuXG4iLCIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiQ2F2ZWF0XCI7XG4gIHNyYzogdXJsKFwiLi4vLi4vZm9udHMvQm9sZC9DYXZlYXQtQm9sZC53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKSwgdXJsKFwiLi4vLi4vZm9udHMvQm9sZC9DYXZlYXQtQm9sZC53b2ZmXCIpIGZvcm1hdChcIndvZmZcIik7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJDYXZlYXRcIjtcbiAgc3JjOiB1cmwoXCIuLi8uLi9mb250cy9SZWd1bGFyL0NhdmVhdC1SZWd1bGFyLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpLCB1cmwoXCIuLi8uLi9mb250cy9SZWd1bGFyL0NhdmVhdC1SZWd1bGFyLndvZmZcIikgZm9ybWF0KFwid29mZlwiKTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiRmlndXJpbmVTeW1ib2xUMVwiO1xuICBzcmM6IHVybChcIi4uLy4uL2ZvbnRzLzNyZCBQYXJ0eS9DaGVzc1ZhcmlhbnRzL0ZpZ3VyaW5lU3ltYm9sVDFCb2xkLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpLCB1cmwoXCIuLi8uLi9mb250cy8zcmQgUGFydHkvQ2hlc3NWYXJpYW50cy9GaWd1cmluZVN5bWJvbFQxQm9sZC53b2ZmXCIpIGZvcm1hdChcIndvZmZcIik7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJGaWd1cmluZVN5bWJvbFQxXCI7XG4gIHNyYzogdXJsKFwiLi4vLi4vZm9udHMvM3JkIFBhcnR5L0NoZXNzVmFyaWFudHMvRmlndXJpbmVTeW1ib2xUMS53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKSwgdXJsKFwiLi4vLi4vZm9udHMvM3JkIFBhcnR5L0NoZXNzVmFyaWFudHMvRmlndXJpbmVTeW1ib2xUMS53b2ZmXCIpIGZvcm1hdChcIndvZmZcIik7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xufVxuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBDb250YWluZXIgVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgQ29udGFpbmVyIFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIENvbnRhaW5lciBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBIaWdobGlnaHQgVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgQW5ub3RhdGlvbiBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBWYXJpYXRpb24gVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgUGx5IFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG46cm9vdCB7XG4gIC0tYmctY29sb3I6ICNmMmYzZjc7XG4gIC0tZmctY29sb3I6ICMzODNhNDE7XG4gIC0tcmVkOiAjZTQzMDMwO1xuICAtLWdyZWVuOiAjMTlhMTg3O1xuICAtLWJsdWU6ICMzNjdiZjA7XG4gIC0tZGFyay1ibHVlOiAjMjY1YWIxO1xuICAtLW1hcm9vbjogI2I4MTc0YztcbiAgLS1wdXJwbGU6ICM4YzQyYWI7XG59XG5cbjo6LW1vei1mb2N1cy1pbm5lcixcbjotbW96LWZvY3VzcmluZyB7XG4gIGJvcmRlcjogMDtcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xuICB0ZXh0LXNoYWRvdzogMCAwIDAgIzM4M2E0MTtcbn1cblxuOjpzZWxlY3Rpb24sXG46Oi1tb3otc2VsZWN0aW9uIHtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kOiBibGFjaztcbn1cblxuKiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApICFpbXBvcnRhbnQ7XG4gIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcbiAgY3Vyc29yOiBkZWZhdWx0O1xuICBsZXR0ZXItc3BhY2luZzogMDtcbn1cblxuLnNlbGVjdGFibGUsXG4uc2VsZWN0YWJsZSAqIHtcbiAgY3Vyc29yOiBhdXRvO1xuICB1c2VyLXNlbGVjdDogdGV4dDtcbiAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiB0ZXh0O1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiB0ZXh0O1xuICAta2h0bWwtdXNlci1zZWxlY3Q6IHRleHQ7XG4gIC1tb3otdXNlci1zZWxlY3Q6IHRleHQ7XG4gIC1tcy11c2VyLXNlbGVjdDogdGV4dDtcbn1cblxuaHRtbCxcbmJvZHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmM2Y3O1xuICBjb2xvcjogIzM4M2E0MTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBmb250LXNpemU6IDEwcHQ7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi53aXRoLXNoYWRvdywgLm91dHNldCwgYnV0dG9uLCAuY2hlY2t0ZXh0IGlucHV0ICsgc3BhbiwgLmJsdWUtYnV0dG9uLCAuY2hlY2t0ZXh0IGlucHV0OmNoZWNrZWQgKyBzcGFuLCBidXR0b24uYmx1ZS1idXR0b24sIC5yZWQtYnV0dG9uLmJsdWUtYnV0dG9uLCAuZ3JlZW4tYnV0dG9uLmJsdWUtYnV0dG9uLCAuZ3JlZW4tYnV0dG9uLCBidXR0b24uZ3JlZW4tYnV0dG9uLCAucmVkLWJ1dHRvbi5ncmVlbi1idXR0b24sIC5yZWQtYnV0dG9uLCBidXR0b24ucmVkLWJ1dHRvbixcbmlucHV0W3R5cGU9YnV0dG9uXSxcbmlucHV0W3R5cGU9c3VibWl0XSxcbmlucHV0W3R5cGU9cmVzZXRdLCBzZWxlY3QsIGlucHV0W3R5cGU9dGV4dF06bm90KHNlbGVjdCk6Zm9jdXMsXG5pbnB1dFt0eXBlPXNlYXJjaF06bm90KHNlbGVjdCk6Zm9jdXMsXG5pbnB1dFt0eXBlPXRlbF06bm90KHNlbGVjdCk6Zm9jdXMsXG5pbnB1dFt0eXBlPXVybF06bm90KHNlbGVjdCk6Zm9jdXMsXG5pbnB1dFt0eXBlPWVtYWlsXTpub3Qoc2VsZWN0KTpmb2N1cyxcbmlucHV0W3R5cGU9cGFzc3dvcmRdOm5vdChzZWxlY3QpOmZvY3VzLFxuaW5wdXRbdHlwZT1kYXRlXTpub3Qoc2VsZWN0KTpmb2N1cyxcbmlucHV0W3R5cGU9bW9udGhdOm5vdChzZWxlY3QpOmZvY3VzLFxuaW5wdXRbdHlwZT13ZWVrXTpub3Qoc2VsZWN0KTpmb2N1cyxcbmlucHV0W3R5cGU9dGltZV06bm90KHNlbGVjdCk6Zm9jdXMsXG5pbnB1dFt0eXBlPW51bWJlcl06bm90KHNlbGVjdCk6Zm9jdXMsXG5pbnB1dFt0eXBlPWNvbG9yXTpub3Qoc2VsZWN0KTpmb2N1cyxcbnNlbGVjdDpub3Qoc2VsZWN0KTpmb2N1cyxcbnRleHRhcmVhOm5vdChzZWxlY3QpOmZvY3VzLCAucGFwZXIge1xuICBib3gtc2hhZG93OiA2cHggNnB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpLCAtNnB4IC02cHggMTBweCB3aGl0ZTtcbn1cblxuLm91dHNldCwgYnV0dG9uLCAuY2hlY2t0ZXh0IGlucHV0ICsgc3BhbiwgLmJsdWUtYnV0dG9uLCAuY2hlY2t0ZXh0IGlucHV0OmNoZWNrZWQgKyBzcGFuLCBidXR0b24uYmx1ZS1idXR0b24sIC5yZWQtYnV0dG9uLmJsdWUtYnV0dG9uLCAuZ3JlZW4tYnV0dG9uLmJsdWUtYnV0dG9uLCAuZ3JlZW4tYnV0dG9uLCBidXR0b24uZ3JlZW4tYnV0dG9uLCAucmVkLWJ1dHRvbi5ncmVlbi1idXR0b24sIC5yZWQtYnV0dG9uLCBidXR0b24ucmVkLWJ1dHRvbixcbmlucHV0W3R5cGU9YnV0dG9uXSxcbmlucHV0W3R5cGU9c3VibWl0XSxcbmlucHV0W3R5cGU9cmVzZXRdLCBzZWxlY3QsIGlucHV0W3R5cGU9dGV4dF06bm90KHNlbGVjdCk6Zm9jdXMsXG5pbnB1dFt0eXBlPXNlYXJjaF06bm90KHNlbGVjdCk6Zm9jdXMsXG5pbnB1dFt0eXBlPXRlbF06bm90KHNlbGVjdCk6Zm9jdXMsXG5pbnB1dFt0eXBlPXVybF06bm90KHNlbGVjdCk6Zm9jdXMsXG5pbnB1dFt0eXBlPWVtYWlsXTpub3Qoc2VsZWN0KTpmb2N1cyxcbmlucHV0W3R5cGU9cGFzc3dvcmRdOm5vdChzZWxlY3QpOmZvY3VzLFxuaW5wdXRbdHlwZT1kYXRlXTpub3Qoc2VsZWN0KTpmb2N1cyxcbmlucHV0W3R5cGU9bW9udGhdOm5vdChzZWxlY3QpOmZvY3VzLFxuaW5wdXRbdHlwZT13ZWVrXTpub3Qoc2VsZWN0KTpmb2N1cyxcbmlucHV0W3R5cGU9dGltZV06bm90KHNlbGVjdCk6Zm9jdXMsXG5pbnB1dFt0eXBlPW51bWJlcl06bm90KHNlbGVjdCk6Zm9jdXMsXG5pbnB1dFt0eXBlPWNvbG9yXTpub3Qoc2VsZWN0KTpmb2N1cyxcbnNlbGVjdDpub3Qoc2VsZWN0KTpmb2N1cyxcbnRleHRhcmVhOm5vdChzZWxlY3QpOmZvY3VzLCAucGFwZXIge1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjZjJmM2Y3O1xufVxuXG4uaW5zZXQsIGhyLCBidXR0b24uYWN0aXZlLCAuY2hlY2t0ZXh0IGlucHV0ICsgc3Bhbi5hY3RpdmUsIC5hY3RpdmUuYmx1ZS1idXR0b24sIC5hY3RpdmUuZ3JlZW4tYnV0dG9uLCAuYWN0aXZlLnJlZC1idXR0b24sIGJ1dHRvbjphY3RpdmUsIC5jaGVja3RleHQgaW5wdXQgKyBzcGFuOmFjdGl2ZSwgLmJsdWUtYnV0dG9uOmFjdGl2ZSwgLmdyZWVuLWJ1dHRvbjphY3RpdmUsIC5yZWQtYnV0dG9uOmFjdGl2ZSxcbmlucHV0W3R5cGU9YnV0dG9uXS5hY3RpdmUsXG5pbnB1dFt0eXBlPWJ1dHRvbl06YWN0aXZlLFxuaW5wdXRbdHlwZT1zdWJtaXRdLmFjdGl2ZSxcbmlucHV0W3R5cGU9c3VibWl0XTphY3RpdmUsXG5pbnB1dFt0eXBlPXJlc2V0XS5hY3RpdmUsXG5pbnB1dFt0eXBlPXJlc2V0XTphY3RpdmUsIGlucHV0W3R5cGU9dGV4dF06bm90KHNlbGVjdCksXG5pbnB1dFt0eXBlPXNlYXJjaF06bm90KHNlbGVjdCksXG5pbnB1dFt0eXBlPXRlbF06bm90KHNlbGVjdCksXG5pbnB1dFt0eXBlPXVybF06bm90KHNlbGVjdCksXG5pbnB1dFt0eXBlPWVtYWlsXTpub3Qoc2VsZWN0KSxcbmlucHV0W3R5cGU9cGFzc3dvcmRdOm5vdChzZWxlY3QpLFxuaW5wdXRbdHlwZT1kYXRlXTpub3Qoc2VsZWN0KSxcbmlucHV0W3R5cGU9bW9udGhdOm5vdChzZWxlY3QpLFxuaW5wdXRbdHlwZT13ZWVrXTpub3Qoc2VsZWN0KSxcbmlucHV0W3R5cGU9dGltZV06bm90KHNlbGVjdCksXG5pbnB1dFt0eXBlPW51bWJlcl06bm90KHNlbGVjdCksXG5pbnB1dFt0eXBlPWNvbG9yXTpub3Qoc2VsZWN0KSxcbnNlbGVjdDpub3Qoc2VsZWN0KSxcbnRleHRhcmVhOm5vdChzZWxlY3QpIHtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm94LXNoYWRvdzogMCAwIHRyYW5zcGFyZW50LCAwIDAgdHJhbnNwYXJlbnQsIGluc2V0IDNweCAzcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4xKSwgaW5zZXQgLTNweCAtM3B4IDVweCB3aGl0ZTtcbiAgYmFja2dyb3VuZDogI2Y4ZjlmYjtcbn1cblxuLnBhcGVyIHtcbiAgcGFkZGluZzogMTBweCAyMHB4IDIwcHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIG1pbi1oZWlnaHQ6IDEwMHB4O1xuICBmb250LXNpemU6IDEuMmVtO1xuICBiYWNrZ3JvdW5kOiAjZjJmM2Y3O1xufVxuXG5zZWN0aW9uLFxuYXJ0aWNsZSxcbi5zZWN0aW9uLFxuLmFydGljbGUsXG4ucGFwZXIge1xuICBsaW5lLWhlaWdodDogMmVtO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIHdvcmQtYnJlYWs6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDJlbTtcbn1cblxuaW5wdXRbdHlwZT10ZXh0XSxcbmlucHV0W3R5cGU9c2VhcmNoXSxcbmlucHV0W3R5cGU9dGVsXSxcbmlucHV0W3R5cGU9dXJsXSxcbmlucHV0W3R5cGU9ZW1haWxdLFxuaW5wdXRbdHlwZT1wYXNzd29yZF0sXG5pbnB1dFt0eXBlPWRhdGVdLFxuaW5wdXRbdHlwZT1tb250aF0sXG5pbnB1dFt0eXBlPXdlZWtdLFxuaW5wdXRbdHlwZT10aW1lXSxcbmlucHV0W3R5cGU9bnVtYmVyXSxcbmlucHV0W3R5cGU9Y29sb3JdLFxuc2VsZWN0LFxudGV4dGFyZWEge1xuICBib3JkZXI6IDA7XG4gIGJhY2tncm91bmQ6ICNmMmYzZjc7XG4gIGNvbG9yOiAjMzgzYTQxO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBwYWRkaW5nOiAwIDEuMjVlbTtcbiAgbGluZS1oZWlnaHQ6IDEuMjVlbTtcbiAgaGVpZ2h0OiAzLjVlbTtcbiAgbWFyZ2luOiAxMHB4IDA7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xuICBjdXJzb3I6IHRleHQ7XG4gIHVzZXItc2VsZWN0OiB0ZXh0O1xuICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IHRleHQ7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IHRleHQ7XG4gIC1raHRtbC11c2VyLXNlbGVjdDogdGV4dDtcbiAgLW1vei11c2VyLXNlbGVjdDogdGV4dDtcbiAgLW1zLXVzZXItc2VsZWN0OiB0ZXh0O1xuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuMnM7XG59XG50ZXh0YXJlYSB7XG4gIGhlaWdodDogMzUwcHg7XG4gIHBhZGRpbmc6IDEuMjVlbTtcbn1cblxuc2VsZWN0IHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kOiB1cmwoZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCMlpYSnphVzl1UFNJeExqRWlJSFpwWlhkQ2IzZzlJakFnTUNBeE9TQXhPU0lnZUcxc2JuTTlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5Mekl3TURBdmMzWm5JajQ4WnlCMGNtRnVjMlp2Y20wOUltMWhkSEpwZUNndU1ETTBJREFnTUNBdU1ETTBJQzAyTGpnZ01TNDNaUzAxS1NJZ2MzUjViR1U5SW1acGJHdzZJemRpTjJVNFl5SStQSEJoZEdnZ1pEMGliVFE0TUNBek5EUXRNakV4TFRJeE1tTXRNVFl0TVRZdE5ERXRNVFl0TlRjZ01DMHhOaUF4TmkweE5pQTBNaUF3SURVM2JESXpPQ0F5TXpsak9DNDBJRGd1TlNBeU1DQXhNaUF6TVNBeE1pQXhNU0F3TGpVMklESXlMVE11TWlBek1TMHhNbXd5TXpndE1qTTVZekUyTFRFMklERTJMVFF5SURBdE5UZHpMVFF4TFRFMkxUVTNJREI2SWlCemRIbHNaVDBpWm1sc2JEb2pOMkkzWlRoaklpOCtQQzluUGp3dmMzWm5QZ289KSBuby1yZXBlYXQgcmlnaHQgMWVtIGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiAxLjJlbTtcbiAgcGFkZGluZy1yaWdodDogM2VtO1xufVxuXG5pbnB1dDo6cGxhY2Vob2xkZXIsXG50ZXh0YXJlYTo6cGxhY2Vob2xkZXIge1xuICBvcGFjaXR5OiAxO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnM7XG4gIGNvbG9yOiBpbmhlcml0O1xufVxuXG5pbnB1dDpmb2N1czo6cGxhY2Vob2xkZXIsXG50ZXh0YXJlYTpmb2N1czo6cGxhY2Vob2xkZXIge1xuICBvcGFjaXR5OiAwLjI7XG59XG5cbmlucHV0Oi1tcy1pbnB1dC1wbGFjZWhvbGRlcixcbnRleHRhcmVhOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycztcbiAgY29sb3I6IGluaGVyaXQ7XG59XG5cbmlucHV0OmZvY3VzOi1tcy1pbnB1dC1wbGFjZWhvbGRlcixcbnRleHRhcmVhOmZvY3VzOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIG9wYWNpdHk6IDAuMjtcbn1cblxuaW5wdXRbdHlwZT1zZWFyY2hdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uLFxuaW5wdXRbdHlwZT1zZWFyY2hdOjotd2Via2l0LXNlYXJjaC1jYW5jZWwtYnV0dG9uLFxuaW5wdXRbdHlwZT1zZWFyY2hdOjotd2Via2l0LXNlYXJjaC1yZXN1bHRzLWJ1dHRvbixcbmlucHV0W3R5cGU9c2VhcmNoXTo6LXdlYmtpdC1zZWFyY2gtcmVzdWx0cy1kZWNvcmF0aW9uIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuYnV0dG9uLCAuY2hlY2t0ZXh0IGlucHV0ICsgc3BhbiwgLmJsdWUtYnV0dG9uLCAuY2hlY2t0ZXh0IGlucHV0OmNoZWNrZWQgKyBzcGFuLCBidXR0b24uYmx1ZS1idXR0b24sIC5yZWQtYnV0dG9uLmJsdWUtYnV0dG9uLCAuZ3JlZW4tYnV0dG9uLmJsdWUtYnV0dG9uLCAuZ3JlZW4tYnV0dG9uLCBidXR0b24uZ3JlZW4tYnV0dG9uLCAucmVkLWJ1dHRvbi5ncmVlbi1idXR0b24sIC5yZWQtYnV0dG9uLCBidXR0b24ucmVkLWJ1dHRvbixcbmlucHV0W3R5cGU9YnV0dG9uXSxcbmlucHV0W3R5cGU9c3VibWl0XSxcbmlucHV0W3R5cGU9cmVzZXRdIHtcbiAgYm9yZGVyOiAwO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgcGFkZGluZzogMTBweCAwO1xuICB3aWR0aDogOGVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBiYWNrZ3JvdW5kLWNvbG9yLCBib3gtc2hhZG93O1xuICB0cmFuc2l0aW9uLWRlbGF5OiAwLjJzO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjJzO1xufVxuYnV0dG9uLmFjdGl2ZSwgLmNoZWNrdGV4dCBpbnB1dCArIHNwYW4uYWN0aXZlLCAuYWN0aXZlLmJsdWUtYnV0dG9uLCAuYWN0aXZlLmdyZWVuLWJ1dHRvbiwgLmFjdGl2ZS5yZWQtYnV0dG9uLCBidXR0b246YWN0aXZlLCAuY2hlY2t0ZXh0IGlucHV0ICsgc3BhbjphY3RpdmUsIC5ibHVlLWJ1dHRvbjphY3RpdmUsIC5ncmVlbi1idXR0b246YWN0aXZlLCAucmVkLWJ1dHRvbjphY3RpdmUsXG5pbnB1dFt0eXBlPWJ1dHRvbl0uYWN0aXZlLFxuaW5wdXRbdHlwZT1idXR0b25dOmFjdGl2ZSxcbmlucHV0W3R5cGU9c3VibWl0XS5hY3RpdmUsXG5pbnB1dFt0eXBlPXN1Ym1pdF06YWN0aXZlLFxuaW5wdXRbdHlwZT1yZXNldF0uYWN0aXZlLFxuaW5wdXRbdHlwZT1yZXNldF06YWN0aXZlIHtcbiAgdHJhbnNpdGlvbi1kZWxheTogMHM7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMXM7XG59XG4ucmVkLWJ1dHRvbiwgYnV0dG9uLnJlZC1idXR0b24sIC5jaGVja3RleHQgaW5wdXQgKyBzcGFuLnJlZC1idXR0b24sIC5yZWQtYnV0dG9uLmJsdWUtYnV0dG9uLCAucmVkLWJ1dHRvbi5ncmVlbi1idXR0b24sXG5pbnB1dFt0eXBlPWJ1dHRvbl0ucmVkLWJ1dHRvbixcbmlucHV0W3R5cGU9c3VibWl0XS5yZWQtYnV0dG9uLFxuaW5wdXRbdHlwZT1yZXNldF0ucmVkLWJ1dHRvbiB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtc2hhZG93OiAwIDAuMWVtIDAuMWVtIHJnYmEoMCwgMCwgMCwgMC43KTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgI2U0MzAzMCAzMCUsICNlODRiNGIgODAlKTtcbiAgYm94LXNoYWRvdzogMCAwIDAuNWVtIHJnYmEoMjI4LCA0OCwgNDgsIDAuNyksIDAgMCB0cmFuc3BhcmVudCwgaW5zZXQgMCAtNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjA1KSwgaW5zZXQgMCAycHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG4gIGJvcmRlci1yYWRpdXM6IDZweCA2cHggOHB4IDhweDtcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYm94LXNoYWRvdywgYm9yZGVyLXJhZGl1cztcbn1cbi5yZWQtYnV0dG9uLmFjdGl2ZSwgLnJlZC1idXR0b246YWN0aXZlLCBidXR0b24ucmVkLWJ1dHRvbi5hY3RpdmUsIGJ1dHRvbi5yZWQtYnV0dG9uOmFjdGl2ZSxcbmlucHV0W3R5cGU9YnV0dG9uXS5yZWQtYnV0dG9uLmFjdGl2ZSxcbmlucHV0W3R5cGU9YnV0dG9uXS5yZWQtYnV0dG9uOmFjdGl2ZSxcbmlucHV0W3R5cGU9c3VibWl0XS5yZWQtYnV0dG9uLmFjdGl2ZSxcbmlucHV0W3R5cGU9c3VibWl0XS5yZWQtYnV0dG9uOmFjdGl2ZSxcbmlucHV0W3R5cGU9cmVzZXRdLnJlZC1idXR0b24uYWN0aXZlLFxuaW5wdXRbdHlwZT1yZXNldF0ucmVkLWJ1dHRvbjphY3RpdmUge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAjZTQzMDMwIDMwJSwgI2U4NGI0YiA4MCUpO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGJveC1zaGFkb3c6IDAgMCB0cmFuc3BhcmVudCwgMCAwIHRyYW5zcGFyZW50LCBpbnNldCAwIDJweCA1cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cblxuLmdyZWVuLWJ1dHRvbiwgYnV0dG9uLmdyZWVuLWJ1dHRvbiwgLmNoZWNrdGV4dCBpbnB1dCArIHNwYW4uZ3JlZW4tYnV0dG9uLCAuZ3JlZW4tYnV0dG9uLmJsdWUtYnV0dG9uLCAuZ3JlZW4tYnV0dG9uLnJlZC1idXR0b24sXG5pbnB1dFt0eXBlPWJ1dHRvbl0uZ3JlZW4tYnV0dG9uLFxuaW5wdXRbdHlwZT1zdWJtaXRdLmdyZWVuLWJ1dHRvbixcbmlucHV0W3R5cGU9cmVzZXRdLmdyZWVuLWJ1dHRvbiB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtc2hhZG93OiAwIDAuMWVtIDAuMWVtIHJnYmEoMCwgMCwgMCwgMC43KTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgIzE5YTE4NyAzMCUsICMxZGJiOWQgODAlKTtcbiAgYm94LXNoYWRvdzogMCAwIDAuNWVtIHJnYmEoMjUsIDE2MSwgMTM1LCAwLjcpLCAwIDAgdHJhbnNwYXJlbnQsIGluc2V0IDAgLTVweCAwIHJnYmEoMCwgMCwgMCwgMC4wNSksIGluc2V0IDAgMnB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuICBib3JkZXItcmFkaXVzOiA2cHggNnB4IDhweCA4cHg7XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGJveC1zaGFkb3csIGJvcmRlci1yYWRpdXM7XG59XG4uZ3JlZW4tYnV0dG9uLmFjdGl2ZSwgLmdyZWVuLWJ1dHRvbjphY3RpdmUsIGJ1dHRvbi5ncmVlbi1idXR0b24uYWN0aXZlLCBidXR0b24uZ3JlZW4tYnV0dG9uOmFjdGl2ZSxcbmlucHV0W3R5cGU9YnV0dG9uXS5ncmVlbi1idXR0b24uYWN0aXZlLFxuaW5wdXRbdHlwZT1idXR0b25dLmdyZWVuLWJ1dHRvbjphY3RpdmUsXG5pbnB1dFt0eXBlPXN1Ym1pdF0uZ3JlZW4tYnV0dG9uLmFjdGl2ZSxcbmlucHV0W3R5cGU9c3VibWl0XS5ncmVlbi1idXR0b246YWN0aXZlLFxuaW5wdXRbdHlwZT1yZXNldF0uZ3JlZW4tYnV0dG9uLmFjdGl2ZSxcbmlucHV0W3R5cGU9cmVzZXRdLmdyZWVuLWJ1dHRvbjphY3RpdmUge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAjMTlhMTg3IDMwJSwgIzFkYmI5ZCA4MCUpO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGJveC1zaGFkb3c6IDAgMCB0cmFuc3BhcmVudCwgMCAwIHRyYW5zcGFyZW50LCBpbnNldCAwIDJweCA1cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cblxuLmJsdWUtYnV0dG9uLCAuY2hlY2t0ZXh0IGlucHV0OmNoZWNrZWQgKyBzcGFuLCBidXR0b24uYmx1ZS1idXR0b24sIC5jaGVja3RleHQgaW5wdXQgKyBzcGFuLmJsdWUtYnV0dG9uLCAuYmx1ZS1idXR0b24ucmVkLWJ1dHRvbiwgLmJsdWUtYnV0dG9uLmdyZWVuLWJ1dHRvbixcbmlucHV0W3R5cGU9YnV0dG9uXS5ibHVlLWJ1dHRvbixcbmlucHV0W3R5cGU9c3VibWl0XS5ibHVlLWJ1dHRvbixcbmlucHV0W3R5cGU9cmVzZXRdLmJsdWUtYnV0dG9uIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1zaGFkb3c6IDAgMC4xZW0gMC4xZW0gcmdiYSgwLCAwLCAwLCAwLjcpO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAjMzY3YmYwIDMwJSwgIzUyOGVmMiA4MCUpO1xuICBib3gtc2hhZG93OiAwIDAgMC41ZW0gcmdiYSg1NCwgMTIzLCAyNDAsIDAuNyksIDAgMCB0cmFuc3BhcmVudCwgaW5zZXQgMCAtNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjA1KSwgaW5zZXQgMCAycHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG4gIGJvcmRlci1yYWRpdXM6IDZweCA2cHggOHB4IDhweDtcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYm94LXNoYWRvdywgYm9yZGVyLXJhZGl1cztcbn1cbi5ibHVlLWJ1dHRvbi5hY3RpdmUsIC5jaGVja3RleHQgaW5wdXQ6Y2hlY2tlZCArIHNwYW4uYWN0aXZlLCAuYmx1ZS1idXR0b246YWN0aXZlLCAuY2hlY2t0ZXh0IGlucHV0OmNoZWNrZWQgKyBzcGFuOmFjdGl2ZSwgYnV0dG9uLmJsdWUtYnV0dG9uLmFjdGl2ZSwgYnV0dG9uLmJsdWUtYnV0dG9uOmFjdGl2ZSxcbmlucHV0W3R5cGU9YnV0dG9uXS5ibHVlLWJ1dHRvbi5hY3RpdmUsXG5pbnB1dFt0eXBlPWJ1dHRvbl0uYmx1ZS1idXR0b246YWN0aXZlLFxuaW5wdXRbdHlwZT1zdWJtaXRdLmJsdWUtYnV0dG9uLmFjdGl2ZSxcbmlucHV0W3R5cGU9c3VibWl0XS5ibHVlLWJ1dHRvbjphY3RpdmUsXG5pbnB1dFt0eXBlPXJlc2V0XS5ibHVlLWJ1dHRvbi5hY3RpdmUsXG5pbnB1dFt0eXBlPXJlc2V0XS5ibHVlLWJ1dHRvbjphY3RpdmUge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAjMzY3YmYwIDMwJSwgIzUyOGVmMiA4MCUpO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGJveC1zaGFkb3c6IDAgMCB0cmFuc3BhcmVudCwgMCAwIHRyYW5zcGFyZW50LCBpbnNldCAwIDJweCA1cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cblxubGFiZWwge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDAuNTZlbSAwO1xufVxubGFiZWwsIGxhYmVsICoge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmEsIGE6bGluaywgYTp2aXNpdGVkLCBhOmhvdmVyIGE6YWN0aXZlIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjMzY3YmYwO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuYSwgYSAqLCBhOmxpbmssIGE6bGluayAqLCBhOnZpc2l0ZWQsIGE6dmlzaXRlZCAqLCBhOmhvdmVyIGE6YWN0aXZlLCBhOmhvdmVyIGE6YWN0aXZlICoge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmgxLFxuaDIsXG5oMyxcbmg0LFxuaDUsXG5oNiB7XG4gIGxpbmUtaGVpZ2h0OiAxLjVlbTtcbn1cblxuaDEge1xuICBmb250LXNpemU6IDRlbTtcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4gIG1hcmdpbjogMC43ZW0gMDtcbn1cblxuaDIge1xuICBmb250LXNpemU6IDNlbTtcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4gIG1hcmdpbjogMC44ZW0gMDtcbn1cblxuaDMge1xuICBmb250LXNpemU6IDIuNWVtO1xuICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgbWFyZ2luOiAwLjllbSAwO1xufVxuXG5oNCB7XG4gIGZvbnQtc2l6ZTogMmVtO1xuICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgbWFyZ2luOiAxZW0gMDtcbn1cblxuaDUge1xuICBtYXJnaW46IDAuNWVtIDA7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG5cbmg2IHtcbiAgbWFyZ2luOiAxZW0gMCAxZW0gMS40ZW07XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuaW5wdXRbdHlwZT1jaGVja2JveF0sXG5pbnB1dFt0eXBlPXJhZGlvXSB7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGhlaWdodDogMS4yZW07XG4gIHdpZHRoOiAxLjJlbTtcbiAgbWFyZ2luOiAwIDAuM2VtO1xuICBib3gtc2hhZG93OiAycHggMnB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMiksIC0ycHggLTJweCAzcHggd2hpdGUsIGluc2V0IDFweCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgaW5zZXQgLTFweCAtMXB4IDJweCB3aGl0ZTtcbiAgYm9yZGVyOiAwLjE1ZW0gc29saWQgI2YyZjNmNztcbiAgdmVydGljYWwtYWxpZ246IHRleHQtYm90dG9tO1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBiYWNrZ3JvdW5kLCBib3gtc2hhZG93O1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjJzO1xufVxuaW5wdXRbdHlwZT1jaGVja2JveF06YWN0aXZlLFxuaW5wdXRbdHlwZT1yYWRpb106YWN0aXZlIHtcbiAgYm94LXNoYWRvdzogMnB4IDJweCAzcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAtMnB4IC0ycHggM3B4IHdoaXRlLCBpbnNldCAxcHggMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMiksIGluc2V0IC0xcHggLTFweCAycHggd2hpdGUsIGluc2V0IDAgMC4xZW0gMC4yNWVtIHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cbmlucHV0W3R5cGU9Y2hlY2tib3hdOmNoZWNrZWQsXG5pbnB1dFt0eXBlPXJhZGlvXTpjaGVja2VkIHtcbiAgYm9yZGVyLXdpZHRoOiAwLjFlbTtcbiAgYm9yZGVyLWNvbG9yOiAjMTE1ZmUyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzY3YmYwO1xufVxuXG5pbnB1dFt0eXBlPWNoZWNrYm94XSB7XG4gIGJvcmRlci1yYWRpdXM6IDI1JTtcbn1cbmlucHV0W3R5cGU9Y2hlY2tib3hdOmNoZWNrZWQge1xuICBib3gtc2hhZG93OiAwIDAgMC41ZW0gcmdiYSg1NCwgMTIzLCAyNDAsIDAuNyksIGluc2V0IDAgLTAuMWVtIDAgcmdiYSgwLCAwLCAwLCAwLjIpLCBpbnNldCAwIDAuMWVtIDAuMWVtIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbn1cblxuaW5wdXRbdHlwZT1yYWRpb10ge1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xufVxuaW5wdXRbdHlwZT1yYWRpb106Y2hlY2tlZCB7XG4gIGJveC1zaGFkb3c6IDAgMCAwLjVlbSByZ2JhKDU0LCAxMjMsIDI0MCwgMC43KTtcbiAgYm94LXNoYWRvdzogMCAwIDAuNWVtIHJnYmEoNTQsIDEyMywgMjQwLCAwLjcpLCBpbnNldCAwIDAuMTJlbSAwLjFlbSByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpO1xuICBib3JkZXItYm90dG9tLXdpZHRoOiAwLjE1ZW07XG59XG5cbi5jaGVja3RleHQge1xuICB3aWR0aDogYXV0bztcbiAgbWFyZ2luOiAwLjVlbTtcbn1cbi5jaGVja3RleHQgaW5wdXQge1xuICBkaXNwbGF5OiBub25lO1xufVxuLmNoZWNrdGV4dCBpbnB1dCArIHNwYW4ge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZzogMWVtO1xuICB0cmFuc2l0aW9uLWRlbGF5OiAwcztcbn1cbi5jaGVja3RleHQgaW5wdXQ6Y2hlY2tlZCArIHNwYW4ge1xuICBwYWRkaW5nOiAxZW07XG59XG5cbi5zd2l0Y2gge1xuICBoZWlnaHQ6IDJyZW07XG4gIHdpZHRoOiA4cmVtO1xuICBwYWRkaW5nOiAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uc3dpdGNoIGlucHV0IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5zd2l0Y2ggaW5wdXQgKyBkaXYge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiA5OTlweDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGJveC1zaGFkb3csIGJhY2tncm91bmQtY29sb3I7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMnM7XG4gIHRyYW5zaXRpb24tZGVsYXk6IDAuMnM7XG4gIGJveC1zaGFkb3c6IDNweCAzcHggMnB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjEpLCBpbnNldCAycHggMnB4IDJweCAxcHggcmdiYSgwLCAwLCAwLCAwLjEpLCBpbnNldCAtMnB4IC0ycHggMXB4IHdoaXRlO1xufVxuLnN3aXRjaCBpbnB1dCArIGRpdjo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogY2FsYygycmVtICsgNHB4KTtcbiAgd2lkdGg6IGNhbGMoMnJlbSArIDRweCk7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIGJvcmRlcjogc29saWQgd2hpdGUgM3B4O1xuICBiYWNrZ3JvdW5kOiAjMzY3YmYwO1xuICBib3gtc2hhZG93OiAwIDNweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgaW5zZXQgMCAtMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC02cHgpO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycztcbn1cbi5zd2l0Y2ggaW5wdXQ6Y2hlY2tlZCArIGRpdiB7XG4gIGJhY2tncm91bmQ6ICMzNjdiZjA7XG4gIGJveC1zaGFkb3c6IDAgMCAwLjVlbSByZ2JhKDU0LCAxMjMsIDI0MCwgMC43KSwgaW5zZXQgMCAycHggMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMyksIGluc2V0IDAgMCB0cmFuc3BhcmVudDtcbn1cbi5zd2l0Y2ggaW5wdXQ6Y2hlY2tlZCArIGRpdjo6YmVmb3JlIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNnJlbSwgLTZweCk7XG59XG5cbmhyIHtcbiAgd2lkdGg6IDcyJTtcbiAgaGVpZ2h0OiA4cHg7XG4gIGZsb2F0OiByaWdodDtcbiAgYm9yZGVyOiAwO1xufVxuXG5jb2RlLFxucHJlIHtcbiAgcGFkZGluZzogMC41ZW0gMWVtO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBib3gtc2hhZG93OiAwIDVweCAzMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjA1KTtcbn1cblxuY29kZSB7XG4gIGJhY2tncm91bmQ6ICNlNmU2ZTY7XG59XG5cbnByZSB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBtYXJnaW46IDRlbSAwO1xufVxuXG5jb2RlLCBjb2RlICosXG5wcmUsXG5wcmUgKiB7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBsaW5lLWhlaWdodDogMmVtO1xuICBjdXJzb3I6IGF1dG87XG4gIHVzZXItc2VsZWN0OiB0ZXh0O1xuICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IHRleHQ7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IHRleHQ7XG4gIC1raHRtbC11c2VyLXNlbGVjdDogdGV4dDtcbiAgLW1vei11c2VyLXNlbGVjdDogdGV4dDtcbiAgLW1zLXVzZXItc2VsZWN0OiB0ZXh0O1xufVxuXG5ibG9ja3F1b3RlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDAuNWVtIDFlbTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3gtc2hhZG93OiAwIDVweCAzMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgYm9yZGVyLWxlZnQ6IDZweCBzb2xpZCAjMzY3YmYwO1xufVxuXG46Om5nLWRlZXAgVG9kbyBhZGQgYWxsIHRoZSBjb3JyZWN0IGFkanVzdG1lbnRzIC5tYXQtc2xpZGVyLm1hdC1zbGlkZXItaG9yaXpvbnRhbCAubWF0LXNsaWRlci13cmFwcGVyIHtcbiAgdG9wOiAxOHB4O1xuICBib3gtc2hhZG93OiAzcHggM3B4IDJweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4xKSwgaW5zZXQgMnB4IDJweCAycHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xKSwgaW5zZXQgLTJweCAtMnB4IDFweCB3aGl0ZTtcbn1cbjo6bmctZGVlcCAubWF0LXNsaWRlci5tYXQtc2xpZGVyLWhvcml6b250YWwgLm1hdC1zbGlkZXItdHJhY2std3JhcHBlciB7XG4gIGhlaWdodDogMTZweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm94LXNoYWRvdzogM3B4IDNweCAycHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMSksIGluc2V0IDJweCAycHggMnB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMSksIGluc2V0IC0ycHggLTJweCAxcHggd2hpdGU7XG59XG46Om5nLWRlZXAgLm1hdC1zbGlkZXIubWF0LXNsaWRlci1ob3Jpem9udGFsLnNtYWxsLXNsaWRlciAubWF0LXNsaWRlci10cmFjay13cmFwcGVyIHtcbiAgaGVpZ2h0OiAxMnB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3gtc2hhZG93OiAzcHggM3B4IDJweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4xKSwgaW5zZXQgMnB4IDJweCAycHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xKSwgaW5zZXQgLTJweCAtMnB4IDFweCB3aGl0ZTtcbn1cbjo6bmctZGVlcCAubWF0LXNsaWRlci5tYXQtc2xpZGVyLWhvcml6b250YWwgLm1hdC1zbGlkZXItdHJhY2stYmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWl0ZW0tYmcpO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiA5OTlweDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGJveC1zaGFkb3csIGJhY2tncm91bmQtY29sb3I7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMnM7XG4gIHRyYW5zaXRpb24tZGVsYXk6IDAuMnM7XG4gIGJveC1zaGFkb3c6IDNweCAzcHggMnB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjEpLCBpbnNldCAycHggMnB4IDJweCAxcHggcmdiYSgwLCAwLCAwLCAwLjEpLCBpbnNldCAtMnB4IC0ycHggMXB4IHdoaXRlO1xufVxuOjpuZy1kZWVwIC5tYXQtc2xpZGVyLm1hdC1zbGlkZXItaG9yaXpvbnRhbCAubWF0LXNsaWRlci10aHVtYi1sYWJlbCB7XG4gIGhlaWdodDogNDJweDtcbiAgd2lkdGg6IDQycHg7XG4gIHJpZ2h0OiAtMjJweDtcbiAgdG9wOiAtNDJweDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCkgc2NhbGUoMC4wMSkgcm90YXRlKDQ1ZGVnKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taXRlbSk7XG4gIGJveC1zaGFkb3c6IDAgMCAwLjVlbSByZ2JhKDU0LCAxMjMsIDI0MCwgMC43KSwgaW5zZXQgMCAycHggMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMyksIGluc2V0IDAgMCB0cmFuc3BhcmVudDtcbn1cbjo6bmctZGVlcCAubWF0LXNsaWRlci5tYXQtc2xpZGVyLWhvcml6b250YWwgLm1hdC1zbGlkZXItdGh1bWItbGFiZWwtdGV4dCB7XG4gIGNvbG9yOiB2YXIoLS1pdGVtLWNvbnRyYXN0KTtcbn1cbjo6bmctZGVlcCAubWF0LXNsaWRlci5tYXQtc2xpZGVyLWhvcml6b250YWwgLm1hdC1zbGlkZXItdHJhY2stYmFja2dyb3VuZCxcbjo6bmctZGVlcCAubWF0LXNsaWRlci5tYXQtc2xpZGVyLWhvcml6b250YWwgLm1hdC1zbGlkZXItdHJhY2stZmlsbCB7XG4gIGhlaWdodDogMTAwJTtcbiAgYm94LXNoYWRvdzogMCAwIDAuNWVtIHJnYmEoNTQsIDEyMywgMjQwLCAwLjcpLCBpbnNldCAwIDJweCAycHggMnB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKSwgaW5zZXQgMCAwIHRyYW5zcGFyZW50O1xufVxuOjpuZy1kZWVwIC5tYXQtc2xpZGVyLm1hdC1zbGlkZXItaG9yaXpvbnRhbCAubWF0LXNsaWRlci10cmFjay1maWxsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taXRlbSk7XG59XG46Om5nLWRlZXAgLm1hdC1zbGlkZXIubWF0LXNsaWRlci1ob3Jpem9udGFsIC5tYXQtc2xpZGVyLXRyYWNrLWJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cbjo6bmctZGVlcCAubWF0LXNsaWRlci1taW4tdmFsdWU6bm90KC5tYXQtc2xpZGVyLXRodW1iLWxhYmVsLXNob3dpbmcpIC5tYXQtc2xpZGVyLXRodW1iIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG46Om5nLWRlZXAgLm1hdC1zbGlkZXIubWF0LXNsaWRlci1ob3Jpem9udGFsIC5tYXQtc2xpZGVyLXRodW1iIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taXRlbSk7XG59XG46Om5nLWRlZXAgLm1hdC1zbGlkZXIubWF0LXNsaWRlci1ob3Jpem9udGFsIC5tYXQtc2xpZGVyLXRodW1iLWxhYmVsLXRleHQge1xuICBmb250LXNpemU6IDE4cHg7XG59XG46Om5nLWRlZXAgLm1hdC1zbGlkZXIubWF0LXNsaWRlci1ob3Jpem9udGFsIC5tYXQtc2xpZGVyLXRodW1iIHtcbiAgaGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogNDBweDtcbiAgYm9yZGVyOiBzb2xpZCA0cHggdmFyKC0taXRlbS1iZyk7XG4gIGJvdHRvbTogLTI0cHg7XG4gIHJpZ2h0OiAtMjRweDtcbn1cblxubWF0LWNhcmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1pbm5lcik7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcbn1cblxuLmNvbG9yLWlucHV0IHtcbiAgd2lkdGg6IDgwcHg7XG4gIGhlaWdodDogODBweDtcbiAgbWFyZ2luLWJvdHRvbTogNnB4O1xuICBjb2xvcjogIzAwMDBmZjtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC1zaXplOiAydm1pbjtcbn1cblxuOjpuZy1kZWVwIC5zbWFsbC1zbGlkZXIubWF0LXNsaWRlci5tYXQtc2xpZGVyLWhvcml6b250YWwgLm1hdC1zbGlkZXItdGh1bWIge1xuICBoZWlnaHQ6IDMycHg7XG4gIHdpZHRoOiAzMnB4O1xuICBib3JkZXI6IHNvbGlkIDNweCB2YXIoLS1pdGVtLWJnKTtcbiAgYm90dG9tOiAtMjBweDtcbiAgcmlnaHQ6IC0yMHB4O1xufVxuOjpuZy1kZWVwIC5zbWFsbC1zbGlkZXIubWF0LXNsaWRlci5tYXQtc2xpZGVyLWhvcml6b250YWwgLm1hdC1zbGlkZXItdGh1bWItbGFiZWwtdGV4dCB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn0iLCIvLyBBZGp1c3RtZW50cyB0byBzbGlkZXIgZm9yIEFuZ3VsYXIgc2xpZGVyXG46Om5nLWRlZXAge1xuXG4gIFRvZG8gYWRkIGFsbCB0aGUgY29ycmVjdCBhZGp1c3RtZW50c1xuXG4gIC5tYXQtc2xpZGVyLm1hdC1zbGlkZXItaG9yaXpvbnRhbCAubWF0LXNsaWRlci13cmFwcGVyIHtcbiAgICB0b3A6IDE4cHg7XG4gICAgYm94LXNoYWRvdzogM3B4IDNweCAycHggLTJweCB0cmFuc3BhcmVudGl6ZShibGFjaywgMC45KSxcbiAgICAgIGluc2V0IDJweCAycHggMnB4IDFweCB0cmFuc3BhcmVudGl6ZShibGFjaywgMC45KSxcbiAgICAgIGluc2V0IC0ycHggLTJweCAxcHggd2hpdGU7XG4gIH1cbiAgLm1hdC1zbGlkZXIubWF0LXNsaWRlci1ob3Jpem9udGFsIC5tYXQtc2xpZGVyLXRyYWNrLXdyYXBwZXIge1xuICAgIGhlaWdodDogMTZweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJveC1zaGFkb3c6IDNweCAzcHggMnB4IC0ycHggdHJhbnNwYXJlbnRpemUoYmxhY2ssIDAuOSksXG4gICAgICBpbnNldCAycHggMnB4IDJweCAxcHggdHJhbnNwYXJlbnRpemUoYmxhY2ssIDAuOSksXG4gICAgICBpbnNldCAtMnB4IC0ycHggMXB4IHdoaXRlO1xuICB9XG4gIC5tYXQtc2xpZGVyLm1hdC1zbGlkZXItaG9yaXpvbnRhbC5zbWFsbC1zbGlkZXIgLm1hdC1zbGlkZXItdHJhY2std3JhcHBlciB7XG4gICAgaGVpZ2h0OiAxMnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYm94LXNoYWRvdzogM3B4IDNweCAycHggLTJweCB0cmFuc3BhcmVudGl6ZShibGFjaywgMC45KSxcbiAgICAgIGluc2V0IDJweCAycHggMnB4IDFweCB0cmFuc3BhcmVudGl6ZShibGFjaywgMC45KSxcbiAgICAgIGluc2V0IC0ycHggLTJweCAxcHggd2hpdGU7XG4gIH1cbiAgLm1hdC1zbGlkZXIubWF0LXNsaWRlci1ob3Jpem9udGFsIC5tYXQtc2xpZGVyLXRyYWNrLWJhY2tncm91bmQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRpdGVtLWJnO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItcmFkaXVzOiA5OTlweDtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBib3gtc2hhZG93LCBiYWNrZ3JvdW5kLWNvbG9yO1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMnM7XG4gICAgdHJhbnNpdGlvbi1kZWxheTogMC4ycztcbiAgICBib3gtc2hhZG93OiAzcHggM3B4IDJweCAtMnB4IHRyYW5zcGFyZW50aXplKGJsYWNrLCAwLjkpLFxuICAgICAgaW5zZXQgMnB4IDJweCAycHggMXB4IHRyYW5zcGFyZW50aXplKGJsYWNrLCAwLjkpLFxuICAgICAgaW5zZXQgLTJweCAtMnB4IDFweCB3aGl0ZTtcbiAgfVxuICAubWF0LXNsaWRlci5tYXQtc2xpZGVyLWhvcml6b250YWwgLm1hdC1zbGlkZXItdGh1bWItbGFiZWx7XG4gICAgaGVpZ2h0OjQycHg7XG4gICAgd2lkdGg6IDQycHg7XG4gICAgcmlnaHQ6IC0yMnB4O1xuICAgIHRvcDogLTQycHg7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCkgc2NhbGUoMC4wMSkgcm90YXRlKDQ1ZGVnKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkaXRlbTtcbiAgICBib3gtc2hhZG93OiAkZ2xvdy1zaGFkb3csIGluc2V0IDAgMnB4IDJweCAycHggdHJhbnNwYXJlbnRpemUoYmxhY2ssIDAuNyksXG4gICAgICBpbnNldCAwIDAgdHJhbnNwYXJlbnQ7XG4gIH1cbiAgLm1hdC1zbGlkZXIubWF0LXNsaWRlci1ob3Jpem9udGFsIC5tYXQtc2xpZGVyLXRodW1iLWxhYmVsLXRleHR7XG4gICAgY29sb3I6ICRpdGVtLWNvbnRyYXN0O1xuICB9XG4gIC5tYXQtc2xpZGVyLm1hdC1zbGlkZXItaG9yaXpvbnRhbCAubWF0LXNsaWRlci10cmFjay1iYWNrZ3JvdW5kLFxuICAubWF0LXNsaWRlci5tYXQtc2xpZGVyLWhvcml6b250YWwgLm1hdC1zbGlkZXItdHJhY2stZmlsbCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJveC1zaGFkb3c6ICRnbG93LXNoYWRvdywgaW5zZXQgMCAycHggMnB4IDJweCB0cmFuc3BhcmVudGl6ZSh3aGl0ZSwgMC43KSxcbiAgICAgIGluc2V0IDAgMCB0cmFuc3BhcmVudDtcbiAgfVxuICAubWF0LXNsaWRlci5tYXQtc2xpZGVyLWhvcml6b250YWwgLm1hdC1zbGlkZXItdHJhY2stZmlsbCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGl0ZW07XG4gIH1cbiAgLm1hdC1zbGlkZXIubWF0LXNsaWRlci1ob3Jpem9udGFsIC5tYXQtc2xpZGVyLXRyYWNrLWJhY2tncm91bmQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICB9XG4gIC5tYXQtc2xpZGVyLW1pbi12YWx1ZTpub3QoLm1hdC1zbGlkZXItdGh1bWItbGFiZWwtc2hvd2luZykgLm1hdC1zbGlkZXItdGh1bWIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICB9XG4gIC5tYXQtc2xpZGVyLm1hdC1zbGlkZXItaG9yaXpvbnRhbCAubWF0LXNsaWRlci10aHVtYiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGl0ZW07XG4gIH1cbiAgLm1hdC1zbGlkZXIubWF0LXNsaWRlci1ob3Jpem9udGFsIC5tYXQtc2xpZGVyLXRodW1iLWxhYmVsLXRleHQge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgfVxuICAubWF0LXNsaWRlci5tYXQtc2xpZGVyLWhvcml6b250YWwgLm1hdC1zbGlkZXItdGh1bWIge1xuICAgIGhlaWdodDogNDBweDtcbiAgICB3aWR0aDogNDBweDtcbiAgICBib3JkZXI6IHNvbGlkIDRweCAkaXRlbS1iZztcbiAgICBib3R0b206IC0yNHB4O1xuICAgIHJpZ2h0OiAtMjRweDtcbiAgfVxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GamescoreSettingsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-gamescore-settings',
                templateUrl: './settings-gamescore.component.html',
                styleUrls: ['./settings-gamescore.component.scss'],
            }]
    }], function () { return [{ type: src_app_services_olga_service__WEBPACK_IMPORTED_MODULE_1__["OlgaService"] }, { type: _services_game_service__WEBPACK_IMPORTED_MODULE_2__["GameService"] }, { type: _services_colors_service__WEBPACK_IMPORTED_MODULE_3__["ColorService"] }]; }, { lightBGHandle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['lightBGHandle', { static: true }]
        }], darkBGHandle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['darkBGHandle', { static: true }]
        }] }); })();


/***/ }),

/***/ "./src/app/settings/settings-menu/settings-menu.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/settings/settings-menu/settings-menu.component.ts ***!
  \*******************************************************************/
/*! exports provided: SettingsMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsMenuComponent", function() { return SettingsMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _settings_gamescore_settings_gamescore_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../settings-gamescore/settings-gamescore.component */ "./src/app/settings/settings-gamescore/settings-gamescore.component.ts");



class SettingsMenuComponent {
    constructor() { }
    ngOnInit() {
    }
}
SettingsMenuComponent.ɵfac = function SettingsMenuComponent_Factory(t) { return new (t || SettingsMenuComponent)(); };
SettingsMenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SettingsMenuComponent, selectors: [["app-settings-menu"]], decls: 2, vars: 0, consts: [[1, "settings-window"]], template: function SettingsMenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-gamescore-settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_settings_gamescore_settings_gamescore_component__WEBPACK_IMPORTED_MODULE_1__["GamescoreSettingsComponent"]], styles: ["@font-face {\n  font-family: \"Caveat\";\n  src: url('Caveat-Bold.woff2') format(\"woff2\"), url('Caveat-Bold.woff') format(\"woff\");\n  font-weight: bold;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"Caveat\";\n  src: url('Caveat-Regular.woff2') format(\"woff2\"), url('Caveat-Regular.woff') format(\"woff\");\n  font-weight: 600;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"FigurineSymbolT1\";\n  src: url('FigurineSymbolT1Bold.woff2') format(\"woff2\"), url('FigurineSymbolT1Bold.woff') format(\"woff\");\n  font-weight: bold;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"FigurineSymbolT1\";\n  src: url('FigurineSymbolT1.woff2') format(\"woff2\"), url('FigurineSymbolT1.woff') format(\"woff\");\n  font-weight: 600;\n  font-style: normal;\n  font-display: swap;\n}\n\n\n\n\n\n\n\n[_ngcontent-%COMP%]:root {\n  --bg-color: #f2f3f7;\n  --fg-color: #383a41;\n  --red: #e43030;\n  --green: #19a187;\n  --blue: #367bf0;\n  --dark-blue: #265ab1;\n  --maroon: #b8174c;\n  --purple: #8c42ab;\n}\n[_ngcontent-%COMP%]::-moz-focus-inner, [_ngcontent-%COMP%]:-moz-focusring {\n  border: 0;\n  color: transparent;\n  text-shadow: 0 0 0 #383a41;\n}\n[_ngcontent-%COMP%]::selection, [_ngcontent-%COMP%]::-moz-selection {\n  color: white;\n  background: black;\n}\n*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  outline: none;\n  user-select: none;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  -webkit-appearance: none;\n  -webkit-tap-highlight-color: transparent !important;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0) !important;\n  -webkit-touch-callout: none;\n  cursor: default;\n  letter-spacing: 0;\n}\n.selectable[_ngcontent-%COMP%], .selectable[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  cursor: auto;\n  user-select: text;\n  -webkit-touch-callout: text;\n  -webkit-user-select: text;\n  -khtml-user-select: text;\n  -moz-user-select: text;\n  -ms-user-select: text;\n}\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  background-color: #f2f3f7;\n  color: #383a41;\n  margin: 0;\n  padding: 0;\n  font-size: 10pt;\n  height: 100%;\n  overflow: auto;\n}\n.with-shadow[_ngcontent-%COMP%], .outset[_ngcontent-%COMP%], button[_ngcontent-%COMP%], .checktext[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]    + span[_ngcontent-%COMP%], .blue-button[_ngcontent-%COMP%], .checktext[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + span[_ngcontent-%COMP%], button.blue-button[_ngcontent-%COMP%], .red-button.blue-button[_ngcontent-%COMP%], .green-button.blue-button[_ngcontent-%COMP%], .green-button[_ngcontent-%COMP%], button.green-button[_ngcontent-%COMP%], .red-button.green-button[_ngcontent-%COMP%], .red-button[_ngcontent-%COMP%], button.red-button[_ngcontent-%COMP%], input[type=button][_ngcontent-%COMP%], input[type=submit][_ngcontent-%COMP%], input[type=reset][_ngcontent-%COMP%], select[_ngcontent-%COMP%], input[type=text][_ngcontent-%COMP%]:not(select):focus, input[type=search][_ngcontent-%COMP%]:not(select):focus, input[type=tel][_ngcontent-%COMP%]:not(select):focus, input[type=url][_ngcontent-%COMP%]:not(select):focus, input[type=email][_ngcontent-%COMP%]:not(select):focus, input[type=password][_ngcontent-%COMP%]:not(select):focus, input[type=date][_ngcontent-%COMP%]:not(select):focus, input[type=month][_ngcontent-%COMP%]:not(select):focus, input[type=week][_ngcontent-%COMP%]:not(select):focus, input[type=time][_ngcontent-%COMP%]:not(select):focus, input[type=number][_ngcontent-%COMP%]:not(select):focus, input[type=color][_ngcontent-%COMP%]:not(select):focus, select[_ngcontent-%COMP%]:not(select):focus, textarea[_ngcontent-%COMP%]:not(select):focus, .paper[_ngcontent-%COMP%] {\n  box-shadow: 6px 6px 10px rgba(0, 0, 0, 0.1), -6px -6px 10px white;\n}\n.outset[_ngcontent-%COMP%], button[_ngcontent-%COMP%], .checktext[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]    + span[_ngcontent-%COMP%], .blue-button[_ngcontent-%COMP%], .checktext[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + span[_ngcontent-%COMP%], button.blue-button[_ngcontent-%COMP%], .red-button.blue-button[_ngcontent-%COMP%], .green-button.blue-button[_ngcontent-%COMP%], .green-button[_ngcontent-%COMP%], button.green-button[_ngcontent-%COMP%], .red-button.green-button[_ngcontent-%COMP%], .red-button[_ngcontent-%COMP%], button.red-button[_ngcontent-%COMP%], input[type=button][_ngcontent-%COMP%], input[type=submit][_ngcontent-%COMP%], input[type=reset][_ngcontent-%COMP%], select[_ngcontent-%COMP%], input[type=text][_ngcontent-%COMP%]:not(select):focus, input[type=search][_ngcontent-%COMP%]:not(select):focus, input[type=tel][_ngcontent-%COMP%]:not(select):focus, input[type=url][_ngcontent-%COMP%]:not(select):focus, input[type=email][_ngcontent-%COMP%]:not(select):focus, input[type=password][_ngcontent-%COMP%]:not(select):focus, input[type=date][_ngcontent-%COMP%]:not(select):focus, input[type=month][_ngcontent-%COMP%]:not(select):focus, input[type=week][_ngcontent-%COMP%]:not(select):focus, input[type=time][_ngcontent-%COMP%]:not(select):focus, input[type=number][_ngcontent-%COMP%]:not(select):focus, input[type=color][_ngcontent-%COMP%]:not(select):focus, select[_ngcontent-%COMP%]:not(select):focus, textarea[_ngcontent-%COMP%]:not(select):focus, .paper[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  background: #f2f3f7;\n}\n.inset[_ngcontent-%COMP%], hr[_ngcontent-%COMP%], button.active[_ngcontent-%COMP%], .checktext[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]    + span.active[_ngcontent-%COMP%], .active.blue-button[_ngcontent-%COMP%], .active.green-button[_ngcontent-%COMP%], .active.red-button[_ngcontent-%COMP%], button[_ngcontent-%COMP%]:active, .checktext[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]    + span[_ngcontent-%COMP%]:active, .blue-button[_ngcontent-%COMP%]:active, .green-button[_ngcontent-%COMP%]:active, .red-button[_ngcontent-%COMP%]:active, input[type=button].active[_ngcontent-%COMP%], input[type=button][_ngcontent-%COMP%]:active, input[type=submit].active[_ngcontent-%COMP%], input[type=submit][_ngcontent-%COMP%]:active, input[type=reset].active[_ngcontent-%COMP%], input[type=reset][_ngcontent-%COMP%]:active, input[type=text][_ngcontent-%COMP%]:not(select), input[type=search][_ngcontent-%COMP%]:not(select), input[type=tel][_ngcontent-%COMP%]:not(select), input[type=url][_ngcontent-%COMP%]:not(select), input[type=email][_ngcontent-%COMP%]:not(select), input[type=password][_ngcontent-%COMP%]:not(select), input[type=date][_ngcontent-%COMP%]:not(select), input[type=month][_ngcontent-%COMP%]:not(select), input[type=week][_ngcontent-%COMP%]:not(select), input[type=time][_ngcontent-%COMP%]:not(select), input[type=number][_ngcontent-%COMP%]:not(select), input[type=color][_ngcontent-%COMP%]:not(select), select[_ngcontent-%COMP%]:not(select), textarea[_ngcontent-%COMP%]:not(select) {\n  border-radius: 10px;\n  box-shadow: 0 0 transparent, 0 0 transparent, inset 3px 3px 5px rgba(0, 0, 0, 0.1), inset -3px -3px 5px white;\n  background: #f8f9fb;\n}\n.paper[_ngcontent-%COMP%] {\n  padding: 10px 20px 20px;\n  margin-top: 20px;\n  min-height: 100px;\n  font-size: 1.2em;\n  background: #f2f3f7;\n}\nsection[_ngcontent-%COMP%], article[_ngcontent-%COMP%], .section[_ngcontent-%COMP%], .article[_ngcontent-%COMP%], .paper[_ngcontent-%COMP%] {\n  line-height: 2em;\n  word-wrap: break-word;\n  word-break: normal;\n  line-height: 2em;\n}\ninput[type=text][_ngcontent-%COMP%], input[type=search][_ngcontent-%COMP%], input[type=tel][_ngcontent-%COMP%], input[type=url][_ngcontent-%COMP%], input[type=email][_ngcontent-%COMP%], input[type=password][_ngcontent-%COMP%], input[type=date][_ngcontent-%COMP%], input[type=month][_ngcontent-%COMP%], input[type=week][_ngcontent-%COMP%], input[type=time][_ngcontent-%COMP%], input[type=number][_ngcontent-%COMP%], input[type=color][_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  border: 0;\n  background: #f2f3f7;\n  color: #383a41;\n  font-weight: normal;\n  padding: 0 1.25em;\n  line-height: 1.25em;\n  height: 3.5em;\n  margin: 10px 0;\n  font-size: 1.1rem;\n  cursor: text;\n  user-select: text;\n  -webkit-touch-callout: text;\n  -webkit-user-select: text;\n  -khtml-user-select: text;\n  -moz-user-select: text;\n  -ms-user-select: text;\n  transition: box-shadow 0.2s;\n}\ntextarea[_ngcontent-%COMP%] {\n  height: 350px;\n  padding: 1.25em;\n}\nselect[_ngcontent-%COMP%] {\n  cursor: pointer;\n  background: url(data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAxOSAxOSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyB0cmFuc2Zvcm09Im1hdHJpeCguMDM0IDAgMCAuMDM0IC02LjggMS43ZS01KSIgc3R5bGU9ImZpbGw6IzdiN2U4YyI+PHBhdGggZD0ibTQ4MCAzNDQtMjExLTIxMmMtMTYtMTYtNDEtMTYtNTcgMC0xNiAxNi0xNiA0MiAwIDU3bDIzOCAyMzljOC40IDguNSAyMCAxMiAzMSAxMiAxMSAwLjU2IDIyLTMuMiAzMS0xMmwyMzgtMjM5YzE2LTE2IDE2LTQyIDAtNTdzLTQxLTE2LTU3IDB6IiBzdHlsZT0iZmlsbDojN2I3ZThjIi8+PC9nPjwvc3ZnPgo=) no-repeat right 1em center;\n  background-size: 1.2em;\n  padding-right: 3em;\n}\ninput[_ngcontent-%COMP%]::placeholder, textarea[_ngcontent-%COMP%]::placeholder {\n  opacity: 1;\n  transition: opacity 0.2s;\n  color: inherit;\n}\ninput[_ngcontent-%COMP%]:focus::placeholder, textarea[_ngcontent-%COMP%]:focus::placeholder {\n  opacity: 0.2;\n}\ninput[_ngcontent-%COMP%]:-ms-input-placeholder, textarea[_ngcontent-%COMP%]:-ms-input-placeholder {\n  opacity: 1;\n  -ms-transition: opacity 0.2s;\n  transition: opacity 0.2s;\n  color: inherit;\n}\ninput[_ngcontent-%COMP%]:focus:-ms-input-placeholder, textarea[_ngcontent-%COMP%]:focus:-ms-input-placeholder {\n  opacity: 0.2;\n}\ninput[type=search][_ngcontent-%COMP%]::-webkit-search-decoration, input[type=search][_ngcontent-%COMP%]::-webkit-search-cancel-button, input[type=search][_ngcontent-%COMP%]::-webkit-search-results-button, input[type=search][_ngcontent-%COMP%]::-webkit-search-results-decoration {\n  display: none;\n}\nbutton[_ngcontent-%COMP%], .checktext[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]    + span[_ngcontent-%COMP%], .blue-button[_ngcontent-%COMP%], .checktext[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + span[_ngcontent-%COMP%], button.blue-button[_ngcontent-%COMP%], .red-button.blue-button[_ngcontent-%COMP%], .green-button.blue-button[_ngcontent-%COMP%], .green-button[_ngcontent-%COMP%], button.green-button[_ngcontent-%COMP%], .red-button.green-button[_ngcontent-%COMP%], .red-button[_ngcontent-%COMP%], button.red-button[_ngcontent-%COMP%], input[type=button][_ngcontent-%COMP%], input[type=submit][_ngcontent-%COMP%], input[type=reset][_ngcontent-%COMP%] {\n  border: 0;\n  text-transform: capitalize;\n  padding: 10px 0;\n  width: 8em;\n  text-align: center;\n  cursor: pointer;\n  color: inherit;\n  font-size: 1.1rem;\n  transition-property: background-color, box-shadow;\n  transition-delay: 0.2s;\n  transition-duration: 0.2s;\n}\nbutton.active[_ngcontent-%COMP%], .checktext[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]    + span.active[_ngcontent-%COMP%], .active.blue-button[_ngcontent-%COMP%], .active.green-button[_ngcontent-%COMP%], .active.red-button[_ngcontent-%COMP%], button[_ngcontent-%COMP%]:active, .checktext[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]    + span[_ngcontent-%COMP%]:active, .blue-button[_ngcontent-%COMP%]:active, .green-button[_ngcontent-%COMP%]:active, .red-button[_ngcontent-%COMP%]:active, input[type=button].active[_ngcontent-%COMP%], input[type=button][_ngcontent-%COMP%]:active, input[type=submit].active[_ngcontent-%COMP%], input[type=submit][_ngcontent-%COMP%]:active, input[type=reset].active[_ngcontent-%COMP%], input[type=reset][_ngcontent-%COMP%]:active {\n  transition-delay: 0s;\n  transition-duration: 0.1s;\n}\n.red-button[_ngcontent-%COMP%], button.red-button[_ngcontent-%COMP%], .checktext[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]    + span.red-button[_ngcontent-%COMP%], .red-button.blue-button[_ngcontent-%COMP%], .red-button.green-button[_ngcontent-%COMP%], input[type=button].red-button[_ngcontent-%COMP%], input[type=submit].red-button[_ngcontent-%COMP%], input[type=reset].red-button[_ngcontent-%COMP%] {\n  color: white;\n  font-weight: bold;\n  text-shadow: 0 0.1em 0.1em rgba(0, 0, 0, 0.7);\n  background: linear-gradient(to top, #e43030 30%, #e84b4b 80%);\n  box-shadow: 0 0 0.5em rgba(228, 48, 48, 0.7), 0 0 transparent, inset 0 -5px 0 rgba(0, 0, 0, 0.05), inset 0 2px 0 rgba(255, 255, 255, 0.2);\n  border-radius: 6px 6px 8px 8px;\n  transition-property: box-shadow, border-radius;\n}\n.red-button.active[_ngcontent-%COMP%], .red-button[_ngcontent-%COMP%]:active, button.red-button.active[_ngcontent-%COMP%], button.red-button[_ngcontent-%COMP%]:active, input[type=button].red-button.active[_ngcontent-%COMP%], input[type=button].red-button[_ngcontent-%COMP%]:active, input[type=submit].red-button.active[_ngcontent-%COMP%], input[type=submit].red-button[_ngcontent-%COMP%]:active, input[type=reset].red-button.active[_ngcontent-%COMP%], input[type=reset].red-button[_ngcontent-%COMP%]:active {\n  background: linear-gradient(to top, #e43030 30%, #e84b4b 80%);\n  border-radius: 6px;\n  box-shadow: 0 0 transparent, 0 0 transparent, inset 0 2px 5px 2px rgba(0, 0, 0, 0.2);\n}\n.green-button[_ngcontent-%COMP%], button.green-button[_ngcontent-%COMP%], .checktext[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]    + span.green-button[_ngcontent-%COMP%], .green-button.blue-button[_ngcontent-%COMP%], .green-button.red-button[_ngcontent-%COMP%], input[type=button].green-button[_ngcontent-%COMP%], input[type=submit].green-button[_ngcontent-%COMP%], input[type=reset].green-button[_ngcontent-%COMP%] {\n  color: white;\n  font-weight: bold;\n  text-shadow: 0 0.1em 0.1em rgba(0, 0, 0, 0.7);\n  background: linear-gradient(to top, #19a187 30%, #1dbb9d 80%);\n  box-shadow: 0 0 0.5em rgba(25, 161, 135, 0.7), 0 0 transparent, inset 0 -5px 0 rgba(0, 0, 0, 0.05), inset 0 2px 0 rgba(255, 255, 255, 0.2);\n  border-radius: 6px 6px 8px 8px;\n  transition-property: box-shadow, border-radius;\n}\n.green-button.active[_ngcontent-%COMP%], .green-button[_ngcontent-%COMP%]:active, button.green-button.active[_ngcontent-%COMP%], button.green-button[_ngcontent-%COMP%]:active, input[type=button].green-button.active[_ngcontent-%COMP%], input[type=button].green-button[_ngcontent-%COMP%]:active, input[type=submit].green-button.active[_ngcontent-%COMP%], input[type=submit].green-button[_ngcontent-%COMP%]:active, input[type=reset].green-button.active[_ngcontent-%COMP%], input[type=reset].green-button[_ngcontent-%COMP%]:active {\n  background: linear-gradient(to top, #19a187 30%, #1dbb9d 80%);\n  border-radius: 6px;\n  box-shadow: 0 0 transparent, 0 0 transparent, inset 0 2px 5px 2px rgba(0, 0, 0, 0.2);\n}\n.blue-button[_ngcontent-%COMP%], .checktext[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + span[_ngcontent-%COMP%], button.blue-button[_ngcontent-%COMP%], .checktext[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]    + span.blue-button[_ngcontent-%COMP%], .blue-button.red-button[_ngcontent-%COMP%], .blue-button.green-button[_ngcontent-%COMP%], input[type=button].blue-button[_ngcontent-%COMP%], input[type=submit].blue-button[_ngcontent-%COMP%], input[type=reset].blue-button[_ngcontent-%COMP%] {\n  color: white;\n  font-weight: bold;\n  text-shadow: 0 0.1em 0.1em rgba(0, 0, 0, 0.7);\n  background: linear-gradient(to top, #367bf0 30%, #528ef2 80%);\n  box-shadow: 0 0 0.5em rgba(54, 123, 240, 0.7), 0 0 transparent, inset 0 -5px 0 rgba(0, 0, 0, 0.05), inset 0 2px 0 rgba(255, 255, 255, 0.2);\n  border-radius: 6px 6px 8px 8px;\n  transition-property: box-shadow, border-radius;\n}\n.blue-button.active[_ngcontent-%COMP%], .checktext[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + span.active[_ngcontent-%COMP%], .blue-button[_ngcontent-%COMP%]:active, .checktext[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + span[_ngcontent-%COMP%]:active, button.blue-button.active[_ngcontent-%COMP%], button.blue-button[_ngcontent-%COMP%]:active, input[type=button].blue-button.active[_ngcontent-%COMP%], input[type=button].blue-button[_ngcontent-%COMP%]:active, input[type=submit].blue-button.active[_ngcontent-%COMP%], input[type=submit].blue-button[_ngcontent-%COMP%]:active, input[type=reset].blue-button.active[_ngcontent-%COMP%], input[type=reset].blue-button[_ngcontent-%COMP%]:active {\n  background: linear-gradient(to top, #367bf0 30%, #528ef2 80%);\n  border-radius: 6px;\n  box-shadow: 0 0 transparent, 0 0 transparent, inset 0 2px 5px 2px rgba(0, 0, 0, 0.2);\n}\nlabel[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0.56em 0;\n}\nlabel[_ngcontent-%COMP%], label[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\na[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:link, a[_ngcontent-%COMP%]:visited, a[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%]:active {\n  font-weight: bold;\n  color: #367bf0;\n  font-weight: bold;\n  text-decoration: none;\n}\na[_ngcontent-%COMP%], a[_ngcontent-%COMP%]   *[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:link, a[_ngcontent-%COMP%]:link   *[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:visited, a[_ngcontent-%COMP%]:visited   *[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%]:active, a[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%]:active   *[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\n  line-height: 1.5em;\n}\nh1[_ngcontent-%COMP%] {\n  font-size: 4em;\n  font-weight: lighter;\n  margin: 0.7em 0;\n}\nh2[_ngcontent-%COMP%] {\n  font-size: 3em;\n  font-weight: lighter;\n  margin: 0.8em 0;\n}\nh3[_ngcontent-%COMP%] {\n  font-size: 2.5em;\n  font-weight: lighter;\n  margin: 0.9em 0;\n}\nh4[_ngcontent-%COMP%] {\n  font-size: 2em;\n  font-weight: lighter;\n  margin: 1em 0;\n}\nh5[_ngcontent-%COMP%] {\n  margin: 0.5em 0;\n  font-size: 1.2em;\n  font-weight: normal;\n}\nh6[_ngcontent-%COMP%] {\n  margin: 1em 0 1em 1.4em;\n  font-size: 1em;\n  font-weight: bold;\n}\ninput[type=checkbox][_ngcontent-%COMP%], input[type=radio][_ngcontent-%COMP%] {\n  font-size: 1em;\n  cursor: pointer;\n  height: 1.2em;\n  width: 1.2em;\n  margin: 0 0.3em;\n  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.2), -2px -2px 3px white, inset 1px 1px 2px rgba(0, 0, 0, 0.2), inset -1px -1px 2px white;\n  border: 0.15em solid #f2f3f7;\n  vertical-align: text-bottom;\n  transition-property: background, box-shadow;\n  transition-duration: 0.2s;\n}\ninput[type=checkbox][_ngcontent-%COMP%]:active, input[type=radio][_ngcontent-%COMP%]:active {\n  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.2), -2px -2px 3px white, inset 1px 1px 2px rgba(0, 0, 0, 0.2), inset -1px -1px 2px white, inset 0 0.1em 0.25em rgba(0, 0, 0, 0.2);\n}\ninput[type=checkbox][_ngcontent-%COMP%]:checked, input[type=radio][_ngcontent-%COMP%]:checked {\n  border-width: 0.1em;\n  border-color: #115fe2;\n  background-color: #367bf0;\n}\ninput[type=checkbox][_ngcontent-%COMP%] {\n  border-radius: 25%;\n}\ninput[type=checkbox][_ngcontent-%COMP%]:checked {\n  box-shadow: 0 0 0.5em rgba(54, 123, 240, 0.7), inset 0 -0.1em 0 rgba(0, 0, 0, 0.2), inset 0 0.1em 0.1em rgba(255, 255, 255, 0.2);\n}\ninput[type=radio][_ngcontent-%COMP%] {\n  border-radius: 100%;\n}\ninput[type=radio][_ngcontent-%COMP%]:checked {\n  box-shadow: 0 0 0.5em rgba(54, 123, 240, 0.7);\n  box-shadow: 0 0 0.5em rgba(54, 123, 240, 0.7), inset 0 0.12em 0.1em rgba(255, 255, 255, 0.25);\n  border-bottom-width: 0.15em;\n}\n.checktext[_ngcontent-%COMP%] {\n  width: auto;\n  margin: 0.5em;\n}\n.checktext[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  display: none;\n}\n.checktext[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]    + span[_ngcontent-%COMP%] {\n  font-weight: bold;\n  padding: 1em;\n  transition-delay: 0s;\n}\n.checktext[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + span[_ngcontent-%COMP%] {\n  padding: 1em;\n}\n.switch[_ngcontent-%COMP%] {\n  height: 2rem;\n  width: 8rem;\n  padding: 0;\n  position: relative;\n}\n.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  display: none;\n}\n.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]    + div[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  border-radius: 999px;\n  background: transparent;\n  transition-property: box-shadow, background-color;\n  transition-duration: 0.2s;\n  transition-delay: 0.2s;\n  box-shadow: 3px 3px 2px -2px rgba(0, 0, 0, 0.1), inset 2px 2px 2px 1px rgba(0, 0, 0, 0.1), inset -2px -2px 1px white;\n}\n.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]    + div[_ngcontent-%COMP%]::before {\n  content: \"\";\n  display: block;\n  height: calc(2rem + 4px);\n  width: calc(2rem + 4px);\n  border-radius: 100%;\n  border: solid white 3px;\n  background: #367bf0;\n  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2), inset 0 -1px 3px rgba(0, 0, 0, 0.1);\n  transform: translate(0, -6px);\n  transition: transform 0.2s;\n}\n.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + div[_ngcontent-%COMP%] {\n  background: #367bf0;\n  box-shadow: 0 0 0.5em rgba(54, 123, 240, 0.7), inset 0 2px 2px 2px rgba(0, 0, 0, 0.3), inset 0 0 transparent;\n}\n.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + div[_ngcontent-%COMP%]::before {\n  transform: translate(6rem, -6px);\n}\nhr[_ngcontent-%COMP%] {\n  width: 72%;\n  height: 8px;\n  float: right;\n  border: 0;\n}\ncode[_ngcontent-%COMP%], pre[_ngcontent-%COMP%] {\n  padding: 0.5em 1em;\n  border-radius: 4px;\n  overflow: auto;\n  box-shadow: 0 5px 30px 0 rgba(0, 0, 0, 0.05);\n}\ncode[_ngcontent-%COMP%] {\n  background: #e6e6e6;\n}\npre[_ngcontent-%COMP%] {\n  background: white;\n  margin: 4em 0;\n}\ncode[_ngcontent-%COMP%], code[_ngcontent-%COMP%]   *[_ngcontent-%COMP%], pre[_ngcontent-%COMP%], pre[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  line-height: 2em;\n  cursor: auto;\n  user-select: text;\n  -webkit-touch-callout: text;\n  -webkit-user-select: text;\n  -khtml-user-select: text;\n  -moz-user-select: text;\n  -ms-user-select: text;\n}\nblockquote[_ngcontent-%COMP%] {\n  background-color: white;\n  padding: 0.5em 1em;\n  border-radius: 4px;\n  box-shadow: 0 5px 30px 0 rgba(0, 0, 0, 0.05);\n  border-left: 6px solid #367bf0;\n}\nsettings-window[_ngcontent-%COMP%] {\n  background-color: var(--bg-outer);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMuc2NzcyIsInNyYy9hc3NldHMvc2Nzcy9tb2R1bGVzL19mb250cy5zY3NzIiwic3JjL2FwcC9zZXR0aW5ncy9zZXR0aW5ncy1tZW51L3NldHRpbmdzLW1lbnUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOEVBQUE7QUNBQTtFQUNJLHFCQUFBO0VBQ0EscUZBQUE7RUFFQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNDSjtBREVBO0VBQ0kscUJBQUE7RUFDQSwyRkFBQTtFQUVBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0RKO0FESUE7RUFDRSwrQkFBQTtFQUNBLHVHQUFBO0VBRUEsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDSEY7QURNQTtFQUNFLCtCQUFBO0VBQ0EsK0ZBQUE7RUFFQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNMRjtBRmNBLCtFQUFBO0FBTUEsK0VBQUE7QUFNQSwrRUFBQTtBQU1BLCtFQUFBO0FBS0EsZ0ZBQUE7QUFLQSwrRUFBQTtBQUtBLHlFQUFBO0FBa0JBO0VBQ0UsbUJBQUE7RUFDQSxtQkFBQTtFQUVBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUV6REY7QUY0REE7O0VBRUUsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7QUV6REY7QUY0REE7O0VBRUUsWUFBQTtFQUNBLGlCQUFBO0FFekRGO0FGNERBO0VBQ0Usc0JBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSwyQkFBQTtFQUNBLHlCQUFBO0VBQ0Esd0JBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0Esd0JBQUE7RUFDQSxtREFBQTtFQUNBLHdEQUFBO0VBQ0EsMkJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUV6REY7QUY0REE7O0VBRUUsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsMkJBQUE7RUFDQSx5QkFBQTtFQUNBLHdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtBRXpERjtBRjREQTs7RUFFRSx5QkE1RFM7RUE2RFQsY0E1RFM7RUE2RFQsU0FBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUV6REY7QUY0REE7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBQ0UsaUVBQUE7QUV6Q0Y7QUY0Q0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBR0UsbUJBQUE7RUFDQSxtQkE3RVM7QUVrRFg7QUY4QkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBQ0UsbUJBQUE7RUFDQSw2R0FBQTtFQUVBLG1CQUFBO0FFVEY7QUZZQTtFQUVFLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBN0ZTO0FFbUZYO0FGYUE7Ozs7O0VBS0UsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUVWRjtBRmFBOzs7Ozs7Ozs7Ozs7OztFQWNFLFNBQUE7RUFDQSxtQkExSFM7RUEySFQsY0ExSFM7RUEySFQsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLDJCQUFBO0VBQ0EseUJBQUE7RUFDQSx3QkFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSwyQkFBQTtBRVZGO0FGcUJBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7QUVuQkY7QUZzQkE7RUFHRSxlQUFBO0VBQ0EsMGZBQUE7RUFFQSxzQkFBQTtFQUNBLGtCQUFBO0FFdEJGO0FGeUJBOztFQUVFLFVBQUE7RUFDQSx3QkFBQTtFQUNBLGNBQUE7QUV0QkY7QUZ5QkE7O0VBRUUsWUFBQTtBRXRCRjtBRnlCQTs7RUFFRSxVQUFBO0VBQ0EsNEJBQUE7RUFBQSx3QkFBQTtFQUNBLGNBQUE7QUV0QkY7QUZ5QkE7O0VBRUUsWUFBQTtBRXRCRjtBRnlCQTs7OztFQUlFLGFBQUE7QUV0QkY7QUZ5QkE7Ozs7RUFNRSxTQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGlEQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtBRXhCRjtBRjBCRTs7Ozs7OztFQUlFLG9CQUFBO0VBQ0EseUJBQUE7QUVyQko7QUZ5QmE7Ozs7RUFNUCxZQUFBO0VBQ0EsaUJBQUE7RUFDQSw2Q0FBQTtFQUNBLDZEQUxZO0VBTVoseUlBQUE7RUFHQSw4QkFBQTtFQUNBLDhDQUFBO0FFM0JOO0FGNkJNOzs7Ozs7O0VBRUUsNkRBZFU7RUFlVixrQkFBQTtFQUNBLG9GQUFBO0FFdEJSO0FGRWE7Ozs7RUFNUCxZQUFBO0VBQ0EsaUJBQUE7RUFDQSw2Q0FBQTtFQUNBLDZEQUxZO0VBTVosMElBQUE7RUFHQSw4QkFBQTtFQUNBLDhDQUFBO0FFSE47QUZLTTs7Ozs7OztFQUVFLDZEQWRVO0VBZVYsa0JBQUE7RUFDQSxvRkFBQTtBRUVSO0FGdEJhOzs7O0VBTVAsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsNkNBQUE7RUFDQSw2REFMWTtFQU1aLDBJQUFBO0VBR0EsOEJBQUE7RUFDQSw4Q0FBQTtBRXFCTjtBRm5CTTs7Ozs7OztFQUVFLDZEQWRVO0VBZVYsa0JBQUE7RUFDQSxvRkFBQTtBRTBCUjtBRm5CQTtFQU1FLHFCQUFBO0VBQ0EsaUJBQUE7QUVpQkY7QUZ2QkU7RUFFRSxlQUFBO0FFd0JKO0FGaEJFO0VBU0UsaUJBQUE7RUFDQSxjQTNWRztFQTRWSCxpQkFBQTtFQUNBLHFCQUFBO0FFV0o7QUZuQkk7RUFFRSxlQUFBO0FFb0JOO0FGVkE7Ozs7OztFQU1FLGtCQUFBO0FFYUY7QUZWQTtFQUNFLGNBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7QUVhRjtBRlZBO0VBQ0UsY0FBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtBRWFGO0FGVkE7RUFDRSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtBRWFGO0FGVkE7RUFDRSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSxhQUFBO0FFYUY7QUZWQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FFYUY7QUZWQTtFQUNFLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FFYUY7QUZWQTs7RUFLRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdJQVBjO0VBUWQsNEJBQUE7RUFDQSwyQkFBQTtFQUNBLDJDQUFBO0VBQ0EseUJBQUE7QUVVRjtBRlJFOztFQUNFLHlLQUFBO0FFV0o7QUZSRTs7RUFDRSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBcmFHO0FFZ2JQO0FGUEE7RUFDRSxrQkFBQTtBRVVGO0FGUkU7RUFDRSxnSUFBQTtBRVVKO0FGTEE7RUFDRSxtQkFBQTtBRVFGO0FGTkU7RUFDRSw2Q0FyV1U7RUFzV1YsNkZBQUE7RUFDQSwyQkFBQTtBRVFKO0FGSkE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtBRU9GO0FGTEU7RUFDRSxhQUFBO0FFT0o7QUZMSTtFQUdFLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0FFS047QUZGSTtFQUdFLFlBQUE7QUVFTjtBRkdBO0VBTUUsWUFMVTtFQU1WLFdBTFM7RUFNVCxVQUFBO0VBQ0Esa0JBQUE7QUVMRjtBRk9FO0VBQ0UsYUFBQTtBRUxKO0FGT0k7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQ0EsdUJBQUE7RUFDQSxpREFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxvSEFBQTtBRUxOO0FGU007RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLHdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBcGZEO0VBcWZDLDhFQUFBO0VBRUEsNkJBQUE7RUFDQSwwQkFBQTtBRVJSO0FGWUk7RUFDRSxtQkE3ZkM7RUE4ZkQsNEdBQUE7QUVWTjtBRmFNO0VBQ0UsZ0NBQUE7QUVYUjtBRmlCQTtFQUVFLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7QUVmRjtBRmtCQTs7RUFFRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLDRDQUFBO0FFZkY7QUZrQkE7RUFDRSxtQkFBQTtBRWZGO0FGa0JBO0VBQ0UsaUJBQUE7RUFDQSxhQUFBO0FFZkY7QUZvQkU7OztFQUVFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSwyQkFBQTtFQUNBLHlCQUFBO0VBQ0Esd0JBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0FFaEJKO0FGb0JBO0VBQ0UsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNENBQUE7RUFDQSw4QkFBQTtBRWpCRjtBQTlpQkE7RUFDSSxpQ0ZtRk87QUU4ZFgiLCJmaWxlIjoic3JjL2FwcC9zZXR0aW5ncy9zZXR0aW5ncy1tZW51L3NldHRpbmdzLW1lbnUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG5cbkBpbXBvcnQgXCIuL2Fzc2V0cy9zY3NzL21vZHVsZXMvX2ZvbnRzLnNjc3NcIjtcbiRnYW1lc2NvcmUtZmFtaWx5OiBcIkZpZ3VyaW5lU3ltYm9sVDFcIjtcbiRnYW1lc2NvcmUtaGlnaGxpZ2h0OiAjNTg1ODU4ZmY7XG4kZ2FtZXNjb3JlLWZvcmVncm91bmQ6IHdoaXRlO1xuXG4kcmVkOiAjZTQzMDMwO1xuJGdyZWVuOiAjMTlhMTg3O1xuJGxpZ2h0LWJsdWU6ICMwMGZmZmZmZjtcbiRibHVlOiAjMzY3YmYwO1xuJGRhcmstYmx1ZTogIzI2NWFiMTtcbiRtYXJvb246ICNiODE3NGM7XG4kcHVycGxlOiAjOGM0MmFiO1xuXG4vLyBNYWluIE9MR0EgQ29sb3IgRWxlbWVudCBWYXJpYWJsZXNcbiR0ZXh0Q29sb3I6IHZhcigtLXRleHRDb2xvcik7IC8vIE1haW4gVGV4dCBDb2xvclxuJHRleHRDb2xvckF0dGVudGlvbjogdmFyKC0tdGV4dENvbG9yQXR0ZW50aW9uKTsgLy8gQXR0ZW50aW9uIHRleHRcbiR0ZXh0Q29sb3JSZW1vdmU6IHZhcigtLXRleHRDb2xvclJlbW92ZSk7IC8vIFJlbW92ZS9EZWxldGUvQ2xvc2VcbiR0ZXh0Q29sb3JBZGQ6IHZhcigtLXRleHRDb2xvckFkZCk7IC8vIEFkZC9DcmVhdGUvT3BlblxuJHRleHRDb2xvckFjdGl2ZTogdmFyKC0tdGV4dENvbG9yQWN0aXZlKTsgLy8gQWRkL0NyZWF0ZS9PcGVuXG4kYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZCk7IC8vIE1haW4gYmFja2dyb3VuZCBDb2xvclxuJGJnQ29udGFpbmVyOiB2YXIoLS1iZ0NvbnRhaW5lcik7IC8vIGJhY2tncm91bmQgb2YgQ29udGFpbmVyc1xuJGJnTWVudTogdmFyKC0tYmdNZW51KTsgLy8gYmFja2dyb3VuZCBvZiBNZW51c1xuJGJnSXRlbTogdmFyKC0tYmdJdGVtKTsgLy8gYmFja2dyb3VuZCBvZiBJdGVtc1xuXG4vLyBDb250ZXh0IE1lbnVcbiRiZ0NvbnRleHQ6IHZhcigtLWJnQ29udGV4dCk7IC8vIGJhY2tncm91bmQgb2YgQ29udGV4dCBNZW51XG4kdGV4dENvbG9yQ29udGV4dDogdmFyKC0tdGV4dENvbG9yQ29udGV4dCk7IC8vIHRleHQgY29sb3IgQ29udGV4dCBNZW51XG4kYm9yZGVyQ29udGV4dDogdmFyKC0tYm9yZGVyQ29udGV4dCk7IC8vIGJvcmRlciBDb250ZXh0IE1lbnVcbiRvdmVybGF5Q29udGV4dEJhY2tncm91bmQ6IHZhcihcbiAgLS1vdmVybGF5Q29udGV4dEJhY2tncm91bmRcbik7IC8vIENvbnRleHQgTWVudSBPdmVybGF5IGJhY2tncm91bmQgbWFpblxuJG92ZXJsYXlDb250ZXh0QmFja2dyb3VuZEdyYWRpZW50OiB2YXIoXG4gIC0tb3ZlcmxheUNvbnRleHRCYWNrZ3JvdW5kR3JhZGllbnRcbik7IC8vIENvbnRleHQgTWVudSBiYWNrZ3JvdW5kIGdyYWRpZW50XG5cbiRpdGVtOiB2YXIoLS1pdGVtKTtcbiRpdGVtLWNvbnRyYXN0OiB2YXIoLS1pdGVtLWNvbnRyYXN0KTtcbiRpdGVtLWJnOiB2YXIoLS1pdGVtLWJnKTtcblxuXG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIENvbnRhaW5lciBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuJGdzVGV4dENvbG9yOiB2YXIoLS1nc1RleHRDb2xvcik7IC8vIFRleHQgY29sb3IgZm9yIGdhbWUgc2NvcmVcbiRnc0JhY2tncm91bmQ6IHZhcigtLWdzQmFja2dyb3VuZCk7IC8vIGJhY2tncm91bmQgb2YgQ29udGFpbmVyc1xuJGdzQm9yZGVyOiB2YXIoLS1nc0JvcmRlcik7IC8vIGJhY2tncm91bmQgb2YgTWVudXNcbiRnc1RleHRTaXplOiB2YXIoLS1nc1RleHRTaXplKTsgLy8gYmFja2dyb3VuZCBvZiBNZW51c1xuXG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIENvbnRhaW5lciBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuJGdzVGV4dENvbG9yTVc6IHZhcigtLWdzVGV4dENvbG9yTVcpOyAvLyBUZXh0IGNvbG9yIGZvciBnYW1lIHNjb3JlXG4kZ3NCYWNrZ3JvdW5kTVc6IHZhcigtLWdzQmFja2dyb3VuZE1XKTsgLy8gYmFja2dyb3VuZCBvZiBDb250YWluZXJzXG4kZ3NCb3JkZXJNVzogdmFyKC0tZ3NCb3JkZXJNVyk7IC8vIGJhY2tncm91bmQgb2YgTWVudXNcbiRnc1RleHRTaXplTVc6IHZhcigtLWdzVGV4dFNpemVNVyk7IC8vIGJhY2tncm91bmQgb2YgTWVudXNcblxuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBDb250YWluZXIgVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiRnc1RleHRDb2xvck1COiB2YXIoLS1nc1RleHRDb2xvck1CKTsgLy8gVGV4dCBjb2xvciBmb3IgZ2FtZSBzY29yZVxuJGdzQmFja2dyb3VuZE1COiB2YXIoLS1nc0JhY2tncm91bmRNQik7IC8vIGJhY2tncm91bmQgb2YgQ29udGFpbmVyc1xuJGdzQm9yZGVyTUI6IHZhcigtLWdzQm9yZGVyTUIpOyAvLyBiYWNrZ3JvdW5kIG9mIE1lbnVzXG4kZ3NUZXh0U2l6ZU1COiB2YXIoLS1nc1RleHRTaXplTUIpOyAvLyBiYWNrZ3JvdW5kIG9mIE1lbnVzXG5cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgSGlnaGxpZ2h0IFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4kZ3NUZXh0Q29sb3JIRzogdmFyKC0tZ3NUZXh0Q29sb3JIRyk7IC8vIFRleHQgY29sb3IgZm9yIGhpZ2hsaWdodFxuJGdzQmFja2dyb3VuZEhHOiB2YXIoLS1nc0JhY2tncm91bmRIRyk7IC8vIGJhY2tncm91bmQgZm9yIGhpZ2hsaWdodFxuJGdzQm9yZGVySEc6IHZhcigtLWdzQm9yZGVySEcpOyAvLyBib3JkZXIgZm9yIGhpZ2hsaWdodFxuXG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIEFubm90YXRpb24gVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiRnc1RleHRDb2xvckFOOiB2YXIoLS1nc1RleHRDb2xvckFOKTsgLy8gVGV4dCBjb2xvciBmb3IgaGlnaGxpZ2h0XG4kZ3NCYWNrZ3JvdW5kQU46IHZhcigtLWdzQmFja2dyb3VuZEFOKTsgLy8gYmFja2dyb3VuZCBmb3IgaGlnaGxpZ2h0XG4kZ3NCb3JkZXJBTjogdmFyKC0tZ3NCb3JkZXJBTik7IC8vIGJvcmRlciBmb3IgaGlnaGxpZ2h0XG5cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgVmFyaWF0aW9uIFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4kZ3NUZXh0Q29sb3JWQTogdmFyKC0tZ3NUZXh0Q29sb3JWQSk7IC8vIFRleHQgY29sb3IgZm9yIGhpZ2hsaWdodFxuJGdzQmFja2dyb3VuZFZBOiB2YXIoLS1nc0JhY2tncm91bmRWQSk7IC8vIGJhY2tncm91bmQgZm9yIGhpZ2hsaWdodFxuJGdzQm9yZGVyVkE6IHZhcigtLWdzQm9yZGVyVkEpOyAvLyBib3JkZXIgZm9yIGhpZ2hsaWdodFxuXG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIFBseSBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuJGdzVGV4dENvbG9yUEM6IHZhcigtLWdzVGV4dENvbG9yUEMpOyAvLyBUZXh0IGNvbG9yIGZvciBnYW1lIHNjb3JlIHBseVxuJGdzQmFja2dyb3VuZFBDOiB2YXIoLS1nc0JhY2tncm91bmRQQyk7IC8vIGJhY2tncm91bmQgZm9yIGdhbWUgc2NvcmUgcGx5XG4kZ3NCb3JkZXJQQzogdmFyKC0tZ3NCb3JkZXJQQyk7IC8vIGJvcmRlciBmb3IgZ2FtZSBzY29yZSBwbHlcblxuLy8gQm9hcmQgY29sb3JzIHJlZmxlY3RlZCBvdXRcbiRib2FyZEJHRGFyazogdmFyKC0tYm9hcmRCR0RhcmspOyAvLyBib3JkZXIgZm9yIGhpZ2hsaWdodFxuXG4vLyBHZW5lcmFsIHN0dWZmXG4kdGV4dC1jb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XG4kYmctb3V0ZXI6IHZhcigtLWJnLW91dGVyKTtcbiRiZy1pbm5lcjogdmFyKC0tYmctaW5uZXIpO1xuXG4kYmctY29sb3I6ICNmMmYzZjc7XG4kZmctY29sb3I6ICMzODNhNDE7XG5cbiRnbG93LXNoYWRvdzogMCAwIDAuNWVtIHRyYW5zcGFyZW50aXplKCRibHVlLCAwLjMpO1xuXG46cm9vdCB7XG4gIC0tYmctY29sb3I6ICN7JGJnLWNvbG9yfTtcbiAgLS1mZy1jb2xvcjogI3skZmctY29sb3J9O1xuXG4gIC0tcmVkOiAjeyRyZWR9O1xuICAtLWdyZWVuOiAjeyRncmVlbn07XG4gIC0tYmx1ZTogI3skYmx1ZX07XG4gIC0tZGFyay1ibHVlOiAjeyRkYXJrLWJsdWV9O1xuICAtLW1hcm9vbjogI3skbWFyb29ufTtcbiAgLS1wdXJwbGU6ICN7JHB1cnBsZX07XG59XG5cbjo6LW1vei1mb2N1cy1pbm5lcixcbjotbW96LWZvY3VzcmluZyB7XG4gIGJvcmRlcjogMDtcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xuICB0ZXh0LXNoYWRvdzogMCAwIDAgJGZnLWNvbG9yO1xufVxuXG46OnNlbGVjdGlvbixcbjo6LW1vei1zZWxlY3Rpb24ge1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQ6IGJsYWNrO1xufVxuXG4qIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgb3V0bGluZTogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lO1xuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCkgIWltcG9ydGFudDtcbiAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xuICBjdXJzb3I6IGRlZmF1bHQ7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xufVxuXG4uc2VsZWN0YWJsZSxcbi5zZWxlY3RhYmxlICoge1xuICBjdXJzb3I6IGF1dG87XG4gIHVzZXItc2VsZWN0OiB0ZXh0O1xuICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IHRleHQ7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IHRleHQ7XG4gIC1raHRtbC11c2VyLXNlbGVjdDogdGV4dDtcbiAgLW1vei11c2VyLXNlbGVjdDogdGV4dDtcbiAgLW1zLXVzZXItc2VsZWN0OiB0ZXh0O1xufVxuXG5odG1sLFxuYm9keSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRiZy1jb2xvcjtcbiAgY29sb3I6ICRmZy1jb2xvcjtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBmb250LXNpemU6IDEwcHQ7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi53aXRoLXNoYWRvdyB7XG4gIGJveC1zaGFkb3c6IDZweCA2cHggMTBweCB0cmFuc3BhcmVudGl6ZShibGFjaywgMC45KSwgLTZweCAtNnB4IDEwcHggd2hpdGU7XG59XG5cbi5vdXRzZXQge1xuICBAZXh0ZW5kIC53aXRoLXNoYWRvdztcblxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiAkYmctY29sb3I7XG59XG5cbi5pbnNldCB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJveC1zaGFkb3c6IDAgMCB0cmFuc3BhcmVudCwgMCAwIHRyYW5zcGFyZW50LFxuICAgIGluc2V0IDNweCAzcHggNXB4IHRyYW5zcGFyZW50aXplKGJsYWNrLCAwLjkpLCBpbnNldCAtM3B4IC0zcHggNXB4IHdoaXRlO1xuICBiYWNrZ3JvdW5kOiBsaWdodGVuKCRiZy1jb2xvciwgMiUpO1xufVxuXG4ucGFwZXIge1xuICBAZXh0ZW5kIC5vdXRzZXQ7XG4gIHBhZGRpbmc6IDEwcHggMjBweCAyMHB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBtaW4taGVpZ2h0OiAxMDBweDtcbiAgZm9udC1zaXplOiAxLjJlbTtcbiAgYmFja2dyb3VuZDogJGJnLWNvbG9yO1xufVxuXG5zZWN0aW9uLFxuYXJ0aWNsZSxcbi5zZWN0aW9uLFxuLmFydGljbGUsXG4ucGFwZXIge1xuICBsaW5lLWhlaWdodDogMmVtO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIHdvcmQtYnJlYWs6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDJlbTtcbn1cblxuaW5wdXRbdHlwZT1cInRleHRcIl0sXG5pbnB1dFt0eXBlPVwic2VhcmNoXCJdLFxuaW5wdXRbdHlwZT1cInRlbFwiXSxcbmlucHV0W3R5cGU9XCJ1cmxcIl0sXG5pbnB1dFt0eXBlPVwiZW1haWxcIl0sXG5pbnB1dFt0eXBlPVwicGFzc3dvcmRcIl0sXG5pbnB1dFt0eXBlPVwiZGF0ZVwiXSxcbmlucHV0W3R5cGU9XCJtb250aFwiXSxcbmlucHV0W3R5cGU9XCJ3ZWVrXCJdLFxuaW5wdXRbdHlwZT1cInRpbWVcIl0sXG5pbnB1dFt0eXBlPVwibnVtYmVyXCJdLFxuaW5wdXRbdHlwZT1cImNvbG9yXCJdLFxuc2VsZWN0LFxudGV4dGFyZWEge1xuICBib3JkZXI6IDA7XG4gIGJhY2tncm91bmQ6ICRiZy1jb2xvcjtcbiAgY29sb3I6ICRmZy1jb2xvcjtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgcGFkZGluZzogMCAxLjI1ZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjI1ZW07XG4gIGhlaWdodDogMy41ZW07XG4gIG1hcmdpbjogMTBweCAwO1xuICBmb250LXNpemU6IDEuMXJlbTtcbiAgY3Vyc29yOiB0ZXh0O1xuICB1c2VyLXNlbGVjdDogdGV4dDtcbiAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiB0ZXh0O1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiB0ZXh0O1xuICAta2h0bWwtdXNlci1zZWxlY3Q6IHRleHQ7XG4gIC1tb3otdXNlci1zZWxlY3Q6IHRleHQ7XG4gIC1tcy11c2VyLXNlbGVjdDogdGV4dDtcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjJzO1xuXG4gICY6bm90KHNlbGVjdCkge1xuICAgIEBleHRlbmQgLmluc2V0O1xuXG4gICAgJjpmb2N1cyB7XG4gICAgICBAZXh0ZW5kIC5vdXRzZXQ7XG4gICAgfVxuICB9XG59XG5cbnRleHRhcmVhIHtcbiAgaGVpZ2h0OiAzNTBweDtcbiAgcGFkZGluZzogMS4yNWVtO1xufVxuXG5zZWxlY3Qge1xuICBAZXh0ZW5kIC5vdXRzZXQ7XG5cbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kOiB1cmwoZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCMlpYSnphVzl1UFNJeExqRWlJSFpwWlhkQ2IzZzlJakFnTUNBeE9TQXhPU0lnZUcxc2JuTTlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5Mekl3TURBdmMzWm5JajQ4WnlCMGNtRnVjMlp2Y20wOUltMWhkSEpwZUNndU1ETTBJREFnTUNBdU1ETTBJQzAyTGpnZ01TNDNaUzAxS1NJZ2MzUjViR1U5SW1acGJHdzZJemRpTjJVNFl5SStQSEJoZEdnZ1pEMGliVFE0TUNBek5EUXRNakV4TFRJeE1tTXRNVFl0TVRZdE5ERXRNVFl0TlRjZ01DMHhOaUF4TmkweE5pQTBNaUF3SURVM2JESXpPQ0F5TXpsak9DNDBJRGd1TlNBeU1DQXhNaUF6TVNBeE1pQXhNU0F3TGpVMklESXlMVE11TWlBek1TMHhNbXd5TXpndE1qTTVZekUyTFRFMklERTJMVFF5SURBdE5UZHpMVFF4TFRFMkxUVTNJREI2SWlCemRIbHNaVDBpWm1sc2JEb2pOMkkzWlRoaklpOCtQQzluUGp3dmMzWm5QZ289KVxuICAgIG5vLXJlcGVhdCByaWdodCAxZW0gY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEuMmVtO1xuICBwYWRkaW5nLXJpZ2h0OiAzZW07XG59XG5cbmlucHV0OjpwbGFjZWhvbGRlcixcbnRleHRhcmVhOjpwbGFjZWhvbGRlciB7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycztcbiAgY29sb3I6IGluaGVyaXQ7XG59XG5cbmlucHV0OmZvY3VzOjpwbGFjZWhvbGRlcixcbnRleHRhcmVhOmZvY3VzOjpwbGFjZWhvbGRlciB7XG4gIG9wYWNpdHk6IDAuMjtcbn1cblxuaW5wdXQ6LW1zLWlucHV0LXBsYWNlaG9sZGVyLFxudGV4dGFyZWE6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzO1xuICBjb2xvcjogaW5oZXJpdDtcbn1cblxuaW5wdXQ6Zm9jdXM6LW1zLWlucHV0LXBsYWNlaG9sZGVyLFxudGV4dGFyZWE6Zm9jdXM6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgb3BhY2l0eTogMC4yO1xufVxuXG5pbnB1dFt0eXBlPVwic2VhcmNoXCJdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uLFxuaW5wdXRbdHlwZT1cInNlYXJjaFwiXTo6LXdlYmtpdC1zZWFyY2gtY2FuY2VsLWJ1dHRvbixcbmlucHV0W3R5cGU9XCJzZWFyY2hcIl06Oi13ZWJraXQtc2VhcmNoLXJlc3VsdHMtYnV0dG9uLFxuaW5wdXRbdHlwZT1cInNlYXJjaFwiXTo6LXdlYmtpdC1zZWFyY2gtcmVzdWx0cy1kZWNvcmF0aW9uIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuYnV0dG9uLFxuaW5wdXRbdHlwZT1cImJ1dHRvblwiXSxcbmlucHV0W3R5cGU9XCJzdWJtaXRcIl0sXG5pbnB1dFt0eXBlPVwicmVzZXRcIl0ge1xuICBAZXh0ZW5kIC5vdXRzZXQ7XG5cbiAgYm9yZGVyOiAwO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgcGFkZGluZzogMTBweCAwO1xuICB3aWR0aDogOGVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBiYWNrZ3JvdW5kLWNvbG9yLCBib3gtc2hhZG93O1xuICB0cmFuc2l0aW9uLWRlbGF5OiAwLjJzO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjJzO1xuXG4gICYuYWN0aXZlLFxuICAmOmFjdGl2ZSB7XG4gICAgQGV4dGVuZCAuaW5zZXQ7XG5cbiAgICB0cmFuc2l0aW9uLWRlbGF5OiAwcztcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjFzO1xuICB9XG5cbiAgQGVhY2ggJG5hbWUsICRjb2xvciBpbiAoXCJyZWRcIjogJHJlZCwgXCJncmVlblwiOiAkZ3JlZW4sIFwiYmx1ZVwiOiAkYmx1ZSkge1xuICAgIEBhdC1yb290IC4jeyRuYW1lfS1idXR0b24sXG4gICAgICAmLiN7JG5hbWV9LWJ1dHRvbiB7XG4gICAgICBAZXh0ZW5kIGJ1dHRvbjtcblxuICAgICAgJF9iZy1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgJGNvbG9yIDMwJSwgbGlnaHRlbigkY29sb3IsIDYlKSA4MCUpO1xuXG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIHRleHQtc2hhZG93OiAwIDAuMWVtIDAuMWVtIHRyYW5zcGFyZW50aXplKGJsYWNrLCAwLjMpO1xuICAgICAgYmFja2dyb3VuZDogJF9iZy1pbWFnZTtcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAwLjVlbSB0cmFuc3BhcmVudGl6ZSgkY29sb3IsIDAuMyksIDAgMCB0cmFuc3BhcmVudCxcbiAgICAgICAgaW5zZXQgMCAtNXB4IDAgdHJhbnNwYXJlbnRpemUoYmxhY2ssIDAuOTUpLFxuICAgICAgICBpbnNldCAwIDJweCAwIHRyYW5zcGFyZW50aXplKHdoaXRlLCAwLjgpO1xuICAgICAgYm9yZGVyLXJhZGl1czogNnB4IDZweCA4cHggOHB4O1xuICAgICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYm94LXNoYWRvdywgYm9yZGVyLXJhZGl1cztcblxuICAgICAgJi5hY3RpdmUsXG4gICAgICAmOmFjdGl2ZSB7XG4gICAgICAgIGJhY2tncm91bmQ6ICRfYmctaW1hZ2U7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIHRyYW5zcGFyZW50LCAwIDAgdHJhbnNwYXJlbnQsXG4gICAgICAgICAgaW5zZXQgMCAycHggNXB4IDJweCB0cmFuc3BhcmVudGl6ZShibGFjaywgMC44KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxubGFiZWwge1xuICAmLFxuICAmICoge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogMC41NmVtIDA7XG59XG5cbmEge1xuICAmLFxuICAmOmxpbmssXG4gICY6dmlzaXRlZCxcbiAgJjpob3ZlciAmOmFjdGl2ZSB7XG4gICAgJixcbiAgICAmICoge1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cblxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiAkYmx1ZTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIH1cbn1cblxuaDEsXG5oMixcbmgzLFxuaDQsXG5oNSxcbmg2IHtcbiAgbGluZS1oZWlnaHQ6IDEuNWVtO1xufVxuXG5oMSB7XG4gIGZvbnQtc2l6ZTogNGVtO1xuICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgbWFyZ2luOiAwLjdlbSAwO1xufVxuXG5oMiB7XG4gIGZvbnQtc2l6ZTogM2VtO1xuICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgbWFyZ2luOiAwLjhlbSAwO1xufVxuXG5oMyB7XG4gIGZvbnQtc2l6ZTogMi41ZW07XG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuICBtYXJnaW46IDAuOWVtIDA7XG59XG5cbmg0IHtcbiAgZm9udC1zaXplOiAyZW07XG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuICBtYXJnaW46IDFlbSAwO1xufVxuXG5oNSB7XG4gIG1hcmdpbjogMC41ZW0gMDtcbiAgZm9udC1zaXplOiAxLjJlbTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cblxuaDYge1xuICBtYXJnaW46IDFlbSAwIDFlbSAxLjRlbTtcbiAgZm9udC1zaXplOiAxZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5pbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0sXG5pbnB1dFt0eXBlPVwicmFkaW9cIl0ge1xuICAkX2JvcmRlci13aWR0aDogMC4xNWVtO1xuICAkX2JveC1zaGFkb3c6IDJweCAycHggM3B4IHRyYW5zcGFyZW50aXplKGJsYWNrLCAwLjgpLCAtMnB4IC0ycHggM3B4IHdoaXRlLFxuICAgIGluc2V0IDFweCAxcHggMnB4IHRyYW5zcGFyZW50aXplKGJsYWNrLCAwLjgpLCBpbnNldCAtMXB4IC0xcHggMnB4IHdoaXRlO1xuICBmb250LXNpemU6IDFlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBoZWlnaHQ6IDEuMmVtO1xuICB3aWR0aDogMS4yZW07XG4gIG1hcmdpbjogMCAwLjNlbTtcbiAgYm94LXNoYWRvdzogJF9ib3gtc2hhZG93O1xuICBib3JkZXI6ICRfYm9yZGVyLXdpZHRoIHNvbGlkICRiZy1jb2xvcjtcbiAgdmVydGljYWwtYWxpZ246IHRleHQtYm90dG9tO1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBiYWNrZ3JvdW5kLCBib3gtc2hhZG93O1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjJzO1xuXG4gICY6YWN0aXZlIHtcbiAgICBib3gtc2hhZG93OiAkX2JveC1zaGFkb3csIGluc2V0IDAgMC4xZW0gMC4yNWVtIHRyYW5zcGFyZW50aXplKGJsYWNrLCAwLjgpO1xuICB9XG5cbiAgJjpjaGVja2VkIHtcbiAgICBib3JkZXItd2lkdGg6IDAuMWVtO1xuICAgIGJvcmRlci1jb2xvcjogZGFya2VuKCRibHVlLCAxMCUpO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRibHVlO1xuICB9XG59XG5cbmlucHV0W3R5cGU9XCJjaGVja2JveFwiXSB7XG4gIGJvcmRlci1yYWRpdXM6IDI1JTtcblxuICAmOmNoZWNrZWQge1xuICAgIGJveC1zaGFkb3c6ICRnbG93LXNoYWRvdywgaW5zZXQgMCAtMC4xZW0gMCB0cmFuc3BhcmVudGl6ZShibGFjaywgMC44KSxcbiAgICAgIGluc2V0IDAgMC4xZW0gMC4xZW0gdHJhbnNwYXJlbnRpemUod2hpdGUsIDAuOCk7XG4gIH1cbn1cblxuaW5wdXRbdHlwZT1cInJhZGlvXCJdIHtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcblxuICAmOmNoZWNrZWQge1xuICAgIGJveC1zaGFkb3c6ICRnbG93LXNoYWRvdztcbiAgICBib3gtc2hhZG93OiAkZ2xvdy1zaGFkb3csIGluc2V0IDAgMC4xMmVtIDAuMWVtIHRyYW5zcGFyZW50aXplKHdoaXRlLCAwLjc1KTtcbiAgICBib3JkZXItYm90dG9tLXdpZHRoOiAwLjE1ZW07XG4gIH1cbn1cblxuLmNoZWNrdGV4dCB7XG4gIHdpZHRoOiBhdXRvO1xuICBtYXJnaW46IDAuNWVtO1xuXG4gIGlucHV0IHtcbiAgICBkaXNwbGF5OiBub25lO1xuXG4gICAgKyBzcGFuIHtcbiAgICAgIEBleHRlbmQgYnV0dG9uO1xuXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIHBhZGRpbmc6IDFlbTtcbiAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDBzO1xuICAgIH1cblxuICAgICY6Y2hlY2tlZCArIHNwYW4ge1xuICAgICAgQGV4dGVuZCAuYmx1ZS1idXR0b247XG5cbiAgICAgIHBhZGRpbmc6IDFlbTtcbiAgICB9XG4gIH1cbn1cblxuLnN3aXRjaCB7XG4gICRfaGVpZ2h0OiAycmVtO1xuICAkX3dpZHRoOiA4cmVtO1xuICAkX2hhbmRsZS13aWR0aDogJF9oZWlnaHQ7XG4gICRfaGFuZGxlLXRyYW5zbGF0aW9uOiAkX3dpZHRoIC0gJF9oYW5kbGUtd2lkdGg7XG5cbiAgaGVpZ2h0OiAkX2hlaWdodDtcbiAgd2lkdGg6ICRfd2lkdGg7XG4gIHBhZGRpbmc6IDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICBpbnB1dCB7XG4gICAgZGlzcGxheTogbm9uZTtcblxuICAgICsgZGl2IHtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgYm9yZGVyLXJhZGl1czogOTk5cHg7XG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGJveC1zaGFkb3csIGJhY2tncm91bmQtY29sb3I7XG4gICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjJzO1xuICAgICAgdHJhbnNpdGlvbi1kZWxheTogMC4ycztcbiAgICAgIGJveC1zaGFkb3c6IDNweCAzcHggMnB4IC0ycHggdHJhbnNwYXJlbnRpemUoYmxhY2ssIDAuOSksXG4gICAgICAgIGluc2V0IDJweCAycHggMnB4IDFweCB0cmFuc3BhcmVudGl6ZShibGFjaywgMC45KSxcbiAgICAgICAgaW5zZXQgLTJweCAtMnB4IDFweCB3aGl0ZTtcblxuICAgICAgJjo6YmVmb3JlIHtcbiAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGhlaWdodDogY2FsYygjeyRfaGFuZGxlLXdpZHRofSArIDRweCk7XG4gICAgICAgIHdpZHRoOiBjYWxjKCN7JF9oYW5kbGUtd2lkdGh9ICsgNHB4KTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICAgICAgYm9yZGVyOiBzb2xpZCB3aGl0ZSAzcHg7XG4gICAgICAgIGJhY2tncm91bmQ6ICRibHVlO1xuICAgICAgICBib3gtc2hhZG93OiAwIDNweCAxMHB4IHRyYW5zcGFyZW50aXplKGJsYWNrLCAwLjgpLFxuICAgICAgICAgIGluc2V0IDAgLTFweCAzcHggdHJhbnNwYXJlbnRpemUoYmxhY2ssIDAuOSk7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC02cHgpO1xuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycztcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmOmNoZWNrZWQgKyBkaXYge1xuICAgICAgYmFja2dyb3VuZDogJGJsdWU7XG4gICAgICBib3gtc2hhZG93OiAkZ2xvdy1zaGFkb3csIGluc2V0IDAgMnB4IDJweCAycHggdHJhbnNwYXJlbnRpemUoYmxhY2ssIDAuNyksXG4gICAgICAgIGluc2V0IDAgMCB0cmFuc3BhcmVudDtcblxuICAgICAgJjo6YmVmb3JlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoJF9oYW5kbGUtdHJhbnNsYXRpb24sIC02cHgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5ociB7XG4gIEBleHRlbmQgLmluc2V0O1xuICB3aWR0aDogNzIlO1xuICBoZWlnaHQ6IDhweDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBib3JkZXI6IDA7XG59XG5cbmNvZGUsXG5wcmUge1xuICBwYWRkaW5nOiAwLjVlbSAxZW07XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIGJveC1zaGFkb3c6IDAgNXB4IDMwcHggMCB0cmFuc3BhcmVudGl6ZShibGFjaywgMC45NSk7XG59XG5cbmNvZGUge1xuICBiYWNrZ3JvdW5kOiAjZTZlNmU2O1xufVxuXG5wcmUge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgbWFyZ2luOiA0ZW0gMDtcbn1cblxuY29kZSxcbnByZSB7XG4gICYsXG4gICYgKiB7XG4gICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgbGluZS1oZWlnaHQ6IDJlbTtcbiAgICBjdXJzb3I6IGF1dG87XG4gICAgdXNlci1zZWxlY3Q6IHRleHQ7XG4gICAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiB0ZXh0O1xuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IHRleHQ7XG4gICAgLWtodG1sLXVzZXItc2VsZWN0OiB0ZXh0O1xuICAgIC1tb3otdXNlci1zZWxlY3Q6IHRleHQ7XG4gICAgLW1zLXVzZXItc2VsZWN0OiB0ZXh0O1xuICB9XG59XG5cbmJsb2NrcXVvdGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMC41ZW0gMWVtO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJveC1zaGFkb3c6IDAgNXB4IDMwcHggMCB0cmFuc3BhcmVudGl6ZShibGFjaywgMC45NSk7XG4gIGJvcmRlci1sZWZ0OiA2cHggc29saWQgJGJsdWU7XG59XG4iLCJAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ0NhdmVhdCc7XG4gICAgc3JjOiB1cmwoJy4uLy4uL2ZvbnRzL0JvbGQvQ2F2ZWF0LUJvbGQud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXG4gICAgICAgIHVybCgnLi4vLi4vZm9udHMvQm9sZC9DYXZlYXQtQm9sZC53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtZGlzcGxheTogc3dhcDtcbn1cblxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdDYXZlYXQnO1xuICAgIHNyYzogdXJsKCcuLi8uLi9mb250cy9SZWd1bGFyL0NhdmVhdC1SZWd1bGFyLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxuICAgICAgICB1cmwoJy4uLy4uL2ZvbnRzL1JlZ3VsYXIvQ2F2ZWF0LVJlZ3VsYXIud29mZicpIGZvcm1hdCgnd29mZicpO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtZGlzcGxheTogc3dhcDtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnRmlndXJpbmVTeW1ib2xUMSc7XG4gIHNyYzogdXJsKCcuLi8uLi9mb250cy8zcmQgUGFydHkvQ2hlc3NWYXJpYW50cy9GaWd1cmluZVN5bWJvbFQxQm9sZC53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcbiAgICAgIHVybCgnLi4vLi4vZm9udHMvM3JkIFBhcnR5L0NoZXNzVmFyaWFudHMvRmlndXJpbmVTeW1ib2xUMUJvbGQud29mZicpIGZvcm1hdCgnd29mZicpO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ0ZpZ3VyaW5lU3ltYm9sVDEnO1xuICBzcmM6IHVybCgnLi4vLi4vZm9udHMvM3JkIFBhcnR5L0NoZXNzVmFyaWFudHMvRmlndXJpbmVTeW1ib2xUMS53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcbiAgICAgIHVybCgnLi4vLi4vZm9udHMvM3JkIFBhcnR5L0NoZXNzVmFyaWFudHMvRmlndXJpbmVTeW1ib2xUMS53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xufVxuXG4iLCIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiQ2F2ZWF0XCI7XG4gIHNyYzogdXJsKFwiLi4vLi4vZm9udHMvQm9sZC9DYXZlYXQtQm9sZC53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKSwgdXJsKFwiLi4vLi4vZm9udHMvQm9sZC9DYXZlYXQtQm9sZC53b2ZmXCIpIGZvcm1hdChcIndvZmZcIik7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJDYXZlYXRcIjtcbiAgc3JjOiB1cmwoXCIuLi8uLi9mb250cy9SZWd1bGFyL0NhdmVhdC1SZWd1bGFyLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpLCB1cmwoXCIuLi8uLi9mb250cy9SZWd1bGFyL0NhdmVhdC1SZWd1bGFyLndvZmZcIikgZm9ybWF0KFwid29mZlwiKTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiRmlndXJpbmVTeW1ib2xUMVwiO1xuICBzcmM6IHVybChcIi4uLy4uL2ZvbnRzLzNyZCBQYXJ0eS9DaGVzc1ZhcmlhbnRzL0ZpZ3VyaW5lU3ltYm9sVDFCb2xkLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpLCB1cmwoXCIuLi8uLi9mb250cy8zcmQgUGFydHkvQ2hlc3NWYXJpYW50cy9GaWd1cmluZVN5bWJvbFQxQm9sZC53b2ZmXCIpIGZvcm1hdChcIndvZmZcIik7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJGaWd1cmluZVN5bWJvbFQxXCI7XG4gIHNyYzogdXJsKFwiLi4vLi4vZm9udHMvM3JkIFBhcnR5L0NoZXNzVmFyaWFudHMvRmlndXJpbmVTeW1ib2xUMS53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKSwgdXJsKFwiLi4vLi4vZm9udHMvM3JkIFBhcnR5L0NoZXNzVmFyaWFudHMvRmlndXJpbmVTeW1ib2xUMS53b2ZmXCIpIGZvcm1hdChcIndvZmZcIik7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xufVxuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBDb250YWluZXIgVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgQ29udGFpbmVyIFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIENvbnRhaW5lciBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBIaWdobGlnaHQgVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgQW5ub3RhdGlvbiBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBWYXJpYXRpb24gVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgUGx5IFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG46cm9vdCB7XG4gIC0tYmctY29sb3I6ICNmMmYzZjc7XG4gIC0tZmctY29sb3I6ICMzODNhNDE7XG4gIC0tcmVkOiAjZTQzMDMwO1xuICAtLWdyZWVuOiAjMTlhMTg3O1xuICAtLWJsdWU6ICMzNjdiZjA7XG4gIC0tZGFyay1ibHVlOiAjMjY1YWIxO1xuICAtLW1hcm9vbjogI2I4MTc0YztcbiAgLS1wdXJwbGU6ICM4YzQyYWI7XG59XG5cbjo6LW1vei1mb2N1cy1pbm5lcixcbjotbW96LWZvY3VzcmluZyB7XG4gIGJvcmRlcjogMDtcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xuICB0ZXh0LXNoYWRvdzogMCAwIDAgIzM4M2E0MTtcbn1cblxuOjpzZWxlY3Rpb24sXG46Oi1tb3otc2VsZWN0aW9uIHtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kOiBibGFjaztcbn1cblxuKiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApICFpbXBvcnRhbnQ7XG4gIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcbiAgY3Vyc29yOiBkZWZhdWx0O1xuICBsZXR0ZXItc3BhY2luZzogMDtcbn1cblxuLnNlbGVjdGFibGUsXG4uc2VsZWN0YWJsZSAqIHtcbiAgY3Vyc29yOiBhdXRvO1xuICB1c2VyLXNlbGVjdDogdGV4dDtcbiAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiB0ZXh0O1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiB0ZXh0O1xuICAta2h0bWwtdXNlci1zZWxlY3Q6IHRleHQ7XG4gIC1tb3otdXNlci1zZWxlY3Q6IHRleHQ7XG4gIC1tcy11c2VyLXNlbGVjdDogdGV4dDtcbn1cblxuaHRtbCxcbmJvZHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmM2Y3O1xuICBjb2xvcjogIzM4M2E0MTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBmb250LXNpemU6IDEwcHQ7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi53aXRoLXNoYWRvdywgLm91dHNldCwgYnV0dG9uLCAuY2hlY2t0ZXh0IGlucHV0ICsgc3BhbiwgLmJsdWUtYnV0dG9uLCAuY2hlY2t0ZXh0IGlucHV0OmNoZWNrZWQgKyBzcGFuLCBidXR0b24uYmx1ZS1idXR0b24sIC5yZWQtYnV0dG9uLmJsdWUtYnV0dG9uLCAuZ3JlZW4tYnV0dG9uLmJsdWUtYnV0dG9uLCAuZ3JlZW4tYnV0dG9uLCBidXR0b24uZ3JlZW4tYnV0dG9uLCAucmVkLWJ1dHRvbi5ncmVlbi1idXR0b24sIC5yZWQtYnV0dG9uLCBidXR0b24ucmVkLWJ1dHRvbixcbmlucHV0W3R5cGU9YnV0dG9uXSxcbmlucHV0W3R5cGU9c3VibWl0XSxcbmlucHV0W3R5cGU9cmVzZXRdLCBzZWxlY3QsIGlucHV0W3R5cGU9dGV4dF06bm90KHNlbGVjdCk6Zm9jdXMsXG5pbnB1dFt0eXBlPXNlYXJjaF06bm90KHNlbGVjdCk6Zm9jdXMsXG5pbnB1dFt0eXBlPXRlbF06bm90KHNlbGVjdCk6Zm9jdXMsXG5pbnB1dFt0eXBlPXVybF06bm90KHNlbGVjdCk6Zm9jdXMsXG5pbnB1dFt0eXBlPWVtYWlsXTpub3Qoc2VsZWN0KTpmb2N1cyxcbmlucHV0W3R5cGU9cGFzc3dvcmRdOm5vdChzZWxlY3QpOmZvY3VzLFxuaW5wdXRbdHlwZT1kYXRlXTpub3Qoc2VsZWN0KTpmb2N1cyxcbmlucHV0W3R5cGU9bW9udGhdOm5vdChzZWxlY3QpOmZvY3VzLFxuaW5wdXRbdHlwZT13ZWVrXTpub3Qoc2VsZWN0KTpmb2N1cyxcbmlucHV0W3R5cGU9dGltZV06bm90KHNlbGVjdCk6Zm9jdXMsXG5pbnB1dFt0eXBlPW51bWJlcl06bm90KHNlbGVjdCk6Zm9jdXMsXG5pbnB1dFt0eXBlPWNvbG9yXTpub3Qoc2VsZWN0KTpmb2N1cyxcbnNlbGVjdDpub3Qoc2VsZWN0KTpmb2N1cyxcbnRleHRhcmVhOm5vdChzZWxlY3QpOmZvY3VzLCAucGFwZXIge1xuICBib3gtc2hhZG93OiA2cHggNnB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpLCAtNnB4IC02cHggMTBweCB3aGl0ZTtcbn1cblxuLm91dHNldCwgYnV0dG9uLCAuY2hlY2t0ZXh0IGlucHV0ICsgc3BhbiwgLmJsdWUtYnV0dG9uLCAuY2hlY2t0ZXh0IGlucHV0OmNoZWNrZWQgKyBzcGFuLCBidXR0b24uYmx1ZS1idXR0b24sIC5yZWQtYnV0dG9uLmJsdWUtYnV0dG9uLCAuZ3JlZW4tYnV0dG9uLmJsdWUtYnV0dG9uLCAuZ3JlZW4tYnV0dG9uLCBidXR0b24uZ3JlZW4tYnV0dG9uLCAucmVkLWJ1dHRvbi5ncmVlbi1idXR0b24sIC5yZWQtYnV0dG9uLCBidXR0b24ucmVkLWJ1dHRvbixcbmlucHV0W3R5cGU9YnV0dG9uXSxcbmlucHV0W3R5cGU9c3VibWl0XSxcbmlucHV0W3R5cGU9cmVzZXRdLCBzZWxlY3QsIGlucHV0W3R5cGU9dGV4dF06bm90KHNlbGVjdCk6Zm9jdXMsXG5pbnB1dFt0eXBlPXNlYXJjaF06bm90KHNlbGVjdCk6Zm9jdXMsXG5pbnB1dFt0eXBlPXRlbF06bm90KHNlbGVjdCk6Zm9jdXMsXG5pbnB1dFt0eXBlPXVybF06bm90KHNlbGVjdCk6Zm9jdXMsXG5pbnB1dFt0eXBlPWVtYWlsXTpub3Qoc2VsZWN0KTpmb2N1cyxcbmlucHV0W3R5cGU9cGFzc3dvcmRdOm5vdChzZWxlY3QpOmZvY3VzLFxuaW5wdXRbdHlwZT1kYXRlXTpub3Qoc2VsZWN0KTpmb2N1cyxcbmlucHV0W3R5cGU9bW9udGhdOm5vdChzZWxlY3QpOmZvY3VzLFxuaW5wdXRbdHlwZT13ZWVrXTpub3Qoc2VsZWN0KTpmb2N1cyxcbmlucHV0W3R5cGU9dGltZV06bm90KHNlbGVjdCk6Zm9jdXMsXG5pbnB1dFt0eXBlPW51bWJlcl06bm90KHNlbGVjdCk6Zm9jdXMsXG5pbnB1dFt0eXBlPWNvbG9yXTpub3Qoc2VsZWN0KTpmb2N1cyxcbnNlbGVjdDpub3Qoc2VsZWN0KTpmb2N1cyxcbnRleHRhcmVhOm5vdChzZWxlY3QpOmZvY3VzLCAucGFwZXIge1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjZjJmM2Y3O1xufVxuXG4uaW5zZXQsIGhyLCBidXR0b24uYWN0aXZlLCAuY2hlY2t0ZXh0IGlucHV0ICsgc3Bhbi5hY3RpdmUsIC5hY3RpdmUuYmx1ZS1idXR0b24sIC5hY3RpdmUuZ3JlZW4tYnV0dG9uLCAuYWN0aXZlLnJlZC1idXR0b24sIGJ1dHRvbjphY3RpdmUsIC5jaGVja3RleHQgaW5wdXQgKyBzcGFuOmFjdGl2ZSwgLmJsdWUtYnV0dG9uOmFjdGl2ZSwgLmdyZWVuLWJ1dHRvbjphY3RpdmUsIC5yZWQtYnV0dG9uOmFjdGl2ZSxcbmlucHV0W3R5cGU9YnV0dG9uXS5hY3RpdmUsXG5pbnB1dFt0eXBlPWJ1dHRvbl06YWN0aXZlLFxuaW5wdXRbdHlwZT1zdWJtaXRdLmFjdGl2ZSxcbmlucHV0W3R5cGU9c3VibWl0XTphY3RpdmUsXG5pbnB1dFt0eXBlPXJlc2V0XS5hY3RpdmUsXG5pbnB1dFt0eXBlPXJlc2V0XTphY3RpdmUsIGlucHV0W3R5cGU9dGV4dF06bm90KHNlbGVjdCksXG5pbnB1dFt0eXBlPXNlYXJjaF06bm90KHNlbGVjdCksXG5pbnB1dFt0eXBlPXRlbF06bm90KHNlbGVjdCksXG5pbnB1dFt0eXBlPXVybF06bm90KHNlbGVjdCksXG5pbnB1dFt0eXBlPWVtYWlsXTpub3Qoc2VsZWN0KSxcbmlucHV0W3R5cGU9cGFzc3dvcmRdOm5vdChzZWxlY3QpLFxuaW5wdXRbdHlwZT1kYXRlXTpub3Qoc2VsZWN0KSxcbmlucHV0W3R5cGU9bW9udGhdOm5vdChzZWxlY3QpLFxuaW5wdXRbdHlwZT13ZWVrXTpub3Qoc2VsZWN0KSxcbmlucHV0W3R5cGU9dGltZV06bm90KHNlbGVjdCksXG5pbnB1dFt0eXBlPW51bWJlcl06bm90KHNlbGVjdCksXG5pbnB1dFt0eXBlPWNvbG9yXTpub3Qoc2VsZWN0KSxcbnNlbGVjdDpub3Qoc2VsZWN0KSxcbnRleHRhcmVhOm5vdChzZWxlY3QpIHtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm94LXNoYWRvdzogMCAwIHRyYW5zcGFyZW50LCAwIDAgdHJhbnNwYXJlbnQsIGluc2V0IDNweCAzcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4xKSwgaW5zZXQgLTNweCAtM3B4IDVweCB3aGl0ZTtcbiAgYmFja2dyb3VuZDogI2Y4ZjlmYjtcbn1cblxuLnBhcGVyIHtcbiAgcGFkZGluZzogMTBweCAyMHB4IDIwcHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIG1pbi1oZWlnaHQ6IDEwMHB4O1xuICBmb250LXNpemU6IDEuMmVtO1xuICBiYWNrZ3JvdW5kOiAjZjJmM2Y3O1xufVxuXG5zZWN0aW9uLFxuYXJ0aWNsZSxcbi5zZWN0aW9uLFxuLmFydGljbGUsXG4ucGFwZXIge1xuICBsaW5lLWhlaWdodDogMmVtO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIHdvcmQtYnJlYWs6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDJlbTtcbn1cblxuaW5wdXRbdHlwZT10ZXh0XSxcbmlucHV0W3R5cGU9c2VhcmNoXSxcbmlucHV0W3R5cGU9dGVsXSxcbmlucHV0W3R5cGU9dXJsXSxcbmlucHV0W3R5cGU9ZW1haWxdLFxuaW5wdXRbdHlwZT1wYXNzd29yZF0sXG5pbnB1dFt0eXBlPWRhdGVdLFxuaW5wdXRbdHlwZT1tb250aF0sXG5pbnB1dFt0eXBlPXdlZWtdLFxuaW5wdXRbdHlwZT10aW1lXSxcbmlucHV0W3R5cGU9bnVtYmVyXSxcbmlucHV0W3R5cGU9Y29sb3JdLFxuc2VsZWN0LFxudGV4dGFyZWEge1xuICBib3JkZXI6IDA7XG4gIGJhY2tncm91bmQ6ICNmMmYzZjc7XG4gIGNvbG9yOiAjMzgzYTQxO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBwYWRkaW5nOiAwIDEuMjVlbTtcbiAgbGluZS1oZWlnaHQ6IDEuMjVlbTtcbiAgaGVpZ2h0OiAzLjVlbTtcbiAgbWFyZ2luOiAxMHB4IDA7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xuICBjdXJzb3I6IHRleHQ7XG4gIHVzZXItc2VsZWN0OiB0ZXh0O1xuICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IHRleHQ7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IHRleHQ7XG4gIC1raHRtbC11c2VyLXNlbGVjdDogdGV4dDtcbiAgLW1vei11c2VyLXNlbGVjdDogdGV4dDtcbiAgLW1zLXVzZXItc2VsZWN0OiB0ZXh0O1xuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuMnM7XG59XG50ZXh0YXJlYSB7XG4gIGhlaWdodDogMzUwcHg7XG4gIHBhZGRpbmc6IDEuMjVlbTtcbn1cblxuc2VsZWN0IHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kOiB1cmwoZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCMlpYSnphVzl1UFNJeExqRWlJSFpwWlhkQ2IzZzlJakFnTUNBeE9TQXhPU0lnZUcxc2JuTTlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5Mekl3TURBdmMzWm5JajQ4WnlCMGNtRnVjMlp2Y20wOUltMWhkSEpwZUNndU1ETTBJREFnTUNBdU1ETTBJQzAyTGpnZ01TNDNaUzAxS1NJZ2MzUjViR1U5SW1acGJHdzZJemRpTjJVNFl5SStQSEJoZEdnZ1pEMGliVFE0TUNBek5EUXRNakV4TFRJeE1tTXRNVFl0TVRZdE5ERXRNVFl0TlRjZ01DMHhOaUF4TmkweE5pQTBNaUF3SURVM2JESXpPQ0F5TXpsak9DNDBJRGd1TlNBeU1DQXhNaUF6TVNBeE1pQXhNU0F3TGpVMklESXlMVE11TWlBek1TMHhNbXd5TXpndE1qTTVZekUyTFRFMklERTJMVFF5SURBdE5UZHpMVFF4TFRFMkxUVTNJREI2SWlCemRIbHNaVDBpWm1sc2JEb2pOMkkzWlRoaklpOCtQQzluUGp3dmMzWm5QZ289KSBuby1yZXBlYXQgcmlnaHQgMWVtIGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiAxLjJlbTtcbiAgcGFkZGluZy1yaWdodDogM2VtO1xufVxuXG5pbnB1dDo6cGxhY2Vob2xkZXIsXG50ZXh0YXJlYTo6cGxhY2Vob2xkZXIge1xuICBvcGFjaXR5OiAxO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnM7XG4gIGNvbG9yOiBpbmhlcml0O1xufVxuXG5pbnB1dDpmb2N1czo6cGxhY2Vob2xkZXIsXG50ZXh0YXJlYTpmb2N1czo6cGxhY2Vob2xkZXIge1xuICBvcGFjaXR5OiAwLjI7XG59XG5cbmlucHV0Oi1tcy1pbnB1dC1wbGFjZWhvbGRlcixcbnRleHRhcmVhOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycztcbiAgY29sb3I6IGluaGVyaXQ7XG59XG5cbmlucHV0OmZvY3VzOi1tcy1pbnB1dC1wbGFjZWhvbGRlcixcbnRleHRhcmVhOmZvY3VzOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIG9wYWNpdHk6IDAuMjtcbn1cblxuaW5wdXRbdHlwZT1zZWFyY2hdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uLFxuaW5wdXRbdHlwZT1zZWFyY2hdOjotd2Via2l0LXNlYXJjaC1jYW5jZWwtYnV0dG9uLFxuaW5wdXRbdHlwZT1zZWFyY2hdOjotd2Via2l0LXNlYXJjaC1yZXN1bHRzLWJ1dHRvbixcbmlucHV0W3R5cGU9c2VhcmNoXTo6LXdlYmtpdC1zZWFyY2gtcmVzdWx0cy1kZWNvcmF0aW9uIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuYnV0dG9uLCAuY2hlY2t0ZXh0IGlucHV0ICsgc3BhbiwgLmJsdWUtYnV0dG9uLCAuY2hlY2t0ZXh0IGlucHV0OmNoZWNrZWQgKyBzcGFuLCBidXR0b24uYmx1ZS1idXR0b24sIC5yZWQtYnV0dG9uLmJsdWUtYnV0dG9uLCAuZ3JlZW4tYnV0dG9uLmJsdWUtYnV0dG9uLCAuZ3JlZW4tYnV0dG9uLCBidXR0b24uZ3JlZW4tYnV0dG9uLCAucmVkLWJ1dHRvbi5ncmVlbi1idXR0b24sIC5yZWQtYnV0dG9uLCBidXR0b24ucmVkLWJ1dHRvbixcbmlucHV0W3R5cGU9YnV0dG9uXSxcbmlucHV0W3R5cGU9c3VibWl0XSxcbmlucHV0W3R5cGU9cmVzZXRdIHtcbiAgYm9yZGVyOiAwO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgcGFkZGluZzogMTBweCAwO1xuICB3aWR0aDogOGVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBiYWNrZ3JvdW5kLWNvbG9yLCBib3gtc2hhZG93O1xuICB0cmFuc2l0aW9uLWRlbGF5OiAwLjJzO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjJzO1xufVxuYnV0dG9uLmFjdGl2ZSwgLmNoZWNrdGV4dCBpbnB1dCArIHNwYW4uYWN0aXZlLCAuYWN0aXZlLmJsdWUtYnV0dG9uLCAuYWN0aXZlLmdyZWVuLWJ1dHRvbiwgLmFjdGl2ZS5yZWQtYnV0dG9uLCBidXR0b246YWN0aXZlLCAuY2hlY2t0ZXh0IGlucHV0ICsgc3BhbjphY3RpdmUsIC5ibHVlLWJ1dHRvbjphY3RpdmUsIC5ncmVlbi1idXR0b246YWN0aXZlLCAucmVkLWJ1dHRvbjphY3RpdmUsXG5pbnB1dFt0eXBlPWJ1dHRvbl0uYWN0aXZlLFxuaW5wdXRbdHlwZT1idXR0b25dOmFjdGl2ZSxcbmlucHV0W3R5cGU9c3VibWl0XS5hY3RpdmUsXG5pbnB1dFt0eXBlPXN1Ym1pdF06YWN0aXZlLFxuaW5wdXRbdHlwZT1yZXNldF0uYWN0aXZlLFxuaW5wdXRbdHlwZT1yZXNldF06YWN0aXZlIHtcbiAgdHJhbnNpdGlvbi1kZWxheTogMHM7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMXM7XG59XG4ucmVkLWJ1dHRvbiwgYnV0dG9uLnJlZC1idXR0b24sIC5jaGVja3RleHQgaW5wdXQgKyBzcGFuLnJlZC1idXR0b24sIC5yZWQtYnV0dG9uLmJsdWUtYnV0dG9uLCAucmVkLWJ1dHRvbi5ncmVlbi1idXR0b24sXG5pbnB1dFt0eXBlPWJ1dHRvbl0ucmVkLWJ1dHRvbixcbmlucHV0W3R5cGU9c3VibWl0XS5yZWQtYnV0dG9uLFxuaW5wdXRbdHlwZT1yZXNldF0ucmVkLWJ1dHRvbiB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtc2hhZG93OiAwIDAuMWVtIDAuMWVtIHJnYmEoMCwgMCwgMCwgMC43KTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgI2U0MzAzMCAzMCUsICNlODRiNGIgODAlKTtcbiAgYm94LXNoYWRvdzogMCAwIDAuNWVtIHJnYmEoMjI4LCA0OCwgNDgsIDAuNyksIDAgMCB0cmFuc3BhcmVudCwgaW5zZXQgMCAtNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjA1KSwgaW5zZXQgMCAycHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG4gIGJvcmRlci1yYWRpdXM6IDZweCA2cHggOHB4IDhweDtcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYm94LXNoYWRvdywgYm9yZGVyLXJhZGl1cztcbn1cbi5yZWQtYnV0dG9uLmFjdGl2ZSwgLnJlZC1idXR0b246YWN0aXZlLCBidXR0b24ucmVkLWJ1dHRvbi5hY3RpdmUsIGJ1dHRvbi5yZWQtYnV0dG9uOmFjdGl2ZSxcbmlucHV0W3R5cGU9YnV0dG9uXS5yZWQtYnV0dG9uLmFjdGl2ZSxcbmlucHV0W3R5cGU9YnV0dG9uXS5yZWQtYnV0dG9uOmFjdGl2ZSxcbmlucHV0W3R5cGU9c3VibWl0XS5yZWQtYnV0dG9uLmFjdGl2ZSxcbmlucHV0W3R5cGU9c3VibWl0XS5yZWQtYnV0dG9uOmFjdGl2ZSxcbmlucHV0W3R5cGU9cmVzZXRdLnJlZC1idXR0b24uYWN0aXZlLFxuaW5wdXRbdHlwZT1yZXNldF0ucmVkLWJ1dHRvbjphY3RpdmUge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAjZTQzMDMwIDMwJSwgI2U4NGI0YiA4MCUpO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGJveC1zaGFkb3c6IDAgMCB0cmFuc3BhcmVudCwgMCAwIHRyYW5zcGFyZW50LCBpbnNldCAwIDJweCA1cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cblxuLmdyZWVuLWJ1dHRvbiwgYnV0dG9uLmdyZWVuLWJ1dHRvbiwgLmNoZWNrdGV4dCBpbnB1dCArIHNwYW4uZ3JlZW4tYnV0dG9uLCAuZ3JlZW4tYnV0dG9uLmJsdWUtYnV0dG9uLCAuZ3JlZW4tYnV0dG9uLnJlZC1idXR0b24sXG5pbnB1dFt0eXBlPWJ1dHRvbl0uZ3JlZW4tYnV0dG9uLFxuaW5wdXRbdHlwZT1zdWJtaXRdLmdyZWVuLWJ1dHRvbixcbmlucHV0W3R5cGU9cmVzZXRdLmdyZWVuLWJ1dHRvbiB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtc2hhZG93OiAwIDAuMWVtIDAuMWVtIHJnYmEoMCwgMCwgMCwgMC43KTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgIzE5YTE4NyAzMCUsICMxZGJiOWQgODAlKTtcbiAgYm94LXNoYWRvdzogMCAwIDAuNWVtIHJnYmEoMjUsIDE2MSwgMTM1LCAwLjcpLCAwIDAgdHJhbnNwYXJlbnQsIGluc2V0IDAgLTVweCAwIHJnYmEoMCwgMCwgMCwgMC4wNSksIGluc2V0IDAgMnB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuICBib3JkZXItcmFkaXVzOiA2cHggNnB4IDhweCA4cHg7XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGJveC1zaGFkb3csIGJvcmRlci1yYWRpdXM7XG59XG4uZ3JlZW4tYnV0dG9uLmFjdGl2ZSwgLmdyZWVuLWJ1dHRvbjphY3RpdmUsIGJ1dHRvbi5ncmVlbi1idXR0b24uYWN0aXZlLCBidXR0b24uZ3JlZW4tYnV0dG9uOmFjdGl2ZSxcbmlucHV0W3R5cGU9YnV0dG9uXS5ncmVlbi1idXR0b24uYWN0aXZlLFxuaW5wdXRbdHlwZT1idXR0b25dLmdyZWVuLWJ1dHRvbjphY3RpdmUsXG5pbnB1dFt0eXBlPXN1Ym1pdF0uZ3JlZW4tYnV0dG9uLmFjdGl2ZSxcbmlucHV0W3R5cGU9c3VibWl0XS5ncmVlbi1idXR0b246YWN0aXZlLFxuaW5wdXRbdHlwZT1yZXNldF0uZ3JlZW4tYnV0dG9uLmFjdGl2ZSxcbmlucHV0W3R5cGU9cmVzZXRdLmdyZWVuLWJ1dHRvbjphY3RpdmUge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAjMTlhMTg3IDMwJSwgIzFkYmI5ZCA4MCUpO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGJveC1zaGFkb3c6IDAgMCB0cmFuc3BhcmVudCwgMCAwIHRyYW5zcGFyZW50LCBpbnNldCAwIDJweCA1cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cblxuLmJsdWUtYnV0dG9uLCAuY2hlY2t0ZXh0IGlucHV0OmNoZWNrZWQgKyBzcGFuLCBidXR0b24uYmx1ZS1idXR0b24sIC5jaGVja3RleHQgaW5wdXQgKyBzcGFuLmJsdWUtYnV0dG9uLCAuYmx1ZS1idXR0b24ucmVkLWJ1dHRvbiwgLmJsdWUtYnV0dG9uLmdyZWVuLWJ1dHRvbixcbmlucHV0W3R5cGU9YnV0dG9uXS5ibHVlLWJ1dHRvbixcbmlucHV0W3R5cGU9c3VibWl0XS5ibHVlLWJ1dHRvbixcbmlucHV0W3R5cGU9cmVzZXRdLmJsdWUtYnV0dG9uIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1zaGFkb3c6IDAgMC4xZW0gMC4xZW0gcmdiYSgwLCAwLCAwLCAwLjcpO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAjMzY3YmYwIDMwJSwgIzUyOGVmMiA4MCUpO1xuICBib3gtc2hhZG93OiAwIDAgMC41ZW0gcmdiYSg1NCwgMTIzLCAyNDAsIDAuNyksIDAgMCB0cmFuc3BhcmVudCwgaW5zZXQgMCAtNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjA1KSwgaW5zZXQgMCAycHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG4gIGJvcmRlci1yYWRpdXM6IDZweCA2cHggOHB4IDhweDtcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYm94LXNoYWRvdywgYm9yZGVyLXJhZGl1cztcbn1cbi5ibHVlLWJ1dHRvbi5hY3RpdmUsIC5jaGVja3RleHQgaW5wdXQ6Y2hlY2tlZCArIHNwYW4uYWN0aXZlLCAuYmx1ZS1idXR0b246YWN0aXZlLCAuY2hlY2t0ZXh0IGlucHV0OmNoZWNrZWQgKyBzcGFuOmFjdGl2ZSwgYnV0dG9uLmJsdWUtYnV0dG9uLmFjdGl2ZSwgYnV0dG9uLmJsdWUtYnV0dG9uOmFjdGl2ZSxcbmlucHV0W3R5cGU9YnV0dG9uXS5ibHVlLWJ1dHRvbi5hY3RpdmUsXG5pbnB1dFt0eXBlPWJ1dHRvbl0uYmx1ZS1idXR0b246YWN0aXZlLFxuaW5wdXRbdHlwZT1zdWJtaXRdLmJsdWUtYnV0dG9uLmFjdGl2ZSxcbmlucHV0W3R5cGU9c3VibWl0XS5ibHVlLWJ1dHRvbjphY3RpdmUsXG5pbnB1dFt0eXBlPXJlc2V0XS5ibHVlLWJ1dHRvbi5hY3RpdmUsXG5pbnB1dFt0eXBlPXJlc2V0XS5ibHVlLWJ1dHRvbjphY3RpdmUge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAjMzY3YmYwIDMwJSwgIzUyOGVmMiA4MCUpO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGJveC1zaGFkb3c6IDAgMCB0cmFuc3BhcmVudCwgMCAwIHRyYW5zcGFyZW50LCBpbnNldCAwIDJweCA1cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cblxubGFiZWwge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDAuNTZlbSAwO1xufVxubGFiZWwsIGxhYmVsICoge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmEsIGE6bGluaywgYTp2aXNpdGVkLCBhOmhvdmVyIGE6YWN0aXZlIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjMzY3YmYwO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuYSwgYSAqLCBhOmxpbmssIGE6bGluayAqLCBhOnZpc2l0ZWQsIGE6dmlzaXRlZCAqLCBhOmhvdmVyIGE6YWN0aXZlLCBhOmhvdmVyIGE6YWN0aXZlICoge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmgxLFxuaDIsXG5oMyxcbmg0LFxuaDUsXG5oNiB7XG4gIGxpbmUtaGVpZ2h0OiAxLjVlbTtcbn1cblxuaDEge1xuICBmb250LXNpemU6IDRlbTtcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4gIG1hcmdpbjogMC43ZW0gMDtcbn1cblxuaDIge1xuICBmb250LXNpemU6IDNlbTtcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4gIG1hcmdpbjogMC44ZW0gMDtcbn1cblxuaDMge1xuICBmb250LXNpemU6IDIuNWVtO1xuICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgbWFyZ2luOiAwLjllbSAwO1xufVxuXG5oNCB7XG4gIGZvbnQtc2l6ZTogMmVtO1xuICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgbWFyZ2luOiAxZW0gMDtcbn1cblxuaDUge1xuICBtYXJnaW46IDAuNWVtIDA7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG5cbmg2IHtcbiAgbWFyZ2luOiAxZW0gMCAxZW0gMS40ZW07XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuaW5wdXRbdHlwZT1jaGVja2JveF0sXG5pbnB1dFt0eXBlPXJhZGlvXSB7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGhlaWdodDogMS4yZW07XG4gIHdpZHRoOiAxLjJlbTtcbiAgbWFyZ2luOiAwIDAuM2VtO1xuICBib3gtc2hhZG93OiAycHggMnB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMiksIC0ycHggLTJweCAzcHggd2hpdGUsIGluc2V0IDFweCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgaW5zZXQgLTFweCAtMXB4IDJweCB3aGl0ZTtcbiAgYm9yZGVyOiAwLjE1ZW0gc29saWQgI2YyZjNmNztcbiAgdmVydGljYWwtYWxpZ246IHRleHQtYm90dG9tO1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBiYWNrZ3JvdW5kLCBib3gtc2hhZG93O1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjJzO1xufVxuaW5wdXRbdHlwZT1jaGVja2JveF06YWN0aXZlLFxuaW5wdXRbdHlwZT1yYWRpb106YWN0aXZlIHtcbiAgYm94LXNoYWRvdzogMnB4IDJweCAzcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAtMnB4IC0ycHggM3B4IHdoaXRlLCBpbnNldCAxcHggMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMiksIGluc2V0IC0xcHggLTFweCAycHggd2hpdGUsIGluc2V0IDAgMC4xZW0gMC4yNWVtIHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cbmlucHV0W3R5cGU9Y2hlY2tib3hdOmNoZWNrZWQsXG5pbnB1dFt0eXBlPXJhZGlvXTpjaGVja2VkIHtcbiAgYm9yZGVyLXdpZHRoOiAwLjFlbTtcbiAgYm9yZGVyLWNvbG9yOiAjMTE1ZmUyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzY3YmYwO1xufVxuXG5pbnB1dFt0eXBlPWNoZWNrYm94XSB7XG4gIGJvcmRlci1yYWRpdXM6IDI1JTtcbn1cbmlucHV0W3R5cGU9Y2hlY2tib3hdOmNoZWNrZWQge1xuICBib3gtc2hhZG93OiAwIDAgMC41ZW0gcmdiYSg1NCwgMTIzLCAyNDAsIDAuNyksIGluc2V0IDAgLTAuMWVtIDAgcmdiYSgwLCAwLCAwLCAwLjIpLCBpbnNldCAwIDAuMWVtIDAuMWVtIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbn1cblxuaW5wdXRbdHlwZT1yYWRpb10ge1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xufVxuaW5wdXRbdHlwZT1yYWRpb106Y2hlY2tlZCB7XG4gIGJveC1zaGFkb3c6IDAgMCAwLjVlbSByZ2JhKDU0LCAxMjMsIDI0MCwgMC43KTtcbiAgYm94LXNoYWRvdzogMCAwIDAuNWVtIHJnYmEoNTQsIDEyMywgMjQwLCAwLjcpLCBpbnNldCAwIDAuMTJlbSAwLjFlbSByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpO1xuICBib3JkZXItYm90dG9tLXdpZHRoOiAwLjE1ZW07XG59XG5cbi5jaGVja3RleHQge1xuICB3aWR0aDogYXV0bztcbiAgbWFyZ2luOiAwLjVlbTtcbn1cbi5jaGVja3RleHQgaW5wdXQge1xuICBkaXNwbGF5OiBub25lO1xufVxuLmNoZWNrdGV4dCBpbnB1dCArIHNwYW4ge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZzogMWVtO1xuICB0cmFuc2l0aW9uLWRlbGF5OiAwcztcbn1cbi5jaGVja3RleHQgaW5wdXQ6Y2hlY2tlZCArIHNwYW4ge1xuICBwYWRkaW5nOiAxZW07XG59XG5cbi5zd2l0Y2gge1xuICBoZWlnaHQ6IDJyZW07XG4gIHdpZHRoOiA4cmVtO1xuICBwYWRkaW5nOiAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uc3dpdGNoIGlucHV0IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5zd2l0Y2ggaW5wdXQgKyBkaXYge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiA5OTlweDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGJveC1zaGFkb3csIGJhY2tncm91bmQtY29sb3I7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMnM7XG4gIHRyYW5zaXRpb24tZGVsYXk6IDAuMnM7XG4gIGJveC1zaGFkb3c6IDNweCAzcHggMnB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjEpLCBpbnNldCAycHggMnB4IDJweCAxcHggcmdiYSgwLCAwLCAwLCAwLjEpLCBpbnNldCAtMnB4IC0ycHggMXB4IHdoaXRlO1xufVxuLnN3aXRjaCBpbnB1dCArIGRpdjo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogY2FsYygycmVtICsgNHB4KTtcbiAgd2lkdGg6IGNhbGMoMnJlbSArIDRweCk7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIGJvcmRlcjogc29saWQgd2hpdGUgM3B4O1xuICBiYWNrZ3JvdW5kOiAjMzY3YmYwO1xuICBib3gtc2hhZG93OiAwIDNweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgaW5zZXQgMCAtMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC02cHgpO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycztcbn1cbi5zd2l0Y2ggaW5wdXQ6Y2hlY2tlZCArIGRpdiB7XG4gIGJhY2tncm91bmQ6ICMzNjdiZjA7XG4gIGJveC1zaGFkb3c6IDAgMCAwLjVlbSByZ2JhKDU0LCAxMjMsIDI0MCwgMC43KSwgaW5zZXQgMCAycHggMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMyksIGluc2V0IDAgMCB0cmFuc3BhcmVudDtcbn1cbi5zd2l0Y2ggaW5wdXQ6Y2hlY2tlZCArIGRpdjo6YmVmb3JlIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNnJlbSwgLTZweCk7XG59XG5cbmhyIHtcbiAgd2lkdGg6IDcyJTtcbiAgaGVpZ2h0OiA4cHg7XG4gIGZsb2F0OiByaWdodDtcbiAgYm9yZGVyOiAwO1xufVxuXG5jb2RlLFxucHJlIHtcbiAgcGFkZGluZzogMC41ZW0gMWVtO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBib3gtc2hhZG93OiAwIDVweCAzMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjA1KTtcbn1cblxuY29kZSB7XG4gIGJhY2tncm91bmQ6ICNlNmU2ZTY7XG59XG5cbnByZSB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBtYXJnaW46IDRlbSAwO1xufVxuXG5jb2RlLCBjb2RlICosXG5wcmUsXG5wcmUgKiB7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBsaW5lLWhlaWdodDogMmVtO1xuICBjdXJzb3I6IGF1dG87XG4gIHVzZXItc2VsZWN0OiB0ZXh0O1xuICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IHRleHQ7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IHRleHQ7XG4gIC1raHRtbC11c2VyLXNlbGVjdDogdGV4dDtcbiAgLW1vei11c2VyLXNlbGVjdDogdGV4dDtcbiAgLW1zLXVzZXItc2VsZWN0OiB0ZXh0O1xufVxuXG5ibG9ja3F1b3RlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDAuNWVtIDFlbTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3gtc2hhZG93OiAwIDVweCAzMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgYm9yZGVyLWxlZnQ6IDZweCBzb2xpZCAjMzY3YmYwO1xufVxuXG5zZXR0aW5ncy13aW5kb3cge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1vdXRlcik7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SettingsMenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-settings-menu',
                templateUrl: './settings-menu.component.html',
                styleUrls: ['./settings-menu.component.scss']
            }]
    }], function () { return []; }, null); })();


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