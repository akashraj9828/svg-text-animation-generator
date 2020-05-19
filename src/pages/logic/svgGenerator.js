import makerjs from "makerjs"
import opentype from "opentype.js"
import { setAnimation } from "./setAnimation"
import store from "./../../redux/store"
import { setOutput, SET_SVG } from "./../../redux/actions"
import {genKeyFrames} from "./index"

function App() {
    var _this = this;
    this.renderCurrent = function () {
        var size = _this.sizeInput.valueAsNumber;
        if (!size)
            size = parseFloat(_this.sizeInput.value);
        if (!size)
            size = 100;
        _this.render(_this.selectFamily.selectedIndex, _this.selectVariant.selectedIndex, _this.textInput.value, size, _this.unionCheckbox.checked, _this.separateCheckbox.checked, parseFloat(_this.bezierAccuracy.value) || undefined);
    };
    this.loadVariants = function () {
        _this.selectVariant.options.length = 0;
        var f = _this.fontList.items[_this.selectFamily.selectedIndex];
        f.variants.forEach(function (v) { return _this.addOption(_this.selectVariant, v); });
        _this.renderCurrent();
    };

}

App.prototype.init = function () {
    this.bind()
    this.loadFonts()
}
App.prototype.loadFonts = function () {
    this.getGoogleFonts('AIzaSyDedkw4Dr7wPMbTcUfTpXBLgyoncPygzDU');
}

App.prototype.bind = function () {
    this.selectFamily = this.$('#font-select');
    this.selectVariant = this.$('#font-variant');
    this.unionCheckbox = this.$('#input-union');
    this.separateCheckbox = this.$('#input-separate');
    this.textInput = this.$('#input-text');
    this.bezierAccuracy = this.$('#input-bezier-accuracy');
    this.sizeInput = this.$('#input-size');
    this.inputDelay = this.$('#input-delay');
    this.inputDuration = this.$('#input-duration');
    this.inputWidth = this.$('#input-width');
    this.renderDiv = this.$('#svg-holder');
    this.outputTextarea = this.$('#output-svg');
};
App.prototype.handleEvents = function () {
    this.selectFamily.onchange = this.loadVariants;
    this.selectVariant.onchange = this.renderCurrent;
    this.textInput.onchange = this.renderCurrent;
    this.textInput.onkeyup = this.renderCurrent;
    this.sizeInput.onchange = this.renderCurrent;
    this.unionCheckbox.onchange = this.renderCurrent;
    this.separateCheckbox.onchange = this.renderCurrent;
    this.bezierAccuracy.onchange = this.renderCurrent;
    this.inputDelay.onchange = this.renderCurrent;
    this.inputDuration.onchange = this.renderCurrent;
    this.inputWidth.onchange = this.renderCurrent;
};
App.prototype.$ = function (selector) {
    return document.querySelector(selector);
};
App.prototype.addOption = function (select, optionText) {
    var option = document.createElement('option');
    option.text = optionText;
    option.value = optionText;
    select.options.add(option);
};
App.prototype.getGoogleFonts = function (apiKey) {
    var _this = this;
    fetch(`https://www.googleapis.com/webfonts/v1/webfonts?key=${apiKey}`)
        .then(res => res.json())
        .then(fontList => {
            _this.fontList = fontList;
            _this.fontList.items.forEach(function (font) { return _this.addOption(_this.selectFamily, font.family); });
            _this.loadVariants();
            _this.handleEvents();
        })
};

App.prototype.render = function (fontIndex, variantIndex, text, size, union, separate, bezierAccuracy) {
    var _this = this;
    var f = this.fontList.items[fontIndex];
    var v = f.variants[variantIndex];
    var url = f.files[v].substring(5); //remove http:
    opentype.load(url, function (err, font) {
        //generate the text using a font
        var textModel = new makerjs.models.Text(font, text, size, union, false, bezierAccuracy);
        if (separate) {
            for (var i in textModel.models) {
                textModel.models[i].layer = i;
            }
        }
        var svg = makerjs.exporter.toSVG(textModel);
        store.dispatch(setOutput(SET_SVG, svg))
        setAnimation(_this.inputDelay.valueAsNumber, _this.inputDuration.valueAsNumber, _this.inputWidth.valueAsNumber);
        genKeyFrames()

    });
};


window.App = App


export const svgGenerator = new App();

