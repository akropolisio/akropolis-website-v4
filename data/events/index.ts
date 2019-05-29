import { IEvent } from 'shared/types/models';

// tslint:disable
const events: IEvent[] = [
  {
    eventName: 'CryptoChicks Hackathon & Conference',
    link: 'https://www.toronto.cryptochicks.ca/',
    location: 'Toronto', 
    description: {
      en: 'CryptoChicks is a Blockchain & AI Conference and Hackathon held in Toronto. CryptoChicks’ global hackathon and conference series are an integral part of the mission to grow the economic, professional and leadership potential of women in blockchain and AI technologies through education, mentorship, business and diverse employment opportunities. This year’s Toronto event combines technology competitions and an educational conference that will run side by side, over three consecutive days. ',
      vi: 'CryptoChicks is a Blockchain & AI Conference and Hackathon held in Toronto. CryptoChicks’ global hackathon and conference series are an integral part of the mission to grow the economic, professional and leadership potential of women in blockchain and AI technologies through education, mentorship, business and diverse employment opportunities. This year’s Toronto event combines technology competitions and an educational conference that will run side by side, over three consecutive days.',
      zh: 'CryptoChicks is a Blockchain & AI Conference and Hackathon held in Toronto. CryptoChicks’ global hackathon and conference series are an integral part of the mission to grow the economic, professional and leadership potential of women in blockchain and AI technologies through education, mentorship, business and diverse employment opportunities. This year’s Toronto event combines technology competitions and an educational conference that will run side by side, over three consecutive days.',
      ko: 'CryptoChicks is a Blockchain & AI Conference and Hackathon held in Toronto. CryptoChicks’ global hackathon and conference series are an integral part of the mission to grow the economic, professional and leadership potential of women in blockchain and AI technologies through education, mentorship, business and diverse employment opportunities. This year’s Toronto event combines technology competitions and an educational conference that will run side by side, over three consecutive days.',
    },
    startDate: '05.31.2019',
    finishDate: '06.02.2019',
    image1x: require('./imgs/chicks@660w.jpg'),
    image2x: require('./imgs/chicks@1320w.jpg'),
  },
  {
    eventName: 'The Next Web 2019',
    link: 'https://thenextweb.com/conference/',
    location: 'Amsterdam', 
    description: {
      en: 'The Next Web conference is a two day technology festival that brings together 15,000 digital minds to predict, discuss and invent the future. It will take place on May 9-10 in Amsterdam, Netherlands, with over 200 speakers sharing insights about AI, blockchain, design thinking, machine learning, trading, future of work and more.',
      vi: 'Hội nghị Web tiếp theo là một lễ hội công nghệ kéo dài hai ngày, quy tụ 15.000 bộ óc kỹ thuật số để dự đoán, thảo luận và phát minh ra tương lai. Nó sẽ diễn ra vào ngày 9-10 tháng 5 tại Amsterdam, Hà Lan, với hơn 200 diễn giả chia sẻ những hiểu biết về AI, blockchain, tư duy thiết kế, học máy, giao dịch, tương lai của công việc và hơn thế nữa.',
      zh: 'The Next Web是为期两天的技术盛会，汇集了15,000名数字化精英前来来预测，讨论和创造未来。它将于5月9日至10日在荷兰阿姆斯特丹举行，200多位演讲者将分享有关人工智能，区块链，设计思维，机器学习，交易，期货等方面的见解。',
      ko: '넥스트웹 컨퍼런스는 이틀동안 만오천개의 디지털 자료들을 규합하여 미래에 관한 예측 및 토론과 발견 그리고 개척하여 나가는 일종의 기술관련 축제입니다. 이 행사는 5월 9일부터 10일까지 이틀간 네덜란드 암스테르담에서 열리며 200여명 이상의 연설자들이 AI와 블록체인, 디자인에 관한 의견과 기계 관련 학습 그리고 미래관련 분야에 대한 의견을 나눌 예정입니다.',
    },
    startDate: '05.09.2019',
    finishDate: '05.10.2019',
    image1x: require('./imgs/Amsterdam@660w.png'),
    image2x: require('./imgs/Amsterdam@1320w.png'),
  }, 

   {
    eventName: 'The Next Web Special',
    link: 'https://www.meetup.com/BCNLfoundation/events/259893194/',
    location: 'Amsterdam', 
    description: {
      en: 'The Next Web Special is a meet up organized by Netherlands Blockchain Community around the main TNW event. It will feature international TNW speakers as well as some members of Dutch Blockchain ecosystem. This year, main topics of discussion will cover the state of DAOs and how one can use a DAO to organize or govern community driven initiatives.',
      vi: 'Next Web Special là cuộc gặp gỡ được tổ chức bởi Cộng đồng Blockchain Hà Lan xung quanh sự kiện TNW chính. Nó sẽ có các diễn giả TNW quốc tế cũng như một số thành viên của hệ sinh thái Blockchain Hà Lan. Năm nay, các chủ đề thảo luận chính sẽ đề cập đến trạng thái của DAO và cách người ta có thể sử dụng DAO để tổ chức hoặc chi phối các sáng kiến do cộng đồng điều khiển.',
      zh: 'Next Web Special是荷兰区块链社区围绕The Next Web活动举办的聚会。它将囊括国际TNW发言人以及荷兰区块链生态系统的成员。今年，讨论主议题将是DAO （去中心化自治组织）的状态以及如何使用 DAO来组织或管理社区驱动的创新企业。',
      ko: 'The Next Web Special은 넥스트웹을 기반으로 한 네덜란드 블록체인 협회에 의해 구성된 모임으로 전 세계의 넥스트웹 연설자들과 네덜란드 블록체인산업의 주요 인사들로 이루어져 있습니다. 올해의 주요 의제는 DAO를 사용한 지역사회 구성 및 관리에 관한 부분에 관하여 논의할 예정입니다.',
    },
    startDate: '05.08.2019',
    image1x: require('./imgs/Amsterdam1@660w.png'),
    image2x: require('./imgs/Amsterdam1@1320w.png'),
  }, 

  { 
    eventName: 'ETH Cape Town',
    link: 'https://ethcapetown.com/',
    location: 'Cape Town', 
    description: {
      en: 'ETHCapeTown Hackathon is the first Africa\'s ETHGlobal event that will take place in Cape Town, South Africa, on April 19-21. It will bring together over 200 international hackers, developers and curious minds to collaborate on building a decentralized future using Ethereum. The occasion will be inclusive and educational, inspiring communities through the creative design of blockchain applications.',
      vi: 'ETHCapeTown Hackathon là sự kiện ETHGlobal đầu tiên của châu Phi sẽ diễn ra tại Cape Town, Nam Phi, vào ngày 19-21 tháng 4. Nó sẽ tập hợp hơn 200 tin tặc quốc tế, các nhà phát triển và những bộ óc tò mò để hợp tác xây dựng một tương lai phi tập trung sử dụng Ethereum. Dịp này gặp gỡ này sẽ bao quát và mang tính giáo dục, truyền cảm hứng cho cộng đồng thông qua thiết kế sáng tạo các ứng dụng blockchain.',
      zh: 'ETHCapeTown Hackathon是非洲的第一个ETHGlobal活动，于4月19日至21日在南非开普敦举行。它汇集了200多名国际黑客，开发人员和爱好者，共同合作，利用以太坊建立去中心化的未来。通过区块链应用程序的创造性设计，去激发社区变得更具包容性和教育性。',
      ko: 'ETH케이프 타운 해커톤은 4월 19일부터 21일까지 남아프리카 공화국의 케이프 타운에 열리는 아프리카 최초의 ETHGlobal 행사입니다. 전 세계 200여명 이상의 세계적인 해커들과 개발자들 그리고 이 분야에 관심이 있으신 분들이 한데 모여 이더리움을 이용한 탈중앙화의 미래사회 구축을 위한 협력의 장이 될 것이며 이 기회를 통해 블록체인을 적용한 독창적 디자인을 이용한 포괄적이면서 동시에 교육적인 커뮤니티가 될 것입니다.',
    },
    startDate: '04.19.2019',
    finishDate: '04.21.2019',
    image1x: require('./imgs/Capetown@660w .png'),
    image2x: require('./imgs/Capetown@1320w.png'),
  },

  {
    eventName: 'DeFi Cape Town: Decentralised Financial Inclusion',
    link: 'https://www.eventbrite.com/e/defi-cape-town-decentralised-financial-inclusion-registration-59050781477',
    location: 'Cape Town', 
    description: {
      en: 'DeFi Cape Town: Decentralised Financial Inclusion is a DeFi event that will happen on April 18 in a Cape Town as a part of the upcoming Blockchain Week ZA. It will focus on highlighting the challenges of financial inclusion in the region and sharing insights from developing solutions in the open DeFi ecosystem, such as ensuring a stable monetary infrastructure, expanding financing opportunities to MSME\’s,  enabling faster and cheaper remittances and much more.',
      vi: 'DeFi Cape Town: Tài chính bao quát phi tập trung là một sự kiện DeFi sẽ diễn ra vào ngày 18 tháng 4 tại Cape Town như là một phần của Tuần lễ Blockchain ZA sắp tới. Nó sẽ tập trung vào làm nổi bật những thách thức của việc đưa tài chính bao quát vào khu vực và chia sẻ những hiểu biết về phát triển các giải pháp trong hệ sinh thái DeFi mở, như đảm bảo cơ sở hạ tầng tiền tệ ổn định, mở rộng cơ hội tài chính cho MSME, cho phép chuyển tiền nhanh hơn và rẻ hơn và nhiều hơn nữa.',
      zh: 'DeFi Cape Town：去中心化普惠金融”是一项DeFi活动，作为 Blockchain Week ZA的一部分，于4月18日在开普敦举行。它将聚焦于该地区金融包容性的挑战，并分享在开放式 DeFi 生态系统中开发解决方案的见解：例如，确保稳定的货币基础设施；扩大MSME的融资机会；实现更快，更便宜的汇款等等。',
      ko: 'DeFi 케이프 타운: Decentralized Financial Inclusion은 다가올 남아프리카공화국 블록체인 주간에 일환으로 4월 18일 케이프 타운에서 열리는 DeFi 행사입니다. 이 행사의 주요 목표는 지역의 재정적 문제에 관련하여 안정적인 통화 인프라 확보 및 MSME에 자금 조달 기회 확충을 통한 빠르고 저렴한 송금을 가능하게 하는 열린 DeFi 시스템의 해결책 개발 및 이해에 관해 초점을 맞추고 있습니다.',
    },
    startDate: '04.18.2019',
    image1x: require('./imgs/Capetown2@660w.png'),
    image2x: require('./imgs/Capetown2@1320.png'),
  },

  {
    eventName: 'EDCON 2019',
    link: 'https://www.edcon.io',
    location: 'Sydney',
    description: {
      en: 'EDCON 2019 (Community Ethereum Development Conference) is a non-profit global conference which will happen in Sydney, Australia on 8-14 April 2019. The purpose of the conference is to improve communication among various Ethereum communities and to promote Ethereum ecosystem development on a global scale. EDCON is organized as a conference series, once a year in different countries.',
      vi: 'EDCON 2019 (Hội nghị phát triển Ethereum cộng đồng) là một hội nghị toàn cầu phi lợi nhuận sẽ diễn ra tại Sydney, Australia vào ngày 8-14 tháng 4 năm 2019. Mục đích của hội nghị là cải thiện giao tiếp giữa các cộng đồng Ethereum khác nhau và thúc đẩy phát triển hệ sinh thái Ethereum trên một quy mô toàn cầu. EDCON được tổ chức như một chuỗi hội nghị, mỗi năm một lần tại các quốc gia khác nhau.',
      zh: 'EDCON 2019（社区以太坊发展大会）是一个非营利性的全球会议，将于2019年4月8日至14日在澳大利亚悉尼举行。会议的目的是改善各种以太坊社区之间的沟通，并在全球范围内促进以太坊生态系统的发展。EDCON是一年一度的系列会议，每年都会在不同的国家举办。',
      ko: 'EDCON 2019(이더리움 개발 공동체 회의)는 4월 8일부터 14일까지 호주에서 열리는 비영리 글로벌 컨퍼런스입니다. 이 회의의 주된 목적은 이더리움과 관련된 다양한 커뮤니티간의 소통 및 이더리움을 전 세계적인 규모로 한층 업그레이드 시키는 것에 대하여 주안점을 두고 있습니다. EDCON은 1년에 한번 매해 다른 국가에서 개최되고 있습니다.',
    },
    startDate: '04.08.2019',
    finishDate: '04.14.2019',
    image1x: require('./imgs/Sydney@660w.png'),
    image2x: require('./imgs/Sydney@1320w.png'),
  },
  {
    eventName: 'Financial Inclusion Summit 2019',
    link: 'https://financial-inclusion.com',
    location: 'Oslo',
    description: {
      en: 'Akropolis Founder Ana Andria will be attending an invite-only Financial Inclusion Summit 2019 with MakerDAO Head of Product Soren Peter Nielsen. The Summit convenes an international gathering of stakeholders from governments and the public sector, financial institutions and fintech innovators with the goal to identify viable long-term solutions to financial inclusion, aided by latest advances in financial technology, that reduce poverty and drive economic growth.',
      vi: 'Người sáng lập Akropolis, Ana Andria sẽ tham dự Hội nghị thượng đỉnh tài chính bao quát 2019 với Giám đốc sản xuất của MakerDAO Soren Peter Nielsen. Hội nghị thượng đỉnh triệu tập các bên liên quan quốc tế từ các chính phủ và khu vực công, các tổ chức tài chính và các nhà đổi mới fintech với mục tiêu xác định các giải pháp dài hạn khả thi để đưa vào tài chính, hỗ trợ bởi những tiến bộ mới nhất trong công nghệ tài chính, giúp giảm nghèo và thúc đẩy tăng trưởng kinh tế.',
      zh: 'Akropolis创始人Ana Andria受邀与MakerDAO产品负责人Soren Peter Nielsen一同出席2019年普惠金融峰会。此次峰会召集了来自政府和公共部门从业者，金融机构和金融科技创新者。峰会旨在利用金融技术的最新成果来确立可行的普惠金融长期解决方案，减少贫困并推动经济增长。',
      ko: 'Akropolis의 창립자이신 아나 안드리아씨는 MakerDAO의 제품관련 책임자인 소렌 피터 닐슨씨와 함께 초청자들만 참여할 수 있는 Financial Inclusion Summit 2019에 참여하실 예정입니다. 그 Summit에서 정부관련 공공부분, 금융 기관과 핀테크 기술 도입자등과 함께 금융 기술의 최신 발전에 따른 빈곤율 감소와 경제 성장을 이끌어낼 수 있는 재정 통합부분에 관련하여 실행 가능한 장기 해결책을 찾아내는 것에 관련된 회의 등이 이루어질 예정입니다.',
    },
    startDate: '03.28.2019',
    image1x: require('./imgs/oslo.png'),
    image2x: require('./imgs/oslo@2x.png'),
  },
  {
    eventName: 'Blockchain In Digital Economy 2019',
    link: 'http://londonblockchainlabs.com/bide2019/',
    location: 'London',
    description: {
      en: 'Bank of England, HSBC, Barclays Bank, academics, blockchain practitioners and investors will gather at the prestigious Imperial College London for the Blockchain in Digital Economy conference. This event brings together the UK\'s best blockchain talent, policymakers and business decision-makers. Akropolis Founder Ana Andria will be moderating a fintech panel.',
      vi: 'Ngân hàng Anh, HSBC, Ngân hàng Barclays, các học giả, các nhà thực hành và nhà đầu tư blockchain sẽ tập trung tại Đại học Hoàng gia Luân Đôn uy tín cho hội nghị Blockchain trong Kinh tế Kỹ thuật số. Sự kiện này quy tụ những tài năng blockchain, nhà hoạch định chính sách và nhà ra quyết định kinh doanh giỏi nhất của Vương quốc Anh. Người sáng lập Akropolis Ana Andria sẽ điều hành một hội đồng fintech.',
      zh: '英格兰银行，汇丰银行，巴克莱银行，各界学者，区块链从业者和投资者将聚集在著名的伦敦帝国理工学院参加数字经济区块链会议。此次活动汇集了英国最好的区块链人才，政策制定者和商业决策者。 Akropolis创始人Ana Andria将会主持其中的金融科技小组。',
      ko: '영국은행과 HSBC 그리고 바클레이즈 은행읠 비롯한 학계의 인사들과 블록체인 관련 실무자 및 투자자들이 경제 관련 컨퍼런스의 명문인 런던의 임페리얼 컬리지로 모일 예정입니다. 이 행사로 인해 영국 내 블록체인 관련 최고의 인재들과 정책관련자 그리고 기업의사 결정자들이 한 곳에 모이게 될 것입니다. Akropolis의 창립자인 아나 안드리아 씨가 핀테크관련 패널들과 조율할 것입니다.',
    },
    startDate: '03.23.2019',
    image1x: require('./imgs/london.png'),
    image2x: require('./imgs/london@2x.png'),
  },
  {
    eventName: 'Ethereum Meetup March - DAO edition',
    link: 'https://www.meetup.com/Berlin-Ethereum-Meetup/events/259557778/',
    location: 'Berlin',
    description: {
      en: 'Join us at DAO governance meetup at Berlin’s blockchain centre, FullNode. The panel will feature speakers from DAOStack, Aragon’s ecosystem AutarkLabs, Gnosis, InBlock and Akropolis. The panelists will discuss various blockchain governance approaches, with Akropolis focussing on practical examples of collective governance from the African saving circles.',
      vi: 'Tham gia với chúng tôi tại cuộc họp quản trị DAO tại trung tâm blockchain Berlin, FullNode. Bảng điều khiển sẽ có các loa từ DAOStack, Aragon, hệ sinh thái AutarkLabs, Gnosis, InBlock và Akropolis. Các thành viên tham gia hội thảo sẽ thảo luận về các cách tiếp cận quản trị blockchain khác nhau, với Akropolis tập trung vào các ví dụ thực tế về quản trị tập thể từ các nhóm tiết kiệm châu Phi.',
      zh: '请加入我们在柏林区块链中心的去中心化自治小组，该小组将汇聚来自DAOStack，Aragon生态系统AutarkLabs，Gnosis，InBlock和Akropolis的演讲者。小组成员将讨论各种区块链治理方法，其中Akropolis将着重分享非洲储蓄圈的集体治理案例。',
      ko: '베를린의 블록체인센터인 FullNode의 DAO 거버넌스 모임에 참여하세요. DAOStack과 Aragon의 주요 분야내의 AutarkLabs와 Gnosis 및 InBlock 그리고 Akropolis의 강연자들로 구성된 이 패널들은 아프리카 구호단체의 집단 지배 거버넌스의 실제 사례에 초점을 맞춰 Akropolis를 이용한 다양한 블록체인 거버넌스 접근방식에 관하여 논의할 예정입니다.',
    },
    startDate: '03.14.2019',
    image1x: require('./imgs/Berlin3@660w.png'),
    image2x: require('./imgs/Berlin3@1320w.png'),
  },
  {
    eventName: 'ETH Paris',
    link: 'https://ethparis.com/',
    location: 'Paris',
    description: {
      en: 'ETHParis brings together over 350 curious minds, industry experts and companies pushing the way forward in crypto space to collaborate together on decentralized applications using Ethereum. We see it as a great opportunity to catch up with our friends and colleagues from Asure Network, AAVE, Celo, and many others to discuss product-market fit and adoption in crypto industry.',
      vi: 'ETHParis tập hợp hơn 350 bộ óc tò mò, các chuyên gia trong ngành và các công ty thúc đẩy tiến lên trong không gian tiền điện tử để hợp tác cùng nhau trên các ứng dụng phi tập trung sử dụng Ethereum. Chúng tôi xem đây là một cơ hội tuyệt vời để bắt kịp với bạn bè và đồng nghiệp của mình từ Asure Network, AAVE, Celo và nhiều người khác để thảo luận về sự phù hợp với thị trường sản phẩm và việc áp dụng trong ngành công nghiệp tiền điện tử.',
      zh: 'ETHParis汇集了350多名爱好者，业内专家和区块链公司，共同推动加密领域的发展，使用以太坊开发去中心化应用。我们认为这是一个很好的机会，可以与来自Asure Network，AAVE，Celo的众多朋友和同事一起讨论加密货币行业的产品市场契合度和采用率。',
      ko: 'ETHParis에서는 이 업계의 전문가분들과 회사들을 비롯하여 이 분야에 관심이 있으신 350여분이상의 분들과 같이 이더리움을 이용한 분산 프로그램을 위해 함께 협업하여 암호화폐가 한층 더 나아갈 수 있는 기회의 장을 만들었습니다. Asure Network, AAVE, Celo등을 비롯한 많은 회사들의 동료 및 친구들과 함께 암호화폐 산업 내 에서의 제품 시장 적합성에 관해 논의 하여 볼 수 있는 아주 좋은 기회입니다.',
    },
    startDate: '03.08.2019',
    finishDate: '03.10.2019',
    image1x: require('./imgs/Paris@660w.png'),
    image2x: require('./imgs/Paris@1320w.png'),
  },
  {
    eventName: 'ETHcc: Ethereum Community Conference',
    link: 'https://ethcc.io/',
    location: 'Paris',
    description: {
      en: 'EthCC 2019 (Ethereum Community Conference) is the second edition of a series of conferences and workshops that bring together and strengthen the international Ethereum community. EthCC will take place in Paris, on March 5th, 6th, and 7th. Meet us to discuss decentralization, informal financial systems in emerging markets, and our new financial primitive Commitments to Future Cashflows (C2FC).',
      vi: 'EthCC 2019 (Hội nghị cộng đồng Ethereum) là phiên bản thứ hai của một loạt các hội nghị và hội thảo kết hợp và củng cố cộng đồng Ethereum quốc tế. EthCC sẽ diễn ra tại Paris, vào ngày 5, 6 và 7 tháng 3. Gặp gỡ chúng tôi để thảo luận về phân cấp, hệ thống tài chính phi chính thức tại các thị trường mới nổi và các Cam kết tài chính nguyên thủy mới của chúng tôi đối với Dòng tiền trong tương lai (C2FC).',
      zh: 'EthCC 2019（以太坊社区会议）是系列会议和研讨会的第二期，目的是团结并加强国际以太坊社区。 EthCC将于3月5日到7日在巴黎举行。来与我们会面，讨论新兴市场的去中心化，非正规金融体系以及我们的新金融源码C2FC（Commitments to Future Cashflows）。',
      ko: 'EthCC 2019(이더리움 공동체 회의)는 세계각지의 이더리움 커뮤니티를 결집시키는 워크샵이자 다시금 열리게되는 일종의 회의 공동체입니다. EthCC는 3월 5일,6일, 7일 파리에서 개최될 예정입니다. 지방 분권화와 신흥 시장의 비공식 금융 시스템과 저희의 미래의 현금에 따른 새로운 금융 기본계약에 관한 이야기를 저희와 함께 나눠보실 수 있습니다.',
    },
    startDate: '03.05.2019',
    finishDate: '03.07.2019',
    image1x: require('./imgs/Paris2@660w.png'),
    image2x: require('./imgs/Paris2@1320w.png'),
  },
  {
    eventName: 'M-1: Asset Management 3.0',
    link: 'https://m-1.melonport.com/',
    location: 'Zug',
    description: {
      en: 'After laying down the framework for asset management 3.0 at M-0, Melonport team bringing the key ecosystem players together again at M-1 to examine the progress industry has been made in the last year and focus our attention on the years to come. Come to meet Akropolis development team in Zug: we are happy to share our vision and discuss problems that the industry is facing and how we can use Web3 stack to solve those problems.',
      vi: 'Sau khi đặt ra khung cho quản lý tài sản 3.0 tại M-0, nhóm Melonport  tiếp tục đưa những người chơi hệ sinh thái quan trọng với nhau tại M-1 để kiểm tra ngành công nghiệp tiến bộ đã được thực hiện trong năm ngoái và tập trung sự chú ý của chúng tôi vào những năm tới. Hãy đến gặp nhóm phát triển Akropolis ở Zug: chúng tôi rất vui được chia sẻ tầm nhìn của chúng tôi và thảo luận về các vấn đề mà ngành công nghiệp đang phải đối mặt và làm thế nào chúng ta có thể sử dụng ngăn xếp Web3 để giải quyết những vấn đề đó.',
      zh: '在M-0发布资产管理3.0框架后，Melonport团队在M-1再次将重要的生态系统参与者聚集在一起，以审视过去一年的行业进展，并将我们的注意力集中于未来几年。来Zug会见Akropolis开发团队：我们很高兴分享我们的愿景并讨论行业面临的问题，以及我们如何使用Web3堆栈技术来解决这些问题。',
      ko: 'M-0에서 자산 운용관리 3.0의 기틀을 잡은 Melonport팀은 M-1에서 다시금 분야별 핵심 멤버들을 불러모아 지난 한해 동안 발전을 이룬 부분들을 점검하여 향후 발전을 위한 준비에 만전을 기하고 있습니다. Zug 지역의 Akropolis 개발팀을 만나러 오세요. 저희의 비젼을 공유하고 Web3 스택을 이용하여 업계가 직면한 문제들에 관한 해결책에 대하여 논의하여 보시지요',
    },
    startDate: '02.07.2019',
    finishDate: '02.08.2019',
    image1x: require('./imgs/Zug@660w.png'),
    image2x: require('./imgs/Zug@1320w.png'),
  },
  {
    eventName: 'Parity Moscow Meetup: Substrate and Libp2p',
    link: 'https://www.meetup.com/paritytech-moscow/events/256838073/',
    location: 'Moscow',
    description: {
      en: 'Great opportunity to watch presentations and chat with some of the people behind Parity Substrate and Polkadot who are not often in Moscow. The Parity team will speak on Parity Substrate, a framework for quickly creating custom blockchains. The Akropolis team will be there to discuss Polkadot ecosystem development and creation of custom Polkadot parachain to implement tokenized cashflow framework.',
      vi: 'Cơ hội tuyệt vời để xem các bài thuyết trình và trò chuyện với một số người đứng sau Parity Substrate và Polkadot, những người không thường xuyên ở Moscow. Nhóm Parity sẽ nói về Parity Sustrate, một khung giúp nhanh chóng tạo ra các chuỗi khối tùy chỉnh. Nhóm Akropolis sẽ có mặt để thảo luận về việc phát triển hệ sinh thái Polkadot và tạo ra chiếc dù Polkadot tùy chỉnh để thực hiện khuôn khổ dòng tiền được token hóa.',
      zh: '在莫斯科听Parity和Polkadot团队路演，并与他们交谈的绝佳机会！ Parity团队将在Parity Substrate上发表演说，这是一个能让你快速创建自定义区块链的框架。 Akropolis团队也将在那里讨论Polkadot生态系统开发，以及如何实现创建Polkadot侧链来实现代币化的现金流框架。',
      ko: '모스크바에는 자주 방문하지 않는 Parity Substrate와 Polkadot에서 근무 중인 분들과 이야기도 나누고 또한 프레젠테이션도 지켜볼 수 있는 굉장한 기회인 이번 미팅에서 Parity 팀은 신속하게 커스텀 블록체인을 제작할 수 있는 기초분야인 Parity Substrate에 대한 이야기를 할 예정이며 Akropolis 팀은 토큰화 된 현금 흐름의 기초가 되는 커스텀 Polkadot parachain 개발 및 Polkdot의 시스템 개발에 관하여 논의할 예정입니다.',
    },
    startDate: '12.16.2018',
    image1x: require('./imgs/Moscow@660w.png'),
    image2x: require('./imgs/Moscow@1320w.png'),
  },
  {
    eventName: 'Rust Developer Conference',
    link: 'https://rustrush.ru/',
    location: 'Moscow',
    description: {
      en: 'Organizers of the Rust developer conference in Moscow will bring some of the best speakers from the industry: Rust Core Team Members and leading Rust programmers and researchers from Parity, Birfury, Baidu X-Lab, Maidsafe and others. Meet our development team during the conference to discuss Web3, blockchain, high performance and systems programming.',
      vi: 'Các nhà tổ chức của hội nghị nhà phát triển Rust tại Moscow sẽ mang đến một số diễn giả giỏi nhất trong ngành: Các thành viên nhóm Rust Core và các lập trình viên và nhà nghiên cứu hàng đầu của Rust từ Parity, Birfury, Baidu X-Lab, Maidsafe và những người khác. Gặp gỡ nhóm phát triển của chúng tôi trong hội nghị để thảo luận về Web3, blockchain, hiệu suất cao và lập trình hệ thống.',
      zh: '在莫斯科举行的Rust开发者大会主办方将带来业界最优秀的演讲者：Rust核心团队成员以及来自Parity，Birfury，百度X-Lab，Maidsafe的顶尖程序员和研究人员。在会议期间与我们的开发团队会面，讨论Web3，区块链，高性能和系统编程。',
      ko: '모스크바에 위치한 Rust 개발 의회의 주최자들은 Rust Core팀 멤버들과 Parity, Bifury, X-Lab, Maidsafe를 비롯한 여러 회사들내 Rust 프로그래머들과 연구원등 업계 최고의 강연자들을 초청할 예정입니다. Web3와 블록체인 그리고 고성능 시스템의 프로그래밍에 대한 컨퍼런스를 하고 있는 저희의 개발 팀을 만나보실 수 있습니다.',
    },
    startDate: '12.15.2018',
    finishDate: '12.16.2018',
    image1x: require('./imgs/Moscow2@660w.png'),
    image2x: require('./imgs/Moscow2@1320w.png'),
  },
  {
    eventName: 'DevCon 4',
    link: 'https://devcon4.ethereum.org/',
    location: 'Prague',
    description: {
      en: 'DevCon is the main conference for Ethereum builders: designers, UX researchers, smart contract devs, blockchain researchers, client implementers, test engineers, infrastructure operators, community organizers, and even artists in the community.',
      vi: 'DevCon là hội nghị chính dành cho các nhà xây dựng Ethereum: nhà thiết kế, nhà nghiên cứu UX, nhà phát triển hợp đồng thông minh, nhà nghiên cứu blockchain, người triển khai khách hàng, kỹ sư kiểm tra, nhà điều hành cơ sở hạ tầng, nhà tổ chức cộng đồng và thậm chí cả nghệ sĩ trong cộng đồng.',
      zh: 'DevCon是以太坊建设者的主要会议：设计师，用户体验研究人员，智能合约开发者，区块链研究人员，客户实践者，测试工程师，基础设施运营商，社区组织者，甚至还有社区中的艺术家。',
      ko: 'DevCon이란 디자이너분들과 UX 연구원 분들과 스마트 계약관련 개발자분들, 블록체인 연구원들, 클라이언트 사업시행자분들과 테스트 엔지니어 및 인프라 운영자와 지역사회 조직가 및 예술가들로 이루어진 이더리움 개발자들을 위한 주요 회의모임입니다.',
    },
    startDate: '10.30.2018',
    finishDate: '11.02.2018',
    image1x: require('./imgs/Prague@660w.png'),
    image2x: require('./imgs/Prague@1320w.png'),
  },
  {
    eventName: 'Web3 Summit',
    link: 'https://web3summit.com/',
    location: 'Berlin',
    description: {
      en: 'Web3 Summit is organized around a single rallying call: to facilitate a fully functional and user-friendly decentralized web. Every year the devs and researchers working on lower level protocols and others interested in the latest developments in the decentralized web come together for an immersive and collaborative gathering focusing on the Web3 technology stack.',
      vi: 'Hội nghị thượng đỉnh Web3 được tổ chức xung quanh một cuộc gọi biểu tình duy nhất: để tạo điều kiện cho một trang web phi tập trung đầy đủ chức năng và thân thiện với người dùng. Hàng năm, các nhà phát triển và nhà nghiên cứu làm việc trên các giao thức cấp thấp hơn và những người khác quan tâm đến những phát triển mới nhất trong web phi tập trung kết hợp với nhau để tập hợp và nhập vai hợp tác tập trung vào kho công nghệ Web3.',
      zh: 'Web3峰会的召开都围绕着统一的目标：促进功能齐全且用户友好的分布式网络发展。每年，底层协议开发者以及对分布式网络的最新发展感兴趣的人们都会聚集在一起，进行以Web3技术堆栈为重点的沉浸式开发协作。',
      ko: 'Web3 Summit은 완벽히 실용적이면서 쉽게 이용할 수 있는 분산화 웹을 가능케 할 수 있는 단일 랠리 콜을 바탕으로 이루어진 조직이며 매해 낮은 레벨의 프로토콜들을 작업 중인 개발자들과 연구원들 그리고 최근에는 분산적 웹의 발전에 관심을 가진 이들이 함께 모여 다량의 Web3 기술에 중점을 두고 집중 협업을 하고 있습니다.',
    },
    startDate: '10.22.2018',
    finishDate: '10.24.2018',
    image1x: require('./imgs/Berlin@660w.png'),
    image2x: require('./imgs/Berlin@1320w.png'),
  },
  {
    eventName: 'Berlin Blockchain Week',
    link: 'https://blockchainweek.berlin',
    location: 'Berlin',
    description: {
      en: 'Berlin Blockchain Week is a community-organized initiative. It is an agnostic movement based on the premise that self-organization is the backbone of the ecosystem. Berlin Blockchain Week is committed to reduce the noise from the market and focus on education, in order to push mass adoption via providing first hand information about the industry.',
      vi: 'Tuần lễ Blockchain Berlin là một sáng kiến do cộng đồng tổ chức. Đó là một phong trào bất khả tri dựa trên tiền đề rằng tự tổ chức là xương sống của hệ sinh thái. Tuần lễ Blockchain Berlin cam kết giảm tiếng ồn từ thị trường và tập trung vào giáo dục, nhằm thúc đẩy việc áp dụng đại trà thông qua việc cung cấp thông tin đầu tiên về ngành.',
      zh: '柏林区块链周是一项由社区组织的活动，它的前提是自发组织（self-organization）是生态系统的支柱。柏林区块链周致力于减少市场上的噪声并专注于教育用户，通过提供区块链行业的第一手资料来推动其大规模普及。',
      ko: 'Berlin Blockchain Week는 지역사회의 주도로 이루어지며 자율 운용이 산업의 근간이라는 전체를 바탕으로 이루어지는 불가지론적 운동적 성향을 지니고 있습니다. Berlin Blockchain Week에서는 시장의 혼선을 줄이는 것과 동시에 산업에 대해 직접적으로 얻은 정보를 바탕으로 한 대규모의 상용화를 위한 교육적인 부분에 집중하고 있습니다.',
    },
    startDate: '09.05.2018',
    finishDate: '09.11.2018',
    image1x: require('./imgs/Berlin2@660w.png'),
    image2x: require('./imgs/Berlin2@1320w.png'),
  },
  {
    eventName: 'Beyond Blocks Summit Seoul',
    link: 'https://beyondblocks.com/history/beyond-blocks-summit-seoul-korea-2018-july-17-18/',
    location: 'Seoul',
    description: {
      en: 'Beyond Blocks is where financial and business incumbents, fintech start ups, developers and VC investors from Asia will gather together to discuss real world applicability for the finance and business industry.',
      vi: 'Beyond Blocks là nơi các công ty tài chính và kinh doanh, các công ty khởi nghiệp fintech, các nhà phát triển và nhà đầu tư VC từ châu Á sẽ tập hợp lại để thảo luận về khả năng ứng dụng trong thế giới thực cho ngành tài chính và kinh doanh.',
      zh: 'Beyond Blocks是金融和商业从业者，金融科技创业公司，开发者以及亚洲风险投资者共同参与的盛会。与会者将共同商讨金融和商业行业在现实世界中的适用性。',
      ko: 'Beyond Blocks는 금융 및 비즈니스 관련 종사자분들과 핀 테크 관련 스타트업 기업들과 아시아의 개발자 및 VC투자자들이 한자리에 모여 금융과 비즈니스 사업에 실질적인 적용 가능성에 대한 논의를 펼칠 수 있는 모임입니다.',
    },
    startDate: '07.17.2018',
    finishDate: '07.18.2018',
    image1x: require('./imgs/Seoul@660w.png'),
    image2x: require('./imgs/Seoul@1320w.png'),
  },
  {
    eventName: 'BlockShow Europe',
    link: 'https://blockshoweurope.com/',
    location: 'Berlin',
    description: {
      en: 'BlockShow is a major international event for showcasing established Blockchain solutions. If you yearn to gain real insight into the Blockchain, join our events and avail yourself of the opportunity to meet and partner with the world’s key Blockchain value generators. You will get first-hand practical knowledge of how technology has been successfully implemented in different parts of the world and what a dramatic impact it has already had on the markets.',
      vi: 'BlockShow là một sự kiện quốc tế lớn để giới thiệu các giải pháp Blockchain đã được thiết lập. Nếu bạn mong muốn có được cái nhìn sâu sắc thực sự về Blockchain, hãy tham gia các sự kiện của chúng tôi và tận dụng cơ hội gặp gỡ và hợp tác với các công cụ tạo giá trị Blockchain quan trọng trên thế giới. Bạn sẽ có được kiến thức thực tế trực tiếp về cách công nghệ đã được triển khai thành công ở các khu vực khác nhau trên thế giới và tác động mạnh mẽ của nó đến thị trường',
      zh: 'BlockShow是展示现有区块链解决方案的重大国际盛会。如果您渴望真正了解区块链，请加入我们的活动，并利用这个机会与世界上最重要的区块链价值创造者们会面并合作。您将了解到当前区块链技术在世界不同地区成功实施的第一手知识，以及它对市场产生的巨大影响。',
      ko: 'Blockshow는 검증을 거친 블록체인 해결법을 알리는 주요 국제 행사입니다. 블록체인에 관한 깊은 이해를 얻고자 하신다면, 이번 행사에 참가하셔서 세계의 중요한 블록체인 가치 발전을 위해 힘쓰시는 관련자분들과 직접 만나볼 수 있는 기회를 놓치지 마세요. 이번 기회를 통해 세계 곳곳에서 어떻게 기술들이 성공적으로 이용되었는지에 대한 실용적 지식들과 시장경제에 미친 드라마틱한 영향력을 직접 경험해 보실 수 있습니다.',
    },
    startDate: '05.28.2018',
    finishDate: '05.29.2018',
    image1x: require('./imgs/Berlin3@660w.png'),
    image2x: require('./imgs/Berlin3@1320w.png'),
  },
  {
    eventName: 'Consensus 2018',
    link: 'https://www.coindesk.com/events/consensus-2018',
    location: 'New York',
    description: {
      en: 'Consensus 2018 is the 4th annual blockchain technology summit organized by CoinDesk at the New York Hilton Midtown. It will feature 250+ speakers and 4,000+ attendees from the leading industry startups, investors, financial institutions, enterprise tech leaders, and academic and policy groups who are building the foundations of the blockchain and digital currency economy.',
      vi: 'Consensus2018 là hội nghị thượng đỉnh công nghệ blockchain hàng năm lần thứ 4 được tổ chức bởi CoinDesk tại New York Hilton Midtown. Nó sẽ có hơn 250 diễn giả và hơn 4.000 người tham dự từ các công ty khởi nghiệp, nhà đầu tư, tổ chức tài chính, lãnh đạo công nghệ doanh nghiệp và các nhóm chính sách và học thuật đang xây dựng nền tảng của nền kinh tế blockchain và tiền kỹ thuật số.',
      zh: 'Consensus 2018年是CoinDesk在纽约希尔顿中城举办的第四届年度区块链技术峰会。它将邀请250多位演讲者和超过4000名与会者，包括行业领先的创业公司，投资者，金融机构，企业技术领袖以及那些正在构建区块链和数字货币经济基础的学术和政客。',
      ko: '코인데스크(CoinDesk)에서 주최하며 뉴욕 힐튼 미드타운에서 개최될 Consensus 2018은 이번에 4번째로 열리는 정기 블록체인 기술 정상회의입니다. 이번 회의에는 블록 체인 및 디지털 화폐 경제의 기반을 구축하고 있는 업계 내 스타트업 리더들과 투자자 분들 및 금융기관 관련자 분들 그리고 학술 및 정책 그룹 관련자들이 포함된 250분 이상의 연설자들과 4000명의 관련자들이 참여할 예정입니다.',
    },
    startDate: '05.14.2018',
    finishDate: '05.16.2018',
    image1x: require('./imgs/Newyork@660w.png'),
    image2x: require('./imgs/Newyork@1320w.png'),
  },
  {
    eventName: 'ETHEREAL Summit',
    link: 'https://etherealsummit.com/events/ethereal-summit-ny-2018/',
    location: 'New York',
    description: {
      en: 'Ethereal brings futurists, entrepreneurs, investors, media icons, government officials, artists, musicians, and humanitarians for a day of storytelling and knowledge sharing.',
      vi: 'Ethereal mang đến cho các nhà tương lai, doanh nhân, nhà đầu tư, biểu tượng truyền thông, quan chức chính phủ, nghệ sĩ, nhạc sĩ và  nhà nhân văn học một ngày kể chuyện và chia sẻ kiến thức.',
      zh: 'Ethereal邀请到未来学家，企业家，投资者，媒体偶像，政府官员，艺术家，音乐家和人道主义者，进行为期一天的故事和知识分享。',
      ko: 'Ethereal에서는 미래학자분들과 기업가 및 투자자와 미디어에 영향력이 있는 분들 그리고 정부 관료 분들 및 예술가 분들과 음악가 그리고 인도주의 활동가분들을 모시고 하루 동안 그들의 이야기와 정보를 공유할 수 있는 시간을 마련할 예정입니다.',
    },
    startDate: '05.11.2018',
    finishDate: '05.12.2018',
    image1x: require('./imgs/Newyork2@660w.png'),
    image2x: require('./imgs/Newyork2@1320w.png'),
  },
  {
    eventName: 'DApp DEV',
    link: 'http://dappdev.org/consulting',
    location: 'Kyiv',
    description: {
      en: 'DApp DEV Ethereum Conference is a place where developers, designers and professionals will get an opportunity to come together and share knowledge about cutting edge products based on blockchain protocols.',
      vi: 'Hội nghị DApp DEV Ethereum là nơi các nhà phát triển, nhà thiết kế và chuyên gia sẽ có cơ hội gặp gỡ và chia sẻ kiến thức về các sản phẩm tiên tiến dựa trên các giao thức blockchain.',
      zh: 'DApp DEV Ethereum Conference是一个让开发者，设计师和专业人士聚在一起并分享基于区块链协议的顶尖产品知识的地方。',
      ko: 'DApp DEV Ethereum Conference는 개발자분들과 디자이너분들 그리고 전문가들이 한자리에 모여 블록체인 프로토콜을 기반으로 한 최신 제품들에 관련 정보를 공유할 수 있는 기회를 제공할 예정입니다.',
    },
    startDate: '04.16.2018',
    image1x: require('./imgs/Kyiv@660w.png'),
    image2x: require('./imgs/Kyiv@1320w.png'),
  },
  {
    eventName: 'Token 2049',
    link: 'https://www.token2049.com/2018-recap',
    location: 'Hong Kong',
    description: {
      en: 'TOKEN2049 organizes the largest digital asset event in Asia on 20-21 March 2018 in Hong Kongю Meet the pioneers, the early believers, highly influential and established opinion leaders. People from some of the most exciting crypto projects and leading digital asset funds will come to Hong Kong to share their knowledge and stories, providing exceptional insights into the ever-larger growing crypto ecosystem.',
      vi: 'TOKEN2049 tổ chức sự kiện tài sản kỹ thuật số lớn nhất ở châu Á vào ngày 20-21 tháng 3 năm 2018 tại Hồng Kông. Gặp gỡ những người tiên phong, những người tin tưởng sớm, các nhà lãnh đạo quan điểm có ảnh hưởng lớn và vững chắc. Mọi người từ một số dự án tiền điện tử thú vị nhất và các quỹ tài sản kỹ thuật số hàng đầu sẽ đến Hồng Kông để chia sẻ kiến thức và câu chuyện của họ, cung cấp những hiểu biết đặc biệt về hệ sinh thái tiền điện tử ngày càng lớn mạnh.',
      zh: 'TOKEN2049将于2018年3月20日至21日在香港举办，它是亚洲最大的数字资产盛会。人们可以与区块链先驱，早期投资者，极具影响力和知名度的意见领袖会面。最令人激动的加密货币项目和领先的数字资产基金会将来到香港分享他们的知识和故事，为不断成长的加密货币生态系统提供一些洞见。',
      ko: 'TOKEN2049는 2018 년 3 월 20 일부터 21 일까지 홍콩에서 암호화 자산에 관련된 가장 큰 이벤트를 주최합니다. 암호화폐부분의 선구자들과 초기 참여자들 그리고 업계에서 가장 영향력을 인정받은 리더들을 만나보세요. 현재 가장 흥미진진한 암호화폐 관련 프로젝트 및 주요 디지털 자산 펀드를 이끄는 분들이 홍콩을 방문하여 나날이 성장 중인 전반적인 암호화폐 분야에 관한 전망 등에 관한 자신의 지식과 이야기를 공유하는 만남의 장이 될 것입니다.',
    },
    startDate: '03.20.2018',
    finishDate: '03.21.2018',
    image1x: require('./imgs/Hongkong@660w.png'),
    image2x: require('./imgs/Hongkong@1320w.png'),
  },
  {
    eventName: 'SydETH MeetUp',
    link: 'https://www.meetup.com/web3sydney/events/237360206/',
    location: 'Sydney',
    description: {
      en: 'Join our Founder Ana Andria and Security Advisor Bokky Poobah at the first official SydEthereum meetup of 2018. Two panel discussions, individual talks, and great networking. Time to scale up, teach and learn, build dapps and open platforms, collaborate, share the knowledge and love, and enjoy good company.',
      vi: 'Tham gia với người sáng lập Ana Andria và Cố vấn an ninh Bokky Poobah của chúng tôi tại cuộc họp chính thức đầu tiên của SydEthereum năm 2018. Hai cuộc thảo luận, thảo luận cá nhân và kết nối tuyệt vời. Thời gian để mở rộng quy mô, dạy và học, xây dựng dapps và mở nền tảng, hợp tác, chia sẻ kiến thức và tình yêu, và tận hưởng công ty tốt.',
      zh: '来与我们的创始人Ana Andria和安全顾问Bokky Poobah一起参加2018年首次举办的的官方SydEthereum大会吧。这里有两次小组讨论，个人访谈和优质人脉。你可以宣传交际，教学相长，协作开发dapps和开放平台，分享知识和爱，并享受彼此的陪伴。',
      ko: '아크로폴리스의 창립자이신 아나 안드리아씨와 보안 고문이신 보키 푸바씨와 함께하는 2018 첫 공식 SydEthereum 밋업에 참여하세요. 두 분과의 면담 및 개별회담도 나누시고 좋은 분들과 함께하는 좋은 시간이 될 것입니다. 서로 알려주고 배우며 DApps와 오픈 플랫폼을 구성하고 같이 협업하며 좋은 회사들과 지식을 공유하며 한 단계 더 발전해 나갈 기회입니다.',
    },
    startDate: '02.22.2018',
    image1x: require('./imgs/Sydney@660w.png'),
    image2x: require('./imgs/Sydney@1320w.png'),
  },
  {
    eventName: 'Akropolis Blockathon Sydney',
    link: 'https://www.meetup.com/BokkyPooBahs-Ethereum-Workshop/events/247793778/',
    location: 'Sydney',
    description: {
      en: 'Akropolis’ first-ever blockathon will take place at Tyro FinTech Hub in Sydney on February 17. Before the blockathon our Founder, Anastasia Andrianova who is also an Advisor to the Web3 foundation to come along and talk about the implications of building a much more transparent pension system. Join us to hear from her and hack away at some awesome solutions facing the industry.',
      vi: 'Cuộc đua blockchain đầu tiên của Akropolis sẽ diễn ra tại Tyro FinTech Hub ở Sydney vào ngày 17 tháng 2. Trước khi cuộc thi blockchain Người sáng lập của chúng tôi, Anastasia Andrianova, cũng là Cố vấn cho nền tảng Web3 xuất hiện và nói về ý nghĩa của việc xây dựng một sự minh bạch hơn nhiều hệ thống hưu trí. Tham gia với chúng tôi để nghe từ cô ấy và đem về một số giải pháp tuyệt vời mà ngành công nghiệp phải đối mặt.',
      zh: 'Akropolis的第一个区块链马拉松将于2月17日在悉尼的Tyro FinTech Hub举行。在开赛前，我们的创始人及Web3基金会顾问 Anastasia Andrianova将会发表演说。主题是建立更加透明的养老金体系的意义。加入我们，听听她的想法，并为当前的业界难题开发出优秀的解决方案吧！',
      ko: '아크로폴리스의 사상 첫 블록커톤(blockathon)이 2월 17일 시드니에 위치한 타이로 핀테크 허브에서 개최됩니다. 블록커톤(blockathon)을 시작하기에 앞서 Web3 재단의 고문이자 아크로폴리스의 창립자이신 아나스타시아 안드리아노바씨는 더나은 투명한 연금 시스템 구축에 따른 영향력에 대하여 알려주실 예정입니다. 참석하셔서 그녀의 연설도 들으시고 업계가 직면하고 있는 부분에 대한 멋진 해결책을 함께 찾아보는 것은 어떨까요.',
    },
    startDate: '02.17.2018',
    image1x: require('./imgs/Sydney2@660w.png'),
    image2x: require('./imgs/Sydney2@1320w.png'),
  },
];

export default events;
