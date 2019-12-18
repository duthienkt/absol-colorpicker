import ColorIconInput from '.';

window.absol = window.absol || {};
var absol = window.absol;

if (!absol._){
    absol._ = ColorIconInput._;
}

if (!absol.$){
    absol.$ = ColorIconInput.$;
}

if (absol.ShareCreator){
    Object.assign(absol.ShareCreator, ColorIconInput.creator);
}


if (!absol.Color){
    absol.Color = ColorIconInput.Color;
}

