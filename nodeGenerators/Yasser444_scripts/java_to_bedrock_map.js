const ids = {
    "galacticraftcore:basic_item:14": "cosmos:advanced_wafer",
    "galacticraftcore:basic_item:5": "cosmos:aluminum_ingot",
    "galacticraftplanets:item_basic_mars:2": "cosmos:desh_ingot",
    "galacticraftcore:advanced_metal:desh_ingot": "cosmos:desh_ingot",
    "galacticraftplanets:basic_item_venus:1": "cosmos:lead_ingot",
    "galacticraftcore:advanced_metal:lead_ingot": "cosmos:lead_ingot",
    "galacticraftplanets:item_basic_asteroids": "cosmos:titanium_ingot",
    "galacticraftcore:advanced_metal:titanium_ingot": "cosmos:titanium_ingot",
    "galacticraftcore:aluminum_wire": "cosmos:aluminum_wire_item",
    "galacticraftcore:aluminum_wire:1": "cosmos:heavy_aluminum_wire_item",
    "galacticraftcore:aluminum_wire:2": "cosmos:switchable_aluminum_wire_item",
    "galacticraftcore:aluminum_wire:3": "cosmos:switchable_heavy_aluminum_wire_item",
    "galacticraftcore:basic_item:20": "cosmos:ambient_thermal_controller",
    "galacticraftcore:basic_item:13": "cosmos:basic_wafer",
    "galacticraftcore:battery": "cosmos:battery",
    "galacticraftcore:battery:100": "cosmos:battery",
    "galacticraftplanets:atomic_battery": "cosmos:atomic_battery",
    "galacticraftplanets:item_basic_asteroids:1": "cosmos:heavy_rocket_engine",
    "galacticraftplanets:item_basic_asteroids:2": "cosmos:heavy_rocket_fins",
    "galacticraftplanets:item_basic_asteroids:3": "cosmos:iron_shard",
    "galacticraftplanets:item_basic_asteroids:4": "cosmos:titanium_shard",
    "galacticraftplanets:item_basic_mars:3": "cosmos:heavy_duty_plate_tier2",
    "galacticraftplanets:item_basic_asteroids:5": "cosmos:heavy_duty_plate_tier3",
    "galacticraftcore:advanced_metal:desh_plate": "cosmos:compressed_desh",
    "galacticraftplanets:item_basic_asteroids:6": "cosmos:compressed_titanium",
    "galacticraftcore:advanced_metal:titanium_plate": "cosmos:compressed_titanium",
    "galacticraftplanets:basic_item_venus:3": "cosmos:isothermal_fabric",
    "galacticraftplanets:item_basic_asteroids:7": "cosmos:thermal_cloth",
    "galacticraftcore:basic_item:12": "cosmos:blue_solar_wafer",
    "galacticraftcore:buggymat:1": "cosmos:buggy_seat",
    "galacticraftcore:buggymat:2": "cosmos:buggy_storage",
    "galacticraftcore:buggymat": "cosmos:buggy_wheel",
    "galacticraftcore:canvas": "cosmos:canvas",
    "galacticraftcore:cheese_curd": "cosmos:cheese_curd",
    "galacticraftcore:basic_item:8": "cosmos:compressed_aluminum",
    "galacticraftcore:basic_item:10": "cosmos:compressed_bronze",
    "galacticraftcore:basic_item:6": "cosmos:compressed_copper",
    "galacticraftcore:basic_item:11": "cosmos:compressed_iron",
    "galacticraftcore:item_basic_moon:1": "cosmos:compressed_meteoric_iron",
    "galacticraftcore:advanced_metal:meteoric_iron_plate": "cosmos:compressed_meteoric_iron",
    "galacticraftcore:basic_item:9": "cosmos:compressed_steel",
    "galacticraftcore:basic_item:7": "cosmos:compressed_tin",
    "galacticraftcore:canister:1": "cosmos:copper_canister",
    "galacticraftcore:dungeonfinder": "cosmos:dungeon_finder",
    "galacticraftcore:emergency_kit": "cosmos:emergency_kit",
    "galacticraftcore:canister:32767": "cosmos:empty_liquid_canister",
    "galacticraftcore:basic_item:19": "cosmos:frequency_module",
    "galacticraftcore:bucket_fuel": "cosmos:fuel_bucket",
    "galacticraftcore:fuel_canister_partial": "cosmos:fuel_canister",
    "galacticraftcore:fuel_canister_partial:1": "cosmos:fuel_canister",
    "galacticraftcore:glowstone_torch": "cosmos:glowstone_torch",
    "galacticraftplanets:grapple": "cosmos:grapple",
    "galacticraftcore:heavy_plating": "cosmos:heavy_duty_plate",
    "galacticraftcore:item_basic_moon:2": "cosmos:lunar_sapphire",
    "galacticraftcore:item_basic_moon": "cosmos:meteoric_iron_ingot",
    "galacticraftcore:advanced_metal:meteoric_iron_ingot": "cosmos:meteoric_iron_ingot",
    "galacticraftcore:meteoric_iron_raw": "cosmos:meteoric_raw_iron",
    "galacticraftcore:nose_cone": "cosmos:nose_cone",
    "galacticraftplanets:heavy_nose_cone": "cosmos:heavy_nose_cone",
    "galacticraftplanets:carbon_fragments": "cosmos:fragmented_carbon",
    "galacticraftcore:grating": "cosmos:grating",
    "galacticraftcore:bucket_oil": "cosmos:oil_bucket",
    "galacticraftcore:oil_canister_partial:1001": "cosmos:oil_canister",
    "galacticraftcore:oxygen_concentrator": "cosmos:oxygen_concentrator",
    "galacticraftcore:air_fan": "cosmos:oxygen_fan",
    "galacticraftcore:oxygen_gear": "cosmos:oxygen_gear",
    "galacticraftcore:oxygen_mask": "cosmos:oxygen_mask",
    "galacticraftcore:prelaunch_checklist": "cosmos:liftoff_checklist",
    "galacticraftcore:flag": "cosmos:flag",
    "galacticraftcore:oxygen_tank_heavy_full:2700": "cosmos:oxygen_tank_heavy_full",
    "galacticraftcore:oxygen_tank_light_full:900": "cosmos:oxygen_tank_light_full",
    "galacticraftcore:oxygen_tank_med_full:1800": "cosmos:oxygen_tank_med_full",
    "galacticraftcore:air_vent": "cosmos:oxygen_vent",
    "galacticraftcore:parachute": "cosmos:parachute_plain",
    "galacticraftcore:parachute:1": "cosmos:parachute_black",
    "galacticraftcore:parachute:2": "cosmos:parachute_blue",
    "galacticraftcore:parachute:4": "cosmos:parachute_brown",
    "galacticraftcore:parachute:5": "cosmos:parachute_darkblue",
    "galacticraftcore:parachute:6": "cosmos:parachute_darkgray",
    "galacticraftcore:parachute:7": "cosmos:parachute_darkgreen",
    "galacticraftcore:parachute:8": "cosmos:parachute_gray",
    "galacticraftcore:parachute:3": "cosmos:parachute_lime",
    "galacticraftcore:parachute:9": "cosmos:parachute_magenta",
    "galacticraftcore:parachute:10": "cosmos:parachute_orange",
    "galacticraftcore:parachute:11": "cosmos:parachute_pink",
    "galacticraftcore:parachute:12": "cosmos:parachute_purple",
    "galacticraftcore:parachute:13": "cosmos:parachute_red",
    "galacticraftcore:parachute:14": "cosmos:parachute_teal",
    "galacticraftcore:parachute:15": "cosmos:parachute_yellow",
    "galacticraftcore:basic_item:2": "cosmos:raw_silicon",
    "galacticraftcore:engine": "cosmos:rocket_engine",
    "galacticraftcore:rocket_fins": "cosmos:rocket_fins",
    "galacticraftcore:rocket_t1": "cosmos:rocket_tier_1_item",
    "galacticraftcore:rocket_t2": "cosmos:rocket_tier_2_item",
    "galacticraftcore:rocket_t3": "cosmos:rocket_tier_3_item",
    "galacticraftplanets:shematic:2": "cosmos:schematic_astro_miner",
    "galacticraftcore:shematic": "cosmos:schematic_buggy",
    "galacticraftplanets:shematic:1": "cosmos:schematic_rocket_cargo",
    "galacticraftcore:shematic:1": "cosmos:schematic_rocket_t2",
    "galacticraftplanets:shematic": "cosmos:schematic_rocket_t3",
    "galacticraftplanets:mars_machine": "cosmos:terraformer",
    "galacticraftplanets:mars_machine:4": "cosmos:cryogenic_chamber",
    "galacticraftplanets:mars_machine:8": "cosmos:launch_controller",
    "galacticraftplanets:item_basic_mars:1": "cosmos:desh_stick",
    "galacticraftplanets:item_basic_mars:4": "cosmos:slimeling_bag",
    "galacticraftplanets:item_basic_asteroids:8": "cosmos:beam_core",
    "galacticraftplanets:beam_receiver": "cosmos:beam_receiver",
    "galacticraftplanets:beam_reflector": "cosmos:beam_reflector",
    "galacticraftplanets:basic_item_venus:2": "cosmos:radioactive_core",
    "galacticraftplanets:basic_item_venus:5": "cosmos:solar_array_panel",
    "galacticraftplanets:miner_base": "cosmos:astro_miner_base",
    "galacticraftcore:astro_miner": "cosmos:astro_miner_item",
    "galacticraftcore:sensor_glasses": "cosmos:sensor_glasses",
    "galacticraftcore:sensor_lens": "cosmos:sensor_lens",
    "galacticraftcore:sealer": "cosmos:oxygen_sealer",
    "galacticraftcore:enclosed:1": "cosmos:sealed_fluid_pipe",
    "galacticraftcore:enclosed:14": "cosmos:sealed_aluminum_wire",
    "galacticraftcore:enclosed:15": "cosmos:sealed_heavy_aluminum_wire",
    "galacticraftplanets:orion_drive": "cosmos:orion_drive",
    "galacticraftplanets:basic_item_venus": "cosmos:shield_controller",
    "galacticraftcore:basic_item_venus:4": "cosmos:solar_dust",
    "galacticraftcore:steel_pole": "cosmos:steel_pole",
    "galacticraftcore:basic_item": "cosmos:solar_module_0",
    "galacticraftcore:basic_item:1": "cosmos:solar_module_1",
    "galacticraftcore:standard_wrench": "cosmos:standard_wrench",
    "galacticraftcore:view_screen": "cosmos:display_screen",
    "galacticraftcore:steel_axe": "cosmos:steel_axe",
    "galacticraftcore:steel_boots": "cosmos:steel_boots",
    "galacticraftcore:steel_chestplate": "cosmos:steel_chestplate",
    "galacticraftcore:steel_helmet": "cosmos:steel_helmet",
    "galacticraftcore:steel_hoe": "cosmos:steel_hoe",
    "galacticraftcore:steel_leggings": "cosmos:steel_leggings",
    "galacticraftcore:steel_pickaxe": "cosmos:steel_pickaxe",
    "galacticraftcore:steel_shovel": "cosmos:steel_shovel",
    "galacticraftcore:steel_sword": "cosmos:steel_sword",
    "galacticraftplanets:titanium_axe": "cosmos:titanium_axe",
    "galacticraftplanets:titanium_boots": "cosmos:titanium_boots",
    "galacticraftplanets:titanium_chestplate": "cosmos:titanium_chestplate",
    "galacticraftplanets:titanium_helmet": "cosmos:titanium_helmet",
    "galacticraftplanets:titanium_hoe": "cosmos:titanium_hoe",
    "galacticraftplanets:titanium_leggings": "cosmos:titanium_leggings",
    "galacticraftplanets:titanium_pickaxe": "cosmos:titanium_pickaxe",
    "galacticraftplanets:titanium_shovel": "cosmos:titanium_shovel",
    "galacticraftplanets:titanium_sword": "cosmos:titanium_sword",
    "galacticraftplanets:desh_axe": "cosmos:desh_axe",
    "galacticraftplanets:desh_boots": "cosmos:desh_boots",
    "galacticraftplanets:desh_chestplate": "cosmos:desh_chestplate",
    "galacticraftplanets:desh_helmet": "cosmos:desh_helmet",
    "galacticraftplanets:desh_hoe": "cosmos:desh_hoe",
    "galacticraftplanets:desh_leggings": "cosmos:desh_leggings",
    "galacticraftplanets:desh_pick": "cosmos:desh_pickaxe",
    "galacticraftplanets:desh_spade": "cosmos:desh_shovel",
    "galacticraftplanets:desh_sword": "cosmos:desh_sword",
    "galacticraftplanets:thermal_padding:3": "cosmos:thermal_boots",
    "galacticraftplanets:thermal_padding:1": "cosmos:thermal_chestplate",
    "galacticraftplanets:thermal_padding": "cosmos:thermal_helmet",
    "galacticraftplanets:thermal_padding:2": "cosmos:thermal_leggings",
    "galacticraftplanets:thermal_padding_t2:3": "cosmos:isothermal_boots",
    "galacticraftplanets:thermal_padding_t2:1": "cosmos:isothermal_chestplate",
    "galacticraftplanets:thermal_padding_t2": "cosmos:isothermal_helmet",
    "galacticraftplanets:thermal_padding_t2:2": "cosmos:isothermal_leggings",
    "galacticraftplanets:basic_item_venus:6": "cosmos:thin_solar_wafer",
    "galacticraftcore:engine:1": "cosmos:tier_1_booster",
    "galacticraftplanets:item_basic_mars:6": "cosmos:fluid_manifulator",
    "galacticraftcore:canister": "cosmos:tin_canister",
    "galacticraftcore:basic_item:4": "cosmos:tin_ingot",
    "galacticraftcore:basic_item:3": "minecraft:copper_ingot",

    "galacticraftcore:basic_item:15": 'cosmos:dehydrated_apple',      
    "galacticraftcore:basic_item:16": 'cosmos:dehydrated_carrot',      
    "galacticraftcore:basic_item:17": 'cosmos:dehydrated_melon',      
    "galacticraftcore:basic_item:18": 'cosmos:dehydrated_potato',      
    "galacticraftcore:food": 'cosmos:dehydrated_apple',      
    "galacticraftcore:food:1": 'cosmos:dehydrated_carrot',      
    "galacticraftcore:food:2": 'cosmos:dehydrated_melon',      
    "galacticraftcore:food:3": 'cosmos:dehydrated_potato',   
    "galacticraftcore:food:4": 'cosmos:cheese_slice',      
    "galacticraftcore:food:5": 'cosmos:burger_bun',      
    "galacticraftcore:food:6": 'cosmos:ground_beef',      
    "galacticraftcore:food:7": 'cosmos:beef_patty',      
    "galacticraftcore:food:8": 'cosmos:cheese_burger',      
    "galacticraftcore:food:9": 'cosmos:canned_beef',      

    "galacticraftcore:arclamp": 'cosmos:arc_lamp',      
    "galacticraftplanets:telepad_short": 'cosmos:telepad',      
    "galacticraftcore:panel_lighting": 'cosmos:lighting_panel',      
    "galacticraftcore:panel_lighting:1": 'cosmos:spotlight_lighting_panel',      
    "galacticraftcore:panel_lighting:2": 'cosmos:linear_lighting_panel',      
    "galacticraftcore:panel_lighting:3": 'cosmos:dark_lighting_panel',      
    "galacticraftcore:panel_lighting:4": 'cosmos:corner_lighting_panel',      
    "galacticraftplanets:solar_array_module": 'cosmos:solar_array_module',      
    "galacticraftplanets:solar_array_controller": 'cosmos:solar_array_controller',      
    "galacticraftcore:cargo": 'cosmos:cargo_loader',      
    "galacticraftcore:distributor": 'cosmos:oxygen_bubble_distributor',      
    "galacticraftcore:cargo:4": 'cosmos:cargo_unloader',      
    "galacticraftcore:cargo:4": 'cosmos:cargo_unloader',      
    "galacticraftcore:concealed_redstone": 'cosmos:incased_redstone_dust',      
    "galacticraftcore:concealed_repeater": 'cosmos:incased_redstone_repeater',      
    "galacticraftcore:emergency_box": 'cosmos:emergency_post',      
    "galacticraftcore:emergency_box:1": 'cosmos:emergency_box',      
    "galacticraftcore:dishbase": 'cosmos:communications_dish',      
    "galacticraftplanets:walkway": 'cosmos:walkway',      
    "galacticraftplanets:walkway:1": 'cosmos:wire_walkway',      
    "galacticraftplanets:walkway:2": 'cosmos:pipe_walkway',      
    "galacticraftplanets:asteroids_block": 'cosmos:asteroids_dirt',      
    "galacticraftplanets:asteroids_block:1": 'cosmos:asteroids_turf',      
    "galacticraftplanets:asteroids_block:2": 'cosmos:asteroids_rock',      
    "galacticraftcore:telemetry": 'cosmos:telemetry_unit',      
    "galacticraftcore:meteor_chunk": 'cosmos:fallen_meteor',      
    "galacticraftcore:spin_thruster": 'cosmos:spin_thruster',      
    "forge:ore_dict:stickWood": "minecraft:stick",
    "galacticraftcore:cheese": 'cosmos:cheese_block',  
    "galacticraftcore:solar": 'cosmos:basic_solar_panel',  
    "galacticraftcore:solar:4": 'cosmos:advanced_solar_panel',  
    "galacticraftcore:air_lock_frame": 'cosmos:air_lock_frame',  
    "galacticraftcore:air_lock_frame:1": 'cosmos:air_lock_controller',  
    "galacticraftcore:basic_block_core:11": 'cosmos:aluminum_block',
    "galacticraftplanets:asteroids_block:7": 'cosmos:titanium_block',
    "galacticraftcore:basic_block_core:7": 'cosmos:aluminum_ore',  
    "galacticraftcore:basic_block_core:3": 'cosmos:detailed_tin_decoration_block',
    "galacticraftplanets:mars:4": 'cosmos:mars_cobblestone',
    "galacticraftplanets:mars:7": 'cosmos:mars_dungeon_bricks',
    "galacticraftcore:basic_block_moon:3": 'cosmos:moon_dirt',
    "galacticraftcore:basic_block_core:5": "minecraft:copper_ore",
    "galacticraftcore:basic_block_core:9": "minecraft:copper_block",
    "galacticraftcore:basic_block_moon:14": 'cosmos:moon_dungeon_bricks',
    "galacticraftcore:basic_block_moon:4": 'cosmos:moon_rock',
    "galacticraftcore:basic_block_moon:5": 'cosmos:moon_turf',
    "galacticraftcore:basic_block_core:13": 'cosmos:silicon_block',
    "galacticraftcore:basic_block_core:12": 'cosmos:meteoric_iron_block',
    "galacticraftcore:basic_block_core:8": 'cosmos:silicon_ore',
    "galacticraftcore:basic_block_core:10": 'cosmos:tin_block',
    "galacticraftplanets:venus:12": 'cosmos:lead_block',
    "galacticraftplanets:mars:8": 'cosmos:desh_block',
    "galacticraftcore:basic_block_core:4": 'cosmos:tin_decoration_block',
    "galacticraftcore:basic_block_core:6": 'cosmos:tin_ore',
    "galacticraftcore:fluid_pipe": 'cosmos:fluid_pipe',
    "galacticraftcore:fluid_tank": 'cosmos:fluid_tank',
    "galacticraftcore:refinery": 'cosmos:refinery',
    "galacticraftcore:platform": 'cosmos:hydraulic_platform',
    "galacticraftcore:machine2:4": 'cosmos:circuit_fabricator',
    "galacticraftcore:machine": 'cosmos:coal_generator',
    "galacticraftplanets:geothermal_generator": 'cosmos:geothermal_generator',
    "galacticraftcore:machine:12": 'cosmos:compressor',
    "galacticraftplanets:mars_machine_t2:8": 'cosmos:water_electrolyzer',
    "galacticraftplanets:mars_machine_t2:4": 'cosmos:methane_synthesizer',
    "galacticraftplanets:mars_machine_t2": 'cosmos:gas_liquefier',
    "galacticraftcore:machine2": 'cosmos:electric_compressor',
    "galacticraftcore:machine2:12": 'cosmos:deconstructor',
    "galacticraftcore:magnetic_table": 'minecraft:crafter',
    "galacticraftcore:machine_tiered": 'cosmos:energy_storage_module',
    "galacticraftcore:machine_tiered:8": 'cosmos:energy_storage_cluster',
    "galacticraftcore:machine_tiered:4": 'cosmos:electric_furnace',
    "galacticraftplanets:atmospheric_valve": 'cosmos:atmospheric_valve',
    "galacticraftcore:machine_tiered:12": 'cosmos:electric_arc_furnace',
    "galacticraftcore:machine3": 'cosmos:chromatic_applicator',
    "galacticraftcore:machine4": 'cosmos:advanced_compressor',
    "galacticraftcore:machine2:8": 'cosmos:oxegen_storage_module',
    "galacticraftcore:collector": 'cosmos:oxygen_collector',
    "galacticraftcore:oxygen_detector": 'cosmos:oxygen_detector',
    "galacticraftcore:oxygen_compressor": 'cosmos:oxygen_compressor',
    "galacticraftcore:oxygen_compressor:4": 'cosmos:oxygen_decompressor',
    "galacticraftcore:rocket_workbench": 'cosmos:nasa_workbench',
    "galacticraftcore:fuel_loader": 'cosmos:fuel_loader',
    "galacticraftcore:landing_pad": 'cosmos:rocket_launch_pad',
    "galacticraftcore:landing_pad:1": 'cosmos:buggy_fueling_pad',
    "galacticraftcore:space_station_base": 'cosmos:space_station',
    "galacticraftcore:space_glass_clear": 'cosmos:clear_vacuum_glass',
    "galacticraftcore:space_glass_clear:1": 'cosmos:clear_tin_vacuum_glass',
    "galacticraftcore:space_glass_strong": 'cosmos:strong_vacuum_glass',
    "galacticraftcore:space_glass_strong:1": 'cosmos:strong_tin_vacuum_glass',
    "galacticraftcore:space_glass_vanilla": 'cosmos:vacuum_glass',
    "galacticraftcore:space_glass_vanilla:1": 'cosmos:tin_vacuum_glass',
    "galacticraftcore:tin_stairs_1": 'cosmos:detailed_tin_decoration_stairs',
    "galacticraftplanets:mars_stairs_cobblestone": 'cosmos:mars_cobblestone_stairs',
    "galacticraftplanets:mars_stairs_brick": 'cosmos:mars_dungeon_bricks_stairs',
    "galacticraftcore:moon_stairs_brick": 'cosmos:moon_dungeon_bricks_stairs',
    "galacticraftcore:moon_stairs_stone": 'cosmos:moon_rock_stairs',
    "galacticraftcore:tin_stairs_2": 'cosmos:tin_decoration_stairs',
    "galacticraftcore:slab_gc_half": 'cosmos:detailed_tin_decoration_slab',
    "galacticraftcore:slab_gc_half:4": 'cosmos:mars_cobblestone_slab',
    "galacticraftcore:slab_gc_half:5": 'cosmos:mars_dungeon_bricks_slab',
    "galacticraftcore:slab_gc_half:6": 'cosmos:dark_decoration_slab',
    "galacticraftcore:slab_gc_half:3": 'cosmos:moon_dungeon_bricks_slab',
    "galacticraftcore:slab_gc_half:2": 'cosmos:moon_rock_slab',
    "galacticraftcore:slab_gc_half:1": 'cosmos:tin_decoration_slab',
    "galacticraftcore:wall_gc": 'cosmos:detailed_tin_decoration_wall',
    "galacticraftcore:wall_gc:4": 'cosmos:mars_cobblestone_wall',
    "galacticraftcore:wall_gc:5": 'cosmos:mars_dungeon_bricks_wall',
    "galacticraftcore:wall_gc:3": 'cosmos:moon_dungeon_bricks_wall',
    "galacticraftcore:wall_gc:2": 'cosmos:moon_rock_wall',
    "galacticraftcore:wall_gc:1": 'cosmos:tin_decoration_wall',
    "galacticraftcore:unlit_torch": "minecraft:torch",

    "forge:ore_dict:blockIron": "minecraft:iron_block",
    "forge:ore_dict:compressedAluminum": "cosmos:compressed_aluminum",
    "forge:ore_dict:compressedBronze": "cosmos:compressed_bronze",
    "forge:ore_dict:compressedCopper": "cosmos:compressed_copper",
    "forge:ore_dict:compressedIron": "cosmos:compressed_iron",
    "forge:ore_dict:compressedMeteoricIron": "cosmos:compressed_meteoric_iron",
    "forge:ore_dict:compressedSteel": "cosmos:compressed_steel",
    "forge:ore_dict:compressedTin": "cosmos:compressed_tin",
    "forge:ore_dict:dustGlowstone": "minecraft:glowstone_dust",
    "forge:ore_dict:dustRedstone": "minecraft:redstone",
    "forge:ore_dict:dyeBlue": "minecraft:blue_dye",
    "forge:ore_dict:dyeCyan": "minecraft:cyan_dye",
    "forge:ore_dict:dyeGreen": "minecraft:green_dye",
    "forge:ore_dict:dyeLime": "minecraft:lime_dye",
    "forge:ore_dict:dyeMagenta": "minecraft:magenta_dye",
    "forge:ore_dict:dyeOrange": "minecraft:orange_dye",
    "forge:ore_dict:dyeRed": "minecraft:red_dye",
    "forge:ore_dict:dyeYellow": "minecraft:yellow_dye",
    "forge:ore_dict:foodCheese": "cosmos:cheese_slice",
    "forge:ore_dict:gemDiamond": "minecraft:diamond",
    "forge:ore_dict:ingotAluminum": "cosmos:aluminum_ingot",
    "forge:ore_dict:ingotCopper": "minecraft:copper_ingot",
    "forge:ore_dict:ingotTin": "cosmos:tin_ingot",
    "forge:ore_dict:leather": "minecraft:leather",
    "forge:ore_dict:oreCheese": "cosmos:cheese_ore",
    "forge:ore_dict:oreCoal": "minecraft:coal_ore",
    "forge:ore_dict:oreDesh": "cosmos:desh_ore",
    "forge:ore_dict:oreDiamond": "minecraft:diamond_ore",
    "forge:ore_dict:oreGold": "minecraft:gold_ore",
    "forge:ore_dict:oreIlmenite": "cosmos:ilmenite_ore",
    "forge:ore_dict:oreLapis": "minecraft:lapis_ore",
    "forge:ore_dict:oreRedstone": "minecraft:redstone_ore",
    "forge:ore_dict:slimeball": "minecraft:slime_ball",
    "forge:ore_dict:stone": "minecraft:stone",
    "forge:ore_dict:string": "minecraft:string",
    "forge:ore_dict:waferAdvanced": "cosmos:advanced_wafer",
    "forge:ore_dict:waferBasic": "cosmos:basic_wafer",
    "forge:ore_dict:waferSolar": "cosmos:blue_solar_wafer",
    "forge:ore_dict:waferSolarThin": "cosmos:thin_solar_wafer",
    "galacticraftcore:item_silicon": "cosmos:raw_silicon",
}

module.exports = {ids}