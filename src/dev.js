/** 
 * 该类用于开发调试, 打包时会忽略此文件.
 */
import { isEmpty } from './index';

document.querySelector('#app').innerHTML = `<h1>${isEmpty(null)}</h2>`;