import React from 'react'
import styled from 'styled-components'
import Img from "gatsby-image";
import { SEO } from '../components'
import { graphql } from 'gatsby'
import {ProjectData} from '../pages/projects'

type ProjectType = {
  data: {
    sanityProject: ProjectData
  }
}



const ProjectGrid = styled.article``

function Project({data: {sanityProject}} : ProjectType) {
  return (
    <>
<SEO title={sanityProject.name} image={sanityProject.mainImage?.asset?.fluid?.src} />
<ProjectGrid>
  <Img fluid={sanityProject.mainImage.asset.fluid} />
  <div>
    <h2 >{sanityProject.name}</h2>
    {/* <ul>
      {project.toppings.map((topping) => (
        <li key={topping.id}>{topping.name}</li>
      ))}
    </ul> */}
  </div>
</ProjectGrid>
</>
)
}

export const query = graphql`
query SinlgeProjectPageQuery($slug: String) {
  sanityProject(slug: {current: { eq: $slug}}) {
      id
      name
      slug {
        current
      }
      projectUrl
      tags {
        name
      }
      mainImage {
        asset {
          fluid(maxWidth: 500) {
            ...GatsbySanityImageFluid
          }
        }
      }
      publishedAt(formatString: "MMM YYYY")
      startedAt(formatString: "MMM YYYY")
      endedAt(formatString: "MMM YYYY")
      _rawDescription
    }
  }
`

export default Project
