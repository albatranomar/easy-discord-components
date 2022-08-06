import { ActionRowBuilder, ButtonBuilder, ButtonComponentData, ComponentType } from "discord.js";

/**
 * Creates A button.
 * Now you can use `Button(options)` instead of `new ButtonBuilder(options)`  
 * @param options 
 * @returns 
 */
export function Button(options: Partial<ButtonComponentData>): ButtonBuilder {
    return (new ButtonBuilder(options));
}

export class ButtonsBox {
    public buttonBox: ActionRowBuilder<ButtonBuilder>[] = [];
    public buttonsCount = 0;
    /**
     * A button box can have up to 25 buttons
     * 5 buttuns per row
     * 5 rows per message.
     * 
     * @param buttons 
     */
    constructor(buttons?: Partial<ButtonComponentData>[]) {
        for (let i = 0; i < 5; i++) {
            this.buttonBox.push(new ActionRowBuilder<ButtonBuilder>());
        }
        if (buttons && buttons.length > 0) {
            if (buttons.length > 25) buttons = buttons.slice(0, 25);
            buttons.forEach(button => {
                this.addButton(button);
            });
        }
    }

    public addButton(options: Partial<ButtonComponentData>): ButtonsBox {
        options.type = ComponentType.Button;
        if (this.buttonsCount >= 25) {
            console.warn(`**[WARNING]** Your button box reached the limit amount of buttons.`)
        } else {
            for (let i = 0; i < this.buttonBox.length; i++) {
                let actionrow = this.buttonBox[i];
                if (actionrow.components.length < 5) {
                    this.buttonsCount++;
                    actionrow.addComponents(Button(options));
                    break;
                }
            }
        }
        return this;
    }

    public fetch(): ActionRowBuilder<ButtonBuilder>[] {
        let finalBox = [];
        for (let i = 0; i < this.buttonBox.length; i++) {
            const actionrow = this.buttonBox[i];
            if (actionrow.components.length != 0) finalBox.push(actionrow);
        }
        return finalBox;
    }
}
