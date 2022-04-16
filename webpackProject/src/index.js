/**
 * webpack入口文件
 * */
import $ from 'jquery';
import data from '@/data.json';
import '@/index';
import icon from '@/img/2.png';

// eslint-disable-next-line
console.log('webpack入口文件');
// eslint-disable-next-line
console.log(data);

const my = () => {
    // eslint-disable-next-line
    alert('欢迎进入我的');
};
// eslint-disable-next-line
window.my = my;

const xdclass = new Promise((resolve) => {
    resolve();
    // eslint-disable-next-line
    console.log('promise执行了!!!!');
});
// eslint-disable-next-line
console.log(xdclass);
// eslint-disable-next-line
const img = new Image()
img.src = icon;
// eslint-disable-next-line
document.body.append(img)

// eslint-disable-next-line
console.log('配置的接口：', API_BASE_URL);

document.getElementById('button').onclick = () => {
    import ( /*webpackChunkName:'test '*/ './test').then(({ test }) => {
        test()
    })
}

document.getElementById('button1').onclick = () => {
    import ( /*webpackChunkName:'test1 ', webpackPrefetch: true*/ './test1').then(({ test1 }) => {
        test1()
    })
}
console.log($, '$')