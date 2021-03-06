// TEMPLATE OBJECTS
// objects or arrays that are used or referenced to many times
export const itemGroups = {};
{
    itemGroups.swords = [
        'wooden_sword',
        'stone_sword',
        'iron_sword',
        'golden_sword',
        'diamond_sword',
        'netherite_sword',
    ];
    itemGroups.axes = [
        'wooden_axe',
        'stone_axe',
        'iron_axe',
        'golden_axe',
        'diamond_axe',
        'netherite_axe',
    ];
    itemGroups.melee_weapons = [
        ...itemGroups.swords,
        ...itemGroups.axes,
    ];
    itemGroups.mining_tools = [
        ...itemGroups.axes,
        'wooden_pickaxe',
        'stone_pickaxe',
        'iron_pickaxe',
        'golden_pickaxe',
        'diamond_pickaxe',
        'netherite_pickaxe',
        'wooden_shovel',
        'stone_shovel',
        'iron_shovel',
        'golden_shovel',
        'diamond_shovel',
        'netherite_shovel',
    ];
    itemGroups.efficiency_tools = [
        ...itemGroups.mining_tools,
        'shears',
    ];
    itemGroups.helmets = [
        'leather_helmet',
        'chainmail_helmet',
        'iron_helmet',
        'golden_helmet',
        'diamond_helmet',
        'netherite_helmet',
        'turtle_shell'
    ];
    itemGroups.boots = [
        'leather_boots',
        'chainmail_boots',
        'iron_boots',
        'golden_boots',
        'diamond_boots',
        'netherite_boots',
    ];
    itemGroups.chestplates = [
        'leather_chestplate',
        'chainmail_chestplate',
        'iron_chestplate',
        'golden_chestplate',
        'diamond_chestplate',
        'netherite_chestplate',
    ];
    itemGroups.armor = [
        ...itemGroups.helmets,
        ...itemGroups.chestplates,
        ...itemGroups.boots,
        'leather_leggings',
        'chainmail_leggings',
        'iron_leggings',
        'golden_leggings',
        'diamond_leggings',
        'netherite_leggings',
    ];
    itemGroups.heads = [
        'skeleton_skull',
        'wither_skeleton_skull',
        'zombie_head',
        'player_head',
        'creeper_head',
        'dragon_head',
    ];
    itemGroups.wearables = [
        ...itemGroups.armor,
        ...itemGroups.heads,
        'elytra',
        'carved_pumpkin',
    ];
    itemGroups.durability_items = [
        ...itemGroups.armor,
        ...itemGroups.efficiency_tools,
        'fishing_rod',
        'bow',
        'crossbow',
        'flint_and_steel',
        'carrot_on_a_stick',
        'warped_fungus_on_a_stick',
        'shield',
        'elytra',
        'trident',
    ];
    itemGroups.enchantables = [
        ...itemGroups.durability_items,
        ...itemGroups.wearables,
    ];
}
export const unsetOption = ['unset', null];
export const intLimit = 2_147_483_647;
export const floatLimit = 340_282_356_779_733_661_637_539_395_458_142_568_447.9;

// GAMEMODES
export const allGameModes = [
    'survival',
    'creative',
    'adventure',
    'spectator',
];

// COLORS
export const allBasicColors = [
    "black",
    "dark_blue",
    "dark_green",
    "dark_aqua",
    "dark_red",
    "dark_purple",
    "gold",
    "gray",
    "dark_gray",
    "blue",
    "green",
    "aqua",
    "red",
    "light_purple",
    "yellow",
    "white",
];

// BLOCKS AND BLOCK STATES
export const allBlocks = [
    "air",
    "stone",
    "granite",
    "polished_granite",
    "diorite",
    "polished_diorite",
    "andesite",
    "polished_andesite",
    "grass_block",
    "dirt",
    "coarse_dirt",
    "podzol",
    "cobblestone",
    "oak_planks",
    "spruce_planks",
    "birch_planks",
    "jungle_planks",
    "acacia_planks",
    "dark_oak_planks",
    "oak_sapling",
    "spruce_sapling",
    "birch_sapling",
    "jungle_sapling",
    "acacia_sapling",
    "dark_oak_sapling",
    "bedrock",
    "water",
    "lava",
    "sand",
    "red_sand",
    "gravel",
    "gold_ore",
    "deepslate_gold_ore",
    "iron_ore",
    "deepslate_iron_ore",
    "coal_ore",
    "deepslate_coal_ore",
    "nether_gold_ore",
    "oak_log",
    "spruce_log",
    "birch_log",
    "jungle_log",
    "acacia_log",
    "dark_oak_log",
    "stripped_spruce_log",
    "stripped_birch_log",
    "stripped_jungle_log",
    "stripped_acacia_log",
    "stripped_dark_oak_log",
    "stripped_oak_log",
    "oak_wood",
    "spruce_wood",
    "birch_wood",
    "jungle_wood",
    "acacia_wood",
    "dark_oak_wood",
    "stripped_oak_wood",
    "stripped_spruce_wood",
    "stripped_birch_wood",
    "stripped_jungle_wood",
    "stripped_acacia_wood",
    "stripped_dark_oak_wood",
    "oak_leaves",
    "spruce_leaves",
    "birch_leaves",
    "jungle_leaves",
    "acacia_leaves",
    "dark_oak_leaves",
    "azalea_leaves",
    "flowering_azalea_leaves",
    "sponge",
    "wet_sponge",
    "glass",
    "lapis_ore",
    "deepslate_lapis_ore",
    "lapis_block",
    "dispenser",
    "sandstone",
    "chiseled_sandstone",
    "cut_sandstone",
    "note_block",
    "white_bed",
    "orange_bed",
    "magenta_bed",
    "light_blue_bed",
    "yellow_bed",
    "lime_bed",
    "pink_bed",
    "gray_bed",
    "light_gray_bed",
    "cyan_bed",
    "purple_bed",
    "blue_bed",
    "brown_bed",
    "green_bed",
    "red_bed",
    "black_bed",
    "powered_rail",
    "detector_rail",
    "sticky_piston",
    "cobweb",
    "grass",
    "fern",
    "dead_bush",
    "seagrass",
    "tall_seagrass",
    "piston",
    "piston_head",
    "white_wool",
    "orange_wool",
    "magenta_wool",
    "light_blue_wool",
    "yellow_wool",
    "lime_wool",
    "pink_wool",
    "gray_wool",
    "light_gray_wool",
    "cyan_wool",
    "purple_wool",
    "blue_wool",
    "brown_wool",
    "green_wool",
    "red_wool",
    "black_wool",
    "moving_piston",
    "dandelion",
    "poppy",
    "blue_orchid",
    "allium",
    "azure_bluet",
    "red_tulip",
    "orange_tulip",
    "white_tulip",
    "pink_tulip",
    "oxeye_daisy",
    "cornflower",
    "wither_rose",
    "lily_of_the_valley",
    "brown_mushroom",
    "red_mushroom",
    "gold_block",
    "iron_block",
    "bricks",
    "tnt",
    "bookshelf",
    "mossy_cobblestone",
    "obsidian",
    "torch",
    "wall_torch",
    "fire",
    "soul_fire",
    "spawner",
    "oak_stairs",
    "chest",
    "redstone_wire",
    "diamond_ore",
    "deepslate_diamond_ore",
    "diamond_block",
    "crafting_table",
    "wheat",
    "farmland",
    "furnace",
    "oak_sign",
    "spruce_sign",
    "birch_sign",
    "acacia_sign",
    "jungle_sign",
    "dark_oak_sign",
    "oak_door",
    "ladder",
    "rail",
    "cobblestone_stairs",
    "oak_wall_sign",
    "spruce_wall_sign",
    "birch_wall_sign",
    "acacia_wall_sign",
    "jungle_wall_sign",
    "dark_oak_wall_sign",
    "lever",
    "stone_pressure_plate",
    "iron_door",
    "oak_pressure_plate",
    "spruce_pressure_plate",
    "birch_pressure_plate",
    "jungle_pressure_plate",
    "acacia_pressure_plate",
    "dark_oak_pressure_plate",
    "redstone_ore",
    "deepslate_redstone_ore",
    "redstone_torch",
    "redstone_wall_torch",
    "stone_button",
    "snow",
    "ice",
    "snow_block",
    "cactus",
    "clay",
    "sugar_cane",
    "jukebox",
    "oak_fence",
    "pumpkin",
    "netherrack",
    "soul_sand",
    "soul_soil",
    "basalt",
    "polished_basalt",
    "soul_torch",
    "soul_wall_torch",
    "glowstone",
    "nether_portal",
    "carved_pumpkin",
    "jack_o_lantern",
    "cake",
    "repeater",
    "white_stained_glass",
    "orange_stained_glass",
    "magenta_stained_glass",
    "light_blue_stained_glass",
    "yellow_stained_glass",
    "lime_stained_glass",
    "pink_stained_glass",
    "gray_stained_glass",
    "light_gray_stained_glass",
    "cyan_stained_glass",
    "purple_stained_glass",
    "blue_stained_glass",
    "brown_stained_glass",
    "green_stained_glass",
    "red_stained_glass",
    "black_stained_glass",
    "oak_trapdoor",
    "spruce_trapdoor",
    "birch_trapdoor",
    "jungle_trapdoor",
    "acacia_trapdoor",
    "dark_oak_trapdoor",
    "stone_bricks",
    "mossy_stone_bricks",
    "cracked_stone_bricks",
    "chiseled_stone_bricks",
    "infested_stone",
    "infested_cobblestone",
    "infested_stone_bricks",
    "infested_mossy_stone_bricks",
    "infested_cracked_stone_bricks",
    "infested_chiseled_stone_bricks",
    "brown_mushroom_block",
    "red_mushroom_block",
    "mushroom_stem",
    "iron_bars",
    "chain",
    "glass_pane",
    "melon",
    "attached_pumpkin_stem",
    "attached_melon_stem",
    "pumpkin_stem",
    "melon_stem",
    "vine",
    "glow_lichen",
    "oak_fence_gate",
    "brick_stairs",
    "stone_brick_stairs",
    "mycelium",
    "lily_pad",
    "nether_bricks",
    "nether_brick_fence",
    "nether_brick_stairs",
    "nether_wart",
    "enchanting_table",
    "brewing_stand",
    "cauldron",
    "water_cauldron",
    "lava_cauldron",
    "powder_snow_cauldron",
    "end_portal",
    "end_portal_frame",
    "end_stone",
    "dragon_egg",
    "redstone_lamp",
    "cocoa",
    "sandstone_stairs",
    "emerald_ore",
    "deepslate_emerald_ore",
    "ender_chest",
    "tripwire_hook",
    "tripwire",
    "emerald_block",
    "spruce_stairs",
    "birch_stairs",
    "jungle_stairs",
    "command_block",
    "beacon",
    "cobblestone_wall",
    "mossy_cobblestone_wall",
    "flower_pot",
    "potted_oak_sapling",
    "potted_spruce_sapling",
    "potted_birch_sapling",
    "potted_jungle_sapling",
    "potted_acacia_sapling",
    "potted_dark_oak_sapling",
    "potted_fern",
    "potted_dandelion",
    "potted_poppy",
    "potted_blue_orchid",
    "potted_allium",
    "potted_azure_bluet",
    "potted_red_tulip",
    "potted_orange_tulip",
    "potted_white_tulip",
    "potted_pink_tulip",
    "potted_oxeye_daisy",
    "potted_cornflower",
    "potted_lily_of_the_valley",
    "potted_wither_rose",
    "potted_red_mushroom",
    "potted_brown_mushroom",
    "potted_dead_bush",
    "potted_cactus",
    "carrots",
    "potatoes",
    "oak_button",
    "spruce_button",
    "birch_button",
    "jungle_button",
    "acacia_button",
    "dark_oak_button",
    "skeleton_skull",
    "skeleton_wall_skull",
    "wither_skeleton_skull",
    "wither_skeleton_wall_skull",
    "zombie_head",
    "zombie_wall_head",
    "player_head",
    "player_wall_head",
    "creeper_head",
    "creeper_wall_head",
    "dragon_head",
    "dragon_wall_head",
    "anvil",
    "chipped_anvil",
    "damaged_anvil",
    "trapped_chest",
    "light_weighted_pressure_plate",
    "heavy_weighted_pressure_plate",
    "comparator",
    "daylight_detector",
    "redstone_block",
    "nether_quartz_ore",
    "hopper",
    "quartz_block",
    "chiseled_quartz_block",
    "quartz_pillar",
    "quartz_stairs",
    "activator_rail",
    "dropper",
    "white_terracotta",
    "orange_terracotta",
    "magenta_terracotta",
    "light_blue_terracotta",
    "yellow_terracotta",
    "lime_terracotta",
    "pink_terracotta",
    "gray_terracotta",
    "light_gray_terracotta",
    "cyan_terracotta",
    "purple_terracotta",
    "blue_terracotta",
    "brown_terracotta",
    "green_terracotta",
    "red_terracotta",
    "black_terracotta",
    "white_stained_glass_pane",
    "orange_stained_glass_pane",
    "magenta_stained_glass_pane",
    "light_blue_stained_glass_pane",
    "yellow_stained_glass_pane",
    "lime_stained_glass_pane",
    "pink_stained_glass_pane",
    "gray_stained_glass_pane",
    "light_gray_stained_glass_pane",
    "cyan_stained_glass_pane",
    "purple_stained_glass_pane",
    "blue_stained_glass_pane",
    "brown_stained_glass_pane",
    "green_stained_glass_pane",
    "red_stained_glass_pane",
    "black_stained_glass_pane",
    "acacia_stairs",
    "dark_oak_stairs",
    "slime_block",
    "barrier",
    "light",
    "iron_trapdoor",
    "prismarine",
    "prismarine_bricks",
    "dark_prismarine",
    "prismarine_stairs",
    "prismarine_brick_stairs",
    "dark_prismarine_stairs",
    "prismarine_slab",
    "prismarine_brick_slab",
    "dark_prismarine_slab",
    "sea_lantern",
    "hay_block",
    "white_carpet",
    "orange_carpet",
    "magenta_carpet",
    "light_blue_carpet",
    "yellow_carpet",
    "lime_carpet",
    "pink_carpet",
    "gray_carpet",
    "light_gray_carpet",
    "cyan_carpet",
    "purple_carpet",
    "blue_carpet",
    "brown_carpet",
    "green_carpet",
    "red_carpet",
    "black_carpet",
    "terracotta",
    "coal_block",
    "packed_ice",
    "sunflower",
    "lilac",
    "rose_bush",
    "peony",
    "tall_grass",
    "large_fern",
    "white_banner",
    "orange_banner",
    "magenta_banner",
    "light_blue_banner",
    "yellow_banner",
    "lime_banner",
    "pink_banner",
    "gray_banner",
    "light_gray_banner",
    "cyan_banner",
    "purple_banner",
    "blue_banner",
    "brown_banner",
    "green_banner",
    "red_banner",
    "black_banner",
    "white_wall_banner",
    "orange_wall_banner",
    "magenta_wall_banner",
    "light_blue_wall_banner",
    "yellow_wall_banner",
    "lime_wall_banner",
    "pink_wall_banner",
    "gray_wall_banner",
    "light_gray_wall_banner",
    "cyan_wall_banner",
    "purple_wall_banner",
    "blue_wall_banner",
    "brown_wall_banner",
    "green_wall_banner",
    "red_wall_banner",
    "black_wall_banner",
    "red_sandstone",
    "chiseled_red_sandstone",
    "cut_red_sandstone",
    "red_sandstone_stairs",
    "oak_slab",
    "spruce_slab",
    "birch_slab",
    "jungle_slab",
    "acacia_slab",
    "dark_oak_slab",
    "stone_slab",
    "smooth_stone_slab",
    "sandstone_slab",
    "cut_sandstone_slab",
    "petrified_oak_slab",
    "cobblestone_slab",
    "brick_slab",
    "stone_brick_slab",
    "nether_brick_slab",
    "quartz_slab",
    "red_sandstone_slab",
    "cut_red_sandstone_slab",
    "purpur_slab",
    "smooth_stone",
    "smooth_sandstone",
    "smooth_quartz",
    "smooth_red_sandstone",
    "spruce_fence_gate",
    "birch_fence_gate",
    "jungle_fence_gate",
    "acacia_fence_gate",
    "dark_oak_fence_gate",
    "spruce_fence",
    "birch_fence",
    "jungle_fence",
    "acacia_fence",
    "dark_oak_fence",
    "spruce_door",
    "birch_door",
    "jungle_door",
    "acacia_door",
    "dark_oak_door",
    "end_rod",
    "chorus_plant",
    "chorus_flower",
    "purpur_block",
    "purpur_pillar",
    "purpur_stairs",
    "end_stone_bricks",
    "beetroots",
    "dirt_path",
    "end_gateway",
    "repeating_command_block",
    "chain_command_block",
    "frosted_ice",
    "magma_block",
    "nether_wart_block",
    "red_nether_bricks",
    "bone_block",
    "structure_void",
    "observer",
    "shulker_box",
    "white_shulker_box",
    "orange_shulker_box",
    "magenta_shulker_box",
    "light_blue_shulker_box",
    "yellow_shulker_box",
    "lime_shulker_box",
    "pink_shulker_box",
    "gray_shulker_box",
    "light_gray_shulker_box",
    "cyan_shulker_box",
    "purple_shulker_box",
    "blue_shulker_box",
    "brown_shulker_box",
    "green_shulker_box",
    "red_shulker_box",
    "black_shulker_box",
    "white_glazed_terracotta",
    "orange_glazed_terracotta",
    "magenta_glazed_terracotta",
    "light_blue_glazed_terracotta",
    "yellow_glazed_terracotta",
    "lime_glazed_terracotta",
    "pink_glazed_terracotta",
    "gray_glazed_terracotta",
    "light_gray_glazed_terracotta",
    "cyan_glazed_terracotta",
    "purple_glazed_terracotta",
    "blue_glazed_terracotta",
    "brown_glazed_terracotta",
    "green_glazed_terracotta",
    "red_glazed_terracotta",
    "black_glazed_terracotta",
    "white_concrete",
    "orange_concrete",
    "magenta_concrete",
    "light_blue_concrete",
    "yellow_concrete",
    "lime_concrete",
    "pink_concrete",
    "gray_concrete",
    "light_gray_concrete",
    "cyan_concrete",
    "purple_concrete",
    "blue_concrete",
    "brown_concrete",
    "green_concrete",
    "red_concrete",
    "black_concrete",
    "white_concrete_powder",
    "orange_concrete_powder",
    "magenta_concrete_powder",
    "light_blue_concrete_powder",
    "yellow_concrete_powder",
    "lime_concrete_powder",
    "pink_concrete_powder",
    "gray_concrete_powder",
    "light_gray_concrete_powder",
    "cyan_concrete_powder",
    "purple_concrete_powder",
    "blue_concrete_powder",
    "brown_concrete_powder",
    "green_concrete_powder",
    "red_concrete_powder",
    "black_concrete_powder",
    "kelp",
    "kelp_plant",
    "dried_kelp_block",
    "turtle_egg",
    "dead_tube_coral_block",
    "dead_brain_coral_block",
    "dead_bubble_coral_block",
    "dead_fire_coral_block",
    "dead_horn_coral_block",
    "tube_coral_block",
    "brain_coral_block",
    "bubble_coral_block",
    "fire_coral_block",
    "horn_coral_block",
    "dead_tube_coral",
    "dead_brain_coral",
    "dead_bubble_coral",
    "dead_fire_coral",
    "dead_horn_coral",
    "tube_coral",
    "brain_coral",
    "bubble_coral",
    "fire_coral",
    "horn_coral",
    "dead_tube_coral_fan",
    "dead_brain_coral_fan",
    "dead_bubble_coral_fan",
    "dead_fire_coral_fan",
    "dead_horn_coral_fan",
    "tube_coral_fan",
    "brain_coral_fan",
    "bubble_coral_fan",
    "fire_coral_fan",
    "horn_coral_fan",
    "dead_tube_coral_wall_fan",
    "dead_brain_coral_wall_fan",
    "dead_bubble_coral_wall_fan",
    "dead_fire_coral_wall_fan",
    "dead_horn_coral_wall_fan",
    "tube_coral_wall_fan",
    "brain_coral_wall_fan",
    "bubble_coral_wall_fan",
    "fire_coral_wall_fan",
    "horn_coral_wall_fan",
    "sea_pickle",
    "blue_ice",
    "conduit",
    "bamboo_sapling",
    "bamboo",
    "potted_bamboo",
    "void_air",
    "cave_air",
    "bubble_column",
    "polished_granite_stairs",
    "smooth_red_sandstone_stairs",
    "mossy_stone_brick_stairs",
    "polished_diorite_stairs",
    "mossy_cobblestone_stairs",
    "end_stone_brick_stairs",
    "stone_stairs",
    "smooth_sandstone_stairs",
    "smooth_quartz_stairs",
    "granite_stairs",
    "andesite_stairs",
    "red_nether_brick_stairs",
    "polished_andesite_stairs",
    "diorite_stairs",
    "polished_granite_slab",
    "smooth_red_sandstone_slab",
    "mossy_stone_brick_slab",
    "polished_diorite_slab",
    "mossy_cobblestone_slab",
    "end_stone_brick_slab",
    "smooth_sandstone_slab",
    "smooth_quartz_slab",
    "granite_slab",
    "andesite_slab",
    "red_nether_brick_slab",
    "polished_andesite_slab",
    "diorite_slab",
    "brick_wall",
    "prismarine_wall",
    "red_sandstone_wall",
    "mossy_stone_brick_wall",
    "granite_wall",
    "stone_brick_wall",
    "nether_brick_wall",
    "andesite_wall",
    "red_nether_brick_wall",
    "sandstone_wall",
    "end_stone_brick_wall",
    "diorite_wall",
    "scaffolding",
    "loom",
    "barrel",
    "smoker",
    "blast_furnace",
    "cartography_table",
    "fletching_table",
    "grindstone",
    "lectern",
    "smithing_table",
    "stonecutter",
    "bell",
    "lantern",
    "soul_lantern",
    "campfire",
    "soul_campfire",
    "sweet_berry_bush",
    "warped_stem",
    "stripped_warped_stem",
    "warped_hyphae",
    "stripped_warped_hyphae",
    "warped_nylium",
    "warped_fungus",
    "warped_wart_block",
    "warped_roots",
    "nether_sprouts",
    "crimson_stem",
    "stripped_crimson_stem",
    "crimson_hyphae",
    "stripped_crimson_hyphae",
    "crimson_nylium",
    "crimson_fungus",
    "shroomlight",
    "weeping_vines",
    "weeping_vines_plant",
    "twisting_vines",
    "twisting_vines_plant",
    "crimson_roots",
    "crimson_planks",
    "warped_planks",
    "crimson_slab",
    "warped_slab",
    "crimson_pressure_plate",
    "warped_pressure_plate",
    "crimson_fence",
    "warped_fence",
    "crimson_trapdoor",
    "warped_trapdoor",
    "crimson_fence_gate",
    "warped_fence_gate",
    "crimson_stairs",
    "warped_stairs",
    "crimson_button",
    "warped_button",
    "crimson_door",
    "warped_door",
    "crimson_sign",
    "warped_sign",
    "crimson_wall_sign",
    "warped_wall_sign",
    "structure_block",
    "jigsaw",
    "composter",
    "target",
    "bee_nest",
    "beehive",
    "honey_block",
    "honeycomb_block",
    "netherite_block",
    "ancient_debris",
    "crying_obsidian",
    "respawn_anchor",
    "potted_crimson_fungus",
    "potted_warped_fungus",
    "potted_crimson_roots",
    "potted_warped_roots",
    "lodestone",
    "blackstone",
    "blackstone_stairs",
    "blackstone_wall",
    "blackstone_slab",
    "polished_blackstone",
    "polished_blackstone_bricks",
    "cracked_polished_blackstone_bricks",
    "chiseled_polished_blackstone",
    "polished_blackstone_brick_slab",
    "polished_blackstone_brick_stairs",
    "polished_blackstone_brick_wall",
    "gilded_blackstone",
    "polished_blackstone_stairs",
    "polished_blackstone_slab",
    "polished_blackstone_pressure_plate",
    "polished_blackstone_button",
    "polished_blackstone_wall",
    "chiseled_nether_bricks",
    "cracked_nether_bricks",
    "quartz_bricks",
    "candle",
    "white_candle",
    "orange_candle",
    "magenta_candle",
    "light_blue_candle",
    "yellow_candle",
    "lime_candle",
    "pink_candle",
    "gray_candle",
    "light_gray_candle",
    "cyan_candle",
    "purple_candle",
    "blue_candle",
    "brown_candle",
    "green_candle",
    "red_candle",
    "black_candle",
    "candle_cake",
    "white_candle_cake",
    "orange_candle_cake",
    "magenta_candle_cake",
    "light_blue_candle_cake",
    "yellow_candle_cake",
    "lime_candle_cake",
    "pink_candle_cake",
    "gray_candle_cake",
    "light_gray_candle_cake",
    "cyan_candle_cake",
    "purple_candle_cake",
    "blue_candle_cake",
    "brown_candle_cake",
    "green_candle_cake",
    "red_candle_cake",
    "black_candle_cake",
    "amethyst_block",
    "budding_amethyst",
    "amethyst_cluster",
    "large_amethyst_bud",
    "medium_amethyst_bud",
    "small_amethyst_bud",
    "tuff",
    "calcite",
    "tinted_glass",
    "powder_snow",
    "sculk_sensor",
    "oxidized_copper",
    "weathered_copper",
    "exposed_copper",
    "copper_block",
    "copper_ore",
    "deepslate_copper_ore",
    "oxidized_cut_copper",
    "weathered_cut_copper",
    "exposed_cut_copper",
    "cut_copper",
    "oxidized_cut_copper_stairs",
    "weathered_cut_copper_stairs",
    "exposed_cut_copper_stairs",
    "cut_copper_stairs",
    "oxidized_cut_copper_slab",
    "weathered_cut_copper_slab",
    "exposed_cut_copper_slab",
    "cut_copper_slab",
    "waxed_copper_block",
    "waxed_weathered_copper",
    "waxed_exposed_copper",
    "waxed_oxidized_copper",
    "waxed_oxidized_cut_copper",
    "waxed_weathered_cut_copper",
    "waxed_exposed_cut_copper",
    "waxed_cut_copper",
    "waxed_oxidized_cut_copper_stairs",
    "waxed_weathered_cut_copper_stairs",
    "waxed_exposed_cut_copper_stairs",
    "waxed_cut_copper_stairs",
    "waxed_oxidized_cut_copper_slab",
    "waxed_weathered_cut_copper_slab",
    "waxed_exposed_cut_copper_slab",
    "waxed_cut_copper_slab",
    "lightning_rod",
    "pointed_dripstone",
    "dripstone_block",
    "cave_vines",
    "cave_vines_plant",
    "spore_blossom",
    "azalea",
    "flowering_azalea",
    "moss_carpet",
    "moss_block",
    "big_dripleaf",
    "big_dripleaf_stem",
    "small_dripleaf",
    "hanging_roots",
    "rooted_dirt",
    "deepslate",
    "cobbled_deepslate",
    "cobbled_deepslate_stairs",
    "cobbled_deepslate_slab",
    "cobbled_deepslate_wall",
    "polished_deepslate",
    "polished_deepslate_stairs",
    "polished_deepslate_slab",
    "polished_deepslate_wall",
    "deepslate_tiles",
    "deepslate_tile_stairs",
    "deepslate_tile_slab",
    "deepslate_tile_wall",
    "deepslate_bricks",
    "deepslate_brick_stairs",
    "deepslate_brick_slab",
    "deepslate_brick_wall",
    "chiseled_deepslate",
    "cracked_deepslate_bricks",
    "cracked_deepslate_tiles",
    "infested_deepslate",
    "smooth_basalt",
    "raw_iron_block",
    "raw_copper_block",
    "raw_gold_block",
    "potted_azalea_bush",
    "potted_flowering_azalea_bush"
];
export const allBlockStates = {
    "snowy": [
        [
            "true",
            "false"
        ]
    ],
    "stage": [
        [
            "0",
            "1"
        ]
    ],
    "level": [
        [
            "0",
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "10",
            "11",
            "12",
            "13",
            "14",
            "15"
        ],
        [
            "1",
            "2",
            "3"
        ],
        [
            "0",
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8"
        ]
    ],
    "axis": [
        [
            "x",
            "y",
            "z"
        ],
        [
            "x",
            "z"
        ]
    ],
    "distance": [
        [
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7"
        ],
        [
            "0",
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7"
        ]
    ],
    "persistent": [
        [
            "true",
            "false"
        ]
    ],
    "facing": [
        [
            "north",
            "east",
            "south",
            "west",
            "up",
            "down"
        ],
        [
            "north",
            "south",
            "west",
            "east"
        ],
        [
            "down",
            "north",
            "south",
            "west",
            "east"
        ]
    ],
    "triggered": [
        [
            "true",
            "false"
        ]
    ],
    "instrument": [
        [
            "harp",
            "basedrum",
            "snare",
            "hat",
            "bass",
            "flute",
            "bell",
            "guitar",
            "chime",
            "xylophone",
            "iron_xylophone",
            "cow_bell",
            "didgeridoo",
            "bit",
            "banjo",
            "pling"
        ]
    ],
    "note": [
        [
            "0",
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "10",
            "11",
            "12",
            "13",
            "14",
            "15",
            "16",
            "17",
            "18",
            "19",
            "20",
            "21",
            "22",
            "23",
            "24"
        ]
    ],
    "powered": [
        [
            "true",
            "false"
        ]
    ],
    "occupied": [
        [
            "true",
            "false"
        ]
    ],
    "part": [
        [
            "head",
            "foot"
        ]
    ],
    "shape": [
        [
            "north_south",
            "east_west",
            "ascending_east",
            "ascending_west",
            "ascending_north",
            "ascending_south"
        ],
        [
            "straight",
            "inner_left",
            "inner_right",
            "outer_left",
            "outer_right"
        ],
        [
            "north_south",
            "east_west",
            "ascending_east",
            "ascending_west",
            "ascending_north",
            "ascending_south",
            "south_east",
            "south_west",
            "north_west",
            "north_east"
        ]
    ],
    "waterlogged": [
        [
            "true",
            "false"
        ]
    ],
    "extended": [
        [
            "true",
            "false"
        ]
    ],
    "half": [
        [
            "upper",
            "lower"
        ],
        [
            "top",
            "bottom"
        ]
    ],
    "short": [
        [
            "true",
            "false"
        ]
    ],
    "type": [
        [
            "normal",
            "sticky"
        ],
        [
            "single",
            "left",
            "right"
        ],
        [
            "top",
            "bottom",
            "double"
        ]
    ],
    "unstable": [
        [
            "true",
            "false"
        ]
    ],
    "age": [
        [
            "0",
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "10",
            "11",
            "12",
            "13",
            "14",
            "15"
        ],
        [
            "0",
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7"
        ],
        [
            "0",
            "1",
            "2",
            "3"
        ],
        [
            "0",
            "1",
            "2"
        ],
        [
            "0",
            "1",
            "2",
            "3",
            "4",
            "5"
        ],
        [
            "0",
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "10",
            "11",
            "12",
            "13",
            "14",
            "15",
            "16",
            "17",
            "18",
            "19",
            "20",
            "21",
            "22",
            "23",
            "24",
            "25"
        ],
        [
            "0",
            "1"
        ]
    ],
    "east": [
        [
            "true",
            "false"
        ],
        [
            "up",
            "side",
            "none"
        ],
        [
            "none",
            "low",
            "tall"
        ]
    ],
    "north": [
        [
            "true",
            "false"
        ],
        [
            "up",
            "side",
            "none"
        ],
        [
            "none",
            "low",
            "tall"
        ]
    ],
    "south": [
        [
            "true",
            "false"
        ],
        [
            "up",
            "side",
            "none"
        ],
        [
            "none",
            "low",
            "tall"
        ]
    ],
    "up": [
        [
            "true",
            "false"
        ]
    ],
    "west": [
        [
            "true",
            "false"
        ],
        [
            "up",
            "side",
            "none"
        ],
        [
            "none",
            "low",
            "tall"
        ]
    ],
    "power": [
        [
            "0",
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "10",
            "11",
            "12",
            "13",
            "14",
            "15"
        ]
    ],
    "moisture": [
        [
            "0",
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7"
        ]
    ],
    "lit": [
        [
            "true",
            "false"
        ]
    ],
    "rotation": [
        [
            "0",
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "10",
            "11",
            "12",
            "13",
            "14",
            "15"
        ]
    ],
    "hinge": [
        [
            "left",
            "right"
        ]
    ],
    "open": [
        [
            "true",
            "false"
        ]
    ],
    "face": [
        [
            "floor",
            "wall",
            "ceiling"
        ]
    ],
    "layers": [
        [
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8"
        ]
    ],
    "has_record": [
        [
            "true",
            "false"
        ]
    ],
    "bites": [
        [
            "0",
            "1",
            "2",
            "3",
            "4",
            "5",
            "6"
        ]
    ],
    "delay": [
        [
            "1",
            "2",
            "3",
            "4"
        ]
    ],
    "locked": [
        [
            "true",
            "false"
        ]
    ],
    "down": [
        [
            "true",
            "false"
        ]
    ],
    "in_wall": [
        [
            "true",
            "false"
        ]
    ],
    "has_bottle_0": [
        [
            "true",
            "false"
        ]
    ],
    "has_bottle_1": [
        [
            "true",
            "false"
        ]
    ],
    "has_bottle_2": [
        [
            "true",
            "false"
        ]
    ],
    "eye": [
        [
            "true",
            "false"
        ]
    ],
    "attached": [
        [
            "true",
            "false"
        ]
    ],
    "disarmed": [
        [
            "true",
            "false"
        ]
    ],
    "conditional": [
        [
            "true",
            "false"
        ]
    ],
    "mode": [
        [
            "compare",
            "subtract"
        ],
        [
            "save",
            "load",
            "corner",
            "data"
        ]
    ],
    "inverted": [
        [
            "true",
            "false"
        ]
    ],
    "enabled": [
        [
            "true",
            "false"
        ]
    ],
    "eggs": [
        [
            "1",
            "2",
            "3",
            "4"
        ]
    ],
    "hatch": [
        [
            "0",
            "1",
            "2"
        ]
    ],
    "pickles": [
        [
            "1",
            "2",
            "3",
            "4"
        ]
    ],
    "leaves": [
        [
            "none",
            "small",
            "large"
        ]
    ],
    "drag": [
        [
            "true",
            "false"
        ]
    ],
    "bottom": [
        [
            "true",
            "false"
        ]
    ],
    "has_book": [
        [
            "true",
            "false"
        ]
    ],
    "attachment": [
        [
            "floor",
            "ceiling",
            "single_wall",
            "double_wall"
        ]
    ],
    "hanging": [
        [
            "true",
            "false"
        ]
    ],
    "signal_fire": [
        [
            "true",
            "false"
        ]
    ],
    "orientation": [
        [
            "down_east",
            "down_north",
            "down_south",
            "down_west",
            "up_east",
            "up_north",
            "up_south",
            "up_west",
            "west_up",
            "east_up",
            "north_up",
            "south_up"
        ]
    ],
    "honey_level": [
        [
            "0",
            "1",
            "2",
            "3",
            "4",
            "5"
        ]
    ],
    "charges": [
        [
            "0",
            "1",
            "2",
            "3",
            "4"
        ]
    ],
    "candles": [
        [
            "1",
            "2",
            "3",
            "4"
        ]
    ],
    "sculk_sensor_phase": [
        [
            "inactive",
            "active",
            "cooldown"
        ]
    ],
    "thickness": [
        [
            "tip_merge",
            "tip",
            "frustum",
            "middle",
            "base"
        ]
    ],
    "vertical_direction": [
        [
            "up",
            "down"
        ]
    ],
    "berries": [
        [
            "true",
            "false"
        ]
    ],
    "tilt": [
        [
            "none",
            "unstable",
            "partial",
            "full"
        ]
    ]
};
export const blockStatesForBlocks = {
    /*
    "block": {
        "property1": indexInAllBlockStates,
        "property2": indexInAllBlockStates,
        ...
    }
    */
    "grass_block": {
        "snowy": 0
    },
    "podzol": {
        "snowy": 0
    },
    "oak_sapling": {
        "stage": 0
    },
    "spruce_sapling": {
        "stage": 0
    },
    "birch_sapling": {
        "stage": 0
    },
    "jungle_sapling": {
        "stage": 0
    },
    "acacia_sapling": {
        "stage": 0
    },
    "dark_oak_sapling": {
        "stage": 0
    },
    "water": {
        "level": 0
    },
    "lava": {
        "level": 0
    },
    "oak_log": {
        "axis": 0
    },
    "spruce_log": {
        "axis": 0
    },
    "birch_log": {
        "axis": 0
    },
    "jungle_log": {
        "axis": 0
    },
    "acacia_log": {
        "axis": 0
    },
    "dark_oak_log": {
        "axis": 0
    },
    "stripped_spruce_log": {
        "axis": 0
    },
    "stripped_birch_log": {
        "axis": 0
    },
    "stripped_jungle_log": {
        "axis": 0
    },
    "stripped_acacia_log": {
        "axis": 0
    },
    "stripped_dark_oak_log": {
        "axis": 0
    },
    "stripped_oak_log": {
        "axis": 0
    },
    "oak_wood": {
        "axis": 0
    },
    "spruce_wood": {
        "axis": 0
    },
    "birch_wood": {
        "axis": 0
    },
    "jungle_wood": {
        "axis": 0
    },
    "acacia_wood": {
        "axis": 0
    },
    "dark_oak_wood": {
        "axis": 0
    },
    "stripped_oak_wood": {
        "axis": 0
    },
    "stripped_spruce_wood": {
        "axis": 0
    },
    "stripped_birch_wood": {
        "axis": 0
    },
    "stripped_jungle_wood": {
        "axis": 0
    },
    "stripped_acacia_wood": {
        "axis": 0
    },
    "stripped_dark_oak_wood": {
        "axis": 0
    },
    "oak_leaves": {
        "distance": 0,
        "persistent": 0
    },
    "spruce_leaves": {
        "distance": 0,
        "persistent": 0
    },
    "birch_leaves": {
        "distance": 0,
        "persistent": 0
    },
    "jungle_leaves": {
        "distance": 0,
        "persistent": 0
    },
    "acacia_leaves": {
        "distance": 0,
        "persistent": 0
    },
    "dark_oak_leaves": {
        "distance": 0,
        "persistent": 0
    },
    "azalea_leaves": {
        "distance": 0,
        "persistent": 0
    },
    "flowering_azalea_leaves": {
        "distance": 0,
        "persistent": 0
    },
    "dispenser": {
        "facing": 0,
        "triggered": 0
    },
    "note_block": {
        "instrument": 0,
        "note": 0,
        "powered": 0
    },
    "white_bed": {
        "facing": 1,
        "occupied": 0,
        "part": 0
    },
    "orange_bed": {
        "facing": 1,
        "occupied": 0,
        "part": 0
    },
    "magenta_bed": {
        "facing": 1,
        "occupied": 0,
        "part": 0
    },
    "light_blue_bed": {
        "facing": 1,
        "occupied": 0,
        "part": 0
    },
    "yellow_bed": {
        "facing": 1,
        "occupied": 0,
        "part": 0
    },
    "lime_bed": {
        "facing": 1,
        "occupied": 0,
        "part": 0
    },
    "pink_bed": {
        "facing": 1,
        "occupied": 0,
        "part": 0
    },
    "gray_bed": {
        "facing": 1,
        "occupied": 0,
        "part": 0
    },
    "light_gray_bed": {
        "facing": 1,
        "occupied": 0,
        "part": 0
    },
    "cyan_bed": {
        "facing": 1,
        "occupied": 0,
        "part": 0
    },
    "purple_bed": {
        "facing": 1,
        "occupied": 0,
        "part": 0
    },
    "blue_bed": {
        "facing": 1,
        "occupied": 0,
        "part": 0
    },
    "brown_bed": {
        "facing": 1,
        "occupied": 0,
        "part": 0
    },
    "green_bed": {
        "facing": 1,
        "occupied": 0,
        "part": 0
    },
    "red_bed": {
        "facing": 1,
        "occupied": 0,
        "part": 0
    },
    "black_bed": {
        "facing": 1,
        "occupied": 0,
        "part": 0
    },
    "powered_rail": {
        "powered": 0,
        "shape": 0,
        "waterlogged": 0
    },
    "detector_rail": {
        "powered": 0,
        "shape": 0,
        "waterlogged": 0
    },
    "sticky_piston": {
        "extended": 0,
        "facing": 0
    },
    "tall_seagrass": {
        "half": 0
    },
    "piston": {
        "extended": 0,
        "facing": 0
    },
    "piston_head": {
        "facing": 0,
        "short": 0,
        "type": 0
    },
    "moving_piston": {
        "facing": 0,
        "type": 0
    },
    "tnt": {
        "unstable": 0
    },
    "wall_torch": {
        "facing": 1
    },
    "fire": {
        "age": 0,
        "east": 0,
        "north": 0,
        "south": 0,
        "up": 0,
        "west": 0
    },
    "oak_stairs": {
        "facing": 1,
        "half": 1,
        "shape": 1,
        "waterlogged": 0
    },
    "chest": {
        "facing": 1,
        "type": 1,
        "waterlogged": 0
    },
    "redstone_wire": {
        "east": 1,
        "north": 1,
        "power": 0,
        "south": 1,
        "west": 1
    },
    "wheat": {
        "age": 1
    },
    "farmland": {
        "moisture": 0
    },
    "furnace": {
        "facing": 1,
        "lit": 0
    },
    "oak_sign": {
        "rotation": 0,
        "waterlogged": 0
    },
    "spruce_sign": {
        "rotation": 0,
        "waterlogged": 0
    },
    "birch_sign": {
        "rotation": 0,
        "waterlogged": 0
    },
    "acacia_sign": {
        "rotation": 0,
        "waterlogged": 0
    },
    "jungle_sign": {
        "rotation": 0,
        "waterlogged": 0
    },
    "dark_oak_sign": {
        "rotation": 0,
        "waterlogged": 0
    },
    "oak_door": {
        "facing": 1,
        "half": 0,
        "hinge": 0,
        "open": 0,
        "powered": 0
    },
    "ladder": {
        "facing": 1,
        "waterlogged": 0
    },
    "rail": {
        "shape": 2,
        "waterlogged": 0
    },
    "cobblestone_stairs": {
        "facing": 1,
        "half": 1,
        "shape": 1,
        "waterlogged": 0
    },
    "oak_wall_sign": {
        "facing": 1,
        "waterlogged": 0
    },
    "spruce_wall_sign": {
        "facing": 1,
        "waterlogged": 0
    },
    "birch_wall_sign": {
        "facing": 1,
        "waterlogged": 0
    },
    "acacia_wall_sign": {
        "facing": 1,
        "waterlogged": 0
    },
    "jungle_wall_sign": {
        "facing": 1,
        "waterlogged": 0
    },
    "dark_oak_wall_sign": {
        "facing": 1,
        "waterlogged": 0
    },
    "lever": {
        "face": 0,
        "facing": 1,
        "powered": 0
    },
    "stone_pressure_plate": {
        "powered": 0
    },
    "iron_door": {
        "facing": 1,
        "half": 0,
        "hinge": 0,
        "open": 0,
        "powered": 0
    },
    "oak_pressure_plate": {
        "powered": 0
    },
    "spruce_pressure_plate": {
        "powered": 0
    },
    "birch_pressure_plate": {
        "powered": 0
    },
    "jungle_pressure_plate": {
        "powered": 0
    },
    "acacia_pressure_plate": {
        "powered": 0
    },
    "dark_oak_pressure_plate": {
        "powered": 0
    },
    "redstone_ore": {
        "lit": 0
    },
    "deepslate_redstone_ore": {
        "lit": 0
    },
    "redstone_torch": {
        "lit": 0
    },
    "redstone_wall_torch": {
        "facing": 1,
        "lit": 0
    },
    "stone_button": {
        "face": 0,
        "facing": 1,
        "powered": 0
    },
    "snow": {
        "layers": 0
    },
    "cactus": {
        "age": 0
    },
    "sugar_cane": {
        "age": 0
    },
    "jukebox": {
        "has_record": 0
    },
    "oak_fence": {
        "east": 0,
        "north": 0,
        "south": 0,
        "waterlogged": 0,
        "west": 0
    },
    "basalt": {
        "axis": 0
    },
    "polished_basalt": {
        "axis": 0
    },
    "soul_wall_torch": {
        "facing": 1
    },
    "nether_portal": {
        "axis": 1
    },
    "carved_pumpkin": {
        "facing": 1
    },
    "jack_o_lantern": {
        "facing": 1
    },
    "cake": {
        "bites": 0
    },
    "repeater": {
        "delay": 0,
        "facing": 1,
        "locked": 0,
        "powered": 0
    },
    "oak_trapdoor": {
        "facing": 1,
        "half": 1,
        "open": 0,
        "powered": 0,
        "waterlogged": 0
    },
    "spruce_trapdoor": {
        "facing": 1,
        "half": 1,
        "open": 0,
        "powered": 0,
        "waterlogged": 0
    },
    "birch_trapdoor": {
        "facing": 1,
        "half": 1,
        "open": 0,
        "powered": 0,
        "waterlogged": 0
    },
    "jungle_trapdoor": {
        "facing": 1,
        "half": 1,
        "open": 0,
        "powered": 0,
        "waterlogged": 0
    },
    "acacia_trapdoor": {
        "facing": 1,
        "half": 1,
        "open": 0,
        "powered": 0,
        "waterlogged": 0
    },
    "dark_oak_trapdoor": {
        "facing": 1,
        "half": 1,
        "open": 0,
        "powered": 0,
        "waterlogged": 0
    },
    "brown_mushroom_block": {
        "down": 0,
        "east": 0,
        "north": 0,
        "south": 0,
        "up": 0,
        "west": 0
    },
    "red_mushroom_block": {
        "down": 0,
        "east": 0,
        "north": 0,
        "south": 0,
        "up": 0,
        "west": 0
    },
    "mushroom_stem": {
        "down": 0,
        "east": 0,
        "north": 0,
        "south": 0,
        "up": 0,
        "west": 0
    },
    "iron_bars": {
        "east": 0,
        "north": 0,
        "south": 0,
        "waterlogged": 0,
        "west": 0
    },
    "chain": {
        "axis": 0,
        "waterlogged": 0
    },
    "glass_pane": {
        "east": 0,
        "north": 0,
        "south": 0,
        "waterlogged": 0,
        "west": 0
    },
    "attached_pumpkin_stem": {
        "facing": 1
    },
    "attached_melon_stem": {
        "facing": 1
    },
    "pumpkin_stem": {
        "age": 1
    },
    "melon_stem": {
        "age": 1
    },
    "vine": {
        "east": 0,
        "north": 0,
        "south": 0,
        "up": 0,
        "west": 0
    },
    "glow_lichen": {
        "down": 0,
        "east": 0,
        "north": 0,
        "south": 0,
        "up": 0,
        "waterlogged": 0,
        "west": 0
    },
    "oak_fence_gate": {
        "facing": 1,
        "in_wall": 0,
        "open": 0,
        "powered": 0
    },
    "brick_stairs": {
        "facing": 1,
        "half": 1,
        "shape": 1,
        "waterlogged": 0
    },
    "stone_brick_stairs": {
        "facing": 1,
        "half": 1,
        "shape": 1,
        "waterlogged": 0
    },
    "mycelium": {
        "snowy": 0
    },
    "nether_brick_fence": {
        "east": 0,
        "north": 0,
        "south": 0,
        "waterlogged": 0,
        "west": 0
    },
    "nether_brick_stairs": {
        "facing": 1,
        "half": 1,
        "shape": 1,
        "waterlogged": 0
    },
    "nether_wart": {
        "age": 2
    },
    "brewing_stand": {
        "has_bottle_0": 0,
        "has_bottle_1": 0,
        "has_bottle_2": 0
    },
    "water_cauldron": {
        "level": 1
    },
    "powder_snow_cauldron": {
        "level": 1
    },
    "end_portal_frame": {
        "eye": 0,
        "facing": 1
    },
    "redstone_lamp": {
        "lit": 0
    },
    "cocoa": {
        "age": 3,
        "facing": 1
    },
    "sandstone_stairs": {
        "facing": 1,
        "half": 1,
        "shape": 1,
        "waterlogged": 0
    },
    "ender_chest": {
        "facing": 1,
        "waterlogged": 0
    },
    "tripwire_hook": {
        "attached": 0,
        "facing": 1,
        "powered": 0
    },
    "tripwire": {
        "attached": 0,
        "disarmed": 0,
        "east": 0,
        "north": 0,
        "powered": 0,
        "south": 0,
        "west": 0
    },
    "spruce_stairs": {
        "facing": 1,
        "half": 1,
        "shape": 1,
        "waterlogged": 0
    },
    "birch_stairs": {
        "facing": 1,
        "half": 1,
        "shape": 1,
        "waterlogged": 0
    },
    "jungle_stairs": {
        "facing": 1,
        "half": 1,
        "shape": 1,
        "waterlogged": 0
    },
    "command_block": {
        "conditional": 0,
        "facing": 0
    },
    "cobblestone_wall": {
        "east": 2,
        "north": 2,
        "south": 2,
        "up": 0,
        "waterlogged": 0,
        "west": 2
    },
    "mossy_cobblestone_wall": {
        "east": 2,
        "north": 2,
        "south": 2,
        "up": 0,
        "waterlogged": 0,
        "west": 2
    },
    "carrots": {
        "age": 1
    },
    "potatoes": {
        "age": 1
    },
    "oak_button": {
        "face": 0,
        "facing": 1,
        "powered": 0
    },
    "spruce_button": {
        "face": 0,
        "facing": 1,
        "powered": 0
    },
    "birch_button": {
        "face": 0,
        "facing": 1,
        "powered": 0
    },
    "jungle_button": {
        "face": 0,
        "facing": 1,
        "powered": 0
    },
    "acacia_button": {
        "face": 0,
        "facing": 1,
        "powered": 0
    },
    "dark_oak_button": {
        "face": 0,
        "facing": 1,
        "powered": 0
    },
    "skeleton_skull": {
        "rotation": 0
    },
    "skeleton_wall_skull": {
        "facing": 1
    },
    "wither_skeleton_skull": {
        "rotation": 0
    },
    "wither_skeleton_wall_skull": {
        "facing": 1
    },
    "zombie_head": {
        "rotation": 0
    },
    "zombie_wall_head": {
        "facing": 1
    },
    "player_head": {
        "rotation": 0
    },
    "player_wall_head": {
        "facing": 1
    },
    "creeper_head": {
        "rotation": 0
    },
    "creeper_wall_head": {
        "facing": 1
    },
    "dragon_head": {
        "rotation": 0
    },
    "dragon_wall_head": {
        "facing": 1
    },
    "anvil": {
        "facing": 1
    },
    "chipped_anvil": {
        "facing": 1
    },
    "damaged_anvil": {
        "facing": 1
    },
    "trapped_chest": {
        "facing": 1,
        "type": 1,
        "waterlogged": 0
    },
    "light_weighted_pressure_plate": {
        "power": 0
    },
    "heavy_weighted_pressure_plate": {
        "power": 0
    },
    "comparator": {
        "facing": 1,
        "mode": 0,
        "powered": 0
    },
    "daylight_detector": {
        "inverted": 0,
        "power": 0
    },
    "hopper": {
        "enabled": 0,
        "facing": 2
    },
    "quartz_pillar": {
        "axis": 0
    },
    "quartz_stairs": {
        "facing": 1,
        "half": 1,
        "shape": 1,
        "waterlogged": 0
    },
    "activator_rail": {
        "powered": 0,
        "shape": 0,
        "waterlogged": 0
    },
    "dropper": {
        "facing": 0,
        "triggered": 0
    },
    "white_stained_glass_pane": {
        "east": 0,
        "north": 0,
        "south": 0,
        "waterlogged": 0,
        "west": 0
    },
    "orange_stained_glass_pane": {
        "east": 0,
        "north": 0,
        "south": 0,
        "waterlogged": 0,
        "west": 0
    },
    "magenta_stained_glass_pane": {
        "east": 0,
        "north": 0,
        "south": 0,
        "waterlogged": 0,
        "west": 0
    },
    "light_blue_stained_glass_pane": {
        "east": 0,
        "north": 0,
        "south": 0,
        "waterlogged": 0,
        "west": 0
    },
    "yellow_stained_glass_pane": {
        "east": 0,
        "north": 0,
        "south": 0,
        "waterlogged": 0,
        "west": 0
    },
    "lime_stained_glass_pane": {
        "east": 0,
        "north": 0,
        "south": 0,
        "waterlogged": 0,
        "west": 0
    },
    "pink_stained_glass_pane": {
        "east": 0,
        "north": 0,
        "south": 0,
        "waterlogged": 0,
        "west": 0
    },
    "gray_stained_glass_pane": {
        "east": 0,
        "north": 0,
        "south": 0,
        "waterlogged": 0,
        "west": 0
    },
    "light_gray_stained_glass_pane": {
        "east": 0,
        "north": 0,
        "south": 0,
        "waterlogged": 0,
        "west": 0
    },
    "cyan_stained_glass_pane": {
        "east": 0,
        "north": 0,
        "south": 0,
        "waterlogged": 0,
        "west": 0
    },
    "purple_stained_glass_pane": {
        "east": 0,
        "north": 0,
        "south": 0,
        "waterlogged": 0,
        "west": 0
    },
    "blue_stained_glass_pane": {
        "east": 0,
        "north": 0,
        "south": 0,
        "waterlogged": 0,
        "west": 0
    },
    "brown_stained_glass_pane": {
        "east": 0,
        "north": 0,
        "south": 0,
        "waterlogged": 0,
        "west": 0
    },
    "green_stained_glass_pane": {
        "east": 0,
        "north": 0,
        "south": 0,
        "waterlogged": 0,
        "west": 0
    },
    "red_stained_glass_pane": {
        "east": 0,
        "north": 0,
        "south": 0,
        "waterlogged": 0,
        "west": 0
    },
    "black_stained_glass_pane": {
        "east": 0,
        "north": 0,
        "south": 0,
        "waterlogged": 0,
        "west": 0
    },
    "acacia_stairs": {
        "facing": 1,
        "half": 1,
        "shape": 1,
        "waterlogged": 0
    },
    "dark_oak_stairs": {
        "facing": 1,
        "half": 1,
        "shape": 1,
        "waterlogged": 0
    },
    "light": {
        "level": 0,
        "waterlogged": 0
    },
    "iron_trapdoor": {
        "facing": 1,
        "half": 1,
        "open": 0,
        "powered": 0,
        "waterlogged": 0
    },
    "prismarine_stairs": {
        "facing": 1,
        "half": 1,
        "shape": 1,
        "waterlogged": 0
    },
    "prismarine_brick_stairs": {
        "facing": 1,
        "half": 1,
        "shape": 1,
        "waterlogged": 0
    },
    "dark_prismarine_stairs": {
        "facing": 1,
        "half": 1,
        "shape": 1,
        "waterlogged": 0
    },
    "prismarine_slab": {
        "type": 2,
        "waterlogged": 0
    },
    "prismarine_brick_slab": {
        "type": 2,
        "waterlogged": 0
    },
    "dark_prismarine_slab": {
        "type": 2,
        "waterlogged": 0
    },
    "hay_block": {
        "axis": 0
    },
    "sunflower": {
        "half": 0
    },
    "lilac": {
        "half": 0
    },
    "rose_bush": {
        "half": 0
    },
    "peony": {
        "half": 0
    },
    "tall_grass": {
        "half": 0
    },
    "large_fern": {
        "half": 0
    },
    "white_banner": {
        "rotation": 0
    },
    "orange_banner": {
        "rotation": 0
    },
    "magenta_banner": {
        "rotation": 0
    },
    "light_blue_banner": {
        "rotation": 0
    },
    "yellow_banner": {
        "rotation": 0
    },
    "lime_banner": {
        "rotation": 0
    },
    "pink_banner": {
        "rotation": 0
    },
    "gray_banner": {
        "rotation": 0
    },
    "light_gray_banner": {
        "rotation": 0
    },
    "cyan_banner": {
        "rotation": 0
    },
    "purple_banner": {
        "rotation": 0
    },
    "blue_banner": {
        "rotation": 0
    },
    "brown_banner": {
        "rotation": 0
    },
    "green_banner": {
        "rotation": 0
    },
    "red_banner": {
        "rotation": 0
    },
    "black_banner": {
        "rotation": 0
    },
    "white_wall_banner": {
        "facing": 1
    },
    "orange_wall_banner": {
        "facing": 1
    },
    "magenta_wall_banner": {
        "facing": 1
    },
    "light_blue_wall_banner": {
        "facing": 1
    },
    "yellow_wall_banner": {
        "facing": 1
    },
    "lime_wall_banner": {
        "facing": 1
    },
    "pink_wall_banner": {
        "facing": 1
    },
    "gray_wall_banner": {
        "facing": 1
    },
    "light_gray_wall_banner": {
        "facing": 1
    },
    "cyan_wall_banner": {
        "facing": 1
    },
    "purple_wall_banner": {
        "facing": 1
    },
    "blue_wall_banner": {
        "facing": 1
    },
    "brown_wall_banner": {
        "facing": 1
    },
    "green_wall_banner": {
        "facing": 1
    },
    "red_wall_banner": {
        "facing": 1
    },
    "black_wall_banner": {
        "facing": 1
    },
    "red_sandstone_stairs": {
        "facing": 1,
        "half": 1,
        "shape": 1,
        "waterlogged": 0
    },
    "oak_slab": {
        "type": 2,
        "waterlogged": 0
    },
    "spruce_slab": {
        "type": 2,
        "waterlogged": 0
    },
    "birch_slab": {
        "type": 2,
        "waterlogged": 0
    },
    "jungle_slab": {
        "type": 2,
        "waterlogged": 0
    },
    "acacia_slab": {
        "type": 2,
        "waterlogged": 0
    },
    "dark_oak_slab": {
        "type": 2,
        "waterlogged": 0
    },
    "stone_slab": {
        "type": 2,
        "waterlogged": 0
    },
    "smooth_stone_slab": {
        "type": 2,
        "waterlogged": 0
    },
    "sandstone_slab": {
        "type": 2,
        "waterlogged": 0
    },
    "cut_sandstone_slab": {
        "type": 2,
        "waterlogged": 0
    },
    "petrified_oak_slab": {
        "type": 2,
        "waterlogged": 0
    },
    "cobblestone_slab": {
        "type": 2,
        "waterlogged": 0
    },
    "brick_slab": {
        "type": 2,
        "waterlogged": 0
    },
    "stone_brick_slab": {
        "type": 2,
        "waterlogged": 0
    },
    "nether_brick_slab": {
        "type": 2,
        "waterlogged": 0
    },
    "quartz_slab": {
        "type": 2,
        "waterlogged": 0
    },
    "red_sandstone_slab": {
        "type": 2,
        "waterlogged": 0
    },
    "cut_red_sandstone_slab": {
        "type": 2,
        "waterlogged": 0
    },
    "purpur_slab": {
        "type": 2,
        "waterlogged": 0
    },
    "spruce_fence_gate": {
        "facing": 1,
        "in_wall": 0,
        "open": 0,
        "powered": 0
    },
    "birch_fence_gate": {
        "facing": 1,
        "in_wall": 0,
        "open": 0,
        "powered": 0
    },
    "jungle_fence_gate": {
        "facing": 1,
        "in_wall": 0,
        "open": 0,
        "powered": 0
    },
    "acacia_fence_gate": {
        "facing": 1,
        "in_wall": 0,
        "open": 0,
        "powered": 0
    },
    "dark_oak_fence_gate": {
        "facing": 1,
        "in_wall": 0,
        "open": 0,
        "powered": 0
    },
    "spruce_fence": {
        "east": 0,
        "north": 0,
        "south": 0,
        "waterlogged": 0,
        "west": 0
    },
    "birch_fence": {
        "east": 0,
        "north": 0,
        "south": 0,
        "waterlogged": 0,
        "west": 0
    },
    "jungle_fence": {
        "east": 0,
        "north": 0,
        "south": 0,
        "waterlogged": 0,
        "west": 0
    },
    "acacia_fence": {
        "east": 0,
        "north": 0,
        "south": 0,
        "waterlogged": 0,
        "west": 0
    },
    "dark_oak_fence": {
        "east": 0,
        "north": 0,
        "south": 0,
        "waterlogged": 0,
        "west": 0
    },
    "spruce_door": {
        "facing": 1,
        "half": 0,
        "hinge": 0,
        "open": 0,
        "powered": 0
    },
    "birch_door": {
        "facing": 1,
        "half": 0,
        "hinge": 0,
        "open": 0,
        "powered": 0
    },
    "jungle_door": {
        "facing": 1,
        "half": 0,
        "hinge": 0,
        "open": 0,
        "powered": 0
    },
    "acacia_door": {
        "facing": 1,
        "half": 0,
        "hinge": 0,
        "open": 0,
        "powered": 0
    },
    "dark_oak_door": {
        "facing": 1,
        "half": 0,
        "hinge": 0,
        "open": 0,
        "powered": 0
    },
    "end_rod": {
        "facing": 0
    },
    "chorus_plant": {
        "down": 0,
        "east": 0,
        "north": 0,
        "south": 0,
        "up": 0,
        "west": 0
    },
    "chorus_flower": {
        "age": 4
    },
    "purpur_pillar": {
        "axis": 0
    },
    "purpur_stairs": {
        "facing": 1,
        "half": 1,
        "shape": 1,
        "waterlogged": 0
    },
    "beetroots": {
        "age": 2
    },
    "repeating_command_block": {
        "conditional": 0,
        "facing": 0
    },
    "chain_command_block": {
        "conditional": 0,
        "facing": 0
    },
    "frosted_ice": {
        "age": 2
    },
    "bone_block": {
        "axis": 0
    },
    "observer": {
        "facing": 0,
        "powered": 0
    },
    "shulker_box": {
        "facing": 0
    },
    "white_shulker_box": {
        "facing": 0
    },
    "orange_shulker_box": {
        "facing": 0
    },
    "magenta_shulker_box": {
        "facing": 0
    },
    "light_blue_shulker_box": {
        "facing": 0
    },
    "yellow_shulker_box": {
        "facing": 0
    },
    "lime_shulker_box": {
        "facing": 0
    },
    "pink_shulker_box": {
        "facing": 0
    },
    "gray_shulker_box": {
        "facing": 0
    },
    "light_gray_shulker_box": {
        "facing": 0
    },
    "cyan_shulker_box": {
        "facing": 0
    },
    "purple_shulker_box": {
        "facing": 0
    },
    "blue_shulker_box": {
        "facing": 0
    },
    "brown_shulker_box": {
        "facing": 0
    },
    "green_shulker_box": {
        "facing": 0
    },
    "red_shulker_box": {
        "facing": 0
    },
    "black_shulker_box": {
        "facing": 0
    },
    "white_glazed_terracotta": {
        "facing": 1
    },
    "orange_glazed_terracotta": {
        "facing": 1
    },
    "magenta_glazed_terracotta": {
        "facing": 1
    },
    "light_blue_glazed_terracotta": {
        "facing": 1
    },
    "yellow_glazed_terracotta": {
        "facing": 1
    },
    "lime_glazed_terracotta": {
        "facing": 1
    },
    "pink_glazed_terracotta": {
        "facing": 1
    },
    "gray_glazed_terracotta": {
        "facing": 1
    },
    "light_gray_glazed_terracotta": {
        "facing": 1
    },
    "cyan_glazed_terracotta": {
        "facing": 1
    },
    "purple_glazed_terracotta": {
        "facing": 1
    },
    "blue_glazed_terracotta": {
        "facing": 1
    },
    "brown_glazed_terracotta": {
        "facing": 1
    },
    "green_glazed_terracotta": {
        "facing": 1
    },
    "red_glazed_terracotta": {
        "facing": 1
    },
    "black_glazed_terracotta": {
        "facing": 1
    },
    "kelp": {
        "age": 5
    },
    "turtle_egg": {
        "eggs": 0,
        "hatch": 0
    },
    "dead_tube_coral": {
        "waterlogged": 0
    },
    "dead_brain_coral": {
        "waterlogged": 0
    },
    "dead_bubble_coral": {
        "waterlogged": 0
    },
    "dead_fire_coral": {
        "waterlogged": 0
    },
    "dead_horn_coral": {
        "waterlogged": 0
    },
    "tube_coral": {
        "waterlogged": 0
    },
    "brain_coral": {
        "waterlogged": 0
    },
    "bubble_coral": {
        "waterlogged": 0
    },
    "fire_coral": {
        "waterlogged": 0
    },
    "horn_coral": {
        "waterlogged": 0
    },
    "dead_tube_coral_fan": {
        "waterlogged": 0
    },
    "dead_brain_coral_fan": {
        "waterlogged": 0
    },
    "dead_bubble_coral_fan": {
        "waterlogged": 0
    },
    "dead_fire_coral_fan": {
        "waterlogged": 0
    },
    "dead_horn_coral_fan": {
        "waterlogged": 0
    },
    "tube_coral_fan": {
        "waterlogged": 0
    },
    "brain_coral_fan": {
        "waterlogged": 0
    },
    "bubble_coral_fan": {
        "waterlogged": 0
    },
    "fire_coral_fan": {
        "waterlogged": 0
    },
    "horn_coral_fan": {
        "waterlogged": 0
    },
    "dead_tube_coral_wall_fan": {
        "facing": 1,
        "waterlogged": 0
    },
    "dead_brain_coral_wall_fan": {
        "facing": 1,
        "waterlogged": 0
    },
    "dead_bubble_coral_wall_fan": {
        "facing": 1,
        "waterlogged": 0
    },
    "dead_fire_coral_wall_fan": {
        "facing": 1,
        "waterlogged": 0
    },
    "dead_horn_coral_wall_fan": {
        "facing": 1,
        "waterlogged": 0
    },
    "tube_coral_wall_fan": {
        "facing": 1,
        "waterlogged": 0
    },
    "brain_coral_wall_fan": {
        "facing": 1,
        "waterlogged": 0
    },
    "bubble_coral_wall_fan": {
        "facing": 1,
        "waterlogged": 0
    },
    "fire_coral_wall_fan": {
        "facing": 1,
        "waterlogged": 0
    },
    "horn_coral_wall_fan": {
        "facing": 1,
        "waterlogged": 0
    },
    "sea_pickle": {
        "pickles": 0,
        "waterlogged": 0
    },
    "conduit": {
        "waterlogged": 0
    },
    "bamboo": {
        "age": 6,
        "leaves": 0,
        "stage": 0
    },
    "bubble_column": {
        "drag": 0
    },
    "polished_granite_stairs": {
        "facing": 1,
        "half": 1,
        "shape": 1,
        "waterlogged": 0
    },
    "smooth_red_sandstone_stairs": {
        "facing": 1,
        "half": 1,
        "shape": 1,
        "waterlogged": 0
    },
    "mossy_stone_brick_stairs": {
        "facing": 1,
        "half": 1,
        "shape": 1,
        "waterlogged": 0
    },
    "polished_diorite_stairs": {
        "facing": 1,
        "half": 1,
        "shape": 1,
        "waterlogged": 0
    },
    "mossy_cobblestone_stairs": {
        "facing": 1,
        "half": 1,
        "shape": 1,
        "waterlogged": 0
    },
    "end_stone_brick_stairs": {
        "facing": 1,
        "half": 1,
        "shape": 1,
        "waterlogged": 0
    },
    "stone_stairs": {
        "facing": 1,
        "half": 1,
        "shape": 1,
        "waterlogged": 0
    },
    "smooth_sandstone_stairs": {
        "facing": 1,
        "half": 1,
        "shape": 1,
        "waterlogged": 0
    },
    "smooth_quartz_stairs": {
        "facing": 1,
        "half": 1,
        "shape": 1,
        "waterlogged": 0
    },
    "granite_stairs": {
        "facing": 1,
        "half": 1,
        "shape": 1,
        "waterlogged": 0
    },
    "andesite_stairs": {
        "facing": 1,
        "half": 1,
        "shape": 1,
        "waterlogged": 0
    },
    "red_nether_brick_stairs": {
        "facing": 1,
        "half": 1,
        "shape": 1,
        "waterlogged": 0
    },
    "polished_andesite_stairs": {
        "facing": 1,
        "half": 1,
        "shape": 1,
        "waterlogged": 0
    },
    "diorite_stairs": {
        "facing": 1,
        "half": 1,
        "shape": 1,
        "waterlogged": 0
    },
    "polished_granite_slab": {
        "type": 2,
        "waterlogged": 0
    },
    "smooth_red_sandstone_slab": {
        "type": 2,
        "waterlogged": 0
    },
    "mossy_stone_brick_slab": {
        "type": 2,
        "waterlogged": 0
    },
    "polished_diorite_slab": {
        "type": 2,
        "waterlogged": 0
    },
    "mossy_cobblestone_slab": {
        "type": 2,
        "waterlogged": 0
    },
    "end_stone_brick_slab": {
        "type": 2,
        "waterlogged": 0
    },
    "smooth_sandstone_slab": {
        "type": 2,
        "waterlogged": 0
    },
    "smooth_quartz_slab": {
        "type": 2,
        "waterlogged": 0
    },
    "granite_slab": {
        "type": 2,
        "waterlogged": 0
    },
    "andesite_slab": {
        "type": 2,
        "waterlogged": 0
    },
    "red_nether_brick_slab": {
        "type": 2,
        "waterlogged": 0
    },
    "polished_andesite_slab": {
        "type": 2,
        "waterlogged": 0
    },
    "diorite_slab": {
        "type": 2,
        "waterlogged": 0
    },
    "brick_wall": {
        "east": 2,
        "north": 2,
        "south": 2,
        "up": 0,
        "waterlogged": 0,
        "west": 2
    },
    "prismarine_wall": {
        "east": 2,
        "north": 2,
        "south": 2,
        "up": 0,
        "waterlogged": 0,
        "west": 2
    },
    "red_sandstone_wall": {
        "east": 2,
        "north": 2,
        "south": 2,
        "up": 0,
        "waterlogged": 0,
        "west": 2
    },
    "mossy_stone_brick_wall": {
        "east": 2,
        "north": 2,
        "south": 2,
        "up": 0,
        "waterlogged": 0,
        "west": 2
    },
    "granite_wall": {
        "east": 2,
        "north": 2,
        "south": 2,
        "up": 0,
        "waterlogged": 0,
        "west": 2
    },
    "stone_brick_wall": {
        "east": 2,
        "north": 2,
        "south": 2,
        "up": 0,
        "waterlogged": 0,
        "west": 2
    },
    "nether_brick_wall": {
        "east": 2,
        "north": 2,
        "south": 2,
        "up": 0,
        "waterlogged": 0,
        "west": 2
    },
    "andesite_wall": {
        "east": 2,
        "north": 2,
        "south": 2,
        "up": 0,
        "waterlogged": 0,
        "west": 2
    },
    "red_nether_brick_wall": {
        "east": 2,
        "north": 2,
        "south": 2,
        "up": 0,
        "waterlogged": 0,
        "west": 2
    },
    "sandstone_wall": {
        "east": 2,
        "north": 2,
        "south": 2,
        "up": 0,
        "waterlogged": 0,
        "west": 2
    },
    "end_stone_brick_wall": {
        "east": 2,
        "north": 2,
        "south": 2,
        "up": 0,
        "waterlogged": 0,
        "west": 2
    },
    "diorite_wall": {
        "east": 2,
        "north": 2,
        "south": 2,
        "up": 0,
        "waterlogged": 0,
        "west": 2
    },
    "scaffolding": {
        "bottom": 0,
        "distance": 1,
        "waterlogged": 0
    },
    "loom": {
        "facing": 1
    },
    "barrel": {
        "facing": 0,
        "open": 0
    },
    "smoker": {
        "facing": 1,
        "lit": 0
    },
    "blast_furnace": {
        "facing": 1,
        "lit": 0
    },
    "grindstone": {
        "face": 0,
        "facing": 1
    },
    "lectern": {
        "facing": 1,
        "has_book": 0,
        "powered": 0
    },
    "stonecutter": {
        "facing": 1
    },
    "bell": {
        "attachment": 0,
        "facing": 1,
        "powered": 0
    },
    "lantern": {
        "hanging": 0,
        "waterlogged": 0
    },
    "soul_lantern": {
        "hanging": 0,
        "waterlogged": 0
    },
    "campfire": {
        "facing": 1,
        "lit": 0,
        "signal_fire": 0,
        "waterlogged": 0
    },
    "soul_campfire": {
        "facing": 1,
        "lit": 0,
        "signal_fire": 0,
        "waterlogged": 0
    },
    "sweet_berry_bush": {
        "age": 2
    },
    "warped_stem": {
        "axis": 0
    },
    "stripped_warped_stem": {
        "axis": 0
    },
    "warped_hyphae": {
        "axis": 0
    },
    "stripped_warped_hyphae": {
        "axis": 0
    },
    "crimson_stem": {
        "axis": 0
    },
    "stripped_crimson_stem": {
        "axis": 0
    },
    "crimson_hyphae": {
        "axis": 0
    },
    "stripped_crimson_hyphae": {
        "axis": 0
    },
    "weeping_vines": {
        "age": 5
    },
    "twisting_vines": {
        "age": 5
    },
    "crimson_slab": {
        "type": 2,
        "waterlogged": 0
    },
    "warped_slab": {
        "type": 2,
        "waterlogged": 0
    },
    "crimson_pressure_plate": {
        "powered": 0
    },
    "warped_pressure_plate": {
        "powered": 0
    },
    "crimson_fence": {
        "east": 0,
        "north": 0,
        "south": 0,
        "waterlogged": 0,
        "west": 0
    },
    "warped_fence": {
        "east": 0,
        "north": 0,
        "south": 0,
        "waterlogged": 0,
        "west": 0
    },
    "crimson_trapdoor": {
        "facing": 1,
        "half": 1,
        "open": 0,
        "powered": 0,
        "waterlogged": 0
    },
    "warped_trapdoor": {
        "facing": 1,
        "half": 1,
        "open": 0,
        "powered": 0,
        "waterlogged": 0
    },
    "crimson_fence_gate": {
        "facing": 1,
        "in_wall": 0,
        "open": 0,
        "powered": 0
    },
    "warped_fence_gate": {
        "facing": 1,
        "in_wall": 0,
        "open": 0,
        "powered": 0
    },
    "crimson_stairs": {
        "facing": 1,
        "half": 1,
        "shape": 1,
        "waterlogged": 0
    },
    "warped_stairs": {
        "facing": 1,
        "half": 1,
        "shape": 1,
        "waterlogged": 0
    },
    "crimson_button": {
        "face": 0,
        "facing": 1,
        "powered": 0
    },
    "warped_button": {
        "face": 0,
        "facing": 1,
        "powered": 0
    },
    "crimson_door": {
        "facing": 1,
        "half": 0,
        "hinge": 0,
        "open": 0,
        "powered": 0
    },
    "warped_door": {
        "facing": 1,
        "half": 0,
        "hinge": 0,
        "open": 0,
        "powered": 0
    },
    "crimson_sign": {
        "rotation": 0,
        "waterlogged": 0
    },
    "warped_sign": {
        "rotation": 0,
        "waterlogged": 0
    },
    "crimson_wall_sign": {
        "facing": 1,
        "waterlogged": 0
    },
    "warped_wall_sign": {
        "facing": 1,
        "waterlogged": 0
    },
    "structure_block": {
        "mode": 1
    },
    "jigsaw": {
        "orientation": 0
    },
    "composter": {
        "level": 2
    },
    "target": {
        "power": 0
    },
    "bee_nest": {
        "facing": 1,
        "honey_level": 0
    },
    "beehive": {
        "facing": 1,
        "honey_level": 0
    },
    "respawn_anchor": {
        "charges": 0
    },
    "blackstone_stairs": {
        "facing": 1,
        "half": 1,
        "shape": 1,
        "waterlogged": 0
    },
    "blackstone_wall": {
        "east": 2,
        "north": 2,
        "south": 2,
        "up": 0,
        "waterlogged": 0,
        "west": 2
    },
    "blackstone_slab": {
        "type": 2,
        "waterlogged": 0
    },
    "polished_blackstone_brick_slab": {
        "type": 2,
        "waterlogged": 0
    },
    "polished_blackstone_brick_stairs": {
        "facing": 1,
        "half": 1,
        "shape": 1,
        "waterlogged": 0
    },
    "polished_blackstone_brick_wall": {
        "east": 2,
        "north": 2,
        "south": 2,
        "up": 0,
        "waterlogged": 0,
        "west": 2
    },
    "polished_blackstone_stairs": {
        "facing": 1,
        "half": 1,
        "shape": 1,
        "waterlogged": 0
    },
    "polished_blackstone_slab": {
        "type": 2,
        "waterlogged": 0
    },
    "polished_blackstone_pressure_plate": {
        "powered": 0
    },
    "polished_blackstone_button": {
        "face": 0,
        "facing": 1,
        "powered": 0
    },
    "polished_blackstone_wall": {
        "east": 2,
        "north": 2,
        "south": 2,
        "up": 0,
        "waterlogged": 0,
        "west": 2
    },
    "candle": {
        "candles": 0,
        "lit": 0,
        "waterlogged": 0
    },
    "white_candle": {
        "candles": 0,
        "lit": 0,
        "waterlogged": 0
    },
    "orange_candle": {
        "candles": 0,
        "lit": 0,
        "waterlogged": 0
    },
    "magenta_candle": {
        "candles": 0,
        "lit": 0,
        "waterlogged": 0
    },
    "light_blue_candle": {
        "candles": 0,
        "lit": 0,
        "waterlogged": 0
    },
    "yellow_candle": {
        "candles": 0,
        "lit": 0,
        "waterlogged": 0
    },
    "lime_candle": {
        "candles": 0,
        "lit": 0,
        "waterlogged": 0
    },
    "pink_candle": {
        "candles": 0,
        "lit": 0,
        "waterlogged": 0
    },
    "gray_candle": {
        "candles": 0,
        "lit": 0,
        "waterlogged": 0
    },
    "light_gray_candle": {
        "candles": 0,
        "lit": 0,
        "waterlogged": 0
    },
    "cyan_candle": {
        "candles": 0,
        "lit": 0,
        "waterlogged": 0
    },
    "purple_candle": {
        "candles": 0,
        "lit": 0,
        "waterlogged": 0
    },
    "blue_candle": {
        "candles": 0,
        "lit": 0,
        "waterlogged": 0
    },
    "brown_candle": {
        "candles": 0,
        "lit": 0,
        "waterlogged": 0
    },
    "green_candle": {
        "candles": 0,
        "lit": 0,
        "waterlogged": 0
    },
    "red_candle": {
        "candles": 0,
        "lit": 0,
        "waterlogged": 0
    },
    "black_candle": {
        "candles": 0,
        "lit": 0,
        "waterlogged": 0
    },
    "candle_cake": {
        "lit": 0
    },
    "white_candle_cake": {
        "lit": 0
    },
    "orange_candle_cake": {
        "lit": 0
    },
    "magenta_candle_cake": {
        "lit": 0
    },
    "light_blue_candle_cake": {
        "lit": 0
    },
    "yellow_candle_cake": {
        "lit": 0
    },
    "lime_candle_cake": {
        "lit": 0
    },
    "pink_candle_cake": {
        "lit": 0
    },
    "gray_candle_cake": {
        "lit": 0
    },
    "light_gray_candle_cake": {
        "lit": 0
    },
    "cyan_candle_cake": {
        "lit": 0
    },
    "purple_candle_cake": {
        "lit": 0
    },
    "blue_candle_cake": {
        "lit": 0
    },
    "brown_candle_cake": {
        "lit": 0
    },
    "green_candle_cake": {
        "lit": 0
    },
    "red_candle_cake": {
        "lit": 0
    },
    "black_candle_cake": {
        "lit": 0
    },
    "amethyst_cluster": {
        "facing": 0,
        "waterlogged": 0
    },
    "large_amethyst_bud": {
        "facing": 0,
        "waterlogged": 0
    },
    "medium_amethyst_bud": {
        "facing": 0,
        "waterlogged": 0
    },
    "small_amethyst_bud": {
        "facing": 0,
        "waterlogged": 0
    },
    "sculk_sensor": {
        "power": 0,
        "sculk_sensor_phase": 0,
        "waterlogged": 0
    },
    "oxidized_cut_copper_stairs": {
        "facing": 1,
        "half": 1,
        "shape": 1,
        "waterlogged": 0
    },
    "weathered_cut_copper_stairs": {
        "facing": 1,
        "half": 1,
        "shape": 1,
        "waterlogged": 0
    },
    "exposed_cut_copper_stairs": {
        "facing": 1,
        "half": 1,
        "shape": 1,
        "waterlogged": 0
    },
    "cut_copper_stairs": {
        "facing": 1,
        "half": 1,
        "shape": 1,
        "waterlogged": 0
    },
    "oxidized_cut_copper_slab": {
        "type": 2,
        "waterlogged": 0
    },
    "weathered_cut_copper_slab": {
        "type": 2,
        "waterlogged": 0
    },
    "exposed_cut_copper_slab": {
        "type": 2,
        "waterlogged": 0
    },
    "cut_copper_slab": {
        "type": 2,
        "waterlogged": 0
    },
    "waxed_oxidized_cut_copper_stairs": {
        "facing": 1,
        "half": 1,
        "shape": 1,
        "waterlogged": 0
    },
    "waxed_weathered_cut_copper_stairs": {
        "facing": 1,
        "half": 1,
        "shape": 1,
        "waterlogged": 0
    },
    "waxed_exposed_cut_copper_stairs": {
        "facing": 1,
        "half": 1,
        "shape": 1,
        "waterlogged": 0
    },
    "waxed_cut_copper_stairs": {
        "facing": 1,
        "half": 1,
        "shape": 1,
        "waterlogged": 0
    },
    "waxed_oxidized_cut_copper_slab": {
        "type": 2,
        "waterlogged": 0
    },
    "waxed_weathered_cut_copper_slab": {
        "type": 2,
        "waterlogged": 0
    },
    "waxed_exposed_cut_copper_slab": {
        "type": 2,
        "waterlogged": 0
    },
    "waxed_cut_copper_slab": {
        "type": 2,
        "waterlogged": 0
    },
    "lightning_rod": {
        "facing": 0,
        "powered": 0,
        "waterlogged": 0
    },
    "pointed_dripstone": {
        "thickness": 0,
        "vertical_direction": 0,
        "waterlogged": 0
    },
    "cave_vines": {
        "age": 5,
        "berries": 0
    },
    "cave_vines_plant": {
        "berries": 0
    },
    "big_dripleaf": {
        "facing": 1,
        "tilt": 0,
        "waterlogged": 0
    },
    "big_dripleaf_stem": {
        "facing": 1,
        "waterlogged": 0
    },
    "small_dripleaf": {
        "facing": 1,
        "half": 0,
        "waterlogged": 0
    },
    "hanging_roots": {
        "waterlogged": 0
    },
    "deepslate": {
        "axis": 0
    },
    "cobbled_deepslate_stairs": {
        "facing": 1,
        "half": 1,
        "shape": 1,
        "waterlogged": 0
    },
    "cobbled_deepslate_slab": {
        "type": 2,
        "waterlogged": 0
    },
    "cobbled_deepslate_wall": {
        "east": 2,
        "north": 2,
        "south": 2,
        "up": 0,
        "waterlogged": 0,
        "west": 2
    },
    "polished_deepslate_stairs": {
        "facing": 1,
        "half": 1,
        "shape": 1,
        "waterlogged": 0
    },
    "polished_deepslate_slab": {
        "type": 2,
        "waterlogged": 0
    },
    "polished_deepslate_wall": {
        "east": 2,
        "north": 2,
        "south": 2,
        "up": 0,
        "waterlogged": 0,
        "west": 2
    },
    "deepslate_tile_stairs": {
        "facing": 1,
        "half": 1,
        "shape": 1,
        "waterlogged": 0
    },
    "deepslate_tile_slab": {
        "type": 2,
        "waterlogged": 0
    },
    "deepslate_tile_wall": {
        "east": 2,
        "north": 2,
        "south": 2,
        "up": 0,
        "waterlogged": 0,
        "west": 2
    },
    "deepslate_brick_stairs": {
        "facing": 1,
        "half": 1,
        "shape": 1,
        "waterlogged": 0
    },
    "deepslate_brick_slab": {
        "type": 2,
        "waterlogged": 0
    },
    "deepslate_brick_wall": {
        "east": 2,
        "north": 2,
        "south": 2,
        "up": 0,
        "waterlogged": 0,
        "west": 2
    },
    "infested_deepslate": {
        "axis": 0
    }
};

// PARTICLES
export const allParticles = [
    "ambient_entity_effect",
    "angry_villager",
    "ash",
    "barrier",
    "block",
    "bubble",
    "bubble_column_up",
    "bubble_pop",
    "campfire_cosy_smoke",
    "campfire_signal_smoke",
    "cloud",
    "composter",
    "crimson_spore",
    "crit",
    "current_down",
    "damage_indicator",
    "dolphin",
    "dragon_breath",
    "dripping_dripstone_lava",
    "dripping_dripstone_water",
    "dripping_honey",
    "dripping_lava",
    "dripping_obsidian_tear",
    "dripping_water",
    "dust",
    "dust_color_transition",
    "effect",
    "elder_guardian",
    "electric_spark",
    "enchant",
    "enchanted_hit",
    "end_rod",
    "entity_effect",
    "explosion",
    "explosion_emitter",
    "falling_dripstone_lava",
    "falling_dripstone_water",
    "falling_dust",
    "falling_honey",
    "falling_lava",
    "falling_nectar",
    "falling_obsidian_tear",
    "falling_spore_blossom",
    "falling_water",
    "firework",
    "fishing",
    "flame",
    "flash",
    "glow",
    "glow_squid_ink",
    "happy_villager",
    "heart",
    "instant_effect",
    "item",
    "item_slime",
    "item_snowball",
    "landing_honey",
    "landing_lava",
    "landing_obsidian_tear",
    "large_smoke",
    "lava",
    "light",
    "mycelium",
    "nautilus",
    "note",
    "poof",
    "portal",
    "rain",
    "reverse_portal",
    "scrape",
    "small_flame",
    "smoke",
    "sneeze",
    "snowflake",
    "soul",
    "soul_fire_flame",
    "spit",
    "splash",
    "spore_blossom_air",
    "squid_ink",
    "sweep_attack",
    "totem_of_undying",
    "underwater",
    "vibration",
    "warped_spore",
    "wax_off",
    "wax_on",
    "white_ash",
    "witch"
];

// SOUNDS
export const allSoundsFancy = {
    "ambient": {
        "cave": true,
        "basalt_deltas": {
            "additions": true,
            "loop": true,
            "mood": true
        },
        "crimson_forest": {
            "additions": true,
            "loop": true,
            "mood": true
        },
        "nether_wastes": {
            "additions": true,
            "loop": true,
            "mood": true
        },
        "soul_sand_valley": {
            "additions": true,
            "loop": true,
            "mood": true
        },
        "warped_forest": {
            "additions": true,
            "loop": true,
            "mood": true
        },
        "underwater": {
            "enter": true,
            "exit": true,
            "loop": {
                "???": true,
                "additions": {
                    "???": true,
                    "rare": true,
                    "ultra_rare": true
                }
            }
        }
    },
    "block": {
        "amethyst_block": {
            "break": true,
            "chime": true,
            "fall": true,
            "hit": true,
            "place": true,
            "step": true
        },
        "amethyst_cluster": {
            "break": true,
            "fall": true,
            "hit": true,
            "place": true,
            "step": true
        },
        "ancient_debris": {
            "break": true,
            "step": true,
            "place": true,
            "hit": true,
            "fall": true
        },
        "anvil": {
            "break": true,
            "destroy": true,
            "fall": true,
            "hit": true,
            "land": true,
            "place": true,
            "step": true,
            "use": true
        },
        "azalea": {
            "break": true,
            "fall": true,
            "hit": true,
            "place": true,
            "step": true
        },
        "azalea_leaves": {
            "break": true,
            "fall": true,
            "hit": true,
            "place": true,
            "step": true
        },
        "bamboo": {
            "break": true,
            "fall": true,
            "hit": true,
            "place": true,
            "step": true
        },
        "bamboo_sapling": {
            "break": true,
            "hit": true,
            "place": true
        },
        "barrel": {
            "close": true,
            "open": true
        },
        "basalt": {
            "break": true,
            "step": true,
            "place": true,
            "hit": true,
            "fall": true
        },
        "beacon": {
            "activate": true,
            "ambient": true,
            "deactivate": true,
            "power_select": true
        },
        "beehive": {
            "drip": true,
            "enter": true,
            "exit": true,
            "shear": true,
            "work": true
        },
        "bell": {
            "use": true,
            "resonate": true
        },
        "big_dripleaf": {
            "break": true,
            "fall": true,
            "hit": true,
            "place": true,
            "step": true,
            "tilt_down": true,
            "tilt_up": true
        },
        "bone_block": {
            "break": true,
            "fall": true,
            "hit": true,
            "place": true,
            "step": true
        },
        "blastfurnace": {
            "fire_crackle": true
        },
        "brewing_stand": {
            "brew": true
        },
        "bubble_column": {
            "bubble_pop": true,
            "upwards_ambient": true,
            "upwards_inside": true,
            "whirlpool_ambient": true,
            "whirlpool_inside": true
        },
        "cake": {
            "add_candle": true
        },
        "calcite": {
            "break": true,
            "step": true,
            "place": true,
            "hit": true,
            "fall": true
        },
        "campfire": {
            "crackle": true
        },
        "candle": {
            "ambient": true,
            "break": true,
            "extinguish": true,
            "fall": true,
            "hit": true,
            "place": true,
            "step": true
        },
        "cave_vines": {
            "break": true,
            "fall": true,
            "hit": true,
            "place": true,
            "step": true,
            "pick_berries": true
        },
        "chain": {
            "break": true,
            "fall": true,
            "hit": true,
            "place": true,
            "step": true
        },
        "chest": {
            "close": true,
            "locked": true,
            "open": true
        },
        "chorus_flower": {
            "death": true,
            "grow": true
        },
        "comparator": {
            "click": true
        },
        "composter": {
            "empty": true,
            "fill": true,
            "fill_success": true,
            "ready": true
        },
        "conduit": {
            "activate": true,
            "ambient": {
                "???": true,
                "short": true
            },
            "attack": {
                "target": true
            },
            "deactivate": true
        },
        "copper": {
            "break": true,
            "step": true,
            "place": true,
            "hit": true,
            "fall": true
        },
        "coral_block": {
            "break": true,
            "fall": true,
            "hit": true,
            "place": true,
            "step": true
        },
        "crop": {
            "break": true
        },
        "deepslate_bricks": {
            "break": true,
            "fall": true,
            "hit": true,
            "place": true,
            "step": true
        },
        "deepslate": {
            "break": true,
            "fall": true,
            "hit": true,
            "place": true,
            "step": true
        },
        "deepslate_tiles": {
            "break": true,
            "fall": true,
            "hit": true,
            "place": true,
            "step": true
        },
        "dispenser": {
            "dispense": true,
            "fail": true,
            "launch": true
        },
        "dripstone_block": {
            "break": true,
            "step": true,
            "place": true,
            "hit": true,
            "fall": true
        },
        "pointed_dripstone": {
            "break": true,
            "step": true,
            "place": true,
            "hit": true,
            "fall": true,
            "land": true,
            "drip_lava": true,
            "drip_water": true,
            "drip_lava_into_cauldron": true,
            "drip_water_into_cauldron": true
        },
        "enchantment_table": {
            "use": true
        },
        "ender_chest": {
            "close": true,
            "open": true
        },
        "end_gateway": {
            "spawn": true
        },
        "end_portal_frame": {
            "fill": true
        },
        "end_portal": {
            "spawn": true
        },
        "fence_gate": {
            "close": true,
            "open": true
        },
        "fire": {
            "ambient": true,
            "extinguish": true
        },
        "flowering_azalea": {
            "break": true,
            "fall": true,
            "hit": true,
            "place": true,
            "step": true
        },
        "roots": {
            "break": true,
            "step": true,
            "place": true,
            "hit": true,
            "fall": true
        },
        "furnace": {
            "fire_crackle": true
        },
        "gilded_blackstone": {
            "break": true,
            "fall": true,
            "hit": true,
            "place": true,
            "step": true
        },
        "glass": {
            "break": true,
            "fall": true,
            "hit": true,
            "place": true,
            "step": true
        },
        "grass": {
            "break": true,
            "fall": true,
            "hit": true,
            "place": true,
            "step": true
        },
        "gravel": {
            "break": true,
            "fall": true,
            "hit": true,
            "place": true,
            "step": true
        },
        "grindstone": {
            "use": true
        },
        "hanging_roots": {
            "break": true,
            "fall": true,
            "hit": true,
            "place": true,
            "step": true
        },
        "honey_block": {
            "break": true,
            "fall": true,
            "hit": true,
            "place": true,
            "slide": true,
            "step": true
        },
        "iron_door": {
            "close": true,
            "open": true
        },
        "iron_trapdoor": {
            "close": true,
            "open": true
        },
        "ladder": {
            "break": true,
            "fall": true,
            "hit": true,
            "place": true,
            "step": true
        },
        "lantern": {
            "break": true,
            "fall": true,
            "hit": true,
            "place": true,
            "step": true
        },
        "large_amethyst_bud": {
            "break": true,
            "place": true
        },
        "lava": {
            "ambient": true,
            "extinguish": true,
            "pop": true
        },
        "lever": {
            "click": true
        },
        "lodestone": {
            "break": true,
            "step": true,
            "place": true,
            "hit": true,
            "fall": true
        },
        "medium_amethyst_bud": {
            "break": true,
            "place": true
        },
        "metal": {
            "break": true,
            "fall": true,
            "hit": true,
            "place": true,
            "step": true
        },
        "metal_pressure_plate": {
            "click_off": true,
            "click_on": true
        },
        "moss_carpet": {
            "break": true,
            "fall": true,
            "hit": true,
            "place": true,
            "step": true
        },
        "moss": {
            "break": true,
            "fall": true,
            "hit": true,
            "place": true,
            "step": true
        },
        "nether_bricks": {
            "break": true,
            "step": true,
            "place": true,
            "hit": true,
            "fall": true
        },
        "nether_wart": {
            "break": true
        },
        "stem": {
            "break": true,
            "step": true,
            "place": true,
            "hit": true,
            "fall": true
        },
        "nylium": {
            "break": true,
            "step": true,
            "place": true,
            "hit": true,
            "fall": true
        },
        "nether_sprouts": {
            "break": true,
            "step": true,
            "place": true,
            "hit": true,
            "fall": true
        },
        "fungus": {
            "break": true,
            "step": true,
            "place": true,
            "hit": true,
            "fall": true
        },
        "weeping_vines": {
            "break": true,
            "step": true,
            "place": true,
            "hit": true,
            "fall": true
        },
        "wart_block": {
            "break": true,
            "step": true,
            "place": true,
            "hit": true,
            "fall": true
        },
        "netherite_block": {
            "break": true,
            "step": true,
            "place": true,
            "hit": true,
            "fall": true
        },
        "netherrack": {
            "break": true,
            "step": true,
            "place": true,
            "hit": true,
            "fall": true
        },
        "note_block": {
            "basedrum": true,
            "bass": true,
            "bell": true,
            "chime": true,
            "flute": true,
            "guitar": true,
            "harp": true,
            "hat": true,
            "pling": true,
            "snare": true,
            "xylophone": true,
            "iron_xylophone": true,
            "cow_bell": true,
            "didgeridoo": true,
            "bit": true,
            "banjo": true
        },
        "piston": {
            "contract": true,
            "extend": true
        },
        "polished_deepslate": {
            "break": true,
            "fall": true,
            "hit": true,
            "place": true,
            "step": true
        },
        "portal": {
            "ambient": true,
            "travel": true,
            "trigger": true
        },
        "powder_snow": {
            "break": true,
            "fall": true,
            "hit": true,
            "place": true,
            "step": true
        },
        "pumpkin": {
            "carve": true
        },
        "nether_gold_ore": {
            "break": true,
            "fall": true,
            "hit": true,
            "place": true,
            "step": true
        },
        "nether_ore": {
            "break": true,
            "fall": true,
            "hit": true,
            "place": true,
            "step": true
        },
        "redstone_torch": {
            "burnout": true
        },
        "respawn_anchor": {
            "ambient": true,
            "charge": true,
            "deplete": true,
            "set_spawn": true
        },
        "rooted_dirt": {
            "break": true,
            "fall": true,
            "hit": true,
            "place": true,
            "step": true
        },
        "sand": {
            "break": true,
            "fall": true,
            "hit": true,
            "place": true,
            "step": true
        },
        "scaffolding": {
            "break": true,
            "fall": true,
            "hit": true,
            "place": true,
            "step": true
        },
        "sculk_sensor": {
            "clicking": true,
            "clicking_stop": true,
            "break": true,
            "fall": true,
            "hit": true,
            "place": true,
            "step": true
        },
        "shroomlight": {
            "break": true,
            "step": true,
            "place": true,
            "hit": true,
            "fall": true
        },
        "shulker_box": {
            "close": true,
            "open": true
        },
        "slime_block": {
            "break": true,
            "fall": true,
            "hit": true,
            "place": true,
            "step": true
        },
        "small_amethyst_bud": {
            "break": true,
            "place": true
        },
        "small_dripleaf": {
            "break": true,
            "fall": true,
            "hit": true,
            "place": true,
            "step": true
        },
        "soul_sand": {
            "break": true,
            "step": true,
            "place": true,
            "hit": true,
            "fall": true
        },
        "soul_soil": {
            "break": true,
            "step": true,
            "place": true,
            "hit": true,
            "fall": true
        },
        "spore_blossom": {
            "break": true,
            "fall": true,
            "hit": true,
            "place": true,
            "step": true
        },
        "smithing_table": {
            "use": true
        },
        "smoker": {
            "smoke": true
        },
        "snow": {
            "break": true,
            "fall": true,
            "hit": true,
            "place": true,
            "step": true
        },
        "stone": {
            "break": true,
            "fall": true,
            "hit": true,
            "place": true,
            "step": true
        },
        "stone_button": {
            "click_off": true,
            "click_on": true
        },
        "stone_pressure_plate": {
            "click_off": true,
            "click_on": true
        },
        "sweet_berry_bush": {
            "break": true,
            "place": true,
            "pick_berries": true
        },
        "tripwire": {
            "attach": true,
            "click_off": true,
            "click_on": true,
            "detach": true
        },
        "tuff": {
            "break": true,
            "step": true,
            "place": true,
            "hit": true,
            "fall": true
        },
        "vine": {
            "break": true,
            "fall": true,
            "hit": true,
            "place": true,
            "step": true
        },
        "lily_pad": {
            "place": true
        },
        "water": {
            "ambient": true
        },
        "wet_grass": {
            "break": true,
            "fall": true,
            "hit": true,
            "place": true,
            "step": true
        },
        "wooden_door": {
            "close": true,
            "open": true
        },
        "wooden_trapdoor": {
            "close": true,
            "open": true
        },
        "wood": {
            "break": true,
            "fall": true,
            "hit": true,
            "place": true,
            "step": true
        },
        "wooden_button": {
            "click_off": true,
            "click_on": true
        },
        "wooden_pressure_plate": {
            "click_off": true,
            "click_on": true
        },
        "wool": {
            "break": true,
            "fall": true,
            "hit": true,
            "place": true,
            "step": true
        }
    },
    "item": {
        "armor": {
            "equip_chain": true,
            "equip_diamond": true,
            "equip_elytra": true,
            "equip_generic": true,
            "equip_gold": true,
            "equip_iron": true,
            "equip_leather": true,
            "equip_netherite": true,
            "equip_turtle": true
        },
        "axe": {
            "strip": true,
            "scrape": true,
            "wax_off": true
        },
        "bone_meal": {
            "use": true
        },
        "book": {
            "page_turn": true,
            "put": true
        },
        "bottle": {
            "empty": true,
            "fill": true,
            "fill_dragonbreath": true
        },
        "bucket": {
            "empty": true,
            "empty_axolotl": true,
            "empty_fish": true,
            "empty_lava": true,
            "empty_powder_snow": true,
            "fill": true,
            "fill_axolotl": true,
            "fill_fish": true,
            "fill_lava": true,
            "fill_powder_snow": true
        },
        "chorus_fruit": {
            "teleport": true
        },
        "crop": {
            "plant": true
        },
        "crossbow": {
            "hit": true,
            "loading_end": true,
            "loading_middle": true,
            "loading_start": true,
            "quick_charge_1": true,
            "quick_charge_2": true,
            "quick_charge_3": true,
            "shoot": true
        },
        "dye": {
            "use": true
        },
        "elytra": {
            "flying": true
        },
        "firecharge": {
            "use": true
        },
        "flintandsteel": {
            "use": true
        },
        "glow_ink_sac": {
            "use": true
        },
        "hoe": {
            "till": true
        },
        "honeycomb": {
            "wax_on": true
        },
        "honey_bottle": {
            "drink": true
        },
        "ink_sac": {
            "use": true
        },
        "lodestone_compass": {
            "lock": true
        },
        "nether_wart": {
            "plant": true
        },
        "shield": {
            "block": true,
            "break": true
        },
        "shovel": {
            "flatten": true
        },
        "spyglass": {
            "use": true,
            "stop_using": true
        },
        "totem": {
            "use": true
        },
        "trident": {
            "hit": true,
            "hit_ground": true,
            "return": true,
            "riptide_1": true,
            "riptide_2": true,
            "riptide_3": true,
            "throw": true,
            "thunder": true
        }
    },
    "entity": {
        "armor_stand": {
            "break": true,
            "fall": true,
            "hit": true,
            "place": true
        },
        "arrow": {
            "hit": true,
            "hit_player": true,
            "shoot": true
        },
        "axolotl": {
            "attack": true,
            "death": true,
            "hurt": true,
            "idle_air": true,
            "idle_water": true,
            "splash": true,
            "swim": true
        },
        "bat": {
            "ambient": true,
            "death": true,
            "hurt": true,
            "loop": true,
            "takeoff": true
        },
        "bee": {
            "death": true,
            "hurt": true,
            "loop_aggressive": true,
            "loop": true,
            "sting": true,
            "pollinate": true
        },
        "blaze": {
            "ambient": true,
            "burn": true,
            "death": true,
            "hurt": true,
            "shoot": true
        },
        "boat": {
            "paddle_land": true,
            "paddle_water": true
        },
        "cat": {
            "ambient": true,
            "stray_ambient": true,
            "death": true,
            "eat": true,
            "hiss": true,
            "beg_for_food": true,
            "hurt": true,
            "purr": true,
            "purreow": true
        },
        "chicken": {
            "ambient": true,
            "death": true,
            "egg": true,
            "hurt": true,
            "step": true
        },
        "cod": {
            "ambient": true,
            "death": true,
            "flop": true,
            "hurt": true
        },
        "cow": {
            "ambient": true,
            "death": true,
            "hurt": true,
            "milk": true,
            "step": true
        },
        "creeper": {
            "death": true,
            "hurt": true,
            "primed": true
        },
        "dolphin": {
            "ambient": true,
            "ambient_water": true,
            "attack": true,
            "death": true,
            "eat": true,
            "hurt": true,
            "jump": true,
            "play": true,
            "splash": true,
            "swim": true
        },
        "donkey": {
            "ambient": true,
            "angry": true,
            "chest": true,
            "death": true,
            "eat": true,
            "hurt": true
        },
        "drowned": {
            "ambient": true,
            "ambient_water": true,
            "death": true,
            "death_water": true,
            "hurt": true,
            "hurt_water": true,
            "shoot": true,
            "step": true,
            "swim": true
        },
        "egg": {
            "throw": true
        },
        "elder_guardian": {
            "ambient": true,
            "ambient_land": true,
            "curse": true,
            "death": true,
            "death_land": true,
            "flop": true,
            "hurt": true,
            "hurt_land": true
        },
        "ender_dragon": {
            "ambient": true,
            "death": true,
            "flap": true,
            "growl": true,
            "hurt": true,
            "shoot": true
        },
        "dragon_fireball": {
            "explode": true
        },
        "ender_eye": {
            "death": true,
            "launch": true
        },
        "enderman": {
            "ambient": true,
            "death": true,
            "hurt": true,
            "scream": true,
            "stare": true,
            "teleport": true
        },
        "endermite": {
            "ambient": true,
            "death": true,
            "hurt": true,
            "step": true
        },
        "ender_pearl": {
            "throw": true
        },
        "evoker": {
            "ambient": true,
            "cast_spell": true,
            "celebrate": true,
            "death": true,
            "hurt": true,
            "prepare_attack": true,
            "prepare_summon": true,
            "prepare_wololo": true
        },
        "evoker_fangs": {
            "attack": true
        },
        "experience_bottle": {
            "throw": true
        },
        "experience_orb": {
            "pickup": true
        },
        "firework_rocket": {
            "blast": true,
            "blast_far": true,
            "large_blast": true,
            "large_blast_far": true,
            "launch": true,
            "shoot": true,
            "twinkle": true,
            "twinkle_far": true
        },
        "fish": {
            "swim": true
        },
        "fishing_bobber": {
            "retrieve": true,
            "splash": true,
            "throw": true
        },
        "fox": {
            "aggro": true,
            "ambient": true,
            "bite": true,
            "death": true,
            "eat": true,
            "hurt": true,
            "screech": true,
            "sleep": true,
            "sniff": true,
            "spit": true,
            "teleport": true
        },
        "generic": {
            "big_fall": true,
            "burn": true,
            "death": true,
            "drink": true,
            "eat": true,
            "explode": true,
            "extinguish_fire": true,
            "hurt": true,
            "small_fall": true,
            "splash": true,
            "swim": true
        },
        "ghast": {
            "ambient": true,
            "death": true,
            "hurt": true,
            "scream": true,
            "shoot": true,
            "warn": true
        },
        "glow_item_frame": {
            "add_item": true,
            "break": true,
            "place": true,
            "remove_item": true,
            "rotate_item": true
        },
        "glow_squid": {
            "ambient": true,
            "death": true,
            "hurt": true,
            "squirt": true
        },
        "goat": {
            "ambient": true,
            "death": true,
            "eat": true,
            "hurt": true,
            "long_jump": true,
            "milk": true,
            "prepare_ram": true,
            "ram_impact": true,
            "screaming": {
                "ambient": true,
                "death": true,
                "eat": true,
                "hurt": true,
                "long_jump": true,
                "milk": true,
                "prepare_ram": true,
                "ram_impact": true
            },
            "step": true
        },
        "guardian": {
            "ambient": true,
            "ambient_land": true,
            "attack": true,
            "death": true,
            "death_land": true,
            "flop": true,
            "hurt": true,
            "hurt_land": true
        },
        "hoglin": {
            "ambient": true,
            "angry": true,
            "attack": true,
            "converted_to_zombified": true,
            "death": true,
            "hurt": true,
            "retreat": true,
            "step": true
        },
        "horse": {
            "ambient": true,
            "angry": true,
            "armor": true,
            "breathe": true,
            "death": true,
            "eat": true,
            "gallop": true,
            "hurt": true,
            "jump": true,
            "land": true,
            "saddle": true,
            "step": true,
            "step_wood": true
        },
        "hostile": {
            "big_fall": true,
            "death": true,
            "hurt": true,
            "small_fall": true,
            "splash": true,
            "swim": true
        },
        "husk": {
            "ambient": true,
            "converted_to_zombie": true,
            "death": true,
            "hurt": true,
            "step": true
        },
        "illusioner": {
            "ambient": true,
            "cast_spell": true,
            "death": true,
            "hurt": true,
            "mirror_move": true,
            "prepare_blindness": true,
            "prepare_mirror": true
        },
        "iron_golem": {
            "attack": true,
            "damage": true,
            "death": true,
            "hurt": true,
            "repair": true,
            "step": true
        },
        "item_frame": {
            "add_item": true,
            "break": true,
            "place": true,
            "remove_item": true,
            "rotate_item": true
        },
        "item": {
            "break": true,
            "pickup": true
        },
        "leash_knot": {
            "break": true,
            "place": true
        },
        "lightning_bolt": {
            "impact": true,
            "thunder": true
        },
        "lingering_potion": {
            "throw": true
        },
        "llama": {
            "ambient": true,
            "angry": true,
            "chest": true,
            "death": true,
            "eat": true,
            "hurt": true,
            "spit": true,
            "step": true,
            "swag": true
        },
        "magma_cube": {
            "death_small": true,
            "death": true,
            "hurt": true,
            "hurt_small": true,
            "jump": true,
            "squish": true,
            "squish_small": true
        },
        "minecart": {
            "inside": true,
            "riding": true
        },
        "mooshroom": {
            "convert": true,
            "eat": true,
            "milk": true,
            "suspicious_milk": true,
            "shear": true
        },
        "mule": {
            "ambient": true,
            "angry": true,
            "chest": true,
            "death": true,
            "eat": true,
            "hurt": true
        },
        "ocelot": {
            "hurt": true,
            "ambient": true,
            "death": true
        },
        "painting": {
            "break": true,
            "place": true
        },
        "panda": {
            "pre_sneeze": true,
            "sneeze": true,
            "ambient": true,
            "death": true,
            "eat": true,
            "step": true,
            "cant_breed": true,
            "aggressive_ambient": true,
            "worried_ambient": true,
            "hurt": true,
            "bite": true
        },
        "parrot": {
            "ambient": true,
            "death": true,
            "eat": true,
            "fly": true,
            "hurt": true,
            "imitate": {
                "blaze": true,
                "creeper": true,
                "drowned": true,
                "elder_guardian": true,
                "ender_dragon": true,
                "endermite": true,
                "evoker": true,
                "ghast": true,
                "guardian": true,
                "hoglin": true,
                "husk": true,
                "illusioner": true,
                "magma_cube": true,
                "phantom": true,
                "piglin": true,
                "piglin_brute": true,
                "pillager": true,
                "ravager": true,
                "shulker": true,
                "silverfish": true,
                "skeleton": true,
                "slime": true,
                "spider": true,
                "stray": true,
                "vex": true,
                "vindicator": true,
                "witch": true,
                "wither": true,
                "wither_skeleton": true,
                "zoglin": true,
                "zombie": true,
                "zombie_villager": true
            },
            "step": true
        },
        "phantom": {
            "ambient": true,
            "bite": true,
            "death": true,
            "flap": true,
            "hurt": true,
            "swoop": true
        },
        "pig": {
            "ambient": true,
            "death": true,
            "hurt": true,
            "saddle": true,
            "step": true
        },
        "piglin": {
            "admiring_item": true,
            "ambient": true,
            "angry": true,
            "celebrate": true,
            "death": true,
            "jealous": true,
            "hurt": true,
            "retreat": true,
            "step": true,
            "converted_to_zombified": true
        },
        "piglin_brute": {
            "ambient": true,
            "angry": true,
            "death": true,
            "hurt": true,
            "step": true,
            "converted_to_zombified": true
        },
        "pillager": {
            "ambient": true,
            "celebrate": true,
            "death": true,
            "hurt": true
        },
        "player": {
            "attack": {
                "crit": true,
                "knockback": true,
                "nodamage": true,
                "strong": true,
                "sweep": true,
                "weak": true
            },
            "big_fall": true,
            "breath": true,
            "burp": true,
            "death": true,
            "hurt": true,
            "hurt_drown": true,
            "hurt_freeze": true,
            "hurt_on_fire": true,
            "hurt_sweet_berry_bush": true,
            "levelup": true,
            "small_fall": true,
            "splash": {
                "???": true,
                "high_speed": true
            },
            "swim": true
        },
        "polar_bear": {
            "ambient": true,
            "ambient_baby": true,
            "death": true,
            "hurt": true,
            "step": true,
            "warning": true
        },
        "puffer_fish": {
            "ambient": true,
            "blow_out": true,
            "blow_up": true,
            "death": true,
            "flop": true,
            "hurt": true,
            "sting": true
        },
        "rabbit": {
            "ambient": true,
            "attack": true,
            "death": true,
            "hurt": true,
            "jump": true
        },
        "ravager": {
            "ambient": true,
            "attack": true,
            "celebrate": true,
            "death": true,
            "hurt": true,
            "step": true,
            "stunned": true,
            "roar": true
        },
        "salmon": {
            "ambient": true,
            "death": true,
            "flop": true,
            "hurt": true
        },
        "sheep": {
            "ambient": true,
            "death": true,
            "hurt": true,
            "shear": true,
            "step": true
        },
        "shulker": {
            "ambient": true,
            "close": true,
            "death": true,
            "hurt": true,
            "hurt_closed": true,
            "open": true,
            "shoot": true,
            "teleport": true
        },
        "shulker_bullet": {
            "hit": true,
            "hurt": true
        },
        "silverfish": {
            "ambient": true,
            "death": true,
            "hurt": true,
            "step": true
        },
        "skeleton": {
            "ambient": true,
            "converted_to_stray": true,
            "death": true,
            "hurt": true,
            "shoot": true,
            "step": true
        },
        "skeleton_horse": {
            "ambient": true,
            "death": true,
            "hurt": true,
            "swim": true,
            "ambient_water": true,
            "gallop_water": true,
            "jump_water": true,
            "step_water": true
        },
        "slime": {
            "attack": true,
            "death": true,
            "hurt": true,
            "jump": true,
            "squish": true,
            "death_small": true,
            "hurt_small": true,
            "jump_small": true,
            "squish_small": true
        },
        "strider": {
            "ambient": true,
            "happy": true,
            "retreat": true,
            "death": true,
            "hurt": true,
            "step": true,
            "step_lava": true,
            "eat": true,
            "saddle": true
        },
        "snowball": {
            "throw": true
        },
        "snow_golem": {
            "ambient": true,
            "death": true,
            "hurt": true,
            "shoot": true,
            "shear": true
        },
        "spider": {
            "ambient": true,
            "death": true,
            "hurt": true,
            "step": true
        },
        "splash_potion": {
            "break": true,
            "throw": true
        },
        "squid": {
            "ambient": true,
            "death": true,
            "hurt": true,
            "squirt": true
        },
        "stray": {
            "ambient": true,
            "death": true,
            "hurt": true,
            "step": true
        },
        "tnt": {
            "primed": true
        },
        "tropical_fish": {
            "ambient": true,
            "death": true,
            "flop": true,
            "hurt": true
        },
        "turtle": {
            "ambient_land": true,
            "death": true,
            "death_baby": true,
            "egg_break": true,
            "egg_crack": true,
            "egg_hatch": true,
            "hurt": true,
            "hurt_baby": true,
            "lay_egg": true,
            "shamble": true,
            "shamble_baby": true,
            "swim": true
        },
        "vex": {
            "ambient": true,
            "charge": true,
            "death": true,
            "hurt": true
        },
        "villager": {
            "ambient": true,
            "celebrate": true,
            "death": true,
            "hurt": true,
            "no": true,
            "trade": true,
            "yes": true,
            "work_armorer": true,
            "work_butcher": true,
            "work_cartographer": true,
            "work_cleric": true,
            "work_farmer": true,
            "work_fisherman": true,
            "work_fletcher": true,
            "work_leatherworker": true,
            "work_librarian": true,
            "work_mason": true,
            "work_shepherd": true,
            "work_toolsmith": true,
            "work_weaponsmith": true
        },
        "vindicator": {
            "ambient": true,
            "celebrate": true,
            "death": true,
            "hurt": true
        },
        "wandering_trader": {
            "ambient": true,
            "death": true,
            "disappeared": true,
            "drink_milk": true,
            "drink_potion": true,
            "hurt": true,
            "no": true,
            "reappeared": true,
            "trade": true,
            "yes": true
        },
        "witch": {
            "ambient": true,
            "celebrate": true,
            "death": true,
            "drink": true,
            "hurt": true,
            "throw": true
        },
        "wither": {
            "ambient": true,
            "break_block": true,
            "death": true,
            "hurt": true,
            "shoot": true,
            "spawn": true
        },
        "wither_skeleton": {
            "ambient": true,
            "death": true,
            "hurt": true,
            "step": true
        },
        "wolf": {
            "ambient": true,
            "death": true,
            "growl": true,
            "howl": true,
            "hurt": true,
            "pant": true,
            "shake": true,
            "step": true,
            "whine": true
        },
        "zoglin": {
            "ambient": true,
            "angry": true,
            "attack": true,
            "death": true,
            "hurt": true,
            "step": true
        },
        "zombie": {
            "ambient": true,
            "attack_wooden_door": true,
            "attack_iron_door": true,
            "break_wooden_door": true,
            "converted_to_drowned": true,
            "death": true,
            "destroy_egg": true,
            "hurt": true,
            "infect": true,
            "step": true
        },
        "zombie_horse": {
            "ambient": true,
            "death": true,
            "hurt": true
        },
        "zombified_piglin": {
            "ambient": true,
            "angry": true,
            "death": true,
            "hurt": true
        },
        "zombie_villager": {
            "ambient": true,
            "converted": true,
            "cure": true,
            "death": true,
            "hurt": true,
            "step": true
        }
    },
    "music": {
        "creative": true,
        "credits": true,
        "dragon": true,
        "end": true,
        "game": true,
        "menu": true,
        "nether": {
            "basalt_deltas": true,
            "nether_wastes": true,
            "soul_sand_valley": true,
            "crimson_forest": true,
            "warped_forest": true
        },
        "under_water": true
    },
    "music_disc": {
        "11": true,
        "13": true,
        "blocks": true,
        "cat": true,
        "chirp": true,
        "far": true,
        "mall": true,
        "mellohi": true,
        "pigstep": true,
        "stal": true,
        "strad": true,
        "wait": true,
        "ward": true
    },
    "event": {
        "raid": {
            "horn": true
        }
    },
    "particle": {
        "soul_escape": true
    },
    "enchant": {
        "thorns": {
            "hit": true
        }
    },
    "ui": {
        "button": {
            "click": true
        },
        "loom": {
            "select_pattern": true,
            "take_result": true
        },
        "cartography_table": {
            "take_result": true
        },
        "stonecutter": {
            "take_result": true,
            "select_recipe": true
        },
        "toast": {
            "challenge_complete": true,
            "in": true,
            "out": true
        }
    },
    "weather": {
        "rain": {
            "???": true,
            "above": true
        }
    }
};
export const allSounds = [
    "ambient.cave",
    "ambient.basalt_deltas.additions",
    "ambient.basalt_deltas.loop",
    "ambient.basalt_deltas.mood",
    "ambient.crimson_forest.additions",
    "ambient.crimson_forest.loop",
    "ambient.crimson_forest.mood",
    "ambient.nether_wastes.additions",
    "ambient.nether_wastes.loop",
    "ambient.nether_wastes.mood",
    "ambient.soul_sand_valley.additions",
    "ambient.soul_sand_valley.loop",
    "ambient.soul_sand_valley.mood",
    "ambient.warped_forest.additions",
    "ambient.warped_forest.loop",
    "ambient.warped_forest.mood",
    "ambient.underwater.enter",
    "ambient.underwater.exit",
    "ambient.underwater.loop",
    "ambient.underwater.loop.additions",
    "ambient.underwater.loop.additions.rare",
    "ambient.underwater.loop.additions.ultra_rare",
    "block.amethyst_block.break",
    "block.amethyst_block.chime",
    "block.amethyst_block.fall",
    "block.amethyst_block.hit",
    "block.amethyst_block.place",
    "block.amethyst_block.step",
    "block.amethyst_cluster.break",
    "block.amethyst_cluster.fall",
    "block.amethyst_cluster.hit",
    "block.amethyst_cluster.place",
    "block.amethyst_cluster.step",
    "block.ancient_debris.break",
    "block.ancient_debris.step",
    "block.ancient_debris.place",
    "block.ancient_debris.hit",
    "block.ancient_debris.fall",
    "block.anvil.break",
    "block.anvil.destroy",
    "block.anvil.fall",
    "block.anvil.hit",
    "block.anvil.land",
    "block.anvil.place",
    "block.anvil.step",
    "block.anvil.use",
    "item.armor.equip_chain",
    "item.armor.equip_diamond",
    "item.armor.equip_elytra",
    "item.armor.equip_generic",
    "item.armor.equip_gold",
    "item.armor.equip_iron",
    "item.armor.equip_leather",
    "item.armor.equip_netherite",
    "item.armor.equip_turtle",
    "entity.armor_stand.break",
    "entity.armor_stand.fall",
    "entity.armor_stand.hit",
    "entity.armor_stand.place",
    "entity.arrow.hit",
    "entity.arrow.hit_player",
    "entity.arrow.shoot",
    "item.axe.strip",
    "item.axe.scrape",
    "item.axe.wax_off",
    "entity.axolotl.attack",
    "entity.axolotl.death",
    "entity.axolotl.hurt",
    "entity.axolotl.idle_air",
    "entity.axolotl.idle_water",
    "entity.axolotl.splash",
    "entity.axolotl.swim",
    "block.azalea.break",
    "block.azalea.fall",
    "block.azalea.hit",
    "block.azalea.place",
    "block.azalea.step",
    "block.azalea_leaves.break",
    "block.azalea_leaves.fall",
    "block.azalea_leaves.hit",
    "block.azalea_leaves.place",
    "block.azalea_leaves.step",
    "block.bamboo.break",
    "block.bamboo.fall",
    "block.bamboo.hit",
    "block.bamboo.place",
    "block.bamboo.step",
    "block.bamboo_sapling.break",
    "block.bamboo_sapling.hit",
    "block.bamboo_sapling.place",
    "block.barrel.close",
    "block.barrel.open",
    "block.basalt.break",
    "block.basalt.step",
    "block.basalt.place",
    "block.basalt.hit",
    "block.basalt.fall",
    "entity.bat.ambient",
    "entity.bat.death",
    "entity.bat.hurt",
    "entity.bat.loop",
    "entity.bat.takeoff",
    "block.beacon.activate",
    "block.beacon.ambient",
    "block.beacon.deactivate",
    "block.beacon.power_select",
    "entity.bee.death",
    "entity.bee.hurt",
    "entity.bee.loop_aggressive",
    "entity.bee.loop",
    "entity.bee.sting",
    "entity.bee.pollinate",
    "block.beehive.drip",
    "block.beehive.enter",
    "block.beehive.exit",
    "block.beehive.shear",
    "block.beehive.work",
    "block.bell.use",
    "block.bell.resonate",
    "block.big_dripleaf.break",
    "block.big_dripleaf.fall",
    "block.big_dripleaf.hit",
    "block.big_dripleaf.place",
    "block.big_dripleaf.step",
    "entity.blaze.ambient",
    "entity.blaze.burn",
    "entity.blaze.death",
    "entity.blaze.hurt",
    "entity.blaze.shoot",
    "entity.boat.paddle_land",
    "entity.boat.paddle_water",
    "block.bone_block.break",
    "block.bone_block.fall",
    "block.bone_block.hit",
    "block.bone_block.place",
    "block.bone_block.step",
    "item.bone_meal.use",
    "item.book.page_turn",
    "item.book.put",
    "block.blastfurnace.fire_crackle",
    "item.bottle.empty",
    "item.bottle.fill",
    "item.bottle.fill_dragonbreath",
    "block.brewing_stand.brew",
    "block.bubble_column.bubble_pop",
    "block.bubble_column.upwards_ambient",
    "block.bubble_column.upwards_inside",
    "block.bubble_column.whirlpool_ambient",
    "block.bubble_column.whirlpool_inside",
    "item.bucket.empty",
    "item.bucket.empty_axolotl",
    "item.bucket.empty_fish",
    "item.bucket.empty_lava",
    "item.bucket.empty_powder_snow",
    "item.bucket.fill",
    "item.bucket.fill_axolotl",
    "item.bucket.fill_fish",
    "item.bucket.fill_lava",
    "item.bucket.fill_powder_snow",
    "block.cake.add_candle",
    "block.calcite.break",
    "block.calcite.step",
    "block.calcite.place",
    "block.calcite.hit",
    "block.calcite.fall",
    "block.campfire.crackle",
    "block.candle.ambient",
    "block.candle.break",
    "block.candle.extinguish",
    "block.candle.fall",
    "block.candle.hit",
    "block.candle.place",
    "block.candle.step",
    "entity.cat.ambient",
    "entity.cat.stray_ambient",
    "entity.cat.death",
    "entity.cat.eat",
    "entity.cat.hiss",
    "entity.cat.beg_for_food",
    "entity.cat.hurt",
    "entity.cat.purr",
    "entity.cat.purreow",
    "block.cave_vines.break",
    "block.cave_vines.fall",
    "block.cave_vines.hit",
    "block.cave_vines.place",
    "block.cave_vines.step",
    "block.cave_vines.pick_berries",
    "block.chain.break",
    "block.chain.fall",
    "block.chain.hit",
    "block.chain.place",
    "block.chain.step",
    "block.chest.close",
    "block.chest.locked",
    "block.chest.open",
    "entity.chicken.ambient",
    "entity.chicken.death",
    "entity.chicken.egg",
    "entity.chicken.hurt",
    "entity.chicken.step",
    "block.chorus_flower.death",
    "block.chorus_flower.grow",
    "item.chorus_fruit.teleport",
    "entity.cod.ambient",
    "entity.cod.death",
    "entity.cod.flop",
    "entity.cod.hurt",
    "block.comparator.click",
    "block.composter.empty",
    "block.composter.fill",
    "block.composter.fill_success",
    "block.composter.ready",
    "block.conduit.activate",
    "block.conduit.ambient",
    "block.conduit.ambient.short",
    "block.conduit.attack.target",
    "block.conduit.deactivate",
    "block.copper.break",
    "block.copper.step",
    "block.copper.place",
    "block.copper.hit",
    "block.copper.fall",
    "block.coral_block.break",
    "block.coral_block.fall",
    "block.coral_block.hit",
    "block.coral_block.place",
    "block.coral_block.step",
    "entity.cow.ambient",
    "entity.cow.death",
    "entity.cow.hurt",
    "entity.cow.milk",
    "entity.cow.step",
    "entity.creeper.death",
    "entity.creeper.hurt",
    "entity.creeper.primed",
    "block.crop.break",
    "item.crop.plant",
    "item.crossbow.hit",
    "item.crossbow.loading_end",
    "item.crossbow.loading_middle",
    "item.crossbow.loading_start",
    "item.crossbow.quick_charge_1",
    "item.crossbow.quick_charge_2",
    "item.crossbow.quick_charge_3",
    "item.crossbow.shoot",
    "block.deepslate_bricks.break",
    "block.deepslate_bricks.fall",
    "block.deepslate_bricks.hit",
    "block.deepslate_bricks.place",
    "block.deepslate_bricks.step",
    "block.deepslate.break",
    "block.deepslate.fall",
    "block.deepslate.hit",
    "block.deepslate.place",
    "block.deepslate.step",
    "block.deepslate_tiles.break",
    "block.deepslate_tiles.fall",
    "block.deepslate_tiles.hit",
    "block.deepslate_tiles.place",
    "block.deepslate_tiles.step",
    "block.dispenser.dispense",
    "block.dispenser.fail",
    "block.dispenser.launch",
    "entity.dolphin.ambient",
    "entity.dolphin.ambient_water",
    "entity.dolphin.attack",
    "entity.dolphin.death",
    "entity.dolphin.eat",
    "entity.dolphin.hurt",
    "entity.dolphin.jump",
    "entity.dolphin.play",
    "entity.dolphin.splash",
    "entity.dolphin.swim",
    "entity.donkey.ambient",
    "entity.donkey.angry",
    "entity.donkey.chest",
    "entity.donkey.death",
    "entity.donkey.eat",
    "entity.donkey.hurt",
    "block.dripstone_block.break",
    "block.dripstone_block.step",
    "block.dripstone_block.place",
    "block.dripstone_block.hit",
    "block.dripstone_block.fall",
    "block.pointed_dripstone.break",
    "block.pointed_dripstone.step",
    "block.pointed_dripstone.place",
    "block.pointed_dripstone.hit",
    "block.pointed_dripstone.fall",
    "block.pointed_dripstone.land",
    "block.pointed_dripstone.drip_lava",
    "block.pointed_dripstone.drip_water",
    "block.pointed_dripstone.drip_lava_into_cauldron",
    "block.pointed_dripstone.drip_water_into_cauldron",
    "block.big_dripleaf.tilt_down",
    "block.big_dripleaf.tilt_up",
    "entity.drowned.ambient",
    "entity.drowned.ambient_water",
    "entity.drowned.death",
    "entity.drowned.death_water",
    "entity.drowned.hurt",
    "entity.drowned.hurt_water",
    "entity.drowned.shoot",
    "entity.drowned.step",
    "entity.drowned.swim",
    "item.dye.use",
    "entity.egg.throw",
    "entity.elder_guardian.ambient",
    "entity.elder_guardian.ambient_land",
    "entity.elder_guardian.curse",
    "entity.elder_guardian.death",
    "entity.elder_guardian.death_land",
    "entity.elder_guardian.flop",
    "entity.elder_guardian.hurt",
    "entity.elder_guardian.hurt_land",
    "item.elytra.flying",
    "block.enchantment_table.use",
    "block.ender_chest.close",
    "block.ender_chest.open",
    "entity.ender_dragon.ambient",
    "entity.ender_dragon.death",
    "entity.dragon_fireball.explode",
    "entity.ender_dragon.flap",
    "entity.ender_dragon.growl",
    "entity.ender_dragon.hurt",
    "entity.ender_dragon.shoot",
    "entity.ender_eye.death",
    "entity.ender_eye.launch",
    "entity.enderman.ambient",
    "entity.enderman.death",
    "entity.enderman.hurt",
    "entity.enderman.scream",
    "entity.enderman.stare",
    "entity.enderman.teleport",
    "entity.endermite.ambient",
    "entity.endermite.death",
    "entity.endermite.hurt",
    "entity.endermite.step",
    "entity.ender_pearl.throw",
    "block.end_gateway.spawn",
    "block.end_portal_frame.fill",
    "block.end_portal.spawn",
    "entity.evoker.ambient",
    "entity.evoker.cast_spell",
    "entity.evoker.celebrate",
    "entity.evoker.death",
    "entity.evoker_fangs.attack",
    "entity.evoker.hurt",
    "entity.evoker.prepare_attack",
    "entity.evoker.prepare_summon",
    "entity.evoker.prepare_wololo",
    "entity.experience_bottle.throw",
    "entity.experience_orb.pickup",
    "block.fence_gate.close",
    "block.fence_gate.open",
    "item.firecharge.use",
    "entity.firework_rocket.blast",
    "entity.firework_rocket.blast_far",
    "entity.firework_rocket.large_blast",
    "entity.firework_rocket.large_blast_far",
    "entity.firework_rocket.launch",
    "entity.firework_rocket.shoot",
    "entity.firework_rocket.twinkle",
    "entity.firework_rocket.twinkle_far",
    "block.fire.ambient",
    "block.fire.extinguish",
    "entity.fish.swim",
    "entity.fishing_bobber.retrieve",
    "entity.fishing_bobber.splash",
    "entity.fishing_bobber.throw",
    "item.flintandsteel.use",
    "block.flowering_azalea.break",
    "block.flowering_azalea.fall",
    "block.flowering_azalea.hit",
    "block.flowering_azalea.place",
    "block.flowering_azalea.step",
    "entity.fox.aggro",
    "entity.fox.ambient",
    "entity.fox.bite",
    "entity.fox.death",
    "entity.fox.eat",
    "entity.fox.hurt",
    "entity.fox.screech",
    "entity.fox.sleep",
    "entity.fox.sniff",
    "entity.fox.spit",
    "entity.fox.teleport",
    "block.roots.break",
    "block.roots.step",
    "block.roots.place",
    "block.roots.hit",
    "block.roots.fall",
    "block.furnace.fire_crackle",
    "entity.generic.big_fall",
    "entity.generic.burn",
    "entity.generic.death",
    "entity.generic.drink",
    "entity.generic.eat",
    "entity.generic.explode",
    "entity.generic.extinguish_fire",
    "entity.generic.hurt",
    "entity.generic.small_fall",
    "entity.generic.splash",
    "entity.generic.swim",
    "entity.ghast.ambient",
    "entity.ghast.death",
    "entity.ghast.hurt",
    "entity.ghast.scream",
    "entity.ghast.shoot",
    "entity.ghast.warn",
    "block.gilded_blackstone.break",
    "block.gilded_blackstone.fall",
    "block.gilded_blackstone.hit",
    "block.gilded_blackstone.place",
    "block.gilded_blackstone.step",
    "block.glass.break",
    "block.glass.fall",
    "block.glass.hit",
    "block.glass.place",
    "block.glass.step",
    "item.glow_ink_sac.use",
    "entity.glow_item_frame.add_item",
    "entity.glow_item_frame.break",
    "entity.glow_item_frame.place",
    "entity.glow_item_frame.remove_item",
    "entity.glow_item_frame.rotate_item",
    "entity.glow_squid.ambient",
    "entity.glow_squid.death",
    "entity.glow_squid.hurt",
    "entity.glow_squid.squirt",
    "entity.goat.ambient",
    "entity.goat.death",
    "entity.goat.eat",
    "entity.goat.hurt",
    "entity.goat.long_jump",
    "entity.goat.milk",
    "entity.goat.prepare_ram",
    "entity.goat.ram_impact",
    "entity.goat.screaming.ambient",
    "entity.goat.screaming.death",
    "entity.goat.screaming.eat",
    "entity.goat.screaming.hurt",
    "entity.goat.screaming.long_jump",
    "entity.goat.screaming.milk",
    "entity.goat.screaming.prepare_ram",
    "entity.goat.screaming.ram_impact",
    "entity.goat.step",
    "block.grass.break",
    "block.grass.fall",
    "block.grass.hit",
    "block.grass.place",
    "block.grass.step",
    "block.gravel.break",
    "block.gravel.fall",
    "block.gravel.hit",
    "block.gravel.place",
    "block.gravel.step",
    "block.grindstone.use",
    "entity.guardian.ambient",
    "entity.guardian.ambient_land",
    "entity.guardian.attack",
    "entity.guardian.death",
    "entity.guardian.death_land",
    "entity.guardian.flop",
    "entity.guardian.hurt",
    "entity.guardian.hurt_land",
    "block.hanging_roots.break",
    "block.hanging_roots.fall",
    "block.hanging_roots.hit",
    "block.hanging_roots.place",
    "block.hanging_roots.step",
    "item.hoe.till",
    "entity.hoglin.ambient",
    "entity.hoglin.angry",
    "entity.hoglin.attack",
    "entity.hoglin.converted_to_zombified",
    "entity.hoglin.death",
    "entity.hoglin.hurt",
    "entity.hoglin.retreat",
    "entity.hoglin.step",
    "block.honey_block.break",
    "block.honey_block.fall",
    "block.honey_block.hit",
    "block.honey_block.place",
    "block.honey_block.slide",
    "block.honey_block.step",
    "item.honeycomb.wax_on",
    "item.honey_bottle.drink",
    "entity.horse.ambient",
    "entity.horse.angry",
    "entity.horse.armor",
    "entity.horse.breathe",
    "entity.horse.death",
    "entity.horse.eat",
    "entity.horse.gallop",
    "entity.horse.hurt",
    "entity.horse.jump",
    "entity.horse.land",
    "entity.horse.saddle",
    "entity.horse.step",
    "entity.horse.step_wood",
    "entity.hostile.big_fall",
    "entity.hostile.death",
    "entity.hostile.hurt",
    "entity.hostile.small_fall",
    "entity.hostile.splash",
    "entity.hostile.swim",
    "entity.husk.ambient",
    "entity.husk.converted_to_zombie",
    "entity.husk.death",
    "entity.husk.hurt",
    "entity.husk.step",
    "entity.illusioner.ambient",
    "entity.illusioner.cast_spell",
    "entity.illusioner.death",
    "entity.illusioner.hurt",
    "entity.illusioner.mirror_move",
    "entity.illusioner.prepare_blindness",
    "entity.illusioner.prepare_mirror",
    "item.ink_sac.use",
    "block.iron_door.close",
    "block.iron_door.open",
    "entity.iron_golem.attack",
    "entity.iron_golem.damage",
    "entity.iron_golem.death",
    "entity.iron_golem.hurt",
    "entity.iron_golem.repair",
    "entity.iron_golem.step",
    "block.iron_trapdoor.close",
    "block.iron_trapdoor.open",
    "entity.item_frame.add_item",
    "entity.item_frame.break",
    "entity.item_frame.place",
    "entity.item_frame.remove_item",
    "entity.item_frame.rotate_item",
    "entity.item.break",
    "entity.item.pickup",
    "block.ladder.break",
    "block.ladder.fall",
    "block.ladder.hit",
    "block.ladder.place",
    "block.ladder.step",
    "block.lantern.break",
    "block.lantern.fall",
    "block.lantern.hit",
    "block.lantern.place",
    "block.lantern.step",
    "block.large_amethyst_bud.break",
    "block.large_amethyst_bud.place",
    "block.lava.ambient",
    "block.lava.extinguish",
    "block.lava.pop",
    "entity.leash_knot.break",
    "entity.leash_knot.place",
    "block.lever.click",
    "entity.lightning_bolt.impact",
    "entity.lightning_bolt.thunder",
    "entity.lingering_potion.throw",
    "entity.llama.ambient",
    "entity.llama.angry",
    "entity.llama.chest",
    "entity.llama.death",
    "entity.llama.eat",
    "entity.llama.hurt",
    "entity.llama.spit",
    "entity.llama.step",
    "entity.llama.swag",
    "entity.magma_cube.death_small",
    "block.lodestone.break",
    "block.lodestone.step",
    "block.lodestone.place",
    "block.lodestone.hit",
    "block.lodestone.fall",
    "item.lodestone_compass.lock",
    "entity.magma_cube.death",
    "entity.magma_cube.hurt",
    "entity.magma_cube.hurt_small",
    "entity.magma_cube.jump",
    "entity.magma_cube.squish",
    "entity.magma_cube.squish_small",
    "block.medium_amethyst_bud.break",
    "block.medium_amethyst_bud.place",
    "block.metal.break",
    "block.metal.fall",
    "block.metal.hit",
    "block.metal.place",
    "block.metal_pressure_plate.click_off",
    "block.metal_pressure_plate.click_on",
    "block.metal.step",
    "entity.minecart.inside.underwater",
    "entity.minecart.inside",
    "entity.minecart.riding",
    "entity.mooshroom.convert",
    "entity.mooshroom.eat",
    "entity.mooshroom.milk",
    "entity.mooshroom.suspicious_milk",
    "entity.mooshroom.shear",
    "block.moss_carpet.break",
    "block.moss_carpet.fall",
    "block.moss_carpet.hit",
    "block.moss_carpet.place",
    "block.moss_carpet.step",
    "block.moss.break",
    "block.moss.fall",
    "block.moss.hit",
    "block.moss.place",
    "block.moss.step",
    "entity.mule.ambient",
    "entity.mule.angry",
    "entity.mule.chest",
    "entity.mule.death",
    "entity.mule.eat",
    "entity.mule.hurt",
    "music.creative",
    "music.credits",
    "music_disc.11",
    "music_disc.13",
    "music_disc.blocks",
    "music_disc.cat",
    "music_disc.chirp",
    "music_disc.far",
    "music_disc.mall",
    "music_disc.mellohi",
    "music_disc.pigstep",
    "music_disc.stal",
    "music_disc.strad",
    "music_disc.wait",
    "music_disc.ward",
    "music.dragon",
    "music.end",
    "music.game",
    "music.menu",
    "music.nether.basalt_deltas",
    "music.nether.nether_wastes",
    "music.nether.soul_sand_valley",
    "music.nether.crimson_forest",
    "music.nether.warped_forest",
    "music.under_water",
    "block.nether_bricks.break",
    "block.nether_bricks.step",
    "block.nether_bricks.place",
    "block.nether_bricks.hit",
    "block.nether_bricks.fall",
    "block.nether_wart.break",
    "item.nether_wart.plant",
    "block.stem.break",
    "block.stem.step",
    "block.stem.place",
    "block.stem.hit",
    "block.stem.fall",
    "block.nylium.break",
    "block.nylium.step",
    "block.nylium.place",
    "block.nylium.hit",
    "block.nylium.fall",
    "block.nether_sprouts.break",
    "block.nether_sprouts.step",
    "block.nether_sprouts.place",
    "block.nether_sprouts.hit",
    "block.nether_sprouts.fall",
    "block.fungus.break",
    "block.fungus.step",
    "block.fungus.place",
    "block.fungus.hit",
    "block.fungus.fall",
    "block.weeping_vines.break",
    "block.weeping_vines.step",
    "block.weeping_vines.place",
    "block.weeping_vines.hit",
    "block.weeping_vines.fall",
    "block.wart_block.break",
    "block.wart_block.step",
    "block.wart_block.place",
    "block.wart_block.hit",
    "block.wart_block.fall",
    "block.netherite_block.break",
    "block.netherite_block.step",
    "block.netherite_block.place",
    "block.netherite_block.hit",
    "block.netherite_block.fall",
    "block.netherrack.break",
    "block.netherrack.step",
    "block.netherrack.place",
    "block.netherrack.hit",
    "block.netherrack.fall",
    "block.note_block.basedrum",
    "block.note_block.bass",
    "block.note_block.bell",
    "block.note_block.chime",
    "block.note_block.flute",
    "block.note_block.guitar",
    "block.note_block.harp",
    "block.note_block.hat",
    "block.note_block.pling",
    "block.note_block.snare",
    "block.note_block.xylophone",
    "block.note_block.iron_xylophone",
    "block.note_block.cow_bell",
    "block.note_block.didgeridoo",
    "block.note_block.bit",
    "block.note_block.banjo",
    "entity.ocelot.hurt",
    "entity.ocelot.ambient",
    "entity.ocelot.death",
    "entity.painting.break",
    "entity.painting.place",
    "entity.panda.pre_sneeze",
    "entity.panda.sneeze",
    "entity.panda.ambient",
    "entity.panda.death",
    "entity.panda.eat",
    "entity.panda.step",
    "entity.panda.cant_breed",
    "entity.panda.aggressive_ambient",
    "entity.panda.worried_ambient",
    "entity.panda.hurt",
    "entity.panda.bite",
    "entity.parrot.ambient",
    "entity.parrot.death",
    "entity.parrot.eat",
    "entity.parrot.fly",
    "entity.parrot.hurt",
    "entity.parrot.imitate.blaze",
    "entity.parrot.imitate.creeper",
    "entity.parrot.imitate.drowned",
    "entity.parrot.imitate.elder_guardian",
    "entity.parrot.imitate.ender_dragon",
    "entity.parrot.imitate.endermite",
    "entity.parrot.imitate.evoker",
    "entity.parrot.imitate.ghast",
    "entity.parrot.imitate.guardian",
    "entity.parrot.imitate.hoglin",
    "entity.parrot.imitate.husk",
    "entity.parrot.imitate.illusioner",
    "entity.parrot.imitate.magma_cube",
    "entity.parrot.imitate.phantom",
    "entity.parrot.imitate.piglin",
    "entity.parrot.imitate.piglin_brute",
    "entity.parrot.imitate.pillager",
    "entity.parrot.imitate.ravager",
    "entity.parrot.imitate.shulker",
    "entity.parrot.imitate.silverfish",
    "entity.parrot.imitate.skeleton",
    "entity.parrot.imitate.slime",
    "entity.parrot.imitate.spider",
    "entity.parrot.imitate.stray",
    "entity.parrot.imitate.vex",
    "entity.parrot.imitate.vindicator",
    "entity.parrot.imitate.witch",
    "entity.parrot.imitate.wither",
    "entity.parrot.imitate.wither_skeleton",
    "entity.parrot.imitate.zoglin",
    "entity.parrot.imitate.zombie",
    "entity.parrot.imitate.zombie_villager",
    "entity.parrot.step",
    "entity.phantom.ambient",
    "entity.phantom.bite",
    "entity.phantom.death",
    "entity.phantom.flap",
    "entity.phantom.hurt",
    "entity.phantom.swoop",
    "entity.pig.ambient",
    "entity.pig.death",
    "entity.pig.hurt",
    "entity.pig.saddle",
    "entity.pig.step",
    "entity.piglin.admiring_item",
    "entity.piglin.ambient",
    "entity.piglin.angry",
    "entity.piglin.celebrate",
    "entity.piglin.death",
    "entity.piglin.jealous",
    "entity.piglin.hurt",
    "entity.piglin.retreat",
    "entity.piglin.step",
    "entity.piglin.converted_to_zombified",
    "entity.piglin_brute.ambient",
    "entity.piglin_brute.angry",
    "entity.piglin_brute.death",
    "entity.piglin_brute.hurt",
    "entity.piglin_brute.step",
    "entity.piglin_brute.converted_to_zombified",
    "entity.pillager.ambient",
    "entity.pillager.celebrate",
    "entity.pillager.death",
    "entity.pillager.hurt",
    "block.piston.contract",
    "block.piston.extend",
    "entity.player.attack.crit",
    "entity.player.attack.knockback",
    "entity.player.attack.nodamage",
    "entity.player.attack.strong",
    "entity.player.attack.sweep",
    "entity.player.attack.weak",
    "entity.player.big_fall",
    "entity.player.breath",
    "entity.player.burp",
    "entity.player.death",
    "entity.player.hurt",
    "entity.player.hurt_drown",
    "entity.player.hurt_freeze",
    "entity.player.hurt_on_fire",
    "entity.player.hurt_sweet_berry_bush",
    "entity.player.levelup",
    "entity.player.small_fall",
    "entity.player.splash",
    "entity.player.splash.high_speed",
    "entity.player.swim",
    "entity.polar_bear.ambient",
    "entity.polar_bear.ambient_baby",
    "entity.polar_bear.death",
    "entity.polar_bear.hurt",
    "entity.polar_bear.step",
    "entity.polar_bear.warning",
    "block.polished_deepslate.break",
    "block.polished_deepslate.fall",
    "block.polished_deepslate.hit",
    "block.polished_deepslate.place",
    "block.polished_deepslate.step",
    "block.portal.ambient",
    "block.portal.travel",
    "block.portal.trigger",
    "block.powder_snow.break",
    "block.powder_snow.fall",
    "block.powder_snow.hit",
    "block.powder_snow.place",
    "block.powder_snow.step",
    "entity.puffer_fish.ambient",
    "entity.puffer_fish.blow_out",
    "entity.puffer_fish.blow_up",
    "entity.puffer_fish.death",
    "entity.puffer_fish.flop",
    "entity.puffer_fish.hurt",
    "entity.puffer_fish.sting",
    "block.pumpkin.carve",
    "entity.rabbit.ambient",
    "entity.rabbit.attack",
    "entity.rabbit.death",
    "entity.rabbit.hurt",
    "entity.rabbit.jump",
    "event.raid.horn",
    "entity.ravager.ambient",
    "entity.ravager.attack",
    "entity.ravager.celebrate",
    "entity.ravager.death",
    "entity.ravager.hurt",
    "entity.ravager.step",
    "entity.ravager.stunned",
    "entity.ravager.roar",
    "block.nether_gold_ore.break",
    "block.nether_gold_ore.fall",
    "block.nether_gold_ore.hit",
    "block.nether_gold_ore.place",
    "block.nether_gold_ore.step",
    "block.nether_ore.break",
    "block.nether_ore.fall",
    "block.nether_ore.hit",
    "block.nether_ore.place",
    "block.nether_ore.step",
    "block.redstone_torch.burnout",
    "block.respawn_anchor.ambient",
    "block.respawn_anchor.charge",
    "block.respawn_anchor.deplete",
    "block.respawn_anchor.set_spawn",
    "block.rooted_dirt.break",
    "block.rooted_dirt.fall",
    "block.rooted_dirt.hit",
    "block.rooted_dirt.place",
    "block.rooted_dirt.step",
    "entity.salmon.ambient",
    "entity.salmon.death",
    "entity.salmon.flop",
    "entity.salmon.hurt",
    "block.sand.break",
    "block.sand.fall",
    "block.sand.hit",
    "block.sand.place",
    "block.sand.step",
    "block.scaffolding.break",
    "block.scaffolding.fall",
    "block.scaffolding.hit",
    "block.scaffolding.place",
    "block.scaffolding.step",
    "block.sculk_sensor.clicking",
    "block.sculk_sensor.clicking_stop",
    "block.sculk_sensor.break",
    "block.sculk_sensor.fall",
    "block.sculk_sensor.hit",
    "block.sculk_sensor.place",
    "block.sculk_sensor.step",
    "entity.sheep.ambient",
    "entity.sheep.death",
    "entity.sheep.hurt",
    "entity.sheep.shear",
    "entity.sheep.step",
    "item.shield.block",
    "item.shield.break",
    "block.shroomlight.break",
    "block.shroomlight.step",
    "block.shroomlight.place",
    "block.shroomlight.hit",
    "block.shroomlight.fall",
    "item.shovel.flatten",
    "entity.shulker.ambient",
    "block.shulker_box.close",
    "block.shulker_box.open",
    "entity.shulker_bullet.hit",
    "entity.shulker_bullet.hurt",
    "entity.shulker.close",
    "entity.shulker.death",
    "entity.shulker.hurt",
    "entity.shulker.hurt_closed",
    "entity.shulker.open",
    "entity.shulker.shoot",
    "entity.shulker.teleport",
    "entity.silverfish.ambient",
    "entity.silverfish.death",
    "entity.silverfish.hurt",
    "entity.silverfish.step",
    "entity.skeleton.ambient",
    "entity.skeleton.converted_to_stray",
    "entity.skeleton.death",
    "entity.skeleton_horse.ambient",
    "entity.skeleton_horse.death",
    "entity.skeleton_horse.hurt",
    "entity.skeleton_horse.swim",
    "entity.skeleton_horse.ambient_water",
    "entity.skeleton_horse.gallop_water",
    "entity.skeleton_horse.jump_water",
    "entity.skeleton_horse.step_water",
    "entity.skeleton.hurt",
    "entity.skeleton.shoot",
    "entity.skeleton.step",
    "entity.slime.attack",
    "entity.slime.death",
    "entity.slime.hurt",
    "entity.slime.jump",
    "entity.slime.squish",
    "block.slime_block.break",
    "block.slime_block.fall",
    "block.slime_block.hit",
    "block.slime_block.place",
    "block.slime_block.step",
    "block.small_amethyst_bud.break",
    "block.small_amethyst_bud.place",
    "block.small_dripleaf.break",
    "block.small_dripleaf.fall",
    "block.small_dripleaf.hit",
    "block.small_dripleaf.place",
    "block.small_dripleaf.step",
    "block.soul_sand.break",
    "block.soul_sand.step",
    "block.soul_sand.place",
    "block.soul_sand.hit",
    "block.soul_sand.fall",
    "block.soul_soil.break",
    "block.soul_soil.step",
    "block.soul_soil.place",
    "block.soul_soil.hit",
    "block.soul_soil.fall",
    "particle.soul_escape",
    "block.spore_blossom.break",
    "block.spore_blossom.fall",
    "block.spore_blossom.hit",
    "block.spore_blossom.place",
    "block.spore_blossom.step",
    "entity.strider.ambient",
    "entity.strider.happy",
    "entity.strider.retreat",
    "entity.strider.death",
    "entity.strider.hurt",
    "entity.strider.step",
    "entity.strider.step_lava",
    "entity.strider.eat",
    "entity.strider.saddle",
    "entity.slime.death_small",
    "entity.slime.hurt_small",
    "entity.slime.jump_small",
    "entity.slime.squish_small",
    "block.smithing_table.use",
    "block.smoker.smoke",
    "entity.snowball.throw",
    "block.snow.break",
    "block.snow.fall",
    "entity.snow_golem.ambient",
    "entity.snow_golem.death",
    "entity.snow_golem.hurt",
    "entity.snow_golem.shoot",
    "entity.snow_golem.shear",
    "block.snow.hit",
    "block.snow.place",
    "block.snow.step",
    "entity.spider.ambient",
    "entity.spider.death",
    "entity.spider.hurt",
    "entity.spider.step",
    "entity.splash_potion.break",
    "entity.splash_potion.throw",
    "item.spyglass.use",
    "item.spyglass.stop_using",
    "entity.squid.ambient",
    "entity.squid.death",
    "entity.squid.hurt",
    "entity.squid.squirt",
    "block.stone.break",
    "block.stone_button.click_off",
    "block.stone_button.click_on",
    "block.stone.fall",
    "block.stone.hit",
    "block.stone.place",
    "block.stone_pressure_plate.click_off",
    "block.stone_pressure_plate.click_on",
    "block.stone.step",
    "entity.stray.ambient",
    "entity.stray.death",
    "entity.stray.hurt",
    "entity.stray.step",
    "block.sweet_berry_bush.break",
    "block.sweet_berry_bush.place",
    "block.sweet_berry_bush.pick_berries",
    "enchant.thorns.hit",
    "entity.tnt.primed",
    "item.totem.use",
    "item.trident.hit",
    "item.trident.hit_ground",
    "item.trident.return",
    "item.trident.riptide_1",
    "item.trident.riptide_2",
    "item.trident.riptide_3",
    "item.trident.throw",
    "item.trident.thunder",
    "block.tripwire.attach",
    "block.tripwire.click_off",
    "block.tripwire.click_on",
    "block.tripwire.detach",
    "entity.tropical_fish.ambient",
    "entity.tropical_fish.death",
    "entity.tropical_fish.flop",
    "entity.tropical_fish.hurt",
    "block.tuff.break",
    "block.tuff.step",
    "block.tuff.place",
    "block.tuff.hit",
    "block.tuff.fall",
    "entity.turtle.ambient_land",
    "entity.turtle.death",
    "entity.turtle.death_baby",
    "entity.turtle.egg_break",
    "entity.turtle.egg_crack",
    "entity.turtle.egg_hatch",
    "entity.turtle.hurt",
    "entity.turtle.hurt_baby",
    "entity.turtle.lay_egg",
    "entity.turtle.shamble",
    "entity.turtle.shamble_baby",
    "entity.turtle.swim",
    "ui.button.click",
    "ui.loom.select_pattern",
    "ui.loom.take_result",
    "ui.cartography_table.take_result",
    "ui.stonecutter.take_result",
    "ui.stonecutter.select_recipe",
    "ui.toast.challenge_complete",
    "ui.toast.in",
    "ui.toast.out",
    "entity.vex.ambient",
    "entity.vex.charge",
    "entity.vex.death",
    "entity.vex.hurt",
    "entity.villager.ambient",
    "entity.villager.celebrate",
    "entity.villager.death",
    "entity.villager.hurt",
    "entity.villager.no",
    "entity.villager.trade",
    "entity.villager.yes",
    "entity.villager.work_armorer",
    "entity.villager.work_butcher",
    "entity.villager.work_cartographer",
    "entity.villager.work_cleric",
    "entity.villager.work_farmer",
    "entity.villager.work_fisherman",
    "entity.villager.work_fletcher",
    "entity.villager.work_leatherworker",
    "entity.villager.work_librarian",
    "entity.villager.work_mason",
    "entity.villager.work_shepherd",
    "entity.villager.work_toolsmith",
    "entity.villager.work_weaponsmith",
    "entity.vindicator.ambient",
    "entity.vindicator.celebrate",
    "entity.vindicator.death",
    "entity.vindicator.hurt",
    "block.vine.break",
    "block.vine.fall",
    "block.vine.hit",
    "block.vine.place",
    "block.vine.step",
    "block.lily_pad.place",
    "entity.wandering_trader.ambient",
    "entity.wandering_trader.death",
    "entity.wandering_trader.disappeared",
    "entity.wandering_trader.drink_milk",
    "entity.wandering_trader.drink_potion",
    "entity.wandering_trader.hurt",
    "entity.wandering_trader.no",
    "entity.wandering_trader.reappeared",
    "entity.wandering_trader.trade",
    "entity.wandering_trader.yes",
    "block.water.ambient",
    "weather.rain",
    "weather.rain.above",
    "block.wet_grass.break",
    "block.wet_grass.fall",
    "block.wet_grass.hit",
    "block.wet_grass.place",
    "block.wet_grass.step",
    "entity.witch.ambient",
    "entity.witch.celebrate",
    "entity.witch.death",
    "entity.witch.drink",
    "entity.witch.hurt",
    "entity.witch.throw",
    "entity.wither.ambient",
    "entity.wither.break_block",
    "entity.wither.death",
    "entity.wither.hurt",
    "entity.wither.shoot",
    "entity.wither_skeleton.ambient",
    "entity.wither_skeleton.death",
    "entity.wither_skeleton.hurt",
    "entity.wither_skeleton.step",
    "entity.wither.spawn",
    "entity.wolf.ambient",
    "entity.wolf.death",
    "entity.wolf.growl",
    "entity.wolf.howl",
    "entity.wolf.hurt",
    "entity.wolf.pant",
    "entity.wolf.shake",
    "entity.wolf.step",
    "entity.wolf.whine",
    "block.wooden_door.close",
    "block.wooden_door.open",
    "block.wooden_trapdoor.close",
    "block.wooden_trapdoor.open",
    "block.wood.break",
    "block.wooden_button.click_off",
    "block.wooden_button.click_on",
    "block.wood.fall",
    "block.wood.hit",
    "block.wood.place",
    "block.wooden_pressure_plate.click_off",
    "block.wooden_pressure_plate.click_on",
    "block.wood.step",
    "block.wool.break",
    "block.wool.fall",
    "block.wool.hit",
    "block.wool.place",
    "block.wool.step",
    "entity.zoglin.ambient",
    "entity.zoglin.angry",
    "entity.zoglin.attack",
    "entity.zoglin.death",
    "entity.zoglin.hurt",
    "entity.zoglin.step",
    "entity.zombie.ambient",
    "entity.zombie.attack_wooden_door",
    "entity.zombie.attack_iron_door",
    "entity.zombie.break_wooden_door",
    "entity.zombie.converted_to_drowned",
    "entity.zombie.death",
    "entity.zombie.destroy_egg",
    "entity.zombie_horse.ambient",
    "entity.zombie_horse.death",
    "entity.zombie_horse.hurt",
    "entity.zombie.hurt",
    "entity.zombie.infect",
    "entity.zombified_piglin.ambient",
    "entity.zombified_piglin.angry",
    "entity.zombified_piglin.death",
    "entity.zombified_piglin.hurt",
    "entity.zombie.step",
    "entity.zombie_villager.ambient",
    "entity.zombie_villager.converted",
    "entity.zombie_villager.cure",
    "entity.zombie_villager.death",
    "entity.zombie_villager.hurt",
    "entity.zombie_villager.step"
];

// EFFECTS
export const allEffects = [
    "speed",
    "slowness",
    "haste",
    "mining_fatigue",
    "strength",
    "instant_health",
    "instant_damage",
    "jump_boost",
    "nausea",
    "regeneration",
    "resistance",
    "fire_resistance",
    "water_breathing",
    "invisibility",
    "blindness",
    "night_vision",
    "hunger",
    "weakness",
    "poison",
    "wither",
    "health_boost",
    "absorption",
    "saturation",
    "glowing",
    "levitation",
    "luck",
    "unluck",
    "slow_falling",
    "conduit_power",
    "dolphins_grace",
    "bad_omen",
    "hero_of_the_village"
];

// ITEMS
export const allItems = [
    "air",
    "stone",
    "granite",
    "polished_granite",
    "diorite",
    "polished_diorite",
    "andesite",
    "polished_andesite",
    "deepslate",
    "cobbled_deepslate",
    "polished_deepslate",
    "calcite",
    "tuff",
    "dripstone_block",
    "grass_block",
    "dirt",
    "coarse_dirt",
    "podzol",
    "rooted_dirt",
    "crimson_nylium",
    "warped_nylium",
    "cobblestone",
    "oak_planks",
    "spruce_planks",
    "birch_planks",
    "jungle_planks",
    "acacia_planks",
    "dark_oak_planks",
    "crimson_planks",
    "warped_planks",
    "oak_sapling",
    "spruce_sapling",
    "birch_sapling",
    "jungle_sapling",
    "acacia_sapling",
    "dark_oak_sapling",
    "bedrock",
    "sand",
    "red_sand",
    "gravel",
    "coal_ore",
    "deepslate_coal_ore",
    "iron_ore",
    "deepslate_iron_ore",
    "copper_ore",
    "deepslate_copper_ore",
    "gold_ore",
    "deepslate_gold_ore",
    "redstone_ore",
    "deepslate_redstone_ore",
    "emerald_ore",
    "deepslate_emerald_ore",
    "lapis_ore",
    "deepslate_lapis_ore",
    "diamond_ore",
    "deepslate_diamond_ore",
    "nether_gold_ore",
    "nether_quartz_ore",
    "ancient_debris",
    "coal_block",
    "raw_iron_block",
    "raw_copper_block",
    "raw_gold_block",
    "amethyst_block",
    "budding_amethyst",
    "iron_block",
    "copper_block",
    "gold_block",
    "diamond_block",
    "netherite_block",
    "exposed_copper",
    "weathered_copper",
    "oxidized_copper",
    "cut_copper",
    "exposed_cut_copper",
    "weathered_cut_copper",
    "oxidized_cut_copper",
    "cut_copper_stairs",
    "exposed_cut_copper_stairs",
    "weathered_cut_copper_stairs",
    "oxidized_cut_copper_stairs",
    "cut_copper_slab",
    "exposed_cut_copper_slab",
    "weathered_cut_copper_slab",
    "oxidized_cut_copper_slab",
    "waxed_copper_block",
    "waxed_exposed_copper",
    "waxed_weathered_copper",
    "waxed_oxidized_copper",
    "waxed_cut_copper",
    "waxed_exposed_cut_copper",
    "waxed_weathered_cut_copper",
    "waxed_oxidized_cut_copper",
    "waxed_cut_copper_stairs",
    "waxed_exposed_cut_copper_stairs",
    "waxed_weathered_cut_copper_stairs",
    "waxed_oxidized_cut_copper_stairs",
    "waxed_cut_copper_slab",
    "waxed_exposed_cut_copper_slab",
    "waxed_weathered_cut_copper_slab",
    "waxed_oxidized_cut_copper_slab",
    "oak_log",
    "spruce_log",
    "birch_log",
    "jungle_log",
    "acacia_log",
    "dark_oak_log",
    "crimson_stem",
    "warped_stem",
    "stripped_oak_log",
    "stripped_spruce_log",
    "stripped_birch_log",
    "stripped_jungle_log",
    "stripped_acacia_log",
    "stripped_dark_oak_log",
    "stripped_crimson_stem",
    "stripped_warped_stem",
    "stripped_oak_wood",
    "stripped_spruce_wood",
    "stripped_birch_wood",
    "stripped_jungle_wood",
    "stripped_acacia_wood",
    "stripped_dark_oak_wood",
    "stripped_crimson_hyphae",
    "stripped_warped_hyphae",
    "oak_wood",
    "spruce_wood",
    "birch_wood",
    "jungle_wood",
    "acacia_wood",
    "dark_oak_wood",
    "crimson_hyphae",
    "warped_hyphae",
    "oak_leaves",
    "spruce_leaves",
    "birch_leaves",
    "jungle_leaves",
    "acacia_leaves",
    "dark_oak_leaves",
    "azalea_leaves",
    "flowering_azalea_leaves",
    "sponge",
    "wet_sponge",
    "glass",
    "tinted_glass",
    "lapis_block",
    "sandstone",
    "chiseled_sandstone",
    "cut_sandstone",
    "cobweb",
    "grass",
    "fern",
    "azalea",
    "flowering_azalea",
    "dead_bush",
    "seagrass",
    "sea_pickle",
    "white_wool",
    "orange_wool",
    "magenta_wool",
    "light_blue_wool",
    "yellow_wool",
    "lime_wool",
    "pink_wool",
    "gray_wool",
    "light_gray_wool",
    "cyan_wool",
    "purple_wool",
    "blue_wool",
    "brown_wool",
    "green_wool",
    "red_wool",
    "black_wool",
    "dandelion",
    "poppy",
    "blue_orchid",
    "allium",
    "azure_bluet",
    "red_tulip",
    "orange_tulip",
    "white_tulip",
    "pink_tulip",
    "oxeye_daisy",
    "cornflower",
    "lily_of_the_valley",
    "wither_rose",
    "spore_blossom",
    "brown_mushroom",
    "red_mushroom",
    "crimson_fungus",
    "warped_fungus",
    "crimson_roots",
    "warped_roots",
    "nether_sprouts",
    "weeping_vines",
    "twisting_vines",
    "sugar_cane",
    "kelp",
    "moss_carpet",
    "moss_block",
    "hanging_roots",
    "big_dripleaf",
    "small_dripleaf",
    "bamboo",
    "oak_slab",
    "spruce_slab",
    "birch_slab",
    "jungle_slab",
    "acacia_slab",
    "dark_oak_slab",
    "crimson_slab",
    "warped_slab",
    "stone_slab",
    "smooth_stone_slab",
    "sandstone_slab",
    "cut_sandstone_slab",
    "petrified_oak_slab",
    "cobblestone_slab",
    "brick_slab",
    "stone_brick_slab",
    "nether_brick_slab",
    "quartz_slab",
    "red_sandstone_slab",
    "cut_red_sandstone_slab",
    "purpur_slab",
    "prismarine_slab",
    "prismarine_brick_slab",
    "dark_prismarine_slab",
    "smooth_quartz",
    "smooth_red_sandstone",
    "smooth_sandstone",
    "smooth_stone",
    "bricks",
    "bookshelf",
    "mossy_cobblestone",
    "obsidian",
    "torch",
    "end_rod",
    "chorus_plant",
    "chorus_flower",
    "purpur_block",
    "purpur_pillar",
    "purpur_stairs",
    "spawner",
    "oak_stairs",
    "chest",
    "crafting_table",
    "farmland",
    "furnace",
    "ladder",
    "cobblestone_stairs",
    "snow",
    "ice",
    "snow_block",
    "cactus",
    "clay",
    "jukebox",
    "oak_fence",
    "spruce_fence",
    "birch_fence",
    "jungle_fence",
    "acacia_fence",
    "dark_oak_fence",
    "crimson_fence",
    "warped_fence",
    "pumpkin",
    "carved_pumpkin",
    "jack_o_lantern",
    "netherrack",
    "soul_sand",
    "soul_soil",
    "basalt",
    "polished_basalt",
    "smooth_basalt",
    "soul_torch",
    "glowstone",
    "infested_stone",
    "infested_cobblestone",
    "infested_stone_bricks",
    "infested_mossy_stone_bricks",
    "infested_cracked_stone_bricks",
    "infested_chiseled_stone_bricks",
    "infested_deepslate",
    "stone_bricks",
    "mossy_stone_bricks",
    "cracked_stone_bricks",
    "chiseled_stone_bricks",
    "deepslate_bricks",
    "cracked_deepslate_bricks",
    "deepslate_tiles",
    "cracked_deepslate_tiles",
    "chiseled_deepslate",
    "brown_mushroom_block",
    "red_mushroom_block",
    "mushroom_stem",
    "iron_bars",
    "chain",
    "glass_pane",
    "melon",
    "vine",
    "glow_lichen",
    "brick_stairs",
    "stone_brick_stairs",
    "mycelium",
    "lily_pad",
    "nether_bricks",
    "cracked_nether_bricks",
    "chiseled_nether_bricks",
    "nether_brick_fence",
    "nether_brick_stairs",
    "enchanting_table",
    "end_portal_frame",
    "end_stone",
    "end_stone_bricks",
    "dragon_egg",
    "sandstone_stairs",
    "ender_chest",
    "emerald_block",
    "spruce_stairs",
    "birch_stairs",
    "jungle_stairs",
    "crimson_stairs",
    "warped_stairs",
    "command_block",
    "beacon",
    "cobblestone_wall",
    "mossy_cobblestone_wall",
    "brick_wall",
    "prismarine_wall",
    "red_sandstone_wall",
    "mossy_stone_brick_wall",
    "granite_wall",
    "stone_brick_wall",
    "nether_brick_wall",
    "andesite_wall",
    "red_nether_brick_wall",
    "sandstone_wall",
    "end_stone_brick_wall",
    "diorite_wall",
    "blackstone_wall",
    "polished_blackstone_wall",
    "polished_blackstone_brick_wall",
    "cobbled_deepslate_wall",
    "polished_deepslate_wall",
    "deepslate_brick_wall",
    "deepslate_tile_wall",
    "anvil",
    "chipped_anvil",
    "damaged_anvil",
    "chiseled_quartz_block",
    "quartz_block",
    "quartz_bricks",
    "quartz_pillar",
    "quartz_stairs",
    "white_terracotta",
    "orange_terracotta",
    "magenta_terracotta",
    "light_blue_terracotta",
    "yellow_terracotta",
    "lime_terracotta",
    "pink_terracotta",
    "gray_terracotta",
    "light_gray_terracotta",
    "cyan_terracotta",
    "purple_terracotta",
    "blue_terracotta",
    "brown_terracotta",
    "green_terracotta",
    "red_terracotta",
    "black_terracotta",
    "barrier",
    "light",
    "hay_block",
    "white_carpet",
    "orange_carpet",
    "magenta_carpet",
    "light_blue_carpet",
    "yellow_carpet",
    "lime_carpet",
    "pink_carpet",
    "gray_carpet",
    "light_gray_carpet",
    "cyan_carpet",
    "purple_carpet",
    "blue_carpet",
    "brown_carpet",
    "green_carpet",
    "red_carpet",
    "black_carpet",
    "terracotta",
    "packed_ice",
    "acacia_stairs",
    "dark_oak_stairs",
    "dirt_path",
    "sunflower",
    "lilac",
    "rose_bush",
    "peony",
    "tall_grass",
    "large_fern",
    "white_stained_glass",
    "orange_stained_glass",
    "magenta_stained_glass",
    "light_blue_stained_glass",
    "yellow_stained_glass",
    "lime_stained_glass",
    "pink_stained_glass",
    "gray_stained_glass",
    "light_gray_stained_glass",
    "cyan_stained_glass",
    "purple_stained_glass",
    "blue_stained_glass",
    "brown_stained_glass",
    "green_stained_glass",
    "red_stained_glass",
    "black_stained_glass",
    "white_stained_glass_pane",
    "orange_stained_glass_pane",
    "magenta_stained_glass_pane",
    "light_blue_stained_glass_pane",
    "yellow_stained_glass_pane",
    "lime_stained_glass_pane",
    "pink_stained_glass_pane",
    "gray_stained_glass_pane",
    "light_gray_stained_glass_pane",
    "cyan_stained_glass_pane",
    "purple_stained_glass_pane",
    "blue_stained_glass_pane",
    "brown_stained_glass_pane",
    "green_stained_glass_pane",
    "red_stained_glass_pane",
    "black_stained_glass_pane",
    "prismarine",
    "prismarine_bricks",
    "dark_prismarine",
    "prismarine_stairs",
    "prismarine_brick_stairs",
    "dark_prismarine_stairs",
    "sea_lantern",
    "red_sandstone",
    "chiseled_red_sandstone",
    "cut_red_sandstone",
    "red_sandstone_stairs",
    "repeating_command_block",
    "chain_command_block",
    "magma_block",
    "nether_wart_block",
    "warped_wart_block",
    "red_nether_bricks",
    "bone_block",
    "structure_void",
    "shulker_box",
    "white_shulker_box",
    "orange_shulker_box",
    "magenta_shulker_box",
    "light_blue_shulker_box",
    "yellow_shulker_box",
    "lime_shulker_box",
    "pink_shulker_box",
    "gray_shulker_box",
    "light_gray_shulker_box",
    "cyan_shulker_box",
    "purple_shulker_box",
    "blue_shulker_box",
    "brown_shulker_box",
    "green_shulker_box",
    "red_shulker_box",
    "black_shulker_box",
    "white_glazed_terracotta",
    "orange_glazed_terracotta",
    "magenta_glazed_terracotta",
    "light_blue_glazed_terracotta",
    "yellow_glazed_terracotta",
    "lime_glazed_terracotta",
    "pink_glazed_terracotta",
    "gray_glazed_terracotta",
    "light_gray_glazed_terracotta",
    "cyan_glazed_terracotta",
    "purple_glazed_terracotta",
    "blue_glazed_terracotta",
    "brown_glazed_terracotta",
    "green_glazed_terracotta",
    "red_glazed_terracotta",
    "black_glazed_terracotta",
    "white_concrete",
    "orange_concrete",
    "magenta_concrete",
    "light_blue_concrete",
    "yellow_concrete",
    "lime_concrete",
    "pink_concrete",
    "gray_concrete",
    "light_gray_concrete",
    "cyan_concrete",
    "purple_concrete",
    "blue_concrete",
    "brown_concrete",
    "green_concrete",
    "red_concrete",
    "black_concrete",
    "white_concrete_powder",
    "orange_concrete_powder",
    "magenta_concrete_powder",
    "light_blue_concrete_powder",
    "yellow_concrete_powder",
    "lime_concrete_powder",
    "pink_concrete_powder",
    "gray_concrete_powder",
    "light_gray_concrete_powder",
    "cyan_concrete_powder",
    "purple_concrete_powder",
    "blue_concrete_powder",
    "brown_concrete_powder",
    "green_concrete_powder",
    "red_concrete_powder",
    "black_concrete_powder",
    "turtle_egg",
    "dead_tube_coral_block",
    "dead_brain_coral_block",
    "dead_bubble_coral_block",
    "dead_fire_coral_block",
    "dead_horn_coral_block",
    "tube_coral_block",
    "brain_coral_block",
    "bubble_coral_block",
    "fire_coral_block",
    "horn_coral_block",
    "tube_coral",
    "brain_coral",
    "bubble_coral",
    "fire_coral",
    "horn_coral",
    "dead_brain_coral",
    "dead_bubble_coral",
    "dead_fire_coral",
    "dead_horn_coral",
    "dead_tube_coral",
    "tube_coral_fan",
    "brain_coral_fan",
    "bubble_coral_fan",
    "fire_coral_fan",
    "horn_coral_fan",
    "dead_tube_coral_fan",
    "dead_brain_coral_fan",
    "dead_bubble_coral_fan",
    "dead_fire_coral_fan",
    "dead_horn_coral_fan",
    "blue_ice",
    "conduit",
    "polished_granite_stairs",
    "smooth_red_sandstone_stairs",
    "mossy_stone_brick_stairs",
    "polished_diorite_stairs",
    "mossy_cobblestone_stairs",
    "end_stone_brick_stairs",
    "stone_stairs",
    "smooth_sandstone_stairs",
    "smooth_quartz_stairs",
    "granite_stairs",
    "andesite_stairs",
    "red_nether_brick_stairs",
    "polished_andesite_stairs",
    "diorite_stairs",
    "cobbled_deepslate_stairs",
    "polished_deepslate_stairs",
    "deepslate_brick_stairs",
    "deepslate_tile_stairs",
    "polished_granite_slab",
    "smooth_red_sandstone_slab",
    "mossy_stone_brick_slab",
    "polished_diorite_slab",
    "mossy_cobblestone_slab",
    "end_stone_brick_slab",
    "smooth_sandstone_slab",
    "smooth_quartz_slab",
    "granite_slab",
    "andesite_slab",
    "red_nether_brick_slab",
    "polished_andesite_slab",
    "diorite_slab",
    "cobbled_deepslate_slab",
    "polished_deepslate_slab",
    "deepslate_brick_slab",
    "deepslate_tile_slab",
    "scaffolding",
    "redstone",
    "redstone_torch",
    "redstone_block",
    "repeater",
    "comparator",
    "piston",
    "sticky_piston",
    "slime_block",
    "honey_block",
    "observer",
    "hopper",
    "dispenser",
    "dropper",
    "lectern",
    "target",
    "lever",
    "lightning_rod",
    "daylight_detector",
    "sculk_sensor",
    "tripwire_hook",
    "trapped_chest",
    "tnt",
    "redstone_lamp",
    "note_block",
    "stone_button",
    "polished_blackstone_button",
    "oak_button",
    "spruce_button",
    "birch_button",
    "jungle_button",
    "acacia_button",
    "dark_oak_button",
    "crimson_button",
    "warped_button",
    "stone_pressure_plate",
    "polished_blackstone_pressure_plate",
    "light_weighted_pressure_plate",
    "heavy_weighted_pressure_plate",
    "oak_pressure_plate",
    "spruce_pressure_plate",
    "birch_pressure_plate",
    "jungle_pressure_plate",
    "acacia_pressure_plate",
    "dark_oak_pressure_plate",
    "crimson_pressure_plate",
    "warped_pressure_plate",
    "iron_door",
    "oak_door",
    "spruce_door",
    "birch_door",
    "jungle_door",
    "acacia_door",
    "dark_oak_door",
    "crimson_door",
    "warped_door",
    "iron_trapdoor",
    "oak_trapdoor",
    "spruce_trapdoor",
    "birch_trapdoor",
    "jungle_trapdoor",
    "acacia_trapdoor",
    "dark_oak_trapdoor",
    "crimson_trapdoor",
    "warped_trapdoor",
    "oak_fence_gate",
    "spruce_fence_gate",
    "birch_fence_gate",
    "jungle_fence_gate",
    "acacia_fence_gate",
    "dark_oak_fence_gate",
    "crimson_fence_gate",
    "warped_fence_gate",
    "powered_rail",
    "detector_rail",
    "rail",
    "activator_rail",
    "saddle",
    "minecart",
    "chest_minecart",
    "furnace_minecart",
    "tnt_minecart",
    "hopper_minecart",
    "carrot_on_a_stick",
    "warped_fungus_on_a_stick",
    "elytra",
    "oak_boat",
    "spruce_boat",
    "birch_boat",
    "jungle_boat",
    "acacia_boat",
    "dark_oak_boat",
    "structure_block",
    "jigsaw",
    "turtle_helmet",
    "scute",
    "flint_and_steel",
    "apple",
    "bow",
    "arrow",
    "coal",
    "charcoal",
    "diamond",
    "emerald",
    "lapis_lazuli",
    "quartz",
    "amethyst_shard",
    "raw_iron",
    "iron_ingot",
    "raw_copper",
    "copper_ingot",
    "raw_gold",
    "gold_ingot",
    "netherite_ingot",
    "netherite_scrap",
    "wooden_sword",
    "wooden_shovel",
    "wooden_pickaxe",
    "wooden_axe",
    "wooden_hoe",
    "stone_sword",
    "stone_shovel",
    "stone_pickaxe",
    "stone_axe",
    "stone_hoe",
    "golden_sword",
    "golden_shovel",
    "golden_pickaxe",
    "golden_axe",
    "golden_hoe",
    "iron_sword",
    "iron_shovel",
    "iron_pickaxe",
    "iron_axe",
    "iron_hoe",
    "diamond_sword",
    "diamond_shovel",
    "diamond_pickaxe",
    "diamond_axe",
    "diamond_hoe",
    "netherite_sword",
    "netherite_shovel",
    "netherite_pickaxe",
    "netherite_axe",
    "netherite_hoe",
    "stick",
    "bowl",
    "mushroom_stew",
    "string",
    "feather",
    "gunpowder",
    "wheat_seeds",
    "wheat",
    "bread",
    "leather_helmet",
    "leather_chestplate",
    "leather_leggings",
    "leather_boots",
    "chainmail_helmet",
    "chainmail_chestplate",
    "chainmail_leggings",
    "chainmail_boots",
    "iron_helmet",
    "iron_chestplate",
    "iron_leggings",
    "iron_boots",
    "diamond_helmet",
    "diamond_chestplate",
    "diamond_leggings",
    "diamond_boots",
    "golden_helmet",
    "golden_chestplate",
    "golden_leggings",
    "golden_boots",
    "netherite_helmet",
    "netherite_chestplate",
    "netherite_leggings",
    "netherite_boots",
    "flint",
    "porkchop",
    "cooked_porkchop",
    "painting",
    "golden_apple",
    "enchanted_golden_apple",
    "oak_sign",
    "spruce_sign",
    "birch_sign",
    "jungle_sign",
    "acacia_sign",
    "dark_oak_sign",
    "crimson_sign",
    "warped_sign",
    "bucket",
    "water_bucket",
    "lava_bucket",
    "powder_snow_bucket",
    "snowball",
    "leather",
    "milk_bucket",
    "pufferfish_bucket",
    "salmon_bucket",
    "cod_bucket",
    "tropical_fish_bucket",
    "axolotl_bucket",
    "brick",
    "clay_ball",
    "dried_kelp_block",
    "paper",
    "book",
    "slime_ball",
    "egg",
    "compass",
    "bundle",
    "fishing_rod",
    "clock",
    "spyglass",
    "glowstone_dust",
    "cod",
    "salmon",
    "tropical_fish",
    "pufferfish",
    "cooked_cod",
    "cooked_salmon",
    "ink_sac",
    "glow_ink_sac",
    "cocoa_beans",
    "white_dye",
    "orange_dye",
    "magenta_dye",
    "light_blue_dye",
    "yellow_dye",
    "lime_dye",
    "pink_dye",
    "gray_dye",
    "light_gray_dye",
    "cyan_dye",
    "purple_dye",
    "blue_dye",
    "brown_dye",
    "green_dye",
    "red_dye",
    "black_dye",
    "bone_meal",
    "bone",
    "sugar",
    "cake",
    "white_bed",
    "orange_bed",
    "magenta_bed",
    "light_blue_bed",
    "yellow_bed",
    "lime_bed",
    "pink_bed",
    "gray_bed",
    "light_gray_bed",
    "cyan_bed",
    "purple_bed",
    "blue_bed",
    "brown_bed",
    "green_bed",
    "red_bed",
    "black_bed",
    "cookie",
    "filled_map",
    "shears",
    "melon_slice",
    "dried_kelp",
    "pumpkin_seeds",
    "melon_seeds",
    "beef",
    "cooked_beef",
    "chicken",
    "cooked_chicken",
    "rotten_flesh",
    "ender_pearl",
    "blaze_rod",
    "ghast_tear",
    "gold_nugget",
    "nether_wart",
    "potion",
    "glass_bottle",
    "spider_eye",
    "fermented_spider_eye",
    "blaze_powder",
    "magma_cream",
    "brewing_stand",
    "cauldron",
    "ender_eye",
    "glistering_melon_slice",
    "axolotl_spawn_egg",
    "bat_spawn_egg",
    "bee_spawn_egg",
    "blaze_spawn_egg",
    "cat_spawn_egg",
    "cave_spider_spawn_egg",
    "chicken_spawn_egg",
    "cod_spawn_egg",
    "cow_spawn_egg",
    "creeper_spawn_egg",
    "dolphin_spawn_egg",
    "donkey_spawn_egg",
    "drowned_spawn_egg",
    "elder_guardian_spawn_egg",
    "enderman_spawn_egg",
    "endermite_spawn_egg",
    "evoker_spawn_egg",
    "fox_spawn_egg",
    "ghast_spawn_egg",
    "glow_squid_spawn_egg",
    "goat_spawn_egg",
    "guardian_spawn_egg",
    "hoglin_spawn_egg",
    "horse_spawn_egg",
    "husk_spawn_egg",
    "llama_spawn_egg",
    "magma_cube_spawn_egg",
    "mooshroom_spawn_egg",
    "mule_spawn_egg",
    "ocelot_spawn_egg",
    "panda_spawn_egg",
    "parrot_spawn_egg",
    "phantom_spawn_egg",
    "pig_spawn_egg",
    "piglin_spawn_egg",
    "piglin_brute_spawn_egg",
    "pillager_spawn_egg",
    "polar_bear_spawn_egg",
    "pufferfish_spawn_egg",
    "rabbit_spawn_egg",
    "ravager_spawn_egg",
    "salmon_spawn_egg",
    "sheep_spawn_egg",
    "shulker_spawn_egg",
    "silverfish_spawn_egg",
    "skeleton_spawn_egg",
    "skeleton_horse_spawn_egg",
    "slime_spawn_egg",
    "spider_spawn_egg",
    "squid_spawn_egg",
    "stray_spawn_egg",
    "strider_spawn_egg",
    "trader_llama_spawn_egg",
    "tropical_fish_spawn_egg",
    "turtle_spawn_egg",
    "vex_spawn_egg",
    "villager_spawn_egg",
    "vindicator_spawn_egg",
    "wandering_trader_spawn_egg",
    "witch_spawn_egg",
    "wither_skeleton_spawn_egg",
    "wolf_spawn_egg",
    "zoglin_spawn_egg",
    "zombie_spawn_egg",
    "zombie_horse_spawn_egg",
    "zombie_villager_spawn_egg",
    "zombified_piglin_spawn_egg",
    "experience_bottle",
    "fire_charge",
    "writable_book",
    "written_book",
    "item_frame",
    "glow_item_frame",
    "flower_pot",
    "carrot",
    "potato",
    "baked_potato",
    "poisonous_potato",
    "map",
    "golden_carrot",
    "skeleton_skull",
    "wither_skeleton_skull",
    "player_head",
    "zombie_head",
    "creeper_head",
    "dragon_head",
    "nether_star",
    "pumpkin_pie",
    "firework_rocket",
    "firework_star",
    "enchanted_book",
    "nether_brick",
    "prismarine_shard",
    "prismarine_crystals",
    "rabbit",
    "cooked_rabbit",
    "rabbit_stew",
    "rabbit_foot",
    "rabbit_hide",
    "armor_stand",
    "iron_horse_armor",
    "golden_horse_armor",
    "diamond_horse_armor",
    "leather_horse_armor",
    "lead",
    "name_tag",
    "command_block_minecart",
    "mutton",
    "cooked_mutton",
    "white_banner",
    "orange_banner",
    "magenta_banner",
    "light_blue_banner",
    "yellow_banner",
    "lime_banner",
    "pink_banner",
    "gray_banner",
    "light_gray_banner",
    "cyan_banner",
    "purple_banner",
    "blue_banner",
    "brown_banner",
    "green_banner",
    "red_banner",
    "black_banner",
    "end_crystal",
    "chorus_fruit",
    "popped_chorus_fruit",
    "beetroot",
    "beetroot_seeds",
    "beetroot_soup",
    "dragon_breath",
    "splash_potion",
    "spectral_arrow",
    "tipped_arrow",
    "lingering_potion",
    "shield",
    "totem_of_undying",
    "shulker_shell",
    "iron_nugget",
    "knowledge_book",
    "debug_stick",
    "music_disc_13",
    "music_disc_cat",
    "music_disc_blocks",
    "music_disc_chirp",
    "music_disc_far",
    "music_disc_mall",
    "music_disc_mellohi",
    "music_disc_stal",
    "music_disc_strad",
    "music_disc_ward",
    "music_disc_11",
    "music_disc_wait",
    "music_disc_pigstep",
    "trident",
    "phantom_membrane",
    "nautilus_shell",
    "heart_of_the_sea",
    "crossbow",
    "suspicious_stew",
    "loom",
    "flower_banner_pattern",
    "creeper_banner_pattern",
    "skull_banner_pattern",
    "mojang_banner_pattern",
    "globe_banner_pattern",
    "piglin_banner_pattern",
    "composter",
    "barrel",
    "smoker",
    "blast_furnace",
    "cartography_table",
    "fletching_table",
    "grindstone",
    "smithing_table",
    "stonecutter",
    "bell",
    "lantern",
    "soul_lantern",
    "sweet_berries",
    "glow_berries",
    "campfire",
    "soul_campfire",
    "shroomlight",
    "honeycomb",
    "bee_nest",
    "beehive",
    "honey_bottle",
    "honeycomb_block",
    "lodestone",
    "crying_obsidian",
    "blackstone",
    "blackstone_slab",
    "blackstone_stairs",
    "gilded_blackstone",
    "polished_blackstone",
    "polished_blackstone_slab",
    "polished_blackstone_stairs",
    "chiseled_polished_blackstone",
    "polished_blackstone_bricks",
    "polished_blackstone_brick_slab",
    "polished_blackstone_brick_stairs",
    "cracked_polished_blackstone_bricks",
    "respawn_anchor",
    "candle",
    "white_candle",
    "orange_candle",
    "magenta_candle",
    "light_blue_candle",
    "yellow_candle",
    "lime_candle",
    "pink_candle",
    "gray_candle",
    "light_gray_candle",
    "cyan_candle",
    "purple_candle",
    "blue_candle",
    "brown_candle",
    "green_candle",
    "red_candle",
    "black_candle",
    "small_amethyst_bud",
    "medium_amethyst_bud",
    "large_amethyst_bud",
    "amethyst_cluster",
    "pointed_dripstone"
];

// ENTITIES
export const allEntities = [
    "area_effect_cloud",
    "armor_stand",
    "arrow",
    "axolotl",
    "bat",
    "bee",
    "blaze",
    "boat",
    "cat",
    "cave_spider",
    "chicken",
    "cod",
    "cow",
    "creeper",
    "dolphin",
    "donkey",
    "dragon_fireball",
    "drowned",
    "elder_guardian",
    "end_crystal",
    "ender_dragon",
    "enderman",
    "endermite",
    "evoker",
    "evoker_fangs",
    "experience_orb",
    "eye_of_ender",
    "falling_block",
    "firework_rocket",
    "fox",
    "ghast",
    "giant",
    "glow_item_frame",
    "glow_squid",
    "goat",
    "guardian",
    "hoglin",
    "horse",
    "husk",
    "illusioner",
    "iron_golem",
    "item",
    "item_frame",
    "fireball",
    "leash_knot",
    "lightning_bolt",
    "llama",
    "llama_spit",
    "magma_cube",
    "marker",
    "minecart",
    "chest_minecart",
    "command_block_minecart",
    "furnace_minecart",
    "hopper_minecart",
    "spawner_minecart",
    "tnt_minecart",
    "mule",
    "mooshroom",
    "ocelot",
    "painting",
    "panda",
    "parrot",
    "phantom",
    "pig",
    "piglin",
    "piglin_brute",
    "pillager",
    "polar_bear",
    "tnt",
    "pufferfish",
    "rabbit",
    "ravager",
    "salmon",
    "sheep",
    "shulker",
    "shulker_bullet",
    "silverfish",
    "skeleton",
    "skeleton_horse",
    "slime",
    "small_fireball",
    "snow_golem",
    "snowball",
    "spectral_arrow",
    "spider",
    "squid",
    "stray",
    "strider",
    "egg",
    "ender_pearl",
    "experience_bottle",
    "potion",
    "trident",
    "trader_llama",
    "tropical_fish",
    "turtle",
    "vex",
    "villager",
    "vindicator",
    "wandering_trader",
    "witch",
    "wither",
    "wither_skeleton",
    "wither_skull",
    "wolf",
    "zoglin",
    "zombie",
    "zombie_horse",
    "zombie_villager",
    "zombified_piglin",
    "player",
    "fishing_bobber"
];

// ATTRIBUTES
export const allAttributes = { //"attribute": appliesToArray
    "follow_range": allEntities,
    "max_health": [...allEntities, 'player' ],
    "knockback_resistance": [...allEntities, 'player' ],
    "movement_speed": [...allEntities, 'player' ],
    "attack_damage": [...allEntities, 'player' ],
    "attack_knockback": [...allEntities, 'player' ],
    "armor": [...allEntities, 'player' ],
    "armor_toughness": [...allEntities, 'player' ],
    "attack_speed": ['player'],
    "luck": ['player'],
    "flying_speed": ['parrot'],
    "spawn_reinforcements": ['zombie', 'husk', 'drowned'],
    "jump_strength": ['horse', 'donkey', 'mule', 'zombie_horse', 'skeleton_horse'],
};
export const allAttributesFull = [
    "generic.max_health",
    "generic.follow_range",
    "generic.knockback_resistance",
    "generic.movement_speed",
    "generic.flying_speed",
    "generic.attack_damage",
    "generic.attack_knockback",
    "generic.attack_speed",
    "generic.armor",
    "generic.armor_toughness",
    "generic.luck",
    "zombie.spawn_reinforcements",
    "horse.jump_strength"
];

// SCOREBOARD CRITERIA
export const allScoreboardCriteria = {
    "air": null,
    "armor": null,
    "deathCount": null,
    "playerKillCount": null,
    "totalKillCount": null,
    "dummy": null,
    "trigger": null,
    "food": null,
    "health": null,
    "level": null,
    "xp": null,
    "killedByTeam": allBasicColors,
    "teamkill": allBasicColors,
    "mined": allItems,
    "broken": allItems,
    "crafted": allItems,
    "used": allItems,
    "picked_up": allItems,
    "dropped": allItems,
    "killed": allEntities,
    "killed_by": allEntities,
    "custom": [
        "leave_game",
        "play_time",
        "total_world_time",
        "time_since_death",
        "time_since_rest",
        "sneak_time",
        "walk_one_cm",
        "crouch_one_cm",
        "sprint_one_cm",
        "walk_on_water_one_cm",
        "fall_one_cm",
        "climb_one_cm",
        "fly_one_cm",
        "walk_under_water_one_cm",
        "minecart_one_cm",
        "boat_one_cm",
        "pig_one_cm",
        "horse_one_cm",
        "aviate_one_cm",
        "swim_one_cm",
        "strider_one_cm",
        "jump",
        "drop",
        "damage_dealt",
        "damage_dealt_absorbed",
        "damage_dealt_resisted",
        "damage_taken",
        "damage_blocked_by_shield",
        "damage_absorbed",
        "damage_resisted",
        "deaths",
        "mob_kills",
        "animals_bred",
        "player_kills",
        "fish_caught",
        "talked_to_villager",
        "traded_with_villager",
        "eat_cake_slice",
        "fill_cauldron",
        "use_cauldron",
        "clean_armor",
        "clean_banner",
        "clean_shulker_box",
        "interact_with_brewingstand",
        "interact_with_beacon",
        "inspect_dropper",
        "inspect_hopper",
        "inspect_dispenser",
        "play_noteblock",
        "tune_noteblock",
        "pot_flower",
        "trigger_trapped_chest",
        "open_enderchest",
        "enchant_item",
        "play_record",
        "interact_with_furnace",
        "interact_with_crafting_table",
        "open_chest",
        "sleep_in_bed",
        "open_shulker_box",
        "open_barrel",
        "interact_with_blast_furnace",
        "interact_with_smoker",
        "interact_with_lectern",
        "interact_with_campfire",
        "interact_with_cartography_table",
        "interact_with_loom",
        "interact_with_stonecutter",
        "bell_ring",
        "raid_trigger",
        "raid_win",
        "interact_with_anvil",
        "interact_with_grindstone",
        "target_hit",
        "interact_with_smithing_table"
    ]
};

// PAINTING MOTIVES
export const allPaintingMotives = [
    "kebab",
    "aztec",
    "alban",
    "aztec2",
    "bomb",
    "plant",
    "wasteland",
    "pool",
    "courbet",
    "sea",
    "sunset",
    "creebet",
    "wanderer",
    "graham",
    "match",
    "bust",
    "stage",
    "void",
    "skull_and_roses",
    "wither",
    "fighters",
    "pointer",
    "pigscene",
    "burning_skull",
    "skeleton",
    "donkey_kong"
];

// ENCHANTMENTS
export const allEnchantments = {
    "protection": itemGroups.armor,
    "fire_protection": itemGroups.armor,
    "feather_falling": itemGroups.boots,
    "blast_protection": itemGroups.armor,
    "projectile_protection": itemGroups.armor,
    "respiration": itemGroups.helmets,
    "aqua_affinity": itemGroups.armor,
    "thorns": itemGroups.armor,
    "depth_strider": itemGroups.boots,
    "frost_walker": itemGroups.boots,
    "binding_curse": itemGroups.wearables,
    "soul_speed": itemGroups.boots,
    "sharpness": itemGroups.melee_weapons,
    "smite": itemGroups.melee_weapons,
    "bane_of_arthropods": itemGroups.melee_weapons,
    "knockback": itemGroups.swords,
    "fire_aspect": itemGroups.swords,
    "looting": itemGroups.swords,
    "sweeping": itemGroups.swords,
    "efficiency": itemGroups.efficiency_tools,
    "silk_touch": itemGroups.mining_tools,
    "unbreaking": itemGroups.durability_items,
    "fortune": itemGroups.mining_tools,
    "power": ['bow'],
    "punch": ['bow'],
    "flame": ['bow'],
    "infinity": ['bow'],
    "luck_of_the_sea": ['fishing_rod'],
    "lure": ['fishing_rod'],
    "loyalty": ['trident'],
    "impaling": ['trident'],
    "riptide": ['trident'],
    "channeling": ['trident'],
    "multishot": ['crossbow'],
    "quick_charge": ['crossbow'],
    "piercing": ['crossbow'],
    "mending": itemGroups.durability_items,
    "vanishing_curse": itemGroups.enchantables,
};

// NBT TAGS
export const allNBTTags = {
    entity: { //TODO

    },
    item: {
        Name: {
            type: 'jsontext',
            parentTag: 'display',
            label: 'Name',
            tip: `<span>
                The name that will be displayed as the item's name.
                <span class="tip-tip">set italic to false to make the item appear as if its name was never changed.</span>
            </span>`,
        },
        Lore: {
            type: 'jsontext multiline',
            parentTag: 'display',
            label: 'Lore',
            tip: `<span>
                The lines of text that will be displayed under the item's name when looked at inside an inventory.
                <span class="tip-tip">set italic to false to make the item appear as if its name was never changed.</span>
            </span>`,
        },
        color: {
            type: 'color checkbox',
            parentTag: 'display',
            appliesTo: [
                'leather_helmet',
                'leather_chestplate',
                'leather_leggings',
                'leather_boots',
                'leather_horse_armor',
            ],
            label: 'Color',
            tip: `<span>
                The color of the armor piece.
            </span>`,
        },
        Damage: {
            type: 'number',
            min: 0,
            appliesTo: itemGroups.durability_items,
            label: 'Damage',
            tip: `<span>
                The amount of durability that has already been used.
                <span class="tip-tip">if Damage is more than the tool's durability, it will break after 1 use.</span>
            </span>`,
        },
        RepairCost: {
            type: 'number',
            min: 0,
            appliesTo: itemGroups.durability_items,
            label: 'Repair Cost',
            tip: `<span>
                The cost to repair the tool.
                <span class="tip-tip">items with repair cost of 40 or above cannot be repaired in Survival Mode.</span>
            </span>`,
        },
        Ubreakable: {
            type: 'truefalse',
            appliesTo: itemGroups.durability_items,
            label: 'Unbreakable',
            tip: `<span>
                If set to "true", the item will not lose durability. Settings this to any other value does not affect how the item functions.
            </span>`
        },
        CustomModelData: {}, //TODO
        CustomTags: {
            type: 'simpleadder',
            label: 'Custom Tags',
            tip: `<span>
                //TODO
            </span>`
        },
        CanPlaceOn: {
            type: 'blockadder',
            label: 'Can Place On',
            tip: `<span>
                A list of blocks that this item can be placed on in Adventure Mode. Does not affect any other gamemode.
            </span>`
        },
        CanBreak: {
            type: 'blockadder',
            label: 'Can Break',
            tip: `<span>
                A list of blocks that this item can break in Adventure Mode. Does not affect any other gamemode.
            </span>`
        },
        HideFlags: {
            type: 'hideflags',
            label: 'Hide Flags',
            tip: `<span></span>` //TODO
        },
        Enchantments: {
            type: "enchantadder",
            label: 'Enchantments',
            tip: `<span></span>` //TODO
        },
        AttributeModifiers: {
            type: "attributeadder",
            label: 'Attribute Modifiers',
            tip: `<span></span>` //TODO
        },
        SkullOwner: {
            type: 'text',
            size: 'L',
            label: 'Skull Owner',
            appliesTo: ['player_head'],
            tip: `<span></span>` //TODO
        },
        title: {
            type: 'text',
            size: 'M',
            appliesTo: ['written_book'],
            label: 'Title',
            tip: `<span>
                The title of the written book.
            </span>`
        },
        author: {
            type: 'text',
            size: 'M',
            appliesTo: ['written_book'],
            label: 'Author',
            tip: `<span>
                The author of the written book.
            </span>`
        },
        generation: {
            type: 'select',
            options: [
                ['Original', 0],
                ['Copy of Original', 1],
                ['Copy of a Copy', 2],
                ['Tattered', 3],
            ],
            appliesTo: ['written_book'],
            label: 'Generation',
            tip: `<span>
                The generation of the written book.
            </span>`
        },
        pages: {
            type: 'jsontext book',
            appliesTo: ['written_book'],
            label: 'Pages',
        },
        pages__2: {
            type: 'book',
            appliesTo: ['writable_book'],
            label: 'Pages',
        },
        Explosions: {
            type: 'fireworkexplosion multiple',
            appliesTo: [
                'firework_rocket'
            ],
            parentTag: 'Fireworks',
            label: 'Firework Explosions',
            tip: `<span></span>` //TODO
        },
        Flight: {
            type: 'number',
            appliesTo: [
                'firework_rocket'
            ],
            parentTag: 'Fireworks',
            label: 'Flight Duration',
            tip: `<span></span>` //TODO
        },
        Explosion: {
            type: 'fireworkexplosion',
            appliesTo: [
                'firework_star'
            ],
            label: 'Firework Explosion',
            tip: `<span></span>` //TODO
        }
    },
};

// SELECTOR ARGUMENTS
export const allSelectors = {
    raw: [
        '@s',
        '@p',
        '@a',
        '@r',
        '@e',
        'Player name',
    ],
    raw_player: [
        '@s',
        '@p',
        '@a',
        '@r',
        'Player name',
    ],
    explanations: [
        ['@s', 'The command\'s executor'],
        ['@p', 'Nearest player'],
        ['@a', 'All players'],
        ['@r', 'A random player'],
        ['@e', 'All entities', true],
        ['</code>Player name<code>', 'Lets you specify the exact player name that should be targeted.'],
    ],
};
export const allSelectorArgs = {
    limit: {
        type: "number",
        min: 1,
        size: 'S',
        disableIf: [
            {
                field: "selector",
                values: [ '@s' ],
                disableValue: 1,
                enableValue: null,
                whyDisabled: `<span>
                    Not available when Selector is set to "<code>@s</code>".
                </span>`
            },
        ],
        forPlayer: true,
        label: "Limit",
        tip: `<span>
            Maximum number of entities to select.
        </span>`,
    },
    sort: {
        type: "select",
        options: [
            unsetOption,
            'nearest',
            'furthest',
            'random',
            'arbitrary'
        ],
        disableIf: [
            {
                field: "selector",
                values: [ '@s' ],
                disableValue: 'null',
                whyDisabled: `<span>
                    Not available when Selector is set to "<code>@s</code>".
                </span>`
            },
        ],
        forPlayer: true,
        label: "Sort",
        tip: `<span>
            How the game should sort the results.
            <ul>
                <li><b><code>nearest</code></b> - sorts by distance from the executor's position, and picks the nearest entities. Default for <code>@p</code></li>
                <li><b><code>furthest</code></b> - sorts by distance from the executor's position, and picks the furthest entities.</li>
                <li><b><code>random</code></b> - sorts entities randomly. Default for <code>@r</code></li>
                <li><b><code>arbitrary</code></b> - entities are sorted by the time on which they appeared in the world. Oldest entities first. Default for <code>@a</code> and <code>@e</code></li>
            </ul>
            <span class="tip-tip">effects can only be seen if the limit is set.</span>
        </span>`
    },
    name: {
        type: "nottext",
        size: 'M',
        forPlayer: true,
        label: 'Name',
        tip: `<span>
            The name of the entity to be selected. Add <code>!</code> to the front to make the game select entities that don't have this name.
        </span>`
    },
    distance: {
        type: "range",
        forPlayer: true,
        label: "Distance",
        tip: `<span>
            If set, only entities that are within a set radius will be selected.
        </span>`
    },
    x: {
        type: "number",
        size: 'S',
        forPlayer: true,
        label: "X",
        tip: `<span>
            If set, the entities will be selected from this x coordinate. Defaults to the executor's x position.
        </span>`,
    },
    y: {
        type: "number",
        size: 'S',
        forPlayer: true,
        label: "Y",
        tip: `<span>
            If set, the entities will be selected from this y coordinate. Defaults to the executor's y position.
        </span>`
    },
    z: {
        type: "number",
        size: 'S',
        forPlayer: true,
        label: "Z",
        tip: `<span>
            If set, the entities will be selected from this z coordinate. Defaults to the executor's x position.
        </span>`
    },
    dx: {
        type: 'number',
        min: 0,
        size: 'S',
        forPlayer: true,
        label: "X box length",
        tip: `<span>
            Number of blocks in the positive x direction (east) from the point of execution. The selector will only target entities located between the two points.
        </span>`
    },
    dy: {
        type: 'number',
        min: 0,
        size: 'S',
        forPlayer: true,
        label: "Y box length",
        tip: `<span>
            Number of blocks in the positive y direction (east) from the point of execution. The selector will only target entities located between the two points.
        </span>`
    },
    dz: {
        type: 'number',
        min: 0,
        size: 'S',
        forPlayer: true,
        label: "Z box length",
        tip: `<span>
            Number of blocks in the positive z direction (east) from the point of execution. The selector will only target entities located between the two points.
        </span>`
    },
    x_rotation: {
        type: "range",
        min: -90,
        max: 90,
        forPlayer: true,
        label: "Vertical rotation (pitch)",
        tip: `<span>
            Selects only entities with their vertical head rotation being between this value.
            <br/>
            <img src="/img/tips/pitch.png" alt="Pitch demonstration" style="height: 200px; margin-top: 20px;"></img>
        </span>`,
    },
    y_rotation: {
        type: "range",
        min: -180,
        max: 180,
        forPlayer: true,
        label: "Horizontal rotation (yaw)",
        tip: `<span>
            Selects only entities with their horizontal head rotation being between this value.
            <br/>
            <img src="/img/tips/yaw.png" alt="Yaw demonstration" style="height: 200px; margin-top: 20px;"></img>
        </span>`
    },
    gamemode: {
        type: "gamemodeadder",
        options: [
            unsetOption,
            ...allGameModes
        ],
        disableIf: [
            {
                field: "selector",
                values: [ '@e' ],
                whyDisabled: `<span>
                    Only available for players, i.e. when Selector is set to something else than "<code>@e</code>".
                </span>`
            },
        ],
        forPlayer: true,
        label: "Game mode",
        buttonText: 'Add game mode...',
        emptyListText: 'No game modes added yet!',
        tip: `<span>
            The game mode of the player to be selected. Add negation (the "<code>!</code>" sign) to the front to make the game select players that are not in the specified game mode.
            <br/><span class="tip-warning">do not include more than one game mode, unless all are set to negative.</span>
        </span>`,
    },
    team__2: {
        type: 'select',
        options: [
            ['This team', 0],
            ['Not this team', 1],
            ['On any team', 2],
            ['Not on any team', 3],
        ],
        forPlayer: true,
        label: "Team selection mode",
        ignoreOutput: true,
    },
    team__1: {
        type: 'text',
        inputRegex: [
            /[^a-z0-9_]/i,
        ],
        maxLength: 16,
        size: 'M',
        disableIf: [
            {
                field: "team__2",
                values: [ '2', '3' ],
                whyDisabled: `<span>
                    The team selection mode has to be set to either "This team" or "Not this team".
                </span>`
            },
        ],
        ignoreOutput: true,
        forPlayer: true,
        label: "Team",
        tip: `<span>
            The name of the team that should be selected.
        </span>`,
    },
    team: {
        type: 'dummy',
        forPlayer: true,
    },
    nbt: {
        type: 'text',
        size: 'MAX',
        forPlayer: true,
        label: 'NBT',
        tip: `<span>
            The NBT data (or a part of the data) of the entity to be selected.
        </span>`
    },
    type: {
        type: 'typeadder',
        options: [
            unsetOption,
            ...([...allEntities, 'player'].sort()),
        ],
        disableIf: [
            {
                field: "selector",
                values: [ '@s', '@p', '@r', '@a' ],
                whyDisabled: `<span>
                Only available when Selector is set to "<code>@e</code>".
                </span>`
            },
        ],
        label: 'Type',
        buttonText: 'Add type...',
        emptyListText: 'No types added yet!',
        tip: `<span>
            The type of the entity to be selected. Add negation (the "<code>!</code>" sign) to the front to make the game select players that are not of the specified type.
            <br/><span class="tip-warning">do not include more than one type, unless all are set to negative.</span>
        </span>`,
    },
    tag: {
        type: 'tagadder',
        forPlayer: true,
        label: 'Tags',
        buttonText: 'Add tag...',
        emptyListText: 'No tags added yet!',
        tip: `<span>
            The tag of the entity to be selected. Add negation (the "<code>!</code>" sign) to the front to make the game select players that are not of the specified tag.
        </span>`,
    },
    scores: {
        type: 'scoreadder',
        forPlayer: true,
        label: 'Scoreboard scores',
        buttonText: 'Add score...',
        emptyListText: 'No scores added yet!',
    },
    advancement: { //! coming soon
        type: 'advancementadder',
        comingSoon: '', 
        disableIf: [
            {
                field: "selector",
                values: [ '@e' ],
                whyDisabled: `<span>
                Only available for players, i.e. when Selector is set to something else than "<code>@e</code>".
                </span>`
            },
        ],
        forPlayer: true,
        label: 'Advancements',
        buttonText: 'Add advancement...',
        emptyListText: 'No advancements added yet!',
        tip: `<span>
            The advancements that the player has to have completed in order to be selected. Add negation (the "<code>!</code>" sign) to the front to make the game select players that have <u>not</u> completed the specified advancement.
        </span>`,
    },
    predicate: {
        type: 'predicateadder',
        forPlayer: true,
        label: 'Predicates',
        buttonText: 'Add predicate...',
        emptyListText: 'No predicates added yet!',
    },
};

//COMMANDS
export const allCommands = {
    advancement: { planned: true },
    attribute: { planned: true },
    bossbar: { planned: true },
    clear: { planned: true },
    clone: { planned: true },
    data: { planned: true },
    effect: {
        wikipage: 'Commands/effect',
        steps: [
            {
                header: {
                    text: 'Fill all required fields',
                    tag: 'h1',
                },
                fields: [
                    {
                        name: "action",
                        type: "select",
                        options: [
                            'give',
                            'clear',
                        ],
                        required: true,
                        label: "Action",
                        tip: `<span>
                            Specifies what action should be performed.
                            <ul>
                                <li><b>clear</b> - clears the effects from the entity.</li>
                                <li><b>give</b> - gives an effect to the target entity.</li>
                            </ul>
                        </span>`,
                    },
                    {
                        name: "target",
                        type: "selector",
                        required: true,
                        addIf: [
                            {
                                field: 'action',
                                values: [ 'give' ],
                            }
                        ],
                        label: "Target entity",
                    },
                    {
                        name: "effect",
                        type: "select",
                        options: [
                            unsetOption,
                            ...allEffects,
                        ],
                        addIf: [
                            {
                                field: 'action',
                                values: [ 'give' ],
                            }
                        ],
                        required: true,
                        label: "Effect",
                    },
                ],
            },
            {
                header: {
                    text: 'Specify additional options',
                    tag: 'h1',
                },
                fields: [
                    {
                        name: "target_clear",
                        type: "selector",
                        default: '@s',
                        addIf: [
                            {
                                field: 'action',
                                values: [ 'clear' ],
                            }
                        ],
                        label: "Target entity",
                    },
                    {
                        name: "effect_clear",
                        type: "select",
                        options: [
                            unsetOption,
                            ...allEffects,
                        ],
                        addIf: [
                            {
                                field: 'action',
                                values: [ 'clear' ],
                            }
                        ],
                        label: "Effect",
                    },
                    {
                        name: "duration",
                        type: "time",
                        min: 0,
                        max: 1_000_000,
                        default: 30,
                        unit: ['s', 'seconds'],
                        addIf: [
                            {
                                field: 'action',
                                values: [ 'give' ],
                            }
                        ],
                        label: "Duration",
                    },
                    {
                        name: "amplifier",
                        type: "number",
                        min: 0,
                        max: 255,
                        default: 0,
                        addIf: [
                            {
                                field: 'action',
                                values: [ 'give' ],
                            }
                        ],
                        label: "Amplifier",
                    },
                    {
                        name: "hideParticles",
                        type: "truefalse",
                        addIf: [
                            {
                                field: 'action',
                                values: [ 'give' ],
                            }
                        ],
                        label: "Hide Particles?",
                        tip: `<span>
                            Specifies if the effect particles should be hidden for that effect. Default to <code>false</code>.
                        </span>`,
                    },
                ]
            },
        ],
        generator: function(fields, output) {
            let allRequiredFieldsAreFilled = true;
            for (const field in fields) {
                const fieldEl = fields[field];
                if (fieldEl.required && !fieldEl.isFilled() && !fieldEl.isHidden()) {
                    allRequiredFieldsAreFilled = false;
                    break;
                }
            }
            output.removeClass('red');
            if (allRequiredFieldsAreFilled) {
                let outputArr = [];
                outputArr.push('/effect');
                //action
                outputArr.push(fields.action.value);
                if (fields.action.value == 'clear') {
                    //target
                    if (fields.target_clear.isFilled() || fields.effect_clear.isFilled()) {
                        outputArr.push(fields.target_clear.isFilled() ? fields.target_clear.value : fields.target_clear.default);
                    }
                    //effect
                    if (fields.effect_clear.isFilled()) {
                        outputArr.push(fields.effect_clear.value);
                    }
                }
                else {
                    //target
                    outputArr.push(fields.target.value);
                    //effect
                    outputArr.push(fields.effect.value);
                    //duration
                    if (fields.duration.isFilled() || fields.amplifier.isFilled() || fields.hideParticles.isFilled()) {
                        outputArr.push(fields.duration.isFilled() ? fields.duration.value : fields.duration.default);
                    }
                    //amplifier
                    if (fields.amplifier.isFilled() || fields.hideParticles.isFilled()) {
                        outputArr.push(fields.amplifier.isFilled() ? fields.amplifier.value : fields.amplifier.default);
                    }
                    //hide particles
                    if (fields.hideParticles.isFilled()) {
                        outputArr.push(fields.hideParticles.value);
                    }
                }
                //concatenate array
                output.val(outputArr.join(' '));
            }
            else {
                output.addClass('red');
                output.val('Not all required fields are filled!');
            }
        }
    },
    enchant: {
        wikipage: 'Commands/enchant',
        steps: [
            {
                header: {
                    text: 'Fill all required fields',
                    tag: 'h1',
                },
                fields: [
                    {
                        name: "target",
                        type: "selector",
                        required: true,
                        label: "Target entity",
                    },
                    {
                        name: "enchant",
                        type: "select",
                        options: [
                            unsetOption,
                            ...Object.keys(allEnchantments),
                        ],
                        required: true,
                        label: "Enchantment",
                    },
                ],
            },
            {
                header: {
                    text: 'Specify additional options',
                    tag: 'h1',
                },
                fields: [
                    {
                        name: "level",
                        type: "number",
                        min: 1,
                        max: 5,
                        label: "Level",
                    },
                ]
            },
        ],
        generator: function(fields, output) {
            let allRequiredFieldsAreFilled = true;
            for (const field in fields) {
                const fieldEl = fields[field];
                if (fieldEl.required && !fieldEl.isFilled() && !fieldEl.isHidden()) {
                    allRequiredFieldsAreFilled = false;
                    break;
                }
            }
            output.removeClass('red');
            if (allRequiredFieldsAreFilled) {
                let outputArr = [];
                outputArr.push('/enchant');
                //target
                outputArr.push(fields.target.value);
                //enchant
                outputArr.push(fields.enchant.value);
                //level
                if (fields.level.isFilled()) {
                    outputArr.push(fields.level.value);
                }
                
                //concatenate array
                output.val(outputArr.join(' '));
            }
            else {
                output.addClass('red');
                output.val('Not all required fields are filled!');
            }
        }
    },
    execute: { planned: true },
    fill: { planned: true },
    gamemode: {
        wikipage: 'Commands/gamemode',
        steps: [
            {
                header: {
                    text: 'Choose game mode',
                    tag: 'h1',
                },
                fields: [
                    {
                        name: "mode",
                        type: "select",
                        required: true,
                        options: [
                            unsetOption,
                            ...allGameModes,
                        ],
                        label: "Game Mode",
                    },
                ],
            },
            {
                header: {
                    text: 'Choose target players',
                    tag: 'h1',
                },
                fields: [
                    {
                        name: "target",
                        type: "selector",
                        playerOnly: true,
                        label: "Target Player",
                        tip: `<span>
                            Specifies who should have their game mode changed.
                        </span>`,
                    },
                ],
            },
        ],
        generator: function(fields, output) {
            let allRequiredFieldsAreFilled = true;
            for (const field in fields) {
                const fieldEl = fields[field];
                if (fieldEl.required && !fieldEl.isFilled()) {
                    allRequiredFieldsAreFilled = false;
                    break;
                }
            }
            output.removeClass('red');
            if (allRequiredFieldsAreFilled) {
                let outputArr = [];
                outputArr.push('/gamemode');
                //game mode
                outputArr.push(fields.mode.value);
                //target
                fields.target.isFilled() && outputArr.push(fields.target.value);
                
                //concatenate array
                output.val(outputArr.join(' '));
            }
            else {
                output.addClass('red');
                output.val('Not all required fields are filled!');
            }
        }
    },
    item: { planned: true },
    kill: {
        wikipage: 'Commands/kill',
        steps: [
            {
                header: {
                    text: 'Choose target entities',
                    tag: 'h1',
                },
                fields: [
                    {
                        name: "target",
                        type: "selector",
                        label: "Target entity",
                        tip: `<span>
                            Specifies who should be killed.
                        </span>`,
                    },
                ],
            },
        ],
        generator: function(fields, output) {
            let outputArr = [];
            outputArr.push('/kill');
            //target
            fields.target.isFilled() && outputArr.push(fields.target.value);
            
            //concatenate array
            output.val(outputArr.join(' '));
        }
    },
    loot: { planned: true },
    particle: {
        wikipage: 'Commands/particle',
        steps: [
            {
                header: {
                    text: 'Choose the particle',
                    tag: 'h1',
                },
                fields: [
                    {
                        name: "particle",
                        type: "particle",
                        required: true,
                        label: "Particle",
                    },
                ],
            },
            {
                header: {
                    text: 'Additional particle options',
                    tag: 'h1',
                },
                fields: [
                    {
                        name: "dustColor",
                        type: "color",
                        format: "rgbfloat",
                        required: true,
                        label: "Dust color",
                        addIf: [
                            {
                                field: "particle",
                                values: [ 'dust', 'dust_color_transition' ],
                            }
                        ],
                        tip: `<span>
                            Specifies the color of the dust particle.
                        </span>`,
                    },
                    {
                        name: "dustSize",
                        type: "number",
                        format: "float",
                        min: 0,
                        max: 4,
                        required: true,
                        label: "Dust size",
                        addIf: [
                            {
                                field: "particle",
                                values: [ 'dust', 'dust_color_transition' ],
                            }
                        ],
                        tip: `<span>
                            Specifies the size of the dust particle.
                        </span>`,
                    },
                    {
                        name: "dustColor2",
                        type: "color",
                        format: "rgbfloat",
                        required: true,
                        label: "Dust fade-to color",
                        addIf: [
                            {
                                field: "particle",
                                values: [ 'dust_color_transition' ],
                            }
                        ],
                        tip: `<span>
                            Specifies the color to which the dust particle transitions to.
                        </span>`,
                    },
                    {
                        name: "effectColor",
                        type: "color",
                        format: "rgbfloat",
                        required: true,
                        label: "Effect particle color",
                        addIf: [
                            {
                                field: "particle",
                                values: [ 'entity_effect', 'ambient_entity_effect' ],
                            }
                        ],
                        tip: `<span>
                            Specifies the color of the effect particle.
                        </span>`,
                    },
                    {
                        name: "effectGamma",
                        type: "number",
                        format: "float",
                        min: 0,
                        max: 1,
                        required: true,
                        label: "Effect particle gamma",
                        addIf: [
                            {
                                field: "particle",
                                values: [ 'entity_effect', 'ambient_entity_effect' ],
                            }
                        ],
                        tip: `<span>
                            Specifies the gamma value for the effect particle, making the particle brighter or darker. Value of "1" results in full brightness, and "255" results in black particles.
                        </span>`,
                    },
                    {
                        name: "blocktype",
                        type: "block",
                        blockStates: true,
                        NBT: false,
                        required: true,
                        label: "Block type",
                        addIf: [
                            {
                                field: "particle",
                                values: [ 'block', 'falling_dust' ],
                            }
                        ],
                        tip: `<span>
                            Specifies the block from which the particles should be generated. Block states may affect how the particles look.
                        </span>`,
                    },
                    {
                        name: "itemtype",
                        type: "item",
                        NBT: false,
                        required: true,
                        label: "Item type",
                        addIf: [
                            {
                                field: "particle",
                                values: [ 'item' ],
                            }
                        ],
                        tip: `<span>
                            Specifies the item from which the particles should be generated. NBT data does not affect how the particles look, and thus cannot be selected here.
                        </span>`,
                    },
                    {
                        name: "vibrationFrom",
                        type: "vec3",
                        required: true,
                        label: "Vibration location (from)",
                        addIf: [
                            {
                                field: "particle",
                                values: [ 'vibration' ],
                            }
                        ],
                        tip: `<span>
                            Specifies the position from which the vibration should travel. Tildes (<code>~</code>) and carets (<code>^</code>) cannot be used here.
                        </span>`,
                    },
                    {
                        name: "vibrationTo",
                        type: "vec3",
                        required: true,
                        label: "Vibration location (to)",
                        addIf: [
                            {
                                field: "particle",
                                values: [ 'vibration' ],
                            }
                        ],
                        tip: `<span>
                            Specifies the position to which the vibration should travel. Tildes (<code>~</code>) and carets (<code>^</code>) cannot be used here.
                        </span>`,
                    },
                    {
                        name: "vibrationTime",
                        type: "time",
                        min: 1,
                        max: intLimit,
                        required: true,
                        label: "Vibration duration",
                        addIf: [
                            {
                                field: "particle",
                                values: [ 'vibration' ],
                            }
                        ],
                        tip: `<span>
                            Specifies the duration of the vibration.
                            <br/><br/>
                            <span class="tip-warning">once summoned, the particle will stay visible until this time runs out, and you will not be able to get rid of it. Be cautious!</span>
                        </span>`,
                    },
                    {
                        type: "textrow",
                        text: "No additional options are available for this particle!",
                        showOnlyIfEmpty: true,
                    }
                ],
            },
            {
                header: {
                    text: 'Options',
                    tag: 'h1',
                },
                fields: [
                    {
                        name: "pos",
                        type: "coordinates",
                        label: "Position",
                    },
                    {
                        name: "delta",
                        type: "vec3",
                        label: "Delta",
                        tip: `<span>
                            Number of blocks from the point of execution where the particles appear, multiplie by about 8. Some particles may end up outside this box, in either direction.
                        </span>`
                    },
                    {
                        name: "speed",
                        type: "number",
                        format: "float",
                        min: 0,
                        max: floatLimit,
                        label: "Speed",
                        tip: `<span>
                            The speed of the particle. Some particles are not affected by this field.
                        </span>`
                    },
                    {
                        name: "count",
                        type: "number",
                        format: "int",
                        min: 0,
                        max: intLimit,
                        label: "Count",
                        tip: `<span>
                            The amount of particles to be created.<br/><br/>
                            <span class="tip-warning">setting this to a very large amount may cause the world to lag heavily; huge values may cause the game/server to freeze.</span>
                        </span>`
                    },
                    {
                        name: "mode",
                        type: "select",
                        options: [
                            unsetOption,
                            'normal',
                            'force',
                        ],
                        label: "Mode",
                        tip: `<span>
                            The mode that should be used to display the particles.
                            <ul>
                                <li><b><code>normal</code></b> - default value. The particles can only be seen by players who are up to 32 blocks away, and player settings may affect what particles can be seen.</li>
                                <li><b><code>force</code></b> - The particles can be seen by players who are up to 512 blocks away, and player settings do not affect the particles.</li>
                            </ul>
                        </span>`
                    },
                    {
                        name: "viewers",
                        type: "selector",
                        label: "Viewers",
                        tip: `<span>
                            Specifies who can see the particles.
                        </span>`
                    },
                ],
            },
        ],
        generator: function(fields, output) {
            let allRequiredFieldsAreFilled = true;
            for (const field in fields) {
                const fieldEl = fields[field];
                if (fieldEl.required && !fieldEl.isFilled() && !fieldEl.isHidden()) {
                    allRequiredFieldsAreFilled = false;
                    break;
                }
            }
            output.removeClass('red');
            if (allRequiredFieldsAreFilled) {
                let outputArr = [];
                outputArr.push('/particle');
                //particle type
                outputArr.push(fields.particle.value);
                let addPos = true;
                //special parameters
                switch (fields.particle.value) {
                    case 'dust':
                    case 'dust_color_transition':
                        outputArr.push(fields.dustColor.value);
                        outputArr.push(fields.dustSize.value);
                        if (fields.particle.value == 'dust_color_transition') outputArr.push(fields.dustColor2.value);
                        break;
                    case 'entity_effect':
                    case 'ambient_entity_effect':
                        outputArr.push(fields.pos.value);
                        addPos = false;
                        outputArr.push(fields.effectColor.value);
                        outputArr.push(fields.effectGamma.value);
                        break;
                    case 'block':
                        outputArr.push(fields.blocktype.value);
                        break;
                    case 'item':
                        outputArr.push(fields.itemtype.value);
                        break;
                    case 'vibration':
                        outputArr.push(fields.vibrationFrom.value);
                        outputArr.push(fields.vibrationTo.value);
                        outputArr.push(fields.vibrationTime.value);
                        break;
                }
                //position
                if (addPos && (fields.pos.isFilled() || fields.delta.isFilled() || fields.speed.isFilled() || fields.count.isFilled() || fields.mode.isFilled() || fields.viewers.isFilled())) {
                    outputArr.push(fields.pos.isFilled() ? fields.pos.value : '~ ~ ~');
                }
                //delta
                if (fields.delta.isFilled() || fields.speed.isFilled() || fields.count.isFilled() || fields.mode.isFilled() || fields.viewers.isFilled()) {
                    outputArr.push(fields.delta.isFilled() ? fields.delta.value : '0 0 0');
                }
                //speed
                if (fields.speed.isFilled() || fields.count.isFilled() || fields.mode.isFilled() || fields.viewers.isFilled()) {
                    outputArr.push(fields.speed.isFilled() ? fields.speed.value : '0');
                }
                //count
                if (fields.count.isFilled() || fields.mode.isFilled() || fields.viewers.isFilled()) {
                    outputArr.push(fields.count.isFilled() ? fields.count.value : '1');
                }
                //mode
                if (fields.mode.isFilled() || fields.viewers.isFilled()) {
                    outputArr.push(fields.mode.isFilled() ? fields.mode.value : 'normal');
                }
                //viewers
                if (fields.viewers.isFilled()) {
                    outputArr.push(fields.viewers.value);
                }
                
                //concatenate array
                output.val(outputArr.join(' '));
            }
            else {
                output.addClass('red');
                output.val('Not all required fields are filled!');
            }
        }
    },
    playsound: {
        wikipage: 'Commands/playsound',
        steps: [
            {
                header: {
                    text: "Choose the sound",
                    tag: 'h1',
                },
                fields: [
                    {
                        name: 'sound',
                        type: 'sound',
                        required: true,
                        label: 'Sound',
                        tip: `<span>
                            Specifies what sound should be played to the player.
                        </span>`,
                    },
                    {
                        name: 'source',
                        type: 'select',
                        options: [
                            unsetOption,
                            'master',
                            'music',
                            'record',
                            'weather',
                            'block',
                            'hostile',
                            'neutral',
                            'player',
                            'ambient',
                            'voice'
                        ],
                        required: true,
                        label: 'Source',
                        tip: `<span>
                            Specifies what sound category the sound should play through. Player's settings affect the volume of the sound based on the category selected.
                        </span>`,
                    }
                ]
            },
            {
                header: {
                    text: 'Choose who to play the sound to',
                    tag: 'h1',
                },
                fields: [
                    {
                        name: 'targets',
                        type: 'selector',
                        playerOnly: true,
                        required: true,
                        hidden: true,
                        label: 'Target',
                        tip: `<span>
                            Specifies who the sound should be played to.
                        </span>`,
                    }
                ]
            },
            {
                header: {
                    text: 'Additional settings',
                    tag: 'h1',
                },
                optional: true,
                fields: [
                    {
                        name: 'pos',
                        type: 'coordinates',
                        default: '~ ~ ~',
                        label: 'Position',
                        tip: `<span>
                            Specifies the position to play the sound from.
                        </span>`,
                    },
                    {
                        name: 'volume',
                        type: 'number',
                        min: 0,
                        size: 'S',
                        default: 1,
                        label: 'Volume',
                        tip: `<span>
                            Specifies the volume of the sound, as well as the distance from which it can be heard by players.
                            <br/>Values over 1 will not be louder, but the sound's audible distance will grow, 16 blocks per 1 volume unit.
                            <br/>Values below or equal to 0 make the sound inaudible, that's why they are disabled here.
                            <br/>Default value is 1.
                        </span>`,
                    },
                    {
                        name: 'pitch',
                        type: 'number',
                        min: 0,
                        max: 2,
                        size: 'S',
                        default: 1,
                        label: 'Pitch',
                        tip: `<span>
                            Specifies the pitch of the sound.<br/>
                            Values below 0.5 are equivalent to 0.5. Values below 1 lower the pitch and increase the sound's duration, while values over 1 raise the pitch and decrease the sound's duration.<br/>
                            Default value is 1.
                        </span>`,
                    },
                    {
                        name: 'minVolume',
                        type: 'number',
                        min: 0,
                        size: 'S',
                        default: 0,
                        label: 'Minimum volume',
                        tip: `<span>
                            Specifies the volume of the sound for players outside the normal range, specified in the Volume field.
                            <br/>Values below or equal to 0 make the sound inaudible, that's why they are disabled here.
                            <br/>Default value is 0.
                        </span>`,
                    }
                ]
            }
        ],
        generator: function(fields, output) {
            let allRequiredFieldsAreFilled = true;
            for (const field in fields) {
                const fieldEl = fields[field];
                if (fieldEl.required && !fieldEl.isFilled() && !fieldEl.isHidden()) {
                    allRequiredFieldsAreFilled = false;
                    break;
                }
            }
            if (allRequiredFieldsAreFilled) {
                let outputArr = [];
                outputArr.push('/playsound');
                outputArr.push(fields.sound.value);
                outputArr.push(fields.source.value);
                outputArr.push(fields.targets.value);
                if (fields.pos.isFilled() || fields.volume.isFilled() || fields.pitch.isFilled() || fields.minVolume.isFilled()) {
                    outputArr.push(fields.pos.isFilled() ? fields.pos.value : fields.pos.default);
                }
                if (fields.volume.isFilled() || fields.pitch.isFilled() || fields.minVolume.isFilled()) {
                    outputArr.push(fields.volume.isFilled() ? fields.volume.value : fields.volume.default);
                }
                if (fields.pitch.isFilled() || fields.minVolume.isFilled()) {
                    outputArr.push(fields.pitch.isFilled() ? fields.pitch.value : fields.pitch.default);
                }
                if (fields.minVolume.isFilled()) {
                    outputArr.push(fields.minVolume.value);
                }
                //concatenate array
                output.val(outputArr.join(' '));
            }
        }
    },
    recipe: { planned: true },
    scoreboard: { planned: true },
    setblock: { planned: true },
    stopsound: { planned: true },
    summon: { planned: true },
    tag: {
        wikipage: 'Commands/tag',
        steps: [
            {
                header: {
                    text: 'Fill the required fields',
                    tag: 'h1',
                },
                fields: [
                    {
                        name: "target",
                        type: "selector",
                        required: true,
                        label: "Target entity",
                    },
                    {
                        name: "action",
                        type: "select",
                        options: [
                            'add',
                            'list',
                            'remove',
                        ],
                        required: true,
                        label: "Action",
                        tip: `<span>
                            Specifies what action should be performed.
                            <ul>
                                <li><b>add</b> - adds the tag to the entity. Nothing happens if the entity already has that tag.</li>
                                <li><b>list</b> - lists all the tags of that entity.</li>
                                <li><b>remove</b> - removes the tag to the entity. Nothing happens if the entity doesn't have that tag.</li>
                            </ul>
                        </span>`,
                    },
                    {
                        name: "tag",
                        type: "text",
                        size: "L",
                        maxLength: 16,
                        inputRegex: [
                            /[^a-z0-9_\+\.\-]/i,
                        ],
                        required: true,
                        addIf: [
                            {
                                field: "action",
                                values: [ 'add', 'remove' ],
                                softHidden: true,
                            }
                        ],
                        label: "Tag name",
                        tip: `<span>
                            Specifies the tag to be added or removed. Maximum 16 characters.
                        </span>`,
                    },
                ],
            },
        ],
        generator: function(fields, output) {
            let allRequiredFieldsAreFilled = true;
            for (const field in fields) {
                const fieldEl = fields[field];
                if (fieldEl.required && !fieldEl.isFilled() && !fieldEl.isHidden()) {
                    allRequiredFieldsAreFilled = false;
                    break;
                }
            }
            output.removeClass('red');
            if (allRequiredFieldsAreFilled) {
                let outputArr = [];
                outputArr.push('/tag');
                //target
                outputArr.push(fields.target.value);
                //action
                outputArr.push(fields.action.value);
                //tag name
                fields.action.value != 'list' && outputArr.push(fields.tag.value);
                
                //concatenate array
                output.val(outputArr.join(' '));
            }
            else {
                output.addClass('red');
                output.val('Not all required fields are filled!');
            }
        }
    },
    team: { planned: true },
    teleport: { planned: true },
    tellraw: { planned: true },
    title: { planned: true },
};