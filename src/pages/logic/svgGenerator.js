import makerjs from "makerjs"
import opentype from "opentype.js"
import { setAnimation } from "./setAnimation"
import store from "./../../redux/store"
import { setOutput, SET_SVG, setMeta, SET_INITIALIZED } from "./../../redux/actions"
import { genKeyFrames } from "./index"

function App() {
    let state = store.getState();
    let { settings, output, meta } = state;
    this.initialized = false;
    this.init = function () {
        this.bind()
        this.loadFonts()
        store.dispatch(setMeta(SET_INITIALIZED, true))
    }
    this.bind = function () {
        this.selectFamily = this.$('#font-select');
        this.selectVariant = this.$('#font-variant');
    };

    this.loadFonts = function () {
        this.getGoogleFonts('AIzaSyDedkw4Dr7wPMbTcUfTpXBLgyoncPygzDU');
    }
    this.renderCurrent = function () {
        var size = settings.size;
        if (!size)
            size = parseFloat(settings.size);
        if (!size)
            size = 100;
        let fontIndex = this.selectFamily.selectedIndex, variantIndex = this.selectVariant.selectedIndex, text = settings.text, union = false, separate = true, bezierAccuracy = '';
        var f = this.fontList.items[fontIndex];
        var v = f.variants[variantIndex];
        var url = f.files[v].substring(5); //remove http:
        opentype.load(url, (err, font) => {
            //generate the text using a font
            var textModel = new makerjs.models.Text(font, text, size, union, false, bezierAccuracy);
            if (separate) {
                for (var i in textModel.models) {
                    textModel.models[i].layer = i;
                }
            }
            var svg = makerjs.exporter.toSVG(textModel);
            store.dispatch(setOutput(SET_SVG, svg))
            setAnimation(settings.delay, settings.duration, settings.strokeWidth);
            genKeyFrames()
        });
    };

    // loads variants after font-change
    this.loadVariants = function () {
        // debugger
        this.selectVariant.options.length = 0;
        var f = this.fontList.items[this.selectFamily.selectedIndex];
        f.variants.forEach((v) => { return this.addOption(this.selectVariant, v); });
        this.renderCurrent();
    };
    this.$ = function (selector) {
        return document.querySelector(selector);
    };
    this.getGoogleFonts = function (apiKey) {
        fetch(`https://www.googleapis.com/webfonts/v1/webfonts?key=${apiKey}`)
            .then(res => res.json())
            .then(fontList => {
                this.fontList = fontList;
                this.fontList.items.forEach(
                    (font) => {
                        return this.addOption(this.selectFamily, font.family);
                    }
                );
                this.loadVariants();
            })
    };
    this.addOption = function (select, optionText) {
        var option = document.createElement('option');
        option.text = optionText;
        option.value = optionText;
        select.options.add(option);
    };

}

window.App = App


export const svgGenerator = new App();
