export const header = {
  el: '#header',
  data() {
    return {
      headerText: 'header 영역이다',
      gnb: [
        {
          name: 'ABOUT',
          depth2: [
            {
              name: '온뮤직 소개',
              href: 'javascript:void(0)',
            },
            {
              name: '오시는 길',
              href: 'javascript:void(0)',
            },
            {
              name: '시설 안내',
              href: 'javascript:void(0)',
            },
          ]
        },
        {
          name: 'TRAINER',
          depth2: [
            {
              name: '보컬',
              href: 'javascript:void(0)'
            },
            {
              name: '댄스',
              href: 'javascript:void(0)'
            },
            {
              name: '미디 / 작곡',
              href: 'javascript:void(0)'
            },
            {
              name: '랩',
              href: 'javascript:void(0)'
            },
            {
              name: '피아노 / 기타',
              href: 'javascript:void(0)'
            },
          ]
        },
        {
          name: 'CLASS',
          depth2: [
            {
              name: '입시',
              href: 'javascript:void(0)'
            },
            {
              name: '오디션',
              href: 'javascript:void(0)'
            },
            {
              name: '키즈',
              href: 'javascript:void(0)'
            },
            {
              name: '취미',
              href: 'javascript:void(0)'
            },
          ]
        },
        {
          name: 'NOTICE',
          depth2: [
            {
              name: '공지사항',
              href: 'javascript:void(0)'
            },
            {
              name: '입시 합격',
              href: 'javascript:void(0)'
            },
            {
              name: '오디션 합격',
              href: 'javascript:void(0)'
            },
          ]
        },
        {
          name: 'CONTACT',
          depth2: [
            {
              name: '컨택트',
              href: 'javascript:void(0)'
            },
            {
              name: '상담신청',
              href: 'javascript:void(0)'
            },
            {
              name: '협력업체',
              href: 'javascript:void(0)'
            },
          ]
        },
      ],
      isOpenGnb: false,
    }
  },
  methods: {
    openGnb(bool) {
      console.log(bool)
      this.isOpenGnb = bool;
    }
  }
}

export const footer = {
  el: '#footer',
  data() {
    return {
      sns: [
        {
          name: '( INSTARGRAM )',
          href: 'javascript:void(0)'
        },
        {
          name: '( FACEBOOK )',
          href: 'javascript:void(0)'
        },
        {
          name: '( YOUTUBE )',
          href: 'javascript:void(0)'
        },
      ]
    }
  }
}

export const floatingBanner = {
  el: '#floating-banner',
  data() {
    return {
      isExpand: false,
    }
  },
  methods: {
    scrollTop() {
      window.scrollTo({ top: 0, behavior: 'smooth'})
    },
    openExpand() {
      this.isExpand = !this.isExpand;
    }
  }
}