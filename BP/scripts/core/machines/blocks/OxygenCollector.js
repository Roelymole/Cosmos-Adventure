import { system, ItemStack } from "@minecraft/server";
import { MachineBlockEntity } from "../MachineBlockEntity";
import { get_data } from "../../../api/utils";
import { charge_from_battery, charge_from_machine } from "../../matter/electricity";

export default class extends MachineBlockEntity {
    constructor(block, entity) {
        super(block, entity);
        if (this.entity.isValid()) this.collect_oxygen()
    }

    collect_oxygen() {
        const in_overworld = this.entity.dimension.id == "minecraft:overworld"
        const container = this.entity.getComponent('minecraft:inventory').container;
        const lore = container.getItem(3)
		const data = get_data(this.entity)
		let energy = lore ? + lore.getLore()[0] : 0
        let o2 = lore ? + lore.getLore()[1] : 0
        const space = data.o2_capacity - o2
        const speed = in_overworld && energy ? Math.min(186, space) : 0
		
		energy = charge_from_machine(this.entity, this.block, energy)
		
		energy = charge_from_battery(this.entity, energy, 0)

        if (space && energy) {
            energy -= Math.min(10, energy)
            if (system.currentTick % 20 == 0) o2 += speed
        }
        
		const counter = new ItemStack('cosmos:ui')
		counter.nameTag = `Speed ${speed}`
		container.setItem(1, counter)
		counter.nameTag = `Space ${space}`
		container.setItem(2, counter)
		counter.nameTag = ``
		counter.setLore([''+energy, ''+o2])
		container.setItem(3, counter)
    }
}

