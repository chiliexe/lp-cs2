import BlogImage1 from "../../assets/image/agency/blog/blog-img1.png";
import BlogImage2 from "../../assets/image/agency/blog/blog-img2.png";
import BlogImage3 from "../../assets/image/agency/blog/blog-img3.png";
import Member1 from "../../assets/image/agency/team/member-1.jpg";
import Member2 from "../../assets/image/agency/team/member-2.jpg";
import Member3 from "../../assets/image/agency/team/member-3.jpg";
import Denny from "../../assets/image/agency/client/denny.png";
import Menny from "../../assets/image/agency/client/menny.png";

const data = {
  menuItems: [
    {
      label: "Feature",
      path: "#featureSection",
      offset: "80",
    },
    {
      label: "Work History",
      path: "#workHistorySection",
      offset: "67",
    },
    {
      label: "Portfolio",
      path: "#blogSection",
      offset: "67",
    },
    {
      label: "Quality feature",
      path: "#qualitySection",
      offset: "67",
    },
    {
      label: "Testimonial",
      path: "#testimonialSection",
      offset: "100",
    },
    {
      label: "Team Member",
      path: "#teamSection",
      offset: "67",
    },
    {
      label: "FAQ",
      path: "#faqSection",
      offset: "67",
    },
  ],
  aboutus: [
    {
      id: 1,
      title: "Amazing communication experience.",
      icon: "flaticon-next",
    },
    {
      id: 2,
      title: "Best designing experience with trending tools and sizes.",
      icon: "flaticon-next",
    },
    {
      id: 3,
      title: "Training and communication method remotely.",
      icon: "flaticon-next",
    },
    {
      id: 4,
      title: "24/7 Hour onine supports.",
      icon: "flaticon-next",
    },
  ],
  features: [
    {
      id: 1,
      icon: "flaticon-flask",
      title: "Search Optimization",
      description:
        "By using Search Engine Optimization, You will get more Clients",
    },
    {
      id: 2,
      icon: "flaticon-pencil-case",
      title: "Ui/UX Design",
      description:
        "We provide the best UI/UX Design by following the latest trends of the market .",
    },
    {
      id: 3,
      icon: "flaticon-ruler",
      title: "Wireframing Task",
      description:
        "We respect our customer opinions and deals with them with perfect wireframing ",
    },
    {
      id: 4,
      icon: "flaticon-startup",
      title: "Business Solutions",
      description:
        "We are commited to provide proper business solutions with reasonable pricing",
    },
    {
      id: 5,
      icon: "flaticon-briefing",
      title: "Business Analysis",
      description:
        "A day to day report about your ongoing business for proper understanding",
    },
    {
      id: 6,
      icon: "flaticon-creative",
      title: "Content Management",
      description:
        "Proper Content Management is important to find out the real clients for your agencies",
    },
  ],
  qualityFeature: [
    {
      id: 1,
      icon: "flaticon-flask",
      title: "Search Optimization",
      description:
        "By using Search Engine Optimization, You will get more Clients.",
    },
    {
      id: 2,
      icon: "flaticon-pencil-case",
      title: "Wireframing Task",
      description:
        "We respect our customer opinions and deals with them with perfect wireframing.",
    },
    {
      id: 3,
      icon: "flaticon-ruler",
      title: "Ui/Ux Design",
      description:
        "We provide the best UI/UX Design by following the latest trends of the market .",
    },
    {
      id: 4,
      icon: "flaticon-briefing",
      title: "Content Writting",
      description:
        "Proper Content Management is important to find out the real clients for your agencies .",
    },
  ],
  blog: [
    {
      id: 1,
      title: "Real home corporation",
      thumbnail_url: BlogImage1,
      date: "November 02, 2018",
      postLink: "#1",
    },
    {
      id: 2,
      title: "Sheltech developer ltd.",
      thumbnail_url: BlogImage2,
      date: "November 12, 2018",
      postLink: "#2",
    },
    {
      id: 3,
      title: "Alt architecture co.",
      thumbnail_url: BlogImage3,
      date: "December 09, 2018",
      postLink: "#3",
    },
  ],
  teamMember: [
    {
      id: 1,
      name: "Jessica Fanddy",
      thumbnail_url: Member1,
      designation: "Co Founder",
      social_links: [
        {
          id: 1,
          icon: "flaticon-facebook-logo",
          url: "#",
        },
        {
          id: 1,
          icon: "flaticon-twitter-logo-silhouette",
          url: "#",
        },
        {
          id: 1,
          icon: "flaticon-instagram",
          url: "#",
        },
        {
          id: 1,
          icon: "flaticon-dribble-logo",
          url: "#",
        },
      ],
    },
    {
      id: 2,
      name: "Devid Justingul",
      thumbnail_url: Member2,
      designation: "Senior Ui/UX Designer",
      social_links: [
        {
          id: 1,
          icon: "flaticon-facebook-logo",
          url: "#",
        },
        {
          id: 1,
          icon: "flaticon-twitter-logo-silhouette",
          url: "#",
        },
        {
          id: 1,
          icon: "flaticon-instagram",
          url: "#",
        },
        {
          id: 1,
          icon: "flaticon-dribble-logo",
          url: "#",
        },
      ],
    },
    {
      id: 3,
      name: "Handdy Albuzz",
      thumbnail_url: Member3,
      designation: "Article Writer",
      social_links: [
        {
          id: 1,
          icon: "flaticon-facebook-logo",
          url: "#",
        },
        {
          id: 1,
          icon: "flaticon-twitter-logo-silhouette",
          url: "#",
        },
        {
          id: 1,
          icon: "flaticon-instagram",
          url: "#",
        },
        {
          id: 1,
          icon: "flaticon-dribble-logo",
          url: "#",
        },
      ],
    },
  ],
  testimonial: [
    {
      id: 1,
      name: "Jon Doe",
      designation: "CEO of Denish Co.",
      comment:
        "Best working experience  with this amazing team & in future, we want to work together",
      avatar_url: Denny,
    },
    {
      id: 2,
      name: "Roman Ul Oman",
      designation: "Co-founder of QatarDiaries",
      comment:
        "Impressed with master class support of the team and really look forward for the future.",
      avatar_url: Menny,
    },
    {
      id: 3,
      name: "Jone Doe",
      designation: "Director of Beauty-queen",
      comment:
        "I have bought more than 10 themes on ThemeForest, and this is the first one I review. Wow! Amazing React Theme",
      avatar_url: Denny,
    },
    {
      id: 4,
      name: "Roman Ul Oman",
      designation: "Co-founder of QatarDiaries",
      comment:
        "Impressed with master class support of the team and really look forward for the future.",
      avatar_url: Menny,
    },
  ],
  faq: [
    {
      id: 1,
      expend: true,
      title: "O que é o BoltBank CashBack?",
      description:
        "Você já sonhou com soluções financeiras que vão além do convencional, moldadas para o futuro? O BoltBank é mais que uma simples fintech: somos sua parceira na revolução financeira! Oferecemos soluções criativas para empresas, e nosso destaque? Um sistema de cashback irresistível, projetado para transformar clientes em fãs leais e apaixonados. 🌐 Faça parte da revolução financeira! Conecte-se conosco e descubra como o BoltBank pode impulsionar seu negócio. 💼🚀",
    },
    {
      id: 2,
      title:
        "Qual é o investimento para desfrutar das vantagens do sistema de cashback do BoltBank? 💰",
      description:
        "🎉 Surpresa! Para os clientes, é absolutamente GRATUITO! 🎉Para todos os nossos queridos consumidores, basta baixar o aplicativo no celular e mergulhar em um mundo de benefícios, explorando a incrível rede de lojas parceiras que aguardam por você! E para nossas estimadas lojas parceiras, a única contribuição é o valor do cashback destinado aos fiéis consumidores do programa que escolhem comprar em seu estabelecimento. A isso, adiciona-se uma pequena porcentagem para custos administrativos. E adivinhe? Isso é tudo! Sem letras miúdas, sem custos ocultos e, definitivamente, sem pegadinhas. Transparente e direto, assim como toda parceria deve ser. 🛍️ Está pronto para fazer parte dessa revolução? Vamos começar e prosperar juntos! 🌟🚀",
    },
    {
      id: 3,
      title:
        "O cashback do BoltBank pode ser aplicado para qualquer produto da minha empresa?",
      description:
        "Sim, personalizamos o sistema de cashback de acordo com as necessidades exclusivas de sua empresa.",
    },
    {
      id: 4,
      title:
        "Como as lojas parceiras podem aceitar cashback como forma de pagamento? 💳",
      description:
        "Aceitar cashback como pagamento nunca foi tão fácil e intuitivo! Com o aplicativo exclusivo para lojas parceiras, você tem todo o poder na palma da sua mão. Veja como é simples: 1️⃣ Quando seu cliente optar por pagar com cashback, acesse a opção Receber Cashback no aplicativo. 2️⃣ Digite o valor da transação. 3️⃣ Seu cliente pode então se identificar de duas maneiras: Escaneando o QR Code do seu cartão virtual. Informando o CPF (e digitando a senha da conta para confirmação). Voilà! Em instantes, o valor é transferido da conta do cliente diretamente para a conta do seu estabelecimento. E o melhor? Seu saldo de cashback já estará disponível para ser usado em futuras compras de outros clientes. Aceitar e recompensar seus clientes com cashback é tão prático quanto parece. Experimente e surpreenda-se! 😉🎉",
    },
  ],
  menuWidget: [
    {
      id: 1,
      title: "About Us",
      menuItems: [
        {
          id: 1,
          url: "#1",
          text: "Support Center",
        },
        {
          id: 2,
          url: "#2",
          text: "Customer Support",
        },
        {
          id: 3,
          url: "#3",
          text: "About Us",
        },
        {
          id: 4,
          url: "#4",
          text: "Copyright",
        },
        {
          id: 5,
          url: "#5",
          text: "Popular Campaign",
        },
      ],
    },
    {
      id: 2,
      title: "Our Information",
      menuItems: [
        {
          id: 1,
          url: "#1",
          text: "Return Policy",
        },
        {
          id: 2,
          url: "#2",
          text: "Privacy Policy",
        },
        {
          id: 3,
          url: "#2",
          text: "Terms & Conditions",
        },
        {
          id: 4,
          url: "#4",
          text: "Site Map",
        },
        {
          id: 5,
          url: "#5",
          text: "Store Hours",
        },
      ],
    },
    {
      id: 3,
      title: "My Account",
      menuItems: [
        {
          id: 1,
          url: "#1",
          text: "Press inquiries",
        },
        {
          id: 2,
          url: "#2",
          text: "Social media directories",
        },
        {
          id: 3,
          url: "#3",
          text: "Images & B-roll",
        },
        {
          id: 4,
          url: "#4",
          text: "Permissions",
        },
        {
          id: 5,
          url: "#5",
          text: "Speaker requests",
        },
      ],
    },
    {
      id: 4,
      title: "Policy",
      menuItems: [
        {
          id: 1,
          url: "#1",
          text: "Application security",
        },
        {
          id: 2,
          url: "#2",
          text: "Software principles",
        },
        {
          id: 3,
          url: "#3",
          text: "Unwanted software policy",
        },
        {
          id: 4,
          url: "#4",
          text: "Responsible supply chain",
        },
      ],
    },
  ],
  social_profile: [
    {
      id: 1,
      icon: "flaticon-facebook-logo",
      link: "#1",
    },
    {
      id: 2,
      icon: "flaticon-twitter-logo-silhouette",
      link: "#2",
    },
    {
      id: 3,
      icon: "flaticon-instagram",
      link: "#3",
    },
    {
      id: 4,
      icon: "flaticon-tumblr-logo",
      link: "#4",
    },
    {
      id: 5,
      icon: "flaticon-dribble-logo",
      link: "#5",
    },
  ],
};
export default data;
