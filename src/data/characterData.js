const characterData = [
  {
    id: 'sh-01',
    name: '신한카드 플리 체크(산리오캐릭터즈)',
    bank: '신한카드',
    cost: '연회비 없음',
    brand: ['국내전용', 'MASTER'],
    point: [
      { 결제: 'Weekly 할인 쿠폰 월 2회 할인 쿠폰 제공' },
      { 결제: 'Daily 국내 이용금액 최대 0.3% 할인' },
      { 결제: 'Monthly 단골 적립 월 최대 3천P 적립' },
    ],
    benefit: [
      { 해외: '해외 이용금액 0.2% 할인' },
      { 금융: '국내 이용금액 최대 0.3% 할인' },
      { 포인트: 'My Pick 가맹점 월 3, 6, 9번째 이용 건에 대해 마이신한포인트 1,000포인트 적립' },
      { 기타: '매월 2회 국내 이용 할인 쿠폰 제공(1천원 쿠폰 2회)' },
    ],
    image: '/image/card/sh_1.png',
  },
  {
    id: 'sh-02',
    name: '신한카드 On 체크(잔망루피)',
    bank: '신한카드',
    cost: '연회비 없음',
    brand: ['국내전용', 'VISA'],
    point: [
      { 결제: '간편결제 최대 2% 적립' },
      { 생활: '생활편의 최대 2% 적립' },
      { 여행: '해외 이용금액 1.3% 적립' },
    ],
    benefit: [
      { 커피: '커피전문점 최대 2% 할인' },
      { 이동통신: '통신요금 최대 2% 할인' },
      { 편의점: '편의점 / 생활잡화 최대 2% 할인' },
      { 구독: '디지털 콘텐츠 최대 2% 할인' },
      { 해외: '해외 이용금액에 대해 1.3% 적립' },
      { 포인트: '간편결제(Pay) 이용 시 최대 2% 적립' },
    ],
    image: '/image/card/sh_2.png',
  },
  {
    id: 'sh-03',
    name: '신한카드 Way 체크(최고심)',
    bank: '신한카드',
    cost: '연회비 없음',
    brand: ['국내전용', 'VISA'],
    point: [
      { 교통: '대중교통 최대 5% 적립' },
      { 생활: '생활편의 최대 2% 적립' },
      { 여행: '해외 이용금액 1.3% 적립' },
    ],
    benefit: [
      { 커피: '커피전문점 2% 적립' },
      { 이동통신: '통신요금 2% 적립' },
      { 편의점: '편의점 / 생활잡화 쵀다 2% 적립' },
      { 구독: '디지털 콘텐츠 최대 2% 적립' },
      { 대중교통: '버스 / 지하철 이용시 최대 5% 적립' },
      { 해외: '해외 이용금액에 대해 1.3% 적립' },
      { 포인트: '대중교통 + 생활편의 영역 이용시 포인트 총 합 월 최대 1만 6천 포인트까지 적립' },
    ],
    image: '/image/card/sh_3.png',
  },
  {
    id: 'sh-04',
    name: '신한카드 Pick E 체크',
    bank: '신한카드',
    cost: '연회비 없음',
    brand: ['국내전용', 'MASTER'],
    point: [
      { 생활: '편의점/커피 10% 적립' },
      { 생활: '놀이 영역 10% 적립' },
      { 생활: 'One Pick 맛집 3천 포인트 적립' },
    ],
    benefit: [
      { 커피: '커피 업종 이용 시 마이신한포인트 10% 적립' },
      { 외식: '월 최다 이용 요식 가맹점 마이신한포인트 최대 3천 포인트 적립' },
      { 편의점: '4대 편의점 이용 시 마이신한포인트 10% 적립' },
      { 해외: '해외 이용금액에 대해 마이신한포인트 1% 적립' },
      { 포인트: '생황 영역 적립 서비스 이용을 통해 마이신한포인트 적립' },
      { 기타: '놀이영역 이용 시 마이신한포인트 10% 적립' },
    ],
    image: '/image/card/sh_4.png',
  },
  {
    id: 'ibk-04',
    name: 'IBK 무직타이거 카드(체크) ',
    bank: 'IBK 카드',
    cost: '연회비 없음',
    brand: ['국내전용', 'Union Pay'],
    point: [
      { 교통: '대중교통 이용건당 100원 할인' },
      { 생활: '편의점 5% 할인' },
      { 생활: '영화 4천원 할인' },
    ],
    benefit: [
      { 커피: '주요 커피전문점 10% 할인' },
      { 편의점: 'GS25, CU, 세븐일레븐 5% 할인' },
      { 뷰티: '올리브영 5% 할인' },
      { 영화: 'CGV, 롯데시네마, 메가박스 4천원 할인' },
      { 놀이공원: '놀이공원 현장할인 or 청구할인(월 1회, 연 2회 제공)' },
      { 대중교통: '버스, 지하철 이용건당 100원 할인' },
      { 쇼핑: '쿠팡, 티몬, 위메프 10% 할인' },
      { 금융: '금융우대서비스(결제계좌를 IBK 기업은행 입출식 통장으로 이용 시)' },
    ],
    image: '/image/card/ibk_4.png',
  },
  {
    id: 'kb-03',
    name: '펭수 노리 체크카드(펭카)',
    bank: 'KB국민카드',
    cost: '연회비 없음',
    brand: ['국내전용', 'VISA'],
    point: [
      { 교통: '대중교통 10% 청구할인' },
      { 생활: '이동통신요금 2,500원 환급할인' },
      { 생활: 'CGV 35% 환급할인' },
    ],
    benefit: [
      { 편의점: 'GS25 5% 환급할인' },
      { 이동통신: '이동통신요금 2,500원 환급할인' },
      { 영화: 'CGV 35% 환급할인' },
      { 놀이공원: '에버랜드 / 롯데월드 50% 환급할인' },
      { 대중교통: '버스 / 지하철 10% 청구할인' },
      { 서점: '교보문고 5% 환습할인' },
      { 금융: '금융수수료 면제 서비스' },
    ],
    image: '/image/card/kb_3.png',
  },
  {
    id: 'nh-02',
    name: '라이언 치즈 체크카드',
    bank: 'NH 농협카드',
    cost: '연회비 없음',
    brand: ['국내전용', 'Union Pay'],
    point: [{ 교통: '교통 1.5% 적립' }, { 쇼핑: '쇼핑 0.5~1% 적립' }, { 쇼핑: '뷰티 1.5% 적립' }],
    benefit: [
      { 구독: '유튜브, 넷플릭스, 유료 어플리케이션 결제 시 5% NH포인트 적립' },
      { 커피: '대상 커피숍 월~금 0.5% NH포인트 적립 / 토, 일 1% NH포인트 적립' },
      { 편의점: 'CU, GS25 월~금 0.5% NH포인트 적립 / 토, 일 1% NH포인트 적립' },
      { 배달: '배달앱 월~금 0.5% NH포인트 적립 / 토, 일 1% NH포인트 적립' },
      { 영화: 'CGV, 롯데시네마, 메가박스 월~금 0.5% NH포인트 적립 / 토, 일 1% NH포인트 적립' },
      { 쇼핑: '대상 쇼핑몰 월~금 0.5% NH포인트 적립 / 토, 일 1% NH포인트 적립' },
      { 포인트: '대상업종에 대해 월~금 0.5% NH포인트 적립 / 토, 일 1% NH포인트 적립' },
    ],
    image: '/image/card/nh_2.png',
  },
]
export default characterData
