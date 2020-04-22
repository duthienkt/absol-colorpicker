import 'absol/src/absol';
import 'absol-acomp/dev';
import '.';
import ColorPicker from './components/ColorPicker';
import ColorPickerButton from './components/ColorPickerButton';
import SwatchesTable from './components/SwatchesTable';
import SpectrumColor from './components/SpectrumColor';
import SolidColorPicker from './components/SolidColorPicker';

window.absol.coreDom.install({
    colorpicker:ColorPicker,
    colorpickerbutton:ColorPickerButton,
    solidcolorpicker: SolidColorPicker
});