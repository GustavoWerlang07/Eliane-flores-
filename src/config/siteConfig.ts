/**
 * Configuração central da loja Eliane Flores Moda Fitness.
 * Altere facilmente contatos, links, redes sociais e textos neste arquivo.
 */

export interface ContactButton {
  id: string;
  title: string;
  description: string;
  iconName: 'Wallet' | 'CreditCard' | 'ShoppingBag' | 'Instagram' | 'MapPin' | 'Star';
  url: string;
  phone?: string;
  badge?: string;
  isExternal?: boolean;
}

export interface SiteConfig {
  storeName: string;
  storeLegalName: string;
  mainPhrase: string;
  complementaryText?: string;
  footerSlogan: string;
  copyrightYear: number;
  logo: {
    src: string;
    alt: string;
    originalSrc: string;
  };
  buttons: ContactButton[];
}

export const siteConfig: SiteConfig = {
  storeName: 'ELIANE FLORES MODA FITNESS',
  storeLegalName: 'Eliane Flores Moda Fitness',
  mainPhrase: 'Seu estilo acompanha seu movimento.',
  footerSlogan: 'Vista sua melhor versão.',
  copyrightYear: 2026,
  logo: {
    src: '/assets/logo.png',
    alt: 'Logotipo Oficial Eliane Flores Moda Fitness',
    originalSrc: '/assets/aistudio/Design_sem_nome_075501d0.png',
  },
  // ATENÇÃO: Os seis botões devem permanecer rigorosamente nesta ordem solicitada.
  buttons: [
    {
      id: 'financeiro-caixa',
      title: 'Financeiro / Caixa',
      description: 'Pagamentos, parcelas e informações financeiras.',
      iconName: 'CreditCard',
      url: 'https://wa.me/5566999003678',
      phone: '(66) 99900-3678',
      badge: 'WhatsApp',
      isExternal: true,
    },
    {
      id: 'vendas-1',
      title: 'Vendas 1',
      description: 'Fale com uma de nossas vendedoras.',
      iconName: 'ShoppingBag',
      url: 'https://wa.me/5566999991092',
      phone: '(66) 99999-1092',
      badge: 'WhatsApp',
      isExternal: true,
    },
    {
      id: 'vendas-2',
      title: 'Vendas 2',
      description: 'Fale com uma de nossas vendedoras.',
      iconName: 'ShoppingBag',
      url: 'https://wa.me/5566992825125',
      phone: '(66) 99282-5125',
      badge: 'WhatsApp',
      isExternal: true,
    },
    {
      id: 'instagram',
      title: 'Nosso Instagram',
      description: 'Novidades, looks e lançamentos.',
      iconName: 'Instagram',
      url: 'https://www.instagram.com/eliane_modafitness/',
      badge: '@eliane_modafitness',
      isExternal: true,
    },
    {
      id: 'localizacao',
      title: 'Nossa Localização',
      description: 'Venha conhecer nossa loja.',
      iconName: 'MapPin',
      url: 'https://maps.app.goo.gl/EtCHYF9SknSe9xDz6',
      badge: 'Google Maps',
      isExternal: true,
    },
    {
      id: 'avaliacao-google',
      title: 'Avalie nossa loja',
      description: 'Sua opinião faz a diferença!',
      iconName: 'Star',
      url: 'https://search.google.com/local/writereview?placeid=ChIJR2F6cZaBp5MRP-lWQcUkvH0',
      badge: '5.0 ★ Google',
      isExternal: true,
    },
  ],
};
