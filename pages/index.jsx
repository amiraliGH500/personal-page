import React from 'react'
import Header from '../components/Header'
import Head from 'next/head'
import Nav from '../components/Nav'
import Section from '../components/Section'
import Footer from '../components/Footer'

function Index() {
  return (
    <div>
      <Head>
        <title>
          amirali ghasemi
        </title>
      </Head>  
      <Header/>
      <Nav/>
      <Section/>
      <Footer/>
    </div>
  )
}

export default Index