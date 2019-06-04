import ColorPicker from '.';
window.absol = window.absol || {};
var absol = window.absol;

if (!absol._){
    absol._ = ColorPicker._;
}

if (!absol.$){
    absol.$ = ColorPicker.$;
}

if (absol.ShareCreator){
    Object.assign(absol.ShareCreator, ColorPicker.creator);
}


if (!absol.Color){
    absol.Color = ColorPicker.Color;
}

