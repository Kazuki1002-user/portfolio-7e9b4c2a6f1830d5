// 文章・YouTube URL・画像をここで差し替えます。空のURLは「準備中」として表示します。
// YouTube例: https://www.youtube.com/watch?v=XXXXXXXXXXX / https://youtu.be/XXXXXXXXXXX
window.PORTFOLIO = {
  name: '', // 公開してよい名前を設定。空欄なら表示しません。
  intro: '本サイトでは、エントリーシートに記載した研究・課外活動について、文章だけでは伝わりにくい取り組みの内容を、動画や図を用いて視覚的に紹介しています。',
  research: {
    title: '布型ロボティックスーツを用いたスポーツ遠隔動作誘導システム',
    summary: '布型ロボティックスーツを用いて、スポーツにおける遠隔での動作誘導に取り組んでいます。現在のシステムと、将来実現を目指す遠隔指導体験を紹介します。',
    video: {url: 'https://youtu.be/WN0vo--czoU', title: 'MR技術を用いた遠隔動作誘導システム', description: '空圧制御器・モーションキャプチャ・VRデバイスと自らが提案した触覚提示手法を統合し開発'},
    figures: [
      {title: '現在のMR遠隔動作誘導システムの概念図', status: '現在', src: 'assets/image(20261101-144942).png', alt: '現在のシステムのコンセプト図', description: ''},
      {title: '将来目指す遠隔指導体験', status: '将来構想', src: 'assets/image(20261101-144721).png', alt: '将来目指す遠隔指導体験の構想図', description: 'スーツとMR技術で、対面のようにお互いにインタラクトできるシステムを目指しています。'}
    ]
  },
  band: {
    title: '考案したライブ演出補足',
    summary: '糸電話を用いた演出と、人力逆再生の演出。ライブでの表現を工夫した、2つの取り組みを紹介します。',
    telephone: {
      description: '糸電話をライブの演出に取り入れた取り組みです。観客は音楽を完成させるために紙コップに耳を当てなければなりません。',
      video: {url: 'https://youtu.be/W82vxRYh3gU', title: '糸電話を用いた演出｜実演動画', description: 'レテ　Youtubeチャンネルより抜粋'}
    },
    reverse: {
      description: '人力で逆再生を表現するライブ演出です。通常演奏と人力逆再生の2本を、それぞれのプレーヤーで比較できます。',
      videos: [
        {url: 'https://youtu.be/TCUUJmZI2o0', title: '通常演奏', description: '通常の演奏です。（曲名：習作ⅰより）'},
        {url: 'https://youtu.be/P6ELbDqq5lk', title: '人力逆再生', description: '人力逆再生の映像です。少しわかりにくいですが楽譜をそのまま逆に読んで演奏をしています。'}
      ]
    }
  },
  game: {
    title: 'The Chess',
    summary: 'LLMを用いた、駒との対話で進めるチェスゲームです。駒が移動を拒否したときは、性格や懸念に合わせて説得します。自然な音声会話とチェスを組み合わせる体験を、個人で試作・開発しています。',
    video: {url: 'https://youtu.be/UYayWM0zTTs', title: '個人製作ゲームトレーラー', description: 'ポイント：AIが説得の内容を「論理・感情・関係性」の3軸で評価し、駒の性格に応じて評価軸の重みづけを変化させています'}
  }
};

