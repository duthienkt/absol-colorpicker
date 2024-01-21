import 'absol/src/absol';
import 'absol-acomp/dev';
import '.';
import Dom from "absol/src/HTML5/Dom";
import SolidColorPicker from "absol-acomp/js/colorpicker/SolidColorPicker";
import ColorPickerButton from "absol-acomp/js/colorpicker/ColorPickerButton";
Dom.ShareInstance.install(SolidColorPicker);
Dom.ShareInstance.install(ColorPickerButton);