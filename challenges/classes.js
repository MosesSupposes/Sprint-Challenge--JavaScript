// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMaker {
    constructor(dimensions) {
        this.height = dimensions.height
        this.width = dimensions.width
        this.length = dimensions.length
    }

    volume() {
        return this.height * this.width * this.length
    }

    surfaceArea() {
        const { length, width, height } = this
        return 2 * (length * width + length * height + width * height)
    }
}

const cuboid = new CuboidMaker({
    length: 4,
    width: 5,
    height: 5
})

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMaker {
    constructor(dimensions) {
        super(dimensions)
    }

    area() {
        return Math.pow(this.width, 2)
    }

    surfaceArea() {
        return 6 * this.area()
    }
}

const cube = new CubeMaker({
    height: 5, 
    width: 5, 
    length: 5
})

console.log(cube.area())
console.log(cube.volume())
console.log(cube.surfaceArea())
