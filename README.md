# Eliane Flores Moda Fitness — Mini Site Oficial

Central digital de contatos oficial da **Eliane Flores Moda Fitness**, especializada em roupas fitness femininas de alta performance e sofisticação.

## 🚀 Como Hospedar na Vercel

O projeto está 100% configurado para publicação direta e instantânea na Vercel via Git (GitHub/GitLab/Bitbucket) ou Vercel CLI.

### Método 1: Pela Interface Web da Vercel (Recomendado)
1. Suba este repositório para o seu **GitHub**.
2. Acesse [vercel.com](https://vercel.com) e clique em **Add New... > Project**.
3. Selecione o repositório do projeto.
4. A Vercel detectará automaticamente o framework:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
5. Clique em **Deploy**. Em poucos segundos o seu site estará no ar com HTTPS gratuito e CDN global ultra rápida!

### Método 2: Pela Linha de Comando (Vercel CLI)
```bash
# 1. Instale a CLI da Vercel globalmente
npm i -g vercel

# 2. Faça o login
vercel login

# 3. Execute o deploy
vercel --prod
```

---

## ⚙️ Como Alterar Contatos e Links Facilmente

Todos os textos, links, números de WhatsApp e redes sociais estão centralizados em um único arquivo de configuração:
📁 `src/config/siteConfig.ts`

Basta abrir este arquivo para atualizar qualquer número de telefone, link ou frase.

---

## 🛠️ Tecnologias Utilizadas
- **React 19**
- **TypeScript**
- **Tailwind CSS v4**
- **Motion (Framer Motion)**
- **Lucide Icons**
- **Vite**
