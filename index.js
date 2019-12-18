import CPCore from "./components/CPCore";
import ColorPickerStyle from "./style";
import './components/ColorIconInput';
import Color from "absol/src/Color/Color";



var ColorIconInput = {
    core: CPCore,
    _: CPCore._,
    $: CPCore.$,
    creator: CPCore.creator,
    $style: CPCore._({
        tag:'style',
        props:{
            innerHTML: ColorPickerStyle
        }
    }).addTo(document.head),
    Color:Color
};

export default ColorIconInput;