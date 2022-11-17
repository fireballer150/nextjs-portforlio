import Animation from "./animation";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          안녕하세요 이희수입니다!
          <br className="hidden lg:inline-block" />
        </h1>
        <p className="mb-8 leading-relaxed">
          끈기있는 프론트엔드 개발자 이희수입니다. JS, React중심으로 Wep개발이
          가능한 프론트엔드 개발자 이희수입니다. Redux를 사용한 웹 개발 경험이
          있습니다. 그리고 Next.js를 이용하여 포트폴리오사이트를 배포하였습니다.
          IT 서비스에 대한 직무적인 관심을 갖게되어 프론트엔드 개발자가 되기
          위해, 20주 과정 웹개발 부트캠프인 코드스테이츠를 수료했습니다. 1일
          1코딩 방송을 통해서 과정을 실시간으로 기록하고 공유소통하는 방식으로
          부족한 부분을 보완하고 있습니다.
        </p>
        <div className="flex justify-center">
          <Link href="/projects">
            <a className="btn-project">프로젝트 보러가기</a>
          </Link>
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <Animation />
      </div>
    </>
  );
}
