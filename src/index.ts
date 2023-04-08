import * as PIXI from 'pixi.js';

const canvasEl = document.getElementById('canvas') as HTMLCanvasElement;
const app = new PIXI.Application({ background: '#1099bb', view: canvasEl });
