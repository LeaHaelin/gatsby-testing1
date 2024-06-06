import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

function Navbar() {
    const data = useStaticQuery(graphql`
    query{
        site {
          siteMetadata {
            title
          }
        }
      }
   `)
    return (
        <nav>
            <div className='logo'>
                <StaticImage src='../images/icon.png' alt='logo' placeholder="blurred"
                    layout="fixed"
                    width={36} height={36} />
                <h1>{data.site.siteMetadata.title}</h1>
            </div>
            <div className='links'>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/service'>Services</Link>
                <Link to='../projects/project'>Projects</Link>
            </div>
        </nav>
    )
}

export default Navbar