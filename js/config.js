// const domain='http://www.smartloser.cn';//http://47.108.152.55:7001
const domain='';
const base_url=domain+'/api';
const _userId = '9628064f-d184-4975-a1a3-e7418b11f02a';

const latest_articles_simple_url = base_url + '/article/findByPageWithAuth';// 文章列表
const article_category_url = base_url + '/category/findAllWithAuth';// 文章分类
const article_detail_url = base_url + '/article/findOneWithAuth';// 文章详情
const article_comment_list_url = base_url + '/comment/findByPage';// 文章评论列表
const article_comment_create_url = base_url + '/comment/create';// 评论


