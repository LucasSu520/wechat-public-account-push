/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx683cc4deaab30164',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '48faeed1e2865415167a8d6ffe3f74b0',

  PROVINCE: '四川',
  CITY: '南充',

  USERS: [
    {
      // 想要发送的人的名字
      name: '全世界最可爱的小王',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oJ7et6GwmnNE1o_vxvAzzUBbX3gI',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'm2nqd7fYZVg_KRGqL1gX0lq8Bwcs_usUxeFVgQLvCOw',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '12-23',
      horoscopeDateType: "本周",
      openUrl:"https://shuangxunian.github.io/",
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '小王', year: '2002', date: '12-23',
        },
        {
          type: '节日', name: '恋爱纪念日', year: '2024', date: '04-17',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2024-04-17' }
      ],
    },
    {
      // 想要发送的人的名字
      name: 'Lucas',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oJ7et6EmYNCfW62ts4ul8-7yWeSA',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'm2nqd7fYZVg_KRGqL1gX0lq8Bwcs_usUxeFVgQLvCOw',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '12-23',
      horoscopeDateType: "本周",
      openUrl:"https://shuangxunian.github.io/",
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '小王', year: '2002', date: '12-23',
        },
        {
          type: '节日', name: '恋爱纪念日', year: '2024', date: '04-17',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2024-04-17' }
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: '',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: '',
    }
  ],

}

module.exports = USER_CONFIG


// const USER_CONFIG ={
//   APP_ID: 'wx683cc4deaab30164',
//   APP_SECRET: '48faeed1e2865415167a8d6ffe3f74b0',
//   IS_SHOW_COLOR: true,
//   CALLBACK_TEMPLATE_ID: '',
//   CALLBACK_USERS: [{"name":"自己","id":""}],
//   USERS: [
//     {
//       name: '全世界最可爱的小王', 
//       id: 'oJ7et6GwmnNE1o_vxvAzzUBbX3gI',
//       useTemplateId: 'ozgQkzFJ6FAx_0YWxsutJMZh9bRm0citiKLq8RI48Sk',
//       province: '四川省',
//       city: '南充市',
//       horoscopeDate: "12-23",
//       horoscopeDateType: "本周",
//       openUrl:"https://shuangxunian.github.io/",
//       festivals:[
//         {
//           type:"生日", name:"小王生日", date: "12-23", year: "2002"
//         },
//         {
//           type: '节日', name: '在一起日子', year: '2024', date: '04-17',
//         }
//       ],customizedDateList:[]},
//     {
//       name: "Lucas",
//       id: "oJ7et6EmYNCfW62ts4ul8-7yWeSA",
//       useTemplateId: "ozgQkzFJ6FAx_0YWxsutJMZh9bRm0citiKLq8RI48Sk",
//       province: "上海市",
//       city: "上海市",
//       horoscopeDate:"07-26",
//       horoscopeDateType:"本周",
//       "openUrl":"https://shuangxunian.github.io/",
//       "festivals":[{"type":"*生日","name":"Lucas生日","date":"06-14","year":"1999"}],"customizedDateList":[]}],
//   "SWITCH":{"weather":true,"holidaytts":true,"CIBA":true,"oneTalk":true,"earthyLoveWords":true,"momentCopyrighting":false,"poisonChickenSoup":false,"poetry":false,"horoscope":true,"birthdayMessage":true}}

