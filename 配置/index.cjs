/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx6cd8341fcc8304f2',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: 'c14c61848e1c902162dea1c3e5331585',

  PROVINCE: '山东',
  CITY: '泰安',

  USERS: [
    {
      // 想要发送的人的名字
      name: '董小懒猪',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'ouAe55lQi9xvCrtheAJE6fDmHMPM',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'ouAe55lQi9xvCrtheAJE6fDmHMPM',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '10-17',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '宝贝', year: '2002', date: '08-05',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '宝贝', year: '2002', date: '09-28',
        },
        {
          type: '节日', name: '恋爱纪念日', year: '2021', date: '10-17',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2021-10-17' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'ouAe55lQi9xvCrtheAJE6fDmHMPM',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'ouAe55lQi9xvCrtheAJE6fDmHMPM',
    }
  ],

}

module.exports = USER_CONFIG

