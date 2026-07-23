export function getAngle(wrist, indexTip) {
    const dx = indexTip.x - wrist.x;
    const dy = indexTip.y - wrist.y;
    const angle = Math.atan2(dy, dx);
    let angleDegrees = angle * 180/Math.PI;
    if (angleDegrees < 0) 
        angleDegrees += 360;
    return angleDegrees;
}