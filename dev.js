import 'absol/src/absol';
import 'absol-acomp/dev';
import '.';
import ColorPicker from './components/ColorPicker';
import ColorPickerButton from './components/ColorPickerButton';

window.absol.coreDom.install({
    colorpicker:ColorPicker,
    colorpickerbutton:ColorPickerButton
});