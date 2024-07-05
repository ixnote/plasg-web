import settingsIcon from "@/assets/icons/layouts/settings-pink.svg"
import healthIcon from "@/assets/icons/layouts/heartIcon.svg"
import governmentIcon from "@/assets/icons/layouts/governmentIcon.svg"
import businessIcon from "@/assets/icons/layouts/business.svg"
import newsImage1 from "@/assets/imgs/newsImg1.jpg"
import newsImage2 from "@/assets/imgs/newsImg2.jpg"
import newsImage3 from "@/assets/imgs/newsImg3.jpg"
import newsImage4 from "@/assets/imgs/newsImg4.jpg"



export const itemList = [
    {   
     id: 1,
     icon: settingsIcon,
     logoText:"Service",
     updated:"Updated Yesterday",
     description:"Driver's License Application Status Check",
     button1text:"View",
    },
    {
     id: 2,
     icon:healthIcon,
     logoText:"Health",
     description:"Discover comprehensive healthcare resources in Plateau State. Access downloadable documents, detailed reports, helpful articles, and essential information to stay informed and healthy.",
     button1text:"View Topic",
    },
    {
     id: 3,
     icon:governmentIcon,
     logoText:"Governance",
     description:"Stay informed about the governance of Plateau State. Access downloadable reports on government spending, debt management, budget performance, and more. Find all the essential information to understand how your state is managed and how decisions impact you.",
     button1text:"View Topic",
    },
    {
     id: 4,
     icon:businessIcon,
     logoText:"Business",
     description:"Discover everything you need to know about doing business in Plateau State. Access downloadable business reports, economic policies, business incentives, and more. Get the latest information to help you grow and succeed in our thriving economic landscape.",
     button1text:"View Topic",
    },

]
export const newsList = [
    {   
     id: 1,
     date:"17th May 2024",
     image: newsImage1,
     topic:"Digital Literacy Program Expands to Rural Communities",
     text:"The Plateau State ICT Development Agency extends its digital literacy programs to rural areas, ensuring inclusive access to technology and internet skills.",
    },
    {   
     id: 2,
     date:"17th May 2024",
     image: newsImage2,
     topic:"Cybersecurity Awareness Campaign Kicks Off in Plateau State",
     text:"The ICT Development Agency launches a state-wide cybersecurity awareness campaign to educate citizens on protecting themselves online.",
    },
    {   
     id: 3,
     date:"17th May 2024",
     image:  newsImage3,
     topic:"e-Government Portal Launched for Efficient Public Service Delivery",
     text:"The launch of an e-government portal by the Plateau State ICT Development Agency streamlines public services, making them more accessible and efficient for citizens.",
    },
    {   
     id: 4,
     date:"17th May 2024",
     image:newsImage4,
     topic:"ICT Training Programs Empower Plateau Young Women",
     text:"New initiatives by the ICT Development Agency offer extensive training programs in coding, cybersecurity, and digital marketing to empower the young women.",
    },

] 
  