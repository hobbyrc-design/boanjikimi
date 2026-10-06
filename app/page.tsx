// 보안지킴이 첫 화면 (DESIGN.md 2.1의 ①②③⑫ 영역)
// 입력창과 판정 결과(④~⑪)는 PLAN 작업 14~17에서 추가한다.
export default function Home() {
  return (
    <div className="flex flex-1 justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex w-full max-w-2xl flex-col gap-8 bg-white px-6 py-16 sm:px-12 dark:bg-zinc-950">
        {/* ① 제목과 ② 한 줄 소개 */}
        <header className="flex flex-col gap-3">
          <h1 className="text-4xl font-bold tracking-tight text-black sm:text-5xl dark:text-zinc-50">
            보안지킴이
          </h1>
          <p className="text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            의심스러운 메일·문자를 붙여넣으면 위험한지 알려드립니다.
          </p>
        </header>

        {/* ③ 경고 문구: 무엇을 넣으면 안 되는지 항상 보여준다 */}
        <section
          role="note"
          className="rounded-lg border border-amber-300 bg-amber-50 px-4 py-3 text-amber-900 dark:border-amber-700 dark:bg-amber-950 dark:text-amber-200"
        >
          <p className="font-semibold">⚠ 입력하지 마세요</p>
          <p className="mt-1 leading-7">
            비밀·대외비 및 개인정보, 부대 정보는 입력하지 마세요.
          </p>
        </section>

        {/* 판정 기능이 아직 없음을 정직하게 알린다 */}
        <section className="rounded-lg border border-dashed border-zinc-300 px-4 py-6 text-center text-zinc-500 dark:border-zinc-700 dark:text-zinc-400">
          판정 기능을 준비하고 있습니다.
        </section>

        {/* ⑫ 하단 안내 */}
        <footer className="border-t border-zinc-200 pt-6 text-sm leading-6 text-zinc-500 dark:border-zinc-800 dark:text-zinc-400">
          교육·시연용 서비스입니다. 의심되면 소속 정보보호 담당자에게 문의하세요.
        </footer>
      </main>
    </div>
  );
}
