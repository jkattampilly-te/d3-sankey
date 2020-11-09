// import {linkHorizontal} from "d3-shape";
import * as d3 from 'd3';

// function horizontalSource(d) {
//   return [d.source.x1, d.y0];
// }
//
// function horizontalTarget(d) {
//   return [d.target.x0, d.y1];
// }

function customSankeyLinkPath(link) {
  // this is a drop in replacement for d3.sankeyLinkHorizontal()
  // well, without the accessors/options
  const offset = 0;
  let sx = link.source.x1;
  let tx = link.target.x0;
  let sy0 = link.sy0;
  let sy1 = link.sy1;
  let ty0 = link.ty0;
  let ty1 = link.ty1;

  let halfx = (tx - sx)/2;

  let path = d3.path();
  path.moveTo(sx, sy0);

  let cpx1 = sx + halfx;
  let cpy1 = sy0 + offset;
  let cpx2 = sx + halfx;
  let cpy2 = ty0 - offset;
  path.bezierCurveTo(cpx1, cpy1, cpx2, cpy2, tx, ty0);
  path.lineTo(tx, ty1);

  cpx1 = sx + halfx;
  cpy1 = ty1 - offset;
  cpx2 = sx + halfx;
  cpy2 = sy1 + offset;
  path.bezierCurveTo(cpx1, cpy1, cpx2, cpy2, sx, sy1);
  path.lineTo(sx, sy0);
  return path.toString();
}

export default function() {
  // return linkHorizontal()
  //     .source(horizontalSource)
  //     .target(horizontalTarget);
  return customSankeyLinkPath;
}
