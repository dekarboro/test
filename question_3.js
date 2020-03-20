const convert = (color) => { // #ff0055

    if (color.startsWith('#')) {
        let r = parseInt(color.slice(1, 3), 16),
            g = parseInt(color.slice(3, 5), 16),
            b = parseInt(color.slice(5, 7), 16);
        return `rgb(${r},${g},${b})`;
    }
    else { /// rgb(255,22,1);
        let r = Number(color.match(/[0-9]+/, "-")).toString(16);
        color = color.replace(/[0-9]+/, "-");
        let g = Number(color.match(/[0-9]+/, "-")).toString(16);
        color = color.replace(/[0-9]+/, "-");
        let b = Number(color.match(/[0-9]+/, "-")).toString(16);
        color = color.replace(/[0-9]+/, "-");
        return `#${r}${g}${b}`;
    }
}
