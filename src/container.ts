import { ActionRowBuilder, AnyComponentBuilder, ButtonBuilder, SelectMenuBuilder } from "discord.js";

/**
 * Creates A Row.
 * Now you can use `Row(items)` instead of `new ActionRowBuilder().addComponents()`  
 * @param options 
 * @returns 
 */
export function Row<T extends AnyComponentBuilder>(items: T[]): ActionRowBuilder<T> {
    if (items.length > 5) throw new Error(`You've reached the maximum limit(5) of items per row.`);
    const row = new ActionRowBuilder<T>();
    row.setComponents(items);

    return row;
}

export class Container {
    public data: ActionRowBuilder<SelectMenuBuilder | ButtonBuilder>[] = [];

    private addRow(row: ActionRowBuilder<SelectMenuBuilder | ButtonBuilder>) {
        if (this.data.length >= 5) throw new Error(`You've reached the maximum limit(5) of rows in the message.`);
        this.data.push(row);
    }
    public addSelectMenu(menu: ActionRowBuilder<SelectMenuBuilder>): Container {
        this.addRow(menu);
        return this;
    }
    public addButtonRow(buttons: ActionRowBuilder<ButtonBuilder>): Container {
        this.addRow(buttons);
        return this;
    }
}
