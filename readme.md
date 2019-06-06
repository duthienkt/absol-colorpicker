# ColorPicker

```js
    //ColorPicker is absol.Dom object
    ColorPicker._({
            tag: 'colorpicker',// tagName of default color picker
            props: {
                value: 'black',// support rgb, rgba, hsl,hsla, hsb, hsba, hex8, hex6, hex4, hex3
                mode:'RGBA'// HSB|HSL|RGB|RGBA|HSBA|HSLA
            }
        }).on('change', function (event, sender) {
            mEditableText.addStyle('background-color', this.value.getContrastYIQ().toString())
            mEditableText.addStyle('color', this.value.toString());
        }).addTo(document.body);

```

[![Live-Demo](./doc/assets/v0.0.1.png)](https://volcanion.cf/colorpicker)