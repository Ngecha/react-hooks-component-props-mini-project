import React from "react";
import Article from "./Article"

export default function ArticleList({posts}){

    const articleCard = posts.map((paper)=>{
        return(
            <Article
            key={paper.id}
            title={paper.title}
            date={paper.date}
            preview={paper.preview}
            />
        )
    })

return <main>
    {articleCard}
</main>;
}
