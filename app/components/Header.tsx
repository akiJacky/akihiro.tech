import { ModeToggle } from "./ModeToggle";
import Link from "next/link"; // next/link をインポート

export function Header() {
  return (
    <header className="flex justify-between items-center p-4 hsl(var(--background)) dark:hsl(var(--foreground));">
      <div className="flex items-center">
        {/* 画像を <Link> コンポーネントで囲んで、クリックでトップページに遷移 */}
        <Link href="/" className="block">
          <img
            src="/akiJacky_black.png"
            alt="Picture of the author"
            className="w-24 dark:hidden" // ライトモード時に表示
          />
          <img
            src="/akiJacky_white.png"
            alt="Picture of the author"
            className="w-24 hidden dark:block" // ダークモード時に表示
          />
        </Link>
      </div>
      <div className="flex items-center space-x-4">
        <ModeToggle /> {/* モード切り替えボタン */}
      </div>
    </header>
  );
}
