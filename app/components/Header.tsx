import { ModeToggle } from "./ModeToggle";

export function Header() {
  return (
    <header className="flex justify-between items-center p-4 hsl(var(--background)) dark:hsl(var(--foreground));">
      <div className="flex items-center">
        {/* 画像の切り替え */}
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
      </div>
      <div className="flex items-center space-x-4">
        <ModeToggle /> {/* モード切り替えボタン */}
      </div>
    </header>
  );
}
