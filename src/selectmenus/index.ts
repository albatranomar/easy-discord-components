import { ActionRowBuilder, SelectMenuBuilder, SelectMenuComponentData, SelectMenuComponentOptionData } from "discord.js";

export class SelectMenu extends SelectMenuBuilder {
    public selectMenuOptions: SelectMenuComponentOptionData[] = [];

    constructor(data: Partial<SelectMenuComponentData>) {
        super(data);
    }

    public addOption(info: SelectMenuComponentOptionData): SelectMenu {
        return this.addOptions([info]);
    }

    public get fetch(): ActionRowBuilder<SelectMenuBuilder> {
        let selectMenu = new ActionRowBuilder<SelectMenuBuilder>()
            .addComponents(
                new SelectMenuBuilder(this.data)
                    .setOptions(this.options)
            );
        return selectMenu;
    }
}