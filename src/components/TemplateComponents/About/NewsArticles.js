import React from "react"
import styled from "styled-components"
import {
  standardWrapper,
  B2DarkGrey,
  H2CoolGrey,
  colors,
} from "../../../styles/helpers"

const NewsArticlesSection = styled.div`
  margin-bottom: 4rem;

  .wrapper {
    ${standardWrapper};
  }

  .newArtTitle {
    width: 100%;
    margin-bottom: 4rem;

    h2 {
      ${H2CoolGrey}
    }
  }
`

const LinkItem = styled.div`
  width: 100%;

  p,
  a {
    ${B2DarkGrey};
    margin-bottom: 1rem;
  }

  a {
    text-decoration: underline;

    &:hover {
      color: ${colors.colorPrimary};
    }
  }
`

const NewsArticles = ({ newsArticles }) => {
  return (
    <NewsArticlesSection>
      <div className="wrapper">
        <div className="newArtTitle">
          <h2>News and articles that feature my work…</h2>
        </div>
        {newsArticles.acf._afr_news_articles.map((link, index) => {
          return (
            <LinkItem key={index}>
              <p>
                <span>{link.content}</span> -{" "}
                <a target="_blank" rel="noopener noreferrer" href={link.url}>
                  {link.link_text}
                </a>
              </p>
            </LinkItem>
          )
        })}
      </div>
    </NewsArticlesSection>
  )
}

export default NewsArticles
