import Layout from '../components/Layout'
import type { NextPage } from 'next'
import Hero from '../components/HeroComponent'
import Pricing from '../components/Pricing'
import FeatureBlocks from '../components/FeatureBlocks'
import FeatureGrid from '../components/FeatureGrid'
import CTA from '../components/CTA'
import AboutUs from '../components/AboutUs'
// import Link from 'next/link'

const IndexPage: NextPage = () => (
  <Layout title="Home">
    <div className="bg-white">
      <Hero
        img={{
          alt: 'People working on laptops',
          src:
            "https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-1.2.1&ixqx=r77uz9tGoI&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80",
        }}
        primary={
          <div>
            <div className="block xl:inline"> Knowledge that will</div>
            <div className="block xl:inline"> last <span className="text-brand-600 xl:inline">a lifetime</span></div>
          </div>
        }
        secondary="Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua."
      />

      <FeatureBlocks />
      <CTA />
      <FeatureGrid/>
      <Pricing/>
      <AboutUs />
    </div>
  </Layout>
)

export default IndexPage
