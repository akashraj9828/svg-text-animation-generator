var makerjs = require('makerjs');

function setAnimation(del = 0.1, dur = 'auto', width = 2) {
    let paths = document.querySelectorAll("path");
    let i = 0;
    let delay = del === '' ? 0.2 : parseFloat(del);
    let duration = dur == 'auto' || dur == '' ? paths.length * delay + 1 : parseFloat(dur);
    let strokeWidth = width ? parseFloat(width) : 2;
    for (path of paths) {
        let length = path.getTotalLength();
        path.style["stroke-dashoffset"] = `${length}px`;
        path.style["stroke-dasharray"] = `${length}px`;
        path.style["stroke-width"] = `${strokeWidth}px`;
        path.style["animation"] = `${duration}s reveal infinite linear`;
        path.style["animation-delay"] = `${i * delay}s`;
        i++;
    }
    setOutput(delay,duration,strokeWidth)
}

function setOutput(del,dur,width) {
    document.getElementById("output-js").innerHTML = setAnimation.toString() + `\n window.onload=_=>setAnimation(${del},${dur},${width});`
    document.getElementById("output-css").innerHTML = `#svg-container svg g path {
    animation: reveal infinite 3s;
}

@keyframes reveal {
    50% {
        stroke-dashoffset: 0;
        fill: transparent;
    }

    100% {
        stroke-dashoffset: 0;
        fill: yellow;
    }
}


`

}

var App = /** @class */ (function () {
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
            var v = f.variants.forEach(function (v) { return _this.addOption(_this.selectVariant, v); });
            _this.renderCurrent();
        };
    }
    App.prototype.init = function () {
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
        this.renderDiv = this.$('#svg-container');
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
        select.options.add(option);
    };
    App.prototype.getGoogleFonts = function (apiKey) {
        var _this = this;
        var xhr = new XMLHttpRequest();
        xhr.open('get', 'https://www.googleapis.com/webfonts/v1/webfonts?key=' + apiKey, true);
        xhr.onloadend = function () {
            _this.fontList = JSON.parse(xhr.responseText);
            _this.fontList.items.forEach(function (font) { return _this.addOption(_this.selectFamily, font.family); });
            _this.loadVariants();
            _this.handleEvents();
        };
        xhr.send();
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
            _this.renderDiv.innerHTML = svg;
            _this.outputTextarea.value = svg;
            setAnimation(_this.inputDelay.value, _this.inputDuration.value,_this.inputWidth.value);

        });
    };
    return App;
}());
var app = new App();

window.onload = function () {
    app.init();
    app.getGoogleFonts('AIzaSyAOES8EmKhuJEnsn9kS1XKBpxxp-TgN8Jc');
    setAnimation()
    
};
app.init();
app.getGoogleFonts('AIzaSyAOES8EmKhuJEnsn9kS1XKBpxxp-TgN8Jc');
setAnimation()
