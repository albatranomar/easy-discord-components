import { ActionRowBuilder, SelectMenuBuilder, StringSelectMenuOptionBuilder } from "@discordjs/builders";
import { APISelectMenuOption, APIStringSelectComponent, SelectMenuComponentOptionData } from "discord.js";

export class SelectMenu extends SelectMenuBuilder {
    public selectMenuOptions: SelectMenuComponentOptionData[] = [];

    constructor(data: Partial<APIStringSelectComponent>) {
        super(data);
    }

    public addOption(info: APISelectMenuOption | StringSelectMenuOptionBuilder): SelectMenu {
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