import Image from "next/image";
import LauncherDownloadBtn from "./components/LauncherDownloadBtn";
import GameDownloadBtn from "./components/GameDownloadBtn";
import SocialsBtn from "./components/SocialBtns";

export default async function Home() {
  const globalRes = await fetch("https://api.anftown.com/api/global", {
    cache: "no-store",
  });
  const globalData = await globalRes.json();

  return (
    <div
      className="w-screen h-screen flex justify-center items-center bg-[url('/bg.png')] relative overflow-hidden xl:bg-[url('/bg_land.png')]"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Image
        src="/left_char.png"
        alt="left_char"
        className="absolute bottom-0 hidden w-[450px] md:-translate-x-[300px] xl:hidden lg:block 2xl:w-[600px] 2xl:-translate-x-[550px]"
        width={815}
        height={1232}
      />
      <Image
        src="/right_char.png"
        alt="right_char"
        className="absolute bottom-0 hidden w-[300px] md:translate-x-[300px] xl:hidden lg:block 2xl:w-[400px] 2xl:translate-x-[500px]"
        width={522}
        height={1338}
      />
      <Image
        src="/logo.png"
        alt="Logo"
        className="absolute top-[260px] w-[300px] md:w-[600px] md:top-[320px] xl:hidden lg:w-[400px] lg:top-[100px] 2xl:w-[500px] 2xl:top-[200px]"
        width={720}
        height={474}
      />

      <div className="absolute flex flex-col items-center gap-6 bottom-[150px] md:bottom-[250px] lg:bottom-[100px]">
        <p className="font-bold text-xl text-center text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
          Tải xuống miễn phí và bắt đầu trò chơi
        </p>
        <LauncherDownloadBtn url={globalData.data.launcher_download_url} />
        <GameDownloadBtn url={globalData.data.game_download_url} />
        <SocialsBtn
          facebookUrl={globalData.data.fanpage_url}
          discordUrl={globalData.data.discord_url}
          tiktokUrl={globalData.data.tiktok_url}
          youtubeUrl={globalData.data.youtube_url}
        />
      </div>
    </div>
  );
}
