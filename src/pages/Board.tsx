import Title from "../ui/Title";

export default function Board() {

  const boardlist: string[] = [
    "공지사항: 새해 이벤트 안내",
    "고객센터 운영시간 변경 안내",
    "서비스 이용 약관 개정 공지",
    "사이트 점검 예정(1/15)",
    "신규 기능 업데이트 안내",
    "커뮤니티 이용 규칙 안내",
    "자주 묻는 질문(FAQ) 정리",
    "고객 감사 쿠폰 지급 안내",
    "보안 강화 조치 완료",
    "회원 등급 정책 변경 안내"
  ];

  return (
    <section>
      <Title bigtitle="커뮤니티" subtitle="열린 마음으로 고객의 소리를 담습니다."></Title>
      <ul className="text-white text-[36px] mx-auto w-[1024px] flex flex-col gap-4 mt-20">
      {
       boardlist.map( (item) => <li className="border-b-2">{item}</li> )
      }
      </ul>
    </section>
  )
}
