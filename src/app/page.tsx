import Image from 'next/image'
import picture from '../image/ersoy_alap.jpeg'

import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Ersoy Alap',
  description: "In 2001, He graduated from Middle East Technical University Department Of Industrial Design. During his time in the school, he studied cinema, movie production, photography, and history of art. Also, he included gravure printing to his studies. After he graduated, he worked on a lot of important introductory films including Ministry of Culture and Tourism's 'Turkey Film 2003' as an assistant director. In 2005, He founded his own Visual Art and Production company. He had the privilege to work with industry leading fashion and advertising magazines and companies as a photographer and filmmaker. For the duration, he experimented printing techniques with different materials. Other than experimenting with surrealistic and abstract photography, he works on his paintings at his Datca and Istanbul studios.",
}

export default function Home() {
  return (
    <Image src={picture}  alt={"One of Ersoy Alap's painting"} />
      )
}
