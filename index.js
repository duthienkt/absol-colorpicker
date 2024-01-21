import CPCore from "./components/CPCore";
import Color from "absol/src/Color/Color";
import "absol-acomp/js/colorpicker/SolidColorPicker";
import  "absol-acomp/js/colorpicker/ColorPickerButton";

var ColorPicker = {
    core: CPCore,
    _: CPCore._,
    $: CPCore.$,
    creator: CPCore.creator,
    Color: Color
};

console.log(CPCore.creator);

export default ColorPicker;