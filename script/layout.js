export const header = {
  el: '#header',
  data() {
    return {
      headerText: 'header 영역이다',
      gnb: [
        {
          name: 'ABOUT',
          openMobile: false,
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
          openMobile: false,
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
          openMobile: false,
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
          openMobile: false,
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
          openMobile: false,
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
      isOpenMenu: false,
    }
  },
  methods: {
    openGnb(bool) {
      console.log(bool)
      this.isOpenGnb = bool;
    },
    toggleMenu() {
      this.isOpenMenu = !this.isOpenMenu
    },
    openDepth2(idx) {
      this.gnb[idx].openMobile = !this.gnb[idx].openMobile
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
          href: 'https://www.instagram.com/onmusic_gb/'
        },
        {
          name: '( FACEBOOK )',
          href: 'https://www.facebook.com/OnMusicAcademyGB/'
        },
        {
          name: '( YOUTUBE )',
          href: 'https://www.youtube.com/channel/UCNQdigxsnqPrE2VNz6ja7Vw'
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
      document.documentElement.scrollTo({ top: 0, behavior: 'smooth'})
    },
    openExpand() {
      this.isExpand = !this.isExpand;
    }
  }
}