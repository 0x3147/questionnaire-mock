const Mock = require('mockjs')
const getQuestionList = require('./data/getQuestionList')

const Random = Mock.Random

module.exports = [
  {
    url: '/api/question/:id',
    method: 'get',
    response() {
      return {
        errno: 0,
        data: {
          id: Random.id(),
          title: Random.ctitle()
        }
      }
    }
  },
  {
    // 创建问卷
    url: '/api/question',
    method: 'post',
    response() {
      return {
        errno: 0,
        data: {
          id: Random.id()
        }
      }
    }
  },
  {
    url: '/api/question',
    method: 'get',
    response(ctx) {
      const { url = '', query = {} } = ctx
      const isDeleted = url.indexOf('isDeleted=true') >= 0
      const isStar = url.indexOf('isStar=true') >= 0
      const pageSize = Number(query.pageSize) || 10
      return {
        errno: 0,
        data: {
          list: getQuestionList({ pageSize, isStar, isDeleted }),
          total: 100
        }
      }
    }
  },
  {
    // 标记
    url: '/api/question/starOrRemove/:id',
    method: 'post',
    response() {
      return {
        errno: 0
      }
    }
  },
  {
    // 复制
    url: '/api/question/duplicate/:id',
    method: 'post',
    response() {
      return {
        errno: 0,
        data: {
          id: Random.id()
        }
      }
    }
  },
  {
    url: '/api/question/delete',
    method: 'post',
    response() {
      return {
        errno: 0
      }
    }
  }
]
