
const circularShapes = require('./circular-shapes');
const r = 10;
const h = 20;
console.log(`Circumference = ${circularShapes.getCircumference(r)}`);
console.log(`Circle Area = ${circularShapes.getCircleArea(r)}`);
console.log(`Sphere Volume = ${circularShapes.getSphereVolume(r)}`);
console.log(`Cylinder Surface Area = ${circularShapes.getCylinderSurfaceArea(r, h)}`)