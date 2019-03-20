// Code your solution in this file!

const hq=42;

function distanceFromHqInBlocks(blocks){
return Math.abs(blocks-hq);
}

function distanceFromHqInFeet(feet){
  return distanceFromHqInBlocks(feet)*264
}

