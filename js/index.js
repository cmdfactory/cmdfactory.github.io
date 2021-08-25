import { allCommands } from '../data/data.js';
import Form from './form.js';

$(window).ready(function() {
    //! generate a list of commands
    let commandListPlanned = $('body > .command-list-container .command-list:not(.planned)');
    let commandList = $('body > .command-list-container .command-list.planned');
    Object.keys(allCommands).forEach(cmd => {
        const cmdData = allCommands[cmd];
        let cmdEl = $(`
        <div class="command-item unselectable">/${cmd}</div>
        `)
        if (cmdData.planned) {
            commandList.append(cmdEl);
        }
        else {
            commandListPlanned.append(cmdEl);
        }
        cmdEl.click(function() {
            let $body = $(document.body);
            $body.children('.generator-container').remove();
            new Form( allCommands.playsound ).addToDOM($body);
        })
    });
    //! generate a list of commands
    let infoContainer = $('#info-container');
    infoContainer.find('.close').click(function () {
        infoContainer.addClass('hidden');
    });
    $(window).click(function(e) {
        if (!$(e.target).parent('.info-container')[0]) {
            infoContainer.addClass('hidden');
        }
    })
});