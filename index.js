import CPCore from "./components/CPCore";
import "./style";
import './components/ColorPickerButton';
import Color from "absol/src/Color/Color";



var ColorPicker = {
    core: CPCore,
    _: CPCore._,
    $: CPCore.$,
    creator: CPCore.creator,
    Color:Color
};

export default ColorPicker;