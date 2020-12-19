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
/* harmony import */ var _olga_score_olga_score_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./olga-score/olga-score.component */ "./src/app/olga-score/olga-score.component.ts");
/* harmony import */ var _canvas_chessboard_canvas_chessboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./canvas-chessboard/canvas-chessboard.component */ "./src/app/canvas-chessboard/canvas-chessboard.component.ts");
/* harmony import */ var _olga_controls_olga_controls_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./olga-controls/olga-controls.component */ "./src/app/olga-controls/olga-controls.component.ts");
/* harmony import */ var _olga_header_olga_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./olga-header/olga-header.component */ "./src/app/olga-header/olga-header.component.ts");
/* harmony import */ var _test__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./test */ "./src/app/test.ts");
/* harmony import */ var _olga_status_olga_status_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./olga-status/olga-status.component */ "./src/app/olga-status/olga-status.component.ts");
/* harmony import */ var _services_olga_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/olga.service */ "./src/app/services/olga.service.ts");
/* harmony import */ var _services_themes_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/themes.service */ "./src/app/services/themes.service.ts");
/* harmony import */ var _services_layout_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/layout.service */ "./src/app/services/layout.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");












const _c0 = ["olgaContainer"];
const _c1 = ["pgnData"];
function Olga_olga_score_4_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "olga-score", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("contextmenu", function Olga_olga_score_4_Template_olga_score_contextmenu_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.ignoreEvent($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "olga-score-", ctx_r2.olga.UUID, "");
} }
const THEMES = 'themes';
const LAYOUT = 'layout';
const OLGA = 'olga';
var JSRPC;
(function (JSRPC) {
    JSRPC["setPGN"] = "setPGN";
    JSRPC["onSettings"] = "onSettings";
    JSRPC["getSettings"] = "getSettings";
    JSRPC["scaleTo"] = "scaleTo";
})(JSRPC || (JSRPC = {}));
class Olga {
    constructor(olga, themes, layout, route) {
        this.olga = olga;
        this.themes = themes;
        this.layout = layout;
        this.route = route;
        this.title = 'Olga PGN Viewer 2.0';
        this.resizeHandle = null;
        // @ts-ignore
        this.gameScoreWidth = 389;
        // @ts-ignore
        this.oldWidth = 0;
        // @ts-ignore
        this.keymap = new Map();
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
        const date = new Date();
        this.olga.UUID = 'OLGA-' + date.getTime().toString();
        console.log('ID: ' + this.olga.UUID);
        this.loadKeymap();
    }
    // tslint:disable-next-line: typedef
    ngAfterViewInit() {
        this.layout.boardElement = document.getElementById(this.olga.UUID + '-ccb');
        this.layout.controlsElement = document.getElementById('olga-controls-' + this.olga.UUID);
        this.layout.statusElement = document.getElementById('olga-status-' + this.olga.UUID);
        this.layout.headerElement = document.getElementById('olga-header-' + this.olga.UUID);
        this.layout.resizeElement = document.getElementById('resize-handle-' + this.olga.UUID);
        this.olga.attachOlga(this);
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
        this.olga.loadPGN(_test__WEBPACK_IMPORTED_MODULE_5__["TestPGNData"] + this.pgnData.nativeElement.value);
        window.onkeydown = this.keyEvent.bind(this);
        window.onmessage = this.onMessage.bind(this);
        let container = this.appContainer.nativeElement;
        container.style.width = '100%';
        container.style.height = '100%';
        this.olga.loadSettings();
        this.themes.initializeColorPalette();
        window.setTimeout(() => {
            this.layout.resizeLayout(container.clientWidth, container.clientHeight);
        }, 200);
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
                console.log('Bad JSON data - Window OLGA Message');
                console.log(error);
                return;
            }
            if (message_obj.type) {
                switch (message_obj.type) {
                    case JSRPC.setPGN: {
                        if (message_obj.pgn) {
                            const pgn = message_obj.pgn;
                            this.olga.loadPGN(pgn);
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
                        console.log('Invalid OLGA Message:\n');
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
        const olgaSettings = this.olga.settings();
        return { themes: themeSettings, layout: layoutSettings, olga: olgaSettings };
    }
    getJsonSettings() {
        const themeSettings = this.themes.settings();
        const layoutSettings = this.layout.settings();
        const olgaSettings = this.olga.settings();
        return JSON.stringify({ themes: themeSettings, layout: layoutSettings, olga: olgaSettings });
    }
    toggleAutoPlay() {
        if (this.olga) {
            this.olga.toggleAutoPlay();
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
        if (this.gameScoreComponent) {
            //this.resizeTouchEvent(event);
        }
    }
    ignoreEvent(event) {
        //console.log('Ignoring ' + event);
        event.preventDefault();
        event.stopPropagation();
    }
}
Olga.ɵfac = function Olga_Factory(t) { return new (t || Olga)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_olga_service__WEBPACK_IMPORTED_MODULE_7__["OlgaService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_themes_service__WEBPACK_IMPORTED_MODULE_8__["ThemeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_layout_service__WEBPACK_IMPORTED_MODULE_9__["LayoutService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"])); };
Olga.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Olga, selectors: [["olga"]], viewQuery: function Olga_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_olga_score_olga_score_component__WEBPACK_IMPORTED_MODULE_1__["GamescoreUxComponent"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_canvas_chessboard_canvas_chessboard_component__WEBPACK_IMPORTED_MODULE_2__["CanvasChessBoard"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_olga_controls_olga_controls_component__WEBPACK_IMPORTED_MODULE_3__["OlgaControlsComponent"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_olga_header_olga_header_component__WEBPACK_IMPORTED_MODULE_4__["OlgaHeaderComponent"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_olga_status_olga_status_component__WEBPACK_IMPORTED_MODULE_6__["OlgaStatusComponent"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.gameScoreComponent = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.canvasBoardComponent = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.appContainer = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.controlsComponent = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.headerComponent = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.statusComponent = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.pgnData = _t.first);
    } }, outputs: { gameScoreWidth: "gameScoreWidth", oldWidth: "oldWidth", keymap: "keymap" }, decls: 11, vars: 12, consts: [[1, "olga-container", 3, "id"], ["olgaContainer", ""], [3, "id", "boardID", "theme", "showLabels", "touchstart"], ["canvasBoardComponent", ""], [3, "id", "contextmenu", 4, "ngIf"], [3, "id"], ["value", "[Event \"GMA, Wijk aan Zee NED\"]\n[Site \"?\"]\n[Date \"2003.??.??\"]\n[Round \"1\"]\n[White \"V Anand\"]\n[Black \"T Radjabov\"]\n[Result \"1/2\"]\n[WhiteElo \"2750\"]\n[BlackElo \"2620\"]\n[ECO \"C12\"]\n[PlyCount \"55\"]\n[Annotator \"Hathaway\"]\n\n1. e4 e6\n{ Im not terribly familiar with the style of Radjabov, so I dont know if this is his usual opening. }\n2. d4 d5 3. Nc3 Nf6 (3...Bb4\n{ The Winawer Variation is probably best, though not as easy to play. }) 4. Bg5\n{ threatens e4-e5xf6 }\n (4. e5\n{ keeps pieces on the board and avoids ...dxe4 }) 4...Bb4 (4...Be7\n{ is more common and aims to trade dark-square bishops to ease Blacks cramp }) (4...dxe4\n{ aims to avoid any cramp by bringing pieces into alignment for trading, though White does get at least one very good piece (Ne4 or Bg5) and an easier time castling queen-side, to stir up king-side threats }\n 5. Nxe4 Be7  (\n{ or Rubinsteins }\n 5...Nbd7) ) 5. e5 h6 6. Bd2 (6. Bh4 g5 7. exf6 gxh4\n{ Black seems to equalize a little easier after this as he can win Pf6 in exchange for Ph4. }) 6...Bxc3 (6...Nfd7 7. Qg4\n{ and White isnt incurring any weaknesses, but is either gaining Bb4 for Nc3 or after ...Bb4-f8 Black is cramped again }\n  (7. Nb5 $5 Bxd2+ 8. Qxd2 a6 9. Na3) ) 7. bxc3 Ne4 8. Qg4\n{ White immediately takes aim at the backward Pg7 & Rh8 and usually Pf7 & Ke8. For the moment Bd2 serves to defend Pc3 and to prevent ...Qd8-g5 (offering a queen trade to end the pressure) . }\n (\n{ While }\n 8. h4\n{ is often useful in the French Defense with this pawn structure, I dont know that its been tried in this opening on this move. }) 8...g6 9. Bd3 (9. h4\n{ could take over for Bd2 in guarding g5 and preparing a later attack by f2-f4, h4-h5 or vice versa. It also would allow Rh1 to develop to build the direct frontal threats to Pf7 & Pg6. }\n 9...c5 10. Bd3 Nxd2 11. Kxd2 Qa5 12. dxc5 Qxc5 13. Ne2 Qxf2 $4 14. Raf1 Qc5 15. Bxg6 fxg6 16. Qxg6+)  (9. Qd1\n{ Fritz7; Odd! }) 9...Nxd2 10. Kxd2 c5 11. Nf3\n{ This has been considered the main line for many years, but I wonder if White can allow ...c5-c4 and not use more pawns to fight through Blacks pawns. }\n (11. dxc5\n{ is probably still wrong because of ...Qg5+ }) (11. h4\n{ still makes sense }) 11...Bd7 (11...c4 $6\n{ The problem with this is that however much it slows White, it also limits Blacks queen-side offensive possibilities. }) (\n{ Prematurely playing }\n 11...cxd4\n{ lets White straighten-out his pawns and Black has made no real progress. }\n 12. cxd4)  (11...Qa5 $5\n{ Fritz7: with the idea of ...cxd4 }) 12. dxc5 Qe7 13. Rab1 Bc6 14. Nd4 Nd7\n{ These last few moves have been quite unusual for a French Defense, but they make sense; Qe7 defends Pf7 while Bc6 defends Pb7 and Nd7 threatens Pc5 & Pe5. }\n15. Rhe1 (15. Nxc6 bxc6 16. Rb7 Qxc5 17. Qf4 g5 18. Qd4 Qa5 19. Rb2 c5 $11\n{ Fritz7 }) 15...Nxc5 16. Re3\n{ another way of getting the rook into position, in front of the king-side pawns, to threaten Blacks king-side pawns }\n16...h5 17. Qg3 O-O-O\n{ After this it would seem Blacks pieces can handle any threats White can generate. However, black might also have ideas of winning. How might he do that? Well, ...Be8, ...Kc8-b8-a8, ...Rd8-c8, ...Nc5-a4 and Pc3 is a target (slow I know) . Another idea is to keep Kd2 from ever escaping to safety by advancing ...h5-h4-h3 to break open the king-side and open the h-file for Blacks rooks. }\n (17...h4 $15\n{ Fritz7 }) (17...Nxd3 $15\n{ Fritz7 }) 18. Ke1 Qc7 (18...h4 19. Qg4 Rh5) 19. h4\n{ Anand aims to keep the king-side perfectly safe to ensure a draw. }\n (19. Qh4\n{ Fritz7 }) 19...Qa5 20. Kf1 (20. Nxc6 bxc6 21. Kf1 Kd7 20. Qf4 Ke8 $11\n{ Fritz7 }) 20...Rd7 (\n{ Premature is }\n 20...Qxa2 21. Ree1 Qa5  (21...Ba4 $11\n{ Fritz7 })  22. Ra1 Qxc3 23. Nxc6 bxc6 24. Ba6+ $18) 21. Qf4\n{ This general activity is perfect. It threatens Pf7, defends Nd4 and in some cases prepares for Qf4-b4 to attack Kc8. }\n (21. Ree1\n{ Fritz7 }) (21. Nxc6 bxc6 22. Ree1\n{ Fritz7 }) 21...Rhd8\n{ Black is probably wondering why he organized his pieces to only defend light squares. Only Qa5 and Nc5 can get to dark squares and that makes Whites task of coordinating much easier. }\n (21...Qxa2\n{ still premature }\n 22. Nxc6 bxc6 23. Qb4 Nb7 24. Ree1)  (21...Qxc3 $4 22. Nxc6 bxc6 23. Ba6+)  (21...Rc7 $14\n{ Fritz7 }) (21...Na4 $14\n{ Fritz7 }) 22. Kg1 (22. Nxc6 bxc6 23. Qb4 Qxb4 24. cxb4 d4 25. Ree1 Na4 $11\n{ Fritz7 }) 22...Nxd3 23. Rxd3 (23. cxd3 Qxc3 24. Rg3 Rc7 $14\n{ Fritz7 }) 23...Qc5 (23...Qxa2 24. Rdd1 Qc4 $11\n{ Fritz7 }) 24. Rb4 a5 $2 (24...Rc7\n{ Mark and Fritz7 agree! }) 25. Rb1 Rc7 26. Qc1 Be8 27. Nb3 (27. Qb2\n{ If White commits too quickly to the b-file then Black might actually create some play against Ph4 and on the c-file. }\n 27...Qe7  (27...a4 $11\n{ Fritz7 })  28. Nf3 Rc4\n{ possibly preparing ...b5 }) 27...Qb6 (27...Qc4 28. Nxa5 Qxh4 $14\n{ Fritz7 }) 28. Nd4\n{ Black created the weakness (Pa5) and cant quite defend it, so Anand forces a draw. }\n1/2-1/2", "type", "text", 1, "input-box", 2, "visibility", "hidden", "display", "none"], ["pgnData", "", "pgnBox", ""], [3, "id", "contextmenu"]], template: function Olga_Template(rf, ctx) { if (rf & 1) {
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "canvas-chessboard", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("touchstart", function Olga_Template_canvas_chessboard_touchstart_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3); return _r1.touchStart($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, Olga_olga_score_4_Template, 1, 1, "olga-score", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "olga-controls", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "olga-status", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "olga-header", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "", ctx.olga.UUID, "-olga-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "", ctx.olga.UUID, "-ccb");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("boardID", ctx.olga.UUID);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("theme", ctx.themes.boardTheme())("showLabels", ctx.olga.showLabels.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.layout.state <= 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "olga-controls-", ctx.olga.UUID, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "olga-status-", ctx.olga.UUID, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("olgaheader", ctx.layout.state, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "olga-header-", ctx.olga.UUID, "");
    } }, styles: ["@font-face {\n  font-family: \"Caveat\";\n  src: url('Caveat-Bold.woff2') format(\"woff2\"), url('Caveat-Bold.woff') format(\"woff\");\n  font-weight: bold;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"Caveat\";\n  src: url('Caveat-Regular.woff2') format(\"woff2\"), url('Caveat-Regular.woff') format(\"woff\");\n  font-weight: 600;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"FigurineSymbolT1\";\n  src: url('FigurineSymbolT1Bold.woff2') format(\"woff2\"), url('FigurineSymbolT1Bold.woff') format(\"woff\");\n  font-weight: bold;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"FigurineSymbolT1\";\n  src: url('FigurineSymbolT1.woff2') format(\"woff2\"), url('FigurineSymbolT1.woff') format(\"woff\");\n  font-weight: 600;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"SanctuaryPlayground\";\n  src: url('SanctuaryPlayground.woff2') format(\"woff2\"), url('SanctuaryPlayground.woff') format(\"woff\");\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"Amita\";\n  src: url('Amita-Regular.woff2') format(\"woff2\"), url('Amita-Regular.woff2') format(\"woff\");\n  font-style: normal;\n  font-display: swap;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n[_ngcontent-%COMP%]:root {\n  --bg-color: #f2f3f7;\n  --fg-color: #383a41;\n  --red: #e43030;\n  --green: #19a187;\n  --blue: #367bf0;\n  --dark-blue: #265ab1;\n  --maroon: #b8174c;\n  --purple: #8c42ab;\n}\n.olga-container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0px;\n  bottom: 0px;\n  left: 0px;\n  right: 0px;\n  width: 800px;\n  height: 600px;\n  overflow-y: hidden;\n}\n.fenbutton[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 80px;\n  position: absolute;\n  right: 10px;\n  bottom: 1%;\n}\ncookie-consent[_ngcontent-%COMP%] {\n  position: fixed;\n  left: 0px;\n  right: 0px;\n  bottom: 0px;\n  z-index: 1200;\n}\nolga-score[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 10;\n  height: auto;\n}\n.olgaheader[_ngcontent-%COMP%], .olgaheader4[_ngcontent-%COMP%], .olgaheader3[_ngcontent-%COMP%], .olgaheader2[_ngcontent-%COMP%], .olgaheader1[_ngcontent-%COMP%] {\n  background-image: url(/olga2/assets/images/header-background.svg);\n  position: absolute;\n  border: 1px solid black;\n  border-radius: 2px;\n  min-height: 240px;\n  overflow-y: auto;\n  margin-left: -4px;\n  scrollbar-width: thin;\n}\n.olgaheader1[_ngcontent-%COMP%] {\n  width: 100%;\n  left: 0px;\n  right: 0px;\n  top: 0px;\n}\n.olgaheader2[_ngcontent-%COMP%] {\n  width: 100%;\n  left: 0px;\n  right: 0px;\n  top: 0px;\n}\n.olgaheader3[_ngcontent-%COMP%] {\n  left: undefined;\n  right: 0px;\n  top: 0px;\n}\n.olgaheader4[_ngcontent-%COMP%] {\n  left: undefined;\n  right: 0px;\n  top: 0px;\n}\ncanvas-chessboard[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 1px;\n  left: 1px;\n  border: none;\n  border-radius: 1px;\n}\nolga-title[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 4px;\n  top: 0px;\n  height: 5%;\n  width: calc(50% -10px);\n  text-align: center;\n}\nolga-controls[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 1px;\n  bottom: 8%;\n  height: 99px;\n  background-color: var(--gsBackground);\n  border: black solid 1px;\n  border-radius: 2px;\n}\nolga-status[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 1px;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -o-user-select: none;\n  user-select: none;\n}\nolga-menu[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0px;\n  bottom: 0px;\n  left: 0px;\n  right: 0px;\n  background: #100c0ce3;\n  z-index: 1000;\n  visibility: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMuc2NzcyIsInNyYy9hc3NldHMvc2Nzcy9tb2R1bGVzL19mb250cy5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOEVBQUE7QUNBQTtFQUNJLHFCQUFBO0VBQ0EscUZBQUE7RUFFQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNDSjtBREVBO0VBQ0kscUJBQUE7RUFDQSwyRkFBQTtFQUVBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0RKO0FESUE7RUFDRSwrQkFBQTtFQUNBLHVHQUFBO0VBRUEsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDSEY7QURNQTtFQUNFLCtCQUFBO0VBQ0EsK0ZBQUE7RUFFQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNMRjtBRFFBO0VBQ0Usa0NBQUE7RUFDQSxxR0FBQTtFQUVBLGtCQUFBO0VBQ0Esa0JBQUE7QUNQRjtBRFdBO0VBQ0Usb0JBQUE7RUFDQSwwRkFBQTtFQUVBLGtCQUFBO0VBQ0Esa0JBQUE7QUNWRjtBRkRBLCtFQUFBO0FBR0Esa0ZBQUE7QUFLQSwrRUFBQTtBQVVBLCtFQUFBO0FBTUEsK0VBQUE7QUFNQSwrRUFBQTtBQU1BLGdGQUFBO0FBS0EsK0VBQUE7QUFLQSx5RUFBQTtBQUtBLHlFQUFBO0FBSUEsdUVBQUE7QUFRQSxxRUFBQTtBQXlCQTtFQUNFLG1CQUFBO0VBQ0EsbUJBQUE7RUFFQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FFMUVGO0FBNURBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQStERjtBQTVEQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQStERjtBQTVEQTtFQUNFLGVBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FBK0RGO0FBNURBO0VBQ0csa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQStESDtBQTNEQTtFQUNFLGlFQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7QUE4REY7QUEzREE7RUFFRSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0FBNkRGO0FBMURBO0VBRUUsV0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtBQTRERjtBQXpEQTtFQUVFLGVBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtBQTJERjtBQXhEQTtFQUVFLGVBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtBQTBERjtBQXZEQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUEwREY7QUF2REE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUEwREY7QUF2REE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLHFDRmxEYTtFRW1EYix1QkFBQTtFQUNBLGtCQUFBO0FBMERGO0FBdkRBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7RUFFQSxzQkFBQTtFQUVBLG9CQUFBO0VBQ0EsaUJBQUE7QUEwREY7QUF2REE7RUFDRSxlQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBMERGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuXG5AaW1wb3J0IFwiLi9hc3NldHMvc2Nzcy9tb2R1bGVzL19mb250cy5zY3NzXCI7XG4kZ2FtZXNjb3JlLWZhbWlseTogXCJGaWd1cmluZVN5bWJvbFQxXCI7XG4kZ2FtZXNjb3JlLWhpZ2hsaWdodDogIzU4NTg1OGZmO1xuJGdhbWVzY29yZS1mb3JlZ3JvdW5kOiB3aGl0ZTtcblxuJHJlZDogI2U0MzAzMDtcbiRncmVlbjogIzE5YTE4NztcbiRsaWdodC1ibHVlOiAjMDBmZmZmZmY7XG4kYmx1ZTogIzM2N2JmMDtcbiRkYXJrLWJsdWU6ICMyNjVhYjE7XG4kbWFyb29uOiAjYjgxNzRjO1xuJHB1cnBsZTogIzhjNDJhYjtcblxuLy8gTWFpbiBPTEdBIENvbG9yIEVsZW1lbnQgVmFyaWFibGVzXG4kdGV4dENvbG9yOiB2YXIoLS10ZXh0Q29sb3IpOyAvLyBNYWluIFRleHQgQ29sb3JcbiR0ZXh0Q29sb3JBdHRlbnRpb246IHZhcigtLXRleHRDb2xvckF0dGVudGlvbik7IC8vIEF0dGVudGlvbiB0ZXh0XG4kdGV4dENvbG9yUmVtb3ZlOiB2YXIoLS10ZXh0Q29sb3JSZW1vdmUpOyAvLyBSZW1vdmUvRGVsZXRlL0Nsb3NlXG4kdGV4dENvbG9yQWRkOiB2YXIoLS10ZXh0Q29sb3JBZGQpOyAvLyBBZGQvQ3JlYXRlL09wZW5cbiR0ZXh0Q29sb3JBY3RpdmU6IHZhcigtLXRleHRDb2xvckFjdGl2ZSk7IC8vIEFkZC9DcmVhdGUvT3BlblxuJGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQpOyAvLyBNYWluIGJhY2tncm91bmQgQ29sb3JcbiRiZ0NvbnRhaW5lcjogdmFyKC0tYmdDb250YWluZXIpOyAvLyBiYWNrZ3JvdW5kIG9mIENvbnRhaW5lcnNcbiRiZ01lbnU6IHZhcigtLWJnTWVudSk7IC8vIGJhY2tncm91bmQgb2YgTWVudXNcbiRiZ0l0ZW06IHZhcigtLWJnSXRlbSk7IC8vIGJhY2tncm91bmQgb2YgSXRlbXNcblxuLy8gQ29udGV4dCBNZW51XG4kYmdDb250ZXh0OiB2YXIoLS1iZ0NvbnRleHQpOyAvLyBiYWNrZ3JvdW5kIG9mIENvbnRleHQgTWVudVxuJHRleHRDb2xvckNvbnRleHQ6IHZhcigtLXRleHRDb2xvckNvbnRleHQpOyAvLyB0ZXh0IGNvbG9yIENvbnRleHQgTWVudVxuJGJvcmRlckNvbnRleHQ6IHZhcigtLWJvcmRlckNvbnRleHQpOyAvLyBib3JkZXIgQ29udGV4dCBNZW51XG4kb3ZlcmxheUNvbnRleHRCYWNrZ3JvdW5kOiB2YXIoXG4gIC0tb3ZlcmxheUNvbnRleHRCYWNrZ3JvdW5kXG4pOyAvLyBDb250ZXh0IE1lbnUgT3ZlcmxheSBiYWNrZ3JvdW5kIG1haW5cbiRvdmVybGF5Q29udGV4dEJhY2tncm91bmRHcmFkaWVudDogdmFyKFxuICAtLW92ZXJsYXlDb250ZXh0QmFja2dyb3VuZEdyYWRpZW50XG4pOyAvLyBDb250ZXh0IE1lbnUgYmFja2dyb3VuZCBncmFkaWVudFxuXG5cblxuLyoqKioqKioqKioqKioqKioqKiogTWVudSAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiRtZUJhY2tncm91bmQ6IHZhcigtLW1lQmFja2dyb3VuZCk7XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKiogTWVudSBDb250cm9scyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4kY3NGaWxsOiB2YXIoLS1jc0ZpbGwpO1xuJGNzQWNjZW50OiB2YXIoLS1jc0FjY2VudCk7XG4kY3NBY2NlbnQyOiB2YXIoLS1jc0FjY2VudDIpO1xuXG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIENvbnRhaW5lciBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuJGdzVGV4dENvbG9yOiB2YXIoLS1nc1RleHRDb2xvcik7IC8vIFRleHQgY29sb3IgZm9yIGdhbWUgc2NvcmVcbiRnc0JhY2tncm91bmQ6IHZhcigtLWdzQmFja2dyb3VuZCk7IC8vIGJhY2tncm91bmQgb2YgQ29udGFpbmVyc1xuJGdzTGlzdEJhY2tncm91bmQ6IHZhcigtLWdzTGlzdEJhY2tncm91bmQpOyAvLyBsaXN0IGJhY2tncm91bmQgb2YgZ2FtZSBzY29yZVxuJGdzQm9yZGVyOiB2YXIoLS1nc0JvcmRlcik7IC8vIGJhY2tncm91bmQgb2YgTWVudXNcbiRnc1RleHRTaXplOiB2YXIoLS1nc1RleHRTaXplKTsgLy8gYmFja2dyb3VuZCBvZiBNZW51c1xuJGdzRm9udEZhbWlseTogdmFyKC0tZ3NGb250RmFtaWx5KTsgLy8gc2NvcmUgZm9udFxuJGdzVGFibGVJdGVtV2lkdGg6IHZhcigtLWdzVGFibGVJdGVtV2lkdGgpOyAvLyB3aWR0aCBvZiBzY29yZSBpdGVtIGluIHRhYmxlIGxheW91dFxuJGdzVGFibGVQbHlXaWR0aDogdmFyKC0tZ3NUYWJsZVBseVdpZHRoKTsgLy8gd2lkdGggb2YgcGx5IGVsZW1lbnQgaW4gdGFibGUgbGF5b3V0XG5cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgQ29udGFpbmVyIFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4kZ3NUZXh0Q29sb3JNVzogdmFyKC0tZ3NUZXh0Q29sb3JNVyk7IC8vIFRleHQgY29sb3IgZm9yIGdhbWUgc2NvcmVcbiRnc0JhY2tncm91bmRNVzogdmFyKC0tZ3NCYWNrZ3JvdW5kTVcpOyAvLyBiYWNrZ3JvdW5kIG9mIENvbnRhaW5lcnNcbiRnc0JvcmRlck1XOiB2YXIoLS1nc0JvcmRlck1XKTsgLy8gYmFja2dyb3VuZCBvZiBNZW51c1xuJGdzVGV4dFNpemVNVzogdmFyKC0tZ3NUZXh0U2l6ZU1XKTsgLy8gYmFja2dyb3VuZCBvZiBNZW51c1xuXG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIENvbnRhaW5lciBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuJGdzVGV4dENvbG9yTUI6IHZhcigtLWdzVGV4dENvbG9yTUIpOyAvLyBUZXh0IGNvbG9yIGZvciBnYW1lIHNjb3JlXG4kZ3NCYWNrZ3JvdW5kTUI6IHZhcigtLWdzQmFja2dyb3VuZE1CKTsgLy8gYmFja2dyb3VuZCBvZiBDb250YWluZXJzXG4kZ3NCb3JkZXJNQjogdmFyKC0tZ3NCb3JkZXJNQik7IC8vIGJhY2tncm91bmQgb2YgTWVudXNcbiRnc1RleHRTaXplTUI6IHZhcigtLWdzVGV4dFNpemVNQik7IC8vIGJhY2tncm91bmQgb2YgTWVudXNcblxuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBIaWdobGlnaHQgVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiRnc1RleHRDb2xvckhHOiB2YXIoLS1nc1RleHRDb2xvckhHKTsgLy8gVGV4dCBjb2xvciBmb3IgaGlnaGxpZ2h0XG4kZ3NBbm5vdGF0aW9uQ29sb3JIRzogdmFyKC0tZ3NBbm5vdGF0aW9uQ29sb3JIRyk7IC8vIEFubm90YXRpb24vQ29tbWVudCBjb2xvciBmb3IgaGlnaGxpZ2h0XG4kZ3NCYWNrZ3JvdW5kSEc6IHZhcigtLWdzQmFja2dyb3VuZEhHKTsgLy8gYmFja2dyb3VuZCBmb3IgaGlnaGxpZ2h0XG4kZ3NCb3JkZXJIRzogdmFyKC0tZ3NCb3JkZXJIRyk7IC8vIGJvcmRlciBmb3IgaGlnaGxpZ2h0XG5cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgQW5ub3RhdGlvbiBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuJGdzVGV4dENvbG9yQU46IHZhcigtLWdzVGV4dENvbG9yQU4pOyAvLyBUZXh0IGNvbG9yIGZvciBoaWdobGlnaHRcbiRnc0JhY2tncm91bmRBTjogdmFyKC0tZ3NCYWNrZ3JvdW5kQU4pOyAvLyBiYWNrZ3JvdW5kIGZvciBoaWdobGlnaHRcbiRnc0JvcmRlckFOOiB2YXIoLS1nc0JvcmRlckFOKTsgLy8gYm9yZGVyIGZvciBoaWdobGlnaHRcblxuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBWYXJpYXRpb24gVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiRnc1RleHRDb2xvclZBOiB2YXIoLS1nc1RleHRDb2xvclZBKTsgLy8gVGV4dCBjb2xvciBmb3IgaGlnaGxpZ2h0XG4kZ3NCYWNrZ3JvdW5kVkE6IHZhcigtLWdzQmFja2dyb3VuZFZBKTsgLy8gYmFja2dyb3VuZCBmb3IgaGlnaGxpZ2h0XG4kZ3NCb3JkZXJWQTogdmFyKC0tZ3NCb3JkZXJWQSk7IC8vIGJvcmRlciBmb3IgaGlnaGxpZ2h0XG5cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgUGx5IFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4kZ3NUZXh0Q29sb3JQQzogdmFyKC0tZ3NUZXh0Q29sb3JQQyk7IC8vIFRleHQgY29sb3IgZm9yIGdhbWUgc2NvcmUgcGx5XG4kZ3NCYWNrZ3JvdW5kUEM6IHZhcigtLWdzQmFja2dyb3VuZFBDKTsgLy8gYmFja2dyb3VuZCBmb3IgZ2FtZSBzY29yZSBwbHlcbiRnc0JvcmRlclBDOiB2YXIoLS1nc0JvcmRlclBDKTsgLy8gYm9yZGVyIGZvciBnYW1lIHNjb3JlIHBseVxuXG4vKioqKioqKioqKioqKioqKioqKiogQ29udHJvbCBDb2xvcnMgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuJGNzQmFja2dyb3VuZDogdmFyKC0tY3NCYWNrZ3JvdW5kKTsgLy8gYmFja2dyb3VuZCBmb3IgY29udHJvbHNcbiRjc0NvbG9yOiB2YXIoLS1jc0NvbG9yKTsgLy8gY29udHJvbHMgY29sb3IgKGZvcmVncm91bmQpXG5cbi8qKioqKioqKioqKioqKioqKioqKiBCb2FyZCBDb2xvcnMgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuJGJvYXJkQkdEYXJrOiB2YXIoLS1ib2FyZEJHRGFyayk7IC8vIGJvYXJkIGRhcmsgdGlsZVxuJGJvYXJkQkdMaWdodDogdmFyKC0tYm9hcmRCR0xpZ2h0KTsgLy8gYm9hcmQgbGlnaHQgdGlsZVxuJGJvYXJkTGFiZWxMaWdodDogdmFyKC0tYm9hcmRMYWJlbExpZ2h0KTsgLy8gYm9hcmQgbGlnaHQgbGFiZWxcbiRib2FyZExhYmVsRGFyazogdmFyKC0tYm9hcmRMYWJlbERhcmspOyAvLyBib2FyZCBkYXJrIGxhYmVsXG5cblxuXG4vKioqKioqKioqKioqKioqKioqKiogRm9udCBTaXplcyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4kZ3NGb250U2l6ZTogdmFyKC0tZ3NGb250U2l6ZSk7IC8vIGJvYXJkIGRhcmsgdGlsZVxuJGdzRm9udFNpemVBTjogdmFyKC0tZ3NGb250U2l6ZUFOKTsgLy8gYm9hcmQgbGlnaHQgdGlsZVxuJGdzRm9udFNpemVIRzogdmFyKC0tZ3NGb250U2l6ZUhHKTsgLy8gYm9hcmQgbGlnaHQgbGFiZWxcbiRnc0ZvbnRTaXplVkE6IHZhcigtLWdzRm9udFNpemVWQSk7IC8vIGJvYXJkIGRhcmsgbGFiZWxcbiRnc0ZvbnRTaXplUEM6IHZhcigtLWdzRm9udFNpemVQQyk7IC8vIGJvYXJkIGRhcmsgbGFiZWxcbiRoZHJEYXRhRm9udFNpemU6IHZhcigtLWhkckRhdGFGb250U2l6ZSk7IC8vIHNpemUgb2YgcGxheWVyIHNob3djYXNlIGRhdGFcbiRoZHJOYW1lRm9udFNpemU6IHZhcigtLWhkck5hbWVGb250U2l6ZSk7IC8vIHNpemUgb2YgcGxheWVyIHNob3djYXNlIE5hbWVcbiRoZHJUaXRsZUZvbnRTaXplOiB2YXIoLS1oZHJUaXRsZUZvbnRTaXplKTsgLy8gc2l6ZSBvZiBwbGF5ZXIgc2hvd2Nhc2UgZGF0YVxuJGhkclZhcmlhbnRGb250U2l6ZTogdmFyKC0taGRyVmFyaWFudEZvbnRTaXplKTsgLy8gc2l6ZSBvZiBwbGF5ZXIgc2hvd2Nhc2UgTmFtZVxuJGhkck1hdGNoRGF0YUZvbnRTaXplOiB2YXIoLS1oZHJNYXRjaERhdGFGb250U2l6ZSk7IC8vIHNpemUgb2YgcGxheWVyIHNob3djYXNlIE5hbWVcbiRoZHJPcGVuaW5nRm9udFNpemU6IHZhcigtLWhkck1hdGNoRGF0YUZvbnRTaXplKTsgLy8gc2l6ZSBvZiBwbGF5ZXIgc2hvd2Nhc2UgTmFtZVxuJGhkclJlc3VsdEZvbnRTaXplOiB2YXIoLS1oZHJSZXN1bHRGb250U2l6ZSk7IC8vIHNpemUgb2YgcGxheWVyIHNob3djYXNlIE5hbWVcbiRoZHJSb3VuZEZvbnRTaXplOiB2YXIoLS1oZHJSb3VuZEZvbnRTaXplKTsgLy8gc2l6ZSBvZiBwbGF5ZXIgc2hvd2Nhc2UgTmFtZVxuXG4vLyBHZW5lcmFsIHN0dWZmXG4kdGV4dC1jb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XG4kYmctb3V0ZXI6IHZhcigtLWJnLW91dGVyKTtcbiRiZy1pbm5lcjogdmFyKC0tYmctaW5uZXIpO1xuXG4kYmctY29sb3I6ICNmMmYzZjc7XG4kZmctY29sb3I6ICMzODNhNDE7XG5cbiRnbG93LXNoYWRvdzogMCAwIDAuNWVtIHRyYW5zcGFyZW50aXplKCRibHVlLCAwLjMpO1xuXG46cm9vdCB7XG4gIC0tYmctY29sb3I6ICN7JGJnLWNvbG9yfTtcbiAgLS1mZy1jb2xvcjogI3skZmctY29sb3J9O1xuXG4gIC0tcmVkOiAjeyRyZWR9O1xuICAtLWdyZWVuOiAjeyRncmVlbn07XG4gIC0tYmx1ZTogI3skYmx1ZX07XG4gIC0tZGFyay1ibHVlOiAjeyRkYXJrLWJsdWV9O1xuICAtLW1hcm9vbjogI3skbWFyb29ufTtcbiAgLS1wdXJwbGU6ICN7JHB1cnBsZX07XG59XG5cbi8vIDo6LW1vei1mb2N1cy1pbm5lcixcbi8vIDotbW96LWZvY3VzcmluZyB7XG4vLyAgIGJvcmRlcjogMDtcbi8vICAgY29sb3I6IHRyYW5zcGFyZW50O1xuLy8gICB0ZXh0LXNoYWRvdzogMCAwIDAgJGZnLWNvbG9yO1xuLy8gfVxuXG4vLyA6OnNlbGVjdGlvbixcbi8vIDo6LW1vei1zZWxlY3Rpb24ge1xuLy8gICBjb2xvcjogd2hpdGU7XG4vLyAgIGJhY2tncm91bmQ6IGJsYWNrO1xuLy8gfVxuXG4vLyAqIHtcbi8vICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbi8vICAgb3V0bGluZTogbm9uZTtcbi8vICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4vLyAgIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcbi8vICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbi8vICAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lO1xuLy8gICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuLy8gICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4vLyAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbi8vICAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuLy8gICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCkgIWltcG9ydGFudDtcbi8vICAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xuLy8gICBjdXJzb3I6IGRlZmF1bHQ7XG4vLyAgIGxldHRlci1zcGFjaW5nOiAwO1xuLy8gfVxuXG4vLyAuc2VsZWN0YWJsZSxcbi8vIC5zZWxlY3RhYmxlICoge1xuLy8gICBjdXJzb3I6IGF1dG87XG4vLyAgIHVzZXItc2VsZWN0OiB0ZXh0O1xuLy8gICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IHRleHQ7XG4vLyAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IHRleHQ7XG4vLyAgIC1raHRtbC11c2VyLXNlbGVjdDogdGV4dDtcbi8vICAgLW1vei11c2VyLXNlbGVjdDogdGV4dDtcbi8vICAgLW1zLXVzZXItc2VsZWN0OiB0ZXh0O1xuLy8gfVxuXG4vLyBodG1sLFxuLy8gYm9keSB7XG4vLyAgIGJhY2tncm91bmQtY29sb3I6ICRiZy1jb2xvcjtcbi8vICAgY29sb3I6ICRmZy1jb2xvcjtcbi8vICAgbWFyZ2luOiAwO1xuLy8gICBwYWRkaW5nOiAwO1xuLy8gICBmb250LXNpemU6IDEwcHQ7XG4vLyAgIGhlaWdodDogMTAwJTtcbi8vICAgb3ZlcmZsb3c6IGF1dG87XG4vLyB9XG5cbi8vIC53aXRoLXNoYWRvdyB7XG4vLyAgIGJveC1zaGFkb3c6IDZweCA2cHggMTBweCB0cmFuc3BhcmVudGl6ZShibGFjaywgMC45KSwgLTZweCAtNnB4IDEwcHggd2hpdGU7XG4vLyB9XG5cbi8vIC5vdXRzZXQge1xuLy8gICBAZXh0ZW5kIC53aXRoLXNoYWRvdztcblxuLy8gICBib3JkZXItcmFkaXVzOiAxMHB4O1xuLy8gICBiYWNrZ3JvdW5kOiAkYmctY29sb3I7XG4vLyB9XG5cbi8vIC5pbnNldCB7XG4vLyAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4vLyAgIGJveC1zaGFkb3c6IDAgMCB0cmFuc3BhcmVudCwgMCAwIHRyYW5zcGFyZW50LFxuLy8gICAgIGluc2V0IDNweCAzcHggNXB4IHRyYW5zcGFyZW50aXplKGJsYWNrLCAwLjkpLCBpbnNldCAtM3B4IC0zcHggNXB4IHdoaXRlO1xuLy8gICBiYWNrZ3JvdW5kOiBsaWdodGVuKCRiZy1jb2xvciwgMiUpO1xuLy8gfVxuXG4vLyAucGFwZXIge1xuLy8gICBAZXh0ZW5kIC5vdXRzZXQ7XG4vLyAgIHBhZGRpbmc6IDEwcHggMjBweCAyMHB4O1xuLy8gICBtYXJnaW4tdG9wOiAyMHB4O1xuLy8gICBtaW4taGVpZ2h0OiAxMDBweDtcbi8vICAgZm9udC1zaXplOiAxLjJlbTtcbi8vICAgYmFja2dyb3VuZDogJGJnLWNvbG9yO1xuLy8gfVxuXG4vLyBzZWN0aW9uLFxuLy8gYXJ0aWNsZSxcbi8vIC5zZWN0aW9uLFxuLy8gLmFydGljbGUsXG4vLyAucGFwZXIge1xuLy8gICBsaW5lLWhlaWdodDogMmVtO1xuLy8gICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4vLyAgIHdvcmQtYnJlYWs6IG5vcm1hbDtcbi8vICAgbGluZS1oZWlnaHQ6IDJlbTtcbi8vIH1cblxuLy8gaW5wdXRbdHlwZT1cInRleHRcIl0sXG4vLyBpbnB1dFt0eXBlPVwic2VhcmNoXCJdLFxuLy8gaW5wdXRbdHlwZT1cInRlbFwiXSxcbi8vIGlucHV0W3R5cGU9XCJ1cmxcIl0sXG4vLyBpbnB1dFt0eXBlPVwiZW1haWxcIl0sXG4vLyBpbnB1dFt0eXBlPVwicGFzc3dvcmRcIl0sXG4vLyBpbnB1dFt0eXBlPVwiZGF0ZVwiXSxcbi8vIGlucHV0W3R5cGU9XCJtb250aFwiXSxcbi8vIGlucHV0W3R5cGU9XCJ3ZWVrXCJdLFxuLy8gaW5wdXRbdHlwZT1cInRpbWVcIl0sXG4vLyBpbnB1dFt0eXBlPVwibnVtYmVyXCJdLFxuLy8gaW5wdXRbdHlwZT1cImNvbG9yXCJdLFxuLy8gc2VsZWN0LFxuLy8gdGV4dGFyZWEge1xuLy8gICBib3JkZXI6IDA7XG4vLyAgIGJhY2tncm91bmQ6ICRiZy1jb2xvcjtcbi8vICAgY29sb3I6ICRmZy1jb2xvcjtcbi8vICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbi8vICAgcGFkZGluZzogMCAxLjI1ZW07XG4vLyAgIGxpbmUtaGVpZ2h0OiAxLjI1ZW07XG4vLyAgIGhlaWdodDogMy41ZW07XG4vLyAgIG1hcmdpbjogMTBweCAwO1xuLy8gICBmb250LXNpemU6IDEuMXJlbTtcbi8vICAgY3Vyc29yOiB0ZXh0O1xuLy8gICB1c2VyLXNlbGVjdDogdGV4dDtcbi8vICAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiB0ZXh0O1xuLy8gICAtd2Via2l0LXVzZXItc2VsZWN0OiB0ZXh0O1xuLy8gICAta2h0bWwtdXNlci1zZWxlY3Q6IHRleHQ7XG4vLyAgIC1tb3otdXNlci1zZWxlY3Q6IHRleHQ7XG4vLyAgIC1tcy11c2VyLXNlbGVjdDogdGV4dDtcbi8vICAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjJzO1xuXG4vLyAgICY6bm90KHNlbGVjdCkge1xuLy8gICAgIEBleHRlbmQgLmluc2V0O1xuXG4vLyAgICAgJjpmb2N1cyB7XG4vLyAgICAgICBAZXh0ZW5kIC5vdXRzZXQ7XG4vLyAgICAgfVxuLy8gICB9XG4vLyB9XG5cbi8vIHRleHRhcmVhIHtcbi8vICAgaGVpZ2h0OiAzNTBweDtcbi8vICAgcGFkZGluZzogMS4yNWVtO1xuLy8gfVxuXG4vLyBzZWxlY3Qge1xuLy8gICBAZXh0ZW5kIC5vdXRzZXQ7XG5cbi8vICAgY3Vyc29yOiBwb2ludGVyO1xuLy8gICBiYWNrZ3JvdW5kOiB1cmwoZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCMlpYSnphVzl1UFNJeExqRWlJSFpwWlhkQ2IzZzlJakFnTUNBeE9TQXhPU0lnZUcxc2JuTTlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5Mekl3TURBdmMzWm5JajQ4WnlCMGNtRnVjMlp2Y20wOUltMWhkSEpwZUNndU1ETTBJREFnTUNBdU1ETTBJQzAyTGpnZ01TNDNaUzAxS1NJZ2MzUjViR1U5SW1acGJHdzZJemRpTjJVNFl5SStQSEJoZEdnZ1pEMGliVFE0TUNBek5EUXRNakV4TFRJeE1tTXRNVFl0TVRZdE5ERXRNVFl0TlRjZ01DMHhOaUF4TmkweE5pQTBNaUF3SURVM2JESXpPQ0F5TXpsak9DNDBJRGd1TlNBeU1DQXhNaUF6TVNBeE1pQXhNU0F3TGpVMklESXlMVE11TWlBek1TMHhNbXd5TXpndE1qTTVZekUyTFRFMklERTJMVFF5SURBdE5UZHpMVFF4TFRFMkxUVTNJREI2SWlCemRIbHNaVDBpWm1sc2JEb2pOMkkzWlRoaklpOCtQQzluUGp3dmMzWm5QZ289KVxuLy8gICAgIG5vLXJlcGVhdCByaWdodCAxZW0gY2VudGVyO1xuLy8gICBiYWNrZ3JvdW5kLXNpemU6IDEuMmVtO1xuLy8gICBwYWRkaW5nLXJpZ2h0OiAzZW07XG4vLyB9XG5cbi8vIGlucHV0OjpwbGFjZWhvbGRlcixcbi8vIHRleHRhcmVhOjpwbGFjZWhvbGRlciB7XG4vLyAgIG9wYWNpdHk6IDE7XG4vLyAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycztcbi8vICAgY29sb3I6IGluaGVyaXQ7XG4vLyB9XG5cbi8vIGlucHV0OmZvY3VzOjpwbGFjZWhvbGRlcixcbi8vIHRleHRhcmVhOmZvY3VzOjpwbGFjZWhvbGRlciB7XG4vLyAgIG9wYWNpdHk6IDAuMjtcbi8vIH1cblxuLy8gaW5wdXQ6LW1zLWlucHV0LXBsYWNlaG9sZGVyLFxuLy8gdGV4dGFyZWE6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbi8vICAgb3BhY2l0eTogMTtcbi8vICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzO1xuLy8gICBjb2xvcjogaW5oZXJpdDtcbi8vIH1cblxuLy8gaW5wdXQ6Zm9jdXM6LW1zLWlucHV0LXBsYWNlaG9sZGVyLFxuLy8gdGV4dGFyZWE6Zm9jdXM6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbi8vICAgb3BhY2l0eTogMC4yO1xuLy8gfVxuXG4vLyBpbnB1dFt0eXBlPVwic2VhcmNoXCJdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uLFxuLy8gaW5wdXRbdHlwZT1cInNlYXJjaFwiXTo6LXdlYmtpdC1zZWFyY2gtY2FuY2VsLWJ1dHRvbixcbi8vIGlucHV0W3R5cGU9XCJzZWFyY2hcIl06Oi13ZWJraXQtc2VhcmNoLXJlc3VsdHMtYnV0dG9uLFxuLy8gaW5wdXRbdHlwZT1cInNlYXJjaFwiXTo6LXdlYmtpdC1zZWFyY2gtcmVzdWx0cy1kZWNvcmF0aW9uIHtcbi8vICAgZGlzcGxheTogbm9uZTtcbi8vIH1cblxuLy8gYnV0dG9uLFxuLy8gaW5wdXRbdHlwZT1cImJ1dHRvblwiXSxcbi8vIGlucHV0W3R5cGU9XCJzdWJtaXRcIl0sXG4vLyBpbnB1dFt0eXBlPVwicmVzZXRcIl0ge1xuLy8gICBAZXh0ZW5kIC5vdXRzZXQ7XG5cbi8vICAgYm9yZGVyOiAwO1xuLy8gICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbi8vICAgcGFkZGluZzogMTBweCAwO1xuLy8gICB3aWR0aDogOGVtO1xuLy8gICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4vLyAgIGN1cnNvcjogcG9pbnRlcjtcbi8vICAgY29sb3I6IGluaGVyaXQ7XG4vLyAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuLy8gICB0cmFuc2l0aW9uLXByb3BlcnR5OiBiYWNrZ3JvdW5kLWNvbG9yLCBib3gtc2hhZG93O1xuLy8gICB0cmFuc2l0aW9uLWRlbGF5OiAwLjJzO1xuLy8gICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjJzO1xuXG4vLyAgICYuYWN0aXZlLFxuLy8gICAmOmFjdGl2ZSB7XG4vLyAgICAgQGV4dGVuZCAuaW5zZXQ7XG5cbi8vICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwcztcbi8vICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjFzO1xuLy8gICB9XG5cbi8vICAgQGVhY2ggJG5hbWUsICRjb2xvciBpbiAoXCJyZWRcIjogJHJlZCwgXCJncmVlblwiOiAkZ3JlZW4sIFwiYmx1ZVwiOiAkYmx1ZSkge1xuLy8gICAgIEBhdC1yb290IC4jeyRuYW1lfS1idXR0b24sXG4vLyAgICAgICAmLiN7JG5hbWV9LWJ1dHRvbiB7XG4vLyAgICAgICBAZXh0ZW5kIGJ1dHRvbjtcblxuLy8gICAgICAgJF9iZy1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgJGNvbG9yIDMwJSwgbGlnaHRlbigkY29sb3IsIDYlKSA4MCUpO1xuXG4vLyAgICAgICBjb2xvcjogd2hpdGU7XG4vLyAgICAgICBmb250LXdlaWdodDogYm9sZDtcbi8vICAgICAgIHRleHQtc2hhZG93OiAwIDAuMWVtIDAuMWVtIHRyYW5zcGFyZW50aXplKGJsYWNrLCAwLjMpO1xuLy8gICAgICAgYmFja2dyb3VuZDogJF9iZy1pbWFnZTtcbi8vICAgICAgIGJveC1zaGFkb3c6IDAgMCAwLjVlbSB0cmFuc3BhcmVudGl6ZSgkY29sb3IsIDAuMyksIDAgMCB0cmFuc3BhcmVudCxcbi8vICAgICAgICAgaW5zZXQgMCAtNXB4IDAgdHJhbnNwYXJlbnRpemUoYmxhY2ssIDAuOTUpLFxuLy8gICAgICAgICBpbnNldCAwIDJweCAwIHRyYW5zcGFyZW50aXplKHdoaXRlLCAwLjgpO1xuLy8gICAgICAgYm9yZGVyLXJhZGl1czogNnB4IDZweCA4cHggOHB4O1xuLy8gICAgICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYm94LXNoYWRvdywgYm9yZGVyLXJhZGl1cztcblxuLy8gICAgICAgJi5hY3RpdmUsXG4vLyAgICAgICAmOmFjdGl2ZSB7XG4vLyAgICAgICAgIGJhY2tncm91bmQ6ICRfYmctaW1hZ2U7XG4vLyAgICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbi8vICAgICAgICAgYm94LXNoYWRvdzogMCAwIHRyYW5zcGFyZW50LCAwIDAgdHJhbnNwYXJlbnQsXG4vLyAgICAgICAgICAgaW5zZXQgMCAycHggNXB4IDJweCB0cmFuc3BhcmVudGl6ZShibGFjaywgMC44KTtcbi8vICAgICAgIH1cbi8vICAgICB9XG4vLyAgIH1cbi8vIH1cblxuLy8gbGFiZWwge1xuLy8gICAmLFxuLy8gICAmICoge1xuLy8gICAgIGN1cnNvcjogcG9pbnRlcjtcbi8vICAgfVxuXG4vLyAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbi8vICAgcGFkZGluZzogMC41NmVtIDA7XG4vLyB9XG5cbi8vIGEge1xuLy8gICAmLFxuLy8gICAmOmxpbmssXG4vLyAgICY6dmlzaXRlZCxcbi8vICAgJjpob3ZlciAmOmFjdGl2ZSB7XG4vLyAgICAgJixcbi8vICAgICAmICoge1xuLy8gICAgICAgY3Vyc29yOiBwb2ludGVyO1xuLy8gICAgIH1cblxuLy8gICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuLy8gICAgIGNvbG9yOiAkYmx1ZTtcbi8vICAgICBmb250LXdlaWdodDogYm9sZDtcbi8vICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4vLyAgIH1cbi8vIH1cblxuLy8gaDEsXG4vLyBoMixcbi8vIGgzLFxuLy8gaDQsXG4vLyBoNSxcbi8vIGg2IHtcbi8vICAgbGluZS1oZWlnaHQ6IDEuNWVtO1xuLy8gfVxuXG4vLyBoMSB7XG4vLyAgIGZvbnQtc2l6ZTogNGVtO1xuLy8gICBmb250LXdlaWdodDogbGlnaHRlcjtcbi8vICAgbWFyZ2luOiAwLjdlbSAwO1xuLy8gfVxuXG4vLyBoMiB7XG4vLyAgIGZvbnQtc2l6ZTogM2VtO1xuLy8gICBmb250LXdlaWdodDogbGlnaHRlcjtcbi8vICAgbWFyZ2luOiAwLjhlbSAwO1xuLy8gfVxuXG4vLyBoMyB7XG4vLyAgIGZvbnQtc2l6ZTogMi41ZW07XG4vLyAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuLy8gICBtYXJnaW46IDAuOWVtIDA7XG4vLyB9XG5cbi8vIGg0IHtcbi8vICAgZm9udC1zaXplOiAyZW07XG4vLyAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuLy8gICBtYXJnaW46IDFlbSAwO1xuLy8gfVxuXG4vLyBoNSB7XG4vLyAgIG1hcmdpbjogMC41ZW0gMDtcbi8vICAgZm9udC1zaXplOiAxLjJlbTtcbi8vICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbi8vIH1cblxuLy8gaDYge1xuLy8gICBtYXJnaW46IDFlbSAwIDFlbSAxLjRlbTtcbi8vICAgZm9udC1zaXplOiAxZW07XG4vLyAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuLy8gfVxuXG4vLyBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0sXG4vLyBpbnB1dFt0eXBlPVwicmFkaW9cIl0ge1xuLy8gICAkX2JvcmRlci13aWR0aDogMC4xNWVtO1xuLy8gICAkX2JveC1zaGFkb3c6IDJweCAycHggM3B4IHRyYW5zcGFyZW50aXplKGJsYWNrLCAwLjgpLCAtMnB4IC0ycHggM3B4IHdoaXRlLFxuLy8gICAgIGluc2V0IDFweCAxcHggMnB4IHRyYW5zcGFyZW50aXplKGJsYWNrLCAwLjgpLCBpbnNldCAtMXB4IC0xcHggMnB4IHdoaXRlO1xuLy8gICBmb250LXNpemU6IDFlbTtcbi8vICAgY3Vyc29yOiBwb2ludGVyO1xuLy8gICBoZWlnaHQ6IDEuMmVtO1xuLy8gICB3aWR0aDogMS4yZW07XG4vLyAgIG1hcmdpbjogMCAwLjNlbTtcbi8vICAgYm94LXNoYWRvdzogJF9ib3gtc2hhZG93O1xuLy8gICBib3JkZXI6ICRfYm9yZGVyLXdpZHRoIHNvbGlkICRiZy1jb2xvcjtcbi8vICAgdmVydGljYWwtYWxpZ246IHRleHQtYm90dG9tO1xuLy8gICB0cmFuc2l0aW9uLXByb3BlcnR5OiBiYWNrZ3JvdW5kLCBib3gtc2hhZG93O1xuLy8gICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjJzO1xuXG4vLyAgICY6YWN0aXZlIHtcbi8vICAgICBib3gtc2hhZG93OiAkX2JveC1zaGFkb3csIGluc2V0IDAgMC4xZW0gMC4yNWVtIHRyYW5zcGFyZW50aXplKGJsYWNrLCAwLjgpO1xuLy8gICB9XG5cbi8vICAgJjpjaGVja2VkIHtcbi8vICAgICBib3JkZXItd2lkdGg6IDAuMWVtO1xuLy8gICAgIGJvcmRlci1jb2xvcjogZGFya2VuKCRibHVlLCAxMCUpO1xuLy8gICAgIGJhY2tncm91bmQtY29sb3I6ICRibHVlO1xuLy8gICB9XG4vLyB9XG5cbi8vIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSB7XG4vLyAgIGJvcmRlci1yYWRpdXM6IDI1JTtcblxuLy8gICAmOmNoZWNrZWQge1xuLy8gICAgIGJveC1zaGFkb3c6ICRnbG93LXNoYWRvdywgaW5zZXQgMCAtMC4xZW0gMCB0cmFuc3BhcmVudGl6ZShibGFjaywgMC44KSxcbi8vICAgICAgIGluc2V0IDAgMC4xZW0gMC4xZW0gdHJhbnNwYXJlbnRpemUod2hpdGUsIDAuOCk7XG4vLyAgIH1cbi8vIH1cblxuLy8gaW5wdXRbdHlwZT1cInJhZGlvXCJdIHtcbi8vICAgYm9yZGVyLXJhZGl1czogMTAwJTtcblxuLy8gICAmOmNoZWNrZWQge1xuLy8gICAgIGJveC1zaGFkb3c6ICRnbG93LXNoYWRvdztcbi8vICAgICBib3gtc2hhZG93OiAkZ2xvdy1zaGFkb3csIGluc2V0IDAgMC4xMmVtIDAuMWVtIHRyYW5zcGFyZW50aXplKHdoaXRlLCAwLjc1KTtcbi8vICAgICBib3JkZXItYm90dG9tLXdpZHRoOiAwLjE1ZW07XG4vLyAgIH1cbi8vIH1cblxuLy8gLmNoZWNrdGV4dCB7XG4vLyAgIHdpZHRoOiBhdXRvO1xuLy8gICBtYXJnaW46IDAuNWVtO1xuXG4vLyAgIGlucHV0IHtcbi8vICAgICBkaXNwbGF5OiBub25lO1xuXG4vLyAgICAgKyBzcGFuIHtcbi8vICAgICAgIEBleHRlbmQgYnV0dG9uO1xuXG4vLyAgICAgICBmb250LXdlaWdodDogYm9sZDtcbi8vICAgICAgIHBhZGRpbmc6IDFlbTtcbi8vICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDBzO1xuLy8gICAgIH1cblxuLy8gICAgICY6Y2hlY2tlZCArIHNwYW4ge1xuLy8gICAgICAgQGV4dGVuZCAuYmx1ZS1idXR0b247XG5cbi8vICAgICAgIHBhZGRpbmc6IDFlbTtcbi8vICAgICB9XG4vLyAgIH1cbi8vIH1cblxuLy8gLnN3aXRjaCB7XG4vLyAgICRfaGVpZ2h0OiAycmVtO1xuLy8gICAkX3dpZHRoOiA4cmVtO1xuLy8gICAkX2hhbmRsZS13aWR0aDogJF9oZWlnaHQ7XG4vLyAgICRfaGFuZGxlLXRyYW5zbGF0aW9uOiAkX3dpZHRoIC0gJF9oYW5kbGUtd2lkdGg7XG5cbi8vICAgaGVpZ2h0OiAkX2hlaWdodDtcbi8vICAgd2lkdGg6ICRfd2lkdGg7XG4vLyAgIHBhZGRpbmc6IDA7XG4vLyAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuLy8gICBpbnB1dCB7XG4vLyAgICAgZGlzcGxheTogbm9uZTtcblxuLy8gICAgICsgZGl2IHtcbi8vICAgICAgIGhlaWdodDogMTAwJTtcbi8vICAgICAgIHdpZHRoOiAxMDAlO1xuLy8gICAgICAgYm9yZGVyLXJhZGl1czogOTk5cHg7XG4vLyAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbi8vICAgICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGJveC1zaGFkb3csIGJhY2tncm91bmQtY29sb3I7XG4vLyAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjJzO1xuLy8gICAgICAgdHJhbnNpdGlvbi1kZWxheTogMC4ycztcbi8vICAgICAgIGJveC1zaGFkb3c6IDNweCAzcHggMnB4IC0ycHggdHJhbnNwYXJlbnRpemUoYmxhY2ssIDAuOSksXG4vLyAgICAgICAgIGluc2V0IDJweCAycHggMnB4IDFweCB0cmFuc3BhcmVudGl6ZShibGFjaywgMC45KSxcbi8vICAgICAgICAgaW5zZXQgLTJweCAtMnB4IDFweCB3aGl0ZTtcblxuLy8gICAgICAgJjo6YmVmb3JlIHtcbi8vICAgICAgICAgY29udGVudDogXCJcIjtcbi8vICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4vLyAgICAgICAgIGhlaWdodDogY2FsYygjeyRfaGFuZGxlLXdpZHRofSArIDRweCk7XG4vLyAgICAgICAgIHdpZHRoOiBjYWxjKCN7JF9oYW5kbGUtd2lkdGh9ICsgNHB4KTtcbi8vICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbi8vICAgICAgICAgYm9yZGVyOiBzb2xpZCB3aGl0ZSAzcHg7XG4vLyAgICAgICAgIGJhY2tncm91bmQ6ICRibHVlO1xuLy8gICAgICAgICBib3gtc2hhZG93OiAwIDNweCAxMHB4IHRyYW5zcGFyZW50aXplKGJsYWNrLCAwLjgpLFxuLy8gICAgICAgICAgIGluc2V0IDAgLTFweCAzcHggdHJhbnNwYXJlbnRpemUoYmxhY2ssIDAuOSk7XG4vLyAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC02cHgpO1xuLy8gICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycztcbi8vICAgICAgIH1cbi8vICAgICB9XG5cbi8vICAgICAmOmNoZWNrZWQgKyBkaXYge1xuLy8gICAgICAgYmFja2dyb3VuZDogJGJsdWU7XG4vLyAgICAgICBib3gtc2hhZG93OiAkZ2xvdy1zaGFkb3csIGluc2V0IDAgMnB4IDJweCAycHggdHJhbnNwYXJlbnRpemUoYmxhY2ssIDAuNyksXG4vLyAgICAgICAgIGluc2V0IDAgMCB0cmFuc3BhcmVudDtcblxuLy8gICAgICAgJjo6YmVmb3JlIHtcbi8vICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoJF9oYW5kbGUtdHJhbnNsYXRpb24sIC02cHgpO1xuLy8gICAgICAgfVxuLy8gICAgIH1cbi8vICAgfVxuLy8gfVxuXG4vLyBociB7XG4vLyAgIEBleHRlbmQgLmluc2V0O1xuLy8gICB3aWR0aDogNzIlO1xuLy8gICBoZWlnaHQ6IDhweDtcbi8vICAgZmxvYXQ6IHJpZ2h0O1xuLy8gICBib3JkZXI6IDA7XG4vLyB9XG5cbi8vIGNvZGUsXG4vLyBwcmUge1xuLy8gICBwYWRkaW5nOiAwLjVlbSAxZW07XG4vLyAgIGJvcmRlci1yYWRpdXM6IDRweDtcbi8vICAgb3ZlcmZsb3c6IGF1dG87XG4vLyAgIGJveC1zaGFkb3c6IDAgNXB4IDMwcHggMCB0cmFuc3BhcmVudGl6ZShibGFjaywgMC45NSk7XG4vLyB9XG5cbi8vIGNvZGUge1xuLy8gICBiYWNrZ3JvdW5kOiAjZTZlNmU2O1xuLy8gfVxuXG4vLyBwcmUge1xuLy8gICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbi8vICAgbWFyZ2luOiA0ZW0gMDtcbi8vIH1cblxuLy8gY29kZSxcbi8vIHByZSB7XG4vLyAgICYsXG4vLyAgICYgKiB7XG4vLyAgICAgZm9udC1zaXplOiAwLjlyZW07XG4vLyAgICAgbGluZS1oZWlnaHQ6IDJlbTtcbi8vICAgICBjdXJzb3I6IGF1dG87XG4vLyAgICAgdXNlci1zZWxlY3Q6IHRleHQ7XG4vLyAgICAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiB0ZXh0O1xuLy8gICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IHRleHQ7XG4vLyAgICAgLWtodG1sLXVzZXItc2VsZWN0OiB0ZXh0O1xuLy8gICAgIC1tb3otdXNlci1zZWxlY3Q6IHRleHQ7XG4vLyAgICAgLW1zLXVzZXItc2VsZWN0OiB0ZXh0O1xuLy8gICB9XG4vLyB9XG5cbi8vIGJsb2NrcXVvdGUge1xuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbi8vICAgcGFkZGluZzogMC41ZW0gMWVtO1xuLy8gICBib3JkZXItcmFkaXVzOiA0cHg7XG4vLyAgIGJveC1zaGFkb3c6IDAgNXB4IDMwcHggMCB0cmFuc3BhcmVudGl6ZShibGFjaywgMC45NSk7XG4vLyAgIGJvcmRlci1sZWZ0OiA2cHggc29saWQgJGJsdWU7XG4vLyB9XG4iLCJAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ0NhdmVhdCc7XG4gICAgc3JjOiB1cmwoJy4uLy4uL2ZvbnRzL0JvbGQvQ2F2ZWF0LUJvbGQud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXG4gICAgICAgIHVybCgnLi4vLi4vZm9udHMvQm9sZC9DYXZlYXQtQm9sZC53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtZGlzcGxheTogc3dhcDtcbn1cblxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdDYXZlYXQnO1xuICAgIHNyYzogdXJsKCcuLi8uLi9mb250cy9SZWd1bGFyL0NhdmVhdC1SZWd1bGFyLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxuICAgICAgICB1cmwoJy4uLy4uL2ZvbnRzL1JlZ3VsYXIvQ2F2ZWF0LVJlZ3VsYXIud29mZicpIGZvcm1hdCgnd29mZicpO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtZGlzcGxheTogc3dhcDtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnRmlndXJpbmVTeW1ib2xUMSc7XG4gIHNyYzogdXJsKCcuLi8uLi9mb250cy8zcmQgUGFydHkvQ2hlc3NWYXJpYW50cy9GaWd1cmluZVN5bWJvbFQxQm9sZC53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcbiAgICAgIHVybCgnLi4vLi4vZm9udHMvM3JkIFBhcnR5L0NoZXNzVmFyaWFudHMvRmlndXJpbmVTeW1ib2xUMUJvbGQud29mZicpIGZvcm1hdCgnd29mZicpO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ0ZpZ3VyaW5lU3ltYm9sVDEnO1xuICBzcmM6IHVybCgnLi4vLi4vZm9udHMvM3JkIFBhcnR5L0NoZXNzVmFyaWFudHMvRmlndXJpbmVTeW1ib2xUMS53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcbiAgICAgIHVybCgnLi4vLi4vZm9udHMvM3JkIFBhcnR5L0NoZXNzVmFyaWFudHMvRmlndXJpbmVTeW1ib2xUMS53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdTYW5jdHVhcnlQbGF5Z3JvdW5kJztcbiAgc3JjOiB1cmwoJy4uLy4uL2ZvbnRzLzNyZCBQYXJ0eS9TYW5jdHVhcnlQbGF5Z3JvdW5kLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxuICAgICAgdXJsKCcuLi8uLi9mb250cy8zcmQgUGFydHkvU2FuY3R1YXJ5UGxheWdyb3VuZC53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xufVxuXG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ0FtaXRhJztcbiAgc3JjOiB1cmwoJy4uLy4uL2ZvbnRzLzNyZCBQYXJ0eS9BbWl0YS9BbWl0YS1SZWd1bGFyLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxuICAgICAgdXJsKCcuLi8uLi9mb250cy8zcmQgUGFydHkvQW1pdGEvQW1pdGEtUmVndWxhci53b2ZmMicpIGZvcm1hdCgnd29mZicpO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbn0iLCIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiQ2F2ZWF0XCI7XG4gIHNyYzogdXJsKFwiLi4vLi4vZm9udHMvQm9sZC9DYXZlYXQtQm9sZC53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKSwgdXJsKFwiLi4vLi4vZm9udHMvQm9sZC9DYXZlYXQtQm9sZC53b2ZmXCIpIGZvcm1hdChcIndvZmZcIik7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJDYXZlYXRcIjtcbiAgc3JjOiB1cmwoXCIuLi8uLi9mb250cy9SZWd1bGFyL0NhdmVhdC1SZWd1bGFyLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpLCB1cmwoXCIuLi8uLi9mb250cy9SZWd1bGFyL0NhdmVhdC1SZWd1bGFyLndvZmZcIikgZm9ybWF0KFwid29mZlwiKTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiRmlndXJpbmVTeW1ib2xUMVwiO1xuICBzcmM6IHVybChcIi4uLy4uL2ZvbnRzLzNyZCBQYXJ0eS9DaGVzc1ZhcmlhbnRzL0ZpZ3VyaW5lU3ltYm9sVDFCb2xkLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpLCB1cmwoXCIuLi8uLi9mb250cy8zcmQgUGFydHkvQ2hlc3NWYXJpYW50cy9GaWd1cmluZVN5bWJvbFQxQm9sZC53b2ZmXCIpIGZvcm1hdChcIndvZmZcIik7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJGaWd1cmluZVN5bWJvbFQxXCI7XG4gIHNyYzogdXJsKFwiLi4vLi4vZm9udHMvM3JkIFBhcnR5L0NoZXNzVmFyaWFudHMvRmlndXJpbmVTeW1ib2xUMS53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKSwgdXJsKFwiLi4vLi4vZm9udHMvM3JkIFBhcnR5L0NoZXNzVmFyaWFudHMvRmlndXJpbmVTeW1ib2xUMS53b2ZmXCIpIGZvcm1hdChcIndvZmZcIik7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlNhbmN0dWFyeVBsYXlncm91bmRcIjtcbiAgc3JjOiB1cmwoXCIuLi8uLi9mb250cy8zcmQgUGFydHkvU2FuY3R1YXJ5UGxheWdyb3VuZC53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKSwgdXJsKFwiLi4vLi4vZm9udHMvM3JkIFBhcnR5L1NhbmN0dWFyeVBsYXlncm91bmQud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJBbWl0YVwiO1xuICBzcmM6IHVybChcIi4uLy4uL2ZvbnRzLzNyZCBQYXJ0eS9BbWl0YS9BbWl0YS1SZWd1bGFyLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpLCB1cmwoXCIuLi8uLi9mb250cy8zcmQgUGFydHkvQW1pdGEvQW1pdGEtUmVndWxhci53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmXCIpO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbn1cbi8qKioqKioqKioqKioqKioqKioqIE1lbnUgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKioqKioqIE1lbnUgQ29udHJvbHMgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBDb250YWluZXIgVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgQ29udGFpbmVyIFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIENvbnRhaW5lciBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBIaWdobGlnaHQgVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgQW5ub3RhdGlvbiBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBWYXJpYXRpb24gVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgUGx5IFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKiogQ29udHJvbCBDb2xvcnMgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKioqIEJvYXJkIENvbG9ycyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKiogRm9udCBTaXplcyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG46cm9vdCB7XG4gIC0tYmctY29sb3I6ICNmMmYzZjc7XG4gIC0tZmctY29sb3I6ICMzODNhNDE7XG4gIC0tcmVkOiAjZTQzMDMwO1xuICAtLWdyZWVuOiAjMTlhMTg3O1xuICAtLWJsdWU6ICMzNjdiZjA7XG4gIC0tZGFyay1ibHVlOiAjMjY1YWIxO1xuICAtLW1hcm9vbjogI2I4MTc0YztcbiAgLS1wdXJwbGU6ICM4YzQyYWI7XG59XG5cbi5vbGdhLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwcHg7XG4gIGJvdHRvbTogMHB4O1xuICBsZWZ0OiAwcHg7XG4gIHJpZ2h0OiAwcHg7XG4gIHdpZHRoOiA4MDBweDtcbiAgaGVpZ2h0OiA2MDBweDtcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xufVxuXG4uZmVuYnV0dG9uIHtcbiAgd2lkdGg6IDIwMHB4O1xuICBoZWlnaHQ6IDgwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDEwcHg7XG4gIGJvdHRvbTogMSU7XG59XG5cbmNvb2tpZS1jb25zZW50IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBsZWZ0OiAwcHg7XG4gIHJpZ2h0OiAwcHg7XG4gIGJvdHRvbTogMHB4O1xuICB6LWluZGV4OiAxMjAwO1xufVxuXG5vbGdhLXNjb3JlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxMDtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4ub2xnYWhlYWRlciwgLm9sZ2FoZWFkZXI0LCAub2xnYWhlYWRlcjMsIC5vbGdhaGVhZGVyMiwgLm9sZ2FoZWFkZXIxIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9vbGdhMi9hc3NldHMvaW1hZ2VzL2hlYWRlci1iYWNrZ3JvdW5kLnN2Zyk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgbWluLWhlaWdodDogMjQwcHg7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIG1hcmdpbi1sZWZ0OiAtNHB4O1xuICBzY3JvbGxiYXItd2lkdGg6IHRoaW47XG59XG5cbi5vbGdhaGVhZGVyMSB7XG4gIHdpZHRoOiAxMDAlO1xuICBsZWZ0OiAwcHg7XG4gIHJpZ2h0OiAwcHg7XG4gIHRvcDogMHB4O1xufVxuXG4ub2xnYWhlYWRlcjIge1xuICB3aWR0aDogMTAwJTtcbiAgbGVmdDogMHB4O1xuICByaWdodDogMHB4O1xuICB0b3A6IDBweDtcbn1cblxuLm9sZ2FoZWFkZXIzIHtcbiAgbGVmdDogdW5kZWZpbmVkO1xuICByaWdodDogMHB4O1xuICB0b3A6IDBweDtcbn1cblxuLm9sZ2FoZWFkZXI0IHtcbiAgbGVmdDogdW5kZWZpbmVkO1xuICByaWdodDogMHB4O1xuICB0b3A6IDBweDtcbn1cblxuY2FudmFzLWNoZXNzYm9hcmQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMXB4O1xuICBsZWZ0OiAxcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMXB4O1xufVxuXG5vbGdhLXRpdGxlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogNHB4O1xuICB0b3A6IDBweDtcbiAgaGVpZ2h0OiA1JTtcbiAgd2lkdGg6IGNhbGMoNTAlIC0xMHB4KTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5vbGdhLWNvbnRyb2xzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMXB4O1xuICBib3R0b206IDglO1xuICBoZWlnaHQ6IDk5cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdzQmFja2dyb3VuZCk7XG4gIGJvcmRlcjogYmxhY2sgc29saWQgMXB4O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG59XG5cbm9sZ2Etc3RhdHVzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMXB4O1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW8tdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG5vbGdhLW1lbnUge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMHB4O1xuICBib3R0b206IDBweDtcbiAgbGVmdDogMHB4O1xuICByaWdodDogMHB4O1xuICBiYWNrZ3JvdW5kOiAjMTAwYzBjZTM7XG4gIHotaW5kZXg6IDEwMDA7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Olga, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'olga',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss'],
            }]
    }], function () { return [{ type: _services_olga_service__WEBPACK_IMPORTED_MODULE_7__["OlgaService"] }, { type: _services_themes_service__WEBPACK_IMPORTED_MODULE_8__["ThemeService"] }, { type: _services_layout_service__WEBPACK_IMPORTED_MODULE_9__["LayoutService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"] }]; }, { gameScoreComponent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_olga_score_olga_score_component__WEBPACK_IMPORTED_MODULE_1__["GamescoreUxComponent"]]
        }], canvasBoardComponent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_canvas_chessboard_canvas_chessboard_component__WEBPACK_IMPORTED_MODULE_2__["CanvasChessBoard"]]
        }], appContainer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['olgaContainer']
        }], controlsComponent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_olga_controls_olga_controls_component__WEBPACK_IMPORTED_MODULE_3__["OlgaControlsComponent"]]
        }], headerComponent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_olga_header_olga_header_component__WEBPACK_IMPORTED_MODULE_4__["OlgaHeaderComponent"]]
        }], statusComponent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_olga_status_olga_status_component__WEBPACK_IMPORTED_MODULE_6__["OlgaStatusComponent"]]
        }], gameScoreWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], oldWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], keymap: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], pgnData: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['pgnData']
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _olga_score_olga_score_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./olga-score/olga-score.component */ "./src/app/olga-score/olga-score.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
/* harmony import */ var _olga_score_score_flow_flow_item_flow_item_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./olga-score/score-flow/flow-item/flow-item.component */ "./src/app/olga-score/score-flow/flow-item/flow-item.component.ts");
/* harmony import */ var _services_themes_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/themes.service */ "./src/app/services/themes.service.ts");
/* harmony import */ var _common_toggle_switch_toggle_switch_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./common/toggle-switch/toggle-switch.component */ "./src/app/common/toggle-switch/toggle-switch.component.ts");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _services_olga_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/olga.service */ "./src/app/services/olga.service.ts");
/* harmony import */ var _services_layout_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/layout.service */ "./src/app/services/layout.service.ts");
/* harmony import */ var _canvas_chessboard_canvas_chessboard_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./canvas-chessboard/canvas-chessboard.component */ "./src/app/canvas-chessboard/canvas-chessboard.component.ts");
/* harmony import */ var _olga_controls_olga_controls_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./olga-controls/olga-controls.component */ "./src/app/olga-controls/olga-controls.component.ts");
/* harmony import */ var _olga_status_olga_status_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./olga-status/olga-status.component */ "./src/app/olga-status/olga-status.component.ts");
/* harmony import */ var _olga_header_olga_header_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./olga-header/olga-header.component */ "./src/app/olga-header/olga-header.component.ts");
/* harmony import */ var _common_value_slider_value_slider_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./common/value-slider/value-slider.component */ "./src/app/common/value-slider/value-slider.component.ts");
/* harmony import */ var _olga_header_player_showcase_player_showcase_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./olga-header/player-showcase/player-showcase.component */ "./src/app/olga-header/player-showcase/player-showcase.component.ts");
/* harmony import */ var ngx_color_sketch__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ngx-color/sketch */ "./node_modules/ngx-color/__ivy_ngcc__/sketch/fesm2015/ngx-color-sketch.js");
/* harmony import */ var _olga_score_score_table_score_table_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./olga-score/score-table/score-table.component */ "./src/app/olga-score/score-table/score-table.component.ts");
/* harmony import */ var _olga_score_score_flow_score_flow_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./olga-score/score-flow/score-flow.component */ "./src/app/olga-score/score-flow/score-flow.component.ts");
/* harmony import */ var _olga_score_score_table_table_item_table_item_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./olga-score/score-table/table-item/table-item.component */ "./src/app/olga-score/score-table/table-item/table-item.component.ts");
/* harmony import */ var _olga_score_score_table_score_column_score_column_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./olga-score/score-table/score-column/score-column.component */ "./src/app/olga-score/score-table/score-column/score-column.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/bidi.js");
/* harmony import */ var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/cdk/text-field */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/text-field.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/scrolling.js");















































const routes = [{ path: '', redirectTo: 'olga2', pathMatch: 'full' },
    { path: '', component: _app_component__WEBPACK_IMPORTED_MODULE_3__["Olga"], pathMatch: 'full' },
    { path: ':settings', component: _app_component__WEBPACK_IMPORTED_MODULE_3__["Olga"], pathMatch: 'full' }];
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["Olga"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_services_layout_service__WEBPACK_IMPORTED_MODULE_18__["LayoutService"], _services_themes_service__WEBPACK_IMPORTED_MODULE_12__["ThemeService"], _services_olga_service__WEBPACK_IMPORTED_MODULE_17__["OlgaService"], Clipboard], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes),
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__["MatDividerModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIconModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__["MatGridListModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MatMenuModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__["MatTabsModule"],
            ngx_color_sketch__WEBPACK_IMPORTED_MODULE_25__["ColorSketchModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["Olga"],
        _olga_score_olga_score_component__WEBPACK_IMPORTED_MODULE_4__["GamescoreUxComponent"],
        _olga_score_score_flow_flow_item_flow_item_component__WEBPACK_IMPORTED_MODULE_11__["FlowItemComponent"],
        _common_toggle_switch_toggle_switch_component__WEBPACK_IMPORTED_MODULE_13__["ToggleSwitchComponent"],
        _canvas_chessboard_canvas_chessboard_component__WEBPACK_IMPORTED_MODULE_19__["CanvasChessBoard"],
        _olga_controls_olga_controls_component__WEBPACK_IMPORTED_MODULE_20__["OlgaControlsComponent"],
        _olga_status_olga_status_component__WEBPACK_IMPORTED_MODULE_21__["OlgaStatusComponent"],
        _olga_header_olga_header_component__WEBPACK_IMPORTED_MODULE_22__["OlgaHeaderComponent"],
        _common_value_slider_value_slider_component__WEBPACK_IMPORTED_MODULE_23__["ValueSliderComponent"],
        _olga_header_player_showcase_player_showcase_component__WEBPACK_IMPORTED_MODULE_24__["PlayerShowcaseComponent"],
        _olga_score_score_table_score_table_component__WEBPACK_IMPORTED_MODULE_26__["ScoreTableComponent"],
        _olga_score_score_flow_score_flow_component__WEBPACK_IMPORTED_MODULE_27__["ScoreFlowComponent"],
        _olga_score_score_table_table_item_table_item_component__WEBPACK_IMPORTED_MODULE_28__["TableItemComponent"],
        _olga_score_score_table_score_column_score_column_component__WEBPACK_IMPORTED_MODULE_29__["ScoreColumnComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__["MatDividerModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__["MatGridListModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MatMenuModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__["MatTabsModule"],
        ngx_color_sketch__WEBPACK_IMPORTED_MODULE_25__["ColorSketchModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["Olga"],
                    _olga_score_olga_score_component__WEBPACK_IMPORTED_MODULE_4__["GamescoreUxComponent"],
                    _olga_score_score_flow_flow_item_flow_item_component__WEBPACK_IMPORTED_MODULE_11__["FlowItemComponent"],
                    _common_toggle_switch_toggle_switch_component__WEBPACK_IMPORTED_MODULE_13__["ToggleSwitchComponent"],
                    _canvas_chessboard_canvas_chessboard_component__WEBPACK_IMPORTED_MODULE_19__["CanvasChessBoard"],
                    _olga_controls_olga_controls_component__WEBPACK_IMPORTED_MODULE_20__["OlgaControlsComponent"],
                    _olga_status_olga_status_component__WEBPACK_IMPORTED_MODULE_21__["OlgaStatusComponent"],
                    _olga_header_olga_header_component__WEBPACK_IMPORTED_MODULE_22__["OlgaHeaderComponent"],
                    _common_value_slider_value_slider_component__WEBPACK_IMPORTED_MODULE_23__["ValueSliderComponent"],
                    _olga_header_player_showcase_player_showcase_component__WEBPACK_IMPORTED_MODULE_24__["PlayerShowcaseComponent"],
                    _olga_score_score_table_score_table_component__WEBPACK_IMPORTED_MODULE_26__["ScoreTableComponent"],
                    _olga_score_score_flow_score_flow_component__WEBPACK_IMPORTED_MODULE_27__["ScoreFlowComponent"],
                    _olga_score_score_table_table_item_table_item_component__WEBPACK_IMPORTED_MODULE_28__["TableItemComponent"],
                    _olga_score_score_table_score_column_score_column_component__WEBPACK_IMPORTED_MODULE_29__["ScoreColumnComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes),
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"],
                    _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__["MatDividerModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIconModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"],
                    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__["MatGridListModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MatMenuModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__["MatTabsModule"],
                    ngx_color_sketch__WEBPACK_IMPORTED_MODULE_25__["ColorSketchModule"]
                ],
                providers: [_services_layout_service__WEBPACK_IMPORTED_MODULE_18__["LayoutService"], _services_themes_service__WEBPACK_IMPORTED_MODULE_12__["ThemeService"], _services_olga_service__WEBPACK_IMPORTED_MODULE_17__["OlgaService"], Clipboard],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["Olga"]],
            }]
    }], null, null); })();
_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetComponentScope"](_app_component__WEBPACK_IMPORTED_MODULE_3__["Olga"], [_angular_common__WEBPACK_IMPORTED_MODULE_30__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["NgComponentOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["NgPlural"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["NgPluralCase"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_router_router_l"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatAnchor"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_31__["Dir"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardTitleGroup"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardActions"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardFooter"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardSmImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardMdImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardLgImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardXlImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardAvatar"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__["MatDivider"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIcon"], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_32__["CdkAutofill"], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_32__["CdkTextareaAutosize"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_33__["MatError"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_33__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_33__["MatHint"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_33__["MatLabel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_33__["MatPlaceholder"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_33__["MatPrefix"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_33__["MatSuffix"], _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInput"], _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatTextareaAutosize"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__["MatGridList"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__["MatGridTile"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__["MatGridTileText"], _angular_material_core__WEBPACK_IMPORTED_MODULE_34__["MatLine"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__["MatGridTileHeaderCssMatStyler"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__["MatGridTileFooterCssMatStyler"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__["MatGridAvatarCssMatStyler"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_35__["CdkScrollable"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MatMenuItem"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MatMenuContent"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__["MatTabLabel"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__["MatTab"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__["MatTabNav"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__["MatTabLink"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__["MatTabContent"], ngx_color_sketch__WEBPACK_IMPORTED_MODULE_25__["SketchComponent"], ngx_color_sketch__WEBPACK_IMPORTED_MODULE_25__["ɵa"], ngx_color_sketch__WEBPACK_IMPORTED_MODULE_25__["ɵb"], _app_component__WEBPACK_IMPORTED_MODULE_3__["Olga"],
    _olga_score_olga_score_component__WEBPACK_IMPORTED_MODULE_4__["GamescoreUxComponent"],
    _olga_score_score_flow_flow_item_flow_item_component__WEBPACK_IMPORTED_MODULE_11__["FlowItemComponent"],
    _common_toggle_switch_toggle_switch_component__WEBPACK_IMPORTED_MODULE_13__["ToggleSwitchComponent"],
    _canvas_chessboard_canvas_chessboard_component__WEBPACK_IMPORTED_MODULE_19__["CanvasChessBoard"],
    _olga_controls_olga_controls_component__WEBPACK_IMPORTED_MODULE_20__["OlgaControlsComponent"],
    _olga_status_olga_status_component__WEBPACK_IMPORTED_MODULE_21__["OlgaStatusComponent"],
    _olga_header_olga_header_component__WEBPACK_IMPORTED_MODULE_22__["OlgaHeaderComponent"],
    _common_value_slider_value_slider_component__WEBPACK_IMPORTED_MODULE_23__["ValueSliderComponent"],
    _olga_header_player_showcase_player_showcase_component__WEBPACK_IMPORTED_MODULE_24__["PlayerShowcaseComponent"],
    _olga_score_score_table_score_table_component__WEBPACK_IMPORTED_MODULE_26__["ScoreTableComponent"],
    _olga_score_score_flow_score_flow_component__WEBPACK_IMPORTED_MODULE_27__["ScoreFlowComponent"],
    _olga_score_score_table_table_item_table_item_component__WEBPACK_IMPORTED_MODULE_28__["TableItemComponent"],
    _olga_score_score_table_score_column_score_column_component__WEBPACK_IMPORTED_MODULE_29__["ScoreColumnComponent"]], [_angular_common__WEBPACK_IMPORTED_MODULE_30__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["LowerCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["JsonPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["SlicePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["PercentPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["CurrencyPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["I18nPluralPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["I18nSelectPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["KeyValuePipe"]]);
_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetComponentScope"](_olga_score_olga_score_component__WEBPACK_IMPORTED_MODULE_4__["GamescoreUxComponent"], [_angular_common__WEBPACK_IMPORTED_MODULE_30__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["NgComponentOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["NgPlural"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["NgPluralCase"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_router_router_l"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatAnchor"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_31__["Dir"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardTitleGroup"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardActions"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardFooter"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardSmImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardMdImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardLgImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardXlImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardAvatar"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__["MatDivider"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIcon"], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_32__["CdkAutofill"], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_32__["CdkTextareaAutosize"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_33__["MatError"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_33__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_33__["MatHint"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_33__["MatLabel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_33__["MatPlaceholder"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_33__["MatPrefix"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_33__["MatSuffix"], _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInput"], _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatTextareaAutosize"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__["MatGridList"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__["MatGridTile"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__["MatGridTileText"], _angular_material_core__WEBPACK_IMPORTED_MODULE_34__["MatLine"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__["MatGridTileHeaderCssMatStyler"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__["MatGridTileFooterCssMatStyler"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__["MatGridAvatarCssMatStyler"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_35__["CdkScrollable"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MatMenuItem"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MatMenuContent"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__["MatTabLabel"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__["MatTab"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__["MatTabNav"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__["MatTabLink"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__["MatTabContent"], ngx_color_sketch__WEBPACK_IMPORTED_MODULE_25__["SketchComponent"], ngx_color_sketch__WEBPACK_IMPORTED_MODULE_25__["ɵa"], ngx_color_sketch__WEBPACK_IMPORTED_MODULE_25__["ɵb"], _app_component__WEBPACK_IMPORTED_MODULE_3__["Olga"],
    _olga_score_olga_score_component__WEBPACK_IMPORTED_MODULE_4__["GamescoreUxComponent"],
    _olga_score_score_flow_flow_item_flow_item_component__WEBPACK_IMPORTED_MODULE_11__["FlowItemComponent"],
    _common_toggle_switch_toggle_switch_component__WEBPACK_IMPORTED_MODULE_13__["ToggleSwitchComponent"],
    _canvas_chessboard_canvas_chessboard_component__WEBPACK_IMPORTED_MODULE_19__["CanvasChessBoard"],
    _olga_controls_olga_controls_component__WEBPACK_IMPORTED_MODULE_20__["OlgaControlsComponent"],
    _olga_status_olga_status_component__WEBPACK_IMPORTED_MODULE_21__["OlgaStatusComponent"],
    _olga_header_olga_header_component__WEBPACK_IMPORTED_MODULE_22__["OlgaHeaderComponent"],
    _common_value_slider_value_slider_component__WEBPACK_IMPORTED_MODULE_23__["ValueSliderComponent"],
    _olga_header_player_showcase_player_showcase_component__WEBPACK_IMPORTED_MODULE_24__["PlayerShowcaseComponent"],
    _olga_score_score_table_score_table_component__WEBPACK_IMPORTED_MODULE_26__["ScoreTableComponent"],
    _olga_score_score_flow_score_flow_component__WEBPACK_IMPORTED_MODULE_27__["ScoreFlowComponent"],
    _olga_score_score_table_table_item_table_item_component__WEBPACK_IMPORTED_MODULE_28__["TableItemComponent"],
    _olga_score_score_table_score_column_score_column_component__WEBPACK_IMPORTED_MODULE_29__["ScoreColumnComponent"]], [_angular_common__WEBPACK_IMPORTED_MODULE_30__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["LowerCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["JsonPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["SlicePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["PercentPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["CurrencyPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["I18nPluralPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["I18nSelectPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["KeyValuePipe"]]);
_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetComponentScope"](_olga_header_olga_header_component__WEBPACK_IMPORTED_MODULE_22__["OlgaHeaderComponent"], [_angular_common__WEBPACK_IMPORTED_MODULE_30__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["NgComponentOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["NgPlural"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["NgPluralCase"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_router_router_l"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatAnchor"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_31__["Dir"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardTitleGroup"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardActions"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardFooter"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardSmImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardMdImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardLgImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardXlImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardAvatar"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__["MatDivider"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIcon"], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_32__["CdkAutofill"], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_32__["CdkTextareaAutosize"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_33__["MatError"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_33__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_33__["MatHint"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_33__["MatLabel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_33__["MatPlaceholder"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_33__["MatPrefix"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_33__["MatSuffix"], _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInput"], _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatTextareaAutosize"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__["MatGridList"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__["MatGridTile"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__["MatGridTileText"], _angular_material_core__WEBPACK_IMPORTED_MODULE_34__["MatLine"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__["MatGridTileHeaderCssMatStyler"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__["MatGridTileFooterCssMatStyler"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__["MatGridAvatarCssMatStyler"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_35__["CdkScrollable"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MatMenuItem"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MatMenuContent"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__["MatTabLabel"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__["MatTab"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__["MatTabNav"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__["MatTabLink"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__["MatTabContent"], ngx_color_sketch__WEBPACK_IMPORTED_MODULE_25__["SketchComponent"], ngx_color_sketch__WEBPACK_IMPORTED_MODULE_25__["ɵa"], ngx_color_sketch__WEBPACK_IMPORTED_MODULE_25__["ɵb"], _app_component__WEBPACK_IMPORTED_MODULE_3__["Olga"],
    _olga_score_olga_score_component__WEBPACK_IMPORTED_MODULE_4__["GamescoreUxComponent"],
    _olga_score_score_flow_flow_item_flow_item_component__WEBPACK_IMPORTED_MODULE_11__["FlowItemComponent"],
    _common_toggle_switch_toggle_switch_component__WEBPACK_IMPORTED_MODULE_13__["ToggleSwitchComponent"],
    _canvas_chessboard_canvas_chessboard_component__WEBPACK_IMPORTED_MODULE_19__["CanvasChessBoard"],
    _olga_controls_olga_controls_component__WEBPACK_IMPORTED_MODULE_20__["OlgaControlsComponent"],
    _olga_status_olga_status_component__WEBPACK_IMPORTED_MODULE_21__["OlgaStatusComponent"],
    _olga_header_olga_header_component__WEBPACK_IMPORTED_MODULE_22__["OlgaHeaderComponent"],
    _common_value_slider_value_slider_component__WEBPACK_IMPORTED_MODULE_23__["ValueSliderComponent"],
    _olga_header_player_showcase_player_showcase_component__WEBPACK_IMPORTED_MODULE_24__["PlayerShowcaseComponent"],
    _olga_score_score_table_score_table_component__WEBPACK_IMPORTED_MODULE_26__["ScoreTableComponent"],
    _olga_score_score_flow_score_flow_component__WEBPACK_IMPORTED_MODULE_27__["ScoreFlowComponent"],
    _olga_score_score_table_table_item_table_item_component__WEBPACK_IMPORTED_MODULE_28__["TableItemComponent"],
    _olga_score_score_table_score_column_score_column_component__WEBPACK_IMPORTED_MODULE_29__["ScoreColumnComponent"]], [_angular_common__WEBPACK_IMPORTED_MODULE_30__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["LowerCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["JsonPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["SlicePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["PercentPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["CurrencyPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["I18nPluralPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["I18nSelectPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["KeyValuePipe"]]);
_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetComponentScope"](_olga_score_score_table_score_table_component__WEBPACK_IMPORTED_MODULE_26__["ScoreTableComponent"], [_angular_common__WEBPACK_IMPORTED_MODULE_30__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["NgComponentOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["NgPlural"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["NgPluralCase"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_router_router_l"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatAnchor"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_31__["Dir"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardTitleGroup"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardActions"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardFooter"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardSmImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardMdImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardLgImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardXlImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardAvatar"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__["MatDivider"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIcon"], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_32__["CdkAutofill"], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_32__["CdkTextareaAutosize"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_33__["MatError"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_33__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_33__["MatHint"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_33__["MatLabel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_33__["MatPlaceholder"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_33__["MatPrefix"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_33__["MatSuffix"], _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInput"], _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatTextareaAutosize"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__["MatGridList"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__["MatGridTile"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__["MatGridTileText"], _angular_material_core__WEBPACK_IMPORTED_MODULE_34__["MatLine"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__["MatGridTileHeaderCssMatStyler"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__["MatGridTileFooterCssMatStyler"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__["MatGridAvatarCssMatStyler"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_35__["CdkScrollable"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MatMenuItem"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MatMenuContent"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__["MatTabLabel"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__["MatTab"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__["MatTabNav"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__["MatTabLink"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__["MatTabContent"], ngx_color_sketch__WEBPACK_IMPORTED_MODULE_25__["SketchComponent"], ngx_color_sketch__WEBPACK_IMPORTED_MODULE_25__["ɵa"], ngx_color_sketch__WEBPACK_IMPORTED_MODULE_25__["ɵb"], _app_component__WEBPACK_IMPORTED_MODULE_3__["Olga"],
    _olga_score_olga_score_component__WEBPACK_IMPORTED_MODULE_4__["GamescoreUxComponent"],
    _olga_score_score_flow_flow_item_flow_item_component__WEBPACK_IMPORTED_MODULE_11__["FlowItemComponent"],
    _common_toggle_switch_toggle_switch_component__WEBPACK_IMPORTED_MODULE_13__["ToggleSwitchComponent"],
    _canvas_chessboard_canvas_chessboard_component__WEBPACK_IMPORTED_MODULE_19__["CanvasChessBoard"],
    _olga_controls_olga_controls_component__WEBPACK_IMPORTED_MODULE_20__["OlgaControlsComponent"],
    _olga_status_olga_status_component__WEBPACK_IMPORTED_MODULE_21__["OlgaStatusComponent"],
    _olga_header_olga_header_component__WEBPACK_IMPORTED_MODULE_22__["OlgaHeaderComponent"],
    _common_value_slider_value_slider_component__WEBPACK_IMPORTED_MODULE_23__["ValueSliderComponent"],
    _olga_header_player_showcase_player_showcase_component__WEBPACK_IMPORTED_MODULE_24__["PlayerShowcaseComponent"],
    _olga_score_score_table_score_table_component__WEBPACK_IMPORTED_MODULE_26__["ScoreTableComponent"],
    _olga_score_score_flow_score_flow_component__WEBPACK_IMPORTED_MODULE_27__["ScoreFlowComponent"],
    _olga_score_score_table_table_item_table_item_component__WEBPACK_IMPORTED_MODULE_28__["TableItemComponent"],
    _olga_score_score_table_score_column_score_column_component__WEBPACK_IMPORTED_MODULE_29__["ScoreColumnComponent"]], [_angular_common__WEBPACK_IMPORTED_MODULE_30__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["LowerCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["JsonPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["SlicePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["PercentPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["CurrencyPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["I18nPluralPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["I18nSelectPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["KeyValuePipe"]]);
_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetComponentScope"](_olga_score_score_flow_score_flow_component__WEBPACK_IMPORTED_MODULE_27__["ScoreFlowComponent"], [_angular_common__WEBPACK_IMPORTED_MODULE_30__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["NgComponentOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["NgPlural"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["NgPluralCase"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_router_router_l"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatAnchor"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_31__["Dir"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardTitleGroup"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardActions"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardFooter"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardSmImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardMdImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardLgImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardXlImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardAvatar"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__["MatDivider"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIcon"], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_32__["CdkAutofill"], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_32__["CdkTextareaAutosize"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_33__["MatError"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_33__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_33__["MatHint"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_33__["MatLabel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_33__["MatPlaceholder"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_33__["MatPrefix"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_33__["MatSuffix"], _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInput"], _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatTextareaAutosize"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__["MatGridList"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__["MatGridTile"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__["MatGridTileText"], _angular_material_core__WEBPACK_IMPORTED_MODULE_34__["MatLine"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__["MatGridTileHeaderCssMatStyler"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__["MatGridTileFooterCssMatStyler"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__["MatGridAvatarCssMatStyler"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_35__["CdkScrollable"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MatMenuItem"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MatMenuContent"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__["MatTabLabel"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__["MatTab"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__["MatTabNav"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__["MatTabLink"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__["MatTabContent"], ngx_color_sketch__WEBPACK_IMPORTED_MODULE_25__["SketchComponent"], ngx_color_sketch__WEBPACK_IMPORTED_MODULE_25__["ɵa"], ngx_color_sketch__WEBPACK_IMPORTED_MODULE_25__["ɵb"], _app_component__WEBPACK_IMPORTED_MODULE_3__["Olga"],
    _olga_score_olga_score_component__WEBPACK_IMPORTED_MODULE_4__["GamescoreUxComponent"],
    _olga_score_score_flow_flow_item_flow_item_component__WEBPACK_IMPORTED_MODULE_11__["FlowItemComponent"],
    _common_toggle_switch_toggle_switch_component__WEBPACK_IMPORTED_MODULE_13__["ToggleSwitchComponent"],
    _canvas_chessboard_canvas_chessboard_component__WEBPACK_IMPORTED_MODULE_19__["CanvasChessBoard"],
    _olga_controls_olga_controls_component__WEBPACK_IMPORTED_MODULE_20__["OlgaControlsComponent"],
    _olga_status_olga_status_component__WEBPACK_IMPORTED_MODULE_21__["OlgaStatusComponent"],
    _olga_header_olga_header_component__WEBPACK_IMPORTED_MODULE_22__["OlgaHeaderComponent"],
    _common_value_slider_value_slider_component__WEBPACK_IMPORTED_MODULE_23__["ValueSliderComponent"],
    _olga_header_player_showcase_player_showcase_component__WEBPACK_IMPORTED_MODULE_24__["PlayerShowcaseComponent"],
    _olga_score_score_table_score_table_component__WEBPACK_IMPORTED_MODULE_26__["ScoreTableComponent"],
    _olga_score_score_flow_score_flow_component__WEBPACK_IMPORTED_MODULE_27__["ScoreFlowComponent"],
    _olga_score_score_table_table_item_table_item_component__WEBPACK_IMPORTED_MODULE_28__["TableItemComponent"],
    _olga_score_score_table_score_column_score_column_component__WEBPACK_IMPORTED_MODULE_29__["ScoreColumnComponent"]], [_angular_common__WEBPACK_IMPORTED_MODULE_30__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["LowerCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["JsonPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["SlicePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["PercentPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["CurrencyPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["I18nPluralPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["I18nSelectPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["KeyValuePipe"]]);
_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetComponentScope"](_olga_score_score_table_score_column_score_column_component__WEBPACK_IMPORTED_MODULE_29__["ScoreColumnComponent"], [_angular_common__WEBPACK_IMPORTED_MODULE_30__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["NgComponentOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["NgPlural"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["NgPluralCase"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_router_router_l"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatAnchor"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_31__["Dir"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardTitleGroup"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardActions"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardFooter"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardSmImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardMdImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardLgImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardXlImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardAvatar"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__["MatDivider"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIcon"], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_32__["CdkAutofill"], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_32__["CdkTextareaAutosize"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_33__["MatError"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_33__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_33__["MatHint"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_33__["MatLabel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_33__["MatPlaceholder"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_33__["MatPrefix"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_33__["MatSuffix"], _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInput"], _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatTextareaAutosize"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__["MatGridList"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__["MatGridTile"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__["MatGridTileText"], _angular_material_core__WEBPACK_IMPORTED_MODULE_34__["MatLine"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__["MatGridTileHeaderCssMatStyler"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__["MatGridTileFooterCssMatStyler"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__["MatGridAvatarCssMatStyler"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_35__["CdkScrollable"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MatMenuItem"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MatMenuContent"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__["MatTabLabel"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__["MatTab"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__["MatTabNav"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__["MatTabLink"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__["MatTabContent"], ngx_color_sketch__WEBPACK_IMPORTED_MODULE_25__["SketchComponent"], ngx_color_sketch__WEBPACK_IMPORTED_MODULE_25__["ɵa"], ngx_color_sketch__WEBPACK_IMPORTED_MODULE_25__["ɵb"], _app_component__WEBPACK_IMPORTED_MODULE_3__["Olga"],
    _olga_score_olga_score_component__WEBPACK_IMPORTED_MODULE_4__["GamescoreUxComponent"],
    _olga_score_score_flow_flow_item_flow_item_component__WEBPACK_IMPORTED_MODULE_11__["FlowItemComponent"],
    _common_toggle_switch_toggle_switch_component__WEBPACK_IMPORTED_MODULE_13__["ToggleSwitchComponent"],
    _canvas_chessboard_canvas_chessboard_component__WEBPACK_IMPORTED_MODULE_19__["CanvasChessBoard"],
    _olga_controls_olga_controls_component__WEBPACK_IMPORTED_MODULE_20__["OlgaControlsComponent"],
    _olga_status_olga_status_component__WEBPACK_IMPORTED_MODULE_21__["OlgaStatusComponent"],
    _olga_header_olga_header_component__WEBPACK_IMPORTED_MODULE_22__["OlgaHeaderComponent"],
    _common_value_slider_value_slider_component__WEBPACK_IMPORTED_MODULE_23__["ValueSliderComponent"],
    _olga_header_player_showcase_player_showcase_component__WEBPACK_IMPORTED_MODULE_24__["PlayerShowcaseComponent"],
    _olga_score_score_table_score_table_component__WEBPACK_IMPORTED_MODULE_26__["ScoreTableComponent"],
    _olga_score_score_flow_score_flow_component__WEBPACK_IMPORTED_MODULE_27__["ScoreFlowComponent"],
    _olga_score_score_table_table_item_table_item_component__WEBPACK_IMPORTED_MODULE_28__["TableItemComponent"],
    _olga_score_score_table_score_column_score_column_component__WEBPACK_IMPORTED_MODULE_29__["ScoreColumnComponent"]], [_angular_common__WEBPACK_IMPORTED_MODULE_30__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["LowerCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["JsonPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["SlicePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["PercentPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["CurrencyPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["I18nPluralPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["I18nSelectPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_30__["KeyValuePipe"]]);


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
/* harmony import */ var _services_themes_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/themes.service */ "./src/app/services/themes.service.ts");








const _c0 = ["boardCanvas"];
var ObjectType;
(function (ObjectType) {
    ObjectType[ObjectType["Tile"] = 111] = "Tile";
    ObjectType[ObjectType["Label"] = 222] = "Label";
})(ObjectType || (ObjectType = {}));
class CanvasChessBoard {
    constructor(olga, themes) {
        this.olga = olga;
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
        this.container = document.getElementById(this.boardID + '-ccb');
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
                    object.setColor(isDark ? this.themes.boardLabelDark.value : this.themes.boardLabelLight.value);
                }
                break;
            }
            case ObjectType.Tile: {
                object = new fabric__WEBPACK_IMPORTED_MODULE_1__["fabric"].Rect({
                    width: this.tileSize,
                    height: this.tileSize,
                });
                if (isDark !== undefined && isDark !== null) {
                    object.setColor(isDark ? this.themes.boardBGDark.value : this.themes.boardBGLight.value);
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
CanvasChessBoard.ɵfac = function CanvasChessBoard_Factory(t) { return new (t || CanvasChessBoard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_olga_service__WEBPACK_IMPORTED_MODULE_5__["OlgaService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_themes_service__WEBPACK_IMPORTED_MODULE_6__["ThemeService"])); };
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
    }], function () { return [{ type: _services_olga_service__WEBPACK_IMPORTED_MODULE_5__["OlgaService"] }, { type: _services_themes_service__WEBPACK_IMPORTED_MODULE_6__["ThemeService"] }]; }, { size: [{
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
        this.position = this.game.initialPosition();
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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



class ToggleSwitchComponent {
    constructor() {
        this.value = null;
        this.off = '';
        this.on = '';
        this.toggled = false;
    }
    ngOnInit() {
        if (this.value) {
            this.toggled = this.value.value;
            this.value.subscribe((state) => { this.toggled = state; });
        }
    }
    toggle() {
        if (this.value) {
            this.value.next(!this.value.value);
        }
    }
}
ToggleSwitchComponent.ɵfac = function ToggleSwitchComponent_Factory(t) { return new (t || ToggleSwitchComponent)(); };
ToggleSwitchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ToggleSwitchComponent, selectors: [["toggle-switch"]], inputs: { value: "value", off: "off", on: "on" }, decls: 7, vars: 4, consts: [[1, "switch", 3, "click"], [1, "off"], [3, "ngClass"], [1, "on"]], template: function ToggleSwitchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToggleSwitchComponent_Template_div_click_0_listener() { return ctx.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.off);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.toggled ? "bar-selected" : "bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.toggled ? "ball-selected" : "ball");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.on);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]], styles: ["@font-face {\n  font-family: \"Caveat\";\n  src: url('Caveat-Bold.woff2') format(\"woff2\"), url('Caveat-Bold.woff') format(\"woff\");\n  font-weight: bold;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"Caveat\";\n  src: url('Caveat-Regular.woff2') format(\"woff2\"), url('Caveat-Regular.woff') format(\"woff\");\n  font-weight: 600;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"FigurineSymbolT1\";\n  src: url('FigurineSymbolT1Bold.woff2') format(\"woff2\"), url('FigurineSymbolT1Bold.woff') format(\"woff\");\n  font-weight: bold;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"FigurineSymbolT1\";\n  src: url('FigurineSymbolT1.woff2') format(\"woff2\"), url('FigurineSymbolT1.woff') format(\"woff\");\n  font-weight: 600;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"SanctuaryPlayground\";\n  src: url('SanctuaryPlayground.woff2') format(\"woff2\"), url('SanctuaryPlayground.woff') format(\"woff\");\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"Amita\";\n  src: url('Amita-Regular.woff2') format(\"woff2\"), url('Amita-Regular.woff2') format(\"woff\");\n  font-style: normal;\n  font-display: swap;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n[_ngcontent-%COMP%]:root {\n  --bg-color: #f2f3f7;\n  --fg-color: #383a41;\n  --red: #e43030;\n  --green: #19a187;\n  --blue: #367bf0;\n  --dark-blue: #265ab1;\n  --maroon: #b8174c;\n  --purple: #8c42ab;\n}\n.switch[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  min-width: 72px;\n  min-height: 36px;\n}\n.bar[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 16px;\n  height: 16px;\n  width: 59%;\n  left: 20%;\n  background: darkgrey;\n  border: 1px black solid;\n}\n.bar-selected[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 16px;\n  height: 16px;\n  width: 59%;\n  left: 20%;\n  background: #00ffffff;\n  border: 1px black solid;\n}\n.ball[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 24px;\n  height: 24px;\n  left: 20%;\n  top: -4px;\n  background: #367bf0;\n  border: 1px solid black;\n  border-radius: 50%;\n}\n.ball-selected[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 24px;\n  height: 24px;\n  right: calc(20%);\n  top: -4px;\n  background: #367bf0;\n  border: 1px solid black;\n  border-radius: 50%;\n}\n.on[_ngcontent-%COMP%] {\n  position: absolute;\n  color: white;\n  right: 6px;\n  text-align: right;\n}\n.off[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0px;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uL3RvZ2dsZS1zd2l0Y2gvdG9nZ2xlLXN3aXRjaC5jb21wb25lbnQuc2NzcyIsInNyYy9zdHlsZXMuc2NzcyIsInNyYy9hc3NldHMvc2Nzcy9tb2R1bGVzL19mb250cy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDJDQUFBO0FDQUEsOEVBQUE7QUNBQTtFQUNJLHFCQUFBO0VBQ0EscUZBQUE7RUFFQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUZFSjtBRUNBO0VBQ0kscUJBQUE7RUFDQSwyRkFBQTtFQUVBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBRkFKO0FFR0E7RUFDRSwrQkFBQTtFQUNBLHVHQUFBO0VBRUEsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FGRkY7QUVLQTtFQUNFLCtCQUFBO0VBQ0EsK0ZBQUE7RUFFQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUZKRjtBRU9BO0VBQ0Usa0NBQUE7RUFDQSxxR0FBQTtFQUVBLGtCQUFBO0VBQ0Esa0JBQUE7QUZORjtBRVVBO0VBQ0Usb0JBQUE7RUFDQSwwRkFBQTtFQUVBLGtCQUFBO0VBQ0Esa0JBQUE7QUZURjtBQ0ZBLCtFQUFBO0FBR0Esa0ZBQUE7QUFLQSwrRUFBQTtBQVVBLCtFQUFBO0FBTUEsK0VBQUE7QUFNQSwrRUFBQTtBQU1BLGdGQUFBO0FBS0EsK0VBQUE7QUFLQSx5RUFBQTtBQUtBLHlFQUFBO0FBSUEsdUVBQUE7QUFRQSxxRUFBQTtBQXlCQTtFQUNFLG1CQUFBO0VBQ0EsbUJBQUE7RUFFQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FEekVGO0FBN0RBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFnRUo7QUE5REE7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0Esb0JBQUE7RUFDQSx1QkFBQTtBQWlFSjtBQTlEQTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxxQkNmUztFRGdCVCx1QkFBQTtBQWlFSjtBQTlEQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQ3hCRztFRHlCSCx1QkFBQTtFQUNBLGtCQUFBO0FBaUVKO0FBOURBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQ25DRztFRG9DSCx1QkFBQTtFQUNBLGtCQUFBO0FBaUVKO0FBOURBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0FBaUVKO0FBOURBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtBQWlFSiIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi90b2dnbGUtc3dpdGNoL3RvZ2dsZS1zd2l0Y2guY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBUaGUgc3dpdGNoIC0gdGhlIGJveCBhcm91bmQgdGhlIHNsaWRlciAqL1xyXG5AaW1wb3J0ICcuLi8uLi8uLi9zdHlsZXMuc2Nzcyc7XHJcbi5zd2l0Y2h7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG1pbi13aWR0aDogNzJweDtcclxuICAgIG1pbi1oZWlnaHQ6IDM2cHg7XHJcbn1cclxuLmJhcntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgICBoZWlnaHQ6IDE2cHg7XHJcbiAgICB3aWR0aDogNTklO1xyXG4gICAgbGVmdDogMjAlO1xyXG4gICAgYmFja2dyb3VuZDogZGFya2dyZXk7XHJcbiAgICBib3JkZXI6IDFweCBibGFjayBzb2xpZDtcclxufVxyXG5cclxuLmJhci1zZWxlY3RlZHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgICBoZWlnaHQ6IDE2cHg7XHJcbiAgICB3aWR0aDogNTklO1xyXG4gICAgbGVmdDogMjAlO1xyXG4gICAgYmFja2dyb3VuZDogJGxpZ2h0LWJsdWU7XHJcbiAgICBib3JkZXI6IDFweCBibGFjayBzb2xpZDsgIFxyXG59XHJcblxyXG4uYmFsbCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDoyNHB4O1xyXG4gICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgbGVmdDogMjAlO1xyXG4gICAgdG9wOiAtNHB4O1xyXG4gICAgYmFja2dyb3VuZDogJGJsdWU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG5cclxuLmJhbGwtc2VsZWN0ZWQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6MjRweDtcclxuICAgIGhlaWdodDogMjRweDtcclxuICAgIHJpZ2h0OiBjYWxjKDIwJSk7XHJcbiAgICB0b3A6IC00cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAgJGJsdWU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG5cclxuLm9ue1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcmlnaHQ6IDZweDtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG4ub2Zme1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59IiwiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuXG5AaW1wb3J0IFwiLi9hc3NldHMvc2Nzcy9tb2R1bGVzL19mb250cy5zY3NzXCI7XG4kZ2FtZXNjb3JlLWZhbWlseTogXCJGaWd1cmluZVN5bWJvbFQxXCI7XG4kZ2FtZXNjb3JlLWhpZ2hsaWdodDogIzU4NTg1OGZmO1xuJGdhbWVzY29yZS1mb3JlZ3JvdW5kOiB3aGl0ZTtcblxuJHJlZDogI2U0MzAzMDtcbiRncmVlbjogIzE5YTE4NztcbiRsaWdodC1ibHVlOiAjMDBmZmZmZmY7XG4kYmx1ZTogIzM2N2JmMDtcbiRkYXJrLWJsdWU6ICMyNjVhYjE7XG4kbWFyb29uOiAjYjgxNzRjO1xuJHB1cnBsZTogIzhjNDJhYjtcblxuLy8gTWFpbiBPTEdBIENvbG9yIEVsZW1lbnQgVmFyaWFibGVzXG4kdGV4dENvbG9yOiB2YXIoLS10ZXh0Q29sb3IpOyAvLyBNYWluIFRleHQgQ29sb3JcbiR0ZXh0Q29sb3JBdHRlbnRpb246IHZhcigtLXRleHRDb2xvckF0dGVudGlvbik7IC8vIEF0dGVudGlvbiB0ZXh0XG4kdGV4dENvbG9yUmVtb3ZlOiB2YXIoLS10ZXh0Q29sb3JSZW1vdmUpOyAvLyBSZW1vdmUvRGVsZXRlL0Nsb3NlXG4kdGV4dENvbG9yQWRkOiB2YXIoLS10ZXh0Q29sb3JBZGQpOyAvLyBBZGQvQ3JlYXRlL09wZW5cbiR0ZXh0Q29sb3JBY3RpdmU6IHZhcigtLXRleHRDb2xvckFjdGl2ZSk7IC8vIEFkZC9DcmVhdGUvT3BlblxuJGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQpOyAvLyBNYWluIGJhY2tncm91bmQgQ29sb3JcbiRiZ0NvbnRhaW5lcjogdmFyKC0tYmdDb250YWluZXIpOyAvLyBiYWNrZ3JvdW5kIG9mIENvbnRhaW5lcnNcbiRiZ01lbnU6IHZhcigtLWJnTWVudSk7IC8vIGJhY2tncm91bmQgb2YgTWVudXNcbiRiZ0l0ZW06IHZhcigtLWJnSXRlbSk7IC8vIGJhY2tncm91bmQgb2YgSXRlbXNcblxuLy8gQ29udGV4dCBNZW51XG4kYmdDb250ZXh0OiB2YXIoLS1iZ0NvbnRleHQpOyAvLyBiYWNrZ3JvdW5kIG9mIENvbnRleHQgTWVudVxuJHRleHRDb2xvckNvbnRleHQ6IHZhcigtLXRleHRDb2xvckNvbnRleHQpOyAvLyB0ZXh0IGNvbG9yIENvbnRleHQgTWVudVxuJGJvcmRlckNvbnRleHQ6IHZhcigtLWJvcmRlckNvbnRleHQpOyAvLyBib3JkZXIgQ29udGV4dCBNZW51XG4kb3ZlcmxheUNvbnRleHRCYWNrZ3JvdW5kOiB2YXIoXG4gIC0tb3ZlcmxheUNvbnRleHRCYWNrZ3JvdW5kXG4pOyAvLyBDb250ZXh0IE1lbnUgT3ZlcmxheSBiYWNrZ3JvdW5kIG1haW5cbiRvdmVybGF5Q29udGV4dEJhY2tncm91bmRHcmFkaWVudDogdmFyKFxuICAtLW92ZXJsYXlDb250ZXh0QmFja2dyb3VuZEdyYWRpZW50XG4pOyAvLyBDb250ZXh0IE1lbnUgYmFja2dyb3VuZCBncmFkaWVudFxuXG5cblxuLyoqKioqKioqKioqKioqKioqKiogTWVudSAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiRtZUJhY2tncm91bmQ6IHZhcigtLW1lQmFja2dyb3VuZCk7XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKiogTWVudSBDb250cm9scyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4kY3NGaWxsOiB2YXIoLS1jc0ZpbGwpO1xuJGNzQWNjZW50OiB2YXIoLS1jc0FjY2VudCk7XG4kY3NBY2NlbnQyOiB2YXIoLS1jc0FjY2VudDIpO1xuXG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIENvbnRhaW5lciBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuJGdzVGV4dENvbG9yOiB2YXIoLS1nc1RleHRDb2xvcik7IC8vIFRleHQgY29sb3IgZm9yIGdhbWUgc2NvcmVcbiRnc0JhY2tncm91bmQ6IHZhcigtLWdzQmFja2dyb3VuZCk7IC8vIGJhY2tncm91bmQgb2YgQ29udGFpbmVyc1xuJGdzTGlzdEJhY2tncm91bmQ6IHZhcigtLWdzTGlzdEJhY2tncm91bmQpOyAvLyBsaXN0IGJhY2tncm91bmQgb2YgZ2FtZSBzY29yZVxuJGdzQm9yZGVyOiB2YXIoLS1nc0JvcmRlcik7IC8vIGJhY2tncm91bmQgb2YgTWVudXNcbiRnc1RleHRTaXplOiB2YXIoLS1nc1RleHRTaXplKTsgLy8gYmFja2dyb3VuZCBvZiBNZW51c1xuJGdzRm9udEZhbWlseTogdmFyKC0tZ3NGb250RmFtaWx5KTsgLy8gc2NvcmUgZm9udFxuJGdzVGFibGVJdGVtV2lkdGg6IHZhcigtLWdzVGFibGVJdGVtV2lkdGgpOyAvLyB3aWR0aCBvZiBzY29yZSBpdGVtIGluIHRhYmxlIGxheW91dFxuJGdzVGFibGVQbHlXaWR0aDogdmFyKC0tZ3NUYWJsZVBseVdpZHRoKTsgLy8gd2lkdGggb2YgcGx5IGVsZW1lbnQgaW4gdGFibGUgbGF5b3V0XG5cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgQ29udGFpbmVyIFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4kZ3NUZXh0Q29sb3JNVzogdmFyKC0tZ3NUZXh0Q29sb3JNVyk7IC8vIFRleHQgY29sb3IgZm9yIGdhbWUgc2NvcmVcbiRnc0JhY2tncm91bmRNVzogdmFyKC0tZ3NCYWNrZ3JvdW5kTVcpOyAvLyBiYWNrZ3JvdW5kIG9mIENvbnRhaW5lcnNcbiRnc0JvcmRlck1XOiB2YXIoLS1nc0JvcmRlck1XKTsgLy8gYmFja2dyb3VuZCBvZiBNZW51c1xuJGdzVGV4dFNpemVNVzogdmFyKC0tZ3NUZXh0U2l6ZU1XKTsgLy8gYmFja2dyb3VuZCBvZiBNZW51c1xuXG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIENvbnRhaW5lciBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuJGdzVGV4dENvbG9yTUI6IHZhcigtLWdzVGV4dENvbG9yTUIpOyAvLyBUZXh0IGNvbG9yIGZvciBnYW1lIHNjb3JlXG4kZ3NCYWNrZ3JvdW5kTUI6IHZhcigtLWdzQmFja2dyb3VuZE1CKTsgLy8gYmFja2dyb3VuZCBvZiBDb250YWluZXJzXG4kZ3NCb3JkZXJNQjogdmFyKC0tZ3NCb3JkZXJNQik7IC8vIGJhY2tncm91bmQgb2YgTWVudXNcbiRnc1RleHRTaXplTUI6IHZhcigtLWdzVGV4dFNpemVNQik7IC8vIGJhY2tncm91bmQgb2YgTWVudXNcblxuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBIaWdobGlnaHQgVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiRnc1RleHRDb2xvckhHOiB2YXIoLS1nc1RleHRDb2xvckhHKTsgLy8gVGV4dCBjb2xvciBmb3IgaGlnaGxpZ2h0XG4kZ3NBbm5vdGF0aW9uQ29sb3JIRzogdmFyKC0tZ3NBbm5vdGF0aW9uQ29sb3JIRyk7IC8vIEFubm90YXRpb24vQ29tbWVudCBjb2xvciBmb3IgaGlnaGxpZ2h0XG4kZ3NCYWNrZ3JvdW5kSEc6IHZhcigtLWdzQmFja2dyb3VuZEhHKTsgLy8gYmFja2dyb3VuZCBmb3IgaGlnaGxpZ2h0XG4kZ3NCb3JkZXJIRzogdmFyKC0tZ3NCb3JkZXJIRyk7IC8vIGJvcmRlciBmb3IgaGlnaGxpZ2h0XG5cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgQW5ub3RhdGlvbiBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuJGdzVGV4dENvbG9yQU46IHZhcigtLWdzVGV4dENvbG9yQU4pOyAvLyBUZXh0IGNvbG9yIGZvciBoaWdobGlnaHRcbiRnc0JhY2tncm91bmRBTjogdmFyKC0tZ3NCYWNrZ3JvdW5kQU4pOyAvLyBiYWNrZ3JvdW5kIGZvciBoaWdobGlnaHRcbiRnc0JvcmRlckFOOiB2YXIoLS1nc0JvcmRlckFOKTsgLy8gYm9yZGVyIGZvciBoaWdobGlnaHRcblxuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBWYXJpYXRpb24gVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiRnc1RleHRDb2xvclZBOiB2YXIoLS1nc1RleHRDb2xvclZBKTsgLy8gVGV4dCBjb2xvciBmb3IgaGlnaGxpZ2h0XG4kZ3NCYWNrZ3JvdW5kVkE6IHZhcigtLWdzQmFja2dyb3VuZFZBKTsgLy8gYmFja2dyb3VuZCBmb3IgaGlnaGxpZ2h0XG4kZ3NCb3JkZXJWQTogdmFyKC0tZ3NCb3JkZXJWQSk7IC8vIGJvcmRlciBmb3IgaGlnaGxpZ2h0XG5cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgUGx5IFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4kZ3NUZXh0Q29sb3JQQzogdmFyKC0tZ3NUZXh0Q29sb3JQQyk7IC8vIFRleHQgY29sb3IgZm9yIGdhbWUgc2NvcmUgcGx5XG4kZ3NCYWNrZ3JvdW5kUEM6IHZhcigtLWdzQmFja2dyb3VuZFBDKTsgLy8gYmFja2dyb3VuZCBmb3IgZ2FtZSBzY29yZSBwbHlcbiRnc0JvcmRlclBDOiB2YXIoLS1nc0JvcmRlclBDKTsgLy8gYm9yZGVyIGZvciBnYW1lIHNjb3JlIHBseVxuXG4vKioqKioqKioqKioqKioqKioqKiogQ29udHJvbCBDb2xvcnMgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuJGNzQmFja2dyb3VuZDogdmFyKC0tY3NCYWNrZ3JvdW5kKTsgLy8gYmFja2dyb3VuZCBmb3IgY29udHJvbHNcbiRjc0NvbG9yOiB2YXIoLS1jc0NvbG9yKTsgLy8gY29udHJvbHMgY29sb3IgKGZvcmVncm91bmQpXG5cbi8qKioqKioqKioqKioqKioqKioqKiBCb2FyZCBDb2xvcnMgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuJGJvYXJkQkdEYXJrOiB2YXIoLS1ib2FyZEJHRGFyayk7IC8vIGJvYXJkIGRhcmsgdGlsZVxuJGJvYXJkQkdMaWdodDogdmFyKC0tYm9hcmRCR0xpZ2h0KTsgLy8gYm9hcmQgbGlnaHQgdGlsZVxuJGJvYXJkTGFiZWxMaWdodDogdmFyKC0tYm9hcmRMYWJlbExpZ2h0KTsgLy8gYm9hcmQgbGlnaHQgbGFiZWxcbiRib2FyZExhYmVsRGFyazogdmFyKC0tYm9hcmRMYWJlbERhcmspOyAvLyBib2FyZCBkYXJrIGxhYmVsXG5cblxuXG4vKioqKioqKioqKioqKioqKioqKiogRm9udCBTaXplcyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4kZ3NGb250U2l6ZTogdmFyKC0tZ3NGb250U2l6ZSk7IC8vIGJvYXJkIGRhcmsgdGlsZVxuJGdzRm9udFNpemVBTjogdmFyKC0tZ3NGb250U2l6ZUFOKTsgLy8gYm9hcmQgbGlnaHQgdGlsZVxuJGdzRm9udFNpemVIRzogdmFyKC0tZ3NGb250U2l6ZUhHKTsgLy8gYm9hcmQgbGlnaHQgbGFiZWxcbiRnc0ZvbnRTaXplVkE6IHZhcigtLWdzRm9udFNpemVWQSk7IC8vIGJvYXJkIGRhcmsgbGFiZWxcbiRnc0ZvbnRTaXplUEM6IHZhcigtLWdzRm9udFNpemVQQyk7IC8vIGJvYXJkIGRhcmsgbGFiZWxcbiRoZHJEYXRhRm9udFNpemU6IHZhcigtLWhkckRhdGFGb250U2l6ZSk7IC8vIHNpemUgb2YgcGxheWVyIHNob3djYXNlIGRhdGFcbiRoZHJOYW1lRm9udFNpemU6IHZhcigtLWhkck5hbWVGb250U2l6ZSk7IC8vIHNpemUgb2YgcGxheWVyIHNob3djYXNlIE5hbWVcbiRoZHJUaXRsZUZvbnRTaXplOiB2YXIoLS1oZHJUaXRsZUZvbnRTaXplKTsgLy8gc2l6ZSBvZiBwbGF5ZXIgc2hvd2Nhc2UgZGF0YVxuJGhkclZhcmlhbnRGb250U2l6ZTogdmFyKC0taGRyVmFyaWFudEZvbnRTaXplKTsgLy8gc2l6ZSBvZiBwbGF5ZXIgc2hvd2Nhc2UgTmFtZVxuJGhkck1hdGNoRGF0YUZvbnRTaXplOiB2YXIoLS1oZHJNYXRjaERhdGFGb250U2l6ZSk7IC8vIHNpemUgb2YgcGxheWVyIHNob3djYXNlIE5hbWVcbiRoZHJPcGVuaW5nRm9udFNpemU6IHZhcigtLWhkck1hdGNoRGF0YUZvbnRTaXplKTsgLy8gc2l6ZSBvZiBwbGF5ZXIgc2hvd2Nhc2UgTmFtZVxuJGhkclJlc3VsdEZvbnRTaXplOiB2YXIoLS1oZHJSZXN1bHRGb250U2l6ZSk7IC8vIHNpemUgb2YgcGxheWVyIHNob3djYXNlIE5hbWVcbiRoZHJSb3VuZEZvbnRTaXplOiB2YXIoLS1oZHJSb3VuZEZvbnRTaXplKTsgLy8gc2l6ZSBvZiBwbGF5ZXIgc2hvd2Nhc2UgTmFtZVxuXG4vLyBHZW5lcmFsIHN0dWZmXG4kdGV4dC1jb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XG4kYmctb3V0ZXI6IHZhcigtLWJnLW91dGVyKTtcbiRiZy1pbm5lcjogdmFyKC0tYmctaW5uZXIpO1xuXG4kYmctY29sb3I6ICNmMmYzZjc7XG4kZmctY29sb3I6ICMzODNhNDE7XG5cbiRnbG93LXNoYWRvdzogMCAwIDAuNWVtIHRyYW5zcGFyZW50aXplKCRibHVlLCAwLjMpO1xuXG46cm9vdCB7XG4gIC0tYmctY29sb3I6ICN7JGJnLWNvbG9yfTtcbiAgLS1mZy1jb2xvcjogI3skZmctY29sb3J9O1xuXG4gIC0tcmVkOiAjeyRyZWR9O1xuICAtLWdyZWVuOiAjeyRncmVlbn07XG4gIC0tYmx1ZTogI3skYmx1ZX07XG4gIC0tZGFyay1ibHVlOiAjeyRkYXJrLWJsdWV9O1xuICAtLW1hcm9vbjogI3skbWFyb29ufTtcbiAgLS1wdXJwbGU6ICN7JHB1cnBsZX07XG59XG5cbi8vIDo6LW1vei1mb2N1cy1pbm5lcixcbi8vIDotbW96LWZvY3VzcmluZyB7XG4vLyAgIGJvcmRlcjogMDtcbi8vICAgY29sb3I6IHRyYW5zcGFyZW50O1xuLy8gICB0ZXh0LXNoYWRvdzogMCAwIDAgJGZnLWNvbG9yO1xuLy8gfVxuXG4vLyA6OnNlbGVjdGlvbixcbi8vIDo6LW1vei1zZWxlY3Rpb24ge1xuLy8gICBjb2xvcjogd2hpdGU7XG4vLyAgIGJhY2tncm91bmQ6IGJsYWNrO1xuLy8gfVxuXG4vLyAqIHtcbi8vICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbi8vICAgb3V0bGluZTogbm9uZTtcbi8vICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4vLyAgIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcbi8vICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbi8vICAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lO1xuLy8gICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuLy8gICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4vLyAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbi8vICAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuLy8gICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCkgIWltcG9ydGFudDtcbi8vICAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xuLy8gICBjdXJzb3I6IGRlZmF1bHQ7XG4vLyAgIGxldHRlci1zcGFjaW5nOiAwO1xuLy8gfVxuXG4vLyAuc2VsZWN0YWJsZSxcbi8vIC5zZWxlY3RhYmxlICoge1xuLy8gICBjdXJzb3I6IGF1dG87XG4vLyAgIHVzZXItc2VsZWN0OiB0ZXh0O1xuLy8gICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IHRleHQ7XG4vLyAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IHRleHQ7XG4vLyAgIC1raHRtbC11c2VyLXNlbGVjdDogdGV4dDtcbi8vICAgLW1vei11c2VyLXNlbGVjdDogdGV4dDtcbi8vICAgLW1zLXVzZXItc2VsZWN0OiB0ZXh0O1xuLy8gfVxuXG4vLyBodG1sLFxuLy8gYm9keSB7XG4vLyAgIGJhY2tncm91bmQtY29sb3I6ICRiZy1jb2xvcjtcbi8vICAgY29sb3I6ICRmZy1jb2xvcjtcbi8vICAgbWFyZ2luOiAwO1xuLy8gICBwYWRkaW5nOiAwO1xuLy8gICBmb250LXNpemU6IDEwcHQ7XG4vLyAgIGhlaWdodDogMTAwJTtcbi8vICAgb3ZlcmZsb3c6IGF1dG87XG4vLyB9XG5cbi8vIC53aXRoLXNoYWRvdyB7XG4vLyAgIGJveC1zaGFkb3c6IDZweCA2cHggMTBweCB0cmFuc3BhcmVudGl6ZShibGFjaywgMC45KSwgLTZweCAtNnB4IDEwcHggd2hpdGU7XG4vLyB9XG5cbi8vIC5vdXRzZXQge1xuLy8gICBAZXh0ZW5kIC53aXRoLXNoYWRvdztcblxuLy8gICBib3JkZXItcmFkaXVzOiAxMHB4O1xuLy8gICBiYWNrZ3JvdW5kOiAkYmctY29sb3I7XG4vLyB9XG5cbi8vIC5pbnNldCB7XG4vLyAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4vLyAgIGJveC1zaGFkb3c6IDAgMCB0cmFuc3BhcmVudCwgMCAwIHRyYW5zcGFyZW50LFxuLy8gICAgIGluc2V0IDNweCAzcHggNXB4IHRyYW5zcGFyZW50aXplKGJsYWNrLCAwLjkpLCBpbnNldCAtM3B4IC0zcHggNXB4IHdoaXRlO1xuLy8gICBiYWNrZ3JvdW5kOiBsaWdodGVuKCRiZy1jb2xvciwgMiUpO1xuLy8gfVxuXG4vLyAucGFwZXIge1xuLy8gICBAZXh0ZW5kIC5vdXRzZXQ7XG4vLyAgIHBhZGRpbmc6IDEwcHggMjBweCAyMHB4O1xuLy8gICBtYXJnaW4tdG9wOiAyMHB4O1xuLy8gICBtaW4taGVpZ2h0OiAxMDBweDtcbi8vICAgZm9udC1zaXplOiAxLjJlbTtcbi8vICAgYmFja2dyb3VuZDogJGJnLWNvbG9yO1xuLy8gfVxuXG4vLyBzZWN0aW9uLFxuLy8gYXJ0aWNsZSxcbi8vIC5zZWN0aW9uLFxuLy8gLmFydGljbGUsXG4vLyAucGFwZXIge1xuLy8gICBsaW5lLWhlaWdodDogMmVtO1xuLy8gICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4vLyAgIHdvcmQtYnJlYWs6IG5vcm1hbDtcbi8vICAgbGluZS1oZWlnaHQ6IDJlbTtcbi8vIH1cblxuLy8gaW5wdXRbdHlwZT1cInRleHRcIl0sXG4vLyBpbnB1dFt0eXBlPVwic2VhcmNoXCJdLFxuLy8gaW5wdXRbdHlwZT1cInRlbFwiXSxcbi8vIGlucHV0W3R5cGU9XCJ1cmxcIl0sXG4vLyBpbnB1dFt0eXBlPVwiZW1haWxcIl0sXG4vLyBpbnB1dFt0eXBlPVwicGFzc3dvcmRcIl0sXG4vLyBpbnB1dFt0eXBlPVwiZGF0ZVwiXSxcbi8vIGlucHV0W3R5cGU9XCJtb250aFwiXSxcbi8vIGlucHV0W3R5cGU9XCJ3ZWVrXCJdLFxuLy8gaW5wdXRbdHlwZT1cInRpbWVcIl0sXG4vLyBpbnB1dFt0eXBlPVwibnVtYmVyXCJdLFxuLy8gaW5wdXRbdHlwZT1cImNvbG9yXCJdLFxuLy8gc2VsZWN0LFxuLy8gdGV4dGFyZWEge1xuLy8gICBib3JkZXI6IDA7XG4vLyAgIGJhY2tncm91bmQ6ICRiZy1jb2xvcjtcbi8vICAgY29sb3I6ICRmZy1jb2xvcjtcbi8vICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbi8vICAgcGFkZGluZzogMCAxLjI1ZW07XG4vLyAgIGxpbmUtaGVpZ2h0OiAxLjI1ZW07XG4vLyAgIGhlaWdodDogMy41ZW07XG4vLyAgIG1hcmdpbjogMTBweCAwO1xuLy8gICBmb250LXNpemU6IDEuMXJlbTtcbi8vICAgY3Vyc29yOiB0ZXh0O1xuLy8gICB1c2VyLXNlbGVjdDogdGV4dDtcbi8vICAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiB0ZXh0O1xuLy8gICAtd2Via2l0LXVzZXItc2VsZWN0OiB0ZXh0O1xuLy8gICAta2h0bWwtdXNlci1zZWxlY3Q6IHRleHQ7XG4vLyAgIC1tb3otdXNlci1zZWxlY3Q6IHRleHQ7XG4vLyAgIC1tcy11c2VyLXNlbGVjdDogdGV4dDtcbi8vICAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjJzO1xuXG4vLyAgICY6bm90KHNlbGVjdCkge1xuLy8gICAgIEBleHRlbmQgLmluc2V0O1xuXG4vLyAgICAgJjpmb2N1cyB7XG4vLyAgICAgICBAZXh0ZW5kIC5vdXRzZXQ7XG4vLyAgICAgfVxuLy8gICB9XG4vLyB9XG5cbi8vIHRleHRhcmVhIHtcbi8vICAgaGVpZ2h0OiAzNTBweDtcbi8vICAgcGFkZGluZzogMS4yNWVtO1xuLy8gfVxuXG4vLyBzZWxlY3Qge1xuLy8gICBAZXh0ZW5kIC5vdXRzZXQ7XG5cbi8vICAgY3Vyc29yOiBwb2ludGVyO1xuLy8gICBiYWNrZ3JvdW5kOiB1cmwoZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCMlpYSnphVzl1UFNJeExqRWlJSFpwWlhkQ2IzZzlJakFnTUNBeE9TQXhPU0lnZUcxc2JuTTlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5Mekl3TURBdmMzWm5JajQ4WnlCMGNtRnVjMlp2Y20wOUltMWhkSEpwZUNndU1ETTBJREFnTUNBdU1ETTBJQzAyTGpnZ01TNDNaUzAxS1NJZ2MzUjViR1U5SW1acGJHdzZJemRpTjJVNFl5SStQSEJoZEdnZ1pEMGliVFE0TUNBek5EUXRNakV4TFRJeE1tTXRNVFl0TVRZdE5ERXRNVFl0TlRjZ01DMHhOaUF4TmkweE5pQTBNaUF3SURVM2JESXpPQ0F5TXpsak9DNDBJRGd1TlNBeU1DQXhNaUF6TVNBeE1pQXhNU0F3TGpVMklESXlMVE11TWlBek1TMHhNbXd5TXpndE1qTTVZekUyTFRFMklERTJMVFF5SURBdE5UZHpMVFF4TFRFMkxUVTNJREI2SWlCemRIbHNaVDBpWm1sc2JEb2pOMkkzWlRoaklpOCtQQzluUGp3dmMzWm5QZ289KVxuLy8gICAgIG5vLXJlcGVhdCByaWdodCAxZW0gY2VudGVyO1xuLy8gICBiYWNrZ3JvdW5kLXNpemU6IDEuMmVtO1xuLy8gICBwYWRkaW5nLXJpZ2h0OiAzZW07XG4vLyB9XG5cbi8vIGlucHV0OjpwbGFjZWhvbGRlcixcbi8vIHRleHRhcmVhOjpwbGFjZWhvbGRlciB7XG4vLyAgIG9wYWNpdHk6IDE7XG4vLyAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycztcbi8vICAgY29sb3I6IGluaGVyaXQ7XG4vLyB9XG5cbi8vIGlucHV0OmZvY3VzOjpwbGFjZWhvbGRlcixcbi8vIHRleHRhcmVhOmZvY3VzOjpwbGFjZWhvbGRlciB7XG4vLyAgIG9wYWNpdHk6IDAuMjtcbi8vIH1cblxuLy8gaW5wdXQ6LW1zLWlucHV0LXBsYWNlaG9sZGVyLFxuLy8gdGV4dGFyZWE6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbi8vICAgb3BhY2l0eTogMTtcbi8vICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzO1xuLy8gICBjb2xvcjogaW5oZXJpdDtcbi8vIH1cblxuLy8gaW5wdXQ6Zm9jdXM6LW1zLWlucHV0LXBsYWNlaG9sZGVyLFxuLy8gdGV4dGFyZWE6Zm9jdXM6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbi8vICAgb3BhY2l0eTogMC4yO1xuLy8gfVxuXG4vLyBpbnB1dFt0eXBlPVwic2VhcmNoXCJdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uLFxuLy8gaW5wdXRbdHlwZT1cInNlYXJjaFwiXTo6LXdlYmtpdC1zZWFyY2gtY2FuY2VsLWJ1dHRvbixcbi8vIGlucHV0W3R5cGU9XCJzZWFyY2hcIl06Oi13ZWJraXQtc2VhcmNoLXJlc3VsdHMtYnV0dG9uLFxuLy8gaW5wdXRbdHlwZT1cInNlYXJjaFwiXTo6LXdlYmtpdC1zZWFyY2gtcmVzdWx0cy1kZWNvcmF0aW9uIHtcbi8vICAgZGlzcGxheTogbm9uZTtcbi8vIH1cblxuLy8gYnV0dG9uLFxuLy8gaW5wdXRbdHlwZT1cImJ1dHRvblwiXSxcbi8vIGlucHV0W3R5cGU9XCJzdWJtaXRcIl0sXG4vLyBpbnB1dFt0eXBlPVwicmVzZXRcIl0ge1xuLy8gICBAZXh0ZW5kIC5vdXRzZXQ7XG5cbi8vICAgYm9yZGVyOiAwO1xuLy8gICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbi8vICAgcGFkZGluZzogMTBweCAwO1xuLy8gICB3aWR0aDogOGVtO1xuLy8gICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4vLyAgIGN1cnNvcjogcG9pbnRlcjtcbi8vICAgY29sb3I6IGluaGVyaXQ7XG4vLyAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuLy8gICB0cmFuc2l0aW9uLXByb3BlcnR5OiBiYWNrZ3JvdW5kLWNvbG9yLCBib3gtc2hhZG93O1xuLy8gICB0cmFuc2l0aW9uLWRlbGF5OiAwLjJzO1xuLy8gICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjJzO1xuXG4vLyAgICYuYWN0aXZlLFxuLy8gICAmOmFjdGl2ZSB7XG4vLyAgICAgQGV4dGVuZCAuaW5zZXQ7XG5cbi8vICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwcztcbi8vICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjFzO1xuLy8gICB9XG5cbi8vICAgQGVhY2ggJG5hbWUsICRjb2xvciBpbiAoXCJyZWRcIjogJHJlZCwgXCJncmVlblwiOiAkZ3JlZW4sIFwiYmx1ZVwiOiAkYmx1ZSkge1xuLy8gICAgIEBhdC1yb290IC4jeyRuYW1lfS1idXR0b24sXG4vLyAgICAgICAmLiN7JG5hbWV9LWJ1dHRvbiB7XG4vLyAgICAgICBAZXh0ZW5kIGJ1dHRvbjtcblxuLy8gICAgICAgJF9iZy1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgJGNvbG9yIDMwJSwgbGlnaHRlbigkY29sb3IsIDYlKSA4MCUpO1xuXG4vLyAgICAgICBjb2xvcjogd2hpdGU7XG4vLyAgICAgICBmb250LXdlaWdodDogYm9sZDtcbi8vICAgICAgIHRleHQtc2hhZG93OiAwIDAuMWVtIDAuMWVtIHRyYW5zcGFyZW50aXplKGJsYWNrLCAwLjMpO1xuLy8gICAgICAgYmFja2dyb3VuZDogJF9iZy1pbWFnZTtcbi8vICAgICAgIGJveC1zaGFkb3c6IDAgMCAwLjVlbSB0cmFuc3BhcmVudGl6ZSgkY29sb3IsIDAuMyksIDAgMCB0cmFuc3BhcmVudCxcbi8vICAgICAgICAgaW5zZXQgMCAtNXB4IDAgdHJhbnNwYXJlbnRpemUoYmxhY2ssIDAuOTUpLFxuLy8gICAgICAgICBpbnNldCAwIDJweCAwIHRyYW5zcGFyZW50aXplKHdoaXRlLCAwLjgpO1xuLy8gICAgICAgYm9yZGVyLXJhZGl1czogNnB4IDZweCA4cHggOHB4O1xuLy8gICAgICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYm94LXNoYWRvdywgYm9yZGVyLXJhZGl1cztcblxuLy8gICAgICAgJi5hY3RpdmUsXG4vLyAgICAgICAmOmFjdGl2ZSB7XG4vLyAgICAgICAgIGJhY2tncm91bmQ6ICRfYmctaW1hZ2U7XG4vLyAgICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbi8vICAgICAgICAgYm94LXNoYWRvdzogMCAwIHRyYW5zcGFyZW50LCAwIDAgdHJhbnNwYXJlbnQsXG4vLyAgICAgICAgICAgaW5zZXQgMCAycHggNXB4IDJweCB0cmFuc3BhcmVudGl6ZShibGFjaywgMC44KTtcbi8vICAgICAgIH1cbi8vICAgICB9XG4vLyAgIH1cbi8vIH1cblxuLy8gbGFiZWwge1xuLy8gICAmLFxuLy8gICAmICoge1xuLy8gICAgIGN1cnNvcjogcG9pbnRlcjtcbi8vICAgfVxuXG4vLyAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbi8vICAgcGFkZGluZzogMC41NmVtIDA7XG4vLyB9XG5cbi8vIGEge1xuLy8gICAmLFxuLy8gICAmOmxpbmssXG4vLyAgICY6dmlzaXRlZCxcbi8vICAgJjpob3ZlciAmOmFjdGl2ZSB7XG4vLyAgICAgJixcbi8vICAgICAmICoge1xuLy8gICAgICAgY3Vyc29yOiBwb2ludGVyO1xuLy8gICAgIH1cblxuLy8gICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuLy8gICAgIGNvbG9yOiAkYmx1ZTtcbi8vICAgICBmb250LXdlaWdodDogYm9sZDtcbi8vICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4vLyAgIH1cbi8vIH1cblxuLy8gaDEsXG4vLyBoMixcbi8vIGgzLFxuLy8gaDQsXG4vLyBoNSxcbi8vIGg2IHtcbi8vICAgbGluZS1oZWlnaHQ6IDEuNWVtO1xuLy8gfVxuXG4vLyBoMSB7XG4vLyAgIGZvbnQtc2l6ZTogNGVtO1xuLy8gICBmb250LXdlaWdodDogbGlnaHRlcjtcbi8vICAgbWFyZ2luOiAwLjdlbSAwO1xuLy8gfVxuXG4vLyBoMiB7XG4vLyAgIGZvbnQtc2l6ZTogM2VtO1xuLy8gICBmb250LXdlaWdodDogbGlnaHRlcjtcbi8vICAgbWFyZ2luOiAwLjhlbSAwO1xuLy8gfVxuXG4vLyBoMyB7XG4vLyAgIGZvbnQtc2l6ZTogMi41ZW07XG4vLyAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuLy8gICBtYXJnaW46IDAuOWVtIDA7XG4vLyB9XG5cbi8vIGg0IHtcbi8vICAgZm9udC1zaXplOiAyZW07XG4vLyAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuLy8gICBtYXJnaW46IDFlbSAwO1xuLy8gfVxuXG4vLyBoNSB7XG4vLyAgIG1hcmdpbjogMC41ZW0gMDtcbi8vICAgZm9udC1zaXplOiAxLjJlbTtcbi8vICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbi8vIH1cblxuLy8gaDYge1xuLy8gICBtYXJnaW46IDFlbSAwIDFlbSAxLjRlbTtcbi8vICAgZm9udC1zaXplOiAxZW07XG4vLyAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuLy8gfVxuXG4vLyBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0sXG4vLyBpbnB1dFt0eXBlPVwicmFkaW9cIl0ge1xuLy8gICAkX2JvcmRlci13aWR0aDogMC4xNWVtO1xuLy8gICAkX2JveC1zaGFkb3c6IDJweCAycHggM3B4IHRyYW5zcGFyZW50aXplKGJsYWNrLCAwLjgpLCAtMnB4IC0ycHggM3B4IHdoaXRlLFxuLy8gICAgIGluc2V0IDFweCAxcHggMnB4IHRyYW5zcGFyZW50aXplKGJsYWNrLCAwLjgpLCBpbnNldCAtMXB4IC0xcHggMnB4IHdoaXRlO1xuLy8gICBmb250LXNpemU6IDFlbTtcbi8vICAgY3Vyc29yOiBwb2ludGVyO1xuLy8gICBoZWlnaHQ6IDEuMmVtO1xuLy8gICB3aWR0aDogMS4yZW07XG4vLyAgIG1hcmdpbjogMCAwLjNlbTtcbi8vICAgYm94LXNoYWRvdzogJF9ib3gtc2hhZG93O1xuLy8gICBib3JkZXI6ICRfYm9yZGVyLXdpZHRoIHNvbGlkICRiZy1jb2xvcjtcbi8vICAgdmVydGljYWwtYWxpZ246IHRleHQtYm90dG9tO1xuLy8gICB0cmFuc2l0aW9uLXByb3BlcnR5OiBiYWNrZ3JvdW5kLCBib3gtc2hhZG93O1xuLy8gICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjJzO1xuXG4vLyAgICY6YWN0aXZlIHtcbi8vICAgICBib3gtc2hhZG93OiAkX2JveC1zaGFkb3csIGluc2V0IDAgMC4xZW0gMC4yNWVtIHRyYW5zcGFyZW50aXplKGJsYWNrLCAwLjgpO1xuLy8gICB9XG5cbi8vICAgJjpjaGVja2VkIHtcbi8vICAgICBib3JkZXItd2lkdGg6IDAuMWVtO1xuLy8gICAgIGJvcmRlci1jb2xvcjogZGFya2VuKCRibHVlLCAxMCUpO1xuLy8gICAgIGJhY2tncm91bmQtY29sb3I6ICRibHVlO1xuLy8gICB9XG4vLyB9XG5cbi8vIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSB7XG4vLyAgIGJvcmRlci1yYWRpdXM6IDI1JTtcblxuLy8gICAmOmNoZWNrZWQge1xuLy8gICAgIGJveC1zaGFkb3c6ICRnbG93LXNoYWRvdywgaW5zZXQgMCAtMC4xZW0gMCB0cmFuc3BhcmVudGl6ZShibGFjaywgMC44KSxcbi8vICAgICAgIGluc2V0IDAgMC4xZW0gMC4xZW0gdHJhbnNwYXJlbnRpemUod2hpdGUsIDAuOCk7XG4vLyAgIH1cbi8vIH1cblxuLy8gaW5wdXRbdHlwZT1cInJhZGlvXCJdIHtcbi8vICAgYm9yZGVyLXJhZGl1czogMTAwJTtcblxuLy8gICAmOmNoZWNrZWQge1xuLy8gICAgIGJveC1zaGFkb3c6ICRnbG93LXNoYWRvdztcbi8vICAgICBib3gtc2hhZG93OiAkZ2xvdy1zaGFkb3csIGluc2V0IDAgMC4xMmVtIDAuMWVtIHRyYW5zcGFyZW50aXplKHdoaXRlLCAwLjc1KTtcbi8vICAgICBib3JkZXItYm90dG9tLXdpZHRoOiAwLjE1ZW07XG4vLyAgIH1cbi8vIH1cblxuLy8gLmNoZWNrdGV4dCB7XG4vLyAgIHdpZHRoOiBhdXRvO1xuLy8gICBtYXJnaW46IDAuNWVtO1xuXG4vLyAgIGlucHV0IHtcbi8vICAgICBkaXNwbGF5OiBub25lO1xuXG4vLyAgICAgKyBzcGFuIHtcbi8vICAgICAgIEBleHRlbmQgYnV0dG9uO1xuXG4vLyAgICAgICBmb250LXdlaWdodDogYm9sZDtcbi8vICAgICAgIHBhZGRpbmc6IDFlbTtcbi8vICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDBzO1xuLy8gICAgIH1cblxuLy8gICAgICY6Y2hlY2tlZCArIHNwYW4ge1xuLy8gICAgICAgQGV4dGVuZCAuYmx1ZS1idXR0b247XG5cbi8vICAgICAgIHBhZGRpbmc6IDFlbTtcbi8vICAgICB9XG4vLyAgIH1cbi8vIH1cblxuLy8gLnN3aXRjaCB7XG4vLyAgICRfaGVpZ2h0OiAycmVtO1xuLy8gICAkX3dpZHRoOiA4cmVtO1xuLy8gICAkX2hhbmRsZS13aWR0aDogJF9oZWlnaHQ7XG4vLyAgICRfaGFuZGxlLXRyYW5zbGF0aW9uOiAkX3dpZHRoIC0gJF9oYW5kbGUtd2lkdGg7XG5cbi8vICAgaGVpZ2h0OiAkX2hlaWdodDtcbi8vICAgd2lkdGg6ICRfd2lkdGg7XG4vLyAgIHBhZGRpbmc6IDA7XG4vLyAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuLy8gICBpbnB1dCB7XG4vLyAgICAgZGlzcGxheTogbm9uZTtcblxuLy8gICAgICsgZGl2IHtcbi8vICAgICAgIGhlaWdodDogMTAwJTtcbi8vICAgICAgIHdpZHRoOiAxMDAlO1xuLy8gICAgICAgYm9yZGVyLXJhZGl1czogOTk5cHg7XG4vLyAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbi8vICAgICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGJveC1zaGFkb3csIGJhY2tncm91bmQtY29sb3I7XG4vLyAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjJzO1xuLy8gICAgICAgdHJhbnNpdGlvbi1kZWxheTogMC4ycztcbi8vICAgICAgIGJveC1zaGFkb3c6IDNweCAzcHggMnB4IC0ycHggdHJhbnNwYXJlbnRpemUoYmxhY2ssIDAuOSksXG4vLyAgICAgICAgIGluc2V0IDJweCAycHggMnB4IDFweCB0cmFuc3BhcmVudGl6ZShibGFjaywgMC45KSxcbi8vICAgICAgICAgaW5zZXQgLTJweCAtMnB4IDFweCB3aGl0ZTtcblxuLy8gICAgICAgJjo6YmVmb3JlIHtcbi8vICAgICAgICAgY29udGVudDogXCJcIjtcbi8vICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4vLyAgICAgICAgIGhlaWdodDogY2FsYygjeyRfaGFuZGxlLXdpZHRofSArIDRweCk7XG4vLyAgICAgICAgIHdpZHRoOiBjYWxjKCN7JF9oYW5kbGUtd2lkdGh9ICsgNHB4KTtcbi8vICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbi8vICAgICAgICAgYm9yZGVyOiBzb2xpZCB3aGl0ZSAzcHg7XG4vLyAgICAgICAgIGJhY2tncm91bmQ6ICRibHVlO1xuLy8gICAgICAgICBib3gtc2hhZG93OiAwIDNweCAxMHB4IHRyYW5zcGFyZW50aXplKGJsYWNrLCAwLjgpLFxuLy8gICAgICAgICAgIGluc2V0IDAgLTFweCAzcHggdHJhbnNwYXJlbnRpemUoYmxhY2ssIDAuOSk7XG4vLyAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC02cHgpO1xuLy8gICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycztcbi8vICAgICAgIH1cbi8vICAgICB9XG5cbi8vICAgICAmOmNoZWNrZWQgKyBkaXYge1xuLy8gICAgICAgYmFja2dyb3VuZDogJGJsdWU7XG4vLyAgICAgICBib3gtc2hhZG93OiAkZ2xvdy1zaGFkb3csIGluc2V0IDAgMnB4IDJweCAycHggdHJhbnNwYXJlbnRpemUoYmxhY2ssIDAuNyksXG4vLyAgICAgICAgIGluc2V0IDAgMCB0cmFuc3BhcmVudDtcblxuLy8gICAgICAgJjo6YmVmb3JlIHtcbi8vICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoJF9oYW5kbGUtdHJhbnNsYXRpb24sIC02cHgpO1xuLy8gICAgICAgfVxuLy8gICAgIH1cbi8vICAgfVxuLy8gfVxuXG4vLyBociB7XG4vLyAgIEBleHRlbmQgLmluc2V0O1xuLy8gICB3aWR0aDogNzIlO1xuLy8gICBoZWlnaHQ6IDhweDtcbi8vICAgZmxvYXQ6IHJpZ2h0O1xuLy8gICBib3JkZXI6IDA7XG4vLyB9XG5cbi8vIGNvZGUsXG4vLyBwcmUge1xuLy8gICBwYWRkaW5nOiAwLjVlbSAxZW07XG4vLyAgIGJvcmRlci1yYWRpdXM6IDRweDtcbi8vICAgb3ZlcmZsb3c6IGF1dG87XG4vLyAgIGJveC1zaGFkb3c6IDAgNXB4IDMwcHggMCB0cmFuc3BhcmVudGl6ZShibGFjaywgMC45NSk7XG4vLyB9XG5cbi8vIGNvZGUge1xuLy8gICBiYWNrZ3JvdW5kOiAjZTZlNmU2O1xuLy8gfVxuXG4vLyBwcmUge1xuLy8gICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbi8vICAgbWFyZ2luOiA0ZW0gMDtcbi8vIH1cblxuLy8gY29kZSxcbi8vIHByZSB7XG4vLyAgICYsXG4vLyAgICYgKiB7XG4vLyAgICAgZm9udC1zaXplOiAwLjlyZW07XG4vLyAgICAgbGluZS1oZWlnaHQ6IDJlbTtcbi8vICAgICBjdXJzb3I6IGF1dG87XG4vLyAgICAgdXNlci1zZWxlY3Q6IHRleHQ7XG4vLyAgICAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiB0ZXh0O1xuLy8gICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IHRleHQ7XG4vLyAgICAgLWtodG1sLXVzZXItc2VsZWN0OiB0ZXh0O1xuLy8gICAgIC1tb3otdXNlci1zZWxlY3Q6IHRleHQ7XG4vLyAgICAgLW1zLXVzZXItc2VsZWN0OiB0ZXh0O1xuLy8gICB9XG4vLyB9XG5cbi8vIGJsb2NrcXVvdGUge1xuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbi8vICAgcGFkZGluZzogMC41ZW0gMWVtO1xuLy8gICBib3JkZXItcmFkaXVzOiA0cHg7XG4vLyAgIGJveC1zaGFkb3c6IDAgNXB4IDMwcHggMCB0cmFuc3BhcmVudGl6ZShibGFjaywgMC45NSk7XG4vLyAgIGJvcmRlci1sZWZ0OiA2cHggc29saWQgJGJsdWU7XG4vLyB9XG4iLCJAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ0NhdmVhdCc7XG4gICAgc3JjOiB1cmwoJy4uLy4uL2ZvbnRzL0JvbGQvQ2F2ZWF0LUJvbGQud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXG4gICAgICAgIHVybCgnLi4vLi4vZm9udHMvQm9sZC9DYXZlYXQtQm9sZC53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtZGlzcGxheTogc3dhcDtcbn1cblxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdDYXZlYXQnO1xuICAgIHNyYzogdXJsKCcuLi8uLi9mb250cy9SZWd1bGFyL0NhdmVhdC1SZWd1bGFyLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxuICAgICAgICB1cmwoJy4uLy4uL2ZvbnRzL1JlZ3VsYXIvQ2F2ZWF0LVJlZ3VsYXIud29mZicpIGZvcm1hdCgnd29mZicpO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtZGlzcGxheTogc3dhcDtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnRmlndXJpbmVTeW1ib2xUMSc7XG4gIHNyYzogdXJsKCcuLi8uLi9mb250cy8zcmQgUGFydHkvQ2hlc3NWYXJpYW50cy9GaWd1cmluZVN5bWJvbFQxQm9sZC53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcbiAgICAgIHVybCgnLi4vLi4vZm9udHMvM3JkIFBhcnR5L0NoZXNzVmFyaWFudHMvRmlndXJpbmVTeW1ib2xUMUJvbGQud29mZicpIGZvcm1hdCgnd29mZicpO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ0ZpZ3VyaW5lU3ltYm9sVDEnO1xuICBzcmM6IHVybCgnLi4vLi4vZm9udHMvM3JkIFBhcnR5L0NoZXNzVmFyaWFudHMvRmlndXJpbmVTeW1ib2xUMS53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcbiAgICAgIHVybCgnLi4vLi4vZm9udHMvM3JkIFBhcnR5L0NoZXNzVmFyaWFudHMvRmlndXJpbmVTeW1ib2xUMS53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdTYW5jdHVhcnlQbGF5Z3JvdW5kJztcbiAgc3JjOiB1cmwoJy4uLy4uL2ZvbnRzLzNyZCBQYXJ0eS9TYW5jdHVhcnlQbGF5Z3JvdW5kLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxuICAgICAgdXJsKCcuLi8uLi9mb250cy8zcmQgUGFydHkvU2FuY3R1YXJ5UGxheWdyb3VuZC53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xufVxuXG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ0FtaXRhJztcbiAgc3JjOiB1cmwoJy4uLy4uL2ZvbnRzLzNyZCBQYXJ0eS9BbWl0YS9BbWl0YS1SZWd1bGFyLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxuICAgICAgdXJsKCcuLi8uLi9mb250cy8zcmQgUGFydHkvQW1pdGEvQW1pdGEtUmVndWxhci53b2ZmMicpIGZvcm1hdCgnd29mZicpO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToggleSwitchComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'toggle-switch',
                templateUrl: './toggle-switch.component.html',
                styleUrls: ['./toggle-switch.component.scss']
            }]
    }], function () { return []; }, { value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], off: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], on: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/common/value-slider/value-slider.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/common/value-slider/value-slider.component.ts ***!
  \***************************************************************/
/*! exports provided: ValueSliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValueSliderComponent", function() { return ValueSliderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ValueSliderComponent {
    constructor() {
        this.max = 100;
        this.minimum = 0;
        this.step = 1;
        this.value = 50;
    }
    ngOnInit() {
    }
}
ValueSliderComponent.ɵfac = function ValueSliderComponent_Factory(t) { return new (t || ValueSliderComponent)(); };
ValueSliderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ValueSliderComponent, selectors: [["value-slider"]], inputs: { max: "max", minimum: "minimum", step: "step", value: "value" }, decls: 2, vars: 4, consts: [["type", "range", 1, "olga-slider", 3, "step", "min", "max", "value"], ["inputElement", ""]], template: function ValueSliderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 0, 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("step", ctx.step)("min", ctx.minimum)("max", ctx.max)("value", ctx.value);
    } }, styles: ["@font-face {\n  font-family: \"Caveat\";\n  src: url('Caveat-Bold.woff2') format(\"woff2\"), url('Caveat-Bold.woff') format(\"woff\");\n  font-weight: bold;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"Caveat\";\n  src: url('Caveat-Regular.woff2') format(\"woff2\"), url('Caveat-Regular.woff') format(\"woff\");\n  font-weight: 600;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"FigurineSymbolT1\";\n  src: url('FigurineSymbolT1Bold.woff2') format(\"woff2\"), url('FigurineSymbolT1Bold.woff') format(\"woff\");\n  font-weight: bold;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"FigurineSymbolT1\";\n  src: url('FigurineSymbolT1.woff2') format(\"woff2\"), url('FigurineSymbolT1.woff') format(\"woff\");\n  font-weight: 600;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"SanctuaryPlayground\";\n  src: url('SanctuaryPlayground.woff2') format(\"woff2\"), url('SanctuaryPlayground.woff') format(\"woff\");\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"Amita\";\n  src: url('Amita-Regular.woff2') format(\"woff2\"), url('Amita-Regular.woff2') format(\"woff\");\n  font-style: normal;\n  font-display: swap;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n[_ngcontent-%COMP%]:root {\n  --bg-color: #f2f3f7;\n  --fg-color: #383a41;\n  --red: #e43030;\n  --green: #19a187;\n  --blue: #367bf0;\n  --dark-blue: #265ab1;\n  --maroon: #b8174c;\n  --purple: #8c42ab;\n}\n.olga-slider[_ngcontent-%COMP%] {\n  -webkit-appearance: none;\n  \n  -moz-appearance: none;\n       appearance: none;\n  left: 5%;\n  width: 90%;\n  \n  height: 26%;\n  \n  border-radius: 8px;\n  background: var(--csBackground);\n  \n  outline: none;\n  \n  opacity: 0.7;\n  \n  \n  transition: opacity 0.2s;\n}\n.olga-slider[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n  \n}\n\n.olga-slider[_ngcontent-%COMP%]::-webkit-slider-thumb {\n  -webkit-appearance: none;\n  \n  appearance: none;\n  width: 25px;\n  \n  height: 25px;\n  \n  background: var(--csFill);\n  \n  cursor: pointer;\n  \n  border-radius: 50%;\n  border: 1px solid black;\n}\n.olga-slider[_ngcontent-%COMP%]::-moz-range-thumb {\n  width: 25px;\n  \n  height: 25px;\n  \n  background: var(--csFill);\n  \n  cursor: pointer;\n  \n  border-radius: 50%;\n  border: 1px solid var(--csAccent);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMuc2NzcyIsInNyYy9hc3NldHMvc2Nzcy9tb2R1bGVzL19mb250cy5zY3NzIiwic3JjL2FwcC9jb21tb24vdmFsdWUtc2xpZGVyL3ZhbHVlLXNsaWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4RUFBQTtBQ0FBO0VBQ0kscUJBQUE7RUFDQSxxRkFBQTtFQUVBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0NKO0FERUE7RUFDSSxxQkFBQTtFQUNBLDJGQUFBO0VBRUEsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDREo7QURJQTtFQUNFLCtCQUFBO0VBQ0EsdUdBQUE7RUFFQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNIRjtBRE1BO0VBQ0UsK0JBQUE7RUFDQSwrRkFBQTtFQUVBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0xGO0FEUUE7RUFDRSxrQ0FBQTtFQUNBLHFHQUFBO0VBRUEsa0JBQUE7RUFDQSxrQkFBQTtBQ1BGO0FEV0E7RUFDRSxvQkFBQTtFQUNBLDBGQUFBO0VBRUEsa0JBQUE7RUFDQSxrQkFBQTtBQ1ZGO0FGREEsK0VBQUE7QUFHQSxrRkFBQTtBQUtBLCtFQUFBO0FBVUEsK0VBQUE7QUFNQSwrRUFBQTtBQU1BLCtFQUFBO0FBTUEsZ0ZBQUE7QUFLQSwrRUFBQTtBQUtBLHlFQUFBO0FBS0EseUVBQUE7QUFJQSx1RUFBQTtBQVFBLHFFQUFBO0FBeUJBO0VBQ0UsbUJBQUE7RUFDQSxtQkFBQTtFQUVBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUUxRUY7QUE3REE7RUFDRSx3QkFBQTtFQUEyQixnQ0FBQTtFQUMzQixxQkFBQTtPQUFBLGdCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFBWSxlQUFBO0VBQ1osV0FBQTtFQUFhLHFCQUFBO0VBQ2Isa0JBQUE7RUFDQSwrQkZtRmE7RUVuRmMsb0JBQUE7RUFDM0IsYUFBQTtFQUFlLG1CQUFBO0VBQ2YsWUFBQTtFQUFjLHVEQUFBO0VBQ1csb0NBQUE7RUFDekIsd0JBQUE7QUF1RUY7QUFyRUE7RUFDSSxVQUFBO0VBQVksOEJBQUE7QUF5RWhCO0FBdEVBLGdIQUFBO0FBQ0E7RUFDSSx3QkFBQTtFQUEwQiwwQkFBQTtFQUMxQixnQkFBQTtFQUNBLFdBQUE7RUFBYSx1Q0FBQTtFQUNiLFlBQUE7RUFBYyx5QkFBQTtFQUNkLHlCRm1CSztFRW5CZ0IscUJBQUE7RUFDckIsZUFBQTtFQUFpQixvQkFBQTtFQUNqQixrQkFBQTtFQUNBLHVCQUFBO0FBOEVKO0FBM0VBO0VBQ0EsV0FBQTtFQUFhLHVDQUFBO0VBQ2IsWUFBQTtFQUFjLHlCQUFBO0VBQ2QseUJGVVM7RUVWWSxxQkFBQTtFQUNyQixlQUFBO0VBQWlCLG9CQUFBO0VBQ2pCLGtCQUFBO0VBQ0EsaUNBQUE7QUFrRkEiLCJmaWxlIjoic3JjL2FwcC9jb21tb24vdmFsdWUtc2xpZGVyL3ZhbHVlLXNsaWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cblxuQGltcG9ydCBcIi4vYXNzZXRzL3Njc3MvbW9kdWxlcy9fZm9udHMuc2Nzc1wiO1xuJGdhbWVzY29yZS1mYW1pbHk6IFwiRmlndXJpbmVTeW1ib2xUMVwiO1xuJGdhbWVzY29yZS1oaWdobGlnaHQ6ICM1ODU4NThmZjtcbiRnYW1lc2NvcmUtZm9yZWdyb3VuZDogd2hpdGU7XG5cbiRyZWQ6ICNlNDMwMzA7XG4kZ3JlZW46ICMxOWExODc7XG4kbGlnaHQtYmx1ZTogIzAwZmZmZmZmO1xuJGJsdWU6ICMzNjdiZjA7XG4kZGFyay1ibHVlOiAjMjY1YWIxO1xuJG1hcm9vbjogI2I4MTc0YztcbiRwdXJwbGU6ICM4YzQyYWI7XG5cbi8vIE1haW4gT0xHQSBDb2xvciBFbGVtZW50IFZhcmlhYmxlc1xuJHRleHRDb2xvcjogdmFyKC0tdGV4dENvbG9yKTsgLy8gTWFpbiBUZXh0IENvbG9yXG4kdGV4dENvbG9yQXR0ZW50aW9uOiB2YXIoLS10ZXh0Q29sb3JBdHRlbnRpb24pOyAvLyBBdHRlbnRpb24gdGV4dFxuJHRleHRDb2xvclJlbW92ZTogdmFyKC0tdGV4dENvbG9yUmVtb3ZlKTsgLy8gUmVtb3ZlL0RlbGV0ZS9DbG9zZVxuJHRleHRDb2xvckFkZDogdmFyKC0tdGV4dENvbG9yQWRkKTsgLy8gQWRkL0NyZWF0ZS9PcGVuXG4kdGV4dENvbG9yQWN0aXZlOiB2YXIoLS10ZXh0Q29sb3JBY3RpdmUpOyAvLyBBZGQvQ3JlYXRlL09wZW5cbiRiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kKTsgLy8gTWFpbiBiYWNrZ3JvdW5kIENvbG9yXG4kYmdDb250YWluZXI6IHZhcigtLWJnQ29udGFpbmVyKTsgLy8gYmFja2dyb3VuZCBvZiBDb250YWluZXJzXG4kYmdNZW51OiB2YXIoLS1iZ01lbnUpOyAvLyBiYWNrZ3JvdW5kIG9mIE1lbnVzXG4kYmdJdGVtOiB2YXIoLS1iZ0l0ZW0pOyAvLyBiYWNrZ3JvdW5kIG9mIEl0ZW1zXG5cbi8vIENvbnRleHQgTWVudVxuJGJnQ29udGV4dDogdmFyKC0tYmdDb250ZXh0KTsgLy8gYmFja2dyb3VuZCBvZiBDb250ZXh0IE1lbnVcbiR0ZXh0Q29sb3JDb250ZXh0OiB2YXIoLS10ZXh0Q29sb3JDb250ZXh0KTsgLy8gdGV4dCBjb2xvciBDb250ZXh0IE1lbnVcbiRib3JkZXJDb250ZXh0OiB2YXIoLS1ib3JkZXJDb250ZXh0KTsgLy8gYm9yZGVyIENvbnRleHQgTWVudVxuJG92ZXJsYXlDb250ZXh0QmFja2dyb3VuZDogdmFyKFxuICAtLW92ZXJsYXlDb250ZXh0QmFja2dyb3VuZFxuKTsgLy8gQ29udGV4dCBNZW51IE92ZXJsYXkgYmFja2dyb3VuZCBtYWluXG4kb3ZlcmxheUNvbnRleHRCYWNrZ3JvdW5kR3JhZGllbnQ6IHZhcihcbiAgLS1vdmVybGF5Q29udGV4dEJhY2tncm91bmRHcmFkaWVudFxuKTsgLy8gQ29udGV4dCBNZW51IGJhY2tncm91bmQgZ3JhZGllbnRcblxuXG5cbi8qKioqKioqKioqKioqKioqKioqIE1lbnUgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4kbWVCYWNrZ3JvdW5kOiB2YXIoLS1tZUJhY2tncm91bmQpO1xuXG4vKioqKioqKioqKioqKioqKioqKioqKioqIE1lbnUgQ29udHJvbHMgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuJGNzRmlsbDogdmFyKC0tY3NGaWxsKTtcbiRjc0FjY2VudDogdmFyKC0tY3NBY2NlbnQpO1xuJGNzQWNjZW50MjogdmFyKC0tY3NBY2NlbnQyKTtcblxuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBDb250YWluZXIgVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiRnc1RleHRDb2xvcjogdmFyKC0tZ3NUZXh0Q29sb3IpOyAvLyBUZXh0IGNvbG9yIGZvciBnYW1lIHNjb3JlXG4kZ3NCYWNrZ3JvdW5kOiB2YXIoLS1nc0JhY2tncm91bmQpOyAvLyBiYWNrZ3JvdW5kIG9mIENvbnRhaW5lcnNcbiRnc0xpc3RCYWNrZ3JvdW5kOiB2YXIoLS1nc0xpc3RCYWNrZ3JvdW5kKTsgLy8gbGlzdCBiYWNrZ3JvdW5kIG9mIGdhbWUgc2NvcmVcbiRnc0JvcmRlcjogdmFyKC0tZ3NCb3JkZXIpOyAvLyBiYWNrZ3JvdW5kIG9mIE1lbnVzXG4kZ3NUZXh0U2l6ZTogdmFyKC0tZ3NUZXh0U2l6ZSk7IC8vIGJhY2tncm91bmQgb2YgTWVudXNcbiRnc0ZvbnRGYW1pbHk6IHZhcigtLWdzRm9udEZhbWlseSk7IC8vIHNjb3JlIGZvbnRcbiRnc1RhYmxlSXRlbVdpZHRoOiB2YXIoLS1nc1RhYmxlSXRlbVdpZHRoKTsgLy8gd2lkdGggb2Ygc2NvcmUgaXRlbSBpbiB0YWJsZSBsYXlvdXRcbiRnc1RhYmxlUGx5V2lkdGg6IHZhcigtLWdzVGFibGVQbHlXaWR0aCk7IC8vIHdpZHRoIG9mIHBseSBlbGVtZW50IGluIHRhYmxlIGxheW91dFxuXG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIENvbnRhaW5lciBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuJGdzVGV4dENvbG9yTVc6IHZhcigtLWdzVGV4dENvbG9yTVcpOyAvLyBUZXh0IGNvbG9yIGZvciBnYW1lIHNjb3JlXG4kZ3NCYWNrZ3JvdW5kTVc6IHZhcigtLWdzQmFja2dyb3VuZE1XKTsgLy8gYmFja2dyb3VuZCBvZiBDb250YWluZXJzXG4kZ3NCb3JkZXJNVzogdmFyKC0tZ3NCb3JkZXJNVyk7IC8vIGJhY2tncm91bmQgb2YgTWVudXNcbiRnc1RleHRTaXplTVc6IHZhcigtLWdzVGV4dFNpemVNVyk7IC8vIGJhY2tncm91bmQgb2YgTWVudXNcblxuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBDb250YWluZXIgVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiRnc1RleHRDb2xvck1COiB2YXIoLS1nc1RleHRDb2xvck1CKTsgLy8gVGV4dCBjb2xvciBmb3IgZ2FtZSBzY29yZVxuJGdzQmFja2dyb3VuZE1COiB2YXIoLS1nc0JhY2tncm91bmRNQik7IC8vIGJhY2tncm91bmQgb2YgQ29udGFpbmVyc1xuJGdzQm9yZGVyTUI6IHZhcigtLWdzQm9yZGVyTUIpOyAvLyBiYWNrZ3JvdW5kIG9mIE1lbnVzXG4kZ3NUZXh0U2l6ZU1COiB2YXIoLS1nc1RleHRTaXplTUIpOyAvLyBiYWNrZ3JvdW5kIG9mIE1lbnVzXG5cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgSGlnaGxpZ2h0IFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4kZ3NUZXh0Q29sb3JIRzogdmFyKC0tZ3NUZXh0Q29sb3JIRyk7IC8vIFRleHQgY29sb3IgZm9yIGhpZ2hsaWdodFxuJGdzQW5ub3RhdGlvbkNvbG9ySEc6IHZhcigtLWdzQW5ub3RhdGlvbkNvbG9ySEcpOyAvLyBBbm5vdGF0aW9uL0NvbW1lbnQgY29sb3IgZm9yIGhpZ2hsaWdodFxuJGdzQmFja2dyb3VuZEhHOiB2YXIoLS1nc0JhY2tncm91bmRIRyk7IC8vIGJhY2tncm91bmQgZm9yIGhpZ2hsaWdodFxuJGdzQm9yZGVySEc6IHZhcigtLWdzQm9yZGVySEcpOyAvLyBib3JkZXIgZm9yIGhpZ2hsaWdodFxuXG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIEFubm90YXRpb24gVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiRnc1RleHRDb2xvckFOOiB2YXIoLS1nc1RleHRDb2xvckFOKTsgLy8gVGV4dCBjb2xvciBmb3IgaGlnaGxpZ2h0XG4kZ3NCYWNrZ3JvdW5kQU46IHZhcigtLWdzQmFja2dyb3VuZEFOKTsgLy8gYmFja2dyb3VuZCBmb3IgaGlnaGxpZ2h0XG4kZ3NCb3JkZXJBTjogdmFyKC0tZ3NCb3JkZXJBTik7IC8vIGJvcmRlciBmb3IgaGlnaGxpZ2h0XG5cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgVmFyaWF0aW9uIFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4kZ3NUZXh0Q29sb3JWQTogdmFyKC0tZ3NUZXh0Q29sb3JWQSk7IC8vIFRleHQgY29sb3IgZm9yIGhpZ2hsaWdodFxuJGdzQmFja2dyb3VuZFZBOiB2YXIoLS1nc0JhY2tncm91bmRWQSk7IC8vIGJhY2tncm91bmQgZm9yIGhpZ2hsaWdodFxuJGdzQm9yZGVyVkE6IHZhcigtLWdzQm9yZGVyVkEpOyAvLyBib3JkZXIgZm9yIGhpZ2hsaWdodFxuXG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIFBseSBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuJGdzVGV4dENvbG9yUEM6IHZhcigtLWdzVGV4dENvbG9yUEMpOyAvLyBUZXh0IGNvbG9yIGZvciBnYW1lIHNjb3JlIHBseVxuJGdzQmFja2dyb3VuZFBDOiB2YXIoLS1nc0JhY2tncm91bmRQQyk7IC8vIGJhY2tncm91bmQgZm9yIGdhbWUgc2NvcmUgcGx5XG4kZ3NCb3JkZXJQQzogdmFyKC0tZ3NCb3JkZXJQQyk7IC8vIGJvcmRlciBmb3IgZ2FtZSBzY29yZSBwbHlcblxuLyoqKioqKioqKioqKioqKioqKioqIENvbnRyb2wgQ29sb3JzICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiRjc0JhY2tncm91bmQ6IHZhcigtLWNzQmFja2dyb3VuZCk7IC8vIGJhY2tncm91bmQgZm9yIGNvbnRyb2xzXG4kY3NDb2xvcjogdmFyKC0tY3NDb2xvcik7IC8vIGNvbnRyb2xzIGNvbG9yIChmb3JlZ3JvdW5kKVxuXG4vKioqKioqKioqKioqKioqKioqKiogQm9hcmQgQ29sb3JzICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiRib2FyZEJHRGFyazogdmFyKC0tYm9hcmRCR0RhcmspOyAvLyBib2FyZCBkYXJrIHRpbGVcbiRib2FyZEJHTGlnaHQ6IHZhcigtLWJvYXJkQkdMaWdodCk7IC8vIGJvYXJkIGxpZ2h0IHRpbGVcbiRib2FyZExhYmVsTGlnaHQ6IHZhcigtLWJvYXJkTGFiZWxMaWdodCk7IC8vIGJvYXJkIGxpZ2h0IGxhYmVsXG4kYm9hcmRMYWJlbERhcms6IHZhcigtLWJvYXJkTGFiZWxEYXJrKTsgLy8gYm9hcmQgZGFyayBsYWJlbFxuXG5cblxuLyoqKioqKioqKioqKioqKioqKioqIEZvbnQgU2l6ZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuJGdzRm9udFNpemU6IHZhcigtLWdzRm9udFNpemUpOyAvLyBib2FyZCBkYXJrIHRpbGVcbiRnc0ZvbnRTaXplQU46IHZhcigtLWdzRm9udFNpemVBTik7IC8vIGJvYXJkIGxpZ2h0IHRpbGVcbiRnc0ZvbnRTaXplSEc6IHZhcigtLWdzRm9udFNpemVIRyk7IC8vIGJvYXJkIGxpZ2h0IGxhYmVsXG4kZ3NGb250U2l6ZVZBOiB2YXIoLS1nc0ZvbnRTaXplVkEpOyAvLyBib2FyZCBkYXJrIGxhYmVsXG4kZ3NGb250U2l6ZVBDOiB2YXIoLS1nc0ZvbnRTaXplUEMpOyAvLyBib2FyZCBkYXJrIGxhYmVsXG4kaGRyRGF0YUZvbnRTaXplOiB2YXIoLS1oZHJEYXRhRm9udFNpemUpOyAvLyBzaXplIG9mIHBsYXllciBzaG93Y2FzZSBkYXRhXG4kaGRyTmFtZUZvbnRTaXplOiB2YXIoLS1oZHJOYW1lRm9udFNpemUpOyAvLyBzaXplIG9mIHBsYXllciBzaG93Y2FzZSBOYW1lXG4kaGRyVGl0bGVGb250U2l6ZTogdmFyKC0taGRyVGl0bGVGb250U2l6ZSk7IC8vIHNpemUgb2YgcGxheWVyIHNob3djYXNlIGRhdGFcbiRoZHJWYXJpYW50Rm9udFNpemU6IHZhcigtLWhkclZhcmlhbnRGb250U2l6ZSk7IC8vIHNpemUgb2YgcGxheWVyIHNob3djYXNlIE5hbWVcbiRoZHJNYXRjaERhdGFGb250U2l6ZTogdmFyKC0taGRyTWF0Y2hEYXRhRm9udFNpemUpOyAvLyBzaXplIG9mIHBsYXllciBzaG93Y2FzZSBOYW1lXG4kaGRyT3BlbmluZ0ZvbnRTaXplOiB2YXIoLS1oZHJNYXRjaERhdGFGb250U2l6ZSk7IC8vIHNpemUgb2YgcGxheWVyIHNob3djYXNlIE5hbWVcbiRoZHJSZXN1bHRGb250U2l6ZTogdmFyKC0taGRyUmVzdWx0Rm9udFNpemUpOyAvLyBzaXplIG9mIHBsYXllciBzaG93Y2FzZSBOYW1lXG4kaGRyUm91bmRGb250U2l6ZTogdmFyKC0taGRyUm91bmRGb250U2l6ZSk7IC8vIHNpemUgb2YgcGxheWVyIHNob3djYXNlIE5hbWVcblxuLy8gR2VuZXJhbCBzdHVmZlxuJHRleHQtY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xuJGJnLW91dGVyOiB2YXIoLS1iZy1vdXRlcik7XG4kYmctaW5uZXI6IHZhcigtLWJnLWlubmVyKTtcblxuJGJnLWNvbG9yOiAjZjJmM2Y3O1xuJGZnLWNvbG9yOiAjMzgzYTQxO1xuXG4kZ2xvdy1zaGFkb3c6IDAgMCAwLjVlbSB0cmFuc3BhcmVudGl6ZSgkYmx1ZSwgMC4zKTtcblxuOnJvb3Qge1xuICAtLWJnLWNvbG9yOiAjeyRiZy1jb2xvcn07XG4gIC0tZmctY29sb3I6ICN7JGZnLWNvbG9yfTtcblxuICAtLXJlZDogI3skcmVkfTtcbiAgLS1ncmVlbjogI3skZ3JlZW59O1xuICAtLWJsdWU6ICN7JGJsdWV9O1xuICAtLWRhcmstYmx1ZTogI3skZGFyay1ibHVlfTtcbiAgLS1tYXJvb246ICN7JG1hcm9vbn07XG4gIC0tcHVycGxlOiAjeyRwdXJwbGV9O1xufVxuXG4vLyA6Oi1tb3otZm9jdXMtaW5uZXIsXG4vLyA6LW1vei1mb2N1c3Jpbmcge1xuLy8gICBib3JkZXI6IDA7XG4vLyAgIGNvbG9yOiB0cmFuc3BhcmVudDtcbi8vICAgdGV4dC1zaGFkb3c6IDAgMCAwICRmZy1jb2xvcjtcbi8vIH1cblxuLy8gOjpzZWxlY3Rpb24sXG4vLyA6Oi1tb3otc2VsZWN0aW9uIHtcbi8vICAgY29sb3I6IHdoaXRlO1xuLy8gICBiYWNrZ3JvdW5kOiBibGFjaztcbi8vIH1cblxuLy8gKiB7XG4vLyAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4vLyAgIG91dGxpbmU6IG5vbmU7XG4vLyAgIHVzZXItc2VsZWN0OiBub25lO1xuLy8gICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XG4vLyAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4vLyAgIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTtcbi8vICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbi8vICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuLy8gICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4vLyAgIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbi8vICAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApICFpbXBvcnRhbnQ7XG4vLyAgIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcbi8vICAgY3Vyc29yOiBkZWZhdWx0O1xuLy8gICBsZXR0ZXItc3BhY2luZzogMDtcbi8vIH1cblxuLy8gLnNlbGVjdGFibGUsXG4vLyAuc2VsZWN0YWJsZSAqIHtcbi8vICAgY3Vyc29yOiBhdXRvO1xuLy8gICB1c2VyLXNlbGVjdDogdGV4dDtcbi8vICAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiB0ZXh0O1xuLy8gICAtd2Via2l0LXVzZXItc2VsZWN0OiB0ZXh0O1xuLy8gICAta2h0bWwtdXNlci1zZWxlY3Q6IHRleHQ7XG4vLyAgIC1tb3otdXNlci1zZWxlY3Q6IHRleHQ7XG4vLyAgIC1tcy11c2VyLXNlbGVjdDogdGV4dDtcbi8vIH1cblxuLy8gaHRtbCxcbi8vIGJvZHkge1xuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmctY29sb3I7XG4vLyAgIGNvbG9yOiAkZmctY29sb3I7XG4vLyAgIG1hcmdpbjogMDtcbi8vICAgcGFkZGluZzogMDtcbi8vICAgZm9udC1zaXplOiAxMHB0O1xuLy8gICBoZWlnaHQ6IDEwMCU7XG4vLyAgIG92ZXJmbG93OiBhdXRvO1xuLy8gfVxuXG4vLyAud2l0aC1zaGFkb3cge1xuLy8gICBib3gtc2hhZG93OiA2cHggNnB4IDEwcHggdHJhbnNwYXJlbnRpemUoYmxhY2ssIDAuOSksIC02cHggLTZweCAxMHB4IHdoaXRlO1xuLy8gfVxuXG4vLyAub3V0c2V0IHtcbi8vICAgQGV4dGVuZCAud2l0aC1zaGFkb3c7XG5cbi8vICAgYm9yZGVyLXJhZGl1czogMTBweDtcbi8vICAgYmFja2dyb3VuZDogJGJnLWNvbG9yO1xuLy8gfVxuXG4vLyAuaW5zZXQge1xuLy8gICBib3JkZXItcmFkaXVzOiAxMHB4O1xuLy8gICBib3gtc2hhZG93OiAwIDAgdHJhbnNwYXJlbnQsIDAgMCB0cmFuc3BhcmVudCxcbi8vICAgICBpbnNldCAzcHggM3B4IDVweCB0cmFuc3BhcmVudGl6ZShibGFjaywgMC45KSwgaW5zZXQgLTNweCAtM3B4IDVweCB3aGl0ZTtcbi8vICAgYmFja2dyb3VuZDogbGlnaHRlbigkYmctY29sb3IsIDIlKTtcbi8vIH1cblxuLy8gLnBhcGVyIHtcbi8vICAgQGV4dGVuZCAub3V0c2V0O1xuLy8gICBwYWRkaW5nOiAxMHB4IDIwcHggMjBweDtcbi8vICAgbWFyZ2luLXRvcDogMjBweDtcbi8vICAgbWluLWhlaWdodDogMTAwcHg7XG4vLyAgIGZvbnQtc2l6ZTogMS4yZW07XG4vLyAgIGJhY2tncm91bmQ6ICRiZy1jb2xvcjtcbi8vIH1cblxuLy8gc2VjdGlvbixcbi8vIGFydGljbGUsXG4vLyAuc2VjdGlvbixcbi8vIC5hcnRpY2xlLFxuLy8gLnBhcGVyIHtcbi8vICAgbGluZS1oZWlnaHQ6IDJlbTtcbi8vICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuLy8gICB3b3JkLWJyZWFrOiBub3JtYWw7XG4vLyAgIGxpbmUtaGVpZ2h0OiAyZW07XG4vLyB9XG5cbi8vIGlucHV0W3R5cGU9XCJ0ZXh0XCJdLFxuLy8gaW5wdXRbdHlwZT1cInNlYXJjaFwiXSxcbi8vIGlucHV0W3R5cGU9XCJ0ZWxcIl0sXG4vLyBpbnB1dFt0eXBlPVwidXJsXCJdLFxuLy8gaW5wdXRbdHlwZT1cImVtYWlsXCJdLFxuLy8gaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJdLFxuLy8gaW5wdXRbdHlwZT1cImRhdGVcIl0sXG4vLyBpbnB1dFt0eXBlPVwibW9udGhcIl0sXG4vLyBpbnB1dFt0eXBlPVwid2Vla1wiXSxcbi8vIGlucHV0W3R5cGU9XCJ0aW1lXCJdLFxuLy8gaW5wdXRbdHlwZT1cIm51bWJlclwiXSxcbi8vIGlucHV0W3R5cGU9XCJjb2xvclwiXSxcbi8vIHNlbGVjdCxcbi8vIHRleHRhcmVhIHtcbi8vICAgYm9yZGVyOiAwO1xuLy8gICBiYWNrZ3JvdW5kOiAkYmctY29sb3I7XG4vLyAgIGNvbG9yOiAkZmctY29sb3I7XG4vLyAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4vLyAgIHBhZGRpbmc6IDAgMS4yNWVtO1xuLy8gICBsaW5lLWhlaWdodDogMS4yNWVtO1xuLy8gICBoZWlnaHQ6IDMuNWVtO1xuLy8gICBtYXJnaW46IDEwcHggMDtcbi8vICAgZm9udC1zaXplOiAxLjFyZW07XG4vLyAgIGN1cnNvcjogdGV4dDtcbi8vICAgdXNlci1zZWxlY3Q6IHRleHQ7XG4vLyAgIC13ZWJraXQtdG91Y2gtY2FsbG91dDogdGV4dDtcbi8vICAgLXdlYmtpdC11c2VyLXNlbGVjdDogdGV4dDtcbi8vICAgLWtodG1sLXVzZXItc2VsZWN0OiB0ZXh0O1xuLy8gICAtbW96LXVzZXItc2VsZWN0OiB0ZXh0O1xuLy8gICAtbXMtdXNlci1zZWxlY3Q6IHRleHQ7XG4vLyAgIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC4ycztcblxuLy8gICAmOm5vdChzZWxlY3QpIHtcbi8vICAgICBAZXh0ZW5kIC5pbnNldDtcblxuLy8gICAgICY6Zm9jdXMge1xuLy8gICAgICAgQGV4dGVuZCAub3V0c2V0O1xuLy8gICAgIH1cbi8vICAgfVxuLy8gfVxuXG4vLyB0ZXh0YXJlYSB7XG4vLyAgIGhlaWdodDogMzUwcHg7XG4vLyAgIHBhZGRpbmc6IDEuMjVlbTtcbi8vIH1cblxuLy8gc2VsZWN0IHtcbi8vICAgQGV4dGVuZCAub3V0c2V0O1xuXG4vLyAgIGN1cnNvcjogcG9pbnRlcjtcbi8vICAgYmFja2dyb3VuZDogdXJsKGRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjJaWEp6YVc5dVBTSXhMakVpSUhacFpYZENiM2c5SWpBZ01DQXhPU0F4T1NJZ2VHMXNibk05SW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTHpJd01EQXZjM1puSWo0OFp5QjBjbUZ1YzJadmNtMDlJbTFoZEhKcGVDZ3VNRE0wSURBZ01DQXVNRE0wSUMwMkxqZ2dNUzQzWlMwMUtTSWdjM1I1YkdVOUltWnBiR3c2SXpkaU4yVTRZeUkrUEhCaGRHZ2daRDBpYlRRNE1DQXpORFF0TWpFeExUSXhNbU10TVRZdE1UWXROREV0TVRZdE5UY2dNQzB4TmlBeE5pMHhOaUEwTWlBd0lEVTNiREl6T0NBeU16bGpPQzQwSURndU5TQXlNQ0F4TWlBek1TQXhNaUF4TVNBd0xqVTJJREl5TFRNdU1pQXpNUzB4TW13eU16Z3RNak01WXpFMkxURTJJREUyTFRReUlEQXROVGR6TFRReExURTJMVFUzSURCNklpQnpkSGxzWlQwaVptbHNiRG9qTjJJM1pUaGpJaTgrUEM5blBqd3ZjM1puUGdvPSlcbi8vICAgICBuby1yZXBlYXQgcmlnaHQgMWVtIGNlbnRlcjtcbi8vICAgYmFja2dyb3VuZC1zaXplOiAxLjJlbTtcbi8vICAgcGFkZGluZy1yaWdodDogM2VtO1xuLy8gfVxuXG4vLyBpbnB1dDo6cGxhY2Vob2xkZXIsXG4vLyB0ZXh0YXJlYTo6cGxhY2Vob2xkZXIge1xuLy8gICBvcGFjaXR5OiAxO1xuLy8gICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnM7XG4vLyAgIGNvbG9yOiBpbmhlcml0O1xuLy8gfVxuXG4vLyBpbnB1dDpmb2N1czo6cGxhY2Vob2xkZXIsXG4vLyB0ZXh0YXJlYTpmb2N1czo6cGxhY2Vob2xkZXIge1xuLy8gICBvcGFjaXR5OiAwLjI7XG4vLyB9XG5cbi8vIGlucHV0Oi1tcy1pbnB1dC1wbGFjZWhvbGRlcixcbi8vIHRleHRhcmVhOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4vLyAgIG9wYWNpdHk6IDE7XG4vLyAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycztcbi8vICAgY29sb3I6IGluaGVyaXQ7XG4vLyB9XG5cbi8vIGlucHV0OmZvY3VzOi1tcy1pbnB1dC1wbGFjZWhvbGRlcixcbi8vIHRleHRhcmVhOmZvY3VzOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4vLyAgIG9wYWNpdHk6IDAuMjtcbi8vIH1cblxuLy8gaW5wdXRbdHlwZT1cInNlYXJjaFwiXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbixcbi8vIGlucHV0W3R5cGU9XCJzZWFyY2hcIl06Oi13ZWJraXQtc2VhcmNoLWNhbmNlbC1idXR0b24sXG4vLyBpbnB1dFt0eXBlPVwic2VhcmNoXCJdOjotd2Via2l0LXNlYXJjaC1yZXN1bHRzLWJ1dHRvbixcbi8vIGlucHV0W3R5cGU9XCJzZWFyY2hcIl06Oi13ZWJraXQtc2VhcmNoLXJlc3VsdHMtZGVjb3JhdGlvbiB7XG4vLyAgIGRpc3BsYXk6IG5vbmU7XG4vLyB9XG5cbi8vIGJ1dHRvbixcbi8vIGlucHV0W3R5cGU9XCJidXR0b25cIl0sXG4vLyBpbnB1dFt0eXBlPVwic3VibWl0XCJdLFxuLy8gaW5wdXRbdHlwZT1cInJlc2V0XCJdIHtcbi8vICAgQGV4dGVuZCAub3V0c2V0O1xuXG4vLyAgIGJvcmRlcjogMDtcbi8vICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4vLyAgIHBhZGRpbmc6IDEwcHggMDtcbi8vICAgd2lkdGg6IDhlbTtcbi8vICAgdGV4dC1hbGlnbjogY2VudGVyO1xuLy8gICBjdXJzb3I6IHBvaW50ZXI7XG4vLyAgIGNvbG9yOiBpbmhlcml0O1xuLy8gICBmb250LXNpemU6IDEuMXJlbTtcbi8vICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYmFja2dyb3VuZC1jb2xvciwgYm94LXNoYWRvdztcbi8vICAgdHJhbnNpdGlvbi1kZWxheTogMC4ycztcbi8vICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4ycztcblxuLy8gICAmLmFjdGl2ZSxcbi8vICAgJjphY3RpdmUge1xuLy8gICAgIEBleHRlbmQgLmluc2V0O1xuXG4vLyAgICAgdHJhbnNpdGlvbi1kZWxheTogMHM7XG4vLyAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4xcztcbi8vICAgfVxuXG4vLyAgIEBlYWNoICRuYW1lLCAkY29sb3IgaW4gKFwicmVkXCI6ICRyZWQsIFwiZ3JlZW5cIjogJGdyZWVuLCBcImJsdWVcIjogJGJsdWUpIHtcbi8vICAgICBAYXQtcm9vdCAuI3skbmFtZX0tYnV0dG9uLFxuLy8gICAgICAgJi4jeyRuYW1lfS1idXR0b24ge1xuLy8gICAgICAgQGV4dGVuZCBidXR0b247XG5cbi8vICAgICAgICRfYmctaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsICRjb2xvciAzMCUsIGxpZ2h0ZW4oJGNvbG9yLCA2JSkgODAlKTtcblxuLy8gICAgICAgY29sb3I6IHdoaXRlO1xuLy8gICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4vLyAgICAgICB0ZXh0LXNoYWRvdzogMCAwLjFlbSAwLjFlbSB0cmFuc3BhcmVudGl6ZShibGFjaywgMC4zKTtcbi8vICAgICAgIGJhY2tncm91bmQ6ICRfYmctaW1hZ2U7XG4vLyAgICAgICBib3gtc2hhZG93OiAwIDAgMC41ZW0gdHJhbnNwYXJlbnRpemUoJGNvbG9yLCAwLjMpLCAwIDAgdHJhbnNwYXJlbnQsXG4vLyAgICAgICAgIGluc2V0IDAgLTVweCAwIHRyYW5zcGFyZW50aXplKGJsYWNrLCAwLjk1KSxcbi8vICAgICAgICAgaW5zZXQgMCAycHggMCB0cmFuc3BhcmVudGl6ZSh3aGl0ZSwgMC44KTtcbi8vICAgICAgIGJvcmRlci1yYWRpdXM6IDZweCA2cHggOHB4IDhweDtcbi8vICAgICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGJveC1zaGFkb3csIGJvcmRlci1yYWRpdXM7XG5cbi8vICAgICAgICYuYWN0aXZlLFxuLy8gICAgICAgJjphY3RpdmUge1xuLy8gICAgICAgICBiYWNrZ3JvdW5kOiAkX2JnLWltYWdlO1xuLy8gICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4vLyAgICAgICAgIGJveC1zaGFkb3c6IDAgMCB0cmFuc3BhcmVudCwgMCAwIHRyYW5zcGFyZW50LFxuLy8gICAgICAgICAgIGluc2V0IDAgMnB4IDVweCAycHggdHJhbnNwYXJlbnRpemUoYmxhY2ssIDAuOCk7XG4vLyAgICAgICB9XG4vLyAgICAgfVxuLy8gICB9XG4vLyB9XG5cbi8vIGxhYmVsIHtcbi8vICAgJixcbi8vICAgJiAqIHtcbi8vICAgICBjdXJzb3I6IHBvaW50ZXI7XG4vLyAgIH1cblxuLy8gICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4vLyAgIHBhZGRpbmc6IDAuNTZlbSAwO1xuLy8gfVxuXG4vLyBhIHtcbi8vICAgJixcbi8vICAgJjpsaW5rLFxuLy8gICAmOnZpc2l0ZWQsXG4vLyAgICY6aG92ZXIgJjphY3RpdmUge1xuLy8gICAgICYsXG4vLyAgICAgJiAqIHtcbi8vICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbi8vICAgICB9XG5cbi8vICAgICBmb250LXdlaWdodDogYm9sZDtcbi8vICAgICBjb2xvcjogJGJsdWU7XG4vLyAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4vLyAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuLy8gICB9XG4vLyB9XG5cbi8vIGgxLFxuLy8gaDIsXG4vLyBoMyxcbi8vIGg0LFxuLy8gaDUsXG4vLyBoNiB7XG4vLyAgIGxpbmUtaGVpZ2h0OiAxLjVlbTtcbi8vIH1cblxuLy8gaDEge1xuLy8gICBmb250LXNpemU6IDRlbTtcbi8vICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4vLyAgIG1hcmdpbjogMC43ZW0gMDtcbi8vIH1cblxuLy8gaDIge1xuLy8gICBmb250LXNpemU6IDNlbTtcbi8vICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4vLyAgIG1hcmdpbjogMC44ZW0gMDtcbi8vIH1cblxuLy8gaDMge1xuLy8gICBmb250LXNpemU6IDIuNWVtO1xuLy8gICBmb250LXdlaWdodDogbGlnaHRlcjtcbi8vICAgbWFyZ2luOiAwLjllbSAwO1xuLy8gfVxuXG4vLyBoNCB7XG4vLyAgIGZvbnQtc2l6ZTogMmVtO1xuLy8gICBmb250LXdlaWdodDogbGlnaHRlcjtcbi8vICAgbWFyZ2luOiAxZW0gMDtcbi8vIH1cblxuLy8gaDUge1xuLy8gICBtYXJnaW46IDAuNWVtIDA7XG4vLyAgIGZvbnQtc2l6ZTogMS4yZW07XG4vLyAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4vLyB9XG5cbi8vIGg2IHtcbi8vICAgbWFyZ2luOiAxZW0gMCAxZW0gMS40ZW07XG4vLyAgIGZvbnQtc2l6ZTogMWVtO1xuLy8gICBmb250LXdlaWdodDogYm9sZDtcbi8vIH1cblxuLy8gaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdLFxuLy8gaW5wdXRbdHlwZT1cInJhZGlvXCJdIHtcbi8vICAgJF9ib3JkZXItd2lkdGg6IDAuMTVlbTtcbi8vICAgJF9ib3gtc2hhZG93OiAycHggMnB4IDNweCB0cmFuc3BhcmVudGl6ZShibGFjaywgMC44KSwgLTJweCAtMnB4IDNweCB3aGl0ZSxcbi8vICAgICBpbnNldCAxcHggMXB4IDJweCB0cmFuc3BhcmVudGl6ZShibGFjaywgMC44KSwgaW5zZXQgLTFweCAtMXB4IDJweCB3aGl0ZTtcbi8vICAgZm9udC1zaXplOiAxZW07XG4vLyAgIGN1cnNvcjogcG9pbnRlcjtcbi8vICAgaGVpZ2h0OiAxLjJlbTtcbi8vICAgd2lkdGg6IDEuMmVtO1xuLy8gICBtYXJnaW46IDAgMC4zZW07XG4vLyAgIGJveC1zaGFkb3c6ICRfYm94LXNoYWRvdztcbi8vICAgYm9yZGVyOiAkX2JvcmRlci13aWR0aCBzb2xpZCAkYmctY29sb3I7XG4vLyAgIHZlcnRpY2FsLWFsaWduOiB0ZXh0LWJvdHRvbTtcbi8vICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYmFja2dyb3VuZCwgYm94LXNoYWRvdztcbi8vICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4ycztcblxuLy8gICAmOmFjdGl2ZSB7XG4vLyAgICAgYm94LXNoYWRvdzogJF9ib3gtc2hhZG93LCBpbnNldCAwIDAuMWVtIDAuMjVlbSB0cmFuc3BhcmVudGl6ZShibGFjaywgMC44KTtcbi8vICAgfVxuXG4vLyAgICY6Y2hlY2tlZCB7XG4vLyAgICAgYm9yZGVyLXdpZHRoOiAwLjFlbTtcbi8vICAgICBib3JkZXItY29sb3I6IGRhcmtlbigkYmx1ZSwgMTAlKTtcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmx1ZTtcbi8vICAgfVxuLy8gfVxuXG4vLyBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0ge1xuLy8gICBib3JkZXItcmFkaXVzOiAyNSU7XG5cbi8vICAgJjpjaGVja2VkIHtcbi8vICAgICBib3gtc2hhZG93OiAkZ2xvdy1zaGFkb3csIGluc2V0IDAgLTAuMWVtIDAgdHJhbnNwYXJlbnRpemUoYmxhY2ssIDAuOCksXG4vLyAgICAgICBpbnNldCAwIDAuMWVtIDAuMWVtIHRyYW5zcGFyZW50aXplKHdoaXRlLCAwLjgpO1xuLy8gICB9XG4vLyB9XG5cbi8vIGlucHV0W3R5cGU9XCJyYWRpb1wiXSB7XG4vLyAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG5cbi8vICAgJjpjaGVja2VkIHtcbi8vICAgICBib3gtc2hhZG93OiAkZ2xvdy1zaGFkb3c7XG4vLyAgICAgYm94LXNoYWRvdzogJGdsb3ctc2hhZG93LCBpbnNldCAwIDAuMTJlbSAwLjFlbSB0cmFuc3BhcmVudGl6ZSh3aGl0ZSwgMC43NSk7XG4vLyAgICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMC4xNWVtO1xuLy8gICB9XG4vLyB9XG5cbi8vIC5jaGVja3RleHQge1xuLy8gICB3aWR0aDogYXV0bztcbi8vICAgbWFyZ2luOiAwLjVlbTtcblxuLy8gICBpbnB1dCB7XG4vLyAgICAgZGlzcGxheTogbm9uZTtcblxuLy8gICAgICsgc3BhbiB7XG4vLyAgICAgICBAZXh0ZW5kIGJ1dHRvbjtcblxuLy8gICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4vLyAgICAgICBwYWRkaW5nOiAxZW07XG4vLyAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwcztcbi8vICAgICB9XG5cbi8vICAgICAmOmNoZWNrZWQgKyBzcGFuIHtcbi8vICAgICAgIEBleHRlbmQgLmJsdWUtYnV0dG9uO1xuXG4vLyAgICAgICBwYWRkaW5nOiAxZW07XG4vLyAgICAgfVxuLy8gICB9XG4vLyB9XG5cbi8vIC5zd2l0Y2gge1xuLy8gICAkX2hlaWdodDogMnJlbTtcbi8vICAgJF93aWR0aDogOHJlbTtcbi8vICAgJF9oYW5kbGUtd2lkdGg6ICRfaGVpZ2h0O1xuLy8gICAkX2hhbmRsZS10cmFuc2xhdGlvbjogJF93aWR0aCAtICRfaGFuZGxlLXdpZHRoO1xuXG4vLyAgIGhlaWdodDogJF9oZWlnaHQ7XG4vLyAgIHdpZHRoOiAkX3dpZHRoO1xuLy8gICBwYWRkaW5nOiAwO1xuLy8gICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbi8vICAgaW5wdXQge1xuLy8gICAgIGRpc3BsYXk6IG5vbmU7XG5cbi8vICAgICArIGRpdiB7XG4vLyAgICAgICBoZWlnaHQ6IDEwMCU7XG4vLyAgICAgICB3aWR0aDogMTAwJTtcbi8vICAgICAgIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xuLy8gICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4vLyAgICAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBib3gtc2hhZG93LCBiYWNrZ3JvdW5kLWNvbG9yO1xuLy8gICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4ycztcbi8vICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuMnM7XG4vLyAgICAgICBib3gtc2hhZG93OiAzcHggM3B4IDJweCAtMnB4IHRyYW5zcGFyZW50aXplKGJsYWNrLCAwLjkpLFxuLy8gICAgICAgICBpbnNldCAycHggMnB4IDJweCAxcHggdHJhbnNwYXJlbnRpemUoYmxhY2ssIDAuOSksXG4vLyAgICAgICAgIGluc2V0IC0ycHggLTJweCAxcHggd2hpdGU7XG5cbi8vICAgICAgICY6OmJlZm9yZSB7XG4vLyAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4vLyAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuLy8gICAgICAgICBoZWlnaHQ6IGNhbGMoI3skX2hhbmRsZS13aWR0aH0gKyA0cHgpO1xuLy8gICAgICAgICB3aWR0aDogY2FsYygjeyRfaGFuZGxlLXdpZHRofSArIDRweCk7XG4vLyAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4vLyAgICAgICAgIGJvcmRlcjogc29saWQgd2hpdGUgM3B4O1xuLy8gICAgICAgICBiYWNrZ3JvdW5kOiAkYmx1ZTtcbi8vICAgICAgICAgYm94LXNoYWRvdzogMCAzcHggMTBweCB0cmFuc3BhcmVudGl6ZShibGFjaywgMC44KSxcbi8vICAgICAgICAgICBpbnNldCAwIC0xcHggM3B4IHRyYW5zcGFyZW50aXplKGJsYWNrLCAwLjkpO1xuLy8gICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNnB4KTtcbi8vICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnM7XG4vLyAgICAgICB9XG4vLyAgICAgfVxuXG4vLyAgICAgJjpjaGVja2VkICsgZGl2IHtcbi8vICAgICAgIGJhY2tncm91bmQ6ICRibHVlO1xuLy8gICAgICAgYm94LXNoYWRvdzogJGdsb3ctc2hhZG93LCBpbnNldCAwIDJweCAycHggMnB4IHRyYW5zcGFyZW50aXplKGJsYWNrLCAwLjcpLFxuLy8gICAgICAgICBpbnNldCAwIDAgdHJhbnNwYXJlbnQ7XG5cbi8vICAgICAgICY6OmJlZm9yZSB7XG4vLyAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKCRfaGFuZGxlLXRyYW5zbGF0aW9uLCAtNnB4KTtcbi8vICAgICAgIH1cbi8vICAgICB9XG4vLyAgIH1cbi8vIH1cblxuLy8gaHIge1xuLy8gICBAZXh0ZW5kIC5pbnNldDtcbi8vICAgd2lkdGg6IDcyJTtcbi8vICAgaGVpZ2h0OiA4cHg7XG4vLyAgIGZsb2F0OiByaWdodDtcbi8vICAgYm9yZGVyOiAwO1xuLy8gfVxuXG4vLyBjb2RlLFxuLy8gcHJlIHtcbi8vICAgcGFkZGluZzogMC41ZW0gMWVtO1xuLy8gICBib3JkZXItcmFkaXVzOiA0cHg7XG4vLyAgIG92ZXJmbG93OiBhdXRvO1xuLy8gICBib3gtc2hhZG93OiAwIDVweCAzMHB4IDAgdHJhbnNwYXJlbnRpemUoYmxhY2ssIDAuOTUpO1xuLy8gfVxuXG4vLyBjb2RlIHtcbi8vICAgYmFja2dyb3VuZDogI2U2ZTZlNjtcbi8vIH1cblxuLy8gcHJlIHtcbi8vICAgYmFja2dyb3VuZDogd2hpdGU7XG4vLyAgIG1hcmdpbjogNGVtIDA7XG4vLyB9XG5cbi8vIGNvZGUsXG4vLyBwcmUge1xuLy8gICAmLFxuLy8gICAmICoge1xuLy8gICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuLy8gICAgIGxpbmUtaGVpZ2h0OiAyZW07XG4vLyAgICAgY3Vyc29yOiBhdXRvO1xuLy8gICAgIHVzZXItc2VsZWN0OiB0ZXh0O1xuLy8gICAgIC13ZWJraXQtdG91Y2gtY2FsbG91dDogdGV4dDtcbi8vICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiB0ZXh0O1xuLy8gICAgIC1raHRtbC11c2VyLXNlbGVjdDogdGV4dDtcbi8vICAgICAtbW96LXVzZXItc2VsZWN0OiB0ZXh0O1xuLy8gICAgIC1tcy11c2VyLXNlbGVjdDogdGV4dDtcbi8vICAgfVxuLy8gfVxuXG4vLyBibG9ja3F1b3RlIHtcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4vLyAgIHBhZGRpbmc6IDAuNWVtIDFlbTtcbi8vICAgYm9yZGVyLXJhZGl1czogNHB4O1xuLy8gICBib3gtc2hhZG93OiAwIDVweCAzMHB4IDAgdHJhbnNwYXJlbnRpemUoYmxhY2ssIDAuOTUpO1xuLy8gICBib3JkZXItbGVmdDogNnB4IHNvbGlkICRibHVlO1xuLy8gfVxuIiwiQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdDYXZlYXQnO1xuICAgIHNyYzogdXJsKCcuLi8uLi9mb250cy9Cb2xkL0NhdmVhdC1Cb2xkLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxuICAgICAgICB1cmwoJy4uLy4uL2ZvbnRzL0JvbGQvQ2F2ZWF0LUJvbGQud29mZicpIGZvcm1hdCgnd29mZicpO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LWRpc3BsYXk6IHN3YXA7XG59XG5cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnQ2F2ZWF0JztcbiAgICBzcmM6IHVybCgnLi4vLi4vZm9udHMvUmVndWxhci9DYXZlYXQtUmVndWxhci53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcbiAgICAgICAgdXJsKCcuLi8uLi9mb250cy9SZWd1bGFyL0NhdmVhdC1SZWd1bGFyLndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LWRpc3BsYXk6IHN3YXA7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ0ZpZ3VyaW5lU3ltYm9sVDEnO1xuICBzcmM6IHVybCgnLi4vLi4vZm9udHMvM3JkIFBhcnR5L0NoZXNzVmFyaWFudHMvRmlndXJpbmVTeW1ib2xUMUJvbGQud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXG4gICAgICB1cmwoJy4uLy4uL2ZvbnRzLzNyZCBQYXJ0eS9DaGVzc1ZhcmlhbnRzL0ZpZ3VyaW5lU3ltYm9sVDFCb2xkLndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdGaWd1cmluZVN5bWJvbFQxJztcbiAgc3JjOiB1cmwoJy4uLy4uL2ZvbnRzLzNyZCBQYXJ0eS9DaGVzc1ZhcmlhbnRzL0ZpZ3VyaW5lU3ltYm9sVDEud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXG4gICAgICB1cmwoJy4uLy4uL2ZvbnRzLzNyZCBQYXJ0eS9DaGVzc1ZhcmlhbnRzL0ZpZ3VyaW5lU3ltYm9sVDEud29mZicpIGZvcm1hdCgnd29mZicpO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnU2FuY3R1YXJ5UGxheWdyb3VuZCc7XG4gIHNyYzogdXJsKCcuLi8uLi9mb250cy8zcmQgUGFydHkvU2FuY3R1YXJ5UGxheWdyb3VuZC53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcbiAgICAgIHVybCgnLi4vLi4vZm9udHMvM3JkIFBhcnR5L1NhbmN0dWFyeVBsYXlncm91bmQud29mZicpIGZvcm1hdCgnd29mZicpO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbn1cblxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdBbWl0YSc7XG4gIHNyYzogdXJsKCcuLi8uLi9mb250cy8zcmQgUGFydHkvQW1pdGEvQW1pdGEtUmVndWxhci53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcbiAgICAgIHVybCgnLi4vLi4vZm9udHMvM3JkIFBhcnR5L0FtaXRhL0FtaXRhLVJlZ3VsYXIud29mZjInKSBmb3JtYXQoJ3dvZmYnKTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG59IiwiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkNhdmVhdFwiO1xuICBzcmM6IHVybChcIi4uLy4uL2ZvbnRzL0JvbGQvQ2F2ZWF0LUJvbGQud29mZjJcIikgZm9ybWF0KFwid29mZjJcIiksIHVybChcIi4uLy4uL2ZvbnRzL0JvbGQvQ2F2ZWF0LUJvbGQud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiQ2F2ZWF0XCI7XG4gIHNyYzogdXJsKFwiLi4vLi4vZm9udHMvUmVndWxhci9DYXZlYXQtUmVndWxhci53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKSwgdXJsKFwiLi4vLi4vZm9udHMvUmVndWxhci9DYXZlYXQtUmVndWxhci53b2ZmXCIpIGZvcm1hdChcIndvZmZcIik7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkZpZ3VyaW5lU3ltYm9sVDFcIjtcbiAgc3JjOiB1cmwoXCIuLi8uLi9mb250cy8zcmQgUGFydHkvQ2hlc3NWYXJpYW50cy9GaWd1cmluZVN5bWJvbFQxQm9sZC53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKSwgdXJsKFwiLi4vLi4vZm9udHMvM3JkIFBhcnR5L0NoZXNzVmFyaWFudHMvRmlndXJpbmVTeW1ib2xUMUJvbGQud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiRmlndXJpbmVTeW1ib2xUMVwiO1xuICBzcmM6IHVybChcIi4uLy4uL2ZvbnRzLzNyZCBQYXJ0eS9DaGVzc1ZhcmlhbnRzL0ZpZ3VyaW5lU3ltYm9sVDEud29mZjJcIikgZm9ybWF0KFwid29mZjJcIiksIHVybChcIi4uLy4uL2ZvbnRzLzNyZCBQYXJ0eS9DaGVzc1ZhcmlhbnRzL0ZpZ3VyaW5lU3ltYm9sVDEud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJTYW5jdHVhcnlQbGF5Z3JvdW5kXCI7XG4gIHNyYzogdXJsKFwiLi4vLi4vZm9udHMvM3JkIFBhcnR5L1NhbmN0dWFyeVBsYXlncm91bmQud29mZjJcIikgZm9ybWF0KFwid29mZjJcIiksIHVybChcIi4uLy4uL2ZvbnRzLzNyZCBQYXJ0eS9TYW5jdHVhcnlQbGF5Z3JvdW5kLndvZmZcIikgZm9ybWF0KFwid29mZlwiKTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiQW1pdGFcIjtcbiAgc3JjOiB1cmwoXCIuLi8uLi9mb250cy8zcmQgUGFydHkvQW1pdGEvQW1pdGEtUmVndWxhci53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKSwgdXJsKFwiLi4vLi4vZm9udHMvM3JkIFBhcnR5L0FtaXRhL0FtaXRhLVJlZ3VsYXIud29mZjJcIikgZm9ybWF0KFwid29mZlwiKTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG59XG4vKioqKioqKioqKioqKioqKioqKiBNZW51ICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKioqKioqKiBNZW51IENvbnRyb2xzICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgQ29udGFpbmVyIFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIENvbnRhaW5lciBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBDb250YWluZXIgVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgSGlnaGxpZ2h0IFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIEFubm90YXRpb24gVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgVmFyaWF0aW9uIFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIFBseSBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKioqIENvbnRyb2wgQ29sb3JzICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqKiBCb2FyZCBDb2xvcnMgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKioqIEZvbnQgU2l6ZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuOnJvb3Qge1xuICAtLWJnLWNvbG9yOiAjZjJmM2Y3O1xuICAtLWZnLWNvbG9yOiAjMzgzYTQxO1xuICAtLXJlZDogI2U0MzAzMDtcbiAgLS1ncmVlbjogIzE5YTE4NztcbiAgLS1ibHVlOiAjMzY3YmYwO1xuICAtLWRhcmstYmx1ZTogIzI2NWFiMTtcbiAgLS1tYXJvb246ICNiODE3NGM7XG4gIC0tcHVycGxlOiAjOGM0MmFiO1xufVxuXG4ub2xnYS1zbGlkZXIge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIC8qIE92ZXJyaWRlIGRlZmF1bHQgQ1NTIHN0eWxlcyAqL1xuICBhcHBlYXJhbmNlOiBub25lO1xuICBsZWZ0OiA1JTtcbiAgd2lkdGg6IDkwJTtcbiAgLyogRnVsbC13aWR0aCAqL1xuICBoZWlnaHQ6IDI2JTtcbiAgLyogU3BlY2lmaWVkIGhlaWdodCAqL1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWNzQmFja2dyb3VuZCk7XG4gIC8qIEdyZXkgYmFja2dyb3VuZCAqL1xuICBvdXRsaW5lOiBub25lO1xuICAvKiBSZW1vdmUgb3V0bGluZSAqL1xuICBvcGFjaXR5OiAwLjc7XG4gIC8qIFNldCB0cmFuc3BhcmVuY3kgKGZvciBtb3VzZS1vdmVyIGVmZmVjdHMgb24gaG92ZXIpICovXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC4ycztcbiAgLyogMC4yIHNlY29uZHMgdHJhbnNpdGlvbiBvbiBob3ZlciAqL1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnM7XG59XG5cbi5vbGdhLXNsaWRlcjpob3ZlciB7XG4gIG9wYWNpdHk6IDE7XG4gIC8qIEZ1bGx5IHNob3duIG9uIG1vdXNlLW92ZXIgKi9cbn1cblxuLyogVGhlIHNsaWRlciBoYW5kbGUgKHVzZSAtd2Via2l0LSAoQ2hyb21lLCBPcGVyYSwgU2FmYXJpLCBFZGdlKSBhbmQgLW1vei0gKEZpcmVmb3gpIHRvIG92ZXJyaWRlIGRlZmF1bHQgbG9vaykgKi9cbi5vbGdhLXNsaWRlcjo6LXdlYmtpdC1zbGlkZXItdGh1bWIge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIC8qIE92ZXJyaWRlIGRlZmF1bHQgbG9vayAqL1xuICBhcHBlYXJhbmNlOiBub25lO1xuICB3aWR0aDogMjVweDtcbiAgLyogU2V0IGEgc3BlY2lmaWMgc2xpZGVyIGhhbmRsZSB3aWR0aCAqL1xuICBoZWlnaHQ6IDI1cHg7XG4gIC8qIFNsaWRlciBoYW5kbGUgaGVpZ2h0ICovXG4gIGJhY2tncm91bmQ6IHZhcigtLWNzRmlsbCk7XG4gIC8qIEdyZWVuIGJhY2tncm91bmQgKi9cbiAgY3Vyc29yOiBwb2ludGVyO1xuICAvKiBDdXJzb3Igb24gaG92ZXIgKi9cbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbn1cblxuLm9sZ2Etc2xpZGVyOjotbW96LXJhbmdlLXRodW1iIHtcbiAgd2lkdGg6IDI1cHg7XG4gIC8qIFNldCBhIHNwZWNpZmljIHNsaWRlciBoYW5kbGUgd2lkdGggKi9cbiAgaGVpZ2h0OiAyNXB4O1xuICAvKiBTbGlkZXIgaGFuZGxlIGhlaWdodCAqL1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1jc0ZpbGwpO1xuICAvKiBHcmVlbiBiYWNrZ3JvdW5kICovXG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgLyogQ3Vyc29yIG9uIGhvdmVyICovXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY3NBY2NlbnQpO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ValueSliderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'value-slider',
                templateUrl: './value-slider.component.html',
                styleUrls: ['./value-slider.component.scss']
            }]
    }], function () { return []; }, { max: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], minimum: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], step: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
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






function OlgaControlsComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33, 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OlgaControlsComponent_div_13_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.olga.toggleScoreType(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "svg", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "use", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function OlgaControlsComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33, 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OlgaControlsComponent_div_14_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.olga.toggleScoreType(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "svg", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "use", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "visibility": a0 }; };
class OlgaControlsComponent {
    constructor(olga, layout) {
        this.olga = olga;
        this.layout = layout;
        this.playing = false;
        this.timeLeft = 0.6;
        this.ScoreViewType = _services_olga_service__WEBPACK_IMPORTED_MODULE_1__["ScoreViewType"];
    }
    ngOnInit() {
    }
    resize(width, height) {
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
OlgaControlsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OlgaControlsComponent, selectors: [["olga-controls"]], decls: 41, vars: 9, consts: [[1, "action-container"], ["actContainerElement", ""], [1, "play", 3, "click"], ["playElement", ""], [1, "feather-play"], [0, "xlink", "href", "assets/images/feather-sprite.svg#pause", 3, "ngStyle"], [0, "xlink", "href", "assets/images/feather-sprite.svg#play", 3, "ngStyle"], [1, "timer"], [1, "view", 3, "click"], ["rotateElement", ""], [1, "feather"], [0, "xlink", "href", "assets/images/feather-sprite.svg#refresh-cw"], ["class", "settings", 3, "click", 4, "ngIf"], [1, "shrink", 3, "click"], ["shrinkElement", ""], [0, "xlink", "href", "assets/images/feather-sprite.svg#minus"], [1, "grow", 3, "click"], ["growElement", ""], [0, "xlink", "href", "assets/images/feather-sprite.svg#plus"], [1, "navigation-container"], ["navContainerElement", ""], [1, "button", "start", 3, "click"], ["homeElement", ""], [0, "xlink", "href", "assets/images/feather-sprite.svg#rewind"], [1, "button", "previous", 3, "click"], ["previousElement", ""], [0, "xlink", "href", "assets/images/feather-sprite.svg#chevron-left"], [1, "button", "next", 3, "click"], ["nextElement", ""], [0, "xlink", "href", "assets/images/feather-sprite.svg#chevron-right"], [1, "button", "end", 3, "click"], ["endElement", ""], [0, "xlink", "href", "assets/images/feather-sprite.svg#fast-forward"], [1, "settings", 3, "click"], ["settingsElement", ""], [0, "xlink", "href", "assets/images/feather-sprite.svg#align-justify"], [0, "xlink", "href", "assets/images/feather-sprite.svg#align-left"]], template: function OlgaControlsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OlgaControlsComponent_Template_div_click_2_listener() { return ctx.toggleAutoPlay(); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OlgaControlsComponent_Template_div_click_9_listener() { return ctx.olga.rotateBoardOrientation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "svg", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "use", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, OlgaControlsComponent_div_13_Template, 4, 0, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, OlgaControlsComponent_div_14_Template, 4, 0, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 13, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OlgaControlsComponent_Template_div_click_15_listener() { return ctx.layout.shrink(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "svg", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "use", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 16, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OlgaControlsComponent_Template_div_click_19_listener() { return ctx.layout.grow(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "svg", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "use", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 19, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OlgaControlsComponent_Template_div_click_25_listener($event) { return ctx.moveToStart($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "svg", 10, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "use", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OlgaControlsComponent_Template_div_click_29_listener($event) { return ctx.previous($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "svg", 10, 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "use", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OlgaControlsComponent_Template_div_click_33_listener($event) { return ctx.advance($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "svg", 10, 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "use", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OlgaControlsComponent_Template_div_click_37_listener($event) { return ctx.moveToEnd($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "svg", 10, 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "use", 32);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.olga.scoreViewType.value === ctx.ScoreViewType.Flow);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.olga.scoreViewType.value === ctx.ScoreViewType.Table);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: ["@font-face {\n  font-family: \"Caveat\";\n  src: url('Caveat-Bold.woff2') format(\"woff2\"), url('Caveat-Bold.woff') format(\"woff\");\n  font-weight: bold;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"Caveat\";\n  src: url('Caveat-Regular.woff2') format(\"woff2\"), url('Caveat-Regular.woff') format(\"woff\");\n  font-weight: 600;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"FigurineSymbolT1\";\n  src: url('FigurineSymbolT1Bold.woff2') format(\"woff2\"), url('FigurineSymbolT1Bold.woff') format(\"woff\");\n  font-weight: bold;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"FigurineSymbolT1\";\n  src: url('FigurineSymbolT1.woff2') format(\"woff2\"), url('FigurineSymbolT1.woff') format(\"woff\");\n  font-weight: 600;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"SanctuaryPlayground\";\n  src: url('SanctuaryPlayground.woff2') format(\"woff2\"), url('SanctuaryPlayground.woff') format(\"woff\");\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"Amita\";\n  src: url('Amita-Regular.woff2') format(\"woff2\"), url('Amita-Regular.woff2') format(\"woff\");\n  font-style: normal;\n  font-display: swap;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n[_ngcontent-%COMP%]:root {\n  --bg-color: #f2f3f7;\n  --fg-color: #383a41;\n  --red: #e43030;\n  --green: #19a187;\n  --blue: #367bf0;\n  --dark-blue: #265ab1;\n  --maroon: #b8174c;\n  --purple: #8c42ab;\n}\n.button[_ngcontent-%COMP%] {\n  position: absolute;\n  border: black 2px solid;\n  background: var(--csBackground);\n  text-align: center;\n  border-radius: 2px;\n}\n.action-container[_ngcontent-%COMP%] {\n  background: var(--csBackground);\n  border: none;\n  border-radius: 2px;\n  position: absolute;\n  height: 48px;\n  width: 100%;\n}\n.navigation-container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 42px;\n  width: 100%;\n  left: 0px;\n  height: 64px;\n}\n.start[_ngcontent-%COMP%] {\n  left: -1px;\n  width: 14%;\n  top: 6px;\n  bottom: 6px;\n}\n.previous[_ngcontent-%COMP%] {\n  left: calc(14% - 2px);\n  width: calc(22% - 2px);\n  top: 6px;\n  bottom: 6px;\n}\n.next[_ngcontent-%COMP%] {\n  width: calc(50% + 3px);\n  left: calc(36% - 5px);\n  top: 6px;\n  bottom: 6px;\n}\n.end[_ngcontent-%COMP%] {\n  width: calc(14% + 2px);\n  right: -1px;\n  top: 6px;\n  bottom: 6px;\n}\n.play[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 34%;\n  left: 4px;\n  top: 4px;\n  bottom: 4px;\n  border: var(--csColor) solid 2px;\n  border-radius: 6px;\n}\n.shrink[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 12%;\n  left: calc(49.5% + 12px);\n  top: 4px;\n  bottom: 4px;\n}\n.settings[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 12%;\n  right: 2px;\n  top: 4px;\n  bottom: 4px;\n}\n.grow[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 12%;\n  left: calc(63.5% + 16px);\n  top: 4px;\n  bottom: 4px;\n}\n.view[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 12%;\n  left: calc(36.5% + 8px);\n  top: 4px;\n  bottom: 4px;\n}\n.feather[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 4%;\n  width: 90%;\n  height: 90%;\n  top: 5%;\n  stroke: var(--csColor);\n  stroke-width: 2;\n  stroke-linecap: round;\n  stroke-linejoin: flat;\n  fill: none;\n}\n.feather-play[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 6px;\n  width: 32px;\n  height: 80%;\n  top: 10%;\n  stroke: var(--csColor);\n  stroke-width: 2;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n  fill: none;\n}\n.timer[_ngcontent-%COMP%] {\n  text-align: center;\n  color: var(--csColor);\n  line-height: 38px;\n  margin-left: 24px;\n  font-size: 18px;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -o-user-select: none;\n  user-select: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMuc2NzcyIsInNyYy9hc3NldHMvc2Nzcy9tb2R1bGVzL19mb250cy5zY3NzIiwic3JjL2FwcC9vbGdhLWNvbnRyb2xzL29sZ2EtY29udHJvbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOEVBQUE7QUNBQTtFQUNJLHFCQUFBO0VBQ0EscUZBQUE7RUFFQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNDSjtBREVBO0VBQ0kscUJBQUE7RUFDQSwyRkFBQTtFQUVBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0RKO0FESUE7RUFDRSwrQkFBQTtFQUNBLHVHQUFBO0VBRUEsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDSEY7QURNQTtFQUNFLCtCQUFBO0VBQ0EsK0ZBQUE7RUFFQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNMRjtBRFFBO0VBQ0Usa0NBQUE7RUFDQSxxR0FBQTtFQUVBLGtCQUFBO0VBQ0Esa0JBQUE7QUNQRjtBRFdBO0VBQ0Usb0JBQUE7RUFDQSwwRkFBQTtFQUVBLGtCQUFBO0VBQ0Esa0JBQUE7QUNWRjtBRkRBLCtFQUFBO0FBR0Esa0ZBQUE7QUFLQSwrRUFBQTtBQVVBLCtFQUFBO0FBTUEsK0VBQUE7QUFNQSwrRUFBQTtBQU1BLGdGQUFBO0FBS0EsK0VBQUE7QUFLQSx5RUFBQTtBQUtBLHlFQUFBO0FBSUEsdUVBQUE7QUFRQSxxRUFBQTtBQXlCQTtFQUNFLG1CQUFBO0VBQ0EsbUJBQUE7RUFFQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FFMUVGO0FBNURBO0VBQ0ksa0JBQUE7RUFDQSx1QkFBQTtFQUNBLCtCRnNGVztFRXJGWCxrQkFBQTtFQUNBLGtCQUFBO0FBK0RKO0FBNURBO0VBQ0ksK0JGZ0ZXO0VFL0VYLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUErREo7QUE3REE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7QUFnRUo7QUE3REE7RUFDSSxVQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0FBZ0VKO0FBOURBO0VBQ0kscUJBQUE7RUFDQSxzQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0FBaUVKO0FBL0RBO0VBQ0ksc0JBQUE7RUFDQSxxQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0FBa0VKO0FBaEVBO0VBQ0ksc0JBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7QUFtRUo7QUFoRUE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxnQ0FBQTtFQUNBLGtCQUFBO0FBbUVKO0FBakVBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0Esd0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtBQW9FSjtBQWxFQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtBQXFFSjtBQWxFQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLHdCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7QUFxRUo7QUFoRUE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSx1QkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0FBbUVKO0FBaEVBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxPQUFBO0VBQ0Esc0JGUFE7RUVRUixlQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLFVBQUE7QUFtRUY7QUFqRUE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSxzQkZuQlE7RUVvQlIsZUFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxVQUFBO0FBb0VGO0FBbEVBO0VBQ0ksa0JBQUE7RUFDQSxxQkYzQk07RUU0Qk4saUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUVBLHNCQUFBO0VBRUEsb0JBQUE7RUFDQSxpQkFBQTtBQXFFSiIsImZpbGUiOiJzcmMvYXBwL29sZ2EtY29udHJvbHMvb2xnYS1jb250cm9scy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cblxuQGltcG9ydCBcIi4vYXNzZXRzL3Njc3MvbW9kdWxlcy9fZm9udHMuc2Nzc1wiO1xuJGdhbWVzY29yZS1mYW1pbHk6IFwiRmlndXJpbmVTeW1ib2xUMVwiO1xuJGdhbWVzY29yZS1oaWdobGlnaHQ6ICM1ODU4NThmZjtcbiRnYW1lc2NvcmUtZm9yZWdyb3VuZDogd2hpdGU7XG5cbiRyZWQ6ICNlNDMwMzA7XG4kZ3JlZW46ICMxOWExODc7XG4kbGlnaHQtYmx1ZTogIzAwZmZmZmZmO1xuJGJsdWU6ICMzNjdiZjA7XG4kZGFyay1ibHVlOiAjMjY1YWIxO1xuJG1hcm9vbjogI2I4MTc0YztcbiRwdXJwbGU6ICM4YzQyYWI7XG5cbi8vIE1haW4gT0xHQSBDb2xvciBFbGVtZW50IFZhcmlhYmxlc1xuJHRleHRDb2xvcjogdmFyKC0tdGV4dENvbG9yKTsgLy8gTWFpbiBUZXh0IENvbG9yXG4kdGV4dENvbG9yQXR0ZW50aW9uOiB2YXIoLS10ZXh0Q29sb3JBdHRlbnRpb24pOyAvLyBBdHRlbnRpb24gdGV4dFxuJHRleHRDb2xvclJlbW92ZTogdmFyKC0tdGV4dENvbG9yUmVtb3ZlKTsgLy8gUmVtb3ZlL0RlbGV0ZS9DbG9zZVxuJHRleHRDb2xvckFkZDogdmFyKC0tdGV4dENvbG9yQWRkKTsgLy8gQWRkL0NyZWF0ZS9PcGVuXG4kdGV4dENvbG9yQWN0aXZlOiB2YXIoLS10ZXh0Q29sb3JBY3RpdmUpOyAvLyBBZGQvQ3JlYXRlL09wZW5cbiRiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kKTsgLy8gTWFpbiBiYWNrZ3JvdW5kIENvbG9yXG4kYmdDb250YWluZXI6IHZhcigtLWJnQ29udGFpbmVyKTsgLy8gYmFja2dyb3VuZCBvZiBDb250YWluZXJzXG4kYmdNZW51OiB2YXIoLS1iZ01lbnUpOyAvLyBiYWNrZ3JvdW5kIG9mIE1lbnVzXG4kYmdJdGVtOiB2YXIoLS1iZ0l0ZW0pOyAvLyBiYWNrZ3JvdW5kIG9mIEl0ZW1zXG5cbi8vIENvbnRleHQgTWVudVxuJGJnQ29udGV4dDogdmFyKC0tYmdDb250ZXh0KTsgLy8gYmFja2dyb3VuZCBvZiBDb250ZXh0IE1lbnVcbiR0ZXh0Q29sb3JDb250ZXh0OiB2YXIoLS10ZXh0Q29sb3JDb250ZXh0KTsgLy8gdGV4dCBjb2xvciBDb250ZXh0IE1lbnVcbiRib3JkZXJDb250ZXh0OiB2YXIoLS1ib3JkZXJDb250ZXh0KTsgLy8gYm9yZGVyIENvbnRleHQgTWVudVxuJG92ZXJsYXlDb250ZXh0QmFja2dyb3VuZDogdmFyKFxuICAtLW92ZXJsYXlDb250ZXh0QmFja2dyb3VuZFxuKTsgLy8gQ29udGV4dCBNZW51IE92ZXJsYXkgYmFja2dyb3VuZCBtYWluXG4kb3ZlcmxheUNvbnRleHRCYWNrZ3JvdW5kR3JhZGllbnQ6IHZhcihcbiAgLS1vdmVybGF5Q29udGV4dEJhY2tncm91bmRHcmFkaWVudFxuKTsgLy8gQ29udGV4dCBNZW51IGJhY2tncm91bmQgZ3JhZGllbnRcblxuXG5cbi8qKioqKioqKioqKioqKioqKioqIE1lbnUgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4kbWVCYWNrZ3JvdW5kOiB2YXIoLS1tZUJhY2tncm91bmQpO1xuXG4vKioqKioqKioqKioqKioqKioqKioqKioqIE1lbnUgQ29udHJvbHMgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuJGNzRmlsbDogdmFyKC0tY3NGaWxsKTtcbiRjc0FjY2VudDogdmFyKC0tY3NBY2NlbnQpO1xuJGNzQWNjZW50MjogdmFyKC0tY3NBY2NlbnQyKTtcblxuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBDb250YWluZXIgVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiRnc1RleHRDb2xvcjogdmFyKC0tZ3NUZXh0Q29sb3IpOyAvLyBUZXh0IGNvbG9yIGZvciBnYW1lIHNjb3JlXG4kZ3NCYWNrZ3JvdW5kOiB2YXIoLS1nc0JhY2tncm91bmQpOyAvLyBiYWNrZ3JvdW5kIG9mIENvbnRhaW5lcnNcbiRnc0xpc3RCYWNrZ3JvdW5kOiB2YXIoLS1nc0xpc3RCYWNrZ3JvdW5kKTsgLy8gbGlzdCBiYWNrZ3JvdW5kIG9mIGdhbWUgc2NvcmVcbiRnc0JvcmRlcjogdmFyKC0tZ3NCb3JkZXIpOyAvLyBiYWNrZ3JvdW5kIG9mIE1lbnVzXG4kZ3NUZXh0U2l6ZTogdmFyKC0tZ3NUZXh0U2l6ZSk7IC8vIGJhY2tncm91bmQgb2YgTWVudXNcbiRnc0ZvbnRGYW1pbHk6IHZhcigtLWdzRm9udEZhbWlseSk7IC8vIHNjb3JlIGZvbnRcbiRnc1RhYmxlSXRlbVdpZHRoOiB2YXIoLS1nc1RhYmxlSXRlbVdpZHRoKTsgLy8gd2lkdGggb2Ygc2NvcmUgaXRlbSBpbiB0YWJsZSBsYXlvdXRcbiRnc1RhYmxlUGx5V2lkdGg6IHZhcigtLWdzVGFibGVQbHlXaWR0aCk7IC8vIHdpZHRoIG9mIHBseSBlbGVtZW50IGluIHRhYmxlIGxheW91dFxuXG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIENvbnRhaW5lciBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuJGdzVGV4dENvbG9yTVc6IHZhcigtLWdzVGV4dENvbG9yTVcpOyAvLyBUZXh0IGNvbG9yIGZvciBnYW1lIHNjb3JlXG4kZ3NCYWNrZ3JvdW5kTVc6IHZhcigtLWdzQmFja2dyb3VuZE1XKTsgLy8gYmFja2dyb3VuZCBvZiBDb250YWluZXJzXG4kZ3NCb3JkZXJNVzogdmFyKC0tZ3NCb3JkZXJNVyk7IC8vIGJhY2tncm91bmQgb2YgTWVudXNcbiRnc1RleHRTaXplTVc6IHZhcigtLWdzVGV4dFNpemVNVyk7IC8vIGJhY2tncm91bmQgb2YgTWVudXNcblxuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBDb250YWluZXIgVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiRnc1RleHRDb2xvck1COiB2YXIoLS1nc1RleHRDb2xvck1CKTsgLy8gVGV4dCBjb2xvciBmb3IgZ2FtZSBzY29yZVxuJGdzQmFja2dyb3VuZE1COiB2YXIoLS1nc0JhY2tncm91bmRNQik7IC8vIGJhY2tncm91bmQgb2YgQ29udGFpbmVyc1xuJGdzQm9yZGVyTUI6IHZhcigtLWdzQm9yZGVyTUIpOyAvLyBiYWNrZ3JvdW5kIG9mIE1lbnVzXG4kZ3NUZXh0U2l6ZU1COiB2YXIoLS1nc1RleHRTaXplTUIpOyAvLyBiYWNrZ3JvdW5kIG9mIE1lbnVzXG5cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgSGlnaGxpZ2h0IFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4kZ3NUZXh0Q29sb3JIRzogdmFyKC0tZ3NUZXh0Q29sb3JIRyk7IC8vIFRleHQgY29sb3IgZm9yIGhpZ2hsaWdodFxuJGdzQW5ub3RhdGlvbkNvbG9ySEc6IHZhcigtLWdzQW5ub3RhdGlvbkNvbG9ySEcpOyAvLyBBbm5vdGF0aW9uL0NvbW1lbnQgY29sb3IgZm9yIGhpZ2hsaWdodFxuJGdzQmFja2dyb3VuZEhHOiB2YXIoLS1nc0JhY2tncm91bmRIRyk7IC8vIGJhY2tncm91bmQgZm9yIGhpZ2hsaWdodFxuJGdzQm9yZGVySEc6IHZhcigtLWdzQm9yZGVySEcpOyAvLyBib3JkZXIgZm9yIGhpZ2hsaWdodFxuXG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIEFubm90YXRpb24gVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiRnc1RleHRDb2xvckFOOiB2YXIoLS1nc1RleHRDb2xvckFOKTsgLy8gVGV4dCBjb2xvciBmb3IgaGlnaGxpZ2h0XG4kZ3NCYWNrZ3JvdW5kQU46IHZhcigtLWdzQmFja2dyb3VuZEFOKTsgLy8gYmFja2dyb3VuZCBmb3IgaGlnaGxpZ2h0XG4kZ3NCb3JkZXJBTjogdmFyKC0tZ3NCb3JkZXJBTik7IC8vIGJvcmRlciBmb3IgaGlnaGxpZ2h0XG5cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgVmFyaWF0aW9uIFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4kZ3NUZXh0Q29sb3JWQTogdmFyKC0tZ3NUZXh0Q29sb3JWQSk7IC8vIFRleHQgY29sb3IgZm9yIGhpZ2hsaWdodFxuJGdzQmFja2dyb3VuZFZBOiB2YXIoLS1nc0JhY2tncm91bmRWQSk7IC8vIGJhY2tncm91bmQgZm9yIGhpZ2hsaWdodFxuJGdzQm9yZGVyVkE6IHZhcigtLWdzQm9yZGVyVkEpOyAvLyBib3JkZXIgZm9yIGhpZ2hsaWdodFxuXG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIFBseSBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuJGdzVGV4dENvbG9yUEM6IHZhcigtLWdzVGV4dENvbG9yUEMpOyAvLyBUZXh0IGNvbG9yIGZvciBnYW1lIHNjb3JlIHBseVxuJGdzQmFja2dyb3VuZFBDOiB2YXIoLS1nc0JhY2tncm91bmRQQyk7IC8vIGJhY2tncm91bmQgZm9yIGdhbWUgc2NvcmUgcGx5XG4kZ3NCb3JkZXJQQzogdmFyKC0tZ3NCb3JkZXJQQyk7IC8vIGJvcmRlciBmb3IgZ2FtZSBzY29yZSBwbHlcblxuLyoqKioqKioqKioqKioqKioqKioqIENvbnRyb2wgQ29sb3JzICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiRjc0JhY2tncm91bmQ6IHZhcigtLWNzQmFja2dyb3VuZCk7IC8vIGJhY2tncm91bmQgZm9yIGNvbnRyb2xzXG4kY3NDb2xvcjogdmFyKC0tY3NDb2xvcik7IC8vIGNvbnRyb2xzIGNvbG9yIChmb3JlZ3JvdW5kKVxuXG4vKioqKioqKioqKioqKioqKioqKiogQm9hcmQgQ29sb3JzICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiRib2FyZEJHRGFyazogdmFyKC0tYm9hcmRCR0RhcmspOyAvLyBib2FyZCBkYXJrIHRpbGVcbiRib2FyZEJHTGlnaHQ6IHZhcigtLWJvYXJkQkdMaWdodCk7IC8vIGJvYXJkIGxpZ2h0IHRpbGVcbiRib2FyZExhYmVsTGlnaHQ6IHZhcigtLWJvYXJkTGFiZWxMaWdodCk7IC8vIGJvYXJkIGxpZ2h0IGxhYmVsXG4kYm9hcmRMYWJlbERhcms6IHZhcigtLWJvYXJkTGFiZWxEYXJrKTsgLy8gYm9hcmQgZGFyayBsYWJlbFxuXG5cblxuLyoqKioqKioqKioqKioqKioqKioqIEZvbnQgU2l6ZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuJGdzRm9udFNpemU6IHZhcigtLWdzRm9udFNpemUpOyAvLyBib2FyZCBkYXJrIHRpbGVcbiRnc0ZvbnRTaXplQU46IHZhcigtLWdzRm9udFNpemVBTik7IC8vIGJvYXJkIGxpZ2h0IHRpbGVcbiRnc0ZvbnRTaXplSEc6IHZhcigtLWdzRm9udFNpemVIRyk7IC8vIGJvYXJkIGxpZ2h0IGxhYmVsXG4kZ3NGb250U2l6ZVZBOiB2YXIoLS1nc0ZvbnRTaXplVkEpOyAvLyBib2FyZCBkYXJrIGxhYmVsXG4kZ3NGb250U2l6ZVBDOiB2YXIoLS1nc0ZvbnRTaXplUEMpOyAvLyBib2FyZCBkYXJrIGxhYmVsXG4kaGRyRGF0YUZvbnRTaXplOiB2YXIoLS1oZHJEYXRhRm9udFNpemUpOyAvLyBzaXplIG9mIHBsYXllciBzaG93Y2FzZSBkYXRhXG4kaGRyTmFtZUZvbnRTaXplOiB2YXIoLS1oZHJOYW1lRm9udFNpemUpOyAvLyBzaXplIG9mIHBsYXllciBzaG93Y2FzZSBOYW1lXG4kaGRyVGl0bGVGb250U2l6ZTogdmFyKC0taGRyVGl0bGVGb250U2l6ZSk7IC8vIHNpemUgb2YgcGxheWVyIHNob3djYXNlIGRhdGFcbiRoZHJWYXJpYW50Rm9udFNpemU6IHZhcigtLWhkclZhcmlhbnRGb250U2l6ZSk7IC8vIHNpemUgb2YgcGxheWVyIHNob3djYXNlIE5hbWVcbiRoZHJNYXRjaERhdGFGb250U2l6ZTogdmFyKC0taGRyTWF0Y2hEYXRhRm9udFNpemUpOyAvLyBzaXplIG9mIHBsYXllciBzaG93Y2FzZSBOYW1lXG4kaGRyT3BlbmluZ0ZvbnRTaXplOiB2YXIoLS1oZHJNYXRjaERhdGFGb250U2l6ZSk7IC8vIHNpemUgb2YgcGxheWVyIHNob3djYXNlIE5hbWVcbiRoZHJSZXN1bHRGb250U2l6ZTogdmFyKC0taGRyUmVzdWx0Rm9udFNpemUpOyAvLyBzaXplIG9mIHBsYXllciBzaG93Y2FzZSBOYW1lXG4kaGRyUm91bmRGb250U2l6ZTogdmFyKC0taGRyUm91bmRGb250U2l6ZSk7IC8vIHNpemUgb2YgcGxheWVyIHNob3djYXNlIE5hbWVcblxuLy8gR2VuZXJhbCBzdHVmZlxuJHRleHQtY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xuJGJnLW91dGVyOiB2YXIoLS1iZy1vdXRlcik7XG4kYmctaW5uZXI6IHZhcigtLWJnLWlubmVyKTtcblxuJGJnLWNvbG9yOiAjZjJmM2Y3O1xuJGZnLWNvbG9yOiAjMzgzYTQxO1xuXG4kZ2xvdy1zaGFkb3c6IDAgMCAwLjVlbSB0cmFuc3BhcmVudGl6ZSgkYmx1ZSwgMC4zKTtcblxuOnJvb3Qge1xuICAtLWJnLWNvbG9yOiAjeyRiZy1jb2xvcn07XG4gIC0tZmctY29sb3I6ICN7JGZnLWNvbG9yfTtcblxuICAtLXJlZDogI3skcmVkfTtcbiAgLS1ncmVlbjogI3skZ3JlZW59O1xuICAtLWJsdWU6ICN7JGJsdWV9O1xuICAtLWRhcmstYmx1ZTogI3skZGFyay1ibHVlfTtcbiAgLS1tYXJvb246ICN7JG1hcm9vbn07XG4gIC0tcHVycGxlOiAjeyRwdXJwbGV9O1xufVxuXG4vLyA6Oi1tb3otZm9jdXMtaW5uZXIsXG4vLyA6LW1vei1mb2N1c3Jpbmcge1xuLy8gICBib3JkZXI6IDA7XG4vLyAgIGNvbG9yOiB0cmFuc3BhcmVudDtcbi8vICAgdGV4dC1zaGFkb3c6IDAgMCAwICRmZy1jb2xvcjtcbi8vIH1cblxuLy8gOjpzZWxlY3Rpb24sXG4vLyA6Oi1tb3otc2VsZWN0aW9uIHtcbi8vICAgY29sb3I6IHdoaXRlO1xuLy8gICBiYWNrZ3JvdW5kOiBibGFjaztcbi8vIH1cblxuLy8gKiB7XG4vLyAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4vLyAgIG91dGxpbmU6IG5vbmU7XG4vLyAgIHVzZXItc2VsZWN0OiBub25lO1xuLy8gICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XG4vLyAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4vLyAgIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTtcbi8vICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbi8vICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuLy8gICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4vLyAgIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbi8vICAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApICFpbXBvcnRhbnQ7XG4vLyAgIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcbi8vICAgY3Vyc29yOiBkZWZhdWx0O1xuLy8gICBsZXR0ZXItc3BhY2luZzogMDtcbi8vIH1cblxuLy8gLnNlbGVjdGFibGUsXG4vLyAuc2VsZWN0YWJsZSAqIHtcbi8vICAgY3Vyc29yOiBhdXRvO1xuLy8gICB1c2VyLXNlbGVjdDogdGV4dDtcbi8vICAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiB0ZXh0O1xuLy8gICAtd2Via2l0LXVzZXItc2VsZWN0OiB0ZXh0O1xuLy8gICAta2h0bWwtdXNlci1zZWxlY3Q6IHRleHQ7XG4vLyAgIC1tb3otdXNlci1zZWxlY3Q6IHRleHQ7XG4vLyAgIC1tcy11c2VyLXNlbGVjdDogdGV4dDtcbi8vIH1cblxuLy8gaHRtbCxcbi8vIGJvZHkge1xuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmctY29sb3I7XG4vLyAgIGNvbG9yOiAkZmctY29sb3I7XG4vLyAgIG1hcmdpbjogMDtcbi8vICAgcGFkZGluZzogMDtcbi8vICAgZm9udC1zaXplOiAxMHB0O1xuLy8gICBoZWlnaHQ6IDEwMCU7XG4vLyAgIG92ZXJmbG93OiBhdXRvO1xuLy8gfVxuXG4vLyAud2l0aC1zaGFkb3cge1xuLy8gICBib3gtc2hhZG93OiA2cHggNnB4IDEwcHggdHJhbnNwYXJlbnRpemUoYmxhY2ssIDAuOSksIC02cHggLTZweCAxMHB4IHdoaXRlO1xuLy8gfVxuXG4vLyAub3V0c2V0IHtcbi8vICAgQGV4dGVuZCAud2l0aC1zaGFkb3c7XG5cbi8vICAgYm9yZGVyLXJhZGl1czogMTBweDtcbi8vICAgYmFja2dyb3VuZDogJGJnLWNvbG9yO1xuLy8gfVxuXG4vLyAuaW5zZXQge1xuLy8gICBib3JkZXItcmFkaXVzOiAxMHB4O1xuLy8gICBib3gtc2hhZG93OiAwIDAgdHJhbnNwYXJlbnQsIDAgMCB0cmFuc3BhcmVudCxcbi8vICAgICBpbnNldCAzcHggM3B4IDVweCB0cmFuc3BhcmVudGl6ZShibGFjaywgMC45KSwgaW5zZXQgLTNweCAtM3B4IDVweCB3aGl0ZTtcbi8vICAgYmFja2dyb3VuZDogbGlnaHRlbigkYmctY29sb3IsIDIlKTtcbi8vIH1cblxuLy8gLnBhcGVyIHtcbi8vICAgQGV4dGVuZCAub3V0c2V0O1xuLy8gICBwYWRkaW5nOiAxMHB4IDIwcHggMjBweDtcbi8vICAgbWFyZ2luLXRvcDogMjBweDtcbi8vICAgbWluLWhlaWdodDogMTAwcHg7XG4vLyAgIGZvbnQtc2l6ZTogMS4yZW07XG4vLyAgIGJhY2tncm91bmQ6ICRiZy1jb2xvcjtcbi8vIH1cblxuLy8gc2VjdGlvbixcbi8vIGFydGljbGUsXG4vLyAuc2VjdGlvbixcbi8vIC5hcnRpY2xlLFxuLy8gLnBhcGVyIHtcbi8vICAgbGluZS1oZWlnaHQ6IDJlbTtcbi8vICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuLy8gICB3b3JkLWJyZWFrOiBub3JtYWw7XG4vLyAgIGxpbmUtaGVpZ2h0OiAyZW07XG4vLyB9XG5cbi8vIGlucHV0W3R5cGU9XCJ0ZXh0XCJdLFxuLy8gaW5wdXRbdHlwZT1cInNlYXJjaFwiXSxcbi8vIGlucHV0W3R5cGU9XCJ0ZWxcIl0sXG4vLyBpbnB1dFt0eXBlPVwidXJsXCJdLFxuLy8gaW5wdXRbdHlwZT1cImVtYWlsXCJdLFxuLy8gaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJdLFxuLy8gaW5wdXRbdHlwZT1cImRhdGVcIl0sXG4vLyBpbnB1dFt0eXBlPVwibW9udGhcIl0sXG4vLyBpbnB1dFt0eXBlPVwid2Vla1wiXSxcbi8vIGlucHV0W3R5cGU9XCJ0aW1lXCJdLFxuLy8gaW5wdXRbdHlwZT1cIm51bWJlclwiXSxcbi8vIGlucHV0W3R5cGU9XCJjb2xvclwiXSxcbi8vIHNlbGVjdCxcbi8vIHRleHRhcmVhIHtcbi8vICAgYm9yZGVyOiAwO1xuLy8gICBiYWNrZ3JvdW5kOiAkYmctY29sb3I7XG4vLyAgIGNvbG9yOiAkZmctY29sb3I7XG4vLyAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4vLyAgIHBhZGRpbmc6IDAgMS4yNWVtO1xuLy8gICBsaW5lLWhlaWdodDogMS4yNWVtO1xuLy8gICBoZWlnaHQ6IDMuNWVtO1xuLy8gICBtYXJnaW46IDEwcHggMDtcbi8vICAgZm9udC1zaXplOiAxLjFyZW07XG4vLyAgIGN1cnNvcjogdGV4dDtcbi8vICAgdXNlci1zZWxlY3Q6IHRleHQ7XG4vLyAgIC13ZWJraXQtdG91Y2gtY2FsbG91dDogdGV4dDtcbi8vICAgLXdlYmtpdC11c2VyLXNlbGVjdDogdGV4dDtcbi8vICAgLWtodG1sLXVzZXItc2VsZWN0OiB0ZXh0O1xuLy8gICAtbW96LXVzZXItc2VsZWN0OiB0ZXh0O1xuLy8gICAtbXMtdXNlci1zZWxlY3Q6IHRleHQ7XG4vLyAgIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC4ycztcblxuLy8gICAmOm5vdChzZWxlY3QpIHtcbi8vICAgICBAZXh0ZW5kIC5pbnNldDtcblxuLy8gICAgICY6Zm9jdXMge1xuLy8gICAgICAgQGV4dGVuZCAub3V0c2V0O1xuLy8gICAgIH1cbi8vICAgfVxuLy8gfVxuXG4vLyB0ZXh0YXJlYSB7XG4vLyAgIGhlaWdodDogMzUwcHg7XG4vLyAgIHBhZGRpbmc6IDEuMjVlbTtcbi8vIH1cblxuLy8gc2VsZWN0IHtcbi8vICAgQGV4dGVuZCAub3V0c2V0O1xuXG4vLyAgIGN1cnNvcjogcG9pbnRlcjtcbi8vICAgYmFja2dyb3VuZDogdXJsKGRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjJaWEp6YVc5dVBTSXhMakVpSUhacFpYZENiM2c5SWpBZ01DQXhPU0F4T1NJZ2VHMXNibk05SW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTHpJd01EQXZjM1puSWo0OFp5QjBjbUZ1YzJadmNtMDlJbTFoZEhKcGVDZ3VNRE0wSURBZ01DQXVNRE0wSUMwMkxqZ2dNUzQzWlMwMUtTSWdjM1I1YkdVOUltWnBiR3c2SXpkaU4yVTRZeUkrUEhCaGRHZ2daRDBpYlRRNE1DQXpORFF0TWpFeExUSXhNbU10TVRZdE1UWXROREV0TVRZdE5UY2dNQzB4TmlBeE5pMHhOaUEwTWlBd0lEVTNiREl6T0NBeU16bGpPQzQwSURndU5TQXlNQ0F4TWlBek1TQXhNaUF4TVNBd0xqVTJJREl5TFRNdU1pQXpNUzB4TW13eU16Z3RNak01WXpFMkxURTJJREUyTFRReUlEQXROVGR6TFRReExURTJMVFUzSURCNklpQnpkSGxzWlQwaVptbHNiRG9qTjJJM1pUaGpJaTgrUEM5blBqd3ZjM1puUGdvPSlcbi8vICAgICBuby1yZXBlYXQgcmlnaHQgMWVtIGNlbnRlcjtcbi8vICAgYmFja2dyb3VuZC1zaXplOiAxLjJlbTtcbi8vICAgcGFkZGluZy1yaWdodDogM2VtO1xuLy8gfVxuXG4vLyBpbnB1dDo6cGxhY2Vob2xkZXIsXG4vLyB0ZXh0YXJlYTo6cGxhY2Vob2xkZXIge1xuLy8gICBvcGFjaXR5OiAxO1xuLy8gICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnM7XG4vLyAgIGNvbG9yOiBpbmhlcml0O1xuLy8gfVxuXG4vLyBpbnB1dDpmb2N1czo6cGxhY2Vob2xkZXIsXG4vLyB0ZXh0YXJlYTpmb2N1czo6cGxhY2Vob2xkZXIge1xuLy8gICBvcGFjaXR5OiAwLjI7XG4vLyB9XG5cbi8vIGlucHV0Oi1tcy1pbnB1dC1wbGFjZWhvbGRlcixcbi8vIHRleHRhcmVhOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4vLyAgIG9wYWNpdHk6IDE7XG4vLyAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycztcbi8vICAgY29sb3I6IGluaGVyaXQ7XG4vLyB9XG5cbi8vIGlucHV0OmZvY3VzOi1tcy1pbnB1dC1wbGFjZWhvbGRlcixcbi8vIHRleHRhcmVhOmZvY3VzOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4vLyAgIG9wYWNpdHk6IDAuMjtcbi8vIH1cblxuLy8gaW5wdXRbdHlwZT1cInNlYXJjaFwiXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbixcbi8vIGlucHV0W3R5cGU9XCJzZWFyY2hcIl06Oi13ZWJraXQtc2VhcmNoLWNhbmNlbC1idXR0b24sXG4vLyBpbnB1dFt0eXBlPVwic2VhcmNoXCJdOjotd2Via2l0LXNlYXJjaC1yZXN1bHRzLWJ1dHRvbixcbi8vIGlucHV0W3R5cGU9XCJzZWFyY2hcIl06Oi13ZWJraXQtc2VhcmNoLXJlc3VsdHMtZGVjb3JhdGlvbiB7XG4vLyAgIGRpc3BsYXk6IG5vbmU7XG4vLyB9XG5cbi8vIGJ1dHRvbixcbi8vIGlucHV0W3R5cGU9XCJidXR0b25cIl0sXG4vLyBpbnB1dFt0eXBlPVwic3VibWl0XCJdLFxuLy8gaW5wdXRbdHlwZT1cInJlc2V0XCJdIHtcbi8vICAgQGV4dGVuZCAub3V0c2V0O1xuXG4vLyAgIGJvcmRlcjogMDtcbi8vICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4vLyAgIHBhZGRpbmc6IDEwcHggMDtcbi8vICAgd2lkdGg6IDhlbTtcbi8vICAgdGV4dC1hbGlnbjogY2VudGVyO1xuLy8gICBjdXJzb3I6IHBvaW50ZXI7XG4vLyAgIGNvbG9yOiBpbmhlcml0O1xuLy8gICBmb250LXNpemU6IDEuMXJlbTtcbi8vICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYmFja2dyb3VuZC1jb2xvciwgYm94LXNoYWRvdztcbi8vICAgdHJhbnNpdGlvbi1kZWxheTogMC4ycztcbi8vICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4ycztcblxuLy8gICAmLmFjdGl2ZSxcbi8vICAgJjphY3RpdmUge1xuLy8gICAgIEBleHRlbmQgLmluc2V0O1xuXG4vLyAgICAgdHJhbnNpdGlvbi1kZWxheTogMHM7XG4vLyAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4xcztcbi8vICAgfVxuXG4vLyAgIEBlYWNoICRuYW1lLCAkY29sb3IgaW4gKFwicmVkXCI6ICRyZWQsIFwiZ3JlZW5cIjogJGdyZWVuLCBcImJsdWVcIjogJGJsdWUpIHtcbi8vICAgICBAYXQtcm9vdCAuI3skbmFtZX0tYnV0dG9uLFxuLy8gICAgICAgJi4jeyRuYW1lfS1idXR0b24ge1xuLy8gICAgICAgQGV4dGVuZCBidXR0b247XG5cbi8vICAgICAgICRfYmctaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsICRjb2xvciAzMCUsIGxpZ2h0ZW4oJGNvbG9yLCA2JSkgODAlKTtcblxuLy8gICAgICAgY29sb3I6IHdoaXRlO1xuLy8gICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4vLyAgICAgICB0ZXh0LXNoYWRvdzogMCAwLjFlbSAwLjFlbSB0cmFuc3BhcmVudGl6ZShibGFjaywgMC4zKTtcbi8vICAgICAgIGJhY2tncm91bmQ6ICRfYmctaW1hZ2U7XG4vLyAgICAgICBib3gtc2hhZG93OiAwIDAgMC41ZW0gdHJhbnNwYXJlbnRpemUoJGNvbG9yLCAwLjMpLCAwIDAgdHJhbnNwYXJlbnQsXG4vLyAgICAgICAgIGluc2V0IDAgLTVweCAwIHRyYW5zcGFyZW50aXplKGJsYWNrLCAwLjk1KSxcbi8vICAgICAgICAgaW5zZXQgMCAycHggMCB0cmFuc3BhcmVudGl6ZSh3aGl0ZSwgMC44KTtcbi8vICAgICAgIGJvcmRlci1yYWRpdXM6IDZweCA2cHggOHB4IDhweDtcbi8vICAgICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGJveC1zaGFkb3csIGJvcmRlci1yYWRpdXM7XG5cbi8vICAgICAgICYuYWN0aXZlLFxuLy8gICAgICAgJjphY3RpdmUge1xuLy8gICAgICAgICBiYWNrZ3JvdW5kOiAkX2JnLWltYWdlO1xuLy8gICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4vLyAgICAgICAgIGJveC1zaGFkb3c6IDAgMCB0cmFuc3BhcmVudCwgMCAwIHRyYW5zcGFyZW50LFxuLy8gICAgICAgICAgIGluc2V0IDAgMnB4IDVweCAycHggdHJhbnNwYXJlbnRpemUoYmxhY2ssIDAuOCk7XG4vLyAgICAgICB9XG4vLyAgICAgfVxuLy8gICB9XG4vLyB9XG5cbi8vIGxhYmVsIHtcbi8vICAgJixcbi8vICAgJiAqIHtcbi8vICAgICBjdXJzb3I6IHBvaW50ZXI7XG4vLyAgIH1cblxuLy8gICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4vLyAgIHBhZGRpbmc6IDAuNTZlbSAwO1xuLy8gfVxuXG4vLyBhIHtcbi8vICAgJixcbi8vICAgJjpsaW5rLFxuLy8gICAmOnZpc2l0ZWQsXG4vLyAgICY6aG92ZXIgJjphY3RpdmUge1xuLy8gICAgICYsXG4vLyAgICAgJiAqIHtcbi8vICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbi8vICAgICB9XG5cbi8vICAgICBmb250LXdlaWdodDogYm9sZDtcbi8vICAgICBjb2xvcjogJGJsdWU7XG4vLyAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4vLyAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuLy8gICB9XG4vLyB9XG5cbi8vIGgxLFxuLy8gaDIsXG4vLyBoMyxcbi8vIGg0LFxuLy8gaDUsXG4vLyBoNiB7XG4vLyAgIGxpbmUtaGVpZ2h0OiAxLjVlbTtcbi8vIH1cblxuLy8gaDEge1xuLy8gICBmb250LXNpemU6IDRlbTtcbi8vICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4vLyAgIG1hcmdpbjogMC43ZW0gMDtcbi8vIH1cblxuLy8gaDIge1xuLy8gICBmb250LXNpemU6IDNlbTtcbi8vICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4vLyAgIG1hcmdpbjogMC44ZW0gMDtcbi8vIH1cblxuLy8gaDMge1xuLy8gICBmb250LXNpemU6IDIuNWVtO1xuLy8gICBmb250LXdlaWdodDogbGlnaHRlcjtcbi8vICAgbWFyZ2luOiAwLjllbSAwO1xuLy8gfVxuXG4vLyBoNCB7XG4vLyAgIGZvbnQtc2l6ZTogMmVtO1xuLy8gICBmb250LXdlaWdodDogbGlnaHRlcjtcbi8vICAgbWFyZ2luOiAxZW0gMDtcbi8vIH1cblxuLy8gaDUge1xuLy8gICBtYXJnaW46IDAuNWVtIDA7XG4vLyAgIGZvbnQtc2l6ZTogMS4yZW07XG4vLyAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4vLyB9XG5cbi8vIGg2IHtcbi8vICAgbWFyZ2luOiAxZW0gMCAxZW0gMS40ZW07XG4vLyAgIGZvbnQtc2l6ZTogMWVtO1xuLy8gICBmb250LXdlaWdodDogYm9sZDtcbi8vIH1cblxuLy8gaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdLFxuLy8gaW5wdXRbdHlwZT1cInJhZGlvXCJdIHtcbi8vICAgJF9ib3JkZXItd2lkdGg6IDAuMTVlbTtcbi8vICAgJF9ib3gtc2hhZG93OiAycHggMnB4IDNweCB0cmFuc3BhcmVudGl6ZShibGFjaywgMC44KSwgLTJweCAtMnB4IDNweCB3aGl0ZSxcbi8vICAgICBpbnNldCAxcHggMXB4IDJweCB0cmFuc3BhcmVudGl6ZShibGFjaywgMC44KSwgaW5zZXQgLTFweCAtMXB4IDJweCB3aGl0ZTtcbi8vICAgZm9udC1zaXplOiAxZW07XG4vLyAgIGN1cnNvcjogcG9pbnRlcjtcbi8vICAgaGVpZ2h0OiAxLjJlbTtcbi8vICAgd2lkdGg6IDEuMmVtO1xuLy8gICBtYXJnaW46IDAgMC4zZW07XG4vLyAgIGJveC1zaGFkb3c6ICRfYm94LXNoYWRvdztcbi8vICAgYm9yZGVyOiAkX2JvcmRlci13aWR0aCBzb2xpZCAkYmctY29sb3I7XG4vLyAgIHZlcnRpY2FsLWFsaWduOiB0ZXh0LWJvdHRvbTtcbi8vICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYmFja2dyb3VuZCwgYm94LXNoYWRvdztcbi8vICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4ycztcblxuLy8gICAmOmFjdGl2ZSB7XG4vLyAgICAgYm94LXNoYWRvdzogJF9ib3gtc2hhZG93LCBpbnNldCAwIDAuMWVtIDAuMjVlbSB0cmFuc3BhcmVudGl6ZShibGFjaywgMC44KTtcbi8vICAgfVxuXG4vLyAgICY6Y2hlY2tlZCB7XG4vLyAgICAgYm9yZGVyLXdpZHRoOiAwLjFlbTtcbi8vICAgICBib3JkZXItY29sb3I6IGRhcmtlbigkYmx1ZSwgMTAlKTtcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmx1ZTtcbi8vICAgfVxuLy8gfVxuXG4vLyBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0ge1xuLy8gICBib3JkZXItcmFkaXVzOiAyNSU7XG5cbi8vICAgJjpjaGVja2VkIHtcbi8vICAgICBib3gtc2hhZG93OiAkZ2xvdy1zaGFkb3csIGluc2V0IDAgLTAuMWVtIDAgdHJhbnNwYXJlbnRpemUoYmxhY2ssIDAuOCksXG4vLyAgICAgICBpbnNldCAwIDAuMWVtIDAuMWVtIHRyYW5zcGFyZW50aXplKHdoaXRlLCAwLjgpO1xuLy8gICB9XG4vLyB9XG5cbi8vIGlucHV0W3R5cGU9XCJyYWRpb1wiXSB7XG4vLyAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG5cbi8vICAgJjpjaGVja2VkIHtcbi8vICAgICBib3gtc2hhZG93OiAkZ2xvdy1zaGFkb3c7XG4vLyAgICAgYm94LXNoYWRvdzogJGdsb3ctc2hhZG93LCBpbnNldCAwIDAuMTJlbSAwLjFlbSB0cmFuc3BhcmVudGl6ZSh3aGl0ZSwgMC43NSk7XG4vLyAgICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMC4xNWVtO1xuLy8gICB9XG4vLyB9XG5cbi8vIC5jaGVja3RleHQge1xuLy8gICB3aWR0aDogYXV0bztcbi8vICAgbWFyZ2luOiAwLjVlbTtcblxuLy8gICBpbnB1dCB7XG4vLyAgICAgZGlzcGxheTogbm9uZTtcblxuLy8gICAgICsgc3BhbiB7XG4vLyAgICAgICBAZXh0ZW5kIGJ1dHRvbjtcblxuLy8gICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4vLyAgICAgICBwYWRkaW5nOiAxZW07XG4vLyAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwcztcbi8vICAgICB9XG5cbi8vICAgICAmOmNoZWNrZWQgKyBzcGFuIHtcbi8vICAgICAgIEBleHRlbmQgLmJsdWUtYnV0dG9uO1xuXG4vLyAgICAgICBwYWRkaW5nOiAxZW07XG4vLyAgICAgfVxuLy8gICB9XG4vLyB9XG5cbi8vIC5zd2l0Y2gge1xuLy8gICAkX2hlaWdodDogMnJlbTtcbi8vICAgJF93aWR0aDogOHJlbTtcbi8vICAgJF9oYW5kbGUtd2lkdGg6ICRfaGVpZ2h0O1xuLy8gICAkX2hhbmRsZS10cmFuc2xhdGlvbjogJF93aWR0aCAtICRfaGFuZGxlLXdpZHRoO1xuXG4vLyAgIGhlaWdodDogJF9oZWlnaHQ7XG4vLyAgIHdpZHRoOiAkX3dpZHRoO1xuLy8gICBwYWRkaW5nOiAwO1xuLy8gICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbi8vICAgaW5wdXQge1xuLy8gICAgIGRpc3BsYXk6IG5vbmU7XG5cbi8vICAgICArIGRpdiB7XG4vLyAgICAgICBoZWlnaHQ6IDEwMCU7XG4vLyAgICAgICB3aWR0aDogMTAwJTtcbi8vICAgICAgIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xuLy8gICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4vLyAgICAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBib3gtc2hhZG93LCBiYWNrZ3JvdW5kLWNvbG9yO1xuLy8gICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4ycztcbi8vICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuMnM7XG4vLyAgICAgICBib3gtc2hhZG93OiAzcHggM3B4IDJweCAtMnB4IHRyYW5zcGFyZW50aXplKGJsYWNrLCAwLjkpLFxuLy8gICAgICAgICBpbnNldCAycHggMnB4IDJweCAxcHggdHJhbnNwYXJlbnRpemUoYmxhY2ssIDAuOSksXG4vLyAgICAgICAgIGluc2V0IC0ycHggLTJweCAxcHggd2hpdGU7XG5cbi8vICAgICAgICY6OmJlZm9yZSB7XG4vLyAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4vLyAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuLy8gICAgICAgICBoZWlnaHQ6IGNhbGMoI3skX2hhbmRsZS13aWR0aH0gKyA0cHgpO1xuLy8gICAgICAgICB3aWR0aDogY2FsYygjeyRfaGFuZGxlLXdpZHRofSArIDRweCk7XG4vLyAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4vLyAgICAgICAgIGJvcmRlcjogc29saWQgd2hpdGUgM3B4O1xuLy8gICAgICAgICBiYWNrZ3JvdW5kOiAkYmx1ZTtcbi8vICAgICAgICAgYm94LXNoYWRvdzogMCAzcHggMTBweCB0cmFuc3BhcmVudGl6ZShibGFjaywgMC44KSxcbi8vICAgICAgICAgICBpbnNldCAwIC0xcHggM3B4IHRyYW5zcGFyZW50aXplKGJsYWNrLCAwLjkpO1xuLy8gICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNnB4KTtcbi8vICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnM7XG4vLyAgICAgICB9XG4vLyAgICAgfVxuXG4vLyAgICAgJjpjaGVja2VkICsgZGl2IHtcbi8vICAgICAgIGJhY2tncm91bmQ6ICRibHVlO1xuLy8gICAgICAgYm94LXNoYWRvdzogJGdsb3ctc2hhZG93LCBpbnNldCAwIDJweCAycHggMnB4IHRyYW5zcGFyZW50aXplKGJsYWNrLCAwLjcpLFxuLy8gICAgICAgICBpbnNldCAwIDAgdHJhbnNwYXJlbnQ7XG5cbi8vICAgICAgICY6OmJlZm9yZSB7XG4vLyAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKCRfaGFuZGxlLXRyYW5zbGF0aW9uLCAtNnB4KTtcbi8vICAgICAgIH1cbi8vICAgICB9XG4vLyAgIH1cbi8vIH1cblxuLy8gaHIge1xuLy8gICBAZXh0ZW5kIC5pbnNldDtcbi8vICAgd2lkdGg6IDcyJTtcbi8vICAgaGVpZ2h0OiA4cHg7XG4vLyAgIGZsb2F0OiByaWdodDtcbi8vICAgYm9yZGVyOiAwO1xuLy8gfVxuXG4vLyBjb2RlLFxuLy8gcHJlIHtcbi8vICAgcGFkZGluZzogMC41ZW0gMWVtO1xuLy8gICBib3JkZXItcmFkaXVzOiA0cHg7XG4vLyAgIG92ZXJmbG93OiBhdXRvO1xuLy8gICBib3gtc2hhZG93OiAwIDVweCAzMHB4IDAgdHJhbnNwYXJlbnRpemUoYmxhY2ssIDAuOTUpO1xuLy8gfVxuXG4vLyBjb2RlIHtcbi8vICAgYmFja2dyb3VuZDogI2U2ZTZlNjtcbi8vIH1cblxuLy8gcHJlIHtcbi8vICAgYmFja2dyb3VuZDogd2hpdGU7XG4vLyAgIG1hcmdpbjogNGVtIDA7XG4vLyB9XG5cbi8vIGNvZGUsXG4vLyBwcmUge1xuLy8gICAmLFxuLy8gICAmICoge1xuLy8gICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuLy8gICAgIGxpbmUtaGVpZ2h0OiAyZW07XG4vLyAgICAgY3Vyc29yOiBhdXRvO1xuLy8gICAgIHVzZXItc2VsZWN0OiB0ZXh0O1xuLy8gICAgIC13ZWJraXQtdG91Y2gtY2FsbG91dDogdGV4dDtcbi8vICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiB0ZXh0O1xuLy8gICAgIC1raHRtbC11c2VyLXNlbGVjdDogdGV4dDtcbi8vICAgICAtbW96LXVzZXItc2VsZWN0OiB0ZXh0O1xuLy8gICAgIC1tcy11c2VyLXNlbGVjdDogdGV4dDtcbi8vICAgfVxuLy8gfVxuXG4vLyBibG9ja3F1b3RlIHtcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4vLyAgIHBhZGRpbmc6IDAuNWVtIDFlbTtcbi8vICAgYm9yZGVyLXJhZGl1czogNHB4O1xuLy8gICBib3gtc2hhZG93OiAwIDVweCAzMHB4IDAgdHJhbnNwYXJlbnRpemUoYmxhY2ssIDAuOTUpO1xuLy8gICBib3JkZXItbGVmdDogNnB4IHNvbGlkICRibHVlO1xuLy8gfVxuIiwiQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdDYXZlYXQnO1xuICAgIHNyYzogdXJsKCcuLi8uLi9mb250cy9Cb2xkL0NhdmVhdC1Cb2xkLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxuICAgICAgICB1cmwoJy4uLy4uL2ZvbnRzL0JvbGQvQ2F2ZWF0LUJvbGQud29mZicpIGZvcm1hdCgnd29mZicpO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LWRpc3BsYXk6IHN3YXA7XG59XG5cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnQ2F2ZWF0JztcbiAgICBzcmM6IHVybCgnLi4vLi4vZm9udHMvUmVndWxhci9DYXZlYXQtUmVndWxhci53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcbiAgICAgICAgdXJsKCcuLi8uLi9mb250cy9SZWd1bGFyL0NhdmVhdC1SZWd1bGFyLndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LWRpc3BsYXk6IHN3YXA7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ0ZpZ3VyaW5lU3ltYm9sVDEnO1xuICBzcmM6IHVybCgnLi4vLi4vZm9udHMvM3JkIFBhcnR5L0NoZXNzVmFyaWFudHMvRmlndXJpbmVTeW1ib2xUMUJvbGQud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXG4gICAgICB1cmwoJy4uLy4uL2ZvbnRzLzNyZCBQYXJ0eS9DaGVzc1ZhcmlhbnRzL0ZpZ3VyaW5lU3ltYm9sVDFCb2xkLndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdGaWd1cmluZVN5bWJvbFQxJztcbiAgc3JjOiB1cmwoJy4uLy4uL2ZvbnRzLzNyZCBQYXJ0eS9DaGVzc1ZhcmlhbnRzL0ZpZ3VyaW5lU3ltYm9sVDEud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXG4gICAgICB1cmwoJy4uLy4uL2ZvbnRzLzNyZCBQYXJ0eS9DaGVzc1ZhcmlhbnRzL0ZpZ3VyaW5lU3ltYm9sVDEud29mZicpIGZvcm1hdCgnd29mZicpO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnU2FuY3R1YXJ5UGxheWdyb3VuZCc7XG4gIHNyYzogdXJsKCcuLi8uLi9mb250cy8zcmQgUGFydHkvU2FuY3R1YXJ5UGxheWdyb3VuZC53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcbiAgICAgIHVybCgnLi4vLi4vZm9udHMvM3JkIFBhcnR5L1NhbmN0dWFyeVBsYXlncm91bmQud29mZicpIGZvcm1hdCgnd29mZicpO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbn1cblxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdBbWl0YSc7XG4gIHNyYzogdXJsKCcuLi8uLi9mb250cy8zcmQgUGFydHkvQW1pdGEvQW1pdGEtUmVndWxhci53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcbiAgICAgIHVybCgnLi4vLi4vZm9udHMvM3JkIFBhcnR5L0FtaXRhL0FtaXRhLVJlZ3VsYXIud29mZjInKSBmb3JtYXQoJ3dvZmYnKTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG59IiwiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkNhdmVhdFwiO1xuICBzcmM6IHVybChcIi4uLy4uL2ZvbnRzL0JvbGQvQ2F2ZWF0LUJvbGQud29mZjJcIikgZm9ybWF0KFwid29mZjJcIiksIHVybChcIi4uLy4uL2ZvbnRzL0JvbGQvQ2F2ZWF0LUJvbGQud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiQ2F2ZWF0XCI7XG4gIHNyYzogdXJsKFwiLi4vLi4vZm9udHMvUmVndWxhci9DYXZlYXQtUmVndWxhci53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKSwgdXJsKFwiLi4vLi4vZm9udHMvUmVndWxhci9DYXZlYXQtUmVndWxhci53b2ZmXCIpIGZvcm1hdChcIndvZmZcIik7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkZpZ3VyaW5lU3ltYm9sVDFcIjtcbiAgc3JjOiB1cmwoXCIuLi8uLi9mb250cy8zcmQgUGFydHkvQ2hlc3NWYXJpYW50cy9GaWd1cmluZVN5bWJvbFQxQm9sZC53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKSwgdXJsKFwiLi4vLi4vZm9udHMvM3JkIFBhcnR5L0NoZXNzVmFyaWFudHMvRmlndXJpbmVTeW1ib2xUMUJvbGQud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiRmlndXJpbmVTeW1ib2xUMVwiO1xuICBzcmM6IHVybChcIi4uLy4uL2ZvbnRzLzNyZCBQYXJ0eS9DaGVzc1ZhcmlhbnRzL0ZpZ3VyaW5lU3ltYm9sVDEud29mZjJcIikgZm9ybWF0KFwid29mZjJcIiksIHVybChcIi4uLy4uL2ZvbnRzLzNyZCBQYXJ0eS9DaGVzc1ZhcmlhbnRzL0ZpZ3VyaW5lU3ltYm9sVDEud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJTYW5jdHVhcnlQbGF5Z3JvdW5kXCI7XG4gIHNyYzogdXJsKFwiLi4vLi4vZm9udHMvM3JkIFBhcnR5L1NhbmN0dWFyeVBsYXlncm91bmQud29mZjJcIikgZm9ybWF0KFwid29mZjJcIiksIHVybChcIi4uLy4uL2ZvbnRzLzNyZCBQYXJ0eS9TYW5jdHVhcnlQbGF5Z3JvdW5kLndvZmZcIikgZm9ybWF0KFwid29mZlwiKTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiQW1pdGFcIjtcbiAgc3JjOiB1cmwoXCIuLi8uLi9mb250cy8zcmQgUGFydHkvQW1pdGEvQW1pdGEtUmVndWxhci53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKSwgdXJsKFwiLi4vLi4vZm9udHMvM3JkIFBhcnR5L0FtaXRhL0FtaXRhLVJlZ3VsYXIud29mZjJcIikgZm9ybWF0KFwid29mZlwiKTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG59XG4vKioqKioqKioqKioqKioqKioqKiBNZW51ICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKioqKioqKiBNZW51IENvbnRyb2xzICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgQ29udGFpbmVyIFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIENvbnRhaW5lciBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBDb250YWluZXIgVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgSGlnaGxpZ2h0IFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIEFubm90YXRpb24gVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgVmFyaWF0aW9uIFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIFBseSBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKioqIENvbnRyb2wgQ29sb3JzICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqKiBCb2FyZCBDb2xvcnMgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKioqIEZvbnQgU2l6ZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuOnJvb3Qge1xuICAtLWJnLWNvbG9yOiAjZjJmM2Y3O1xuICAtLWZnLWNvbG9yOiAjMzgzYTQxO1xuICAtLXJlZDogI2U0MzAzMDtcbiAgLS1ncmVlbjogIzE5YTE4NztcbiAgLS1ibHVlOiAjMzY3YmYwO1xuICAtLWRhcmstYmx1ZTogIzI2NWFiMTtcbiAgLS1tYXJvb246ICNiODE3NGM7XG4gIC0tcHVycGxlOiAjOGM0MmFiO1xufVxuXG4uYnV0dG9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3JkZXI6IGJsYWNrIDJweCBzb2xpZDtcbiAgYmFja2dyb3VuZDogdmFyKC0tY3NCYWNrZ3JvdW5kKTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG59XG5cbi5hY3Rpb24tY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tY3NCYWNrZ3JvdW5kKTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiA0OHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm5hdmlnYXRpb24tY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDQycHg7XG4gIHdpZHRoOiAxMDAlO1xuICBsZWZ0OiAwcHg7XG4gIGhlaWdodDogNjRweDtcbn1cblxuLnN0YXJ0IHtcbiAgbGVmdDogLTFweDtcbiAgd2lkdGg6IDE0JTtcbiAgdG9wOiA2cHg7XG4gIGJvdHRvbTogNnB4O1xufVxuXG4ucHJldmlvdXMge1xuICBsZWZ0OiBjYWxjKDE0JSAtIDJweCk7XG4gIHdpZHRoOiBjYWxjKDIyJSAtIDJweCk7XG4gIHRvcDogNnB4O1xuICBib3R0b206IDZweDtcbn1cblxuLm5leHQge1xuICB3aWR0aDogY2FsYyg1MCUgKyAzcHgpO1xuICBsZWZ0OiBjYWxjKDM2JSAtIDVweCk7XG4gIHRvcDogNnB4O1xuICBib3R0b206IDZweDtcbn1cblxuLmVuZCB7XG4gIHdpZHRoOiBjYWxjKDE0JSArIDJweCk7XG4gIHJpZ2h0OiAtMXB4O1xuICB0b3A6IDZweDtcbiAgYm90dG9tOiA2cHg7XG59XG5cbi5wbGF5IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMzQlO1xuICBsZWZ0OiA0cHg7XG4gIHRvcDogNHB4O1xuICBib3R0b206IDRweDtcbiAgYm9yZGVyOiB2YXIoLS1jc0NvbG9yKSBzb2xpZCAycHg7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbn1cblxuLnNocmluayB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEyJTtcbiAgbGVmdDogY2FsYyg0OS41JSArIDEycHgpO1xuICB0b3A6IDRweDtcbiAgYm90dG9tOiA0cHg7XG59XG5cbi5zZXR0aW5ncyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEyJTtcbiAgcmlnaHQ6IDJweDtcbiAgdG9wOiA0cHg7XG4gIGJvdHRvbTogNHB4O1xufVxuXG4uZ3JvdyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEyJTtcbiAgbGVmdDogY2FsYyg2My41JSArIDE2cHgpO1xuICB0b3A6IDRweDtcbiAgYm90dG9tOiA0cHg7XG59XG5cbi52aWV3IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTIlO1xuICBsZWZ0OiBjYWxjKDM2LjUlICsgOHB4KTtcbiAgdG9wOiA0cHg7XG4gIGJvdHRvbTogNHB4O1xufVxuXG4uZmVhdGhlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNCU7XG4gIHdpZHRoOiA5MCU7XG4gIGhlaWdodDogOTAlO1xuICB0b3A6IDUlO1xuICBzdHJva2U6IHZhcigtLWNzQ29sb3IpO1xuICBzdHJva2Utd2lkdGg6IDI7XG4gIHN0cm9rZS1saW5lY2FwOiByb3VuZDtcbiAgc3Ryb2tlLWxpbmVqb2luOiBmbGF0O1xuICBmaWxsOiBub25lO1xufVxuXG4uZmVhdGhlci1wbGF5IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA2cHg7XG4gIHdpZHRoOiAzMnB4O1xuICBoZWlnaHQ6IDgwJTtcbiAgdG9wOiAxMCU7XG4gIHN0cm9rZTogdmFyKC0tY3NDb2xvcik7XG4gIHN0cm9rZS13aWR0aDogMjtcbiAgc3Ryb2tlLWxpbmVjYXA6IHJvdW5kO1xuICBzdHJva2UtbGluZWpvaW46IHJvdW5kO1xuICBmaWxsOiBub25lO1xufVxuXG4udGltZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiB2YXIoLS1jc0NvbG9yKTtcbiAgbGluZS1oZWlnaHQ6IDM4cHg7XG4gIG1hcmdpbi1sZWZ0OiAyNHB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICAtby11c2VyLXNlbGVjdDogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OlgaControlsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'olga-controls',
                templateUrl: './olga-controls.component.html',
                styleUrls: ['./olga-controls.component.scss']
            }]
    }], function () { return [{ type: _services_olga_service__WEBPACK_IMPORTED_MODULE_1__["OlgaService"] }, { type: _services_layout_service__WEBPACK_IMPORTED_MODULE_2__["LayoutService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/olga-header/olga-header.component.ts":
/*!******************************************************!*\
  !*** ./src/app/olga-header/olga-header.component.ts ***!
  \******************************************************/
/*! exports provided: OlgaHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OlgaHeaderComponent", function() { return OlgaHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _olga_score_olga_score_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../olga-score/olga-score.component */ "./src/app/olga-score/olga-score.component.ts");
/* harmony import */ var _services_olga_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/olga.service */ "./src/app/services/olga.service.ts");
/* harmony import */ var _services_layout_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/layout.service */ "./src/app/services/layout.service.ts");







const _c0 = ["containerElement"];
const _c1 = ["titleContainerElement"];
const _c2 = ["prevButtonElement"];
const _c3 = ["matchHeaderElement"];
const _c4 = ["nextButtonElement"];
const _c5 = ["resultSectionElement"];
const _c6 = ["variantElement"];
const _c7 = ["playerSectionElement"];
function OlgaHeaderComponent_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 26, 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OlgaHeaderComponent_button_6_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.previousGame(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " < ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function OlgaHeaderComponent_olga_score_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "olga-score", 28, 29);
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("score", ctx_r11.layout.state, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "olga-score-", ctx_r11.olga.UUID, "");
} }
const _c8 = function (a0) { return { disabled: a0 }; };
const MIN_WIDTH_PS = 260; // Minimum width Player Showcase
class OlgaHeaderComponent {
    constructor(olga, layout, renderer) {
        this.olga = olga;
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
        this.eventURL = "https://en.wikipedia.org/wiki/2016_US_Chess_Championship";
        this.searchURL = 'https://www.chessgames.com/perl/ezsearch.pl?search=';
        this.headerContainer = null;
        olga.attachHeader(this);
        layout.attachHeader(this);
    }
    ngOnInit() { }
    setHeader(map) {
        this.eventDate = this.olga.setDate;
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
            const pdata = this.olga.getPlayerData(white);
            if (pdata) {
                this.whiteData = pdata;
                if (!pdata.image) {
                    this.whiteData.image = _services_olga_service__WEBPACK_IMPORTED_MODULE_3__["STOCK_IMAGE"];
                }
            }
            else {
                this.whiteData = { image: _services_olga_service__WEBPACK_IMPORTED_MODULE_3__["STOCK_IMAGE"] };
            }
        }
        const black = map.get('Black');
        if (black) {
            this.black = black;
            const pdata = this.olga.getPlayerData(black);
            if (pdata) {
                this.blackData = pdata;
                if (!pdata.image) {
                    this.blackData.image = _services_olga_service__WEBPACK_IMPORTED_MODULE_3__["STOCK_IMAGE"];
                }
            }
            else {
                this.blackData = { image: _services_olga_service__WEBPACK_IMPORTED_MODULE_3__["STOCK_IMAGE"] };
            }
        }
        const gameData = this.olga.getGameData(this.currentGame);
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
        if (this.olga.setDate.length > 0) {
            this.setDate = this.olga.setDate;
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
            this.result = result + ' in ' + this.olga.getPlyCount() + ' moves';
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
    setMatchUrl(src) {
        this.eventURL = src;
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
            window.open(this.searchURL + output);
        }
    }
    previousGame() {
        if (this.currentGame > 0) {
            --this.currentGame;
        }
        if (this.currentGame >= 0) {
            this.olga.selectGame(this.currentGame);
        }
    }
    nextGame() {
        if (this.currentGame < this.gameCount) {
            this.olga.selectGame(++this.currentGame);
        }
    }
    resize(width, height) {
        if (this.layout.headerElement) {
            this.layout.headerElement.style.height = height + 'px';
        }
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
    }
}
OlgaHeaderComponent.ɵfac = function OlgaHeaderComponent_Factory(t) { return new (t || OlgaHeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_olga_service__WEBPACK_IMPORTED_MODULE_3__["OlgaService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_layout_service__WEBPACK_IMPORTED_MODULE_4__["LayoutService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); };
OlgaHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OlgaHeaderComponent, selectors: [["olga-header"]], viewQuery: function OlgaHeaderComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c3, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c4, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c5, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c6, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_olga_score_olga_score_component__WEBPACK_IMPORTED_MODULE_2__["GamescoreUxComponent"], true);
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
    } }, inputs: { variant: "variant", event: "event", eventDate: "eventDate", setDate: "setDate", white: "white", black: "black", whiteData: "whiteData", blackData: "blackData", whiteElo: "whiteElo", blackElo: "blackElo", round: "round", opening: "opening", site: "site", siteFlag: "siteFlag", currentGame: "currentGame", gameCount: "gameCount", eventURL: "eventURL", searchURL: "searchURL" }, outputs: { result: "result", trophySource: "trophySource" }, decls: 41, vars: 57, consts: [[1, "container"], ["containerElement", ""], [1, "top-header"], ["titleContainerElement", ""], [3, "src"], ["variantElement", ""], ["class", "prev-game", 3, "click", 4, "ngIf"], [1, "match-header"], ["matchHeaderElement", ""], [1, "match-title", 3, "href"], [1, "event-date", 3, "click"], [1, "next-game", 3, "ngClass", "click"], ["nextButtonElement", ""], ["playerSectionElement", ""], [3, "name", "elo", "playerData", "searchURL"], ["whiteShowcaseElement", ""], [3, "name", "color", "elo", "playerData", "searchURL"], ["blackShowcaseElement", ""], ["resultSectionElement", ""], ["resultTrophy", ""], [1, "round"], [1, "site"], [1, "match-date"], [1, "opening"], [1, "result"], [3, "class", "id", 4, "ngIf"], [1, "prev-game", 3, "click"], ["prevButtonElement", ""], [3, "id"], ["score", ""]], template: function OlgaHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, OlgaHeaderComponent_button_6_Template, 3, 0, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OlgaHeaderComponent_Template_div_click_11_listener() { return ctx.searchDate(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OlgaHeaderComponent_Template_button_click_13_listener() { return ctx.nextGame(); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, OlgaHeaderComponent_olga_score_40_Template, 2, 4, "olga-score", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("variant", ctx.layout.state, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("src", "", ctx.environment.imagesPath, "", ctx.variant, ".svg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentGame > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.eventURL, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.event);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.setDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](55, _c8, ctx.currentGame >= ctx.gameCount - 1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("player-section", ctx.layout.state, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("player-showcase", ctx.layout.state, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", ctx.white)("elo", ctx.whiteElo)("playerData", ctx.whiteData)("searchURL", ctx.searchURL);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("player-showcase", ctx.layout.state, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", ctx.black)("color", true)("elo", ctx.blackElo)("playerData", ctx.blackData)("searchURL", ctx.searchURL);
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
    } }, styles: [".background[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -2px;\n  left: -2px;\n  width: 100%;\n  height: 100%;\n  border: grey 2px solid;\n  border-radius: 2px;\n  z-index: 0;\n}\n\n.container[_ngcontent-%COMP%] {\n  border: none;\n  height: auto;\n  border-radius: 0px;\n  padding-bottom: 2px;\n  display: flex;\n  flex-wrap: wrap;\n  flex-basis: auto;\n  z-index: 8;\n  justify-content: space-around;\n  align-content: stretch;\n  -moz-user-select: none;\n  -o-user-select: none;\n  -webkit-user-select: none;\n          user-select: none;\n  overflow-x: hidden;\n}\n\n.top-header[_ngcontent-%COMP%], .top-header2[_ngcontent-%COMP%] {\n  height: auto;\n  width: auto;\n  flex-grow: 10;\n  display: flex;\n  justify-content: center;\n  z-index: 4;\n  order: 1;\n}\n\n.player-showcase[_ngcontent-%COMP%], .player-showcase4[_ngcontent-%COMP%], .player-showcase3[_ngcontent-%COMP%], .player-showcase2[_ngcontent-%COMP%], .player-showcase1[_ngcontent-%COMP%] {\n  margin-top: 12px;\n  min-width: 220;\n  max-height: 120px;\n}\n\n.player-section[_ngcontent-%COMP%], .player-section4[_ngcontent-%COMP%], .player-section3[_ngcontent-%COMP%], .player-section2[_ngcontent-%COMP%], .player-section1[_ngcontent-%COMP%] {\n  height: auto;\n  width: 100%;\n  flex-grow: 6;\n  min-width: 200px;\n  margin-top: -10px;\n  display: flex;\n  flex-wrap: wrap;\n  z-index: 4;\n  order: 2;\n  text-align: center;\n  justify-content: space-around;\n}\n\n.result-section[_ngcontent-%COMP%], .result-section4[_ngcontent-%COMP%], .result-section3[_ngcontent-%COMP%], .result-section2[_ngcontent-%COMP%], .result-section1[_ngcontent-%COMP%] {\n  height: auto;\n  width: auto;\n  padding-left: 4px;\n  padding-right: 4px;\n  z-index: 10;\n  font-size: 18px;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-around;\n  z-index: 10;\n  text-align: center;\n  margin-bottom: 4px;\n}\n\n.result-trophy[_ngcontent-%COMP%], .result-trophy4[_ngcontent-%COMP%], .result-trophy3[_ngcontent-%COMP%], .result-trophy2[_ngcontent-%COMP%], .result-trophy1[_ngcontent-%COMP%] {\n  width: auto;\n  height: 120px;\n  margin-bottom: 10px;\n  margin-right: 20px;\n}\n\n.result-data[_ngcontent-%COMP%], .result-data3[_ngcontent-%COMP%], .result-data2[_ngcontent-%COMP%], .result-data1[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column wrap;\n  line-height: 28px;\n}\n\n.event-date[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: -4px;\n}\n\n.round[_ngcontent-%COMP%] {\n  width: 100%;\n  font-weight: bold;\n  color: #4d4dff;\n  font-size: 24px;\n}\n\n.opening[_ngcontent-%COMP%] {\n  width: 100%;\n  font-size: 14px;\n}\n\n.site[_ngcontent-%COMP%] {\n  width: auto;\n  margin-right: 18px;\n}\n\n.site-flag[_ngcontent-%COMP%], .site-flag4[_ngcontent-%COMP%], .site-flag3[_ngcontent-%COMP%], .site-flag2[_ngcontent-%COMP%], .site-flag1[_ngcontent-%COMP%] {\n  height: 26px;\n  margin-bottom: -4px;\n  margin-right: 8px;\n}\n\n.calendar[_ngcontent-%COMP%], .calendar4[_ngcontent-%COMP%], .calendar3[_ngcontent-%COMP%], .calendar2[_ngcontent-%COMP%], .calendar1[_ngcontent-%COMP%] {\n  height: 28px;\n  margin-bottom: -6px;\n  margin-right: 4px;\n}\n\n.match-date[_ngcontent-%COMP%] {\n  width: auto;\n}\n\n.site-date[_ngcontent-%COMP%], .site-date2[_ngcontent-%COMP%], .site-date1[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  text-align: center;\n  justify-content: center;\n  line-height: 18px;\n  align-items: baseline;\n}\n\n.result[_ngcontent-%COMP%] {\n  width: 100%;\n  font-weight: bold;\n  font-size: 16px;\n  margin-top: -4px;\n}\n\n.result-section1[_ngcontent-%COMP%] {\n  order: 4;\n}\n\n.calendar1[_ngcontent-%COMP%] {\n  height: 22px;\n}\n\n.player-section1[_ngcontent-%COMP%] {\n  flex-grow: unset;\n  width: 100%;\n}\n\n.site-date1[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n\n.variant1[_ngcontent-%COMP%] {\n  height: 24px;\n  margin-top: 12px;\n}\n\n.set-name1[_ngcontent-%COMP%] {\n  order: 7;\n}\n\n.site-flag1[_ngcontent-%COMP%] {\n  height: 16px;\n}\n\n.player-showcase1[_ngcontent-%COMP%] {\n  order: 2;\n  max-height: 64px;\n  max-width: 90%;\n  margin-top: 0px;\n}\n\n.result-trophy1[_ngcontent-%COMP%] {\n  visibility: hidden;\n  height: 0px;\n  width: 0px;\n}\n\n.result-section2[_ngcontent-%COMP%] {\n  order: 3;\n  width: 45%;\n  justify-content: flex-start;\n  align-items: flex-start;\n  margin-top: -12px;\n}\n\n.player-section2[_ngcontent-%COMP%] {\n  order: 2;\n  width: 48%;\n  flex-grow: unset;\n  min-width: 258px;\n}\n\n.site-date2[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n\n.calendar2[_ngcontent-%COMP%] {\n  height: 22px;\n}\n\n.top-header2[_ngcontent-%COMP%] {\n  order: 1;\n  width: calc(100% - 140px);\n}\n\n.variant2[_ngcontent-%COMP%] {\n  order: 0;\n  height: 24px;\n  margin-top: 12px;\n}\n\n.player-showcase2[_ngcontent-%COMP%] {\n  order: 2;\n  max-width: 100%;\n  max-height: 64px;\n  margin-top: 0px;\n  margin-bottom: 14px;\n}\n\n.set-name2[_ngcontent-%COMP%] {\n  order: 7;\n}\n\n.site-flag2[_ngcontent-%COMP%] {\n  height: 16px;\n}\n\n.result-trophy2[_ngcontent-%COMP%] {\n  visibility: hidden;\n  height: 0px;\n  width: 0px;\n}\n\n.variant3[_ngcontent-%COMP%] {\n  margin-left: 4px;\n  margin-top: -20px;\n  flex-grow: 0;\n  order: 0;\n  z-index: 10;\n  width: 180px;\n}\n\n.player-showcase3[_ngcontent-%COMP%] {\n  width: 44%;\n  min-width: 280px;\n}\n\n.result-trophy3[_ngcontent-%COMP%] {\n  order: 2;\n  margin-top: -8px;\n}\n\n.result-section3[_ngcontent-%COMP%] {\n  order: 3;\n  margin-bottom: -2px;\n  width: 100%;\n}\n\n.result-data3[_ngcontent-%COMP%] {\n  order: 1;\n  text-align: center;\n  padding-top: 8px;\n}\n\n.score3[_ngcontent-%COMP%] {\n  order: 6;\n}\n\n.result-section4[_ngcontent-%COMP%] {\n  order: 3;\n  text-align: center;\n  margin-bottom: 2px;\n  width: 100%;\n  justify-content: center;\n}\n\n.site-flag4[_ngcontent-%COMP%] {\n  height: 16px;\n}\n\n.calendar4[_ngcontent-%COMP%] {\n  height: 22px;\n}\n\n.variant4[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  flex-grow: 0;\n  order: 0;\n  margin-left: 1px;\n  z-index: 10;\n  margin-right: -16px;\n  width: 142px;\n}\n\n.set-name4[_ngcontent-%COMP%] {\n  order: 1;\n}\n\n.result-trophy4[_ngcontent-%COMP%] {\n  visibility: hidden;\n  height: 0px;\n  width: 0px;\n}\n\n.player-showcase4[_ngcontent-%COMP%] {\n  width: 88%;\n  min-width: 260px;\n}\n\n.match-header[_ngcontent-%COMP%] {\n  order: 1;\n  height: auto;\n  line-height: 42px;\n  font-size: 140%;\n  margin-right: 3px;\n  margin-left: 3px;\n  text-align: center;\n  min-width: 140px;\n  width: auto;\n  min-height: 42px;\n  padding-bottom: 4px;\n  font-family: Candara;\n  flex-grow: 2;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n\n.match-header[_ngcontent-%COMP%]   .match-date[_ngcontent-%COMP%] {\n  height: 22px;\n  font-size: 16px;\n  font-weight: bold;\n  text-align: center;\n  line-height: 16px;\n  margin-top: -8px;\n}\n\n.variant-header[_ngcontent-%COMP%] {\n  height: 24px;\n  width: 217px;\n  font-size: 24px;\n  font-family: Arial, Helvetica, sans-serif;\n  border-radius: 8px;\n  line-height: 24px;\n  border: 2px solid black;\n}\n\n.prev-game[_ngcontent-%COMP%] {\n  order: 0;\n  height: 36px;\n  width: 36px;\n  border-radius: 2px;\n  margin-top: 3px;\n}\n\n.next-game[_ngcontent-%COMP%] {\n  order: 2;\n  margin-top: 3px;\n  height: 36px;\n  width: 36px;\n  border-radius: 2px;\n}\n\n.disabled[_ngcontent-%COMP%] {\n  visibility: hidden;\n}\n\n.primary-data-box[_ngcontent-%COMP%] {\n  width: 63%;\n  height: 36px;\n  background: #4d1f00;\n  color: white;\n  float: left;\n  margin-top: 8px;\n  text-align: center;\n  border: 1px solid black;\n  border-radius: 2px;\n  padding-top: 2px;\n  z-index: 10;\n  order: 6;\n}\n\n.secondary-data-box[_ngcontent-%COMP%] {\n  width: 34%;\n  height: 36px;\n  background: #f67d2c;\n  color: white;\n  float: right;\n  border: 1px solid black;\n  border-radius: 2px;\n  margin-top: 2px;\n  text-align: center;\n  z-index: 4;\n  order: 7;\n}\n\n.box-title[_ngcontent-%COMP%] {\n  color: #fabe0b;\n  text-align: left;\n  margin-left: 2px;\n  z-index: 4;\n}\n\n.secondary-box-title[_ngcontent-%COMP%] {\n  color: #532c00;\n  text-align: right;\n  padding-right: 8px;\n  z-index: 4;\n}\n\nolga-score[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  margin-left: 4px;\n  order: 4;\n  height: auto;\n  overflow-x: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb2xnYS1oZWFkZXIvb2xnYS1oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQURKOztBQUlBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSw2QkFBQTtFQUNBLHNCQUFBO0VBRUEsc0JBQUE7RUFFQSxvQkFBQTtFQUNBLHlCQUFBO1VBQUEsaUJBQUE7RUFDQSxrQkFBQTtBQURKOztBQUlBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7QUFESjs7QUFHQTtFQUNJLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBQUo7O0FBR0E7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7QUFBSjs7QUFFQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSw2QkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFFSjs7QUFDQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0FBRUo7O0FBUUE7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7QUFMSjs7QUFPQTtFQUNJLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBSko7O0FBT0E7RUFDSSxXQUFBO0VBQ0EsZUFBQTtBQUpKOztBQU9BO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0FBSko7O0FBT0E7RUFDSSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQUpKOztBQU1BO0VBQ0ksWUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFISjs7QUFLQTtFQUNJLFdBQUE7QUFGSjs7QUFJQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7QUFESjs7QUFJQTtFQUNJLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQURKOztBQUtBO0VBRUksUUFBQTtBQUhKOztBQUtBO0VBRUksWUFBQTtBQUhKOztBQUtBO0VBRUksZ0JBQUE7RUFDQSxXQUFBO0FBSEo7O0FBS0E7RUFFSSxlQUFBO0FBSEo7O0FBTUE7RUFFSSxZQUFBO0VBQ0EsZ0JBQUE7QUFKSjs7QUFPQTtFQUNJLFFBQUE7QUFKSjs7QUFNQTtFQUVJLFlBQUE7QUFKSjs7QUFNQTtFQUVJLFFBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBSko7O0FBTUE7RUFFSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FBSko7O0FBWUE7RUFFSSxRQUFBO0VBQ0EsVUFBQTtFQUNBLDJCQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtBQVZKOztBQVlBO0VBRUksUUFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBVko7O0FBWUE7RUFFSSxlQUFBO0FBVko7O0FBWUE7RUFFSSxZQUFBO0FBVko7O0FBWUE7RUFFSSxRQUFBO0VBQ0EseUJBQUE7QUFWSjs7QUFZQTtFQUVJLFFBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFWSjs7QUFZQTtFQUVJLFFBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUFWSjs7QUFZQTtFQUNJLFFBQUE7QUFUSjs7QUFnQkE7RUFFSSxZQUFBO0FBZEo7O0FBZ0JBO0VBRUksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQWRKOztBQW9CQTtFQUVJLGdCQUFBO0VBQWdCLGlCQUFBO0VBQ2hCLFlBQUE7RUFBWSxRQUFBO0VBQ1osV0FBQTtFQUFXLFlBQUE7QUFmZjs7QUFvQkE7RUFFSSxVQUFBO0VBQ0EsZ0JBQUE7QUFsQko7O0FBcUJBO0VBRUksUUFBQTtFQUNBLGdCQUFBO0FBbkJKOztBQXNCQTtFQUVJLFFBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUFwQko7O0FBNEJBO0VBRUksUUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUExQko7O0FBNEJBO0VBQ0ksUUFBQTtBQXpCSjs7QUErQkE7RUFFSSxRQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtBQTdCSjs7QUFrQ0E7RUFFSSxZQUFBO0FBaENKOztBQWtDQTtFQUVJLFlBQUE7QUFoQ0o7O0FBa0NBO0VBRUksZUFBQTtFQUFlLFlBQUE7RUFDZixRQUFBO0VBQVEsZ0JBQUE7RUFDUixXQUFBO0VBQVcsbUJBQUE7RUFDWCxZQUFBO0FBN0JKOztBQWdDQTtFQUNJLFFBQUE7QUE3Qko7O0FBK0JBO0VBRUksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQTdCSjs7QUErQkE7RUFFSSxVQUFBO0VBQ0EsZ0JBQUE7QUE3Qko7O0FBNkNBO0VBQ0ksUUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FBMUNKOztBQTJDSTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUF6Q1I7O0FBOENBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EseUNBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7QUEzQ0o7O0FBOENBO0VBQ0ksUUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBM0NKOztBQThDQTtFQUNJLFFBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQTNDSjs7QUE4Q0E7RUFDSSxrQkFBQTtBQTNDSjs7QUE4Q0E7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtBQTNDSjs7QUE4Q0E7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7QUEzQ0o7O0FBOENBO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0FBM0NKOztBQThDQTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQTNDSjs7QUE4Q0E7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUEzQ0oiLCJmaWxlIjoic3JjL2FwcC9vbGdhLWhlYWRlci9vbGdhLWhlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4vLyBSb290IE9iamVjdHMgKGJhc2Ugc3RhdGUpXHJcbi5iYWNrZ3JvdW5ke1xyXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICB0b3A6LTJweDtcclxuICAgIGxlZnQ6LTJweDtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBoZWlnaHQ6MTAwJTtcclxuICAgIGJvcmRlcjogZ3JleSAycHggc29saWQ7XHJcbiAgICBib3JkZXItcmFkaXVzOjJweDtcclxuICAgIHotaW5kZXg6MDtcclxufVxyXG5cclxuLmNvbnRhaW5lcntcclxuICAgIGJvcmRlcjpub25lO1xyXG4gICAgaGVpZ2h0OmF1dG87XHJcbiAgICBib3JkZXItcmFkaXVzOjBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAycHg7XHJcbiAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICBmbGV4LXdyYXA6d3JhcDtcclxuICAgIGZsZXgtYmFzaXM6IGF1dG87XHJcbiAgICB6LWluZGV4OiA4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICBhbGlnbi1jb250ZW50OnN0cmV0Y2g7XHJcbiAgICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgLW8tdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIG92ZXJmbG93LXg6aGlkZGVuO1xyXG59XHJcblxyXG4udG9wLWhlYWRlcntcclxuICAgIGhlaWdodDphdXRvO1xyXG4gICAgd2lkdGg6YXV0bztcclxuICAgIGZsZXgtZ3JvdzoxMDtcclxuICAgIGRpc3BsYXk6ZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XHJcbiAgICB6LWluZGV4OjQ7XHJcbiAgICBvcmRlcjoxO1xyXG59XHJcbi5wbGF5ZXItc2hvd2Nhc2V7XHJcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xyXG4gICAgbWluLXdpZHRoOiAyMjA7XHJcbiAgICBtYXgtaGVpZ2h0OjEyMHB4O1xyXG59XHJcblxyXG4ucGxheWVyLXNlY3Rpb257XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgZmxleC1ncm93OiA2O1xyXG4gICAgbWluLXdpZHRoOiAyMDBweDtcclxuICAgIG1hcmdpbi10b3A6IC0xMHB4O1xyXG4gICAgZGlzcGxheTpmbGV4O1xyXG4gICAgZmxleC13cmFwOndyYXA7XHJcbiAgICB6LWluZGV4OjQ7XHJcbiAgICBvcmRlcjoyO1xyXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxufVxyXG4ucmVzdWx0LXNlY3Rpb257XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIHBhZGRpbmctbGVmdDo0cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OjRweDtcclxuICAgIHotaW5kZXg6MTA7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICBmbGV4LXdyYXA6d3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgei1pbmRleDoxMDtcclxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTo0cHg7XHJcbn1cclxuLnJlc3VsdC10cm9waHl7XHJcbiAgICB3aWR0aDphdXRvO1xyXG4gICAgaGVpZ2h0OjEyMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbToxMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG4ucmVzdWx0LWRhdGF7XHJcbiAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDI4cHg7XHJcbn1cclxuLnZhcmlhbnR7XHJcblxyXG59XHJcblxyXG4uc2V0LW5hbWV7XHJcblxyXG59XHJcblxyXG4uZXZlbnQtZGF0ZXtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBtYXJnaW4tdG9wOi00cHg7XHJcbn1cclxuLnJvdW5ke1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6IHJnYig3NywgNzcsIDI1NSk7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbn1cclxuXHJcbi5vcGVuaW5ne1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGZvbnQtc2l6ZToxNHB4O1xyXG59XHJcblxyXG4uc2l0ZXtcclxuICAgIHdpZHRoOmF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE4cHg7XHJcbn1cclxuXHJcbi5zaXRlLWZsYWd7XHJcbiAgICBoZWlnaHQ6IDI2cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAtNHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OjhweDtcclxufVxyXG4uY2FsZW5kYXJ7XHJcbiAgICBoZWlnaHQ6MjhweDtcclxuICAgIG1hcmdpbi1ib3R0b206LTZweDtcclxuICAgIG1hcmdpbi1yaWdodDo0cHg7XHJcbn1cclxuLm1hdGNoLWRhdGV7XHJcbiAgICB3aWR0aDphdXRvO1xyXG59XHJcbi5zaXRlLWRhdGV7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgZGlzcGxheTpmbGV4O1xyXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGxpbmUtaGVpZ2h0OjE4cHg7XHJcbiAgICBhbGlnbi1pdGVtczpiYXNlbGluZTtcclxufVxyXG5cclxuLnJlc3VsdHtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIG1hcmdpbi10b3A6LTRweDtcclxufVxyXG5cclxuLy8gU3RhdGUgMSAoU3BsaXQgU0JTIFBvcnRyYWl0KVxyXG4ucmVzdWx0LXNlY3Rpb24xe1xyXG4gICAgQGV4dGVuZCAucmVzdWx0LXNlY3Rpb247XHJcbiAgICBvcmRlcjo0O1xyXG59XHJcbi5jYWxlbmRhcjF7XHJcbiAgICBAZXh0ZW5kIC5jYWxlbmRhcjtcclxuICAgIGhlaWdodDoyMnB4O1xyXG59XHJcbi5wbGF5ZXItc2VjdGlvbjF7XHJcbiAgICBAZXh0ZW5kIC5wbGF5ZXItc2VjdGlvbjtcclxuICAgIGZsZXgtZ3JvdzogdW5zZXQ7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG59XHJcbi5zaXRlLWRhdGUxe1xyXG4gICAgQGV4dGVuZCAuc2l0ZS1kYXRlO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG4udmFyaWFudDF7XHJcbiAgICBAZXh0ZW5kIC52YXJpYW50O1xyXG4gICAgaGVpZ2h0OjI0cHg7XHJcbiAgICBtYXJnaW4tdG9wOjEycHg7XHJcbn1cclxuXHJcbi5zZXQtbmFtZTF7XHJcbiAgICBvcmRlcjogNztcclxufVxyXG4uc2l0ZS1mbGFnMXtcclxuICAgIEBleHRlbmQgLnNpdGUtZmxhZztcclxuICAgIGhlaWdodDoxNnB4O1xyXG59XHJcbi5wbGF5ZXItc2hvd2Nhc2Uxe1xyXG4gICAgQGV4dGVuZCAucGxheWVyLXNob3djYXNlO1xyXG4gICAgb3JkZXI6MjtcclxuICAgIG1heC1oZWlnaHQ6NjRweDtcclxuICAgIG1heC13aWR0aDo5MCU7XHJcbiAgICBtYXJnaW4tdG9wOjBweDtcclxufVxyXG4ucmVzdWx0LXRyb3BoeTF7XHJcbiAgICBAZXh0ZW5kIC5yZXN1bHQtdHJvcGh5O1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgaGVpZ2h0OjBweDtcclxuICAgIHdpZHRoOjBweDtcclxufVxyXG4ucmVzdWx0LWRhdGExe1xyXG4gICAgQGV4dGVuZCAucmVzdWx0LWRhdGE7XHJcbiAgICBcclxufVxyXG5cclxuLy8gU3RhdGUgMiAoRnVsbCBQb3J0cmFpdClcclxuLnJlc3VsdC1zZWN0aW9uMntcclxuICAgIEBleHRlbmQgLnJlc3VsdC1zZWN0aW9uO1xyXG4gICAgb3JkZXI6MztcclxuICAgIHdpZHRoOjQ1JTtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgbWFyZ2luLXRvcDotMTJweDtcclxufVxyXG4ucGxheWVyLXNlY3Rpb24ye1xyXG4gICAgQGV4dGVuZCAucGxheWVyLXNlY3Rpb247XHJcbiAgICBvcmRlcjoyO1xyXG4gICAgd2lkdGg6NDglO1xyXG4gICAgZmxleC1ncm93OiB1bnNldDtcclxuICAgIG1pbi13aWR0aDoyNThweDtcclxufVxyXG4uc2l0ZS1kYXRlMntcclxuICAgIEBleHRlbmQgLnNpdGUtZGF0ZTtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG4uY2FsZW5kYXIye1xyXG4gICAgQGV4dGVuZCAuY2FsZW5kYXI7XHJcbiAgICBoZWlnaHQ6MjJweDtcclxufVxyXG4udG9wLWhlYWRlcjJ7XHJcbiAgICBAZXh0ZW5kIC50b3AtaGVhZGVyO1xyXG4gICAgb3JkZXI6MTtcclxuICAgIHdpZHRoOmNhbGMoMTAwJSAtIDE0MHB4KTtcclxufVxyXG4udmFyaWFudDJ7XHJcbiAgICBAZXh0ZW5kIC52YXJpYW50O1xyXG4gICAgb3JkZXI6MDtcclxuICAgIGhlaWdodDoyNHB4O1xyXG4gICAgbWFyZ2luLXRvcDoxMnB4O1xyXG59XHJcbi5wbGF5ZXItc2hvd2Nhc2Uye1xyXG4gICAgQGV4dGVuZCAucGxheWVyLXNob3djYXNlO1xyXG4gICAgb3JkZXI6MjtcclxuICAgIG1heC13aWR0aDoxMDAlO1xyXG4gICAgbWF4LWhlaWdodDo2NHB4O1xyXG4gICAgbWFyZ2luLXRvcDowcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOjE0cHg7XHJcbn1cclxuLnNldC1uYW1lMntcclxuICAgIG9yZGVyOiA3O1xyXG4gICAgQGV4dGVuZCAuc2V0LW5hbWU7XHJcbn1cclxuLnJlc3VsdC1kYXRhMntcclxuICAgIEBleHRlbmQgLnJlc3VsdC1kYXRhO1xyXG5cclxufVxyXG4uc2l0ZS1mbGFnMntcclxuICAgIEBleHRlbmQgLnNpdGUtZmxhZztcclxuICAgIGhlaWdodDoxNnB4O1xyXG59XHJcbi5yZXN1bHQtdHJvcGh5MntcclxuICAgIEBleHRlbmQgLnJlc3VsdC10cm9waHk7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICBoZWlnaHQ6MHB4O1xyXG4gICAgd2lkdGg6MHB4O1xyXG59XHJcblxyXG4vLyBTdGF0ZSAzIChGdWxsIExhbmRzY2FwZSAtIHByZWZlcnJlZClcclxuXHJcblxyXG4udmFyaWFudDN7XHJcbiAgICBAZXh0ZW5kIC52YXJpYW50O1xyXG4gICAgbWFyZ2luLWxlZnQ6NHB4O21hcmdpbi10b3A6LTIwcHg7XHJcbiAgICBmbGV4LWdyb3c6MDtvcmRlcjowO1xyXG4gICAgei1pbmRleDoxMDt3aWR0aDoxODBweDtcclxufVxyXG4ucGxheWVyLXNlY3Rpb24ze1xyXG4gICAgQGV4dGVuZCAucGxheWVyLXNlY3Rpb247XHJcbn1cclxuLnBsYXllci1zaG93Y2FzZTN7XHJcbiAgICBAZXh0ZW5kIC5wbGF5ZXItc2hvd2Nhc2U7XHJcbiAgICB3aWR0aDogNDQlO1xyXG4gICAgbWluLXdpZHRoOjI4MHB4O1xyXG59XHJcblxyXG4ucmVzdWx0LXRyb3BoeTN7XHJcbiAgICBAZXh0ZW5kIC5yZXN1bHQtdHJvcGh5O1xyXG4gICAgb3JkZXI6MjtcclxuICAgIG1hcmdpbi10b3A6IC04cHg7XHJcbn1cclxuXHJcbi5yZXN1bHQtc2VjdGlvbjN7XHJcbiAgICBAZXh0ZW5kIC5yZXN1bHQtc2VjdGlvbjtcclxuICAgIG9yZGVyOjM7XHJcbiAgICBtYXJnaW4tYm90dG9tOi0ycHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4uY2FsZW5kYXIze1xyXG4gICAgQGV4dGVuZCAuY2FsZW5kYXI7XHJcbn1cclxuLnNpdGUtZmxhZzN7XHJcbiAgICBAZXh0ZW5kIC5zaXRlLWZsYWc7XHJcbn1cclxuLnJlc3VsdC1kYXRhM3tcclxuICAgIEBleHRlbmQgLnJlc3VsdC1kYXRhO1xyXG4gICAgb3JkZXI6MTtcclxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgcGFkZGluZy10b3A6OHB4O1xyXG59XHJcbi5zY29yZTN7XHJcbiAgICBvcmRlcjo2O1xyXG59XHJcblxyXG5cclxuXHJcbi8vIFN0YXRlIDQgKExhbmRzY2FwZSBDb2x1bW4pXHJcbi5yZXN1bHQtc2VjdGlvbjR7XHJcbiAgICBAZXh0ZW5kIC5yZXN1bHQtc2VjdGlvbjtcclxuICAgIG9yZGVyOjM7XHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206MnB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4ucGxheWVyLXNlY3Rpb240e1xyXG4gICAgQGV4dGVuZCAucGxheWVyLXNlY3Rpb247XHJcbn1cclxuLnNpdGUtZmxhZzR7XHJcbiAgICBAZXh0ZW5kIC5zaXRlLWZsYWc7XHJcbiAgICBoZWlnaHQ6IDE2cHg7XHJcbn1cclxuLmNhbGVuZGFyNHtcclxuICAgIEBleHRlbmQgLmNhbGVuZGFyO1xyXG4gICAgaGVpZ2h0OiAyMnB4O1xyXG59XHJcbi52YXJpYW50NHtcclxuICAgIEBleHRlbmQgLnZhcmlhbnQ7XHJcbiAgICBtYXJnaW4tdG9wOjhweDtmbGV4LWdyb3c6MDtcclxuICAgIG9yZGVyOjA7bWFyZ2luLWxlZnQ6MXB4O1xyXG4gICAgei1pbmRleDoxMDttYXJnaW4tcmlnaHQ6LTE2cHg7ICAgIFxyXG4gICAgd2lkdGg6MTQycHg7XHJcbn1cclxuXHJcbi5zZXQtbmFtZTR7XHJcbiAgICBvcmRlcjogMTtcclxufVxyXG4ucmVzdWx0LXRyb3BoeTR7XHJcbiAgICBAZXh0ZW5kIC5yZXN1bHQtdHJvcGh5O1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgaGVpZ2h0OjBweDtcclxuICAgIHdpZHRoOjBweDtcclxufVxyXG4ucGxheWVyLXNob3djYXNlNHtcclxuICAgIEBleHRlbmQgLnBsYXllci1zaG93Y2FzZTtcclxuICAgIHdpZHRoOjg4JTtcclxuICAgIG1pbi13aWR0aDoyNjBweDtcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbi5tYXRjaC1oZWFkZXJ7XHJcbiAgICBvcmRlcjoxO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgbGluZS1oZWlnaHQ6NDJweDtcclxuICAgIGZvbnQtc2l6ZTogMTQwJTtcclxuICAgIG1hcmdpbi1yaWdodDozcHg7XHJcbiAgICBtYXJnaW4tbGVmdDozcHg7XHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgIG1pbi13aWR0aDogMTQwcHg7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIG1pbi1oZWlnaHQ6NDJweDtcclxuICAgIHBhZGRpbmctYm90dG9tOjRweDtcclxuICAgIGZvbnQtZmFtaWx5OiBDYW5kYXJhO1xyXG4gICAgZmxleC1ncm93OjI7XHJcbiAgICB3aGl0ZS1zcGFjZTpub3dyYXA7XHJcbiAgICB0ZXh0LW92ZXJmbG93OmVsbGlwc2lzO1xyXG4gICAgb3ZlcmZsb3c6aGlkZGVuO1xyXG4gICAgLm1hdGNoLWRhdGV7XHJcbiAgICAgICAgaGVpZ2h0OiAyMnB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZToxNnB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBsaW5lLWhlaWdodDoxNnB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6LThweDtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbi52YXJpYW50LWhlYWRlcntcclxuICAgIGhlaWdodDogMjRweDtcclxuICAgIHdpZHRoOjIxN3B4O1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xyXG59XHJcblxyXG4ucHJldi1nYW1le1xyXG4gICAgb3JkZXI6MDtcclxuICAgIGhlaWdodDozNnB4O1xyXG4gICAgd2lkdGg6MzZweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgIG1hcmdpbi10b3A6IDNweDtcclxufVxyXG5cclxuLm5leHQtZ2FtZXtcclxuICAgIG9yZGVyOjI7XHJcbiAgICBtYXJnaW4tdG9wOiAzcHg7XHJcbiAgICBoZWlnaHQ6MzZweDtcclxuICAgIHdpZHRoOjM2cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbn1cclxuXHJcbi5kaXNhYmxlZHtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxufVxyXG5cclxuLnByaW1hcnktZGF0YS1ib3h7XHJcbiAgICB3aWR0aDo2MyU7XHJcbiAgICBoZWlnaHQ6IDM2cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoNzcsIDMxLCAwKTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZsb2F0OmxlZnQ7XHJcbiAgICBtYXJnaW4tdG9wOjhweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgcGFkZGluZy10b3A6MnB4O1xyXG4gICAgei1pbmRleDogMTA7XHJcbiAgICBvcmRlcjo2O1xyXG59XHJcblxyXG4uc2Vjb25kYXJ5LWRhdGEtYm94e1xyXG4gICAgd2lkdGg6MzQlO1xyXG4gICAgaGVpZ2h0OiAzNnB4O1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDI0NiwgMTI1LCA0NCk7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmbG9hdDpyaWdodDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgbWFyZ2luLXRvcDoycHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB6LWluZGV4OiA0O1xyXG4gICAgb3JkZXI6NztcclxufVxyXG5cclxuLmJveC10aXRsZSB7XHJcbiAgICBjb2xvcjogI2ZhYmUwYjtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBtYXJnaW4tbGVmdDogMnB4O1xyXG4gICAgei1pbmRleDogNDtcclxufVxyXG5cclxuLnNlY29uZGFyeS1ib3gtdGl0bGUge1xyXG4gICAgY29sb3I6ICM1MzJjMDA7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDhweDtcclxuICAgIHotaW5kZXg6IDQ7XHJcbn1cclxuXHJcbm9sZ2Etc2NvcmUge1xyXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6NHB4O1xyXG4gICAgb3JkZXI6NDtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgIFxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OlgaHeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'olga-header',
                templateUrl: './olga-header.component.html',
                styleUrls: ['./olga-header.component.scss']
            }]
    }], function () { return [{ type: _services_olga_service__WEBPACK_IMPORTED_MODULE_3__["OlgaService"] }, { type: _services_layout_service__WEBPACK_IMPORTED_MODULE_4__["LayoutService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }]; }, { variant: [{
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
        }], eventURL: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], searchURL: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
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
            args: [_olga_score_olga_score_component__WEBPACK_IMPORTED_MODULE_2__["GamescoreUxComponent"]]
        }], playerSectionElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['playerSectionElement']
        }] }); })();


/***/ }),

/***/ "./src/app/olga-header/player-showcase/player-showcase.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/olga-header/player-showcase/player-showcase.component.ts ***!
  \**************************************************************************/
/*! exports provided: PlayerShowcaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerShowcaseComponent", function() { return PlayerShowcaseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _services_olga_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/olga.service */ "./src/app/services/olga.service.ts");
/* harmony import */ var src_app_services_layout_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/layout.service */ "./src/app/services/layout.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function PlayerShowcaseComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlayerShowcaseComponent_div_6_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.search(ctx_r7.name); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.name);
} }
function PlayerShowcaseComponent_img_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 10);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "", ctx_r1.environment.piecesPath, "bpawn.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function PlayerShowcaseComponent_img_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 10);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "", ctx_r2.environment.piecesPath, "wpawn.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function PlayerShowcaseComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlayerShowcaseComponent_div_10_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.search(ctx_r9.name); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.name);
} }
function PlayerShowcaseComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlayerShowcaseComponent_div_12_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.search(ctx_r11.playerData.born); });
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
function PlayerShowcaseComponent_div_13_Template(rf, ctx) { if (rf & 1) {
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
function PlayerShowcaseComponent_div_14_Template(rf, ctx) { if (rf & 1) {
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
class PlayerShowcaseComponent {
    constructor(layout) {
        this.layout = layout;
        this.name = '';
        this.color = false;
        this.elo = '';
        this.title = '';
        this.playerData = { image: _services_olga_service__WEBPACK_IMPORTED_MODULE_2__["STOCK_IMAGE"] };
        this.searchURL = '';
        this.environment = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"];
    }
    ngOnInit() {
    }
    search(value) {
        if (this.searchURL) {
            window.open(this.searchURL + value);
        }
    }
}
PlayerShowcaseComponent.ɵfac = function PlayerShowcaseComponent_Factory(t) { return new (t || PlayerShowcaseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_layout_service__WEBPACK_IMPORTED_MODULE_3__["LayoutService"])); };
PlayerShowcaseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PlayerShowcaseComponent, selectors: [["player-showcase"]], inputs: { name: "name", color: "color", elo: "elo", title: "title", playerData: "playerData", searchURL: "searchURL" }, decls: 15, vars: 19, consts: [[1, "showcase-box"], [1, "player-image", 3, "src"], [1, "photo-frame", 3, "src"], ["class", "player-nameP", 3, "click", 4, "ngIf"], ["class", "color-image", 3, "src", 4, "ngIf"], ["class", "player-name", 3, "click", 4, "ngIf"], [1, "player-data-box"], ["class", "player-data", 3, "click", 4, "ngIf"], ["class", "player-data", 4, "ngIf"], [1, "player-nameP", 3, "click"], [1, "color-image", 3, "src"], [1, "player-name", 3, "click"], [1, "player-data", 3, "click"], [1, "player-data"]], template: function PlayerShowcaseComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PlayerShowcaseComponent_div_6_Template, 2, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, PlayerShowcaseComponent_img_7_Template, 1, 1, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, PlayerShowcaseComponent_img_8_Template, 1, 1, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, PlayerShowcaseComponent_div_10_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, PlayerShowcaseComponent_div_12_Template, 4, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, PlayerShowcaseComponent_div_13_Template, 4, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, PlayerShowcaseComponent_div_14_Template, 4, 1, "div", 8);
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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: ["@font-face {\n  font-family: \"Caveat\";\n  src: url('Caveat-Bold.woff2') format(\"woff2\"), url('Caveat-Bold.woff') format(\"woff\");\n  font-weight: bold;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"Caveat\";\n  src: url('Caveat-Regular.woff2') format(\"woff2\"), url('Caveat-Regular.woff') format(\"woff\");\n  font-weight: 600;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"FigurineSymbolT1\";\n  src: url('FigurineSymbolT1Bold.woff2') format(\"woff2\"), url('FigurineSymbolT1Bold.woff') format(\"woff\");\n  font-weight: bold;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"FigurineSymbolT1\";\n  src: url('FigurineSymbolT1.woff2') format(\"woff2\"), url('FigurineSymbolT1.woff') format(\"woff\");\n  font-weight: 600;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"SanctuaryPlayground\";\n  src: url('SanctuaryPlayground.woff2') format(\"woff2\"), url('SanctuaryPlayground.woff') format(\"woff\");\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"Amita\";\n  src: url('Amita-Regular.woff2') format(\"woff2\"), url('Amita-Regular.woff2') format(\"woff\");\n  font-style: normal;\n  font-display: swap;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n[_ngcontent-%COMP%]:root {\n  --bg-color: #f2f3f7;\n  --fg-color: #383a41;\n  --red: #e43030;\n  --green: #19a187;\n  --blue: #367bf0;\n  --dark-blue: #265ab1;\n  --maroon: #b8174c;\n  --purple: #8c42ab;\n}\n.showcase-box[_ngcontent-%COMP%] {\n  border-radius: 1px;\n  margin: 2px;\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-wrap: nowrap;\n  max-height: 180px;\n}\n.player-header[_ngcontent-%COMP%], .player-header4[_ngcontent-%COMP%], .player-header3[_ngcontent-%COMP%], .player-header2[_ngcontent-%COMP%], .player-header1[_ngcontent-%COMP%] {\n  font-size: 18px;\n  border-radius: 1px;\n  text-align: right;\n  padding-right: 4px;\n  background: #f0e7d3;\n  background: linear-gradient(127deg, rgba(240, 231, 211, 0.623) 0%, rgba(175, 175, 175, 0.75) 44%, #7e7e7e 100%);\n  order: 0;\n}\n.player-header1[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.player-header2[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.color-image[_ngcontent-%COMP%] {\n  height: 18px;\n  margin-right: 4px;\n  margin-top: 4px;\n  order: 3;\n}\n.player-image[_ngcontent-%COMP%] {\n  height: 68%;\n  max-width: 78px;\n}\n.player-frame[_ngcontent-%COMP%], .player-frame4[_ngcontent-%COMP%], .player-frame3[_ngcontent-%COMP%], .player-frame2[_ngcontent-%COMP%], .player-frame1[_ngcontent-%COMP%] {\n  width: 90px;\n  display: flex;\n  order: 0;\n}\n.player-frame1[_ngcontent-%COMP%] {\n  height: 120%;\n  width: unset;\n}\n.player-frame2[_ngcontent-%COMP%] {\n  height: 120%;\n  width: unset;\n}\n.player-details[_ngcontent-%COMP%], .player-details4[_ngcontent-%COMP%], .player-details3[_ngcontent-%COMP%], .player-details2[_ngcontent-%COMP%], .player-details1[_ngcontent-%COMP%] {\n  min-width: 160px;\n  height: auto;\n  width: 100%;\n  order: 2;\n}\n.player-details1[_ngcontent-%COMP%] {\n  margin-left: -52px;\n}\n.player-details2[_ngcontent-%COMP%] {\n  margin-left: -52px;\n}\n.photo-frame[_ngcontent-%COMP%] {\n  transform-origin: center;\n  height: 100%;\n  transform: translate(-87%, -9%);\n}\n.player-name[_ngcontent-%COMP%], .player-nameP[_ngcontent-%COMP%] {\n  margin-left: 2px;\n  text-align: center;\n  font-weight: bold;\n  order: 1;\n  min-width: 60%;\n  padding-right: 2px;\n  font-size: 20px;\n  margin-top: 2px;\n  font-family: \"Amita\";\n  line-height: 24px;\n}\n.player-nameP[_ngcontent-%COMP%] {\n  text-align: left;\n  font-size: 18px;\n  line-height: 0px;\n  transform: translate(8px, 13px);\n  margin-top: unset;\n  min-width: unset;\n  margin-left: unset;\n}\n.player-data[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-left: 4px;\n  margin-right: 4px;\n  font-size: var(--hdrDataFontSize);\n}\n.player-data-box[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: row wrap;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMuc2NzcyIsInNyYy9hc3NldHMvc2Nzcy9tb2R1bGVzL19mb250cy5zY3NzIiwic3JjL2FwcC9vbGdhLWhlYWRlci9wbGF5ZXItc2hvd2Nhc2UvcGxheWVyLXNob3djYXNlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhFQUFBO0FDQUE7RUFDSSxxQkFBQTtFQUNBLHFGQUFBO0VBRUEsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDQ0o7QURFQTtFQUNJLHFCQUFBO0VBQ0EsMkZBQUE7RUFFQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNESjtBRElBO0VBQ0UsK0JBQUE7RUFDQSx1R0FBQTtFQUVBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0hGO0FETUE7RUFDRSwrQkFBQTtFQUNBLCtGQUFBO0VBRUEsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDTEY7QURRQTtFQUNFLGtDQUFBO0VBQ0EscUdBQUE7RUFFQSxrQkFBQTtFQUNBLGtCQUFBO0FDUEY7QURXQTtFQUNFLG9CQUFBO0VBQ0EsMEZBQUE7RUFFQSxrQkFBQTtFQUNBLGtCQUFBO0FDVkY7QUZEQSwrRUFBQTtBQUdBLGtGQUFBO0FBS0EsK0VBQUE7QUFVQSwrRUFBQTtBQU1BLCtFQUFBO0FBTUEsK0VBQUE7QUFNQSxnRkFBQTtBQUtBLCtFQUFBO0FBS0EseUVBQUE7QUFLQSx5RUFBQTtBQUlBLHVFQUFBO0FBUUEscUVBQUE7QUF5QkE7RUFDRSxtQkFBQTtFQUNBLG1CQUFBO0VBRUEsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBRTFFRjtBQTVEQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUErREo7QUE1REE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSwrR0FBQTtFQUNBLFFBQUE7QUErREo7QUE5REM7RUFFRyxlQUFBO0FBZ0VKO0FBL0RDO0VBRUcsZUFBQTtBQWlFSjtBQXpEQTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxRQUFBO0FBNERKO0FBekRBO0VBQ0ksV0FBQTtFQUNBLGVBQUE7QUE0REo7QUF6REE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLFFBQUE7QUE0REo7QUEzREM7RUFFRyxZQUFBO0VBQ0EsWUFBQTtBQTZESjtBQTVEQztFQUVHLFlBQUE7RUFDQSxZQUFBO0FBOERKO0FBdkRBO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7QUEwREo7QUF6REM7RUFFRyxrQkFBQTtBQTJESjtBQTFEQztFQUVHLGtCQUFBO0FBNERKO0FBckRBO0VBQ0ksd0JBQUE7RUFDQSxZQUFBO0VBQ0EsK0JBQUE7QUF3REo7QUF0REE7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxRQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0FBeURKO0FBeERDO0VBRUcsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSwrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQTBESjtBQXZEQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlDRkhjO0FFNkRsQjtBQXhEQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQTJESiIsImZpbGUiOiJzcmMvYXBwL29sZ2EtaGVhZGVyL3BsYXllci1zaG93Y2FzZS9wbGF5ZXItc2hvd2Nhc2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG5cbkBpbXBvcnQgXCIuL2Fzc2V0cy9zY3NzL21vZHVsZXMvX2ZvbnRzLnNjc3NcIjtcbiRnYW1lc2NvcmUtZmFtaWx5OiBcIkZpZ3VyaW5lU3ltYm9sVDFcIjtcbiRnYW1lc2NvcmUtaGlnaGxpZ2h0OiAjNTg1ODU4ZmY7XG4kZ2FtZXNjb3JlLWZvcmVncm91bmQ6IHdoaXRlO1xuXG4kcmVkOiAjZTQzMDMwO1xuJGdyZWVuOiAjMTlhMTg3O1xuJGxpZ2h0LWJsdWU6ICMwMGZmZmZmZjtcbiRibHVlOiAjMzY3YmYwO1xuJGRhcmstYmx1ZTogIzI2NWFiMTtcbiRtYXJvb246ICNiODE3NGM7XG4kcHVycGxlOiAjOGM0MmFiO1xuXG4vLyBNYWluIE9MR0EgQ29sb3IgRWxlbWVudCBWYXJpYWJsZXNcbiR0ZXh0Q29sb3I6IHZhcigtLXRleHRDb2xvcik7IC8vIE1haW4gVGV4dCBDb2xvclxuJHRleHRDb2xvckF0dGVudGlvbjogdmFyKC0tdGV4dENvbG9yQXR0ZW50aW9uKTsgLy8gQXR0ZW50aW9uIHRleHRcbiR0ZXh0Q29sb3JSZW1vdmU6IHZhcigtLXRleHRDb2xvclJlbW92ZSk7IC8vIFJlbW92ZS9EZWxldGUvQ2xvc2VcbiR0ZXh0Q29sb3JBZGQ6IHZhcigtLXRleHRDb2xvckFkZCk7IC8vIEFkZC9DcmVhdGUvT3BlblxuJHRleHRDb2xvckFjdGl2ZTogdmFyKC0tdGV4dENvbG9yQWN0aXZlKTsgLy8gQWRkL0NyZWF0ZS9PcGVuXG4kYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZCk7IC8vIE1haW4gYmFja2dyb3VuZCBDb2xvclxuJGJnQ29udGFpbmVyOiB2YXIoLS1iZ0NvbnRhaW5lcik7IC8vIGJhY2tncm91bmQgb2YgQ29udGFpbmVyc1xuJGJnTWVudTogdmFyKC0tYmdNZW51KTsgLy8gYmFja2dyb3VuZCBvZiBNZW51c1xuJGJnSXRlbTogdmFyKC0tYmdJdGVtKTsgLy8gYmFja2dyb3VuZCBvZiBJdGVtc1xuXG4vLyBDb250ZXh0IE1lbnVcbiRiZ0NvbnRleHQ6IHZhcigtLWJnQ29udGV4dCk7IC8vIGJhY2tncm91bmQgb2YgQ29udGV4dCBNZW51XG4kdGV4dENvbG9yQ29udGV4dDogdmFyKC0tdGV4dENvbG9yQ29udGV4dCk7IC8vIHRleHQgY29sb3IgQ29udGV4dCBNZW51XG4kYm9yZGVyQ29udGV4dDogdmFyKC0tYm9yZGVyQ29udGV4dCk7IC8vIGJvcmRlciBDb250ZXh0IE1lbnVcbiRvdmVybGF5Q29udGV4dEJhY2tncm91bmQ6IHZhcihcbiAgLS1vdmVybGF5Q29udGV4dEJhY2tncm91bmRcbik7IC8vIENvbnRleHQgTWVudSBPdmVybGF5IGJhY2tncm91bmQgbWFpblxuJG92ZXJsYXlDb250ZXh0QmFja2dyb3VuZEdyYWRpZW50OiB2YXIoXG4gIC0tb3ZlcmxheUNvbnRleHRCYWNrZ3JvdW5kR3JhZGllbnRcbik7IC8vIENvbnRleHQgTWVudSBiYWNrZ3JvdW5kIGdyYWRpZW50XG5cblxuXG4vKioqKioqKioqKioqKioqKioqKiBNZW51ICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuJG1lQmFja2dyb3VuZDogdmFyKC0tbWVCYWNrZ3JvdW5kKTtcblxuLyoqKioqKioqKioqKioqKioqKioqKioqKiBNZW51IENvbnRyb2xzICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiRjc0ZpbGw6IHZhcigtLWNzRmlsbCk7XG4kY3NBY2NlbnQ6IHZhcigtLWNzQWNjZW50KTtcbiRjc0FjY2VudDI6IHZhcigtLWNzQWNjZW50Mik7XG5cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgQ29udGFpbmVyIFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4kZ3NUZXh0Q29sb3I6IHZhcigtLWdzVGV4dENvbG9yKTsgLy8gVGV4dCBjb2xvciBmb3IgZ2FtZSBzY29yZVxuJGdzQmFja2dyb3VuZDogdmFyKC0tZ3NCYWNrZ3JvdW5kKTsgLy8gYmFja2dyb3VuZCBvZiBDb250YWluZXJzXG4kZ3NMaXN0QmFja2dyb3VuZDogdmFyKC0tZ3NMaXN0QmFja2dyb3VuZCk7IC8vIGxpc3QgYmFja2dyb3VuZCBvZiBnYW1lIHNjb3JlXG4kZ3NCb3JkZXI6IHZhcigtLWdzQm9yZGVyKTsgLy8gYmFja2dyb3VuZCBvZiBNZW51c1xuJGdzVGV4dFNpemU6IHZhcigtLWdzVGV4dFNpemUpOyAvLyBiYWNrZ3JvdW5kIG9mIE1lbnVzXG4kZ3NGb250RmFtaWx5OiB2YXIoLS1nc0ZvbnRGYW1pbHkpOyAvLyBzY29yZSBmb250XG4kZ3NUYWJsZUl0ZW1XaWR0aDogdmFyKC0tZ3NUYWJsZUl0ZW1XaWR0aCk7IC8vIHdpZHRoIG9mIHNjb3JlIGl0ZW0gaW4gdGFibGUgbGF5b3V0XG4kZ3NUYWJsZVBseVdpZHRoOiB2YXIoLS1nc1RhYmxlUGx5V2lkdGgpOyAvLyB3aWR0aCBvZiBwbHkgZWxlbWVudCBpbiB0YWJsZSBsYXlvdXRcblxuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBDb250YWluZXIgVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiRnc1RleHRDb2xvck1XOiB2YXIoLS1nc1RleHRDb2xvck1XKTsgLy8gVGV4dCBjb2xvciBmb3IgZ2FtZSBzY29yZVxuJGdzQmFja2dyb3VuZE1XOiB2YXIoLS1nc0JhY2tncm91bmRNVyk7IC8vIGJhY2tncm91bmQgb2YgQ29udGFpbmVyc1xuJGdzQm9yZGVyTVc6IHZhcigtLWdzQm9yZGVyTVcpOyAvLyBiYWNrZ3JvdW5kIG9mIE1lbnVzXG4kZ3NUZXh0U2l6ZU1XOiB2YXIoLS1nc1RleHRTaXplTVcpOyAvLyBiYWNrZ3JvdW5kIG9mIE1lbnVzXG5cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgQ29udGFpbmVyIFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4kZ3NUZXh0Q29sb3JNQjogdmFyKC0tZ3NUZXh0Q29sb3JNQik7IC8vIFRleHQgY29sb3IgZm9yIGdhbWUgc2NvcmVcbiRnc0JhY2tncm91bmRNQjogdmFyKC0tZ3NCYWNrZ3JvdW5kTUIpOyAvLyBiYWNrZ3JvdW5kIG9mIENvbnRhaW5lcnNcbiRnc0JvcmRlck1COiB2YXIoLS1nc0JvcmRlck1CKTsgLy8gYmFja2dyb3VuZCBvZiBNZW51c1xuJGdzVGV4dFNpemVNQjogdmFyKC0tZ3NUZXh0U2l6ZU1CKTsgLy8gYmFja2dyb3VuZCBvZiBNZW51c1xuXG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIEhpZ2hsaWdodCBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuJGdzVGV4dENvbG9ySEc6IHZhcigtLWdzVGV4dENvbG9ySEcpOyAvLyBUZXh0IGNvbG9yIGZvciBoaWdobGlnaHRcbiRnc0Fubm90YXRpb25Db2xvckhHOiB2YXIoLS1nc0Fubm90YXRpb25Db2xvckhHKTsgLy8gQW5ub3RhdGlvbi9Db21tZW50IGNvbG9yIGZvciBoaWdobGlnaHRcbiRnc0JhY2tncm91bmRIRzogdmFyKC0tZ3NCYWNrZ3JvdW5kSEcpOyAvLyBiYWNrZ3JvdW5kIGZvciBoaWdobGlnaHRcbiRnc0JvcmRlckhHOiB2YXIoLS1nc0JvcmRlckhHKTsgLy8gYm9yZGVyIGZvciBoaWdobGlnaHRcblxuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBBbm5vdGF0aW9uIFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4kZ3NUZXh0Q29sb3JBTjogdmFyKC0tZ3NUZXh0Q29sb3JBTik7IC8vIFRleHQgY29sb3IgZm9yIGhpZ2hsaWdodFxuJGdzQmFja2dyb3VuZEFOOiB2YXIoLS1nc0JhY2tncm91bmRBTik7IC8vIGJhY2tncm91bmQgZm9yIGhpZ2hsaWdodFxuJGdzQm9yZGVyQU46IHZhcigtLWdzQm9yZGVyQU4pOyAvLyBib3JkZXIgZm9yIGhpZ2hsaWdodFxuXG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIFZhcmlhdGlvbiBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuJGdzVGV4dENvbG9yVkE6IHZhcigtLWdzVGV4dENvbG9yVkEpOyAvLyBUZXh0IGNvbG9yIGZvciBoaWdobGlnaHRcbiRnc0JhY2tncm91bmRWQTogdmFyKC0tZ3NCYWNrZ3JvdW5kVkEpOyAvLyBiYWNrZ3JvdW5kIGZvciBoaWdobGlnaHRcbiRnc0JvcmRlclZBOiB2YXIoLS1nc0JvcmRlclZBKTsgLy8gYm9yZGVyIGZvciBoaWdobGlnaHRcblxuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBQbHkgVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiRnc1RleHRDb2xvclBDOiB2YXIoLS1nc1RleHRDb2xvclBDKTsgLy8gVGV4dCBjb2xvciBmb3IgZ2FtZSBzY29yZSBwbHlcbiRnc0JhY2tncm91bmRQQzogdmFyKC0tZ3NCYWNrZ3JvdW5kUEMpOyAvLyBiYWNrZ3JvdW5kIGZvciBnYW1lIHNjb3JlIHBseVxuJGdzQm9yZGVyUEM6IHZhcigtLWdzQm9yZGVyUEMpOyAvLyBib3JkZXIgZm9yIGdhbWUgc2NvcmUgcGx5XG5cbi8qKioqKioqKioqKioqKioqKioqKiBDb250cm9sIENvbG9ycyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4kY3NCYWNrZ3JvdW5kOiB2YXIoLS1jc0JhY2tncm91bmQpOyAvLyBiYWNrZ3JvdW5kIGZvciBjb250cm9sc1xuJGNzQ29sb3I6IHZhcigtLWNzQ29sb3IpOyAvLyBjb250cm9scyBjb2xvciAoZm9yZWdyb3VuZClcblxuLyoqKioqKioqKioqKioqKioqKioqIEJvYXJkIENvbG9ycyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4kYm9hcmRCR0Rhcms6IHZhcigtLWJvYXJkQkdEYXJrKTsgLy8gYm9hcmQgZGFyayB0aWxlXG4kYm9hcmRCR0xpZ2h0OiB2YXIoLS1ib2FyZEJHTGlnaHQpOyAvLyBib2FyZCBsaWdodCB0aWxlXG4kYm9hcmRMYWJlbExpZ2h0OiB2YXIoLS1ib2FyZExhYmVsTGlnaHQpOyAvLyBib2FyZCBsaWdodCBsYWJlbFxuJGJvYXJkTGFiZWxEYXJrOiB2YXIoLS1ib2FyZExhYmVsRGFyayk7IC8vIGJvYXJkIGRhcmsgbGFiZWxcblxuXG5cbi8qKioqKioqKioqKioqKioqKioqKiBGb250IFNpemVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiRnc0ZvbnRTaXplOiB2YXIoLS1nc0ZvbnRTaXplKTsgLy8gYm9hcmQgZGFyayB0aWxlXG4kZ3NGb250U2l6ZUFOOiB2YXIoLS1nc0ZvbnRTaXplQU4pOyAvLyBib2FyZCBsaWdodCB0aWxlXG4kZ3NGb250U2l6ZUhHOiB2YXIoLS1nc0ZvbnRTaXplSEcpOyAvLyBib2FyZCBsaWdodCBsYWJlbFxuJGdzRm9udFNpemVWQTogdmFyKC0tZ3NGb250U2l6ZVZBKTsgLy8gYm9hcmQgZGFyayBsYWJlbFxuJGdzRm9udFNpemVQQzogdmFyKC0tZ3NGb250U2l6ZVBDKTsgLy8gYm9hcmQgZGFyayBsYWJlbFxuJGhkckRhdGFGb250U2l6ZTogdmFyKC0taGRyRGF0YUZvbnRTaXplKTsgLy8gc2l6ZSBvZiBwbGF5ZXIgc2hvd2Nhc2UgZGF0YVxuJGhkck5hbWVGb250U2l6ZTogdmFyKC0taGRyTmFtZUZvbnRTaXplKTsgLy8gc2l6ZSBvZiBwbGF5ZXIgc2hvd2Nhc2UgTmFtZVxuJGhkclRpdGxlRm9udFNpemU6IHZhcigtLWhkclRpdGxlRm9udFNpemUpOyAvLyBzaXplIG9mIHBsYXllciBzaG93Y2FzZSBkYXRhXG4kaGRyVmFyaWFudEZvbnRTaXplOiB2YXIoLS1oZHJWYXJpYW50Rm9udFNpemUpOyAvLyBzaXplIG9mIHBsYXllciBzaG93Y2FzZSBOYW1lXG4kaGRyTWF0Y2hEYXRhRm9udFNpemU6IHZhcigtLWhkck1hdGNoRGF0YUZvbnRTaXplKTsgLy8gc2l6ZSBvZiBwbGF5ZXIgc2hvd2Nhc2UgTmFtZVxuJGhkck9wZW5pbmdGb250U2l6ZTogdmFyKC0taGRyTWF0Y2hEYXRhRm9udFNpemUpOyAvLyBzaXplIG9mIHBsYXllciBzaG93Y2FzZSBOYW1lXG4kaGRyUmVzdWx0Rm9udFNpemU6IHZhcigtLWhkclJlc3VsdEZvbnRTaXplKTsgLy8gc2l6ZSBvZiBwbGF5ZXIgc2hvd2Nhc2UgTmFtZVxuJGhkclJvdW5kRm9udFNpemU6IHZhcigtLWhkclJvdW5kRm9udFNpemUpOyAvLyBzaXplIG9mIHBsYXllciBzaG93Y2FzZSBOYW1lXG5cbi8vIEdlbmVyYWwgc3R1ZmZcbiR0ZXh0LWNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcbiRiZy1vdXRlcjogdmFyKC0tYmctb3V0ZXIpO1xuJGJnLWlubmVyOiB2YXIoLS1iZy1pbm5lcik7XG5cbiRiZy1jb2xvcjogI2YyZjNmNztcbiRmZy1jb2xvcjogIzM4M2E0MTtcblxuJGdsb3ctc2hhZG93OiAwIDAgMC41ZW0gdHJhbnNwYXJlbnRpemUoJGJsdWUsIDAuMyk7XG5cbjpyb290IHtcbiAgLS1iZy1jb2xvcjogI3skYmctY29sb3J9O1xuICAtLWZnLWNvbG9yOiAjeyRmZy1jb2xvcn07XG5cbiAgLS1yZWQ6ICN7JHJlZH07XG4gIC0tZ3JlZW46ICN7JGdyZWVufTtcbiAgLS1ibHVlOiAjeyRibHVlfTtcbiAgLS1kYXJrLWJsdWU6ICN7JGRhcmstYmx1ZX07XG4gIC0tbWFyb29uOiAjeyRtYXJvb259O1xuICAtLXB1cnBsZTogI3skcHVycGxlfTtcbn1cblxuLy8gOjotbW96LWZvY3VzLWlubmVyLFxuLy8gOi1tb3otZm9jdXNyaW5nIHtcbi8vICAgYm9yZGVyOiAwO1xuLy8gICBjb2xvcjogdHJhbnNwYXJlbnQ7XG4vLyAgIHRleHQtc2hhZG93OiAwIDAgMCAkZmctY29sb3I7XG4vLyB9XG5cbi8vIDo6c2VsZWN0aW9uLFxuLy8gOjotbW96LXNlbGVjdGlvbiB7XG4vLyAgIGNvbG9yOiB3aGl0ZTtcbi8vICAgYmFja2dyb3VuZDogYmxhY2s7XG4vLyB9XG5cbi8vICoge1xuLy8gICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuLy8gICBvdXRsaW5lOiBub25lO1xuLy8gICB1c2VyLXNlbGVjdDogbm9uZTtcbi8vICAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xuLy8gICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuLy8gICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7XG4vLyAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4vLyAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbi8vICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuLy8gICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4vLyAgIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKSAhaW1wb3J0YW50O1xuLy8gICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XG4vLyAgIGN1cnNvcjogZGVmYXVsdDtcbi8vICAgbGV0dGVyLXNwYWNpbmc6IDA7XG4vLyB9XG5cbi8vIC5zZWxlY3RhYmxlLFxuLy8gLnNlbGVjdGFibGUgKiB7XG4vLyAgIGN1cnNvcjogYXV0bztcbi8vICAgdXNlci1zZWxlY3Q6IHRleHQ7XG4vLyAgIC13ZWJraXQtdG91Y2gtY2FsbG91dDogdGV4dDtcbi8vICAgLXdlYmtpdC11c2VyLXNlbGVjdDogdGV4dDtcbi8vICAgLWtodG1sLXVzZXItc2VsZWN0OiB0ZXh0O1xuLy8gICAtbW96LXVzZXItc2VsZWN0OiB0ZXh0O1xuLy8gICAtbXMtdXNlci1zZWxlY3Q6IHRleHQ7XG4vLyB9XG5cbi8vIGh0bWwsXG4vLyBib2R5IHtcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogJGJnLWNvbG9yO1xuLy8gICBjb2xvcjogJGZnLWNvbG9yO1xuLy8gICBtYXJnaW46IDA7XG4vLyAgIHBhZGRpbmc6IDA7XG4vLyAgIGZvbnQtc2l6ZTogMTBwdDtcbi8vICAgaGVpZ2h0OiAxMDAlO1xuLy8gICBvdmVyZmxvdzogYXV0bztcbi8vIH1cblxuLy8gLndpdGgtc2hhZG93IHtcbi8vICAgYm94LXNoYWRvdzogNnB4IDZweCAxMHB4IHRyYW5zcGFyZW50aXplKGJsYWNrLCAwLjkpLCAtNnB4IC02cHggMTBweCB3aGl0ZTtcbi8vIH1cblxuLy8gLm91dHNldCB7XG4vLyAgIEBleHRlbmQgLndpdGgtc2hhZG93O1xuXG4vLyAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4vLyAgIGJhY2tncm91bmQ6ICRiZy1jb2xvcjtcbi8vIH1cblxuLy8gLmluc2V0IHtcbi8vICAgYm9yZGVyLXJhZGl1czogMTBweDtcbi8vICAgYm94LXNoYWRvdzogMCAwIHRyYW5zcGFyZW50LCAwIDAgdHJhbnNwYXJlbnQsXG4vLyAgICAgaW5zZXQgM3B4IDNweCA1cHggdHJhbnNwYXJlbnRpemUoYmxhY2ssIDAuOSksIGluc2V0IC0zcHggLTNweCA1cHggd2hpdGU7XG4vLyAgIGJhY2tncm91bmQ6IGxpZ2h0ZW4oJGJnLWNvbG9yLCAyJSk7XG4vLyB9XG5cbi8vIC5wYXBlciB7XG4vLyAgIEBleHRlbmQgLm91dHNldDtcbi8vICAgcGFkZGluZzogMTBweCAyMHB4IDIwcHg7XG4vLyAgIG1hcmdpbi10b3A6IDIwcHg7XG4vLyAgIG1pbi1oZWlnaHQ6IDEwMHB4O1xuLy8gICBmb250LXNpemU6IDEuMmVtO1xuLy8gICBiYWNrZ3JvdW5kOiAkYmctY29sb3I7XG4vLyB9XG5cbi8vIHNlY3Rpb24sXG4vLyBhcnRpY2xlLFxuLy8gLnNlY3Rpb24sXG4vLyAuYXJ0aWNsZSxcbi8vIC5wYXBlciB7XG4vLyAgIGxpbmUtaGVpZ2h0OiAyZW07XG4vLyAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbi8vICAgd29yZC1icmVhazogbm9ybWFsO1xuLy8gICBsaW5lLWhlaWdodDogMmVtO1xuLy8gfVxuXG4vLyBpbnB1dFt0eXBlPVwidGV4dFwiXSxcbi8vIGlucHV0W3R5cGU9XCJzZWFyY2hcIl0sXG4vLyBpbnB1dFt0eXBlPVwidGVsXCJdLFxuLy8gaW5wdXRbdHlwZT1cInVybFwiXSxcbi8vIGlucHV0W3R5cGU9XCJlbWFpbFwiXSxcbi8vIGlucHV0W3R5cGU9XCJwYXNzd29yZFwiXSxcbi8vIGlucHV0W3R5cGU9XCJkYXRlXCJdLFxuLy8gaW5wdXRbdHlwZT1cIm1vbnRoXCJdLFxuLy8gaW5wdXRbdHlwZT1cIndlZWtcIl0sXG4vLyBpbnB1dFt0eXBlPVwidGltZVwiXSxcbi8vIGlucHV0W3R5cGU9XCJudW1iZXJcIl0sXG4vLyBpbnB1dFt0eXBlPVwiY29sb3JcIl0sXG4vLyBzZWxlY3QsXG4vLyB0ZXh0YXJlYSB7XG4vLyAgIGJvcmRlcjogMDtcbi8vICAgYmFja2dyb3VuZDogJGJnLWNvbG9yO1xuLy8gICBjb2xvcjogJGZnLWNvbG9yO1xuLy8gICBmb250LXdlaWdodDogbm9ybWFsO1xuLy8gICBwYWRkaW5nOiAwIDEuMjVlbTtcbi8vICAgbGluZS1oZWlnaHQ6IDEuMjVlbTtcbi8vICAgaGVpZ2h0OiAzLjVlbTtcbi8vICAgbWFyZ2luOiAxMHB4IDA7XG4vLyAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuLy8gICBjdXJzb3I6IHRleHQ7XG4vLyAgIHVzZXItc2VsZWN0OiB0ZXh0O1xuLy8gICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IHRleHQ7XG4vLyAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IHRleHQ7XG4vLyAgIC1raHRtbC11c2VyLXNlbGVjdDogdGV4dDtcbi8vICAgLW1vei11c2VyLXNlbGVjdDogdGV4dDtcbi8vICAgLW1zLXVzZXItc2VsZWN0OiB0ZXh0O1xuLy8gICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuMnM7XG5cbi8vICAgJjpub3Qoc2VsZWN0KSB7XG4vLyAgICAgQGV4dGVuZCAuaW5zZXQ7XG5cbi8vICAgICAmOmZvY3VzIHtcbi8vICAgICAgIEBleHRlbmQgLm91dHNldDtcbi8vICAgICB9XG4vLyAgIH1cbi8vIH1cblxuLy8gdGV4dGFyZWEge1xuLy8gICBoZWlnaHQ6IDM1MHB4O1xuLy8gICBwYWRkaW5nOiAxLjI1ZW07XG4vLyB9XG5cbi8vIHNlbGVjdCB7XG4vLyAgIEBleHRlbmQgLm91dHNldDtcblxuLy8gICBjdXJzb3I6IHBvaW50ZXI7XG4vLyAgIGJhY2tncm91bmQ6IHVybChkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUIyWlhKemFXOXVQU0l4TGpFaUlIWnBaWGRDYjNnOUlqQWdNQ0F4T1NBeE9TSWdlRzFzYm5NOUltaDBkSEE2THk5M2QzY3Vkek11YjNKbkx6SXdNREF2YzNabklqNDhaeUIwY21GdWMyWnZjbTA5SW0xaGRISnBlQ2d1TURNMElEQWdNQ0F1TURNMElDMDJMamdnTVM0M1pTMDFLU0lnYzNSNWJHVTlJbVpwYkd3Nkl6ZGlOMlU0WXlJK1BIQmhkR2dnWkQwaWJUUTRNQ0F6TkRRdE1qRXhMVEl4TW1NdE1UWXRNVFl0TkRFdE1UWXROVGNnTUMweE5pQXhOaTB4TmlBME1pQXdJRFUzYkRJek9DQXlNemxqT0M0MElEZ3VOU0F5TUNBeE1pQXpNU0F4TWlBeE1TQXdMalUySURJeUxUTXVNaUF6TVMweE1td3lNemd0TWpNNVl6RTJMVEUySURFMkxUUXlJREF0TlRkekxUUXhMVEUyTFRVM0lEQjZJaUJ6ZEhsc1pUMGlabWxzYkRvak4ySTNaVGhqSWk4K1BDOW5Qand2YzNablBnbz0pXG4vLyAgICAgbm8tcmVwZWF0IHJpZ2h0IDFlbSBjZW50ZXI7XG4vLyAgIGJhY2tncm91bmQtc2l6ZTogMS4yZW07XG4vLyAgIHBhZGRpbmctcmlnaHQ6IDNlbTtcbi8vIH1cblxuLy8gaW5wdXQ6OnBsYWNlaG9sZGVyLFxuLy8gdGV4dGFyZWE6OnBsYWNlaG9sZGVyIHtcbi8vICAgb3BhY2l0eTogMTtcbi8vICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzO1xuLy8gICBjb2xvcjogaW5oZXJpdDtcbi8vIH1cblxuLy8gaW5wdXQ6Zm9jdXM6OnBsYWNlaG9sZGVyLFxuLy8gdGV4dGFyZWE6Zm9jdXM6OnBsYWNlaG9sZGVyIHtcbi8vICAgb3BhY2l0eTogMC4yO1xuLy8gfVxuXG4vLyBpbnB1dDotbXMtaW5wdXQtcGxhY2Vob2xkZXIsXG4vLyB0ZXh0YXJlYTotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuLy8gICBvcGFjaXR5OiAxO1xuLy8gICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnM7XG4vLyAgIGNvbG9yOiBpbmhlcml0O1xuLy8gfVxuXG4vLyBpbnB1dDpmb2N1czotbXMtaW5wdXQtcGxhY2Vob2xkZXIsXG4vLyB0ZXh0YXJlYTpmb2N1czotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuLy8gICBvcGFjaXR5OiAwLjI7XG4vLyB9XG5cbi8vIGlucHV0W3R5cGU9XCJzZWFyY2hcIl06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24sXG4vLyBpbnB1dFt0eXBlPVwic2VhcmNoXCJdOjotd2Via2l0LXNlYXJjaC1jYW5jZWwtYnV0dG9uLFxuLy8gaW5wdXRbdHlwZT1cInNlYXJjaFwiXTo6LXdlYmtpdC1zZWFyY2gtcmVzdWx0cy1idXR0b24sXG4vLyBpbnB1dFt0eXBlPVwic2VhcmNoXCJdOjotd2Via2l0LXNlYXJjaC1yZXN1bHRzLWRlY29yYXRpb24ge1xuLy8gICBkaXNwbGF5OiBub25lO1xuLy8gfVxuXG4vLyBidXR0b24sXG4vLyBpbnB1dFt0eXBlPVwiYnV0dG9uXCJdLFxuLy8gaW5wdXRbdHlwZT1cInN1Ym1pdFwiXSxcbi8vIGlucHV0W3R5cGU9XCJyZXNldFwiXSB7XG4vLyAgIEBleHRlbmQgLm91dHNldDtcblxuLy8gICBib3JkZXI6IDA7XG4vLyAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuLy8gICBwYWRkaW5nOiAxMHB4IDA7XG4vLyAgIHdpZHRoOiA4ZW07XG4vLyAgIHRleHQtYWxpZ246IGNlbnRlcjtcbi8vICAgY3Vyc29yOiBwb2ludGVyO1xuLy8gICBjb2xvcjogaW5oZXJpdDtcbi8vICAgZm9udC1zaXplOiAxLjFyZW07XG4vLyAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGJhY2tncm91bmQtY29sb3IsIGJveC1zaGFkb3c7XG4vLyAgIHRyYW5zaXRpb24tZGVsYXk6IDAuMnM7XG4vLyAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMnM7XG5cbi8vICAgJi5hY3RpdmUsXG4vLyAgICY6YWN0aXZlIHtcbi8vICAgICBAZXh0ZW5kIC5pbnNldDtcblxuLy8gICAgIHRyYW5zaXRpb24tZGVsYXk6IDBzO1xuLy8gICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMXM7XG4vLyAgIH1cblxuLy8gICBAZWFjaCAkbmFtZSwgJGNvbG9yIGluIChcInJlZFwiOiAkcmVkLCBcImdyZWVuXCI6ICRncmVlbiwgXCJibHVlXCI6ICRibHVlKSB7XG4vLyAgICAgQGF0LXJvb3QgLiN7JG5hbWV9LWJ1dHRvbixcbi8vICAgICAgICYuI3skbmFtZX0tYnV0dG9uIHtcbi8vICAgICAgIEBleHRlbmQgYnV0dG9uO1xuXG4vLyAgICAgICAkX2JnLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAkY29sb3IgMzAlLCBsaWdodGVuKCRjb2xvciwgNiUpIDgwJSk7XG5cbi8vICAgICAgIGNvbG9yOiB3aGl0ZTtcbi8vICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuLy8gICAgICAgdGV4dC1zaGFkb3c6IDAgMC4xZW0gMC4xZW0gdHJhbnNwYXJlbnRpemUoYmxhY2ssIDAuMyk7XG4vLyAgICAgICBiYWNrZ3JvdW5kOiAkX2JnLWltYWdlO1xuLy8gICAgICAgYm94LXNoYWRvdzogMCAwIDAuNWVtIHRyYW5zcGFyZW50aXplKCRjb2xvciwgMC4zKSwgMCAwIHRyYW5zcGFyZW50LFxuLy8gICAgICAgICBpbnNldCAwIC01cHggMCB0cmFuc3BhcmVudGl6ZShibGFjaywgMC45NSksXG4vLyAgICAgICAgIGluc2V0IDAgMnB4IDAgdHJhbnNwYXJlbnRpemUod2hpdGUsIDAuOCk7XG4vLyAgICAgICBib3JkZXItcmFkaXVzOiA2cHggNnB4IDhweCA4cHg7XG4vLyAgICAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBib3gtc2hhZG93LCBib3JkZXItcmFkaXVzO1xuXG4vLyAgICAgICAmLmFjdGl2ZSxcbi8vICAgICAgICY6YWN0aXZlIHtcbi8vICAgICAgICAgYmFja2dyb3VuZDogJF9iZy1pbWFnZTtcbi8vICAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuLy8gICAgICAgICBib3gtc2hhZG93OiAwIDAgdHJhbnNwYXJlbnQsIDAgMCB0cmFuc3BhcmVudCxcbi8vICAgICAgICAgICBpbnNldCAwIDJweCA1cHggMnB4IHRyYW5zcGFyZW50aXplKGJsYWNrLCAwLjgpO1xuLy8gICAgICAgfVxuLy8gICAgIH1cbi8vICAgfVxuLy8gfVxuXG4vLyBsYWJlbCB7XG4vLyAgICYsXG4vLyAgICYgKiB7XG4vLyAgICAgY3Vyc29yOiBwb2ludGVyO1xuLy8gICB9XG5cbi8vICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuLy8gICBwYWRkaW5nOiAwLjU2ZW0gMDtcbi8vIH1cblxuLy8gYSB7XG4vLyAgICYsXG4vLyAgICY6bGluayxcbi8vICAgJjp2aXNpdGVkLFxuLy8gICAmOmhvdmVyICY6YWN0aXZlIHtcbi8vICAgICAmLFxuLy8gICAgICYgKiB7XG4vLyAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4vLyAgICAgfVxuXG4vLyAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4vLyAgICAgY29sb3I6ICRibHVlO1xuLy8gICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuLy8gICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbi8vICAgfVxuLy8gfVxuXG4vLyBoMSxcbi8vIGgyLFxuLy8gaDMsXG4vLyBoNCxcbi8vIGg1LFxuLy8gaDYge1xuLy8gICBsaW5lLWhlaWdodDogMS41ZW07XG4vLyB9XG5cbi8vIGgxIHtcbi8vICAgZm9udC1zaXplOiA0ZW07XG4vLyAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuLy8gICBtYXJnaW46IDAuN2VtIDA7XG4vLyB9XG5cbi8vIGgyIHtcbi8vICAgZm9udC1zaXplOiAzZW07XG4vLyAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuLy8gICBtYXJnaW46IDAuOGVtIDA7XG4vLyB9XG5cbi8vIGgzIHtcbi8vICAgZm9udC1zaXplOiAyLjVlbTtcbi8vICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4vLyAgIG1hcmdpbjogMC45ZW0gMDtcbi8vIH1cblxuLy8gaDQge1xuLy8gICBmb250LXNpemU6IDJlbTtcbi8vICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4vLyAgIG1hcmdpbjogMWVtIDA7XG4vLyB9XG5cbi8vIGg1IHtcbi8vICAgbWFyZ2luOiAwLjVlbSAwO1xuLy8gICBmb250LXNpemU6IDEuMmVtO1xuLy8gICBmb250LXdlaWdodDogbm9ybWFsO1xuLy8gfVxuXG4vLyBoNiB7XG4vLyAgIG1hcmdpbjogMWVtIDAgMWVtIDEuNGVtO1xuLy8gICBmb250LXNpemU6IDFlbTtcbi8vICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4vLyB9XG5cbi8vIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSxcbi8vIGlucHV0W3R5cGU9XCJyYWRpb1wiXSB7XG4vLyAgICRfYm9yZGVyLXdpZHRoOiAwLjE1ZW07XG4vLyAgICRfYm94LXNoYWRvdzogMnB4IDJweCAzcHggdHJhbnNwYXJlbnRpemUoYmxhY2ssIDAuOCksIC0ycHggLTJweCAzcHggd2hpdGUsXG4vLyAgICAgaW5zZXQgMXB4IDFweCAycHggdHJhbnNwYXJlbnRpemUoYmxhY2ssIDAuOCksIGluc2V0IC0xcHggLTFweCAycHggd2hpdGU7XG4vLyAgIGZvbnQtc2l6ZTogMWVtO1xuLy8gICBjdXJzb3I6IHBvaW50ZXI7XG4vLyAgIGhlaWdodDogMS4yZW07XG4vLyAgIHdpZHRoOiAxLjJlbTtcbi8vICAgbWFyZ2luOiAwIDAuM2VtO1xuLy8gICBib3gtc2hhZG93OiAkX2JveC1zaGFkb3c7XG4vLyAgIGJvcmRlcjogJF9ib3JkZXItd2lkdGggc29saWQgJGJnLWNvbG9yO1xuLy8gICB2ZXJ0aWNhbC1hbGlnbjogdGV4dC1ib3R0b207XG4vLyAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGJhY2tncm91bmQsIGJveC1zaGFkb3c7XG4vLyAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMnM7XG5cbi8vICAgJjphY3RpdmUge1xuLy8gICAgIGJveC1zaGFkb3c6ICRfYm94LXNoYWRvdywgaW5zZXQgMCAwLjFlbSAwLjI1ZW0gdHJhbnNwYXJlbnRpemUoYmxhY2ssIDAuOCk7XG4vLyAgIH1cblxuLy8gICAmOmNoZWNrZWQge1xuLy8gICAgIGJvcmRlci13aWR0aDogMC4xZW07XG4vLyAgICAgYm9yZGVyLWNvbG9yOiBkYXJrZW4oJGJsdWUsIDEwJSk7XG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJsdWU7XG4vLyAgIH1cbi8vIH1cblxuLy8gaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdIHtcbi8vICAgYm9yZGVyLXJhZGl1czogMjUlO1xuXG4vLyAgICY6Y2hlY2tlZCB7XG4vLyAgICAgYm94LXNoYWRvdzogJGdsb3ctc2hhZG93LCBpbnNldCAwIC0wLjFlbSAwIHRyYW5zcGFyZW50aXplKGJsYWNrLCAwLjgpLFxuLy8gICAgICAgaW5zZXQgMCAwLjFlbSAwLjFlbSB0cmFuc3BhcmVudGl6ZSh3aGl0ZSwgMC44KTtcbi8vICAgfVxuLy8gfVxuXG4vLyBpbnB1dFt0eXBlPVwicmFkaW9cIl0ge1xuLy8gICBib3JkZXItcmFkaXVzOiAxMDAlO1xuXG4vLyAgICY6Y2hlY2tlZCB7XG4vLyAgICAgYm94LXNoYWRvdzogJGdsb3ctc2hhZG93O1xuLy8gICAgIGJveC1zaGFkb3c6ICRnbG93LXNoYWRvdywgaW5zZXQgMCAwLjEyZW0gMC4xZW0gdHJhbnNwYXJlbnRpemUod2hpdGUsIDAuNzUpO1xuLy8gICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDAuMTVlbTtcbi8vICAgfVxuLy8gfVxuXG4vLyAuY2hlY2t0ZXh0IHtcbi8vICAgd2lkdGg6IGF1dG87XG4vLyAgIG1hcmdpbjogMC41ZW07XG5cbi8vICAgaW5wdXQge1xuLy8gICAgIGRpc3BsYXk6IG5vbmU7XG5cbi8vICAgICArIHNwYW4ge1xuLy8gICAgICAgQGV4dGVuZCBidXR0b247XG5cbi8vICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuLy8gICAgICAgcGFkZGluZzogMWVtO1xuLy8gICAgICAgdHJhbnNpdGlvbi1kZWxheTogMHM7XG4vLyAgICAgfVxuXG4vLyAgICAgJjpjaGVja2VkICsgc3BhbiB7XG4vLyAgICAgICBAZXh0ZW5kIC5ibHVlLWJ1dHRvbjtcblxuLy8gICAgICAgcGFkZGluZzogMWVtO1xuLy8gICAgIH1cbi8vICAgfVxuLy8gfVxuXG4vLyAuc3dpdGNoIHtcbi8vICAgJF9oZWlnaHQ6IDJyZW07XG4vLyAgICRfd2lkdGg6IDhyZW07XG4vLyAgICRfaGFuZGxlLXdpZHRoOiAkX2hlaWdodDtcbi8vICAgJF9oYW5kbGUtdHJhbnNsYXRpb246ICRfd2lkdGggLSAkX2hhbmRsZS13aWR0aDtcblxuLy8gICBoZWlnaHQ6ICRfaGVpZ2h0O1xuLy8gICB3aWR0aDogJF93aWR0aDtcbi8vICAgcGFkZGluZzogMDtcbi8vICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4vLyAgIGlucHV0IHtcbi8vICAgICBkaXNwbGF5OiBub25lO1xuXG4vLyAgICAgKyBkaXYge1xuLy8gICAgICAgaGVpZ2h0OiAxMDAlO1xuLy8gICAgICAgd2lkdGg6IDEwMCU7XG4vLyAgICAgICBib3JkZXItcmFkaXVzOiA5OTlweDtcbi8vICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuLy8gICAgICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYm94LXNoYWRvdywgYmFja2dyb3VuZC1jb2xvcjtcbi8vICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMnM7XG4vLyAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjJzO1xuLy8gICAgICAgYm94LXNoYWRvdzogM3B4IDNweCAycHggLTJweCB0cmFuc3BhcmVudGl6ZShibGFjaywgMC45KSxcbi8vICAgICAgICAgaW5zZXQgMnB4IDJweCAycHggMXB4IHRyYW5zcGFyZW50aXplKGJsYWNrLCAwLjkpLFxuLy8gICAgICAgICBpbnNldCAtMnB4IC0ycHggMXB4IHdoaXRlO1xuXG4vLyAgICAgICAmOjpiZWZvcmUge1xuLy8gICAgICAgICBjb250ZW50OiBcIlwiO1xuLy8gICAgICAgICBkaXNwbGF5OiBibG9jaztcbi8vICAgICAgICAgaGVpZ2h0OiBjYWxjKCN7JF9oYW5kbGUtd2lkdGh9ICsgNHB4KTtcbi8vICAgICAgICAgd2lkdGg6IGNhbGMoI3skX2hhbmRsZS13aWR0aH0gKyA0cHgpO1xuLy8gICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuLy8gICAgICAgICBib3JkZXI6IHNvbGlkIHdoaXRlIDNweDtcbi8vICAgICAgICAgYmFja2dyb3VuZDogJGJsdWU7XG4vLyAgICAgICAgIGJveC1zaGFkb3c6IDAgM3B4IDEwcHggdHJhbnNwYXJlbnRpemUoYmxhY2ssIDAuOCksXG4vLyAgICAgICAgICAgaW5zZXQgMCAtMXB4IDNweCB0cmFuc3BhcmVudGl6ZShibGFjaywgMC45KTtcbi8vICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTZweCk7XG4vLyAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzO1xuLy8gICAgICAgfVxuLy8gICAgIH1cblxuLy8gICAgICY6Y2hlY2tlZCArIGRpdiB7XG4vLyAgICAgICBiYWNrZ3JvdW5kOiAkYmx1ZTtcbi8vICAgICAgIGJveC1zaGFkb3c6ICRnbG93LXNoYWRvdywgaW5zZXQgMCAycHggMnB4IDJweCB0cmFuc3BhcmVudGl6ZShibGFjaywgMC43KSxcbi8vICAgICAgICAgaW5zZXQgMCAwIHRyYW5zcGFyZW50O1xuXG4vLyAgICAgICAmOjpiZWZvcmUge1xuLy8gICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgkX2hhbmRsZS10cmFuc2xhdGlvbiwgLTZweCk7XG4vLyAgICAgICB9XG4vLyAgICAgfVxuLy8gICB9XG4vLyB9XG5cbi8vIGhyIHtcbi8vICAgQGV4dGVuZCAuaW5zZXQ7XG4vLyAgIHdpZHRoOiA3MiU7XG4vLyAgIGhlaWdodDogOHB4O1xuLy8gICBmbG9hdDogcmlnaHQ7XG4vLyAgIGJvcmRlcjogMDtcbi8vIH1cblxuLy8gY29kZSxcbi8vIHByZSB7XG4vLyAgIHBhZGRpbmc6IDAuNWVtIDFlbTtcbi8vICAgYm9yZGVyLXJhZGl1czogNHB4O1xuLy8gICBvdmVyZmxvdzogYXV0bztcbi8vICAgYm94LXNoYWRvdzogMCA1cHggMzBweCAwIHRyYW5zcGFyZW50aXplKGJsYWNrLCAwLjk1KTtcbi8vIH1cblxuLy8gY29kZSB7XG4vLyAgIGJhY2tncm91bmQ6ICNlNmU2ZTY7XG4vLyB9XG5cbi8vIHByZSB7XG4vLyAgIGJhY2tncm91bmQ6IHdoaXRlO1xuLy8gICBtYXJnaW46IDRlbSAwO1xuLy8gfVxuXG4vLyBjb2RlLFxuLy8gcHJlIHtcbi8vICAgJixcbi8vICAgJiAqIHtcbi8vICAgICBmb250LXNpemU6IDAuOXJlbTtcbi8vICAgICBsaW5lLWhlaWdodDogMmVtO1xuLy8gICAgIGN1cnNvcjogYXV0bztcbi8vICAgICB1c2VyLXNlbGVjdDogdGV4dDtcbi8vICAgICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IHRleHQ7XG4vLyAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogdGV4dDtcbi8vICAgICAta2h0bWwtdXNlci1zZWxlY3Q6IHRleHQ7XG4vLyAgICAgLW1vei11c2VyLXNlbGVjdDogdGV4dDtcbi8vICAgICAtbXMtdXNlci1zZWxlY3Q6IHRleHQ7XG4vLyAgIH1cbi8vIH1cblxuLy8gYmxvY2txdW90ZSB7XG4vLyAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuLy8gICBwYWRkaW5nOiAwLjVlbSAxZW07XG4vLyAgIGJvcmRlci1yYWRpdXM6IDRweDtcbi8vICAgYm94LXNoYWRvdzogMCA1cHggMzBweCAwIHRyYW5zcGFyZW50aXplKGJsYWNrLCAwLjk1KTtcbi8vICAgYm9yZGVyLWxlZnQ6IDZweCBzb2xpZCAkYmx1ZTtcbi8vIH1cbiIsIkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnQ2F2ZWF0JztcbiAgICBzcmM6IHVybCgnLi4vLi4vZm9udHMvQm9sZC9DYXZlYXQtQm9sZC53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcbiAgICAgICAgdXJsKCcuLi8uLi9mb250cy9Cb2xkL0NhdmVhdC1Cb2xkLndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC1kaXNwbGF5OiBzd2FwO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ0NhdmVhdCc7XG4gICAgc3JjOiB1cmwoJy4uLy4uL2ZvbnRzL1JlZ3VsYXIvQ2F2ZWF0LVJlZ3VsYXIud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXG4gICAgICAgIHVybCgnLi4vLi4vZm9udHMvUmVndWxhci9DYXZlYXQtUmVndWxhci53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC1kaXNwbGF5OiBzd2FwO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdGaWd1cmluZVN5bWJvbFQxJztcbiAgc3JjOiB1cmwoJy4uLy4uL2ZvbnRzLzNyZCBQYXJ0eS9DaGVzc1ZhcmlhbnRzL0ZpZ3VyaW5lU3ltYm9sVDFCb2xkLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxuICAgICAgdXJsKCcuLi8uLi9mb250cy8zcmQgUGFydHkvQ2hlc3NWYXJpYW50cy9GaWd1cmluZVN5bWJvbFQxQm9sZC53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnRmlndXJpbmVTeW1ib2xUMSc7XG4gIHNyYzogdXJsKCcuLi8uLi9mb250cy8zcmQgUGFydHkvQ2hlc3NWYXJpYW50cy9GaWd1cmluZVN5bWJvbFQxLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxuICAgICAgdXJsKCcuLi8uLi9mb250cy8zcmQgUGFydHkvQ2hlc3NWYXJpYW50cy9GaWd1cmluZVN5bWJvbFQxLndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ1NhbmN0dWFyeVBsYXlncm91bmQnO1xuICBzcmM6IHVybCgnLi4vLi4vZm9udHMvM3JkIFBhcnR5L1NhbmN0dWFyeVBsYXlncm91bmQud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXG4gICAgICB1cmwoJy4uLy4uL2ZvbnRzLzNyZCBQYXJ0eS9TYW5jdHVhcnlQbGF5Z3JvdW5kLndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG59XG5cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnQW1pdGEnO1xuICBzcmM6IHVybCgnLi4vLi4vZm9udHMvM3JkIFBhcnR5L0FtaXRhL0FtaXRhLVJlZ3VsYXIud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXG4gICAgICB1cmwoJy4uLy4uL2ZvbnRzLzNyZCBQYXJ0eS9BbWl0YS9BbWl0YS1SZWd1bGFyLndvZmYyJykgZm9ybWF0KCd3b2ZmJyk7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xufSIsIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJDYXZlYXRcIjtcbiAgc3JjOiB1cmwoXCIuLi8uLi9mb250cy9Cb2xkL0NhdmVhdC1Cb2xkLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpLCB1cmwoXCIuLi8uLi9mb250cy9Cb2xkL0NhdmVhdC1Cb2xkLndvZmZcIikgZm9ybWF0KFwid29mZlwiKTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkNhdmVhdFwiO1xuICBzcmM6IHVybChcIi4uLy4uL2ZvbnRzL1JlZ3VsYXIvQ2F2ZWF0LVJlZ3VsYXIud29mZjJcIikgZm9ybWF0KFwid29mZjJcIiksIHVybChcIi4uLy4uL2ZvbnRzL1JlZ3VsYXIvQ2F2ZWF0LVJlZ3VsYXIud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJGaWd1cmluZVN5bWJvbFQxXCI7XG4gIHNyYzogdXJsKFwiLi4vLi4vZm9udHMvM3JkIFBhcnR5L0NoZXNzVmFyaWFudHMvRmlndXJpbmVTeW1ib2xUMUJvbGQud29mZjJcIikgZm9ybWF0KFwid29mZjJcIiksIHVybChcIi4uLy4uL2ZvbnRzLzNyZCBQYXJ0eS9DaGVzc1ZhcmlhbnRzL0ZpZ3VyaW5lU3ltYm9sVDFCb2xkLndvZmZcIikgZm9ybWF0KFwid29mZlwiKTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkZpZ3VyaW5lU3ltYm9sVDFcIjtcbiAgc3JjOiB1cmwoXCIuLi8uLi9mb250cy8zcmQgUGFydHkvQ2hlc3NWYXJpYW50cy9GaWd1cmluZVN5bWJvbFQxLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpLCB1cmwoXCIuLi8uLi9mb250cy8zcmQgUGFydHkvQ2hlc3NWYXJpYW50cy9GaWd1cmluZVN5bWJvbFQxLndvZmZcIikgZm9ybWF0KFwid29mZlwiKTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiU2FuY3R1YXJ5UGxheWdyb3VuZFwiO1xuICBzcmM6IHVybChcIi4uLy4uL2ZvbnRzLzNyZCBQYXJ0eS9TYW5jdHVhcnlQbGF5Z3JvdW5kLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpLCB1cmwoXCIuLi8uLi9mb250cy8zcmQgUGFydHkvU2FuY3R1YXJ5UGxheWdyb3VuZC53b2ZmXCIpIGZvcm1hdChcIndvZmZcIik7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkFtaXRhXCI7XG4gIHNyYzogdXJsKFwiLi4vLi4vZm9udHMvM3JkIFBhcnR5L0FtaXRhL0FtaXRhLVJlZ3VsYXIud29mZjJcIikgZm9ybWF0KFwid29mZjJcIiksIHVybChcIi4uLy4uL2ZvbnRzLzNyZCBQYXJ0eS9BbWl0YS9BbWl0YS1SZWd1bGFyLndvZmYyXCIpIGZvcm1hdChcIndvZmZcIik7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xufVxuLyoqKioqKioqKioqKioqKioqKiogTWVudSAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqKioqKiogTWVudSBDb250cm9scyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIENvbnRhaW5lciBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBDb250YWluZXIgVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgQ29udGFpbmVyIFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIEhpZ2hsaWdodCBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBBbm5vdGF0aW9uIFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIFZhcmlhdGlvbiBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBQbHkgVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqKiBDb250cm9sIENvbG9ycyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKiogQm9hcmQgQ29sb3JzICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqKiBGb250IFNpemVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbjpyb290IHtcbiAgLS1iZy1jb2xvcjogI2YyZjNmNztcbiAgLS1mZy1jb2xvcjogIzM4M2E0MTtcbiAgLS1yZWQ6ICNlNDMwMzA7XG4gIC0tZ3JlZW46ICMxOWExODc7XG4gIC0tYmx1ZTogIzM2N2JmMDtcbiAgLS1kYXJrLWJsdWU6ICMyNjVhYjE7XG4gIC0tbWFyb29uOiAjYjgxNzRjO1xuICAtLXB1cnBsZTogIzhjNDJhYjtcbn1cblxuLnNob3djYXNlLWJveCB7XG4gIGJvcmRlci1yYWRpdXM6IDFweDtcbiAgbWFyZ2luOiAycHg7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogbm93cmFwO1xuICBtYXgtaGVpZ2h0OiAxODBweDtcbn1cblxuLnBsYXllci1oZWFkZXIsIC5wbGF5ZXItaGVhZGVyNCwgLnBsYXllci1oZWFkZXIzLCAucGxheWVyLWhlYWRlcjIsIC5wbGF5ZXItaGVhZGVyMSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgYm9yZGVyLXJhZGl1czogMXB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgcGFkZGluZy1yaWdodDogNHB4O1xuICBiYWNrZ3JvdW5kOiAjZjBlN2QzO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTI3ZGVnLCByZ2JhKDI0MCwgMjMxLCAyMTEsIDAuNjIzKSAwJSwgcmdiYSgxNzUsIDE3NSwgMTc1LCAwLjc1KSA0NCUsICM3ZTdlN2UgMTAwJSk7XG4gIG9yZGVyOiAwO1xufVxuXG4ucGxheWVyLWhlYWRlcjEge1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5wbGF5ZXItaGVhZGVyMiB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLmNvbG9yLWltYWdlIHtcbiAgaGVpZ2h0OiAxOHB4O1xuICBtYXJnaW4tcmlnaHQ6IDRweDtcbiAgbWFyZ2luLXRvcDogNHB4O1xuICBvcmRlcjogMztcbn1cblxuLnBsYXllci1pbWFnZSB7XG4gIGhlaWdodDogNjglO1xuICBtYXgtd2lkdGg6IDc4cHg7XG59XG5cbi5wbGF5ZXItZnJhbWUsIC5wbGF5ZXItZnJhbWU0LCAucGxheWVyLWZyYW1lMywgLnBsYXllci1mcmFtZTIsIC5wbGF5ZXItZnJhbWUxIHtcbiAgd2lkdGg6IDkwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG9yZGVyOiAwO1xufVxuXG4ucGxheWVyLWZyYW1lMSB7XG4gIGhlaWdodDogMTIwJTtcbiAgd2lkdGg6IHVuc2V0O1xufVxuXG4ucGxheWVyLWZyYW1lMiB7XG4gIGhlaWdodDogMTIwJTtcbiAgd2lkdGg6IHVuc2V0O1xufVxuXG4ucGxheWVyLWRldGFpbHMsIC5wbGF5ZXItZGV0YWlsczQsIC5wbGF5ZXItZGV0YWlsczMsIC5wbGF5ZXItZGV0YWlsczIsIC5wbGF5ZXItZGV0YWlsczEge1xuICBtaW4td2lkdGg6IDE2MHB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIHdpZHRoOiAxMDAlO1xuICBvcmRlcjogMjtcbn1cblxuLnBsYXllci1kZXRhaWxzMSB7XG4gIG1hcmdpbi1sZWZ0OiAtNTJweDtcbn1cblxuLnBsYXllci1kZXRhaWxzMiB7XG4gIG1hcmdpbi1sZWZ0OiAtNTJweDtcbn1cblxuLnBob3RvLWZyYW1lIHtcbiAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC04NyUsIC05JSk7XG59XG5cbi5wbGF5ZXItbmFtZSwgLnBsYXllci1uYW1lUCB7XG4gIG1hcmdpbi1sZWZ0OiAycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG9yZGVyOiAxO1xuICBtaW4td2lkdGg6IDYwJTtcbiAgcGFkZGluZy1yaWdodDogMnB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIG1hcmdpbi10b3A6IDJweDtcbiAgZm9udC1mYW1pbHk6IFwiQW1pdGFcIjtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG59XG5cbi5wbGF5ZXItbmFtZVAge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGxpbmUtaGVpZ2h0OiAwcHg7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDhweCwgMTNweCk7XG4gIG1hcmdpbi10b3A6IHVuc2V0O1xuICBtaW4td2lkdGg6IHVuc2V0O1xuICBtYXJnaW4tbGVmdDogdW5zZXQ7XG59XG5cbi5wbGF5ZXItZGF0YSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWxlZnQ6IDRweDtcbiAgbWFyZ2luLXJpZ2h0OiA0cHg7XG4gIGZvbnQtc2l6ZTogdmFyKC0taGRyRGF0YUZvbnRTaXplKTtcbn1cblxuLnBsYXllci1kYXRhLWJveCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogcm93IHdyYXA7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlayerShowcaseComponent, [{
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
        }], searchURL: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/olga-score/olga-score.component.ts":
/*!****************************************************!*\
  !*** ./src/app/olga-score/olga-score.component.ts ***!
  \****************************************************/
/*! exports provided: GamescoreUxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GamescoreUxComponent", function() { return GamescoreUxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _common_kokopu_engine__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/kokopu-engine */ "./src/app/common/kokopu-engine.ts");
/* harmony import */ var _services_olga_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/olga.service */ "./src/app/services/olga.service.ts");
/* harmony import */ var _score_flow_score_flow_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./score-flow/score-flow.component */ "./src/app/olga-score/score-flow/score-flow.component.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _score_table_score_table_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./score-table/score-table.component */ "./src/app/olga-score/score-table/score-table.component.ts");
/* harmony import */ var _services_layout_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/layout.service */ "./src/app/services/layout.service.ts");









function GamescoreUxComponent_score_flow_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "score-flow", 1);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "score-flow-", ctx_r0.olga.UUID, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx_r0._items);
} }
function GamescoreUxComponent_score_table_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "score-table", 1);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "score-table-", ctx_r1.olga.UUID, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx_r1._items);
} }
class GamescoreUxComponent {
    // Current item data and visual
    constructor(olga, layout) {
        this.olga = olga;
        this.layout = layout;
        this.container = null;
        this.GameScoreType = _common_kokopu_engine__WEBPACK_IMPORTED_MODULE_1__["GameScoreType"];
        this.ScoreViewType = _services_olga_service__WEBPACK_IMPORTED_MODULE_2__["ScoreViewType"];
        this._items = [];
        // @ts-ignore
        this.currentData = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](null);
        // @ts-ignore
        this.currentIndex = -1;
        this.olga.attachScore(this);
        this.layout.attachScore(this);
    }
    ngOnInit() {
        var _a;
        this.olga.attachScore(this);
        this.layout.attachScore(this);
        const gs = (_a = this.olga.getGame()) === null || _a === void 0 ? void 0 : _a.generateGameScore();
        if (gs) {
            this._items = gs;
        }
    }
    ngAfterViewInit() {
        this.layout.gameScoreElement = this.container = document.getElementById('olga-score-' + this.olga.UUID);
        if (this.flowScore) {
            this.flowScore.items = this._items;
        }
        if (this.tableScore) {
            this.tableScore.items = this._items;
        }
    }
    clearGameScore() {
        if (this.flowScore) {
            this.flowScore.clearGameScore();
        }
    }
    setGameScoreItems(items) {
        if (items) {
            this._items = items;
            this.updateSelection();
        }
        else {
            this._items = [];
        }
        if (this.flowScore) {
            this.flowScore.items = this._items;
        }
        if (this.tableScore) {
            this.tableScore.items = this._items;
        }
    }
    plyCount() {
        if (this._items) {
            return (this._items.length / 2) + 1;
        }
        return 0;
    }
    updateSelection() {
        window.setTimeout(() => { this.selectGameScoreItem(this.currentIndex); }, 5);
    }
    clearSelection() {
        this.currentIndex = -1;
        window.setTimeout(() => { this.selectGameScoreItem(-1); }, 5);
    }
    navigateToItem(index) {
    }
    resize(width, height) {
        if (height == 0 || width == 0) {
            return;
        }
        // if (this.container) {
        //   this.container.style.width = width + 'px';
        //   this.container.style.height = height + 'px';
        // }
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
GamescoreUxComponent.ɵfac = function GamescoreUxComponent_Factory(t) { return new (t || GamescoreUxComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_olga_service__WEBPACK_IMPORTED_MODULE_2__["OlgaService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_layout_service__WEBPACK_IMPORTED_MODULE_6__["LayoutService"])); };
GamescoreUxComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GamescoreUxComponent, selectors: [["olga-score"]], viewQuery: function GamescoreUxComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_score_flow_score_flow_component__WEBPACK_IMPORTED_MODULE_3__["ScoreFlowComponent"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_score_table_score_table_component__WEBPACK_IMPORTED_MODULE_5__["ScoreTableComponent"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.flowScore = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.tableScore = _t.first);
    } }, outputs: { _items: "_items", currentData: "currentData", currentIndex: "currentIndex", currentItem: "currentItem" }, decls: 2, vars: 2, consts: [[3, "id", "items", 4, "ngIf"], [3, "id", "items"]], template: function GamescoreUxComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, GamescoreUxComponent_score_flow_0_Template, 1, 2, "score-flow", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GamescoreUxComponent_score_table_1_Template, 1, 2, "score-table", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.olga.scoreViewType.value === ctx.ScoreViewType.Flow);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.olga.scoreViewType.value === ctx.ScoreViewType.Table);
    } }, styles: ["@font-face {\n  font-family: \"Caveat\";\n  src: url('Caveat-Bold.woff2') format(\"woff2\"), url('Caveat-Bold.woff') format(\"woff\");\n  font-weight: bold;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"Caveat\";\n  src: url('Caveat-Regular.woff2') format(\"woff2\"), url('Caveat-Regular.woff') format(\"woff\");\n  font-weight: 600;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"FigurineSymbolT1\";\n  src: url('FigurineSymbolT1Bold.woff2') format(\"woff2\"), url('FigurineSymbolT1Bold.woff') format(\"woff\");\n  font-weight: bold;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"FigurineSymbolT1\";\n  src: url('FigurineSymbolT1.woff2') format(\"woff2\"), url('FigurineSymbolT1.woff') format(\"woff\");\n  font-weight: 600;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"SanctuaryPlayground\";\n  src: url('SanctuaryPlayground.woff2') format(\"woff2\"), url('SanctuaryPlayground.woff') format(\"woff\");\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"Amita\";\n  src: url('Amita-Regular.woff2') format(\"woff2\"), url('Amita-Regular.woff2') format(\"woff\");\n  font-style: normal;\n  font-display: swap;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n[_ngcontent-%COMP%]:root {\n  --bg-color: #f2f3f7;\n  --fg-color: #383a41;\n  --red: #e43030;\n  --green: #19a187;\n  --blue: #367bf0;\n  --dark-blue: #265ab1;\n  --maroon: #b8174c;\n  --purple: #8c42ab;\n}\nscore-flow[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\nscore-table[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column nowrap;\n  width: 100%;\n  justify-content: space-around;\n  align-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMuc2NzcyIsInNyYy9hc3NldHMvc2Nzcy9tb2R1bGVzL19mb250cy5zY3NzIiwic3JjL2FwcC9vbGdhLXNjb3JlL29sZ2Etc2NvcmUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4RUFBQTtBQ0FBO0VBQ0kscUJBQUE7RUFDQSxxRkFBQTtFQUVBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0NKO0FERUE7RUFDSSxxQkFBQTtFQUNBLDJGQUFBO0VBRUEsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDREo7QURJQTtFQUNFLCtCQUFBO0VBQ0EsdUdBQUE7RUFFQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNIRjtBRE1BO0VBQ0UsK0JBQUE7RUFDQSwrRkFBQTtFQUVBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0xGO0FEUUE7RUFDRSxrQ0FBQTtFQUNBLHFHQUFBO0VBRUEsa0JBQUE7RUFDQSxrQkFBQTtBQ1BGO0FEV0E7RUFDRSxvQkFBQTtFQUNBLDBGQUFBO0VBRUEsa0JBQUE7RUFDQSxrQkFBQTtBQ1ZGO0FGREEsK0VBQUE7QUFHQSxrRkFBQTtBQUtBLCtFQUFBO0FBVUEsK0VBQUE7QUFNQSwrRUFBQTtBQU1BLCtFQUFBO0FBTUEsZ0ZBQUE7QUFLQSwrRUFBQTtBQUtBLHlFQUFBO0FBS0EseUVBQUE7QUFJQSx1RUFBQTtBQVFBLHFFQUFBO0FBeUJBO0VBQ0UsbUJBQUE7RUFDQSxtQkFBQTtFQUVBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUUxRUY7QUE1REE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQStERjtBQTVEQTtFQUNJLGFBQUE7RUFDQSx3QkFBQTtFQUNBLFdBQUE7RUFDQSw2QkFBQTtFQUNBLHFCQUFBO0FBK0RKIiwiZmlsZSI6InNyYy9hcHAvb2xnYS1zY29yZS9vbGdhLXNjb3JlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG5cbkBpbXBvcnQgXCIuL2Fzc2V0cy9zY3NzL21vZHVsZXMvX2ZvbnRzLnNjc3NcIjtcbiRnYW1lc2NvcmUtZmFtaWx5OiBcIkZpZ3VyaW5lU3ltYm9sVDFcIjtcbiRnYW1lc2NvcmUtaGlnaGxpZ2h0OiAjNTg1ODU4ZmY7XG4kZ2FtZXNjb3JlLWZvcmVncm91bmQ6IHdoaXRlO1xuXG4kcmVkOiAjZTQzMDMwO1xuJGdyZWVuOiAjMTlhMTg3O1xuJGxpZ2h0LWJsdWU6ICMwMGZmZmZmZjtcbiRibHVlOiAjMzY3YmYwO1xuJGRhcmstYmx1ZTogIzI2NWFiMTtcbiRtYXJvb246ICNiODE3NGM7XG4kcHVycGxlOiAjOGM0MmFiO1xuXG4vLyBNYWluIE9MR0EgQ29sb3IgRWxlbWVudCBWYXJpYWJsZXNcbiR0ZXh0Q29sb3I6IHZhcigtLXRleHRDb2xvcik7IC8vIE1haW4gVGV4dCBDb2xvclxuJHRleHRDb2xvckF0dGVudGlvbjogdmFyKC0tdGV4dENvbG9yQXR0ZW50aW9uKTsgLy8gQXR0ZW50aW9uIHRleHRcbiR0ZXh0Q29sb3JSZW1vdmU6IHZhcigtLXRleHRDb2xvclJlbW92ZSk7IC8vIFJlbW92ZS9EZWxldGUvQ2xvc2VcbiR0ZXh0Q29sb3JBZGQ6IHZhcigtLXRleHRDb2xvckFkZCk7IC8vIEFkZC9DcmVhdGUvT3BlblxuJHRleHRDb2xvckFjdGl2ZTogdmFyKC0tdGV4dENvbG9yQWN0aXZlKTsgLy8gQWRkL0NyZWF0ZS9PcGVuXG4kYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZCk7IC8vIE1haW4gYmFja2dyb3VuZCBDb2xvclxuJGJnQ29udGFpbmVyOiB2YXIoLS1iZ0NvbnRhaW5lcik7IC8vIGJhY2tncm91bmQgb2YgQ29udGFpbmVyc1xuJGJnTWVudTogdmFyKC0tYmdNZW51KTsgLy8gYmFja2dyb3VuZCBvZiBNZW51c1xuJGJnSXRlbTogdmFyKC0tYmdJdGVtKTsgLy8gYmFja2dyb3VuZCBvZiBJdGVtc1xuXG4vLyBDb250ZXh0IE1lbnVcbiRiZ0NvbnRleHQ6IHZhcigtLWJnQ29udGV4dCk7IC8vIGJhY2tncm91bmQgb2YgQ29udGV4dCBNZW51XG4kdGV4dENvbG9yQ29udGV4dDogdmFyKC0tdGV4dENvbG9yQ29udGV4dCk7IC8vIHRleHQgY29sb3IgQ29udGV4dCBNZW51XG4kYm9yZGVyQ29udGV4dDogdmFyKC0tYm9yZGVyQ29udGV4dCk7IC8vIGJvcmRlciBDb250ZXh0IE1lbnVcbiRvdmVybGF5Q29udGV4dEJhY2tncm91bmQ6IHZhcihcbiAgLS1vdmVybGF5Q29udGV4dEJhY2tncm91bmRcbik7IC8vIENvbnRleHQgTWVudSBPdmVybGF5IGJhY2tncm91bmQgbWFpblxuJG92ZXJsYXlDb250ZXh0QmFja2dyb3VuZEdyYWRpZW50OiB2YXIoXG4gIC0tb3ZlcmxheUNvbnRleHRCYWNrZ3JvdW5kR3JhZGllbnRcbik7IC8vIENvbnRleHQgTWVudSBiYWNrZ3JvdW5kIGdyYWRpZW50XG5cblxuXG4vKioqKioqKioqKioqKioqKioqKiBNZW51ICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuJG1lQmFja2dyb3VuZDogdmFyKC0tbWVCYWNrZ3JvdW5kKTtcblxuLyoqKioqKioqKioqKioqKioqKioqKioqKiBNZW51IENvbnRyb2xzICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiRjc0ZpbGw6IHZhcigtLWNzRmlsbCk7XG4kY3NBY2NlbnQ6IHZhcigtLWNzQWNjZW50KTtcbiRjc0FjY2VudDI6IHZhcigtLWNzQWNjZW50Mik7XG5cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgQ29udGFpbmVyIFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4kZ3NUZXh0Q29sb3I6IHZhcigtLWdzVGV4dENvbG9yKTsgLy8gVGV4dCBjb2xvciBmb3IgZ2FtZSBzY29yZVxuJGdzQmFja2dyb3VuZDogdmFyKC0tZ3NCYWNrZ3JvdW5kKTsgLy8gYmFja2dyb3VuZCBvZiBDb250YWluZXJzXG4kZ3NMaXN0QmFja2dyb3VuZDogdmFyKC0tZ3NMaXN0QmFja2dyb3VuZCk7IC8vIGxpc3QgYmFja2dyb3VuZCBvZiBnYW1lIHNjb3JlXG4kZ3NCb3JkZXI6IHZhcigtLWdzQm9yZGVyKTsgLy8gYmFja2dyb3VuZCBvZiBNZW51c1xuJGdzVGV4dFNpemU6IHZhcigtLWdzVGV4dFNpemUpOyAvLyBiYWNrZ3JvdW5kIG9mIE1lbnVzXG4kZ3NGb250RmFtaWx5OiB2YXIoLS1nc0ZvbnRGYW1pbHkpOyAvLyBzY29yZSBmb250XG4kZ3NUYWJsZUl0ZW1XaWR0aDogdmFyKC0tZ3NUYWJsZUl0ZW1XaWR0aCk7IC8vIHdpZHRoIG9mIHNjb3JlIGl0ZW0gaW4gdGFibGUgbGF5b3V0XG4kZ3NUYWJsZVBseVdpZHRoOiB2YXIoLS1nc1RhYmxlUGx5V2lkdGgpOyAvLyB3aWR0aCBvZiBwbHkgZWxlbWVudCBpbiB0YWJsZSBsYXlvdXRcblxuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBDb250YWluZXIgVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiRnc1RleHRDb2xvck1XOiB2YXIoLS1nc1RleHRDb2xvck1XKTsgLy8gVGV4dCBjb2xvciBmb3IgZ2FtZSBzY29yZVxuJGdzQmFja2dyb3VuZE1XOiB2YXIoLS1nc0JhY2tncm91bmRNVyk7IC8vIGJhY2tncm91bmQgb2YgQ29udGFpbmVyc1xuJGdzQm9yZGVyTVc6IHZhcigtLWdzQm9yZGVyTVcpOyAvLyBiYWNrZ3JvdW5kIG9mIE1lbnVzXG4kZ3NUZXh0U2l6ZU1XOiB2YXIoLS1nc1RleHRTaXplTVcpOyAvLyBiYWNrZ3JvdW5kIG9mIE1lbnVzXG5cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgQ29udGFpbmVyIFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4kZ3NUZXh0Q29sb3JNQjogdmFyKC0tZ3NUZXh0Q29sb3JNQik7IC8vIFRleHQgY29sb3IgZm9yIGdhbWUgc2NvcmVcbiRnc0JhY2tncm91bmRNQjogdmFyKC0tZ3NCYWNrZ3JvdW5kTUIpOyAvLyBiYWNrZ3JvdW5kIG9mIENvbnRhaW5lcnNcbiRnc0JvcmRlck1COiB2YXIoLS1nc0JvcmRlck1CKTsgLy8gYmFja2dyb3VuZCBvZiBNZW51c1xuJGdzVGV4dFNpemVNQjogdmFyKC0tZ3NUZXh0U2l6ZU1CKTsgLy8gYmFja2dyb3VuZCBvZiBNZW51c1xuXG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIEhpZ2hsaWdodCBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuJGdzVGV4dENvbG9ySEc6IHZhcigtLWdzVGV4dENvbG9ySEcpOyAvLyBUZXh0IGNvbG9yIGZvciBoaWdobGlnaHRcbiRnc0Fubm90YXRpb25Db2xvckhHOiB2YXIoLS1nc0Fubm90YXRpb25Db2xvckhHKTsgLy8gQW5ub3RhdGlvbi9Db21tZW50IGNvbG9yIGZvciBoaWdobGlnaHRcbiRnc0JhY2tncm91bmRIRzogdmFyKC0tZ3NCYWNrZ3JvdW5kSEcpOyAvLyBiYWNrZ3JvdW5kIGZvciBoaWdobGlnaHRcbiRnc0JvcmRlckhHOiB2YXIoLS1nc0JvcmRlckhHKTsgLy8gYm9yZGVyIGZvciBoaWdobGlnaHRcblxuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBBbm5vdGF0aW9uIFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4kZ3NUZXh0Q29sb3JBTjogdmFyKC0tZ3NUZXh0Q29sb3JBTik7IC8vIFRleHQgY29sb3IgZm9yIGhpZ2hsaWdodFxuJGdzQmFja2dyb3VuZEFOOiB2YXIoLS1nc0JhY2tncm91bmRBTik7IC8vIGJhY2tncm91bmQgZm9yIGhpZ2hsaWdodFxuJGdzQm9yZGVyQU46IHZhcigtLWdzQm9yZGVyQU4pOyAvLyBib3JkZXIgZm9yIGhpZ2hsaWdodFxuXG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIFZhcmlhdGlvbiBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuJGdzVGV4dENvbG9yVkE6IHZhcigtLWdzVGV4dENvbG9yVkEpOyAvLyBUZXh0IGNvbG9yIGZvciBoaWdobGlnaHRcbiRnc0JhY2tncm91bmRWQTogdmFyKC0tZ3NCYWNrZ3JvdW5kVkEpOyAvLyBiYWNrZ3JvdW5kIGZvciBoaWdobGlnaHRcbiRnc0JvcmRlclZBOiB2YXIoLS1nc0JvcmRlclZBKTsgLy8gYm9yZGVyIGZvciBoaWdobGlnaHRcblxuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBQbHkgVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiRnc1RleHRDb2xvclBDOiB2YXIoLS1nc1RleHRDb2xvclBDKTsgLy8gVGV4dCBjb2xvciBmb3IgZ2FtZSBzY29yZSBwbHlcbiRnc0JhY2tncm91bmRQQzogdmFyKC0tZ3NCYWNrZ3JvdW5kUEMpOyAvLyBiYWNrZ3JvdW5kIGZvciBnYW1lIHNjb3JlIHBseVxuJGdzQm9yZGVyUEM6IHZhcigtLWdzQm9yZGVyUEMpOyAvLyBib3JkZXIgZm9yIGdhbWUgc2NvcmUgcGx5XG5cbi8qKioqKioqKioqKioqKioqKioqKiBDb250cm9sIENvbG9ycyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4kY3NCYWNrZ3JvdW5kOiB2YXIoLS1jc0JhY2tncm91bmQpOyAvLyBiYWNrZ3JvdW5kIGZvciBjb250cm9sc1xuJGNzQ29sb3I6IHZhcigtLWNzQ29sb3IpOyAvLyBjb250cm9scyBjb2xvciAoZm9yZWdyb3VuZClcblxuLyoqKioqKioqKioqKioqKioqKioqIEJvYXJkIENvbG9ycyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4kYm9hcmRCR0Rhcms6IHZhcigtLWJvYXJkQkdEYXJrKTsgLy8gYm9hcmQgZGFyayB0aWxlXG4kYm9hcmRCR0xpZ2h0OiB2YXIoLS1ib2FyZEJHTGlnaHQpOyAvLyBib2FyZCBsaWdodCB0aWxlXG4kYm9hcmRMYWJlbExpZ2h0OiB2YXIoLS1ib2FyZExhYmVsTGlnaHQpOyAvLyBib2FyZCBsaWdodCBsYWJlbFxuJGJvYXJkTGFiZWxEYXJrOiB2YXIoLS1ib2FyZExhYmVsRGFyayk7IC8vIGJvYXJkIGRhcmsgbGFiZWxcblxuXG5cbi8qKioqKioqKioqKioqKioqKioqKiBGb250IFNpemVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiRnc0ZvbnRTaXplOiB2YXIoLS1nc0ZvbnRTaXplKTsgLy8gYm9hcmQgZGFyayB0aWxlXG4kZ3NGb250U2l6ZUFOOiB2YXIoLS1nc0ZvbnRTaXplQU4pOyAvLyBib2FyZCBsaWdodCB0aWxlXG4kZ3NGb250U2l6ZUhHOiB2YXIoLS1nc0ZvbnRTaXplSEcpOyAvLyBib2FyZCBsaWdodCBsYWJlbFxuJGdzRm9udFNpemVWQTogdmFyKC0tZ3NGb250U2l6ZVZBKTsgLy8gYm9hcmQgZGFyayBsYWJlbFxuJGdzRm9udFNpemVQQzogdmFyKC0tZ3NGb250U2l6ZVBDKTsgLy8gYm9hcmQgZGFyayBsYWJlbFxuJGhkckRhdGFGb250U2l6ZTogdmFyKC0taGRyRGF0YUZvbnRTaXplKTsgLy8gc2l6ZSBvZiBwbGF5ZXIgc2hvd2Nhc2UgZGF0YVxuJGhkck5hbWVGb250U2l6ZTogdmFyKC0taGRyTmFtZUZvbnRTaXplKTsgLy8gc2l6ZSBvZiBwbGF5ZXIgc2hvd2Nhc2UgTmFtZVxuJGhkclRpdGxlRm9udFNpemU6IHZhcigtLWhkclRpdGxlRm9udFNpemUpOyAvLyBzaXplIG9mIHBsYXllciBzaG93Y2FzZSBkYXRhXG4kaGRyVmFyaWFudEZvbnRTaXplOiB2YXIoLS1oZHJWYXJpYW50Rm9udFNpemUpOyAvLyBzaXplIG9mIHBsYXllciBzaG93Y2FzZSBOYW1lXG4kaGRyTWF0Y2hEYXRhRm9udFNpemU6IHZhcigtLWhkck1hdGNoRGF0YUZvbnRTaXplKTsgLy8gc2l6ZSBvZiBwbGF5ZXIgc2hvd2Nhc2UgTmFtZVxuJGhkck9wZW5pbmdGb250U2l6ZTogdmFyKC0taGRyTWF0Y2hEYXRhRm9udFNpemUpOyAvLyBzaXplIG9mIHBsYXllciBzaG93Y2FzZSBOYW1lXG4kaGRyUmVzdWx0Rm9udFNpemU6IHZhcigtLWhkclJlc3VsdEZvbnRTaXplKTsgLy8gc2l6ZSBvZiBwbGF5ZXIgc2hvd2Nhc2UgTmFtZVxuJGhkclJvdW5kRm9udFNpemU6IHZhcigtLWhkclJvdW5kRm9udFNpemUpOyAvLyBzaXplIG9mIHBsYXllciBzaG93Y2FzZSBOYW1lXG5cbi8vIEdlbmVyYWwgc3R1ZmZcbiR0ZXh0LWNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcbiRiZy1vdXRlcjogdmFyKC0tYmctb3V0ZXIpO1xuJGJnLWlubmVyOiB2YXIoLS1iZy1pbm5lcik7XG5cbiRiZy1jb2xvcjogI2YyZjNmNztcbiRmZy1jb2xvcjogIzM4M2E0MTtcblxuJGdsb3ctc2hhZG93OiAwIDAgMC41ZW0gdHJhbnNwYXJlbnRpemUoJGJsdWUsIDAuMyk7XG5cbjpyb290IHtcbiAgLS1iZy1jb2xvcjogI3skYmctY29sb3J9O1xuICAtLWZnLWNvbG9yOiAjeyRmZy1jb2xvcn07XG5cbiAgLS1yZWQ6ICN7JHJlZH07XG4gIC0tZ3JlZW46ICN7JGdyZWVufTtcbiAgLS1ibHVlOiAjeyRibHVlfTtcbiAgLS1kYXJrLWJsdWU6ICN7JGRhcmstYmx1ZX07XG4gIC0tbWFyb29uOiAjeyRtYXJvb259O1xuICAtLXB1cnBsZTogI3skcHVycGxlfTtcbn1cblxuLy8gOjotbW96LWZvY3VzLWlubmVyLFxuLy8gOi1tb3otZm9jdXNyaW5nIHtcbi8vICAgYm9yZGVyOiAwO1xuLy8gICBjb2xvcjogdHJhbnNwYXJlbnQ7XG4vLyAgIHRleHQtc2hhZG93OiAwIDAgMCAkZmctY29sb3I7XG4vLyB9XG5cbi8vIDo6c2VsZWN0aW9uLFxuLy8gOjotbW96LXNlbGVjdGlvbiB7XG4vLyAgIGNvbG9yOiB3aGl0ZTtcbi8vICAgYmFja2dyb3VuZDogYmxhY2s7XG4vLyB9XG5cbi8vICoge1xuLy8gICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuLy8gICBvdXRsaW5lOiBub25lO1xuLy8gICB1c2VyLXNlbGVjdDogbm9uZTtcbi8vICAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xuLy8gICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuLy8gICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7XG4vLyAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4vLyAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbi8vICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuLy8gICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4vLyAgIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKSAhaW1wb3J0YW50O1xuLy8gICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XG4vLyAgIGN1cnNvcjogZGVmYXVsdDtcbi8vICAgbGV0dGVyLXNwYWNpbmc6IDA7XG4vLyB9XG5cbi8vIC5zZWxlY3RhYmxlLFxuLy8gLnNlbGVjdGFibGUgKiB7XG4vLyAgIGN1cnNvcjogYXV0bztcbi8vICAgdXNlci1zZWxlY3Q6IHRleHQ7XG4vLyAgIC13ZWJraXQtdG91Y2gtY2FsbG91dDogdGV4dDtcbi8vICAgLXdlYmtpdC11c2VyLXNlbGVjdDogdGV4dDtcbi8vICAgLWtodG1sLXVzZXItc2VsZWN0OiB0ZXh0O1xuLy8gICAtbW96LXVzZXItc2VsZWN0OiB0ZXh0O1xuLy8gICAtbXMtdXNlci1zZWxlY3Q6IHRleHQ7XG4vLyB9XG5cbi8vIGh0bWwsXG4vLyBib2R5IHtcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogJGJnLWNvbG9yO1xuLy8gICBjb2xvcjogJGZnLWNvbG9yO1xuLy8gICBtYXJnaW46IDA7XG4vLyAgIHBhZGRpbmc6IDA7XG4vLyAgIGZvbnQtc2l6ZTogMTBwdDtcbi8vICAgaGVpZ2h0OiAxMDAlO1xuLy8gICBvdmVyZmxvdzogYXV0bztcbi8vIH1cblxuLy8gLndpdGgtc2hhZG93IHtcbi8vICAgYm94LXNoYWRvdzogNnB4IDZweCAxMHB4IHRyYW5zcGFyZW50aXplKGJsYWNrLCAwLjkpLCAtNnB4IC02cHggMTBweCB3aGl0ZTtcbi8vIH1cblxuLy8gLm91dHNldCB7XG4vLyAgIEBleHRlbmQgLndpdGgtc2hhZG93O1xuXG4vLyAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4vLyAgIGJhY2tncm91bmQ6ICRiZy1jb2xvcjtcbi8vIH1cblxuLy8gLmluc2V0IHtcbi8vICAgYm9yZGVyLXJhZGl1czogMTBweDtcbi8vICAgYm94LXNoYWRvdzogMCAwIHRyYW5zcGFyZW50LCAwIDAgdHJhbnNwYXJlbnQsXG4vLyAgICAgaW5zZXQgM3B4IDNweCA1cHggdHJhbnNwYXJlbnRpemUoYmxhY2ssIDAuOSksIGluc2V0IC0zcHggLTNweCA1cHggd2hpdGU7XG4vLyAgIGJhY2tncm91bmQ6IGxpZ2h0ZW4oJGJnLWNvbG9yLCAyJSk7XG4vLyB9XG5cbi8vIC5wYXBlciB7XG4vLyAgIEBleHRlbmQgLm91dHNldDtcbi8vICAgcGFkZGluZzogMTBweCAyMHB4IDIwcHg7XG4vLyAgIG1hcmdpbi10b3A6IDIwcHg7XG4vLyAgIG1pbi1oZWlnaHQ6IDEwMHB4O1xuLy8gICBmb250LXNpemU6IDEuMmVtO1xuLy8gICBiYWNrZ3JvdW5kOiAkYmctY29sb3I7XG4vLyB9XG5cbi8vIHNlY3Rpb24sXG4vLyBhcnRpY2xlLFxuLy8gLnNlY3Rpb24sXG4vLyAuYXJ0aWNsZSxcbi8vIC5wYXBlciB7XG4vLyAgIGxpbmUtaGVpZ2h0OiAyZW07XG4vLyAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbi8vICAgd29yZC1icmVhazogbm9ybWFsO1xuLy8gICBsaW5lLWhlaWdodDogMmVtO1xuLy8gfVxuXG4vLyBpbnB1dFt0eXBlPVwidGV4dFwiXSxcbi8vIGlucHV0W3R5cGU9XCJzZWFyY2hcIl0sXG4vLyBpbnB1dFt0eXBlPVwidGVsXCJdLFxuLy8gaW5wdXRbdHlwZT1cInVybFwiXSxcbi8vIGlucHV0W3R5cGU9XCJlbWFpbFwiXSxcbi8vIGlucHV0W3R5cGU9XCJwYXNzd29yZFwiXSxcbi8vIGlucHV0W3R5cGU9XCJkYXRlXCJdLFxuLy8gaW5wdXRbdHlwZT1cIm1vbnRoXCJdLFxuLy8gaW5wdXRbdHlwZT1cIndlZWtcIl0sXG4vLyBpbnB1dFt0eXBlPVwidGltZVwiXSxcbi8vIGlucHV0W3R5cGU9XCJudW1iZXJcIl0sXG4vLyBpbnB1dFt0eXBlPVwiY29sb3JcIl0sXG4vLyBzZWxlY3QsXG4vLyB0ZXh0YXJlYSB7XG4vLyAgIGJvcmRlcjogMDtcbi8vICAgYmFja2dyb3VuZDogJGJnLWNvbG9yO1xuLy8gICBjb2xvcjogJGZnLWNvbG9yO1xuLy8gICBmb250LXdlaWdodDogbm9ybWFsO1xuLy8gICBwYWRkaW5nOiAwIDEuMjVlbTtcbi8vICAgbGluZS1oZWlnaHQ6IDEuMjVlbTtcbi8vICAgaGVpZ2h0OiAzLjVlbTtcbi8vICAgbWFyZ2luOiAxMHB4IDA7XG4vLyAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuLy8gICBjdXJzb3I6IHRleHQ7XG4vLyAgIHVzZXItc2VsZWN0OiB0ZXh0O1xuLy8gICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IHRleHQ7XG4vLyAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IHRleHQ7XG4vLyAgIC1raHRtbC11c2VyLXNlbGVjdDogdGV4dDtcbi8vICAgLW1vei11c2VyLXNlbGVjdDogdGV4dDtcbi8vICAgLW1zLXVzZXItc2VsZWN0OiB0ZXh0O1xuLy8gICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuMnM7XG5cbi8vICAgJjpub3Qoc2VsZWN0KSB7XG4vLyAgICAgQGV4dGVuZCAuaW5zZXQ7XG5cbi8vICAgICAmOmZvY3VzIHtcbi8vICAgICAgIEBleHRlbmQgLm91dHNldDtcbi8vICAgICB9XG4vLyAgIH1cbi8vIH1cblxuLy8gdGV4dGFyZWEge1xuLy8gICBoZWlnaHQ6IDM1MHB4O1xuLy8gICBwYWRkaW5nOiAxLjI1ZW07XG4vLyB9XG5cbi8vIHNlbGVjdCB7XG4vLyAgIEBleHRlbmQgLm91dHNldDtcblxuLy8gICBjdXJzb3I6IHBvaW50ZXI7XG4vLyAgIGJhY2tncm91bmQ6IHVybChkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUIyWlhKemFXOXVQU0l4TGpFaUlIWnBaWGRDYjNnOUlqQWdNQ0F4T1NBeE9TSWdlRzFzYm5NOUltaDBkSEE2THk5M2QzY3Vkek11YjNKbkx6SXdNREF2YzNabklqNDhaeUIwY21GdWMyWnZjbTA5SW0xaGRISnBlQ2d1TURNMElEQWdNQ0F1TURNMElDMDJMamdnTVM0M1pTMDFLU0lnYzNSNWJHVTlJbVpwYkd3Nkl6ZGlOMlU0WXlJK1BIQmhkR2dnWkQwaWJUUTRNQ0F6TkRRdE1qRXhMVEl4TW1NdE1UWXRNVFl0TkRFdE1UWXROVGNnTUMweE5pQXhOaTB4TmlBME1pQXdJRFUzYkRJek9DQXlNemxqT0M0MElEZ3VOU0F5TUNBeE1pQXpNU0F4TWlBeE1TQXdMalUySURJeUxUTXVNaUF6TVMweE1td3lNemd0TWpNNVl6RTJMVEUySURFMkxUUXlJREF0TlRkekxUUXhMVEUyTFRVM0lEQjZJaUJ6ZEhsc1pUMGlabWxzYkRvak4ySTNaVGhqSWk4K1BDOW5Qand2YzNablBnbz0pXG4vLyAgICAgbm8tcmVwZWF0IHJpZ2h0IDFlbSBjZW50ZXI7XG4vLyAgIGJhY2tncm91bmQtc2l6ZTogMS4yZW07XG4vLyAgIHBhZGRpbmctcmlnaHQ6IDNlbTtcbi8vIH1cblxuLy8gaW5wdXQ6OnBsYWNlaG9sZGVyLFxuLy8gdGV4dGFyZWE6OnBsYWNlaG9sZGVyIHtcbi8vICAgb3BhY2l0eTogMTtcbi8vICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzO1xuLy8gICBjb2xvcjogaW5oZXJpdDtcbi8vIH1cblxuLy8gaW5wdXQ6Zm9jdXM6OnBsYWNlaG9sZGVyLFxuLy8gdGV4dGFyZWE6Zm9jdXM6OnBsYWNlaG9sZGVyIHtcbi8vICAgb3BhY2l0eTogMC4yO1xuLy8gfVxuXG4vLyBpbnB1dDotbXMtaW5wdXQtcGxhY2Vob2xkZXIsXG4vLyB0ZXh0YXJlYTotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuLy8gICBvcGFjaXR5OiAxO1xuLy8gICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnM7XG4vLyAgIGNvbG9yOiBpbmhlcml0O1xuLy8gfVxuXG4vLyBpbnB1dDpmb2N1czotbXMtaW5wdXQtcGxhY2Vob2xkZXIsXG4vLyB0ZXh0YXJlYTpmb2N1czotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuLy8gICBvcGFjaXR5OiAwLjI7XG4vLyB9XG5cbi8vIGlucHV0W3R5cGU9XCJzZWFyY2hcIl06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24sXG4vLyBpbnB1dFt0eXBlPVwic2VhcmNoXCJdOjotd2Via2l0LXNlYXJjaC1jYW5jZWwtYnV0dG9uLFxuLy8gaW5wdXRbdHlwZT1cInNlYXJjaFwiXTo6LXdlYmtpdC1zZWFyY2gtcmVzdWx0cy1idXR0b24sXG4vLyBpbnB1dFt0eXBlPVwic2VhcmNoXCJdOjotd2Via2l0LXNlYXJjaC1yZXN1bHRzLWRlY29yYXRpb24ge1xuLy8gICBkaXNwbGF5OiBub25lO1xuLy8gfVxuXG4vLyBidXR0b24sXG4vLyBpbnB1dFt0eXBlPVwiYnV0dG9uXCJdLFxuLy8gaW5wdXRbdHlwZT1cInN1Ym1pdFwiXSxcbi8vIGlucHV0W3R5cGU9XCJyZXNldFwiXSB7XG4vLyAgIEBleHRlbmQgLm91dHNldDtcblxuLy8gICBib3JkZXI6IDA7XG4vLyAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuLy8gICBwYWRkaW5nOiAxMHB4IDA7XG4vLyAgIHdpZHRoOiA4ZW07XG4vLyAgIHRleHQtYWxpZ246IGNlbnRlcjtcbi8vICAgY3Vyc29yOiBwb2ludGVyO1xuLy8gICBjb2xvcjogaW5oZXJpdDtcbi8vICAgZm9udC1zaXplOiAxLjFyZW07XG4vLyAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGJhY2tncm91bmQtY29sb3IsIGJveC1zaGFkb3c7XG4vLyAgIHRyYW5zaXRpb24tZGVsYXk6IDAuMnM7XG4vLyAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMnM7XG5cbi8vICAgJi5hY3RpdmUsXG4vLyAgICY6YWN0aXZlIHtcbi8vICAgICBAZXh0ZW5kIC5pbnNldDtcblxuLy8gICAgIHRyYW5zaXRpb24tZGVsYXk6IDBzO1xuLy8gICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMXM7XG4vLyAgIH1cblxuLy8gICBAZWFjaCAkbmFtZSwgJGNvbG9yIGluIChcInJlZFwiOiAkcmVkLCBcImdyZWVuXCI6ICRncmVlbiwgXCJibHVlXCI6ICRibHVlKSB7XG4vLyAgICAgQGF0LXJvb3QgLiN7JG5hbWV9LWJ1dHRvbixcbi8vICAgICAgICYuI3skbmFtZX0tYnV0dG9uIHtcbi8vICAgICAgIEBleHRlbmQgYnV0dG9uO1xuXG4vLyAgICAgICAkX2JnLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAkY29sb3IgMzAlLCBsaWdodGVuKCRjb2xvciwgNiUpIDgwJSk7XG5cbi8vICAgICAgIGNvbG9yOiB3aGl0ZTtcbi8vICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuLy8gICAgICAgdGV4dC1zaGFkb3c6IDAgMC4xZW0gMC4xZW0gdHJhbnNwYXJlbnRpemUoYmxhY2ssIDAuMyk7XG4vLyAgICAgICBiYWNrZ3JvdW5kOiAkX2JnLWltYWdlO1xuLy8gICAgICAgYm94LXNoYWRvdzogMCAwIDAuNWVtIHRyYW5zcGFyZW50aXplKCRjb2xvciwgMC4zKSwgMCAwIHRyYW5zcGFyZW50LFxuLy8gICAgICAgICBpbnNldCAwIC01cHggMCB0cmFuc3BhcmVudGl6ZShibGFjaywgMC45NSksXG4vLyAgICAgICAgIGluc2V0IDAgMnB4IDAgdHJhbnNwYXJlbnRpemUod2hpdGUsIDAuOCk7XG4vLyAgICAgICBib3JkZXItcmFkaXVzOiA2cHggNnB4IDhweCA4cHg7XG4vLyAgICAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBib3gtc2hhZG93LCBib3JkZXItcmFkaXVzO1xuXG4vLyAgICAgICAmLmFjdGl2ZSxcbi8vICAgICAgICY6YWN0aXZlIHtcbi8vICAgICAgICAgYmFja2dyb3VuZDogJF9iZy1pbWFnZTtcbi8vICAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuLy8gICAgICAgICBib3gtc2hhZG93OiAwIDAgdHJhbnNwYXJlbnQsIDAgMCB0cmFuc3BhcmVudCxcbi8vICAgICAgICAgICBpbnNldCAwIDJweCA1cHggMnB4IHRyYW5zcGFyZW50aXplKGJsYWNrLCAwLjgpO1xuLy8gICAgICAgfVxuLy8gICAgIH1cbi8vICAgfVxuLy8gfVxuXG4vLyBsYWJlbCB7XG4vLyAgICYsXG4vLyAgICYgKiB7XG4vLyAgICAgY3Vyc29yOiBwb2ludGVyO1xuLy8gICB9XG5cbi8vICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuLy8gICBwYWRkaW5nOiAwLjU2ZW0gMDtcbi8vIH1cblxuLy8gYSB7XG4vLyAgICYsXG4vLyAgICY6bGluayxcbi8vICAgJjp2aXNpdGVkLFxuLy8gICAmOmhvdmVyICY6YWN0aXZlIHtcbi8vICAgICAmLFxuLy8gICAgICYgKiB7XG4vLyAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4vLyAgICAgfVxuXG4vLyAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4vLyAgICAgY29sb3I6ICRibHVlO1xuLy8gICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuLy8gICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbi8vICAgfVxuLy8gfVxuXG4vLyBoMSxcbi8vIGgyLFxuLy8gaDMsXG4vLyBoNCxcbi8vIGg1LFxuLy8gaDYge1xuLy8gICBsaW5lLWhlaWdodDogMS41ZW07XG4vLyB9XG5cbi8vIGgxIHtcbi8vICAgZm9udC1zaXplOiA0ZW07XG4vLyAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuLy8gICBtYXJnaW46IDAuN2VtIDA7XG4vLyB9XG5cbi8vIGgyIHtcbi8vICAgZm9udC1zaXplOiAzZW07XG4vLyAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuLy8gICBtYXJnaW46IDAuOGVtIDA7XG4vLyB9XG5cbi8vIGgzIHtcbi8vICAgZm9udC1zaXplOiAyLjVlbTtcbi8vICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4vLyAgIG1hcmdpbjogMC45ZW0gMDtcbi8vIH1cblxuLy8gaDQge1xuLy8gICBmb250LXNpemU6IDJlbTtcbi8vICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4vLyAgIG1hcmdpbjogMWVtIDA7XG4vLyB9XG5cbi8vIGg1IHtcbi8vICAgbWFyZ2luOiAwLjVlbSAwO1xuLy8gICBmb250LXNpemU6IDEuMmVtO1xuLy8gICBmb250LXdlaWdodDogbm9ybWFsO1xuLy8gfVxuXG4vLyBoNiB7XG4vLyAgIG1hcmdpbjogMWVtIDAgMWVtIDEuNGVtO1xuLy8gICBmb250LXNpemU6IDFlbTtcbi8vICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4vLyB9XG5cbi8vIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSxcbi8vIGlucHV0W3R5cGU9XCJyYWRpb1wiXSB7XG4vLyAgICRfYm9yZGVyLXdpZHRoOiAwLjE1ZW07XG4vLyAgICRfYm94LXNoYWRvdzogMnB4IDJweCAzcHggdHJhbnNwYXJlbnRpemUoYmxhY2ssIDAuOCksIC0ycHggLTJweCAzcHggd2hpdGUsXG4vLyAgICAgaW5zZXQgMXB4IDFweCAycHggdHJhbnNwYXJlbnRpemUoYmxhY2ssIDAuOCksIGluc2V0IC0xcHggLTFweCAycHggd2hpdGU7XG4vLyAgIGZvbnQtc2l6ZTogMWVtO1xuLy8gICBjdXJzb3I6IHBvaW50ZXI7XG4vLyAgIGhlaWdodDogMS4yZW07XG4vLyAgIHdpZHRoOiAxLjJlbTtcbi8vICAgbWFyZ2luOiAwIDAuM2VtO1xuLy8gICBib3gtc2hhZG93OiAkX2JveC1zaGFkb3c7XG4vLyAgIGJvcmRlcjogJF9ib3JkZXItd2lkdGggc29saWQgJGJnLWNvbG9yO1xuLy8gICB2ZXJ0aWNhbC1hbGlnbjogdGV4dC1ib3R0b207XG4vLyAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGJhY2tncm91bmQsIGJveC1zaGFkb3c7XG4vLyAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMnM7XG5cbi8vICAgJjphY3RpdmUge1xuLy8gICAgIGJveC1zaGFkb3c6ICRfYm94LXNoYWRvdywgaW5zZXQgMCAwLjFlbSAwLjI1ZW0gdHJhbnNwYXJlbnRpemUoYmxhY2ssIDAuOCk7XG4vLyAgIH1cblxuLy8gICAmOmNoZWNrZWQge1xuLy8gICAgIGJvcmRlci13aWR0aDogMC4xZW07XG4vLyAgICAgYm9yZGVyLWNvbG9yOiBkYXJrZW4oJGJsdWUsIDEwJSk7XG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJsdWU7XG4vLyAgIH1cbi8vIH1cblxuLy8gaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdIHtcbi8vICAgYm9yZGVyLXJhZGl1czogMjUlO1xuXG4vLyAgICY6Y2hlY2tlZCB7XG4vLyAgICAgYm94LXNoYWRvdzogJGdsb3ctc2hhZG93LCBpbnNldCAwIC0wLjFlbSAwIHRyYW5zcGFyZW50aXplKGJsYWNrLCAwLjgpLFxuLy8gICAgICAgaW5zZXQgMCAwLjFlbSAwLjFlbSB0cmFuc3BhcmVudGl6ZSh3aGl0ZSwgMC44KTtcbi8vICAgfVxuLy8gfVxuXG4vLyBpbnB1dFt0eXBlPVwicmFkaW9cIl0ge1xuLy8gICBib3JkZXItcmFkaXVzOiAxMDAlO1xuXG4vLyAgICY6Y2hlY2tlZCB7XG4vLyAgICAgYm94LXNoYWRvdzogJGdsb3ctc2hhZG93O1xuLy8gICAgIGJveC1zaGFkb3c6ICRnbG93LXNoYWRvdywgaW5zZXQgMCAwLjEyZW0gMC4xZW0gdHJhbnNwYXJlbnRpemUod2hpdGUsIDAuNzUpO1xuLy8gICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDAuMTVlbTtcbi8vICAgfVxuLy8gfVxuXG4vLyAuY2hlY2t0ZXh0IHtcbi8vICAgd2lkdGg6IGF1dG87XG4vLyAgIG1hcmdpbjogMC41ZW07XG5cbi8vICAgaW5wdXQge1xuLy8gICAgIGRpc3BsYXk6IG5vbmU7XG5cbi8vICAgICArIHNwYW4ge1xuLy8gICAgICAgQGV4dGVuZCBidXR0b247XG5cbi8vICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuLy8gICAgICAgcGFkZGluZzogMWVtO1xuLy8gICAgICAgdHJhbnNpdGlvbi1kZWxheTogMHM7XG4vLyAgICAgfVxuXG4vLyAgICAgJjpjaGVja2VkICsgc3BhbiB7XG4vLyAgICAgICBAZXh0ZW5kIC5ibHVlLWJ1dHRvbjtcblxuLy8gICAgICAgcGFkZGluZzogMWVtO1xuLy8gICAgIH1cbi8vICAgfVxuLy8gfVxuXG4vLyAuc3dpdGNoIHtcbi8vICAgJF9oZWlnaHQ6IDJyZW07XG4vLyAgICRfd2lkdGg6IDhyZW07XG4vLyAgICRfaGFuZGxlLXdpZHRoOiAkX2hlaWdodDtcbi8vICAgJF9oYW5kbGUtdHJhbnNsYXRpb246ICRfd2lkdGggLSAkX2hhbmRsZS13aWR0aDtcblxuLy8gICBoZWlnaHQ6ICRfaGVpZ2h0O1xuLy8gICB3aWR0aDogJF93aWR0aDtcbi8vICAgcGFkZGluZzogMDtcbi8vICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4vLyAgIGlucHV0IHtcbi8vICAgICBkaXNwbGF5OiBub25lO1xuXG4vLyAgICAgKyBkaXYge1xuLy8gICAgICAgaGVpZ2h0OiAxMDAlO1xuLy8gICAgICAgd2lkdGg6IDEwMCU7XG4vLyAgICAgICBib3JkZXItcmFkaXVzOiA5OTlweDtcbi8vICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuLy8gICAgICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYm94LXNoYWRvdywgYmFja2dyb3VuZC1jb2xvcjtcbi8vICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMnM7XG4vLyAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjJzO1xuLy8gICAgICAgYm94LXNoYWRvdzogM3B4IDNweCAycHggLTJweCB0cmFuc3BhcmVudGl6ZShibGFjaywgMC45KSxcbi8vICAgICAgICAgaW5zZXQgMnB4IDJweCAycHggMXB4IHRyYW5zcGFyZW50aXplKGJsYWNrLCAwLjkpLFxuLy8gICAgICAgICBpbnNldCAtMnB4IC0ycHggMXB4IHdoaXRlO1xuXG4vLyAgICAgICAmOjpiZWZvcmUge1xuLy8gICAgICAgICBjb250ZW50OiBcIlwiO1xuLy8gICAgICAgICBkaXNwbGF5OiBibG9jaztcbi8vICAgICAgICAgaGVpZ2h0OiBjYWxjKCN7JF9oYW5kbGUtd2lkdGh9ICsgNHB4KTtcbi8vICAgICAgICAgd2lkdGg6IGNhbGMoI3skX2hhbmRsZS13aWR0aH0gKyA0cHgpO1xuLy8gICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuLy8gICAgICAgICBib3JkZXI6IHNvbGlkIHdoaXRlIDNweDtcbi8vICAgICAgICAgYmFja2dyb3VuZDogJGJsdWU7XG4vLyAgICAgICAgIGJveC1zaGFkb3c6IDAgM3B4IDEwcHggdHJhbnNwYXJlbnRpemUoYmxhY2ssIDAuOCksXG4vLyAgICAgICAgICAgaW5zZXQgMCAtMXB4IDNweCB0cmFuc3BhcmVudGl6ZShibGFjaywgMC45KTtcbi8vICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTZweCk7XG4vLyAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzO1xuLy8gICAgICAgfVxuLy8gICAgIH1cblxuLy8gICAgICY6Y2hlY2tlZCArIGRpdiB7XG4vLyAgICAgICBiYWNrZ3JvdW5kOiAkYmx1ZTtcbi8vICAgICAgIGJveC1zaGFkb3c6ICRnbG93LXNoYWRvdywgaW5zZXQgMCAycHggMnB4IDJweCB0cmFuc3BhcmVudGl6ZShibGFjaywgMC43KSxcbi8vICAgICAgICAgaW5zZXQgMCAwIHRyYW5zcGFyZW50O1xuXG4vLyAgICAgICAmOjpiZWZvcmUge1xuLy8gICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgkX2hhbmRsZS10cmFuc2xhdGlvbiwgLTZweCk7XG4vLyAgICAgICB9XG4vLyAgICAgfVxuLy8gICB9XG4vLyB9XG5cbi8vIGhyIHtcbi8vICAgQGV4dGVuZCAuaW5zZXQ7XG4vLyAgIHdpZHRoOiA3MiU7XG4vLyAgIGhlaWdodDogOHB4O1xuLy8gICBmbG9hdDogcmlnaHQ7XG4vLyAgIGJvcmRlcjogMDtcbi8vIH1cblxuLy8gY29kZSxcbi8vIHByZSB7XG4vLyAgIHBhZGRpbmc6IDAuNWVtIDFlbTtcbi8vICAgYm9yZGVyLXJhZGl1czogNHB4O1xuLy8gICBvdmVyZmxvdzogYXV0bztcbi8vICAgYm94LXNoYWRvdzogMCA1cHggMzBweCAwIHRyYW5zcGFyZW50aXplKGJsYWNrLCAwLjk1KTtcbi8vIH1cblxuLy8gY29kZSB7XG4vLyAgIGJhY2tncm91bmQ6ICNlNmU2ZTY7XG4vLyB9XG5cbi8vIHByZSB7XG4vLyAgIGJhY2tncm91bmQ6IHdoaXRlO1xuLy8gICBtYXJnaW46IDRlbSAwO1xuLy8gfVxuXG4vLyBjb2RlLFxuLy8gcHJlIHtcbi8vICAgJixcbi8vICAgJiAqIHtcbi8vICAgICBmb250LXNpemU6IDAuOXJlbTtcbi8vICAgICBsaW5lLWhlaWdodDogMmVtO1xuLy8gICAgIGN1cnNvcjogYXV0bztcbi8vICAgICB1c2VyLXNlbGVjdDogdGV4dDtcbi8vICAgICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IHRleHQ7XG4vLyAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogdGV4dDtcbi8vICAgICAta2h0bWwtdXNlci1zZWxlY3Q6IHRleHQ7XG4vLyAgICAgLW1vei11c2VyLXNlbGVjdDogdGV4dDtcbi8vICAgICAtbXMtdXNlci1zZWxlY3Q6IHRleHQ7XG4vLyAgIH1cbi8vIH1cblxuLy8gYmxvY2txdW90ZSB7XG4vLyAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuLy8gICBwYWRkaW5nOiAwLjVlbSAxZW07XG4vLyAgIGJvcmRlci1yYWRpdXM6IDRweDtcbi8vICAgYm94LXNoYWRvdzogMCA1cHggMzBweCAwIHRyYW5zcGFyZW50aXplKGJsYWNrLCAwLjk1KTtcbi8vICAgYm9yZGVyLWxlZnQ6IDZweCBzb2xpZCAkYmx1ZTtcbi8vIH1cbiIsIkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnQ2F2ZWF0JztcbiAgICBzcmM6IHVybCgnLi4vLi4vZm9udHMvQm9sZC9DYXZlYXQtQm9sZC53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcbiAgICAgICAgdXJsKCcuLi8uLi9mb250cy9Cb2xkL0NhdmVhdC1Cb2xkLndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC1kaXNwbGF5OiBzd2FwO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ0NhdmVhdCc7XG4gICAgc3JjOiB1cmwoJy4uLy4uL2ZvbnRzL1JlZ3VsYXIvQ2F2ZWF0LVJlZ3VsYXIud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXG4gICAgICAgIHVybCgnLi4vLi4vZm9udHMvUmVndWxhci9DYXZlYXQtUmVndWxhci53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC1kaXNwbGF5OiBzd2FwO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdGaWd1cmluZVN5bWJvbFQxJztcbiAgc3JjOiB1cmwoJy4uLy4uL2ZvbnRzLzNyZCBQYXJ0eS9DaGVzc1ZhcmlhbnRzL0ZpZ3VyaW5lU3ltYm9sVDFCb2xkLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxuICAgICAgdXJsKCcuLi8uLi9mb250cy8zcmQgUGFydHkvQ2hlc3NWYXJpYW50cy9GaWd1cmluZVN5bWJvbFQxQm9sZC53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnRmlndXJpbmVTeW1ib2xUMSc7XG4gIHNyYzogdXJsKCcuLi8uLi9mb250cy8zcmQgUGFydHkvQ2hlc3NWYXJpYW50cy9GaWd1cmluZVN5bWJvbFQxLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxuICAgICAgdXJsKCcuLi8uLi9mb250cy8zcmQgUGFydHkvQ2hlc3NWYXJpYW50cy9GaWd1cmluZVN5bWJvbFQxLndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ1NhbmN0dWFyeVBsYXlncm91bmQnO1xuICBzcmM6IHVybCgnLi4vLi4vZm9udHMvM3JkIFBhcnR5L1NhbmN0dWFyeVBsYXlncm91bmQud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXG4gICAgICB1cmwoJy4uLy4uL2ZvbnRzLzNyZCBQYXJ0eS9TYW5jdHVhcnlQbGF5Z3JvdW5kLndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG59XG5cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnQW1pdGEnO1xuICBzcmM6IHVybCgnLi4vLi4vZm9udHMvM3JkIFBhcnR5L0FtaXRhL0FtaXRhLVJlZ3VsYXIud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXG4gICAgICB1cmwoJy4uLy4uL2ZvbnRzLzNyZCBQYXJ0eS9BbWl0YS9BbWl0YS1SZWd1bGFyLndvZmYyJykgZm9ybWF0KCd3b2ZmJyk7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xufSIsIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJDYXZlYXRcIjtcbiAgc3JjOiB1cmwoXCIuLi8uLi9mb250cy9Cb2xkL0NhdmVhdC1Cb2xkLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpLCB1cmwoXCIuLi8uLi9mb250cy9Cb2xkL0NhdmVhdC1Cb2xkLndvZmZcIikgZm9ybWF0KFwid29mZlwiKTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkNhdmVhdFwiO1xuICBzcmM6IHVybChcIi4uLy4uL2ZvbnRzL1JlZ3VsYXIvQ2F2ZWF0LVJlZ3VsYXIud29mZjJcIikgZm9ybWF0KFwid29mZjJcIiksIHVybChcIi4uLy4uL2ZvbnRzL1JlZ3VsYXIvQ2F2ZWF0LVJlZ3VsYXIud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJGaWd1cmluZVN5bWJvbFQxXCI7XG4gIHNyYzogdXJsKFwiLi4vLi4vZm9udHMvM3JkIFBhcnR5L0NoZXNzVmFyaWFudHMvRmlndXJpbmVTeW1ib2xUMUJvbGQud29mZjJcIikgZm9ybWF0KFwid29mZjJcIiksIHVybChcIi4uLy4uL2ZvbnRzLzNyZCBQYXJ0eS9DaGVzc1ZhcmlhbnRzL0ZpZ3VyaW5lU3ltYm9sVDFCb2xkLndvZmZcIikgZm9ybWF0KFwid29mZlwiKTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkZpZ3VyaW5lU3ltYm9sVDFcIjtcbiAgc3JjOiB1cmwoXCIuLi8uLi9mb250cy8zcmQgUGFydHkvQ2hlc3NWYXJpYW50cy9GaWd1cmluZVN5bWJvbFQxLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpLCB1cmwoXCIuLi8uLi9mb250cy8zcmQgUGFydHkvQ2hlc3NWYXJpYW50cy9GaWd1cmluZVN5bWJvbFQxLndvZmZcIikgZm9ybWF0KFwid29mZlwiKTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiU2FuY3R1YXJ5UGxheWdyb3VuZFwiO1xuICBzcmM6IHVybChcIi4uLy4uL2ZvbnRzLzNyZCBQYXJ0eS9TYW5jdHVhcnlQbGF5Z3JvdW5kLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpLCB1cmwoXCIuLi8uLi9mb250cy8zcmQgUGFydHkvU2FuY3R1YXJ5UGxheWdyb3VuZC53b2ZmXCIpIGZvcm1hdChcIndvZmZcIik7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkFtaXRhXCI7XG4gIHNyYzogdXJsKFwiLi4vLi4vZm9udHMvM3JkIFBhcnR5L0FtaXRhL0FtaXRhLVJlZ3VsYXIud29mZjJcIikgZm9ybWF0KFwid29mZjJcIiksIHVybChcIi4uLy4uL2ZvbnRzLzNyZCBQYXJ0eS9BbWl0YS9BbWl0YS1SZWd1bGFyLndvZmYyXCIpIGZvcm1hdChcIndvZmZcIik7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xufVxuLyoqKioqKioqKioqKioqKioqKiogTWVudSAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqKioqKiogTWVudSBDb250cm9scyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIENvbnRhaW5lciBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBDb250YWluZXIgVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgQ29udGFpbmVyIFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIEhpZ2hsaWdodCBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBBbm5vdGF0aW9uIFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIFZhcmlhdGlvbiBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBQbHkgVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqKiBDb250cm9sIENvbG9ycyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKiogQm9hcmQgQ29sb3JzICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqKiBGb250IFNpemVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbjpyb290IHtcbiAgLS1iZy1jb2xvcjogI2YyZjNmNztcbiAgLS1mZy1jb2xvcjogIzM4M2E0MTtcbiAgLS1yZWQ6ICNlNDMwMzA7XG4gIC0tZ3JlZW46ICMxOWExODc7XG4gIC0tYmx1ZTogIzM2N2JmMDtcbiAgLS1kYXJrLWJsdWU6ICMyNjVhYjE7XG4gIC0tbWFyb29uOiAjYjgxNzRjO1xuICAtLXB1cnBsZTogIzhjNDJhYjtcbn1cblxuc2NvcmUtZmxvdyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbnNjb3JlLXRhYmxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xuICB3aWR0aDogMTAwJTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GamescoreUxComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'olga-score',
                templateUrl: './olga-score.html',
                styleUrls: ['./olga-score.scss'],
            }]
    }], function () { return [{ type: _services_olga_service__WEBPACK_IMPORTED_MODULE_2__["OlgaService"] }, { type: _services_layout_service__WEBPACK_IMPORTED_MODULE_6__["LayoutService"] }]; }, { flowScore: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_score_flow_score_flow_component__WEBPACK_IMPORTED_MODULE_3__["ScoreFlowComponent"]]
        }], tableScore: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_score_table_score_table_component__WEBPACK_IMPORTED_MODULE_5__["ScoreTableComponent"]]
        }], _items: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], currentData: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], currentIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], currentItem: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/olga-score/score-flow/flow-item/flow-item.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/olga-score/score-flow/flow-item/flow-item.component.ts ***!
  \************************************************************************/
/*! exports provided: FlowItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlowItemComponent", function() { return FlowItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _common_kokopu_engine__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/kokopu-engine */ "./src/app/common/kokopu-engine.ts");
/* harmony import */ var _services_olga_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/olga.service */ "./src/app/services/olga.service.ts");
/* harmony import */ var _services_themes_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/themes.service */ "./src/app/services/themes.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






const _c0 = ["gsiPly"];
function FlowItemComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("contextmenu", function FlowItemComponent_div_5_Template_div_contextmenu_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.olga.openVariation(ctx_r4.data); })("click", function FlowItemComponent_div_5_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.clickMove(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("gsi-move ", ctx_r2.typeName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.score, "");
} }
function FlowItemComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FlowItemComponent_div_6_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.clickMove(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("gsi-comment ", ctx_r3.typeName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.data.move.comment(), "");
} }
// @ts-ignore
class FlowItemComponent {
    constructor(olga, themes) {
        // use data to actually set type
        this.olga = olga;
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
                    showing = this.olga.showingPly.value;
                }
                else {
                    showing = this.olga.showingHalfPly.value;
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
                showing = this.olga.showingPly.value;
            }
            else {
                showing = this.olga.showingHalfPly.value;
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
        if (this.data.move) {
            const variations = this.data.move.variations();
            if (variations.length > 0) {
                this.olga.displayVariations(this.data);
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
FlowItemComponent.ɵfac = function FlowItemComponent_Factory(t) { return new (t || FlowItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_olga_service__WEBPACK_IMPORTED_MODULE_2__["OlgaService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_themes_service__WEBPACK_IMPORTED_MODULE_3__["ThemeService"])); };
FlowItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FlowItemComponent, selectors: [["flow-item"]], viewQuery: function FlowItemComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.gsiPly = _t.first);
    } }, inputs: { data: "data" }, outputs: { typeName: "typeName", ply: "ply", score: "score" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 7, vars: 9, consts: [["domElement", ""], [3, "contextmenu", "click"], ["gsiPly", ""], [3, "class", "contextmenu", "click", 4, "ngIf"], [3, "class", "click", 4, "ngIf"], [3, "click"]], template: function FlowItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", null, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("contextmenu", function FlowItemComponent_Template_div_contextmenu_2_listener() { return ctx.olga.openVariation(ctx.data); })("click", function FlowItemComponent_Template_div_click_2_listener() { return ctx.clickMove(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, FlowItemComponent_div_5_Template, 2, 4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, FlowItemComponent_div_6_Template, 2, 4, "div", 4);
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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: ["@font-face {\n  font-family: \"Caveat\";\n  src: url('Caveat-Bold.woff2') format(\"woff2\"), url('Caveat-Bold.woff') format(\"woff\");\n  font-weight: bold;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"Caveat\";\n  src: url('Caveat-Regular.woff2') format(\"woff2\"), url('Caveat-Regular.woff') format(\"woff\");\n  font-weight: 600;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"FigurineSymbolT1\";\n  src: url('FigurineSymbolT1Bold.woff2') format(\"woff2\"), url('FigurineSymbolT1Bold.woff') format(\"woff\");\n  font-weight: bold;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"FigurineSymbolT1\";\n  src: url('FigurineSymbolT1.woff2') format(\"woff2\"), url('FigurineSymbolT1.woff') format(\"woff\");\n  font-weight: 600;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"SanctuaryPlayground\";\n  src: url('SanctuaryPlayground.woff2') format(\"woff2\"), url('SanctuaryPlayground.woff') format(\"woff\");\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"Amita\";\n  src: url('Amita-Regular.woff2') format(\"woff2\"), url('Amita-Regular.woff2') format(\"woff\");\n  font-style: normal;\n  font-display: swap;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n[_ngcontent-%COMP%]:root {\n  --bg-color: #f2f3f7;\n  --fg-color: #383a41;\n  --red: #e43030;\n  --green: #19a187;\n  --blue: #367bf0;\n  --dark-blue: #265ab1;\n  --maroon: #b8174c;\n  --purple: #8c42ab;\n}\n.gsi-container[_ngcontent-%COMP%] {\n  display: inline-flex;\n  line-height: var(--gsFontSize);\n  margin: 2px;\n  padding-left: 2px;\n}\n.gsi-move[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  color: var(--gsTextColor);\n  font-size: var(--gsFontSize);\n  font-family: var(--gsFontFamily);\n  background: var(--gsBackground);\n}\n.gsi-ply[_ngcontent-%COMP%] {\n  color: var(--gsTextColor);\n  font-weight: bold;\n  font-size: var(--gsFontSizePC);\n  background: var(--gsBackgroundPC);\n}\n.gsi-comment[_ngcontent-%COMP%] {\n  color: var(--gsTextColorAN);\n  margin-left: 4px;\n  font-size: var(--gsFontSizeAN);\n  background: var(--gsBackgroundAN);\n}\n.Current[_ngcontent-%COMP%] {\n  background: var(--gsBackgroundHG);\n  color: var(--gsTextColorHG);\n  border: var(--gsBorderHG);\n  font-size: var(--gsFontSizeHG);\n  line-height: var(--gsFontSizeHG);\n}\n.Current.gsi-comment[_ngcontent-%COMP%] {\n  color: var(--gsAnnotationColorHG);\n}\n.Current.gsi-ply[_ngcontent-%COMP%] {\n  color: #00d4fa;\n}\n.Current.Variation.gsi-container[_ngcontent-%COMP%] {\n  border: #00d4fa 2px dashed;\n}\n.Current.Branched.gsi-container[_ngcontent-%COMP%] {\n  border: #00d4fa 2px dashed;\n}\n.Current.Branched.Variation.gsi-container[_ngcontent-%COMP%] {\n  border: #00d4fa 2px dashed;\n}\n.Branched.Variation.gsi-container[_ngcontent-%COMP%] {\n  border: 2px lightcoral dashed;\n}\n.Branched.gsi-container[_ngcontent-%COMP%] {\n  border: 2px lightcoral dashed;\n}\n\n.Group.gsi-container[_ngcontent-%COMP%] {\n  color: var(--gsTextColor);\n}\n.Group.gsi-container-hg[_ngcontent-%COMP%] {\n  background: var(--gsBackgroundHG);\n  border: var(--gsBorderHG);\n  line-height: var(--gsFontSize);\n}\n.Group.gsi-move[_ngcontent-%COMP%] {\n  padding-left: 2px;\n  line-height: var(--gsFontSize);\n}\n.Group.gsi-ply[_ngcontent-%COMP%] {\n  background: var(--gsBackgroundPC);\n  border-radius: 2px;\n  margin-right: 2px;\n  border: var(--gsBorderAN);\n  font-size: var(--gsFontSize);\n  line-height: var(--gsFontSize);\n}\n.Group.gsi-ply-highlight[_ngcontent-%COMP%] {\n  background: var(--gsBackgroundHG);\n  color: var(--gsTextColorHG);\n  border: var(--gsBorderHG);\n  line-height: var(--gsFontSize);\n}\n\n.Annotation.gsi-container[_ngcontent-%COMP%] {\n  color: var(--gsTextColor);\n  line-height: var(--gsTextSize);\n}\n.Annotation.gsi-container-hg[_ngcontent-%COMP%] {\n  background: var(--gsBackgroundHG);\n  border: var(--gsBorderHG);\n  line-height: var(--gsTextSize);\n}\n.Annotation.gsi-move[_ngcontent-%COMP%] {\n  padding-left: 2px;\n  line-height: var(--gsTextSize);\n}\n.Annotation.gsi-ply[_ngcontent-%COMP%] {\n  background: var(--gsBackgroundAN);\n  border-radius: 2px;\n  border: var(--gsBorderAN);\n  font-size: var(--gsTextSize);\n  line-height: var(--gsTextSize);\n}\n.Annotation.gsi-ply-highlight[_ngcontent-%COMP%] {\n  background: var(--gsBackgroundHG);\n  color: var(--gsTextColorHG);\n  border: var(--gsBorderHG);\n  line-height: var(--gsTextSize);\n}\n.Annotation.gsi-comment[_ngcontent-%COMP%] {\n  padding-left: 3px;\n  padding-right: 2px;\n  margin-left: 3px;\n  margin-right: 2px;\n  line-height: var(--gsTextSize);\n}\n\n.Variation.gsi-container[_ngcontent-%COMP%] {\n  border: white dashed 2px;\n  background: var(--gsBackground);\n  color: var(--gsTextColor);\n  padding: 2px;\n}\n.Variation.gsi-move[_ngcontent-%COMP%] {\n  padding-left: 2px;\n  line-height: var(--gsTextSize);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMuc2NzcyIsInNyYy9hc3NldHMvc2Nzcy9tb2R1bGVzL19mb250cy5zY3NzIiwic3JjL2FwcC9vbGdhLXNjb3JlL3Njb3JlLWZsb3cvZmxvdy1pdGVtL2Zsb3ctaXRlbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4RUFBQTtBQ0FBO0VBQ0kscUJBQUE7RUFDQSxxRkFBQTtFQUVBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0NKO0FERUE7RUFDSSxxQkFBQTtFQUNBLDJGQUFBO0VBRUEsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDREo7QURJQTtFQUNFLCtCQUFBO0VBQ0EsdUdBQUE7RUFFQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNIRjtBRE1BO0VBQ0UsK0JBQUE7RUFDQSwrRkFBQTtFQUVBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0xGO0FEUUE7RUFDRSxrQ0FBQTtFQUNBLHFHQUFBO0VBRUEsa0JBQUE7RUFDQSxrQkFBQTtBQ1BGO0FEV0E7RUFDRSxvQkFBQTtFQUNBLDBGQUFBO0VBRUEsa0JBQUE7RUFDQSxrQkFBQTtBQ1ZGO0FGREEsK0VBQUE7QUFHQSxrRkFBQTtBQUtBLCtFQUFBO0FBVUEsK0VBQUE7QUFNQSwrRUFBQTtBQU1BLCtFQUFBO0FBTUEsZ0ZBQUE7QUFLQSwrRUFBQTtBQUtBLHlFQUFBO0FBS0EseUVBQUE7QUFJQSx1RUFBQTtBQVFBLHFFQUFBO0FBeUJBO0VBQ0UsbUJBQUE7RUFDQSxtQkFBQTtFQUVBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUUxRUY7QUE1REE7RUFDRSxvQkFBQTtFQUNBLDhCRm1HVztFRWxHWCxXQUFBO0VBQ0EsaUJBQUE7QUErREY7QUE1REE7RUFDRSxtQkFBQTtFQUNBLHlCRnFDWTtFRXBDWiw0QkYyRlc7RUUxRlgsZ0NGd0NhO0VFdkNiLCtCRm1DYTtBRTRCZjtBQTVEQTtFQUNFLHlCRjhCWTtFRTdCWixpQkFBQTtFQUNBLDhCRnVGYTtFRXRGYixpQ0ZrRWU7QUVIakI7QUE1REE7RUFDRSwyQkZtRGM7RUVsRGQsZ0JBQUE7RUFDQSw4QkY2RWE7RUU1RWIsaUNGaURlO0FFY2pCO0FBNURBO0VBQ0UsaUNGd0NlO0VFdkNmLDJCRnFDYztFRXBDZCx5QkZ1Q1c7RUV0Q1gsOEJGc0VhO0VFckViLGdDRnFFYTtBRU5mO0FBNURBO0VBQ0UsaUNGK0JvQjtBRWdDdEI7QUE1REE7RUFDRSxjQUFBO0FBK0RGO0FBNURBO0VBQ0UsMEJBQUE7QUErREY7QUE3REE7RUFDRSwwQkFBQTtBQWdFRjtBQTlEQTtFQUNFLDBCQUFBO0FBaUVGO0FBL0RBO0VBQ0UsNkJBQUE7QUFrRUY7QUFoRUE7RUFDRSw2QkFBQTtBQW1FRjtBQWhFQSxpRkFBQTtBQUNBO0VBQ0UseUJGakJZO0FFb0ZkO0FBakVBO0VBQ0UsaUNGSWU7RUVIZix5QkZJVztFRUhYLDhCRmlDVztBRW1DYjtBQWxFQTtFQUNFLGlCQUFBO0VBQ0EsOEJGNkJXO0FFd0NiO0FBbEVBO0VBQ0UsaUNGU2U7RUVSZixrQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJGSFc7RUVJWCw0QkZxQlc7RUVwQlgsOEJGb0JXO0FFaURiO0FBbEVBO0VBQ0UsaUNGZmU7RUVnQmYsMkJGbEJjO0VFbUJkLHlCRmhCVztFRWlCWCw4QkZhVztBRXdEYjtBQS9EQSxrRkFBQTtBQUNBO0VBQ0UseUJGbERZO0VFbURaLDhCRi9DVztBRWlIYjtBQWhFQTtFQUNFLGlDRjlCZTtFRStCZix5QkY5Qlc7RUUrQlgsOEJGcERXO0FFdUhiO0FBakVBO0VBQ0UsaUJBQUE7RUFDQSw4QkZ4RFc7QUU0SGI7QUFqRUE7RUFDRSxpQ0ZuQ2U7RUVvQ2Ysa0JBQUE7RUFDQSx5QkZwQ1c7RUVxQ1gsNEJGL0RXO0VFZ0VYLDhCRmhFVztBRW9JYjtBQWxFQTtFQUNFLGlDRi9DZTtFRWdEZiwyQkZsRGM7RUVtRGQseUJGaERXO0VFaURYLDhCRnRFVztBRTJJYjtBQWxFQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsOEJGOUVXO0FFbUpiO0FBakVBLGlGQUFBO0FBRUE7RUFDRSx3QkFBQTtFQUNBLCtCRnpGYTtFRTBGYix5QkYzRlk7RUU0RlosWUFBQTtBQW1FRjtBQWhFQTtFQUNFLGlCQUFBO0VBQ0EsOEJGN0ZXO0FFZ0tiIiwiZmlsZSI6InNyYy9hcHAvb2xnYS1zY29yZS9zY29yZS1mbG93L2Zsb3ctaXRlbS9mbG93LWl0ZW0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG5cbkBpbXBvcnQgXCIuL2Fzc2V0cy9zY3NzL21vZHVsZXMvX2ZvbnRzLnNjc3NcIjtcbiRnYW1lc2NvcmUtZmFtaWx5OiBcIkZpZ3VyaW5lU3ltYm9sVDFcIjtcbiRnYW1lc2NvcmUtaGlnaGxpZ2h0OiAjNTg1ODU4ZmY7XG4kZ2FtZXNjb3JlLWZvcmVncm91bmQ6IHdoaXRlO1xuXG4kcmVkOiAjZTQzMDMwO1xuJGdyZWVuOiAjMTlhMTg3O1xuJGxpZ2h0LWJsdWU6ICMwMGZmZmZmZjtcbiRibHVlOiAjMzY3YmYwO1xuJGRhcmstYmx1ZTogIzI2NWFiMTtcbiRtYXJvb246ICNiODE3NGM7XG4kcHVycGxlOiAjOGM0MmFiO1xuXG4vLyBNYWluIE9MR0EgQ29sb3IgRWxlbWVudCBWYXJpYWJsZXNcbiR0ZXh0Q29sb3I6IHZhcigtLXRleHRDb2xvcik7IC8vIE1haW4gVGV4dCBDb2xvclxuJHRleHRDb2xvckF0dGVudGlvbjogdmFyKC0tdGV4dENvbG9yQXR0ZW50aW9uKTsgLy8gQXR0ZW50aW9uIHRleHRcbiR0ZXh0Q29sb3JSZW1vdmU6IHZhcigtLXRleHRDb2xvclJlbW92ZSk7IC8vIFJlbW92ZS9EZWxldGUvQ2xvc2VcbiR0ZXh0Q29sb3JBZGQ6IHZhcigtLXRleHRDb2xvckFkZCk7IC8vIEFkZC9DcmVhdGUvT3BlblxuJHRleHRDb2xvckFjdGl2ZTogdmFyKC0tdGV4dENvbG9yQWN0aXZlKTsgLy8gQWRkL0NyZWF0ZS9PcGVuXG4kYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZCk7IC8vIE1haW4gYmFja2dyb3VuZCBDb2xvclxuJGJnQ29udGFpbmVyOiB2YXIoLS1iZ0NvbnRhaW5lcik7IC8vIGJhY2tncm91bmQgb2YgQ29udGFpbmVyc1xuJGJnTWVudTogdmFyKC0tYmdNZW51KTsgLy8gYmFja2dyb3VuZCBvZiBNZW51c1xuJGJnSXRlbTogdmFyKC0tYmdJdGVtKTsgLy8gYmFja2dyb3VuZCBvZiBJdGVtc1xuXG4vLyBDb250ZXh0IE1lbnVcbiRiZ0NvbnRleHQ6IHZhcigtLWJnQ29udGV4dCk7IC8vIGJhY2tncm91bmQgb2YgQ29udGV4dCBNZW51XG4kdGV4dENvbG9yQ29udGV4dDogdmFyKC0tdGV4dENvbG9yQ29udGV4dCk7IC8vIHRleHQgY29sb3IgQ29udGV4dCBNZW51XG4kYm9yZGVyQ29udGV4dDogdmFyKC0tYm9yZGVyQ29udGV4dCk7IC8vIGJvcmRlciBDb250ZXh0IE1lbnVcbiRvdmVybGF5Q29udGV4dEJhY2tncm91bmQ6IHZhcihcbiAgLS1vdmVybGF5Q29udGV4dEJhY2tncm91bmRcbik7IC8vIENvbnRleHQgTWVudSBPdmVybGF5IGJhY2tncm91bmQgbWFpblxuJG92ZXJsYXlDb250ZXh0QmFja2dyb3VuZEdyYWRpZW50OiB2YXIoXG4gIC0tb3ZlcmxheUNvbnRleHRCYWNrZ3JvdW5kR3JhZGllbnRcbik7IC8vIENvbnRleHQgTWVudSBiYWNrZ3JvdW5kIGdyYWRpZW50XG5cblxuXG4vKioqKioqKioqKioqKioqKioqKiBNZW51ICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuJG1lQmFja2dyb3VuZDogdmFyKC0tbWVCYWNrZ3JvdW5kKTtcblxuLyoqKioqKioqKioqKioqKioqKioqKioqKiBNZW51IENvbnRyb2xzICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiRjc0ZpbGw6IHZhcigtLWNzRmlsbCk7XG4kY3NBY2NlbnQ6IHZhcigtLWNzQWNjZW50KTtcbiRjc0FjY2VudDI6IHZhcigtLWNzQWNjZW50Mik7XG5cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgQ29udGFpbmVyIFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4kZ3NUZXh0Q29sb3I6IHZhcigtLWdzVGV4dENvbG9yKTsgLy8gVGV4dCBjb2xvciBmb3IgZ2FtZSBzY29yZVxuJGdzQmFja2dyb3VuZDogdmFyKC0tZ3NCYWNrZ3JvdW5kKTsgLy8gYmFja2dyb3VuZCBvZiBDb250YWluZXJzXG4kZ3NMaXN0QmFja2dyb3VuZDogdmFyKC0tZ3NMaXN0QmFja2dyb3VuZCk7IC8vIGxpc3QgYmFja2dyb3VuZCBvZiBnYW1lIHNjb3JlXG4kZ3NCb3JkZXI6IHZhcigtLWdzQm9yZGVyKTsgLy8gYmFja2dyb3VuZCBvZiBNZW51c1xuJGdzVGV4dFNpemU6IHZhcigtLWdzVGV4dFNpemUpOyAvLyBiYWNrZ3JvdW5kIG9mIE1lbnVzXG4kZ3NGb250RmFtaWx5OiB2YXIoLS1nc0ZvbnRGYW1pbHkpOyAvLyBzY29yZSBmb250XG4kZ3NUYWJsZUl0ZW1XaWR0aDogdmFyKC0tZ3NUYWJsZUl0ZW1XaWR0aCk7IC8vIHdpZHRoIG9mIHNjb3JlIGl0ZW0gaW4gdGFibGUgbGF5b3V0XG4kZ3NUYWJsZVBseVdpZHRoOiB2YXIoLS1nc1RhYmxlUGx5V2lkdGgpOyAvLyB3aWR0aCBvZiBwbHkgZWxlbWVudCBpbiB0YWJsZSBsYXlvdXRcblxuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBDb250YWluZXIgVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiRnc1RleHRDb2xvck1XOiB2YXIoLS1nc1RleHRDb2xvck1XKTsgLy8gVGV4dCBjb2xvciBmb3IgZ2FtZSBzY29yZVxuJGdzQmFja2dyb3VuZE1XOiB2YXIoLS1nc0JhY2tncm91bmRNVyk7IC8vIGJhY2tncm91bmQgb2YgQ29udGFpbmVyc1xuJGdzQm9yZGVyTVc6IHZhcigtLWdzQm9yZGVyTVcpOyAvLyBiYWNrZ3JvdW5kIG9mIE1lbnVzXG4kZ3NUZXh0U2l6ZU1XOiB2YXIoLS1nc1RleHRTaXplTVcpOyAvLyBiYWNrZ3JvdW5kIG9mIE1lbnVzXG5cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgQ29udGFpbmVyIFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4kZ3NUZXh0Q29sb3JNQjogdmFyKC0tZ3NUZXh0Q29sb3JNQik7IC8vIFRleHQgY29sb3IgZm9yIGdhbWUgc2NvcmVcbiRnc0JhY2tncm91bmRNQjogdmFyKC0tZ3NCYWNrZ3JvdW5kTUIpOyAvLyBiYWNrZ3JvdW5kIG9mIENvbnRhaW5lcnNcbiRnc0JvcmRlck1COiB2YXIoLS1nc0JvcmRlck1CKTsgLy8gYmFja2dyb3VuZCBvZiBNZW51c1xuJGdzVGV4dFNpemVNQjogdmFyKC0tZ3NUZXh0U2l6ZU1CKTsgLy8gYmFja2dyb3VuZCBvZiBNZW51c1xuXG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIEhpZ2hsaWdodCBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuJGdzVGV4dENvbG9ySEc6IHZhcigtLWdzVGV4dENvbG9ySEcpOyAvLyBUZXh0IGNvbG9yIGZvciBoaWdobGlnaHRcbiRnc0Fubm90YXRpb25Db2xvckhHOiB2YXIoLS1nc0Fubm90YXRpb25Db2xvckhHKTsgLy8gQW5ub3RhdGlvbi9Db21tZW50IGNvbG9yIGZvciBoaWdobGlnaHRcbiRnc0JhY2tncm91bmRIRzogdmFyKC0tZ3NCYWNrZ3JvdW5kSEcpOyAvLyBiYWNrZ3JvdW5kIGZvciBoaWdobGlnaHRcbiRnc0JvcmRlckhHOiB2YXIoLS1nc0JvcmRlckhHKTsgLy8gYm9yZGVyIGZvciBoaWdobGlnaHRcblxuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBBbm5vdGF0aW9uIFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4kZ3NUZXh0Q29sb3JBTjogdmFyKC0tZ3NUZXh0Q29sb3JBTik7IC8vIFRleHQgY29sb3IgZm9yIGhpZ2hsaWdodFxuJGdzQmFja2dyb3VuZEFOOiB2YXIoLS1nc0JhY2tncm91bmRBTik7IC8vIGJhY2tncm91bmQgZm9yIGhpZ2hsaWdodFxuJGdzQm9yZGVyQU46IHZhcigtLWdzQm9yZGVyQU4pOyAvLyBib3JkZXIgZm9yIGhpZ2hsaWdodFxuXG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIFZhcmlhdGlvbiBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuJGdzVGV4dENvbG9yVkE6IHZhcigtLWdzVGV4dENvbG9yVkEpOyAvLyBUZXh0IGNvbG9yIGZvciBoaWdobGlnaHRcbiRnc0JhY2tncm91bmRWQTogdmFyKC0tZ3NCYWNrZ3JvdW5kVkEpOyAvLyBiYWNrZ3JvdW5kIGZvciBoaWdobGlnaHRcbiRnc0JvcmRlclZBOiB2YXIoLS1nc0JvcmRlclZBKTsgLy8gYm9yZGVyIGZvciBoaWdobGlnaHRcblxuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBQbHkgVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiRnc1RleHRDb2xvclBDOiB2YXIoLS1nc1RleHRDb2xvclBDKTsgLy8gVGV4dCBjb2xvciBmb3IgZ2FtZSBzY29yZSBwbHlcbiRnc0JhY2tncm91bmRQQzogdmFyKC0tZ3NCYWNrZ3JvdW5kUEMpOyAvLyBiYWNrZ3JvdW5kIGZvciBnYW1lIHNjb3JlIHBseVxuJGdzQm9yZGVyUEM6IHZhcigtLWdzQm9yZGVyUEMpOyAvLyBib3JkZXIgZm9yIGdhbWUgc2NvcmUgcGx5XG5cbi8qKioqKioqKioqKioqKioqKioqKiBDb250cm9sIENvbG9ycyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4kY3NCYWNrZ3JvdW5kOiB2YXIoLS1jc0JhY2tncm91bmQpOyAvLyBiYWNrZ3JvdW5kIGZvciBjb250cm9sc1xuJGNzQ29sb3I6IHZhcigtLWNzQ29sb3IpOyAvLyBjb250cm9scyBjb2xvciAoZm9yZWdyb3VuZClcblxuLyoqKioqKioqKioqKioqKioqKioqIEJvYXJkIENvbG9ycyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4kYm9hcmRCR0Rhcms6IHZhcigtLWJvYXJkQkdEYXJrKTsgLy8gYm9hcmQgZGFyayB0aWxlXG4kYm9hcmRCR0xpZ2h0OiB2YXIoLS1ib2FyZEJHTGlnaHQpOyAvLyBib2FyZCBsaWdodCB0aWxlXG4kYm9hcmRMYWJlbExpZ2h0OiB2YXIoLS1ib2FyZExhYmVsTGlnaHQpOyAvLyBib2FyZCBsaWdodCBsYWJlbFxuJGJvYXJkTGFiZWxEYXJrOiB2YXIoLS1ib2FyZExhYmVsRGFyayk7IC8vIGJvYXJkIGRhcmsgbGFiZWxcblxuXG5cbi8qKioqKioqKioqKioqKioqKioqKiBGb250IFNpemVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiRnc0ZvbnRTaXplOiB2YXIoLS1nc0ZvbnRTaXplKTsgLy8gYm9hcmQgZGFyayB0aWxlXG4kZ3NGb250U2l6ZUFOOiB2YXIoLS1nc0ZvbnRTaXplQU4pOyAvLyBib2FyZCBsaWdodCB0aWxlXG4kZ3NGb250U2l6ZUhHOiB2YXIoLS1nc0ZvbnRTaXplSEcpOyAvLyBib2FyZCBsaWdodCBsYWJlbFxuJGdzRm9udFNpemVWQTogdmFyKC0tZ3NGb250U2l6ZVZBKTsgLy8gYm9hcmQgZGFyayBsYWJlbFxuJGdzRm9udFNpemVQQzogdmFyKC0tZ3NGb250U2l6ZVBDKTsgLy8gYm9hcmQgZGFyayBsYWJlbFxuJGhkckRhdGFGb250U2l6ZTogdmFyKC0taGRyRGF0YUZvbnRTaXplKTsgLy8gc2l6ZSBvZiBwbGF5ZXIgc2hvd2Nhc2UgZGF0YVxuJGhkck5hbWVGb250U2l6ZTogdmFyKC0taGRyTmFtZUZvbnRTaXplKTsgLy8gc2l6ZSBvZiBwbGF5ZXIgc2hvd2Nhc2UgTmFtZVxuJGhkclRpdGxlRm9udFNpemU6IHZhcigtLWhkclRpdGxlRm9udFNpemUpOyAvLyBzaXplIG9mIHBsYXllciBzaG93Y2FzZSBkYXRhXG4kaGRyVmFyaWFudEZvbnRTaXplOiB2YXIoLS1oZHJWYXJpYW50Rm9udFNpemUpOyAvLyBzaXplIG9mIHBsYXllciBzaG93Y2FzZSBOYW1lXG4kaGRyTWF0Y2hEYXRhRm9udFNpemU6IHZhcigtLWhkck1hdGNoRGF0YUZvbnRTaXplKTsgLy8gc2l6ZSBvZiBwbGF5ZXIgc2hvd2Nhc2UgTmFtZVxuJGhkck9wZW5pbmdGb250U2l6ZTogdmFyKC0taGRyTWF0Y2hEYXRhRm9udFNpemUpOyAvLyBzaXplIG9mIHBsYXllciBzaG93Y2FzZSBOYW1lXG4kaGRyUmVzdWx0Rm9udFNpemU6IHZhcigtLWhkclJlc3VsdEZvbnRTaXplKTsgLy8gc2l6ZSBvZiBwbGF5ZXIgc2hvd2Nhc2UgTmFtZVxuJGhkclJvdW5kRm9udFNpemU6IHZhcigtLWhkclJvdW5kRm9udFNpemUpOyAvLyBzaXplIG9mIHBsYXllciBzaG93Y2FzZSBOYW1lXG5cbi8vIEdlbmVyYWwgc3R1ZmZcbiR0ZXh0LWNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcbiRiZy1vdXRlcjogdmFyKC0tYmctb3V0ZXIpO1xuJGJnLWlubmVyOiB2YXIoLS1iZy1pbm5lcik7XG5cbiRiZy1jb2xvcjogI2YyZjNmNztcbiRmZy1jb2xvcjogIzM4M2E0MTtcblxuJGdsb3ctc2hhZG93OiAwIDAgMC41ZW0gdHJhbnNwYXJlbnRpemUoJGJsdWUsIDAuMyk7XG5cbjpyb290IHtcbiAgLS1iZy1jb2xvcjogI3skYmctY29sb3J9O1xuICAtLWZnLWNvbG9yOiAjeyRmZy1jb2xvcn07XG5cbiAgLS1yZWQ6ICN7JHJlZH07XG4gIC0tZ3JlZW46ICN7JGdyZWVufTtcbiAgLS1ibHVlOiAjeyRibHVlfTtcbiAgLS1kYXJrLWJsdWU6ICN7JGRhcmstYmx1ZX07XG4gIC0tbWFyb29uOiAjeyRtYXJvb259O1xuICAtLXB1cnBsZTogI3skcHVycGxlfTtcbn1cblxuLy8gOjotbW96LWZvY3VzLWlubmVyLFxuLy8gOi1tb3otZm9jdXNyaW5nIHtcbi8vICAgYm9yZGVyOiAwO1xuLy8gICBjb2xvcjogdHJhbnNwYXJlbnQ7XG4vLyAgIHRleHQtc2hhZG93OiAwIDAgMCAkZmctY29sb3I7XG4vLyB9XG5cbi8vIDo6c2VsZWN0aW9uLFxuLy8gOjotbW96LXNlbGVjdGlvbiB7XG4vLyAgIGNvbG9yOiB3aGl0ZTtcbi8vICAgYmFja2dyb3VuZDogYmxhY2s7XG4vLyB9XG5cbi8vICoge1xuLy8gICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuLy8gICBvdXRsaW5lOiBub25lO1xuLy8gICB1c2VyLXNlbGVjdDogbm9uZTtcbi8vICAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xuLy8gICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuLy8gICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7XG4vLyAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4vLyAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbi8vICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuLy8gICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4vLyAgIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKSAhaW1wb3J0YW50O1xuLy8gICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XG4vLyAgIGN1cnNvcjogZGVmYXVsdDtcbi8vICAgbGV0dGVyLXNwYWNpbmc6IDA7XG4vLyB9XG5cbi8vIC5zZWxlY3RhYmxlLFxuLy8gLnNlbGVjdGFibGUgKiB7XG4vLyAgIGN1cnNvcjogYXV0bztcbi8vICAgdXNlci1zZWxlY3Q6IHRleHQ7XG4vLyAgIC13ZWJraXQtdG91Y2gtY2FsbG91dDogdGV4dDtcbi8vICAgLXdlYmtpdC11c2VyLXNlbGVjdDogdGV4dDtcbi8vICAgLWtodG1sLXVzZXItc2VsZWN0OiB0ZXh0O1xuLy8gICAtbW96LXVzZXItc2VsZWN0OiB0ZXh0O1xuLy8gICAtbXMtdXNlci1zZWxlY3Q6IHRleHQ7XG4vLyB9XG5cbi8vIGh0bWwsXG4vLyBib2R5IHtcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogJGJnLWNvbG9yO1xuLy8gICBjb2xvcjogJGZnLWNvbG9yO1xuLy8gICBtYXJnaW46IDA7XG4vLyAgIHBhZGRpbmc6IDA7XG4vLyAgIGZvbnQtc2l6ZTogMTBwdDtcbi8vICAgaGVpZ2h0OiAxMDAlO1xuLy8gICBvdmVyZmxvdzogYXV0bztcbi8vIH1cblxuLy8gLndpdGgtc2hhZG93IHtcbi8vICAgYm94LXNoYWRvdzogNnB4IDZweCAxMHB4IHRyYW5zcGFyZW50aXplKGJsYWNrLCAwLjkpLCAtNnB4IC02cHggMTBweCB3aGl0ZTtcbi8vIH1cblxuLy8gLm91dHNldCB7XG4vLyAgIEBleHRlbmQgLndpdGgtc2hhZG93O1xuXG4vLyAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4vLyAgIGJhY2tncm91bmQ6ICRiZy1jb2xvcjtcbi8vIH1cblxuLy8gLmluc2V0IHtcbi8vICAgYm9yZGVyLXJhZGl1czogMTBweDtcbi8vICAgYm94LXNoYWRvdzogMCAwIHRyYW5zcGFyZW50LCAwIDAgdHJhbnNwYXJlbnQsXG4vLyAgICAgaW5zZXQgM3B4IDNweCA1cHggdHJhbnNwYXJlbnRpemUoYmxhY2ssIDAuOSksIGluc2V0IC0zcHggLTNweCA1cHggd2hpdGU7XG4vLyAgIGJhY2tncm91bmQ6IGxpZ2h0ZW4oJGJnLWNvbG9yLCAyJSk7XG4vLyB9XG5cbi8vIC5wYXBlciB7XG4vLyAgIEBleHRlbmQgLm91dHNldDtcbi8vICAgcGFkZGluZzogMTBweCAyMHB4IDIwcHg7XG4vLyAgIG1hcmdpbi10b3A6IDIwcHg7XG4vLyAgIG1pbi1oZWlnaHQ6IDEwMHB4O1xuLy8gICBmb250LXNpemU6IDEuMmVtO1xuLy8gICBiYWNrZ3JvdW5kOiAkYmctY29sb3I7XG4vLyB9XG5cbi8vIHNlY3Rpb24sXG4vLyBhcnRpY2xlLFxuLy8gLnNlY3Rpb24sXG4vLyAuYXJ0aWNsZSxcbi8vIC5wYXBlciB7XG4vLyAgIGxpbmUtaGVpZ2h0OiAyZW07XG4vLyAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbi8vICAgd29yZC1icmVhazogbm9ybWFsO1xuLy8gICBsaW5lLWhlaWdodDogMmVtO1xuLy8gfVxuXG4vLyBpbnB1dFt0eXBlPVwidGV4dFwiXSxcbi8vIGlucHV0W3R5cGU9XCJzZWFyY2hcIl0sXG4vLyBpbnB1dFt0eXBlPVwidGVsXCJdLFxuLy8gaW5wdXRbdHlwZT1cInVybFwiXSxcbi8vIGlucHV0W3R5cGU9XCJlbWFpbFwiXSxcbi8vIGlucHV0W3R5cGU9XCJwYXNzd29yZFwiXSxcbi8vIGlucHV0W3R5cGU9XCJkYXRlXCJdLFxuLy8gaW5wdXRbdHlwZT1cIm1vbnRoXCJdLFxuLy8gaW5wdXRbdHlwZT1cIndlZWtcIl0sXG4vLyBpbnB1dFt0eXBlPVwidGltZVwiXSxcbi8vIGlucHV0W3R5cGU9XCJudW1iZXJcIl0sXG4vLyBpbnB1dFt0eXBlPVwiY29sb3JcIl0sXG4vLyBzZWxlY3QsXG4vLyB0ZXh0YXJlYSB7XG4vLyAgIGJvcmRlcjogMDtcbi8vICAgYmFja2dyb3VuZDogJGJnLWNvbG9yO1xuLy8gICBjb2xvcjogJGZnLWNvbG9yO1xuLy8gICBmb250LXdlaWdodDogbm9ybWFsO1xuLy8gICBwYWRkaW5nOiAwIDEuMjVlbTtcbi8vICAgbGluZS1oZWlnaHQ6IDEuMjVlbTtcbi8vICAgaGVpZ2h0OiAzLjVlbTtcbi8vICAgbWFyZ2luOiAxMHB4IDA7XG4vLyAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuLy8gICBjdXJzb3I6IHRleHQ7XG4vLyAgIHVzZXItc2VsZWN0OiB0ZXh0O1xuLy8gICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IHRleHQ7XG4vLyAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IHRleHQ7XG4vLyAgIC1raHRtbC11c2VyLXNlbGVjdDogdGV4dDtcbi8vICAgLW1vei11c2VyLXNlbGVjdDogdGV4dDtcbi8vICAgLW1zLXVzZXItc2VsZWN0OiB0ZXh0O1xuLy8gICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuMnM7XG5cbi8vICAgJjpub3Qoc2VsZWN0KSB7XG4vLyAgICAgQGV4dGVuZCAuaW5zZXQ7XG5cbi8vICAgICAmOmZvY3VzIHtcbi8vICAgICAgIEBleHRlbmQgLm91dHNldDtcbi8vICAgICB9XG4vLyAgIH1cbi8vIH1cblxuLy8gdGV4dGFyZWEge1xuLy8gICBoZWlnaHQ6IDM1MHB4O1xuLy8gICBwYWRkaW5nOiAxLjI1ZW07XG4vLyB9XG5cbi8vIHNlbGVjdCB7XG4vLyAgIEBleHRlbmQgLm91dHNldDtcblxuLy8gICBjdXJzb3I6IHBvaW50ZXI7XG4vLyAgIGJhY2tncm91bmQ6IHVybChkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUIyWlhKemFXOXVQU0l4TGpFaUlIWnBaWGRDYjNnOUlqQWdNQ0F4T1NBeE9TSWdlRzFzYm5NOUltaDBkSEE2THk5M2QzY3Vkek11YjNKbkx6SXdNREF2YzNabklqNDhaeUIwY21GdWMyWnZjbTA5SW0xaGRISnBlQ2d1TURNMElEQWdNQ0F1TURNMElDMDJMamdnTVM0M1pTMDFLU0lnYzNSNWJHVTlJbVpwYkd3Nkl6ZGlOMlU0WXlJK1BIQmhkR2dnWkQwaWJUUTRNQ0F6TkRRdE1qRXhMVEl4TW1NdE1UWXRNVFl0TkRFdE1UWXROVGNnTUMweE5pQXhOaTB4TmlBME1pQXdJRFUzYkRJek9DQXlNemxqT0M0MElEZ3VOU0F5TUNBeE1pQXpNU0F4TWlBeE1TQXdMalUySURJeUxUTXVNaUF6TVMweE1td3lNemd0TWpNNVl6RTJMVEUySURFMkxUUXlJREF0TlRkekxUUXhMVEUyTFRVM0lEQjZJaUJ6ZEhsc1pUMGlabWxzYkRvak4ySTNaVGhqSWk4K1BDOW5Qand2YzNablBnbz0pXG4vLyAgICAgbm8tcmVwZWF0IHJpZ2h0IDFlbSBjZW50ZXI7XG4vLyAgIGJhY2tncm91bmQtc2l6ZTogMS4yZW07XG4vLyAgIHBhZGRpbmctcmlnaHQ6IDNlbTtcbi8vIH1cblxuLy8gaW5wdXQ6OnBsYWNlaG9sZGVyLFxuLy8gdGV4dGFyZWE6OnBsYWNlaG9sZGVyIHtcbi8vICAgb3BhY2l0eTogMTtcbi8vICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzO1xuLy8gICBjb2xvcjogaW5oZXJpdDtcbi8vIH1cblxuLy8gaW5wdXQ6Zm9jdXM6OnBsYWNlaG9sZGVyLFxuLy8gdGV4dGFyZWE6Zm9jdXM6OnBsYWNlaG9sZGVyIHtcbi8vICAgb3BhY2l0eTogMC4yO1xuLy8gfVxuXG4vLyBpbnB1dDotbXMtaW5wdXQtcGxhY2Vob2xkZXIsXG4vLyB0ZXh0YXJlYTotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuLy8gICBvcGFjaXR5OiAxO1xuLy8gICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnM7XG4vLyAgIGNvbG9yOiBpbmhlcml0O1xuLy8gfVxuXG4vLyBpbnB1dDpmb2N1czotbXMtaW5wdXQtcGxhY2Vob2xkZXIsXG4vLyB0ZXh0YXJlYTpmb2N1czotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuLy8gICBvcGFjaXR5OiAwLjI7XG4vLyB9XG5cbi8vIGlucHV0W3R5cGU9XCJzZWFyY2hcIl06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24sXG4vLyBpbnB1dFt0eXBlPVwic2VhcmNoXCJdOjotd2Via2l0LXNlYXJjaC1jYW5jZWwtYnV0dG9uLFxuLy8gaW5wdXRbdHlwZT1cInNlYXJjaFwiXTo6LXdlYmtpdC1zZWFyY2gtcmVzdWx0cy1idXR0b24sXG4vLyBpbnB1dFt0eXBlPVwic2VhcmNoXCJdOjotd2Via2l0LXNlYXJjaC1yZXN1bHRzLWRlY29yYXRpb24ge1xuLy8gICBkaXNwbGF5OiBub25lO1xuLy8gfVxuXG4vLyBidXR0b24sXG4vLyBpbnB1dFt0eXBlPVwiYnV0dG9uXCJdLFxuLy8gaW5wdXRbdHlwZT1cInN1Ym1pdFwiXSxcbi8vIGlucHV0W3R5cGU9XCJyZXNldFwiXSB7XG4vLyAgIEBleHRlbmQgLm91dHNldDtcblxuLy8gICBib3JkZXI6IDA7XG4vLyAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuLy8gICBwYWRkaW5nOiAxMHB4IDA7XG4vLyAgIHdpZHRoOiA4ZW07XG4vLyAgIHRleHQtYWxpZ246IGNlbnRlcjtcbi8vICAgY3Vyc29yOiBwb2ludGVyO1xuLy8gICBjb2xvcjogaW5oZXJpdDtcbi8vICAgZm9udC1zaXplOiAxLjFyZW07XG4vLyAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGJhY2tncm91bmQtY29sb3IsIGJveC1zaGFkb3c7XG4vLyAgIHRyYW5zaXRpb24tZGVsYXk6IDAuMnM7XG4vLyAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMnM7XG5cbi8vICAgJi5hY3RpdmUsXG4vLyAgICY6YWN0aXZlIHtcbi8vICAgICBAZXh0ZW5kIC5pbnNldDtcblxuLy8gICAgIHRyYW5zaXRpb24tZGVsYXk6IDBzO1xuLy8gICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMXM7XG4vLyAgIH1cblxuLy8gICBAZWFjaCAkbmFtZSwgJGNvbG9yIGluIChcInJlZFwiOiAkcmVkLCBcImdyZWVuXCI6ICRncmVlbiwgXCJibHVlXCI6ICRibHVlKSB7XG4vLyAgICAgQGF0LXJvb3QgLiN7JG5hbWV9LWJ1dHRvbixcbi8vICAgICAgICYuI3skbmFtZX0tYnV0dG9uIHtcbi8vICAgICAgIEBleHRlbmQgYnV0dG9uO1xuXG4vLyAgICAgICAkX2JnLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAkY29sb3IgMzAlLCBsaWdodGVuKCRjb2xvciwgNiUpIDgwJSk7XG5cbi8vICAgICAgIGNvbG9yOiB3aGl0ZTtcbi8vICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuLy8gICAgICAgdGV4dC1zaGFkb3c6IDAgMC4xZW0gMC4xZW0gdHJhbnNwYXJlbnRpemUoYmxhY2ssIDAuMyk7XG4vLyAgICAgICBiYWNrZ3JvdW5kOiAkX2JnLWltYWdlO1xuLy8gICAgICAgYm94LXNoYWRvdzogMCAwIDAuNWVtIHRyYW5zcGFyZW50aXplKCRjb2xvciwgMC4zKSwgMCAwIHRyYW5zcGFyZW50LFxuLy8gICAgICAgICBpbnNldCAwIC01cHggMCB0cmFuc3BhcmVudGl6ZShibGFjaywgMC45NSksXG4vLyAgICAgICAgIGluc2V0IDAgMnB4IDAgdHJhbnNwYXJlbnRpemUod2hpdGUsIDAuOCk7XG4vLyAgICAgICBib3JkZXItcmFkaXVzOiA2cHggNnB4IDhweCA4cHg7XG4vLyAgICAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBib3gtc2hhZG93LCBib3JkZXItcmFkaXVzO1xuXG4vLyAgICAgICAmLmFjdGl2ZSxcbi8vICAgICAgICY6YWN0aXZlIHtcbi8vICAgICAgICAgYmFja2dyb3VuZDogJF9iZy1pbWFnZTtcbi8vICAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuLy8gICAgICAgICBib3gtc2hhZG93OiAwIDAgdHJhbnNwYXJlbnQsIDAgMCB0cmFuc3BhcmVudCxcbi8vICAgICAgICAgICBpbnNldCAwIDJweCA1cHggMnB4IHRyYW5zcGFyZW50aXplKGJsYWNrLCAwLjgpO1xuLy8gICAgICAgfVxuLy8gICAgIH1cbi8vICAgfVxuLy8gfVxuXG4vLyBsYWJlbCB7XG4vLyAgICYsXG4vLyAgICYgKiB7XG4vLyAgICAgY3Vyc29yOiBwb2ludGVyO1xuLy8gICB9XG5cbi8vICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuLy8gICBwYWRkaW5nOiAwLjU2ZW0gMDtcbi8vIH1cblxuLy8gYSB7XG4vLyAgICYsXG4vLyAgICY6bGluayxcbi8vICAgJjp2aXNpdGVkLFxuLy8gICAmOmhvdmVyICY6YWN0aXZlIHtcbi8vICAgICAmLFxuLy8gICAgICYgKiB7XG4vLyAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4vLyAgICAgfVxuXG4vLyAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4vLyAgICAgY29sb3I6ICRibHVlO1xuLy8gICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuLy8gICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbi8vICAgfVxuLy8gfVxuXG4vLyBoMSxcbi8vIGgyLFxuLy8gaDMsXG4vLyBoNCxcbi8vIGg1LFxuLy8gaDYge1xuLy8gICBsaW5lLWhlaWdodDogMS41ZW07XG4vLyB9XG5cbi8vIGgxIHtcbi8vICAgZm9udC1zaXplOiA0ZW07XG4vLyAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuLy8gICBtYXJnaW46IDAuN2VtIDA7XG4vLyB9XG5cbi8vIGgyIHtcbi8vICAgZm9udC1zaXplOiAzZW07XG4vLyAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuLy8gICBtYXJnaW46IDAuOGVtIDA7XG4vLyB9XG5cbi8vIGgzIHtcbi8vICAgZm9udC1zaXplOiAyLjVlbTtcbi8vICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4vLyAgIG1hcmdpbjogMC45ZW0gMDtcbi8vIH1cblxuLy8gaDQge1xuLy8gICBmb250LXNpemU6IDJlbTtcbi8vICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4vLyAgIG1hcmdpbjogMWVtIDA7XG4vLyB9XG5cbi8vIGg1IHtcbi8vICAgbWFyZ2luOiAwLjVlbSAwO1xuLy8gICBmb250LXNpemU6IDEuMmVtO1xuLy8gICBmb250LXdlaWdodDogbm9ybWFsO1xuLy8gfVxuXG4vLyBoNiB7XG4vLyAgIG1hcmdpbjogMWVtIDAgMWVtIDEuNGVtO1xuLy8gICBmb250LXNpemU6IDFlbTtcbi8vICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4vLyB9XG5cbi8vIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSxcbi8vIGlucHV0W3R5cGU9XCJyYWRpb1wiXSB7XG4vLyAgICRfYm9yZGVyLXdpZHRoOiAwLjE1ZW07XG4vLyAgICRfYm94LXNoYWRvdzogMnB4IDJweCAzcHggdHJhbnNwYXJlbnRpemUoYmxhY2ssIDAuOCksIC0ycHggLTJweCAzcHggd2hpdGUsXG4vLyAgICAgaW5zZXQgMXB4IDFweCAycHggdHJhbnNwYXJlbnRpemUoYmxhY2ssIDAuOCksIGluc2V0IC0xcHggLTFweCAycHggd2hpdGU7XG4vLyAgIGZvbnQtc2l6ZTogMWVtO1xuLy8gICBjdXJzb3I6IHBvaW50ZXI7XG4vLyAgIGhlaWdodDogMS4yZW07XG4vLyAgIHdpZHRoOiAxLjJlbTtcbi8vICAgbWFyZ2luOiAwIDAuM2VtO1xuLy8gICBib3gtc2hhZG93OiAkX2JveC1zaGFkb3c7XG4vLyAgIGJvcmRlcjogJF9ib3JkZXItd2lkdGggc29saWQgJGJnLWNvbG9yO1xuLy8gICB2ZXJ0aWNhbC1hbGlnbjogdGV4dC1ib3R0b207XG4vLyAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGJhY2tncm91bmQsIGJveC1zaGFkb3c7XG4vLyAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMnM7XG5cbi8vICAgJjphY3RpdmUge1xuLy8gICAgIGJveC1zaGFkb3c6ICRfYm94LXNoYWRvdywgaW5zZXQgMCAwLjFlbSAwLjI1ZW0gdHJhbnNwYXJlbnRpemUoYmxhY2ssIDAuOCk7XG4vLyAgIH1cblxuLy8gICAmOmNoZWNrZWQge1xuLy8gICAgIGJvcmRlci13aWR0aDogMC4xZW07XG4vLyAgICAgYm9yZGVyLWNvbG9yOiBkYXJrZW4oJGJsdWUsIDEwJSk7XG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJsdWU7XG4vLyAgIH1cbi8vIH1cblxuLy8gaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdIHtcbi8vICAgYm9yZGVyLXJhZGl1czogMjUlO1xuXG4vLyAgICY6Y2hlY2tlZCB7XG4vLyAgICAgYm94LXNoYWRvdzogJGdsb3ctc2hhZG93LCBpbnNldCAwIC0wLjFlbSAwIHRyYW5zcGFyZW50aXplKGJsYWNrLCAwLjgpLFxuLy8gICAgICAgaW5zZXQgMCAwLjFlbSAwLjFlbSB0cmFuc3BhcmVudGl6ZSh3aGl0ZSwgMC44KTtcbi8vICAgfVxuLy8gfVxuXG4vLyBpbnB1dFt0eXBlPVwicmFkaW9cIl0ge1xuLy8gICBib3JkZXItcmFkaXVzOiAxMDAlO1xuXG4vLyAgICY6Y2hlY2tlZCB7XG4vLyAgICAgYm94LXNoYWRvdzogJGdsb3ctc2hhZG93O1xuLy8gICAgIGJveC1zaGFkb3c6ICRnbG93LXNoYWRvdywgaW5zZXQgMCAwLjEyZW0gMC4xZW0gdHJhbnNwYXJlbnRpemUod2hpdGUsIDAuNzUpO1xuLy8gICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDAuMTVlbTtcbi8vICAgfVxuLy8gfVxuXG4vLyAuY2hlY2t0ZXh0IHtcbi8vICAgd2lkdGg6IGF1dG87XG4vLyAgIG1hcmdpbjogMC41ZW07XG5cbi8vICAgaW5wdXQge1xuLy8gICAgIGRpc3BsYXk6IG5vbmU7XG5cbi8vICAgICArIHNwYW4ge1xuLy8gICAgICAgQGV4dGVuZCBidXR0b247XG5cbi8vICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuLy8gICAgICAgcGFkZGluZzogMWVtO1xuLy8gICAgICAgdHJhbnNpdGlvbi1kZWxheTogMHM7XG4vLyAgICAgfVxuXG4vLyAgICAgJjpjaGVja2VkICsgc3BhbiB7XG4vLyAgICAgICBAZXh0ZW5kIC5ibHVlLWJ1dHRvbjtcblxuLy8gICAgICAgcGFkZGluZzogMWVtO1xuLy8gICAgIH1cbi8vICAgfVxuLy8gfVxuXG4vLyAuc3dpdGNoIHtcbi8vICAgJF9oZWlnaHQ6IDJyZW07XG4vLyAgICRfd2lkdGg6IDhyZW07XG4vLyAgICRfaGFuZGxlLXdpZHRoOiAkX2hlaWdodDtcbi8vICAgJF9oYW5kbGUtdHJhbnNsYXRpb246ICRfd2lkdGggLSAkX2hhbmRsZS13aWR0aDtcblxuLy8gICBoZWlnaHQ6ICRfaGVpZ2h0O1xuLy8gICB3aWR0aDogJF93aWR0aDtcbi8vICAgcGFkZGluZzogMDtcbi8vICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4vLyAgIGlucHV0IHtcbi8vICAgICBkaXNwbGF5OiBub25lO1xuXG4vLyAgICAgKyBkaXYge1xuLy8gICAgICAgaGVpZ2h0OiAxMDAlO1xuLy8gICAgICAgd2lkdGg6IDEwMCU7XG4vLyAgICAgICBib3JkZXItcmFkaXVzOiA5OTlweDtcbi8vICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuLy8gICAgICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYm94LXNoYWRvdywgYmFja2dyb3VuZC1jb2xvcjtcbi8vICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMnM7XG4vLyAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjJzO1xuLy8gICAgICAgYm94LXNoYWRvdzogM3B4IDNweCAycHggLTJweCB0cmFuc3BhcmVudGl6ZShibGFjaywgMC45KSxcbi8vICAgICAgICAgaW5zZXQgMnB4IDJweCAycHggMXB4IHRyYW5zcGFyZW50aXplKGJsYWNrLCAwLjkpLFxuLy8gICAgICAgICBpbnNldCAtMnB4IC0ycHggMXB4IHdoaXRlO1xuXG4vLyAgICAgICAmOjpiZWZvcmUge1xuLy8gICAgICAgICBjb250ZW50OiBcIlwiO1xuLy8gICAgICAgICBkaXNwbGF5OiBibG9jaztcbi8vICAgICAgICAgaGVpZ2h0OiBjYWxjKCN7JF9oYW5kbGUtd2lkdGh9ICsgNHB4KTtcbi8vICAgICAgICAgd2lkdGg6IGNhbGMoI3skX2hhbmRsZS13aWR0aH0gKyA0cHgpO1xuLy8gICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuLy8gICAgICAgICBib3JkZXI6IHNvbGlkIHdoaXRlIDNweDtcbi8vICAgICAgICAgYmFja2dyb3VuZDogJGJsdWU7XG4vLyAgICAgICAgIGJveC1zaGFkb3c6IDAgM3B4IDEwcHggdHJhbnNwYXJlbnRpemUoYmxhY2ssIDAuOCksXG4vLyAgICAgICAgICAgaW5zZXQgMCAtMXB4IDNweCB0cmFuc3BhcmVudGl6ZShibGFjaywgMC45KTtcbi8vICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTZweCk7XG4vLyAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzO1xuLy8gICAgICAgfVxuLy8gICAgIH1cblxuLy8gICAgICY6Y2hlY2tlZCArIGRpdiB7XG4vLyAgICAgICBiYWNrZ3JvdW5kOiAkYmx1ZTtcbi8vICAgICAgIGJveC1zaGFkb3c6ICRnbG93LXNoYWRvdywgaW5zZXQgMCAycHggMnB4IDJweCB0cmFuc3BhcmVudGl6ZShibGFjaywgMC43KSxcbi8vICAgICAgICAgaW5zZXQgMCAwIHRyYW5zcGFyZW50O1xuXG4vLyAgICAgICAmOjpiZWZvcmUge1xuLy8gICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgkX2hhbmRsZS10cmFuc2xhdGlvbiwgLTZweCk7XG4vLyAgICAgICB9XG4vLyAgICAgfVxuLy8gICB9XG4vLyB9XG5cbi8vIGhyIHtcbi8vICAgQGV4dGVuZCAuaW5zZXQ7XG4vLyAgIHdpZHRoOiA3MiU7XG4vLyAgIGhlaWdodDogOHB4O1xuLy8gICBmbG9hdDogcmlnaHQ7XG4vLyAgIGJvcmRlcjogMDtcbi8vIH1cblxuLy8gY29kZSxcbi8vIHByZSB7XG4vLyAgIHBhZGRpbmc6IDAuNWVtIDFlbTtcbi8vICAgYm9yZGVyLXJhZGl1czogNHB4O1xuLy8gICBvdmVyZmxvdzogYXV0bztcbi8vICAgYm94LXNoYWRvdzogMCA1cHggMzBweCAwIHRyYW5zcGFyZW50aXplKGJsYWNrLCAwLjk1KTtcbi8vIH1cblxuLy8gY29kZSB7XG4vLyAgIGJhY2tncm91bmQ6ICNlNmU2ZTY7XG4vLyB9XG5cbi8vIHByZSB7XG4vLyAgIGJhY2tncm91bmQ6IHdoaXRlO1xuLy8gICBtYXJnaW46IDRlbSAwO1xuLy8gfVxuXG4vLyBjb2RlLFxuLy8gcHJlIHtcbi8vICAgJixcbi8vICAgJiAqIHtcbi8vICAgICBmb250LXNpemU6IDAuOXJlbTtcbi8vICAgICBsaW5lLWhlaWdodDogMmVtO1xuLy8gICAgIGN1cnNvcjogYXV0bztcbi8vICAgICB1c2VyLXNlbGVjdDogdGV4dDtcbi8vICAgICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IHRleHQ7XG4vLyAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogdGV4dDtcbi8vICAgICAta2h0bWwtdXNlci1zZWxlY3Q6IHRleHQ7XG4vLyAgICAgLW1vei11c2VyLXNlbGVjdDogdGV4dDtcbi8vICAgICAtbXMtdXNlci1zZWxlY3Q6IHRleHQ7XG4vLyAgIH1cbi8vIH1cblxuLy8gYmxvY2txdW90ZSB7XG4vLyAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuLy8gICBwYWRkaW5nOiAwLjVlbSAxZW07XG4vLyAgIGJvcmRlci1yYWRpdXM6IDRweDtcbi8vICAgYm94LXNoYWRvdzogMCA1cHggMzBweCAwIHRyYW5zcGFyZW50aXplKGJsYWNrLCAwLjk1KTtcbi8vICAgYm9yZGVyLWxlZnQ6IDZweCBzb2xpZCAkYmx1ZTtcbi8vIH1cbiIsIkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnQ2F2ZWF0JztcbiAgICBzcmM6IHVybCgnLi4vLi4vZm9udHMvQm9sZC9DYXZlYXQtQm9sZC53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcbiAgICAgICAgdXJsKCcuLi8uLi9mb250cy9Cb2xkL0NhdmVhdC1Cb2xkLndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC1kaXNwbGF5OiBzd2FwO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ0NhdmVhdCc7XG4gICAgc3JjOiB1cmwoJy4uLy4uL2ZvbnRzL1JlZ3VsYXIvQ2F2ZWF0LVJlZ3VsYXIud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXG4gICAgICAgIHVybCgnLi4vLi4vZm9udHMvUmVndWxhci9DYXZlYXQtUmVndWxhci53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC1kaXNwbGF5OiBzd2FwO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdGaWd1cmluZVN5bWJvbFQxJztcbiAgc3JjOiB1cmwoJy4uLy4uL2ZvbnRzLzNyZCBQYXJ0eS9DaGVzc1ZhcmlhbnRzL0ZpZ3VyaW5lU3ltYm9sVDFCb2xkLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxuICAgICAgdXJsKCcuLi8uLi9mb250cy8zcmQgUGFydHkvQ2hlc3NWYXJpYW50cy9GaWd1cmluZVN5bWJvbFQxQm9sZC53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnRmlndXJpbmVTeW1ib2xUMSc7XG4gIHNyYzogdXJsKCcuLi8uLi9mb250cy8zcmQgUGFydHkvQ2hlc3NWYXJpYW50cy9GaWd1cmluZVN5bWJvbFQxLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxuICAgICAgdXJsKCcuLi8uLi9mb250cy8zcmQgUGFydHkvQ2hlc3NWYXJpYW50cy9GaWd1cmluZVN5bWJvbFQxLndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ1NhbmN0dWFyeVBsYXlncm91bmQnO1xuICBzcmM6IHVybCgnLi4vLi4vZm9udHMvM3JkIFBhcnR5L1NhbmN0dWFyeVBsYXlncm91bmQud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXG4gICAgICB1cmwoJy4uLy4uL2ZvbnRzLzNyZCBQYXJ0eS9TYW5jdHVhcnlQbGF5Z3JvdW5kLndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG59XG5cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnQW1pdGEnO1xuICBzcmM6IHVybCgnLi4vLi4vZm9udHMvM3JkIFBhcnR5L0FtaXRhL0FtaXRhLVJlZ3VsYXIud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXG4gICAgICB1cmwoJy4uLy4uL2ZvbnRzLzNyZCBQYXJ0eS9BbWl0YS9BbWl0YS1SZWd1bGFyLndvZmYyJykgZm9ybWF0KCd3b2ZmJyk7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xufSIsIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJDYXZlYXRcIjtcbiAgc3JjOiB1cmwoXCIuLi8uLi9mb250cy9Cb2xkL0NhdmVhdC1Cb2xkLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpLCB1cmwoXCIuLi8uLi9mb250cy9Cb2xkL0NhdmVhdC1Cb2xkLndvZmZcIikgZm9ybWF0KFwid29mZlwiKTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkNhdmVhdFwiO1xuICBzcmM6IHVybChcIi4uLy4uL2ZvbnRzL1JlZ3VsYXIvQ2F2ZWF0LVJlZ3VsYXIud29mZjJcIikgZm9ybWF0KFwid29mZjJcIiksIHVybChcIi4uLy4uL2ZvbnRzL1JlZ3VsYXIvQ2F2ZWF0LVJlZ3VsYXIud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJGaWd1cmluZVN5bWJvbFQxXCI7XG4gIHNyYzogdXJsKFwiLi4vLi4vZm9udHMvM3JkIFBhcnR5L0NoZXNzVmFyaWFudHMvRmlndXJpbmVTeW1ib2xUMUJvbGQud29mZjJcIikgZm9ybWF0KFwid29mZjJcIiksIHVybChcIi4uLy4uL2ZvbnRzLzNyZCBQYXJ0eS9DaGVzc1ZhcmlhbnRzL0ZpZ3VyaW5lU3ltYm9sVDFCb2xkLndvZmZcIikgZm9ybWF0KFwid29mZlwiKTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkZpZ3VyaW5lU3ltYm9sVDFcIjtcbiAgc3JjOiB1cmwoXCIuLi8uLi9mb250cy8zcmQgUGFydHkvQ2hlc3NWYXJpYW50cy9GaWd1cmluZVN5bWJvbFQxLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpLCB1cmwoXCIuLi8uLi9mb250cy8zcmQgUGFydHkvQ2hlc3NWYXJpYW50cy9GaWd1cmluZVN5bWJvbFQxLndvZmZcIikgZm9ybWF0KFwid29mZlwiKTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiU2FuY3R1YXJ5UGxheWdyb3VuZFwiO1xuICBzcmM6IHVybChcIi4uLy4uL2ZvbnRzLzNyZCBQYXJ0eS9TYW5jdHVhcnlQbGF5Z3JvdW5kLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpLCB1cmwoXCIuLi8uLi9mb250cy8zcmQgUGFydHkvU2FuY3R1YXJ5UGxheWdyb3VuZC53b2ZmXCIpIGZvcm1hdChcIndvZmZcIik7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkFtaXRhXCI7XG4gIHNyYzogdXJsKFwiLi4vLi4vZm9udHMvM3JkIFBhcnR5L0FtaXRhL0FtaXRhLVJlZ3VsYXIud29mZjJcIikgZm9ybWF0KFwid29mZjJcIiksIHVybChcIi4uLy4uL2ZvbnRzLzNyZCBQYXJ0eS9BbWl0YS9BbWl0YS1SZWd1bGFyLndvZmYyXCIpIGZvcm1hdChcIndvZmZcIik7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xufVxuLyoqKioqKioqKioqKioqKioqKiogTWVudSAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqKioqKiogTWVudSBDb250cm9scyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIENvbnRhaW5lciBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBDb250YWluZXIgVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgQ29udGFpbmVyIFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIEhpZ2hsaWdodCBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBBbm5vdGF0aW9uIFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIFZhcmlhdGlvbiBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBQbHkgVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqKiBDb250cm9sIENvbG9ycyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKiogQm9hcmQgQ29sb3JzICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqKiBGb250IFNpemVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbjpyb290IHtcbiAgLS1iZy1jb2xvcjogI2YyZjNmNztcbiAgLS1mZy1jb2xvcjogIzM4M2E0MTtcbiAgLS1yZWQ6ICNlNDMwMzA7XG4gIC0tZ3JlZW46ICMxOWExODc7XG4gIC0tYmx1ZTogIzM2N2JmMDtcbiAgLS1kYXJrLWJsdWU6ICMyNjVhYjE7XG4gIC0tbWFyb29uOiAjYjgxNzRjO1xuICAtLXB1cnBsZTogIzhjNDJhYjtcbn1cblxuLmdzaS1jb250YWluZXIge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgbGluZS1oZWlnaHQ6IHZhcigtLWdzRm9udFNpemUpO1xuICBtYXJnaW46IDJweDtcbiAgcGFkZGluZy1sZWZ0OiAycHg7XG59XG5cbi5nc2ktbW92ZSB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGNvbG9yOiB2YXIoLS1nc1RleHRDb2xvcik7XG4gIGZvbnQtc2l6ZTogdmFyKC0tZ3NGb250U2l6ZSk7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1nc0ZvbnRGYW1pbHkpO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1nc0JhY2tncm91bmQpO1xufVxuXG4uZ3NpLXBseSB7XG4gIGNvbG9yOiB2YXIoLS1nc1RleHRDb2xvcik7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IHZhcigtLWdzRm9udFNpemVQQyk7XG4gIGJhY2tncm91bmQ6IHZhcigtLWdzQmFja2dyb3VuZFBDKTtcbn1cblxuLmdzaS1jb21tZW50IHtcbiAgY29sb3I6IHZhcigtLWdzVGV4dENvbG9yQU4pO1xuICBtYXJnaW4tbGVmdDogNHB4O1xuICBmb250LXNpemU6IHZhcigtLWdzRm9udFNpemVBTik7XG4gIGJhY2tncm91bmQ6IHZhcigtLWdzQmFja2dyb3VuZEFOKTtcbn1cblxuLkN1cnJlbnQge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1nc0JhY2tncm91bmRIRyk7XG4gIGNvbG9yOiB2YXIoLS1nc1RleHRDb2xvckhHKTtcbiAgYm9yZGVyOiB2YXIoLS1nc0JvcmRlckhHKTtcbiAgZm9udC1zaXplOiB2YXIoLS1nc0ZvbnRTaXplSEcpO1xuICBsaW5lLWhlaWdodDogdmFyKC0tZ3NGb250U2l6ZUhHKTtcbn1cblxuLkN1cnJlbnQuZ3NpLWNvbW1lbnQge1xuICBjb2xvcjogdmFyKC0tZ3NBbm5vdGF0aW9uQ29sb3JIRyk7XG59XG5cbi5DdXJyZW50LmdzaS1wbHkge1xuICBjb2xvcjogIzAwZDRmYTtcbn1cblxuLkN1cnJlbnQuVmFyaWF0aW9uLmdzaS1jb250YWluZXIge1xuICBib3JkZXI6ICMwMGQ0ZmEgMnB4IGRhc2hlZDtcbn1cblxuLkN1cnJlbnQuQnJhbmNoZWQuZ3NpLWNvbnRhaW5lciB7XG4gIGJvcmRlcjogIzAwZDRmYSAycHggZGFzaGVkO1xufVxuXG4uQ3VycmVudC5CcmFuY2hlZC5WYXJpYXRpb24uZ3NpLWNvbnRhaW5lciB7XG4gIGJvcmRlcjogIzAwZDRmYSAycHggZGFzaGVkO1xufVxuXG4uQnJhbmNoZWQuVmFyaWF0aW9uLmdzaS1jb250YWluZXIge1xuICBib3JkZXI6IDJweCBsaWdodGNvcmFsIGRhc2hlZDtcbn1cblxuLkJyYW5jaGVkLmdzaS1jb250YWluZXIge1xuICBib3JkZXI6IDJweCBsaWdodGNvcmFsIGRhc2hlZDtcbn1cblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIEdyb3VwICoqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLkdyb3VwLmdzaS1jb250YWluZXIge1xuICBjb2xvcjogdmFyKC0tZ3NUZXh0Q29sb3IpO1xufVxuXG4uR3JvdXAuZ3NpLWNvbnRhaW5lci1oZyB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWdzQmFja2dyb3VuZEhHKTtcbiAgYm9yZGVyOiB2YXIoLS1nc0JvcmRlckhHKTtcbiAgbGluZS1oZWlnaHQ6IHZhcigtLWdzRm9udFNpemUpO1xufVxuXG4uR3JvdXAuZ3NpLW1vdmUge1xuICBwYWRkaW5nLWxlZnQ6IDJweDtcbiAgbGluZS1oZWlnaHQ6IHZhcigtLWdzRm9udFNpemUpO1xufVxuXG4uR3JvdXAuZ3NpLXBseSB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWdzQmFja2dyb3VuZFBDKTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBtYXJnaW4tcmlnaHQ6IDJweDtcbiAgYm9yZGVyOiB2YXIoLS1nc0JvcmRlckFOKTtcbiAgZm9udC1zaXplOiB2YXIoLS1nc0ZvbnRTaXplKTtcbiAgbGluZS1oZWlnaHQ6IHZhcigtLWdzRm9udFNpemUpO1xufVxuXG4uR3JvdXAuZ3NpLXBseS1oaWdobGlnaHQge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1nc0JhY2tncm91bmRIRyk7XG4gIGNvbG9yOiB2YXIoLS1nc1RleHRDb2xvckhHKTtcbiAgYm9yZGVyOiB2YXIoLS1nc0JvcmRlckhHKTtcbiAgbGluZS1oZWlnaHQ6IHZhcigtLWdzRm9udFNpemUpO1xufVxuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBBbm5vdGF0aW9uIEdyb3VwICoqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLkFubm90YXRpb24uZ3NpLWNvbnRhaW5lciB7XG4gIGNvbG9yOiB2YXIoLS1nc1RleHRDb2xvcik7XG4gIGxpbmUtaGVpZ2h0OiB2YXIoLS1nc1RleHRTaXplKTtcbn1cblxuLkFubm90YXRpb24uZ3NpLWNvbnRhaW5lci1oZyB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWdzQmFja2dyb3VuZEhHKTtcbiAgYm9yZGVyOiB2YXIoLS1nc0JvcmRlckhHKTtcbiAgbGluZS1oZWlnaHQ6IHZhcigtLWdzVGV4dFNpemUpO1xufVxuXG4uQW5ub3RhdGlvbi5nc2ktbW92ZSB7XG4gIHBhZGRpbmctbGVmdDogMnB4O1xuICBsaW5lLWhlaWdodDogdmFyKC0tZ3NUZXh0U2l6ZSk7XG59XG5cbi5Bbm5vdGF0aW9uLmdzaS1wbHkge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1nc0JhY2tncm91bmRBTik7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgYm9yZGVyOiB2YXIoLS1nc0JvcmRlckFOKTtcbiAgZm9udC1zaXplOiB2YXIoLS1nc1RleHRTaXplKTtcbiAgbGluZS1oZWlnaHQ6IHZhcigtLWdzVGV4dFNpemUpO1xufVxuXG4uQW5ub3RhdGlvbi5nc2ktcGx5LWhpZ2hsaWdodCB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWdzQmFja2dyb3VuZEhHKTtcbiAgY29sb3I6IHZhcigtLWdzVGV4dENvbG9ySEcpO1xuICBib3JkZXI6IHZhcigtLWdzQm9yZGVySEcpO1xuICBsaW5lLWhlaWdodDogdmFyKC0tZ3NUZXh0U2l6ZSk7XG59XG5cbi5Bbm5vdGF0aW9uLmdzaS1jb21tZW50IHtcbiAgcGFkZGluZy1sZWZ0OiAzcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDJweDtcbiAgbWFyZ2luLWxlZnQ6IDNweDtcbiAgbWFyZ2luLXJpZ2h0OiAycHg7XG4gIGxpbmUtaGVpZ2h0OiB2YXIoLS1nc1RleHRTaXplKTtcbn1cblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBWYXJpYXRpb24gR3JvdXAgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLlZhcmlhdGlvbi5nc2ktY29udGFpbmVyIHtcbiAgYm9yZGVyOiB3aGl0ZSBkYXNoZWQgMnB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1nc0JhY2tncm91bmQpO1xuICBjb2xvcjogdmFyKC0tZ3NUZXh0Q29sb3IpO1xuICBwYWRkaW5nOiAycHg7XG59XG5cbi5WYXJpYXRpb24uZ3NpLW1vdmUge1xuICBwYWRkaW5nLWxlZnQ6IDJweDtcbiAgbGluZS1oZWlnaHQ6IHZhcigtLWdzVGV4dFNpemUpO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FlowItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'flow-item',
                templateUrl: './flow-item.component.html',
                styleUrls: ['./flow-item.component.scss']
            }]
    }], function () { return [{ type: _services_olga_service__WEBPACK_IMPORTED_MODULE_2__["OlgaService"] }, { type: _services_themes_service__WEBPACK_IMPORTED_MODULE_3__["ThemeService"] }]; }, { data: [{
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

/***/ "./src/app/olga-score/score-flow/score-flow.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/olga-score/score-flow/score-flow.component.ts ***!
  \***************************************************************/
/*! exports provided: ScoreFlowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScoreFlowComponent", function() { return ScoreFlowComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _flow_item_flow_item_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./flow-item/flow-item.component */ "./src/app/olga-score/score-flow/flow-item/flow-item.component.ts");
/* harmony import */ var src_app_services_olga_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/olga.service */ "./src/app/services/olga.service.ts");




function ScoreFlowComponent_flow_item_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "flow-item", 1, 2);
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", item_r1);
} }
class ScoreFlowComponent {
    constructor(olga) {
        this.olga = olga;
        this.currentItem = null;
        this.items = [];
        this.result = '';
    }
    ngOnInit() {
        const game = this.olga.getGame();
    }
    ngOnChanges(changes) {
        console.log();
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
    clearGameScore() {
    }
    resize(width, height) {
    }
}
ScoreFlowComponent.ɵfac = function ScoreFlowComponent_Factory(t) { return new (t || ScoreFlowComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_olga_service__WEBPACK_IMPORTED_MODULE_2__["OlgaService"])); };
ScoreFlowComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ScoreFlowComponent, selectors: [["score-flow"]], viewQuery: function ScoreFlowComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_flow_item_flow_item_component__WEBPACK_IMPORTED_MODULE_1__["FlowItemComponent"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.scoreItems = _t);
    } }, inputs: { items: "items" }, outputs: { currentItem: "currentItem", result: "result" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 1, vars: 1, consts: [[3, "data", 4, "ngFor", "ngForOf"], [3, "data"], ["scoreItem", ""]], template: function ScoreFlowComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ScoreFlowComponent_flow_item_0_Template, 2, 1, "flow-item", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);
    } }, styles: ["@font-face {\n  font-family: \"Caveat\";\n  src: url('Caveat-Bold.woff2') format(\"woff2\"), url('Caveat-Bold.woff') format(\"woff\");\n  font-weight: bold;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"Caveat\";\n  src: url('Caveat-Regular.woff2') format(\"woff2\"), url('Caveat-Regular.woff') format(\"woff\");\n  font-weight: 600;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"FigurineSymbolT1\";\n  src: url('FigurineSymbolT1Bold.woff2') format(\"woff2\"), url('FigurineSymbolT1Bold.woff') format(\"woff\");\n  font-weight: bold;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"FigurineSymbolT1\";\n  src: url('FigurineSymbolT1.woff2') format(\"woff2\"), url('FigurineSymbolT1.woff') format(\"woff\");\n  font-weight: 600;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"SanctuaryPlayground\";\n  src: url('SanctuaryPlayground.woff2') format(\"woff2\"), url('SanctuaryPlayground.woff') format(\"woff\");\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"Amita\";\n  src: url('Amita-Regular.woff2') format(\"woff2\"), url('Amita-Regular.woff2') format(\"woff\");\n  font-style: normal;\n  font-display: swap;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n[_ngcontent-%COMP%]:root {\n  --bg-color: #f2f3f7;\n  --fg-color: #383a41;\n  --red: #e43030;\n  --green: #19a187;\n  --blue: #367bf0;\n  --dark-blue: #265ab1;\n  --maroon: #b8174c;\n  --purple: #8c42ab;\n}\nmat-divider[_ngcontent-%COMP%] {\n  background-color: white;\n  margin: 2px;\n}\n.mat-grid-tile[_ngcontent-%COMP%] {\n  background: #585858ff;\n  color: white;\n  font-family: \"FigurineSymbolT1\";\n  font-weight: 360;\n  max-width: 164px;\n  font-size: 24px;\n  text-align: auto;\n}\n.score-title[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0px;\n  left: -2px;\n  height: 30px;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -o-user-select: none;\n  user-select: none;\n}\n.score-list[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0px;\n  right: 0px;\n  padding-left: 12px;\n  padding-top: 2px;\n  padding-bottom: 2px;\n  top: 32px;\n  height: calc(99% - 30px);\n  overflow: auto;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -o-user-select: none;\n  user-select: none;\n  background: var(--gsListBackground);\n}\n.gamescore-container[_ngcontent-%COMP%] {\n  background: var(--gsBackground);\n  height: 100%;\n  border: 2px black solid;\n  overflow: hidden;\n  line-height: var(--gsTextSize);\n  word-break: keep-all;\n  vertical-align: bottom;\n}\n.gs-menu[_ngcontent-%COMP%] {\n  position: absolute;\n  background: transparent;\n  top: 10%;\n  left: 10%;\n  width: 80%;\n  height: 80%;\n  max-height: 480px;\n  max-width: 480px;\n}\n.resize-handle[_ngcontent-%COMP%] {\n  position: absolute;\n  clip: true;\n  top: calc(50% - 3em);\n  width: 36px;\n  border-radius: 5px;\n  border: solid grey 3px;\n  height: 6em;\n  background-color: #00000a;\n  cursor: grab;\n}\n.input-box[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 2px;\n  width: 100%;\n  height: 300px;\n  border: solid black 4px;\n}\n.score-table[_ngcontent-%COMP%] {\n  background-color: red;\n  position: absolute;\n  left: 0px;\n  right: 0px;\n  padding-left: 12px;\n  padding-top: 2px;\n  padding-bottom: 2px;\n  top: 32px;\n  height: calc(99% - 30px);\n  overflow: auto;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -o-user-select: none;\n  user-select: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMuc2NzcyIsInNyYy9hc3NldHMvc2Nzcy9tb2R1bGVzL19mb250cy5zY3NzIiwic3JjL2FwcC9vbGdhLXNjb3JlL3Njb3JlLWZsb3cvc2NvcmUtZmxvdy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4RUFBQTtBQ0FBO0VBQ0kscUJBQUE7RUFDQSxxRkFBQTtFQUVBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0NKO0FERUE7RUFDSSxxQkFBQTtFQUNBLDJGQUFBO0VBRUEsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDREo7QURJQTtFQUNFLCtCQUFBO0VBQ0EsdUdBQUE7RUFFQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNIRjtBRE1BO0VBQ0UsK0JBQUE7RUFDQSwrRkFBQTtFQUVBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0xGO0FEUUE7RUFDRSxrQ0FBQTtFQUNBLHFHQUFBO0VBRUEsa0JBQUE7RUFDQSxrQkFBQTtBQ1BGO0FEV0E7RUFDRSxvQkFBQTtFQUNBLDBGQUFBO0VBRUEsa0JBQUE7RUFDQSxrQkFBQTtBQ1ZGO0FGREEsK0VBQUE7QUFHQSxrRkFBQTtBQUtBLCtFQUFBO0FBVUEsK0VBQUE7QUFNQSwrRUFBQTtBQU1BLCtFQUFBO0FBTUEsZ0ZBQUE7QUFLQSwrRUFBQTtBQUtBLHlFQUFBO0FBS0EseUVBQUE7QUFJQSx1RUFBQTtBQVFBLHFFQUFBO0FBeUJBO0VBQ0UsbUJBQUE7RUFDQSxtQkFBQTtFQUVBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUUxRUY7QUE1REE7RUFDRSx1QkFBQTtFQUNBLFdBQUE7QUErREY7QUEzREE7RUFDRSxxQkZMb0I7RUVNcEIsWUZMcUI7RUVNckIsK0JGUmlCO0VFU2pCLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUE4REY7QUEzREE7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBRUEsc0JBQUE7RUFFQSxvQkFBQTtFQUNBLGlCQUFBO0FBOERGO0FBNURBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSx3QkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUVBLHNCQUFBO0VBRUEsb0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1DRklpQjtBRTJEbkI7QUE3REE7RUFDRSwrQkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsOEJGRFc7RUVFWCxvQkFBQTtFQUNBLHNCQUFBO0FBZ0VGO0FBNURBO0VBQ0Usa0JBQUE7RUFDQSx1QkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBK0RGO0FBM0RBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUE4REY7QUE1REE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FBK0RGO0FBM0RBO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLHdCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBRUEsc0JBQUE7RUFFQSxvQkFBQTtFQUNBLGlCQUFBO0FBOERGIiwiZmlsZSI6InNyYy9hcHAvb2xnYS1zY29yZS9zY29yZS1mbG93L3Njb3JlLWZsb3cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG5cbkBpbXBvcnQgXCIuL2Fzc2V0cy9zY3NzL21vZHVsZXMvX2ZvbnRzLnNjc3NcIjtcbiRnYW1lc2NvcmUtZmFtaWx5OiBcIkZpZ3VyaW5lU3ltYm9sVDFcIjtcbiRnYW1lc2NvcmUtaGlnaGxpZ2h0OiAjNTg1ODU4ZmY7XG4kZ2FtZXNjb3JlLWZvcmVncm91bmQ6IHdoaXRlO1xuXG4kcmVkOiAjZTQzMDMwO1xuJGdyZWVuOiAjMTlhMTg3O1xuJGxpZ2h0LWJsdWU6ICMwMGZmZmZmZjtcbiRibHVlOiAjMzY3YmYwO1xuJGRhcmstYmx1ZTogIzI2NWFiMTtcbiRtYXJvb246ICNiODE3NGM7XG4kcHVycGxlOiAjOGM0MmFiO1xuXG4vLyBNYWluIE9MR0EgQ29sb3IgRWxlbWVudCBWYXJpYWJsZXNcbiR0ZXh0Q29sb3I6IHZhcigtLXRleHRDb2xvcik7IC8vIE1haW4gVGV4dCBDb2xvclxuJHRleHRDb2xvckF0dGVudGlvbjogdmFyKC0tdGV4dENvbG9yQXR0ZW50aW9uKTsgLy8gQXR0ZW50aW9uIHRleHRcbiR0ZXh0Q29sb3JSZW1vdmU6IHZhcigtLXRleHRDb2xvclJlbW92ZSk7IC8vIFJlbW92ZS9EZWxldGUvQ2xvc2VcbiR0ZXh0Q29sb3JBZGQ6IHZhcigtLXRleHRDb2xvckFkZCk7IC8vIEFkZC9DcmVhdGUvT3BlblxuJHRleHRDb2xvckFjdGl2ZTogdmFyKC0tdGV4dENvbG9yQWN0aXZlKTsgLy8gQWRkL0NyZWF0ZS9PcGVuXG4kYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZCk7IC8vIE1haW4gYmFja2dyb3VuZCBDb2xvclxuJGJnQ29udGFpbmVyOiB2YXIoLS1iZ0NvbnRhaW5lcik7IC8vIGJhY2tncm91bmQgb2YgQ29udGFpbmVyc1xuJGJnTWVudTogdmFyKC0tYmdNZW51KTsgLy8gYmFja2dyb3VuZCBvZiBNZW51c1xuJGJnSXRlbTogdmFyKC0tYmdJdGVtKTsgLy8gYmFja2dyb3VuZCBvZiBJdGVtc1xuXG4vLyBDb250ZXh0IE1lbnVcbiRiZ0NvbnRleHQ6IHZhcigtLWJnQ29udGV4dCk7IC8vIGJhY2tncm91bmQgb2YgQ29udGV4dCBNZW51XG4kdGV4dENvbG9yQ29udGV4dDogdmFyKC0tdGV4dENvbG9yQ29udGV4dCk7IC8vIHRleHQgY29sb3IgQ29udGV4dCBNZW51XG4kYm9yZGVyQ29udGV4dDogdmFyKC0tYm9yZGVyQ29udGV4dCk7IC8vIGJvcmRlciBDb250ZXh0IE1lbnVcbiRvdmVybGF5Q29udGV4dEJhY2tncm91bmQ6IHZhcihcbiAgLS1vdmVybGF5Q29udGV4dEJhY2tncm91bmRcbik7IC8vIENvbnRleHQgTWVudSBPdmVybGF5IGJhY2tncm91bmQgbWFpblxuJG92ZXJsYXlDb250ZXh0QmFja2dyb3VuZEdyYWRpZW50OiB2YXIoXG4gIC0tb3ZlcmxheUNvbnRleHRCYWNrZ3JvdW5kR3JhZGllbnRcbik7IC8vIENvbnRleHQgTWVudSBiYWNrZ3JvdW5kIGdyYWRpZW50XG5cblxuXG4vKioqKioqKioqKioqKioqKioqKiBNZW51ICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuJG1lQmFja2dyb3VuZDogdmFyKC0tbWVCYWNrZ3JvdW5kKTtcblxuLyoqKioqKioqKioqKioqKioqKioqKioqKiBNZW51IENvbnRyb2xzICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiRjc0ZpbGw6IHZhcigtLWNzRmlsbCk7XG4kY3NBY2NlbnQ6IHZhcigtLWNzQWNjZW50KTtcbiRjc0FjY2VudDI6IHZhcigtLWNzQWNjZW50Mik7XG5cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgQ29udGFpbmVyIFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4kZ3NUZXh0Q29sb3I6IHZhcigtLWdzVGV4dENvbG9yKTsgLy8gVGV4dCBjb2xvciBmb3IgZ2FtZSBzY29yZVxuJGdzQmFja2dyb3VuZDogdmFyKC0tZ3NCYWNrZ3JvdW5kKTsgLy8gYmFja2dyb3VuZCBvZiBDb250YWluZXJzXG4kZ3NMaXN0QmFja2dyb3VuZDogdmFyKC0tZ3NMaXN0QmFja2dyb3VuZCk7IC8vIGxpc3QgYmFja2dyb3VuZCBvZiBnYW1lIHNjb3JlXG4kZ3NCb3JkZXI6IHZhcigtLWdzQm9yZGVyKTsgLy8gYmFja2dyb3VuZCBvZiBNZW51c1xuJGdzVGV4dFNpemU6IHZhcigtLWdzVGV4dFNpemUpOyAvLyBiYWNrZ3JvdW5kIG9mIE1lbnVzXG4kZ3NGb250RmFtaWx5OiB2YXIoLS1nc0ZvbnRGYW1pbHkpOyAvLyBzY29yZSBmb250XG4kZ3NUYWJsZUl0ZW1XaWR0aDogdmFyKC0tZ3NUYWJsZUl0ZW1XaWR0aCk7IC8vIHdpZHRoIG9mIHNjb3JlIGl0ZW0gaW4gdGFibGUgbGF5b3V0XG4kZ3NUYWJsZVBseVdpZHRoOiB2YXIoLS1nc1RhYmxlUGx5V2lkdGgpOyAvLyB3aWR0aCBvZiBwbHkgZWxlbWVudCBpbiB0YWJsZSBsYXlvdXRcblxuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBDb250YWluZXIgVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiRnc1RleHRDb2xvck1XOiB2YXIoLS1nc1RleHRDb2xvck1XKTsgLy8gVGV4dCBjb2xvciBmb3IgZ2FtZSBzY29yZVxuJGdzQmFja2dyb3VuZE1XOiB2YXIoLS1nc0JhY2tncm91bmRNVyk7IC8vIGJhY2tncm91bmQgb2YgQ29udGFpbmVyc1xuJGdzQm9yZGVyTVc6IHZhcigtLWdzQm9yZGVyTVcpOyAvLyBiYWNrZ3JvdW5kIG9mIE1lbnVzXG4kZ3NUZXh0U2l6ZU1XOiB2YXIoLS1nc1RleHRTaXplTVcpOyAvLyBiYWNrZ3JvdW5kIG9mIE1lbnVzXG5cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgQ29udGFpbmVyIFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4kZ3NUZXh0Q29sb3JNQjogdmFyKC0tZ3NUZXh0Q29sb3JNQik7IC8vIFRleHQgY29sb3IgZm9yIGdhbWUgc2NvcmVcbiRnc0JhY2tncm91bmRNQjogdmFyKC0tZ3NCYWNrZ3JvdW5kTUIpOyAvLyBiYWNrZ3JvdW5kIG9mIENvbnRhaW5lcnNcbiRnc0JvcmRlck1COiB2YXIoLS1nc0JvcmRlck1CKTsgLy8gYmFja2dyb3VuZCBvZiBNZW51c1xuJGdzVGV4dFNpemVNQjogdmFyKC0tZ3NUZXh0U2l6ZU1CKTsgLy8gYmFja2dyb3VuZCBvZiBNZW51c1xuXG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIEhpZ2hsaWdodCBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuJGdzVGV4dENvbG9ySEc6IHZhcigtLWdzVGV4dENvbG9ySEcpOyAvLyBUZXh0IGNvbG9yIGZvciBoaWdobGlnaHRcbiRnc0Fubm90YXRpb25Db2xvckhHOiB2YXIoLS1nc0Fubm90YXRpb25Db2xvckhHKTsgLy8gQW5ub3RhdGlvbi9Db21tZW50IGNvbG9yIGZvciBoaWdobGlnaHRcbiRnc0JhY2tncm91bmRIRzogdmFyKC0tZ3NCYWNrZ3JvdW5kSEcpOyAvLyBiYWNrZ3JvdW5kIGZvciBoaWdobGlnaHRcbiRnc0JvcmRlckhHOiB2YXIoLS1nc0JvcmRlckhHKTsgLy8gYm9yZGVyIGZvciBoaWdobGlnaHRcblxuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBBbm5vdGF0aW9uIFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4kZ3NUZXh0Q29sb3JBTjogdmFyKC0tZ3NUZXh0Q29sb3JBTik7IC8vIFRleHQgY29sb3IgZm9yIGhpZ2hsaWdodFxuJGdzQmFja2dyb3VuZEFOOiB2YXIoLS1nc0JhY2tncm91bmRBTik7IC8vIGJhY2tncm91bmQgZm9yIGhpZ2hsaWdodFxuJGdzQm9yZGVyQU46IHZhcigtLWdzQm9yZGVyQU4pOyAvLyBib3JkZXIgZm9yIGhpZ2hsaWdodFxuXG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIFZhcmlhdGlvbiBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuJGdzVGV4dENvbG9yVkE6IHZhcigtLWdzVGV4dENvbG9yVkEpOyAvLyBUZXh0IGNvbG9yIGZvciBoaWdobGlnaHRcbiRnc0JhY2tncm91bmRWQTogdmFyKC0tZ3NCYWNrZ3JvdW5kVkEpOyAvLyBiYWNrZ3JvdW5kIGZvciBoaWdobGlnaHRcbiRnc0JvcmRlclZBOiB2YXIoLS1nc0JvcmRlclZBKTsgLy8gYm9yZGVyIGZvciBoaWdobGlnaHRcblxuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBQbHkgVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiRnc1RleHRDb2xvclBDOiB2YXIoLS1nc1RleHRDb2xvclBDKTsgLy8gVGV4dCBjb2xvciBmb3IgZ2FtZSBzY29yZSBwbHlcbiRnc0JhY2tncm91bmRQQzogdmFyKC0tZ3NCYWNrZ3JvdW5kUEMpOyAvLyBiYWNrZ3JvdW5kIGZvciBnYW1lIHNjb3JlIHBseVxuJGdzQm9yZGVyUEM6IHZhcigtLWdzQm9yZGVyUEMpOyAvLyBib3JkZXIgZm9yIGdhbWUgc2NvcmUgcGx5XG5cbi8qKioqKioqKioqKioqKioqKioqKiBDb250cm9sIENvbG9ycyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4kY3NCYWNrZ3JvdW5kOiB2YXIoLS1jc0JhY2tncm91bmQpOyAvLyBiYWNrZ3JvdW5kIGZvciBjb250cm9sc1xuJGNzQ29sb3I6IHZhcigtLWNzQ29sb3IpOyAvLyBjb250cm9scyBjb2xvciAoZm9yZWdyb3VuZClcblxuLyoqKioqKioqKioqKioqKioqKioqIEJvYXJkIENvbG9ycyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4kYm9hcmRCR0Rhcms6IHZhcigtLWJvYXJkQkdEYXJrKTsgLy8gYm9hcmQgZGFyayB0aWxlXG4kYm9hcmRCR0xpZ2h0OiB2YXIoLS1ib2FyZEJHTGlnaHQpOyAvLyBib2FyZCBsaWdodCB0aWxlXG4kYm9hcmRMYWJlbExpZ2h0OiB2YXIoLS1ib2FyZExhYmVsTGlnaHQpOyAvLyBib2FyZCBsaWdodCBsYWJlbFxuJGJvYXJkTGFiZWxEYXJrOiB2YXIoLS1ib2FyZExhYmVsRGFyayk7IC8vIGJvYXJkIGRhcmsgbGFiZWxcblxuXG5cbi8qKioqKioqKioqKioqKioqKioqKiBGb250IFNpemVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiRnc0ZvbnRTaXplOiB2YXIoLS1nc0ZvbnRTaXplKTsgLy8gYm9hcmQgZGFyayB0aWxlXG4kZ3NGb250U2l6ZUFOOiB2YXIoLS1nc0ZvbnRTaXplQU4pOyAvLyBib2FyZCBsaWdodCB0aWxlXG4kZ3NGb250U2l6ZUhHOiB2YXIoLS1nc0ZvbnRTaXplSEcpOyAvLyBib2FyZCBsaWdodCBsYWJlbFxuJGdzRm9udFNpemVWQTogdmFyKC0tZ3NGb250U2l6ZVZBKTsgLy8gYm9hcmQgZGFyayBsYWJlbFxuJGdzRm9udFNpemVQQzogdmFyKC0tZ3NGb250U2l6ZVBDKTsgLy8gYm9hcmQgZGFyayBsYWJlbFxuJGhkckRhdGFGb250U2l6ZTogdmFyKC0taGRyRGF0YUZvbnRTaXplKTsgLy8gc2l6ZSBvZiBwbGF5ZXIgc2hvd2Nhc2UgZGF0YVxuJGhkck5hbWVGb250U2l6ZTogdmFyKC0taGRyTmFtZUZvbnRTaXplKTsgLy8gc2l6ZSBvZiBwbGF5ZXIgc2hvd2Nhc2UgTmFtZVxuJGhkclRpdGxlRm9udFNpemU6IHZhcigtLWhkclRpdGxlRm9udFNpemUpOyAvLyBzaXplIG9mIHBsYXllciBzaG93Y2FzZSBkYXRhXG4kaGRyVmFyaWFudEZvbnRTaXplOiB2YXIoLS1oZHJWYXJpYW50Rm9udFNpemUpOyAvLyBzaXplIG9mIHBsYXllciBzaG93Y2FzZSBOYW1lXG4kaGRyTWF0Y2hEYXRhRm9udFNpemU6IHZhcigtLWhkck1hdGNoRGF0YUZvbnRTaXplKTsgLy8gc2l6ZSBvZiBwbGF5ZXIgc2hvd2Nhc2UgTmFtZVxuJGhkck9wZW5pbmdGb250U2l6ZTogdmFyKC0taGRyTWF0Y2hEYXRhRm9udFNpemUpOyAvLyBzaXplIG9mIHBsYXllciBzaG93Y2FzZSBOYW1lXG4kaGRyUmVzdWx0Rm9udFNpemU6IHZhcigtLWhkclJlc3VsdEZvbnRTaXplKTsgLy8gc2l6ZSBvZiBwbGF5ZXIgc2hvd2Nhc2UgTmFtZVxuJGhkclJvdW5kRm9udFNpemU6IHZhcigtLWhkclJvdW5kRm9udFNpemUpOyAvLyBzaXplIG9mIHBsYXllciBzaG93Y2FzZSBOYW1lXG5cbi8vIEdlbmVyYWwgc3R1ZmZcbiR0ZXh0LWNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcbiRiZy1vdXRlcjogdmFyKC0tYmctb3V0ZXIpO1xuJGJnLWlubmVyOiB2YXIoLS1iZy1pbm5lcik7XG5cbiRiZy1jb2xvcjogI2YyZjNmNztcbiRmZy1jb2xvcjogIzM4M2E0MTtcblxuJGdsb3ctc2hhZG93OiAwIDAgMC41ZW0gdHJhbnNwYXJlbnRpemUoJGJsdWUsIDAuMyk7XG5cbjpyb290IHtcbiAgLS1iZy1jb2xvcjogI3skYmctY29sb3J9O1xuICAtLWZnLWNvbG9yOiAjeyRmZy1jb2xvcn07XG5cbiAgLS1yZWQ6ICN7JHJlZH07XG4gIC0tZ3JlZW46ICN7JGdyZWVufTtcbiAgLS1ibHVlOiAjeyRibHVlfTtcbiAgLS1kYXJrLWJsdWU6ICN7JGRhcmstYmx1ZX07XG4gIC0tbWFyb29uOiAjeyRtYXJvb259O1xuICAtLXB1cnBsZTogI3skcHVycGxlfTtcbn1cblxuLy8gOjotbW96LWZvY3VzLWlubmVyLFxuLy8gOi1tb3otZm9jdXNyaW5nIHtcbi8vICAgYm9yZGVyOiAwO1xuLy8gICBjb2xvcjogdHJhbnNwYXJlbnQ7XG4vLyAgIHRleHQtc2hhZG93OiAwIDAgMCAkZmctY29sb3I7XG4vLyB9XG5cbi8vIDo6c2VsZWN0aW9uLFxuLy8gOjotbW96LXNlbGVjdGlvbiB7XG4vLyAgIGNvbG9yOiB3aGl0ZTtcbi8vICAgYmFja2dyb3VuZDogYmxhY2s7XG4vLyB9XG5cbi8vICoge1xuLy8gICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuLy8gICBvdXRsaW5lOiBub25lO1xuLy8gICB1c2VyLXNlbGVjdDogbm9uZTtcbi8vICAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xuLy8gICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuLy8gICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7XG4vLyAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4vLyAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbi8vICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuLy8gICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4vLyAgIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKSAhaW1wb3J0YW50O1xuLy8gICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XG4vLyAgIGN1cnNvcjogZGVmYXVsdDtcbi8vICAgbGV0dGVyLXNwYWNpbmc6IDA7XG4vLyB9XG5cbi8vIC5zZWxlY3RhYmxlLFxuLy8gLnNlbGVjdGFibGUgKiB7XG4vLyAgIGN1cnNvcjogYXV0bztcbi8vICAgdXNlci1zZWxlY3Q6IHRleHQ7XG4vLyAgIC13ZWJraXQtdG91Y2gtY2FsbG91dDogdGV4dDtcbi8vICAgLXdlYmtpdC11c2VyLXNlbGVjdDogdGV4dDtcbi8vICAgLWtodG1sLXVzZXItc2VsZWN0OiB0ZXh0O1xuLy8gICAtbW96LXVzZXItc2VsZWN0OiB0ZXh0O1xuLy8gICAtbXMtdXNlci1zZWxlY3Q6IHRleHQ7XG4vLyB9XG5cbi8vIGh0bWwsXG4vLyBib2R5IHtcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogJGJnLWNvbG9yO1xuLy8gICBjb2xvcjogJGZnLWNvbG9yO1xuLy8gICBtYXJnaW46IDA7XG4vLyAgIHBhZGRpbmc6IDA7XG4vLyAgIGZvbnQtc2l6ZTogMTBwdDtcbi8vICAgaGVpZ2h0OiAxMDAlO1xuLy8gICBvdmVyZmxvdzogYXV0bztcbi8vIH1cblxuLy8gLndpdGgtc2hhZG93IHtcbi8vICAgYm94LXNoYWRvdzogNnB4IDZweCAxMHB4IHRyYW5zcGFyZW50aXplKGJsYWNrLCAwLjkpLCAtNnB4IC02cHggMTBweCB3aGl0ZTtcbi8vIH1cblxuLy8gLm91dHNldCB7XG4vLyAgIEBleHRlbmQgLndpdGgtc2hhZG93O1xuXG4vLyAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4vLyAgIGJhY2tncm91bmQ6ICRiZy1jb2xvcjtcbi8vIH1cblxuLy8gLmluc2V0IHtcbi8vICAgYm9yZGVyLXJhZGl1czogMTBweDtcbi8vICAgYm94LXNoYWRvdzogMCAwIHRyYW5zcGFyZW50LCAwIDAgdHJhbnNwYXJlbnQsXG4vLyAgICAgaW5zZXQgM3B4IDNweCA1cHggdHJhbnNwYXJlbnRpemUoYmxhY2ssIDAuOSksIGluc2V0IC0zcHggLTNweCA1cHggd2hpdGU7XG4vLyAgIGJhY2tncm91bmQ6IGxpZ2h0ZW4oJGJnLWNvbG9yLCAyJSk7XG4vLyB9XG5cbi8vIC5wYXBlciB7XG4vLyAgIEBleHRlbmQgLm91dHNldDtcbi8vICAgcGFkZGluZzogMTBweCAyMHB4IDIwcHg7XG4vLyAgIG1hcmdpbi10b3A6IDIwcHg7XG4vLyAgIG1pbi1oZWlnaHQ6IDEwMHB4O1xuLy8gICBmb250LXNpemU6IDEuMmVtO1xuLy8gICBiYWNrZ3JvdW5kOiAkYmctY29sb3I7XG4vLyB9XG5cbi8vIHNlY3Rpb24sXG4vLyBhcnRpY2xlLFxuLy8gLnNlY3Rpb24sXG4vLyAuYXJ0aWNsZSxcbi8vIC5wYXBlciB7XG4vLyAgIGxpbmUtaGVpZ2h0OiAyZW07XG4vLyAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbi8vICAgd29yZC1icmVhazogbm9ybWFsO1xuLy8gICBsaW5lLWhlaWdodDogMmVtO1xuLy8gfVxuXG4vLyBpbnB1dFt0eXBlPVwidGV4dFwiXSxcbi8vIGlucHV0W3R5cGU9XCJzZWFyY2hcIl0sXG4vLyBpbnB1dFt0eXBlPVwidGVsXCJdLFxuLy8gaW5wdXRbdHlwZT1cInVybFwiXSxcbi8vIGlucHV0W3R5cGU9XCJlbWFpbFwiXSxcbi8vIGlucHV0W3R5cGU9XCJwYXNzd29yZFwiXSxcbi8vIGlucHV0W3R5cGU9XCJkYXRlXCJdLFxuLy8gaW5wdXRbdHlwZT1cIm1vbnRoXCJdLFxuLy8gaW5wdXRbdHlwZT1cIndlZWtcIl0sXG4vLyBpbnB1dFt0eXBlPVwidGltZVwiXSxcbi8vIGlucHV0W3R5cGU9XCJudW1iZXJcIl0sXG4vLyBpbnB1dFt0eXBlPVwiY29sb3JcIl0sXG4vLyBzZWxlY3QsXG4vLyB0ZXh0YXJlYSB7XG4vLyAgIGJvcmRlcjogMDtcbi8vICAgYmFja2dyb3VuZDogJGJnLWNvbG9yO1xuLy8gICBjb2xvcjogJGZnLWNvbG9yO1xuLy8gICBmb250LXdlaWdodDogbm9ybWFsO1xuLy8gICBwYWRkaW5nOiAwIDEuMjVlbTtcbi8vICAgbGluZS1oZWlnaHQ6IDEuMjVlbTtcbi8vICAgaGVpZ2h0OiAzLjVlbTtcbi8vICAgbWFyZ2luOiAxMHB4IDA7XG4vLyAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuLy8gICBjdXJzb3I6IHRleHQ7XG4vLyAgIHVzZXItc2VsZWN0OiB0ZXh0O1xuLy8gICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IHRleHQ7XG4vLyAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IHRleHQ7XG4vLyAgIC1raHRtbC11c2VyLXNlbGVjdDogdGV4dDtcbi8vICAgLW1vei11c2VyLXNlbGVjdDogdGV4dDtcbi8vICAgLW1zLXVzZXItc2VsZWN0OiB0ZXh0O1xuLy8gICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuMnM7XG5cbi8vICAgJjpub3Qoc2VsZWN0KSB7XG4vLyAgICAgQGV4dGVuZCAuaW5zZXQ7XG5cbi8vICAgICAmOmZvY3VzIHtcbi8vICAgICAgIEBleHRlbmQgLm91dHNldDtcbi8vICAgICB9XG4vLyAgIH1cbi8vIH1cblxuLy8gdGV4dGFyZWEge1xuLy8gICBoZWlnaHQ6IDM1MHB4O1xuLy8gICBwYWRkaW5nOiAxLjI1ZW07XG4vLyB9XG5cbi8vIHNlbGVjdCB7XG4vLyAgIEBleHRlbmQgLm91dHNldDtcblxuLy8gICBjdXJzb3I6IHBvaW50ZXI7XG4vLyAgIGJhY2tncm91bmQ6IHVybChkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUIyWlhKemFXOXVQU0l4TGpFaUlIWnBaWGRDYjNnOUlqQWdNQ0F4T1NBeE9TSWdlRzFzYm5NOUltaDBkSEE2THk5M2QzY3Vkek11YjNKbkx6SXdNREF2YzNabklqNDhaeUIwY21GdWMyWnZjbTA5SW0xaGRISnBlQ2d1TURNMElEQWdNQ0F1TURNMElDMDJMamdnTVM0M1pTMDFLU0lnYzNSNWJHVTlJbVpwYkd3Nkl6ZGlOMlU0WXlJK1BIQmhkR2dnWkQwaWJUUTRNQ0F6TkRRdE1qRXhMVEl4TW1NdE1UWXRNVFl0TkRFdE1UWXROVGNnTUMweE5pQXhOaTB4TmlBME1pQXdJRFUzYkRJek9DQXlNemxqT0M0MElEZ3VOU0F5TUNBeE1pQXpNU0F4TWlBeE1TQXdMalUySURJeUxUTXVNaUF6TVMweE1td3lNemd0TWpNNVl6RTJMVEUySURFMkxUUXlJREF0TlRkekxUUXhMVEUyTFRVM0lEQjZJaUJ6ZEhsc1pUMGlabWxzYkRvak4ySTNaVGhqSWk4K1BDOW5Qand2YzNablBnbz0pXG4vLyAgICAgbm8tcmVwZWF0IHJpZ2h0IDFlbSBjZW50ZXI7XG4vLyAgIGJhY2tncm91bmQtc2l6ZTogMS4yZW07XG4vLyAgIHBhZGRpbmctcmlnaHQ6IDNlbTtcbi8vIH1cblxuLy8gaW5wdXQ6OnBsYWNlaG9sZGVyLFxuLy8gdGV4dGFyZWE6OnBsYWNlaG9sZGVyIHtcbi8vICAgb3BhY2l0eTogMTtcbi8vICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzO1xuLy8gICBjb2xvcjogaW5oZXJpdDtcbi8vIH1cblxuLy8gaW5wdXQ6Zm9jdXM6OnBsYWNlaG9sZGVyLFxuLy8gdGV4dGFyZWE6Zm9jdXM6OnBsYWNlaG9sZGVyIHtcbi8vICAgb3BhY2l0eTogMC4yO1xuLy8gfVxuXG4vLyBpbnB1dDotbXMtaW5wdXQtcGxhY2Vob2xkZXIsXG4vLyB0ZXh0YXJlYTotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuLy8gICBvcGFjaXR5OiAxO1xuLy8gICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnM7XG4vLyAgIGNvbG9yOiBpbmhlcml0O1xuLy8gfVxuXG4vLyBpbnB1dDpmb2N1czotbXMtaW5wdXQtcGxhY2Vob2xkZXIsXG4vLyB0ZXh0YXJlYTpmb2N1czotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuLy8gICBvcGFjaXR5OiAwLjI7XG4vLyB9XG5cbi8vIGlucHV0W3R5cGU9XCJzZWFyY2hcIl06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24sXG4vLyBpbnB1dFt0eXBlPVwic2VhcmNoXCJdOjotd2Via2l0LXNlYXJjaC1jYW5jZWwtYnV0dG9uLFxuLy8gaW5wdXRbdHlwZT1cInNlYXJjaFwiXTo6LXdlYmtpdC1zZWFyY2gtcmVzdWx0cy1idXR0b24sXG4vLyBpbnB1dFt0eXBlPVwic2VhcmNoXCJdOjotd2Via2l0LXNlYXJjaC1yZXN1bHRzLWRlY29yYXRpb24ge1xuLy8gICBkaXNwbGF5OiBub25lO1xuLy8gfVxuXG4vLyBidXR0b24sXG4vLyBpbnB1dFt0eXBlPVwiYnV0dG9uXCJdLFxuLy8gaW5wdXRbdHlwZT1cInN1Ym1pdFwiXSxcbi8vIGlucHV0W3R5cGU9XCJyZXNldFwiXSB7XG4vLyAgIEBleHRlbmQgLm91dHNldDtcblxuLy8gICBib3JkZXI6IDA7XG4vLyAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuLy8gICBwYWRkaW5nOiAxMHB4IDA7XG4vLyAgIHdpZHRoOiA4ZW07XG4vLyAgIHRleHQtYWxpZ246IGNlbnRlcjtcbi8vICAgY3Vyc29yOiBwb2ludGVyO1xuLy8gICBjb2xvcjogaW5oZXJpdDtcbi8vICAgZm9udC1zaXplOiAxLjFyZW07XG4vLyAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGJhY2tncm91bmQtY29sb3IsIGJveC1zaGFkb3c7XG4vLyAgIHRyYW5zaXRpb24tZGVsYXk6IDAuMnM7XG4vLyAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMnM7XG5cbi8vICAgJi5hY3RpdmUsXG4vLyAgICY6YWN0aXZlIHtcbi8vICAgICBAZXh0ZW5kIC5pbnNldDtcblxuLy8gICAgIHRyYW5zaXRpb24tZGVsYXk6IDBzO1xuLy8gICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMXM7XG4vLyAgIH1cblxuLy8gICBAZWFjaCAkbmFtZSwgJGNvbG9yIGluIChcInJlZFwiOiAkcmVkLCBcImdyZWVuXCI6ICRncmVlbiwgXCJibHVlXCI6ICRibHVlKSB7XG4vLyAgICAgQGF0LXJvb3QgLiN7JG5hbWV9LWJ1dHRvbixcbi8vICAgICAgICYuI3skbmFtZX0tYnV0dG9uIHtcbi8vICAgICAgIEBleHRlbmQgYnV0dG9uO1xuXG4vLyAgICAgICAkX2JnLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAkY29sb3IgMzAlLCBsaWdodGVuKCRjb2xvciwgNiUpIDgwJSk7XG5cbi8vICAgICAgIGNvbG9yOiB3aGl0ZTtcbi8vICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuLy8gICAgICAgdGV4dC1zaGFkb3c6IDAgMC4xZW0gMC4xZW0gdHJhbnNwYXJlbnRpemUoYmxhY2ssIDAuMyk7XG4vLyAgICAgICBiYWNrZ3JvdW5kOiAkX2JnLWltYWdlO1xuLy8gICAgICAgYm94LXNoYWRvdzogMCAwIDAuNWVtIHRyYW5zcGFyZW50aXplKCRjb2xvciwgMC4zKSwgMCAwIHRyYW5zcGFyZW50LFxuLy8gICAgICAgICBpbnNldCAwIC01cHggMCB0cmFuc3BhcmVudGl6ZShibGFjaywgMC45NSksXG4vLyAgICAgICAgIGluc2V0IDAgMnB4IDAgdHJhbnNwYXJlbnRpemUod2hpdGUsIDAuOCk7XG4vLyAgICAgICBib3JkZXItcmFkaXVzOiA2cHggNnB4IDhweCA4cHg7XG4vLyAgICAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBib3gtc2hhZG93LCBib3JkZXItcmFkaXVzO1xuXG4vLyAgICAgICAmLmFjdGl2ZSxcbi8vICAgICAgICY6YWN0aXZlIHtcbi8vICAgICAgICAgYmFja2dyb3VuZDogJF9iZy1pbWFnZTtcbi8vICAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuLy8gICAgICAgICBib3gtc2hhZG93OiAwIDAgdHJhbnNwYXJlbnQsIDAgMCB0cmFuc3BhcmVudCxcbi8vICAgICAgICAgICBpbnNldCAwIDJweCA1cHggMnB4IHRyYW5zcGFyZW50aXplKGJsYWNrLCAwLjgpO1xuLy8gICAgICAgfVxuLy8gICAgIH1cbi8vICAgfVxuLy8gfVxuXG4vLyBsYWJlbCB7XG4vLyAgICYsXG4vLyAgICYgKiB7XG4vLyAgICAgY3Vyc29yOiBwb2ludGVyO1xuLy8gICB9XG5cbi8vICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuLy8gICBwYWRkaW5nOiAwLjU2ZW0gMDtcbi8vIH1cblxuLy8gYSB7XG4vLyAgICYsXG4vLyAgICY6bGluayxcbi8vICAgJjp2aXNpdGVkLFxuLy8gICAmOmhvdmVyICY6YWN0aXZlIHtcbi8vICAgICAmLFxuLy8gICAgICYgKiB7XG4vLyAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4vLyAgICAgfVxuXG4vLyAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4vLyAgICAgY29sb3I6ICRibHVlO1xuLy8gICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuLy8gICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbi8vICAgfVxuLy8gfVxuXG4vLyBoMSxcbi8vIGgyLFxuLy8gaDMsXG4vLyBoNCxcbi8vIGg1LFxuLy8gaDYge1xuLy8gICBsaW5lLWhlaWdodDogMS41ZW07XG4vLyB9XG5cbi8vIGgxIHtcbi8vICAgZm9udC1zaXplOiA0ZW07XG4vLyAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuLy8gICBtYXJnaW46IDAuN2VtIDA7XG4vLyB9XG5cbi8vIGgyIHtcbi8vICAgZm9udC1zaXplOiAzZW07XG4vLyAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuLy8gICBtYXJnaW46IDAuOGVtIDA7XG4vLyB9XG5cbi8vIGgzIHtcbi8vICAgZm9udC1zaXplOiAyLjVlbTtcbi8vICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4vLyAgIG1hcmdpbjogMC45ZW0gMDtcbi8vIH1cblxuLy8gaDQge1xuLy8gICBmb250LXNpemU6IDJlbTtcbi8vICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4vLyAgIG1hcmdpbjogMWVtIDA7XG4vLyB9XG5cbi8vIGg1IHtcbi8vICAgbWFyZ2luOiAwLjVlbSAwO1xuLy8gICBmb250LXNpemU6IDEuMmVtO1xuLy8gICBmb250LXdlaWdodDogbm9ybWFsO1xuLy8gfVxuXG4vLyBoNiB7XG4vLyAgIG1hcmdpbjogMWVtIDAgMWVtIDEuNGVtO1xuLy8gICBmb250LXNpemU6IDFlbTtcbi8vICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4vLyB9XG5cbi8vIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSxcbi8vIGlucHV0W3R5cGU9XCJyYWRpb1wiXSB7XG4vLyAgICRfYm9yZGVyLXdpZHRoOiAwLjE1ZW07XG4vLyAgICRfYm94LXNoYWRvdzogMnB4IDJweCAzcHggdHJhbnNwYXJlbnRpemUoYmxhY2ssIDAuOCksIC0ycHggLTJweCAzcHggd2hpdGUsXG4vLyAgICAgaW5zZXQgMXB4IDFweCAycHggdHJhbnNwYXJlbnRpemUoYmxhY2ssIDAuOCksIGluc2V0IC0xcHggLTFweCAycHggd2hpdGU7XG4vLyAgIGZvbnQtc2l6ZTogMWVtO1xuLy8gICBjdXJzb3I6IHBvaW50ZXI7XG4vLyAgIGhlaWdodDogMS4yZW07XG4vLyAgIHdpZHRoOiAxLjJlbTtcbi8vICAgbWFyZ2luOiAwIDAuM2VtO1xuLy8gICBib3gtc2hhZG93OiAkX2JveC1zaGFkb3c7XG4vLyAgIGJvcmRlcjogJF9ib3JkZXItd2lkdGggc29saWQgJGJnLWNvbG9yO1xuLy8gICB2ZXJ0aWNhbC1hbGlnbjogdGV4dC1ib3R0b207XG4vLyAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGJhY2tncm91bmQsIGJveC1zaGFkb3c7XG4vLyAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMnM7XG5cbi8vICAgJjphY3RpdmUge1xuLy8gICAgIGJveC1zaGFkb3c6ICRfYm94LXNoYWRvdywgaW5zZXQgMCAwLjFlbSAwLjI1ZW0gdHJhbnNwYXJlbnRpemUoYmxhY2ssIDAuOCk7XG4vLyAgIH1cblxuLy8gICAmOmNoZWNrZWQge1xuLy8gICAgIGJvcmRlci13aWR0aDogMC4xZW07XG4vLyAgICAgYm9yZGVyLWNvbG9yOiBkYXJrZW4oJGJsdWUsIDEwJSk7XG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJsdWU7XG4vLyAgIH1cbi8vIH1cblxuLy8gaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdIHtcbi8vICAgYm9yZGVyLXJhZGl1czogMjUlO1xuXG4vLyAgICY6Y2hlY2tlZCB7XG4vLyAgICAgYm94LXNoYWRvdzogJGdsb3ctc2hhZG93LCBpbnNldCAwIC0wLjFlbSAwIHRyYW5zcGFyZW50aXplKGJsYWNrLCAwLjgpLFxuLy8gICAgICAgaW5zZXQgMCAwLjFlbSAwLjFlbSB0cmFuc3BhcmVudGl6ZSh3aGl0ZSwgMC44KTtcbi8vICAgfVxuLy8gfVxuXG4vLyBpbnB1dFt0eXBlPVwicmFkaW9cIl0ge1xuLy8gICBib3JkZXItcmFkaXVzOiAxMDAlO1xuXG4vLyAgICY6Y2hlY2tlZCB7XG4vLyAgICAgYm94LXNoYWRvdzogJGdsb3ctc2hhZG93O1xuLy8gICAgIGJveC1zaGFkb3c6ICRnbG93LXNoYWRvdywgaW5zZXQgMCAwLjEyZW0gMC4xZW0gdHJhbnNwYXJlbnRpemUod2hpdGUsIDAuNzUpO1xuLy8gICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDAuMTVlbTtcbi8vICAgfVxuLy8gfVxuXG4vLyAuY2hlY2t0ZXh0IHtcbi8vICAgd2lkdGg6IGF1dG87XG4vLyAgIG1hcmdpbjogMC41ZW07XG5cbi8vICAgaW5wdXQge1xuLy8gICAgIGRpc3BsYXk6IG5vbmU7XG5cbi8vICAgICArIHNwYW4ge1xuLy8gICAgICAgQGV4dGVuZCBidXR0b247XG5cbi8vICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuLy8gICAgICAgcGFkZGluZzogMWVtO1xuLy8gICAgICAgdHJhbnNpdGlvbi1kZWxheTogMHM7XG4vLyAgICAgfVxuXG4vLyAgICAgJjpjaGVja2VkICsgc3BhbiB7XG4vLyAgICAgICBAZXh0ZW5kIC5ibHVlLWJ1dHRvbjtcblxuLy8gICAgICAgcGFkZGluZzogMWVtO1xuLy8gICAgIH1cbi8vICAgfVxuLy8gfVxuXG4vLyAuc3dpdGNoIHtcbi8vICAgJF9oZWlnaHQ6IDJyZW07XG4vLyAgICRfd2lkdGg6IDhyZW07XG4vLyAgICRfaGFuZGxlLXdpZHRoOiAkX2hlaWdodDtcbi8vICAgJF9oYW5kbGUtdHJhbnNsYXRpb246ICRfd2lkdGggLSAkX2hhbmRsZS13aWR0aDtcblxuLy8gICBoZWlnaHQ6ICRfaGVpZ2h0O1xuLy8gICB3aWR0aDogJF93aWR0aDtcbi8vICAgcGFkZGluZzogMDtcbi8vICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4vLyAgIGlucHV0IHtcbi8vICAgICBkaXNwbGF5OiBub25lO1xuXG4vLyAgICAgKyBkaXYge1xuLy8gICAgICAgaGVpZ2h0OiAxMDAlO1xuLy8gICAgICAgd2lkdGg6IDEwMCU7XG4vLyAgICAgICBib3JkZXItcmFkaXVzOiA5OTlweDtcbi8vICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuLy8gICAgICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYm94LXNoYWRvdywgYmFja2dyb3VuZC1jb2xvcjtcbi8vICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMnM7XG4vLyAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjJzO1xuLy8gICAgICAgYm94LXNoYWRvdzogM3B4IDNweCAycHggLTJweCB0cmFuc3BhcmVudGl6ZShibGFjaywgMC45KSxcbi8vICAgICAgICAgaW5zZXQgMnB4IDJweCAycHggMXB4IHRyYW5zcGFyZW50aXplKGJsYWNrLCAwLjkpLFxuLy8gICAgICAgICBpbnNldCAtMnB4IC0ycHggMXB4IHdoaXRlO1xuXG4vLyAgICAgICAmOjpiZWZvcmUge1xuLy8gICAgICAgICBjb250ZW50OiBcIlwiO1xuLy8gICAgICAgICBkaXNwbGF5OiBibG9jaztcbi8vICAgICAgICAgaGVpZ2h0OiBjYWxjKCN7JF9oYW5kbGUtd2lkdGh9ICsgNHB4KTtcbi8vICAgICAgICAgd2lkdGg6IGNhbGMoI3skX2hhbmRsZS13aWR0aH0gKyA0cHgpO1xuLy8gICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuLy8gICAgICAgICBib3JkZXI6IHNvbGlkIHdoaXRlIDNweDtcbi8vICAgICAgICAgYmFja2dyb3VuZDogJGJsdWU7XG4vLyAgICAgICAgIGJveC1zaGFkb3c6IDAgM3B4IDEwcHggdHJhbnNwYXJlbnRpemUoYmxhY2ssIDAuOCksXG4vLyAgICAgICAgICAgaW5zZXQgMCAtMXB4IDNweCB0cmFuc3BhcmVudGl6ZShibGFjaywgMC45KTtcbi8vICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTZweCk7XG4vLyAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzO1xuLy8gICAgICAgfVxuLy8gICAgIH1cblxuLy8gICAgICY6Y2hlY2tlZCArIGRpdiB7XG4vLyAgICAgICBiYWNrZ3JvdW5kOiAkYmx1ZTtcbi8vICAgICAgIGJveC1zaGFkb3c6ICRnbG93LXNoYWRvdywgaW5zZXQgMCAycHggMnB4IDJweCB0cmFuc3BhcmVudGl6ZShibGFjaywgMC43KSxcbi8vICAgICAgICAgaW5zZXQgMCAwIHRyYW5zcGFyZW50O1xuXG4vLyAgICAgICAmOjpiZWZvcmUge1xuLy8gICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgkX2hhbmRsZS10cmFuc2xhdGlvbiwgLTZweCk7XG4vLyAgICAgICB9XG4vLyAgICAgfVxuLy8gICB9XG4vLyB9XG5cbi8vIGhyIHtcbi8vICAgQGV4dGVuZCAuaW5zZXQ7XG4vLyAgIHdpZHRoOiA3MiU7XG4vLyAgIGhlaWdodDogOHB4O1xuLy8gICBmbG9hdDogcmlnaHQ7XG4vLyAgIGJvcmRlcjogMDtcbi8vIH1cblxuLy8gY29kZSxcbi8vIHByZSB7XG4vLyAgIHBhZGRpbmc6IDAuNWVtIDFlbTtcbi8vICAgYm9yZGVyLXJhZGl1czogNHB4O1xuLy8gICBvdmVyZmxvdzogYXV0bztcbi8vICAgYm94LXNoYWRvdzogMCA1cHggMzBweCAwIHRyYW5zcGFyZW50aXplKGJsYWNrLCAwLjk1KTtcbi8vIH1cblxuLy8gY29kZSB7XG4vLyAgIGJhY2tncm91bmQ6ICNlNmU2ZTY7XG4vLyB9XG5cbi8vIHByZSB7XG4vLyAgIGJhY2tncm91bmQ6IHdoaXRlO1xuLy8gICBtYXJnaW46IDRlbSAwO1xuLy8gfVxuXG4vLyBjb2RlLFxuLy8gcHJlIHtcbi8vICAgJixcbi8vICAgJiAqIHtcbi8vICAgICBmb250LXNpemU6IDAuOXJlbTtcbi8vICAgICBsaW5lLWhlaWdodDogMmVtO1xuLy8gICAgIGN1cnNvcjogYXV0bztcbi8vICAgICB1c2VyLXNlbGVjdDogdGV4dDtcbi8vICAgICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IHRleHQ7XG4vLyAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogdGV4dDtcbi8vICAgICAta2h0bWwtdXNlci1zZWxlY3Q6IHRleHQ7XG4vLyAgICAgLW1vei11c2VyLXNlbGVjdDogdGV4dDtcbi8vICAgICAtbXMtdXNlci1zZWxlY3Q6IHRleHQ7XG4vLyAgIH1cbi8vIH1cblxuLy8gYmxvY2txdW90ZSB7XG4vLyAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuLy8gICBwYWRkaW5nOiAwLjVlbSAxZW07XG4vLyAgIGJvcmRlci1yYWRpdXM6IDRweDtcbi8vICAgYm94LXNoYWRvdzogMCA1cHggMzBweCAwIHRyYW5zcGFyZW50aXplKGJsYWNrLCAwLjk1KTtcbi8vICAgYm9yZGVyLWxlZnQ6IDZweCBzb2xpZCAkYmx1ZTtcbi8vIH1cbiIsIkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnQ2F2ZWF0JztcbiAgICBzcmM6IHVybCgnLi4vLi4vZm9udHMvQm9sZC9DYXZlYXQtQm9sZC53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcbiAgICAgICAgdXJsKCcuLi8uLi9mb250cy9Cb2xkL0NhdmVhdC1Cb2xkLndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC1kaXNwbGF5OiBzd2FwO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ0NhdmVhdCc7XG4gICAgc3JjOiB1cmwoJy4uLy4uL2ZvbnRzL1JlZ3VsYXIvQ2F2ZWF0LVJlZ3VsYXIud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXG4gICAgICAgIHVybCgnLi4vLi4vZm9udHMvUmVndWxhci9DYXZlYXQtUmVndWxhci53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC1kaXNwbGF5OiBzd2FwO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdGaWd1cmluZVN5bWJvbFQxJztcbiAgc3JjOiB1cmwoJy4uLy4uL2ZvbnRzLzNyZCBQYXJ0eS9DaGVzc1ZhcmlhbnRzL0ZpZ3VyaW5lU3ltYm9sVDFCb2xkLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxuICAgICAgdXJsKCcuLi8uLi9mb250cy8zcmQgUGFydHkvQ2hlc3NWYXJpYW50cy9GaWd1cmluZVN5bWJvbFQxQm9sZC53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnRmlndXJpbmVTeW1ib2xUMSc7XG4gIHNyYzogdXJsKCcuLi8uLi9mb250cy8zcmQgUGFydHkvQ2hlc3NWYXJpYW50cy9GaWd1cmluZVN5bWJvbFQxLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxuICAgICAgdXJsKCcuLi8uLi9mb250cy8zcmQgUGFydHkvQ2hlc3NWYXJpYW50cy9GaWd1cmluZVN5bWJvbFQxLndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ1NhbmN0dWFyeVBsYXlncm91bmQnO1xuICBzcmM6IHVybCgnLi4vLi4vZm9udHMvM3JkIFBhcnR5L1NhbmN0dWFyeVBsYXlncm91bmQud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXG4gICAgICB1cmwoJy4uLy4uL2ZvbnRzLzNyZCBQYXJ0eS9TYW5jdHVhcnlQbGF5Z3JvdW5kLndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG59XG5cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnQW1pdGEnO1xuICBzcmM6IHVybCgnLi4vLi4vZm9udHMvM3JkIFBhcnR5L0FtaXRhL0FtaXRhLVJlZ3VsYXIud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXG4gICAgICB1cmwoJy4uLy4uL2ZvbnRzLzNyZCBQYXJ0eS9BbWl0YS9BbWl0YS1SZWd1bGFyLndvZmYyJykgZm9ybWF0KCd3b2ZmJyk7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xufSIsIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJDYXZlYXRcIjtcbiAgc3JjOiB1cmwoXCIuLi8uLi9mb250cy9Cb2xkL0NhdmVhdC1Cb2xkLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpLCB1cmwoXCIuLi8uLi9mb250cy9Cb2xkL0NhdmVhdC1Cb2xkLndvZmZcIikgZm9ybWF0KFwid29mZlwiKTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkNhdmVhdFwiO1xuICBzcmM6IHVybChcIi4uLy4uL2ZvbnRzL1JlZ3VsYXIvQ2F2ZWF0LVJlZ3VsYXIud29mZjJcIikgZm9ybWF0KFwid29mZjJcIiksIHVybChcIi4uLy4uL2ZvbnRzL1JlZ3VsYXIvQ2F2ZWF0LVJlZ3VsYXIud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJGaWd1cmluZVN5bWJvbFQxXCI7XG4gIHNyYzogdXJsKFwiLi4vLi4vZm9udHMvM3JkIFBhcnR5L0NoZXNzVmFyaWFudHMvRmlndXJpbmVTeW1ib2xUMUJvbGQud29mZjJcIikgZm9ybWF0KFwid29mZjJcIiksIHVybChcIi4uLy4uL2ZvbnRzLzNyZCBQYXJ0eS9DaGVzc1ZhcmlhbnRzL0ZpZ3VyaW5lU3ltYm9sVDFCb2xkLndvZmZcIikgZm9ybWF0KFwid29mZlwiKTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkZpZ3VyaW5lU3ltYm9sVDFcIjtcbiAgc3JjOiB1cmwoXCIuLi8uLi9mb250cy8zcmQgUGFydHkvQ2hlc3NWYXJpYW50cy9GaWd1cmluZVN5bWJvbFQxLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpLCB1cmwoXCIuLi8uLi9mb250cy8zcmQgUGFydHkvQ2hlc3NWYXJpYW50cy9GaWd1cmluZVN5bWJvbFQxLndvZmZcIikgZm9ybWF0KFwid29mZlwiKTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiU2FuY3R1YXJ5UGxheWdyb3VuZFwiO1xuICBzcmM6IHVybChcIi4uLy4uL2ZvbnRzLzNyZCBQYXJ0eS9TYW5jdHVhcnlQbGF5Z3JvdW5kLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpLCB1cmwoXCIuLi8uLi9mb250cy8zcmQgUGFydHkvU2FuY3R1YXJ5UGxheWdyb3VuZC53b2ZmXCIpIGZvcm1hdChcIndvZmZcIik7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkFtaXRhXCI7XG4gIHNyYzogdXJsKFwiLi4vLi4vZm9udHMvM3JkIFBhcnR5L0FtaXRhL0FtaXRhLVJlZ3VsYXIud29mZjJcIikgZm9ybWF0KFwid29mZjJcIiksIHVybChcIi4uLy4uL2ZvbnRzLzNyZCBQYXJ0eS9BbWl0YS9BbWl0YS1SZWd1bGFyLndvZmYyXCIpIGZvcm1hdChcIndvZmZcIik7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xufVxuLyoqKioqKioqKioqKioqKioqKiogTWVudSAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqKioqKiogTWVudSBDb250cm9scyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIENvbnRhaW5lciBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBDb250YWluZXIgVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgQ29udGFpbmVyIFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIEhpZ2hsaWdodCBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBBbm5vdGF0aW9uIFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIFZhcmlhdGlvbiBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBQbHkgVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqKiBDb250cm9sIENvbG9ycyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKiogQm9hcmQgQ29sb3JzICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqKiBGb250IFNpemVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbjpyb290IHtcbiAgLS1iZy1jb2xvcjogI2YyZjNmNztcbiAgLS1mZy1jb2xvcjogIzM4M2E0MTtcbiAgLS1yZWQ6ICNlNDMwMzA7XG4gIC0tZ3JlZW46ICMxOWExODc7XG4gIC0tYmx1ZTogIzM2N2JmMDtcbiAgLS1kYXJrLWJsdWU6ICMyNjVhYjE7XG4gIC0tbWFyb29uOiAjYjgxNzRjO1xuICAtLXB1cnBsZTogIzhjNDJhYjtcbn1cblxubWF0LWRpdmlkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luOiAycHg7XG59XG5cbi5tYXQtZ3JpZC10aWxlIHtcbiAgYmFja2dyb3VuZDogIzU4NTg1OGZmO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtZmFtaWx5OiBcIkZpZ3VyaW5lU3ltYm9sVDFcIjtcbiAgZm9udC13ZWlnaHQ6IDM2MDtcbiAgbWF4LXdpZHRoOiAxNjRweDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICB0ZXh0LWFsaWduOiBhdXRvO1xufVxuXG4uc2NvcmUtdGl0bGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMHB4O1xuICBsZWZ0OiAtMnB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICAtby11c2VyLXNlbGVjdDogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbi5zY29yZS1saXN0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwcHg7XG4gIHJpZ2h0OiAwcHg7XG4gIHBhZGRpbmctbGVmdDogMTJweDtcbiAgcGFkZGluZy10b3A6IDJweDtcbiAgcGFkZGluZy1ib3R0b206IDJweDtcbiAgdG9wOiAzMnB4O1xuICBoZWlnaHQ6IGNhbGMoOTklIC0gMzBweCk7XG4gIG92ZXJmbG93OiBhdXRvO1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW8tdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1nc0xpc3RCYWNrZ3JvdW5kKTtcbn1cblxuLmdhbWVzY29yZS1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1nc0JhY2tncm91bmQpO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlcjogMnB4IGJsYWNrIHNvbGlkO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBsaW5lLWhlaWdodDogdmFyKC0tZ3NUZXh0U2l6ZSk7XG4gIHdvcmQtYnJlYWs6IGtlZXAtYWxsO1xuICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xufVxuXG4uZ3MtbWVudSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIHRvcDogMTAlO1xuICBsZWZ0OiAxMCU7XG4gIHdpZHRoOiA4MCU7XG4gIGhlaWdodDogODAlO1xuICBtYXgtaGVpZ2h0OiA0ODBweDtcbiAgbWF4LXdpZHRoOiA0ODBweDtcbn1cblxuLnJlc2l6ZS1oYW5kbGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNsaXA6IHRydWU7XG4gIHRvcDogY2FsYyg1MCUgLSAzZW0pO1xuICB3aWR0aDogMzZweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3JkZXI6IHNvbGlkIGdyZXkgM3B4O1xuICBoZWlnaHQ6IDZlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwYTtcbiAgY3Vyc29yOiBncmFiO1xufVxuXG4uaW5wdXQtYm94IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMnB4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgYm9yZGVyOiBzb2xpZCBibGFjayA0cHg7XG59XG5cbi5zY29yZS10YWJsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwcHg7XG4gIHJpZ2h0OiAwcHg7XG4gIHBhZGRpbmctbGVmdDogMTJweDtcbiAgcGFkZGluZy10b3A6IDJweDtcbiAgcGFkZGluZy1ib3R0b206IDJweDtcbiAgdG9wOiAzMnB4O1xuICBoZWlnaHQ6IGNhbGMoOTklIC0gMzBweCk7XG4gIG92ZXJmbG93OiBhdXRvO1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW8tdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ScoreFlowComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'score-flow',
                templateUrl: './score-flow.component.html',
                styleUrls: ['./score-flow.component.scss'],
            }]
    }], function () { return [{ type: src_app_services_olga_service__WEBPACK_IMPORTED_MODULE_2__["OlgaService"] }]; }, { scoreItems: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"],
            args: [_flow_item_flow_item_component__WEBPACK_IMPORTED_MODULE_1__["FlowItemComponent"]]
        }], currentItem: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], items: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], result: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/olga-score/score-table/score-column/score-column.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/olga-score/score-table/score-column/score-column.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ScoreColumnComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScoreColumnComponent", function() { return ScoreColumnComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_olga_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/olga.service */ "./src/app/services/olga.service.ts");



function ScoreColumnComponent_div_0_Template(rf, ctx) { if (rf & 1) {
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
function ScoreColumnComponent_table_item_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "table-item", 6);
} if (rf & 2) {
    const row_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("whiteMove", row_r2.white)("blackMove", row_r2.black);
} }
class ScoreColumnComponent {
    constructor(olga) {
        this.olga = olga;
        this.items = [];
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
        this.items = items;
        this.index = index;
        this.size = size;
        this.setItems();
    }
    clearSelection() {
    }
    setItems() {
        if (this.items.length && this.size) {
            let rows = this.items.slice((this.index * 2), (this.index * 2) + (this.size * 2));
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
ScoreColumnComponent.ɵfac = function ScoreColumnComponent_Factory(t) { return new (t || ScoreColumnComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_olga_service__WEBPACK_IMPORTED_MODULE_1__["OlgaService"])); };
ScoreColumnComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ScoreColumnComponent, selectors: [["score-column"]], inputs: { items: "items", index: "index", size: "size" }, outputs: { rows: "rows" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 3, vars: 4, consts: [["class", "header", 4, "ngIf"], [3, "whiteMove", "blackMove", 4, "ngFor", "ngForOf"], [1, "header"], [1, "spacer"], [1, "wheader"], [1, "bheader"], [3, "whiteMove", "blackMove"]], template: function ScoreColumnComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ScoreColumnComponent_div_0_Template, 6, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ScoreColumnComponent_table_item_2_Template, 1, 2, "table-item", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, ctx.olga.showTableHeader));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.rows);
    } }, styles: ["@font-face {\n  font-family: \"Caveat\";\n  src: url('Caveat-Bold.woff2') format(\"woff2\"), url('Caveat-Bold.woff') format(\"woff\");\n  font-weight: bold;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"Caveat\";\n  src: url('Caveat-Regular.woff2') format(\"woff2\"), url('Caveat-Regular.woff') format(\"woff\");\n  font-weight: 600;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"FigurineSymbolT1\";\n  src: url('FigurineSymbolT1Bold.woff2') format(\"woff2\"), url('FigurineSymbolT1Bold.woff') format(\"woff\");\n  font-weight: bold;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"FigurineSymbolT1\";\n  src: url('FigurineSymbolT1.woff2') format(\"woff2\"), url('FigurineSymbolT1.woff') format(\"woff\");\n  font-weight: 600;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"SanctuaryPlayground\";\n  src: url('SanctuaryPlayground.woff2') format(\"woff2\"), url('SanctuaryPlayground.woff') format(\"woff\");\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"Amita\";\n  src: url('Amita-Regular.woff2') format(\"woff2\"), url('Amita-Regular.woff2') format(\"woff\");\n  font-style: normal;\n  font-display: swap;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n[_ngcontent-%COMP%]:root {\n  --bg-color: #f2f3f7;\n  --fg-color: #383a41;\n  --red: #e43030;\n  --green: #19a187;\n  --blue: #367bf0;\n  --dark-blue: #265ab1;\n  --maroon: #b8174c;\n  --purple: #8c42ab;\n}\ntable-item[_ngcontent-%COMP%] {\n  min-height: 32px;\n}\n.header[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 18px;\n  font-weight: bold;\n  display: flex;\n  flex-flow: row nowrap;\n}\n.header[_ngcontent-%COMP%]   .spacer[_ngcontent-%COMP%] {\n  width: var(--gsTablePlyWidth);\n  height: 100%;\n  border: 1px solid transparent;\n}\n.header[_ngcontent-%COMP%]   .wheader[_ngcontent-%COMP%] {\n  width: var(--gsTableItemWidth);\n  height: 100%;\n  border: 2px black solid;\n}\n.header[_ngcontent-%COMP%]   .bheader[_ngcontent-%COMP%] {\n  width: var(--gsTableItemWidth);\n  height: 100%;\n  background: black;\n  color: white;\n  border: 2px black solid;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMuc2NzcyIsInNyYy9hc3NldHMvc2Nzcy9tb2R1bGVzL19mb250cy5zY3NzIiwic3JjL2FwcC9vbGdhLXNjb3JlL3Njb3JlLXRhYmxlL3Njb3JlLWNvbHVtbi9zY29yZS1jb2x1bW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOEVBQUE7QUNBQTtFQUNJLHFCQUFBO0VBQ0EscUZBQUE7RUFFQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNDSjtBREVBO0VBQ0kscUJBQUE7RUFDQSwyRkFBQTtFQUVBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0RKO0FESUE7RUFDRSwrQkFBQTtFQUNBLHVHQUFBO0VBRUEsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDSEY7QURNQTtFQUNFLCtCQUFBO0VBQ0EsK0ZBQUE7RUFFQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNMRjtBRFFBO0VBQ0Usa0NBQUE7RUFDQSxxR0FBQTtFQUVBLGtCQUFBO0VBQ0Esa0JBQUE7QUNQRjtBRFdBO0VBQ0Usb0JBQUE7RUFDQSwwRkFBQTtFQUVBLGtCQUFBO0VBQ0Esa0JBQUE7QUNWRjtBRkRBLCtFQUFBO0FBR0Esa0ZBQUE7QUFLQSwrRUFBQTtBQVVBLCtFQUFBO0FBTUEsK0VBQUE7QUFNQSwrRUFBQTtBQU1BLGdGQUFBO0FBS0EsK0VBQUE7QUFLQSx5RUFBQTtBQUtBLHlFQUFBO0FBSUEsdUVBQUE7QUFRQSxxRUFBQTtBQXlCQTtFQUNFLG1CQUFBO0VBQ0EsbUJBQUE7RUFFQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FFMUVGO0FBN0RBO0VBQ0ksZ0JBQUE7QUFnRUo7QUE3REE7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtBQWdFSjtBQS9ESTtFQUNJLDZCRjJDVTtFRTFDVixZQUFBO0VBQ0EsNkJBQUE7QUFpRVI7QUEvREk7RUFDSSw4QkZxQ1c7RUVwQ1gsWUFBQTtFQUNBLHVCQUFBO0FBaUVSO0FBL0RJO0VBQ0ksOEJGZ0NXO0VFL0JYLFlBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtBQWlFUiIsImZpbGUiOiJzcmMvYXBwL29sZ2Etc2NvcmUvc2NvcmUtdGFibGUvc2NvcmUtY29sdW1uL3Njb3JlLWNvbHVtbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cblxuQGltcG9ydCBcIi4vYXNzZXRzL3Njc3MvbW9kdWxlcy9fZm9udHMuc2Nzc1wiO1xuJGdhbWVzY29yZS1mYW1pbHk6IFwiRmlndXJpbmVTeW1ib2xUMVwiO1xuJGdhbWVzY29yZS1oaWdobGlnaHQ6ICM1ODU4NThmZjtcbiRnYW1lc2NvcmUtZm9yZWdyb3VuZDogd2hpdGU7XG5cbiRyZWQ6ICNlNDMwMzA7XG4kZ3JlZW46ICMxOWExODc7XG4kbGlnaHQtYmx1ZTogIzAwZmZmZmZmO1xuJGJsdWU6ICMzNjdiZjA7XG4kZGFyay1ibHVlOiAjMjY1YWIxO1xuJG1hcm9vbjogI2I4MTc0YztcbiRwdXJwbGU6ICM4YzQyYWI7XG5cbi8vIE1haW4gT0xHQSBDb2xvciBFbGVtZW50IFZhcmlhYmxlc1xuJHRleHRDb2xvcjogdmFyKC0tdGV4dENvbG9yKTsgLy8gTWFpbiBUZXh0IENvbG9yXG4kdGV4dENvbG9yQXR0ZW50aW9uOiB2YXIoLS10ZXh0Q29sb3JBdHRlbnRpb24pOyAvLyBBdHRlbnRpb24gdGV4dFxuJHRleHRDb2xvclJlbW92ZTogdmFyKC0tdGV4dENvbG9yUmVtb3ZlKTsgLy8gUmVtb3ZlL0RlbGV0ZS9DbG9zZVxuJHRleHRDb2xvckFkZDogdmFyKC0tdGV4dENvbG9yQWRkKTsgLy8gQWRkL0NyZWF0ZS9PcGVuXG4kdGV4dENvbG9yQWN0aXZlOiB2YXIoLS10ZXh0Q29sb3JBY3RpdmUpOyAvLyBBZGQvQ3JlYXRlL09wZW5cbiRiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kKTsgLy8gTWFpbiBiYWNrZ3JvdW5kIENvbG9yXG4kYmdDb250YWluZXI6IHZhcigtLWJnQ29udGFpbmVyKTsgLy8gYmFja2dyb3VuZCBvZiBDb250YWluZXJzXG4kYmdNZW51OiB2YXIoLS1iZ01lbnUpOyAvLyBiYWNrZ3JvdW5kIG9mIE1lbnVzXG4kYmdJdGVtOiB2YXIoLS1iZ0l0ZW0pOyAvLyBiYWNrZ3JvdW5kIG9mIEl0ZW1zXG5cbi8vIENvbnRleHQgTWVudVxuJGJnQ29udGV4dDogdmFyKC0tYmdDb250ZXh0KTsgLy8gYmFja2dyb3VuZCBvZiBDb250ZXh0IE1lbnVcbiR0ZXh0Q29sb3JDb250ZXh0OiB2YXIoLS10ZXh0Q29sb3JDb250ZXh0KTsgLy8gdGV4dCBjb2xvciBDb250ZXh0IE1lbnVcbiRib3JkZXJDb250ZXh0OiB2YXIoLS1ib3JkZXJDb250ZXh0KTsgLy8gYm9yZGVyIENvbnRleHQgTWVudVxuJG92ZXJsYXlDb250ZXh0QmFja2dyb3VuZDogdmFyKFxuICAtLW92ZXJsYXlDb250ZXh0QmFja2dyb3VuZFxuKTsgLy8gQ29udGV4dCBNZW51IE92ZXJsYXkgYmFja2dyb3VuZCBtYWluXG4kb3ZlcmxheUNvbnRleHRCYWNrZ3JvdW5kR3JhZGllbnQ6IHZhcihcbiAgLS1vdmVybGF5Q29udGV4dEJhY2tncm91bmRHcmFkaWVudFxuKTsgLy8gQ29udGV4dCBNZW51IGJhY2tncm91bmQgZ3JhZGllbnRcblxuXG5cbi8qKioqKioqKioqKioqKioqKioqIE1lbnUgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4kbWVCYWNrZ3JvdW5kOiB2YXIoLS1tZUJhY2tncm91bmQpO1xuXG4vKioqKioqKioqKioqKioqKioqKioqKioqIE1lbnUgQ29udHJvbHMgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuJGNzRmlsbDogdmFyKC0tY3NGaWxsKTtcbiRjc0FjY2VudDogdmFyKC0tY3NBY2NlbnQpO1xuJGNzQWNjZW50MjogdmFyKC0tY3NBY2NlbnQyKTtcblxuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBDb250YWluZXIgVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiRnc1RleHRDb2xvcjogdmFyKC0tZ3NUZXh0Q29sb3IpOyAvLyBUZXh0IGNvbG9yIGZvciBnYW1lIHNjb3JlXG4kZ3NCYWNrZ3JvdW5kOiB2YXIoLS1nc0JhY2tncm91bmQpOyAvLyBiYWNrZ3JvdW5kIG9mIENvbnRhaW5lcnNcbiRnc0xpc3RCYWNrZ3JvdW5kOiB2YXIoLS1nc0xpc3RCYWNrZ3JvdW5kKTsgLy8gbGlzdCBiYWNrZ3JvdW5kIG9mIGdhbWUgc2NvcmVcbiRnc0JvcmRlcjogdmFyKC0tZ3NCb3JkZXIpOyAvLyBiYWNrZ3JvdW5kIG9mIE1lbnVzXG4kZ3NUZXh0U2l6ZTogdmFyKC0tZ3NUZXh0U2l6ZSk7IC8vIGJhY2tncm91bmQgb2YgTWVudXNcbiRnc0ZvbnRGYW1pbHk6IHZhcigtLWdzRm9udEZhbWlseSk7IC8vIHNjb3JlIGZvbnRcbiRnc1RhYmxlSXRlbVdpZHRoOiB2YXIoLS1nc1RhYmxlSXRlbVdpZHRoKTsgLy8gd2lkdGggb2Ygc2NvcmUgaXRlbSBpbiB0YWJsZSBsYXlvdXRcbiRnc1RhYmxlUGx5V2lkdGg6IHZhcigtLWdzVGFibGVQbHlXaWR0aCk7IC8vIHdpZHRoIG9mIHBseSBlbGVtZW50IGluIHRhYmxlIGxheW91dFxuXG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIENvbnRhaW5lciBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuJGdzVGV4dENvbG9yTVc6IHZhcigtLWdzVGV4dENvbG9yTVcpOyAvLyBUZXh0IGNvbG9yIGZvciBnYW1lIHNjb3JlXG4kZ3NCYWNrZ3JvdW5kTVc6IHZhcigtLWdzQmFja2dyb3VuZE1XKTsgLy8gYmFja2dyb3VuZCBvZiBDb250YWluZXJzXG4kZ3NCb3JkZXJNVzogdmFyKC0tZ3NCb3JkZXJNVyk7IC8vIGJhY2tncm91bmQgb2YgTWVudXNcbiRnc1RleHRTaXplTVc6IHZhcigtLWdzVGV4dFNpemVNVyk7IC8vIGJhY2tncm91bmQgb2YgTWVudXNcblxuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBDb250YWluZXIgVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiRnc1RleHRDb2xvck1COiB2YXIoLS1nc1RleHRDb2xvck1CKTsgLy8gVGV4dCBjb2xvciBmb3IgZ2FtZSBzY29yZVxuJGdzQmFja2dyb3VuZE1COiB2YXIoLS1nc0JhY2tncm91bmRNQik7IC8vIGJhY2tncm91bmQgb2YgQ29udGFpbmVyc1xuJGdzQm9yZGVyTUI6IHZhcigtLWdzQm9yZGVyTUIpOyAvLyBiYWNrZ3JvdW5kIG9mIE1lbnVzXG4kZ3NUZXh0U2l6ZU1COiB2YXIoLS1nc1RleHRTaXplTUIpOyAvLyBiYWNrZ3JvdW5kIG9mIE1lbnVzXG5cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgSGlnaGxpZ2h0IFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4kZ3NUZXh0Q29sb3JIRzogdmFyKC0tZ3NUZXh0Q29sb3JIRyk7IC8vIFRleHQgY29sb3IgZm9yIGhpZ2hsaWdodFxuJGdzQW5ub3RhdGlvbkNvbG9ySEc6IHZhcigtLWdzQW5ub3RhdGlvbkNvbG9ySEcpOyAvLyBBbm5vdGF0aW9uL0NvbW1lbnQgY29sb3IgZm9yIGhpZ2hsaWdodFxuJGdzQmFja2dyb3VuZEhHOiB2YXIoLS1nc0JhY2tncm91bmRIRyk7IC8vIGJhY2tncm91bmQgZm9yIGhpZ2hsaWdodFxuJGdzQm9yZGVySEc6IHZhcigtLWdzQm9yZGVySEcpOyAvLyBib3JkZXIgZm9yIGhpZ2hsaWdodFxuXG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIEFubm90YXRpb24gVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiRnc1RleHRDb2xvckFOOiB2YXIoLS1nc1RleHRDb2xvckFOKTsgLy8gVGV4dCBjb2xvciBmb3IgaGlnaGxpZ2h0XG4kZ3NCYWNrZ3JvdW5kQU46IHZhcigtLWdzQmFja2dyb3VuZEFOKTsgLy8gYmFja2dyb3VuZCBmb3IgaGlnaGxpZ2h0XG4kZ3NCb3JkZXJBTjogdmFyKC0tZ3NCb3JkZXJBTik7IC8vIGJvcmRlciBmb3IgaGlnaGxpZ2h0XG5cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgVmFyaWF0aW9uIFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4kZ3NUZXh0Q29sb3JWQTogdmFyKC0tZ3NUZXh0Q29sb3JWQSk7IC8vIFRleHQgY29sb3IgZm9yIGhpZ2hsaWdodFxuJGdzQmFja2dyb3VuZFZBOiB2YXIoLS1nc0JhY2tncm91bmRWQSk7IC8vIGJhY2tncm91bmQgZm9yIGhpZ2hsaWdodFxuJGdzQm9yZGVyVkE6IHZhcigtLWdzQm9yZGVyVkEpOyAvLyBib3JkZXIgZm9yIGhpZ2hsaWdodFxuXG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIFBseSBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuJGdzVGV4dENvbG9yUEM6IHZhcigtLWdzVGV4dENvbG9yUEMpOyAvLyBUZXh0IGNvbG9yIGZvciBnYW1lIHNjb3JlIHBseVxuJGdzQmFja2dyb3VuZFBDOiB2YXIoLS1nc0JhY2tncm91bmRQQyk7IC8vIGJhY2tncm91bmQgZm9yIGdhbWUgc2NvcmUgcGx5XG4kZ3NCb3JkZXJQQzogdmFyKC0tZ3NCb3JkZXJQQyk7IC8vIGJvcmRlciBmb3IgZ2FtZSBzY29yZSBwbHlcblxuLyoqKioqKioqKioqKioqKioqKioqIENvbnRyb2wgQ29sb3JzICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiRjc0JhY2tncm91bmQ6IHZhcigtLWNzQmFja2dyb3VuZCk7IC8vIGJhY2tncm91bmQgZm9yIGNvbnRyb2xzXG4kY3NDb2xvcjogdmFyKC0tY3NDb2xvcik7IC8vIGNvbnRyb2xzIGNvbG9yIChmb3JlZ3JvdW5kKVxuXG4vKioqKioqKioqKioqKioqKioqKiogQm9hcmQgQ29sb3JzICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiRib2FyZEJHRGFyazogdmFyKC0tYm9hcmRCR0RhcmspOyAvLyBib2FyZCBkYXJrIHRpbGVcbiRib2FyZEJHTGlnaHQ6IHZhcigtLWJvYXJkQkdMaWdodCk7IC8vIGJvYXJkIGxpZ2h0IHRpbGVcbiRib2FyZExhYmVsTGlnaHQ6IHZhcigtLWJvYXJkTGFiZWxMaWdodCk7IC8vIGJvYXJkIGxpZ2h0IGxhYmVsXG4kYm9hcmRMYWJlbERhcms6IHZhcigtLWJvYXJkTGFiZWxEYXJrKTsgLy8gYm9hcmQgZGFyayBsYWJlbFxuXG5cblxuLyoqKioqKioqKioqKioqKioqKioqIEZvbnQgU2l6ZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuJGdzRm9udFNpemU6IHZhcigtLWdzRm9udFNpemUpOyAvLyBib2FyZCBkYXJrIHRpbGVcbiRnc0ZvbnRTaXplQU46IHZhcigtLWdzRm9udFNpemVBTik7IC8vIGJvYXJkIGxpZ2h0IHRpbGVcbiRnc0ZvbnRTaXplSEc6IHZhcigtLWdzRm9udFNpemVIRyk7IC8vIGJvYXJkIGxpZ2h0IGxhYmVsXG4kZ3NGb250U2l6ZVZBOiB2YXIoLS1nc0ZvbnRTaXplVkEpOyAvLyBib2FyZCBkYXJrIGxhYmVsXG4kZ3NGb250U2l6ZVBDOiB2YXIoLS1nc0ZvbnRTaXplUEMpOyAvLyBib2FyZCBkYXJrIGxhYmVsXG4kaGRyRGF0YUZvbnRTaXplOiB2YXIoLS1oZHJEYXRhRm9udFNpemUpOyAvLyBzaXplIG9mIHBsYXllciBzaG93Y2FzZSBkYXRhXG4kaGRyTmFtZUZvbnRTaXplOiB2YXIoLS1oZHJOYW1lRm9udFNpemUpOyAvLyBzaXplIG9mIHBsYXllciBzaG93Y2FzZSBOYW1lXG4kaGRyVGl0bGVGb250U2l6ZTogdmFyKC0taGRyVGl0bGVGb250U2l6ZSk7IC8vIHNpemUgb2YgcGxheWVyIHNob3djYXNlIGRhdGFcbiRoZHJWYXJpYW50Rm9udFNpemU6IHZhcigtLWhkclZhcmlhbnRGb250U2l6ZSk7IC8vIHNpemUgb2YgcGxheWVyIHNob3djYXNlIE5hbWVcbiRoZHJNYXRjaERhdGFGb250U2l6ZTogdmFyKC0taGRyTWF0Y2hEYXRhRm9udFNpemUpOyAvLyBzaXplIG9mIHBsYXllciBzaG93Y2FzZSBOYW1lXG4kaGRyT3BlbmluZ0ZvbnRTaXplOiB2YXIoLS1oZHJNYXRjaERhdGFGb250U2l6ZSk7IC8vIHNpemUgb2YgcGxheWVyIHNob3djYXNlIE5hbWVcbiRoZHJSZXN1bHRGb250U2l6ZTogdmFyKC0taGRyUmVzdWx0Rm9udFNpemUpOyAvLyBzaXplIG9mIHBsYXllciBzaG93Y2FzZSBOYW1lXG4kaGRyUm91bmRGb250U2l6ZTogdmFyKC0taGRyUm91bmRGb250U2l6ZSk7IC8vIHNpemUgb2YgcGxheWVyIHNob3djYXNlIE5hbWVcblxuLy8gR2VuZXJhbCBzdHVmZlxuJHRleHQtY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xuJGJnLW91dGVyOiB2YXIoLS1iZy1vdXRlcik7XG4kYmctaW5uZXI6IHZhcigtLWJnLWlubmVyKTtcblxuJGJnLWNvbG9yOiAjZjJmM2Y3O1xuJGZnLWNvbG9yOiAjMzgzYTQxO1xuXG4kZ2xvdy1zaGFkb3c6IDAgMCAwLjVlbSB0cmFuc3BhcmVudGl6ZSgkYmx1ZSwgMC4zKTtcblxuOnJvb3Qge1xuICAtLWJnLWNvbG9yOiAjeyRiZy1jb2xvcn07XG4gIC0tZmctY29sb3I6ICN7JGZnLWNvbG9yfTtcblxuICAtLXJlZDogI3skcmVkfTtcbiAgLS1ncmVlbjogI3skZ3JlZW59O1xuICAtLWJsdWU6ICN7JGJsdWV9O1xuICAtLWRhcmstYmx1ZTogI3skZGFyay1ibHVlfTtcbiAgLS1tYXJvb246ICN7JG1hcm9vbn07XG4gIC0tcHVycGxlOiAjeyRwdXJwbGV9O1xufVxuXG4vLyA6Oi1tb3otZm9jdXMtaW5uZXIsXG4vLyA6LW1vei1mb2N1c3Jpbmcge1xuLy8gICBib3JkZXI6IDA7XG4vLyAgIGNvbG9yOiB0cmFuc3BhcmVudDtcbi8vICAgdGV4dC1zaGFkb3c6IDAgMCAwICRmZy1jb2xvcjtcbi8vIH1cblxuLy8gOjpzZWxlY3Rpb24sXG4vLyA6Oi1tb3otc2VsZWN0aW9uIHtcbi8vICAgY29sb3I6IHdoaXRlO1xuLy8gICBiYWNrZ3JvdW5kOiBibGFjaztcbi8vIH1cblxuLy8gKiB7XG4vLyAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4vLyAgIG91dGxpbmU6IG5vbmU7XG4vLyAgIHVzZXItc2VsZWN0OiBub25lO1xuLy8gICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XG4vLyAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4vLyAgIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTtcbi8vICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbi8vICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuLy8gICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4vLyAgIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbi8vICAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApICFpbXBvcnRhbnQ7XG4vLyAgIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcbi8vICAgY3Vyc29yOiBkZWZhdWx0O1xuLy8gICBsZXR0ZXItc3BhY2luZzogMDtcbi8vIH1cblxuLy8gLnNlbGVjdGFibGUsXG4vLyAuc2VsZWN0YWJsZSAqIHtcbi8vICAgY3Vyc29yOiBhdXRvO1xuLy8gICB1c2VyLXNlbGVjdDogdGV4dDtcbi8vICAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiB0ZXh0O1xuLy8gICAtd2Via2l0LXVzZXItc2VsZWN0OiB0ZXh0O1xuLy8gICAta2h0bWwtdXNlci1zZWxlY3Q6IHRleHQ7XG4vLyAgIC1tb3otdXNlci1zZWxlY3Q6IHRleHQ7XG4vLyAgIC1tcy11c2VyLXNlbGVjdDogdGV4dDtcbi8vIH1cblxuLy8gaHRtbCxcbi8vIGJvZHkge1xuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmctY29sb3I7XG4vLyAgIGNvbG9yOiAkZmctY29sb3I7XG4vLyAgIG1hcmdpbjogMDtcbi8vICAgcGFkZGluZzogMDtcbi8vICAgZm9udC1zaXplOiAxMHB0O1xuLy8gICBoZWlnaHQ6IDEwMCU7XG4vLyAgIG92ZXJmbG93OiBhdXRvO1xuLy8gfVxuXG4vLyAud2l0aC1zaGFkb3cge1xuLy8gICBib3gtc2hhZG93OiA2cHggNnB4IDEwcHggdHJhbnNwYXJlbnRpemUoYmxhY2ssIDAuOSksIC02cHggLTZweCAxMHB4IHdoaXRlO1xuLy8gfVxuXG4vLyAub3V0c2V0IHtcbi8vICAgQGV4dGVuZCAud2l0aC1zaGFkb3c7XG5cbi8vICAgYm9yZGVyLXJhZGl1czogMTBweDtcbi8vICAgYmFja2dyb3VuZDogJGJnLWNvbG9yO1xuLy8gfVxuXG4vLyAuaW5zZXQge1xuLy8gICBib3JkZXItcmFkaXVzOiAxMHB4O1xuLy8gICBib3gtc2hhZG93OiAwIDAgdHJhbnNwYXJlbnQsIDAgMCB0cmFuc3BhcmVudCxcbi8vICAgICBpbnNldCAzcHggM3B4IDVweCB0cmFuc3BhcmVudGl6ZShibGFjaywgMC45KSwgaW5zZXQgLTNweCAtM3B4IDVweCB3aGl0ZTtcbi8vICAgYmFja2dyb3VuZDogbGlnaHRlbigkYmctY29sb3IsIDIlKTtcbi8vIH1cblxuLy8gLnBhcGVyIHtcbi8vICAgQGV4dGVuZCAub3V0c2V0O1xuLy8gICBwYWRkaW5nOiAxMHB4IDIwcHggMjBweDtcbi8vICAgbWFyZ2luLXRvcDogMjBweDtcbi8vICAgbWluLWhlaWdodDogMTAwcHg7XG4vLyAgIGZvbnQtc2l6ZTogMS4yZW07XG4vLyAgIGJhY2tncm91bmQ6ICRiZy1jb2xvcjtcbi8vIH1cblxuLy8gc2VjdGlvbixcbi8vIGFydGljbGUsXG4vLyAuc2VjdGlvbixcbi8vIC5hcnRpY2xlLFxuLy8gLnBhcGVyIHtcbi8vICAgbGluZS1oZWlnaHQ6IDJlbTtcbi8vICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuLy8gICB3b3JkLWJyZWFrOiBub3JtYWw7XG4vLyAgIGxpbmUtaGVpZ2h0OiAyZW07XG4vLyB9XG5cbi8vIGlucHV0W3R5cGU9XCJ0ZXh0XCJdLFxuLy8gaW5wdXRbdHlwZT1cInNlYXJjaFwiXSxcbi8vIGlucHV0W3R5cGU9XCJ0ZWxcIl0sXG4vLyBpbnB1dFt0eXBlPVwidXJsXCJdLFxuLy8gaW5wdXRbdHlwZT1cImVtYWlsXCJdLFxuLy8gaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJdLFxuLy8gaW5wdXRbdHlwZT1cImRhdGVcIl0sXG4vLyBpbnB1dFt0eXBlPVwibW9udGhcIl0sXG4vLyBpbnB1dFt0eXBlPVwid2Vla1wiXSxcbi8vIGlucHV0W3R5cGU9XCJ0aW1lXCJdLFxuLy8gaW5wdXRbdHlwZT1cIm51bWJlclwiXSxcbi8vIGlucHV0W3R5cGU9XCJjb2xvclwiXSxcbi8vIHNlbGVjdCxcbi8vIHRleHRhcmVhIHtcbi8vICAgYm9yZGVyOiAwO1xuLy8gICBiYWNrZ3JvdW5kOiAkYmctY29sb3I7XG4vLyAgIGNvbG9yOiAkZmctY29sb3I7XG4vLyAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4vLyAgIHBhZGRpbmc6IDAgMS4yNWVtO1xuLy8gICBsaW5lLWhlaWdodDogMS4yNWVtO1xuLy8gICBoZWlnaHQ6IDMuNWVtO1xuLy8gICBtYXJnaW46IDEwcHggMDtcbi8vICAgZm9udC1zaXplOiAxLjFyZW07XG4vLyAgIGN1cnNvcjogdGV4dDtcbi8vICAgdXNlci1zZWxlY3Q6IHRleHQ7XG4vLyAgIC13ZWJraXQtdG91Y2gtY2FsbG91dDogdGV4dDtcbi8vICAgLXdlYmtpdC11c2VyLXNlbGVjdDogdGV4dDtcbi8vICAgLWtodG1sLXVzZXItc2VsZWN0OiB0ZXh0O1xuLy8gICAtbW96LXVzZXItc2VsZWN0OiB0ZXh0O1xuLy8gICAtbXMtdXNlci1zZWxlY3Q6IHRleHQ7XG4vLyAgIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC4ycztcblxuLy8gICAmOm5vdChzZWxlY3QpIHtcbi8vICAgICBAZXh0ZW5kIC5pbnNldDtcblxuLy8gICAgICY6Zm9jdXMge1xuLy8gICAgICAgQGV4dGVuZCAub3V0c2V0O1xuLy8gICAgIH1cbi8vICAgfVxuLy8gfVxuXG4vLyB0ZXh0YXJlYSB7XG4vLyAgIGhlaWdodDogMzUwcHg7XG4vLyAgIHBhZGRpbmc6IDEuMjVlbTtcbi8vIH1cblxuLy8gc2VsZWN0IHtcbi8vICAgQGV4dGVuZCAub3V0c2V0O1xuXG4vLyAgIGN1cnNvcjogcG9pbnRlcjtcbi8vICAgYmFja2dyb3VuZDogdXJsKGRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjJaWEp6YVc5dVBTSXhMakVpSUhacFpYZENiM2c5SWpBZ01DQXhPU0F4T1NJZ2VHMXNibk05SW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTHpJd01EQXZjM1puSWo0OFp5QjBjbUZ1YzJadmNtMDlJbTFoZEhKcGVDZ3VNRE0wSURBZ01DQXVNRE0wSUMwMkxqZ2dNUzQzWlMwMUtTSWdjM1I1YkdVOUltWnBiR3c2SXpkaU4yVTRZeUkrUEhCaGRHZ2daRDBpYlRRNE1DQXpORFF0TWpFeExUSXhNbU10TVRZdE1UWXROREV0TVRZdE5UY2dNQzB4TmlBeE5pMHhOaUEwTWlBd0lEVTNiREl6T0NBeU16bGpPQzQwSURndU5TQXlNQ0F4TWlBek1TQXhNaUF4TVNBd0xqVTJJREl5TFRNdU1pQXpNUzB4TW13eU16Z3RNak01WXpFMkxURTJJREUyTFRReUlEQXROVGR6TFRReExURTJMVFUzSURCNklpQnpkSGxzWlQwaVptbHNiRG9qTjJJM1pUaGpJaTgrUEM5blBqd3ZjM1puUGdvPSlcbi8vICAgICBuby1yZXBlYXQgcmlnaHQgMWVtIGNlbnRlcjtcbi8vICAgYmFja2dyb3VuZC1zaXplOiAxLjJlbTtcbi8vICAgcGFkZGluZy1yaWdodDogM2VtO1xuLy8gfVxuXG4vLyBpbnB1dDo6cGxhY2Vob2xkZXIsXG4vLyB0ZXh0YXJlYTo6cGxhY2Vob2xkZXIge1xuLy8gICBvcGFjaXR5OiAxO1xuLy8gICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnM7XG4vLyAgIGNvbG9yOiBpbmhlcml0O1xuLy8gfVxuXG4vLyBpbnB1dDpmb2N1czo6cGxhY2Vob2xkZXIsXG4vLyB0ZXh0YXJlYTpmb2N1czo6cGxhY2Vob2xkZXIge1xuLy8gICBvcGFjaXR5OiAwLjI7XG4vLyB9XG5cbi8vIGlucHV0Oi1tcy1pbnB1dC1wbGFjZWhvbGRlcixcbi8vIHRleHRhcmVhOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4vLyAgIG9wYWNpdHk6IDE7XG4vLyAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycztcbi8vICAgY29sb3I6IGluaGVyaXQ7XG4vLyB9XG5cbi8vIGlucHV0OmZvY3VzOi1tcy1pbnB1dC1wbGFjZWhvbGRlcixcbi8vIHRleHRhcmVhOmZvY3VzOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4vLyAgIG9wYWNpdHk6IDAuMjtcbi8vIH1cblxuLy8gaW5wdXRbdHlwZT1cInNlYXJjaFwiXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbixcbi8vIGlucHV0W3R5cGU9XCJzZWFyY2hcIl06Oi13ZWJraXQtc2VhcmNoLWNhbmNlbC1idXR0b24sXG4vLyBpbnB1dFt0eXBlPVwic2VhcmNoXCJdOjotd2Via2l0LXNlYXJjaC1yZXN1bHRzLWJ1dHRvbixcbi8vIGlucHV0W3R5cGU9XCJzZWFyY2hcIl06Oi13ZWJraXQtc2VhcmNoLXJlc3VsdHMtZGVjb3JhdGlvbiB7XG4vLyAgIGRpc3BsYXk6IG5vbmU7XG4vLyB9XG5cbi8vIGJ1dHRvbixcbi8vIGlucHV0W3R5cGU9XCJidXR0b25cIl0sXG4vLyBpbnB1dFt0eXBlPVwic3VibWl0XCJdLFxuLy8gaW5wdXRbdHlwZT1cInJlc2V0XCJdIHtcbi8vICAgQGV4dGVuZCAub3V0c2V0O1xuXG4vLyAgIGJvcmRlcjogMDtcbi8vICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4vLyAgIHBhZGRpbmc6IDEwcHggMDtcbi8vICAgd2lkdGg6IDhlbTtcbi8vICAgdGV4dC1hbGlnbjogY2VudGVyO1xuLy8gICBjdXJzb3I6IHBvaW50ZXI7XG4vLyAgIGNvbG9yOiBpbmhlcml0O1xuLy8gICBmb250LXNpemU6IDEuMXJlbTtcbi8vICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYmFja2dyb3VuZC1jb2xvciwgYm94LXNoYWRvdztcbi8vICAgdHJhbnNpdGlvbi1kZWxheTogMC4ycztcbi8vICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4ycztcblxuLy8gICAmLmFjdGl2ZSxcbi8vICAgJjphY3RpdmUge1xuLy8gICAgIEBleHRlbmQgLmluc2V0O1xuXG4vLyAgICAgdHJhbnNpdGlvbi1kZWxheTogMHM7XG4vLyAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4xcztcbi8vICAgfVxuXG4vLyAgIEBlYWNoICRuYW1lLCAkY29sb3IgaW4gKFwicmVkXCI6ICRyZWQsIFwiZ3JlZW5cIjogJGdyZWVuLCBcImJsdWVcIjogJGJsdWUpIHtcbi8vICAgICBAYXQtcm9vdCAuI3skbmFtZX0tYnV0dG9uLFxuLy8gICAgICAgJi4jeyRuYW1lfS1idXR0b24ge1xuLy8gICAgICAgQGV4dGVuZCBidXR0b247XG5cbi8vICAgICAgICRfYmctaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsICRjb2xvciAzMCUsIGxpZ2h0ZW4oJGNvbG9yLCA2JSkgODAlKTtcblxuLy8gICAgICAgY29sb3I6IHdoaXRlO1xuLy8gICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4vLyAgICAgICB0ZXh0LXNoYWRvdzogMCAwLjFlbSAwLjFlbSB0cmFuc3BhcmVudGl6ZShibGFjaywgMC4zKTtcbi8vICAgICAgIGJhY2tncm91bmQ6ICRfYmctaW1hZ2U7XG4vLyAgICAgICBib3gtc2hhZG93OiAwIDAgMC41ZW0gdHJhbnNwYXJlbnRpemUoJGNvbG9yLCAwLjMpLCAwIDAgdHJhbnNwYXJlbnQsXG4vLyAgICAgICAgIGluc2V0IDAgLTVweCAwIHRyYW5zcGFyZW50aXplKGJsYWNrLCAwLjk1KSxcbi8vICAgICAgICAgaW5zZXQgMCAycHggMCB0cmFuc3BhcmVudGl6ZSh3aGl0ZSwgMC44KTtcbi8vICAgICAgIGJvcmRlci1yYWRpdXM6IDZweCA2cHggOHB4IDhweDtcbi8vICAgICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGJveC1zaGFkb3csIGJvcmRlci1yYWRpdXM7XG5cbi8vICAgICAgICYuYWN0aXZlLFxuLy8gICAgICAgJjphY3RpdmUge1xuLy8gICAgICAgICBiYWNrZ3JvdW5kOiAkX2JnLWltYWdlO1xuLy8gICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4vLyAgICAgICAgIGJveC1zaGFkb3c6IDAgMCB0cmFuc3BhcmVudCwgMCAwIHRyYW5zcGFyZW50LFxuLy8gICAgICAgICAgIGluc2V0IDAgMnB4IDVweCAycHggdHJhbnNwYXJlbnRpemUoYmxhY2ssIDAuOCk7XG4vLyAgICAgICB9XG4vLyAgICAgfVxuLy8gICB9XG4vLyB9XG5cbi8vIGxhYmVsIHtcbi8vICAgJixcbi8vICAgJiAqIHtcbi8vICAgICBjdXJzb3I6IHBvaW50ZXI7XG4vLyAgIH1cblxuLy8gICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4vLyAgIHBhZGRpbmc6IDAuNTZlbSAwO1xuLy8gfVxuXG4vLyBhIHtcbi8vICAgJixcbi8vICAgJjpsaW5rLFxuLy8gICAmOnZpc2l0ZWQsXG4vLyAgICY6aG92ZXIgJjphY3RpdmUge1xuLy8gICAgICYsXG4vLyAgICAgJiAqIHtcbi8vICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbi8vICAgICB9XG5cbi8vICAgICBmb250LXdlaWdodDogYm9sZDtcbi8vICAgICBjb2xvcjogJGJsdWU7XG4vLyAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4vLyAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuLy8gICB9XG4vLyB9XG5cbi8vIGgxLFxuLy8gaDIsXG4vLyBoMyxcbi8vIGg0LFxuLy8gaDUsXG4vLyBoNiB7XG4vLyAgIGxpbmUtaGVpZ2h0OiAxLjVlbTtcbi8vIH1cblxuLy8gaDEge1xuLy8gICBmb250LXNpemU6IDRlbTtcbi8vICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4vLyAgIG1hcmdpbjogMC43ZW0gMDtcbi8vIH1cblxuLy8gaDIge1xuLy8gICBmb250LXNpemU6IDNlbTtcbi8vICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4vLyAgIG1hcmdpbjogMC44ZW0gMDtcbi8vIH1cblxuLy8gaDMge1xuLy8gICBmb250LXNpemU6IDIuNWVtO1xuLy8gICBmb250LXdlaWdodDogbGlnaHRlcjtcbi8vICAgbWFyZ2luOiAwLjllbSAwO1xuLy8gfVxuXG4vLyBoNCB7XG4vLyAgIGZvbnQtc2l6ZTogMmVtO1xuLy8gICBmb250LXdlaWdodDogbGlnaHRlcjtcbi8vICAgbWFyZ2luOiAxZW0gMDtcbi8vIH1cblxuLy8gaDUge1xuLy8gICBtYXJnaW46IDAuNWVtIDA7XG4vLyAgIGZvbnQtc2l6ZTogMS4yZW07XG4vLyAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4vLyB9XG5cbi8vIGg2IHtcbi8vICAgbWFyZ2luOiAxZW0gMCAxZW0gMS40ZW07XG4vLyAgIGZvbnQtc2l6ZTogMWVtO1xuLy8gICBmb250LXdlaWdodDogYm9sZDtcbi8vIH1cblxuLy8gaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdLFxuLy8gaW5wdXRbdHlwZT1cInJhZGlvXCJdIHtcbi8vICAgJF9ib3JkZXItd2lkdGg6IDAuMTVlbTtcbi8vICAgJF9ib3gtc2hhZG93OiAycHggMnB4IDNweCB0cmFuc3BhcmVudGl6ZShibGFjaywgMC44KSwgLTJweCAtMnB4IDNweCB3aGl0ZSxcbi8vICAgICBpbnNldCAxcHggMXB4IDJweCB0cmFuc3BhcmVudGl6ZShibGFjaywgMC44KSwgaW5zZXQgLTFweCAtMXB4IDJweCB3aGl0ZTtcbi8vICAgZm9udC1zaXplOiAxZW07XG4vLyAgIGN1cnNvcjogcG9pbnRlcjtcbi8vICAgaGVpZ2h0OiAxLjJlbTtcbi8vICAgd2lkdGg6IDEuMmVtO1xuLy8gICBtYXJnaW46IDAgMC4zZW07XG4vLyAgIGJveC1zaGFkb3c6ICRfYm94LXNoYWRvdztcbi8vICAgYm9yZGVyOiAkX2JvcmRlci13aWR0aCBzb2xpZCAkYmctY29sb3I7XG4vLyAgIHZlcnRpY2FsLWFsaWduOiB0ZXh0LWJvdHRvbTtcbi8vICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYmFja2dyb3VuZCwgYm94LXNoYWRvdztcbi8vICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4ycztcblxuLy8gICAmOmFjdGl2ZSB7XG4vLyAgICAgYm94LXNoYWRvdzogJF9ib3gtc2hhZG93LCBpbnNldCAwIDAuMWVtIDAuMjVlbSB0cmFuc3BhcmVudGl6ZShibGFjaywgMC44KTtcbi8vICAgfVxuXG4vLyAgICY6Y2hlY2tlZCB7XG4vLyAgICAgYm9yZGVyLXdpZHRoOiAwLjFlbTtcbi8vICAgICBib3JkZXItY29sb3I6IGRhcmtlbigkYmx1ZSwgMTAlKTtcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmx1ZTtcbi8vICAgfVxuLy8gfVxuXG4vLyBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0ge1xuLy8gICBib3JkZXItcmFkaXVzOiAyNSU7XG5cbi8vICAgJjpjaGVja2VkIHtcbi8vICAgICBib3gtc2hhZG93OiAkZ2xvdy1zaGFkb3csIGluc2V0IDAgLTAuMWVtIDAgdHJhbnNwYXJlbnRpemUoYmxhY2ssIDAuOCksXG4vLyAgICAgICBpbnNldCAwIDAuMWVtIDAuMWVtIHRyYW5zcGFyZW50aXplKHdoaXRlLCAwLjgpO1xuLy8gICB9XG4vLyB9XG5cbi8vIGlucHV0W3R5cGU9XCJyYWRpb1wiXSB7XG4vLyAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG5cbi8vICAgJjpjaGVja2VkIHtcbi8vICAgICBib3gtc2hhZG93OiAkZ2xvdy1zaGFkb3c7XG4vLyAgICAgYm94LXNoYWRvdzogJGdsb3ctc2hhZG93LCBpbnNldCAwIDAuMTJlbSAwLjFlbSB0cmFuc3BhcmVudGl6ZSh3aGl0ZSwgMC43NSk7XG4vLyAgICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMC4xNWVtO1xuLy8gICB9XG4vLyB9XG5cbi8vIC5jaGVja3RleHQge1xuLy8gICB3aWR0aDogYXV0bztcbi8vICAgbWFyZ2luOiAwLjVlbTtcblxuLy8gICBpbnB1dCB7XG4vLyAgICAgZGlzcGxheTogbm9uZTtcblxuLy8gICAgICsgc3BhbiB7XG4vLyAgICAgICBAZXh0ZW5kIGJ1dHRvbjtcblxuLy8gICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4vLyAgICAgICBwYWRkaW5nOiAxZW07XG4vLyAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwcztcbi8vICAgICB9XG5cbi8vICAgICAmOmNoZWNrZWQgKyBzcGFuIHtcbi8vICAgICAgIEBleHRlbmQgLmJsdWUtYnV0dG9uO1xuXG4vLyAgICAgICBwYWRkaW5nOiAxZW07XG4vLyAgICAgfVxuLy8gICB9XG4vLyB9XG5cbi8vIC5zd2l0Y2gge1xuLy8gICAkX2hlaWdodDogMnJlbTtcbi8vICAgJF93aWR0aDogOHJlbTtcbi8vICAgJF9oYW5kbGUtd2lkdGg6ICRfaGVpZ2h0O1xuLy8gICAkX2hhbmRsZS10cmFuc2xhdGlvbjogJF93aWR0aCAtICRfaGFuZGxlLXdpZHRoO1xuXG4vLyAgIGhlaWdodDogJF9oZWlnaHQ7XG4vLyAgIHdpZHRoOiAkX3dpZHRoO1xuLy8gICBwYWRkaW5nOiAwO1xuLy8gICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbi8vICAgaW5wdXQge1xuLy8gICAgIGRpc3BsYXk6IG5vbmU7XG5cbi8vICAgICArIGRpdiB7XG4vLyAgICAgICBoZWlnaHQ6IDEwMCU7XG4vLyAgICAgICB3aWR0aDogMTAwJTtcbi8vICAgICAgIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xuLy8gICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4vLyAgICAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBib3gtc2hhZG93LCBiYWNrZ3JvdW5kLWNvbG9yO1xuLy8gICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4ycztcbi8vICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuMnM7XG4vLyAgICAgICBib3gtc2hhZG93OiAzcHggM3B4IDJweCAtMnB4IHRyYW5zcGFyZW50aXplKGJsYWNrLCAwLjkpLFxuLy8gICAgICAgICBpbnNldCAycHggMnB4IDJweCAxcHggdHJhbnNwYXJlbnRpemUoYmxhY2ssIDAuOSksXG4vLyAgICAgICAgIGluc2V0IC0ycHggLTJweCAxcHggd2hpdGU7XG5cbi8vICAgICAgICY6OmJlZm9yZSB7XG4vLyAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4vLyAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuLy8gICAgICAgICBoZWlnaHQ6IGNhbGMoI3skX2hhbmRsZS13aWR0aH0gKyA0cHgpO1xuLy8gICAgICAgICB3aWR0aDogY2FsYygjeyRfaGFuZGxlLXdpZHRofSArIDRweCk7XG4vLyAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4vLyAgICAgICAgIGJvcmRlcjogc29saWQgd2hpdGUgM3B4O1xuLy8gICAgICAgICBiYWNrZ3JvdW5kOiAkYmx1ZTtcbi8vICAgICAgICAgYm94LXNoYWRvdzogMCAzcHggMTBweCB0cmFuc3BhcmVudGl6ZShibGFjaywgMC44KSxcbi8vICAgICAgICAgICBpbnNldCAwIC0xcHggM3B4IHRyYW5zcGFyZW50aXplKGJsYWNrLCAwLjkpO1xuLy8gICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNnB4KTtcbi8vICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnM7XG4vLyAgICAgICB9XG4vLyAgICAgfVxuXG4vLyAgICAgJjpjaGVja2VkICsgZGl2IHtcbi8vICAgICAgIGJhY2tncm91bmQ6ICRibHVlO1xuLy8gICAgICAgYm94LXNoYWRvdzogJGdsb3ctc2hhZG93LCBpbnNldCAwIDJweCAycHggMnB4IHRyYW5zcGFyZW50aXplKGJsYWNrLCAwLjcpLFxuLy8gICAgICAgICBpbnNldCAwIDAgdHJhbnNwYXJlbnQ7XG5cbi8vICAgICAgICY6OmJlZm9yZSB7XG4vLyAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKCRfaGFuZGxlLXRyYW5zbGF0aW9uLCAtNnB4KTtcbi8vICAgICAgIH1cbi8vICAgICB9XG4vLyAgIH1cbi8vIH1cblxuLy8gaHIge1xuLy8gICBAZXh0ZW5kIC5pbnNldDtcbi8vICAgd2lkdGg6IDcyJTtcbi8vICAgaGVpZ2h0OiA4cHg7XG4vLyAgIGZsb2F0OiByaWdodDtcbi8vICAgYm9yZGVyOiAwO1xuLy8gfVxuXG4vLyBjb2RlLFxuLy8gcHJlIHtcbi8vICAgcGFkZGluZzogMC41ZW0gMWVtO1xuLy8gICBib3JkZXItcmFkaXVzOiA0cHg7XG4vLyAgIG92ZXJmbG93OiBhdXRvO1xuLy8gICBib3gtc2hhZG93OiAwIDVweCAzMHB4IDAgdHJhbnNwYXJlbnRpemUoYmxhY2ssIDAuOTUpO1xuLy8gfVxuXG4vLyBjb2RlIHtcbi8vICAgYmFja2dyb3VuZDogI2U2ZTZlNjtcbi8vIH1cblxuLy8gcHJlIHtcbi8vICAgYmFja2dyb3VuZDogd2hpdGU7XG4vLyAgIG1hcmdpbjogNGVtIDA7XG4vLyB9XG5cbi8vIGNvZGUsXG4vLyBwcmUge1xuLy8gICAmLFxuLy8gICAmICoge1xuLy8gICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuLy8gICAgIGxpbmUtaGVpZ2h0OiAyZW07XG4vLyAgICAgY3Vyc29yOiBhdXRvO1xuLy8gICAgIHVzZXItc2VsZWN0OiB0ZXh0O1xuLy8gICAgIC13ZWJraXQtdG91Y2gtY2FsbG91dDogdGV4dDtcbi8vICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiB0ZXh0O1xuLy8gICAgIC1raHRtbC11c2VyLXNlbGVjdDogdGV4dDtcbi8vICAgICAtbW96LXVzZXItc2VsZWN0OiB0ZXh0O1xuLy8gICAgIC1tcy11c2VyLXNlbGVjdDogdGV4dDtcbi8vICAgfVxuLy8gfVxuXG4vLyBibG9ja3F1b3RlIHtcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4vLyAgIHBhZGRpbmc6IDAuNWVtIDFlbTtcbi8vICAgYm9yZGVyLXJhZGl1czogNHB4O1xuLy8gICBib3gtc2hhZG93OiAwIDVweCAzMHB4IDAgdHJhbnNwYXJlbnRpemUoYmxhY2ssIDAuOTUpO1xuLy8gICBib3JkZXItbGVmdDogNnB4IHNvbGlkICRibHVlO1xuLy8gfVxuIiwiQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdDYXZlYXQnO1xuICAgIHNyYzogdXJsKCcuLi8uLi9mb250cy9Cb2xkL0NhdmVhdC1Cb2xkLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxuICAgICAgICB1cmwoJy4uLy4uL2ZvbnRzL0JvbGQvQ2F2ZWF0LUJvbGQud29mZicpIGZvcm1hdCgnd29mZicpO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LWRpc3BsYXk6IHN3YXA7XG59XG5cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnQ2F2ZWF0JztcbiAgICBzcmM6IHVybCgnLi4vLi4vZm9udHMvUmVndWxhci9DYXZlYXQtUmVndWxhci53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcbiAgICAgICAgdXJsKCcuLi8uLi9mb250cy9SZWd1bGFyL0NhdmVhdC1SZWd1bGFyLndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LWRpc3BsYXk6IHN3YXA7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ0ZpZ3VyaW5lU3ltYm9sVDEnO1xuICBzcmM6IHVybCgnLi4vLi4vZm9udHMvM3JkIFBhcnR5L0NoZXNzVmFyaWFudHMvRmlndXJpbmVTeW1ib2xUMUJvbGQud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXG4gICAgICB1cmwoJy4uLy4uL2ZvbnRzLzNyZCBQYXJ0eS9DaGVzc1ZhcmlhbnRzL0ZpZ3VyaW5lU3ltYm9sVDFCb2xkLndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdGaWd1cmluZVN5bWJvbFQxJztcbiAgc3JjOiB1cmwoJy4uLy4uL2ZvbnRzLzNyZCBQYXJ0eS9DaGVzc1ZhcmlhbnRzL0ZpZ3VyaW5lU3ltYm9sVDEud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXG4gICAgICB1cmwoJy4uLy4uL2ZvbnRzLzNyZCBQYXJ0eS9DaGVzc1ZhcmlhbnRzL0ZpZ3VyaW5lU3ltYm9sVDEud29mZicpIGZvcm1hdCgnd29mZicpO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnU2FuY3R1YXJ5UGxheWdyb3VuZCc7XG4gIHNyYzogdXJsKCcuLi8uLi9mb250cy8zcmQgUGFydHkvU2FuY3R1YXJ5UGxheWdyb3VuZC53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcbiAgICAgIHVybCgnLi4vLi4vZm9udHMvM3JkIFBhcnR5L1NhbmN0dWFyeVBsYXlncm91bmQud29mZicpIGZvcm1hdCgnd29mZicpO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbn1cblxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdBbWl0YSc7XG4gIHNyYzogdXJsKCcuLi8uLi9mb250cy8zcmQgUGFydHkvQW1pdGEvQW1pdGEtUmVndWxhci53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcbiAgICAgIHVybCgnLi4vLi4vZm9udHMvM3JkIFBhcnR5L0FtaXRhL0FtaXRhLVJlZ3VsYXIud29mZjInKSBmb3JtYXQoJ3dvZmYnKTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG59IiwiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkNhdmVhdFwiO1xuICBzcmM6IHVybChcIi4uLy4uL2ZvbnRzL0JvbGQvQ2F2ZWF0LUJvbGQud29mZjJcIikgZm9ybWF0KFwid29mZjJcIiksIHVybChcIi4uLy4uL2ZvbnRzL0JvbGQvQ2F2ZWF0LUJvbGQud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiQ2F2ZWF0XCI7XG4gIHNyYzogdXJsKFwiLi4vLi4vZm9udHMvUmVndWxhci9DYXZlYXQtUmVndWxhci53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKSwgdXJsKFwiLi4vLi4vZm9udHMvUmVndWxhci9DYXZlYXQtUmVndWxhci53b2ZmXCIpIGZvcm1hdChcIndvZmZcIik7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkZpZ3VyaW5lU3ltYm9sVDFcIjtcbiAgc3JjOiB1cmwoXCIuLi8uLi9mb250cy8zcmQgUGFydHkvQ2hlc3NWYXJpYW50cy9GaWd1cmluZVN5bWJvbFQxQm9sZC53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKSwgdXJsKFwiLi4vLi4vZm9udHMvM3JkIFBhcnR5L0NoZXNzVmFyaWFudHMvRmlndXJpbmVTeW1ib2xUMUJvbGQud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiRmlndXJpbmVTeW1ib2xUMVwiO1xuICBzcmM6IHVybChcIi4uLy4uL2ZvbnRzLzNyZCBQYXJ0eS9DaGVzc1ZhcmlhbnRzL0ZpZ3VyaW5lU3ltYm9sVDEud29mZjJcIikgZm9ybWF0KFwid29mZjJcIiksIHVybChcIi4uLy4uL2ZvbnRzLzNyZCBQYXJ0eS9DaGVzc1ZhcmlhbnRzL0ZpZ3VyaW5lU3ltYm9sVDEud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJTYW5jdHVhcnlQbGF5Z3JvdW5kXCI7XG4gIHNyYzogdXJsKFwiLi4vLi4vZm9udHMvM3JkIFBhcnR5L1NhbmN0dWFyeVBsYXlncm91bmQud29mZjJcIikgZm9ybWF0KFwid29mZjJcIiksIHVybChcIi4uLy4uL2ZvbnRzLzNyZCBQYXJ0eS9TYW5jdHVhcnlQbGF5Z3JvdW5kLndvZmZcIikgZm9ybWF0KFwid29mZlwiKTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiQW1pdGFcIjtcbiAgc3JjOiB1cmwoXCIuLi8uLi9mb250cy8zcmQgUGFydHkvQW1pdGEvQW1pdGEtUmVndWxhci53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKSwgdXJsKFwiLi4vLi4vZm9udHMvM3JkIFBhcnR5L0FtaXRhL0FtaXRhLVJlZ3VsYXIud29mZjJcIikgZm9ybWF0KFwid29mZlwiKTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG59XG4vKioqKioqKioqKioqKioqKioqKiBNZW51ICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKioqKioqKiBNZW51IENvbnRyb2xzICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgQ29udGFpbmVyIFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIENvbnRhaW5lciBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBDb250YWluZXIgVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgSGlnaGxpZ2h0IFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIEFubm90YXRpb24gVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgVmFyaWF0aW9uIFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIFBseSBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKioqIENvbnRyb2wgQ29sb3JzICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqKiBCb2FyZCBDb2xvcnMgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKioqIEZvbnQgU2l6ZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuOnJvb3Qge1xuICAtLWJnLWNvbG9yOiAjZjJmM2Y3O1xuICAtLWZnLWNvbG9yOiAjMzgzYTQxO1xuICAtLXJlZDogI2U0MzAzMDtcbiAgLS1ncmVlbjogIzE5YTE4NztcbiAgLS1ibHVlOiAjMzY3YmYwO1xuICAtLWRhcmstYmx1ZTogIzI2NWFiMTtcbiAgLS1tYXJvb246ICNiODE3NGM7XG4gIC0tcHVycGxlOiAjOGM0MmFiO1xufVxuXG50YWJsZS1pdGVtIHtcbiAgbWluLWhlaWdodDogMzJweDtcbn1cblxuLmhlYWRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiByb3cgbm93cmFwO1xufVxuLmhlYWRlciAuc3BhY2VyIHtcbiAgd2lkdGg6IHZhcigtLWdzVGFibGVQbHlXaWR0aCk7XG4gIGhlaWdodDogMTAwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG59XG4uaGVhZGVyIC53aGVhZGVyIHtcbiAgd2lkdGg6IHZhcigtLWdzVGFibGVJdGVtV2lkdGgpO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlcjogMnB4IGJsYWNrIHNvbGlkO1xufVxuLmhlYWRlciAuYmhlYWRlciB7XG4gIHdpZHRoOiB2YXIoLS1nc1RhYmxlSXRlbVdpZHRoKTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IDJweCBibGFjayBzb2xpZDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ScoreColumnComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'score-column',
                templateUrl: './score-column.component.html',
                styleUrls: ['./score-column.component.scss']
            }]
    }], function () { return [{ type: _services_olga_service__WEBPACK_IMPORTED_MODULE_1__["OlgaService"] }]; }, { items: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], index: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], size: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], rows: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/olga-score/score-table/score-table.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/olga-score/score-table/score-table.component.ts ***!
  \*****************************************************************/
/*! exports provided: ScoreTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScoreTableComponent", function() { return ScoreTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _score_column_score_column_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./score-column/score-column.component */ "./src/app/olga-score/score-table/score-column/score-column.component.ts");
/* harmony import */ var _services_olga_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/olga.service */ "./src/app/services/olga.service.ts");
/* harmony import */ var _services_themes_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/themes.service */ "./src/app/services/themes.service.ts");
/* harmony import */ var _services_layout_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/layout.service */ "./src/app/services/layout.service.ts");






const _c0 = ["comment"];
const _c1 = ["scoreArea"];
function ScoreTableComponent_score_column_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "score-column", 4);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx_r1.items);
} }
function ScoreTableComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.moveComment, "\n");
} }
class ScoreTableComponent {
    constructor(olga, theme, layout, renderer) {
        this.olga = olga;
        this.theme = theme;
        this.layout = layout;
        this.renderer = renderer;
        this.items = [];
        this.columns = [];
        this.rowCount = 0;
        this.currentItem = null;
        this.moveComment = '';
        this.width = 0;
        this.height = 0;
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        window.setTimeout(() => {
            let container = document.getElementById('score-table-' + this.olga.UUID);
            if (container) {
                this.container = container;
            }
            this.layout.gameScoreElement = document.getElementById('olga-score-' + this.olga.UUID);
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
    selectGameScoreItem(index) {
        if (this.currentItem) {
            this.currentItem.setSelected(false);
        }
        //this.variations = [];
        if (index < this.items.length && index >= 0) {
            this.currentItem = this.items[index];
            const targetColumn = index % this.rowCount;
            this.currentItem.setSelected(true);
            if (this.currentItem.move) {
                const comment = this.currentItem.move.comment();
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
            this.currentItem = null;
        }
        //this.updateViewSize();
    }
    resize(width = this.width, height = this.height) {
        if (this.items.length == 0 || width == 0) {
            return;
        }
        if (!this.container || !this.scoreArea) {
            window.setTimeout(() => { this.resize(width, height); }, 100);
            return;
        }
        let scoreSize = height - 32;
        if (this.currentItem && this.currentItem.move) {
            let comment = this.currentItem.move.comment();
            if (comment && comment.length >= 0) {
                if (!this.comment) {
                    window.setTimeout(() => { this.resize(width, height); }, 10);
                    return;
                }
                scoreSize = height;
            }
        }
        let moves = Math.ceil(this.items.length / 2);
        let existing_items = document.getElementsByClassName('gsi-container');
        let item_height = 25;
        if (existing_items && existing_items.length) {
            const first = existing_items[0];
            item_height = first.clientHeight;
        }
        if (height <= 0) {
            height = ((Math.ceil(moves / 3) + (this.olga.showTableHeader.value ? 2 : 1)) * item_height);
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
                let max_row_count = Math.floor(height / item_height) + (this.olga.showTableHeader.value ? 0 : 1);
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
                            tables[i].setData(this.items, i * this.rowCount, this.rowCount);
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
                let max_row_count = Math.floor(scoreSize / item_height) + (this.olga.showTableHeader.value ? 0 : 1);
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
                            tables[i].setData(this.items, i * this.rowCount, this.rowCount);
                        }
                    }
                }, 1);
            }
        }
    }
}
ScoreTableComponent.ɵfac = function ScoreTableComponent_Factory(t) { return new (t || ScoreTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_olga_service__WEBPACK_IMPORTED_MODULE_2__["OlgaService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_themes_service__WEBPACK_IMPORTED_MODULE_3__["ThemeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_layout_service__WEBPACK_IMPORTED_MODULE_4__["LayoutService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); };
ScoreTableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ScoreTableComponent, selectors: [["score-table"]], viewQuery: function ScoreTableComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_score_column_score_column_component__WEBPACK_IMPORTED_MODULE_1__["ScoreColumnComponent"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.comment = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.scoreArea = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.scoreTables = _t);
    } }, inputs: { items: "items", columns: "columns", rowCount: "rowCount", currentItem: "currentItem" }, outputs: { moveComment: "moveComment" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 4, vars: 2, consts: [[1, "score-area"], ["scoreArea", ""], [3, "items", 4, "ngFor", "ngForOf"], ["class", "comment", 4, "ngIf"], [3, "items"], [1, "comment"], ["comment", ""]], template: function ScoreTableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ScoreTableComponent_score_column_2_Template, 1, 1, "score-column", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ScoreTableComponent_div_3_Template, 3, 1, "div", 3);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.columns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.moveComment.length > 0);
    } }, styles: ["@font-face {\n  font-family: \"Caveat\";\n  src: url('Caveat-Bold.woff2') format(\"woff2\"), url('Caveat-Bold.woff') format(\"woff\");\n  font-weight: bold;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"Caveat\";\n  src: url('Caveat-Regular.woff2') format(\"woff2\"), url('Caveat-Regular.woff') format(\"woff\");\n  font-weight: 600;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"FigurineSymbolT1\";\n  src: url('FigurineSymbolT1Bold.woff2') format(\"woff2\"), url('FigurineSymbolT1Bold.woff') format(\"woff\");\n  font-weight: bold;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"FigurineSymbolT1\";\n  src: url('FigurineSymbolT1.woff2') format(\"woff2\"), url('FigurineSymbolT1.woff') format(\"woff\");\n  font-weight: 600;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"SanctuaryPlayground\";\n  src: url('SanctuaryPlayground.woff2') format(\"woff2\"), url('SanctuaryPlayground.woff') format(\"woff\");\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"Amita\";\n  src: url('Amita-Regular.woff2') format(\"woff2\"), url('Amita-Regular.woff2') format(\"woff\");\n  font-style: normal;\n  font-display: swap;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n[_ngcontent-%COMP%]:root {\n  --bg-color: #f2f3f7;\n  --fg-color: #383a41;\n  --red: #e43030;\n  --green: #19a187;\n  --blue: #367bf0;\n  --dark-blue: #265ab1;\n  --maroon: #b8174c;\n  --purple: #8c42ab;\n}\nscore-column[_ngcontent-%COMP%] {\n  min-width: 172px;\n  height: 100%;\n}\n.score-area[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: row nowrap;\n  width: 100%;\n  justify-content: space-around;\n  align-content: center;\n}\n.comment[_ngcontent-%COMP%] {\n  padding: 2px;\n  max-height: 42px;\n  height: auto;\n  line-height: 20px;\n  padding-left: 4px;\n  background: var(--gsBackgroundAN);\n  color: var(--gsTextColorAN);\n  border: var(--gsBorderAN);\n  font-size: var(--gsTextSize);\n}\n.variation-bar[_ngcontent-%COMP%] {\n  min-height: 28px;\n  line-height: 16px;\n  display: flex;\n  flex-flow: row nowrap;\n  align-content: center;\n  justify-content: space-around;\n}\n.variation-title[_ngcontent-%COMP%] {\n  order: 0;\n  font-size: 18px;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMuc2NzcyIsInNyYy9hc3NldHMvc2Nzcy9tb2R1bGVzL19mb250cy5zY3NzIiwic3JjL2FwcC9vbGdhLXNjb3JlL3Njb3JlLXRhYmxlL3Njb3JlLXRhYmxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhFQUFBO0FDQUE7RUFDSSxxQkFBQTtFQUNBLHFGQUFBO0VBRUEsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDQ0o7QURFQTtFQUNJLHFCQUFBO0VBQ0EsMkZBQUE7RUFFQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNESjtBRElBO0VBQ0UsK0JBQUE7RUFDQSx1R0FBQTtFQUVBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0hGO0FETUE7RUFDRSwrQkFBQTtFQUNBLCtGQUFBO0VBRUEsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDTEY7QURRQTtFQUNFLGtDQUFBO0VBQ0EscUdBQUE7RUFFQSxrQkFBQTtFQUNBLGtCQUFBO0FDUEY7QURXQTtFQUNFLG9CQUFBO0VBQ0EsMEZBQUE7RUFFQSxrQkFBQTtFQUNBLGtCQUFBO0FDVkY7QUZEQSwrRUFBQTtBQUdBLGtGQUFBO0FBS0EsK0VBQUE7QUFVQSwrRUFBQTtBQU1BLCtFQUFBO0FBTUEsK0VBQUE7QUFNQSxnRkFBQTtBQUtBLCtFQUFBO0FBS0EseUVBQUE7QUFLQSx5RUFBQTtBQUlBLHVFQUFBO0FBUUEscUVBQUE7QUF5QkE7RUFDRSxtQkFBQTtFQUNBLG1CQUFBO0VBRUEsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBRTFFRjtBQTdEQTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtBQWdFSjtBQTdEQTtFQUNJLGFBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSw2QkFBQTtFQUNBLHFCQUFBO0FBZ0VKO0FBN0RBO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQ0Z5RGE7RUV4RGIsMkJGdURZO0VFdERaLHlCRndEUztFRXZEVCw0QkY2QlM7QUVtQ2I7QUE5REE7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSw2QkFBQTtBQWlFSjtBQTlEQTtFQUNJLFFBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFpRUoiLCJmaWxlIjoic3JjL2FwcC9vbGdhLXNjb3JlL3Njb3JlLXRhYmxlL3Njb3JlLXRhYmxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuXG5AaW1wb3J0IFwiLi9hc3NldHMvc2Nzcy9tb2R1bGVzL19mb250cy5zY3NzXCI7XG4kZ2FtZXNjb3JlLWZhbWlseTogXCJGaWd1cmluZVN5bWJvbFQxXCI7XG4kZ2FtZXNjb3JlLWhpZ2hsaWdodDogIzU4NTg1OGZmO1xuJGdhbWVzY29yZS1mb3JlZ3JvdW5kOiB3aGl0ZTtcblxuJHJlZDogI2U0MzAzMDtcbiRncmVlbjogIzE5YTE4NztcbiRsaWdodC1ibHVlOiAjMDBmZmZmZmY7XG4kYmx1ZTogIzM2N2JmMDtcbiRkYXJrLWJsdWU6ICMyNjVhYjE7XG4kbWFyb29uOiAjYjgxNzRjO1xuJHB1cnBsZTogIzhjNDJhYjtcblxuLy8gTWFpbiBPTEdBIENvbG9yIEVsZW1lbnQgVmFyaWFibGVzXG4kdGV4dENvbG9yOiB2YXIoLS10ZXh0Q29sb3IpOyAvLyBNYWluIFRleHQgQ29sb3JcbiR0ZXh0Q29sb3JBdHRlbnRpb246IHZhcigtLXRleHRDb2xvckF0dGVudGlvbik7IC8vIEF0dGVudGlvbiB0ZXh0XG4kdGV4dENvbG9yUmVtb3ZlOiB2YXIoLS10ZXh0Q29sb3JSZW1vdmUpOyAvLyBSZW1vdmUvRGVsZXRlL0Nsb3NlXG4kdGV4dENvbG9yQWRkOiB2YXIoLS10ZXh0Q29sb3JBZGQpOyAvLyBBZGQvQ3JlYXRlL09wZW5cbiR0ZXh0Q29sb3JBY3RpdmU6IHZhcigtLXRleHRDb2xvckFjdGl2ZSk7IC8vIEFkZC9DcmVhdGUvT3BlblxuJGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQpOyAvLyBNYWluIGJhY2tncm91bmQgQ29sb3JcbiRiZ0NvbnRhaW5lcjogdmFyKC0tYmdDb250YWluZXIpOyAvLyBiYWNrZ3JvdW5kIG9mIENvbnRhaW5lcnNcbiRiZ01lbnU6IHZhcigtLWJnTWVudSk7IC8vIGJhY2tncm91bmQgb2YgTWVudXNcbiRiZ0l0ZW06IHZhcigtLWJnSXRlbSk7IC8vIGJhY2tncm91bmQgb2YgSXRlbXNcblxuLy8gQ29udGV4dCBNZW51XG4kYmdDb250ZXh0OiB2YXIoLS1iZ0NvbnRleHQpOyAvLyBiYWNrZ3JvdW5kIG9mIENvbnRleHQgTWVudVxuJHRleHRDb2xvckNvbnRleHQ6IHZhcigtLXRleHRDb2xvckNvbnRleHQpOyAvLyB0ZXh0IGNvbG9yIENvbnRleHQgTWVudVxuJGJvcmRlckNvbnRleHQ6IHZhcigtLWJvcmRlckNvbnRleHQpOyAvLyBib3JkZXIgQ29udGV4dCBNZW51XG4kb3ZlcmxheUNvbnRleHRCYWNrZ3JvdW5kOiB2YXIoXG4gIC0tb3ZlcmxheUNvbnRleHRCYWNrZ3JvdW5kXG4pOyAvLyBDb250ZXh0IE1lbnUgT3ZlcmxheSBiYWNrZ3JvdW5kIG1haW5cbiRvdmVybGF5Q29udGV4dEJhY2tncm91bmRHcmFkaWVudDogdmFyKFxuICAtLW92ZXJsYXlDb250ZXh0QmFja2dyb3VuZEdyYWRpZW50XG4pOyAvLyBDb250ZXh0IE1lbnUgYmFja2dyb3VuZCBncmFkaWVudFxuXG5cblxuLyoqKioqKioqKioqKioqKioqKiogTWVudSAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiRtZUJhY2tncm91bmQ6IHZhcigtLW1lQmFja2dyb3VuZCk7XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKiogTWVudSBDb250cm9scyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4kY3NGaWxsOiB2YXIoLS1jc0ZpbGwpO1xuJGNzQWNjZW50OiB2YXIoLS1jc0FjY2VudCk7XG4kY3NBY2NlbnQyOiB2YXIoLS1jc0FjY2VudDIpO1xuXG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIENvbnRhaW5lciBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuJGdzVGV4dENvbG9yOiB2YXIoLS1nc1RleHRDb2xvcik7IC8vIFRleHQgY29sb3IgZm9yIGdhbWUgc2NvcmVcbiRnc0JhY2tncm91bmQ6IHZhcigtLWdzQmFja2dyb3VuZCk7IC8vIGJhY2tncm91bmQgb2YgQ29udGFpbmVyc1xuJGdzTGlzdEJhY2tncm91bmQ6IHZhcigtLWdzTGlzdEJhY2tncm91bmQpOyAvLyBsaXN0IGJhY2tncm91bmQgb2YgZ2FtZSBzY29yZVxuJGdzQm9yZGVyOiB2YXIoLS1nc0JvcmRlcik7IC8vIGJhY2tncm91bmQgb2YgTWVudXNcbiRnc1RleHRTaXplOiB2YXIoLS1nc1RleHRTaXplKTsgLy8gYmFja2dyb3VuZCBvZiBNZW51c1xuJGdzRm9udEZhbWlseTogdmFyKC0tZ3NGb250RmFtaWx5KTsgLy8gc2NvcmUgZm9udFxuJGdzVGFibGVJdGVtV2lkdGg6IHZhcigtLWdzVGFibGVJdGVtV2lkdGgpOyAvLyB3aWR0aCBvZiBzY29yZSBpdGVtIGluIHRhYmxlIGxheW91dFxuJGdzVGFibGVQbHlXaWR0aDogdmFyKC0tZ3NUYWJsZVBseVdpZHRoKTsgLy8gd2lkdGggb2YgcGx5IGVsZW1lbnQgaW4gdGFibGUgbGF5b3V0XG5cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgQ29udGFpbmVyIFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4kZ3NUZXh0Q29sb3JNVzogdmFyKC0tZ3NUZXh0Q29sb3JNVyk7IC8vIFRleHQgY29sb3IgZm9yIGdhbWUgc2NvcmVcbiRnc0JhY2tncm91bmRNVzogdmFyKC0tZ3NCYWNrZ3JvdW5kTVcpOyAvLyBiYWNrZ3JvdW5kIG9mIENvbnRhaW5lcnNcbiRnc0JvcmRlck1XOiB2YXIoLS1nc0JvcmRlck1XKTsgLy8gYmFja2dyb3VuZCBvZiBNZW51c1xuJGdzVGV4dFNpemVNVzogdmFyKC0tZ3NUZXh0U2l6ZU1XKTsgLy8gYmFja2dyb3VuZCBvZiBNZW51c1xuXG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIENvbnRhaW5lciBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuJGdzVGV4dENvbG9yTUI6IHZhcigtLWdzVGV4dENvbG9yTUIpOyAvLyBUZXh0IGNvbG9yIGZvciBnYW1lIHNjb3JlXG4kZ3NCYWNrZ3JvdW5kTUI6IHZhcigtLWdzQmFja2dyb3VuZE1CKTsgLy8gYmFja2dyb3VuZCBvZiBDb250YWluZXJzXG4kZ3NCb3JkZXJNQjogdmFyKC0tZ3NCb3JkZXJNQik7IC8vIGJhY2tncm91bmQgb2YgTWVudXNcbiRnc1RleHRTaXplTUI6IHZhcigtLWdzVGV4dFNpemVNQik7IC8vIGJhY2tncm91bmQgb2YgTWVudXNcblxuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBIaWdobGlnaHQgVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiRnc1RleHRDb2xvckhHOiB2YXIoLS1nc1RleHRDb2xvckhHKTsgLy8gVGV4dCBjb2xvciBmb3IgaGlnaGxpZ2h0XG4kZ3NBbm5vdGF0aW9uQ29sb3JIRzogdmFyKC0tZ3NBbm5vdGF0aW9uQ29sb3JIRyk7IC8vIEFubm90YXRpb24vQ29tbWVudCBjb2xvciBmb3IgaGlnaGxpZ2h0XG4kZ3NCYWNrZ3JvdW5kSEc6IHZhcigtLWdzQmFja2dyb3VuZEhHKTsgLy8gYmFja2dyb3VuZCBmb3IgaGlnaGxpZ2h0XG4kZ3NCb3JkZXJIRzogdmFyKC0tZ3NCb3JkZXJIRyk7IC8vIGJvcmRlciBmb3IgaGlnaGxpZ2h0XG5cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgQW5ub3RhdGlvbiBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuJGdzVGV4dENvbG9yQU46IHZhcigtLWdzVGV4dENvbG9yQU4pOyAvLyBUZXh0IGNvbG9yIGZvciBoaWdobGlnaHRcbiRnc0JhY2tncm91bmRBTjogdmFyKC0tZ3NCYWNrZ3JvdW5kQU4pOyAvLyBiYWNrZ3JvdW5kIGZvciBoaWdobGlnaHRcbiRnc0JvcmRlckFOOiB2YXIoLS1nc0JvcmRlckFOKTsgLy8gYm9yZGVyIGZvciBoaWdobGlnaHRcblxuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBWYXJpYXRpb24gVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiRnc1RleHRDb2xvclZBOiB2YXIoLS1nc1RleHRDb2xvclZBKTsgLy8gVGV4dCBjb2xvciBmb3IgaGlnaGxpZ2h0XG4kZ3NCYWNrZ3JvdW5kVkE6IHZhcigtLWdzQmFja2dyb3VuZFZBKTsgLy8gYmFja2dyb3VuZCBmb3IgaGlnaGxpZ2h0XG4kZ3NCb3JkZXJWQTogdmFyKC0tZ3NCb3JkZXJWQSk7IC8vIGJvcmRlciBmb3IgaGlnaGxpZ2h0XG5cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgUGx5IFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4kZ3NUZXh0Q29sb3JQQzogdmFyKC0tZ3NUZXh0Q29sb3JQQyk7IC8vIFRleHQgY29sb3IgZm9yIGdhbWUgc2NvcmUgcGx5XG4kZ3NCYWNrZ3JvdW5kUEM6IHZhcigtLWdzQmFja2dyb3VuZFBDKTsgLy8gYmFja2dyb3VuZCBmb3IgZ2FtZSBzY29yZSBwbHlcbiRnc0JvcmRlclBDOiB2YXIoLS1nc0JvcmRlclBDKTsgLy8gYm9yZGVyIGZvciBnYW1lIHNjb3JlIHBseVxuXG4vKioqKioqKioqKioqKioqKioqKiogQ29udHJvbCBDb2xvcnMgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuJGNzQmFja2dyb3VuZDogdmFyKC0tY3NCYWNrZ3JvdW5kKTsgLy8gYmFja2dyb3VuZCBmb3IgY29udHJvbHNcbiRjc0NvbG9yOiB2YXIoLS1jc0NvbG9yKTsgLy8gY29udHJvbHMgY29sb3IgKGZvcmVncm91bmQpXG5cbi8qKioqKioqKioqKioqKioqKioqKiBCb2FyZCBDb2xvcnMgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuJGJvYXJkQkdEYXJrOiB2YXIoLS1ib2FyZEJHRGFyayk7IC8vIGJvYXJkIGRhcmsgdGlsZVxuJGJvYXJkQkdMaWdodDogdmFyKC0tYm9hcmRCR0xpZ2h0KTsgLy8gYm9hcmQgbGlnaHQgdGlsZVxuJGJvYXJkTGFiZWxMaWdodDogdmFyKC0tYm9hcmRMYWJlbExpZ2h0KTsgLy8gYm9hcmQgbGlnaHQgbGFiZWxcbiRib2FyZExhYmVsRGFyazogdmFyKC0tYm9hcmRMYWJlbERhcmspOyAvLyBib2FyZCBkYXJrIGxhYmVsXG5cblxuXG4vKioqKioqKioqKioqKioqKioqKiogRm9udCBTaXplcyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4kZ3NGb250U2l6ZTogdmFyKC0tZ3NGb250U2l6ZSk7IC8vIGJvYXJkIGRhcmsgdGlsZVxuJGdzRm9udFNpemVBTjogdmFyKC0tZ3NGb250U2l6ZUFOKTsgLy8gYm9hcmQgbGlnaHQgdGlsZVxuJGdzRm9udFNpemVIRzogdmFyKC0tZ3NGb250U2l6ZUhHKTsgLy8gYm9hcmQgbGlnaHQgbGFiZWxcbiRnc0ZvbnRTaXplVkE6IHZhcigtLWdzRm9udFNpemVWQSk7IC8vIGJvYXJkIGRhcmsgbGFiZWxcbiRnc0ZvbnRTaXplUEM6IHZhcigtLWdzRm9udFNpemVQQyk7IC8vIGJvYXJkIGRhcmsgbGFiZWxcbiRoZHJEYXRhRm9udFNpemU6IHZhcigtLWhkckRhdGFGb250U2l6ZSk7IC8vIHNpemUgb2YgcGxheWVyIHNob3djYXNlIGRhdGFcbiRoZHJOYW1lRm9udFNpemU6IHZhcigtLWhkck5hbWVGb250U2l6ZSk7IC8vIHNpemUgb2YgcGxheWVyIHNob3djYXNlIE5hbWVcbiRoZHJUaXRsZUZvbnRTaXplOiB2YXIoLS1oZHJUaXRsZUZvbnRTaXplKTsgLy8gc2l6ZSBvZiBwbGF5ZXIgc2hvd2Nhc2UgZGF0YVxuJGhkclZhcmlhbnRGb250U2l6ZTogdmFyKC0taGRyVmFyaWFudEZvbnRTaXplKTsgLy8gc2l6ZSBvZiBwbGF5ZXIgc2hvd2Nhc2UgTmFtZVxuJGhkck1hdGNoRGF0YUZvbnRTaXplOiB2YXIoLS1oZHJNYXRjaERhdGFGb250U2l6ZSk7IC8vIHNpemUgb2YgcGxheWVyIHNob3djYXNlIE5hbWVcbiRoZHJPcGVuaW5nRm9udFNpemU6IHZhcigtLWhkck1hdGNoRGF0YUZvbnRTaXplKTsgLy8gc2l6ZSBvZiBwbGF5ZXIgc2hvd2Nhc2UgTmFtZVxuJGhkclJlc3VsdEZvbnRTaXplOiB2YXIoLS1oZHJSZXN1bHRGb250U2l6ZSk7IC8vIHNpemUgb2YgcGxheWVyIHNob3djYXNlIE5hbWVcbiRoZHJSb3VuZEZvbnRTaXplOiB2YXIoLS1oZHJSb3VuZEZvbnRTaXplKTsgLy8gc2l6ZSBvZiBwbGF5ZXIgc2hvd2Nhc2UgTmFtZVxuXG4vLyBHZW5lcmFsIHN0dWZmXG4kdGV4dC1jb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XG4kYmctb3V0ZXI6IHZhcigtLWJnLW91dGVyKTtcbiRiZy1pbm5lcjogdmFyKC0tYmctaW5uZXIpO1xuXG4kYmctY29sb3I6ICNmMmYzZjc7XG4kZmctY29sb3I6ICMzODNhNDE7XG5cbiRnbG93LXNoYWRvdzogMCAwIDAuNWVtIHRyYW5zcGFyZW50aXplKCRibHVlLCAwLjMpO1xuXG46cm9vdCB7XG4gIC0tYmctY29sb3I6ICN7JGJnLWNvbG9yfTtcbiAgLS1mZy1jb2xvcjogI3skZmctY29sb3J9O1xuXG4gIC0tcmVkOiAjeyRyZWR9O1xuICAtLWdyZWVuOiAjeyRncmVlbn07XG4gIC0tYmx1ZTogI3skYmx1ZX07XG4gIC0tZGFyay1ibHVlOiAjeyRkYXJrLWJsdWV9O1xuICAtLW1hcm9vbjogI3skbWFyb29ufTtcbiAgLS1wdXJwbGU6ICN7JHB1cnBsZX07XG59XG5cbi8vIDo6LW1vei1mb2N1cy1pbm5lcixcbi8vIDotbW96LWZvY3VzcmluZyB7XG4vLyAgIGJvcmRlcjogMDtcbi8vICAgY29sb3I6IHRyYW5zcGFyZW50O1xuLy8gICB0ZXh0LXNoYWRvdzogMCAwIDAgJGZnLWNvbG9yO1xuLy8gfVxuXG4vLyA6OnNlbGVjdGlvbixcbi8vIDo6LW1vei1zZWxlY3Rpb24ge1xuLy8gICBjb2xvcjogd2hpdGU7XG4vLyAgIGJhY2tncm91bmQ6IGJsYWNrO1xuLy8gfVxuXG4vLyAqIHtcbi8vICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbi8vICAgb3V0bGluZTogbm9uZTtcbi8vICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4vLyAgIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcbi8vICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbi8vICAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lO1xuLy8gICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuLy8gICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4vLyAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbi8vICAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuLy8gICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCkgIWltcG9ydGFudDtcbi8vICAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xuLy8gICBjdXJzb3I6IGRlZmF1bHQ7XG4vLyAgIGxldHRlci1zcGFjaW5nOiAwO1xuLy8gfVxuXG4vLyAuc2VsZWN0YWJsZSxcbi8vIC5zZWxlY3RhYmxlICoge1xuLy8gICBjdXJzb3I6IGF1dG87XG4vLyAgIHVzZXItc2VsZWN0OiB0ZXh0O1xuLy8gICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IHRleHQ7XG4vLyAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IHRleHQ7XG4vLyAgIC1raHRtbC11c2VyLXNlbGVjdDogdGV4dDtcbi8vICAgLW1vei11c2VyLXNlbGVjdDogdGV4dDtcbi8vICAgLW1zLXVzZXItc2VsZWN0OiB0ZXh0O1xuLy8gfVxuXG4vLyBodG1sLFxuLy8gYm9keSB7XG4vLyAgIGJhY2tncm91bmQtY29sb3I6ICRiZy1jb2xvcjtcbi8vICAgY29sb3I6ICRmZy1jb2xvcjtcbi8vICAgbWFyZ2luOiAwO1xuLy8gICBwYWRkaW5nOiAwO1xuLy8gICBmb250LXNpemU6IDEwcHQ7XG4vLyAgIGhlaWdodDogMTAwJTtcbi8vICAgb3ZlcmZsb3c6IGF1dG87XG4vLyB9XG5cbi8vIC53aXRoLXNoYWRvdyB7XG4vLyAgIGJveC1zaGFkb3c6IDZweCA2cHggMTBweCB0cmFuc3BhcmVudGl6ZShibGFjaywgMC45KSwgLTZweCAtNnB4IDEwcHggd2hpdGU7XG4vLyB9XG5cbi8vIC5vdXRzZXQge1xuLy8gICBAZXh0ZW5kIC53aXRoLXNoYWRvdztcblxuLy8gICBib3JkZXItcmFkaXVzOiAxMHB4O1xuLy8gICBiYWNrZ3JvdW5kOiAkYmctY29sb3I7XG4vLyB9XG5cbi8vIC5pbnNldCB7XG4vLyAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4vLyAgIGJveC1zaGFkb3c6IDAgMCB0cmFuc3BhcmVudCwgMCAwIHRyYW5zcGFyZW50LFxuLy8gICAgIGluc2V0IDNweCAzcHggNXB4IHRyYW5zcGFyZW50aXplKGJsYWNrLCAwLjkpLCBpbnNldCAtM3B4IC0zcHggNXB4IHdoaXRlO1xuLy8gICBiYWNrZ3JvdW5kOiBsaWdodGVuKCRiZy1jb2xvciwgMiUpO1xuLy8gfVxuXG4vLyAucGFwZXIge1xuLy8gICBAZXh0ZW5kIC5vdXRzZXQ7XG4vLyAgIHBhZGRpbmc6IDEwcHggMjBweCAyMHB4O1xuLy8gICBtYXJnaW4tdG9wOiAyMHB4O1xuLy8gICBtaW4taGVpZ2h0OiAxMDBweDtcbi8vICAgZm9udC1zaXplOiAxLjJlbTtcbi8vICAgYmFja2dyb3VuZDogJGJnLWNvbG9yO1xuLy8gfVxuXG4vLyBzZWN0aW9uLFxuLy8gYXJ0aWNsZSxcbi8vIC5zZWN0aW9uLFxuLy8gLmFydGljbGUsXG4vLyAucGFwZXIge1xuLy8gICBsaW5lLWhlaWdodDogMmVtO1xuLy8gICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4vLyAgIHdvcmQtYnJlYWs6IG5vcm1hbDtcbi8vICAgbGluZS1oZWlnaHQ6IDJlbTtcbi8vIH1cblxuLy8gaW5wdXRbdHlwZT1cInRleHRcIl0sXG4vLyBpbnB1dFt0eXBlPVwic2VhcmNoXCJdLFxuLy8gaW5wdXRbdHlwZT1cInRlbFwiXSxcbi8vIGlucHV0W3R5cGU9XCJ1cmxcIl0sXG4vLyBpbnB1dFt0eXBlPVwiZW1haWxcIl0sXG4vLyBpbnB1dFt0eXBlPVwicGFzc3dvcmRcIl0sXG4vLyBpbnB1dFt0eXBlPVwiZGF0ZVwiXSxcbi8vIGlucHV0W3R5cGU9XCJtb250aFwiXSxcbi8vIGlucHV0W3R5cGU9XCJ3ZWVrXCJdLFxuLy8gaW5wdXRbdHlwZT1cInRpbWVcIl0sXG4vLyBpbnB1dFt0eXBlPVwibnVtYmVyXCJdLFxuLy8gaW5wdXRbdHlwZT1cImNvbG9yXCJdLFxuLy8gc2VsZWN0LFxuLy8gdGV4dGFyZWEge1xuLy8gICBib3JkZXI6IDA7XG4vLyAgIGJhY2tncm91bmQ6ICRiZy1jb2xvcjtcbi8vICAgY29sb3I6ICRmZy1jb2xvcjtcbi8vICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbi8vICAgcGFkZGluZzogMCAxLjI1ZW07XG4vLyAgIGxpbmUtaGVpZ2h0OiAxLjI1ZW07XG4vLyAgIGhlaWdodDogMy41ZW07XG4vLyAgIG1hcmdpbjogMTBweCAwO1xuLy8gICBmb250LXNpemU6IDEuMXJlbTtcbi8vICAgY3Vyc29yOiB0ZXh0O1xuLy8gICB1c2VyLXNlbGVjdDogdGV4dDtcbi8vICAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiB0ZXh0O1xuLy8gICAtd2Via2l0LXVzZXItc2VsZWN0OiB0ZXh0O1xuLy8gICAta2h0bWwtdXNlci1zZWxlY3Q6IHRleHQ7XG4vLyAgIC1tb3otdXNlci1zZWxlY3Q6IHRleHQ7XG4vLyAgIC1tcy11c2VyLXNlbGVjdDogdGV4dDtcbi8vICAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjJzO1xuXG4vLyAgICY6bm90KHNlbGVjdCkge1xuLy8gICAgIEBleHRlbmQgLmluc2V0O1xuXG4vLyAgICAgJjpmb2N1cyB7XG4vLyAgICAgICBAZXh0ZW5kIC5vdXRzZXQ7XG4vLyAgICAgfVxuLy8gICB9XG4vLyB9XG5cbi8vIHRleHRhcmVhIHtcbi8vICAgaGVpZ2h0OiAzNTBweDtcbi8vICAgcGFkZGluZzogMS4yNWVtO1xuLy8gfVxuXG4vLyBzZWxlY3Qge1xuLy8gICBAZXh0ZW5kIC5vdXRzZXQ7XG5cbi8vICAgY3Vyc29yOiBwb2ludGVyO1xuLy8gICBiYWNrZ3JvdW5kOiB1cmwoZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCMlpYSnphVzl1UFNJeExqRWlJSFpwWlhkQ2IzZzlJakFnTUNBeE9TQXhPU0lnZUcxc2JuTTlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5Mekl3TURBdmMzWm5JajQ4WnlCMGNtRnVjMlp2Y20wOUltMWhkSEpwZUNndU1ETTBJREFnTUNBdU1ETTBJQzAyTGpnZ01TNDNaUzAxS1NJZ2MzUjViR1U5SW1acGJHdzZJemRpTjJVNFl5SStQSEJoZEdnZ1pEMGliVFE0TUNBek5EUXRNakV4TFRJeE1tTXRNVFl0TVRZdE5ERXRNVFl0TlRjZ01DMHhOaUF4TmkweE5pQTBNaUF3SURVM2JESXpPQ0F5TXpsak9DNDBJRGd1TlNBeU1DQXhNaUF6TVNBeE1pQXhNU0F3TGpVMklESXlMVE11TWlBek1TMHhNbXd5TXpndE1qTTVZekUyTFRFMklERTJMVFF5SURBdE5UZHpMVFF4TFRFMkxUVTNJREI2SWlCemRIbHNaVDBpWm1sc2JEb2pOMkkzWlRoaklpOCtQQzluUGp3dmMzWm5QZ289KVxuLy8gICAgIG5vLXJlcGVhdCByaWdodCAxZW0gY2VudGVyO1xuLy8gICBiYWNrZ3JvdW5kLXNpemU6IDEuMmVtO1xuLy8gICBwYWRkaW5nLXJpZ2h0OiAzZW07XG4vLyB9XG5cbi8vIGlucHV0OjpwbGFjZWhvbGRlcixcbi8vIHRleHRhcmVhOjpwbGFjZWhvbGRlciB7XG4vLyAgIG9wYWNpdHk6IDE7XG4vLyAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycztcbi8vICAgY29sb3I6IGluaGVyaXQ7XG4vLyB9XG5cbi8vIGlucHV0OmZvY3VzOjpwbGFjZWhvbGRlcixcbi8vIHRleHRhcmVhOmZvY3VzOjpwbGFjZWhvbGRlciB7XG4vLyAgIG9wYWNpdHk6IDAuMjtcbi8vIH1cblxuLy8gaW5wdXQ6LW1zLWlucHV0LXBsYWNlaG9sZGVyLFxuLy8gdGV4dGFyZWE6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbi8vICAgb3BhY2l0eTogMTtcbi8vICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzO1xuLy8gICBjb2xvcjogaW5oZXJpdDtcbi8vIH1cblxuLy8gaW5wdXQ6Zm9jdXM6LW1zLWlucHV0LXBsYWNlaG9sZGVyLFxuLy8gdGV4dGFyZWE6Zm9jdXM6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbi8vICAgb3BhY2l0eTogMC4yO1xuLy8gfVxuXG4vLyBpbnB1dFt0eXBlPVwic2VhcmNoXCJdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uLFxuLy8gaW5wdXRbdHlwZT1cInNlYXJjaFwiXTo6LXdlYmtpdC1zZWFyY2gtY2FuY2VsLWJ1dHRvbixcbi8vIGlucHV0W3R5cGU9XCJzZWFyY2hcIl06Oi13ZWJraXQtc2VhcmNoLXJlc3VsdHMtYnV0dG9uLFxuLy8gaW5wdXRbdHlwZT1cInNlYXJjaFwiXTo6LXdlYmtpdC1zZWFyY2gtcmVzdWx0cy1kZWNvcmF0aW9uIHtcbi8vICAgZGlzcGxheTogbm9uZTtcbi8vIH1cblxuLy8gYnV0dG9uLFxuLy8gaW5wdXRbdHlwZT1cImJ1dHRvblwiXSxcbi8vIGlucHV0W3R5cGU9XCJzdWJtaXRcIl0sXG4vLyBpbnB1dFt0eXBlPVwicmVzZXRcIl0ge1xuLy8gICBAZXh0ZW5kIC5vdXRzZXQ7XG5cbi8vICAgYm9yZGVyOiAwO1xuLy8gICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbi8vICAgcGFkZGluZzogMTBweCAwO1xuLy8gICB3aWR0aDogOGVtO1xuLy8gICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4vLyAgIGN1cnNvcjogcG9pbnRlcjtcbi8vICAgY29sb3I6IGluaGVyaXQ7XG4vLyAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuLy8gICB0cmFuc2l0aW9uLXByb3BlcnR5OiBiYWNrZ3JvdW5kLWNvbG9yLCBib3gtc2hhZG93O1xuLy8gICB0cmFuc2l0aW9uLWRlbGF5OiAwLjJzO1xuLy8gICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjJzO1xuXG4vLyAgICYuYWN0aXZlLFxuLy8gICAmOmFjdGl2ZSB7XG4vLyAgICAgQGV4dGVuZCAuaW5zZXQ7XG5cbi8vICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwcztcbi8vICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjFzO1xuLy8gICB9XG5cbi8vICAgQGVhY2ggJG5hbWUsICRjb2xvciBpbiAoXCJyZWRcIjogJHJlZCwgXCJncmVlblwiOiAkZ3JlZW4sIFwiYmx1ZVwiOiAkYmx1ZSkge1xuLy8gICAgIEBhdC1yb290IC4jeyRuYW1lfS1idXR0b24sXG4vLyAgICAgICAmLiN7JG5hbWV9LWJ1dHRvbiB7XG4vLyAgICAgICBAZXh0ZW5kIGJ1dHRvbjtcblxuLy8gICAgICAgJF9iZy1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgJGNvbG9yIDMwJSwgbGlnaHRlbigkY29sb3IsIDYlKSA4MCUpO1xuXG4vLyAgICAgICBjb2xvcjogd2hpdGU7XG4vLyAgICAgICBmb250LXdlaWdodDogYm9sZDtcbi8vICAgICAgIHRleHQtc2hhZG93OiAwIDAuMWVtIDAuMWVtIHRyYW5zcGFyZW50aXplKGJsYWNrLCAwLjMpO1xuLy8gICAgICAgYmFja2dyb3VuZDogJF9iZy1pbWFnZTtcbi8vICAgICAgIGJveC1zaGFkb3c6IDAgMCAwLjVlbSB0cmFuc3BhcmVudGl6ZSgkY29sb3IsIDAuMyksIDAgMCB0cmFuc3BhcmVudCxcbi8vICAgICAgICAgaW5zZXQgMCAtNXB4IDAgdHJhbnNwYXJlbnRpemUoYmxhY2ssIDAuOTUpLFxuLy8gICAgICAgICBpbnNldCAwIDJweCAwIHRyYW5zcGFyZW50aXplKHdoaXRlLCAwLjgpO1xuLy8gICAgICAgYm9yZGVyLXJhZGl1czogNnB4IDZweCA4cHggOHB4O1xuLy8gICAgICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYm94LXNoYWRvdywgYm9yZGVyLXJhZGl1cztcblxuLy8gICAgICAgJi5hY3RpdmUsXG4vLyAgICAgICAmOmFjdGl2ZSB7XG4vLyAgICAgICAgIGJhY2tncm91bmQ6ICRfYmctaW1hZ2U7XG4vLyAgICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbi8vICAgICAgICAgYm94LXNoYWRvdzogMCAwIHRyYW5zcGFyZW50LCAwIDAgdHJhbnNwYXJlbnQsXG4vLyAgICAgICAgICAgaW5zZXQgMCAycHggNXB4IDJweCB0cmFuc3BhcmVudGl6ZShibGFjaywgMC44KTtcbi8vICAgICAgIH1cbi8vICAgICB9XG4vLyAgIH1cbi8vIH1cblxuLy8gbGFiZWwge1xuLy8gICAmLFxuLy8gICAmICoge1xuLy8gICAgIGN1cnNvcjogcG9pbnRlcjtcbi8vICAgfVxuXG4vLyAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbi8vICAgcGFkZGluZzogMC41NmVtIDA7XG4vLyB9XG5cbi8vIGEge1xuLy8gICAmLFxuLy8gICAmOmxpbmssXG4vLyAgICY6dmlzaXRlZCxcbi8vICAgJjpob3ZlciAmOmFjdGl2ZSB7XG4vLyAgICAgJixcbi8vICAgICAmICoge1xuLy8gICAgICAgY3Vyc29yOiBwb2ludGVyO1xuLy8gICAgIH1cblxuLy8gICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuLy8gICAgIGNvbG9yOiAkYmx1ZTtcbi8vICAgICBmb250LXdlaWdodDogYm9sZDtcbi8vICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4vLyAgIH1cbi8vIH1cblxuLy8gaDEsXG4vLyBoMixcbi8vIGgzLFxuLy8gaDQsXG4vLyBoNSxcbi8vIGg2IHtcbi8vICAgbGluZS1oZWlnaHQ6IDEuNWVtO1xuLy8gfVxuXG4vLyBoMSB7XG4vLyAgIGZvbnQtc2l6ZTogNGVtO1xuLy8gICBmb250LXdlaWdodDogbGlnaHRlcjtcbi8vICAgbWFyZ2luOiAwLjdlbSAwO1xuLy8gfVxuXG4vLyBoMiB7XG4vLyAgIGZvbnQtc2l6ZTogM2VtO1xuLy8gICBmb250LXdlaWdodDogbGlnaHRlcjtcbi8vICAgbWFyZ2luOiAwLjhlbSAwO1xuLy8gfVxuXG4vLyBoMyB7XG4vLyAgIGZvbnQtc2l6ZTogMi41ZW07XG4vLyAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuLy8gICBtYXJnaW46IDAuOWVtIDA7XG4vLyB9XG5cbi8vIGg0IHtcbi8vICAgZm9udC1zaXplOiAyZW07XG4vLyAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuLy8gICBtYXJnaW46IDFlbSAwO1xuLy8gfVxuXG4vLyBoNSB7XG4vLyAgIG1hcmdpbjogMC41ZW0gMDtcbi8vICAgZm9udC1zaXplOiAxLjJlbTtcbi8vICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbi8vIH1cblxuLy8gaDYge1xuLy8gICBtYXJnaW46IDFlbSAwIDFlbSAxLjRlbTtcbi8vICAgZm9udC1zaXplOiAxZW07XG4vLyAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuLy8gfVxuXG4vLyBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0sXG4vLyBpbnB1dFt0eXBlPVwicmFkaW9cIl0ge1xuLy8gICAkX2JvcmRlci13aWR0aDogMC4xNWVtO1xuLy8gICAkX2JveC1zaGFkb3c6IDJweCAycHggM3B4IHRyYW5zcGFyZW50aXplKGJsYWNrLCAwLjgpLCAtMnB4IC0ycHggM3B4IHdoaXRlLFxuLy8gICAgIGluc2V0IDFweCAxcHggMnB4IHRyYW5zcGFyZW50aXplKGJsYWNrLCAwLjgpLCBpbnNldCAtMXB4IC0xcHggMnB4IHdoaXRlO1xuLy8gICBmb250LXNpemU6IDFlbTtcbi8vICAgY3Vyc29yOiBwb2ludGVyO1xuLy8gICBoZWlnaHQ6IDEuMmVtO1xuLy8gICB3aWR0aDogMS4yZW07XG4vLyAgIG1hcmdpbjogMCAwLjNlbTtcbi8vICAgYm94LXNoYWRvdzogJF9ib3gtc2hhZG93O1xuLy8gICBib3JkZXI6ICRfYm9yZGVyLXdpZHRoIHNvbGlkICRiZy1jb2xvcjtcbi8vICAgdmVydGljYWwtYWxpZ246IHRleHQtYm90dG9tO1xuLy8gICB0cmFuc2l0aW9uLXByb3BlcnR5OiBiYWNrZ3JvdW5kLCBib3gtc2hhZG93O1xuLy8gICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjJzO1xuXG4vLyAgICY6YWN0aXZlIHtcbi8vICAgICBib3gtc2hhZG93OiAkX2JveC1zaGFkb3csIGluc2V0IDAgMC4xZW0gMC4yNWVtIHRyYW5zcGFyZW50aXplKGJsYWNrLCAwLjgpO1xuLy8gICB9XG5cbi8vICAgJjpjaGVja2VkIHtcbi8vICAgICBib3JkZXItd2lkdGg6IDAuMWVtO1xuLy8gICAgIGJvcmRlci1jb2xvcjogZGFya2VuKCRibHVlLCAxMCUpO1xuLy8gICAgIGJhY2tncm91bmQtY29sb3I6ICRibHVlO1xuLy8gICB9XG4vLyB9XG5cbi8vIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSB7XG4vLyAgIGJvcmRlci1yYWRpdXM6IDI1JTtcblxuLy8gICAmOmNoZWNrZWQge1xuLy8gICAgIGJveC1zaGFkb3c6ICRnbG93LXNoYWRvdywgaW5zZXQgMCAtMC4xZW0gMCB0cmFuc3BhcmVudGl6ZShibGFjaywgMC44KSxcbi8vICAgICAgIGluc2V0IDAgMC4xZW0gMC4xZW0gdHJhbnNwYXJlbnRpemUod2hpdGUsIDAuOCk7XG4vLyAgIH1cbi8vIH1cblxuLy8gaW5wdXRbdHlwZT1cInJhZGlvXCJdIHtcbi8vICAgYm9yZGVyLXJhZGl1czogMTAwJTtcblxuLy8gICAmOmNoZWNrZWQge1xuLy8gICAgIGJveC1zaGFkb3c6ICRnbG93LXNoYWRvdztcbi8vICAgICBib3gtc2hhZG93OiAkZ2xvdy1zaGFkb3csIGluc2V0IDAgMC4xMmVtIDAuMWVtIHRyYW5zcGFyZW50aXplKHdoaXRlLCAwLjc1KTtcbi8vICAgICBib3JkZXItYm90dG9tLXdpZHRoOiAwLjE1ZW07XG4vLyAgIH1cbi8vIH1cblxuLy8gLmNoZWNrdGV4dCB7XG4vLyAgIHdpZHRoOiBhdXRvO1xuLy8gICBtYXJnaW46IDAuNWVtO1xuXG4vLyAgIGlucHV0IHtcbi8vICAgICBkaXNwbGF5OiBub25lO1xuXG4vLyAgICAgKyBzcGFuIHtcbi8vICAgICAgIEBleHRlbmQgYnV0dG9uO1xuXG4vLyAgICAgICBmb250LXdlaWdodDogYm9sZDtcbi8vICAgICAgIHBhZGRpbmc6IDFlbTtcbi8vICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDBzO1xuLy8gICAgIH1cblxuLy8gICAgICY6Y2hlY2tlZCArIHNwYW4ge1xuLy8gICAgICAgQGV4dGVuZCAuYmx1ZS1idXR0b247XG5cbi8vICAgICAgIHBhZGRpbmc6IDFlbTtcbi8vICAgICB9XG4vLyAgIH1cbi8vIH1cblxuLy8gLnN3aXRjaCB7XG4vLyAgICRfaGVpZ2h0OiAycmVtO1xuLy8gICAkX3dpZHRoOiA4cmVtO1xuLy8gICAkX2hhbmRsZS13aWR0aDogJF9oZWlnaHQ7XG4vLyAgICRfaGFuZGxlLXRyYW5zbGF0aW9uOiAkX3dpZHRoIC0gJF9oYW5kbGUtd2lkdGg7XG5cbi8vICAgaGVpZ2h0OiAkX2hlaWdodDtcbi8vICAgd2lkdGg6ICRfd2lkdGg7XG4vLyAgIHBhZGRpbmc6IDA7XG4vLyAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuLy8gICBpbnB1dCB7XG4vLyAgICAgZGlzcGxheTogbm9uZTtcblxuLy8gICAgICsgZGl2IHtcbi8vICAgICAgIGhlaWdodDogMTAwJTtcbi8vICAgICAgIHdpZHRoOiAxMDAlO1xuLy8gICAgICAgYm9yZGVyLXJhZGl1czogOTk5cHg7XG4vLyAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbi8vICAgICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGJveC1zaGFkb3csIGJhY2tncm91bmQtY29sb3I7XG4vLyAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjJzO1xuLy8gICAgICAgdHJhbnNpdGlvbi1kZWxheTogMC4ycztcbi8vICAgICAgIGJveC1zaGFkb3c6IDNweCAzcHggMnB4IC0ycHggdHJhbnNwYXJlbnRpemUoYmxhY2ssIDAuOSksXG4vLyAgICAgICAgIGluc2V0IDJweCAycHggMnB4IDFweCB0cmFuc3BhcmVudGl6ZShibGFjaywgMC45KSxcbi8vICAgICAgICAgaW5zZXQgLTJweCAtMnB4IDFweCB3aGl0ZTtcblxuLy8gICAgICAgJjo6YmVmb3JlIHtcbi8vICAgICAgICAgY29udGVudDogXCJcIjtcbi8vICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4vLyAgICAgICAgIGhlaWdodDogY2FsYygjeyRfaGFuZGxlLXdpZHRofSArIDRweCk7XG4vLyAgICAgICAgIHdpZHRoOiBjYWxjKCN7JF9oYW5kbGUtd2lkdGh9ICsgNHB4KTtcbi8vICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbi8vICAgICAgICAgYm9yZGVyOiBzb2xpZCB3aGl0ZSAzcHg7XG4vLyAgICAgICAgIGJhY2tncm91bmQ6ICRibHVlO1xuLy8gICAgICAgICBib3gtc2hhZG93OiAwIDNweCAxMHB4IHRyYW5zcGFyZW50aXplKGJsYWNrLCAwLjgpLFxuLy8gICAgICAgICAgIGluc2V0IDAgLTFweCAzcHggdHJhbnNwYXJlbnRpemUoYmxhY2ssIDAuOSk7XG4vLyAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC02cHgpO1xuLy8gICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycztcbi8vICAgICAgIH1cbi8vICAgICB9XG5cbi8vICAgICAmOmNoZWNrZWQgKyBkaXYge1xuLy8gICAgICAgYmFja2dyb3VuZDogJGJsdWU7XG4vLyAgICAgICBib3gtc2hhZG93OiAkZ2xvdy1zaGFkb3csIGluc2V0IDAgMnB4IDJweCAycHggdHJhbnNwYXJlbnRpemUoYmxhY2ssIDAuNyksXG4vLyAgICAgICAgIGluc2V0IDAgMCB0cmFuc3BhcmVudDtcblxuLy8gICAgICAgJjo6YmVmb3JlIHtcbi8vICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoJF9oYW5kbGUtdHJhbnNsYXRpb24sIC02cHgpO1xuLy8gICAgICAgfVxuLy8gICAgIH1cbi8vICAgfVxuLy8gfVxuXG4vLyBociB7XG4vLyAgIEBleHRlbmQgLmluc2V0O1xuLy8gICB3aWR0aDogNzIlO1xuLy8gICBoZWlnaHQ6IDhweDtcbi8vICAgZmxvYXQ6IHJpZ2h0O1xuLy8gICBib3JkZXI6IDA7XG4vLyB9XG5cbi8vIGNvZGUsXG4vLyBwcmUge1xuLy8gICBwYWRkaW5nOiAwLjVlbSAxZW07XG4vLyAgIGJvcmRlci1yYWRpdXM6IDRweDtcbi8vICAgb3ZlcmZsb3c6IGF1dG87XG4vLyAgIGJveC1zaGFkb3c6IDAgNXB4IDMwcHggMCB0cmFuc3BhcmVudGl6ZShibGFjaywgMC45NSk7XG4vLyB9XG5cbi8vIGNvZGUge1xuLy8gICBiYWNrZ3JvdW5kOiAjZTZlNmU2O1xuLy8gfVxuXG4vLyBwcmUge1xuLy8gICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbi8vICAgbWFyZ2luOiA0ZW0gMDtcbi8vIH1cblxuLy8gY29kZSxcbi8vIHByZSB7XG4vLyAgICYsXG4vLyAgICYgKiB7XG4vLyAgICAgZm9udC1zaXplOiAwLjlyZW07XG4vLyAgICAgbGluZS1oZWlnaHQ6IDJlbTtcbi8vICAgICBjdXJzb3I6IGF1dG87XG4vLyAgICAgdXNlci1zZWxlY3Q6IHRleHQ7XG4vLyAgICAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiB0ZXh0O1xuLy8gICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IHRleHQ7XG4vLyAgICAgLWtodG1sLXVzZXItc2VsZWN0OiB0ZXh0O1xuLy8gICAgIC1tb3otdXNlci1zZWxlY3Q6IHRleHQ7XG4vLyAgICAgLW1zLXVzZXItc2VsZWN0OiB0ZXh0O1xuLy8gICB9XG4vLyB9XG5cbi8vIGJsb2NrcXVvdGUge1xuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbi8vICAgcGFkZGluZzogMC41ZW0gMWVtO1xuLy8gICBib3JkZXItcmFkaXVzOiA0cHg7XG4vLyAgIGJveC1zaGFkb3c6IDAgNXB4IDMwcHggMCB0cmFuc3BhcmVudGl6ZShibGFjaywgMC45NSk7XG4vLyAgIGJvcmRlci1sZWZ0OiA2cHggc29saWQgJGJsdWU7XG4vLyB9XG4iLCJAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ0NhdmVhdCc7XG4gICAgc3JjOiB1cmwoJy4uLy4uL2ZvbnRzL0JvbGQvQ2F2ZWF0LUJvbGQud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXG4gICAgICAgIHVybCgnLi4vLi4vZm9udHMvQm9sZC9DYXZlYXQtQm9sZC53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtZGlzcGxheTogc3dhcDtcbn1cblxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdDYXZlYXQnO1xuICAgIHNyYzogdXJsKCcuLi8uLi9mb250cy9SZWd1bGFyL0NhdmVhdC1SZWd1bGFyLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxuICAgICAgICB1cmwoJy4uLy4uL2ZvbnRzL1JlZ3VsYXIvQ2F2ZWF0LVJlZ3VsYXIud29mZicpIGZvcm1hdCgnd29mZicpO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtZGlzcGxheTogc3dhcDtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnRmlndXJpbmVTeW1ib2xUMSc7XG4gIHNyYzogdXJsKCcuLi8uLi9mb250cy8zcmQgUGFydHkvQ2hlc3NWYXJpYW50cy9GaWd1cmluZVN5bWJvbFQxQm9sZC53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcbiAgICAgIHVybCgnLi4vLi4vZm9udHMvM3JkIFBhcnR5L0NoZXNzVmFyaWFudHMvRmlndXJpbmVTeW1ib2xUMUJvbGQud29mZicpIGZvcm1hdCgnd29mZicpO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ0ZpZ3VyaW5lU3ltYm9sVDEnO1xuICBzcmM6IHVybCgnLi4vLi4vZm9udHMvM3JkIFBhcnR5L0NoZXNzVmFyaWFudHMvRmlndXJpbmVTeW1ib2xUMS53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcbiAgICAgIHVybCgnLi4vLi4vZm9udHMvM3JkIFBhcnR5L0NoZXNzVmFyaWFudHMvRmlndXJpbmVTeW1ib2xUMS53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdTYW5jdHVhcnlQbGF5Z3JvdW5kJztcbiAgc3JjOiB1cmwoJy4uLy4uL2ZvbnRzLzNyZCBQYXJ0eS9TYW5jdHVhcnlQbGF5Z3JvdW5kLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxuICAgICAgdXJsKCcuLi8uLi9mb250cy8zcmQgUGFydHkvU2FuY3R1YXJ5UGxheWdyb3VuZC53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xufVxuXG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ0FtaXRhJztcbiAgc3JjOiB1cmwoJy4uLy4uL2ZvbnRzLzNyZCBQYXJ0eS9BbWl0YS9BbWl0YS1SZWd1bGFyLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxuICAgICAgdXJsKCcuLi8uLi9mb250cy8zcmQgUGFydHkvQW1pdGEvQW1pdGEtUmVndWxhci53b2ZmMicpIGZvcm1hdCgnd29mZicpO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbn0iLCIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiQ2F2ZWF0XCI7XG4gIHNyYzogdXJsKFwiLi4vLi4vZm9udHMvQm9sZC9DYXZlYXQtQm9sZC53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKSwgdXJsKFwiLi4vLi4vZm9udHMvQm9sZC9DYXZlYXQtQm9sZC53b2ZmXCIpIGZvcm1hdChcIndvZmZcIik7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJDYXZlYXRcIjtcbiAgc3JjOiB1cmwoXCIuLi8uLi9mb250cy9SZWd1bGFyL0NhdmVhdC1SZWd1bGFyLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpLCB1cmwoXCIuLi8uLi9mb250cy9SZWd1bGFyL0NhdmVhdC1SZWd1bGFyLndvZmZcIikgZm9ybWF0KFwid29mZlwiKTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiRmlndXJpbmVTeW1ib2xUMVwiO1xuICBzcmM6IHVybChcIi4uLy4uL2ZvbnRzLzNyZCBQYXJ0eS9DaGVzc1ZhcmlhbnRzL0ZpZ3VyaW5lU3ltYm9sVDFCb2xkLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpLCB1cmwoXCIuLi8uLi9mb250cy8zcmQgUGFydHkvQ2hlc3NWYXJpYW50cy9GaWd1cmluZVN5bWJvbFQxQm9sZC53b2ZmXCIpIGZvcm1hdChcIndvZmZcIik7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJGaWd1cmluZVN5bWJvbFQxXCI7XG4gIHNyYzogdXJsKFwiLi4vLi4vZm9udHMvM3JkIFBhcnR5L0NoZXNzVmFyaWFudHMvRmlndXJpbmVTeW1ib2xUMS53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKSwgdXJsKFwiLi4vLi4vZm9udHMvM3JkIFBhcnR5L0NoZXNzVmFyaWFudHMvRmlndXJpbmVTeW1ib2xUMS53b2ZmXCIpIGZvcm1hdChcIndvZmZcIik7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlNhbmN0dWFyeVBsYXlncm91bmRcIjtcbiAgc3JjOiB1cmwoXCIuLi8uLi9mb250cy8zcmQgUGFydHkvU2FuY3R1YXJ5UGxheWdyb3VuZC53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKSwgdXJsKFwiLi4vLi4vZm9udHMvM3JkIFBhcnR5L1NhbmN0dWFyeVBsYXlncm91bmQud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJBbWl0YVwiO1xuICBzcmM6IHVybChcIi4uLy4uL2ZvbnRzLzNyZCBQYXJ0eS9BbWl0YS9BbWl0YS1SZWd1bGFyLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpLCB1cmwoXCIuLi8uLi9mb250cy8zcmQgUGFydHkvQW1pdGEvQW1pdGEtUmVndWxhci53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmXCIpO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbn1cbi8qKioqKioqKioqKioqKioqKioqIE1lbnUgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKioqKioqIE1lbnUgQ29udHJvbHMgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBDb250YWluZXIgVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgQ29udGFpbmVyIFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIENvbnRhaW5lciBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBIaWdobGlnaHQgVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgQW5ub3RhdGlvbiBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBWYXJpYXRpb24gVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgUGx5IFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKiogQ29udHJvbCBDb2xvcnMgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKioqIEJvYXJkIENvbG9ycyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKiogRm9udCBTaXplcyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG46cm9vdCB7XG4gIC0tYmctY29sb3I6ICNmMmYzZjc7XG4gIC0tZmctY29sb3I6ICMzODNhNDE7XG4gIC0tcmVkOiAjZTQzMDMwO1xuICAtLWdyZWVuOiAjMTlhMTg3O1xuICAtLWJsdWU6ICMzNjdiZjA7XG4gIC0tZGFyay1ibHVlOiAjMjY1YWIxO1xuICAtLW1hcm9vbjogI2I4MTc0YztcbiAgLS1wdXJwbGU6ICM4YzQyYWI7XG59XG5cbnNjb3JlLWNvbHVtbiB7XG4gIG1pbi13aWR0aDogMTcycHg7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnNjb3JlLWFyZWEge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XG4gIHdpZHRoOiAxMDAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xufVxuXG4uY29tbWVudCB7XG4gIHBhZGRpbmc6IDJweDtcbiAgbWF4LWhlaWdodDogNDJweDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgcGFkZGluZy1sZWZ0OiA0cHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWdzQmFja2dyb3VuZEFOKTtcbiAgY29sb3I6IHZhcigtLWdzVGV4dENvbG9yQU4pO1xuICBib3JkZXI6IHZhcigtLWdzQm9yZGVyQU4pO1xuICBmb250LXNpemU6IHZhcigtLWdzVGV4dFNpemUpO1xufVxuXG4udmFyaWF0aW9uLWJhciB7XG4gIG1pbi1oZWlnaHQ6IDI4cHg7XG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG5cbi52YXJpYXRpb24tdGl0bGUge1xuICBvcmRlcjogMDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ScoreTableComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'score-table',
                templateUrl: './score-table.component.html',
                styleUrls: ['./score-table.component.scss']
            }]
    }], function () { return [{ type: _services_olga_service__WEBPACK_IMPORTED_MODULE_2__["OlgaService"] }, { type: _services_themes_service__WEBPACK_IMPORTED_MODULE_3__["ThemeService"] }, { type: _services_layout_service__WEBPACK_IMPORTED_MODULE_4__["LayoutService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }]; }, { scoreTables: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"],
            args: [_score_column_score_column_component__WEBPACK_IMPORTED_MODULE_1__["ScoreColumnComponent"]]
        }], comment: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['comment', { static: false }]
        }], scoreArea: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['scoreArea', { static: false }]
        }], items: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], columns: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], rowCount: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], currentItem: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], moveComment: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/olga-score/score-table/table-item/table-item.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/olga-score/score-table/table-item/table-item.component.ts ***!
  \***************************************************************************/
/*! exports provided: TableItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableItemComponent", function() { return TableItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_common_kokopu_engine__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/common/kokopu-engine */ "./src/app/common/kokopu-engine.ts");
/* harmony import */ var src_app_services_olga_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/olga.service */ "./src/app/services/olga.service.ts");
/* harmony import */ var src_app_services_themes_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/themes.service */ "./src/app/services/themes.service.ts");





class TableItemComponent {
    //@ViewChild('gsiPly') gsiPly!: ElementRef;
    constructor(olga, themes) {
        this.olga = olga;
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
                showing = this.olga.showingPly.value;
            }
            else {
                showing = this.olga.showingHalfPly.value;
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
                return this.olga.showingPly.value;
            }
            return this.olga.showingHalfPly.value;
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
    isSelected() {
        if (this.whiteMove) {
            return (this.whiteMove.type & src_app_common_kokopu_engine__WEBPACK_IMPORTED_MODULE_1__["GameScoreType"].Selected) == src_app_common_kokopu_engine__WEBPACK_IMPORTED_MODULE_1__["GameScoreType"].Selected;
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
                this.olga.displayVariations(this.whiteMove);
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
TableItemComponent.ɵfac = function TableItemComponent_Factory(t) { return new (t || TableItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_olga_service__WEBPACK_IMPORTED_MODULE_2__["OlgaService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_themes_service__WEBPACK_IMPORTED_MODULE_3__["ThemeService"])); };
TableItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TableItemComponent, selectors: [["table-item"]], inputs: { whiteMove: "whiteMove", blackMove: "blackMove" }, outputs: { typeName: "typeName", ply: "ply", whiteScore: "whiteScore", blackScore: "blackScore" }, decls: 9, vars: 9, consts: [[1, "gsi-container"], ["domElement", ""], [1, "gsi-ply", 3, "click"], ["gsiPly", ""]], template: function TableItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableItemComponent_Template_div_click_2_listener() { return ctx.clickMove(); });
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
    } }, styles: ["@font-face {\n  font-family: \"Caveat\";\n  src: url('Caveat-Bold.woff2') format(\"woff2\"), url('Caveat-Bold.woff') format(\"woff\");\n  font-weight: bold;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"Caveat\";\n  src: url('Caveat-Regular.woff2') format(\"woff2\"), url('Caveat-Regular.woff') format(\"woff\");\n  font-weight: 600;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"FigurineSymbolT1\";\n  src: url('FigurineSymbolT1Bold.woff2') format(\"woff2\"), url('FigurineSymbolT1Bold.woff') format(\"woff\");\n  font-weight: bold;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"FigurineSymbolT1\";\n  src: url('FigurineSymbolT1.woff2') format(\"woff2\"), url('FigurineSymbolT1.woff') format(\"woff\");\n  font-weight: 600;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"SanctuaryPlayground\";\n  src: url('SanctuaryPlayground.woff2') format(\"woff2\"), url('SanctuaryPlayground.woff') format(\"woff\");\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"Amita\";\n  src: url('Amita-Regular.woff2') format(\"woff2\"), url('Amita-Regular.woff2') format(\"woff\");\n  font-style: normal;\n  font-display: swap;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n[_ngcontent-%COMP%]:root {\n  --bg-color: #f2f3f7;\n  --fg-color: #383a41;\n  --red: #e43030;\n  --green: #19a187;\n  --blue: #367bf0;\n  --dark-blue: #265ab1;\n  --maroon: #b8174c;\n  --purple: #8c42ab;\n}\n.gsi-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n}\n.white-move[_ngcontent-%COMP%] {\n  border: black 2px solid;\n  background: white;\n  font-size: 22px;\n  min-height: 22px;\n  text-align: center;\n  min-width: 74px;\n  width: var(--gsTableItemWidth);\n  height: auto;\n  color: black;\n  font-weight: bold;\n  padding-top: 2px;\n  font-size: var(--gsFontSize);\n  font-family: var(--gsFontFamily);\n}\n.black-move[_ngcontent-%COMP%] {\n  border: black 2px solid;\n  background: grey;\n  font-size: 16px;\n  text-align: center;\n  color: white;\n  min-width: 74px;\n  width: var(--gsTableItemWidth);\n  height: auto;\n  font-size: var(--gsFontSize);\n  font-family: var(--gsFontFamily);\n}\n.gsi-ply[_ngcontent-%COMP%] {\n  color: var(--gsTextColor);\n  font-weight: bold;\n  font-size: var(--gsFontSize);\n  background: #4e75a8;\n  width: var(--gsTablePlyWidth);\n  text-align: center;\n  padding-top: 4px;\n  border: 1px solid black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMuc2NzcyIsInNyYy9hc3NldHMvc2Nzcy9tb2R1bGVzL19mb250cy5zY3NzIiwic3JjL2FwcC9vbGdhLXNjb3JlL3Njb3JlLXRhYmxlL3RhYmxlLWl0ZW0vdGFibGUtaXRlbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4RUFBQTtBQ0FBO0VBQ0kscUJBQUE7RUFDQSxxRkFBQTtFQUVBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0NKO0FERUE7RUFDSSxxQkFBQTtFQUNBLDJGQUFBO0VBRUEsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDREo7QURJQTtFQUNFLCtCQUFBO0VBQ0EsdUdBQUE7RUFFQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNIRjtBRE1BO0VBQ0UsK0JBQUE7RUFDQSwrRkFBQTtFQUVBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0xGO0FEUUE7RUFDRSxrQ0FBQTtFQUNBLHFHQUFBO0VBRUEsa0JBQUE7RUFDQSxrQkFBQTtBQ1BGO0FEV0E7RUFDRSxvQkFBQTtFQUNBLDBGQUFBO0VBRUEsa0JBQUE7RUFDQSxrQkFBQTtBQ1ZGO0FGREEsK0VBQUE7QUFHQSxrRkFBQTtBQUtBLCtFQUFBO0FBVUEsK0VBQUE7QUFNQSwrRUFBQTtBQU1BLCtFQUFBO0FBTUEsZ0ZBQUE7QUFLQSwrRUFBQTtBQUtBLHlFQUFBO0FBS0EseUVBQUE7QUFJQSx1RUFBQTtBQVFBLHFFQUFBO0FBeUJBO0VBQ0UsbUJBQUE7RUFDQSxtQkFBQTtFQUVBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUUxRUY7QUE3REE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQWdFSjtBQTlEQTtFQUNJLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSw4QkZ5Q2U7RUV4Q2YsWUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNEJGcUZTO0VFcEZULGdDRmtDVztBRStCZjtBQTlEQTtFQUNJLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLDhCRnlCZTtFRXhCZixZQUFBO0VBQ0EsNEJGd0VTO0VFdkVULGdDRnFCVztBRTRDZjtBQS9EQTtFQUNFLHlCRmFZO0VFWlosaUJBQUE7RUFDQSw0QkZrRVc7RUVqRVgsbUJBQUE7RUFDQSw2QkZnQmdCO0VFZmhCLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQWtFRiIsImZpbGUiOiJzcmMvYXBwL29sZ2Etc2NvcmUvc2NvcmUtdGFibGUvdGFibGUtaXRlbS90YWJsZS1pdGVtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuXG5AaW1wb3J0IFwiLi9hc3NldHMvc2Nzcy9tb2R1bGVzL19mb250cy5zY3NzXCI7XG4kZ2FtZXNjb3JlLWZhbWlseTogXCJGaWd1cmluZVN5bWJvbFQxXCI7XG4kZ2FtZXNjb3JlLWhpZ2hsaWdodDogIzU4NTg1OGZmO1xuJGdhbWVzY29yZS1mb3JlZ3JvdW5kOiB3aGl0ZTtcblxuJHJlZDogI2U0MzAzMDtcbiRncmVlbjogIzE5YTE4NztcbiRsaWdodC1ibHVlOiAjMDBmZmZmZmY7XG4kYmx1ZTogIzM2N2JmMDtcbiRkYXJrLWJsdWU6ICMyNjVhYjE7XG4kbWFyb29uOiAjYjgxNzRjO1xuJHB1cnBsZTogIzhjNDJhYjtcblxuLy8gTWFpbiBPTEdBIENvbG9yIEVsZW1lbnQgVmFyaWFibGVzXG4kdGV4dENvbG9yOiB2YXIoLS10ZXh0Q29sb3IpOyAvLyBNYWluIFRleHQgQ29sb3JcbiR0ZXh0Q29sb3JBdHRlbnRpb246IHZhcigtLXRleHRDb2xvckF0dGVudGlvbik7IC8vIEF0dGVudGlvbiB0ZXh0XG4kdGV4dENvbG9yUmVtb3ZlOiB2YXIoLS10ZXh0Q29sb3JSZW1vdmUpOyAvLyBSZW1vdmUvRGVsZXRlL0Nsb3NlXG4kdGV4dENvbG9yQWRkOiB2YXIoLS10ZXh0Q29sb3JBZGQpOyAvLyBBZGQvQ3JlYXRlL09wZW5cbiR0ZXh0Q29sb3JBY3RpdmU6IHZhcigtLXRleHRDb2xvckFjdGl2ZSk7IC8vIEFkZC9DcmVhdGUvT3BlblxuJGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQpOyAvLyBNYWluIGJhY2tncm91bmQgQ29sb3JcbiRiZ0NvbnRhaW5lcjogdmFyKC0tYmdDb250YWluZXIpOyAvLyBiYWNrZ3JvdW5kIG9mIENvbnRhaW5lcnNcbiRiZ01lbnU6IHZhcigtLWJnTWVudSk7IC8vIGJhY2tncm91bmQgb2YgTWVudXNcbiRiZ0l0ZW06IHZhcigtLWJnSXRlbSk7IC8vIGJhY2tncm91bmQgb2YgSXRlbXNcblxuLy8gQ29udGV4dCBNZW51XG4kYmdDb250ZXh0OiB2YXIoLS1iZ0NvbnRleHQpOyAvLyBiYWNrZ3JvdW5kIG9mIENvbnRleHQgTWVudVxuJHRleHRDb2xvckNvbnRleHQ6IHZhcigtLXRleHRDb2xvckNvbnRleHQpOyAvLyB0ZXh0IGNvbG9yIENvbnRleHQgTWVudVxuJGJvcmRlckNvbnRleHQ6IHZhcigtLWJvcmRlckNvbnRleHQpOyAvLyBib3JkZXIgQ29udGV4dCBNZW51XG4kb3ZlcmxheUNvbnRleHRCYWNrZ3JvdW5kOiB2YXIoXG4gIC0tb3ZlcmxheUNvbnRleHRCYWNrZ3JvdW5kXG4pOyAvLyBDb250ZXh0IE1lbnUgT3ZlcmxheSBiYWNrZ3JvdW5kIG1haW5cbiRvdmVybGF5Q29udGV4dEJhY2tncm91bmRHcmFkaWVudDogdmFyKFxuICAtLW92ZXJsYXlDb250ZXh0QmFja2dyb3VuZEdyYWRpZW50XG4pOyAvLyBDb250ZXh0IE1lbnUgYmFja2dyb3VuZCBncmFkaWVudFxuXG5cblxuLyoqKioqKioqKioqKioqKioqKiogTWVudSAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiRtZUJhY2tncm91bmQ6IHZhcigtLW1lQmFja2dyb3VuZCk7XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKiogTWVudSBDb250cm9scyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4kY3NGaWxsOiB2YXIoLS1jc0ZpbGwpO1xuJGNzQWNjZW50OiB2YXIoLS1jc0FjY2VudCk7XG4kY3NBY2NlbnQyOiB2YXIoLS1jc0FjY2VudDIpO1xuXG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIENvbnRhaW5lciBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuJGdzVGV4dENvbG9yOiB2YXIoLS1nc1RleHRDb2xvcik7IC8vIFRleHQgY29sb3IgZm9yIGdhbWUgc2NvcmVcbiRnc0JhY2tncm91bmQ6IHZhcigtLWdzQmFja2dyb3VuZCk7IC8vIGJhY2tncm91bmQgb2YgQ29udGFpbmVyc1xuJGdzTGlzdEJhY2tncm91bmQ6IHZhcigtLWdzTGlzdEJhY2tncm91bmQpOyAvLyBsaXN0IGJhY2tncm91bmQgb2YgZ2FtZSBzY29yZVxuJGdzQm9yZGVyOiB2YXIoLS1nc0JvcmRlcik7IC8vIGJhY2tncm91bmQgb2YgTWVudXNcbiRnc1RleHRTaXplOiB2YXIoLS1nc1RleHRTaXplKTsgLy8gYmFja2dyb3VuZCBvZiBNZW51c1xuJGdzRm9udEZhbWlseTogdmFyKC0tZ3NGb250RmFtaWx5KTsgLy8gc2NvcmUgZm9udFxuJGdzVGFibGVJdGVtV2lkdGg6IHZhcigtLWdzVGFibGVJdGVtV2lkdGgpOyAvLyB3aWR0aCBvZiBzY29yZSBpdGVtIGluIHRhYmxlIGxheW91dFxuJGdzVGFibGVQbHlXaWR0aDogdmFyKC0tZ3NUYWJsZVBseVdpZHRoKTsgLy8gd2lkdGggb2YgcGx5IGVsZW1lbnQgaW4gdGFibGUgbGF5b3V0XG5cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgQ29udGFpbmVyIFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4kZ3NUZXh0Q29sb3JNVzogdmFyKC0tZ3NUZXh0Q29sb3JNVyk7IC8vIFRleHQgY29sb3IgZm9yIGdhbWUgc2NvcmVcbiRnc0JhY2tncm91bmRNVzogdmFyKC0tZ3NCYWNrZ3JvdW5kTVcpOyAvLyBiYWNrZ3JvdW5kIG9mIENvbnRhaW5lcnNcbiRnc0JvcmRlck1XOiB2YXIoLS1nc0JvcmRlck1XKTsgLy8gYmFja2dyb3VuZCBvZiBNZW51c1xuJGdzVGV4dFNpemVNVzogdmFyKC0tZ3NUZXh0U2l6ZU1XKTsgLy8gYmFja2dyb3VuZCBvZiBNZW51c1xuXG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIENvbnRhaW5lciBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuJGdzVGV4dENvbG9yTUI6IHZhcigtLWdzVGV4dENvbG9yTUIpOyAvLyBUZXh0IGNvbG9yIGZvciBnYW1lIHNjb3JlXG4kZ3NCYWNrZ3JvdW5kTUI6IHZhcigtLWdzQmFja2dyb3VuZE1CKTsgLy8gYmFja2dyb3VuZCBvZiBDb250YWluZXJzXG4kZ3NCb3JkZXJNQjogdmFyKC0tZ3NCb3JkZXJNQik7IC8vIGJhY2tncm91bmQgb2YgTWVudXNcbiRnc1RleHRTaXplTUI6IHZhcigtLWdzVGV4dFNpemVNQik7IC8vIGJhY2tncm91bmQgb2YgTWVudXNcblxuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBIaWdobGlnaHQgVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiRnc1RleHRDb2xvckhHOiB2YXIoLS1nc1RleHRDb2xvckhHKTsgLy8gVGV4dCBjb2xvciBmb3IgaGlnaGxpZ2h0XG4kZ3NBbm5vdGF0aW9uQ29sb3JIRzogdmFyKC0tZ3NBbm5vdGF0aW9uQ29sb3JIRyk7IC8vIEFubm90YXRpb24vQ29tbWVudCBjb2xvciBmb3IgaGlnaGxpZ2h0XG4kZ3NCYWNrZ3JvdW5kSEc6IHZhcigtLWdzQmFja2dyb3VuZEhHKTsgLy8gYmFja2dyb3VuZCBmb3IgaGlnaGxpZ2h0XG4kZ3NCb3JkZXJIRzogdmFyKC0tZ3NCb3JkZXJIRyk7IC8vIGJvcmRlciBmb3IgaGlnaGxpZ2h0XG5cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgQW5ub3RhdGlvbiBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuJGdzVGV4dENvbG9yQU46IHZhcigtLWdzVGV4dENvbG9yQU4pOyAvLyBUZXh0IGNvbG9yIGZvciBoaWdobGlnaHRcbiRnc0JhY2tncm91bmRBTjogdmFyKC0tZ3NCYWNrZ3JvdW5kQU4pOyAvLyBiYWNrZ3JvdW5kIGZvciBoaWdobGlnaHRcbiRnc0JvcmRlckFOOiB2YXIoLS1nc0JvcmRlckFOKTsgLy8gYm9yZGVyIGZvciBoaWdobGlnaHRcblxuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBWYXJpYXRpb24gVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiRnc1RleHRDb2xvclZBOiB2YXIoLS1nc1RleHRDb2xvclZBKTsgLy8gVGV4dCBjb2xvciBmb3IgaGlnaGxpZ2h0XG4kZ3NCYWNrZ3JvdW5kVkE6IHZhcigtLWdzQmFja2dyb3VuZFZBKTsgLy8gYmFja2dyb3VuZCBmb3IgaGlnaGxpZ2h0XG4kZ3NCb3JkZXJWQTogdmFyKC0tZ3NCb3JkZXJWQSk7IC8vIGJvcmRlciBmb3IgaGlnaGxpZ2h0XG5cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgUGx5IFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4kZ3NUZXh0Q29sb3JQQzogdmFyKC0tZ3NUZXh0Q29sb3JQQyk7IC8vIFRleHQgY29sb3IgZm9yIGdhbWUgc2NvcmUgcGx5XG4kZ3NCYWNrZ3JvdW5kUEM6IHZhcigtLWdzQmFja2dyb3VuZFBDKTsgLy8gYmFja2dyb3VuZCBmb3IgZ2FtZSBzY29yZSBwbHlcbiRnc0JvcmRlclBDOiB2YXIoLS1nc0JvcmRlclBDKTsgLy8gYm9yZGVyIGZvciBnYW1lIHNjb3JlIHBseVxuXG4vKioqKioqKioqKioqKioqKioqKiogQ29udHJvbCBDb2xvcnMgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuJGNzQmFja2dyb3VuZDogdmFyKC0tY3NCYWNrZ3JvdW5kKTsgLy8gYmFja2dyb3VuZCBmb3IgY29udHJvbHNcbiRjc0NvbG9yOiB2YXIoLS1jc0NvbG9yKTsgLy8gY29udHJvbHMgY29sb3IgKGZvcmVncm91bmQpXG5cbi8qKioqKioqKioqKioqKioqKioqKiBCb2FyZCBDb2xvcnMgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuJGJvYXJkQkdEYXJrOiB2YXIoLS1ib2FyZEJHRGFyayk7IC8vIGJvYXJkIGRhcmsgdGlsZVxuJGJvYXJkQkdMaWdodDogdmFyKC0tYm9hcmRCR0xpZ2h0KTsgLy8gYm9hcmQgbGlnaHQgdGlsZVxuJGJvYXJkTGFiZWxMaWdodDogdmFyKC0tYm9hcmRMYWJlbExpZ2h0KTsgLy8gYm9hcmQgbGlnaHQgbGFiZWxcbiRib2FyZExhYmVsRGFyazogdmFyKC0tYm9hcmRMYWJlbERhcmspOyAvLyBib2FyZCBkYXJrIGxhYmVsXG5cblxuXG4vKioqKioqKioqKioqKioqKioqKiogRm9udCBTaXplcyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4kZ3NGb250U2l6ZTogdmFyKC0tZ3NGb250U2l6ZSk7IC8vIGJvYXJkIGRhcmsgdGlsZVxuJGdzRm9udFNpemVBTjogdmFyKC0tZ3NGb250U2l6ZUFOKTsgLy8gYm9hcmQgbGlnaHQgdGlsZVxuJGdzRm9udFNpemVIRzogdmFyKC0tZ3NGb250U2l6ZUhHKTsgLy8gYm9hcmQgbGlnaHQgbGFiZWxcbiRnc0ZvbnRTaXplVkE6IHZhcigtLWdzRm9udFNpemVWQSk7IC8vIGJvYXJkIGRhcmsgbGFiZWxcbiRnc0ZvbnRTaXplUEM6IHZhcigtLWdzRm9udFNpemVQQyk7IC8vIGJvYXJkIGRhcmsgbGFiZWxcbiRoZHJEYXRhRm9udFNpemU6IHZhcigtLWhkckRhdGFGb250U2l6ZSk7IC8vIHNpemUgb2YgcGxheWVyIHNob3djYXNlIGRhdGFcbiRoZHJOYW1lRm9udFNpemU6IHZhcigtLWhkck5hbWVGb250U2l6ZSk7IC8vIHNpemUgb2YgcGxheWVyIHNob3djYXNlIE5hbWVcbiRoZHJUaXRsZUZvbnRTaXplOiB2YXIoLS1oZHJUaXRsZUZvbnRTaXplKTsgLy8gc2l6ZSBvZiBwbGF5ZXIgc2hvd2Nhc2UgZGF0YVxuJGhkclZhcmlhbnRGb250U2l6ZTogdmFyKC0taGRyVmFyaWFudEZvbnRTaXplKTsgLy8gc2l6ZSBvZiBwbGF5ZXIgc2hvd2Nhc2UgTmFtZVxuJGhkck1hdGNoRGF0YUZvbnRTaXplOiB2YXIoLS1oZHJNYXRjaERhdGFGb250U2l6ZSk7IC8vIHNpemUgb2YgcGxheWVyIHNob3djYXNlIE5hbWVcbiRoZHJPcGVuaW5nRm9udFNpemU6IHZhcigtLWhkck1hdGNoRGF0YUZvbnRTaXplKTsgLy8gc2l6ZSBvZiBwbGF5ZXIgc2hvd2Nhc2UgTmFtZVxuJGhkclJlc3VsdEZvbnRTaXplOiB2YXIoLS1oZHJSZXN1bHRGb250U2l6ZSk7IC8vIHNpemUgb2YgcGxheWVyIHNob3djYXNlIE5hbWVcbiRoZHJSb3VuZEZvbnRTaXplOiB2YXIoLS1oZHJSb3VuZEZvbnRTaXplKTsgLy8gc2l6ZSBvZiBwbGF5ZXIgc2hvd2Nhc2UgTmFtZVxuXG4vLyBHZW5lcmFsIHN0dWZmXG4kdGV4dC1jb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XG4kYmctb3V0ZXI6IHZhcigtLWJnLW91dGVyKTtcbiRiZy1pbm5lcjogdmFyKC0tYmctaW5uZXIpO1xuXG4kYmctY29sb3I6ICNmMmYzZjc7XG4kZmctY29sb3I6ICMzODNhNDE7XG5cbiRnbG93LXNoYWRvdzogMCAwIDAuNWVtIHRyYW5zcGFyZW50aXplKCRibHVlLCAwLjMpO1xuXG46cm9vdCB7XG4gIC0tYmctY29sb3I6ICN7JGJnLWNvbG9yfTtcbiAgLS1mZy1jb2xvcjogI3skZmctY29sb3J9O1xuXG4gIC0tcmVkOiAjeyRyZWR9O1xuICAtLWdyZWVuOiAjeyRncmVlbn07XG4gIC0tYmx1ZTogI3skYmx1ZX07XG4gIC0tZGFyay1ibHVlOiAjeyRkYXJrLWJsdWV9O1xuICAtLW1hcm9vbjogI3skbWFyb29ufTtcbiAgLS1wdXJwbGU6ICN7JHB1cnBsZX07XG59XG5cbi8vIDo6LW1vei1mb2N1cy1pbm5lcixcbi8vIDotbW96LWZvY3VzcmluZyB7XG4vLyAgIGJvcmRlcjogMDtcbi8vICAgY29sb3I6IHRyYW5zcGFyZW50O1xuLy8gICB0ZXh0LXNoYWRvdzogMCAwIDAgJGZnLWNvbG9yO1xuLy8gfVxuXG4vLyA6OnNlbGVjdGlvbixcbi8vIDo6LW1vei1zZWxlY3Rpb24ge1xuLy8gICBjb2xvcjogd2hpdGU7XG4vLyAgIGJhY2tncm91bmQ6IGJsYWNrO1xuLy8gfVxuXG4vLyAqIHtcbi8vICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbi8vICAgb3V0bGluZTogbm9uZTtcbi8vICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4vLyAgIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcbi8vICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbi8vICAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lO1xuLy8gICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuLy8gICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4vLyAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbi8vICAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuLy8gICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCkgIWltcG9ydGFudDtcbi8vICAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xuLy8gICBjdXJzb3I6IGRlZmF1bHQ7XG4vLyAgIGxldHRlci1zcGFjaW5nOiAwO1xuLy8gfVxuXG4vLyAuc2VsZWN0YWJsZSxcbi8vIC5zZWxlY3RhYmxlICoge1xuLy8gICBjdXJzb3I6IGF1dG87XG4vLyAgIHVzZXItc2VsZWN0OiB0ZXh0O1xuLy8gICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IHRleHQ7XG4vLyAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IHRleHQ7XG4vLyAgIC1raHRtbC11c2VyLXNlbGVjdDogdGV4dDtcbi8vICAgLW1vei11c2VyLXNlbGVjdDogdGV4dDtcbi8vICAgLW1zLXVzZXItc2VsZWN0OiB0ZXh0O1xuLy8gfVxuXG4vLyBodG1sLFxuLy8gYm9keSB7XG4vLyAgIGJhY2tncm91bmQtY29sb3I6ICRiZy1jb2xvcjtcbi8vICAgY29sb3I6ICRmZy1jb2xvcjtcbi8vICAgbWFyZ2luOiAwO1xuLy8gICBwYWRkaW5nOiAwO1xuLy8gICBmb250LXNpemU6IDEwcHQ7XG4vLyAgIGhlaWdodDogMTAwJTtcbi8vICAgb3ZlcmZsb3c6IGF1dG87XG4vLyB9XG5cbi8vIC53aXRoLXNoYWRvdyB7XG4vLyAgIGJveC1zaGFkb3c6IDZweCA2cHggMTBweCB0cmFuc3BhcmVudGl6ZShibGFjaywgMC45KSwgLTZweCAtNnB4IDEwcHggd2hpdGU7XG4vLyB9XG5cbi8vIC5vdXRzZXQge1xuLy8gICBAZXh0ZW5kIC53aXRoLXNoYWRvdztcblxuLy8gICBib3JkZXItcmFkaXVzOiAxMHB4O1xuLy8gICBiYWNrZ3JvdW5kOiAkYmctY29sb3I7XG4vLyB9XG5cbi8vIC5pbnNldCB7XG4vLyAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4vLyAgIGJveC1zaGFkb3c6IDAgMCB0cmFuc3BhcmVudCwgMCAwIHRyYW5zcGFyZW50LFxuLy8gICAgIGluc2V0IDNweCAzcHggNXB4IHRyYW5zcGFyZW50aXplKGJsYWNrLCAwLjkpLCBpbnNldCAtM3B4IC0zcHggNXB4IHdoaXRlO1xuLy8gICBiYWNrZ3JvdW5kOiBsaWdodGVuKCRiZy1jb2xvciwgMiUpO1xuLy8gfVxuXG4vLyAucGFwZXIge1xuLy8gICBAZXh0ZW5kIC5vdXRzZXQ7XG4vLyAgIHBhZGRpbmc6IDEwcHggMjBweCAyMHB4O1xuLy8gICBtYXJnaW4tdG9wOiAyMHB4O1xuLy8gICBtaW4taGVpZ2h0OiAxMDBweDtcbi8vICAgZm9udC1zaXplOiAxLjJlbTtcbi8vICAgYmFja2dyb3VuZDogJGJnLWNvbG9yO1xuLy8gfVxuXG4vLyBzZWN0aW9uLFxuLy8gYXJ0aWNsZSxcbi8vIC5zZWN0aW9uLFxuLy8gLmFydGljbGUsXG4vLyAucGFwZXIge1xuLy8gICBsaW5lLWhlaWdodDogMmVtO1xuLy8gICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4vLyAgIHdvcmQtYnJlYWs6IG5vcm1hbDtcbi8vICAgbGluZS1oZWlnaHQ6IDJlbTtcbi8vIH1cblxuLy8gaW5wdXRbdHlwZT1cInRleHRcIl0sXG4vLyBpbnB1dFt0eXBlPVwic2VhcmNoXCJdLFxuLy8gaW5wdXRbdHlwZT1cInRlbFwiXSxcbi8vIGlucHV0W3R5cGU9XCJ1cmxcIl0sXG4vLyBpbnB1dFt0eXBlPVwiZW1haWxcIl0sXG4vLyBpbnB1dFt0eXBlPVwicGFzc3dvcmRcIl0sXG4vLyBpbnB1dFt0eXBlPVwiZGF0ZVwiXSxcbi8vIGlucHV0W3R5cGU9XCJtb250aFwiXSxcbi8vIGlucHV0W3R5cGU9XCJ3ZWVrXCJdLFxuLy8gaW5wdXRbdHlwZT1cInRpbWVcIl0sXG4vLyBpbnB1dFt0eXBlPVwibnVtYmVyXCJdLFxuLy8gaW5wdXRbdHlwZT1cImNvbG9yXCJdLFxuLy8gc2VsZWN0LFxuLy8gdGV4dGFyZWEge1xuLy8gICBib3JkZXI6IDA7XG4vLyAgIGJhY2tncm91bmQ6ICRiZy1jb2xvcjtcbi8vICAgY29sb3I6ICRmZy1jb2xvcjtcbi8vICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbi8vICAgcGFkZGluZzogMCAxLjI1ZW07XG4vLyAgIGxpbmUtaGVpZ2h0OiAxLjI1ZW07XG4vLyAgIGhlaWdodDogMy41ZW07XG4vLyAgIG1hcmdpbjogMTBweCAwO1xuLy8gICBmb250LXNpemU6IDEuMXJlbTtcbi8vICAgY3Vyc29yOiB0ZXh0O1xuLy8gICB1c2VyLXNlbGVjdDogdGV4dDtcbi8vICAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiB0ZXh0O1xuLy8gICAtd2Via2l0LXVzZXItc2VsZWN0OiB0ZXh0O1xuLy8gICAta2h0bWwtdXNlci1zZWxlY3Q6IHRleHQ7XG4vLyAgIC1tb3otdXNlci1zZWxlY3Q6IHRleHQ7XG4vLyAgIC1tcy11c2VyLXNlbGVjdDogdGV4dDtcbi8vICAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjJzO1xuXG4vLyAgICY6bm90KHNlbGVjdCkge1xuLy8gICAgIEBleHRlbmQgLmluc2V0O1xuXG4vLyAgICAgJjpmb2N1cyB7XG4vLyAgICAgICBAZXh0ZW5kIC5vdXRzZXQ7XG4vLyAgICAgfVxuLy8gICB9XG4vLyB9XG5cbi8vIHRleHRhcmVhIHtcbi8vICAgaGVpZ2h0OiAzNTBweDtcbi8vICAgcGFkZGluZzogMS4yNWVtO1xuLy8gfVxuXG4vLyBzZWxlY3Qge1xuLy8gICBAZXh0ZW5kIC5vdXRzZXQ7XG5cbi8vICAgY3Vyc29yOiBwb2ludGVyO1xuLy8gICBiYWNrZ3JvdW5kOiB1cmwoZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCMlpYSnphVzl1UFNJeExqRWlJSFpwWlhkQ2IzZzlJakFnTUNBeE9TQXhPU0lnZUcxc2JuTTlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5Mekl3TURBdmMzWm5JajQ4WnlCMGNtRnVjMlp2Y20wOUltMWhkSEpwZUNndU1ETTBJREFnTUNBdU1ETTBJQzAyTGpnZ01TNDNaUzAxS1NJZ2MzUjViR1U5SW1acGJHdzZJemRpTjJVNFl5SStQSEJoZEdnZ1pEMGliVFE0TUNBek5EUXRNakV4TFRJeE1tTXRNVFl0TVRZdE5ERXRNVFl0TlRjZ01DMHhOaUF4TmkweE5pQTBNaUF3SURVM2JESXpPQ0F5TXpsak9DNDBJRGd1TlNBeU1DQXhNaUF6TVNBeE1pQXhNU0F3TGpVMklESXlMVE11TWlBek1TMHhNbXd5TXpndE1qTTVZekUyTFRFMklERTJMVFF5SURBdE5UZHpMVFF4TFRFMkxUVTNJREI2SWlCemRIbHNaVDBpWm1sc2JEb2pOMkkzWlRoaklpOCtQQzluUGp3dmMzWm5QZ289KVxuLy8gICAgIG5vLXJlcGVhdCByaWdodCAxZW0gY2VudGVyO1xuLy8gICBiYWNrZ3JvdW5kLXNpemU6IDEuMmVtO1xuLy8gICBwYWRkaW5nLXJpZ2h0OiAzZW07XG4vLyB9XG5cbi8vIGlucHV0OjpwbGFjZWhvbGRlcixcbi8vIHRleHRhcmVhOjpwbGFjZWhvbGRlciB7XG4vLyAgIG9wYWNpdHk6IDE7XG4vLyAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycztcbi8vICAgY29sb3I6IGluaGVyaXQ7XG4vLyB9XG5cbi8vIGlucHV0OmZvY3VzOjpwbGFjZWhvbGRlcixcbi8vIHRleHRhcmVhOmZvY3VzOjpwbGFjZWhvbGRlciB7XG4vLyAgIG9wYWNpdHk6IDAuMjtcbi8vIH1cblxuLy8gaW5wdXQ6LW1zLWlucHV0LXBsYWNlaG9sZGVyLFxuLy8gdGV4dGFyZWE6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbi8vICAgb3BhY2l0eTogMTtcbi8vICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzO1xuLy8gICBjb2xvcjogaW5oZXJpdDtcbi8vIH1cblxuLy8gaW5wdXQ6Zm9jdXM6LW1zLWlucHV0LXBsYWNlaG9sZGVyLFxuLy8gdGV4dGFyZWE6Zm9jdXM6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbi8vICAgb3BhY2l0eTogMC4yO1xuLy8gfVxuXG4vLyBpbnB1dFt0eXBlPVwic2VhcmNoXCJdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uLFxuLy8gaW5wdXRbdHlwZT1cInNlYXJjaFwiXTo6LXdlYmtpdC1zZWFyY2gtY2FuY2VsLWJ1dHRvbixcbi8vIGlucHV0W3R5cGU9XCJzZWFyY2hcIl06Oi13ZWJraXQtc2VhcmNoLXJlc3VsdHMtYnV0dG9uLFxuLy8gaW5wdXRbdHlwZT1cInNlYXJjaFwiXTo6LXdlYmtpdC1zZWFyY2gtcmVzdWx0cy1kZWNvcmF0aW9uIHtcbi8vICAgZGlzcGxheTogbm9uZTtcbi8vIH1cblxuLy8gYnV0dG9uLFxuLy8gaW5wdXRbdHlwZT1cImJ1dHRvblwiXSxcbi8vIGlucHV0W3R5cGU9XCJzdWJtaXRcIl0sXG4vLyBpbnB1dFt0eXBlPVwicmVzZXRcIl0ge1xuLy8gICBAZXh0ZW5kIC5vdXRzZXQ7XG5cbi8vICAgYm9yZGVyOiAwO1xuLy8gICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbi8vICAgcGFkZGluZzogMTBweCAwO1xuLy8gICB3aWR0aDogOGVtO1xuLy8gICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4vLyAgIGN1cnNvcjogcG9pbnRlcjtcbi8vICAgY29sb3I6IGluaGVyaXQ7XG4vLyAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuLy8gICB0cmFuc2l0aW9uLXByb3BlcnR5OiBiYWNrZ3JvdW5kLWNvbG9yLCBib3gtc2hhZG93O1xuLy8gICB0cmFuc2l0aW9uLWRlbGF5OiAwLjJzO1xuLy8gICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjJzO1xuXG4vLyAgICYuYWN0aXZlLFxuLy8gICAmOmFjdGl2ZSB7XG4vLyAgICAgQGV4dGVuZCAuaW5zZXQ7XG5cbi8vICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwcztcbi8vICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjFzO1xuLy8gICB9XG5cbi8vICAgQGVhY2ggJG5hbWUsICRjb2xvciBpbiAoXCJyZWRcIjogJHJlZCwgXCJncmVlblwiOiAkZ3JlZW4sIFwiYmx1ZVwiOiAkYmx1ZSkge1xuLy8gICAgIEBhdC1yb290IC4jeyRuYW1lfS1idXR0b24sXG4vLyAgICAgICAmLiN7JG5hbWV9LWJ1dHRvbiB7XG4vLyAgICAgICBAZXh0ZW5kIGJ1dHRvbjtcblxuLy8gICAgICAgJF9iZy1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgJGNvbG9yIDMwJSwgbGlnaHRlbigkY29sb3IsIDYlKSA4MCUpO1xuXG4vLyAgICAgICBjb2xvcjogd2hpdGU7XG4vLyAgICAgICBmb250LXdlaWdodDogYm9sZDtcbi8vICAgICAgIHRleHQtc2hhZG93OiAwIDAuMWVtIDAuMWVtIHRyYW5zcGFyZW50aXplKGJsYWNrLCAwLjMpO1xuLy8gICAgICAgYmFja2dyb3VuZDogJF9iZy1pbWFnZTtcbi8vICAgICAgIGJveC1zaGFkb3c6IDAgMCAwLjVlbSB0cmFuc3BhcmVudGl6ZSgkY29sb3IsIDAuMyksIDAgMCB0cmFuc3BhcmVudCxcbi8vICAgICAgICAgaW5zZXQgMCAtNXB4IDAgdHJhbnNwYXJlbnRpemUoYmxhY2ssIDAuOTUpLFxuLy8gICAgICAgICBpbnNldCAwIDJweCAwIHRyYW5zcGFyZW50aXplKHdoaXRlLCAwLjgpO1xuLy8gICAgICAgYm9yZGVyLXJhZGl1czogNnB4IDZweCA4cHggOHB4O1xuLy8gICAgICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYm94LXNoYWRvdywgYm9yZGVyLXJhZGl1cztcblxuLy8gICAgICAgJi5hY3RpdmUsXG4vLyAgICAgICAmOmFjdGl2ZSB7XG4vLyAgICAgICAgIGJhY2tncm91bmQ6ICRfYmctaW1hZ2U7XG4vLyAgICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbi8vICAgICAgICAgYm94LXNoYWRvdzogMCAwIHRyYW5zcGFyZW50LCAwIDAgdHJhbnNwYXJlbnQsXG4vLyAgICAgICAgICAgaW5zZXQgMCAycHggNXB4IDJweCB0cmFuc3BhcmVudGl6ZShibGFjaywgMC44KTtcbi8vICAgICAgIH1cbi8vICAgICB9XG4vLyAgIH1cbi8vIH1cblxuLy8gbGFiZWwge1xuLy8gICAmLFxuLy8gICAmICoge1xuLy8gICAgIGN1cnNvcjogcG9pbnRlcjtcbi8vICAgfVxuXG4vLyAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbi8vICAgcGFkZGluZzogMC41NmVtIDA7XG4vLyB9XG5cbi8vIGEge1xuLy8gICAmLFxuLy8gICAmOmxpbmssXG4vLyAgICY6dmlzaXRlZCxcbi8vICAgJjpob3ZlciAmOmFjdGl2ZSB7XG4vLyAgICAgJixcbi8vICAgICAmICoge1xuLy8gICAgICAgY3Vyc29yOiBwb2ludGVyO1xuLy8gICAgIH1cblxuLy8gICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuLy8gICAgIGNvbG9yOiAkYmx1ZTtcbi8vICAgICBmb250LXdlaWdodDogYm9sZDtcbi8vICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4vLyAgIH1cbi8vIH1cblxuLy8gaDEsXG4vLyBoMixcbi8vIGgzLFxuLy8gaDQsXG4vLyBoNSxcbi8vIGg2IHtcbi8vICAgbGluZS1oZWlnaHQ6IDEuNWVtO1xuLy8gfVxuXG4vLyBoMSB7XG4vLyAgIGZvbnQtc2l6ZTogNGVtO1xuLy8gICBmb250LXdlaWdodDogbGlnaHRlcjtcbi8vICAgbWFyZ2luOiAwLjdlbSAwO1xuLy8gfVxuXG4vLyBoMiB7XG4vLyAgIGZvbnQtc2l6ZTogM2VtO1xuLy8gICBmb250LXdlaWdodDogbGlnaHRlcjtcbi8vICAgbWFyZ2luOiAwLjhlbSAwO1xuLy8gfVxuXG4vLyBoMyB7XG4vLyAgIGZvbnQtc2l6ZTogMi41ZW07XG4vLyAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuLy8gICBtYXJnaW46IDAuOWVtIDA7XG4vLyB9XG5cbi8vIGg0IHtcbi8vICAgZm9udC1zaXplOiAyZW07XG4vLyAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuLy8gICBtYXJnaW46IDFlbSAwO1xuLy8gfVxuXG4vLyBoNSB7XG4vLyAgIG1hcmdpbjogMC41ZW0gMDtcbi8vICAgZm9udC1zaXplOiAxLjJlbTtcbi8vICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbi8vIH1cblxuLy8gaDYge1xuLy8gICBtYXJnaW46IDFlbSAwIDFlbSAxLjRlbTtcbi8vICAgZm9udC1zaXplOiAxZW07XG4vLyAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuLy8gfVxuXG4vLyBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0sXG4vLyBpbnB1dFt0eXBlPVwicmFkaW9cIl0ge1xuLy8gICAkX2JvcmRlci13aWR0aDogMC4xNWVtO1xuLy8gICAkX2JveC1zaGFkb3c6IDJweCAycHggM3B4IHRyYW5zcGFyZW50aXplKGJsYWNrLCAwLjgpLCAtMnB4IC0ycHggM3B4IHdoaXRlLFxuLy8gICAgIGluc2V0IDFweCAxcHggMnB4IHRyYW5zcGFyZW50aXplKGJsYWNrLCAwLjgpLCBpbnNldCAtMXB4IC0xcHggMnB4IHdoaXRlO1xuLy8gICBmb250LXNpemU6IDFlbTtcbi8vICAgY3Vyc29yOiBwb2ludGVyO1xuLy8gICBoZWlnaHQ6IDEuMmVtO1xuLy8gICB3aWR0aDogMS4yZW07XG4vLyAgIG1hcmdpbjogMCAwLjNlbTtcbi8vICAgYm94LXNoYWRvdzogJF9ib3gtc2hhZG93O1xuLy8gICBib3JkZXI6ICRfYm9yZGVyLXdpZHRoIHNvbGlkICRiZy1jb2xvcjtcbi8vICAgdmVydGljYWwtYWxpZ246IHRleHQtYm90dG9tO1xuLy8gICB0cmFuc2l0aW9uLXByb3BlcnR5OiBiYWNrZ3JvdW5kLCBib3gtc2hhZG93O1xuLy8gICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjJzO1xuXG4vLyAgICY6YWN0aXZlIHtcbi8vICAgICBib3gtc2hhZG93OiAkX2JveC1zaGFkb3csIGluc2V0IDAgMC4xZW0gMC4yNWVtIHRyYW5zcGFyZW50aXplKGJsYWNrLCAwLjgpO1xuLy8gICB9XG5cbi8vICAgJjpjaGVja2VkIHtcbi8vICAgICBib3JkZXItd2lkdGg6IDAuMWVtO1xuLy8gICAgIGJvcmRlci1jb2xvcjogZGFya2VuKCRibHVlLCAxMCUpO1xuLy8gICAgIGJhY2tncm91bmQtY29sb3I6ICRibHVlO1xuLy8gICB9XG4vLyB9XG5cbi8vIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSB7XG4vLyAgIGJvcmRlci1yYWRpdXM6IDI1JTtcblxuLy8gICAmOmNoZWNrZWQge1xuLy8gICAgIGJveC1zaGFkb3c6ICRnbG93LXNoYWRvdywgaW5zZXQgMCAtMC4xZW0gMCB0cmFuc3BhcmVudGl6ZShibGFjaywgMC44KSxcbi8vICAgICAgIGluc2V0IDAgMC4xZW0gMC4xZW0gdHJhbnNwYXJlbnRpemUod2hpdGUsIDAuOCk7XG4vLyAgIH1cbi8vIH1cblxuLy8gaW5wdXRbdHlwZT1cInJhZGlvXCJdIHtcbi8vICAgYm9yZGVyLXJhZGl1czogMTAwJTtcblxuLy8gICAmOmNoZWNrZWQge1xuLy8gICAgIGJveC1zaGFkb3c6ICRnbG93LXNoYWRvdztcbi8vICAgICBib3gtc2hhZG93OiAkZ2xvdy1zaGFkb3csIGluc2V0IDAgMC4xMmVtIDAuMWVtIHRyYW5zcGFyZW50aXplKHdoaXRlLCAwLjc1KTtcbi8vICAgICBib3JkZXItYm90dG9tLXdpZHRoOiAwLjE1ZW07XG4vLyAgIH1cbi8vIH1cblxuLy8gLmNoZWNrdGV4dCB7XG4vLyAgIHdpZHRoOiBhdXRvO1xuLy8gICBtYXJnaW46IDAuNWVtO1xuXG4vLyAgIGlucHV0IHtcbi8vICAgICBkaXNwbGF5OiBub25lO1xuXG4vLyAgICAgKyBzcGFuIHtcbi8vICAgICAgIEBleHRlbmQgYnV0dG9uO1xuXG4vLyAgICAgICBmb250LXdlaWdodDogYm9sZDtcbi8vICAgICAgIHBhZGRpbmc6IDFlbTtcbi8vICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDBzO1xuLy8gICAgIH1cblxuLy8gICAgICY6Y2hlY2tlZCArIHNwYW4ge1xuLy8gICAgICAgQGV4dGVuZCAuYmx1ZS1idXR0b247XG5cbi8vICAgICAgIHBhZGRpbmc6IDFlbTtcbi8vICAgICB9XG4vLyAgIH1cbi8vIH1cblxuLy8gLnN3aXRjaCB7XG4vLyAgICRfaGVpZ2h0OiAycmVtO1xuLy8gICAkX3dpZHRoOiA4cmVtO1xuLy8gICAkX2hhbmRsZS13aWR0aDogJF9oZWlnaHQ7XG4vLyAgICRfaGFuZGxlLXRyYW5zbGF0aW9uOiAkX3dpZHRoIC0gJF9oYW5kbGUtd2lkdGg7XG5cbi8vICAgaGVpZ2h0OiAkX2hlaWdodDtcbi8vICAgd2lkdGg6ICRfd2lkdGg7XG4vLyAgIHBhZGRpbmc6IDA7XG4vLyAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuLy8gICBpbnB1dCB7XG4vLyAgICAgZGlzcGxheTogbm9uZTtcblxuLy8gICAgICsgZGl2IHtcbi8vICAgICAgIGhlaWdodDogMTAwJTtcbi8vICAgICAgIHdpZHRoOiAxMDAlO1xuLy8gICAgICAgYm9yZGVyLXJhZGl1czogOTk5cHg7XG4vLyAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbi8vICAgICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGJveC1zaGFkb3csIGJhY2tncm91bmQtY29sb3I7XG4vLyAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjJzO1xuLy8gICAgICAgdHJhbnNpdGlvbi1kZWxheTogMC4ycztcbi8vICAgICAgIGJveC1zaGFkb3c6IDNweCAzcHggMnB4IC0ycHggdHJhbnNwYXJlbnRpemUoYmxhY2ssIDAuOSksXG4vLyAgICAgICAgIGluc2V0IDJweCAycHggMnB4IDFweCB0cmFuc3BhcmVudGl6ZShibGFjaywgMC45KSxcbi8vICAgICAgICAgaW5zZXQgLTJweCAtMnB4IDFweCB3aGl0ZTtcblxuLy8gICAgICAgJjo6YmVmb3JlIHtcbi8vICAgICAgICAgY29udGVudDogXCJcIjtcbi8vICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4vLyAgICAgICAgIGhlaWdodDogY2FsYygjeyRfaGFuZGxlLXdpZHRofSArIDRweCk7XG4vLyAgICAgICAgIHdpZHRoOiBjYWxjKCN7JF9oYW5kbGUtd2lkdGh9ICsgNHB4KTtcbi8vICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbi8vICAgICAgICAgYm9yZGVyOiBzb2xpZCB3aGl0ZSAzcHg7XG4vLyAgICAgICAgIGJhY2tncm91bmQ6ICRibHVlO1xuLy8gICAgICAgICBib3gtc2hhZG93OiAwIDNweCAxMHB4IHRyYW5zcGFyZW50aXplKGJsYWNrLCAwLjgpLFxuLy8gICAgICAgICAgIGluc2V0IDAgLTFweCAzcHggdHJhbnNwYXJlbnRpemUoYmxhY2ssIDAuOSk7XG4vLyAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC02cHgpO1xuLy8gICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycztcbi8vICAgICAgIH1cbi8vICAgICB9XG5cbi8vICAgICAmOmNoZWNrZWQgKyBkaXYge1xuLy8gICAgICAgYmFja2dyb3VuZDogJGJsdWU7XG4vLyAgICAgICBib3gtc2hhZG93OiAkZ2xvdy1zaGFkb3csIGluc2V0IDAgMnB4IDJweCAycHggdHJhbnNwYXJlbnRpemUoYmxhY2ssIDAuNyksXG4vLyAgICAgICAgIGluc2V0IDAgMCB0cmFuc3BhcmVudDtcblxuLy8gICAgICAgJjo6YmVmb3JlIHtcbi8vICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoJF9oYW5kbGUtdHJhbnNsYXRpb24sIC02cHgpO1xuLy8gICAgICAgfVxuLy8gICAgIH1cbi8vICAgfVxuLy8gfVxuXG4vLyBociB7XG4vLyAgIEBleHRlbmQgLmluc2V0O1xuLy8gICB3aWR0aDogNzIlO1xuLy8gICBoZWlnaHQ6IDhweDtcbi8vICAgZmxvYXQ6IHJpZ2h0O1xuLy8gICBib3JkZXI6IDA7XG4vLyB9XG5cbi8vIGNvZGUsXG4vLyBwcmUge1xuLy8gICBwYWRkaW5nOiAwLjVlbSAxZW07XG4vLyAgIGJvcmRlci1yYWRpdXM6IDRweDtcbi8vICAgb3ZlcmZsb3c6IGF1dG87XG4vLyAgIGJveC1zaGFkb3c6IDAgNXB4IDMwcHggMCB0cmFuc3BhcmVudGl6ZShibGFjaywgMC45NSk7XG4vLyB9XG5cbi8vIGNvZGUge1xuLy8gICBiYWNrZ3JvdW5kOiAjZTZlNmU2O1xuLy8gfVxuXG4vLyBwcmUge1xuLy8gICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbi8vICAgbWFyZ2luOiA0ZW0gMDtcbi8vIH1cblxuLy8gY29kZSxcbi8vIHByZSB7XG4vLyAgICYsXG4vLyAgICYgKiB7XG4vLyAgICAgZm9udC1zaXplOiAwLjlyZW07XG4vLyAgICAgbGluZS1oZWlnaHQ6IDJlbTtcbi8vICAgICBjdXJzb3I6IGF1dG87XG4vLyAgICAgdXNlci1zZWxlY3Q6IHRleHQ7XG4vLyAgICAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiB0ZXh0O1xuLy8gICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IHRleHQ7XG4vLyAgICAgLWtodG1sLXVzZXItc2VsZWN0OiB0ZXh0O1xuLy8gICAgIC1tb3otdXNlci1zZWxlY3Q6IHRleHQ7XG4vLyAgICAgLW1zLXVzZXItc2VsZWN0OiB0ZXh0O1xuLy8gICB9XG4vLyB9XG5cbi8vIGJsb2NrcXVvdGUge1xuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbi8vICAgcGFkZGluZzogMC41ZW0gMWVtO1xuLy8gICBib3JkZXItcmFkaXVzOiA0cHg7XG4vLyAgIGJveC1zaGFkb3c6IDAgNXB4IDMwcHggMCB0cmFuc3BhcmVudGl6ZShibGFjaywgMC45NSk7XG4vLyAgIGJvcmRlci1sZWZ0OiA2cHggc29saWQgJGJsdWU7XG4vLyB9XG4iLCJAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ0NhdmVhdCc7XG4gICAgc3JjOiB1cmwoJy4uLy4uL2ZvbnRzL0JvbGQvQ2F2ZWF0LUJvbGQud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXG4gICAgICAgIHVybCgnLi4vLi4vZm9udHMvQm9sZC9DYXZlYXQtQm9sZC53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtZGlzcGxheTogc3dhcDtcbn1cblxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdDYXZlYXQnO1xuICAgIHNyYzogdXJsKCcuLi8uLi9mb250cy9SZWd1bGFyL0NhdmVhdC1SZWd1bGFyLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxuICAgICAgICB1cmwoJy4uLy4uL2ZvbnRzL1JlZ3VsYXIvQ2F2ZWF0LVJlZ3VsYXIud29mZicpIGZvcm1hdCgnd29mZicpO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtZGlzcGxheTogc3dhcDtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnRmlndXJpbmVTeW1ib2xUMSc7XG4gIHNyYzogdXJsKCcuLi8uLi9mb250cy8zcmQgUGFydHkvQ2hlc3NWYXJpYW50cy9GaWd1cmluZVN5bWJvbFQxQm9sZC53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcbiAgICAgIHVybCgnLi4vLi4vZm9udHMvM3JkIFBhcnR5L0NoZXNzVmFyaWFudHMvRmlndXJpbmVTeW1ib2xUMUJvbGQud29mZicpIGZvcm1hdCgnd29mZicpO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ0ZpZ3VyaW5lU3ltYm9sVDEnO1xuICBzcmM6IHVybCgnLi4vLi4vZm9udHMvM3JkIFBhcnR5L0NoZXNzVmFyaWFudHMvRmlndXJpbmVTeW1ib2xUMS53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcbiAgICAgIHVybCgnLi4vLi4vZm9udHMvM3JkIFBhcnR5L0NoZXNzVmFyaWFudHMvRmlndXJpbmVTeW1ib2xUMS53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdTYW5jdHVhcnlQbGF5Z3JvdW5kJztcbiAgc3JjOiB1cmwoJy4uLy4uL2ZvbnRzLzNyZCBQYXJ0eS9TYW5jdHVhcnlQbGF5Z3JvdW5kLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxuICAgICAgdXJsKCcuLi8uLi9mb250cy8zcmQgUGFydHkvU2FuY3R1YXJ5UGxheWdyb3VuZC53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xufVxuXG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ0FtaXRhJztcbiAgc3JjOiB1cmwoJy4uLy4uL2ZvbnRzLzNyZCBQYXJ0eS9BbWl0YS9BbWl0YS1SZWd1bGFyLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxuICAgICAgdXJsKCcuLi8uLi9mb250cy8zcmQgUGFydHkvQW1pdGEvQW1pdGEtUmVndWxhci53b2ZmMicpIGZvcm1hdCgnd29mZicpO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbn0iLCIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiQ2F2ZWF0XCI7XG4gIHNyYzogdXJsKFwiLi4vLi4vZm9udHMvQm9sZC9DYXZlYXQtQm9sZC53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKSwgdXJsKFwiLi4vLi4vZm9udHMvQm9sZC9DYXZlYXQtQm9sZC53b2ZmXCIpIGZvcm1hdChcIndvZmZcIik7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJDYXZlYXRcIjtcbiAgc3JjOiB1cmwoXCIuLi8uLi9mb250cy9SZWd1bGFyL0NhdmVhdC1SZWd1bGFyLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpLCB1cmwoXCIuLi8uLi9mb250cy9SZWd1bGFyL0NhdmVhdC1SZWd1bGFyLndvZmZcIikgZm9ybWF0KFwid29mZlwiKTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiRmlndXJpbmVTeW1ib2xUMVwiO1xuICBzcmM6IHVybChcIi4uLy4uL2ZvbnRzLzNyZCBQYXJ0eS9DaGVzc1ZhcmlhbnRzL0ZpZ3VyaW5lU3ltYm9sVDFCb2xkLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpLCB1cmwoXCIuLi8uLi9mb250cy8zcmQgUGFydHkvQ2hlc3NWYXJpYW50cy9GaWd1cmluZVN5bWJvbFQxQm9sZC53b2ZmXCIpIGZvcm1hdChcIndvZmZcIik7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJGaWd1cmluZVN5bWJvbFQxXCI7XG4gIHNyYzogdXJsKFwiLi4vLi4vZm9udHMvM3JkIFBhcnR5L0NoZXNzVmFyaWFudHMvRmlndXJpbmVTeW1ib2xUMS53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKSwgdXJsKFwiLi4vLi4vZm9udHMvM3JkIFBhcnR5L0NoZXNzVmFyaWFudHMvRmlndXJpbmVTeW1ib2xUMS53b2ZmXCIpIGZvcm1hdChcIndvZmZcIik7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlNhbmN0dWFyeVBsYXlncm91bmRcIjtcbiAgc3JjOiB1cmwoXCIuLi8uLi9mb250cy8zcmQgUGFydHkvU2FuY3R1YXJ5UGxheWdyb3VuZC53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKSwgdXJsKFwiLi4vLi4vZm9udHMvM3JkIFBhcnR5L1NhbmN0dWFyeVBsYXlncm91bmQud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJBbWl0YVwiO1xuICBzcmM6IHVybChcIi4uLy4uL2ZvbnRzLzNyZCBQYXJ0eS9BbWl0YS9BbWl0YS1SZWd1bGFyLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpLCB1cmwoXCIuLi8uLi9mb250cy8zcmQgUGFydHkvQW1pdGEvQW1pdGEtUmVndWxhci53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmXCIpO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbn1cbi8qKioqKioqKioqKioqKioqKioqIE1lbnUgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKioqKioqIE1lbnUgQ29udHJvbHMgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBDb250YWluZXIgVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgQ29udGFpbmVyIFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIENvbnRhaW5lciBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBIaWdobGlnaHQgVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgQW5ub3RhdGlvbiBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBWYXJpYXRpb24gVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgUGx5IFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKiogQ29udHJvbCBDb2xvcnMgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKioqIEJvYXJkIENvbG9ycyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKiogRm9udCBTaXplcyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG46cm9vdCB7XG4gIC0tYmctY29sb3I6ICNmMmYzZjc7XG4gIC0tZmctY29sb3I6ICMzODNhNDE7XG4gIC0tcmVkOiAjZTQzMDMwO1xuICAtLWdyZWVuOiAjMTlhMTg3O1xuICAtLWJsdWU6ICMzNjdiZjA7XG4gIC0tZGFyay1ibHVlOiAjMjY1YWIxO1xuICAtLW1hcm9vbjogI2I4MTc0YztcbiAgLS1wdXJwbGU6ICM4YzQyYWI7XG59XG5cbi5nc2ktY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZmxleC13cmFwOiBub3dyYXA7XG59XG5cbi53aGl0ZS1tb3ZlIHtcbiAgYm9yZGVyOiBibGFjayAycHggc29saWQ7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBmb250LXNpemU6IDIycHg7XG4gIG1pbi1oZWlnaHQ6IDIycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWluLXdpZHRoOiA3NHB4O1xuICB3aWR0aDogdmFyKC0tZ3NUYWJsZUl0ZW1XaWR0aCk7XG4gIGhlaWdodDogYXV0bztcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZy10b3A6IDJweDtcbiAgZm9udC1zaXplOiB2YXIoLS1nc0ZvbnRTaXplKTtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWdzRm9udEZhbWlseSk7XG59XG5cbi5ibGFjay1tb3ZlIHtcbiAgYm9yZGVyOiBibGFjayAycHggc29saWQ7XG4gIGJhY2tncm91bmQ6IGdyZXk7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogd2hpdGU7XG4gIG1pbi13aWR0aDogNzRweDtcbiAgd2lkdGg6IHZhcigtLWdzVGFibGVJdGVtV2lkdGgpO1xuICBoZWlnaHQ6IGF1dG87XG4gIGZvbnQtc2l6ZTogdmFyKC0tZ3NGb250U2l6ZSk7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1nc0ZvbnRGYW1pbHkpO1xufVxuXG4uZ3NpLXBseSB7XG4gIGNvbG9yOiB2YXIoLS1nc1RleHRDb2xvcik7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IHZhcigtLWdzRm9udFNpemUpO1xuICBiYWNrZ3JvdW5kOiAjNGU3NWE4O1xuICB3aWR0aDogdmFyKC0tZ3NUYWJsZVBseVdpZHRoKTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogNHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TableItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'table-item',
                templateUrl: './table-item.component.html',
                styleUrls: ['./table-item.component.scss']
            }]
    }], function () { return [{ type: src_app_services_olga_service__WEBPACK_IMPORTED_MODULE_2__["OlgaService"] }, { type: src_app_services_themes_service__WEBPACK_IMPORTED_MODULE_3__["ThemeService"] }]; }, { whiteMove: [{
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
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _services_olga_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/olga.service */ "./src/app/services/olga.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function OlgaStatusComponent_a_4_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OlgaStatusComponent_a_4_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.sendForAnalysis(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Engine");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "", ctx_r0.environment.imagesPath, "new_window.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class OlgaStatusComponent {
    constructor(olga) {
        this.olga = olga;
        this.status = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('White to move.');
        this.lastNode = null;
        this.lastMove = undefined;
        this.environment = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"];
    }
    ngOnInit() {
    }
    sendForAnalysis() {
        if (this.lastNode) {
            let fen = this.olga.gameFEN();
            var addr = 'http://www.chessgames.com/perl/nph-analysis_prereq?atype=FEN&fen=';
            addr += fen.split(" ").join("%20");
            addr += '&move=';
            addr += ((this.lastNode.fullMoveNumber() - 1) * 2) - (this.lastNode.moveColor() === 'b' ? 1 : 0);
            addr += '&session_id=';
            addr += this.olga.UUID;
            window.open(addr);
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
            let notation = this.olga.getMoveNotation(last);
            message += '' + last.fullMoveNumber() + (turn === 'b' ? '.' : '..') + notation;
        }
        this.status.next(message);
    }
    resetStatus() {
        this.status.next('White to move.');
        this.lastNode = null;
        this.lastMove = undefined;
    }
}
OlgaStatusComponent.ɵfac = function OlgaStatusComponent_Factory(t) { return new (t || OlgaStatusComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_olga_service__WEBPACK_IMPORTED_MODULE_3__["OlgaService"])); };
OlgaStatusComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OlgaStatusComponent, selectors: [["olga-status"]], decls: 5, vars: 2, consts: [[1, "status-text"], ["class", "analysis-button", 3, "click", 4, "ngIf"], [1, "analysis-button", 3, "click"], [1, "analysis-image", 3, "src"]], template: function OlgaStatusComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, OlgaStatusComponent_a_4_Template, 3, 1, "a", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.status.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.lastNode);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: ["@font-face {\n  font-family: \"Caveat\";\n  src: url('Caveat-Bold.woff2') format(\"woff2\"), url('Caveat-Bold.woff') format(\"woff\");\n  font-weight: bold;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"Caveat\";\n  src: url('Caveat-Regular.woff2') format(\"woff2\"), url('Caveat-Regular.woff') format(\"woff\");\n  font-weight: 600;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"FigurineSymbolT1\";\n  src: url('FigurineSymbolT1Bold.woff2') format(\"woff2\"), url('FigurineSymbolT1Bold.woff') format(\"woff\");\n  font-weight: bold;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"FigurineSymbolT1\";\n  src: url('FigurineSymbolT1.woff2') format(\"woff2\"), url('FigurineSymbolT1.woff') format(\"woff\");\n  font-weight: 600;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"SanctuaryPlayground\";\n  src: url('SanctuaryPlayground.woff2') format(\"woff2\"), url('SanctuaryPlayground.woff') format(\"woff\");\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"Amita\";\n  src: url('Amita-Regular.woff2') format(\"woff2\"), url('Amita-Regular.woff2') format(\"woff\");\n  font-style: normal;\n  font-display: swap;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n[_ngcontent-%COMP%]:root {\n  --bg-color: #f2f3f7;\n  --fg-color: #383a41;\n  --red: #e43030;\n  --green: #19a187;\n  --blue: #367bf0;\n  --dark-blue: #265ab1;\n  --maroon: #b8174c;\n  --purple: #8c42ab;\n}\n.status-text[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-family: \"georgia\", garamond, palatino, bookman, \"Times New Roman\", times;\n  float: left;\n  text-align: left;\n  color: black;\n  font-size: 22px;\n  margin-left: 4px;\n  margin-top: 2px;\n  -moz-user-select: none;\n  -o-user-select: none;\n  -webkit-user-select: none;\n          user-select: none;\n}\n.analysis-image[_ngcontent-%COMP%] {\n  height: 20px;\n  line-height: 28px;\n  margin-top: 4px;\n  width: 20px;\n  -moz-user-select: none;\n  -o-user-select: none;\n  -webkit-user-select: none;\n          user-select: none;\n}\n.analysis-button[_ngcontent-%COMP%] {\n  margin-left: 8px;\n  background: transparent;\n  line-height: 28px;\n  font-size: 16px;\n  color: blue;\n  text-align: right;\n  -moz-user-select: none;\n  -o-user-select: none;\n  -webkit-user-select: none;\n          user-select: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMuc2NzcyIsInNyYy9hc3NldHMvc2Nzcy9tb2R1bGVzL19mb250cy5zY3NzIiwic3JjL2FwcC9vbGdhLXN0YXR1cy9vbGdhLXN0YXR1cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4RUFBQTtBQ0FBO0VBQ0kscUJBQUE7RUFDQSxxRkFBQTtFQUVBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0NKO0FERUE7RUFDSSxxQkFBQTtFQUNBLDJGQUFBO0VBRUEsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDREo7QURJQTtFQUNFLCtCQUFBO0VBQ0EsdUdBQUE7RUFFQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNIRjtBRE1BO0VBQ0UsK0JBQUE7RUFDQSwrRkFBQTtFQUVBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0xGO0FEUUE7RUFDRSxrQ0FBQTtFQUNBLHFHQUFBO0VBRUEsa0JBQUE7RUFDQSxrQkFBQTtBQ1BGO0FEV0E7RUFDRSxvQkFBQTtFQUNBLDBGQUFBO0VBRUEsa0JBQUE7RUFDQSxrQkFBQTtBQ1ZGO0FGREEsK0VBQUE7QUFHQSxrRkFBQTtBQUtBLCtFQUFBO0FBVUEsK0VBQUE7QUFNQSwrRUFBQTtBQU1BLCtFQUFBO0FBTUEsZ0ZBQUE7QUFLQSwrRUFBQTtBQUtBLHlFQUFBO0FBS0EseUVBQUE7QUFJQSx1RUFBQTtBQVFBLHFFQUFBO0FBeUJBO0VBQ0UsbUJBQUE7RUFDQSxtQkFBQTtFQUVBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUUxRUY7QUEzREE7RUFDRSxpQkFBQTtFQUNBLDZFQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFFQSxzQkFBQTtFQUVBLG9CQUFBO0VBQ0EseUJBQUE7VUFBQSxpQkFBQTtBQThERjtBQTNEQTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBRUEsc0JBQUE7RUFFQSxvQkFBQTtFQUNBLHlCQUFBO1VBQUEsaUJBQUE7QUE4REY7QUEzREE7RUFDRSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBRUEsc0JBQUE7RUFFQSxvQkFBQTtFQUNBLHlCQUFBO1VBQUEsaUJBQUE7QUE4REYiLCJmaWxlIjoic3JjL2FwcC9vbGdhLXN0YXR1cy9vbGdhLXN0YXR1cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cblxuQGltcG9ydCBcIi4vYXNzZXRzL3Njc3MvbW9kdWxlcy9fZm9udHMuc2Nzc1wiO1xuJGdhbWVzY29yZS1mYW1pbHk6IFwiRmlndXJpbmVTeW1ib2xUMVwiO1xuJGdhbWVzY29yZS1oaWdobGlnaHQ6ICM1ODU4NThmZjtcbiRnYW1lc2NvcmUtZm9yZWdyb3VuZDogd2hpdGU7XG5cbiRyZWQ6ICNlNDMwMzA7XG4kZ3JlZW46ICMxOWExODc7XG4kbGlnaHQtYmx1ZTogIzAwZmZmZmZmO1xuJGJsdWU6ICMzNjdiZjA7XG4kZGFyay1ibHVlOiAjMjY1YWIxO1xuJG1hcm9vbjogI2I4MTc0YztcbiRwdXJwbGU6ICM4YzQyYWI7XG5cbi8vIE1haW4gT0xHQSBDb2xvciBFbGVtZW50IFZhcmlhYmxlc1xuJHRleHRDb2xvcjogdmFyKC0tdGV4dENvbG9yKTsgLy8gTWFpbiBUZXh0IENvbG9yXG4kdGV4dENvbG9yQXR0ZW50aW9uOiB2YXIoLS10ZXh0Q29sb3JBdHRlbnRpb24pOyAvLyBBdHRlbnRpb24gdGV4dFxuJHRleHRDb2xvclJlbW92ZTogdmFyKC0tdGV4dENvbG9yUmVtb3ZlKTsgLy8gUmVtb3ZlL0RlbGV0ZS9DbG9zZVxuJHRleHRDb2xvckFkZDogdmFyKC0tdGV4dENvbG9yQWRkKTsgLy8gQWRkL0NyZWF0ZS9PcGVuXG4kdGV4dENvbG9yQWN0aXZlOiB2YXIoLS10ZXh0Q29sb3JBY3RpdmUpOyAvLyBBZGQvQ3JlYXRlL09wZW5cbiRiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kKTsgLy8gTWFpbiBiYWNrZ3JvdW5kIENvbG9yXG4kYmdDb250YWluZXI6IHZhcigtLWJnQ29udGFpbmVyKTsgLy8gYmFja2dyb3VuZCBvZiBDb250YWluZXJzXG4kYmdNZW51OiB2YXIoLS1iZ01lbnUpOyAvLyBiYWNrZ3JvdW5kIG9mIE1lbnVzXG4kYmdJdGVtOiB2YXIoLS1iZ0l0ZW0pOyAvLyBiYWNrZ3JvdW5kIG9mIEl0ZW1zXG5cbi8vIENvbnRleHQgTWVudVxuJGJnQ29udGV4dDogdmFyKC0tYmdDb250ZXh0KTsgLy8gYmFja2dyb3VuZCBvZiBDb250ZXh0IE1lbnVcbiR0ZXh0Q29sb3JDb250ZXh0OiB2YXIoLS10ZXh0Q29sb3JDb250ZXh0KTsgLy8gdGV4dCBjb2xvciBDb250ZXh0IE1lbnVcbiRib3JkZXJDb250ZXh0OiB2YXIoLS1ib3JkZXJDb250ZXh0KTsgLy8gYm9yZGVyIENvbnRleHQgTWVudVxuJG92ZXJsYXlDb250ZXh0QmFja2dyb3VuZDogdmFyKFxuICAtLW92ZXJsYXlDb250ZXh0QmFja2dyb3VuZFxuKTsgLy8gQ29udGV4dCBNZW51IE92ZXJsYXkgYmFja2dyb3VuZCBtYWluXG4kb3ZlcmxheUNvbnRleHRCYWNrZ3JvdW5kR3JhZGllbnQ6IHZhcihcbiAgLS1vdmVybGF5Q29udGV4dEJhY2tncm91bmRHcmFkaWVudFxuKTsgLy8gQ29udGV4dCBNZW51IGJhY2tncm91bmQgZ3JhZGllbnRcblxuXG5cbi8qKioqKioqKioqKioqKioqKioqIE1lbnUgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4kbWVCYWNrZ3JvdW5kOiB2YXIoLS1tZUJhY2tncm91bmQpO1xuXG4vKioqKioqKioqKioqKioqKioqKioqKioqIE1lbnUgQ29udHJvbHMgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuJGNzRmlsbDogdmFyKC0tY3NGaWxsKTtcbiRjc0FjY2VudDogdmFyKC0tY3NBY2NlbnQpO1xuJGNzQWNjZW50MjogdmFyKC0tY3NBY2NlbnQyKTtcblxuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBDb250YWluZXIgVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiRnc1RleHRDb2xvcjogdmFyKC0tZ3NUZXh0Q29sb3IpOyAvLyBUZXh0IGNvbG9yIGZvciBnYW1lIHNjb3JlXG4kZ3NCYWNrZ3JvdW5kOiB2YXIoLS1nc0JhY2tncm91bmQpOyAvLyBiYWNrZ3JvdW5kIG9mIENvbnRhaW5lcnNcbiRnc0xpc3RCYWNrZ3JvdW5kOiB2YXIoLS1nc0xpc3RCYWNrZ3JvdW5kKTsgLy8gbGlzdCBiYWNrZ3JvdW5kIG9mIGdhbWUgc2NvcmVcbiRnc0JvcmRlcjogdmFyKC0tZ3NCb3JkZXIpOyAvLyBiYWNrZ3JvdW5kIG9mIE1lbnVzXG4kZ3NUZXh0U2l6ZTogdmFyKC0tZ3NUZXh0U2l6ZSk7IC8vIGJhY2tncm91bmQgb2YgTWVudXNcbiRnc0ZvbnRGYW1pbHk6IHZhcigtLWdzRm9udEZhbWlseSk7IC8vIHNjb3JlIGZvbnRcbiRnc1RhYmxlSXRlbVdpZHRoOiB2YXIoLS1nc1RhYmxlSXRlbVdpZHRoKTsgLy8gd2lkdGggb2Ygc2NvcmUgaXRlbSBpbiB0YWJsZSBsYXlvdXRcbiRnc1RhYmxlUGx5V2lkdGg6IHZhcigtLWdzVGFibGVQbHlXaWR0aCk7IC8vIHdpZHRoIG9mIHBseSBlbGVtZW50IGluIHRhYmxlIGxheW91dFxuXG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIENvbnRhaW5lciBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuJGdzVGV4dENvbG9yTVc6IHZhcigtLWdzVGV4dENvbG9yTVcpOyAvLyBUZXh0IGNvbG9yIGZvciBnYW1lIHNjb3JlXG4kZ3NCYWNrZ3JvdW5kTVc6IHZhcigtLWdzQmFja2dyb3VuZE1XKTsgLy8gYmFja2dyb3VuZCBvZiBDb250YWluZXJzXG4kZ3NCb3JkZXJNVzogdmFyKC0tZ3NCb3JkZXJNVyk7IC8vIGJhY2tncm91bmQgb2YgTWVudXNcbiRnc1RleHRTaXplTVc6IHZhcigtLWdzVGV4dFNpemVNVyk7IC8vIGJhY2tncm91bmQgb2YgTWVudXNcblxuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBDb250YWluZXIgVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiRnc1RleHRDb2xvck1COiB2YXIoLS1nc1RleHRDb2xvck1CKTsgLy8gVGV4dCBjb2xvciBmb3IgZ2FtZSBzY29yZVxuJGdzQmFja2dyb3VuZE1COiB2YXIoLS1nc0JhY2tncm91bmRNQik7IC8vIGJhY2tncm91bmQgb2YgQ29udGFpbmVyc1xuJGdzQm9yZGVyTUI6IHZhcigtLWdzQm9yZGVyTUIpOyAvLyBiYWNrZ3JvdW5kIG9mIE1lbnVzXG4kZ3NUZXh0U2l6ZU1COiB2YXIoLS1nc1RleHRTaXplTUIpOyAvLyBiYWNrZ3JvdW5kIG9mIE1lbnVzXG5cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgSGlnaGxpZ2h0IFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4kZ3NUZXh0Q29sb3JIRzogdmFyKC0tZ3NUZXh0Q29sb3JIRyk7IC8vIFRleHQgY29sb3IgZm9yIGhpZ2hsaWdodFxuJGdzQW5ub3RhdGlvbkNvbG9ySEc6IHZhcigtLWdzQW5ub3RhdGlvbkNvbG9ySEcpOyAvLyBBbm5vdGF0aW9uL0NvbW1lbnQgY29sb3IgZm9yIGhpZ2hsaWdodFxuJGdzQmFja2dyb3VuZEhHOiB2YXIoLS1nc0JhY2tncm91bmRIRyk7IC8vIGJhY2tncm91bmQgZm9yIGhpZ2hsaWdodFxuJGdzQm9yZGVySEc6IHZhcigtLWdzQm9yZGVySEcpOyAvLyBib3JkZXIgZm9yIGhpZ2hsaWdodFxuXG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIEFubm90YXRpb24gVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiRnc1RleHRDb2xvckFOOiB2YXIoLS1nc1RleHRDb2xvckFOKTsgLy8gVGV4dCBjb2xvciBmb3IgaGlnaGxpZ2h0XG4kZ3NCYWNrZ3JvdW5kQU46IHZhcigtLWdzQmFja2dyb3VuZEFOKTsgLy8gYmFja2dyb3VuZCBmb3IgaGlnaGxpZ2h0XG4kZ3NCb3JkZXJBTjogdmFyKC0tZ3NCb3JkZXJBTik7IC8vIGJvcmRlciBmb3IgaGlnaGxpZ2h0XG5cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgVmFyaWF0aW9uIFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4kZ3NUZXh0Q29sb3JWQTogdmFyKC0tZ3NUZXh0Q29sb3JWQSk7IC8vIFRleHQgY29sb3IgZm9yIGhpZ2hsaWdodFxuJGdzQmFja2dyb3VuZFZBOiB2YXIoLS1nc0JhY2tncm91bmRWQSk7IC8vIGJhY2tncm91bmQgZm9yIGhpZ2hsaWdodFxuJGdzQm9yZGVyVkE6IHZhcigtLWdzQm9yZGVyVkEpOyAvLyBib3JkZXIgZm9yIGhpZ2hsaWdodFxuXG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIFBseSBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuJGdzVGV4dENvbG9yUEM6IHZhcigtLWdzVGV4dENvbG9yUEMpOyAvLyBUZXh0IGNvbG9yIGZvciBnYW1lIHNjb3JlIHBseVxuJGdzQmFja2dyb3VuZFBDOiB2YXIoLS1nc0JhY2tncm91bmRQQyk7IC8vIGJhY2tncm91bmQgZm9yIGdhbWUgc2NvcmUgcGx5XG4kZ3NCb3JkZXJQQzogdmFyKC0tZ3NCb3JkZXJQQyk7IC8vIGJvcmRlciBmb3IgZ2FtZSBzY29yZSBwbHlcblxuLyoqKioqKioqKioqKioqKioqKioqIENvbnRyb2wgQ29sb3JzICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiRjc0JhY2tncm91bmQ6IHZhcigtLWNzQmFja2dyb3VuZCk7IC8vIGJhY2tncm91bmQgZm9yIGNvbnRyb2xzXG4kY3NDb2xvcjogdmFyKC0tY3NDb2xvcik7IC8vIGNvbnRyb2xzIGNvbG9yIChmb3JlZ3JvdW5kKVxuXG4vKioqKioqKioqKioqKioqKioqKiogQm9hcmQgQ29sb3JzICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiRib2FyZEJHRGFyazogdmFyKC0tYm9hcmRCR0RhcmspOyAvLyBib2FyZCBkYXJrIHRpbGVcbiRib2FyZEJHTGlnaHQ6IHZhcigtLWJvYXJkQkdMaWdodCk7IC8vIGJvYXJkIGxpZ2h0IHRpbGVcbiRib2FyZExhYmVsTGlnaHQ6IHZhcigtLWJvYXJkTGFiZWxMaWdodCk7IC8vIGJvYXJkIGxpZ2h0IGxhYmVsXG4kYm9hcmRMYWJlbERhcms6IHZhcigtLWJvYXJkTGFiZWxEYXJrKTsgLy8gYm9hcmQgZGFyayBsYWJlbFxuXG5cblxuLyoqKioqKioqKioqKioqKioqKioqIEZvbnQgU2l6ZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuJGdzRm9udFNpemU6IHZhcigtLWdzRm9udFNpemUpOyAvLyBib2FyZCBkYXJrIHRpbGVcbiRnc0ZvbnRTaXplQU46IHZhcigtLWdzRm9udFNpemVBTik7IC8vIGJvYXJkIGxpZ2h0IHRpbGVcbiRnc0ZvbnRTaXplSEc6IHZhcigtLWdzRm9udFNpemVIRyk7IC8vIGJvYXJkIGxpZ2h0IGxhYmVsXG4kZ3NGb250U2l6ZVZBOiB2YXIoLS1nc0ZvbnRTaXplVkEpOyAvLyBib2FyZCBkYXJrIGxhYmVsXG4kZ3NGb250U2l6ZVBDOiB2YXIoLS1nc0ZvbnRTaXplUEMpOyAvLyBib2FyZCBkYXJrIGxhYmVsXG4kaGRyRGF0YUZvbnRTaXplOiB2YXIoLS1oZHJEYXRhRm9udFNpemUpOyAvLyBzaXplIG9mIHBsYXllciBzaG93Y2FzZSBkYXRhXG4kaGRyTmFtZUZvbnRTaXplOiB2YXIoLS1oZHJOYW1lRm9udFNpemUpOyAvLyBzaXplIG9mIHBsYXllciBzaG93Y2FzZSBOYW1lXG4kaGRyVGl0bGVGb250U2l6ZTogdmFyKC0taGRyVGl0bGVGb250U2l6ZSk7IC8vIHNpemUgb2YgcGxheWVyIHNob3djYXNlIGRhdGFcbiRoZHJWYXJpYW50Rm9udFNpemU6IHZhcigtLWhkclZhcmlhbnRGb250U2l6ZSk7IC8vIHNpemUgb2YgcGxheWVyIHNob3djYXNlIE5hbWVcbiRoZHJNYXRjaERhdGFGb250U2l6ZTogdmFyKC0taGRyTWF0Y2hEYXRhRm9udFNpemUpOyAvLyBzaXplIG9mIHBsYXllciBzaG93Y2FzZSBOYW1lXG4kaGRyT3BlbmluZ0ZvbnRTaXplOiB2YXIoLS1oZHJNYXRjaERhdGFGb250U2l6ZSk7IC8vIHNpemUgb2YgcGxheWVyIHNob3djYXNlIE5hbWVcbiRoZHJSZXN1bHRGb250U2l6ZTogdmFyKC0taGRyUmVzdWx0Rm9udFNpemUpOyAvLyBzaXplIG9mIHBsYXllciBzaG93Y2FzZSBOYW1lXG4kaGRyUm91bmRGb250U2l6ZTogdmFyKC0taGRyUm91bmRGb250U2l6ZSk7IC8vIHNpemUgb2YgcGxheWVyIHNob3djYXNlIE5hbWVcblxuLy8gR2VuZXJhbCBzdHVmZlxuJHRleHQtY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xuJGJnLW91dGVyOiB2YXIoLS1iZy1vdXRlcik7XG4kYmctaW5uZXI6IHZhcigtLWJnLWlubmVyKTtcblxuJGJnLWNvbG9yOiAjZjJmM2Y3O1xuJGZnLWNvbG9yOiAjMzgzYTQxO1xuXG4kZ2xvdy1zaGFkb3c6IDAgMCAwLjVlbSB0cmFuc3BhcmVudGl6ZSgkYmx1ZSwgMC4zKTtcblxuOnJvb3Qge1xuICAtLWJnLWNvbG9yOiAjeyRiZy1jb2xvcn07XG4gIC0tZmctY29sb3I6ICN7JGZnLWNvbG9yfTtcblxuICAtLXJlZDogI3skcmVkfTtcbiAgLS1ncmVlbjogI3skZ3JlZW59O1xuICAtLWJsdWU6ICN7JGJsdWV9O1xuICAtLWRhcmstYmx1ZTogI3skZGFyay1ibHVlfTtcbiAgLS1tYXJvb246ICN7JG1hcm9vbn07XG4gIC0tcHVycGxlOiAjeyRwdXJwbGV9O1xufVxuXG4vLyA6Oi1tb3otZm9jdXMtaW5uZXIsXG4vLyA6LW1vei1mb2N1c3Jpbmcge1xuLy8gICBib3JkZXI6IDA7XG4vLyAgIGNvbG9yOiB0cmFuc3BhcmVudDtcbi8vICAgdGV4dC1zaGFkb3c6IDAgMCAwICRmZy1jb2xvcjtcbi8vIH1cblxuLy8gOjpzZWxlY3Rpb24sXG4vLyA6Oi1tb3otc2VsZWN0aW9uIHtcbi8vICAgY29sb3I6IHdoaXRlO1xuLy8gICBiYWNrZ3JvdW5kOiBibGFjaztcbi8vIH1cblxuLy8gKiB7XG4vLyAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4vLyAgIG91dGxpbmU6IG5vbmU7XG4vLyAgIHVzZXItc2VsZWN0OiBub25lO1xuLy8gICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XG4vLyAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4vLyAgIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTtcbi8vICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbi8vICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuLy8gICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4vLyAgIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbi8vICAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApICFpbXBvcnRhbnQ7XG4vLyAgIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcbi8vICAgY3Vyc29yOiBkZWZhdWx0O1xuLy8gICBsZXR0ZXItc3BhY2luZzogMDtcbi8vIH1cblxuLy8gLnNlbGVjdGFibGUsXG4vLyAuc2VsZWN0YWJsZSAqIHtcbi8vICAgY3Vyc29yOiBhdXRvO1xuLy8gICB1c2VyLXNlbGVjdDogdGV4dDtcbi8vICAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiB0ZXh0O1xuLy8gICAtd2Via2l0LXVzZXItc2VsZWN0OiB0ZXh0O1xuLy8gICAta2h0bWwtdXNlci1zZWxlY3Q6IHRleHQ7XG4vLyAgIC1tb3otdXNlci1zZWxlY3Q6IHRleHQ7XG4vLyAgIC1tcy11c2VyLXNlbGVjdDogdGV4dDtcbi8vIH1cblxuLy8gaHRtbCxcbi8vIGJvZHkge1xuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmctY29sb3I7XG4vLyAgIGNvbG9yOiAkZmctY29sb3I7XG4vLyAgIG1hcmdpbjogMDtcbi8vICAgcGFkZGluZzogMDtcbi8vICAgZm9udC1zaXplOiAxMHB0O1xuLy8gICBoZWlnaHQ6IDEwMCU7XG4vLyAgIG92ZXJmbG93OiBhdXRvO1xuLy8gfVxuXG4vLyAud2l0aC1zaGFkb3cge1xuLy8gICBib3gtc2hhZG93OiA2cHggNnB4IDEwcHggdHJhbnNwYXJlbnRpemUoYmxhY2ssIDAuOSksIC02cHggLTZweCAxMHB4IHdoaXRlO1xuLy8gfVxuXG4vLyAub3V0c2V0IHtcbi8vICAgQGV4dGVuZCAud2l0aC1zaGFkb3c7XG5cbi8vICAgYm9yZGVyLXJhZGl1czogMTBweDtcbi8vICAgYmFja2dyb3VuZDogJGJnLWNvbG9yO1xuLy8gfVxuXG4vLyAuaW5zZXQge1xuLy8gICBib3JkZXItcmFkaXVzOiAxMHB4O1xuLy8gICBib3gtc2hhZG93OiAwIDAgdHJhbnNwYXJlbnQsIDAgMCB0cmFuc3BhcmVudCxcbi8vICAgICBpbnNldCAzcHggM3B4IDVweCB0cmFuc3BhcmVudGl6ZShibGFjaywgMC45KSwgaW5zZXQgLTNweCAtM3B4IDVweCB3aGl0ZTtcbi8vICAgYmFja2dyb3VuZDogbGlnaHRlbigkYmctY29sb3IsIDIlKTtcbi8vIH1cblxuLy8gLnBhcGVyIHtcbi8vICAgQGV4dGVuZCAub3V0c2V0O1xuLy8gICBwYWRkaW5nOiAxMHB4IDIwcHggMjBweDtcbi8vICAgbWFyZ2luLXRvcDogMjBweDtcbi8vICAgbWluLWhlaWdodDogMTAwcHg7XG4vLyAgIGZvbnQtc2l6ZTogMS4yZW07XG4vLyAgIGJhY2tncm91bmQ6ICRiZy1jb2xvcjtcbi8vIH1cblxuLy8gc2VjdGlvbixcbi8vIGFydGljbGUsXG4vLyAuc2VjdGlvbixcbi8vIC5hcnRpY2xlLFxuLy8gLnBhcGVyIHtcbi8vICAgbGluZS1oZWlnaHQ6IDJlbTtcbi8vICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuLy8gICB3b3JkLWJyZWFrOiBub3JtYWw7XG4vLyAgIGxpbmUtaGVpZ2h0OiAyZW07XG4vLyB9XG5cbi8vIGlucHV0W3R5cGU9XCJ0ZXh0XCJdLFxuLy8gaW5wdXRbdHlwZT1cInNlYXJjaFwiXSxcbi8vIGlucHV0W3R5cGU9XCJ0ZWxcIl0sXG4vLyBpbnB1dFt0eXBlPVwidXJsXCJdLFxuLy8gaW5wdXRbdHlwZT1cImVtYWlsXCJdLFxuLy8gaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJdLFxuLy8gaW5wdXRbdHlwZT1cImRhdGVcIl0sXG4vLyBpbnB1dFt0eXBlPVwibW9udGhcIl0sXG4vLyBpbnB1dFt0eXBlPVwid2Vla1wiXSxcbi8vIGlucHV0W3R5cGU9XCJ0aW1lXCJdLFxuLy8gaW5wdXRbdHlwZT1cIm51bWJlclwiXSxcbi8vIGlucHV0W3R5cGU9XCJjb2xvclwiXSxcbi8vIHNlbGVjdCxcbi8vIHRleHRhcmVhIHtcbi8vICAgYm9yZGVyOiAwO1xuLy8gICBiYWNrZ3JvdW5kOiAkYmctY29sb3I7XG4vLyAgIGNvbG9yOiAkZmctY29sb3I7XG4vLyAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4vLyAgIHBhZGRpbmc6IDAgMS4yNWVtO1xuLy8gICBsaW5lLWhlaWdodDogMS4yNWVtO1xuLy8gICBoZWlnaHQ6IDMuNWVtO1xuLy8gICBtYXJnaW46IDEwcHggMDtcbi8vICAgZm9udC1zaXplOiAxLjFyZW07XG4vLyAgIGN1cnNvcjogdGV4dDtcbi8vICAgdXNlci1zZWxlY3Q6IHRleHQ7XG4vLyAgIC13ZWJraXQtdG91Y2gtY2FsbG91dDogdGV4dDtcbi8vICAgLXdlYmtpdC11c2VyLXNlbGVjdDogdGV4dDtcbi8vICAgLWtodG1sLXVzZXItc2VsZWN0OiB0ZXh0O1xuLy8gICAtbW96LXVzZXItc2VsZWN0OiB0ZXh0O1xuLy8gICAtbXMtdXNlci1zZWxlY3Q6IHRleHQ7XG4vLyAgIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC4ycztcblxuLy8gICAmOm5vdChzZWxlY3QpIHtcbi8vICAgICBAZXh0ZW5kIC5pbnNldDtcblxuLy8gICAgICY6Zm9jdXMge1xuLy8gICAgICAgQGV4dGVuZCAub3V0c2V0O1xuLy8gICAgIH1cbi8vICAgfVxuLy8gfVxuXG4vLyB0ZXh0YXJlYSB7XG4vLyAgIGhlaWdodDogMzUwcHg7XG4vLyAgIHBhZGRpbmc6IDEuMjVlbTtcbi8vIH1cblxuLy8gc2VsZWN0IHtcbi8vICAgQGV4dGVuZCAub3V0c2V0O1xuXG4vLyAgIGN1cnNvcjogcG9pbnRlcjtcbi8vICAgYmFja2dyb3VuZDogdXJsKGRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjJaWEp6YVc5dVBTSXhMakVpSUhacFpYZENiM2c5SWpBZ01DQXhPU0F4T1NJZ2VHMXNibk05SW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTHpJd01EQXZjM1puSWo0OFp5QjBjbUZ1YzJadmNtMDlJbTFoZEhKcGVDZ3VNRE0wSURBZ01DQXVNRE0wSUMwMkxqZ2dNUzQzWlMwMUtTSWdjM1I1YkdVOUltWnBiR3c2SXpkaU4yVTRZeUkrUEhCaGRHZ2daRDBpYlRRNE1DQXpORFF0TWpFeExUSXhNbU10TVRZdE1UWXROREV0TVRZdE5UY2dNQzB4TmlBeE5pMHhOaUEwTWlBd0lEVTNiREl6T0NBeU16bGpPQzQwSURndU5TQXlNQ0F4TWlBek1TQXhNaUF4TVNBd0xqVTJJREl5TFRNdU1pQXpNUzB4TW13eU16Z3RNak01WXpFMkxURTJJREUyTFRReUlEQXROVGR6TFRReExURTJMVFUzSURCNklpQnpkSGxzWlQwaVptbHNiRG9qTjJJM1pUaGpJaTgrUEM5blBqd3ZjM1puUGdvPSlcbi8vICAgICBuby1yZXBlYXQgcmlnaHQgMWVtIGNlbnRlcjtcbi8vICAgYmFja2dyb3VuZC1zaXplOiAxLjJlbTtcbi8vICAgcGFkZGluZy1yaWdodDogM2VtO1xuLy8gfVxuXG4vLyBpbnB1dDo6cGxhY2Vob2xkZXIsXG4vLyB0ZXh0YXJlYTo6cGxhY2Vob2xkZXIge1xuLy8gICBvcGFjaXR5OiAxO1xuLy8gICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnM7XG4vLyAgIGNvbG9yOiBpbmhlcml0O1xuLy8gfVxuXG4vLyBpbnB1dDpmb2N1czo6cGxhY2Vob2xkZXIsXG4vLyB0ZXh0YXJlYTpmb2N1czo6cGxhY2Vob2xkZXIge1xuLy8gICBvcGFjaXR5OiAwLjI7XG4vLyB9XG5cbi8vIGlucHV0Oi1tcy1pbnB1dC1wbGFjZWhvbGRlcixcbi8vIHRleHRhcmVhOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4vLyAgIG9wYWNpdHk6IDE7XG4vLyAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycztcbi8vICAgY29sb3I6IGluaGVyaXQ7XG4vLyB9XG5cbi8vIGlucHV0OmZvY3VzOi1tcy1pbnB1dC1wbGFjZWhvbGRlcixcbi8vIHRleHRhcmVhOmZvY3VzOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4vLyAgIG9wYWNpdHk6IDAuMjtcbi8vIH1cblxuLy8gaW5wdXRbdHlwZT1cInNlYXJjaFwiXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbixcbi8vIGlucHV0W3R5cGU9XCJzZWFyY2hcIl06Oi13ZWJraXQtc2VhcmNoLWNhbmNlbC1idXR0b24sXG4vLyBpbnB1dFt0eXBlPVwic2VhcmNoXCJdOjotd2Via2l0LXNlYXJjaC1yZXN1bHRzLWJ1dHRvbixcbi8vIGlucHV0W3R5cGU9XCJzZWFyY2hcIl06Oi13ZWJraXQtc2VhcmNoLXJlc3VsdHMtZGVjb3JhdGlvbiB7XG4vLyAgIGRpc3BsYXk6IG5vbmU7XG4vLyB9XG5cbi8vIGJ1dHRvbixcbi8vIGlucHV0W3R5cGU9XCJidXR0b25cIl0sXG4vLyBpbnB1dFt0eXBlPVwic3VibWl0XCJdLFxuLy8gaW5wdXRbdHlwZT1cInJlc2V0XCJdIHtcbi8vICAgQGV4dGVuZCAub3V0c2V0O1xuXG4vLyAgIGJvcmRlcjogMDtcbi8vICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4vLyAgIHBhZGRpbmc6IDEwcHggMDtcbi8vICAgd2lkdGg6IDhlbTtcbi8vICAgdGV4dC1hbGlnbjogY2VudGVyO1xuLy8gICBjdXJzb3I6IHBvaW50ZXI7XG4vLyAgIGNvbG9yOiBpbmhlcml0O1xuLy8gICBmb250LXNpemU6IDEuMXJlbTtcbi8vICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYmFja2dyb3VuZC1jb2xvciwgYm94LXNoYWRvdztcbi8vICAgdHJhbnNpdGlvbi1kZWxheTogMC4ycztcbi8vICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4ycztcblxuLy8gICAmLmFjdGl2ZSxcbi8vICAgJjphY3RpdmUge1xuLy8gICAgIEBleHRlbmQgLmluc2V0O1xuXG4vLyAgICAgdHJhbnNpdGlvbi1kZWxheTogMHM7XG4vLyAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4xcztcbi8vICAgfVxuXG4vLyAgIEBlYWNoICRuYW1lLCAkY29sb3IgaW4gKFwicmVkXCI6ICRyZWQsIFwiZ3JlZW5cIjogJGdyZWVuLCBcImJsdWVcIjogJGJsdWUpIHtcbi8vICAgICBAYXQtcm9vdCAuI3skbmFtZX0tYnV0dG9uLFxuLy8gICAgICAgJi4jeyRuYW1lfS1idXR0b24ge1xuLy8gICAgICAgQGV4dGVuZCBidXR0b247XG5cbi8vICAgICAgICRfYmctaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsICRjb2xvciAzMCUsIGxpZ2h0ZW4oJGNvbG9yLCA2JSkgODAlKTtcblxuLy8gICAgICAgY29sb3I6IHdoaXRlO1xuLy8gICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4vLyAgICAgICB0ZXh0LXNoYWRvdzogMCAwLjFlbSAwLjFlbSB0cmFuc3BhcmVudGl6ZShibGFjaywgMC4zKTtcbi8vICAgICAgIGJhY2tncm91bmQ6ICRfYmctaW1hZ2U7XG4vLyAgICAgICBib3gtc2hhZG93OiAwIDAgMC41ZW0gdHJhbnNwYXJlbnRpemUoJGNvbG9yLCAwLjMpLCAwIDAgdHJhbnNwYXJlbnQsXG4vLyAgICAgICAgIGluc2V0IDAgLTVweCAwIHRyYW5zcGFyZW50aXplKGJsYWNrLCAwLjk1KSxcbi8vICAgICAgICAgaW5zZXQgMCAycHggMCB0cmFuc3BhcmVudGl6ZSh3aGl0ZSwgMC44KTtcbi8vICAgICAgIGJvcmRlci1yYWRpdXM6IDZweCA2cHggOHB4IDhweDtcbi8vICAgICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGJveC1zaGFkb3csIGJvcmRlci1yYWRpdXM7XG5cbi8vICAgICAgICYuYWN0aXZlLFxuLy8gICAgICAgJjphY3RpdmUge1xuLy8gICAgICAgICBiYWNrZ3JvdW5kOiAkX2JnLWltYWdlO1xuLy8gICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4vLyAgICAgICAgIGJveC1zaGFkb3c6IDAgMCB0cmFuc3BhcmVudCwgMCAwIHRyYW5zcGFyZW50LFxuLy8gICAgICAgICAgIGluc2V0IDAgMnB4IDVweCAycHggdHJhbnNwYXJlbnRpemUoYmxhY2ssIDAuOCk7XG4vLyAgICAgICB9XG4vLyAgICAgfVxuLy8gICB9XG4vLyB9XG5cbi8vIGxhYmVsIHtcbi8vICAgJixcbi8vICAgJiAqIHtcbi8vICAgICBjdXJzb3I6IHBvaW50ZXI7XG4vLyAgIH1cblxuLy8gICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4vLyAgIHBhZGRpbmc6IDAuNTZlbSAwO1xuLy8gfVxuXG4vLyBhIHtcbi8vICAgJixcbi8vICAgJjpsaW5rLFxuLy8gICAmOnZpc2l0ZWQsXG4vLyAgICY6aG92ZXIgJjphY3RpdmUge1xuLy8gICAgICYsXG4vLyAgICAgJiAqIHtcbi8vICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbi8vICAgICB9XG5cbi8vICAgICBmb250LXdlaWdodDogYm9sZDtcbi8vICAgICBjb2xvcjogJGJsdWU7XG4vLyAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4vLyAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuLy8gICB9XG4vLyB9XG5cbi8vIGgxLFxuLy8gaDIsXG4vLyBoMyxcbi8vIGg0LFxuLy8gaDUsXG4vLyBoNiB7XG4vLyAgIGxpbmUtaGVpZ2h0OiAxLjVlbTtcbi8vIH1cblxuLy8gaDEge1xuLy8gICBmb250LXNpemU6IDRlbTtcbi8vICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4vLyAgIG1hcmdpbjogMC43ZW0gMDtcbi8vIH1cblxuLy8gaDIge1xuLy8gICBmb250LXNpemU6IDNlbTtcbi8vICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4vLyAgIG1hcmdpbjogMC44ZW0gMDtcbi8vIH1cblxuLy8gaDMge1xuLy8gICBmb250LXNpemU6IDIuNWVtO1xuLy8gICBmb250LXdlaWdodDogbGlnaHRlcjtcbi8vICAgbWFyZ2luOiAwLjllbSAwO1xuLy8gfVxuXG4vLyBoNCB7XG4vLyAgIGZvbnQtc2l6ZTogMmVtO1xuLy8gICBmb250LXdlaWdodDogbGlnaHRlcjtcbi8vICAgbWFyZ2luOiAxZW0gMDtcbi8vIH1cblxuLy8gaDUge1xuLy8gICBtYXJnaW46IDAuNWVtIDA7XG4vLyAgIGZvbnQtc2l6ZTogMS4yZW07XG4vLyAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4vLyB9XG5cbi8vIGg2IHtcbi8vICAgbWFyZ2luOiAxZW0gMCAxZW0gMS40ZW07XG4vLyAgIGZvbnQtc2l6ZTogMWVtO1xuLy8gICBmb250LXdlaWdodDogYm9sZDtcbi8vIH1cblxuLy8gaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdLFxuLy8gaW5wdXRbdHlwZT1cInJhZGlvXCJdIHtcbi8vICAgJF9ib3JkZXItd2lkdGg6IDAuMTVlbTtcbi8vICAgJF9ib3gtc2hhZG93OiAycHggMnB4IDNweCB0cmFuc3BhcmVudGl6ZShibGFjaywgMC44KSwgLTJweCAtMnB4IDNweCB3aGl0ZSxcbi8vICAgICBpbnNldCAxcHggMXB4IDJweCB0cmFuc3BhcmVudGl6ZShibGFjaywgMC44KSwgaW5zZXQgLTFweCAtMXB4IDJweCB3aGl0ZTtcbi8vICAgZm9udC1zaXplOiAxZW07XG4vLyAgIGN1cnNvcjogcG9pbnRlcjtcbi8vICAgaGVpZ2h0OiAxLjJlbTtcbi8vICAgd2lkdGg6IDEuMmVtO1xuLy8gICBtYXJnaW46IDAgMC4zZW07XG4vLyAgIGJveC1zaGFkb3c6ICRfYm94LXNoYWRvdztcbi8vICAgYm9yZGVyOiAkX2JvcmRlci13aWR0aCBzb2xpZCAkYmctY29sb3I7XG4vLyAgIHZlcnRpY2FsLWFsaWduOiB0ZXh0LWJvdHRvbTtcbi8vICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYmFja2dyb3VuZCwgYm94LXNoYWRvdztcbi8vICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4ycztcblxuLy8gICAmOmFjdGl2ZSB7XG4vLyAgICAgYm94LXNoYWRvdzogJF9ib3gtc2hhZG93LCBpbnNldCAwIDAuMWVtIDAuMjVlbSB0cmFuc3BhcmVudGl6ZShibGFjaywgMC44KTtcbi8vICAgfVxuXG4vLyAgICY6Y2hlY2tlZCB7XG4vLyAgICAgYm9yZGVyLXdpZHRoOiAwLjFlbTtcbi8vICAgICBib3JkZXItY29sb3I6IGRhcmtlbigkYmx1ZSwgMTAlKTtcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmx1ZTtcbi8vICAgfVxuLy8gfVxuXG4vLyBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0ge1xuLy8gICBib3JkZXItcmFkaXVzOiAyNSU7XG5cbi8vICAgJjpjaGVja2VkIHtcbi8vICAgICBib3gtc2hhZG93OiAkZ2xvdy1zaGFkb3csIGluc2V0IDAgLTAuMWVtIDAgdHJhbnNwYXJlbnRpemUoYmxhY2ssIDAuOCksXG4vLyAgICAgICBpbnNldCAwIDAuMWVtIDAuMWVtIHRyYW5zcGFyZW50aXplKHdoaXRlLCAwLjgpO1xuLy8gICB9XG4vLyB9XG5cbi8vIGlucHV0W3R5cGU9XCJyYWRpb1wiXSB7XG4vLyAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG5cbi8vICAgJjpjaGVja2VkIHtcbi8vICAgICBib3gtc2hhZG93OiAkZ2xvdy1zaGFkb3c7XG4vLyAgICAgYm94LXNoYWRvdzogJGdsb3ctc2hhZG93LCBpbnNldCAwIDAuMTJlbSAwLjFlbSB0cmFuc3BhcmVudGl6ZSh3aGl0ZSwgMC43NSk7XG4vLyAgICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMC4xNWVtO1xuLy8gICB9XG4vLyB9XG5cbi8vIC5jaGVja3RleHQge1xuLy8gICB3aWR0aDogYXV0bztcbi8vICAgbWFyZ2luOiAwLjVlbTtcblxuLy8gICBpbnB1dCB7XG4vLyAgICAgZGlzcGxheTogbm9uZTtcblxuLy8gICAgICsgc3BhbiB7XG4vLyAgICAgICBAZXh0ZW5kIGJ1dHRvbjtcblxuLy8gICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4vLyAgICAgICBwYWRkaW5nOiAxZW07XG4vLyAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwcztcbi8vICAgICB9XG5cbi8vICAgICAmOmNoZWNrZWQgKyBzcGFuIHtcbi8vICAgICAgIEBleHRlbmQgLmJsdWUtYnV0dG9uO1xuXG4vLyAgICAgICBwYWRkaW5nOiAxZW07XG4vLyAgICAgfVxuLy8gICB9XG4vLyB9XG5cbi8vIC5zd2l0Y2gge1xuLy8gICAkX2hlaWdodDogMnJlbTtcbi8vICAgJF93aWR0aDogOHJlbTtcbi8vICAgJF9oYW5kbGUtd2lkdGg6ICRfaGVpZ2h0O1xuLy8gICAkX2hhbmRsZS10cmFuc2xhdGlvbjogJF93aWR0aCAtICRfaGFuZGxlLXdpZHRoO1xuXG4vLyAgIGhlaWdodDogJF9oZWlnaHQ7XG4vLyAgIHdpZHRoOiAkX3dpZHRoO1xuLy8gICBwYWRkaW5nOiAwO1xuLy8gICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbi8vICAgaW5wdXQge1xuLy8gICAgIGRpc3BsYXk6IG5vbmU7XG5cbi8vICAgICArIGRpdiB7XG4vLyAgICAgICBoZWlnaHQ6IDEwMCU7XG4vLyAgICAgICB3aWR0aDogMTAwJTtcbi8vICAgICAgIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xuLy8gICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4vLyAgICAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBib3gtc2hhZG93LCBiYWNrZ3JvdW5kLWNvbG9yO1xuLy8gICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4ycztcbi8vICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuMnM7XG4vLyAgICAgICBib3gtc2hhZG93OiAzcHggM3B4IDJweCAtMnB4IHRyYW5zcGFyZW50aXplKGJsYWNrLCAwLjkpLFxuLy8gICAgICAgICBpbnNldCAycHggMnB4IDJweCAxcHggdHJhbnNwYXJlbnRpemUoYmxhY2ssIDAuOSksXG4vLyAgICAgICAgIGluc2V0IC0ycHggLTJweCAxcHggd2hpdGU7XG5cbi8vICAgICAgICY6OmJlZm9yZSB7XG4vLyAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4vLyAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuLy8gICAgICAgICBoZWlnaHQ6IGNhbGMoI3skX2hhbmRsZS13aWR0aH0gKyA0cHgpO1xuLy8gICAgICAgICB3aWR0aDogY2FsYygjeyRfaGFuZGxlLXdpZHRofSArIDRweCk7XG4vLyAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4vLyAgICAgICAgIGJvcmRlcjogc29saWQgd2hpdGUgM3B4O1xuLy8gICAgICAgICBiYWNrZ3JvdW5kOiAkYmx1ZTtcbi8vICAgICAgICAgYm94LXNoYWRvdzogMCAzcHggMTBweCB0cmFuc3BhcmVudGl6ZShibGFjaywgMC44KSxcbi8vICAgICAgICAgICBpbnNldCAwIC0xcHggM3B4IHRyYW5zcGFyZW50aXplKGJsYWNrLCAwLjkpO1xuLy8gICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNnB4KTtcbi8vICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnM7XG4vLyAgICAgICB9XG4vLyAgICAgfVxuXG4vLyAgICAgJjpjaGVja2VkICsgZGl2IHtcbi8vICAgICAgIGJhY2tncm91bmQ6ICRibHVlO1xuLy8gICAgICAgYm94LXNoYWRvdzogJGdsb3ctc2hhZG93LCBpbnNldCAwIDJweCAycHggMnB4IHRyYW5zcGFyZW50aXplKGJsYWNrLCAwLjcpLFxuLy8gICAgICAgICBpbnNldCAwIDAgdHJhbnNwYXJlbnQ7XG5cbi8vICAgICAgICY6OmJlZm9yZSB7XG4vLyAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKCRfaGFuZGxlLXRyYW5zbGF0aW9uLCAtNnB4KTtcbi8vICAgICAgIH1cbi8vICAgICB9XG4vLyAgIH1cbi8vIH1cblxuLy8gaHIge1xuLy8gICBAZXh0ZW5kIC5pbnNldDtcbi8vICAgd2lkdGg6IDcyJTtcbi8vICAgaGVpZ2h0OiA4cHg7XG4vLyAgIGZsb2F0OiByaWdodDtcbi8vICAgYm9yZGVyOiAwO1xuLy8gfVxuXG4vLyBjb2RlLFxuLy8gcHJlIHtcbi8vICAgcGFkZGluZzogMC41ZW0gMWVtO1xuLy8gICBib3JkZXItcmFkaXVzOiA0cHg7XG4vLyAgIG92ZXJmbG93OiBhdXRvO1xuLy8gICBib3gtc2hhZG93OiAwIDVweCAzMHB4IDAgdHJhbnNwYXJlbnRpemUoYmxhY2ssIDAuOTUpO1xuLy8gfVxuXG4vLyBjb2RlIHtcbi8vICAgYmFja2dyb3VuZDogI2U2ZTZlNjtcbi8vIH1cblxuLy8gcHJlIHtcbi8vICAgYmFja2dyb3VuZDogd2hpdGU7XG4vLyAgIG1hcmdpbjogNGVtIDA7XG4vLyB9XG5cbi8vIGNvZGUsXG4vLyBwcmUge1xuLy8gICAmLFxuLy8gICAmICoge1xuLy8gICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuLy8gICAgIGxpbmUtaGVpZ2h0OiAyZW07XG4vLyAgICAgY3Vyc29yOiBhdXRvO1xuLy8gICAgIHVzZXItc2VsZWN0OiB0ZXh0O1xuLy8gICAgIC13ZWJraXQtdG91Y2gtY2FsbG91dDogdGV4dDtcbi8vICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiB0ZXh0O1xuLy8gICAgIC1raHRtbC11c2VyLXNlbGVjdDogdGV4dDtcbi8vICAgICAtbW96LXVzZXItc2VsZWN0OiB0ZXh0O1xuLy8gICAgIC1tcy11c2VyLXNlbGVjdDogdGV4dDtcbi8vICAgfVxuLy8gfVxuXG4vLyBibG9ja3F1b3RlIHtcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4vLyAgIHBhZGRpbmc6IDAuNWVtIDFlbTtcbi8vICAgYm9yZGVyLXJhZGl1czogNHB4O1xuLy8gICBib3gtc2hhZG93OiAwIDVweCAzMHB4IDAgdHJhbnNwYXJlbnRpemUoYmxhY2ssIDAuOTUpO1xuLy8gICBib3JkZXItbGVmdDogNnB4IHNvbGlkICRibHVlO1xuLy8gfVxuIiwiQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdDYXZlYXQnO1xuICAgIHNyYzogdXJsKCcuLi8uLi9mb250cy9Cb2xkL0NhdmVhdC1Cb2xkLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxuICAgICAgICB1cmwoJy4uLy4uL2ZvbnRzL0JvbGQvQ2F2ZWF0LUJvbGQud29mZicpIGZvcm1hdCgnd29mZicpO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LWRpc3BsYXk6IHN3YXA7XG59XG5cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnQ2F2ZWF0JztcbiAgICBzcmM6IHVybCgnLi4vLi4vZm9udHMvUmVndWxhci9DYXZlYXQtUmVndWxhci53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcbiAgICAgICAgdXJsKCcuLi8uLi9mb250cy9SZWd1bGFyL0NhdmVhdC1SZWd1bGFyLndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LWRpc3BsYXk6IHN3YXA7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ0ZpZ3VyaW5lU3ltYm9sVDEnO1xuICBzcmM6IHVybCgnLi4vLi4vZm9udHMvM3JkIFBhcnR5L0NoZXNzVmFyaWFudHMvRmlndXJpbmVTeW1ib2xUMUJvbGQud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXG4gICAgICB1cmwoJy4uLy4uL2ZvbnRzLzNyZCBQYXJ0eS9DaGVzc1ZhcmlhbnRzL0ZpZ3VyaW5lU3ltYm9sVDFCb2xkLndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdGaWd1cmluZVN5bWJvbFQxJztcbiAgc3JjOiB1cmwoJy4uLy4uL2ZvbnRzLzNyZCBQYXJ0eS9DaGVzc1ZhcmlhbnRzL0ZpZ3VyaW5lU3ltYm9sVDEud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXG4gICAgICB1cmwoJy4uLy4uL2ZvbnRzLzNyZCBQYXJ0eS9DaGVzc1ZhcmlhbnRzL0ZpZ3VyaW5lU3ltYm9sVDEud29mZicpIGZvcm1hdCgnd29mZicpO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnU2FuY3R1YXJ5UGxheWdyb3VuZCc7XG4gIHNyYzogdXJsKCcuLi8uLi9mb250cy8zcmQgUGFydHkvU2FuY3R1YXJ5UGxheWdyb3VuZC53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcbiAgICAgIHVybCgnLi4vLi4vZm9udHMvM3JkIFBhcnR5L1NhbmN0dWFyeVBsYXlncm91bmQud29mZicpIGZvcm1hdCgnd29mZicpO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbn1cblxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdBbWl0YSc7XG4gIHNyYzogdXJsKCcuLi8uLi9mb250cy8zcmQgUGFydHkvQW1pdGEvQW1pdGEtUmVndWxhci53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcbiAgICAgIHVybCgnLi4vLi4vZm9udHMvM3JkIFBhcnR5L0FtaXRhL0FtaXRhLVJlZ3VsYXIud29mZjInKSBmb3JtYXQoJ3dvZmYnKTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG59IiwiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkNhdmVhdFwiO1xuICBzcmM6IHVybChcIi4uLy4uL2ZvbnRzL0JvbGQvQ2F2ZWF0LUJvbGQud29mZjJcIikgZm9ybWF0KFwid29mZjJcIiksIHVybChcIi4uLy4uL2ZvbnRzL0JvbGQvQ2F2ZWF0LUJvbGQud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiQ2F2ZWF0XCI7XG4gIHNyYzogdXJsKFwiLi4vLi4vZm9udHMvUmVndWxhci9DYXZlYXQtUmVndWxhci53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKSwgdXJsKFwiLi4vLi4vZm9udHMvUmVndWxhci9DYXZlYXQtUmVndWxhci53b2ZmXCIpIGZvcm1hdChcIndvZmZcIik7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkZpZ3VyaW5lU3ltYm9sVDFcIjtcbiAgc3JjOiB1cmwoXCIuLi8uLi9mb250cy8zcmQgUGFydHkvQ2hlc3NWYXJpYW50cy9GaWd1cmluZVN5bWJvbFQxQm9sZC53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKSwgdXJsKFwiLi4vLi4vZm9udHMvM3JkIFBhcnR5L0NoZXNzVmFyaWFudHMvRmlndXJpbmVTeW1ib2xUMUJvbGQud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiRmlndXJpbmVTeW1ib2xUMVwiO1xuICBzcmM6IHVybChcIi4uLy4uL2ZvbnRzLzNyZCBQYXJ0eS9DaGVzc1ZhcmlhbnRzL0ZpZ3VyaW5lU3ltYm9sVDEud29mZjJcIikgZm9ybWF0KFwid29mZjJcIiksIHVybChcIi4uLy4uL2ZvbnRzLzNyZCBQYXJ0eS9DaGVzc1ZhcmlhbnRzL0ZpZ3VyaW5lU3ltYm9sVDEud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJTYW5jdHVhcnlQbGF5Z3JvdW5kXCI7XG4gIHNyYzogdXJsKFwiLi4vLi4vZm9udHMvM3JkIFBhcnR5L1NhbmN0dWFyeVBsYXlncm91bmQud29mZjJcIikgZm9ybWF0KFwid29mZjJcIiksIHVybChcIi4uLy4uL2ZvbnRzLzNyZCBQYXJ0eS9TYW5jdHVhcnlQbGF5Z3JvdW5kLndvZmZcIikgZm9ybWF0KFwid29mZlwiKTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiQW1pdGFcIjtcbiAgc3JjOiB1cmwoXCIuLi8uLi9mb250cy8zcmQgUGFydHkvQW1pdGEvQW1pdGEtUmVndWxhci53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKSwgdXJsKFwiLi4vLi4vZm9udHMvM3JkIFBhcnR5L0FtaXRhL0FtaXRhLVJlZ3VsYXIud29mZjJcIikgZm9ybWF0KFwid29mZlwiKTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG59XG4vKioqKioqKioqKioqKioqKioqKiBNZW51ICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKioqKioqKiBNZW51IENvbnRyb2xzICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgQ29udGFpbmVyIFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIENvbnRhaW5lciBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKiogR2FtZSBTY29yZSBDb250YWluZXIgVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgSGlnaGxpZ2h0IFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIEFubm90YXRpb24gVmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqIEdhbWUgU2NvcmUgVmFyaWF0aW9uIFZhcmlhYmxlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKiBHYW1lIFNjb3JlIFBseSBWYXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKioqIENvbnRyb2wgQ29sb3JzICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqKiBCb2FyZCBDb2xvcnMgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKioqIEZvbnQgU2l6ZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuOnJvb3Qge1xuICAtLWJnLWNvbG9yOiAjZjJmM2Y3O1xuICAtLWZnLWNvbG9yOiAjMzgzYTQxO1xuICAtLXJlZDogI2U0MzAzMDtcbiAgLS1ncmVlbjogIzE5YTE4NztcbiAgLS1ibHVlOiAjMzY3YmYwO1xuICAtLWRhcmstYmx1ZTogIzI2NWFiMTtcbiAgLS1tYXJvb246ICNiODE3NGM7XG4gIC0tcHVycGxlOiAjOGM0MmFiO1xufVxuXG4uc3RhdHVzLXRleHQge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1mYW1pbHk6IFwiZ2VvcmdpYVwiLCBnYXJhbW9uZCwgcGFsYXRpbm8sIGJvb2ttYW4sIFwiVGltZXMgTmV3IFJvbWFuXCIsIHRpbWVzO1xuICBmbG9hdDogbGVmdDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXNpemU6IDIycHg7XG4gIG1hcmdpbi1sZWZ0OiA0cHg7XG4gIG1hcmdpbi10b3A6IDJweDtcbiAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lO1xuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1vLXVzZXItc2VsZWN0OiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuLmFuYWx5c2lzLWltYWdlIHtcbiAgaGVpZ2h0OiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjhweDtcbiAgbWFyZ2luLXRvcDogNHB4O1xuICB3aWR0aDogMjBweDtcbiAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lO1xuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1vLXVzZXItc2VsZWN0OiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuLmFuYWx5c2lzLWJ1dHRvbiB7XG4gIG1hcmdpbi1sZWZ0OiA4cHg7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBsaW5lLWhlaWdodDogMjhweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogYmx1ZTtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICAtby11c2VyLXNlbGVjdDogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OlgaStatusComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'olga-status',
                templateUrl: './olga-status.component.html',
                styleUrls: ['./olga-status.component.scss']
            }]
    }], function () { return [{ type: _services_olga_service__WEBPACK_IMPORTED_MODULE_3__["OlgaService"] }]; }, null); })();


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
        this.olga = null;
        this.header = null;
        this.controlsComponent = null;
        this.appContainer = null;
        this.gameScore = null;
        this.board = null;
        this.resizeElement = null;
        this.preferredLayout = 'auto';
        this.preferredRatioLandscape = .75;
        this.preferredRatioPortrait = 0.52;
        this.preferredWidthPercentage = 1.0;
        this.preferredHeightPercentage = 1.0;
        this.layoutDirection = true;
        this.gameScoreElement = null;
        this.boardElement = null;
        this.controlsElement = null;
        this.statusElement = null;
        this.headerElement = null;
        this.resizeObserver = new ResizeObserver(debounce(this.resizeEvent.bind(this), 6));
        this.state = 3;
    }
    settings() {
        let settings = {};
        return settings;
    }
    resizeEvent(entries) {
        // @ts-ignore
        const boundingRect = entries[0].contentRect;
        if (!this.appContainer) {
            console.log('Invalid (Null) App Container %$@');
        }
        else {
            let height = boundingRect.height;
            if (boundingRect.width === height) {
                height - 2;
            }
            const landscape = (boundingRect.width > height);
            this.landscapeOrientation.next(landscape);
            switch (this.preferredLayout) {
                case 'auto': {
                    if (landscape) {
                        this.rtl(boundingRect.width, height);
                    }
                    else {
                        this.rtp(boundingRect.width, height);
                    }
                    break;
                }
                case 'landscape': {
                    this.rtl(boundingRect.width, height);
                    break;
                }
                case 'portrait': {
                    this.rtp(boundingRect.width, height);
                    break;
                }
            }
        }
    }
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
        (_b = this.controlsComponent) === null || _b === void 0 ? void 0 : _b.resize(c2width, 64);
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
        if (this.appContainer) {
            this.appContainer.nativeElement.style.overflowY = 'hidden';
        }
    }
    rtp(width, height) {
        var _a, _b, _c, _d, _e, _f, _g;
        if (this.boardElement && this.gameScoreElement && this.headerElement && this.statusElement && this.controlsElement) {
            let boardHeight = (height * this.preferredRatioPortrait);
            boardHeight = boardHeight > width ? width : boardHeight;
            boardHeight = boardHeight < 192 ? 192 : boardHeight;
            this.state = width <= 540 ? 1 : 2;
            let hheight = this.state == 1 ? 310 : 240;
            (_a = this.board) === null || _a === void 0 ? void 0 : _a.setSize(boardHeight);
            if (this.appContainer) {
                this.appContainer.nativeElement.style.height = 'auto';
                this.appContainer.nativeElement.style.width = '100%';
                this.appContainer.nativeElement.style.overflowX = 'hidden';
            }
            switch (this.state) {
                case 1: {
                    this.headerElement.style.maxHeight = hheight + 'px';
                    this.headerElement.style.height = hheight + 'px';
                    this.headerElement.style.width = width + 'px';
                    this.headerElement.style.right = '0px';
                    this.headerElement.style.left = '';
                    this.headerElement.style.overflowY = 'hidden';
                    this.headerElement.style.overflowX = 'hidden';
                    (_b = this.header) === null || _b === void 0 ? void 0 : _b.resize(width, hheight);
                    this.boardElement.style.top = (hheight + 2) + 'px';
                    const board_margin = Math.floor((width - boardHeight) / 2);
                    this.boardElement.style.left = board_margin + 'px';
                    this.boardElement.style.right = '';
                    this.boardElement.style.bottom = '';
                    this.gameScoreElement.style.right = '2px';
                    this.gameScoreElement.style.width = width - 24 + 'px';
                    this.gameScoreElement.style.height = '456px';
                    this.gameScoreElement.style.top = '340px';
                    this.gameScoreElement.style.left = '';
                    (_c = this.gameScore) === null || _c === void 0 ? void 0 : _c.resize(width, 456);
                    break;
                }
                case 2: {
                    this.headerElement.style.maxHeight = hheight + 'px';
                    this.headerElement.style.height = hheight + 'px';
                    this.headerElement.style.width = width + 'px';
                    this.headerElement.style.right = '0px';
                    this.headerElement.style.left = '';
                    (_d = this.header) === null || _d === void 0 ? void 0 : _d.resize(width, hheight);
                    this.boardElement.style.top = (hheight + 2) + 'px';
                    const board_margin = Math.floor((width - boardHeight) / 2);
                    this.boardElement.style.left = board_margin + 'px';
                    this.boardElement.style.right = '';
                    this.boardElement.style.bottom = '';
                    this.controlsElement.style.right = '0px;';
                    this.controlsElement.style.width = width + 'px';
                    this.controlsElement.style.top = '';
                    this.controlsElement.style.bottom = '0px'; // cant be bottom
                    this.controlsElement.style.left = '0px';
                    this.controlsElement.style.height = '99px';
                    (_e = this.controlsComponent) === null || _e === void 0 ? void 0 : _e.resize(width, 99);
                    break;
                }
            }
            this.statusElement.style.bottom = '';
            this.statusElement.style.top = (hheight + boardHeight + 4) + 'px';
            this.statusElement.style.height = '32px';
            this.statusElement.style.left = '2px';
            this.statusElement.style.right = '2px';
            this.statusElement.style.width = (width - 4) + 'px';
            this.controlsElement.style.right = '0px;';
            this.controlsElement.style.width = width + 'px';
            this.controlsElement.style.top = (hheight + boardHeight + 36) + 'px';
            this.controlsElement.style.bottom = ''; // cant be bottom
            this.controlsElement.style.left = '0px';
            this.controlsElement.style.height = '99px';
            (_f = this.controlsComponent) === null || _f === void 0 ? void 0 : _f.resize(width, 99);
            this.gameScoreElement.style.right = '2px';
            this.gameScoreElement.style.width = width + 'px';
            this.gameScoreElement.style.height = 'auto';
            this.gameScoreElement.style.top = (hheight + boardHeight + 142) + 'px';
            this.gameScoreElement.style.left = '';
            (_g = this.gameScore) === null || _g === void 0 ? void 0 : _g.resize(width, 456);
            if (this.appContainer) {
                this.appContainer.nativeElement.style.overflowY = 'scroll';
            }
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
    initializeLayout(olga) {
        var _a;
        this.olga = olga;
        this.board = olga.canvasBoardComponent;
        this.appContainer = olga.appContainer;
        (_a = this.resizeObserver) === null || _a === void 0 ? void 0 : _a.observe(this.appContainer.nativeElement);
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
        if (!this.appContainer) {
            console.log('Invalid (Null) App Container %$@');
        }
        else {
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
    }
    shrink() {
        if (this.appContainer) {
            if (this.landscapeOrientation.value) {
                if (this.preferredRatioLandscape >= .3) {
                    this.preferredRatioLandscape -= .1;
                    this.resizeLayout(this.appContainer.nativeElement.clientWidth, this.appContainer.nativeElement.clientHeight);
                }
            }
            else {
                if (this.preferredRatioPortrait >= .3) {
                    this.preferredRatioPortrait -= .1;
                    this.resizeLayout(this.appContainer.nativeElement.clientWidth, this.appContainer.nativeElement.clientHeight);
                }
            }
        }
    }
    grow() {
        if (this.appContainer) {
            if (this.landscapeOrientation.value) {
                if (this.preferredRatioLandscape <= .9) {
                    this.preferredRatioLandscape += .1;
                    this.resizeLayout(this.appContainer.nativeElement.clientWidth, this.appContainer.nativeElement.clientHeight);
                }
            }
            else {
                if (this.preferredRatioPortrait <= .9) {
                    this.preferredRatioPortrait += .1;
                    this.resizeLayout(this.appContainer.nativeElement.clientWidth, this.appContainer.nativeElement.clientHeight);
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
/*! exports provided: ScoreViewType, STOCK_IMAGE, OlgaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScoreViewType", function() { return ScoreViewType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STOCK_IMAGE", function() { return STOCK_IMAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OlgaService", function() { return OlgaService; });
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
class OlgaService {
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
    getPlyCount() {
        if (this._score) {
            return this._score.plyCount();
        }
        return 0;
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
            window.setTimeout(() => {
                var _a;
                // this._score?.setGameScoreItems(this._game?.generateGameScore());
                // this._board?.setBoardToPosition(this._game?.getPosition());
                // this._score?.updateSelection();
                const headerData = (_a = this._game) === null || _a === void 0 ? void 0 : _a.generateHeaderData();
                if (headerData) {
                    if (this._header) {
                        this._header.setHeader(headerData);
                    }
                }
                this.selectGame(0);
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
            window.setTimeout(() => {
                var _a, _b, _c, _d, _e, _f, _g;
                (_a = this._score) === null || _a === void 0 ? void 0 : _a.clearGameScore();
                (_b = this._score) === null || _b === void 0 ? void 0 : _b.setGameScoreItems((_c = this._game) === null || _c === void 0 ? void 0 : _c.generateGameScore());
                (_d = this._board) === null || _d === void 0 ? void 0 : _d.setBoardToPosition((_e = this._game) === null || _e === void 0 ? void 0 : _e.getPosition());
                (_f = this._score) === null || _f === void 0 ? void 0 : _f.updateSelection();
                const headerData = (_g = this._game) === null || _g === void 0 ? void 0 : _g.generateHeaderData();
                if (headerData) {
                    if (this._header) {
                        this._header.setHeader(headerData);
                        this._header.currentGame = index;
                        this._header.gameCount = this._games.length;
                    }
                }
            }, 1);
        }
    }
    attachOlga(olga) {
        this._app = olga;
        this._board = olga.canvasBoardComponent;
        this._header = olga.headerComponent;
        this._controls = olga.controlsComponent;
        this._status = olga.statusComponent;
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
        }] }); })();


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

/***/ "./src/app/test.ts":
/*!*************************!*\
  !*** ./src/app/test.ts ***!
  \*************************/
/*! exports provided: TestPGNData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestPGNData", function() { return TestPGNData; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");

const TestPGNData = '[Set "Testing Olga 2"]' +
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
    imagesPath: 'assets/images/',
    playersPath: 'assets/images/players/',
    piecesPath: 'assets/images/pieces/',
    iconsPath: 'assets/images/icons/',
    flagsPath: 'assets/images/flags/'
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