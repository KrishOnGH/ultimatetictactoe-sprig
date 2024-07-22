let lastmovex = 6
let lastmovey = 5
let xgrid
let ygrid

if (lastmovex > 0 && lastmovex < 4) {xgrid = 1}
else if (lastmovex > 3 && lastmovex < 7) {xgrid = 2}
else if (lastmovex > 6 && lastmovex < 9) {xgrid = 3}
if (lastmovey > 0 && lastmovey < 4) {ygrid = 1}
else if (lastmovey > 3 && lastmovey < 7) {ygrid = 2}
else if (lastmovey > 6 && lastmovey < 9) {ygrid = 3}

console.log(xgrid)
console.log(ygrid)

const lastmovesquarex = lastmovex - (xgrid-1)*3
const lastmovesquarey = lastmovey - (ygrid-1)*3

console.log(lastmovesquarex)
console.log(lastmovesquarey)

const gridpos = (lastmovesquarey-1)*3+lastmovesquarex
console.log(gridpos)