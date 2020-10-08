import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import styled from "styled-components"

import {
  standardWrapper,
  B1DarkGrey,
  colors,
  H1DarkGrey,
  H2DarkGrey,
} from "../styles/helpers"
import { Link } from "gatsby"

const TermsConditionsPageStyled = styled.div`
  ${standardWrapper};
  margin-top: 10rem;
  margin-bottom: 5rem;

  h1 {
    ${H1DarkGrey};
    width: 100%;
  }

  h2 {
    ${H2DarkGrey};
    width: 100%;
  }

  a {
    color: ${colors.colorSecondary};
  }

  p,
  ul,
  li {
    ${B1DarkGrey};
  }

  ul {
    margin-bottom: 5rem;
  }

  li {
    ${B1DarkGrey};
    position: relative;
    margin-bottom: 2rem;
    padding-left: 1.5rem;

    &::before {
      display: block;
      position: absolute;
      top: 1.05rem;
      left: 0;
      width: 1rem;
      height: 1rem;
      border-radius: 50%;
      background-color: ${colors.colorSecondary};
      content: "";
    }
  }
`

const TermsConditionsPage = props => {
  const location = props.location
  return (
    <Layout location={location}>
      <SEO
        title="Terms and Conditions - Airdrie Furniture Revival"
        description="Protecting your personal information Your privacy is important to us. It is Airdrie Furniture Revival policy to respect your privacy regarding any information we may collect while operating our website."
        location={props.location.pathname}
      />
      <TermsConditionsPageStyled>
        <div>
          <h1>Terms and Conditions</h1>
          <p>Welcome to Airdrie Furniture Revival!</p>
          <p>
            These terms and conditions outline the rules and regulations for the
            use of Airdrie Furniture Revival&#8217;s Website, located at
            shop.airdriefurniturerevival.ca.
          </p>
          <p>
            By accessing this website we assume you accept these terms and
            conditions. Do not continue to use Airdrie Furniture Revival if you
            do not agree to take all of the terms and conditions stated on this
            page
          </p>
          <p>
            The following terminology applies to these Terms and Conditions,
            Privacy Statement and Disclaimer Notice and all Agreements:
            &#8220;Client&#8221;, &#8220;You&#8221; and &#8220;Your&#8221;
            refers to you, the person log on this website and compliant to the
            Company’s terms and conditions. &#8220;The Company&#8221;,
            &#8220;Ourselves&#8221;, &#8220;We&#8221;, &#8220;Our&#8221; and
            &#8220;Us&#8221;, refers to our Company. &#8220;Party&#8221;,
            &#8220;Parties&#8221;, or &#8220;Us&#8221;, refers to both the
            Client and ourselves. All terms refer to the offer, acceptance and
            consideration of payment necessary to undertake the process of our
            assistance to the Client in the most appropriate manner for the
            express purpose of meeting the Client’s needs in respect of
            provision of the Company’s stated services, in accordance with and
            subject to, prevailing law of Canada. Any use of the above
            terminology or other words in the singular, plural, capitalization
            and/or he/she or they, are taken as interchangeable and therefore as
            referring to same.
          </p>
          <h2>Cookies</h2>
          <p>
            We employ the use of cookies. By accessing Airdrie Furniture Revival
            , you agreed to use cookies in agreement with the Airdrie Furniture
            Revival&#8217;s Privacy Policy.
          </p>
          <p>
            Most interactive websites use cookies to let us retrieve the user’s
            details for each visit. Cookies are used by our website to enable
            the functionality of certain areas to make it easier for people
            visiting our website. Some of our affiliate/advertising partners may
            also use cookies.
          </p>
          <h2>License</h2>
          <p>
            Unless otherwise stated, Airdrie Furniture Revival and/or its
            licensors own the intellectual property rights for all material on
            Airdrie Furniture Revival . All intellectual property rights are
            reserved. You may access this from Airdrie Furniture Revival for
            your own personal use subjected to restrictions set in these terms
            and conditions.
          </p>
          <p>You must not:</p>
          <p>Republish material from Airdrie Furniture Revival</p>
          <p>
            Sell, rent or sub-license material from Airdrie Furniture Revival
          </p>
          <p>
            Reproduce, duplicate or copy material from Airdrie Furniture Revival
          </p>
          <p>Redistribute content from Airdrie Furniture Revival</p>
          <p>
            This Agreement shall begin on the date hereof. Our Terms and
            Conditions were created with the help of the Terms And Conditions
            Generator and the Privacy Policy Generator.
          </p>
          <p>
            Parts of this website offer an opportunity for users to post and
            exchange opinions and information in certain areas of the website.
            Airdrie Furniture Revival does not filter, edit, publish or review
            Comments prior to their presence on the website. Comments do not
            reflect the views and opinions of Airdrie Furniture Revival, its
            agents and/or affiliates. Comments reflect the views and opinions of
            the person who post their views and opinions. To the extent
            permitted by applicable laws, Airdrie Furniture Revival shall not be
            liable for the Comments or for any liability, damages or expenses
            caused and/or suffered as a result of any use of and/or posting of
            and/or appearance of the Comments on this website.
          </p>
          <p>
            Airdrie Furniture Revival reserves the right to monitor all Comments
            and to remove any Comments which can be considered inappropriate,
            offensive or causes breach of these Terms and Conditions.
          </p>
          <p>You warrant and represent that:</p>
          <p>
            You are entitled to post the Comments on our website and have all
            necessary licenses and consents to do so;
          </p>
          <p>
            The Comments do not invade any intellectual property right,
            including without limitation copyright, patent or trademark of any
            third party;
          </p>
          <p>
            The Comments do not contain any defamatory, libelous, offensive,
            indecent or otherwise unlawful material which is an invasion of
            privacy
          </p>
          <p>
            The Comments will not be used to solicit or promote business or
            custom or present commercial activities or unlawful activity.
          </p>
          <p>
            You hereby grant Airdrie Furniture Revival a non-exclusive license
            to use, reproduce, edit and authorize others to use, reproduce and
            edit any of your Comments in any and all forms, formats or media.
          </p>
          <p>Hyperlinking to our Content</p>
          <p>
            The following organizations may link to our Website without prior
            written approval:
          </p>
          <p>Government agencies;</p>
          <p>Search engines;</p>
          <p>News organizations;</p>
          <p>
            Online directory distributors may link to our Website in the same
            manner as they hyperlink to the Websites of other listed businesses;
            and
          </p>
          <p>
            System wide Accredited Businesses except soliciting non-profit
            organizations, charity shopping malls, and charity fundraising
            groups which may not hyperlink to our Web site.
          </p>
          <p>
            These organizations may link to our home page, to publications or to
            other Website information so long as the link: (a) is not in any way
            deceptive; (b) does not falsely imply sponsorship, endorsement or
            approval of the linking party and its products and/or services; and
            (c) fits within the context of the linking party’s site.
          </p>
          <p>
            We may consider and approve other link requests from the following
            types of organizations:
          </p>
          <p>commonly-known consumer and/or business information sources;</p>
          <p>dot.com community sites;</p>
          <p>associations or other groups representing charities;</p>
          <p>online directory distributors;</p>
          <p>internet portals;</p>
          <p>accounting, law and consulting firms; and</p>
          <p>educational institutions and trade associations.</p>
          <p>
            We will approve link requests from these organizations if we decide
            that: (a) the link would not make us look unfavorably to ourselves
            or to our accredited businesses; (b) the organization does not have
            any negative records with us; (c) the benefit to us from the
            visibility of the hyperlink compensates the absence of Airdrie
            Furniture Revival; and (d) the link is in the context of general
            resource information.
          </p>
          <p>
            These organizations may link to our home page so long as the link:
            (a) is not in any way deceptive; (b) does not falsely imply
            sponsorship, endorsement or approval of the linking party and its
            products or services; and (c) fits within the context of the linking
            party’s site.
          </p>
          <p>
            If you are one of the organizations listed in paragraph 2 above and
            are interested in linking to our website, you must inform us by
            sending an e-mail to Airdrie Furniture Revival. Please include your
            name, your organization name, contact information as well as the URL
            of your site, a list of any URLs from which you intend to link to
            our Website, and a list of the URLs on our site to which you would
            like to link. Wait 2-3 weeks for a response.
          </p>
          <p>Approved organizations may hyperlink to our Website as follows:</p>
          <p>By use of our corporate name; or</p>
          <p>By use of the uniform resource locator being linked to; or</p>
          <p>
            By use of any other description of our Website being linked to that
            makes sense within the context and format of content on the linking
            party’s site.
          </p>
          <p>
            No use of Airdrie Furniture Revival&#8217;s logo or other artwork
            will be allowed for linking absent a trademark license agreement.
          </p>
          <h2>iFrames</h2>
          <p>
            Without prior approval and written permission, you may not create
            frames around our Webpages that alter in any way the visual
            presentation or appearance of our Website.
          </p>
          <h2>Content Liability</h2>
          <p>
            We shall not be hold responsible for any content that appears on
            your Website. You agree to protect and defend us against all claims
            that is rising on your Website. No link(s) should appear on any
            Website that may be interpreted as libelous, obscene or criminal, or
            which infringes, otherwise violates, or advocates the infringement
            or other violation of, any third party rights.
          </p>
          <h2>Your Privacy</h2>
          <Link to="/privacy-policy">Please read Privacy Policy</Link>
          <p>Reservation of Rights</p>
          <p>
            We reserve the right to request that you remove all links or any
            particular link to our Website. You approve to immediately remove
            all links to our Website upon request. We also reserve the right to
            amen these terms and conditions and it’s linking policy at any time.
            By continuously linking to our Website, you agree to be bound to and
            follow these linking terms and conditions.
          </p>
          <h2>Removal of links from our website</h2>
          <p>
            If you find any link on our Website that is offensive for any
            reason, you are free to contact and inform us any moment. We will
            consider requests to remove links but we are not obligated to or so
            or to respond to you directly.
          </p>
          <p>
            We do not ensure that the information on this website is correct, we
            do not warrant its completeness or accuracy; nor do we promise to
            ensure that the website remains available or that the material on
            the website is kept up to date.
          </p>
          <h2>Disclaimer</h2>
          <p>
            To the maximum extent permitted by applicable law, we exclude all
            representations, warranties and conditions relating to our website
            and the use of this website. Nothing in this disclaimer will:
          </p>
          <p>
            limit or exclude our or your liability for death or personal injury;
          </p>
          <p>
            limit or exclude our or your liability for fraud or fraudulent
            misrepresentation;
          </p>
          <p>
            limit any of our or your liabilities in any way that is not
            permitted under applicable law; or
          </p>
          <p>
            exclude any of our or your liabilities that may not be excluded
            under applicable law.
          </p>
          <p>
            The limitations and prohibitions of liability set in this Section
            and elsewhere in this disclaimer: (a) are subject to the preceding
            paragraph; and (b) govern all liabilities arising under the
            disclaimer, including liabilities arising in contract, in tort and
            for breach of statutory duty.
          </p>
          <p>
            As long as the website and the information and services on the
            website are provided free of charge, we will not be liable for any
            loss or damage of any nature.
          </p>
        </div>
      </TermsConditionsPageStyled>
    </Layout>
  )
}

export default TermsConditionsPage
