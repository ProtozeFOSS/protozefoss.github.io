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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");





const routes = [{ path: '', redirectTo: 'Aria', pathMatch: 'full' },
    { path: '', component: _app_component__WEBPACK_IMPORTED_MODULE_2__["Aria"], pathMatch: 'full' },
    { path: ':settings', component: _app_component__WEBPACK_IMPORTED_MODULE_2__["Aria"], pathMatch: 'full' }];
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
/*! exports provided: Aria */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Aria", function() { return Aria; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _aria_header_aria_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./aria-header/aria-header.component */ "./src/app/aria-header/aria-header.component.ts");
/* harmony import */ var _aria_status_aria_status_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./aria-status/aria-status.component */ "./src/app/aria-status/aria-status.component.ts");
/* harmony import */ var _canvas_chessboard_canvas_chessboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./canvas-chessboard/canvas-chessboard.component */ "./src/app/canvas-chessboard/canvas-chessboard.component.ts");
/* harmony import */ var _aria_score_aria_score_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./aria-score/aria-score.component */ "./src/app/aria-score/aria-score.component.ts");
/* harmony import */ var _aria_controls_aria_controls_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./aria-controls/aria-controls.component */ "./src/app/aria-controls/aria-controls.component.ts");
/* harmony import */ var _test_pgn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../test-pgn */ "./src/test-pgn.ts");
/* harmony import */ var _services_aria_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/aria.service */ "./src/app/services/aria.service.ts");
/* harmony import */ var _services_themes_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/themes.service */ "./src/app/services/themes.service.ts");
/* harmony import */ var _services_layout_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/layout.service */ "./src/app/services/layout.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");












var JSRPC;
(function (JSRPC) {
    JSRPC["setPGN"] = "setPGN";
    JSRPC["onSettings"] = "onSettings";
    JSRPC["getSettings"] = "getSettings";
    JSRPC["scaleTo"] = "scaleTo";
})(JSRPC || (JSRPC = {}));
class Aria {
    constructor(aria, themes, layout, route) {
        this.aria = aria;
        this.themes = themes;
        this.layout = layout;
        this.route = route;
        this.gameScoreWidth = 389;
        this.oldWidth = 0;
        this.keymap = new Map();
        this.resizing = null;
        this.loadKeymap();
        const date = new Date();
        this.aria.UUID = 'ARIA-' + date.getTime().toString();
        this.route.queryParams.subscribe(params => {
            if (params) {
                try {
                    console.log(params);
                    const decoded = atob(params.settings);
                    const settings_obj = JSON.parse(decoded);
                    this.applyJsonSettings(settings_obj);
                }
                catch (any) {
                }
            }
        });
        console.log('ID: ' + this.aria.UUID);
    }
    ngAfterViewInit() {
        this.layout.boardElement = document.getElementById('ccb-' + this.aria.UUID);
        this.layout.controlsElement = document.getElementById('controls-' + this.aria.UUID);
        this.layout.statusElement = document.getElementById('status-' + this.aria.UUID);
        this.layout.headerElement = document.getElementById('header-' + this.aria.UUID);
        //this.layout.resizeElement = document.getElementById('resize-handle-' + this.aria.UUID);
        this.aria.attachAria(this);
        this.layout.initializeLayout(this);
        if (this.gameScoreComponent) {
            //this.gameScoreComponent.resizeHandleEvent = this.layout.onSliderDrag.bind(this.layout);
            //this.gameScoreComponent.resizeTouchEvent = this.layout.onSliderTouch.bind(this.layout);
        }
        this.themes.boardBGLight.subscribe((light) => {
            if (this.canvasBoardComponent) {
                this.canvasBoardComponent.setLightTile(light);
            }
        });
        this.themes.boardBGDark.subscribe((dark) => {
            if (this.canvasBoardComponent) {
                this.canvasBoardComponent.setDarkTile(dark);
            }
        });
        //this.aria.loadPGN(TestPGNData + this.pgnData.nativeElement.value);
        window.onkeydown = this.keyEvent.bind(this);
        window.onmessage = this.onMessage.bind(this);
        this.aria.loadSettings();
        this.themes.initializeColorPalette();
        window.onresize = () => {
            if (!this.resizing) {
                this.resizing = window.setTimeout(() => {
                    this.layout.resizeLayout(window.innerWidth, window.innerHeight);
                    this.resizing = null;
                }, 10);
            }
        };
        window.setTimeout(() => { this.layout.resizeLayout(window.innerWidth, window.innerHeight); }, 1);
        window.setTimeout(() => { this.aria.loadPGN(_test_pgn__WEBPACK_IMPORTED_MODULE_6__["TestPGNData"]); }, 180);
    }
    mouseMoved(event) {
        if (this.gameScoreComponent) {
            //this.gameScoreComponent.resizeHandleEvent(event);
            if (event.buttons === 0) {
            }
        }
    }
    autoPlayActive() {
        if (this.controlsComponent) {
            return this.controlsComponent.playing;
        }
        return false;
    }
    applyJsonSettings(settings) {
        if (settings) {
            // @ts-ignore
            if (settings[THEMES]) {
                // @ts-ignore
                this.themes.setSettings(settings[THEMES]);
            }
            return true;
        }
        return false;
    }
    createParentMessage(type, data) {
        let message = '';
        try {
            message = JSON.stringify({ type, data });
        }
        catch (_a) {
            console.log('Failed creating parent message for type:' + type);
            console.log(data);
        }
        return message;
    }
    onMessage(event) {
        if (event && event.data && (typeof event.data === 'string')) {
            let message_obj = null;
            try {
                message_obj = JSON.parse(event.data);
            }
            catch (error) {
                console.log('Bad JSON data - Window ARIA Message');
                console.log(error);
                return;
            }
            if (message_obj.type) {
                switch (message_obj.type) {
                    case JSRPC.setPGN: {
                        if (message_obj.pgn) {
                            const pgn = message_obj.pgn;
                            this.aria.loadPGN(pgn);
                            //parent.postMessage('Loaded PGN succesfully.', parent.origin);
                        }
                        break;
                    }
                    case JSRPC.getSettings: {
                        let message = this.createParentMessage(JSRPC.onSettings, this.getSettings());
                        if (message.length) {
                            parent.postMessage(message, parent.origin);
                        }
                        break;
                    }
                    case JSRPC.scaleTo: {
                        if (message_obj.height && message_obj.width) {
                            this.scaleTo(message_obj.width, message_obj.height);
                        }
                        break;
                    }
                    default: {
                        console.log('Invalid ARIA Message:\n');
                        console.log(event.data);
                        break;
                    }
                }
            }
        }
    }
    saveSettings(settings) {
        let message = this.createParentMessage(JSRPC.onSettings, settings);
        if (message.length) {
            parent.postMessage(message, parent.origin);
        }
    }
    scaleTo(width, height) {
    }
    applyDefaultSettings() {
        this.themes.initializeColorPalette();
        return true;
    }
    getSettings() {
        const themeSettings = this.themes.settings();
        const layoutSettings = this.layout.settings();
        const ariaSettings = this.aria.settings();
        return { themes: themeSettings, layout: layoutSettings, aria: ariaSettings };
    }
    getJsonSettings() {
        const themeSettings = this.themes.settings();
        const layoutSettings = this.layout.settings();
        const ariaSettings = this.aria.settings();
        return JSON.stringify({ themes: themeSettings, layout: layoutSettings, aria: ariaSettings });
    }
    toggleAutoPlay() {
        if (this.aria) {
            this.aria.toggleAutoPlay();
        }
    }
    loadKeymap() {
        // initial default keymap
        this.keymap.set('Space', () => { this.aria.toggleAutoPlay(); });
        this.keymap.set('Home', () => { this.aria.moveToStart(); });
        this.keymap.set('End', () => { this.aria.moveToEnd(); });
        this.keymap.set('ArrowRight', () => { this.aria.advance(); });
        this.keymap.set('ArrowLeft', () => { this.aria.previous(); });
        this.keymap.set('KeyI', () => { this.aria.rotateBoardOrientation(); });
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
        if (this.gameScoreComponent) {
            //this.resizeTouchEvent(event);
        }
    }
}
Aria.ɵfac = function Aria_Factory(t) { return new (t || Aria)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_aria_service__WEBPACK_IMPORTED_MODULE_7__["AriaService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_themes_service__WEBPACK_IMPORTED_MODULE_8__["ThemeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_layout_service__WEBPACK_IMPORTED_MODULE_9__["LayoutService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"])); };
Aria.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Aria, selectors: [["aria"]], viewQuery: function Aria_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_aria_score_aria_score_component__WEBPACK_IMPORTED_MODULE_4__["AriaScore"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_canvas_chessboard_canvas_chessboard_component__WEBPACK_IMPORTED_MODULE_3__["CanvasChessBoard"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_aria_controls_aria_controls_component__WEBPACK_IMPORTED_MODULE_5__["AriaControls"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_aria_header_aria_header_component__WEBPACK_IMPORTED_MODULE_1__["AriaHeader"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_aria_status_aria_status_component__WEBPACK_IMPORTED_MODULE_2__["AriaStatus"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.gameScoreComponent = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.canvasBoardComponent = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.controlsComponent = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.headerComponent = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.statusComponent = _t.first);
    } }, outputs: { gameScoreWidth: "gameScoreWidth", oldWidth: "oldWidth", keymap: "keymap" }, decls: 10, vars: 24, consts: [[1, "container"], [3, "id"], [1, "sbs-portrait"], [3, "id", "boardID", "theme", "showLabels", "touchstart"], ["canvasBoardComponent", ""], [1, "bottom-stage"]], template: function Aria_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "aria-header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "canvas-chessboard", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("touchstart", function Aria_Template_canvas_chessboard_touchstart_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4); return _r0.touchStart($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "aria-score", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "aria-controls", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "aria-status", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("header", ctx.layout.state, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "header-", ctx.aria.UUID, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("board", ctx.layout.state, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "ccb-", ctx.aria.UUID, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("boardID", ctx.aria.UUID);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("theme", ctx.themes.boardTheme())("showLabels", ctx.aria.showLabels.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("score", ctx.layout.state, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "score-", ctx.aria.UUID, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("controls", ctx.layout.state, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "controls-", ctx.aria.UUID, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("status", ctx.layout.state, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "status-", ctx.aria.UUID, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("State:", ctx.layout.state, "");
    } }, styles: ["@font-face {\n  font-family: \"Caveat\";\n  src: url('Caveat-Bold.woff2') format(\"woff2\"), url('Caveat-Bold.woff') format(\"woff\");\n  font-weight: bold;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"Caveat\";\n  src: url('Caveat-Regular.woff2') format(\"woff2\"), url('Caveat-Regular.woff') format(\"woff\");\n  font-weight: 600;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"FigurineSymbolT1\";\n  src: url('FigurineSymbolT1Bold.woff2') format(\"woff2\"), url('FigurineSymbolT1Bold.woff') format(\"woff\");\n  font-weight: bold;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"FigurineSymbolT1\";\n  src: url('FigurineSymbolT1.woff2') format(\"woff2\"), url('FigurineSymbolT1.woff') format(\"woff\");\n  font-weight: 600;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"SanctuaryPlayground\";\n  src: url('SanctuaryPlayground.woff2') format(\"woff2\"), url('SanctuaryPlayground.woff') format(\"woff\");\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"Amita\";\n  src: url('Amita-Regular.woff2') format(\"woff2\"), url('Amita-Regular.woff2') format(\"woff\");\n  font-style: normal;\n  font-display: swap;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n[_ngcontent-%COMP%]:root {\n  --bg-color: #f2f3f7;\n  --fg-color: #383a41;\n  --red: #e43030;\n  --green: #19a187;\n  --blue: #367bf0;\n  --dark-blue: #265ab1;\n  --maroon: #b8174c;\n  --purple: #8c42ab;\n}\n.container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n.sbs-portrait[_ngcontent-%COMP%] {\n  order: 2;\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  height: auto;\n  flex-wrap: wrap;\n}\n.header[_ngcontent-%COMP%], .header4[_ngcontent-%COMP%], .header3[_ngcontent-%COMP%], .header2[_ngcontent-%COMP%], .header1[_ngcontent-%COMP%] {\n  position: absolute;\n  order: 0;\n}\n.header1[_ngcontent-%COMP%] {\n  position: relative;\n  top: 0px;\n  height: auto;\n  right: 0px;\n  left: 0px;\n  overflow: hidden;\n  max-height: clear;\n}\n.header2[_ngcontent-%COMP%] {\n  position: relative;\n  top: 0px;\n  height: auto;\n  right: 0px;\n  left: 0px;\n  overflow: hidden;\n  max-height: clear;\n}\n.board[_ngcontent-%COMP%], .board4[_ngcontent-%COMP%], .board3[_ngcontent-%COMP%], .board2[_ngcontent-%COMP%], .board1[_ngcontent-%COMP%] {\n  position: absolute;\n  order: 1;\n}\n.board1[_ngcontent-%COMP%] {\n  position: relative;\n  order: 0;\n  flex-grow: 1;\n}\n.board2[_ngcontent-%COMP%] {\n  position: relative;\n  order: 0;\n  flex-grow: 1;\n}\n.score[_ngcontent-%COMP%], .score2[_ngcontent-%COMP%], .score1[_ngcontent-%COMP%] {\n  position: relative;\n}\n.score1[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  order: 2;\n  overflow-y: visible;\n}\n.score2[_ngcontent-%COMP%] {\n  order: 1;\n  flex-grow: 1;\n  overflow-y: auto;\n}\n.controls[_ngcontent-%COMP%], .controls4[_ngcontent-%COMP%], .controls3[_ngcontent-%COMP%], .controls2[_ngcontent-%COMP%], .controls1[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 99px;\n  width: 100%;\n  left: 0px;\n  right: 0px;\n}\n.controls1[_ngcontent-%COMP%] {\n  position: relative;\n  order: 1;\n  flex-grow: 2;\n}\n.controls2[_ngcontent-%COMP%] {\n  position: relative;\n  order: 2;\n  flex-grow: 2;\n}\n.controls3[_ngcontent-%COMP%] {\n  left: 0px;\n  width: 100%;\n}\n.controls4[_ngcontent-%COMP%] {\n  left: 0px;\n  width: 100%;\n}\n.status1[_ngcontent-%COMP%] {\n  order: 3;\n}\n.status2[_ngcontent-%COMP%] {\n  order: 2;\n}\n.bottom-stage[_ngcontent-%COMP%] {\n  order: 12;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMuc2NzcyIsInNyYy9hc3NldHMvc2Nzcy9tb2R1bGVzL19mb250cy5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOEVBQUE7QUNBQTtFQUNJLHFCQUFBO0VBQ0EscUZBQUE7RUFFQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNDSjtBREVBO0VBQ0kscUJBQUE7RUFDQSwyRkFBQTtFQUVBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0RKO0FESUE7RUFDRSwrQkFBQTtFQUNBLHVHQUFBO0VBRUEsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDSEY7QURNQTtFQUNFLCtCQUFBO0VBQ0EsK0ZBQUE7RUFFQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNMRjtBRFFBO0VBQ0Usa0NBQUE7RUFDQSxxR0FBQTtFQUVBLGtCQUFBO0VBQ0Esa0JBQUE7QUNQRjtBRFdBO0VBQ0Usb0JBQUE7RUFDQSwwRkFBQTtFQUVBLGtCQUFBO0VBQ0Esa0JBQUE7QUNWRjtBRkRBLCtFQUFBO0FBR0Esa0ZBQUE7QUFLQSwrRUFBQTtBQVVBLCtFQUFBO0FBTUEsK0VBQUE7QUFNQSwrRUFBQTtBQU1BLGdGQUFBO0FBS0EsK0VBQUE7QUFLQSx5RUFBQTtBQUtBLHlFQUFBO0FBSUEsdUVBQUE7QUFRQSxxRUFBQTtBQXdCQTtFQUNFLG1CQUFBO0VBQ0EsbUJBQUE7RUFFQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FFekVGO0FBNURBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUErREo7QUE3REE7RUFDSSxRQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBZ0VKO0FBN0RBO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0FBZ0VKO0FBL0RDO0VBRUcsa0JBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQWlFSjtBQWhFQztFQUVHLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFrRUo7QUF2REE7RUFDSSxrQkFBQTtFQUNBLFFBQUE7QUEwREo7QUF6REM7RUFFRyxrQkFBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0FBMkRKO0FBMURDO0VBRUcsa0JBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtBQTRESjtBQW5EQTtFQUNJLGtCQUFBO0FBc0RKO0FBckRDO0VBRUcsWUFBQTtFQUNBLFFBQUE7RUFDQSxtQkFBQTtBQXVESjtBQXREQztFQUVHLFFBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUF3REo7QUFyREE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUF3REo7QUF2REM7RUFFRyxrQkFBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0FBeURKO0FBeERDO0VBRUcsa0JBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtBQTBESjtBQXpEQztFQUVHLFNBQUE7RUFDQSxXQUFBO0FBMkRKO0FBekRDO0VBRUcsU0FBQTtFQUNBLFdBQUE7QUEyREo7QUFyREM7RUFFRyxRQUFBO0FBdURKO0FBckRDO0VBRUcsUUFBQTtBQXVESjtBQTVDQTtFQUNJLFNBQUE7QUErQ0oiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG5cbkBpbXBvcnQgXCIuL2Fzc2V0cy9zY3NzL21vZHVsZXMvX2ZvbnRzLnNjc3NcIjtcbiRnYW1lc2NvcmUtZmFtaWx5OiBcIkZpZ3VyaW5lU3ltYm9sVDFcIjtcbiRnYW1lc2NvcmUtaGlnaGxpZ2h0OiAjNTg1ODU4ZmY7XG4kZ2FtZXNjb3JlLWZvcmVncm91bmQ6IHdoaXRlO1xuXG4kcmVkOiAjZTQzMDMwO1xuJGdyZWVuOiAjMTlhMTg3O1xuJGxpZ2h0LWJsdWU6ICMwMGZmZmZmZjtcbiRibHVlOiAjMzY3YmYwO1xuJGRhcmstYmx1ZTogIzI2NWFiMTtcbiRtYXJvb246ICNiODE3NGM7XG4kcHVycGxlOiAjOGM0MmFiO1xuXG4vLyBNYWluIEFSSUEgQ29sb3IgRWxlbWVudCBWYXJpYWJsZXNcbiR0ZXh0Q29sb3I6IHZhcigtLXRleHRDb2xvcik7IC8vIE1haW4gVGV4dCBDb2xvclxuJHRleHRDb2xvckF0dGVudGlvbjogdmFyKC0tdGV4dENvbG9yQXR0ZW50aW9uKTsgLy8gQXR0ZW50aW9uIHRleHRcbiR0ZXh0Q29sb3JSZW1vdmU6IHZhcigtLXRleHRDb2xvclJlbW92ZSk7IC8vIFJlbW92ZS9EZWxldGUvQ2xvc2VcbiR0ZXh0Q29sb3JBZGQ6IHZhcigtLXRleHRDb2xvckFkZCk7IC8vIEFkZC9DcmVhdGUvT3BlblxuJHRleHRDb2xvckFjdGl2ZTogdmFyKC0tdGV4dENvbG9yQWN0aXZlKTsgLy8gQWRkL0NyZWF0ZS9PcGVuXG4kYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZCk7IC8vIE1haW4gYmFja2dyb3VuZCBDb2xvclxuJGJnQ29udGFpbmVyOiB2YXIoLS1iZ0NvbnRhaW5lcik7IC8vIGJhY2tncm91bmQgb2YgQ29udGFpbmVyc1xuJGJnTWVudTogdmFyKC0tYmdNZW51KTsgLy8gYmFja2dyb3VuZCBvZiBNZW51c1xuJGJnSXRlbTogdmFyKC0tYmdJdGVtKTsgLy8gYmFja2dyb3VuZCBvZiBJdGVtc1xuXG4vLyBDb250ZXh0IE1lbnVcbiRiZ0NvbnRleHQ6IHZhcigtLWJnQ29udGV4dCk7IC8vIGJhY2tncm91bmQgb2YgQ29udGV4dCBNZW51XG4kdGV4dENvbG9yQ29udGV4dDogdmFyKC0tdGV4dENvbG9yQ29udGV4dCk7IC8vIHRleHQgY29sb3IgQ29udGV4dCBNZW51XG4kYm9yZGVyQ29udGV4dDogdmFyKC0tYm9yZGVyQ29udGV4dCk7IC8vIGJvcmRlciBDb250ZXh0IE1lbnVcbiRvdmVybGF5Q29udGV4dEJhY2tncm91bmQ6IHZhcihcbiAgLS1vdmVybGF5Q29udGV4dEJhY2tncm91bmRcbik7IC8vIENvbnRleHQgTWVudSBPdmVybGF5IGJhY2tncm91bmQgbWFpblxuJG92ZXJsYXlDb250ZXh0QmFja2dyb3VuZEdyYWRpZW50OiB2YXIoXG4gIC0tb3ZlcmxheUNvbnRleHRCYWNrZ3JvdW5kR3JhZGllbnRcbik7IC8vIENvbnRleHQgTWVudSBiYWNrZ3JvdW5kIGdyYWRpZW50XG5cblxuXG4vKioqKioqKioqKioqKioqKioqKiBNZW51ICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuJG1lQmFja2dyb3VuZDogdmFyKC0tbWVCYWNrZ3JvdW5kKTtcblxuLyoqKioqKioqKioqKioqKioqKioqKioqKiBNZW51IENvbnRyb2xzICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiRjc0ZpbGw6IHZhcigtLWNzRmlsbCk7XG4kY3NBY2NlbnQ6IHZhcigtLWNzQWNjZW50KTtcbiRjc0FjY2VudDI6IHZhcigtLWNzQWNjZW50Mik7XG5cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgQ29udGFpbmVyIFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4kZ3NUZXh0Q29sb3I6IHZhcigtLWdzVGV4dENvbG9yKTsgLy8gVGV4dCBjb2xvciBmb3IgZ2FtZSBzY29yZVxuJGdzQmFja2dyb3VuZDogdmFyKC0tZ3NCYWNrZ3JvdW5kKTsgLy8gYmFja2dyb3VuZCBvZiBDb250YWluZXJzXG4kZ3NMaXN0QmFja2dyb3VuZDogdmFyKC0tZ3NMaXN0QmFja2dyb3VuZCk7IC8vIGxpc3QgYmFja2dyb3VuZCBvZiBnYW1lIHNjb3JlXG4kZ3NCb3JkZXI6IHZhcigtLWdzQm9yZGVyKTsgLy8gYmFja2dyb3VuZCBvZiBNZW51c1xuJGdzVGV4dFNpemU6IHZhcigtLWdzVGV4dFNpemUpOyAvLyBiYWNrZ3JvdW5kIG9mIE1lbnVzXG4kZ3NGb250RmFtaWx5OiB2YXIoLS1nc0ZvbnRGYW1pbHkpOyAvLyBzY29yZSBmb250XG4kZ3NUYWJsZUl0ZW1XaWR0aDogdmFyKC0tZ3NUYWJsZUl0ZW1XaWR0aCk7IC8vIHdpZHRoIG9mIHNjb3JlIGl0ZW0gaW4gdGFibGUgbGF5b3V0XG4kZ3NUYWJsZVBseVdpZHRoOiB2YXIoLS1nc1RhYmxlUGx5V2lkdGgpOyAvLyB3aWR0aCBvZiBwbHkgZWxlbWVudCBpbiB0YWJsZSBsYXlvdXRcblxuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBDb250YWluZXIgVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiRnc1RleHRDb2xvck1XOiB2YXIoLS1nc1RleHRDb2xvck1XKTsgLy8gVGV4dCBjb2xvciBmb3IgZ2FtZSBzY29yZVxuJGdzQmFja2dyb3VuZE1XOiB2YXIoLS1nc0JhY2tncm91bmRNVyk7IC8vIGJhY2tncm91bmQgb2YgQ29udGFpbmVyc1xuJGdzQm9yZGVyTVc6IHZhcigtLWdzQm9yZGVyTVcpOyAvLyBiYWNrZ3JvdW5kIG9mIE1lbnVzXG4kZ3NUZXh0U2l6ZU1XOiB2YXIoLS1nc1RleHRTaXplTVcpOyAvLyBiYWNrZ3JvdW5kIG9mIE1lbnVzXG5cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgQ29udGFpbmVyIFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4kZ3NUZXh0Q29sb3JNQjogdmFyKC0tZ3NUZXh0Q29sb3JNQik7IC8vIFRleHQgY29sb3IgZm9yIGdhbWUgc2NvcmVcbiRnc0JhY2tncm91bmRNQjogdmFyKC0tZ3NCYWNrZ3JvdW5kTUIpOyAvLyBiYWNrZ3JvdW5kIG9mIENvbnRhaW5lcnNcbiRnc0JvcmRlck1COiB2YXIoLS1nc0JvcmRlck1CKTsgLy8gYmFja2dyb3VuZCBvZiBNZW51c1xuJGdzVGV4dFNpemVNQjogdmFyKC0tZ3NUZXh0U2l6ZU1CKTsgLy8gYmFja2dyb3VuZCBvZiBNZW51c1xuXG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIEhpZ2hsaWdodCBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuJGdzVGV4dENvbG9ySEc6IHZhcigtLWdzVGV4dENvbG9ySEcpOyAvLyBUZXh0IGNvbG9yIGZvciBoaWdobGlnaHRcbiRnc0Fubm90YXRpb25Db2xvckhHOiB2YXIoLS1nc0Fubm90YXRpb25Db2xvckhHKTsgLy8gQW5ub3RhdGlvbi9Db21tZW50IGNvbG9yIGZvciBoaWdobGlnaHRcbiRnc0JhY2tncm91bmRIRzogdmFyKC0tZ3NCYWNrZ3JvdW5kSEcpOyAvLyBiYWNrZ3JvdW5kIGZvciBoaWdobGlnaHRcbiRnc0JvcmRlckhHOiB2YXIoLS1nc0JvcmRlckhHKTsgLy8gYm9yZGVyIGZvciBoaWdobGlnaHRcblxuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBBbm5vdGF0aW9uIFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4kZ3NUZXh0Q29sb3JBTjogdmFyKC0tZ3NUZXh0Q29sb3JBTik7IC8vIFRleHQgY29sb3IgZm9yIGhpZ2hsaWdodFxuJGdzQmFja2dyb3VuZEFOOiB2YXIoLS1nc0JhY2tncm91bmRBTik7IC8vIGJhY2tncm91bmQgZm9yIGhpZ2hsaWdodFxuJGdzQm9yZGVyQU46IHZhcigtLWdzQm9yZGVyQU4pOyAvLyBib3JkZXIgZm9yIGhpZ2hsaWdodFxuXG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIFZhcmlhdGlvbiBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuJGdzVGV4dENvbG9yVkE6IHZhcigtLWdzVGV4dENvbG9yVkEpOyAvLyBUZXh0IGNvbG9yIGZvciBoaWdobGlnaHRcbiRnc0JhY2tncm91bmRWQTogdmFyKC0tZ3NCYWNrZ3JvdW5kVkEpOyAvLyBiYWNrZ3JvdW5kIGZvciBoaWdobGlnaHRcbiRnc0JvcmRlclZBOiB2YXIoLS1nc0JvcmRlclZBKTsgLy8gYm9yZGVyIGZvciBoaWdobGlnaHRcblxuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBQbHkgVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiRnc1RleHRDb2xvclBDOiB2YXIoLS1nc1RleHRDb2xvclBDKTsgLy8gVGV4dCBjb2xvciBmb3IgZ2FtZSBzY29yZSBwbHlcbiRnc0JhY2tncm91bmRQQzogdmFyKC0tZ3NCYWNrZ3JvdW5kUEMpOyAvLyBiYWNrZ3JvdW5kIGZvciBnYW1lIHNjb3JlIHBseVxuJGdzQm9yZGVyUEM6IHZhcigtLWdzQm9yZGVyUEMpOyAvLyBib3JkZXIgZm9yIGdhbWUgc2NvcmUgcGx5XG5cbi8qKioqKioqKioqKioqKioqKioqKiBDb250cm9sIENvbG9ycyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4kY3NCYWNrZ3JvdW5kOiB2YXIoLS1jc0JhY2tncm91bmQpOyAvLyBiYWNrZ3JvdW5kIGZvciBjb250cm9sc1xuJGNzQ29sb3I6IHZhcigtLWNzQ29sb3IpOyAvLyBjb250cm9scyBjb2xvciAoZm9yZWdyb3VuZClcblxuLyoqKioqKioqKioqKioqKioqKioqIEJvYXJkIENvbG9ycyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4kYm9hcmRCR0Rhcms6IHZhcigtLWJvYXJkQkdEYXJrKTsgLy8gYm9hcmQgZGFyayB0aWxlXG4kYm9hcmRCR0xpZ2h0OiB2YXIoLS1ib2FyZEJHTGlnaHQpOyAvLyBib2FyZCBsaWdodCB0aWxlXG4kYm9hcmRMYWJlbExpZ2h0OiB2YXIoLS1ib2FyZExhYmVsTGlnaHQpOyAvLyBib2FyZCBsaWdodCBsYWJlbFxuJGJvYXJkTGFiZWxEYXJrOiB2YXIoLS1ib2FyZExhYmVsRGFyayk7IC8vIGJvYXJkIGRhcmsgbGFiZWxcblxuXG5cbi8qKioqKioqKioqKioqKioqKioqKiBGb250IFNpemVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiRnc0ZvbnRTaXplOiB2YXIoLS1nc0ZvbnRTaXplKTsgLy8gYm9hcmQgZGFyayB0aWxlXG4kZ3NGb250U2l6ZUFOOiB2YXIoLS1nc0ZvbnRTaXplQU4pOyAvLyBib2FyZCBsaWdodCB0aWxlXG4kZ3NGb250U2l6ZUhHOiB2YXIoLS1nc0ZvbnRTaXplSEcpOyAvLyBib2FyZCBsaWdodCBsYWJlbFxuJGdzRm9udFNpemVWQTogdmFyKC0tZ3NGb250U2l6ZVZBKTsgLy8gYm9hcmQgZGFyayBsYWJlbFxuJGdzRm9udFNpemVQQzogdmFyKC0tZ3NGb250U2l6ZVBDKTsgLy8gYm9hcmQgZGFyayBsYWJlbFxuJGhkckRhdGFGb250U2l6ZTogdmFyKC0taGRyRGF0YUZvbnRTaXplKTsgLy8gc2l6ZSBvZiBwbGF5ZXIgc2hvd2Nhc2UgZGF0YVxuJGhkck5hbWVGb250U2l6ZTogdmFyKC0taGRyTmFtZUZvbnRTaXplKTsgLy8gc2l6ZSBvZiBwbGF5ZXIgc2hvd2Nhc2UgTmFtZVxuJGhkclRpdGxlRm9udFNpemU6IHZhcigtLWhkclRpdGxlRm9udFNpemUpOyAvLyBzaXplIG9mIHBsYXllciBzaG93Y2FzZSBkYXRhXG4kaGRyVmFyaWFudEZvbnRTaXplOiB2YXIoLS1oZHJWYXJpYW50Rm9udFNpemUpOyAvLyBzaXplIG9mIHBsYXllciBzaG93Y2FzZSBOYW1lXG4kaGRyTWF0Y2hEYXRhRm9udFNpemU6IHZhcigtLWhkck1hdGNoRGF0YUZvbnRTaXplKTsgLy8gc2l6ZSBvZiBwbGF5ZXIgc2hvd2Nhc2UgTmFtZVxuJGhkck9wZW5pbmdGb250U2l6ZTogdmFyKC0taGRyTWF0Y2hEYXRhRm9udFNpemUpOyAvLyBzaXplIG9mIHBsYXllciBzaG93Y2FzZSBOYW1lXG4kaGRyUmVzdWx0Rm9udFNpemU6IHZhcigtLWhkclJlc3VsdEZvbnRTaXplKTsgLy8gc2l6ZSBvZiBwbGF5ZXIgc2hvd2Nhc2UgTmFtZVxuJGhkclJvdW5kRm9udFNpemU6IHZhcigtLWhkclJvdW5kRm9udFNpemUpOyAvLyBzaXplIG9mIHBsYXllciBzaG93Y2FzZSBOYW1lXG5cbi8vIEdlbmVyYWwgc3R1ZmZcbiR0ZXh0LWNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcbiRiZy1vdXRlcjogdmFyKC0tYmctb3V0ZXIpO1xuJGJnLWlubmVyOiB2YXIoLS1iZy1pbm5lcik7XG5cbiRiZy1jb2xvcjogI2YyZjNmNztcbiRmZy1jb2xvcjogIzM4M2E0MTtcblxuJGdsb3ctc2hhZG93OiAwIDAgMC41ZW0gdHJhbnNwYXJlbnRpemUoJGJsdWUsIDAuMyk7XG46cm9vdCB7XG4gIC0tYmctY29sb3I6ICN7JGJnLWNvbG9yfTtcbiAgLS1mZy1jb2xvcjogI3skZmctY29sb3J9O1xuXG4gIC0tcmVkOiAjeyRyZWR9O1xuICAtLWdyZWVuOiAjeyRncmVlbn07XG4gIC0tYmx1ZTogI3skYmx1ZX07XG4gIC0tZGFyay1ibHVlOiAjeyRkYXJrLWJsdWV9O1xuICAtLW1hcm9vbjogI3skbWFyb29ufTtcbiAgLS1wdXJwbGU6ICN7JHB1cnBsZX07XG59XG4iLCJAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ0NhdmVhdCc7XG4gICAgc3JjOiB1cmwoJy4uLy4uL2ZvbnRzL0JvbGQvQ2F2ZWF0LUJvbGQud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXG4gICAgICAgIHVybCgnLi4vLi4vZm9udHMvQm9sZC9DYXZlYXQtQm9sZC53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtZGlzcGxheTogc3dhcDtcbn1cblxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdDYXZlYXQnO1xuICAgIHNyYzogdXJsKCcuLi8uLi9mb250cy9SZWd1bGFyL0NhdmVhdC1SZWd1bGFyLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxuICAgICAgICB1cmwoJy4uLy4uL2ZvbnRzL1JlZ3VsYXIvQ2F2ZWF0LVJlZ3VsYXIud29mZicpIGZvcm1hdCgnd29mZicpO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtZGlzcGxheTogc3dhcDtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnRmlndXJpbmVTeW1ib2xUMSc7XG4gIHNyYzogdXJsKCcuLi8uLi9mb250cy8zcmQgUGFydHkvQ2hlc3NWYXJpYW50cy9GaWd1cmluZVN5bWJvbFQxQm9sZC53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcbiAgICAgIHVybCgnLi4vLi4vZm9udHMvM3JkIFBhcnR5L0NoZXNzVmFyaWFudHMvRmlndXJpbmVTeW1ib2xUMUJvbGQud29mZicpIGZvcm1hdCgnd29mZicpO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ0ZpZ3VyaW5lU3ltYm9sVDEnO1xuICBzcmM6IHVybCgnLi4vLi4vZm9udHMvM3JkIFBhcnR5L0NoZXNzVmFyaWFudHMvRmlndXJpbmVTeW1ib2xUMS53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcbiAgICAgIHVybCgnLi4vLi4vZm9udHMvM3JkIFBhcnR5L0NoZXNzVmFyaWFudHMvRmlndXJpbmVTeW1ib2xUMS53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdTYW5jdHVhcnlQbGF5Z3JvdW5kJztcbiAgc3JjOiB1cmwoJy4uLy4uL2ZvbnRzLzNyZCBQYXJ0eS9TYW5jdHVhcnlQbGF5Z3JvdW5kLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxuICAgICAgdXJsKCcuLi8uLi9mb250cy8zcmQgUGFydHkvU2FuY3R1YXJ5UGxheWdyb3VuZC53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xufVxuXG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ0FtaXRhJztcbiAgc3JjOiB1cmwoJy4uLy4uL2ZvbnRzLzNyZCBQYXJ0eS9BbWl0YS9BbWl0YS1SZWd1bGFyLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxuICAgICAgdXJsKCcuLi8uLi9mb250cy8zcmQgUGFydHkvQW1pdGEvQW1pdGEtUmVndWxhci53b2ZmMicpIGZvcm1hdCgnd29mZicpO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbn0iLCIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiQ2F2ZWF0XCI7XG4gIHNyYzogdXJsKFwiLi4vLi4vZm9udHMvQm9sZC9DYXZlYXQtQm9sZC53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKSwgdXJsKFwiLi4vLi4vZm9udHMvQm9sZC9DYXZlYXQtQm9sZC53b2ZmXCIpIGZvcm1hdChcIndvZmZcIik7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJDYXZlYXRcIjtcbiAgc3JjOiB1cmwoXCIuLi8uLi9mb250cy9SZWd1bGFyL0NhdmVhdC1SZWd1bGFyLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpLCB1cmwoXCIuLi8uLi9mb250cy9SZWd1bGFyL0NhdmVhdC1SZWd1bGFyLndvZmZcIikgZm9ybWF0KFwid29mZlwiKTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiRmlndXJpbmVTeW1ib2xUMVwiO1xuICBzcmM6IHVybChcIi4uLy4uL2ZvbnRzLzNyZCBQYXJ0eS9DaGVzc1ZhcmlhbnRzL0ZpZ3VyaW5lU3ltYm9sVDFCb2xkLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpLCB1cmwoXCIuLi8uLi9mb250cy8zcmQgUGFydHkvQ2hlc3NWYXJpYW50cy9GaWd1cmluZVN5bWJvbFQxQm9sZC53b2ZmXCIpIGZvcm1hdChcIndvZmZcIik7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJGaWd1cmluZVN5bWJvbFQxXCI7XG4gIHNyYzogdXJsKFwiLi4vLi4vZm9udHMvM3JkIFBhcnR5L0NoZXNzVmFyaWFudHMvRmlndXJpbmVTeW1ib2xUMS53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKSwgdXJsKFwiLi4vLi4vZm9udHMvM3JkIFBhcnR5L0NoZXNzVmFyaWFudHMvRmlndXJpbmVTeW1ib2xUMS53b2ZmXCIpIGZvcm1hdChcIndvZmZcIik7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlNhbmN0dWFyeVBsYXlncm91bmRcIjtcbiAgc3JjOiB1cmwoXCIuLi8uLi9mb250cy8zcmQgUGFydHkvU2FuY3R1YXJ5UGxheWdyb3VuZC53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKSwgdXJsKFwiLi4vLi4vZm9udHMvM3JkIFBhcnR5L1NhbmN0dWFyeVBsYXlncm91bmQud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJBbWl0YVwiO1xuICBzcmM6IHVybChcIi4uLy4uL2ZvbnRzLzNyZCBQYXJ0eS9BbWl0YS9BbWl0YS1SZWd1bGFyLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpLCB1cmwoXCIuLi8uLi9mb250cy8zcmQgUGFydHkvQW1pdGEvQW1pdGEtUmVndWxhci53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmXCIpO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbn1cbi8qKioqKioqKioqKioqKioqKioqIE1lbnUgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKioqKioqIE1lbnUgQ29udHJvbHMgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBDb250YWluZXIgVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgQ29udGFpbmVyIFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIENvbnRhaW5lciBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBIaWdobGlnaHQgVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgQW5ub3RhdGlvbiBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBWYXJpYXRpb24gVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgUGx5IFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKiogQ29udHJvbCBDb2xvcnMgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKioqIEJvYXJkIENvbG9ycyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKiogRm9udCBTaXplcyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG46cm9vdCB7XG4gIC0tYmctY29sb3I6ICNmMmYzZjc7XG4gIC0tZmctY29sb3I6ICMzODNhNDE7XG4gIC0tcmVkOiAjZTQzMDMwO1xuICAtLWdyZWVuOiAjMTlhMTg3O1xuICAtLWJsdWU6ICMzNjdiZjA7XG4gIC0tZGFyay1ibHVlOiAjMjY1YWIxO1xuICAtLW1hcm9vbjogI2I4MTc0YztcbiAgLS1wdXJwbGU6ICM4YzQyYWI7XG59XG5cbi5jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uc2JzLXBvcnRyYWl0IHtcbiAgb3JkZXI6IDI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLmhlYWRlciwgLmhlYWRlcjQsIC5oZWFkZXIzLCAuaGVhZGVyMiwgLmhlYWRlcjEge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG9yZGVyOiAwO1xufVxuXG4uaGVhZGVyMSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAwcHg7XG4gIGhlaWdodDogYXV0bztcbiAgcmlnaHQ6IDBweDtcbiAgbGVmdDogMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXgtaGVpZ2h0OiBjbGVhcjtcbn1cblxuLmhlYWRlcjIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMHB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIHJpZ2h0OiAwcHg7XG4gIGxlZnQ6IDBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWF4LWhlaWdodDogY2xlYXI7XG59XG5cbi5ib2FyZCwgLmJvYXJkNCwgLmJvYXJkMywgLmJvYXJkMiwgLmJvYXJkMSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgb3JkZXI6IDE7XG59XG5cbi5ib2FyZDEge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG9yZGVyOiAwO1xuICBmbGV4LWdyb3c6IDE7XG59XG5cbi5ib2FyZDIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG9yZGVyOiAwO1xuICBmbGV4LWdyb3c6IDE7XG59XG5cbi5zY29yZSwgLnNjb3JlMiwgLnNjb3JlMSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnNjb3JlMSB7XG4gIGZsZXgtZ3JvdzogMTtcbiAgb3JkZXI6IDI7XG4gIG92ZXJmbG93LXk6IHZpc2libGU7XG59XG5cbi5zY29yZTIge1xuICBvcmRlcjogMTtcbiAgZmxleC1ncm93OiAxO1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuXG4uY29udHJvbHMsIC5jb250cm9sczQsIC5jb250cm9sczMsIC5jb250cm9sczIsIC5jb250cm9sczEge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogOTlweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGxlZnQ6IDBweDtcbiAgcmlnaHQ6IDBweDtcbn1cblxuLmNvbnRyb2xzMSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3JkZXI6IDE7XG4gIGZsZXgtZ3JvdzogMjtcbn1cblxuLmNvbnRyb2xzMiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3JkZXI6IDI7XG4gIGZsZXgtZ3JvdzogMjtcbn1cblxuLmNvbnRyb2xzMyB7XG4gIGxlZnQ6IDBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jb250cm9sczQge1xuICBsZWZ0OiAwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uc3RhdHVzMSB7XG4gIG9yZGVyOiAzO1xufVxuXG4uc3RhdHVzMiB7XG4gIG9yZGVyOiAyO1xufVxuXG4uYm90dG9tLXN0YWdlIHtcbiAgb3JkZXI6IDEyO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Aria, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'aria',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: _services_aria_service__WEBPACK_IMPORTED_MODULE_7__["AriaService"] }, { type: _services_themes_service__WEBPACK_IMPORTED_MODULE_8__["ThemeService"] }, { type: _services_layout_service__WEBPACK_IMPORTED_MODULE_9__["LayoutService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"] }]; }, { gameScoreComponent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_aria_score_aria_score_component__WEBPACK_IMPORTED_MODULE_4__["AriaScore"]]
        }], canvasBoardComponent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_canvas_chessboard_canvas_chessboard_component__WEBPACK_IMPORTED_MODULE_3__["CanvasChessBoard"]]
        }], controlsComponent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_aria_controls_aria_controls_component__WEBPACK_IMPORTED_MODULE_5__["AriaControls"]]
        }], headerComponent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_aria_header_aria_header_component__WEBPACK_IMPORTED_MODULE_1__["AriaHeader"]]
        }], statusComponent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_aria_status_aria_status_component__WEBPACK_IMPORTED_MODULE_2__["AriaStatus"]]
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
/* harmony import */ var _aria_header_aria_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./aria-header/aria-header.component */ "./src/app/aria-header/aria-header.component.ts");
/* harmony import */ var _aria_score_aria_score_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./aria-score/aria-score.component */ "./src/app/aria-score/aria-score.component.ts");
/* harmony import */ var _aria_controls_aria_controls_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./aria-controls/aria-controls.component */ "./src/app/aria-controls/aria-controls.component.ts");
/* harmony import */ var _aria_status_aria_status_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./aria-status/aria-status.component */ "./src/app/aria-status/aria-status.component.ts");
/* harmony import */ var _canvas_chessboard_canvas_chessboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./canvas-chessboard/canvas-chessboard.component */ "./src/app/canvas-chessboard/canvas-chessboard.component.ts");
/* harmony import */ var _aria_header_player_showcase_player_showcase_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./aria-header/player-showcase/player-showcase.component */ "./src/app/aria-header/player-showcase/player-showcase.component.ts");
/* harmony import */ var _aria_score_score_table_score_table_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./aria-score/score-table/score-table.component */ "./src/app/aria-score/score-table/score-table.component.ts");
/* harmony import */ var _aria_score_score_table_table_item_table_item_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./aria-score/score-table/table-item/table-item.component */ "./src/app/aria-score/score-table/table-item/table-item.component.ts");
/* harmony import */ var _aria_score_score_table_table_column_table_column_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./aria-score/score-table/table-column/table-column.component */ "./src/app/aria-score/score-table/table-column/table-column.component.ts");
/* harmony import */ var _aria_score_score_flow_score_flow_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./aria-score/score-flow/score-flow.component */ "./src/app/aria-score/score-flow/score-flow.component.ts");
/* harmony import */ var _aria_score_score_flow_flow_item_flow_item_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./aria-score/score-flow/flow-item/flow-item.component */ "./src/app/aria-score/score-flow/flow-item/flow-item.component.ts");
/* harmony import */ var _services_aria_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/aria.service */ "./src/app/services/aria.service.ts");
/* harmony import */ var _services_layout_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/layout.service */ "./src/app/services/layout.service.ts");
/* harmony import */ var _services_themes_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/themes.service */ "./src/app/services/themes.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["Aria"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_services_layout_service__WEBPACK_IMPORTED_MODULE_16__["LayoutService"], _services_themes_service__WEBPACK_IMPORTED_MODULE_17__["ThemeService"], _services_aria_service__WEBPACK_IMPORTED_MODULE_15__["AriaService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["Aria"],
        _aria_header_aria_header_component__WEBPACK_IMPORTED_MODULE_4__["AriaHeader"],
        _aria_score_aria_score_component__WEBPACK_IMPORTED_MODULE_5__["AriaScore"],
        _aria_controls_aria_controls_component__WEBPACK_IMPORTED_MODULE_6__["AriaControls"],
        _aria_status_aria_status_component__WEBPACK_IMPORTED_MODULE_7__["AriaStatus"],
        _canvas_chessboard_canvas_chessboard_component__WEBPACK_IMPORTED_MODULE_8__["CanvasChessBoard"],
        _aria_header_player_showcase_player_showcase_component__WEBPACK_IMPORTED_MODULE_9__["PlayerShowcase"],
        _aria_score_score_table_score_table_component__WEBPACK_IMPORTED_MODULE_10__["ScoreTable"],
        _aria_score_score_table_table_column_table_column_component__WEBPACK_IMPORTED_MODULE_12__["TableColumn"],
        _aria_score_score_table_table_item_table_item_component__WEBPACK_IMPORTED_MODULE_11__["TableItem"],
        _aria_score_score_flow_score_flow_component__WEBPACK_IMPORTED_MODULE_13__["ScoreFlow"],
        _aria_score_score_flow_flow_item_flow_item_component__WEBPACK_IMPORTED_MODULE_14__["FlowItem"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["Aria"],
                    _aria_header_aria_header_component__WEBPACK_IMPORTED_MODULE_4__["AriaHeader"],
                    _aria_score_aria_score_component__WEBPACK_IMPORTED_MODULE_5__["AriaScore"],
                    _aria_controls_aria_controls_component__WEBPACK_IMPORTED_MODULE_6__["AriaControls"],
                    _aria_status_aria_status_component__WEBPACK_IMPORTED_MODULE_7__["AriaStatus"],
                    _canvas_chessboard_canvas_chessboard_component__WEBPACK_IMPORTED_MODULE_8__["CanvasChessBoard"],
                    _aria_header_player_showcase_player_showcase_component__WEBPACK_IMPORTED_MODULE_9__["PlayerShowcase"],
                    _aria_score_score_table_score_table_component__WEBPACK_IMPORTED_MODULE_10__["ScoreTable"],
                    _aria_score_score_table_table_column_table_column_component__WEBPACK_IMPORTED_MODULE_12__["TableColumn"],
                    _aria_score_score_table_table_item_table_item_component__WEBPACK_IMPORTED_MODULE_11__["TableItem"],
                    _aria_score_score_flow_score_flow_component__WEBPACK_IMPORTED_MODULE_13__["ScoreFlow"],
                    _aria_score_score_flow_flow_item_flow_item_component__WEBPACK_IMPORTED_MODULE_14__["FlowItem"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
                ],
                providers: [_services_layout_service__WEBPACK_IMPORTED_MODULE_16__["LayoutService"], _services_themes_service__WEBPACK_IMPORTED_MODULE_17__["ThemeService"], _services_aria_service__WEBPACK_IMPORTED_MODULE_15__["AriaService"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["Aria"]]
            }]
    }], null, null); })();
_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetComponentScope"](_app_component__WEBPACK_IMPORTED_MODULE_3__["Aria"], [_angular_common__WEBPACK_IMPORTED_MODULE_18__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["NgComponentOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["NgPlural"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["NgPluralCase"], _angular_router__WEBPACK_IMPORTED_MODULE_19__["RouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_19__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_19__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_19__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_19__["ɵangular_packages_router_router_l"], _app_component__WEBPACK_IMPORTED_MODULE_3__["Aria"],
    _aria_header_aria_header_component__WEBPACK_IMPORTED_MODULE_4__["AriaHeader"],
    _aria_score_aria_score_component__WEBPACK_IMPORTED_MODULE_5__["AriaScore"],
    _aria_controls_aria_controls_component__WEBPACK_IMPORTED_MODULE_6__["AriaControls"],
    _aria_status_aria_status_component__WEBPACK_IMPORTED_MODULE_7__["AriaStatus"],
    _canvas_chessboard_canvas_chessboard_component__WEBPACK_IMPORTED_MODULE_8__["CanvasChessBoard"],
    _aria_header_player_showcase_player_showcase_component__WEBPACK_IMPORTED_MODULE_9__["PlayerShowcase"],
    _aria_score_score_table_score_table_component__WEBPACK_IMPORTED_MODULE_10__["ScoreTable"],
    _aria_score_score_table_table_column_table_column_component__WEBPACK_IMPORTED_MODULE_12__["TableColumn"],
    _aria_score_score_table_table_item_table_item_component__WEBPACK_IMPORTED_MODULE_11__["TableItem"],
    _aria_score_score_flow_score_flow_component__WEBPACK_IMPORTED_MODULE_13__["ScoreFlow"],
    _aria_score_score_flow_flow_item_flow_item_component__WEBPACK_IMPORTED_MODULE_14__["FlowItem"]], [_angular_common__WEBPACK_IMPORTED_MODULE_18__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["LowerCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["JsonPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["SlicePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["PercentPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["CurrencyPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["I18nPluralPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["I18nSelectPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["KeyValuePipe"]]);
_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetComponentScope"](_aria_header_aria_header_component__WEBPACK_IMPORTED_MODULE_4__["AriaHeader"], [_angular_common__WEBPACK_IMPORTED_MODULE_18__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["NgComponentOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["NgPlural"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["NgPluralCase"], _angular_router__WEBPACK_IMPORTED_MODULE_19__["RouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_19__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_19__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_19__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_19__["ɵangular_packages_router_router_l"], _app_component__WEBPACK_IMPORTED_MODULE_3__["Aria"],
    _aria_header_aria_header_component__WEBPACK_IMPORTED_MODULE_4__["AriaHeader"],
    _aria_score_aria_score_component__WEBPACK_IMPORTED_MODULE_5__["AriaScore"],
    _aria_controls_aria_controls_component__WEBPACK_IMPORTED_MODULE_6__["AriaControls"],
    _aria_status_aria_status_component__WEBPACK_IMPORTED_MODULE_7__["AriaStatus"],
    _canvas_chessboard_canvas_chessboard_component__WEBPACK_IMPORTED_MODULE_8__["CanvasChessBoard"],
    _aria_header_player_showcase_player_showcase_component__WEBPACK_IMPORTED_MODULE_9__["PlayerShowcase"],
    _aria_score_score_table_score_table_component__WEBPACK_IMPORTED_MODULE_10__["ScoreTable"],
    _aria_score_score_table_table_column_table_column_component__WEBPACK_IMPORTED_MODULE_12__["TableColumn"],
    _aria_score_score_table_table_item_table_item_component__WEBPACK_IMPORTED_MODULE_11__["TableItem"],
    _aria_score_score_flow_score_flow_component__WEBPACK_IMPORTED_MODULE_13__["ScoreFlow"],
    _aria_score_score_flow_flow_item_flow_item_component__WEBPACK_IMPORTED_MODULE_14__["FlowItem"]], [_angular_common__WEBPACK_IMPORTED_MODULE_18__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["LowerCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["JsonPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["SlicePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["PercentPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["CurrencyPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["I18nPluralPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["I18nSelectPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["KeyValuePipe"]]);
_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetComponentScope"](_aria_score_aria_score_component__WEBPACK_IMPORTED_MODULE_5__["AriaScore"], [_angular_common__WEBPACK_IMPORTED_MODULE_18__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["NgComponentOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["NgPlural"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["NgPluralCase"], _angular_router__WEBPACK_IMPORTED_MODULE_19__["RouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_19__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_19__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_19__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_19__["ɵangular_packages_router_router_l"], _app_component__WEBPACK_IMPORTED_MODULE_3__["Aria"],
    _aria_header_aria_header_component__WEBPACK_IMPORTED_MODULE_4__["AriaHeader"],
    _aria_score_aria_score_component__WEBPACK_IMPORTED_MODULE_5__["AriaScore"],
    _aria_controls_aria_controls_component__WEBPACK_IMPORTED_MODULE_6__["AriaControls"],
    _aria_status_aria_status_component__WEBPACK_IMPORTED_MODULE_7__["AriaStatus"],
    _canvas_chessboard_canvas_chessboard_component__WEBPACK_IMPORTED_MODULE_8__["CanvasChessBoard"],
    _aria_header_player_showcase_player_showcase_component__WEBPACK_IMPORTED_MODULE_9__["PlayerShowcase"],
    _aria_score_score_table_score_table_component__WEBPACK_IMPORTED_MODULE_10__["ScoreTable"],
    _aria_score_score_table_table_column_table_column_component__WEBPACK_IMPORTED_MODULE_12__["TableColumn"],
    _aria_score_score_table_table_item_table_item_component__WEBPACK_IMPORTED_MODULE_11__["TableItem"],
    _aria_score_score_flow_score_flow_component__WEBPACK_IMPORTED_MODULE_13__["ScoreFlow"],
    _aria_score_score_flow_flow_item_flow_item_component__WEBPACK_IMPORTED_MODULE_14__["FlowItem"]], [_angular_common__WEBPACK_IMPORTED_MODULE_18__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["LowerCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["JsonPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["SlicePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["PercentPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["CurrencyPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["I18nPluralPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["I18nSelectPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["KeyValuePipe"]]);
_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetComponentScope"](_aria_score_score_table_score_table_component__WEBPACK_IMPORTED_MODULE_10__["ScoreTable"], [_angular_common__WEBPACK_IMPORTED_MODULE_18__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["NgComponentOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["NgPlural"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["NgPluralCase"], _angular_router__WEBPACK_IMPORTED_MODULE_19__["RouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_19__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_19__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_19__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_19__["ɵangular_packages_router_router_l"], _app_component__WEBPACK_IMPORTED_MODULE_3__["Aria"],
    _aria_header_aria_header_component__WEBPACK_IMPORTED_MODULE_4__["AriaHeader"],
    _aria_score_aria_score_component__WEBPACK_IMPORTED_MODULE_5__["AriaScore"],
    _aria_controls_aria_controls_component__WEBPACK_IMPORTED_MODULE_6__["AriaControls"],
    _aria_status_aria_status_component__WEBPACK_IMPORTED_MODULE_7__["AriaStatus"],
    _canvas_chessboard_canvas_chessboard_component__WEBPACK_IMPORTED_MODULE_8__["CanvasChessBoard"],
    _aria_header_player_showcase_player_showcase_component__WEBPACK_IMPORTED_MODULE_9__["PlayerShowcase"],
    _aria_score_score_table_score_table_component__WEBPACK_IMPORTED_MODULE_10__["ScoreTable"],
    _aria_score_score_table_table_column_table_column_component__WEBPACK_IMPORTED_MODULE_12__["TableColumn"],
    _aria_score_score_table_table_item_table_item_component__WEBPACK_IMPORTED_MODULE_11__["TableItem"],
    _aria_score_score_flow_score_flow_component__WEBPACK_IMPORTED_MODULE_13__["ScoreFlow"],
    _aria_score_score_flow_flow_item_flow_item_component__WEBPACK_IMPORTED_MODULE_14__["FlowItem"]], [_angular_common__WEBPACK_IMPORTED_MODULE_18__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["LowerCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["JsonPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["SlicePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["PercentPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["CurrencyPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["I18nPluralPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["I18nSelectPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["KeyValuePipe"]]);
_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetComponentScope"](_aria_score_score_table_table_column_table_column_component__WEBPACK_IMPORTED_MODULE_12__["TableColumn"], [_angular_common__WEBPACK_IMPORTED_MODULE_18__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["NgComponentOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["NgPlural"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["NgPluralCase"], _angular_router__WEBPACK_IMPORTED_MODULE_19__["RouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_19__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_19__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_19__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_19__["ɵangular_packages_router_router_l"], _app_component__WEBPACK_IMPORTED_MODULE_3__["Aria"],
    _aria_header_aria_header_component__WEBPACK_IMPORTED_MODULE_4__["AriaHeader"],
    _aria_score_aria_score_component__WEBPACK_IMPORTED_MODULE_5__["AriaScore"],
    _aria_controls_aria_controls_component__WEBPACK_IMPORTED_MODULE_6__["AriaControls"],
    _aria_status_aria_status_component__WEBPACK_IMPORTED_MODULE_7__["AriaStatus"],
    _canvas_chessboard_canvas_chessboard_component__WEBPACK_IMPORTED_MODULE_8__["CanvasChessBoard"],
    _aria_header_player_showcase_player_showcase_component__WEBPACK_IMPORTED_MODULE_9__["PlayerShowcase"],
    _aria_score_score_table_score_table_component__WEBPACK_IMPORTED_MODULE_10__["ScoreTable"],
    _aria_score_score_table_table_column_table_column_component__WEBPACK_IMPORTED_MODULE_12__["TableColumn"],
    _aria_score_score_table_table_item_table_item_component__WEBPACK_IMPORTED_MODULE_11__["TableItem"],
    _aria_score_score_flow_score_flow_component__WEBPACK_IMPORTED_MODULE_13__["ScoreFlow"],
    _aria_score_score_flow_flow_item_flow_item_component__WEBPACK_IMPORTED_MODULE_14__["FlowItem"]], [_angular_common__WEBPACK_IMPORTED_MODULE_18__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["LowerCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["JsonPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["SlicePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["PercentPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["CurrencyPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["I18nPluralPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["I18nSelectPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["KeyValuePipe"]]);
_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetComponentScope"](_aria_score_score_flow_score_flow_component__WEBPACK_IMPORTED_MODULE_13__["ScoreFlow"], [_angular_common__WEBPACK_IMPORTED_MODULE_18__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["NgComponentOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["NgPlural"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["NgPluralCase"], _angular_router__WEBPACK_IMPORTED_MODULE_19__["RouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_19__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_19__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_19__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_19__["ɵangular_packages_router_router_l"], _app_component__WEBPACK_IMPORTED_MODULE_3__["Aria"],
    _aria_header_aria_header_component__WEBPACK_IMPORTED_MODULE_4__["AriaHeader"],
    _aria_score_aria_score_component__WEBPACK_IMPORTED_MODULE_5__["AriaScore"],
    _aria_controls_aria_controls_component__WEBPACK_IMPORTED_MODULE_6__["AriaControls"],
    _aria_status_aria_status_component__WEBPACK_IMPORTED_MODULE_7__["AriaStatus"],
    _canvas_chessboard_canvas_chessboard_component__WEBPACK_IMPORTED_MODULE_8__["CanvasChessBoard"],
    _aria_header_player_showcase_player_showcase_component__WEBPACK_IMPORTED_MODULE_9__["PlayerShowcase"],
    _aria_score_score_table_score_table_component__WEBPACK_IMPORTED_MODULE_10__["ScoreTable"],
    _aria_score_score_table_table_column_table_column_component__WEBPACK_IMPORTED_MODULE_12__["TableColumn"],
    _aria_score_score_table_table_item_table_item_component__WEBPACK_IMPORTED_MODULE_11__["TableItem"],
    _aria_score_score_flow_score_flow_component__WEBPACK_IMPORTED_MODULE_13__["ScoreFlow"],
    _aria_score_score_flow_flow_item_flow_item_component__WEBPACK_IMPORTED_MODULE_14__["FlowItem"]], [_angular_common__WEBPACK_IMPORTED_MODULE_18__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["LowerCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["JsonPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["SlicePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["PercentPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["CurrencyPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["I18nPluralPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["I18nSelectPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["KeyValuePipe"]]);


/***/ }),

/***/ "./src/app/aria-controls/aria-controls.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/aria-controls/aria-controls.component.ts ***!
  \**********************************************************/
/*! exports provided: AriaControls */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AriaControls", function() { return AriaControls; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_aria_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/aria.service */ "./src/app/services/aria.service.ts");
/* harmony import */ var _services_layout_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/layout.service */ "./src/app/services/layout.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






const _c0 = function (a0) { return { "visibility": a0 }; };
class AriaControls {
    constructor(aria, layout) {
        this.aria = aria;
        this.layout = layout;
        this.playing = false;
        this.timeLeft = 0.6;
        this.ScoreViewType = _services_aria_service__WEBPACK_IMPORTED_MODULE_1__["ScoreViewType"];
    }
    ngOnInit() {
    }
    resize(width, height) {
    }
    advance(event) {
        event.preventDefault();
        event.stopPropagation();
        this.aria.advance();
    }
    moveToStart(event) {
        event.preventDefault();
        event.stopPropagation();
        this.aria.moveToStart();
    }
    previous(event) {
        event.preventDefault();
        event.stopPropagation();
        this.aria.previous();
    }
    moveToEnd(event) {
        event.preventDefault();
        event.stopPropagation();
        this.aria.moveToEnd();
    }
    pauseIfAutoPlay() {
        if (this.playing) {
            this.aria.toggleAutoPlay();
            return true;
        }
        return false;
    }
    toggleAutoPlay() {
        this.aria.toggleAutoPlay();
    }
    setTimer(time) {
        this.timeLeft = time / 1000;
    }
}
AriaControls.ɵfac = function AriaControls_Factory(t) { return new (t || AriaControls)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_aria_service__WEBPACK_IMPORTED_MODULE_1__["AriaService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_layout_service__WEBPACK_IMPORTED_MODULE_2__["LayoutService"])); };
AriaControls.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AriaControls, selectors: [["aria-controls"]], decls: 44, vars: 13, consts: [[1, "action-container"], ["actContainerElement", ""], [1, "play", 3, "click"], ["playElement", ""], [1, "feather-play"], [0, "xlink", "href", "Aria/assets/images/feather-sprite.svg#pause", 3, "ngStyle"], [0, "xlink", "href", "Aria/assets/images/feather-sprite.svg#play", 3, "ngStyle"], [1, "timer"], [1, "view", 3, "click"], ["rotateElement", ""], [1, "feather"], [0, "xlink", "href", "Aria/assets/images/feather-sprite.svg#refresh-cw"], [1, "settings", 3, "click"], ["settingsElement", ""], [0, "xlink", "href", "Aria/assets/images/feather-sprite.svg#align-justify", 3, "ngStyle"], [0, "xlink", "href", "Aria/assets/images/feather-sprite.svg#align-left", 3, "ngStyle"], [1, "shrink", 3, "click"], ["shrinkElement", ""], [0, "xlink", "href", "Aria/assets/images/feather-sprite.svg#minus"], [1, "grow", 3, "click"], ["growElement", ""], [0, "xlink", "href", "Aria/assets/images/feather-sprite.svg#plus"], [1, "navigation-container"], ["navContainerElement", ""], [1, "button", "start", 3, "click"], ["homeElement", ""], [0, "xlink", "href", "Aria/assets/images/feather-sprite.svg#rewind"], [1, "button", "previous", 3, "click"], ["previousElement", ""], [0, "xlink", "href", "Aria/assets/images/feather-sprite.svg#chevron-left"], [1, "button", "next", 3, "click"], ["nextElement", ""], [0, "xlink", "href", "Aria/assets/images/feather-sprite.svg#chevron-right"], [1, "button", "end", 3, "click"], ["endElement", ""], [0, "xlink", "href", "Aria/assets/images/feather-sprite.svg#fast-forward"]], template: function AriaControls_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AriaControls_Template_div_click_2_listener() { return ctx.toggleAutoPlay(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "svg", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "use", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "use", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AriaControls_Template_div_click_9_listener() { return ctx.aria.rotateBoardOrientation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "svg", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "use", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AriaControls_Template_div_click_13_listener() { return ctx.aria.toggleScoreType(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "svg", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "use", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "use", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 16, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AriaControls_Template_div_click_18_listener() { return ctx.layout.shrink(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "svg", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "use", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 19, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AriaControls_Template_div_click_22_listener() { return ctx.layout.grow(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "svg", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "use", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 22, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AriaControls_Template_div_click_28_listener($event) { return ctx.moveToStart($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "svg", 10, 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "use", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AriaControls_Template_div_click_32_listener($event) { return ctx.previous($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "svg", 10, 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "use", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AriaControls_Template_div_click_36_listener($event) { return ctx.advance($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "svg", 10, 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "use", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AriaControls_Template_div_click_40_listener($event) { return ctx.moveToEnd($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "svg", 10, 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "use", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, ctx.playing ? "visible" : "hidden"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, !ctx.playing ? "visible" : "hidden"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.timeLeft);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, ctx.aria.scoreViewType.value === ctx.ScoreViewType.Flow ? "visible" : "hidden"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c0, ctx.aria.scoreViewType.value === ctx.ScoreViewType.Table ? "visible" : "hidden"));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgStyle"]], styles: ["@font-face {\n  font-family: \"Caveat\";\n  src: url('Caveat-Bold.woff2') format(\"woff2\"), url('Caveat-Bold.woff') format(\"woff\");\n  font-weight: bold;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"Caveat\";\n  src: url('Caveat-Regular.woff2') format(\"woff2\"), url('Caveat-Regular.woff') format(\"woff\");\n  font-weight: 600;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"FigurineSymbolT1\";\n  src: url('FigurineSymbolT1Bold.woff2') format(\"woff2\"), url('FigurineSymbolT1Bold.woff') format(\"woff\");\n  font-weight: bold;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"FigurineSymbolT1\";\n  src: url('FigurineSymbolT1.woff2') format(\"woff2\"), url('FigurineSymbolT1.woff') format(\"woff\");\n  font-weight: 600;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"SanctuaryPlayground\";\n  src: url('SanctuaryPlayground.woff2') format(\"woff2\"), url('SanctuaryPlayground.woff') format(\"woff\");\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"Amita\";\n  src: url('Amita-Regular.woff2') format(\"woff2\"), url('Amita-Regular.woff2') format(\"woff\");\n  font-style: normal;\n  font-display: swap;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n[_ngcontent-%COMP%]:root {\n  --bg-color: #f2f3f7;\n  --fg-color: #383a41;\n  --red: #e43030;\n  --green: #19a187;\n  --blue: #367bf0;\n  --dark-blue: #265ab1;\n  --maroon: #b8174c;\n  --purple: #8c42ab;\n}\n.noselect[_ngcontent-%COMP%], .timer[_ngcontent-%COMP%], .feather-play[_ngcontent-%COMP%], .feather[_ngcontent-%COMP%], .view[_ngcontent-%COMP%], .grow[_ngcontent-%COMP%], .settings[_ngcontent-%COMP%], .shrink[_ngcontent-%COMP%], .play[_ngcontent-%COMP%], .end[_ngcontent-%COMP%], .next[_ngcontent-%COMP%], .previous[_ngcontent-%COMP%], .start[_ngcontent-%COMP%], .navigation-container[_ngcontent-%COMP%], .action-container[_ngcontent-%COMP%], .button[_ngcontent-%COMP%] {\n  -webkit-user-select: none;\n  -o-user-select: none;\n  user-select: none;\n}\n.button[_ngcontent-%COMP%] {\n  position: absolute;\n  border: black 2px solid;\n  background: var(--csBackground);\n  text-align: center;\n  border-radius: 2px;\n}\n.action-container[_ngcontent-%COMP%] {\n  background: var(--csBackground);\n  border: none;\n  border-radius: 2px;\n  position: absolute;\n  height: 48px;\n  width: 100%;\n}\n.navigation-container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 42px;\n  width: 100%;\n  left: 0px;\n  height: 64px;\n}\n.start[_ngcontent-%COMP%] {\n  left: -1px;\n  width: 14%;\n  top: 6px;\n  bottom: 6px;\n}\n.previous[_ngcontent-%COMP%] {\n  left: calc(14% - 2px);\n  width: calc(22% - 2px);\n  top: 6px;\n  bottom: 6px;\n}\n.next[_ngcontent-%COMP%] {\n  width: calc(50% + 3px);\n  left: calc(36% - 5px);\n  top: 6px;\n  bottom: 6px;\n}\n.end[_ngcontent-%COMP%] {\n  width: calc(14% + 2px);\n  right: -1px;\n  top: 6px;\n  bottom: 6px;\n}\n.play[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 34%;\n  left: 4px;\n  top: 4px;\n  bottom: 4px;\n  border: var(--csColor) solid 2px;\n  border-radius: 6px;\n}\n.shrink[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 12%;\n  left: calc(49.5% + 12px);\n  top: 4px;\n  bottom: 4px;\n}\n.settings[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 12%;\n  right: 2px;\n  top: 4px;\n  bottom: 4px;\n}\n.grow[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 12%;\n  left: calc(63.5% + 16px);\n  top: 4px;\n  bottom: 4px;\n}\n.view[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 12%;\n  left: calc(36.5% + 8px);\n  top: 4px;\n  bottom: 4px;\n}\n.feather[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 4%;\n  width: 90%;\n  height: 90%;\n  top: 5%;\n  stroke: var(--csColor);\n  stroke-width: 2;\n  stroke-linecap: round;\n  stroke-linejoin: flat;\n  fill: none;\n}\n.feather-play[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 6px;\n  width: 32px;\n  height: 80%;\n  top: 10%;\n  stroke: var(--csColor);\n  stroke-width: 2;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n  fill: none;\n}\n.timer[_ngcontent-%COMP%] {\n  text-align: center;\n  color: var(--csColor);\n  line-height: 38px;\n  margin-left: 24px;\n  font-size: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMuc2NzcyIsInNyYy9hc3NldHMvc2Nzcy9tb2R1bGVzL19mb250cy5zY3NzIiwic3JjL2FwcC9hcmlhLWNvbnRyb2xzL2FyaWEtY29udHJvbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOEVBQUE7QUNBQTtFQUNJLHFCQUFBO0VBQ0EscUZBQUE7RUFFQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNDSjtBREVBO0VBQ0kscUJBQUE7RUFDQSwyRkFBQTtFQUVBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0RKO0FESUE7RUFDRSwrQkFBQTtFQUNBLHVHQUFBO0VBRUEsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDSEY7QURNQTtFQUNFLCtCQUFBO0VBQ0EsK0ZBQUE7RUFFQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNMRjtBRFFBO0VBQ0Usa0NBQUE7RUFDQSxxR0FBQTtFQUVBLGtCQUFBO0VBQ0Esa0JBQUE7QUNQRjtBRFdBO0VBQ0Usb0JBQUE7RUFDQSwwRkFBQTtFQUVBLGtCQUFBO0VBQ0Esa0JBQUE7QUNWRjtBRkRBLCtFQUFBO0FBR0Esa0ZBQUE7QUFLQSwrRUFBQTtBQVVBLCtFQUFBO0FBTUEsK0VBQUE7QUFNQSwrRUFBQTtBQU1BLGdGQUFBO0FBS0EsK0VBQUE7QUFLQSx5RUFBQTtBQUtBLHlFQUFBO0FBSUEsdUVBQUE7QUFRQSxxRUFBQTtBQXdCQTtFQUNFLG1CQUFBO0VBQ0EsbUJBQUE7RUFFQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FFekVGO0FBNURBO0VBQ0kseUJBQUE7RUFJQSxvQkFBQTtFQUNBLGlCQUFBO0FBK0RKO0FBNURBO0VBRUksa0JBQUE7RUFDQSx1QkFBQTtFQUNBLCtCRjRFVztFRTNFWCxrQkFBQTtFQUNBLGtCQUFBO0FBOERKO0FBM0RBO0VBRUksK0JGcUVXO0VFcEVYLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUE2REo7QUEzREE7RUFFSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7QUE2REo7QUExREE7RUFFSSxVQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0FBNERKO0FBMURBO0VBRUkscUJBQUE7RUFDQSxzQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0FBNERKO0FBMURBO0VBRUksc0JBQUE7RUFDQSxxQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0FBNERKO0FBMURBO0VBRUksc0JBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7QUE0REo7QUF6REE7RUFFSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxnQ0FBQTtFQUNBLGtCQUFBO0FBMkRKO0FBekRBO0VBRUksa0JBQUE7RUFDQSxVQUFBO0VBQ0Esd0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtBQTJESjtBQXpEQTtFQUVJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtBQTJESjtBQXhEQTtFQUVJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLHdCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7QUEwREo7QUF0REE7RUFFSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSx1QkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0FBd0RKO0FBckRBO0VBRUksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxPQUFBO0VBQ0Esc0JGNUJNO0VFNkJOLGVBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsVUFBQTtBQXVESjtBQXJEQTtFQUVJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUNBLHNCRnpDTTtFRTBDTixlQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLFVBQUE7QUF1REo7QUFyREE7RUFFSSxrQkFBQTtFQUNBLHFCRmxETTtFRW1ETixpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQXVESiIsImZpbGUiOiJzcmMvYXBwL2FyaWEtY29udHJvbHMvYXJpYS1jb250cm9scy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cblxuQGltcG9ydCBcIi4vYXNzZXRzL3Njc3MvbW9kdWxlcy9fZm9udHMuc2Nzc1wiO1xuJGdhbWVzY29yZS1mYW1pbHk6IFwiRmlndXJpbmVTeW1ib2xUMVwiO1xuJGdhbWVzY29yZS1oaWdobGlnaHQ6ICM1ODU4NThmZjtcbiRnYW1lc2NvcmUtZm9yZWdyb3VuZDogd2hpdGU7XG5cbiRyZWQ6ICNlNDMwMzA7XG4kZ3JlZW46ICMxOWExODc7XG4kbGlnaHQtYmx1ZTogIzAwZmZmZmZmO1xuJGJsdWU6ICMzNjdiZjA7XG4kZGFyay1ibHVlOiAjMjY1YWIxO1xuJG1hcm9vbjogI2I4MTc0YztcbiRwdXJwbGU6ICM4YzQyYWI7XG5cbi8vIE1haW4gQVJJQSBDb2xvciBFbGVtZW50IFZhcmlhYmxlc1xuJHRleHRDb2xvcjogdmFyKC0tdGV4dENvbG9yKTsgLy8gTWFpbiBUZXh0IENvbG9yXG4kdGV4dENvbG9yQXR0ZW50aW9uOiB2YXIoLS10ZXh0Q29sb3JBdHRlbnRpb24pOyAvLyBBdHRlbnRpb24gdGV4dFxuJHRleHRDb2xvclJlbW92ZTogdmFyKC0tdGV4dENvbG9yUmVtb3ZlKTsgLy8gUmVtb3ZlL0RlbGV0ZS9DbG9zZVxuJHRleHRDb2xvckFkZDogdmFyKC0tdGV4dENvbG9yQWRkKTsgLy8gQWRkL0NyZWF0ZS9PcGVuXG4kdGV4dENvbG9yQWN0aXZlOiB2YXIoLS10ZXh0Q29sb3JBY3RpdmUpOyAvLyBBZGQvQ3JlYXRlL09wZW5cbiRiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kKTsgLy8gTWFpbiBiYWNrZ3JvdW5kIENvbG9yXG4kYmdDb250YWluZXI6IHZhcigtLWJnQ29udGFpbmVyKTsgLy8gYmFja2dyb3VuZCBvZiBDb250YWluZXJzXG4kYmdNZW51OiB2YXIoLS1iZ01lbnUpOyAvLyBiYWNrZ3JvdW5kIG9mIE1lbnVzXG4kYmdJdGVtOiB2YXIoLS1iZ0l0ZW0pOyAvLyBiYWNrZ3JvdW5kIG9mIEl0ZW1zXG5cbi8vIENvbnRleHQgTWVudVxuJGJnQ29udGV4dDogdmFyKC0tYmdDb250ZXh0KTsgLy8gYmFja2dyb3VuZCBvZiBDb250ZXh0IE1lbnVcbiR0ZXh0Q29sb3JDb250ZXh0OiB2YXIoLS10ZXh0Q29sb3JDb250ZXh0KTsgLy8gdGV4dCBjb2xvciBDb250ZXh0IE1lbnVcbiRib3JkZXJDb250ZXh0OiB2YXIoLS1ib3JkZXJDb250ZXh0KTsgLy8gYm9yZGVyIENvbnRleHQgTWVudVxuJG92ZXJsYXlDb250ZXh0QmFja2dyb3VuZDogdmFyKFxuICAtLW92ZXJsYXlDb250ZXh0QmFja2dyb3VuZFxuKTsgLy8gQ29udGV4dCBNZW51IE92ZXJsYXkgYmFja2dyb3VuZCBtYWluXG4kb3ZlcmxheUNvbnRleHRCYWNrZ3JvdW5kR3JhZGllbnQ6IHZhcihcbiAgLS1vdmVybGF5Q29udGV4dEJhY2tncm91bmRHcmFkaWVudFxuKTsgLy8gQ29udGV4dCBNZW51IGJhY2tncm91bmQgZ3JhZGllbnRcblxuXG5cbi8qKioqKioqKioqKioqKioqKioqIE1lbnUgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4kbWVCYWNrZ3JvdW5kOiB2YXIoLS1tZUJhY2tncm91bmQpO1xuXG4vKioqKioqKioqKioqKioqKioqKioqKioqIE1lbnUgQ29udHJvbHMgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuJGNzRmlsbDogdmFyKC0tY3NGaWxsKTtcbiRjc0FjY2VudDogdmFyKC0tY3NBY2NlbnQpO1xuJGNzQWNjZW50MjogdmFyKC0tY3NBY2NlbnQyKTtcblxuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBDb250YWluZXIgVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiRnc1RleHRDb2xvcjogdmFyKC0tZ3NUZXh0Q29sb3IpOyAvLyBUZXh0IGNvbG9yIGZvciBnYW1lIHNjb3JlXG4kZ3NCYWNrZ3JvdW5kOiB2YXIoLS1nc0JhY2tncm91bmQpOyAvLyBiYWNrZ3JvdW5kIG9mIENvbnRhaW5lcnNcbiRnc0xpc3RCYWNrZ3JvdW5kOiB2YXIoLS1nc0xpc3RCYWNrZ3JvdW5kKTsgLy8gbGlzdCBiYWNrZ3JvdW5kIG9mIGdhbWUgc2NvcmVcbiRnc0JvcmRlcjogdmFyKC0tZ3NCb3JkZXIpOyAvLyBiYWNrZ3JvdW5kIG9mIE1lbnVzXG4kZ3NUZXh0U2l6ZTogdmFyKC0tZ3NUZXh0U2l6ZSk7IC8vIGJhY2tncm91bmQgb2YgTWVudXNcbiRnc0ZvbnRGYW1pbHk6IHZhcigtLWdzRm9udEZhbWlseSk7IC8vIHNjb3JlIGZvbnRcbiRnc1RhYmxlSXRlbVdpZHRoOiB2YXIoLS1nc1RhYmxlSXRlbVdpZHRoKTsgLy8gd2lkdGggb2Ygc2NvcmUgaXRlbSBpbiB0YWJsZSBsYXlvdXRcbiRnc1RhYmxlUGx5V2lkdGg6IHZhcigtLWdzVGFibGVQbHlXaWR0aCk7IC8vIHdpZHRoIG9mIHBseSBlbGVtZW50IGluIHRhYmxlIGxheW91dFxuXG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIENvbnRhaW5lciBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuJGdzVGV4dENvbG9yTVc6IHZhcigtLWdzVGV4dENvbG9yTVcpOyAvLyBUZXh0IGNvbG9yIGZvciBnYW1lIHNjb3JlXG4kZ3NCYWNrZ3JvdW5kTVc6IHZhcigtLWdzQmFja2dyb3VuZE1XKTsgLy8gYmFja2dyb3VuZCBvZiBDb250YWluZXJzXG4kZ3NCb3JkZXJNVzogdmFyKC0tZ3NCb3JkZXJNVyk7IC8vIGJhY2tncm91bmQgb2YgTWVudXNcbiRnc1RleHRTaXplTVc6IHZhcigtLWdzVGV4dFNpemVNVyk7IC8vIGJhY2tncm91bmQgb2YgTWVudXNcblxuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBDb250YWluZXIgVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiRnc1RleHRDb2xvck1COiB2YXIoLS1nc1RleHRDb2xvck1CKTsgLy8gVGV4dCBjb2xvciBmb3IgZ2FtZSBzY29yZVxuJGdzQmFja2dyb3VuZE1COiB2YXIoLS1nc0JhY2tncm91bmRNQik7IC8vIGJhY2tncm91bmQgb2YgQ29udGFpbmVyc1xuJGdzQm9yZGVyTUI6IHZhcigtLWdzQm9yZGVyTUIpOyAvLyBiYWNrZ3JvdW5kIG9mIE1lbnVzXG4kZ3NUZXh0U2l6ZU1COiB2YXIoLS1nc1RleHRTaXplTUIpOyAvLyBiYWNrZ3JvdW5kIG9mIE1lbnVzXG5cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgSGlnaGxpZ2h0IFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4kZ3NUZXh0Q29sb3JIRzogdmFyKC0tZ3NUZXh0Q29sb3JIRyk7IC8vIFRleHQgY29sb3IgZm9yIGhpZ2hsaWdodFxuJGdzQW5ub3RhdGlvbkNvbG9ySEc6IHZhcigtLWdzQW5ub3RhdGlvbkNvbG9ySEcpOyAvLyBBbm5vdGF0aW9uL0NvbW1lbnQgY29sb3IgZm9yIGhpZ2hsaWdodFxuJGdzQmFja2dyb3VuZEhHOiB2YXIoLS1nc0JhY2tncm91bmRIRyk7IC8vIGJhY2tncm91bmQgZm9yIGhpZ2hsaWdodFxuJGdzQm9yZGVySEc6IHZhcigtLWdzQm9yZGVySEcpOyAvLyBib3JkZXIgZm9yIGhpZ2hsaWdodFxuXG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIEFubm90YXRpb24gVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiRnc1RleHRDb2xvckFOOiB2YXIoLS1nc1RleHRDb2xvckFOKTsgLy8gVGV4dCBjb2xvciBmb3IgaGlnaGxpZ2h0XG4kZ3NCYWNrZ3JvdW5kQU46IHZhcigtLWdzQmFja2dyb3VuZEFOKTsgLy8gYmFja2dyb3VuZCBmb3IgaGlnaGxpZ2h0XG4kZ3NCb3JkZXJBTjogdmFyKC0tZ3NCb3JkZXJBTik7IC8vIGJvcmRlciBmb3IgaGlnaGxpZ2h0XG5cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgVmFyaWF0aW9uIFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4kZ3NUZXh0Q29sb3JWQTogdmFyKC0tZ3NUZXh0Q29sb3JWQSk7IC8vIFRleHQgY29sb3IgZm9yIGhpZ2hsaWdodFxuJGdzQmFja2dyb3VuZFZBOiB2YXIoLS1nc0JhY2tncm91bmRWQSk7IC8vIGJhY2tncm91bmQgZm9yIGhpZ2hsaWdodFxuJGdzQm9yZGVyVkE6IHZhcigtLWdzQm9yZGVyVkEpOyAvLyBib3JkZXIgZm9yIGhpZ2hsaWdodFxuXG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIFBseSBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuJGdzVGV4dENvbG9yUEM6IHZhcigtLWdzVGV4dENvbG9yUEMpOyAvLyBUZXh0IGNvbG9yIGZvciBnYW1lIHNjb3JlIHBseVxuJGdzQmFja2dyb3VuZFBDOiB2YXIoLS1nc0JhY2tncm91bmRQQyk7IC8vIGJhY2tncm91bmQgZm9yIGdhbWUgc2NvcmUgcGx5XG4kZ3NCb3JkZXJQQzogdmFyKC0tZ3NCb3JkZXJQQyk7IC8vIGJvcmRlciBmb3IgZ2FtZSBzY29yZSBwbHlcblxuLyoqKioqKioqKioqKioqKioqKioqIENvbnRyb2wgQ29sb3JzICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiRjc0JhY2tncm91bmQ6IHZhcigtLWNzQmFja2dyb3VuZCk7IC8vIGJhY2tncm91bmQgZm9yIGNvbnRyb2xzXG4kY3NDb2xvcjogdmFyKC0tY3NDb2xvcik7IC8vIGNvbnRyb2xzIGNvbG9yIChmb3JlZ3JvdW5kKVxuXG4vKioqKioqKioqKioqKioqKioqKiogQm9hcmQgQ29sb3JzICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiRib2FyZEJHRGFyazogdmFyKC0tYm9hcmRCR0RhcmspOyAvLyBib2FyZCBkYXJrIHRpbGVcbiRib2FyZEJHTGlnaHQ6IHZhcigtLWJvYXJkQkdMaWdodCk7IC8vIGJvYXJkIGxpZ2h0IHRpbGVcbiRib2FyZExhYmVsTGlnaHQ6IHZhcigtLWJvYXJkTGFiZWxMaWdodCk7IC8vIGJvYXJkIGxpZ2h0IGxhYmVsXG4kYm9hcmRMYWJlbERhcms6IHZhcigtLWJvYXJkTGFiZWxEYXJrKTsgLy8gYm9hcmQgZGFyayBsYWJlbFxuXG5cblxuLyoqKioqKioqKioqKioqKioqKioqIEZvbnQgU2l6ZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuJGdzRm9udFNpemU6IHZhcigtLWdzRm9udFNpemUpOyAvLyBib2FyZCBkYXJrIHRpbGVcbiRnc0ZvbnRTaXplQU46IHZhcigtLWdzRm9udFNpemVBTik7IC8vIGJvYXJkIGxpZ2h0IHRpbGVcbiRnc0ZvbnRTaXplSEc6IHZhcigtLWdzRm9udFNpemVIRyk7IC8vIGJvYXJkIGxpZ2h0IGxhYmVsXG4kZ3NGb250U2l6ZVZBOiB2YXIoLS1nc0ZvbnRTaXplVkEpOyAvLyBib2FyZCBkYXJrIGxhYmVsXG4kZ3NGb250U2l6ZVBDOiB2YXIoLS1nc0ZvbnRTaXplUEMpOyAvLyBib2FyZCBkYXJrIGxhYmVsXG4kaGRyRGF0YUZvbnRTaXplOiB2YXIoLS1oZHJEYXRhRm9udFNpemUpOyAvLyBzaXplIG9mIHBsYXllciBzaG93Y2FzZSBkYXRhXG4kaGRyTmFtZUZvbnRTaXplOiB2YXIoLS1oZHJOYW1lRm9udFNpemUpOyAvLyBzaXplIG9mIHBsYXllciBzaG93Y2FzZSBOYW1lXG4kaGRyVGl0bGVGb250U2l6ZTogdmFyKC0taGRyVGl0bGVGb250U2l6ZSk7IC8vIHNpemUgb2YgcGxheWVyIHNob3djYXNlIGRhdGFcbiRoZHJWYXJpYW50Rm9udFNpemU6IHZhcigtLWhkclZhcmlhbnRGb250U2l6ZSk7IC8vIHNpemUgb2YgcGxheWVyIHNob3djYXNlIE5hbWVcbiRoZHJNYXRjaERhdGFGb250U2l6ZTogdmFyKC0taGRyTWF0Y2hEYXRhRm9udFNpemUpOyAvLyBzaXplIG9mIHBsYXllciBzaG93Y2FzZSBOYW1lXG4kaGRyT3BlbmluZ0ZvbnRTaXplOiB2YXIoLS1oZHJNYXRjaERhdGFGb250U2l6ZSk7IC8vIHNpemUgb2YgcGxheWVyIHNob3djYXNlIE5hbWVcbiRoZHJSZXN1bHRGb250U2l6ZTogdmFyKC0taGRyUmVzdWx0Rm9udFNpemUpOyAvLyBzaXplIG9mIHBsYXllciBzaG93Y2FzZSBOYW1lXG4kaGRyUm91bmRGb250U2l6ZTogdmFyKC0taGRyUm91bmRGb250U2l6ZSk7IC8vIHNpemUgb2YgcGxheWVyIHNob3djYXNlIE5hbWVcblxuLy8gR2VuZXJhbCBzdHVmZlxuJHRleHQtY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xuJGJnLW91dGVyOiB2YXIoLS1iZy1vdXRlcik7XG4kYmctaW5uZXI6IHZhcigtLWJnLWlubmVyKTtcblxuJGJnLWNvbG9yOiAjZjJmM2Y3O1xuJGZnLWNvbG9yOiAjMzgzYTQxO1xuXG4kZ2xvdy1zaGFkb3c6IDAgMCAwLjVlbSB0cmFuc3BhcmVudGl6ZSgkYmx1ZSwgMC4zKTtcbjpyb290IHtcbiAgLS1iZy1jb2xvcjogI3skYmctY29sb3J9O1xuICAtLWZnLWNvbG9yOiAjeyRmZy1jb2xvcn07XG5cbiAgLS1yZWQ6ICN7JHJlZH07XG4gIC0tZ3JlZW46ICN7JGdyZWVufTtcbiAgLS1ibHVlOiAjeyRibHVlfTtcbiAgLS1kYXJrLWJsdWU6ICN7JGRhcmstYmx1ZX07XG4gIC0tbWFyb29uOiAjeyRtYXJvb259O1xuICAtLXB1cnBsZTogI3skcHVycGxlfTtcbn1cbiIsIkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnQ2F2ZWF0JztcbiAgICBzcmM6IHVybCgnLi4vLi4vZm9udHMvQm9sZC9DYXZlYXQtQm9sZC53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcbiAgICAgICAgdXJsKCcuLi8uLi9mb250cy9Cb2xkL0NhdmVhdC1Cb2xkLndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC1kaXNwbGF5OiBzd2FwO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ0NhdmVhdCc7XG4gICAgc3JjOiB1cmwoJy4uLy4uL2ZvbnRzL1JlZ3VsYXIvQ2F2ZWF0LVJlZ3VsYXIud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXG4gICAgICAgIHVybCgnLi4vLi4vZm9udHMvUmVndWxhci9DYXZlYXQtUmVndWxhci53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC1kaXNwbGF5OiBzd2FwO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdGaWd1cmluZVN5bWJvbFQxJztcbiAgc3JjOiB1cmwoJy4uLy4uL2ZvbnRzLzNyZCBQYXJ0eS9DaGVzc1ZhcmlhbnRzL0ZpZ3VyaW5lU3ltYm9sVDFCb2xkLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxuICAgICAgdXJsKCcuLi8uLi9mb250cy8zcmQgUGFydHkvQ2hlc3NWYXJpYW50cy9GaWd1cmluZVN5bWJvbFQxQm9sZC53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnRmlndXJpbmVTeW1ib2xUMSc7XG4gIHNyYzogdXJsKCcuLi8uLi9mb250cy8zcmQgUGFydHkvQ2hlc3NWYXJpYW50cy9GaWd1cmluZVN5bWJvbFQxLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxuICAgICAgdXJsKCcuLi8uLi9mb250cy8zcmQgUGFydHkvQ2hlc3NWYXJpYW50cy9GaWd1cmluZVN5bWJvbFQxLndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ1NhbmN0dWFyeVBsYXlncm91bmQnO1xuICBzcmM6IHVybCgnLi4vLi4vZm9udHMvM3JkIFBhcnR5L1NhbmN0dWFyeVBsYXlncm91bmQud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXG4gICAgICB1cmwoJy4uLy4uL2ZvbnRzLzNyZCBQYXJ0eS9TYW5jdHVhcnlQbGF5Z3JvdW5kLndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG59XG5cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnQW1pdGEnO1xuICBzcmM6IHVybCgnLi4vLi4vZm9udHMvM3JkIFBhcnR5L0FtaXRhL0FtaXRhLVJlZ3VsYXIud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXG4gICAgICB1cmwoJy4uLy4uL2ZvbnRzLzNyZCBQYXJ0eS9BbWl0YS9BbWl0YS1SZWd1bGFyLndvZmYyJykgZm9ybWF0KCd3b2ZmJyk7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xufSIsIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJDYXZlYXRcIjtcbiAgc3JjOiB1cmwoXCIuLi8uLi9mb250cy9Cb2xkL0NhdmVhdC1Cb2xkLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpLCB1cmwoXCIuLi8uLi9mb250cy9Cb2xkL0NhdmVhdC1Cb2xkLndvZmZcIikgZm9ybWF0KFwid29mZlwiKTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkNhdmVhdFwiO1xuICBzcmM6IHVybChcIi4uLy4uL2ZvbnRzL1JlZ3VsYXIvQ2F2ZWF0LVJlZ3VsYXIud29mZjJcIikgZm9ybWF0KFwid29mZjJcIiksIHVybChcIi4uLy4uL2ZvbnRzL1JlZ3VsYXIvQ2F2ZWF0LVJlZ3VsYXIud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJGaWd1cmluZVN5bWJvbFQxXCI7XG4gIHNyYzogdXJsKFwiLi4vLi4vZm9udHMvM3JkIFBhcnR5L0NoZXNzVmFyaWFudHMvRmlndXJpbmVTeW1ib2xUMUJvbGQud29mZjJcIikgZm9ybWF0KFwid29mZjJcIiksIHVybChcIi4uLy4uL2ZvbnRzLzNyZCBQYXJ0eS9DaGVzc1ZhcmlhbnRzL0ZpZ3VyaW5lU3ltYm9sVDFCb2xkLndvZmZcIikgZm9ybWF0KFwid29mZlwiKTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkZpZ3VyaW5lU3ltYm9sVDFcIjtcbiAgc3JjOiB1cmwoXCIuLi8uLi9mb250cy8zcmQgUGFydHkvQ2hlc3NWYXJpYW50cy9GaWd1cmluZVN5bWJvbFQxLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpLCB1cmwoXCIuLi8uLi9mb250cy8zcmQgUGFydHkvQ2hlc3NWYXJpYW50cy9GaWd1cmluZVN5bWJvbFQxLndvZmZcIikgZm9ybWF0KFwid29mZlwiKTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiU2FuY3R1YXJ5UGxheWdyb3VuZFwiO1xuICBzcmM6IHVybChcIi4uLy4uL2ZvbnRzLzNyZCBQYXJ0eS9TYW5jdHVhcnlQbGF5Z3JvdW5kLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpLCB1cmwoXCIuLi8uLi9mb250cy8zcmQgUGFydHkvU2FuY3R1YXJ5UGxheWdyb3VuZC53b2ZmXCIpIGZvcm1hdChcIndvZmZcIik7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkFtaXRhXCI7XG4gIHNyYzogdXJsKFwiLi4vLi4vZm9udHMvM3JkIFBhcnR5L0FtaXRhL0FtaXRhLVJlZ3VsYXIud29mZjJcIikgZm9ybWF0KFwid29mZjJcIiksIHVybChcIi4uLy4uL2ZvbnRzLzNyZCBQYXJ0eS9BbWl0YS9BbWl0YS1SZWd1bGFyLndvZmYyXCIpIGZvcm1hdChcIndvZmZcIik7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xufVxuLyoqKioqKioqKioqKioqKioqKiogTWVudSAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqKioqKiogTWVudSBDb250cm9scyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIENvbnRhaW5lciBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBDb250YWluZXIgVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgQ29udGFpbmVyIFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIEhpZ2hsaWdodCBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBBbm5vdGF0aW9uIFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIFZhcmlhdGlvbiBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBQbHkgVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqKiBDb250cm9sIENvbG9ycyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKiogQm9hcmQgQ29sb3JzICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqKiBGb250IFNpemVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbjpyb290IHtcbiAgLS1iZy1jb2xvcjogI2YyZjNmNztcbiAgLS1mZy1jb2xvcjogIzM4M2E0MTtcbiAgLS1yZWQ6ICNlNDMwMzA7XG4gIC0tZ3JlZW46ICMxOWExODc7XG4gIC0tYmx1ZTogIzM2N2JmMDtcbiAgLS1kYXJrLWJsdWU6ICMyNjVhYjE7XG4gIC0tbWFyb29uOiAjYjgxNzRjO1xuICAtLXB1cnBsZTogIzhjNDJhYjtcbn1cblxuLm5vc2VsZWN0LCAudGltZXIsIC5mZWF0aGVyLXBsYXksIC5mZWF0aGVyLCAudmlldywgLmdyb3csIC5zZXR0aW5ncywgLnNocmluaywgLnBsYXksIC5lbmQsIC5uZXh0LCAucHJldmlvdXMsIC5zdGFydCwgLm5hdmlnYXRpb24tY29udGFpbmVyLCAuYWN0aW9uLWNvbnRhaW5lciwgLmJ1dHRvbiB7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICAtby11c2VyLXNlbGVjdDogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbi5idXR0b24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvcmRlcjogYmxhY2sgMnB4IHNvbGlkO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1jc0JhY2tncm91bmQpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbn1cblxuLmFjdGlvbi1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1jc0JhY2tncm91bmQpO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDQ4cHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubmF2aWdhdGlvbi1jb250YWluZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNDJweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGxlZnQ6IDBweDtcbiAgaGVpZ2h0OiA2NHB4O1xufVxuXG4uc3RhcnQge1xuICBsZWZ0OiAtMXB4O1xuICB3aWR0aDogMTQlO1xuICB0b3A6IDZweDtcbiAgYm90dG9tOiA2cHg7XG59XG5cbi5wcmV2aW91cyB7XG4gIGxlZnQ6IGNhbGMoMTQlIC0gMnB4KTtcbiAgd2lkdGg6IGNhbGMoMjIlIC0gMnB4KTtcbiAgdG9wOiA2cHg7XG4gIGJvdHRvbTogNnB4O1xufVxuXG4ubmV4dCB7XG4gIHdpZHRoOiBjYWxjKDUwJSArIDNweCk7XG4gIGxlZnQ6IGNhbGMoMzYlIC0gNXB4KTtcbiAgdG9wOiA2cHg7XG4gIGJvdHRvbTogNnB4O1xufVxuXG4uZW5kIHtcbiAgd2lkdGg6IGNhbGMoMTQlICsgMnB4KTtcbiAgcmlnaHQ6IC0xcHg7XG4gIHRvcDogNnB4O1xuICBib3R0b206IDZweDtcbn1cblxuLnBsYXkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAzNCU7XG4gIGxlZnQ6IDRweDtcbiAgdG9wOiA0cHg7XG4gIGJvdHRvbTogNHB4O1xuICBib3JkZXI6IHZhcigtLWNzQ29sb3IpIHNvbGlkIDJweDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xufVxuXG4uc2hyaW5rIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTIlO1xuICBsZWZ0OiBjYWxjKDQ5LjUlICsgMTJweCk7XG4gIHRvcDogNHB4O1xuICBib3R0b206IDRweDtcbn1cblxuLnNldHRpbmdzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTIlO1xuICByaWdodDogMnB4O1xuICB0b3A6IDRweDtcbiAgYm90dG9tOiA0cHg7XG59XG5cbi5ncm93IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTIlO1xuICBsZWZ0OiBjYWxjKDYzLjUlICsgMTZweCk7XG4gIHRvcDogNHB4O1xuICBib3R0b206IDRweDtcbn1cblxuLnZpZXcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMiU7XG4gIGxlZnQ6IGNhbGMoMzYuNSUgKyA4cHgpO1xuICB0b3A6IDRweDtcbiAgYm90dG9tOiA0cHg7XG59XG5cbi5mZWF0aGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA0JTtcbiAgd2lkdGg6IDkwJTtcbiAgaGVpZ2h0OiA5MCU7XG4gIHRvcDogNSU7XG4gIHN0cm9rZTogdmFyKC0tY3NDb2xvcik7XG4gIHN0cm9rZS13aWR0aDogMjtcbiAgc3Ryb2tlLWxpbmVjYXA6IHJvdW5kO1xuICBzdHJva2UtbGluZWpvaW46IGZsYXQ7XG4gIGZpbGw6IG5vbmU7XG59XG5cbi5mZWF0aGVyLXBsYXkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDZweDtcbiAgd2lkdGg6IDMycHg7XG4gIGhlaWdodDogODAlO1xuICB0b3A6IDEwJTtcbiAgc3Ryb2tlOiB2YXIoLS1jc0NvbG9yKTtcbiAgc3Ryb2tlLXdpZHRoOiAyO1xuICBzdHJva2UtbGluZWNhcDogcm91bmQ7XG4gIHN0cm9rZS1saW5lam9pbjogcm91bmQ7XG4gIGZpbGw6IG5vbmU7XG59XG5cbi50aW1lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHZhcigtLWNzQ29sb3IpO1xuICBsaW5lLWhlaWdodDogMzhweDtcbiAgbWFyZ2luLWxlZnQ6IDI0cHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AriaControls, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'aria-controls',
                templateUrl: './aria-controls.component.html',
                styleUrls: ['./aria-controls.component.scss']
            }]
    }], function () { return [{ type: _services_aria_service__WEBPACK_IMPORTED_MODULE_1__["AriaService"] }, { type: _services_layout_service__WEBPACK_IMPORTED_MODULE_2__["LayoutService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/aria-header/aria-header.component.ts":
/*!******************************************************!*\
  !*** ./src/app/aria-header/aria-header.component.ts ***!
  \******************************************************/
/*! exports provided: AriaHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AriaHeader", function() { return AriaHeader; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _aria_score_aria_score_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../aria-score/aria-score.component */ "./src/app/aria-score/aria-score.component.ts");
/* harmony import */ var _services_aria_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/aria.service */ "./src/app/services/aria.service.ts");
/* harmony import */ var _services_layout_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/layout.service */ "./src/app/services/layout.service.ts");







const _c0 = ["containerElement"];
const _c1 = ["titleContainerElement"];
const _c2 = ["prevButtonElement"];
const _c3 = ["matchHeaderElement"];
const _c4 = ["nextButtonElement"];
const _c5 = ["resultSectionElement"];
const _c6 = ["variantElement"];
const _c7 = ["playerSectionElement"];
function AriaHeader_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 26, 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AriaHeader_button_6_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.previousGame(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " < ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AriaHeader_aria_score_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "aria-score", 28, 29);
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("score", ctx_r11.layout.state, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "aria-score-", ctx_r11.aria.UUID, "");
} }
const _c8 = function (a0) { return { disabled: a0 }; };
class AriaHeader {
    constructor(aria, layout, renderer) {
        this.aria = aria;
        this.layout = layout;
        this.renderer = renderer;
        this.environment = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"];
        this.variant = 'Classical';
        this.event = '';
        this.eventDate = '';
        this.setDate = '';
        this.white = '';
        this.black = '';
        this.whiteData = { image: _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].imagesPath + "player.png" };
        this.blackData = { image: _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].imagesPath + "player.png" };
        this.whiteElo = '';
        this.blackElo = '';
        this.round = '';
        this.opening = '';
        this.site = '';
        this.siteFlag = '';
        this.currentGame = 0;
        this.gameCount = 0;
        this.result = '';
        this.trophySource = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].imagesPath + 'draw.png';
        this.headerContainer = null;
        aria.attachHeader(this);
        layout.attachHeader(this);
    }
    ngOnInit() {
    }
    setHeader(map) {
        this.eventDate = this.aria.setDate;
        const event = map.get('Event');
        if (event) {
            this.event = event;
        }
        const eventDate = map.get('Event Date');
        if (eventDate) {
            this.eventDate = eventDate;
        }
        const white = map.get('White');
        if (white) {
            this.white = white;
            const pdata = this.aria.getPlayerData(white);
            if (pdata) {
                this.whiteData = pdata;
                if (!pdata.image) {
                    this.whiteData.image = _services_aria_service__WEBPACK_IMPORTED_MODULE_3__["STOCK_IMAGE"];
                }
            }
            else {
                this.whiteData = { image: _services_aria_service__WEBPACK_IMPORTED_MODULE_3__["STOCK_IMAGE"] };
            }
        }
        const black = map.get('Black');
        if (black) {
            this.black = black;
            const pdata = this.aria.getPlayerData(black);
            if (pdata) {
                this.blackData = pdata;
                if (!pdata.image) {
                    this.blackData.image = _services_aria_service__WEBPACK_IMPORTED_MODULE_3__["STOCK_IMAGE"];
                }
            }
            else {
                this.blackData = { image: _services_aria_service__WEBPACK_IMPORTED_MODULE_3__["STOCK_IMAGE"] };
            }
        }
        const gameData = this.aria.getGameData(this.currentGame);
        if (gameData) {
            if (gameData.opening)
                this.opening = gameData.opening;
            else
                this.opening = '';
            if (gameData.country) {
                this.siteFlag = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].flagsPath + gameData.country + '.png';
            }
            else {
                this.siteFlag = '';
            }
        }
        else {
            this.opening = '';
            this.siteFlag = '';
        }
        const site = map.get('Site');
        if (site) {
            this.site = site;
        }
        else {
            this.site = '';
        }
        const whiteElo = map.get('White Elo');
        if (whiteElo) {
            this.whiteElo = whiteElo;
        }
        const blackElo = map.get('Black Elo');
        if (blackElo) {
            this.blackElo = blackElo;
        }
        const variant = map.get('Variant');
        if (variant) {
            this.variant = variant;
        }
        if (this.aria.setDate.length > 0) {
            this.setDate = this.aria.setDate;
        }
        const round = map.get('Round');
        if (round) {
            this.round = 'Round ' + round;
        }
        else {
            this.round = '';
        }
        const result = map.get('Result');
        if (result) {
            if (result.length == 1) {
                this.result = 'Abandoned';
                this.trophySource = '';
                return;
            }
            this.result = result + ' in ' + this.aria.getPlyCount() + ' moves';
            if (result == '1-0') {
                this.trophySource = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].imagesPath + 'wwins.png';
                return;
            }
            if (result == '0-1') {
                this.trophySource = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].imagesPath + 'bwins.png';
                return;
            }
            if (result == '1/2-1/2') {
                this.trophySource = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].imagesPath + 'draw.png';
                return;
            }
        }
    }
    searchDate() {
        if (this.eventDate.length) {
            const d = new Date(this.eventDate);
            const year = d.getFullYear();
            const date = d.getDate();
            const month = d.getMonth();
            let output = '';
            if (year) {
                output = year.toString();
                if (month || date) {
                    output += '-';
                }
            }
            if (month) {
                output += (month + 1).toString();
                if (date) {
                    output += '-';
                }
            }
            if (date) {
                output += date.toString();
            }
            // TODO: Add External events
        }
    }
    previousGame() {
        if (this.currentGame > 0) {
            --this.currentGame;
        }
        if (this.currentGame >= 0) {
            this.aria.selectGame(this.currentGame);
        }
    }
    nextGame() {
        if (this.currentGame < this.gameCount) {
            this.aria.selectGame(++this.currentGame);
        }
    }
    clickedEvent() {
    }
    resize(width, height) {
        switch (this.layout.state) {
            case 1: // SBS Portrait
                this.containerElement.nativeElement.style = 'height:auto;width:100%;margin-left:0px;margin-right:0px;overflow-y:hidden;';
                if (this.layout.headerElement) {
                    this.layout.headerElement.style.width = width + 'px';
                }
                break;
            case 2: {
                this.containerElement.nativeElement.style = 'height:auto;width:100%;margin-left:0px;margin-right:0px;overflow-y:hidden;';
                if (this.layout.headerElement) {
                    this.layout.headerElement.style.width = width + 'px';
                }
                break;
            }
            case 3: {
                //this.variantElement.nativeElement.style = 'margin-left:4px;margin-top:-20px;margin-right:-18px;flex-grow:0;order:0;z-index:10; width:180px';
                if (this.layout.headerElement) {
                    this.layout.headerElement.style.height = height + 'px';
                }
                let scoreSize = height;
                if (this.resultSectionElement) {
                    scoreSize -= this.resultSectionElement.nativeElement.clientHeight;
                }
                if (this.playerSectionElement) {
                    scoreSize -= (this.playerSectionElement.nativeElement.clientHeight);
                }
                if (this.matchHeaderElement) { // should be 83
                    scoreSize -= this.matchHeaderElement.nativeElement.clientHeight;
                }
                if (this.layout.headerElement) {
                    this.renderer.setStyle(this.layout.headerElement, 'left', '');
                }
                this.titleContainerElement.nativeElement.style =
                    'order:1;height: auto;line-height:42px;font-size: 110%;text-align:center;min-width: 140px;width: calc(100% - 188px);min-height:42px;';
                'padding-bottom:4px;font-family: Candara;.match-date{height: 22px;font-size:72%;font-weight: bold;text-align: center;line-height:4px;}';
                if (this.scoreComponent) {
                    this.scoreComponent.resize(width, Math.ceil(scoreSize + 42));
                    if (this.layout.gameScoreElement) {
                        this.renderer.setStyle(this.layout.gameScoreElement, 'overflow-y', 'hidden');
                        this.renderer.setStyle(this.layout.gameScoreElement, 'height', scoreSize + 'px');
                        this.renderer.setStyle(this.layout.gameScoreElement, 'height', 'auto');
                    }
                }
                else {
                    window.setTimeout(() => {
                        if (this.scoreComponent) {
                            this.scoreComponent.resize(width, Math.ceil(scoreSize + 42));
                            if (this.layout.gameScoreElement) {
                                this.renderer.setStyle(this.layout.gameScoreElement, 'overflow-y', 'hidden');
                                this.renderer.setStyle(this.layout.gameScoreElement, 'height', scoreSize + 'px');
                                this.renderer.setStyle(this.layout.gameScoreElement, 'height', 'auto');
                            }
                        }
                    }, 20);
                }
                break;
            }
            case 4: {
                //this.variantElement.nativeElement.style = 'margin-top:8px;flex-grow:0;order:0;margin-left:2px;z-index:10;margin-right:-16px;width:142px';
                if (this.layout.headerElement) {
                    this.layout.headerElement.style.height = height + 'px';
                }
                this.titleContainerElement.nativeElement.style = 'order:2;justify-content:center;line-height:42px;font-size:100%;text-align:center;min-width:300px;margin-right:2px;margin-left:2px;width:auto;min-height:42px;';
                'padding-bottom:4px;font-family: Candara;.match-date{height: 18px;font-size:64%;font-weight: bold;text-align: center;line-height:4px;}';
                let scoreSize = height;
                if (this.resultSectionElement) {
                    scoreSize -= this.resultSectionElement.nativeElement.clientHeight;
                }
                if (this.playerSectionElement) {
                    scoreSize -= (this.playerSectionElement.nativeElement.clientHeight);
                }
                if (this.matchHeaderElement) { // should be 83
                    scoreSize -= this.matchHeaderElement.nativeElement.clientHeight;
                }
                // 773 - 455 = 318
                if (this.scoreComponent) {
                    this.scoreComponent.resize(width, Math.ceil(scoreSize + 48));
                    if (this.layout.gameScoreElement) {
                        this.renderer.setStyle(this.layout.gameScoreElement, 'overflow-y', 'hidden');
                        this.renderer.setStyle(this.layout.gameScoreElement, 'height', scoreSize + 'px');
                        this.renderer.setStyle(this.layout.gameScoreElement, 'height', 'auto');
                    }
                }
                else {
                    window.setTimeout(() => {
                        if (this.scoreComponent) {
                            this.scoreComponent.resize(width, Math.ceil(scoreSize + 48));
                            if (this.layout.gameScoreElement) {
                                this.renderer.setStyle(this.layout.gameScoreElement, 'overflow-y', 'hidden');
                                this.renderer.setStyle(this.layout.gameScoreElement, 'height', scoreSize + 'px');
                                this.renderer.setStyle(this.layout.gameScoreElement, 'height', 'auto');
                            }
                        }
                    }, 20);
                }
                //this.scoreComponent.resize(width, height - 344);
                break;
            }
            default: break;
        }
        if (this.layout.headerElement && height <= 0) {
            this.layout.headerElement.style.height = 'auto';
        }
        if (this.matchHeaderElement) {
            let padding = 96 + (this.currentGame > 0 ? 36 : 0) + (this.currentGame < this.gameCount - 1 ? 36 : 0);
            this.renderer.setStyle(this.matchHeaderElement.nativeElement, 'margin-left', (this.currentGame > 0 ? 3 : -28) + 'px');
            this.renderer.setStyle(this.matchHeaderElement.nativeElement, 'width', (width - padding) + 'px');
        }
    }
}
AriaHeader.ɵfac = function AriaHeader_Factory(t) { return new (t || AriaHeader)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_aria_service__WEBPACK_IMPORTED_MODULE_3__["AriaService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_layout_service__WEBPACK_IMPORTED_MODULE_4__["LayoutService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); };
AriaHeader.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AriaHeader, selectors: [["aria-header"]], viewQuery: function AriaHeader_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c3, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c4, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c5, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c6, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_aria_score_aria_score_component__WEBPACK_IMPORTED_MODULE_2__["AriaScore"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c7, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.containerElement = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.titleContainerElement = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.prevButtonElement = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.matchHeaderElement = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.nextButtonElement = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.resultSectionElement = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.variantElement = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.scoreComponent = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.playerSectionElement = _t.first);
    } }, inputs: { variant: "variant", event: "event", eventDate: "eventDate", setDate: "setDate", white: "white", black: "black", whiteData: "whiteData", blackData: "blackData", whiteElo: "whiteElo", blackElo: "blackElo", round: "round", opening: "opening", site: "site", siteFlag: "siteFlag", currentGame: "currentGame", gameCount: "gameCount" }, outputs: { result: "result", trophySource: "trophySource" }, decls: 41, vars: 54, consts: [[1, "container"], ["containerElement", ""], [1, "top-header"], ["titleContainerElement", ""], [3, "src"], ["variantElement", ""], ["class", "prev-game", 3, "click", 4, "ngIf"], [1, "match-header"], ["matchHeaderElement", ""], [1, "match-title", 3, "click"], [1, "event-date", 3, "click"], [1, "next-game", 3, "ngClass", "click"], ["nextButtonElement", ""], ["playerSectionElement", ""], [3, "name", "elo", "playerData"], ["whiteShowcaseElement", ""], [3, "name", "color", "elo", "playerData"], ["blackShowcaseElement", ""], ["resultSectionElement", ""], ["resultTrophy", ""], [1, "round"], [1, "site"], [1, "match-date"], [1, "opening"], [1, "result"], [3, "class", "id", 4, "ngIf"], [1, "prev-game", 3, "click"], ["prevButtonElement", ""], [3, "id"], ["score", ""]], template: function AriaHeader_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AriaHeader_button_6_Template, 3, 0, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AriaHeader_Template_a_click_9_listener() { return ctx.clickedEvent(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AriaHeader_Template_div_click_11_listener() { return ctx.searchDate(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AriaHeader_Template_button_click_13_listener() { return ctx.nextGame(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " > ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", null, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "player-showcase", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "player-showcase", 16, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", null, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 4, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, AriaHeader_aria_score_40_Template, 2, 4, "aria-score", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("variant", ctx.layout.state, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("src", "", ctx.environment.imagesPath, "", ctx.variant, ".svg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentGame > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.event);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.setDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](52, _c8, ctx.currentGame >= ctx.gameCount - 1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("player-section", ctx.layout.state, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("player-showcase", ctx.layout.state, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", ctx.white)("elo", ctx.whiteElo)("playerData", ctx.whiteData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("player-showcase", ctx.layout.state, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", ctx.black)("color", true)("elo", ctx.blackElo)("playerData", ctx.blackData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("result-section", ctx.layout.state, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("result-trophy", ctx.layout.state, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.trophySource, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("result-data", ctx.layout.state, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A0", ctx.round, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("site-date", ctx.layout.state, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("site-flag", ctx.layout.state, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.siteFlag, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.site);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("calendar", ctx.layout.state, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "", ctx.environment.imagesPath, "calendar.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.eventDate, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.opening);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.result);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.layout.state >= 3);
    } }, styles: [".background[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -2px;\n  left: -2px;\n  width: 100%;\n  height: 100%;\n  border: grey 2px solid;\n  border-radius: 2px;\n  z-index: 0;\n}\n\n.container[_ngcontent-%COMP%] {\n  border: none;\n  height: auto;\n  border-radius: 0px;\n  padding-bottom: 2px;\n  display: flex;\n  flex-wrap: wrap;\n  flex-basis: auto;\n  z-index: 8;\n  justify-content: space-around;\n  align-content: stretch;\n  -o-user-select: none;\n  -webkit-user-select: none;\n          user-select: none;\n  overflow-x: hidden;\n}\n\n.top-header[_ngcontent-%COMP%], .top-header2[_ngcontent-%COMP%] {\n  height: auto;\n  width: auto;\n  flex-grow: 10;\n  display: flex;\n  justify-content: center;\n  z-index: 4;\n  order: 1;\n}\n\n.player-showcase[_ngcontent-%COMP%], .player-showcase4[_ngcontent-%COMP%], .player-showcase3[_ngcontent-%COMP%], .player-showcase2[_ngcontent-%COMP%], .player-showcase1[_ngcontent-%COMP%] {\n  margin-top: 12px;\n  min-width: 220;\n  max-height: 120px;\n}\n\n.player-section[_ngcontent-%COMP%], .player-section4[_ngcontent-%COMP%], .player-section3[_ngcontent-%COMP%], .player-section2[_ngcontent-%COMP%], .player-section1[_ngcontent-%COMP%] {\n  height: auto;\n  width: 100%;\n  flex-grow: 6;\n  min-width: 200px;\n  margin-top: -10px;\n  display: flex;\n  flex-wrap: wrap;\n  z-index: 4;\n  order: 2;\n  text-align: center;\n  justify-content: space-around;\n}\n\n.result-section[_ngcontent-%COMP%], .result-section4[_ngcontent-%COMP%], .result-section3[_ngcontent-%COMP%], .result-section2[_ngcontent-%COMP%], .result-section1[_ngcontent-%COMP%] {\n  height: auto;\n  width: auto;\n  padding-left: 4px;\n  padding-right: 4px;\n  z-index: 10;\n  font-size: 18px;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-around;\n  z-index: 10;\n  text-align: center;\n  margin-bottom: 4px;\n}\n\n.result-trophy[_ngcontent-%COMP%], .result-trophy4[_ngcontent-%COMP%], .result-trophy3[_ngcontent-%COMP%], .result-trophy2[_ngcontent-%COMP%], .result-trophy1[_ngcontent-%COMP%] {\n  width: auto;\n  height: 120px;\n  margin-bottom: 10px;\n  margin-right: 20px;\n}\n\n.result-data[_ngcontent-%COMP%], .result-data3[_ngcontent-%COMP%], .result-data2[_ngcontent-%COMP%], .result-data1[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column wrap;\n  line-height: 28px;\n}\n\n.event-date[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: -4px;\n}\n\n.round[_ngcontent-%COMP%] {\n  width: 100%;\n  font-weight: bold;\n  color: #4d4dff;\n  font-size: 24px;\n}\n\n.opening[_ngcontent-%COMP%] {\n  width: 100%;\n  font-size: 14px;\n}\n\n.site[_ngcontent-%COMP%] {\n  width: auto;\n  margin-right: 18px;\n}\n\n.site-flag[_ngcontent-%COMP%], .site-flag4[_ngcontent-%COMP%], .site-flag3[_ngcontent-%COMP%], .site-flag2[_ngcontent-%COMP%], .site-flag1[_ngcontent-%COMP%] {\n  height: 26px;\n  margin-bottom: -4px;\n  margin-right: 8px;\n}\n\n.calendar[_ngcontent-%COMP%], .calendar4[_ngcontent-%COMP%], .calendar3[_ngcontent-%COMP%], .calendar2[_ngcontent-%COMP%], .calendar1[_ngcontent-%COMP%] {\n  height: 28px;\n  margin-bottom: -6px;\n  margin-right: 4px;\n}\n\n.match-date[_ngcontent-%COMP%] {\n  width: auto;\n}\n\n.site-date[_ngcontent-%COMP%], .site-date2[_ngcontent-%COMP%], .site-date1[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  text-align: center;\n  justify-content: center;\n  line-height: 18px;\n  align-items: baseline;\n}\n\n.result[_ngcontent-%COMP%] {\n  width: 100%;\n  font-weight: bold;\n  font-size: 16px;\n  margin-top: -4px;\n}\n\n.result-section1[_ngcontent-%COMP%] {\n  order: 4;\n}\n\n.calendar1[_ngcontent-%COMP%] {\n  height: 22px;\n}\n\n.player-section1[_ngcontent-%COMP%] {\n  flex-grow: unset;\n  width: 100%;\n}\n\n.site-date1[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n\n.variant1[_ngcontent-%COMP%] {\n  height: 24px;\n  margin-top: 12px;\n}\n\n.set-name1[_ngcontent-%COMP%] {\n  order: 7;\n}\n\n.site-flag1[_ngcontent-%COMP%] {\n  height: 16px;\n}\n\n.player-showcase1[_ngcontent-%COMP%] {\n  order: 2;\n  max-height: 64px;\n  max-width: 90%;\n  margin-top: 0px;\n}\n\n.result-trophy1[_ngcontent-%COMP%] {\n  visibility: hidden;\n  height: 0px;\n  width: 0px;\n}\n\n.result-section2[_ngcontent-%COMP%] {\n  order: 3;\n  width: 45%;\n  justify-content: flex-start;\n  align-items: flex-start;\n  margin-top: -12px;\n}\n\n.player-section2[_ngcontent-%COMP%] {\n  order: 2;\n  width: 48%;\n  flex-grow: unset;\n  min-width: 258px;\n}\n\n.site-date2[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n\n.calendar2[_ngcontent-%COMP%] {\n  height: 22px;\n}\n\n.top-header2[_ngcontent-%COMP%] {\n  order: 1;\n  width: calc(100% - 140px);\n}\n\n.variant2[_ngcontent-%COMP%] {\n  order: 0;\n  height: 24px;\n  margin-top: 12px;\n}\n\n.player-showcase2[_ngcontent-%COMP%] {\n  order: 2;\n  max-width: 100%;\n  max-height: 64px;\n  margin-top: 0px;\n  margin-bottom: 14px;\n}\n\n.set-name2[_ngcontent-%COMP%] {\n  order: 7;\n}\n\n.site-flag2[_ngcontent-%COMP%] {\n  height: 16px;\n}\n\n.result-trophy2[_ngcontent-%COMP%] {\n  visibility: hidden;\n  height: 0px;\n  width: 0px;\n}\n\n.variant3[_ngcontent-%COMP%] {\n  margin-left: 4px;\n  margin-top: -20px;\n  flex-grow: 0;\n  order: 0;\n  z-index: 10;\n  width: 180px;\n}\n\n.player-showcase3[_ngcontent-%COMP%] {\n  width: 44%;\n  min-width: 280px;\n}\n\n.result-trophy3[_ngcontent-%COMP%] {\n  order: 2;\n  margin-top: -8px;\n}\n\n.result-section3[_ngcontent-%COMP%] {\n  order: 3;\n  margin-bottom: -2px;\n  width: 100%;\n}\n\n.result-data3[_ngcontent-%COMP%] {\n  order: 1;\n  text-align: center;\n  padding-top: 8px;\n}\n\n.score3[_ngcontent-%COMP%] {\n  order: 6;\n}\n\n.result-section4[_ngcontent-%COMP%] {\n  order: 3;\n  text-align: center;\n  margin-bottom: 2px;\n  width: 100%;\n  justify-content: center;\n}\n\n.site-flag4[_ngcontent-%COMP%] {\n  height: 16px;\n}\n\n.calendar4[_ngcontent-%COMP%] {\n  height: 22px;\n}\n\n.variant4[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  flex-grow: 0;\n  order: 0;\n  margin-left: 1px;\n  z-index: 10;\n  margin-right: -16px;\n  width: 142px;\n}\n\n.set-name4[_ngcontent-%COMP%] {\n  order: 1;\n}\n\n.result-trophy4[_ngcontent-%COMP%] {\n  visibility: hidden;\n  height: 0px;\n  width: 0px;\n}\n\n.player-showcase4[_ngcontent-%COMP%] {\n  width: 88%;\n  min-width: 260px;\n}\n\n.match-header[_ngcontent-%COMP%] {\n  order: 1;\n  height: auto;\n  line-height: 42px;\n  font-size: 120%;\n  margin-right: 3px;\n  text-align: center;\n  min-height: 42px;\n  padding-bottom: 4px;\n  font-family: Candara;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n\n.match-header[_ngcontent-%COMP%]   .match-date[_ngcontent-%COMP%] {\n  height: 22px;\n  font-size: 16px;\n  font-weight: bold;\n  text-align: center;\n  line-height: 16px;\n  margin-top: -8px;\n}\n\n.variant-header[_ngcontent-%COMP%] {\n  height: 24px;\n  width: 217px;\n  font-size: 24px;\n  font-family: Arial, Helvetica, sans-serif;\n  border-radius: 8px;\n  line-height: 24px;\n  border: 2px solid black;\n}\n\n.prev-game[_ngcontent-%COMP%] {\n  order: 0;\n  height: 36px;\n  width: 36px;\n  border-radius: 2px;\n  margin-top: 3px;\n}\n\n.next-game[_ngcontent-%COMP%] {\n  order: 2;\n  margin-top: 3px;\n  height: 36px;\n  width: 36px;\n  margin-right: 4px;\n  border-radius: 2px;\n}\n\n.disabled[_ngcontent-%COMP%] {\n  visibility: hidden;\n}\n\n.primary-data-box[_ngcontent-%COMP%] {\n  width: 63%;\n  height: 36px;\n  background: #4d1f00;\n  color: white;\n  float: left;\n  margin-top: 8px;\n  text-align: center;\n  border: 1px solid black;\n  border-radius: 2px;\n  padding-top: 2px;\n  z-index: 10;\n  order: 6;\n}\n\n.secondary-data-box[_ngcontent-%COMP%] {\n  width: 34%;\n  height: 36px;\n  background: #f67d2c;\n  color: white;\n  float: right;\n  border: 1px solid black;\n  border-radius: 2px;\n  margin-top: 2px;\n  text-align: center;\n  z-index: 4;\n  order: 7;\n}\n\n.box-title[_ngcontent-%COMP%] {\n  color: #fabe0b;\n  text-align: left;\n  margin-left: 2px;\n  z-index: 4;\n}\n\n.secondary-box-title[_ngcontent-%COMP%] {\n  color: #532c00;\n  text-align: right;\n  padding-right: 8px;\n  z-index: 4;\n}\n\naria-score[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  margin-left: 4px;\n  order: 4;\n  height: auto;\n  overflow-x: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXJpYS1oZWFkZXIvYXJpYS1oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQURKOztBQUlBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSw2QkFBQTtFQUNBLHNCQUFBO0VBSUEsb0JBQUE7RUFDQSx5QkFBQTtVQUFBLGlCQUFBO0VBQ0Esa0JBQUE7QUFESjs7QUFJQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0FBREo7O0FBR0E7RUFDSSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQUFKOztBQUdBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0FBQUo7O0FBRUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsNkJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUNBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBRUo7O0FBQ0E7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtBQUVKOztBQVFBO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0FBTEo7O0FBT0E7RUFDSSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQUpKOztBQU9BO0VBQ0ksV0FBQTtFQUNBLGVBQUE7QUFKSjs7QUFPQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtBQUpKOztBQU9BO0VBQ0ksWUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFKSjs7QUFNQTtFQUNJLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBSEo7O0FBS0E7RUFDSSxXQUFBO0FBRko7O0FBSUE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0FBREo7O0FBSUE7RUFDSSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFESjs7QUFLQTtFQUVJLFFBQUE7QUFISjs7QUFLQTtFQUVJLFlBQUE7QUFISjs7QUFLQTtFQUVJLGdCQUFBO0VBQ0EsV0FBQTtBQUhKOztBQUtBO0VBRUksZUFBQTtBQUhKOztBQU1BO0VBRUksWUFBQTtFQUNBLGdCQUFBO0FBSko7O0FBT0E7RUFDSSxRQUFBO0FBSko7O0FBTUE7RUFFSSxZQUFBO0FBSko7O0FBTUE7RUFFSSxRQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQUpKOztBQU1BO0VBRUksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQUpKOztBQVlBO0VBRUksUUFBQTtFQUNBLFVBQUE7RUFDQSwyQkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7QUFWSjs7QUFZQTtFQUVJLFFBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQVZKOztBQVlBO0VBRUksZUFBQTtBQVZKOztBQVlBO0VBRUksWUFBQTtBQVZKOztBQVlBO0VBRUksUUFBQTtFQUNBLHlCQUFBO0FBVko7O0FBWUE7RUFFSSxRQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBVko7O0FBWUE7RUFFSSxRQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBVko7O0FBWUE7RUFDSSxRQUFBO0FBVEo7O0FBZ0JBO0VBRUksWUFBQTtBQWRKOztBQWdCQTtFQUVJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUFkSjs7QUFvQkE7RUFFSSxnQkFBQTtFQUFnQixpQkFBQTtFQUNoQixZQUFBO0VBQVksUUFBQTtFQUNaLFdBQUE7RUFBVyxZQUFBO0FBZmY7O0FBb0JBO0VBRUksVUFBQTtFQUNBLGdCQUFBO0FBbEJKOztBQXFCQTtFQUVJLFFBQUE7RUFDQSxnQkFBQTtBQW5CSjs7QUFzQkE7RUFFSSxRQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FBcEJKOztBQTRCQTtFQUVJLFFBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBMUJKOztBQTRCQTtFQUNJLFFBQUE7QUF6Qko7O0FBK0JBO0VBRUksUUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7QUE3Qko7O0FBa0NBO0VBRUksWUFBQTtBQWhDSjs7QUFrQ0E7RUFFSSxZQUFBO0FBaENKOztBQWtDQTtFQUVJLGVBQUE7RUFBZSxZQUFBO0VBQ2YsUUFBQTtFQUFRLGdCQUFBO0VBQ1IsV0FBQTtFQUFXLG1CQUFBO0VBQ1gsWUFBQTtBQTdCSjs7QUFnQ0E7RUFDSSxRQUFBO0FBN0JKOztBQStCQTtFQUVJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUE3Qko7O0FBK0JBO0VBRUksVUFBQTtFQUNBLGdCQUFBO0FBN0JKOztBQTZDQTtFQUNJLFFBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQTFDSjs7QUEyQ0k7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBekNSOztBQThDQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0FBM0NKOztBQThDQTtFQUNJLFFBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQTNDSjs7QUE4Q0E7RUFDSSxRQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQTNDSjs7QUE4Q0E7RUFDSSxrQkFBQTtBQTNDSjs7QUE4Q0E7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtBQTNDSjs7QUE4Q0E7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7QUEzQ0o7O0FBOENBO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0FBM0NKOztBQThDQTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQTNDSjs7QUE4Q0E7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUEzQ0oiLCJmaWxlIjoic3JjL2FwcC9hcmlhLWhlYWRlci9hcmlhLWhlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4vLyBSb290IE9iamVjdHMgKGJhc2Ugc3RhdGUpXHJcbi5iYWNrZ3JvdW5ke1xyXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICB0b3A6LTJweDtcclxuICAgIGxlZnQ6LTJweDtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBoZWlnaHQ6MTAwJTtcclxuICAgIGJvcmRlcjogZ3JleSAycHggc29saWQ7XHJcbiAgICBib3JkZXItcmFkaXVzOjJweDtcclxuICAgIHotaW5kZXg6MDtcclxufVxyXG5cclxuLmNvbnRhaW5lcntcclxuICAgIGJvcmRlcjpub25lO1xyXG4gICAgaGVpZ2h0OmF1dG87XHJcbiAgICBib3JkZXItcmFkaXVzOjBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAycHg7XHJcbiAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICBmbGV4LXdyYXA6d3JhcDtcclxuICAgIGZsZXgtYmFzaXM6IGF1dG87XHJcbiAgICB6LWluZGV4OiA4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICBhbGlnbi1jb250ZW50OnN0cmV0Y2g7XHJcbiAgICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgLW8tdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIG92ZXJmbG93LXg6aGlkZGVuO1xyXG59XHJcblxyXG4udG9wLWhlYWRlcntcclxuICAgIGhlaWdodDphdXRvO1xyXG4gICAgd2lkdGg6YXV0bztcclxuICAgIGZsZXgtZ3JvdzoxMDtcclxuICAgIGRpc3BsYXk6ZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XHJcbiAgICB6LWluZGV4OjQ7XHJcbiAgICBvcmRlcjoxO1xyXG59XHJcbi5wbGF5ZXItc2hvd2Nhc2V7XHJcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xyXG4gICAgbWluLXdpZHRoOiAyMjA7XHJcbiAgICBtYXgtaGVpZ2h0OjEyMHB4O1xyXG59XHJcblxyXG4ucGxheWVyLXNlY3Rpb257XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgZmxleC1ncm93OiA2O1xyXG4gICAgbWluLXdpZHRoOiAyMDBweDtcclxuICAgIG1hcmdpbi10b3A6IC0xMHB4O1xyXG4gICAgZGlzcGxheTpmbGV4O1xyXG4gICAgZmxleC13cmFwOndyYXA7XHJcbiAgICB6LWluZGV4OjQ7XHJcbiAgICBvcmRlcjoyO1xyXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxufVxyXG4ucmVzdWx0LXNlY3Rpb257XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIHBhZGRpbmctbGVmdDo0cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OjRweDtcclxuICAgIHotaW5kZXg6MTA7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICBmbGV4LXdyYXA6d3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgei1pbmRleDoxMDtcclxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTo0cHg7XHJcbn1cclxuLnJlc3VsdC10cm9waHl7XHJcbiAgICB3aWR0aDphdXRvO1xyXG4gICAgaGVpZ2h0OjEyMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbToxMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG4ucmVzdWx0LWRhdGF7XHJcbiAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDI4cHg7XHJcbn1cclxuLnZhcmlhbnR7XHJcblxyXG59XHJcblxyXG4uc2V0LW5hbWV7XHJcblxyXG59XHJcblxyXG4uZXZlbnQtZGF0ZXtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBtYXJnaW4tdG9wOi00cHg7XHJcbn1cclxuLnJvdW5ke1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6IHJnYig3NywgNzcsIDI1NSk7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbn1cclxuXHJcbi5vcGVuaW5ne1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGZvbnQtc2l6ZToxNHB4O1xyXG59XHJcblxyXG4uc2l0ZXtcclxuICAgIHdpZHRoOmF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE4cHg7XHJcbn1cclxuXHJcbi5zaXRlLWZsYWd7XHJcbiAgICBoZWlnaHQ6IDI2cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAtNHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OjhweDtcclxufVxyXG4uY2FsZW5kYXJ7XHJcbiAgICBoZWlnaHQ6MjhweDtcclxuICAgIG1hcmdpbi1ib3R0b206LTZweDtcclxuICAgIG1hcmdpbi1yaWdodDo0cHg7XHJcbn1cclxuLm1hdGNoLWRhdGV7XHJcbiAgICB3aWR0aDphdXRvO1xyXG59XHJcbi5zaXRlLWRhdGV7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgZGlzcGxheTpmbGV4O1xyXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGxpbmUtaGVpZ2h0OjE4cHg7XHJcbiAgICBhbGlnbi1pdGVtczpiYXNlbGluZTtcclxufVxyXG5cclxuLnJlc3VsdHtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIG1hcmdpbi10b3A6LTRweDtcclxufVxyXG5cclxuLy8gU3RhdGUgMSAoU3BsaXQgU0JTIFBvcnRyYWl0KVxyXG4ucmVzdWx0LXNlY3Rpb24xe1xyXG4gICAgQGV4dGVuZCAucmVzdWx0LXNlY3Rpb247XHJcbiAgICBvcmRlcjo0O1xyXG59XHJcbi5jYWxlbmRhcjF7XHJcbiAgICBAZXh0ZW5kIC5jYWxlbmRhcjtcclxuICAgIGhlaWdodDoyMnB4O1xyXG59XHJcbi5wbGF5ZXItc2VjdGlvbjF7XHJcbiAgICBAZXh0ZW5kIC5wbGF5ZXItc2VjdGlvbjtcclxuICAgIGZsZXgtZ3JvdzogdW5zZXQ7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG59XHJcbi5zaXRlLWRhdGUxe1xyXG4gICAgQGV4dGVuZCAuc2l0ZS1kYXRlO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG4udmFyaWFudDF7XHJcbiAgICBAZXh0ZW5kIC52YXJpYW50O1xyXG4gICAgaGVpZ2h0OjI0cHg7XHJcbiAgICBtYXJnaW4tdG9wOjEycHg7XHJcbn1cclxuXHJcbi5zZXQtbmFtZTF7XHJcbiAgICBvcmRlcjogNztcclxufVxyXG4uc2l0ZS1mbGFnMXtcclxuICAgIEBleHRlbmQgLnNpdGUtZmxhZztcclxuICAgIGhlaWdodDoxNnB4O1xyXG59XHJcbi5wbGF5ZXItc2hvd2Nhc2Uxe1xyXG4gICAgQGV4dGVuZCAucGxheWVyLXNob3djYXNlO1xyXG4gICAgb3JkZXI6MjtcclxuICAgIG1heC1oZWlnaHQ6NjRweDtcclxuICAgIG1heC13aWR0aDo5MCU7XHJcbiAgICBtYXJnaW4tdG9wOjBweDtcclxufVxyXG4ucmVzdWx0LXRyb3BoeTF7XHJcbiAgICBAZXh0ZW5kIC5yZXN1bHQtdHJvcGh5O1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgaGVpZ2h0OjBweDtcclxuICAgIHdpZHRoOjBweDtcclxufVxyXG4ucmVzdWx0LWRhdGExe1xyXG4gICAgQGV4dGVuZCAucmVzdWx0LWRhdGE7XHJcbiAgICBcclxufVxyXG5cclxuLy8gU3RhdGUgMiAoRnVsbCBQb3J0cmFpdClcclxuLnJlc3VsdC1zZWN0aW9uMntcclxuICAgIEBleHRlbmQgLnJlc3VsdC1zZWN0aW9uO1xyXG4gICAgb3JkZXI6MztcclxuICAgIHdpZHRoOjQ1JTtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgbWFyZ2luLXRvcDotMTJweDtcclxufVxyXG4ucGxheWVyLXNlY3Rpb24ye1xyXG4gICAgQGV4dGVuZCAucGxheWVyLXNlY3Rpb247XHJcbiAgICBvcmRlcjoyO1xyXG4gICAgd2lkdGg6NDglO1xyXG4gICAgZmxleC1ncm93OiB1bnNldDtcclxuICAgIG1pbi13aWR0aDoyNThweDtcclxufVxyXG4uc2l0ZS1kYXRlMntcclxuICAgIEBleHRlbmQgLnNpdGUtZGF0ZTtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG4uY2FsZW5kYXIye1xyXG4gICAgQGV4dGVuZCAuY2FsZW5kYXI7XHJcbiAgICBoZWlnaHQ6MjJweDtcclxufVxyXG4udG9wLWhlYWRlcjJ7XHJcbiAgICBAZXh0ZW5kIC50b3AtaGVhZGVyO1xyXG4gICAgb3JkZXI6MTtcclxuICAgIHdpZHRoOmNhbGMoMTAwJSAtIDE0MHB4KTtcclxufVxyXG4udmFyaWFudDJ7XHJcbiAgICBAZXh0ZW5kIC52YXJpYW50O1xyXG4gICAgb3JkZXI6MDtcclxuICAgIGhlaWdodDoyNHB4O1xyXG4gICAgbWFyZ2luLXRvcDoxMnB4O1xyXG59XHJcbi5wbGF5ZXItc2hvd2Nhc2Uye1xyXG4gICAgQGV4dGVuZCAucGxheWVyLXNob3djYXNlO1xyXG4gICAgb3JkZXI6MjtcclxuICAgIG1heC13aWR0aDoxMDAlO1xyXG4gICAgbWF4LWhlaWdodDo2NHB4O1xyXG4gICAgbWFyZ2luLXRvcDowcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOjE0cHg7XHJcbn1cclxuLnNldC1uYW1lMntcclxuICAgIG9yZGVyOiA3O1xyXG4gICAgQGV4dGVuZCAuc2V0LW5hbWU7XHJcbn1cclxuLnJlc3VsdC1kYXRhMntcclxuICAgIEBleHRlbmQgLnJlc3VsdC1kYXRhO1xyXG5cclxufVxyXG4uc2l0ZS1mbGFnMntcclxuICAgIEBleHRlbmQgLnNpdGUtZmxhZztcclxuICAgIGhlaWdodDoxNnB4O1xyXG59XHJcbi5yZXN1bHQtdHJvcGh5MntcclxuICAgIEBleHRlbmQgLnJlc3VsdC10cm9waHk7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICBoZWlnaHQ6MHB4O1xyXG4gICAgd2lkdGg6MHB4O1xyXG59XHJcblxyXG4vLyBTdGF0ZSAzIChGdWxsIExhbmRzY2FwZSAtIHByZWZlcnJlZClcclxuXHJcblxyXG4udmFyaWFudDN7XHJcbiAgICBAZXh0ZW5kIC52YXJpYW50O1xyXG4gICAgbWFyZ2luLWxlZnQ6NHB4O21hcmdpbi10b3A6LTIwcHg7XHJcbiAgICBmbGV4LWdyb3c6MDtvcmRlcjowO1xyXG4gICAgei1pbmRleDoxMDt3aWR0aDoxODBweDtcclxufVxyXG4ucGxheWVyLXNlY3Rpb24ze1xyXG4gICAgQGV4dGVuZCAucGxheWVyLXNlY3Rpb247XHJcbn1cclxuLnBsYXllci1zaG93Y2FzZTN7XHJcbiAgICBAZXh0ZW5kIC5wbGF5ZXItc2hvd2Nhc2U7XHJcbiAgICB3aWR0aDogNDQlO1xyXG4gICAgbWluLXdpZHRoOjI4MHB4O1xyXG59XHJcblxyXG4ucmVzdWx0LXRyb3BoeTN7XHJcbiAgICBAZXh0ZW5kIC5yZXN1bHQtdHJvcGh5O1xyXG4gICAgb3JkZXI6MjtcclxuICAgIG1hcmdpbi10b3A6IC04cHg7XHJcbn1cclxuXHJcbi5yZXN1bHQtc2VjdGlvbjN7XHJcbiAgICBAZXh0ZW5kIC5yZXN1bHQtc2VjdGlvbjtcclxuICAgIG9yZGVyOjM7XHJcbiAgICBtYXJnaW4tYm90dG9tOi0ycHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4uY2FsZW5kYXIze1xyXG4gICAgQGV4dGVuZCAuY2FsZW5kYXI7XHJcbn1cclxuLnNpdGUtZmxhZzN7XHJcbiAgICBAZXh0ZW5kIC5zaXRlLWZsYWc7XHJcbn1cclxuLnJlc3VsdC1kYXRhM3tcclxuICAgIEBleHRlbmQgLnJlc3VsdC1kYXRhO1xyXG4gICAgb3JkZXI6MTtcclxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgcGFkZGluZy10b3A6OHB4O1xyXG59XHJcbi5zY29yZTN7XHJcbiAgICBvcmRlcjo2O1xyXG59XHJcblxyXG5cclxuXHJcbi8vIFN0YXRlIDQgKExhbmRzY2FwZSBDb2x1bW4pXHJcbi5yZXN1bHQtc2VjdGlvbjR7XHJcbiAgICBAZXh0ZW5kIC5yZXN1bHQtc2VjdGlvbjtcclxuICAgIG9yZGVyOjM7XHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206MnB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4ucGxheWVyLXNlY3Rpb240e1xyXG4gICAgQGV4dGVuZCAucGxheWVyLXNlY3Rpb247XHJcbn1cclxuLnNpdGUtZmxhZzR7XHJcbiAgICBAZXh0ZW5kIC5zaXRlLWZsYWc7XHJcbiAgICBoZWlnaHQ6IDE2cHg7XHJcbn1cclxuLmNhbGVuZGFyNHtcclxuICAgIEBleHRlbmQgLmNhbGVuZGFyO1xyXG4gICAgaGVpZ2h0OiAyMnB4O1xyXG59XHJcbi52YXJpYW50NHtcclxuICAgIEBleHRlbmQgLnZhcmlhbnQ7XHJcbiAgICBtYXJnaW4tdG9wOjhweDtmbGV4LWdyb3c6MDtcclxuICAgIG9yZGVyOjA7bWFyZ2luLWxlZnQ6MXB4O1xyXG4gICAgei1pbmRleDoxMDttYXJnaW4tcmlnaHQ6LTE2cHg7ICAgIFxyXG4gICAgd2lkdGg6MTQycHg7XHJcbn1cclxuXHJcbi5zZXQtbmFtZTR7XHJcbiAgICBvcmRlcjogMTtcclxufVxyXG4ucmVzdWx0LXRyb3BoeTR7XHJcbiAgICBAZXh0ZW5kIC5yZXN1bHQtdHJvcGh5O1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgaGVpZ2h0OjBweDtcclxuICAgIHdpZHRoOjBweDtcclxufVxyXG4ucGxheWVyLXNob3djYXNlNHtcclxuICAgIEBleHRlbmQgLnBsYXllci1zaG93Y2FzZTtcclxuICAgIHdpZHRoOjg4JTtcclxuICAgIG1pbi13aWR0aDoyNjBweDtcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbi5tYXRjaC1oZWFkZXJ7XHJcbiAgICBvcmRlcjoxO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgbGluZS1oZWlnaHQ6NDJweDtcclxuICAgIGZvbnQtc2l6ZTogMTIwJTtcclxuICAgIG1hcmdpbi1yaWdodDozcHg7XHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgIG1pbi1oZWlnaHQ6NDJweDtcclxuICAgIHBhZGRpbmctYm90dG9tOjRweDtcclxuICAgIGZvbnQtZmFtaWx5OiBDYW5kYXJhO1xyXG4gICAgd2hpdGUtc3BhY2U6bm93cmFwO1xyXG4gICAgdGV4dC1vdmVyZmxvdzplbGxpcHNpcztcclxuICAgIG92ZXJmbG93OmhpZGRlbjtcclxuICAgIC5tYXRjaC1kYXRle1xyXG4gICAgICAgIGhlaWdodDogMjJweDtcclxuICAgICAgICBmb250LXNpemU6MTZweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6MTZweDtcclxuICAgICAgICBtYXJnaW4tdG9wOi04cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4udmFyaWFudC1oZWFkZXJ7XHJcbiAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICB3aWR0aDoyMTdweDtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcclxufVxyXG5cclxuLnByZXYtZ2FtZXtcclxuICAgIG9yZGVyOjA7XHJcbiAgICBoZWlnaHQ6MzZweDtcclxuICAgIHdpZHRoOjM2cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICBtYXJnaW4tdG9wOiAzcHg7XHJcbn1cclxuXHJcbi5uZXh0LWdhbWV7XHJcbiAgICBvcmRlcjoyO1xyXG4gICAgbWFyZ2luLXRvcDogM3B4O1xyXG4gICAgaGVpZ2h0OjM2cHg7XHJcbiAgICB3aWR0aDozNnB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OjRweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxufVxyXG5cclxuLmRpc2FibGVke1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG59XHJcblxyXG4ucHJpbWFyeS1kYXRhLWJveHtcclxuICAgIHdpZHRoOjYzJTtcclxuICAgIGhlaWdodDogMzZweDtcclxuICAgIGJhY2tncm91bmQ6IHJnYig3NywgMzEsIDApO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZmxvYXQ6bGVmdDtcclxuICAgIG1hcmdpbi10b3A6OHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICBwYWRkaW5nLXRvcDoycHg7XHJcbiAgICB6LWluZGV4OiAxMDtcclxuICAgIG9yZGVyOjY7XHJcbn1cclxuXHJcbi5zZWNvbmRhcnktZGF0YS1ib3h7XHJcbiAgICB3aWR0aDozNCU7XHJcbiAgICBoZWlnaHQ6IDM2cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjQ2LCAxMjUsIDQ0KTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZsb2F0OnJpZ2h0O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICBtYXJnaW4tdG9wOjJweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHotaW5kZXg6IDQ7XHJcbiAgICBvcmRlcjo3O1xyXG59XHJcblxyXG4uYm94LXRpdGxlIHtcclxuICAgIGNvbG9yOiAjZmFiZTBiO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIG1hcmdpbi1sZWZ0OiAycHg7XHJcbiAgICB6LWluZGV4OiA0O1xyXG59XHJcblxyXG4uc2Vjb25kYXJ5LWJveC10aXRsZSB7XHJcbiAgICBjb2xvcjogIzUzMmMwMDtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgcGFkZGluZy1yaWdodDogOHB4O1xyXG4gICAgei1pbmRleDogNDtcclxufVxyXG5cclxuYXJpYS1zY29yZSB7XHJcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBtYXJnaW4tbGVmdDo0cHg7XHJcbiAgICBvcmRlcjo0O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gICAgXHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AriaHeader, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'aria-header',
                templateUrl: './aria-header.component.html',
                styleUrls: ['./aria-header.component.scss']
            }]
    }], function () { return [{ type: _services_aria_service__WEBPACK_IMPORTED_MODULE_3__["AriaService"] }, { type: _services_layout_service__WEBPACK_IMPORTED_MODULE_4__["LayoutService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }]; }, { variant: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], event: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], eventDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], setDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], white: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], black: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], whiteData: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], blackData: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], whiteElo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], blackElo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], round: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], opening: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], site: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], siteFlag: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], currentGame: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], gameCount: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], result: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], trophySource: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], containerElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['containerElement']
        }], titleContainerElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['titleContainerElement']
        }], prevButtonElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['prevButtonElement']
        }], matchHeaderElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['matchHeaderElement']
        }], nextButtonElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['nextButtonElement']
        }], resultSectionElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['resultSectionElement']
        }], variantElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['variantElement']
        }], scoreComponent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_aria_score_aria_score_component__WEBPACK_IMPORTED_MODULE_2__["AriaScore"]]
        }], playerSectionElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['playerSectionElement']
        }] }); })();


/***/ }),

/***/ "./src/app/aria-header/player-showcase/player-showcase.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/aria-header/player-showcase/player-showcase.component.ts ***!
  \**************************************************************************/
/*! exports provided: PlayerShowcase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerShowcase", function() { return PlayerShowcase; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _services_aria_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/aria.service */ "./src/app/services/aria.service.ts");
/* harmony import */ var src_app_services_layout_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/layout.service */ "./src/app/services/layout.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function PlayerShowcase_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlayerShowcase_div_6_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.search(ctx_r7.name); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.name);
} }
function PlayerShowcase_img_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 10);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "", ctx_r1.environment.piecesPath, "bpawn.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function PlayerShowcase_img_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 10);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "", ctx_r2.environment.piecesPath, "wpawn.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function PlayerShowcase_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlayerShowcase_div_10_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.search(ctx_r9.name); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.name);
} }
function PlayerShowcase_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlayerShowcase_div_12_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.search(ctx_r11.playerData.born); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Born: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.playerData.born);
} }
function PlayerShowcase_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "FIDE Elo: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.playerData.elo);
} }
function PlayerShowcase_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Match Elo: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r6.elo);
} }
class PlayerShowcase {
    constructor(layout) {
        this.layout = layout;
        this.name = '';
        this.color = false;
        this.elo = '';
        this.title = '';
        this.playerData = { image: _services_aria_service__WEBPACK_IMPORTED_MODULE_2__["STOCK_IMAGE"] };
        this.environment = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"];
    }
    ngOnInit() {
    }
    search(value) {
        // if (this.searchURL) {
        //   window.open(this.searchURL + value);
        // }
        // TODO: Add external url click
    }
}
PlayerShowcase.ɵfac = function PlayerShowcase_Factory(t) { return new (t || PlayerShowcase)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_layout_service__WEBPACK_IMPORTED_MODULE_3__["LayoutService"])); };
PlayerShowcase.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PlayerShowcase, selectors: [["player-showcase"]], inputs: { name: "name", color: "color", elo: "elo", title: "title", playerData: "playerData" }, decls: 15, vars: 19, consts: [[1, "showcase-box"], [1, "player-image", 3, "src"], [1, "photo-frame", 3, "src"], ["class", "player-nameP", 3, "click", 4, "ngIf"], ["class", "color-image", 3, "src", 4, "ngIf"], ["class", "player-name", 3, "click", 4, "ngIf"], [1, "player-data-box"], ["class", "player-data", 3, "click", 4, "ngIf"], ["class", "player-data", 4, "ngIf"], [1, "player-nameP", 3, "click"], [1, "color-image", 3, "src"], [1, "player-name", 3, "click"], [1, "player-data", 3, "click"], [1, "player-data"]], template: function PlayerShowcase_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PlayerShowcase_div_6_Template, 2, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, PlayerShowcase_img_7_Template, 1, 1, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, PlayerShowcase_img_8_Template, 1, 1, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, PlayerShowcase_div_10_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, PlayerShowcase_div_12_Template, 4, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, PlayerShowcase_div_13_Template, 4, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, PlayerShowcase_div_14_Template, 4, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("player-frame", ctx.layout.state, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.playerData.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "", ctx.environment.imagesPath, "picture-frame.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("player-details", ctx.layout.state, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("player-header", ctx.layout.state, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.layout.state <= 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.color);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.color);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.color ? "Black" : "White", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.layout.state > 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.playerData.born !== undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.playerData.elo !== undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.elo.length);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: ["@font-face {\n  font-family: \"Caveat\";\n  src: url('Caveat-Bold.woff2') format(\"woff2\"), url('Caveat-Bold.woff') format(\"woff\");\n  font-weight: bold;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"Caveat\";\n  src: url('Caveat-Regular.woff2') format(\"woff2\"), url('Caveat-Regular.woff') format(\"woff\");\n  font-weight: 600;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"FigurineSymbolT1\";\n  src: url('FigurineSymbolT1Bold.woff2') format(\"woff2\"), url('FigurineSymbolT1Bold.woff') format(\"woff\");\n  font-weight: bold;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"FigurineSymbolT1\";\n  src: url('FigurineSymbolT1.woff2') format(\"woff2\"), url('FigurineSymbolT1.woff') format(\"woff\");\n  font-weight: 600;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"SanctuaryPlayground\";\n  src: url('SanctuaryPlayground.woff2') format(\"woff2\"), url('SanctuaryPlayground.woff') format(\"woff\");\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"Amita\";\n  src: url('Amita-Regular.woff2') format(\"woff2\"), url('Amita-Regular.woff2') format(\"woff\");\n  font-style: normal;\n  font-display: swap;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n[_ngcontent-%COMP%]:root {\n  --bg-color: #f2f3f7;\n  --fg-color: #383a41;\n  --red: #e43030;\n  --green: #19a187;\n  --blue: #367bf0;\n  --dark-blue: #265ab1;\n  --maroon: #b8174c;\n  --purple: #8c42ab;\n}\n.showcase-box[_ngcontent-%COMP%] {\n  border-radius: 1px;\n  margin: 2px;\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-wrap: nowrap;\n  max-height: 180px;\n}\n.player-header[_ngcontent-%COMP%], .player-header4[_ngcontent-%COMP%], .player-header3[_ngcontent-%COMP%], .player-header2[_ngcontent-%COMP%], .player-header1[_ngcontent-%COMP%] {\n  font-size: 18px;\n  border-radius: 1px;\n  text-align: right;\n  padding-right: 4px;\n  background: #f0e7d3;\n  background: linear-gradient(127deg, rgba(240, 231, 211, 0.623) 0%, rgba(175, 175, 175, 0.75) 44%, #7e7e7e 100%);\n  order: 0;\n}\n.player-header1[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.player-header2[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.color-image[_ngcontent-%COMP%] {\n  height: 18px;\n  margin-right: 4px;\n  margin-top: 4px;\n  order: 3;\n}\n.player-image[_ngcontent-%COMP%] {\n  height: 68%;\n  max-width: 78px;\n}\n.player-frame[_ngcontent-%COMP%], .player-frame4[_ngcontent-%COMP%], .player-frame3[_ngcontent-%COMP%], .player-frame2[_ngcontent-%COMP%], .player-frame1[_ngcontent-%COMP%] {\n  width: 90px;\n  display: flex;\n  order: 0;\n}\n.player-frame1[_ngcontent-%COMP%] {\n  height: 120%;\n  width: unset;\n}\n.player-frame2[_ngcontent-%COMP%] {\n  height: 120%;\n  width: unset;\n}\n.player-details[_ngcontent-%COMP%], .player-details4[_ngcontent-%COMP%], .player-details3[_ngcontent-%COMP%], .player-details2[_ngcontent-%COMP%], .player-details1[_ngcontent-%COMP%] {\n  min-width: 160px;\n  height: auto;\n  width: 100%;\n  order: 2;\n}\n.player-details1[_ngcontent-%COMP%] {\n  margin-left: -52px;\n}\n.player-details2[_ngcontent-%COMP%] {\n  margin-left: -52px;\n}\n.photo-frame[_ngcontent-%COMP%] {\n  transform-origin: center;\n  height: 100%;\n  transform: translate(-87%, -9%);\n}\n.player-name[_ngcontent-%COMP%], .player-nameP[_ngcontent-%COMP%] {\n  margin-left: 2px;\n  text-align: center;\n  font-weight: bold;\n  order: 1;\n  min-width: 60%;\n  padding-right: 2px;\n  font-size: 20px;\n  margin-top: 2px;\n  font-family: \"Amita\";\n  line-height: 24px;\n}\n.player-nameP[_ngcontent-%COMP%] {\n  text-align: left;\n  font-size: 18px;\n  line-height: 0px;\n  transform: translate(8px, 13px);\n  margin-top: unset;\n  min-width: unset;\n  margin-left: unset;\n}\n.player-data[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-left: 4px;\n  margin-right: 4px;\n  font-size: var(--hdrDataFontSize);\n}\n.player-data-box[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: row wrap;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMuc2NzcyIsInNyYy9hc3NldHMvc2Nzcy9tb2R1bGVzL19mb250cy5zY3NzIiwic3JjL2FwcC9hcmlhLWhlYWRlci9wbGF5ZXItc2hvd2Nhc2UvcGxheWVyLXNob3djYXNlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhFQUFBO0FDQUE7RUFDSSxxQkFBQTtFQUNBLHFGQUFBO0VBRUEsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDQ0o7QURFQTtFQUNJLHFCQUFBO0VBQ0EsMkZBQUE7RUFFQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNESjtBRElBO0VBQ0UsK0JBQUE7RUFDQSx1R0FBQTtFQUVBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0hGO0FETUE7RUFDRSwrQkFBQTtFQUNBLCtGQUFBO0VBRUEsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDTEY7QURRQTtFQUNFLGtDQUFBO0VBQ0EscUdBQUE7RUFFQSxrQkFBQTtFQUNBLGtCQUFBO0FDUEY7QURXQTtFQUNFLG9CQUFBO0VBQ0EsMEZBQUE7RUFFQSxrQkFBQTtFQUNBLGtCQUFBO0FDVkY7QUZEQSwrRUFBQTtBQUdBLGtGQUFBO0FBS0EsK0VBQUE7QUFVQSwrRUFBQTtBQU1BLCtFQUFBO0FBTUEsK0VBQUE7QUFNQSxnRkFBQTtBQUtBLCtFQUFBO0FBS0EseUVBQUE7QUFLQSx5RUFBQTtBQUlBLHVFQUFBO0FBUUEscUVBQUE7QUF3QkE7RUFDRSxtQkFBQTtFQUNBLG1CQUFBO0VBRUEsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBRXpFRjtBQTVEQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUErREo7QUE1REE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSwrR0FBQTtFQUNBLFFBQUE7QUErREo7QUE5REM7RUFFRyxlQUFBO0FBZ0VKO0FBL0RDO0VBRUcsZUFBQTtBQWlFSjtBQXpEQTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxRQUFBO0FBNERKO0FBekRBO0VBQ0ksV0FBQTtFQUNBLGVBQUE7QUE0REo7QUF6REE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLFFBQUE7QUE0REo7QUEzREM7RUFFRyxZQUFBO0VBQ0EsWUFBQTtBQTZESjtBQTVEQztFQUVHLFlBQUE7RUFDQSxZQUFBO0FBOERKO0FBdkRBO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7QUEwREo7QUF6REM7RUFFRyxrQkFBQTtBQTJESjtBQTFEQztFQUVHLGtCQUFBO0FBNERKO0FBckRBO0VBQ0ksd0JBQUE7RUFDQSxZQUFBO0VBQ0EsK0JBQUE7QUF3REo7QUF0REE7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxRQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0FBeURKO0FBeERDO0VBRUcsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSwrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQTBESjtBQXZEQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlDRkhjO0FFNkRsQjtBQXhEQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQTJESiIsImZpbGUiOiJzcmMvYXBwL2FyaWEtaGVhZGVyL3BsYXllci1zaG93Y2FzZS9wbGF5ZXItc2hvd2Nhc2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG5cbkBpbXBvcnQgXCIuL2Fzc2V0cy9zY3NzL21vZHVsZXMvX2ZvbnRzLnNjc3NcIjtcbiRnYW1lc2NvcmUtZmFtaWx5OiBcIkZpZ3VyaW5lU3ltYm9sVDFcIjtcbiRnYW1lc2NvcmUtaGlnaGxpZ2h0OiAjNTg1ODU4ZmY7XG4kZ2FtZXNjb3JlLWZvcmVncm91bmQ6IHdoaXRlO1xuXG4kcmVkOiAjZTQzMDMwO1xuJGdyZWVuOiAjMTlhMTg3O1xuJGxpZ2h0LWJsdWU6ICMwMGZmZmZmZjtcbiRibHVlOiAjMzY3YmYwO1xuJGRhcmstYmx1ZTogIzI2NWFiMTtcbiRtYXJvb246ICNiODE3NGM7XG4kcHVycGxlOiAjOGM0MmFiO1xuXG4vLyBNYWluIEFSSUEgQ29sb3IgRWxlbWVudCBWYXJpYWJsZXNcbiR0ZXh0Q29sb3I6IHZhcigtLXRleHRDb2xvcik7IC8vIE1haW4gVGV4dCBDb2xvclxuJHRleHRDb2xvckF0dGVudGlvbjogdmFyKC0tdGV4dENvbG9yQXR0ZW50aW9uKTsgLy8gQXR0ZW50aW9uIHRleHRcbiR0ZXh0Q29sb3JSZW1vdmU6IHZhcigtLXRleHRDb2xvclJlbW92ZSk7IC8vIFJlbW92ZS9EZWxldGUvQ2xvc2VcbiR0ZXh0Q29sb3JBZGQ6IHZhcigtLXRleHRDb2xvckFkZCk7IC8vIEFkZC9DcmVhdGUvT3BlblxuJHRleHRDb2xvckFjdGl2ZTogdmFyKC0tdGV4dENvbG9yQWN0aXZlKTsgLy8gQWRkL0NyZWF0ZS9PcGVuXG4kYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZCk7IC8vIE1haW4gYmFja2dyb3VuZCBDb2xvclxuJGJnQ29udGFpbmVyOiB2YXIoLS1iZ0NvbnRhaW5lcik7IC8vIGJhY2tncm91bmQgb2YgQ29udGFpbmVyc1xuJGJnTWVudTogdmFyKC0tYmdNZW51KTsgLy8gYmFja2dyb3VuZCBvZiBNZW51c1xuJGJnSXRlbTogdmFyKC0tYmdJdGVtKTsgLy8gYmFja2dyb3VuZCBvZiBJdGVtc1xuXG4vLyBDb250ZXh0IE1lbnVcbiRiZ0NvbnRleHQ6IHZhcigtLWJnQ29udGV4dCk7IC8vIGJhY2tncm91bmQgb2YgQ29udGV4dCBNZW51XG4kdGV4dENvbG9yQ29udGV4dDogdmFyKC0tdGV4dENvbG9yQ29udGV4dCk7IC8vIHRleHQgY29sb3IgQ29udGV4dCBNZW51XG4kYm9yZGVyQ29udGV4dDogdmFyKC0tYm9yZGVyQ29udGV4dCk7IC8vIGJvcmRlciBDb250ZXh0IE1lbnVcbiRvdmVybGF5Q29udGV4dEJhY2tncm91bmQ6IHZhcihcbiAgLS1vdmVybGF5Q29udGV4dEJhY2tncm91bmRcbik7IC8vIENvbnRleHQgTWVudSBPdmVybGF5IGJhY2tncm91bmQgbWFpblxuJG92ZXJsYXlDb250ZXh0QmFja2dyb3VuZEdyYWRpZW50OiB2YXIoXG4gIC0tb3ZlcmxheUNvbnRleHRCYWNrZ3JvdW5kR3JhZGllbnRcbik7IC8vIENvbnRleHQgTWVudSBiYWNrZ3JvdW5kIGdyYWRpZW50XG5cblxuXG4vKioqKioqKioqKioqKioqKioqKiBNZW51ICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuJG1lQmFja2dyb3VuZDogdmFyKC0tbWVCYWNrZ3JvdW5kKTtcblxuLyoqKioqKioqKioqKioqKioqKioqKioqKiBNZW51IENvbnRyb2xzICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiRjc0ZpbGw6IHZhcigtLWNzRmlsbCk7XG4kY3NBY2NlbnQ6IHZhcigtLWNzQWNjZW50KTtcbiRjc0FjY2VudDI6IHZhcigtLWNzQWNjZW50Mik7XG5cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgQ29udGFpbmVyIFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4kZ3NUZXh0Q29sb3I6IHZhcigtLWdzVGV4dENvbG9yKTsgLy8gVGV4dCBjb2xvciBmb3IgZ2FtZSBzY29yZVxuJGdzQmFja2dyb3VuZDogdmFyKC0tZ3NCYWNrZ3JvdW5kKTsgLy8gYmFja2dyb3VuZCBvZiBDb250YWluZXJzXG4kZ3NMaXN0QmFja2dyb3VuZDogdmFyKC0tZ3NMaXN0QmFja2dyb3VuZCk7IC8vIGxpc3QgYmFja2dyb3VuZCBvZiBnYW1lIHNjb3JlXG4kZ3NCb3JkZXI6IHZhcigtLWdzQm9yZGVyKTsgLy8gYmFja2dyb3VuZCBvZiBNZW51c1xuJGdzVGV4dFNpemU6IHZhcigtLWdzVGV4dFNpemUpOyAvLyBiYWNrZ3JvdW5kIG9mIE1lbnVzXG4kZ3NGb250RmFtaWx5OiB2YXIoLS1nc0ZvbnRGYW1pbHkpOyAvLyBzY29yZSBmb250XG4kZ3NUYWJsZUl0ZW1XaWR0aDogdmFyKC0tZ3NUYWJsZUl0ZW1XaWR0aCk7IC8vIHdpZHRoIG9mIHNjb3JlIGl0ZW0gaW4gdGFibGUgbGF5b3V0XG4kZ3NUYWJsZVBseVdpZHRoOiB2YXIoLS1nc1RhYmxlUGx5V2lkdGgpOyAvLyB3aWR0aCBvZiBwbHkgZWxlbWVudCBpbiB0YWJsZSBsYXlvdXRcblxuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBDb250YWluZXIgVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiRnc1RleHRDb2xvck1XOiB2YXIoLS1nc1RleHRDb2xvck1XKTsgLy8gVGV4dCBjb2xvciBmb3IgZ2FtZSBzY29yZVxuJGdzQmFja2dyb3VuZE1XOiB2YXIoLS1nc0JhY2tncm91bmRNVyk7IC8vIGJhY2tncm91bmQgb2YgQ29udGFpbmVyc1xuJGdzQm9yZGVyTVc6IHZhcigtLWdzQm9yZGVyTVcpOyAvLyBiYWNrZ3JvdW5kIG9mIE1lbnVzXG4kZ3NUZXh0U2l6ZU1XOiB2YXIoLS1nc1RleHRTaXplTVcpOyAvLyBiYWNrZ3JvdW5kIG9mIE1lbnVzXG5cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgQ29udGFpbmVyIFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4kZ3NUZXh0Q29sb3JNQjogdmFyKC0tZ3NUZXh0Q29sb3JNQik7IC8vIFRleHQgY29sb3IgZm9yIGdhbWUgc2NvcmVcbiRnc0JhY2tncm91bmRNQjogdmFyKC0tZ3NCYWNrZ3JvdW5kTUIpOyAvLyBiYWNrZ3JvdW5kIG9mIENvbnRhaW5lcnNcbiRnc0JvcmRlck1COiB2YXIoLS1nc0JvcmRlck1CKTsgLy8gYmFja2dyb3VuZCBvZiBNZW51c1xuJGdzVGV4dFNpemVNQjogdmFyKC0tZ3NUZXh0U2l6ZU1CKTsgLy8gYmFja2dyb3VuZCBvZiBNZW51c1xuXG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIEhpZ2hsaWdodCBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuJGdzVGV4dENvbG9ySEc6IHZhcigtLWdzVGV4dENvbG9ySEcpOyAvLyBUZXh0IGNvbG9yIGZvciBoaWdobGlnaHRcbiRnc0Fubm90YXRpb25Db2xvckhHOiB2YXIoLS1nc0Fubm90YXRpb25Db2xvckhHKTsgLy8gQW5ub3RhdGlvbi9Db21tZW50IGNvbG9yIGZvciBoaWdobGlnaHRcbiRnc0JhY2tncm91bmRIRzogdmFyKC0tZ3NCYWNrZ3JvdW5kSEcpOyAvLyBiYWNrZ3JvdW5kIGZvciBoaWdobGlnaHRcbiRnc0JvcmRlckhHOiB2YXIoLS1nc0JvcmRlckhHKTsgLy8gYm9yZGVyIGZvciBoaWdobGlnaHRcblxuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBBbm5vdGF0aW9uIFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4kZ3NUZXh0Q29sb3JBTjogdmFyKC0tZ3NUZXh0Q29sb3JBTik7IC8vIFRleHQgY29sb3IgZm9yIGhpZ2hsaWdodFxuJGdzQmFja2dyb3VuZEFOOiB2YXIoLS1nc0JhY2tncm91bmRBTik7IC8vIGJhY2tncm91bmQgZm9yIGhpZ2hsaWdodFxuJGdzQm9yZGVyQU46IHZhcigtLWdzQm9yZGVyQU4pOyAvLyBib3JkZXIgZm9yIGhpZ2hsaWdodFxuXG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIFZhcmlhdGlvbiBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuJGdzVGV4dENvbG9yVkE6IHZhcigtLWdzVGV4dENvbG9yVkEpOyAvLyBUZXh0IGNvbG9yIGZvciBoaWdobGlnaHRcbiRnc0JhY2tncm91bmRWQTogdmFyKC0tZ3NCYWNrZ3JvdW5kVkEpOyAvLyBiYWNrZ3JvdW5kIGZvciBoaWdobGlnaHRcbiRnc0JvcmRlclZBOiB2YXIoLS1nc0JvcmRlclZBKTsgLy8gYm9yZGVyIGZvciBoaWdobGlnaHRcblxuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBQbHkgVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiRnc1RleHRDb2xvclBDOiB2YXIoLS1nc1RleHRDb2xvclBDKTsgLy8gVGV4dCBjb2xvciBmb3IgZ2FtZSBzY29yZSBwbHlcbiRnc0JhY2tncm91bmRQQzogdmFyKC0tZ3NCYWNrZ3JvdW5kUEMpOyAvLyBiYWNrZ3JvdW5kIGZvciBnYW1lIHNjb3JlIHBseVxuJGdzQm9yZGVyUEM6IHZhcigtLWdzQm9yZGVyUEMpOyAvLyBib3JkZXIgZm9yIGdhbWUgc2NvcmUgcGx5XG5cbi8qKioqKioqKioqKioqKioqKioqKiBDb250cm9sIENvbG9ycyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4kY3NCYWNrZ3JvdW5kOiB2YXIoLS1jc0JhY2tncm91bmQpOyAvLyBiYWNrZ3JvdW5kIGZvciBjb250cm9sc1xuJGNzQ29sb3I6IHZhcigtLWNzQ29sb3IpOyAvLyBjb250cm9scyBjb2xvciAoZm9yZWdyb3VuZClcblxuLyoqKioqKioqKioqKioqKioqKioqIEJvYXJkIENvbG9ycyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4kYm9hcmRCR0Rhcms6IHZhcigtLWJvYXJkQkdEYXJrKTsgLy8gYm9hcmQgZGFyayB0aWxlXG4kYm9hcmRCR0xpZ2h0OiB2YXIoLS1ib2FyZEJHTGlnaHQpOyAvLyBib2FyZCBsaWdodCB0aWxlXG4kYm9hcmRMYWJlbExpZ2h0OiB2YXIoLS1ib2FyZExhYmVsTGlnaHQpOyAvLyBib2FyZCBsaWdodCBsYWJlbFxuJGJvYXJkTGFiZWxEYXJrOiB2YXIoLS1ib2FyZExhYmVsRGFyayk7IC8vIGJvYXJkIGRhcmsgbGFiZWxcblxuXG5cbi8qKioqKioqKioqKioqKioqKioqKiBGb250IFNpemVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiRnc0ZvbnRTaXplOiB2YXIoLS1nc0ZvbnRTaXplKTsgLy8gYm9hcmQgZGFyayB0aWxlXG4kZ3NGb250U2l6ZUFOOiB2YXIoLS1nc0ZvbnRTaXplQU4pOyAvLyBib2FyZCBsaWdodCB0aWxlXG4kZ3NGb250U2l6ZUhHOiB2YXIoLS1nc0ZvbnRTaXplSEcpOyAvLyBib2FyZCBsaWdodCBsYWJlbFxuJGdzRm9udFNpemVWQTogdmFyKC0tZ3NGb250U2l6ZVZBKTsgLy8gYm9hcmQgZGFyayBsYWJlbFxuJGdzRm9udFNpemVQQzogdmFyKC0tZ3NGb250U2l6ZVBDKTsgLy8gYm9hcmQgZGFyayBsYWJlbFxuJGhkckRhdGFGb250U2l6ZTogdmFyKC0taGRyRGF0YUZvbnRTaXplKTsgLy8gc2l6ZSBvZiBwbGF5ZXIgc2hvd2Nhc2UgZGF0YVxuJGhkck5hbWVGb250U2l6ZTogdmFyKC0taGRyTmFtZUZvbnRTaXplKTsgLy8gc2l6ZSBvZiBwbGF5ZXIgc2hvd2Nhc2UgTmFtZVxuJGhkclRpdGxlRm9udFNpemU6IHZhcigtLWhkclRpdGxlRm9udFNpemUpOyAvLyBzaXplIG9mIHBsYXllciBzaG93Y2FzZSBkYXRhXG4kaGRyVmFyaWFudEZvbnRTaXplOiB2YXIoLS1oZHJWYXJpYW50Rm9udFNpemUpOyAvLyBzaXplIG9mIHBsYXllciBzaG93Y2FzZSBOYW1lXG4kaGRyTWF0Y2hEYXRhRm9udFNpemU6IHZhcigtLWhkck1hdGNoRGF0YUZvbnRTaXplKTsgLy8gc2l6ZSBvZiBwbGF5ZXIgc2hvd2Nhc2UgTmFtZVxuJGhkck9wZW5pbmdGb250U2l6ZTogdmFyKC0taGRyTWF0Y2hEYXRhRm9udFNpemUpOyAvLyBzaXplIG9mIHBsYXllciBzaG93Y2FzZSBOYW1lXG4kaGRyUmVzdWx0Rm9udFNpemU6IHZhcigtLWhkclJlc3VsdEZvbnRTaXplKTsgLy8gc2l6ZSBvZiBwbGF5ZXIgc2hvd2Nhc2UgTmFtZVxuJGhkclJvdW5kRm9udFNpemU6IHZhcigtLWhkclJvdW5kRm9udFNpemUpOyAvLyBzaXplIG9mIHBsYXllciBzaG93Y2FzZSBOYW1lXG5cbi8vIEdlbmVyYWwgc3R1ZmZcbiR0ZXh0LWNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcbiRiZy1vdXRlcjogdmFyKC0tYmctb3V0ZXIpO1xuJGJnLWlubmVyOiB2YXIoLS1iZy1pbm5lcik7XG5cbiRiZy1jb2xvcjogI2YyZjNmNztcbiRmZy1jb2xvcjogIzM4M2E0MTtcblxuJGdsb3ctc2hhZG93OiAwIDAgMC41ZW0gdHJhbnNwYXJlbnRpemUoJGJsdWUsIDAuMyk7XG46cm9vdCB7XG4gIC0tYmctY29sb3I6ICN7JGJnLWNvbG9yfTtcbiAgLS1mZy1jb2xvcjogI3skZmctY29sb3J9O1xuXG4gIC0tcmVkOiAjeyRyZWR9O1xuICAtLWdyZWVuOiAjeyRncmVlbn07XG4gIC0tYmx1ZTogI3skYmx1ZX07XG4gIC0tZGFyay1ibHVlOiAjeyRkYXJrLWJsdWV9O1xuICAtLW1hcm9vbjogI3skbWFyb29ufTtcbiAgLS1wdXJwbGU6ICN7JHB1cnBsZX07XG59XG4iLCJAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ0NhdmVhdCc7XG4gICAgc3JjOiB1cmwoJy4uLy4uL2ZvbnRzL0JvbGQvQ2F2ZWF0LUJvbGQud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXG4gICAgICAgIHVybCgnLi4vLi4vZm9udHMvQm9sZC9DYXZlYXQtQm9sZC53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtZGlzcGxheTogc3dhcDtcbn1cblxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdDYXZlYXQnO1xuICAgIHNyYzogdXJsKCcuLi8uLi9mb250cy9SZWd1bGFyL0NhdmVhdC1SZWd1bGFyLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxuICAgICAgICB1cmwoJy4uLy4uL2ZvbnRzL1JlZ3VsYXIvQ2F2ZWF0LVJlZ3VsYXIud29mZicpIGZvcm1hdCgnd29mZicpO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtZGlzcGxheTogc3dhcDtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnRmlndXJpbmVTeW1ib2xUMSc7XG4gIHNyYzogdXJsKCcuLi8uLi9mb250cy8zcmQgUGFydHkvQ2hlc3NWYXJpYW50cy9GaWd1cmluZVN5bWJvbFQxQm9sZC53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcbiAgICAgIHVybCgnLi4vLi4vZm9udHMvM3JkIFBhcnR5L0NoZXNzVmFyaWFudHMvRmlndXJpbmVTeW1ib2xUMUJvbGQud29mZicpIGZvcm1hdCgnd29mZicpO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ0ZpZ3VyaW5lU3ltYm9sVDEnO1xuICBzcmM6IHVybCgnLi4vLi4vZm9udHMvM3JkIFBhcnR5L0NoZXNzVmFyaWFudHMvRmlndXJpbmVTeW1ib2xUMS53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcbiAgICAgIHVybCgnLi4vLi4vZm9udHMvM3JkIFBhcnR5L0NoZXNzVmFyaWFudHMvRmlndXJpbmVTeW1ib2xUMS53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdTYW5jdHVhcnlQbGF5Z3JvdW5kJztcbiAgc3JjOiB1cmwoJy4uLy4uL2ZvbnRzLzNyZCBQYXJ0eS9TYW5jdHVhcnlQbGF5Z3JvdW5kLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxuICAgICAgdXJsKCcuLi8uLi9mb250cy8zcmQgUGFydHkvU2FuY3R1YXJ5UGxheWdyb3VuZC53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xufVxuXG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ0FtaXRhJztcbiAgc3JjOiB1cmwoJy4uLy4uL2ZvbnRzLzNyZCBQYXJ0eS9BbWl0YS9BbWl0YS1SZWd1bGFyLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxuICAgICAgdXJsKCcuLi8uLi9mb250cy8zcmQgUGFydHkvQW1pdGEvQW1pdGEtUmVndWxhci53b2ZmMicpIGZvcm1hdCgnd29mZicpO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbn0iLCIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiQ2F2ZWF0XCI7XG4gIHNyYzogdXJsKFwiLi4vLi4vZm9udHMvQm9sZC9DYXZlYXQtQm9sZC53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKSwgdXJsKFwiLi4vLi4vZm9udHMvQm9sZC9DYXZlYXQtQm9sZC53b2ZmXCIpIGZvcm1hdChcIndvZmZcIik7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJDYXZlYXRcIjtcbiAgc3JjOiB1cmwoXCIuLi8uLi9mb250cy9SZWd1bGFyL0NhdmVhdC1SZWd1bGFyLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpLCB1cmwoXCIuLi8uLi9mb250cy9SZWd1bGFyL0NhdmVhdC1SZWd1bGFyLndvZmZcIikgZm9ybWF0KFwid29mZlwiKTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiRmlndXJpbmVTeW1ib2xUMVwiO1xuICBzcmM6IHVybChcIi4uLy4uL2ZvbnRzLzNyZCBQYXJ0eS9DaGVzc1ZhcmlhbnRzL0ZpZ3VyaW5lU3ltYm9sVDFCb2xkLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpLCB1cmwoXCIuLi8uLi9mb250cy8zcmQgUGFydHkvQ2hlc3NWYXJpYW50cy9GaWd1cmluZVN5bWJvbFQxQm9sZC53b2ZmXCIpIGZvcm1hdChcIndvZmZcIik7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJGaWd1cmluZVN5bWJvbFQxXCI7XG4gIHNyYzogdXJsKFwiLi4vLi4vZm9udHMvM3JkIFBhcnR5L0NoZXNzVmFyaWFudHMvRmlndXJpbmVTeW1ib2xUMS53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKSwgdXJsKFwiLi4vLi4vZm9udHMvM3JkIFBhcnR5L0NoZXNzVmFyaWFudHMvRmlndXJpbmVTeW1ib2xUMS53b2ZmXCIpIGZvcm1hdChcIndvZmZcIik7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlNhbmN0dWFyeVBsYXlncm91bmRcIjtcbiAgc3JjOiB1cmwoXCIuLi8uLi9mb250cy8zcmQgUGFydHkvU2FuY3R1YXJ5UGxheWdyb3VuZC53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKSwgdXJsKFwiLi4vLi4vZm9udHMvM3JkIFBhcnR5L1NhbmN0dWFyeVBsYXlncm91bmQud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJBbWl0YVwiO1xuICBzcmM6IHVybChcIi4uLy4uL2ZvbnRzLzNyZCBQYXJ0eS9BbWl0YS9BbWl0YS1SZWd1bGFyLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpLCB1cmwoXCIuLi8uLi9mb250cy8zcmQgUGFydHkvQW1pdGEvQW1pdGEtUmVndWxhci53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmXCIpO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbn1cbi8qKioqKioqKioqKioqKioqKioqIE1lbnUgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKioqKioqIE1lbnUgQ29udHJvbHMgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBDb250YWluZXIgVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgQ29udGFpbmVyIFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIENvbnRhaW5lciBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBIaWdobGlnaHQgVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgQW5ub3RhdGlvbiBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBWYXJpYXRpb24gVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgUGx5IFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKiogQ29udHJvbCBDb2xvcnMgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKioqIEJvYXJkIENvbG9ycyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKiogRm9udCBTaXplcyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG46cm9vdCB7XG4gIC0tYmctY29sb3I6ICNmMmYzZjc7XG4gIC0tZmctY29sb3I6ICMzODNhNDE7XG4gIC0tcmVkOiAjZTQzMDMwO1xuICAtLWdyZWVuOiAjMTlhMTg3O1xuICAtLWJsdWU6ICMzNjdiZjA7XG4gIC0tZGFyay1ibHVlOiAjMjY1YWIxO1xuICAtLW1hcm9vbjogI2I4MTc0YztcbiAgLS1wdXJwbGU6ICM4YzQyYWI7XG59XG5cbi5zaG93Y2FzZS1ib3gge1xuICBib3JkZXItcmFkaXVzOiAxcHg7XG4gIG1hcmdpbjogMnB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgbWF4LWhlaWdodDogMTgwcHg7XG59XG5cbi5wbGF5ZXItaGVhZGVyLCAucGxheWVyLWhlYWRlcjQsIC5wbGF5ZXItaGVhZGVyMywgLnBsYXllci1oZWFkZXIyLCAucGxheWVyLWhlYWRlcjEge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDFweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIHBhZGRpbmctcmlnaHQ6IDRweDtcbiAgYmFja2dyb3VuZDogI2YwZTdkMztcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEyN2RlZywgcmdiYSgyNDAsIDIzMSwgMjExLCAwLjYyMykgMCUsIHJnYmEoMTc1LCAxNzUsIDE3NSwgMC43NSkgNDQlLCAjN2U3ZTdlIDEwMCUpO1xuICBvcmRlcjogMDtcbn1cblxuLnBsYXllci1oZWFkZXIxIHtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4ucGxheWVyLWhlYWRlcjIge1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5jb2xvci1pbWFnZSB7XG4gIGhlaWdodDogMThweDtcbiAgbWFyZ2luLXJpZ2h0OiA0cHg7XG4gIG1hcmdpbi10b3A6IDRweDtcbiAgb3JkZXI6IDM7XG59XG5cbi5wbGF5ZXItaW1hZ2Uge1xuICBoZWlnaHQ6IDY4JTtcbiAgbWF4LXdpZHRoOiA3OHB4O1xufVxuXG4ucGxheWVyLWZyYW1lLCAucGxheWVyLWZyYW1lNCwgLnBsYXllci1mcmFtZTMsIC5wbGF5ZXItZnJhbWUyLCAucGxheWVyLWZyYW1lMSB7XG4gIHdpZHRoOiA5MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBvcmRlcjogMDtcbn1cblxuLnBsYXllci1mcmFtZTEge1xuICBoZWlnaHQ6IDEyMCU7XG4gIHdpZHRoOiB1bnNldDtcbn1cblxuLnBsYXllci1mcmFtZTIge1xuICBoZWlnaHQ6IDEyMCU7XG4gIHdpZHRoOiB1bnNldDtcbn1cblxuLnBsYXllci1kZXRhaWxzLCAucGxheWVyLWRldGFpbHM0LCAucGxheWVyLWRldGFpbHMzLCAucGxheWVyLWRldGFpbHMyLCAucGxheWVyLWRldGFpbHMxIHtcbiAgbWluLXdpZHRoOiAxNjBweDtcbiAgaGVpZ2h0OiBhdXRvO1xuICB3aWR0aDogMTAwJTtcbiAgb3JkZXI6IDI7XG59XG5cbi5wbGF5ZXItZGV0YWlsczEge1xuICBtYXJnaW4tbGVmdDogLTUycHg7XG59XG5cbi5wbGF5ZXItZGV0YWlsczIge1xuICBtYXJnaW4tbGVmdDogLTUycHg7XG59XG5cbi5waG90by1mcmFtZSB7XG4gIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtODclLCAtOSUpO1xufVxuXG4ucGxheWVyLW5hbWUsIC5wbGF5ZXItbmFtZVAge1xuICBtYXJnaW4tbGVmdDogMnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBvcmRlcjogMTtcbiAgbWluLXdpZHRoOiA2MCU7XG4gIHBhZGRpbmctcmlnaHQ6IDJweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBtYXJnaW4tdG9wOiAycHg7XG4gIGZvbnQtZmFtaWx5OiBcIkFtaXRhXCI7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xufVxuXG4ucGxheWVyLW5hbWVQIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBsaW5lLWhlaWdodDogMHB4O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg4cHgsIDEzcHgpO1xuICBtYXJnaW4tdG9wOiB1bnNldDtcbiAgbWluLXdpZHRoOiB1bnNldDtcbiAgbWFyZ2luLWxlZnQ6IHVuc2V0O1xufVxuXG4ucGxheWVyLWRhdGEge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiA0cHg7XG4gIG1hcmdpbi1yaWdodDogNHB4O1xuICBmb250LXNpemU6IHZhcigtLWhkckRhdGFGb250U2l6ZSk7XG59XG5cbi5wbGF5ZXItZGF0YS1ib3gge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlayerShowcase, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'player-showcase',
                templateUrl: './player-showcase.component.html',
                styleUrls: ['./player-showcase.component.scss']
            }]
    }], function () { return [{ type: src_app_services_layout_service__WEBPACK_IMPORTED_MODULE_3__["LayoutService"] }]; }, { name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], color: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], elo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], playerData: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/aria-score/aria-score.component.ts":
/*!****************************************************!*\
  !*** ./src/app/aria-score/aria-score.component.ts ***!
  \****************************************************/
/*! exports provided: AriaScore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AriaScore", function() { return AriaScore; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _common_kokopu_engine__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/kokopu-engine */ "./src/app/common/kokopu-engine.ts");
/* harmony import */ var _services_aria_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/aria.service */ "./src/app/services/aria.service.ts");
/* harmony import */ var _score_flow_score_flow_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./score-flow/score-flow.component */ "./src/app/aria-score/score-flow/score-flow.component.ts");
/* harmony import */ var _score_table_score_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./score-table/score-table.component */ "./src/app/aria-score/score-table/score-table.component.ts");
/* harmony import */ var _services_layout_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/layout.service */ "./src/app/services/layout.service.ts");








function AriaScore_score_flow_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "score-flow", 1);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "score-flow-", ctx_r0.aria.UUID, "");
} }
function AriaScore_score_table_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "score-table", 1);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "score-table-", ctx_r1.aria.UUID, "");
} }
class AriaScore {
    constructor(aria, layout) {
        this.aria = aria;
        this.layout = layout;
        this.container = null;
        this.GameScoreType = _common_kokopu_engine__WEBPACK_IMPORTED_MODULE_1__["GameScoreType"];
        this.ScoreViewType = _services_aria_service__WEBPACK_IMPORTED_MODULE_2__["ScoreViewType"];
        this.layout.attachScore(this);
        this.aria.attachScore(this);
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        this.layout.gameScoreElement = this.container = document.getElementById('score-' + this.aria.UUID);
    }
    clearSelection() {
        if (this.flowScore) {
            this.flowScore.clearSelection();
        }
        if (this.tableScore) {
            this.tableScore.clearSelection();
        }
    }
    updateSelection() {
        window.setTimeout(() => { this.selectGameScoreItem(this.aria.currentIndex); }, 5);
    }
    resize(width, height) {
        if (height == 0 || width == 0) {
            return;
        }
        if (this.container) {
            if (height <= 0) {
                this.container.style.height = 'auto';
            }
            else {
                this.container.style.height = height + 'px';
                this.container.style.overflowY = 'auto';
            }
            this.container.style.width = width + 'px';
        }
        if (this.flowScore) {
            this.flowScore.resize(width, height);
        }
        if (this.tableScore) {
            this.tableScore.resize(width, height);
        }
    }
    ignoreEvent(event) {
        event.preventDefault();
        event.stopPropagation();
    }
    selectGameScoreItem(index) {
        if (this.flowScore) {
            this.flowScore.selectGameScoreItem(index);
        }
        else if (this.tableScore) {
            this.tableScore.selectGameScoreItem(index);
            window.setTimeout(this.tableScore.updateViewSize, 100);
        }
    }
    // Navigation
    takeVariation(index) {
        this.aria.navigateToNode(index - 1);
        window.setTimeout(() => {
            if (this.aria.currentItem) {
                const item = this.aria.gameScoreItems[++this.aria.currentIndex];
                const variations = item.move.variations();
                if (variations.length > 0) {
                    // show variation 
                    console.log('Taking first variation');
                    console.log(variations[0]);
                    this.aria.makeVariantMove(0, item.move);
                    this.updateSelection();
                }
            }
        }, 200);
    }
}
AriaScore.ɵfac = function AriaScore_Factory(t) { return new (t || AriaScore)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_aria_service__WEBPACK_IMPORTED_MODULE_2__["AriaService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_layout_service__WEBPACK_IMPORTED_MODULE_5__["LayoutService"])); };
AriaScore.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AriaScore, selectors: [["aria-score"]], viewQuery: function AriaScore_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_score_flow_score_flow_component__WEBPACK_IMPORTED_MODULE_3__["ScoreFlow"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_score_table_score_table_component__WEBPACK_IMPORTED_MODULE_4__["ScoreTable"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.flowScore = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.tableScore = _t.first);
    } }, decls: 2, vars: 2, consts: [[3, "id", 4, "ngIf"], [3, "id"]], template: function AriaScore_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AriaScore_score_flow_0_Template, 1, 1, "score-flow", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AriaScore_score_table_1_Template, 1, 1, "score-table", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.aria.scoreViewType.value === ctx.ScoreViewType.Flow);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.aria.scoreViewType.value === ctx.ScoreViewType.Table);
    } }, styles: ["@font-face {\n  font-family: \"Caveat\";\n  src: url('Caveat-Bold.woff2') format(\"woff2\"), url('Caveat-Bold.woff') format(\"woff\");\n  font-weight: bold;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"Caveat\";\n  src: url('Caveat-Regular.woff2') format(\"woff2\"), url('Caveat-Regular.woff') format(\"woff\");\n  font-weight: 600;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"FigurineSymbolT1\";\n  src: url('FigurineSymbolT1Bold.woff2') format(\"woff2\"), url('FigurineSymbolT1Bold.woff') format(\"woff\");\n  font-weight: bold;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"FigurineSymbolT1\";\n  src: url('FigurineSymbolT1.woff2') format(\"woff2\"), url('FigurineSymbolT1.woff') format(\"woff\");\n  font-weight: 600;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"SanctuaryPlayground\";\n  src: url('SanctuaryPlayground.woff2') format(\"woff2\"), url('SanctuaryPlayground.woff') format(\"woff\");\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"Amita\";\n  src: url('Amita-Regular.woff2') format(\"woff2\"), url('Amita-Regular.woff2') format(\"woff\");\n  font-style: normal;\n  font-display: swap;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n[_ngcontent-%COMP%]:root {\n  --bg-color: #f2f3f7;\n  --fg-color: #383a41;\n  --red: #e43030;\n  --green: #19a187;\n  --blue: #367bf0;\n  --dark-blue: #265ab1;\n  --maroon: #b8174c;\n  --purple: #8c42ab;\n}\nscore-flow[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\nscore-table[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column nowrap;\n  width: 100%;\n  justify-content: space-around;\n  align-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMuc2NzcyIsInNyYy9hc3NldHMvc2Nzcy9tb2R1bGVzL19mb250cy5zY3NzIiwic3JjL2FwcC9hcmlhLXNjb3JlL2FyaWEtc2NvcmUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOEVBQUE7QUNBQTtFQUNJLHFCQUFBO0VBQ0EscUZBQUE7RUFFQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNDSjtBREVBO0VBQ0kscUJBQUE7RUFDQSwyRkFBQTtFQUVBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0RKO0FESUE7RUFDRSwrQkFBQTtFQUNBLHVHQUFBO0VBRUEsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDSEY7QURNQTtFQUNFLCtCQUFBO0VBQ0EsK0ZBQUE7RUFFQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNMRjtBRFFBO0VBQ0Usa0NBQUE7RUFDQSxxR0FBQTtFQUVBLGtCQUFBO0VBQ0Esa0JBQUE7QUNQRjtBRFdBO0VBQ0Usb0JBQUE7RUFDQSwwRkFBQTtFQUVBLGtCQUFBO0VBQ0Esa0JBQUE7QUNWRjtBRkRBLCtFQUFBO0FBR0Esa0ZBQUE7QUFLQSwrRUFBQTtBQVVBLCtFQUFBO0FBTUEsK0VBQUE7QUFNQSwrRUFBQTtBQU1BLGdGQUFBO0FBS0EsK0VBQUE7QUFLQSx5RUFBQTtBQUtBLHlFQUFBO0FBSUEsdUVBQUE7QUFRQSxxRUFBQTtBQXdCQTtFQUNFLG1CQUFBO0VBQ0EsbUJBQUE7RUFFQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FFekVGO0FBNURBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUErREY7QUE1REE7RUFDSSxhQUFBO0VBQ0Esd0JBQUE7RUFDQSxXQUFBO0VBQ0EsNkJBQUE7RUFDQSxxQkFBQTtBQStESiIsImZpbGUiOiJzcmMvYXBwL2FyaWEtc2NvcmUvYXJpYS1zY29yZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cblxuQGltcG9ydCBcIi4vYXNzZXRzL3Njc3MvbW9kdWxlcy9fZm9udHMuc2Nzc1wiO1xuJGdhbWVzY29yZS1mYW1pbHk6IFwiRmlndXJpbmVTeW1ib2xUMVwiO1xuJGdhbWVzY29yZS1oaWdobGlnaHQ6ICM1ODU4NThmZjtcbiRnYW1lc2NvcmUtZm9yZWdyb3VuZDogd2hpdGU7XG5cbiRyZWQ6ICNlNDMwMzA7XG4kZ3JlZW46ICMxOWExODc7XG4kbGlnaHQtYmx1ZTogIzAwZmZmZmZmO1xuJGJsdWU6ICMzNjdiZjA7XG4kZGFyay1ibHVlOiAjMjY1YWIxO1xuJG1hcm9vbjogI2I4MTc0YztcbiRwdXJwbGU6ICM4YzQyYWI7XG5cbi8vIE1haW4gQVJJQSBDb2xvciBFbGVtZW50IFZhcmlhYmxlc1xuJHRleHRDb2xvcjogdmFyKC0tdGV4dENvbG9yKTsgLy8gTWFpbiBUZXh0IENvbG9yXG4kdGV4dENvbG9yQXR0ZW50aW9uOiB2YXIoLS10ZXh0Q29sb3JBdHRlbnRpb24pOyAvLyBBdHRlbnRpb24gdGV4dFxuJHRleHRDb2xvclJlbW92ZTogdmFyKC0tdGV4dENvbG9yUmVtb3ZlKTsgLy8gUmVtb3ZlL0RlbGV0ZS9DbG9zZVxuJHRleHRDb2xvckFkZDogdmFyKC0tdGV4dENvbG9yQWRkKTsgLy8gQWRkL0NyZWF0ZS9PcGVuXG4kdGV4dENvbG9yQWN0aXZlOiB2YXIoLS10ZXh0Q29sb3JBY3RpdmUpOyAvLyBBZGQvQ3JlYXRlL09wZW5cbiRiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kKTsgLy8gTWFpbiBiYWNrZ3JvdW5kIENvbG9yXG4kYmdDb250YWluZXI6IHZhcigtLWJnQ29udGFpbmVyKTsgLy8gYmFja2dyb3VuZCBvZiBDb250YWluZXJzXG4kYmdNZW51OiB2YXIoLS1iZ01lbnUpOyAvLyBiYWNrZ3JvdW5kIG9mIE1lbnVzXG4kYmdJdGVtOiB2YXIoLS1iZ0l0ZW0pOyAvLyBiYWNrZ3JvdW5kIG9mIEl0ZW1zXG5cbi8vIENvbnRleHQgTWVudVxuJGJnQ29udGV4dDogdmFyKC0tYmdDb250ZXh0KTsgLy8gYmFja2dyb3VuZCBvZiBDb250ZXh0IE1lbnVcbiR0ZXh0Q29sb3JDb250ZXh0OiB2YXIoLS10ZXh0Q29sb3JDb250ZXh0KTsgLy8gdGV4dCBjb2xvciBDb250ZXh0IE1lbnVcbiRib3JkZXJDb250ZXh0OiB2YXIoLS1ib3JkZXJDb250ZXh0KTsgLy8gYm9yZGVyIENvbnRleHQgTWVudVxuJG92ZXJsYXlDb250ZXh0QmFja2dyb3VuZDogdmFyKFxuICAtLW92ZXJsYXlDb250ZXh0QmFja2dyb3VuZFxuKTsgLy8gQ29udGV4dCBNZW51IE92ZXJsYXkgYmFja2dyb3VuZCBtYWluXG4kb3ZlcmxheUNvbnRleHRCYWNrZ3JvdW5kR3JhZGllbnQ6IHZhcihcbiAgLS1vdmVybGF5Q29udGV4dEJhY2tncm91bmRHcmFkaWVudFxuKTsgLy8gQ29udGV4dCBNZW51IGJhY2tncm91bmQgZ3JhZGllbnRcblxuXG5cbi8qKioqKioqKioqKioqKioqKioqIE1lbnUgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4kbWVCYWNrZ3JvdW5kOiB2YXIoLS1tZUJhY2tncm91bmQpO1xuXG4vKioqKioqKioqKioqKioqKioqKioqKioqIE1lbnUgQ29udHJvbHMgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuJGNzRmlsbDogdmFyKC0tY3NGaWxsKTtcbiRjc0FjY2VudDogdmFyKC0tY3NBY2NlbnQpO1xuJGNzQWNjZW50MjogdmFyKC0tY3NBY2NlbnQyKTtcblxuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBDb250YWluZXIgVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiRnc1RleHRDb2xvcjogdmFyKC0tZ3NUZXh0Q29sb3IpOyAvLyBUZXh0IGNvbG9yIGZvciBnYW1lIHNjb3JlXG4kZ3NCYWNrZ3JvdW5kOiB2YXIoLS1nc0JhY2tncm91bmQpOyAvLyBiYWNrZ3JvdW5kIG9mIENvbnRhaW5lcnNcbiRnc0xpc3RCYWNrZ3JvdW5kOiB2YXIoLS1nc0xpc3RCYWNrZ3JvdW5kKTsgLy8gbGlzdCBiYWNrZ3JvdW5kIG9mIGdhbWUgc2NvcmVcbiRnc0JvcmRlcjogdmFyKC0tZ3NCb3JkZXIpOyAvLyBiYWNrZ3JvdW5kIG9mIE1lbnVzXG4kZ3NUZXh0U2l6ZTogdmFyKC0tZ3NUZXh0U2l6ZSk7IC8vIGJhY2tncm91bmQgb2YgTWVudXNcbiRnc0ZvbnRGYW1pbHk6IHZhcigtLWdzRm9udEZhbWlseSk7IC8vIHNjb3JlIGZvbnRcbiRnc1RhYmxlSXRlbVdpZHRoOiB2YXIoLS1nc1RhYmxlSXRlbVdpZHRoKTsgLy8gd2lkdGggb2Ygc2NvcmUgaXRlbSBpbiB0YWJsZSBsYXlvdXRcbiRnc1RhYmxlUGx5V2lkdGg6IHZhcigtLWdzVGFibGVQbHlXaWR0aCk7IC8vIHdpZHRoIG9mIHBseSBlbGVtZW50IGluIHRhYmxlIGxheW91dFxuXG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIENvbnRhaW5lciBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuJGdzVGV4dENvbG9yTVc6IHZhcigtLWdzVGV4dENvbG9yTVcpOyAvLyBUZXh0IGNvbG9yIGZvciBnYW1lIHNjb3JlXG4kZ3NCYWNrZ3JvdW5kTVc6IHZhcigtLWdzQmFja2dyb3VuZE1XKTsgLy8gYmFja2dyb3VuZCBvZiBDb250YWluZXJzXG4kZ3NCb3JkZXJNVzogdmFyKC0tZ3NCb3JkZXJNVyk7IC8vIGJhY2tncm91bmQgb2YgTWVudXNcbiRnc1RleHRTaXplTVc6IHZhcigtLWdzVGV4dFNpemVNVyk7IC8vIGJhY2tncm91bmQgb2YgTWVudXNcblxuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBDb250YWluZXIgVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiRnc1RleHRDb2xvck1COiB2YXIoLS1nc1RleHRDb2xvck1CKTsgLy8gVGV4dCBjb2xvciBmb3IgZ2FtZSBzY29yZVxuJGdzQmFja2dyb3VuZE1COiB2YXIoLS1nc0JhY2tncm91bmRNQik7IC8vIGJhY2tncm91bmQgb2YgQ29udGFpbmVyc1xuJGdzQm9yZGVyTUI6IHZhcigtLWdzQm9yZGVyTUIpOyAvLyBiYWNrZ3JvdW5kIG9mIE1lbnVzXG4kZ3NUZXh0U2l6ZU1COiB2YXIoLS1nc1RleHRTaXplTUIpOyAvLyBiYWNrZ3JvdW5kIG9mIE1lbnVzXG5cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgSGlnaGxpZ2h0IFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4kZ3NUZXh0Q29sb3JIRzogdmFyKC0tZ3NUZXh0Q29sb3JIRyk7IC8vIFRleHQgY29sb3IgZm9yIGhpZ2hsaWdodFxuJGdzQW5ub3RhdGlvbkNvbG9ySEc6IHZhcigtLWdzQW5ub3RhdGlvbkNvbG9ySEcpOyAvLyBBbm5vdGF0aW9uL0NvbW1lbnQgY29sb3IgZm9yIGhpZ2hsaWdodFxuJGdzQmFja2dyb3VuZEhHOiB2YXIoLS1nc0JhY2tncm91bmRIRyk7IC8vIGJhY2tncm91bmQgZm9yIGhpZ2hsaWdodFxuJGdzQm9yZGVySEc6IHZhcigtLWdzQm9yZGVySEcpOyAvLyBib3JkZXIgZm9yIGhpZ2hsaWdodFxuXG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIEFubm90YXRpb24gVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiRnc1RleHRDb2xvckFOOiB2YXIoLS1nc1RleHRDb2xvckFOKTsgLy8gVGV4dCBjb2xvciBmb3IgaGlnaGxpZ2h0XG4kZ3NCYWNrZ3JvdW5kQU46IHZhcigtLWdzQmFja2dyb3VuZEFOKTsgLy8gYmFja2dyb3VuZCBmb3IgaGlnaGxpZ2h0XG4kZ3NCb3JkZXJBTjogdmFyKC0tZ3NCb3JkZXJBTik7IC8vIGJvcmRlciBmb3IgaGlnaGxpZ2h0XG5cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgVmFyaWF0aW9uIFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4kZ3NUZXh0Q29sb3JWQTogdmFyKC0tZ3NUZXh0Q29sb3JWQSk7IC8vIFRleHQgY29sb3IgZm9yIGhpZ2hsaWdodFxuJGdzQmFja2dyb3VuZFZBOiB2YXIoLS1nc0JhY2tncm91bmRWQSk7IC8vIGJhY2tncm91bmQgZm9yIGhpZ2hsaWdodFxuJGdzQm9yZGVyVkE6IHZhcigtLWdzQm9yZGVyVkEpOyAvLyBib3JkZXIgZm9yIGhpZ2hsaWdodFxuXG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIFBseSBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuJGdzVGV4dENvbG9yUEM6IHZhcigtLWdzVGV4dENvbG9yUEMpOyAvLyBUZXh0IGNvbG9yIGZvciBnYW1lIHNjb3JlIHBseVxuJGdzQmFja2dyb3VuZFBDOiB2YXIoLS1nc0JhY2tncm91bmRQQyk7IC8vIGJhY2tncm91bmQgZm9yIGdhbWUgc2NvcmUgcGx5XG4kZ3NCb3JkZXJQQzogdmFyKC0tZ3NCb3JkZXJQQyk7IC8vIGJvcmRlciBmb3IgZ2FtZSBzY29yZSBwbHlcblxuLyoqKioqKioqKioqKioqKioqKioqIENvbnRyb2wgQ29sb3JzICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiRjc0JhY2tncm91bmQ6IHZhcigtLWNzQmFja2dyb3VuZCk7IC8vIGJhY2tncm91bmQgZm9yIGNvbnRyb2xzXG4kY3NDb2xvcjogdmFyKC0tY3NDb2xvcik7IC8vIGNvbnRyb2xzIGNvbG9yIChmb3JlZ3JvdW5kKVxuXG4vKioqKioqKioqKioqKioqKioqKiogQm9hcmQgQ29sb3JzICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiRib2FyZEJHRGFyazogdmFyKC0tYm9hcmRCR0RhcmspOyAvLyBib2FyZCBkYXJrIHRpbGVcbiRib2FyZEJHTGlnaHQ6IHZhcigtLWJvYXJkQkdMaWdodCk7IC8vIGJvYXJkIGxpZ2h0IHRpbGVcbiRib2FyZExhYmVsTGlnaHQ6IHZhcigtLWJvYXJkTGFiZWxMaWdodCk7IC8vIGJvYXJkIGxpZ2h0IGxhYmVsXG4kYm9hcmRMYWJlbERhcms6IHZhcigtLWJvYXJkTGFiZWxEYXJrKTsgLy8gYm9hcmQgZGFyayBsYWJlbFxuXG5cblxuLyoqKioqKioqKioqKioqKioqKioqIEZvbnQgU2l6ZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuJGdzRm9udFNpemU6IHZhcigtLWdzRm9udFNpemUpOyAvLyBib2FyZCBkYXJrIHRpbGVcbiRnc0ZvbnRTaXplQU46IHZhcigtLWdzRm9udFNpemVBTik7IC8vIGJvYXJkIGxpZ2h0IHRpbGVcbiRnc0ZvbnRTaXplSEc6IHZhcigtLWdzRm9udFNpemVIRyk7IC8vIGJvYXJkIGxpZ2h0IGxhYmVsXG4kZ3NGb250U2l6ZVZBOiB2YXIoLS1nc0ZvbnRTaXplVkEpOyAvLyBib2FyZCBkYXJrIGxhYmVsXG4kZ3NGb250U2l6ZVBDOiB2YXIoLS1nc0ZvbnRTaXplUEMpOyAvLyBib2FyZCBkYXJrIGxhYmVsXG4kaGRyRGF0YUZvbnRTaXplOiB2YXIoLS1oZHJEYXRhRm9udFNpemUpOyAvLyBzaXplIG9mIHBsYXllciBzaG93Y2FzZSBkYXRhXG4kaGRyTmFtZUZvbnRTaXplOiB2YXIoLS1oZHJOYW1lRm9udFNpemUpOyAvLyBzaXplIG9mIHBsYXllciBzaG93Y2FzZSBOYW1lXG4kaGRyVGl0bGVGb250U2l6ZTogdmFyKC0taGRyVGl0bGVGb250U2l6ZSk7IC8vIHNpemUgb2YgcGxheWVyIHNob3djYXNlIGRhdGFcbiRoZHJWYXJpYW50Rm9udFNpemU6IHZhcigtLWhkclZhcmlhbnRGb250U2l6ZSk7IC8vIHNpemUgb2YgcGxheWVyIHNob3djYXNlIE5hbWVcbiRoZHJNYXRjaERhdGFGb250U2l6ZTogdmFyKC0taGRyTWF0Y2hEYXRhRm9udFNpemUpOyAvLyBzaXplIG9mIHBsYXllciBzaG93Y2FzZSBOYW1lXG4kaGRyT3BlbmluZ0ZvbnRTaXplOiB2YXIoLS1oZHJNYXRjaERhdGFGb250U2l6ZSk7IC8vIHNpemUgb2YgcGxheWVyIHNob3djYXNlIE5hbWVcbiRoZHJSZXN1bHRGb250U2l6ZTogdmFyKC0taGRyUmVzdWx0Rm9udFNpemUpOyAvLyBzaXplIG9mIHBsYXllciBzaG93Y2FzZSBOYW1lXG4kaGRyUm91bmRGb250U2l6ZTogdmFyKC0taGRyUm91bmRGb250U2l6ZSk7IC8vIHNpemUgb2YgcGxheWVyIHNob3djYXNlIE5hbWVcblxuLy8gR2VuZXJhbCBzdHVmZlxuJHRleHQtY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xuJGJnLW91dGVyOiB2YXIoLS1iZy1vdXRlcik7XG4kYmctaW5uZXI6IHZhcigtLWJnLWlubmVyKTtcblxuJGJnLWNvbG9yOiAjZjJmM2Y3O1xuJGZnLWNvbG9yOiAjMzgzYTQxO1xuXG4kZ2xvdy1zaGFkb3c6IDAgMCAwLjVlbSB0cmFuc3BhcmVudGl6ZSgkYmx1ZSwgMC4zKTtcbjpyb290IHtcbiAgLS1iZy1jb2xvcjogI3skYmctY29sb3J9O1xuICAtLWZnLWNvbG9yOiAjeyRmZy1jb2xvcn07XG5cbiAgLS1yZWQ6ICN7JHJlZH07XG4gIC0tZ3JlZW46ICN7JGdyZWVufTtcbiAgLS1ibHVlOiAjeyRibHVlfTtcbiAgLS1kYXJrLWJsdWU6ICN7JGRhcmstYmx1ZX07XG4gIC0tbWFyb29uOiAjeyRtYXJvb259O1xuICAtLXB1cnBsZTogI3skcHVycGxlfTtcbn1cbiIsIkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnQ2F2ZWF0JztcbiAgICBzcmM6IHVybCgnLi4vLi4vZm9udHMvQm9sZC9DYXZlYXQtQm9sZC53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcbiAgICAgICAgdXJsKCcuLi8uLi9mb250cy9Cb2xkL0NhdmVhdC1Cb2xkLndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC1kaXNwbGF5OiBzd2FwO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ0NhdmVhdCc7XG4gICAgc3JjOiB1cmwoJy4uLy4uL2ZvbnRzL1JlZ3VsYXIvQ2F2ZWF0LVJlZ3VsYXIud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXG4gICAgICAgIHVybCgnLi4vLi4vZm9udHMvUmVndWxhci9DYXZlYXQtUmVndWxhci53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC1kaXNwbGF5OiBzd2FwO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdGaWd1cmluZVN5bWJvbFQxJztcbiAgc3JjOiB1cmwoJy4uLy4uL2ZvbnRzLzNyZCBQYXJ0eS9DaGVzc1ZhcmlhbnRzL0ZpZ3VyaW5lU3ltYm9sVDFCb2xkLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxuICAgICAgdXJsKCcuLi8uLi9mb250cy8zcmQgUGFydHkvQ2hlc3NWYXJpYW50cy9GaWd1cmluZVN5bWJvbFQxQm9sZC53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnRmlndXJpbmVTeW1ib2xUMSc7XG4gIHNyYzogdXJsKCcuLi8uLi9mb250cy8zcmQgUGFydHkvQ2hlc3NWYXJpYW50cy9GaWd1cmluZVN5bWJvbFQxLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxuICAgICAgdXJsKCcuLi8uLi9mb250cy8zcmQgUGFydHkvQ2hlc3NWYXJpYW50cy9GaWd1cmluZVN5bWJvbFQxLndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ1NhbmN0dWFyeVBsYXlncm91bmQnO1xuICBzcmM6IHVybCgnLi4vLi4vZm9udHMvM3JkIFBhcnR5L1NhbmN0dWFyeVBsYXlncm91bmQud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXG4gICAgICB1cmwoJy4uLy4uL2ZvbnRzLzNyZCBQYXJ0eS9TYW5jdHVhcnlQbGF5Z3JvdW5kLndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG59XG5cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnQW1pdGEnO1xuICBzcmM6IHVybCgnLi4vLi4vZm9udHMvM3JkIFBhcnR5L0FtaXRhL0FtaXRhLVJlZ3VsYXIud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXG4gICAgICB1cmwoJy4uLy4uL2ZvbnRzLzNyZCBQYXJ0eS9BbWl0YS9BbWl0YS1SZWd1bGFyLndvZmYyJykgZm9ybWF0KCd3b2ZmJyk7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xufSIsIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJDYXZlYXRcIjtcbiAgc3JjOiB1cmwoXCIuLi8uLi9mb250cy9Cb2xkL0NhdmVhdC1Cb2xkLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpLCB1cmwoXCIuLi8uLi9mb250cy9Cb2xkL0NhdmVhdC1Cb2xkLndvZmZcIikgZm9ybWF0KFwid29mZlwiKTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkNhdmVhdFwiO1xuICBzcmM6IHVybChcIi4uLy4uL2ZvbnRzL1JlZ3VsYXIvQ2F2ZWF0LVJlZ3VsYXIud29mZjJcIikgZm9ybWF0KFwid29mZjJcIiksIHVybChcIi4uLy4uL2ZvbnRzL1JlZ3VsYXIvQ2F2ZWF0LVJlZ3VsYXIud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJGaWd1cmluZVN5bWJvbFQxXCI7XG4gIHNyYzogdXJsKFwiLi4vLi4vZm9udHMvM3JkIFBhcnR5L0NoZXNzVmFyaWFudHMvRmlndXJpbmVTeW1ib2xUMUJvbGQud29mZjJcIikgZm9ybWF0KFwid29mZjJcIiksIHVybChcIi4uLy4uL2ZvbnRzLzNyZCBQYXJ0eS9DaGVzc1ZhcmlhbnRzL0ZpZ3VyaW5lU3ltYm9sVDFCb2xkLndvZmZcIikgZm9ybWF0KFwid29mZlwiKTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkZpZ3VyaW5lU3ltYm9sVDFcIjtcbiAgc3JjOiB1cmwoXCIuLi8uLi9mb250cy8zcmQgUGFydHkvQ2hlc3NWYXJpYW50cy9GaWd1cmluZVN5bWJvbFQxLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpLCB1cmwoXCIuLi8uLi9mb250cy8zcmQgUGFydHkvQ2hlc3NWYXJpYW50cy9GaWd1cmluZVN5bWJvbFQxLndvZmZcIikgZm9ybWF0KFwid29mZlwiKTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiU2FuY3R1YXJ5UGxheWdyb3VuZFwiO1xuICBzcmM6IHVybChcIi4uLy4uL2ZvbnRzLzNyZCBQYXJ0eS9TYW5jdHVhcnlQbGF5Z3JvdW5kLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpLCB1cmwoXCIuLi8uLi9mb250cy8zcmQgUGFydHkvU2FuY3R1YXJ5UGxheWdyb3VuZC53b2ZmXCIpIGZvcm1hdChcIndvZmZcIik7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkFtaXRhXCI7XG4gIHNyYzogdXJsKFwiLi4vLi4vZm9udHMvM3JkIFBhcnR5L0FtaXRhL0FtaXRhLVJlZ3VsYXIud29mZjJcIikgZm9ybWF0KFwid29mZjJcIiksIHVybChcIi4uLy4uL2ZvbnRzLzNyZCBQYXJ0eS9BbWl0YS9BbWl0YS1SZWd1bGFyLndvZmYyXCIpIGZvcm1hdChcIndvZmZcIik7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xufVxuLyoqKioqKioqKioqKioqKioqKiogTWVudSAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqKioqKiogTWVudSBDb250cm9scyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIENvbnRhaW5lciBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBDb250YWluZXIgVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgQ29udGFpbmVyIFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIEhpZ2hsaWdodCBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBBbm5vdGF0aW9uIFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIFZhcmlhdGlvbiBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBQbHkgVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqKiBDb250cm9sIENvbG9ycyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKiogQm9hcmQgQ29sb3JzICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqKiBGb250IFNpemVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbjpyb290IHtcbiAgLS1iZy1jb2xvcjogI2YyZjNmNztcbiAgLS1mZy1jb2xvcjogIzM4M2E0MTtcbiAgLS1yZWQ6ICNlNDMwMzA7XG4gIC0tZ3JlZW46ICMxOWExODc7XG4gIC0tYmx1ZTogIzM2N2JmMDtcbiAgLS1kYXJrLWJsdWU6ICMyNjVhYjE7XG4gIC0tbWFyb29uOiAjYjgxNzRjO1xuICAtLXB1cnBsZTogIzhjNDJhYjtcbn1cblxuc2NvcmUtZmxvdyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbnNjb3JlLXRhYmxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xuICB3aWR0aDogMTAwJTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AriaScore, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'aria-score',
                templateUrl: './aria-score.component.html',
                styleUrls: ['./aria-score.component.scss']
            }]
    }], function () { return [{ type: _services_aria_service__WEBPACK_IMPORTED_MODULE_2__["AriaService"] }, { type: _services_layout_service__WEBPACK_IMPORTED_MODULE_5__["LayoutService"] }]; }, { flowScore: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_score_flow_score_flow_component__WEBPACK_IMPORTED_MODULE_3__["ScoreFlow"]]
        }], tableScore: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_score_table_score_table_component__WEBPACK_IMPORTED_MODULE_4__["ScoreTable"]]
        }] }); })();


/***/ }),

/***/ "./src/app/aria-score/score-flow/flow-item/flow-item.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/aria-score/score-flow/flow-item/flow-item.component.ts ***!
  \************************************************************************/
/*! exports provided: FlowItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlowItem", function() { return FlowItem; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _common_kokopu_engine__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/kokopu-engine */ "./src/app/common/kokopu-engine.ts");
/* harmony import */ var _services_aria_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/aria.service */ "./src/app/services/aria.service.ts");
/* harmony import */ var _services_themes_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/themes.service */ "./src/app/services/themes.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






const _c0 = ["gsiPly"];
function FlowItem_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("contextmenu", function FlowItem_div_5_Template_div_contextmenu_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.aria.openVariation(ctx_r4.data); })("click", function FlowItem_div_5_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.clickMove(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("gsi-move ", ctx_r2.typeName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.score, "");
} }
function FlowItem_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FlowItem_div_6_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.clickMove(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("gsi-comment ", ctx_r3.typeName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.data.move.comment(), "");
} }
// @ts-ignore
class FlowItem {
    constructor(aria, themes) {
        // use data to actually set type
        this.aria = aria;
        this.themes = themes;
        this.data = new _common_kokopu_engine__WEBPACK_IMPORTED_MODULE_1__["GameScoreItem"]();
        this.typeName = '';
        // visual nodes
        this.ply = '';
        this.score = '';
        this.GameScoreType = _common_kokopu_engine__WEBPACK_IMPORTED_MODULE_1__["GameScoreType"];
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
                    showing = this.aria.showingPly.value;
                }
                else {
                    showing = this.aria.showingHalfPly.value;
                }
                if (!showing) {
                    this.gsiPly.nativeElement.remove();
                }
                else {
                    this.ply = this.data.move.fullMoveNumber().toString() + '.';
                }
            }
            if (this.data.move) {
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
    }
    ngAfterViewInit() {
        this.updateTypeName();
        if (this.gsiPly && this.data.move) {
            let showing = false;
            if (this.isFullPly()) {
                showing = this.aria.showingPly.value;
            }
            else {
                showing = this.aria.showingHalfPly.value;
            }
            if (!showing) {
                this.gsiPly.nativeElement.remove();
            }
            else {
                window.setTimeout(() => { this.ply = this.data.move.fullMoveNumber().toString() + '.'; }, 10);
            }
        }
    }
    showPly() {
        if (this.data) {
            if (this.isFullPly()) {
                return this.aria.showingPly.value;
            }
            return this.aria.showingHalfPly.value;
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
        if (this.data.move) {
            const variations = this.data.move.variations();
            if (variations.length > 0) {
                this.aria.displayVariations(this.data);
                // show variation 
                console.log('Taking first variation');
                console.log(variations[0]);
            }
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
            if (this.data.move) {
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
}
FlowItem.ɵfac = function FlowItem_Factory(t) { return new (t || FlowItem)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_aria_service__WEBPACK_IMPORTED_MODULE_2__["AriaService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_themes_service__WEBPACK_IMPORTED_MODULE_3__["ThemeService"])); };
FlowItem.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FlowItem, selectors: [["flow-item"]], viewQuery: function FlowItem_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.gsiPly = _t.first);
    } }, inputs: { data: "data" }, outputs: { typeName: "typeName", ply: "ply", score: "score" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 7, vars: 9, consts: [["domElement", ""], [3, "contextmenu", "click"], ["gsiPly", ""], [3, "class", "contextmenu", "click", 4, "ngIf"], [3, "class", "click", 4, "ngIf"], [3, "click"]], template: function FlowItem_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", null, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("contextmenu", function FlowItem_Template_div_contextmenu_2_listener() { return ctx.aria.openVariation(ctx.data); })("click", function FlowItem_Template_div_click_2_listener() { return ctx.clickMove(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, FlowItem_div_5_Template, 2, 4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, FlowItem_div_6_Template, 2, 4, "div", 4);
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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: ["@font-face {\n  font-family: \"Caveat\";\n  src: url('Caveat-Bold.woff2') format(\"woff2\"), url('Caveat-Bold.woff') format(\"woff\");\n  font-weight: bold;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"Caveat\";\n  src: url('Caveat-Regular.woff2') format(\"woff2\"), url('Caveat-Regular.woff') format(\"woff\");\n  font-weight: 600;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"FigurineSymbolT1\";\n  src: url('FigurineSymbolT1Bold.woff2') format(\"woff2\"), url('FigurineSymbolT1Bold.woff') format(\"woff\");\n  font-weight: bold;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"FigurineSymbolT1\";\n  src: url('FigurineSymbolT1.woff2') format(\"woff2\"), url('FigurineSymbolT1.woff') format(\"woff\");\n  font-weight: 600;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"SanctuaryPlayground\";\n  src: url('SanctuaryPlayground.woff2') format(\"woff2\"), url('SanctuaryPlayground.woff') format(\"woff\");\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"Amita\";\n  src: url('Amita-Regular.woff2') format(\"woff2\"), url('Amita-Regular.woff2') format(\"woff\");\n  font-style: normal;\n  font-display: swap;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n[_ngcontent-%COMP%]:root {\n  --bg-color: #f2f3f7;\n  --fg-color: #383a41;\n  --red: #e43030;\n  --green: #19a187;\n  --blue: #367bf0;\n  --dark-blue: #265ab1;\n  --maroon: #b8174c;\n  --purple: #8c42ab;\n}\n.gsi-container[_ngcontent-%COMP%] {\n  display: inline-flex;\n  line-height: var(--gsFontSize);\n  margin: 2px;\n  padding-left: 2px;\n}\n.gsi-move[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  color: var(--gsTextColor);\n  font-size: var(--gsFontSize);\n  font-family: var(--gsFontFamily);\n  background: var(--gsBackground);\n}\n.gsi-ply[_ngcontent-%COMP%] {\n  color: var(--gsTextColor);\n  font-weight: bold;\n  font-size: var(--gsFontSizePC);\n  background: var(--gsBackgroundPC);\n}\n.gsi-comment[_ngcontent-%COMP%] {\n  color: var(--gsTextColorAN);\n  margin-left: 4px;\n  font-size: var(--gsFontSizeAN);\n  background: var(--gsBackgroundAN);\n}\n.Current[_ngcontent-%COMP%] {\n  background: var(--gsBackgroundHG);\n  color: var(--gsTextColorHG);\n  border: var(--gsBorderHG);\n  font-size: var(--gsFontSizeHG);\n  line-height: var(--gsFontSizeHG);\n}\n.Current.gsi-comment[_ngcontent-%COMP%] {\n  color: var(--gsAnnotationColorHG);\n}\n.Current.gsi-ply[_ngcontent-%COMP%] {\n  color: #00d4fa;\n}\n.Current.Variation.gsi-container[_ngcontent-%COMP%] {\n  border: #00d4fa 2px dashed;\n}\n.Current.Branched.gsi-container[_ngcontent-%COMP%] {\n  border: #00d4fa 2px dashed;\n}\n.Current.Branched.Variation.gsi-container[_ngcontent-%COMP%] {\n  border: #00d4fa 2px dashed;\n}\n.Branched.Variation.gsi-container[_ngcontent-%COMP%] {\n  border: 2px lightcoral dashed;\n}\n.Branched.gsi-container[_ngcontent-%COMP%] {\n  border: 2px lightcoral dashed;\n}\n\n.Group.gsi-container[_ngcontent-%COMP%] {\n  color: var(--gsTextColor);\n}\n.Group.gsi-container-hg[_ngcontent-%COMP%] {\n  background: var(--gsBackgroundHG);\n  border: var(--gsBorderHG);\n  line-height: var(--gsFontSize);\n}\n.Group.gsi-move[_ngcontent-%COMP%] {\n  padding-left: 2px;\n  line-height: var(--gsFontSize);\n}\n.Group.gsi-ply[_ngcontent-%COMP%] {\n  background: var(--gsBackgroundPC);\n  border-radius: 2px;\n  margin-right: 2px;\n  border: var(--gsBorderAN);\n  font-size: var(--gsFontSize);\n  line-height: var(--gsFontSize);\n}\n.Group.gsi-ply-highlight[_ngcontent-%COMP%] {\n  background: var(--gsBackgroundHG);\n  color: var(--gsTextColorHG);\n  border: var(--gsBorderHG);\n  line-height: var(--gsFontSize);\n}\n\n.Annotation.gsi-container[_ngcontent-%COMP%] {\n  color: var(--gsTextColor);\n  line-height: var(--gsTextSize);\n}\n.Annotation.gsi-container-hg[_ngcontent-%COMP%] {\n  background: var(--gsBackgroundHG);\n  border: var(--gsBorderHG);\n  line-height: var(--gsTextSize);\n}\n.Annotation.gsi-move[_ngcontent-%COMP%] {\n  padding-left: 2px;\n  line-height: var(--gsTextSize);\n}\n.Annotation.gsi-ply[_ngcontent-%COMP%] {\n  background: var(--gsBackgroundAN);\n  border-radius: 2px;\n  border: var(--gsBorderAN);\n  font-size: var(--gsTextSize);\n  line-height: var(--gsTextSize);\n}\n.Annotation.gsi-ply-highlight[_ngcontent-%COMP%] {\n  background: var(--gsBackgroundHG);\n  color: var(--gsTextColorHG);\n  border: var(--gsBorderHG);\n  line-height: var(--gsTextSize);\n}\n.Annotation.gsi-comment[_ngcontent-%COMP%] {\n  padding-left: 3px;\n  padding-right: 2px;\n  margin-left: 3px;\n  margin-right: 2px;\n  line-height: var(--gsTextSize);\n}\n\n.Variation.gsi-container[_ngcontent-%COMP%] {\n  border: white dashed 2px;\n  background: var(--gsBackground);\n  color: var(--gsTextColor);\n  padding: 2px;\n}\n.Variation.gsi-move[_ngcontent-%COMP%] {\n  padding-left: 2px;\n  line-height: var(--gsTextSize);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMuc2NzcyIsInNyYy9hc3NldHMvc2Nzcy9tb2R1bGVzL19mb250cy5zY3NzIiwic3JjL2FwcC9hcmlhLXNjb3JlL3Njb3JlLWZsb3cvZmxvdy1pdGVtL2Zsb3ctaXRlbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4RUFBQTtBQ0FBO0VBQ0kscUJBQUE7RUFDQSxxRkFBQTtFQUVBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0NKO0FERUE7RUFDSSxxQkFBQTtFQUNBLDJGQUFBO0VBRUEsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDREo7QURJQTtFQUNFLCtCQUFBO0VBQ0EsdUdBQUE7RUFFQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNIRjtBRE1BO0VBQ0UsK0JBQUE7RUFDQSwrRkFBQTtFQUVBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0xGO0FEUUE7RUFDRSxrQ0FBQTtFQUNBLHFHQUFBO0VBRUEsa0JBQUE7RUFDQSxrQkFBQTtBQ1BGO0FEV0E7RUFDRSxvQkFBQTtFQUNBLDBGQUFBO0VBRUEsa0JBQUE7RUFDQSxrQkFBQTtBQ1ZGO0FGREEsK0VBQUE7QUFHQSxrRkFBQTtBQUtBLCtFQUFBO0FBVUEsK0VBQUE7QUFNQSwrRUFBQTtBQU1BLCtFQUFBO0FBTUEsZ0ZBQUE7QUFLQSwrRUFBQTtBQUtBLHlFQUFBO0FBS0EseUVBQUE7QUFJQSx1RUFBQTtBQVFBLHFFQUFBO0FBd0JBO0VBQ0UsbUJBQUE7RUFDQSxtQkFBQTtFQUVBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUV6RUY7QUE1REE7RUFDRSxvQkFBQTtFQUNBLDhCRm1HVztFRWxHWCxXQUFBO0VBQ0EsaUJBQUE7QUErREY7QUE1REE7RUFDRSxtQkFBQTtFQUNBLHlCRnFDWTtFRXBDWiw0QkYyRlc7RUUxRlgsZ0NGd0NhO0VFdkNiLCtCRm1DYTtBRTRCZjtBQTVEQTtFQUNFLHlCRjhCWTtFRTdCWixpQkFBQTtFQUNBLDhCRnVGYTtFRXRGYixpQ0ZrRWU7QUVIakI7QUE1REE7RUFDRSwyQkZtRGM7RUVsRGQsZ0JBQUE7RUFDQSw4QkY2RWE7RUU1RWIsaUNGaURlO0FFY2pCO0FBNURBO0VBQ0UsaUNGd0NlO0VFdkNmLDJCRnFDYztFRXBDZCx5QkZ1Q1c7RUV0Q1gsOEJGc0VhO0VFckViLGdDRnFFYTtBRU5mO0FBNURBO0VBQ0UsaUNGK0JvQjtBRWdDdEI7QUE1REE7RUFDRSxjQUFBO0FBK0RGO0FBNURBO0VBQ0UsMEJBQUE7QUErREY7QUE3REE7RUFDRSwwQkFBQTtBQWdFRjtBQTlEQTtFQUNFLDBCQUFBO0FBaUVGO0FBL0RBO0VBQ0UsNkJBQUE7QUFrRUY7QUFoRUE7RUFDRSw2QkFBQTtBQW1FRjtBQWhFQSxpRkFBQTtBQUNBO0VBQ0UseUJGakJZO0FFb0ZkO0FBakVBO0VBQ0UsaUNGSWU7RUVIZix5QkZJVztFRUhYLDhCRmlDVztBRW1DYjtBQWxFQTtFQUNFLGlCQUFBO0VBQ0EsOEJGNkJXO0FFd0NiO0FBbEVBO0VBQ0UsaUNGU2U7RUVSZixrQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJGSFc7RUVJWCw0QkZxQlc7RUVwQlgsOEJGb0JXO0FFaURiO0FBbEVBO0VBQ0UsaUNGZmU7RUVnQmYsMkJGbEJjO0VFbUJkLHlCRmhCVztFRWlCWCw4QkZhVztBRXdEYjtBQS9EQSxrRkFBQTtBQUNBO0VBQ0UseUJGbERZO0VFbURaLDhCRi9DVztBRWlIYjtBQWhFQTtFQUNFLGlDRjlCZTtFRStCZix5QkY5Qlc7RUUrQlgsOEJGcERXO0FFdUhiO0FBakVBO0VBQ0UsaUJBQUE7RUFDQSw4QkZ4RFc7QUU0SGI7QUFqRUE7RUFDRSxpQ0ZuQ2U7RUVvQ2Ysa0JBQUE7RUFDQSx5QkZwQ1c7RUVxQ1gsNEJGL0RXO0VFZ0VYLDhCRmhFVztBRW9JYjtBQWxFQTtFQUNFLGlDRi9DZTtFRWdEZiwyQkZsRGM7RUVtRGQseUJGaERXO0VFaURYLDhCRnRFVztBRTJJYjtBQWxFQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsOEJGOUVXO0FFbUpiO0FBakVBLGlGQUFBO0FBRUE7RUFDRSx3QkFBQTtFQUNBLCtCRnpGYTtFRTBGYix5QkYzRlk7RUU0RlosWUFBQTtBQW1FRjtBQWhFQTtFQUNFLGlCQUFBO0VBQ0EsOEJGN0ZXO0FFZ0tiIiwiZmlsZSI6InNyYy9hcHAvYXJpYS1zY29yZS9zY29yZS1mbG93L2Zsb3ctaXRlbS9mbG93LWl0ZW0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG5cbkBpbXBvcnQgXCIuL2Fzc2V0cy9zY3NzL21vZHVsZXMvX2ZvbnRzLnNjc3NcIjtcbiRnYW1lc2NvcmUtZmFtaWx5OiBcIkZpZ3VyaW5lU3ltYm9sVDFcIjtcbiRnYW1lc2NvcmUtaGlnaGxpZ2h0OiAjNTg1ODU4ZmY7XG4kZ2FtZXNjb3JlLWZvcmVncm91bmQ6IHdoaXRlO1xuXG4kcmVkOiAjZTQzMDMwO1xuJGdyZWVuOiAjMTlhMTg3O1xuJGxpZ2h0LWJsdWU6ICMwMGZmZmZmZjtcbiRibHVlOiAjMzY3YmYwO1xuJGRhcmstYmx1ZTogIzI2NWFiMTtcbiRtYXJvb246ICNiODE3NGM7XG4kcHVycGxlOiAjOGM0MmFiO1xuXG4vLyBNYWluIEFSSUEgQ29sb3IgRWxlbWVudCBWYXJpYWJsZXNcbiR0ZXh0Q29sb3I6IHZhcigtLXRleHRDb2xvcik7IC8vIE1haW4gVGV4dCBDb2xvclxuJHRleHRDb2xvckF0dGVudGlvbjogdmFyKC0tdGV4dENvbG9yQXR0ZW50aW9uKTsgLy8gQXR0ZW50aW9uIHRleHRcbiR0ZXh0Q29sb3JSZW1vdmU6IHZhcigtLXRleHRDb2xvclJlbW92ZSk7IC8vIFJlbW92ZS9EZWxldGUvQ2xvc2VcbiR0ZXh0Q29sb3JBZGQ6IHZhcigtLXRleHRDb2xvckFkZCk7IC8vIEFkZC9DcmVhdGUvT3BlblxuJHRleHRDb2xvckFjdGl2ZTogdmFyKC0tdGV4dENvbG9yQWN0aXZlKTsgLy8gQWRkL0NyZWF0ZS9PcGVuXG4kYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZCk7IC8vIE1haW4gYmFja2dyb3VuZCBDb2xvclxuJGJnQ29udGFpbmVyOiB2YXIoLS1iZ0NvbnRhaW5lcik7IC8vIGJhY2tncm91bmQgb2YgQ29udGFpbmVyc1xuJGJnTWVudTogdmFyKC0tYmdNZW51KTsgLy8gYmFja2dyb3VuZCBvZiBNZW51c1xuJGJnSXRlbTogdmFyKC0tYmdJdGVtKTsgLy8gYmFja2dyb3VuZCBvZiBJdGVtc1xuXG4vLyBDb250ZXh0IE1lbnVcbiRiZ0NvbnRleHQ6IHZhcigtLWJnQ29udGV4dCk7IC8vIGJhY2tncm91bmQgb2YgQ29udGV4dCBNZW51XG4kdGV4dENvbG9yQ29udGV4dDogdmFyKC0tdGV4dENvbG9yQ29udGV4dCk7IC8vIHRleHQgY29sb3IgQ29udGV4dCBNZW51XG4kYm9yZGVyQ29udGV4dDogdmFyKC0tYm9yZGVyQ29udGV4dCk7IC8vIGJvcmRlciBDb250ZXh0IE1lbnVcbiRvdmVybGF5Q29udGV4dEJhY2tncm91bmQ6IHZhcihcbiAgLS1vdmVybGF5Q29udGV4dEJhY2tncm91bmRcbik7IC8vIENvbnRleHQgTWVudSBPdmVybGF5IGJhY2tncm91bmQgbWFpblxuJG92ZXJsYXlDb250ZXh0QmFja2dyb3VuZEdyYWRpZW50OiB2YXIoXG4gIC0tb3ZlcmxheUNvbnRleHRCYWNrZ3JvdW5kR3JhZGllbnRcbik7IC8vIENvbnRleHQgTWVudSBiYWNrZ3JvdW5kIGdyYWRpZW50XG5cblxuXG4vKioqKioqKioqKioqKioqKioqKiBNZW51ICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuJG1lQmFja2dyb3VuZDogdmFyKC0tbWVCYWNrZ3JvdW5kKTtcblxuLyoqKioqKioqKioqKioqKioqKioqKioqKiBNZW51IENvbnRyb2xzICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiRjc0ZpbGw6IHZhcigtLWNzRmlsbCk7XG4kY3NBY2NlbnQ6IHZhcigtLWNzQWNjZW50KTtcbiRjc0FjY2VudDI6IHZhcigtLWNzQWNjZW50Mik7XG5cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgQ29udGFpbmVyIFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4kZ3NUZXh0Q29sb3I6IHZhcigtLWdzVGV4dENvbG9yKTsgLy8gVGV4dCBjb2xvciBmb3IgZ2FtZSBzY29yZVxuJGdzQmFja2dyb3VuZDogdmFyKC0tZ3NCYWNrZ3JvdW5kKTsgLy8gYmFja2dyb3VuZCBvZiBDb250YWluZXJzXG4kZ3NMaXN0QmFja2dyb3VuZDogdmFyKC0tZ3NMaXN0QmFja2dyb3VuZCk7IC8vIGxpc3QgYmFja2dyb3VuZCBvZiBnYW1lIHNjb3JlXG4kZ3NCb3JkZXI6IHZhcigtLWdzQm9yZGVyKTsgLy8gYmFja2dyb3VuZCBvZiBNZW51c1xuJGdzVGV4dFNpemU6IHZhcigtLWdzVGV4dFNpemUpOyAvLyBiYWNrZ3JvdW5kIG9mIE1lbnVzXG4kZ3NGb250RmFtaWx5OiB2YXIoLS1nc0ZvbnRGYW1pbHkpOyAvLyBzY29yZSBmb250XG4kZ3NUYWJsZUl0ZW1XaWR0aDogdmFyKC0tZ3NUYWJsZUl0ZW1XaWR0aCk7IC8vIHdpZHRoIG9mIHNjb3JlIGl0ZW0gaW4gdGFibGUgbGF5b3V0XG4kZ3NUYWJsZVBseVdpZHRoOiB2YXIoLS1nc1RhYmxlUGx5V2lkdGgpOyAvLyB3aWR0aCBvZiBwbHkgZWxlbWVudCBpbiB0YWJsZSBsYXlvdXRcblxuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBDb250YWluZXIgVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiRnc1RleHRDb2xvck1XOiB2YXIoLS1nc1RleHRDb2xvck1XKTsgLy8gVGV4dCBjb2xvciBmb3IgZ2FtZSBzY29yZVxuJGdzQmFja2dyb3VuZE1XOiB2YXIoLS1nc0JhY2tncm91bmRNVyk7IC8vIGJhY2tncm91bmQgb2YgQ29udGFpbmVyc1xuJGdzQm9yZGVyTVc6IHZhcigtLWdzQm9yZGVyTVcpOyAvLyBiYWNrZ3JvdW5kIG9mIE1lbnVzXG4kZ3NUZXh0U2l6ZU1XOiB2YXIoLS1nc1RleHRTaXplTVcpOyAvLyBiYWNrZ3JvdW5kIG9mIE1lbnVzXG5cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgQ29udGFpbmVyIFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4kZ3NUZXh0Q29sb3JNQjogdmFyKC0tZ3NUZXh0Q29sb3JNQik7IC8vIFRleHQgY29sb3IgZm9yIGdhbWUgc2NvcmVcbiRnc0JhY2tncm91bmRNQjogdmFyKC0tZ3NCYWNrZ3JvdW5kTUIpOyAvLyBiYWNrZ3JvdW5kIG9mIENvbnRhaW5lcnNcbiRnc0JvcmRlck1COiB2YXIoLS1nc0JvcmRlck1CKTsgLy8gYmFja2dyb3VuZCBvZiBNZW51c1xuJGdzVGV4dFNpemVNQjogdmFyKC0tZ3NUZXh0U2l6ZU1CKTsgLy8gYmFja2dyb3VuZCBvZiBNZW51c1xuXG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIEhpZ2hsaWdodCBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuJGdzVGV4dENvbG9ySEc6IHZhcigtLWdzVGV4dENvbG9ySEcpOyAvLyBUZXh0IGNvbG9yIGZvciBoaWdobGlnaHRcbiRnc0Fubm90YXRpb25Db2xvckhHOiB2YXIoLS1nc0Fubm90YXRpb25Db2xvckhHKTsgLy8gQW5ub3RhdGlvbi9Db21tZW50IGNvbG9yIGZvciBoaWdobGlnaHRcbiRnc0JhY2tncm91bmRIRzogdmFyKC0tZ3NCYWNrZ3JvdW5kSEcpOyAvLyBiYWNrZ3JvdW5kIGZvciBoaWdobGlnaHRcbiRnc0JvcmRlckhHOiB2YXIoLS1nc0JvcmRlckhHKTsgLy8gYm9yZGVyIGZvciBoaWdobGlnaHRcblxuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBBbm5vdGF0aW9uIFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4kZ3NUZXh0Q29sb3JBTjogdmFyKC0tZ3NUZXh0Q29sb3JBTik7IC8vIFRleHQgY29sb3IgZm9yIGhpZ2hsaWdodFxuJGdzQmFja2dyb3VuZEFOOiB2YXIoLS1nc0JhY2tncm91bmRBTik7IC8vIGJhY2tncm91bmQgZm9yIGhpZ2hsaWdodFxuJGdzQm9yZGVyQU46IHZhcigtLWdzQm9yZGVyQU4pOyAvLyBib3JkZXIgZm9yIGhpZ2hsaWdodFxuXG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIFZhcmlhdGlvbiBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuJGdzVGV4dENvbG9yVkE6IHZhcigtLWdzVGV4dENvbG9yVkEpOyAvLyBUZXh0IGNvbG9yIGZvciBoaWdobGlnaHRcbiRnc0JhY2tncm91bmRWQTogdmFyKC0tZ3NCYWNrZ3JvdW5kVkEpOyAvLyBiYWNrZ3JvdW5kIGZvciBoaWdobGlnaHRcbiRnc0JvcmRlclZBOiB2YXIoLS1nc0JvcmRlclZBKTsgLy8gYm9yZGVyIGZvciBoaWdobGlnaHRcblxuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBQbHkgVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiRnc1RleHRDb2xvclBDOiB2YXIoLS1nc1RleHRDb2xvclBDKTsgLy8gVGV4dCBjb2xvciBmb3IgZ2FtZSBzY29yZSBwbHlcbiRnc0JhY2tncm91bmRQQzogdmFyKC0tZ3NCYWNrZ3JvdW5kUEMpOyAvLyBiYWNrZ3JvdW5kIGZvciBnYW1lIHNjb3JlIHBseVxuJGdzQm9yZGVyUEM6IHZhcigtLWdzQm9yZGVyUEMpOyAvLyBib3JkZXIgZm9yIGdhbWUgc2NvcmUgcGx5XG5cbi8qKioqKioqKioqKioqKioqKioqKiBDb250cm9sIENvbG9ycyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4kY3NCYWNrZ3JvdW5kOiB2YXIoLS1jc0JhY2tncm91bmQpOyAvLyBiYWNrZ3JvdW5kIGZvciBjb250cm9sc1xuJGNzQ29sb3I6IHZhcigtLWNzQ29sb3IpOyAvLyBjb250cm9scyBjb2xvciAoZm9yZWdyb3VuZClcblxuLyoqKioqKioqKioqKioqKioqKioqIEJvYXJkIENvbG9ycyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4kYm9hcmRCR0Rhcms6IHZhcigtLWJvYXJkQkdEYXJrKTsgLy8gYm9hcmQgZGFyayB0aWxlXG4kYm9hcmRCR0xpZ2h0OiB2YXIoLS1ib2FyZEJHTGlnaHQpOyAvLyBib2FyZCBsaWdodCB0aWxlXG4kYm9hcmRMYWJlbExpZ2h0OiB2YXIoLS1ib2FyZExhYmVsTGlnaHQpOyAvLyBib2FyZCBsaWdodCBsYWJlbFxuJGJvYXJkTGFiZWxEYXJrOiB2YXIoLS1ib2FyZExhYmVsRGFyayk7IC8vIGJvYXJkIGRhcmsgbGFiZWxcblxuXG5cbi8qKioqKioqKioqKioqKioqKioqKiBGb250IFNpemVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiRnc0ZvbnRTaXplOiB2YXIoLS1nc0ZvbnRTaXplKTsgLy8gYm9hcmQgZGFyayB0aWxlXG4kZ3NGb250U2l6ZUFOOiB2YXIoLS1nc0ZvbnRTaXplQU4pOyAvLyBib2FyZCBsaWdodCB0aWxlXG4kZ3NGb250U2l6ZUhHOiB2YXIoLS1nc0ZvbnRTaXplSEcpOyAvLyBib2FyZCBsaWdodCBsYWJlbFxuJGdzRm9udFNpemVWQTogdmFyKC0tZ3NGb250U2l6ZVZBKTsgLy8gYm9hcmQgZGFyayBsYWJlbFxuJGdzRm9udFNpemVQQzogdmFyKC0tZ3NGb250U2l6ZVBDKTsgLy8gYm9hcmQgZGFyayBsYWJlbFxuJGhkckRhdGFGb250U2l6ZTogdmFyKC0taGRyRGF0YUZvbnRTaXplKTsgLy8gc2l6ZSBvZiBwbGF5ZXIgc2hvd2Nhc2UgZGF0YVxuJGhkck5hbWVGb250U2l6ZTogdmFyKC0taGRyTmFtZUZvbnRTaXplKTsgLy8gc2l6ZSBvZiBwbGF5ZXIgc2hvd2Nhc2UgTmFtZVxuJGhkclRpdGxlRm9udFNpemU6IHZhcigtLWhkclRpdGxlRm9udFNpemUpOyAvLyBzaXplIG9mIHBsYXllciBzaG93Y2FzZSBkYXRhXG4kaGRyVmFyaWFudEZvbnRTaXplOiB2YXIoLS1oZHJWYXJpYW50Rm9udFNpemUpOyAvLyBzaXplIG9mIHBsYXllciBzaG93Y2FzZSBOYW1lXG4kaGRyTWF0Y2hEYXRhRm9udFNpemU6IHZhcigtLWhkck1hdGNoRGF0YUZvbnRTaXplKTsgLy8gc2l6ZSBvZiBwbGF5ZXIgc2hvd2Nhc2UgTmFtZVxuJGhkck9wZW5pbmdGb250U2l6ZTogdmFyKC0taGRyTWF0Y2hEYXRhRm9udFNpemUpOyAvLyBzaXplIG9mIHBsYXllciBzaG93Y2FzZSBOYW1lXG4kaGRyUmVzdWx0Rm9udFNpemU6IHZhcigtLWhkclJlc3VsdEZvbnRTaXplKTsgLy8gc2l6ZSBvZiBwbGF5ZXIgc2hvd2Nhc2UgTmFtZVxuJGhkclJvdW5kRm9udFNpemU6IHZhcigtLWhkclJvdW5kRm9udFNpemUpOyAvLyBzaXplIG9mIHBsYXllciBzaG93Y2FzZSBOYW1lXG5cbi8vIEdlbmVyYWwgc3R1ZmZcbiR0ZXh0LWNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcbiRiZy1vdXRlcjogdmFyKC0tYmctb3V0ZXIpO1xuJGJnLWlubmVyOiB2YXIoLS1iZy1pbm5lcik7XG5cbiRiZy1jb2xvcjogI2YyZjNmNztcbiRmZy1jb2xvcjogIzM4M2E0MTtcblxuJGdsb3ctc2hhZG93OiAwIDAgMC41ZW0gdHJhbnNwYXJlbnRpemUoJGJsdWUsIDAuMyk7XG46cm9vdCB7XG4gIC0tYmctY29sb3I6ICN7JGJnLWNvbG9yfTtcbiAgLS1mZy1jb2xvcjogI3skZmctY29sb3J9O1xuXG4gIC0tcmVkOiAjeyRyZWR9O1xuICAtLWdyZWVuOiAjeyRncmVlbn07XG4gIC0tYmx1ZTogI3skYmx1ZX07XG4gIC0tZGFyay1ibHVlOiAjeyRkYXJrLWJsdWV9O1xuICAtLW1hcm9vbjogI3skbWFyb29ufTtcbiAgLS1wdXJwbGU6ICN7JHB1cnBsZX07XG59XG4iLCJAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ0NhdmVhdCc7XG4gICAgc3JjOiB1cmwoJy4uLy4uL2ZvbnRzL0JvbGQvQ2F2ZWF0LUJvbGQud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXG4gICAgICAgIHVybCgnLi4vLi4vZm9udHMvQm9sZC9DYXZlYXQtQm9sZC53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtZGlzcGxheTogc3dhcDtcbn1cblxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdDYXZlYXQnO1xuICAgIHNyYzogdXJsKCcuLi8uLi9mb250cy9SZWd1bGFyL0NhdmVhdC1SZWd1bGFyLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxuICAgICAgICB1cmwoJy4uLy4uL2ZvbnRzL1JlZ3VsYXIvQ2F2ZWF0LVJlZ3VsYXIud29mZicpIGZvcm1hdCgnd29mZicpO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtZGlzcGxheTogc3dhcDtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnRmlndXJpbmVTeW1ib2xUMSc7XG4gIHNyYzogdXJsKCcuLi8uLi9mb250cy8zcmQgUGFydHkvQ2hlc3NWYXJpYW50cy9GaWd1cmluZVN5bWJvbFQxQm9sZC53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcbiAgICAgIHVybCgnLi4vLi4vZm9udHMvM3JkIFBhcnR5L0NoZXNzVmFyaWFudHMvRmlndXJpbmVTeW1ib2xUMUJvbGQud29mZicpIGZvcm1hdCgnd29mZicpO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ0ZpZ3VyaW5lU3ltYm9sVDEnO1xuICBzcmM6IHVybCgnLi4vLi4vZm9udHMvM3JkIFBhcnR5L0NoZXNzVmFyaWFudHMvRmlndXJpbmVTeW1ib2xUMS53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcbiAgICAgIHVybCgnLi4vLi4vZm9udHMvM3JkIFBhcnR5L0NoZXNzVmFyaWFudHMvRmlndXJpbmVTeW1ib2xUMS53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdTYW5jdHVhcnlQbGF5Z3JvdW5kJztcbiAgc3JjOiB1cmwoJy4uLy4uL2ZvbnRzLzNyZCBQYXJ0eS9TYW5jdHVhcnlQbGF5Z3JvdW5kLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxuICAgICAgdXJsKCcuLi8uLi9mb250cy8zcmQgUGFydHkvU2FuY3R1YXJ5UGxheWdyb3VuZC53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xufVxuXG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ0FtaXRhJztcbiAgc3JjOiB1cmwoJy4uLy4uL2ZvbnRzLzNyZCBQYXJ0eS9BbWl0YS9BbWl0YS1SZWd1bGFyLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxuICAgICAgdXJsKCcuLi8uLi9mb250cy8zcmQgUGFydHkvQW1pdGEvQW1pdGEtUmVndWxhci53b2ZmMicpIGZvcm1hdCgnd29mZicpO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbn0iLCIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiQ2F2ZWF0XCI7XG4gIHNyYzogdXJsKFwiLi4vLi4vZm9udHMvQm9sZC9DYXZlYXQtQm9sZC53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKSwgdXJsKFwiLi4vLi4vZm9udHMvQm9sZC9DYXZlYXQtQm9sZC53b2ZmXCIpIGZvcm1hdChcIndvZmZcIik7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJDYXZlYXRcIjtcbiAgc3JjOiB1cmwoXCIuLi8uLi9mb250cy9SZWd1bGFyL0NhdmVhdC1SZWd1bGFyLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpLCB1cmwoXCIuLi8uLi9mb250cy9SZWd1bGFyL0NhdmVhdC1SZWd1bGFyLndvZmZcIikgZm9ybWF0KFwid29mZlwiKTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiRmlndXJpbmVTeW1ib2xUMVwiO1xuICBzcmM6IHVybChcIi4uLy4uL2ZvbnRzLzNyZCBQYXJ0eS9DaGVzc1ZhcmlhbnRzL0ZpZ3VyaW5lU3ltYm9sVDFCb2xkLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpLCB1cmwoXCIuLi8uLi9mb250cy8zcmQgUGFydHkvQ2hlc3NWYXJpYW50cy9GaWd1cmluZVN5bWJvbFQxQm9sZC53b2ZmXCIpIGZvcm1hdChcIndvZmZcIik7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJGaWd1cmluZVN5bWJvbFQxXCI7XG4gIHNyYzogdXJsKFwiLi4vLi4vZm9udHMvM3JkIFBhcnR5L0NoZXNzVmFyaWFudHMvRmlndXJpbmVTeW1ib2xUMS53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKSwgdXJsKFwiLi4vLi4vZm9udHMvM3JkIFBhcnR5L0NoZXNzVmFyaWFudHMvRmlndXJpbmVTeW1ib2xUMS53b2ZmXCIpIGZvcm1hdChcIndvZmZcIik7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlNhbmN0dWFyeVBsYXlncm91bmRcIjtcbiAgc3JjOiB1cmwoXCIuLi8uLi9mb250cy8zcmQgUGFydHkvU2FuY3R1YXJ5UGxheWdyb3VuZC53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKSwgdXJsKFwiLi4vLi4vZm9udHMvM3JkIFBhcnR5L1NhbmN0dWFyeVBsYXlncm91bmQud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJBbWl0YVwiO1xuICBzcmM6IHVybChcIi4uLy4uL2ZvbnRzLzNyZCBQYXJ0eS9BbWl0YS9BbWl0YS1SZWd1bGFyLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpLCB1cmwoXCIuLi8uLi9mb250cy8zcmQgUGFydHkvQW1pdGEvQW1pdGEtUmVndWxhci53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmXCIpO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbn1cbi8qKioqKioqKioqKioqKioqKioqIE1lbnUgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKioqKioqIE1lbnUgQ29udHJvbHMgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBDb250YWluZXIgVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgQ29udGFpbmVyIFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIENvbnRhaW5lciBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBIaWdobGlnaHQgVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgQW5ub3RhdGlvbiBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBWYXJpYXRpb24gVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgUGx5IFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKiogQ29udHJvbCBDb2xvcnMgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKioqIEJvYXJkIENvbG9ycyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKiogRm9udCBTaXplcyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG46cm9vdCB7XG4gIC0tYmctY29sb3I6ICNmMmYzZjc7XG4gIC0tZmctY29sb3I6ICMzODNhNDE7XG4gIC0tcmVkOiAjZTQzMDMwO1xuICAtLWdyZWVuOiAjMTlhMTg3O1xuICAtLWJsdWU6ICMzNjdiZjA7XG4gIC0tZGFyay1ibHVlOiAjMjY1YWIxO1xuICAtLW1hcm9vbjogI2I4MTc0YztcbiAgLS1wdXJwbGU6ICM4YzQyYWI7XG59XG5cbi5nc2ktY29udGFpbmVyIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGxpbmUtaGVpZ2h0OiB2YXIoLS1nc0ZvbnRTaXplKTtcbiAgbWFyZ2luOiAycHg7XG4gIHBhZGRpbmctbGVmdDogMnB4O1xufVxuXG4uZ3NpLW1vdmUge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBjb2xvcjogdmFyKC0tZ3NUZXh0Q29sb3IpO1xuICBmb250LXNpemU6IHZhcigtLWdzRm9udFNpemUpO1xuICBmb250LWZhbWlseTogdmFyKC0tZ3NGb250RmFtaWx5KTtcbiAgYmFja2dyb3VuZDogdmFyKC0tZ3NCYWNrZ3JvdW5kKTtcbn1cblxuLmdzaS1wbHkge1xuICBjb2xvcjogdmFyKC0tZ3NUZXh0Q29sb3IpO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiB2YXIoLS1nc0ZvbnRTaXplUEMpO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1nc0JhY2tncm91bmRQQyk7XG59XG5cbi5nc2ktY29tbWVudCB7XG4gIGNvbG9yOiB2YXIoLS1nc1RleHRDb2xvckFOKTtcbiAgbWFyZ2luLWxlZnQ6IDRweDtcbiAgZm9udC1zaXplOiB2YXIoLS1nc0ZvbnRTaXplQU4pO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1nc0JhY2tncm91bmRBTik7XG59XG5cbi5DdXJyZW50IHtcbiAgYmFja2dyb3VuZDogdmFyKC0tZ3NCYWNrZ3JvdW5kSEcpO1xuICBjb2xvcjogdmFyKC0tZ3NUZXh0Q29sb3JIRyk7XG4gIGJvcmRlcjogdmFyKC0tZ3NCb3JkZXJIRyk7XG4gIGZvbnQtc2l6ZTogdmFyKC0tZ3NGb250U2l6ZUhHKTtcbiAgbGluZS1oZWlnaHQ6IHZhcigtLWdzRm9udFNpemVIRyk7XG59XG5cbi5DdXJyZW50LmdzaS1jb21tZW50IHtcbiAgY29sb3I6IHZhcigtLWdzQW5ub3RhdGlvbkNvbG9ySEcpO1xufVxuXG4uQ3VycmVudC5nc2ktcGx5IHtcbiAgY29sb3I6ICMwMGQ0ZmE7XG59XG5cbi5DdXJyZW50LlZhcmlhdGlvbi5nc2ktY29udGFpbmVyIHtcbiAgYm9yZGVyOiAjMDBkNGZhIDJweCBkYXNoZWQ7XG59XG5cbi5DdXJyZW50LkJyYW5jaGVkLmdzaS1jb250YWluZXIge1xuICBib3JkZXI6ICMwMGQ0ZmEgMnB4IGRhc2hlZDtcbn1cblxuLkN1cnJlbnQuQnJhbmNoZWQuVmFyaWF0aW9uLmdzaS1jb250YWluZXIge1xuICBib3JkZXI6ICMwMGQ0ZmEgMnB4IGRhc2hlZDtcbn1cblxuLkJyYW5jaGVkLlZhcmlhdGlvbi5nc2ktY29udGFpbmVyIHtcbiAgYm9yZGVyOiAycHggbGlnaHRjb3JhbCBkYXNoZWQ7XG59XG5cbi5CcmFuY2hlZC5nc2ktY29udGFpbmVyIHtcbiAgYm9yZGVyOiAycHggbGlnaHRjb3JhbCBkYXNoZWQ7XG59XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBHcm91cCAqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi5Hcm91cC5nc2ktY29udGFpbmVyIHtcbiAgY29sb3I6IHZhcigtLWdzVGV4dENvbG9yKTtcbn1cblxuLkdyb3VwLmdzaS1jb250YWluZXItaGcge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1nc0JhY2tncm91bmRIRyk7XG4gIGJvcmRlcjogdmFyKC0tZ3NCb3JkZXJIRyk7XG4gIGxpbmUtaGVpZ2h0OiB2YXIoLS1nc0ZvbnRTaXplKTtcbn1cblxuLkdyb3VwLmdzaS1tb3ZlIHtcbiAgcGFkZGluZy1sZWZ0OiAycHg7XG4gIGxpbmUtaGVpZ2h0OiB2YXIoLS1nc0ZvbnRTaXplKTtcbn1cblxuLkdyb3VwLmdzaS1wbHkge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1nc0JhY2tncm91bmRQQyk7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgbWFyZ2luLXJpZ2h0OiAycHg7XG4gIGJvcmRlcjogdmFyKC0tZ3NCb3JkZXJBTik7XG4gIGZvbnQtc2l6ZTogdmFyKC0tZ3NGb250U2l6ZSk7XG4gIGxpbmUtaGVpZ2h0OiB2YXIoLS1nc0ZvbnRTaXplKTtcbn1cblxuLkdyb3VwLmdzaS1wbHktaGlnaGxpZ2h0IHtcbiAgYmFja2dyb3VuZDogdmFyKC0tZ3NCYWNrZ3JvdW5kSEcpO1xuICBjb2xvcjogdmFyKC0tZ3NUZXh0Q29sb3JIRyk7XG4gIGJvcmRlcjogdmFyKC0tZ3NCb3JkZXJIRyk7XG4gIGxpbmUtaGVpZ2h0OiB2YXIoLS1nc0ZvbnRTaXplKTtcbn1cblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogQW5ub3RhdGlvbiBHcm91cCAqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi5Bbm5vdGF0aW9uLmdzaS1jb250YWluZXIge1xuICBjb2xvcjogdmFyKC0tZ3NUZXh0Q29sb3IpO1xuICBsaW5lLWhlaWdodDogdmFyKC0tZ3NUZXh0U2l6ZSk7XG59XG5cbi5Bbm5vdGF0aW9uLmdzaS1jb250YWluZXItaGcge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1nc0JhY2tncm91bmRIRyk7XG4gIGJvcmRlcjogdmFyKC0tZ3NCb3JkZXJIRyk7XG4gIGxpbmUtaGVpZ2h0OiB2YXIoLS1nc1RleHRTaXplKTtcbn1cblxuLkFubm90YXRpb24uZ3NpLW1vdmUge1xuICBwYWRkaW5nLWxlZnQ6IDJweDtcbiAgbGluZS1oZWlnaHQ6IHZhcigtLWdzVGV4dFNpemUpO1xufVxuXG4uQW5ub3RhdGlvbi5nc2ktcGx5IHtcbiAgYmFja2dyb3VuZDogdmFyKC0tZ3NCYWNrZ3JvdW5kQU4pO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGJvcmRlcjogdmFyKC0tZ3NCb3JkZXJBTik7XG4gIGZvbnQtc2l6ZTogdmFyKC0tZ3NUZXh0U2l6ZSk7XG4gIGxpbmUtaGVpZ2h0OiB2YXIoLS1nc1RleHRTaXplKTtcbn1cblxuLkFubm90YXRpb24uZ3NpLXBseS1oaWdobGlnaHQge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1nc0JhY2tncm91bmRIRyk7XG4gIGNvbG9yOiB2YXIoLS1nc1RleHRDb2xvckhHKTtcbiAgYm9yZGVyOiB2YXIoLS1nc0JvcmRlckhHKTtcbiAgbGluZS1oZWlnaHQ6IHZhcigtLWdzVGV4dFNpemUpO1xufVxuXG4uQW5ub3RhdGlvbi5nc2ktY29tbWVudCB7XG4gIHBhZGRpbmctbGVmdDogM3B4O1xuICBwYWRkaW5nLXJpZ2h0OiAycHg7XG4gIG1hcmdpbi1sZWZ0OiAzcHg7XG4gIG1hcmdpbi1yaWdodDogMnB4O1xuICBsaW5lLWhlaWdodDogdmFyKC0tZ3NUZXh0U2l6ZSk7XG59XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogVmFyaWF0aW9uIEdyb3VwICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi5WYXJpYXRpb24uZ3NpLWNvbnRhaW5lciB7XG4gIGJvcmRlcjogd2hpdGUgZGFzaGVkIDJweDtcbiAgYmFja2dyb3VuZDogdmFyKC0tZ3NCYWNrZ3JvdW5kKTtcbiAgY29sb3I6IHZhcigtLWdzVGV4dENvbG9yKTtcbiAgcGFkZGluZzogMnB4O1xufVxuXG4uVmFyaWF0aW9uLmdzaS1tb3ZlIHtcbiAgcGFkZGluZy1sZWZ0OiAycHg7XG4gIGxpbmUtaGVpZ2h0OiB2YXIoLS1nc1RleHRTaXplKTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FlowItem, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'flow-item',
                templateUrl: './flow-item.component.html',
                styleUrls: ['./flow-item.component.scss']
            }]
    }], function () { return [{ type: _services_aria_service__WEBPACK_IMPORTED_MODULE_2__["AriaService"] }, { type: _services_themes_service__WEBPACK_IMPORTED_MODULE_3__["ThemeService"] }]; }, { data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
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

/***/ "./src/app/aria-score/score-flow/score-flow.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/aria-score/score-flow/score-flow.component.ts ***!
  \***************************************************************/
/*! exports provided: ScoreFlow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScoreFlow", function() { return ScoreFlow; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _flow_item_flow_item_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./flow-item/flow-item.component */ "./src/app/aria-score/score-flow/flow-item/flow-item.component.ts");
/* harmony import */ var src_app_services_aria_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/aria.service */ "./src/app/services/aria.service.ts");




function ScoreFlow_flow_item_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "flow-item", 1, 2);
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", item_r1);
} }
class ScoreFlow {
    constructor(aria) {
        this.aria = aria;
        this.currentItem = null;
    }
    ngOnInit() {
    }
    ngOnChanges(changes) {
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
    clearSelection() {
        const flowItems = this.scoreItems.toArray();
        for (let i = 0; i < flowItems.length; ++i) {
            flowItems[i].setSelected(false);
        }
    }
    resize(width, height) {
    }
}
ScoreFlow.ɵfac = function ScoreFlow_Factory(t) { return new (t || ScoreFlow)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_aria_service__WEBPACK_IMPORTED_MODULE_2__["AriaService"])); };
ScoreFlow.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ScoreFlow, selectors: [["score-flow"]], viewQuery: function ScoreFlow_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_flow_item_flow_item_component__WEBPACK_IMPORTED_MODULE_1__["FlowItem"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.scoreItems = _t);
    } }, outputs: { currentItem: "currentItem" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 3, vars: 2, consts: [[3, "data", 4, "ngFor", "ngForOf"], [3, "data"], ["scoreItem", ""]], template: function ScoreFlow_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ScoreFlow_flow_item_0_Template, 2, 1, "flow-item", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.aria.gameScoreItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.aria.gameResult);
    } }, styles: ["@font-face {\n  font-family: \"Caveat\";\n  src: url('Caveat-Bold.woff2') format(\"woff2\"), url('Caveat-Bold.woff') format(\"woff\");\n  font-weight: bold;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"Caveat\";\n  src: url('Caveat-Regular.woff2') format(\"woff2\"), url('Caveat-Regular.woff') format(\"woff\");\n  font-weight: 600;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"FigurineSymbolT1\";\n  src: url('FigurineSymbolT1Bold.woff2') format(\"woff2\"), url('FigurineSymbolT1Bold.woff') format(\"woff\");\n  font-weight: bold;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"FigurineSymbolT1\";\n  src: url('FigurineSymbolT1.woff2') format(\"woff2\"), url('FigurineSymbolT1.woff') format(\"woff\");\n  font-weight: 600;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"SanctuaryPlayground\";\n  src: url('SanctuaryPlayground.woff2') format(\"woff2\"), url('SanctuaryPlayground.woff') format(\"woff\");\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"Amita\";\n  src: url('Amita-Regular.woff2') format(\"woff2\"), url('Amita-Regular.woff2') format(\"woff\");\n  font-style: normal;\n  font-display: swap;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n[_ngcontent-%COMP%]:root {\n  --bg-color: #f2f3f7;\n  --fg-color: #383a41;\n  --red: #e43030;\n  --green: #19a187;\n  --blue: #367bf0;\n  --dark-blue: #265ab1;\n  --maroon: #b8174c;\n  --purple: #8c42ab;\n}\nmat-divider[_ngcontent-%COMP%] {\n  background-color: white;\n  margin: 2px;\n}\n.mat-grid-tile[_ngcontent-%COMP%] {\n  background: #585858ff;\n  color: white;\n  font-family: \"FigurineSymbolT1\";\n  font-weight: 360;\n  max-width: 164px;\n  font-size: 24px;\n  text-align: auto;\n}\n.score-title[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0px;\n  left: -2px;\n  height: 30px;\n  -webkit-user-select: none;\n  -o-user-select: none;\n  user-select: none;\n}\n.score-list[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0px;\n  right: 0px;\n  padding-left: 12px;\n  padding-top: 2px;\n  padding-bottom: 2px;\n  top: 32px;\n  height: calc(99% - 30px);\n  overflow: auto;\n  -webkit-user-select: none;\n  -o-user-select: none;\n  user-select: none;\n  background: var(--gsListBackground);\n}\n.gamescore-container[_ngcontent-%COMP%] {\n  background: var(--gsBackground);\n  height: 100%;\n  border: 2px black solid;\n  overflow: hidden;\n  line-height: var(--gsTextSize);\n  word-break: keep-all;\n  vertical-align: bottom;\n}\n.gs-menu[_ngcontent-%COMP%] {\n  position: absolute;\n  background: transparent;\n  top: 10%;\n  left: 10%;\n  width: 80%;\n  height: 80%;\n  max-height: 480px;\n  max-width: 480px;\n}\n.resize-handle[_ngcontent-%COMP%] {\n  position: absolute;\n  clip: true;\n  top: calc(50% - 3em);\n  width: 36px;\n  border-radius: 5px;\n  border: solid grey 3px;\n  height: 6em;\n  background-color: #00000a;\n  cursor: grab;\n}\n.input-box[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 2px;\n  width: 100%;\n  height: 300px;\n  border: solid black 4px;\n}\n.score-table[_ngcontent-%COMP%] {\n  background-color: red;\n  position: absolute;\n  left: 0px;\n  right: 0px;\n  padding-left: 12px;\n  padding-top: 2px;\n  padding-bottom: 2px;\n  top: 32px;\n  height: calc(99% - 30px);\n  overflow: auto;\n  -webkit-user-select: none;\n  -o-user-select: none;\n  user-select: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMuc2NzcyIsInNyYy9hc3NldHMvc2Nzcy9tb2R1bGVzL19mb250cy5zY3NzIiwic3JjL2FwcC9hcmlhLXNjb3JlL3Njb3JlLWZsb3cvc2NvcmUtZmxvdy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4RUFBQTtBQ0FBO0VBQ0kscUJBQUE7RUFDQSxxRkFBQTtFQUVBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0NKO0FERUE7RUFDSSxxQkFBQTtFQUNBLDJGQUFBO0VBRUEsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDREo7QURJQTtFQUNFLCtCQUFBO0VBQ0EsdUdBQUE7RUFFQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNIRjtBRE1BO0VBQ0UsK0JBQUE7RUFDQSwrRkFBQTtFQUVBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0xGO0FEUUE7RUFDRSxrQ0FBQTtFQUNBLHFHQUFBO0VBRUEsa0JBQUE7RUFDQSxrQkFBQTtBQ1BGO0FEV0E7RUFDRSxvQkFBQTtFQUNBLDBGQUFBO0VBRUEsa0JBQUE7RUFDQSxrQkFBQTtBQ1ZGO0FGREEsK0VBQUE7QUFHQSxrRkFBQTtBQUtBLCtFQUFBO0FBVUEsK0VBQUE7QUFNQSwrRUFBQTtBQU1BLCtFQUFBO0FBTUEsZ0ZBQUE7QUFLQSwrRUFBQTtBQUtBLHlFQUFBO0FBS0EseUVBQUE7QUFJQSx1RUFBQTtBQVFBLHFFQUFBO0FBd0JBO0VBQ0UsbUJBQUE7RUFDQSxtQkFBQTtFQUVBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUV6RUY7QUE1REE7RUFDRSx1QkFBQTtFQUNBLFdBQUE7QUErREY7QUEzREE7RUFDRSxxQkZMb0I7RUVNcEIsWUZMcUI7RUVNckIsK0JGUmlCO0VFU2pCLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUE4REY7QUEzREE7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBSUEsb0JBQUE7RUFDQSxpQkFBQTtBQThERjtBQTVEQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0Esd0JBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFJQSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUNGSWlCO0FFMkRuQjtBQTdEQTtFQUNFLCtCQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw4QkZEVztFRUVYLG9CQUFBO0VBQ0Esc0JBQUE7QUFnRUY7QUE1REE7RUFDRSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUErREY7QUEzREE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBQThERjtBQTVEQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7QUErREY7QUEzREE7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0Esd0JBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFJQSxvQkFBQTtFQUNBLGlCQUFBO0FBOERGIiwiZmlsZSI6InNyYy9hcHAvYXJpYS1zY29yZS9zY29yZS1mbG93L3Njb3JlLWZsb3cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG5cbkBpbXBvcnQgXCIuL2Fzc2V0cy9zY3NzL21vZHVsZXMvX2ZvbnRzLnNjc3NcIjtcbiRnYW1lc2NvcmUtZmFtaWx5OiBcIkZpZ3VyaW5lU3ltYm9sVDFcIjtcbiRnYW1lc2NvcmUtaGlnaGxpZ2h0OiAjNTg1ODU4ZmY7XG4kZ2FtZXNjb3JlLWZvcmVncm91bmQ6IHdoaXRlO1xuXG4kcmVkOiAjZTQzMDMwO1xuJGdyZWVuOiAjMTlhMTg3O1xuJGxpZ2h0LWJsdWU6ICMwMGZmZmZmZjtcbiRibHVlOiAjMzY3YmYwO1xuJGRhcmstYmx1ZTogIzI2NWFiMTtcbiRtYXJvb246ICNiODE3NGM7XG4kcHVycGxlOiAjOGM0MmFiO1xuXG4vLyBNYWluIEFSSUEgQ29sb3IgRWxlbWVudCBWYXJpYWJsZXNcbiR0ZXh0Q29sb3I6IHZhcigtLXRleHRDb2xvcik7IC8vIE1haW4gVGV4dCBDb2xvclxuJHRleHRDb2xvckF0dGVudGlvbjogdmFyKC0tdGV4dENvbG9yQXR0ZW50aW9uKTsgLy8gQXR0ZW50aW9uIHRleHRcbiR0ZXh0Q29sb3JSZW1vdmU6IHZhcigtLXRleHRDb2xvclJlbW92ZSk7IC8vIFJlbW92ZS9EZWxldGUvQ2xvc2VcbiR0ZXh0Q29sb3JBZGQ6IHZhcigtLXRleHRDb2xvckFkZCk7IC8vIEFkZC9DcmVhdGUvT3BlblxuJHRleHRDb2xvckFjdGl2ZTogdmFyKC0tdGV4dENvbG9yQWN0aXZlKTsgLy8gQWRkL0NyZWF0ZS9PcGVuXG4kYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZCk7IC8vIE1haW4gYmFja2dyb3VuZCBDb2xvclxuJGJnQ29udGFpbmVyOiB2YXIoLS1iZ0NvbnRhaW5lcik7IC8vIGJhY2tncm91bmQgb2YgQ29udGFpbmVyc1xuJGJnTWVudTogdmFyKC0tYmdNZW51KTsgLy8gYmFja2dyb3VuZCBvZiBNZW51c1xuJGJnSXRlbTogdmFyKC0tYmdJdGVtKTsgLy8gYmFja2dyb3VuZCBvZiBJdGVtc1xuXG4vLyBDb250ZXh0IE1lbnVcbiRiZ0NvbnRleHQ6IHZhcigtLWJnQ29udGV4dCk7IC8vIGJhY2tncm91bmQgb2YgQ29udGV4dCBNZW51XG4kdGV4dENvbG9yQ29udGV4dDogdmFyKC0tdGV4dENvbG9yQ29udGV4dCk7IC8vIHRleHQgY29sb3IgQ29udGV4dCBNZW51XG4kYm9yZGVyQ29udGV4dDogdmFyKC0tYm9yZGVyQ29udGV4dCk7IC8vIGJvcmRlciBDb250ZXh0IE1lbnVcbiRvdmVybGF5Q29udGV4dEJhY2tncm91bmQ6IHZhcihcbiAgLS1vdmVybGF5Q29udGV4dEJhY2tncm91bmRcbik7IC8vIENvbnRleHQgTWVudSBPdmVybGF5IGJhY2tncm91bmQgbWFpblxuJG92ZXJsYXlDb250ZXh0QmFja2dyb3VuZEdyYWRpZW50OiB2YXIoXG4gIC0tb3ZlcmxheUNvbnRleHRCYWNrZ3JvdW5kR3JhZGllbnRcbik7IC8vIENvbnRleHQgTWVudSBiYWNrZ3JvdW5kIGdyYWRpZW50XG5cblxuXG4vKioqKioqKioqKioqKioqKioqKiBNZW51ICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuJG1lQmFja2dyb3VuZDogdmFyKC0tbWVCYWNrZ3JvdW5kKTtcblxuLyoqKioqKioqKioqKioqKioqKioqKioqKiBNZW51IENvbnRyb2xzICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiRjc0ZpbGw6IHZhcigtLWNzRmlsbCk7XG4kY3NBY2NlbnQ6IHZhcigtLWNzQWNjZW50KTtcbiRjc0FjY2VudDI6IHZhcigtLWNzQWNjZW50Mik7XG5cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgQ29udGFpbmVyIFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4kZ3NUZXh0Q29sb3I6IHZhcigtLWdzVGV4dENvbG9yKTsgLy8gVGV4dCBjb2xvciBmb3IgZ2FtZSBzY29yZVxuJGdzQmFja2dyb3VuZDogdmFyKC0tZ3NCYWNrZ3JvdW5kKTsgLy8gYmFja2dyb3VuZCBvZiBDb250YWluZXJzXG4kZ3NMaXN0QmFja2dyb3VuZDogdmFyKC0tZ3NMaXN0QmFja2dyb3VuZCk7IC8vIGxpc3QgYmFja2dyb3VuZCBvZiBnYW1lIHNjb3JlXG4kZ3NCb3JkZXI6IHZhcigtLWdzQm9yZGVyKTsgLy8gYmFja2dyb3VuZCBvZiBNZW51c1xuJGdzVGV4dFNpemU6IHZhcigtLWdzVGV4dFNpemUpOyAvLyBiYWNrZ3JvdW5kIG9mIE1lbnVzXG4kZ3NGb250RmFtaWx5OiB2YXIoLS1nc0ZvbnRGYW1pbHkpOyAvLyBzY29yZSBmb250XG4kZ3NUYWJsZUl0ZW1XaWR0aDogdmFyKC0tZ3NUYWJsZUl0ZW1XaWR0aCk7IC8vIHdpZHRoIG9mIHNjb3JlIGl0ZW0gaW4gdGFibGUgbGF5b3V0XG4kZ3NUYWJsZVBseVdpZHRoOiB2YXIoLS1nc1RhYmxlUGx5V2lkdGgpOyAvLyB3aWR0aCBvZiBwbHkgZWxlbWVudCBpbiB0YWJsZSBsYXlvdXRcblxuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBDb250YWluZXIgVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiRnc1RleHRDb2xvck1XOiB2YXIoLS1nc1RleHRDb2xvck1XKTsgLy8gVGV4dCBjb2xvciBmb3IgZ2FtZSBzY29yZVxuJGdzQmFja2dyb3VuZE1XOiB2YXIoLS1nc0JhY2tncm91bmRNVyk7IC8vIGJhY2tncm91bmQgb2YgQ29udGFpbmVyc1xuJGdzQm9yZGVyTVc6IHZhcigtLWdzQm9yZGVyTVcpOyAvLyBiYWNrZ3JvdW5kIG9mIE1lbnVzXG4kZ3NUZXh0U2l6ZU1XOiB2YXIoLS1nc1RleHRTaXplTVcpOyAvLyBiYWNrZ3JvdW5kIG9mIE1lbnVzXG5cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgQ29udGFpbmVyIFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4kZ3NUZXh0Q29sb3JNQjogdmFyKC0tZ3NUZXh0Q29sb3JNQik7IC8vIFRleHQgY29sb3IgZm9yIGdhbWUgc2NvcmVcbiRnc0JhY2tncm91bmRNQjogdmFyKC0tZ3NCYWNrZ3JvdW5kTUIpOyAvLyBiYWNrZ3JvdW5kIG9mIENvbnRhaW5lcnNcbiRnc0JvcmRlck1COiB2YXIoLS1nc0JvcmRlck1CKTsgLy8gYmFja2dyb3VuZCBvZiBNZW51c1xuJGdzVGV4dFNpemVNQjogdmFyKC0tZ3NUZXh0U2l6ZU1CKTsgLy8gYmFja2dyb3VuZCBvZiBNZW51c1xuXG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIEhpZ2hsaWdodCBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuJGdzVGV4dENvbG9ySEc6IHZhcigtLWdzVGV4dENvbG9ySEcpOyAvLyBUZXh0IGNvbG9yIGZvciBoaWdobGlnaHRcbiRnc0Fubm90YXRpb25Db2xvckhHOiB2YXIoLS1nc0Fubm90YXRpb25Db2xvckhHKTsgLy8gQW5ub3RhdGlvbi9Db21tZW50IGNvbG9yIGZvciBoaWdobGlnaHRcbiRnc0JhY2tncm91bmRIRzogdmFyKC0tZ3NCYWNrZ3JvdW5kSEcpOyAvLyBiYWNrZ3JvdW5kIGZvciBoaWdobGlnaHRcbiRnc0JvcmRlckhHOiB2YXIoLS1nc0JvcmRlckhHKTsgLy8gYm9yZGVyIGZvciBoaWdobGlnaHRcblxuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBBbm5vdGF0aW9uIFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4kZ3NUZXh0Q29sb3JBTjogdmFyKC0tZ3NUZXh0Q29sb3JBTik7IC8vIFRleHQgY29sb3IgZm9yIGhpZ2hsaWdodFxuJGdzQmFja2dyb3VuZEFOOiB2YXIoLS1nc0JhY2tncm91bmRBTik7IC8vIGJhY2tncm91bmQgZm9yIGhpZ2hsaWdodFxuJGdzQm9yZGVyQU46IHZhcigtLWdzQm9yZGVyQU4pOyAvLyBib3JkZXIgZm9yIGhpZ2hsaWdodFxuXG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIFZhcmlhdGlvbiBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuJGdzVGV4dENvbG9yVkE6IHZhcigtLWdzVGV4dENvbG9yVkEpOyAvLyBUZXh0IGNvbG9yIGZvciBoaWdobGlnaHRcbiRnc0JhY2tncm91bmRWQTogdmFyKC0tZ3NCYWNrZ3JvdW5kVkEpOyAvLyBiYWNrZ3JvdW5kIGZvciBoaWdobGlnaHRcbiRnc0JvcmRlclZBOiB2YXIoLS1nc0JvcmRlclZBKTsgLy8gYm9yZGVyIGZvciBoaWdobGlnaHRcblxuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBQbHkgVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiRnc1RleHRDb2xvclBDOiB2YXIoLS1nc1RleHRDb2xvclBDKTsgLy8gVGV4dCBjb2xvciBmb3IgZ2FtZSBzY29yZSBwbHlcbiRnc0JhY2tncm91bmRQQzogdmFyKC0tZ3NCYWNrZ3JvdW5kUEMpOyAvLyBiYWNrZ3JvdW5kIGZvciBnYW1lIHNjb3JlIHBseVxuJGdzQm9yZGVyUEM6IHZhcigtLWdzQm9yZGVyUEMpOyAvLyBib3JkZXIgZm9yIGdhbWUgc2NvcmUgcGx5XG5cbi8qKioqKioqKioqKioqKioqKioqKiBDb250cm9sIENvbG9ycyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4kY3NCYWNrZ3JvdW5kOiB2YXIoLS1jc0JhY2tncm91bmQpOyAvLyBiYWNrZ3JvdW5kIGZvciBjb250cm9sc1xuJGNzQ29sb3I6IHZhcigtLWNzQ29sb3IpOyAvLyBjb250cm9scyBjb2xvciAoZm9yZWdyb3VuZClcblxuLyoqKioqKioqKioqKioqKioqKioqIEJvYXJkIENvbG9ycyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4kYm9hcmRCR0Rhcms6IHZhcigtLWJvYXJkQkdEYXJrKTsgLy8gYm9hcmQgZGFyayB0aWxlXG4kYm9hcmRCR0xpZ2h0OiB2YXIoLS1ib2FyZEJHTGlnaHQpOyAvLyBib2FyZCBsaWdodCB0aWxlXG4kYm9hcmRMYWJlbExpZ2h0OiB2YXIoLS1ib2FyZExhYmVsTGlnaHQpOyAvLyBib2FyZCBsaWdodCBsYWJlbFxuJGJvYXJkTGFiZWxEYXJrOiB2YXIoLS1ib2FyZExhYmVsRGFyayk7IC8vIGJvYXJkIGRhcmsgbGFiZWxcblxuXG5cbi8qKioqKioqKioqKioqKioqKioqKiBGb250IFNpemVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiRnc0ZvbnRTaXplOiB2YXIoLS1nc0ZvbnRTaXplKTsgLy8gYm9hcmQgZGFyayB0aWxlXG4kZ3NGb250U2l6ZUFOOiB2YXIoLS1nc0ZvbnRTaXplQU4pOyAvLyBib2FyZCBsaWdodCB0aWxlXG4kZ3NGb250U2l6ZUhHOiB2YXIoLS1nc0ZvbnRTaXplSEcpOyAvLyBib2FyZCBsaWdodCBsYWJlbFxuJGdzRm9udFNpemVWQTogdmFyKC0tZ3NGb250U2l6ZVZBKTsgLy8gYm9hcmQgZGFyayBsYWJlbFxuJGdzRm9udFNpemVQQzogdmFyKC0tZ3NGb250U2l6ZVBDKTsgLy8gYm9hcmQgZGFyayBsYWJlbFxuJGhkckRhdGFGb250U2l6ZTogdmFyKC0taGRyRGF0YUZvbnRTaXplKTsgLy8gc2l6ZSBvZiBwbGF5ZXIgc2hvd2Nhc2UgZGF0YVxuJGhkck5hbWVGb250U2l6ZTogdmFyKC0taGRyTmFtZUZvbnRTaXplKTsgLy8gc2l6ZSBvZiBwbGF5ZXIgc2hvd2Nhc2UgTmFtZVxuJGhkclRpdGxlRm9udFNpemU6IHZhcigtLWhkclRpdGxlRm9udFNpemUpOyAvLyBzaXplIG9mIHBsYXllciBzaG93Y2FzZSBkYXRhXG4kaGRyVmFyaWFudEZvbnRTaXplOiB2YXIoLS1oZHJWYXJpYW50Rm9udFNpemUpOyAvLyBzaXplIG9mIHBsYXllciBzaG93Y2FzZSBOYW1lXG4kaGRyTWF0Y2hEYXRhRm9udFNpemU6IHZhcigtLWhkck1hdGNoRGF0YUZvbnRTaXplKTsgLy8gc2l6ZSBvZiBwbGF5ZXIgc2hvd2Nhc2UgTmFtZVxuJGhkck9wZW5pbmdGb250U2l6ZTogdmFyKC0taGRyTWF0Y2hEYXRhRm9udFNpemUpOyAvLyBzaXplIG9mIHBsYXllciBzaG93Y2FzZSBOYW1lXG4kaGRyUmVzdWx0Rm9udFNpemU6IHZhcigtLWhkclJlc3VsdEZvbnRTaXplKTsgLy8gc2l6ZSBvZiBwbGF5ZXIgc2hvd2Nhc2UgTmFtZVxuJGhkclJvdW5kRm9udFNpemU6IHZhcigtLWhkclJvdW5kRm9udFNpemUpOyAvLyBzaXplIG9mIHBsYXllciBzaG93Y2FzZSBOYW1lXG5cbi8vIEdlbmVyYWwgc3R1ZmZcbiR0ZXh0LWNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcbiRiZy1vdXRlcjogdmFyKC0tYmctb3V0ZXIpO1xuJGJnLWlubmVyOiB2YXIoLS1iZy1pbm5lcik7XG5cbiRiZy1jb2xvcjogI2YyZjNmNztcbiRmZy1jb2xvcjogIzM4M2E0MTtcblxuJGdsb3ctc2hhZG93OiAwIDAgMC41ZW0gdHJhbnNwYXJlbnRpemUoJGJsdWUsIDAuMyk7XG46cm9vdCB7XG4gIC0tYmctY29sb3I6ICN7JGJnLWNvbG9yfTtcbiAgLS1mZy1jb2xvcjogI3skZmctY29sb3J9O1xuXG4gIC0tcmVkOiAjeyRyZWR9O1xuICAtLWdyZWVuOiAjeyRncmVlbn07XG4gIC0tYmx1ZTogI3skYmx1ZX07XG4gIC0tZGFyay1ibHVlOiAjeyRkYXJrLWJsdWV9O1xuICAtLW1hcm9vbjogI3skbWFyb29ufTtcbiAgLS1wdXJwbGU6ICN7JHB1cnBsZX07XG59XG4iLCJAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ0NhdmVhdCc7XG4gICAgc3JjOiB1cmwoJy4uLy4uL2ZvbnRzL0JvbGQvQ2F2ZWF0LUJvbGQud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXG4gICAgICAgIHVybCgnLi4vLi4vZm9udHMvQm9sZC9DYXZlYXQtQm9sZC53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtZGlzcGxheTogc3dhcDtcbn1cblxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdDYXZlYXQnO1xuICAgIHNyYzogdXJsKCcuLi8uLi9mb250cy9SZWd1bGFyL0NhdmVhdC1SZWd1bGFyLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxuICAgICAgICB1cmwoJy4uLy4uL2ZvbnRzL1JlZ3VsYXIvQ2F2ZWF0LVJlZ3VsYXIud29mZicpIGZvcm1hdCgnd29mZicpO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtZGlzcGxheTogc3dhcDtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnRmlndXJpbmVTeW1ib2xUMSc7XG4gIHNyYzogdXJsKCcuLi8uLi9mb250cy8zcmQgUGFydHkvQ2hlc3NWYXJpYW50cy9GaWd1cmluZVN5bWJvbFQxQm9sZC53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcbiAgICAgIHVybCgnLi4vLi4vZm9udHMvM3JkIFBhcnR5L0NoZXNzVmFyaWFudHMvRmlndXJpbmVTeW1ib2xUMUJvbGQud29mZicpIGZvcm1hdCgnd29mZicpO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ0ZpZ3VyaW5lU3ltYm9sVDEnO1xuICBzcmM6IHVybCgnLi4vLi4vZm9udHMvM3JkIFBhcnR5L0NoZXNzVmFyaWFudHMvRmlndXJpbmVTeW1ib2xUMS53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcbiAgICAgIHVybCgnLi4vLi4vZm9udHMvM3JkIFBhcnR5L0NoZXNzVmFyaWFudHMvRmlndXJpbmVTeW1ib2xUMS53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdTYW5jdHVhcnlQbGF5Z3JvdW5kJztcbiAgc3JjOiB1cmwoJy4uLy4uL2ZvbnRzLzNyZCBQYXJ0eS9TYW5jdHVhcnlQbGF5Z3JvdW5kLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxuICAgICAgdXJsKCcuLi8uLi9mb250cy8zcmQgUGFydHkvU2FuY3R1YXJ5UGxheWdyb3VuZC53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xufVxuXG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ0FtaXRhJztcbiAgc3JjOiB1cmwoJy4uLy4uL2ZvbnRzLzNyZCBQYXJ0eS9BbWl0YS9BbWl0YS1SZWd1bGFyLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxuICAgICAgdXJsKCcuLi8uLi9mb250cy8zcmQgUGFydHkvQW1pdGEvQW1pdGEtUmVndWxhci53b2ZmMicpIGZvcm1hdCgnd29mZicpO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbn0iLCIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiQ2F2ZWF0XCI7XG4gIHNyYzogdXJsKFwiLi4vLi4vZm9udHMvQm9sZC9DYXZlYXQtQm9sZC53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKSwgdXJsKFwiLi4vLi4vZm9udHMvQm9sZC9DYXZlYXQtQm9sZC53b2ZmXCIpIGZvcm1hdChcIndvZmZcIik7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJDYXZlYXRcIjtcbiAgc3JjOiB1cmwoXCIuLi8uLi9mb250cy9SZWd1bGFyL0NhdmVhdC1SZWd1bGFyLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpLCB1cmwoXCIuLi8uLi9mb250cy9SZWd1bGFyL0NhdmVhdC1SZWd1bGFyLndvZmZcIikgZm9ybWF0KFwid29mZlwiKTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiRmlndXJpbmVTeW1ib2xUMVwiO1xuICBzcmM6IHVybChcIi4uLy4uL2ZvbnRzLzNyZCBQYXJ0eS9DaGVzc1ZhcmlhbnRzL0ZpZ3VyaW5lU3ltYm9sVDFCb2xkLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpLCB1cmwoXCIuLi8uLi9mb250cy8zcmQgUGFydHkvQ2hlc3NWYXJpYW50cy9GaWd1cmluZVN5bWJvbFQxQm9sZC53b2ZmXCIpIGZvcm1hdChcIndvZmZcIik7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJGaWd1cmluZVN5bWJvbFQxXCI7XG4gIHNyYzogdXJsKFwiLi4vLi4vZm9udHMvM3JkIFBhcnR5L0NoZXNzVmFyaWFudHMvRmlndXJpbmVTeW1ib2xUMS53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKSwgdXJsKFwiLi4vLi4vZm9udHMvM3JkIFBhcnR5L0NoZXNzVmFyaWFudHMvRmlndXJpbmVTeW1ib2xUMS53b2ZmXCIpIGZvcm1hdChcIndvZmZcIik7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlNhbmN0dWFyeVBsYXlncm91bmRcIjtcbiAgc3JjOiB1cmwoXCIuLi8uLi9mb250cy8zcmQgUGFydHkvU2FuY3R1YXJ5UGxheWdyb3VuZC53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKSwgdXJsKFwiLi4vLi4vZm9udHMvM3JkIFBhcnR5L1NhbmN0dWFyeVBsYXlncm91bmQud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJBbWl0YVwiO1xuICBzcmM6IHVybChcIi4uLy4uL2ZvbnRzLzNyZCBQYXJ0eS9BbWl0YS9BbWl0YS1SZWd1bGFyLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpLCB1cmwoXCIuLi8uLi9mb250cy8zcmQgUGFydHkvQW1pdGEvQW1pdGEtUmVndWxhci53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmXCIpO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbn1cbi8qKioqKioqKioqKioqKioqKioqIE1lbnUgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKioqKioqIE1lbnUgQ29udHJvbHMgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBDb250YWluZXIgVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgQ29udGFpbmVyIFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIENvbnRhaW5lciBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBIaWdobGlnaHQgVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgQW5ub3RhdGlvbiBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBWYXJpYXRpb24gVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgUGx5IFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKiogQ29udHJvbCBDb2xvcnMgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKioqIEJvYXJkIENvbG9ycyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKiogRm9udCBTaXplcyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG46cm9vdCB7XG4gIC0tYmctY29sb3I6ICNmMmYzZjc7XG4gIC0tZmctY29sb3I6ICMzODNhNDE7XG4gIC0tcmVkOiAjZTQzMDMwO1xuICAtLWdyZWVuOiAjMTlhMTg3O1xuICAtLWJsdWU6ICMzNjdiZjA7XG4gIC0tZGFyay1ibHVlOiAjMjY1YWIxO1xuICAtLW1hcm9vbjogI2I4MTc0YztcbiAgLS1wdXJwbGU6ICM4YzQyYWI7XG59XG5cbm1hdC1kaXZpZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIG1hcmdpbjogMnB4O1xufVxuXG4ubWF0LWdyaWQtdGlsZSB7XG4gIGJhY2tncm91bmQ6ICM1ODU4NThmZjtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LWZhbWlseTogXCJGaWd1cmluZVN5bWJvbFQxXCI7XG4gIGZvbnQtd2VpZ2h0OiAzNjA7XG4gIG1heC13aWR0aDogMTY0cHg7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgdGV4dC1hbGlnbjogYXV0bztcbn1cblxuLnNjb3JlLXRpdGxlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDBweDtcbiAgbGVmdDogLTJweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW8tdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG4uc2NvcmUtbGlzdCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMHB4O1xuICByaWdodDogMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDEycHg7XG4gIHBhZGRpbmctdG9wOiAycHg7XG4gIHBhZGRpbmctYm90dG9tOiAycHg7XG4gIHRvcDogMzJweDtcbiAgaGVpZ2h0OiBjYWxjKDk5JSAtIDMwcHgpO1xuICBvdmVyZmxvdzogYXV0bztcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lO1xuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1vLXVzZXItc2VsZWN0OiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgYmFja2dyb3VuZDogdmFyKC0tZ3NMaXN0QmFja2dyb3VuZCk7XG59XG5cbi5nYW1lc2NvcmUtY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tZ3NCYWNrZ3JvdW5kKTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXI6IDJweCBibGFjayBzb2xpZDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbGluZS1oZWlnaHQ6IHZhcigtLWdzVGV4dFNpemUpO1xuICB3b3JkLWJyZWFrOiBrZWVwLWFsbDtcbiAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcbn1cblxuLmdzLW1lbnUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICB0b3A6IDEwJTtcbiAgbGVmdDogMTAlO1xuICB3aWR0aDogODAlO1xuICBoZWlnaHQ6IDgwJTtcbiAgbWF4LWhlaWdodDogNDgwcHg7XG4gIG1heC13aWR0aDogNDgwcHg7XG59XG5cbi5yZXNpemUtaGFuZGxlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjbGlwOiB0cnVlO1xuICB0b3A6IGNhbGMoNTAlIC0gM2VtKTtcbiAgd2lkdGg6IDM2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyOiBzb2xpZCBncmV5IDNweDtcbiAgaGVpZ2h0OiA2ZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMGE7XG4gIGN1cnNvcjogZ3JhYjtcbn1cblxuLmlucHV0LWJveCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDJweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMzAwcHg7XG4gIGJvcmRlcjogc29saWQgYmxhY2sgNHB4O1xufVxuXG4uc2NvcmUtdGFibGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMHB4O1xuICByaWdodDogMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDEycHg7XG4gIHBhZGRpbmctdG9wOiAycHg7XG4gIHBhZGRpbmctYm90dG9tOiAycHg7XG4gIHRvcDogMzJweDtcbiAgaGVpZ2h0OiBjYWxjKDk5JSAtIDMwcHgpO1xuICBvdmVyZmxvdzogYXV0bztcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lO1xuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1vLXVzZXItc2VsZWN0OiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ScoreFlow, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'score-flow',
                templateUrl: './score-flow.component.html',
                styleUrls: ['./score-flow.component.scss'],
            }]
    }], function () { return [{ type: src_app_services_aria_service__WEBPACK_IMPORTED_MODULE_2__["AriaService"] }]; }, { scoreItems: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"],
            args: [_flow_item_flow_item_component__WEBPACK_IMPORTED_MODULE_1__["FlowItem"]]
        }], currentItem: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/aria-score/score-table/score-table.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/aria-score/score-table/score-table.component.ts ***!
  \*****************************************************************/
/*! exports provided: ScoreTable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScoreTable", function() { return ScoreTable; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _table_column_table_column_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./table-column/table-column.component */ "./src/app/aria-score/score-table/table-column/table-column.component.ts");
/* harmony import */ var _services_aria_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/aria.service */ "./src/app/services/aria.service.ts");
/* harmony import */ var _services_themes_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/themes.service */ "./src/app/services/themes.service.ts");
/* harmony import */ var _services_layout_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/layout.service */ "./src/app/services/layout.service.ts");






const _c0 = ["comment"];
const _c1 = ["scoreArea"];
function ScoreTable_table_column_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "table-column", 4);
} if (rf & 2) {
    const column_r4 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("index", column_r4);
} }
function ScoreTable_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.moveComment, "\n");
} }
class ScoreTable {
    constructor(aria, theme, layout, renderer) {
        this.aria = aria;
        this.theme = theme;
        this.layout = layout;
        this.renderer = renderer;
        this.columns = [];
        this.rowCount = 0;
        this.moveComment = '';
        this.width = 0;
        this.height = 0;
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        window.setTimeout(() => {
            let container = document.getElementById('score-table-' + this.aria.UUID);
            if (container) {
                this.container = container;
            }
            this.layout.gameScoreElement = document.getElementById('score-' + this.aria.UUID);
            if (this.layout.gameScoreElement) {
                const width = this.layout.gameScoreElement.clientWidth;
                if (!isNaN(width)) {
                    this.width = width;
                    this.height = this.layout.gameScoreElement.clientHeight;
                }
            }
            this.resize();
        }, 10);
    }
    updateViewSize() {
        window.setTimeout(() => {
            if (this.resize) {
                this.resize();
            }
        }, 10);
    }
    ngOnChanges(changes) {
        if (this.resize) {
            this.resize();
        }
    }
    clearSelection() {
        const columns = this.scoreTables.toArray();
        for (let i = 0; i < columns.length; ++i) {
            columns[i].clearSelection();
        }
    }
    selectGameScoreItem(index) {
        if (this.aria.currentItem) {
            this.aria.currentItem.setSelected(false);
        }
        //this.variations = [];
        if (index < this.aria.gameScoreItems.length && index >= 0) {
            this.aria.currentItem = this.aria.gameScoreItems[index];
            const targetColumn = index % this.rowCount;
            this.aria.currentItem.setSelected(true);
            if (this.aria.currentItem.move) {
                const comment = this.aria.currentItem.move.comment();
                if (comment) {
                    this.moveComment = comment;
                }
                else {
                    this.moveComment = '';
                }
                // const variants = this.currentItem.move.variations();
                // for(let i = 0; i < variants.length; ++i) {
                //   const variation = variants[i];
                //   this.variations.push([variation.initialFullMoveNumber(), variation.first().notation()])
                // }
            }
        }
        else {
            this.aria.currentItem = null;
        }
        //this.updateViewSize();
    }
    resize(width = this.width, height = this.height) {
        if (this.aria.gameScoreItems.length == 0 || width == 0) {
            return;
        }
        if (!this.container || !this.scoreArea) {
            window.setTimeout(() => { this.resize(width, height); }, 100);
            return;
        }
        let scoreSize = height - 32;
        if (this.aria.currentItem && this.aria.currentItem.move) {
            let comment = this.aria.currentItem.move.comment();
            if (comment && comment.length >= 0) {
                if (!this.comment) {
                    window.setTimeout(() => { this.resize(width, height); }, 10);
                    return;
                }
                scoreSize = height;
            }
        }
        let moves = Math.ceil(this.aria.gameScoreItems.length / 2);
        let existing_items = document.getElementsByClassName('gsi-container');
        let item_height = 25;
        if (existing_items && existing_items.length) {
            const first = existing_items[0];
            item_height = first.clientHeight;
        }
        if (height <= 0) {
            height = ((Math.ceil(moves / 3) + (this.aria.showTableHeader.value ? 2 : 1)) * item_height);
            if (this.container) {
                this.renderer.setStyle(this.container, 'height', height + 'px');
            }
        }
        switch (this.layout.state) {
            //@ts-ignore
            case 1: { }
            //@ts-ignore
            case 2: { }
            case 3: {
                this.width = width;
                this.height = height;
                let max_row_count = Math.floor(height / item_height) + (this.aria.showTableHeader.value ? 0 : 1);
                let max_columns = Math.floor(width / 176);
                if (max_row_count * max_columns >= moves) {
                    // it will fit
                    for (let i = Math.ceil(moves / max_row_count); i < max_columns; ++i) {
                        if (moves % i === 0) {
                            max_columns = i;
                            break;
                        }
                    }
                    this.rowCount = Math.ceil(moves / max_columns); // even the columns out
                    //max_columns = Math.floor(moves/this.rowCount);
                }
                else { // determine whats the best column count based on width
                    for (let i = max_columns; i >= 2; --i) {
                        if (moves % i === 0) {
                            max_columns = i;
                            break;
                        }
                    }
                    //max_columns = Math.floor( (3 + max_columns)/2);
                    this.rowCount = Math.ceil(moves / max_columns);
                }
                if (this.container) {
                    this.renderer.setStyle(this.container, 'height', 'unset');
                    this.renderer.setStyle(this.container, 'overflow-y', 'scroll');
                }
                if (this.scoreArea) {
                    this.renderer.setStyle(this.scoreArea.nativeElement, 'height', scoreSize + 'px');
                    this.renderer.setStyle(this.scoreArea.nativeElement, 'overflow-y', 'unset');
                    this.renderer.setStyle(this.scoreArea.nativeElement, 'overflow-x', 'hidden');
                }
                this.columns = Array.from({ length: max_columns }, (_, i) => i + 1);
                this.theme.gsTableItemWidth.next(Math.round((width - (32 * this.columns.length)) / (this.columns.length * 2)) + 'px');
                window.setTimeout(() => {
                    if (this.scoreTables) {
                        const tables = this.scoreTables.toArray();
                        for (let i = 0; i < tables.length; ++i) {
                            tables[i].setData(this.aria.gameScoreItems, i * this.rowCount, this.rowCount);
                        }
                    }
                }, 1);
                break;
            }
            case 4: {
                if (this.container) {
                    //this.renderer.setStyle(this.container, 'width', '100%');
                    // if(this.container.clientHeight == 0) {
                    // this.renderer.setStyle(this.container, 'height', '800px');
                    //   window.setTimeout(()=>{this.resize(width, height)}, 2);
                    // }
                    this.renderer.setStyle(this.container, 'height', 'unset');
                    //this.renderer.setStyle(this.container, 'overflow-y', 'visible');
                }
                if (this.scoreArea) {
                    this.renderer.setStyle(this.scoreArea.nativeElement, 'height', (scoreSize - 10) + 'px');
                    this.renderer.setStyle(this.scoreArea.nativeElement, 'overflow-y', 'unset');
                    this.renderer.setStyle(this.scoreArea.nativeElement, 'overflow-x', 'hidden');
                }
                let max_row_count = Math.floor(scoreSize / item_height) + (this.aria.showTableHeader.value ? 0 : 1);
                let max_columns = Math.floor(width / 180);
                if (max_row_count * max_columns >= moves) {
                    // it will fit
                    for (let i = Math.ceil(moves / max_row_count); i < max_columns; ++i) {
                        if (moves % i === 0) {
                            max_columns = i;
                            break;
                        }
                    }
                    this.rowCount = Math.ceil(moves / max_columns); // even the columns out
                    //max_columns = Math.floor(moves/this.rowCount);
                }
                else { // determine whats the best column count based on width
                    max_columns = Math.floor(width / 180);
                    this.rowCount = Math.ceil(moves / max_columns);
                }
                this.columns = Array.from({ length: max_columns }, (_, i) => i + 1);
                this.theme.gsTableItemWidth.next(Math.round((width - (32 * this.columns.length)) / (this.columns.length * 2)) + 'px');
                window.setTimeout(() => {
                    if (this.scoreTables) {
                        const tables = this.scoreTables.toArray();
                        for (let i = 0; i < tables.length; ++i) {
                            tables[i].setData(this.aria.gameScoreItems, i * this.rowCount, this.rowCount);
                        }
                    }
                }, 1);
            }
        }
    }
}
ScoreTable.ɵfac = function ScoreTable_Factory(t) { return new (t || ScoreTable)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_aria_service__WEBPACK_IMPORTED_MODULE_2__["AriaService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_themes_service__WEBPACK_IMPORTED_MODULE_3__["ThemeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_layout_service__WEBPACK_IMPORTED_MODULE_4__["LayoutService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); };
ScoreTable.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ScoreTable, selectors: [["score-table"]], viewQuery: function ScoreTable_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_table_column_table_column_component__WEBPACK_IMPORTED_MODULE_1__["TableColumn"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.comment = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.scoreArea = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.scoreTables = _t);
    } }, inputs: { columns: "columns", rowCount: "rowCount" }, outputs: { moveComment: "moveComment" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 4, vars: 2, consts: [[1, "score-area"], ["scoreArea", ""], [3, "index", 4, "ngFor", "ngForOf"], ["class", "comment", 4, "ngIf"], [3, "index"], [1, "comment"], ["comment", ""]], template: function ScoreTable_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ScoreTable_table_column_2_Template, 1, 1, "table-column", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ScoreTable_div_3_Template, 3, 1, "div", 3);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.columns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.moveComment.length > 0);
    } }, styles: ["@font-face {\n  font-family: \"Caveat\";\n  src: url('Caveat-Bold.woff2') format(\"woff2\"), url('Caveat-Bold.woff') format(\"woff\");\n  font-weight: bold;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"Caveat\";\n  src: url('Caveat-Regular.woff2') format(\"woff2\"), url('Caveat-Regular.woff') format(\"woff\");\n  font-weight: 600;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"FigurineSymbolT1\";\n  src: url('FigurineSymbolT1Bold.woff2') format(\"woff2\"), url('FigurineSymbolT1Bold.woff') format(\"woff\");\n  font-weight: bold;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"FigurineSymbolT1\";\n  src: url('FigurineSymbolT1.woff2') format(\"woff2\"), url('FigurineSymbolT1.woff') format(\"woff\");\n  font-weight: 600;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"SanctuaryPlayground\";\n  src: url('SanctuaryPlayground.woff2') format(\"woff2\"), url('SanctuaryPlayground.woff') format(\"woff\");\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"Amita\";\n  src: url('Amita-Regular.woff2') format(\"woff2\"), url('Amita-Regular.woff2') format(\"woff\");\n  font-style: normal;\n  font-display: swap;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n[_ngcontent-%COMP%]:root {\n  --bg-color: #f2f3f7;\n  --fg-color: #383a41;\n  --red: #e43030;\n  --green: #19a187;\n  --blue: #367bf0;\n  --dark-blue: #265ab1;\n  --maroon: #b8174c;\n  --purple: #8c42ab;\n}\nscore-column[_ngcontent-%COMP%] {\n  min-width: 172px;\n  height: 100%;\n}\n.score-area[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: row nowrap;\n  width: 100%;\n  justify-content: space-around;\n  align-content: center;\n}\n.comment[_ngcontent-%COMP%] {\n  padding: 2px;\n  max-height: 42px;\n  height: auto;\n  line-height: 20px;\n  padding-left: 4px;\n  background: var(--gsBackgroundAN);\n  color: var(--gsTextColorAN);\n  border: var(--gsBorderAN);\n  font-size: var(--gsTextSize);\n}\n.variation-bar[_ngcontent-%COMP%] {\n  min-height: 28px;\n  line-height: 16px;\n  display: flex;\n  flex-flow: row nowrap;\n  align-content: center;\n  justify-content: space-around;\n}\n.variation-title[_ngcontent-%COMP%] {\n  order: 0;\n  font-size: 18px;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMuc2NzcyIsInNyYy9hc3NldHMvc2Nzcy9tb2R1bGVzL19mb250cy5zY3NzIiwic3JjL2FwcC9hcmlhLXNjb3JlL3Njb3JlLXRhYmxlL3Njb3JlLXRhYmxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhFQUFBO0FDQUE7RUFDSSxxQkFBQTtFQUNBLHFGQUFBO0VBRUEsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDQ0o7QURFQTtFQUNJLHFCQUFBO0VBQ0EsMkZBQUE7RUFFQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNESjtBRElBO0VBQ0UsK0JBQUE7RUFDQSx1R0FBQTtFQUVBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0hGO0FETUE7RUFDRSwrQkFBQTtFQUNBLCtGQUFBO0VBRUEsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDTEY7QURRQTtFQUNFLGtDQUFBO0VBQ0EscUdBQUE7RUFFQSxrQkFBQTtFQUNBLGtCQUFBO0FDUEY7QURXQTtFQUNFLG9CQUFBO0VBQ0EsMEZBQUE7RUFFQSxrQkFBQTtFQUNBLGtCQUFBO0FDVkY7QUZEQSwrRUFBQTtBQUdBLGtGQUFBO0FBS0EsK0VBQUE7QUFVQSwrRUFBQTtBQU1BLCtFQUFBO0FBTUEsK0VBQUE7QUFNQSxnRkFBQTtBQUtBLCtFQUFBO0FBS0EseUVBQUE7QUFLQSx5RUFBQTtBQUlBLHVFQUFBO0FBUUEscUVBQUE7QUF3QkE7RUFDRSxtQkFBQTtFQUNBLG1CQUFBO0VBRUEsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBRXpFRjtBQTdEQTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtBQWdFSjtBQTdEQTtFQUNJLGFBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSw2QkFBQTtFQUNBLHFCQUFBO0FBZ0VKO0FBN0RBO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQ0Z5RGE7RUV4RGIsMkJGdURZO0VFdERaLHlCRndEUztFRXZEVCw0QkY2QlM7QUVtQ2I7QUE5REE7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSw2QkFBQTtBQWlFSjtBQTlEQTtFQUNJLFFBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFpRUoiLCJmaWxlIjoic3JjL2FwcC9hcmlhLXNjb3JlL3Njb3JlLXRhYmxlL3Njb3JlLXRhYmxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuXG5AaW1wb3J0IFwiLi9hc3NldHMvc2Nzcy9tb2R1bGVzL19mb250cy5zY3NzXCI7XG4kZ2FtZXNjb3JlLWZhbWlseTogXCJGaWd1cmluZVN5bWJvbFQxXCI7XG4kZ2FtZXNjb3JlLWhpZ2hsaWdodDogIzU4NTg1OGZmO1xuJGdhbWVzY29yZS1mb3JlZ3JvdW5kOiB3aGl0ZTtcblxuJHJlZDogI2U0MzAzMDtcbiRncmVlbjogIzE5YTE4NztcbiRsaWdodC1ibHVlOiAjMDBmZmZmZmY7XG4kYmx1ZTogIzM2N2JmMDtcbiRkYXJrLWJsdWU6ICMyNjVhYjE7XG4kbWFyb29uOiAjYjgxNzRjO1xuJHB1cnBsZTogIzhjNDJhYjtcblxuLy8gTWFpbiBBUklBIENvbG9yIEVsZW1lbnQgVmFyaWFibGVzXG4kdGV4dENvbG9yOiB2YXIoLS10ZXh0Q29sb3IpOyAvLyBNYWluIFRleHQgQ29sb3JcbiR0ZXh0Q29sb3JBdHRlbnRpb246IHZhcigtLXRleHRDb2xvckF0dGVudGlvbik7IC8vIEF0dGVudGlvbiB0ZXh0XG4kdGV4dENvbG9yUmVtb3ZlOiB2YXIoLS10ZXh0Q29sb3JSZW1vdmUpOyAvLyBSZW1vdmUvRGVsZXRlL0Nsb3NlXG4kdGV4dENvbG9yQWRkOiB2YXIoLS10ZXh0Q29sb3JBZGQpOyAvLyBBZGQvQ3JlYXRlL09wZW5cbiR0ZXh0Q29sb3JBY3RpdmU6IHZhcigtLXRleHRDb2xvckFjdGl2ZSk7IC8vIEFkZC9DcmVhdGUvT3BlblxuJGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQpOyAvLyBNYWluIGJhY2tncm91bmQgQ29sb3JcbiRiZ0NvbnRhaW5lcjogdmFyKC0tYmdDb250YWluZXIpOyAvLyBiYWNrZ3JvdW5kIG9mIENvbnRhaW5lcnNcbiRiZ01lbnU6IHZhcigtLWJnTWVudSk7IC8vIGJhY2tncm91bmQgb2YgTWVudXNcbiRiZ0l0ZW06IHZhcigtLWJnSXRlbSk7IC8vIGJhY2tncm91bmQgb2YgSXRlbXNcblxuLy8gQ29udGV4dCBNZW51XG4kYmdDb250ZXh0OiB2YXIoLS1iZ0NvbnRleHQpOyAvLyBiYWNrZ3JvdW5kIG9mIENvbnRleHQgTWVudVxuJHRleHRDb2xvckNvbnRleHQ6IHZhcigtLXRleHRDb2xvckNvbnRleHQpOyAvLyB0ZXh0IGNvbG9yIENvbnRleHQgTWVudVxuJGJvcmRlckNvbnRleHQ6IHZhcigtLWJvcmRlckNvbnRleHQpOyAvLyBib3JkZXIgQ29udGV4dCBNZW51XG4kb3ZlcmxheUNvbnRleHRCYWNrZ3JvdW5kOiB2YXIoXG4gIC0tb3ZlcmxheUNvbnRleHRCYWNrZ3JvdW5kXG4pOyAvLyBDb250ZXh0IE1lbnUgT3ZlcmxheSBiYWNrZ3JvdW5kIG1haW5cbiRvdmVybGF5Q29udGV4dEJhY2tncm91bmRHcmFkaWVudDogdmFyKFxuICAtLW92ZXJsYXlDb250ZXh0QmFja2dyb3VuZEdyYWRpZW50XG4pOyAvLyBDb250ZXh0IE1lbnUgYmFja2dyb3VuZCBncmFkaWVudFxuXG5cblxuLyoqKioqKioqKioqKioqKioqKiogTWVudSAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiRtZUJhY2tncm91bmQ6IHZhcigtLW1lQmFja2dyb3VuZCk7XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKiogTWVudSBDb250cm9scyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4kY3NGaWxsOiB2YXIoLS1jc0ZpbGwpO1xuJGNzQWNjZW50OiB2YXIoLS1jc0FjY2VudCk7XG4kY3NBY2NlbnQyOiB2YXIoLS1jc0FjY2VudDIpO1xuXG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIENvbnRhaW5lciBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuJGdzVGV4dENvbG9yOiB2YXIoLS1nc1RleHRDb2xvcik7IC8vIFRleHQgY29sb3IgZm9yIGdhbWUgc2NvcmVcbiRnc0JhY2tncm91bmQ6IHZhcigtLWdzQmFja2dyb3VuZCk7IC8vIGJhY2tncm91bmQgb2YgQ29udGFpbmVyc1xuJGdzTGlzdEJhY2tncm91bmQ6IHZhcigtLWdzTGlzdEJhY2tncm91bmQpOyAvLyBsaXN0IGJhY2tncm91bmQgb2YgZ2FtZSBzY29yZVxuJGdzQm9yZGVyOiB2YXIoLS1nc0JvcmRlcik7IC8vIGJhY2tncm91bmQgb2YgTWVudXNcbiRnc1RleHRTaXplOiB2YXIoLS1nc1RleHRTaXplKTsgLy8gYmFja2dyb3VuZCBvZiBNZW51c1xuJGdzRm9udEZhbWlseTogdmFyKC0tZ3NGb250RmFtaWx5KTsgLy8gc2NvcmUgZm9udFxuJGdzVGFibGVJdGVtV2lkdGg6IHZhcigtLWdzVGFibGVJdGVtV2lkdGgpOyAvLyB3aWR0aCBvZiBzY29yZSBpdGVtIGluIHRhYmxlIGxheW91dFxuJGdzVGFibGVQbHlXaWR0aDogdmFyKC0tZ3NUYWJsZVBseVdpZHRoKTsgLy8gd2lkdGggb2YgcGx5IGVsZW1lbnQgaW4gdGFibGUgbGF5b3V0XG5cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgQ29udGFpbmVyIFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4kZ3NUZXh0Q29sb3JNVzogdmFyKC0tZ3NUZXh0Q29sb3JNVyk7IC8vIFRleHQgY29sb3IgZm9yIGdhbWUgc2NvcmVcbiRnc0JhY2tncm91bmRNVzogdmFyKC0tZ3NCYWNrZ3JvdW5kTVcpOyAvLyBiYWNrZ3JvdW5kIG9mIENvbnRhaW5lcnNcbiRnc0JvcmRlck1XOiB2YXIoLS1nc0JvcmRlck1XKTsgLy8gYmFja2dyb3VuZCBvZiBNZW51c1xuJGdzVGV4dFNpemVNVzogdmFyKC0tZ3NUZXh0U2l6ZU1XKTsgLy8gYmFja2dyb3VuZCBvZiBNZW51c1xuXG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIENvbnRhaW5lciBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuJGdzVGV4dENvbG9yTUI6IHZhcigtLWdzVGV4dENvbG9yTUIpOyAvLyBUZXh0IGNvbG9yIGZvciBnYW1lIHNjb3JlXG4kZ3NCYWNrZ3JvdW5kTUI6IHZhcigtLWdzQmFja2dyb3VuZE1CKTsgLy8gYmFja2dyb3VuZCBvZiBDb250YWluZXJzXG4kZ3NCb3JkZXJNQjogdmFyKC0tZ3NCb3JkZXJNQik7IC8vIGJhY2tncm91bmQgb2YgTWVudXNcbiRnc1RleHRTaXplTUI6IHZhcigtLWdzVGV4dFNpemVNQik7IC8vIGJhY2tncm91bmQgb2YgTWVudXNcblxuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBIaWdobGlnaHQgVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiRnc1RleHRDb2xvckhHOiB2YXIoLS1nc1RleHRDb2xvckhHKTsgLy8gVGV4dCBjb2xvciBmb3IgaGlnaGxpZ2h0XG4kZ3NBbm5vdGF0aW9uQ29sb3JIRzogdmFyKC0tZ3NBbm5vdGF0aW9uQ29sb3JIRyk7IC8vIEFubm90YXRpb24vQ29tbWVudCBjb2xvciBmb3IgaGlnaGxpZ2h0XG4kZ3NCYWNrZ3JvdW5kSEc6IHZhcigtLWdzQmFja2dyb3VuZEhHKTsgLy8gYmFja2dyb3VuZCBmb3IgaGlnaGxpZ2h0XG4kZ3NCb3JkZXJIRzogdmFyKC0tZ3NCb3JkZXJIRyk7IC8vIGJvcmRlciBmb3IgaGlnaGxpZ2h0XG5cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgQW5ub3RhdGlvbiBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuJGdzVGV4dENvbG9yQU46IHZhcigtLWdzVGV4dENvbG9yQU4pOyAvLyBUZXh0IGNvbG9yIGZvciBoaWdobGlnaHRcbiRnc0JhY2tncm91bmRBTjogdmFyKC0tZ3NCYWNrZ3JvdW5kQU4pOyAvLyBiYWNrZ3JvdW5kIGZvciBoaWdobGlnaHRcbiRnc0JvcmRlckFOOiB2YXIoLS1nc0JvcmRlckFOKTsgLy8gYm9yZGVyIGZvciBoaWdobGlnaHRcblxuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBWYXJpYXRpb24gVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiRnc1RleHRDb2xvclZBOiB2YXIoLS1nc1RleHRDb2xvclZBKTsgLy8gVGV4dCBjb2xvciBmb3IgaGlnaGxpZ2h0XG4kZ3NCYWNrZ3JvdW5kVkE6IHZhcigtLWdzQmFja2dyb3VuZFZBKTsgLy8gYmFja2dyb3VuZCBmb3IgaGlnaGxpZ2h0XG4kZ3NCb3JkZXJWQTogdmFyKC0tZ3NCb3JkZXJWQSk7IC8vIGJvcmRlciBmb3IgaGlnaGxpZ2h0XG5cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgUGx5IFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4kZ3NUZXh0Q29sb3JQQzogdmFyKC0tZ3NUZXh0Q29sb3JQQyk7IC8vIFRleHQgY29sb3IgZm9yIGdhbWUgc2NvcmUgcGx5XG4kZ3NCYWNrZ3JvdW5kUEM6IHZhcigtLWdzQmFja2dyb3VuZFBDKTsgLy8gYmFja2dyb3VuZCBmb3IgZ2FtZSBzY29yZSBwbHlcbiRnc0JvcmRlclBDOiB2YXIoLS1nc0JvcmRlclBDKTsgLy8gYm9yZGVyIGZvciBnYW1lIHNjb3JlIHBseVxuXG4vKioqKioqKioqKioqKioqKioqKiogQ29udHJvbCBDb2xvcnMgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuJGNzQmFja2dyb3VuZDogdmFyKC0tY3NCYWNrZ3JvdW5kKTsgLy8gYmFja2dyb3VuZCBmb3IgY29udHJvbHNcbiRjc0NvbG9yOiB2YXIoLS1jc0NvbG9yKTsgLy8gY29udHJvbHMgY29sb3IgKGZvcmVncm91bmQpXG5cbi8qKioqKioqKioqKioqKioqKioqKiBCb2FyZCBDb2xvcnMgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuJGJvYXJkQkdEYXJrOiB2YXIoLS1ib2FyZEJHRGFyayk7IC8vIGJvYXJkIGRhcmsgdGlsZVxuJGJvYXJkQkdMaWdodDogdmFyKC0tYm9hcmRCR0xpZ2h0KTsgLy8gYm9hcmQgbGlnaHQgdGlsZVxuJGJvYXJkTGFiZWxMaWdodDogdmFyKC0tYm9hcmRMYWJlbExpZ2h0KTsgLy8gYm9hcmQgbGlnaHQgbGFiZWxcbiRib2FyZExhYmVsRGFyazogdmFyKC0tYm9hcmRMYWJlbERhcmspOyAvLyBib2FyZCBkYXJrIGxhYmVsXG5cblxuXG4vKioqKioqKioqKioqKioqKioqKiogRm9udCBTaXplcyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4kZ3NGb250U2l6ZTogdmFyKC0tZ3NGb250U2l6ZSk7IC8vIGJvYXJkIGRhcmsgdGlsZVxuJGdzRm9udFNpemVBTjogdmFyKC0tZ3NGb250U2l6ZUFOKTsgLy8gYm9hcmQgbGlnaHQgdGlsZVxuJGdzRm9udFNpemVIRzogdmFyKC0tZ3NGb250U2l6ZUhHKTsgLy8gYm9hcmQgbGlnaHQgbGFiZWxcbiRnc0ZvbnRTaXplVkE6IHZhcigtLWdzRm9udFNpemVWQSk7IC8vIGJvYXJkIGRhcmsgbGFiZWxcbiRnc0ZvbnRTaXplUEM6IHZhcigtLWdzRm9udFNpemVQQyk7IC8vIGJvYXJkIGRhcmsgbGFiZWxcbiRoZHJEYXRhRm9udFNpemU6IHZhcigtLWhkckRhdGFGb250U2l6ZSk7IC8vIHNpemUgb2YgcGxheWVyIHNob3djYXNlIGRhdGFcbiRoZHJOYW1lRm9udFNpemU6IHZhcigtLWhkck5hbWVGb250U2l6ZSk7IC8vIHNpemUgb2YgcGxheWVyIHNob3djYXNlIE5hbWVcbiRoZHJUaXRsZUZvbnRTaXplOiB2YXIoLS1oZHJUaXRsZUZvbnRTaXplKTsgLy8gc2l6ZSBvZiBwbGF5ZXIgc2hvd2Nhc2UgZGF0YVxuJGhkclZhcmlhbnRGb250U2l6ZTogdmFyKC0taGRyVmFyaWFudEZvbnRTaXplKTsgLy8gc2l6ZSBvZiBwbGF5ZXIgc2hvd2Nhc2UgTmFtZVxuJGhkck1hdGNoRGF0YUZvbnRTaXplOiB2YXIoLS1oZHJNYXRjaERhdGFGb250U2l6ZSk7IC8vIHNpemUgb2YgcGxheWVyIHNob3djYXNlIE5hbWVcbiRoZHJPcGVuaW5nRm9udFNpemU6IHZhcigtLWhkck1hdGNoRGF0YUZvbnRTaXplKTsgLy8gc2l6ZSBvZiBwbGF5ZXIgc2hvd2Nhc2UgTmFtZVxuJGhkclJlc3VsdEZvbnRTaXplOiB2YXIoLS1oZHJSZXN1bHRGb250U2l6ZSk7IC8vIHNpemUgb2YgcGxheWVyIHNob3djYXNlIE5hbWVcbiRoZHJSb3VuZEZvbnRTaXplOiB2YXIoLS1oZHJSb3VuZEZvbnRTaXplKTsgLy8gc2l6ZSBvZiBwbGF5ZXIgc2hvd2Nhc2UgTmFtZVxuXG4vLyBHZW5lcmFsIHN0dWZmXG4kdGV4dC1jb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XG4kYmctb3V0ZXI6IHZhcigtLWJnLW91dGVyKTtcbiRiZy1pbm5lcjogdmFyKC0tYmctaW5uZXIpO1xuXG4kYmctY29sb3I6ICNmMmYzZjc7XG4kZmctY29sb3I6ICMzODNhNDE7XG5cbiRnbG93LXNoYWRvdzogMCAwIDAuNWVtIHRyYW5zcGFyZW50aXplKCRibHVlLCAwLjMpO1xuOnJvb3Qge1xuICAtLWJnLWNvbG9yOiAjeyRiZy1jb2xvcn07XG4gIC0tZmctY29sb3I6ICN7JGZnLWNvbG9yfTtcblxuICAtLXJlZDogI3skcmVkfTtcbiAgLS1ncmVlbjogI3skZ3JlZW59O1xuICAtLWJsdWU6ICN7JGJsdWV9O1xuICAtLWRhcmstYmx1ZTogI3skZGFyay1ibHVlfTtcbiAgLS1tYXJvb246ICN7JG1hcm9vbn07XG4gIC0tcHVycGxlOiAjeyRwdXJwbGV9O1xufVxuIiwiQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdDYXZlYXQnO1xuICAgIHNyYzogdXJsKCcuLi8uLi9mb250cy9Cb2xkL0NhdmVhdC1Cb2xkLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxuICAgICAgICB1cmwoJy4uLy4uL2ZvbnRzL0JvbGQvQ2F2ZWF0LUJvbGQud29mZicpIGZvcm1hdCgnd29mZicpO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LWRpc3BsYXk6IHN3YXA7XG59XG5cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnQ2F2ZWF0JztcbiAgICBzcmM6IHVybCgnLi4vLi4vZm9udHMvUmVndWxhci9DYXZlYXQtUmVndWxhci53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcbiAgICAgICAgdXJsKCcuLi8uLi9mb250cy9SZWd1bGFyL0NhdmVhdC1SZWd1bGFyLndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LWRpc3BsYXk6IHN3YXA7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ0ZpZ3VyaW5lU3ltYm9sVDEnO1xuICBzcmM6IHVybCgnLi4vLi4vZm9udHMvM3JkIFBhcnR5L0NoZXNzVmFyaWFudHMvRmlndXJpbmVTeW1ib2xUMUJvbGQud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXG4gICAgICB1cmwoJy4uLy4uL2ZvbnRzLzNyZCBQYXJ0eS9DaGVzc1ZhcmlhbnRzL0ZpZ3VyaW5lU3ltYm9sVDFCb2xkLndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdGaWd1cmluZVN5bWJvbFQxJztcbiAgc3JjOiB1cmwoJy4uLy4uL2ZvbnRzLzNyZCBQYXJ0eS9DaGVzc1ZhcmlhbnRzL0ZpZ3VyaW5lU3ltYm9sVDEud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXG4gICAgICB1cmwoJy4uLy4uL2ZvbnRzLzNyZCBQYXJ0eS9DaGVzc1ZhcmlhbnRzL0ZpZ3VyaW5lU3ltYm9sVDEud29mZicpIGZvcm1hdCgnd29mZicpO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnU2FuY3R1YXJ5UGxheWdyb3VuZCc7XG4gIHNyYzogdXJsKCcuLi8uLi9mb250cy8zcmQgUGFydHkvU2FuY3R1YXJ5UGxheWdyb3VuZC53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcbiAgICAgIHVybCgnLi4vLi4vZm9udHMvM3JkIFBhcnR5L1NhbmN0dWFyeVBsYXlncm91bmQud29mZicpIGZvcm1hdCgnd29mZicpO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbn1cblxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdBbWl0YSc7XG4gIHNyYzogdXJsKCcuLi8uLi9mb250cy8zcmQgUGFydHkvQW1pdGEvQW1pdGEtUmVndWxhci53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcbiAgICAgIHVybCgnLi4vLi4vZm9udHMvM3JkIFBhcnR5L0FtaXRhL0FtaXRhLVJlZ3VsYXIud29mZjInKSBmb3JtYXQoJ3dvZmYnKTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG59IiwiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkNhdmVhdFwiO1xuICBzcmM6IHVybChcIi4uLy4uL2ZvbnRzL0JvbGQvQ2F2ZWF0LUJvbGQud29mZjJcIikgZm9ybWF0KFwid29mZjJcIiksIHVybChcIi4uLy4uL2ZvbnRzL0JvbGQvQ2F2ZWF0LUJvbGQud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiQ2F2ZWF0XCI7XG4gIHNyYzogdXJsKFwiLi4vLi4vZm9udHMvUmVndWxhci9DYXZlYXQtUmVndWxhci53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKSwgdXJsKFwiLi4vLi4vZm9udHMvUmVndWxhci9DYXZlYXQtUmVndWxhci53b2ZmXCIpIGZvcm1hdChcIndvZmZcIik7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkZpZ3VyaW5lU3ltYm9sVDFcIjtcbiAgc3JjOiB1cmwoXCIuLi8uLi9mb250cy8zcmQgUGFydHkvQ2hlc3NWYXJpYW50cy9GaWd1cmluZVN5bWJvbFQxQm9sZC53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKSwgdXJsKFwiLi4vLi4vZm9udHMvM3JkIFBhcnR5L0NoZXNzVmFyaWFudHMvRmlndXJpbmVTeW1ib2xUMUJvbGQud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiRmlndXJpbmVTeW1ib2xUMVwiO1xuICBzcmM6IHVybChcIi4uLy4uL2ZvbnRzLzNyZCBQYXJ0eS9DaGVzc1ZhcmlhbnRzL0ZpZ3VyaW5lU3ltYm9sVDEud29mZjJcIikgZm9ybWF0KFwid29mZjJcIiksIHVybChcIi4uLy4uL2ZvbnRzLzNyZCBQYXJ0eS9DaGVzc1ZhcmlhbnRzL0ZpZ3VyaW5lU3ltYm9sVDEud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJTYW5jdHVhcnlQbGF5Z3JvdW5kXCI7XG4gIHNyYzogdXJsKFwiLi4vLi4vZm9udHMvM3JkIFBhcnR5L1NhbmN0dWFyeVBsYXlncm91bmQud29mZjJcIikgZm9ybWF0KFwid29mZjJcIiksIHVybChcIi4uLy4uL2ZvbnRzLzNyZCBQYXJ0eS9TYW5jdHVhcnlQbGF5Z3JvdW5kLndvZmZcIikgZm9ybWF0KFwid29mZlwiKTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiQW1pdGFcIjtcbiAgc3JjOiB1cmwoXCIuLi8uLi9mb250cy8zcmQgUGFydHkvQW1pdGEvQW1pdGEtUmVndWxhci53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKSwgdXJsKFwiLi4vLi4vZm9udHMvM3JkIFBhcnR5L0FtaXRhL0FtaXRhLVJlZ3VsYXIud29mZjJcIikgZm9ybWF0KFwid29mZlwiKTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG59XG4vKioqKioqKioqKioqKioqKioqKiBNZW51ICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKioqKioqKiBNZW51IENvbnRyb2xzICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgQ29udGFpbmVyIFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIENvbnRhaW5lciBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBDb250YWluZXIgVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgSGlnaGxpZ2h0IFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIEFubm90YXRpb24gVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgVmFyaWF0aW9uIFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIFBseSBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKioqIENvbnRyb2wgQ29sb3JzICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqKiBCb2FyZCBDb2xvcnMgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKioqIEZvbnQgU2l6ZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuOnJvb3Qge1xuICAtLWJnLWNvbG9yOiAjZjJmM2Y3O1xuICAtLWZnLWNvbG9yOiAjMzgzYTQxO1xuICAtLXJlZDogI2U0MzAzMDtcbiAgLS1ncmVlbjogIzE5YTE4NztcbiAgLS1ibHVlOiAjMzY3YmYwO1xuICAtLWRhcmstYmx1ZTogIzI2NWFiMTtcbiAgLS1tYXJvb246ICNiODE3NGM7XG4gIC0tcHVycGxlOiAjOGM0MmFiO1xufVxuXG5zY29yZS1jb2x1bW4ge1xuICBtaW4td2lkdGg6IDE3MnB4O1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5zY29yZS1hcmVhIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiByb3cgbm93cmFwO1xuICB3aWR0aDogMTAwJTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmNvbW1lbnQge1xuICBwYWRkaW5nOiAycHg7XG4gIG1heC1oZWlnaHQ6IDQycHg7XG4gIGhlaWdodDogYXV0bztcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIHBhZGRpbmctbGVmdDogNHB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1nc0JhY2tncm91bmRBTik7XG4gIGNvbG9yOiB2YXIoLS1nc1RleHRDb2xvckFOKTtcbiAgYm9yZGVyOiB2YXIoLS1nc0JvcmRlckFOKTtcbiAgZm9udC1zaXplOiB2YXIoLS1nc1RleHRTaXplKTtcbn1cblxuLnZhcmlhdGlvbi1iYXIge1xuICBtaW4taGVpZ2h0OiAyOHB4O1xuICBsaW5lLWhlaWdodDogMTZweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiByb3cgbm93cmFwO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufVxuXG4udmFyaWF0aW9uLXRpdGxlIHtcbiAgb3JkZXI6IDA7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ScoreTable, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'score-table',
                templateUrl: './score-table.component.html',
                styleUrls: ['./score-table.component.scss']
            }]
    }], function () { return [{ type: _services_aria_service__WEBPACK_IMPORTED_MODULE_2__["AriaService"] }, { type: _services_themes_service__WEBPACK_IMPORTED_MODULE_3__["ThemeService"] }, { type: _services_layout_service__WEBPACK_IMPORTED_MODULE_4__["LayoutService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }]; }, { scoreTables: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"],
            args: [_table_column_table_column_component__WEBPACK_IMPORTED_MODULE_1__["TableColumn"]]
        }], comment: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['comment', { static: false }]
        }], scoreArea: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['scoreArea', { static: false }]
        }], columns: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], rowCount: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], moveComment: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/aria-score/score-table/table-column/table-column.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/aria-score/score-table/table-column/table-column.component.ts ***!
  \*******************************************************************************/
/*! exports provided: TableColumn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableColumn", function() { return TableColumn; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _table_item_table_item_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../table-item/table-item.component */ "./src/app/aria-score/score-table/table-item/table-item.component.ts");
/* harmony import */ var _services_aria_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/aria.service */ "./src/app/services/aria.service.ts");




function TableColumn_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "WHITE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "BLACK");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TableColumn_table_item_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "table-item", 6);
} if (rf & 2) {
    const row_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("whiteMove", row_r2.white)("blackMove", row_r2.black);
} }
class TableColumn {
    constructor(aria) {
        this.aria = aria;
        this.index = 0;
        this.size = 3;
        this.rows = [];
    }
    ngOnInit() {
    }
    ngOnChanges(changes) {
        if (changes.items) {
            this.setItems();
        }
    }
    setData(items, index, size) {
        this.aria.gameScoreItems = items;
        this.index = index;
        this.size = size;
        this.setItems();
    }
    clearSelection() {
        const rows = this.rowItems.toArray();
        for (let i = 0; i < rows.length; ++i) {
            rows[i].clearSelection();
        }
    }
    setItems() {
        if (this.aria.gameScoreItems.length && this.size) {
            let rows = this.aria.gameScoreItems.slice((this.index * 2), (this.index * 2) + (this.size * 2));
            this.rows = [];
            let white = null;
            let last = null;
            for (let i = 0; i < rows.length; ++i) {
                const item = rows[i];
                if (item.move) {
                    if (item.move.moveColor() == 'w') {
                        white = item;
                    }
                    else {
                        this.rows.push({ white, black: item });
                        white = null;
                    }
                }
                last = item;
            }
            if (white) {
                this.rows.push({ white, black: null });
            }
            for (let i = this.rows.length; i < this.size; ++i) {
                this.rows.push({ white: null, black: null });
            }
        }
    }
}
TableColumn.ɵfac = function TableColumn_Factory(t) { return new (t || TableColumn)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_aria_service__WEBPACK_IMPORTED_MODULE_2__["AriaService"])); };
TableColumn.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TableColumn, selectors: [["table-column"]], viewQuery: function TableColumn_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_table_item_table_item_component__WEBPACK_IMPORTED_MODULE_1__["TableItem"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.rowItems = _t);
    } }, inputs: { index: "index", size: "size" }, outputs: { rows: "rows" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 3, vars: 4, consts: [["class", "header", 4, "ngIf"], [3, "whiteMove", "blackMove", 4, "ngFor", "ngForOf"], [1, "header"], [1, "spacer"], [1, "wheader"], [1, "bheader"], [3, "whiteMove", "blackMove"]], template: function TableColumn_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TableColumn_div_0_Template, 6, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TableColumn_table_item_2_Template, 1, 2, "table-item", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, ctx.aria.showTableHeader));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.rows);
    } }, styles: ["@font-face {\n  font-family: \"Caveat\";\n  src: url('Caveat-Bold.woff2') format(\"woff2\"), url('Caveat-Bold.woff') format(\"woff\");\n  font-weight: bold;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"Caveat\";\n  src: url('Caveat-Regular.woff2') format(\"woff2\"), url('Caveat-Regular.woff') format(\"woff\");\n  font-weight: 600;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"FigurineSymbolT1\";\n  src: url('FigurineSymbolT1Bold.woff2') format(\"woff2\"), url('FigurineSymbolT1Bold.woff') format(\"woff\");\n  font-weight: bold;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"FigurineSymbolT1\";\n  src: url('FigurineSymbolT1.woff2') format(\"woff2\"), url('FigurineSymbolT1.woff') format(\"woff\");\n  font-weight: 600;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"SanctuaryPlayground\";\n  src: url('SanctuaryPlayground.woff2') format(\"woff2\"), url('SanctuaryPlayground.woff') format(\"woff\");\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"Amita\";\n  src: url('Amita-Regular.woff2') format(\"woff2\"), url('Amita-Regular.woff2') format(\"woff\");\n  font-style: normal;\n  font-display: swap;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n[_ngcontent-%COMP%]:root {\n  --bg-color: #f2f3f7;\n  --fg-color: #383a41;\n  --red: #e43030;\n  --green: #19a187;\n  --blue: #367bf0;\n  --dark-blue: #265ab1;\n  --maroon: #b8174c;\n  --purple: #8c42ab;\n}\ntable-item[_ngcontent-%COMP%] {\n  min-height: 32px;\n}\n.header[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 18px;\n  font-weight: bold;\n  display: flex;\n  flex-flow: row nowrap;\n}\n.header[_ngcontent-%COMP%]   .spacer[_ngcontent-%COMP%] {\n  width: var(--gsTablePlyWidth);\n  height: 100%;\n  border: 1px solid transparent;\n}\n.header[_ngcontent-%COMP%]   .wheader[_ngcontent-%COMP%] {\n  width: var(--gsTableItemWidth);\n  height: 100%;\n  border: 2px black solid;\n}\n.header[_ngcontent-%COMP%]   .bheader[_ngcontent-%COMP%] {\n  width: var(--gsTableItemWidth);\n  height: 100%;\n  background: black;\n  color: white;\n  border: 2px black solid;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMuc2NzcyIsInNyYy9hc3NldHMvc2Nzcy9tb2R1bGVzL19mb250cy5zY3NzIiwic3JjL2FwcC9hcmlhLXNjb3JlL3Njb3JlLXRhYmxlL3RhYmxlLWNvbHVtbi90YWJsZS1jb2x1bW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOEVBQUE7QUNBQTtFQUNJLHFCQUFBO0VBQ0EscUZBQUE7RUFFQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNDSjtBREVBO0VBQ0kscUJBQUE7RUFDQSwyRkFBQTtFQUVBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0RKO0FESUE7RUFDRSwrQkFBQTtFQUNBLHVHQUFBO0VBRUEsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDSEY7QURNQTtFQUNFLCtCQUFBO0VBQ0EsK0ZBQUE7RUFFQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNMRjtBRFFBO0VBQ0Usa0NBQUE7RUFDQSxxR0FBQTtFQUVBLGtCQUFBO0VBQ0Esa0JBQUE7QUNQRjtBRFdBO0VBQ0Usb0JBQUE7RUFDQSwwRkFBQTtFQUVBLGtCQUFBO0VBQ0Esa0JBQUE7QUNWRjtBRkRBLCtFQUFBO0FBR0Esa0ZBQUE7QUFLQSwrRUFBQTtBQVVBLCtFQUFBO0FBTUEsK0VBQUE7QUFNQSwrRUFBQTtBQU1BLGdGQUFBO0FBS0EsK0VBQUE7QUFLQSx5RUFBQTtBQUtBLHlFQUFBO0FBSUEsdUVBQUE7QUFRQSxxRUFBQTtBQXdCQTtFQUNFLG1CQUFBO0VBQ0EsbUJBQUE7RUFFQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FFekVGO0FBN0RBO0VBQ0ksZ0JBQUE7QUFnRUo7QUE3REE7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtBQWdFSjtBQS9ESTtFQUNJLDZCRjJDVTtFRTFDVixZQUFBO0VBQ0EsNkJBQUE7QUFpRVI7QUEvREk7RUFDSSw4QkZxQ1c7RUVwQ1gsWUFBQTtFQUNBLHVCQUFBO0FBaUVSO0FBL0RJO0VBQ0ksOEJGZ0NXO0VFL0JYLFlBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtBQWlFUiIsImZpbGUiOiJzcmMvYXBwL2FyaWEtc2NvcmUvc2NvcmUtdGFibGUvdGFibGUtY29sdW1uL3RhYmxlLWNvbHVtbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cblxuQGltcG9ydCBcIi4vYXNzZXRzL3Njc3MvbW9kdWxlcy9fZm9udHMuc2Nzc1wiO1xuJGdhbWVzY29yZS1mYW1pbHk6IFwiRmlndXJpbmVTeW1ib2xUMVwiO1xuJGdhbWVzY29yZS1oaWdobGlnaHQ6ICM1ODU4NThmZjtcbiRnYW1lc2NvcmUtZm9yZWdyb3VuZDogd2hpdGU7XG5cbiRyZWQ6ICNlNDMwMzA7XG4kZ3JlZW46ICMxOWExODc7XG4kbGlnaHQtYmx1ZTogIzAwZmZmZmZmO1xuJGJsdWU6ICMzNjdiZjA7XG4kZGFyay1ibHVlOiAjMjY1YWIxO1xuJG1hcm9vbjogI2I4MTc0YztcbiRwdXJwbGU6ICM4YzQyYWI7XG5cbi8vIE1haW4gQVJJQSBDb2xvciBFbGVtZW50IFZhcmlhYmxlc1xuJHRleHRDb2xvcjogdmFyKC0tdGV4dENvbG9yKTsgLy8gTWFpbiBUZXh0IENvbG9yXG4kdGV4dENvbG9yQXR0ZW50aW9uOiB2YXIoLS10ZXh0Q29sb3JBdHRlbnRpb24pOyAvLyBBdHRlbnRpb24gdGV4dFxuJHRleHRDb2xvclJlbW92ZTogdmFyKC0tdGV4dENvbG9yUmVtb3ZlKTsgLy8gUmVtb3ZlL0RlbGV0ZS9DbG9zZVxuJHRleHRDb2xvckFkZDogdmFyKC0tdGV4dENvbG9yQWRkKTsgLy8gQWRkL0NyZWF0ZS9PcGVuXG4kdGV4dENvbG9yQWN0aXZlOiB2YXIoLS10ZXh0Q29sb3JBY3RpdmUpOyAvLyBBZGQvQ3JlYXRlL09wZW5cbiRiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kKTsgLy8gTWFpbiBiYWNrZ3JvdW5kIENvbG9yXG4kYmdDb250YWluZXI6IHZhcigtLWJnQ29udGFpbmVyKTsgLy8gYmFja2dyb3VuZCBvZiBDb250YWluZXJzXG4kYmdNZW51OiB2YXIoLS1iZ01lbnUpOyAvLyBiYWNrZ3JvdW5kIG9mIE1lbnVzXG4kYmdJdGVtOiB2YXIoLS1iZ0l0ZW0pOyAvLyBiYWNrZ3JvdW5kIG9mIEl0ZW1zXG5cbi8vIENvbnRleHQgTWVudVxuJGJnQ29udGV4dDogdmFyKC0tYmdDb250ZXh0KTsgLy8gYmFja2dyb3VuZCBvZiBDb250ZXh0IE1lbnVcbiR0ZXh0Q29sb3JDb250ZXh0OiB2YXIoLS10ZXh0Q29sb3JDb250ZXh0KTsgLy8gdGV4dCBjb2xvciBDb250ZXh0IE1lbnVcbiRib3JkZXJDb250ZXh0OiB2YXIoLS1ib3JkZXJDb250ZXh0KTsgLy8gYm9yZGVyIENvbnRleHQgTWVudVxuJG92ZXJsYXlDb250ZXh0QmFja2dyb3VuZDogdmFyKFxuICAtLW92ZXJsYXlDb250ZXh0QmFja2dyb3VuZFxuKTsgLy8gQ29udGV4dCBNZW51IE92ZXJsYXkgYmFja2dyb3VuZCBtYWluXG4kb3ZlcmxheUNvbnRleHRCYWNrZ3JvdW5kR3JhZGllbnQ6IHZhcihcbiAgLS1vdmVybGF5Q29udGV4dEJhY2tncm91bmRHcmFkaWVudFxuKTsgLy8gQ29udGV4dCBNZW51IGJhY2tncm91bmQgZ3JhZGllbnRcblxuXG5cbi8qKioqKioqKioqKioqKioqKioqIE1lbnUgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4kbWVCYWNrZ3JvdW5kOiB2YXIoLS1tZUJhY2tncm91bmQpO1xuXG4vKioqKioqKioqKioqKioqKioqKioqKioqIE1lbnUgQ29udHJvbHMgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuJGNzRmlsbDogdmFyKC0tY3NGaWxsKTtcbiRjc0FjY2VudDogdmFyKC0tY3NBY2NlbnQpO1xuJGNzQWNjZW50MjogdmFyKC0tY3NBY2NlbnQyKTtcblxuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBDb250YWluZXIgVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiRnc1RleHRDb2xvcjogdmFyKC0tZ3NUZXh0Q29sb3IpOyAvLyBUZXh0IGNvbG9yIGZvciBnYW1lIHNjb3JlXG4kZ3NCYWNrZ3JvdW5kOiB2YXIoLS1nc0JhY2tncm91bmQpOyAvLyBiYWNrZ3JvdW5kIG9mIENvbnRhaW5lcnNcbiRnc0xpc3RCYWNrZ3JvdW5kOiB2YXIoLS1nc0xpc3RCYWNrZ3JvdW5kKTsgLy8gbGlzdCBiYWNrZ3JvdW5kIG9mIGdhbWUgc2NvcmVcbiRnc0JvcmRlcjogdmFyKC0tZ3NCb3JkZXIpOyAvLyBiYWNrZ3JvdW5kIG9mIE1lbnVzXG4kZ3NUZXh0U2l6ZTogdmFyKC0tZ3NUZXh0U2l6ZSk7IC8vIGJhY2tncm91bmQgb2YgTWVudXNcbiRnc0ZvbnRGYW1pbHk6IHZhcigtLWdzRm9udEZhbWlseSk7IC8vIHNjb3JlIGZvbnRcbiRnc1RhYmxlSXRlbVdpZHRoOiB2YXIoLS1nc1RhYmxlSXRlbVdpZHRoKTsgLy8gd2lkdGggb2Ygc2NvcmUgaXRlbSBpbiB0YWJsZSBsYXlvdXRcbiRnc1RhYmxlUGx5V2lkdGg6IHZhcigtLWdzVGFibGVQbHlXaWR0aCk7IC8vIHdpZHRoIG9mIHBseSBlbGVtZW50IGluIHRhYmxlIGxheW91dFxuXG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIENvbnRhaW5lciBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuJGdzVGV4dENvbG9yTVc6IHZhcigtLWdzVGV4dENvbG9yTVcpOyAvLyBUZXh0IGNvbG9yIGZvciBnYW1lIHNjb3JlXG4kZ3NCYWNrZ3JvdW5kTVc6IHZhcigtLWdzQmFja2dyb3VuZE1XKTsgLy8gYmFja2dyb3VuZCBvZiBDb250YWluZXJzXG4kZ3NCb3JkZXJNVzogdmFyKC0tZ3NCb3JkZXJNVyk7IC8vIGJhY2tncm91bmQgb2YgTWVudXNcbiRnc1RleHRTaXplTVc6IHZhcigtLWdzVGV4dFNpemVNVyk7IC8vIGJhY2tncm91bmQgb2YgTWVudXNcblxuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBDb250YWluZXIgVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiRnc1RleHRDb2xvck1COiB2YXIoLS1nc1RleHRDb2xvck1CKTsgLy8gVGV4dCBjb2xvciBmb3IgZ2FtZSBzY29yZVxuJGdzQmFja2dyb3VuZE1COiB2YXIoLS1nc0JhY2tncm91bmRNQik7IC8vIGJhY2tncm91bmQgb2YgQ29udGFpbmVyc1xuJGdzQm9yZGVyTUI6IHZhcigtLWdzQm9yZGVyTUIpOyAvLyBiYWNrZ3JvdW5kIG9mIE1lbnVzXG4kZ3NUZXh0U2l6ZU1COiB2YXIoLS1nc1RleHRTaXplTUIpOyAvLyBiYWNrZ3JvdW5kIG9mIE1lbnVzXG5cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgSGlnaGxpZ2h0IFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4kZ3NUZXh0Q29sb3JIRzogdmFyKC0tZ3NUZXh0Q29sb3JIRyk7IC8vIFRleHQgY29sb3IgZm9yIGhpZ2hsaWdodFxuJGdzQW5ub3RhdGlvbkNvbG9ySEc6IHZhcigtLWdzQW5ub3RhdGlvbkNvbG9ySEcpOyAvLyBBbm5vdGF0aW9uL0NvbW1lbnQgY29sb3IgZm9yIGhpZ2hsaWdodFxuJGdzQmFja2dyb3VuZEhHOiB2YXIoLS1nc0JhY2tncm91bmRIRyk7IC8vIGJhY2tncm91bmQgZm9yIGhpZ2hsaWdodFxuJGdzQm9yZGVySEc6IHZhcigtLWdzQm9yZGVySEcpOyAvLyBib3JkZXIgZm9yIGhpZ2hsaWdodFxuXG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIEFubm90YXRpb24gVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiRnc1RleHRDb2xvckFOOiB2YXIoLS1nc1RleHRDb2xvckFOKTsgLy8gVGV4dCBjb2xvciBmb3IgaGlnaGxpZ2h0XG4kZ3NCYWNrZ3JvdW5kQU46IHZhcigtLWdzQmFja2dyb3VuZEFOKTsgLy8gYmFja2dyb3VuZCBmb3IgaGlnaGxpZ2h0XG4kZ3NCb3JkZXJBTjogdmFyKC0tZ3NCb3JkZXJBTik7IC8vIGJvcmRlciBmb3IgaGlnaGxpZ2h0XG5cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgVmFyaWF0aW9uIFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4kZ3NUZXh0Q29sb3JWQTogdmFyKC0tZ3NUZXh0Q29sb3JWQSk7IC8vIFRleHQgY29sb3IgZm9yIGhpZ2hsaWdodFxuJGdzQmFja2dyb3VuZFZBOiB2YXIoLS1nc0JhY2tncm91bmRWQSk7IC8vIGJhY2tncm91bmQgZm9yIGhpZ2hsaWdodFxuJGdzQm9yZGVyVkE6IHZhcigtLWdzQm9yZGVyVkEpOyAvLyBib3JkZXIgZm9yIGhpZ2hsaWdodFxuXG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIFBseSBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuJGdzVGV4dENvbG9yUEM6IHZhcigtLWdzVGV4dENvbG9yUEMpOyAvLyBUZXh0IGNvbG9yIGZvciBnYW1lIHNjb3JlIHBseVxuJGdzQmFja2dyb3VuZFBDOiB2YXIoLS1nc0JhY2tncm91bmRQQyk7IC8vIGJhY2tncm91bmQgZm9yIGdhbWUgc2NvcmUgcGx5XG4kZ3NCb3JkZXJQQzogdmFyKC0tZ3NCb3JkZXJQQyk7IC8vIGJvcmRlciBmb3IgZ2FtZSBzY29yZSBwbHlcblxuLyoqKioqKioqKioqKioqKioqKioqIENvbnRyb2wgQ29sb3JzICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiRjc0JhY2tncm91bmQ6IHZhcigtLWNzQmFja2dyb3VuZCk7IC8vIGJhY2tncm91bmQgZm9yIGNvbnRyb2xzXG4kY3NDb2xvcjogdmFyKC0tY3NDb2xvcik7IC8vIGNvbnRyb2xzIGNvbG9yIChmb3JlZ3JvdW5kKVxuXG4vKioqKioqKioqKioqKioqKioqKiogQm9hcmQgQ29sb3JzICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiRib2FyZEJHRGFyazogdmFyKC0tYm9hcmRCR0RhcmspOyAvLyBib2FyZCBkYXJrIHRpbGVcbiRib2FyZEJHTGlnaHQ6IHZhcigtLWJvYXJkQkdMaWdodCk7IC8vIGJvYXJkIGxpZ2h0IHRpbGVcbiRib2FyZExhYmVsTGlnaHQ6IHZhcigtLWJvYXJkTGFiZWxMaWdodCk7IC8vIGJvYXJkIGxpZ2h0IGxhYmVsXG4kYm9hcmRMYWJlbERhcms6IHZhcigtLWJvYXJkTGFiZWxEYXJrKTsgLy8gYm9hcmQgZGFyayBsYWJlbFxuXG5cblxuLyoqKioqKioqKioqKioqKioqKioqIEZvbnQgU2l6ZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuJGdzRm9udFNpemU6IHZhcigtLWdzRm9udFNpemUpOyAvLyBib2FyZCBkYXJrIHRpbGVcbiRnc0ZvbnRTaXplQU46IHZhcigtLWdzRm9udFNpemVBTik7IC8vIGJvYXJkIGxpZ2h0IHRpbGVcbiRnc0ZvbnRTaXplSEc6IHZhcigtLWdzRm9udFNpemVIRyk7IC8vIGJvYXJkIGxpZ2h0IGxhYmVsXG4kZ3NGb250U2l6ZVZBOiB2YXIoLS1nc0ZvbnRTaXplVkEpOyAvLyBib2FyZCBkYXJrIGxhYmVsXG4kZ3NGb250U2l6ZVBDOiB2YXIoLS1nc0ZvbnRTaXplUEMpOyAvLyBib2FyZCBkYXJrIGxhYmVsXG4kaGRyRGF0YUZvbnRTaXplOiB2YXIoLS1oZHJEYXRhRm9udFNpemUpOyAvLyBzaXplIG9mIHBsYXllciBzaG93Y2FzZSBkYXRhXG4kaGRyTmFtZUZvbnRTaXplOiB2YXIoLS1oZHJOYW1lRm9udFNpemUpOyAvLyBzaXplIG9mIHBsYXllciBzaG93Y2FzZSBOYW1lXG4kaGRyVGl0bGVGb250U2l6ZTogdmFyKC0taGRyVGl0bGVGb250U2l6ZSk7IC8vIHNpemUgb2YgcGxheWVyIHNob3djYXNlIGRhdGFcbiRoZHJWYXJpYW50Rm9udFNpemU6IHZhcigtLWhkclZhcmlhbnRGb250U2l6ZSk7IC8vIHNpemUgb2YgcGxheWVyIHNob3djYXNlIE5hbWVcbiRoZHJNYXRjaERhdGFGb250U2l6ZTogdmFyKC0taGRyTWF0Y2hEYXRhRm9udFNpemUpOyAvLyBzaXplIG9mIHBsYXllciBzaG93Y2FzZSBOYW1lXG4kaGRyT3BlbmluZ0ZvbnRTaXplOiB2YXIoLS1oZHJNYXRjaERhdGFGb250U2l6ZSk7IC8vIHNpemUgb2YgcGxheWVyIHNob3djYXNlIE5hbWVcbiRoZHJSZXN1bHRGb250U2l6ZTogdmFyKC0taGRyUmVzdWx0Rm9udFNpemUpOyAvLyBzaXplIG9mIHBsYXllciBzaG93Y2FzZSBOYW1lXG4kaGRyUm91bmRGb250U2l6ZTogdmFyKC0taGRyUm91bmRGb250U2l6ZSk7IC8vIHNpemUgb2YgcGxheWVyIHNob3djYXNlIE5hbWVcblxuLy8gR2VuZXJhbCBzdHVmZlxuJHRleHQtY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xuJGJnLW91dGVyOiB2YXIoLS1iZy1vdXRlcik7XG4kYmctaW5uZXI6IHZhcigtLWJnLWlubmVyKTtcblxuJGJnLWNvbG9yOiAjZjJmM2Y3O1xuJGZnLWNvbG9yOiAjMzgzYTQxO1xuXG4kZ2xvdy1zaGFkb3c6IDAgMCAwLjVlbSB0cmFuc3BhcmVudGl6ZSgkYmx1ZSwgMC4zKTtcbjpyb290IHtcbiAgLS1iZy1jb2xvcjogI3skYmctY29sb3J9O1xuICAtLWZnLWNvbG9yOiAjeyRmZy1jb2xvcn07XG5cbiAgLS1yZWQ6ICN7JHJlZH07XG4gIC0tZ3JlZW46ICN7JGdyZWVufTtcbiAgLS1ibHVlOiAjeyRibHVlfTtcbiAgLS1kYXJrLWJsdWU6ICN7JGRhcmstYmx1ZX07XG4gIC0tbWFyb29uOiAjeyRtYXJvb259O1xuICAtLXB1cnBsZTogI3skcHVycGxlfTtcbn1cbiIsIkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnQ2F2ZWF0JztcbiAgICBzcmM6IHVybCgnLi4vLi4vZm9udHMvQm9sZC9DYXZlYXQtQm9sZC53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcbiAgICAgICAgdXJsKCcuLi8uLi9mb250cy9Cb2xkL0NhdmVhdC1Cb2xkLndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC1kaXNwbGF5OiBzd2FwO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ0NhdmVhdCc7XG4gICAgc3JjOiB1cmwoJy4uLy4uL2ZvbnRzL1JlZ3VsYXIvQ2F2ZWF0LVJlZ3VsYXIud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXG4gICAgICAgIHVybCgnLi4vLi4vZm9udHMvUmVndWxhci9DYXZlYXQtUmVndWxhci53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC1kaXNwbGF5OiBzd2FwO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdGaWd1cmluZVN5bWJvbFQxJztcbiAgc3JjOiB1cmwoJy4uLy4uL2ZvbnRzLzNyZCBQYXJ0eS9DaGVzc1ZhcmlhbnRzL0ZpZ3VyaW5lU3ltYm9sVDFCb2xkLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxuICAgICAgdXJsKCcuLi8uLi9mb250cy8zcmQgUGFydHkvQ2hlc3NWYXJpYW50cy9GaWd1cmluZVN5bWJvbFQxQm9sZC53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnRmlndXJpbmVTeW1ib2xUMSc7XG4gIHNyYzogdXJsKCcuLi8uLi9mb250cy8zcmQgUGFydHkvQ2hlc3NWYXJpYW50cy9GaWd1cmluZVN5bWJvbFQxLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxuICAgICAgdXJsKCcuLi8uLi9mb250cy8zcmQgUGFydHkvQ2hlc3NWYXJpYW50cy9GaWd1cmluZVN5bWJvbFQxLndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ1NhbmN0dWFyeVBsYXlncm91bmQnO1xuICBzcmM6IHVybCgnLi4vLi4vZm9udHMvM3JkIFBhcnR5L1NhbmN0dWFyeVBsYXlncm91bmQud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXG4gICAgICB1cmwoJy4uLy4uL2ZvbnRzLzNyZCBQYXJ0eS9TYW5jdHVhcnlQbGF5Z3JvdW5kLndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG59XG5cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnQW1pdGEnO1xuICBzcmM6IHVybCgnLi4vLi4vZm9udHMvM3JkIFBhcnR5L0FtaXRhL0FtaXRhLVJlZ3VsYXIud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXG4gICAgICB1cmwoJy4uLy4uL2ZvbnRzLzNyZCBQYXJ0eS9BbWl0YS9BbWl0YS1SZWd1bGFyLndvZmYyJykgZm9ybWF0KCd3b2ZmJyk7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xufSIsIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJDYXZlYXRcIjtcbiAgc3JjOiB1cmwoXCIuLi8uLi9mb250cy9Cb2xkL0NhdmVhdC1Cb2xkLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpLCB1cmwoXCIuLi8uLi9mb250cy9Cb2xkL0NhdmVhdC1Cb2xkLndvZmZcIikgZm9ybWF0KFwid29mZlwiKTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkNhdmVhdFwiO1xuICBzcmM6IHVybChcIi4uLy4uL2ZvbnRzL1JlZ3VsYXIvQ2F2ZWF0LVJlZ3VsYXIud29mZjJcIikgZm9ybWF0KFwid29mZjJcIiksIHVybChcIi4uLy4uL2ZvbnRzL1JlZ3VsYXIvQ2F2ZWF0LVJlZ3VsYXIud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJGaWd1cmluZVN5bWJvbFQxXCI7XG4gIHNyYzogdXJsKFwiLi4vLi4vZm9udHMvM3JkIFBhcnR5L0NoZXNzVmFyaWFudHMvRmlndXJpbmVTeW1ib2xUMUJvbGQud29mZjJcIikgZm9ybWF0KFwid29mZjJcIiksIHVybChcIi4uLy4uL2ZvbnRzLzNyZCBQYXJ0eS9DaGVzc1ZhcmlhbnRzL0ZpZ3VyaW5lU3ltYm9sVDFCb2xkLndvZmZcIikgZm9ybWF0KFwid29mZlwiKTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkZpZ3VyaW5lU3ltYm9sVDFcIjtcbiAgc3JjOiB1cmwoXCIuLi8uLi9mb250cy8zcmQgUGFydHkvQ2hlc3NWYXJpYW50cy9GaWd1cmluZVN5bWJvbFQxLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpLCB1cmwoXCIuLi8uLi9mb250cy8zcmQgUGFydHkvQ2hlc3NWYXJpYW50cy9GaWd1cmluZVN5bWJvbFQxLndvZmZcIikgZm9ybWF0KFwid29mZlwiKTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiU2FuY3R1YXJ5UGxheWdyb3VuZFwiO1xuICBzcmM6IHVybChcIi4uLy4uL2ZvbnRzLzNyZCBQYXJ0eS9TYW5jdHVhcnlQbGF5Z3JvdW5kLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpLCB1cmwoXCIuLi8uLi9mb250cy8zcmQgUGFydHkvU2FuY3R1YXJ5UGxheWdyb3VuZC53b2ZmXCIpIGZvcm1hdChcIndvZmZcIik7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkFtaXRhXCI7XG4gIHNyYzogdXJsKFwiLi4vLi4vZm9udHMvM3JkIFBhcnR5L0FtaXRhL0FtaXRhLVJlZ3VsYXIud29mZjJcIikgZm9ybWF0KFwid29mZjJcIiksIHVybChcIi4uLy4uL2ZvbnRzLzNyZCBQYXJ0eS9BbWl0YS9BbWl0YS1SZWd1bGFyLndvZmYyXCIpIGZvcm1hdChcIndvZmZcIik7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xufVxuLyoqKioqKioqKioqKioqKioqKiogTWVudSAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqKioqKiogTWVudSBDb250cm9scyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIENvbnRhaW5lciBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBDb250YWluZXIgVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgQ29udGFpbmVyIFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIEhpZ2hsaWdodCBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBBbm5vdGF0aW9uIFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIFZhcmlhdGlvbiBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBQbHkgVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqKiBDb250cm9sIENvbG9ycyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKiogQm9hcmQgQ29sb3JzICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqKiBGb250IFNpemVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbjpyb290IHtcbiAgLS1iZy1jb2xvcjogI2YyZjNmNztcbiAgLS1mZy1jb2xvcjogIzM4M2E0MTtcbiAgLS1yZWQ6ICNlNDMwMzA7XG4gIC0tZ3JlZW46ICMxOWExODc7XG4gIC0tYmx1ZTogIzM2N2JmMDtcbiAgLS1kYXJrLWJsdWU6ICMyNjVhYjE7XG4gIC0tbWFyb29uOiAjYjgxNzRjO1xuICAtLXB1cnBsZTogIzhjNDJhYjtcbn1cblxudGFibGUtaXRlbSB7XG4gIG1pbi1oZWlnaHQ6IDMycHg7XG59XG5cbi5oZWFkZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcbn1cbi5oZWFkZXIgLnNwYWNlciB7XG4gIHdpZHRoOiB2YXIoLS1nc1RhYmxlUGx5V2lkdGgpO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xufVxuLmhlYWRlciAud2hlYWRlciB7XG4gIHdpZHRoOiB2YXIoLS1nc1RhYmxlSXRlbVdpZHRoKTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXI6IDJweCBibGFjayBzb2xpZDtcbn1cbi5oZWFkZXIgLmJoZWFkZXIge1xuICB3aWR0aDogdmFyKC0tZ3NUYWJsZUl0ZW1XaWR0aCk7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogYmxhY2s7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiAycHggYmxhY2sgc29saWQ7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TableColumn, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'table-column',
                templateUrl: './table-column.component.html',
                styleUrls: ['./table-column.component.scss']
            }]
    }], function () { return [{ type: _services_aria_service__WEBPACK_IMPORTED_MODULE_2__["AriaService"] }]; }, { rowItems: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"],
            args: [_table_item_table_item_component__WEBPACK_IMPORTED_MODULE_1__["TableItem"]]
        }], index: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], size: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], rows: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/aria-score/score-table/table-item/table-item.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/aria-score/score-table/table-item/table-item.component.ts ***!
  \***************************************************************************/
/*! exports provided: TableItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableItem", function() { return TableItem; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_common_kokopu_engine__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/common/kokopu-engine */ "./src/app/common/kokopu-engine.ts");
/* harmony import */ var src_app_services_aria_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/aria.service */ "./src/app/services/aria.service.ts");
/* harmony import */ var src_app_services_themes_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/themes.service */ "./src/app/services/themes.service.ts");





class TableItem {
    //@ViewChild('gsiPly') gsiPly!: ElementRef;
    constructor(aria, themes) {
        this.aria = aria;
        this.themes = themes;
        this.whiteMove = null;
        this.blackMove = null;
        this.typeName = '';
        this.ply = '';
        this.whiteScore = '';
        this.blackScore = '';
        this.GameScoreType = src_app_common_kokopu_engine__WEBPACK_IMPORTED_MODULE_1__["GameScoreType"];
    }
    ngOnInit() {
        var _a, _b;
        this.ply = (_a = this.whiteMove) === null || _a === void 0 ? void 0 : _a.move.fullMoveNumber().toString();
        if (this.ply == '' && this.blackMove) {
            this.ply = (_b = this.blackMove) === null || _b === void 0 ? void 0 : _b.move.fullMoveNumber().toString();
        }
        if (this.whiteMove) {
            this.whiteScore = this.whiteMove.move.notation();
        }
        if (this.blackMove) {
            this.blackScore = this.blackMove.move.notation();
        }
    }
    ngAfterViewInit() {
        window.setTimeout(() => this.updateTypeName(), 10);
        if (this.whiteMove && this.whiteMove.move) {
            let showing = false;
            if (this.isFullPly()) {
                showing = this.aria.showingPly.value;
            }
            else {
                showing = this.aria.showingHalfPly.value;
            }
            if (!showing) {
                //this.gsiPly.nativeElement.remove();
            }
            else {
            }
        }
    }
    showPly() {
        if (this.whiteMove) {
            if (this.isFullPly()) {
                return this.aria.showingPly.value;
            }
            return this.aria.showingHalfPly.value;
        }
        return false;
    }
    isFullPly() {
        if (this.whiteMove) {
            return (this.whiteMove.type & src_app_common_kokopu_engine__WEBPACK_IMPORTED_MODULE_1__["GameScoreType"].HalfPly) == 0;
        }
        return false;
    }
    setSelected(select) {
        if (this.whiteMove) {
            if (select) {
                this.whiteMove.type = (this.whiteMove.type | src_app_common_kokopu_engine__WEBPACK_IMPORTED_MODULE_1__["GameScoreType"].Selected);
                this.updateTypeName();
                return;
            }
            if (this.whiteMove.type >= src_app_common_kokopu_engine__WEBPACK_IMPORTED_MODULE_1__["GameScoreType"].Selected) {
                this.whiteMove.type = this.whiteMove.type ^ src_app_common_kokopu_engine__WEBPACK_IMPORTED_MODULE_1__["GameScoreType"].Selected;
            }
            this.updateTypeName();
        }
    }
    clearSelection() {
    }
    isSelected() {
        if (this.whiteMove) {
            return (this.whiteMove.type & src_app_common_kokopu_engine__WEBPACK_IMPORTED_MODULE_1__["GameScoreType"].Selected) == src_app_common_kokopu_engine__WEBPACK_IMPORTED_MODULE_1__["GameScoreType"].Selected;
        }
        if (this.blackMove) {
            return (this.blackMove.type && src_app_common_kokopu_engine__WEBPACK_IMPORTED_MODULE_1__["GameScoreType"].Selected) === src_app_common_kokopu_engine__WEBPACK_IMPORTED_MODULE_1__["GameScoreType"].Selected;
        }
        return false;
    }
    getPly() {
        if (this.whiteMove && this.whiteMove.move) {
            return this.whiteMove.move.fullMoveNumber();
        }
        return -1;
    }
    isGroup() {
        if (this.whiteMove) {
            return (this.whiteMove.type & src_app_common_kokopu_engine__WEBPACK_IMPORTED_MODULE_1__["GameScoreType"].Group) == src_app_common_kokopu_engine__WEBPACK_IMPORTED_MODULE_1__["GameScoreType"].Group;
        }
        return false;
    }
    isAnnotation() {
        if (this.whiteMove) {
            return (this.whiteMove.type & src_app_common_kokopu_engine__WEBPACK_IMPORTED_MODULE_1__["GameScoreType"].Annotation) == src_app_common_kokopu_engine__WEBPACK_IMPORTED_MODULE_1__["GameScoreType"].Annotation;
        }
        return false;
    }
    clickMove() {
        if (this.whiteMove && this.whiteMove.move) {
            const variations = this.whiteMove.move.variations();
            if (variations.length > 0) {
                this.aria.displayVariations(this.whiteMove);
                // show variation 
                console.log('Taking first variation');
                console.log(variations[0]);
            }
        }
    }
    updateTypeName() {
        this.typeName = '';
        if (this.whiteMove) {
            const value = this.whiteMove.type & src_app_common_kokopu_engine__WEBPACK_IMPORTED_MODULE_1__["GameScoreType"].Selected;
            if ((this.whiteMove.type & src_app_common_kokopu_engine__WEBPACK_IMPORTED_MODULE_1__["GameScoreType"].Selected) == src_app_common_kokopu_engine__WEBPACK_IMPORTED_MODULE_1__["GameScoreType"].Selected) {
                this.typeName += ' Current';
            }
            if ((this.whiteMove.type & src_app_common_kokopu_engine__WEBPACK_IMPORTED_MODULE_1__["GameScoreType"].Annotation) == src_app_common_kokopu_engine__WEBPACK_IMPORTED_MODULE_1__["GameScoreType"].Annotation) {
                this.typeName += ' Annotation ';
            }
            if ((this.whiteMove.type & src_app_common_kokopu_engine__WEBPACK_IMPORTED_MODULE_1__["GameScoreType"].Group) == src_app_common_kokopu_engine__WEBPACK_IMPORTED_MODULE_1__["GameScoreType"].Group) {
                this.typeName += ' Group ';
            }
            if ((this.whiteMove.type & src_app_common_kokopu_engine__WEBPACK_IMPORTED_MODULE_1__["GameScoreType"].HalfPly) == src_app_common_kokopu_engine__WEBPACK_IMPORTED_MODULE_1__["GameScoreType"].HalfPly) {
                this.typeName += ' HalfPly ';
            }
            if (this.whiteMove.move) {
                const variations = this.whiteMove.move.variations();
                if (variations && variations.length > 0) {
                    this.typeName += ' Variation ';
                }
                if ((this.whiteMove.type & src_app_common_kokopu_engine__WEBPACK_IMPORTED_MODULE_1__["GameScoreType"].Branched) == src_app_common_kokopu_engine__WEBPACK_IMPORTED_MODULE_1__["GameScoreType"].Branched) { // must have a variation to be branched
                    this.typeName += ' Branched';
                }
            }
        }
    }
}
TableItem.ɵfac = function TableItem_Factory(t) { return new (t || TableItem)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_aria_service__WEBPACK_IMPORTED_MODULE_2__["AriaService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_themes_service__WEBPACK_IMPORTED_MODULE_3__["ThemeService"])); };
TableItem.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TableItem, selectors: [["table-item"]], inputs: { whiteMove: "whiteMove", blackMove: "blackMove" }, outputs: { typeName: "typeName", ply: "ply", whiteScore: "whiteScore", blackScore: "blackScore" }, decls: 9, vars: 9, consts: [[1, "gsi-container"], ["domElement", ""], [1, "gsi-ply", 3, "click"], ["gsiPly", ""]], template: function TableItem_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableItem_Template_div_click_2_listener() { return ctx.clickMove(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.ply, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("white-move ", ctx.typeName, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.whiteScore, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("black-move ", ctx.typeName, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.blackScore, "");
    } }, styles: ["@font-face {\n  font-family: \"Caveat\";\n  src: url('Caveat-Bold.woff2') format(\"woff2\"), url('Caveat-Bold.woff') format(\"woff\");\n  font-weight: bold;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"Caveat\";\n  src: url('Caveat-Regular.woff2') format(\"woff2\"), url('Caveat-Regular.woff') format(\"woff\");\n  font-weight: 600;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"FigurineSymbolT1\";\n  src: url('FigurineSymbolT1Bold.woff2') format(\"woff2\"), url('FigurineSymbolT1Bold.woff') format(\"woff\");\n  font-weight: bold;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"FigurineSymbolT1\";\n  src: url('FigurineSymbolT1.woff2') format(\"woff2\"), url('FigurineSymbolT1.woff') format(\"woff\");\n  font-weight: 600;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"SanctuaryPlayground\";\n  src: url('SanctuaryPlayground.woff2') format(\"woff2\"), url('SanctuaryPlayground.woff') format(\"woff\");\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"Amita\";\n  src: url('Amita-Regular.woff2') format(\"woff2\"), url('Amita-Regular.woff2') format(\"woff\");\n  font-style: normal;\n  font-display: swap;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n[_ngcontent-%COMP%]:root {\n  --bg-color: #f2f3f7;\n  --fg-color: #383a41;\n  --red: #e43030;\n  --green: #19a187;\n  --blue: #367bf0;\n  --dark-blue: #265ab1;\n  --maroon: #b8174c;\n  --purple: #8c42ab;\n}\n.gsi-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n}\n.white-move[_ngcontent-%COMP%] {\n  border: black 2px solid;\n  background: white;\n  font-size: 22px;\n  min-height: 22px;\n  text-align: center;\n  min-width: 74px;\n  width: var(--gsTableItemWidth);\n  height: auto;\n  color: black;\n  font-weight: bold;\n  padding-top: 2px;\n  font-size: var(--gsFontSize);\n  font-family: var(--gsFontFamily);\n}\n.black-move[_ngcontent-%COMP%] {\n  border: black 2px solid;\n  background: grey;\n  font-size: 16px;\n  text-align: center;\n  color: white;\n  min-width: 74px;\n  width: var(--gsTableItemWidth);\n  height: auto;\n  font-size: var(--gsFontSize);\n  font-family: var(--gsFontFamily);\n}\n.gsi-ply[_ngcontent-%COMP%] {\n  color: var(--gsTextColor);\n  font-weight: bold;\n  font-size: var(--gsFontSize);\n  background: #4e75a8;\n  width: var(--gsTablePlyWidth);\n  text-align: center;\n  padding-top: 4px;\n  border: 1px solid black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMuc2NzcyIsInNyYy9hc3NldHMvc2Nzcy9tb2R1bGVzL19mb250cy5zY3NzIiwic3JjL2FwcC9hcmlhLXNjb3JlL3Njb3JlLXRhYmxlL3RhYmxlLWl0ZW0vdGFibGUtaXRlbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4RUFBQTtBQ0FBO0VBQ0kscUJBQUE7RUFDQSxxRkFBQTtFQUVBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0NKO0FERUE7RUFDSSxxQkFBQTtFQUNBLDJGQUFBO0VBRUEsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDREo7QURJQTtFQUNFLCtCQUFBO0VBQ0EsdUdBQUE7RUFFQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNIRjtBRE1BO0VBQ0UsK0JBQUE7RUFDQSwrRkFBQTtFQUVBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0xGO0FEUUE7RUFDRSxrQ0FBQTtFQUNBLHFHQUFBO0VBRUEsa0JBQUE7RUFDQSxrQkFBQTtBQ1BGO0FEV0E7RUFDRSxvQkFBQTtFQUNBLDBGQUFBO0VBRUEsa0JBQUE7RUFDQSxrQkFBQTtBQ1ZGO0FGREEsK0VBQUE7QUFHQSxrRkFBQTtBQUtBLCtFQUFBO0FBVUEsK0VBQUE7QUFNQSwrRUFBQTtBQU1BLCtFQUFBO0FBTUEsZ0ZBQUE7QUFLQSwrRUFBQTtBQUtBLHlFQUFBO0FBS0EseUVBQUE7QUFJQSx1RUFBQTtBQVFBLHFFQUFBO0FBd0JBO0VBQ0UsbUJBQUE7RUFDQSxtQkFBQTtFQUVBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUV6RUY7QUE3REE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQWdFSjtBQTlEQTtFQUNJLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSw4QkZ5Q2U7RUV4Q2YsWUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNEJGcUZTO0VFcEZULGdDRmtDVztBRStCZjtBQTlEQTtFQUNJLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLDhCRnlCZTtFRXhCZixZQUFBO0VBQ0EsNEJGd0VTO0VFdkVULGdDRnFCVztBRTRDZjtBQS9EQTtFQUNFLHlCRmFZO0VFWlosaUJBQUE7RUFDQSw0QkZrRVc7RUVqRVgsbUJBQUE7RUFDQSw2QkZnQmdCO0VFZmhCLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQWtFRiIsImZpbGUiOiJzcmMvYXBwL2FyaWEtc2NvcmUvc2NvcmUtdGFibGUvdGFibGUtaXRlbS90YWJsZS1pdGVtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuXG5AaW1wb3J0IFwiLi9hc3NldHMvc2Nzcy9tb2R1bGVzL19mb250cy5zY3NzXCI7XG4kZ2FtZXNjb3JlLWZhbWlseTogXCJGaWd1cmluZVN5bWJvbFQxXCI7XG4kZ2FtZXNjb3JlLWhpZ2hsaWdodDogIzU4NTg1OGZmO1xuJGdhbWVzY29yZS1mb3JlZ3JvdW5kOiB3aGl0ZTtcblxuJHJlZDogI2U0MzAzMDtcbiRncmVlbjogIzE5YTE4NztcbiRsaWdodC1ibHVlOiAjMDBmZmZmZmY7XG4kYmx1ZTogIzM2N2JmMDtcbiRkYXJrLWJsdWU6ICMyNjVhYjE7XG4kbWFyb29uOiAjYjgxNzRjO1xuJHB1cnBsZTogIzhjNDJhYjtcblxuLy8gTWFpbiBBUklBIENvbG9yIEVsZW1lbnQgVmFyaWFibGVzXG4kdGV4dENvbG9yOiB2YXIoLS10ZXh0Q29sb3IpOyAvLyBNYWluIFRleHQgQ29sb3JcbiR0ZXh0Q29sb3JBdHRlbnRpb246IHZhcigtLXRleHRDb2xvckF0dGVudGlvbik7IC8vIEF0dGVudGlvbiB0ZXh0XG4kdGV4dENvbG9yUmVtb3ZlOiB2YXIoLS10ZXh0Q29sb3JSZW1vdmUpOyAvLyBSZW1vdmUvRGVsZXRlL0Nsb3NlXG4kdGV4dENvbG9yQWRkOiB2YXIoLS10ZXh0Q29sb3JBZGQpOyAvLyBBZGQvQ3JlYXRlL09wZW5cbiR0ZXh0Q29sb3JBY3RpdmU6IHZhcigtLXRleHRDb2xvckFjdGl2ZSk7IC8vIEFkZC9DcmVhdGUvT3BlblxuJGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQpOyAvLyBNYWluIGJhY2tncm91bmQgQ29sb3JcbiRiZ0NvbnRhaW5lcjogdmFyKC0tYmdDb250YWluZXIpOyAvLyBiYWNrZ3JvdW5kIG9mIENvbnRhaW5lcnNcbiRiZ01lbnU6IHZhcigtLWJnTWVudSk7IC8vIGJhY2tncm91bmQgb2YgTWVudXNcbiRiZ0l0ZW06IHZhcigtLWJnSXRlbSk7IC8vIGJhY2tncm91bmQgb2YgSXRlbXNcblxuLy8gQ29udGV4dCBNZW51XG4kYmdDb250ZXh0OiB2YXIoLS1iZ0NvbnRleHQpOyAvLyBiYWNrZ3JvdW5kIG9mIENvbnRleHQgTWVudVxuJHRleHRDb2xvckNvbnRleHQ6IHZhcigtLXRleHRDb2xvckNvbnRleHQpOyAvLyB0ZXh0IGNvbG9yIENvbnRleHQgTWVudVxuJGJvcmRlckNvbnRleHQ6IHZhcigtLWJvcmRlckNvbnRleHQpOyAvLyBib3JkZXIgQ29udGV4dCBNZW51XG4kb3ZlcmxheUNvbnRleHRCYWNrZ3JvdW5kOiB2YXIoXG4gIC0tb3ZlcmxheUNvbnRleHRCYWNrZ3JvdW5kXG4pOyAvLyBDb250ZXh0IE1lbnUgT3ZlcmxheSBiYWNrZ3JvdW5kIG1haW5cbiRvdmVybGF5Q29udGV4dEJhY2tncm91bmRHcmFkaWVudDogdmFyKFxuICAtLW92ZXJsYXlDb250ZXh0QmFja2dyb3VuZEdyYWRpZW50XG4pOyAvLyBDb250ZXh0IE1lbnUgYmFja2dyb3VuZCBncmFkaWVudFxuXG5cblxuLyoqKioqKioqKioqKioqKioqKiogTWVudSAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiRtZUJhY2tncm91bmQ6IHZhcigtLW1lQmFja2dyb3VuZCk7XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKiogTWVudSBDb250cm9scyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4kY3NGaWxsOiB2YXIoLS1jc0ZpbGwpO1xuJGNzQWNjZW50OiB2YXIoLS1jc0FjY2VudCk7XG4kY3NBY2NlbnQyOiB2YXIoLS1jc0FjY2VudDIpO1xuXG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIENvbnRhaW5lciBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuJGdzVGV4dENvbG9yOiB2YXIoLS1nc1RleHRDb2xvcik7IC8vIFRleHQgY29sb3IgZm9yIGdhbWUgc2NvcmVcbiRnc0JhY2tncm91bmQ6IHZhcigtLWdzQmFja2dyb3VuZCk7IC8vIGJhY2tncm91bmQgb2YgQ29udGFpbmVyc1xuJGdzTGlzdEJhY2tncm91bmQ6IHZhcigtLWdzTGlzdEJhY2tncm91bmQpOyAvLyBsaXN0IGJhY2tncm91bmQgb2YgZ2FtZSBzY29yZVxuJGdzQm9yZGVyOiB2YXIoLS1nc0JvcmRlcik7IC8vIGJhY2tncm91bmQgb2YgTWVudXNcbiRnc1RleHRTaXplOiB2YXIoLS1nc1RleHRTaXplKTsgLy8gYmFja2dyb3VuZCBvZiBNZW51c1xuJGdzRm9udEZhbWlseTogdmFyKC0tZ3NGb250RmFtaWx5KTsgLy8gc2NvcmUgZm9udFxuJGdzVGFibGVJdGVtV2lkdGg6IHZhcigtLWdzVGFibGVJdGVtV2lkdGgpOyAvLyB3aWR0aCBvZiBzY29yZSBpdGVtIGluIHRhYmxlIGxheW91dFxuJGdzVGFibGVQbHlXaWR0aDogdmFyKC0tZ3NUYWJsZVBseVdpZHRoKTsgLy8gd2lkdGggb2YgcGx5IGVsZW1lbnQgaW4gdGFibGUgbGF5b3V0XG5cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgQ29udGFpbmVyIFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4kZ3NUZXh0Q29sb3JNVzogdmFyKC0tZ3NUZXh0Q29sb3JNVyk7IC8vIFRleHQgY29sb3IgZm9yIGdhbWUgc2NvcmVcbiRnc0JhY2tncm91bmRNVzogdmFyKC0tZ3NCYWNrZ3JvdW5kTVcpOyAvLyBiYWNrZ3JvdW5kIG9mIENvbnRhaW5lcnNcbiRnc0JvcmRlck1XOiB2YXIoLS1nc0JvcmRlck1XKTsgLy8gYmFja2dyb3VuZCBvZiBNZW51c1xuJGdzVGV4dFNpemVNVzogdmFyKC0tZ3NUZXh0U2l6ZU1XKTsgLy8gYmFja2dyb3VuZCBvZiBNZW51c1xuXG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIENvbnRhaW5lciBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuJGdzVGV4dENvbG9yTUI6IHZhcigtLWdzVGV4dENvbG9yTUIpOyAvLyBUZXh0IGNvbG9yIGZvciBnYW1lIHNjb3JlXG4kZ3NCYWNrZ3JvdW5kTUI6IHZhcigtLWdzQmFja2dyb3VuZE1CKTsgLy8gYmFja2dyb3VuZCBvZiBDb250YWluZXJzXG4kZ3NCb3JkZXJNQjogdmFyKC0tZ3NCb3JkZXJNQik7IC8vIGJhY2tncm91bmQgb2YgTWVudXNcbiRnc1RleHRTaXplTUI6IHZhcigtLWdzVGV4dFNpemVNQik7IC8vIGJhY2tncm91bmQgb2YgTWVudXNcblxuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBIaWdobGlnaHQgVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiRnc1RleHRDb2xvckhHOiB2YXIoLS1nc1RleHRDb2xvckhHKTsgLy8gVGV4dCBjb2xvciBmb3IgaGlnaGxpZ2h0XG4kZ3NBbm5vdGF0aW9uQ29sb3JIRzogdmFyKC0tZ3NBbm5vdGF0aW9uQ29sb3JIRyk7IC8vIEFubm90YXRpb24vQ29tbWVudCBjb2xvciBmb3IgaGlnaGxpZ2h0XG4kZ3NCYWNrZ3JvdW5kSEc6IHZhcigtLWdzQmFja2dyb3VuZEhHKTsgLy8gYmFja2dyb3VuZCBmb3IgaGlnaGxpZ2h0XG4kZ3NCb3JkZXJIRzogdmFyKC0tZ3NCb3JkZXJIRyk7IC8vIGJvcmRlciBmb3IgaGlnaGxpZ2h0XG5cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgQW5ub3RhdGlvbiBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuJGdzVGV4dENvbG9yQU46IHZhcigtLWdzVGV4dENvbG9yQU4pOyAvLyBUZXh0IGNvbG9yIGZvciBoaWdobGlnaHRcbiRnc0JhY2tncm91bmRBTjogdmFyKC0tZ3NCYWNrZ3JvdW5kQU4pOyAvLyBiYWNrZ3JvdW5kIGZvciBoaWdobGlnaHRcbiRnc0JvcmRlckFOOiB2YXIoLS1nc0JvcmRlckFOKTsgLy8gYm9yZGVyIGZvciBoaWdobGlnaHRcblxuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBWYXJpYXRpb24gVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiRnc1RleHRDb2xvclZBOiB2YXIoLS1nc1RleHRDb2xvclZBKTsgLy8gVGV4dCBjb2xvciBmb3IgaGlnaGxpZ2h0XG4kZ3NCYWNrZ3JvdW5kVkE6IHZhcigtLWdzQmFja2dyb3VuZFZBKTsgLy8gYmFja2dyb3VuZCBmb3IgaGlnaGxpZ2h0XG4kZ3NCb3JkZXJWQTogdmFyKC0tZ3NCb3JkZXJWQSk7IC8vIGJvcmRlciBmb3IgaGlnaGxpZ2h0XG5cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgUGx5IFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4kZ3NUZXh0Q29sb3JQQzogdmFyKC0tZ3NUZXh0Q29sb3JQQyk7IC8vIFRleHQgY29sb3IgZm9yIGdhbWUgc2NvcmUgcGx5XG4kZ3NCYWNrZ3JvdW5kUEM6IHZhcigtLWdzQmFja2dyb3VuZFBDKTsgLy8gYmFja2dyb3VuZCBmb3IgZ2FtZSBzY29yZSBwbHlcbiRnc0JvcmRlclBDOiB2YXIoLS1nc0JvcmRlclBDKTsgLy8gYm9yZGVyIGZvciBnYW1lIHNjb3JlIHBseVxuXG4vKioqKioqKioqKioqKioqKioqKiogQ29udHJvbCBDb2xvcnMgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuJGNzQmFja2dyb3VuZDogdmFyKC0tY3NCYWNrZ3JvdW5kKTsgLy8gYmFja2dyb3VuZCBmb3IgY29udHJvbHNcbiRjc0NvbG9yOiB2YXIoLS1jc0NvbG9yKTsgLy8gY29udHJvbHMgY29sb3IgKGZvcmVncm91bmQpXG5cbi8qKioqKioqKioqKioqKioqKioqKiBCb2FyZCBDb2xvcnMgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuJGJvYXJkQkdEYXJrOiB2YXIoLS1ib2FyZEJHRGFyayk7IC8vIGJvYXJkIGRhcmsgdGlsZVxuJGJvYXJkQkdMaWdodDogdmFyKC0tYm9hcmRCR0xpZ2h0KTsgLy8gYm9hcmQgbGlnaHQgdGlsZVxuJGJvYXJkTGFiZWxMaWdodDogdmFyKC0tYm9hcmRMYWJlbExpZ2h0KTsgLy8gYm9hcmQgbGlnaHQgbGFiZWxcbiRib2FyZExhYmVsRGFyazogdmFyKC0tYm9hcmRMYWJlbERhcmspOyAvLyBib2FyZCBkYXJrIGxhYmVsXG5cblxuXG4vKioqKioqKioqKioqKioqKioqKiogRm9udCBTaXplcyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4kZ3NGb250U2l6ZTogdmFyKC0tZ3NGb250U2l6ZSk7IC8vIGJvYXJkIGRhcmsgdGlsZVxuJGdzRm9udFNpemVBTjogdmFyKC0tZ3NGb250U2l6ZUFOKTsgLy8gYm9hcmQgbGlnaHQgdGlsZVxuJGdzRm9udFNpemVIRzogdmFyKC0tZ3NGb250U2l6ZUhHKTsgLy8gYm9hcmQgbGlnaHQgbGFiZWxcbiRnc0ZvbnRTaXplVkE6IHZhcigtLWdzRm9udFNpemVWQSk7IC8vIGJvYXJkIGRhcmsgbGFiZWxcbiRnc0ZvbnRTaXplUEM6IHZhcigtLWdzRm9udFNpemVQQyk7IC8vIGJvYXJkIGRhcmsgbGFiZWxcbiRoZHJEYXRhRm9udFNpemU6IHZhcigtLWhkckRhdGFGb250U2l6ZSk7IC8vIHNpemUgb2YgcGxheWVyIHNob3djYXNlIGRhdGFcbiRoZHJOYW1lRm9udFNpemU6IHZhcigtLWhkck5hbWVGb250U2l6ZSk7IC8vIHNpemUgb2YgcGxheWVyIHNob3djYXNlIE5hbWVcbiRoZHJUaXRsZUZvbnRTaXplOiB2YXIoLS1oZHJUaXRsZUZvbnRTaXplKTsgLy8gc2l6ZSBvZiBwbGF5ZXIgc2hvd2Nhc2UgZGF0YVxuJGhkclZhcmlhbnRGb250U2l6ZTogdmFyKC0taGRyVmFyaWFudEZvbnRTaXplKTsgLy8gc2l6ZSBvZiBwbGF5ZXIgc2hvd2Nhc2UgTmFtZVxuJGhkck1hdGNoRGF0YUZvbnRTaXplOiB2YXIoLS1oZHJNYXRjaERhdGFGb250U2l6ZSk7IC8vIHNpemUgb2YgcGxheWVyIHNob3djYXNlIE5hbWVcbiRoZHJPcGVuaW5nRm9udFNpemU6IHZhcigtLWhkck1hdGNoRGF0YUZvbnRTaXplKTsgLy8gc2l6ZSBvZiBwbGF5ZXIgc2hvd2Nhc2UgTmFtZVxuJGhkclJlc3VsdEZvbnRTaXplOiB2YXIoLS1oZHJSZXN1bHRGb250U2l6ZSk7IC8vIHNpemUgb2YgcGxheWVyIHNob3djYXNlIE5hbWVcbiRoZHJSb3VuZEZvbnRTaXplOiB2YXIoLS1oZHJSb3VuZEZvbnRTaXplKTsgLy8gc2l6ZSBvZiBwbGF5ZXIgc2hvd2Nhc2UgTmFtZVxuXG4vLyBHZW5lcmFsIHN0dWZmXG4kdGV4dC1jb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XG4kYmctb3V0ZXI6IHZhcigtLWJnLW91dGVyKTtcbiRiZy1pbm5lcjogdmFyKC0tYmctaW5uZXIpO1xuXG4kYmctY29sb3I6ICNmMmYzZjc7XG4kZmctY29sb3I6ICMzODNhNDE7XG5cbiRnbG93LXNoYWRvdzogMCAwIDAuNWVtIHRyYW5zcGFyZW50aXplKCRibHVlLCAwLjMpO1xuOnJvb3Qge1xuICAtLWJnLWNvbG9yOiAjeyRiZy1jb2xvcn07XG4gIC0tZmctY29sb3I6ICN7JGZnLWNvbG9yfTtcblxuICAtLXJlZDogI3skcmVkfTtcbiAgLS1ncmVlbjogI3skZ3JlZW59O1xuICAtLWJsdWU6ICN7JGJsdWV9O1xuICAtLWRhcmstYmx1ZTogI3skZGFyay1ibHVlfTtcbiAgLS1tYXJvb246ICN7JG1hcm9vbn07XG4gIC0tcHVycGxlOiAjeyRwdXJwbGV9O1xufVxuIiwiQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdDYXZlYXQnO1xuICAgIHNyYzogdXJsKCcuLi8uLi9mb250cy9Cb2xkL0NhdmVhdC1Cb2xkLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxuICAgICAgICB1cmwoJy4uLy4uL2ZvbnRzL0JvbGQvQ2F2ZWF0LUJvbGQud29mZicpIGZvcm1hdCgnd29mZicpO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LWRpc3BsYXk6IHN3YXA7XG59XG5cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnQ2F2ZWF0JztcbiAgICBzcmM6IHVybCgnLi4vLi4vZm9udHMvUmVndWxhci9DYXZlYXQtUmVndWxhci53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcbiAgICAgICAgdXJsKCcuLi8uLi9mb250cy9SZWd1bGFyL0NhdmVhdC1SZWd1bGFyLndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LWRpc3BsYXk6IHN3YXA7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ0ZpZ3VyaW5lU3ltYm9sVDEnO1xuICBzcmM6IHVybCgnLi4vLi4vZm9udHMvM3JkIFBhcnR5L0NoZXNzVmFyaWFudHMvRmlndXJpbmVTeW1ib2xUMUJvbGQud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXG4gICAgICB1cmwoJy4uLy4uL2ZvbnRzLzNyZCBQYXJ0eS9DaGVzc1ZhcmlhbnRzL0ZpZ3VyaW5lU3ltYm9sVDFCb2xkLndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdGaWd1cmluZVN5bWJvbFQxJztcbiAgc3JjOiB1cmwoJy4uLy4uL2ZvbnRzLzNyZCBQYXJ0eS9DaGVzc1ZhcmlhbnRzL0ZpZ3VyaW5lU3ltYm9sVDEud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXG4gICAgICB1cmwoJy4uLy4uL2ZvbnRzLzNyZCBQYXJ0eS9DaGVzc1ZhcmlhbnRzL0ZpZ3VyaW5lU3ltYm9sVDEud29mZicpIGZvcm1hdCgnd29mZicpO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnU2FuY3R1YXJ5UGxheWdyb3VuZCc7XG4gIHNyYzogdXJsKCcuLi8uLi9mb250cy8zcmQgUGFydHkvU2FuY3R1YXJ5UGxheWdyb3VuZC53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcbiAgICAgIHVybCgnLi4vLi4vZm9udHMvM3JkIFBhcnR5L1NhbmN0dWFyeVBsYXlncm91bmQud29mZicpIGZvcm1hdCgnd29mZicpO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbn1cblxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdBbWl0YSc7XG4gIHNyYzogdXJsKCcuLi8uLi9mb250cy8zcmQgUGFydHkvQW1pdGEvQW1pdGEtUmVndWxhci53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcbiAgICAgIHVybCgnLi4vLi4vZm9udHMvM3JkIFBhcnR5L0FtaXRhL0FtaXRhLVJlZ3VsYXIud29mZjInKSBmb3JtYXQoJ3dvZmYnKTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG59IiwiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkNhdmVhdFwiO1xuICBzcmM6IHVybChcIi4uLy4uL2ZvbnRzL0JvbGQvQ2F2ZWF0LUJvbGQud29mZjJcIikgZm9ybWF0KFwid29mZjJcIiksIHVybChcIi4uLy4uL2ZvbnRzL0JvbGQvQ2F2ZWF0LUJvbGQud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiQ2F2ZWF0XCI7XG4gIHNyYzogdXJsKFwiLi4vLi4vZm9udHMvUmVndWxhci9DYXZlYXQtUmVndWxhci53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKSwgdXJsKFwiLi4vLi4vZm9udHMvUmVndWxhci9DYXZlYXQtUmVndWxhci53b2ZmXCIpIGZvcm1hdChcIndvZmZcIik7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkZpZ3VyaW5lU3ltYm9sVDFcIjtcbiAgc3JjOiB1cmwoXCIuLi8uLi9mb250cy8zcmQgUGFydHkvQ2hlc3NWYXJpYW50cy9GaWd1cmluZVN5bWJvbFQxQm9sZC53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKSwgdXJsKFwiLi4vLi4vZm9udHMvM3JkIFBhcnR5L0NoZXNzVmFyaWFudHMvRmlndXJpbmVTeW1ib2xUMUJvbGQud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiRmlndXJpbmVTeW1ib2xUMVwiO1xuICBzcmM6IHVybChcIi4uLy4uL2ZvbnRzLzNyZCBQYXJ0eS9DaGVzc1ZhcmlhbnRzL0ZpZ3VyaW5lU3ltYm9sVDEud29mZjJcIikgZm9ybWF0KFwid29mZjJcIiksIHVybChcIi4uLy4uL2ZvbnRzLzNyZCBQYXJ0eS9DaGVzc1ZhcmlhbnRzL0ZpZ3VyaW5lU3ltYm9sVDEud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJTYW5jdHVhcnlQbGF5Z3JvdW5kXCI7XG4gIHNyYzogdXJsKFwiLi4vLi4vZm9udHMvM3JkIFBhcnR5L1NhbmN0dWFyeVBsYXlncm91bmQud29mZjJcIikgZm9ybWF0KFwid29mZjJcIiksIHVybChcIi4uLy4uL2ZvbnRzLzNyZCBQYXJ0eS9TYW5jdHVhcnlQbGF5Z3JvdW5kLndvZmZcIikgZm9ybWF0KFwid29mZlwiKTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiQW1pdGFcIjtcbiAgc3JjOiB1cmwoXCIuLi8uLi9mb250cy8zcmQgUGFydHkvQW1pdGEvQW1pdGEtUmVndWxhci53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKSwgdXJsKFwiLi4vLi4vZm9udHMvM3JkIFBhcnR5L0FtaXRhL0FtaXRhLVJlZ3VsYXIud29mZjJcIikgZm9ybWF0KFwid29mZlwiKTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG59XG4vKioqKioqKioqKioqKioqKioqKiBNZW51ICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKioqKioqKiBNZW51IENvbnRyb2xzICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgQ29udGFpbmVyIFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIENvbnRhaW5lciBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBDb250YWluZXIgVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgSGlnaGxpZ2h0IFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIEFubm90YXRpb24gVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgVmFyaWF0aW9uIFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIFBseSBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKioqIENvbnRyb2wgQ29sb3JzICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqKiBCb2FyZCBDb2xvcnMgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKioqIEZvbnQgU2l6ZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuOnJvb3Qge1xuICAtLWJnLWNvbG9yOiAjZjJmM2Y3O1xuICAtLWZnLWNvbG9yOiAjMzgzYTQxO1xuICAtLXJlZDogI2U0MzAzMDtcbiAgLS1ncmVlbjogIzE5YTE4NztcbiAgLS1ibHVlOiAjMzY3YmYwO1xuICAtLWRhcmstYmx1ZTogIzI2NWFiMTtcbiAgLS1tYXJvb246ICNiODE3NGM7XG4gIC0tcHVycGxlOiAjOGM0MmFiO1xufVxuXG4uZ3NpLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtd3JhcDogbm93cmFwO1xufVxuXG4ud2hpdGUtbW92ZSB7XG4gIGJvcmRlcjogYmxhY2sgMnB4IHNvbGlkO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBtaW4taGVpZ2h0OiAyMnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1pbi13aWR0aDogNzRweDtcbiAgd2lkdGg6IHZhcigtLWdzVGFibGVJdGVtV2lkdGgpO1xuICBoZWlnaHQ6IGF1dG87XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmctdG9wOiAycHg7XG4gIGZvbnQtc2l6ZTogdmFyKC0tZ3NGb250U2l6ZSk7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1nc0ZvbnRGYW1pbHkpO1xufVxuXG4uYmxhY2stbW92ZSB7XG4gIGJvcmRlcjogYmxhY2sgMnB4IHNvbGlkO1xuICBiYWNrZ3JvdW5kOiBncmV5O1xuICBmb250LXNpemU6IDE2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xuICBtaW4td2lkdGg6IDc0cHg7XG4gIHdpZHRoOiB2YXIoLS1nc1RhYmxlSXRlbVdpZHRoKTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBmb250LXNpemU6IHZhcigtLWdzRm9udFNpemUpO1xuICBmb250LWZhbWlseTogdmFyKC0tZ3NGb250RmFtaWx5KTtcbn1cblxuLmdzaS1wbHkge1xuICBjb2xvcjogdmFyKC0tZ3NUZXh0Q29sb3IpO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiB2YXIoLS1nc0ZvbnRTaXplKTtcbiAgYmFja2dyb3VuZDogIzRlNzVhODtcbiAgd2lkdGg6IHZhcigtLWdzVGFibGVQbHlXaWR0aCk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDRweDtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TableItem, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'table-item',
                templateUrl: './table-item.component.html',
                styleUrls: ['./table-item.component.scss']
            }]
    }], function () { return [{ type: src_app_services_aria_service__WEBPACK_IMPORTED_MODULE_2__["AriaService"] }, { type: src_app_services_themes_service__WEBPACK_IMPORTED_MODULE_3__["ThemeService"] }]; }, { whiteMove: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], blackMove: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], typeName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], ply: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], whiteScore: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], blackScore: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/aria-status/aria-status.component.ts":
/*!******************************************************!*\
  !*** ./src/app/aria-status/aria-status.component.ts ***!
  \******************************************************/
/*! exports provided: AriaStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AriaStatus", function() { return AriaStatus; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _services_aria_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/aria.service */ "./src/app/services/aria.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function AriaStatus_a_4_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AriaStatus_a_4_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.sendForAnalysis(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Engine");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "", ctx_r0.environment.imagesPath, "new_window.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class AriaStatus {
    constructor(aria) {
        this.aria = aria;
        this.status = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('White to move.');
        this.lastNode = null;
        this.lastMove = undefined;
        this.environment = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"];
    }
    ngOnInit() {
    }
    sendForAnalysis() {
        if (this.lastNode) {
            let fen = this.aria.gameFEN();
            var addr = 'http://www.chessgames.com/perl/nph-analysis_prereq?atype=FEN&fen=';
            addr += fen.split(" ").join("%20");
            addr += '&move=';
            addr += ((this.lastNode.fullMoveNumber() - 1) * 2) - (this.lastNode.moveColor() === 'b' ? 1 : 0);
            addr += '&session_id=';
            addr += this.aria.UUID;
            window.open(addr);
            // TODO generate sendForAnalysis callback
        }
    }
    updateStatus(turn, last, move) {
        let message = '';
        if (last) {
            this.lastNode = last;
            this.lastMove = move;
            let position = last.position();
            if (position) {
                if (position.isCheckmate()) {
                    message = (turn === 'b' ? 'White' : 'Black') + ' wins by checkmate. ';
                }
                else {
                    if (position.isCheck()) {
                        message += 'Check. ';
                    }
                    message += (turn === 'w' ? 'White' : 'Black') + ' to move. ';
                }
            }
            let notation = this.aria.getMoveNotation(last);
            message += '' + last.fullMoveNumber() + (turn === 'b' ? '.' : '..') + notation;
        }
        this.status.next(message);
    }
    resetStatus() {
        this.status.next('White to move.');
        this.lastNode = null;
        this.lastMove = undefined;
    }
    resize(width, height) {
    }
}
AriaStatus.ɵfac = function AriaStatus_Factory(t) { return new (t || AriaStatus)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_aria_service__WEBPACK_IMPORTED_MODULE_3__["AriaService"])); };
AriaStatus.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AriaStatus, selectors: [["aria-status"]], decls: 5, vars: 2, consts: [[1, "status-text"], ["class", "analysis-button", 3, "click", 4, "ngIf"], [1, "analysis-button", 3, "click"], [1, "analysis-image", 3, "src"]], template: function AriaStatus_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AriaStatus_a_4_Template, 3, 1, "a", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.status.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.lastNode);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: ["@font-face {\n  font-family: \"Caveat\";\n  src: url('Caveat-Bold.woff2') format(\"woff2\"), url('Caveat-Bold.woff') format(\"woff\");\n  font-weight: bold;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"Caveat\";\n  src: url('Caveat-Regular.woff2') format(\"woff2\"), url('Caveat-Regular.woff') format(\"woff\");\n  font-weight: 600;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"FigurineSymbolT1\";\n  src: url('FigurineSymbolT1Bold.woff2') format(\"woff2\"), url('FigurineSymbolT1Bold.woff') format(\"woff\");\n  font-weight: bold;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"FigurineSymbolT1\";\n  src: url('FigurineSymbolT1.woff2') format(\"woff2\"), url('FigurineSymbolT1.woff') format(\"woff\");\n  font-weight: 600;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"SanctuaryPlayground\";\n  src: url('SanctuaryPlayground.woff2') format(\"woff2\"), url('SanctuaryPlayground.woff') format(\"woff\");\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"Amita\";\n  src: url('Amita-Regular.woff2') format(\"woff2\"), url('Amita-Regular.woff2') format(\"woff\");\n  font-style: normal;\n  font-display: swap;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n[_ngcontent-%COMP%]:root {\n  --bg-color: #f2f3f7;\n  --fg-color: #383a41;\n  --red: #e43030;\n  --green: #19a187;\n  --blue: #367bf0;\n  --dark-blue: #265ab1;\n  --maroon: #b8174c;\n  --purple: #8c42ab;\n}\n.status-text[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-family: \"georgia\", garamond, palatino, bookman, \"Times New Roman\", times;\n  float: left;\n  text-align: left;\n  color: black;\n  font-size: 22px;\n  margin-left: 4px;\n  margin-top: 2px;\n  -o-user-select: none;\n  -webkit-user-select: none;\n          user-select: none;\n}\n.analysis-image[_ngcontent-%COMP%] {\n  height: 20px;\n  line-height: 28px;\n  margin-top: 4px;\n  width: 20px;\n  -o-user-select: none;\n  -webkit-user-select: none;\n          user-select: none;\n}\n.analysis-button[_ngcontent-%COMP%] {\n  margin-left: 8px;\n  background: transparent;\n  line-height: 28px;\n  font-size: 16px;\n  color: blue;\n  text-align: right;\n  -o-user-select: none;\n  -webkit-user-select: none;\n          user-select: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMuc2NzcyIsInNyYy9hc3NldHMvc2Nzcy9tb2R1bGVzL19mb250cy5zY3NzIiwic3JjL2FwcC9hcmlhLXN0YXR1cy9hcmlhLXN0YXR1cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4RUFBQTtBQ0FBO0VBQ0kscUJBQUE7RUFDQSxxRkFBQTtFQUVBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0NKO0FERUE7RUFDSSxxQkFBQTtFQUNBLDJGQUFBO0VBRUEsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDREo7QURJQTtFQUNFLCtCQUFBO0VBQ0EsdUdBQUE7RUFFQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNIRjtBRE1BO0VBQ0UsK0JBQUE7RUFDQSwrRkFBQTtFQUVBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0xGO0FEUUE7RUFDRSxrQ0FBQTtFQUNBLHFHQUFBO0VBRUEsa0JBQUE7RUFDQSxrQkFBQTtBQ1BGO0FEV0E7RUFDRSxvQkFBQTtFQUNBLDBGQUFBO0VBRUEsa0JBQUE7RUFDQSxrQkFBQTtBQ1ZGO0FGREEsK0VBQUE7QUFHQSxrRkFBQTtBQUtBLCtFQUFBO0FBVUEsK0VBQUE7QUFNQSwrRUFBQTtBQU1BLCtFQUFBO0FBTUEsZ0ZBQUE7QUFLQSwrRUFBQTtBQUtBLHlFQUFBO0FBS0EseUVBQUE7QUFJQSx1RUFBQTtBQVFBLHFFQUFBO0FBd0JBO0VBQ0UsbUJBQUE7RUFDQSxtQkFBQTtFQUVBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUV6RUY7QUEzREE7RUFDRSxpQkFBQTtFQUNBLDZFQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFJQSxvQkFBQTtFQUNBLHlCQUFBO1VBQUEsaUJBQUE7QUE4REY7QUEzREE7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUlBLG9CQUFBO0VBQ0EseUJBQUE7VUFBQSxpQkFBQTtBQThERjtBQTNEQTtFQUNFLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFJQSxvQkFBQTtFQUNBLHlCQUFBO1VBQUEsaUJBQUE7QUE4REYiLCJmaWxlIjoic3JjL2FwcC9hcmlhLXN0YXR1cy9hcmlhLXN0YXR1cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cblxuQGltcG9ydCBcIi4vYXNzZXRzL3Njc3MvbW9kdWxlcy9fZm9udHMuc2Nzc1wiO1xuJGdhbWVzY29yZS1mYW1pbHk6IFwiRmlndXJpbmVTeW1ib2xUMVwiO1xuJGdhbWVzY29yZS1oaWdobGlnaHQ6ICM1ODU4NThmZjtcbiRnYW1lc2NvcmUtZm9yZWdyb3VuZDogd2hpdGU7XG5cbiRyZWQ6ICNlNDMwMzA7XG4kZ3JlZW46ICMxOWExODc7XG4kbGlnaHQtYmx1ZTogIzAwZmZmZmZmO1xuJGJsdWU6ICMzNjdiZjA7XG4kZGFyay1ibHVlOiAjMjY1YWIxO1xuJG1hcm9vbjogI2I4MTc0YztcbiRwdXJwbGU6ICM4YzQyYWI7XG5cbi8vIE1haW4gQVJJQSBDb2xvciBFbGVtZW50IFZhcmlhYmxlc1xuJHRleHRDb2xvcjogdmFyKC0tdGV4dENvbG9yKTsgLy8gTWFpbiBUZXh0IENvbG9yXG4kdGV4dENvbG9yQXR0ZW50aW9uOiB2YXIoLS10ZXh0Q29sb3JBdHRlbnRpb24pOyAvLyBBdHRlbnRpb24gdGV4dFxuJHRleHRDb2xvclJlbW92ZTogdmFyKC0tdGV4dENvbG9yUmVtb3ZlKTsgLy8gUmVtb3ZlL0RlbGV0ZS9DbG9zZVxuJHRleHRDb2xvckFkZDogdmFyKC0tdGV4dENvbG9yQWRkKTsgLy8gQWRkL0NyZWF0ZS9PcGVuXG4kdGV4dENvbG9yQWN0aXZlOiB2YXIoLS10ZXh0Q29sb3JBY3RpdmUpOyAvLyBBZGQvQ3JlYXRlL09wZW5cbiRiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kKTsgLy8gTWFpbiBiYWNrZ3JvdW5kIENvbG9yXG4kYmdDb250YWluZXI6IHZhcigtLWJnQ29udGFpbmVyKTsgLy8gYmFja2dyb3VuZCBvZiBDb250YWluZXJzXG4kYmdNZW51OiB2YXIoLS1iZ01lbnUpOyAvLyBiYWNrZ3JvdW5kIG9mIE1lbnVzXG4kYmdJdGVtOiB2YXIoLS1iZ0l0ZW0pOyAvLyBiYWNrZ3JvdW5kIG9mIEl0ZW1zXG5cbi8vIENvbnRleHQgTWVudVxuJGJnQ29udGV4dDogdmFyKC0tYmdDb250ZXh0KTsgLy8gYmFja2dyb3VuZCBvZiBDb250ZXh0IE1lbnVcbiR0ZXh0Q29sb3JDb250ZXh0OiB2YXIoLS10ZXh0Q29sb3JDb250ZXh0KTsgLy8gdGV4dCBjb2xvciBDb250ZXh0IE1lbnVcbiRib3JkZXJDb250ZXh0OiB2YXIoLS1ib3JkZXJDb250ZXh0KTsgLy8gYm9yZGVyIENvbnRleHQgTWVudVxuJG92ZXJsYXlDb250ZXh0QmFja2dyb3VuZDogdmFyKFxuICAtLW92ZXJsYXlDb250ZXh0QmFja2dyb3VuZFxuKTsgLy8gQ29udGV4dCBNZW51IE92ZXJsYXkgYmFja2dyb3VuZCBtYWluXG4kb3ZlcmxheUNvbnRleHRCYWNrZ3JvdW5kR3JhZGllbnQ6IHZhcihcbiAgLS1vdmVybGF5Q29udGV4dEJhY2tncm91bmRHcmFkaWVudFxuKTsgLy8gQ29udGV4dCBNZW51IGJhY2tncm91bmQgZ3JhZGllbnRcblxuXG5cbi8qKioqKioqKioqKioqKioqKioqIE1lbnUgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4kbWVCYWNrZ3JvdW5kOiB2YXIoLS1tZUJhY2tncm91bmQpO1xuXG4vKioqKioqKioqKioqKioqKioqKioqKioqIE1lbnUgQ29udHJvbHMgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuJGNzRmlsbDogdmFyKC0tY3NGaWxsKTtcbiRjc0FjY2VudDogdmFyKC0tY3NBY2NlbnQpO1xuJGNzQWNjZW50MjogdmFyKC0tY3NBY2NlbnQyKTtcblxuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBDb250YWluZXIgVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiRnc1RleHRDb2xvcjogdmFyKC0tZ3NUZXh0Q29sb3IpOyAvLyBUZXh0IGNvbG9yIGZvciBnYW1lIHNjb3JlXG4kZ3NCYWNrZ3JvdW5kOiB2YXIoLS1nc0JhY2tncm91bmQpOyAvLyBiYWNrZ3JvdW5kIG9mIENvbnRhaW5lcnNcbiRnc0xpc3RCYWNrZ3JvdW5kOiB2YXIoLS1nc0xpc3RCYWNrZ3JvdW5kKTsgLy8gbGlzdCBiYWNrZ3JvdW5kIG9mIGdhbWUgc2NvcmVcbiRnc0JvcmRlcjogdmFyKC0tZ3NCb3JkZXIpOyAvLyBiYWNrZ3JvdW5kIG9mIE1lbnVzXG4kZ3NUZXh0U2l6ZTogdmFyKC0tZ3NUZXh0U2l6ZSk7IC8vIGJhY2tncm91bmQgb2YgTWVudXNcbiRnc0ZvbnRGYW1pbHk6IHZhcigtLWdzRm9udEZhbWlseSk7IC8vIHNjb3JlIGZvbnRcbiRnc1RhYmxlSXRlbVdpZHRoOiB2YXIoLS1nc1RhYmxlSXRlbVdpZHRoKTsgLy8gd2lkdGggb2Ygc2NvcmUgaXRlbSBpbiB0YWJsZSBsYXlvdXRcbiRnc1RhYmxlUGx5V2lkdGg6IHZhcigtLWdzVGFibGVQbHlXaWR0aCk7IC8vIHdpZHRoIG9mIHBseSBlbGVtZW50IGluIHRhYmxlIGxheW91dFxuXG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIENvbnRhaW5lciBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuJGdzVGV4dENvbG9yTVc6IHZhcigtLWdzVGV4dENvbG9yTVcpOyAvLyBUZXh0IGNvbG9yIGZvciBnYW1lIHNjb3JlXG4kZ3NCYWNrZ3JvdW5kTVc6IHZhcigtLWdzQmFja2dyb3VuZE1XKTsgLy8gYmFja2dyb3VuZCBvZiBDb250YWluZXJzXG4kZ3NCb3JkZXJNVzogdmFyKC0tZ3NCb3JkZXJNVyk7IC8vIGJhY2tncm91bmQgb2YgTWVudXNcbiRnc1RleHRTaXplTVc6IHZhcigtLWdzVGV4dFNpemVNVyk7IC8vIGJhY2tncm91bmQgb2YgTWVudXNcblxuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBDb250YWluZXIgVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiRnc1RleHRDb2xvck1COiB2YXIoLS1nc1RleHRDb2xvck1CKTsgLy8gVGV4dCBjb2xvciBmb3IgZ2FtZSBzY29yZVxuJGdzQmFja2dyb3VuZE1COiB2YXIoLS1nc0JhY2tncm91bmRNQik7IC8vIGJhY2tncm91bmQgb2YgQ29udGFpbmVyc1xuJGdzQm9yZGVyTUI6IHZhcigtLWdzQm9yZGVyTUIpOyAvLyBiYWNrZ3JvdW5kIG9mIE1lbnVzXG4kZ3NUZXh0U2l6ZU1COiB2YXIoLS1nc1RleHRTaXplTUIpOyAvLyBiYWNrZ3JvdW5kIG9mIE1lbnVzXG5cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgSGlnaGxpZ2h0IFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4kZ3NUZXh0Q29sb3JIRzogdmFyKC0tZ3NUZXh0Q29sb3JIRyk7IC8vIFRleHQgY29sb3IgZm9yIGhpZ2hsaWdodFxuJGdzQW5ub3RhdGlvbkNvbG9ySEc6IHZhcigtLWdzQW5ub3RhdGlvbkNvbG9ySEcpOyAvLyBBbm5vdGF0aW9uL0NvbW1lbnQgY29sb3IgZm9yIGhpZ2hsaWdodFxuJGdzQmFja2dyb3VuZEhHOiB2YXIoLS1nc0JhY2tncm91bmRIRyk7IC8vIGJhY2tncm91bmQgZm9yIGhpZ2hsaWdodFxuJGdzQm9yZGVySEc6IHZhcigtLWdzQm9yZGVySEcpOyAvLyBib3JkZXIgZm9yIGhpZ2hsaWdodFxuXG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIEFubm90YXRpb24gVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiRnc1RleHRDb2xvckFOOiB2YXIoLS1nc1RleHRDb2xvckFOKTsgLy8gVGV4dCBjb2xvciBmb3IgaGlnaGxpZ2h0XG4kZ3NCYWNrZ3JvdW5kQU46IHZhcigtLWdzQmFja2dyb3VuZEFOKTsgLy8gYmFja2dyb3VuZCBmb3IgaGlnaGxpZ2h0XG4kZ3NCb3JkZXJBTjogdmFyKC0tZ3NCb3JkZXJBTik7IC8vIGJvcmRlciBmb3IgaGlnaGxpZ2h0XG5cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgVmFyaWF0aW9uIFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4kZ3NUZXh0Q29sb3JWQTogdmFyKC0tZ3NUZXh0Q29sb3JWQSk7IC8vIFRleHQgY29sb3IgZm9yIGhpZ2hsaWdodFxuJGdzQmFja2dyb3VuZFZBOiB2YXIoLS1nc0JhY2tncm91bmRWQSk7IC8vIGJhY2tncm91bmQgZm9yIGhpZ2hsaWdodFxuJGdzQm9yZGVyVkE6IHZhcigtLWdzQm9yZGVyVkEpOyAvLyBib3JkZXIgZm9yIGhpZ2hsaWdodFxuXG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIFBseSBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuJGdzVGV4dENvbG9yUEM6IHZhcigtLWdzVGV4dENvbG9yUEMpOyAvLyBUZXh0IGNvbG9yIGZvciBnYW1lIHNjb3JlIHBseVxuJGdzQmFja2dyb3VuZFBDOiB2YXIoLS1nc0JhY2tncm91bmRQQyk7IC8vIGJhY2tncm91bmQgZm9yIGdhbWUgc2NvcmUgcGx5XG4kZ3NCb3JkZXJQQzogdmFyKC0tZ3NCb3JkZXJQQyk7IC8vIGJvcmRlciBmb3IgZ2FtZSBzY29yZSBwbHlcblxuLyoqKioqKioqKioqKioqKioqKioqIENvbnRyb2wgQ29sb3JzICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiRjc0JhY2tncm91bmQ6IHZhcigtLWNzQmFja2dyb3VuZCk7IC8vIGJhY2tncm91bmQgZm9yIGNvbnRyb2xzXG4kY3NDb2xvcjogdmFyKC0tY3NDb2xvcik7IC8vIGNvbnRyb2xzIGNvbG9yIChmb3JlZ3JvdW5kKVxuXG4vKioqKioqKioqKioqKioqKioqKiogQm9hcmQgQ29sb3JzICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiRib2FyZEJHRGFyazogdmFyKC0tYm9hcmRCR0RhcmspOyAvLyBib2FyZCBkYXJrIHRpbGVcbiRib2FyZEJHTGlnaHQ6IHZhcigtLWJvYXJkQkdMaWdodCk7IC8vIGJvYXJkIGxpZ2h0IHRpbGVcbiRib2FyZExhYmVsTGlnaHQ6IHZhcigtLWJvYXJkTGFiZWxMaWdodCk7IC8vIGJvYXJkIGxpZ2h0IGxhYmVsXG4kYm9hcmRMYWJlbERhcms6IHZhcigtLWJvYXJkTGFiZWxEYXJrKTsgLy8gYm9hcmQgZGFyayBsYWJlbFxuXG5cblxuLyoqKioqKioqKioqKioqKioqKioqIEZvbnQgU2l6ZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuJGdzRm9udFNpemU6IHZhcigtLWdzRm9udFNpemUpOyAvLyBib2FyZCBkYXJrIHRpbGVcbiRnc0ZvbnRTaXplQU46IHZhcigtLWdzRm9udFNpemVBTik7IC8vIGJvYXJkIGxpZ2h0IHRpbGVcbiRnc0ZvbnRTaXplSEc6IHZhcigtLWdzRm9udFNpemVIRyk7IC8vIGJvYXJkIGxpZ2h0IGxhYmVsXG4kZ3NGb250U2l6ZVZBOiB2YXIoLS1nc0ZvbnRTaXplVkEpOyAvLyBib2FyZCBkYXJrIGxhYmVsXG4kZ3NGb250U2l6ZVBDOiB2YXIoLS1nc0ZvbnRTaXplUEMpOyAvLyBib2FyZCBkYXJrIGxhYmVsXG4kaGRyRGF0YUZvbnRTaXplOiB2YXIoLS1oZHJEYXRhRm9udFNpemUpOyAvLyBzaXplIG9mIHBsYXllciBzaG93Y2FzZSBkYXRhXG4kaGRyTmFtZUZvbnRTaXplOiB2YXIoLS1oZHJOYW1lRm9udFNpemUpOyAvLyBzaXplIG9mIHBsYXllciBzaG93Y2FzZSBOYW1lXG4kaGRyVGl0bGVGb250U2l6ZTogdmFyKC0taGRyVGl0bGVGb250U2l6ZSk7IC8vIHNpemUgb2YgcGxheWVyIHNob3djYXNlIGRhdGFcbiRoZHJWYXJpYW50Rm9udFNpemU6IHZhcigtLWhkclZhcmlhbnRGb250U2l6ZSk7IC8vIHNpemUgb2YgcGxheWVyIHNob3djYXNlIE5hbWVcbiRoZHJNYXRjaERhdGFGb250U2l6ZTogdmFyKC0taGRyTWF0Y2hEYXRhRm9udFNpemUpOyAvLyBzaXplIG9mIHBsYXllciBzaG93Y2FzZSBOYW1lXG4kaGRyT3BlbmluZ0ZvbnRTaXplOiB2YXIoLS1oZHJNYXRjaERhdGFGb250U2l6ZSk7IC8vIHNpemUgb2YgcGxheWVyIHNob3djYXNlIE5hbWVcbiRoZHJSZXN1bHRGb250U2l6ZTogdmFyKC0taGRyUmVzdWx0Rm9udFNpemUpOyAvLyBzaXplIG9mIHBsYXllciBzaG93Y2FzZSBOYW1lXG4kaGRyUm91bmRGb250U2l6ZTogdmFyKC0taGRyUm91bmRGb250U2l6ZSk7IC8vIHNpemUgb2YgcGxheWVyIHNob3djYXNlIE5hbWVcblxuLy8gR2VuZXJhbCBzdHVmZlxuJHRleHQtY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xuJGJnLW91dGVyOiB2YXIoLS1iZy1vdXRlcik7XG4kYmctaW5uZXI6IHZhcigtLWJnLWlubmVyKTtcblxuJGJnLWNvbG9yOiAjZjJmM2Y3O1xuJGZnLWNvbG9yOiAjMzgzYTQxO1xuXG4kZ2xvdy1zaGFkb3c6IDAgMCAwLjVlbSB0cmFuc3BhcmVudGl6ZSgkYmx1ZSwgMC4zKTtcbjpyb290IHtcbiAgLS1iZy1jb2xvcjogI3skYmctY29sb3J9O1xuICAtLWZnLWNvbG9yOiAjeyRmZy1jb2xvcn07XG5cbiAgLS1yZWQ6ICN7JHJlZH07XG4gIC0tZ3JlZW46ICN7JGdyZWVufTtcbiAgLS1ibHVlOiAjeyRibHVlfTtcbiAgLS1kYXJrLWJsdWU6ICN7JGRhcmstYmx1ZX07XG4gIC0tbWFyb29uOiAjeyRtYXJvb259O1xuICAtLXB1cnBsZTogI3skcHVycGxlfTtcbn1cbiIsIkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnQ2F2ZWF0JztcbiAgICBzcmM6IHVybCgnLi4vLi4vZm9udHMvQm9sZC9DYXZlYXQtQm9sZC53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcbiAgICAgICAgdXJsKCcuLi8uLi9mb250cy9Cb2xkL0NhdmVhdC1Cb2xkLndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC1kaXNwbGF5OiBzd2FwO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ0NhdmVhdCc7XG4gICAgc3JjOiB1cmwoJy4uLy4uL2ZvbnRzL1JlZ3VsYXIvQ2F2ZWF0LVJlZ3VsYXIud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXG4gICAgICAgIHVybCgnLi4vLi4vZm9udHMvUmVndWxhci9DYXZlYXQtUmVndWxhci53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC1kaXNwbGF5OiBzd2FwO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdGaWd1cmluZVN5bWJvbFQxJztcbiAgc3JjOiB1cmwoJy4uLy4uL2ZvbnRzLzNyZCBQYXJ0eS9DaGVzc1ZhcmlhbnRzL0ZpZ3VyaW5lU3ltYm9sVDFCb2xkLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxuICAgICAgdXJsKCcuLi8uLi9mb250cy8zcmQgUGFydHkvQ2hlc3NWYXJpYW50cy9GaWd1cmluZVN5bWJvbFQxQm9sZC53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnRmlndXJpbmVTeW1ib2xUMSc7XG4gIHNyYzogdXJsKCcuLi8uLi9mb250cy8zcmQgUGFydHkvQ2hlc3NWYXJpYW50cy9GaWd1cmluZVN5bWJvbFQxLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxuICAgICAgdXJsKCcuLi8uLi9mb250cy8zcmQgUGFydHkvQ2hlc3NWYXJpYW50cy9GaWd1cmluZVN5bWJvbFQxLndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ1NhbmN0dWFyeVBsYXlncm91bmQnO1xuICBzcmM6IHVybCgnLi4vLi4vZm9udHMvM3JkIFBhcnR5L1NhbmN0dWFyeVBsYXlncm91bmQud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXG4gICAgICB1cmwoJy4uLy4uL2ZvbnRzLzNyZCBQYXJ0eS9TYW5jdHVhcnlQbGF5Z3JvdW5kLndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG59XG5cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnQW1pdGEnO1xuICBzcmM6IHVybCgnLi4vLi4vZm9udHMvM3JkIFBhcnR5L0FtaXRhL0FtaXRhLVJlZ3VsYXIud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXG4gICAgICB1cmwoJy4uLy4uL2ZvbnRzLzNyZCBQYXJ0eS9BbWl0YS9BbWl0YS1SZWd1bGFyLndvZmYyJykgZm9ybWF0KCd3b2ZmJyk7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xufSIsIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJDYXZlYXRcIjtcbiAgc3JjOiB1cmwoXCIuLi8uLi9mb250cy9Cb2xkL0NhdmVhdC1Cb2xkLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpLCB1cmwoXCIuLi8uLi9mb250cy9Cb2xkL0NhdmVhdC1Cb2xkLndvZmZcIikgZm9ybWF0KFwid29mZlwiKTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkNhdmVhdFwiO1xuICBzcmM6IHVybChcIi4uLy4uL2ZvbnRzL1JlZ3VsYXIvQ2F2ZWF0LVJlZ3VsYXIud29mZjJcIikgZm9ybWF0KFwid29mZjJcIiksIHVybChcIi4uLy4uL2ZvbnRzL1JlZ3VsYXIvQ2F2ZWF0LVJlZ3VsYXIud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJGaWd1cmluZVN5bWJvbFQxXCI7XG4gIHNyYzogdXJsKFwiLi4vLi4vZm9udHMvM3JkIFBhcnR5L0NoZXNzVmFyaWFudHMvRmlndXJpbmVTeW1ib2xUMUJvbGQud29mZjJcIikgZm9ybWF0KFwid29mZjJcIiksIHVybChcIi4uLy4uL2ZvbnRzLzNyZCBQYXJ0eS9DaGVzc1ZhcmlhbnRzL0ZpZ3VyaW5lU3ltYm9sVDFCb2xkLndvZmZcIikgZm9ybWF0KFwid29mZlwiKTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkZpZ3VyaW5lU3ltYm9sVDFcIjtcbiAgc3JjOiB1cmwoXCIuLi8uLi9mb250cy8zcmQgUGFydHkvQ2hlc3NWYXJpYW50cy9GaWd1cmluZVN5bWJvbFQxLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpLCB1cmwoXCIuLi8uLi9mb250cy8zcmQgUGFydHkvQ2hlc3NWYXJpYW50cy9GaWd1cmluZVN5bWJvbFQxLndvZmZcIikgZm9ybWF0KFwid29mZlwiKTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiU2FuY3R1YXJ5UGxheWdyb3VuZFwiO1xuICBzcmM6IHVybChcIi4uLy4uL2ZvbnRzLzNyZCBQYXJ0eS9TYW5jdHVhcnlQbGF5Z3JvdW5kLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpLCB1cmwoXCIuLi8uLi9mb250cy8zcmQgUGFydHkvU2FuY3R1YXJ5UGxheWdyb3VuZC53b2ZmXCIpIGZvcm1hdChcIndvZmZcIik7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkFtaXRhXCI7XG4gIHNyYzogdXJsKFwiLi4vLi4vZm9udHMvM3JkIFBhcnR5L0FtaXRhL0FtaXRhLVJlZ3VsYXIud29mZjJcIikgZm9ybWF0KFwid29mZjJcIiksIHVybChcIi4uLy4uL2ZvbnRzLzNyZCBQYXJ0eS9BbWl0YS9BbWl0YS1SZWd1bGFyLndvZmYyXCIpIGZvcm1hdChcIndvZmZcIik7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xufVxuLyoqKioqKioqKioqKioqKioqKiogTWVudSAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqKioqKiogTWVudSBDb250cm9scyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIENvbnRhaW5lciBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBDb250YWluZXIgVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgQ29udGFpbmVyIFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIEhpZ2hsaWdodCBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBBbm5vdGF0aW9uIFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIFZhcmlhdGlvbiBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBQbHkgVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqKiBDb250cm9sIENvbG9ycyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKiogQm9hcmQgQ29sb3JzICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqKiBGb250IFNpemVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbjpyb290IHtcbiAgLS1iZy1jb2xvcjogI2YyZjNmNztcbiAgLS1mZy1jb2xvcjogIzM4M2E0MTtcbiAgLS1yZWQ6ICNlNDMwMzA7XG4gIC0tZ3JlZW46ICMxOWExODc7XG4gIC0tYmx1ZTogIzM2N2JmMDtcbiAgLS1kYXJrLWJsdWU6ICMyNjVhYjE7XG4gIC0tbWFyb29uOiAjYjgxNzRjO1xuICAtLXB1cnBsZTogIzhjNDJhYjtcbn1cblxuLnN0YXR1cy10ZXh0IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtZmFtaWx5OiBcImdlb3JnaWFcIiwgZ2FyYW1vbmQsIHBhbGF0aW5vLCBib29rbWFuLCBcIlRpbWVzIE5ldyBSb21hblwiLCB0aW1lcztcbiAgZmxvYXQ6IGxlZnQ7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1zaXplOiAyMnB4O1xuICBtYXJnaW4tbGVmdDogNHB4O1xuICBtYXJnaW4tdG9wOiAycHg7XG4gIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICAtby11c2VyLXNlbGVjdDogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbi5hbmFseXNpcy1pbWFnZSB7XG4gIGhlaWdodDogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gIG1hcmdpbi10b3A6IDRweDtcbiAgd2lkdGg6IDIwcHg7XG4gIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICAtby11c2VyLXNlbGVjdDogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbi5hbmFseXNpcy1idXR0b24ge1xuICBtYXJnaW4tbGVmdDogOHB4O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6IGJsdWU7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW8tdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AriaStatus, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'aria-status',
                templateUrl: './aria-status.component.html',
                styleUrls: ['./aria-status.component.scss']
            }]
    }], function () { return [{ type: _services_aria_service__WEBPACK_IMPORTED_MODULE_3__["AriaService"] }]; }, null); })();


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
/* harmony import */ var _services_aria_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/aria.service */ "./src/app/services/aria.service.ts");
/* harmony import */ var _services_themes_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/themes.service */ "./src/app/services/themes.service.ts");








const _c0 = ["boardCanvas"];
var ObjectType;
(function (ObjectType) {
    ObjectType[ObjectType["Tile"] = 111] = "Tile";
    ObjectType[ObjectType["Label"] = 222] = "Label";
})(ObjectType || (ObjectType = {}));
class CanvasChessBoard {
    constructor(aria, themes) {
        this.aria = aria;
        this.themes = themes;
        this.size = 320;
        this.tileSize = Math.floor(this.size / 8);
        this.interactive = true;
        this.showLabels = false;
        this.boardID = '';
        this.container = null;
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
        this.container = document.getElementById('ccb-' + this.aria.UUID);
        if (this.boardCanvas) {
            this.canvas = new fabric__WEBPACK_IMPORTED_MODULE_1__["fabric"].Canvas(this.boardCanvas.nativeElement);
            this.canvas.selection = false;
            const waitCount = this.loadPieces();
            waitCount.subscribe((count) => {
                var _a;
                if (count >= 12) {
                    this.generateBoard();
                    this.connectMouseInput();
                    const position = (_a = this.aria.getGame()) === null || _a === void 0 ? void 0 : _a.getPosition();
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
        const position = (_a = this.aria.getGame()) === null || _a === void 0 ? void 0 : _a.getPosition();
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
    startMoveAnimation(piece, x, y, col, row) {
        if (this.pieceAnimation) {
            const lastPiece = this.pieceAnimation.piece;
            lastPiece === null || lastPiece === void 0 ? void 0 : lastPiece.set('left', this.pieceAnimation.x);
            lastPiece === null || lastPiece === void 0 ? void 0 : lastPiece.set('top', this.pieceAnimation.y);
            lastPiece.setCoords();
        }
        this.pieceAnimation = { piece, x, y, col, row };
        this.updatePiece();
    }
    performPromotion(move) {
        if (move.promotion) {
            console.log('Promoting to ' + move.promotion.role);
            console.log('@ ' + _types__WEBPACK_IMPORTED_MODULE_4__["SquareNames"][move.to]);
            // remove old piece
            this.removePiece(move.from);
            this.addPiece(move.to, move.color, move.promotion.role);
            this.aria.performPromotion(move);
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
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
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
                fill: this.themes.bgMenu,
                left: (this.size - width) / 2,
                top: (this.size - height) / 2,
                rx: width * 0.02,
                ry: width * 0.02,
            });
            bg.setColor(this.themes.bgMenu);
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
            if (tileToClone && tileToClone.tile) {
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
            const bgColor = (_a = tileToClone.tile) === null || _a === void 0 ? void 0 : _a.get('fill');
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
                (_b = tileToClone.tile) === null || _b === void 0 ? void 0 : _b.clone((tile) => {
                    tile.set('originX', 'left');
                    tile.set('originY', 'top');
                    tile.set('stroke', this.themes.gsTextColorHG.value);
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
                (_c = tileToClone.tile) === null || _c === void 0 ? void 0 : _c.clone((tile) => {
                    tile.set('originX', 'left');
                    tile.set('originY', 'top');
                    tile.set('stroke', this.themes.gsTextColorHG.value);
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
                (_d = tileToClone.tile) === null || _d === void 0 ? void 0 : _d.clone((tile) => {
                    tile.set('originX', 'left');
                    tile.set('originY', 'top');
                    tile.set('stroke', this.themes.gsTextColorHG.value);
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
                (_e = tileToClone.tile) === null || _e === void 0 ? void 0 : _e.clone((tile) => {
                    tile.set('originX', 'left');
                    tile.set('originY', 'top');
                    tile.set('stroke', this.themes.gsTextColorHG.value);
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
            (_f = this.canvas) === null || _f === void 0 ? void 0 : _f.add(this.promotionDialog);
            this.promotionDialog.moveTo(500);
            if (this.knightButton) {
                (_g = this.canvas) === null || _g === void 0 ? void 0 : _g.add(this.knightButton);
                this.knightButton.moveTo(510);
            }
            if (this.bishopButton) {
                (_h = this.canvas) === null || _h === void 0 ? void 0 : _h.add(this.bishopButton);
                this.bishopButton.moveTo(510);
            }
            if (this.rookButton) {
                (_j = this.canvas) === null || _j === void 0 ? void 0 : _j.add(this.rookButton);
                this.rookButton.moveTo(510);
            }
            if (this.queenButton) {
                (_k = this.canvas) === null || _k === void 0 ? void 0 : _k.add(this.queenButton);
                this.queenButton.moveTo(510);
            }
            (_l = this.canvas) === null || _l === void 0 ? void 0 : _l.requestRenderAll();
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
                this.startMoveAnimation(piece.object, xDest, yDest, col, row);
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
                this.startMoveAnimation(piece.object, xDest, yDest, col, row);
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
                    if (!this.tiles[tile]) {
                        this.tiles[tile] = {};
                    }
                    // @ts-ignore
                    this.tiles[tile]['piece'] = { role, color };
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
        if (this.aria.validGame()) {
            const position = (_a = this.aria.getGame()) === null || _a === void 0 ? void 0 : _a.getPosition();
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
                    this.aria.validGame() && ((_b = this.aria.getGame()) === null || _b === void 0 ? void 0 : _b.makeMove(move))) {
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
            if (tileData && tileData.tile) {
                (_a = this.canvas) === null || _a === void 0 ? void 0 : _a.remove(tileData.tile);
            }
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
                    object.set('fill', isDark ? this.themes.boardLabelDark.value : this.themes.boardLabelLight.value);
                }
                break;
            }
            case ObjectType.Tile: {
                object = new fabric__WEBPACK_IMPORTED_MODULE_1__["fabric"].Rect({
                    width: this.tileSize,
                    height: this.tileSize,
                });
                if (isDark !== undefined && isDark !== null) {
                    object.set('fill', isDark ? this.themes.boardBGDark.value : this.themes.boardBGLight.value);
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
    getPieceAnimation() {
        let x = 0;
        let y = 0;
        return { x, y };
    }
    updatePieceAnimation(x, y) {
    }
    setDarkTile(color) {
        var _a;
        if (this.tiles.length != 0 && this.theme) {
            for (let index = 0; index < 64; index++) {
                const row = Math.floor(index / 8);
                if (row % 2 === 0) {
                    if (index % 2 === 0) {
                        const tile = this.tiles[index].tile;
                        if (tile) {
                            tile.set('fill', color);
                        }
                    }
                }
                else {
                    if (index % 2 !== 0) {
                        const tile = this.tiles[index].tile;
                        if (tile) {
                            tile.set('fill', color);
                        }
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
                        if (tile) {
                            tile.set('fill', color);
                        }
                    }
                }
                else {
                    if (index % 2 !== 0) {
                        const tile = this.tiles[index].tile;
                        if (tile) {
                            tile.set('fill', color);
                        }
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
            if (this.container) {
                this.container.style.height = size + 'px';
                this.container.style.width = size + 'px';
            }
            this.canvas.setDimensions({
                width: size,
                height: size,
            });
            this.resizeBoardObjects(size);
            if (this.pieceAnimation) {
                const col = this.pieceAnimation.col;
                const row = this.pieceAnimation.row;
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
                this.pieceAnimation.x = xDest;
                this.pieceAnimation.y = yDest;
            }
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
CanvasChessBoard.ɵfac = function CanvasChessBoard_Factory(t) { return new (t || CanvasChessBoard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_aria_service__WEBPACK_IMPORTED_MODULE_5__["AriaService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_themes_service__WEBPACK_IMPORTED_MODULE_6__["ThemeService"])); };
CanvasChessBoard.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CanvasChessBoard, selectors: [["canvas-chessboard"]], viewQuery: function CanvasChessBoard_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.boardCanvas = _t.first);
    } }, inputs: { size: "size", tileSize: "tileSize", interactive: "interactive", showLabels: "showLabels", boardID: "boardID", theme: "theme" }, outputs: { pieceMap: "pieceMap", pieces: "pieces", background: "background", tileGroup: "tileGroup", tiles: "tiles", labels: "labels", canvas: "canvas", touching: "touching", midPromotion: "midPromotion" }, decls: 2, vars: 2, consts: [["resize", ""], ["boardCanvas", ""]], template: function CanvasChessBoard_Template(rf, ctx) { if (rf & 1) {
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
    }], function () { return [{ type: _services_aria_service__WEBPACK_IMPORTED_MODULE_5__["AriaService"] }, { type: _services_themes_service__WEBPACK_IMPORTED_MODULE_6__["ThemeService"] }]; }, { size: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], tileSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], interactive: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], showLabels: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], boardID: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], theme: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
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
    constructor(tileLight = '', tileDark = '', pieceSet = '', isSpriteSheet = false, fileExtension = '.svg', labelFontSize = 14, labelFontFamily = 'Cambria', labelFontWeight = 'bold') {
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
    constructor(move) {
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
        if (this.move && this.move.variations) {
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
    constructor(aria, game) {
        this.aria = aria;
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
    static parsePGN(aria, pgn) {
        const games = [];
        const state = Object(kokopu__WEBPACK_IMPORTED_MODULE_0__["pgnRead"])(pgn);
        if (state) {
            const gameCount = state.gameCount();
            for (let index = 0; index < gameCount; ++index) {
                games.push(new ChessGame(aria, state.game(index)));
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
        this.aria.redrawBoard();
        this.aria.updateStatus(this.position.turn(), node);
    }
    addNextMove(notation) {
        this.currentNode = this.currentNode.play(notation);
        this.aria.gameScoreItemsChanged(this.generateGameScore());
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
            gItem = new GameScoreItem(node);
            gItem.getType(previous);
            items.push(gItem);
            previous = gItem;
            node = node.next();
        }
        return items;
    }
    generateHeaderData() {
        let map = new Map();
        if (this.game) {
            map.set('Event', this.game.event());
            const date = this.game.date();
            if (date) {
                let dateString = '';
                if (date.toDateString) {
                    dateString = date.toDateString();
                }
                else {
                    if (date.month) {
                        dateString += date.month;
                    }
                    if (date.year) {
                        if (dateString.length > 0) {
                            dateString += ' of ';
                        }
                        dateString += date.year;
                    }
                }
                if (dateString.length == 0) {
                    if (date.toString) {
                        dateString = date.toString();
                    }
                }
                map.set('Event Date', dateString);
            }
            map.set('White', this.game.playerName('w'));
            map.set('Black', this.game.playerName('b'));
            let elo = this.game.playerElo('w');
            if (elo != '?') {
                map.set('White Elo', elo);
            }
            elo = this.game.playerElo('b');
            if (elo !== '?') {
                map.set('Black Elo', elo);
            }
            map.set('Site', this.game.site());
            map.set('Round', this.game.round());
            map.set('Result', this.game.result());
            let variant = this.game.variant();
            if (variant === 'regular') {
                variant = "Chess";
            }
            else {
                variant = "Chess960";
            }
            map.set('Variant', variant);
        }
        return map;
    }
    generateGameScore() {
        let items = Array();
        let gItem = null;
        let previous = null;
        const traversals = this.scorePath.length;
        let current = this.startNode;
        if (traversals == 0) {
            items = this.generateRootScore();
            return items;
        }
        for (let index = 0; index < traversals; ++index) {
            const traversal = this.scorePath[index];
            for (let j = 0; j < traversal.right; ++j) {
                gItem = new GameScoreItem(current);
                gItem.getType(previous);
                items.push(gItem);
                previous = gItem;
                current = current.next();
            }
            if (traversal.down > 0) {
                const variations = current.variations();
                if (variations.length > (traversal.down - 1)) {
                    const variation = variations[traversal.down - 1];
                    current = variation.first();
                    console.log('Branching at ' + current.notation());
                    gItem = new GameScoreItem(current);
                    gItem.getType(previous);
                    items.push(gItem);
                    previous = gItem;
                    current = current.next();
                }
            }
        }
        while (current) {
            gItem = new GameScoreItem(current);
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
        this.aria.redrawBoard();
    }
    moveToPrevious(previousNode, current) {
        if (this.currentNode) {
            const previousPosition = this.currentNode.positionBefore();
            if (previousPosition && this.currentNode) {
                const moveToBeUndone = ChessMove.fromNode(this.currentNode);
                this.aria.updateStatus(this.position.turn(), previousNode);
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
            this.aria.updateStatus(this.position.turn(), next);
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
            this.aria.updateStatus(this.position.turn(), previous);
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
            this.aria.updateStatus(this.position.turn(), this.currentNode, move);
            // tell it to restore gamescore
            this.aria.gameScoreItemsChanged(this.generateGameScore());
            this.aria.incrementGameScoreSelection();
            return true;
        }
        return false;
    }
    addMoveToEnd(move) {
        if (this.currentNode && this.position.play(move)) {
            const next = this.currentNode.play(move);
            this.currentNode = next;
            this.position = this.currentNode.position();
            this.aria.updateStatus(this.position.turn(), this.currentNode);
            // tell it to restore gamescore
            this.aria.gameScoreItemsChanged([]);
            this.aria.gameScoreItemsChanged(this.generateGameScore());
            this.aria.incrementGameScoreSelection();
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
            this.aria.updateStatus(this.position.turn(), this.currentNode);
            this.scorePath.push({ right: this.currentIndex, down: index + 1 });
            this.currentIndex = 0;
            if (updateBoard) {
                this.aria.makeBoardMove(ChessMove.fromNode(this.currentNode));
            }
            this.aria.updateStatus(this.position.turn(), this.currentNode);
            // tell it to restore gamescore
            this.aria.gameScoreItemsChanged(this.generateGameScore());
            this.aria.incrementGameScoreSelection();
            return true;
        }
        return false;
    }
    makeMoveOrVariation(nextMove, moveToBeMade, legalMove) {
        let valid = false;
        if (nextMove && moveToBeMade.compareMoveToNode(nextMove)) {
            valid = this.position.play(legalMove);
            this.aria.incrementGameScoreSelection();
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
                this.aria.showPromotionDialog(move);
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
        this.position = this.game.initialPosition();
        this.currentNode = null;
        this.aria.updateStatus(this.position.turn());
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

/***/ "./src/app/services/aria.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/aria.service.ts ***!
  \******************************************/
/*! exports provided: ScoreViewType, STOCK_IMAGE, AriaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScoreViewType", function() { return ScoreViewType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STOCK_IMAGE", function() { return STOCK_IMAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AriaService", function() { return AriaService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _common_kokopu_engine__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/kokopu-engine */ "./src/app/common/kokopu-engine.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");





var ScoreViewType;
(function (ScoreViewType) {
    ScoreViewType[ScoreViewType["Table"] = 101] = "Table";
    ScoreViewType[ScoreViewType["Flow"] = 202] = "Flow";
})(ScoreViewType || (ScoreViewType = {}));
;
const STOCK_IMAGE = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].imagesPath + 'player.png';
class AriaService {
    // Visual Settings
    constructor() {
        this.showingPly = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](true);
        this.showingHalfPly = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this.autoPlaySpeed = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](300);
        this.scoreViewType = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](ScoreViewType.Flow);
        this.showTableHeader = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](true);
        this.autoIntervalID = -1;
        this.timeLeft = 300;
        this.UUID = '';
        this.setName = '';
        this.setDate = '';
        this.playerData = {};
        this.gameData = [];
        this.figurineNotation = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](true);
        this.gsFontFamily = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('FigurineSymbolT1');
        this.scoreFontSize = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](32);
        this.figurineSize = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](20);
        this.showLabels = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](true);
        this._games = [];
        this._game = null;
        this.gameScoreItems = [];
        this.gameResult = '';
        this.currentIndex = -1;
        this.currentItem = null;
        this._board = null;
        this._score = null;
        this._status = null;
        this._controls = null;
        this._header = null;
        this._app = null;
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
    settings() {
        let settings = {};
        return settings;
    }
    moveToStart() {
        while (this.previous()) { }
    }
    moveToEnd() {
        while (this.advance()) { }
    }
    isStartingPosition() {
        return this.currentIndex === -1;
    }
    isFinalPosition() {
        return this.currentIndex >= (this.gameScoreItems.length - 1);
    }
    previous() {
        if (this.currentIndex !== -1) {
            const prev = this.currentIndex - 1;
            if (prev < this.gameScoreItems.length && prev >= -1) {
                this.navigateToNode(prev);
                return true;
            }
        }
        return false;
    }
    advance() {
        if (!this.isFinalPosition()) {
            const next = this.currentIndex + 1;
            if (next < this.gameScoreItems.length && next >= 0) {
                this.navigateToNode(next);
                return true;
            }
        }
        return false;
    }
    getPlyCount() {
        if (this.gameScoreItems) {
            return (this.gameScoreItems.length / 2) + 1;
        }
        return 0;
    }
    navigateToNode(index) {
        if (this.currentIndex < index) {
            while (this.currentIndex < index) {
                const next = this.gameScoreItems[++this.currentIndex];
                if (next) {
                    if (this.play(next.move)) {
                        const nodeMove = _common_kokopu_engine__WEBPACK_IMPORTED_MODULE_2__["ChessMove"].fromNode(next.move);
                        if (nodeMove) {
                            this.makeBoardMove(nodeMove);
                        }
                    }
                }
            }
            this.currentIndex = index;
            if (this._score) {
                this._score.updateSelection();
            }
            return;
        }
        while (this.currentIndex > index) {
            const node = this.gameScoreItems[this.currentIndex];
            let prev = null;
            if (this.currentIndex > 0) {
                prev = this.gameScoreItems[this.currentIndex - 1];
            }
            if (prev && node) {
                if (this.unPlay(node.move, prev.move)) {
                    const nodeMove = _common_kokopu_engine__WEBPACK_IMPORTED_MODULE_2__["ChessMove"].fromNode(node.move);
                    if (nodeMove) {
                        this.reverseBoardMove(nodeMove);
                    }
                }
            }
            --this.currentIndex;
        }
        if (index === -1) {
            this.resetEngine();
            this.redrawBoard();
        }
        if (this._score) {
            this._score.updateSelection();
        }
    }
    autoAdvance() {
        this.timeLeft -= 100;
        if (this._controls) {
            this._controls.setTimer(this.timeLeft);
        }
        if (this.timeLeft <= 0) {
            if (!this.isFinalPosition()) {
                this.advance();
            }
            else {
                this.toggleAutoPlay();
            }
            this.timeLeft = this.autoPlaySpeed.value;
        }
    }
    createJsonSettings() {
        if (this._app) {
            return this._app.getJsonSettings();
        }
        return '';
    }
    setJsonSettings(json) {
        if (this._app) {
            if (json.length > 0) {
                const settings = JSON.parse(json);
                return this._app.applyJsonSettings(settings);
            }
            return this._app.applyDefaultSettings();
        }
        return false;
    }
    toggleAutoPlay() {
        if (!this.isFinalPosition() && this.autoIntervalID == -1) {
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
    toggleScoreType() {
        if (this.scoreViewType.value == ScoreViewType.Flow) {
            this.scoreViewType.next(ScoreViewType.Table);
        }
        else {
            this.scoreViewType.next(ScoreViewType.Flow);
        }
    }
    gameCount() {
        if (this._games) {
            return this._games.length;
        }
        return 0;
    }
    openEngine() { }
    toggleGameScoreViewType() {
        if (this.scoreViewType.value === ScoreViewType.Flow) {
            this.scoreViewType.next(ScoreViewType.Table);
        }
        else {
            this.scoreViewType.next(ScoreViewType.Flow);
        }
    }
    loadPGN(pgn) {
        let fIndex = pgn.indexOf('[Set ');
        if (fIndex >= 0) {
            const endSet = pgn.indexOf(']', fIndex);
            const setName = pgn.slice(fIndex, endSet + 1);
            if (setName.length > 0 && setName.length < 240) {
                this.setName = setName.slice(6, -2);
            }
            pgn = pgn.replace(setName, '');
        }
        fIndex = pgn.indexOf('[SetDate ');
        if (fIndex >= 0) {
            const endSet = pgn.indexOf(']', fIndex);
            const setDate = pgn.slice(fIndex, endSet + 1);
            if (setDate.length > 0 && setDate.length < 60) {
                this.setDate = setDate.slice(10, -2);
            }
            pgn = pgn.replace(setDate, '');
        }
        fIndex = pgn.indexOf('[PlayerImages ');
        let imagePath = '';
        if (fIndex >= 0) {
            const endSet = pgn.indexOf(']', fIndex);
            const iPath = pgn.slice(fIndex, endSet + 1);
            if (endSet >= 0 && endSet - fIndex <= 120) {
                imagePath = iPath.slice(15, -2);
            }
            pgn = pgn.replace(iPath, '');
        }
        fIndex = pgn.indexOf('[PlayerData ');
        this.playerData = {};
        if (fIndex >= 0) {
            const endSet = pgn.indexOf(']', fIndex);
            const pData = pgn.slice(fIndex, endSet + 1);
            if (endSet >= 0 && endSet - fIndex <= 1500) {
                const data = pData.slice(13, -2);
                if (data.length > 0) {
                    try {
                        this.playerData = JSON.parse(data);
                        if (this.playerData) {
                            for (let k in this.playerData) {
                                // @ts-ignore
                                let pdata = this.playerData[k];
                                if (pdata.image) {
                                    pdata.image = imagePath + pdata.image;
                                }
                            }
                        }
                    }
                    catch (ex) {
                        console.log('Bad parse on JSON player data');
                    }
                }
            }
            pgn = pgn.replace(pData, '');
        }
        fIndex = pgn.indexOf('[GameData ');
        this.gameData = [];
        if (fIndex >= 0) {
            let endSet = pgn.indexOf(']', fIndex);
            endSet = pgn.indexOf(']', endSet + 1);
            const pData = pgn.slice(fIndex, endSet + 1);
            if (endSet >= 0 && endSet - fIndex <= 1500) {
                const data = pData.slice(11, -2);
                if (data.length > 0) {
                    try {
                        this.gameData = JSON.parse(data);
                    }
                    catch (ex) {
                        console.log('Bad parse on JSON for game data');
                    }
                }
            }
            pgn = pgn.replace(pData, '');
        }
        this._games = _common_kokopu_engine__WEBPACK_IMPORTED_MODULE_2__["ChessGame"].parsePGN(this, pgn);
        if (this._games.length > 0) {
            const game = this._games[0];
            this._game = game;
            this.selectGame(0);
        }
    }
    typeToString(type) {
        return _common_kokopu_engine__WEBPACK_IMPORTED_MODULE_2__["GameScoreType"][type];
    }
    selectGame(index) {
        if (index >= 0 && index <= this._games.length && this._score) {
            this._game = this._games[index];
            window.setTimeout(() => {
                var _a, _b, _c, _d, _e, _f;
                (_a = this._score) === null || _a === void 0 ? void 0 : _a.clearSelection();
                const gamescore = (_b = this._game) === null || _b === void 0 ? void 0 : _b.generateGameScore();
                if (gamescore) {
                    this.gameScoreItems = gamescore;
                }
                else {
                    this.gameScoreItems = [];
                }
                (_c = this._board) === null || _c === void 0 ? void 0 : _c.setBoardToPosition((_d = this._game) === null || _d === void 0 ? void 0 : _d.getPosition());
                (_e = this._score) === null || _e === void 0 ? void 0 : _e.updateSelection();
                const headerData = (_f = this._game) === null || _f === void 0 ? void 0 : _f.generateHeaderData();
                if (headerData) {
                    const result = headerData.get('Result');
                    if (result) {
                        this.gameResult = result;
                    }
                    if (this._header) {
                        this._header.setHeader(headerData);
                        this._header.currentGame = index;
                        this._header.gameCount = this._games.length;
                    }
                }
            }, 1);
        }
    }
    attachAria(aria) {
        this._app = aria;
        this._board = aria.canvasBoardComponent;
        this._header = aria.headerComponent;
        this._controls = aria.controlsComponent;
        this._status = aria.statusComponent;
    }
    attachScore(score) {
        this._score = score;
    }
    attachHeader(header) {
        this._header = header;
    }
    editComment(data) {
        console.log('Editing Comment -> ' + data.move.comment());
    }
    openVariation(data) {
        const variations = data.move.variations();
        if (this._score && variations && variations.length) {
            console.log('Editing Variations on: ' + data.move.notation());
            console.log(variations);
            // if (this._menu) {
            //   this._menu.openVariationMenu(data);
            // }
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
        //this._status?.updateStatus(turn, last, move);
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
    gameScoreItemsChanged(items) {
        this.gameScoreItems = items;
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
    getPlayerData(player) {
        // @ts-ignore
        return this.playerData[player];
    }
    getGameData(index) {
        if (this.gameData.length > index && index >= 0) {
            return this.gameData[index];
        }
        return null;
    }
    // engine interface
    isMoveDescriptor(move) {
        return _common_kokopu_engine__WEBPACK_IMPORTED_MODULE_2__["ChessGame"].isMoveDescriptor(move);
    }
    gameFEN() {
        let fen = '';
        if (this._game) {
            return this._game.getPosition().fen();
        }
        return fen;
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
    saveSettings() {
        var _a;
        // if (this._cookies) {
        //   if (this.cookiesAccepted.value) {
        //     let settings = this.createJsonSettings();
        //     this._cookies.setCookie(settings, 365);
        //   } else {
        //     this._cookies.setCookie('', 0);
        //   }
        // }
        (_a = this._app) === null || _a === void 0 ? void 0 : _a.saveSettings(this.createJsonSettings());
    }
    loadSettings() {
        let settings = '{}';
        // if (this.cookiesAccepted.value) {
        //   if (this._cookies) {
        //     settings = this._cookies.getCookie();
        //   }
        //   this.setJsonSettings(settings);
        // }
        return settings;
    }
}
AriaService.ɵfac = function AriaService_Factory(t) { return new (t || AriaService)(); };
AriaService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AriaService, factory: AriaService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AriaService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, { showingPly: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], showingHalfPly: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], autoPlaySpeed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], scoreViewType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], showTableHeader: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], gsFontFamily: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], scoreFontSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], figurineSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], showLabels: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], gameScoreItems: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], gameResult: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], currentIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], currentItem: [{
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



function debounce(func, wait) {
    let timeout = -1;
    return function executedFunction(...args) {
        const later = () => {
            timeout = -1;
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}
class LayoutService {
    constructor() {
        this.landscapeOrientation = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](true);
        this.mobileView = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this.aria = null;
        this.header = null;
        this.controls = null;
        this.gameScore = null;
        this.status = null;
        this.board = null;
        this.resizeElement = null;
        this.preferredLayout = 'auto';
        this.preferredRatioLandscape = .75;
        this.preferredRatioPortrait = 0.46;
        this.preferredWidthPercentage = 1.0;
        this.preferredHeightPercentage = 1.0;
        this.layoutDirection = true;
        this.gameScoreElement = null;
        this.boardElement = null;
        this.controlsElement = null;
        this.statusElement = null;
        this.headerElement = null;
        this.state = 3;
    }
    settings() {
        let settings = {};
        return settings;
    }
    // protected resizeEvent(entries: readonly ResizeObserverEntry[]) {
    //   const resume = this.controlsComponent?.pauseIfAutoPlay();
    //   // @ts-ignore
    //   const boundingRect = entries[0].contentRect as DOMRectReadOnly;
    //   if (!this.appContainer) {
    //     console.log('Invalid (Null) App Container %$@');
    //   } else {
    //     let height = boundingRect.height;
    //     if (boundingRect.width === height) {
    //       height - 2;
    //     }
    //     const landscape = (boundingRect.width > height);
    //     this.landscapeOrientation.next(landscape);
    //     switch (this.preferredLayout) {
    //       case 'auto': {
    //         if (landscape) {
    //           this.rtl(boundingRect.width, height);
    //         } else {
    //           this.rtp(boundingRect.width, height);
    //         }
    //         break;
    //       }
    //       case 'landscape': {
    //         this.rtl(boundingRect.width, height);
    //         break;
    //       }
    //       case 'portrait': {
    //         this.rtp(boundingRect.width, height);
    //         break;
    //       }
    //     }
    //   }
    //   if (resume) {
    //     this.controlsComponent?.toggleAutoPlay();
    //   }
    // }
    attachHeader(header) {
        this.header = header;
    }
    attachScore(gs) {
        this.gameScore = gs;
    }
    rtl(width, height) {
        var _a, _b, _c, _d, _e;
        let boardWidth = (width * this.preferredRatioLandscape);
        boardWidth = boardWidth > height ? height : boardWidth;
        boardWidth = boardWidth < 192 ? 192 : boardWidth;
        let c2width = width - (boardWidth + 4);
        if (c2width < 300) {
            let diff = 300 - c2width;
            c2width = 300;
            boardWidth -= diff;
        }
        let hheight = height - 153;
        this.state = c2width > 586 ? 3 : 4;
        (_a = this.header) === null || _a === void 0 ? void 0 : _a.resize(c2width, hheight);
        (_b = this.controls) === null || _b === void 0 ? void 0 : _b.resize(c2width, 64);
        (_c = this.board) === null || _c === void 0 ? void 0 : _c.setSize(boardWidth);
        if (this.boardElement && this.gameScoreElement && this.headerElement && this.statusElement && this.controlsElement) {
            switch (this.state) {
                case 3: { // landscape full
                    this.headerElement.style.maxHeight = hheight + 'px';
                    this.headerElement.style.height = hheight + 'px';
                    this.headerElement.style.width = c2width + 'px';
                    this.headerElement.style.right = '0px';
                    this.headerElement.style.left = '';
                    (_d = this.header) === null || _d === void 0 ? void 0 : _d.resize(c2width, hheight);
                    if (this.layoutDirection) { // RTL
                        this.boardElement.style.left = '2px';
                        this.boardElement.style.right = '';
                    }
                    else {
                        this.boardElement.style.right = '2px';
                        this.boardElement.style.left = '';
                    }
                    this.boardElement.style.top = '2px';
                    this.controlsElement.style.width = c2width + 'px';
                    this.controlsElement.style.top = hheight + 'px';
                    this.controlsElement.style.right = '0px';
                    this.controlsElement.style.left = '';
                    //this.gameScore?.resize(c2width, 456);
                    this.statusElement.style.bottom = '0px';
                    this.statusElement.style.height = '32px';
                    this.statusElement.style.right = '2px';
                    this.statusElement.style.left = '';
                    this.statusElement.style.top = '';
                    this.statusElement.style.width = c2width - 2 + 'px';
                    break;
                }
                case 4: {
                    this.headerElement.style.maxHeight = hheight + 'px';
                    this.headerElement.style.height = hheight + 'px';
                    this.headerElement.style.width = c2width + 'px';
                    this.headerElement.style.right = '0px';
                    this.headerElement.style.left = '';
                    (_e = this.header) === null || _e === void 0 ? void 0 : _e.resize(c2width, hheight);
                    if (this.layoutDirection) { // RTL
                        this.boardElement.style.left = '2px';
                        this.boardElement.style.right = '';
                    }
                    else {
                        this.boardElement.style.right = '2px';
                        this.boardElement.style.left = '';
                    }
                    this.boardElement.style.top = '2px';
                    this.controlsElement.style.width = c2width + 'px';
                    this.controlsElement.style.top = hheight + 'px';
                    this.controlsElement.style.right = '0px';
                    this.controlsElement.style.left = '';
                    // this.gameScoreElement.style.right = '2px';
                    // this.gameScoreElement.style.width = c2width - 24 + 'px';
                    // this.gameScoreElement.style.height = '456px';
                    // this.gameScoreElement.style.top = '340px';
                    // this.gameScoreElement.style.left = '';
                    //this.gameScore?.resize(c2width, 456);
                    this.statusElement.style.bottom = '0px';
                    this.statusElement.style.height = '32px';
                    this.statusElement.style.right = '2px';
                    this.statusElement.style.left = '';
                    this.statusElement.style.top = '';
                    this.statusElement.style.width = c2width - 2 + 'px';
                    break;
                }
            }
        }
    }
    rtp(width, height) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        if (this.boardElement && this.gameScoreElement && this.headerElement && this.statusElement && this.controlsElement) {
            let boardWidth = Math.floor(width * this.preferredRatioPortrait);
            boardWidth = boardWidth < 192 ? 192 : boardWidth; // board minimum size 192
            this.state = width > 480 ? 2 : ((width - boardWidth) >= 264 ? 2 : 1);
            switch (this.state) {
                case 1: {
                    (_a = this.board) === null || _a === void 0 ? void 0 : _a.setSize(boardWidth);
                    this.boardElement.style.marginLeft = (width - boardWidth) / 2 + 'px';
                    (_b = this.header) === null || _b === void 0 ? void 0 : _b.resize(width, -1);
                    this.gameScoreElement.style.right = '';
                    this.gameScoreElement.style.width = width + 'px';
                    this.gameScoreElement.style.height = 'auto';
                    this.gameScoreElement.style.top = '';
                    this.gameScoreElement.style.left = '';
                    (_c = this.gameScore) === null || _c === void 0 ? void 0 : _c.resize(width, -1);
                    break;
                }
                case 2: {
                    (_d = this.board) === null || _d === void 0 ? void 0 : _d.setSize(boardWidth);
                    (_e = this.header) === null || _e === void 0 ? void 0 : _e.resize(width, -1);
                    this.boardElement.style.marginLeft = '';
                    this.gameScoreElement.style.right = '';
                    this.gameScoreElement.style.top = '';
                    this.gameScoreElement.style.left = '';
                    const gsWidth = (width - (20 + boardWidth));
                    (_f = this.gameScore) === null || _f === void 0 ? void 0 : _f.resize(gsWidth, boardWidth);
                    this.gameScoreElement.style.height = boardWidth + 'px';
                    this.gameScoreElement.style.width = gsWidth + 'px';
                    break;
                }
            }
            this.statusElement.style.bottom = '';
            this.statusElement.style.top = '';
            this.statusElement.style.height = '32px';
            this.statusElement.style.left = '';
            this.statusElement.style.right = '';
            this.statusElement.style.width = (width - 4) + 'px';
            (_g = this.status) === null || _g === void 0 ? void 0 : _g.resize(width, 99);
            this.controlsElement.style.right = '';
            this.controlsElement.style.width = width + 'px';
            this.controlsElement.style.top = '';
            this.controlsElement.style.bottom = '';
            this.controlsElement.style.left = '';
            this.controlsElement.style.height = '99px';
            (_h = this.controls) === null || _h === void 0 ? void 0 : _h.resize(width, 99);
        }
    }
    openSettings() {
        // if (this.menuComponent) {
        //   this.menuComponent.open();
        // }
        // move to sending open signal to parent page if menu does not exist
    }
    closeSettings() {
        // if (this.menuComponent) {
        //   this.menuComponent.close();
        // }
    }
    initializeLayout(aria) {
        this.aria = aria;
        this.board = aria.canvasBoardComponent;
    }
    // onSliderTouch(event: TouchEvent): void {
    //   if (
    //     event.touches.length > 0 &&
    //     this.landscapeOrientation.value &&
    //     event &&
    //     event.touches[0].clientX > 64
    //   ) {
    //     if (this.olga && this.appContainer) {
    //       let gsSize = window.innerWidth - event.touches[0].clientX;
    //       const width = window.innerWidth
    //         || document.documentElement.clientWidth
    //         || document.body.clientWidth;
    //       const height = window.innerHeight
    //         || document.documentElement.clientHeight
    //         || document.body.clientHeight;
    //       switch (this.preferredLayout) {
    //         case 'auto': {
    //           if (width > height) {
    //             this.resizeToLandscape(width, height, gsSize);
    //           } else {
    //             this.resizeToPortrait(width, height, gsSize);
    //           }
    //           break;
    //         }
    //         case 'landscape': {
    //           this.resizeToLandscape(width, height, gsSize);
    //           break;
    //         }
    //         case 'portrait': {
    //           this.resizeToPortrait(width, height, gsSize);
    //           break;
    //         }
    //       }
    //     }
    //   } else {
    //     if (
    //       !this.landscapeOrientation.value &&
    //       event &&
    //       event.touches[0].clientY > 64
    //     ) {
    //       if (this.olga && this.appContainer) {
    //         let gsSize = window.innerHeight - event.touches[0].clientY;
    //         const width = window.innerWidth
    //           || document.documentElement.clientWidth
    //           || document.body.clientWidth;
    //         const height = window.innerHeight
    //           || document.documentElement.clientHeight
    //           || document.body.clientHeight;
    //         switch (this.preferredLayout) {
    //           case 'auto': {
    //             if (width > height) {
    //               this.resizeToLandscape(width, height, gsSize);
    //             } else {
    //               this.resizeToPortrait(width, height, gsSize);
    //             }
    //             break;
    //           }
    //           case 'landscape': {
    //             this.resizeToLandscape(width, height, gsSize);
    //             break;
    //           }
    //           case 'portrait': {
    //             this.resizeToPortrait(width, height, gsSize);
    //             break;
    //           }
    //         }
    //       }
    //     }
    //   }
    // }
    // onSliderDrag(event: DragEvent): void {
    //   if (this.landscapeOrientation.value && event && event.clientX > 64) {
    //     if (this.olga && this.appContainer) {
    //       let gsSize = window.innerWidth - event.clientX;
    //       const width = window.innerWidth
    //         || document.documentElement.clientWidth
    //         || document.body.clientWidth;
    //       const height = window.innerHeight
    //         || document.documentElement.clientHeight
    //         || document.body.clientHeight;
    //       switch (this.preferredLayout) {
    //         case 'auto': {
    //           if (width > height) {
    //             this.resizeToLandscape(width, height, gsSize);
    //           } else {
    //             this.resizeToPortrait(width, height, gsSize);
    //           }
    //           break;
    //         }
    //         case 'landscape': {
    //           this.resizeToLandscape(width, height, gsSize);
    //           break;
    //         }
    //         case 'portrait': {
    //           this.resizeToPortrait(width, height, gsSize);
    //           break;
    //         }
    //       }
    //     }
    //   } else {
    //     if (!this.landscapeOrientation && event && event.clientY > 64) {
    //       if (this.olga && this.appContainer) {
    //         let gsSize = window.innerHeight - event.clientY;
    //         const width = window.innerWidth
    //           || document.documentElement.clientWidth
    //           || document.body.clientWidth;
    //         const height = window.innerHeight
    //           || document.documentElement.clientHeight
    //           || document.body.clientHeight;
    //         switch (this.preferredLayout) {
    //           case 'auto': {
    //             if (width > height) {
    //               this.resizeToLandscape(width, height, gsSize);
    //             } else {
    //               this.resizeToPortrait(width, height, gsSize);
    //             }
    //             break;
    //           }
    //           case 'landscape': {
    //             this.resizeToLandscape(width, height, gsSize);
    //             break;
    //           }
    //           case 'portrait': {
    //             this.resizeToPortrait(width, height, gsSize);
    //             break;
    //           }
    //         }
    //       }
    //     }
    //   }
    // }
    resizeLayout(width, height) {
        const landscape = (width >= height);
        this.landscapeOrientation.next(landscape);
        switch (this.preferredLayout) {
            case 'auto': {
                if (landscape) {
                    this.rtl(width, height);
                }
                else {
                    this.rtp(width, height);
                }
                break;
            }
            case 'landscape': {
                this.rtl(width, height);
                break;
            }
            case 'portrait': {
                this.rtp(width, height);
                break;
            }
        }
    }
    shrink() {
        if (this.landscapeOrientation.value) {
            if (this.preferredRatioLandscape >= .2) {
                this.preferredRatioLandscape -= .02;
                this.resizeLayout(window.innerWidth, window.innerHeight);
            }
        }
        else {
            if (this.preferredRatioPortrait >= .3) {
                this.preferredRatioPortrait -= .02;
            }
        }
        this.resizeLayout(window.innerWidth, window.innerHeight);
    }
    grow() {
        if (this.landscapeOrientation.value) {
            if (this.preferredRatioLandscape <= .98) {
                this.preferredRatioLandscape += .02;
            }
        }
        else {
            if (this.preferredRatioPortrait <= .98) {
                this.preferredRatioPortrait += .02;
            }
        }
        this.resizeLayout(window.innerWidth, window.innerHeight);
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

/***/ "./src/app/services/themes.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/themes.service.ts ***!
  \********************************************/
/*! exports provided: ThemeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeService", function() { return ThemeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _canvas_chessboard_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../canvas-chessboard/types */ "./src/app/canvas-chessboard/types.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");





class ThemeService {
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
        // Board Colors
        this.boardBGDark = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('#81388f');
        this.boardBGLight = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('#e0fffb');
        this.boardLabelDark = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('#81388f');
        this.boardLabelLight = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('#e0fffb');
        this.boardPieceSet = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].piecesPath + 'merida/');
        // Menu
        this.meBackground = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('#353535');
        this.meTextColor = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('white');
        // Game Score Variables
        this.gsTextColor = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('black');
        this.gsBackground = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('transparent');
        this.gsListBackground = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('#353535');
        this.gsBorder = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('');
        this.gsTextSize = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('16px');
        this.gsTableItemWidth = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('70px');
        this.gsTablePlyWidth = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('48px');
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
        // Control Elements (Buttons, sliders, number wheels, toggle switches)
        this.csBackground = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('#81388f');
        this.csColor = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('#e0fffb');
        this.csFill = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('#00ffffff');
        this.csFill2 = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('#00ffffff');
        this.csAccent = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('#e25400');
        this.csAccent2 = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('#e25400');
        // Font Sizes
        this.gsFontSize = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](14);
        this.gsFontSizeHG = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](14);
        this.gsFontSizeAN = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](14);
        this.gsFontSizeVA = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](14);
        this.gsFontSizePC = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](14);
        this.hdrDataFontSize = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](14);
        this.hdrNameFontSize = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](14);
        this.hdrTitleFontSize = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](14);
        this.hdrVariantFontSize = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](14);
        this.hdrMatchDataFontSize = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](14);
        this.hdrResultFontSize = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](14);
        this.hdrRoundFontSize = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](14);
        this.propertyMap = new Map();
        // Game Score
        this.createColorMap();
    }
    updateColor(name, color) {
        if (this.propertyMap.has(name)) {
            const subject = this.propertyMap.get(name);
            if (subject) {
                subject.next(color);
            }
            document.documentElement.style.setProperty(name, color);
        }
    }
    boardTheme() {
        return new _canvas_chessboard_types__WEBPACK_IMPORTED_MODULE_2__["BoardTheme"](this.boardBGLight.value, this.boardBGDark.value, this.boardPieceSet.value);
    }
    createColorMap() {
        this.propertyMap.clear();
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
        this.propertyMap.set('--gsTableItemWidth', this.gsTableItemWidth);
        this.propertyMap.set('--gsTablePlyWidth', this.gsTablePlyWidth);
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
        this.propertyMap.set('--csFill', this.csFill);
        this.propertyMap.set('--csFill2', this.csFill2);
        this.propertyMap.set('--csAccent', this.csAccent);
        this.propertyMap.set('--csAccent2', this.csAccent2);
        // Font Sizes
        this.propertyMap.set('--gsFontSize', this.gsFontSize);
        this.propertyMap.set('--gsFontSizeAN', this.gsFontSizeAN);
        this.propertyMap.set('--gsFontSizeHG', this.gsFontSizeHG);
        this.propertyMap.set('--gsFontSizeVA', this.gsFontSizeVA);
        this.propertyMap.set('--gsFontSizePC', this.gsFontSizePC);
        this.propertyMap.set('--hdrDataFontSize', this.hdrDataFontSize);
        this.propertyMap.set('--hdrNameFontSize', this.hdrNameFontSize);
        this.propertyMap.set('--hdrTitleFontSize', this.hdrTitleFontSize);
        this.propertyMap.set('--hdrVariantFontSize', this.hdrVariantFontSize);
        this.propertyMap.set('--hdrMatchDataFontSize', this.hdrMatchDataFontSize);
        this.propertyMap.set('--hdrResultFontSize', this.hdrResultFontSize);
        this.propertyMap.set('--hdrRoundFontSize', this.hdrRoundFontSize);
        this.propertyMap.forEach((value, key) => {
            if (typeof value.value == "string") {
                value.subscribe((newVal) => {
                    document.documentElement.style.setProperty(key, newVal);
                });
            }
            else {
                value.subscribe((newVal) => {
                    document.documentElement.style.setProperty(key, newVal + "px");
                });
            }
        });
    }
    settings() {
        let settings = {};
        this.propertyMap.forEach((behavior, key) => {
            // @ts-ignore
            settings[key] = behavior.value;
        });
        return settings;
    }
    setSettings(settings) {
        for (let key in settings) {
            if (this.propertyMap.has(key)) {
                const subject = this.propertyMap.get(key);
                if (subject) {
                    // @ts-ignore
                    subject.next(settings[key]);
                }
            }
        }
        this.initializeColorPalette();
    }
    setDarkColorPalette() {
        // Add hardcoded chessgames dark color pallete
    }
    setLightColorPalette() {
        // Add hardcoded chessgames dark color pallete
    }
    initializeColorPalette() {
        this.propertyMap.forEach((value, key) => {
            if (typeof value.value == "string") {
                document.documentElement.style.setProperty(key, value.value);
            }
            else {
                document.documentElement.style.setProperty(key, value.value + "px");
            }
        });
    }
}
ThemeService.ɵfac = function ThemeService_Factory(t) { return new (t || ThemeService)(); };
ThemeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ThemeService, factory: ThemeService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ThemeService, [{
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
        }], gsTableItemWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], gsTablePlyWidth: [{
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
        }], propertyMap: [{
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
    production: false,
    imagesPath: 'Aria/assets/images/',
    playersPath: 'Aria/assets/images/players/',
    piecesPath: 'Aria/assets/images/pieces/',
    iconsPath: 'Aria/assets/images/icons/',
    flagsPath: 'Aria/assets/images/flags/'
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

/***/ "./src/test-pgn.ts":
/*!*************************!*\
  !*** ./src/test-pgn.ts ***!
  \*************************/
/*! exports provided: TestPGNData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestPGNData", function() { return TestPGNData; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");

const TestPGNData = '[Set "Testing Aria"]' +
    '[SetDate "October 8th - December 31st, 1990"]' +
    '[PlayerImages "' + _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].playersPath + '"]' +
    '[PlayerData "{"Garry Kasparov":{"born":"April 13th 1963","image":"Garry-Kasparov.png", "elo":2812}, "Anatoly Karpov":{"image":"Anatoly-Karpov.png", "elo":2617, "born":"May 23th 1951"}, \
    "Egemen Gulden":{"born":"2000", "image":"Egemen-Gulden.png", "elo":2118}, "Andrei Macovei":{"born":"2000", "image":"Andrei-Macovei.png", "elo":2453}, \
    "Robert James Fischer":{"born":"March 9th 1943", "image":"Bobby-Fischer-BW.png", "elo":2780}, "Hans Berliner":{"born":"Jan 27th 1929", "image":"Hans-Berliner.png"}, \
    "V Anand":{"born":"December 11th 1969", "image":"V-Anand.png", "elo":2753}, "T Radjabov":{"born":"March 12th 1987","image":"T-Radjabov.png","elo":2753}}"]' +
    '[GameData "[{"opening":"Spanish Game: Closed Variations. Keres Defense (C92)", "country":"us"},{"opening":"Formation: King\'s Indian Attack (A07)", "country":"tr"},{"opening":"Queen\'s Gambit Declined: Exchange Variation (D35)", "country":"us"}]"]' +
    '[Event "Kasparov - Karpov World Championship Match"]\n' +
    '[Site "New York, NY USA"]\n' +
    '[Date "1990.10.24"]\n' +
    '[EventDate "?"]\n' +
    '[Round "6"]\n' +
    '[Result "1/2-1/2"]\n' +
    '[White "Garry Kasparov"]\n' +
    '[Black "Anatoly Karpov"]\n' +
    '[ECO "C92"]\n' +
    '[WhiteElo "?"]\n' +
    '[BlackElo "?"]\n' +
    '[PlyCount "83"]\n' +
    '\n' +
    '1.e4 e5 2.Nf3 Nc6 3.Bb5 a6 4.Ba4 Nf6 5.O-O Be7 6.Re1 b5 7.Bb3 ' +
    'd6 8.c3 O-O 9.h3 Nd7 10.d4 Bf6 11.a4 Bb7 12.axb5 axb5 13.Rxa8 ' +
    'Qxa8 14.d5 Na5 15.Bc2 Nc4 16.b3 Ncb6 17.Na3 Ba6 18.Nh2 c6 ' +
    '19.dxc6 Qxc6 20.Bd2 Be7 21.Ng4 Ra8 22.Ne3 Nf6 23.Nf5 Bf8 ' +
    '24.Bg5 Nbd7 25.c4 bxc4 26.bxc4 Bxc4 27.Nxc4 Qxc4 28.Bb3 Qc3 ' +
    '29.Kh2 h6 30.Bxf6 Nxf6 31.Re3 Qc7 32.Rf3 Kh7 33.Ne3 Qe7 34.Nd5 ' +
    'Nxd5 35.Bxd5 Ra7 36.Qb3 f6 37.Qb8 g6 38.Rc3 h5 39.g4 Kh6 ' +
    '40.gxh5 Kxh5 41.Rc8 Bg7 42.Re8 1/2-1/2\n' +
    '\n' +
    '[Event "World Junior Championship"]\n' +
    '[Site "Gebze TUR"]\n' +
    '[Date "2018.09.05"]\n' +
    '[EventDate "2018.09.05"]\n' +
    '[Round "1.65"]\n' +
    '[Result "1-0"]\n' +
    '[White "Egemen Gulden"]\n' +
    '[Black "Andrei Macovei"]\n' +
    '[ECO "B25"]\n' +
    '[WhiteElo "2068"]\n' +
    '[BlackElo "2385"]\n' +
    '[PlyCount "62"]\n' +
    '\n' +
    '1. e4 g6 2. Nc3 Bg7 3. g3 c5 4. Bg2 Nc6 5. d3 d6 6. Nh3 e6 7. O-O Nge7 8. Be3\n' +
    'O-O 9. Qd2 Nd4 10. Nd1 b6 11. c3 Ndc6 12. Bh6 e5 13. Bxg7 Kxg7 14. Ne3 f6 15. f4\n' +
    'Rb8 16. Rf2 Bxh3 17. Bxh3 exf4 18. Rxf4 d5 19. Raf1 dxe4 20. Rxe4 f5 21. Rh4 Ng8\n' +
    '22. Nxf5+ gxf5 23. Bxf5 Rxf5 24. Rxf5 Rb7 25. Rg4+ Kh8 26. Qf4 Rb8 27. Rf7 Qxd3\n' +
    '28. Qg5 Qd1+ 29. Kg2 Qe2+ 30. Kh3 Qe5 31. Rxh7+ 1-0\n' +
    '\n' +
    '[Event "Western Open"]\n' +
    '[Site "Bay City, MI USA"]\n' +
    '[Date "1963.07.07"]\n' +
    '[EventDate "?"]\n' +
    '[Round "8"]\n' +
    '[Result "0-1"]\n' +
    '[White "Hans Berliner"]\n' +
    '[Black "Robert James Fischer"]\n' +
    '[ECO "D35"]\n' +
    '[WhiteElo "?"]\n' +
    '[BlackElo "?"]\n' +
    '[PlyCount "106"]\n' +
    '\n' +
    '1. d4 Nf6 2. c4 e6 3. Nc3 d5 4. cxd5 Nxd5 5. e4 Nxc3 6. bxc3\n' +
    'c5 7. Nf3 cxd4 8. cxd4 Bb4+ 9. Bd2 Bxd2+ 10. Qxd2 O-O 11. Bd3\n' +
    'b6 12. O-O Bb7 13. Rfd1 Nc6 14. Qb2 Qf6 15. Rac1 Rfd8 16. Bb5\n' +
    'Rac8 17. Ne5 Nxe5 18. dxe5 Qf4 19. Rxc8 Rxc8 20. Qd4 g5 21. f3\n' +
    'g4 22. Be2 gxf3 23. gxf3 Kh8 24. Kh1 Ba6 25. Qf2 Bxe2 26. Qxe2\n' +
    'Qxe5 27. Rg1 f5 28. Qd3 fxe4 29. fxe4 Rf8 30. Qc2 Qf6 31. Rg2\n' +
    'Qd4 32. h3 Qa1+ 33. Rg1 Qe5 34. Qe2 b5 35. Qc2 b4 36. Qd3 a5\n' +
    '37. Qc2 Qf6 38. Qc4 Qf3+ 39. Kh2 Rd8 40. Qc2 Qc3 41. Qxc3+\n' +
    'bxc3 42. Rc1 Rd3 43. Rb1 Kg7 44. Rb5 a4 45. Rc5 a3 46. Kg2 Re3\n' +
    '47. Rc4 Kf6 48. h4 Ke5 49. Kf2 Rh3 50. Kg2 Rd3 51. h5 Kf4\n' +
    '52. h6 Ke3 53. Rc7 Kd2 0-1\n' +
    '\n' +
    '[Event "FO-2009-0-00001"]\n' +
    '[Site "Lechenicher SchachServer"]\n' +
    '[Date "2009.06.13"]\n' +
    '[Round "?"]\n' +
    '[White "Walker, Jeffrey"]\n' +
    '[Black "Szabo, Eleonora"]\n' +
    '[Result "1-0"]\n' +
    '[WhiteElo "2000"]\n' +
    '[BlackElo "2200"]\n' +
    '[Variant "chess960"]\n' +
    '[SetUp "1"]\n' +
    '[FEN "qrbbknrn/pppppppp/8/8/8/8/PPPPPPPP/QRBBKNRN w GBgb - 0 1"]\n' +
    '[PlyCount "39"]\n' +
    '[EventDate "2009.06.11"]\n' +
    '\n' +
    '{STARTING POSITION: 773} 1. Ne3 e5 2. b4 Nhg6 3. Ng3 Ne6 4. c4 O-O 5. O-O b5 6.\n' +
    'cxb5 Rxb5 7. a4 Rb8 8. f3 d5 9. Nef5 c5 10. bxc5 Rxb1 11. Qxb1 Ba6 12. Ba3 Qc6\n' +
    '13. Qb2 Bc7 14. Nh5 Rb8 15. Qc3 d4 16. Qc1 Ba5 17. g3 Bb4 18. Bxb4 Rxb4 19. d3\n' +
    'Bb7 20. a5 1-0\n' +
    '\n' +
    '[Event "FO-2009-0-00001"]\n' +
    '[Site "Lechenicher SchachServer"]\n' +
    '[Date "2009.06.13"]\n' +
    '[Round "?"]\n' +
    '[White "Szabo, Eleonora"]\n' +
    '[Black "Walker, Jeffrey"]\n' +
    '[Result "0-1"]\n' +
    '[WhiteElo "2200"]\n' +
    '[BlackElo "2000"]\n' +
    '[Variant "chess960"]\n' +
    '[SetUp "1"]\n' +
    '[FEN "qrbbknrn/pppppppp/8/8/8/8/PPPPPPPP/QRBBKNRN w GBgb - 0 1"]\n' +
    '[PlyCount "32"]\n' +
    '[EventDate "2009.06.11"]\n' +
    '\n' +
    '{STARTING POSITION: 773} 1. Nhg3 Ne6 2. e4 Ng6 3. Ne3 b5 4. d3 O-O 5. b3 f6 6.\n' +
    'O-O c5 7. Bh5 Nef4 8. Bxg6 hxg6 9. a4 b4 10. Nc4 Ne6 11. Ne3 Bc7 12. Bb2 Nf4\n' +
    '13. Rbe1 Qc6 14. Ne2 Nxe2+ 15. Rxe2 g5 16. Nd5 Bd6 0-1\n' +
    '\n' +
    '[Event "FO-2009-0-00010"]\n' +
    '[Site "Lechenicher SchachServer"]\n' +
    '[Date "2009.06.18"]\n' +
    '[Round "?"]\n' +
    '[White "Tanti, Joseph"]\n' +
    '[Black "Dibley, Shane"]\n' +
    '[Result "0-1"]\n' +
    '[WhiteElo "2000"]\n' +
    '[BlackElo "2200"]\n' +
    '[Variant "chess960"]\n' +
    '[SetUp "1"]\n' +
    '[FEN "nbqnrkbr/pppppppp/8/8/8/8/PPPPPPPP/NBQNRKBR w HEhe - 0 1"]\n' +
    '[PlyCount "86"]\n' +
    '[EventDate "2009.06.13"]\n' +
    '\n' +
    '{STARTING POSITION:} 1. d4 c5 2. d5 c4 3. e4 e6 4. Qd2 exd5 5. Qxd5 Nb6 6. Qd2\n' +
    'h5 7. f3 h4 8. Qb4+ d6 9. Bxb6 axb6 10. Ne3 Nc6 11. Qxc4 f5 12. Nd5 Rh5 13. O-O\n' +
    'f4 14. Qd3 h3 15. Nxf4 hxg2 16. Nxh5 Ne5 17. Qd4 gxf1=Q+ 18. Rxf1 Qh3 19. Ng3\n' +
    'Bc4 20. Rf2 d5 21. c3 Nc6 22. Qe3 Bxg3 23. hxg3 O-O-O 24. f4 dxe4 25. Bc2 Bd3\n' +
    '26. Rg2 Ne5 27. fxe5 Rh8 28. Bxd3 Qh1+ 29. Kf2 Rf8+ 30. Qf4 Rxf4+ 31. gxf4 Qh4+\n' +
    '32. Kg1 exd3 33. Nb3 Qxf4 34. Nd2 Qxe5 35. Nf1 g5 36. Rd2 Qd5 37. a3 g4 38. Ne3\n' +
    'Qf3 39. Nf1 g3 40. Rg2 b5 41. Nd2 Qe3+ 42. Kf1 Kc7 43. b3 Qe5 0-1\n';
'\n';


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\projects\Aria\src\main.ts */"./src/main.ts");


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