const BASE_URL = 'http://localhost:3000'

const URLS = {
  LOGIN_ACTION: '/admin/login_action',
  LOGIN_CHECK: '/admin/login_check',
  LOGOUT_ACTION: '/admin/logout_action',

  GET_COURSE_DATA: '/get_courses',
  GET_COURSE_FIELD_DATA: '/get_course_fields',
  CHANGE_COURSE_FIELD: '/change_course_field',
  CHANGE_COURSE_STATUS: '/change_course_status', //

  GET_RECOM_COURSE_DATA: '/get_recom_courses',
  CHANGE_RECOM_COURSE_STATUS: '/change_recom_course_status', // 

  GET_SLIDER_DATA: '/get_sliders',

  GET_COLLECTION_DATA: '/get_collections',

  GET_TEACHER_DATA: '/get_teachers',
  SELECT_STAR_TEACHER: '/select_star_teacher',

  GET_STUDENT_DATA: '/get_students',

  CRAWL_ACTION: '/crawler',

  CHANGE_STATUS: "/change_status"
}

/**
 * 
 * @param {URLS}  
 * @return {URLS}
 */
function createAPI(urls) {
  for (const key in urls) {
    if (Object.hasOwnProperty.call(urls, key)) {
      urls[key] = BASE_URL + urls[key]
    }
  }

  return urls
}

export const API = createAPI(URLS)


export const NAV = [
  {
    field: 'course',
    title: '课程管理', // 课程上下架，课程分类选择
  },
  {
    field: 'recom_course',
    title: '推荐课程', // 推荐课程的上下架
  },
  {
    field: 'slider',
    title: '轮播图管理', // 轮播图数据上下线
  },
  {
    field: 'collection',
    title: '课程集合管理', // 课程集合的上下线
  },
  {
    field: 'teacher',
    title: '老师管理', // 老师的上下线  明星老师的设置
  },
  {
    field: 'student',
    title: '学生管理', // 学生的上下线 明星学员的指定
  },
  {
    field: 'crawler',
    title: '数据爬取', // 爬取各种数据
  },
]
