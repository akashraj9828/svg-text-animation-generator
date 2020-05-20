import store from "./../../redux/store"
import { setOutput, SET_CSS } from "./../../redux/actions"


export const genKeyFrames = () => {
  const old_style = document.getElementById('animation-keyframes')
  let fillColor=store.getState().settings.fillColor
  if (old_style) {
    old_style.remove()
  }
  var style = document.createElement('style');
  style.type = 'text/css';
  style.id = 'animation-keyframes';

  let animation = `   40% {
          stroke-dashoffset: 0;
          fill: transparent;
        }
        60% {
          stroke-dashoffset: 0;
          fill: ${fillColor};
        }
        100% {
          stroke-dashoffset: 0;
          fill: ${fillColor};
        }
        `
  var keyFrames = `     /* Google chrome */
      @-webkit-keyframes svg-text-anim {
    ${animation}
    }
    /* Most browsers */
    @keyframes svg-text-anim {
    ${animation}
    }`;
  style.innerHTML = keyFrames;
  document.getElementsByTagName('head')[0].appendChild(style);
  store.dispatch(setOutput(SET_CSS, keyFrames))

}
