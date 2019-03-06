'use strict';

function imageLoader(images, callback, timeout){
  /**
   * 分别是:
   * 加载完成图片的计数器
   * 全部加载成功的状态
   * 超时timer的id
   * 是否超时的标志位
   */
  let count = 0;
  let success = true;
  let timeoutId = 0;
  let isTimeout = false;

  for(let key in images){
    // 过滤掉prototype的属性
    if(!images.hasOwnProperty(key)) {
      continue;
    }

    // 每个图片元素的期望格式 {src: ''}

    let item = images[key];
    if(typeof item === 'string'){
      item = images[key] = {
        src: item
      };
    }
    // 格式不满足 则丢弃, 开始下一个遍历
    if(!item || !item.src){
      continue;
    }

  //


  }
}


module.exports = imageLoader;
