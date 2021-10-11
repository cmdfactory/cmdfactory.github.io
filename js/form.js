import { allSelectors, allSelectorArgs, allEnchantments, unsetOption, allSoundsFancy, allParticles } from '../data/data.min.js';

class GeneralFormRow {
    constructor({ id, defaultVal, ignoreOutput, randomId = false, type }) {
        $.extend(this, $('<div class="form-row"></div>'));
        this.default = defaultVal;
        this.id = id ?? (randomId && 'a'+(Math.random() + 1).toString(36).substring(2)); //putting letter in front so it doesn't ever start with a number
        this.ignoreOutput = ignoreOutput;
        type && this.attr('row-type', type);
    };
    
    addToDOM(destination, addMode) {
        if (!destination) throw 'Cannot add field to element: no destination specified!';
        destination = $(destination);
        switch (addMode?.toLowerCase?.()) {
            case 'prepend':
                this.prependTo(destination);
                break;
            case 'insertAfter':
                this.insertAfter(destination);
                break;
            case 'insertBefore':
                this.insertBefore(destination);
                break;
            default:
                this.appendTo(destination);
                break;
        }
        return this;
    }
    disable(whyDisabledMessage, whyDisabledText, addTo, addMode) {
        this.find('.why-disabled-container').remove();
        if (whyDisabledMessage) {
            let whyDisabledEl = $(`
                <div class="why-disabled-container">
                    <span>${whyDisabledText ?? 'Why is this disabled?'}</span>
                    <div class="why-disabled-message">
                        ${whyDisabledMessage}
                    </div>
                </div>
            `);
            if (!addTo) {
                addTo = this.whyDisabledLocation ?? this.children('.input-container');
            }
            switch (addMode) {
                case 'prepend':
                    addTo.prepend(whyDisabledEl);
                    break;
                case 'insertAfter':
                    whyDisabledEl.insertAfter(addTo);
                    break;
                case 'insertBefore':
                    whyDisabledEl.insertBefore(addTo);
                    break;
                default:
                    addTo.append(whyDisabledEl);
                    break;
            }
        };
        this.find('*:not([tabindex="-1"])').attr('tabindex', -2);
        this.find('.error').removeClass('error');
        this.addClass('row-disabled');
        return this;
    }
    enable() {
        this.find('[tabindex="-2"]').attr('tabindex', null);
        this.removeClass('row-disabled');
        this.find('.why-disabled-container').remove();
        if (this.find('.label-container label').html() == "Advancements") {
            throw new Error('test');
        }
        return this;
    }
    lock(whyLockedMessage, whyLockedText, addTo, addMode) {
        this.disable(whyLockedMessage, whyLockedText ?? 'Why is this locked?', addTo, addMode);
        this.addClass('row-locked');
        return this;
    }
    unlock() {
        this.enable();
        this.removeClass('row-locked');
    }
    setComingSoon(message, addTo, addMode) {
        this.disable(message || 'How soon? Nobody knows for now...', '<span style="color: var(--red);">Coming Soon...</span>', addTo, addMode);
        this.addClass('coming-soon');
        return this;
    }
    isDisabled() {
        return this.hasClass('row-disabled') || this.hasClass('section-disabled');
    }
    isLocked() {
        return this.hasClass('row-locked') || this.hasClass('section-locked');
    }
    isComingSoon() {
        return this.hasClass('coming-soon');
    }
    isFilled() {
        return Boolean(this.value);
    }
    isHidden() {
        return Boolean(this.hasClass('hidden') || this.hasClass('soft-hidden'));
    }
}
class VisualFormRow {
    constructor() {};

    addToDOM(destination, addMode) {
        if (!destination) throw 'Cannot add field to a form: no form element passed!';
        destination = $(destination);
        switch (addMode?.toLowerCase?.()) {
            case 'prepend':
                this.prependTo(destination);
                break;
            case 'insertAfter':
                this.insertAfter(destination);
                break;
            case 'insertBefore':
                this.insertBefore(destination);
                break;
            default:
                this.appendTo(destination);
                break;
        }
        return this;
    }
}
class Section {
    constructor({ collapsible = true, collapsed = false, optional = false, header }) {
        if (collapsible && !header) throw new Error('A header is required to make the section collapsible. Expected header object, got undefined.')
        $.extend(this, $(`<section></section>`));
        if (header) {
            header = new FormRow.visual.Header({
                ...header,
                textAfter: optional ? {
                    text: '(optional)',
                    css: {
                        fontSize: '80%',
                        opacity: 0.5,
                        display: 'flex',
                        alignItems: 'flex-end',
                    }
                } : null,
            });
        }
        this.header = header;
        let section = this;
        
        $(header.children()[0]).prepend($('<i class="collapsible-sign fas fa-angle-down"></i>'));
        if (collapsible) {
            header.addClass('collapsible-header');
            header.attr('tabindex', 0);
            section.addClass('collapsible');
            header.on('click', function() {
                header.toggleClass('active');
                
                if (header.hasClass('active')) {
                    section.removeClass('hidden');
                    setTimeout(() => {
                        section.toggleClass('active');
                    }, 50);
                }
                else {
                    section.removeClass('active');
                    setTimeout(() => {
                        section.addClass('hidden');
                    }, 500);
                }
            });
            if (!collapsed) {
                header.addClass('active');
                section.addClass('active');
            }
            else {
                section.addClass('hidden');
            }
        }
        
    }
    
    addToDOM(destination, addMode) {
        if (!destination) throw 'Cannot add field to a form: no form element passed!';
        destination = $(destination);
        switch (addMode?.toLowerCase?.()) {
            case 'prepend':
                this.prependTo(destination);
                this.header.prependTo(destination);
                break;
            case 'insertAfter':
                this.header.insertAfter(destination);
                this.insertAfter(destination);
                break;
            case 'insertBefore':
                this.insertBefore(destination);
                this.header.insertBefore(destination);
                break;
            default:
                this.header.appendTo(destination);
                this.appendTo(destination);
                break;
        }
        return this;
    }
    disable(whyDisabledMessage, whyDisabledText) {
        this.header.find('.why-disabled-container').remove();
        if (whyDisabledMessage) {
            let whyDisabledEl = $(`
                <div class="why-disabled-container">
                    <span>${whyDisabledText ?? 'Why is this disabled?'}</span>
                    <div class="why-disabled-message">
                        ${whyDisabledMessage}
                    </div>
                </div>
            `);
            this.header.append(whyDisabledEl);
        };
        this.find('*:not([tabindex="-1"])').attr('tabindex', -2);
        this.find('.error').removeClass('error');
        this.addClass('section-disabled');
        return this;
    }
    enable() {
        this.find('[tabindex="-2"]').attr('tabindex', null);
        this.removeClass('section-disabled');
        this.header.find('.why-disabled-container').remove();
        return this;
    }
    isDisabled() {
        return this.hasClass('row-disabled') || this.hasClass('section-disabled');
    }
}
class BoxContainer extends VisualFormRow {
    constructor ({ hideable = true, id, additionalChildren, hidden = false, classes = '' }) {
        super();
        $.extend(this, $(`
            <div class="input-container-master">
                <input class="invisible" type="text"${id ? ' id="'+id+'" ' : ''} tabindex="-1">
                <div class="input-container box-container ${classes}">
                
                </div>
            </div>
        `));
        //! add easy access variables
        this.dummyInput = this.children('input.invisible');
        this.inputContainer = this.children('.input-container');
        //! process hideability
        if (hideable) {
            let showHideButton = $(`
                <button class="show-hide-button">
                    <i class="fas fa-angle-down"></i>
                </button>
            `);
            showHideButton.toggleClass('active', !hidden);
            this.prepend(showHideButton);
            let globalThis = this;
            showHideButton.click(function() {
                globalThis.inputContainer.toggleClass('hidden');
                $(this).toggleClass('active')
                $(this).blur();
                if (!globalThis.inputContainer.hasClass('hidden')) {
                    $(globalThis.inputContainer.find('input:not(.invisible), select')[0]).focus();
                }
            });
            if (hidden) {
                this.inputContainer.addClass('hidden');
            }
        }
        //! add additional children
        this.additionalChildren = additionalChildren ? [] : null;
        additionalChildren?.forEach(child => {
            let thisChild = $(child)
            this.append(thisChild);
            this.additionalChildren.push(thisChild);
        });
    }
}
let FormRow = {
    //! --------------------------- DUMMY FIELD
    Dummy: class extends GeneralFormRow {
        constructor({ id, ignoreId, defaultVal }) {
            if (!id && !ignoreId) throw new Error('Expected field ID, got undefined');
            super({ id, defaultVal, type: 'dummy' });
            $.extend(this, $(`<input class="invisible" ${id ? 'id="'+id+'"' : ''}>`));
        }
        get value() {
            return this.val();
        }
        set value(value) {
            this.val(value ?? null);
            this.trigger('input');
        }
    },
    //! --------------------------- TEXT
    Text: class extends GeneralFormRow {
        constructor({ id, ignoreId, size = 'M', label, inputOnly, negationButton, inputRegex, maxLength, required, tip, inputClass, inputCss, ignoreOutput, defaultVal }) {
            if (!size) throw new Error('Expected field size, got undefined');
            if (!id && !ignoreId) throw new Error('Expected field ID, got undefined');
            if (!label && !inputOnly) throw new Error('Expected field label, got undefined');
            super({ id, defaultVal, ignoreOutput, type: 'text' });
            //add label
            if (!inputOnly) {
                this.append($(
                    `
                    <div class="label-container">
                        <label for="${this.id ?? ''}">${label}</label>
                    </div>
                    `
                ));
            }
            //add input container (already contains the input clear button)
            if (inputOnly) {
                this.removeClass('form-row').addClass('input-container unselectable');
            }
            else {
                this.append($(
                    `
                    <div class="input-container unselectable">
                        <div class="clear-button-container">
                            <button class="clear-button" tabindex="-1">x</button>
                        </div>
                    </div>
                    `
                ));
            }
            //construct and add the input
            let inputContainer = this.find('.input-container');
            this.whyDisabledLocation = inputContainer;
            let inputElement = $(`<input class="textfield size${size.toUpperCase()} ${inputClass ? inputClass : ''}" type="text" name="text-field"${this.id ? ' id="'+this.id+'" ' : ''} autocomplete="off">`);
            this.inputElement = inputElement;
            if (inputCss) {
                inputElement.css(inputCss);
            }
            //add functionality to the clear button
            let clearButton = this.find('.clear-button');
            clearButton.click(function() {
                let fields = $(this).parent().parent().children('input, select')
                fields.val(null);
                fields[0].focus();
                fields.trigger('input');
            });
            clearButton.hover(function() {
                inputElement.addClass('fake-hover');
            }, function () {
                inputElement.removeClass('fake-hover');
            });
            clearButton.attr({title:"Clear the field"});
            //process regex patterns for the input
            if (negationButton) {
                inputRegex = [
                    ...(inputRegex ?? []),
                    [ /(.+)!/, '$1' ],
                ]
            }
            //accepts an array of [pattern, replace] arrays
            if (inputRegex) {
                inputElement.on('input', function(e) {
                    let val = $(this).val();
                    let caretPosition = e.target.selectionStart; 
                    inputRegex.forEach(patternArr => {
                        if (!Array.isArray(patternArr)) patternArr = [patternArr, ''];
                        let safetySwitch = 0;
                        while (val.match(patternArr[0])) {
                            if (safetySwitch > 99) throw 'Executing of regex patterns on input took too long, action aborted';
                            let lengthBefore = val.length;
                            val = val.replace(patternArr[0], patternArr[1]);
                            $(this).val(val);
                            caretPosition -= lengthBefore - val.length;
                            safetySwitch++;
                        }
                    });
                    $(this).val(val);
                    this.setSelectionRange(caretPosition, caretPosition);
                })
            };
            if (maxLength) {
                inputElement.attr('maxlength', maxLength);
            }
            //add "required" functionality
            if (required) {
                this.find('.label-container')?.append($('<span class="required-asterisk" title="This field is required!">*</span>'));
                inputElement.on('input', function() {
                    inputElement.removeClass('error');
                    inputElement.attr({title: ""});
                    if (!this.value || !($(this).parent().children('.invisible') && !$(this).parent().children('.invisible').val())) {
                        inputElement.addClass('error');
                        inputElement.attr({title: "This field is required!"});
                    }
                });
                inputElement.on('blur', function() {
                    if (!this.value || !($(this).parent().children('.invisible') && !$(this).parent().children('.invisible').val())) {
                        inputElement.addClass('error');
                        inputElement.attr({title: "This field is required!"});
                    }
                })
            }
            //construct and add the "not" button
            if (negationButton) {
                let negationButton = $('<button class="negation-button">!</button>');
                negationButton.click(function() {
                    if (inputElement.val().match(/!/)) {
                        inputElement.val(inputElement.val().replace(/!/, ''));
                        negationButton.removeClass('active');
                    }
                    else {
                        inputElement.val('!'+inputElement.val());
                        negationButton.addClass('active');
                    }
                    inputElement.trigger('input');
                    inputElement.focus()
                })
                inputElement.on('input', function() {
                    if (inputElement.val().match(/!/)) {
                        negationButton.addClass('active');
                    }
                    else {
                        negationButton.removeClass('active');
                    }
                })
                if (inputOnly) {
                    this.prepend(negationButton)
                }
                else {
                    inputContainer.prepend(negationButton);
                }
                inputElement.insertAfter(negationButton);
            }
            else {
                inputContainer.prepend(inputElement);
            }
            //construct and add the show-info button+popup
            if (tip) {
                if (inputOnly) {
                    this.append($('<hr>'));
                    this.append(generateTipElement(tip));
                }
                else {
                    inputContainer.append($('<hr>'));
                    inputContainer.append(generateTipElement(tip));
                }
            }
        }
        get value() {
            return this.find('input').val();
        }
        set value(value) {
            this.find('input').val(value ?? null);
            this.find('input').trigger('input');
        }
        addInputListeners(type, callback) {
            this.inputElement.on(type, callback);
        }
    },
    //! --------------------------- NUMBER
    Number: class extends GeneralFormRow {
        constructor({ id, ignoreId, min, max, size = 'M', label, inputOnly, inputRegex, required, tip, inputClass, inputCss, ignoreOutput, defaultVal, format }) {
            if (!id && !ignoreId) throw new Error('Expected field ID, got undefined');
            if (!label && !inputOnly) throw new Error('Expected field label, got undefined');
            super({ id, defaultVal, ignoreOutput, type: 'number' });
            //! add label
            if (!inputOnly) {
                this.append($(
                    `
                    <div class="label-container">
                        <label for="${this.id ?? ''}">${label}</label>
                    </div>
                    `
                ));
            }
            //! add input container (already contains the input clear button)
            if (inputOnly) {
                this.removeClass('form-row').addClass('input-container unselectable');
            }
            else {
                this.append($(
                    `
                    <div class="input-container unselectable">
                        <div class="clear-button-container">
                            <button class="clear-button" tabindex="-1">x</button>
                        </div>
                    </div>
                    `
                ));
            }
            //! construct and add the input
            let inputContainer = this.find('.input-container');
            this.whyDisabledLocation = inputContainer;
            let inputElement = $(`<input class="textfield size${size.toUpperCase()} ${inputClass ? inputClass : ''}" type="text" name="text-field"${this.id ? ' id="'+this.id+'"' : ''} autocomplete="off">`);
            this.inputElement = inputElement;
            if (inputCss) {
                inputElement.css(inputCss);
            }
            //! add functionality to the clear button
            let clearButton = this.find('.clear-button');
            clearButton.click(function() {
                let fields = $(this).parent().parent().children('input, select')
                fields.val(null);
                fields[0].focus();
                fields.trigger('input');
            });
            clearButton.hover(function() {
                inputElement.addClass('fake-hover');
            }, function () {
                inputElement.removeClass('fake-hover');
            });
            clearButton.attr({title:"Clear the field"});
            //! process regex patterns for the input
            if (format == "int") {
                inputRegex = [
                    /[^0-9\-]/,
                    [ /(.+)-/, '$1' ],
                    [ /^(-?)0{2,}/, '$10' ],
                    ...(inputRegex ?? []),
                ];
            }
            else {
                inputRegex = [
                    /[^0-9,\.\-]/,
                    [ /,/, '.' ],
                    [ /(.+)-/, '$1' ],
                    [ /\.(.*)\./, '.$1' , -1],
                    [ /^(-?)\./, '$10.' ],
                    [ /^(-?)0{2,}/, '$10' ],
                    ...(inputRegex ?? []),
                ];
            }
            if (min >= 0) inputRegex.push(/-/);
            //! accepts an array of [pattern, replace] arrays
            inputElement.on('input', function(e) {
                let val = $(this).val();
                let caretPosition = e.target.selectionStart; 
                inputRegex.forEach(patternArr => {
                    if (!Array.isArray(patternArr)) patternArr = [patternArr, ''];
                    let safetySwitch = 0;
                    while (val.match(patternArr[0])) {
                        if (safetySwitch > 99) throw 'Executing of regex patterns on input took too long, action aborted';
                        let lengthBefore = val.length;
                        val = val.replace(patternArr[0], patternArr[1]);
                        $(this).val(val);
                        caretPosition -= lengthBefore - val.length;
                        if (patternArr[2]) caretPosition+= patternArr[2];
                        safetySwitch++;
                    }
                });
                $(this).val(val);
                this.setSelectionRange(caretPosition, caretPosition);
            });
            //! process min/max values
            min = min ?? -Infinity;
            max = max ??  Infinity;
            inputElement.on('input', function() {
                if (inputElement.val() === "") return;
                if (Number(inputElement.val()) < min) {
                    inputElement.val(min);
                }
                if (Number(inputElement.val()) > max) {
                    inputElement.val(max);
                }
            })
            //! add "required" functionality
            if (required) {
                this.find('.label-container').append?.($('<span class="required-asterisk" title="This field is required!">*</span>'));
                inputElement.on('input', function() {
                    inputElement.removeClass('error');
                    inputElement.attr({title: ""});
                    if (!this.value || !($(this).parent().children('.invisible') && !$(this).parent().children('.invisible').val())) {
                        inputElement.addClass('error');
                        inputElement.attr({title: "This field is required!"});
                    }
                });
                inputElement.on('blur', function() {
                    if (!this.value || !($(this).parent().children('.invisible') && !$(this).parent().children('.invisible').val())) {
                        inputElement.addClass('error');
                        inputElement.attr({title: "This field is required!"});
                    }
                })
            }
            if (inputOnly) {
                this.prepend(inputElement);
            }
            else {
                inputContainer.prepend(inputElement);
            }
            //! construct and add the show-info button+popup
            if (tip) {
                if (inputOnly) {
                    this.append($('<hr>'));
                    this.append(generateTipElement(tip));
                }
                else {
                    inputContainer.append($('<hr>'));
                    inputContainer.append(generateTipElement(tip));
                }
            }
        }
        get value() {
            return this.find('input').val();
        }
        set value(value) {
            this.find('input').val(value);
            this.find('input').trigger('input');
        }
        addInputListeners(type, callback) {
            this.inputElement.on(type, callback);
        }
    },
    //! --------------------------- OPTION
    Select: class extends GeneralFormRow {
        constructor({ id, ignoreId, options, filter, label, inputOnly, required, tip, inputClass, ignoreOutput, negationButton, defaultVal }) {
            if (!id && !ignoreId) throw 'Expected field ID, got undefined';
            if (!label && !inputOnly) throw 'Expected field label, got undefined';
            if (!options || !options.length) throw 'Expected field option list, got undefined';
            super({ id, defaultVal, ignoreOutput, type: 'select' });
            if (inputOnly) {
                this.removeClass('form-row').addClass('input-container unselectable');
            }
            else {
                //add label
                this.append($(
                    `
                    <div class="label-container">
                        <label for="${this.id ?? ''}">${label}</label>
                    </div>
                    `
                ));
                //add input container
                this.append($(`<div class="input-container unselectable"></div>`));
            }
            //construct and add the input
            let inputContainer = this.find('.input-container');
            this.whyDisabledLocation = inputContainer;
            let inputElement = $(`<select name="option-field"${this.id ? ' id="'+this.id+'" ' : ''} class="option-field ${inputClass ? inputClass : ''}"></select>`);
            let dummyInput = $(`<input class="invisible ${inputClass ? inputClass : ''}" type="text"${this.id ? ' id="'+this.id+'" ' : ''} tabindex="-1">`);
            if (inputOnly) this.append(dummyInput);
            else inputContainer.append(dummyInput);
            this.inputElement = inputElement;
            this.dummyInput = dummyInput;
            //add options to input
            options.forEach(option => {
                if (!Array.isArray(option)) option = [option, option];
                inputElement.append($(new Option(option[0], option[1])));
            });
            //add "required" functionality
            if (required) {
                this.find('.label-container').append($('<span class="required-asterisk" title="This field is required!">*</span>'));
                inputElement.on('input', function() {
                    inputElement.removeClass('error');
                    inputElement.attr({title: ""});
                    if (this.value == "null") {
                        inputElement.addClass('error');
                        inputElement.attr({title: "This field is required!"});
                    }
                });
                inputElement.on('blur', function() {
                    if (this.value == "null") {
                        inputElement.addClass('error');
                        inputElement.attr({title: "This field is required!"});
                    }
                })
            }
            inputElement.on('input', updateDummyField)
            //construct and add the "not" button
            if (negationButton) {
                let negationButton = $('<button class="negation-button">!</button>');
                negationButton.click(function() {
                    negationButton.toggleClass('active');
                    inputElement.trigger('input');
                });
                if (inputOnly) {
                    this.prepend(negationButton)
                }
                else {
                    inputContainer.prepend(negationButton);
                }
                inputElement.insertAfter(negationButton);
            }
            else {
                inputContainer.prepend(inputElement);
            }
            //add filter, if needed
            if (filter) {
                let filterElement = $(`<input type="text" class="textfield sizeS filter-field" placeholder="Filter" autocomplete="off">`)
                filterElement.on('input', function() {
                    let pattern = new RegExp($(this).val().replace(/-/g, '[-]'), 'i');
                    if ($(this).val() == '') {
                        $(this).prev().children().prop('disabled', false);
                    } else {
                        $(this).prev().children().each((i, option) => {
                            if (!$(option).html().match(pattern) || $(option).hasClass('unset')) {
                                $(option).prop('disabled', true);
                            }
                            else {
                                $(option).prop('disabled', false);
                            }
                        });
                    }
                    filterElement.removeClass('error');
                    let validOptions = inputElement.find('option:not(:disabled)' + ($(this).val() ? ':not(.unset)' : ''));
                    if (!validOptions.length) {
                        inputElement.val(null);
                        filterElement.addClass('error');
                    }
                    else {
                        inputElement.val(validOptions[0].value);
                    }
                })
                filterElement.on('keyup', function() {
                    let $this = $(this);
                    $this.outerWidth(`calc(${this.value.length+3}ch + 12px`);
                    setSelectFieldWidth($(this));
                });
                if (inputOnly) {
                    this.append(filterElement);
                } else {
                    inputContainer.append(filterElement);
                }
            }
            //calculate the appropriate width for the select input
            setSelectFieldWidth(this.find('.filter-field'));
            //construct and add the show-info button+popup
            if (tip && !inputOnly) {
                if (inputOnly) {
                    this.append($('<hr>'));
                    this.append(generateTipElement(tip));
                }
                else {
                    inputContainer.append($('<hr>'));
                    inputContainer.append(generateTipElement(tip));
                }
            }
            function setSelectFieldWidth(filterEl) {
                let maxWidthString = "";
                if (tip) maxWidthString += ' - 24px - 0.4rem - 1px - 0.4rem';
                if (filter) maxWidthString += ` - ${filterEl.outerWidth()}px - 0.4rem`;
                inputElement.css({
                    ['max-width']: `calc(100%${maxWidthString})`,
                });
            };
            let globalThis = this;
            updateDummyField();
            function updateDummyField() {
                let addNegation = globalThis.find('.negation-button').hasClass('active');
                let selectVal = globalThis.inputElement.val()
                if (selectVal && selectVal != 'null') {
                    globalThis.dummyInput.val([
                        addNegation ? '!' : '',
                        globalThis.inputElement.val(),
                    ].join(''));
                }
                else {
                    globalThis.dummyInput.val(null);
                }
            }
        }
        get value() {
            return this.dummyInput.val();
        }
        set value(value) {
            let negation = false;
            if (value.match?.(/!/)) {
                negation = true;
                value = value.replace(/!/, '');
            }
            if (negation) this.find('.negation-button').addClass('active');
            else this.find('.negation-button').removeClass('active');
            this.find('select').val(value ?? null);
            this.find('select').trigger('input');
        }
        isFilled() {
            return Boolean(this.value && this.value != "null");
        }
        addInputListeners(type, callback) {
            this.inputElement.on(type, callback);
        }
    },
    //! --------------------------- UUID
    Vec3: class extends GeneralFormRow {
        constructor({ id, ignoreId, label, size = 'XS', tip, inputClass, ignoreOutput, defaultVal, required = false }) {
            if (!id && !ignoreId) throw 'Expected field ID, got undefined';
            if (!label) throw 'Expected field label, got undefined';
            super({ id, defaultVal, ignoreOutput, type: 'vec3' });
            //! add label
            this.append($(
                `
                <div class="label-container">
                    <label for="${id ? id+'1' : ''}">${label}</label>
                </div>
                `
            ));
            //! add hover effect for the label
            this.find('.label-container > label').hover(function() {
                $(this).parent().parent().children('.input-container').children('.uuid-container').addClass('fake-hover');
            }, function() {
                $(this).parent().parent().children('.input-container').children('.uuid-container').removeClass('fake-hover')
            });
            //! add input container (already contains the input clear button)
            this.append($(
                `
                <div class="input-container unselectable">
                    <div class="vec3-container">
                        <input class="vec3-field size${size.toUpperCase()} ${inputClass ? inputClass+'1' : ''}" type="text"${this.id ? ' id="'+this.id+'1" ' : ''} autocomplete="off">
                        <input class="vec3-field size${size.toUpperCase()} ${inputClass ? inputClass+'2' : ''}" type="text"${this.id ? ' id="'+this.id+'2" ' : ''} autocomplete="off">
                        <input class="vec3-field size${size.toUpperCase()} ${inputClass ? inputClass+'3' : ''}" type="text"${this.id ? ' id="'+this.id+'3" ' : ''} autocomplete="off">
                        <input class="invisible ${inputClass ? inputClass : ''}" type="text" tabindex="-1">
                        <div class="clear-button-container">
                            <button class="clear-button" tabindex="-1">x</button>
                        </div>
                    </div>
                </div>
                `
            ));
            //! construct and add the input
            let inputContainer = this.find('.input-container');
            this.whyDisabledLocation = inputContainer;
            let uuidContainer = inputContainer.children('.vec3-container');
            let inputElement = uuidContainer.children('input:not(.invisible)');
            let dummyInput = uuidContainer.children('input.invisible');
            this.inputElement = inputElement;
            this.dummyInput = dummyInput;
            //! add functionality to the clear button
            let clearButton = this.find('.clear-button');
            clearButton.click(function() {
                let fields = $(this).parent().parent().children('input, select')
                fields.val(null);
                fields[0].focus();
                updateDummyField();
            });
            clearButton.hover(function() {
                uuidContainer.addClass('fake-hover');
            }, function () {
                uuidContainer.removeClass('fake-hover');
            });
            clearButton.attr({title:"Clear the field"});
            //! add pasting whole UUID functionality
            inputElement.on('input', function() {
                if (this.value?.match(/[^ ]* [^ ]* ?[^ ]*/)) {
                    let values = this.value.split(' ');
                    values.forEach((_,i) => {
                        inputRegex.forEach(regex => {
                            if (!Array.isArray(regex)) regex = [regex, ''];
                            while(values[i].match(regex[0])) values[i] = values[i].replace(regex[0], regex[1]);
                        })
                    });
                    $(inputElement[0]).val(values[0]);
                    $(inputElement[1]).val(values[1]);
                    $(inputElement[2]).val(values[2]);
                };
                updateDummyField();
            });
            //! add default regex patterns
            let inputRegex = [
                /[^0-9,\.\-]/,
                [ /,/, '.' ],
                [ /(.+)-/, '$1' ],
                [ /\.(.*)\./, '.$1' , -1],
                [ /^(-?)\./, '$10.' ],
                [ /^(-?)0{2,}/, '$10' ],
            ];
            //! process regex patterns for the input
            //accepts an array of [pattern, replace] arrays
            inputElement.on('input', function(e) {
                let val = $(this).val();
                let caretPosition = e.target.selectionStart; 
                inputRegex.forEach(patternArr => {
                    if (!Array.isArray(patternArr)) patternArr = [patternArr, ''];
                    let safetySwitch = 0;
                    while (val.match(patternArr[0])) {
                        if (safetySwitch > 99) throw 'Executing of regex patterns on input took too long, action aborted';
                        let lengthBefore = val.length;
                        val = val.replace(patternArr[0], patternArr[1]);
                        $(this).val(val);
                        caretPosition -= lengthBefore - val.length;
                        safetySwitch++;
                    }
                });
                $(this).val(val);
                this.setSelectionRange(caretPosition, caretPosition);
            });
            //! add functionality to the dummy field
            function updateDummyField() {
                let valArr = [];
                inputElement.each((i,el) => {
                    valArr.push($(el).val());
                })
                let outputVal = valArr.join(' ');
                if (!outputVal.trim()) {
                    dummyInput.val(null);
                }
                else {
                    dummyInput.val(outputVal);
                }
            }
            //! add "required" functionality
            if (required) {
                this.find('.label-container').append?.($('<span class="required-asterisk" title="This field is required!">*</span>'));
                inputElement.on('input', function() {
                    inputElement.removeClass('error');
                    inputElement.attr({title: ""});
                    if (!this.value || !($(this).parent().children('.invisible') && !$(this).parent().children('.invisible').val())) {
                        inputElement.addClass('error');
                        inputElement.attr({title: "This field is required!"});
                    }
                });
                inputElement.on('blur', function() {
                    if (!this.value || !($(this).parent().children('.invisible') && !$(this).parent().children('.invisible').val())) {
                        inputElement.addClass('error');
                        inputElement.attr({title: "This field is required!"});
                    }
                })
            }
            inputElement.on('input', updateDummyField);
            //! construct and add the show-info button+popup
            if (tip) {
                inputContainer.append($('<hr>'));
                inputContainer.append(generateTipElement(tip));
            };
        }
        get value() {
            return this.find('input.invisible').val();
        }
        set value(values) {
            this.find('input').each((i, input) => {
                $(input).val(values?.[i] ?? null);
            });
        }
        isFilled() {
            return Boolean(this.value?.match(/.+ .+ .+/));
        }
        addInputListeners(type, callback) {
            this.inputElement.on(type, callback);
        }
    },
    //! --------------------------- UUID
    UUID: class extends GeneralFormRow {
        constructor({ id, ignoreId, label, tip, inputClass, ignoreOutput, defaultVal }) {
            if (!id && !ignoreId) throw 'Expected field ID, got undefined';
            if (!label) throw 'Expected field label, got undefined';
            super({ id, defaultVal, ignoreOutput, type: 'uuid' });
            //add label
            this.append($(
                `
                <div class="label-container">
                    <label for="${id ? id+'1' : ''}">${label}</label>
                </div>
                `
            ));
            //add hover effect for the label
            this.find('.label-container > label').hover(function() {
                $(this).parent().parent().children('.input-container').children('.uuid-container').addClass('fake-hover');
            }, function() {
                $(this).parent().parent().children('.input-container').children('.uuid-container').removeClass('fake-hover')
            });
            //add input container (already contains the input clear button)
            this.append($(
                `
                <div class="input-container unselectable">
                    <div class="uuid-container">
                        <input class="uuid-field ${inputClass ? inputClass+'1' : ''}" type="text"${this.id ? ' id="'+this.id+'1" ' : ''} autocomplete="off">
                        <input class="uuid-field ${inputClass ? inputClass+'2' : ''}" type="text"${this.id ? ' id="'+this.id+'2" ' : ''} autocomplete="off">
                        <input class="uuid-field ${inputClass ? inputClass+'3' : ''}" type="text"${this.id ? ' id="'+this.id+'3" ' : ''} autocomplete="off">
                        <input class="uuid-field ${inputClass ? inputClass+'4' : ''}" type="text"${this.id ? ' id="'+this.id+'4" ' : ''} autocomplete="off">
                        <input class="invisible ${inputClass ? inputClass : ''}" type="text" tabindex="-1">
                        <div class="clear-button-container">
                            <button class="clear-button" tabindex="-1">x</button>
                        </div>
                    </div>
                </div>
                `
            ));
            //construct and add the input
            let inputContainer = this.find('.input-container');
            this.whyDisabledLocation = inputContainer;
            let uuidContainer = inputContainer.children('.uuid-container');
            let inputElement = uuidContainer.children('input:not(.invisible)');
            let dummyInput = uuidContainer.children('input.invisible');
            this.inputElement = inputElement;
            this.dummyInput = dummyInput;
            //add functionality to the clear button
            let clearButton = this.find('.clear-button');
            clearButton.click(function() {
                let fields = $(this).parent().parent().children('input, select')
                fields.val(null);
                fields[0].focus();
                updateDummyField();
            });
            clearButton.hover(function() {
                uuidContainer.addClass('fake-hover');
            }, function () {
                uuidContainer.removeClass('fake-hover');
            });
            clearButton.attr({title:"Clear the field"});
            //add pasting whole UUID functionality
            inputElement.on('input', function() {
                if (this.value?.match(/[^,]*,[^,]*,?[^,]*,?[^,]*/)) {
                    let values = this.value.split(',');
                    values.forEach((_,i) => {
                        inputRegex.forEach(regex => {
                            if (!Array.isArray(regex)) regex = [regex, ''];
                            while(values[i].match(regex[0])) values[i] = values[i].replace(regex[0], regex[1]);
                        })
                    });
                    $(inputElement[0]).val(values[0]);
                    $(inputElement[1]).val(values[1]);
                    $(inputElement[2]).val(values[2]);
                    $(inputElement[3]).val(values[3]);
                };
                updateDummyField();
            });
            //add default regex patterns
            let inputRegex = [
                /[^\-0-9]/,
                [/(\d)-/, '$1']
            ];
            //process regex patterns for the input
            //accepts an array of [pattern, replace] arrays
            inputElement.on('input', function(e) {
                let val = $(this).val();
                let caretPosition = e.target.selectionStart; 
                inputRegex.forEach(patternArr => {
                    if (!Array.isArray(patternArr)) patternArr = [patternArr, ''];
                    let safetySwitch = 0;
                    while (val.match(patternArr[0])) {
                        if (safetySwitch > 99) throw 'Executing of regex patterns on input took too long, action aborted';
                        let lengthBefore = val.length;
                        val = val.replace(patternArr[0], patternArr[1]);
                        $(this).val(val);
                        caretPosition -= lengthBefore - val.length;
                        safetySwitch++;
                    }
                });
                $(this).val(val);
                this.setSelectionRange(caretPosition, caretPosition);
            });
            //add functionality to the dummy field
            function updateDummyField() {
                let valArr = [];
                inputElement.each((i,el) => {
                    valArr.push($(el).val());
                })
                let outputVal = `[${valArr.join(',')}]`;
                if (outputVal.match(/\[,,,\]/)) {
                    dummyInput.val(null);
                }
                else {
                    dummyInput.val(outputVal);
                }
            }
            inputElement.on('input', updateDummyField);
            //construct and add the show-info button+popup
            if (tip) {
                inputContainer.append($('<hr>'));
                inputContainer.append(generateTipElement(tip));
            };
        }
        get value() {
            return this.find('input.invisible').val();
        }
        set value(values) {
            this.find('input').each((i, input) => {
                $(input).val(values?.[i] ?? null);
            });
        }
        isFilled() {
            return Boolean(this.value?.match(/.+,.+,.+,.+/));
        }
        addInputListeners(type, callback) {
            this.inputElement.on(type, callback);
        }
    },
    //! --------------------------- RANGE
    Range: class extends GeneralFormRow {
        constructor({ id, ignoreId, label, tip, inputClass, ignoreOutput, required, defaultVal }) {
            if (!id && !ignoreId) throw 'Expected field ID, got undefined';
            if (!label) throw 'Expected field label, got undefined';
            super({ id, defaultVal, ignoreOutput, type: 'range' });
            //! add label
            this.append($(
                `
                <div class="label-container">
                    <label for="${this.id ? this.id+'1' : ''}">${label}</label>
                </div>
                `
            ));
            //! add required asterisk
            if (required) {
                this.find('.label-container')?.append($('<span class="required-asterisk" title="This field is required!">*</span>'));
            }
            //! add input container (already contains the input clear button)
            this.append($(
                `
                <div class="input-container unselectable">
                    <input class="range-field sizeXS ${inputClass ? inputClass+'1' : ''}" type="text"${this.id ? ' id="'+this.id+'1" ' : ''} autocomplete="off">
                    <span>..</span>
                    <input class="range-field sizeXS ${inputClass ? inputClass+'2' : ''}" type="text"${this.id ? ' id="'+this.id+'2" ' : ''} autocomplete="off">
                    <input class="invisible ${inputClass ? inputClass : ''}" type="text"${this.id ? ' id="'+this.id+'" ' : ''} tabindex="-1">
                    <div class="clear-button-container">
                        <button class="clear-button" tabindex="-1">x</button>
                    </div>
                </div>
                `
            ));
            //! construct and add the input
            let inputContainer = this.find('.input-container');
            this.whyDisabledLocation = inputContainer;
            let inputElement = inputContainer.children('input:not(.invisible)');
            let dummyInput = inputContainer.children('input.invisible');
            this.inputElement = inputElement;
            this.dummyInput = dummyInput;
            //! add functionality to the clear button
            let clearButton = this.find('.clear-button');
            clearButton.click(function() {
                let fields = $(this).parent().parent().children('input, select')
                fields.val(null);
                fields[0].focus();
                fields.trigger('input');
            });
            clearButton.hover(function() {
                $(inputElement[1]).addClass('fake-hover');
            }, function () {
                $(inputElement[1]).removeClass('fake-hover');
            });
            clearButton.attr({title:"Clear the field"});
            //! add default regex patterns
            let inputRegex = [
                /[^0-9,\.\-]/,
                [ /,/, '.' ],
                [ /(.+)-/, '$1' ],
                [ /\.(.*)\./, '.$1' , -1],
                [ /^(-?)\./, '$10.' ],
                [ /^(-?)0{2,}/, '$10' ],
            ];
            //! process regex patterns for the input
            //accepts an array of [pattern, replace] arrays
            inputElement.on('input', function() {
                if (this.value?.match(/.*\.\..*/)) {
                    let values = this.value.split('..');
                    values.forEach((_,i) => {
                        inputRegex.forEach(regex => {
                            if (!Array.isArray(regex)) regex = [regex, ''];
                            while(values[i].match(regex[0])) values[i] = values[i].replace(regex[0], regex[1]);
                        })
                    });
                    $(inputElement[0]).val(values[0]);
                    $(inputElement[1]).val(values[1]);
                };
                updateDummyField();
            });
            inputElement.on('input', function(e) {
                let val = $(this).val();
                let caretPosition = e.target.selectionStart; 
                inputRegex.forEach(patternArr => {
                    if (!Array.isArray(patternArr)) patternArr = [patternArr, ''];
                    let safetySwitch = 0;
                    while (val.match(patternArr[0])) {
                        if (safetySwitch > 99) throw 'Executing of regex patterns on input took too long, action aborted';
                        let lengthBefore = val.length;
                        val = val.replace(patternArr[0], patternArr[1]);
                        $(this).val(val);
                        caretPosition -= lengthBefore - val.length;
                        safetySwitch++;
                    }
                });
                $(this).val(val);
                this.setSelectionRange(caretPosition, caretPosition);
            });
            //! add functionality to the dummy field
            function updateDummyField() {
                let valArr = [];
                inputElement.each((i,el) => {
                    valArr.push($(el).val());
                })
                let outputVal = valArr.join('..');
                if (valArr[0] == valArr[1]) {
                    outputVal = valArr[0];
                }
                if (outputVal.match(/^\.\.$/)) {
                    dummyInput.val(null);
                }
                else {
                    dummyInput.val(outputVal);
                }
            }
            inputElement.on('input', updateDummyField);
            //! construct and add the show-info button+popup
            if (tip) {
                inputContainer.append($('<hr>'));
                inputContainer.append(generateTipElement(tip));
            };
        }
        get value() {
            return this.find('input.invisible').val();
        }
        set value(values) {
            this.find('input').each((i, input) => {
                $(input).val(values?.[i] ?? null);
            });
        }
        addInputListeners(type, callback) {
            this.inputElement.on(type, callback);
        }
    },
    //! --------------------------- COORDINATES
    Coordinates: class extends GeneralFormRow {
        constructor({ id, ignoreId, label, tip, inputClass, ignoreOutput, required, defaultVal }) {
            if (!id && !ignoreId) throw 'Expected field ID, got undefined';
            if (!label) throw 'Expected field label, got undefined';
            super({ id, defaultVal, ignoreOutput, type: 'coords' });
            //! add label
            this.append($(
                `
                <div class="label-container">
                    <label for="${this.id ?? ''}">${label}</label>
                </div>
                `
            ));
            //! add required asterisk
            if (required) {
                this.find('.label-container')?.append($('<span class="required-asterisk" title="This field is required!">*</span>'));
            }
            //! add input container (already contains the input clear button)
            this.append($(
                `
                <div class="input-container unselectable">
                    <div class="clear-button-container">
                        <button class="clear-button" tabindex="-1">x</button>
                    </div>
                    <button class="coordinate-button relative">~</button>
                    <button class="coordinate-button directional">^</button>
                </div>
                `
            ));
            //! construct and add the input
            let inputContainer = this.find('.input-container');
            this.whyDisabledLocation = inputContainer;
            let inputElement = $(`<input class="textfield sizeL ${inputClass ? inputClass : ''}" type="text" name="text-field"${this.id ? ' id="'+this.id+'" ' : ''} autocomplete="off">`);
            this.inputElement = inputElement;
            //! add functionality to the clear button
            let clearButton = this.find('.clear-button');
            clearButton.click(function() {
                let fields = $(this).parent().parent().children('input, select')
                fields.val(null);
                fields[0].focus();
                fields.trigger('input');
            });
            clearButton.hover(function() {
                inputElement.addClass('fake-hover');
            }, function () {
                inputElement.removeClass('fake-hover');
            });
            clearButton.attr({title:"Clear the field"});
            //! process regex patterns for the input
            //accepts an array of [pattern, replace] arrays
            let inputRegex = [
                /[^~^.,0-9 ]/,
                [ /,/, '.' ],
                /^ +/,
                [/  +$/, ' '],
                [/([^ ]+ [^ ]+ [^ ]+) +.*$/, '$1'],
            ];
            inputElement.on('input', function(e) {
                let val = $(this).val();
                let caretPosition = e.target.selectionStart; 
                inputRegex.forEach(patternArr => {
                    if (!Array.isArray(patternArr)) patternArr = [patternArr, ''];
                    let safetySwitch = 0;
                    while (val.match(patternArr[0])) {
                        if (safetySwitch > 99) throw 'Executing of regex patterns on input took too long, action aborted';
                        let lengthBefore = val.length;
                        val = val.replace(patternArr[0], patternArr[1]);
                        $(this).val(val);
                        caretPosition -= lengthBefore - val.length;
                        safetySwitch++;
                    }
                });
                $(this).val(val);
                this.setSelectionRange(caretPosition, caretPosition);
            });
            inputContainer.prepend(inputElement);
            //! add functionality to button
            inputContainer.find('.coordinate-button').click(function() {
                setCoordinateSymbols($(this).parent().children('input'), this.innerText);
                $('#coordinates-field').val()
            })
            //! construct and add the show-info button+popup
            if (tip) {
                inputContainer.append($('<hr>'));
                inputContainer.append(generateTipElement(tip));
            };
            function setCoordinateSymbols(element, symbol = '') {
                let val = $(element).val() ?? '';
                let coords = val.split(' ');
                let x = {
                    symbol: (coords[0] ?? '').match(/[~^]/)?.[0],
                    value: (coords[0] ?? '').replace(/[^\.0-9]/g, ''),
                }
                let y = {
                    symbol: (coords[1] ?? '').match(/[~^]/)?.[0],
                    value: (coords[1] ?? '').replace(/[^\.0-9]/g, ''),
                }
                let z = {
                    symbol: (coords[2] ?? '').match(/[~^]/)?.[0],
                    value: (coords[2] ?? '').replace(/[^\.0-9]/g, ''),
                }
                if (
                    x.symbol == symbol && 
                    y.symbol == symbol && 
                    z.symbol == symbol
                ) {
                    symbol = '';
                }
                let space = ' ';
                if (!symbol && !x.value && !y.value && !z.value) {
                    space = '';
                }
                x.symbol = symbol;
                y.symbol = symbol;
                z.symbol = symbol;
                $(element).val(`${x.symbol}${x.value}${space}${y.symbol}${y.value}${space}${z.symbol}${z.value}`)
                $(element).focus()
                $(element).trigger('input');
            }
        }
        get value() {
            return this.find('input').val();
        }
        set value(value) {
            this.find('input').val(value ?? null);
            this.find('input').trigger('input');
        }
        isFilled() {
            return Boolean(this.value?.match(/[~^]?.* [~^]?.* [~^]?.*/));
        }
        addInputListeners(type, callback) {
            this.inputElement.on(type, callback);
        }
    },
    //! --------------------------- TIME
    Time: class extends GeneralFormRow {
        constructor({ id, ignoreId, label, min, max, tip, inputClass, ignoreOutput, required, defaultVal, unit }) {
            if (!id && !ignoreId) throw 'Expected field ID, got undefined';
            if (!label) throw 'Expected field label, got undefined';
            super({ id, defaultVal, ignoreOutput, type: 'time' });
            //! add label
            this.append($(
                `
                <div class="label-container">
                    <label for="${this.id}">${label}</label>
                </div>
                `
            ));
            //! add required asterisk
            if (required) {
                this.find('.label-container')?.append($('<span class="required-asterisk" title="This field is required!">*</span>'));
            }
            //! add input container (already contains the input clear button)
            this.append($(
                `
                <div class="input-container unselectable">
                    <input class="time-field sizeM ${inputClass ? inputClass+'1' : ''}" type="text"${this.id ? ' id="'+this.id+'1" ' : ''} autocomplete="off">
                    <input class="invisible ${inputClass ? inputClass : ''}" type="text"${this.id ? ' id="'+this.id+'" ' : ''} tabindex="-1">
                    <div class="clear-button-container">
                        <button class="clear-button" tabindex="-1">x</button>
                    </div>
                    <div class="time-display-container hidden">
                        <span class="time-display">Time in ${unit ? unit[1] : 'ticks'}: </span>
                        <span class="time-display time-display-val">0</span>
                    </div>
                </div>
                `
            ));
            //! construct and add the input
            let inputContainer = this.find('.input-container');
            this.whyDisabledLocation = inputContainer;
            let inputElement = inputContainer.find('input:not(.invisible)');
            let dummyInput = inputContainer.find('input.invisible');
            let display = inputContainer.find('.time-display-val');
            this.inputElement = inputElement;
            this.dummyInput = dummyInput;
            //! add functionality to the clear button
            let clearButton = this.find('.clear-button');
            clearButton.click(function() {
                let fields = $(this).parent().parent().children('input, select')
                fields.val(null);
                fields[0].focus();
                fields.trigger('input');
            });
            clearButton.hover(function() {
                inputElement.addClass('fake-hover');
            }, function () {
                inputElement.removeClass('fake-hover');
            });
            clearButton.attr({title:"Clear the field"});
            //! add min/max attrs to the field
            if (min != undefined) {
                inputElement.attr({min: min});
            }
            if (max != undefined) {
                inputElement.attr({max: max});
            }
            //! process regex patterns for the input
            //accepts an array of [pattern, replace] arrays
            let inputRegex = [
                /[^minaxtshdy0-9 \.,\-]/i,
                /^[^m0-9\-]/i,
                [ /,/, '.' ],
                [ /(min|max).+/i, '$1' ],
                [ /.+(min|max)/i, '$1' ],
                [ /(\d) /, '$1' ],
                [ /(\d[tshdy])[^0-9 -]/i, '$1' ],
                [ /m[^ia 0-9\-][^nx]?/i, 'm' ],
                [ /(\d)[nx]/i, '$1' ],
                [ /mi[^n]/i, 'mi' ],
                [ /ma[^x]/i, 'ma' ],
                [ /(t.*?)t/i, '$1' ],
                [ /(s.*?)s/i, '$1' ],
                [ /(m.*?)m/i, '$1' ],
                [ /(h.*?)h/i, '$1' ],
                [ /(d.*?)d/i, '$1' ],
                [ /(y.*?)y/i, '$1' ],
                [ /-[minaxtshdy]/i, '-', -1],
            ];
            unit[0] == 's' && inputRegex.push(/[t]/i);
            if (inputRegex) {
                inputElement.on('input', function(e) {
                    let val = $(this).val();
                    let caretPosition = e.target.selectionStart; 
                    inputRegex.forEach(patternArr => {
                        if (!Array.isArray(patternArr)) patternArr = [patternArr, ''];
                        let safetySwitch = 0;
                        while (val.match(patternArr[0])) {
                            if (safetySwitch > 99) throw 'Executing of regex patterns on input took too long, action aborted';
                            let lengthBefore = val.length;
                            val = val.replace(patternArr[0], patternArr[1]);
                            $(this).val(val);
                            caretPosition -= lengthBefore - val.length + (patternArr[2] ?? 0);
                            safetySwitch++;
                        }
                    });
                    $(this).val(val);
                    this.setSelectionRange(caretPosition, caretPosition);
                })
            };
            //! process general time-field functionality
            inputElement.on('input', function(e) {
                let val = $(this).val();
                if ((!val || (!val.match(/^min$/) && !val.match(/^max$/))) && !val.match(/\d/)) {
                    updateTimeField(dummyInput, display, 0);
                    inputContainer.find('.time-display-container').addClass('hidden');
                    return;
                }
                inputContainer.find('.time-display-container').removeClass('hidden');
                //* calculate time in ticks
                let timeInTicks;
                let min = Number($(this).attr('min'));
                let max = Number($(this).attr('max'));
                if (isNaN(min)) min = -Infinity;
                if (isNaN(max)) max = Infinity;
                let valueRecognitionPatterns = {
                    numonly: /^(-?\d+(?:\.\d+)?)$/,
                    min: /^min(?:imum)?$/i,
                    max: /^max(?:imum)?$/i,
                    ticks: /(-?\d+(?:\.\d+)?) ?t/i,
                    ticksAlt: /(-?\d+(?:\.\d+)?)$/i,
                    seconds: /(-?\d+(?:\.\d+)?) ?s/i,
                    minutes: /(-?\d+(?:\.\d+)?) ?m/i,
                    hours: /(-?\d+(?:\.\d+)?) ?h/i,
                    days: /(-?\d+(?:\.\d+)?) ?d/i,
                    years: /(-?\d+(?:\.\d+)?) ?y/i,
                }
                if (val.match(valueRecognitionPatterns.numonly)) {
                    timeInTicks = Number(val.match(valueRecognitionPatterns.numonly)[1]);
                    timeInTicks = Math.max(min, timeInTicks);
                    timeInTicks = Math.min(max, timeInTicks);
                    let timeInTicksRaw = timeInTicks;
                    timeInTicks = Math.round(timeInTicks);
                    let textAfter = timeInTicks == min ? ' (minimum)' : (timeInTicks == max ? ' (maximum)' : '');
                    updateTimeField(dummyInput, display, timeInTicks, textAfter);
                    $(this).val(timeInTicks == min ? min : (timeInTicks == max ? max : timeInTicksRaw))
                    return;
                }
                if (val.match(valueRecognitionPatterns.min)) {
                    timeInTicks = min;
                    updateTimeField(dummyInput, display, timeInTicks, ' (minimum)');
                    return;
                }
                if (val.match(valueRecognitionPatterns.max)) {
                    timeInTicks = max;
                    updateTimeField(dummyInput, display, timeInTicks, ' (maximum)');
                    return;
                }
                let time = {
                    t: 0,
                    s: 0,
                    m: 0,
                    h: 0,
                    d: 0,
                    y: 0,
                }
                const timeToTicks = {
                    t: 1,
                    s: 20,
                    m: 20*60,
                    h: 20*60*60,
                    d: 20*60*60*24,
                    y: 20*60*60*24*365,
                }
                if (val.match(valueRecognitionPatterns.ticks)) {
                    time.t = Number(val.match(valueRecognitionPatterns.ticks)[1]);
                }
                else if (val.match(valueRecognitionPatterns.ticksAlt)) {
                    time.t = Number(val.match(valueRecognitionPatterns.ticksAlt)[1]);
                }
                if (val.match(valueRecognitionPatterns.seconds)) {
                    time.s = Number(val.match(valueRecognitionPatterns.seconds)[1]);
                }
                if (val.match(valueRecognitionPatterns.minutes)) {
                    time.m = Number(val.match(valueRecognitionPatterns.minutes)[1]);
                }
                if (val.match(valueRecognitionPatterns.hours)) {
                    time.h = Number(val.match(valueRecognitionPatterns.hours)[1]);
                }
                if (val.match(valueRecognitionPatterns.days)) {
                    time.d = Number(val.match(valueRecognitionPatterns.days)[1]);
                }
                if (val.match(valueRecognitionPatterns.years)) {
                    time.y = Number(val.match(valueRecognitionPatterns.years)[1]);
                }
                timeInTicks = time.t;
                timeInTicks += time.s * timeToTicks.s;
                timeInTicks += time.m * timeToTicks.m;
                timeInTicks += time.h * timeToTicks.h;
                timeInTicks += time.d * timeToTicks.d;
                timeInTicks += time.y * timeToTicks.y;
                if (unit[0] == 's') timeInTicks /= 20;
                timeInTicks = Math.max(min, timeInTicks);
                timeInTicks = Math.min(max, timeInTicks);
                timeInTicks = Math.round(timeInTicks);
                let textAfter = timeInTicks == min ? ' (minimum)' : (timeInTicks == max ? ' (maximum)' : '');
                updateTimeField(dummyInput, display, timeInTicks, textAfter);
            })
            inputContainer.prepend(inputElement);
            //! construct and add the show-info button+popup
            if (tip) {
                $('<hr>').insertBefore(inputContainer.find('.time-display-container'));
                generateTipElement(tip).insertBefore(inputContainer.find('.time-display-container'));
            };
            function updateTimeField(dummyInput, display, value, textAfter = '') {
                dummyInput.val(value);
                display.html(addThousandSep(value)+textAfter);
            }
        }
        get value() {
            return this.find('input.invisible').val();
        }
        set value(values) {
            this.find('input').each((i, input) => {
                $(input).val(values?.[i] ?? null);
            });
        }
        addInputListeners(type, callback) {
            this.inputElement.on(type, callback);
        }
    },
    //! --------------------------- TRUE/UNSET/FALSE
    TrueFalse: class extends GeneralFormRow {
        constructor({ id, ignoreId, label, tip, inputClass, ignoreOutput, required, isOutputNumber = false }) {
            if (!id && !ignoreId) throw 'Expected field ID, got undefined';
            if (!label) throw 'Expected field label, got undefined';
            super({ id, ignoreOutput, randomId: true, type: 'true-false' });
            //! add label
            this.append($(
                `
                <div class="label-container">
                    <label for="${this.id}">${label}</label>
                </div>
                `
            ));
            //! add required asterisk
            if (required) {
                this.find('.label-container')?.append($('<span class="required-asterisk" title="This field is required!">*</span>'));
            }
            //! add input container
            this.append($(
                `
                <div class="input-container unselectable">
                    <input class="fut-field-radio fut-field-radio-f ${inputClass ? inputClass+'-f' : ''}" type="radio" name="${id}" id="${id}-f">
                    <input class="fut-field-radio fut-field-radio-u ${inputClass ? inputClass+'-u' : ''}" type="radio" name="${id}" id="${id}-u" checked>
                    <input class="fut-field-radio fut-field-radio-t ${inputClass ? inputClass+'-t' : ''}" type="radio" name="${id}" id="${id}-t">
                    <input class="invisible ${inputClass ? inputClass : ''}" type="text" id="${id}" tabindex="-1">
                    <label class="fut-field fut-field-f" for="${id}-f" tabindex="0" title="false"><i class="fas fa-times"></i></label>
                    <label class="fut-field fut-field-u" for="${id}-u" tabindex="0" title="unset (use default)">/</label>
                    <label class="fut-field fut-field-t" for="${id}-t" tabindex="0" title="true"><i class="fas fa-check"></i></label>
                </div>
                `));
            //! add functionality to inputs
            let inputContainer = this.find('.input-container');
            this.whyDisabledLocation = inputContainer;
            let inputElement = inputContainer.find('input:not(.invisible)');
            let dummyInput = inputContainer.find('input.invisible');
            this.inputElement = inputElement;
            this.dummyInput = dummyInput;
            inputElement.change(function(e) {
                if ($(inputElement[0]).is(':checked')) {
                    dummyInput.val('false');
                    if (isOutputNumber) dummyInput.val('0b');
                    return;
                }
                if ($(inputElement[1]).is(':checked')) {
                    dummyInput.val(null);
                    return;
                }
                if ($(inputElement[2]).is(':checked')) {
                    dummyInput.val('true');
                    if (isOutputNumber) dummyInput.val('1b');
                    return;
                }
            })
            //! construct and add the show-info button+popup
            if (tip) {
                inputContainer.append($('<hr>'));
                inputContainer.append(generateTipElement(tip));
            };
        }
        get value() {
            return this.dummyInput.val();
        }
        set value(value) {
            let inputs = this.find('input[type="radio"]');
            if (value == false || value == "false" || value == "0b" || Number(value) == 0) {
                $(inputs[0]).prop('checked', true);
                $(inputs[1]).prop('checked', null);
                $(inputs[2]).prop('checked', null);
            }
            else if (value == false || value == "true" || value == "1b" || Number(value) == 1) {
                $(inputs[0]).prop('checked', null);
                $(inputs[1]).prop('checked', null);
                $(inputs[2]).prop('checked', true);
            }
            else {
                $(inputs[0]).prop('checked', null);
                $(inputs[1]).prop('checked', true);
                $(inputs[2]).prop('checked', null);
            }
            this.find('input').trigger('input');
        }
        addInputListeners(type, callback) {
            this.inputElement.on(type, callback);
        }
    },
    //! --------------------------- CHECKBOX
    Checkbox: class extends GeneralFormRow {
        constructor({ id, ignoreId, label, tip, ignoreOutput }) {
            if (!id && !ignoreId) throw new Error('Expected field ID, got undefined');
            if (!label) throw new Error('Expected field label, got undefined');
            super({ id, ignoreOutput, randomId: true, type: 'checkbox' });
            //generate dummy id, needed for the field to work properly
            id = id ?? (Math.random() * Math.random() + 1).toString(36).substring(2);
            super({ id, ignoreOutput });
            //add label
            this.append($(
                `
                <div class="label-container">
                    <label for="${this.id}">${label}</label>
                </div>
                `
            ));
            //add input container
            this.append($(
                `
                <div class="input-container unselectable">
                    <input class="checkbox-field" type="checkbox" name="${id}" id="${id}">
                    <label class="checkbox-label" for="${id}" tabindex="0"><i class="fas fa-check"></i></label>
                    <input class="invisible" type="text" tabindex="-1">
                </div>
                `));
            //add functionality to inputs
            let inputContainer = this.find('.input-container');
            this.whyDisabledLocation = inputContainer;
            let inputElement = inputContainer.find('input.checkbox-field');
            this.inputElement = inputElement;
            
            //construct and add the show-info button+popup
            if (tip) {
                inputContainer.append($('<hr>'));
                inputContainer.append(generateTipElement(tip));
            };
        }
        get value() {
            return this.inputElement.is(':checked');
        }
        set value(value) {
            this.inputElement.prop('checked', value);
        }
        addInputListeners(type, callback) {
            this.inputElement.on(type, callback);
        }
    },
    //! --------------------------- COLOR
    Color: class extends GeneralFormRow { 
        constructor({ id, ignoreId, label, tip, required, ignoreOutput, format, defaultVal }) {
            if (!id && !ignoreId) throw 'Expected field ID, got undefined';
            if (!label) throw 'Expected field label, got undefined';
            super({ id, defaultVal, ignoreOutput, type: 'color' });
            format = format ?? 'int';
            //! add label
            this.append($(
                `
                <div class="label-container">
                    <label for="${this.id}">${label}</label>
                </div>
                `
            ));
            //! add required asterisk
            if (required) {
                this.find('.label-container')?.append($('<span class="required-asterisk" title="This field is required!">*</span>'));
            }
            //! add input container (already contains the input clear button)
            this.append($(
                `
                <div class="input-container unselectable">
                    <input class="color-field" type="color"${this.id ? ' id="'+this.id+'1" ' : ''} autocomplete="off">
                    <input class="color-field-text sizeS" type="text"${this.id ? ' id="'+this.id+'1" ' : ''} maxlength="7" autocomplete="off">
                    <input class="invisible" type="text"${this.id ? ' id="'+this.id+'" ' : ''} tabindex="-1">
                    <div class="clear-button-container">
                        <button class="clear-button" tabindex="-1">x</button>
                    </div>
                </div>
                `
            ));
            //! construct and add the input
            let inputContainer = this.find('.input-container');
            let inputElementColor = inputContainer.find('input.color-field');
            let inputElement = inputContainer.find('input.color-field-text');
            let dummyInput = inputContainer.find('input.invisible');
            this.whyDisabledLocation = inputContainer;
            this.inputElement = inputElement;
            this.inputElementColor = inputElementColor;
            this.dummyInput = dummyInput;
            
            inputElementColor.val('#ff0000');
            //! add functionality to the clear button
            let clearButton = this.find('.clear-button');
            clearButton.click(function() {
                let fields = $(this).parent().parent().children('input:not([type="color"]), select')
                fields.val(null);
                fields[0].focus();
                fields.trigger('input');
            });
            clearButton.hover(function() {
                inputElement.addClass('fake-hover');
            }, function () {
                inputElement.removeClass('fake-hover');
            });
            clearButton.attr({title:"Clear the field"});
            //! copy the value from color picker to text field
            inputElementColor.on('input', function() {
                inputElement.val(this.value);
                inputElement.trigger('input');
            });
            //! process regex patterns for the input
            //accepts an array of [pattern, replace] arrays
            let inputRegex = [
                /[^#0-9a-f]/i,
                [ /#(.*)#/, '#$1' ],
                [ /^([^#])/, '#$1' ],
            ];
            inputElement.on('input', function(e) {
                let caretPosition = e.target.selectionStart;
                $(this).val($(this).val().toUpperCase());
                this.setSelectionRange(caretPosition, caretPosition);
            });
            inputElement.on('input', function(e) {
                let val = $(this).val();
                let caretPosition = e.target.selectionStart; 
                inputRegex.forEach(patternArr => {
                    if (!Array.isArray(patternArr)) patternArr = [patternArr, '', 0];
                    let safetySwitch = 0;
                    while (val.match(patternArr[0])) {
                        if (safetySwitch > 99) throw 'Executing of regex patterns on input took too long, action aborted';
                        let lengthBefore = val.length;
                        val = val.replace(patternArr[0], patternArr[1]);
                        $(this).val(val);
                        caretPosition -= lengthBefore - val.length + (patternArr[2] ?? 0);
                        safetySwitch++;
                    }
                });
                $(this).val(val);
                this.setSelectionRange(caretPosition, caretPosition);
            });
            inputElement.on('input', function() {
                let val = $(this).val();
                if (val == "") {
                    inputElement.removeClass('error');
                    return;
                };
                if (val.match(/^#[0-9a-f]{6}$/i)) {
                    inputElementColor.val(val);
                    inputElement.removeClass('error');
                    if (format == "hex") {
                        dummyInput.val(val);
                    }
                    else {
                        val = val.replace('#', '');
                        val = parseInt(val, 16);
                        dummyInput.val(val);
                    }
                }
                else if (val.match(/^#[0-9a-f]{3}$/i)) {
                    let r = val.charAt(1);
                    let g = val.charAt(2);
                    let b = val.charAt(3);
                    val = '#'+r+r+g+g+b+b;
                    inputElementColor.val(val);
                    inputElement.removeClass('error');
                    if (format == "hex") {
                        dummyInput.val(val);
                    }
                    else if (format == "rgb" || format == "rgbint" || format == "rgbfloat") {
                        let r,g,b;
                        r = val.substring(1, 3);
                        g = val.substring(3, 5);
                        b = val.substring(5, 7);
                        r = parseInt(r, 16);
                        g = parseInt(g, 16);
                        b = parseInt(b, 16);
                        if (format == "rgbfloat") {
                            r = Math.round(r/255*100)/100;
                            g = Math.round(g/255*100)/100;
                            b = Math.round(b/255*100)/100;
                        }
                        dummyInput.val(`${r} ${g} ${b}`);
                    }
                    else {
                        val = val.replace('#', '');
                        val = parseInt(val, 16);
                        dummyInput.val(val);
                    }
                }
                else {
                    inputElement.addClass('error');
                    inputElementColor.val('#000000');
                    dummyInput.val(null);
                }
            })
            //! construct and add the show-info button+popup
            if (tip) {
                $('<hr>').insertBefore(inputContainer.find('.time-display-container'));
                generateTipElement(tip).insertBefore(inputContainer.find('.time-display-container'));
            };
        }
        get value() {
            return this.find('input.invisible').val();
        }
        set value(value) {
            if (value.match(/^#[0-9a-f]{6}$/i)) {
                this.inputElementColor.val(value);
                this.inputElementColor.trigger('input');
                return;
            }
            if (Number(value)) {
                value = value.toString(16);
                this.inputElementColor.val(value);
                this.inputElementColor.trigger('input');
                return;
            }
        }
        addInputListeners(type, callback) {
            this.inputElement.on(type, callback);
        }
    },
    //! --------------------------- RANGE
    Adder: class extends GeneralFormRow {
        constructor({ id, ignoreId, label, buttonText, emptyListText, itemConstructor, item, inputHandler, inputOnly, tip, inputClass, required, defaultVal }) {
            if (!id && !ignoreId) throw 'Expected field ID, got undefined';
            if (!label && !inputOnly) throw 'Expected field label, got undefined';
            super({ id, defaultVal, type: 'adder' });
            //add label
            this.append($(
                `
                <div class="label-container addlist-label">
                    <label for="${this.id ?? ''}">${label}</label>
                </div>
                `
            ));
            //add input container (already contains the input clear button)
            this.append($(
                `
                <div class="addlist-input input-container unselectable">
                    <ul class="addlist">
                        <li class="no-items-notice">
                            <span>${emptyListText ?? 'No items added yet!'}</span>
                        </li>
                    </ul>
                    <input class="invisible ${inputClass ? inputClass : ''}" type="text"${this.id ? ' id="'+this.id+'" ' : ''} tabindex="-1">
                    <div class="addlist-buttons">
                        <button class="addlist-button" id="addlist-field-add">
                            <span class="plus">+</span>
                            <span class="text">${buttonText ?? 'Add element...'}</span>
                        </button>
                    </div>
                </div>
                `
            ));
            //construct and add the input
            let inputContainer = this.find('.input-container');
            let dummyInput = inputContainer.children('input.invisible');
            let buttonsContainer = inputContainer.find('.addlist-buttons');
            let addElementButton = inputContainer.find('.addlist-button');
            this.whyDisabledLocation = inputContainer.children('.addlist-buttons');
            this.dummyInput = dummyInput;
            //add functionality to the "add element" button
            let allElements = [];
            this.allElements = allElements;
            addElementButton.click(function() {
                let listUl = $(this).parent().parent().find('.addlist');
                let newListItem = $(`
                <div>
                    ${tip ? '' : '<hr>'}
                    <button class="delete-item-button red-hover"><i class="fas fa-trash"></i></button>
                </div>
                `);
                allElements.push(newListItem);
                
                if (itemConstructor) {
                    newListItem.prepend(new itemConstructor(item));
                }
                else {
                    newListItem.prepend($(item));
                }
                addElementToList(newListItem, listUl.children('.no-items-notice'));
                newListItem.find('button.delete-item-button').click(function() {
                    let listItem = $(this).parent();
                    while (!listItem.hasClass('addlist-item')) {
                        listItem = listItem.parent();
                    }
                    listItem.remove();
                    let allRows = inputContainer.children('.addlist').children('.addlist-item').children('div').children('.input-container');
                    inputHandler?.(allRows, dummyInput);
                    dummyInput.trigger('input');
                });
                newListItem.find('input, select').on('input', function() {
                    let allRows = inputContainer.children('.addlist').children('.addlist-item').children('div').children('.input-container');
                    inputHandler?.(allRows, dummyInput);
                    dummyInput.trigger('input');
                })
            });
            function addElementToList(element, lastEl) {
                let li = $('<li class="addlist-item"></li>');
                li.html(element);
                li.insertBefore(lastEl);
            }
            //construct and add the show-info button+popup
            if (tip) {
                buttonsContainer.append($('<hr>'));
                buttonsContainer.append(generateTipElement(tip));
            };
        }
        get value() {
            return this.children('.input-container').children('input.invisible').val();
        }
        addInputListeners(type, callback) {
            this.allElements.forEach(el => {
                el.inputElement.on(type, callback);
            })
        }
    },
    compound: {
        //! --------------------------- SELCETOR
        Selector: class extends GeneralFormRow {
            constructor({ id, ignoreId, label, playerOnly, codePreviewLocation, hidden = false, required = false }) {
                if (!id && !ignoreId) throw new Error('Expected field ID, got undefined');
                if (!label) throw new Error('Expected field label, got undefined');
                super({ id, type: 'selector' });
                //! add label
                this.append($(
                    `
                    <div class="label-container addlist-label">
                        <label for="${this.id ?? ''}">${label}</label>
                    </div>
                    `
                ));
                //! add required asterisk
                if (required) {
                    this.find('.label-container')?.append($('<span class="required-asterisk" title="This field is required!">*</span>'));
                }
                //! add box container
                let boxContainer = new BoxContainer({
                    hideable: true,
                    additionalChildren: [
                        `<span class="code-preview">
                            <span class="label">Selector preview: </span>
                            <code class="preview-field">
                                <span></span>
                                <div class="info-container">
                                    <div class="info-message"></div>
                                </div>
                            </code>
                        </span>`,
                    ],
                    hidden,
                    classes: 'selector-container',
                }).addToDOM(this);
                let inputContainer = boxContainer.inputContainer;
                let dummyInput = boxContainer.dummyInput;
                let codePreview = boxContainer.additionalChildren[0];
                let codePreviewLarge = codePreview.find('.preview-field > .info-container > .info-message');
                if (codePreviewLocation) {
                    codePreview.remove();
                    codePreview = codePreviewLocation;
                }
                else {
                    codePreview = codePreview.find('.preview-field > span');
                }
                this.whyDisabledLocation = inputContainer;
                this.codePreview = codePreview;
                this.dummyInput = dummyInput;
                //! base selector
                let selector = new FormRow.Select({
                    ignoreId: true,
                    label: 'Selector',
                    options: [unsetOption, ...(playerOnly ? allSelectors.raw_player : allSelectors.raw)],
                    tip: `
                    <span>
                        The base selector.
                        <br/>
                        <ul>
                            ${allSelectors.explanations.reduce((acc, val) => {
                                if (playerOnly && val[2]) return acc;
                                return acc += [
                                    '<li>',
                                    '<b><code>', val[0], '</code></b>',
                                    ' - ', val[1], '.',
                                    '</li>'
                                ].join('');
                            }, '')}
                        </ul>
                    </span>
                    `
                }).addToDOM(inputContainer);
                this.selectorField = selector;
                let playerNameField = new FormRow.Text({
                    ignoreId: true,
                    label: 'Player\'s name',
                    size: 'L',
                    required: true,
                    inputRegex: [
                        /[^a-z0-9_]/i,
                        /^\d/,
                    ]
                }).addToDOM(inputContainer);
                this.playerNameField = playerNameField;
                //! additional arguments section
                let additionalArguments = new Section({
                    ignoreId: true,
                    optional: true,
                    collapsed: true, 
                    header: {
                        text: "Additional arguments",
                        tag: 'h6',
                    }
                }).addToDOM(inputContainer);
                //! additional selector arguments
                let selectorArgEls = {};
                Object.keys(allSelectorArgs).forEach(field => {
                    let fieldData = allSelectorArgs[field];
                    if ((playerOnly && fieldData.forPlayer) || !playerOnly) {
                        if (fieldData.gapBefore) {
                            new FormRow.visual.Gap(fieldData.gapBefore).addToDOM(additionalArguments);
                        }
                        selectorArgEls[field] = generateFormRow(fieldData, field)?.addToDOM(additionalArguments);
                        if (typeof fieldData.comingSoon == "string") {
                            selectorArgEls[field].setComingSoon(fieldData.comingSoon);
                        }
                        if (fieldData.gapAfter) {
                            new FormRow.visual.Gap(fieldData.gapAfter).addToDOM(additionalArguments);
                        }
                    }
                })
                //! add enabling/disabling based on value
                for (const field in selectorArgEls) {
                    const fieldData = allSelectorArgs[field];
                    const fieldEl = selectorArgEls[field];
                    if (fieldData.disableIf?.length) {
                        fieldData.disableIf.forEach(reason => {
                            let dependencyEl;
                            if (reason.field == "selector") {
                                dependencyEl = selector;
                            }
                            else {
                                dependencyEl = selectorArgEls[reason.field];
                            }
                            dependencyEl.inputElement?.on('input', function() {
                                if (reason.values.includes(dependencyEl.value)) {
                                    if (!fieldEl.isComingSoon()) fieldEl.disable(reason.whyDisabled);
                                    if (reason.disableValue !== undefined) {
                                        fieldEl.value = reason.disableValue;
                                    }
                                }
                                else {
                                    if (!fieldEl.isComingSoon()) fieldEl.enable();
                                    if (reason.enableValue !== undefined) {
                                        fieldEl.value = reason.enableValue;
                                    }
                                }
                            })
                        })
                    }
                }
                //! show/hide additional arguments based on selector
                selector.inputElement.on('input', function() {
                    if (this.value == "Player name") {
                        playerNameField.enable();
                        additionalArguments.disable('Not available when Selector is set to "Player name".', undefined, additionalArguments.header);
                    }
                    else {
                        playerNameField.disable('Only available when Selector is set to "Player name".');
                        additionalArguments.enable();
                    }
                });
                //! add event listeners that update the overall dummy field
                selector.inputElement.on('input', updateSelectorDummyField);
                playerNameField.inputElement.on('input', updateSelectorDummyField);
                for (const field in selectorArgEls) {
                    const fieldEl = selectorArgEls[field];
                    fieldEl.inputElement?.on('input', updateSelectorDummyField);
                    fieldEl.dummyInput?.on('input', updateSelectorDummyField);
                }
                //! add team selection mode functionality
                selectorArgEls.team__2.inputElement.on('input', updateTeamDummyField);
                selectorArgEls.team__1.inputElement.on('input', updateTeamDummyField);
                updateTeamDummyField();
                function updateTeamDummyField() {
                    switch (selectorArgEls.team__2.value) {
                        case '0':
                            selectorArgEls.team.value = selectorArgEls.team__1.value;
                            selectorArgEls.team.forceValue = false;
                            break;
                        case '1':
                            selectorArgEls.team.value = selectorArgEls.team__1.value ? '!'+selectorArgEls.team__1.value : null;
                            selectorArgEls.team.forceValue = false;
                            break;
                        case '2':
                            selectorArgEls.team.value = '';
                            selectorArgEls.team.forceValue = true;
                            break;
                        case '3':
                            selectorArgEls.team.value = '!';
                            selectorArgEls.team.forceValue = false;
                            break;
                    }
                    updateSelectorDummyField();
                }
                selector.inputElement.trigger('input');
                //! handle updating main dummy input field
                updateSelectorDummyField();
                function updateSelectorDummyField() {
                    if (selector.value == null) return;
                    let outputArrArgs = [];
                    codePreviewLarge.parent().addClass('hidden');
                    if (selector.value == "Player name") {
                        dummyInput.val(playerNameField.value);
                        codePreview.html(playerNameField.value);
                        return;
                    }
                    for (const field in selectorArgEls) {
                        const fieldEl = selectorArgEls[field];
                        if (
                                !fieldEl.ignoreOutput &&
                                (!fieldEl.isDisabled() || fieldEl.isLocked()) &&
                                (
                                    fieldEl.value ||
                                    fieldEl.forceValue
                                ) &&
                                fieldEl.value != "null" &&
                                fieldEl.value != '{}'
                            ) {
                            outputArrArgs.push([
                                field,
                                '=',
                                field == "name" ? (fieldEl.value?.match?.(/!/) ? '!"' : '"') : '',
                                field == "name" ? fieldEl.value?.replace?.(/!/, '') : fieldEl.value,
                                field == "name" ? '"' : '',
                            ].join(''))
                        }
                    }
                    if (outputArrArgs.length) {
                        codePreviewLarge.parent().removeClass('hidden');
                    }
                    let outputArr = [
                        selector.value,
                        outputArrArgs.length ? '[' : '',
                        outputArrArgs.length ? outputArrArgs.join(',') : '',
                        outputArrArgs.length ? ']' : '',
                    ];
                    let output = outputArr.join('');
                    dummyInput.val(output);
                    codePreview.html(output);
                    let outputArrArgsFormatted = outputArrArgs.join(',');
                    if (outputArrArgs.length) {
                        //indentations
                        outputArrArgsFormatted = outputArrArgsFormatted.replace(/,/g, ',<br/>&nbsp;&nbsp;');
                        outputArrArgsFormatted = outputArrArgsFormatted.replace(/scores=\{/g, 'scores={<br/>&nbsp;&nbsp;&nbsp;&nbsp;');
                        outputArrArgsFormatted = outputArrArgsFormatted.replace(/scores=\{(.+?),<br\/>/g, 'scores={$1,<br/>&nbsp;&nbsp;');
                        outputArrArgsFormatted = outputArrArgsFormatted.replace(/scores=\{(.+?)\}/g, 'scores={$1<br/>&nbsp;&nbsp}');
                        outputArrArgsFormatted = outputArrArgsFormatted.replace(/nbt=(.+?),<br\/>&nbsp;&nbsp;/g, 'nbt=$1,');
                        //TODO coloring
                        // let safetySwitch = 0;
                        // while (outputArrArgsFormatted.match(/(.+?)=(-?\d+?(?:\.\d+?)?(?:\.\.-?\d+?(?:\.\d+?)?)?)(,|<)/)) {
                        //     outputArrArgsFormatted = outputArrArgsFormatted.replace(/(.+?)=(-?\d+?(?:\.\d+?)?(?:\.\.-?\d+?(?:\.\d+?)?)?)(,|<)/, `<span style= 'color: var(--code-blue);'>$1</span> = <span style= 'color: var(--code-green)'>$2</span>$3`);
                        //     safetySwitch++;
                        //     if (safetySwitch >= 30) break;
                        // }
                        // safetySwitch = 0;
                        // while (outputArrArgsFormatted.match(/(.+?)=([^ ])/)) {
                        //     outputArrArgsFormatted = outputArrArgsFormatted.replace(/(.+?)=([^ ])/, `<span style= 'color: var(--code-blue);'>$1</span> = $2`);
                        //     safetySwitch++;
                        //     if (safetySwitch >= 30) break;
                        // }
                        // safetySwitch = 0;
                        // while (outputArrArgsFormatted.match(/"(.+?)"/)) {
                        //     outputArrArgsFormatted = outputArrArgsFormatted.replace(/"(.+?)"/, '<span style= "color: var(--code-orange);">"$1"</span>');
                        //     safetySwitch++;
                        //     if (safetySwitch >= 30) break;
                        // }
                        // safetySwitch = 0;
                        // while (outputArrArgsFormatted.match(/!/)) {
                        //     outputArrArgsFormatted = outputArrArgsFormatted.replace(/!/, '<span style= "color: var(--code-red);">!</span>');
                        //     safetySwitch++;
                        //     if (safetySwitch >= 30) break;
                        // }
                    }
                    outputArr = [
                        selector.value,
                        outputArrArgs.length ? '[<br/>&nbsp;&nbsp;' : '',
                        outputArrArgs.length ? outputArrArgsFormatted : '',
                        outputArrArgs.length ? '<br/>]' : '',
                    ];
                    codePreviewLarge.html(outputArr.join(''));
                }
                this.allFields = selectorArgEls;
            }
            get value() {
                return this.children('.input-container-master').children('input.invisible').val();
            }
            setProperties(properties) {
                if (!properties) throw new Error('Expected property object, got nothing.');
                if (typeof properties != 'object') throw new Error(`Invalid argument #1: expected object, got ${typeof properties}.`);
                Object.keys(properties).forEach(prop => {
                    const fieldEl = this.allFields[prop];
                    if (!fieldEl) return;
                    fieldEl.value = properties[prop];
                })
            }
            addInputListeners(type, callback) {
                this.selectorField.on(type, callback);
                this.playerNameField.on(type, callback);
                Object.values(this.allFields).forEach(field =>  {
                    field.addInputListeners?.(type, callback);
                });
            }
        },
        //! --------------------------- SCORE
        Score: class extends GeneralFormRow {
            constructor({ id, ignoreId }) {
                if (!id && !ignoreId) throw new Error('Expected field ID, got undefined');
                super({ id, type: 'score' });
                this.removeClass('form-row').addClass('input-container box-container score-container');
                //add inputs
                this.append($(`<input class="invisible" type="text"${this.id ? ' id="'+this.id+'" ' : ''} tabindex="-1">`))
                this.dummyInput = this.children('input.invisible');
                this.nameField = new FormRow.Text({
                    ignoreId: true,
                    size: 'MAX',
                    maxLength: 16,
                    label: 'Name',
                    inputRegex: [
                        /[^a-z0-9_]/i,
                        /^\d/,
                    ],
                }).addToDOM(this);
                this.valueField = new FormRow.Range({
                    ignoreId: true,
                    label: 'Value',
                }).addToDOM(this);
                this.nameField.inputElement.on('input', updateDummyField);
                this.valueField.inputElement.on('input', updateDummyField);
                let globalThis = this;
                function updateDummyField() {
                    if (!globalThis.nameField.value || !globalThis.valueField.value) return globalThis.dummyInput.val(null);
                    globalThis.dummyInput.val([
                        globalThis.nameField.value,
                        '=',
                        globalThis.valueField.value,
                    ].join(''));
                }
            }
            get value() {
                return this.dummyInput.val();
            }
            set value(value) {
                let values;
                if (value?.match?.(/([A-Za-z0-9_]+)=(?:(-?[\d\.]+)\.\.(-?[\d\.]*)|(-?[\d\.]*)\.\.(-?[\d\.]+))/)) {
                    values = value.match(/([A-Za-z0-9_]+)=(?:(-?[\d\.]+)\.\.(-?[\d\.]*)|(-?[\d\.]*)\.\.(-?[\d\.]+))/);
                    values = [ values[1], values[2], values[3] ];
                }
                else if (typeof value?.[0] == "string" && (typeof value?.[1] == "number" || typeof value?.[2] == "number")) {
                    values = [ value[0], value[1], value[2] ];
                }
                else {
                    values = [ null, null, null ];
                }
                this.nameField.value = values[0];
                this.valueField.value = [ values[1], values[2] ];
            }
            addInputListeners(type, callback) {
                this.nameElement.inputElement.on(type, callback);
                this.valueElement.inputElement.on(type, callback);
            }
        },
        //! --------------------------- SOUND
        Sound: class extends GeneralFormRow {
            constructor({ id, ignoreId, label, required = false, defaultVal }) {
                if (!id && !ignoreId) throw new Error('Expected field ID, got undefined');
                if (!label) throw new Error('Expected field label, got undefined');
                super({ id, defaultVal, type: 'sound' });
                //! add label
                this.append($(
                    `
                    <div class="label-container">
                        <label for="${this.id}">${label}</label>
                    </div>
                    `
                ));
                //! add input container
                this.append($(`
                    <div class="input-container sound-container unselectable">
                        <div class="code-preview sound-code-preview">
                            <span class="label">Sound selected: </span>
                            <code></code>
                        </div>
                        <div class="sound-list"></div>
                        <input class="invisible" type="text" tabindex="-1">
                    </div>
                `));
                let inputContainer = this.find('.input-container');
                let inputsLocation = inputContainer.find('.sound-list');
                let dummyInput = inputContainer.find('.invisible');
                let codePreview = inputContainer.find('code');
                this.inputsLocation = inputsLocation;
                this.dummyInput = dummyInput;
                this.codePreview = codePreview;
                let globalThis = this;
                
                //! add required asterisk
                if (required) {
                    this.find('.label-container')?.append($('<span class="required-asterisk" title="This field is required!">*</span>'));
                }
                //! functions for adding next tier of sounds
                function addSoundOptionsForEvents() {
                    addSoundOptions(inputsLocation, this);
                }
                addSoundOptions(inputsLocation);
                function addSoundOptions(inputsLocation, thisSelect) {
                    //! get the next array of options
                    let index = Number($(thisSelect).attr('index'));
                    if (Number.isNaN(index)) index = 0;
                    if (!thisSelect || (thisSelect && thisSelect.value != 'null')) {
                        let inputs = inputsLocation.find('select');
                        let soundChoices = [];
                        for (const input of inputs) {
                            const $input = $(input);
                            if ($input && $input.val?.() && $input.val() != 'null') {
                                soundChoices.push($input.val());
                            }
                            if ($input.attr('index') == index) break;
                        }
                        let soundList = getSoundOptions(soundChoices);
                        if (!soundList.length) {
                            for (const element of inputsLocation.children()) {
                                const $element = $(element);
                                if ($element.attr('index') > index) {
                                    $element.remove();
                                }
                            }
                            return;
                        }
                        soundList.unshift(unsetOption);
                        //! construct and add the elements
                        let selectEl = $(`<select index="${index+1}"></select>`);
                        for (let sound of soundList) {
                            if (!Array.isArray(sound)) sound = [sound, sound];
                            selectEl.append($(new Option(sound[0], sound[1])));
                        }
                        selectEl.change(addSoundOptionsForEvents);
                        selectEl.change(updateDummyField);
                        if (required) {
                            function errorHandler() {
                                if ($(this).val() == 'null' && !$(this).hasClass('error')) {
                                    $(this).addClass('error');
                                    selectEl.attr({title: "This field is required!"});
                                    return;
                                }
                                $(this).removeClass('error');
                                selectEl.attr({title: ""});
                            }
                            selectEl.on('blur', errorHandler);
                            selectEl.on('change', errorHandler);
                        }
                        //! remove old elements
                        for (const element of inputsLocation.children()) {
                            const $element = $(element);
                            if ($element.attr('index') > index) {
                                $element.remove();
                            }
                        }
                        //! append new elements to the input container
                        inputsLocation.append(selectEl);
                        inputsLocation.append($(`<span index="${index+1}">.</span>`));
                    }
                    else {
                        for (const element of inputsLocation.children()) {
                            const $element = $(element);
                            if ($element.attr('index') > index) {
                                $element.remove();
                            }
                        }
                    }
                }
                function getSoundOptions(soundTiers) {
                    let currIterationOfObject = allSoundsFancy;
                    soundTiers?.forEach(sound => {
                        currIterationOfObject = currIterationOfObject[sound];
                        if (!currIterationOfObject) throw new Error(`Cannot find sound named "${sound}".`);
                    });
                    return Object.keys(currIterationOfObject);
                }
                updateDummyField();
                function updateDummyField() {
                    let allInputs = globalThis.inputsLocation.children('select');
                    let lastVal = allInputs[allInputs.length-1]?.value
                    if (lastVal && lastVal == 'null') {
                        globalThis.dummyInput.val(null);
                        globalThis.codePreview.html('None yet!');
                        return;
                    }
                    let soundArr = [];
                    allInputs.each((i,input) => {
                        if (input.value != '—') {
                            soundArr.push(input.value);
                        }
                    });
                    globalThis.dummyInput.val(soundArr.join('.'));
                    globalThis.codePreview.html(soundArr.join('.'));
                }
            }
            get value() {
                return this.dummyInput.val();
            }
            set value(value) {
                //TODO =======================
            }
            addInputListeners(type, callback) {
                this.inputsLocation.children('select').on(type, callback);
            }
        },
        //! --------------------------- PARTICLE
        Particle: class extends GeneralFormRow {
            constructor({ id, ignoreId }) {
                if (!id && !ignoreId) throw new Error('Expected field ID, got undefined');
                super({ id, randomId: true, type: 'particle' });
                this.append($(`<div class="particle-list"></div>`));
                this.append($(`<input class="invisible" type="text" tabindex="-1"${id && ' id="'+id+'"'}>`));
                let inputsLocation = this.children('.particle-list');
                let dummyInput = this.children('.invisible');
                this.inputsLocation = inputsLocation;
                this.dummyInput = dummyInput;
                let globalThis = this;
                //! add particles to list
                const allParticleRadios = {};
                this.allParticleRadios = allParticleRadios;
                function generateParticleLabel(particle) {
                    return $(`
                    <label for="${globalThis.id}-${particle}" class="particle-item" tabindex="0">
                        <img src="/img/particle/${particle}.png">
                        <code>${particle.replace(/_/g, ' ')}</code>
                    </label>
                    `);
                }
                function generateParticleRadio(particle) {
                    return $(`<input class="particle-radio" type="radio" name="${globalThis.id}" id="${globalThis.id}-${particle}" particle="${particle}">`);
                }
                generateParticleList();
                function generateParticleList() {
                    for (const particle of allParticles) {
                        let particleLabel = generateParticleLabel(particle);
                        let particleRadio = generateParticleRadio(particle);
                        allParticleRadios[particle] = particleRadio;
                        particleRadio.on('input', updateDummyField);
                        particleLabel.on('keydown', function(e) {
                            const key = e.which;
                            if (key == 13 || key == 32) {
                                let id = $(this).attr('for');
                                $('#'+id).prop('checked', true);
                                e.preventDefault();
                            }
                        })
                        inputsLocation.append(particleRadio);
                        inputsLocation.append(particleLabel);
                    }
                }
                // set default particle
                allParticleRadios[Object.keys(allParticleRadios)[0]].prop('checked', true);
                
                updateDummyField();
                function updateDummyField() {
                    let val;
                    for (const particle in allParticleRadios) {
                        const radioEl = allParticleRadios[particle]
                        if (radioEl.is(':checked')) {
                            val = radioEl.attr('particle');
                            break;
                        }
                    }
                    dummyInput.val(val);
                    dummyInput.trigger('input');
                }
            }
            get value() {
                return this.dummyInput.val();
            }
            set value(value) {
                this.dummyInput.val(value);
                this.dummyInput.trigger('input');
                this.allParticleRadios[value]?.prop('checked', true);
            }
            addInputListeners(type, callback) {
                this.inputsLocation.children('input').on(type, callback);
            }
            isFilled() { return true };
        },
    },
    visual: {
        //! --------------------------- GAP
        Gap: class extends VisualFormRow {
            constructor(gap) {
                super();
                $.extend(this, $('<div class="form-gap"></div>'));
                switch (gap?.toLowerCase()) {
                    case 'extra-small':
                    case 'xs':
                        gap = 5;
                        break;
                    case 'small':
                    case 's':
                        gap = 10;
                        break;
                    case 'medium':
                    case 'm':
                        gap = 15;
                        break;
                    case 'large':
                    case 'l':
                        gap = 20;
                        break;
                    default:
                        gap = gap ?? 10;
                        break;
                }
                this.css({ height: gap });
            }
        },
        //! --------------------------- HEADER
        Header: class extends VisualFormRow {
            constructor({ text, tag = 'h4', fontsize, textAfter }) {
                if (!text) throw 'Expected header text, got nothing.';
                super();
                $.extend(this, $('<button class="form-header"></button>'));
                let tagEl = $(`<${tag}><span>${text}</span></${tag}>`);
                this.append(tagEl);
                this.css({ "font-size": fontsize });
                if (textAfter) {
                    $(`<span class="text-after">${textAfter.text}</span>`).css(textAfter.css ?? {}).appendTo(tagEl);
                }
            }
        },
        //! --------------------------- TEXT ROW
        TextRow: class extends VisualFormRow {
            constructor({ text, showOnlyIfEmpty = false }) {
                if (!text) throw 'Expected text content, got nothing.';
                super();
                $.extend(this, $(`<span class="form-text">${text}</span>`));
                if (showOnlyIfEmpty) {
                    this.addClass('empty-only')
                }
            }
        },
    }
}

function generateFormRow(fieldData, field) {
    switch (fieldData.type.toLowerCase()) {
        case 'textrow':
            return new FormRow.visual.TextRow(fieldData);
        case 'dummy':
            return new FormRow.Dummy({
                ignoreId: true,
                ...fieldData,
            });
        case 'text':
            return new FormRow.Text({
                ignoreId: true,
                ...fieldData,
            });
        case 'nottext':
            return new FormRow.Text({
                ignoreId: true,
                negationButton: true,
                ...fieldData,
            });
        case 'number':
            return new FormRow.Number({
                ignoreId: true,
                ...fieldData,
            });
        case 'select':
            return new FormRow.Select({
                ignoreId: true,
                ...fieldData,
            });
        case 'notselect':
            return new FormRow.Select({
                ignoreId: true,
                ...fieldData,
            });
        case 'range':
            return new FormRow.Range({
                ignoreId: true,
                ...fieldData,
            });
        case 'coordinates':
            return new FormRow.Coordinates({
                ignoreId: true,
                ...fieldData,
            });
        case 'vec3':
            return new FormRow.Vec3({
                ignoreId: true,
                ...fieldData,
            });
        case 'uuid':
            return new FormRow.UUID({
                ignoreId: true,
                ...fieldData,
            });
        case 'time':
            return new FormRow.Time({
                ignoreId: true,
                ...fieldData,
            });
        case 'truefalse':
        case 'fut':
            return new FormRow.TrueFalse({
                ignoreId: true,
                ...fieldData,
            });
        case 'color':
            return new FormRow.Color({
                ignoreId: true,
                ...fieldData,
            });
        case 'sound':
            return new FormRow.compound.Sound({
                ignoreId: true,
                ...fieldData,
            });
        case 'selector':
            return new FormRow.compound.Selector({
                ignoreId: true,
                ...fieldData,
            });
        case 'particle':
            return new FormRow.compound.Particle({
                ignoreId: true,
            })
        case 'noteselector': //TODO ==================================
        case 'block':        //TODO ==================================
        case 'item':         //TODO ==================================
            return new FormRow.Text({
                ignoreId: true,
                size: 'M',
                ...fieldData,
            });
        case 'advancementadder':
            //TODO ===================================================
        case 'tagadder':
            return new FormRow.Adder({
                ignoreId: true,
                ...fieldData,
                itemConstructor: FormRow.Text,
                item: {
                    ignoreId: true,
                    size: "M",
                    inputOnly: true,
                    maxLength: 6,
                    negationButton: true,
                },
                inputHandler: function(allRows, dummyInput) {
                    let outputArr = [];
                    allRows.each((i, row) => {
                        let tempVal = $($(row).find('input')[0]).val()
                        if (tempVal && tempVal != '!') {
                            let thisVal = '';
                            if (i != 0) {
                                thisVal += `${field}=`
                            }
                            thisVal += tempVal;
                            outputArr.push(thisVal);
                        }
                    })
                    dummyInput.val(outputArr.join(','));
                },
            });
        case 'gamemodeadder':
        case 'typeadder':
            return new FormRow.Adder({
                ignoreId: true,
                ...fieldData,
                itemConstructor: FormRow.Select,
                item: {
                    ignoreId: true,
                    inputOnly: true,
                    negationButton: true,
                    options: fieldData.options,
                },
                inputHandler: function(allRows, dummyInput) {
                    let outputArr = [];
                    allRows.each((i, row) => {
                        let tempVal = $($(row).find('input.invisible')[0]).val()
                        if (tempVal && tempVal != '!') {
                            let thisVal = '';
                            if (i != 0) {
                                thisVal += `${field}=`
                            }
                            thisVal += tempVal;
                            outputArr.push(thisVal);
                        }
                    })
                    dummyInput.val(outputArr.join(','));
                },
            });
        case 'scoreadder':
            return new FormRow.Adder({
                ignoreId: true,
                ...fieldData,
                itemConstructor: FormRow.compound.Score,
                item: {
                    ignoreId: true
                },
                inputHandler: function(allRows, targetDummyField) {
                    let outputArr = [];
                    allRows.each((i, row) => {
                        outputArr.push($(row).children('input.invisible').val());
                    })
                    targetDummyField.val(outputArr.length ? '{'+outputArr.join(',')+'}' : null);
                },
            });
        case 'predicateadder':
            return new FormRow.Adder({
                ignoreId: true,
                ...fieldData,
                itemConstructor: FormRow.Text,
                item: {
                    ignoreId: true,
                    size: "M",
                    inputOnly: true,
                    maxLength: 6,
                    negationButton: true,
                },
                inputHandler: function(allRows, dummyInput) {
                    let outputArr = [];
                    allRows.each((i, row) => {
                        let tempVal = $($(row).find('input')[0]).val()
                        if (tempVal && tempVal != '!') {
                            let thisVal = '';
                            if (i != 0) {
                                thisVal += `${field}=`
                            }
                            let negation = '';
                            if (tempVal.match(/^!/)) {
                                tempVal = tempVal.substring(1);
                                negation = '!';
                            }
                            if (!tempVal.match(/.+:.+/)) {
                                tempVal = 'minecraft:'+tempVal
                            }
                            thisVal += negation+tempVal;
                            outputArr.push(thisVal);
                        }
                    })
                    dummyInput.val(outputArr.join(','));
                },
            });
        default:
            throw new Error(`Cannot find proper constructor for "${field}" field (type: "${fieldData.type}")`);
    }
}
export default class Form extends VisualFormRow {
    constructor( data ) {
        if (!data) throw new Error('Error while generating a form: expected form data, got nothing.');
        super();
        $.extend(this, $('<div class="generator-container"></div>'));
        let formInputs = {};
        let formInputsData = {};
        data.steps.forEach((step, i) => {
            let thisStep = new FormStep({
                stepNum: i+1,
                header: step.header,
                collapsed: step.collapsed,
                optional: step.optional,
            }).addToDOM(this);
            for (const field of step.fields) {
                if (field.type == "textrow") {
                    generateFormRow(field, field.name)?.addToDOM(thisStep.section);
                }
                if (!field.name) continue;
                formInputs[field.name] = generateFormRow(field, field.name)?.addToDOM(thisStep.section);
                formInputs[field.name].required = field.required;
                formInputs[field.name].default = field.default;
                formInputsData[field.name] = field;
            }
        });
        for (const field in formInputs) {
            const fieldData = formInputsData[field];
            const fieldEl = formInputs[field];
            if (fieldData.disableIf?.length) {
                fieldData.disableIf.forEach(reason => {
                    let dependencyEl = formInputs[reason.field];
                    dependencyEl.addInputListeners('input', checkIfShouldBeDisabled);
                    checkIfShouldBeDisabled();
                    function checkIfShouldBeDisabled() {
                        if (reason.values.includes(dependencyEl.value)) {
                            if (!fieldEl.isComingSoon()) fieldEl.disable(reason.whyDisabled);
                            if (reason.disableValue !== undefined) {
                                fieldEl.value = reason.disableValue;
                            }
                        }
                        else {
                            if (!fieldEl.isComingSoon()) fieldEl.enable();
                            if (reason.enableValue !== undefined) {
                                fieldEl.value = reason.enableValue;
                            }
                        }
                    }
                })
            }
            if (fieldData.addIf?.length) {
                fieldData.addIf.forEach(reason => {
                    let dependencyEl = formInputs[reason.field];
                    dependencyEl.addInputListeners('input', checkIfShouldBeHidden);
                    checkIfShouldBeHidden();
                    function checkIfShouldBeHidden() {
                        if (reason.values.includes(dependencyEl.value)) {
                            fieldEl.removeClass('hidden');
                            fieldEl.removeClass('soft-hidden');
                        }
                        else {
                            fieldEl.addClass(reason.softHidden ? 'soft-hidden' : 'hidden');
                        }
                    }
                });
            }
        }
        let output = new FormOutput().addToDOM(this).textarea;
        for (const field in formInputs) {
            const fieldEl = formInputs[field];
            fieldEl.addInputListeners('input', function() {
                data.generator(formInputs, output);
            });
        }
    }
}
class FormStep extends VisualFormRow {
    constructor({ stepNum, header, collapsible = true, collapsed = false, optional = false }) {
        super();
        $.extend(this, $(`
            <div class="generator-step">
                <span class="step-number">${stepNum}</span>
            </div>
        `));
        let section = new Section({
            header,
            collapsible,
            collapsed,
            optional,
        }).addToDOM(this);
        this.section = section;
    }
}
class FormOutput extends FormStep {
    constructor() {
        super({
            finish: true,
            collapsible: false,
            optional: false,
            header: {
                text: "Output",
                tag: "h1",
            }
        });
        this.addClass('finish');
        this.children('.step-number').html('Finish');
        let textarea = $(`<textarea readonly placeholder="Command will appear here..."></textarea>`);
        this.section.append(textarea);
        this.textarea = textarea;
    }
    set value(value) {
        this.find('textarea').val(value);
    }
    get value() {
        return this.find('textarea').val();
    }
    copyText() {
        //TODO
    }
}
function generateTipElement(tip) {
    let showTipElement = $(
        `
        <div class="info-button-container">
            <button class="info-button">?</button>
        </div>
        `
    );
    showTipElement.find('.info-button').click(function(e) {
        let infoContainer = $('#info-container');
        // let top = $(this).offset().top - 12;
        // let left = $(this).offset().left + $(this).outerWidth() + 10;
        let top = $(this).offset().top + $(this).outerHeight() + 12;
        let left = $(this).offset().left + $(this).outerWidth();
        infoContainer.css({top, left});
        infoContainer.find('.info-message').html(tip);
        infoContainer.removeClass('hidden');
        e.stopPropagation();
    })
    showTipElement.find('.info-button').attr({title:"Show additional information about this field"});
    return showTipElement;
}
function addThousandSep(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


$(window).ready(function() {
    let form = $('.form');
});