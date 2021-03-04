import * as React from "react"
import Layout from '../../components/Layout';
import PageTitle from "../../components/PageTitle";
import {Link} from 'gatsby';


// markup
const IndexPage = () => {
  
  return (
    <Layout>
      <PageTitle title="Work" />
        <main className="p-20">
        <title>Home Page</title>
        <div className="flex flex-col">
          <Link to="/product/plant-1">Product one</Link>
          <Link to="/product/plant-2">Product two</Link>
        </div>
          
        </main>
    </Layout>
  )
}

export default IndexPage

