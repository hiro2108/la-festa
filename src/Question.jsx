const Question = () => {
    return (
        <div className="accordion">
            <details>
                <summary className="question"><span>Q. 14:00〜18:00は営業していますか？</span><img src="./images/vector.svg" alt="" /></summary>
                <p className="answer">A. 14:00〜18:00は営業時間外となっております。なお、当時間内のお電話は受け付けております。</p>
            </details>
            <hr />
            <details>
                <summary className="question"><span>Q. 来店時はドレスコード必須ですか？</span><img src="./images/vector.svg" alt="" /></summary>
                <p className="answer">A. 来店時のドレスコードは必須ではありません。ただ、他のお客様をご尊重いただき、最低限清潔感のある服装でお越しください</p>
            </details>
            <hr />
            <details>
                <summary className="question"><span>Q. 食べ残しは必ず持ち帰る必要がありますか？</span><img src="./images/vector.svg" alt="" /></summary>
                <p className="answer">A. 食べ残しのお持ち帰りは必須ではありません。提供する料理の中には、長時間の保存が難しいものもあります。お持ち帰り後、できるだけ早めにお召し上がりいただける際のみ、お持ち帰りいただければと思います。</p>
            </details>
            <hr />
            <details>
                <summary className="question"><span>Q. 喫煙可能ですか？</span><img src="./images/vector.svg" alt="" /></summary>
                <p className="answer">A. 当店は電子タバコ含め、全席禁煙となっております。あらかじめご了承ください。</p>
            </details>
        </div>
    )
}

export default Question
