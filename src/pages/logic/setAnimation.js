export function setAnimation (del = 0.1, dur =0, width = 2) {
    // select a query selector such that it selects all your svg paths
    let paths = document.querySelectorAll("path");
    let i = 0;
    // animation delay for next path.
    let delay = del === '' ? 0.2 : parseFloat(del);
    let duration = dur === 0 ? paths.length * delay + 1 : parseFloat(dur);
    let strokeWidth = width ? parseFloat(width) : 2;
    // set animation for everypath
    for (let path of paths) {
        let length = path.getTotalLength();
        path.style["stroke-dashoffset"] = `${length}px`;
        path.style["stroke-dasharray"] = `${length}px`;
        path.style["stroke-width"] = `${strokeWidth}px`;
        path.style["animation"] = `${duration}s svg-text-anim infinite linear`;
        path.style["animation-delay"] = `${i * delay}s`;
        i++;
    }
}
