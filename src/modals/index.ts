import { ActionRowBuilder, ModalBuilder, TextInputBuilder, TextInputStyle } from "discord.js";

export class Modal extends ModalBuilder {
    public rows: ActionRowBuilder<TextInputBuilder>[] = [];
    /**
     * You can have a maximum of five TextInputs per modal one in each row. Currently, you cannot use SelectMenuBuilders or ButtonBuilders in modal action rows builders.
     */
    constructor() {
        super();
    }
    /**
     * 
     * @param options 
     * @returns 
     */
    addTextInput(options: TextInputOptions): Modal {
        let input = new TextInputBuilder({
            customId: options.customId,
            label: options.label,
            style: options.style,
            value: options.value,
            placeholder: options.placeholder,
            required: options.required,
            maxLength: options.length?.max,
            minLength: options.length?.min
        });

        // because discord modal has limited width we need to make a row for each text input
        // maybe later we can make this code even better
        let row = new ActionRowBuilder<TextInputBuilder>().addComponents(input)

        if (this.rows.length >= 5)
            throw new Error(`You've reached the maximum limit(5) of text inputs in the modal.`);


        this.rows.push(row);

        this.setComponents(...this.rows);
        return this;
    }
}

export interface TextInputOptions {
    customId: string,
    label: string,
    style: TextInputStyle,
    value?: string,
    placeholder?: string,
    required?: boolean,
    length?: {
        max?: number,
        min?: number
    }
}