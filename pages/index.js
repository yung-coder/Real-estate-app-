import Link from 'next/link';
import Banner from '../components/Banner';
import { Box , Flex } from '@chakra-ui/react';

import {baseUrl , fetchApi} from '../help/fetchApi';
import Property from '../components/Property';


export default function Home({proppertiesForsSale , proppertiesForsrent }) {
  return (
    <Box>
      <Banner 
        purpose='rent a home'
        title1="Rental homes for"
        title2="Everyone"
        desc1="Explore aparments , Villas , Homes"
        desc2="and more"
        buttonText="Explore Renting"
        linkname="/search?purpose-for-rental"
        imgeUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4"
      />
      <Flex flexWrap="wrap">
        {proppertiesForsrent.map((property) => <Property  property={property} key={property.id}/>)}
      </Flex>
      <Banner 
        purpose='Buy a home'
        title1="Buy it"
        title2="Everyone"
        desc1="Explore aparments , Villas , Homes"
        desc2="and more"
        buttonText="Explore Renting"
        linkname="/search?purpose-for-rental"
        imgeUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008"
      />
      <Flex flexWrap="wrap">
         {proppertiesForsSale.map((property) => <Property  property={property} key={property.id}/>)}
      </Flex>
    </Box>
  )
}



export async  function getStaticProps(){
  const proppertyForsSale = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`)
  const proppertyForsrent = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`)

  return{
    props:{
      proppertiesForsSale: proppertyForsSale?.hits,
      proppertiesForsrent: proppertyForsrent?.hits,
    }
  }
}