
/**
 * 帧动画的类
 * @constructor
 */
// 定义常量状态
const STATE_INITIAL = 0;
const STATE_START = 1;
const STATE_STOP = 2;

function Animation(){
  this.taskQueue = [];
  this.index = 0;
  this.state = STATE_INITIAL;
}

/**
 * 添加一个同步任务, 预加载图片任务
 * @param imgList
 */
Animation.prototype.loadImage = function(imgList){

};

/**
 * 添加一个异步定时任务, 通过定时改变图片位置, 实现帧动画
 * @param ele dom对象
 * @param positions 背景位置的数组
 * @param imgUrl 背景图片的路径
 */
Animation.prototype.changePosition = function(ele, positions, imgUrl){

};

/**
 * 添加一个异步定时任务, 通过改变图片的src, 实现帧动画
 * @param ele
 * @param imgList
 */
Animation.prototype.changeSrc = function(ele, imgList){

};

/**
 * 高级用法, 添加一个异步定时执行的任务
 * 该任务自定义动画每帧执行的函数
 * @param taskFn 自定义每帧执行的任务函数
 */
Animation.prototype.enterFrame = function(taskFn){

};

/**
 * 添加一个同步任务,可以在上一个任务执行完毕后执行回调函数
 * @param callback 任务函数
 */
Animation.prototype.then = function(callback){

};

/**
 * 开始执行任务, 异步任务执行的间隔
 * @param interval
 */
Animation.prototype.start = function(interval){

};

/**
 * 添加一个同步任务, 该任务就是回退到上一个任务中,
 * 实现重复上一个任务的效果, 可以定于重复的次数
 * @param times
 */
Animation.prototype.repeat = function(times){

};


/**
 * 更友好的repeat接口, 无限循环上一个任务
 */
Animation.prototype.repeatForever = function(){

};

/**
 * 设置当前任务执行结束到下一个任务开始的间隔时间
 * @param time
 */
Animation.prototype.wait = function(time){

};

/**
 * 暂停当前异步定时任务
 */
Animation.prototype.pause = function(){

};

/**
 * 重新执行上一次暂停的异步任务
 */
Animation.prototype.restart = function(){

};

/**
 * 释放资源
 */
Animation.prototype.dispose = function(){

};
