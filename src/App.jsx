import { useRef, useState } from 'react'
import Overview from './Overview';
import './reset.css'
import './App.css'
import News from './News';
import Question from './Question';
import { useMediaQuery } from 'react-responsive'
import Menu from './Menu';
import ToggleButton from './ToggleButton';


function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const faqCategoryRef = useRef(null);
  const shopCategoryRef = useRef(null);
  const isDesktop = useMediaQuery({ query: '(min-width: 767px)' })
  const handleMenuButtonClick = () => {
    setMenuOpen(!menuOpen);
  }

  const handleRecruitClick = () => {
    faqCategoryRef.current.value = "recruit";
  }

  return (
    <>
      <header>
        <h1><a href="#"><img src="./images/lafesta.webp" alt="イタリアンレストランLa Festa" /></a></h1>
        {isDesktop && <Menu isDesktop={isDesktop} />}
        <ToggleButton />
        <div className="header-right">
          <button className="reserveButton">
            <img src="./images/time.svg" alt="" />
            <span>予約</span>
          </button>
          <button className="menuButton" onClick={handleMenuButtonClick}>
            <img src="./images/menu.svg" alt="menu" />
          </button>
        </div>
        <div className={`menu ${menuOpen ? 'open' : ''}`}>
          <button className="closeButton" onClick={handleMenuButtonClick}>
            ✕
          </button>
          <Menu isDesktop={isDesktop} />
        </div>
        <a href="#" className='toTop'>
          <img src="./images/toTop.svg" alt="ページ上部に戻る" />
        </a>
      </header>
      <main>
        <div className="main-inner">
          <div className="fv">
            <img className='fv-img' src="./images/kv.webp" alt="" />
            <p className="fv-copy">
              イタリアの食の冒険へと、<br className='sp-only' />私たちシェフがご案内します。
            </p>
          </div>
          <section className="concept" id='concept'>
            <h2>コンセプト</h2>
            <p>イタリアンレストラン『La Festa』は、イタリアの古き良き食文化と、先進的な価値観を取り入れたイタリアンレストランです。<br />
              本場イタリアで5年の修行を積んだシェフが、2013年に開業しました。<br />
              こだわりのキッチンで、最高の食材を、熟練のスキルを持ったシェフ達が心を込めて調理しています。<br />
              内装は、歴史的建造物が立ち並ぶイタリアのミラノを彷彿とさせる雰囲気。都会の喧騒の中で、ミラノの美しい雰囲気を感じつつ、優雅なひと時をお過ごしください。</p>
          </section>
          <section className="news" id='news'>
            <h2>更新情報</h2>
            <News />
          </section>
          <section className="dinner" id='dinner'>
            <h2>ディナー<span className="">（18:00〜23:00 LO 22:30）</span></h2>
            <div className="dinner-menu">
              <div className="dinner-menu-text">
                <h3>自家製窯で焼いた特性ピザ</h3>
                <p>『La festa』自家製の特性石窯で焼き上げ、イタリアの伝統的な味に当店独自のテイスティングを加えた特別なピザです。<br />
                  外側はよりクリスピーに、内側はよりふんわりと、他では味わえないスモーキーな味わいに仕上がっています。<br />
                  生地が膨らみ黄金色に輝き、チーズがとろとろに溶け、一口食べるごとに風味が溢れるピザをお楽しみください。</p>
              </div>
              <img src="./images/pizza.webp" alt="自家製窯で焼いた特性ピザ" />
            </div>
            <div className="dinner-menu">
              <div className="dinner-menu-text">
                <h3>定番ミネストローネ</h3>
                <p>開店当初から、シーズン通して変わらぬ味を維持する『La Festa』の定番ミネストローネです。ご堪能できます。<br />完熟トマト、みずみずしいパプリカ、甘みのある玉ねぎは契約農家直送です。<br />これらの新鮮な野菜の旨味を最大限に引き出すため、時間をかけてじっくりと煮込んでいます。</p>
              </div>
              <img src="./images/minestrone.webp" alt="定番ミネストローネ" />
            </div>
            <div className="dinner-menu">
              <div className="dinner-menu-text">
                <h3>ワイン</h3>
                <p>当店で扱うワインは、全てシェフ自ら現地で試飲し、納得のいくものだけを厳選しております。<br />定番の銘柄から、日本ではなかなか手に入らない希少なものまで、幅広くご用意しておりますので。<br />お料理との相性はもちろんのこと、お客様の好みに合わせてワインをペアリングすることも可能です。<br />お客様がお気に入りのワインと出会っていただけることを願っています。</p>
              </div>
              <img src="./images/wine.webp" alt="ワイン" />
            </div>
            <a href="#" className="link"><span>ディナメニューを詳しく見る</span><img src="./images/link.svg" alt="" /></a>
          </section>
          <section className="lunch" id='lunch'>
            <h2>ランチ<span className="">（11:00〜14:00 LO 13:00）</span></h2>
            <p>リーズナブルなお値段で、『La Festa』の料理をお楽しみいただけます。<br />
              おひとり様からでもお気軽に来店しやすいよう、カウンター席に仕切りを設けています。<br />
              ランチ帯もお酒の提供を行っています。<br />
              お手軽な贅沢時間をゆっくりとお過ごしください。</p>
            <h3>日替わりイタリアンランチ</h3>
            <div className="lunch-images">
              <img src="./images/lunch1.webp" alt="" />
              <img src="./images/lunch3.webp" alt="" />
              <img src="./images/lunch4.webp" alt="" />
              <img src="./images/lunch5.webp" alt="" />
              <img src="./images/lunch2-1.webp" alt="" />
              <img src="./images/lunch2-2.webp" alt="" />
              <img src="./images/lunch2-3.webp" alt="" />
              <img src="./images/lunch2-4.webp" alt="" />
            </div>
            <a href="#" className='link'><span>ランチメニューを詳しく観る</span><img src="./images/link.svg" alt="" /></a>
          </section>
          <section className="environment" id='environment'>
            <h2 className='h2-green'>環境への取り組み</h2>
            <p>イタリアでは環境問題への関心が高く、特に食に関しては高い意識を持った人が多いです。BIOや生産者認証のある食材、小規模生産者からの購買を心がける、食材を無駄にしない『Zero
              waste』が注目されています。<br />
              『La Festa』もそれに共感し、環境配慮に努めています。</p>
            <div className="environment-actions">
              <div className="environment-action">
                <h3 className='h3-green'>エコフレンドリーな水曜日</h3>
                <p>『La Festa』では毎週水曜日をエコフレンドリーな日として、牛肉の提供を停止し、植物性由来を食材を中心に提供しています。水曜日ならではの特別なメニューをお楽しみください。</p>
                <a href="#" className='link'><span>水曜日限定のメニューはこちら</span><img src="./images/link.svg" alt="" /></a>
                <img src="./images/vegetable.webp" alt="毎週水曜日は植物性由来の食品を中心に提供しています。" />
              </div>
              <div className="environment-action">
                <h3 className='h3-green'>食べ残しのお持ち帰り推奨</h3>
                <p>外食産業における食べ残しによるフードロスは相当量を占めています。当店では、お持ち帰り用の容器をご用意しています。</p>
                <p><small>※持ち帰り食中毒などのリスクを伴います。自己責任でお願いいたします。また、お持ち帰りいただいた料理はできるだけ早くお召し上がりください。</small></p>
                <img src="./images/takeaway.webp" alt="食べ残し防止のために、お持ち帰り用容器を提供しています。" />
              </div>
              <div className="environment-action">
                <h3 className='h3-green'>仕込み料理の廃棄対策</h3>
                <p>『La Festa』は売れ残った料理を、ユーザーがお得に食べられるサービス『TABETE』を導入しています。
                  『TABETE』経由で料理をご注文いただいた場合、通常の約4割引で料理を提供させていただきます。</p>
                <a href="#" target="_blank" rel="noreferrer noopener" className='link'><span>『TABETE』について詳しく見る</span><img src="./images/blank.svg" alt="" /></a>
                <img src="./images/tabete.webp" alt="TABETE" />
              </div>
            </div>
          </section>
          <section className="chefs" id="chefs">
            <h2>シェフ達</h2>
            <p>各店舗に経験実力豊富なシェフが心を込めて調理しています。</p>
            <div className="chefs-main">
              <div className="chef-main-picture">
                <h3>新宿本店オーナーシェフ<br />北条 剛</h3>
                <img src="./images/tsuyoshi.webp" alt="" />
              </div>
              <div className="chefs-main-text">
                <p className='chefs-message'>20代の頃、夢を追いかけてイタリアへ渡り、5年間の料理修行に励みました。<br />近年、「美味しい」という言葉の意味合いは多様化しています。味覚はもちろん、食材の背景や環境への配慮なども重要です。<br />飽食の時代、東京という激戦区で、お客様に「また来たい」と思ってもらえるような食体験を提供できるよう、日々努力しています。<br />私のこだわりは、美味しい料理とお客様の満足です。常に新しいことに挑戦し続けながら、伝統も大切にしています。<br />この店を訪れた皆様に、心からのおもてなしと、忘れられない食体験をお届けしたいと思っています。</p>
                <div className='chef-profile'>
                  <h4>profile</h4>
                  <p>1977年長野県生まれ。中学時代、イタリア旅行の際食べた料理に感銘を受け、料理人の道を志す。1997年イタリアに渡り、で料理を学び、伝統的な調理法と革新的なアイデアを融合させた料理を学ぶ。2003年に帰国後、都内の3つ星レストラン『ラ・ステラ』でキッチン担当として腕を磨く。2008年に独立し、故郷である長野でレストラン『リストランテ イル・ソーニョ』を開業。2012年、後継者に店を譲り、2013年に新宿に『La Festa』をオープン。2017年に国際的料理コンテスト『クチーナ・デル・モンド』で優勝。</p>
                </div>
              </div>
            </div>
            <div className="chefs-sub">
              <div className="chef">
                <h3>池袋店オーナーシェフ<br />藤川 真琴</h3>
                <img src="./images/makoto.webp" alt="" />
                <div className='chef-profile'>
                  <h4>profile</h4>
                  <p>1984年栃木県生まれ。高校卒業後、都内の料理専門学校でイタリアン料理と店舗経営に関する知識を学ぶ。『ホテルレストラン・グランシエル』、『トラットリア・ヴェネツィア』を経て、2012年に『リストランテ・イル・ケ・カンタ』で料理長を務める。2018年に『La Festa池袋店』のオーナシェフに就任。『La Festa』の多店舗展開に貢献する傍ら、料理教室や講演活動など幅広く活動中。</p>
                </div>
              </div>
              <div className="chef">
                <h3>錦糸町店オーナーシェフ<br />Sofia Russo</h3>
                <img src="./images/russo.webp" alt="" />
                <div className='chef-profile'>
                  <h4>profile</h4>
                  <p>1991年ローマ生まれ。幼少期から料理に親しみ、家族や友人に料理を振る舞う傍ら。日本のポップカルチャーに興味を持ち、大学では日本語を専攻。2015年から来日し、ローマ在住時に知り合った、日本でイタリアン料理店を営む友人のもとで5年間修行を積む。2020年、新たな挑戦を求め、『La Festa錦糸町店』のオープニングスタッフとして厨房に立つ。本場イタリアで培った技と感性を活かしつつ、日本人の好みに合わせたテイスティングを得意とする。</p>
                </div>
              </div>
            </div>
          </section>
          <section className="overview" id='overview'>
            <h2>店舗概要</h2>
            <Overview isDesktop={isDesktop} />
          </section>
          <section className="questionSection" id='questionSection'>
            <h2>よくあるご質問</h2>
            <Question />
          </section>
          <section className="recruit" id='recruit'>
            <h2>リクルート</h2>
            <p>『La・Festa』は、ホールスタッフとキッチンスタッフを募集しています。<br />
              当レストランは、ホールもキッチンも、妥協のないサービス提供を心掛けています。<br />
              高いレベルのサービスを追求する仲間と共に切磋琢磨し、自身のスキルを磨くことができます。<br />
              成長意欲のある方には、責任ある仕事を任せることで、更なるキャリアアップの機会を提供します。<br />
              お客様へのサービス精神と高いホスピタリティを備え、常に最高の体験を提供する向上心を持つ方は、ぜひお問い合わせください。</p>
            <p className='link'><a href='#faq' onClick={handleRecruitClick}>リクルートに関するお問い合わせはこちら</a></p>
            <img src="./images/recruit.webp" alt="ホールスタッフとキッチンスタッフを募集しています。" />
          </section>
          <section className="instagram" id='instagram'>
            <h2>Instagram</h2>
            <div className="instagram-posts">
              <a href="#"><img src="./images/instagram-fig.webp" alt="" className="instagram-img" /></a>
              <a href="#"><img src="./images/instagram-sweets.webp" alt="" className="instagram-img" /></a>
              <a href="#"><img src="./images/instagram-pasta.webp" alt="" className="instagram-img" /></a>
              <a href="#"><img src="./images/instagram-windmill.webp" alt="" className="instagram-img" /></a>
              <a href="#"><img src="./images/instagram-cow.webp" alt="" className="instagram-img" /></a>
              <a href="#"><img src="./images/instagram-arrangementWork.webp" alt="" className="instagram-img" /></a>
            </div>
            <a href="#" className="instagram-account" target="_blank" rel="noreferrer noopener">
              <p>@lafesta_italian</p><img src="./images/instagram.webp" alt="instagram" />
            </a>
          </section>
          <section className="faq" id='faq'>
            <h2>お問い合わせ</h2>
            <form action="your_form_action.php" method="post">
              <div className="form-group">
                <label htmlFor="category">お問い合わせカテゴリ</label>
                <select ref={faqCategoryRef} id="category" name="category" className='category' required>
                  <option value="reservation">ご予約について</option>
                  <option value="feedback">ご感想</option>
                  <option value="food">料理</option>
                  <option value="beverage">ビバレッジ</option>
                  <option value="interior">店内</option>
                  <option value="environment">環境への取り組み</option>
                  <option value="payment">お支払い</option>
                  <option value="lost_and_found">お忘れ物</option>
                  <option value="recruit">リクルート</option>
                  <option value="other">その他</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="store">店舗</label>
                <select ref={shopCategoryRef} id="store" name="store" className='store'>
                  <option value="">選択してください</option>
                  <option value="shinjuku">新宿本店</option>
                  <option value="ikebukuro">池袋店</option>
                  <option value="kinshichoo">錦糸町店</option>
                </select>
              </div>
              <div className="form-group">
                <textarea id="content" name="content" className='content' rows="10" placeholder="こちらにお問い合わせ内容を入力してください。"
                  required></textarea>
              </div>
              <button type="submit">送信</button>
            </form>
          </section>
        </div >
      </main >
      <footer>
        <div className="footer-inner">
          <div className="footer-top">
            <div className="footer-logoWrap"><img src="./images/lafesta.webp" alt="イタリアンレストランLa Festa" /></div>
            <button className="reserveButton reserveButton--footer">
              <img src="./images/time.svg" alt="" />
              <span>ご予約</span>
            </button>
          </div>
          <Menu isDesktop={isDesktop} />
        </div>
        <p className='copy'><small>※このWebサイトはフィクションです</small></p>
      </footer>
    </>
  )
}

export default App
