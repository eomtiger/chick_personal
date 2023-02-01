import { Entity, Faces, Marker, Scene } from './components';
import * as Examples from './examples';

const MindAR = {
  Entity,
  Faces,
  Marker,
  Scene,
};

export { MindAR, Entity, Faces, Marker, Scene, Examples };

export { default as useCompiler } from './mindAR/utils/useCompiler';

export { default as useARManager } from './mindAR/utils/useARManager';

export type { CompilerState } from './mindAR/utils/interfaces';

export * from './mindAR/utils/constant';

export default MindAR;
