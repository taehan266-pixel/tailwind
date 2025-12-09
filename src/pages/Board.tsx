import { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/16/solid";
import Title from "../ui/Title";

export default function Board() {

  const [action, setAction] = useState<number | null>(null);

  
interface BoardItem {
  subject: string;
  content: string;
}

const boardlist: BoardItem[] = [
  {
    subject: "공지사항: 새해 이벤트 안내",
    content: "새해를 맞아 다양한 혜택과 함께 특별 이벤트가 진행됩니다. 자세한 참여 방법과 일정은 이벤트 페이지를 확인해주세요."
  },
  {
    subject: "고객센터 운영시간 변경 안내",
    content: "서비스 개선을 위해 고객센터 운영시간이 변경됩니다. 변경된 시간은 공지사항을 참고하시기 바랍니다."
  },
  {
    subject: "서비스 이용 약관 개정 공지",
    content: "서비스 운영 정책 변경에 따라 이용 약관이 개정됩니다. 변경된 주요 내용을 확인해 주시기 바랍니다."
  },
  {
    subject: "사이트 점검 예정(1/15)",
    content: "안정적인 서비스 제공을 위한 시스템 점검이 1월 15일 진행될 예정입니다. 점검 시간 동안 일부 기능 이용이 제한될 수 있습니다."
  },
  {
    subject: "신규 기능 업데이트 안내",
    content: "보다 편리한 이용을 위해 새로운 기능이 추가되었습니다. 업데이트된 기능은 도움말 메뉴에서 상세히 확인하실 수 있습니다."
  },
  {
    subject: "커뮤니티 이용 규칙 안내",
    content: "건전한 커뮤니티 운영을 위해 이용 규칙이 정비되었습니다. 모든 이용자분들의 원활한 활동을 위해 규칙 준수를 부탁드립니다."
  },
  {
    subject: "자주 묻는 질문(FAQ) 정리",
    content: "많이 문의 주신 내용을 바탕으로 FAQ를 새롭게 정리했습니다. 궁금한 사항은 FAQ에서 빠르게 확인해보세요."
  },
  {
    subject: "고객 감사 쿠폰 지급 안내",
    content: "항상 서비스를 이용해 주시는 고객 여러분께 감사의 마음을 담아 특별 쿠폰을 지급해드립니다. 마이페이지에서 확인해주세요."
  },
  {
    subject: "보안 강화 조치 완료",
    content: "최근 보안 업데이트가 적용되어 서비스 전반의 안정성이 향상되었습니다. 앞으로도 안전한 서비스 제공을 위해 노력하겠습니다."
  },
  {
    subject: "회원 등급 정책 변경 안내",
    content: "회원 등급 산정 기준이 변경됩니다. 변경된 정책은 등급 안내 페이지에서 자세히 확인하실 수 있습니다."
  }
];

  return (
    <section>
      <Title bigtitle="커뮤니티" subtitle="열린 마음으로 고객의 소리를 담습니다."></Title>
      <ul className="text-white text-[36px] mx-auto w-[1024px] flex flex-col gap-4 mt-20">
      {
       boardlist.map( (item, idx ) => <li className={ `${ action !== idx && "border-b-2" } ` } key={idx}>
              <h3 className={`text-2x1 ${ action === idx && "font-bold" } mb-2
              flex justify-between items-center`} 
              onClick={ ()=>{ setAction(action === idx ? null : idx); } } > 
              
              {item.subject}

            <div className="flex p-2">
              {
                action === idx ? 
                <ChevronUpIcon className="w-[25px] h-[25px]"></ChevronUpIcon> :
                <ChevronDownIcon className="w-[25px] h-[25px]"></ChevronDownIcon>
              }
            
            </div>

               </h3>
              {
                action === idx && <p className="text-xl p-5 bg-gray-800">{item.content}</p>
              }
        </li> )
      }
      </ul>
    </section>
  )
}
