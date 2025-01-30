import {  Player, world  } from "@minecraft/server";
import { Vec3 } from "../../api/libraries/Vector.js"


const the_end = world.getDimension('the_end');
/**
     * Class containing methods relating to the Moon
     */
export class Moon {
    /**
     * Range of blocks in the end that the Moon takes up
     */
    static range = { start: { x: 50000, z: 50000 }, end: { x: 100000, z: 100000 } };

    /**
     * Center block of the Moon
     */
    static origin = { x: (this.range.start.x + this.range.end.x) / 2, z: (this.range.start.z + this.range.end.z) / 2 };

    /**
     * Checks whether a given location is in the Moon
     * @param {import("@minecraft/server").Vector3} location location to check
     * @returns {boolean} Whether or not the location is in the Moon
     */
    static isOnLunar(location) {
        return (
            this.range.start.x <= location.x && location.x <= this.range.end.x &&
            this.range.start.z <= location.z && location.z <= this.range.end.z
        );
    }

    /**
     * Gets all entities in the Moon that match the EntityQueryOptions
     * @param {EntityQueryOptions} entityQueryOptions Query to use for search
     * @returns {Entity[]} All entities matching the query
     */
    static getEntities(entityQueryOptions) {
        return the_end.getEntities(entityQueryOptions).filter((entity) => this.isOnLunar(entity.location));
    }

    /**
     * Gets all players in the Moon that match the EntityQueryOptions
     * @param {EntityQueryOptions} entityQueryOptions Query to use for search
     * @returns {Player[]} All players matching the query
     */
    static getPlayers(entityQueryOptions) {
        return the_end.getPlayers(entityQueryOptions).filter((entity) => this.isOnLunar(entity.location));
    }

    /**
     * Get the player location on the Moon
     * @param {Player} player - The player object to get the location from
     * @returns {Vec3} The player position on the Moon
     */
    static getPosition(player) {
        return Vec3.add(player.location, Vec3(-750000, 0, -750000));
    }

    /**
     * Gets the gravity value for a player based on their location.
     * @param {import("@minecraft/server").Vector3} location - The location of the player to check.
     * @returns {number} The gravity value for the specified location, or undefined if not on the Moon.
     */
    static getGravity(location) {
        if (this.isOnLunar(location)) {
            return 1.625; // Gravity value on the moon
        }
        return undefined; // Return undefined if not on the Moon
    }
}

export const MOON = the_end
