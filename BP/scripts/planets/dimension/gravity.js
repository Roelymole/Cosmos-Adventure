import { world, system, DimensionTypes } from "@minecraft/server";
export { Gravity }

/**
 * Class representing gravity control for an entity.
 */
class Gravity {
    constructor(entity) {
        this.#entity = entity; // Store the entity reference
    }

    #entity;

    // Get the entity associated with this Gravity instance
    get entity() {
        return this.#entity;
    }

    // Get the current gravity value for the entity
    get value() {
        return this.entity.tempGravityValue || this.entity.getDynamicProperty('sert:gravity') || 9.8;
    }

    // Set a permanent gravity value for the entity
    set(value) {
        if (!this.canSet(value)) {
            throw new Error('Failed to set gravity value(' + value + ') for ' + this.entity.typeId + ' (use Gravity.canSet)');
        }
        this.#entity.setDynamicProperty('sert:gravity', value);
    }

    // Set a temporary gravity value for the entity
    setTemp(value) {
        if (!this.canSet(value)) {
            throw new Error('Failed to set gravity value(' + value + ') for ' + this.entity.typeId + ' (use Gravity.canSet)');
        }
        this.entity.tempGravityValue = value;
    }

    // Check if a gravity value can be set for the entity
    canSet(value) {
        return typeof value === 'number' && value > 0 && !isNaN(value) && value !== Infinity;
    }

    // Set the gravity line for the entity
    setGravityLine(line = [1]) {
        this.entity.gravityLine = (this.entity.gravityLine || []);
        this.entity.gravityLine = line.concat(this.entity.gravityLine.slice(line.length - 1));
    }

    // Calculate the gravity vector for the entity
    calculateGravityVector() {
        let entity = this.entity;
        let vector = { x: 0, z: 0, y: -1 }; // Initialize gravity vector
        let power = { x: 1, z: 1, y: this.value / 2 }; // Initialize power vector

        // Handle jumping and gravity line modifications
        if (entity.isJumping && playerJumpMap.get(entity)) {
            playerJumpMap.set(entity, false);
            let mod = (((entity.getEffect('jump_boost')?.amplifier + 1) || 0) * 0.2 + 1) / Math.max((Math.min(1, this.value)), 0.005);
            let len = Math.floor(18 + (9.8 - this.value));
            this.setGravityLine(new Array(len).fill(1).map((one, i) => (len - i) / 6 * -(Math.max(0.1, (9.8 - this.value) / 10 + 1)) * 5 * mod));
        } else if (entity.isOnGround) {
            playerJumpMap.set(entity, true); // Reset jump state when on the ground
        }

        // Update gravity power based on gravity line
        if (entity.gravityLine !== undefined && entity.gravityLine[0] !== undefined) {
            power.y += entity.gravityLine[0];
            entity.gravityLine.splice(0, 1); // Remove the first element from the gravity line
        }

        // Calculate movement direction for players
        if (entity.typeId === 'minecraft:player') {
            let movement = entity.inputInfo.getMovementVector();
            let direction = sumObjects(sumObjects({}, entity.getViewDirection(), movement.y), getDirectionFromRotation(sumObjects(entity.getRotation(), { y: 90 })), -movement.x);
            vector.x = direction.x;
            vector.z = direction.z;
        }

        // Return the final gravity vector
        return {
            x: vector.x,
            z: vector.z,
            y: power.y * vector.y,
            hzPower: ((((entity.getEffect('speed')?.amplifier + 1) || 0) - ((entity.getEffect('slowness')?.amplifier + 1) || 0)) * 0.2 + 1) * (0.18 + (entity.isSprinting ? 0.2 : 0) - (entity.isSneaking ? 0.1 : 0))
        };
    }

    // Calculate the jump height based on current gravity
    calculateJumpHeight() {
        const defaultGravity = 9.8;
        const defaultJumpHeight = 1.5; // 1.5 blocks for default gravity

        // Calculate and return the jump height based on the current gravity value
        return (defaultJumpHeight * defaultGravity) / this.value;
    }
}

// Maps to track jump states and properties of entities
let playerJumpMap = new WeakMap();
let oldYMap = new WeakMap();
let fallVelocity = new WeakMap();

// Runs gravity calculations at regular intervals for all players in the world
system.runInterval(() => {
    for (let dimension of DimensionTypes.getAll().map(type => world.getDimension(type.typeId))) {
        for (let entity of dimension.getEntities({ type: 'player' })) {
            gravityFuncMain(entity);
        }
    }
});

// Main function to handle gravity for each entity
function gravityFuncMain(entity) {
    let gravity = new Gravity(entity);
    if (gravity.value.toFixed(4) === '9.8000') return; // Early exit if gravity is default

    let vector = gravity.calculateGravityVector(); // Calculate the gravity vector
    let dist = fallVelocity.get(entity) || 0; // Get current fall velocity

    // Apply gravity effects if the entity is not grounded
    if (!entity.isOnGround && !entity.isClimbing && !entity.isFlying && !entity.isGliding) {
        applyGravityEffects(entity, vector, dist, gravity.value);
    } else if (entity.isJumping) {
        applyJumpingEffects(entity, vector, gravity.value); // Handle jumping effects
    } else {
        resetFallVelocity(entity); // Reset fall velocity when grounded
    }
    
    oldYMap.set(entity, entity.location.y); // Update old Y position
}

// Function to apply gravity effects to the entity
function applyGravityEffects(entity, vector, dist, gravityValue) {
    entity.applyKnockback(vector.x, vector.z, vector.hzPower, (vector.y * 2 + Math.min(0, dist)) / 40);
    fallVelocity.set(entity, dist - gravityValue / 50); // Update fall velocity
    entity.addEffect('slow_falling', 2, { amplifier: 1, showParticles: false }); // Apply slow falling effect
}

// Function to apply dynamic jumping effects based on gravity
function applyJumpingEffects(entity, vector, gravity) {
    const jumpPower = Math.max(0.1, gravity.value / 10); // Minimum jump power to ensure smoothness
    const steps = Math.max(5, Math.ceil(15 - gravity.value * 1.5)); // More steps for lower gravity

    // Apply multiple knockbacks for a smooth jump
    for (let i = 0; i < steps; i++) {
        let power = jumpPower * (1 - (i / steps)); // Decreasing power for smoother effect
        entity.applyKnockback(vector.x, vector.z, vector.hzPower, power);
    }
}

// Function to reset the fall velocity for the entity when on the ground
function resetFallVelocity(entity) {
    fallVelocity.set(entity, 0);
}

// Utility function to sum vector components
function sumObjects(objects, vector = undefined, multi = 1) {
    return {
        x: (objects.x || 0) + (vector.x || 0) * multi,
        y: (objects.y || 0) + (vector.y || 0) * multi,
        z: (objects.z || 0) + (vector.z || 0) * multi
    };
}

// Function to get movement direction from rotation
function getDirectionFromRotation(rotation) {
    let angle = {
        x: (rotation.y + 90) / 57.2958, // Convert degrees to radians
        y: (rotation.x + 90) / 57.2958
    };
    let point = {
        x: Math.cos(angle.x), // Calculate x component
        y: Math.cos(angle.y), // Calculate y component
        z: Math.sin(angle.x)  // Calculate z component
    };
    return point; // Return direction vector
}