const Mock = require('mockjs')

const Random = Mock.Random

const getQuestionList = (option) => {
  const { len = 10, isStar = false, isDeleted = false } = option
  const list = []
  for (let i = 0; i < len; i++) {
    list.push({
      _id: Random.id(),
      title: Random.ctitle(),
      isPublished: Random.boolean(),
      isStar,
      answerCount: Random.integer(0, 100),
      createdAt: Random.datetime(),
      isDeleted
    })
  }
  return list
}

module.exports = getQuestionList
