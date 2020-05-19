import store from "./../../redux/store"


export function setAnimation(get_signature = false) {
    let { settings } = store.getState()
    let { delay, duration, strokeWidth, timingFunction } = settings
    let paths = document.querySelectorAll("path");
    delay = delay ?? 0;
    duration = duration ?? paths.length * delay + 2
    strokeWidth = strokeWidth ?? 2
    timingFunction = timingFunction ?? "linear"
    if (!get_signature) {
        setTextAnimation(delay, duration, strokeWidth, timingFunction);
    } else {
        return `setTextAnimation(${delay},${duration},${strokeWidth},'${timingFunction}');`
    }

}


export function setTextAnimation(delay, duration, strokeWidth, timingFunction) {
    let paths = document.querySelectorAll("path");
    for (let i = 0; i < paths.length; i++) {
        const path = paths[i]
        const length = path.getTotalLength();
        path.style["stroke-dashoffset"] = `${length}px`;
        path.style["stroke-dasharray"] = `${length}px`;
        path.style["stroke-width"] = `${strokeWidth}px`;
        path.style["animation"] = `${duration}s svg-text-anim infinite ${timingFunction}`;
        path.style["animation-delay"] = `${i * delay}s`;
    }

}