const cardData = [
  {
    id: 'kb-01',
    name: '노리2 체크카드(KB Pay)',
    bank: 'KB국민카드',
    cost: '연회비 없음',
    brand: ['국내전용', 'master', 'visa'],
    point: [
      { 생활: '커피, 모바일, 문화 10% 할인' },
      { 쇼핑: '뷰티, 편의점 5% 할인' },
      { 여행: '해외이용 2%, 공항라운지' },
    ],
    benefit: [
      { 커피: '스타벅스, 커피빈 10% 할인(월 할인한도 : 3천원)' },
      { 모바일: '구글플레이스토어, 앱스토어 10% 할인 (월 할인한도 : 5천원)' },
      { 문화: '인터파크 티켓 10% 할인 (월 할인한도 : 7천원)' },
      { 뷰티: '올리브영, 미용실 업종 5% 할인 (월 할인한도 : 2천원)' },
      { 편의점: 'GS25, CU 5% 할인 5% 할인 (월 할인한도 : 2천원)' },
      { 구독: '넷플릭스, 유튜브프리미엄 1만원 이상 시 1,000원 할인 (월 할인한도 : 2천원)' },
      { 배달: '배달의민족, 요기요 1만원 이상 시 1,000원 할인 (월 할인한도 : 1천원)' },
      { 이동통신: 'SKT, KT, LG U , Liiv M 5만원 이상 시 2,500원 할인 (월 할인한도 : 2천5백원)' },
      { 영화: 'CGV 1만원 이상 시 4,000원 할인 (월 할인한도 : 8천원)' },
      { 놀이공원: '에버랜드, 롯데월드 3만원 이상 시 15,000원 할인 (월 할인한도 : 1만5천원)' },
      { 기타: '오프라인 가맹점 KB Pay 결제 시 2% 추가 할인 (월 할인한도 : 3천원)' },
      { 기타: '온라인 가맹점 KB Pay 결제 시 2% 추가 할인 (월 할인한도: 2천원)' },
    ],
    image: '/image/card/kb_1.png',
  },
  {
    id: 'kb-02',
    name: '노리2 체크카드(Global)',
    bank: 'KB국민카드',
    cost: '연회비 없음',
    brand: ['국내전용', 'master'],
    point: [
      { 생활: '커피, 모바일, 문화 10% 할인' },
      { 쇼핑: '뷰티, 편의점 5% 할인' },
      { 여행: '해외이용 2%, 공항라운지' },
    ],
    benefit: [
      { 커피: '스타벅스, 커피빈 10% 할인(월 할인한도 : 3천원)' },
      { 모바일: '구글플레이스토어, 앱스토어 10% 할인 (월 할인한도 : 5천원)' },
      { 문화: '인터파크 티켓 10% 할인 (월 할인한도 : 7천원)' },
      { 뷰티: '올리브영, 미용실 업종 5% 할인 (월 할인한도 : 2천원)' },
      { 편의점: 'GS25, CU 5% 할인 5% 할인 (월 할인한도 : 2천원)' },
      { 구독: '넷플릭스, 유튜브프리미엄 1만원 이상 시 1,000원 할인 (월 할인한도 : 2천원)' },
      { 배달: '배달의민족, 요기요 1만원 이상 시 1,000원 할인 (월 할인한도 : 1천원)' },
      { 이동통신: 'SKT, KT, LG U , Liiv M 5만원 이상 시 2,500원 할인 (월 할인한도 : 2천5백원)' },
      { 영화: 'CGV 1만원 이상 시 4,000원 할인 (월 할인한도 : 8천원)' },
      { 놀이공원: '에버랜드, 롯데월드 3만원 이상 시 15,000원 할인 (월 할인한도 : 1만5천원)' },
      { 해외: '해외 가맹점 결제 시 2% 할인 (월 할인한도 : 5천원)' },
      { 해외: "전 세계 공항라운지 '더라운지멤버스' 이용권 (연간 1회, 본인만)" },
    ],
    image: '/image/card/kb_2.png',
  },
  {
    id: 'kb-03',
    name: '펭수 노리 체크카드(펭카)',
    bank: 'KB국민카드',
    cost: '연회비 없음',
    brand: ['국내전용', 'visa'],
    point: [
      { 교통: '대중교통 10% 청구할인' },
      { 생활: '이동통신요금 2,500원 환급할인' },
      { 생활: 'CGV 35% 환급할인' },
    ],
    benefit: [
      { 편의점: 'GS25 5% 환급할인' },
      { 이동통신: '이동통신요금 2,500원 환급할인' },
      { 영화: 'CGV 35% 환급할인' },
      { 놀이공원: '에버랜드/롯데월드 50% 환급할인' },
      { 대중교통: '버스/지하철 10% 청구할인' },
      { 서점: '교보문고 5% 환습할인' },
      { 금융: '금융수수료 면제 서비스' },
    ],
    image: '/image/card/kb_3.png',
  },
  {
    id: 'kb-04',
    name: '우리동네 체크카드(키뮤)',
    bank: 'KB국민카드',
    cost: '연회비 없음',
    brand: ['국내전용', 'visa'],
    point: [
      { 생활: '세탁소, 정육점 10% 환급할인' },
      { 생활: '빵집, 슈퍼마켓 5% 환급할인' },
      { 쇼핑: '취향거래 (번개장터) 5% 환급할인' },
    ],
    benefit: [
      { 의류: '세탁소 업종 1만원 이상 결제 시 10% 환급할인 (할인한도 : 2천원)' },
      { 베이커리: '제과아이스크림 업종 1만원 이상 결제 시 5% 환급할인 (할인한도: 2천원)' },
      { 슈퍼마켓: '기타식품 업종 1만원 이상 결제 시 5% 환급할인 (할인한도: 2천원)' },
      { 슈퍼마켓: '슈퍼마켓 업종 2만원 이상 결제 시 5% 환급할인 (할인한도: 2천원)' },
      {
        슈퍼마켓:
          '농수축협직판장, 농수축산물점 업종 2만원 이상 결제 시 5% 환급할인 (할인한도: 2천원)',
      },
      { 슈퍼마켓: '정육점 업종 3만원 이상 결제 시 10% 환급할인 (할인한도: 5천원)' },
      { 쇼핑: '번개장터 앱(app)에서 3만원 이상 결제 시 5% 환급할인 (할인한도: 5천원)' },
    ],
    image: '/image/card/kb_4.png',
  },
  {
    id: 'kb-05',
    name: '위글위글 첵첵 체크카드',
    bank: 'KB국민카드',
    cost: '연회비 없음',
    brand: ['국내전용', 'visa'],
    point: [
      { 교통: '대중교통 2~4천원 청구할인' },
      { 결제: '온라인간편결제 2~4천원 환급할인' },
      { 생활: '스타벅스 2~4천원 환급할인' },
    ],
    benefit: [
      { 커피: '스타벅스(사이렌오더포함) 2~4천원 환급할인' },
      { 문화: '인터파크티켓 2~4천원 환급할인' },
      { 뷰티: '올리브영/안경(렌즈)점 2~4천원 환급할인' },
      { 편의점: 'CU편의점 2~4천원 환급할인' },
      { 영화: 'CGV 2~4천원 환급할인' },
      { 대중교통: '버스/지하철 2~4천원 청구할인' },
      { 서점: 'YES24/교보문고 2~4천원 환급할인' },
      { 쇼핑: '텐바이텐 2~4천원 환급할인' },
      { 금융: '네이버/카카오/SSG페이 2~4천원 환급할인' },
    ],
    image: '/image/card/kb_5.png',
  },
  {
    id: 'kb-06',
    name: '카카오페이 KB국민 체크카드',
    bank: 'KB국민카드',
    cost: '연회비 없음',
    brand: ['국내전용', 'master'],
    point: [
      { 결제: '카카오페이결제 2% 적립' },
      { 생활: '커피전문점업종 1% 적립' },
      { 생활: 'CU편의점 1% 적립' },
    ],
    benefit: [
      { 커피: '카카오페이머니 커피전문점 업종 1% 적립' },
      { 베이커리: '카카오페이머니 제과아이스크림업종 1% 적립' },
      { 편의점: '카카오페이머니 CU편의점 1% 적립' },
      { 대중교통: '카카오페이머니 대중교통 1% 적립' },
      { 금융: '카카오페이머니 카카오페이결제 2% 적립' },
    ],
    image: '/image/card/kb_6.png',
  },
  {
    id: 'wr-01',
    name: '네이버페이 우리카드 체크',
    bank: '우리카드',
    cost: '5,000원',
    brand: ['master'],
    point: [
      { 결제: '국내 이용 1%, 해외 이용 1% 네이버페이 포인트 적립' },
      { 여행: '해외이용수수료 면제 및 플래티늄 서비스 제공' },
      { 여행: '국내외 공항라운지 무료 이용 서비스 (더라운지멤버스)' },
    ],
    benefit: [
      { 해외: '국내외 공항라운지 무료 이용 서비스 통합 월 1회, 연 2회 제공' },
      { 해외: '해외이용수수료 면제' },
      { 포인트: '네이버페이 포인트 적립, 국내 1%, 해외 1% (월 적립한도 1만 포인트)' },
    ],
    image: '/image/card/wr_1.png',
  },
  {
    id: 'wr-02',
    name: '알뜰교통카드(COOKIE CHECK)',
    bank: '우리카드',
    cost: '연회비 없음',
    brand: ['bc', 'master'],
    point: [
      { 교통: '대중교통(버스, 지하철) 3천원 캐시백' },
      { 쇼핑: '11번가, G마켓, 쿠팡 2천원 캐시백' },
      { 여행: '해외이용수수료 면제 / 해외 가맹점 이용금액 1~2% 캐시백' },
    ],
    benefit: [
      { 커피: '스타벅스(사이렌오더 포함) 2천원 캐시백' },
      { 편의점: 'CU, GS25, 세븐일레븐, 올리브영, 군마트(PX·WA마트) 1천원 캐시백' },
      { 영화: 'CGV, 롯데시네마 5천원 캐시백 (통합 월 1회 제공)' },
      { 대중교통: '버스, 지하철 합산 이용 금액 5만원 이상 시 3천원 캐시백 (통합 월 1회 제공)' },
      { 쇼핑: '건당 2만원 이상 결제 시 11번가, G마켓, 쿠팡 2천원 캐시백' },
      { 어학: 'YBM시사 (토익 응시료 포함) 해커스 어학원 3천원 캐시백 ' },
      { 기타: '네이버페이, 카카오페이, PAYCO 1천원 추가 캐시백 ' },
      { 해외: '해외 이용 수수료 면제' },
      { 해외: '해외 가맹점(해외직구 포함)이용금액의 1~2% 캐시백' },
      { 해외: '인천공항 라운지 무료이용 서비스' },
    ],
    image: '/image/card/wr_2.png',
  },
  {
    id: 'wr-03',
    name: 'NU Uniq Check',
    bank: '우리카드',
    cost: '연회비 없음',
    brand: ['국내전용', 'master'],
    point: [
      { 결제: '국내 가맹점 0.2~0.3% 포인트 적립' },
      { 생활: 'DAILY영역(쇼핑/교통/정기결제) 1% 적립' },
      { 생활: 'DAILY영역 중 가장 많이 이용한 영역 0.5% 한번 더 적립' },
      { 생활: 'EAT(커피/편의점/배달) 1% 적립' },
    ],
    benefit: [
      { 커피: '커피 1% 적립' },
      { 편의점: '편의점 1% 적립' },
      { 배달: '배달 1% 적립' },
      { 포인트: '국내 가맹점 0.2%~0.3% 적립' },
    ],
    image: '/image/card/wr_3.png',
  },
  {
    id: 'wr-04',
    name: '카드의정석 EVERY CHECK',
    bank: '우리카드',
    cost: '연회비 없음',
    brand: ['국내전용', 'master'],
    point: [
      { 생활: '4대 일상영역중 한 곳 1만원 적립' },
      { 결제: '국내외 가맹점 0.2% 적립' },
      { 결제: '전월실적별 최대 3천원 추가적립' },
    ],
    benefit: [
      { 문화: '4대 일상역역 중 1곳 1만원 적립' },
      { 영화: '4대 일상역역 중 1곳 1만원 적립' },
      { 놀이공원: '4대 일상역역 중 1곳 1만원 적립' },
      { 여행: '4대 일상역역 중 1곳 1만원 적립' },
      { 포인트: '국내외 가맹점 0.2% 적립' },
      { 포인트: '전월실적에 따라 최대 3천원 추가 적립' },
    ],
    image: '/image/card/wr_4.png',
  },
  {
    id: 'post-01',
    name: '개이득 체크카드',
    bank: '우체국',
    cost: '연회비 없음',
    brand: ['visa'],
    point: [
      { 결제: '국내 전 가맹점 0.3% 캐시백' },
      { 생활: 'OTT 30% 캐시백' },
      { 쇼핑: '패션 30% 캐시백' },
    ],
    benefit: [
      { 의류: '무신사, 지그재그, W컨셉, 브랜디 패션 30% 캐시백' },
      { 구독: '유튜브프리미엄, 넷플릭스, 웨이브, 티빙, 디즈니플러스 OTT 30% 캐시백' },
      { 금융: '국내 전 가맹점 0.3% 캐시백' },
      { 금융: '멤버십 30% 캐시백' },
      { 기타: 'VISA 컨택리스 결제 가능' },
    ],
    image: '/image/card/post_1.png',
  },
  {
    id: 'post-02',
    name: '어디서나 체크카드',
    bank: '우체국',
    cost: '연회비 없음',
    brand: ['visa'],
    point: [
      { 생활: '전통시장 10% 캐시백' },
      { 생활: '대형마트, 6대 홈쇼핑, 다이소 5% 캐시백' },
      { 쇼핑: '11번가, G마켓, 옥션, 쿠팡 5% 캐시백' },
    ],
    benefit: [
      { 커피: '카페 5% 포인트 적립' },
      { 슈퍼마켓: '전통시장 10% 캐시백' },
      { 슈퍼마켓: '대형마트, 6대 홈쇼핑, 다이소 5% 캐시백' },
      { 이동통신: '통신료(SKT, KT, LGU+) 3천원 캐시백' },
      { 영화: '메가박스 현장구매, 홈페이지 예매 시 영화 5% 캐시백' },
      { 서점: 'Yes24, 교보문고(인터넷) 5% 캐시백' },
      { 쇼핑: '11번가, G마켓, 옥션, 쿠팡 5% 캐시백' },
      { 주유: 'SK주유 리터당 40원 포인트 적립, 알뜰주유 리터당 100원 포인트 적립' },
      { 포인트: '음식점 5%포인트 적립' },
      { 포인트: '우편, 택배, EMS, 우표구매, 우체국쇼핑 10% 포인트 적립' },
    ],
    image: '/image/card/post_2.png',
  },
  {
    id: 'sh-01',
    name: '신한카드 플리 체크(산리오캐릭터즈)',
    bank: '신한카드',
    cost: '연회비 없음',
    brand: ['국내전용', 'master'],
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
    brand: ['국내전용', 'visa'],
    point: [
      { 결제: '간편결제 최대 2% 적립' },
      { 생활: '생활편의 최대 2% 적립' },
      { 여행: '해외 이용금액 1.3% 적립' },
    ],
    benefit: [
      { 커피: '커피전문점 최대 2% 할인' },
      { 이동통신: '통신요금 최대 2% 할인' },
      { 편의점: '편의점/생활잡화 최대 2% 할인' },
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
    brand: ['국내전용', 'visa'],
    point: [
      { 교통: '대중교통 최대 5% 적립' },
      { 생활: '생활편의 최대 2% 적립' },
      { 여행: '해외 이용금액 1.3% 적립' },
    ],
    benefit: [
      { 커피: '커피전문점 2% 적립' },
      { 이동통신: '통신요금 2% 적립' },
      { 편의점: '편의점/생활잡화 쵀다 2% 적립' },
      { 구독: '디지털 콘텐츠 최대 2% 적립' },
      { 대중교통: '버스/지하철 이용시 최대 5% 적립' },
      { 해외: '해외 이용금액에 대해 1.3# 적립' },
      { 포인트: '대중교통 + 생활편의 영역 이용시 포인트 총 합 월 최대 1만 6천 포인트까지 적립' },
    ],
    image: '/image/card/sh_3.png',
  },
  {
    id: 'sh-04',
    name: '신한카드 Pick E 체크',
    bank: '신한카드',
    cost: '연회비 없음',
    brand: ['국내전용', 'master'],
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
    id: 'sh-05',
    name: '신한카드 Hey Young 체크',
    bank: '신한카드',
    cost: '연회비 없음',
    brand: ['국내전용', 'visa'],
    point: [
      { 결제: '간편결제서비스 최대 5천원 캐시백' },
      { 생활: '생활서비스 최대 5천원 캐시백' },
      { 여행: '해외이용서비스 1.2% 캐시백' },
    ],
    benefit: [
      { 커피: '스타벅스 커피 1천원 캐시백(사이렌오더, 신한플레이 사이렌오더 포함)' },
      { 이동통신: '이동통신요금 자동이체 시 2천원 캐시백' },
      { 영화: 'CGV 영화 예매 5천원 캐시백' },
      { 대중교통: '대중교통 이용금액 5% 캐시백' },
      { 쇼핑: '온라인몰 쿠팡 1천원 캐시백' },
      { 해외: '해외 전 가맹점(온라인포함) 1.2% 캐시백' },
      { 해외: '해외인출 1건 당 $3 USD 캐시백' },
      { 금융: '간편결제(Pay)로 국내 이용시 1% 캐시백' },
    ],
    image: '/image/card/sh_5.png',
  },
  {
    id: 'sh-06',
    name: '신한카드 Deep Dream 체크',
    bank: '신한카드',
    cost: '연회비 없음',
    brand: ['visa', 'union pay'],
    point: [
      { 생활: '전월실적/한도없이 포인트 적립' },
      { 생활: '주유 적립 택시 할인' },
      { 생활: '신한 금융그룹 서비스 수수료 우대' },
    ],
    benefit: [
      { 대중교통: '택시 3, 6, 9번째 1천원 할인' },
      { 주유: '주말 전 주유소 리터당 40원 적립' },
      { 포인트: 'DREAM영역 중 가장 많이 이용한 영역은 기본의 5배 (총 1.0%) 포인트 자동적립' },
      { 포인트: '자주 가는 DREAM 영역은 기본의 3배(총 0.6%) 포인트 적립' },
      { 포인트: '전월 실적/적립 한도 없이 국내/외 이용 가맹점 0.2% 기본 포인트 적립' },
      { 포인트: '반겨드림 3천원 포인트 적립(최초 발급시에만 1회에 한 함)' },
    ],
    image: '/image/card/sh_6.png',
  },
  {
    id: 'nh-01',
    name: 'GOODGAME 체크카드',
    bank: 'NH 농협카드',
    cost: '연회비 없음',
    brand: ['국내전용', 'visa'],
    point: [{ 생활: '앱마켓 10% 할인' }, { 생활: '스팀(Steam) 10% 할인' }, { 생활: 'PC방 할인' }],
    benefit: [
      { 모바일: '구글 플레이스토어, 애플 앱스토어, 원스토어 결제 시 10% NH포인트 적립' },
      { 게임: '온라인 게임유통 플랫폼 스팀(STEAM) 결제 시 10% NH포인트 적립' },
      { 게임: 'PC방 결제 시 10% NH포인트 적립' },
      { 커피: '대상 커피숍 월~금 0.5% NH포인트 적립 / 토, 일 1% NH포인트 적립' },
      { 편의점: 'CU, GS25 월~금 0.5% NH포인트 적립 / 토, 일 1% NH포인트 적립' },
      { 배달: '배달앱 월~금 0.5% NH포인트 적립 / 토, 일 1% NH포인트 적립' },
      { 영화: 'CGV, 롯데시네마, 메가박스 월~금 0.5% NH포인트 적립 / 토, 일 1% NH포인트 적립' },
      { 쇼핑: '대상 쇼핑몰 월~금 0.5% NH포인트 적립 / 토, 일 1% NH포인트 적립' },
      { 포인트: '대상업종에 대해 월~금 0.5% NH포인트 적립 / 토, 일 1% NH포인트 적립' },
    ],
    image: '/image/card/nh_1.png',
  },
  {
    id: 'nh-02',
    name: '라이언 치즈 체크카드',
    bank: 'NH 농협카드',
    cost: '연회비 없음',
    brand: ['국내전용', 'union pay'],
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
  {
    id: 'nh-03',
    name: '올리 POINT 체크카드',
    bank: 'NH 농협카드',
    cost: '연회비 없음',
    brand: ['국내전용', 'master'],
    point: [
      { 생활: '국내/외 이용가맹점 0.2% NH포인트 적립' },
      { 생활: '6개 영역 이용금액 1위/2위 적립 3배/2배 적용' },
      { 여행: '국제공항 라운지 무료이용' },
    ],
    benefit: [
      { 커피: '스타벅스, 이디야, 투썸플레이스 0.2% NH포인트 적립' },
      { 슈퍼마켓: '이마트, 홈플러스, 롯데마트, 하나로마트 0.2% NH포인트 적립' },
      { 뷰티: '올리브영 0.2% NH포인트 적립' },
      { 편의점: 'GS25, CU, 세븐일레븐 0.2% NH포인트 적립' },
      { 구독: '유튜브 프리미엄, 넷플릭스, 웨이브, 멜론 정기결제 0.2% NH포인트 적립' },
      { 배달: '배달의민족/요기요 0.2% NH포인트 적립' },
      { 이동통신: 'SKT, KT, LGU+ 자동남부 0.2% NH포인트 적립' },
      { 대중교통: '지하철, 시내외버스, 택시 0.2% NH포인트 적립' },
      { 쇼핑: '11번가, G마켓, 옥션, 쿠팡, 농협몰 0.2% NH포인트 적립' },
      { 해외: '해외 전 가맹점(해외 온라인쇼핑 포함)' },
      { 포인트: '국내/외 이용가맹점 0.2% NH포인트 적립' },
    ],
    image: '/image/card/nh_3.png',
  },
  {
    id: 'nh-04',
    name: '알뜰교통카드(체크)',
    bank: 'NH 농협카드',
    cost: '연회비 없음',
    brand: ['국내전용', 'visa'],
    point: [
      { 교통: '대중교통 10% 할인' },
      { 생활: '렌터카/카쉐어링 5% 할인' },
      { 생활: '전기차 충전 5% 할인' },
    ],
    benefit: [
      { 커피: '커피전문점 5% 캐시백(월 2천원, 2회 한)' },
      { 편의점: '편의점 5% 캐시백(월 1천원, 2회 한)' },
      { 이동통신: '이동통신요금 5% 캐시백(월 3천원, 1회 한)' },
      { 대중교통: '버스/지하철 10% 캐시백' },
      { 기타: '렌터카/카쉐어링 5% 캐시백' },
      { 기타: '전기차 충전 5% 캐시백' },
    ],
    image: '/image/card/nh_4.png',
  },
  {
    id: 'nh-05',
    name: 'NH20해봄체크카드',
    bank: 'NH 농협카드',
    cost: '연회비 없음',
    brand: ['국내전용', 'master'],
    point: [{ 생활: '커피 20% 할인' }, { 생활: '도서 5% 할인' }, { 쇼핑: '쇼핑 5% 할인' }],
    benefit: [
      { 커피: '스타벅스, 이디야 커피 20% 할인' },
      { 모바일: '어플리케이션 1,000원 할인' },
      { 편의점: 'GS25 5% 할인' },
      { 영화: 'CGV 온라인 예매(홈페이지, 모바일앱) 2,000원 할인' },
      { 이동통신: '이동통신 자동납부 2,500원 할인' },
      { 배달: '배달앱 5% 할인' },
      { 대중교통: '대중교통(버스/지하철) 10% 할인' },
      { 어학: '토익, 텝스, JPT, KPE 5% 할인' },
      { 서점: '온라인 서점 5% 할인' },
      { 쇼핑: '온라인 쇼핑몰 5% 할인' },
      { 해외: '해외 전가맹점 (해외직구 포함) 이용금액 1% 할인' },
      { 해외: '(여행해봄) 인천 공항라운지 무료이용 서비스' },
      { 놀이공원: '(놀이해봄) 전국 놀이공원 할인' },
    ],
    image: '/image/card/nh_5.png',
  },
  {
    id: 'ha-01',
    name: 'MULTI Any 체크카드',
    bank: '하나카드',
    cost: '연회비 없음',
    brand: ['국내전용', 'visa'],
    point: [
      { 결제: '페이결제 0.4% 적립' },
      { 생활: '국내외 전 가맹점 0.2% 적립' },
      { 쇼핑: '쇼핑 0.6% 적립' },
    ],
    benefit: [
      { 배달: '배달의민족, 요기요 0.8% 하나머니 적립' },
      { 대중교통: '버스, 지하철 1.0% 하나머니 적립' },
      { 쇼핑: '마트, SSM, 백화점 0.6% 하나머니 적립' },
      { 포인트: '각종 페이결제 0.4% 하나머니 적립' },
      { 포인트: '국내외 전 가맹점 0.2% 하나머니 적립' },
    ],
    image: '/image/card/ha_1.png',
  },
  {
    id: 'ha-02',
    name: '트래블로그 체크카드',
    bank: '하나카드',
    cost: '연회비 없음',
    brand: ['master', 'union pay'],
    point: [
      { 쇼핑: '국내 가맹점 하나머니 적립' },
      { 여행: '해외인출수수료 면제' },
      { 여행: '해외서비스수수료 면제' },
    ],
    benefit: [
      { 해외: '해외 ATM 인출수수료 면제' },
      { 해외: '해외 가맹점 이용수수료 면제' },
      { 포인트: '국내 가맹점 이용 시 0.3% 하나머니 적립' },
    ],
    image: '/image/card/ha_2.png',
  },
  {
    id: 'ha-03',
    name: 'T1 Young Hana 체크카드',
    bank: '하나카드',
    cost: '연회비 없음',
    brand: ['master'],
    point: [
      { 생활: '놀이공원 50% 할인' },
      { 생활: '어학시험/외국어학원업종 5% 적립' },
      { 생활: '커피 20% 적립' },
    ],
    benefit: [
      { 커피: '스타벅스 20% 적립' },
      { 편의점: 'GS25 10% 적립' },
      { 이동통신: 'SKT / KT / LGU+ 자동이체 시 1천 하나머니 적립' },
      { 영화: 'CGV / 롯데시네마 / 메가박스 10% 적립' },
      { 놀이공원: '롯데월드, 에버랜드 자유이용권 50% 할인(월 1회, 연6회 제공)' },
      { 대중교통: '버스 / 지하철 1천 하나머니 적립' },
      { 쇼핑: '11번가 / 쿠팡 / 티몬 / 위메프 5% 적립' },
      { 어학: '어학시험(TOEIC, OPIC, JPT, HSK) 및 외국어학원 업종 5% 적립' },
      { 해외: '해외 ATM 현금인출 수수료 우대' },
      { 외식: '아웃백 / TGIF / VIPS 적립' },
      { 포인트: 'OK 캐쉬백 가맹점에서 OK 캐쉬백 사용 결제시 사용금액 30% 적립' },
      { 포인트: 'OK캐쉬백 플러스 원클릭 충전 및 자동충전시 1% OK캐쉬백 추가 적립' },
    ],
    image: '/image/card/ha_3.png',
  },
  {
    id: 'ha-04',
    name: 'NEW 모두의 일상 체크카드',
    bank: '하나카드',
    cost: '연회비 없음',
    brand: ['국내전용', 'master'],
    point: [
      { 결제: '페이결제 0.4% 적립' },
      { 결제: '일반결제 0.3% 적립' },
      { 여행: '해외 전 가맹점 0.4% 적립' },
    ],
    benefit: [
      { 해외: '해외 전 가맹점 이용 시 0.4%' },
      { 포인트: '하나원큐페이에 카드를 등록하여 결제하는 건' },
      { 포인트: '간편결제에 카드 등록하여 결제하는 건 0.4% 적립' },
      { 포인트: '상기 결제 외 국내 전 가맹점 결제 0.3% 적립' },
    ],
    image: '/image/card/ha_4.png',
  },
  {
    id: 'ha-05',
    name: '알뜰교통 비바 e 플래티늄 체크카드',
    bank: '하나카드',
    cost: '연회비 없음',
    brand: ['visa'],
    point: [
      { 교통: '대중교통 15% 캐쉬백' },
      { 결제: '한진 훗타운 20% 캐쉬백' },
      { 쇼핑: '국내 온라인 쇼핑 2만원당 200원 캐쉬백' },
    ],
    benefit: [
      { 대중교통: '대중교통 이용금액 15% 캐쉬백' },
      { 쇼핑: '국내 온라인 쇼핑 업종 2만원당 200원 캐쉬백' },
      { 해외: '한진 훗타운을 통해 해외 직접구매 배송 대행료 THE빠른 배송으로 결제 시 20%캐쉬백' },
      { 해외: '해외 ATM 현금 인출 시 수수료 우대' },
      { 해외: '해외 물품 구매시 수수료 우대' },
    ],
    image: '/image/card/ha_5.png',
  },
  {
    id: 'ibk-01',
    name: 'I-알뜰교통플러스 카드(체크)',
    bank: 'IBK 카드',
    cost: '연회비 없음',
    brand: ['국내전용', 'master'],
    point: [
      { 교통: '대중교통(버스, 지하철) 건당 100원 할인' },
      { 생활: '편의점(GS25, CU, 세븐일레븐, 올리브영) 5% 할인' },
      { 쇼핑: '쇼핑(쿠팡, 티몬, 위메프) 10% 할인' },
    ],
    benefit: [
      {
        커피: '커피(스타벅스, 커피빈, 카페베네, 탐앤탐스, 엔제리너스, 투썸플레이스, 할리스, 달.콤) 10% 할인',
      },
      { 편의점: '편의점(GS25, CU, 세븐일레븐, 올리브영) 5% 할인' },
      { 영화: '영화(CGV, 롯데시네마, 메가박스) 4천원 할인' },
      { 놀이공원: '주요 놀이공원 본인 무료입장 또는 자유이용권 최대 50% 할인' },
      { 대중교통: '대중교통(버스, 지하철) 건당 100원 할인' },
      { 쇼핑: '쇼핑(쿠팡, 티몬, 위메프) 10% 할인' },
      { 해외: '환전 시 환율 70% 우대' },
      { 금융: '타행 ATM 출금수수료 면제(월 10회)' },
      { 금융: '당행 전자금융 이체수수료 면제, 당행 ATM / CD기를 통한 이체수수료 면제' },
    ],
    image: '/image/card/ibk_1.png',
  },
  {
    id: 'ibk-02',
    name: 'IBK DC히어로즈 카드(체크)',
    bank: 'IBK 카드',
    cost: '연회비 없음',
    brand: ['국내전용', 'master'],
    point: [
      { 결제: '점심·저녁시간 3배(총 0.6%) 캐시백' },
      { 결제: '기본캐시백 0.2%]' },
      { 생활: '출금 및 이체수수료 면제' },
    ],
    benefit: [
      { 금융: '전자금융·ATM 출금 및 이체수수료 면제' },
      { 기타: '국내·해외 전 가맹점 0.2% 캐시백' },
      { 기타: '점심·저녁시간 국내 전 가맹점 3배(총 0.6%) 캐시백' },
    ],
    image: '/image/card/ibk_2.png',
  },
  {
    id: 'ibk-03',
    name: '무민카드(체크)',
    bank: 'IBK 카드',
    cost: '연회비 없음',
    brand: ['국내전용', 'union pay'],
    point: [
      { 교통: '대중교통 이용건당 100원 할인' },
      { 생활: '편의점 5% 할인' },
      { 생활: '영화 4천원 할인' },
    ],
    benefit: [
      { 커피: '주요 커피전문점 10% 할인' },
      { 편의점: 'GS25, CU, 세븐일레븐 5% 할인' },
      { 영화: 'CGV, 롯데시네마, 메가박스 4천원 할인' },
      { 놀이공원: '놀이공원 현장할인 or 청구할인(월 1회, 연 2회 제공)' },
      { 대중교통: '버스, 지하철 이용건당 100원 할인' },
      { 쇼핑: '쿠팡, 티몬, 위메프 10% 할인' },
      { 해외: '환전(Cash, T/C) 시 환율 70% 우대(대상통화 USD, JPY, EUR)' },
      { 금융: '당행 전자금융 이체수수료 면제' },
      { 금융: '타행 ATM 출금수수료 면제(월 10회) 당행 ATM/CD기를 통한 이체수수료 면제' },
    ],
    image: '/image/card/ibk_3.png',
  },
  {
    id: 'ibk-04',
    name: 'IBK 무직타이거 카드(체크) ',
    bank: 'IBK 카드',
    cost: '연회비 없음',
    brand: ['국내전용', 'union pay'],
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
    id: 'payco-1',
    name: 'PAYCO 포인트 카드(선불카드)',
    bank: '엔에이치엔페이코',
    cost: '연회비 없음',
    brand: ['국내전용', 'visa'],
    point: [
      { 결제: '이달의 브랜드 ~15% 적립' },
      { 결제: '온라인 1% 적립' },
      { 결제: '오프라인 0.5% 적립' },
    ],
    benefit: [
      { 포인트: '이달의 브랜드 ~15% 적립' },
      { 포인트: '온라인 결제시 1% 적립' },
      { 포인트: '오프라인 결제시 0.5% 적립' },
    ],
    image: '/image/card/payco_1.png',
  },
  {
    id: 'hyundai-1',
    name: '현대카드M CHECK',
    bank: '현대카드',
    cost: '국내전용 2,000원',
    brand: ['국내전용'],
    point: [
      { 결제: '월 100만원 미만 이용 시 0.5% M포인트 적립' },
      { 결제: '월 100만원 이상 이용 시 1% M포인트 적립' },
      { 결제: 'M포인트를 H-Coin으로 전환, 현금처럼 사용' },
    ],
    benefit: [
      { 포인트: '월 100만원 이상 이용 시 1% M포인트 적립' },
      { 포인트: '월 100만원 미만 이용 시 0.5% M포인트 적립' },
      {
        기타: 'H-Coin 전환, 현대카드 Gift카드, 상품권, 항공 마일리지, 연회비 결제 등 M포인트를 현금처럼 사용',
      },
    ],
    image: '/image/card/hyundai_1.png',
  },
  {
    id: 'samsung-1',
    name: '알뜰교통플러스 삼성체크카드',
    bank: '삼성카드',
    cost: '연회비 없음',
    brand: ['국내전용', 'master'],
    point: [
      { 교통: '대중교통 10% 캐시백' },
      { 생활: '이동통신 10% 캐시백' },
      { 생활: 'CGV 3,000원 할인' },
    ],
    benefit: [
      { 커피: '건별 10,000원 이상 결제 시 1,000원 캐시백' },
      { 베이커리: '건별 10,000원 이상 결제 시 1,000원 캐시백' },
      { 편의점: '건별 10,000원 이상 결제 시 1,000원 캐시백' },
      { 이동통신: '이동통신 정기결제시 10% 캐시백' },
      { 대중교통: '대중교통 이용금액의10% 캐시백' },
      { 영화: 'CGV 3,000원 할인' },
      { 기타: '알뜰교통카드 마일리지 지급(알뜰교통카드 앱 가입 및 카드 등록 필수)' },
    ],
    image: '/image/card/samsung_1.png',
  },
  {
    id: 'toss-1',
    name: '토스뱅크카드',
    bank: '토스뱅크',
    cost: '연회비 없음',
    brand: ['master'],
    point: [
      { 결제: '국내 특정 브랜드 결제 캐시백' },
      { 결제: '해외 온・오프라인 결제 2% 캐시백' },
      { 결제: 'ATM 현금 인출 수수료 혜택' },
    ],
    benefit: [
      { 해외: 'ATM 현금 인출 수수료 혜택' },
      { 해외: '제휴 숙소 플랫폼에서 예약하면 7~10% 할인' },
      { 기타: '[집중캐시백] 국내 특정 브랜드 결제 1만원 이상 500원 / 1만원 이상 100원' },
      { 기타: '[어디서나 캐시백] 국내 모든 결제 5천원 이상 100원 / 5천원 미만 1%' },
    ],
    image: '/image/card/toss_1.png',
  },
  {
    id: 'kona-1',
    name: '트래블제로카드',
    bank: '코나카드',
    cost: '연회비 없음',
    brand: ['master'],
    point: [
      { 여행: '해외 가맹점 결제 수수료 0% 혜택' },
      { 여행: '환전 수수료 0% 혜택' },
      { 여행: '해외 ATM 출금 수수료 0% 혜택' },
    ],
    benefit: [
      { 해외: '전 세계 마스터카드 해외 가맹점에서 이용하는 결제 수수료 0%' },
      { 해외: '결제할 때마다 환율우대 100% 혜택' },
      { 해외: '해외 ATM 출금 수수료 $3 면제 혜택' },
      { 해외: '국내 제휴 가맹점 무제한 15% 할인' },
    ],
    image: '/image/card/kona_1.png',
  },
]

export default cardData
